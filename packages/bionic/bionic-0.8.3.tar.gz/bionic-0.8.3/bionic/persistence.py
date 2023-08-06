"""
This module provides local and cloud storage of computed values.  The main
point of entry is the PersistentCache, which encapsulates this functionality.
"""

import attr
import os
import shutil
import tempfile
import yaml
import warnings
from uuid import uuid4
from pathlib import Path

from bionic.exception import EntitySerializationError, UnsupportedSerializedValueError
from .datatypes import Result
from .gcs import GcsTool
from .utils.files import (
    ensure_dir_exists,
    ensure_parent_dir_exists,
    recursively_copy_path,
)
from .utils.misc import hash_simple_obj_to_hex, oneline
from .utils.urls import (
    derelativize_url,
    path_from_url,
    relativize_url,
    url_from_path,
)
from .tokenization import tokenize

import logging

logger = logging.getLogger(__name__)

try:
    # The C-based YAML emitter is much faster, but requires separate bindings
    # which may not be installed.
    YamlDumper = yaml.CDumper
    YamlLoader = yaml.CLoader
except AttributeError:
    running_under_readthedocs = os.environ.get("READTHEDOCS") == "True"
    if not running_under_readthedocs:
        warnings.warn(
            oneline(
                """
            Failed to find LibYAML bindings;
            falling back to slower Python implementation.
            This may reduce performance on large flows.
            Installing LibYAML should resolve this."""
            )
        )
    YamlDumper = yaml.Dumper
    YamlLoader = yaml.Loader


class PersistentCache:
    """
    Provides a persistent mapping between Queries (things we could compute) and
    saved Results (computed Queries).  You use it by getting a CacheAccessor
    for your specific query, and then performing load/save operations on the
    accessor.

    When looking up a Query, the cache searches for a saved artifact with a
    matching Query.  The Query may not match exactly: each Query contains a
    Provenance, which represents all the code and data used to compute a value,
    and two Provenances can match at different levels of precision, from a
    "functional" match to an "exact" one.  A functional match is sufficient to
    treat two artifacts as interchangeable; the finer levels of matching are
    only used by the "assisted versioning" system, which tries to detect
    situations where a function's bytecode has changed but its version hasn't.

    The cache has two tiers: a "local" tier on disk, which is cheap to access,
    and an optional "cloud" tier backed by GCS, which is more expensive to
    access (but globally accessible).  For load operations, the cache returns
    the cheapest artifact that functionally matches the Query.  For save
    operations, the cache records an exact entry in both tiers.

    The cache actually has two distinct responsibilities: (a) translating
    between in-memory Python objects and serialized files or blobs, and (b)
    maintaining an "inventory" of these files and blobs.  Currently it makes
    sense to group these responsibilities together at each tier, where the
    local inventory tracks the local files and the cloud inventory tracks the
    cloud blobs.  Each of these tiers is handled by a "store" class.  However,
    in the future we may have other types of persistent artifacts (like
    database tables) which don't have their own inventory type.  In this case
    we might want to split these responsibilities out.
    """

    def __init__(self, local_store, cloud_store):
        self._local_store = local_store
        self._cloud_store = cloud_store

    def get_accessor(self, query):
        return CacheAccessor(self, query)


class CacheAccessor:
    """
    Provides a reference to the cache entries for a specific query.  This
    interface is convenient, and it also allows us to maintain some memoized
    state for each query, saving redundant lookups.
    """

    def __init__(self, parent_cache, query):
        self.query = query
        self.value_filename_stem = valid_filename_from_query(self.query) + "."

        self._local = parent_cache._local_store
        self._cloud = parent_cache._cloud_store

        # These values are memoized to avoid roundtrips.
        self._stored_local_entry = None
        self._stored_cloud_entry = None

    def flush_stored_entries(self):
        """
        Flushes the stored local and cloud cached entries.
        """
        self._stored_local_entry = None
        self._stored_cloud_entry = None

    def can_load(self):
        """
        Indicates whether there are any cached artifacts for this query.
        """

        try:
            return self._get_nearest_entry_with_artifact() is not None
        except InternalCacheStateError as e:
            self._raise_state_error_with_explanation(e)

    def load_provenance(self):
        """
        Returns the provenance of the nearest cached artifact for this query,
        if one exists.
        """

        try:
            entry = self._get_nearest_entry_with_artifact()
            if entry is None:
                return None
            return entry.provenance
        except InternalCacheStateError as e:
            self._raise_state_error_with_explanation(e)

    def load_result(self):
        """
        Returns a Result for the nearest cached artifact for this query, if one
        exists.
        """

        try:
            entry = self._get_nearest_entry_with_artifact()

            if entry is None:
                return None

            if entry.tier == "local":
                file_path = path_from_url(entry.artifact_url)

            elif entry.tier == "cloud":
                blob_url = entry.artifact_url
                file_path = self._file_from_blob(blob_url)

            else:
                raise AssertionError("Unrecognized tier: " + entry.tier)

            value = self._value_from_file(file_path)
            value_hash = self.query.protocol.tokenize_file(file_path)

            return Result(
                query=self.query,
                value=value,
                file_path=file_path,
                value_hash=value_hash,
            )
        except InternalCacheStateError as e:
            self._raise_state_error_with_explanation(e)

    def load_result_value_hash(self):
        """
        Returns only the value hash for the nearest cached artifact for
        this query, if one exists.
        """

        try:
            entry = self._get_nearest_entry_with_artifact()

            if entry is None:
                return None

            return entry.value_hash
        except InternalCacheStateError as e:
            self._raise_state_error_with_explanation(e)

    def save_result(self, result):
        """
        Saves a Result in each cache layer that doesn't already have an exact
        match.
        """

        try:
            self._save_or_reregister_result(result)
        except InternalCacheStateError as e:
            self._raise_state_error_with_explanation(e)

    def update_provenance(self):
        """
        Adds an entry to each cache layer that doesn't already have an exact
        match for this query.  There must be already be at least one cached
        functional match -- i.e., ``can_load()`` must already return True.
        """

        try:
            self._save_or_reregister_result(None)
        except InternalCacheStateError as e:
            self._raise_state_error_with_explanation(e)

    def _save_or_reregister_result(self, result):
        local_entry = self._get_local_entry()
        cloud_entry = self._get_cloud_entry()
        self.flush_stored_entries()

        if result is not None:
            value_wrapper = NullableWrapper(result.value)
            file_path = result.file_path
            value_hash = result.value_hash
        else:
            value_wrapper = None
            file_path = None
            value_hash = None

        blob_url = None

        if file_path is None:
            if local_entry.has_artifact:
                file_path = path_from_url(local_entry.artifact_url)
                value_hash = local_entry.value_hash
            elif value_wrapper is not None:
                file_path = self._file_from_value(value_wrapper.value)
                value_hash = self.query.protocol.tokenize_file(file_path)
            else:
                if cloud_entry is None or not cloud_entry.has_artifact:
                    raise AssertionError(
                        oneline(
                            """
                        Attempted to register metadata with no result
                        argument and no previously saved values;
                        this suggests we called update_provenance() without
                        previously finding a cached value, which shouldn't
                        happen."""
                        )
                    )
                blob_url = cloud_entry.artifact_url
                file_path = self._file_from_blob(blob_url)
                value_hash = cloud_entry.value_hash

        if not local_entry.exactly_matches_query:
            file_url = url_from_path(file_path)
            local_entry = self._local.inventory.register_url(
                self.query, file_url, value_hash,
            )
        self._stored_local_entry = local_entry

        if self._cloud:
            assert cloud_entry is not None
            if not cloud_entry.exactly_matches_query:
                if blob_url is None:
                    if cloud_entry.has_artifact:
                        blob_url = cloud_entry.artifact_url
                    else:
                        blob_url = self._blob_from_file(file_path)
                cloud_entry = self._cloud.inventory.register_url(
                    self.query, blob_url, value_hash,
                )
            self._stored_cloud_entry = cloud_entry

    def _get_nearest_entry_with_artifact(self):
        """
        Returns the "nearest" -- i.e., most local -- cache entry for this
        query.
        """

        local_entry = self._get_local_entry()
        if local_entry.has_artifact:
            return local_entry

        cloud_entry = self._get_cloud_entry()
        if cloud_entry is not None and cloud_entry.has_artifact:
            return cloud_entry

        return None

    def _get_local_entry(self):
        if self._stored_local_entry is None:
            self._stored_local_entry = self._local.inventory.find_entry(self.query)
        return self._stored_local_entry

    def _get_cloud_entry(self):
        if self._stored_cloud_entry is None:
            if self._cloud is None:
                return None
            self._stored_cloud_entry = self._cloud.inventory.find_entry(self.query)
        return self._stored_cloud_entry

    def _file_from_blob(self, blob_url):
        dir_path = self._local.generate_unique_dir_path(self.query)
        filename = path_from_url(blob_url).name
        file_path = dir_path / filename

        ensure_parent_dir_exists(file_path)

        logger.info("Downloading %s from GCS ...", self.query.task_key)
        try:
            self._cloud.download(file_path, blob_url)
        except Exception as e:
            raise InternalCacheStateError.from_failure("artifact blob", blob_url, e)

        return file_path

    def _blob_from_file(self, file_path):
        url_prefix = self._cloud.generate_unique_url_prefix(self.query)
        blob_url = url_prefix + "/" + file_path.name

        logger.info("Uploading %s to GCS ...", self.query.task_key)
        try:
            self._cloud.upload(file_path, blob_url)
        except Exception as e:
            raise InternalCacheStateError.from_failure("artifact file", file_path, e)

        return blob_url

    def _file_from_value(self, value):
        dir_path = self._local.generate_unique_dir_path(self.query)

        extension = self.query.protocol.file_extension_for_value(value)
        value_filename = self.value_filename_stem + extension
        value_path = dir_path / value_filename

        ensure_parent_dir_exists(value_path)
        try:
            self.query.protocol.write(value, value_path)
        except Exception as e:
            # TODO Should we rename this to just SerializationError?
            raise EntitySerializationError(
                oneline(
                    f"""
                Value of descriptor {self.query.dnode.to_descriptor()!r}
                could not be serialized to disk
                """
                )
            ) from e

        return value_path

    def _value_from_file(self, file_path):
        value_filename = file_path.name
        extension = value_filename[len(self.value_filename_stem) :]
        try:
            return self.query.protocol.read_with_extension(file_path, extension)

        except UnsupportedSerializedValueError:
            raise
        except Exception as e:
            raise InternalCacheStateError.from_failure("artifact file", file_path, e)

    def _raise_state_error_with_explanation(self, source_exc):
        stores = [self._local]
        if self._cloud:
            stores.append(self._cloud)
        inventory_root_urls = (
            " and ".join(store.inventory.root_url for store in stores),
        )

        raise InvalidCacheStateError(
            oneline(
                f"""
                    Cached data may be in an invalid state; this should be
                    impossible but could have resulted from either a bug or a
                    change to the cached files. You should be able to repair
                    the problem by removing all cached files under
                    {inventory_root_urls}."""
            )
        ) from source_exc


@attr.s(frozen=True)
class NullableWrapper:
    """
    A simple wrapper for a value that might be None.  We use this when we want
    to distinguish between "we have a value which is None" from "we don't have a
    value".
    """

    value = attr.ib()


@attr.s(frozen=True)
class InventoryEntry:
    """
    Represents a saved artifact tracked by an Inventory; returned by Inventory
    to CacheAccessor.
    """

    tier = attr.ib()
    has_artifact = attr.ib()
    artifact_url = attr.ib()
    provenance = attr.ib()
    exactly_matches_query = attr.ib()
    value_hash = attr.ib()


@attr.s(frozen=True)
class MetadataMatch:
    """
    Represents a match between a query and a saved artifact.  `level` is a string
    describing the match level, ranging from "functional" to "exact".
    """

    metadata_url = attr.ib()
    level = attr.ib()


# TODO Should we merge this with InventoryEntry?
@attr.s(frozen=True)
class ExternalCacheItem:
    """
    Represents an inventory entry, but contains data intended to be exposed to users
    via the Cache class.
    """

    inventory = attr.ib()
    abs_artifact_url = attr.ib()
    abs_metadata_url = attr.ib()
    descriptor = attr.ib()


class Inventory:
    """
    Maintains a persistent mapping from Queries to artifact URLs.  An Inventory
    is backed by a "file system", which could correspond to either a local disk
    or a cloud storage service.  This file system is used to store
    metadata records, each of which describes a Query and an artifact URL that
    satisfies it. Metadata records are stored using a hierarchical naming
    scheme whose levels correspond to the different levels of Provenance
    matching.
    """

    def __init__(self, name, tier, filesystem):
        self.name = name
        self.tier = tier
        self._fs = filesystem
        self.root_url = filesystem.root_url

    def register_url(self, query, url, value_hash):
        """
        Records metadata indicating that the provided Query is satisfied
        by the provided URL, and returns a corresponding InventoryEntry.
        """

        logger.debug(
            "In     %s inventory for %r, saving artifact URL %s ...",
            self.tier,
            query,
            url,
        )

        expected_metadata_url = self._exact_metadata_url_for_query(query)
        metadata_record = None
        if self._fs.exists(expected_metadata_url):
            # This shouldn't happen, because the CacheAccessor shouldn't write
            # to this inventory if we already have an exact match.
            logger.warn(
                "In %s cache, attempted to create duplicate entry mapping %r " "to %s",
                self.tier,
                query,
                url,
            )
            metadata_record = self._load_metadata_if_valid_else_delete(
                expected_metadata_url,
            )

        if metadata_record is None:
            metadata_url, metadata_record = self._create_and_write_metadata(
                query, url, value_hash,
            )

            assert metadata_url == expected_metadata_url
            logger.debug(
                "... in %s inventory for %r, created metadata record at %s",
                self.tier,
                query,
                metadata_url,
            )

        return InventoryEntry(
            tier=self.tier,
            has_artifact=True,
            artifact_url=url,
            provenance=metadata_record.provenance,
            exactly_matches_query=True,
            value_hash=metadata_record.value_hash,
        )

    def find_entry(self, query):
        """
        Returns an InventoryEntry describing the closest match to the provided
        Query.
        """

        logger.debug("In     %s inventory for %r, searching ...", self.tier, query)

        n_prior_attempts = 0
        while True:
            if n_prior_attempts in (10, 100, 1000, 10000, 100000, 1000000):
                message = f"""
                While searching in the {self.tier} cache for an entry matching
                {query!r}, found {n_prior_attempts} invalid metadata files;
                either a lot of artifact files were manually deleted,
                or there's a bug in the cache code
                """
                if n_prior_attempts == 1000000:
                    raise AssertionError("Giving up: " + oneline(message))
                else:
                    logger.warn(oneline(message))
            n_prior_attempts += 1

            match = self._find_best_match(query)
            if not match:
                logger.debug(
                    "... in %s inventory for %r, found no match", self.tier, query
                )

                return InventoryEntry(
                    tier=self.tier,
                    has_artifact=False,
                    artifact_url=None,
                    provenance=None,
                    exactly_matches_query=False,
                    value_hash=None,
                )

            metadata_record = self._load_metadata_if_valid_else_delete(
                match.metadata_url
            )
            if metadata_record is None:
                continue

            logger.debug(
                "... in %s inventory for %r, found %s match at %s",
                self.tier,
                query,
                match.level,
                match.metadata_url,
            )

            return InventoryEntry(
                tier=self.tier,
                has_artifact=True,
                artifact_url=metadata_record.artifact_url,
                provenance=metadata_record.provenance,
                exactly_matches_query=(match.level == "exact"),
                value_hash=metadata_record.value_hash,
            )

    def list_items(self):
        metadata_urls = [
            url for url in self._fs.search(self.root_url) if url.endswith(".yaml")
        ]

        for metadata_url in metadata_urls:
            metadata_record = self._load_metadata_if_valid_else_delete(metadata_url)
            if metadata_record is None:
                continue
            artifact_url = metadata_record.artifact_url
            yield ExternalCacheItem(
                inventory=self,
                abs_artifact_url=derelativize_url(artifact_url, metadata_url),
                abs_metadata_url=metadata_url,
                descriptor=metadata_record.descriptor,
            )

    def delete_url(self, url):
        return self._fs.delete(url)

    def _find_best_match(self, query):
        equivalent_url_prefix = self._equivalent_metadata_url_prefix_for_query(query)
        possible_urls = self._fs.search(equivalent_url_prefix)
        equivalent_urls = [url for url in possible_urls if url.endswith(".yaml")]
        if len(equivalent_urls) == 0:
            return None

        exact_url = self._exact_metadata_url_for_query(query)
        if exact_url in equivalent_urls:
            return MetadataMatch(metadata_url=exact_url, level="exact",)

        samecode_url_prefix = self._samecode_metadata_url_prefix_for_query(query)
        samecode_urls = [
            url for url in equivalent_urls if url.startswith(samecode_url_prefix)
        ]
        if len(samecode_urls) > 0:
            return MetadataMatch(metadata_url=samecode_urls[0], level="samecode",)

        nominal_url_prefix = self._nominal_metadata_url_prefix_for_query(query)
        nominal_urls = [
            url for url in equivalent_urls if url.startswith(nominal_url_prefix)
        ]
        if len(nominal_urls) > 0:
            return MetadataMatch(metadata_url=nominal_urls[0], level="nominal",)

        return MetadataMatch(metadata_url=equivalent_urls[0], level="equivalent",)

    def _equivalent_metadata_url_prefix_for_query(self, query):
        return (
            self._fs.root_url
            + "/"
            + valid_filename_from_query(query)
            + "/"
            + query.provenance.functional_hash
        )

    def _nominal_metadata_url_prefix_for_query(self, query):
        minor_version_token = tokenize(query.provenance.code_version_minor)
        return (
            self._equivalent_metadata_url_prefix_for_query(query)
            + "/"
            + "mv_"
            + minor_version_token
        )

    def _samecode_metadata_url_prefix_for_query(self, query):
        return (
            self._nominal_metadata_url_prefix_for_query(query)
            + "/"
            + "bc_"
            + query.provenance.bytecode_hash
        )

    def _exact_metadata_url_for_query(self, query):
        filename = f"metadata_{query.provenance.exact_hash}.yaml"
        return self._nominal_metadata_url_prefix_for_query(query) + "/" + filename

    def _load_metadata_if_valid_else_delete(self, url):
        try:
            metadata_yaml = self._fs.read_bytes(url).decode("utf8")
            metadata_record = ArtifactMetadataRecord.from_yaml(metadata_yaml, url)
        except Exception as e:
            raise InternalCacheStateError.from_failure("metadata record", url, e)

        if not self._fs.exists(metadata_record.artifact_url):
            logger.info(
                "Found invalid metadata record at %s, "
                "referring to nonexistent artifact at %s; "
                "deleting metadata record",
                url,
                metadata_record.artifact_url,
            )
            self.delete_url(url)
            return None

        else:
            return metadata_record

    def _create_and_write_metadata(self, query, artifact_url, value_hash):
        metadata_url = self._exact_metadata_url_for_query(query)

        metadata_record = ArtifactMetadataRecord.from_content(
            dnode=query.dnode,
            artifact_url=artifact_url,
            provenance=query.provenance,
            metadata_url=metadata_url,
            value_hash=value_hash,
        )

        self._fs.write_bytes(metadata_record.to_yaml().encode("utf8"), metadata_url)

        return metadata_url, metadata_record


class LocalStore:
    """
    Represents the local disk cache.  Provides both an Inventory that manages
    artifact (file) URLs, and a method to generate those URLs (for creating
    new files).
    """

    def __init__(self, root_path_str):
        root_path = Path(root_path_str).absolute()
        self._artifact_root_path = root_path / "artifacts"

        inventory_root_path = root_path / "inventory"
        tmp_root_path = root_path / "tmp"
        self.inventory = Inventory(
            "local disk", "local", LocalFilesystem(inventory_root_path, tmp_root_path)
        )

    def generate_unique_dir_path(self, query):
        n_attempts = 0
        while True:
            # TODO This path can be anything as long as it's unique, so we
            # could make it more human-readable.
            path = (
                self._artifact_root_path
                / valid_filename_from_query(query)
                / str(uuid4())
            )

            if not path.exists():
                return path
            else:
                n_attempts += 1
                if n_attempts > 3:
                    raise AssertionError(
                        oneline(
                            f"""
                        Repeatedly failed to randomly generate a novel
                        directory name; {path} already exists"""
                        )
                    )


class GcsCloudStore:
    """
    Represents the GCS cloud cache.  Provides both an Inventory that manages
    artifact (blob) URLs, and a method to generate those URLs (for creating
    those blobs).
    """

    def __init__(self, url):
        self._tool = GcsTool(url)

        self.inventory = Inventory(
            "GCS", "cloud", GcsFilesystem(self._tool, "/inventory")
        )
        self._artifact_root_url_prefix = url + "/artifacts"

    def generate_unique_url_prefix(self, query):
        n_attempts = 0
        while True:
            # TODO This path can be anything as long as it's unique, so we
            # could make it more human-readable.
            url_prefix = "/".join(
                [
                    str(self._artifact_root_url_prefix),
                    valid_filename_from_query(query),
                    str(uuid4()),
                ]
            )

            matching_blobs = self._tool.blobs_matching_url_prefix(url_prefix)
            if len(list(matching_blobs)) == 0:
                return url_prefix
            else:
                n_attempts += 1
                if n_attempts > 3:
                    raise AssertionError(
                        oneline(
                            f"""
                        Repeatedly failed to randomly generate a novel
                        blob name; {self._artifact_root_url_prefix}
                        already exists"""
                        )
                    )

    def upload(self, path, url):
        # TODO For large individual files, we may still want to use gsutil.
        if path.is_dir():
            self._tool.gsutil_cp(str(path), url)
        else:
            assert path.is_file()
            self._tool.blob_from_url(url).upload_from_filename(str(path))

    def download(self, path, url):
        blob = self._tool.blob_from_url(url)
        # TODO For large individual files, we may still want to use gsutil.
        if not blob.exists():
            # `gsutil cp -r gs://A/B X/Y` doesn't work when B contains
            # multiple files and Y doesn't exist yet.  However, if B == Y, we
            # can run `gsutil cp -r gs://A/B X`, which will create Y for us.
            assert path.name == blob.name.rsplit("/", 1)[1]
            self._tool.gsutil_cp(url, str(path.parent))
        else:
            blob.download_to_filename(str(path))


class FakeCloudStore(LocalStore):
    """
    A mock version of the GcsCloudStore that's actually backed by local files.
    Useful for running tests without setting up a GCS connection, which is
    slow and requires some configuration.
    """

    def __init__(self, root_path_str):
        super(FakeCloudStore, self).__init__(root_path_str)

    def generate_unique_url_prefix(self, query):
        return url_from_path(self.generate_unique_dir_path(query))

    def upload(self, path, url):
        src_path = path
        dst_path = path_from_url(url)

        recursively_copy_path(src_path, dst_path)

    def download(self, path, url):
        src_path = path_from_url(url)
        dst_path = path

        recursively_copy_path(src_path, dst_path)


class LocalFilesystem:
    """
    Implements a generic "FileSystem" interface for reading/writing small files
    to local disk.
    """

    def __init__(self, inventory_dir, tmp_dir):
        self.root_url = url_from_path(inventory_dir)
        self.tmp_root_path = tmp_dir

    def exists(self, url):
        return path_from_url(url).exists()

    def search(self, url_prefix):
        path_prefix = path_from_url(url_prefix)
        if not path_prefix.is_dir():
            return []

        return [
            url_from_path(path_prefix / sub_path)
            for sub_path in path_prefix.glob("**/*")
        ]

    def delete(self, url):
        path = path_from_url(url)
        if not path.exists():
            return False
        path.unlink()
        return True

    def write_bytes(self, content_bytes, url):
        path = path_from_url(url)
        ensure_parent_dir_exists(path)
        ensure_dir_exists(self.tmp_root_path)
        working_dir = Path(tempfile.mkdtemp(dir=str(self.tmp_root_path)))
        try:
            working_path = working_dir / "tmp_file"
            working_path.write_bytes(content_bytes)

            working_path.rename(path)

        finally:
            shutil.rmtree(str(working_dir))

    def read_bytes(self, url):
        return path_from_url(url).read_bytes()


class GcsFilesystem:
    """
    Implements a generic "FileSystem" interface for reading/writing small files
    to GCS.
    """

    def __init__(self, gcs_tool, object_prefix_extension):
        self._tool = gcs_tool
        self.root_url = self._tool.url + object_prefix_extension

    def exists(self, url):
        # Checking for "existence" on GCS is slightly complicated. If the URL in
        # question corresponds to a single file, we should find an object with a
        # matching name. If it corresponds to directory of files, we should find one or
        # more objects with a matching prefix (the expected name followed by a slash).
        return any(
            found_url == url or found_url.startswith(url + "/")
            for found_url in self.search(url)
        )

    def search(self, url_prefix):
        return [
            self._tool.url_from_object_name(blob.name)
            for blob in self._tool.blobs_matching_url_prefix(url_prefix)
        ]

    def delete(self, url):
        blob = self._tool.blob_from_url(url)
        if blob is None:
            return False
        blob.delete()
        return True

    def write_bytes(self, content_bytes, url):
        self._tool.blob_from_url(url).upload_from_string(content_bytes)

    def read_bytes(self, url):
        return self._tool.blob_from_url(url).download_as_string()


class InternalCacheStateError(Exception):
    """
    Indicates a problem with the integrity of our cached data.  Before this is
    surfaced to a user, it should be converted to an InvalidCacheStateError.
    """

    @classmethod
    def from_failure(cls, artifact_type, location, exc):
        return cls(f"Unable to read {artifact_type} {location!r} in cache: {exc}")


class InvalidCacheStateError(Exception):
    """
    Indicates that the cache state may have been corrupted.
    """


def valid_filename_from_query(query):
    """
    Generates a filename from a query.

    This just gets the descriptor string from the query and replaces any
    spaces with hyphens. (At the time of writing, descriptors can't contain
    spaces, but in the future they will be able to.)
    """
    return query.dnode.to_descriptor().replace(" ", "-")


CACHE_SCHEMA_VERSION = 7


class YamlRecordParsingError(Exception):
    pass


class ArtifactMetadataRecord:
    """
    Describes a persisted artifact.  Intended to be stored as a YAML file.
    """

    @classmethod
    def from_content(cls, dnode, artifact_url, provenance, metadata_url, value_hash):
        return cls(
            body_dict=dict(
                descriptor=dnode.to_descriptor(),
                artifact_url=relativize_url(artifact_url, metadata_url),
                provenance=provenance.to_dict(),
                value_hash=value_hash,
            )
        )

    @classmethod
    def from_yaml(cls, yaml_str, metadata_url):
        try:
            body_dict = yaml.load(yaml_str, Loader=YamlLoader)
        except yaml.error.YAMLError as e:
            raise YamlRecordParsingError(f"Couldn't parse {cls.__name__}") from e
        record = cls(body_dict=body_dict)
        record.artifact_url = derelativize_url(record.artifact_url, metadata_url)
        return record

    def __init__(self, body_dict):
        try:
            self._dict = body_dict
            self.descriptor = self._dict["descriptor"]
            self.artifact_url = self._dict["artifact_url"]
            self.provenance = Provenance.from_dict(self._dict["provenance"])
            self.value_hash = self._dict["value_hash"]
        except KeyError as e:
            raise YamlRecordParsingError(
                f"YAML for ArtifactMetadataRecord was missing field: {e}"
            )

    def to_yaml(self):
        return yaml.dump(
            self._dict, default_flow_style=False, encoding=None, Dumper=YamlDumper,
        )

    def __repr__(self):
        return f"ArtifactMetadataRecord({self.descriptor!r})"


class Provenance:
    """
    Describes the code and data used to generate (possibly-yet-to-be-computed)
    value.  Provides a set of hashes that can be used to determine if two
    such values are meaningfully different, without actually examining the
    values.

    Provenances can "match" at several different levels of precision.

    1. Functional match: all input data is the same, and all functions involved
    in the computation have matching major versions.  This is the lowest level
    of matching, but it's a sufficient condition to treat two artifacts as
    interchangeable.  The only purpose of the higher levels is to allow
    recursive searches for possible versioning errors, where the user has
    changed a function's bytecode but failed to update its version.

    2. Nominal match: as above, plus the function that computes this value has
    a matching minor version.  If two provenances don't nominally match, then
    they have different versions, which means this particular descriptor doesn't
    have a versioning error (although its dependencies might or might not).

    3. "Samecode" match: as above, plus the function that computes this value
    has matching bytecode.  If two provenances are a nominal match but not
    a samecode match, that suggests the user may have made a versioning error
    in this descriptor.

    4. Exact match: as above, plus all dependencies exactly match.  If two
    provenances exactly match, then there is no chance of any versioning error
    anywhere in this descriptor's dependency tree.
    """

    @classmethod
    def from_computation(
        cls,
        code_fingerprint,
        case_key,
        dep_provenance_digests_by_task_key,
        treat_bytecode_as_functional,
        can_functionally_change_per_run,
        flow_instance_uuid,
    ):
        dep_task_key_provenance_digest_pairs = sorted(
            dep_provenance_digests_by_task_key.items()
        )

        functional_code_dict = dict(
            orig_flow_name=code_fingerprint.orig_flow_name,
            code_version_major=code_fingerprint.version.major,
            cache_schema_version=CACHE_SCHEMA_VERSION,
        )
        nonfunctional_code_dict = dict(
            code_version_minor=code_fingerprint.version.minor,
        )

        bytecode_hash = code_fingerprint.bytecode_hash
        if treat_bytecode_as_functional:
            functional_code_dict["bytecode_hash"] = bytecode_hash
        else:
            nonfunctional_code_dict["bytecode_hash"] = bytecode_hash

        # The function's output changes with each run; to reflect that,
        # we add the flow uuid to the hash so that it will be different
        # each time.
        if can_functionally_change_per_run:
            functional_code_dict["flow_instance_uuid"] = flow_instance_uuid

        full_code_dict = dict(
            functional=functional_code_dict,
            nonfunctional=nonfunctional_code_dict,
            bytecode_hash=bytecode_hash,
        )
        functional_deps_list = [
            dict(
                descriptor=task_key.dnode.to_descriptor(),
                hash=provenance_digest.functional_hash,
            )
            for task_key, provenance_digest in dep_task_key_provenance_digest_pairs
        ]
        exact_deps_list = [
            dict(
                descriptor=task_key.dnode.to_descriptor(),
                hash=provenance_digest.exact_hash,
            )
            for task_key, provenance_digest in dep_task_key_provenance_digest_pairs
        ]

        exact_deps_hash = hash_simple_obj_to_hex(exact_deps_list)
        functional_hash = hash_simple_obj_to_hex(
            dict(code=functional_code_dict, deps=functional_deps_list,)
        )
        exact_hash = hash_simple_obj_to_hex(
            dict(code=full_code_dict, deps=exact_deps_list,)
        )

        return cls(
            body_dict=dict(
                case_key=dict(case_key),
                code=full_code_dict,
                functional_deps=functional_deps_list,
                functional_hash=functional_hash,
                exact_hash=exact_hash,
                exact_deps_hash=exact_deps_hash,
            )
        )

    @classmethod
    def from_dict(cls, body_dict):
        return cls(body_dict=body_dict)

    def __init__(self, body_dict=None):
        self._dict = body_dict

        d = self._dict

        self.functional_hash = d["functional_hash"]
        self.exact_hash = d["exact_hash"]
        self.exact_deps_hash = d["exact_deps_hash"]
        self.code_version_major = d["code"]["functional"]["code_version_major"]
        self.code_version_minor = d["code"]["nonfunctional"]["code_version_minor"]
        self.bytecode_hash = d["code"]["bytecode_hash"]

    def to_dict(self):
        return self._dict

    def __repr__(self):
        hash_fn = self.functional_hash[:8]
        v_maj = self.code_version_major
        v_min = self.code_version_minor
        hash_ex = self.exact_hash[:8]
        return f"Provenance[{hash_fn}/{v_maj}.{v_min}/{hash_ex}]"

    def exactly_matches(self, prov):
        return self.exact_hash == prov.exact_hash

    def dependencies_exactly_match(self, prov):
        return self.exact_deps_hash == prov.exact_deps_hash

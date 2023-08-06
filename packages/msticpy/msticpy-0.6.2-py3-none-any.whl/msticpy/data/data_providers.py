# -------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
# --------------------------------------------------------------------------
"""Data provider loader."""
from functools import partial
from pathlib import Path
from typing import Union, Any, List, Dict, Optional
import warnings

import pandas as pd

from .drivers import (
    DriverBase,
    KqlDriver,
    SecurityGraphDriver,
    MDATPDriver,
    LocalDataDriver,
)
from .query_store import QueryStore
from .param_extractor import extract_query_params
from .query_defns import DataEnvironment
from ..common.utility import export
from ..common import pkg_config as config
from .._version import VERSION

__version__ = VERSION
__author__ = "Ian Hellen"

_PROVIDER_DIR = "providers"

_ENVIRONMENT_DRIVERS = {
    DataEnvironment.LogAnalytics: KqlDriver,
    DataEnvironment.AzureSecurityCenter: KqlDriver,
    DataEnvironment.SecurityGraph: SecurityGraphDriver,
    DataEnvironment.MDATP: MDATPDriver,
    DataEnvironment.LocalData: LocalDataDriver,
}


class AttribHolder:
    """Empty class used to create hierarchical attributes."""

    def __len__(self):
        """Return number of items in the attribute collection."""
        return len(self.__dict__)

    def __iter__(self):
        """Return iterator over the attributes."""
        return iter(self.__dict__.items())

    def __getattr__(self, name):
        """Print usable error message if attribute not found."""
        if name not in self.__dict__:
            print(f"Query attribute {name} not found.")
            print("Use QueryProvider.list_queries() to see available queries.")
        return super().__getattribute__(name)

    def __repr__(self):
        """Return list of attributes."""
        return "\n".join(self.__dict__.keys())


@export
class QueryProvider:
    """
    Container for query store and query execution provider.

    Instances of this class hold the query set and execution
    methods for a specific data environment.

    """

    # pylint: disable=too-many-branches
    def __init__(  # noqa: MC0001
        self,
        data_environment: Union[str, DataEnvironment],
        driver: DriverBase = None,
        query_paths: List[str] = None,
        **kwargs,
    ):
        """
        Query provider interface to queries.

        Parameters
        ----------
        data_environment : Union[str, DataEnvironment]
            Name or Enum of environment for the QueryProvider
        driver : DriverBase, optional
            Override the builtin driver (query execution class)
            and use your own driver (must inherit from
            `DriverBase`)
        query_paths : List[str]
            Additional paths to look for query definitions.
        kwargs :
            Other arguments are passed to the data provider driver.

        See Also
        --------
        DataProviderBase : base class for data query providers.

        """
        if isinstance(data_environment, str):
            data_env = DataEnvironment.parse(data_environment)
            if data_env != DataEnvironment.Unknown:
                data_environment = data_env
            else:
                raise TypeError(f"Unknown data environment {data_environment}")

        self._environment = data_environment.name

        if driver is None:
            driver_class = _ENVIRONMENT_DRIVERS[data_environment]
            if issubclass(driver_class, DriverBase):
                driver = driver_class(**kwargs)  # type: ignore
            else:
                raise LookupError(
                    "Could not find suitable data provider for", f" {self._environment}"
                )

        self._query_provider = driver

        settings: Dict[str, Any] = config.settings.get(  # type: ignore
            "QueryDefinitions"
        )  # type: ignore
        all_query_paths = []
        for default_path in settings.get("Default"):  # type: ignore
            qry_path = self._resolve_path(default_path)
            if qry_path:
                all_query_paths.append(qry_path)

        if settings.get("Custom") is not None:
            for custom_path in settings.get("Custom"):  # type: ignore
                qry_path = self._resolve_path(custom_path)
                if qry_path:
                    all_query_paths.append(qry_path)
        if query_paths:
            all_query_paths.extend(query_paths)

        if not all_query_paths:
            raise RuntimeError(
                "No valid query definition files found. ",
                "Please check your msticpyconfig.yaml settings.",
            )
        data_env_queries = QueryStore.import_files(
            source_path=all_query_paths, recursive=True
        )

        if self._environment in data_env_queries:
            self._query_store = data_env_queries[self._environment]
            self.all_queries = AttribHolder()
            self._add_query_functions()
        else:
            warnings.warn(f"No queries found for environment {self._environment}")

    # pylint: disable=too-many-branches

    def __getattr__(self, name):
        """Return the value of the named property 'name'."""
        if "." in name:
            parent_name, child_name = name.split(".", maxsplit=1)
            parent = getattr(self, parent_name, None)
            if parent:
                return getattr(parent, child_name)
        raise AttributeError(f"{name} is not a valid attribute.")

    def connect(self, connection_str: str = None, **kwargs):
        """
        Connect to data source.

        Parameters
        ----------
        connection_str : str
            Connection string for the data source

        """
        return self._query_provider.connect(connection_str=connection_str, **kwargs)

    @property
    def connected(self) -> bool:
        """
        Return True if the provider is connected.

        Returns
        -------
        bool
            True if the provider is connected.

        """
        return self._query_provider.connected

    @property
    def connection_string(self) -> str:
        """
        Return provider connection string.

        Returns
        -------
        str
            Provider connection string.

        """
        return self._query_provider.current_connection

    @property
    def schema(self) -> Dict[str, Dict]:
        """
        Return current data schema of connection.

        Returns
        -------
        Dict[str, Dict]
            Data schema of current connection.

        """
        return self._query_provider.schema

    @property
    def schema_tables(self) -> List[str]:
        """
        Return list of tables in the data schema of the connection.

        Returns
        -------
        List[str]
            Tables in the of current connection.

        """
        return list(self._query_provider.schema.keys())

    def import_query_file(self, query_file: str):
        """
        Import a yaml data source definition.

        Parameters
        ----------
        query_file : str
            Path to the file to import

        """
        self._query_store.import_file(query_file)
        self._add_query_functions()

    @classmethod
    def list_data_environments(cls) -> List[str]:
        """
        Return list of current data environments.

        Returns
        -------
        List[str]
            List of current data environments

        """
        return [env for env in DataEnvironment.__members__ if env != "Unknown"]

    def list_queries(self) -> List[str]:
        """
        Return list of family.query in the store.

        Returns
        -------
        Iterable[str]
            List of queries

        """
        return list(self._query_store.query_names)

    def query_help(self, query_name):
        """Print help for query."""
        self._query_store[query_name].help()

    def exec_query(self, query: str) -> Union[pd.DataFrame, Any]:
        """
        Execute simple query string.

        Parameters
        ----------
        query : str
            [description]

        Returns
        -------
        Union[pd.DataFrame, Any]
            Query results - a DataFrame if successful
            or a KqlResult if unsuccessful.

        """
        return self._query_provider.query(query)

    def _execute_query(self, *args, **kwargs) -> Union[pd.DataFrame, Any]:
        if not self._query_provider.loaded:
            raise ValueError("Provider is not loaded.")
        if not self._query_provider.connected:
            raise ValueError(
                "No connection to a data source.",
                "Please call connect(connection_str) and retry.",
            )
        query_name = kwargs.pop("query_name")
        family = kwargs.pop("data_family")

        query_source = self._query_store.get_query(
            data_family=family, query_name=query_name
        )
        if "help" in args or "?" in args:
            query_source.help()
            return None

        params, missing = extract_query_params(query_source, *args, **kwargs)
        if missing:
            query_source.help()
            raise ValueError(f"No values found for these parameters: {missing}")

        query_str = query_source.create_query(**params)
        if "print" in args or "query" in args:
            return query_str
        return self._query_provider.query(query_str, query_source)

    def _add_query_functions(self):
        """Add queries to the module as callable methods."""
        for qual_query_name in self.list_queries():

            family, query_name = qual_query_name.split(".")
            if not hasattr(self, family):
                setattr(self, family, AttribHolder())
            query_family = getattr(self, family)

            # Create the partial function
            query_func = partial(
                self._execute_query, data_family=family, query_name=query_name
            )
            query_func.__doc__ = self._query_store.get_query(
                data_family=family, query_name=query_name
            ).create_doc_string()

            setattr(query_family, query_name, query_func)
            setattr(self.all_queries, query_name, query_func)

    @classmethod
    def _resolve_path(cls, config_path: str) -> Optional[str]:
        if not Path(config_path).is_absolute():
            config_path = str(Path(__file__).resolve().parent.joinpath(config_path))
        if not Path(config_path).is_dir():
            warnings.warn(f"Custom query definitions path {config_path} not found")
            return None
        return config_path

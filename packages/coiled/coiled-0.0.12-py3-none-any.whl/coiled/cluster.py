import asyncio
import uuid

import dask.distributed
import distributed.deploy

from .core import Cloud
from .identifiers import parse_identifier


class Cluster(distributed.deploy.Cluster):
    """ Create a Dask cluster with Coiled Cloud

    Parameters
    ----------
    n_workers
        Number of workers in this cluster. Defaults to 4.
    configuration
        Name of cluster configuration to create cluster from.
        Defaults to ``"default"``.
    name
        Name to use for identifying this cluster. Defaults to ``None``.
    asynchronous
        Set to True if using this Cloud within ``async``/``await`` functions or
        within Tornado ``gen.coroutines``. Otherwise this should remain
        ``False`` for normal use. Default is ``False``.
    cloud
        Cloud object to use for interacting with Coiled Cloud.
    account
        Name of Coiled Cloud account to use. If not provided, will
        default to the user account for the ``cloud`` object being used.
    shutdown_on_close
        Whether or not to shut down the cluster when it finishes.
        Defaults to True, unless name points to an existing cluster.

    """

    def __init__(
        self,
        n_workers: int = 4,
        configuration: str = "coiled/default",
        name: str = None,
        asynchronous: bool = False,
        cloud: Cloud = None,
        account: str = None,
        shutdown_on_close=None,
    ):
        # we really need to call this first before any of the below code errors
        # out; otherwise because of the fact that this object inherits from
        # deploy.Cloud __del__ (and perhaps __repr__) will have AttributeErrors
        # because the gc will run and attributes like `.status` and
        # `.scheduler_comm` will not have been assigned to the object's instance
        # yet
        super().__init__(asynchronous=asynchronous)

        self.cloud = cloud or Cloud.current(asynchronous=asynchronous)
        self.configuration = configuration
        self.name = name
        self.account = account
        self._start_n_workers = n_workers
        self._lock = asyncio.Lock(loop=self.loop)
        self._asynchronous = asynchronous
        self.shutdown_on_close = shutdown_on_close

        if not self.asynchronous:
            self.sync(self._start)

    @property
    def loop(self):
        return self.cloud.loop

    async def _start(self):
        self.cloud = await self.cloud
        should_create = True

        if self.name:
            try:
                await self.cloud._cluster_status(name=self.name, account=self.account)
                should_create = False
                if self.shutdown_on_close is None:
                    self.shutdown_on_close = False
                print(f"Using existing cluster: {self.name}")  # TODO: add timer
            except Exception as e:
                if "not found" not in str(e).lower():
                    raise

        self.name = self.name or self.cloud.user + "-" + str(uuid.uuid4())[:10]

        if should_create:
            # TODO: should this check also be upstream on the server?
            acct, name = parse_identifier(self.configuration, "configuration")
            available_configs = await self.cloud.list_cluster_configurations(
                account=acct or self.account
            )
            if name not in available_configs:
                error_msg = f"Cluster configuration '{self.configuration}' not found."
                if name in await self.cloud.list_software_environments():
                    error_msg += (
                        "\n"
                        f"We did find a software environment '{self.configuration}'.\n"
                        "You may need to make a cluster configuration with this \n"
                        "software environment:\n\n"
                        f"  coiled.create_cluster_configuration(name='{self.configuration}', software='{self.configuration}')"  # noqa: E501
                    )
                raise ValueError(error_msg)

            await self.cloud.create_cluster(
                account=self.account, configuration=self.configuration, name=self.name,
            )

        if self._start_n_workers:
            await self._scale(self._start_n_workers)

        self.security, info = await self.cloud.security(name=self.name, account=self.account)  # type: ignore

        self.scheduler_comm = dask.distributed.rpc(
            info["public_address"],
            connection_args=self.security.get_connection_args("client"),
        )

        await super()._start()

    def __await__(self):
        async def _():
            async with self._lock:
                if self.status == "created":
                    await self._start()
                assert self.status == "running"
            return self

        return _().__await__()

    async def _close(self):
        if self.shutdown_on_close in (True, None):
            await self.cloud.delete_cluster(
                account=self.account, name=self.name,
            )
        await super()._close()

    async def _scale(self, n: int) -> None:
        await self.cloud.scale(account=self.account, name=self.name, n=n)  # type: ignore

    def scale(self, n: int) -> None:
        """ Scale cluster to ``n`` workers

        Parameters
        ----------
        n
            Number of workers to scale cluster size to.
        """
        return self.sync(self._scale, n=n)

    def __enter__(self):
        return self.sync(self.__aenter__)

    def __exit__(self, *args, **kwargs):
        return self.sync(self.__aexit__, *args, **kwargs)

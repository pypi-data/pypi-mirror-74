from typing import NamedTuple
import asyncio
from distutils.util import strtobool
from os import environ

import dask
import pytest
from distributed.utils_test import loop  # noqa: F401

from coiled import Cloud
from backends import in_process
from cloud.apps import CloudConfig
from users.models import User, Membership, Account


class UserOrgMembership(NamedTuple):
    user: User
    account: Account
    membership: Membership


PASSWORD = "mypassword"
ACCOUNT = "myuser"
CONFIGURATION = "myclusterconfig"
SOFTWARE_NAME = "myenv"


@pytest.fixture
async def cleanup(cloud):
    clusters = await cloud.list_clusters()
    await asyncio.gather(*[cloud.delete_cluster(name=name) for name in clusters.keys()])

    yield

    clusters = await cloud.list_clusters()
    await asyncio.gather(*[cloud.delete_cluster(name=name) for name in clusters.keys()])


@pytest.fixture()
def backend():
    """Provide the (in-process) backend as a fixture, and ensure that the rest
    of the application uses it too (we don't need real AWS resources for these
    tests!)"""
    old = CloudConfig.backend

    if not strtobool(environ.get("TEST_AGAINST_AWS", "n")):
        new = in_process.ClusterManager()
        CloudConfig.backend = new

        yield new

        new.close()
        CloudConfig.backend = old
    else:
        yield old


@pytest.fixture(scope="function")
def fedex_account(transactional_db, django_user_model):
    account = Account(slug="fedex", name="FedEx")
    account.save()
    return account


# fixture must be function-scoped because `transactional_db` is
@pytest.fixture(scope="function")
def sample_user(transactional_db, django_user_model, backend, ngrok_url):
    user = django_user_model.objects.create(
        username="myuser", email="myuser@users.com",
    )
    user.set_password(PASSWORD)
    user.save()
    membership = Membership.objects.filter(user=user).first()
    with dask.config.set(
        {
            "coiled": {
                "cloud": {
                    "user": f"{user.username}",
                    "token": f"{user.auth_token.key}",
                    "server": ngrok_url,
                    "account": "myuser",
                }
            }
        }
    ):
        yield UserOrgMembership(user, membership.account, membership)


@pytest.fixture(scope="function")
def jess_from_fedex(
    transactional_db, django_user_model, backend, ngrok_url, fedex_account
):
    jess = django_user_model.objects.create(username="jess", email="jess@fedex.com",)
    jess.set_password(PASSWORD)
    jess.save()
    fedex_membership = Membership(user=jess, account=fedex_account)
    fedex_membership.save()
    with dask.config.set(
        {
            "coiled": {
                "cloud": {
                    "user": f"{jess.username}",
                    "token": f"{jess.auth_token.key}",
                    "server": ngrok_url,
                    "account": None,
                }
            }
        }
    ):
        yield jess


# fixture must be function-scoped because `transactional_db` is
@pytest.fixture(scope="function")
def second_user(transactional_db, django_user_model, backend, ngrok_url):
    user = django_user_model.objects.create(
        username="charlie", email="charlie@users.com",
    )
    user.set_password(PASSWORD)
    user.save()
    account = Account.objects.create(name="MyCorp")
    membership = Membership.objects.create(
        user=user, account=account, is_admin=True, limit=4
    )
    with dask.config.set(
        {
            "coiled": {
                "cloud": {
                    "user": f"{user.username}",
                    "token": f"{user.auth_token.key}",
                    "server": ngrok_url,
                    "account": None,
                }
            }
        }
    ):
        yield UserOrgMembership(user, membership.account, membership)


@pytest.fixture(scope="function")
def second_account(sample_user):
    account = Account.objects.create(name="OtherOrg")
    membership = Membership.objects.create(
        user=sample_user.user, account=account, is_admin=False, limit=2
    )
    sample_user.user.save()
    return UserOrgMembership(sample_user.user, account, membership)


@pytest.fixture(scope="function")
@pytest.mark.django_db(transaction=True)  # implied by `live_server`, but explicit
async def cloud(sample_user):
    async with Cloud(account=ACCOUNT, asynchronous=True,) as cloud:
        # Remove default software environments and cluster configurations
        default_envs = await cloud.list_software_environments()
        await asyncio.gather(
            *[
                cloud.delete_software_environment(name=name)
                for name, info in default_envs.items()
            ]
        )
        default_configs = await cloud.list_cluster_configurations()
        await asyncio.gather(
            *[
                cloud.delete_cluster_configuration(name=name)
                for name, info in default_configs.items()
            ]
        )

        yield cloud


@pytest.fixture
async def cluster_configuration(cloud, software_env):
    await cloud.create_cluster_configuration(
        name=CONFIGURATION,
        software=software_env,
        worker_cpu=1,
        worker_memory="2 GiB",
        scheduler_cpu=1,
        scheduler_memory="2 GiB",
    )

    yield CONFIGURATION

    await cloud.delete_cluster_configuration(name=CONFIGURATION)

    out = await cloud.list_cluster_configurations(account=ACCOUNT)
    assert CONFIGURATION not in out


@pytest.fixture
async def software_env(cloud):
    await cloud.create_software_environment(
        name=SOFTWARE_NAME, container="daskdev/dask:latest"
    )

    yield SOFTWARE_NAME

    await cloud.delete_software_environment(name=SOFTWARE_NAME)

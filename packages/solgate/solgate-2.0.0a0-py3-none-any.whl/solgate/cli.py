#!/usr/bin/env python3

"""CLI for Solgate."""

import click

from solgate import lookup, transfer, notify, __version__ as version
from .utils import serialize, logger


@click.group()
@click.option("-c", "--config", type=click.Path(exists=True), help="Configuration file location.")
@click.pass_context
def cli(ctx, config):  # noqa: D301
    """Solgate - the data sync pipeline.

    Transfer given files between any S3 compatible storage: AWS S3, Ceph object storage, MinIO.

    Solgate allows you:

    \b
    - To synchronize and mirror S3 buckets.
    - Transfer data from a single source to multiple destinations simultaneously.
    - Repartition data on the fly.
    """
    ctx.ensure_object(dict)
    ctx.obj["CONFIG_PATH"] = config


@cli.command("transfer")
@click.argument("key", required=True, type=click.Path(exists=False))
@click.pass_context
def _transfer(ctx, key: str):
    """Initiate the transfer of S3 objects.

    KEY is a path reference to S3 object that should be transferred.
    """
    try:
        success = transfer(key, ctx.obj["CONFIG_PATH"])
    except:  # noqa: E722
        logger.error("Unexpected error during transfer", exc_info=True)
        exit(1)

    if not success:
        logger.error("Failed to perform a full sync", dict(key=key))
        exit(1)
    logger.info("Successfully synced file to all destinations", dict(key=key))


@cli.command("list")
@click.argument("newer-than", type=click.STRING)
@click.option("-o", "--output", type=click.Path(exists=False), help="Output to a file instead of stdout.")
@click.pass_context
def _list(ctx, newer_than: str, output: str = None):
    """Query the source bucket for files ready to be transferred.

    Only files NEWER_THAN give value (added or modified) are listed.
    """
    try:
        files = lookup(newer_than, ctx.obj["CONFIG_PATH"])
        if output:
            serialize(files, output)
        else:
            click.echo(files)
    except:  # noqa: F401
        logger.error("Unexpected error", exc_info=True)
        exit(1)


@cli.command("notify")
# @click.option("--smtp_server", envvar="ALERT_EMAIL_SMTP_SERVER")
# @click.option("--from", envvar="ALERT_FROM_EMAIL")
# @click.option("--to", envvar="ALERT_TO_EMAIL_LIST")
# @click.option("--failures", envvar="WORKFLOW_FAILURES")
# @click.option("-n", "--name", envvar="WORKFLOW_NAME")
# @click.option("--namespace", envvar="WORKFLOW_NAMESPACE")
# @click.option("-s", "--status", envvar="WORKFLOW_STATUS")
# @click.option("-t", "--timestamp", envvar="WORKFLOW_TIMESTAMP")
# @click.option("--host", envvar="ARGO_UI_HOST")
def _notify():
    """Send an workflow status alert from Argo environment via email."""
    notify()


@cli.command("version")
def _version():
    """Get version of this Solgate."""
    click.echo(f"Solgate version: {version!s}")


if __name__ == "__main__":
    cli()

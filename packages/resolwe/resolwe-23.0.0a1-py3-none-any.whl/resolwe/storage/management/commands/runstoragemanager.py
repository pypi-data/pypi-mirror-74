""".. Ignore pydocstyle D400.

==========================
Command: runstoragemanager
==========================

"""
import logging

from asgiref.sync import async_to_sync
from channels.layers import ChannelFull, get_channel_layer

from django.core.management.base import BaseCommand

from resolwe.storage.protocol import (
    CHANNEL_STORAGE_MANAGER_WORKER,
    TYPE_STORAGE_MANAGER_RUN,
)

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    """Start storage manager run via signal by django channels."""

    help = "Start storage manager run via signal by django channels."

    def handle(self, *args, **options):
        """Command handle."""
        channel_layer = get_channel_layer()
        try:
            async_to_sync(channel_layer.send)(
                CHANNEL_STORAGE_MANAGER_WORKER, {"type": TYPE_STORAGE_MANAGER_RUN,},
            )
        except ChannelFull:
            logger.warning(
                "Cannot trigger storage manager run because channel is full.",
            )

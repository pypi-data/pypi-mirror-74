"""The subpackage providing all functions and classes related to music playback on Discord.

It requires the both the ``bard`` and ``discord`` extras to be installed.

You can install them with: ::

    pip install royalnet[bard,discord]

"""

from .ytdldiscord import YtdlDiscord
from .fileaudiosource import FileAudioSource

__all__ = [
    "YtdlDiscord",
    "FileAudioSource",
]

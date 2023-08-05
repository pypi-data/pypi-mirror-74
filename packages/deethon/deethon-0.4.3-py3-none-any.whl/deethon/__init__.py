"""
🎵 Deethon is a Python3 library to easily download music from Deezer and a
wrapper for the Deezer API with some extra features. 🎵
"""

try:
    from importlib import metadata
except ImportError:  # for Python<3.8
    import importlib_metadata as metadata

__version__ = metadata.version(__name__)

from . import types, utils, consts, errors, session
from .session import Session
from .types import Album, Track

__all__ = ["Session", "Album", "Track", "errors",
           "utils", "consts", "types", "session"]

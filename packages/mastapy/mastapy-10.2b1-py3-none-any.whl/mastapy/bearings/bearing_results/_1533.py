﻿'''_1533.py

Orientations
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_ORIENTATIONS = python_net_import('SMT.MastaAPI.Bearings.BearingResults', 'Orientations')


__docformat__ = 'restructuredtext en'
__all__ = ('Orientations',)


class Orientations(Enum):
    '''Orientations

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _ORIENTATIONS
    __hash__ = None

    FLIPPED = 0
    DEFAULT = 1

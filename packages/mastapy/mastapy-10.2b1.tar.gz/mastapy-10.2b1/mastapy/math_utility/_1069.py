﻿'''_1069.py

CoordinateSystemForRotation
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_COORDINATE_SYSTEM_FOR_ROTATION = python_net_import('SMT.MastaAPI.MathUtility', 'CoordinateSystemForRotation')


__docformat__ = 'restructuredtext en'
__all__ = ('CoordinateSystemForRotation',)


class CoordinateSystemForRotation(Enum):
    '''CoordinateSystemForRotation

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    @classmethod
    def type_(cls):
        return _COORDINATE_SYSTEM_FOR_ROTATION

    __hash__ = None

    WORLD_COORDINATE_SYSTEM = 0
    LOCAL_COORDINATE_SYSTEM = 1

﻿'''_1181.py

AssemblyMethods
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_ASSEMBLY_METHODS = python_net_import('SMT.MastaAPI.DetailedRigidConnectors.InterferenceFits', 'AssemblyMethods')


__docformat__ = 'restructuredtext en'
__all__ = ('AssemblyMethods',)


class AssemblyMethods(Enum):
    '''AssemblyMethods

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _ASSEMBLY_METHODS
    __hash__ = None

    PRESS_FITTING = 0
    THERMAL_FITTING = 1

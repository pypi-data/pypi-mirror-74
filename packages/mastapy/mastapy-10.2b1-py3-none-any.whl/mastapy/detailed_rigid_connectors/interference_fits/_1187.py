﻿'''_1187.py

Table4JointInterfaceTypes
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_TABLE_4_JOINT_INTERFACE_TYPES = python_net_import('SMT.MastaAPI.DetailedRigidConnectors.InterferenceFits', 'Table4JointInterfaceTypes')


__docformat__ = 'restructuredtext en'
__all__ = ('Table4JointInterfaceTypes',)


class Table4JointInterfaceTypes(Enum):
    '''Table4JointInterfaceTypes

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _TABLE_4_JOINT_INTERFACE_TYPES
    __hash__ = None

    STEELSTEEL_INTERFACE_JOINED_WITH_MINERAL_OIL = 0
    STEELSTEEL_INTERFACE_JOINED_WITH_OIL_AND_DEGREASED_SURFACES_GLYCERIN = 1
    STEELSTEEL_INTERFACE_JOINED_WITH_THERMAL_EXPANSION = 2
    STEELSTEEL_INTERFACE_JOINED_WITH_THERMAL_EXPANSION_AND_DEGREASED_SURFACES = 3
    STEELIRON_INTERFACE_JOINED_WITH_MINERAL_OIL = 4
    STEELIRON_INTERFACE_JOINED_WITH_OIL_AND_DEGREASED_SURFACES = 5
    STEELMGAL_INTERFACE_DRY = 6
    STEELCUZN_INTERFACE_DRY = 7

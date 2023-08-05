﻿'''_2074.py

RigidConnectorTypes
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_RIGID_CONNECTOR_TYPES = python_net_import('SMT.MastaAPI.SystemModel.PartModel.Couplings', 'RigidConnectorTypes')


__docformat__ = 'restructuredtext en'
__all__ = ('RigidConnectorTypes',)


class RigidConnectorTypes(Enum):
    '''RigidConnectorTypes

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _RIGID_CONNECTOR_TYPES
    __hash__ = None

    CONCEPT_SPLINE = 0
    DETAILED_SPLINE = 1
    RIGID_BOND = 2
    DETAILED_INTERFERENCE_FIT = 3
    DETAILED_KEYED_JOINT = 4

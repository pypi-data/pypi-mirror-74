﻿'''_1880.py

LinkNodeSource
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_LINK_NODE_SOURCE = python_net_import('SMT.MastaAPI.SystemModel.ImportedFEs', 'LinkNodeSource')


__docformat__ = 'restructuredtext en'
__all__ = ('LinkNodeSource',)


class LinkNodeSource(Enum):
    '''LinkNodeSource

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _LINK_NODE_SOURCE
    __hash__ = None

    EXISTING_CONDENSATION_NODE = 0
    CREATE_SINGLE_AXIAL_NODE = 1
    CREATE_NODES_AT_ANGLES = 2
    CREATE_FLEXIBLE_NODE_RING = 3
    NONE = 4
    USE_NODES_FROM_ANOTHER_LINK = 5
    CREATE_ONE_NODE_PER_TOOTH = 6

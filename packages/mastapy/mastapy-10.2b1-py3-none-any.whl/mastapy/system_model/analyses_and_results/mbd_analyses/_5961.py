﻿'''_5961.py

GearMeshStiffnessModel
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_GEAR_MESH_STIFFNESS_MODEL = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.MBDAnalyses', 'GearMeshStiffnessModel')


__docformat__ = 'restructuredtext en'
__all__ = ('GearMeshStiffnessModel',)


class GearMeshStiffnessModel(Enum):
    '''GearMeshStiffnessModel

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _GEAR_MESH_STIFFNESS_MODEL
    __hash__ = None

    LOAD_CASE_SETTING = 0
    SIMPLE_STIFFNESS = 1
    BASIC_LTCA = 2

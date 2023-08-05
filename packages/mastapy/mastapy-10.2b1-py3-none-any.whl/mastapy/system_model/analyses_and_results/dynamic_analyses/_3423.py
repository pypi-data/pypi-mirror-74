﻿'''_3423.py

HypoidGearMeshDynamicAnalysis
'''


from mastapy.system_model.connections_and_sockets.gears import _1804
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2294
from mastapy.system_model.analyses_and_results.dynamic_analyses import _3421
from mastapy._internal.python_net import python_net_import

_HYPOID_GEAR_MESH_DYNAMIC_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.DynamicAnalyses', 'HypoidGearMeshDynamicAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('HypoidGearMeshDynamicAnalysis',)


class HypoidGearMeshDynamicAnalysis(_3421.AGMAGleasonConicalGearMeshDynamicAnalysis):
    '''HypoidGearMeshDynamicAnalysis

    This is a mastapy class.
    '''

    TYPE = _HYPOID_GEAR_MESH_DYNAMIC_ANALYSIS
    __hash__ = None

    def __init__(self, instance_to_wrap: 'HypoidGearMeshDynamicAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def connection_design(self) -> '_1804.HypoidGearMesh':
        '''HypoidGearMesh: 'ConnectionDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1804.HypoidGearMesh)(self.wrapped.ConnectionDesign) if self.wrapped.ConnectionDesign else None

    @property
    def connection_load_case(self) -> '_2294.HypoidGearMeshLoadCase':
        '''HypoidGearMeshLoadCase: 'ConnectionLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2294.HypoidGearMeshLoadCase)(self.wrapped.ConnectionLoadCase) if self.wrapped.ConnectionLoadCase else None

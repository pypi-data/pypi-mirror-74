﻿'''_4844.py

WormGearMeshModalAnalysis
'''


from mastapy.system_model.connections_and_sockets.gears import _1905
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6230
from mastapy.system_model.analyses_and_results.system_deflections import _2358
from mastapy.system_model.analyses_and_results.modal_analyses import _4769
from mastapy._internal.python_net import python_net_import

_WORM_GEAR_MESH_MODAL_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalyses', 'WormGearMeshModalAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('WormGearMeshModalAnalysis',)


class WormGearMeshModalAnalysis(_4769.GearMeshModalAnalysis):
    '''WormGearMeshModalAnalysis

    This is a mastapy class.
    '''

    TYPE = _WORM_GEAR_MESH_MODAL_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'WormGearMeshModalAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def connection_design(self) -> '_1905.WormGearMesh':
        '''WormGearMesh: 'ConnectionDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1905.WormGearMesh)(self.wrapped.ConnectionDesign) if self.wrapped.ConnectionDesign else None

    @property
    def connection_load_case(self) -> '_6230.WormGearMeshLoadCase':
        '''WormGearMeshLoadCase: 'ConnectionLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6230.WormGearMeshLoadCase)(self.wrapped.ConnectionLoadCase) if self.wrapped.ConnectionLoadCase else None

    @property
    def system_deflection_results(self) -> '_2358.WormGearMeshSystemDeflection':
        '''WormGearMeshSystemDeflection: 'SystemDeflectionResults' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2358.WormGearMeshSystemDeflection)(self.wrapped.SystemDeflectionResults) if self.wrapped.SystemDeflectionResults else None

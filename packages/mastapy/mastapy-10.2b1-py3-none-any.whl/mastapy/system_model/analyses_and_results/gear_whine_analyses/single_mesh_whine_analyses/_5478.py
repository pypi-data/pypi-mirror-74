﻿'''_5478.py

FlexiblePinAssemblySingleMeshWhineAnalysis
'''


from mastapy.system_model.part_model import _2012
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6136
from mastapy.system_model.analyses_and_results.gear_whine_analyses.single_mesh_whine_analyses import _5520
from mastapy._internal.python_net import python_net_import

_FLEXIBLE_PIN_ASSEMBLY_SINGLE_MESH_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses.SingleMeshWhineAnalyses', 'FlexiblePinAssemblySingleMeshWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('FlexiblePinAssemblySingleMeshWhineAnalysis',)


class FlexiblePinAssemblySingleMeshWhineAnalysis(_5520.SpecialisedAssemblySingleMeshWhineAnalysis):
    '''FlexiblePinAssemblySingleMeshWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _FLEXIBLE_PIN_ASSEMBLY_SINGLE_MESH_WHINE_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'FlexiblePinAssemblySingleMeshWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_2012.FlexiblePinAssembly':
        '''FlexiblePinAssembly: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2012.FlexiblePinAssembly)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_6136.FlexiblePinAssemblyLoadCase':
        '''FlexiblePinAssemblyLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6136.FlexiblePinAssemblyLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None

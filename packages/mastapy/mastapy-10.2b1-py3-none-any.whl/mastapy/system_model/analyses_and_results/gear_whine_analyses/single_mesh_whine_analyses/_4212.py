﻿'''_4212.py

ClutchSingleMeshWhineAnalysis
'''


from mastapy.system_model.part_model.couplings import _1996
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2173
from mastapy.system_model.analyses_and_results.gear_whine_analyses.single_mesh_whine_analyses import _4216
from mastapy._internal.python_net import python_net_import

_CLUTCH_SINGLE_MESH_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses.SingleMeshWhineAnalyses', 'ClutchSingleMeshWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('ClutchSingleMeshWhineAnalysis',)


class ClutchSingleMeshWhineAnalysis(_4216.CouplingSingleMeshWhineAnalysis):
    '''ClutchSingleMeshWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _CLUTCH_SINGLE_MESH_WHINE_ANALYSIS
    __hash__ = None

    def __init__(self, instance_to_wrap: 'ClutchSingleMeshWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_1996.Clutch':
        '''Clutch: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1996.Clutch)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_2173.ClutchLoadCase':
        '''ClutchLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2173.ClutchLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None

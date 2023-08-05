﻿'''_5509.py

PointLoadSingleMeshWhineAnalysis
'''


from mastapy.system_model.part_model import _2029
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6185
from mastapy.system_model.analyses_and_results.gear_whine_analyses.single_mesh_whine_analyses import _5544
from mastapy._internal.python_net import python_net_import

_POINT_LOAD_SINGLE_MESH_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses.SingleMeshWhineAnalyses', 'PointLoadSingleMeshWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('PointLoadSingleMeshWhineAnalysis',)


class PointLoadSingleMeshWhineAnalysis(_5544.VirtualComponentSingleMeshWhineAnalysis):
    '''PointLoadSingleMeshWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _POINT_LOAD_SINGLE_MESH_WHINE_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'PointLoadSingleMeshWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2029.PointLoad':
        '''PointLoad: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2029.PointLoad)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_6185.PointLoadLoadCase':
        '''PointLoadLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6185.PointLoadLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None

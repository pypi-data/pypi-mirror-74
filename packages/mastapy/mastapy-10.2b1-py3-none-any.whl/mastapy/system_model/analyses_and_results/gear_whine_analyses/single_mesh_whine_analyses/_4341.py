﻿'''_4341.py

DatumSingleMeshWhineAnalysis
'''


from mastapy.system_model.part_model import _1916
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2272
from mastapy.system_model.analyses_and_results.gear_whine_analyses.single_mesh_whine_analyses import _4339
from mastapy._internal.python_net import python_net_import

_DATUM_SINGLE_MESH_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses.SingleMeshWhineAnalyses', 'DatumSingleMeshWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('DatumSingleMeshWhineAnalysis',)


class DatumSingleMeshWhineAnalysis(_4339.ComponentSingleMeshWhineAnalysis):
    '''DatumSingleMeshWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _DATUM_SINGLE_MESH_WHINE_ANALYSIS
    __hash__ = None

    def __init__(self, instance_to_wrap: 'DatumSingleMeshWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1916.Datum':
        '''Datum: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1916.Datum)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_2272.DatumLoadCase':
        '''DatumLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2272.DatumLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None

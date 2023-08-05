﻿'''_5515.py

RootAssemblySingleMeshWhineAnalysis
'''


from mastapy.system_model.part_model import _2032
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.gear_whine_analyses.single_mesh_whine_analyses import _5519, _5433
from mastapy._internal.python_net import python_net_import

_ROOT_ASSEMBLY_SINGLE_MESH_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses.SingleMeshWhineAnalyses', 'RootAssemblySingleMeshWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('RootAssemblySingleMeshWhineAnalysis',)


class RootAssemblySingleMeshWhineAnalysis(_5433.AssemblySingleMeshWhineAnalysis):
    '''RootAssemblySingleMeshWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _ROOT_ASSEMBLY_SINGLE_MESH_WHINE_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'RootAssemblySingleMeshWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_2032.RootAssembly':
        '''RootAssembly: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2032.RootAssembly)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def single_mesh_whine_analysis_inputs(self) -> '_5519.SingleMeshWhineAnalysis':
        '''SingleMeshWhineAnalysis: 'SingleMeshWhineAnalysisInputs' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_5519.SingleMeshWhineAnalysis)(self.wrapped.SingleMeshWhineAnalysisInputs) if self.wrapped.SingleMeshWhineAnalysisInputs else None

﻿'''_5812.py

BoltedJointDynamicAnalysis
'''


from mastapy.system_model.part_model import _1988
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6064
from mastapy.system_model.analyses_and_results.dynamic_analyses import _5886
from mastapy._internal.python_net import python_net_import

_BOLTED_JOINT_DYNAMIC_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.DynamicAnalyses', 'BoltedJointDynamicAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('BoltedJointDynamicAnalysis',)


class BoltedJointDynamicAnalysis(_5886.SpecialisedAssemblyDynamicAnalysis):
    '''BoltedJointDynamicAnalysis

    This is a mastapy class.
    '''

    TYPE = _BOLTED_JOINT_DYNAMIC_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'BoltedJointDynamicAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_1988.BoltedJoint':
        '''BoltedJoint: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1988.BoltedJoint)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_6064.BoltedJointLoadCase':
        '''BoltedJointLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6064.BoltedJointLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None

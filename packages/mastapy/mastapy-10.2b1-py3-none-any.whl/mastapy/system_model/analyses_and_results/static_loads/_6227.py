﻿'''_6227.py

UnbalancedMassLoadCase
'''


from mastapy.system_model.part_model import _2035
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6228
from mastapy._internal.python_net import python_net_import

_UNBALANCED_MASS_LOAD_CASE = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.StaticLoads', 'UnbalancedMassLoadCase')


__docformat__ = 'restructuredtext en'
__all__ = ('UnbalancedMassLoadCase',)


class UnbalancedMassLoadCase(_6228.VirtualComponentLoadCase):
    '''UnbalancedMassLoadCase

    This is a mastapy class.
    '''

    TYPE = _UNBALANCED_MASS_LOAD_CASE

    __hash__ = None

    def __init__(self, instance_to_wrap: 'UnbalancedMassLoadCase.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2035.UnbalancedMass':
        '''UnbalancedMass: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2035.UnbalancedMass)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

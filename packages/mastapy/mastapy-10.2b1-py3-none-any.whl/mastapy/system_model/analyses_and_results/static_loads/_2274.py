﻿'''_2274.py

ExternalCADModelLoadCase
'''


from mastapy.system_model.part_model import _1919
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2268
from mastapy._internal.python_net import python_net_import

_EXTERNAL_CAD_MODEL_LOAD_CASE = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.StaticLoads', 'ExternalCADModelLoadCase')


__docformat__ = 'restructuredtext en'
__all__ = ('ExternalCADModelLoadCase',)


class ExternalCADModelLoadCase(_2268.ComponentLoadCase):
    '''ExternalCADModelLoadCase

    This is a mastapy class.
    '''

    TYPE = _EXTERNAL_CAD_MODEL_LOAD_CASE
    __hash__ = None

    def __init__(self, instance_to_wrap: 'ExternalCADModelLoadCase.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1919.ExternalCADModel':
        '''ExternalCADModel: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1919.ExternalCADModel)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

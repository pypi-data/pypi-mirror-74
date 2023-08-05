# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TreeTable(Component):
    """A TreeTable component.
TreeTable is a Dash component that displays a tree table.

TreeTable is the Dash encapsulation of the react tree table by Constantin Panaitescu:
https://github.com/constantin-p/cp-react-tree-table

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- nodes (dict; optional): The data structure to display. nodes has the following type: list of dicts containing keys 'data', 'height'.
Those keys have the following types:
  - data (boolean | number | string | dict | list; required): The node label
  - height (number; optional): The node value
- columns (dict; optional): The columns to display. columns has the following type: list of dicts containing keys 'label', 'property', 'renderer', 'grow', 'basis', 'className'.
Those keys have the following types:
  - label (string; optional): The title
  - property (string; optional): The row property to display
  - renderer (optional): The node element to display
  - grow (number; optional): flexGrow CSS property
  - basis (number; optional): flexBasis CSS property
  - className (string; optional): Classname of the column
- height (number; optional): The height of the rendered table (pixels).
- headerHeight (number; optional): The height of the rendered header row (pixels).
- style (dict; optional): Defines CSS styles which will override styles previously set.
- className (string; optional): Often used with CSS to style elements with common properties.
- loading_state (dict; optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, nodes=Component.UNDEFINED, columns=Component.UNDEFINED, height=Component.UNDEFINED, headerHeight=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'nodes', 'columns', 'height', 'headerHeight', 'style', 'className', 'loading_state']
        self._type = 'TreeTable'
        self._namespace = 'dash_useful_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'nodes', 'columns', 'height', 'headerHeight', 'style', 'className', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TreeTable, self).__init__(**args)

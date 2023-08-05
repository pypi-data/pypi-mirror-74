# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CollapsibleTableCell(Component):
    """A CollapsibleTableCell component.
CollapsibleTableCell is an inner component used by CollapsibleTableBody
to render the row header with :
- a button to expand / collapse the row
- a label if defined

Keyword arguments:
- index (number; required): Index of the row (used to handle the expanded state at CollapsibleTableBody level)
- expandable (boolean; required): Whether the cel is expandable or not
- level (number; optional): Level of the row
- expanded (boolean; optional): Whether the cell is expanded or collapsed"""
    @_explicitize_args
    def __init__(self, index=Component.REQUIRED, expandable=Component.REQUIRED, level=Component.UNDEFINED, expanded=Component.UNDEFINED, onExpand=Component.REQUIRED, **kwargs):
        self._prop_names = ['index', 'expandable', 'level', 'expanded']
        self._type = 'CollapsibleTableCell'
        self._namespace = 'dash_useful_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['index', 'expandable', 'level', 'expanded']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['index', 'expandable', 'onExpand']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CollapsibleTableCell, self).__init__(**args)

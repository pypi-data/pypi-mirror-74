from string import Template
from typing import List, Callable, Optional

import ipywidgets.widgets as widgets
import ujson
from IPython.core.display import Javascript
from ipycallback import SlowTunnelWidget

from labext.modules import JQuery, Selectize, LabExt
from labext.widget import WidgetWrapper


class Selection(WidgetWrapper):
    def __init__(self,
                 records: List[dict] = None,
                 item_field: str = 'text',
                 option_field: str = 'text',
                 value_field: str = 'value',
                 search_fields: List[str] = None,
                 search_fn: Callable[[str], List[dict]] = None,
                 layout: dict = None,
                 allow_creation: bool = False,
                 default_value: str = "",
                 max_items: Optional[int]=1):
        self.el_root = widgets.HTML(value='<select></select>', layout=layout or {})
        self.el_root_id = f"selection_{self.el_root.model_id}"
        self.el_root.add_class(self.el_root_id)

        self.version = -1
        # default value is '' (no choice) rather than None to be consistent with the selectize library!
        self.value: str = default_value

        self.records = records or []
        self.search_fn = search_fn
        self.item_field = item_field
        self.option_field = option_field
        self.value_field = value_field
        self.search_fields = search_fields or [self.item_field]
        self.allow_creation = allow_creation
        self.max_items = max_items or "null"
        self.on_change_callback = self.default_on_change_cb

        self.el_search_tunnel = SlowTunnelWidget()
        self.el_value_tunnel = SlowTunnelWidget()
        self.el_value_tunnel.on_receive(self._handle_change)

        if self.search_fn is not None:
            assert len(
                self.records
            ) == 0, "No need to pass the list of records when search function is provided"
            self.records = self.search_fn("")
            self.el_search_tunnel.on_receive(self._handle_search)

    @property
    def widget(self):
        return self.el_root

    @staticmethod
    def required_modules():
        return [JQuery, Selectize, LabExt]

    def _handle_search(self, version: int, query: str):
        results = self.search_fn(query)
        self.el_search_tunnel.push(version, ujson.dumps(results))

    def _handle_change(self, version: int, value: str):
        if version > self.version:
            self.version = version
            if value.startswith("["):
                value = ujson.loads(value)

            self.value = value
            self.on_change_callback(value)

    def get_value(self):
        return self.value

    def set_value(self, value):
        self.version += 1
        self.value = value
        if isinstance(self.value, list):
            value = ujson.dumps(self.value)
        self.el_value_tunnel.push(self.version, value)

    def get_auxiliary_components(self):
        selectize_options = """
            valueField: '$valueField',
            searchField: $searchFields,
            options: $options,
            dropdownParent: 'body',
            create: $allowCreation,
            maxItems: $maxItems,
            items: $items,
            onChange: function (value) {
                if (Array.isArray(value)) {
                    window.IPyCallback.get("$valueTunnel").send_msg(JSON.stringify(value));
                } else {
                    window.IPyCallback.get("$valueTunnel").send_msg(value);
                }
            },
            render: {
                item: function (item, escape) {
                    return '<div>' + item['$itemField'] + '</div>';
                },
                option: function (item, escape) {
                    return '<div>' + item['$optionField'] + '</div>';
                }
            },"""

        if self.search_fn is not None:
            selectize_options += """
            load: function (query, callback) {
                // send query
                let version = window.IPyCallback.get("$searchTunnel").send_msg(query);

                // register the callback to some where
                window.IPyCallback.get("$searchTunnel").on_receive((return_version, result) => {
                    if (return_version < version) {
                        // ignore the response as it's too old
                        return;
                    }
                    result = JSON.parse(result);
                    callback(result);
                });
            }"""

        selectize_options = Template(selectize_options.strip()) \
            .substitute(searchTunnel=self.el_search_tunnel.model_id, valueTunnel=self.el_value_tunnel.model_id,
                        valueField=self.value_field, searchFields=ujson.dumps(self.search_fields),
                        itemField=self.item_field, optionField=self.option_field,
                        options=ujson.dumps(self.records),
                        items=ujson.dumps(self.value if isinstance(self.value, list) else [self.value]),
                        maxItems=self.max_items,
                        allowCreation=str(self.allow_creation).lower())

        jscode = Template("""
require(["$JQueryId", "$SelectizeId"], function (jquery, _) {
    $CallUntilTrue(function () {
        // get the selection container
        var $$el = jquery(".$uniqueClassId");
        if (jquery('select', $$el).length == 0) {
            return false;
        }

        // make it looks beautiful
        jquery('select', $$el).selectize({
            $selectizeOptions
        });

        var selectize = jquery('select', $$el)[0].selectize;
        window.IPyCallback.get("$valueTunnel").on_receive((version, value) => {
            if (value == "") {
                selectize.clear(true);
            } else if (value[0] == "[") {
                var vals = JSON.parse(value);
                selectize.clear(true);
                for (let v of vals) {
                    selectize.addItem(v, true);
                }
            } else {
                selectize.addItem(value, true);
            }
        });
        return true;
    }, 100);
});
""".strip()).substitute(JQueryId=JQuery.id(),
                        SelectizeId=Selectize.id(),
                        uniqueClassId=self.el_root_id,
                        selectizeOptions=selectize_options,
                        valueTunnel=self.el_value_tunnel.model_id,
                        CallUntilTrue=LabExt.call_until_true)

        return [self.el_value_tunnel, self.el_search_tunnel, Javascript(jscode)]

    def default_on_change_cb(self, value: str):
        pass

    def on_change(self, cb: Callable[[str], None] = None):
        if cb is None:
            self.on_change_callback = self.default_on_change_cb
        else:
            self.on_change_callback = cb
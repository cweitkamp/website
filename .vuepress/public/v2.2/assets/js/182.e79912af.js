(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{729:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("The NeoHub binding allows you to connect openhab via TCP/IP to Heatmiser's NeoHub and integrate your NeoStat thermostats onto the bus.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("Item strings simply consist of two components - the NeoStat device name (as set in the thermostat and in the mobile app, e.g. Office), and the NeoStat property (e.g. CurrentTemperature). Both parameters are only separated by a colon. Some examples are below.")]),t._v(" "),t._m(6),n("p",[t._v("The following properties, and their associated item types are shown below. The R and RW in the description column indicate which properties are read only (RO) or read/write (RW).")]),t._v(" "),t._m(7),t._v(" "),n("DocPreviousVersions"),t._v(" "),n("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"neohub-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#neohub-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" NeoHub Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/neohub.cfg")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The binding polls each thermostat that is configured in your items, at the "),e("em",[this._v("refresh")]),this._v(" rate as set in the configuration.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Property")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("refresh")]),t._v(" "),n("td",[t._v("60000")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Refresh interval in milliseconds")])]),t._v(" "),n("tr",[n("td",[t._v("hostname")]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),n("td",[t._v("the NeoHub network address")])]),t._v(" "),n("tr",[n("td",[t._v("port")]),t._v(" "),n("td",[t._v("4242")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("the port number for the NeoHub interface")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Heating_Office")]),t._v("       "),n("span",{attrs:{class:"token string"}},[t._v('"Heating Office"')]),t._v("         "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("neohub"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Office:Heating"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Away_Office")]),t._v("          "),n("span",{attrs:{class:"token string"}},[t._v('"Away Office"')]),t._v("            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("neohub"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Office:Away"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Standby_Office")]),t._v("       "),n("span",{attrs:{class:"token string"}},[t._v('"Standby Office"')]),t._v("         "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("neohub"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Office:Standby"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Temperature_Office")]),t._v("   "),n("span",{attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("neohub"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Office:CurrentTemperature"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Property")]),t._v(" "),n("th",[t._v("Type Supported")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("CurrentTemperature")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("RO Current room temperature")])]),t._v(" "),n("tr",[n("td",[t._v("CurrentSetTemperature")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("RO Current set temperature")])]),t._v(" "),n("tr",[n("td",[t._v("CurrentFloorTemperature")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("RO Current floor temperature")])]),t._v(" "),n("tr",[n("td",[t._v("DeviceName")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("RO  Returns the device name")])]),t._v(" "),n("tr",[n("td",[t._v("Heating")]),t._v(" "),n("td",[t._v("Switch, String")]),t._v(" "),n("td",[t._v("RO Returns ON or OFF if heating is currently enabled or not")])]),t._v(" "),n("tr",[n("td",[t._v("Away")]),t._v(" "),n("td",[t._v("Switch, String")]),t._v(" "),n("td",[t._v("RW Returns ON or OFF if thermostat is in away mode or not")])]),t._v(" "),n("tr",[n("td",[t._v("Standby")]),t._v(" "),n("td",[t._v("Switch, String")]),t._v(" "),n("td",[t._v("RW Returns ON or OFF if thermostat is in standby mode or not")])])])])}],!1,null,null,null);s.options.__file="readme.md";e.default=s.exports}}]);
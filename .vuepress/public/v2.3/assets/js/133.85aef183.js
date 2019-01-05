(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{656:function(e,t,i){"use strict";i.r(t);var r=i(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("AddonLogo"),e._v(" "),i("p",[e._v("This is an openHAB binding for the "),i("a",{attrs:{href:"http://www.hunterdouglas.com/operating-systems/powerview-motorization/support",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hunter Douglas PowerView Motorized Shades"),i("OutboundLink")],1),e._v(" via the PowerView Hub.")]),e._v(" "),i("p",[e._v("PowerView shades have motorization control for their vertical position, as well as vane controls on the shade's slats.\nMake sure your Shades are visible in the dedicated PowerView app before attempting discovery.\nThis binding also supports Scenes that are defined via the PowerView app.\nThis helps to work around a limitation of the Hub - commands are executed serially with a several second delay between executions.\nBy using a Scene to control multiple shades at once, the shades will all begin moving at the same time.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("The PowerView Hub is discovered via a NetBios query.\nThis is the same method used by the dedicated PowerView app.\nAfter the Hub is added, Shades and Scenes will be discovered by querying the Hub.")]),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("PowerView things should be configured via discovery - it would be difficult to configure manually as the IDs of the shades and scenes are not exposed via the dedicated app.\nHowever, the configuration parameters are described below:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("Scenes channels are added to the Hub as they are discovered.")]),e._v(" "),e._m(10),e._v(" "),i("DocPreviousVersions"),e._v(" "),i("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"hunter-douglas-powerview-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hunter-douglas-powerview-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Hunter Douglas PowerView Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Thing")]),e._v(" "),i("th",[e._v("Thing Type")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("PowerView Hub")]),e._v(" "),i("td",[e._v("Bridge")]),e._v(" "),i("td",[e._v("The PowerView Hub provides the interface between your network and the shade's radio network. It also contains channels used to interact with scenes.")])]),e._v(" "),i("tr",[i("td",[e._v("PowerView Shade")]),e._v(" "),i("td",[e._v("Thing")]),e._v(" "),i("td",[e._v("A single motorized shade")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thing-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("tr",[i("td",[i("b",[e._v("Thing")])]),e._v(" "),i("td",[i("b",[e._v("Configuration Parameters")])])]),e._v(" "),i("tr",[i("td",[e._v("PowerView Hub")]),e._v(" "),i("td",[i("table",[i("tr",[i("td",[i("b",[e._v("host")]),e._v(" - the hostname or IP address of the Hub on your network.")])]),e._v(" "),i("tr",[i("td",[i("b",[e._v("refresh")]),e._v(" - the number of milliseconds between fetches of the PowerView Hub's shade state. Defaults to 60,000 (one minute).")])])])])]),e._v(" "),i("tr",[i("td",[e._v("PowerView Shade")]),e._v(" "),i("td",[i("table",[i("tr",[i("td",[i("b",[e._v("id")]),e._v(" - the ID of the PowerView Shade on the Hub.")])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"powerview-shade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powerview-shade","aria-hidden":"true"}},[this._v("#")]),this._v(" PowerView Shade")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Channel")]),e._v(" "),i("th",[e._v("Item Type")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("position")]),e._v(" "),i("td",[e._v("Rollershutter")]),e._v(" "),i("td",[e._v("The vertical position of the shade. Up/Down commands will move the shade to its completely up or completely down position. Move/Stop commands are ignored.")])]),e._v(" "),i("tr",[i("td",[e._v("vane")]),e._v(" "),i("td",[e._v("Dimmer")]),e._v(" "),i("td",[e._v("The amount the slats on the shade are open. Setting this value will completely close the shade first, as the slats can only be controlled in that position.")])]),e._v(" "),i("tr",[i("td",[e._v("batteryLow")]),e._v(" "),i("td",[e._v("Switch")]),e._v(" "),i("td",[e._v("Indicates ON when the battery level of the shade is low, as determined by the Hub's internal rules")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"powerview-scene"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powerview-scene","aria-hidden":"true"}},[this._v("#")]),this._v(" PowerView Scene")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Channel")]),e._v(" "),i("th",[e._v("Item Type")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("activate")]),e._v(" "),i("td",[e._v("Switch")]),e._v(" "),i("td",[e._v('Turning this to ON will activate the scene. Scenes are stateless in the PowerView hub - they have no on/off state. Include { autoupdate="false" } on your item configuration to avoid needing to toggle off and on.')])])])])}],!1,null,null,null);a.options.__file="readme.md";t.default=a.exports}}]);
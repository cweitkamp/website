(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{757:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("AddonLogo"),e._v(" "),n("p",[e._v("This binding integrates the "),n("a",{attrs:{href:"https://www.yeelight.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yeelight Lighting Product"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(1),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.yeelight.com/zh_CN/product/wifi-led-w",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yeelight LED White Bulb"),n("OutboundLink")],1),e._v(" (Thing type "),n("code",[e._v("dolphin")]),e._v(")")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.yeelight.com/zh_CN/product/wifi-led-c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yeelight LED Color Bulb"),n("OutboundLink")],1),e._v("(Thing type "),n("code",[e._v("wonder")]),e._v(")")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.yeelight.com/zh_CN/product/pitaya",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yeelight LED Color Stripe"),n("OutboundLink")],1),e._v(" (Thing type "),n("code",[e._v("stripe")]),e._v(")")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.yeelight.com/en_US/product/luna",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yeelight LED Ceiling Light"),n("OutboundLink")],1),e._v(" (Thing type "),n("code",[e._v("ceiling")]),e._v(")")])]),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("To control Yeelight devices with this binding, you need to connect the device to your local network at first with the Yeelight app.\nThis app is available in the iOS AppStore and on Google Play.")]),e._v(" "),n("p",[e._v("Then you need to activate LAN control mode by enable Developer Mode in device settings, after which it will become discoverable by openHAB.")]),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("Yeelight smart LED devices announce themselves on the network through UPnP, so that they can be discovered.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("All devices support some of the following channels:")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),n("p",[e._v("Things:")]),e._v(" "),e._m(10),n("p",[e._v("Items:")]),e._v(" "),e._m(11),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"yeelight-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yeelight-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Yeelight Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"preconditions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preconditions","aria-hidden":"true"}},[this._v("#")]),this._v(" Preconditions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thing-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All Yeelight things require the "),t("code",[this._v("deviceId")]),this._v(" from the device as a configuration parameter:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Parameter")]),e._v(" "),n("th",[e._v("Values")]),e._v(" "),n("th",[e._v("Mandatory")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("deviceId")]),e._v(" "),n("td",[e._v("ID of the Yeelight device")]),e._v(" "),n("td",[e._v("Yes")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Channel")]),e._v(" "),n("th",[e._v("Item Type")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("brightness")])]),e._v(" "),n("td",[n("code",[e._v("Dimmer")])]),e._v(" "),n("td",[e._v("This channel supports adjusting the brightness value, it is available on "),n("code",[e._v("dolphin")]),e._v(" and "),n("code",[e._v("ceiling")]),e._v(".")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("color")])]),e._v(" "),n("td",[n("code",[e._v("Color")])]),e._v(" "),n("td",[e._v("This channel supports color control, it is available on "),n("code",[e._v("wonder")]),e._v(" and "),n("code",[e._v("stripe")]),e._v(".")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("colorTemperature")])]),e._v(" "),n("td",[n("code",[e._v("Dimmer")])]),e._v(" "),n("td",[e._v("This channel supports adjusting the color temperature, it is available on "),n("code",[e._v("wonder")]),e._v(" and "),n("code",[e._v("stripe")]),e._v(" and `ceiling.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"full-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[e._v("Thing")]),e._v(" "),n("span",{attrs:{class:"token class-name"}},[e._v("yeelight"),n("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("stripe"),n("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("1")]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" deviceId"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token string"}},[e._v('"0x000000000321a1bc"')]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[e._v("Color")]),e._v(" "),n("span",{attrs:{class:"token class-name"}},[e._v("YeelightLEDColor")]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token string"}},[e._v('"yeelight:stripe:1:color"')]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])}],!1,null,null,null);r.options.__file="readme.md";t.default=r.exports}}]);
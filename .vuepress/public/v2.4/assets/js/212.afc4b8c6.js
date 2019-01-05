(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{789:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.chamberlain.com/smartphone-control-products/myq-smartphone-control",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chamberlain MyQ"),a("OutboundLink")],1),t._v(" system allows you to connect your garage door to the internet to be controlled from anywhere using your smartphone. Using this API, The Chamberlain MyQ Binding can get the status of your garage door opener and send commands to open or close it.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("The Chamberlain MyQ Binding only requires your Chamberlain MyQ Username and Password.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Both Garage Door Openers and Light Switch Module are supported. For Garage Door Openers multiple Item Types are supported.")]),t._v(" "),a("p",[t._v('Contact type will display if you garage door is open or closed. String type will display the state from the MYQ API "Open,Closed,Opening,Closing,Partially Open/Closed". Switch type will display "ON" state for open or partially open/closed and "OFF" state for closed. Turning the switch ON will open the door and turning the switch OFF will close the door.')]),t._v(" "),a("p",[t._v("Light Switch Module only support Switch Item types.")]),t._v(" "),a("p",[t._v('The device index is needed to config the items. For people with only one garage door opener the value needs to be set to "0". If you have multiple garage door openers and/or lights, the device index is based on the order the garage door opener/light\'s were added to the MyQ App. Starting openHAB in debug mode will display your MyQ Devices and the order they are listed in the API. This order is how you determine the device indexes.')]),t._v(" "),t._m(5),a("p",[t._v("Both Devices also support parameter values. The parameters values are other information supplied by the API that cannot be changed by the binding.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"chamberlain-myq-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chamberlain-myq-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Chamberlain MyQ Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/myq.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("username")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Chamberlain MyQ Username")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Chamberlain MyQ Password")])]),t._v(" "),a("tr",[a("td",[t._v("refresh")]),t._v(" "),a("td",[t._v("60000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("Data refresh interval in milliseconds (60000 is one minute)")])]),t._v(" "),a("tr",[a("td",[t._v("quickrefresh")]),t._v(" "),a("td",[t._v("2000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("Data refresh interval after Event is trigger in milliseconds")])]),t._v(" "),a("tr",[a("td",[t._v("timeout")]),t._v(" "),a("td",[t._v("5000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("Timeout for HTTP requests in milliseconds")])]),t._v(" "),a("tr",[a("td",[t._v("appId")]),t._v(" "),a("td",[t._v("see description")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("Application ID for the MyQ API (only recommended if existing id ceases to work). It is recommended you do not supply your own appId unless you understand how the binding internal logic works and how/what could stop working.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("[DEBUG] [o.b.myq.internal.MyqDeviceData:44   ] - Chamberlain MyQ Devices:\n[DEBUG] [binding.myq.internal.MyqDevice:40   ] - Lamp DeviceID: 1234567 DeviceType: LampModule Lightstate : 0\n[DEBUG] [binding.myq.internal.MyqDevice:38   ] - GarageDoorOpener DeviceID: 1234568 DeviceType: GarageDoorOpener Doorstate : 2\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LampModule")]),t._v("               "),a("span",{attrs:{class:"token string"}},[t._v('"Lamp Module On"')]),t._v("                "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"0"')]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LampModuleCustomerName")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Lamp Module Name [%s]"')]),t._v("         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"0#customerName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LampModuleDesc")]),t._v("           "),a("span",{attrs:{class:"token string"}},[t._v('"Lamp Module Desc [%s]"')]),t._v("         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"0#desc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LampModuleOnline")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"Lamp Module Online [%s]"')]),t._v("       "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"0#online"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LampModuleDeviceId")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"Lamp Module Device Id [%s]"')]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"0#MyQDeviceId"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LampModuleDeviceType")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Lamp Module DeviceType [%s]"')]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"0#MyQDeviceTypeName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LampModuleSerialNumber")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Lamp Module SerialNumber [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"0#SerialNumber"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorSwitch")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door Open"')]),t._v("              "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorContact")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door [%s]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <contact>")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorString")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door [%s]"')]),t._v("              "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorShutter")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door Open"')]),t._v("              "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorCustomerName")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door Name [%s]"')]),t._v("         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1#customerName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorDesc")]),t._v("           "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door Desc [%s]"')]),t._v("         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1#desc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorOnline")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door Online [%s]"')]),t._v("       "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1#online"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorDeviceId")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door Device Id [%s]"')]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1#MyQDeviceId"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorDeviceType")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door DeviceType [%s]"')]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1#MyQDeviceTypeName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GarageDoorSerialNumber")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door SerialNumber [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("myq"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"1#SerialNumber"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sitemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LampModule\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LampModuleCustomerName\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LampModuleDesc\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LampModuleOnline\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LampModuleDeviceId\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LampModuleDeviceType\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LampModuleSerialNumber\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorSwitch\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorString\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorContact\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorShutter\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorCustomerName\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorDesc\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorOnline\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorDeviceId\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorDeviceType\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GarageDoorSerialNumber\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"known-working-hardware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-working-hardware","aria-hidden":"true"}},[this._v("#")]),this._v(" Known Working Hardware")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",[t._v("Name")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("HD950WF")]),t._v(" "),a("td",[t._v("Chamberlain 1.25 hps Wi-Fi Garage Door Opener")])]),t._v(" "),a("tr",[a("td",[t._v("WD850KEVG")]),t._v(" "),a("td",[t._v("Chamberlain 1 hps Garage Door Opener with MyQ Internet Gateway")])]),t._v(" "),a("tr",[a("td",[t._v("WD832KEV")]),t._v(" "),a("td",[t._v("Chamberlain 1/2 hps MyQ Garage Door Opener")])]),t._v(" "),a("tr",[a("td",[t._v("825LM")]),t._v(" "),a("td",[t._v("Liftmaster 825LM Remote Light Module")])]),t._v(" "),a("tr",[a("td",[t._v("823LM")]),t._v(" "),a("td",[t._v("Liftmaster 823LM Remote Light Switch")])])])])}],!1,null,null,null);n.options.__file="readme.md";s.default=n.exports}}]);
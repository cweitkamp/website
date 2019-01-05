(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{745:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("This binding integrates the "),a("a",{attrs:{href:"http://www.belkin.com/us/Products/c/home-automation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Belkin WeMo Family"),a("OutboundLink")],1),t._v(".\nThe integration happens either through the WeMo-Link bridge, which acts as an IP gateway to the ZigBee devices or through WiFi connection to standalone devices.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The WeMo Binding supports the Socket, Insight, Lightswitch, Motion and Maker devices, as well as the WeMo-Link bridge with WeMo LED bulbs.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("The WeMo devices are discovered through UPnP discovery service in the network. Devices will show up in the inbox and can be easily added as Things.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The binding does not need any special configuration")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("For manual Thing configuration, one needs to know the UUID of a certain WeMo device.\nIn the thing file, this looks e.g. like")]),t._v(" "),t._m(5),a("p",[t._v("For a WeMo Link bridge and paired LED Lights, please use the following Thing definition")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("Devices support some of the following channels:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("demo.things:")]),t._v(" "),t._m(10),a("p",[t._v("demo.items:")]),t._v(" "),t._m(11),a("p",[t._v("demo.sitemap:")]),t._v(" "),t._m(12),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"belkin-wemo-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#belkin-wemo-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Belkin Wemo Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('wemo:socket:Switch1 [udn="Socket-1_0-221242K11xxxxx"]\n')])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("wemo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Bridge")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("_0"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("231445")]),t._v("B01006A0 "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("udn"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Bridge-1_0-231445B010xxxx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nMZ100 "),a("span",{attrs:{class:"token number"}},[t._v("94103")]),t._v("EA2B278xxxx "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceID"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"94103EA2B278xxxx"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nMZ100 "),a("span",{attrs:{class:"token number"}},[t._v("94103")]),t._v("EA2B278xxxx "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceID"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"94103EA2B278xxxx"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Type ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("motionDetection")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("On if motion is detected, off otherwise. (Motion Sensor only)")])]),t._v(" "),a("tr",[a("td",[t._v("lastMotionDetected")]),t._v(" "),a("td",[t._v("DateTime")]),t._v(" "),a("td",[t._v("Representing the Date and Time when the last motion was detected. (Motion Sensor only)")])]),t._v(" "),a("tr",[a("td",[t._v("state")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("This channel controls the actual binary State of a Device or represents Motion Detection.")])]),t._v(" "),a("tr",[a("td",[t._v("lastChangedAt")]),t._v(" "),a("td",[t._v("DateTime")]),t._v(" "),a("td",[t._v("Representing the Date and Time the device was last turned on or of.")])]),t._v(" "),a("tr",[a("td",[t._v("lastOnFor")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Time in seconds an Insight device was last turned on for.")])]),t._v(" "),a("tr",[a("td",[t._v("onToday")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Time in seconds an Insight device has been switched on today.")])]),t._v(" "),a("tr",[a("td",[t._v("onTotal")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Time in seconds an Insight device has been switched on totally.")])]),t._v(" "),a("tr",[a("td",[t._v("timespan")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Time in seconds over which onTotal applies. Typically 2 weeks except first used.")])]),t._v(" "),a("tr",[a("td",[t._v("averagePower")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Average power consumption in Watts.")])]),t._v(" "),a("tr",[a("td",[t._v("currentPower")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Current power consumption of an Insight device. 0 if switched off.")])]),t._v(" "),a("tr",[a("td",[t._v("energyToday")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Energy in Wh used today.")])]),t._v(" "),a("tr",[a("td",[t._v("energyTotal")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Energy in Wh used in total.")])]),t._v(" "),a("tr",[a("td",[t._v("standbyLimit")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Minimum energy draw in W to register device as switched on (default 8W, configurable via WeMo App).")])]),t._v(" "),a("tr",[a("td",[t._v("brightness")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Brightness of a WeMo LED.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[t._v("wemo"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("socket"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("Switch1 "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("udn"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Socket-1_0-221242K11xxxxx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nwemo"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("motion"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("Sensor1 "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("udn"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Sensor-1_0-221337L11xxxxx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("wemo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Bridge")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("_0"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("231445")]),t._v("B010xxxx "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("udn"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Bridge-1_0-231445B010xxxx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nMZ100 "),a("span",{attrs:{class:"token number"}},[t._v("94103")]),t._v("EA2B278xxxx "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceID"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"94103EA2B278xxxx"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nMZ100 "),a("span",{attrs:{class:"token number"}},[t._v("94103")]),t._v("EA2B278xxxx "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceID"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"94103EA2B278xxxx"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("DemoSwitch")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:socket:Switch1:state"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LightSwitch")]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:lightswitch:Lightswitch1:state"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MotionSensor")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:Motion:Sensor1:motionDetection"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MotionDetected")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:Motion:Sensor1:lastMotionDetected"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("InsightPower")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:insight:Insight1:currentPower"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("InsightLastOn")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:insight:Insight1:lastOnFor"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("InsightToday")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:insight:Insight1:onToday"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("InsightTotal")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:insight:Insight1:onTotal"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LED1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:MZ100:Bridge-1_0-231445B010xxxx:94103EA2B278xxxx:state"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("dLED1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:MZ100:Bridge-1_0-231445B010xxxx:94103EA2B278xxxx:brightness"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LED2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:MZ100:Bridge-1_0-231445B010xxxx:94103EA2B278xxxx:state"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("dLED2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wemo:MZ100:Bridge-1_0-231445B010xxxx:94103EA2B278xxxx:brightness"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"WeMo"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("DemoSwitch\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LightSwitch\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("MotionSensor\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("InsightPower\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("InsightLastOn\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("InsightToday\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("InsightTotal\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LED1\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("dLED1\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LED2\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("dLED2\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);
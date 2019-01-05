(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{535:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v('This binding is for users coming from the proprietary homeautomation-system "IP-Symcon". If you have bought some hardware from them, you can use this binding to enable your AKM868 presence detection system.')]),t._v(" "),a("p",[t._v("The following hardware was used to do presence detection with the AKM-868 controller and a OVO868-tracker for your key-ring:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The syntax of the binding configuration strings accepted is the following:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),a("p",[t._v("You must use a LANT-868 Adapter. The USB868-Adapter doesn't work.  However, if you own a USB adapter, there is a workaround utilizing the Serial binding (1.x).")]),t._v(" "),a("p",[t._v("Once the Serial binding is installed, following items are needed for the workaround:")]),t._v(" "),t._m(21),a("p",[t._v("This rule handles an incoming event form the keyfob:")]),t._v(" "),t._m(22),a("p",[t._v("A second rule is needed to periodically check if the there was an update from the keyfob. If there was no update in the last 100 seconds, the assumption is that the fob is out of range.")]),t._v(" "),t._m(23),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"akm868-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#akm868-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" AKM868 Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/openhab/openhab1-addons/master/bundles/binding/org.openhab.binding.akm868/src/main/resources/AKM868.png",alt:"AKM-Module"}}),this._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/openhab/openhab1-addons/master/bundles/binding/org.openhab.binding.akm868/src/main/resources/LAN-T868.png",alt:"LAN-T Module"}}),this._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/openhab/openhab1-addons/master/bundles/binding/org.openhab.binding.akm868/src/main/resources/Tracker-868xOVO.png",alt:"868xOVO Tracker"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The binding can be configured in the file "),s("code",[this._v("services/akm868.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("host")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("IP address of the adapter LAN-T 868")])]),t._v(" "),a("tr",[a("td",[t._v("port")]),t._v(" "),a("td",[t._v("10001")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("Port of the adapter LAN-T 868")])]),t._v(" "),a("tr",[a("td",[t._v("timeout")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("Timeout in milliseconds. If the AKM-Controller does not send an update within that timeframe, the switch item is changing to OFF")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item  Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{ akm868="id=x,channel=y" }\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("id")]),this._v(" represents the ID of your OVO-Tracker.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("channel")]),this._v(" can be one of the following values:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("channel")]),t._v(" "),a("th",[t._v("meaning")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("notify on pings from the tracker")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("when the button of the tracker was pressed")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("when the button of the tracker was pressed longer")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PresenceMichael")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Key Michael"')]),a("span",{attrs:{class:"token function"}},[t._v(" <present>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("akm868"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=9999,channel=0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This item would turn the Switch to "),s("code",[this._v("ON")]),this._v(" as soon as openHAB receives a PING from the tracker. It will turn the Switch to "),s("code",[this._v("OFF")]),this._v(" if the tracker doesn't send another PING within the given timeframe ("),s("code",[this._v("timeout")]),this._v(" value from the configuration).")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("KeyPressedShortMichael")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Key Michael"')]),a("span",{attrs:{class:"token function"}},[t._v(" <present>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("akm868"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=9999,channel=1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This item would turn the Switch to "),s("code",[this._v("ON")]),this._v(" every time the key was pressed.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("KeyPressedLongeMichael")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Key Michael"')]),a("span",{attrs:{class:"token function"}},[t._v(" <present>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("akm868"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=9999,channel=5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This item would turn the Switch to "),s("strong",[this._v("ON")]),this._v(" every time the key was pressed for a longer time.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Rules")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Turn off WIFI if not at Home"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" \n  "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" PresenceMichael "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),t._v("\t  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v(" \n  "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Wifi"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"Wifi OFF"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Power_Upstairs_Wifi"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("\t "),a("span",{attrs:{class:"token class-name"}},[t._v("Presence_AKM_ComPort")]),t._v("\t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Last String from AKM [%s]"')]),t._v(" \t"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" serial"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyUSB1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//check USB port is matching to your system configuration")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Presence_AKM1_LastUpdate")]),t._v("\t"),a("span",{attrs:{class:"token string"}},[t._v('"Key 1: Last Update:  [%1$td.%1$tm.%1$tY %1$tT]"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("   "),a("span",{attrs:{class:"token class-name"}},[t._v("Presence_AKM1_Action")]),t._v(" \t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Key 1: Last Action:  [%s]"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("\t "),a("span",{attrs:{class:"token class-name"}},[t._v("Presence_AKM")]),t._v("\t\t\t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Presence AKM"')]),a("span",{attrs:{class:"token function"}},[t._v("\t<contact>")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Presence AKM Direct"')]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Presence_AKM_ComPort "),a("span",{attrs:{class:"token keyword"}},[t._v("received update")]),t._v(" \n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" buffer"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("Presence_AKM_ComPort")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('","')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// var String id = buffer.get(2) // this is the ID of the keyfob. rule could be enhanced to distinguish several keyfobs")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" action "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" buffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" packetValid "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" buffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("packetValid"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("contains")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"OK"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("postUpdate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Presence_AKM1_LastUpdate"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("DateTimeType")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token function-name"}},[t._v("Presence_AKM")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"ON"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("Presence_AKM1_Action")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Ping"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("Presence_AKM1_Action")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"PressedShort"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("Presence_AKM1_Action")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"PressedLong"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Presence AKM reset"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" \n  "),a("span",{attrs:{class:"token keyword"}},[t._v("Time cron")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0 0/1 * * * ?"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function-name"}},[t._v("Presence_AKM")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("DateTimeType")]),t._v(" l_akm1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("Presence_AKM1_LastUpdate")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("DateTimeType")]),t._v("\t\t\t\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("DateTimeType")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calendar"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeInMillis "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" l_akm1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calendar"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeInMillis"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 100 sec timeout")]),t._v("\n      "),a("span",{attrs:{class:"token function-name"}},[t._v("Presence_AKM1_Action")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Away"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token function-name"}},[t._v("Presence_AKM")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"OFF"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);
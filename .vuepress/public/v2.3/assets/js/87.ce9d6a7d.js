(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{587:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This binding integrates Denon & Marantz AV receivers by using either Telnet or a (undocumented) HTTP API.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This binding is an adaptation of the existing Denon 1.x binding.\nIt can be fully configured without any configuration files.\nIn most cases the AVRs can be discovered and will be added to the Inbox of the Paper UI.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Tested models: Marantz SR5008, Denon AVR-X2000 / X3000 / X1200W / X2100W / X2200W / X3100W / X3300W")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("This binding can discover Denon and Marantz receivers using mDNS.\nThe serial number (which is the MAC address of the network interface) is used as unique identifier.")]),t._v(" "),a("p",[t._v("It tries to detect the number of zones (when the AVR responds to HTTP). It defaults to 2 zones.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("The AVR should be auto-discovered correctly.\nIn case it does not work you can add the AVR manually.\nThere are no configuration files for this binding.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("The DenonMarantz AVR supports the following channels (some channels are model specific):")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("(R) = read-only (no updates possible)\n(RW) = read-write\n(W) = write-only (no feedback)")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://m.us.marantz.com/DocumentMaster/US/Marantz%202014%20NR%20Series%20-%20SR%20Series%20RS232%20IP%20Protocol.xls",target:"_blank",rel:"noopener noreferrer"}},[t._v("Marantz Control Protocol (2014+)"),a("OutboundLink")],1)])]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"denon-marantz-binding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#denon-marantz-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Denon / Marantz Binding")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"supported-things"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("This binding supports Denon and Marantz receivers having a Telnet interface or a web based controller at "),n("code",[this._v("http://<AVR IP address>/")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Denon models with HEOS support ("),n("code",[this._v("AVR-X..00H")]),this._v(") do not support the HTTP API. They do support Telnet.\nDuring Discovery this is auto-detected and configured.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"discovery"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"binding-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"thing-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("The DenonMarantz AVR thing requires the "),n("code",[this._v("host")]),this._v(" it can connect to.\nThere are more parameters which all have defaults set.")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Values")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("host")]),t._v(" "),a("td",[t._v("hostname / IP address of the AVR")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("zoneCount")]),t._v(" "),a("td",[t._v("[1, 2 or 3]")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("telnetEnabled")]),t._v(" "),a("td",[t._v("true, false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("telnetPort")]),t._v(" "),a("td",[t._v("port number, e.g. 23")]),t._v(" "),a("td",[t._v("23")])]),t._v(" "),a("tr",[a("td",[t._v("httpPort")]),t._v(" "),a("td",[t._v("port number, e.g. 80")]),t._v(" "),a("td",[t._v("80")])]),t._v(" "),a("tr",[a("td",[t._v("httpPollingInterval")]),t._v(" "),a("td",[t._v("polling interval in seconds (minimal 5)")]),t._v(" "),a("td",[t._v("5")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"static-definition-in-a-things-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#static-definition-in-a-things-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Static definition in a .things file")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Example  "),n("code",[this._v(".things")]),this._v(" file entry:")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("denonmarantz"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("avr"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0005cd123456")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Receiver"')]),t._v(" @ "),a("span",{attrs:{class:"token string"}},[t._v('"Living room"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("host"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"192.168.1.100"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"channels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Type ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("General")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("general#power")]),t._v(" "),a("td",[t._v("Switch (RW)")]),t._v(" "),a("td",[t._v("Power on/off")])]),t._v(" "),a("tr",[a("td",[t._v("general#surroundProgram")]),t._v(" "),a("td",[t._v("String (R)")]),t._v(" "),a("td",[t._v("current surround program (e.g. STEREO)")])]),t._v(" "),a("tr",[a("td",[t._v("general#artist")]),t._v(" "),a("td",[t._v("String (R)")]),t._v(" "),a("td",[t._v("artist of current track")])]),t._v(" "),a("tr",[a("td",[t._v("general#album")]),t._v(" "),a("td",[t._v("String (R)")]),t._v(" "),a("td",[t._v("album of current track")])]),t._v(" "),a("tr",[a("td",[t._v("general#track")]),t._v(" "),a("td",[t._v("String (R)")]),t._v(" "),a("td",[t._v("title of current track")])]),t._v(" "),a("tr",[a("td",[t._v("general#command")]),t._v(" "),a("td",[t._v("String (W)")]),t._v(" "),a("td",[t._v("Command to send to the AVR (for use in Rules)")])]),t._v(" "),a("tr",[a("td",[t._v("Now Playing")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Main zone")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("mainZone#power")]),t._v(" "),a("td",[t._v("Switch (RW)")]),t._v(" "),a("td",[t._v("Main zone power on/off")])]),t._v(" "),a("tr",[a("td",[t._v("mainZone#volume")]),t._v(" "),a("td",[t._v("Dimmer (RW)")]),t._v(" "),a("td",[t._v("Main zone volume")])]),t._v(" "),a("tr",[a("td",[t._v("mainZone#volumeDB")]),t._v(" "),a("td",[t._v("Number (RW)")]),t._v(" "),a("td",[t._v("Main zone volume in dB (-80 offset)")])]),t._v(" "),a("tr",[a("td",[t._v("mainZone#mute")]),t._v(" "),a("td",[t._v("Switch (RW)")]),t._v(" "),a("td",[t._v("Main zone mute")])]),t._v(" "),a("tr",[a("td",[t._v("mainZone#input")]),t._v(" "),a("td",[t._v("String (RW)")]),t._v(" "),a("td",[t._v("Main zone input (e.g. TV, TUNER, ..)")])]),t._v(" "),a("tr",[a("td",[t._v("Zone 2")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("zone2#power")]),t._v(" "),a("td",[t._v("Switch (RW)")]),t._v(" "),a("td",[t._v("Zone 2 power on/off")])]),t._v(" "),a("tr",[a("td",[t._v("zone2#volume")]),t._v(" "),a("td",[t._v("Dimmer (RW)")]),t._v(" "),a("td",[t._v("Zone 2 volume")])]),t._v(" "),a("tr",[a("td",[t._v("zone2#volumeDB")]),t._v(" "),a("td",[t._v("Number (RW)")]),t._v(" "),a("td",[t._v("Zone 2 volume in dB (-80 offset)")])]),t._v(" "),a("tr",[a("td",[t._v("zone2#mute")]),t._v(" "),a("td",[t._v("Switch (RW)")]),t._v(" "),a("td",[t._v("Zone 2 mute")])]),t._v(" "),a("tr",[a("td",[t._v("zone2#input")]),t._v(" "),a("td",[t._v("String (RW)")]),t._v(" "),a("td",[t._v("Zone 2 input")])]),t._v(" "),a("tr",[a("td",[t._v("Zone 3")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("zone3#power")]),t._v(" "),a("td",[t._v("Switch (RW)")]),t._v(" "),a("td",[t._v("Zone 3 power on/off")])]),t._v(" "),a("tr",[a("td",[t._v("zone3#volume")]),t._v(" "),a("td",[t._v("Dimmer (RW)")]),t._v(" "),a("td",[t._v("Zone 3 volume")])]),t._v(" "),a("tr",[a("td",[t._v("zone3#volumeDB")]),t._v(" "),a("td",[t._v("Number (RW)")]),t._v(" "),a("td",[t._v("Zone 3 volume in dB (-80 offset)")])]),t._v(" "),a("tr",[a("td",[t._v("zone3#mute")]),t._v(" "),a("td",[t._v("Switch (RW)")]),t._v(" "),a("td",[t._v("Zone 3 mute")])]),t._v(" "),a("tr",[a("td",[t._v("zone3#input")]),t._v(" "),a("td",[t._v("String (RW)")]),t._v(" "),a("td",[t._v("Zone 3 input")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"item-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Example of usage in "),n("code",[this._v(".items")]),this._v(" files.")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("marantz_power")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"Receiver"')]),a("span",{attrs:{class:"token function"}},[t._v(" <switch>")]),t._v("         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"denonmarantz:avr:0006781d58b1:general#power"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("marantz_volume")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Volume"')]),t._v("  "),a("span",{attrs:{class:"token function"}},[t._v(" <soundvolume>")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"denonmarantz:avr:0006781d58b1:mainZone#volume"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("marantz_volumeDB")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%.1f dB]"')]),t._v("          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"denonmarantz:avr:0006781d58b1:mainzone#volume"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("marantz_mute")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Mute"')]),t._v("    "),a("span",{attrs:{class:"token function"}},[t._v(" <mute>")]),t._v("           "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"denonmarantz:avr:0006781d58b1:mainZone#mute"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("marantz_z2power")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Zone 2"')]),t._v("                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"denonmarantz:avr:0006781d58b1:zone2#power"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("marantz_input")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"Input [%s]"')]),t._v("                "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"denonmarantz:avr:0006781d58b1:mainZone#input"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("marantz_surround")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Surround: [%s]"')]),t._v("            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"denonmarantz:avr:0006781d58b1:general#surroundProgram"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("marantz_command")]),t._v("                              "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"denonmarantz:avr:0006781d58b1:general#command"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"sitemap-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap Configuration")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Example of displaying the items in a "),n("code",[this._v(".sitemap")]),this._v(" file.")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("marantz_input "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Receiver"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("icon")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"receiver"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Default")]),t._v("   "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("marantz_power\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Default")]),t._v("   "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("marantz_mute      "),a("span",{attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("marantz_power"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("marantz_volume    "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%.1f]"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("minValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("maxValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("40")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0.5")]),t._v("  "),a("span",{attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("marantz_power"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Default")]),t._v("   "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("marantz_volumeDB  "),a("span",{attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("marantz_power"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("marantz_input     "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TV"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("TV"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("MPLAY"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Kodi"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("marantz_power"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Default")]),t._v("   "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("marantz_surround  "),a("span",{attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("marantz_power"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"using-the-command-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-the-command-channel","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the command channel")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("In a "),n("code",[this._v(".rules")]),this._v(" file you can use the sendCommand function to send a command to the AVR.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('marantz_command.sendCommand("MSMCH STEREO")\n')])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"control-protocol-documentation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#control-protocol-documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" Control protocol documentation")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("These resources can be useful to learn what to send using the "),n("code",[this._v("command")]),this._v("channel:")])}],!1,null,null,null);e.options.__file="readme.md";n.default=e.exports}}]);
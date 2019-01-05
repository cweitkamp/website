(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{711:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("The binding integrates LG WebOS based smart TVs.\nThis binding uses a "),a("a",{attrs:{href:"https://github.com/sprehn/Connect-SDK-Java-Core",target:"_blank",rel:"noopener noreferrer"}},[t._v("forked version"),a("OutboundLink")],1),t._v(" of LG's "),a("a",{attrs:{href:"https://github.com/ConnectSDK/Connect-SDK-Android-Core",target:"_blank",rel:"noopener noreferrer"}},[t._v("Connect SDK"),a("OutboundLink")],1),t._v(" library.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("LG webOS based smart TVs are supported.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v('The TV must be connected to the same network as openHAB.\nUnder network settings allow "LG CONNECT APPS" to connect.')]),t._v(" "),a("p",[t._v("Note: Under general settings allow mobile applications to turn on the TV, if this option is available.\nIn combination with the wake on LAN binding this will allow you to start the TV via openHAB.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("The binding has only one configuration parameter, which is only required if the binding cannot automatically detect openHAB's local IP address:")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("If LocalIP is not set, the binding will use openHAB's primary IP address, which may be configured under network settings.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("TVs are auto discovered through SSDP in the local network.\nThe binding broadcasts a search message via UDP on the network.")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("WebOS TV has no configuration parameters.\nPlease note that at least one channel must be bound to an item before the binding will make an attempt to connect and pair with the TV once that one is turned on.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("Assuming your TV has device ID 3aab9eea-953b-4272-bdbd-f0cd0ecf4a46.\nBy default this binding will create ThingIDs for discovery results with prefix lgwebos:WebOSTV: and the device ID. e.g. lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46.\nThus, you can find your TV's device ID by looking into discovery results in Paper UI.")]),t._v(" "),a("p",[t._v("You could also specify an alternate ThingID using a .things file, specifying the deviceId as a mandatory configuration parameter:")]),t._v(" "),t._m(11),a("p",[t._v("However, for the next steps of this example we will assumes you are using automatic discovery and the default ThingID.")]),t._v(" "),a("p",[t._v("demo.items:")]),t._v(" "),t._m(12),a("p",[t._v("demo.sitemap:")]),t._v(" "),t._m(13),a("p",[t._v("demo.rules:")]),t._v(" "),t._m(14),a("p",[t._v("Example of a toast message.")]),t._v(" "),t._m(15),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"lg-webos-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lg-webos-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" LG webOS Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"lg-webos-smart-tvs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lg-webos-smart-tvs","aria-hidden":"true"}},[this._v("#")]),this._v(" LG webOS smart TVs")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"tv-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tv-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" TV Settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Name")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("LocalIP")]),this._v(" "),s("td",[this._v("This is the local IP of your openHAB host on the network. (Optional)")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Type ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Read/Write")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("power")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Current power setting. TV can only be powered off, not on.")]),t._v(" "),a("td",[t._v("RW")])]),t._v(" "),a("tr",[a("td",[t._v("mute")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Current mute setting.")]),t._v(" "),a("td",[t._v("RW")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("Current volume setting. Setting and reporting absolute percent values only works when using internal speakers. When connected to an external amp, the volume should be controlled using increase and decrease commands.")]),t._v(" "),a("td",[t._v("RW")])]),t._v(" "),a("tr",[a("td",[t._v("channel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Current channel number. Supports increase and decrease commands as well for relative channel up and down.")]),t._v(" "),a("td",[t._v("RW")])]),t._v(" "),a("tr",[a("td",[t._v("channelName")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Current channel name")]),t._v(" "),a("td",[t._v("R")])]),t._v(" "),a("tr",[a("td",[t._v("toast")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Displays a short message on the TV screen. See also rules section.")]),t._v(" "),a("td",[t._v("W")])]),t._v(" "),a("tr",[a("td",[t._v("mediaPlayer")]),t._v(" "),a("td",[t._v("Player")]),t._v(" "),a("td",[t._v("Media control player")]),t._v(" "),a("td",[t._v("W")])]),t._v(" "),a("tr",[a("td",[t._v("mediaStop")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Media control stop")]),t._v(" "),a("td",[t._v("W")])]),t._v(" "),a("tr",[a("td",[t._v("appLauncher")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Application ID of currently running application. This also allows to start applications on the TV by sending a specific Application ID to this channel.")]),t._v(" "),a("td",[t._v("RW")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("lgwebos"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("WebOSTV"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("tv1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"3aab9eea-953b-4272-bdbd-f0cd0ecf4a46"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_Power")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TV Power"')]),a("span",{attrs:{class:"token function"}},[t._v(" <television>")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46:power"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_Mute")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"TV Mute"')]),t._v("                "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46:mute"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_Volume")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%S]"')]),t._v("           "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46:volume"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_VolDummy")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"VolumeUpDown"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_ChannelNo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Channel [%d]"')]),t._v("       "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46:channel"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_ChannelDummy")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ChannelUpDown"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Channel [%S]"')]),t._v("         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46:channelName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_Toast")]),t._v("                          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46:toast"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_Stop")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Stop"')]),t._v("                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46:mediaStop"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_Application")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Application [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46:appLauncher"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Player")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_Player")]),t._v("                         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lgwebos:WebOSTV:3aab9eea-953b-4272-bdbd-f0cd0ecf4a46:mediaPlayer"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// this assumes you also have the wake on lan binding configured and your TV's IP address is on this network - You would need to update your broadcast and mac address accordingly")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LG_TV0_WOL")]),t._v("                            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" wol"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"192.168.2.255#3c:cd:93:c2:20:e0"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"TV"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_Power\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_Mute\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_Volume\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_VolDummy "),a("span",{attrs:{class:"token constant"}},[t._v("icon")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"soundvolume"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Volume"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"▲"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"▼"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_ChannelNo\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_ChannelDummy "),a("span",{attrs:{class:"token constant"}},[t._v("icon")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"television"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Kanal"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"▲"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"▼"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_Channel\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Default")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_Player\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_Application\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LG_TV0_Application "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.livetv"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"TV"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.tvguide"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"TV Guide"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"netflix"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Netflix"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"youtube.leanback.v4"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Youtube"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"spotify-beehive"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Spotify"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.hdmi1"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"HDMI 1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.hdmi2"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"HDMI 2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.hdmi3"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"HDMI 3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.hdmi4"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"HDMI 4"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.externalinput.av1"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"AV1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.externalinput.av2"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"AV2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.externalinput.component"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Component"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"com.webos.app.externalinput.scart"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Scart"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// this assumes you also have the wake on lan binding configured.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Power on TV via Wake on LAN"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" LG_TV0_Power "),a("span",{attrs:{class:"token keyword"}},[t._v("received command")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" LG_TV0_WOL"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// for relative volume changes")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"VolumeUpDown"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" LG_TV0_VolDummy "),a("span",{attrs:{class:"token keyword"}},[t._v("received command")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" receivedCommand"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("LG_TV0_Volume")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("DECREASE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("LG_TV0_Volume")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("INCREASE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// for relative channel changes")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ChannelUpDown"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" LG_TV0_ChannelDummy "),a("span",{attrs:{class:"token keyword"}},[t._v("received command")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" receivedCommand"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("LG_TV0_ChannelNo")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("DECREASE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("LG_TV0_ChannelNo")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("INCREASE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('LG_TV0_Toast.sendCommand("Hello World")\n')])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);
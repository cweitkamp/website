(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{808:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This binding integrates the "),a("B",[t._v("Velux")]),t._v(" devices with help of a special gateway, the "),a("B",[t._v("Velux Bridge KLF200")]),t._v(".\nThe Velux Binding interacts via the Velux Bridge with the Velux devices like window openers, shutters and others.")],1),t._v(" "),a("p",[t._v("For details about the feature, see the following website "),a("a",{attrs:{href:"http://www.velux.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Velux"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Advise: if you see a significant number of messages per day like")]),t._v(" "),t._m(4),a("p",[t._v("please increase the parameters retries or/and timeoutMsecs.")]),t._v(" "),a("p",[t._v("For your convenience you'll see a log entry for the recognized configuration within the log file i.e.")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("Unfortunately there is no way to discover the Velux bridge within the local network. Be aware that all Velux scenes have to be added to the local Velux Bridge configuration as described in the Velux setup procedure.")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("The Items of a Velux Bridge consists in general of a pair of mastertype and subtype definition.\nIn the appropriate items file, i.e. velux.items, this looks like")]),t._v(" "),t._m(8),a("p",[t._v("Optionally the subtype is enhanced with parameters like the appropriate name of the scene.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("In case of the scene-related subtypes, action and silentMode, the spezification of the related scene as parameters is necessary;")]),t._v(" "),t._m(14),a("p",[t._v("The subtype shutter requires an even pair of parameters, each defining the shutter level and the related scene:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("As the bridge does not support a real rollershutter interaction, this binding provides a virtual rollershutter consisting of different scenes which set a specific shutter level. Therefore the item definition contains multiple pairs of rollershutter levels each followed by a scene name, which leads to this setting.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),a("p",[t._v("For those who are interested in more detailed insight of the processing of this binding, a deeper look can be achieved by increased loglevel.")]),t._v(" "),a("p",[t._v("During startup of normal operations, there should be only some few messages within the logfile, like:")]),t._v(" "),t._m(25),t._m(26),t._v(" "),a("p",[t._v("The Velux Bridge in API version One (firmware version 0.1.1.*) allows to activate a set of predefined actions, so called scenes. Therefore beside the bridge, only one main thing exists, the scene element. Unfortunately even the current firmware version 0.1.1.0.44.0 does not include enhancements on this fact.")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("All known "),a("B",[t._v("Velux")]),t._v(' devices can be handled by this binding. However, there might be some new ones which will be reported within the logfiles.Therefore, error messages like the one below should be reported to the maintainers so that the new Velux device type can be incorporated."')],1),t._v(" "),t._m(29),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"velux-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#velux-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Velux Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The binding can be configured by parameters in the global configuration file "),s("code",[this._v("openhab.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("bridgeIPAddress")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Hostname or address for accessing the Velux Bridge.")])]),t._v(" "),a("tr",[a("td",[t._v("bridgeTCPPort")]),t._v(" "),a("td",[t._v("80")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("TCP port for accessing the Velux Bridge.")])]),t._v(" "),a("tr",[a("td",[t._v("bridgePassword")]),t._v(" "),a("td",[t._v("velux123")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("Password for authentication against the Velux Bridge.")])]),t._v(" "),a("tr",[a("td",[t._v("timeoutMsecs")]),t._v(" "),a("td",[t._v("2000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("Initial Connection timeout in milliseconds")])]),t._v(" "),a("tr",[a("td",[t._v("retries")]),t._v(" "),a("td",[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("Number of retries during I/O")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(" communicate(): socket I/O failed continuously (x times).\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("2018-07-23 20:40:24.746 [INFO ] [.b.velux.internal.VeluxBinding] - veluxConfig[bridgeIPAddress=192.168.42.1,bridgeTCPPort=80,bridgePassword=********,timeoutMsecs=2000,retries=10]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{ velux="thing=<Mastertype>;channel=<Subtype>" }\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{ velux="thing=<Mastertype>;channel=<Subtype>#<Parameter>" }\n')])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Mastertype")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("The Velux KLF200 represents a gateway to all Velux devices.")])]),t._v(" "),a("tr",[a("td",[t._v("scene")]),t._v(" "),a("td",[t._v("Named ordered set of product states which can be activated for execution.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"subtype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subtype","aria-hidden":"true"}},[this._v("#")]),this._v(" Subtype")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Subtype")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Mastertype")]),t._v(" "),a("th",[t._v("Parameter")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("action")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Activates a set of predefined product settings")]),t._v(" "),a("td",[t._v("scene")]),t._v(" "),a("td",[t._v("required")])]),t._v(" "),a("tr",[a("td",[t._v("silentMode")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Modification of the silent mode of the defined product settings")]),t._v(" "),a("td",[t._v("scene")]),t._v(" "),a("td",[t._v("required")])]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Current Bridge State")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("doDetection")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Start of the product detection mode")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("firmware")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Software version of the Bridge")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("ipAddress")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("IP address of the Bridge")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("subnetMask")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("IP subnetmask of the Bridge")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("defaultGW")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("IP address of the Default Gateway of the Bridge")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("DHCP")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Flag whether automatic IP configuration is enabled")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("WLANSSID")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Name of the wireless network")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("WLANPassword")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("WLAN Authentication Password")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("products")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("List of all recognized products")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("scenes")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("List of all defined scenes")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("check")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Checks of current item configuratio")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("shutter")]),t._v(" "),a("td",[t._v("Rollershutter")]),t._v(" "),a("td",[t._v("Virtual rollershutter as combination of different scenes")]),t._v(" "),a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("required")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"subtype-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subtype-parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Subtype Parameters")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{ velux="thing=scene;channel=<Subtype>#<Parameter>" }\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{ velux="thing=brigde;channel=shutter#<Level1>,<Scene1>,<Level2>,<Scene2>" }\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"virtual-shutter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-shutter","aria-hidden":"true"}},[this._v("#")]),this._v(" Virtual shutter")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//  Group for simulating push buttons")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Group")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token constant"}},[t._v("OR")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("OFF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    gV  "),a("span",{attrs:{class:"token string"}},[t._v('"PushButton"')]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Velux Scenes")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_W_S_OPEN")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen West open"')]),t._v("      "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutter_West_000"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_W_S_SUNNY")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen West sunny"')]),t._v("     "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutter_West_090"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_W_S_CLOSED")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen West closed"')]),t._v("    "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutter_West_100"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_O_S_OPEN")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen Ost open"')]),t._v("       "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutter_Ost_000"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_O_S_SUNNY")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen Ost sunny"')]),t._v("      "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutter_Ost_090"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_O_S_CLOSED")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen Ost closed"')]),t._v("     "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutter_Ost_100"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_M_S_OPEN")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen Mitte open"')]),t._v("     "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutter_Mitte_000"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_M_S_SUNNY")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen Mitte sunny"')]),t._v("    "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutter_Mitte_090"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_M_S_CLOSED")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen Mitte closed"')]),t._v("   "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutter_Mitte_100"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_M_W_OPEN")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Window open"')]),t._v("         "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Window_Mitte_000"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_M_W_UNLOCKED")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Window unlocked"')]),t._v("       "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Window_Mitte_010"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_M_W_CLOSED")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Window closed"')]),t._v("       "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Window_Mitte_100"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_OPEN")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG open"')]),t._v("            "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutters_000"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_SUNNY")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG sunny"')]),t._v("           "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutters_090"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_CLOSED")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG closed"')]),t._v("          "),a("span",{attrs:{class:"token tag"}},[t._v(" (gV)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=scene;channel=action#V_DG_Shutters_100"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Velux Bridge parameters")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_FIRMWARE")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Firmware [%s]"')]),t._v("                 "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=bridge;channel=firmware"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_STATUS")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"Status [%s]"')]),t._v("                   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=bridge;channel=status"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("V_CHECK")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Velux Config Check [%s]"')]),t._v("           "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"thing=bridge;channel=check"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Velux Shutters")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_W_S")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen West [%d]"')]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v('"thing'),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("bridge"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("shutter#"),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("V_DG_Shutter_West_000"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("90")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("V_DG_Shutter_West_090"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v('V_DG_Shutter_West_100"'),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_O_S")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen Ost [%d]"')]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v('"thing'),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("bridge"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("shutter#"),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("V_DG_Shutter_Ost_000"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("90")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("V_DG_Shutter_Ost_090"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v('V_DG_Shutter_Ost_100"'),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_M_S")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Rolladen Mitte [%d]"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v('"thing'),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("bridge"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("shutter#"),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("V_DG_Shutter_Mitte_000"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("90")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("V_DG_Shutter_Mitte_09\n"),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v('V_DG_Shutter_Mitte_100"'),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("V_DG_M_W")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Velux DG Window Mitte [%d]"')]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" velux"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v('"thing'),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("bridge"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("shutter#"),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("V_DG_Window_Mitte_000"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("V_DG_Window_Mitte_010"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v('V_DG_Window_Mitte_100"'),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sitemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" velux "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Velux Environment"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Velux Shutter and Window"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("V_DG_W_S\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("V_DG_O_S\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("V_DG_M_S\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("V_DG_M_W\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Velux Bridge"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v("    "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("V_CHECK\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v("    "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("V_STATUS\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v("    "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("V_FIRMWARE\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Rules")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * This rule simulates the push button behaviour.\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"PushButton of group gV"')]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" gV "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// waiting a second.")]),t._v("\n            "),a("span",{attrs:{class:"token function-name"}},[t._v("Thread")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("sleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// Foreach-Switch-is-ON")]),t._v("\n        gV"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("allMembers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forEach"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// switching OFF")]),t._v("\n                "),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"debugging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging","aria-hidden":"true"}},[this._v("#")]),this._v(" Debugging")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("[INFO ] [.b.velux.internal.VeluxBinding] - Velux refresh interval is 3600000 seconds.\n[INFO ] [.service.AbstractActiveService] - velux Refresh Service has been started\n[INFO ] [.b.velux.internal.VeluxBinding] - veluxConfig[bridgeIPAddress=192.168.41.1,bridgeTCPPort=80,bridgePassword=********,timeoutMsecs=2000,retries=6]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-tested-firmware-revisions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-tested-firmware-revisions","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported/Tested Firmware Revisions")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Firmware revision")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Release date")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0.1.1.0.41.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2016-06-01")]),t._v(" "),a("td",[t._v("Default factory shipping revision.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0.1.1.0.42.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2017-07-01")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0.1.1.0.44.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2017-12-14")]),t._v(" "),a("td",[t._v("N/A")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"unknown-velux-devices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unknown-velux-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Unknown Velux devices")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("[ERROR] [g.velux.things.VeluxProductReference] - PLEASE REPORT THIS TO MAINTAINER: VeluxProductReference(3) has found an unregistered ProductTypeId.\n")])])])}],!1,null,null,null);n.options.__file="readme.md";s.default=n.exports}}]);
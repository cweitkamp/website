(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{702:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("AddonLogo"),t._v(" "),n("p",[t._v("This binding offers integration to a ZoneMinder Server. It currently only offers to integrate to monitors (eg. cameras in ZoneMinder). It also only offers access to a limited set of values, as well as a even more limited option to update values in ZoneMinder. It requires at least ZoneMinder 1.29 with API enabled (option 'OPT_USE_API' in ZoneMinder must be enabled). The option 'OPT_TRIGGERS' must be anabled to allow openHAB to trip the ForceAlarm in ZoneMinder.")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("This binding supports the following thing types")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("The binding consists of a Bridge (the ZoneMinder Server it self), and a number of Things, which relates to the induvidual monitors in ZoneMinder. ZoneMinder things can be configured either through the online configuration utility via discovery, or manually through the 'zoneminder.things' configuration file. The Bridge will not be autodiscovered, this behaviour is by design. That is because the ZoneMinder API can be configured to communicate on custom ports, you can even change the url from the default /zm/ to something userdefined. That makes it meaningless to scan for a ZoneMinder Server. The Bridge must therefore be added manually, this can be done from PaperUI. After adding the Bridge it will go ONLINE, and after a short while and the discovery process for monitors will start. When a new monitor is discovered it will appear in the Inbox.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),n("DocPreviousVersions"),t._v(" "),n("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"zoneminder-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoneminder-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Zoneminder Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("tr",[n("td",[n("b",[t._v("Thing")])]),n("td",[n("b",[t._v("Thing Type")])]),n("td",[n("b",[t._v("Discovery")])]),n("td",[n("b",[t._v("Description")])])]),t._v(" "),n("tr",[n("td",[t._v("ZoneMinder Server")]),n("td",[t._v("Bridge")]),n("td",[t._v("Manual")]),n("td",[t._v("A ZoneMinder Server. Required version is minimum 1.29")])]),t._v(" "),n("tr",[n("td",[t._v("ZoneMinder Monitor")]),n("td",[t._v("Thing")]),n("td",[t._v("Automatic")]),n("td",[t._v("Monitor as defined in ZoneMinder Server")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"getting-started-discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting started /  Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"bridge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bridge","aria-hidden":"true"}},[this._v("#")]),this._v(" Bridge")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Channel")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("online")]),t._v(" "),n("td",[t._v("Switch")]),t._v(" "),n("td",[t._v("Parameter indicating if the server is online")])]),t._v(" "),n("tr",[n("td",[t._v("CPU load")]),t._v(" "),n("td",[t._v("Text")]),t._v(" "),n("td",[t._v("Current CPU Load of server")])]),t._v(" "),n("tr",[n("td",[t._v("Disk Usage")]),t._v(" "),n("td",[t._v("text")]),t._v(" "),n("td",[t._v("Current Disk Usage on server")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"thing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Channel")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("online")]),t._v(" "),n("td",[t._v("Switch")]),t._v(" "),n("td",[t._v("Parameter indicating if the monitor is online")])]),t._v(" "),n("tr",[n("td",[t._v("enabled")]),t._v(" "),n("td",[t._v("Switch")]),t._v(" "),n("td",[t._v("Parameter indicating if the monitor is enabled")])]),t._v(" "),n("tr",[n("td",[t._v("force-alarm")]),t._v(" "),n("td",[t._v("Switch")]),t._v(" "),n("td",[t._v("Parameter indicating if Force Alarm for the the monitor is active")])]),t._v(" "),n("tr",[n("td",[t._v("alarm")]),t._v(" "),n("td",[t._v("Switch")]),t._v(" "),n("td",[t._v("true if monitor has an active alarm")])]),t._v(" "),n("tr",[n("td",[t._v("recording")]),t._v(" "),n("td",[t._v("Text")]),t._v(" "),n("td",[t._v("true if monitor is recording")])]),t._v(" "),n("tr",[n("td",[t._v("detailed-status")]),t._v(" "),n("td",[t._v("Text")]),t._v(" "),n("td",[t._v("Detailed status of monitor (Idle, Pre-alarm, Alarm, Alert, Recording)")])]),t._v(" "),n("tr",[n("td",[t._v("event-cause")]),t._v(" "),n("td",[t._v("Text")]),t._v(" "),n("td",[t._v("Empty when there is no active event, else it contains the text with the cause of the event")])]),t._v(" "),n("tr",[n("td",[t._v("function")]),t._v(" "),n("td",[t._v("Text")]),t._v(" "),n("td",[t._v("Text corresponding the value in ZoneMinder: None, Monitor, Modect, Record, Mocord, Nodect")])]),t._v(" "),n("tr",[n("td",[t._v("capture-daemon")]),t._v(" "),n("td",[t._v("Switch")]),t._v(" "),n("td",[t._v("Run state of ZMC Daemon")])]),t._v(" "),n("tr",[n("td",[t._v("analysis-daemon")]),t._v(" "),n("td",[t._v("Switch")]),t._v(" "),n("td",[t._v("Run state of ZMA Daemon")])]),t._v(" "),n("tr",[n("td",[t._v("frame-daemon")]),t._v(" "),n("td",[t._v("Switch")]),t._v(" "),n("td",[t._v("Run state of ZMF Daemon")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"manual-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Manual configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"things-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#things-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Things configuration")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zoneminder"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("server"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ZoneMinderSample")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" hostname"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"192.168.1.55"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"<USERNAME>"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"<PASSWORD>"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" telnet_port"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("6802")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refresh_interval_disk_usage"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("monitor")]),t._v(" monitor_1 "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" monitorId"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" monitorTriggerTimeout"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("120")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" monitorEventText"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Trigger activated from openHAB"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"items-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Items configuration")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/* *****************************************\n * SERVER\n * *****************************************/")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmServer_Online")]),t._v(" \t\t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Zoneminder Online [%s]"')]),t._v("\t\t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:server:ZoneMinderSample:online"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmServer_CpuLoad")]),t._v(" \t\t\t"),n("span",{attrs:{class:"token string"}},[t._v('"ZoneMinder Server Load [%s]"')]),t._v("\t\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:server:ZoneMinderSample:cpu-load"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmServer_DiskUsage")]),t._v("\t\t\t"),n("span",{attrs:{class:"token string"}},[t._v('"ZoneMinder Disk Usage [%s]"')]),t._v("\t\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:server:ZoneMinderSample:disk-usage"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* *****************************************\n * MONITOR 1\n * *****************************************/")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_Online")]),t._v(" \t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Online [%s]"')]),t._v(" \t\t\t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:online"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_Enabled")]),t._v(" \t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Enabled [%s]"')]),t._v(" \t\t\t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:enabled"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_ForceAlarm")]),t._v(" \t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Force Alarm [%s]"')]),t._v("\t \t\t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:force-alarm"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_EventState")]),t._v(" \t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Alarm [%s]"')]),t._v("\t \t\t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:alarm"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_Recording")]),t._v(" \t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Recording [%s]"')]),t._v("\t \t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:recording"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_DetailedStatus")]),t._v("\t"),n("span",{attrs:{class:"token string"}},[t._v('"Detailed Status [%s]"')]),t._v("\t \t\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:detailed-status"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_EventCause")]),t._v(" \t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Event Cause [%s]"')]),t._v("\t \t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:event-cause"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_Function")]),t._v(" \t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Function [%s]"')]),t._v(" \t\t\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:function"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_CaptureState")]),t._v("\t \t"),n("span",{attrs:{class:"token string"}},[t._v('"Capture Daemon [%s]"')]),t._v(" \t\t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:capture-daemon"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_AnalysisState")]),t._v(" \t"),n("span",{attrs:{class:"token string"}},[t._v('"Analysis Daemon [%s]"')]),t._v(" \t\t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:analysis-daemon"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_FrameState")]),t._v("\t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Frame Daemon [%s]"')]),t._v("\t\t"),n("span",{attrs:{class:"token function"}},[t._v("\t<switch>")]),t._v("\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder:monitor:ZoneMinderSample:monitor-1:frame-daemon"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Helpers")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("zmMonitor1_Mode")]),t._v("\t\t\t"),n("span",{attrs:{class:"token string"}},[t._v('"Monitor active [%s]"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sample-rule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-rule","aria-hidden":"true"}},[this._v("#")]),this._v(" Sample Rule")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rules"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Monitor1 Alarm State"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" zmMonitor1_EventState "),n("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zmMonitor1_EventState"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("logInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder.rules"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"ZoneMinder Alarm started"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zmMonitor1_EventState"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("OFF")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("logInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder.rules"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"ZoneMinder Alarm stopped"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n"),n("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Monitor1 Recording State"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" zmMonitor1_Recording "),n("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zmMonitor1_Recording"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("logInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder.rules"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"ZoneMinder recording started"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zmMonitor1_Recording"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("OFF")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("logInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"zoneminder.rules"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"ZoneMinder recording stopped"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n"),n("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Change Monitor1 Mode"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" zmMonitor1_Mode "),n("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zmMonitor1_Mode"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{attrs:{class:"token operator"}},[t._v("==")]),n("span",{attrs:{class:"token constant"}},[t._v("ON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zmMonitor1_Function"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Modect"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zmMonitor1_Enabled"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zmMonitor1_Function"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Monitor"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zmMonitor1_Enabled"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("OFF")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sitemap-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap configuration")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" zoneminder "),n("span",{attrs:{class:"token constant"}},[t._v("label")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Zoneminder"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmServer_Online "),n("span",{attrs:{class:"token constant"}},[t._v("label")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"ZoneMinder Server [%s]"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmServer_Online\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v("  "),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmServer_CpuLoad\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v("  "),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmServer_DiskUsage\n\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_Function "),n("span",{attrs:{class:"token constant"}},[t._v("label")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"(Monitor-1) [%s]"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_Enabled\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_ForceAlarm\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v("\t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_Online\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Selection")]),t._v("\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_Function \t"),n("span",{attrs:{class:"token constant"}},[t._v("mappings")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"None"')]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("None"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Modect"')]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Modect"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Monitor"')]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Monitor"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Record"')]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Record"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Mocord"')]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Mocord"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Nodect"')]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Nodect"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v("  \t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_EventState \t\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" \t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_Recording \t\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v("\t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_DetailedStatus\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" \t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_EventCause\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" \t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_CaptureState\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" \t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_AnalysisState\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" \t\t"),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_FrameState\n\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("label")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Monitor Helpers"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("zmMonitor1_Mode\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("tr",[n("td",[n("b",[t._v("Problem")])]),n("td",[n("b",[t._v("Solution")])])]),t._v(" "),n("tr",[n("td",[t._v("Cannot connect to ZoneMinder Bridge")]),n("td",[t._v("Check if you can logon to ZoneMinder from your openHAB server (with http).")])]),t._v(" "),n("tr",[n("td"),n("td",[t._v("Check that it is possible to establish a Telnet connection from openHAB server to Zoneminder Server")])]),t._v(" "),n("tr",[n("td",[t._v("ZoneMinder Bridge is not comming ONLINE. It says: 'OFFLINE - COMMUNICATION_ERROR Cannot access ZoneMinder Server. Check provided usercredentials'")]),n("td",[t._v("Check that the hostname is valid, if using a DNS name, make sure name is correct resolved. Also check that the given host can be accessed from a browser. Finally make sure to change the additional path from '/zm', if not using standard setup.")])]),t._v(" "),n("tr",[n("td",[t._v("Cannot connect to ZoneMinder Bridge via HTTPS, using Letsencrypt certificate")]),n("td",[t._v("Verify your Java version, if Java is below build 101, letsencrypt certificate isn't known by Java. Either use HTTP or upgrade Java to newest build. Please be aware that https support is provided as an experimental feature.")])]),t._v(" "),n("tr",[n("td",[t._v("I have tried all of the above, it still doesn't work")]),n("td",[t._v('Try to execute this from a commandline (on your openHAB server): curl -d "<username>=XXXX&<password>=YYYY&action=login&view=console" -c cookies.txt  http://<yourzmip>/zm/index.php. Change <yourzmip>, <username> and <password> to the actual values. This will check if your server is accessible from the openHAB server.')])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);
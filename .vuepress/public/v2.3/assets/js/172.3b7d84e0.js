(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{714:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This binding supports the LightwaveRF products using the LightwaveRF Wifi Link that is available as part of that range.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("To configure items, you first need to add the devices using the LightwaveRF App on iPhone or Android. You can add switches, dimmers and radiator valves.")]),t._v(" "),a("p",[t._v("Once you have done this, you need to find out some identifiers to allow the devices to be added to Openhab as below.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v('To do this, sniff your network using something like wireshark whilst sending commands using the smartphone application. You should see messages like "100,!R1D3F1"')]),t._v(" "),a("p",[t._v('This means that lightwave switch/dimmer roomId = "1" and device id = "1"')]),t._v(" "),a("p",[t._v('For thermostats you will see a message like "100,!R1F*r" this means the room id = "1". There will then be a return message that looks like JSON with the following in it... "serial":"123DEF" this means the serial id = "123DEF".')]),t._v(" "),a("p",[t._v("The LightwaveRF binding works on the concept of giving each item a type. This will determine the value that item is loaded with when an update is received.")]),t._v(" "),a("p",[t._v("Valid types are")]),t._v(" "),a("p",[t._v("| LightwaveRF Type | openHAB Type | Read/Write | Devices | From Version |\n| DIMMER | Dimmer | Read/Write | Dimmer | 1.7.0 |\n| SWITCH | Switch | Read/Write | Switch | 1.7.0 |\n| MOOD | Number | Read/Write | Setup in LightwaveRF App | 1.9.0 |\n| ALL_OFF | Switch | Read/Write | Virtual Device | 1.9.0 |\n| UPDATETIME | DateTime | Read | Energy Monitor, Radiator Valves | 1.9.0 (was called HEATING_UPDATETIME in 1.7.0) |\n| SIGNAL | Number | Read | Energy Monitor | 1.9.0 (was called HEATING_SIGNAL in 1.7.0, removed from Radiator valve in 1.9.0) |\n| HEATING_CURRENT_TEMP | Number | Read | Radiator Valves | 1.7.0 |\n| HEATING_BATTERY | Number | Read | Radiator Valves | 1.7.0 |\n| HEATING_SET_TEMP | Number | Write | Radiator Valves | 1.7.0 |\n| HEATING_MODE | String | Read | Radiator Valves | 1.7.0 |\n| HEATING_OUTPUT | Percent | Read | Radiator Valves | 1.9.0 |\n| ENERGY_YESTERDAY_USAGE | Number | Read | Energy Monitor | 1.9.0 |\n| ENERGY_TODAY_USAGE | Number | Read | Energy Monitor | 1.9.0 |\n| ENERGY_MAX_USAGE | Number | Read | Energy Monitor | 1.9.0 |\n| ENERGY_CURRENT_USAGE | Number | Read | Energy Monitor | 1.9.0 |\n| RELAY | Number (-1 Close, 0 Stop, 1 Open) | Read/Write | Relay | 1.9.0 |\n| WIFILINK_IP | String | Read | Wifi Link | 1.9.0 |\n| WIFILINK_DUSK_TIME | DateTime | Read | Wifi Link | 1.9.0 |\n| WIFILINK_DAWN_TIME | DateTime | Read | Wifi Link | 1.9.0 |\n| WIFILINK_UPTIME | Number | Read | Wifi Link | 1.9.0 |\n| WIFILINK_LONGITUDE | String | Read | Wifi Link | 1.9.0 |\n| WIFILINK_LATITUDE | String | Read | Wifi Link | 1.9.0 |\n| WIFILINK_FIRMWARE | String | Read | Wifi Link | 1.9.0 |")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Occasionally (perhaps only on the older models?), the WiFi Link will fail to ask you to confirm a new registration, regardless of the setting in openhab.cfg.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),a("p",[t._v("To force the WiFi Link to register your new device paste this into a shell, making sure to set the IP address of the WiFi Link correctly. Then head over to the WiFi Link so you can press 'OK'.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("This binding will receive updates from the radiator valves whenever they are sent. However if you want a consistent update then you can add a poll_time to send a poll message at regular intervals.")]),t._v(" "),a("p",[t._v("See below for a typical example configuration. Note the poll_time is in seconds 1800 seconds = 30 minutes in the example below. You only need to set the poll time on one item per radiator (I recommend the current temperature as per below). A poll will actually update all values.")]),t._v(" "),a("p",[t._v("Examples, configure for your items:")]),t._v(" "),t._m(11),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"lightwaverf-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lightwaverf-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" LightwaveRF Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/lightwaverf.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ip")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("The IP Address of the LightwaveRf Wifi Link. you can use the broadcast address 255.255.255.255")])]),t._v(" "),a("tr",[a("td",[t._v("receiveport")]),t._v(" "),a("td",[t._v("9760")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("The port to monitor for messages, you shouldn't need to change this")])]),t._v(" "),a("tr",[a("td",[t._v("sendport")]),t._v(" "),a("td",[t._v("9761")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("The port to send messages on, it will also be monitored for incoming messages, you shouldn't need to change this")])]),t._v(" "),a("tr",[a("td",[t._v("registeronstartup")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("For a new computer you will need to register it with the wifi link to be allowed to send messages.  Setting this to "),a("code",[t._v("true")]),t._v(" we will send a registration message on startup. You will need to confirm registration on the wifi link. There is no harm leaving this as true but you can set to "),a("code",[t._v("false")]),t._v(" once you have registerd for the first time.")])]),t._v(" "),a("tr",[a("td",[t._v("senddelay")]),t._v(" "),a("td",[t._v("2000 (?TBD)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",[t._v("Delay between sending messages in ms to avoid swapming Wifi Link")])]),t._v(" "),a("tr",[a("td",[t._v("okTimeout")]),t._v(" "),a("td",[t._v("1000 (?TBD)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",[t._v("Timeout for OK Messages in ms, we will retry messages we don't receive an ok for in the timeout")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Identifier Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Light Switch")]),t._v(" "),a("td",[t._v("RoomId and DeviceId")])]),t._v(" "),a("tr",[a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("RoomId and DeviceId")])]),t._v(" "),a("tr",[a("td",[t._v("Radiator Valve")]),t._v(" "),a("td",[t._v("RoomId and Serial Number")])]),t._v(" "),a("tr",[a("td",[t._v("Energy Monitor")]),t._v(" "),a("td",[t._v("Serial Number")])]),t._v(" "),a("tr",[a("td",[t._v("Relay")]),t._v(" "),a("td",[t._v("RoomId and DeviceId")])]),t._v(" "),a("tr",[a("td",[t._v("WifiLink")]),t._v(" "),a("td",[t._v('Serial set to "wifilink"')])]),t._v(" "),a("tr",[a("td",[t._v("Mood (this isn't the Mood Switch but moods setup in the LightwaveRF App)")]),t._v(" "),a("td",[t._v("Room Id")])]),t._v(" "),a("tr",[a("td",[t._v("All Off")]),t._v(" "),a("td",[t._v("Room Id")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"force-wifi-link-to-register-your-device"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#force-wifi-link-to-register-your-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Force WiFi Link to register your device")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If this is the case you'll get an error like this in "),e("code",[this._v("openhab.log")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Error converting message: 200,ERR,1,"Not yet registered. Send !F*p to register"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("echo -ne '001,!F*p|' | nc -w1 -u 192.168.x.xx 9760\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"radiator-valve-polling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#radiator-valve-polling","aria-hidden":"true"}},[this._v("#")]),this._v(" Radiator Valve Polling")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Dimmer1")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Dimmer1 [%d %%]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (ALL)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lightwaverf"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"room=3,device=2,type=DIMMER"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Switch2")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Switch2"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (ALL)")]),t._v("         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lightwaverf"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"room=3,device=3,type=SWITCH"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("RadiatorCTemp")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Radiator [%.1f C]"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lightwaverf"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"room=4,serial=BF3B01,type=HEATING_CURRENT_TEMP,poll=1800"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("RadiatorSTemp")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Radiator Set Temp [%.1f C]"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lightwaverf"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"room=4,serial=BF3B01,type=HEATING_SET_TEMP"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("RadiatorBatt")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Radiator Battery [%.2f]"')]),t._v("     "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lightwaverf"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"room=4,serial=BF3B01,type=HEATING_BATTERY"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("RadiatorMode")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Radiator [%s]"')]),t._v("     "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lightwaverf"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"room=4,serial=BF3B01,type=HEATING_MODE"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("RadiatorUpdated")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Radiator Updated [%1$tT, %1$tF]"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lightwaverf"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"room=4,serial=AF4A02,type=HEATING_UPDATETIME"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);i.options.__file="readme.md";e.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{681:function(e,t,r){"use strict";r.r(t);var a=r(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("You can send intertechno in every mode. I.e., if you are using the CUL in slow RF mode or BidCos mode you can still send intetechno commands. The firmware will take care of switching to intertechno mode, sending the command and switching back.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("When using a serial port, you may need to add "),r("code",[e._v("-Dgnu.io.rxtx.SerialPorts=/dev/ttyACM0")]),e._v(" in your server startup.  Please consult the "),r("a",{attrs:{href:"https://community.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("forum"),r("OutboundLink")],1),e._v(" for the latest information.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("The item configuration depends on your specific intertechno device. Unfortunately there is no single manufacturer for these devices but many of them using intertechno a little differently.")]),e._v(" "),r("p",[e._v("openHAB currently has support for different intertechno device types, but probably not all. For more detailed information please have a look "),r("a",{attrs:{href:"http://www.fhemwiki.de/wiki/Intertechno_Code_Berechnung",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v('Currently openHab can handle FLS, Rev, Classic and "raw" devices.')]),e._v(" "),r("p",[e._v("For all supported, you simply have to read the position of the switches and use the read values as group and address.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),r("p",[e._v('You have to provide the 26-digit id and the channel (0-15).\nOptional, you can provide the group parameter (with value "1") , which results in switching all items with the given id.')]),e._v(" "),e._m(17),e._m(18),e._v(" "),r("p",[e._v("If you have an unsupported intertechno device you can fallback to the raw mode")]),e._v(" "),e._m(19),r("p",[e._v('This configuration allows you to manually specify the complete commands to send in either ON or OFF state. The given commands will be sent directly to the CUL (prefixed with "is").')]),e._v(" "),r("DocPreviousVersions"),e._v(" "),r("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"intertechno-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intertechno-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Intertechno Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This binding can be configured in the "),t("code",[this._v("services/culintertechno.cfg")]),this._v(" file.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Property")]),e._v(" "),r("th",[e._v("Default")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("device")]),e._v(" "),r("td"),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),r("td",[e._v("in the form "),r("code",[e._v("serial:<device>")]),e._v(", where "),r("code",[e._v("<device>")]),e._v(" is a local serial port, or"),r("br"),e._v(" "),r("code",[e._v("network:<host>:<port>")]),e._v(", where "),r("code",[e._v("<host>")]),e._v(" is the host name or IP address and "),r("code",[e._v("<port>")]),e._v(" is the port number.  The "),r("code",[e._v("network")]),e._v(" option works with ser2net from a tuxnet device")])]),e._v(" "),r("tr",[r("td",[e._v("baudrate")]),e._v(" "),r("td"),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),r("td",[e._v("one of 75, 110, 300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200")])]),e._v(" "),r("tr",[r("td",[e._v("parity")]),e._v(" "),r("td"),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),r("td",[e._v("one of EVEN, ODD, MARK, NONE, SPACE")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To use a networked CUL device for Intertechno from ser2net, this line in "),t("code",[this._v("/etc/ser2net.conf")]),this._v(" on the remote "),t("code",[this._v("<host>")]),this._v(" will publish the serial interface (replace /dev/ttySP1 with whatever is appropriate):")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("3333:raw:0:/dev/ttySP1:38400 8DATABITS NONE 1STOPBIT\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("From the above, your "),t("code",[this._v("device")]),this._v(" property would be "),t("code",[this._v("network:<host>:3333")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fls","aria-hidden":"true"}},[this._v("#")]),this._v(" FLS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ culintertechno="type=fls;group=I;address=1" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"rev"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rev","aria-hidden":"true"}},[this._v("#")]),this._v(" REV")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ culintertechno="type=rev;group=I;address=1" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"classic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classic","aria-hidden":"true"}},[this._v("#")]),this._v(" Classic")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ culintertechno="type=classic;group=I;address=1" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"intertechno-v3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intertechno-v3","aria-hidden":"true"}},[this._v("#")]),this._v(" Intertechno V3")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ culintertechno="type=v3;id=01101011000011110000000000;channel=2" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ culintertechno="type=v3;id=01101011000011110000000000;group=1" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"raw-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raw-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Raw mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ culintertechno="type=raw;commandOn=FF00FF00FF;commandOff=FF00FF00F0" }\n')])])])}],!1,null,null,null);i.options.__file="readme.md";t.default=i.exports}}]);
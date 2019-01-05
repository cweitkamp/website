(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{770:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("panStamp are low-power wireless modules programmable from Arduino.  The panStamp binding enables openHAB to connect to a network of panStamp devices.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The binding requires you to have a panStamp running the 'modem' sketch connected to a serial port.")]),t._v(" "),a("p",[t._v("It is imperative that you understand the panStamp environment before trying to use this binding. If you do understand the panStamp ecosystem, this documentation should provide a straightforward guide to getting your panStamps to talk to openHAB.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("table",[t._m(4),t._v(" "),a("tbody",[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://network.id",target:"_blank",rel:"noopener noreferrer"}},[t._v("network.id"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("0xb547")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("network ID used by the SWAP network")])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)])]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("Items are configured using a slightly verbose but very readable syntax:")]),t._v(" "),t._m(13),a("p",[t._v("All the item parameters are explained below:")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("The productCode, register and endpoint parameters map directly to the panStamp device definitions.")]),t._v(" "),a("p",[t._v("panStamp item configurations are simple in large part because the panStamp system provides excellent meta data which is used by the binding to determine what a device is, what its endpoints do, and how to convert data to and from it.")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("This example defines an item connected to panStamp device 3, register 12, endpoint 'Temperature'. The product code for the device is 1/4 and the endpoint data is read as degrees Celsius.")]),t._v(" "),t._m(16),a("p",[t._v("This example uses another endpoint on the same panStamp as above to read the devices' battery voltage:")]),t._v(" "),t._m(17),a("p",[t._v("In the above two examples, the temperature and voltage sensors are inputs. Values received from the network will be updated to the items. In the next example, we have a switch which toggles a relay driven by a panStamp:")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/GideonLeGrange/panstamp-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("panStamp GUI tool"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/GideonLeGrange/panstamp-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("panstamp-java library"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://panstamp.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("panStamp commercial web site"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://panstamp.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("panStamp community forum"),a("OutboundLink")],1)])]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"panstamp-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#panstamp-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" panStamp Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/panstamp.cfg")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Property")]),this._v(" "),e("th",[this._v("Default")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("Required")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("serial.port")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("serial port that the binding will use to communicate to the modem and the panStamp network. Typically this will be something like "),a("code",[t._v("/dev/ttyUSB0")]),t._v(" on Linux or "),a("code",[t._v("COM3")]),t._v(" on Windows. It is recommended that, before trying to connect the openHAB panStamp binding to the modem, you test the modem using a terminal program such as minicom.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("serial.speed")]),this._v(" "),e("td",[this._v("38400")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),e("td",[this._v("Serial port speed. Typically 38400, but can be adjusted to 9600 and 19200.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("network.channel")]),this._v(" "),e("td",[this._v("0")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),e("td",[this._v("frequency/channel on which the SWAP network operates")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("network.deviceAddress")]),this._v(" "),e("td",[this._v("1")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),e("td",[this._v("SWAP sender address used by the modem device")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("directory.xml")]),this._v(" "),e("td",[this._v("etc/panstamp/xml")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),e("td",[this._v("directory where panStamp XML device definitions can be found. If you only use standard sketches, this directory is not required")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("debug.port")]),this._v(" "),e("td"),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),e("td",[this._v("TCP port used to debug the panStamp network. This port is used to connect the panStamp-tools GUI client for debugging")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# The serial port to which the panStamp modem is connected\npanstamp:serial.port=/dev/ttyUSB0\npanstamp:serial.speed=38400\n# SWAP Network settings\npanstamp:network.channel=0\npanstamp:network.id=0xb547\npanstamp:network.deviceAddress=1\n# PanStamp device files\npanstamp:directory.xml=etc/panstamp/xml\n# TCP debugger settings\npanstamp:debug.port=3000\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("panstamp=\"address=<addr>,productCode=<man/prod>,register=<reg>,endpoint='<end>',[unit=<unit>]\"\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("address")]),t._v(" "),a("td",[t._v("The panStamp device address. This is the address of the specific panStamp device.")]),t._v(" "),a("td",[t._v("yes")])]),t._v(" "),a("tr",[a("td",[t._v("productCode")]),t._v(" "),a("td",[t._v("The product code, consisting of manufacturer ID and product ID separated by a '/'.")]),t._v(" "),a("td",[t._v("yes")])]),t._v(" "),a("tr",[a("td",[t._v("register")]),t._v(" "),a("td",[t._v("The register ID of the panStamp register (on the device) to which the endpoint is mapped.")]),t._v(" "),a("td",[t._v("yes")])]),t._v(" "),a("tr",[a("td",[t._v("endpoint")]),t._v(" "),a("td",[t._v("The name of the endpoint addressed by the item.")]),t._v(" "),a("td",[t._v("yes")])]),t._v(" "),a("tr",[a("td",[t._v("unit")]),t._v(" "),a("td",[t._v("The conversion unit for the endpoint. This could for example be C or F for temperatures.")]),t._v(" "),a("td",[t._v("no")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Temperature_PS3")]),t._v("      "),a("span",{attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("Temperature")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PanStamp"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    panstamp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("\"address=3,productCode=1/4,register=12,endpoint='Temperature',unit=C\"")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Voltage_PS3")]),t._v("      "),a("span",{attrs:{class:"token string"}},[t._v('"Voltage [%.2f V]"')]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v(" <energy>")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("Temperature")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PanStamp"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    panstamp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("\"address=3,productCode=1/4,register=11,endpoint='Voltage'\"")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Button_PS4")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Porch Light"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" panstamp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("\"address=4,productCode=1/7,register=11,endpoint='Binary 7'\"")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"network-configuration-and-debugging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-configuration-and-debugging","aria-hidden":"true"}},[this._v("#")]),this._v(" Network configuration and debugging")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The panStamp binding provides an optional feature to allow the user to configure or debug the panStamp network using a GUI tool while openHAB manages the network (and therefore owns the serial port). This option is enabled by providing the "),e("code",[this._v("debug.port")]),this._v(" configuration parameter. Doing this has the upside of being able to change panStamp configurations without stopping openHAB or without using a separate panStick.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);s.options.__file="readme.md";e.default=s.exports}}]);
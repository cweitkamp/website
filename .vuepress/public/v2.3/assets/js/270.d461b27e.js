(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{452:function(t,e,a){"use strict";a.r(e);var o=a(0),r=Object(o.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"http://www.solar-log.com/en/home.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Solar-Log Family"),a("OutboundLink")],1),t._v(" of monitoring devices for PV installations provide a MODBUS (TCP) and JSON-based API to access a number of internal data related to power generation and consumption. This binding implements access to the data via the JSON API.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The Solar-Log is exposed as one thing with a number of channels that can be used to read the values for different aspects of your Solar-Log installation.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("The parameters to be used are simple:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("The following table is taken from the official manual and contains all available channels. If you want to manually define Items, this can for example be done as follows:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("More information about the Solar-Log Data interfaces and the exact meaning of the various channels and the documentation of the JSON API can be found in the "),a("a",{attrs:{href:"https://www.solar-log.com/manuals/manuals/en_GB/SolarLog_Manual_3x_EN.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manual"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"solar-log-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solar-log-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Solar-Log Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"use-of-the-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-of-the-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Use of the binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setup-of-the-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-of-the-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup of the binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can either configure the Thing via the openHAB UI or via a "),e("code",[this._v("*.things")]),this._v(" file, according to the following example:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('Thing solarlog:meter:pv "Solar-Log 300" @ "Utility Room" [ url="http://solar-log" refreshInterval=15]')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("url")]),t._v(" denotes the URL of your Solar-Log. If you have not changed anything, this defaults to "),a("code",[t._v("http://solar-log")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("refreshInterval")]),t._v(" is the interval to fetch new data. Solar-Log updates its data every 15 - 60 seconds. "),a("code",[t._v("15")]),t._v(" is the default value. Values lower than this will return the result from the last 15 seconds period. No value lower than this can be set in the UI.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Currently, the binding does not support authenticated access to the Solar-Log JSON API (which was introduced with newer firmwares). If must set the API access to "),e("code",[this._v("Open")]),this._v(" in the Solar-Log configuration in order for the binding to work.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"available-channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Available channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('Number solarlog_meter_pv_yieldday "Yield Day [% W]" (gSolarLog, gUtilityRoom) { channel="solarlog:meter:pv:yieldday" }')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Data point")]),t._v(" "),a("th",[t._v("Unit")]),t._v(" "),a("th",[t._v("Index Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("lastupdate")]),t._v(" "),a("td",[t._v("Time in the format dd.mm.yy; hh.minmin, secsec")]),t._v(" "),a("td",[t._v("100 Time")])]),t._v(" "),a("tr",[a("td",[t._v("pac")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("101 Total output PAC from all of the inverters and meters in inverter mode")])]),t._v(" "),a("tr",[a("td",[t._v("pdc")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("102 Total output PAC from all of the inverters")])]),t._v(" "),a("tr",[a("td",[t._v("uac")]),t._v(" "),a("td",[t._v("V")]),t._v(" "),a("td",[t._v("103 Average voltage UAC from the inverter")])]),t._v(" "),a("tr",[a("td",[t._v("udc")]),t._v(" "),a("td",[t._v("V")]),t._v(" "),a("td",[t._v("104 Average voltage UDC from the inverter")])]),t._v(" "),a("tr",[a("td",[t._v("yieldday")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("105 Total yield for the day from all of the inverters")])]),t._v(" "),a("tr",[a("td",[t._v("yieldyesterday")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("106 Total yield for the previous day from all of the inverters")])]),t._v(" "),a("tr",[a("td",[t._v("yieldmonth")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("107 Total yield for the month from all of the inverters")])]),t._v(" "),a("tr",[a("td",[t._v("yieldyear")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("108 Total yield for the year from all of the inverters")])]),t._v(" "),a("tr",[a("td",[t._v("yieldtotal")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("109 Total yield from all of the inverters")])]),t._v(" "),a("tr",[a("td",[t._v("conspac")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("110 Current total consumption PAC from all of the consumption meters")])]),t._v(" "),a("tr",[a("td",[t._v("consyieldday")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("111 Total consumption from all of the consumption meters")])]),t._v(" "),a("tr",[a("td",[t._v("consyieldyesterday")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("112 Total consumption for the previous day; all of the consumption meters")])]),t._v(" "),a("tr",[a("td",[t._v("consyieldmonth")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("113 Total consumption for the month; all of the consumption meters")])]),t._v(" "),a("tr",[a("td",[t._v("consyieldyear")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("114 Total consumption for the year; all of the consumption meters")])]),t._v(" "),a("tr",[a("td",[t._v("consyieldtotal")]),t._v(" "),a("td",[t._v("Wh")]),t._v(" "),a("td",[t._v("115 Accumulated total consumption, all Consumption meter")])]),t._v(" "),a("tr",[a("td",[t._v("totalPower")]),t._v(" "),a("td",[t._v("Wp")]),t._v(" "),a("td",[t._v("116 Installed generator power")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"more-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-information","aria-hidden":"true"}},[this._v("#")]),this._v(" More information")])}],!1,null,null,null);r.options.__file="readme.md";e.default=r.exports}}]);
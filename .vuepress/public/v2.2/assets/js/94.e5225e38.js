(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{596:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("AddonLogo"),t._v(" "),s("p",[s("a",{attrs:{href:"http://ekey.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ekey"),s("OutboundLink")],1),t._v(" is an Austrian company that provides biometric access-control solutions, more precisely fingerprint readers and corresponding controllers.  This binding extends the functionality of the products "),s("a",{attrs:{href:"http://ekey.net/ekey-home-en",target:"_blank",rel:"noopener noreferrer"}},[t._v("ekey home"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"http://ekey.net/ekey-multi-en",target:"_blank",rel:"noopener noreferrer"}},[t._v("ekey multi"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The ekey binding translates information that comes from the ekey controller and makes it usable to openHAB.  Usually ekey sends packets with information on each user input. This might be every time a person pulls their finger over the terminal or if a digital input occurs.")]),t._v(" "),s("p",[t._v("The information consists at least of these types:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("The type of protocol that is used by the converter can be changed with a small tool (unfortunately Windows only). This tool is called "),s("em",[t._v("ConfigConverterUDP")]),t._v(" and can be downloaded from the "),s("a",{attrs:{href:"http://www.ekey.net/downloads-en/cat/Software",target:"_blank",rel:"noopener noreferrer"}},[t._v("ekey website"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("As you can see, in many cases it makes sense to map the number values to some more meaningful strings.\nSee the mapping examples on the bottom.")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("This is quite simple. It depends on the type of information someone is interested in.")]),t._v(" "),s("p",[t._v("The syntax is:")]),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("Here is an example that demonstrates a simple rule that feeds the openHAB TTS-engine and welcomes the user when he or she enters the house.")]),t._v(" "),s("p",[t._v("items/ekey.items")]),t._v(" "),t._m(30),s("p",[t._v("rules/ekey.rules")]),t._v(" "),t._m(31),s("p",[t._v("transform/ekey_finger.map")]),t._v(" "),t._m(32),s("p",[t._v("transform/ekey_names.map")]),t._v(" "),t._m(33),s("p",[t._v("transform/ekey_terminal.map")]),t._v(" "),t._m(34),s("p",[t._v("transform/ekey_action.map")]),t._v(" "),t._m(35),t._m(36),t._v(" "),s("ul",[s("li",[t._v("eKey binding demo config (may be specific to openHAB 1.x)("),s("a",{attrs:{href:"http://pastebin.com/fjXkFbiq",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://pastebin.com/fjXkFbiq"),s("OutboundLink")],1),t._v(")")])]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ekey-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ekey-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" ekey Binding")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("To use this binding, one needs to have either the "),s("em",[t._v("home")]),t._v(" or the "),s("em",[t._v("multi")]),t._v(" solution of ekey.  Note that the "),s("em",[t._v("multi")]),t._v(" version provides much more functionality than the "),s("em",[t._v("home")]),t._v(" version.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Additionally the "),e("em",[this._v("ekey UDP converter")]),this._v(" is needed. This module provides an interface by converting the internal RS485 signals to Ethernet. Connecting this to the local network enables ekey to communicate to the ekey binding.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://ekey.net/media/W/720/bilder/automatisierung/example_E.jpg",alt:"example"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("userID")]),this._v(" - the index of the detected user that is stored on the controller")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("fingerID")]),this._v(" - the finger that the person used")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("terminalID")]),this._v(" - the serial number of the fingerprint reader that was used")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("action")]),this._v(" - this tells whether the user was recognized successfully and access was granted or access was denied")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The amount of information depends on whether "),e("em",[this._v("ekey home")]),this._v(" or "),e("em",[this._v("ekey multi")]),this._v(" is used and which protocol is used by the converter. But the previously mentioned 4 are supported in any case.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The converter knows up to three different protocols. The "),s("em",[t._v("RARE")]),t._v(" protocol that is enabled by default, the "),s("em",[t._v("HOME")]),t._v(" protocol which is very similar to the "),s("em",[t._v("RARE")]),t._v(" and finally the "),s("em",[t._v("MULTI")]),t._v(' protocol which is fairly powerful compared to the other ones. The binding uses the term "mode" instead of "protocol".')])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"available-types-of-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-types-of-information","aria-hidden":"true"}},[this._v("#")]),this._v(" Available Types of Information")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Action")]),this._v(" This indicates whether access was granted (Value: 0) or denied (Value: -1). According to the ekey documentation there are six more values possible as you can see in the .map file below. (Item Type Number, Modes: R/H/M)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Finger ID")]),this._v(" This indicates the finger that was used by a person. The value consists of 2 digits. The first one specifies the hand (left hand: 1, right hand: 2) and the second digit specifies the finger from left to right. To get a feeling see the .map file below. (Item Type Number, Modes: R/H/M)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Input ID")]),this._v(' This indicates which of the four digital inputs was triggered. Value is number of Input. "-1" tells that no input was triggered. (Item Type Number, Modes: M)')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Key ID")]),this._v(' This indicates which of the four keys was used. See ekey documentation on "keys". (Item Type Number, Modes: M)')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Mode")]),this._v(" This simply returns the mode that was used 1=RARE, 2=MULTI, 3=HOME (Item Type Number, Modes: R/H/M)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Relay ID")]),this._v(" This indicates which relay has been switched. (Item Type Number, Modes: R/H)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Terminal ID")]),this._v(" This provides the serial number of the packet source. The source can be a fingerprint terminal or the controller (in case of digital inputs). The Serial number has a length of 13. When using RARE mode, only the tailing 8 digits can be returned.(Item Type Number, Modes: R/H/M)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Terminal name")]),this._v(" This returns the 4 characters long name that was specified on the controller for the specific terminals. (Item Type String, Modes: M)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("User ID")]),this._v(" This indicates which user has been detected on the terminal. The value is the numerical order of the user as it was specified on the controller. Mapping the numbers to names make sense. (Item Type Number, Modes: R/H/M)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Username")]),this._v(" This returns the ten characters long name of the person that has been recognized on the terminal. The name that is returned must have been specified on the controller before. (Item Type String, Modes: M)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("User status")]),this._v(" This indicates the status of the user: -1 = undefined, 1 = enabled, 0 = disabled (Item Number, Modes: M)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/ekey.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ip")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("IPv4 address of the eKey udp converter.  A static IP address is recommended.")])]),t._v(" "),s("tr",[s("td",[t._v("port")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("port as you configured during the UDP Converter configuration.  For example, 51000")])]),t._v(" "),s("tr",[s("td",[t._v("mode")]),t._v(" "),s("td",[t._v("RARE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("can be RARE, MULTI or HOME depending on what your system supports")])]),t._v(" "),s("tr",[s("td",[t._v("delimiter")]),t._v(" "),s("td",[s("code"),t._v(" (space)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("the delimiter is also defined on the eKey UDP converter - use the eKey configuration software to determine which delimiter is used or to change it.  Another option is "),s("code",[t._v("_")]),t._v(" (underscore)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"items-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#items-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Items Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('ekey="<interestname>"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Where "),e("code",[this._v("<interestname>")]),this._v(" is one of the following:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("action")]),t._v(" "),s("li",[t._v("username")]),t._v(" "),s("li",[t._v("userid")]),t._v(" "),s("li",[t._v("userstatus")]),t._v(" "),s("li",[t._v("terminalid")]),t._v(" "),s("li",[t._v("terminalname")]),t._v(" "),s("li",[t._v("fingerid")]),t._v(" "),s("li",[t._v("keyid")]),t._v(" "),s("li",[t._v("inputid")]),t._v(" "),s("li",[t._v("mode")]),t._v(" "),s("li",[t._v("relay")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("UserID")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Last user that accessed the house was [MAP(ekey_names.map):%d]"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ekey"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"userid"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FingerID")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"User used finger [MAP(ekey_finger.map):%d]"')]),t._v("                   "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ekey"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fingerid"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("TerminalID")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Last used terminal [MAP(ekey_terminal.map):%d]"')]),t._v("             "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ekey"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"terminalid"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Action")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Last action [MAP(ekey_action.map):%d]"')]),t._v("                          "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ekey"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"action"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" Welcome\n"),s("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Action "),s("span",{attrs:{class:"token keyword"}},[t._v("received update")]),t._v("       \n"),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function-name"}},[t._v("Action")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("say")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"unauthorized access!"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("transform")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"MAP"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"ekey_names.map"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token function-name"}},[t._v("UserID")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toString")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" finger "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("transform")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"MAP"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"ekey_finger.map"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token function-name"}},[t._v("FingerID")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toString")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" terminal "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("   "),s("span",{attrs:{class:"token function"}},[t._v("transform")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"MAP"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"ekey_terminal.map"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token function-name"}},[t._v("TerminalID")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toString")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                     \n            "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" text "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('" put his "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" finger "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('" finger over the "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" terminal "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('" terminal. Hello "')]),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("name\n            "),s("span",{attrs:{class:"token function"}},[t._v("say")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("11=leftlittle\n12=leftring\n13=leftmiddle\n14=leftindex\n15=leftthumb\n21=rightthumb\n22=rightindex\n23=rightmiddle\n24=rightring\n25=rightlittle\n30=unspecified\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("-1=Unspecified\n1=John Doe\n2=Jane Doe\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("80156839130911=frontdoor\n80156839130914=backdoor\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("0=granted\n-1=rejected\n1=timeoutA\n2=timeoutB\n3=inactive\n4=alwaysuser\n5=notcoupled\n6=digitalinput\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"further-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Examples")])}],!1,null,null,null);a.options.__file="readme.md";e.default=a.exports}}]);
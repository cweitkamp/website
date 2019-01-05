(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{657:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Transforms an input string with an external program.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The external program must either be in the executable search path of the server process, or an absolute path has to be used.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("This will replace the visible label in the UI with the transformation you apply with the command <TransformProgram>.")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),a("p",[t._v("Or replace it with")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("Please note: This profile is a one-way transformation, i.e. only values from a device towards the item are changed, the other direction is left untouched.")]),t._v(" "),t._m(20),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/date.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manual"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://linode.com/docs/tools-reference/tools/use-the-date-command-in-linux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tutorial"),a("OutboundLink")],1),t._v(" for date.")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/numfmt.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manual"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"http://www.pixelbeat.org/docs/numfmt.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("tutorial"),a("OutboundLink")],1),t._v(" for numfmt.")])]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"exec-transformation-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exec-transformation-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Exec Transformation Service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Executes an external program and returns the output as a string.\nIn the given command line the placeholder "),e("code",[this._v("%s")]),this._v(" is substituted with the input value.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"general-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" General Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Item")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[this._v("String yourItem "),e("span",{attrs:{class:"token string"}},[this._v('"Some info  [EXEC(/absolute/path/to/your/\\<TransformProgram\\> %s):%s]"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Rule")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Your Rule Name"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" YourTriggeringItem "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" formatted "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"EXEC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"/absolute/path/to/your/\\<TransformProgram\\>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("YourTriggeringItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    yourFormattedItem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formatted"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-with-a-program"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-with-a-program","aria-hidden":"true"}},[this._v("#")]),this._v(" Example with a program")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Substitute the "),e("code",[this._v("/absolute/path/to/your/\\<TransformProgram\\>")]),this._v(" with")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("/bin/date -v1d -v+1m -v-1d -v-%s\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When the input argument for "),e("code",[this._v("%s")]),this._v(" is "),e("code",[this._v("fri")]),this._v(" the execution returns a string with the last weekday of the month, formated as readable text.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Fri 31 Mar 2017 13:58:47 IST`\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("numfmt --to"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("iec-i --suffix"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("B --padding"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("7 %s\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When the input argument for "),e("code",[this._v("%s")]),this._v(" is 1234567 it will return the bytes formated in a better readable form")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("1.2MiB\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"usage-as-a-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-as-a-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage as a Profile")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The functionality of this "),a("code",[t._v("TransformationService")]),t._v(" can be used in a "),a("code",[t._v("Profile")]),t._v(" on an "),a("code",[t._v("ItemChannelLink")]),t._v(" too.\nTo do so, it can be configured in the "),a("code",[t._v(".items")]),t._v(" file as follows:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String "),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("itemName"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<channelUID>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("profile"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"transform:EXEC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" function"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<shellcommand>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceFormat"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<valueFormat>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The shell command to be executed has to be set in the "),a("code",[t._v("function")]),t._v(" parameter.\nThe parameter "),a("code",[t._v("sourceFormat")]),t._v(" is optional and can be used to format the input value "),a("strong",[t._v("before")]),t._v(" the transformation, i.e. "),a("code",[t._v("%.3f")]),t._v(".\nIf omitted the default is "),a("code",[t._v("%s")]),t._v(", so the input value will be put into the transformation without any format changes.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Reading")])}],!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);
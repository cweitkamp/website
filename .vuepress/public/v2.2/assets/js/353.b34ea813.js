(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{519:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Boilerplate for the "),s("router-link",{attrs:{to:"/docs/configuration/items.html"}},[t._v("Items")]),t._v(", "),s("router-link",{attrs:{to:"/docs/configuration/sitemaps.html"}},[t._v("sitemap")]),t._v(" files and "),s("router-link",{attrs:{to:"/docs/configuration/habpanel.html"}},[t._v("HABPanel")]),t._v(" dashboard.")],1),t._v(" "),t._m(1),t._v(" "),s("ul",[s("li",[t._v("Classifies the objects within each room and creates groups for them")]),t._v(" "),s("li",[t._v("Optionally adds icons from "),s("router-link",{attrs:{to:"/addons/iconsets/classic/"}},[t._v("Classic Icon Set")]),t._v(" to the items")],1),t._v(" "),s("li",[t._v("Optionally adds Tags to the items - convenient for "),s("router-link",{attrs:{to:"/addons/integrations/homekit/readme.html"}},[t._v("HomeKit")]),t._v("/"),s("router-link",{attrs:{to:"/docs/addons/integrations/hueemulation/#device-tagging"}},[t._v("Hue Emulation")]),t._v(" add-ons users")],1),t._v(" "),s("li",[t._v("Automatically aligns the items vertically")]),t._v(" "),s("li",[t._v("Generates a "),s("router-link",{attrs:{to:"/docs/configuration/sitemaps.html"}},[t._v("Sitemap")]),t._v(" file")],1),t._v(" "),s("li",[t._v("Generates a set of HABPanel Dashboards corresponding with the Items")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Home Builder recognizes the locale by itself by simply checking your existing language configuration through openHAB's REST API.\nAll the Item's labels generated with Home Builder will be translated to the language of your choice.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Note that the room doesn't appear on the Objects list right away - it's a known defect.\nIn order to add Objects to your custom room, simply remove the room from the list and re-add it again.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("You can generate a simple sitemap with Home Builder too.\nSitemap name will be generated from \"Home Setup Name\" parameter that you've provided before.\nDon't forget to save your sitemap with the correct file name.")]),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("Last Frame inside the Sitemap is a list of Object's groups.")]),t._v(" "),t._m(27),t._v(" "),s("p",[t._v("Home Builder will help you with creating your set of dashboards for "),s("router-link",{attrs:{to:"/docs/configuration/habpanel.html"}},[t._v("HABPanel")]),t._v(" too.\nIt creates a separate dashboard for each group of Objects.\nAll you need to do is to copy the generated JSON structure and paste it in HABPanel settings page.\nThe page is located in the following URL: "),s("code",[t._v("http://{youropenHAB:8080}/habpanel/index.html#/settings/localconfig")]),t._v("\nNote that it'll override the existing Panel configuration!")],1),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"home-builder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#home-builder","aria-hidden":"true"}},[this._v("#")]),this._v(" Home Builder")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"localization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#localization","aria-hidden":"true"}},[this._v("#")]),this._v(" Localization")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"home-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#home-name","aria-hidden":"true"}},[this._v("#")]),this._v(" Home Name")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Provide your Home Name. It'll be a label for the "),e("code",[this._v("Home")]),this._v(" Item, as well as the name of your Sitemap.\nThe "),e("code",[this._v("Home")]),this._v(" item is the root item of your entire home structure - it contains all the floors as well as groups of Objects.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"floors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#floors","aria-hidden":"true"}},[this._v("#")]),this._v(" Floors")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("After that you can select the number of stories (floors) comprising the building.\nEach floor will have its own "),s("code",[t._v("Group")]),t._v(" Item - Ground Floor will be called "),s("code",[t._v("GF")]),t._v(", First Floor "),s("code",[t._v("FF")]),t._v(" and so on.\nIf there's only one floor, no additional "),s("code",[t._v("Group")]),t._v(" Items shall be created.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"rooms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rooms","aria-hidden":"true"}},[this._v("#")]),this._v(" Rooms")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Choose the rooms by simply selecting them on the list.\nThey contain the icons that you can adjust later.\nIf there's a custom room you'd like to add (e.g. a Piano room), provide its "),e("strong",[this._v("label")]),this._v(" to the field and hit Enter.\nIt will be added to the list.\nThe custom Item's "),e("strong",[this._v("name")]),this._v(' will be generated - e.g. for the "Piano Room" label the name would be '),e("code",[this._v("PianoRoom")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objects","aria-hidden":"true"}},[this._v("#")]),this._v(" Objects")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Objects are the devices or sensors that physically exist in the room.\nThey are represented in Home Builder as singular Items (e.g. Light, Window, Motion Sensor, Temperature etc.)\nEach Object is added to the Items list with its corresponding type, label, icon and list of Groups.\nE.g. "),e("code",[this._v("Light")]),this._v(" Object in the Bedroom will appear as:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("   "),s("span",{attrs:{class:"token class-name"}},[t._v("Bedroom_Light")]),t._v("    "),s("span",{attrs:{class:"token string"}},[t._v('"Light"')]),t._v("   "),s("span",{attrs:{class:"token function"}},[t._v(" <light>")]),t._v("   "),s("span",{attrs:{class:"token tag"}},[t._v(" (Bedroom, gLight)")]),t._v("    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note that the Objects have the "),e("code",[this._v('{channel=""}')]),this._v(' prefilled for convenience.\nYou can turn it off with "Append channel to the non-Group items" option.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"custom-objects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-objects","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Objects")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can use the existing Objects from the list, or create custom ones.\nSimply typing the custom Object's label in the field will create it.\nE.g. typing "),e("code",[this._v("Lamp")]),this._v(" will result in:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("   "),s("span",{attrs:{class:"token class-name"}},[t._v("Bedroom_Lamp")]),t._v("    "),s("span",{attrs:{class:"token string"}},[t._v('"Lamp"')]),t._v("   "),s("span",{attrs:{class:"token function"}},[t._v(" <none>")]),t._v("   "),s("span",{attrs:{class:"token tag"}},[t._v(" (Bedroom, gLamp)")]),t._v("    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note that the default type for your custom Item is "),e("code",[this._v("Switch")]),this._v(".\nYou can, however, change it by typing "),e("code",[this._v("{type}:{label}")]),this._v(", e.g. "),e("code",[this._v("Number:Pressure")]),this._v(" so it appears as:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),s("span",{attrs:{class:"token class-name"}},[t._v("Bedroom_Pressure")]),t._v("   "),s("span",{attrs:{class:"token string"}},[t._v('"Pressure"')]),t._v("   "),s("span",{attrs:{class:"token function"}},[t._v(" <none>")]),t._v("   "),s("span",{attrs:{class:"token tag"}},[t._v(" (Bedroom, gPressure)")]),t._v("    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"grouping-objects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grouping-objects","aria-hidden":"true"}},[this._v("#")]),this._v(" Grouping Objects")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All Objects of the same kind are being grouped within Home Builder.\nIf you add a "),e("code",[this._v("Light")]),this._v(" Object in bedroom, you'll see that there's an additional Item on the bottom:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Group")]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token constant"}},[t._v("OR")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ON"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("OFF")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   gLight    "),s("span",{attrs:{class:"token string"}},[t._v('"Light"')]),t._v("   "),s("span",{attrs:{class:"token function"}},[t._v(" <light>")]),t._v("   "),s("span",{attrs:{class:"token tag"}},[t._v(" (Home)")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It doesn't matter if there's just one Object or dozens - they will be grouped within this "),e("code",[this._v("Group")]),this._v(" Item.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can choose to generate textual "),e("code",[this._v("*.items")]),this._v(" file content or construct a request directly to the REST API that'll create the items for you.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sitemap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Sitemaps generated with Home Builder contain a "),e("code",[this._v("Frame")]),this._v(" for each floor.\nEach one of those Frames contain corresponding rooms.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"habpanel-dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#habpanel-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" HABPanel Dashboard")])}],!1,null,null,null);r.options.__file="homebuilder.md";e.default=r.exports}}]);
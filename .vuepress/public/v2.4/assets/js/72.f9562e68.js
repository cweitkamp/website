(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{578:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("OBSOLETE BINDING")]),e._v(" "),s("p",[e._v("This 1.x binding is obsolete; it has been replaced by the 2.x "),s("router-link",{attrs:{to:"./../bluetooth/"}},[e._v("bluetooth")]),e._v(" binding which you should use instead.")],1)]),e._v(" "),s("AddonLogo"),e._v(" "),s("p",[e._v("The Bluetooth binding is used to connect openHAB with a Bluetooth device. With it, you can make openHAB react to Bluetooth devices that come in range of your network.")]),e._v(" "),s("p",[e._v("The Bluetooth binding supports three different types of openHAB items: Switches, Numbers and Strings.")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("For each item you can configure whether to observe: only paired, unpaired or all devices.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("This binding requires no specific configuration.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("For Switch items:")]),e._v(" "),e._m(7),e._m(8),e._v(" "),s("p",[e._v("For Number and String items:")]),e._v(" "),e._m(9),e._m(10),e._v(" "),s("hr"),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("If a friendly name cannot be resolved for a device, its address will be used instead as its name when listing it on a String item.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),s("p",[e._v("As a result, your lines in the items file might look like follows:")]),e._v(" "),e._m(14),e._m(15),e._v(" "),s("ul",[s("li",[e._v("To access the local bluetooth device, the binding uses "),s("a",{attrs:{href:"http://bluecove.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BlueCove"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("BlueCove uses native libraries (JNI) to access the platform specific bluetooth stack.")]),e._v(" "),s("li",[e._v("There are prebuilt native libraries for Windows and Mac OS X (unconfirmed).")]),e._v(" "),s("li",[e._v("The native libraries need to be built for Linux as described below.")])]),e._v(" "),e._m(16),e._v(" "),s("p",[e._v("To access the bluetooth stack on linux systems, we have to build the native libraries.\nWe have to replace the bluecove stuff that is bundled with the mainline bluetooth binding with the new one, and then rebuild the binding for our target system (so the correct stuff comes with it).")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("(example for [ARM] Arch Linux).")]),e._v(" "),e._m(19),e._m(20),e._v(" "),e._m(21),e._m(22),e._v(" "),e._m(23),e._m(24),e._v(" "),e._m(25),e._m(26),e._v(" "),s("p",[e._v("Don't know why the header files are not generated at the build process, but that problem should be reported upstream.")]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._m(29),e._v(" "),e._m(30),s("p",[e._v("Necessary build results:")]),e._v(" "),e._m(31),e._m(32),e._v(" "),s("p",[e._v("This could be done using different ways, e.g. you could use the Eclipse IDE.")]),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),s("p",[e._v("The binding will work now on the target system, the bluecove jar (and the native libraries) are generated.")]),e._v(" "),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"bluetooth-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bluetooth-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Bluetooth Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Switches can be bound to a certain Bluetooth device address so that they are switched on if the device is in range and off otherwise.")]),this._v(" "),t("li",[this._v("Number items simply determine how many devices are currently in range.")]),this._v(" "),t("li",[this._v("String items are updated with a comma-separated list of device names that are in range.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"restrictions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restrictions","aria-hidden":"true"}},[this._v("#")]),this._v(" Restrictions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The binding is not working for Windows 8.1 (both 32 and 64 bit) or MAC OS X (Yosemite).  Please see "),t("a",{attrs:{href:"#platform-support"}},[this._v("Platform Support")]),this._v(" below for certain considerations.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The syntax for the Bluetooth binding configuration string is below.  The use of "),s("code",[e._v("[square brackets]")]),e._v(" in the syntax indicates optional sections, and the vertical bar ("),s("code",[e._v("|")]),e._v(") means choose one option on either side of the vertical bar.  Do not enter "),s("code",[e._v("[")]),e._v(", "),s("code",[e._v("]")]),e._v(" or "),s("code",[e._v("|")]),e._v(" in the actual item configuration.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('bluetooth="<deviceAddress>[!]"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("code",[this._v("<deviceAddress>")]),this._v(" is the technical address of the device, e.g. "),t("code",[this._v("EC935BD417C5")]),this._v("; the optional exclamation mark defines whether the device needs to be paired with the host.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('bluetooth="[*|!|?]"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("code",[this._v("!")]),this._v(" mean to only observe paired devices, "),t("code",[this._v("?")]),this._v(" means to only observe unpaired devices and "),t("code",[this._v("*")]),this._v(" means to accept any device.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Switch items: will receive an ON / OFF update on the bus")]),this._v(" "),t("li",[this._v("String items: will be sent a comma separated list of all device names")]),this._v(" "),t("li",[this._v("Number items will show the number of bluetooth devices in range")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('    bluetooth="EC935BD417C5"\n    bluetooth="EC935BD417C5!"\n    bluetooth="*"\n    bluetooth="!"\n    bluetooth="?"\n')])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("MyMobile")]),e._v("     \t                                  "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" bluetooth"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"EC935BD417C5!"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{attrs:{class:"token keyword"}},[e._v("String")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("UnknownDevices")]),e._v("    "),s("span",{attrs:{class:"token string"}},[e._v('"Unknown devices in range: [%s]"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" bluetooth"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"?"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("NoOfPairedDevices")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"Paired devices in range: [%d]"')]),e._v("  "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" bluetooth"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"!"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"plaform-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plaform-support","aria-hidden":"true"}},[this._v("#")]),this._v(" Plaform Support")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"linux-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_1-build-bluecove"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-build-bluecove","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Build BlueCove")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Install necessary packages to build:")]),this._v(" "),t("code",[this._v("base-devel subversion maven bluez-libs")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("pacman --needed -S base-devel subversion maven bluez-libs\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Checkout BlueCove repository")]),this._v(" (tested with v2.1.0)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("svn checkout https://bluecove.googlecode.com/svn/tags/2.1.0/\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Enter the directory and edit the pom.xml file")]),this._v(" -  disable some modules we don't need (we are only interested in bluecove and bluecove-gpl -- I did not check, if bluevoce-site-skin is necessary for bluecove build).")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[e._v("    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("modules")]),s("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("module")]),s("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("bluecove-site-skin"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[e._v("</")]),e._v("module")]),s("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("module")]),s("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("bluecove"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[e._v("</")]),e._v("module")]),s("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("\x3c!--\n        <module>bluecove-emu</module>\n        <module>bluecove-tests</module>\n        <module>bluecove-emu-gui</module>\n--\x3e")]),e._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("module")]),s("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("bluecove-gpl"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[e._v("</")]),e._v("module")]),s("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("\x3c!--\n        <module>bluecove-bluez</module>\n        <module>bluecove-examples</module>\n--\x3e")]),e._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[e._v("</")]),e._v("modules")]),s("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Start build using maven.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("mvn\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The build will fail on "),t("code",[this._v("bluecove-gpl")]),this._v(", caused by missing header file(s).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Generate (missing) JNI header files")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("javah -d ./bluecove-gpl/src/main/c/ \\\n  -cp ./bluecove-gpl/target/classes:./bluecove/target/classes \\\n  com.intel.bluetooth.BluetoothStackBlueZ \\\n  com.intel.bluetooth.BluetoothStackBlueZConsts \\\n  com.intel.bluetooth.BluetoothStackBlueZNativeTests\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Resume build")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("mvn -rf :bluecove\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("./bluecove/target/bluecove-2.1.0.jar\n./bluecove-gpl/target/bluecove-gpl-2.1.0.jar\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_2-adjust-binding-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-adjust-binding-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Adjust binding dependencies")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("open META-INF/MANIFEST.MF")]),e._v(" "),s("li",[e._v('Change "Runtime", "Classpath" (replace the old bluecove jar with the two new ones)')]),e._v(" "),s("li",[e._v('In "Build" the "Binary Build" should be changed automatically, if you change the runtime classpath.')]),e._v(" "),s("li",[e._v('Check, if "MANIFEST.MF" and "build.properties" was changed.')]),e._v(" "),s("li",[e._v("Save file")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-build-openhab-bluetooth-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-build-openhab-bluetooth-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Build openHAB Bluetooth binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Delete the bluecove jar file in the lib subdirectory of the binding.")]),this._v(" "),t("li",[this._v("Add the two build jar files (bluecove-2.1.0.jar and bluecove-gpl-2.1.0.jar) to the lib subdirectory of the binding.")]),this._v(" "),t("li",[this._v("Be sure binding dependencies are adjusted (step 2 above)")]),this._v(" "),t("li",[this._v("Clean and rebuild the binding.")])])}],!1,null,null,null);n.options.__file="readme.md";t.default=n.exports}}]);
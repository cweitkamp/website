(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{428:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("Many devices are suited to host a continuous installation of openHAB 2.\nExperiences with different devices and environments can be found in the "),n("a",{attrs:{href:"https://community.openhab.org/c/hardware/server",target:"_blank",rel:"noopener noreferrer"}},[e._v("community forum hardware section"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("The "),n("router-link",{attrs:{to:"./rasppi.html"}},[e._v("Raspberry Pi")]),e._v(" as a minimal sufficient device is quite popular, especially as we offer a quick setup with "),n("router-link",{attrs:{to:"./openhabian.html"}},[e._v("openHABian")]),e._v(".\nA popular alternative is "),n("router-link",{attrs:{to:"./synology.html"}},[e._v("our solution for the Synology DiskStation")]),e._v(", which many users already own in their homes.\nThe previously mentioned "),n("router-link",{attrs:{to:"./openhabian.html"}},[e._v("openHABian")]),e._v(" can also be used to kickstart your openHAB 2 experience on existing Debian/Ubuntu based Linux systems.")],1),e._v(" "),n("p",[e._v("Please check the menu to the left for all available options.")]),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("Make sure that you have an up to date Java platform installed on your host system.\nZulu is currently the recommended Java platform for openHAB.\n"),n("a",{attrs:{href:"https://zulu.org/download/?show=all",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"http://zulu.org/zuludocs-folder/Content/ZuluInstallationGuide/InstallingZulu/InstallZulu.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("installation"),n("OutboundLink")],1),e._v(" instructions can be found on Azul Systems' Zulu website.\nOracle Java is also suitable for most configurations but licencing restrictions may apply.\nOpenJDK may also be used, but it has some "),n("a",{attrs:{href:"https://community.openhab.org/t/running-openhab-2-on-openjdk/21443/8?u=gatekeeper6838",target:"_blank",rel:"noopener noreferrer"}},[e._v("known limitations"),n("OutboundLink")],1),e._v(" with openHAB and is not recommended.")]),e._v(" "),n("table",[e._m(6),e._v(" "),n("tbody",[n("tr",[n("td",[n("a",{attrs:{href:"https://www.azul.com/products/zulu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zulu"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("Completely open source, fully certified Java SE compliant build of OpenJDK, embedded version optimized for ARM devices "),n("a",{attrs:{href:"http://www.azul.com/downloads/zulu-embedded/",target:"_blank",rel:"noopener noreferrer"}},[e._v("available here"),n("OutboundLink")],1)]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://java.com/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle Java"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("Full openHAB support on all platforms")]),e._v(" "),n("td",[n("a",{attrs:{href:"https://blog.takipi.com/running-java-on-docker-youre-breaking-the-law/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Licensing restrictions"),n("OutboundLink")],1),e._v(", manual installation required on many Linux systems: "),n("a",{attrs:{href:"https://help.ubuntu.com/community/Java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://community.linuxmint.com/tutorial/view/1091",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mint"),n("OutboundLink")],1),e._v(", and "),n("a",{attrs:{href:"https://wiki.debian.org/Java/Sun",target:"_blank",rel:"noopener noreferrer"}},[e._v("Debian"),n("OutboundLink")],1),e._v(" are some examples")])]),e._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"http://openjdk.java.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenJDK"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("Supported by many Linux distributions, packages "),n("a",{attrs:{href:"http://openjdk.java.net/install/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("typically available"),n("OutboundLink")],1)]),e._v(" "),n("td",[n("a",{attrs:{href:"https://github.com/openhab/openhab-distro/issues/10#issuecomment-223786506",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance issues"),n("OutboundLink")],1),e._v(" on ARM platforms, "),n("a",{attrs:{href:"https://community.openhab.org/t/openhab-is-offline-message-fixed/17441/8",target:"_blank",rel:"noopener noreferrer"}},[e._v("compatibility issues"),n("OutboundLink")],1),e._v(" with certain bindings and certificates")])])])]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),n("p",[e._v("For best compatibility, namely with the openHAB Cloud service "),n("a",{attrs:{href:"http://www.myopenhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("myopenhab.org"),n("OutboundLink")],1),e._v(', the minimum recommended Java 8 revision is "101".\nAttention: Most package managers serve an '),n("strong",[e._v("older revision")]),e._v(".\nCheck your current Java version by opening a command line console and typing "),n("code",[e._v("java -version")]),e._v(":")]),e._v(" "),e._m(9),e._m(10),e._v(" "),n("p",[e._v("Before you can start, three decisions have to be made:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("openHAB 2 is available as a platform independent archive file or through a package repository:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Manual setup:")]),e._v(" Download and extract a platform independent zip archive: "),n("router-link",{attrs:{to:"./macosx.html"}},[e._v("Mac OS X")]),e._v(", "),n("router-link",{attrs:{to:"./windows.html"}},[e._v("Windows")]),e._v(", "),n("router-link",{attrs:{to:"./linux.html#manual-installation"}},[e._v("Linux")])],1),e._v(" "),n("li",[n("strong",[e._v("Package setup:")]),e._v(" Install though a package repository, including automatic updates.\nThis option is only available for Debian or Ubuntu derivatives and the recommended choice: "),n("router-link",{attrs:{to:"./linux.html#package-repository-installation"}},[e._v("Linux (apt/deb)")])],1)])]),e._v(" "),n("li",[n("p",[e._v("Stable release or cutting edge:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Stable:")]),e._v(" Use the latest official release ("),n("a",{attrs:{href:"https://bintray.com/openhab/mvn/openhab-distro",target:"_blank",rel:"noopener noreferrer"}},[e._v("hosted on Bintray"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("li",[n("strong",[e._v("Snapshot:")]),e._v(" Benefit from the latest changes in the daily created snapshot ("),n("a",{attrs:{href:"https://openhab.ci.cloudbees.com/job/openHAB-Distribution",target:"_blank",rel:"noopener noreferrer"}},[e._v("hosted on CloudBees"),n("OutboundLink")],1),e._v(").")])])])]),e._v(" "),e._m(11),e._v(" "),n("p",[e._v("Please follow the instructions in the installation article matching your platform (see the menu to the left).")]),e._v(" "),e._m(12),e._v(" "),n("p",[e._v("After you got openHAB 2 set up and running, there are a few additional setup steps you should consider:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Configure a network share on your openHAB host device and mount it locally: "),n("router-link",{attrs:{to:"./linux.html#network-sharing"}},[e._v("Linux Samba Share")]),e._v(", Windows file sharing, ...")],1)]),e._v(" "),n("li",[n("p",[e._v("Install the "),n("router-link",{attrs:{to:"./designer.html"}},[e._v("Eclipse SmartHome Designer")]),e._v(" on your local machine, to manage your (remote) configuration files.\nThe designer comes with built-in support for the openHAB syntax and elements.")],1)])]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),n("p",[e._v("The very active "),n("a",{attrs:{href:"https://community.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB Community Forum"),n("OutboundLink")],1),e._v(" provides many more details and hints.\nIf you run into any problems, use the search function or open a new thread with your detailed question.")]),e._v(" "),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"installation-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("openHAB 2 is based on the Eclipse SmartHome framework and is fully written in Java.\nAs such, it only depends on a Java Virtual Machine, which is available for many platforms.\nopenHAB can be executed on different versions of "),t("strong",[this._v("Mac OS X")]),this._v(" and "),t("strong",[this._v("Windows")]),this._v(" and many different variants of "),t("strong",[this._v("Linux")]),this._v(" (Ubuntu, Raspbian, ...).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Please be aware of the fact, that openHAB 2 is based on a new core and introduces new concepts.\nTherefore, tutorials and help you may find on the internet for openHAB 1 "),t("strong",[this._v("might")]),this._v(" be outdated!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"platform-recommendations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#platform-recommendations","aria-hidden":"true"}},[this._v("#")]),this._v(" Platform Recommendations")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[n("p",[e._v("You are "),n("strong",[e._v("new to openHAB 2")]),e._v(" and want to give it a try? You are in luck:")]),e._v(" "),n("ul",[n("li",[e._v("Set up openHAB 2 on your local PC or Mac in just a few steps.")])])]),e._v(" "),n("li",[n("p",[e._v("You gained some experience and want to use openHAB to seriously control your home?\nTypical hardware and software requirements are:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("24/7 availability:")]),e._v(" A dedicated system connected by Ethernet and running continuously.")]),e._v(" "),n("li",[n("strong",[e._v("Energy and space efficient:")]),e._v(" A device capable of performing the task at hand without being exaggerated")]),e._v(" "),n("li",[n("strong",[e._v("Extendibility:")]),e._v(" Your system should be capable of running additional software like an MQTT broker or a persistence and graphing software.")]),e._v(" "),n("li",[n("strong",[e._v("Peripherals:")]),e._v(" Depending on your home automation hardware, you will need additional  peripheral devices such as a WiFi interface or a special USB radio module.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Java Platform")]),this._v(" "),t("th",[this._v("Advantages")]),this._v(" "),t("th",[this._v("Disadvantages")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Please use the "),t("strong",[this._v("32-bit version")]),this._v(" of the JVM for ARM platforms, even on 64-bit operating systems.\nSerial connections won't work with a 64-bit JVM, preventing bindings like Z-Wave from functioning.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("As for now, a pre-release "),t("strong",[this._v("Java 9")]),this._v(" installation is not recommended and is not yet supported by openHAB 2.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('java version "1.8.0_121"\nJava(TM) SE Runtime Environment (build 1.8.0_121-b13)\nJava HotSpot(TM) Client VM (build 25.121-b13, mixed mode)\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"setup-variants"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-variants","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup variants")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"additional-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-steps","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional Steps")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting started")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("With the openHAB 2 distribution up and running, you should now continue with\nthe "),t("a",{attrs:{href:"/docs/tutorials/beginner"}},[this._v("Beginner Tutorial")]),this._v("\nor by working on your own configuration.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#help","aria-hidden":"true"}},[this._v("#")]),this._v(" Help")])}],!1,null,null,null);r.options.__file="index.md";t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{357:function(e,t,r){e.exports=r.p+"ff32734b6eb66e40fdf51ec60fc9f086.png"},358:function(e,t,r){e.exports=r.p+"546f8ba310c0810a7ab2672962a39395.png"},359:function(e,t,r){e.exports=r.p+"90855c4074c5e165c0d2e05f92b0de7b.png"},438:function(e,t,r){"use strict";r.r(t);var i=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"osgi-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osgi-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" OSGi Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Concepts")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("strong",[e._v("Modularity")]),e._v(" - it is realized with the "),r("a",{attrs:{href:"#important-definitions"}},[r("em",[e._v("bundle")])]),e._v(" concept;")]),e._v(" "),r("li",[r("strong",[e._v("Runtime Dynamics")]),e._v(" - software components can be managed at runtime;")]),e._v(" "),r("li",[r("strong",[e._v("Service Orientation")]),e._v(" - components communicate between each other through "),r("a",{attrs:{href:"#important-definitions"}},[r("em",[e._v("services")])]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"layering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#layering","aria-hidden":"true"}},[this._v("#")]),this._v(" Layering")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("strong",[e._v("Module Layer")]),e._v(" - it is responsible for managing dependencies between bundles and for class loading ("),r("a",{attrs:{href:"#bundles"}},[e._v("See Bundles Section")]),e._v(");")]),e._v(" "),r("li",[r("strong",[e._v("Life Cycle Layer")]),e._v(" - controls the lifecycle of the bundles ("),r("a",{attrs:{href:"#lifecycle"}},[e._v("See Lifecycle Section")]),e._v(");")]),e._v(" "),r("li",[r("strong",[e._v("Service Layer")]),e._v(" - defines a dynamic model (publish/find/bind) of communication between different modules ("),r("a",{attrs:{href:"#services"}},[e._v("See Services Section")]),e._v(");")]),e._v(" "),r("li",[r("strong",[e._v("Actual Services")]),e._v(" (Bundles on Fig.1) - this is the application layer, using all other layers;")]),e._v(" "),r("li",[r("strong",[e._v("Security Layer")]),e._v(" - optional layer, based on the Java 2 security architecture, that manages permissions for different modules.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"bundles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bundles","aria-hidden":"true"}},[this._v("#")]),this._v(" Bundles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"#important-definitions"}},[t("strong",[this._v("manifest")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("strong",[this._v("OSGi runtime uses the information about the dependencies to "),t("em",[this._v("wire")]),this._v(" the bundles and hides everything in this JAR unless it is explicitly exported")]),this._v(". The dependencies to the Java standard libraries are managed by the "),t("em",[this._v("Bundle-RequiredExecutionEnvironment")]),this._v(" header, so it is not needed to import the Java core packages.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[this._v("Manifest-Version: 1.0\nBundle-ManifestVersion: 2\nBundle-Name: Example Plug-in\nBundle-SymbolicName: com.example.myosgi; singleton:=true\nBundle-Version: 1.0.0\nBundle-RequiredExecutionEnvironment: JavaSE-1.7\nImport-Package: org.example.required\nExport-Package: org.example.provided\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Bundles are used often to register and consume services. You will find more information about that in the "),t("a",{attrs:{href:"#services"}},[this._v("Services")]),this._v(" section.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"lifecycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle","aria-hidden":"true"}},[this._v("#")]),this._v(" Lifecycle")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("OSGi is a dynamic platform. That means that bundles may be "),t("em",[this._v("installed, uninstalled, started, stopped or updated")]),this._v(" at runtime (See Table 1). The OSGi specification defines a mechanism how to manage the dependencies between the bundles and the functionality that they provide. This is achieved with the help of the "),t("em",[this._v("lifecycle")]),this._v(" concept.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Status")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("INSTALLED")]),e._v(" "),r("td",[e._v("The bundle has been installed into the OSGi container, but some of it's dependencies are still not resolved. The bundle requires packages that have not been exported by any other bundle.")])]),e._v(" "),r("tr",[r("td",[e._v("RESOLVED")]),e._v(" "),r("td",[e._v("The bundle is installed and the all the dependencies at a class level are resolved and wired. The bundle can export the packages, that it provides.")])]),e._v(" "),r("tr",[r("td",[e._v("STARTING")]),e._v(" "),r("td",[e._v("A temporary state that the bundle goes through while the bundle is starting, after all dependencies have been resolved. The bundle is permitted to register services.")])]),e._v(" "),r("tr",[r("td",[e._v("ACTIVE")]),e._v(" "),r("td",[e._v("The bundle is running")])]),e._v(" "),r("tr",[r("td",[e._v("STOPPING")]),e._v(" "),r("td",[e._v("A temporary state that the bundle goes through while the bundle is stopping")])]),e._v(" "),r("tr",[r("td",[e._v("UNINSTALLED")]),e._v(" "),r("td",[e._v("The bundle has been removed from the OSGi container.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(359),alt:"Bundle lifecycle"}}),t("br"),this._v("\nFig.2 Bundle State diagram")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#services","aria-hidden":"true"}},[this._v("#")]),this._v(" Services")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Another main concept, that allows the bundles to communicate between each other, is the "),t("em",[this._v("service")]),this._v(" model.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("In OSGi, a bundle can register a "),t("em",[this._v("service")]),this._v(" in a central "),t("a",{attrs:{href:"#important-definitions"}},[this._v("service registry")]),this._v(" under one ore more "),t("em",[this._v("service interface")])]),this._v(". Published services also have service properties associated with them in the registry. It is an important feature of OSGi, because it provides a central place to register and get services. A bundle is permitted to register service objects at any time during the STARTING, ACTIVE or STOPPING states. Other bundles can go the registry and list all objects, that are registered under a specific interface or class.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A bundle can therefore register a service, it can get a service and it can track for appearing and disappearing of service. "),t("strong",[this._v("Any number of bundles can register the same service type and any number of bundles can get the same service.")]),this._v(" A simple diagram of the service usage and tracking is shown on Fig. 3.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"popular-osgi-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#popular-osgi-containers","aria-hidden":"true"}},[this._v("#")]),this._v(" Popular OSGi Containers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"important-definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#important-definitions","aria-hidden":"true"}},[this._v("#")]),this._v(" Important Definitions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("manifest")]),this._v(" - descriptive information about the bundle, contained in its JAR file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Service Registry")]),this._v(" - enables a bundle to publish objects to a shared registry, advertised via a given set of Java interfaces.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Reading")])}],n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("openHAB is being based on "),i("a",{attrs:{href:"https://www.osgi.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi"),i("OutboundLink")],1),e._v(" and understanding of OSGi modular architecture is very important. This page is aimed to help developers, that are going to use OSGi for the first time and contains a basic overview of the OSGi technology.")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("As described in the "),i("a",{attrs:{href:"https://www.osgi.org/developer/architecture/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi architecture page"),i("OutboundLink")],1),e._v(", "),i("em",[e._v("OSGi is a set of "),i("a",{attrs:{href:"https://www.osgi.org/developer/specifications/",target:"_blank",rel:"noopener noreferrer"}},[e._v("specifications"),i("OutboundLink")],1),e._v(" that define a dynamic component system for Java. These specifications enable a development model, where applications are dynamically composed of many different reusable components. The OSGi specifications enable components to hide their implementations from other components while communicating through services, which are objects that are specifically shared between components")]),e._v(". This architecture significantly reduces the overall complexity of building, maintaining and deploying applications.")]),e._v(" "),i("p",[e._v("Key features of OSGi are:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("The OSGi framework consist of several layers build on top of each other (See Fig. 1):")]),e._v(" "),e._m(5),e._v(" "),i("p",[i("img",{attrs:{src:r(357),alt:"OSGi Layers"}}),i("br"),e._v("\nFig.1 OSGi Layering (Source:"),i("a",{attrs:{href:"https://www.osgi.org/wp-content/uploads/layering-osgi.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.osgi.org/wp-content/uploads/layering-osgi.png"),i("OutboundLink")],1),e._v(")")]),e._v(" "),i("p",[e._v("More details about the OSGi architecture can be found at "),i("a",{attrs:{href:"https://www.osgi.org/developer/architecture/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.osgi.org/developer/architecture/"),i("OutboundLink")],1)]),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("Modules (called "),i("strong",[e._v("bundles")]),e._v(") are the smallest unit of modularization. Technically a bundle is a JAR file with additional meta information. This information is stored in file called "),e._m(7),e._v(" file. The manifest file is part of the standard "),i("a",{attrs:{href:"http://docs.oracle.com/javase/7/docs/technotes/guides/jar/jar.html#",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java specification"),i("OutboundLink")],1),e._v(", but OSGi adds additional metadata to it in form of specific headers. The "),i("em",[e._v("Bundle-SymbolicName")]),e._v(" and the "),i("em",[e._v("Bundle-Version")]),e._v(" headers uniquely identify a bundle. In OSGi is allowed to have "),i("strong",[e._v("bundles with same name, but different version running at the same time.")])]),e._v(" "),i("p",[e._v("Some of the most important information that the manifest contains are the bundle dependencies. "),i("strong",[e._v("A bundle can depend on another bundle or on a package")]),e._v(". Preferred way to define dependencies in a bundle is with "),i("em",[e._v("Import-Package")]),e._v(" and "),i("em",[e._v("Export-Package")]),e._v(" headers and not with "),i("em",[e._v("Require-Bundle")]),e._v(" header. This gives you an access only to the packages that you need and allows you to exchange the packages at a later point in time. You can find more information in "),i("a",{attrs:{href:"http://web.ist.utl.pt/ist162500/?p=104",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why using Require-Bundle is a bad practice and should be avoided"),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("A simple manifest file can have the following content:")]),e._v(" "),e._m(9),i("p",[i("a",{attrs:{href:"https://osgi.org/download/r4v42/r4.core.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi Service Platform Core Specification, Chapter 3.5"),i("OutboundLink")],1),e._v(" contains detailed information about the "),i("em",[e._v("Module Layer")]),e._v(" and description of the headers ("),i("em",[e._v("Manifest-Version")]),e._v(", "),i("em",[e._v("Bundle-ManifestVersion")]),e._v(", "),i("em",[e._v("Bundle-Name")]),e._v(") used in this example.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),i("p",[e._v("The framework introduces a different states, transitions between these states and rules how this states are affecting the packages exported by the bundle and the services, that it provides. The table below shows the possible states of an OSGi bundle with a short explanation:")]),e._v(" "),e._m(13),e._v(" "),i("p",[e._v("Table 1 Bundle states description")]),e._v(" "),i("p",[e._v("The possible status transitions are shown in the state diagram below:")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),i("p",[i("img",{attrs:{src:r(358),alt:"OSGi Services"}}),i("br"),e._v("\nFig.3 OSGi Services (Source: "),i("a",{attrs:{href:"https://www.osgi.org/wp-content/uploads/services.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.osgi.org/wp-content/uploads/services.png"),i("OutboundLink")],1),e._v(")")]),e._v(" "),e._m(19),e._v(" "),i("p",[e._v("We have talked so far about the OSGi specification. Here is the place to emphasize that the different containers might implement different parts of the OSGi specifications and might provide slightly different API (which could make the bundle not fully portable between different containers).")]),e._v(" "),i("p",[e._v("We will list the most popular OSGi containers with a short description of their goals. We can divide them into:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("open source:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.eclipse.org/equinox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Equinox"),i("OutboundLink")],1),e._v(" - this is the reference implementation of the OSGi R4.x Core Specification and one of the mostly used. As it is used in the openHAB project, we have prepared a  "),i("router-link",{attrs:{to:"./equinox.html"}},[e._v("wiki page")]),e._v(";")],1),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix"),i("OutboundLink")],1),e._v(" - implements OSGi R5 Core Specification, developed by the Apache Software Foundation. "),i("a",{attrs:{href:"http://karaf.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Karaf"),i("OutboundLink")],1),e._v(" is distribution based on Apache Felix that provides some additional features on top of it (e.g. folder based hot deployment, improved default console with remote SSH, maven plugins and others);")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.eclipse.org/concierge/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Concierge"),i("OutboundLink")],1),e._v(" - implements OSGi R5 Core Specification and is aimed at mobile and embedded devices. With a size of around 250 kb it has the smallest footprint of the presented containers;")])])]),e._v(" "),i("li",[i("p",[e._v("commercial:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://dz.prosyst.com/pdoc/mBS_SDK_8.1/modules/framework/overview/framework.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProSyst OSGi Framework"),i("OutboundLink")],1),e._v(" - implements OSGi R5 Core and Compendium Specification. This implementation is low-footprint, optimized for embedded products, provides custom remote management agent and many more additional components.")])])])]),e._v(" "),e._m(20),e._v(" "),i("p",[i("strong",[e._v("bundle")]),e._v(" - a unit of modularization, defined by the OSGi framework. A bundle is comprised of Java classes and other resources, which together can provide functions to end users. For more detailed definition - "),i("a",{attrs:{href:"https://osgi.org/download/r4v42/r4.core.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi Service Platform Core Specification, Chapter 3.2"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("strong",[e._v("service")]),e._v(" - any object that is registered in the OSGi Service Registry and can be looked up using its interface name(s). Definition - "),i("a",{attrs:{href:"https://osgi.org/download/r4v42/r4.core.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi Service Platform Core Specification, Chapter 5.1"),i("OutboundLink")],1)]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://osgi.org/download/r4v42/r4.core.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi Service Platform Core Specification, Version 4.2"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.slideshare.net/caniszczyk/osgi-for-eclipse-developers-1331901",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi For Eclipse Developers - only the presentation materials"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=4YfAo9ZoEGQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi For Eclipse Developers - video"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://osgi.org/javadoc/r4v42/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi API"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.vogella.com/tutorials/OSGi/article.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi Vogella guide"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.programcreek.com/2011/07/osgi-framework-architecture-three-conceptual-layers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi Framework Architecture – Three Conceptual Layers "),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.opus-college.net/devcorner/OSGi_in_Action.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi in action, Creating Modular Applications in Java"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://developer.atlassian.com/docs/atlassian-platform-common-components/plugin-framework/behind-the-scenes-in-the-plugin-framework/lifecycle-of-a-bundle",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lifecycle of a bundle"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://enroute.osgi.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi enRoute"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.osgi.org/developer/where-to-start/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.osgi.org/developer/where-to-start/"),i("OutboundLink")],1)])]),e._v(" "),i("DocPreviousVersions"),e._v(" "),i("EditPageLink")],1)},i,!1,null,null,null);a.options.__file="osgi.md";t.default=a.exports}}]);
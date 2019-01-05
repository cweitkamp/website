(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{444:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("During development you might want to change the logging configuration in order to debug your application and the underlying framework or services.")]),t._v(" "),s("p",[t._v("openHAB is using a combination of the Simple Logging Facade for Java ("),s("a",{attrs:{href:"http://www.slf4j.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("slf4j"),s("OutboundLink")],1),t._v(") and a "),s("a",{attrs:{href:"http://logback.qos.ch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("logback"),s("OutboundLink")],1),t._v(" implementation. In this page we will give a few tips on how you can use and configure the logger to suit your needs.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("In order to enable logging in your run configuration, you have to add the following bundles to the runtime configuration:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("You can use a logger the following way:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("If we have setup the logging by just adding the bundles above we will end up in a logging with default configuration. In order to define custom logging configuration we can prepare a logging configuration file.")]),t._v(" "),s("p",[t._v("The configuration file for openHAB is placed in the "),s("a",{attrs:{href:"https://github.com/openhab/openhab-distro/blob/fa20ddb3555873ea98fe9fc5a5c0c28bf33003d5/launch/home/logback_debug.xml",target:"_blank",rel:"noopener noreferrer"}},[t._v("openhab-distro/lauch/home/logback_debug.xml"),s("OutboundLink")],1),t._v(" file. We have added a few comments on this file in order to attract your attention on some significant points:")]),t._v(" "),t._m(7),s("p",[t._v("If you are not aware of the different "),s("a",{attrs:{href:"http://logback.qos.ch/manual/architecture.html#effectiveLevel",target:"_blank",rel:"noopener noreferrer"}},[t._v("log levels"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"http://logback.qos.ch/manual/appenders.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("appenders"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"http://logback.qos.ch/manual/configuration.html#loggerElement",target:"_blank",rel:"noopener noreferrer"}},[t._v("logger elements"),s("OutboundLink")],1),t._v(", you might want to take a look at the links to the the logback documentation.")]),t._v(" "),s("p",[t._v("If you want to change the logger's configuration, you might change the content of this file, but a better approach will be to make a copy of this file and apply the changes in the new file.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("There are several things, that you might want to change in the configuration:")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("As you can see from the example configuration file above, the level for jUPnP is set to ERROR. If you develop a binding that is using jUPnP, you might want to see more logs on your console. You can simply change the log level to TRACE or DEBUG:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),s("p",[t._v("Another useful option is to change the pattern of an appender. This pattern defines what information will be logged. The logback logger provides many "),s("a",{attrs:{href:"http://logback.qos.ch/manual/layouts.html#conversionWord",target:"_blank",rel:"noopener noreferrer"}},[t._v("predefined conversation words"),s("OutboundLink")],1),t._v(" for the most common use cases. Use the most appropriate ones for your specific case. For the purpose of exploring and debugging multi threaded applications you might need to see which thread has generated certain log event. In order to see this in the logs, you have to add the conversion word "),s("code",[t._v("t")]),t._v(" to the pattern above:")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.slf4j.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.slf4j.org/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://logback.qos.ch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://logback.qos.ch/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.slf4j.org/manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.slf4j.org/manual.html"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://stackoverflow.com/questions/6699537/how-to-use-multiple-configurations-with-logback-in-a-single-project",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://stackoverflow.com/questions/6699537/how-to-use-multiple-configurations-with-logback-in-a-single-project"),s("OutboundLink")],1)])]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"set-up-logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-logging","aria-hidden":"true"}},[this._v("#")]),this._v(" Set up Logging")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("org.slf4j.api;")]),this._v(" "),a("li",[this._v("ch.qos.logback.classic;")]),this._v(" "),a("li",[this._v("ch.qos.logback.core;")]),this._v(" "),a("li",[this._v("ch.qos.logback.slf4j.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("In your bundle, you will depend only on the "),a("code",[this._v("org.slf4j")]),this._v(" package, so add it as a dependency in the "),a("code",[this._v("Import-Package")]),this._v(" header of the "),a("code",[this._v("MANIFEST.MF")]),this._v(" file.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LoggerFactory"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Logger logger "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LoggerFactory"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getClass")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("main")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("info")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"logback-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logback-configuration-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Logback Configuration File")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("scan")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- This is the appender that displays the logging on the console --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("STDOUT"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ch.qos.logback.core.ConsoleAppender"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("encoder")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- This pattern will display the time, the log level, the name of the logger and the log message --\x3e")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pattern")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] [%-30.30logger{36}:%-5line] - %msg%ex{10}%n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pattern")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("encoder")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("appender")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Another appender that logs into a file --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("FILE"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ch.qos.logback.core.FileAppender"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("file")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${openhab.logdir:-userdata/logs}/openhab.log"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("file")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("encoder")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pattern")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] [%-30.30logger{36}:%-5line] - %msg%ex{10}%n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pattern")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("encoder")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("appender")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- We have removed part of the original file in this example --\x3e")]),t._v("\n\t...\n\n\t\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("smarthome.event"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("INFO"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("additivity")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- The element <logger> may contain zero or more <appender-ref> elements --\x3e")]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("EVENTFILE"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("STDOUT"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("logger")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Logback uses inheritance to determine the log level.\n \t\tIf a given logger is NOT assigned a level it inherits one from the its closest ancestor --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.openhab"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("DEBUG"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.eclipse.smarthome"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("DEBUG"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.eclipse.jetty"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("INFO"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.jupnp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ERROR"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javax.jmdns"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("OFF"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javax.jmdns.impl"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("OFF"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javax.jmdns.impl.constants"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("OFF"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tuwien.auto.calimero"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("WARN"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- The root logger is at the top of the logger hierarchy. \n\t\t\tAll loggers inherit its level, if there are no ancestors \n\t\t\tbetween the root and the logger --\x3e")]),t._v(" \n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("root")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("INFO"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("FILE"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("STDOUT"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("root")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("OSGi"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("OFF"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The path to the logging file is passed as an argument to the JVM, so if you want to use different configuration file, you have to change the property "),a("code",[this._v("-Dlogback.configurationFile")]),this._v(" with the path to the new file in the run configuration that you are using.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("the log level for a logger;")]),this._v(" "),a("li",[this._v("the pattern of an appender;")]),this._v(" "),a("li",[this._v("redirect the log to a text file.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"setting-up-the-log-level"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-log-level","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting up the Log Level")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.jupnp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("TRACE"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"changing-the-pattern-of-an-appender"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-pattern-of-an-appender","aria-hidden":"true"}},[this._v("#")]),this._v(" Changing the Pattern of an Appender")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pattern")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("%t %d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] [%-30.30logger{36}:%-5line] - %msg%ex{10}%n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pattern")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"redirect-the-log-to-a-text-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirect-the-log-to-a-text-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Redirect the Log to a Text File")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You might want to redirect your log to a text file. This gives you the flexibility to search easier for a specific log or to save your logs. If you have looked at the "),a("a",{attrs:{href:"#logback-configuration-file"}},[this._v("default configuration file")]),this._v(" you might have noticed that several appenders are listed there. The process of redirecting the log to a text file is as simple as :")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("adding a new "),a("code",[this._v("FileAppender")]),this._v(" and specifying the path of the output file:")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("YOUR_APPENDER_NAME"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ch.qos.logback.core.FileAppender"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("file")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("relative/path/to/file.log"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("file")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("encoder")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!--Pick up a pattern that will log the information taht you will need --\x3e")]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pattern")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] [%-30.30logger{36}:%-5line] - %msg%ex{10}%n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pattern")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("encoder")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("appender")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("adding your logger, setting up the log level and adding "),a("code",[this._v("appender-ref")]),this._v(" element to the logger element. For this example we will assume that you want to add the following logger with the name "),a("code",[this._v("com.logger.example")]),this._v(":")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logger")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.logger.example"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("INFO"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("YOUR_APPENDER_NAME"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("logger")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Reading")])}],!1,null,null,null);e.options.__file="logging.md";a.default=e.exports}}]);
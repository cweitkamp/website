(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{525:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.jython.org/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),n("OutboundLink")],1),t._v(" the Jython 2.7.x installer package.\nInstall Jython on the local filesystem and make note of the installation directory location.")]),t._v(" "),n("p",[t._v("The Jython implementation will need to be added to openHAB's Java classpath.\nHow this is done depends on the specific installation technique and operating system.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("Watch the openHAB log file carefully ("),n("router-link",{attrs:{to:"/docs/administration/logging.html"}},[t._v("Karaf logging")]),t._v("\nor viewing the "),n("code",[t._v("openhab.log")]),t._v(" file directly).\nYou should see a log line with information similar to:")],1),t._v(" "),t._m(10),t._m(11),t._v(" "),n("p",[t._v("Look for any potentially related error messages.")]),t._v(" "),n("p",[t._v("To enable debug logging, use the "),n("router-link",{attrs:{to:"/docs/administration/logging.html"}},[t._v("Karaf logging")]),t._v(" commands to\nenable debug logging for the automation functionality:")],1),t._v(" "),t._m(12),t._m(13),t._v(" "),n("p",[t._v('Jython scripts provide access to almost all the functionality in an openHAB runtime environment.\nAs a simple example, the following script logs "Hello, World!" into the openhab.log file.\nNote that '),n("code",[t._v("print")]),t._v(" will usually not work since the output has no terminal to display the text.\nOne exception is when the openHAB server is running from the Eclipse IDE.\nThe openHAB server uses the "),n("a",{attrs:{href:"https://www.slf4j.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SLFJ"),n("OutboundLink")],1),t._v(" library for logging.")]),t._v(" "),t._m(14),n("p",[t._v("Jython can "),n("a",{attrs:{href:"http://www.jython.org/jythonbook/en/1.0/ModulesPackages.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("import Java classes"),n("OutboundLink")],1),t._v(".\nDepending on the openHAB logging configuration,\nyou may need to prefix logger names with "),n("code",[t._v("org.eclipse.smarthome.automation")]),t._v("\nfor them to show up in the log file (or you modify the logging configuration).")]),t._v(" "),n("blockquote",[n("p",[t._v("NOTE: Be careful with using wildcards when importing Java packages (e.g., "),n("code",[t._v("import org.sl4j.*")]),t._v(").\nThis will work in some cases, but it might not work in some situations.\nIt's best to use explicit imports with Java packages.\nFor more details, see the Jython documentation on\n"),n("a",{attrs:{href:"http://www.jython.org/jythonbook/en/1.0/ModulesPackages.html#java-package-scanning",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java package scanning"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("p",[t._v("The script then uses the "),n("a",{attrs:{href:"https://www.slf4j.org/apidocs/org/slf4j/Logger.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LoggerFactory"),n("OutboundLink")],1),t._v("\nto obtain a named logger and then logs a message like:")]),t._v(" "),t._m(15),n("p",[t._v("Notice that no rules were required for this simple script.\nThis can be a useful way to experiment with simple Jython code before defining rules or other more advanced functionality.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),n("p",[t._v("When a script is loaded, some names are already defined in the script "),n("em",[t._v("scope")]),t._v(" (the local Jython namespace).\nTo define rules, you must include some additional "),n("router-link",{attrs:{to:"./jsr223.html#presets"}},[t._v("script "),n("em",[t._v("extensions")])]),t._v('\n(implemented as "presets") that add more names to the script scope for specific purposes.\nIn this case, the '),n("code",[t._v("RuleSimple")]),t._v(" extension is used to import the "),n("code",[t._v("SimpleRule")]),t._v(" base class.\nThe "),n("code",[t._v("RuleSupport")]),t._v(" extensions provides the "),n("code",[t._v("automationManager")]),t._v(" that allows you to register rule instances with openHAB.")],1),t._v(" "),n("p",[t._v("The Jython rule class uses the "),n("code",[t._v("SimpleRule")]),t._v(" subclass to simplify some aspects of the openHAB interface for use with JSR223.\nn the constructor, the triggers atribute is set to a list of "),n("router-link",{attrs:{to:"./jsr223.html#trigger_types"}},[t._v("triggers")]),t._v(".\nIn this example, the trigger is a state update trigger.\nThe trigger name identifies the trigger and the configuration direction provides trigger-specific options.\nFor the item update trigger, the configuration provides the item name of the monitored item.")],1),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://github.com/eclipse/smarthome/wiki/Scripted-Rule-Support",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scripted Rule Support"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Early documentation on JSR223 usage in openHAB 2. Includes IDE setup instructions.")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://github.com/steve-bate/openhab2-jython",target:"_blank",rel:"noopener noreferrer"}},[t._v("openhab2-jython"),n("OutboundLink")],1),t._v("  (github)")]),t._v(" "),n("p",[t._v("Provides information and examples related to advanced, exploratory openHAB JSR223 Jython usage.")]),t._v(" "),t._m(20)])]),t._v(" "),n("DocPreviousVersions"),t._v(" "),n("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"jsr223-jython-scripting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsr223-jython-scripting","aria-hidden":"true"}},[this._v("#")]),this._v(" JSR223 Jython Scripting")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"linux-package-installers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-package-installers","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux Package Installers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Modify the "),e("code",[this._v("EXTRA_JAVA_OPTS")]),this._v(" environment variable in "),e("code",[this._v("/etc/default/openhab2")]),this._v(" to:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("EXTRA_JAVA_OPTS"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("-Xbootclasspath/a:/home/pi/jython2.7.0/jython.jar \\\n  -Dpython.home"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("/home/pi/jython2.7.0 \\\n  -Dpython.path"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("/etc/openhab2/lib/python\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This will add the Jython library to the Java classpath,\nset the Jython home directory and specify the initial Python path for the Jython runtime.\nPython modules and packages can be installed into the "),e("code",[this._v("python.path")]),this._v(" locations and imported from scripts.\nNote that library modules and packages are not automatically reloaded when they change.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mac-and-windows-or-manual-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-and-windows-or-manual-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Mac and Windows or Manual Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set the "),e("code",[this._v("EXTRA_JAVA_OPTS")]),this._v(" environment variable to the value described in the Linux configuration.\nNote that on Windows the environment variable value should be set as a single line\n(without backslashes to combine the line fragments).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Testing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In the "),e("code",[this._v("automation/jsr223")]),this._v(" directory create an empty file called "),e("code",[this._v("test.py")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("    ... [INFO ] [s.i.GenericScriptEngineFactory:28   ] - Activated scripting support for ECMAScript\n    ... [INFO ] [s.i.GenericScriptEngineFactory:28   ] - Activated scripting support for python\n        ...\n    ... [INFO ] [.a.m.s.r.i.l.ScriptFileWatcher:150  ] - Loading script 'test.py'\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("NOTE: ECMAScript is Javascript")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("log:set DEBUG org.eclipse.smarthome.automation\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"script-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#script-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Script Examples")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LoggerFactory\n\nLoggerFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getLogger"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"org.eclipse.smarthome.automation.examples"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Hello world!"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("    ... [INFO ] [.smarthome.automation.examples:-2   ] - Hello world!\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("If you want to respond to openHAB events you can create rules in the scripts.\nThe following script requires two string items, "),n("code",[t._v("TestString1")]),t._v(" and "),n("code",[t._v("TestString2")]),t._v(".\nThe rule created in the script is triggered by an update to "),n("code",[t._v("TestString1")]),t._v(" and,\nwhen triggered, the rule updates "),n("code",[t._v("TestString2")]),t._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("scriptExtension"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("importPreset"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"RuleSupport"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nscriptExtension"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("importPreset"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"RuleSimple"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("MyRule")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleRule"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("__init__")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("triggers "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            TriggerBuilder"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withId"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"MyTrigger"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withTypeUID"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"core.ItemStateUpdateTrigger"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withConfiguration"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                        Configuration"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            "),n("span",{attrs:{class:"token string"}},[t._v('"itemName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"TestString1"')]),t._v("\n                        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        \n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("execute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("input")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        events"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("postUpdate"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"TestString2"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"some data"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nautomationManager"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addRule"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyRule"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("execute")]),this._v(" method is invoked when the rule is triggered.\nThe "),e("code",[this._v("module")]),this._v(" and "),e("code",[this._v("input")]),this._v(" arguments can be used in advanced rules.\nThe information provided varies by the trigger type.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Resources")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Wrappers to simplify "),n("code",[t._v("Trigger")]),t._v(" usage in rules.")]),t._v(" "),n("li",[t._v("Python decorators to define simple time-triggered and item-triggered functions")]),t._v(" "),n("li",[t._v("Python logging bridge to openHAB logger")]),t._v(" "),n("li",[t._v("Custom Trigger Implementations: "),n("code",[t._v("StartupTrigger")]),t._v(", "),n("code",[t._v("OsgiEventTrigger")]),t._v(", ...")]),t._v(" "),n("li",[t._v("OSGI console command implemented in Jython")]),t._v(" "),n("li",[t._v("OH2 Module Implementations in Jython (things, item providers, ...)")]),t._v(" "),n("li",[t._v("Jython-based ScriptExtension (preset) provider support.")]),t._v(" "),n("li",[t._v("Example of using Pykka Actor library.")]),t._v(" "),n("li",[t._v("Unit-testing support")])])}],!1,null,null,null);a.options.__file="jsr223-jython.md";e.default=a.exports}}]);
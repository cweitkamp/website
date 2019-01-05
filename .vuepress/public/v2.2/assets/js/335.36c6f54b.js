(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{573:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("JsonDB provides a system database for storage of configuration data. All configuration data stored into the system through the REST interface that is used by the user interfaces will be stored into the JsonDB. JsonDB provides a high performance, human readable data store that is primarily meant for system use but can be edited manually, or stored in a version control system such as Git.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("To improve performance and reduce disk use all file writes are deferred for a few hundred milliseconds. This ensures that if there are multiple updates of the database in a short time, the system will only write these updates to the file system after the group of updates completes. If the system gets into a loop such that it is continually updating configuration information in the database, JsonDB will write a file every minute.  These timers can be configured by the user along with the number of backup files retained.")]),e._v(" "),a("p",[e._v("It is worth noting that data is only read from the file system when the table is first created - this is normally on system startup. After this the data is retained in memory and only written to file when there are changes.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v('Data is stored in a "pretty" format to make it more human readable, and is sorted so ordering is not random (important when a version control system is used). It is therefore editable by advanced users who might want to do a search and replace on item names etc.')]),e._v(" "),a("p",[e._v("If you manually edit the file you must take responsibility for ensuring it is correctly formatted. A Json format checker (such as "),a("a",{attrs:{href:"http://jsonlin.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("jsonlin.com"),a("OutboundLink")],1),e._v(") can be used to check the format and this should ensure that the file can be correctly read. It doesn't however ensure that the correct format is used - users wanting to edit a specific table are advised to first configure the system with the UI and then use the format generated by the UI as a template for subsequent additions and changes. Most data stored in the database is written in a way that should be understandable by someone with good knowledge of the system.")]),e._v(" "),a("p",[e._v("As stated above, the files are only read during system startup - therefore if you change a file you will need to stop openHAB, make your changes and restart the system for the changes to take effect.")]),e._v(" "),a("p",[e._v("Example file -:")]),e._v(" "),e._m(4),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"jsondb-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsondb-storage","aria-hidden":"true"}},[this._v("#")]),this._v(" JsonDB Storage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"technical-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#technical-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Technical Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The system stores different data into separate tables. JsonDB maps these tables into separate files - in this way each file contains a different type of data (eg. Things, Items, Links).  The system also keeps a number of backups in a "),t("code",[this._v("backup")]),this._v(" folder. Each time a file is updated, the current version will be moved to the "),t("code",[this._v("backup")]),this._v(" folder and timestamped so that the system can retain the most recent files. By default the last 5 copies of each file are retained. When the system loads data from the file system, should it find that a file is corrupted it will attempt to open the most recent backup - it will try each backup in turn until a file is correctly read, or the number of files is reached.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"manual-editing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-editing","aria-hidden":"true"}},[this._v("#")]),this._v(" Manual Editing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\n")])])])}],!1,null,null,null);i.options.__file="jsondb.md";t.default=i.exports}}]);
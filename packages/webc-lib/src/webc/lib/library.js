/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library webc.lib
 */
sap.ui.define([
		"sap/ui/webc/common/library",
		"./thirdparty/Assets",
		"./library.config"
	], // library dependency
	function(commonLibrary) {

		"use strict";

		/**
		 * SAPUI5 library with controls based on UI5 Web Components
		 *
		 * @namespace
		 * @alias webc.lib
		 * @author SAP SE
		 * @version ${version}
		 * @public
		 * @since 1.92.0
		 * @experimental Since 1.92.0 This API is experimental and might change significantly.
		 */
		var thisLib = sap.ui.getCore().initLibrary({
			name: "webc.lib",
			version: "${version}",
			dependencies: ["sap.ui.core", "sap.ui.webc.common"],
			noLibraryCSS: true,
			designtime: "webc/lib/designtime/library.designtime",
			interfaces: [

			],
			types: [

			],
			controls: [
				"webc.lib.ThingXxx"
			],
			elements: [],
			extensions: {}
		});
		return thisLib;

	});
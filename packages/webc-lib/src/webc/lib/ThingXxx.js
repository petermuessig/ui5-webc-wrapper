/*!
 * ${copyright}
 */

// Provides control webc.lib.ThingXxx.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/ThingXxx"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>ThingXxx</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>thing-xxx</code> component is a demo component that displays some text.
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias webc.lib.ThingXxx
	 */
	var ThingXxx = WebComponent.extend("webc.lib.ThingXxx", {
		metadata: {
			library: "webc.lib",
			tag: "thing-xxx-ui5"

		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return ThingXxx;
});
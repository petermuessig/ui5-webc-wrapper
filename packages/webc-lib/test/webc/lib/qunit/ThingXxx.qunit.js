/*global QUnit */
/*eslint no-undef:1, no-unused-vars:1, strict: 1 */
sap.ui.define([
	"sap/ui/qunit/utils/createAndAppendDiv",
	"sap/ui/core/Core",
	"webc/lib/ThingXxx"
], function(createAndAppendDiv, Core, ThingXxx) {
	"use strict";

	createAndAppendDiv("uiArea");

	QUnit.module("Rendering", {
		beforeEach: function() {
			this.oThingXxx = new ThingXxx({

			});
			this.oThingXxx.placeAt("uiArea");
			Core.applyChanges();
		},
		afterEach: function() {
			this.oThingXxx.destroy();
			this.oThingXxx = null;
		}
	});

	QUnit.test("Should render", function(assert) {
		assert.ok(this.oThingXxx.$(), "Rendered");
	});
});
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import ThingXxxTemplate from "./generated/templates/ThingXxxTemplate.lit.js";

// Styles
import ThingXxxCss from "./generated/themes/ThingXxx.css.js";

import { PLEASE_WAIT } from "./generated/i18n/i18n-defaults.js";

/**
 * @public
 */
const metadata = {
	tag: "thing-xxx",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>thing-xxx</code> component is a demo component that displays some text.
 *
 * @constructor
 * @alias demo.components.ThingXxx
 * @extends sap.ui.webc.base.UI5Element
 * @tagname thing-xxx
 * @public
 */
class ThingXxx extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return ThingXxxTemplate;
	}

	static get styles() {
		return ThingXxxCss;
	}

	static async onDefine() {
		ThingXxx.i18nBundle = await getI18nBundle("some");
	}

	get pleaseWaitText() {
		return ThingXxx.i18nBundle.getText(PLEASE_WAIT);
	}
}

ThingXxx.define();

export default ThingXxx;

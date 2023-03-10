import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import sap_belize from "../assets/themes/sap_belize/parameters-bundle.css.json";
import sap_belize_hcb from "../assets/themes/sap_belize_hcb/parameters-bundle.css.json";
import sap_belize_hcw from "../assets/themes/sap_belize_hcw/parameters-bundle.css.json";
import sap_fiori_3 from "../assets/themes/sap_fiori_3/parameters-bundle.css.json";
import sap_fiori_3_dark from "../assets/themes/sap_fiori_3_dark/parameters-bundle.css.json";
import sap_fiori_3_hcb from "../assets/themes/sap_fiori_3_hcb/parameters-bundle.css.json";
import sap_fiori_3_hcw from "../assets/themes/sap_fiori_3_hcw/parameters-bundle.css.json";

const themeUrlsByName = {
sap_belize,
sap_belize_hcb,
sap_belize_hcw,
sap_fiori_3,
sap_fiori_3_dark,
sap_fiori_3_hcb,
sap_fiori_3_hcw
};
const isInlined = obj => typeof (obj) === "object";

const loadThemeProperties = async (themeName) => {
	if (typeof themeUrlsByName[themeName] === "object") {
		// inlined from build
		throw new Error("[themes] Inlined JSON not supported with static imports of assets. Use dynamic imports of assets or configure JSON imports as URLs");
	}
	return (await fetch(themeUrlsByName[themeName])).json();
};

["sap_belize", "sap_belize_hcb", "sap_belize_hcw", "sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw"]
  .forEach(themeName => registerThemePropertiesLoader("webc", themeName, loadThemeProperties));

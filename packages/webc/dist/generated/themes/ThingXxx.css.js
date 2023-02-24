import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js";
import defaultTheme from "./sap_fiori_3/parameters-bundle.css.js";

registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("webc", "sap_fiori_3", () => defaultTheme);
export default {packageName:"webc",fileName:"themes/ThingXxx.css",content:":host{border:2px solid var(--my-component-border-color);background-color:var(--sapBackgroundColor);color:var(--sapTextColor);display:block;width:24rem;height:3rem;text-align:center;vertical-align:middle;line-height:3rem}"}
import { registerI18nLoader } from "@ui5/webcomponents-base/dist/asset-registries/i18n.js";

import _de from "../assets/i18n/messagebundle_de.json";
import _en from "../assets/i18n/messagebundle_en.json";
import _es from "../assets/i18n/messagebundle_es.json";
import _fr from "../assets/i18n/messagebundle_fr.json";

const bundleMap = {
	"de": _de,
	"en": _en,
	"es": _es,
	"fr": _fr,
};

const fetchMessageBundle = async (localeId) => {
	if (typeof bundleMap[localeId] === "object") {
		// inlined from build
		throw new Error("[i18n] Inlined JSON not supported with static imports of assets. Use dynamic imports of assets or configure JSON imports as URLs")
	}
	return (await fetch(bundleMap[localeId])).json()
}

const localeIds = ["de",
	"en",
	"es",
	"fr",];

localeIds.forEach(localeId => {
	registerI18nLoader("webc", localeId, fetchMessageBundle);
});

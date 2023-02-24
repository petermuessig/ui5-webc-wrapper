import { registerI18nLoader } from "@ui5/webcomponents-base/dist/asset-registries/i18n.js";

	const importMessageBundle = async (localeId) => {
		switch (localeId) {
			case "de": return (await import("../assets/i18n/messagebundle_de.json")).default;
		case "en": return (await import("../assets/i18n/messagebundle_en.json")).default;
		case "es": return (await import("../assets/i18n/messagebundle_es.json")).default;
		case "fr": return (await import("../assets/i18n/messagebundle_fr.json")).default;
			default: throw "unknown locale"
		}
	}

	const importAndCheck = async (localeId) => {
		const data = await importMessageBundle(localeId);
		if (typeof data === "string" && data.endsWith(".json")) {
			throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
		}
		return data;
	}

	const localeIds = ["de",
	"en",
	"es",
	"fr",];

	localeIds.forEach(localeId => {
		registerI18nLoader("webc", localeId, importAndCheck);
	});
	
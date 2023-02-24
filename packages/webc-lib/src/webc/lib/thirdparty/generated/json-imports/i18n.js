sap.ui.define(['require', "sap/ui/webc/common/thirdparty/base/asset-registries/i18n"], function (require, _i18n) {
  "use strict";

  const importMessageBundle = async localeId => {
    switch (localeId) {
      case "de":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/i18n/messagebundle_de.json"], resolve)))).default;
      case "en":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/i18n/messagebundle_en.json"], resolve)))).default;
      case "es":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/i18n/messagebundle_es.json"], resolve)))).default;
      case "fr":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/i18n/messagebundle_fr.json"], resolve)))).default;
      default:
        throw "unknown locale";
    }
  };
  const importAndCheck = async localeId => {
    const data = await importMessageBundle(localeId);
    if (typeof data === "string" && data.endsWith(".json")) {
      throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
    }
    return data;
  };
  const localeIds = ["de", "en", "es", "fr"];
  localeIds.forEach(localeId => {
    (0, _i18n.registerI18nLoader)("webc", localeId, importAndCheck);
  });
});
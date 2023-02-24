sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("webc", "sap_fiori_3", () => _parametersBundle2.default);
  var _default = {
    packageName: "webc",
    fileName: "themes/ThingXxx.css",
    content: ":host{border:2px solid var(--my-component-border-color);background-color:var(--sapBackgroundColor);color:var(--sapTextColor);display:block;width:24rem;height:3rem;text-align:center;vertical-align:middle;line-height:3rem}"
  };
  _exports.default = _default;
});
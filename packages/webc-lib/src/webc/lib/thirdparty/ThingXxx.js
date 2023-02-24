sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/UI5Element", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer", "sap/ui/webc/common/thirdparty/base/i18nBundle", "./generated/templates/ThingXxxTemplate.lit", "./generated/themes/ThingXxx.css", "./generated/i18n/i18n-defaults"], function (_exports, _UI5Element, _LitRenderer, _i18nBundle, _ThingXxxTemplate, _ThingXxx, _i18nDefaults) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _UI5Element = _interopRequireDefault(_UI5Element);
  _LitRenderer = _interopRequireDefault(_LitRenderer);
  _ThingXxxTemplate = _interopRequireDefault(_ThingXxxTemplate);
  _ThingXxx = _interopRequireDefault(_ThingXxx);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  // Template

  // Styles

  /**
   * @public
   */
  const metadata = {
    tag: "thing-xxx",
    properties: {},
    slots: {},
    events: {}
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
  class ThingXxx extends _UI5Element.default {
    static get metadata() {
      return metadata;
    }
    static get render() {
      return _LitRenderer.default;
    }
    static get template() {
      return _ThingXxxTemplate.default;
    }
    static get styles() {
      return _ThingXxx.default;
    }
    static async onDefine() {
      ThingXxx.i18nBundle = await (0, _i18nBundle.getI18nBundle)("some");
    }
    get pleaseWaitText() {
      return ThingXxx.i18nBundle.getText(_i18nDefaults.PLEASE_WAIT);
    }
  }
  ThingXxx.define();
  var _default = ThingXxx;
  _exports.default = _default;
});
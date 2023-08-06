(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["onboarding-integrations"],{

/***/ "./node_modules/@polymer/iron-icon/iron-icon.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-icon/iron-icon.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






/**

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "@polymer/iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "@polymer/iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,
  is: 'iron-icon',
  properties: {
    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {
      type: String
    },

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {
      type: String
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {
      type: String
    },

    /**
     * @type {!IronMeta}
     */
    _meta: {
      value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__["Base"].create('iron-meta', {
        type: 'iconset'
      })
    }
  },
  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],
  _DEFAULT_ICONSET: 'icons',
  _iconChanged: function (icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

    this._updateIcon();
  },
  _srcChanged: function (src) {
    this._updateIcon();
  },
  _usesIconset: function () {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function () {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).removeChild(this._img);
      }

      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset =
        /** @type {?Polymer.Iconset} */
        this._meta.byKey(this._iconsetName);

        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);

          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }

      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }

      this._img.src = this.src;
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).appendChild(this._img);
    }
  }
});

/***/ }),

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class HaIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("ha-icon", HaIcon);

/***/ }),

/***/ "./src/data/config_entries.ts":
/*!************************************!*\
  !*** ./src/data/config_entries.ts ***!
  \************************************/
/*! exports provided: getConfigEntries, updateConfigEntry, deleteConfigEntry, getConfigEntrySystemOptions, updateConfigEntrySystemOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntries", function() { return getConfigEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfigEntry", function() { return updateConfigEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigEntry", function() { return deleteConfigEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntrySystemOptions", function() { return getConfigEntrySystemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfigEntrySystemOptions", function() { return updateConfigEntrySystemOptions; });
const getConfigEntries = hass => hass.callApi("GET", "config/config_entries/entry");
const updateConfigEntry = (hass, configEntryId, updatedValues) => hass.callWS(Object.assign({
  type: "config_entries/update",
  entry_id: configEntryId
}, updatedValues));
const deleteConfigEntry = (hass, configEntryId) => hass.callApi("DELETE", `config/config_entries/entry/${configEntryId}`);
const getConfigEntrySystemOptions = (hass, configEntryId) => hass.callWS({
  type: "config_entries/system_options/list",
  entry_id: configEntryId
});
const updateConfigEntrySystemOptions = (hass, configEntryId, params) => hass.callWS(Object.assign({
  type: "config_entries/system_options/update",
  entry_id: configEntryId
}, params));

/***/ }),

/***/ "./src/data/config_flow.ts":
/*!*********************************!*\
  !*** ./src/data/config_flow.ts ***!
  \*********************************/
/*! exports provided: DISCOVERY_SOURCES, createConfigFlow, fetchConfigFlow, handleConfigFlowStep, ignoreConfigFlow, deleteConfigFlow, getConfigFlowHandlers, getConfigFlowInProgressCollection, subscribeConfigFlowInProgress, localizeConfigFlowTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOVERY_SOURCES", function() { return DISCOVERY_SOURCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConfigFlow", function() { return createConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfigFlow", function() { return fetchConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConfigFlowStep", function() { return handleConfigFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreConfigFlow", function() { return ignoreConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigFlow", function() { return deleteConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowHandlers", function() { return getConfigFlowHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowInProgressCollection", function() { return getConfigFlowInProgressCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfigFlowInProgress", function() { return subscribeConfigFlowInProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeConfigFlowTitle", function() { return localizeConfigFlowTitle; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integration */ "./src/data/integration.ts");



const DISCOVERY_SOURCES = ["unignore", "homekit", "ssdp", "zeroconf"];
const createConfigFlow = (hass, handler) => {
  var _hass$userData;

  return hass.callApi("POST", "config/config_entries/flow", {
    handler,
    show_advanced_options: Boolean((_hass$userData = hass.userData) === null || _hass$userData === void 0 ? void 0 : _hass$userData.showAdvanced)
  });
};
const fetchConfigFlow = (hass, flowId) => hass.callApi("GET", `config/config_entries/flow/${flowId}`);
const handleConfigFlowStep = (hass, flowId, data) => hass.callApi("POST", `config/config_entries/flow/${flowId}`, data);
const ignoreConfigFlow = (hass, flowId) => hass.callWS({
  type: "config_entries/ignore_flow",
  flow_id: flowId
});
const deleteConfigFlow = (hass, flowId) => hass.callApi("DELETE", `config/config_entries/flow/${flowId}`);
const getConfigFlowHandlers = hass => hass.callApi("GET", "config/config_entries/flow_handlers");

const fetchConfigFlowInProgress = conn => conn.sendMessagePromise({
  type: "config_entries/flow/progress"
});

const subscribeConfigFlowInProgressUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(() => fetchConfigFlowInProgress(conn).then(flows => store.setState(flows, true)), 500, true), "config_entry_discovered");

const getConfigFlowInProgressCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_configFlowProgress", fetchConfigFlowInProgress, subscribeConfigFlowInProgressUpdates);
const subscribeConfigFlowInProgress = (hass, onChange) => getConfigFlowInProgressCollection(hass.connection).subscribe(onChange);
const localizeConfigFlowTitle = (localize, flow) => {
  const placeholders = flow.context.title_placeholders || {};
  const placeholderKeys = Object.keys(placeholders);

  if (placeholderKeys.length === 0) {
    return Object(_integration__WEBPACK_IMPORTED_MODULE_2__["domainToName"])(localize, flow.handler);
  }

  const args = [];
  placeholderKeys.forEach(key => {
    args.push(key);
    args.push(placeholders[key]);
  });
  return localize(`component.${flow.handler}.config.flow_title`, ...args);
};

/***/ }),

/***/ "./src/data/integration.ts":
/*!*********************************!*\
  !*** ./src/data/integration.ts ***!
  \*********************************/
/*! exports provided: integrationIssuesUrl, domainToName, fetchIntegrationManifests, fetchIntegrationManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integrationIssuesUrl", function() { return integrationIssuesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainToName", function() { return domainToName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIntegrationManifests", function() { return fetchIntegrationManifests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIntegrationManifest", function() { return fetchIntegrationManifest; });
const integrationIssuesUrl = domain => `https://github.com/home-assistant/home-assistant/issues?q=is%3Aissue+is%3Aopen+label%3A%22integration%3A+${domain}%22`;
const domainToName = (localize, domain) => localize(`component.${domain}.title`) || domain;
const fetchIntegrationManifests = hass => hass.callWS({
  type: "manifest/list"
});
const fetchIntegrationManifest = (hass, integration) => hass.callWS({
  type: "manifest/get",
  integration
});

/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-config-flow.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-config-flow.ts ***!
  \************************************************************/
/*! exports provided: loadConfigFlowDialog, showConfigFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfigFlowDialog", function() { return loadConfigFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfigFlowDialog", function() { return showConfigFlowDialog; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/translations/localize */ "./src/common/translations/localize.ts");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/config_flow */ "./src/data/config_flow.ts");
/* harmony import */ var _data_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/integration */ "./src/data/integration.ts");
/* harmony import */ var _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-dialog-data-entry-flow */ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts");






const loadConfigFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_5__["loadDataEntryFlowDialog"];
const showConfigFlowDialog = (element, dialogParams) => Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_5__["showFlowDialog"])(element, dialogParams, {
  loadDevicesAndAreas: true,
  getFlowHandlers: async hass => {
    const [handlers] = await Promise.all([Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_3__["getConfigFlowHandlers"])(hass), hass.loadBackendTranslation("title", undefined, true)]);
    return handlers.sort((handlerA, handlerB) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["caseInsensitiveCompare"])(Object(_data_integration__WEBPACK_IMPORTED_MODULE_4__["domainToName"])(hass.localize, handlerA), Object(_data_integration__WEBPACK_IMPORTED_MODULE_4__["domainToName"])(hass.localize, handlerB)));
  },
  createFlow: async (hass, handler) => {
    const [step] = await Promise.all([Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_3__["createConfigFlow"])(hass, handler), hass.loadBackendTranslation("config", handler)]);
    return step;
  },
  fetchFlow: async (hass, flowId) => {
    const step = await Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_3__["fetchConfigFlow"])(hass, flowId);
    await hass.loadBackendTranslation("config", step.handler);
    return step;
  },
  handleFlowStep: _data_config_flow__WEBPACK_IMPORTED_MODULE_3__["handleConfigFlowStep"],
  deleteFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_3__["deleteConfigFlow"],

  renderAbortDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.abort.${step.reason}`, step.description_placeholders);
    return description ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <ha-markdown allowsvg breaks .content=${description}></ha-markdown>
          ` : "";
  },

  renderShowFormStepHeader(hass, step) {
    return hass.localize(`component.${step.handler}.config.step.${step.step_id}.title`) || hass.localize(`component.${step.handler}.title`);
  },

  renderShowFormStepDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.step.${step.step_id}.description`, step.description_placeholders);
    return description ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <ha-markdown allowsvg breaks .content=${description}></ha-markdown>
          ` : "";
  },

  renderShowFormStepFieldLabel(hass, step, field) {
    return hass.localize(`component.${step.handler}.config.step.${step.step_id}.data.${field.name}`);
  },

  renderShowFormStepFieldError(hass, step, error) {
    return hass.localize(`component.${step.handler}.config.error.${error}`);
  },

  renderExternalStepHeader(hass, step) {
    return hass.localize(`component.${step.handler}.config.step.${step.step_id}.title`);
  },

  renderExternalStepDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.${step.step_id}.description`, step.description_placeholders);
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <p>
          ${hass.localize("ui.panel.config.integrations.config_flow.external_step.description")}
        </p>
        ${description ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-markdown
                allowsvg
                breaks
                .content=${description}
              ></ha-markdown>
            ` : ""}
      `;
  },

  renderCreateEntryDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.create_entry.${step.description || "default"}`, step.description_placeholders);
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        ${description ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-markdown
                allowsvg
                breaks
                .content=${description}
              ></ha-markdown>
            ` : ""}
        <p>
          ${hass.localize("ui.panel.config.integrations.config_flow.created_config", "name", step.title)}
        </p>
      `;
  }

});

/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts":
/*!****************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-data-entry-flow.ts ***!
  \****************************************************************/
/*! exports provided: loadDataEntryFlowDialog, showFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataEntryFlowDialog", function() { return loadDataEntryFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFlowDialog", function() { return showFlowDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadDataEntryFlowDialog = () => Promise.all(/*! import() | dialog-config-flow */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(16), __webpack_require__.e(15), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~hui-dialog-suggest-card~more-info-dialog~panel-c~e54ccf84"), __webpack_require__.e("vendors~dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~pa~f9cbd3da"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~person-detail-dialog"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-zigbee-info~hui-dialog-suggest-card~more-info-dialog"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow"), __webpack_require__.e("vendors~dialog-config-flow"), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-editor-dialog~panel-config-automation~panel-~da811c14"), __webpack_require__.e(21), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-config-script"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow"), __webpack_require__.e("dialog-config-flow")]).then(__webpack_require__.bind(null, /*! ./dialog-data-entry-flow */ "./src/dialogs/config-flow/dialog-data-entry-flow.ts"));
const showFlowDialog = (element, dialogParams, flowConfig) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-data-entry-flow",
    dialogImport: loadDataEntryFlowDialog,
    dialogParams: Object.assign({}, dialogParams, {
      flowConfig
    })
  });
};

/***/ }),

/***/ "./src/onboarding/action-badge.ts":
/*!****************************************!*\
  !*** ./src/onboarding/action-badge.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let ActionBadge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("action-badge")], function (_initialize, _LitElement) {
  class ActionBadge extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ActionBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "title",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "badgeIcon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "clickable",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="icon">
        <iron-icon .icon=${this.icon}></iron-icon>
        ${this.badgeIcon ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <ha-icon class="badge" .icon=${this.badgeIcon}></ha-icon> ` : ""}
      </div>
      <div class="title">${this.title}</div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        color: var(--primary-text-color);
      }

      :host([clickable]) {
        color: var(--primary-text-color);
      }

      .icon {
        position: relative;
        box-sizing: border-box;
        margin: 0 auto 8px;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 1px solid var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host([clickable]) .icon {
        border-color: var(--primary-color);
        border-width: 2px;
      }

      .badge {
        position: absolute;
        color: var(--primary-color);
        bottom: -5px;
        right: -5px;
        background-color: white;
        border-radius: 50%;
        width: 18px;
        display: block;
        height: 18px;
      }

      .title {
        min-height: 2.3em;
        word-break: break-word;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/onboarding/integration-badge.ts":
/*!*********************************************!*\
  !*** ./src/onboarding/integration-badge.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let IntegrationBadge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("integration-badge")], function (_initialize, _LitElement) {
  class IntegrationBadge extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: IntegrationBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "domain",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "title",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "badgeIcon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "clickable",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="icon">
        <img
          src="https://brands.home-assistant.io/${this.domain}/icon.png"
          referrerpolicy="no-referrer"
        />
        ${this.badgeIcon ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <ha-icon class="badge" .icon=${this.badgeIcon}></ha-icon> ` : ""}
      </div>
      <div class="title">${this.title}</div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        color: var(--primary-text-color);
      }

      :host([clickable]) {
        color: var(--primary-text-color);
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }

      .icon {
        position: relative;
        margin: 0 auto 8px;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host([clickable]) .icon {
      }

      .badge {
        position: absolute;
        color: white;
        bottom: -7px;
        right: -10px;
        background-color: var(--label-badge-green);
        border-radius: 50%;
        width: 18px;
        display: block;
        height: 18px;
        border: 2px solid white;
      }

      .title {
        min-height: 2.3em;
        word-break: break-word;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/onboarding/onboarding-integrations.ts":
/*!***************************************************!*\
  !*** ./src/onboarding/onboarding-integrations.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/config_flow */ "./src/data/config_flow.ts");
/* harmony import */ var _data_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/integration */ "./src/data/integration.ts");
/* harmony import */ var _data_onboarding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/onboarding */ "./src/data/onboarding.ts");
/* harmony import */ var _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialogs/config-flow/show-dialog-config-flow */ "./src/dialogs/config-flow/show-dialog-config-flow.ts");
/* harmony import */ var _action_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./action-badge */ "./src/onboarding/action-badge.ts");
/* harmony import */ var _integration_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./integration-badge */ "./src/onboarding/integration-badge.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }














let OnboardingIntegrations = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("onboarding-integrations")], function (_initialize, _LitElement) {
  class OnboardingIntegrations extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OnboardingIntegrations,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "onboardingLocalize",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_entries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_discovered",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubEvents",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(OnboardingIntegrations.prototype), "connectedCallback", this).call(this);

        this.hass.loadBackendTranslation("title", undefined, true);
        this._unsubEvents = Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_6__["subscribeConfigFlowInProgress"])(this.hass, flows => {
          this._discovered = flows;

          for (const flow of flows) {
            // To render title placeholders
            if (flow.context.title_placeholders) {
              this.hass.loadBackendTranslation("config", flow.handler);
            }
          }
        });
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OnboardingIntegrations.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubEvents) {
          this._unsubEvents();

          this._unsubEvents = undefined;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._entries || !this._discovered) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``;
        } // Render discovered and existing entries together sorted by localized title.


        const entries = this._entries.map(entry => {
          const title = Object(_data_integration__WEBPACK_IMPORTED_MODULE_7__["domainToName"])(this.hass.localize, entry.domain);
          return [title, lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
            <integration-badge
              .domain=${entry.domain}
              .title=${title}
              badgeIcon="hass:check"
            ></integration-badge>
          `];
        });

        const discovered = this._discovered.map(flow => {
          const title = Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_6__["localizeConfigFlowTitle"])(this.hass.localize, flow);
          return [title, lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
            <button .flowId=${flow.flow_id} @click=${this._continueFlow}>
              <integration-badge
                clickable
                .domain=${flow.handler}
                .title=${title}
              ></integration-badge>
            </button>
          `];
        });

        const content = [...entries, ...discovered].sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["compare"])(a[0], b[0])).map(item => item[1]);
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <p>
        ${this.onboardingLocalize("ui.panel.page-onboarding.integration.intro")}
      </p>
      <div class="badges">
        ${content}
        <button @click=${this._createFlow}>
          <action-badge
            clickable
            title=${this.onboardingLocalize("ui.panel.page-onboarding.integration.more_integrations")}
            icon="hass:dots-horizontal"
          ></action-badge>
        </button>
      </div>
      <div class="footer">
        <mwc-button @click=${this._finish}>
          ${this.onboardingLocalize("ui.panel.page-onboarding.integration.finish")}
        </mwc-button>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OnboardingIntegrations.prototype), "firstUpdated", this).call(this, changedProps);

        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_9__["loadConfigFlowDialog"])();

        this._loadConfigEntries();
        /* polyfill for paper-dropdown */


        __webpack_require__.e(/*! import() | polyfill-web-animations-next */ "vendors~polyfill-web-animations-next").then(__webpack_require__.t.bind(null, /*! web-animations-js/web-animations-next-lite.min */ "./node_modules/web-animations-js/web-animations-next-lite.min.js", 7));
      }
    }, {
      kind: "method",
      key: "_createFlow",
      value: function _createFlow() {
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_9__["showConfigFlowDialog"])(this, {
          dialogClosedCallback: () => {
            this._loadConfigEntries();

            Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_6__["getConfigFlowInProgressCollection"])(this.hass.connection).refresh();
          }
        });
      }
    }, {
      kind: "method",
      key: "_continueFlow",
      value: function _continueFlow(ev) {
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_9__["showConfigFlowDialog"])(this, {
          continueFlowId: ev.currentTarget.flowId,
          dialogClosedCallback: () => {
            this._loadConfigEntries();

            Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_6__["getConfigFlowInProgressCollection"])(this.hass.connection).refresh();
          }
        });
      }
    }, {
      kind: "method",
      key: "_loadConfigEntries",
      value: async function _loadConfigEntries() {
        const entries = await Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_5__["getConfigEntries"])(this.hass); // We filter out the config entry for the local weather.
        // It is one that we create automatically and it will confuse the user
        // if it starts showing up during onboarding.

        this._entries = entries.filter(entry => entry.domain !== "met");
      }
    }, {
      kind: "method",
      key: "_finish",
      value: async function _finish() {
        const result = await Object(_data_onboarding__WEBPACK_IMPORTED_MODULE_8__["onboardIntegrationStep"])(this.hass, {
          client_id: Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["genClientId"])()
        });
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "onboarding-step", {
          type: "integration",
          result
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      .badges {
        margin-top: 24px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .badges > * {
        width: 96px;
        margin-bottom: 24px;
      }
      button {
        cursor: pointer;
        padding: 0;
        border: 0;
        background: 0;
        font: inherit;
      }
      .footer {
        text-align: right;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1pbnRlZ3JhdGlvbnMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvY29uZmlnX2VudHJpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvY29uZmlnX2Zsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctY29uZmlnLWZsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9vbmJvYXJkaW5nL2FjdGlvbi1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9pbnRlZ3JhdGlvbi1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWludGVncmF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtJcm9uTWV0YX0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZXRhL2lyb24tbWV0YS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge0Jhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcblxuVGhlIGBpcm9uLWljb25gIGVsZW1lbnQgZGlzcGxheXMgYW4gaWNvbi4gQnkgZGVmYXVsdCBhbiBpY29uIHJlbmRlcnMgYXMgYSAyNHB4XG5zcXVhcmUuXG5cbkV4YW1wbGUgdXNpbmcgc3JjOlxuXG4gICAgPGlyb24taWNvbiBzcmM9XCJzdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG5FeGFtcGxlIHNldHRpbmcgc2l6ZSB0byAzMnB4IHggMzJweDpcblxuICAgIDxpcm9uLWljb24gY2xhc3M9XCJiaWdcIiBzcmM9XCJiaWdfc3Rhci5wbmdcIj48L2lyb24taWNvbj5cblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgICAgLmJpZyB7XG4gICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogMzJweDtcbiAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDMycHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuVGhlIGlyb24gZWxlbWVudHMgaW5jbHVkZSBzZXZlcmFsIHNldHMgb2YgaWNvbnMuIFRvIHVzZSB0aGUgZGVmYXVsdCBzZXQgb2Zcbmljb25zLCBpbXBvcnQgYGlyb24taWNvbnMuanNgIGFuZCB1c2UgdGhlIGBpY29uYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBhbiBpY29uOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2lyb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cIm1lbnVcIj48L2lyb24taWNvbj5cblxuVG8gdXNlIGEgZGlmZmVyZW50IGJ1aWx0LWluIHNldCBvZiBpY29ucywgaW1wb3J0IHRoZSBzcGVjaWZpY1xuYGlyb24taWNvbnMvPGljb25zZXQ+LWljb25zLmpzYCwgYW5kIHNwZWNpZnkgdGhlIGljb24gYXMgYDxpY29uc2V0Pjo8aWNvbj5gLlxuRm9yIGV4YW1wbGUsIHRvIHVzZSBhIGNvbW11bmljYXRpb24gaWNvbiwgeW91IHdvdWxkIHVzZTpcblxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9jb21tdW5pY2F0aW9uLWljb25zLmpzXCI7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJjb21tdW5pY2F0aW9uOmVtYWlsXCI+PC9pcm9uLWljb24+XG5cbllvdSBjYW4gYWxzbyBjcmVhdGUgY3VzdG9tIGljb24gc2V0cyBvZiBiaXRtYXAgb3IgU1ZHIGljb25zLlxuXG5FeGFtcGxlIG9mIHVzaW5nIGFuIGljb24gbmFtZWQgYGNoZXJyeWAgZnJvbSBhIGN1c3RvbSBpY29uc2V0IHdpdGggdGhlIElEXG5gZnJ1aXRgOlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwiZnJ1aXQ6Y2hlcnJ5XCI+PC9pcm9uLWljb24+XG5cblNlZSBgPGlyb24taWNvbnNldD5gIGFuZCBgPGlyb24taWNvbnNldC1zdmc+YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG9cbmNyZWF0ZSBhIGN1c3RvbSBpY29uc2V0LlxuXG5TZWUgdGhlIGBpcm9uLWljb25zYCBkZW1vIHRvIHNlZSB0aGUgaWNvbnMgYXZhaWxhYmxlIGluIHRoZSB2YXJpb3VzIGljb25zZXRzLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIHwge31cbmAtLWlyb24taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWhlaWdodGAgfCBIZWlnaHQgb2YgdGhlIGljb24gfCBgMjRweGBcbmAtLWlyb24taWNvbi1maWxsLWNvbG9yYCB8IEZpbGwgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgYGN1cnJlbnRjb2xvcmBcbmAtLWlyb24taWNvbi1zdHJva2UtY29sb3JgIHwgU3Ryb2tlIGNvbG9yIG9mIHRoZSBzdmcgaWNvbiB8IG5vbmVcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24taWNvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuQGhvbWVwYWdlIHBvbHltZXIuZ2l0aHViLmlvXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICBmaWxsOiB2YXIoLS1pcm9uLWljb24tZmlsbC1jb2xvciwgY3VycmVudGNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yLCBub25lKTtcblxuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pY29uLXdpZHRoLCAyNHB4KTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWljb24taGVpZ2h0LCAyNHB4KTtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1pY29uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5gLFxuXG4gIGlzOiAnaXJvbi1pY29uJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaWNvbiB0byB1c2UuIFRoZSBuYW1lIHNob3VsZCBiZSBvZiB0aGUgZm9ybTpcbiAgICAgKiBgaWNvbnNldF9uYW1lOmljb25fbmFtZWAuXG4gICAgICovXG4gICAgaWNvbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGhlbWUgdG8gdXNlZCwgaWYgb25lIGlzIHNwZWNpZmllZCBieSB0aGVcbiAgICAgKiBpY29uc2V0LlxuICAgICAqL1xuICAgIHRoZW1lOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIGlyb24taWNvbiB3aXRob3V0IGFuIGljb25zZXQsIHlvdSBjYW4gc2V0IHRoZSBzcmMgdG8gYmVcbiAgICAgKiB0aGUgVVJMIG9mIGFuIGluZGl2aWR1YWwgaWNvbiBpbWFnZSBmaWxlLiBOb3RlIHRoYXQgdGhpcyB3aWxsIHRha2VcbiAgICAgKiBwcmVjZWRlbmNlIG92ZXIgYSBnaXZlbiBpY29uIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFJcm9uTWV0YX1cbiAgICAgKi9cbiAgICBfbWV0YToge3ZhbHVlOiBCYXNlLmNyZWF0ZSgnaXJvbi1tZXRhJywge3R5cGU6ICdpY29uc2V0J30pfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVJY29uKF9tZXRhLCBpc0F0dGFjaGVkKScsXG4gICAgJ191cGRhdGVJY29uKHRoZW1lLCBpc0F0dGFjaGVkKScsXG4gICAgJ19zcmNDaGFuZ2VkKHNyYywgaXNBdHRhY2hlZCknLFxuICAgICdfaWNvbkNoYW5nZWQoaWNvbiwgaXNBdHRhY2hlZCknXG4gIF0sXG5cbiAgX0RFRkFVTFRfSUNPTlNFVDogJ2ljb25zJyxcblxuICBfaWNvbkNoYW5nZWQ6IGZ1bmN0aW9uKGljb24pIHtcbiAgICB2YXIgcGFydHMgPSAoaWNvbiB8fCAnJykuc3BsaXQoJzonKTtcbiAgICB0aGlzLl9pY29uTmFtZSA9IHBhcnRzLnBvcCgpO1xuICAgIHRoaXMuX2ljb25zZXROYW1lID0gcGFydHMucG9wKCkgfHwgdGhpcy5fREVGQVVMVF9JQ09OU0VUO1xuICAgIHRoaXMuX3VwZGF0ZUljb24oKTtcbiAgfSxcblxuICBfc3JjQ2hhbmdlZDogZnVuY3Rpb24oc3JjKSB7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF91c2VzSWNvbnNldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbiB8fCAhdGhpcy5zcmM7XG4gIH0sXG5cbiAgLyoqIEBzdXBwcmVzcyB7dmlzaWJpbGl0eX0gKi9cbiAgX3VwZGF0ZUljb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl91c2VzSWNvbnNldCgpKSB7XG4gICAgICBpZiAodGhpcy5faW1nICYmIHRoaXMuX2ltZy5wYXJlbnROb2RlKSB7XG4gICAgICAgIGRvbSh0aGlzLnJvb3QpLnJlbW92ZUNoaWxkKHRoaXMuX2ltZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faWNvbk5hbWUgPT09ICcnKSB7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2ljb25zZXROYW1lICYmIHRoaXMuX21ldGEpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldCA9IC8qKiBAdHlwZSB7P1BvbHltZXIuSWNvbnNldH0gKi8gKFxuICAgICAgICAgICAgdGhpcy5fbWV0YS5ieUtleSh0aGlzLl9pY29uc2V0TmFtZSkpO1xuICAgICAgICBpZiAodGhpcy5faWNvbnNldCkge1xuICAgICAgICAgIHRoaXMuX2ljb25zZXQuYXBwbHlJY29uKHRoaXMsIHRoaXMuX2ljb25OYW1lLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgIHRoaXMuX2ljb25zZXQucmVtb3ZlSWNvbih0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faW1nKSB7XG4gICAgICAgIHRoaXMuX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0aGlzLl9pbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ltZy5zcmMgPSB0aGlzLnNyYztcbiAgICAgIGRvbSh0aGlzLnJvb3QpLmFwcGVuZENoaWxkKHRoaXMuX2ltZyk7XG4gICAgfVxuICB9XG59KTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IHR5cGUgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnkge1xuICBlbnRyeV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc291cmNlOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGNvbm5lY3Rpb25fY2xhc3M6IHN0cmluZztcbiAgc3VwcG9ydHNfb3B0aW9uczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdFbnRyeU11dGFibGVQYXJhbXMge1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucyB7XG4gIGRpc2FibGVfbmV3X2VudGl0aWVzOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRW50cmllcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8Q29uZmlnRW50cnlbXT4oXCJHRVRcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZW50cnlcIik7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb25maWdFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29uZmlnRW50cnlJZDogc3RyaW5nLFxuICB1cGRhdGVkVmFsdWVzOiBQYXJ0aWFsPENvbmZpZ0VudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8Q29uZmlnRW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL3VwZGF0ZVwiLFxuICAgIGVudHJ5X2lkOiBjb25maWdFbnRyeUlkLFxuICAgIC4uLnVwZGF0ZWRWYWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnRW50cnkgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgY29uZmlnRW50cnlJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGk8e1xuICAgIHJlcXVpcmVfcmVzdGFydDogYm9vbGVhbjtcbiAgfT4oXCJERUxFVEVcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9lbnRyeS8ke2NvbmZpZ0VudHJ5SWR9YCk7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZ1xuKSA9PlxuICBoYXNzLmNhbGxXUzxDb25maWdFbnRyeVN5c3RlbU9wdGlvbnM+KHtcbiAgICB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL3N5c3RlbV9vcHRpb25zL2xpc3RcIixcbiAgICBlbnRyeV9pZDogY29uZmlnRW50cnlJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJ0aWFsPENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucz5cbikgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnX2VudHJpZXMvc3lzdGVtX29wdGlvbnMvdXBkYXRlXCIsXG4gICAgZW50cnlfaWQ6IGNvbmZpZ0VudHJ5SWQsXG4gICAgLi4ucGFyYW1zLFxuICB9KTtcbiIsImltcG9ydCB7IENvbm5lY3Rpb24sIGdldENvbGxlY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dQcm9ncmVzcywgRGF0YUVudHJ5Rmxvd1N0ZXAgfSBmcm9tIFwiLi9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7IGRvbWFpblRvTmFtZSB9IGZyb20gXCIuL2ludGVncmF0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBESVNDT1ZFUllfU09VUkNFUyA9IFtcInVuaWdub3JlXCIsIFwiaG9tZWtpdFwiLCBcInNzZHBcIiwgXCJ6ZXJvY29uZlwiXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbmZpZ0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaGFuZGxlcjogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGk8RGF0YUVudHJ5Rmxvd1N0ZXA+KFwiUE9TVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9mbG93XCIsIHtcbiAgICBoYW5kbGVyLFxuICAgIHNob3dfYWR2YW5jZWRfb3B0aW9uczogQm9vbGVhbihoYXNzLnVzZXJEYXRhPy5zaG93QWR2YW5jZWQpLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIkdFVFwiLFxuICAgIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gXG4gICk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDb25maWdGbG93U3RlcCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZmxvd0lkOiBzdHJpbmcsXG4gIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH1cbikgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIlBPU1RcIixcbiAgICBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3cvJHtmbG93SWR9YCxcbiAgICBkYXRhXG4gICk7XG5cbmV4cG9ydCBjb25zdCBpZ25vcmVDb25maWdGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7IHR5cGU6IFwiY29uZmlnX2VudHJpZXMvaWdub3JlX2Zsb3dcIiwgZmxvd19pZDogZmxvd0lkIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dIYW5kbGVycyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8c3RyaW5nW10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3dfaGFuZGxlcnNcIik7XG5cbmNvbnN0IGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnX2VudHJpZXMvZmxvdy9wcm9ncmVzc1wiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MoY29ubikudGhlbigoZmxvd3MpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZmxvd3MsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImNvbmZpZ19lbnRyeV9kaXNjb3ZlcmVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dJblByb2dyZXNzQ29sbGVjdGlvbiA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uPERhdGFFbnRyeUZsb3dQcm9ncmVzc1tdPihcbiAgICBjb25uLFxuICAgIFwiX2NvbmZpZ0Zsb3dQcm9ncmVzc1wiLFxuICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MsXG4gICAgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgb25DaGFuZ2U6IChmbG93czogRGF0YUVudHJ5Rmxvd1Byb2dyZXNzW10pID0+IHZvaWRcbikgPT4gZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uKGhhc3MuY29ubmVjdGlvbikuc3Vic2NyaWJlKG9uQ2hhbmdlKTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplQ29uZmlnRmxvd1RpdGxlID0gKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBmbG93OiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NcbikgPT4ge1xuICBjb25zdCBwbGFjZWhvbGRlcnMgPSBmbG93LmNvbnRleHQudGl0bGVfcGxhY2Vob2xkZXJzIHx8IHt9O1xuICBjb25zdCBwbGFjZWhvbGRlcktleXMgPSBPYmplY3Qua2V5cyhwbGFjZWhvbGRlcnMpO1xuICBpZiAocGxhY2Vob2xkZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBkb21haW5Ub05hbWUobG9jYWxpemUsIGZsb3cuaGFuZGxlcik7XG4gIH1cbiAgY29uc3QgYXJnczogc3RyaW5nW10gPSBbXTtcbiAgcGxhY2Vob2xkZXJLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGFyZ3MucHVzaChrZXkpO1xuICAgIGFyZ3MucHVzaChwbGFjZWhvbGRlcnNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gbG9jYWxpemUoYGNvbXBvbmVudC4ke2Zsb3cuaGFuZGxlcn0uY29uZmlnLmZsb3dfdGl0bGVgLCAuLi5hcmdzKTtcbn07XG4iLCJpbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVncmF0aW9uTWFuaWZlc3Qge1xuICBpc19idWlsdF9pbjogYm9vbGVhbjtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgY29uZmlnX2Zsb3c6IGJvb2xlYW47XG4gIGRvY3VtZW50YXRpb246IHN0cmluZztcbiAgZGVwZW5kZW5jaWVzPzogc3RyaW5nW107XG4gIGFmdGVyX2RlcGVuZGVuY2llcz86IHN0cmluZ1tdO1xuICBjb2Rlb3duZXJzPzogc3RyaW5nW107XG4gIHJlcXVpcmVtZW50cz86IHN0cmluZ1tdO1xuICBzc2RwPzogQXJyYXk8eyBtYW51ZmFjdHVyZXI/OiBzdHJpbmc7IG1vZGVsTmFtZT86IHN0cmluZzsgc3Q/OiBzdHJpbmcgfT47XG4gIHplcm9jb25mPzogc3RyaW5nW107XG4gIGhvbWVraXQ/OiB7IG1vZGVsczogc3RyaW5nW10gfTtcbiAgcXVhbGl0eV9zY2FsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGludGVncmF0aW9uSXNzdWVzVXJsID0gKGRvbWFpbjogc3RyaW5nKSA9PlxuICBgaHR0cHM6Ly9naXRodWIuY29tL2hvbWUtYXNzaXN0YW50L2hvbWUtYXNzaXN0YW50L2lzc3Vlcz9xPWlzJTNBaXNzdWUraXMlM0FvcGVuK2xhYmVsJTNBJTIyaW50ZWdyYXRpb24lM0ErJHtkb21haW59JTIyYDtcblxuZXhwb3J0IGNvbnN0IGRvbWFpblRvTmFtZSA9IChsb2NhbGl6ZTogTG9jYWxpemVGdW5jLCBkb21haW46IHN0cmluZykgPT5cbiAgbG9jYWxpemUoYGNvbXBvbmVudC4ke2RvbWFpbn0udGl0bGVgKSB8fCBkb21haW47XG5cbmV4cG9ydCBjb25zdCBmZXRjaEludGVncmF0aW9uTWFuaWZlc3RzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPEludGVncmF0aW9uTWFuaWZlc3RbXT4oeyB0eXBlOiBcIm1hbmlmZXN0L2xpc3RcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoSW50ZWdyYXRpb25NYW5pZmVzdCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaW50ZWdyYXRpb246IHN0cmluZ1xuKSA9PiBoYXNzLmNhbGxXUzxJbnRlZ3JhdGlvbk1hbmlmZXN0Pih7IHR5cGU6IFwibWFuaWZlc3QvZ2V0XCIsIGludGVncmF0aW9uIH0pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGxvY2FsaXplS2V5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUNvbmZpZ0Zsb3csXG4gIGRlbGV0ZUNvbmZpZ0Zsb3csXG4gIGZldGNoQ29uZmlnRmxvdyxcbiAgZ2V0Q29uZmlnRmxvd0hhbmRsZXJzLFxuICBoYW5kbGVDb25maWdGbG93U3RlcCxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvY29uZmlnX2Zsb3dcIjtcbmltcG9ydCB7IGRvbWFpblRvTmFtZSB9IGZyb20gXCIuLi8uLi9kYXRhL2ludGVncmF0aW9uXCI7XG5pbXBvcnQge1xuICBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zLFxuICBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyxcbiAgc2hvd0Zsb3dEaWFsb2csXG59IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZ0Zsb3dEaWFsb2cgPSBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZztcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maWdGbG93RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBPbWl0PERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMsIFwiZmxvd0NvbmZpZ1wiPlxuKTogdm9pZCA9PlxuICBzaG93Rmxvd0RpYWxvZyhlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHtcbiAgICBsb2FkRGV2aWNlc0FuZEFyZWFzOiB0cnVlLFxuICAgIGdldEZsb3dIYW5kbGVyczogYXN5bmMgKGhhc3MpID0+IHtcbiAgICAgIGNvbnN0IFtoYW5kbGVyc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldENvbmZpZ0Zsb3dIYW5kbGVycyhoYXNzKSxcbiAgICAgICAgaGFzcy5sb2FkQmFja2VuZFRyYW5zbGF0aW9uKFwidGl0bGVcIiwgdW5kZWZpbmVkLCB0cnVlKSxcbiAgICAgIF0pO1xuXG4gICAgICByZXR1cm4gaGFuZGxlcnMuc29ydCgoaGFuZGxlckEsIGhhbmRsZXJCKSA9PlxuICAgICAgICBjYXNlSW5zZW5zaXRpdmVDb21wYXJlKFxuICAgICAgICAgIGRvbWFpblRvTmFtZShoYXNzLmxvY2FsaXplLCBoYW5kbGVyQSksXG4gICAgICAgICAgZG9tYWluVG9OYW1lKGhhc3MubG9jYWxpemUsIGhhbmRsZXJCKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0sXG4gICAgY3JlYXRlRmxvdzogYXN5bmMgKGhhc3MsIGhhbmRsZXIpID0+IHtcbiAgICAgIGNvbnN0IFtzdGVwXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgY3JlYXRlQ29uZmlnRmxvdyhoYXNzLCBoYW5kbGVyKSxcbiAgICAgICAgaGFzcy5sb2FkQmFja2VuZFRyYW5zbGF0aW9uKFwiY29uZmlnXCIsIGhhbmRsZXIpLFxuICAgICAgXSk7XG4gICAgICByZXR1cm4gc3RlcDtcbiAgICB9LFxuICAgIGZldGNoRmxvdzogYXN5bmMgKGhhc3MsIGZsb3dJZCkgPT4ge1xuICAgICAgY29uc3Qgc3RlcCA9IGF3YWl0IGZldGNoQ29uZmlnRmxvdyhoYXNzLCBmbG93SWQpO1xuICAgICAgYXdhaXQgaGFzcy5sb2FkQmFja2VuZFRyYW5zbGF0aW9uKFwiY29uZmlnXCIsIHN0ZXAuaGFuZGxlcik7XG4gICAgICByZXR1cm4gc3RlcDtcbiAgICB9LFxuICAgIGhhbmRsZUZsb3dTdGVwOiBoYW5kbGVDb25maWdGbG93U3RlcCxcbiAgICBkZWxldGVGbG93OiBkZWxldGVDb25maWdGbG93LFxuXG4gICAgcmVuZGVyQWJvcnREZXNjcmlwdGlvbihoYXNzLCBzdGVwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgICBoYXNzLmxvY2FsaXplLFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuYWJvcnQuJHtzdGVwLnJlYXNvbn1gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxoYS1tYXJrZG93biBhbGxvd3N2ZyBicmVha3MgLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIjtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwSGVhZGVyKGhhc3MsIHN0ZXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGhhc3MubG9jYWxpemUoXG4gICAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgICApIHx8IGhhc3MubG9jYWxpemUoYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0udGl0bGVgKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwRGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRlc2NyaXB0aW9uYCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIGJyZWFrcyAuY29udGVudD0ke2Rlc2NyaXB0aW9ufT48L2hhLW1hcmtkb3duPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwiO1xuICAgIH0sXG5cbiAgICByZW5kZXJTaG93Rm9ybVN0ZXBGaWVsZExhYmVsKGhhc3MsIHN0ZXAsIGZpZWxkKSB7XG4gICAgICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRhdGEuJHtmaWVsZC5uYW1lfWBcbiAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IoaGFzcywgc3RlcCwgZXJyb3IpIHtcbiAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5lcnJvci4ke2Vycm9yfWApO1xuICAgIH0sXG5cbiAgICByZW5kZXJFeHRlcm5hbFN0ZXBIZWFkZXIoaGFzcywgc3RlcCkge1xuICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5zdGVwLiR7c3RlcC5zdGVwX2lkfS50aXRsZWBcbiAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlckV4dGVybmFsU3RlcERlc2NyaXB0aW9uKGhhc3MsIHN0ZXApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgIGhhc3MubG9jYWxpemUsXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy4ke3N0ZXAuc3RlcF9pZH0uZGVzY3JpcHRpb25gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwPlxuICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5leHRlcm5hbF9zdGVwLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICAgICR7ZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1tYXJrZG93blxuICAgICAgICAgICAgICAgIGFsbG93c3ZnXG4gICAgICAgICAgICAgICAgYnJlYWtzXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgYDtcbiAgICB9LFxuXG4gICAgcmVuZGVyQ3JlYXRlRW50cnlEZXNjcmlwdGlvbihoYXNzLCBzdGVwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgICBoYXNzLmxvY2FsaXplLFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuY3JlYXRlX2VudHJ5LiR7XG4gICAgICAgICAgc3RlcC5kZXNjcmlwdGlvbiB8fCBcImRlZmF1bHRcIlxuICAgICAgICB9YCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAke2Rlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd25cbiAgICAgICAgICAgICAgICBhbGxvd3N2Z1xuICAgICAgICAgICAgICAgIGJyZWFrc1xuICAgICAgICAgICAgICAgIC5jb250ZW50PSR7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgID48L2hhLW1hcmtkb3duPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPHA+XG4gICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19mbG93LmNyZWF0ZWRfY29uZmlnXCIsXG4gICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgIHN0ZXAudGl0bGVcbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICBgO1xuICAgIH0sXG4gIH0pO1xuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tIFwibGl0LWh0bWxcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEhhRm9ybVNjaGVtYSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hhLWZvcm0vaGEtZm9ybVwiO1xuaW1wb3J0IHtcbiAgRGF0YUVudHJ5Rmxvd1N0ZXAsXG4gIERhdGFFbnRyeUZsb3dTdGVwQWJvcnQsXG4gIERhdGFFbnRyeUZsb3dTdGVwQ3JlYXRlRW50cnksXG4gIERhdGFFbnRyeUZsb3dTdGVwRXh0ZXJuYWwsXG4gIERhdGFFbnRyeUZsb3dTdGVwRm9ybSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxvd0NvbmZpZyB7XG4gIGxvYWREZXZpY2VzQW5kQXJlYXM6IGJvb2xlYW47XG5cbiAgZ2V0Rmxvd0hhbmRsZXJzPzogKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+IFByb21pc2U8c3RyaW5nW10+O1xuXG4gIGNyZWF0ZUZsb3coaGFzczogSG9tZUFzc2lzdGFudCwgaGFuZGxlcjogc3RyaW5nKTogUHJvbWlzZTxEYXRhRW50cnlGbG93U3RlcD47XG5cbiAgZmV0Y2hGbG93KGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRhRW50cnlGbG93U3RlcD47XG5cbiAgaGFuZGxlRmxvd1N0ZXAoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBmbG93SWQ6IHN0cmluZyxcbiAgICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gICk6IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+O1xuXG4gIGRlbGV0ZUZsb3coaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+O1xuXG4gIHJlbmRlckFib3J0RGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEFib3J0XG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBIZWFkZXIoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEZvcm1cbiAgKTogc3RyaW5nO1xuXG4gIHJlbmRlclNob3dGb3JtU3RlcERlc2NyaXB0aW9uKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtXG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBGaWVsZExhYmVsKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtLFxuICAgIGZpZWxkOiBIYUZvcm1TY2hlbWFcbiAgKTogc3RyaW5nO1xuXG4gIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEZvcm0sXG4gICAgZXJyb3I6IHN0cmluZ1xuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyRXh0ZXJuYWxTdGVwSGVhZGVyKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbFxuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyRXh0ZXJuYWxTdGVwRGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsXG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJDcmVhdGVFbnRyeURlc2NyaXB0aW9uKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBDcmVhdGVFbnRyeVxuICApOiBUZW1wbGF0ZVJlc3VsdCB8IFwiXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcyB7XG4gIHN0YXJ0Rmxvd0hhbmRsZXI/OiBzdHJpbmc7XG4gIGNvbnRpbnVlRmxvd0lkPzogc3RyaW5nO1xuICBkaWFsb2dDbG9zZWRDYWxsYmFjaz86IChwYXJhbXM6IHsgZmxvd0ZpbmlzaGVkOiBib29sZWFuIH0pID0+IHZvaWQ7XG4gIGZsb3dDb25maWc6IEZsb3dDb25maWc7XG4gIHNob3dBZHZhbmNlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1jb25maWctZmxvd1wiICovIFwiLi9kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNob3dGbG93RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBPbWl0PERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMsIFwiZmxvd0NvbmZpZ1wiPixcbiAgZmxvd0NvbmZpZzogRmxvd0NvbmZpZ1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZERhdGFFbnRyeUZsb3dEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiB7XG4gICAgICAuLi5kaWFsb2dQYXJhbXMsXG4gICAgICBmbG93Q29uZmlnLFxuICAgIH0sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiYWN0aW9uLWJhZGdlXCIpXG5jbGFzcyBBY3Rpb25CYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaWNvbiE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgdGl0bGUhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGJhZGdlSWNvbj86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHB1YmxpYyBjbGlja2FibGUgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgIDxpcm9uLWljb24gLmljb249JHt0aGlzLmljb259PjwvaXJvbi1pY29uPlxuICAgICAgICAke3RoaXMuYmFkZ2VJY29uXG4gICAgICAgICAgPyBodG1sYCA8aGEtaWNvbiBjbGFzcz1cImJhZGdlXCIgLmljb249JHt0aGlzLmJhZGdlSWNvbn0+PC9oYS1pY29uPiBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtjbGlja2FibGVdKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gOHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtjbGlja2FibGVdKSAuaWNvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgfVxuXG4gICAgICAuYmFkZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIuM2VtO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImFjdGlvbi1iYWRnZVwiOiBBY3Rpb25CYWRnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWljb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJpbnRlZ3JhdGlvbi1iYWRnZVwiKVxuY2xhc3MgSW50ZWdyYXRpb25CYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZG9tYWluITogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB0aXRsZSE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgYmFkZ2VJY29uPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcHVibGljIGNsaWNrYWJsZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vYnJhbmRzLmhvbWUtYXNzaXN0YW50LmlvLyR7dGhpcy5kb21haW59L2ljb24ucG5nXCJcbiAgICAgICAgICByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgJHt0aGlzLmJhZGdlSWNvblxuICAgICAgICAgID8gaHRtbGAgPGhhLWljb24gY2xhc3M9XCJiYWRnZVwiIC5pY29uPSR7dGhpcy5iYWRnZUljb259PjwvaGEtaWNvbj4gYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0aGlzLnRpdGxlfTwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbY2xpY2thYmxlXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gOHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2NsaWNrYWJsZV0pIC5pY29uIHtcbiAgICAgIH1cblxuICAgICAgLmJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvdHRvbTogLTdweDtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1ncmVlbik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBtaW4taGVpZ2h0OiAyLjNlbTtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJpbnRlZ3JhdGlvbi1iYWRnZVwiOiBJbnRlZ3JhdGlvbkJhZGdlO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvbi9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBnZW5DbGllbnRJZCB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgQ29uZmlnRW50cnksIGdldENvbmZpZ0VudHJpZXMgfSBmcm9tIFwiLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHtcbiAgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uLFxuICBsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSxcbiAgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3MsXG59IGZyb20gXCIuLi9kYXRhL2NvbmZpZ19mbG93XCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93UHJvZ3Jlc3MgfSBmcm9tIFwiLi4vZGF0YS9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7IGRvbWFpblRvTmFtZSB9IGZyb20gXCIuLi9kYXRhL2ludGVncmF0aW9uXCI7XG5pbXBvcnQgeyBvbmJvYXJkSW50ZWdyYXRpb25TdGVwIH0gZnJvbSBcIi4uL2RhdGEvb25ib2FyZGluZ1wiO1xuaW1wb3J0IHtcbiAgbG9hZENvbmZpZ0Zsb3dEaWFsb2csXG4gIHNob3dDb25maWdGbG93RGlhbG9nLFxufSBmcm9tIFwiLi4vZGlhbG9ncy9jb25maWctZmxvdy9zaG93LWRpYWxvZy1jb25maWctZmxvd1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9hY3Rpb24tYmFkZ2VcIjtcbmltcG9ydCBcIi4vaW50ZWdyYXRpb24tYmFkZ2VcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvbmJvYXJkaW5nLWludGVncmF0aW9uc1wiKVxuY2xhc3MgT25ib2FyZGluZ0ludGVncmF0aW9ucyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG9uYm9hcmRpbmdMb2NhbGl6ZSE6IExvY2FsaXplRnVuYztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRyaWVzPzogQ29uZmlnRW50cnlbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kaXNjb3ZlcmVkPzogRGF0YUVudHJ5Rmxvd1Byb2dyZXNzW107XG5cbiAgcHJpdmF0ZSBfdW5zdWJFdmVudHM/OiAoKSA9PiB2b2lkO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuaGFzcy5sb2FkQmFja2VuZFRyYW5zbGF0aW9uKFwidGl0bGVcIiwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICB0aGlzLl91bnN1YkV2ZW50cyA9IHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzKHRoaXMuaGFzcywgKGZsb3dzKSA9PiB7XG4gICAgICB0aGlzLl9kaXNjb3ZlcmVkID0gZmxvd3M7XG4gICAgICBmb3IgKGNvbnN0IGZsb3cgb2YgZmxvd3MpIHtcbiAgICAgICAgLy8gVG8gcmVuZGVyIHRpdGxlIHBsYWNlaG9sZGVyc1xuICAgICAgICBpZiAoZmxvdy5jb250ZXh0LnRpdGxlX3BsYWNlaG9sZGVycykge1xuICAgICAgICAgIHRoaXMuaGFzcy5sb2FkQmFja2VuZFRyYW5zbGF0aW9uKFwiY29uZmlnXCIsIGZsb3cuaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YkV2ZW50cykge1xuICAgICAgdGhpcy5fdW5zdWJFdmVudHMoKTtcbiAgICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fZW50cmllcyB8fCAhdGhpcy5fZGlzY292ZXJlZCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgLy8gUmVuZGVyIGRpc2NvdmVyZWQgYW5kIGV4aXN0aW5nIGVudHJpZXMgdG9nZXRoZXIgc29ydGVkIGJ5IGxvY2FsaXplZCB0aXRsZS5cbiAgICBjb25zdCBlbnRyaWVzOiBBcnJheTxbc3RyaW5nLCBUZW1wbGF0ZVJlc3VsdF0+ID0gdGhpcy5fZW50cmllcy5tYXAoXG4gICAgICAoZW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb21haW5Ub05hbWUodGhpcy5oYXNzLmxvY2FsaXplLCBlbnRyeS5kb21haW4pO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICA8aW50ZWdyYXRpb24tYmFkZ2VcbiAgICAgICAgICAgICAgLmRvbWFpbj0ke2VudHJ5LmRvbWFpbn1cbiAgICAgICAgICAgICAgLnRpdGxlPSR7dGl0bGV9XG4gICAgICAgICAgICAgIGJhZGdlSWNvbj1cImhhc3M6Y2hlY2tcIlxuICAgICAgICAgICAgPjwvaW50ZWdyYXRpb24tYmFkZ2U+XG4gICAgICAgICAgYCxcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGRpc2NvdmVyZWQ6IEFycmF5PFtzdHJpbmcsIFRlbXBsYXRlUmVzdWx0XT4gPSB0aGlzLl9kaXNjb3ZlcmVkLm1hcChcbiAgICAgIChmbG93KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbG9jYWxpemVDb25maWdGbG93VGl0bGUodGhpcy5oYXNzLmxvY2FsaXplLCBmbG93KTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgPGJ1dHRvbiAuZmxvd0lkPSR7Zmxvdy5mbG93X2lkfSBAY2xpY2s9JHt0aGlzLl9jb250aW51ZUZsb3d9PlxuICAgICAgICAgICAgICA8aW50ZWdyYXRpb24tYmFkZ2VcbiAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAuZG9tYWluPSR7Zmxvdy5oYW5kbGVyfVxuICAgICAgICAgICAgICAgIC50aXRsZT0ke3RpdGxlfVxuICAgICAgICAgICAgICA+PC9pbnRlZ3JhdGlvbi1iYWRnZT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIGAsXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBjb250ZW50ID0gWy4uLmVudHJpZXMsIC4uLmRpc2NvdmVyZWRdXG4gICAgICAuc29ydCgoYSwgYikgPT4gY29tcGFyZShhWzBdLCBiWzBdKSlcbiAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW1bMV0pO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cD5cbiAgICAgICAgJHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5pbnRlZ3JhdGlvbi5pbnRyb1wiKX1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZXNcIj5cbiAgICAgICAgJHtjb250ZW50fVxuICAgICAgICA8YnV0dG9uIEBjbGljaz0ke3RoaXMuX2NyZWF0ZUZsb3d9PlxuICAgICAgICAgIDxhY3Rpb24tYmFkZ2VcbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgdGl0bGU9JHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuaW50ZWdyYXRpb24ubW9yZV9pbnRlZ3JhdGlvbnNcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtaG9yaXpvbnRhbFwiXG4gICAgICAgICAgPjwvYWN0aW9uLWJhZGdlPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9maW5pc2h9PlxuICAgICAgICAgICR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5pbnRlZ3JhdGlvbi5maW5pc2hcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBsb2FkQ29uZmlnRmxvd0RpYWxvZygpO1xuICAgIHRoaXMuX2xvYWRDb25maWdFbnRyaWVzKCk7XG4gICAgLyogcG9seWZpbGwgZm9yIHBhcGVyLWRyb3Bkb3duICovXG4gICAgaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwb2x5ZmlsbC13ZWItYW5pbWF0aW9ucy1uZXh0XCIgKi8gXCJ3ZWItYW5pbWF0aW9ucy1qcy93ZWItYW5pbWF0aW9ucy1uZXh0LWxpdGUubWluXCJcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRmxvdygpIHtcbiAgICBzaG93Q29uZmlnRmxvd0RpYWxvZyh0aGlzLCB7XG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkQ29uZmlnRW50cmllcygpO1xuICAgICAgICBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24odGhpcy5oYXNzIS5jb25uZWN0aW9uKS5yZWZyZXNoKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29udGludWVGbG93KGV2KSB7XG4gICAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2codGhpcywge1xuICAgICAgY29udGludWVGbG93SWQ6IGV2LmN1cnJlbnRUYXJnZXQuZmxvd0lkLFxuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZENvbmZpZ0VudHJpZXMoKTtcbiAgICAgICAgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uKHRoaXMuaGFzcyEuY29ubmVjdGlvbikucmVmcmVzaCgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWRDb25maWdFbnRyaWVzKCkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBnZXRDb25maWdFbnRyaWVzKHRoaXMuaGFzcyEpO1xuICAgIC8vIFdlIGZpbHRlciBvdXQgdGhlIGNvbmZpZyBlbnRyeSBmb3IgdGhlIGxvY2FsIHdlYXRoZXIuXG4gICAgLy8gSXQgaXMgb25lIHRoYXQgd2UgY3JlYXRlIGF1dG9tYXRpY2FsbHkgYW5kIGl0IHdpbGwgY29uZnVzZSB0aGUgdXNlclxuICAgIC8vIGlmIGl0IHN0YXJ0cyBzaG93aW5nIHVwIGR1cmluZyBvbmJvYXJkaW5nLlxuICAgIHRoaXMuX2VudHJpZXMgPSBlbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmRvbWFpbiAhPT0gXCJtZXRcIik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maW5pc2goKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb25ib2FyZEludGVncmF0aW9uU3RlcCh0aGlzLmhhc3MsIHtcbiAgICAgIGNsaWVudF9pZDogZ2VuQ2xpZW50SWQoKSxcbiAgICB9KTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJvbmJvYXJkaW5nLXN0ZXBcIiwge1xuICAgICAgdHlwZTogXCJpbnRlZ3JhdGlvblwiLFxuICAgICAgcmVzdWx0LFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmJhZGdlcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIH1cbiAgICAgIC5iYWRnZXMgPiAqIHtcbiAgICAgICAgd2lkdGg6IDk2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYmFja2dyb3VuZDogMDtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvbmJvYXJkaW5nLWludGVncmF0aW9uc1wiOiBPbmJvYXJkaW5nSW50ZWdyYXRpb25zO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBd0JBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUE0QkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQS9HQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUlBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFLQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBTUE7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBO0FBUUE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBTUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUE7O0FBSUE7Ozs7QUFLQTs7QUFMQTtBQU5BO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTs7OztBQUtBOztBQUxBOztBQVVBOztBQVhBO0FBa0JBO0FBQ0E7QUF0SUE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBK0VBLDJrRUFFQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSEE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFTQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJQTtBQVBBO0FBU0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0NBOzs7QUFyRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFTQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTs7QUFJQTtBQVZBO0FBWUE7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdEQTs7O0FBekVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTs7QUFJQTtBQUNBOzs7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTs7O0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7Ozs7OztBQVFBO0FBQ0E7OztBQWxCQTtBQXdCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBLHdSQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBTUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFPQTs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3QkE7OztBQTVLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
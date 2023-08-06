(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[39],{

/***/ "./src/components/ha-combo-box.js":
/*!****************************************!*\
  !*** ./src/components/ha-combo-box.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_combo_box_theme_material_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");




/* eslint-plugin-disable lit */





class HaComboBox extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        paper-input > paper-icon-button {
          width: 24px;
          height: 24px;
          padding: 2px;
          color: var(--secondary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <vaadin-combo-box-light
        items="[[_items]]"
        item-value-path="[[itemValuePath]]"
        item-label-path="[[itemLabelPath]]"
        value="{{value}}"
        opened="{{opened}}"
        allow-custom-value="[[allowCustomValue]]"
        on-change="_fireChanged"
      >
        <paper-input
          autofocus="[[autofocus]]"
          label="[[label]]"
          class="input"
          value="[[value]]"
        >
          <paper-icon-button
            slot="suffix"
            class="clear-button"
            icon="hass:close"
            hidden$="[[!value]]"
            >Clear</paper-icon-button
          >
          <paper-icon-button
            slot="suffix"
            class="toggle-button"
            icon="[[_computeToggleIcon(opened)]]"
            hidden$="[[!items.length]]"
            >Toggle</paper-icon-button
          >
        </paper-input>
        <template>
          <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
          </style>
          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
        </template>
      </vaadin-combo-box-light>
    `;
  }

  static get properties() {
    return {
      allowCustomValue: Boolean,
      items: {
        type: Object,
        observer: "_itemsChanged"
      },
      _items: Object,
      itemLabelPath: String,
      itemValuePath: String,
      autofocus: Boolean,
      label: String,
      opened: {
        type: Boolean,
        value: false,
        observer: "_openedChanged"
      },
      value: {
        type: String,
        notify: true
      }
    };
  }

  _openedChanged(newVal) {
    if (!newVal) {
      this._items = this.items;
    }
  }

  _itemsChanged(newVal) {
    if (!this.opened) {
      this._items = newVal;
    }
  }

  _computeToggleIcon(opened) {
    return opened ? "hass:menu-up" : "hass:menu-down";
  }

  _computeItemLabel(item, itemLabelPath) {
    return itemLabelPath ? item[itemLabelPath] : item;
  }

  _fireChanged(ev) {
    ev.stopPropagation();
    this.fire("change");
  }

}

customElements.define("ha-combo-box", HaComboBox);

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

/***/ "./src/components/ha-service-picker.js":
/*!*********************************************!*\
  !*** ./src/components/ha-service-picker.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_combo_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-combo-box */ "./src/components/ha-combo-box.js");

/* eslint-plugin-disable lit */




/*
 * @appliesMixin LocalizeMixin
 */

class HaServicePicker extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-combo-box
        label="[[localize('ui.components.service-picker.service')]]"
        items="[[_services]]"
        value="{{value}}"
        allow-custom-value=""
      ></ha-combo-box>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "_hassChanged"
      },
      _services: Array,
      value: {
        type: String,
        notify: true
      }
    };
  }

  _hassChanged(hass, oldHass) {
    if (!hass) {
      this._services = [];
      return;
    }

    if (oldHass && hass.services === oldHass.services) {
      return;
    }

    const result = [];
    Object.keys(hass.services).sort().forEach(domain => {
      const services = Object.keys(hass.services[domain]).sort();

      for (let i = 0; i < services.length; i++) {
        result.push(`${domain}.${services[i]}`);
      }
    });
    this._services = result;
  }

}

customElements.define("ha-service-picker", HaServicePicker);

/***/ }),

/***/ "./src/data/entity.ts":
/*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
/*! exports provided: UNAVAILABLE, UNKNOWN, UNAVAILABLE_STATES, ENTITY_COMPONENT_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE", function() { return UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN", function() { return UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE_STATES", function() { return UNAVAILABLE_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_COMPONENT_DOMAINS", function() { return ENTITY_COMPONENT_DOMAINS; });
const UNAVAILABLE = "unavailable";
const UNKNOWN = "unknown";
const UNAVAILABLE_STATES = [UNAVAILABLE, UNKNOWN];
const ENTITY_COMPONENT_DOMAINS = ["air_quality", "alarm_control_panel", "alert", "automation", "binary_sensor", "calendar", "camera", "counter", "cover", "dominos", "fan", "geo_location", "group", "history_graph", "image_processing", "input_boolean", "input_datetime", "input_number", "input_select", "input_text", "light", "lock", "mailbox", "media_player", "person", "plant", "remember_the_milk", "remote", "scene", "script", "sensor", "switch", "timer", "utility_meter", "vacuum", "weather", "wink", "zha", "zwave"];

/***/ }),

/***/ "./src/dialogs/generic/show-dialog-box.ts":
/*!************************************************!*\
  !*** ./src/dialogs/generic/show-dialog-box.ts ***!
  \************************************************/
/*! exports provided: loadGenericDialog, showAlertDialog, showConfirmationDialog, showPromptDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGenericDialog", function() { return loadGenericDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertDialog", function() { return showAlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPromptDialog", function() { return showPromptDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadGenericDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(13), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e(14), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-box */ "./src/dialogs/generic/dialog-box.ts"));

const showDialogHelper = (element, dialogParams, extra) => new Promise(resolve => {
  const origCancel = dialogParams.cancel;
  const origConfirm = dialogParams.confirm;
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-box",
    dialogImport: loadGenericDialog,
    dialogParams: Object.assign({}, dialogParams, {}, extra, {
      cancel: () => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? null : false);

        if (origCancel) {
          origCancel();
        }
      },
      confirm: out => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? out : true);

        if (origConfirm) {
          origConfirm(out);
        }
      }
    })
  });
});

const showAlertDialog = (element, dialogParams) => showDialogHelper(element, dialogParams);
const showConfirmationDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  confirmation: true
});
const showPromptDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  prompt: true
});

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  /**
  * Dispatches a custom event with an optional detail value.
  *
  * @param {string} type Name of event type.
  * @param {*=} detail Detail value containing event-specific
  *   payload.
  * @param {{ bubbles: (boolean|undefined),
           cancelable: (boolean|undefined),
            composed: (boolean|undefined) }=}
  *  options Object specifying options.  These may include:
  *  `bubbles` (boolean, defaults to `true`),
  *  `cancelable` (boolean, defaults to false), and
  *  `node` on which to fire the event (HTMLElement, defaults to `this`).
  * @return {Event} The new event that was fired.
  */
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

});

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
    return {
      hass: Object,

      /**
       * Translates a string to the current `language`. Any parameters to the
       * string should be passed in order, as follows:
       * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
       */
      localize: {
        type: Function,
        computed: "__computeLocalize(hass.localize)"
      }
    };
  }

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ }),

/***/ "./src/panels/developer-tools/service/developer-tools-service.js":
/*!***********************************************************************!*\
  !*** ./src/panels/developer-tools/service/developer-tools-service.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/app-localstorage-document */ "./src/util/app-localstorage-document.js");


/* eslint-plugin-disable lit */











const ERROR_SENTINEL = {};
/*
 * @appliesMixin LocalizeMixin
 */

class HaPanelDevService extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
          display: block;
          padding: 16px;
          direction: ltr;
        }

        .ha-form {
          margin-right: 16px;
          max-width: 400px;
        }

        mwc-button {
          margin-top: 8px;
        }

        .description {
          margin-top: 24px;
          white-space: pre-wrap;
        }

        .header {
          @apply --paper-font-title;
        }

        .attributes th {
          text-align: left;
        }

        .attributes tr {
          vertical-align: top;
        }

        .attributes tr:nth-child(odd) {
          background-color: var(--table-row-background-color, #eee);
        }

        .attributes tr:nth-child(even) {
          background-color: var(--table-row-alternative-background-color, #eee);
        }

        .attributes td:nth-child(3) {
          white-space: pre-wrap;
          word-break: break-word;
        }

        pre {
          margin: 0;
        }

        h1 {
          white-space: normal;
        }

        td {
          padding: 4px;
        }

        .error {
          color: var(--google-red-500);
        }
      </style>

      <app-localstorage-document
        key="panel-dev-service-state-domain-service"
        data="{{domainService}}"
      >
      </app-localstorage-document>
      <app-localstorage-document
        key="[[_computeServicedataKey(domainService)]]"
        data="{{serviceData}}"
      >
      </app-localstorage-document>

      <div class="content">
        <p>
          [[localize('ui.panel.developer-tools.tabs.services.description')]]
        </p>

        <div class="ha-form">
          <ha-service-picker
            hass="[[hass]]"
            value="{{domainService}}"
          ></ha-service-picker>
          <template is="dom-if" if="[[_computeHasEntity(_attributes)]]">
            <ha-entity-picker
              hass="[[hass]]"
              value="[[_computeEntityValue(parsedJSON)]]"
              on-change="_entityPicked"
              disabled="[[!validJSON]]"
              include-domains="[[_computeEntityDomainFilter(_domain)]]"
              allow-custom-entity
            ></ha-entity-picker>
          </template>
          <p>[[localize('ui.panel.developer-tools.tabs.services.data')]]</p>
          <ha-code-editor
            mode="yaml"
            value="[[serviceData]]"
            error="[[!validJSON]]"
            on-value-changed="_yamlChanged"
          ></ha-code-editor>
          <mwc-button on-click="_callService" raised disabled="[[!validJSON]]">
            [[localize('ui.panel.developer-tools.tabs.services.call_service')]]
          </mwc-button>
        </div>

        <template is="dom-if" if="[[!domainService]]">
          <h1>
            [[localize('ui.panel.developer-tools.tabs.services.select_service')]]
          </h1>
        </template>

        <template is="dom-if" if="[[domainService]]">
          <template is="dom-if" if="[[!_description]]">
            <h1>
              [[localize('ui.panel.developer-tools.tabs.services.no_description')]]
            </h1>
          </template>
          <template is="dom-if" if="[[_description]]">
            <h3>[[_description]]</h3>

            <table class="attributes">
              <tr>
                <th>
                  [[localize('ui.panel.developer-tools.tabs.services.column_parameter')]]
                </th>
                <th>
                  [[localize('ui.panel.developer-tools.tabs.services.column_description')]]
                </th>
                <th>
                  [[localize('ui.panel.developer-tools.tabs.services.column_example')]]
                </th>
              </tr>
              <template is="dom-if" if="[[!_attributes.length]]">
                <tr>
                  <td colspan="3">
                    [[localize('ui.panel.developer-tools.tabs.services.no_parameters')]]
                  </td>
                </tr>
              </template>
              <template is="dom-repeat" items="[[_attributes]]" as="attribute">
                <tr>
                  <td><pre>[[attribute.key]]</pre></td>
                  <td>[[attribute.description]]</td>
                  <td>[[attribute.example]]</td>
                </tr>
              </template>
            </table>

            <template is="dom-if" if="[[_attributes.length]]">
              <mwc-button on-click="_fillExampleData">
                [[localize('ui.panel.developer-tools.tabs.services.fill_example_data')]]
              </mwc-button>
            </template>
          </template>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      domainService: {
        type: String,
        observer: "_domainServiceChanged"
      },
      _domain: {
        type: String,
        computed: "_computeDomain(domainService)"
      },
      _service: {
        type: String,
        computed: "_computeService(domainService)"
      },
      serviceData: {
        type: String,
        value: ""
      },
      parsedJSON: {
        type: Object,
        computed: "_computeParsedServiceData(serviceData)"
      },
      validJSON: {
        type: Boolean,
        computed: "_computeValidJSON(parsedJSON)"
      },
      _attributes: {
        type: Array,
        computed: "_computeAttributesArray(hass, _domain, _service)"
      },
      _description: {
        type: String,
        computed: "_computeDescription(hass, _domain, _service)"
      }
    };
  }

  _domainServiceChanged() {
    this.serviceData = "";
  }

  _computeAttributesArray(hass, domain, service) {
    const serviceDomains = hass.services;
    if (!(domain in serviceDomains)) return [];
    if (!(service in serviceDomains[domain])) return [];
    const fields = serviceDomains[domain][service].fields;
    return Object.keys(fields).map(function (field) {
      return Object.assign({
        key: field
      }, fields[field]);
    });
  }

  _computeDescription(hass, domain, service) {
    const serviceDomains = hass.services;
    if (!(domain in serviceDomains)) return undefined;
    if (!(service in serviceDomains[domain])) return undefined;
    return serviceDomains[domain][service].description;
  }

  _computeServicedataKey(domainService) {
    return `panel-dev-service-state-servicedata.${domainService}`;
  }

  _computeDomain(domainService) {
    return domainService.split(".", 1)[0];
  }

  _computeService(domainService) {
    return domainService.split(".", 2)[1] || null;
  }

  _computeParsedServiceData(serviceData) {
    try {
      return serviceData.trim() ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(serviceData) : {};
    } catch (err) {
      return ERROR_SENTINEL;
    }
  }

  _computeValidJSON(parsedJSON) {
    return parsedJSON !== ERROR_SENTINEL;
  }

  _computeHasEntity(attributes) {
    return attributes.some(attr => attr.key === "entity_id");
  }

  _computeEntityValue(parsedJSON) {
    return parsedJSON === ERROR_SENTINEL ? "" : parsedJSON.entity_id;
  }

  _computeEntityDomainFilter(domain) {
    return _data_entity__WEBPACK_IMPORTED_MODULE_7__["ENTITY_COMPONENT_DOMAINS"].includes(domain) ? [domain] : null;
  }

  _callService() {
    if (this.parsedJSON === ERROR_SENTINEL) {
      Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_8__["showAlertDialog"])(this, {
        text: this.hass.localize("ui.panel.developer-tools.tabs.services.alert_parsing_yaml", "data", this.serviceData)
      });
      return;
    }

    this.hass.callService(this._domain, this._service, this.parsedJSON);
  }

  _fillExampleData() {
    const example = {};

    this._attributes.forEach(attribute => {
      if (attribute.example) {
        let value = "";

        try {
          value = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(attribute.example);
        } catch (err) {
          value = attribute.example;
        }

        example[attribute.key] = value;
      }
    });

    this.serviceData = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeDump"])(example);
  }

  _entityPicked(ev) {
    this.serviceData = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeDump"])(Object.assign({}, this.parsedJSON, {
      entity_id: ev.target.value
    }));
  }

  _yamlChanged(ev) {
    this.serviceData = ev.detail.value;
  }

}

customElements.define("developer-tools-service", HaPanelDevService);

/***/ }),

/***/ "./src/util/app-localstorage-document.js":
/*!***********************************************!*\
  !*** ./src/util/app-localstorage-document.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-storage/app-storage-behavior */ "./node_modules/@polymer/app-storage/app-storage-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* Forked because it contained an import.meta which webpack doesn't support. */

/* eslint-disable */

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



/**
 * app-localstorage-document synchronizes storage between an in-memory
 * value and a location in the browser's localStorage system.
 *
 * localStorage is a simple and widely supported storage API that provides both
 * permanent and session-based storage options. Using app-localstorage-document
 * you can easily integrate localStorage into your app via normal Polymer
 * databinding.
 *
 * app-localstorage-document is the reference implementation of an element
 * that uses `AppStorageBehavior`. Reading its code is a good way to get
 * started writing your own storage element.
 *
 * Example use:
 *
 *     <paper-input value="{{search}}"></paper-input>
 *     <app-localstorage-document key="search" data="{{search}}">
 *     </app-localstorage-document>
 *
 * app-localstorage-document automatically synchronizes changes to the
 * same key across multiple tabs.
 *
 * Only supports storing JSON-serializable values.
 */

Object(_polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: "app-localstorage-document",
  behaviors: [_polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__["AppStorageBehavior"]],
  properties: {
    /**
     * Defines the logical location to store the data.
     *
     * @type{String}
     */
    key: {
      type: String,
      notify: true
    },

    /**
     * If true, the data will automatically be cleared from storage when
     * the page session ends (i.e. when the user has navigated away from
     * the page).
     */
    sessionOnly: {
      type: Boolean,
      value: false
    },

    /**
     * Either `window.localStorage` or `window.sessionStorage`, depending on
     * `this.sessionOnly`.
     */
    storage: {
      type: Object,
      computed: "__computeStorage(sessionOnly)"
    }
  },
  observers: ["__storageSourceChanged(storage, key)"],
  attached: function () {
    this.listen(window, "storage", "__onStorage");
    this.listen(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },
  detached: function () {
    this.unlisten(window, "storage", "__onStorage");
    this.unlisten(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },

  get isNew() {
    return !this.key;
  },

  /**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param {*} key The new key to use.
   * @return {Promise}
   */
  saveValue: function (key) {
    try {
      this.__setStorageValue(
      /*{@type if (key ty){String}}*/
      key, this.data);
    } catch (e) {
      return Promise.reject(e);
    }

    this.key =
    /** @type {String} */
    key;
    return Promise.resolve();
  },
  reset: function () {
    this.key = null;
    this.data = this.zeroValue;
  },
  destroy: function () {
    try {
      this.storage.removeItem(this.key);
      this.reset();
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  },
  getStoredValue: function (path) {
    var value;

    if (this.key != null) {
      try {
        value = this.__parseValueFromStorage();

        if (value != null) {
          value = this.get(path, {
            data: value
          });
        } else {
          value = undefined;
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.resolve(value);
  },
  setStoredValue: function (path, value) {
    if (this.key != null) {
      try {
        this.__setStorageValue(this.key, this.data);
      } catch (e) {
        return Promise.reject(e);
      }

      this.fire("app-local-storage-changed", this, {
        node: window.top
      });
    }

    return Promise.resolve(value);
  },
  __computeStorage: function (sessionOnly) {
    return sessionOnly ? window.sessionStorage : window.localStorage;
  },
  __storageSourceChanged: function (storage, key) {
    this._initializeStoredValue();
  },
  __onStorage: function (event) {
    if (event.key !== this.key || event.storageArea !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", this.__parseValueFromStorage());
    });
  },
  __onAppLocalStorageChanged: function (event) {
    if (event.detail === this || event.detail.key !== this.key || event.detail.storage !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", event.detail.data);
    });
  },
  __parseValueFromStorage: function () {
    try {
      return JSON.parse(this.storage.getItem(this.key));
    } catch (e) {
      console.error("Failed to parse value from storage for", this.key);
    }
  },
  __setStorageValue: function (key, value) {
    if (typeof value === "undefined") value = null;
    this.storage.setItem(key, JSON.stringify(value));
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb21iby1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zZXJ2aWNlLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9zZXJ2aWNlL2RldmVsb3Blci10b29scy1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWNvbWJvLWJveC1saWdodFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5jbGFzcyBIYUNvbWJvQm94IGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbXM9XCJbW19pdGVtc11dXCJcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiW1tpdGVtVmFsdWVQYXRoXV1cIlxuICAgICAgICBpdGVtLWxhYmVsLXBhdGg9XCJbW2l0ZW1MYWJlbFBhdGhdXVwiXG4gICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgb3BlbmVkPVwie3tvcGVuZWR9fVwiXG4gICAgICAgIGFsbG93LWN1c3RvbS12YWx1ZT1cIltbYWxsb3dDdXN0b21WYWx1ZV1dXCJcbiAgICAgICAgb24tY2hhbmdlPVwiX2ZpcmVDaGFuZ2VkXCJcbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgYXV0b2ZvY3VzPVwiW1thdXRvZm9jdXNdXVwiXG4gICAgICAgICAgbGFiZWw9XCJbW2xhYmVsXV1cIlxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPVwiW1t2YWx1ZV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICBoaWRkZW4kPVwiW1shdmFsdWVdXVwiXG4gICAgICAgICAgICA+Q2xlYXI8L3BhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxuICAgICAgICAgICAgaWNvbj1cIltbX2NvbXB1dGVUb2dnbGVJY29uKG9wZW5lZCldXVwiXG4gICAgICAgICAgICBoaWRkZW4kPVwiW1shaXRlbXMubGVuZ3RoXV1cIlxuICAgICAgICAgICAgPlRvZ2dsZTwvcGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAtNXB4IC0xMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPHBhcGVyLWl0ZW0+W1tfY29tcHV0ZUl0ZW1MYWJlbChpdGVtLCBpdGVtTGFiZWxQYXRoKV1dPC9wYXBlci1pdGVtPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC92YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbG93Q3VzdG9tVmFsdWU6IEJvb2xlYW4sXG4gICAgICBpdGVtczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9pdGVtc0NoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBfaXRlbXM6IE9iamVjdCxcbiAgICAgIGl0ZW1MYWJlbFBhdGg6IFN0cmluZyxcbiAgICAgIGl0ZW1WYWx1ZVBhdGg6IFN0cmluZyxcbiAgICAgIGF1dG9mb2N1czogQm9vbGVhbixcbiAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICBvcGVuZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlcjogXCJfb3BlbmVkQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX29wZW5lZENoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCFuZXdWYWwpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdGhpcy5pdGVtcztcbiAgICB9XG4gIH1cblxuICBfaXRlbXNDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gbmV3VmFsO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlVG9nZ2xlSWNvbihvcGVuZWQpIHtcbiAgICByZXR1cm4gb3BlbmVkID8gXCJoYXNzOm1lbnUtdXBcIiA6IFwiaGFzczptZW51LWRvd25cIjtcbiAgfVxuXG4gIF9jb21wdXRlSXRlbUxhYmVsKGl0ZW0sIGl0ZW1MYWJlbFBhdGgpIHtcbiAgICByZXR1cm4gaXRlbUxhYmVsUGF0aCA/IGl0ZW1baXRlbUxhYmVsUGF0aF0gOiBpdGVtO1xuICB9XG5cbiAgX2ZpcmVDaGFuZ2VkKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5maXJlKFwiY2hhbmdlXCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbWJvLWJveFwiLCBIYUNvbWJvQm94KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCB0eXBlIHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4vaGEtY29tYm8tYm94XCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFTZXJ2aWNlUGlja2VyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbWJvLWJveFxuICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuc2VydmljZS1waWNrZXIuc2VydmljZScpXV1cIlxuICAgICAgICBpdGVtcz1cIltbX3NlcnZpY2VzXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIGFsbG93LWN1c3RvbS12YWx1ZT1cIlwiXG4gICAgICA+PC9oYS1jb21iby1ib3g+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9oYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9zZXJ2aWNlczogQXJyYXksXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9oYXNzQ2hhbmdlZChoYXNzLCBvbGRIYXNzKSB7XG4gICAgaWYgKCFoYXNzKSB7XG4gICAgICB0aGlzLl9zZXJ2aWNlcyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2xkSGFzcyAmJiBoYXNzLnNlcnZpY2VzID09PSBvbGRIYXNzLnNlcnZpY2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMoaGFzcy5zZXJ2aWNlcylcbiAgICAgIC5zb3J0KClcbiAgICAgIC5mb3JFYWNoKChkb21haW4pID0+IHtcbiAgICAgICAgY29uc3Qgc2VydmljZXMgPSBPYmplY3Qua2V5cyhoYXNzLnNlcnZpY2VzW2RvbWFpbl0pLnNvcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcnZpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goYCR7ZG9tYWlufS4ke3NlcnZpY2VzW2ldfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuX3NlcnZpY2VzID0gcmVzdWx0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNlcnZpY2UtcGlja2VyXCIsIEhhU2VydmljZVBpY2tlcik7XG4iLCJleHBvcnQgY29uc3QgVU5BVkFJTEFCTEUgPSBcInVuYXZhaWxhYmxlXCI7XG5leHBvcnQgY29uc3QgVU5LTk9XTiA9IFwidW5rbm93blwiO1xuXG5leHBvcnQgY29uc3QgVU5BVkFJTEFCTEVfU1RBVEVTID0gW1VOQVZBSUxBQkxFLCBVTktOT1dOXTtcblxuZXhwb3J0IGNvbnN0IEVOVElUWV9DT01QT05FTlRfRE9NQUlOUyA9IFtcbiAgXCJhaXJfcXVhbGl0eVwiLFxuICBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcbiAgXCJhbGVydFwiLFxuICBcImF1dG9tYXRpb25cIixcbiAgXCJiaW5hcnlfc2Vuc29yXCIsXG4gIFwiY2FsZW5kYXJcIixcbiAgXCJjYW1lcmFcIixcbiAgXCJjb3VudGVyXCIsXG4gIFwiY292ZXJcIixcbiAgXCJkb21pbm9zXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ2VvX2xvY2F0aW9uXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW1hZ2VfcHJvY2Vzc2luZ1wiLFxuICBcImlucHV0X2Jvb2xlYW5cIixcbiAgXCJpbnB1dF9kYXRldGltZVwiLFxuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtYWlsYm94XCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwicGVyc29uXCIsXG4gIFwicGxhbnRcIixcbiAgXCJyZW1lbWJlcl90aGVfbWlsa1wiLFxuICBcInJlbW90ZVwiLFxuICBcInNjZW5lXCIsXG4gIFwic2NyaXB0XCIsXG4gIFwic2Vuc29yXCIsXG4gIFwic3dpdGNoXCIsXG4gIFwidGltZXJcIixcbiAgXCJ1dGlsaXR5X21ldGVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2VhdGhlclwiLFxuICBcIndpbmtcIixcbiAgXCJ6aGFcIixcbiAgXCJ6d2F2ZVwiLFxuXTtcbiIsImltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmludGVyZmFjZSBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlc3VsdDtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGRpc21pc3NUZXh0Pzogc3RyaW5nO1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbiAgY2FuY2VsPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1BhcmFtc1xuICBleHRlbmRzIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyxcbiAgICBQcm9tcHREaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbiAgY29uZmlybWF0aW9uPzogYm9vbGVhbjtcbiAgcHJvbXB0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRHZW5lcmljRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlybWF0aW9uXCIgKi8gXCIuL2RpYWxvZy1ib3hcIik7XG5cbmNvbnN0IHNob3dEaWFsb2dIZWxwZXIgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IERpYWxvZ1BhcmFtcyxcbiAgZXh0cmE/OiB7XG4gICAgY29uZmlybWF0aW9uPzogRGlhbG9nUGFyYW1zW1wiY29uZmlybWF0aW9uXCJdO1xuICAgIHByb21wdD86IERpYWxvZ1BhcmFtc1tcInByb21wdFwiXTtcbiAgfVxuKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdDYW5jZWwgPSBkaWFsb2dQYXJhbXMuY2FuY2VsO1xuICAgIGNvbnN0IG9yaWdDb25maXJtID0gZGlhbG9nUGFyYW1zLmNvbmZpcm07XG5cbiAgICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWJveFwiLFxuICAgICAgZGlhbG9nSW1wb3J0OiBsb2FkR2VuZXJpY0RpYWxvZyxcbiAgICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgICAuLi5kaWFsb2dQYXJhbXMsXG4gICAgICAgIC4uLmV4dHJhLFxuICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBudWxsIDogZmFsc2UpO1xuICAgICAgICAgIGlmIChvcmlnQ2FuY2VsKSB7XG4gICAgICAgICAgICBvcmlnQ2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiAob3V0KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gb3V0IDogdHJ1ZSk7XG4gICAgICAgICAgaWYgKG9yaWdDb25maXJtKSB7XG4gICAgICAgICAgICBvcmlnQ29uZmlybShvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FsZXJ0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBBbGVydERpYWxvZ1BhcmFtc1xuKSA9PiBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcyk7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBDb25maXJtYXRpb25EaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgY29uZmlybWF0aW9uOiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgYm9vbGVhblxuICA+O1xuXG5leHBvcnQgY29uc3Qgc2hvd1Byb21wdERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogUHJvbXB0RGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IHByb21wdDogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIG51bGwgfCBzdHJpbmdcbiAgPjtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgc2FmZUR1bXAsIHNhZmVMb2FkIH0gZnJvbSBcImpzLXlhbWxcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY29kZS1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXJcIjtcbmltcG9ydCB7IEVOVElUWV9DT01QT05FTlRfRE9NQUlOUyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eVwiO1xuaW1wb3J0IHsgc2hvd0FsZXJ0RGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vdXRpbC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XCI7XG5cbmNvbnN0IEVSUk9SX1NFTlRJTkVMID0ge307XG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxEZXZTZXJ2aWNlIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhLWZvcm0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0aCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRyIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXJvdy1iYWNrZ3JvdW5kLWNvbG9yLCAjZWVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtcm93LWFsdGVybmF0aXZlLWJhY2tncm91bmQtY29sb3IsICNlZWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFxuICAgICAgICBrZXk9XCJwYW5lbC1kZXYtc2VydmljZS1zdGF0ZS1kb21haW4tc2VydmljZVwiXG4gICAgICAgIGRhdGE9XCJ7e2RvbWFpblNlcnZpY2V9fVwiXG4gICAgICA+XG4gICAgICA8L2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQ+XG4gICAgICA8YXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFxuICAgICAgICBrZXk9XCJbW19jb21wdXRlU2VydmljZWRhdGFLZXkoZG9tYWluU2VydmljZSldXVwiXG4gICAgICAgIGRhdGE9XCJ7e3NlcnZpY2VEYXRhfX1cIlxuICAgICAgPlxuICAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5kZXNjcmlwdGlvbicpXV1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYS1mb3JtXCI+XG4gICAgICAgICAgPGhhLXNlcnZpY2UtcGlja2VyXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2RvbWFpblNlcnZpY2V9fVwiXG4gICAgICAgICAgPjwvaGEtc2VydmljZS1waWNrZXI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb21wdXRlSGFzRW50aXR5KF9hdHRyaWJ1dGVzKV1dXCI+XG4gICAgICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cIltbX2NvbXB1dGVFbnRpdHlWYWx1ZShwYXJzZWRKU09OKV1dXCJcbiAgICAgICAgICAgICAgb24tY2hhbmdlPVwiX2VudGl0eVBpY2tlZFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shdmFsaWRKU09OXV1cIlxuICAgICAgICAgICAgICBpbmNsdWRlLWRvbWFpbnM9XCJbW19jb21wdXRlRW50aXR5RG9tYWluRmlsdGVyKF9kb21haW4pXV1cIlxuICAgICAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHA+W1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc2VydmljZXMuZGF0YScpXV08L3A+XG4gICAgICAgICAgPGhhLWNvZGUtZWRpdG9yXG4gICAgICAgICAgICBtb2RlPVwieWFtbFwiXG4gICAgICAgICAgICB2YWx1ZT1cIltbc2VydmljZURhdGFdXVwiXG4gICAgICAgICAgICBlcnJvcj1cIltbIXZhbGlkSlNPTl1dXCJcbiAgICAgICAgICAgIG9uLXZhbHVlLWNoYW5nZWQ9XCJfeWFtbENoYW5nZWRcIlxuICAgICAgICAgID48L2hhLWNvZGUtZWRpdG9yPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCIgcmFpc2VkIGRpc2FibGVkPVwiW1shdmFsaWRKU09OXV1cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmNhbGxfc2VydmljZScpXV1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shZG9tYWluU2VydmljZV1dXCI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc2VydmljZXMuc2VsZWN0X3NlcnZpY2UnKV1dXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZG9tYWluU2VydmljZV1dXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfZGVzY3JpcHRpb25dXVwiPlxuICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5ub19kZXNjcmlwdGlvbicpXV1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2Rlc2NyaXB0aW9uXV1cIj5cbiAgICAgICAgICAgIDxoMz5bW19kZXNjcmlwdGlvbl1dPC9oMz5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiYXR0cmlidXRlc1wiPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc2VydmljZXMuY29sdW1uX3BhcmFtZXRlcicpXV1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmNvbHVtbl9kZXNjcmlwdGlvbicpXV1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmNvbHVtbl9leGFtcGxlJyldXVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2F0dHJpYnV0ZXMubGVuZ3RoXV1cIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc2VydmljZXMubm9fcGFyYW1ldGVycycpXV1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfYXR0cmlidXRlc11dXCIgYXM9XCJhdHRyaWJ1dGVcIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+PHByZT5bW2F0dHJpYnV0ZS5rZXldXTwvcHJlPjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+W1thdHRyaWJ1dGUuZGVzY3JpcHRpb25dXTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+W1thdHRyaWJ1dGUuZXhhbXBsZV1dPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19hdHRyaWJ1dGVzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2ZpbGxFeGFtcGxlRGF0YVwiPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmZpbGxfZXhhbXBsZV9kYXRhJyldXVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpblNlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJfZG9tYWluU2VydmljZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9kb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZURvbWFpbihkb21haW5TZXJ2aWNlKVwiLFxuICAgICAgfSxcblxuICAgICAgX3NlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVNlcnZpY2UoZG9tYWluU2VydmljZSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWRKU09OOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVQYXJzZWRTZXJ2aWNlRGF0YShzZXJ2aWNlRGF0YSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHZhbGlkSlNPTjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVZhbGlkSlNPTihwYXJzZWRKU09OKVwiLFxuICAgICAgfSxcblxuICAgICAgX2F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQXR0cmlidXRlc0FycmF5KGhhc3MsIF9kb21haW4sIF9zZXJ2aWNlKVwiLFxuICAgICAgfSxcblxuICAgICAgX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVEZXNjcmlwdGlvbihoYXNzLCBfZG9tYWluLCBfc2VydmljZSlcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9kb21haW5TZXJ2aWNlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0gXCJcIjtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlc0FycmF5KGhhc3MsIGRvbWFpbiwgc2VydmljZSkge1xuICAgIGNvbnN0IHNlcnZpY2VEb21haW5zID0gaGFzcy5zZXJ2aWNlcztcbiAgICBpZiAoIShkb21haW4gaW4gc2VydmljZURvbWFpbnMpKSByZXR1cm4gW107XG4gICAgaWYgKCEoc2VydmljZSBpbiBzZXJ2aWNlRG9tYWluc1tkb21haW5dKSkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgZmllbGRzID0gc2VydmljZURvbWFpbnNbZG9tYWluXVtzZXJ2aWNlXS5maWVsZHM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkcykubWFwKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgcmV0dXJuIHsga2V5OiBmaWVsZCwgLi4uZmllbGRzW2ZpZWxkXSB9O1xuICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVEZXNjcmlwdGlvbihoYXNzLCBkb21haW4sIHNlcnZpY2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlRG9tYWlucyA9IGhhc3Muc2VydmljZXM7XG4gICAgaWYgKCEoZG9tYWluIGluIHNlcnZpY2VEb21haW5zKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoIShzZXJ2aWNlIGluIHNlcnZpY2VEb21haW5zW2RvbWFpbl0pKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzZXJ2aWNlRG9tYWluc1tkb21haW5dW3NlcnZpY2VdLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgX2NvbXB1dGVTZXJ2aWNlZGF0YUtleShkb21haW5TZXJ2aWNlKSB7XG4gICAgcmV0dXJuIGBwYW5lbC1kZXYtc2VydmljZS1zdGF0ZS1zZXJ2aWNlZGF0YS4ke2RvbWFpblNlcnZpY2V9YDtcbiAgfVxuXG4gIF9jb21wdXRlRG9tYWluKGRvbWFpblNlcnZpY2UpIHtcbiAgICByZXR1cm4gZG9tYWluU2VydmljZS5zcGxpdChcIi5cIiwgMSlbMF07XG4gIH1cblxuICBfY29tcHV0ZVNlcnZpY2UoZG9tYWluU2VydmljZSkge1xuICAgIHJldHVybiBkb21haW5TZXJ2aWNlLnNwbGl0KFwiLlwiLCAyKVsxXSB8fCBudWxsO1xuICB9XG5cbiAgX2NvbXB1dGVQYXJzZWRTZXJ2aWNlRGF0YShzZXJ2aWNlRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gc2VydmljZURhdGEudHJpbSgpID8gc2FmZUxvYWQoc2VydmljZURhdGEpIDoge307XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gRVJST1JfU0VOVElORUw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVWYWxpZEpTT04ocGFyc2VkSlNPTikge1xuICAgIHJldHVybiBwYXJzZWRKU09OICE9PSBFUlJPUl9TRU5USU5FTDtcbiAgfVxuXG4gIF9jb21wdXRlSGFzRW50aXR5KGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiBhdHRyLmtleSA9PT0gXCJlbnRpdHlfaWRcIik7XG4gIH1cblxuICBfY29tcHV0ZUVudGl0eVZhbHVlKHBhcnNlZEpTT04pIHtcbiAgICByZXR1cm4gcGFyc2VkSlNPTiA9PT0gRVJST1JfU0VOVElORUwgPyBcIlwiIDogcGFyc2VkSlNPTi5lbnRpdHlfaWQ7XG4gIH1cblxuICBfY29tcHV0ZUVudGl0eURvbWFpbkZpbHRlcihkb21haW4pIHtcbiAgICByZXR1cm4gRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TLmluY2x1ZGVzKGRvbWFpbikgPyBbZG9tYWluXSA6IG51bGw7XG4gIH1cblxuICBfY2FsbFNlcnZpY2UoKSB7XG4gICAgaWYgKHRoaXMucGFyc2VkSlNPTiA9PT0gRVJST1JfU0VOVElORUwpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmFsZXJ0X3BhcnNpbmdfeWFtbFwiLFxuICAgICAgICAgIFwiZGF0YVwiLFxuICAgICAgICAgIHRoaXMuc2VydmljZURhdGFcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLl9kb21haW4sIHRoaXMuX3NlcnZpY2UsIHRoaXMucGFyc2VkSlNPTik7XG4gIH1cblxuICBfZmlsbEV4YW1wbGVEYXRhKCkge1xuICAgIGNvbnN0IGV4YW1wbGUgPSB7fTtcbiAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgaWYgKGF0dHJpYnV0ZS5leGFtcGxlKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsdWUgPSBzYWZlTG9hZChhdHRyaWJ1dGUuZXhhbXBsZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlLmV4YW1wbGU7XG4gICAgICAgIH1cbiAgICAgICAgZXhhbXBsZVthdHRyaWJ1dGUua2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VydmljZURhdGEgPSBzYWZlRHVtcChleGFtcGxlKTtcbiAgfVxuXG4gIF9lbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0gc2FmZUR1bXAoe1xuICAgICAgLi4udGhpcy5wYXJzZWRKU09OLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBfeWFtbENoYW5nZWQoZXYpIHtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImRldmVsb3Blci10b29scy1zZXJ2aWNlXCIsIEhhUGFuZWxEZXZTZXJ2aWNlKTtcbiIsIi8qIEZvcmtlZCBiZWNhdXNlIGl0IGNvbnRhaW5lZCBhbiBpbXBvcnQubWV0YSB3aGljaCB3ZWJwYWNrIGRvZXNuJ3Qgc3VwcG9ydC4gKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0IHsgQXBwU3RvcmFnZUJlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL2FwcC1zdG9yYWdlL2FwcC1zdG9yYWdlLWJlaGF2aW9yXCI7XG5pbXBvcnQgeyBQb2x5bWVyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5XCI7XG5cbi8qKlxuICogYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBzeW5jaHJvbml6ZXMgc3RvcmFnZSBiZXR3ZWVuIGFuIGluLW1lbW9yeVxuICogdmFsdWUgYW5kIGEgbG9jYXRpb24gaW4gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2Ugc3lzdGVtLlxuICpcbiAqIGxvY2FsU3RvcmFnZSBpcyBhIHNpbXBsZSBhbmQgd2lkZWx5IHN1cHBvcnRlZCBzdG9yYWdlIEFQSSB0aGF0IHByb3ZpZGVzIGJvdGhcbiAqIHBlcm1hbmVudCBhbmQgc2Vzc2lvbi1iYXNlZCBzdG9yYWdlIG9wdGlvbnMuIFVzaW5nIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAqIHlvdSBjYW4gZWFzaWx5IGludGVncmF0ZSBsb2NhbFN0b3JhZ2UgaW50byB5b3VyIGFwcCB2aWEgbm9ybWFsIFBvbHltZXJcbiAqIGRhdGFiaW5kaW5nLlxuICpcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgaXMgdGhlIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlbGVtZW50XG4gKiB0aGF0IHVzZXMgYEFwcFN0b3JhZ2VCZWhhdmlvcmAuIFJlYWRpbmcgaXRzIGNvZGUgaXMgYSBnb29kIHdheSB0byBnZXRcbiAqIHN0YXJ0ZWQgd3JpdGluZyB5b3VyIG93biBzdG9yYWdlIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZSB1c2U6XG4gKlxuICogICAgIDxwYXBlci1pbnB1dCB2YWx1ZT1cInt7c2VhcmNofX1cIj48L3BhcGVyLWlucHV0PlxuICogICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGtleT1cInNlYXJjaFwiIGRhdGE9XCJ7e3NlYXJjaH19XCI+XG4gKiAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuICpcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgYXV0b21hdGljYWxseSBzeW5jaHJvbml6ZXMgY2hhbmdlcyB0byB0aGVcbiAqIHNhbWUga2V5IGFjcm9zcyBtdWx0aXBsZSB0YWJzLlxuICpcbiAqIE9ubHkgc3VwcG9ydHMgc3RvcmluZyBKU09OLXNlcmlhbGl6YWJsZSB2YWx1ZXMuXG4gKi9cblBvbHltZXIoe1xuICBpczogXCJhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XCIsXG4gIGJlaGF2aW9yczogW0FwcFN0b3JhZ2VCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxvZ2ljYWwgbG9jYXRpb24gdG8gc3RvcmUgdGhlIGRhdGEuXG4gICAgICpcbiAgICAgKiBAdHlwZXtTdHJpbmd9XG4gICAgICovXG4gICAga2V5OiB7IHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgZGF0YSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY2xlYXJlZCBmcm9tIHN0b3JhZ2Ugd2hlblxuICAgICAqIHRoZSBwYWdlIHNlc3Npb24gZW5kcyAoaS5lLiB3aGVuIHRoZSB1c2VyIGhhcyBuYXZpZ2F0ZWQgYXdheSBmcm9tXG4gICAgICogdGhlIHBhZ2UpLlxuICAgICAqL1xuICAgIHNlc3Npb25Pbmx5OiB7IHR5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSB9LFxuXG4gICAgLyoqXG4gICAgICogRWl0aGVyIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBvciBgd2luZG93LnNlc3Npb25TdG9yYWdlYCwgZGVwZW5kaW5nIG9uXG4gICAgICogYHRoaXMuc2Vzc2lvbk9ubHlgLlxuICAgICAqL1xuICAgIHN0b3JhZ2U6IHsgdHlwZTogT2JqZWN0LCBjb21wdXRlZDogXCJfX2NvbXB1dGVTdG9yYWdlKHNlc3Npb25Pbmx5KVwiIH0sXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXCJfX3N0b3JhZ2VTb3VyY2VDaGFuZ2VkKHN0b3JhZ2UsIGtleSlcIl0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxpc3Rlbih3aW5kb3csIFwic3RvcmFnZVwiLCBcIl9fb25TdG9yYWdlXCIpO1xuICAgIHRoaXMubGlzdGVuKFxuICAgICAgd2luZG93LnRvcCxcbiAgICAgIFwiYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZFwiLFxuICAgICAgXCJfX29uQXBwTG9jYWxTdG9yYWdlQ2hhbmdlZFwiXG4gICAgKTtcbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudW5saXN0ZW4od2luZG93LCBcInN0b3JhZ2VcIiwgXCJfX29uU3RvcmFnZVwiKTtcbiAgICB0aGlzLnVubGlzdGVuKFxuICAgICAgd2luZG93LnRvcCxcbiAgICAgIFwiYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZFwiLFxuICAgICAgXCJfX29uQXBwTG9jYWxTdG9yYWdlQ2hhbmdlZFwiXG4gICAgKTtcbiAgfSxcblxuICBnZXQgaXNOZXcoKSB7XG4gICAgcmV0dXJuICF0aGlzLmtleTtcbiAgfSxcblxuICAvKipcbiAgICogU3RvcmVzIGEgdmFsdWUgYXQgdGhlIGdpdmVuIGtleSwgYW5kIGlmIHN1Y2Nlc3NmdWwsIHVwZGF0ZXMgdGhpcy5rZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBuZXcga2V5IHRvIHVzZS5cbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIHNhdmVWYWx1ZTogZnVuY3Rpb24gKGtleSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fc2V0U3RvcmFnZVZhbHVlKC8qe0B0eXBlIGlmIChrZXkgdHkpe1N0cmluZ319Ki8ga2V5LCB0aGlzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleSA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyAoa2V5KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnplcm9WYWx1ZTtcbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMua2V5KTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuXG4gIGdldFN0b3JlZFZhbHVlOiBmdW5jdGlvbiAocGF0aCkge1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGlmICh0aGlzLmtleSAhPSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX19wYXJzZVZhbHVlRnJvbVN0b3JhZ2UoKTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXQocGF0aCwgeyBkYXRhOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgc2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uIChwYXRoLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmtleSAhPSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9fc2V0U3RvcmFnZVZhbHVlKHRoaXMua2V5LCB0aGlzLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmlyZShcImFwcC1sb2NhbC1zdG9yYWdlLWNoYW5nZWRcIiwgdGhpcywgeyBub2RlOiB3aW5kb3cudG9wIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICB9LFxuXG4gIF9fY29tcHV0ZVN0b3JhZ2U6IGZ1bmN0aW9uIChzZXNzaW9uT25seSkge1xuICAgIHJldHVybiBzZXNzaW9uT25seSA/IHdpbmRvdy5zZXNzaW9uU3RvcmFnZSA6IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0sXG5cbiAgX19zdG9yYWdlU291cmNlQ2hhbmdlZDogZnVuY3Rpb24gKHN0b3JhZ2UsIGtleSkge1xuICAgIHRoaXMuX2luaXRpYWxpemVTdG9yZWRWYWx1ZSgpO1xuICB9LFxuXG4gIF9fb25TdG9yYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSB0aGlzLmtleSB8fCBldmVudC5zdG9yYWdlQXJlYSAhPT0gdGhpcy5zdG9yYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXQoXCJkYXRhXCIsIHRoaXMuX19wYXJzZVZhbHVlRnJvbVN0b3JhZ2UoKSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmRldGFpbCA9PT0gdGhpcyB8fFxuICAgICAgZXZlbnQuZGV0YWlsLmtleSAhPT0gdGhpcy5rZXkgfHxcbiAgICAgIGV2ZW50LmRldGFpbC5zdG9yYWdlICE9PSB0aGlzLnN0b3JhZ2VcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXQoXCJkYXRhXCIsIGV2ZW50LmRldGFpbC5kYXRhKTtcbiAgICB9KTtcbiAgfSxcblxuICBfX3BhcnNlVmFsdWVGcm9tU3RvcmFnZTogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgdmFsdWUgZnJvbSBzdG9yYWdlIGZvclwiLCB0aGlzLmtleSk7XG4gICAgfVxuICB9LFxuXG4gIF9fc2V0U3RvcmFnZVZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH0sXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFoQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekdBO0FBQ0E7QUEwR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBSUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaERBO0FBQ0E7QUFpREE7Ozs7Ozs7Ozs7OztBQzNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBLDZnQkFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFIQTtBQW9CQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBQUE7QUFJQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWtLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF4Q0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBelRBO0FBQ0E7QUEwVEE7Ozs7Ozs7Ozs7OztBQzdVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBbkJBO0FBc0JBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBaEtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
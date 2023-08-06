(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[48],{

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

/***/ "./src/panels/developer-tools/state/developer-tools-state.js":
/*!*******************************************************************!*\
  !*** ./src/panels/developer-tools/state/developer-tools-state.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");




/* eslint-plugin-disable lit */









const ERROR_SENTINEL = {};
/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class HaPanelDevState extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="ha-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
          display: block;
          padding: 16px;
          direction: ltr;
        }

        .inputs {
          max-width: 400px;
        }

        mwc-button {
          margin-top: 8px;
        }

        .entities th {
          text-align: left;
        }

        .entities tr {
          vertical-align: top;
        }

        .entities tr:nth-child(odd) {
          background-color: var(--table-row-background-color, #fff);
        }

        .entities tr:nth-child(even) {
          background-color: var(--table-row-alternative-background-color, #eee);
        }
        .entities td {
          padding: 4px;
        }
        .entities paper-icon-button {
          height: 24px;
          padding: 0;
        }
        .entities td:nth-child(3) {
          white-space: pre-wrap;
          word-break: break-word;
        }

        .entities a {
          color: var(--primary-color);
        }
      </style>

      <div class="inputs">
        <p>
          [[localize('ui.panel.developer-tools.tabs.states.description1')]]<br />
          [[localize('ui.panel.developer-tools.tabs.states.description2')]]
        </p>

        <ha-entity-picker
          autofocus
          hass="[[hass]]"
          value="{{_entityId}}"
          on-change="entityIdChanged"
          allow-custom-entity
        ></ha-entity-picker>
        <paper-input
          label="[[localize('ui.panel.developer-tools.tabs.states.state')]]"
          required
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          value="{{_state}}"
          class="state-input"
        ></paper-input>
        <p>
          [[localize('ui.panel.developer-tools.tabs.states.state_attributes')]]
        </p>
        <ha-code-editor
          mode="yaml"
          value="[[_stateAttributes]]"
          error="[[!validJSON]]"
          on-value-changed="_yamlChanged"
        ></ha-code-editor>
        <mwc-button on-click="handleSetState" disabled="[[!validJSON]]" raised
          >[[localize('ui.panel.developer-tools.tabs.states.set_state')]]</mwc-button
        >
      </div>

      <h1>
        [[localize('ui.panel.developer-tools.tabs.states.current_entities')]]
      </h1>
      <table class="entities">
        <tr>
          <th>[[localize('ui.panel.developer-tools.tabs.states.entity')]]</th>
          <th>[[localize('ui.panel.developer-tools.tabs.states.state')]]</th>
          <th hidden$="[[narrow]]">
            [[localize('ui.panel.developer-tools.tabs.states.attributes')]]
            <paper-checkbox checked="{{_showAttributes}}"></paper-checkbox>
          </th>
        </tr>
        <tr>
          <th>
            <paper-input
              label="[[localize('ui.panel.developer-tools.tabs.states.filter_entities')]]"
              type="search"
              value="{{_entityFilter}}"
            ></paper-input>
          </th>
          <th>
            <paper-input
              label="[[localize('ui.panel.developer-tools.tabs.states.filter_states')]]"
              type="search"
              value="{{_stateFilter}}"
            ></paper-input>
          </th>
          <th hidden$="[[!computeShowAttributes(narrow, _showAttributes)]]">
            <paper-input
              label="[[localize('ui.panel.developer-tools.tabs.states.filter_attributes')]]"
              type="search"
              value="{{_attributeFilter}}"
            ></paper-input>
          </th>
        </tr>
        <tr hidden$="[[!computeShowEntitiesPlaceholder(_entities)]]">
          <td colspan="3">
            [[localize('ui.panel.developer-tools.tabs.states.no_entities')]]
          </td>
        </tr>
        <template is="dom-repeat" items="[[_entities]]" as="entity">
          <tr>
            <td>
              <paper-icon-button
                on-click="entityMoreInfo"
                icon="hass:information-outline"
                alt="[[localize('ui.panel.developer-tools.tabs.states.more_info')]]"
                title="[[localize('ui.panel.developer-tools.tabs.states.more_info')]]"
              >
              </paper-icon-button>
              <a href="#" on-click="entitySelected">[[entity.entity_id]]</a>
            </td>
            <td>[[entity.state]]</td>
            <template
              is="dom-if"
              if="[[computeShowAttributes(narrow, _showAttributes)]]"
            >
              <td>[[attributeString(entity)]]</td>
            </template>
          </tr>
        </template>
      </table>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      parsedJSON: {
        type: Object,
        computed: "_computeParsedStateAttributes(_stateAttributes)"
      },
      validJSON: {
        type: Boolean,
        computed: "_computeValidJSON(parsedJSON)"
      },
      _entityId: {
        type: String,
        value: ""
      },
      _entityFilter: {
        type: String,
        value: ""
      },
      _stateFilter: {
        type: String,
        value: ""
      },
      _attributeFilter: {
        type: String,
        value: ""
      },
      _state: {
        type: String,
        value: ""
      },
      _stateAttributes: {
        type: String,
        value: ""
      },
      _showAttributes: {
        type: Boolean,
        value: true
      },
      _entities: {
        type: Array,
        computed: "computeEntities(hass, _entityFilter, _stateFilter, _attributeFilter)"
      }
    };
  }

  entitySelected(ev) {
    var state = ev.model.entity;
    this._entityId = state.entity_id;
    this._state = state.state;
    this._stateAttributes = Object(js_yaml__WEBPACK_IMPORTED_MODULE_5__["safeDump"])(state.attributes);
    ev.preventDefault();
  }

  entityIdChanged() {
    if (this._entityId === "") {
      this._state = "";
      this._stateAttributes = "";
      return;
    }

    var state = this.hass.states[this._entityId];

    if (!state) {
      return;
    }

    this._state = state.state;
    this._stateAttributes = Object(js_yaml__WEBPACK_IMPORTED_MODULE_5__["safeDump"])(state.attributes);
  }

  entityMoreInfo(ev) {
    ev.preventDefault();
    this.fire("hass-more-info", {
      entityId: ev.model.entity.entity_id
    });
  }

  handleSetState() {
    if (!this._entityId) {
      Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_8__["showAlertDialog"])(this, {
        text: this.hass.localize("ui.panel.developer-tools.tabs.states.alert_entity_field")
      });
      return;
    }

    this.hass.callApi("POST", "states/" + this._entityId, {
      state: this._state,
      attributes: this.parsedJSON
    });
  }

  computeEntities(hass, _entityFilter, _stateFilter, _attributeFilter) {
    return Object.keys(hass.states).map(function (key) {
      return hass.states[key];
    }).filter(function (value) {
      if (!value.entity_id.includes(_entityFilter.toLowerCase())) {
        return false;
      }

      if (!value.state.includes(_stateFilter.toLowerCase())) {
        return false;
      }

      if (_attributeFilter !== "") {
        var attributeFilter = _attributeFilter.toLowerCase();

        var colonIndex = attributeFilter.indexOf(":");
        var multiMode = colonIndex !== -1;
        var keyFilter = attributeFilter;
        var valueFilter = attributeFilter;

        if (multiMode) {
          // we need to filter keys and values separately
          keyFilter = attributeFilter.substring(0, colonIndex).trim();
          valueFilter = attributeFilter.substring(colonIndex + 1).trim();
        }

        var attributeKeys = Object.keys(value.attributes);

        for (var i = 0; i < attributeKeys.length; i++) {
          var key = attributeKeys[i];

          if (key.includes(keyFilter) && !multiMode) {
            return true; // in single mode we're already satisfied with this match
          }

          if (!key.includes(keyFilter) && multiMode) {
            continue;
          }

          var attributeValue = value.attributes[key];

          if (attributeValue !== null && JSON.stringify(attributeValue).toLowerCase().includes(valueFilter)) {
            return true;
          }
        } // there are no attributes where the key and/or value can be matched


        return false;
      }

      return true;
    }).sort(function (entityA, entityB) {
      if (entityA.entity_id < entityB.entity_id) {
        return -1;
      }

      if (entityA.entity_id > entityB.entity_id) {
        return 1;
      }

      return 0;
    });
  }

  computeShowEntitiesPlaceholder(_entities) {
    return _entities.length === 0;
  }

  computeShowAttributes(narrow, _showAttributes) {
    return !narrow && _showAttributes;
  }

  attributeString(entity) {
    var output = "";
    var i;
    var keys;
    var key;
    var value;

    for (i = 0, keys = Object.keys(entity.attributes); i < keys.length; i++) {
      key = keys[i];
      value = this.formatAttributeValue(entity.attributes[key]);
      output += `${key}: ${value}\n`;
    }

    return output;
  }

  formatAttributeValue(value) {
    if (Array.isArray(value) && value.some(val => val instanceof Object) || !Array.isArray(value) && value instanceof Object) {
      return `\n${Object(js_yaml__WEBPACK_IMPORTED_MODULE_5__["safeDump"])(value)}`;
    }

    return Array.isArray(value) ? value.join(", ") : value;
  }

  _computeParsedStateAttributes(stateAttributes) {
    try {
      return stateAttributes.trim() ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_5__["safeLoad"])(stateAttributes) : {};
    } catch (err) {
      return ERROR_SENTINEL;
    }
  }

  _computeValidJSON(parsedJSON) {
    return parsedJSON !== ERROR_SENTINEL;
  }

  _yamlChanged(ev) {
    this._stateAttributes = ev.detail.value;
  }

}

customElements.define("developer-tools-state", HaPanelDevState);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDguY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvc3RhdGUvZGV2ZWxvcGVyLXRvb2xzLXN0YXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCB0eXBlIHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tIFwibGl0LWh0bWxcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW50ZXJmYWNlIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZyB8IFRlbXBsYXRlUmVzdWx0O1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgZGlzbWlzc1RleHQ/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xuICBjYW5jZWw/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBpbnB1dExhYmVsPzogc3RyaW5nO1xuICBpbnB1dFR5cGU/OiBzdHJpbmc7XG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUGFyYW1zXG4gIGV4dGVuZHMgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zLFxuICAgIFByb21wdERpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xuICBjb25maXJtYXRpb24/OiBib29sZWFuO1xuICBwcm9tcHQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZEdlbmVyaWNEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb25maXJtYXRpb25cIiAqLyBcIi4vZGlhbG9nLWJveFwiKTtcblxuY29uc3Qgc2hvd0RpYWxvZ0hlbHBlciA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogRGlhbG9nUGFyYW1zLFxuICBleHRyYT86IHtcbiAgICBjb25maXJtYXRpb24/OiBEaWFsb2dQYXJhbXNbXCJjb25maXJtYXRpb25cIl07XG4gICAgcHJvbXB0PzogRGlhbG9nUGFyYW1zW1wicHJvbXB0XCJdO1xuICB9XG4pID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3Qgb3JpZ0NhbmNlbCA9IGRpYWxvZ1BhcmFtcy5jYW5jZWw7XG4gICAgY29uc3Qgb3JpZ0NvbmZpcm0gPSBkaWFsb2dQYXJhbXMuY29uZmlybTtcblxuICAgIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctYm94XCIsXG4gICAgICBkaWFsb2dJbXBvcnQ6IGxvYWRHZW5lcmljRGlhbG9nLFxuICAgICAgZGlhbG9nUGFyYW1zOiB7XG4gICAgICAgIC4uLmRpYWxvZ1BhcmFtcyxcbiAgICAgICAgLi4uZXh0cmEsXG4gICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG51bGwgOiBmYWxzZSk7XG4gICAgICAgICAgaWYgKG9yaWdDYW5jZWwpIHtcbiAgICAgICAgICAgIG9yaWdDYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IChvdXQpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBvdXQgOiB0cnVlKTtcbiAgICAgICAgICBpZiAob3JpZ0NvbmZpcm0pIHtcbiAgICAgICAgICAgIG9yaWdDb25maXJtKG91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93QWxlcnREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEFsZXJ0RGlhbG9nUGFyYW1zXG4pID0+IHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zKTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maXJtYXRpb25EaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBjb25maXJtYXRpb246IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBib29sZWFuXG4gID47XG5cbmV4cG9ydCBjb25zdCBzaG93UHJvbXB0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBQcm9tcHREaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgcHJvbXB0OiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgbnVsbCB8IHN0cmluZ1xuICA+O1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IHNhZmVEdW1wLCBzYWZlTG9hZCB9IGZyb20gXCJqcy15YW1sXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgeyBzaG93QWxlcnREaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmNvbnN0IEVSUk9SX1NFTlRJTkVMID0ge307XG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxEZXZTdGF0ZSBleHRlbmRzIEV2ZW50c01peGluKExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXRzIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVudGl0aWVzIHRoIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVudGl0aWVzIHRyIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVudGl0aWVzIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG4gICAgICAgIH1cblxuICAgICAgICAuZW50aXRpZXMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctYWx0ZXJuYXRpdmUtYmFja2dyb3VuZC1jb2xvciwgI2VlZSk7XG4gICAgICAgIH1cbiAgICAgICAgLmVudGl0aWVzIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVudGl0aWVzIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAuZW50aXRpZXMgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lbnRpdGllcyBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dHNcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc3RhdGVzLmRlc2NyaXB0aW9uMScpXV08YnIgLz5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zdGF0ZXMuZGVzY3JpcHRpb24yJyldXVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHZhbHVlPVwie3tfZW50aXR5SWR9fVwiXG4gICAgICAgICAgb24tY2hhbmdlPVwiZW50aXR5SWRDaGFuZ2VkXCJcbiAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc3RhdGVzLnN0YXRlJyldXVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIlxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e19zdGF0ZX19XCJcbiAgICAgICAgICBjbGFzcz1cInN0YXRlLWlucHV0XCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnN0YXRlcy5zdGF0ZV9hdHRyaWJ1dGVzJyldXVxuICAgICAgICA8L3A+XG4gICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgIG1vZGU9XCJ5YW1sXCJcbiAgICAgICAgICB2YWx1ZT1cIltbX3N0YXRlQXR0cmlidXRlc11dXCJcbiAgICAgICAgICBlcnJvcj1cIltbIXZhbGlkSlNPTl1dXCJcbiAgICAgICAgICBvbi12YWx1ZS1jaGFuZ2VkPVwiX3lhbWxDaGFuZ2VkXCJcbiAgICAgICAgPjwvaGEtY29kZS1lZGl0b3I+XG4gICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiaGFuZGxlU2V0U3RhdGVcIiBkaXNhYmxlZD1cIltbIXZhbGlkSlNPTl1dXCIgcmFpc2VkXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnN0YXRlcy5zZXRfc3RhdGUnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDE+XG4gICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnN0YXRlcy5jdXJyZW50X2VudGl0aWVzJyldXVxuICAgICAgPC9oMT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cImVudGl0aWVzXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+W1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc3RhdGVzLmVudGl0eScpXV08L3RoPlxuICAgICAgICAgIDx0aD5bW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zdGF0ZXMuc3RhdGUnKV1dPC90aD5cbiAgICAgICAgICA8dGggaGlkZGVuJD1cIltbbmFycm93XV1cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnN0YXRlcy5hdHRyaWJ1dGVzJyldXVxuICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94IGNoZWNrZWQ9XCJ7e19zaG93QXR0cmlidXRlc319XCI+PC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc3RhdGVzLmZpbHRlcl9lbnRpdGllcycpXV1cIlxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e19lbnRpdHlGaWx0ZXJ9fVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnN0YXRlcy5maWx0ZXJfc3RhdGVzJyldXVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X3N0YXRlRmlsdGVyfX1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGggaGlkZGVuJD1cIltbIWNvbXB1dGVTaG93QXR0cmlidXRlcyhuYXJyb3csIF9zaG93QXR0cmlidXRlcyldXVwiPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc3RhdGVzLmZpbHRlcl9hdHRyaWJ1dGVzJyldXVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X2F0dHJpYnV0ZUZpbHRlcn19XCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBoaWRkZW4kPVwiW1shY29tcHV0ZVNob3dFbnRpdGllc1BsYWNlaG9sZGVyKF9lbnRpdGllcyldXVwiPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc3RhdGVzLm5vX2VudGl0aWVzJyldXVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX2VudGl0aWVzXV1cIiBhcz1cImVudGl0eVwiPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJlbnRpdHlNb3JlSW5mb1wiXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6aW5mb3JtYXRpb24tb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc3RhdGVzLm1vcmVfaW5mbycpXV1cIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc3RhdGVzLm1vcmVfaW5mbycpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb24tY2xpY2s9XCJlbnRpdHlTZWxlY3RlZFwiPltbZW50aXR5LmVudGl0eV9pZF1dPC9hPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5bW2VudGl0eS5zdGF0ZV1dPC90ZD5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgIGlmPVwiW1tjb21wdXRlU2hvd0F0dHJpYnV0ZXMobmFycm93LCBfc2hvd0F0dHJpYnV0ZXMpXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGQ+W1thdHRyaWJ1dGVTdHJpbmcoZW50aXR5KV1dPC90ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGFibGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWRKU09OOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVQYXJzZWRTdGF0ZUF0dHJpYnV0ZXMoX3N0YXRlQXR0cmlidXRlcylcIixcbiAgICAgIH0sXG5cbiAgICAgIHZhbGlkSlNPTjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVZhbGlkSlNPTihwYXJzZWRKU09OKVwiLFxuICAgICAgfSxcblxuICAgICAgX2VudGl0eUlkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBfZW50aXR5RmlsdGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBfc3RhdGVGaWx0ZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9hdHRyaWJ1dGVGaWx0ZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zdGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3N0YXRlQXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3Nob3dBdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX2VudGl0aWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcImNvbXB1dGVFbnRpdGllcyhoYXNzLCBfZW50aXR5RmlsdGVyLCBfc3RhdGVGaWx0ZXIsIF9hdHRyaWJ1dGVGaWx0ZXIpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBlbnRpdHlTZWxlY3RlZChldikge1xuICAgIHZhciBzdGF0ZSA9IGV2Lm1vZGVsLmVudGl0eTtcbiAgICB0aGlzLl9lbnRpdHlJZCA9IHN0YXRlLmVudGl0eV9pZDtcbiAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlLnN0YXRlO1xuICAgIHRoaXMuX3N0YXRlQXR0cmlidXRlcyA9IHNhZmVEdW1wKHN0YXRlLmF0dHJpYnV0ZXMpO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBlbnRpdHlJZENoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuX2VudGl0eUlkID09PSBcIlwiKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IFwiXCI7XG4gICAgICB0aGlzLl9zdGF0ZUF0dHJpYnV0ZXMgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3RhdGUgPSB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuX2VudGl0eUlkXTtcbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlID0gc3RhdGUuc3RhdGU7XG4gICAgdGhpcy5fc3RhdGVBdHRyaWJ1dGVzID0gc2FmZUR1bXAoc3RhdGUuYXR0cmlidXRlcyk7XG4gIH1cblxuICBlbnRpdHlNb3JlSW5mbyhldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogZXYubW9kZWwuZW50aXR5LmVudGl0eV9pZCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNldFN0YXRlKCkge1xuICAgIGlmICghdGhpcy5fZW50aXR5SWQpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnN0YXRlcy5hbGVydF9lbnRpdHlfZmllbGRcIlxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBcInN0YXRlcy9cIiArIHRoaXMuX2VudGl0eUlkLCB7XG4gICAgICBzdGF0ZTogdGhpcy5fc3RhdGUsXG4gICAgICBhdHRyaWJ1dGVzOiB0aGlzLnBhcnNlZEpTT04sXG4gICAgfSk7XG4gIH1cblxuICBjb21wdXRlRW50aXRpZXMoaGFzcywgX2VudGl0eUZpbHRlciwgX3N0YXRlRmlsdGVyLCBfYXR0cmlidXRlRmlsdGVyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKVxuICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBoYXNzLnN0YXRlc1trZXldO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUuZW50aXR5X2lkLmluY2x1ZGVzKF9lbnRpdHlGaWx0ZXIudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbHVlLnN0YXRlLmluY2x1ZGVzKF9zdGF0ZUZpbHRlci50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfYXR0cmlidXRlRmlsdGVyICE9PSBcIlwiKSB7XG4gICAgICAgICAgdmFyIGF0dHJpYnV0ZUZpbHRlciA9IF9hdHRyaWJ1dGVGaWx0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB2YXIgY29sb25JbmRleCA9IGF0dHJpYnV0ZUZpbHRlci5pbmRleE9mKFwiOlwiKTtcbiAgICAgICAgICB2YXIgbXVsdGlNb2RlID0gY29sb25JbmRleCAhPT0gLTE7XG5cbiAgICAgICAgICB2YXIga2V5RmlsdGVyID0gYXR0cmlidXRlRmlsdGVyO1xuICAgICAgICAgIHZhciB2YWx1ZUZpbHRlciA9IGF0dHJpYnV0ZUZpbHRlcjtcblxuICAgICAgICAgIGlmIChtdWx0aU1vZGUpIHtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gZmlsdGVyIGtleXMgYW5kIHZhbHVlcyBzZXBhcmF0ZWx5XG4gICAgICAgICAgICBrZXlGaWx0ZXIgPSBhdHRyaWJ1dGVGaWx0ZXIuc3Vic3RyaW5nKDAsIGNvbG9uSW5kZXgpLnRyaW0oKTtcbiAgICAgICAgICAgIHZhbHVlRmlsdGVyID0gYXR0cmlidXRlRmlsdGVyLnN1YnN0cmluZyhjb2xvbkluZGV4ICsgMSkudHJpbSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBhdHRyaWJ1dGVLZXlzID0gT2JqZWN0LmtleXModmFsdWUuYXR0cmlidXRlcyk7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhdHRyaWJ1dGVLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKGtleUZpbHRlcikgJiYgIW11bHRpTW9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gaW4gc2luZ2xlIG1vZGUgd2UncmUgYWxyZWFkeSBzYXRpc2ZpZWQgd2l0aCB0aGlzIG1hdGNoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWtleS5pbmNsdWRlcyhrZXlGaWx0ZXIpICYmIG11bHRpTW9kZSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gdmFsdWUuYXR0cmlidXRlc1trZXldO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGF0dHJpYnV0ZVZhbHVlKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlRmlsdGVyKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRoZXJlIGFyZSBubyBhdHRyaWJ1dGVzIHdoZXJlIHRoZSBrZXkgYW5kL29yIHZhbHVlIGNhbiBiZSBtYXRjaGVkXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KVxuICAgICAgLnNvcnQoZnVuY3Rpb24gKGVudGl0eUEsIGVudGl0eUIpIHtcbiAgICAgICAgaWYgKGVudGl0eUEuZW50aXR5X2lkIDwgZW50aXR5Qi5lbnRpdHlfaWQpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudGl0eUEuZW50aXR5X2lkID4gZW50aXR5Qi5lbnRpdHlfaWQpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZVNob3dFbnRpdGllc1BsYWNlaG9sZGVyKF9lbnRpdGllcykge1xuICAgIHJldHVybiBfZW50aXRpZXMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgY29tcHV0ZVNob3dBdHRyaWJ1dGVzKG5hcnJvdywgX3Nob3dBdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuICFuYXJyb3cgJiYgX3Nob3dBdHRyaWJ1dGVzO1xuICB9XG5cbiAgYXR0cmlidXRlU3RyaW5nKGVudGl0eSkge1xuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIHZhciBpO1xuICAgIHZhciBrZXlzO1xuICAgIHZhciBrZXk7XG4gICAgdmFyIHZhbHVlO1xuXG4gICAgZm9yIChpID0gMCwga2V5cyA9IE9iamVjdC5rZXlzKGVudGl0eS5hdHRyaWJ1dGVzKTsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0QXR0cmlidXRlVmFsdWUoZW50aXR5LmF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICBvdXRwdXQgKz0gYCR7a2V5fTogJHt2YWx1ZX1cXG5gO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgZm9ybWF0QXR0cmlidXRlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAoXG4gICAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuc29tZSgodmFsKSA9PiB2YWwgaW5zdGFuY2VvZiBPYmplY3QpKSB8fFxuICAgICAgKCFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdClcbiAgICApIHtcbiAgICAgIHJldHVybiBgXFxuJHtzYWZlRHVtcCh2YWx1ZSl9YDtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbihcIiwgXCIpIDogdmFsdWU7XG4gIH1cblxuICBfY29tcHV0ZVBhcnNlZFN0YXRlQXR0cmlidXRlcyhzdGF0ZUF0dHJpYnV0ZXMpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHN0YXRlQXR0cmlidXRlcy50cmltKCkgPyBzYWZlTG9hZChzdGF0ZUF0dHJpYnV0ZXMpIDoge307XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gRVJST1JfU0VOVElORUw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVWYWxpZEpTT04ocGFyc2VkSlNPTikge1xuICAgIHJldHVybiBwYXJzZWRKU09OICE9PSBFUlJPUl9TRU5USU5FTDtcbiAgfVxuXG4gIF95YW1sQ2hhbmdlZChldikge1xuICAgIHRoaXMuX3N0YXRlQXR0cmlidXRlcyA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkZXZlbG9wZXItdG9vbHMtc3RhdGVcIiwgSGFQYW5lbERldlN0YXRlKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBLDZnQkFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFIQTtBQW9CQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBQUE7QUFJQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBdUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFsREE7QUF3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuWEE7QUFDQTtBQW9YQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
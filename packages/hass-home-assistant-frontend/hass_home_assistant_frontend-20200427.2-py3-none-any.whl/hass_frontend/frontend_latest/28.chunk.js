(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[28],{

/***/ "./src/components/buttons/ha-call-service-button.js":
/*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");

/* eslint-plugin-disable lit */





/*
 * @appliesMixin EventsMixin
 */

class HaCallServiceButton extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        tabindex="0"
        ><slot></slot
      ></ha-progress-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      domain: {
        type: String
      },
      service: {
        type: String
      },
      serviceData: {
        type: Object,
        value: {}
      },
      confirmation: {
        type: String
      }
    };
  }

  callService() {
    this.progress = true; // eslint-disable-next-line @typescript-eslint/no-this-alias

    var el = this;
    var eventData = {
      domain: this.domain,
      service: this.service,
      serviceData: this.serviceData
    };
    this.hass.callService(this.domain, this.service, this.serviceData).then(function () {
      el.progress = false;
      el.$.progress.actionSuccess();
      eventData.success = true;
    }, function () {
      el.progress = false;
      el.$.progress.actionError();
      eventData.success = false;
    }).then(function () {
      el.fire("hass-service-called", eventData);
    });
  }

  buttonTapped() {
    if (this.confirmation) {
      Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_2__["showConfirmationDialog"])(this, {
        text: this.confirmation,
        confirm: () => this.callService()
      });
    } else {
      this.callService();
    }
  }

}

customElements.define("ha-call-service-button", HaCallServiceButton);

/***/ }),

/***/ "./src/components/buttons/ha-progress-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



/* eslint-plugin-disable lit */



class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }

  tempClass(className) {
    var classList = this.$.container.classList;
    classList.add(className);
    setTimeout(() => {
      classList.remove(className);
    }, 1000);
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.buttonTapped(ev));
  }

  buttonTapped(ev) {
    if (this.progress) ev.stopPropagation();
  }

  actionSuccess() {
    this.tempClass("success");
  }

  actionError() {
    this.tempClass("error");
  }

  computeDisabled(disabled, progress) {
    return disabled || progress;
  }

}

customElements.define("ha-progress-button", HaProgressButton);

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

/***/ "./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts":
/*!*********************************************************************************!*\
  !*** ./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts ***!
  \*********************************************************************************/
/*! exports provided: createStyledHuiElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyledHuiElement", function() { return createStyledHuiElement; });
/* harmony import */ var _create_element_create_hui_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../create-element/create-hui-element */ "./src/panels/lovelace/create-element/create-hui-element.ts");

function createStyledHuiElement(elementConfig) {
  const element = Object(_create_element_create_hui_element__WEBPACK_IMPORTED_MODULE_0__["createHuiElement"])(elementConfig); // keep conditional card as a transparent container so let its position remain static

  if (element.tagName !== "HUI-CONDITIONAL-ELEMENT") {
    element.classList.add("element");
  }

  if (elementConfig.style) {
    Object.keys(elementConfig.style).forEach(prop => {
      element.style.setProperty(prop, elementConfig.style[prop]);
    });
  }

  return element;
}

/***/ }),

/***/ "./src/panels/lovelace/common/compute-tooltip.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/compute-tooltip.ts ***!
  \*******************************************************/
/*! exports provided: computeTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeTooltip", function() { return computeTooltip; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");


function computeActionTooltip(hass, state, config, isHold) {
  if (!config || !config.action || config.action === "none") {
    return "";
  }

  let tooltip = (isHold ? hass.localize("ui.panel.lovelace.cards.picture-elements.hold") : hass.localize("ui.panel.lovelace.cards.picture-elements.tap")) + " ";

  switch (config.action) {
    case "navigate":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.navigate_to", "location", config.navigation_path)}`;
      break;

    case "url":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.url", "url_path", config.url_path)}`;
      break;

    case "toggle":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.toggle", "name", state)}`;
      break;

    case "call-service":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.call_service", "name", config.service)}`;
      break;

    case "more-info":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.more_info", "name", state)}`;
      break;
  }

  return tooltip;
}

const computeTooltip = (hass, config) => {
  if (config.title === null) {
    return "";
  }

  if (config.title) {
    return config.title;
  }

  let stateName = "";
  let tooltip = "";

  if (config.entity) {
    stateName = config.entity in hass.states ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(hass.states[config.entity]) : config.entity;
  }

  if (!config.tap_action && !config.hold_action) {
    return stateName;
  }

  const tapTooltip = config.tap_action ? computeActionTooltip(hass, stateName, config.tap_action, false) : "";
  const holdTooltip = config.hold_action ? computeActionTooltip(hass, stateName, config.hold_action, true) : "";
  const newline = tapTooltip && holdTooltip ? "\n" : "";
  tooltip = tapTooltip + newline + holdTooltip;
  return tooltip;
};

/***/ }),

/***/ "./src/panels/lovelace/common/validate-condition.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/common/validate-condition.ts ***!
  \**********************************************************/
/*! exports provided: checkConditionsMet, validateConditionalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkConditionsMet", function() { return checkConditionsMet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConditionalConfig", function() { return validateConditionalConfig; });
function checkConditionsMet(conditions, hass) {
  return conditions.every(c => {
    const state = hass.states[c.entity] ? hass.states[c.entity].state : "unavailable";
    return c.state ? state === c.state : state !== c.state_not;
  });
}
function validateConditionalConfig(conditions) {
  return conditions.every(c => c.entity && (c.state || c.state_not));
}

/***/ }),

/***/ "./src/panels/lovelace/create-element/create-hui-element.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/create-element/create-hui-element.ts ***!
  \******************************************************************/
/*! exports provided: createHuiElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHuiElement", function() { return createHuiElement; });
/* harmony import */ var _elements_hui_conditional_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/hui-conditional-element */ "./src/panels/lovelace/elements/hui-conditional-element.ts");
/* harmony import */ var _elements_hui_icon_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/hui-icon-element */ "./src/panels/lovelace/elements/hui-icon-element.ts");
/* harmony import */ var _elements_hui_image_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/hui-image-element */ "./src/panels/lovelace/elements/hui-image-element.ts");
/* harmony import */ var _elements_hui_service_button_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/hui-service-button-element */ "./src/panels/lovelace/elements/hui-service-button-element.ts");
/* harmony import */ var _elements_hui_state_badge_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/hui-state-badge-element */ "./src/panels/lovelace/elements/hui-state-badge-element.ts");
/* harmony import */ var _elements_hui_state_icon_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/hui-state-icon-element */ "./src/panels/lovelace/elements/hui-state-icon-element.ts");
/* harmony import */ var _elements_hui_state_label_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/hui-state-label-element */ "./src/panels/lovelace/elements/hui-state-label-element.ts");
/* harmony import */ var _create_element_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-element-base */ "./src/panels/lovelace/create-element/create-element-base.ts");








const ALWAYS_LOADED_TYPES = new Set(["conditional", "icon", "image", "service-button", "state-badge", "state-icon", "state-label"]);
const createHuiElement = config => Object(_create_element_base__WEBPACK_IMPORTED_MODULE_7__["createLovelaceElement"])("element", config, ALWAYS_LOADED_TYPES);

/***/ }),

/***/ "./src/panels/lovelace/elements/hui-conditional-element.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-conditional-element.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/picture-elements/create-styled-hui-element */ "./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts");
/* harmony import */ var _common_validate_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/validate-condition */ "./src/panels/lovelace/common/validate-condition.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class HuiConditionalElement extends HTMLElement {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_hass", void 0);

    _defineProperty(this, "_config", void 0);

    _defineProperty(this, "_elements", []);
  }

  setConfig(config) {
    if (!config.conditions || !Array.isArray(config.conditions) || !config.elements || !Array.isArray(config.elements) || !Object(_common_validate_condition__WEBPACK_IMPORTED_MODULE_1__["validateConditionalConfig"])(config.conditions)) {
      throw new Error("Error in card configuration.");
    }

    if (this._elements.length > 0) {
      this._elements.forEach(el => {
        if (el.parentElement) {
          el.parentElement.removeChild(el);
        }
      });

      this._elements = [];
    }

    this._config = config;

    this._config.elements.forEach(elementConfig => {
      this._elements.push(Object(_cards_picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_0__["createStyledHuiElement"])(elementConfig));
    });

    this.updateElements();
  }

  set hass(hass) {
    this._hass = hass;
    this.updateElements();
  }

  updateElements() {
    if (!this._hass || !this._config) {
      return;
    }

    const visible = Object(_common_validate_condition__WEBPACK_IMPORTED_MODULE_1__["checkConditionsMet"])(this._config.conditions, this._hass);

    this._elements.forEach(el => {
      if (visible) {
        el.hass = this._hass;

        if (!el.parentElement) {
          this.appendChild(el);
        }
      } else if (el.parentElement) {
        el.parentElement.removeChild(el);
      }
    });
  }

}

customElements.define("hui-conditional-element", HuiConditionalElement);

/***/ }),

/***/ "./src/panels/lovelace/elements/hui-icon-element.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-icon-element.ts ***!
  \**********************************************************/
/*! exports provided: HuiIconElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiIconElement", function() { return HuiIconElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/handle-action */ "./src/panels/lovelace/common/handle-action.ts");
/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-action */ "./src/panels/lovelace/common/has-action.ts");
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








let HuiIconElement = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-icon-element")], function (_initialize, _LitElement) {
  class HuiIconElement extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiIconElement,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config.icon) {
          throw Error("Invalid Configuration: 'icon' required");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-icon
        .icon="${this._config.icon}"
        .title="${Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__["computeTooltip"])(this.hass, this._config)}"
        @action=${this._handleAction}
        .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_4__["actionHandler"])({
          hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.hold_action),
          hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.double_tap_action)
        })}
        tabindex=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.tap_action) ? "0" : undefined)}
      ></ha-icon>
    `;
      }
    }, {
      kind: "method",
      key: "_handleAction",
      value: function _handleAction(ev) {
        Object(_common_handle_action__WEBPACK_IMPORTED_MODULE_5__["handleAction"])(this, this.hass, this._config, ev.detail.action);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        cursor: pointer;
      }
      ha-icon:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/elements/hui-image-element.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-image-element.ts ***!
  \***********************************************************/
/*! exports provided: HuiImageElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiImageElement", function() { return HuiImageElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/handle-action */ "./src/panels/lovelace/common/handle-action.ts");
/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-action */ "./src/panels/lovelace/common/has-action.ts");
/* harmony import */ var _components_hui_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-image */ "./src/panels/lovelace/components/hui-image.ts");
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








let HuiImageElement = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-image-element")], function (_initialize, _LitElement) {
  class HuiImageElement extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiImageElement,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config) {
          throw Error("Error in element configuration");
        } // eslint-disable-next-line wc/no-self-class


        this.classList.toggle("clickable", config.tap_action && config.tap_action.action !== "none");
        this._config = config;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hui-image
        .hass=${this.hass}
        .entity="${this._config.entity}"
        .image="${this._config.image}"
        .stateImage="${this._config.state_image}"
        .cameraImage="${this._config.camera_image}"
        .filter="${this._config.filter}"
        .stateFilter="${this._config.state_filter}"
        .title="${Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_2__["computeTooltip"])(this.hass, this._config)}"
        .aspectRatio="${this._config.aspect_ratio}"
        @action=${this._handleAction}
        .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_3__["actionHandler"])({
          hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_5__["hasAction"])(this._config.hold_action),
          hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_5__["hasAction"])(this._config.double_tap_action)
        })}
        tabindex=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(Object(_common_has_action__WEBPACK_IMPORTED_MODULE_5__["hasAction"])(this._config.tap_action) ? "0" : undefined)}
      ></hui-image>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host(.clickable) {
        cursor: pointer;
        overflow: hidden;
        -webkit-touch-callout: none !important;
      }
      hui-image {
        -webkit-user-select: none !important;
      }
      hui-image:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_handleAction",
      value: function _handleAction(ev) {
        Object(_common_handle_action__WEBPACK_IMPORTED_MODULE_4__["handleAction"])(this, this.hass, this._config, ev.detail.action);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/elements/hui-service-button-element.ts":
/*!********************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-service-button-element.ts ***!
  \********************************************************************/
/*! exports provided: HuiServiceButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiServiceButtonElement", function() { return HuiServiceButtonElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
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



let HuiServiceButtonElement = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-service-button-element")], function (_initialize, _LitElement) {
  class HuiServiceButtonElement extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiServiceButtonElement,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      key: "_domain",
      value: void 0
    }, {
      kind: "field",
      key: "_service",
      value: void 0
    }, {
      kind: "get",
      static: true,
      key: "properties",
      value: function properties() {
        return {
          _config: {}
        };
      }
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config || !config.service) {
          throw Error("Invalid Configuration: 'service' required");
        }

        [this._domain, this._service] = config.service.split(".", 2);

        if (!this._domain) {
          throw Error("Invalid Configuration: 'service' does not have a domain");
        }

        if (!this._service) {
          throw Error("Invalid Configuration: 'service' does not have a service name");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-call-service-button
        .hass=${this.hass}
        .domain="${this._domain}"
        .service="${this._service}"
        .serviceData="${this._config.service_data}"
        >${this._config.title}</ha-call-service-button
      >
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-call-service-button {
        color: var(--primary-color);
        white-space: nowrap;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/elements/hui-state-badge-element.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-state-badge-element.ts ***!
  \*****************************************************************/
/*! exports provided: HuiStateBadgeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiStateBadgeElement", function() { return HuiStateBadgeElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/handle-action */ "./src/panels/lovelace/common/handle-action.ts");
/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-action */ "./src/panels/lovelace/common/has-action.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
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










let HuiStateBadgeElement = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-state-badge-element")], function (_initialize, _LitElement) {
  class HuiStateBadgeElement extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiStateBadgeElement,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config.entity) {
          throw Error("Invalid Configuration: 'entity' required");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const stateObj = this.hass.states[this._config.entity];

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hui-warning-element
          label="${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}"
        ></hui-warning-element>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-state-label-badge
        .hass=${this.hass}
        .state="${stateObj}"
        .title="${this._config.title === undefined ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj) : this._config.title === null ? "" : this._config.title}"
        @action=${this._handleAction}
        .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_4__["actionHandler"])({
          hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.hold_action),
          hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.double_tap_action)
        })}
        tabindex=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.tap_action) ? "0" : undefined)}
      ></ha-state-label-badge>
    `;
      }
    }, {
      kind: "method",
      key: "_handleAction",
      value: function _handleAction(ev) {
        Object(_common_handle_action__WEBPACK_IMPORTED_MODULE_5__["handleAction"])(this, this.hass, this._config, ev.detail.action);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/elements/hui-state-icon-element.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-state-icon-element.ts ***!
  \****************************************************************/
/*! exports provided: HuiStateIconElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiStateIconElement", function() { return HuiStateIconElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/handle-action */ "./src/panels/lovelace/common/handle-action.ts");
/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-action */ "./src/panels/lovelace/common/has-action.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
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










let HuiStateIconElement = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-state-icon-element")], function (_initialize, _LitElement) {
  class HuiStateIconElement extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiStateIconElement,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config.entity) {
          throw Error("Invalid Configuration: 'entity' required");
        }

        this._config = Object.assign({
          state_color: true
        }, config);
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const stateObj = this.hass.states[this._config.entity];

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}
        ></hui-warning-element>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <state-badge
        .stateObj=${stateObj}
        .title="${Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__["computeTooltip"])(this.hass, this._config)}"
        @action=${this._handleAction}
        .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_4__["actionHandler"])({
          hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.hold_action),
          hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.double_tap_action)
        })}
        tabindex=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.tap_action) ? "0" : undefined)}
        .overrideIcon=${this._config.icon}
        .stateColor=${this._config.state_color}
      ></state-badge>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        cursor: pointer;
      }
      state-badge:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_handleAction",
      value: function _handleAction(ev) {
        Object(_common_handle_action__WEBPACK_IMPORTED_MODULE_5__["handleAction"])(this, this.hass, this._config, ev.detail.action);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/elements/hui-state-label-element.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-state-label-element.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/handle-action */ "./src/panels/lovelace/common/handle-action.ts");
/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-action */ "./src/panels/lovelace/common/has-action.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
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











let HuiStateLabelElement = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-state-label-element")], function (_initialize, _LitElement) {
  class HuiStateLabelElement extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiStateLabelElement,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config.entity) {
          throw Error("Invalid Configuration: 'entity' required");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const stateObj = this.hass.states[this._config.entity];

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}
        ></hui-warning-element>
      `;
        }

        if (this._config.attribute && !stateObj.attributes[this._config.attribute]) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.attribute_not_found", "attribute", this._config.attribute, "entity", this._config.entity)}
        ></hui-warning-element>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div
        .title="${Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__["computeTooltip"])(this.hass, this._config)}"
        @action=${this._handleAction}
        .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_4__["actionHandler"])({
          hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.hold_action),
          hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.double_tap_action)
        })}
        tabindex=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(Object(_common_has_action__WEBPACK_IMPORTED_MODULE_6__["hasAction"])(this._config.tap_action) ? "0" : undefined)}
      >
        ${this._config.prefix}${!this._config.attribute ? Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language) : stateObj.attributes[this._config.attribute]}${this._config.suffix}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_handleAction",
      value: function _handleAction(ev) {
        Object(_common_handle_action__WEBPACK_IMPORTED_MODULE_5__["handleAction"])(this, this.hass, this._config, ev.detail.action);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        cursor: pointer;
      }
      div {
        padding: 8px;
        white-space: nowrap;
      }
      div:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1wcm9ncmVzcy1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jYXJkcy9waWN0dXJlLWVsZW1lbnRzL2NyZWF0ZS1zdHlsZWQtaHVpLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vY29tcHV0ZS10b29sdGlwLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3ZhbGlkYXRlLWNvbmRpdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NyZWF0ZS1lbGVtZW50L2NyZWF0ZS1odWktZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VsZW1lbnRzL2h1aS1jb25kaXRpb25hbC1lbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWxlbWVudHMvaHVpLWljb24tZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VsZW1lbnRzL2h1aS1pbWFnZS1lbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWxlbWVudHMvaHVpLXNlcnZpY2UtYnV0dG9uLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lbGVtZW50cy9odWktc3RhdGUtYmFkZ2UtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VsZW1lbnRzL2h1aS1zdGF0ZS1pY29uLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lbGVtZW50cy9odWktc3RhdGUtbGFiZWwtZWxlbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyB9IGZyb20gXCIuLi8uLi9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgXCIuL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNhbGxTZXJ2aWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgaWQ9XCJwcm9ncmVzc1wiXG4gICAgICAgIHByb2dyZXNzPVwiW1twcm9ncmVzc11dXCJcbiAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICA+PHNsb3Q+PC9zbG90XG4gICAgICA+PC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpcm1hdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjYWxsU2VydmljZSgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgc2VydmljZTogdGhpcy5zZXJ2aWNlLFxuICAgICAgc2VydmljZURhdGE6IHRoaXMuc2VydmljZURhdGEsXG4gICAgfTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2UsIHRoaXMuc2VydmljZURhdGEpXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25TdWNjZXNzKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvbkVycm9yKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBlbC5maXJlKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICBidXR0b25UYXBwZWQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlybWF0aW9uKSB7XG4gICAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5jb25maXJtYXRpb24sXG4gICAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuY2FsbFNlcnZpY2UoKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbGxTZXJ2aWNlKCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhbGwtc2VydmljZS1idXR0b25cIiwgSGFDYWxsU2VydmljZUJ1dHRvbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVByb2dyZXNzQnV0dG9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3MgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcHJvZ3Jlc3NdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5idXR0b25UYXBwZWQoZXYpKTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZChldikge1xuICAgIGlmICh0aGlzLnByb2dyZXNzKSBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFjdGlvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJzdWNjZXNzXCIpO1xuICB9XG5cbiAgYWN0aW9uRXJyb3IoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJlcnJvclwiKTtcbiAgfVxuXG4gIGNvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgcHJvZ3Jlc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcHJvZ3Jlc3MtYnV0dG9uXCIsIEhhUHJvZ3Jlc3NCdXR0b24pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgY3JlYXRlSHVpRWxlbWVudCB9IGZyb20gXCIuLi8uLi9jcmVhdGUtZWxlbWVudC9jcmVhdGUtaHVpLWVsZW1lbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlRWxlbWVudCwgTG92ZWxhY2VFbGVtZW50Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHlsZWRIdWlFbGVtZW50KFxuICBlbGVtZW50Q29uZmlnOiBMb3ZlbGFjZUVsZW1lbnRDb25maWdcbik6IExvdmVsYWNlRWxlbWVudCB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVIdWlFbGVtZW50KGVsZW1lbnRDb25maWcpIGFzIExvdmVsYWNlRWxlbWVudDtcbiAgLy8ga2VlcCBjb25kaXRpb25hbCBjYXJkIGFzIGEgdHJhbnNwYXJlbnQgY29udGFpbmVyIHNvIGxldCBpdHMgcG9zaXRpb24gcmVtYWluIHN0YXRpY1xuICBpZiAoZWxlbWVudC50YWdOYW1lICE9PSBcIkhVSS1DT05ESVRJT05BTC1FTEVNRU5UXCIpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50XCIpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnRDb25maWcuc3R5bGUpIHtcbiAgICBPYmplY3Qua2V5cyhlbGVtZW50Q29uZmlnLnN0eWxlKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3AsIGVsZW1lbnRDb25maWcuc3R5bGVbcHJvcF0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBBY3Rpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgQ29uZmlnIHtcbiAgZW50aXR5Pzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdGFwX2FjdGlvbj86IEFjdGlvbkNvbmZpZztcbiAgaG9sZF9hY3Rpb24/OiBBY3Rpb25Db25maWc7XG4gIGRvdWJsZV90YXBfYWN0aW9uPzogQWN0aW9uQ29uZmlnO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlQWN0aW9uVG9vbHRpcChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhdGU6IHN0cmluZyxcbiAgY29uZmlnOiBBY3Rpb25Db25maWcsXG4gIGlzSG9sZDogYm9vbGVhblxuKSB7XG4gIGlmICghY29uZmlnIHx8ICFjb25maWcuYWN0aW9uIHx8IGNvbmZpZy5hY3Rpb24gPT09IFwibm9uZVwiKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBsZXQgdG9vbHRpcCA9XG4gICAgKGlzSG9sZFxuICAgICAgPyBoYXNzLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UuY2FyZHMucGljdHVyZS1lbGVtZW50cy5ob2xkXCIpXG4gICAgICA6IGhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5sb3ZlbGFjZS5jYXJkcy5waWN0dXJlLWVsZW1lbnRzLnRhcFwiKSkgKyBcIiBcIjtcblxuICBzd2l0Y2ggKGNvbmZpZy5hY3Rpb24pIHtcbiAgICBjYXNlIFwibmF2aWdhdGVcIjpcbiAgICAgIHRvb2x0aXAgKz0gYCR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5jYXJkcy5waWN0dXJlLWVsZW1lbnRzLm5hdmlnYXRlX3RvXCIsXG4gICAgICAgIFwibG9jYXRpb25cIixcbiAgICAgICAgY29uZmlnLm5hdmlnYXRpb25fcGF0aFxuICAgICAgKX1gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInVybFwiOlxuICAgICAgdG9vbHRpcCArPSBgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmNhcmRzLnBpY3R1cmUtZWxlbWVudHMudXJsXCIsXG4gICAgICAgIFwidXJsX3BhdGhcIixcbiAgICAgICAgY29uZmlnLnVybF9wYXRoXG4gICAgICApfWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidG9nZ2xlXCI6XG4gICAgICB0b29sdGlwICs9IGAke2hhc3MubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuY2FyZHMucGljdHVyZS1lbGVtZW50cy50b2dnbGVcIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIHN0YXRlXG4gICAgICApfWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsbC1zZXJ2aWNlXCI6XG4gICAgICB0b29sdGlwICs9IGAke2hhc3MubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuY2FyZHMucGljdHVyZS1lbGVtZW50cy5jYWxsX3NlcnZpY2VcIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlXG4gICAgICApfWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibW9yZS1pbmZvXCI6XG4gICAgICB0b29sdGlwICs9IGAke2hhc3MubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuY2FyZHMucGljdHVyZS1lbGVtZW50cy5tb3JlX2luZm9cIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIHN0YXRlXG4gICAgICApfWA7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB0b29sdGlwO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZVRvb2x0aXAgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgY29uZmlnOiBDb25maWcpOiBzdHJpbmcgPT4ge1xuICBpZiAoY29uZmlnLnRpdGxlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBpZiAoY29uZmlnLnRpdGxlKSB7XG4gICAgcmV0dXJuIGNvbmZpZy50aXRsZTtcbiAgfVxuXG4gIGxldCBzdGF0ZU5hbWUgPSBcIlwiO1xuICBsZXQgdG9vbHRpcCA9IFwiXCI7XG5cbiAgaWYgKGNvbmZpZy5lbnRpdHkpIHtcbiAgICBzdGF0ZU5hbWUgPVxuICAgICAgY29uZmlnLmVudGl0eSBpbiBoYXNzLnN0YXRlc1xuICAgICAgICA/IGNvbXB1dGVTdGF0ZU5hbWUoaGFzcy5zdGF0ZXNbY29uZmlnLmVudGl0eV0pXG4gICAgICAgIDogY29uZmlnLmVudGl0eTtcbiAgfVxuXG4gIGlmICghY29uZmlnLnRhcF9hY3Rpb24gJiYgIWNvbmZpZy5ob2xkX2FjdGlvbikge1xuICAgIHJldHVybiBzdGF0ZU5hbWU7XG4gIH1cblxuICBjb25zdCB0YXBUb29sdGlwID0gY29uZmlnLnRhcF9hY3Rpb25cbiAgICA/IGNvbXB1dGVBY3Rpb25Ub29sdGlwKGhhc3MsIHN0YXRlTmFtZSwgY29uZmlnLnRhcF9hY3Rpb24sIGZhbHNlKVxuICAgIDogXCJcIjtcbiAgY29uc3QgaG9sZFRvb2x0aXAgPSBjb25maWcuaG9sZF9hY3Rpb25cbiAgICA/IGNvbXB1dGVBY3Rpb25Ub29sdGlwKGhhc3MsIHN0YXRlTmFtZSwgY29uZmlnLmhvbGRfYWN0aW9uLCB0cnVlKVxuICAgIDogXCJcIjtcblxuICBjb25zdCBuZXdsaW5lID0gdGFwVG9vbHRpcCAmJiBob2xkVG9vbHRpcCA/IFwiXFxuXCIgOiBcIlwiO1xuXG4gIHRvb2x0aXAgPSB0YXBUb29sdGlwICsgbmV3bGluZSArIGhvbGRUb29sdGlwO1xuXG4gIHJldHVybiB0b29sdGlwO1xufTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25kaXRpb24ge1xuICBlbnRpdHk6IHN0cmluZztcbiAgc3RhdGU/OiBzdHJpbmc7XG4gIHN0YXRlX25vdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9uc01ldChcbiAgY29uZGl0aW9uczogQ29uZGl0aW9uW10sXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnRcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29uZGl0aW9ucy5ldmVyeSgoYykgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbYy5lbnRpdHldXG4gICAgICA/IGhhc3MhLnN0YXRlc1tjLmVudGl0eV0uc3RhdGVcbiAgICAgIDogXCJ1bmF2YWlsYWJsZVwiO1xuXG4gICAgcmV0dXJuIGMuc3RhdGUgPyBzdGF0ZSA9PT0gYy5zdGF0ZSA6IHN0YXRlICE9PSBjLnN0YXRlX25vdDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbmRpdGlvbmFsQ29uZmlnKGNvbmRpdGlvbnM6IENvbmRpdGlvbltdKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb25kaXRpb25zLmV2ZXJ5KFxuICAgIChjKSA9PiAoKGMuZW50aXR5ICYmIChjLnN0YXRlIHx8IGMuc3RhdGVfbm90KSkgYXMgdW5rbm93bikgYXMgYm9vbGVhblxuICApO1xufVxuIiwiaW1wb3J0IFwiLi4vZWxlbWVudHMvaHVpLWNvbmRpdGlvbmFsLWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2VsZW1lbnRzL2h1aS1pY29uLWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2VsZW1lbnRzL2h1aS1pbWFnZS1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi9lbGVtZW50cy9odWktc2VydmljZS1idXR0b24tZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vZWxlbWVudHMvaHVpLXN0YXRlLWJhZGdlLWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2VsZW1lbnRzL2h1aS1zdGF0ZS1pY29uLWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2VsZW1lbnRzL2h1aS1zdGF0ZS1sYWJlbC1lbGVtZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUVsZW1lbnRDb25maWcgfSBmcm9tIFwiLi4vZWxlbWVudHMvdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUxvdmVsYWNlRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1lbGVtZW50LWJhc2VcIjtcblxuY29uc3QgQUxXQVlTX0xPQURFRF9UWVBFUyA9IG5ldyBTZXQoW1xuICBcImNvbmRpdGlvbmFsXCIsXG4gIFwiaWNvblwiLFxuICBcImltYWdlXCIsXG4gIFwic2VydmljZS1idXR0b25cIixcbiAgXCJzdGF0ZS1iYWRnZVwiLFxuICBcInN0YXRlLWljb25cIixcbiAgXCJzdGF0ZS1sYWJlbFwiLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIdWlFbGVtZW50ID0gKGNvbmZpZzogTG92ZWxhY2VFbGVtZW50Q29uZmlnKSA9PlxuICBjcmVhdGVMb3ZlbGFjZUVsZW1lbnQoXCJlbGVtZW50XCIsIGNvbmZpZywgQUxXQVlTX0xPQURFRF9UWVBFUyk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZWRIdWlFbGVtZW50IH0gZnJvbSBcIi4uL2NhcmRzL3BpY3R1cmUtZWxlbWVudHMvY3JlYXRlLXN0eWxlZC1odWktZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgY2hlY2tDb25kaXRpb25zTWV0LFxuICB2YWxpZGF0ZUNvbmRpdGlvbmFsQ29uZmlnLFxufSBmcm9tIFwiLi4vY29tbW9uL3ZhbGlkYXRlLWNvbmRpdGlvblwiO1xuaW1wb3J0IHtcbiAgQ29uZGl0aW9uYWxFbGVtZW50Q29uZmlnLFxuICBMb3ZlbGFjZUVsZW1lbnQsXG4gIExvdmVsYWNlRWxlbWVudENvbmZpZyxcbn0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY2xhc3MgSHVpQ29uZGl0aW9uYWxFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZUVsZW1lbnQge1xuICBwdWJsaWMgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByaXZhdGUgX2NvbmZpZz86IENvbmRpdGlvbmFsRWxlbWVudENvbmZpZztcblxuICBwcml2YXRlIF9lbGVtZW50czogTG92ZWxhY2VFbGVtZW50W10gPSBbXTtcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogQ29uZGl0aW9uYWxFbGVtZW50Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIWNvbmZpZy5jb25kaXRpb25zIHx8XG4gICAgICAhQXJyYXkuaXNBcnJheShjb25maWcuY29uZGl0aW9ucykgfHxcbiAgICAgICFjb25maWcuZWxlbWVudHMgfHxcbiAgICAgICFBcnJheS5pc0FycmF5KGNvbmZpZy5lbGVtZW50cykgfHxcbiAgICAgICF2YWxpZGF0ZUNvbmRpdGlvbmFsQ29uZmlnKGNvbmZpZy5jb25kaXRpb25zKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gY2FyZCBjb25maWd1cmF0aW9uLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZWxlbWVudHMuZm9yRWFjaCgoZWw6IExvdmVsYWNlRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fZWxlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICB0aGlzLl9jb25maWcuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudENvbmZpZzogTG92ZWxhY2VFbGVtZW50Q29uZmlnKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50cy5wdXNoKGNyZWF0ZVN0eWxlZEh1aUVsZW1lbnQoZWxlbWVudENvbmZpZykpO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICB9XG5cbiAgc2V0IGhhc3MoaGFzczogSG9tZUFzc2lzdGFudCkge1xuICAgIHRoaXMuX2hhc3MgPSBoYXNzO1xuXG4gICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFbGVtZW50cygpIHtcbiAgICBpZiAoIXRoaXMuX2hhc3MgfHwgIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZpc2libGUgPSBjaGVja0NvbmRpdGlvbnNNZXQodGhpcy5fY29uZmlnLmNvbmRpdGlvbnMsIHRoaXMuX2hhc3MpO1xuXG4gICAgdGhpcy5fZWxlbWVudHMuZm9yRWFjaCgoZWw6IExvdmVsYWNlRWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgZWwuaGFzcyA9IHRoaXMuX2hhc3M7XG4gICAgICAgIGlmICghZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jb25kaXRpb25hbC1lbGVtZW50XCI6IEh1aUNvbmRpdGlvbmFsRWxlbWVudDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJodWktY29uZGl0aW9uYWwtZWxlbWVudFwiLCBIdWlDb25kaXRpb25hbEVsZW1lbnQpO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7IEFjdGlvbkhhbmRsZXJFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlVG9vbHRpcCB9IGZyb20gXCIuLi9jb21tb24vY29tcHV0ZS10b29sdGlwXCI7XG5pbXBvcnQgeyBhY3Rpb25IYW5kbGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9kaXJlY3RpdmVzL2FjdGlvbi1oYW5kbGVyLWRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgaGFuZGxlQWN0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9oYW5kbGUtYWN0aW9uXCI7XG5pbXBvcnQgeyBoYXNBY3Rpb24gfSBmcm9tIFwiLi4vY29tbW9uL2hhcy1hY3Rpb25cIjtcbmltcG9ydCB7IEljb25FbGVtZW50Q29uZmlnLCBMb3ZlbGFjZUVsZW1lbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1pY29uLWVsZW1lbnRcIilcbmV4cG9ydCBjbGFzcyBIdWlJY29uRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZUVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogSWNvbkVsZW1lbnRDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEljb25FbGVtZW50Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFjb25maWcuaWNvbikge1xuICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246ICdpY29uJyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWljb25cbiAgICAgICAgLmljb249XCIke3RoaXMuX2NvbmZpZy5pY29ufVwiXG4gICAgICAgIC50aXRsZT1cIiR7Y29tcHV0ZVRvb2x0aXAodGhpcy5oYXNzLCB0aGlzLl9jb25maWcpfVwiXG4gICAgICAgIEBhY3Rpb249JHt0aGlzLl9oYW5kbGVBY3Rpb259XG4gICAgICAgIC5hY3Rpb25IYW5kbGVyPSR7YWN0aW9uSGFuZGxlcih7XG4gICAgICAgICAgaGFzSG9sZDogaGFzQWN0aW9uKHRoaXMuX2NvbmZpZyEuaG9sZF9hY3Rpb24pLFxuICAgICAgICAgIGhhc0RvdWJsZUNsaWNrOiBoYXNBY3Rpb24odGhpcy5fY29uZmlnIS5kb3VibGVfdGFwX2FjdGlvbiksXG4gICAgICAgIH0pfVxuICAgICAgICB0YWJpbmRleD0ke2lmRGVmaW5lZChcbiAgICAgICAgICBoYXNBY3Rpb24odGhpcy5fY29uZmlnLnRhcF9hY3Rpb24pID8gXCIwXCIgOiB1bmRlZmluZWRcbiAgICAgICAgKX1cbiAgICAgID48L2hhLWljb24+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUFjdGlvbihldjogQWN0aW9uSGFuZGxlckV2ZW50KSB7XG4gICAgaGFuZGxlQWN0aW9uKHRoaXMsIHRoaXMuaGFzcyEsIHRoaXMuX2NvbmZpZyEsIGV2LmRldGFpbC5hY3Rpb24hKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgaGEtaWNvbjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1pY29uLWVsZW1lbnRcIjogSHVpSWNvbkVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZFwiO1xuaW1wb3J0IHsgQWN0aW9uSGFuZGxlckV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVUb29sdGlwIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21wdXRlLXRvb2x0aXBcIjtcbmltcG9ydCB7IGFjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vY29tbW9uL2RpcmVjdGl2ZXMvYWN0aW9uLWhhbmRsZXItZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBoYW5kbGVBY3Rpb24gfSBmcm9tIFwiLi4vY29tbW9uL2hhbmRsZS1hY3Rpb25cIjtcbmltcG9ydCB7IGhhc0FjdGlvbiB9IGZyb20gXCIuLi9jb21tb24vaGFzLWFjdGlvblwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktaW1hZ2VcIjtcbmltcG9ydCB7IEltYWdlRWxlbWVudENvbmZpZywgTG92ZWxhY2VFbGVtZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktaW1hZ2UtZWxlbWVudFwiKVxuZXhwb3J0IGNsYXNzIEh1aUltYWdlRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZUVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogSW1hZ2VFbGVtZW50Q29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBJbWFnZUVsZW1lbnRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgdGhyb3cgRXJyb3IoXCJFcnJvciBpbiBlbGVtZW50IGNvbmZpZ3VyYXRpb25cIik7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHdjL25vLXNlbGYtY2xhc3NcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcImNsaWNrYWJsZVwiLFxuICAgICAgY29uZmlnLnRhcF9hY3Rpb24gJiYgY29uZmlnLnRhcF9hY3Rpb24uYWN0aW9uICE9PSBcIm5vbmVcIlxuICAgICk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxodWktaW1hZ2VcbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIC5lbnRpdHk9XCIke3RoaXMuX2NvbmZpZy5lbnRpdHl9XCJcbiAgICAgICAgLmltYWdlPVwiJHt0aGlzLl9jb25maWcuaW1hZ2V9XCJcbiAgICAgICAgLnN0YXRlSW1hZ2U9XCIke3RoaXMuX2NvbmZpZy5zdGF0ZV9pbWFnZX1cIlxuICAgICAgICAuY2FtZXJhSW1hZ2U9XCIke3RoaXMuX2NvbmZpZy5jYW1lcmFfaW1hZ2V9XCJcbiAgICAgICAgLmZpbHRlcj1cIiR7dGhpcy5fY29uZmlnLmZpbHRlcn1cIlxuICAgICAgICAuc3RhdGVGaWx0ZXI9XCIke3RoaXMuX2NvbmZpZy5zdGF0ZV9maWx0ZXJ9XCJcbiAgICAgICAgLnRpdGxlPVwiJHtjb21wdXRlVG9vbHRpcCh0aGlzLmhhc3MsIHRoaXMuX2NvbmZpZyl9XCJcbiAgICAgICAgLmFzcGVjdFJhdGlvPVwiJHt0aGlzLl9jb25maWcuYXNwZWN0X3JhdGlvfVwiXG4gICAgICAgIEBhY3Rpb249JHt0aGlzLl9oYW5kbGVBY3Rpb259XG4gICAgICAgIC5hY3Rpb25IYW5kbGVyPSR7YWN0aW9uSGFuZGxlcih7XG4gICAgICAgICAgaGFzSG9sZDogaGFzQWN0aW9uKHRoaXMuX2NvbmZpZyEuaG9sZF9hY3Rpb24pLFxuICAgICAgICAgIGhhc0RvdWJsZUNsaWNrOiBoYXNBY3Rpb24odGhpcy5fY29uZmlnIS5kb3VibGVfdGFwX2FjdGlvbiksXG4gICAgICAgIH0pfVxuICAgICAgICB0YWJpbmRleD0ke2lmRGVmaW5lZChcbiAgICAgICAgICBoYXNBY3Rpb24odGhpcy5fY29uZmlnLnRhcF9hY3Rpb24pID8gXCIwXCIgOiB1bmRlZmluZWRcbiAgICAgICAgKX1cbiAgICAgID48L2h1aS1pbWFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3QoLmNsaWNrYWJsZSkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgaHVpLWltYWdlIHtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgaHVpLWltYWdlOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUFjdGlvbihldjogQWN0aW9uSGFuZGxlckV2ZW50KSB7XG4gICAgaGFuZGxlQWN0aW9uKHRoaXMsIHRoaXMuaGFzcyEsIHRoaXMuX2NvbmZpZyEsIGV2LmRldGFpbC5hY3Rpb24hKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWltYWdlLWVsZW1lbnRcIjogSHVpSW1hZ2VFbGVtZW50O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUVsZW1lbnQsIFNlcnZpY2VCdXR0b25FbGVtZW50Q29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktc2VydmljZS1idXR0b24tZWxlbWVudFwiKVxuZXhwb3J0IGNsYXNzIEh1aVNlcnZpY2VCdXR0b25FbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIExvdmVsYWNlRWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBTZXJ2aWNlQnV0dG9uRWxlbWVudENvbmZpZztcblxuICBwcml2YXRlIF9kb21haW4/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfc2VydmljZT86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHsgX2NvbmZpZzoge30gfTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBTZXJ2aWNlQnV0dG9uRWxlbWVudENvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2VydmljZSkge1xuICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246ICdzZXJ2aWNlJyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICBbdGhpcy5fZG9tYWluLCB0aGlzLl9zZXJ2aWNlXSA9IGNvbmZpZy5zZXJ2aWNlLnNwbGl0KFwiLlwiLCAyKTtcblxuICAgIGlmICghdGhpcy5fZG9tYWluKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgQ29uZmlndXJhdGlvbjogJ3NlcnZpY2UnIGRvZXMgbm90IGhhdmUgYSBkb21haW5cIik7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246ICdzZXJ2aWNlJyBkb2VzIG5vdCBoYXZlIGEgc2VydmljZSBuYW1lXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAuZG9tYWluPVwiJHt0aGlzLl9kb21haW59XCJcbiAgICAgICAgLnNlcnZpY2U9XCIke3RoaXMuX3NlcnZpY2V9XCJcbiAgICAgICAgLnNlcnZpY2VEYXRhPVwiJHt0aGlzLl9jb25maWcuc2VydmljZV9kYXRhfVwiXG4gICAgICAgID4ke3RoaXMuX2NvbmZpZy50aXRsZX08L2hhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgID5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktc2VydmljZS1idXR0b24tZWxlbWVudFwiOiBIdWlTZXJ2aWNlQnV0dG9uRWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1sYWJlbC1iYWRnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSGFuZGxlckV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGFjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vY29tbW9uL2RpcmVjdGl2ZXMvYWN0aW9uLWhhbmRsZXItZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBoYW5kbGVBY3Rpb24gfSBmcm9tIFwiLi4vY29tbW9uL2hhbmRsZS1hY3Rpb25cIjtcbmltcG9ydCB7IGhhc0FjdGlvbiB9IGZyb20gXCIuLi9jb21tb24vaGFzLWFjdGlvblwiO1xuaW1wb3J0IHsgaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtY2hhbmdlZFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktd2FybmluZy1lbGVtZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUVsZW1lbnQsIFN0YXRlQmFkZ2VFbGVtZW50Q29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktc3RhdGUtYmFkZ2UtZWxlbWVudFwiKVxuZXhwb3J0IGNsYXNzIEh1aVN0YXRlQmFkZ2VFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIExvdmVsYWNlRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBTdGF0ZUJhZGdlRWxlbWVudENvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogU3RhdGVCYWRnZUVsZW1lbnRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZy5lbnRpdHkpIHtcbiAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiAnZW50aXR5JyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkKHRoaXMsIGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1t0aGlzLl9jb25maWcuZW50aXR5IV07XG5cbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGh1aS13YXJuaW5nLWVsZW1lbnRcbiAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS53YXJuaW5nLmVudGl0eV9ub3RfZm91bmRcIixcbiAgICAgICAgICAgIFwiZW50aXR5XCIsXG4gICAgICAgICAgICB0aGlzLl9jb25maWcuZW50aXR5XG4gICAgICAgICAgKX1cIlxuICAgICAgICA+PC9odWktd2FybmluZy1lbGVtZW50PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZVxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgLnN0YXRlPVwiJHtzdGF0ZU9ian1cIlxuICAgICAgICAudGl0bGU9XCIke3RoaXMuX2NvbmZpZy50aXRsZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKVxuICAgICAgICAgIDogdGhpcy5fY29uZmlnLnRpdGxlID09PSBudWxsXG4gICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgOiB0aGlzLl9jb25maWcudGl0bGV9XCJcbiAgICAgICAgQGFjdGlvbj0ke3RoaXMuX2hhbmRsZUFjdGlvbn1cbiAgICAgICAgLmFjdGlvbkhhbmRsZXI9JHthY3Rpb25IYW5kbGVyKHtcbiAgICAgICAgICBoYXNIb2xkOiBoYXNBY3Rpb24odGhpcy5fY29uZmlnIS5ob2xkX2FjdGlvbiksXG4gICAgICAgICAgaGFzRG91YmxlQ2xpY2s6IGhhc0FjdGlvbih0aGlzLl9jb25maWchLmRvdWJsZV90YXBfYWN0aW9uKSxcbiAgICAgICAgfSl9XG4gICAgICAgIHRhYmluZGV4PSR7aWZEZWZpbmVkKFxuICAgICAgICAgIGhhc0FjdGlvbih0aGlzLl9jb25maWcudGFwX2FjdGlvbikgPyBcIjBcIiA6IHVuZGVmaW5lZFxuICAgICAgICApfVxuICAgICAgPjwvaGEtc3RhdGUtbGFiZWwtYmFkZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUFjdGlvbihldjogQWN0aW9uSGFuZGxlckV2ZW50KSB7XG4gICAgaGFuZGxlQWN0aW9uKHRoaXMsIHRoaXMuaGFzcyEsIHRoaXMuX2NvbmZpZyEsIGV2LmRldGFpbC5hY3Rpb24hKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXN0YXRlLWJhZGdlLWVsZW1lbnRcIjogSHVpU3RhdGVCYWRnZUVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGlmRGVmaW5lZCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2lmLWRlZmluZWRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgeyBBY3Rpb25IYW5kbGVyRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVRvb2x0aXAgfSBmcm9tIFwiLi4vY29tbW9uL2NvbXB1dGUtdG9vbHRpcFwiO1xuaW1wb3J0IHsgYWN0aW9uSGFuZGxlciB9IGZyb20gXCIuLi9jb21tb24vZGlyZWN0aXZlcy9hY3Rpb24taGFuZGxlci1kaXJlY3RpdmVcIjtcbmltcG9ydCB7IGhhbmRsZUFjdGlvbiB9IGZyb20gXCIuLi9jb21tb24vaGFuZGxlLWFjdGlvblwiO1xuaW1wb3J0IHsgaGFzQWN0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtYWN0aW9uXCI7XG5pbXBvcnQgeyBoYXNDb25maWdPckVudGl0eUNoYW5nZWQgfSBmcm9tIFwiLi4vY29tbW9uL2hhcy1jaGFuZ2VkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS13YXJuaW5nLWVsZW1lbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlRWxlbWVudCwgU3RhdGVJY29uRWxlbWVudENvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLXN0YXRlLWljb24tZWxlbWVudFwiKVxuZXhwb3J0IGNsYXNzIEh1aVN0YXRlSWNvbkVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IFN0YXRlSWNvbkVsZW1lbnRDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IFN0YXRlSWNvbkVsZW1lbnRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZy5lbnRpdHkpIHtcbiAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiAnZW50aXR5JyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSB7IHN0YXRlX2NvbG9yOiB0cnVlLCAuLi5jb25maWcgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNDb25maWdPckVudGl0eUNoYW5nZWQodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZy5lbnRpdHkhXTtcblxuICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aHVpLXdhcm5pbmctZWxlbWVudFxuICAgICAgICAgIGxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS53YXJuaW5nLmVudGl0eV9ub3RfZm91bmRcIixcbiAgICAgICAgICAgIFwiZW50aXR5XCIsXG4gICAgICAgICAgICB0aGlzLl9jb25maWcuZW50aXR5XG4gICAgICAgICAgKX1cbiAgICAgICAgPjwvaHVpLXdhcm5pbmctZWxlbWVudD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgLnN0YXRlT2JqPSR7c3RhdGVPYmp9XG4gICAgICAgIC50aXRsZT1cIiR7Y29tcHV0ZVRvb2x0aXAodGhpcy5oYXNzLCB0aGlzLl9jb25maWcpfVwiXG4gICAgICAgIEBhY3Rpb249JHt0aGlzLl9oYW5kbGVBY3Rpb259XG4gICAgICAgIC5hY3Rpb25IYW5kbGVyPSR7YWN0aW9uSGFuZGxlcih7XG4gICAgICAgICAgaGFzSG9sZDogaGFzQWN0aW9uKHRoaXMuX2NvbmZpZyEuaG9sZF9hY3Rpb24pLFxuICAgICAgICAgIGhhc0RvdWJsZUNsaWNrOiBoYXNBY3Rpb24odGhpcy5fY29uZmlnIS5kb3VibGVfdGFwX2FjdGlvbiksXG4gICAgICAgIH0pfVxuICAgICAgICB0YWJpbmRleD0ke2lmRGVmaW5lZChcbiAgICAgICAgICBoYXNBY3Rpb24odGhpcy5fY29uZmlnLnRhcF9hY3Rpb24pID8gXCIwXCIgOiB1bmRlZmluZWRcbiAgICAgICAgKX1cbiAgICAgICAgLm92ZXJyaWRlSWNvbj0ke3RoaXMuX2NvbmZpZy5pY29ufVxuICAgICAgICAuc3RhdGVDb2xvcj0ke3RoaXMuX2NvbmZpZy5zdGF0ZV9jb2xvcn1cbiAgICAgID48L3N0YXRlLWJhZGdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIHN0YXRlLWJhZGdlOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUFjdGlvbihldjogQWN0aW9uSGFuZGxlckV2ZW50KSB7XG4gICAgaGFuZGxlQWN0aW9uKHRoaXMsIHRoaXMuaGFzcyEsIHRoaXMuX2NvbmZpZyEsIGV2LmRldGFpbC5hY3Rpb24hKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXN0YXRlLWljb24tZWxlbWVudFwiOiBIdWlTdGF0ZUljb25FbGVtZW50O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEaXNwbGF5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5XCI7XG5pbXBvcnQgeyBBY3Rpb25IYW5kbGVyRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVRvb2x0aXAgfSBmcm9tIFwiLi4vY29tbW9uL2NvbXB1dGUtdG9vbHRpcFwiO1xuaW1wb3J0IHsgYWN0aW9uSGFuZGxlciB9IGZyb20gXCIuLi9jb21tb24vZGlyZWN0aXZlcy9hY3Rpb24taGFuZGxlci1kaXJlY3RpdmVcIjtcbmltcG9ydCB7IGhhbmRsZUFjdGlvbiB9IGZyb20gXCIuLi9jb21tb24vaGFuZGxlLWFjdGlvblwiO1xuaW1wb3J0IHsgaGFzQWN0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtYWN0aW9uXCI7XG5pbXBvcnQgeyBoYXNDb25maWdPckVudGl0eUNoYW5nZWQgfSBmcm9tIFwiLi4vY29tbW9uL2hhcy1jaGFuZ2VkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS13YXJuaW5nLWVsZW1lbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlRWxlbWVudCwgU3RhdGVMYWJlbEVsZW1lbnRDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1zdGF0ZS1sYWJlbC1lbGVtZW50XCIpXG5jbGFzcyBIdWlTdGF0ZUxhYmVsRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZUVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogU3RhdGVMYWJlbEVsZW1lbnRDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IFN0YXRlTGFiZWxFbGVtZW50Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFjb25maWcuZW50aXR5KSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgQ29uZmlndXJhdGlvbjogJ2VudGl0eScgcmVxdWlyZWRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eSFdO1xuXG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxodWktd2FybmluZy1lbGVtZW50XG4gICAgICAgICAgbGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLndhcm5pbmcuZW50aXR5X25vdF9mb3VuZFwiLFxuICAgICAgICAgICAgXCJlbnRpdHlcIixcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5lbnRpdHlcbiAgICAgICAgICApfVxuICAgICAgICA+PC9odWktd2FybmluZy1lbGVtZW50PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9jb25maWcuYXR0cmlidXRlICYmXG4gICAgICAhc3RhdGVPYmouYXR0cmlidXRlc1t0aGlzLl9jb25maWcuYXR0cmlidXRlXVxuICAgICkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxodWktd2FybmluZy1lbGVtZW50XG4gICAgICAgICAgbGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLndhcm5pbmcuYXR0cmlidXRlX25vdF9mb3VuZFwiLFxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVcIixcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5hdHRyaWJ1dGUsXG4gICAgICAgICAgICBcImVudGl0eVwiLFxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmVudGl0eVxuICAgICAgICAgICl9XG4gICAgICAgID48L2h1aS13YXJuaW5nLWVsZW1lbnQ+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdlxuICAgICAgICAudGl0bGU9XCIke2NvbXB1dGVUb29sdGlwKHRoaXMuaGFzcywgdGhpcy5fY29uZmlnKX1cIlxuICAgICAgICBAYWN0aW9uPSR7dGhpcy5faGFuZGxlQWN0aW9ufVxuICAgICAgICAuYWN0aW9uSGFuZGxlcj0ke2FjdGlvbkhhbmRsZXIoe1xuICAgICAgICAgIGhhc0hvbGQ6IGhhc0FjdGlvbih0aGlzLl9jb25maWchLmhvbGRfYWN0aW9uKSxcbiAgICAgICAgICBoYXNEb3VibGVDbGljazogaGFzQWN0aW9uKHRoaXMuX2NvbmZpZyEuZG91YmxlX3RhcF9hY3Rpb24pLFxuICAgICAgICB9KX1cbiAgICAgICAgdGFiaW5kZXg9JHtpZkRlZmluZWQoXG4gICAgICAgICAgaGFzQWN0aW9uKHRoaXMuX2NvbmZpZy50YXBfYWN0aW9uKSA/IFwiMFwiIDogdW5kZWZpbmVkXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgICR7dGhpcy5fY29uZmlnLnByZWZpeH0keyF0aGlzLl9jb25maWcuYXR0cmlidXRlXG4gICAgICAgICAgPyBjb21wdXRlU3RhdGVEaXNwbGF5KFxuICAgICAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUsXG4gICAgICAgICAgICAgIHN0YXRlT2JqLFxuICAgICAgICAgICAgICB0aGlzLmhhc3MubGFuZ3VhZ2VcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXNbdGhpcy5fY29uZmlnLmF0dHJpYnV0ZV19JHt0aGlzLl9jb25maWcuc3VmZml4fVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUFjdGlvbihldjogQWN0aW9uSGFuZGxlckV2ZW50KSB7XG4gICAgaGFuZGxlQWN0aW9uKHRoaXMsIHRoaXMuaGFzcyEsIHRoaXMuX2NvbmZpZyEsIGV2LmRldGFpbC5hY3Rpb24hKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgZGl2OmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXN0YXRlLWxhYmVsLWVsZW1lbnRcIjogSHVpU3RhdGVMYWJlbEVsZW1lbnQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUF2QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxGQTtBQUNBO0FBbUZBOzs7Ozs7Ozs7Ozs7QUM5RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEdBO0FBQ0E7QUFpR0E7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFuQ0E7QUFDQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvRkE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0RBO0FBQ0E7QUFvRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFUQTtBQWNBO0FBaENBO0FBQUE7QUFBQTtBQUFBO0FBbUNBO0FBQ0E7QUFwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVDQTs7Ozs7Ozs7O0FBQUE7QUFVQTtBQWpEQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBaEJBO0FBcUJBO0FBNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFlQTtBQTlEQTtBQUFBO0FBQUE7QUFBQTtBQWlFQTtBQUNBO0FBbEVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBU0E7QUFLQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQUFBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTkE7QUFTQTtBQWhEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbURBOzs7OztBQUFBO0FBTUE7QUF6REE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFRQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUZBO0FBU0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFkQTtBQW1CQTtBQXhEQTtBQUFBO0FBQUE7QUFBQTtBQTJEQTtBQUNBO0FBNURBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQVVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRkE7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7O0FBYkE7QUFnQkE7QUFwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVEQTs7Ozs7Ozs7O0FBQUE7QUFVQTtBQWpFQTtBQUFBO0FBQUE7QUFBQTtBQW9FQTtBQUNBO0FBckVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBVUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBOztBQUZBO0FBV0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUlBOztBQVpBO0FBcUJBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWNBOzs7QUEvRkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
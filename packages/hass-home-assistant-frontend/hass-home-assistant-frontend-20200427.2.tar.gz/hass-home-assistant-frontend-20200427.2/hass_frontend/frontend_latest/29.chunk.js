(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js ***!
  \**********************************************************************************************/
/*! exports provided: IronCheckedElementBehaviorImpl, IronCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehaviorImpl", function() { return IronCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehavior", function() { return IronCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
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
 * Use `IronCheckedElementBehavior` to implement a custom element that has a
 * `checked` property, which can be used for validation if the element is also
 * `required`. Element instances implementing this behavior will also be
 * registered for use in an `iron-form` element.
 *
 * @demo demo/index.html
 * @polymerBehavior IronCheckedElementBehavior
 */

const IronCheckedElementBehaviorImpl = {
  properties: {
    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */

    /**
     * Gets or sets the state, `true` is checked and `false` is unchecked.
     */
    checked: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      notify: true,
      observer: '_checkedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {
      type: Boolean,
      value: true,
      reflectToAttribute: true
    },

    /* Overriden from IronFormElementBehavior */
    value: {
      type: String,
      value: 'on',
      observer: '_valueChanged'
    }
  },
  observers: ['_requiredChanged(required)'],
  created: function () {
    // Used by `iron-form` to handle the case that an element with this behavior
    // doesn't have a role of 'checkbox' or 'radio', but should still only be
    // included when the form is serialized if `this.checked === true`.
    this._hasIronCheckedElementBehavior = true;
  },

  /**
   * Returns false if the element is required and not checked, and true
   * otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false or if `checked` is true.
   */
  _getValidity: function (_value) {
    return this.disabled || !this.required || this.checked;
  },

  /**
   * Update the aria-required label when `required` is changed.
   */
  _requiredChanged: function () {
    if (this.required) {
      this.setAttribute('aria-required', 'true');
    } else {
      this.removeAttribute('aria-required');
    }
  },

  /**
   * Fire `iron-changed` when the checked state changes.
   */
  _checkedChanged: function () {
    this.active = this.checked;
    this.fire('iron-change');
  },

  /**
   * Reset value to 'on' if it is set to `undefined`.
   */
  _valueChanged: function () {
    if (this.value === undefined || this.value === null) {
      this.value = 'on';
    }
  }
};
/** @polymerBehavior */

const IronCheckedElementBehavior = [_polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"], IronCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js ***!
  \*********************************************************************************/
/*! exports provided: PaperCheckedElementBehaviorImpl, PaperCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehaviorImpl", function() { return PaperCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehavior", function() { return PaperCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-checked-element-behavior/iron-checked-element-behavior.js */ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js");
/* harmony import */ var _paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
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
 * Use `PaperCheckedElementBehavior` to implement a custom element that has a
 * `checked` property similar to `IronCheckedElementBehavior` and is compatible
 * with having a ripple effect.
 * @polymerBehavior PaperCheckedElementBehavior
 */

const PaperCheckedElementBehaviorImpl = {
  /**
   * Synchronizes the element's checked state with its ripple effect.
   */
  _checkedChanged: function () {
    _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehaviorImpl"]._checkedChanged.call(this);

    if (this.hasRipple()) {
      if (this.checked) {
        this._ripple.setAttribute('checked', '');
      } else {
        this._ripple.removeAttribute('checked');
      }
    }
  },

  /**
   * Synchronizes the element's `active` and `checked` state.
   */
  _buttonStateChanged: function () {
    _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._buttonStateChanged.call(this);

    if (this.disabled) {
      return;
    }

    if (this.isAttached) {
      this.checked = this.active;
    }
  }
};
/** @polymerBehavior */

const PaperCheckedElementBehavior = [_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperInkyFocusBehavior"], _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehavior"], PaperCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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






/*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-item-body'
});

/***/ }),

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
};

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
};

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: findBatteryEntity, computeEntityRegistryName, getExtendedEntityRegistryEntry, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBatteryEntity", function() { return findBatteryEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtendedEntityRegistryEntry", function() { return getExtendedEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const findBatteryEntity = (hass, entities) => entities.find(entity => hass.states[entity.entity_id] && hass.states[entity.entity_id].attributes.device_class === "battery");
const computeEntityRegistryName = (hass, entry) => {
  if (entry.name) {
    return entry.name;
  }

  const state = hass.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const getExtendedEntityRegistryEntry = (hass, entityId) => hass.callWS({
  type: "config/entity_registry/get",
  entity_id: entityId
});
const updateEntityRegistryEntry = (hass, entityId, updates) => hass.callWS(Object.assign({
  type: "config/entity_registry/update",
  entity_id: entityId
}, updates));
const removeEntityRegistryEntry = (hass, entityId) => hass.callWS({
  type: "config/entity_registry/remove",
  entity_id: entityId
});

const fetchEntityRegistry = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then(entities => store.setState(entities, true)), 500, true), "entity_registry_updated");

const subscribeEntityRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/panels/config/entities/editor-tabs/settings/entity-settings-helper-tab.ts":
/*!***************************************************************************************!*\
  !*** ./src/panels/config/entities/editor-tabs/settings/entity-settings-helper-tab.ts ***!
  \***************************************************************************************/
/*! exports provided: EntityRegistrySettingsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityRegistrySettingsHelper", function() { return EntityRegistrySettingsHelper; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_dom_dynamic_element_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/dom/dynamic-element-directive */ "./src/common/dom/dynamic-element-directive.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _data_input_boolean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/input_boolean */ "./src/data/input_boolean.ts");
/* harmony import */ var _data_input_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/input_datetime */ "./src/data/input_datetime.ts");
/* harmony import */ var _data_input_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/input_number */ "./src/data/input_number.ts");
/* harmony import */ var _data_input_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/input_select */ "./src/data/input_select.ts");
/* harmony import */ var _data_input_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../data/input_text */ "./src/data/input_text.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _helpers_forms_ha_input_boolean_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/forms/ha-input_boolean-form */ "./src/panels/config/helpers/forms/ha-input_boolean-form.ts");
/* harmony import */ var _helpers_forms_ha_input_datetime_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/forms/ha-input_datetime-form */ "./src/panels/config/helpers/forms/ha-input_datetime-form.ts");
/* harmony import */ var _helpers_forms_ha_input_number_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers/forms/ha-input_number-form */ "./src/panels/config/helpers/forms/ha-input_number-form.ts");
/* harmony import */ var _helpers_forms_ha_input_select_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helpers/forms/ha-input_select-form */ "./src/panels/config/helpers/forms/ha-input_select-form.ts");
/* harmony import */ var _helpers_forms_ha_input_text_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers/forms/ha-input_text-form */ "./src/panels/config/helpers/forms/ha-input_text-form.ts");
/* harmony import */ var _entity_registry_basic_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../entity-registry-basic-editor */ "./src/panels/config/entities/entity-registry-basic-editor.ts");
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


















const HELPERS = {
  input_boolean: {
    fetch: _data_input_boolean__WEBPACK_IMPORTED_MODULE_5__["fetchInputBoolean"],
    update: _data_input_boolean__WEBPACK_IMPORTED_MODULE_5__["updateInputBoolean"],
    delete: _data_input_boolean__WEBPACK_IMPORTED_MODULE_5__["deleteInputBoolean"]
  },
  input_text: {
    fetch: _data_input_text__WEBPACK_IMPORTED_MODULE_9__["fetchInputText"],
    update: _data_input_text__WEBPACK_IMPORTED_MODULE_9__["updateInputText"],
    delete: _data_input_text__WEBPACK_IMPORTED_MODULE_9__["deleteInputText"]
  },
  input_number: {
    fetch: _data_input_number__WEBPACK_IMPORTED_MODULE_7__["fetchInputNumber"],
    update: _data_input_number__WEBPACK_IMPORTED_MODULE_7__["updateInputNumber"],
    delete: _data_input_number__WEBPACK_IMPORTED_MODULE_7__["deleteInputNumber"]
  },
  input_datetime: {
    fetch: _data_input_datetime__WEBPACK_IMPORTED_MODULE_6__["fetchInputDateTime"],
    update: _data_input_datetime__WEBPACK_IMPORTED_MODULE_6__["updateInputDateTime"],
    delete: _data_input_datetime__WEBPACK_IMPORTED_MODULE_6__["deleteInputDateTime"]
  },
  input_select: {
    fetch: _data_input_select__WEBPACK_IMPORTED_MODULE_8__["fetchInputSelect"],
    update: _data_input_select__WEBPACK_IMPORTED_MODULE_8__["updateInputSelect"],
    delete: _data_input_select__WEBPACK_IMPORTED_MODULE_8__["deleteInputSelect"]
  }
};
let EntityRegistrySettingsHelper = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("entity-settings-helper-tab")], function (_initialize, _LitElement) {
  class EntityRegistrySettingsHelper extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: EntityRegistrySettingsHelper,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "entry",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "dialogElement",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_item",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_submitting",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_componentLoaded",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("ha-registry-basic-editor")],
      key: "_registryEditor",
      value: void 0
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(EntityRegistrySettingsHelper.prototype), "firstUpdated", this).call(this, changedProperties);

        this._componentLoaded = Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_1__["isComponentLoaded"])(this.hass, this.entry.platform);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(EntityRegistrySettingsHelper.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("entry")) {
          this._error = undefined;
          this._item = undefined;

          this._getItem();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this._item === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const stateObj = this.hass.states[this.entry.entity_id];
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <paper-dialog-scrollable .dialogElement=${this.dialogElement}>
        ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <div class="error">${this._error}</div> ` : ""}
        <div class="form">
          ${!this._componentLoaded ? this.hass.localize("ui.dialogs.helper_settings.platform_not_loaded", "platform", this.entry.platform) : this._item === null ? this.hass.localize("ui.dialogs.helper_settings.yaml_not_editable") : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div @value-changed=${this._valueChanged}>
                  ${Object(_common_dom_dynamic_element_directive__WEBPACK_IMPORTED_MODULE_2__["dynamicElement"])(`ha-${this.entry.platform}-form`, {
          hass: this.hass,
          item: this._item,
          entry: this.entry
        })}
                </div>
              `}
          <ha-registry-basic-editor
            .hass=${this.hass}
            .entry=${this.entry}
          ></ha-registry-basic-editor>
        </div>
      </paper-dialog-scrollable>
      <div class="buttons">
        <mwc-button
          class="warning"
          @click=${this._confirmDeleteItem}
          .disabled=${this._submitting || !this._item && !(stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes.restored)}
        >
          ${this.hass.localize("ui.dialogs.entity_registry.editor.delete")}
        </mwc-button>
        <mwc-button
          @click=${this._updateItem}
          .disabled=${this._submitting || this._item && !this._item.name}
        >
          ${this.hass.localize("ui.dialogs.entity_registry.editor.update")}
        </mwc-button>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        this._error = undefined;
        this._item = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_getItem",
      value: async function _getItem() {
        const items = await HELPERS[this.entry.platform].fetch(this.hass);
        this._item = items.find(item => item.id === this.entry.unique_id) || null;
        await this.updateComplete;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this.dialogElement, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_updateItem",
      value: async function _updateItem() {
        this._submitting = true;

        try {
          var _this$_registryEditor;

          if (this._componentLoaded && this._item) {
            await HELPERS[this.entry.platform].update(this.hass, this._item.id, this._item);
          }

          await ((_this$_registryEditor = this._registryEditor) === null || _this$_registryEditor === void 0 ? void 0 : _this$_registryEditor.updateEntry());
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "close-dialog");
        } catch (err) {
          this._error = err.message || "Unknown error";
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_confirmDeleteItem",
      value: async function _confirmDeleteItem() {
        if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showConfirmationDialog"])(this, {
          text: this.hass.localize("ui.dialogs.entity_registry.editor.confirm_delete")
        }))) {
          return;
        }

        this._submitting = true;

        try {
          if (this._componentLoaded && this._item) {
            await HELPERS[this.entry.platform].delete(this.hass, this._item.id);
          } else {
            const stateObj = this.hass.states[this.entry.entity_id];

            if (!(stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes.restored)) {
              return;
            }

            await Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_4__["removeEntityRegistryEntry"])(this.hass, this.entry.entity_id);
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "close-dialog");
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
        padding: 0 !important;
      }
      .form {
        padding-bottom: 24px;
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        padding: 8px;
        margin-bottom: -20px;
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--google-red-500);
      }
      .error {
        color: var(--google-red-500);
      }
      .row {
        margin-top: 8px;
        color: var(--primary-text-color);
      }
      .secondary {
        color: var(--secondary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/entities/entity-registry-basic-editor.ts":
/*!********************************************************************!*\
  !*** ./src/panels/config/entities/entity-registry-basic-editor.ts ***!
  \********************************************************************/
/*! exports provided: HaEntityRegistryBasicEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaEntityRegistryBasicEditor", function() { return HaEntityRegistryBasicEditor; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
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






let HaEntityRegistryBasicEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-registry-basic-editor")], function (_initialize, _LitElement) {
  class HaEntityRegistryBasicEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaEntityRegistryBasicEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "entry",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_origEntityId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_entityId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_disabledBy",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_submitting",
      value: void 0
    }, {
      kind: "method",
      key: "updateEntry",
      value: async function updateEntry() {
        this._submitting = true;
        const params = {
          new_entity_id: this._entityId.trim()
        };

        if (this._disabledBy === null || this._disabledBy === "user") {
          params.disabled_by = this._disabledBy;
        }

        try {
          await Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_4__["updateEntityRegistryEntry"])(this.hass, this._origEntityId, params);
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HaEntityRegistryBasicEditor.prototype), "updated", this).call(this, changedProperties);

        if (!changedProperties.has("entry")) {
          return;
        }

        if (this.entry) {
          this._origEntityId = this.entry.entity_id;
          this._entityId = this.entry.entity_id;
          this._disabledBy = this.entry.disabled_by;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.entry || this.entry.entity_id !== this._origEntityId) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        const invalidDomainUpdate = Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_2__["computeDomain"])(this._entityId.trim()) !== Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_2__["computeDomain"])(this.entry.entity_id);
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-input
        .value=${this._entityId}
        @value-changed=${this._entityIdChanged}
        .label=${this.hass.localize("ui.dialogs.entity_registry.editor.entity_id")}
        error-message="Domain needs to stay the same"
        .invalid=${invalidDomainUpdate}
        .disabled=${this._submitting}
      ></paper-input>
      <div class="row">
        <ha-switch
          .checked=${!this._disabledBy}
          @change=${this._disabledByChanged}
        >
          <div>
            <div>
              ${this.hass.localize("ui.dialogs.entity_registry.editor.enabled_label")}
            </div>
            <div class="secondary">
              ${this._disabledBy && this._disabledBy !== "user" ? this.hass.localize("ui.dialogs.entity_registry.editor.enabled_cause", "cause", this.hass.localize(`config_entry.disabled_by.${this._disabledBy}`)) : ""}
              ${this.hass.localize("ui.dialogs.entity_registry.editor.enabled_description")}
              <br />${this.hass.localize("ui.dialogs.entity_registry.editor.note")}
            </div>
          </div>
        </ha-switch>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_entityIdChanged",
      value: function _entityIdChanged(ev) {
        this._entityId = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_disabledByChanged",
      value: function _disabledByChanged(ev) {
        this._disabledBy = ev.target.checked ? null : "user";
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      .row {
        margin-top: 8px;
        color: var(--primary-text-color);
      }
      .secondary {
        color: var(--secondary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZW50aXRpZXMvZWRpdG9yLXRhYnMvc2V0dGluZ3MvZW50aXR5LXNldHRpbmdzLWhlbHBlci10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZW50aXRpZXMvZW50aXR5LXJlZ2lzdHJ5LWJhc2ljLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogVXNlIGBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGEgY3VzdG9tIGVsZW1lbnQgdGhhdCBoYXMgYVxuICogYGNoZWNrZWRgIHByb3BlcnR5LCB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdmFsaWRhdGlvbiBpZiB0aGUgZWxlbWVudCBpcyBhbHNvXG4gKiBgcmVxdWlyZWRgLiBFbGVtZW50IGluc3RhbmNlcyBpbXBsZW1lbnRpbmcgdGhpcyBiZWhhdmlvciB3aWxsIGFsc28gYmVcbiAqIHJlZ2lzdGVyZWQgZm9yIHVzZSBpbiBhbiBgaXJvbi1mb3JtYCBlbGVtZW50LlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1jaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc3RhdGUsIGB0cnVlYCBpcyBjaGVja2VkIGFuZCBgZmFsc2VgIGlzIHVuY2hlY2tlZC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfY2hlY2tlZENoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBidXR0b24gdG9nZ2xlcyB0aGUgYWN0aXZlIHN0YXRlIHdpdGggZWFjaCB0YXAgb3IgcHJlc3NcbiAgICAgKiBvZiB0aGUgc3BhY2ViYXIuXG4gICAgICovXG4gICAgdG9nZ2xlczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyogT3ZlcnJpZGVuIGZyb20gSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IgKi9cbiAgICB2YWx1ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdvbicsIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCd9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19yZXF1aXJlZENoYW5nZWQocmVxdWlyZWQpJ10sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCBieSBgaXJvbi1mb3JtYCB0byBoYW5kbGUgdGhlIGNhc2UgdGhhdCBhbiBlbGVtZW50IHdpdGggdGhpcyBiZWhhdmlvclxuICAgIC8vIGRvZXNuJ3QgaGF2ZSBhIHJvbGUgb2YgJ2NoZWNrYm94JyBvciAncmFkaW8nLCBidXQgc2hvdWxkIHN0aWxsIG9ubHkgYmVcbiAgICAvLyBpbmNsdWRlZCB3aGVuIHRoZSBmb3JtIGlzIHNlcmlhbGl6ZWQgaWYgYHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZWAuXG4gICAgdGhpcy5faGFzSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIGFuZCBub3QgY2hlY2tlZCwgYW5kIHRydWVcbiAgICogb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0geyo9fSBfdmFsdWUgSWdub3JlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBgcmVxdWlyZWRgIGlzIGZhbHNlIG9yIGlmIGBjaGVja2VkYCBpcyB0cnVlLlxuICAgKi9cbiAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbihfdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZXF1aXJlZCB8fCB0aGlzLmNoZWNrZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgYXJpYS1yZXF1aXJlZCBsYWJlbCB3aGVuIGByZXF1aXJlZGAgaXMgY2hhbmdlZC5cbiAgICovXG4gIF9yZXF1aXJlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGaXJlIGBpcm9uLWNoYW5nZWRgIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5maXJlKCdpcm9uLWNoYW5nZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldCB2YWx1ZSB0byAnb24nIGlmIGl0IGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAgICovXG4gIF92YWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yID0gW1xuICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcixcbiAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IsXG4gIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciwgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyc7XG5cbmltcG9ydCB7UGFwZXJJbmt5Rm9jdXNCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pbmt5LWZvY3VzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UGFwZXJSaXBwbGVCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1yaXBwbGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIFVzZSBgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYSBjdXN0b20gZWxlbWVudCB0aGF0IGhhcyBhXG4gKiBgY2hlY2tlZGAgcHJvcGVydHkgc2ltaWxhciB0byBgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JgIGFuZCBpcyBjb21wYXRpYmxlXG4gKiB3aXRoIGhhdmluZyBhIHJpcHBsZSBlZmZlY3QuXG4gKiBAcG9seW1lckJlaGF2aW9yIFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbCA9IHtcbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyB0aGUgZWxlbWVudCdzIGNoZWNrZWQgc3RhdGUgd2l0aCBpdHMgcmlwcGxlIGVmZmVjdC5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsLl9jaGVja2VkQ2hhbmdlZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZXMgdGhlIGVsZW1lbnQncyBgYWN0aXZlYCBhbmQgYGNoZWNrZWRgIHN0YXRlLlxuICAgKi9cbiAgX2J1dHRvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgUGFwZXJSaXBwbGVCZWhhdmlvci5fYnV0dG9uU3RhdGVDaGFuZ2VkLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5hY3RpdmU7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciA9IFtcbiAgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvcixcbiAgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IsXG4gIFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGxcbl07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuVXNlIGA8cGFwZXItaXRlbS1ib2R5PmAgaW4gYSBgPHBhcGVyLWl0ZW0+YCBvciBgPHBhcGVyLWljb24taXRlbT5gIHRvIG1ha2UgdHdvLVxub3IgdGhyZWUtIGxpbmUgaXRlbXMuIEl0IGlzIGEgZmxleCBpdGVtIHRoYXQgaXMgYSB2ZXJ0aWNhbCBmbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UaGUgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgYHNlY29uZGFyeWAgYXR0cmlidXRlIGlzIGdpdmVuIHNlY29uZGFyeSB0ZXh0XG5zdHlsaW5nLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0d28tbGluZSBpdGVtIHwgYDcycHhgXG5gLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdGhyZWUtbGluZSBpdGVtIHwgYDg4cHhgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yYCB8IEZvcmVncm91bmQgY29sb3IgZm9yIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogbmVlZGVkIGZvciB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB0byB3b3JrIG9uIGZmICovXG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdHdvLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0LCA3MnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RocmVlLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHQsIDg4cHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChbc2Vjb25kYXJ5XSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtLWJvZHknXG59KTtcbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlT2JqZWN0SWQgPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZU5hbWUgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uLCBjcmVhdGVDb2xsZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5IHtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgY29uZmlnX2VudHJ5X2lkPzogc3RyaW5nO1xuICBkZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGRpc2FibGVkX2J5OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4dEVudGl0eVJlZ2lzdHJ5RW50cnkgZXh0ZW5kcyBFbnRpdHlSZWdpc3RyeUVudHJ5IHtcbiAgdW5pcXVlX2lkOiBzdHJpbmc7XG4gIGNhcGFiaWxpdGllczogb2JqZWN0O1xuICBvcmlnaW5hbF9uYW1lPzogc3RyaW5nO1xuICBvcmlnaW5hbF9pY29uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXMge1xuICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgaWNvbj86IHN0cmluZyB8IG51bGw7XG4gIGRpc2FibGVkX2J5Pzogc3RyaW5nIHwgbnVsbDtcbiAgbmV3X2VudGl0eV9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGZpbmRCYXR0ZXJ5RW50aXR5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdXG4pOiBFbnRpdHlSZWdpc3RyeUVudHJ5IHwgdW5kZWZpbmVkID0+XG4gIGVudGl0aWVzLmZpbmQoXG4gICAgKGVudGl0eSkgPT5cbiAgICAgIGhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdICYmXG4gICAgICBoYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcyA9PT0gXCJiYXR0ZXJ5XCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudHJ5OiBFbnRpdHlSZWdpc3RyeUVudHJ5XG4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgaWYgKGVudHJ5Lm5hbWUpIHtcbiAgICByZXR1cm4gZW50cnkubmFtZTtcbiAgfVxuICBjb25zdCBzdGF0ZSA9IGhhc3Muc3RhdGVzW2VudHJ5LmVudGl0eV9pZF07XG4gIHJldHVybiBzdGF0ZSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpIDogbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFeHRlbmRlZEVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbik6IFByb21pc2U8RXh0RW50aXR5UmVnaXN0cnlFbnRyeT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9nZXRcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8RW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcz5cbik6IFByb21pc2U8RXh0RW50aXR5UmVnaXN0cnlFbnRyeT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3JlbW92ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEVudGl0eVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRW50aXR5UmVnaXN0cnkoY29ubikudGhlbigoZW50aXRpZXMpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZW50aXRpZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImVudGl0eV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxFbnRpdHlSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2VudGl0eVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hFbnRpdHlSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgcXVlcnksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGlzQ29tcG9uZW50TG9hZGVkIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZFwiO1xuaW1wb3J0IHsgZHluYW1pY0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9keW5hbWljLWVsZW1lbnQtZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIYVBhcGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHtcbiAgRXh0RW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBkZWxldGVJbnB1dEJvb2xlYW4sXG4gIGZldGNoSW5wdXRCb29sZWFuLFxuICB1cGRhdGVJbnB1dEJvb2xlYW4sXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9kYXRhL2lucHV0X2Jvb2xlYW5cIjtcbmltcG9ydCB7XG4gIGRlbGV0ZUlucHV0RGF0ZVRpbWUsXG4gIGZldGNoSW5wdXREYXRlVGltZSxcbiAgdXBkYXRlSW5wdXREYXRlVGltZSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2RhdGEvaW5wdXRfZGF0ZXRpbWVcIjtcbmltcG9ydCB7XG4gIGRlbGV0ZUlucHV0TnVtYmVyLFxuICBmZXRjaElucHV0TnVtYmVyLFxuICB1cGRhdGVJbnB1dE51bWJlcixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2RhdGEvaW5wdXRfbnVtYmVyXCI7XG5pbXBvcnQge1xuICBkZWxldGVJbnB1dFNlbGVjdCxcbiAgZmV0Y2hJbnB1dFNlbGVjdCxcbiAgdXBkYXRlSW5wdXRTZWxlY3QsXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9kYXRhL2lucHV0X3NlbGVjdFwiO1xuaW1wb3J0IHtcbiAgZGVsZXRlSW5wdXRUZXh0LFxuICBmZXRjaElucHV0VGV4dCxcbiAgdXBkYXRlSW5wdXRUZXh0LFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vZGF0YS9pbnB1dF90ZXh0XCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBIZWxwZXIgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9jb25zdFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vaGVscGVycy9mb3Jtcy9oYS1pbnB1dF9ib29sZWFuLWZvcm1cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2hlbHBlcnMvZm9ybXMvaGEtaW5wdXRfZGF0ZXRpbWUtZm9ybVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vaGVscGVycy9mb3Jtcy9oYS1pbnB1dF9udW1iZXItZm9ybVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vaGVscGVycy9mb3Jtcy9oYS1pbnB1dF9zZWxlY3QtZm9ybVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vaGVscGVycy9mb3Jtcy9oYS1pbnB1dF90ZXh0LWZvcm1cIjtcbmltcG9ydCBcIi4uLy4uL2VudGl0eS1yZWdpc3RyeS1iYXNpYy1lZGl0b3JcIjtcbmltcG9ydCB0eXBlIHsgSGFFbnRpdHlSZWdpc3RyeUJhc2ljRWRpdG9yIH0gZnJvbSBcIi4uLy4uL2VudGl0eS1yZWdpc3RyeS1iYXNpYy1lZGl0b3JcIjtcblxuY29uc3QgSEVMUEVSUyA9IHtcbiAgaW5wdXRfYm9vbGVhbjoge1xuICAgIGZldGNoOiBmZXRjaElucHV0Qm9vbGVhbixcbiAgICB1cGRhdGU6IHVwZGF0ZUlucHV0Qm9vbGVhbixcbiAgICBkZWxldGU6IGRlbGV0ZUlucHV0Qm9vbGVhbixcbiAgfSxcbiAgaW5wdXRfdGV4dDoge1xuICAgIGZldGNoOiBmZXRjaElucHV0VGV4dCxcbiAgICB1cGRhdGU6IHVwZGF0ZUlucHV0VGV4dCxcbiAgICBkZWxldGU6IGRlbGV0ZUlucHV0VGV4dCxcbiAgfSxcbiAgaW5wdXRfbnVtYmVyOiB7XG4gICAgZmV0Y2g6IGZldGNoSW5wdXROdW1iZXIsXG4gICAgdXBkYXRlOiB1cGRhdGVJbnB1dE51bWJlcixcbiAgICBkZWxldGU6IGRlbGV0ZUlucHV0TnVtYmVyLFxuICB9LFxuICBpbnB1dF9kYXRldGltZToge1xuICAgIGZldGNoOiBmZXRjaElucHV0RGF0ZVRpbWUsXG4gICAgdXBkYXRlOiB1cGRhdGVJbnB1dERhdGVUaW1lLFxuICAgIGRlbGV0ZTogZGVsZXRlSW5wdXREYXRlVGltZSxcbiAgfSxcbiAgaW5wdXRfc2VsZWN0OiB7XG4gICAgZmV0Y2g6IGZldGNoSW5wdXRTZWxlY3QsXG4gICAgdXBkYXRlOiB1cGRhdGVJbnB1dFNlbGVjdCxcbiAgICBkZWxldGU6IGRlbGV0ZUlucHV0U2VsZWN0LFxuICB9LFxufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJlbnRpdHktc2V0dGluZ3MtaGVscGVyLXRhYlwiKVxuZXhwb3J0IGNsYXNzIEVudGl0eVJlZ2lzdHJ5U2V0dGluZ3NIZWxwZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlbnRyeSE6IEV4dEVudGl0eVJlZ2lzdHJ5RW50cnk7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGRpYWxvZ0VsZW1lbnQhOiBIYVBhcGVyRGlhbG9nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9yPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2l0ZW0/OiBIZWxwZXIgfCBudWxsO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N1Ym1pdHRpbmc/OiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbXBvbmVudExvYWRlZD86IGJvb2xlYW47XG5cbiAgQHF1ZXJ5KFwiaGEtcmVnaXN0cnktYmFzaWMtZWRpdG9yXCIpXG4gIHByaXZhdGUgX3JlZ2lzdHJ5RWRpdG9yPzogSGFFbnRpdHlSZWdpc3RyeUJhc2ljRWRpdG9yO1xuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICB0aGlzLl9jb21wb25lbnRMb2FkZWQgPSBpc0NvbXBvbmVudExvYWRlZCh0aGlzLmhhc3MsIHRoaXMuZW50cnkucGxhdGZvcm0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImVudHJ5XCIpKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2l0ZW0gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9nZXRJdGVtKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKHRoaXMuX2l0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuZW50cnkuZW50aXR5X2lkXTtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSAuZGlhbG9nRWxlbWVudD0ke3RoaXMuZGlhbG9nRWxlbWVudH0+XG4gICAgICAgICR7dGhpcy5fZXJyb3IgPyBodG1sYCA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PiBgIDogXCJcIn1cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAkeyF0aGlzLl9jb21wb25lbnRMb2FkZWRcbiAgICAgICAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MucGxhdGZvcm1fbm90X2xvYWRlZFwiLFxuICAgICAgICAgICAgICAgIFwicGxhdGZvcm1cIixcbiAgICAgICAgICAgICAgICB0aGlzLmVudHJ5LnBsYXRmb3JtXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdGhpcy5faXRlbSA9PT0gbnVsbFxuICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy55YW1sX25vdF9lZGl0YWJsZVwiKVxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9PlxuICAgICAgICAgICAgICAgICAgJHtkeW5hbWljRWxlbWVudChgaGEtJHt0aGlzLmVudHJ5LnBsYXRmb3JtfS1mb3JtYCwge1xuICAgICAgICAgICAgICAgICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IHRoaXMuX2l0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5OiB0aGlzLmVudHJ5LFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgPGhhLXJlZ2lzdHJ5LWJhc2ljLWVkaXRvclxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAuZW50cnk9JHt0aGlzLmVudHJ5fVxuICAgICAgICAgID48L2hhLXJlZ2lzdHJ5LWJhc2ljLWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBjbGFzcz1cIndhcm5pbmdcIlxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2NvbmZpcm1EZWxldGVJdGVtfVxuICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3N1Ym1pdHRpbmcgfHxcbiAgICAgICAgICAoIXRoaXMuX2l0ZW0gJiYgIXN0YXRlT2JqPy5hdHRyaWJ1dGVzLnJlc3RvcmVkKX1cbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmRlbGV0ZVwiKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3VwZGF0ZUl0ZW19XG4gICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fc3VibWl0dGluZyB8fCAodGhpcy5faXRlbSAmJiAhdGhpcy5faXRlbS5uYW1lKX1cbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLnVwZGF0ZVwiKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pdGVtID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0SXRlbSgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IEhFTFBFUlNbdGhpcy5lbnRyeS5wbGF0Zm9ybV0uZmV0Y2godGhpcy5oYXNzISk7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHRoaXMuZW50cnkudW5pcXVlX2lkKSB8fCBudWxsO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgZmlyZUV2ZW50KHRoaXMuZGlhbG9nRWxlbWVudCBhcyBIVE1MRWxlbWVudCwgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUl0ZW0oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fc3VibWl0dGluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLl9jb21wb25lbnRMb2FkZWQgJiYgdGhpcy5faXRlbSkge1xuICAgICAgICBhd2FpdCBIRUxQRVJTW3RoaXMuZW50cnkucGxhdGZvcm1dLnVwZGF0ZShcbiAgICAgICAgICB0aGlzLmhhc3MhLFxuICAgICAgICAgIHRoaXMuX2l0ZW0uaWQsXG4gICAgICAgICAgdGhpcy5faXRlbVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5fcmVnaXN0cnlFZGl0b3I/LnVwZGF0ZUVudHJ5KCk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJjbG9zZS1kaWFsb2dcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IGVyci5tZXNzYWdlIHx8IFwiVW5rbm93biBlcnJvclwiO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY29uZmlybURlbGV0ZUl0ZW0oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKFxuICAgICAgIShhd2FpdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmNvbmZpcm1fZGVsZXRlXCJcbiAgICAgICAgKSxcbiAgICAgIH0pKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLl9jb21wb25lbnRMb2FkZWQgJiYgdGhpcy5faXRlbSkge1xuICAgICAgICBhd2FpdCBIRUxQRVJTW3RoaXMuZW50cnkucGxhdGZvcm1dLmRlbGV0ZSh0aGlzLmhhc3MhLCB0aGlzLl9pdGVtLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1t0aGlzLmVudHJ5LmVudGl0eV9pZF07XG4gICAgICAgIGlmICghc3RhdGVPYmo/LmF0dHJpYnV0ZXMucmVzdG9yZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MhLCB0aGlzLmVudHJ5LmVudGl0eV9pZCk7XG4gICAgICB9XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJjbG9zZS1kaWFsb2dcIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAuZm9ybSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgfVxuICAgICAgLmJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgICB9XG4gICAgICBtd2MtYnV0dG9uLndhcm5pbmcge1xuICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICB9XG4gICAgICAuZXJyb3Ige1xuICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICAuc2Vjb25kYXJ5IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJlbnRpdHktcGxhdGZvcm0taGVscGVyLXRhYlwiOiBFbnRpdHlSZWdpc3RyeVNldHRpbmdzSGVscGVyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB0eXBlIHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7XG4gIEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXMsXG4gIEV4dEVudGl0eVJlZ2lzdHJ5RW50cnksXG4gIHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXJlZ2lzdHJ5LWJhc2ljLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEhhRW50aXR5UmVnaXN0cnlCYXNpY0VkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGVudHJ5ITogRXh0RW50aXR5UmVnaXN0cnlFbnRyeTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9vcmlnRW50aXR5SWQhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXR5SWQhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGlzYWJsZWRCeSE6IHN0cmluZyB8IG51bGw7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3VibWl0dGluZz86IGJvb2xlYW47XG5cbiAgcHVibGljIGFzeW5jIHVwZGF0ZUVudHJ5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHBhcmFtczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPiA9IHtcbiAgICAgIG5ld19lbnRpdHlfaWQ6IHRoaXMuX2VudGl0eUlkLnRyaW0oKSxcbiAgICB9O1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZEJ5ID09PSBudWxsIHx8IHRoaXMuX2Rpc2FibGVkQnkgPT09IFwidXNlclwiKSB7XG4gICAgICBwYXJhbXMuZGlzYWJsZWRfYnkgPSB0aGlzLl9kaXNhYmxlZEJ5O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MhLCB0aGlzLl9vcmlnRW50aXR5SWQsIHBhcmFtcyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICBpZiAoIWNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImVudHJ5XCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmVudHJ5KSB7XG4gICAgICB0aGlzLl9vcmlnRW50aXR5SWQgPSB0aGlzLmVudHJ5LmVudGl0eV9pZDtcbiAgICAgIHRoaXMuX2VudGl0eUlkID0gdGhpcy5lbnRyeS5lbnRpdHlfaWQ7XG4gICAgICB0aGlzLl9kaXNhYmxlZEJ5ID0gdGhpcy5lbnRyeS5kaXNhYmxlZF9ieTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5oYXNzIHx8XG4gICAgICAhdGhpcy5lbnRyeSB8fFxuICAgICAgdGhpcy5lbnRyeS5lbnRpdHlfaWQgIT09IHRoaXMuX29yaWdFbnRpdHlJZFxuICAgICkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgaW52YWxpZERvbWFpblVwZGF0ZSA9XG4gICAgICBjb21wdXRlRG9tYWluKHRoaXMuX2VudGl0eUlkLnRyaW0oKSkgIT09XG4gICAgICBjb21wdXRlRG9tYWluKHRoaXMuZW50cnkuZW50aXR5X2lkKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIC52YWx1ZT0ke3RoaXMuX2VudGl0eUlkfVxuICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2VudGl0eUlkQ2hhbmdlZH1cbiAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmVudGl0eV9pZFwiXG4gICAgICAgICl9XG4gICAgICAgIGVycm9yLW1lc3NhZ2U9XCJEb21haW4gbmVlZHMgdG8gc3RheSB0aGUgc2FtZVwiXG4gICAgICAgIC5pbnZhbGlkPSR7aW52YWxpZERvbWFpblVwZGF0ZX1cbiAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fc3VibWl0dGluZ31cbiAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgLmNoZWNrZWQ9JHshdGhpcy5fZGlzYWJsZWRCeX1cbiAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fZGlzYWJsZWRCeUNoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmVudGl0eV9yZWdpc3RyeS5lZGl0b3IuZW5hYmxlZF9sYWJlbFwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLl9kaXNhYmxlZEJ5ICYmIHRoaXMuX2Rpc2FibGVkQnkgIT09IFwidXNlclwiXG4gICAgICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmVuYWJsZWRfY2F1c2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjYXVzZVwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgYGNvbmZpZ19lbnRyeS5kaXNhYmxlZF9ieS4ke3RoaXMuX2Rpc2FibGVkQnl9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuZW50aXR5X3JlZ2lzdHJ5LmVkaXRvci5lbmFibGVkX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGJyIC8+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmVudGl0eV9yZWdpc3RyeS5lZGl0b3Iubm90ZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1zd2l0Y2g+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5SWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLl9lbnRpdHlJZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVkQnlDaGFuZ2VkKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVkQnkgPSAoZXYudGFyZ2V0IGFzIEhhU3dpdGNoKS5jaGVja2VkID8gbnVsbCA6IFwidXNlclwiO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5yb3cge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgLnNlY29uZGFyeSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpCQTtBQTRCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0VBO0FBOEVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUE2QkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFvQ0E7QUFwQ0E7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTJCQTtBQVVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBS0E7QUFLQTtBQUtBO0FBS0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFyQkE7QUE2QkE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBQUE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUE5QkE7QUFBQTtBQUFBO0FBQUE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFNQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQTs7O0FBeENBO0FBNENBO0FBakZBO0FBQUE7QUFBQTtBQUFBO0FBb0ZBO0FBQ0E7QUFDQTtBQXRGQTtBQUFBO0FBQUE7QUFBQTtBQXlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0ZBO0FBQUE7QUFBQTtBQUFBO0FBZ0dBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoSEE7QUFBQTtBQUFBO0FBQUE7QUFtSEE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCQTtBQTVLQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBU0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFBQTtBQUFBO0FBQUE7QUE2QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBQUE7QUFBQTtBQUFBO0FBeUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7QUFJQTs7O0FBS0E7QUFTQTtBQUdBOzs7OztBQW5DQTtBQTJDQTtBQS9GQTtBQUFBO0FBQUE7QUFBQTtBQWtHQTtBQUNBO0FBbkdBO0FBQUE7QUFBQTtBQUFBO0FBc0dBO0FBQ0E7QUF2R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBHQTs7Ozs7Ozs7QUFBQTtBQVNBO0FBbkhBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
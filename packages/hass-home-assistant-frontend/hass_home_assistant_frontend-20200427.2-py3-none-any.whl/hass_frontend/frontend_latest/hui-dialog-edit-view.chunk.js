(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-view"],{

/***/ "./src/common/string/slugify.ts":
/*!**************************************!*\
  !*** ./src/common/string/slugify.ts ***!
  \**************************************/
/*! exports provided: slugify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
// https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
const slugify = value => {
  const a = "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b = "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");
  return value.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
  .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
  .replace(/&/g, "-and-") // Replace & with 'and'
  .replace(/[^\w-]+/g, "") // Remove all non-word characters
  .replace(/--+/g, "-") // Replace multiple - with single -
  .replace(/^-+/, "") // Trim - from start of text
  .replace(/-+$/, ""); // Trim - from end of text
};

/***/ }),

/***/ "./src/components/dialog/ha-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: HaIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIronFocusablesHelper", function() { return HaIronFocusablesHelper; });
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


const HaIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/ha-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDialog", function() { return HaPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-iron-focusables-helper */ "./src/components/dialog/ha-iron-focusables-helper.js");



const paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

const haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _ha_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_2__["HaIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore

class HaPaperDialog extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass) {}
// @ts-ignore
customElements.define("ha-paper-dialog", HaPaperDialog);

/***/ }),

/***/ "./src/data/user.ts":
/*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
/*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, GROUPS, fetchUsers, createUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_ADMIN", function() { return SYSTEM_GROUP_ID_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_USER", function() { return SYSTEM_GROUP_ID_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_READ_ONLY", function() { return SYSTEM_GROUP_ID_READ_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUPS", function() { return GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
const SYSTEM_GROUP_ID_ADMIN = "system-admin";
const SYSTEM_GROUP_ID_USER = "system-users";
const SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
const GROUPS = [SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_ADMIN];
const fetchUsers = async hass => hass.callWS({
  type: "config/auth/list"
});
const createUser = async (hass, name, group_ids) => hass.callWS({
  type: "config/auth/create",
  name,
  group_ids
});
const updateUser = async (hass, userId, params) => hass.callWS(Object.assign({}, params, {
  type: "config/auth/update",
  user_id: userId
}));
const deleteUser = async (hass, userId) => hass.callWS({
  type: "config/auth/delete",
  user_id: userId
});

/***/ }),

/***/ "./src/panels/lovelace/badges/hui-error-badge.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/badges/hui-error-badge.ts ***!
  \*******************************************************/
/*! exports provided: createErrorBadgeElement, createErrorBadgeConfig, HuiErrorBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorBadgeElement", function() { return createErrorBadgeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorBadgeConfig", function() { return createErrorBadgeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiErrorBadge", function() { return HuiErrorBadge; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_label_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-label-badge */ "./src/components/ha-label-badge.ts");
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



const createErrorBadgeElement = config => {
  const el = document.createElement("hui-error-badge");
  el.setConfig(config);
  return el;
};
const createErrorBadgeConfig = error => ({
  type: "error",
  error
});
let HuiErrorBadge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-error-badge")], function (_initialize, _LitElement) {
  class HuiErrorBadge extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiErrorBadge,
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
        this._config = config;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-label-badge
        label="Error"
        icon="hass:alert"
        description=${this._config.error}
      ></ha-label-badge>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        --ha-label-badge-color: var(--label-badge-red, #fce588);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/hui-badge-preview.ts":
/*!*********************************************************!*\
  !*** ./src/panels/lovelace/editor/hui-badge-preview.ts ***!
  \*********************************************************/
/*! exports provided: HuiBadgePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiBadgePreview", function() { return HuiBadgePreview; });
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
/* harmony import */ var _badges_hui_error_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../badges/hui-error-badge */ "./src/panels/lovelace/badges/hui-error-badge.ts");
/* harmony import */ var _create_element_create_badge_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-element/create-badge-element */ "./src/panels/lovelace/create-element/create-badge-element.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class HuiBadgePreview extends HTMLElement {
  get _error() {
    var _this$_element;

    return ((_this$_element = this._element) === null || _this$_element === void 0 ? void 0 : _this$_element.tagName) === "HUI-ERROR-CARD";
  }

  constructor() {
    super();

    _defineProperty(this, "_hass", void 0);

    _defineProperty(this, "_element", void 0);

    _defineProperty(this, "_config", void 0);

    this.addEventListener("ll-rebuild", () => {
      this._cleanup();

      if (this._config) {
        this.config = this._config;
      }
    });
  }

  set hass(hass) {
    if (!this._hass || this._hass.language !== hass.language) {
      this.style.direction = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_0__["computeRTL"])(hass) ? "rtl" : "ltr";
    }

    this._hass = hass;

    if (this._element) {
      this._element.hass = hass;
    }
  }

  set error(error) {
    this._createBadge(Object(_badges_hui_error_badge__WEBPACK_IMPORTED_MODULE_2__["createErrorBadgeConfig"])(`${error.type}: ${error.message}`));
  }

  set config(configValue) {
    const curConfig = this._config;
    this._config = configValue;

    if (!configValue) {
      this._cleanup();

      return;
    }

    if (!this._element) {
      this._createBadge(configValue);

      return;
    } // in case the element was an error element we always want to recreate it


    if (!this._error && curConfig && configValue.type === curConfig.type) {
      this._element.setConfig(configValue);
    } else {
      this._createBadge(configValue);
    }
  }

  _createBadge(configValue) {
    this._cleanup();

    this._element = Object(_create_element_create_badge_element__WEBPACK_IMPORTED_MODULE_3__["createBadgeElement"])(configValue);

    if (this._hass) {
      this._element.hass = this._hass;
    }

    this.appendChild(this._element);
  }

  _cleanup() {
    if (!this._element) {
      return;
    }

    this.removeChild(this._element);
    this._element = undefined;
  }

}
customElements.define("hui-badge-preview", HuiBadgePreview);

/***/ }),

/***/ "./src/panels/lovelace/editor/view-editor/hui-dialog-edit-view.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/editor/view-editor/hui-dialog-edit-view.ts ***!
  \************************************************************************/
/*! exports provided: HuiDialogEditView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogEditView", function() { return HuiDialogEditView; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _hui_edit_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hui-edit-view */ "./src/panels/lovelace/editor/view-editor/hui-edit-view.ts");
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



let HuiDialogEditView = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-dialog-edit-view")], function (_initialize, _LitElement) {
  class HuiDialogEditView extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiDialogEditView,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        await this.updateComplete;
        this.shadowRoot.children[0].showDialog();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hui-edit-view
        .hass=${this.hass}
        .lovelace="${this._params.lovelace}"
        .viewIndex="${this._params.viewIndex}"
      >
      </hui-edit-view>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/view-editor/hui-edit-view.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/editor/view-editor/hui-edit-view.ts ***!
  \*****************************************************************/
/*! exports provided: HuiEditView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiEditView", function() { return HuiEditView; });
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/lovelace/components/hui-entity-editor.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _hui_badge_preview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hui-badge-preview */ "./src/panels/lovelace/editor/hui-badge-preview.ts");
/* harmony import */ var _process_editor_entities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../process-editor-entities */ "./src/panels/lovelace/editor/process-editor-entities.ts");
/* harmony import */ var _hui_view_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hui-view-editor */ "./src/panels/lovelace/editor/view-editor/hui-view-editor.ts");
/* harmony import */ var _hui_view_visibility_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hui-view-visibility-editor */ "./src/panels/lovelace/editor/view-editor/hui-view-visibility-editor.ts");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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



















let HuiEditView = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["customElement"])("hui-edit-view")], function (_initialize, _LitElement) {
  class HuiEditView extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this._saving = false;
      this._curTabIndex = 0;
    }

  }

  return {
    F: HuiEditView,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "viewIndex",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_badges",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_cards",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_saving",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_curTab",
      value: void 0
    }, {
      kind: "field",
      key: "_curTabIndex",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog() {
        // Wait till dialog is rendered.
        if (this._dialog == null) {
          await this.updateComplete;
        }

        if (this.viewIndex === undefined) {
          this._config = {};
          this._badges = [];
          this._cards = [];
        } else {
          const _config$views$this$vi = this.lovelace.config.views[this.viewIndex],
                {
            cards,
            badges
          } = _config$views$this$vi,
                viewConfig = _objectWithoutPropertiesLoose(_config$views$this$vi, ["cards", "badges"]);

          this._config = viewConfig;
          this._badges = badges ? Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_15__["processEditorEntities"])(badges) : [];
          this._cards = cards;
        }

        this._dialog.open();
      }
    }, {
      kind: "get",
      key: "_dialog",
      value: function _dialog() {
        return this.shadowRoot.querySelector("ha-paper-dialog");
      }
    }, {
      kind: "get",
      key: "_viewConfigTitle",
      value: function _viewConfigTitle() {
        if (!this._config || !this._config.title) {
          return this.hass.localize("ui.panel.lovelace.editor.edit_view.header");
        }

        return this.hass.localize("ui.panel.lovelace.editor.edit_view.header_name", "name", this._config.title);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$_badges;

        let content;

        switch (this._curTab) {
          case "tab-settings":
            content = lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
          <hui-view-editor
            .isNew=${this.viewIndex === undefined}
            .hass=${this.hass}
            .config="${this._config}"
            @view-config-changed="${this._viewConfigChanged}"
          ></hui-view-editor>
        `;
            break;

          case "tab-badges":
            content = lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
          ${((_this$_badges = this._badges) === null || _this$_badges === void 0 ? void 0 : _this$_badges.length) ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <div class="preview-badges">
                  ${this._badges.map(badgeConfig => {
              return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                      <hui-badge-preview
                        .hass=${this.hass}
                        .config=${badgeConfig}
                      ></hui-badge-preview>
                    `;
            })}
                </div>
              ` : ""}
          <hui-entity-editor
            .hass=${this.hass}
            .entities="${this._badges}"
            @entities-changed="${this._badgesChanged}"
          ></hui-entity-editor>
        `;
            break;

          case "tab-visibility":
            content = lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
          <hui-view-visibility-editor
            .hass="${this.hass}"
            .config="${this._config}"
            @view-visibility-changed="${this._viewVisibilityChanged}"
          ></hui-view-visibility-editor>
        `;
            break;

          case "tab-cards":
            content = lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]` Cards `;
            break;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <ha-paper-dialog with-backdrop modal>
        <h2>
          ${this._viewConfigTitle}
        </h2>
        <paper-tabs
          scrollable
          hide-scroll-buttons
          .selected="${this._curTabIndex}"
          @selected-item-changed="${this._handleTabSelected}"
        >
          <paper-tab id="tab-settings"
            >${this.hass.localize("ui.panel.lovelace.editor.edit_view.tab_settings")}</paper-tab
          >
          <paper-tab id="tab-badges"
            >${this.hass.localize("ui.panel.lovelace.editor.edit_view.tab_badges")}</paper-tab
          >
          <paper-tab id="tab-visibility"
            >${this.hass.localize("ui.panel.lovelace.editor.edit_view.tab_visibility")}</paper-tab
          >
        </paper-tabs>
        <paper-dialog-scrollable> ${content} </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          ${this.viewIndex !== undefined ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <mwc-button class="warning" @click="${this._deleteConfirm}">
                  ${this.hass.localize("ui.panel.lovelace.editor.edit_view.delete")}
                </mwc-button>
              ` : ""}
          <mwc-button @click="${this._closeDialog}"
            >${this.hass.localize("ui.common.cancel")}</mwc-button
          >
          <mwc-button
            ?disabled="${!this._config || this._saving}"
            @click="${this._save}"
          >
            <paper-spinner
              ?active="${this._saving}"
              alt="Saving"
            ></paper-spinner>
            ${this.hass.localize("ui.common.save")}</mwc-button
          >
        </div>
      </ha-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_delete",
      value: async function _delete() {
        try {
          await this.lovelace.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_13__["deleteView"])(this.lovelace.config, this.viewIndex));

          this._closeDialog();

          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_8__["navigate"])(this, `/${window.location.pathname.split("/")[1]}`);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showAlertDialog"])(this, {
            text: `Deleting failed: ${err.message}`
          });
        }
      }
    }, {
      kind: "method",
      key: "_deleteConfirm",
      value: function _deleteConfirm() {
        var _this$_cards, _this$_cards2, _this$_config, _this$_cards3;

        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showConfirmationDialog"])(this, {
          title: this.hass.localize(`ui.panel.lovelace.views.confirm_delete${((_this$_cards = this._cards) === null || _this$_cards === void 0 ? void 0 : _this$_cards.length) ? `_existing_cards` : ""}`),
          text: this.hass.localize(`ui.panel.lovelace.views.confirm_delete${((_this$_cards2 = this._cards) === null || _this$_cards2 === void 0 ? void 0 : _this$_cards2.length) ? `_existing_cards` : ""}_text`, "name", ((_this$_config = this._config) === null || _this$_config === void 0 ? void 0 : _this$_config.title) || "Unnamed view", "number", ((_this$_cards3 = this._cards) === null || _this$_cards3 === void 0 ? void 0 : _this$_cards3.length) || 0),
          confirm: () => this._delete()
        });
      }
    }, {
      kind: "method",
      key: "_resizeDialog",
      value: async function _resizeDialog() {
        await this.updateComplete;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this._dialog, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._curTabIndex = 0;
        this.lovelace = undefined;
        this._config = {};
        this._badges = [];

        this._dialog.close();
      }
    }, {
      kind: "method",
      key: "_handleTabSelected",
      value: function _handleTabSelected(ev) {
        if (!ev.detail.value) {
          return;
        }

        this._curTab = ev.detail.value.id;

        this._resizeDialog();
      }
    }, {
      kind: "method",
      key: "_save",
      value: async function _save() {
        if (!this._config) {
          return;
        }

        if (!this._isConfigChanged()) {
          this._closeDialog();

          return;
        }

        this._saving = true;
        const viewConf = Object.assign({}, this._config, {
          badges: this._badges,
          cards: this._cards
        });
        const lovelace = this.lovelace;

        try {
          await lovelace.saveConfig(this._creatingView ? Object(_config_util__WEBPACK_IMPORTED_MODULE_13__["addView"])(lovelace.config, viewConf) : Object(_config_util__WEBPACK_IMPORTED_MODULE_13__["replaceView"])(lovelace.config, this.viewIndex, viewConf));

          this._closeDialog();
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_10__["showAlertDialog"])(this, {
            text: `Saving failed: ${err.message}`
          });
        } finally {
          this._saving = false;
        }
      }
    }, {
      kind: "method",
      key: "_viewConfigChanged",
      value: function _viewConfigChanged(ev) {
        if (ev.detail && ev.detail.config) {
          this._config = ev.detail.config;
        }
      }
    }, {
      kind: "method",
      key: "_viewVisibilityChanged",
      value: function _viewVisibilityChanged(ev) {
        if (ev.detail.visible && this._config) {
          this._config.visible = ev.detail.visible;
        }
      }
    }, {
      kind: "method",
      key: "_badgesChanged",
      value: function _badgesChanged(ev) {
        if (!this._badges || !this.hass || !ev.detail || !ev.detail.entities) {
          return;
        }

        this._badges = Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_15__["processEditorEntities"])(ev.detail.entities);

        this._resizeDialog();
      }
    }, {
      kind: "method",
      key: "_isConfigChanged",
      value: function _isConfigChanged() {
        return this._creatingView || JSON.stringify(this._config) !== JSON.stringify(this.lovelace.config.views[this.viewIndex]);
      }
    }, {
      kind: "get",
      key: "_creatingView",
      value: function _creatingView() {
        return this.viewIndex === undefined;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }
        @media all and (min-width: 660px) {
          ha-paper-dialog {
            width: 650px;
          }
        }
        ha-paper-dialog {
          max-width: 650px;
        }
        paper-tabs {
          --paper-tabs-selection-bar-color: var(--primary-color);
          text-transform: uppercase;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        mwc-button.warning {
          margin-right: auto;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        paper-dialog-scrollable {
          margin-top: 0;
        }
        .hidden {
          display: none;
        }
        .error {
          color: var(--error-color);
          border-bottom: 1px solid var(--error-color);
        }
        .preview-badges {
          display: flex;
          justify-content: center;
          margin: 12px 16px;
          flex-wrap: wrap;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/view-editor/hui-view-editor.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/editor/view-editor/hui-view-editor.ts ***!
  \*******************************************************************/
/*! exports provided: HuiViewEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiViewEditor", function() { return HuiViewEditor; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_string_slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/string/slugify */ "./src/common/string/slugify.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _config_elements_config_elements_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-elements/config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");
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








let HuiViewEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-view-editor")], function (_initialize, _LitElement) {
  class HuiViewEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiViewEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "isNew",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      key: "_suggestedPath",

      value() {
        return false;
      }

    }, {
      kind: "get",
      key: "_path",
      value: function _path() {
        if (!this._config) {
          return "";
        }

        return this._config.path || "";
      }
    }, {
      kind: "get",
      key: "_title",
      value: function _title() {
        if (!this._config) {
          return "";
        }

        return this._config.title || "";
      }
    }, {
      kind: "get",
      key: "_icon",
      value: function _icon() {
        if (!this._config) {
          return "";
        }

        return this._config.icon || "";
      }
    }, {
      kind: "get",
      key: "_theme",
      value: function _theme() {
        if (!this._config) {
          return "";
        }

        return this._config.theme || "Backend-selected";
      }
    }, {
      kind: "get",
      key: "_panel",
      value: function _panel() {
        if (!this._config) {
          return false;
        }

        return this._config.panel || false;
      }
    }, {
      kind: "set",
      key: "config",
      value: function config(_config) {
        this._config = _config;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${_config_elements_config_elements_style__WEBPACK_IMPORTED_MODULE_6__["configElementStyle"]}
      <div class="card-config">
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.title")}  (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value=${this._title}
          .configValue=${"title"}
          @value-changed=${this._valueChanged}
          @blur=${this._handleTitleBlur}
        ></paper-input>
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")}  (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value=${this._icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.url")}  (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value=${this._path}
          .configValue=${"path"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <hui-theme-select-editor
          .hass=${this.hass}
          .value=${this._theme}
          .configValue=${"theme"}
          @value-changed=${this._valueChanged}
        ></hui-theme-select-editor>
        <ha-switch
          .checked=${this._panel !== false}
          .configValue=${"panel"}
          @change=${this._valueChanged}
          >${this.hass.localize("ui.panel.lovelace.editor.view.panel_mode.title")}</ha-switch
        >
        <span class="panel"
          >${this.hass.localize("ui.panel.lovelace.editor.view.panel_mode.description")}</span
        >
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const target = ev.currentTarget;

        if (this[`_${target.configValue}`] === target.value) {
          return;
        }

        let newConfig;

        if (target.configValue) {
          newConfig = Object.assign({}, this._config, {
            [target.configValue]: target.checked !== undefined ? target.checked : target.value
          });
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "view-config-changed", {
          config: newConfig
        });
      }
    }, {
      kind: "method",
      key: "_handleTitleBlur",
      value: function _handleTitleBlur(ev) {
        if (!this.isNew || this._suggestedPath || this._config.path || !ev.currentTarget.value) {
          return;
        }

        const config = Object.assign({}, this._config, {
          path: Object(_common_string_slugify__WEBPACK_IMPORTED_MODULE_3__["slugify"])(ev.currentTarget.value)
        });
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "view-config-changed", {
          config
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      .panel {
        color: var(--secondary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/view-editor/hui-view-visibility-editor.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/view-editor/hui-view-visibility-editor.ts ***!
  \******************************************************************************/
/*! exports provided: HuiViewVisibilityEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiViewVisibilityEditor", function() { return HuiViewVisibilityEditor; });
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/user */ "./src/data/user.ts");
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








let HuiViewVisibilityEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("hui-view-visibility-editor")], function (_initialize, _LitElement) {
  class HuiViewVisibilityEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiViewVisibilityEditor,
    d: [{
      kind: "set",
      key: "config",
      value: function config(_config) {
        this._config = _config;
        this._visible = this._config.visible === undefined ? true : this._config.visible;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_users",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_visible",
      value: void 0
    }, {
      kind: "field",
      key: "_sortedUsers",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(users => {
          return users.sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_5__["compare"])(a.name, b.name));
        });
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HuiViewVisibilityEditor.prototype), "firstUpdated", this).call(this, changedProps);

        Object(_data_user__WEBPACK_IMPORTED_MODULE_6__["fetchUsers"])(this.hass).then(users => {
          this._users = users.filter(user => !user.system_generated);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "iron-resize");
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this._users) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <p>
        ${this.hass.localize("ui.panel.lovelace.editor.edit_view.visibility.select_users")}
      </p>
      ${this._sortedUsers(this._users).map(user => lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
          <paper-item>
            <paper-item-body>${user.name}</paper-item-body>
            <ha-switch
              .userId="${user.id}"
              @change=${this.valChange}
              .checked=${this.checkUser(user.id)}
            ></ha-switch>
          </paper-item>
        `)}
    `;
      }
    }, {
      kind: "method",
      key: "checkUser",
      value: function checkUser(userId) {
        if (this._visible === undefined) {
          return true;
        }

        if (typeof this._visible === "boolean") {
          return this._visible;
        }

        return this._visible.some(u => u.user === userId);
      }
    }, {
      kind: "method",
      key: "valChange",
      value: function valChange(ev) {
        const userId = ev.currentTarget.userId;
        const checked = ev.currentTarget.checked;
        let newVisible = [];

        if (typeof this._visible === "boolean") {
          const lastValue = this._visible;

          if (lastValue) {
            newVisible = this._users.map(u => {
              return {
                user: u.id
              };
            });
          }
        } else {
          newVisible = [...this._visible];
        }

        if (checked === true) {
          const newEntry = {
            user: userId
          };
          newVisible.push(newEntry);
        } else {
          newVisible = newVisible.filter(c => c.user !== userId);
        } // this removes users that doesn't exists in system but had view permissions


        this._visible = newVisible.filter(c => this._users.some(u => u.id === c.user));
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "view-visibility-changed", {
          visible: this._visible
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      :host {
        display: block;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LXZpZXcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9zbHVnaWZ5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2JhZGdlcy9odWktZXJyb3ItYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvaHVpLWJhZGdlLXByZXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3Ivdmlldy1lZGl0b3IvaHVpLWRpYWxvZy1lZGl0LXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3Ivdmlldy1lZGl0b3IvaHVpLWVkaXQtdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci92aWV3LWVkaXRvci9odWktdmlldy1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3Ivdmlldy1lZGl0b3IvaHVpLXZpZXctdmlzaWJpbGl0eS1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaGFnZW1hbm4vMzgyYWRmYzU3YWRiZDVhZjA3OGRjOTNmZWVmMDFmZTFcbmV4cG9ydCBjb25zdCBzbHVnaWZ5ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYSA9XG4gICAgXCLDoMOhw6TDosOjw6XEg8OmxIXDp8SHxI3EkcSPw6jDqcSbxJfDq8OqxJnEn8e14binw6zDrcOvw67Er8WC4bi/x7nFhMWIw7HDssOzw7bDtMWTw7jhuZXFlcWZw5/Fn8WbxaHImcWlyJvDucO6w7zDu8eYxa/FscWrxbPhuoPhuo3Dv8O9xbrFvsW8wrcvXyw6O1wiO1xuICBjb25zdCBiID1cbiAgICBcImFhYWFhYWFhYWNjY2RkZWVlZWVlZWdnaGlpaWlpbG1ubm5ub29vb29vcHJyc3Nzc3N0dHV1dXV1dXV1dXd4eXl6enotLS0tLS1cIjtcbiAgY29uc3QgcCA9IG5ldyBSZWdFeHAoYS5zcGxpdChcIlwiKS5qb2luKFwifFwiKSwgXCJnXCIpO1xuXG4gIHJldHVybiB2YWx1ZVxuICAgIC50b1N0cmluZygpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIikgLy8gUmVwbGFjZSBzcGFjZXMgd2l0aCAtXG4gICAgLnJlcGxhY2UocCwgKGMpID0+IGIuY2hhckF0KGEuaW5kZXhPZihjKSkpIC8vIFJlcGxhY2Ugc3BlY2lhbCBjaGFyYWN0ZXJzXG4gICAgLnJlcGxhY2UoLyYvZywgXCItYW5kLVwiKSAvLyBSZXBsYWNlICYgd2l0aCAnYW5kJ1xuICAgIC5yZXBsYWNlKC9bXlxcdy1dKy9nLCBcIlwiKSAvLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnNcbiAgICAucmVwbGFjZSgvLS0rL2csIFwiLVwiKSAvLyBSZXBsYWNlIG11bHRpcGxlIC0gd2l0aCBzaW5nbGUgLVxuICAgIC5yZXBsYWNlKC9eLSsvLCBcIlwiKSAvLyBUcmltIC0gZnJvbSBzdGFydCBvZiB0ZXh0XG4gICAgLnJlcGxhY2UoLy0rJC8sIFwiXCIpOyAvLyBUcmltIC0gZnJvbSBlbmQgb2YgdGV4dFxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyXCI7XG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbiAobm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB0eXBlIHsgUGFwZXJEaWFsb2dFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXJcIjtcblxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgUGFwZXJEaWFsb2dFbGVtZW50XG4+O1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG4vLyBAdHMtaWdub3JlXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsIH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgU1lTVEVNX0dST1VQX0lEX0FETUlOID0gXCJzeXN0ZW0tYWRtaW5cIjtcbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfVVNFUiA9IFwic3lzdGVtLXVzZXJzXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0dST1VQX0lEX1JFQURfT05MWSA9IFwic3lzdGVtLXJlYWQtb25seVwiO1xuXG5leHBvcnQgY29uc3QgR1JPVVBTID0gW1NZU1RFTV9HUk9VUF9JRF9VU0VSLCBTWVNURU1fR1JPVVBfSURfQURNSU5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzX293bmVyOiBib29sZWFuO1xuICBpc19hY3RpdmU6IGJvb2xlYW47XG4gIHN5c3RlbV9nZW5lcmF0ZWQ6IGJvb2xlYW47XG4gIGdyb3VwX2lkczogc3RyaW5nW107XG4gIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFsW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlVXNlclBhcmFtcyB7XG4gIG5hbWU/OiBVc2VyW1wibmFtZVwiXTtcbiAgZ3JvdXBfaWRzPzogVXNlcltcImdyb3VwX2lkc1wiXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8VXNlcltdPih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9saXN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgbmFtZTogc3RyaW5nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgZ3JvdXBfaWRzPzogVXNlcltcImdyb3VwX2lkc1wiXVxuKSA9PlxuICBoYXNzLmNhbGxXUzx7IHVzZXI6IFVzZXIgfT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvY3JlYXRlXCIsXG4gICAgbmFtZSxcbiAgICBncm91cF9pZHMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jIChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdXNlcklkOiBzdHJpbmcsXG4gIHBhcmFtczogVXBkYXRlVXNlclBhcmFtc1xuKSA9PlxuICBoYXNzLmNhbGxXUzx7IHVzZXI6IFVzZXIgfT4oe1xuICAgIC4uLnBhcmFtcyxcbiAgICB0eXBlOiBcImNvbmZpZy9hdXRoL3VwZGF0ZVwiLFxuICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKGhhc3M6IEhvbWVBc3Npc3RhbnQsIHVzZXJJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzx2b2lkPih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9kZWxldGVcIixcbiAgICB1c2VyX2lkOiB1c2VySWQsXG4gIH0pO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWxhYmVsLWJhZGdlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUJhZGdlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFcnJvckJhZGdlQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVycm9yQmFkZ2VFbGVtZW50ID0gKGNvbmZpZykgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJodWktZXJyb3ItYmFkZ2VcIik7XG4gIGVsLnNldENvbmZpZyhjb25maWcpO1xuICByZXR1cm4gZWw7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRXJyb3JCYWRnZUNvbmZpZyA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogXCJlcnJvclwiLFxuICBlcnJvcixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1lcnJvci1iYWRnZVwiKVxuZXhwb3J0IGNsYXNzIEh1aUVycm9yQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VCYWRnZSB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBFcnJvckJhZGdlQ29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBFcnJvckJhZGdlQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtbGFiZWwtYmFkZ2VcbiAgICAgICAgbGFiZWw9XCJFcnJvclwiXG4gICAgICAgIGljb249XCJoYXNzOmFsZXJ0XCJcbiAgICAgICAgZGVzY3JpcHRpb249JHt0aGlzLl9jb25maWcuZXJyb3J9XG4gICAgICA+PC9oYS1sYWJlbC1iYWRnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1yZWQsICNmY2U1ODgpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lcnJvci1iYWRnZVwiOiBIdWlFcnJvckJhZGdlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1sYWJlbC1iYWRnZVwiO1xuaW1wb3J0IHsgTG92ZWxhY2VCYWRnZUNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVFcnJvckJhZGdlQ29uZmlnIH0gZnJvbSBcIi4uL2JhZGdlcy9odWktZXJyb3ItYmFkZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUJhZGdlRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGUtZWxlbWVudC9jcmVhdGUtYmFkZ2UtZWxlbWVudFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VCYWRnZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29uZmlnRXJyb3IgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgSHVpQmFkZ2VQcmV2aWV3IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBwcml2YXRlIF9oYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBwcml2YXRlIF9lbGVtZW50PzogTG92ZWxhY2VCYWRnZTtcblxuICBwcml2YXRlIF9jb25maWc/OiBMb3ZlbGFjZUJhZGdlQ29uZmlnO1xuXG4gIHByaXZhdGUgZ2V0IF9lcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudD8udGFnTmFtZSA9PT0gXCJIVUktRVJST1ItQ0FSRFwiO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJsbC1yZWJ1aWxkXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgIGlmICh0aGlzLl9jb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLl9jb25maWc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXQgaGFzcyhoYXNzOiBIb21lQXNzaXN0YW50KSB7XG4gICAgaWYgKCF0aGlzLl9oYXNzIHx8IHRoaXMuX2hhc3MubGFuZ3VhZ2UgIT09IGhhc3MubGFuZ3VhZ2UpIHtcbiAgICAgIHRoaXMuc3R5bGUuZGlyZWN0aW9uID0gY29tcHV0ZVJUTChoYXNzKSA/IFwicnRsXCIgOiBcImx0clwiO1xuICAgIH1cblxuICAgIHRoaXMuX2hhc3MgPSBoYXNzO1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50Lmhhc3MgPSBoYXNzO1xuICAgIH1cbiAgfVxuXG4gIHNldCBlcnJvcihlcnJvcjogQ29uZmlnRXJyb3IpIHtcbiAgICB0aGlzLl9jcmVhdGVCYWRnZShcbiAgICAgIGNyZWF0ZUVycm9yQmFkZ2VDb25maWcoYCR7ZXJyb3IudHlwZX06ICR7ZXJyb3IubWVzc2FnZX1gKVxuICAgICk7XG4gIH1cblxuICBzZXQgY29uZmlnKGNvbmZpZ1ZhbHVlOiBMb3ZlbGFjZUJhZGdlQ29uZmlnKSB7XG4gICAgY29uc3QgY3VyQ29uZmlnID0gdGhpcy5fY29uZmlnO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZ1ZhbHVlO1xuXG4gICAgaWYgKCFjb25maWdWYWx1ZSkge1xuICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5fY3JlYXRlQmFkZ2UoY29uZmlnVmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGluIGNhc2UgdGhlIGVsZW1lbnQgd2FzIGFuIGVycm9yIGVsZW1lbnQgd2UgYWx3YXlzIHdhbnQgdG8gcmVjcmVhdGUgaXRcbiAgICBpZiAoIXRoaXMuX2Vycm9yICYmIGN1ckNvbmZpZyAmJiBjb25maWdWYWx1ZS50eXBlID09PSBjdXJDb25maWcudHlwZSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRDb25maWcoY29uZmlnVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jcmVhdGVCYWRnZShjb25maWdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmFkZ2UoY29uZmlnVmFsdWU6IExvdmVsYWNlQmFkZ2VDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IGNyZWF0ZUJhZGdlRWxlbWVudChjb25maWdWYWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faGFzcykge1xuICAgICAgdGhpcy5fZWxlbWVudCEuaGFzcyA9IHRoaXMuX2hhc3M7XG4gICAgfVxuXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50ISk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbnVwKCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1iYWRnZS1wcmV2aWV3XCI6IEh1aUJhZGdlUHJldmlldztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJodWktYmFkZ2UtcHJldmlld1wiLCBIdWlCYWRnZVByZXZpZXcpO1xuIiwiaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4vaHVpLWVkaXQtdmlld1wiO1xuaW1wb3J0IHsgRWRpdFZpZXdEaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWVkaXQtdmlldy1kaWFsb2dcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJyZWxvYWQtbG92ZWxhY2VcIjogdW5kZWZpbmVkO1xuICB9XG4gIC8vIGZvciBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50RXZlbnRNYXAge1xuICAgIFwicmVsb2FkLWxvdmVsYWNlXCI6IEhBU1NEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWRpYWxvZy1lZGl0LXZpZXdcIilcbmV4cG9ydCBjbGFzcyBIdWlEaWFsb2dFZGl0VmlldyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogRWRpdFZpZXdEaWFsb2dQYXJhbXM7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBFZGl0Vmlld0RpYWxvZ1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgICh0aGlzLnNoYWRvd1Jvb3QhLmNoaWxkcmVuWzBdIGFzIGFueSkuc2hvd0RpYWxvZygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGh1aS1lZGl0LXZpZXdcbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIC5sb3ZlbGFjZT1cIiR7dGhpcy5fcGFyYW1zLmxvdmVsYWNlfVwiXG4gICAgICAgIC52aWV3SW5kZXg9XCIke3RoaXMuX3BhcmFtcy52aWV3SW5kZXh9XCJcbiAgICAgID5cbiAgICAgIDwvaHVpLWVkaXQtdmlldz5cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktZGlhbG9nLWVkaXQtdmlld1wiOiBIdWlEaWFsb2dFZGl0VmlldztcbiAgfVxufVxuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJzXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCwgSEFTU0RvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB0eXBlIHsgSGFQYXBlckRpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB0eXBlIHtcbiAgTG92ZWxhY2VCYWRnZUNvbmZpZyxcbiAgTG92ZWxhY2VDYXJkQ29uZmlnLFxuICBMb3ZlbGFjZVZpZXdDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQge1xuICBzaG93QWxlcnREaWFsb2csXG4gIHNob3dDb25maXJtYXRpb25EaWFsb2csXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94XCI7XG5pbXBvcnQgeyBoYVN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktZW50aXR5LWVkaXRvclwiO1xuaW1wb3J0IHR5cGUgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgYWRkVmlldywgZGVsZXRlVmlldywgcmVwbGFjZVZpZXcgfSBmcm9tIFwiLi4vY29uZmlnLXV0aWxcIjtcbmltcG9ydCBcIi4uL2h1aS1iYWRnZS1wcmV2aWV3XCI7XG5pbXBvcnQgeyBwcm9jZXNzRWRpdG9yRW50aXRpZXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy1lZGl0b3ItZW50aXRpZXNcIjtcbmltcG9ydCB7XG4gIEVudGl0aWVzRWRpdG9yRXZlbnQsXG4gIFZpZXdFZGl0RXZlbnQsXG4gIFZpZXdWaXNpYmlsaXR5Q2hhbmdlRXZlbnQsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9odWktdmlldy1lZGl0b3JcIjtcbmltcG9ydCBcIi4vaHVpLXZpZXctdmlzaWJpbGl0eS1lZGl0b3JcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktZWRpdC12aWV3XCIpXG5leHBvcnQgY2xhc3MgSHVpRWRpdFZpZXcgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHZpZXdJbmRleD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogTG92ZWxhY2VWaWV3Q29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2JhZGdlcz86IExvdmVsYWNlQmFkZ2VDb25maWdbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jYXJkcz86IExvdmVsYWNlQ2FyZENvbmZpZ1tdO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NhdmluZzogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jdXJUYWI/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfY3VyVGFiSW5kZXg6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJUYWJJbmRleCA9IDA7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBXYWl0IHRpbGwgZGlhbG9nIGlzIHJlbmRlcmVkLlxuICAgIGlmICh0aGlzLl9kaWFsb2cgPT0gbnVsbCkge1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3SW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fY29uZmlnID0ge307XG4gICAgICB0aGlzLl9iYWRnZXMgPSBbXTtcbiAgICAgIHRoaXMuX2NhcmRzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY2FyZHMsIGJhZGdlcywgLi4udmlld0NvbmZpZyB9ID0gdGhpcy5sb3ZlbGFjZSEuY29uZmlnLnZpZXdzW1xuICAgICAgICB0aGlzLnZpZXdJbmRleFxuICAgICAgXTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHZpZXdDb25maWc7XG4gICAgICB0aGlzLl9iYWRnZXMgPSBiYWRnZXMgPyBwcm9jZXNzRWRpdG9yRW50aXRpZXMoYmFkZ2VzKSA6IFtdO1xuICAgICAgdGhpcy5fY2FyZHMgPSBjYXJkcztcbiAgICB9XG5cbiAgICB0aGlzLl9kaWFsb2cub3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2RpYWxvZygpOiBIYVBhcGVyRGlhbG9nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiaGEtcGFwZXItZGlhbG9nXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92aWV3Q29uZmlnVGl0bGUoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5fY29uZmlnLnRpdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X3ZpZXcuaGVhZGVyXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF92aWV3LmhlYWRlcl9uYW1lXCIsXG4gICAgICBcIm5hbWVcIixcbiAgICAgIHRoaXMuX2NvbmZpZy50aXRsZVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBsZXQgY29udGVudDtcbiAgICBzd2l0Y2ggKHRoaXMuX2N1clRhYikge1xuICAgICAgY2FzZSBcInRhYi1zZXR0aW5nc1wiOlxuICAgICAgICBjb250ZW50ID0gaHRtbGBcbiAgICAgICAgICA8aHVpLXZpZXctZWRpdG9yXG4gICAgICAgICAgICAuaXNOZXc9JHt0aGlzLnZpZXdJbmRleCA9PT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl9jb25maWd9XCJcbiAgICAgICAgICAgIEB2aWV3LWNvbmZpZy1jaGFuZ2VkPVwiJHt0aGlzLl92aWV3Q29uZmlnQ2hhbmdlZH1cIlxuICAgICAgICAgID48L2h1aS12aWV3LWVkaXRvcj5cbiAgICAgICAgYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidGFiLWJhZGdlc1wiOlxuICAgICAgICBjb250ZW50ID0gaHRtbGBcbiAgICAgICAgICAke3RoaXMuX2JhZGdlcz8ubGVuZ3RoXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctYmFkZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX2JhZGdlcy5tYXAoKGJhZGdlQ29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxodWktYmFkZ2UtcHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uZmlnPSR7YmFkZ2VDb25maWd9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvaHVpLWJhZGdlLXByZXZpZXc+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxodWktZW50aXR5LWVkaXRvclxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAuZW50aXRpZXM9XCIke3RoaXMuX2JhZGdlc31cIlxuICAgICAgICAgICAgQGVudGl0aWVzLWNoYW5nZWQ9XCIke3RoaXMuX2JhZGdlc0NoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktZW50aXR5LWVkaXRvcj5cbiAgICAgICAgYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidGFiLXZpc2liaWxpdHlcIjpcbiAgICAgICAgY29udGVudCA9IGh0bWxgXG4gICAgICAgICAgPGh1aS12aWV3LXZpc2liaWxpdHktZWRpdG9yXG4gICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl9jb25maWd9XCJcbiAgICAgICAgICAgIEB2aWV3LXZpc2liaWxpdHktY2hhbmdlZD1cIiR7dGhpcy5fdmlld1Zpc2liaWxpdHlDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLXZpZXctdmlzaWJpbGl0eS1lZGl0b3I+XG4gICAgICAgIGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInRhYi1jYXJkc1wiOlxuICAgICAgICBjb250ZW50ID0gaHRtbGAgQ2FyZHMgYDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXBhcGVyLWRpYWxvZyB3aXRoLWJhY2tkcm9wIG1vZGFsPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgJHt0aGlzLl92aWV3Q29uZmlnVGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwYXBlci10YWJzXG4gICAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICAgIGhpZGUtc2Nyb2xsLWJ1dHRvbnNcbiAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMuX2N1clRhYkluZGV4fVwiXG4gICAgICAgICAgQHNlbGVjdGVkLWl0ZW0tY2hhbmdlZD1cIiR7dGhpcy5faGFuZGxlVGFiU2VsZWN0ZWR9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci10YWIgaWQ9XCJ0YWItc2V0dGluZ3NcIlxuICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF92aWV3LnRhYl9zZXR0aW5nc1wiXG4gICAgICAgICAgICApfTwvcGFwZXItdGFiXG4gICAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci10YWIgaWQ9XCJ0YWItYmFkZ2VzXCJcbiAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfdmlldy50YWJfYmFkZ2VzXCJcbiAgICAgICAgICAgICl9PC9wYXBlci10YWJcbiAgICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXRhYiBpZD1cInRhYi12aXNpYmlsaXR5XCJcbiAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfdmlldy50YWJfdmlzaWJpbGl0eVwiXG4gICAgICAgICAgICApfTwvcGFwZXItdGFiXG4gICAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLXRhYnM+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT4gJHtjb250ZW50fSA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICAke3RoaXMudmlld0luZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBjbGFzcz1cIndhcm5pbmdcIiBAY2xpY2s9XCIke3RoaXMuX2RlbGV0ZUNvbmZpcm19XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfdmlldy5kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Nsb3NlRGlhbG9nfVwiXG4gICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLmNhbmNlbFwiKX08L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgID9kaXNhYmxlZD1cIiR7IXRoaXMuX2NvbmZpZyB8fCB0aGlzLl9zYXZpbmd9XCJcbiAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fc2F2ZX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgID9hY3RpdmU9XCIke3RoaXMuX3NhdmluZ31cIlxuICAgICAgICAgICAgICBhbHQ9XCJTYXZpbmdcIlxuICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5zYXZlXCIpfTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmxvdmVsYWNlIS5zYXZlQ29uZmlnKFxuICAgICAgICBkZWxldGVWaWV3KHRoaXMubG92ZWxhY2UhLmNvbmZpZywgdGhpcy52aWV3SW5kZXghKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBgLyR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXX1gKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IGBEZWxldGluZyBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlbGV0ZUNvbmZpcm0oKTogdm9pZCB7XG4gICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICB0aXRsZTogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgYHVpLnBhbmVsLmxvdmVsYWNlLnZpZXdzLmNvbmZpcm1fZGVsZXRlJHtcbiAgICAgICAgICB0aGlzLl9jYXJkcz8ubGVuZ3RoID8gYF9leGlzdGluZ19jYXJkc2AgOiBcIlwiXG4gICAgICAgIH1gXG4gICAgICApLFxuICAgICAgdGV4dDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgYHVpLnBhbmVsLmxvdmVsYWNlLnZpZXdzLmNvbmZpcm1fZGVsZXRlJHtcbiAgICAgICAgICB0aGlzLl9jYXJkcz8ubGVuZ3RoID8gYF9leGlzdGluZ19jYXJkc2AgOiBcIlwiXG4gICAgICAgIH1fdGV4dGAsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICB0aGlzLl9jb25maWc/LnRpdGxlIHx8IFwiVW5uYW1lZCB2aWV3XCIsXG4gICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgIHRoaXMuX2NhcmRzPy5sZW5ndGggfHwgMFxuICAgICAgKSxcbiAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZSgpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVzaXplRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgZmlyZUV2ZW50KHRoaXMuX2RpYWxvZyBhcyBIVE1MRWxlbWVudCwgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgIHRoaXMuX2N1clRhYkluZGV4ID0gMDtcbiAgICB0aGlzLmxvdmVsYWNlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2NvbmZpZyA9IHt9O1xuICAgIHRoaXMuX2JhZGdlcyA9IFtdO1xuICAgIHRoaXMuX2RpYWxvZy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVGFiU2VsZWN0ZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCFldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY3VyVGFiID0gZXYuZGV0YWlsLnZhbHVlLmlkO1xuICAgIHRoaXMuX3Jlc2l6ZURpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2F2ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2lzQ29uZmlnQ2hhbmdlZCgpKSB7XG4gICAgICB0aGlzLl9jbG9zZURpYWxvZygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NhdmluZyA9IHRydWU7XG5cbiAgICBjb25zdCB2aWV3Q29uZjogTG92ZWxhY2VWaWV3Q29uZmlnID0ge1xuICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgYmFkZ2VzOiB0aGlzLl9iYWRnZXMsXG4gICAgICBjYXJkczogdGhpcy5fY2FyZHMsXG4gICAgfTtcblxuICAgIGNvbnN0IGxvdmVsYWNlID0gdGhpcy5sb3ZlbGFjZSE7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgbG92ZWxhY2Uuc2F2ZUNvbmZpZyhcbiAgICAgICAgdGhpcy5fY3JlYXRpbmdWaWV3XG4gICAgICAgICAgPyBhZGRWaWV3KGxvdmVsYWNlLmNvbmZpZywgdmlld0NvbmYpXG4gICAgICAgICAgOiByZXBsYWNlVmlldyhsb3ZlbGFjZS5jb25maWcsIHRoaXMudmlld0luZGV4ISwgdmlld0NvbmYpXG4gICAgICApO1xuICAgICAgdGhpcy5fY2xvc2VEaWFsb2coKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IGBTYXZpbmcgZmFpbGVkOiAke2Vyci5tZXNzYWdlfWAsXG4gICAgICB9KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdmlld0NvbmZpZ0NoYW5nZWQoZXY6IFZpZXdFZGl0RXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXYuZGV0YWlsICYmIGV2LmRldGFpbC5jb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdmlld1Zpc2liaWxpdHlDaGFuZ2VkKFxuICAgIGV2OiBIQVNTRG9tRXZlbnQ8Vmlld1Zpc2liaWxpdHlDaGFuZ2VFdmVudD5cbiAgKTogdm9pZCB7XG4gICAgaWYgKGV2LmRldGFpbC52aXNpYmxlICYmIHRoaXMuX2NvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnLnZpc2libGUgPSBldi5kZXRhaWwudmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9iYWRnZXNDaGFuZ2VkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9iYWRnZXMgfHwgIXRoaXMuaGFzcyB8fCAhZXYuZGV0YWlsIHx8ICFldi5kZXRhaWwuZW50aXRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYmFkZ2VzID0gcHJvY2Vzc0VkaXRvckVudGl0aWVzKGV2LmRldGFpbC5lbnRpdGllcyk7XG4gICAgdGhpcy5fcmVzaXplRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9pc0NvbmZpZ0NoYW5nZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2NyZWF0aW5nVmlldyB8fFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5fY29uZmlnKSAhPT1cbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5sb3ZlbGFjZSEuY29uZmlnLnZpZXdzW3RoaXMudmlld0luZGV4IV0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9jcmVhdGluZ1ZpZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld0luZGV4ID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICAvKiBvdmVycnVsZSB0aGUgaGEtc3R5bGUtZGlhbG9nIG1heC1oZWlnaHQgb24gc21hbGwgc2NyZWVucyAqL1xuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICB3aWR0aDogNjUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci10YWJzIHtcbiAgICAgICAgICAtLXBhcGVyLXRhYnMtc2VsZWN0aW9uLWJhci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24gcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uLndhcm5pbmcge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXNwaW5uZXJbYWN0aXZlXSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAucHJldmlldy1iYWRnZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDE2cHg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lZGl0LXZpZXdcIjogSHVpRWRpdFZpZXc7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0cmluZy9zbHVnaWZ5XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VWaWV3Q29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuLi9jb25maWctZWxlbWVudHMvY29uZmlnLWVsZW1lbnRzLXN0eWxlXCI7XG5pbXBvcnQgeyBFZGl0b3JUYXJnZXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJ2aWV3LWNvbmZpZy1jaGFuZ2VkXCI6IHtcbiAgICAgIGNvbmZpZzogTG92ZWxhY2VWaWV3Q29uZmlnO1xuICAgIH07XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJodWktdmlldy1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlWaWV3RWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNOZXchOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZyE6IExvdmVsYWNlVmlld0NvbmZpZztcblxuICBwcml2YXRlIF9zdWdnZXN0ZWRQYXRoID0gZmFsc2U7XG5cbiAgZ2V0IF9wYXRoKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnBhdGggfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdGl0bGUoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb25maWcudGl0bGUgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfaWNvbigpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5pY29uIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX3RoZW1lKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnRoZW1lIHx8IFwiQmFja2VuZC1zZWxlY3RlZFwiO1xuICB9XG5cbiAgZ2V0IF9wYW5lbCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnBhbmVsIHx8IGZhbHNlO1xuICB9XG5cbiAgc2V0IGNvbmZpZyhjb25maWc6IExvdmVsYWNlVmlld0NvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtjb25maWdFbGVtZW50U3R5bGV9XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb25maWdcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMudGl0bGVcIlxuICAgICAgICAgICl9ICAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl90aXRsZX1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcInRpdGxlXCJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgQGJsdXI9JHt0aGlzLl9oYW5kbGVUaXRsZUJsdXJ9XG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5pY29uXCJcbiAgICAgICAgICApfSAgKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5faWNvbn1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImljb25cIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnVybFwiXG4gICAgICAgICAgKX0gICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3BhdGh9XG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJwYXRoXCJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8aHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl90aGVtZX1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcInRoZW1lXCJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgID48L2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yPlxuICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9wYW5lbCAhPT0gZmFsc2V9XG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJwYW5lbFwifVxuICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3Iudmlldy5wYW5lbF9tb2RlLnRpdGxlXCJcbiAgICAgICAgICApfTwvaGEtc3dpdGNoXG4gICAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwYW5lbFwiXG4gICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3Iudmlldy5wYW5lbF9tb2RlLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICApfTwvc3BhblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQhIGFzIEVkaXRvclRhcmdldDtcblxuICAgIGlmICh0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdDb25maWc7XG5cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBuZXdDb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgW3RhcmdldC5jb25maWdWYWx1ZSFdOlxuICAgICAgICAgIHRhcmdldC5jaGVja2VkICE9PSB1bmRlZmluZWQgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmlldy1jb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogbmV3Q29uZmlnIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVGl0bGVCbHVyKGV2KSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuaXNOZXcgfHxcbiAgICAgIHRoaXMuX3N1Z2dlc3RlZFBhdGggfHxcbiAgICAgIHRoaXMuX2NvbmZpZy5wYXRoIHx8XG4gICAgICAhZXYuY3VycmVudFRhcmdldC52YWx1ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHsgLi4udGhpcy5fY29uZmlnLCBwYXRoOiBzbHVnaWZ5KGV2LmN1cnJlbnRUYXJnZXQudmFsdWUpIH07XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmlldy1jb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5wYW5lbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXZpZXctZWRpdG9yXCI6IEh1aVZpZXdFZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZVZpZXdDb25maWcsIFNob3dWaWV3Q29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IGZldGNoVXNlcnMsIFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS91c2VyXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwidmlldy12aXNpYmlsaXR5LWNoYW5nZWRcIjoge1xuICAgICAgdmlzaWJsZTogU2hvd1ZpZXdDb25maWdbXTtcbiAgICB9O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLXZpZXctdmlzaWJpbGl0eS1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlWaWV3VmlzaWJpbGl0eUVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzZXQgY29uZmlnKGNvbmZpZzogTG92ZWxhY2VWaWV3Q29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX3Zpc2libGUgPVxuICAgICAgdGhpcy5fY29uZmlnLnZpc2libGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLl9jb25maWcudmlzaWJsZTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgX2NvbmZpZyE6IExvdmVsYWNlVmlld0NvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF91c2VycyE6IFVzZXJbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF92aXNpYmxlITogYm9vbGVhbiB8IFNob3dWaWV3Q29uZmlnW107XG5cbiAgcHJpdmF0ZSBfc29ydGVkVXNlcnMgPSBtZW1vaXplT25lKCh1c2VyczogVXNlcltdKSA9PiB7XG4gICAgcmV0dXJuIHVzZXJzLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYS5uYW1lLCBiLm5hbWUpKTtcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBmZXRjaFVzZXJzKHRoaXMuaGFzcykudGhlbigodXNlcnMpID0+IHtcbiAgICAgIHRoaXMuX3VzZXJzID0gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5zeXN0ZW1fZ2VuZXJhdGVkKTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuX3VzZXJzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHA+XG4gICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfdmlldy52aXNpYmlsaXR5LnNlbGVjdF91c2Vyc1wiXG4gICAgICAgICl9XG4gICAgICA8L3A+XG4gICAgICAke3RoaXMuX3NvcnRlZFVzZXJzKHRoaXMuX3VzZXJzKS5tYXAoXG4gICAgICAgICh1c2VyKSA9PiBodG1sYFxuICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT4ke3VzZXIubmFtZX08L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgICAgLnVzZXJJZD1cIiR7dXNlci5pZH1cIlxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy52YWxDaGFuZ2V9XG4gICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5jaGVja1VzZXIodXNlci5pZCl9XG4gICAgICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICBgXG4gICAgICApfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hlY2tVc2VyKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5fdmlzaWJsZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aXNpYmxlIGFzIGJvb2xlYW47XG4gICAgfVxuICAgIHJldHVybiAodGhpcy5fdmlzaWJsZSBhcyBTaG93Vmlld0NvbmZpZ1tdKS5zb21lKCh1KSA9PiB1LnVzZXIgPT09IHVzZXJJZCk7XG4gIH1cblxuICBwcml2YXRlIHZhbENoYW5nZShldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB1c2VySWQgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLnVzZXJJZDtcbiAgICBjb25zdCBjaGVja2VkID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgSGFTd2l0Y2gpLmNoZWNrZWQ7XG5cbiAgICBsZXQgbmV3VmlzaWJsZTogU2hvd1ZpZXdDb25maWdbXSA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl92aXNpYmxlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgY29uc3QgbGFzdFZhbHVlID0gdGhpcy5fdmlzaWJsZSBhcyBib29sZWFuO1xuICAgICAgaWYgKGxhc3RWYWx1ZSkge1xuICAgICAgICBuZXdWaXNpYmxlID0gdGhpcy5fdXNlcnMubWFwKCh1KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXI6IHUuaWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1Zpc2libGUgPSBbLi4udGhpcy5fdmlzaWJsZV07XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IG5ld0VudHJ5OiBTaG93Vmlld0NvbmZpZyA9IHtcbiAgICAgICAgdXNlcjogdXNlcklkLFxuICAgICAgfTtcbiAgICAgIG5ld1Zpc2libGUucHVzaChuZXdFbnRyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1Zpc2libGUgPSAobmV3VmlzaWJsZSBhcyBTaG93Vmlld0NvbmZpZ1tdKS5maWx0ZXIoXG4gICAgICAgIChjKSA9PiBjLnVzZXIgIT09IHVzZXJJZFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIHJlbW92ZXMgdXNlcnMgdGhhdCBkb2Vzbid0IGV4aXN0cyBpbiBzeXN0ZW0gYnV0IGhhZCB2aWV3IHBlcm1pc3Npb25zXG4gICAgdGhpcy5fdmlzaWJsZSA9IG5ld1Zpc2libGUuZmlsdGVyKChjKSA9PlxuICAgICAgdGhpcy5fdXNlcnMuc29tZSgodSkgPT4gdS5pZCA9PT0gYy51c2VyKVxuICAgICk7XG5cbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2aWV3LXZpc2liaWxpdHktY2hhbmdlZFwiLCB7IHZpc2libGU6IHRoaXMuX3Zpc2libGUgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS12aWV3LXZpc2liaWxpdHktZWRpdG9yXCI6IEh1aVZpZXdWaXNpYmlsaXR5RWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQWlCQTtBQUVBO0FBREE7QUFJQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFPQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFTQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUpBO0FBT0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTs7OztBQUFBO0FBS0E7QUE3QkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE5RUE7QUFzRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQTtBQVNBO0FBZUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7O0FBSkE7QUFRQTtBQXZCQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQU9BO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQURBO0FBb0JBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7QUFBQTtBQUFBO0FBQUE7QUFnREE7QUFDQTtBQWpEQTtBQUFBO0FBQUE7QUFBQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUE3REE7QUFBQTtBQUFBO0FBQUE7QUErREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFIQTtBQU1BOztBQVZBOztBQWVBO0FBQ0E7QUFDQTs7QUFsQkE7QUFxQkE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTdDQTtBQUNBO0FBOENBOzs7QUFHQTs7Ozs7QUFLQTtBQUNBOzs7QUFHQTs7O0FBS0E7OztBQUtBOzs7QUFLQTs7QUFFQTtBQUVBO0FBQ0E7O0FBSEE7QUFTQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7O0FBR0E7Ozs7QUFqREE7QUFzREE7QUF0S0E7QUFBQTtBQUFBO0FBQUE7QUF5S0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBcExBO0FBQUE7QUFBQTtBQUFBO0FBc0xBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFTQTtBQWZBO0FBaUJBO0FBeE1BO0FBQUE7QUFBQTtBQUFBO0FBMk1BO0FBQ0E7QUFDQTtBQTdNQTtBQUFBO0FBQUE7QUFBQTtBQWdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXJOQTtBQUFBO0FBQUE7QUFBQTtBQXdOQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBN05BO0FBQUE7QUFBQTtBQUFBO0FBZ09BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFoUUE7QUFBQTtBQUFBO0FBQUE7QUFtUUE7QUFDQTtBQUNBO0FBQ0E7QUF0UUE7QUFBQTtBQUFBO0FBQUE7QUEyUUE7QUFDQTtBQUNBO0FBQ0E7QUE5UUE7QUFBQTtBQUFBO0FBQUE7QUFpUkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQXRSQTtBQUFBO0FBQUE7QUFBQTtBQXlSQTtBQUtBO0FBOVJBO0FBQUE7QUFBQTtBQUFBO0FBaVNBO0FBQ0E7QUFsU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1REE7QUE1VkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVlBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE1QkE7QUFBQTtBQUFBO0FBQUE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbkNBO0FBQUE7QUFBQTtBQUFBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFDQTtBQUFBO0FBQUE7QUFBQTtBQTZDQTtBQUNBO0FBOUNBO0FBQUE7QUFBQTtBQUFBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBOzs7QUFqREE7QUF1REE7QUE1R0E7QUFBQTtBQUFBO0FBQUE7QUErR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBaElBO0FBQUE7QUFBQTtBQUFBO0FBbUlBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUE5SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlKQTs7OztBQUFBO0FBS0E7QUF0SkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFHQTtBQVlBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWdCQTtBQUNBO0FBakJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFBQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUlBOztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7O0FBUEE7QUFOQTtBQW1CQTtBQXBEQTtBQUFBO0FBQUE7QUFBQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTlEQTtBQUFBO0FBQUE7QUFBQTtBQWlFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFwR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVHQTs7OztBQUFBO0FBS0E7QUE1R0E7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
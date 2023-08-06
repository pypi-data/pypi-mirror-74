(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["entity-editor-dialog"],{

/***/ "./src/common/dom/dynamic-element-directive.ts":
/*!*****************************************************!*\
  !*** ./src/common/dom/dynamic-element-directive.ts ***!
  \*****************************************************/
/*! exports provided: dynamicElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicElement", function() { return dynamicElement; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");

const dynamicElement = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["directive"])((tag, properties) => part => {
  if (!(part instanceof lit_html__WEBPACK_IMPORTED_MODULE_0__["NodePart"])) {
    throw new Error("dynamicElementDirective can only be used in content bindings");
  }

  let element = part.value;

  if (element !== undefined && tag.toUpperCase() === element.tagName) {
    if (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        element[key] = value;
      });
    }

    return;
  }

  element = document.createElement(tag);

  if (properties) {
    Object.entries(properties).forEach(([key, value]) => {
      element[key] = value;
    });
  }

  part.setValue(element);
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

/***/ "./src/components/ha-related-items.ts":
/*!********************************************!*\
  !*** ./src/components/ha-related-items.ts ***!
  \********************************************/
/*! exports provided: HaRelatedItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaRelatedItems", function() { return HaRelatedItems; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/search */ "./src/data/search.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _ha_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-switch */ "./src/components/ha-switch.ts");
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









let HaRelatedItems = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-related-items")], function (_initialize, _SubscribeMixin) {
  class HaRelatedItems extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaRelatedItems,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "itemType",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "itemId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_devices",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_areas",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_related",
      value: void 0
    }, {
      kind: "method",
      key: "hassSubscribe",
      value: function hassSubscribe() {
        return [Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_4__["subscribeDeviceRegistry"])(this.hass.connection, devices => {
          this._devices = devices;
        }), Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_2__["subscribeAreaRegistry"])(this.hass.connection, areas => {
          this._areas = areas;
        })];
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaRelatedItems.prototype), "firstUpdated", this).call(this, changedProps);

        Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_3__["getConfigEntries"])(this.hass).then(configEntries => {
          this._entries = configEntries;
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaRelatedItems.prototype), "updated", this).call(this, changedProps);

        if ((changedProps.has("itemId") || changedProps.has("itemType")) && this.itemId && this.itemType) {
          this._findRelated();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._related) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        if (Object.keys(this._related).length === 0) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        ${this.hass.localize("ui.components.related-items.no_related_found")}
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this._related.config_entry && this._entries ? this._related.config_entry.map(relatedConfigEntryId => {
          const entry = this._entries.find(configEntry => configEntry.entry_id === relatedConfigEntryId);

          if (!entry) {
            return "";
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <h3>
                ${this.hass.localize("ui.components.related-items.integration")}:
              </h3>
              <a
                href=${`/config/integrations#config_entry=${relatedConfigEntryId}`}
                @click=${this._close}
              >
                ${this.hass.localize(`component.${entry.domain}.title`)}:
                ${entry.title}
              </a>
            `;
        }) : ""}
      ${this._related.device && this._devices ? this._related.device.map(relatedDeviceId => {
          const device = this._devices.find(dev => dev.id === relatedDeviceId);

          if (!device) {
            return "";
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <h3>
                ${this.hass.localize("ui.components.related-items.device")}:
              </h3>
              <a
                href="/config/devices/device/${relatedDeviceId}"
                @click=${this._close}
              >
                ${device.name_by_user || device.name}
              </a>
            `;
        }) : ""}
      ${this._related.area && this._areas ? this._related.area.map(relatedAreaId => {
          const area = this._areas.find(ar => ar.area_id === relatedAreaId);

          if (!area) {
            return "";
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <h3>
                ${this.hass.localize("ui.components.related-items.area")}:
              </h3>
              ${area.name}
            `;
        }) : ""}
      ${this._related.entity ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>
              ${this.hass.localize("ui.components.related-items.entity")}:
            </h3>
            <ul>
              ${this._related.entity.map(entityId => {
          const entity = this.hass.states[entityId];

          if (!entity) {
            return "";
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      @click=${this._openMoreInfo}
                      .entityId="${entityId}"
                      class="link"
                    >
                      ${entity.attributes.friendly_name || entityId}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
      ${this._related.group ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>${this.hass.localize("ui.components.related-items.group")}:</h3>
            <ul>
              ${this._related.group.map(groupId => {
          const group = this.hass.states[groupId];

          if (!group) {
            return "";
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId="${groupId}"
                    >
                      ${group.attributes.friendly_name || group.entity_id}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
      ${this._related.scene ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>${this.hass.localize("ui.components.related-items.scene")}:</h3>
            <ul>
              ${this._related.scene.map(sceneId => {
          const scene = this.hass.states[sceneId];

          if (!scene) {
            return "";
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId="${sceneId}"
                    >
                      ${scene.attributes.friendly_name || scene.entity_id}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
      ${this._related.automation ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>
              ${this.hass.localize("ui.components.related-items.automation")}:
            </h3>
            <ul>
              ${this._related.automation.map(automationId => {
          const automation = this.hass.states[automationId];

          if (!automation) {
            return "";
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId="${automationId}"
                    >
                      ${automation.attributes.friendly_name || automation.entity_id}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
      ${this._related.script ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>
              ${this.hass.localize("ui.components.related-items.script")}:
            </h3>
            <ul>
              ${this._related.script.map(scriptId => {
          const script = this.hass.states[scriptId];

          if (!script) {
            return "";
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId="${scriptId}"
                    >
                      ${script.attributes.friendly_name || script.entity_id}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
    `;
      }
    }, {
      kind: "method",
      key: "_findRelated",
      value: async function _findRelated() {
        this._related = await Object(_data_search__WEBPACK_IMPORTED_MODULE_5__["findRelated"])(this.hass, this.itemType, this.itemId);
        await this.updateComplete;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_openMoreInfo",
      value: function _openMoreInfo(ev) {
        const entityId = ev.target.entityId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "close-dialog");
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      a {
        color: var(--primary-color);
      }
      button.link {
        color: var(--primary-color);
        text-align: left;
        cursor: pointer;
        background: none;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        padding: 0px;
        font: inherit;
        text-decoration: underline;
      }
      h3 {
        font-family: var(--paper-font-title_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-title_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-title_-_font-size);
        font-weight: var(--paper-font-headline-_font-weight);
        letter-spacing: var(--paper-font-title_-_letter-spacing);
        line-height: var(--paper-font-title_-_line-height);
        opacity: var(--dark-primary-opacity);
      }
    `;
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_6__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]));

/***/ }),

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const createAreaRegistryEntry = (hass, values) => hass.callWS(Object.assign({
  type: "config/area_registry/create"
}, values));
const updateAreaRegistryEntry = (hass, areaId, updates) => hass.callWS(Object.assign({
  type: "config/area_registry/update",
  area_id: areaId
}, updates));
const deleteAreaRegistryEntry = (hass, areaId) => hass.callWS({
  type: "config/area_registry/delete",
  area_id: areaId
});

const fetchAreaRegistry = conn => conn.sendMessagePromise({
  type: "config/area_registry/list"
}).then(areas => areas.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name)));

const subscribeAreaRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchAreaRegistry(conn).then(areas => store.setState(areas, true)), 500, true), "area_registry_updated");

const subscribeAreaRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);

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

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: fallbackDeviceName, computeDeviceName, devicesInArea, updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackDeviceName", function() { return fallbackDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDeviceName", function() { return computeDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devicesInArea", function() { return devicesInArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const fallbackDeviceName = (hass, entities) => {
  for (const entity of entities || []) {
    const entityId = typeof entity === "string" ? entity : entity.entity_id;
    const stateObj = hass.states[entityId];

    if (stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(stateObj);
    }
  }

  return undefined;
};
const computeDeviceName = (device, hass, entities) => {
  return device.name_by_user || device.name || entities && fallbackDeviceName(hass, entities) || hass.localize("ui.panel.config.devices.unnamed_device");
};
const devicesInArea = (devices, areaId) => devices.filter(device => device.area_id === areaId);
const updateDeviceRegistryEntry = (hass, deviceId, updates) => hass.callWS(Object.assign({
  type: "config/device_registry/update",
  device_id: deviceId
}, updates));

const fetchDeviceRegistry = conn => conn.sendMessagePromise({
  type: "config/device_registry/list"
});

const subscribeDeviceRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchDeviceRegistry(conn).then(devices => store.setState(devices, true)), 500, true), "device_registry_updated");

const subscribeDeviceRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);

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

/***/ "./src/data/search.ts":
/*!****************************!*\
  !*** ./src/data/search.ts ***!
  \****************************/
/*! exports provided: findRelated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRelated", function() { return findRelated; });
const findRelated = (hass, itemType, itemId) => hass.callWS({
  type: "search/related",
  item_type: itemType,
  item_id: itemId
});

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

/***/ "./src/panels/config/entities/const.ts":
/*!*********************************************!*\
  !*** ./src/panels/config/entities/const.ts ***!
  \*********************************************/
/*! exports provided: PLATFORMS_WITH_SETTINGS_TAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORMS_WITH_SETTINGS_TAB", function() { return PLATFORMS_WITH_SETTINGS_TAB; });
/** Platforms that have a settings tab. */
const PLATFORMS_WITH_SETTINGS_TAB = {
  input_number: "entity-settings-helper-tab",
  input_select: "entity-settings-helper-tab",
  input_text: "entity-settings-helper-tab",
  input_boolean: "entity-settings-helper-tab",
  input_datetime: "entity-settings-helper-tab"
};

/***/ }),

/***/ "./src/panels/config/entities/dialog-entity-editor.ts":
/*!************************************************************!*\
  !*** ./src/panels/config/entities/dialog-entity-editor.ts ***!
  \************************************************************/
/*! exports provided: DialogEntityEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEntityEditor", function() { return DialogEntityEditor; });
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-html/directives/cache */ "./node_modules/lit-html/directives/cache.js");
/* harmony import */ var _common_dom_dynamic_element_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/dom/dynamic-element-directive */ "./src/common/dom/dynamic-element-directive.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _components_ha_related_items__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ha-related-items */ "./src/components/ha-related-items.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./const */ "./src/panels/config/entities/const.ts");
/* harmony import */ var _entity_registry_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entity-registry-settings */ "./src/panels/config/entities/entity-registry-settings.ts");
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

















let DialogEntityEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["customElement"])("dialog-entity-editor")], function (_initialize, _LitElement) {
  class DialogEntityEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogEntityEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_entry",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_curTab",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_extraTabs",

      value() {
        return {};
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_settingsElementTag",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["query"])("ha-paper-dialog")],
      key: "_dialog",
      value: void 0
    }, {
      kind: "field",
      key: "_curTabIndex",

      value() {
        return 0;
      }

    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        this._entry = undefined;
        this._settingsElementTag = undefined;
        this._extraTabs = {};

        this._getEntityReg();

        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "closeDialog",
      value: function closeDialog() {
        this._params = undefined;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params || this._entry === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]``;
        }

        const entityId = this._params.entity_id;
        const entry = this._entry;
        const stateObj = this.hass.states[entityId];
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <ha-paper-dialog
        with-backdrop
        opened
        @opened-changed=${this._openedChanged}
        @close-dialog=${this.closeDialog}
      >
        <app-toolbar>
          <paper-icon-button
            aria-label=${this.hass.localize("ui.dialogs.entity_registry.dismiss")}
            icon="hass:close"
            dialog-dismiss
          ></paper-icon-button>
          <div class="main-title" main-title>
            ${stateObj ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(stateObj) : (entry === null || entry === void 0 ? void 0 : entry.name) || entityId}
          </div>
          ${stateObj ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                <paper-icon-button
                  aria-label=${this.hass.localize("ui.dialogs.entity_registry.control")}
                  icon="hass:tune"
                  @click=${this._openMoreInfo}
                ></paper-icon-button>
              ` : ""}
        </app-toolbar>
        <paper-tabs
          scrollable
          hide-scroll-buttons
          .selected=${this._curTabIndex}
          @selected-item-changed=${this._handleTabSelected}
        >
          <paper-tab id="tab-settings">
            ${this.hass.localize("ui.dialogs.entity_registry.settings")}
          </paper-tab>
          ${Object.entries(this._extraTabs).map(([key, tab]) => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
              <paper-tab id=${key}>
                ${this.hass.localize(tab.translationKey) || key}
              </paper-tab>
            `)}
          <paper-tab id="tab-related">
            ${this.hass.localize("ui.dialogs.entity_registry.related")}
          </paper-tab>
        </paper-tabs>
        ${Object(lit_html_directives_cache__WEBPACK_IMPORTED_MODULE_6__["cache"])(this._curTab === "tab-settings" ? entry ? this._settingsElementTag ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                    ${Object(_common_dom_dynamic_element_directive__WEBPACK_IMPORTED_MODULE_7__["dynamicElement"])(this._settingsElementTag, {
          hass: this.hass,
          entry,
          entityId,
          dialogElement: this._dialog
        })}
                  ` : "" : lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                  <paper-dialog-scrollable>
                    ${this.hass.localize("ui.dialogs.entity_registry.no_unique_id")}
                  </paper-dialog-scrollable>
                ` : this._curTab === "tab-related" ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                <paper-dialog-scrollable>
                  <ha-related-items
                    .hass=${this.hass}
                    .itemId=${entityId}
                    itemType="entity"
                  ></ha-related-items>
                </paper-dialog-scrollable>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]``)}
      </ha-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_getEntityReg",
      value: async function _getEntityReg() {
        try {
          this._entry = await Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_12__["getExtendedEntityRegistryEntry"])(this.hass, this._params.entity_id);

          this._loadPlatformSettingTabs();
        } catch {
          this._entry = null;
        }
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
      key: "_resizeDialog",
      value: async function _resizeDialog() {
        await this.updateComplete;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this._dialog, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_loadPlatformSettingTabs",
      value: async function _loadPlatformSettingTabs() {
        if (!this._entry) {
          return;
        }

        if (!Object.keys(_const__WEBPACK_IMPORTED_MODULE_14__["PLATFORMS_WITH_SETTINGS_TAB"]).includes(this._entry.platform)) {
          this._settingsElementTag = "entity-registry-settings";
          return;
        }

        const tag = _const__WEBPACK_IMPORTED_MODULE_14__["PLATFORMS_WITH_SETTINGS_TAB"][this._entry.platform];
        await __webpack_require__("./src/panels/config/entities/editor-tabs/settings lazy recursive ^\\.\\/.*$")(`./${tag}`);
        this._settingsElementTag = tag;
      }
    }, {
      kind: "method",
      key: "_openMoreInfo",
      value: function _openMoreInfo() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "hass-more-info", {
          entityId: this._params.entity_id
        });
        this.closeDialog();
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        if (!ev.detail.value) {
          this._params = undefined;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_13__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_5__["css"]`
        app-toolbar {
          color: var(--primary-text-color);
          background-color: var(--secondary-background-color);
          margin: 0;
          padding: 0 16px;
        }

        app-toolbar [main-title] {
          /* Design guideline states 24px, changed to 16 to align with state info */
          margin-left: 16px;
          line-height: 1.3em;
          max-height: 2.6em;
          overflow: hidden;
          /* webkit and blink still support simple multiline text-overflow */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .main-title {
            pointer-events: auto;
            cursor: default;
          }
        }

        ha-paper-dialog {
          width: 450px;
          max-height: none !important;
        }

        /* overrule the ha-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          app-toolbar {
            background-color: var(--app-header-background-color);
            color: var(--app-header-text-color, white);
          }
          ha-paper-dialog {
            height: 100%;
            max-height: 100% !important;
            width: 100% !important;
            border-radius: 0px;
            position: fixed !important;
            margin: 0;
          }
          ha-paper-dialog::before {
            content: "";
            position: fixed;
            z-index: -1;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: inherit;
          }
        }

        paper-dialog-scrollable {
          padding-bottom: 16px;
        }

        mwc-button.warning {
          --mdc-theme-primary: var(--google-red-500);
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
        :host {
          --paper-font-title_-_white-space: normal;
        }
        paper-tabs {
          --paper-tabs-selection-bar-color: var(--primary-color);
          text-transform: uppercase;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin-top: 0;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/entities/editor-tabs/settings lazy recursive ^\\.\\/.*$":
/*!****************************************************************************************!*\
  !*** ./src/panels/config/entities/editor-tabs/settings lazy ^\.\/.*$ namespace object ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entity-settings-helper-tab": [
		"./src/panels/config/entities/editor-tabs/settings/entity-settings-helper-tab.ts",
		0,
		13,
		19,
		14,
		24,
		29
	],
	"./entity-settings-helper-tab.ts": [
		"./src/panels/config/entities/editor-tabs/settings/entity-settings-helper-tab.ts",
		0,
		13,
		19,
		14,
		24,
		29
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/panels/config/entities/editor-tabs/settings lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/panels/config/entities/entity-registry-settings.ts":
/*!****************************************************************!*\
  !*** ./src/panels/config/entities/entity-registry-settings.ts ***!
  \****************************************************************/
/*! exports provided: EntityRegistrySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityRegistrySettings", function() { return EntityRegistrySettings; });
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _components_ha_icon_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-icon-input */ "./src/components/ha-icon-input.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
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











let EntityRegistrySettings = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("entity-registry-settings")], function (_initialize, _LitElement) {
  class EntityRegistrySettings extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: EntityRegistrySettings,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "entry",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "dialogElement",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_entityId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_disabledBy",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_submitting",
      value: void 0
    }, {
      kind: "field",
      key: "_origEntityId",
      value: void 0
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(EntityRegistrySettings.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("entry")) {
          this._error = undefined;
          this._name = this.entry.name || "";
          this._icon = this.entry.icon || "";
          this._origEntityId = this.entry.entity_id;
          this._entityId = this.entry.entity_id;
          this._disabledBy = this.entry.disabled_by;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this.entry.entity_id !== this._origEntityId) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``;
        }

        const stateObj = this.hass.states[this.entry.entity_id];
        const invalidDomainUpdate = Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__["computeDomain"])(this._entityId.trim()) !== Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__["computeDomain"])(this.entry.entity_id);
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <paper-dialog-scrollable .dialogElement=${this.dialogElement}>
        ${!stateObj ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <div>
                ${this.hass.localize("ui.dialogs.entity_registry.editor.unavailable")}
              </div>
            ` : ""}
        ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]` <div class="error">${this._error}</div> ` : ""}
        <div class="form">
          <paper-input
            .value=${this._name}
            @value-changed=${this._nameChanged}
            .label=${this.hass.localize("ui.dialogs.entity_registry.editor.name")}
            .placeholder=${this.entry.original_name}
            .disabled=${this._submitting}
          ></paper-input>
          <ha-icon-input
            .value=${this._icon}
            @value-changed=${this._iconChanged}
            .label=${this.hass.localize("ui.dialogs.entity_registry.editor.icon")}
            .placeholder=${this.entry.original_icon}
            .disabled=${this._submitting}
            .errorMessage=${this.hass.localize("ui.dialogs.entity_registry.editor.icon_error")}
          ></ha-icon-input>
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
        </div>
      </paper-dialog-scrollable>
      <div class="buttons">
        <mwc-button
          class="warning"
          @click="${this._confirmDeleteEntry}"
          .disabled=${this._submitting || !(stateObj && stateObj.attributes.restored)}
        >
          ${this.hass.localize("ui.dialogs.entity_registry.editor.delete")}
        </mwc-button>
        <mwc-button
          @click="${this._updateEntry}"
          .disabled=${invalidDomainUpdate || this._submitting}
        >
          ${this.hass.localize("ui.dialogs.entity_registry.editor.update")}
        </mwc-button>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_nameChanged",
      value: function _nameChanged(ev) {
        this._error = undefined;
        this._name = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_iconChanged",
      value: function _iconChanged(ev) {
        this._error = undefined;
        this._icon = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_entityIdChanged",
      value: function _entityIdChanged(ev) {
        this._error = undefined;
        this._entityId = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_updateEntry",
      value: async function _updateEntry() {
        this._submitting = true;
        const params = {
          name: this._name.trim() || null,
          icon: this._icon.trim() || null,
          new_entity_id: this._entityId.trim()
        };

        if (this._disabledBy === null || this._disabledBy === "user") {
          params.disabled_by = this._disabledBy;
        }

        try {
          await Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_7__["updateEntityRegistryEntry"])(this.hass, this._origEntityId, params);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "close-dialog");
        } catch (err) {
          this._error = err.message || "Unknown error";
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_confirmDeleteEntry",
      value: async function _confirmDeleteEntry() {
        if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_8__["showConfirmationDialog"])(this, {
          text: this.hass.localize("ui.dialogs.entity_registry.editor.confirm_delete")
        }))) {
          return;
        }

        this._submitting = true;

        try {
          await Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_7__["removeEntityRegistryEntry"])(this.hass, this._origEntityId);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "close-dialog");
        } finally {
          this._submitting = false;
        }
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
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_9__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
        :host {
          display: block;
          margin-bottom: 0 !important;
          padding: 0 !important;
        }
        .form {
          padding-bottom: 24px;
        }
        .buttons {
          display: flex;
          justify-content: flex-end;
          padding: 8px;
        }
        mwc-button.warning {
          margin-right: auto;
        }
        .row {
          margin-top: 8px;
          color: var(--primary-text-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWVkaXRvci1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9keW5hbWljLWVsZW1lbnQtZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcmVsYXRlZC1pdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcmVhX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19lbnRyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RldmljZV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc2VhcmNoLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2VudGl0aWVzL2NvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2VudGl0aWVzL2RpYWxvZy1lbnRpdHktZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2VudGl0aWVzL2VkaXRvci10YWJzL3NldHRpbmdzIGxhenkgXlxcLlxcLy4qJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2VudGl0aWVzL2VudGl0eS1yZWdpc3RyeS1zZXR0aW5ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXJlY3RpdmUsIE5vZGVQYXJ0LCBQYXJ0IH0gZnJvbSBcImxpdC1odG1sXCI7XG5cbmV4cG9ydCBjb25zdCBkeW5hbWljRWxlbWVudCA9IGRpcmVjdGl2ZShcbiAgKHRhZzogc3RyaW5nLCBwcm9wZXJ0aWVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4gKHBhcnQ6IFBhcnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgTm9kZVBhcnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiZHluYW1pY0VsZW1lbnREaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb250ZW50IGJpbmRpbmdzXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGVsZW1lbnQgPSBwYXJ0LnZhbHVlIGFzIEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgZWxlbWVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0YWcudG9VcHBlckNhc2UoKSA9PT0gKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWVcbiAgICApIHtcbiAgICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BlcnRpZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmVudHJpZXMocHJvcGVydGllcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQhW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBwYXJ0LnNldFZhbHVlKGVsZW1lbnQpO1xuICB9XG4pO1xuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlTmFtZSA9IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXJcIjtcbmltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcblxuZXhwb3J0IGNvbnN0IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHRhYmJhYmxlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIHJvb3Qgbm9kZS5cbiAgICogSXQgc2VhcmNoZXMgdGhlIHRhYmJhYmxlIG5vZGVzIGluIHRoZSBsaWdodCBhbmQgc2hhZG93IGRvbSBvZiB0aGUgY2hpZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uIChub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHR5cGUgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYUlyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlclwiO1xuXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpIGFzIENvbnN0cnVjdG9yPFxuICBQYXBlckRpYWxvZ0VsZW1lbnRcbj47XG5cbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSGFJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xuICB9LFxufTtcblxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3Jcbi8vIGV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2dcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZGlhbG9nXCI6IEhhUGFwZXJEaWFsb2c7XG4gIH1cbn1cbi8vIEB0cy1pZ25vcmVcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRpYWxvZ1wiLCBIYVBhcGVyRGlhbG9nKTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHksIFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7IENvbmZpZ0VudHJ5LCBnZXRDb25maWdFbnRyaWVzIH0gZnJvbSBcIi4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcbmltcG9ydCB7IFNjZW5lRW50aXR5IH0gZnJvbSBcIi4uL2RhdGEvc2NlbmVcIjtcbmltcG9ydCB7IGZpbmRSZWxhdGVkLCBJdGVtVHlwZSwgUmVsYXRlZFJlc3VsdCB9IGZyb20gXCIuLi9kYXRhL3NlYXJjaFwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL3N1YnNjcmliZS1taXhpblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9oYS1zd2l0Y2hcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1yZWxhdGVkLWl0ZW1zXCIpXG5leHBvcnQgY2xhc3MgSGFSZWxhdGVkSXRlbXMgZXh0ZW5kcyBTdWJzY3JpYmVNaXhpbihMaXRFbGVtZW50KSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXRlbVR5cGUhOiBJdGVtVHlwZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXRlbUlkITogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudHJpZXM/OiBDb25maWdFbnRyeVtdO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RldmljZXM/OiBEZXZpY2VSZWdpc3RyeUVudHJ5W107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYXJlYXM/OiBBcmVhUmVnaXN0cnlFbnRyeVtdO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3JlbGF0ZWQ/OiBSZWxhdGVkUmVzdWx0O1xuXG4gIHB1YmxpYyBoYXNzU3Vic2NyaWJlKCk6IFVuc3Vic2NyaWJlRnVuY1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24hLCAoZGV2aWNlcykgPT4ge1xuICAgICAgICB0aGlzLl9kZXZpY2VzID0gZGV2aWNlcztcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uISwgKGFyZWFzKSA9PiB7XG4gICAgICAgIHRoaXMuX2FyZWFzID0gYXJlYXM7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgZ2V0Q29uZmlnRW50cmllcyh0aGlzLmhhc3MpLnRoZW4oKGNvbmZpZ0VudHJpZXMpID0+IHtcbiAgICAgIHRoaXMuX2VudHJpZXMgPSBjb25maWdFbnRyaWVzO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoXG4gICAgICAoY2hhbmdlZFByb3BzLmhhcyhcIml0ZW1JZFwiKSB8fCBjaGFuZ2VkUHJvcHMuaGFzKFwiaXRlbVR5cGVcIikpICYmXG4gICAgICB0aGlzLml0ZW1JZCAmJlxuICAgICAgdGhpcy5pdGVtVHlwZVxuICAgICkge1xuICAgICAgdGhpcy5fZmluZFJlbGF0ZWQoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX3JlbGF0ZWQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9yZWxhdGVkKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRlZC1pdGVtcy5ub19yZWxhdGVkX2ZvdW5kXCIpfVxuICAgICAgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuX3JlbGF0ZWQuY29uZmlnX2VudHJ5ICYmIHRoaXMuX2VudHJpZXNcbiAgICAgICAgPyB0aGlzLl9yZWxhdGVkLmNvbmZpZ19lbnRyeS5tYXAoKHJlbGF0ZWRDb25maWdFbnRyeUlkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeTogQ29uZmlnRW50cnkgfCB1bmRlZmluZWQgPSB0aGlzLl9lbnRyaWVzIS5maW5kKFxuICAgICAgICAgICAgICAoY29uZmlnRW50cnkpID0+IGNvbmZpZ0VudHJ5LmVudHJ5X2lkID09PSByZWxhdGVkQ29uZmlnRW50cnlJZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5jb21wb25lbnRzLnJlbGF0ZWQtaXRlbXMuaW50ZWdyYXRpb25cIlxuICAgICAgICAgICAgICAgICl9OlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9JHtgL2NvbmZpZy9pbnRlZ3JhdGlvbnMjY29uZmlnX2VudHJ5PSR7cmVsYXRlZENvbmZpZ0VudHJ5SWR9YH1cbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jbG9zZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHtlbnRyeS5kb21haW59LnRpdGxlYCl9OlxuICAgICAgICAgICAgICAgICR7ZW50cnkudGl0bGV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHt0aGlzLl9yZWxhdGVkLmRldmljZSAmJiB0aGlzLl9kZXZpY2VzXG4gICAgICAgID8gdGhpcy5fcmVsYXRlZC5kZXZpY2UubWFwKChyZWxhdGVkRGV2aWNlSWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRldmljZTogRGV2aWNlUmVnaXN0cnlFbnRyeSB8IHVuZGVmaW5lZCA9IHRoaXMuX2RldmljZXMhLmZpbmQoXG4gICAgICAgICAgICAgIChkZXYpID0+IGRldi5pZCA9PT0gcmVsYXRlZERldmljZUlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFkZXZpY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5yZWxhdGVkLWl0ZW1zLmRldmljZVwiKX06XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9jb25maWcvZGV2aWNlcy9kZXZpY2UvJHtyZWxhdGVkRGV2aWNlSWR9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jbG9zZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7ZGV2aWNlLm5hbWVfYnlfdXNlciB8fCBkZXZpY2UubmFtZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICB9KVxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuX3JlbGF0ZWQuYXJlYSAmJiB0aGlzLl9hcmVhc1xuICAgICAgICA/IHRoaXMuX3JlbGF0ZWQuYXJlYS5tYXAoKHJlbGF0ZWRBcmVhSWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFyZWE6IEFyZWFSZWdpc3RyeUVudHJ5IHwgdW5kZWZpbmVkID0gdGhpcy5fYXJlYXMhLmZpbmQoXG4gICAgICAgICAgICAgIChhcikgPT4gYXIuYXJlYV9pZCA9PT0gcmVsYXRlZEFyZWFJZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghYXJlYSkge1xuICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0ZWQtaXRlbXMuYXJlYVwiKX06XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICR7YXJlYS5uYW1lfVxuICAgICAgICAgICAgYDtcbiAgICAgICAgICB9KVxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuX3JlbGF0ZWQuZW50aXR5XG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0ZWQtaXRlbXMuZW50aXR5XCIpfTpcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICR7dGhpcy5fcmVsYXRlZC5lbnRpdHkubWFwKChlbnRpdHlJZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0eTogSGFzc0VudGl0eSB8IHVuZGVmaW5lZCA9IHRoaXMuaGFzcy5zdGF0ZXNbXG4gICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX29wZW5Nb3JlSW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAuZW50aXR5SWQ9XCIke2VudGl0eUlkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICR7ZW50aXR5LmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBlbnRpdHlJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICAgICR7dGhpcy5fcmVsYXRlZC5ncm91cFxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aDM+JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0ZWQtaXRlbXMuZ3JvdXBcIil9OjwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICR7dGhpcy5fcmVsYXRlZC5ncm91cC5tYXAoKGdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cDogSGFzc0VudGl0eSB8IHVuZGVmaW5lZCA9IHRoaXMuaGFzcy5zdGF0ZXNbZ3JvdXBJZF07XG4gICAgICAgICAgICAgICAgaWYgKCFncm91cCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuTW9yZUluZm99XG4gICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPVwiJHtncm91cElkfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAke2dyb3VwLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBncm91cC5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuX3JlbGF0ZWQuc2NlbmVcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGgzPiR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5yZWxhdGVkLWl0ZW1zLnNjZW5lXCIpfTo8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAke3RoaXMuX3JlbGF0ZWQuc2NlbmUubWFwKChzY2VuZUlkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NlbmU6IFNjZW5lRW50aXR5IHwgdW5kZWZpbmVkID0gdGhpcy5oYXNzLnN0YXRlc1tcbiAgICAgICAgICAgICAgICAgIHNjZW5lSWRcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGlmICghc2NlbmUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3Blbk1vcmVJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgIC5lbnRpdHlJZD1cIiR7c2NlbmVJZH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgJHtzY2VuZS5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgc2NlbmUuZW50aXR5X2lkfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHt0aGlzLl9yZWxhdGVkLmF1dG9tYXRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRlZC1pdGVtcy5hdXRvbWF0aW9uXCIpfTpcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICR7dGhpcy5fcmVsYXRlZC5hdXRvbWF0aW9uLm1hcCgoYXV0b21hdGlvbklkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0b21hdGlvbjogSGFzc0VudGl0eSB8IHVuZGVmaW5lZCA9IHRoaXMuaGFzcy5zdGF0ZXNbXG4gICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uSWRcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGlmICghYXV0b21hdGlvbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuTW9yZUluZm99XG4gICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPVwiJHthdXRvbWF0aW9uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICR7YXV0b21hdGlvbi5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICAgICR7dGhpcy5fcmVsYXRlZC5zY3JpcHRcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRlZC1pdGVtcy5zY3JpcHRcIil9OlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgJHt0aGlzLl9yZWxhdGVkLnNjcmlwdC5tYXAoKHNjcmlwdElkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0OiBIYXNzRW50aXR5IHwgdW5kZWZpbmVkID0gdGhpcy5oYXNzLnN0YXRlc1tcbiAgICAgICAgICAgICAgICAgIHNjcmlwdElkXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuTW9yZUluZm99XG4gICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPVwiJHtzY3JpcHRJZH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgJHtzY3JpcHQuYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IHNjcmlwdC5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbmRSZWxhdGVkKCkge1xuICAgIHRoaXMuX3JlbGF0ZWQgPSBhd2FpdCBmaW5kUmVsYXRlZCh0aGlzLmhhc3MsIHRoaXMuaXRlbVR5cGUsIHRoaXMuaXRlbUlkKTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3Blbk1vcmVJbmZvKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LnRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZSgpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjbG9zZS1kaWFsb2dcIik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgYnV0dG9uLmxpbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiBpbml0aWFsO1xuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC10aXRsZV8tX2ZvbnQtZmFtaWx5KTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogdmFyKFxuICAgICAgICAgIC0tcGFwZXItZm9udC10aXRsZV8tXy13ZWJraXQtZm9udC1zbW9vdGhpbmdcbiAgICAgICAgKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXRpdGxlXy1fZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmUtX2ZvbnQtd2VpZ2h0KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXBhcGVyLWZvbnQtdGl0bGVfLV9sZXR0ZXItc3BhY2luZyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LXRpdGxlXy1fbGluZS1oZWlnaHQpO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcmVsYXRlZC1pdGVtc1wiOiBIYVJlbGF0ZWRJdGVtcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiwgY3JlYXRlQ29sbGVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0VudHJ5IHtcbiAgZW50cnlfaWQ6IHN0cmluZztcbiAgZG9tYWluOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNvdXJjZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBjb25uZWN0aW9uX2NsYXNzOiBzdHJpbmc7XG4gIHN1cHBvcnRzX29wdGlvbnM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMge1xuICBkaXNhYmxlX25ld19lbnRpdGllczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0VudHJpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPENvbmZpZ0VudHJ5W10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2VudHJ5XCIpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29uZmlnRW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZyxcbiAgdXBkYXRlZFZhbHVlczogUGFydGlhbDxDb25maWdFbnRyeU11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPENvbmZpZ0VudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy91cGRhdGVcIixcbiAgICBlbnRyeV9pZDogY29uZmlnRW50cnlJZCxcbiAgICAuLi51cGRhdGVkVmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpZ0VudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPHtcbiAgICByZXF1aXJlX3Jlc3RhcnQ6IGJvb2xlYW47XG4gIH0+KFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZW50cnkvJHtjb25maWdFbnRyeUlkfWApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWdFbnRyeUlkOiBzdHJpbmdcbikgPT5cbiAgaGFzcy5jYWxsV1M8Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zPih7XG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy9zeXN0ZW1fb3B0aW9ucy9saXN0XCIsXG4gICAgZW50cnlfaWQ6IGNvbmZpZ0VudHJ5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWdFbnRyeUlkOiBzdHJpbmcsXG4gIHBhcmFtczogUGFydGlhbDxDb25maWdFbnRyeVN5c3RlbU9wdGlvbnM+XG4pID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL3N5c3RlbV9vcHRpb25zL3VwZGF0ZVwiLFxuICAgIGVudHJ5X2lkOiBjb25maWdFbnRyeUlkLFxuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uLCBjcmVhdGVDb2xsZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi9lbnRpdHlfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgY29uZmlnX2VudHJpZXM6IHN0cmluZ1tdO1xuICBjb25uZWN0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgc3dfdmVyc2lvbj86IHN0cmluZztcbiAgdmlhX2RldmljZV9pZD86IHN0cmluZztcbiAgYXJlYV9pZD86IHN0cmluZztcbiAgbmFtZV9ieV91c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUVudGl0eUxvb2t1cCB7XG4gIFtkZXZpY2VJZDogc3RyaW5nXTogRW50aXR5UmVnaXN0cnlFbnRyeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgYXJlYV9pZD86IHN0cmluZyB8IG51bGw7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBmYWxsYmFja0RldmljZU5hbWUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10gfCBzdHJpbmdbXVxuKSA9PiB7XG4gIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzIHx8IFtdKSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSB0eXBlb2YgZW50aXR5ID09PSBcInN0cmluZ1wiID8gZW50aXR5IDogZW50aXR5LmVudGl0eV9pZDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IGhhc3Muc3RhdGVzW2VudGl0eUlkXTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRGV2aWNlTmFtZSA9IChcbiAgZGV2aWNlOiBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdGllcz86IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSB8IHN0cmluZ1tdXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICBkZXZpY2UubmFtZV9ieV91c2VyIHx8XG4gICAgZGV2aWNlLm5hbWUgfHxcbiAgICAoZW50aXRpZXMgJiYgZmFsbGJhY2tEZXZpY2VOYW1lKGhhc3MsIGVudGl0aWVzKSkgfHxcbiAgICBoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmRldmljZXMudW5uYW1lZF9kZXZpY2VcIilcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXZpY2VzSW5BcmVhID0gKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSwgYXJlYUlkOiBzdHJpbmcpID0+XG4gIGRldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IGRldmljZS5hcmVhX2lkID09PSBhcmVhSWQpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5jb25zdCBmZXRjaERldmljZVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRGV2aWNlUmVnaXN0cnkoY29ubikudGhlbigoZGV2aWNlcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShkZXZpY2VzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJkZXZpY2VfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxEZXZpY2VSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2RyXCIsXG4gICAgZmV0Y2hEZXZpY2VSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiwgY3JlYXRlQ29sbGVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyeV9pZD86IHN0cmluZztcbiAgZGV2aWNlX2lkPzogc3RyaW5nO1xuICBkaXNhYmxlZF9ieTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRFbnRpdHlSZWdpc3RyeUVudHJ5IGV4dGVuZHMgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIHVuaXF1ZV9pZDogc3RyaW5nO1xuICBjYXBhYmlsaXRpZXM6IG9iamVjdDtcbiAgb3JpZ2luYWxfbmFtZT86IHN0cmluZztcbiAgb3JpZ2luYWxfaWNvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zIHtcbiAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gIGljb24/OiBzdHJpbmcgfCBudWxsO1xuICBkaXNhYmxlZF9ieT86IHN0cmluZyB8IG51bGw7XG4gIG5ld19lbnRpdHlfaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBmaW5kQmF0dGVyeUVudGl0eSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXVxuKTogRW50aXR5UmVnaXN0cnlFbnRyeSB8IHVuZGVmaW5lZCA9PlxuICBlbnRpdGllcy5maW5kKFxuICAgIChlbnRpdHkpID0+XG4gICAgICBoYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSAmJlxuICAgICAgaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF0uYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgPT09IFwiYmF0dGVyeVwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRyeTogRW50aXR5UmVnaXN0cnlFbnRyeVxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChlbnRyeS5uYW1lKSB7XG4gICAgcmV0dXJuIGVudHJ5Lm5hbWU7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RXh0ZW5kZWRFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPEV4dEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvZ2V0XCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXM+XG4pOiBQcm9taXNlPEV4dEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9yZW1vdmVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuY29uc3QgZmV0Y2hFbnRpdHlSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2xpc3RcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGVudGl0aWVzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGVudGl0aWVzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248RW50aXR5UmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9lbnRpdHlSZWdpc3RyeVwiLFxuICAgIGZldGNoRW50aXR5UmVnaXN0cnksXG4gICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBSZWxhdGVkUmVzdWx0IHtcbiAgYXJlYT86IHN0cmluZ1tdO1xuICBhdXRvbWF0aW9uPzogc3RyaW5nW107XG4gIGNvbmZpZ19lbnRyeT86IHN0cmluZ1tdO1xuICBkZXZpY2U/OiBzdHJpbmdbXTtcbiAgZW50aXR5Pzogc3RyaW5nW107XG4gIGdyb3VwPzogc3RyaW5nW107XG4gIHNjZW5lPzogc3RyaW5nW107XG4gIHNjcmlwdD86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgdHlwZSBJdGVtVHlwZSA9XG4gIHwgXCJhcmVhXCJcbiAgfCBcImF1dG9tYXRpb25cIlxuICB8IFwiY29uZmlnX2VudHJ5XCJcbiAgfCBcImRldmljZVwiXG4gIHwgXCJlbnRpdHlcIlxuICB8IFwiZ3JvdXBcIlxuICB8IFwic2NlbmVcIlxuICB8IFwic2NyaXB0XCI7XG5cbmV4cG9ydCBjb25zdCBmaW5kUmVsYXRlZCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaXRlbVR5cGU6IEl0ZW1UeXBlLFxuICBpdGVtSWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxSZWxhdGVkUmVzdWx0PiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJzZWFyY2gvcmVsYXRlZFwiLFxuICAgIGl0ZW1fdHlwZTogaXRlbVR5cGUsXG4gICAgaXRlbV9pZDogaXRlbUlkLFxuICB9KTtcbiIsImltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmludGVyZmFjZSBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlc3VsdDtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGRpc21pc3NUZXh0Pzogc3RyaW5nO1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbiAgY2FuY2VsPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1BhcmFtc1xuICBleHRlbmRzIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyxcbiAgICBQcm9tcHREaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbiAgY29uZmlybWF0aW9uPzogYm9vbGVhbjtcbiAgcHJvbXB0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRHZW5lcmljRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlybWF0aW9uXCIgKi8gXCIuL2RpYWxvZy1ib3hcIik7XG5cbmNvbnN0IHNob3dEaWFsb2dIZWxwZXIgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IERpYWxvZ1BhcmFtcyxcbiAgZXh0cmE/OiB7XG4gICAgY29uZmlybWF0aW9uPzogRGlhbG9nUGFyYW1zW1wiY29uZmlybWF0aW9uXCJdO1xuICAgIHByb21wdD86IERpYWxvZ1BhcmFtc1tcInByb21wdFwiXTtcbiAgfVxuKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdDYW5jZWwgPSBkaWFsb2dQYXJhbXMuY2FuY2VsO1xuICAgIGNvbnN0IG9yaWdDb25maXJtID0gZGlhbG9nUGFyYW1zLmNvbmZpcm07XG5cbiAgICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWJveFwiLFxuICAgICAgZGlhbG9nSW1wb3J0OiBsb2FkR2VuZXJpY0RpYWxvZyxcbiAgICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgICAuLi5kaWFsb2dQYXJhbXMsXG4gICAgICAgIC4uLmV4dHJhLFxuICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBudWxsIDogZmFsc2UpO1xuICAgICAgICAgIGlmIChvcmlnQ2FuY2VsKSB7XG4gICAgICAgICAgICBvcmlnQ2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiAob3V0KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gb3V0IDogdHJ1ZSk7XG4gICAgICAgICAgaWYgKG9yaWdDb25maXJtKSB7XG4gICAgICAgICAgICBvcmlnQ29uZmlybShvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FsZXJ0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBBbGVydERpYWxvZ1BhcmFtc1xuKSA9PiBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcyk7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBDb25maXJtYXRpb25EaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgY29uZmlybWF0aW9uOiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgYm9vbGVhblxuICA+O1xuXG5leHBvcnQgY29uc3Qgc2hvd1Byb21wdERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogUHJvbXB0RGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IHByb21wdDogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIG51bGwgfCBzdHJpbmdcbiAgPjtcbiIsIi8qKiBQbGF0Zm9ybXMgdGhhdCBoYXZlIGEgc2V0dGluZ3MgdGFiLiAqL1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNU19XSVRIX1NFVFRJTkdTX1RBQiA9IHtcbiAgaW5wdXRfbnVtYmVyOiBcImVudGl0eS1zZXR0aW5ncy1oZWxwZXItdGFiXCIsXG4gIGlucHV0X3NlbGVjdDogXCJlbnRpdHktc2V0dGluZ3MtaGVscGVyLXRhYlwiLFxuICBpbnB1dF90ZXh0OiBcImVudGl0eS1zZXR0aW5ncy1oZWxwZXItdGFiXCIsXG4gIGlucHV0X2Jvb2xlYW46IFwiZW50aXR5LXNldHRpbmdzLWhlbHBlci10YWJcIixcbiAgaW5wdXRfZGF0ZXRpbWU6IFwiZW50aXR5LXNldHRpbmdzLWhlbHBlci10YWJcIixcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFiXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnNcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NhY2hlXCI7XG5pbXBvcnQgeyBkeW5hbWljRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2R5bmFtaWMtZWxlbWVudC1kaXJlY3RpdmVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHR5cGUgeyBIYVBhcGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGVkLWl0ZW1zXCI7XG5pbXBvcnQge1xuICBFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICBFeHRFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICBnZXRFeHRlbmRlZEVudGl0eVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQTEFURk9STVNfV0lUSF9TRVRUSU5HU19UQUIgfSBmcm9tIFwiLi9jb25zdFwiO1xuaW1wb3J0IFwiLi9lbnRpdHktcmVnaXN0cnktc2V0dGluZ3NcIjtcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1lbnRpdHktZWRpdG9yXCI7XG5cbmludGVyZmFjZSBUYWJzIHtcbiAgW2tleTogc3RyaW5nXTogVGFiO1xufVxuXG5pbnRlcmZhY2UgVGFiIHtcbiAgY29tcG9uZW50OiBzdHJpbmc7XG4gIHRyYW5zbGF0aW9uS2V5OiBzdHJpbmc7XG59XG5cbkBjdXN0b21FbGVtZW50KFwiZGlhbG9nLWVudGl0eS1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBEaWFsb2dFbnRpdHlFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudHJ5PzpcbiAgICB8IEVudGl0eVJlZ2lzdHJ5RW50cnlcbiAgICB8IEV4dEVudGl0eVJlZ2lzdHJ5RW50cnlcbiAgICB8IG51bGw7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY3VyVGFiPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2V4dHJhVGFiczogVGFicyA9IHt9O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NldHRpbmdzRWxlbWVudFRhZz86IHN0cmluZztcblxuICBAcXVlcnkoXCJoYS1wYXBlci1kaWFsb2dcIikgcHJpdmF0ZSBfZGlhbG9nITogSGFQYXBlckRpYWxvZztcblxuICBwcml2YXRlIF9jdXJUYWJJbmRleCA9IDA7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2coXG4gICAgcGFyYW1zOiBFbnRpdHlSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtc1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5fZW50cnkgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2V0dGluZ3NFbGVtZW50VGFnID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2V4dHJhVGFicyA9IHt9O1xuICAgIHRoaXMuX2dldEVudGl0eVJlZygpO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMgfHwgdGhpcy5fZW50cnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgZW50aXR5SWQgPSB0aGlzLl9wYXJhbXMuZW50aXR5X2lkO1xuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5fZW50cnk7XG4gICAgY29uc3Qgc3RhdGVPYmo6IEhhc3NFbnRpdHkgfCB1bmRlZmluZWQgPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eUlkXTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXBhcGVyLWRpYWxvZ1xuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIG9wZW5lZFxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9JHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVxuICAgICAgICBAY2xvc2UtZGlhbG9nPSR7dGhpcy5jbG9zZURpYWxvZ31cbiAgICAgID5cbiAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmVudGl0eV9yZWdpc3RyeS5kaXNtaXNzXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICBkaWFsb2ctZGlzbWlzc1xuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXRpdGxlXCIgbWFpbi10aXRsZT5cbiAgICAgICAgICAgICR7c3RhdGVPYmogPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSA6IGVudHJ5Py5uYW1lIHx8IGVudGl0eUlkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICR7c3RhdGVPYmpcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6dHVuZVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuTW9yZUluZm99XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPHBhcGVyLXRhYnNcbiAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgaGlkZS1zY3JvbGwtYnV0dG9uc1xuICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX2N1clRhYkluZGV4fVxuICAgICAgICAgIEBzZWxlY3RlZC1pdGVtLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVUYWJTZWxlY3RlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci10YWIgaWQ9XCJ0YWItc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuc2V0dGluZ3NcIil9XG4gICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgJHtPYmplY3QuZW50cmllcyh0aGlzLl9leHRyYVRhYnMpLm1hcChcbiAgICAgICAgICAgIChba2V5LCB0YWJdKSA9PiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItdGFiIGlkPSR7a2V5fT5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZSh0YWIudHJhbnNsYXRpb25LZXkpIHx8IGtleX1cbiAgICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cGFwZXItdGFiIGlkPVwidGFiLXJlbGF0ZWRcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkucmVsYXRlZFwiKX1cbiAgICAgICAgICA8L3BhcGVyLXRhYj5cbiAgICAgICAgPC9wYXBlci10YWJzPlxuICAgICAgICAke2NhY2hlKFxuICAgICAgICAgIHRoaXMuX2N1clRhYiA9PT0gXCJ0YWItc2V0dGluZ3NcIlxuICAgICAgICAgICAgPyBlbnRyeVxuICAgICAgICAgICAgICA/IHRoaXMuX3NldHRpbmdzRWxlbWVudFRhZ1xuICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgJHtkeW5hbWljRWxlbWVudCh0aGlzLl9zZXR0aW5nc0VsZW1lbnRUYWcsIHtcbiAgICAgICAgICAgICAgICAgICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgZGlhbG9nRWxlbWVudDogdGhpcy5fZGlhbG9nLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuZW50aXR5X3JlZ2lzdHJ5Lm5vX3VuaXF1ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogdGhpcy5fY3VyVGFiID09PSBcInRhYi1yZWxhdGVkXCJcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgICAgICAgICA8aGEtcmVsYXRlZC1pdGVtc1xuICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgLml0ZW1JZD0ke2VudGl0eUlkfVxuICAgICAgICAgICAgICAgICAgICBpdGVtVHlwZT1cImVudGl0eVwiXG4gICAgICAgICAgICAgICAgICA+PC9oYS1yZWxhdGVkLWl0ZW1zPlxuICAgICAgICAgICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBgXG4gICAgICAgICl9XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0RW50aXR5UmVnKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9lbnRyeSA9IGF3YWl0IGdldEV4dGVuZGVkRW50aXR5UmVnaXN0cnlFbnRyeShcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLl9wYXJhbXMhLmVudGl0eV9pZFxuICAgICAgKTtcbiAgICAgIHRoaXMuX2xvYWRQbGF0Zm9ybVNldHRpbmdUYWJzKCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aGlzLl9lbnRyeSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVGFiU2VsZWN0ZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCFldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY3VyVGFiID0gZXYuZGV0YWlsLnZhbHVlLmlkO1xuICAgIHRoaXMuX3Jlc2l6ZURpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVzaXplRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgZmlyZUV2ZW50KHRoaXMuX2RpYWxvZyBhcyBIVE1MRWxlbWVudCwgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWRQbGF0Zm9ybVNldHRpbmdUYWJzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5fZW50cnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgIU9iamVjdC5rZXlzKFBMQVRGT1JNU19XSVRIX1NFVFRJTkdTX1RBQikuaW5jbHVkZXModGhpcy5fZW50cnkucGxhdGZvcm0pXG4gICAgKSB7XG4gICAgICB0aGlzLl9zZXR0aW5nc0VsZW1lbnRUYWcgPSBcImVudGl0eS1yZWdpc3RyeS1zZXR0aW5nc1wiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YWcgPSBQTEFURk9STVNfV0lUSF9TRVRUSU5HU19UQUJbdGhpcy5fZW50cnkucGxhdGZvcm1dO1xuICAgIGF3YWl0IGltcG9ydChgLi9lZGl0b3ItdGFicy9zZXR0aW5ncy8ke3RhZ31gKTtcbiAgICB0aGlzLl9zZXR0aW5nc0VsZW1lbnRUYWcgPSB0YWc7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuTW9yZUluZm8oKTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQ6IHRoaXMuX3BhcmFtcyEuZW50aXR5X2lkLFxuICAgIH0pO1xuICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICBpZiAoIShldi5kZXRhaWwgYXMgYW55KS52YWx1ZSkge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgYXBwLXRvb2xiYXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwLXRvb2xiYXIgW21haW4tdGl0bGVdIHtcbiAgICAgICAgICAvKiBEZXNpZ24gZ3VpZGVsaW5lIHN0YXRlcyAyNHB4LCBjaGFuZ2VkIHRvIDE2IHRvIGFsaWduIHdpdGggc3RhdGUgaW5mbyAqL1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyLjZlbTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIC8qIHdlYmtpdCBhbmQgYmxpbmsgc3RpbGwgc3VwcG9ydCBzaW1wbGUgbXVsdGlsaW5lIHRleHQtb3ZlcmZsb3cgKi9cbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ1MXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSB7XG4gICAgICAgICAgLm1haW4tdGl0bGUge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogb3ZlcnJ1bGUgdGhlIGhhLXN0eWxlLWRpYWxvZyBtYXgtaGVpZ2h0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYXBwLWhlYWRlci10ZXh0LWNvbG9yLCB3aGl0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZzo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBtd2MtYnV0dG9uLndhcm5pbmcge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC0tcGFwZXItZm9udC10aXRsZV8tX3doaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItdGFicyB7XG4gICAgICAgICAgLS1wYXBlci10YWJzLXNlbGVjdGlvbi1iYXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImRpYWxvZy1lbnRpdHktZWRpdG9yXCI6IERpYWxvZ0VudGl0eUVkaXRvcjtcbiAgfVxufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2VudGl0eS1zZXR0aW5ncy1oZWxwZXItdGFiXCI6IFtcblx0XHRcIi4vc3JjL3BhbmVscy9jb25maWcvZW50aXRpZXMvZWRpdG9yLXRhYnMvc2V0dGluZ3MvZW50aXR5LXNldHRpbmdzLWhlbHBlci10YWIudHNcIixcblx0XHQwLFxuXHRcdDEzLFxuXHRcdDE5LFxuXHRcdDE0LFxuXHRcdDI0LFxuXHRcdDI5XG5cdF0sXG5cdFwiLi9lbnRpdHktc2V0dGluZ3MtaGVscGVyLXRhYi50c1wiOiBbXG5cdFx0XCIuL3NyYy9wYW5lbHMvY29uZmlnL2VudGl0aWVzL2VkaXRvci10YWJzL3NldHRpbmdzL2VudGl0eS1zZXR0aW5ncy1oZWxwZXItdGFiLnRzXCIsXG5cdFx0MCxcblx0XHQxMyxcblx0XHQxOSxcblx0XHQxNCxcblx0XHQyNCxcblx0XHQyOVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvcGFuZWxzL2NvbmZpZy9lbnRpdGllcy9lZGl0b3ItdGFicy9zZXR0aW5ncyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24taW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgdHlwZSB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQge1xuICBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zLFxuICBFeHRFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5LFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IHNob3dDb25maXJtYXRpb25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IHR5cGUgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiZW50aXR5LXJlZ2lzdHJ5LXNldHRpbmdzXCIpXG5leHBvcnQgY2xhc3MgRW50aXR5UmVnaXN0cnlTZXR0aW5ncyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGVudHJ5ITogRXh0RW50aXR5UmVnaXN0cnlFbnRyeTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZGlhbG9nRWxlbWVudCE6IEhUTUxFbGVtZW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25hbWUhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaWNvbiE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdHlJZCE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kaXNhYmxlZEJ5ITogc3RyaW5nIHwgbnVsbDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdWJtaXR0aW5nPzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9vcmlnRW50aXR5SWQhOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImVudHJ5XCIpKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB0aGlzLmVudHJ5Lm5hbWUgfHwgXCJcIjtcbiAgICAgIHRoaXMuX2ljb24gPSB0aGlzLmVudHJ5Lmljb24gfHwgXCJcIjtcbiAgICAgIHRoaXMuX29yaWdFbnRpdHlJZCA9IHRoaXMuZW50cnkuZW50aXR5X2lkO1xuICAgICAgdGhpcy5fZW50aXR5SWQgPSB0aGlzLmVudHJ5LmVudGl0eV9pZDtcbiAgICAgIHRoaXMuX2Rpc2FibGVkQnkgPSB0aGlzLmVudHJ5LmRpc2FibGVkX2J5O1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICh0aGlzLmVudHJ5LmVudGl0eV9pZCAhPT0gdGhpcy5fb3JpZ0VudGl0eUlkKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZU9iajogSGFzc0VudGl0eSB8IHVuZGVmaW5lZCA9IHRoaXMuaGFzcy5zdGF0ZXNbXG4gICAgICB0aGlzLmVudHJ5LmVudGl0eV9pZFxuICAgIF07XG4gICAgY29uc3QgaW52YWxpZERvbWFpblVwZGF0ZSA9XG4gICAgICBjb21wdXRlRG9tYWluKHRoaXMuX2VudGl0eUlkLnRyaW0oKSkgIT09XG4gICAgICBjb21wdXRlRG9tYWluKHRoaXMuZW50cnkuZW50aXR5X2lkKTtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSAuZGlhbG9nRWxlbWVudD0ke3RoaXMuZGlhbG9nRWxlbWVudH0+XG4gICAgICAgICR7IXN0YXRlT2JqXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLnVuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5fZXJyb3IgPyBodG1sYCA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PiBgIDogXCJcIn1cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX25hbWV9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX25hbWVDaGFuZ2VkfVxuICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuZW50aXR5X3JlZ2lzdHJ5LmVkaXRvci5uYW1lXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICAucGxhY2Vob2xkZXI9JHt0aGlzLmVudHJ5Lm9yaWdpbmFsX25hbWV9XG4gICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl9zdWJtaXR0aW5nfVxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxoYS1pY29uLWlucHV0XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9pY29ufVxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9pY29uQ2hhbmdlZH1cbiAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmVudGl0eV9yZWdpc3RyeS5lZGl0b3IuaWNvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgLnBsYWNlaG9sZGVyPSR7dGhpcy5lbnRyeS5vcmlnaW5hbF9pY29ufVxuICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fc3VibWl0dGluZ31cbiAgICAgICAgICAgIC5lcnJvck1lc3NhZ2U9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmljb25fZXJyb3JcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+PC9oYS1pY29uLWlucHV0PlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fZW50aXR5SWR9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2VudGl0eUlkQ2hhbmdlZH1cbiAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmVudGl0eV9yZWdpc3RyeS5lZGl0b3IuZW50aXR5X2lkXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiRG9tYWluIG5lZWRzIHRvIHN0YXkgdGhlIHNhbWVcIlxuICAgICAgICAgICAgLmludmFsaWQ9JHtpbnZhbGlkRG9tYWluVXBkYXRlfVxuICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fc3VibWl0dGluZ31cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgIC5jaGVja2VkPSR7IXRoaXMuX2Rpc2FibGVkQnl9XG4gICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9kaXNhYmxlZEJ5Q2hhbmdlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmVuYWJsZWRfbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX2Rpc2FibGVkQnkgJiYgdGhpcy5fZGlzYWJsZWRCeSAhPT0gXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuZW50aXR5X3JlZ2lzdHJ5LmVkaXRvci5lbmFibGVkX2NhdXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhdXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBjb25maWdfZW50cnkuZGlzYWJsZWRfYnkuJHt0aGlzLl9kaXNhYmxlZEJ5fWBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuZW50aXR5X3JlZ2lzdHJ5LmVkaXRvci5lbmFibGVkX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8YnIgLz4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmVudGl0eV9yZWdpc3RyeS5lZGl0b3Iubm90ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGEtc3dpdGNoPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9jb25maXJtRGVsZXRlRW50cnl9XCJcbiAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl9zdWJtaXR0aW5nIHx8XG4gICAgICAgICAgIShzdGF0ZU9iaiAmJiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlc3RvcmVkKX1cbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmRlbGV0ZVwiKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fdXBkYXRlRW50cnl9XCJcbiAgICAgICAgICAuZGlzYWJsZWQ9JHtpbnZhbGlkRG9tYWluVXBkYXRlIHx8IHRoaXMuX3N1Ym1pdHRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuZW50aXR5X3JlZ2lzdHJ5LmVkaXRvci51cGRhdGVcIil9XG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9uYW1lQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbmFtZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ljb25DaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pY29uID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5SWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9lbnRpdHlJZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUVudHJ5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHBhcmFtczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPiA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX25hbWUudHJpbSgpIHx8IG51bGwsXG4gICAgICBpY29uOiB0aGlzLl9pY29uLnRyaW0oKSB8fCBudWxsLFxuICAgICAgbmV3X2VudGl0eV9pZDogdGhpcy5fZW50aXR5SWQudHJpbSgpLFxuICAgIH07XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkQnkgPT09IG51bGwgfHwgdGhpcy5fZGlzYWJsZWRCeSA9PT0gXCJ1c2VyXCIpIHtcbiAgICAgIHBhcmFtcy5kaXNhYmxlZF9ieSA9IHRoaXMuX2Rpc2FibGVkQnk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5KHRoaXMuaGFzcyEsIHRoaXMuX29yaWdFbnRpdHlJZCwgcGFyYW1zKTtcbiAgICAgIGZpcmVFdmVudCh0aGlzIGFzIEhUTUxFbGVtZW50LCBcImNsb3NlLWRpYWxvZ1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyLm1lc3NhZ2UgfHwgXCJVbmtub3duIGVycm9yXCI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jb25maXJtRGVsZXRlRW50cnkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKFxuICAgICAgIShhd2FpdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmNvbmZpcm1fZGVsZXRlXCJcbiAgICAgICAgKSxcbiAgICAgIH0pKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHJlbW92ZUVudGl0eVJlZ2lzdHJ5RW50cnkodGhpcy5oYXNzISwgdGhpcy5fb3JpZ0VudGl0eUlkKTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImNsb3NlLWRpYWxvZ1wiKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc3VibWl0dGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVkQnlDaGFuZ2VkKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVkQnkgPSAoZXYudGFyZ2V0IGFzIEhhU3dpdGNoKS5jaGVja2VkID8gbnVsbCA6IFwidXNlclwiO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbi53YXJuaW5nIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImVudGl0eS1yZWdpc3RyeS1zZXR0aW5nc1wiOiBFbnRpdHlSZWdpc3RyeVNldHRpbmdzO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZFQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFVQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBa0NBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQTFDQTtBQUFBO0FBQUE7QUFBQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBOztBQVhBO0FBY0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQVJBO0FBV0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOztBQUVBO0FBSkE7QUFNQTtBQUVBOztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUFHQTtBQUNBOzs7QUFHQTs7O0FBUEE7QUFXQTs7QUF4QkE7QUE0QkE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBUEE7QUFXQTs7QUFwQkE7QUF3QkE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBUEE7QUFXQTs7QUF0QkE7QUEwQkE7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUVBOzs7QUFQQTtBQVlBOztBQXpCQTtBQTZCQTs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7OztBQUlBO0FBQ0E7O0FBRUE7OztBQVBBO0FBV0E7O0FBeEJBO0FBektBO0FBc01BO0FBM1BBO0FBQUE7QUFBQTtBQUFBO0FBOFBBO0FBQ0E7QUFDQTtBQUNBO0FBalFBO0FBQUE7QUFBQTtBQUFBO0FBb1FBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUF0UUE7QUFBQTtBQUFBO0FBQUE7QUF5UUE7QUFDQTtBQTFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNlFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2QkE7QUExU0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVlBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQVVBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTBCQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBTUE7QUFFQTtBQUdBO0FBTUE7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBMkJBO0FBVUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBLDZnQkFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFIQTtBQW9CQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBQUE7QUFJQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQWFBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQWpDQTtBQUFBO0FBQUE7QUFBQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTs7OztBQUlBOzs7OztBQU9BOztBQUVBOztBQUdBOztBQUlBOztBQVBBOzs7OztBQWVBO0FBQ0E7OztBQUdBOztBQUVBO0FBRUE7QUFDQTs7QUFIQTs7QUFRQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTs7QUFZQTs7QUFkQTs7O0FBdUJBO0FBQ0E7Ozs7QUFMQTs7QUF0RUE7QUFvRkE7QUEvSEE7QUFBQTtBQUFBO0FBQUE7QUFrSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNJQTtBQUFBO0FBQUE7QUFBQTtBQThJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBbkpBO0FBQUE7QUFBQTtBQUFBO0FBc0pBO0FBQ0E7QUFDQTtBQXhKQTtBQUFBO0FBQUE7QUFBQTtBQTJKQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXZLQTtBQUFBO0FBQUE7QUFBQTtBQTBLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBOUtBO0FBQUE7QUFBQTtBQUFBO0FBaUxBO0FBQ0E7QUFDQTtBQUNBO0FBcExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1TEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvRkE7QUEzUUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBSUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTs7QUFHQTs7QUFIQTtBQVNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBOzs7QUFLQTtBQVNBO0FBR0E7Ozs7Ozs7Ozs7QUFZQTtBQUNBOztBQUdBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUExRkE7QUE4RkE7QUF6SUE7QUFBQTtBQUFBO0FBQUE7QUE0SUE7QUFDQTtBQUNBO0FBOUlBO0FBQUE7QUFBQTtBQUFBO0FBaUpBO0FBQ0E7QUFDQTtBQW5KQTtBQUFBO0FBQUE7QUFBQTtBQXNKQTtBQUNBO0FBQ0E7QUF4SkE7QUFBQTtBQUFBO0FBQUE7QUEySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVLQTtBQUFBO0FBQUE7QUFBQTtBQStLQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqTUE7QUFBQTtBQUFBO0FBQUE7QUFvTUE7QUFDQTtBQXJNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd01BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlCQTtBQWpPQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
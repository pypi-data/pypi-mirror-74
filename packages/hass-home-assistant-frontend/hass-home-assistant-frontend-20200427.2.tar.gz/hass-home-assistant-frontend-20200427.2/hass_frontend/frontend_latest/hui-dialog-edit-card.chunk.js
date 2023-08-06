(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-card"],{

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

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-editor.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-editor.ts ***!
  \*******************************************************************/
/*! exports provided: HuiCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardEditor", function() { return HuiCardEditor; });
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../create-element/create-card-element */ "./src/panels/lovelace/create-element/create-card-element.ts");
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








let HuiCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("hui-card-editor")], function (_initialize, _LitElement) {
  class HuiCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_yaml",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_configElement",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_configElType",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_GUImode",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_warning",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_loading",

      value() {
        return false;
      }

    }, {
      kind: "get",
      key: "yaml",
      value: // Error: Configuration broken - do not save
      // Warning: GUI editor can't handle configuration - ok to save
      function yaml() {
        return this._yaml || "";
      }
    }, {
      kind: "set",
      key: "yaml",
      value: function yaml(_yaml) {
        this._yaml = _yaml;

        try {
          this._config = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeLoad"])(this.yaml);

          this._updateConfigElement();

          this._error = undefined;
        } catch (err) {
          this._error = err.message;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "config-changed", {
          config: this.value,
          error: this._error,
          guiModeAvailable: !(this.hasWarning || this.hasError)
        });
      }
    }, {
      kind: "get",
      key: "value",
      value: function value() {
        return this._config;
      }
    }, {
      kind: "set",
      key: "value",
      value: function value(config) {
        if (JSON.stringify(config) !== JSON.stringify(this._config || {})) {
          this.yaml = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeDump"])(config);
        }
      }
    }, {
      kind: "get",
      key: "hasWarning",
      value: function hasWarning() {
        return this._warning !== undefined;
      }
    }, {
      kind: "get",
      key: "hasError",
      value: function hasError() {
        return this._error !== undefined;
      }
    }, {
      kind: "get",
      key: "GUImode",
      value: function GUImode() {
        return this._GUImode;
      }
    }, {
      kind: "set",
      key: "GUImode",
      value: function GUImode(guiMode) {
        this._GUImode = guiMode;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "GUImode-changed", {
          guiMode,
          guiModeAvailable: !(this.hasWarning || this.hasError)
        });
      }
    }, {
      kind: "get",
      key: "_yamlEditor",
      value: function _yamlEditor() {
        return this.shadowRoot.querySelector("ha-code-editor");
      }
    }, {
      kind: "method",
      key: "toggleMode",
      value: function toggleMode() {
        this.GUImode = !this.GUImode;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiCardEditor.prototype), "connectedCallback", this).call(this);

        this._refreshYamlEditor();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <div class="wrapper">
        ${this.GUImode ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <div class="gui-editor">
                ${this._loading ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                      <paper-spinner
                        active
                        alt="Loading"
                        class="center margin-bot"
                      ></paper-spinner>
                    ` : this._configElement}
              </div>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <div class="yaml-editor">
                <ha-code-editor
                  mode="yaml"
                  autofocus
                  .value=${this.yaml}
                  .error=${this._error}
                  .rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__["computeRTL"])(this.hass)}
                  @value-changed=${this._handleYAMLChanged}
                ></ha-code-editor>
              </div>
            `}
        ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <div class="error">
                ${this._error}
              </div>
            ` : ""}
        ${this._warning ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <div class="warning">
                ${this._warning}
              </div>
            ` : ""}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HuiCardEditor.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("_GUImode")) {
          if (this.GUImode === false) {
            // Refresh code editor when switching to yaml mode
            this._refreshYamlEditor(true);
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "iron-resize");
        }

        if (this._configElement && changedProperties.has("hass")) {
          this._configElement.hass = this.hass;
        }

        if (this._configElement && changedProperties.has("lovelace")) {
          this._configElement.lovelace = this.lovelace;
        }
      }
    }, {
      kind: "method",
      key: "_refreshYamlEditor",
      value: function _refreshYamlEditor(focus = false) {
        // wait on render
        setTimeout(() => {
          if (this._yamlEditor && this._yamlEditor.codemirror) {
            this._yamlEditor.codemirror.refresh();

            if (focus) {
              this._yamlEditor.codemirror.focus();
            }
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "iron-resize");
        }, 1);
      }
    }, {
      kind: "method",
      key: "_handleUIConfigChanged",
      value: function _handleUIConfigChanged(ev) {
        ev.stopPropagation();
        const config = ev.detail.config;
        this.value = config;
      }
    }, {
      kind: "method",
      key: "_handleYAMLChanged",
      value: function _handleYAMLChanged(ev) {
        ev.stopPropagation();
        const newYaml = ev.detail.value;

        if (newYaml !== this.yaml) {
          this.yaml = newYaml;
        }
      }
    }, {
      kind: "method",
      key: "_updateConfigElement",
      value: async function _updateConfigElement() {
        if (!this.value) {
          return;
        }

        const cardType = this.value.type;
        let configElement = this._configElement;

        try {
          this._error = undefined;
          this._warning = undefined;

          if (this._configElType !== cardType) {
            // If the card type has changed, we need to load a new GUI editor
            if (!this.value.type) {
              throw new Error("No card type defined");
            }

            const elClass = await Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_6__["getCardElementClass"])(cardType);
            this._loading = true; // Check if a GUI editor exists

            if (elClass && elClass.getConfigElement) {
              configElement = await elClass.getConfigElement();
            } else {
              configElement = undefined;
              throw Error(`WARNING: No visual editor available for: ${cardType}`);
            }

            this._configElement = configElement;
            this._configElType = cardType; // Perform final setup

            this._configElement.hass = this.hass;
            this._configElement.lovelace = this.lovelace;

            this._configElement.addEventListener("config-changed", ev => this._handleUIConfigChanged(ev));
          } // Setup GUI editor and check that it can handle the current config


          try {
            this._configElement.setConfig(this.value);
          } catch (err) {
            throw Error(`WARNING: ${err.message}`);
          }
        } catch (err) {
          if (err.message.startsWith("WARNING:")) {
            this._warning = err.message.substr(8);
          } else {
            this._error = err;
          }

          this.GUImode = false;
        } finally {
          this._loading = false;
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "iron-resize");
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      :host {
        display: flex;
      }
      .wrapper {
        width: 100%;
      }
      .gui-editor,
      .yaml-editor {
        padding: 8px 0px;
      }
      .error {
        color: #ef5350;
      }
      .warning {
        color: #ffa726;
      }
      paper-spinner {
        display: block;
        margin: auto;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts":
/*!********************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-preview.ts ***!
  \********************************************************************/
/*! exports provided: HuiCardPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardPreview", function() { return HuiCardPreview; });
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../create-element/create-card-element */ "./src/panels/lovelace/create-element/create-card-element.ts");
/* harmony import */ var _create_element_create_element_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../create-element/create-element-base */ "./src/panels/lovelace/create-element/create-element-base.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class HuiCardPreview extends HTMLElement {
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
      this.style.direction = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_1__["computeRTL"])(hass) ? "rtl" : "ltr";
    }

    this._hass = hass;

    if (this._element) {
      this._element.hass = hass;
    }
  }

  set error(error) {
    this._createCard(Object(_create_element_create_element_base__WEBPACK_IMPORTED_MODULE_3__["createErrorCardConfig"])(`${error.type}: ${error.message}`, undefined));
  }

  set config(configValue) {
    const curConfig = this._config;
    this._config = configValue;

    if (!configValue) {
      this._cleanup();

      return;
    }

    if (!configValue.type) {
      this._createCard(Object(_create_element_create_element_base__WEBPACK_IMPORTED_MODULE_3__["createErrorCardConfig"])("No card type found", configValue));

      return;
    }

    if (!this._element) {
      this._createCard(configValue);

      return;
    } // in case the element was an error element we always want to recreate it


    if (!this._error && curConfig && configValue.type === curConfig.type) {
      try {
        this._element.setConfig(configValue);
      } catch (err) {
        this._createCard(Object(_create_element_create_element_base__WEBPACK_IMPORTED_MODULE_3__["createErrorCardConfig"])(err.message, configValue));
      }
    } else {
      this._createCard(configValue);
    }
  }

  _createCard(configValue) {
    this._cleanup();

    this._element = Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_2__["createCardElement"])(configValue);

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
customElements.define("hui-card-preview", HuiCardPreview);

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts ***!
  \************************************************************************/
/*! exports provided: HuiDialogEditCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogEditCard", function() { return HuiDialogEditCard; });
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-freeze */ "./node_modules/deep-freeze/index.js");
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deep_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _hui_card_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hui-card-editor */ "./src/panels/lovelace/editor/card-editor/hui-card-editor.ts");
/* harmony import */ var _hui_card_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hui-card-picker */ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts");
/* harmony import */ var _hui_card_preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hui-card-preview */ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts");
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










let HuiDialogEditCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-dialog-edit-card")], function (_initialize, _LitElement) {
  class HuiDialogEditCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiDialogEditCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_cardConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_viewConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_saving",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_guiModeAvailable",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("hui-card-editor")],
      key: "_cardEditorEl",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_GUImode",

      value() {
        return true;
      }

    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        this._GUImode = true;
        this._guiModeAvailable = true;
        const [view, card] = params.path;
        this._viewConfig = params.lovelaceConfig.views[view];
        this._cardConfig = card !== undefined ? this._viewConfig.cards[card] : params.cardConfig;

        if (this._cardConfig && !Object.isFrozen(this._cardConfig)) {
          this._cardConfig = deep_freeze__WEBPACK_IMPORTED_MODULE_0___default()(this._cardConfig);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        let heading;

        if (this._cardConfig && this._cardConfig.type) {
          heading = `${this.hass.localize(`ui.panel.lovelace.editor.card.${this._cardConfig.type}.name`)} ${this.hass.localize("ui.panel.lovelace.editor.edit_card.header")}`;
        } else if (!this._cardConfig) {
          heading = this._viewConfig.title ? this.hass.localize("ui.panel.lovelace.editor.edit_card.pick_card_view_title", "name", `"${this._viewConfig.title}"`) : this.hass.localize("ui.panel.lovelace.editor.edit_card.pick_card");
        } else {
          heading = this.hass.localize("ui.panel.lovelace.editor.edit_card.header");
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <ha-paper-dialog with-backdrop opened modal @keyup=${this._handleKeyUp}>
        <h2>
          ${heading}
        </h2>
        <paper-dialog-scrollable>
          ${this._cardConfig === undefined ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <hui-card-picker
                  .lovelace=${this._params.lovelaceConfig}
                  .hass=${this.hass}
                  @config-changed=${this._handleCardPicked}
                ></hui-card-picker>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <div class="content">
                  <div class="element-editor">
                    <hui-card-editor
                      .hass=${this.hass}
                      .lovelace=${this._params.lovelaceConfig}
                      .value=${this._cardConfig}
                      @config-changed=${this._handleConfigChanged}
                      @GUImode-changed=${this._handleGUIModeChanged}
                    ></hui-card-editor>
                  </div>
                  <div class="element-preview">
                    <hui-card-preview
                      .hass=${this.hass}
                      .config=${this._cardConfig}
                      class=${this._error ? "blur" : ""}
                    ></hui-card-preview>
                    ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                          <paper-spinner
                            active
                            alt="Can't update card"
                          ></paper-spinner>
                        ` : ``}
                  </div>
                </div>
              `}
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          ${this._cardConfig !== undefined ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <mwc-button
                  @click=${this._toggleMode}
                  .disabled=${!this._guiModeAvailable}
                  class="gui-mode-button"
                >
                  ${this.hass.localize(!this._cardEditorEl || this._GUImode ? "ui.panel.lovelace.editor.edit_card.show_code_editor" : "ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                </mwc-button>
              ` : ""}
          <mwc-button @click=${this._close}>
            ${this.hass.localize("ui.common.cancel")}
          </mwc-button>
          ${this._cardConfig !== undefined ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <mwc-button
                  ?disabled=${!this._canSave || this._saving}
                  @click=${this._save}
                >
                  ${this._saving ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                        <paper-spinner active alt="Saving"></paper-spinner>
                      ` : this.hass.localize("ui.common.save")}
                </mwc-button>
              ` : ``}
        </div>
      </ha-paper-dialog>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_3__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
        :host {
          --code-mirror-max-height: calc(100vh - 176px);
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 850px) {
          ha-paper-dialog {
            width: 845px;
          }
        }

        ha-paper-dialog {
          max-width: 845px;
        }

        .center {
          margin-left: auto;
          margin-right: auto;
        }

        .content {
          display: flex;
          flex-direction: column;
          margin: 0 -10px;
        }
        .content hui-card-preview {
          margin: 4px auto;
          max-width: 390px;
        }
        .content .element-editor {
          margin: 0 10px;
        }

        @media (min-width: 1200px) {
          ha-paper-dialog {
            max-width: none;
            width: 1000px;
          }

          .content {
            flex-direction: row;
          }
          .content > * {
            flex-basis: 0;
            flex-grow: 1;
            flex-shrink: 1;
            min-width: 0;
          }
          .content hui-card-preview {
            padding: 8px 0;
            margin: auto 10px;
            max-width: 500px;
          }
        }

        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        .hidden {
          display: none;
        }
        .element-editor {
          margin-bottom: 8px;
        }
        .blur {
          filter: blur(2px) grayscale(100%);
        }
        .element-preview {
          position: relative;
        }
        .element-preview paper-spinner {
          top: 50%;
          left: 50%;
          position: absolute;
          z-index: 10;
        }
        hui-card-preview {
          padding-top: 8px;
          margin-bottom: 4px;
          display: block;
          width: 100%;
        }
        .gui-mode-button {
          margin-right: auto;
        }
      `];
      }
    }, {
      kind: "method",
      key: "_handleCardPicked",
      value: function _handleCardPicked(ev) {
        const config = ev.detail.config;

        if (this._params.entities && this._params.entities.length) {
          if (Object.keys(config).includes("entities")) {
            config.entities = this._params.entities;
          } else if (Object.keys(config).includes("entity")) {
            config.entity = this._params.entities[0];
          }
        }

        this._cardConfig = deep_freeze__WEBPACK_IMPORTED_MODULE_0___default()(config);
        this._error = ev.detail.error;
      }
    }, {
      kind: "method",
      key: "_handleConfigChanged",
      value: function _handleConfigChanged(ev) {
        this._cardConfig = deep_freeze__WEBPACK_IMPORTED_MODULE_0___default()(ev.detail.config);
        this._error = ev.detail.error;
        this._guiModeAvailable = ev.detail.guiModeAvailable;
      }
    }, {
      kind: "method",
      key: "_handleKeyUp",
      value: function _handleKeyUp(ev) {
        if (ev.keyCode === 27) {
          this._close();
        }
      }
    }, {
      kind: "method",
      key: "_handleGUIModeChanged",
      value: function _handleGUIModeChanged(ev) {
        ev.stopPropagation();
        this._GUImode = ev.detail.guiMode;
        this._guiModeAvailable = ev.detail.guiModeAvailable;
      }
    }, {
      kind: "method",
      key: "_toggleMode",
      value: function _toggleMode() {
        var _this$_cardEditorEl;

        (_this$_cardEditorEl = this._cardEditorEl) === null || _this$_cardEditorEl === void 0 ? void 0 : _this$_cardEditorEl.toggleMode();
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._params = undefined;
        this._cardConfig = undefined;
        this._error = undefined;
      }
    }, {
      kind: "get",
      key: "_canSave",
      value: function _canSave() {
        if (this._saving) {
          return false;
        }

        if (this._cardConfig === undefined) {
          return false;
        }

        if (this._cardEditorEl && this._cardEditorEl.hasError) {
          return false;
        }

        return true;
      }
    }, {
      kind: "method",
      key: "_save",
      value: async function _save() {
        this._saving = true;
        await this._params.saveConfig(this._params.path.length === 1 ? Object(_config_util__WEBPACK_IMPORTED_MODULE_5__["addCard"])(this._params.lovelaceConfig, this._params.path, this._cardConfig) : Object(_config_util__WEBPACK_IMPORTED_MODULE_5__["replaceCard"])(this._params.lovelaceConfig, this._params.path, this._cardConfig));
        this._saving = false;
        Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_4__["showSaveSuccessToast"])(this, this.hass);

        this._close();
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/util/toast-saved-success.ts":
/*!*****************************************!*\
  !*** ./src/util/toast-saved-success.ts ***!
  \*****************************************/
/*! exports provided: showSaveSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveSuccessToast", function() { return showSaveSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

const showSaveSuccessToast = (el, hass) => Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, {
  message: hass.localize("ui.common.successfully_saved")
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LWNhcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NhcmQtZWRpdG9yL2h1aS1jYXJkLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9odWktY2FyZC1wcmV2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NhcmQtZWRpdG9yL2h1aS1kaWFsb2ctZWRpdC1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3RvYXN0LXNhdmVkLXN1Y2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXJcIjtcbmltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcblxuZXhwb3J0IGNvbnN0IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHRhYmJhYmxlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIHJvb3Qgbm9kZS5cbiAgICogSXQgc2VhcmNoZXMgdGhlIHRhYmJhYmxlIG5vZGVzIGluIHRoZSBsaWdodCBhbmQgc2hhZG93IGRvbSBvZiB0aGUgY2hpZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uIChub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHR5cGUgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYUlyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlclwiO1xuXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpIGFzIENvbnN0cnVjdG9yPFxuICBQYXBlckRpYWxvZ0VsZW1lbnRcbj47XG5cbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSGFJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xuICB9LFxufTtcblxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3Jcbi8vIGV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2dcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZGlhbG9nXCI6IEhhUGFwZXJEaWFsb2c7XG4gIH1cbn1cbi8vIEB0cy1pZ25vcmVcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRpYWxvZ1wiLCBIYVBhcGVyRGlhbG9nKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBzYWZlRHVtcCwgc2FmZUxvYWQgfSBmcm9tIFwianMteWFtbFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgdHlwZSB7IEhhQ29kZUVkaXRvciB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgdHlwZSB7XG4gIExvdmVsYWNlQ2FyZENvbmZpZyxcbiAgTG92ZWxhY2VDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldENhcmRFbGVtZW50Q2xhc3MgfSBmcm9tIFwiLi4vLi4vY3JlYXRlLWVsZW1lbnQvY3JlYXRlLWNhcmQtZWxlbWVudFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEdVSU1vZGVDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdDaGFuZ2VkRXZlbnQge1xuICBjb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZztcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGd1aU1vZGVBdmFpbGFibGU/OiBib29sZWFuO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImVudGl0aWVzLWNoYW5nZWRcIjoge1xuICAgICAgZW50aXRpZXM6IEVudGl0eUNvbmZpZ1tdO1xuICAgIH07XG4gICAgXCJjb25maWctY2hhbmdlZFwiOiBDb25maWdDaGFuZ2VkRXZlbnQ7XG4gICAgXCJHVUltb2RlLWNoYW5nZWRcIjogR1VJTW9kZUNoYW5nZWRFdmVudDtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVJQ29uZmlnQ2hhbmdlZEV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBkZXRhaWw6IHtcbiAgICBjb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZztcbiAgfTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJodWktY2FyZC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbG92ZWxhY2U/OiBMb3ZlbGFjZUNvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF95YW1sPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWdFbGVtZW50PzogTG92ZWxhY2VDYXJkRWRpdG9yO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZ0VsVHlwZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9HVUltb2RlID0gdHJ1ZTtcblxuICAvLyBFcnJvcjogQ29uZmlndXJhdGlvbiBicm9rZW4gLSBkbyBub3Qgc2F2ZVxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcj86IHN0cmluZztcblxuICAvLyBXYXJuaW5nOiBHVUkgZWRpdG9yIGNhbid0IGhhbmRsZSBjb25maWd1cmF0aW9uIC0gb2sgdG8gc2F2ZVxuICBAcHJvcGVydHkoKSBwcml2YXRlIF93YXJuaW5nPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IHlhbWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5feWFtbCB8fCBcIlwiO1xuICB9XG5cbiAgcHVibGljIHNldCB5YW1sKF95YW1sOiBzdHJpbmcpIHtcbiAgICB0aGlzLl95YW1sID0gX3lhbWw7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHNhZmVMb2FkKHRoaXMueWFtbCk7XG4gICAgICB0aGlzLl91cGRhdGVDb25maWdFbGVtZW50KCk7XG4gICAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyLm1lc3NhZ2U7XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHtcbiAgICAgIGNvbmZpZzogdGhpcy52YWx1ZSEsXG4gICAgICBlcnJvcjogdGhpcy5fZXJyb3IsXG4gICAgICBndWlNb2RlQXZhaWxhYmxlOiAhKHRoaXMuaGFzV2FybmluZyB8fCB0aGlzLmhhc0Vycm9yKSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogTG92ZWxhY2VDYXJkQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG5cbiAgcHVibGljIHNldCB2YWx1ZShjb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShjb25maWcpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLl9jb25maWcgfHwge30pKSB7XG4gICAgICB0aGlzLnlhbWwgPSBzYWZlRHVtcChjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzV2FybmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fd2FybmluZyAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3IgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgR1VJbW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fR1VJbW9kZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgR1VJbW9kZShndWlNb2RlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fR1VJbW9kZSA9IGd1aU1vZGU7XG4gICAgZmlyZUV2ZW50KHRoaXMgYXMgSFRNTEVsZW1lbnQsIFwiR1VJbW9kZS1jaGFuZ2VkXCIsIHtcbiAgICAgIGd1aU1vZGUsXG4gICAgICBndWlNb2RlQXZhaWxhYmxlOiAhKHRoaXMuaGFzV2FybmluZyB8fCB0aGlzLmhhc0Vycm9yKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF95YW1sRWRpdG9yKCk6IEhhQ29kZUVkaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImhhLWNvZGUtZWRpdG9yXCIpISBhcyBIYUNvZGVFZGl0b3I7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlTW9kZSgpIHtcbiAgICB0aGlzLkdVSW1vZGUgPSAhdGhpcy5HVUltb2RlO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fcmVmcmVzaFlhbWxFZGl0b3IoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgJHt0aGlzLkdVSW1vZGVcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWktZWRpdG9yXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9sb2FkaW5nXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNlbnRlciBtYXJnaW4tYm90XCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuX2NvbmZpZ0VsZW1lbnR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInlhbWwtZWRpdG9yXCI+XG4gICAgICAgICAgICAgICAgPGhhLWNvZGUtZWRpdG9yXG4gICAgICAgICAgICAgICAgICBtb2RlPVwieWFtbFwiXG4gICAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMueWFtbH1cbiAgICAgICAgICAgICAgICAgIC5lcnJvcj0ke3RoaXMuX2Vycm9yfVxuICAgICAgICAgICAgICAgICAgLnJ0bD0ke2NvbXB1dGVSVEwodGhpcy5oYXNzKX1cbiAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlWUFNTENoYW5nZWR9XG4gICAgICAgICAgICAgICAgPjwvaGEtY29kZS1lZGl0b3I+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgICAgJHt0aGlzLl9lcnJvclxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9lcnJvcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuX3dhcm5pbmdcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl93YXJuaW5nfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJfR1VJbW9kZVwiKSkge1xuICAgICAgaWYgKHRoaXMuR1VJbW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gUmVmcmVzaCBjb2RlIGVkaXRvciB3aGVuIHN3aXRjaGluZyB0byB5YW1sIG1vZGVcbiAgICAgICAgdGhpcy5fcmVmcmVzaFlhbWxFZGl0b3IodHJ1ZSk7XG4gICAgICB9XG4gICAgICBmaXJlRXZlbnQodGhpcyBhcyBIVE1MRWxlbWVudCwgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnRWxlbWVudCAmJiBjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJoYXNzXCIpKSB7XG4gICAgICB0aGlzLl9jb25maWdFbGVtZW50Lmhhc3MgPSB0aGlzLmhhc3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25maWdFbGVtZW50ICYmIGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImxvdmVsYWNlXCIpKSB7XG4gICAgICB0aGlzLl9jb25maWdFbGVtZW50LmxvdmVsYWNlID0gdGhpcy5sb3ZlbGFjZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZWZyZXNoWWFtbEVkaXRvcihmb2N1cyA9IGZhbHNlKSB7XG4gICAgLy8gd2FpdCBvbiByZW5kZXJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl95YW1sRWRpdG9yICYmIHRoaXMuX3lhbWxFZGl0b3IuY29kZW1pcnJvcikge1xuICAgICAgICB0aGlzLl95YW1sRWRpdG9yLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xuICAgICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLl95YW1sRWRpdG9yLmNvZGVtaXJyb3IuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmlyZUV2ZW50KHRoaXMgYXMgSFRNTEVsZW1lbnQsIFwiaXJvbi1yZXNpemVcIik7XG4gICAgfSwgMSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVVSUNvbmZpZ0NoYW5nZWQoZXY6IFVJQ29uZmlnQ2hhbmdlZEV2ZW50KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY29uZmlnID0gZXYuZGV0YWlsLmNvbmZpZztcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlWUFNTENoYW5nZWQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBuZXdZYW1sID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChuZXdZYW1sICE9PSB0aGlzLnlhbWwpIHtcbiAgICAgIHRoaXMueWFtbCA9IG5ld1lhbWw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlQ29uZmlnRWxlbWVudCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkVHlwZSA9IHRoaXMudmFsdWUudHlwZTtcbiAgICBsZXQgY29uZmlnRWxlbWVudCA9IHRoaXMuX2NvbmZpZ0VsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fd2FybmluZyA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZ0VsVHlwZSAhPT0gY2FyZFR5cGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNhcmQgdHlwZSBoYXMgY2hhbmdlZCwgd2UgbmVlZCB0byBsb2FkIGEgbmV3IEdVSSBlZGl0b3JcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlLnR5cGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkIHR5cGUgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsQ2xhc3MgPSBhd2FpdCBnZXRDYXJkRWxlbWVudENsYXNzKGNhcmRUeXBlKTtcblxuICAgICAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYSBHVUkgZWRpdG9yIGV4aXN0c1xuICAgICAgICBpZiAoZWxDbGFzcyAmJiBlbENsYXNzLmdldENvbmZpZ0VsZW1lbnQpIHtcbiAgICAgICAgICBjb25maWdFbGVtZW50ID0gYXdhaXQgZWxDbGFzcy5nZXRDb25maWdFbGVtZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uZmlnRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgV0FSTklORzogTm8gdmlzdWFsIGVkaXRvciBhdmFpbGFibGUgZm9yOiAke2NhcmRUeXBlfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29uZmlnRWxlbWVudCA9IGNvbmZpZ0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuX2NvbmZpZ0VsVHlwZSA9IGNhcmRUeXBlO1xuXG4gICAgICAgIC8vIFBlcmZvcm0gZmluYWwgc2V0dXBcbiAgICAgICAgdGhpcy5fY29uZmlnRWxlbWVudC5oYXNzID0gdGhpcy5oYXNzO1xuICAgICAgICB0aGlzLl9jb25maWdFbGVtZW50LmxvdmVsYWNlID0gdGhpcy5sb3ZlbGFjZTtcbiAgICAgICAgdGhpcy5fY29uZmlnRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29uZmlnLWNoYW5nZWRcIiwgKGV2KSA9PlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVVJQ29uZmlnQ2hhbmdlZChldiBhcyBVSUNvbmZpZ0NoYW5nZWRFdmVudClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgR1VJIGVkaXRvciBhbmQgY2hlY2sgdGhhdCBpdCBjYW4gaGFuZGxlIHRoZSBjdXJyZW50IGNvbmZpZ1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fY29uZmlnRWxlbWVudCEuc2V0Q29uZmlnKHRoaXMudmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IEVycm9yKGBXQVJOSU5HOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLnN0YXJ0c1dpdGgoXCJXQVJOSU5HOlwiKSkge1xuICAgICAgICB0aGlzLl93YXJuaW5nID0gZXJyLm1lc3NhZ2Uuc3Vic3RyKDgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnI7XG4gICAgICB9XG4gICAgICB0aGlzLkdVSW1vZGUgPSBmYWxzZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLndyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ndWktZWRpdG9yLFxuICAgICAgLnlhbWwtZWRpdG9yIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOiAjZWY1MzUwO1xuICAgICAgfVxuICAgICAgLndhcm5pbmcge1xuICAgICAgICBjb2xvcjogI2ZmYTcyNjtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jYXJkLWVkaXRvclwiOiBIdWlDYXJkRWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci10ZXh0YXJlYVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUNhcmRFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2NyZWF0ZS1lbGVtZW50L2NyZWF0ZS1jYXJkLWVsZW1lbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29uZmlnRXJyb3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUVycm9yQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jcmVhdGUtZWxlbWVudC9jcmVhdGUtZWxlbWVudC1iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBIdWlDYXJkUHJldmlldyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgcHJpdmF0ZSBfaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgcHJpdmF0ZSBfZWxlbWVudD86IExvdmVsYWNlQ2FyZDtcblxuICBwcml2YXRlIF9jb25maWc/OiBMb3ZlbGFjZUNhcmRDb25maWc7XG5cbiAgcHJpdmF0ZSBnZXQgX2Vycm9yKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Py50YWdOYW1lID09PSBcIkhVSS1FUlJPUi1DQVJEXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImxsLXJlYnVpbGRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX2NvbmZpZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldCBoYXNzKGhhc3M6IEhvbWVBc3Npc3RhbnQpIHtcbiAgICBpZiAoIXRoaXMuX2hhc3MgfHwgdGhpcy5faGFzcy5sYW5ndWFnZSAhPT0gaGFzcy5sYW5ndWFnZSkge1xuICAgICAgdGhpcy5zdHlsZS5kaXJlY3Rpb24gPSBjb21wdXRlUlRMKGhhc3MpID8gXCJydGxcIiA6IFwibHRyXCI7XG4gICAgfVxuXG4gICAgdGhpcy5faGFzcyA9IGhhc3M7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuaGFzcyA9IGhhc3M7XG4gICAgfVxuICB9XG5cbiAgc2V0IGVycm9yKGVycm9yOiBDb25maWdFcnJvcikge1xuICAgIHRoaXMuX2NyZWF0ZUNhcmQoXG4gICAgICBjcmVhdGVFcnJvckNhcmRDb25maWcoYCR7ZXJyb3IudHlwZX06ICR7ZXJyb3IubWVzc2FnZX1gLCB1bmRlZmluZWQpXG4gICAgKTtcbiAgfVxuXG4gIHNldCBjb25maWcoY29uZmlnVmFsdWU6IExvdmVsYWNlQ2FyZENvbmZpZykge1xuICAgIGNvbnN0IGN1ckNvbmZpZyA9IHRoaXMuX2NvbmZpZztcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdWYWx1ZTtcblxuICAgIGlmICghY29uZmlnVmFsdWUpIHtcbiAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZ1ZhbHVlLnR5cGUpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUNhcmQoXG4gICAgICAgIGNyZWF0ZUVycm9yQ2FyZENvbmZpZyhcIk5vIGNhcmQgdHlwZSBmb3VuZFwiLCBjb25maWdWYWx1ZSlcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9jcmVhdGVDYXJkKGNvbmZpZ1ZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpbiBjYXNlIHRoZSBlbGVtZW50IHdhcyBhbiBlcnJvciBlbGVtZW50IHdlIGFsd2F5cyB3YW50IHRvIHJlY3JlYXRlIGl0XG4gICAgaWYgKCF0aGlzLl9lcnJvciAmJiBjdXJDb25maWcgJiYgY29uZmlnVmFsdWUudHlwZSA9PT0gY3VyQ29uZmlnLnR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0Q29uZmlnKGNvbmZpZ1ZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLl9jcmVhdGVDYXJkKGNyZWF0ZUVycm9yQ2FyZENvbmZpZyhlcnIubWVzc2FnZSwgY29uZmlnVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3JlYXRlQ2FyZChjb25maWdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ2FyZChjb25maWdWYWx1ZTogTG92ZWxhY2VDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBjcmVhdGVDYXJkRWxlbWVudChjb25maWdWYWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faGFzcykge1xuICAgICAgdGhpcy5fZWxlbWVudCEuaGFzcyA9IHRoaXMuX2hhc3M7XG4gICAgfVxuXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50ISk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbnVwKCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jYXJkLXByZXZpZXdcIjogSHVpQ2FyZFByZXZpZXc7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaHVpLWNhcmQtcHJldmlld1wiLCBIdWlDYXJkUHJldmlldyk7XG4iLCJpbXBvcnQgZGVlcEZyZWV6ZSBmcm9tIFwiZGVlcC1mcmVlemVcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHR5cGUgeyBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB0eXBlIHtcbiAgTG92ZWxhY2VDYXJkQ29uZmlnLFxuICBMb3ZlbGFjZVZpZXdDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBoYVN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2hvd1NhdmVTdWNjZXNzVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC90b2FzdC1zYXZlZC1zdWNjZXNzXCI7XG5pbXBvcnQgeyBhZGRDYXJkLCByZXBsYWNlQ2FyZCB9IGZyb20gXCIuLi9jb25maWctdXRpbFwiO1xuaW1wb3J0IHR5cGUgeyBHVUlNb2RlQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuL2h1aS1jYXJkLWVkaXRvclwiO1xuaW1wb3J0IHR5cGUgeyBDb25maWdDaGFuZ2VkRXZlbnQsIEh1aUNhcmRFZGl0b3IgfSBmcm9tIFwiLi9odWktY2FyZC1lZGl0b3JcIjtcbmltcG9ydCBcIi4vaHVpLWNhcmQtcGlja2VyXCI7XG5pbXBvcnQgXCIuL2h1aS1jYXJkLXByZXZpZXdcIjtcbmltcG9ydCB0eXBlIHsgRWRpdENhcmREaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWVkaXQtY2FyZC1kaWFsb2dcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJyZWxvYWQtbG92ZWxhY2VcIjogdW5kZWZpbmVkO1xuICB9XG4gIC8vIGZvciBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50RXZlbnRNYXAge1xuICAgIFwicmVsb2FkLWxvdmVsYWNlXCI6IEhBU1NEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWRpYWxvZy1lZGl0LWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIdWlEaWFsb2dFZGl0Q2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogRWRpdENhcmREaWFsb2dQYXJhbXM7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2FyZENvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF92aWV3Q29uZmlnITogTG92ZWxhY2VWaWV3Q29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NhdmluZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9yPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2d1aU1vZGVBdmFpbGFibGU/ID0gdHJ1ZTtcblxuICBAcXVlcnkoXCJodWktY2FyZC1lZGl0b3JcIikgcHJpdmF0ZSBfY2FyZEVkaXRvckVsPzogSHVpQ2FyZEVkaXRvcjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9HVUltb2RlID0gdHJ1ZTtcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhwYXJhbXM6IEVkaXRDYXJkRGlhbG9nUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX0dVSW1vZGUgPSB0cnVlO1xuICAgIHRoaXMuX2d1aU1vZGVBdmFpbGFibGUgPSB0cnVlO1xuICAgIGNvbnN0IFt2aWV3LCBjYXJkXSA9IHBhcmFtcy5wYXRoO1xuICAgIHRoaXMuX3ZpZXdDb25maWcgPSBwYXJhbXMubG92ZWxhY2VDb25maWcudmlld3Nbdmlld107XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9XG4gICAgICBjYXJkICE9PSB1bmRlZmluZWQgPyB0aGlzLl92aWV3Q29uZmlnLmNhcmRzIVtjYXJkXSA6IHBhcmFtcy5jYXJkQ29uZmlnO1xuICAgIGlmICh0aGlzLl9jYXJkQ29uZmlnICYmICFPYmplY3QuaXNGcm96ZW4odGhpcy5fY2FyZENvbmZpZykpIHtcbiAgICAgIHRoaXMuX2NhcmRDb25maWcgPSBkZWVwRnJlZXplKHRoaXMuX2NhcmRDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGxldCBoZWFkaW5nOiBzdHJpbmc7XG4gICAgaWYgKHRoaXMuX2NhcmRDb25maWcgJiYgdGhpcy5fY2FyZENvbmZpZy50eXBlKSB7XG4gICAgICBoZWFkaW5nID0gYCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgYHVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLiR7dGhpcy5fY2FyZENvbmZpZy50eXBlfS5uYW1lYFxuICAgICAgKX0gJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5oZWFkZXJcIil9YDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9jYXJkQ29uZmlnKSB7XG4gICAgICBoZWFkaW5nID0gdGhpcy5fdmlld0NvbmZpZy50aXRsZVxuICAgICAgICA/IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQucGlja19jYXJkX3ZpZXdfdGl0bGVcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgYFwiJHt0aGlzLl92aWV3Q29uZmlnLnRpdGxlfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgOiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5waWNrX2NhcmRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRpbmcgPSB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuaGVhZGVyXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZGlhbG9nIHdpdGgtYmFja2Ryb3Agb3BlbmVkIG1vZGFsIEBrZXl1cD0ke3RoaXMuX2hhbmRsZUtleVVwfT5cbiAgICAgICAgPGgyPlxuICAgICAgICAgICR7aGVhZGluZ31cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICR7dGhpcy5fY2FyZENvbmZpZyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGh1aS1jYXJkLXBpY2tlclxuICAgICAgICAgICAgICAgICAgLmxvdmVsYWNlPSR7dGhpcy5fcGFyYW1zLmxvdmVsYWNlQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICBAY29uZmlnLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVDYXJkUGlja2VkfVxuICAgICAgICAgICAgICAgID48L2h1aS1jYXJkLXBpY2tlcj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC1lZGl0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGh1aS1jYXJkLWVkaXRvclxuICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgIC5sb3ZlbGFjZT0ke3RoaXMuX3BhcmFtcy5sb3ZlbGFjZUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9jYXJkQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAgIEBjb25maWctY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNvbmZpZ0NoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgQEdVSW1vZGUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUdVSU1vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICA+PC9odWktY2FyZC1lZGl0b3I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LXByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGh1aS1jYXJkLXByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAuY29uZmlnPSR7dGhpcy5fY2FyZENvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz0ke3RoaXMuX2Vycm9yID8gXCJibHVyXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA+PC9odWktY2FyZC1wcmV2aWV3PlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2Vycm9yXG4gICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNhbid0IHVwZGF0ZSBjYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IGBgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgICR7dGhpcy5fY2FyZENvbmZpZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3RvZ2dsZU1vZGV9XG4gICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshdGhpcy5fZ3VpTW9kZUF2YWlsYWJsZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ3VpLW1vZGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLl9jYXJkRWRpdG9yRWwgfHwgdGhpcy5fR1VJbW9kZVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLnNob3dfY29kZV9lZGl0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLnNob3dfdmlzdWFsX2VkaXRvclwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2Nsb3NlfT5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5jYW5jZWxcIil9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICR7dGhpcy5fY2FyZENvbmZpZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID9kaXNhYmxlZD0keyF0aGlzLl9jYW5TYXZlIHx8IHRoaXMuX3NhdmluZ31cbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3NhdmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9zYXZpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlIGFsdD1cIlNhdmluZ1wiPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5zYXZlXCIpfVxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLS1jb2RlLW1pcnJvci1tYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc2cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC8qIG92ZXJydWxlIHRoZSBoYS1zdHlsZS1kaWFsb2cgbWF4LWhlaWdodCBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgICAgd2lkdGg6IDg0NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4NDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwIC0xMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGh1aS1jYXJkLXByZXZpZXcge1xuICAgICAgICAgIG1hcmdpbjogNHB4IGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiAzOTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCAuZWxlbWVudC1lZGl0b3Ige1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50ID4gKiB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAwO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IGh1aS1jYXJkLXByZXZpZXcge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmVsZW1lbnQtZWRpdG9yIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJsdXIge1xuICAgICAgICAgIGZpbHRlcjogYmx1cigycHgpIGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgfVxuICAgICAgICAuZWxlbWVudC1wcmV2aWV3IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmVsZW1lbnQtcHJldmlldyBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICB9XG4gICAgICAgIGh1aS1jYXJkLXByZXZpZXcge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5ndWktbW9kZS1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2FyZFBpY2tlZChldikge1xuICAgIGNvbnN0IGNvbmZpZyA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgaWYgKHRoaXMuX3BhcmFtcyEuZW50aXRpZXMgJiYgdGhpcy5fcGFyYW1zIS5lbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhjb25maWcpLmluY2x1ZGVzKFwiZW50aXRpZXNcIikpIHtcbiAgICAgICAgY29uZmlnLmVudGl0aWVzID0gdGhpcy5fcGFyYW1zIS5lbnRpdGllcztcbiAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoY29uZmlnKS5pbmNsdWRlcyhcImVudGl0eVwiKSkge1xuICAgICAgICBjb25maWcuZW50aXR5ID0gdGhpcy5fcGFyYW1zIS5lbnRpdGllc1swXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9IGRlZXBGcmVlemUoY29uZmlnKTtcbiAgICB0aGlzLl9lcnJvciA9IGV2LmRldGFpbC5lcnJvcjtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNvbmZpZ0NoYW5nZWQoZXY6IEhBU1NEb21FdmVudDxDb25maWdDaGFuZ2VkRXZlbnQ+KSB7XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9IGRlZXBGcmVlemUoZXYuZGV0YWlsLmNvbmZpZyk7XG4gICAgdGhpcy5fZXJyb3IgPSBldi5kZXRhaWwuZXJyb3I7XG4gICAgdGhpcy5fZ3VpTW9kZUF2YWlsYWJsZSA9IGV2LmRldGFpbC5ndWlNb2RlQXZhaWxhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlS2V5VXAoZXY6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlR1VJTW9kZUNoYW5nZWQoZXY6IEhBU1NEb21FdmVudDxHVUlNb2RlQ2hhbmdlZEV2ZW50Pik6IHZvaWQge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX0dVSW1vZGUgPSBldi5kZXRhaWwuZ3VpTW9kZTtcbiAgICB0aGlzLl9ndWlNb2RlQXZhaWxhYmxlID0gZXYuZGV0YWlsLmd1aU1vZGVBdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhcmRFZGl0b3JFbD8udG9nZ2xlTW9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2NhcmRDb25maWcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfY2FuU2F2ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fc2F2aW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jYXJkQ29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhcmRFZGl0b3JFbCAmJiB0aGlzLl9jYXJkRWRpdG9yRWwuaGFzRXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zYXZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3NhdmluZyA9IHRydWU7XG4gICAgYXdhaXQgdGhpcy5fcGFyYW1zIS5zYXZlQ29uZmlnKFxuICAgICAgdGhpcy5fcGFyYW1zIS5wYXRoLmxlbmd0aCA9PT0gMVxuICAgICAgICA/IGFkZENhcmQoXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMhLmxvdmVsYWNlQ29uZmlnLFxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zIS5wYXRoIGFzIFtudW1iZXJdLFxuICAgICAgICAgICAgdGhpcy5fY2FyZENvbmZpZyFcbiAgICAgICAgICApXG4gICAgICAgIDogcmVwbGFjZUNhcmQoXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMhLmxvdmVsYWNlQ29uZmlnLFxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zIS5wYXRoIGFzIFtudW1iZXIsIG51bWJlcl0sXG4gICAgICAgICAgICB0aGlzLl9jYXJkQ29uZmlnIVxuICAgICAgICAgIClcbiAgICApO1xuICAgIHRoaXMuX3NhdmluZyA9IGZhbHNlO1xuICAgIHNob3dTYXZlU3VjY2Vzc1RvYXN0KHRoaXMsIHRoaXMuaGFzcyk7XG4gICAgdGhpcy5fY2xvc2UoKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWRpYWxvZy1lZGl0LWNhcmRcIjogSHVpRGlhbG9nRWRpdENhcmQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuL3RvYXN0XCI7XG5cbmV4cG9ydCBjb25zdCBzaG93U2F2ZVN1Y2Nlc3NUb2FzdCA9IChlbDogSFRNTEVsZW1lbnQsIGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIHNob3dUb2FzdChlbCwge1xuICAgIG1lc3NhZ2U6IGhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnN1Y2Nlc3NmdWxseV9zYXZlZFwiKSxcbiAgfSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFPQTtBQTRCQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBS0E7QUFDQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQXpDQTtBQUFBO0FBQUE7QUFBQTtBQTRDQTtBQUNBO0FBN0NBO0FBQUE7QUFBQTtBQUFBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBbkRBO0FBQUE7QUFBQTtBQUFBO0FBc0RBO0FBQ0E7QUF2REE7QUFBQTtBQUFBO0FBQUE7QUEwREE7QUFDQTtBQTNEQTtBQUFBO0FBQUE7QUFBQTtBQThEQTtBQUNBO0FBL0RBO0FBQUE7QUFBQTtBQUFBO0FBa0VBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXZFQTtBQUFBO0FBQUE7QUFBQTtBQTBFQTtBQUNBO0FBM0VBO0FBQUE7QUFBQTtBQUFBO0FBOEVBO0FBQ0E7QUEvRUE7QUFBQTtBQUFBO0FBQUE7QUFrRkE7QUFDQTtBQUFBO0FBQ0E7QUFwRkE7QUFBQTtBQUFBO0FBQUE7QUF1RkE7O0FBRUE7O0FBR0E7Ozs7OztBQUFBOztBQUhBOzs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFHQTs7QUFIQTtBQU9BOztBQUdBOztBQUhBOztBQW5DQTtBQTRDQTtBQW5JQTtBQUFBO0FBQUE7QUFBQTtBQXNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXRKQTtBQUFBO0FBQUE7QUFBQTtBQXlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQW5LQTtBQUFBO0FBQUE7QUFBQTtBQXNLQTtBQUNBO0FBQ0E7QUFDQTtBQXpLQTtBQUFBO0FBQUE7QUFBQTtBQTRLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWpMQTtBQUFBO0FBQUE7QUFBQTtBQW9MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOE9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNCQTtBQXBRQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFHQTtBQUdBO0FBRUE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBekZBO0FBaUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUNBO0FBV0E7QUFLQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFlQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBQUE7QUFBQTtBQUFBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFHQTtBQUNBO0FBQ0E7O0FBTEE7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFBQTs7O0FBVUE7OztBQUdBOztBQUdBO0FBQ0E7OztBQUdBOztBQVBBO0FBZUE7QUFDQTs7QUFFQTs7QUFHQTtBQUNBOztBQUVBOztBQUFBOztBQU5BOzs7QUE5REE7QUErRUE7QUF2SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1HQTtBQTdPQTtBQUFBO0FBQUE7QUFBQTtBQWdQQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTFQQTtBQUFBO0FBQUE7QUFBQTtBQTZQQTtBQUNBO0FBQ0E7QUFDQTtBQWhRQTtBQUFBO0FBQUE7QUFBQTtBQW1RQTtBQUNBO0FBQ0E7QUFDQTtBQXRRQTtBQUFBO0FBQUE7QUFBQTtBQXlRQTtBQUNBO0FBQ0E7QUFDQTtBQTVRQTtBQUFBO0FBQUE7QUFBQTtBQThRQTtBQUNBO0FBQUE7QUFDQTtBQWhSQTtBQUFBO0FBQUE7QUFBQTtBQW1SQTtBQUNBO0FBQ0E7QUFDQTtBQXRSQTtBQUFBO0FBQUE7QUFBQTtBQXlSQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBblNBO0FBQUE7QUFBQTtBQUFBO0FBc1NBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdlRBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
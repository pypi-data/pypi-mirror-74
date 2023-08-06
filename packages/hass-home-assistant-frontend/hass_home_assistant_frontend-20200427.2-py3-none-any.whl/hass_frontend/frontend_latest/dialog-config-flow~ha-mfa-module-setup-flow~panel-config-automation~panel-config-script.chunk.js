(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"],{

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

/***/ "./src/components/ha-form/ha-form-boolean.ts":
/*!***************************************************!*\
  !*** ./src/components/ha-form/ha-form-boolean.ts ***!
  \***************************************************/
/*! exports provided: HaFormBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFormBoolean", function() { return HaFormBoolean; });
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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




let HaFormBoolean = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-form-boolean")], function (_initialize, _LitElement) {
  class HaFormBoolean extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaFormBoolean,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("paper-checkbox")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-checkbox .checked=${this.data} @change=${this._valueChanged}>
        ${this.label}
      </paper-checkbox>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value: ev.target.checked
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      paper-checkbox {
        display: block;
        padding: 22px 0;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-form/ha-form-float.ts":
/*!*************************************************!*\
  !*** ./src/components/ha-form/ha-form-float.ts ***!
  \*************************************************/
/*! exports provided: HaFormFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFormFloat", function() { return HaFormFloat; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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




let HaFormFloat = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-form-float")], function (_initialize, _LitElement) {
  class HaFormFloat extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaFormFloat,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("paper-input")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-input
        .label=${this.label}
        .value=${this._value}
        .required=${this.schema.required}
        .autoValidate=${this.schema.required}
        @value-changed=${this._valueChanged}
      >
        <span suffix="" slot="suffix">${this.suffix}</span>
      </paper-input>
    `;
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        return this.data || 0;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const value = Number(ev.target.value);

        if (this._value === value) {
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-form/ha-form-integer.ts":
/*!***************************************************!*\
  !*** ./src/components/ha-form/ha-form-integer.ts ***!
  \***************************************************/
/*! exports provided: HaFormInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFormInteger", function() { return HaFormInteger; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ha-paper-slider */ "./src/components/ha-paper-slider.js");
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






let HaFormInteger = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("ha-form-integer")], function (_initialize, _LitElement) {
  class HaFormInteger extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaFormInteger,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["query"])("paper-input ha-paper-slider")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return "valueMin" in this.schema && "valueMax" in this.schema ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
          <div>
            ${this.label}
            <div class="flex">
              ${this.schema.optional && this.schema.default === undefined ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                    <ha-checkbox
                      @change=${this._handleCheckboxChange}
                      .checked=${this.data !== undefined}
                    ></ha-checkbox>
                  ` : ""}
              <ha-paper-slider
                pin=""
                .value=${this._value}
                .min=${this.schema.valueMin}
                .max=${this.schema.valueMax}
                .disabled=${this.data === undefined}
                @value-changed=${this._valueChanged}
              ></ha-paper-slider>
            </div>
          </div>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
          <paper-input
            type="number"
            .label=${this.label}
            .value=${this._value}
            .required=${this.schema.required}
            .autoValidate=${this.schema.required}
            @value-changed=${this._valueChanged}
          ></paper-input>
        `;
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        var _this$schema$descript;

        return this.data || ((_this$schema$descript = this.schema.description) === null || _this$schema$descript === void 0 ? void 0 : _this$schema$descript.suggested_value) || this.schema.default || 0;
      }
    }, {
      kind: "method",
      key: "_handleCheckboxChange",
      value: function _handleCheckboxChange(ev) {
        const checked = ev.target.checked;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", {
          value: checked ? this._value : undefined
        });
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const value = Number(ev.target.value);

        if (this._value === value) {
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", {
          value
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      .flex {
        display: flex;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-form/ha-form-multi_select.ts":
/*!********************************************************!*\
  !*** ./src/components/ha-form/ha-form-multi_select.ts ***!
  \********************************************************/
/*! exports provided: HaFormMultiSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFormMultiSelect", function() { return HaFormMultiSelect; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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










let HaFormMultiSelect = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["customElement"])("ha-form-multi_select")], function (_initialize, _LitElement) {
  class HaFormMultiSelect extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaFormMultiSelect,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_init",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["query"])("paper-menu-button")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const options = Array.isArray(this.schema.options) ? this.schema.options : Object.entries(this.schema.options);
        const data = this.data || [];
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <paper-menu-button horizontal-align="right" vertical-offset="8">
        <div class="dropdown-trigger" slot="dropdown-trigger">
          <paper-ripple></paper-ripple>
          <paper-input
            id="input"
            type="text"
            readonly
            value=${data.map(value => this.schema.options[value] || value).join(", ")}
            label=${this.label}
            input-role="button"
            input-aria-haspopup="listbox"
            autocomplete="off"
          >
            <iron-icon
              icon="paper-dropdown-menu:arrow-drop-down"
              suffix
              slot="suffix"
            ></iron-icon>
          </paper-input>
        </div>
        <paper-listbox
          multi
          slot="dropdown-content"
          attr-for-selected="item-value"
          .selectedValues=${data}
          @selected-items-changed=${this._valueChanged}
          @iron-select=${this._onSelect}
        >
          ${// TS doesn't work with union array types https://github.com/microsoft/TypeScript/issues/36390
        // @ts-ignore
        options.map(item => {
          const value = this._optionValue(item);

          return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
              <paper-icon-item .itemValue=${value}>
                <paper-checkbox
                  .checked=${data.includes(value)}
                  slot="item-icon"
                ></paper-checkbox>
                ${this._optionLabel(item)}
              </paper-icon-item>
            `;
        })}
        </paper-listbox>
      </paper-menu-button>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this.updateComplete.then(() => {
          var _ref, _this$shadowRoot, _this$shadowRoot$quer;

          const input = (_ref = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : (_this$shadowRoot$quer = _this$shadowRoot.querySelector("paper-input")) === null || _this$shadowRoot$quer === void 0 ? void 0 : _this$shadowRoot$quer.inputElement) === null || _ref === void 0 ? void 0 : _ref.inputElement;

          if (input) {
            input.style.textOverflow = "ellipsis";
          }
        });
      }
    }, {
      kind: "method",
      key: "_optionValue",
      value: function _optionValue(item) {
        return Array.isArray(item) ? item[0] : item;
      }
    }, {
      kind: "method",
      key: "_optionLabel",
      value: function _optionLabel(item) {
        return Array.isArray(item) ? item[1] || item[0] : item;
      }
    }, {
      kind: "method",
      key: "_onSelect",
      value: function _onSelect(ev) {
        ev.stopPropagation();
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!ev.detail.value || !this._init) {
          // ignore first call because that is the init of the component
          this._init = true;
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "value-changed", {
          value: ev.detail.value.map(element => element.itemValue)
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["css"]`
      paper-menu-button {
        display: block;
        padding: 0;
        --paper-item-icon-width: 34px;
      }
      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;
      }
      paper-input {
        text-overflow: ellipsis;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-form/ha-form-positive_time_period_dict.ts":
/*!*********************************************************************!*\
  !*** ./src/components/ha-form/ha-form-positive_time_period_dict.ts ***!
  \*********************************************************************/
/*! exports provided: HaFormTimePeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFormTimePeriod", function() { return HaFormTimePeriod; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _paper_time_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../paper-time-input */ "./src/components/paper-time-input.js");
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




let HaFormTimePeriod = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-form-positive_time_period_dict")], function (_initialize, _LitElement) {
  class HaFormTimePeriod extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaFormTimePeriod,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("paper-time-input")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <paper-time-input
        .label=${this.label}
        .required=${this.schema.required}
        .autoValidate=${this.schema.required}
        error-message="Required"
        enable-second
        format="24"
        .hour=${this._parseDuration(this._hours)}
        .min=${this._parseDuration(this._minutes)}
        .sec=${this._parseDuration(this._seconds)}
        @hour-changed=${this._hourChanged}
        @min-changed=${this._minChanged}
        @sec-changed=${this._secChanged}
        float-input-labels
        no-hours-limit
        always-float-input-labels
        hour-label="hh"
        min-label="mm"
        sec-label="ss"
      ></paper-time-input>
    `;
      }
    }, {
      kind: "get",
      key: "_hours",
      value: function _hours() {
        return this.data && this.data.hours ? Number(this.data.hours) : 0;
      }
    }, {
      kind: "get",
      key: "_minutes",
      value: function _minutes() {
        return this.data && this.data.minutes ? Number(this.data.minutes) : 0;
      }
    }, {
      kind: "get",
      key: "_seconds",
      value: function _seconds() {
        return this.data && this.data.seconds ? Number(this.data.seconds) : 0;
      }
    }, {
      kind: "method",
      key: "_parseDuration",
      value: function _parseDuration(value) {
        return value.toString().padStart(2, "0");
      }
    }, {
      kind: "method",
      key: "_hourChanged",
      value: function _hourChanged(ev) {
        this._durationChanged(ev, "hours");
      }
    }, {
      kind: "method",
      key: "_minChanged",
      value: function _minChanged(ev) {
        this._durationChanged(ev, "minutes");
      }
    }, {
      kind: "method",
      key: "_secChanged",
      value: function _secChanged(ev) {
        this._durationChanged(ev, "seconds");
      }
    }, {
      kind: "method",
      key: "_durationChanged",
      value: function _durationChanged(ev, unit) {
        let value = Number(ev.detail.value);

        if (value === this[`_${unit}`]) {
          return;
        }

        let hours = this._hours;
        let minutes = this._minutes;

        if (unit === "seconds" && value > 59) {
          minutes += Math.floor(value / 60);
          value %= 60;
        }

        if (unit === "minutes" && value > 59) {
          hours += Math.floor(value / 60);
          value %= 60;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "value-changed", {
          value: Object.assign({
            hours,
            minutes,
            seconds: this._seconds
          }, {
            [unit]: value
          })
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-form/ha-form-select.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-form/ha-form-select.ts ***!
  \**************************************************/
/*! exports provided: HaFormSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFormSelect", function() { return HaFormSelect; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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






let HaFormSelect = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-form-select")], function (_initialize, _LitElement) {
  class HaFormSelect extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaFormSelect,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["query"])("paper-dropdown-menu")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <paper-dropdown-menu .label=${this.label}>
        <paper-listbox
          slot="dropdown-content"
          attr-for-selected="item-value"
          .selected=${this.data}
          @selected-item-changed=${this._valueChanged}
        >
          ${// TS doesn't work with union array types https://github.com/microsoft/TypeScript/issues/36390
        // @ts-ignore
        this.schema.options.map(item => lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
              <paper-item .itemValue=${this._optionValue(item)}>
                ${this._optionLabel(item)}
              </paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu>
    `;
      }
    }, {
      kind: "method",
      key: "_optionValue",
      value: function _optionValue(item) {
        return Array.isArray(item) ? item[0] : item;
      }
    }, {
      kind: "method",
      key: "_optionLabel",
      value: function _optionLabel(item) {
        return Array.isArray(item) ? item[1] || item[0] : item;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!ev.detail.value) {
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "value-changed", {
          value: ev.detail.value.itemValue
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
      paper-dropdown-menu {
        display: block;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-form/ha-form-string.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-form/ha-form-string.ts ***!
  \**************************************************/
/*! exports provided: HaFormString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFormString", function() { return HaFormString; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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





let HaFormString = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("ha-form-string")], function (_initialize, _LitElement) {
  class HaFormString extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaFormString,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_unmaskedPassword",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["query"])("paper-input")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this.schema.name.includes("password") ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
          <paper-input
            .type=${this._unmaskedPassword ? "text" : "password"}
            .label=${this.label}
            .value=${this.data}
            .required=${this.schema.required}
            .autoValidate=${this.schema.required}
            @value-changed=${this._valueChanged}
          >
            <paper-icon-button
              toggles
              .active=${this._unmaskedPassword}
              slot="suffix"
              .icon=${this._unmaskedPassword ? "hass:eye-off" : "hass:eye"}
              id="iconButton"
              title="Click to toggle between masked and clear password"
              @click=${this._toggleUnmaskedPassword}
            >
            </paper-icon-button>
          </paper-input>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
          <paper-input
            .type=${this._stringType}
            .label=${this.label}
            .value=${this.data}
            .required=${this.schema.required}
            .autoValidate=${this.schema.required}
            error-message="Required"
            @value-changed=${this._valueChanged}
          ></paper-input>
        `;
      }
    }, {
      kind: "method",
      key: "_toggleUnmaskedPassword",
      value: function _toggleUnmaskedPassword(ev) {
        this._unmaskedPassword = ev.target.active;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const value = ev.target.value;

        if (this.data === value) {
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", {
          value
        });
      }
    }, {
      kind: "get",
      key: "_stringType",
      value: function _stringType() {
        if (this.schema.format) {
          if (["email", "url"].includes(this.schema.format)) {
            return this.schema.format;
          }

          if (this.schema.format === "fqdnurl") {
            return "url";
          }
        }

        return "text";
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-form/ha-form.ts":
/*!*******************************************!*\
  !*** ./src/components/ha-form/ha-form.ts ***!
  \*******************************************/
/*! exports provided: HaForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaForm", function() { return HaForm; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_dynamic_element_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/dynamic-element-directive */ "./src/common/dom/dynamic-element-directive.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _ha_form_boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-form-boolean */ "./src/components/ha-form/ha-form-boolean.ts");
/* harmony import */ var _ha_form_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-form-float */ "./src/components/ha-form/ha-form-float.ts");
/* harmony import */ var _ha_form_integer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-form-integer */ "./src/components/ha-form/ha-form-integer.ts");
/* harmony import */ var _ha_form_multi_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-form-multi_select */ "./src/components/ha-form/ha-form-multi_select.ts");
/* harmony import */ var _ha_form_positive_time_period_dict__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-form-positive_time_period_dict */ "./src/components/ha-form/ha-form-positive_time_period_dict.ts");
/* harmony import */ var _ha_form_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-form-select */ "./src/components/ha-form/ha-form-select.ts");
/* harmony import */ var _ha_form_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ha-form-string */ "./src/components/ha-form/ha-form-string.ts");
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











let HaForm = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-form")], function (_initialize, _LitElement) {
  class HaForm extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaForm,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "computeError",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "computeLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "computeSuffix",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        const input = this.shadowRoot.getElementById("child-form") || this.shadowRoot.querySelector("ha-form");

        if (!input) {
          return;
        }

        input.focus();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (Array.isArray(this.schema)) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        ${this.error && this.error.base ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="error">
                ${this._computeError(this.error.base, this.schema)}
              </div>
            ` : ""}
        ${this.schema.map(item => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <ha-form
              .data=${this._getValue(this.data, item)}
              .schema=${item}
              .error=${this._getValue(this.error, item)}
              @value-changed=${this._valueChanged}
              .computeError=${this.computeError}
              .computeLabel=${this.computeLabel}
              .computeSuffix=${this.computeSuffix}
            ></ha-form>
          `)}
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <div class="error">
              ${this._computeError(this.error, this.schema)}
            </div>
          ` : ""}
      ${Object(_common_dom_dynamic_element_directive__WEBPACK_IMPORTED_MODULE_1__["dynamicElement"])(`ha-form-${this.schema.type}`, {
          schema: this.schema,
          data: this.data,
          label: this._computeLabel(this.schema),
          suffix: this._computeSuffix(this.schema),
          id: "child-form"
        })}
    `;
      }
    }, {
      kind: "method",
      key: "_computeLabel",
      value: function _computeLabel(schema) {
        return this.computeLabel ? this.computeLabel(schema) : schema ? schema.name : "";
      }
    }, {
      kind: "method",
      key: "_computeSuffix",
      value: function _computeSuffix(schema) {
        return this.computeSuffix ? this.computeSuffix(schema) : schema && schema.description ? schema.description.suffix : "";
      }
    }, {
      kind: "method",
      key: "_computeError",
      value: function _computeError(error, schema) {
        return this.computeError ? this.computeError(error, schema) : error;
      }
    }, {
      kind: "method",
      key: "_getValue",
      value: function _getValue(obj, item) {
        if (obj) {
          return obj[item.name];
        }

        return null;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        ev.stopPropagation();
        const schema = ev.target.schema;
        const data = this.data;
        data[schema.name] = ev.detail.value;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value: Object.assign({}, data)
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .error {
        color: var(--error-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93fmhhLW1mYS1tb2R1bGUtc2V0dXAtZmxvd35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctc2NyaXB0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vZHluYW1pYy1lbGVtZW50LWRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mb3JtL2hhLWZvcm0tYm9vbGVhbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mb3JtL2hhLWZvcm0tZmxvYXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtZm9ybS9oYS1mb3JtLWludGVnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtZm9ybS9oYS1mb3JtLW11bHRpX3NlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mb3JtL2hhLWZvcm0tcG9zaXRpdmVfdGltZV9wZXJpb2RfZGljdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mb3JtL2hhLWZvcm0tc2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWZvcm0vaGEtZm9ybS1zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtZm9ybS9oYS1mb3JtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpcmVjdGl2ZSwgTm9kZVBhcnQsIFBhcnQgfSBmcm9tIFwibGl0LWh0bWxcIjtcblxuZXhwb3J0IGNvbnN0IGR5bmFtaWNFbGVtZW50ID0gZGlyZWN0aXZlKFxuICAodGFnOiBzdHJpbmcsIHByb3BlcnRpZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiAocGFydDogUGFydCk6IHZvaWQgPT4ge1xuICAgIGlmICghKHBhcnQgaW5zdGFuY2VvZiBOb2RlUGFydCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJkeW5hbWljRWxlbWVudERpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIGluIGNvbnRlbnQgYmluZGluZ3NcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgZWxlbWVudCA9IHBhcnQudmFsdWUgYXMgSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoXG4gICAgICBlbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRhZy50b1VwcGVyQ2FzZSgpID09PSAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkudGFnTmFtZVxuICAgICkge1xuICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocHJvcGVydGllcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgZWxlbWVudCFba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudCFba2V5XSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHBhcnQuc2V0VmFsdWUoZWxlbWVudCk7XG4gIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IHR5cGUgeyBQYXBlckNoZWNrYm94RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHR5cGUge1xuICBIYUZvcm1Cb29sZWFuRGF0YSxcbiAgSGFGb3JtQm9vbGVhblNjaGVtYSxcbiAgSGFGb3JtRWxlbWVudCxcbn0gZnJvbSBcIi4vaGEtZm9ybVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZvcm0tYm9vbGVhblwiKVxuZXhwb3J0IGNsYXNzIEhhRm9ybUJvb2xlYW4gZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgSGFGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2hlbWEhOiBIYUZvcm1Cb29sZWFuU2NoZW1hO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkYXRhITogSGFGb3JtQm9vbGVhbkRhdGE7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsITogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdWZmaXghOiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KFwicGFwZXItY2hlY2tib3hcIikgcHJpdmF0ZSBfaW5wdXQ/OiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0KSB7XG4gICAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWNoZWNrYm94IC5jaGVja2VkPSR7dGhpcy5kYXRhfSBAY2hhbmdlPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfT5cbiAgICAgICAgJHt0aGlzLmxhYmVsfVxuICAgICAgPC9wYXBlci1jaGVja2JveD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwge1xuICAgICAgdmFsdWU6IChldi50YXJnZXQgYXMgUGFwZXJDaGVja2JveEVsZW1lbnQpLmNoZWNrZWQsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1jaGVja2JveCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAyMnB4IDA7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZm9ybS1ib29sZWFuXCI6IEhhRm9ybUJvb2xlYW47XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgdHlwZSB7IFBhcGVySW5wdXRFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgcXVlcnksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEhhRm9ybUVsZW1lbnQsIEhhRm9ybUZsb2F0RGF0YSwgSGFGb3JtRmxvYXRTY2hlbWEgfSBmcm9tIFwiLi9oYS1mb3JtXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZm9ybS1mbG9hdFwiKVxuZXhwb3J0IGNsYXNzIEhhRm9ybUZsb2F0IGV4dGVuZHMgTGl0RWxlbWVudCBpbXBsZW1lbnRzIEhhRm9ybUVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NoZW1hITogSGFGb3JtRmxvYXRTY2hlbWE7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGRhdGEhOiBIYUZvcm1GbG9hdERhdGE7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsITogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdWZmaXghOiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KFwicGFwZXItaW5wdXRcIikgcHJpdmF0ZSBfaW5wdXQ/OiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0KSB7XG4gICAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWx9XG4gICAgICAgIC52YWx1ZT0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAucmVxdWlyZWQ9JHt0aGlzLnNjaGVtYS5yZXF1aXJlZH1cbiAgICAgICAgLmF1dG9WYWxpZGF0ZT0ke3RoaXMuc2NoZW1hLnJlcXVpcmVkfVxuICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPiR7dGhpcy5zdWZmaXh9PC9zcGFuPlxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEgfHwgMDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcigoZXYudGFyZ2V0IGFzIFBhcGVySW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlLFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1mb3JtLWZsb2F0XCI6IEhhRm9ybUZsb2F0O1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHR5cGUgeyBQYXBlcklucHV0RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc2xpZGVyL3BhcGVyLXNsaWRlclwiO1xuaW1wb3J0IHR5cGUgeyBQYXBlclNsaWRlckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItc2xpZGVyL3BhcGVyLXNsaWRlclwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSGFDaGVja2JveCB9IGZyb20gXCIuLi9oYS1jaGVja2JveFwiO1xuaW1wb3J0IFwiLi4vaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQge1xuICBIYUZvcm1FbGVtZW50LFxuICBIYUZvcm1JbnRlZ2VyRGF0YSxcbiAgSGFGb3JtSW50ZWdlclNjaGVtYSxcbn0gZnJvbSBcIi4vaGEtZm9ybVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZvcm0taW50ZWdlclwiKVxuZXhwb3J0IGNsYXNzIEhhRm9ybUludGVnZXIgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgSGFGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2hlbWEhOiBIYUZvcm1JbnRlZ2VyU2NoZW1hO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkYXRhPzogSGFGb3JtSW50ZWdlckRhdGE7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdWZmaXg/OiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KFwicGFwZXItaW5wdXQgaGEtcGFwZXItc2xpZGVyXCIpIHByaXZhdGUgX2lucHV0PzogSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dCkge1xuICAgICAgdGhpcy5faW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gXCJ2YWx1ZU1pblwiIGluIHRoaXMuc2NoZW1hICYmIFwidmFsdWVNYXhcIiBpbiB0aGlzLnNjaGVtYVxuICAgICAgPyBodG1sYFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAke3RoaXMubGFiZWx9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAke3RoaXMuc2NoZW1hLm9wdGlvbmFsICYmIHRoaXMuc2NoZW1hLmRlZmF1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGhhLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2hhbmRsZUNoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5kYXRhICE9PSB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgID48L2hhLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgPGhhLXBhcGVyLXNsaWRlclxuICAgICAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgICAgICAgICAgLm1pbj0ke3RoaXMuc2NoZW1hLnZhbHVlTWlufVxuICAgICAgICAgICAgICAgIC5tYXg9JHt0aGlzLnNjaGVtYS52YWx1ZU1heH1cbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRhdGEgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgPjwvaGEtcGFwZXItc2xpZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgIDogaHRtbGBcbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5sYWJlbH1cbiAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAgICAgLnJlcXVpcmVkPSR7dGhpcy5zY2hlbWEucmVxdWlyZWR9XG4gICAgICAgICAgICAuYXV0b1ZhbGlkYXRlPSR7dGhpcy5zY2hlbWEucmVxdWlyZWR9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5kYXRhIHx8XG4gICAgICB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbj8uc3VnZ2VzdGVkX3ZhbHVlIHx8XG4gICAgICB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8XG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNoZWNrYm94Q2hhbmdlKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGNoZWNrZWQgPSAoZXYudGFyZ2V0IGFzIEhhQ2hlY2tib3gpLmNoZWNrZWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogY2hlY2tlZCA/IHRoaXMuX3ZhbHVlIDogdW5kZWZpbmVkLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKFxuICAgICAgKGV2LnRhcmdldCBhcyBQYXBlcklucHV0RWxlbWVudCB8IFBhcGVyU2xpZGVyRWxlbWVudCkudmFsdWVcbiAgICApO1xuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5mbGV4IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1mb3JtLWludGVnZXJcIjogSGFGb3JtSW50ZWdlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZVwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgSGFGb3JtRWxlbWVudCxcbiAgSGFGb3JtTXVsdGlTZWxlY3REYXRhLFxuICBIYUZvcm1NdWx0aVNlbGVjdFNjaGVtYSxcbn0gZnJvbSBcIi4vaGEtZm9ybVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZvcm0tbXVsdGlfc2VsZWN0XCIpXG5leHBvcnQgY2xhc3MgSGFGb3JtTXVsdGlTZWxlY3QgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgSGFGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2hlbWEhOiBIYUZvcm1NdWx0aVNlbGVjdFNjaGVtYTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZGF0YSE6IEhhRm9ybU11bHRpU2VsZWN0RGF0YTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbGFiZWwhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHN1ZmZpeCE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9pbml0ID0gZmFsc2U7XG5cbiAgQHF1ZXJ5KFwicGFwZXItbWVudS1idXR0b25cIikgcHJpdmF0ZSBfaW5wdXQ/OiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lucHV0KSB7XG4gICAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5pc0FycmF5KHRoaXMuc2NoZW1hLm9wdGlvbnMpXG4gICAgICA/IHRoaXMuc2NoZW1hLm9wdGlvbnNcbiAgICAgIDogT2JqZWN0LmVudHJpZXModGhpcy5zY2hlbWEub3B0aW9ucyEpO1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSB8fCBbXTtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1tZW51LWJ1dHRvbiBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIiB2ZXJ0aWNhbC1vZmZzZXQ9XCI4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi10cmlnZ2VyXCIgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIj5cbiAgICAgICAgICA8cGFwZXItcmlwcGxlPjwvcGFwZXItcmlwcGxlPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgdmFsdWU9JHtkYXRhXG4gICAgICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiB0aGlzLnNjaGVtYS5vcHRpb25zIVt2YWx1ZV0gfHwgdmFsdWUpXG4gICAgICAgICAgICAgIC5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICBsYWJlbD0ke3RoaXMubGFiZWx9XG4gICAgICAgICAgICBpbnB1dC1yb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGlucHV0LWFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlyb24taWNvblxuICAgICAgICAgICAgICBpY29uPVwicGFwZXItZHJvcGRvd24tbWVudTphcnJvdy1kcm9wLWRvd25cIlxuICAgICAgICAgICAgICBzdWZmaXhcbiAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICA+PC9pcm9uLWljb24+XG4gICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgbXVsdGlcbiAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLXZhbHVlXCJcbiAgICAgICAgICAuc2VsZWN0ZWRWYWx1ZXM9JHtkYXRhfVxuICAgICAgICAgIEBzZWxlY3RlZC1pdGVtcy1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX29uU2VsZWN0fVxuICAgICAgICA+XG4gICAgICAgICAgJHsvLyBUUyBkb2Vzbid0IHdvcmsgd2l0aCB1bmlvbiBhcnJheSB0eXBlcyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzM2MzkwXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIG9wdGlvbnMubWFwKChpdGVtOiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX29wdGlvblZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0gLml0ZW1WYWx1ZT0ke3ZhbHVlfT5cbiAgICAgICAgICAgICAgICA8cGFwZXItY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7ZGF0YS5pbmNsdWRlcyh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAke3RoaXMuX29wdGlvbkxhYmVsKGl0ZW0pfVxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvcGFwZXItbWVudS1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gKHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcihcInBhcGVyLWlucHV0XCIpXG4gICAgICAgID8uaW5wdXRFbGVtZW50IGFzIGFueSk/LmlucHV0RWxlbWVudDtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9vcHRpb25WYWx1ZShpdGVtOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbSkgPyBpdGVtWzBdIDogaXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgX29wdGlvbkxhYmVsKGl0ZW06IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMV0gfHwgaXRlbVswXSA6IGl0ZW07XG4gIH1cblxuICBwcml2YXRlIF9vblNlbGVjdChldjogRXZlbnQpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIWV2LmRldGFpbC52YWx1ZSB8fCAhdGhpcy5faW5pdCkge1xuICAgICAgLy8gaWdub3JlIGZpcnN0IGNhbGwgYmVjYXVzZSB0aGF0IGlzIHRoZSBpbml0IG9mIHRoZSBjb21wb25lbnRcbiAgICAgIHRoaXMuX2luaXQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpcmVFdmVudChcbiAgICAgIHRoaXMsXG4gICAgICBcInZhbHVlLWNoYW5nZWRcIixcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IGV2LmRldGFpbC52YWx1ZS5tYXAoKGVsZW1lbnQpID0+IGVsZW1lbnQuaXRlbVZhbHVlKSxcbiAgICAgIH0sXG4gICAgICB7IGJ1YmJsZXM6IGZhbHNlIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItbWVudS1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLS1wYXBlci1pdGVtLWljb24td2lkdGg6IDM0cHg7XG4gICAgICB9XG4gICAgICBwYXBlci1yaXBwbGUge1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWZvcm0tbXVsdGlfc2VsZWN0XCI6IEhhRm9ybU11bHRpU2VsZWN0O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgcXVlcnksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBcIi4uL3BhcGVyLXRpbWUtaW5wdXRcIjtcbmltcG9ydCB7IEhhRm9ybUVsZW1lbnQsIEhhRm9ybVRpbWVEYXRhLCBIYUZvcm1UaW1lU2NoZW1hIH0gZnJvbSBcIi4vaGEtZm9ybVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZvcm0tcG9zaXRpdmVfdGltZV9wZXJpb2RfZGljdFwiKVxuZXhwb3J0IGNsYXNzIEhhRm9ybVRpbWVQZXJpb2QgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgSGFGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2hlbWEhOiBIYUZvcm1UaW1lU2NoZW1hO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkYXRhITogSGFGb3JtVGltZURhdGE7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsITogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdWZmaXghOiBzdHJpbmc7XG5cbiAgQHF1ZXJ5KFwicGFwZXItdGltZS1pbnB1dFwiKSBwcml2YXRlIF9pbnB1dD86IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICBpZiAodGhpcy5faW5wdXQpIHtcbiAgICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItdGltZS1pbnB1dFxuICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsfVxuICAgICAgICAucmVxdWlyZWQ9JHt0aGlzLnNjaGVtYS5yZXF1aXJlZH1cbiAgICAgICAgLmF1dG9WYWxpZGF0ZT0ke3RoaXMuc2NoZW1hLnJlcXVpcmVkfVxuICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICBlbmFibGUtc2Vjb25kXG4gICAgICAgIGZvcm1hdD1cIjI0XCJcbiAgICAgICAgLmhvdXI9JHt0aGlzLl9wYXJzZUR1cmF0aW9uKHRoaXMuX2hvdXJzKX1cbiAgICAgICAgLm1pbj0ke3RoaXMuX3BhcnNlRHVyYXRpb24odGhpcy5fbWludXRlcyl9XG4gICAgICAgIC5zZWM9JHt0aGlzLl9wYXJzZUR1cmF0aW9uKHRoaXMuX3NlY29uZHMpfVxuICAgICAgICBAaG91ci1jaGFuZ2VkPSR7dGhpcy5faG91ckNoYW5nZWR9XG4gICAgICAgIEBtaW4tY2hhbmdlZD0ke3RoaXMuX21pbkNoYW5nZWR9XG4gICAgICAgIEBzZWMtY2hhbmdlZD0ke3RoaXMuX3NlY0NoYW5nZWR9XG4gICAgICAgIGZsb2F0LWlucHV0LWxhYmVsc1xuICAgICAgICBuby1ob3Vycy1saW1pdFxuICAgICAgICBhbHdheXMtZmxvYXQtaW5wdXQtbGFiZWxzXG4gICAgICAgIGhvdXItbGFiZWw9XCJoaFwiXG4gICAgICAgIG1pbi1sYWJlbD1cIm1tXCJcbiAgICAgICAgc2VjLWxhYmVsPVwic3NcIlxuICAgICAgPjwvcGFwZXItdGltZS1pbnB1dD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2hvdXJzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmhvdXJzID8gTnVtYmVyKHRoaXMuZGF0YS5ob3VycykgOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX21pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubWludXRlcyA/IE51bWJlcih0aGlzLmRhdGEubWludXRlcykgOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3NlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2Vjb25kcyA/IE51bWJlcih0aGlzLmRhdGEuc2Vjb25kcykgOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VEdXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hvdXJDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5fZHVyYXRpb25DaGFuZ2VkKGV2LCBcImhvdXJzXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWluQ2hhbmdlZChldikge1xuICAgIHRoaXMuX2R1cmF0aW9uQ2hhbmdlZChldiwgXCJtaW51dGVzXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VjQ2hhbmdlZChldikge1xuICAgIHRoaXMuX2R1cmF0aW9uQ2hhbmdlZChldiwgXCJzZWNvbmRzXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZHVyYXRpb25DaGFuZ2VkKGV2LCB1bml0KSB7XG4gICAgbGV0IHZhbHVlID0gTnVtYmVyKGV2LmRldGFpbC52YWx1ZSk7XG5cbiAgICBpZiAodmFsdWUgPT09IHRoaXNbYF8ke3VuaXR9YF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaG91cnMgPSB0aGlzLl9ob3VycztcbiAgICBsZXQgbWludXRlcyA9IHRoaXMuX21pbnV0ZXM7XG5cbiAgICBpZiAodW5pdCA9PT0gXCJzZWNvbmRzXCIgJiYgdmFsdWUgPiA1OSkge1xuICAgICAgbWludXRlcyArPSBNYXRoLmZsb29yKHZhbHVlIC8gNjApO1xuICAgICAgdmFsdWUgJT0gNjA7XG4gICAgfVxuXG4gICAgaWYgKHVuaXQgPT09IFwibWludXRlc1wiICYmIHZhbHVlID4gNTkpIHtcbiAgICAgIGhvdXJzICs9IE1hdGguZmxvb3IodmFsdWUgLyA2MCk7XG4gICAgICB2YWx1ZSAlPSA2MDtcbiAgICB9XG5cbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGhvdXJzLFxuICAgICAgICBtaW51dGVzLFxuICAgICAgICBzZWNvbmRzOiB0aGlzLl9zZWNvbmRzLFxuICAgICAgICAuLi57IFt1bml0XTogdmFsdWUgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWZvcm0tcG9zaXRpdmVfdGltZV9wZXJpb2RfZGljdFwiOiBIYUZvcm1UaW1lUGVyaW9kO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIYUZvcm1FbGVtZW50LCBIYUZvcm1TZWxlY3REYXRhLCBIYUZvcm1TZWxlY3RTY2hlbWEgfSBmcm9tIFwiLi9oYS1mb3JtXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZm9ybS1zZWxlY3RcIilcbmV4cG9ydCBjbGFzcyBIYUZvcm1TZWxlY3QgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgSGFGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2hlbWEhOiBIYUZvcm1TZWxlY3RTY2hlbWE7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGRhdGEhOiBIYUZvcm1TZWxlY3REYXRhO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbCE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc3VmZml4ITogc3RyaW5nO1xuXG4gIEBxdWVyeShcInBhcGVyLWRyb3Bkb3duLW1lbnVcIikgcHJpdmF0ZSBfaW5wdXQ/OiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0KSB7XG4gICAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUgLmxhYmVsPSR7dGhpcy5sYWJlbH0+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS12YWx1ZVwiXG4gICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5kYXRhfVxuICAgICAgICAgIEBzZWxlY3RlZC1pdGVtLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICAkey8vIFRTIGRvZXNuJ3Qgd29yayB3aXRoIHVuaW9uIGFycmF5IHR5cGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzYzOTBcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGhpcy5zY2hlbWEub3B0aW9ucyEubWFwKFxuICAgICAgICAgICAgKGl0ZW06IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10pID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIC5pdGVtVmFsdWU9JHt0aGlzLl9vcHRpb25WYWx1ZShpdGVtKX0+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9vcHRpb25MYWJlbChpdGVtKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uVmFsdWUoaXRlbTogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbVswXSA6IGl0ZW07XG4gIH1cblxuICBwcml2YXRlIF9vcHRpb25MYWJlbChpdGVtOiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbSkgPyBpdGVtWzFdIHx8IGl0ZW1bMF0gOiBpdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwge1xuICAgICAgdmFsdWU6IGV2LmRldGFpbC52YWx1ZS5pdGVtVmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZm9ybS1zZWxlY3RcIjogSGFGb3JtU2VsZWN0O1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB0eXBlIHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHR5cGUge1xuICBIYUZvcm1FbGVtZW50LFxuICBIYUZvcm1TdHJpbmdEYXRhLFxuICBIYUZvcm1TdHJpbmdTY2hlbWEsXG59IGZyb20gXCIuL2hhLWZvcm1cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1mb3JtLXN0cmluZ1wiKVxuZXhwb3J0IGNsYXNzIEhhRm9ybVN0cmluZyBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBIYUZvcm1FbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNjaGVtYSE6IEhhRm9ybVN0cmluZ1NjaGVtYTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZGF0YSE6IEhhRm9ybVN0cmluZ0RhdGE7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsITogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdWZmaXghOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdW5tYXNrZWRQYXNzd29yZCA9IGZhbHNlO1xuXG4gIEBxdWVyeShcInBhcGVyLWlucHV0XCIpIHByaXZhdGUgX2lucHV0PzogSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnB1dCkge1xuICAgICAgdGhpcy5faW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEubmFtZS5pbmNsdWRlcyhcInBhc3N3b3JkXCIpXG4gICAgICA/IGh0bWxgXG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAudHlwZT0ke3RoaXMuX3VubWFza2VkUGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cbiAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWx9XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLmRhdGF9XG4gICAgICAgICAgICAucmVxdWlyZWQ9JHt0aGlzLnNjaGVtYS5yZXF1aXJlZH1cbiAgICAgICAgICAgIC5hdXRvVmFsaWRhdGU9JHt0aGlzLnNjaGVtYS5yZXF1aXJlZH1cbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICB0b2dnbGVzXG4gICAgICAgICAgICAgIC5hY3RpdmU9JHt0aGlzLl91bm1hc2tlZFBhc3N3b3JkfVxuICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgLmljb249JHt0aGlzLl91bm1hc2tlZFBhc3N3b3JkID8gXCJoYXNzOmV5ZS1vZmZcIiA6IFwiaGFzczpleWVcIn1cbiAgICAgICAgICAgICAgaWQ9XCJpY29uQnV0dG9uXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDbGljayB0byB0b2dnbGUgYmV0d2VlbiBtYXNrZWQgYW5kIGNsZWFyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdG9nZ2xlVW5tYXNrZWRQYXNzd29yZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgYFxuICAgICAgOiBodG1sYFxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgLnR5cGU9JHt0aGlzLl9zdHJpbmdUeXBlfVxuICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5sYWJlbH1cbiAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuZGF0YX1cbiAgICAgICAgICAgIC5yZXF1aXJlZD0ke3RoaXMuc2NoZW1hLnJlcXVpcmVkfVxuICAgICAgICAgICAgLmF1dG9WYWxpZGF0ZT0ke3RoaXMuc2NoZW1hLnJlcXVpcmVkfVxuICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlVW5tYXNrZWRQYXNzd29yZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl91bm1hc2tlZFBhc3N3b3JkID0gKGV2LnRhcmdldCBhcyBhbnkpLmFjdGl2ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldi50YXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGlmICh0aGlzLmRhdGEgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwge1xuICAgICAgdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfc3RyaW5nVHlwZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNjaGVtYS5mb3JtYXQpIHtcbiAgICAgIGlmIChbXCJlbWFpbFwiLCBcInVybFwiXS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5mb3JtYXQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5mb3JtYXQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZm9ybWF0ID09PSBcImZxZG51cmxcIikge1xuICAgICAgICByZXR1cm4gXCJ1cmxcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwidGV4dFwiO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1mb3JtLXN0cmluZ1wiOiBIYUZvcm1TdHJpbmc7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBkeW5hbWljRWxlbWVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2R5bmFtaWMtZWxlbWVudC1kaXJlY3RpdmVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBcIi4vaGEtZm9ybS1ib29sZWFuXCI7XG5pbXBvcnQgXCIuL2hhLWZvcm0tZmxvYXRcIjtcbmltcG9ydCBcIi4vaGEtZm9ybS1pbnRlZ2VyXCI7XG5pbXBvcnQgXCIuL2hhLWZvcm0tbXVsdGlfc2VsZWN0XCI7XG5pbXBvcnQgXCIuL2hhLWZvcm0tcG9zaXRpdmVfdGltZV9wZXJpb2RfZGljdFwiO1xuaW1wb3J0IFwiLi9oYS1mb3JtLXNlbGVjdFwiO1xuaW1wb3J0IFwiLi9oYS1mb3JtLXN0cmluZ1wiO1xuXG5leHBvcnQgdHlwZSBIYUZvcm1TY2hlbWEgPVxuICB8IEhhRm9ybVN0cmluZ1NjaGVtYVxuICB8IEhhRm9ybUludGVnZXJTY2hlbWFcbiAgfCBIYUZvcm1GbG9hdFNjaGVtYVxuICB8IEhhRm9ybUJvb2xlYW5TY2hlbWFcbiAgfCBIYUZvcm1TZWxlY3RTY2hlbWFcbiAgfCBIYUZvcm1NdWx0aVNlbGVjdFNjaGVtYVxuICB8IEhhRm9ybVRpbWVTY2hlbWE7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFGb3JtQmFzZVNjaGVtYSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVmYXVsdD86IEhhRm9ybURhdGE7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgb3B0aW9uYWw/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IHsgc3VmZml4Pzogc3RyaW5nOyBzdWdnZXN0ZWRfdmFsdWU/OiBIYUZvcm1EYXRhIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFGb3JtSW50ZWdlclNjaGVtYSBleHRlbmRzIEhhRm9ybUJhc2VTY2hlbWEge1xuICB0eXBlOiBcImludGVnZXJcIjtcbiAgZGVmYXVsdD86IEhhRm9ybUludGVnZXJEYXRhO1xuICB2YWx1ZU1pbj86IG51bWJlcjtcbiAgdmFsdWVNYXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFGb3JtU2VsZWN0U2NoZW1hIGV4dGVuZHMgSGFGb3JtQmFzZVNjaGVtYSB7XG4gIHR5cGU6IFwic2VsZWN0XCI7XG4gIG9wdGlvbnM/OiBzdHJpbmdbXSB8IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhRm9ybU11bHRpU2VsZWN0U2NoZW1hIGV4dGVuZHMgSGFGb3JtQmFzZVNjaGVtYSB7XG4gIHR5cGU6IFwibXVsdGlfc2VsZWN0XCI7XG4gIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgc3RyaW5nW10gfCBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIYUZvcm1GbG9hdFNjaGVtYSBleHRlbmRzIEhhRm9ybUJhc2VTY2hlbWEge1xuICB0eXBlOiBcImZsb2F0XCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFGb3JtU3RyaW5nU2NoZW1hIGV4dGVuZHMgSGFGb3JtQmFzZVNjaGVtYSB7XG4gIHR5cGU6IFwic3RyaW5nXCI7XG4gIGZvcm1hdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIYUZvcm1Cb29sZWFuU2NoZW1hIGV4dGVuZHMgSGFGb3JtQmFzZVNjaGVtYSB7XG4gIHR5cGU6IFwiYm9vbGVhblwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhRm9ybVRpbWVTY2hlbWEgZXh0ZW5kcyBIYUZvcm1CYXNlU2NoZW1hIHtcbiAgdHlwZTogXCJ0aW1lXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFGb3JtRGF0YUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IEhhRm9ybURhdGE7XG59XG5cbmV4cG9ydCB0eXBlIEhhRm9ybURhdGEgPVxuICB8IEhhRm9ybVN0cmluZ0RhdGFcbiAgfCBIYUZvcm1JbnRlZ2VyRGF0YVxuICB8IEhhRm9ybUZsb2F0RGF0YVxuICB8IEhhRm9ybUJvb2xlYW5EYXRhXG4gIHwgSGFGb3JtU2VsZWN0RGF0YVxuICB8IEhhRm9ybU11bHRpU2VsZWN0RGF0YVxuICB8IEhhRm9ybVRpbWVEYXRhO1xuXG5leHBvcnQgdHlwZSBIYUZvcm1TdHJpbmdEYXRhID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgSGFGb3JtSW50ZWdlckRhdGEgPSBudW1iZXI7XG5leHBvcnQgdHlwZSBIYUZvcm1GbG9hdERhdGEgPSBudW1iZXI7XG5leHBvcnQgdHlwZSBIYUZvcm1Cb29sZWFuRGF0YSA9IGJvb2xlYW47XG5leHBvcnQgdHlwZSBIYUZvcm1TZWxlY3REYXRhID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgSGFGb3JtTXVsdGlTZWxlY3REYXRhID0gc3RyaW5nW107XG5leHBvcnQgaW50ZXJmYWNlIEhhRm9ybVRpbWVEYXRhIHtcbiAgaG91cnM/OiBudW1iZXI7XG4gIG1pbnV0ZXM/OiBudW1iZXI7XG4gIHNlY29uZHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFGb3JtRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzY2hlbWE6IEhhRm9ybVNjaGVtYTtcbiAgZGF0YT86IEhhRm9ybURhdGFDb250YWluZXIgfCBIYUZvcm1EYXRhO1xuICBsYWJlbD86IHN0cmluZztcbiAgc3VmZml4Pzogc3RyaW5nO1xufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLWZvcm1cIilcbmV4cG9ydCBjbGFzcyBIYUZvcm0gZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgSGFGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkYXRhITogSGFGb3JtRGF0YUNvbnRhaW5lciB8IEhhRm9ybURhdGE7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHNjaGVtYSE6IEhhRm9ybVNjaGVtYTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZXJyb3I7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbXB1dGVFcnJvcj86IChzY2hlbWE6IEhhRm9ybVNjaGVtYSwgZXJyb3IpID0+IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgY29tcHV0ZUxhYmVsPzogKHNjaGVtYTogSGFGb3JtU2NoZW1hKSA9PiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbXB1dGVTdWZmaXg/OiAoc2NoZW1hOiBIYUZvcm1TY2hlbWEpID0+IHN0cmluZztcblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgY29uc3QgaW5wdXQgPVxuICAgICAgdGhpcy5zaGFkb3dSb290IS5nZXRFbGVtZW50QnlJZChcImNoaWxkLWZvcm1cIikgfHxcbiAgICAgIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImhhLWZvcm1cIik7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAoaW5wdXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc2NoZW1hKSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICR7dGhpcy5lcnJvciAmJiB0aGlzLmVycm9yLmJhc2VcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fY29tcHV0ZUVycm9yKHRoaXMuZXJyb3IuYmFzZSwgdGhpcy5zY2hlbWEpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5zY2hlbWEubWFwKFxuICAgICAgICAgIChpdGVtKSA9PiBodG1sYFxuICAgICAgICAgICAgPGhhLWZvcm1cbiAgICAgICAgICAgICAgLmRhdGE9JHt0aGlzLl9nZXRWYWx1ZSh0aGlzLmRhdGEsIGl0ZW0pfVxuICAgICAgICAgICAgICAuc2NoZW1hPSR7aXRlbX1cbiAgICAgICAgICAgICAgLmVycm9yPSR7dGhpcy5fZ2V0VmFsdWUodGhpcy5lcnJvciwgaXRlbSl9XG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgICAgICAuY29tcHV0ZUVycm9yPSR7dGhpcy5jb21wdXRlRXJyb3J9XG4gICAgICAgICAgICAgIC5jb21wdXRlTGFiZWw9JHt0aGlzLmNvbXB1dGVMYWJlbH1cbiAgICAgICAgICAgICAgLmNvbXB1dGVTdWZmaXg9JHt0aGlzLmNvbXB1dGVTdWZmaXh9XG4gICAgICAgICAgICA+PC9oYS1mb3JtPlxuICAgICAgICAgIGBcbiAgICAgICAgKX1cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuZXJyb3JcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+XG4gICAgICAgICAgICAgICR7dGhpcy5fY29tcHV0ZUVycm9yKHRoaXMuZXJyb3IsIHRoaXMuc2NoZW1hKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHtkeW5hbWljRWxlbWVudChgaGEtZm9ybS0ke3RoaXMuc2NoZW1hLnR5cGV9YCwge1xuICAgICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLFxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICAgIGxhYmVsOiB0aGlzLl9jb21wdXRlTGFiZWwodGhpcy5zY2hlbWEpLFxuICAgICAgICBzdWZmaXg6IHRoaXMuX2NvbXB1dGVTdWZmaXgodGhpcy5zY2hlbWEpLFxuICAgICAgICBpZDogXCJjaGlsZC1mb3JtXCIsXG4gICAgICB9KX1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUxhYmVsKHNjaGVtYTogSGFGb3JtU2NoZW1hKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZUxhYmVsXG4gICAgICA/IHRoaXMuY29tcHV0ZUxhYmVsKHNjaGVtYSlcbiAgICAgIDogc2NoZW1hXG4gICAgICA/IHNjaGVtYS5uYW1lXG4gICAgICA6IFwiXCI7XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlU3VmZml4KHNjaGVtYTogSGFGb3JtU2NoZW1hKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZVN1ZmZpeFxuICAgICAgPyB0aGlzLmNvbXB1dGVTdWZmaXgoc2NoZW1hKVxuICAgICAgOiBzY2hlbWEgJiYgc2NoZW1hLmRlc2NyaXB0aW9uXG4gICAgICA/IHNjaGVtYS5kZXNjcmlwdGlvbi5zdWZmaXhcbiAgICAgIDogXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVFcnJvcihlcnJvciwgc2NoZW1hOiBIYUZvcm1TY2hlbWEpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlRXJyb3IgPyB0aGlzLmNvbXB1dGVFcnJvcihlcnJvciwgc2NoZW1hKSA6IGVycm9yO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VmFsdWUob2JqLCBpdGVtKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgcmV0dXJuIG9ialtpdGVtLm5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBzY2hlbWEgPSAoZXYudGFyZ2V0IGFzIEhhRm9ybUVsZW1lbnQpLnNjaGVtYTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhIGFzIEhhRm9ybURhdGFDb250YWluZXI7XG4gICAgZGF0YVtzY2hlbWEubmFtZV0gPSBldi5kZXRhaWwudmFsdWU7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogeyAuLi5kYXRhIH0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuZXJyb3Ige1xuICAgICAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWZvcm1cIjogSGFGb3JtO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVBO0FBVUE7QUFRQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBQ0E7O0FBRkE7QUFLQTtBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTtBQUNBO0FBREE7QUFHQTtBQTdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBOzs7OztBQUFBO0FBTUE7QUF0Q0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFRQTtBQUlBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBa0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBUkE7QUFXQTtBQTdCQTtBQUFBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBakNBO0FBQUE7QUFBQTtBQUFBO0FBb0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBM0NBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQTtBQUVBO0FBVUE7QUFFQTtBQVFBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBa0JBOztBQUdBOztBQUVBOztBQUdBO0FBQ0E7O0FBSkE7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFuQkE7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQS9CQTtBQWtDQTtBQXBEQTtBQUFBO0FBQUE7QUFBQTtBQXNEQTtBQUNBO0FBQUE7QUFNQTtBQTdEQTtBQUFBO0FBQUE7QUFBQTtBQWdFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBcEVBO0FBQUE7QUFBQTtBQUFBO0FBdUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBaEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtRkE7Ozs7QUFBQTtBQUtBO0FBeEZBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFRQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFvQkE7QUFJQTtBQUNBOzs7Ozs7OztBQVFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFOQTtBQVNBOzs7QUE1Q0E7QUFnREE7QUF6RUE7QUFBQTtBQUFBO0FBQUE7QUE0RUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuRkE7QUFBQTtBQUFBO0FBQUE7QUFzRkE7QUFDQTtBQXZGQTtBQUFBO0FBQUE7QUFBQTtBQTBGQTtBQUNBO0FBM0ZBO0FBQUE7QUFBQTtBQUFBO0FBOEZBO0FBQ0E7QUEvRkE7QUFBQTtBQUFBO0FBQUE7QUFrR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBaEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtSEE7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0JBO0FBbklBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQVFBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBYkE7QUFzQkE7QUF4Q0E7QUFBQTtBQUFBO0FBQUE7QUEyQ0E7QUFDQTtBQTVDQTtBQUFBO0FBQUE7QUFBQTtBQStDQTtBQUNBO0FBaERBO0FBQUE7QUFBQTtBQUFBO0FBbURBO0FBQ0E7QUFwREE7QUFBQTtBQUFBO0FBQUE7QUF1REE7QUFDQTtBQXhEQTtBQUFBO0FBQUE7QUFBQTtBQTJEQTtBQUNBO0FBNURBO0FBQUE7QUFBQTtBQUFBO0FBK0RBO0FBQ0E7QUFoRUE7QUFBQTtBQUFBO0FBQUE7QUFtRUE7QUFDQTtBQXBFQTtBQUFBO0FBQUE7QUFBQTtBQXVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQUE7QUFMQTtBQVFBO0FBbEdBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUlBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSEE7OztBQVZBO0FBb0JBO0FBdENBO0FBQUE7QUFBQTtBQUFBO0FBeUNBO0FBQ0E7QUExQ0E7QUFBQTtBQUFBO0FBQUE7QUE2Q0E7QUFDQTtBQTlDQTtBQUFBO0FBQUE7QUFBQTtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBdkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwREE7Ozs7QUFBQTtBQUtBO0FBL0RBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUVBO0FBUUE7QUFRQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFvQkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7OztBQUdBOzs7O0FBakJBOztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQTlCQTtBQWlDQTtBQXJEQTtBQUFBO0FBQUE7QUFBQTtBQXdEQTtBQUNBO0FBekRBO0FBQUE7QUFBQTtBQUFBO0FBNERBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBbkVBO0FBQUE7QUFBQTtBQUFBO0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQS9FQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBc0ZBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQ0E7O0FBR0E7O0FBSEE7QUFPQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQVJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFSQTtBQWdCQTtBQWpFQTtBQUFBO0FBQUE7QUFBQTtBQW9FQTtBQUtBO0FBekVBO0FBQUE7QUFBQTtBQUFBO0FBNEVBO0FBS0E7QUFqRkE7QUFBQTtBQUFBO0FBQUE7QUFvRkE7QUFDQTtBQXJGQTtBQUFBO0FBQUE7QUFBQTtBQXdGQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE1RkE7QUFBQTtBQUFBO0FBQUE7QUErRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQXRHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUdBOzs7O0FBQUE7QUFLQTtBQTlHQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[64],{

/***/ "./src/data/input_text.ts":
/*!********************************!*\
  !*** ./src/data/input_text.ts ***!
  \********************************/
/*! exports provided: setValue, fetchInputText, createInputText, updateInputText, deleteInputText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInputText", function() { return fetchInputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputText", function() { return createInputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputText", function() { return updateInputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInputText", function() { return deleteInputText; });
const setValue = (hass, entity, value) => hass.callService(entity.split(".", 1)[0], "set_value", {
  value,
  entity_id: entity
});
const fetchInputText = hass => hass.callWS({
  type: "input_text/list"
});
const createInputText = (hass, values) => hass.callWS(Object.assign({
  type: "input_text/create"
}, values));
const updateInputText = (hass, id, updates) => hass.callWS(Object.assign({
  type: "input_text/update",
  input_text_id: id
}, updates));
const deleteInputText = (hass, id) => hass.callWS({
  type: "input_text/delete",
  input_text_id: id
});

/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-text-entity-row.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-text-entity-row.ts ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _data_input_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/input_text */ "./src/data/input_text.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
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








let HuiInputTextEntityRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-input-text-entity-row")], function (_initialize, _LitElement) {
  class HuiInputTextEntityRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiInputTextEntityRow,
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
          throw new Error("Configuration error");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_3__["hasConfigOrEntityChanged"])(this, changedProps);
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
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <paper-input
          no-label-float
          .disabled=${_data_entity__WEBPACK_IMPORTED_MODULE_1__["UNAVAILABLE_STATES"].includes(stateObj.state)}
          .value="${stateObj.state}"
          .minlength="${stateObj.attributes.min}"
          .maxlength="${stateObj.attributes.max}"
          .autoValidate="${stateObj.attributes.pattern}"
          .pattern="${stateObj.attributes.pattern}"
          .type="${stateObj.attributes.mode}"
          @change="${this._selectedValueChanged}"
          placeholder="(empty value)"
        ></paper-input>
      </hui-generic-entity-row>
    `;
      }
    }, {
      kind: "get",
      key: "_inputEl",
      value: function _inputEl() {
        return this.shadowRoot.querySelector("paper-input");
      }
    }, {
      kind: "method",
      key: "_selectedValueChanged",
      value: function _selectedValueChanged(ev) {
        const element = this._inputEl;
        const stateObj = this.hass.states[this._config.entity];

        if (element.value !== stateObj.state) {
          Object(_data_input_text__WEBPACK_IMPORTED_MODULE_2__["setValue"])(this.hass, stateObj.entity_id, element.value);
        }

        ev.target.blur();
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbnB1dF90ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZW50aXR5LXJvd3MvaHVpLWlucHV0LXRleHQtZW50aXR5LXJvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRUZXh0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpbml0aWFsPzogc3RyaW5nO1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbiAgcGF0dGVybj86IHN0cmluZztcbiAgbW9kZT86IFwidGV4dFwiIHwgXCJwYXNzd29yZFwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0VGV4dE11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgaW5pdGlhbDogc3RyaW5nO1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHBhdHRlcm46IHN0cmluZztcbiAgbW9kZTogXCJ0ZXh0XCIgfCBcInBhc3N3b3JkXCI7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRWYWx1ZSA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsU2VydmljZShlbnRpdHkuc3BsaXQoXCIuXCIsIDEpWzBdLCBcInNldF92YWx1ZVwiLCB7XG4gICAgdmFsdWUsXG4gICAgZW50aXR5X2lkOiBlbnRpdHksXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbnB1dFRleHQgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8SW5wdXRUZXh0W10+KHsgdHlwZTogXCJpbnB1dF90ZXh0L2xpc3RcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0VGV4dCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBJbnB1dFRleHRNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPElucHV0VGV4dD4oe1xuICAgIHR5cGU6IFwiaW5wdXRfdGV4dC9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlSW5wdXRUZXh0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPElucHV0VGV4dE11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPElucHV0VGV4dD4oe1xuICAgIHR5cGU6IFwiaW5wdXRfdGV4dC91cGRhdGVcIixcbiAgICBpbnB1dF90ZXh0X2lkOiBpZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUlucHV0VGV4dCA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBpZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJpbnB1dF90ZXh0L2RlbGV0ZVwiLFxuICAgIGlucHV0X3RleHRfaWQ6IGlkLFxuICB9KTtcbiIsImltcG9ydCB7IFBhcGVySW5wdXRFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFVOQVZBSUxBQkxFX1NUQVRFUyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eVwiO1xuaW1wb3J0IHsgc2V0VmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9pbnB1dF90ZXh0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBoYXNDb25maWdPckVudGl0eUNoYW5nZWQgfSBmcm9tIFwiLi4vY29tbW9uL2hhcy1jaGFuZ2VkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS1nZW5lcmljLWVudGl0eS1yb3dcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLXdhcm5pbmdcIjtcbmltcG9ydCB7IEVudGl0eUNvbmZpZywgTG92ZWxhY2VSb3cgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1pbnB1dC10ZXh0LWVudGl0eS1yb3dcIilcbmNsYXNzIEh1aUlucHV0VGV4dEVudGl0eVJvdyBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZVJvdyB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBFbnRpdHlDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEVudGl0eUNvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25maWd1cmF0aW9uIGVycm9yXCIpO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkKHRoaXMsIGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1t0aGlzLl9jb25maWcuZW50aXR5XTtcblxuICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aHVpLXdhcm5pbmdcbiAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLndhcm5pbmcuZW50aXR5X25vdF9mb3VuZFwiLFxuICAgICAgICAgICAgXCJlbnRpdHlcIixcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5lbnRpdHlcbiAgICAgICAgICApfTwvaHVpLXdhcm5pbmdcbiAgICAgICAgPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxodWktZ2VuZXJpYy1lbnRpdHktcm93IC5oYXNzPSR7dGhpcy5oYXNzfSAuY29uZmlnPSR7dGhpcy5fY29uZmlnfT5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXRcbiAgICAgICAgICAuZGlzYWJsZWQ9JHtVTkFWQUlMQUJMRV9TVEFURVMuaW5jbHVkZXMoc3RhdGVPYmouc3RhdGUpfVxuICAgICAgICAgIC52YWx1ZT1cIiR7c3RhdGVPYmouc3RhdGV9XCJcbiAgICAgICAgICAubWlubGVuZ3RoPVwiJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbn1cIlxuICAgICAgICAgIC5tYXhsZW5ndGg9XCIke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4fVwiXG4gICAgICAgICAgLmF1dG9WYWxpZGF0ZT1cIiR7c3RhdGVPYmouYXR0cmlidXRlcy5wYXR0ZXJufVwiXG4gICAgICAgICAgLnBhdHRlcm49XCIke3N0YXRlT2JqLmF0dHJpYnV0ZXMucGF0dGVybn1cIlxuICAgICAgICAgIC50eXBlPVwiJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vZGV9XCJcbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9zZWxlY3RlZFZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKGVtcHR5IHZhbHVlKVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgPC9odWktZ2VuZXJpYy1lbnRpdHktcm93PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfaW5wdXRFbCgpOiBQYXBlcklucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInBhcGVyLWlucHV0XCIpIGFzIFBhcGVySW5wdXRFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRWYWx1ZUNoYW5nZWQoZXYpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5faW5wdXRFbDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcyEuc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XTtcblxuICAgIGlmIChlbGVtZW50LnZhbHVlICE9PSBzdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgc2V0VmFsdWUodGhpcy5oYXNzISwgc3RhdGVPYmouZW50aXR5X2lkLCBlbGVtZW50LnZhbHVlISk7XG4gICAgfVxuXG4gICAgZXYudGFyZ2V0LmJsdXIoKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWlucHV0LXRleHQtZW50aXR5LXJvd1wiOiBIdWlJbnB1dFRleHRFbnRpdHlSb3c7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQXVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVhBO0FBZ0JBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWxFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
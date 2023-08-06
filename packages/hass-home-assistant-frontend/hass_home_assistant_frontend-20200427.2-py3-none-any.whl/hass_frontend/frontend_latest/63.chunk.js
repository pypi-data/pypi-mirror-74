(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[63],{

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

/***/ "./src/panels/lovelace/entity-rows/hui-input-number-entity-row.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-number-entity-row.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-slider */ "./src/components/ha-slider.js");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _data_input_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/input_text */ "./src/data/input_text.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
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











let HuiInputNumberEntityRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-number-entity-row")], function (_initialize, _LitElement) {
  class HuiInputNumberEntityRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiInputNumberEntityRow,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      key: "_loaded",
      value: void 0
    }, {
      kind: "field",
      key: "_updated",
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
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiInputNumberEntityRow.prototype), "connectedCallback", this).call(this);

        if (this._updated && !this._loaded) {
          this._initialLoad();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this._updated = true;

        if (this.isConnected && !this._loaded) {
          this._initialLoad();
        }
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        const stateObj = this.hass.states[this._config.entity];

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${stateObj.attributes.mode === "slider" ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <div class="flex">
                <ha-slider
                  .disabled=${_data_entity__WEBPACK_IMPORTED_MODULE_4__["UNAVAILABLE_STATES"].includes(stateObj.state)}
                  .dir="${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_2__["computeRTLDirection"])(this.hass)}"
                  .step="${Number(stateObj.attributes.step)}"
                  .min="${Number(stateObj.attributes.min)}"
                  .max="${Number(stateObj.attributes.max)}"
                  .value="${Number(stateObj.state)}"
                  pin
                  @change="${this._selectedValueChanged}"
                  ignore-bar-touch
                  id="input"
                ></ha-slider>
                <span class="state">
                  ${Number(stateObj.state)}
                  ${stateObj.attributes.unit_of_measurement}
                </span>
              </div>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <paper-input
                no-label-float
                auto-validate
                .disabled=${_data_entity__WEBPACK_IMPORTED_MODULE_4__["UNAVAILABLE_STATES"].includes(stateObj.state)}
                .pattern="[0-9]+([\\.][0-9]+)?"
                .step="${Number(stateObj.attributes.step)}"
                .min="${Number(stateObj.attributes.min)}"
                .max="${Number(stateObj.attributes.max)}"
                .value="${Number(stateObj.state)}"
                type="number"
                @change="${this._selectedValueChanged}"
                id="input"
              ></paper-input>
            `}
      </hui-generic-entity-row>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      .flex {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-grow: 2;
      }
      .state {
        min-width: 45px;
        text-align: end;
      }
      paper-input {
        text-align: end;
      }
      ha-slider {
        width: 100%;
        max-width: 200px;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_initialLoad",
      value: async function _initialLoad() {
        this._loaded = true;
        await this.updateComplete;
        const element = this.shadowRoot.querySelector(".state");

        if (!element || !this.parentElement) {
          return;
        }

        element.hidden = this.parentElement.clientWidth <= 350;
      }
    }, {
      kind: "get",
      key: "_inputElement",
      value: function _inputElement() {
        // linter recommended the following syntax
        return this.shadowRoot.getElementById("input");
      }
    }, {
      kind: "method",
      key: "_selectedValueChanged",
      value: function _selectedValueChanged() {
        const element = this._inputElement;
        const stateObj = this.hass.states[this._config.entity];

        if (element.value !== stateObj.state) {
          Object(_data_input_text__WEBPACK_IMPORTED_MODULE_5__["setValue"])(this.hass, stateObj.entity_id, element.value);
        }
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbnB1dF90ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZW50aXR5LXJvd3MvaHVpLWlucHV0LW51bWJlci1lbnRpdHktcm93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFRleHQge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGluaXRpYWw/OiBzdHJpbmc7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xuICBwYXR0ZXJuPzogc3RyaW5nO1xuICBtb2RlPzogXCJ0ZXh0XCIgfCBcInBhc3N3b3JkXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRUZXh0TXV0YWJsZVBhcmFtcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBpbml0aWFsOiBzdHJpbmc7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgcGF0dGVybjogc3RyaW5nO1xuICBtb2RlOiBcInRleHRcIiB8IFwicGFzc3dvcmRcIjtcbn1cblxuZXhwb3J0IGNvbnN0IHNldFZhbHVlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGVudGl0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxTZXJ2aWNlKGVudGl0eS5zcGxpdChcIi5cIiwgMSlbMF0sIFwic2V0X3ZhbHVlXCIsIHtcbiAgICB2YWx1ZSxcbiAgICBlbnRpdHlfaWQ6IGVudGl0eSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaElucHV0VGV4dCA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxJbnB1dFRleHRbXT4oeyB0eXBlOiBcImlucHV0X3RleHQvbGlzdFwiIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSW5wdXRUZXh0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IElucHV0VGV4dE11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8SW5wdXRUZXh0Pih7XG4gICAgdHlwZTogXCJpbnB1dF90ZXh0L2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVJbnB1dFRleHQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8SW5wdXRUZXh0TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8SW5wdXRUZXh0Pih7XG4gICAgdHlwZTogXCJpbnB1dF90ZXh0L3VwZGF0ZVwiLFxuICAgIGlucHV0X3RleHRfaWQ6IGlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlSW5wdXRUZXh0ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImlucHV0X3RleHQvZGVsZXRlXCIsXG4gICAgaW5wdXRfdGV4dF9pZDogaWQsXG4gIH0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVSVExEaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2xpZGVyXCI7XG5pbXBvcnQgeyBVTkFWQUlMQUJMRV9TVEFURVMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlcIjtcbmltcG9ydCB7IHNldFZhbHVlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvaW5wdXRfdGV4dFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtY2hhbmdlZFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktZ2VuZXJpYy1lbnRpdHktcm93XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS13YXJuaW5nXCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcsIExvdmVsYWNlUm93IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktaW5wdXQtbnVtYmVyLWVudGl0eS1yb3dcIilcbmNsYXNzIEh1aUlucHV0TnVtYmVyRW50aXR5Um93IGV4dGVuZHMgTGl0RWxlbWVudCBpbXBsZW1lbnRzIExvdmVsYWNlUm93IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IEVudGl0eUNvbmZpZztcblxuICBwcml2YXRlIF9sb2FkZWQ/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3VwZGF0ZWQ/OiBib29sZWFuO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBFbnRpdHlDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlndXJhdGlvbiBlcnJvclwiKTtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3VwZGF0ZWQgJiYgIXRoaXMuX2xvYWRlZCkge1xuICAgICAgdGhpcy5faW5pdGlhbExvYWQoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuX3VwZGF0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkICYmICF0aGlzLl9sb2FkZWQpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxMb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eV07XG5cbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGh1aS13YXJuaW5nXG4gICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS53YXJuaW5nLmVudGl0eV9ub3RfZm91bmRcIixcbiAgICAgICAgICAgIFwiZW50aXR5XCIsXG4gICAgICAgICAgICB0aGlzLl9jb25maWcuZW50aXR5XG4gICAgICAgICAgKX08L2h1aS13YXJuaW5nXG4gICAgICAgID5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aHVpLWdlbmVyaWMtZW50aXR5LXJvdyAuaGFzcz0ke3RoaXMuaGFzc30gLmNvbmZpZz0ke3RoaXMuX2NvbmZpZ30+XG4gICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5tb2RlID09PSBcInNsaWRlclwiXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxoYS1zbGlkZXJcbiAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0ke1VOQVZBSUxBQkxFX1NUQVRFUy5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSl9XG4gICAgICAgICAgICAgICAgICAuZGlyPVwiJHtjb21wdXRlUlRMRGlyZWN0aW9uKHRoaXMuaGFzcyEpfVwiXG4gICAgICAgICAgICAgICAgICAuc3RlcD1cIiR7TnVtYmVyKHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RlcCl9XCJcbiAgICAgICAgICAgICAgICAgIC5taW49XCIke051bWJlcihzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbil9XCJcbiAgICAgICAgICAgICAgICAgIC5tYXg9XCIke051bWJlcihzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heCl9XCJcbiAgICAgICAgICAgICAgICAgIC52YWx1ZT1cIiR7TnVtYmVyKHN0YXRlT2JqLnN0YXRlKX1cIlxuICAgICAgICAgICAgICAgICAgcGluXG4gICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9zZWxlY3RlZFZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgICAgICAgaWdub3JlLWJhci10b3VjaFxuICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgPjwvaGEtc2xpZGVyPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICR7TnVtYmVyKHN0YXRlT2JqLnN0YXRlKX1cbiAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBuby1sYWJlbC1mbG9hdFxuICAgICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGVcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHtVTkFWQUlMQUJMRV9TVEFURVMuaW5jbHVkZXMoc3RhdGVPYmouc3RhdGUpfVxuICAgICAgICAgICAgICAgIC5wYXR0ZXJuPVwiWzAtOV0rKFtcXFxcLl1bMC05XSspP1wiXG4gICAgICAgICAgICAgICAgLnN0ZXA9XCIke051bWJlcihzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0ZXApfVwiXG4gICAgICAgICAgICAgICAgLm1pbj1cIiR7TnVtYmVyKHN0YXRlT2JqLmF0dHJpYnV0ZXMubWluKX1cIlxuICAgICAgICAgICAgICAgIC5tYXg9XCIke051bWJlcihzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heCl9XCJcbiAgICAgICAgICAgICAgICAudmFsdWU9XCIke051bWJlcihzdGF0ZU9iai5zdGF0ZSl9XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9zZWxlY3RlZFZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgIGB9XG4gICAgICA8L2h1aS1nZW5lcmljLWVudGl0eS1yb3c+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5mbGV4IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgfVxuICAgICAgLnN0YXRlIHtcbiAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICB9XG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIH1cbiAgICAgIGhhLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9pbml0aWFsTG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcIi5zdGF0ZVwiKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGlmICghZWxlbWVudCB8fCAhdGhpcy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5oaWRkZW4gPSB0aGlzLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gMzUwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2lucHV0RWxlbWVudCgpOiB7IHZhbHVlOiBzdHJpbmcgfSB7XG4gICAgLy8gbGludGVyIHJlY29tbWVuZGVkIHRoZSBmb2xsb3dpbmcgc3ludGF4XG4gICAgcmV0dXJuICh0aGlzLnNoYWRvd1Jvb3QhLmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIikgYXMgdW5rbm93bikgYXMge1xuICAgICAgdmFsdWU6IHN0cmluZztcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRWYWx1ZUNoYW5nZWQoKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2lucHV0RWxlbWVudDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcyEuc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XTtcblxuICAgIGlmIChlbGVtZW50LnZhbHVlICE9PSBzdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgc2V0VmFsdWUodGhpcy5oYXNzISwgc3RhdGVPYmouZW50aXR5X2lkLCBlbGVtZW50LnZhbHVlISk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktaW5wdXQtbnVtYmVyLWVudGl0eS1yb3dcIjogSHVpSW5wdXROdW1iZXJFbnRpdHlSb3c7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQXVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7O0FBakJBOzs7O0FBeUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFyQ0E7QUF3Q0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQkE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUEvSUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-weather-forecast-card-editor"],{

/***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
/*! exports provided: isEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityId", function() { return isEntityId; });
function isEntityId(value) {
  if (typeof value !== "string") {
    return "entity id should be a string";
  }

  if (!value.includes(".")) {
    return "entity id should be in the format 'domain.entity'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/lovelace/common/structs/is-icon.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
/*! exports provided: isIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIcon", function() { return isIcon; });
function isIcon(value) {
  if (typeof value !== "string") {
    return "icon should be a string";
  }

  if (!value.includes(":")) {
    return "icon should be in the format 'mdi:icon'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/lovelace/common/structs/struct.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
/*! exports provided: struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts");
/* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts");



const struct = Object(superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"])({
  types: {
    "entity-id": _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
    icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"]
  }
});

/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/config-elements-style.ts ***!
  \*****************************************************************************/
/*! exports provided: configElementStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configElementStyle", function() { return configElementStyle; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

const configElementStyle = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    ha-switch {
      padding: 16px 0;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`;

/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/hui-weather-forecast-card-editor.ts":
/*!****************************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-weather-forecast-card-editor.ts ***!
  \****************************************************************************************/
/*! exports provided: HuiWeatherForecastCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiWeatherForecastCardEditor", function() { return HuiWeatherForecastCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");
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








const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_4__["struct"])({
  type: "string",
  entity: "string?",
  name: "string?",
  theme: "string?",
  show_forecast: "boolean?"
});
const includeDomains = ["weather"];
let HuiWeatherForecastCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-weather-forecast-card-editor")], function (_initialize, _LitElement) {
  class HuiWeatherForecastCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiWeatherForecastCardEditor,
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
        config = cardConfigStruct(config);
        this._config = config;
      }
    }, {
      kind: "get",
      key: "_entity",
      value: function _entity() {
        return this._config.entity || "";
      }
    }, {
      kind: "get",
      key: "_name",
      value: function _name() {
        return this._config.name || "";
      }
    }, {
      kind: "get",
      key: "_theme",
      value: function _theme() {
        return this._config.theme || "";
      }
    }, {
      kind: "get",
      key: "_show_forecast",
      value: function _show_forecast() {
        return this._config.show_forecast || true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_6__["configElementStyle"]}
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .hass=${this.hass}
          .value=${this._entity}
          .configValue=${"entity"}
          .includeDomains=${includeDomains}
          @change=${this._valueChanged}
          allow-custom-entity
        ></ha-entity-picker>
        <div class="side-by-side">
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value=${this._name}
            .configValue=${"name"}
            @value-changed=${this._valueChanged}
          ></paper-input>
          <hui-theme-select-editor
            .hass=${this.hass}
            .value=${this._theme}
            .configValue=${"theme"}
            @value-changed=${this._valueChanged}
          ></hui-theme-select-editor>
        </div>
        <ha-switch
          .checked=${this._config.show_forecast !== false}
          .configValue=${"show_forecast"}
          @change=${this._valueChanged}
          >Show forecast</ha-switch
        >
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this._config || !this.hass) {
          return;
        }

        const target = ev.target;

        if (this[`_${target.configValue}`] === target.value) {
          return;
        }

        if (target.configValue) {
          if (target.value === "") {
            delete this._config[target.configValue];
          } else {
            this._config = Object.assign({}, this._config, {
              [target.configValue]: target.checked !== undefined ? target.checked : target.value
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXdlYXRoZXItZm9yZWNhc3QtY2FyZC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2NvbmZpZy1lbGVtZW50cy1zdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLXdlYXRoZXItZm9yZWNhc3QtY2FyZC1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRW50aXR5SWQodmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCIuXCIpKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdkb21haW4uZW50aXR5J1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzSWNvbih2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnbWRpOmljb24nXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBzdXBlcnN0cnVjdCB9IGZyb20gXCJzdXBlcnN0cnVjdFwiO1xuaW1wb3J0IHsgaXNFbnRpdHlJZCB9IGZyb20gXCIuL2lzLWVudGl0eS1pZFwiO1xuaW1wb3J0IHsgaXNJY29uIH0gZnJvbSBcIi4vaXMtaWNvblwiO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0ID0gc3VwZXJzdHJ1Y3Qoe1xuICB0eXBlczoge1xuICAgIFwiZW50aXR5LWlkXCI6IGlzRW50aXR5SWQsXG4gICAgaWNvbjogaXNJY29uLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWdFbGVtZW50U3R5bGUgPSBodG1sYFxuICA8c3R5bGU+XG4gICAgaGEtc3dpdGNoIHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICB9XG4gICAgLnNpZGUtYnktc2lkZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuc2lkZS1ieS1zaWRlID4gKiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgIH1cbiAgICAuc3VmZml4IHtcbiAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuYDtcbiIsImltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgV2VhdGhlckZvcmVjYXN0Q2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuaW1wb3J0IHsgc3RydWN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktdGhlbWUtc2VsZWN0LWVkaXRvclwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFZGl0b3JUYXJnZXQsIEVudGl0aWVzRWRpdG9yRXZlbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuL2NvbmZpZy1lbGVtZW50cy1zdHlsZVwiO1xuXG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgZW50aXR5OiBcInN0cmluZz9cIixcbiAgbmFtZTogXCJzdHJpbmc/XCIsXG4gIHRoZW1lOiBcInN0cmluZz9cIixcbiAgc2hvd19mb3JlY2FzdDogXCJib29sZWFuP1wiLFxufSk7XG5cbmNvbnN0IGluY2x1ZGVEb21haW5zID0gW1wid2VhdGhlclwiXTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktd2VhdGhlci1mb3JlY2FzdC1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aVdlYXRoZXJGb3JlY2FzdENhcmRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50XG4gIGltcGxlbWVudHMgTG92ZWxhY2VDYXJkRWRpdG9yIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IFdlYXRoZXJGb3JlY2FzdENhcmRDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IFdlYXRoZXJGb3JlY2FzdENhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgZ2V0IF9lbnRpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5lbnRpdHkgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLm5hbWUgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50aGVtZSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9zaG93X2ZvcmVjYXN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnNob3dfZm9yZWNhc3QgfHwgdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmVudGl0eVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcucmVxdWlyZWRcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fZW50aXR5fVxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wiZW50aXR5XCJ9XG4gICAgICAgICAgLmluY2x1ZGVEb21haW5zPSR7aW5jbHVkZURvbWFpbnN9XG4gICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMubmFtZVwiXG4gICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lfVxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJuYW1lXCJ9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8aHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcbiAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdGhlbWV9XG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcInRoZW1lXCJ9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9odWktdGhlbWUtc2VsZWN0LWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2NvbmZpZyEuc2hvd19mb3JlY2FzdCAhPT0gZmFsc2V9XG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJzaG93X2ZvcmVjYXN0XCJ9XG4gICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICA+U2hvdyBmb3JlY2FzdDwvaGEtc3dpdGNoXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEVudGl0aWVzRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGlmICh0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWdbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIFt0YXJnZXQuY29uZmlnVmFsdWUhXTpcbiAgICAgICAgICAgIHRhcmdldC5jaGVja2VkICE9PSB1bmRlZmluZWQgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IHRoaXMuX2NvbmZpZyB9KTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXdlYXRoZXItZm9yZWNhc3QtY2FyZC1lZGl0b3JcIjogSHVpV2VhdGhlckZvcmVjYXN0Q2FyZEVkaXRvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFPQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBR0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFvQkE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQXJDQTtBQTBDQTtBQTFFQTtBQUFBO0FBQUE7QUFBQTtBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFoR0E7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
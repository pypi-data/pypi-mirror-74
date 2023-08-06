(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[57],{

/***/ "./src/components/ha-climate-state.js":
/*!********************************************!*\
  !*** ./src/components/ha-climate-state.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/climate */ "./src/data/climate.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");

/* eslint-plugin-disable lit */




/*
 * @appliesMixin LocalizeMixin
 */

class HaClimateState extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }

        .unit {
          display: inline-block;
          direction: ltr;
        }
      </style>

      <div class="target">
        <template is="dom-if" if="[[_hasKnownState(stateObj.state)]]">
          <span class="state-label">
            [[_localizeState(localize, stateObj)]]
            <template is="dom-if" if="[[_renderPreset(stateObj.attributes)]]">
              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]
            </template>
          </span>
        </template>
        <div class="unit">[[computeTarget(hass, stateObj)]]</div>
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.climate.currently')]]:
          <div class="unit">[[currentStatus]]</div>
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      currentStatus: {
        type: String,
        computed: "computeCurrentStatus(hass, stateObj)"
      }
    };
  }

  computeCurrentStatus(hass, stateObj) {
    if (!hass || !stateObj) return null;

    if (stateObj.attributes.current_temperature != null) {
      return `${stateObj.attributes.current_temperature} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.current_humidity != null) {
      return `${stateObj.attributes.current_humidity} %`;
    }

    return null;
  }

  computeTarget(hass, stateObj) {
    if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

    if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
      return `${stateObj.attributes.target_temp_low}-${stateObj.attributes.target_temp_high} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.temperature != null) {
      return `${stateObj.attributes.temperature} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.target_humidity_low != null && stateObj.attributes.target_humidity_high != null) {
      return `${stateObj.attributes.target_humidity_low}-${stateObj.attributes.target_humidity_high}%`;
    }

    if (stateObj.attributes.humidity != null) {
      return `${stateObj.attributes.humidity} %`;
    }

    return "";
  }

  _hasKnownState(state) {
    return state !== "unknown";
  }

  _localizeState(localize, stateObj) {
    const stateString = localize(`component.climate.state._.${stateObj.state}`);
    return stateObj.attributes.hvac_action ? `${localize(`state_attributes.climate.hvac_action.${stateObj.attributes.hvac_action}`)} (${stateString})` : stateString;
  }

  _localizePreset(localize, preset) {
    return localize(`state_attributes.climate.preset_mode.${preset}`) || preset;
  }

  _renderPreset(attributes) {
    return attributes.preset_mode && attributes.preset_mode !== _data_climate__WEBPACK_IMPORTED_MODULE_2__["CLIMATE_PRESET_NONE"];
  }

}

customElements.define("ha-climate-state", HaClimateState);

/***/ }),

/***/ "./src/data/climate.ts":
/*!*****************************!*\
  !*** ./src/data/climate.ts ***!
  \*****************************/
/*! exports provided: CLIMATE_PRESET_NONE, CLIMATE_SUPPORT_TARGET_TEMPERATURE, CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE, CLIMATE_SUPPORT_TARGET_HUMIDITY, CLIMATE_SUPPORT_FAN_MODE, CLIMATE_SUPPORT_PRESET_MODE, CLIMATE_SUPPORT_SWING_MODE, CLIMATE_SUPPORT_AUX_HEAT, compareClimateHvacModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_PRESET_NONE", function() { return CLIMATE_PRESET_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_HUMIDITY", function() { return CLIMATE_SUPPORT_TARGET_HUMIDITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_FAN_MODE", function() { return CLIMATE_SUPPORT_FAN_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_PRESET_MODE", function() { return CLIMATE_SUPPORT_PRESET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_SWING_MODE", function() { return CLIMATE_SUPPORT_SWING_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_AUX_HEAT", function() { return CLIMATE_SUPPORT_AUX_HEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareClimateHvacModes", function() { return compareClimateHvacModes; });
const CLIMATE_PRESET_NONE = "none";
const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
const CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
const CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
const CLIMATE_SUPPORT_FAN_MODE = 8;
const CLIMATE_SUPPORT_PRESET_MODE = 16;
const CLIMATE_SUPPORT_SWING_MODE = 32;
const CLIMATE_SUPPORT_AUX_HEAT = 64;
const hvacModeOrdering = {
  auto: 1,
  heat_cool: 2,
  heat: 3,
  cool: 4,
  dry: 5,
  fan_only: 6,
  off: 7
};
const compareClimateHvacModes = (mode1, mode2) => hvacModeOrdering[mode1] - hvacModeOrdering[mode2];

/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-climate-entity-row.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-climate-entity-row.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_climate_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-climate-state */ "./src/components/ha-climate-state.js");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
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







let HuiClimateEntityRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-climate-entity-row")], function (_initialize, _LitElement) {
  class HuiClimateEntityRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiClimateEntityRow,
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
        if (!config || !config.entity) {
          throw new Error("Invalid Configuration: 'entity' required");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_2__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this._config) {
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
        <ha-climate-state
          .hass=${this.hass}
          .stateObj=${stateObj}
        ></ha-climate-state>
      </hui-generic-entity-row>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-climate-state {
        text-align: right;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jbGltYXRlLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NsaW1hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lbnRpdHktcm93cy9odWktY2xpbWF0ZS1lbnRpdHktcm93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBDTElNQVRFX1BSRVNFVF9OT05FIH0gZnJvbSBcIi4uL2RhdGEvY2xpbWF0ZVwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhQ2xpbWF0ZVN0YXRlIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAudGFyZ2V0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXJyZW50IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXRlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51bml0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXJnZXRcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19oYXNLbm93blN0YXRlKHN0YXRlT2JqLnN0YXRlKV1dXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZS1sYWJlbFwiPlxuICAgICAgICAgICAgW1tfbG9jYWxpemVTdGF0ZShsb2NhbGl6ZSwgc3RhdGVPYmopXV1cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfcmVuZGVyUHJlc2V0KHN0YXRlT2JqLmF0dHJpYnV0ZXMpXV1cIj5cbiAgICAgICAgICAgICAgLSBbW19sb2NhbGl6ZVByZXNldChsb2NhbGl6ZSwgc3RhdGVPYmouYXR0cmlidXRlcy5wcmVzZXRfbW9kZSldXVxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0XCI+W1tjb21wdXRlVGFyZ2V0KGhhc3MsIHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2N1cnJlbnRTdGF0dXNdXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQuY2xpbWF0ZS5jdXJyZW50bHknKV1dOlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0XCI+W1tjdXJyZW50U3RhdHVzXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjdXJyZW50U3RhdHVzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUN1cnJlbnRTdGF0dXMoaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ3VycmVudFN0YXR1cyhoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmICghaGFzcyB8fCAhc3RhdGVPYmopIHJldHVybiBudWxsO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfdGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZX0gJHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1gO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X2h1bWlkaXR5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfaHVtaWRpdHl9ICVgO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXB1dGVUYXJnZXQoaGFzcywgc3RhdGVPYmopIHtcbiAgICBpZiAoIWhhc3MgfHwgIXN0YXRlT2JqKSByZXR1cm4gbnVsbDtcbiAgICAvLyBXZSdyZSB1c2luZyBcIiE9IG51bGxcIiBvbiBwdXJwb3NlIHNvIHRoYXQgd2UgbWF0Y2ggYm90aCBudWxsIGFuZCB1bmRlZmluZWQuXG4gICAgaWYgKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3cgIT0gbnVsbCAmJlxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoICE9IG51bGxcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd30tJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2h9ICR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9YDtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmV9ICR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9YDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfbG93ICE9IG51bGwgJiZcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2hpZ2ggIT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2xvd30tJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9oaWdofSVgO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eX0gJWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBfaGFzS25vd25TdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZSAhPT0gXCJ1bmtub3duXCI7XG4gIH1cblxuICBfbG9jYWxpemVTdGF0ZShsb2NhbGl6ZSwgc3RhdGVPYmopIHtcbiAgICBjb25zdCBzdGF0ZVN0cmluZyA9IGxvY2FsaXplKGBjb21wb25lbnQuY2xpbWF0ZS5zdGF0ZS5fLiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb25cbiAgICAgID8gYCR7bG9jYWxpemUoXG4gICAgICAgICAgYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5odmFjX2FjdGlvbi4ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb259YFxuICAgICAgICApfSAoJHtzdGF0ZVN0cmluZ30pYFxuICAgICAgOiBzdGF0ZVN0cmluZztcbiAgfVxuXG4gIF9sb2NhbGl6ZVByZXNldChsb2NhbGl6ZSwgcHJlc2V0KSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUucHJlc2V0X21vZGUuJHtwcmVzZXR9YCkgfHwgcHJlc2V0O1xuICB9XG5cbiAgX3JlbmRlclByZXNldChhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGF0dHJpYnV0ZXMucHJlc2V0X21vZGUgJiYgYXR0cmlidXRlcy5wcmVzZXRfbW9kZSAhPT0gQ0xJTUFURV9QUkVTRVRfTk9ORVxuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNsaW1hdGUtc3RhdGVcIiwgSGFDbGltYXRlU3RhdGUpO1xuIiwiaW1wb3J0IHtcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG4gIEhhc3NFbnRpdHlCYXNlLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCB0eXBlIEh2YWNNb2RlID1cbiAgfCBcIm9mZlwiXG4gIHwgXCJoZWF0XCJcbiAgfCBcImNvb2xcIlxuICB8IFwiaGVhdF9jb29sXCJcbiAgfCBcImF1dG9cIlxuICB8IFwiZHJ5XCJcbiAgfCBcImZhbl9vbmx5XCI7XG5cbmV4cG9ydCBjb25zdCBDTElNQVRFX1BSRVNFVF9OT05FID0gXCJub25lXCI7XG5cbmV4cG9ydCB0eXBlIEh2YWNBY3Rpb24gPSBcIm9mZlwiIHwgXCJoZWF0aW5nXCIgfCBcImNvb2xpbmdcIiB8IFwiZHJ5aW5nXCIgfCBcImlkbGVcIjtcblxuZXhwb3J0IHR5cGUgQ2xpbWF0ZUVudGl0eSA9IEhhc3NFbnRpdHlCYXNlICYge1xuICBhdHRyaWJ1dGVzOiBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSAmIHtcbiAgICBodmFjX21vZGU6IEh2YWNNb2RlO1xuICAgIGh2YWNfbW9kZXM6IEh2YWNNb2RlW107XG4gICAgaHZhY19hY3Rpb24/OiBIdmFjQWN0aW9uO1xuICAgIGN1cnJlbnRfdGVtcGVyYXR1cmU6IG51bWJlcjtcbiAgICBtaW5fdGVtcDogbnVtYmVyO1xuICAgIG1heF90ZW1wOiBudW1iZXI7XG4gICAgdGVtcGVyYXR1cmU6IG51bWJlcjtcbiAgICB0YXJnZXRfdGVtcF9zdGVwPzogbnVtYmVyO1xuICAgIHRhcmdldF90ZW1wX2hpZ2g/OiBudW1iZXI7XG4gICAgdGFyZ2V0X3RlbXBfbG93PzogbnVtYmVyO1xuICAgIGh1bWlkaXR5PzogbnVtYmVyO1xuICAgIGN1cnJlbnRfaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgdGFyZ2V0X2h1bWlkaXR5X2xvdz86IG51bWJlcjtcbiAgICB0YXJnZXRfaHVtaWRpdHlfaGlnaD86IG51bWJlcjtcbiAgICBtaW5faHVtaWRpdHk/OiBudW1iZXI7XG4gICAgbWF4X2h1bWlkaXR5PzogbnVtYmVyO1xuICAgIGZhbl9tb2RlPzogc3RyaW5nO1xuICAgIGZhbl9tb2Rlcz86IHN0cmluZ1tdO1xuICAgIHByZXNldF9tb2RlPzogc3RyaW5nO1xuICAgIHByZXNldF9tb2Rlcz86IHN0cmluZ1tdO1xuICAgIHN3aW5nX21vZGU/OiBzdHJpbmc7XG4gICAgc3dpbmdfbW9kZXM/OiBzdHJpbmdbXTtcbiAgICBhdXhfaGVhdD86IFwib25cIiB8IFwib2ZmXCI7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRSA9IDE7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRV9SQU5HRSA9IDI7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9IVU1JRElUWSA9IDQ7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX0ZBTl9NT0RFID0gODtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfUFJFU0VUX01PREUgPSAxNjtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfU1dJTkdfTU9ERSA9IDMyO1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9BVVhfSEVBVCA9IDY0O1xuXG5jb25zdCBodmFjTW9kZU9yZGVyaW5nOiB7IFtrZXkgaW4gSHZhY01vZGVdOiBudW1iZXIgfSA9IHtcbiAgYXV0bzogMSxcbiAgaGVhdF9jb29sOiAyLFxuICBoZWF0OiAzLFxuICBjb29sOiA0LFxuICBkcnk6IDUsXG4gIGZhbl9vbmx5OiA2LFxuICBvZmY6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgY29tcGFyZUNsaW1hdGVIdmFjTW9kZXMgPSAobW9kZTE6IEh2YWNNb2RlLCBtb2RlMjogSHZhY01vZGUpID0+XG4gIGh2YWNNb2RlT3JkZXJpbmdbbW9kZTFdIC0gaHZhY01vZGVPcmRlcmluZ1ttb2RlMl07XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNsaW1hdGUtc3RhdGVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCB9IGZyb20gXCIuLi9jb21tb24vaGFzLWNoYW5nZWRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLWdlbmVyaWMtZW50aXR5LXJvd1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktd2FybmluZ1wiO1xuaW1wb3J0IHsgRW50aXR5Q29uZmlnLCBMb3ZlbGFjZVJvdyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWNsaW1hdGUtZW50aXR5LXJvd1wiKVxuY2xhc3MgSHVpQ2xpbWF0ZUVudGl0eVJvdyBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZVJvdyB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBFbnRpdHlDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEVudGl0eUNvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuZW50aXR5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246ICdlbnRpdHknIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNDb25maWdPckVudGl0eUNoYW5nZWQodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZy5lbnRpdHldO1xuXG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxodWktd2FybmluZ1xuICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2Uud2FybmluZy5lbnRpdHlfbm90X2ZvdW5kXCIsXG4gICAgICAgICAgICBcImVudGl0eVwiLFxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmVudGl0eVxuICAgICAgICAgICl9PC9odWktd2FybmluZ1xuICAgICAgICA+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGh1aS1nZW5lcmljLWVudGl0eS1yb3cgLmhhc3M9JHt0aGlzLmhhc3N9IC5jb25maWc9JHt0aGlzLl9jb25maWd9PlxuICAgICAgICA8aGEtY2xpbWF0ZS1zdGF0ZVxuICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICA+PC9oYS1jbGltYXRlLXN0YXRlPlxuICAgICAgPC9odWktZ2VuZXJpYy1lbnRpdHktcm93PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1jbGltYXRlLXN0YXRlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWNsaW1hdGUtZW50aXR5LXJvd1wiOiBIdWlDbGltYXRlRW50aXR5Um93O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUF4SEE7QUFDQTtBQXdIQTs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUpBO0FBUUE7Ozs7O0FBRUE7QUFDQTs7OztBQUFBO0FBS0E7OztBQXBEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[66],{

/***/ "./src/data/weather.ts":
/*!*****************************!*\
  !*** ./src/data/weather.ts ***!
  \*****************************/
/*! exports provided: weatherImages, weatherIcons, cardinalDirections, getWindBearing, getWeatherUnit, getSecondaryWeatherAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherImages", function() { return weatherImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherIcons", function() { return weatherIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardinalDirections", function() { return cardinalDirections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindBearing", function() { return getWindBearing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherUnit", function() { return getWeatherUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecondaryWeatherAttribute", function() { return getSecondaryWeatherAttribute; });
const weatherImages = {
  "clear-night": "/static/images/weather/night.png",
  cloudy: "/static/images/weather/cloudy.png",
  fog: "/static/images/weather/cloudy.png",
  lightning: "/static/images/weather/lightning.png",
  "lightning-rainy": "/static/images/weather/lightning-rainy.png",
  partlycloudy: "/static/images/weather/partly-cloudy.png",
  pouring: "/static/images/weather/pouring.png",
  rainy: "/static/images/weather/rainy.png",
  hail: "/static/images/weather/rainy.png",
  snowy: "/static/images/weather/snowy.png",
  "snowy-rainy": "/static/images/weather/snowy.png",
  sunny: "/static/images/weather/sunny.png",
  windy: "/static/images/weather/windy.png",
  "windy-variant": "/static/images/weather/windy.png"
};
const weatherIcons = {
  exceptional: "hass:alert-circle-outline"
};
const cardinalDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

const getWindBearingText = degree => {
  const degreenum = parseInt(degree, 10);

  if (isFinite(degreenum)) {
    // eslint-disable-next-line no-bitwise
    return cardinalDirections[((degreenum + 11.25) / 22.5 | 0) % 16];
  }

  return degree;
};

const getWindBearing = bearing => {
  if (bearing != null) {
    return getWindBearingText(bearing);
  }

  return "";
};
const getWeatherUnit = (hass, measure) => {
  const lengthUnit = hass.config.unit_system.length || "";

  switch (measure) {
    case "pressure":
      return lengthUnit === "km" ? "hPa" : "inHg";

    case "wind_speed":
      return `${lengthUnit}/h`;

    case "length":
      return lengthUnit;

    case "precipitation":
      return lengthUnit === "km" ? "mm" : "in";

    case "humidity":
    case "precipitation_probability":
      return "%";

    default:
      return hass.config.unit_system[measure] || "";
  }
};
const getSecondaryWeatherAttribute = (hass, stateObj) => {
  var _stateObj$attributes$;

  const extrema = getWeatherExtrema(hass, stateObj);

  if (extrema) {
    return extrema;
  }

  let value;
  let attribute;

  if (((_stateObj$attributes$ = stateObj.attributes.forecast) === null || _stateObj$attributes$ === void 0 ? void 0 : _stateObj$attributes$.length) && stateObj.attributes.forecast[0].precipitation !== undefined && stateObj.attributes.forecast[0].precipitation !== null) {
    value = stateObj.attributes.forecast[0].precipitation;
    attribute = "precipitation";
  } else if ("humidity" in stateObj.attributes) {
    value = stateObj.attributes.humidity;
    attribute = "humidity";
  } else {
    return undefined;
  }

  return `
    ${hass.localize(`ui.card.weather.attributes.${attribute}`)} ${value} ${getWeatherUnit(hass, attribute)}
  `;
};

const getWeatherExtrema = (hass, stateObj) => {
  var _stateObj$attributes$2;

  if (!((_stateObj$attributes$2 = stateObj.attributes.forecast) === null || _stateObj$attributes$2 === void 0 ? void 0 : _stateObj$attributes$2.length)) {
    return undefined;
  }

  let tempLow;
  let tempHigh;
  const today = new Date().getDate();

  for (const forecast of stateObj.attributes.forecast) {
    if (new Date(forecast.datetime).getDate() !== today) {
      break;
    }

    if (!tempHigh || forecast.temperature > tempHigh) {
      tempHigh = forecast.temperature;
    }

    if (!tempLow || forecast.templow && forecast.templow < tempLow) {
      tempLow = forecast.templow;
    }

    if (!forecast.templow && (!tempLow || forecast.temperature < tempLow)) {
      tempLow = forecast.temperature;
    }
  }

  if (!tempLow && !tempHigh) {
    return undefined;
  }

  const unit = getWeatherUnit(hass, "temperature");
  return `
    ${tempHigh ? `
            ${tempHigh} ${unit}
          ` : ""}
    ${tempLow && tempHigh ? " / " : ""}
    ${tempLow ? `
          ${tempLow} ${unit}
        ` : ""}
  `;
};

/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-weather-entity-row.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-weather-entity-row.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _data_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/weather */ "./src/data/weather.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
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










let HuiWeatherEntityRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-weather-entity-row")], function (_initialize, _LitElement) {
  class HuiWeatherEntityRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiWeatherEntityRow,
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
        if (!(config === null || config === void 0 ? void 0 : config.entity)) {
          throw new Error("Invalid Configuration: 'entity' required");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
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

        const weatherRowConfig = Object.assign({}, this._config, {
          icon: _data_weather__WEBPACK_IMPORTED_MODULE_4__["weatherIcons"][stateObj.state],
          image: _data_weather__WEBPACK_IMPORTED_MODULE_4__["weatherImages"][stateObj.state]
        });
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hui-generic-entity-row .hass=${this.hass} .config=${weatherRowConfig}>
        <div class="attributes">
          <div>
            ${_data_entity__WEBPACK_IMPORTED_MODULE_3__["UNAVAILABLE_STATES"].includes(stateObj.state) ? Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_1__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language) : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  ${stateObj.attributes.temperature}
                  ${Object(_data_weather__WEBPACK_IMPORTED_MODULE_4__["getWeatherUnit"])(this.hass, "temperature")}
                `}
          </div>
          <div class="secondary">
            ${Object(_data_weather__WEBPACK_IMPORTED_MODULE_4__["getSecondaryWeatherAttribute"])(this.hass, stateObj)}
          </div>
        </div>
      </hui-generic-entity-row>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .attributes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
      }

      .secondary {
        color: var(--secondary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjYuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93ZWF0aGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZW50aXR5LXJvd3MvaHVpLXdlYXRoZXItZW50aXR5LXJvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQXNzaXN0YW50LCBXZWF0aGVyRW50aXR5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVySW1hZ2VzID0ge1xuICBcImNsZWFyLW5pZ2h0XCI6IFwiL3N0YXRpYy9pbWFnZXMvd2VhdGhlci9uaWdodC5wbmdcIixcbiAgY2xvdWR5OiBcIi9zdGF0aWMvaW1hZ2VzL3dlYXRoZXIvY2xvdWR5LnBuZ1wiLFxuICBmb2c6IFwiL3N0YXRpYy9pbWFnZXMvd2VhdGhlci9jbG91ZHkucG5nXCIsXG4gIGxpZ2h0bmluZzogXCIvc3RhdGljL2ltYWdlcy93ZWF0aGVyL2xpZ2h0bmluZy5wbmdcIixcbiAgXCJsaWdodG5pbmctcmFpbnlcIjogXCIvc3RhdGljL2ltYWdlcy93ZWF0aGVyL2xpZ2h0bmluZy1yYWlueS5wbmdcIixcbiAgcGFydGx5Y2xvdWR5OiBcIi9zdGF0aWMvaW1hZ2VzL3dlYXRoZXIvcGFydGx5LWNsb3VkeS5wbmdcIixcbiAgcG91cmluZzogXCIvc3RhdGljL2ltYWdlcy93ZWF0aGVyL3BvdXJpbmcucG5nXCIsXG4gIHJhaW55OiBcIi9zdGF0aWMvaW1hZ2VzL3dlYXRoZXIvcmFpbnkucG5nXCIsXG4gIGhhaWw6IFwiL3N0YXRpYy9pbWFnZXMvd2VhdGhlci9yYWlueS5wbmdcIixcbiAgc25vd3k6IFwiL3N0YXRpYy9pbWFnZXMvd2VhdGhlci9zbm93eS5wbmdcIixcbiAgXCJzbm93eS1yYWlueVwiOiBcIi9zdGF0aWMvaW1hZ2VzL3dlYXRoZXIvc25vd3kucG5nXCIsXG4gIHN1bm55OiBcIi9zdGF0aWMvaW1hZ2VzL3dlYXRoZXIvc3VubnkucG5nXCIsXG4gIHdpbmR5OiBcIi9zdGF0aWMvaW1hZ2VzL3dlYXRoZXIvd2luZHkucG5nXCIsXG4gIFwid2luZHktdmFyaWFudFwiOiBcIi9zdGF0aWMvaW1hZ2VzL3dlYXRoZXIvd2luZHkucG5nXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgd2VhdGhlckljb25zID0ge1xuICBleGNlcHRpb25hbDogXCJoYXNzOmFsZXJ0LWNpcmNsZS1vdXRsaW5lXCIsXG59O1xuXG5leHBvcnQgY29uc3QgY2FyZGluYWxEaXJlY3Rpb25zID0gW1xuICBcIk5cIixcbiAgXCJOTkVcIixcbiAgXCJORVwiLFxuICBcIkVORVwiLFxuICBcIkVcIixcbiAgXCJFU0VcIixcbiAgXCJTRVwiLFxuICBcIlNTRVwiLFxuICBcIlNcIixcbiAgXCJTU1dcIixcbiAgXCJTV1wiLFxuICBcIldTV1wiLFxuICBcIldcIixcbiAgXCJXTldcIixcbiAgXCJOV1wiLFxuICBcIk5OV1wiLFxuICBcIk5cIixcbl07XG5cbmNvbnN0IGdldFdpbmRCZWFyaW5nVGV4dCA9IChkZWdyZWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRlZ3JlZW51bSA9IHBhcnNlSW50KGRlZ3JlZSwgMTApO1xuICBpZiAoaXNGaW5pdGUoZGVncmVlbnVtKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgcmV0dXJuIGNhcmRpbmFsRGlyZWN0aW9uc1soKChkZWdyZWVudW0gKyAxMS4yNSkgLyAyMi41KSB8IDApICUgMTZdO1xuICB9XG4gIHJldHVybiBkZWdyZWU7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V2luZEJlYXJpbmcgPSAoYmVhcmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKGJlYXJpbmcgIT0gbnVsbCkge1xuICAgIHJldHVybiBnZXRXaW5kQmVhcmluZ1RleHQoYmVhcmluZyk7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlclVuaXQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIG1lYXN1cmU6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgbGVuZ3RoVW5pdCA9IGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLmxlbmd0aCB8fCBcIlwiO1xuICBzd2l0Y2ggKG1lYXN1cmUpIHtcbiAgICBjYXNlIFwicHJlc3N1cmVcIjpcbiAgICAgIHJldHVybiBsZW5ndGhVbml0ID09PSBcImttXCIgPyBcImhQYVwiIDogXCJpbkhnXCI7XG4gICAgY2FzZSBcIndpbmRfc3BlZWRcIjpcbiAgICAgIHJldHVybiBgJHtsZW5ndGhVbml0fS9oYDtcbiAgICBjYXNlIFwibGVuZ3RoXCI6XG4gICAgICByZXR1cm4gbGVuZ3RoVW5pdDtcbiAgICBjYXNlIFwicHJlY2lwaXRhdGlvblwiOlxuICAgICAgcmV0dXJuIGxlbmd0aFVuaXQgPT09IFwia21cIiA/IFwibW1cIiA6IFwiaW5cIjtcbiAgICBjYXNlIFwiaHVtaWRpdHlcIjpcbiAgICBjYXNlIFwicHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eVwiOlxuICAgICAgcmV0dXJuIFwiJVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaGFzcy5jb25maWcudW5pdF9zeXN0ZW1bbWVhc3VyZV0gfHwgXCJcIjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlY29uZGFyeVdlYXRoZXJBdHRyaWJ1dGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlT2JqOiBXZWF0aGVyRW50aXR5XG4pOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBleHRyZW1hID0gZ2V0V2VhdGhlckV4dHJlbWEoaGFzcywgc3RhdGVPYmopO1xuXG4gIGlmIChleHRyZW1hKSB7XG4gICAgcmV0dXJuIGV4dHJlbWE7XG4gIH1cblxuICBsZXQgdmFsdWU6IG51bWJlcjtcbiAgbGV0IGF0dHJpYnV0ZTogc3RyaW5nO1xuXG4gIGlmIChcbiAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZvcmVjYXN0Py5sZW5ndGggJiZcbiAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZvcmVjYXN0WzBdLnByZWNpcGl0YXRpb24gIT09IHVuZGVmaW5lZCAmJlxuICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3RbMF0ucHJlY2lwaXRhdGlvbiAhPT0gbnVsbFxuICApIHtcbiAgICB2YWx1ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3RbMF0ucHJlY2lwaXRhdGlvbiE7XG4gICAgYXR0cmlidXRlID0gXCJwcmVjaXBpdGF0aW9uXCI7XG4gIH0gZWxzZSBpZiAoXCJodW1pZGl0eVwiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXMpIHtcbiAgICB2YWx1ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHkhO1xuICAgIGF0dHJpYnV0ZSA9IFwiaHVtaWRpdHlcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGBcbiAgICAke2hhc3MhLmxvY2FsaXplKFxuICAgICAgYHVpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLiR7YXR0cmlidXRlfWBcbiAgICApfSAke3ZhbHVlfSAke2dldFdlYXRoZXJVbml0KGhhc3MhLCBhdHRyaWJ1dGUpfVxuICBgO1xufTtcblxuY29uc3QgZ2V0V2VhdGhlckV4dHJlbWEgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlT2JqOiBXZWF0aGVyRW50aXR5XG4pOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3Q/Lmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBsZXQgdGVtcExvdzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsZXQgdGVtcEhpZ2g6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcblxuICBmb3IgKGNvbnN0IGZvcmVjYXN0IG9mIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3QhKSB7XG4gICAgaWYgKG5ldyBEYXRlKGZvcmVjYXN0LmRhdGV0aW1lKS5nZXREYXRlKCkgIT09IHRvZGF5KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCF0ZW1wSGlnaCB8fCBmb3JlY2FzdC50ZW1wZXJhdHVyZSA+IHRlbXBIaWdoKSB7XG4gICAgICB0ZW1wSGlnaCA9IGZvcmVjYXN0LnRlbXBlcmF0dXJlO1xuICAgIH1cbiAgICBpZiAoIXRlbXBMb3cgfHwgKGZvcmVjYXN0LnRlbXBsb3cgJiYgZm9yZWNhc3QudGVtcGxvdyA8IHRlbXBMb3cpKSB7XG4gICAgICB0ZW1wTG93ID0gZm9yZWNhc3QudGVtcGxvdztcbiAgICB9XG4gICAgaWYgKCFmb3JlY2FzdC50ZW1wbG93ICYmICghdGVtcExvdyB8fCBmb3JlY2FzdC50ZW1wZXJhdHVyZSA8IHRlbXBMb3cpKSB7XG4gICAgICB0ZW1wTG93ID0gZm9yZWNhc3QudGVtcGVyYXR1cmU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF0ZW1wTG93ICYmICF0ZW1wSGlnaCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCB1bml0ID0gZ2V0V2VhdGhlclVuaXQoaGFzcyEsIFwidGVtcGVyYXR1cmVcIik7XG5cbiAgcmV0dXJuIGBcbiAgICAke1xuICAgICAgdGVtcEhpZ2hcbiAgICAgICAgPyBgXG4gICAgICAgICAgICAke3RlbXBIaWdofSAke3VuaXR9XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJcbiAgICB9XG4gICAgJHt0ZW1wTG93ICYmIHRlbXBIaWdoID8gXCIgLyBcIiA6IFwiXCJ9XG4gICAgJHtcbiAgICAgIHRlbXBMb3dcbiAgICAgICAgPyBgXG4gICAgICAgICAgJHt0ZW1wTG93fSAke3VuaXR9XG4gICAgICAgIGBcbiAgICAgICAgOiBcIlwiXG4gICAgfVxuICBgO1xufTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURpc3BsYXkgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgeyBVTkFWQUlMQUJMRV9TVEFURVMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlcIjtcbmltcG9ydCB7XG4gIGdldFNlY29uZGFyeVdlYXRoZXJBdHRyaWJ1dGUsXG4gIGdldFdlYXRoZXJVbml0LFxuICB3ZWF0aGVySWNvbnMsXG4gIHdlYXRoZXJJbWFnZXMsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3dlYXRoZXJcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFdlYXRoZXJFbnRpdHkgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVudGl0aWVzQ2FyZEVudGl0eUNvbmZpZyB9IGZyb20gXCIuLi9jYXJkcy90eXBlc1wiO1xuaW1wb3J0IHsgaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtY2hhbmdlZFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktZ2VuZXJpYy1lbnRpdHktcm93XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS13YXJuaW5nXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZVJvdyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLXdlYXRoZXItZW50aXR5LXJvd1wiKVxuY2xhc3MgSHVpV2VhdGhlckVudGl0eVJvdyBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZVJvdyB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBFbnRpdGllc0NhcmRFbnRpdHlDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEVudGl0aWVzQ2FyZEVudGl0eUNvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnPy5lbnRpdHkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQ29uZmlndXJhdGlvbjogJ2VudGl0eScgcmVxdWlyZWRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eV0gYXMgV2VhdGhlckVudGl0eTtcblxuICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aHVpLXdhcm5pbmdcbiAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLndhcm5pbmcuZW50aXR5X25vdF9mb3VuZFwiLFxuICAgICAgICAgICAgXCJlbnRpdHlcIixcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5lbnRpdHlcbiAgICAgICAgICApfTwvaHVpLXdhcm5pbmdcbiAgICAgICAgPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyUm93Q29uZmlnID0ge1xuICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgaWNvbjogd2VhdGhlckljb25zW3N0YXRlT2JqLnN0YXRlXSxcbiAgICAgIGltYWdlOiB3ZWF0aGVySW1hZ2VzW3N0YXRlT2JqLnN0YXRlXSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aHVpLWdlbmVyaWMtZW50aXR5LXJvdyAuaGFzcz0ke3RoaXMuaGFzc30gLmNvbmZpZz0ke3dlYXRoZXJSb3dDb25maWd9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmlidXRlc1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAke1VOQVZBSUxBQkxFX1NUQVRFUy5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSlcbiAgICAgICAgICAgICAgPyBjb21wdXRlU3RhdGVEaXNwbGF5KFxuICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplLFxuICAgICAgICAgICAgICAgICAgc3RhdGVPYmosXG4gICAgICAgICAgICAgICAgICB0aGlzLmhhc3MubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZX1cbiAgICAgICAgICAgICAgICAgICR7Z2V0V2VhdGhlclVuaXQodGhpcy5oYXNzLCBcInRlbXBlcmF0dXJlXCIpfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgJHtnZXRTZWNvbmRhcnlXZWF0aGVyQXR0cmlidXRlKHRoaXMuaGFzcyEsIHN0YXRlT2JqKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2h1aS1nZW5lcmljLWVudGl0eS1yb3c+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5hdHRyaWJ1dGVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kYXJ5IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktd2VhdGhlci1lbnRpdHktcm93XCI6IEh1aVdlYXRoZXJFbnRpdHlSb3c7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFpQkE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWJBO0FBZUE7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUZBO0FBTUE7QUFFQTtBQUVBO0FBRkE7QUFWQTtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7OztBQUdBO0FBT0E7QUFDQTtBQUNBOzs7QUFHQTs7OztBQWhCQTtBQXFCQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQUFBO0FBWUE7OztBQTlFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
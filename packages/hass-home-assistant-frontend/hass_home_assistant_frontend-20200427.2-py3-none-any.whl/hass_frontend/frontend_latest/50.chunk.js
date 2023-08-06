(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[50],{

/***/ "./src/common/datetime/duration_to_seconds.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return durationToSeconds; });
function durationToSeconds(duration) {
  const parts = duration.split(":").map(Number);
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

/***/ }),

/***/ "./src/common/datetime/seconds_to_duration.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return secondsToDuration; });
const leftPad = num => num < 10 ? `0${num}` : num;

function secondsToDuration(d) {
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);

  if (h > 0) {
    return `${h}:${leftPad(m)}:${leftPad(s)}`;
  }

  if (m > 0) {
    return `${m}:${leftPad(s)}`;
  }

  if (s > 0) {
    return "" + s;
  }

  return null;
}

/***/ }),

/***/ "./src/common/entity/timer_time_remaining.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
/*! exports provided: timerTimeRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerTimeRemaining", function() { return timerTimeRemaining; });
/* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts");

const timerTimeRemaining = stateObj => {
  let timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);

  if (stateObj.state === "active") {
    const now = new Date().getTime();
    const madeActive = new Date(stateObj.last_changed).getTime();
    timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
  }

  return timeRemaining;
};

/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts");
/* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts");
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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








let HuiTimerEntityRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-timer-entity-row")], function (_initialize, _LitElement) {
  class HuiTimerEntityRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiTimerEntityRow,
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
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_timeRemaining",
      value: void 0
    }, {
      kind: "field",
      key: "_interval",
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
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HuiTimerEntityRow.prototype), "disconnectedCallback", this).call(this);

        this._clearInterval();
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiTimerEntityRow.prototype), "connectedCallback", this).call(this);

        if (this._config && this._config.entity) {
          const stateObj = this.hass.states[this._config.entity];

          if (stateObj) {
            this._startInterval(stateObj);
          }
        }
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
        <div class="text-content">${this._computeDisplay(stateObj)}</div>
      </hui-generic-entity-row>
    `;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (changedProps.has("_timeRemaining")) {
          return true;
        }

        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_3__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiTimerEntityRow.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("hass")) {
          const stateObj = this.hass.states[this._config.entity];
          const oldHass = changedProps.get("hass");
          const oldStateObj = oldHass ? oldHass.states[this._config.entity] : undefined;

          if (oldStateObj !== stateObj) {
            this._startInterval(stateObj);
          } else if (!stateObj) {
            this._clearInterval();
          }
        }
      }
    }, {
      kind: "method",
      key: "_clearInterval",
      value: function _clearInterval() {
        if (this._interval) {
          window.clearInterval(this._interval);
          this._interval = undefined;
        }
      }
    }, {
      kind: "method",
      key: "_startInterval",
      value: function _startInterval(stateObj) {
        this._clearInterval();

        this._calculateRemaining(stateObj);

        if (stateObj.state === "active") {
          this._interval = window.setInterval(() => this._calculateRemaining(stateObj), 1000);
        }
      }
    }, {
      kind: "method",
      key: "_calculateRemaining",
      value: function _calculateRemaining(stateObj) {
        this._timeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_2__["timerTimeRemaining"])(stateObj);
      }
    }, {
      kind: "method",
      key: "_computeDisplay",
      value: function _computeDisplay(stateObj) {
        if (!stateObj) {
          return null;
        }

        if (stateObj.state === "idle" || this._timeRemaining === 0) {
          return this.hass.localize("state.timer." + stateObj.state);
        }

        let display = Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_1__["default"])(this._timeRemaining || 0);

        if (stateObj.state === "paused") {
          display += ` (${this.hass.localize("state.timer.paused")})`;
        }

        return display;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2R1cmF0aW9uX3RvX3NlY29uZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9zZWNvbmRzX3RvX2R1cmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZW50aXR5LXJvd3MvaHVpLXRpbWVyLWVudGl0eS1yb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHVyYXRpb25Ub1NlY29uZHMoZHVyYXRpb246IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IHBhcnRzID0gZHVyYXRpb24uc3BsaXQoXCI6XCIpLm1hcChOdW1iZXIpO1xuICByZXR1cm4gcGFydHNbMF0gKiAzNjAwICsgcGFydHNbMV0gKiA2MCArIHBhcnRzWzJdO1xufVxuIiwiY29uc3QgbGVmdFBhZCA9IChudW06IG51bWJlcikgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Vjb25kc1RvRHVyYXRpb24oZDogbnVtYmVyKSB7XG4gIGNvbnN0IGggPSBNYXRoLmZsb29yKGQgLyAzNjAwKTtcbiAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAvIDYwKTtcbiAgY29uc3QgcyA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAlIDYwKTtcblxuICBpZiAoaCA+IDApIHtcbiAgICByZXR1cm4gYCR7aH06JHtsZWZ0UGFkKG0pfToke2xlZnRQYWQocyl9YDtcbiAgfVxuICBpZiAobSA+IDApIHtcbiAgICByZXR1cm4gYCR7bX06JHtsZWZ0UGFkKHMpfWA7XG4gIH1cbiAgaWYgKHMgPiAwKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBzO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBkdXJhdGlvblRvU2Vjb25kcyBmcm9tIFwiLi4vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kc1wiO1xuXG5leHBvcnQgY29uc3QgdGltZXJUaW1lUmVtYWluaW5nID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIGxldCB0aW1lUmVtYWluaW5nID0gZHVyYXRpb25Ub1NlY29uZHMoc3RhdGVPYmouYXR0cmlidXRlcy5yZW1haW5pbmcpO1xuXG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJhY3RpdmVcIikge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IG1hZGVBY3RpdmUgPSBuZXcgRGF0ZShzdGF0ZU9iai5sYXN0X2NoYW5nZWQpLmdldFRpbWUoKTtcbiAgICB0aW1lUmVtYWluaW5nID0gTWF0aC5tYXgodGltZVJlbWFpbmluZyAtIChub3cgLSBtYWRlQWN0aXZlKSAvIDEwMDAsIDApO1xuICB9XG5cbiAgcmV0dXJuIHRpbWVSZW1haW5pbmc7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHNlY29uZHNUb0R1cmF0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvc2Vjb25kc190b19kdXJhdGlvblwiO1xuaW1wb3J0IHsgdGltZXJUaW1lUmVtYWluaW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvdGltZXJfdGltZV9yZW1haW5pbmdcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCB9IGZyb20gXCIuLi9jb21tb24vaGFzLWNoYW5nZWRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLWdlbmVyaWMtZW50aXR5LXJvd1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktd2FybmluZ1wiO1xuaW1wb3J0IHsgRW50aXR5Q29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktdGltZXItZW50aXR5LXJvd1wiKVxuY2xhc3MgSHVpVGltZXJFbnRpdHlSb3cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IEVudGl0eUNvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF90aW1lUmVtYWluaW5nPzogbnVtYmVyO1xuXG4gIHByaXZhdGUgX2ludGVydmFsPzogbnVtYmVyO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBFbnRpdHlDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlndXJhdGlvbiBlcnJvclwiKTtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcuZW50aXR5KSB7XG4gICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcyEuc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XTtcbiAgICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgICB0aGlzLl9zdGFydEludGVydmFsKHN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1t0aGlzLl9jb25maWcuZW50aXR5XTtcblxuICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aHVpLXdhcm5pbmdcbiAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLndhcm5pbmcuZW50aXR5X25vdF9mb3VuZFwiLFxuICAgICAgICAgICAgXCJlbnRpdHlcIixcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5lbnRpdHlcbiAgICAgICAgICApfTwvaHVpLXdhcm5pbmdcbiAgICAgICAgPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxodWktZ2VuZXJpYy1lbnRpdHktcm93IC5oYXNzPSR7dGhpcy5oYXNzfSAuY29uZmlnPSR7dGhpcy5fY29uZmlnfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGVudFwiPiR7dGhpcy5fY29tcHV0ZURpc3BsYXkoc3RhdGVPYmopfTwvZGl2PlxuICAgICAgPC9odWktZ2VuZXJpYy1lbnRpdHktcm93PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl90aW1lUmVtYWluaW5nXCIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkKHRoaXMsIGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpKSB7XG4gICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcyEuc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XTtcbiAgICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyB0aGlzW1wiaGFzc1wiXTtcbiAgICAgIGNvbnN0IG9sZFN0YXRlT2JqID0gb2xkSGFzc1xuICAgICAgICA/IG9sZEhhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKG9sZFN0YXRlT2JqICE9PSBzdGF0ZU9iaikge1xuICAgICAgICB0aGlzLl9zdGFydEludGVydmFsKHN0YXRlT2JqKTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhckludGVydmFsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRJbnRlcnZhbChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHZvaWQge1xuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVSZW1haW5pbmcoc3RhdGVPYmopO1xuXG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcbiAgICAgICAgKCkgPT4gdGhpcy5fY2FsY3VsYXRlUmVtYWluaW5nKHN0YXRlT2JqKSxcbiAgICAgICAgMTAwMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVSZW1haW5pbmcoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiB2b2lkIHtcbiAgICB0aGlzLl90aW1lUmVtYWluaW5nID0gdGltZXJUaW1lUmVtYWluaW5nKHN0YXRlT2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVEaXNwbGF5KHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImlkbGVcIiB8fCB0aGlzLl90aW1lUmVtYWluaW5nID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNzIS5sb2NhbGl6ZShcInN0YXRlLnRpbWVyLlwiICsgc3RhdGVPYmouc3RhdGUpO1xuICAgIH1cblxuICAgIGxldCBkaXNwbGF5ID0gc2Vjb25kc1RvRHVyYXRpb24odGhpcy5fdGltZVJlbWFpbmluZyB8fCAwKTtcblxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgZGlzcGxheSArPSBgICgke3RoaXMuaGFzcyEubG9jYWxpemUoXCJzdGF0ZS50aW1lci5wYXVzZWRcIil9KWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3BsYXk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS10aW1lci1lbnRpdHktcm93XCI6IEh1aVRpbWVyRW50aXR5Um93O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFLQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBMUhBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
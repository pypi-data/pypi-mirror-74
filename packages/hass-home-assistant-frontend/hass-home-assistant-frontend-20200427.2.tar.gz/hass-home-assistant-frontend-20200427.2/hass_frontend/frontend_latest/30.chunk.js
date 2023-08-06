(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[30],{

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

/***/ "./src/components/entity/ha-state-label-badge.ts":
/*!*******************************************************!*\
  !*** ./src/components/entity/ha-state-label-badge.ts ***!
  \*******************************************************/
/*! exports provided: HaStateLabelBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaStateLabelBadge", function() { return HaStateLabelBadge; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts");
/* harmony import */ var _ha_label_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-label-badge */ "./src/components/ha-label-badge.ts");
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











let HaStateLabelBadge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-state-label-badge")], function (_initialize, _LitElement) {
  class HaStateLabelBadge extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaStateLabelBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "state",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "image",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_timerTimeRemaining",
      value: void 0
    }, {
      kind: "field",
      key: "_connected",
      value: void 0
    }, {
      kind: "field",
      key: "_updateRemaining",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HaStateLabelBadge.prototype), "connectedCallback", this).call(this);

        this._connected = true;
        this.startInterval(this.state);
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaStateLabelBadge.prototype), "disconnectedCallback", this).call(this);

        this._connected = false;
        this.clearInterval();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const state = this.state;

        if (!state) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <ha-label-badge
          class="warning"
          label="${this.hass.localize("state_badge.default.error")}"
          icon="hass:alert"
          description="${this.hass.localize("state_badge.default.entity_not_found")}"
        ></ha-label-badge>
      `;
        }

        const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(state);
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-label-badge
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          [domain]: true,
          "has-unit_of_measurement": "unit_of_measurement" in state.attributes
        })}"
        .value="${this._computeValue(domain, state)}"
        .icon="${this.icon ? this.icon : this._computeIcon(domain, state)}"
        .image="${this.icon ? "" : this.image ? this.image : state.attributes.entity_picture}"
        .label="${this._computeLabel(domain, state, this._timerTimeRemaining)}"
        .description="${this.name ? this.name : Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(state)}"
      ></ha-label-badge>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HaStateLabelBadge.prototype), "updated", this).call(this, changedProperties);

        if (this._connected && changedProperties.has("state")) {
          this.startInterval(this.state);
        }
      }
    }, {
      kind: "method",
      key: "_computeValue",
      value: function _computeValue(domain, state) {
        switch (domain) {
          case "binary_sensor":
          case "device_tracker":
          case "person":
          case "updater":
          case "sun":
          case "alarm_control_panel":
          case "timer":
            return null;

          case "sensor":
          default:
            return state.state === "unknown" ? "-" : state.attributes.unit_of_measurement ? state.state : Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_3__["computeStateDisplay"])(this.hass.localize, state, this.hass.language);
        }
      }
    }, {
      kind: "method",
      key: "_computeIcon",
      value: function _computeIcon(domain, state) {
        if (state.state === "unavailable") {
          return null;
        }

        switch (domain) {
          case "alarm_control_panel":
            if (state.state === "pending") {
              return "hass:clock-fast";
            }

            if (state.state === "armed_away") {
              return "hass:nature";
            }

            if (state.state === "armed_home") {
              return "hass:home-variant";
            }

            if (state.state === "armed_night") {
              return "hass:weather-night";
            }

            if (state.state === "armed_custom_bypass") {
              return "hass:shield-home";
            }

            if (state.state === "triggered") {
              return "hass:alert-circle";
            } // state == 'disarmed'


            return Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_6__["domainIcon"])(domain, state.state);

          case "binary_sensor":
          case "device_tracker":
          case "updater":
          case "person":
            return Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_7__["stateIcon"])(state);

          case "sun":
            return state.state === "above_horizon" ? Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_6__["domainIcon"])(domain) : "hass:brightness-3";

          case "timer":
            return state.state === "active" ? "hass:timer" : "hass:timer-off";

          default:
            return null;
        }
      }
    }, {
      kind: "method",
      key: "_computeLabel",
      value: function _computeLabel(domain, state, _timerTimeRemaining) {
        if (state.state === "unavailable" || ["device_tracker", "alarm_control_panel", "person"].includes(domain)) {
          // Localize the state with a special state_badge namespace, which has variations of
          // the state translations that are truncated to fit within the badge label. Translations
          // are only added for device_tracker, alarm_control_panel and person.
          return this.hass.localize(`state_badge.${domain}.${state.state}`) || this.hass.localize(`state_badge.default.${state.state}`) || state.state;
        }

        if (domain === "timer") {
          return Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_2__["default"])(_timerTimeRemaining);
        }

        return state.attributes.unit_of_measurement || null;
      }
    }, {
      kind: "method",
      key: "clearInterval",
      value: function (_clearInterval) {
        function clearInterval() {
          return _clearInterval.apply(this, arguments);
        }

        clearInterval.toString = function () {
          return _clearInterval.toString();
        };

        return clearInterval;
      }(function () {
        if (this._updateRemaining) {
          clearInterval(this._updateRemaining);
          this._updateRemaining = undefined;
        }
      })
    }, {
      kind: "method",
      key: "startInterval",
      value: function startInterval(stateObj) {
        this.clearInterval();

        if (stateObj && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(stateObj) === "timer") {
          this.calculateTimerRemaining(stateObj);

          if (stateObj.state === "active") {
            this._updateRemaining = window.setInterval(() => this.calculateTimerRemaining(this.state), 1000);
          }
        }
      }
    }, {
      kind: "method",
      key: "calculateTimerRemaining",
      value: function calculateTimerRemaining(stateObj) {
        this._timerTimeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_8__["timerTimeRemaining"])(stateObj);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        cursor: pointer;
      }

      ha-label-badge {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }
      ha-label-badge.has-unit_of_measurement {
        --ha-label-badge-label-text-transform: none;
      }

      ha-label-badge.binary_sensor,
      ha-label-badge.updater {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .red {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }

      .blue {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .green {
        --ha-label-badge-color: var(--label-badge-green, #0da035);
      }

      .yellow {
        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);
      }

      .grey {
        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));
      }

      .warning {
        --ha-label-badge-color: var(--label-badge-yellow, #fce588);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2R1cmF0aW9uX3RvX3NlY29uZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9zZWNvbmRzX3RvX2R1cmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1sYWJlbC1iYWRnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkdXJhdGlvblRvU2Vjb25kcyhkdXJhdGlvbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgcGFydHMgPSBkdXJhdGlvbi5zcGxpdChcIjpcIikubWFwKE51bWJlcik7XG4gIHJldHVybiBwYXJ0c1swXSAqIDM2MDAgKyBwYXJ0c1sxXSAqIDYwICsgcGFydHNbMl07XG59XG4iLCJjb25zdCBsZWZ0UGFkID0gKG51bTogbnVtYmVyKSA9PiAobnVtIDwgMTAgPyBgMCR7bnVtfWAgOiBudW0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWNvbmRzVG9EdXJhdGlvbihkOiBudW1iZXIpIHtcbiAgY29uc3QgaCA9IE1hdGguZmxvb3IoZCAvIDM2MDApO1xuICBjb25zdCBtID0gTWF0aC5mbG9vcigoZCAlIDM2MDApIC8gNjApO1xuICBjb25zdCBzID0gTWF0aC5mbG9vcigoZCAlIDM2MDApICUgNjApO1xuXG4gIGlmIChoID4gMCkge1xuICAgIHJldHVybiBgJHtofToke2xlZnRQYWQobSl9OiR7bGVmdFBhZChzKX1gO1xuICB9XG4gIGlmIChtID4gMCkge1xuICAgIHJldHVybiBgJHttfToke2xlZnRQYWQocyl9YDtcbiAgfVxuICBpZiAocyA+IDApIHtcbiAgICByZXR1cm4gXCJcIiArIHM7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGR1cmF0aW9uVG9TZWNvbmRzIGZyb20gXCIuLi9kYXRldGltZS9kdXJhdGlvbl90b19zZWNvbmRzXCI7XG5cbmV4cG9ydCBjb25zdCB0aW1lclRpbWVSZW1haW5pbmcgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgbGV0IHRpbWVSZW1haW5pbmcgPSBkdXJhdGlvblRvU2Vjb25kcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlbWFpbmluZyk7XG5cbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgbWFkZUFjdGl2ZSA9IG5ldyBEYXRlKHN0YXRlT2JqLmxhc3RfY2hhbmdlZCkuZ2V0VGltZSgpO1xuICAgIHRpbWVSZW1haW5pbmcgPSBNYXRoLm1heCh0aW1lUmVtYWluaW5nIC0gKG5vdyAtIG1hZGVBY3RpdmUpIC8gMTAwMCwgMCk7XG4gIH1cblxuICByZXR1cm4gdGltZVJlbWFpbmluZztcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCBzZWNvbmRzVG9EdXJhdGlvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb25cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURpc3BsYXkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2Rpc3BsYXlcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IHN0YXRlSWNvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L3N0YXRlX2ljb25cIjtcbmltcG9ydCB7IHRpbWVyVGltZVJlbWFpbmluZyB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi9oYS1sYWJlbC1iYWRnZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXN0YXRlLWxhYmVsLWJhZGdlXCIpXG5leHBvcnQgY2xhc3MgSGFTdGF0ZUxhYmVsQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZT86IEhhc3NFbnRpdHk7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hbWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGljb24/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGltYWdlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3RpbWVyVGltZVJlbWFpbmluZz86IG51bWJlcjtcblxuICBwcml2YXRlIF9jb25uZWN0ZWQ/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3VwZGF0ZVJlbWFpbmluZz86IG51bWJlcjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRJbnRlcnZhbCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYS1sYWJlbC1iYWRnZVxuICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgbGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXCJzdGF0ZV9iYWRnZS5kZWZhdWx0LmVycm9yXCIpfVwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6YWxlcnRcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJzdGF0ZV9iYWRnZS5kZWZhdWx0LmVudGl0eV9ub3RfZm91bmRcIlxuICAgICAgICAgICl9XCJcbiAgICAgICAgPjwvaGEtbGFiZWwtYmFkZ2U+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZSk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1sYWJlbC1iYWRnZVxuICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgIFtkb21haW5dOiB0cnVlLFxuICAgICAgICAgIFwiaGFzLXVuaXRfb2ZfbWVhc3VyZW1lbnRcIjogXCJ1bml0X29mX21lYXN1cmVtZW50XCIgaW4gc3RhdGUuYXR0cmlidXRlcyxcbiAgICAgICAgfSl9XCJcbiAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9jb21wdXRlVmFsdWUoZG9tYWluLCBzdGF0ZSl9XCJcbiAgICAgICAgLmljb249XCIke3RoaXMuaWNvbiA/IHRoaXMuaWNvbiA6IHRoaXMuX2NvbXB1dGVJY29uKGRvbWFpbiwgc3RhdGUpfVwiXG4gICAgICAgIC5pbWFnZT1cIiR7dGhpcy5pY29uXG4gICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgOiB0aGlzLmltYWdlXG4gICAgICAgICAgPyB0aGlzLmltYWdlXG4gICAgICAgICAgOiBzdGF0ZS5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlfVwiXG4gICAgICAgIC5sYWJlbD1cIiR7dGhpcy5fY29tcHV0ZUxhYmVsKGRvbWFpbiwgc3RhdGUsIHRoaXMuX3RpbWVyVGltZVJlbWFpbmluZyl9XCJcbiAgICAgICAgLmRlc2NyaXB0aW9uPVwiJHt0aGlzLm5hbWUgPyB0aGlzLm5hbWUgOiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKX1cIlxuICAgICAgPjwvaGEtbGFiZWwtYmFkZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCAmJiBjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJzdGF0ZVwiKSkge1xuICAgICAgdGhpcy5zdGFydEludGVydmFsKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVWYWx1ZShkb21haW46IHN0cmluZywgc3RhdGU6IEhhc3NFbnRpdHkpIHtcbiAgICBzd2l0Y2ggKGRvbWFpbikge1xuICAgICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIGNhc2UgXCJkZXZpY2VfdHJhY2tlclwiOlxuICAgICAgY2FzZSBcInBlcnNvblwiOlxuICAgICAgY2FzZSBcInVwZGF0ZXJcIjpcbiAgICAgIGNhc2UgXCJzdW5cIjpcbiAgICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICBjYXNlIFwidGltZXJcIjpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIFwic2Vuc29yXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGUuc3RhdGUgPT09IFwidW5rbm93blwiXG4gICAgICAgICAgPyBcIi1cIlxuICAgICAgICAgIDogc3RhdGUuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50XG4gICAgICAgICAgPyBzdGF0ZS5zdGF0ZVxuICAgICAgICAgIDogY29tcHV0ZVN0YXRlRGlzcGxheShcbiAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIHRoaXMuaGFzcyEubGFuZ3VhZ2VcbiAgICAgICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUljb24oZG9tYWluOiBzdHJpbmcsIHN0YXRlOiBIYXNzRW50aXR5KSB7XG4gICAgaWYgKHN0YXRlLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKGRvbWFpbikge1xuICAgICAgY2FzZSBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIjpcbiAgICAgICAgaWYgKHN0YXRlLnN0YXRlID09PSBcInBlbmRpbmdcIikge1xuICAgICAgICAgIHJldHVybiBcImhhc3M6Y2xvY2stZmFzdFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJhcm1lZF9hd2F5XCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOm5hdHVyZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJhcm1lZF9ob21lXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmhvbWUtdmFyaWFudFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJhcm1lZF9uaWdodFwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczp3ZWF0aGVyLW5pZ2h0XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnN0YXRlID09PSBcImFybWVkX2N1c3RvbV9ieXBhc3NcIikge1xuICAgICAgICAgIHJldHVybiBcImhhc3M6c2hpZWxkLWhvbWVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwidHJpZ2dlcmVkXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmFsZXJ0LWNpcmNsZVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0YXRlID09ICdkaXNhcm1lZCdcbiAgICAgICAgcmV0dXJuIGRvbWFpbkljb24oZG9tYWluLCBzdGF0ZS5zdGF0ZSk7XG4gICAgICBjYXNlIFwiYmluYXJ5X3NlbnNvclwiOlxuICAgICAgY2FzZSBcImRldmljZV90cmFja2VyXCI6XG4gICAgICBjYXNlIFwidXBkYXRlclwiOlxuICAgICAgY2FzZSBcInBlcnNvblwiOlxuICAgICAgICByZXR1cm4gc3RhdGVJY29uKHN0YXRlKTtcbiAgICAgIGNhc2UgXCJzdW5cIjpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0YXRlID09PSBcImFib3ZlX2hvcml6b25cIlxuICAgICAgICAgID8gZG9tYWluSWNvbihkb21haW4pXG4gICAgICAgICAgOiBcImhhc3M6YnJpZ2h0bmVzcy0zXCI7XG4gICAgICBjYXNlIFwidGltZXJcIjpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0YXRlID09PSBcImFjdGl2ZVwiID8gXCJoYXNzOnRpbWVyXCIgOiBcImhhc3M6dGltZXItb2ZmXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlTGFiZWwoZG9tYWluLCBzdGF0ZSwgX3RpbWVyVGltZVJlbWFpbmluZykge1xuICAgIGlmIChcbiAgICAgIHN0YXRlLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIgfHxcbiAgICAgIFtcImRldmljZV90cmFja2VyXCIsIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLCBcInBlcnNvblwiXS5pbmNsdWRlcyhkb21haW4pXG4gICAgKSB7XG4gICAgICAvLyBMb2NhbGl6ZSB0aGUgc3RhdGUgd2l0aCBhIHNwZWNpYWwgc3RhdGVfYmFkZ2UgbmFtZXNwYWNlLCB3aGljaCBoYXMgdmFyaWF0aW9ucyBvZlxuICAgICAgLy8gdGhlIHN0YXRlIHRyYW5zbGF0aW9ucyB0aGF0IGFyZSB0cnVuY2F0ZWQgdG8gZml0IHdpdGhpbiB0aGUgYmFkZ2UgbGFiZWwuIFRyYW5zbGF0aW9uc1xuICAgICAgLy8gYXJlIG9ubHkgYWRkZWQgZm9yIGRldmljZV90cmFja2VyLCBhbGFybV9jb250cm9sX3BhbmVsIGFuZCBwZXJzb24uXG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKGBzdGF0ZV9iYWRnZS4ke2RvbWFpbn0uJHtzdGF0ZS5zdGF0ZX1gKSB8fFxuICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKGBzdGF0ZV9iYWRnZS5kZWZhdWx0LiR7c3RhdGUuc3RhdGV9YCkgfHxcbiAgICAgICAgc3RhdGUuc3RhdGVcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChkb21haW4gPT09IFwidGltZXJcIikge1xuICAgICAgcmV0dXJuIHNlY29uZHNUb0R1cmF0aW9uKF90aW1lclRpbWVSZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGUuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50IHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNsZWFySW50ZXJ2YWwoKSB7XG4gICAgaWYgKHRoaXMuX3VwZGF0ZVJlbWFpbmluZykge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl91cGRhdGVSZW1haW5pbmcpO1xuICAgICAgdGhpcy5fdXBkYXRlUmVtYWluaW5nID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRJbnRlcnZhbChzdGF0ZU9iaikge1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICAgIGlmIChzdGF0ZU9iaiAmJiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopID09PSBcInRpbWVyXCIpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGltZXJSZW1haW5pbmcoc3RhdGVPYmopO1xuXG4gICAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVtYWluaW5nID0gd2luZG93LnNldEludGVydmFsKFxuICAgICAgICAgICgpID0+IHRoaXMuY2FsY3VsYXRlVGltZXJSZW1haW5pbmcodGhpcy5zdGF0ZSksXG4gICAgICAgICAgMTAwMFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGltZXJSZW1haW5pbmcoc3RhdGVPYmopIHtcbiAgICB0aGlzLl90aW1lclRpbWVSZW1haW5pbmcgPSB0aW1lclRpbWVSZW1haW5pbmcoc3RhdGVPYmopO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGhhLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtcmVkLCAjZGY0YzFlKTtcbiAgICAgIH1cbiAgICAgIGhhLWxhYmVsLWJhZGdlLmhhcy11bml0X29mX21lYXN1cmVtZW50IHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1sYWJlbC10ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaGEtbGFiZWwtYmFkZ2UuYmluYXJ5X3NlbnNvcixcbiAgICAgIGhhLWxhYmVsLWJhZGdlLnVwZGF0ZXIge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1ibHVlLCAjMDM5YmU1KTtcbiAgICAgIH1cblxuICAgICAgLnJlZCB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLXJlZCwgI2RmNGMxZSk7XG4gICAgICB9XG5cbiAgICAgIC5ibHVlIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtYmx1ZSwgIzAzOWJlNSk7XG4gICAgICB9XG5cbiAgICAgIC5ncmVlbiB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWdyZWVuLCAjMGRhMDM1KTtcbiAgICAgIH1cblxuICAgICAgLnllbGxvdyB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLXllbGxvdywgI2Y0YjQwMCk7XG4gICAgICB9XG5cbiAgICAgIC5ncmV5IHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtZ3JleSwgdmFyKC0tcGFwZXItZ3JleS01MDApKTtcbiAgICAgIH1cblxuICAgICAgLndhcm5pbmcge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS15ZWxsb3csICNmY2U1ODgpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXN0YXRlLWxh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
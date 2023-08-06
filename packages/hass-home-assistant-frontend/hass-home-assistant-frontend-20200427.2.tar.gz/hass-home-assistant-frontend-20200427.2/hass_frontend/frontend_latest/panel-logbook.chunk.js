(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-logbook"],{

/***/ "./src/common/datetime/check_options_support.ts":
/*!******************************************************!*\
  !*** ./src/common/datetime/check_options_support.ts ***!
  \******************************************************/
/*! exports provided: toLocaleDateStringSupportsOptions, toLocaleTimeStringSupportsOptions, toLocaleStringSupportsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateStringSupportsOptions", function() { return toLocaleDateStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeStringSupportsOptions", function() { return toLocaleTimeStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleStringSupportsOptions", function() { return toLocaleStringSupportsOptions; });
// Check for support of native locale string options
function checkToLocaleDateStringSupportsOptions() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

const toLocaleDateStringSupportsOptions = checkToLocaleDateStringSupportsOptions();
const toLocaleTimeStringSupportsOptions = checkToLocaleTimeStringSupportsOptions();
const toLocaleStringSupportsOptions = checkToLocaleStringSupportsOptions();

/***/ }),

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDate = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleDateStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleDateString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "longDate");

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: formatTime, formatTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeWithSeconds", function() { return formatTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime");
const formatTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumTime");

/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class HaIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("ha-icon", HaIcon);

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
    return {
      hass: Object,

      /**
       * Translates a string to the current `language`. Any parameters to the
       * string should be passed in order, as follows:
       * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
       */
      localize: {
        type: Function,
        computed: "__computeLocalize(hass.localize)"
      }
    };
  }

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ }),

/***/ "./src/panels/logbook/ha-logbook-data.js":
/*!***********************************************!*\
  !*** ./src/panels/logbook/ha-logbook-data.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* eslint-plugin-disable lit */

const DATA_CACHE = {};
const ALL_ENTITIES = "*";

class HaLogbookData extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "hassChanged"
      },
      filterDate: {
        type: String,
        observer: "filterDataChanged"
      },
      filterPeriod: {
        type: Number,
        observer: "filterDataChanged"
      },
      filterEntity: {
        type: String,
        observer: "filterDataChanged"
      },
      isLoading: {
        type: Boolean,
        value: true,
        readOnly: true,
        notify: true
      },
      entries: {
        type: Object,
        value: null,
        readOnly: true,
        notify: true
      }
    };
  }

  hassChanged(newHass, oldHass) {
    if (!oldHass && this.filterDate) {
      this.updateData();
    }
  }

  filterDataChanged(newValue, oldValue) {
    if (oldValue !== undefined) {
      this.updateData();
    }
  }

  updateData() {
    if (!this.hass) return;

    this._setIsLoading(true);

    this.getData(this.filterDate, this.filterPeriod, this.filterEntity).then(logbookEntries => {
      this._setEntries(logbookEntries);

      this._setIsLoading(false);
    });
  }

  getData(date, period, entityId) {
    if (!entityId) entityId = ALL_ENTITIES;
    if (!DATA_CACHE[period]) DATA_CACHE[period] = [];
    if (!DATA_CACHE[period][date]) DATA_CACHE[period][date] = [];

    if (DATA_CACHE[period][date][entityId]) {
      return DATA_CACHE[period][date][entityId];
    }

    if (entityId !== ALL_ENTITIES && DATA_CACHE[period][date][ALL_ENTITIES]) {
      return DATA_CACHE[period][date][ALL_ENTITIES].then(function (entities) {
        return entities.filter(function (entity) {
          return entity.entity_id === entityId;
        });
      });
    }

    DATA_CACHE[period][date][entityId] = this._getFromServer(date, period, entityId);
    return DATA_CACHE[period][date][entityId];
  }

  _getFromServer(date, period, entityId) {
    let url = "logbook/" + date + "?period=" + period;

    if (entityId !== ALL_ENTITIES) {
      url += "&entity=" + entityId;
    }

    return this.hass.callApi("GET", url).then(function (logbookEntries) {
      logbookEntries.reverse();
      return logbookEntries;
    }, function () {
      return null;
    });
  }

  refreshLogbook() {
    DATA_CACHE[this.filterPeriod][this.filterDate] = [];
    this.updateData();
  }

}

customElements.define("ha-logbook-data", HaLogbookData);

/***/ }),

/***/ "./src/panels/logbook/ha-logbook.ts":
/*!******************************************!*\
  !*** ./src/panels/logbook/ha-logbook.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_virtualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-virtualizer */ "./node_modules/lit-virtualizer/lit-virtualizer.js");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
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











let HaLogbook = _decorate(null, function (_initialize, _LitElement) {
  class HaLogbook extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaLogbook,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "entries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        attribute: "rtl",
        type: Boolean,
        reflect: true
      })],
      key: "_rtl",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        const oldHass = changedProps.get("hass");
        const languageChanged = oldHass === undefined || oldHass.language !== this.hass.language;
        return changedProps.has("entries") || languageChanged;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(_changedProps) {
        this._rtl = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(this.hass);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$entries;

        if (!((_this$entries = this.entries) === null || _this$entries === void 0 ? void 0 : _this$entries.length)) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="container">
          ${this.hass.localize("ui.panel.logbook.entries_not_found")}
        </div>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="container">
        ${Object(lit_virtualizer__WEBPACK_IMPORTED_MODULE_1__["scroll"])({
          items: this.entries,
          renderItem: (item, index) => this._renderLogbookItem(item, index)
        })}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_renderLogbookItem",
      value: function _renderLogbookItem(item, index) {
        if (index === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const previous = this.entries[index - 1];
        const state = item.entity_id ? this.hass.states[item.entity_id] : undefined;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div>
        ${index === 0 || (item === null || item === void 0 ? void 0 : item.when) && (previous === null || previous === void 0 ? void 0 : previous.when) && new Date(item.when).toDateString() !== new Date(previous.when).toDateString() ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <h4 class="date">
                ${Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(item.when), this.hass.language)}
              </h4>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}

        <div class="entry">
          <div class="time">
            ${Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__["formatTimeWithSeconds"])(new Date(item.when), this.hass.language)}
          </div>
          <ha-icon
            .icon=${state ? Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_6__["stateIcon"])(state) : Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_5__["domainIcon"])(item.domain)}
          ></ha-icon>
          <div class="message">
            ${!item.entity_id ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <span class="name">${item.name}</span> ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <a
                    href="#"
                    @click=${this._entityClicked}
                    .entityId=${item.entity_id}
                    class="name"
                  >
                    ${item.name}
                  </a>
                `}
            <span>${item.message}</span>
          </div>
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_entityClicked",
      value: function _entityClicked(ev) {
        ev.preventDefault();
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-more-info", {
          entityId: ev.target.entityId
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
        height: 100%;
      }

      :host([rtl]) {
        direction: ltr;
      }

      .entry {
        display: flex;
        line-height: 2em;
      }

      .time {
        width: 65px;
        flex-shrink: 0;
        font-size: 0.8em;
        color: var(--secondary-text-color);
      }

      :host([rtl]) .date {
        direction: rtl;
      }

      ha-icon {
        margin: 0 8px 0 16px;
        flex-shrink: 0;
        color: var(--primary-text-color);
      }

      .message {
        color: var(--primary-text-color);
      }

      a {
        color: var(--primary-color);
      }

      .container {
        padding: 0 16px;
      }

      .uni-virtualizer-host {
        display: block;
        position: relative;
        contain: strict;
        height: 100%;
        overflow: auto;
      }

      .uni-virtualizer-host > * {
        box-sizing: border-box;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("ha-logbook", HaLogbook);

/***/ }),

/***/ "./src/panels/logbook/ha-panel-logbook.js":
/*!************************************************!*\
  !*** ./src/panels/logbook/ha-panel-logbook.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_theme_material_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/theme/material/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../resources/ha-date-picker-style */ "./src/resources/ha-date-picker-style.js");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_logbook__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ha-logbook */ "./src/panels/logbook/ha-logbook.ts");
/* harmony import */ var _ha_logbook_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ha-logbook-data */ "./src/panels/logbook/ha-logbook-data.js");







/* eslint-plugin-disable lit */












/*
 * @appliesMixin LocalizeMixin
 */

class HaPanelLogbook extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="ha-style">
        ha-logbook {
          height: calc(100vh - 136px);
        }

        :host([narrow]) ha-logbook {
          height: calc(100vh - 198px);
        }

        paper-spinner {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .wrap {
          margin-bottom: 24px;
        }

        .filters {
          display: flex;
          align-items: flex-end;
          padding: 0 16px;
        }

        :host([narrow]) .filters {
          flex-wrap: wrap;
        }

        vaadin-date-picker {
          max-width: 200px;
          margin-right: 16px;
        }

        :host([rtl]) vaadin-date-picker {
          margin-right: 0;
          margin-left: 16px;
        }

        paper-dropdown-menu {
          max-width: 100px;
          margin-right: 16px;
          --paper-input-container-label-floating: {
            padding-bottom: 11px;
          }
          --paper-input-suffix: {
            height: 24px;
          }
        }

        :host([rtl]) paper-dropdown-menu {
          text-align: right;
          margin-right: 0;
          margin-left: 16px;
        }

        paper-item {
          cursor: pointer;
          white-space: nowrap;
        }

        ha-entity-picker {
          display: inline-block;
          flex-grow: 1;
          max-width: 400px;
          --paper-input-suffix: {
            height: 24px;
          }
        }

        :host([narrow]) ha-entity-picker {
          max-width: none;
          width: 100%;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <ha-logbook-data
        hass="[[hass]]"
        is-loading="{{isLoading}}"
        entries="{{entries}}"
        filter-date="[[_computeFilterDate(_currentDate)]]"
        filter-period="[[_computeFilterDays(_periodIndex)]]"
        filter-entity="[[entityId]]"
      ></ha-logbook-data>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.logbook')]]</div>
            <paper-icon-button
              icon="hass:refresh"
              on-click="refreshLogbook"
              hidden$="[[isLoading]]"
            ></paper-icon-button>
          </app-toolbar>
        </app-header>

        <paper-spinner
          active="[[isLoading]]"
          hidden$="[[!isLoading]]"
          alt="[[localize('ui.common.loading')]]"
        ></paper-spinner>

        <div class="filters">
          <vaadin-date-picker
            id="picker"
            value="{{_currentDate}}"
            label="[[localize('ui.panel.logbook.showing_entries')]]"
            disabled="[[isLoading]]"
            required
          ></vaadin-date-picker>

          <paper-dropdown-menu
            label-float
            label="[[localize('ui.panel.logbook.period')]]"
            disabled="[[isLoading]]"
          >
            <paper-listbox slot="dropdown-content" selected="{{_periodIndex}}">
              <paper-item
                >[[localize('ui.duration.day', 'count', 1)]]</paper-item
              >
              <paper-item
                >[[localize('ui.duration.day', 'count', 3)]]</paper-item
              >
              <paper-item
                >[[localize('ui.duration.week', 'count', 1)]]</paper-item
              >
            </paper-listbox>
          </paper-dropdown-menu>

          <ha-entity-picker
            hass="[[hass]]"
            value="{{_entityId}}"
            label="[[localize('ui.components.entity.entity-picker.entity')]]"
            disabled="[[isLoading]]"
            on-change="_entityPicked"
          ></ha-entity-picker>
        </div>

        <ha-logbook
          hass="[[hass]]"
          entries="[[entries]]"
          hidden$="[[isLoading]]"
        ></ha-logbook>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: {
        type: Boolean,
        reflectToAttribute: true
      },
      // ISO8601 formatted date string
      _currentDate: {
        type: String,
        value: function () {
          const value = new Date();
          const today = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
          return today.toISOString().split("T")[0];
        }
      },
      _periodIndex: {
        type: Number,
        value: 0
      },
      _entityId: {
        type: String,
        value: ""
      },
      entityId: {
        type: String,
        value: "",
        readOnly: true
      },
      isLoading: {
        type: Boolean
      },
      entries: {
        type: Array
      },
      datePicker: {
        type: Object
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)"
      }
    };
  }

  ready() {
    super.ready();
    this.hass.loadBackendTranslation("title");
  }

  connectedCallback() {
    super.connectedCallback(); // We are unable to parse date because we use intl api to render date

    this.$.picker.set("i18n.parseDate", null);
    this.$.picker.set("i18n.formatDate", date => Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(date.year, date.month, date.day), this.hass.language));
  }

  _computeFilterDate(_currentDate) {
    if (!_currentDate) return undefined;

    var parts = _currentDate.split("-");

    parts[1] = parseInt(parts[1]) - 1;
    return new Date(parts[0], parts[1], parts[2]).toISOString();
  }

  _computeFilterDays(periodIndex) {
    switch (periodIndex) {
      case 1:
        return 3;

      case 2:
        return 7;

      default:
        return 1;
    }
  }

  _entityPicked(ev) {
    this._setEntityId(ev.target.value);
  }

  refreshLogbook() {
    this.shadowRoot.querySelector("ha-logbook-data").refreshLogbook();
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__["computeRTL"])(hass);
  }

}

customElements.define("ha-panel-logbook", HaPanelLogbook);

/***/ }),

/***/ "./src/resources/ha-date-picker-style.js":
/*!***********************************************!*\
  !*** ./src/resources/ha-date-picker-style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = `
<dom-module id="ha-date-picker-text-field-styles" theme-for="vaadin-text-field">
  <template>
    <style>
      :host {
        padding: 8px 0 11px 0;
        margin: 0;
      }

      [part~="label"] {
        top: 6px;
        font-size: var(--paper-font-subhead_-_font-size);
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      :host([focused]) [part~="label"] {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }

      [part~="input-field"] {
        color: var(--primary-text-color);
        top: 3px;
      }

      [part~="input-field"]::before, [part~="input-field"]::after {
        background-color: var(--paper-input-container-color, var(--secondary-text-color));
        opacity: 1;
      }

      :host([focused]) [part~="input-field"]::before, :host([focused]) [part~="input-field"]::after {
        background-color: var(--paper-input-container-focus-color, var(--primary-color));
      }

      [part~="value"] {
        font-size: var(--paper-font-subhead_-_font-size);
        height: 24px;
        padding-top: 4px;
        padding-bottom: 0;
      }
    </style>
  </template>
</dom-module>
<dom-module id="ha-date-picker-button-styles" theme-for="vaadin-button">
  <template>
    <style>
      :host([part~="today-button"]) [part~="button"]::before {
        content: "⦿";
        color: var(--primary-color);
      }

      [part~="button"] {
        font-family: inherit;
        font-size: var(--paper-font-subhead_-_font-size);
        border: none;
        background: transparent;
        cursor: pointer;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
        color: inherit;
      }

      [part~="button"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module>
<dom-module id="ha-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="vaadin-date-picker-overlay-default-theme">
      [part~="toolbar"] {
        padding: 0.3em;
        background-color: var(--secondary-background-color);
      }

      [part="years"] {
        background-color: var(--secondary-text-color);
        --material-body-text-color: var(--primary-background-color);
      }

      [part="overlay"] {
        background-color: var(--primary-background-color);
        --material-body-text-color: var(--secondary-text-color);
      }

    </style>
  </template>
</dom-module>
<dom-module id="ha-date-picker-month-styles" theme-for="vaadin-month-calendar">
  <template>
    <style include="vaadin-month-calendar-default-theme">
      [part="date"][today] {
        color: var(--primary-color);
      }
    </style>
  </template>
</dom-module>
`;
document.head.appendChild(documentContainer.content);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbG9nYm9vay5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvY2hlY2tfb3B0aW9uc19zdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb2dib29rL2hhLWxvZ2Jvb2stZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvZ2Jvb2svaGEtbG9nYm9vay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvZ2Jvb2svaGEtcGFuZWwtbG9nYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL2hhLWRhdGUtcGlja2VyLXN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIGNoZWNrVG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUb0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja1RvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgY29uc3QgdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKTtcbmV4cG9ydCBjb25zdCB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuZXhwb3J0IGNvbnN0IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuaW1wb3J0IHsgdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zIH0gZnJvbSBcIi4vY2hlY2tfb3B0aW9uc19zdXBwb3J0XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImxvbmdEYXRlXCIpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuaW1wb3J0IHsgdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zIH0gZnJvbSBcIi4vY2hlY2tfb3B0aW9uc19zdXBwb3J0XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJzaG9ydFRpbWVcIik7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lV2l0aFNlY29uZHMgPSB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcIm1lZGl1bVRpbWVcIik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgdHlwZSB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsIi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNvbnN0IERBVEFfQ0FDSEUgPSB7fTtcbmNvbnN0IEFMTF9FTlRJVElFUyA9IFwiKlwiO1xuXG5jbGFzcyBIYUxvZ2Jvb2tEYXRhIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZmlsdGVyRGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImZpbHRlckRhdGFDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBmaWx0ZXJQZXJpb2Q6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJmaWx0ZXJEYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZmlsdGVyRW50aXR5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZmlsdGVyRGF0YUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGlzTG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIGVudHJpZXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGhhc3NDaGFuZ2VkKG5ld0hhc3MsIG9sZEhhc3MpIHtcbiAgICBpZiAoIW9sZEhhc3MgJiYgdGhpcy5maWx0ZXJEYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJEYXRhQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuaGFzcykgcmV0dXJuO1xuXG4gICAgdGhpcy5fc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgdGhpcy5nZXREYXRhKHRoaXMuZmlsdGVyRGF0ZSwgdGhpcy5maWx0ZXJQZXJpb2QsIHRoaXMuZmlsdGVyRW50aXR5KS50aGVuKFxuICAgICAgKGxvZ2Jvb2tFbnRyaWVzKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldEVudHJpZXMobG9nYm9va0VudHJpZXMpO1xuICAgICAgICB0aGlzLl9zZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBnZXREYXRhKGRhdGUsIHBlcmlvZCwgZW50aXR5SWQpIHtcbiAgICBpZiAoIWVudGl0eUlkKSBlbnRpdHlJZCA9IEFMTF9FTlRJVElFUztcblxuICAgIGlmICghREFUQV9DQUNIRVtwZXJpb2RdKSBEQVRBX0NBQ0hFW3BlcmlvZF0gPSBbXTtcbiAgICBpZiAoIURBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXSkgREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdID0gW107XG5cbiAgICBpZiAoREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW2VudGl0eUlkXSkge1xuICAgICAgcmV0dXJuIERBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXVtlbnRpdHlJZF07XG4gICAgfVxuXG4gICAgaWYgKGVudGl0eUlkICE9PSBBTExfRU5USVRJRVMgJiYgREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW0FMTF9FTlRJVElFU10pIHtcbiAgICAgIHJldHVybiBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bQUxMX0VOVElUSUVTXS50aGVuKGZ1bmN0aW9uIChlbnRpdGllcykge1xuICAgICAgICByZXR1cm4gZW50aXRpZXMuZmlsdGVyKGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICAgICAgICByZXR1cm4gZW50aXR5LmVudGl0eV9pZCA9PT0gZW50aXR5SWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW2VudGl0eUlkXSA9IHRoaXMuX2dldEZyb21TZXJ2ZXIoXG4gICAgICBkYXRlLFxuICAgICAgcGVyaW9kLFxuICAgICAgZW50aXR5SWRcbiAgICApO1xuICAgIHJldHVybiBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bZW50aXR5SWRdO1xuICB9XG5cbiAgX2dldEZyb21TZXJ2ZXIoZGF0ZSwgcGVyaW9kLCBlbnRpdHlJZCkge1xuICAgIGxldCB1cmwgPSBcImxvZ2Jvb2svXCIgKyBkYXRlICsgXCI/cGVyaW9kPVwiICsgcGVyaW9kO1xuICAgIGlmIChlbnRpdHlJZCAhPT0gQUxMX0VOVElUSUVTKSB7XG4gICAgICB1cmwgKz0gXCImZW50aXR5PVwiICsgZW50aXR5SWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaGFzcy5jYWxsQXBpKFwiR0VUXCIsIHVybCkudGhlbihcbiAgICAgIGZ1bmN0aW9uIChsb2dib29rRW50cmllcykge1xuICAgICAgICBsb2dib29rRW50cmllcy5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiBsb2dib29rRW50cmllcztcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoTG9nYm9vaygpIHtcbiAgICBEQVRBX0NBQ0hFW3RoaXMuZmlsdGVyUGVyaW9kXVt0aGlzLmZpbHRlckRhdGVdID0gW107XG4gICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbG9nYm9vay1kYXRhXCIsIEhhTG9nYm9va0RhdGEpO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSBcImxpdC12aXJ0dWFsaXplclwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVcIjtcbmltcG9ydCB7IGZvcm1hdFRpbWVXaXRoU2Vjb25kcyB9IGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgc3RhdGVJY29uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5pbXBvcnQgeyBMb2dib29rRW50cnkgfSBmcm9tIFwiLi4vLi4vZGF0YS9sb2dib29rXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmNsYXNzIEhhTG9nYm9vayBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGVudHJpZXM6IExvZ2Jvb2tFbnRyeVtdID0gW107XG5cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcInJ0bFwiLCB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHJpdmF0ZSBfcnRsID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgbGFuZ3VhZ2VDaGFuZ2VkID1cbiAgICAgIG9sZEhhc3MgPT09IHVuZGVmaW5lZCB8fCBvbGRIYXNzLmxhbmd1YWdlICE9PSB0aGlzLmhhc3MubGFuZ3VhZ2U7XG4gICAgcmV0dXJuIGNoYW5nZWRQcm9wcy5oYXMoXCJlbnRyaWVzXCIpIHx8IGxhbmd1YWdlQ2hhbmdlZDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKF9jaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgdGhpcy5fcnRsID0gY29tcHV0ZVJUTCh0aGlzLmhhc3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmVudHJpZXM/Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmxvZ2Jvb2suZW50cmllc19ub3RfZm91bmRcIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgJHtzY3JvbGwoe1xuICAgICAgICAgIGl0ZW1zOiB0aGlzLmVudHJpZXMsXG4gICAgICAgICAgcmVuZGVySXRlbTogKGl0ZW06IExvZ2Jvb2tFbnRyeSwgaW5kZXg/OiBudW1iZXIpID0+XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJMb2dib29rSXRlbShpdGVtLCBpbmRleCksXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlckxvZ2Jvb2tJdGVtKFxuICAgIGl0ZW06IExvZ2Jvb2tFbnRyeSxcbiAgICBpbmRleD86IG51bWJlclxuICApOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5lbnRyaWVzW2luZGV4IC0gMV07XG4gICAgY29uc3Qgc3RhdGUgPSBpdGVtLmVudGl0eV9pZCA/IHRoaXMuaGFzcy5zdGF0ZXNbaXRlbS5lbnRpdHlfaWRdIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdj5cbiAgICAgICAgJHtpbmRleCA9PT0gMCB8fFxuICAgICAgICAoaXRlbT8ud2hlbiAmJlxuICAgICAgICAgIHByZXZpb3VzPy53aGVuICYmXG4gICAgICAgICAgbmV3IERhdGUoaXRlbS53aGVuKS50b0RhdGVTdHJpbmcoKSAhPT1cbiAgICAgICAgICAgIG5ldyBEYXRlKHByZXZpb3VzLndoZW4pLnRvRGF0ZVN0cmluZygpKVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICR7Zm9ybWF0RGF0ZShuZXcgRGF0ZShpdGVtLndoZW4pLCB0aGlzLmhhc3MubGFuZ3VhZ2UpfVxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBgfVxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnRyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+XG4gICAgICAgICAgICAke2Zvcm1hdFRpbWVXaXRoU2Vjb25kcyhuZXcgRGF0ZShpdGVtLndoZW4pLCB0aGlzLmhhc3MubGFuZ3VhZ2UpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoYS1pY29uXG4gICAgICAgICAgICAuaWNvbj0ke3N0YXRlID8gc3RhdGVJY29uKHN0YXRlKSA6IGRvbWFpbkljb24oaXRlbS5kb21haW4pfVxuICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICR7IWl0ZW0uZW50aXR5X2lkXG4gICAgICAgICAgICAgID8gaHRtbGAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtpdGVtLm5hbWV9PC9zcGFuPiBgXG4gICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fZW50aXR5Q2xpY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7aXRlbS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8c3Bhbj4ke2l0ZW0ubWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2VudGl0eUNsaWNrZWQoZXY6IEV2ZW50KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZDogKGV2LnRhcmdldCBhcyBhbnkpLmVudGl0eUlkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcnRsXSkge1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgIH1cblxuICAgICAgLmVudHJ5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgIH1cblxuICAgICAgLnRpbWUge1xuICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtydGxdKSAuZGF0ZSB7XG4gICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgfVxuXG4gICAgICBoYS1pY29uIHtcbiAgICAgICAgbWFyZ2luOiAwIDhweCAwIDE2cHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgIH1cblxuICAgICAgLnVuaS12aXJ0dWFsaXplci1ob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29udGFpbjogc3RyaWN0O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAudW5pLXZpcnR1YWxpemVyLWhvc3QgPiAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWxvZ2Jvb2tcIiwgSGFMb2dib29rKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlclwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1kYXRlLXBpY2tlci1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuL2hhLWxvZ2Jvb2tcIjtcbmltcG9ydCBcIi4vaGEtbG9nYm9vay1kYXRhXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFQYW5lbExvZ2Jvb2sgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIGhhLWxvZ2Jvb2sge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEzNnB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtuYXJyb3ddKSBoYS1sb2dib29rIHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxOThweCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXAge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsdGVycyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW25hcnJvd10pIC5maWx0ZXJzIHtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICB2YWFkaW4tZGF0ZS1waWNrZXIge1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHZhYWRpbi1kYXRlLXBpY2tlciB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmc6IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXBhcGVyLWlucHV0LXN1ZmZpeDoge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBwYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWVudGl0eS1waWNrZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAtLXBhcGVyLWlucHV0LXN1ZmZpeDoge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtuYXJyb3ddKSBoYS1lbnRpdHktcGlja2VyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtbG9nYm9vay1kYXRhXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIGlzLWxvYWRpbmc9XCJ7e2lzTG9hZGluZ319XCJcbiAgICAgICAgZW50cmllcz1cInt7ZW50cmllc319XCJcbiAgICAgICAgZmlsdGVyLWRhdGU9XCJbW19jb21wdXRlRmlsdGVyRGF0ZShfY3VycmVudERhdGUpXV1cIlxuICAgICAgICBmaWx0ZXItcGVyaW9kPVwiW1tfY29tcHV0ZUZpbHRlckRheXMoX3BlcmlvZEluZGV4KV1dXCJcbiAgICAgICAgZmlsdGVyLWVudGl0eT1cIltbZW50aXR5SWRdXVwiXG4gICAgICA+PC9oYS1sb2dib29rLWRhdGE+XG5cbiAgICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPltbbG9jYWxpemUoJ3BhbmVsLmxvZ2Jvb2snKV1dPC9kaXY+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cmVmcmVzaFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwicmVmcmVzaExvZ2Jvb2tcIlxuICAgICAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICBhY3RpdmU9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1shaXNMb2FkaW5nXV1cIlxuICAgICAgICAgIGFsdD1cIltbbG9jYWxpemUoJ3VpLmNvbW1vbi5sb2FkaW5nJyldXVwiXG4gICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcnNcIj5cbiAgICAgICAgICA8dmFhZGluLWRhdGUtcGlja2VyXG4gICAgICAgICAgICBpZD1cInBpY2tlclwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7X2N1cnJlbnREYXRlfX1cIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5sb2dib29rLnNob3dpbmdfZW50cmllcycpXV1cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgPjwvdmFhZGluLWRhdGUtcGlja2VyPlxuXG4gICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmxvZ2Jvb2sucGVyaW9kJyldXVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNMb2FkaW5nXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCIgc2VsZWN0ZWQ9XCJ7e19wZXJpb2RJbmRleH19XCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLmRheScsICdjb3VudCcsIDEpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi5kYXknLCAnY291bnQnLCAzKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24ud2VlaycsICdjb3VudCcsIDEpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cblxuICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e19lbnRpdHlJZH19XCJcbiAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY29tcG9uZW50cy5lbnRpdHkuZW50aXR5LXBpY2tlci5lbnRpdHknKV1dXCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICBvbi1jaGFuZ2U9XCJfZW50aXR5UGlja2VkXCJcbiAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aGEtbG9nYm9va1xuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZW50cmllcz1cIltbZW50cmllc11dXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgID48L2hhLWxvZ2Jvb2s+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbmFycm93OiB7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSB9LFxuXG4gICAgICAvLyBJU084NjAxIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICAgICAgX2N1cnJlbnREYXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIERhdGUuVVRDKHZhbHVlLmdldEZ1bGxZZWFyKCksIHZhbHVlLmdldE1vbnRoKCksIHZhbHVlLmdldERhdGUoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIF9wZXJpb2RJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcblxuICAgICAgX2VudGl0eUlkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlJZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIGlzTG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcblxuICAgICAgZW50cmllczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgIH0sXG5cbiAgICAgIGRhdGVQaWNrZXI6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5oYXNzLmxvYWRCYWNrZW5kVHJhbnNsYXRpb24oXCJ0aXRsZVwiKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gV2UgYXJlIHVuYWJsZSB0byBwYXJzZSBkYXRlIGJlY2F1c2Ugd2UgdXNlIGludGwgYXBpIHRvIHJlbmRlciBkYXRlXG4gICAgdGhpcy4kLnBpY2tlci5zZXQoXCJpMThuLnBhcnNlRGF0ZVwiLCBudWxsKTtcbiAgICB0aGlzLiQucGlja2VyLnNldChcImkxOG4uZm9ybWF0RGF0ZVwiLCAoZGF0ZSkgPT5cbiAgICAgIGZvcm1hdERhdGUobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksIHRoaXMuaGFzcy5sYW5ndWFnZSlcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVGaWx0ZXJEYXRlKF9jdXJyZW50RGF0ZSkge1xuICAgIGlmICghX2N1cnJlbnREYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJ0cyA9IF9jdXJyZW50RGF0ZS5zcGxpdChcIi1cIik7XG4gICAgcGFydHNbMV0gPSBwYXJzZUludChwYXJ0c1sxXSkgLSAxO1xuICAgIHJldHVybiBuZXcgRGF0ZShwYXJ0c1swXSwgcGFydHNbMV0sIHBhcnRzWzJdKS50b0lTT1N0cmluZygpO1xuICB9XG5cbiAgX2NvbXB1dGVGaWx0ZXJEYXlzKHBlcmlvZEluZGV4KSB7XG4gICAgc3dpdGNoIChwZXJpb2RJbmRleCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cblxuICBfZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5fc2V0RW50aXR5SWQoZXYudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHJlZnJlc2hMb2dib29rKCkge1xuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiaGEtbG9nYm9vay1kYXRhXCIpLnJlZnJlc2hMb2dib29rKCk7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwtbG9nYm9va1wiLCBIYVBhbmVsTG9nYm9vayk7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbmRvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItdGV4dC1maWVsZC1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tdGV4dC1maWVsZFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiA4cHggMCAxMXB4IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwibGFiZWxcIl0ge1xuICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0fj1cImxhYmVsXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiaW5wdXQtZmllbGRcIl06OmJlZm9yZSwgW3BhcnR+PVwiaW5wdXQtZmllbGRcIl06OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdOjpiZWZvcmUsIDpob3N0KFtmb2N1c2VkXSkgW3BhcnR+PVwiaW5wdXQtZmllbGRcIl06OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInZhbHVlXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLWJ1dHRvbi1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tYnV0dG9uXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdChbcGFydH49XCJ0b2RheS1idXR0b25cIl0pIFtwYXJ0fj1cImJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCLipr9cIjtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJidXR0b25cIl0ge1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiYnV0dG9uXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPGRvbS1tb2R1bGUgaWQ9XCJoYS1kYXRlLXBpY2tlci1vdmVybGF5LXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWRlZmF1bHQtdGhlbWVcIj5cbiAgICAgIFtwYXJ0fj1cInRvb2xiYXJcIl0ge1xuICAgICAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAtLW1hdGVyaWFsLWJvZHktdGV4dC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLW1vbnRoLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1tb250aC1jYWxlbmRhclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tbW9udGgtY2FsZW5kYXItZGVmYXVsdC10aGVtZVwiPlxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3RvZGF5XSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuYDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUlBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBNUJBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0dBO0FBQ0E7QUFnSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7OztBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFFQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7O0FBRkE7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRkE7O0FBRkE7QUFTQTs7OztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBT0E7O0FBUEE7QUFDQTs7O0FBYUE7OztBQUdBOzs7QUFHQTs7O0FBS0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7OztBQWxDQTtBQXVDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3REE7OztBQTFKQTtBQUNBO0FBNEpBOzs7Ozs7Ozs7Ozs7QUNqTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUE3Q0E7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBalFBO0FBQ0E7QUFrUUE7Ozs7Ozs7Ozs7O0FDMVJBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
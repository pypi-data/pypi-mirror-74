(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-script"],{

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

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: formatDateTime, formatDateTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTime", function() { return formatDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTimeWithSeconds", function() { return formatDateTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDateTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.shortTime}`);
const formatDateTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.mediumTime}`);

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: findBatteryEntity, computeEntityRegistryName, getExtendedEntityRegistryEntry, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBatteryEntity", function() { return findBatteryEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtendedEntityRegistryEntry", function() { return getExtendedEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const findBatteryEntity = (hass, entities) => entities.find(entity => hass.states[entity.entity_id] && hass.states[entity.entity_id].attributes.device_class === "battery");
const computeEntityRegistryName = (hass, entry) => {
  if (entry.name) {
    return entry.name;
  }

  const state = hass.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const getExtendedEntityRegistryEntry = (hass, entityId) => hass.callWS({
  type: "config/entity_registry/get",
  entity_id: entityId
});
const updateEntityRegistryEntry = (hass, entityId, updates) => hass.callWS(Object.assign({
  type: "config/entity_registry/update",
  entity_id: entityId
}, updates));
const removeEntityRegistryEntry = (hass, entityId) => hass.callWS({
  type: "config/entity_registry/remove",
  entity_id: entityId
});

const fetchEntityRegistry = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then(entities => store.setState(entities, true)), 500, true), "entity_registry_updated");

const subscribeEntityRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/script.ts":
/*!****************************!*\
  !*** ./src/data/script.ts ***!
  \****************************/
/*! exports provided: triggerScript, deleteScript, showScriptEditor, getScriptEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerScript", function() { return triggerScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScript", function() { return deleteScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showScriptEditor", function() { return showScriptEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScriptEditorInitData", function() { return getScriptEditorInitData; });
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");


const triggerScript = (hass, entityId, variables) => hass.callService("script", Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(entityId), variables);
const deleteScript = (hass, objectId) => hass.callApi("DELETE", `config/script/config/${objectId}`);
let inititialScriptEditorData;
const showScriptEditor = (el, data) => {
  inititialScriptEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(el, "/config/script/edit/new");
};
const getScriptEditorInitData = () => {
  const data = inititialScriptEditorData;
  inititialScriptEditorData = undefined;
  return data;
};

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

/***/ "./src/panels/config/script/ha-config-script.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-config-script.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var _ha_script_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-script-editor */ "./src/panels/config/script/ha-script-editor.ts");
/* harmony import */ var _ha_script_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-script-picker */ "./src/panels/config/script/ha-script-picker.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/util/debounce */ "./src/common/util/debounce.ts");
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









const equal = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  return a.every((enityA, index) => enityA === b[index]);
};

let HaConfigScript = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-config-script")], function (_initialize, _HassRouterPage) {
  class HaConfigScript extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigScript,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "scripts",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboard",
          routes: {
            dashboard: {
              tag: "ha-script-picker",
              cache: true
            },
            edit: {
              tag: "ha-script-editor"
            }
          }
        };
      }

    }, {
      kind: "field",
      key: "_debouncedUpdateScripts",

      value() {
        return Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_6__["debounce"])(pageEl => {
          const newScript = this._getScripts(this.hass.states);

          if (!equal(newScript, pageEl.scripts)) {
            pageEl.scripts = newScript;
          }
        }, 10);
      }

    }, {
      kind: "field",
      key: "_getScripts",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(states => {
          return Object.values(states).filter(entity => Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__["computeStateDomain"])(entity) === "script" && !entity.attributes.hidden);
        });
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaConfigScript.prototype), "firstUpdated", this).call(this, changedProps);

        this.hass.loadBackendTranslation("device_automation");
      }
    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(pageEl, changedProps) {
        pageEl.hass = this.hass;
        pageEl.narrow = this.narrow;
        pageEl.isWide = this.isWide;
        pageEl.route = this.routeTail;
        pageEl.showAdvanced = this.showAdvanced;

        if (this.hass) {
          if (!pageEl.scripts || !changedProps) {
            pageEl.scripts = this._getScripts(this.hass.states);
          } else if (changedProps && changedProps.has("hass")) {
            this._debouncedUpdateScripts(pageEl);
          }
        }

        if ((!changedProps || changedProps.has("route")) && this._currentPage === "edit") {
          pageEl.creatingNew = undefined;
          const scriptEntityId = this.routeTail.path.substr(1);
          pageEl.scriptEntityId = scriptEntityId === "new" ? null : scriptEntityId;
        }
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__["HassRouterPage"]);

/***/ }),

/***/ "./src/panels/config/script/ha-script-editor.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-editor.ts ***!
  \******************************************************/
/*! exports provided: HaScriptEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaScriptEditor", function() { return HaScriptEditor; });
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _automation_action_ha_automation_action__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../automation/action/ha-automation-action */ "./src/panels/config/automation/action/ha-automation-action.ts");
/* harmony import */ var _automation_action_types_ha_automation_action_device_id__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../automation/action/types/ha-automation-action-device_id */ "./src/panels/config/automation/action/types/ha-automation-action-device_id.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
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




















let HaScriptEditor = _decorate(null, function (_initialize, _LitElement) {
  class HaScriptEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaScriptEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "scriptEntityId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_dirty",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_errors",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$_config;

        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <hass-tabs-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        .backCallback=${() => this._backTapped()}
        .tabs=${_ha_panel_config__WEBPACK_IMPORTED_MODULE_18__["configSections"].automation}
      >
        ${!this.scriptEntityId ? "" : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
              <paper-icon-button
                slot="toolbar-icon"
                title="${this.hass.localize("ui.panel.config.script.editor.delete_script")}"
                icon="hass:delete"
                @click=${this._deleteConfirm}
              ></paper-icon-button>
            `}
        ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]` <span slot="header">${(_this$_config = this._config) === null || _this$_config === void 0 ? void 0 : _this$_config.alias}</span> ` : ""}
        <div class="content">
          ${this._errors ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]` <div class="errors">${this._errors}</div> ` : ""}
          <div
            class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(this.hass)
        })}"
          >
            ${this._config ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  <ha-config-section .isWide=${this.isWide}>
                    ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]` <span slot="header">${this._config.alias}</span> ` : ""}
                    <span slot="introduction">
                      ${this.hass.localize("ui.panel.config.script.editor.introduction")}
                    </span>
                    <ha-card>
                      <div class="card-content">
                        <paper-input
                          .label=${this.hass.localize("ui.panel.config.script.editor.alias")}
                          name="alias"
                          .value=${this._config.alias}
                          @value-changed=${this._valueChanged}
                        >
                        </paper-input>
                      </div>
                    </ha-card>
                  </ha-config-section>

                  <ha-config-section .isWide=${this.isWide}>
                    <span slot="header">
                      ${this.hass.localize("ui.panel.config.script.editor.sequence")}
                    </span>
                    <span slot="introduction">
                      <p>
                        ${this.hass.localize("ui.panel.config.script.editor.sequence_sentence")}
                      </p>
                      <a
                        href="https://home-assistant.io/docs/scripts/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ${this.hass.localize("ui.panel.config.script.editor.link_available_actions")}
                      </a>
                    </span>
                    <ha-automation-action
                      .actions=${this._config.sequence}
                      @value-changed=${this._sequenceChanged}
                      .hass=${this.hass}
                    ></ha-automation-action>
                  </ha-config-section>
                ` : ""}
          </div>
        </div>
        <ha-fab
          ?is-wide=${this.isWide}
          ?narrow=${this.narrow}
          ?dirty=${this._dirty}
          icon="hass:content-save"
          .title="${this.hass.localize("ui.common.save")}"
          @click=${this._saveScript}
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(this.hass)
        })}"
        ></ha-fab>
      </hass-tabs-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaScriptEditor.prototype), "updated", this).call(this, changedProps);

        const oldScript = changedProps.get("scriptEntityId");

        if (changedProps.has("scriptEntityId") && this.scriptEntityId && this.hass && ( // Only refresh config if we picked a new script. If same ID, don't fetch it.
        !oldScript || oldScript !== this.scriptEntityId)) {
          this.hass.callApi("GET", `config/script/config/${Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_5__["computeObjectId"])(this.scriptEntityId)}`).then(config => {
            // Normalize data: ensure sequence is a list
            // Happens when people copy paste their scripts into the config
            const value = config.sequence;

            if (value && !Array.isArray(value)) {
              config.sequence = [value];
            }

            this._dirty = false;
            this._config = config;
          }, resp => {
            alert(resp.status_code === 404 ? this.hass.localize("ui.panel.config.script.editor.load_error_not_editable") : this.hass.localize("ui.panel.config.script.editor.load_error_unknown", "err_no", resp.status_code));
            history.back();
          });
        }

        if (changedProps.has("scriptEntityId") && !this.scriptEntityId && this.hass) {
          const initData = Object(_data_script__WEBPACK_IMPORTED_MODULE_11__["getScriptEditorInitData"])();
          this._dirty = !!initData;
          this._config = Object.assign({
            alias: this.hass.localize("ui.panel.config.script.editor.default_name"),
            sequence: [Object.assign({}, _automation_action_types_ha_automation_action_device_id__WEBPACK_IMPORTED_MODULE_16__["HaDeviceAction"].defaultConfig)]
          }, initData);
        }
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        var _ref;

        ev.stopPropagation();
        const name = (_ref = ev.target) === null || _ref === void 0 ? void 0 : _ref.name;

        if (!name) {
          return;
        }

        const newVal = ev.detail.value;

        if ((this._config[name] || "") === newVal) {
          return;
        }

        this._config = Object.assign({}, this._config, {
          [name]: newVal
        });
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_sequenceChanged",
      value: function _sequenceChanged(ev) {
        this._config = Object.assign({}, this._config, {
          sequence: ev.detail.value
        });
        this._errors = undefined;
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_backTapped",
      value: function _backTapped() {
        if (this._dirty) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__["showConfirmationDialog"])(this, {
            text: this.hass.localize("ui.panel.config.common.editor.confirm_unsaved"),
            confirmText: this.hass.localize("ui.common.yes"),
            dismissText: this.hass.localize("ui.common.no"),
            confirm: () => history.back()
          });
        } else {
          history.back();
        }
      }
    }, {
      kind: "method",
      key: "_deleteConfirm",
      value: async function _deleteConfirm() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__["showConfirmationDialog"])(this, {
          text: this.hass.localize("ui.panel.config.script.editor.delete_confirm"),
          confirmText: this.hass.localize("ui.common.yes"),
          dismissText: this.hass.localize("ui.common.no"),
          confirm: () => this._delete()
        });
      }
    }, {
      kind: "method",
      key: "_delete",
      value: async function _delete() {
        await Object(_data_script__WEBPACK_IMPORTED_MODULE_11__["deleteScript"])(this.hass, Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_5__["computeObjectId"])(this.scriptEntityId));
        history.back();
      }
    }, {
      kind: "method",
      key: "_saveScript",
      value: function _saveScript() {
        const id = this.scriptEntityId ? Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_5__["computeObjectId"])(this.scriptEntityId) : Date.now();
        this.hass.callApi("POST", "config/script/config/" + id, this._config).then(() => {
          this._dirty = false;

          if (!this.scriptEntityId) {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_6__["navigate"])(this, `/config/script/edit/${id}`, true);
          }
        }, errors => {
          this._errors = errors.body.message;
          throw errors;
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_14__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        ha-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        ha-fab[narrow] {
          bottom: 84px;
          margin-bottom: -140px;
        }
        ha-fab[dirty] {
          margin-bottom: 0;
        }

        ha-fab.rtl {
          right: auto;
          left: 16px;
        }

        ha-fab[is-wide].rtl {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);
customElements.define("ha-script-editor", HaScriptEditor);

/***/ }),

/***/ "./src/panels/config/script/ha-script-picker.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-picker.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_hass_tabs_subpage_data_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layouts/hass-tabs-subpage-data-table */ "./src/layouts/hass-tabs-subpage-data-table.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/toast */ "./src/util/toast.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
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
















let HaScriptPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-script-picker")], function (_initialize, _LitElement) {
  class HaScriptPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaScriptPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "scripts",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      key: "_scripts",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(scripts => {
          return scripts.map(script => {
            return Object.assign({}, script, {
              name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(script)
            });
          });
        });
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(_language => {
          return {
            activate: {
              title: "",
              type: "icon-button",
              template: (_toggle, script) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <paper-icon-button
                .script=${script}
                icon="hass:play"
                title="${this.hass.localize("ui.panel.config.script.picker.activate_script")}"
                @click=${ev => this._runScript(ev)}
              ></paper-icon-button>
            `
            },
            name: {
              title: this.hass.localize("ui.panel.config.script.picker.headers.name"),
              sortable: true,
              filterable: true,
              direction: "asc",
              grows: true,
              template: (name, script) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            ${name}
            <div class="secondary">
              ${this.hass.localize("ui.card.automation.last_triggered")}:
              ${script.attributes.last_triggered ? Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__["formatDateTime"])(new Date(script.attributes.last_triggered), this.hass.language) : this.hass.localize("ui.components.relative_time.never")}
            </div>
          `
            },
            info: {
              title: "",
              type: "icon-button",
              template: (_info, script) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <paper-icon-button
              .script=${script}
              @click=${this._showInfo}
              icon="hass:information-outline"
              title="${this.hass.localize("ui.panel.config.script.picker.show_info")}"
            ></paper-icon-button>
          `
            },
            edit: {
              title: "",
              type: "icon-button",
              template: (_info, script) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <a href="/config/script/edit/${script.entity_id}">
              <paper-icon-button
                icon="hass:pencil"
                title="${this.hass.localize("ui.panel.config.script.picker.edit_script")}"
              ></paper-icon-button>
            </a>
          `
            }
          };
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${_ha_panel_config__WEBPACK_IMPORTED_MODULE_13__["configSections"].automation}
        .columns=${this._columns(this.hass.language)}
        .data=${this._scripts(this.scripts)}
        id="entity_id"
        .noDataText=${this.hass.localize("ui.panel.config.script.picker.no_scripts")}
        hasFab
      >
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:help-circle"
          @click=${this._showHelp}
        ></paper-icon-button>
      </hass-tabs-subpage-data-table>
      <a href="/config/script/edit/new">
        <ha-fab
          ?is-wide=${this.isWide}
          ?narrow=${this.narrow}
          icon="hass:plus"
          title="${this.hass.localize("ui.panel.config.script.picker.add_script")}"
          ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(this.hass)}
        ></ha-fab>
      </a>
    `;
      }
    }, {
      kind: "method",
      key: "_runScript",
      value: async function _runScript(ev) {
        ev.stopPropagation();
        const script = ev.currentTarget.script;
        await Object(_data_script__WEBPACK_IMPORTED_MODULE_8__["triggerScript"])(this.hass, script.entity_id);
        Object(_util_toast__WEBPACK_IMPORTED_MODULE_12__["showToast"])(this, {
          message: this.hass.localize("ui.notification_toast.triggered", "name", Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(script))
        });
      }
    }, {
      kind: "method",
      key: "_showInfo",
      value: function _showInfo(ev) {
        ev.stopPropagation();
        const entityId = ev.currentTarget.script.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_showHelp",
      value: function _showHelp() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_9__["showAlertDialog"])(this, {
          title: this.hass.localize("ui.panel.config.script.caption"),
          text: lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        ${this.hass.localize("ui.panel.config.script.picker.introduction")}
        <p>
          <a
            href="https://home-assistant.io/docs/scripts/editor/"
            target="_blank"
            rel="noreferrer"
          >
            ${this.hass.localize("ui.panel.config.script.picker.learn_more")}
          </a>
        </p>
      `
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        ha-fab[narrow] {
          bottom: 84px;
        }
        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }

        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvY2hlY2tfb3B0aW9uc19zdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2NyaXB0L2hhLWNvbmZpZy1zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2NyaXB0L2hhLXNjcmlwdC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2NyaXB0L2hhLXNjcmlwdC1waWNrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gY2hlY2tUb0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja1RvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuZXhwb3J0IGNvbnN0IHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9IGNoZWNrVG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKCk7XG5leHBvcnQgY29uc3QgdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCk7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5pbXBvcnQgeyB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyB9IGZyb20gXCIuL2NoZWNrX29wdGlvbnNfc3VwcG9ydFwiO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZVRpbWUgPSB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9uc1xuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PlxuICAgICAgZmVjaGEuZm9ybWF0KFxuICAgICAgICBkYXRlT2JqLFxuICAgICAgICBgJHtmZWNoYS5tYXNrcy5sb25nRGF0ZX0sICR7ZmVjaGEubWFza3Muc2hvcnRUaW1lfWBcbiAgICAgICk7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlVGltZVdpdGhTZWNvbmRzID0gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT5cbiAgICAgIGZlY2hhLmZvcm1hdChcbiAgICAgICAgZGF0ZU9iaixcbiAgICAgICAgYCR7ZmVjaGEubWFza3MubG9uZ0RhdGV9LCAke2ZlY2hhLm1hc2tzLm1lZGl1bVRpbWV9YFxuICAgICAgKTtcbiIsImltcG9ydCB7IENvbm5lY3Rpb24sIGNyZWF0ZUNvbGxlY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnkge1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xuICBjb25maWdfZW50cnlfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV9pZD86IHN0cmluZztcbiAgZGlzYWJsZWRfYnk6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0RW50aXR5UmVnaXN0cnlFbnRyeSBleHRlbmRzIEVudGl0eVJlZ2lzdHJ5RW50cnkge1xuICB1bmlxdWVfaWQ6IHN0cmluZztcbiAgY2FwYWJpbGl0aWVzOiBvYmplY3Q7XG4gIG9yaWdpbmFsX25hbWU/OiBzdHJpbmc7XG4gIG9yaWdpbmFsX2ljb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcyB7XG4gIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICBpY29uPzogc3RyaW5nIHwgbnVsbDtcbiAgZGlzYWJsZWRfYnk/OiBzdHJpbmcgfCBudWxsO1xuICBuZXdfZW50aXR5X2lkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZmluZEJhdHRlcnlFbnRpdHkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W11cbik6IEVudGl0eVJlZ2lzdHJ5RW50cnkgfCB1bmRlZmluZWQgPT5cbiAgZW50aXRpZXMuZmluZChcbiAgICAoZW50aXR5KSA9PlxuICAgICAgaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF0gJiZcbiAgICAgIGhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzID09PSBcImJhdHRlcnlcIlxuICApO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50cnk6IEVudGl0eVJlZ2lzdHJ5RW50cnlcbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoZW50cnkubmFtZSkge1xuICAgIHJldHVybiBlbnRyeS5uYW1lO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50cnkuZW50aXR5X2lkXTtcbiAgcmV0dXJuIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEV4dGVuZGVkRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxFeHRFbnRpdHlSZWdpc3RyeUVudHJ5PiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2dldFwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPlxuKTogUHJvbWlzZTxFeHRFbnRpdHlSZWdpc3RyeUVudHJ5PiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvcmVtb3ZlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRW50aXR5UmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hFbnRpdHlSZWdpc3RyeShjb25uKS50aGVuKChlbnRpdGllcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShlbnRpdGllcywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiZW50aXR5X3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEVudGl0eVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZW50aXR5UmVnaXN0cnlcIixcbiAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSxcbiAgSGFzc0VudGl0eUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gXCIuL2F1dG9tYXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBTY3JpcHRFbnRpdHkgZXh0ZW5kcyBIYXNzRW50aXR5QmFzZSB7XG4gIGF0dHJpYnV0ZXM6IEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlICYge1xuICAgIGxhc3RfdHJpZ2dlcmVkOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NyaXB0Q29uZmlnIHtcbiAgYWxpYXM6IHN0cmluZztcbiAgc2VxdWVuY2U6IEFjdGlvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50QWN0aW9uIHtcbiAgZXZlbnQ6IHN0cmluZztcbiAgZXZlbnRfZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIGV2ZW50X2RhdGFfdGVtcGxhdGU/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VBY3Rpb24ge1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIGVudGl0eV9pZD86IHN0cmluZztcbiAgZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlQWN0aW9uIHtcbiAgZGV2aWNlX2lkOiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxheUFjdGlvbiB7XG4gIGRlbGF5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmVBY3Rpb24ge1xuICBzY2VuZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhaXRBY3Rpb24ge1xuICB3YWl0X3RlbXBsYXRlOiBzdHJpbmc7XG4gIHRpbWVvdXQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbiA9XG4gIHwgRXZlbnRBY3Rpb25cbiAgfCBEZXZpY2VBY3Rpb25cbiAgfCBTZXJ2aWNlQWN0aW9uXG4gIHwgQ29uZGl0aW9uXG4gIHwgRGVsYXlBY3Rpb25cbiAgfCBTY2VuZUFjdGlvblxuICB8IFdhaXRBY3Rpb247XG5cbmV4cG9ydCBjb25zdCB0cmlnZ2VyU2NyaXB0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB2YXJpYWJsZXM/OiB7fVxuKSA9PiBoYXNzLmNhbGxTZXJ2aWNlKFwic2NyaXB0XCIsIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZCksIHZhcmlhYmxlcyk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTY3JpcHQgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgb2JqZWN0SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvc2NyaXB0L2NvbmZpZy8ke29iamVjdElkfWApO1xuXG5sZXQgaW5pdGl0aWFsU2NyaXB0RWRpdG9yRGF0YTogUGFydGlhbDxTY3JpcHRDb25maWc+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3Qgc2hvd1NjcmlwdEVkaXRvciA9IChcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBkYXRhPzogUGFydGlhbDxTY3JpcHRDb25maWc+XG4pID0+IHtcbiAgaW5pdGl0aWFsU2NyaXB0RWRpdG9yRGF0YSA9IGRhdGE7XG4gIG5hdmlnYXRlKGVsLCBcIi9jb25maWcvc2NyaXB0L2VkaXQvbmV3XCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNjcmlwdEVkaXRvckluaXREYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gaW5pdGl0aWFsU2NyaXB0RWRpdG9yRGF0YTtcbiAgaW5pdGl0aWFsU2NyaXB0RWRpdG9yRGF0YSA9IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIFByb3BlcnR5VmFsdWVzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQge1xuICBIYXNzUm91dGVyUGFnZSxcbiAgUm91dGVyT3B0aW9ucyxcbn0gZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9oYS1zY3JpcHQtZWRpdG9yXCI7XG5pbXBvcnQgXCIuL2hhLXNjcmlwdC1waWNrZXJcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBTY3JpcHRFbnRpdHkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcblxuY29uc3QgZXF1YWwgPSAoYTogU2NyaXB0RW50aXR5W10sIGI6IFNjcmlwdEVudGl0eVtdKTogYm9vbGVhbiA9PiB7XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGEuZXZlcnkoKGVuaXR5QSwgaW5kZXgpID0+IGVuaXR5QSA9PT0gYltpbmRleF0pO1xufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctc2NyaXB0XCIpXG5jbGFzcyBIYUNvbmZpZ1NjcmlwdCBleHRlbmRzIEhhc3NSb3V0ZXJQYWdlIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzaG93QWR2YW5jZWQhOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY3JpcHRzOiBTY3JpcHRFbnRpdHlbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImRhc2hib2FyZFwiLFxuICAgIHJvdXRlczoge1xuICAgICAgZGFzaGJvYXJkOiB7XG4gICAgICAgIHRhZzogXCJoYS1zY3JpcHQtcGlja2VyXCIsXG4gICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGVkaXQ6IHtcbiAgICAgICAgdGFnOiBcImhhLXNjcmlwdC1lZGl0b3JcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBwcml2YXRlIF9kZWJvdW5jZWRVcGRhdGVTY3JpcHRzID0gZGVib3VuY2UoKHBhZ2VFbCkgPT4ge1xuICAgIGNvbnN0IG5ld1NjcmlwdCA9IHRoaXMuX2dldFNjcmlwdHModGhpcy5oYXNzLnN0YXRlcyk7XG4gICAgaWYgKCFlcXVhbChuZXdTY3JpcHQsIHBhZ2VFbC5zY3JpcHRzKSkge1xuICAgICAgcGFnZUVsLnNjcmlwdHMgPSBuZXdTY3JpcHQ7XG4gICAgfVxuICB9LCAxMCk7XG5cbiAgcHJpdmF0ZSBfZ2V0U2NyaXB0cyA9IG1lbW9pemVPbmUoKHN0YXRlczogSGFzc0VudGl0aWVzKTogU2NyaXB0RW50aXR5W10gPT4ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHN0YXRlcykuZmlsdGVyKFxuICAgICAgKGVudGl0eSkgPT5cbiAgICAgICAgY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSkgPT09IFwic2NyaXB0XCIgJiYgIWVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlblxuICAgICkgYXMgU2NyaXB0RW50aXR5W107XG4gIH0pO1xuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5oYXNzLmxvYWRCYWNrZW5kVHJhbnNsYXRpb24oXCJkZXZpY2VfYXV0b21hdGlvblwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVQYWdlRWwocGFnZUVsLCBjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgcGFnZUVsLmhhc3MgPSB0aGlzLmhhc3M7XG4gICAgcGFnZUVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgIHBhZ2VFbC5pc1dpZGUgPSB0aGlzLmlzV2lkZTtcbiAgICBwYWdlRWwucm91dGUgPSB0aGlzLnJvdXRlVGFpbDtcbiAgICBwYWdlRWwuc2hvd0FkdmFuY2VkID0gdGhpcy5zaG93QWR2YW5jZWQ7XG5cbiAgICBpZiAodGhpcy5oYXNzKSB7XG4gICAgICBpZiAoIXBhZ2VFbC5zY3JpcHRzIHx8ICFjaGFuZ2VkUHJvcHMpIHtcbiAgICAgICAgcGFnZUVsLnNjcmlwdHMgPSB0aGlzLl9nZXRTY3JpcHRzKHRoaXMuaGFzcy5zdGF0ZXMpO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2VkUHJvcHMgJiYgY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikpIHtcbiAgICAgICAgdGhpcy5fZGVib3VuY2VkVXBkYXRlU2NyaXB0cyhwYWdlRWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICghY2hhbmdlZFByb3BzIHx8IGNoYW5nZWRQcm9wcy5oYXMoXCJyb3V0ZVwiKSkgJiZcbiAgICAgIHRoaXMuX2N1cnJlbnRQYWdlID09PSBcImVkaXRcIlxuICAgICkge1xuICAgICAgcGFnZUVsLmNyZWF0aW5nTmV3ID0gdW5kZWZpbmVkO1xuICAgICAgY29uc3Qgc2NyaXB0RW50aXR5SWQgPSB0aGlzLnJvdXRlVGFpbC5wYXRoLnN1YnN0cigxKTtcbiAgICAgIHBhZ2VFbC5zY3JpcHRFbnRpdHlJZCA9IHNjcmlwdEVudGl0eUlkID09PSBcIm5ld1wiID8gbnVsbCA6IHNjcmlwdEVudGl0eUlkO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29uZmlnLXNjcmlwdFwiOiBIYUNvbmZpZ1NjcmlwdDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWRcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5pbXBvcnQge1xuICBBY3Rpb24sXG4gIGRlbGV0ZVNjcmlwdCxcbiAgZ2V0U2NyaXB0RWRpdG9ySW5pdERhdGEsXG4gIFNjcmlwdENvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NyaXB0XCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGEtYXBwLWxheW91dFwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBSb3V0ZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi4vYXV0b21hdGlvbi9hY3Rpb24vaGEtYXV0b21hdGlvbi1hY3Rpb25cIjtcbmltcG9ydCB7IEhhRGV2aWNlQWN0aW9uIH0gZnJvbSBcIi4uL2F1dG9tYXRpb24vYWN0aW9uL3R5cGVzL2hhLWF1dG9tYXRpb24tYWN0aW9uLWRldmljZV9pZFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCB7IGNvbmZpZ1NlY3Rpb25zIH0gZnJvbSBcIi4uL2hhLXBhbmVsLWNvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgSGFTY3JpcHRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY3JpcHRFbnRpdHlJZCE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBTY3JpcHRDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGlydHk/OiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9ycz86IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXRhYnMtc3VicGFnZVxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAucm91dGU9JHt0aGlzLnJvdXRlfVxuICAgICAgICAuYmFja0NhbGxiYWNrPSR7KCkgPT4gdGhpcy5fYmFja1RhcHBlZCgpfVxuICAgICAgICAudGFicz0ke2NvbmZpZ1NlY3Rpb25zLmF1dG9tYXRpb259XG4gICAgICA+XG4gICAgICAgICR7IXRoaXMuc2NyaXB0RW50aXR5SWRcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmRlbGV0ZV9zY3JpcHRcIlxuICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2RlbGV0ZUNvbmZpcm19XG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgYH1cbiAgICAgICAgJHt0aGlzLm5hcnJvd1xuICAgICAgICAgID8gaHRtbGAgPHNwYW4gc2xvdD1cImhlYWRlclwiPiR7dGhpcy5fY29uZmlnPy5hbGlhc308L3NwYW4+IGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLl9lcnJvcnNcbiAgICAgICAgICAgID8gaHRtbGAgPGRpdiBjbGFzcz1cImVycm9yc1wiPiR7dGhpcy5fZXJyb3JzfTwvZGl2PiBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMuaGFzcyksXG4gICAgICAgICAgICB9KX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5fY29uZmlnXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGAgPHNwYW4gc2xvdD1cImhlYWRlclwiPiR7dGhpcy5fY29uZmlnLmFsaWFzfTwvc3Bhbj4gYFxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmFsaWFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFsaWFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fY29uZmlnLmFsaWFzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLnNlcXVlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLnNlcXVlbmNlX3NlbnRlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL3NjcmlwdHMvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5saW5rX2F2YWlsYWJsZV9hY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoYS1hdXRvbWF0aW9uLWFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIC5hY3Rpb25zPSR7dGhpcy5fY29uZmlnLnNlcXVlbmNlfVxuICAgICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fc2VxdWVuY2VDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICA+PC9oYS1hdXRvbWF0aW9uLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgP2lzLXdpZGU9JHt0aGlzLmlzV2lkZX1cbiAgICAgICAgICA/bmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgP2RpcnR5PSR7dGhpcy5fZGlydHl9XG4gICAgICAgICAgaWNvbj1cImhhc3M6Y29udGVudC1zYXZlXCJcbiAgICAgICAgICAudGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbW1vbi5zYXZlXCIpfVwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2F2ZVNjcmlwdH1cbiAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMuaGFzcyksXG4gICAgICAgICAgfSl9XCJcbiAgICAgICAgPjwvaGEtZmFiPlxuICAgICAgPC9oYXNzLXRhYnMtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGNvbnN0IG9sZFNjcmlwdCA9IGNoYW5nZWRQcm9wcy5nZXQoXCJzY3JpcHRFbnRpdHlJZFwiKTtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwic2NyaXB0RW50aXR5SWRcIikgJiZcbiAgICAgIHRoaXMuc2NyaXB0RW50aXR5SWQgJiZcbiAgICAgIHRoaXMuaGFzcyAmJlxuICAgICAgLy8gT25seSByZWZyZXNoIGNvbmZpZyBpZiB3ZSBwaWNrZWQgYSBuZXcgc2NyaXB0LiBJZiBzYW1lIElELCBkb24ndCBmZXRjaCBpdC5cbiAgICAgICghb2xkU2NyaXB0IHx8IG9sZFNjcmlwdCAhPT0gdGhpcy5zY3JpcHRFbnRpdHlJZClcbiAgICApIHtcbiAgICAgIHRoaXMuaGFzc1xuICAgICAgICAuY2FsbEFwaTxTY3JpcHRDb25maWc+KFxuICAgICAgICAgIFwiR0VUXCIsXG4gICAgICAgICAgYGNvbmZpZy9zY3JpcHQvY29uZmlnLyR7Y29tcHV0ZU9iamVjdElkKHRoaXMuc2NyaXB0RW50aXR5SWQpfWBcbiAgICAgICAgKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgZGF0YTogZW5zdXJlIHNlcXVlbmNlIGlzIGEgbGlzdFxuICAgICAgICAgICAgLy8gSGFwcGVucyB3aGVuIHBlb3BsZSBjb3B5IHBhc3RlIHRoZWlyIHNjcmlwdHMgaW50byB0aGUgY29uZmlnXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZy5zZXF1ZW5jZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgY29uZmlnLnNlcXVlbmNlID0gW3ZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAocmVzcCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgIHJlc3Auc3RhdHVzX2NvZGUgPT09IDQwNFxuICAgICAgICAgICAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmxvYWRfZXJyb3Jfbm90X2VkaXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5sb2FkX2Vycm9yX3Vua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJfbm9cIixcbiAgICAgICAgICAgICAgICAgICAgcmVzcC5zdGF0dXNfY29kZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwic2NyaXB0RW50aXR5SWRcIikgJiZcbiAgICAgICF0aGlzLnNjcmlwdEVudGl0eUlkICYmXG4gICAgICB0aGlzLmhhc3NcbiAgICApIHtcbiAgICAgIGNvbnN0IGluaXREYXRhID0gZ2V0U2NyaXB0RWRpdG9ySW5pdERhdGEoKTtcbiAgICAgIHRoaXMuX2RpcnR5ID0gISFpbml0RGF0YTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgYWxpYXM6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmRlZmF1bHRfbmFtZVwiKSxcbiAgICAgICAgc2VxdWVuY2U6IFt7IC4uLkhhRGV2aWNlQWN0aW9uLmRlZmF1bHRDb25maWcgfV0sXG4gICAgICAgIC4uLmluaXREYXRhLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgbmFtZSA9IChldi50YXJnZXQgYXMgYW55KT8ubmFtZTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCh0aGlzLl9jb25maWchW25hbWVdIHx8IFwiXCIpID09PSBuZXdWYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0geyAuLi50aGlzLl9jb25maWchLCBbbmFtZV06IG5ld1ZhbCB9O1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlcXVlbmNlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLnRoaXMuX2NvbmZpZyEsIHNlcXVlbmNlOiBldi5kZXRhaWwudmFsdWUgYXMgQWN0aW9uW10gfTtcbiAgICB0aGlzLl9lcnJvcnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmFja1RhcHBlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGlydHkpIHtcbiAgICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvbW1vbi5lZGl0b3IuY29uZmlybV91bnNhdmVkXCJcbiAgICAgICAgKSxcbiAgICAgICAgY29uZmlybVRleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgICBkaXNtaXNzVGV4dDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5ub1wiKSxcbiAgICAgICAgY29uZmlybTogKCkgPT4gaGlzdG9yeS5iYWNrKCksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlQ29uZmlybSgpIHtcbiAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmRlbGV0ZV9jb25maXJtXCIpLFxuICAgICAgY29uZmlybVRleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgZGlzbWlzc1RleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24ubm9cIiksXG4gICAgICBjb25maXJtOiAoKSA9PiB0aGlzLl9kZWxldGUoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RlbGV0ZSgpIHtcbiAgICBhd2FpdCBkZWxldGVTY3JpcHQodGhpcy5oYXNzLCBjb21wdXRlT2JqZWN0SWQodGhpcy5zY3JpcHRFbnRpdHlJZCkpO1xuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2F2ZVNjcmlwdCgpOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuc2NyaXB0RW50aXR5SWRcbiAgICAgID8gY29tcHV0ZU9iamVjdElkKHRoaXMuc2NyaXB0RW50aXR5SWQpXG4gICAgICA6IERhdGUubm93KCk7XG4gICAgdGhpcy5oYXNzIS5jYWxsQXBpKFwiUE9TVFwiLCBcImNvbmZpZy9zY3JpcHQvY29uZmlnL1wiICsgaWQsIHRoaXMuX2NvbmZpZykudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMuc2NyaXB0RW50aXR5SWQpIHtcbiAgICAgICAgICBuYXZpZ2F0ZSh0aGlzLCBgL2NvbmZpZy9zY3JpcHQvZWRpdC8ke2lkfWAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9ycykgPT4ge1xuICAgICAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnMuYm9keS5tZXNzYWdlO1xuICAgICAgICB0aHJvdyBlcnJvcnM7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3JzIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW5bc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTgwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWJvdHRvbSAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiW25hcnJvd10ge1xuICAgICAgICAgIGJvdHRvbTogODRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiW2RpcnR5XSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYi5ydGwge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ucnRsIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNjcmlwdC1lZGl0b3JcIiwgSGFTY3JpcHRFZGl0b3IpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlVGltZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuaW1wb3J0IHsgdHJpZ2dlclNjcmlwdCB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3NjcmlwdFwiO1xuaW1wb3J0IHsgc2hvd0FsZXJ0RGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBSb3V0ZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdG9hc3RcIjtcbmltcG9ydCB7IGNvbmZpZ1NlY3Rpb25zIH0gZnJvbSBcIi4uL2hhLXBhbmVsLWNvbmZpZ1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXNjcmlwdC1waWNrZXJcIilcbmNsYXNzIEhhU2NyaXB0UGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NyaXB0cyE6IEhhc3NFbnRpdHlbXTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBwcml2YXRlIF9zY3JpcHRzID0gbWVtb2l6ZU9uZSgoc2NyaXB0czogSGFzc0VudGl0eVtdKSA9PiB7XG4gICAgcmV0dXJuIHNjcmlwdHMubWFwKChzY3JpcHQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNjcmlwdCxcbiAgICAgICAgbmFtZTogY29tcHV0ZVN0YXRlTmFtZShzY3JpcHQpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcHJpdmF0ZSBfY29sdW1ucyA9IG1lbW9pemVPbmUoXG4gICAgKF9sYW5ndWFnZSk6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmF0ZToge1xuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIHR5cGU6IFwiaWNvbi1idXR0b25cIixcbiAgICAgICAgICB0ZW1wbGF0ZTogKF90b2dnbGUsIHNjcmlwdCkgPT5cbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIC5zY3JpcHQ9JHtzY3JpcHR9XG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGxheVwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIuYWN0aXZhdGVfc2NyaXB0XCJcbiAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7KGV2OiBFdmVudCkgPT4gdGhpcy5fcnVuU2NyaXB0KGV2KX1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIuaGVhZGVycy5uYW1lXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICAgIGdyb3dzOiB0cnVlLFxuICAgICAgICAgIHRlbXBsYXRlOiAobmFtZSwgc2NyaXB0OiBhbnkpID0+IGh0bWxgXG4gICAgICAgICAgICAke25hbWV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY2FyZC5hdXRvbWF0aW9uLmxhc3RfdHJpZ2dlcmVkXCIpfTpcbiAgICAgICAgICAgICAgJHtzY3JpcHQuYXR0cmlidXRlcy5sYXN0X3RyaWdnZXJlZFxuICAgICAgICAgICAgICAgID8gZm9ybWF0RGF0ZVRpbWUoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHNjcmlwdC5hdHRyaWJ1dGVzLmxhc3RfdHJpZ2dlcmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUubmV2ZXJcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdHlwZTogXCJpY29uLWJ1dHRvblwiLFxuICAgICAgICAgIHRlbXBsYXRlOiAoX2luZm8sIHNjcmlwdCkgPT4gaHRtbGBcbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAuc2NyaXB0PSR7c2NyaXB0fVxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93SW5mb31cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6aW5mb3JtYXRpb24tb3V0bGluZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LnBpY2tlci5zaG93X2luZm9cIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdHlwZTogXCJpY29uLWJ1dHRvblwiLFxuICAgICAgICAgIHRlbXBsYXRlOiAoX2luZm8sIHNjcmlwdDogYW55KSA9PiBodG1sYFxuICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvc2NyaXB0L2VkaXQvJHtzY3JpcHQuZW50aXR5X2lkfVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwZW5jaWxcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQucGlja2VyLmVkaXRfc2NyaXB0XCJcbiAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlXG4gICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgIGJhY2stcGF0aD1cIi9jb25maWdcIlxuICAgICAgICAucm91dGU9JHt0aGlzLnJvdXRlfVxuICAgICAgICAudGFicz0ke2NvbmZpZ1NlY3Rpb25zLmF1dG9tYXRpb259XG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLmhhc3MubGFuZ3VhZ2UpfVxuICAgICAgICAuZGF0YT0ke3RoaXMuX3NjcmlwdHModGhpcy5zY3JpcHRzKX1cbiAgICAgICAgaWQ9XCJlbnRpdHlfaWRcIlxuICAgICAgICAubm9EYXRhVGV4dD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQucGlja2VyLm5vX3NjcmlwdHNcIlxuICAgICAgICApfVxuICAgICAgICBoYXNGYWJcbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgc2xvdD1cInRvb2xiYXItaWNvblwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dIZWxwfVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDwvaGFzcy10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZT5cbiAgICAgIDxhIGhyZWY9XCIvY29uZmlnL3NjcmlwdC9lZGl0L25ld1wiPlxuICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgP2lzLXdpZGU9JHt0aGlzLmlzV2lkZX1cbiAgICAgICAgICA/bmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgdGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIuYWRkX3NjcmlwdFwiXG4gICAgICAgICAgKX1cIlxuICAgICAgICAgID9ydGw9JHtjb21wdXRlUlRMKHRoaXMuaGFzcyl9XG4gICAgICAgID48L2hhLWZhYj5cbiAgICAgIDwvYT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcnVuU2NyaXB0KGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgc2NyaXB0ID0gZXYuY3VycmVudFRhcmdldC5zY3JpcHQgYXMgSGFzc0VudGl0eTtcbiAgICBhd2FpdCB0cmlnZ2VyU2NyaXB0KHRoaXMuaGFzcywgc2NyaXB0LmVudGl0eV9pZCk7XG4gICAgc2hvd1RvYXN0KHRoaXMsIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5ub3RpZmljYXRpb25fdG9hc3QudHJpZ2dlcmVkXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBjb21wdXRlU3RhdGVOYW1lKHNjcmlwdClcbiAgICAgICksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zaG93SW5mbyhldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGVudGl0eUlkID0gZXYuY3VycmVudFRhcmdldC5zY3JpcHQuZW50aXR5X2lkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zaG93SGVscCgpIHtcbiAgICBzaG93QWxlcnREaWFsb2codGhpcywge1xuICAgICAgdGl0bGU6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuY2FwdGlvblwiKSxcbiAgICAgIHRleHQ6IGh0bWxgXG4gICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIuaW50cm9kdWN0aW9uXCIpfVxuICAgICAgICA8cD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9zY3JpcHRzL2VkaXRvci9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIubGVhcm5fbW9yZVwiKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIGAsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIGhhLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiW25hcnJvd10ge1xuICAgICAgICAgIGJvdHRvbTogODRweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltydGxdW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zY3JpcHQtcGlja2VyXCI6IEhhU2NyaXB0UGlja2VyO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTJCQTtBQVVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBdURBO0FBTUE7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7O0FBQUE7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFMQTtBQUZBOzs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFJQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBbEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUtBOztBQUlBOztBQUVBO0FBQ0E7O0FBSUE7O0FBSUE7QUFDQTtBQURBOztBQUlBO0FBRUE7QUFDQTs7QUFJQTs7Ozs7QUFPQTs7QUFJQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7Ozs7QUFNQTs7Ozs7OztBQVNBOzs7O0FBTUE7QUFDQTtBQUNBOzs7QUFuREE7Ozs7QUEyREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQWpHQTtBQXVHQTtBQXpIQTtBQUFBO0FBQUE7QUFBQTtBQTRIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBcExBO0FBQUE7QUFBQTtBQUFBO0FBc0xBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFuTUE7QUFBQTtBQUFBO0FBQUE7QUFzTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBek1BO0FBQUE7QUFBQTtBQUFBO0FBNE1BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUF4TkE7QUFBQTtBQUFBO0FBQUE7QUEyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFqT0E7QUFBQTtBQUFBO0FBQUE7QUFvT0E7QUFDQTtBQUNBO0FBdE9BO0FBQUE7QUFBQTtBQUFBO0FBeU9BO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQXpQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNFBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrREE7QUE5U0E7QUFBQTtBQUFBO0FBaVRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25WQTtBQUVBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUVBO0FBR0E7OztBQVhBO0FBZUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFaQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFSQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7O0FBUEE7QUFuREE7QUFrRUE7Ozs7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBUUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUdBOzs7QUE3QkE7QUFpQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU9BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7Ozs7QUFWQTtBQWVBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZCQTs7O0FBbE1BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
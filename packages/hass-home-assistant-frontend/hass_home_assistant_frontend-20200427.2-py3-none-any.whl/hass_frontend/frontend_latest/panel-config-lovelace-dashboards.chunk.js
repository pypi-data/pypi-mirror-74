(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-lovelace-dashboards"],{

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

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

/***/ "./src/data/lovelace.ts":
/*!******************************!*\
  !*** ./src/data/lovelace.ts ***!
  \******************************/
/*! exports provided: fetchResources, createResource, updateResource, deleteResource, fetchDashboards, createDashboard, updateDashboard, deleteDashboard, fetchConfig, saveConfig, deleteConfig, subscribeLovelaceUpdates, getLovelaceCollection, getLegacyLovelaceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchResources", function() { return fetchResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResource", function() { return createResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateResource", function() { return updateResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResource", function() { return deleteResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDashboards", function() { return fetchDashboards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDashboard", function() { return createDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDashboard", function() { return updateDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDashboard", function() { return deleteDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfig", function() { return deleteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeLovelaceUpdates", function() { return subscribeLovelaceUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLovelaceCollection", function() { return getLovelaceCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegacyLovelaceCollection", function() { return getLegacyLovelaceCollection; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");

const fetchResources = conn => conn.sendMessagePromise({
  type: "lovelace/resources"
});
const createResource = (hass, values) => hass.callWS(Object.assign({
  type: "lovelace/resources/create"
}, values));
const updateResource = (hass, id, updates) => hass.callWS(Object.assign({
  type: "lovelace/resources/update",
  resource_id: id
}, updates));
const deleteResource = (hass, id) => hass.callWS({
  type: "lovelace/resources/delete",
  resource_id: id
});
const fetchDashboards = hass => hass.callWS({
  type: "lovelace/dashboards/list"
});
const createDashboard = (hass, values) => hass.callWS(Object.assign({
  type: "lovelace/dashboards/create"
}, values));
const updateDashboard = (hass, id, updates) => hass.callWS(Object.assign({
  type: "lovelace/dashboards/update",
  dashboard_id: id
}, updates));
const deleteDashboard = (hass, id) => hass.callWS({
  type: "lovelace/dashboards/delete",
  dashboard_id: id
});
const fetchConfig = (conn, urlPath, force) => conn.sendMessagePromise({
  type: "lovelace/config",
  url_path: urlPath,
  force
});
const saveConfig = (hass, urlPath, config) => hass.callWS({
  type: "lovelace/config/save",
  url_path: urlPath,
  config
});
const deleteConfig = (hass, urlPath) => hass.callWS({
  type: "lovelace/config/delete",
  url_path: urlPath
});
const subscribeLovelaceUpdates = (conn, urlPath, onChange) => conn.subscribeEvents(ev => {
  if (ev.data.url_path === urlPath) {
    onChange();
  }
}, "lovelace_updated");
const getLovelaceCollection = (conn, urlPath = null) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, `_lovelace_${urlPath !== null && urlPath !== void 0 ? urlPath : ""}`, conn2 => fetchConfig(conn2, urlPath, false), (_conn, store) => subscribeLovelaceUpdates(conn, urlPath, () => fetchConfig(conn, urlPath, false).then(config => store.setState(config, true)))); // Legacy functions to support cast for Home Assistion < 0.107

const fetchLegacyConfig = (conn, force) => conn.sendMessagePromise({
  type: "lovelace/config",
  force
});

const subscribeLegacyLovelaceUpdates = (conn, onChange) => conn.subscribeEvents(onChange, "lovelace_updated");

const getLegacyLovelaceCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_lovelace", conn2 => fetchLegacyConfig(conn2, false), (_conn, store) => subscribeLegacyLovelaceUpdates(conn, () => fetchLegacyConfig(conn, false).then(config => store.setState(config, true))));

/***/ }),

/***/ "./src/dialogs/generic/show-dialog-box.ts":
/*!************************************************!*\
  !*** ./src/dialogs/generic/show-dialog-box.ts ***!
  \************************************************/
/*! exports provided: loadGenericDialog, showAlertDialog, showConfirmationDialog, showPromptDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGenericDialog", function() { return loadGenericDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertDialog", function() { return showAlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPromptDialog", function() { return showPromptDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadGenericDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(13), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e(14), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-box */ "./src/dialogs/generic/dialog-box.ts"));

const showDialogHelper = (element, dialogParams, extra) => new Promise(resolve => {
  const origCancel = dialogParams.cancel;
  const origConfirm = dialogParams.confirm;
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-box",
    dialogImport: loadGenericDialog,
    dialogParams: Object.assign({}, dialogParams, {}, extra, {
      cancel: () => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? null : false);

        if (origCancel) {
          origCancel();
        }
      },
      confirm: out => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? out : true);

        if (origConfirm) {
          origConfirm(out);
        }
      }
    })
  });
});

const showAlertDialog = (element, dialogParams) => showDialogHelper(element, dialogParams);
const showConfirmationDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  confirmation: true
});
const showPromptDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  prompt: true
});

/***/ }),

/***/ "./src/panels/config/lovelace/dashboards/ha-config-lovelace-dashboards.ts":
/*!********************************************************************************!*\
  !*** ./src/panels/config/lovelace/dashboards/ha-config-lovelace-dashboards.ts ***!
  \********************************************************************************/
/*! exports provided: HaConfigLovelaceDashboards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaConfigLovelaceDashboards", function() { return HaConfigLovelaceDashboards; });
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/lovelace */ "./src/data/lovelace.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_tabs_subpage_data_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../layouts/hass-tabs-subpage-data-table */ "./src/layouts/hass-tabs-subpage-data-table.ts");
/* harmony import */ var _ha_config_lovelace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ha-config-lovelace */ "./src/panels/config/lovelace/ha-config-lovelace.ts");
/* harmony import */ var _show_dialog_lovelace_dashboard_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show-dialog-lovelace-dashboard-detail */ "./src/panels/config/lovelace/dashboards/show-dialog-lovelace-dashboard-detail.ts");
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














let HaConfigLovelaceDashboards = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-config-lovelace-dashboards")], function (_initialize, _LitElement) {
  class HaConfigLovelaceDashboards extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigLovelaceDashboards,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
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
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_dashboards",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])((narrow, _language, dashboards) => {
          const columns = {
            icon: {
              title: "",
              type: "icon",
              template: icon => icon ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <ha-icon slot="item-icon" .icon=${icon}></ha-icon> ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``
            },
            title: {
              title: this.hass.localize("ui.panel.config.lovelace.dashboards.picker.headers.title"),
              sortable: true,
              filterable: true,
              direction: "asc",
              grows: true,
              template: (title, dashboard) => {
                const titleTemplate = lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              ${title}
              ${dashboard.default ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                    <ha-icon
                      style="padding-left: 10px;"
                      icon="hass:check-circle-outline"
                    ></ha-icon>
                    <paper-tooltip>
                      ${this.hass.localize(`ui.panel.config.lovelace.dashboards.default_dashboard`)}
                    </paper-tooltip>
                  ` : ""}
            `;
                return narrow ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  ${titleTemplate}
                  <div class="secondary">
                    ${this.hass.localize(`ui.panel.config.lovelace.dashboards.conf_mode.${dashboard.mode}`)}${dashboard.filename ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` - ${dashboard.filename} ` : ""}
                  </div>
                ` : titleTemplate;
              }
            }
          };

          if (!narrow) {
            columns.mode = {
              title: this.hass.localize("ui.panel.config.lovelace.dashboards.picker.headers.conf_mode"),
              sortable: true,
              filterable: true,
              width: "20%",
              template: mode => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              ${this.hass.localize(`ui.panel.config.lovelace.dashboards.conf_mode.${mode}`) || mode}
            `
            };

            if (dashboards.some(dashboard => dashboard.filename)) {
              columns.filename = {
                title: this.hass.localize("ui.panel.config.lovelace.dashboards.picker.headers.filename"),
                width: "15%",
                sortable: true,
                filterable: true
              };
            }

            columns.require_admin = {
              title: this.hass.localize("ui.panel.config.lovelace.dashboards.picker.headers.require_admin"),
              sortable: true,
              type: "icon",
              width: "100px",
              template: requireAdmin => requireAdmin ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <ha-icon icon="hass:check"></ha-icon> ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` - `
            };
            columns.show_in_sidebar = {
              title: this.hass.localize("ui.panel.config.lovelace.dashboards.picker.headers.sidebar"),
              type: "icon",
              width: "121px",
              template: sidebar => sidebar ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <ha-icon icon="hass:check"></ha-icon> ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` - `
            };
          }

          columns.url_path = {
            title: "",
            filterable: true,
            width: "75px",
            template: urlPath => narrow ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <paper-icon-button
                  icon="hass:open-in-new"
                  .urlPath=${urlPath}
                  @click=${this._navigate}
                ></paper-icon-button>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <mwc-button .urlPath=${urlPath} @click=${this._navigate}
                  >${this.hass.localize("ui.panel.config.lovelace.dashboards.picker.open")}</mwc-button
                >
              `
          };
          return columns;
        });
      }

    }, {
      kind: "field",
      key: "_getItems",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(dashboards => {
          var _this$hass$panels, _this$hass$panels$lov;

          const defaultMode = ((_this$hass$panels = this.hass.panels) === null || _this$hass$panels === void 0 ? void 0 : (_this$hass$panels$lov = _this$hass$panels.lovelace) === null || _this$hass$panels$lov === void 0 ? void 0 : _this$hass$panels$lov.config).mode;
          const defaultUrlPath = this.hass.defaultPanel;
          const isDefault = defaultUrlPath === "lovelace";
          return [{
            icon: "hass:view-dashboard",
            title: this.hass.localize("panel.states"),
            default: isDefault,
            sidebar: isDefault,
            require_admin: false,
            url_path: "lovelace",
            mode: defaultMode,
            filename: defaultMode === "yaml" ? "ui-lovelace.yaml" : ""
          }, ...dashboards.map(dashboard => {
            return Object.assign({
              filename: ""
            }, dashboard, {
              default: defaultUrlPath === dashboard.url_path
            });
          })];
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || this._dashboards === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <hass-loading-screen></hass-loading-screen> `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${_ha_config_lovelace__WEBPACK_IMPORTED_MODULE_11__["lovelaceTabs"]}
        .columns=${this._columns(this.narrow, this.hass.language, this._dashboards)}
        .data=${this._getItems(this._dashboards)}
        @row-click=${this._editDashboard}
        id="url_path"
        hasFab
      >
      </hass-tabs-subpage-data-table>
      <ha-fab
        ?is-wide=${this.isWide}
        ?narrow=${this.narrow}
        icon="hass:plus"
        title="${this.hass.localize("ui.panel.config.lovelace.dashboards.picker.add_dashboard")}"
        @click=${this._addDashboard}
      ></ha-fab>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaConfigLovelaceDashboards.prototype), "firstUpdated", this).call(this, changedProps);

        this._getDashboards();
      }
    }, {
      kind: "method",
      key: "_getDashboards",
      value: async function _getDashboards() {
        this._dashboards = await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_7__["fetchDashboards"])(this.hass);
      }
    }, {
      kind: "method",
      key: "_navigate",
      value: function _navigate(ev) {
        ev.stopPropagation();
        const url = `/${ev.target.urlPath}`;
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_3__["navigate"])(this, url);
      }
    }, {
      kind: "method",
      key: "_editDashboard",
      value: function _editDashboard(ev) {
        const urlPath = ev.detail.id;

        const dashboard = this._dashboards.find(res => res.url_path === urlPath);

        this._openDialog(dashboard, urlPath);
      }
    }, {
      kind: "method",
      key: "_addDashboard",
      value: function _addDashboard() {
        this._openDialog();
      }
    }, {
      kind: "method",
      key: "_openDialog",
      value: async function _openDialog(dashboard, urlPath) {
        Object(_show_dialog_lovelace_dashboard_detail__WEBPACK_IMPORTED_MODULE_12__["showDashboardDetailDialog"])(this, {
          dashboard,
          urlPath,
          createDashboard: async values => {
            const created = await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_7__["createDashboard"])(this.hass, values);
            this._dashboards = this._dashboards.concat(created).sort((res1, res2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["compare"])(res1.url_path, res2.url_path));
          },
          updateDashboard: async values => {
            const updated = await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_7__["updateDashboard"])(this.hass, dashboard.id, values);
            this._dashboards = this._dashboards.map(res => res === dashboard ? updated : res);
          },
          removeDashboard: async () => {
            if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_8__["showConfirmationDialog"])(this, {
              text: this.hass.localize("ui.panel.config.lovelace.dashboards.confirm_delete")
            }))) {
              return false;
            }

            try {
              await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_7__["deleteDashboard"])(this.hass, dashboard.id);
              this._dashboards = this._dashboards.filter(res => res !== dashboard);
              return true;
            } catch (err) {
              return false;
            }
          }
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
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
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/lovelace/dashboards/show-dialog-lovelace-dashboard-detail.ts":
/*!****************************************************************************************!*\
  !*** ./src/panels/config/lovelace/dashboards/show-dialog-lovelace-dashboard-detail.ts ***!
  \****************************************************************************************/
/*! exports provided: loadDashboardDetailDialog, showDashboardDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDashboardDetailDialog", function() { return loadDashboardDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDashboardDetailDialog", function() { return showDashboardDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadDashboardDetailDialog = () => Promise.all(/*! import() | lovelace-dashboard-detail-dialog */[__webpack_require__.e("vendors~add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zig~61d72af3"), __webpack_require__.e("add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zigbee-info~af4b98d6"), __webpack_require__.e("entity-editor-dialog~helper-detail-dialog~hui-button-card-editor~hui-entity-card-editor~hui-light-ca~1d54093c"), __webpack_require__.e("lovelace-dashboard-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-lovelace-dashboard-detail */ "./src/panels/config/lovelace/dashboards/dialog-lovelace-dashboard-detail.ts"));
const showDashboardDetailDialog = (element, dialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-lovelace-dashboard-detail",
    dialogImport: loadDashboardDetailDialog,
    dialogParams
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWxvdmVsYWNlLWRhc2hib2FyZHMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvbG92ZWxhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvbG92ZWxhY2UvZGFzaGJvYXJkcy9oYS1jb25maWctbG92ZWxhY2UtZGFzaGJvYXJkcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9sb3ZlbGFjZS9kYXNoYm9hcmRzL3Nob3ctZGlhbG9nLWxvdmVsYWNlLWRhc2hib2FyZC1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgdHlwZSB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7XG4gIENvbm5lY3Rpb24sXG4gIGdldENvbGxlY3Rpb24sXG4gIEhhc3NFdmVudEJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVBhbmVsQ29uZmlnIHtcbiAgbW9kZTogXCJ5YW1sXCIgfCBcInN0b3JhZ2VcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZUNvbmZpZyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB2aWV3czogTG92ZWxhY2VWaWV3Q29uZmlnW107XG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVnYWN5TG92ZWxhY2VDb25maWcgZXh0ZW5kcyBMb3ZlbGFjZUNvbmZpZyB7XG4gIHJlc291cmNlcz86IExvdmVsYWNlUmVzb3VyY2VbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVJlc291cmNlIHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogXCJjc3NcIiB8IFwianNcIiB8IFwibW9kdWxlXCIgfCBcImh0bWxcIjtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VSZXNvdXJjZXNNdXRhYmxlUGFyYW1zIHtcbiAgcmVzX3R5cGU6IFwiY3NzXCIgfCBcImpzXCIgfCBcIm1vZHVsZVwiIHwgXCJodG1sXCI7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBMb3ZlbGFjZURhc2hib2FyZCA9XG4gIHwgTG92ZWxhY2VZYW1sRGFzaGJvYXJkXG4gIHwgTG92ZWxhY2VTdG9yYWdlRGFzaGJvYXJkO1xuXG5pbnRlcmZhY2UgTG92ZWxhY2VHZW5lcmljRGFzaGJvYXJkIHtcbiAgaWQ6IHN0cmluZztcbiAgdXJsX3BhdGg6IHN0cmluZztcbiAgcmVxdWlyZV9hZG1pbjogYm9vbGVhbjtcbiAgc2hvd19pbl9zaWRlYmFyOiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlWWFtbERhc2hib2FyZCBleHRlbmRzIExvdmVsYWNlR2VuZXJpY0Rhc2hib2FyZCB7XG4gIG1vZGU6IFwieWFtbFwiO1xuICBmaWxlbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlU3RvcmFnZURhc2hib2FyZCBleHRlbmRzIExvdmVsYWNlR2VuZXJpY0Rhc2hib2FyZCB7XG4gIG1vZGU6IFwic3RvcmFnZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlRGFzaGJvYXJkTXV0YWJsZVBhcmFtcyB7XG4gIHJlcXVpcmVfYWRtaW46IGJvb2xlYW47XG4gIHNob3dfaW5fc2lkZWJhcjogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZURhc2hib2FyZENyZWF0ZVBhcmFtc1xuICBleHRlbmRzIExvdmVsYWNlRGFzaGJvYXJkTXV0YWJsZVBhcmFtcyB7XG4gIHVybF9wYXRoOiBzdHJpbmc7XG4gIG1vZGU6IFwic3RvcmFnZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlVmlld0NvbmZpZyB7XG4gIGluZGV4PzogbnVtYmVyO1xuICB0aXRsZT86IHN0cmluZztcbiAgYmFkZ2VzPzogQXJyYXk8c3RyaW5nIHwgTG92ZWxhY2VCYWRnZUNvbmZpZz47XG4gIGNhcmRzPzogTG92ZWxhY2VDYXJkQ29uZmlnW107XG4gIHBhdGg/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIHRoZW1lPzogc3RyaW5nO1xuICBwYW5lbD86IGJvb2xlYW47XG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIHZpc2libGU/OiBib29sZWFuIHwgU2hvd1ZpZXdDb25maWdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaG93Vmlld0NvbmZpZyB7XG4gIHVzZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VCYWRnZUNvbmZpZyB7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZUNhcmRDb25maWcge1xuICBpbmRleD86IG51bWJlcjtcbiAgdmlld19pbmRleD86IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9nZ2xlQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJ0b2dnbGVcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxsU2VydmljZUFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwiY2FsbC1zZXJ2aWNlXCI7XG4gIHNlcnZpY2U6IHN0cmluZztcbiAgc2VydmljZV9kYXRhPzoge1xuICAgIGVudGl0eV9pZD86IHN0cmluZyB8IFtzdHJpbmddO1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibmF2aWdhdGVcIjtcbiAgbmF2aWdhdGlvbl9wYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJ1cmxcIjtcbiAgdXJsX3BhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb3JlSW5mb0FjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibW9yZS1pbmZvXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9BY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21BY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcImZpcmUtZG9tLWV2ZW50XCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGNvbmZpcm1hdGlvbj86IENvbmZpcm1hdGlvblJlc3RyaWN0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvblJlc3RyaWN0aW9uQ29uZmlnIHtcbiAgdGV4dD86IHN0cmluZztcbiAgZXhlbXB0aW9ucz86IFJlc3RyaWN0aW9uQ29uZmlnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdHJpY3Rpb25Db25maWcge1xuICB1c2VyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkNvbmZpZyA9XG4gIHwgVG9nZ2xlQWN0aW9uQ29uZmlnXG4gIHwgQ2FsbFNlcnZpY2VBY3Rpb25Db25maWdcbiAgfCBOYXZpZ2F0ZUFjdGlvbkNvbmZpZ1xuICB8IFVybEFjdGlvbkNvbmZpZ1xuICB8IE1vcmVJbmZvQWN0aW9uQ29uZmlnXG4gIHwgTm9BY3Rpb25Db25maWdcbiAgfCBDdXN0b21BY3Rpb25Db25maWc7XG5cbnR5cGUgTG92ZWxhY2VVcGRhdGVkRXZlbnQgPSBIYXNzRXZlbnRCYXNlICYge1xuICBldmVudF90eXBlOiBcImxvdmVsYWNlX3VwZGF0ZWRcIjtcbiAgZGF0YToge1xuICAgIHVybF9wYXRoOiBzdHJpbmcgfCBudWxsO1xuICAgIG1vZGU6IFwieWFtbFwiIHwgXCJzdG9yYWdlXCI7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hSZXNvdXJjZXMgPSAoY29ubjogQ29ubmVjdGlvbik6IFByb21pc2U8TG92ZWxhY2VSZXNvdXJjZVtdPiA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9yZXNvdXJjZXNcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNvdXJjZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBMb3ZlbGFjZVJlc291cmNlc011dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8TG92ZWxhY2VSZXNvdXJjZT4oe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvcmVzb3VyY2VzL2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVSZXNvdXJjZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxMb3ZlbGFjZVJlc291cmNlc011dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPExvdmVsYWNlUmVzb3VyY2U+KHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL3Jlc291cmNlcy91cGRhdGVcIixcbiAgICByZXNvdXJjZV9pZDogaWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVSZXNvdXJjZSA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBpZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9yZXNvdXJjZXMvZGVsZXRlXCIsXG4gICAgcmVzb3VyY2VfaWQ6IGlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFzaGJvYXJkcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKTogUHJvbWlzZTxMb3ZlbGFjZURhc2hib2FyZFtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9kYXNoYm9hcmRzL2xpc3RcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEYXNoYm9hcmQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogTG92ZWxhY2VEYXNoYm9hcmRDcmVhdGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8TG92ZWxhY2VEYXNoYm9hcmQ+KHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2Rhc2hib2FyZHMvY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURhc2hib2FyZCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxMb3ZlbGFjZURhc2hib2FyZE11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPExvdmVsYWNlRGFzaGJvYXJkPih7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9kYXNoYm9hcmRzL3VwZGF0ZVwiLFxuICAgIGRhc2hib2FyZF9pZDogaWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVEYXNoYm9hcmQgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvZGFzaGJvYXJkcy9kZWxldGVcIixcbiAgICBkYXNoYm9hcmRfaWQ6IGlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uZmlnID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICB1cmxQYXRoOiBzdHJpbmcgfCBudWxsLFxuICBmb3JjZTogYm9vbGVhblxuKTogUHJvbWlzZTxMb3ZlbGFjZUNvbmZpZz4gPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvY29uZmlnXCIsXG4gICAgdXJsX3BhdGg6IHVybFBhdGgsXG4gICAgZm9yY2UsXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2F2ZUNvbmZpZyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdXJsUGF0aDogc3RyaW5nIHwgbnVsbCxcbiAgY29uZmlnOiBMb3ZlbGFjZUNvbmZpZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9jb25maWcvc2F2ZVwiLFxuICAgIHVybF9wYXRoOiB1cmxQYXRoLFxuICAgIGNvbmZpZyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHVybFBhdGg6IHN0cmluZyB8IG51bGxcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvY29uZmlnL2RlbGV0ZVwiLFxuICAgIHVybF9wYXRoOiB1cmxQYXRoLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUxvdmVsYWNlVXBkYXRlcyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgdXJsUGF0aDogc3RyaW5nIHwgbnVsbCxcbiAgb25DaGFuZ2U6ICgpID0+IHZvaWRcbikgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHM8TG92ZWxhY2VVcGRhdGVkRXZlbnQ+KChldikgPT4ge1xuICAgIGlmIChldi5kYXRhLnVybF9wYXRoID09PSB1cmxQYXRoKSB7XG4gICAgICBvbkNoYW5nZSgpO1xuICAgIH1cbiAgfSwgXCJsb3ZlbGFjZV91cGRhdGVkXCIpO1xuXG5leHBvcnQgY29uc3QgZ2V0TG92ZWxhY2VDb2xsZWN0aW9uID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICB1cmxQYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuKSA9PlxuICBnZXRDb2xsZWN0aW9uKFxuICAgIGNvbm4sXG4gICAgYF9sb3ZlbGFjZV8ke3VybFBhdGggPz8gXCJcIn1gLFxuICAgIChjb25uMikgPT4gZmV0Y2hDb25maWcoY29ubjIsIHVybFBhdGgsIGZhbHNlKSxcbiAgICAoX2Nvbm4sIHN0b3JlKSA9PlxuICAgICAgc3Vic2NyaWJlTG92ZWxhY2VVcGRhdGVzKGNvbm4sIHVybFBhdGgsICgpID0+XG4gICAgICAgIGZldGNoQ29uZmlnKGNvbm4sIHVybFBhdGgsIGZhbHNlKS50aGVuKChjb25maWcpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoY29uZmlnLCB0cnVlKVxuICAgICAgICApXG4gICAgICApXG4gICk7XG5cbi8vIExlZ2FjeSBmdW5jdGlvbnMgdG8gc3VwcG9ydCBjYXN0IGZvciBIb21lIEFzc2lzdGlvbiA8IDAuMTA3XG5jb25zdCBmZXRjaExlZ2FjeUNvbmZpZyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgZm9yY2U6IGJvb2xlYW5cbik6IFByb21pc2U8TG92ZWxhY2VDb25maWc+ID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2NvbmZpZ1wiLFxuICAgIGZvcmNlLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlTGVnYWN5TG92ZWxhY2VVcGRhdGVzID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKCkgPT4gdm9pZFxuKSA9PiBjb25uLnN1YnNjcmliZUV2ZW50cyhvbkNoYW5nZSwgXCJsb3ZlbGFjZV91cGRhdGVkXCIpO1xuXG5leHBvcnQgY29uc3QgZ2V0TGVnYWN5TG92ZWxhY2VDb2xsZWN0aW9uID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oXG4gICAgY29ubixcbiAgICBcIl9sb3ZlbGFjZVwiLFxuICAgIChjb25uMikgPT4gZmV0Y2hMZWdhY3lDb25maWcoY29ubjIsIGZhbHNlKSxcbiAgICAoX2Nvbm4sIHN0b3JlKSA9PlxuICAgICAgc3Vic2NyaWJlTGVnYWN5TG92ZWxhY2VVcGRhdGVzKGNvbm4sICgpID0+XG4gICAgICAgIGZldGNoTGVnYWN5Q29uZmlnKGNvbm4sIGZhbHNlKS50aGVuKChjb25maWcpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoY29uZmlnLCB0cnVlKVxuICAgICAgICApXG4gICAgICApXG4gICk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93V2l0aExvdmVsYWNlUHJvbSBleHRlbmRzIFdpbmRvdyB7XG4gIGxsQ29uZlByb20/OiBQcm9taXNlPExvdmVsYWNlQ29uZmlnPjtcbiAgbGxSZXNQcm9tPzogUHJvbWlzZTxMb3ZlbGFjZVJlc291cmNlW10+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkhhbmRsZXJPcHRpb25zIHtcbiAgaGFzSG9sZD86IGJvb2xlYW47XG4gIGhhc0RvdWJsZUNsaWNrPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25IYW5kbGVyRGV0YWlsIHtcbiAgYWN0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkhhbmRsZXJFdmVudCA9IEhBU1NEb21FdmVudDxBY3Rpb25IYW5kbGVyRGV0YWlsPjtcbiIsImltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmludGVyZmFjZSBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlc3VsdDtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGRpc21pc3NUZXh0Pzogc3RyaW5nO1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbiAgY2FuY2VsPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1BhcmFtc1xuICBleHRlbmRzIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyxcbiAgICBQcm9tcHREaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbiAgY29uZmlybWF0aW9uPzogYm9vbGVhbjtcbiAgcHJvbXB0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRHZW5lcmljRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlybWF0aW9uXCIgKi8gXCIuL2RpYWxvZy1ib3hcIik7XG5cbmNvbnN0IHNob3dEaWFsb2dIZWxwZXIgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IERpYWxvZ1BhcmFtcyxcbiAgZXh0cmE/OiB7XG4gICAgY29uZmlybWF0aW9uPzogRGlhbG9nUGFyYW1zW1wiY29uZmlybWF0aW9uXCJdO1xuICAgIHByb21wdD86IERpYWxvZ1BhcmFtc1tcInByb21wdFwiXTtcbiAgfVxuKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdDYW5jZWwgPSBkaWFsb2dQYXJhbXMuY2FuY2VsO1xuICAgIGNvbnN0IG9yaWdDb25maXJtID0gZGlhbG9nUGFyYW1zLmNvbmZpcm07XG5cbiAgICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWJveFwiLFxuICAgICAgZGlhbG9nSW1wb3J0OiBsb2FkR2VuZXJpY0RpYWxvZyxcbiAgICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgICAuLi5kaWFsb2dQYXJhbXMsXG4gICAgICAgIC4uLmV4dHJhLFxuICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBudWxsIDogZmFsc2UpO1xuICAgICAgICAgIGlmIChvcmlnQ2FuY2VsKSB7XG4gICAgICAgICAgICBvcmlnQ2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiAob3V0KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gb3V0IDogdHJ1ZSk7XG4gICAgICAgICAgaWYgKG9yaWdDb25maXJtKSB7XG4gICAgICAgICAgICBvcmlnQ29uZmlybShvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FsZXJ0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBBbGVydERpYWxvZ1BhcmFtc1xuKSA9PiBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcyk7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBDb25maXJtYXRpb25EaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgY29uZmlybWF0aW9uOiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgYm9vbGVhblxuICA+O1xuXG5leHBvcnQgY29uc3Qgc2hvd1Byb21wdERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogUHJvbXB0RGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IHByb21wdDogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIG51bGwgfCBzdHJpbmdcbiAgPjtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IG1lbW9pemUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQge1xuICBEYXRhVGFibGVDb2x1bW5Db250YWluZXIsXG4gIFJvd0NsaWNrZWRFdmVudCxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5pbXBvcnQge1xuICBjcmVhdGVEYXNoYm9hcmQsXG4gIGRlbGV0ZURhc2hib2FyZCxcbiAgZmV0Y2hEYXNoYm9hcmRzLFxuICBMb3ZlbGFjZURhc2hib2FyZCxcbiAgTG92ZWxhY2VEYXNoYm9hcmRDcmVhdGVQYXJhbXMsXG4gIExvdmVsYWNlUGFuZWxDb25maWcsXG4gIHVwZGF0ZURhc2hib2FyZCxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IHNob3dDb25maXJtYXRpb25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBsb3ZlbGFjZVRhYnMgfSBmcm9tIFwiLi4vaGEtY29uZmlnLWxvdmVsYWNlXCI7XG5pbXBvcnQgeyBzaG93RGFzaGJvYXJkRGV0YWlsRGlhbG9nIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctbG92ZWxhY2UtZGFzaGJvYXJkLWRldGFpbFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvbmZpZy1sb3ZlbGFjZS1kYXNoYm9hcmRzXCIpXG5leHBvcnQgY2xhc3MgSGFDb25maWdMb3ZlbGFjZURhc2hib2FyZHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Rhc2hib2FyZHM6IExvdmVsYWNlRGFzaGJvYXJkW10gPSBbXTtcblxuICBwcml2YXRlIF9jb2x1bW5zID0gbWVtb2l6ZShcbiAgICAobmFycm93OiBib29sZWFuLCBfbGFuZ3VhZ2UsIGRhc2hib2FyZHMpOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPT4ge1xuICAgICAgY29uc3QgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyID0ge1xuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdHlwZTogXCJpY29uXCIsXG4gICAgICAgICAgdGVtcGxhdGU6IChpY29uKSA9PlxuICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICA/IGh0bWxgIDxoYS1pY29uIHNsb3Q9XCJpdGVtLWljb25cIiAuaWNvbj0ke2ljb259PjwvaGEtaWNvbj4gYFxuICAgICAgICAgICAgICA6IGh0bWxgYCxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5waWNrZXIuaGVhZGVycy50aXRsZVwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGRpcmVjdGlvbjogXCJhc2NcIixcbiAgICAgICAgICBncm93czogdHJ1ZSxcbiAgICAgICAgICB0ZW1wbGF0ZTogKHRpdGxlLCBkYXNoYm9hcmQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVUZW1wbGF0ZSA9IGh0bWxgXG4gICAgICAgICAgICAgICR7dGl0bGV9XG4gICAgICAgICAgICAgICR7ZGFzaGJvYXJkLmRlZmF1bHRcbiAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxoYS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDEwcHg7XCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpjaGVjay1jaXJjbGUtb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5kYXNoYm9hcmRzLmRlZmF1bHRfZGFzaGJvYXJkYFxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgcmV0dXJuIG5hcnJvd1xuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAke3RpdGxlVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5jb25mX21vZGUuJHtkYXNoYm9hcmQubW9kZX1gXG4gICAgICAgICAgICAgICAgICAgICl9JHtkYXNoYm9hcmQuZmlsZW5hbWVcbiAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgIC0gJHtkYXNoYm9hcmQuZmlsZW5hbWV9IGBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogdGl0bGVUZW1wbGF0ZTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgaWYgKCFuYXJyb3cpIHtcbiAgICAgICAgY29sdW1ucy5tb2RlID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5kYXNoYm9hcmRzLnBpY2tlci5oZWFkZXJzLmNvbmZfbW9kZVwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHdpZHRoOiBcIjIwJVwiLFxuICAgICAgICAgIHRlbXBsYXRlOiAobW9kZSkgPT5cbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5jb25mX21vZGUuJHttb2RlfWBcbiAgICAgICAgICAgICAgKSB8fCBtb2RlfVxuICAgICAgICAgICAgYCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRhc2hib2FyZHMuc29tZSgoZGFzaGJvYXJkKSA9PiBkYXNoYm9hcmQuZmlsZW5hbWUpKSB7XG4gICAgICAgICAgY29sdW1ucy5maWxlbmFtZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMucGlja2VyLmhlYWRlcnMuZmlsZW5hbWVcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHdpZHRoOiBcIjE1JVwiLFxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1ucy5yZXF1aXJlX2FkbWluID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5kYXNoYm9hcmRzLnBpY2tlci5oZWFkZXJzLnJlcXVpcmVfYWRtaW5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgdHlwZTogXCJpY29uXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICB0ZW1wbGF0ZTogKHJlcXVpcmVBZG1pbjogYm9vbGVhbikgPT5cbiAgICAgICAgICAgIHJlcXVpcmVBZG1pblxuICAgICAgICAgICAgICA/IGh0bWxgIDxoYS1pY29uIGljb249XCJoYXNzOmNoZWNrXCI+PC9oYS1pY29uPiBgXG4gICAgICAgICAgICAgIDogaHRtbGAgLSBgLFxuICAgICAgICB9O1xuICAgICAgICBjb2x1bW5zLnNob3dfaW5fc2lkZWJhciA9IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5waWNrZXIuaGVhZGVycy5zaWRlYmFyXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHR5cGU6IFwiaWNvblwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEyMXB4XCIsXG4gICAgICAgICAgdGVtcGxhdGU6IChzaWRlYmFyKSA9PlxuICAgICAgICAgICAgc2lkZWJhciA/IGh0bWxgIDxoYS1pY29uIGljb249XCJoYXNzOmNoZWNrXCI+PC9oYS1pY29uPiBgIDogaHRtbGAgLSBgLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb2x1bW5zLnVybF9wYXRoID0ge1xuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd2lkdGg6IFwiNzVweFwiLFxuICAgICAgICB0ZW1wbGF0ZTogKHVybFBhdGgpID0+XG4gICAgICAgICAgbmFycm93XG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpvcGVuLWluLW5ld1wiXG4gICAgICAgICAgICAgICAgICAudXJsUGF0aD0ke3VybFBhdGh9XG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9uYXZpZ2F0ZX1cbiAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIC51cmxQYXRoPSR7dXJsUGF0aH0gQGNsaWNrPSR7dGhpcy5fbmF2aWdhdGV9XG4gICAgICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMucGlja2VyLm9wZW5cIlxuICAgICAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGAsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG4gICk7XG5cbiAgcHJpdmF0ZSBfZ2V0SXRlbXMgPSBtZW1vaXplKChkYXNoYm9hcmRzOiBMb3ZlbGFjZURhc2hib2FyZFtdKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdE1vZGUgPSAodGhpcy5oYXNzLnBhbmVscz8ubG92ZWxhY2VcbiAgICAgID8uY29uZmlnIGFzIExvdmVsYWNlUGFuZWxDb25maWcpLm1vZGU7XG4gICAgY29uc3QgZGVmYXVsdFVybFBhdGggPSB0aGlzLmhhc3MuZGVmYXVsdFBhbmVsO1xuICAgIGNvbnN0IGlzRGVmYXVsdCA9IGRlZmF1bHRVcmxQYXRoID09PSBcImxvdmVsYWNlXCI7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJoYXNzOnZpZXctZGFzaGJvYXJkXCIsXG4gICAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXCJwYW5lbC5zdGF0ZXNcIiksXG4gICAgICAgIGRlZmF1bHQ6IGlzRGVmYXVsdCxcbiAgICAgICAgc2lkZWJhcjogaXNEZWZhdWx0LFxuICAgICAgICByZXF1aXJlX2FkbWluOiBmYWxzZSxcbiAgICAgICAgdXJsX3BhdGg6IFwibG92ZWxhY2VcIixcbiAgICAgICAgbW9kZTogZGVmYXVsdE1vZGUsXG4gICAgICAgIGZpbGVuYW1lOiBkZWZhdWx0TW9kZSA9PT0gXCJ5YW1sXCIgPyBcInVpLWxvdmVsYWNlLnlhbWxcIiA6IFwiXCIsXG4gICAgICB9LFxuICAgICAgLi4uZGFzaGJvYXJkcy5tYXAoKGRhc2hib2FyZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZpbGVuYW1lOiBcIlwiLFxuICAgICAgICAgIC4uLmRhc2hib2FyZCxcbiAgICAgICAgICBkZWZhdWx0OiBkZWZhdWx0VXJsUGF0aCA9PT0gZGFzaGJvYXJkLnVybF9wYXRoLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgXTtcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgdGhpcy5fZGFzaGJvYXJkcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaHRtbGAgPGhhc3MtbG9hZGluZy1zY3JlZW4+PC9oYXNzLWxvYWRpbmctc2NyZWVuPiBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3MtdGFicy1zdWJwYWdlLWRhdGEtdGFibGVcbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgYmFjay1wYXRoPVwiL2NvbmZpZ1wiXG4gICAgICAgIC5yb3V0ZT0ke3RoaXMucm91dGV9XG4gICAgICAgIC50YWJzPSR7bG92ZWxhY2VUYWJzfVxuICAgICAgICAuY29sdW1ucz0ke3RoaXMuX2NvbHVtbnMoXG4gICAgICAgICAgdGhpcy5uYXJyb3csXG4gICAgICAgICAgdGhpcy5oYXNzLmxhbmd1YWdlLFxuICAgICAgICAgIHRoaXMuX2Rhc2hib2FyZHNcbiAgICAgICAgKX1cbiAgICAgICAgLmRhdGE9JHt0aGlzLl9nZXRJdGVtcyh0aGlzLl9kYXNoYm9hcmRzKX1cbiAgICAgICAgQHJvdy1jbGljaz0ke3RoaXMuX2VkaXREYXNoYm9hcmR9XG4gICAgICAgIGlkPVwidXJsX3BhdGhcIlxuICAgICAgICBoYXNGYWJcbiAgICAgID5cbiAgICAgIDwvaGFzcy10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZT5cbiAgICAgIDxoYS1mYWJcbiAgICAgICAgP2lzLXdpZGU9JHt0aGlzLmlzV2lkZX1cbiAgICAgICAgP25hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgdGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5kYXNoYm9hcmRzLnBpY2tlci5hZGRfZGFzaGJvYXJkXCJcbiAgICAgICAgKX1cIlxuICAgICAgICBAY2xpY2s9JHt0aGlzLl9hZGREYXNoYm9hcmR9XG4gICAgICA+PC9oYS1mYWI+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2dldERhc2hib2FyZHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldERhc2hib2FyZHMoKSB7XG4gICAgdGhpcy5fZGFzaGJvYXJkcyA9IGF3YWl0IGZldGNoRGFzaGJvYXJkcyh0aGlzLmhhc3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbmF2aWdhdGUoZXY6IEV2ZW50KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgdXJsID0gYC8keyhldi50YXJnZXQgYXMgYW55KS51cmxQYXRofWA7XG4gICAgbmF2aWdhdGUodGhpcywgdXJsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2VkaXREYXNoYm9hcmQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgdXJsUGF0aCA9IChldi5kZXRhaWwgYXMgUm93Q2xpY2tlZEV2ZW50KS5pZDtcbiAgICBjb25zdCBkYXNoYm9hcmQgPSB0aGlzLl9kYXNoYm9hcmRzLmZpbmQoKHJlcykgPT4gcmVzLnVybF9wYXRoID09PSB1cmxQYXRoKTtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKGRhc2hib2FyZCwgdXJsUGF0aCk7XG4gIH1cblxuICBwcml2YXRlIF9hZGREYXNoYm9hcmQoKSB7XG4gICAgdGhpcy5fb3BlbkRpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb3BlbkRpYWxvZyhcbiAgICBkYXNoYm9hcmQ/OiBMb3ZlbGFjZURhc2hib2FyZCxcbiAgICB1cmxQYXRoPzogc3RyaW5nXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHNob3dEYXNoYm9hcmREZXRhaWxEaWFsb2codGhpcywge1xuICAgICAgZGFzaGJvYXJkLFxuICAgICAgdXJsUGF0aCxcbiAgICAgIGNyZWF0ZURhc2hib2FyZDogYXN5bmMgKHZhbHVlczogTG92ZWxhY2VEYXNoYm9hcmRDcmVhdGVQYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IGNyZWF0ZURhc2hib2FyZCh0aGlzLmhhc3MhLCB2YWx1ZXMpO1xuICAgICAgICB0aGlzLl9kYXNoYm9hcmRzID0gdGhpcy5fZGFzaGJvYXJkcyEuY29uY2F0KFxuICAgICAgICAgIGNyZWF0ZWRcbiAgICAgICAgKS5zb3J0KChyZXMxLCByZXMyKSA9PiBjb21wYXJlKHJlczEudXJsX3BhdGgsIHJlczIudXJsX3BhdGgpKTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGVEYXNoYm9hcmQ6IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHVwZGF0ZURhc2hib2FyZChcbiAgICAgICAgICB0aGlzLmhhc3MhLFxuICAgICAgICAgIGRhc2hib2FyZCEuaWQsXG4gICAgICAgICAgdmFsdWVzXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2Rhc2hib2FyZHMgPSB0aGlzLl9kYXNoYm9hcmRzIS5tYXAoKHJlcykgPT5cbiAgICAgICAgICByZXMgPT09IGRhc2hib2FyZCA/IHVwZGF0ZWQgOiByZXNcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVEYXNoYm9hcmQ6IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoYXdhaXQgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5kYXNoYm9hcmRzLmNvbmZpcm1fZGVsZXRlXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSkpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgZGVsZXRlRGFzaGJvYXJkKHRoaXMuaGFzcyEsIGRhc2hib2FyZCEuaWQpO1xuICAgICAgICAgIHRoaXMuX2Rhc2hib2FyZHMgPSB0aGlzLl9kYXNoYm9hcmRzIS5maWx0ZXIoXG4gICAgICAgICAgICAocmVzKSA9PiByZXMgIT09IGRhc2hib2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGhhLWZhYiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgIGhhLWZhYltpcy13aWRlXSB7XG4gICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBoYS1mYWJbbmFycm93XSB7XG4gICAgICAgIGJvdHRvbTogODRweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBMb3ZlbGFjZURhc2hib2FyZCxcbiAgTG92ZWxhY2VEYXNoYm9hcmRDcmVhdGVQYXJhbXMsXG4gIExvdmVsYWNlRGFzaGJvYXJkTXV0YWJsZVBhcmFtcyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZURhc2hib2FyZERldGFpbHNEaWFsb2dQYXJhbXMge1xuICBkYXNoYm9hcmQ/OiBMb3ZlbGFjZURhc2hib2FyZDtcbiAgdXJsUGF0aD86IHN0cmluZztcbiAgY3JlYXRlRGFzaGJvYXJkOiAodmFsdWVzOiBMb3ZlbGFjZURhc2hib2FyZENyZWF0ZVBhcmFtcykgPT4gUHJvbWlzZTx1bmtub3duPjtcbiAgdXBkYXRlRGFzaGJvYXJkOiAoXG4gICAgdXBkYXRlczogUGFydGlhbDxMb3ZlbGFjZURhc2hib2FyZE11dGFibGVQYXJhbXM+XG4gICkgPT4gUHJvbWlzZTx1bmtub3duPjtcbiAgcmVtb3ZlRGFzaGJvYXJkOiAoKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZERhc2hib2FyZERldGFpbERpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxvdmVsYWNlLWRhc2hib2FyZC1kZXRhaWwtZGlhbG9nXCIgKi8gXCIuL2RpYWxvZy1sb3ZlbGFjZS1kYXNoYm9hcmQtZGV0YWlsXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNob3dEYXNoYm9hcmREZXRhaWxEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IExvdmVsYWNlRGFzaGJvYXJkRGV0YWlsc0RpYWxvZ1BhcmFtc1xuKSA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWxvdmVsYWNlLWRhc2hib2FyZC1kZXRhaWxcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWREYXNoYm9hcmREZXRhaWxEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFJQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrS0E7QUFFQTtBQURBO0FBSUE7QUFLQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBSUE7QUFEQTtBQUlBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFnQkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7O0FDMVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBLDZnQkFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFIQTtBQW9CQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBQUE7QUFJQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFPQTs7QUFQQTtBQUZBO0FBZ0JBO0FBRUE7O0FBRUE7O0FBSkE7QUFZQTtBQXJDQTtBQVRBO0FBQ0E7QUFpREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFUQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFZQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFDQTs7QUFMQTtBQVNBO0FBQ0E7OztBQWZBO0FBc0JBO0FBQ0E7QUF0SUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXlJQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFFQTtBQWpLQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7O0FBRUE7QUFHQTs7QUF6QkE7QUE0QkE7QUFwTUE7QUFBQTtBQUFBO0FBQUE7QUF1TUE7QUFDQTtBQUFBO0FBQ0E7QUF6TUE7QUFBQTtBQUFBO0FBQUE7QUE0TUE7QUFDQTtBQTdNQTtBQUFBO0FBQUE7QUFBQTtBQWdOQTtBQUNBO0FBQ0E7QUFDQTtBQW5OQTtBQUFBO0FBQUE7QUFBQTtBQXNOQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUF6TkE7QUFBQTtBQUFBO0FBQUE7QUE0TkE7QUFDQTtBQTdOQTtBQUFBO0FBQUE7QUFBQTtBQW1PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBeUNBO0FBNVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErUUE7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFlQTtBQTlSQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJBLHd0QkFFQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
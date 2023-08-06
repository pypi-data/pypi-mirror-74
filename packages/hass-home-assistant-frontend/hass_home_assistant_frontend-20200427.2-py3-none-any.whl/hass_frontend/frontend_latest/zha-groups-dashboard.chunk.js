(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-groups-dashboard"],{

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/*! exports provided: afterNextRender, nextRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterNextRender", function() { return afterNextRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRender", function() { return nextRender; });
const afterNextRender = cb => {
  requestAnimationFrame(() => setTimeout(cb, 0));
};
const nextRender = () => {
  return new Promise(resolve => {
    afterNextRender(resolve);
  });
};

/***/ }),

/***/ "./src/components/entity/ha-state-icon.js":
/*!************************************************!*\
  !*** ./src/components/entity/ha-state-icon.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ha-icon */ "./src/components/ha-icon.ts");

/* eslint-plugin-disable lit */





class HaStateIcon extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]` <ha-icon icon="[[computeIcon(stateObj)]]"></ha-icon> `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object
      }
    };
  }

  computeIcon(stateObj) {
    return Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_2__["stateIcon"])(stateObj);
  }

}

customElements.define("ha-state-icon", HaStateIcon);

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

/***/ "./src/data/zha.ts":
/*!*************************!*\
  !*** ./src/data/zha.ts ***!
  \*************************/
/*! exports provided: reconfigureNode, fetchAttributesForCluster, fetchDevices, fetchZHADevice, fetchBindableDevices, bindDevices, unbindDevices, bindDeviceToGroup, unbindDeviceFromGroup, readAttributeValue, fetchCommandsForCluster, fetchClustersForZhaNode, fetchGroups, removeGroups, fetchGroup, fetchGroupableDevices, addMembersToGroup, removeMembersFromGroup, addGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reconfigureNode", function() { return reconfigureNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAttributesForCluster", function() { return fetchAttributesForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDevices", function() { return fetchDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchZHADevice", function() { return fetchZHADevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBindableDevices", function() { return fetchBindableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDevices", function() { return bindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindDevices", function() { return unbindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDeviceToGroup", function() { return bindDeviceToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindDeviceFromGroup", function() { return unbindDeviceFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAttributeValue", function() { return readAttributeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCommandsForCluster", function() { return fetchCommandsForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClustersForZhaNode", function() { return fetchClustersForZhaNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroups", function() { return removeGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroup", function() { return fetchGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroupableDevices", function() { return fetchGroupableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMembersToGroup", function() { return addMembersToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMembersFromGroup", function() { return removeMembersFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
const reconfigureNode = (hass, ieeeAddress) => hass.callWS({
  type: "zha/devices/reconfigure",
  ieee: ieeeAddress
});
const fetchAttributesForCluster = (hass, ieeeAddress, endpointId, clusterId, clusterType) => hass.callWS({
  type: "zha/devices/clusters/attributes",
  ieee: ieeeAddress,
  endpoint_id: endpointId,
  cluster_id: clusterId,
  cluster_type: clusterType
});
const fetchDevices = hass => hass.callWS({
  type: "zha/devices"
});
const fetchZHADevice = (hass, ieeeAddress) => hass.callWS({
  type: "zha/device",
  ieee: ieeeAddress
});
const fetchBindableDevices = (hass, ieeeAddress) => hass.callWS({
  type: "zha/devices/bindable",
  ieee: ieeeAddress
});
const bindDevices = (hass, sourceIEEE, targetIEEE) => hass.callWS({
  type: "zha/devices/bind",
  source_ieee: sourceIEEE,
  target_ieee: targetIEEE
});
const unbindDevices = (hass, sourceIEEE, targetIEEE) => hass.callWS({
  type: "zha/devices/unbind",
  source_ieee: sourceIEEE,
  target_ieee: targetIEEE
});
const bindDeviceToGroup = (hass, deviceIEEE, groupId, clusters) => hass.callWS({
  type: "zha/groups/bind",
  source_ieee: deviceIEEE,
  group_id: groupId,
  bindings: clusters
});
const unbindDeviceFromGroup = (hass, deviceIEEE, groupId, clusters) => hass.callWS({
  type: "zha/groups/unbind",
  source_ieee: deviceIEEE,
  group_id: groupId,
  bindings: clusters
});
const readAttributeValue = (hass, data) => {
  return hass.callWS(Object.assign({}, data, {
    type: "zha/devices/clusters/attributes/value"
  }));
};
const fetchCommandsForCluster = (hass, ieeeAddress, endpointId, clusterId, clusterType) => hass.callWS({
  type: "zha/devices/clusters/commands",
  ieee: ieeeAddress,
  endpoint_id: endpointId,
  cluster_id: clusterId,
  cluster_type: clusterType
});
const fetchClustersForZhaNode = (hass, ieeeAddress) => hass.callWS({
  type: "zha/devices/clusters",
  ieee: ieeeAddress
});
const fetchGroups = hass => hass.callWS({
  type: "zha/groups"
});
const removeGroups = (hass, groupIdsToRemove) => hass.callWS({
  type: "zha/group/remove",
  group_ids: groupIdsToRemove
});
const fetchGroup = (hass, groupId) => hass.callWS({
  type: "zha/group",
  group_id: groupId
});
const fetchGroupableDevices = hass => hass.callWS({
  type: "zha/devices/groupable"
});
const addMembersToGroup = (hass, groupId, membersToAdd) => hass.callWS({
  type: "zha/group/members/add",
  group_id: groupId,
  members: membersToAdd
});
const removeMembersFromGroup = (hass, groupId, membersToRemove) => hass.callWS({
  type: "zha/group/members/remove",
  group_id: groupId,
  members: membersToRemove
});
const addGroup = (hass, groupName, membersToAdd) => hass.callWS({
  type: "zha/group/add",
  group_name: groupName,
  members: membersToAdd
});

/***/ }),

/***/ "./src/panels/config/zha/functions.ts":
/*!********************************************!*\
  !*** ./src/panels/config/zha/functions.ts ***!
  \********************************************/
/*! exports provided: formatAsPaddedHex, sortZHADevices, sortZHAGroups, computeClusterKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAsPaddedHex", function() { return formatAsPaddedHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortZHADevices", function() { return sortZHADevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortZHAGroups", function() { return sortZHAGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeClusterKey", function() { return computeClusterKey; });
const formatAsPaddedHex = value => {
  let hex = value;

  if (typeof value === "string") {
    hex = parseInt(value, 16);
  }

  return "0x" + hex.toString(16).padStart(4, "0");
};
const sortZHADevices = (a, b) => {
  const nameA = a.user_given_name ? a.user_given_name : a.name;
  const nameb = b.user_given_name ? b.user_given_name : b.name;
  return nameA.localeCompare(nameb);
};
const sortZHAGroups = (a, b) => {
  const nameA = a.name;
  const nameb = b.name;
  return nameA.localeCompare(nameb);
};
const computeClusterKey = cluster => {
  return `${cluster.name} (Endpoint id: ${cluster.endpoint_id}, Id: ${formatAsPaddedHex(cluster.id)}, Type: ${cluster.type})`;
};

/***/ }),

/***/ "./src/panels/config/zha/zha-groups-dashboard.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/zha/zha-groups-dashboard.ts ***!
  \*******************************************************/
/*! exports provided: ZHAGroupsDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAGroupsDashboard", function() { return ZHAGroupsDashboard; });
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
/* harmony import */ var _zha_groups_data_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zha-groups-data-table */ "./src/panels/config/zha/zha-groups-data-table.ts");
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










let ZHAGroupsDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("zha-groups-dashboard")], function (_initialize, _LitElement) {
  class ZHAGroupsDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAGroupsDashboard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "narrow",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_groups",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_processingRemove",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_selectedGroupsToRemove",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_firstUpdatedCalled",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHAGroupsDashboard.prototype), "connectedCallback", this).call(this);

        if (this.hass && this._firstUpdatedCalled) {
          this._fetchGroups();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHAGroupsDashboard.prototype), "firstUpdated", this).call(this, changedProperties);

        if (this.hass) {
          this._fetchGroups();
        }

        this._firstUpdatedCalled = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.zha.groups.groups-header")}
      >
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:plus"
          @click=${this._addGroup}
        ></paper-icon-button>

        <div class="content">
          ${this._groups ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <zha-groups-data-table
                  .hass=${this.hass}
                  .narrow=${this.narrow}
                  .groups=${this._groups}
                  .selectable=${true}
                  @selection-changed=${this._handleRemoveSelectionChanged}
                  class="table"
                ></zha-groups-data-table>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <paper-spinner
                  active
                  alt=${this.hass.localize("ui.common.loading")}
                ></paper-spinner>
              `}
        </div>
        <div class="paper-dialog-buttons">
          <mwc-button
            ?disabled="${!this._selectedGroupsToRemove.length || this._processingRemove}"
            @click="${this._removeGroup}"
            class="button"
          >
            <paper-spinner
              ?active="${this._processingRemove}"
              alt=${this.hass.localize("ui.panel.config.zha.groups.removing_groups")}
            ></paper-spinner>
            ${this.hass.localize("ui.panel.config.zha.groups.remove_groups")}</mwc-button
          >
        </div>
      </hass-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_fetchGroups",
      value: async function _fetchGroups() {
        this._groups = (await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["fetchGroups"])(this.hass)).sort(_functions__WEBPACK_IMPORTED_MODULE_7__["sortZHAGroups"]);
      }
    }, {
      kind: "method",
      key: "_handleRemoveSelectionChanged",
      value: function _handleRemoveSelectionChanged(ev) {
        this._selectedGroupsToRemove = ev.detail.value.map(value => Number(value));
      }
    }, {
      kind: "method",
      key: "_removeGroup",
      value: async function _removeGroup() {
        this._processingRemove = true;
        this._groups = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["removeGroups"])(this.hass, this._selectedGroupsToRemove);
        this._selectedGroupsToRemove = [];
        this._processingRemove = false;
      }
    }, {
      kind: "method",
      key: "_addGroup",
      value: async function _addGroup() {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, `/config/zha/group-add`);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        .content {
          padding: 4px;
        }
        zha-groups-data-table {
          width: 100%;
        }
        .button {
          float: right;
        }
        .table {
          height: 200px;
          overflow: auto;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        .paper-dialog-buttons {
          align-items: flex-end;
          padding: 8px;
        }
        .paper-dialog-buttons .warning {
          --mdc-theme-primary: var(--google-red-500);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/zha/zha-groups-data-table.ts":
/*!********************************************************!*\
  !*** ./src/panels/config/zha/zha-groups-data-table.ts ***!
  \********************************************************/
/*! exports provided: ZHAGroupsDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAGroupsDataTable", function() { return ZHAGroupsDataTable; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _components_entity_ha_state_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/entity/ha-state-icon */ "./src/components/entity/ha-state-icon.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
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







let ZHAGroupsDataTable = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("zha-groups-data-table")], function (_initialize, _LitElement) {
  class ZHAGroupsDataTable extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAGroupsDataTable,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "groups",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "selectable",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("ha-data-table")],
      key: "_dataTable",
      value: void 0
    }, {
      kind: "field",
      key: "_groups",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(groups => {
          let outputGroups = groups;
          outputGroups = outputGroups.map(group => {
            return Object.assign({}, group, {
              id: String(group.group_id)
            });
          });
          return outputGroups;
        });
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(narrow => narrow ? {
          name: {
            title: "Group",
            sortable: true,
            filterable: true,
            direction: "asc",
            grows: true,
            template: name => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div @click=${this._handleRowClicked} style="cursor: pointer;">
                  ${name}
                </div>
              `
          }
        } : {
          name: {
            title: this.hass.localize("ui.panel.config.zha.groups.groups"),
            sortable: true,
            filterable: true,
            direction: "asc",
            grows: true,
            template: name => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div @click=${this._handleRowClicked} style="cursor: pointer;">
                  ${name}
                </div>
              `
          },
          group_id: {
            title: this.hass.localize("ui.panel.config.zha.groups.group_id"),
            type: "numeric",
            width: "15%",
            template: groupId => {
              return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` ${Object(_functions__WEBPACK_IMPORTED_MODULE_5__["formatAsPaddedHex"])(groupId)} `;
            },
            sortable: true
          },
          members: {
            title: this.hass.localize("ui.panel.config.zha.groups.members"),
            type: "numeric",
            width: "15%",
            template: members => {
              return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` ${members.length} `;
            },
            sortable: true
          }
        });
      }

    }, {
      kind: "method",
      key: "clearSelection",
      value: function clearSelection() {
        this._dataTable.clearSelection();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-data-table
        .columns=${this._columns(this.narrow)}
        .data=${this._groups(this.groups)}
        .selectable=${this.selectable}
        auto-height
      ></ha-data-table>
    `;
      }
    }, {
      kind: "method",
      key: "_handleRowClicked",
      value: function _handleRowClicked(ev) {
        const groupId = ev.target.closest(".mdc-data-table__row").rowId;
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_2__["navigate"])(this, `/config/zha/group/${groupId}`);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWdyb3Vwcy1kYXNoYm9hcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvcmVuZGVyLXN0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtc3RhdGUtaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3poYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvZnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtZ3JvdXBzLWRhc2hib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWdyb3Vwcy1kYXRhLXRhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZnRlck5leHRSZW5kZXIgPSAoY2I6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldFRpbWVvdXQoY2IsIDApKTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXh0UmVuZGVyID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBhZnRlck5leHRSZW5kZXIocmVzb2x2ZSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBzdGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5pbXBvcnQgXCIuLi9oYS1pY29uXCI7XG5cbmNsYXNzIEhhU3RhdGVJY29uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYCA8aGEtaWNvbiBpY29uPVwiW1tjb21wdXRlSWNvbihzdGF0ZU9iaildXVwiPjwvaGEtaWNvbj4gYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUljb24oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVJY29uKHN0YXRlT2JqKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zdGF0ZS1pY29uXCIsIEhhU3RhdGVJY29uKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCB0eXBlIHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBaSEFFbnRpdHlSZWZlcmVuY2UgZXh0ZW5kcyBIYXNzRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpIQURldmljZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWVlZTogc3RyaW5nO1xuICBud2s6IHN0cmluZztcbiAgbHFpOiBzdHJpbmc7XG4gIHJzc2k6IHN0cmluZztcbiAgbGFzdF9zZWVuOiBzdHJpbmc7XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBxdWlya19hcHBsaWVkOiBib29sZWFuO1xuICBxdWlya19jbGFzczogc3RyaW5nO1xuICBlbnRpdGllczogWkhBRW50aXR5UmVmZXJlbmNlW107XG4gIG1hbnVmYWN0dXJlcl9jb2RlOiBudW1iZXI7XG4gIGRldmljZV9yZWdfaWQ6IHN0cmluZztcbiAgdXNlcl9naXZlbl9uYW1lPzogc3RyaW5nO1xuICBwb3dlcl9zb3VyY2U/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV90eXBlOiBzdHJpbmc7XG4gIHNpZ25hdHVyZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbHVzdGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBlbmRwb2ludF9pZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSB7XG4gIGllZWU6IHN0cmluZztcbiAgZW5kcG9pbnRfaWQ6IG51bWJlcjtcbiAgY2x1c3Rlcl9pZDogbnVtYmVyO1xuICBjbHVzdGVyX3R5cGU6IHN0cmluZztcbiAgYXR0cmlidXRlOiBudW1iZXI7XG4gIG1hbnVmYWN0dXJlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaSEFHcm91cCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ3JvdXBfaWQ6IG51bWJlcjtcbiAgbWVtYmVyczogWkhBRGV2aWNlW107XG59XG5cbmV4cG9ydCBjb25zdCByZWNvbmZpZ3VyZU5vZGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvcmVjb25maWd1cmVcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF0dHJpYnV0ZXNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPEF0dHJpYnV0ZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gICAgZW5kcG9pbnRfaWQ6IGVuZHBvaW50SWQsXG4gICAgY2x1c3Rlcl9pZDogY2x1c3RlcklkLFxuICAgIGNsdXN0ZXJfdHlwZTogY2x1c3RlclR5cGUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWkhBRGV2aWNlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmluZGFibGVEZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kYWJsZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGJpbmREZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzb3VyY2VJRUVFOiBzdHJpbmcsXG4gIHRhcmdldElFRUU6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdW5iaW5kRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc291cmNlSUVFRTogc3RyaW5nLFxuICB0YXJnZXRJRUVFOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYmluZERldmljZVRvR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBkZXZpY2VJRUVFLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICAgIGJpbmRpbmdzOiBjbHVzdGVycyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1bmJpbmREZXZpY2VGcm9tR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IGRldmljZUlFRUUsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgYmluZGluZ3M6IGNsdXN0ZXJzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlYWRBdHRyaWJ1dGVWYWx1ZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGF0YTogUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gaGFzcy5jYWxsV1Moe1xuICAgIC4uLmRhdGEsXG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzL3ZhbHVlXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29tbWFuZHNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPENvbW1hbmRbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvY29tbWFuZHNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgICBlbmRwb2ludF9pZDogZW5kcG9pbnRJZCxcbiAgICBjbHVzdGVyX2lkOiBjbHVzdGVySWQsXG4gICAgY2x1c3Rlcl90eXBlOiBjbHVzdGVyVHlwZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTxDbHVzdGVyW10+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hHcm91cHMgPSAoaGFzczogSG9tZUFzc2lzdGFudCk6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3Vwc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUdyb3VwcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZ3JvdXBJZHNUb1JlbW92ZTogbnVtYmVyW11cbik6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL3JlbW92ZVwiLFxuICAgIGdyb3VwX2lkczogZ3JvdXBJZHNUb1JlbW92ZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdyb3VwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBncm91cElkOiBudW1iZXJcbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cFwiLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JvdXBhYmxlRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvZ3JvdXBhYmxlXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYWRkTWVtYmVyc1RvR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvQWRkOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvYWRkXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZU1lbWJlcnNGcm9tR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvUmVtb3ZlOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvcmVtb3ZlXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvUmVtb3ZlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGFkZEdyb3VwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBncm91cE5hbWU6IHN0cmluZyxcbiAgbWVtYmVyc1RvQWRkPzogc3RyaW5nW11cbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cC9hZGRcIixcbiAgICBncm91cF9uYW1lOiBncm91cE5hbWUsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcbiIsImltcG9ydCB7IENsdXN0ZXIsIFpIQURldmljZSwgWkhBR3JvdXAgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEFzUGFkZGVkSGV4ID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgaGV4ID0gdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBoZXggPSBwYXJzZUludCh2YWx1ZSwgMTYpO1xuICB9XG4gIHJldHVybiBcIjB4XCIgKyBoZXgudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDQsIFwiMFwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0WkhBRGV2aWNlcyA9IChhOiBaSEFEZXZpY2UsIGI6IFpIQURldmljZSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IG5hbWVBID0gYS51c2VyX2dpdmVuX25hbWUgPyBhLnVzZXJfZ2l2ZW5fbmFtZSA6IGEubmFtZTtcbiAgY29uc3QgbmFtZWIgPSBiLnVzZXJfZ2l2ZW5fbmFtZSA/IGIudXNlcl9naXZlbl9uYW1lIDogYi5uYW1lO1xuICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lYik7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFpIQUdyb3VwcyA9IChhOiBaSEFHcm91cCwgYjogWkhBR3JvdXApOiBudW1iZXIgPT4ge1xuICBjb25zdCBuYW1lQSA9IGEubmFtZTtcbiAgY29uc3QgbmFtZWIgPSBiLm5hbWU7XG4gIHJldHVybiBuYW1lQS5sb2NhbGVDb21wYXJlKG5hbWViKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlQ2x1c3RlcktleSA9IChjbHVzdGVyOiBDbHVzdGVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGAke2NsdXN0ZXIubmFtZX0gKEVuZHBvaW50IGlkOiAke1xuICAgIGNsdXN0ZXIuZW5kcG9pbnRfaWRcbiAgfSwgSWQ6ICR7Zm9ybWF0QXNQYWRkZWRIZXgoY2x1c3Rlci5pZCl9LCBUeXBlOiAke2NsdXN0ZXIudHlwZX0pYDtcbn07XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSEFTU0RvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7IGZldGNoR3JvdXBzLCByZW1vdmVHcm91cHMsIFpIQUdyb3VwIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc29ydFpIQUdyb3VwcyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi96aGEtZ3JvdXBzLWRhdGEtdGFibGVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJ6aGEtZ3JvdXBzLWRhc2hib2FyZFwiKVxuZXhwb3J0IGNsYXNzIFpIQUdyb3Vwc0Rhc2hib2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBfZ3JvdXBzPzogWkhBR3JvdXBbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wcm9jZXNzaW5nUmVtb3ZlID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRHcm91cHNUb1JlbW92ZTogbnVtYmVyW10gPSBbXTtcblxuICBwcml2YXRlIF9maXJzdFVwZGF0ZWRDYWxsZWQgPSBmYWxzZTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5oYXNzICYmIHRoaXMuX2ZpcnN0VXBkYXRlZENhbGxlZCkge1xuICAgICAgdGhpcy5fZmV0Y2hHcm91cHMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKHRoaXMuaGFzcykge1xuICAgICAgdGhpcy5fZmV0Y2hHcm91cHMoKTtcbiAgICB9XG4gICAgdGhpcy5fZmlyc3RVcGRhdGVkQ2FsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICAuaGVhZGVyPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmdyb3Vwcy1oZWFkZXJcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9hZGRHcm91cH1cbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAke3RoaXMuX2dyb3Vwc1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDx6aGEtZ3JvdXBzLWRhdGEtdGFibGVcbiAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgICAgICAgLmdyb3Vwcz0ke3RoaXMuX2dyb3Vwc31cbiAgICAgICAgICAgICAgICAgIC5zZWxlY3RhYmxlPSR7dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIEBzZWxlY3Rpb24tY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVJlbW92ZVNlbGVjdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRhYmxlXCJcbiAgICAgICAgICAgICAgICA+PC96aGEtZ3JvdXBzLWRhdGEtdGFibGU+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lclxuICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICBhbHQ9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLmxvYWRpbmdcIil9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICA/ZGlzYWJsZWQ9XCIkeyF0aGlzLl9zZWxlY3RlZEdyb3Vwc1RvUmVtb3ZlLmxlbmd0aCB8fFxuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ1JlbW92ZX1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9yZW1vdmVHcm91cH1cIlxuICAgICAgICAgICAgY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgID9hY3RpdmU9XCIke3RoaXMuX3Byb2Nlc3NpbmdSZW1vdmV9XCJcbiAgICAgICAgICAgICAgYWx0PSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLnJlbW92aW5nX2dyb3Vwc1wiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLnJlbW92ZV9ncm91cHNcIlxuICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoR3JvdXBzKCkge1xuICAgIHRoaXMuX2dyb3VwcyA9IChhd2FpdCBmZXRjaEdyb3Vwcyh0aGlzLmhhc3MhKSkuc29ydChzb3J0WkhBR3JvdXBzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJlbW92ZVNlbGVjdGlvbkNoYW5nZWQoXG4gICAgZXY6IEhBU1NEb21FdmVudDxTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkR3JvdXBzVG9SZW1vdmUgPSBldi5kZXRhaWwudmFsdWUubWFwKCh2YWx1ZSkgPT5cbiAgICAgIE51bWJlcih2YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVtb3ZlR3JvdXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ1JlbW92ZSA9IHRydWU7XG4gICAgdGhpcy5fZ3JvdXBzID0gYXdhaXQgcmVtb3ZlR3JvdXBzKHRoaXMuaGFzcywgdGhpcy5fc2VsZWN0ZWRHcm91cHNUb1JlbW92ZSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRHcm91cHNUb1JlbW92ZSA9IFtdO1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdSZW1vdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2FkZEdyb3VwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIG5hdmlnYXRlKHRoaXMsIGAvY29uZmlnL3poYS9ncm91cC1hZGRgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICB9XG4gICAgICAgIHpoYS1ncm91cHMtZGF0YS10YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZSB7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyW2FjdGl2ZV0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5wYXBlci1kaWFsb2ctYnV0dG9ucyB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAucGFwZXItZGlhbG9nLWJ1dHRvbnMgLndhcm5pbmcge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6aGEtZ3JvdXBzLWRhc2hib2FyZFwiOiBaSEFHcm91cHNEYXNoYm9hcmQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgdHlwZSB7XG4gIERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lcixcbiAgSGFEYXRhVGFibGUsXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtc3RhdGUtaWNvblwiO1xuaW1wb3J0IHR5cGUgeyBaSEFEZXZpY2UsIFpIQUdyb3VwIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZvcm1hdEFzUGFkZGVkSGV4IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBSb3dEYXRhIGV4dGVuZHMgWkhBR3JvdXAge1xuICBncm91cD86IEdyb3VwUm93RGF0YTtcbiAgaWQ/OiBzdHJpbmc7XG59XG5cbkBjdXN0b21FbGVtZW50KFwiemhhLWdyb3Vwcy1kYXRhLXRhYmxlXCIpXG5leHBvcnQgY2xhc3MgWkhBR3JvdXBzRGF0YVRhYmxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGdyb3VwczogWkhBR3JvdXBbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgQHF1ZXJ5KFwiaGEtZGF0YS10YWJsZVwiKSBwcml2YXRlIF9kYXRhVGFibGUhOiBIYURhdGFUYWJsZTtcblxuICBwcml2YXRlIF9ncm91cHMgPSBtZW1vaXplT25lKChncm91cHM6IFpIQUdyb3VwW10pID0+IHtcbiAgICBsZXQgb3V0cHV0R3JvdXBzOiBHcm91cFJvd0RhdGFbXSA9IGdyb3VwcztcblxuICAgIG91dHB1dEdyb3VwcyA9IG91dHB1dEdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5ncm91cCxcbiAgICAgICAgaWQ6IFN0cmluZyhncm91cC5ncm91cF9pZCksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG91dHB1dEdyb3VwcztcbiAgfSk7XG5cbiAgcHJpdmF0ZSBfY29sdW1ucyA9IG1lbW9pemVPbmUoXG4gICAgKG5hcnJvdzogYm9vbGVhbik6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9PlxuICAgICAgbmFycm93XG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJHcm91cFwiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICAgICAgICBncm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6IChuYW1lKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPSR7dGhpcy5faGFuZGxlUm93Q2xpY2tlZH0gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAke25hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5ncm91cHNcIiksXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgICAgICAgIGdyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogKG5hbWUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVSb3dDbGlja2VkfSBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICR7bmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cF9pZDoge1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMuZ3JvdXBfaWRcIiksXG4gICAgICAgICAgICAgIHR5cGU6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIxNSVcIixcbiAgICAgICAgICAgICAgdGVtcGxhdGU6IChncm91cElkOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGAgJHtmb3JtYXRBc1BhZGRlZEhleChncm91cElkKX0gYDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWVtYmVyczoge1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMubWVtYmVyc1wiKSxcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjE1JVwiLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogKG1lbWJlcnM6IFpIQURldmljZVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgICR7bWVtYmVycy5sZW5ndGh9IGA7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICk7XG5cbiAgcHVibGljIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuX2RhdGFUYWJsZS5jbGVhclNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtZGF0YS10YWJsZVxuICAgICAgICAuY29sdW1ucz0ke3RoaXMuX2NvbHVtbnModGhpcy5uYXJyb3cpfVxuICAgICAgICAuZGF0YT0ke3RoaXMuX2dyb3Vwcyh0aGlzLmdyb3Vwcyl9XG4gICAgICAgIC5zZWxlY3RhYmxlPSR7dGhpcy5zZWxlY3RhYmxlfVxuICAgICAgICBhdXRvLWhlaWdodFxuICAgICAgPjwvaGEtZGF0YS10YWJsZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUm93Q2xpY2tlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCBncm91cElkID0gKChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoXG4gICAgICBcIi5tZGMtZGF0YS10YWJsZV9fcm93XCJcbiAgICApIGFzIGFueSkucm93SWQ7XG4gICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvemhhL2dyb3VwLyR7Z3JvdXBJZH1gKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWdyb3Vwcy1kYXRhLXRhYmxlXCI6IFpIQUdyb3Vwc0RhdGFUYWJsZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUNBO0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUlBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUM0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUVBO0FBREE7QUFJQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUlBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFEQTtBQUlBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUlBO0FBREE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ3JQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFBQTtBQTZCQTs7QUFFQTs7Ozs7QUFPQTs7OztBQUlBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVBBOzs7QUFjQTs7QUFFQTs7OztBQUlBO0FBRUE7Ozs7QUFJQTtBQUNBOztBQUlBOzs7O0FBNUNBO0FBbURBO0FBaEZBO0FBQUE7QUFBQTtBQUFBO0FBbUZBO0FBQ0E7QUFwRkE7QUFBQTtBQUFBO0FBQUE7QUF5RkE7QUFHQTtBQTVGQTtBQUFBO0FBQUE7QUFBQTtBQStGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkdBO0FBQUE7QUFBQTtBQUFBO0FBc0dBO0FBQ0E7QUF2R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1DQTtBQTdJQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFRQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBUUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFZQTtBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBdEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFSQTtBQURBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFSQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQXRCQTtBQXpDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUE0RUE7QUFDQTtBQTdFQTtBQUFBO0FBQUE7QUFBQTtBQWdGQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUpBO0FBUUE7QUF4RkE7QUFBQTtBQUFBO0FBQUE7QUEyRkE7QUFHQTtBQUNBO0FBL0ZBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
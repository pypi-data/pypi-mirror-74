(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-config-dashboard"],{

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

/***/ "./src/components/ha-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
/*! exports provided: HaIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIconNext", function() { return HaIconNext; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
 // Not duplicate, this is for typing.
// eslint-disable-next-line


class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"] {
  connectedCallback() {
    super.connectedCallback(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      this.icon = window.getComputedStyle(this).direction === "ltr" ? "hass:chevron-right" : "hass:chevron-left";
    }, 100);
  }

}
customElements.define("ha-icon-next", HaIconNext);

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

/***/ "./src/panels/config/zha/zha-config-dashboard.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/zha/zha-config-dashboard.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
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















let ZHAConfigDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("zha-config-dashboard")], function (_initialize, _LitElement) {
  class ZHAConfigDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAConfigDashboard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "pages",

      value() {
        return ["add", "groups"];
      }

    }, {
      kind: "field",
      key: "_firstUpdatedCalled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_memoizeDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(devices => {
          let outputDevices = devices;
          outputDevices = outputDevices.map(device => {
            return Object.assign({}, device, {
              name: device.user_given_name ? device.user_given_name : device.name,
              nwk: Object(_functions__WEBPACK_IMPORTED_MODULE_12__["formatAsPaddedHex"])(device.nwk)
            });
          });
          return outputDevices;
        });
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(narrow => narrow ? {
          name: {
            title: "Devices",
            sortable: true,
            filterable: true,
            direction: "asc",
            grows: true
          }
        } : {
          name: {
            title: "Name",
            sortable: true,
            filterable: true,
            direction: "asc",
            grows: true
          },
          nwk: {
            title: "Nwk",
            sortable: true,
            filterable: true,
            width: "15%"
          },
          ieee: {
            title: "IEEE",
            sortable: true,
            filterable: true,
            width: "25%"
          }
        });
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHAConfigDashboard.prototype), "connectedCallback", this).call(this);

        if (this.hass && this._firstUpdatedCalled) {
          this._fetchDevices();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHAConfigDashboard.prototype), "firstUpdated", this).call(this, changedProperties);

        if (this.hass) {
          this._fetchDevices();
        }

        this._firstUpdatedCalled = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <hass-subpage .header=${this.hass.localize("component.zha.title")}>
        <ha-config-section .narrow=${this.narrow} .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.zha.header")}
          </div>

          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.zha.introduction")}
          </div>

          <ha-card>
            ${this.pages.map(page => {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                <a href=${`/config/zha/${page}`}>
                  <paper-item>
                    <paper-item-body two-line="">
                      ${this.hass.localize(`ui.panel.config.zha.${page}.caption`)}
                      <div secondary>
                        ${this.hass.localize(`ui.panel.config.zha.${page}.description`)}
                      </div>
                    </paper-item-body>
                    <ha-icon-next></ha-icon-next>
                  </paper-item>
                </a>
              `;
        })}
          </ha-card>
          <ha-card>
            <ha-data-table
              .columns=${this._columns(this.narrow)}
              .data=${this._memoizeDevices(this._devices)}
              @row-click=${this._handleDeviceClicked}
              .id=${"ieee"}
              auto-height
            ></ha-data-table>
          </ha-card>
        </ha-config-section>
      </hass-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_fetchDevices",
      value: async function _fetchDevices() {
        this._devices = (await Object(_data_zha__WEBPACK_IMPORTED_MODULE_8__["fetchDevices"])(this.hass)).sort(_functions__WEBPACK_IMPORTED_MODULE_12__["sortZHADevices"]);
      }
    }, {
      kind: "method",
      key: "_handleDeviceClicked",
      value: async function _handleDeviceClicked(ev) {
        const deviceId = ev.detail.id;
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, `/config/zha/device/${deviceId}`);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
        a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWNvbmZpZy1kYXNoYm9hcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvcmVuZGVyLXN0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLW5leHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvemhhLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS9mdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1jb25maWctZGFzaGJvYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZnRlck5leHRSZW5kZXIgPSAoY2I6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldFRpbWVvdXQoY2IsIDApKTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXh0UmVuZGVyID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBhZnRlck5leHRSZW5kZXIocmVzb2x2ZSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFJY29uIH0gZnJvbSBcIi4vaGEtaWNvblwiO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uTmV4dCBleHRlbmRzIEhhSWNvbiB7XG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pY29uID1cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXG4gICAgICAgICAgPyBcImhhc3M6Y2hldnJvbi1yaWdodFwiXG4gICAgICAgICAgOiBcImhhc3M6Y2hldnJvbi1sZWZ0XCI7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvbi1uZXh0XCI6IEhhSWNvbk5leHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvbi1uZXh0XCIsIEhhSWNvbk5leHQpO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBaSEFFbnRpdHlSZWZlcmVuY2UgZXh0ZW5kcyBIYXNzRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpIQURldmljZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWVlZTogc3RyaW5nO1xuICBud2s6IHN0cmluZztcbiAgbHFpOiBzdHJpbmc7XG4gIHJzc2k6IHN0cmluZztcbiAgbGFzdF9zZWVuOiBzdHJpbmc7XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBxdWlya19hcHBsaWVkOiBib29sZWFuO1xuICBxdWlya19jbGFzczogc3RyaW5nO1xuICBlbnRpdGllczogWkhBRW50aXR5UmVmZXJlbmNlW107XG4gIG1hbnVmYWN0dXJlcl9jb2RlOiBudW1iZXI7XG4gIGRldmljZV9yZWdfaWQ6IHN0cmluZztcbiAgdXNlcl9naXZlbl9uYW1lPzogc3RyaW5nO1xuICBwb3dlcl9zb3VyY2U/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV90eXBlOiBzdHJpbmc7XG4gIHNpZ25hdHVyZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbHVzdGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBlbmRwb2ludF9pZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSB7XG4gIGllZWU6IHN0cmluZztcbiAgZW5kcG9pbnRfaWQ6IG51bWJlcjtcbiAgY2x1c3Rlcl9pZDogbnVtYmVyO1xuICBjbHVzdGVyX3R5cGU6IHN0cmluZztcbiAgYXR0cmlidXRlOiBudW1iZXI7XG4gIG1hbnVmYWN0dXJlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaSEFHcm91cCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ3JvdXBfaWQ6IG51bWJlcjtcbiAgbWVtYmVyczogWkhBRGV2aWNlW107XG59XG5cbmV4cG9ydCBjb25zdCByZWNvbmZpZ3VyZU5vZGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvcmVjb25maWd1cmVcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF0dHJpYnV0ZXNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPEF0dHJpYnV0ZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gICAgZW5kcG9pbnRfaWQ6IGVuZHBvaW50SWQsXG4gICAgY2x1c3Rlcl9pZDogY2x1c3RlcklkLFxuICAgIGNsdXN0ZXJfdHlwZTogY2x1c3RlclR5cGUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWkhBRGV2aWNlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmluZGFibGVEZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kYWJsZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGJpbmREZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzb3VyY2VJRUVFOiBzdHJpbmcsXG4gIHRhcmdldElFRUU6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdW5iaW5kRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc291cmNlSUVFRTogc3RyaW5nLFxuICB0YXJnZXRJRUVFOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYmluZERldmljZVRvR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBkZXZpY2VJRUVFLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICAgIGJpbmRpbmdzOiBjbHVzdGVycyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1bmJpbmREZXZpY2VGcm9tR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IGRldmljZUlFRUUsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgYmluZGluZ3M6IGNsdXN0ZXJzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlYWRBdHRyaWJ1dGVWYWx1ZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGF0YTogUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gaGFzcy5jYWxsV1Moe1xuICAgIC4uLmRhdGEsXG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzL3ZhbHVlXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29tbWFuZHNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPENvbW1hbmRbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvY29tbWFuZHNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgICBlbmRwb2ludF9pZDogZW5kcG9pbnRJZCxcbiAgICBjbHVzdGVyX2lkOiBjbHVzdGVySWQsXG4gICAgY2x1c3Rlcl90eXBlOiBjbHVzdGVyVHlwZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTxDbHVzdGVyW10+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hHcm91cHMgPSAoaGFzczogSG9tZUFzc2lzdGFudCk6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3Vwc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUdyb3VwcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZ3JvdXBJZHNUb1JlbW92ZTogbnVtYmVyW11cbik6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL3JlbW92ZVwiLFxuICAgIGdyb3VwX2lkczogZ3JvdXBJZHNUb1JlbW92ZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdyb3VwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBncm91cElkOiBudW1iZXJcbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cFwiLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JvdXBhYmxlRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvZ3JvdXBhYmxlXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYWRkTWVtYmVyc1RvR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvQWRkOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvYWRkXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZU1lbWJlcnNGcm9tR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvUmVtb3ZlOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvcmVtb3ZlXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvUmVtb3ZlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGFkZEdyb3VwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBncm91cE5hbWU6IHN0cmluZyxcbiAgbWVtYmVyc1RvQWRkPzogc3RyaW5nW11cbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cC9hZGRcIixcbiAgICBncm91cF9uYW1lOiBncm91cE5hbWUsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcbiIsImltcG9ydCB7IENsdXN0ZXIsIFpIQURldmljZSwgWkhBR3JvdXAgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEFzUGFkZGVkSGV4ID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgaGV4ID0gdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBoZXggPSBwYXJzZUludCh2YWx1ZSwgMTYpO1xuICB9XG4gIHJldHVybiBcIjB4XCIgKyBoZXgudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDQsIFwiMFwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0WkhBRGV2aWNlcyA9IChhOiBaSEFEZXZpY2UsIGI6IFpIQURldmljZSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IG5hbWVBID0gYS51c2VyX2dpdmVuX25hbWUgPyBhLnVzZXJfZ2l2ZW5fbmFtZSA6IGEubmFtZTtcbiAgY29uc3QgbmFtZWIgPSBiLnVzZXJfZ2l2ZW5fbmFtZSA/IGIudXNlcl9naXZlbl9uYW1lIDogYi5uYW1lO1xuICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lYik7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFpIQUdyb3VwcyA9IChhOiBaSEFHcm91cCwgYjogWkhBR3JvdXApOiBudW1iZXIgPT4ge1xuICBjb25zdCBuYW1lQSA9IGEubmFtZTtcbiAgY29uc3QgbmFtZWIgPSBiLm5hbWU7XG4gIHJldHVybiBuYW1lQS5sb2NhbGVDb21wYXJlKG5hbWViKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlQ2x1c3RlcktleSA9IChjbHVzdGVyOiBDbHVzdGVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGAke2NsdXN0ZXIubmFtZX0gKEVuZHBvaW50IGlkOiAke1xuICAgIGNsdXN0ZXIuZW5kcG9pbnRfaWRcbiAgfSwgSWQ6ICR7Zm9ybWF0QXNQYWRkZWRIZXgoY2x1c3Rlci5pZCl9LCBUeXBlOiAke2NsdXN0ZXIudHlwZX0pYDtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHR5cGUge1xuICBEYXRhVGFibGVDb2x1bW5Db250YWluZXIsXG4gIFJvd0NsaWNrZWRFdmVudCxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG5pbXBvcnQgeyBmZXRjaERldmljZXMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB0eXBlIHsgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgZm9ybWF0QXNQYWRkZWRIZXgsIHNvcnRaSEFEZXZpY2VzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUm93RGF0YSBleHRlbmRzIFpIQURldmljZSB7XG4gIGRldmljZT86IERldmljZVJvd0RhdGE7XG59XG5cbkBjdXN0b21FbGVtZW50KFwiemhhLWNvbmZpZy1kYXNoYm9hcmRcIilcbmNsYXNzIFpIQUNvbmZpZ0Rhc2hib2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHJvdXRlITogUm91dGU7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGV2aWNlczogWkhBRGV2aWNlW10gPSBbXTtcblxuICBwcml2YXRlIHBhZ2VzOiBzdHJpbmdbXSA9IFtcImFkZFwiLCBcImdyb3Vwc1wiXTtcblxuICBwcml2YXRlIF9maXJzdFVwZGF0ZWRDYWxsZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIF9tZW1vaXplRGV2aWNlcyA9IG1lbW9pemVPbmUoKGRldmljZXM6IFpIQURldmljZVtdKSA9PiB7XG4gICAgbGV0IG91dHB1dERldmljZXM6IERldmljZVJvd0RhdGFbXSA9IGRldmljZXM7XG5cbiAgICBvdXRwdXREZXZpY2VzID0gb3V0cHV0RGV2aWNlcy5tYXAoKGRldmljZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGV2aWNlLFxuICAgICAgICBuYW1lOiBkZXZpY2UudXNlcl9naXZlbl9uYW1lID8gZGV2aWNlLnVzZXJfZ2l2ZW5fbmFtZSA6IGRldmljZS5uYW1lLFxuICAgICAgICBud2s6IGZvcm1hdEFzUGFkZGVkSGV4KGRldmljZS5ud2spLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvdXRwdXREZXZpY2VzO1xuICB9KTtcblxuICBwcml2YXRlIF9jb2x1bW5zID0gbWVtb2l6ZU9uZShcbiAgICAobmFycm93OiBib29sZWFuKTogRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyID0+XG4gICAgICBuYXJyb3dcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkRldmljZXNcIixcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJhc2NcIixcbiAgICAgICAgICAgICAgZ3Jvd3M6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJhc2NcIixcbiAgICAgICAgICAgICAgZ3Jvd3M6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbndrOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIk53a1wiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTUlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWVlZToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJJRUVFXCIsXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICApO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLmhhc3MgJiYgdGhpcy5fZmlyc3RVcGRhdGVkQ2FsbGVkKSB7XG4gICAgICB0aGlzLl9mZXRjaERldmljZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKHRoaXMuaGFzcykge1xuICAgICAgdGhpcy5fZmV0Y2hEZXZpY2VzKCk7XG4gICAgfVxuICAgIHRoaXMuX2ZpcnN0VXBkYXRlZENhbGxlZCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2UgLmhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcImNvbXBvbmVudC56aGEudGl0bGVcIil9PlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLm5hcnJvdz0ke3RoaXMubmFycm93fSAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuemhhLmhlYWRlclwiKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuemhhLmludHJvZHVjdGlvblwiKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgJHt0aGlzLnBhZ2VzLm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICA8YSBocmVmPSR7YC9jb25maWcvemhhLyR7cGFnZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBgdWkucGFuZWwuY29uZmlnLnpoYS4ke3BhZ2V9LmNhcHRpb25gXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgdWkucGFuZWwuY29uZmlnLnpoYS4ke3BhZ2V9LmRlc2NyaXB0aW9uYFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgPGhhLWRhdGEtdGFibGVcbiAgICAgICAgICAgICAgLmNvbHVtbnM9JHt0aGlzLl9jb2x1bW5zKHRoaXMubmFycm93KX1cbiAgICAgICAgICAgICAgLmRhdGE9JHt0aGlzLl9tZW1vaXplRGV2aWNlcyh0aGlzLl9kZXZpY2VzKX1cbiAgICAgICAgICAgICAgQHJvdy1jbGljaz0ke3RoaXMuX2hhbmRsZURldmljZUNsaWNrZWR9XG4gICAgICAgICAgICAgIC5pZD0ke1wiaWVlZVwifVxuICAgICAgICAgICAgICBhdXRvLWhlaWdodFxuICAgICAgICAgICAgPjwvaGEtZGF0YS10YWJsZT5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEZXZpY2VzKCkge1xuICAgIHRoaXMuX2RldmljZXMgPSAoYXdhaXQgZmV0Y2hEZXZpY2VzKHRoaXMuaGFzcyEpKS5zb3J0KHNvcnRaSEFEZXZpY2VzKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZURldmljZUNsaWNrZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgZGV2aWNlSWQgPSAoZXYuZGV0YWlsIGFzIFJvd0NsaWNrZWRFdmVudCkuaWQ7XG4gICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvemhhL2RldmljZS8ke2RldmljZUlkfWApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWNvbmZpZy1kYXNoYm9hcmRcIjogWkhBQ29uZmlnRGFzaGJvYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBWkE7QUFvQkE7Ozs7Ozs7Ozs7OztBQ29DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBRUE7QUFEQTtBQUlBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBSUE7QUFFQTtBQUZBO0FBSUE7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQURBO0FBSUE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBSUE7QUFEQTtBQUlBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7O0FDclBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7O0FBQUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFkQTs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBSUE7Ozs7OztBQVJBO0FBaUJBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQXJDQTtBQTRDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7O0FBQUE7QUFTQTs7O0FBakpBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-add-group-page"],{

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

/***/ "./src/panels/config/zha/zha-add-group-page.ts":
/*!*****************************************************!*\
  !*** ./src/panels/config/zha/zha-add-group-page.ts ***!
  \*****************************************************/
/*! exports provided: ZHAAddGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAAddGroupPage", function() { return ZHAAddGroupPage; });
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _layouts_hass_error_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/hass-error-screen */ "./src/layouts/hass-error-screen.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.ts");
/* harmony import */ var _zha_devices_data_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zha-devices-data-table */ "./src/panels/config/zha/zha-devices-data-table.ts");
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











let ZHAAddGroupPage = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("zha-add-group-page")], function (_initialize, _LitElement) {
  class ZHAAddGroupPage extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAAddGroupPage,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_processingAdd",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_groupName",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["query"])("zha-devices-data-table")],
      key: "_zhaDevicesDataTable",
      value: void 0
    }, {
      kind: "field",
      key: "_firstUpdatedCalled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_selectedDevicesToAdd",

      value() {
        return [];
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHAAddGroupPage.prototype), "connectedCallback", this).call(this);

        if (this.hass && this._firstUpdatedCalled) {
          this._fetchData();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHAAddGroupPage.prototype), "firstUpdated", this).call(this, changedProperties);

        if (this.hass) {
          this._fetchData();
        }

        this._firstUpdatedCalled = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.zha.groups.create_group")}
      >
        <ha-config-section .isWide=${!this.narrow}>
          <p slot="introduction">
            ${this.hass.localize("ui.panel.config.zha.groups.create_group_details")}
          </p>
          <paper-input
            type="string"
            .value="${this._groupName}"
            @value-changed=${this._handleNameChange}
            placeholder="${this.hass.localize("ui.panel.config.zha.groups.group_name_placeholder")}"
          ></paper-input>

          <div class="header">
            ${this.hass.localize("ui.panel.config.zha.groups.add_members")}
          </div>

          <zha-devices-data-table
            .hass=${this.hass}
            .devices=${this.devices}
            .narrow=${this.narrow}
            selectable
            @selection-changed=${this._handleAddSelectionChanged}
          >
          </zha-devices-data-table>

          <div class="paper-dialog-buttons">
            <mwc-button
              .disabled="${!this._groupName || this._groupName === "" || this._processingAdd}"
              @click="${this._createGroup}"
              class="button"
            >
              <paper-spinner
                ?active="${this._processingAdd}"
                alt="${this.hass.localize("ui.panel.config.zha.groups.creating_group")}"
              ></paper-spinner>
              ${this.hass.localize("ui.panel.config.zha.groups.create")}</mwc-button
            >
          </div>
        </ha-config-section>
      </hass-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        this.devices = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["fetchGroupableDevices"])(this.hass);
      }
    }, {
      kind: "method",
      key: "_handleAddSelectionChanged",
      value: function _handleAddSelectionChanged(ev) {
        this._selectedDevicesToAdd = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_createGroup",
      value: async function _createGroup() {
        this._processingAdd = true;
        const group = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["addGroup"])(this.hass, this._groupName, this._selectedDevicesToAdd);
        this._selectedDevicesToAdd = [];
        this._processingAdd = false;
        this._groupName = "";

        this._zhaDevicesDataTable.clearSelection();

        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, `/config/zha/group/${group.group_id}`, true);
      }
    }, {
      kind: "method",
      key: "_handleNameChange",
      value: function _handleNameChange(ev) {
        const target = ev.currentTarget;
        this._groupName = target.value || "";
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        .header {
          font-family: var(--paper-font-display1_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-display1_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-display1_-_font-size);
          font-weight: var(--paper-font-display1_-_font-weight);
          letter-spacing: var(--paper-font-display1_-_letter-spacing);
          line-height: var(--paper-font-display1_-_line-height);
          opacity: var(--dark-primary-opacity);
        }

        .button {
          float: right;
        }

        ha-config-section *:last-child {
          padding-bottom: 24px;
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWFkZC1ncm91cC1wYWdlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvemhhLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtYWRkLWdyb3VwLXBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBaSEFFbnRpdHlSZWZlcmVuY2UgZXh0ZW5kcyBIYXNzRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpIQURldmljZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWVlZTogc3RyaW5nO1xuICBud2s6IHN0cmluZztcbiAgbHFpOiBzdHJpbmc7XG4gIHJzc2k6IHN0cmluZztcbiAgbGFzdF9zZWVuOiBzdHJpbmc7XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBxdWlya19hcHBsaWVkOiBib29sZWFuO1xuICBxdWlya19jbGFzczogc3RyaW5nO1xuICBlbnRpdGllczogWkhBRW50aXR5UmVmZXJlbmNlW107XG4gIG1hbnVmYWN0dXJlcl9jb2RlOiBudW1iZXI7XG4gIGRldmljZV9yZWdfaWQ6IHN0cmluZztcbiAgdXNlcl9naXZlbl9uYW1lPzogc3RyaW5nO1xuICBwb3dlcl9zb3VyY2U/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV90eXBlOiBzdHJpbmc7XG4gIHNpZ25hdHVyZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbHVzdGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBlbmRwb2ludF9pZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSB7XG4gIGllZWU6IHN0cmluZztcbiAgZW5kcG9pbnRfaWQ6IG51bWJlcjtcbiAgY2x1c3Rlcl9pZDogbnVtYmVyO1xuICBjbHVzdGVyX3R5cGU6IHN0cmluZztcbiAgYXR0cmlidXRlOiBudW1iZXI7XG4gIG1hbnVmYWN0dXJlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaSEFHcm91cCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ3JvdXBfaWQ6IG51bWJlcjtcbiAgbWVtYmVyczogWkhBRGV2aWNlW107XG59XG5cbmV4cG9ydCBjb25zdCByZWNvbmZpZ3VyZU5vZGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvcmVjb25maWd1cmVcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF0dHJpYnV0ZXNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPEF0dHJpYnV0ZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gICAgZW5kcG9pbnRfaWQ6IGVuZHBvaW50SWQsXG4gICAgY2x1c3Rlcl9pZDogY2x1c3RlcklkLFxuICAgIGNsdXN0ZXJfdHlwZTogY2x1c3RlclR5cGUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWkhBRGV2aWNlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmluZGFibGVEZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kYWJsZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGJpbmREZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzb3VyY2VJRUVFOiBzdHJpbmcsXG4gIHRhcmdldElFRUU6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdW5iaW5kRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc291cmNlSUVFRTogc3RyaW5nLFxuICB0YXJnZXRJRUVFOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYmluZERldmljZVRvR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBkZXZpY2VJRUVFLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICAgIGJpbmRpbmdzOiBjbHVzdGVycyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1bmJpbmREZXZpY2VGcm9tR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IGRldmljZUlFRUUsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgYmluZGluZ3M6IGNsdXN0ZXJzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlYWRBdHRyaWJ1dGVWYWx1ZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGF0YTogUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gaGFzcy5jYWxsV1Moe1xuICAgIC4uLmRhdGEsXG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzL3ZhbHVlXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29tbWFuZHNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPENvbW1hbmRbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvY29tbWFuZHNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgICBlbmRwb2ludF9pZDogZW5kcG9pbnRJZCxcbiAgICBjbHVzdGVyX2lkOiBjbHVzdGVySWQsXG4gICAgY2x1c3Rlcl90eXBlOiBjbHVzdGVyVHlwZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTxDbHVzdGVyW10+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hHcm91cHMgPSAoaGFzczogSG9tZUFzc2lzdGFudCk6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3Vwc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUdyb3VwcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZ3JvdXBJZHNUb1JlbW92ZTogbnVtYmVyW11cbik6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL3JlbW92ZVwiLFxuICAgIGdyb3VwX2lkczogZ3JvdXBJZHNUb1JlbW92ZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdyb3VwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBncm91cElkOiBudW1iZXJcbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cFwiLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JvdXBhYmxlRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvZ3JvdXBhYmxlXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYWRkTWVtYmVyc1RvR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvQWRkOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvYWRkXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZU1lbWJlcnNGcm9tR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvUmVtb3ZlOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvcmVtb3ZlXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvUmVtb3ZlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGFkZEdyb3VwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBncm91cE5hbWU6IHN0cmluZyxcbiAgbWVtYmVyc1RvQWRkPzogc3RyaW5nW11cbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cC9hZGRcIixcbiAgICBncm91cF9uYW1lOiBncm91cE5hbWUsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHR5cGUgeyBQYXBlcklucHV0RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBxdWVyeSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgdHlwZSB7IEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHR5cGUgeyBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7XG4gIGFkZEdyb3VwLFxuICBmZXRjaEdyb3VwYWJsZURldmljZXMsXG4gIFpIQURldmljZSxcbiAgWkhBR3JvdXAsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWVycm9yLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCB0eXBlIHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCIuL3poYS1kZXZpY2VzLWRhdGEtdGFibGVcIjtcbmltcG9ydCB0eXBlIHsgWkhBRGV2aWNlc0RhdGFUYWJsZSB9IGZyb20gXCIuL3poYS1kZXZpY2VzLWRhdGEtdGFibGVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJ6aGEtYWRkLWdyb3VwLXBhZ2VcIilcbmV4cG9ydCBjbGFzcyBaSEFBZGRHcm91cFBhZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Byb2Nlc3NpbmdBZGQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9ncm91cE5hbWUgPSBcIlwiO1xuXG4gIEBxdWVyeShcInpoYS1kZXZpY2VzLWRhdGEtdGFibGVcIilcbiAgcHJpdmF0ZSBfemhhRGV2aWNlc0RhdGFUYWJsZSE6IFpIQURldmljZXNEYXRhVGFibGU7XG5cbiAgcHJpdmF0ZSBfZmlyc3RVcGRhdGVkQ2FsbGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWREZXZpY2VzVG9BZGQ6IHN0cmluZ1tdID0gW107XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuaGFzcyAmJiB0aGlzLl9maXJzdFVwZGF0ZWRDYWxsZWQpIHtcbiAgICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICBpZiAodGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgICB9XG4gICAgdGhpcy5fZmlyc3RVcGRhdGVkQ2FsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlXG4gICAgICAgIC5oZWFkZXI9JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5jcmVhdGVfZ3JvdXBcIil9XG4gICAgICA+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7IXRoaXMubmFycm93fT5cbiAgICAgICAgICA8cCBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5jcmVhdGVfZ3JvdXBfZGV0YWlsc1wiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9ncm91cE5hbWV9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmdyb3VwX25hbWVfcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgKX1cIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5hZGRfbWVtYmVyc1wiKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDx6aGEtZGV2aWNlcy1kYXRhLXRhYmxlXG4gICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgIC5kZXZpY2VzPSR7dGhpcy5kZXZpY2VzfVxuICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgc2VsZWN0YWJsZVxuICAgICAgICAgICAgQHNlbGVjdGlvbi1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlQWRkU2VsZWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgPC96aGEtZGV2aWNlcy1kYXRhLXRhYmxlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAuZGlzYWJsZWQ9XCIkeyF0aGlzLl9ncm91cE5hbWUgfHxcbiAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBOYW1lID09PSBcIlwiIHx8XG4gICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdBZGR9XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9jcmVhdGVHcm91cH1cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgICAgP2FjdGl2ZT1cIiR7dGhpcy5fcHJvY2Vzc2luZ0FkZH1cIlxuICAgICAgICAgICAgICAgIGFsdD1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMuY3JlYXRpbmdfZ3JvdXBcIlxuICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMuY3JlYXRlXCJcbiAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgdGhpcy5kZXZpY2VzID0gYXdhaXQgZmV0Y2hHcm91cGFibGVEZXZpY2VzKHRoaXMuaGFzcyEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQWRkU2VsZWN0aW9uQ2hhbmdlZChcbiAgICBldjogSEFTU0RvbUV2ZW50PFNlbGVjdGlvbkNoYW5nZWRFdmVudD5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9BZGQgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jcmVhdGVHcm91cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wcm9jZXNzaW5nQWRkID0gdHJ1ZTtcbiAgICBjb25zdCBncm91cDogWkhBR3JvdXAgPSBhd2FpdCBhZGRHcm91cChcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIHRoaXMuX2dyb3VwTmFtZSxcbiAgICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkXG4gICAgKTtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZXNUb0FkZCA9IFtdO1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdBZGQgPSBmYWxzZTtcbiAgICB0aGlzLl9ncm91cE5hbWUgPSBcIlwiO1xuICAgIHRoaXMuX3poYURldmljZXNEYXRhVGFibGUuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICBuYXZpZ2F0ZSh0aGlzLCBgL2NvbmZpZy96aGEvZ3JvdXAvJHtncm91cC5ncm91cF9pZH1gLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU5hbWVDaGFuZ2UoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5fZ3JvdXBOYW1lID0gdGFyZ2V0LnZhbHVlIHx8IFwiXCI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXBhcGVyLWZvbnQtZGlzcGxheTFfLV9mb250LWZhbWlseSk7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogdmFyKFxuICAgICAgICAgICAgLS1wYXBlci1mb250LWRpc3BsYXkxXy1fLXdlYmtpdC1mb250LXNtb290aGluZ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LWRpc3BsYXkxXy1fZm9udC1zaXplKTtcbiAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItZm9udC1kaXNwbGF5MV8tX2ZvbnQtd2VpZ2h0KTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tcGFwZXItZm9udC1kaXNwbGF5MV8tX2xldHRlci1zcGFjaW5nKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tcGFwZXItZm9udC1kaXNwbGF5MV8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jb25maWctc2VjdGlvbiAqOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24gcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXNwaW5uZXJbYWN0aXZlXSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnBhcGVyLWRpYWxvZy1idXR0b25zIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wYXBlci1kaWFsb2ctYnV0dG9ucyAud2FybmluZyB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQTZEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBRUE7QUFEQTtBQUlBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBSUE7QUFFQTtBQUZBO0FBSUE7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQURBO0FBSUE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBSUE7QUFEQTtBQUlBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UEE7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUVBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBa0NBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBTUE7QUFDQTtBQUNBOzs7O0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBR0E7Ozs7QUFJQTtBQUNBOztBQUlBOzs7OztBQTlDQTtBQXNEQTtBQXhGQTtBQUFBO0FBQUE7QUFBQTtBQTJGQTtBQUNBO0FBNUZBO0FBQUE7QUFBQTtBQUFBO0FBaUdBO0FBQ0E7QUFsR0E7QUFBQTtBQUFBO0FBQUE7QUFxR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFoSEE7QUFBQTtBQUFBO0FBQUE7QUFtSEE7QUFDQTtBQUNBO0FBckhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3SEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF5Q0E7QUFqS0E7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
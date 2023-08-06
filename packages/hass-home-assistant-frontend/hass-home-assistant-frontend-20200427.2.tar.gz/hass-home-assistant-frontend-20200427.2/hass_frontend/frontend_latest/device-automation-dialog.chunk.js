(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["device-automation-dialog"],{

/***/ "./src/components/ha-chips.ts":
/*!************************************!*\
  !*** ./src/components/ha-chips.ts ***!
  \************************************/
/*! exports provided: HaChips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaChips", function() { return HaChips; });
/* harmony import */ var _material_chips_dist_mdc_chips_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/chips/dist/mdc.chips.min.css */ "./node_modules/@material/chips/dist/mdc.chips.min.css");
/* harmony import */ var _material_mwc_ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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

// @ts-ignore




let HaChips = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("ha-chips")], function (_initialize, _LitElement) {
  class HaChips extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaChips,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "items",

      value() {
        return [];
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this.items.length === 0) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <div class="mdc-chip-set">
        ${this.items.map((item, idx) => lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <div class="mdc-chip" .index=${idx} @click=${this._handleClick}>
                <div class="mdc-chip__ripple" .ripple="${Object(_material_mwc_ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["ripple"])()}"></div>
                <span role="gridcell">
                  <span
                    role="button"
                    tabindex="0"
                    class="mdc-chip__primary-action"
                  >
                    <span class="mdc-chip__text">${item}</span>
                  </span>
                </span>
              </div>
            `)}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "chip-clicked", {
          index: ev.currentTarget.index
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      ${Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["unsafeCSS"])(_material_chips_dist_mdc_chips_min_css__WEBPACK_IMPORTED_MODULE_0__["default"])}
      .mdc-chip {
        background-color: rgba(var(--rgb-primary-text-color), 0.15);
        color: var(--primary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ }),

/***/ "./src/data/automation.ts":
/*!********************************!*\
  !*** ./src/data/automation.ts ***!
  \********************************/
/*! exports provided: triggerAutomation, deleteAutomation, showAutomationEditor, getAutomationEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerAutomation", function() { return triggerAutomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAutomation", function() { return deleteAutomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAutomationEditor", function() { return showAutomationEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutomationEditorInitData", function() { return getAutomationEditorInitData; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const triggerAutomation = (hass, entityId) => {
  hass.callService("automation", "trigger", {
    entity_id: entityId
  });
};
const deleteAutomation = (hass, id) => hass.callApi("DELETE", `config/automation/config/${id}`);
let inititialAutomationEditorData;
const showAutomationEditor = (el, data) => {
  inititialAutomationEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/automation/edit/new");
};
const getAutomationEditorInitData = () => {
  const data = inititialAutomationEditorData;
  inititialAutomationEditorData = undefined;
  return data;
};

/***/ }),

/***/ "./src/data/device_automation.ts":
/*!***************************************!*\
  !*** ./src/data/device_automation.ts ***!
  \***************************************/
/*! exports provided: fetchDeviceActions, fetchDeviceConditions, fetchDeviceTriggers, fetchDeviceActionCapabilities, fetchDeviceConditionCapabilities, fetchDeviceTriggerCapabilities, deviceAutomationsEqual, localizeDeviceAutomationAction, localizeDeviceAutomationCondition, localizeDeviceAutomationTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceActions", function() { return fetchDeviceActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceConditions", function() { return fetchDeviceConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceTriggers", function() { return fetchDeviceTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceActionCapabilities", function() { return fetchDeviceActionCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceConditionCapabilities", function() { return fetchDeviceConditionCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceTriggerCapabilities", function() { return fetchDeviceTriggerCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceAutomationsEqual", function() { return deviceAutomationsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationAction", function() { return localizeDeviceAutomationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationCondition", function() { return localizeDeviceAutomationCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationTrigger", function() { return localizeDeviceAutomationTrigger; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");

const fetchDeviceActions = (hass, deviceId) => hass.callWS({
  type: "device_automation/action/list",
  device_id: deviceId
});
const fetchDeviceConditions = (hass, deviceId) => hass.callWS({
  type: "device_automation/condition/list",
  device_id: deviceId
});
const fetchDeviceTriggers = (hass, deviceId) => hass.callWS({
  type: "device_automation/trigger/list",
  device_id: deviceId
});
const fetchDeviceActionCapabilities = (hass, action) => hass.callWS({
  type: "device_automation/action/capabilities",
  action
});
const fetchDeviceConditionCapabilities = (hass, condition) => hass.callWS({
  type: "device_automation/condition/capabilities",
  condition
});
const fetchDeviceTriggerCapabilities = (hass, trigger) => hass.callWS({
  type: "device_automation/trigger/capabilities",
  trigger
});
const whitelist = ["above", "below", "brightness_pct", "code", "for", "position", "set_brightness"];
const deviceAutomationsEqual = (a, b) => {
  if (typeof a !== typeof b) {
    return false;
  }

  for (const property in a) {
    if (whitelist.includes(property)) {
      continue;
    }

    if (!Object.is(a[property], b[property])) {
      return false;
    }
  }

  for (const property in b) {
    if (whitelist.includes(property)) {
      continue;
    }

    if (!Object.is(a[property], b[property])) {
      return false;
    }
  }

  return true;
};
const localizeDeviceAutomationAction = (hass, action) => {
  const state = action.entity_id ? hass.states[action.entity_id] : undefined;
  return hass.localize(`component.${action.domain}.device_automation.action_type.${action.type}`, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : action.entity_id || "<unknown>", "subtype", action.subtype ? hass.localize(`component.${action.domain}.device_automation.action_subtype.${action.subtype}`) || action.subtype : "") || (action.subtype ? `"${action.subtype}" ${action.type}` : action.type);
};
const localizeDeviceAutomationCondition = (hass, condition) => {
  const state = condition.entity_id ? hass.states[condition.entity_id] : undefined;
  return hass.localize(`component.${condition.domain}.device_automation.condition_type.${condition.type}`, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : condition.entity_id || "<unknown>", "subtype", condition.subtype ? hass.localize(`component.${condition.domain}.device_automation.condition_subtype.${condition.subtype}`) || condition.subtype : "") || (condition.subtype ? `"${condition.subtype}" ${condition.type}` : condition.type);
};
const localizeDeviceAutomationTrigger = (hass, trigger) => {
  const state = trigger.entity_id ? hass.states[trigger.entity_id] : undefined;
  return hass.localize(`component.${trigger.domain}.device_automation.trigger_type.${trigger.type}`, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : trigger.entity_id || "<unknown>", "subtype", trigger.subtype ? hass.localize(`component.${trigger.domain}.device_automation.trigger_subtype.${trigger.subtype}`) || trigger.subtype : "") || (trigger.subtype ? `"${trigger.subtype}" ${trigger.type}` : trigger.type);
};

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

/***/ "./src/panels/config/devices/device-detail/ha-device-actions-card.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/ha-device-actions-card.ts ***!
  \***************************************************************************/
/*! exports provided: HaDeviceActionsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDeviceActionsCard", function() { return HaDeviceActionsCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _ha_device_automation_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-device-automation-card */ "./src/panels/config/devices/device-detail/ha-device-automation-card.ts");
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





let HaDeviceActionsCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-device-actions-card")], function (_initialize, _HaDeviceAutomationCa) {
  class HaDeviceActionsCard extends _HaDeviceAutomationCa {
    constructor() {
      super(_data_device_automation__WEBPACK_IMPORTED_MODULE_2__["localizeDeviceAutomationAction"]);

      _initialize(this);
    }

  }

  return {
    F: HaDeviceActionsCard,
    d: [{
      kind: "field",
      key: "type",

      value() {
        return "action";
      }

    }, {
      kind: "field",
      key: "headerKey",

      value() {
        return "ui.panel.config.devices.automation.actions.caption";
      }

    }]
  };
}, _ha_device_automation_card__WEBPACK_IMPORTED_MODULE_3__["HaDeviceAutomationCard"]);

/***/ }),

/***/ "./src/panels/config/devices/device-detail/ha-device-automation-card.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/ha-device-automation-card.ts ***!
  \******************************************************************************/
/*! exports provided: HaDeviceAutomationCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDeviceAutomationCard", function() { return HaDeviceAutomationCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-chips */ "./src/components/ha-chips.ts");
/* harmony import */ var _data_automation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/automation */ "./src/data/automation.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/script */ "./src/data/script.ts");
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






let HaDeviceAutomationCard = _decorate(null, function (_initialize, _LitElement) {
  class HaDeviceAutomationCard extends _LitElement {
    constructor(localizeDeviceAutomation) {
      super();

      _initialize(this);

      this._localizeDeviceAutomation = localizeDeviceAutomation;
    }

  }

  return {
    F: HaDeviceAutomationCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "deviceId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "script",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "automations",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "headerKey",

      value() {
        return "";
      }

    }, {
      kind: "field",
      key: "type",

      value() {
        return "";
      }

    }, {
      kind: "field",
      key: "_localizeDeviceAutomation",
      value: void 0
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (changedProps.has("deviceId") || changedProps.has("automations")) {
          return true;
        }

        const oldHass = changedProps.get("hass");

        if (!oldHass || this.hass.language !== oldHass.language) {
          return true;
        }

        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this.automations.length === 0) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h3>
        ${this.hass.localize(this.headerKey)}
      </h3>
      <div class="content">
        <ha-chips
          @chip-clicked=${this._handleAutomationClicked}
          .items=${this.automations.map(automation => this._localizeDeviceAutomation(this.hass, automation))}
        >
        </ha-chips>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_handleAutomationClicked",
      value: function _handleAutomationClicked(ev) {
        const automation = this.automations[ev.detail.index];

        if (!automation) {
          return;
        }

        if (this.script) {
          Object(_data_script__WEBPACK_IMPORTED_MODULE_4__["showScriptEditor"])(this, {
            sequence: [automation]
          });
          return;
        }

        const data = {};
        data[this.type] = [automation];
        Object(_data_automation__WEBPACK_IMPORTED_MODULE_3__["showAutomationEditor"])(this, data);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      h3 {
        color: var(--primary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/devices/device-detail/ha-device-automation-dialog.ts":
/*!********************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/ha-device-automation-dialog.ts ***!
  \********************************************************************************/
/*! exports provided: DialogDeviceAutomation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeviceAutomation", function() { return DialogDeviceAutomation; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-dialog */ "./src/components/ha-dialog.ts");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _ha_device_actions_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-device-actions-card */ "./src/panels/config/devices/device-detail/ha-device-actions-card.ts");
/* harmony import */ var _ha_device_conditions_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-device-conditions-card */ "./src/panels/config/devices/device-detail/ha-device-conditions-card.ts");
/* harmony import */ var _ha_device_triggers_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-device-triggers-card */ "./src/panels/config/devices/device-detail/ha-device-triggers-card.ts");
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








let DialogDeviceAutomation = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("dialog-device-automation")], function (_initialize, _LitElement) {
  class DialogDeviceAutomation extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogDeviceAutomation,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_triggers",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_conditions",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_actions",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(DialogDeviceAutomation.prototype), "firstUpdated", this).call(this, changedProps);

        this.hass.loadBackendTranslation("device_automation");
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(DialogDeviceAutomation.prototype), "updated", this).call(this, changedProps);

        if (!changedProps.has("_params")) {
          return;
        }

        this._triggers = [];
        this._conditions = [];
        this._actions = [];

        if (!this._params) {
          return;
        }

        const {
          deviceId,
          script
        } = this._params;
        Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_2__["fetchDeviceActions"])(this.hass, deviceId).then(actions => {
          this._actions = actions;
        });

        if (script) {
          return;
        }

        Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_2__["fetchDeviceTriggers"])(this.hass, deviceId).then(triggers => {
          this._triggers = triggers;
        });
        Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_2__["fetchDeviceConditions"])(this.hass, deviceId).then(conditions => {
          this._conditions = conditions;
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-dialog
        open
        @closing="${this._close}"
        .heading=${this.hass.localize(`ui.panel.config.devices.${this._params.script ? "script" : "automation"}.create`)}
      >
        <div @chip-clicked=${this._close}>
          ${this._triggers.length || this._conditions.length || this._actions.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                ${this._triggers.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <ha-device-triggers-card
                        .hass=${this.hass}
                        .automations=${this._triggers}
                      ></ha-device-triggers-card>
                    ` : ""}
                ${this._conditions.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <ha-device-conditions-card
                        .hass=${this.hass}
                        .automations=${this._conditions}
                      ></ha-device-conditions-card>
                    ` : ""}
                ${this._actions.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <ha-device-actions-card
                        .hass=${this.hass}
                        .automations=${this._actions}
                        .script=${this._params.script}
                      ></ha-device-actions-card>
                    ` : ""}
              ` : this.hass.localize("ui.panel.config.devices.automation.no_device_automations")}
        </div>
        <mwc-button slot="primaryAction" @click="${this._close}">
          Close
        </mwc-button>
      </ha-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._params = undefined;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return _resources_styles__WEBPACK_IMPORTED_MODULE_3__["haStyleDialog"];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/devices/device-detail/ha-device-conditions-card.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/ha-device-conditions-card.ts ***!
  \******************************************************************************/
/*! exports provided: HaDeviceConditionsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDeviceConditionsCard", function() { return HaDeviceConditionsCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _ha_device_automation_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-device-automation-card */ "./src/panels/config/devices/device-detail/ha-device-automation-card.ts");
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





let HaDeviceConditionsCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-device-conditions-card")], function (_initialize, _HaDeviceAutomationCa) {
  class HaDeviceConditionsCard extends _HaDeviceAutomationCa {
    constructor() {
      super(_data_device_automation__WEBPACK_IMPORTED_MODULE_2__["localizeDeviceAutomationCondition"]);

      _initialize(this);
    }

  }

  return {
    F: HaDeviceConditionsCard,
    d: [{
      kind: "field",
      key: "type",

      value() {
        return "condition";
      }

    }, {
      kind: "field",
      key: "headerKey",

      value() {
        return "ui.panel.config.devices.automation.conditions.caption";
      }

    }]
  };
}, _ha_device_automation_card__WEBPACK_IMPORTED_MODULE_3__["HaDeviceAutomationCard"]);

/***/ }),

/***/ "./src/panels/config/devices/device-detail/ha-device-triggers-card.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/ha-device-triggers-card.ts ***!
  \****************************************************************************/
/*! exports provided: HaDeviceTriggersCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDeviceTriggersCard", function() { return HaDeviceTriggersCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _ha_device_automation_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-device-automation-card */ "./src/panels/config/devices/device-detail/ha-device-automation-card.ts");
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




let HaDeviceTriggersCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-device-triggers-card")], function (_initialize, _HaDeviceAutomationCa) {
  class HaDeviceTriggersCard extends _HaDeviceAutomationCa {
    constructor() {
      super(_data_device_automation__WEBPACK_IMPORTED_MODULE_1__["localizeDeviceAutomationTrigger"]);

      _initialize(this);
    }

  }

  return {
    F: HaDeviceTriggersCard,
    d: [{
      kind: "field",
      key: "type",

      value() {
        return "trigger";
      }

    }, {
      kind: "field",
      key: "headerKey",

      value() {
        return "ui.panel.config.devices.automation.triggers.caption";
      }

    }]
  };
}, _ha_device_automation_card__WEBPACK_IMPORTED_MODULE_2__["HaDeviceAutomationCard"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLWF1dG9tYXRpb24tZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2hpcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYXV0b21hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kZXZpY2VfYXV0b21hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZGV2aWNlcy9kZXZpY2UtZGV0YWlsL2hhLWRldmljZS1hY3Rpb25zLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZGV2aWNlcy9kZXZpY2UtZGV0YWlsL2hhLWRldmljZS1hdXRvbWF0aW9uLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZGV2aWNlcy9kZXZpY2UtZGV0YWlsL2hhLWRldmljZS1hdXRvbWF0aW9uLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9kZXZpY2VzL2RldmljZS1kZXRhaWwvaGEtZGV2aWNlLWNvbmRpdGlvbnMtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9kZXZpY2VzL2RldmljZS1kZXRhaWwvaGEtZGV2aWNlLXRyaWdnZXJzLWNhcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGNoaXBTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC9jaGlwcy9kaXN0L21kYy5jaGlwcy5taW4uY3NzXCI7XG5pbXBvcnQgeyByaXBwbGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgdW5zYWZlQ1NTLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJjaGlwLWNsaWNrZWRcIjogeyBpbmRleDogc3RyaW5nIH07XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jaGlwc1wiKVxuZXhwb3J0IGNsYXNzIEhhQ2hpcHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGl0ZW1zID0gW107XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hpcC1zZXRcIj5cbiAgICAgICAgJHt0aGlzLml0ZW1zLm1hcChcbiAgICAgICAgICAoaXRlbSwgaWR4KSA9PlxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1jaGlwXCIgLmluZGV4PSR7aWR4fSBAY2xpY2s9JHt0aGlzLl9oYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1jaGlwX19yaXBwbGVcIiAucmlwcGxlPVwiJHtyaXBwbGUoKX1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiZ3JpZGNlbGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1jaGlwX19wcmltYXJ5LWFjdGlvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWNoaXBfX3RleHRcIj4ke2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2xpY2soZXYpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjaGlwLWNsaWNrZWRcIiwge1xuICAgICAgaW5kZXg6IGV2LmN1cnJlbnRUYXJnZXQuaW5kZXgsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAke3Vuc2FmZUNTUyhjaGlwU3R5bGVzKX1cbiAgICAgIC5tZGMtY2hpcCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuMTUpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jaGlwc1wiOiBIYUNoaXBzO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSxcbiAgSGFzc0VudGl0eUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRGV2aWNlQ29uZGl0aW9uLCBEZXZpY2VUcmlnZ2VyIH0gZnJvbSBcIi4vZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCIuL3NjcmlwdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9tYXRpb25FbnRpdHkgZXh0ZW5kcyBIYXNzRW50aXR5QmFzZSB7XG4gIGF0dHJpYnV0ZXM6IEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlICYge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGxhc3RfdHJpZ2dlcmVkOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b21hdGlvbkNvbmZpZyB7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHRyaWdnZXI6IFRyaWdnZXJbXTtcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uW107XG4gIGFjdGlvbjogQWN0aW9uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9yRGljdCB7XG4gIGhvdXJzPzogbnVtYmVyIHwgc3RyaW5nO1xuICBtaW51dGVzPzogbnVtYmVyIHwgc3RyaW5nO1xuICBzZWNvbmRzPzogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcInN0YXRlXCI7XG4gIGVudGl0eV9pZD86IHN0cmluZztcbiAgZnJvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgdG8/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGZvcj86IHN0cmluZyB8IG51bWJlciB8IEZvckRpY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXF0dFRyaWdnZXIge1xuICBwbGF0Zm9ybTogXCJtcXR0XCI7XG4gIHRvcGljOiBzdHJpbmc7XG4gIHBheWxvYWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvTG9jYXRpb25UcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwiZ2VvX2xvY2F0aW9uXCI7XG4gIHNvdXJjZTogXCJzdHJpbmdcIjtcbiAgem9uZTogXCJzdHJpbmdcIjtcbiAgZXZlbnQ6IFwiZW50ZXJcIiB8IFwibGVhdmVcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIYXNzVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcImhvbWVhc3Npc3RhbnRcIjtcbiAgZXZlbnQ6IFwic3RhcnRcIiB8IFwic2h1dGRvd25cIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdW1lcmljU3RhdGVUcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwibnVtZXJpY19zdGF0ZVwiO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgYWJvdmU/OiBudW1iZXI7XG4gIGJlbG93PzogbnVtYmVyO1xuICB2YWx1ZV90ZW1wbGF0ZT86IHN0cmluZztcbiAgZm9yPzogc3RyaW5nIHwgbnVtYmVyIHwgRm9yRGljdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdW5UcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwic3VuXCI7XG4gIG9mZnNldDogbnVtYmVyO1xuICBldmVudDogXCJzdW5yaXNlXCIgfCBcInN1bnNldFwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVQYXR0ZXJuVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcInRpbWVfcGF0dGVyblwiO1xuICBob3Vycz86IG51bWJlciB8IHN0cmluZztcbiAgbWludXRlcz86IG51bWJlciB8IHN0cmluZztcbiAgc2Vjb25kcz86IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJob29rVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcIndlYmhvb2tcIjtcbiAgd2ViaG9va19pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpvbmVUcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwiem9uZVwiO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgem9uZTogc3RyaW5nO1xuICBldmVudDogXCJlbnRlclwiIHwgXCJsZWF2ZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVUcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwidGltZVwiO1xuICBhdDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcInRlbXBsYXRlXCI7XG4gIHZhbHVlX3RlbXBsYXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRUcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwiZXZlbnRcIjtcbiAgZXZlbnRfdHlwZTogc3RyaW5nO1xuICBldmVudF9kYXRhOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFRyaWdnZXIgPVxuICB8IFN0YXRlVHJpZ2dlclxuICB8IE1xdHRUcmlnZ2VyXG4gIHwgR2VvTG9jYXRpb25UcmlnZ2VyXG4gIHwgSGFzc1RyaWdnZXJcbiAgfCBOdW1lcmljU3RhdGVUcmlnZ2VyXG4gIHwgU3VuVHJpZ2dlclxuICB8IFRpbWVQYXR0ZXJuVHJpZ2dlclxuICB8IFdlYmhvb2tUcmlnZ2VyXG4gIHwgWm9uZVRyaWdnZXJcbiAgfCBUaW1lVHJpZ2dlclxuICB8IFRlbXBsYXRlVHJpZ2dlclxuICB8IEV2ZW50VHJpZ2dlclxuICB8IERldmljZVRyaWdnZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9naWNhbENvbmRpdGlvbiB7XG4gIGNvbmRpdGlvbjogXCJhbmRcIiB8IFwibm90XCIgfCBcIm9yXCI7XG4gIGNvbmRpdGlvbnM6IENvbmRpdGlvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlQ29uZGl0aW9uIHtcbiAgY29uZGl0aW9uOiBcInN0YXRlXCI7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bWVyaWNTdGF0ZUNvbmRpdGlvbiB7XG4gIGNvbmRpdGlvbjogXCJudW1lcmljX3N0YXRlXCI7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBhYm92ZT86IG51bWJlcjtcbiAgYmVsb3c/OiBudW1iZXI7XG4gIHZhbHVlX3RlbXBsYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1bkNvbmRpdGlvbiB7XG4gIGNvbmRpdGlvbjogXCJzdW5cIjtcbiAgYWZ0ZXJfb2Zmc2V0OiBudW1iZXI7XG4gIGJlZm9yZV9vZmZzZXQ6IG51bWJlcjtcbiAgYWZ0ZXI6IFwic3VucmlzZVwiIHwgXCJzdW5zZXRcIjtcbiAgYmVmb3JlOiBcInN1bnJpc2VcIiB8IFwic3Vuc2V0XCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9uZUNvbmRpdGlvbiB7XG4gIGNvbmRpdGlvbjogXCJ6b25lXCI7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICB6b25lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZUNvbmRpdGlvbiB7XG4gIGNvbmRpdGlvbjogXCJ0aW1lXCI7XG4gIGFmdGVyOiBzdHJpbmc7XG4gIGJlZm9yZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlQ29uZGl0aW9uIHtcbiAgY29uZGl0aW9uOiBcInRlbXBsYXRlXCI7XG4gIHZhbHVlX3RlbXBsYXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIENvbmRpdGlvbiA9XG4gIHwgU3RhdGVDb25kaXRpb25cbiAgfCBOdW1lcmljU3RhdGVDb25kaXRpb25cbiAgfCBTdW5Db25kaXRpb25cbiAgfCBab25lQ29uZGl0aW9uXG4gIHwgVGltZUNvbmRpdGlvblxuICB8IFRlbXBsYXRlQ29uZGl0aW9uXG4gIHwgRGV2aWNlQ29uZGl0aW9uXG4gIHwgTG9naWNhbENvbmRpdGlvbjtcblxuZXhwb3J0IGNvbnN0IHRyaWdnZXJBdXRvbWF0aW9uID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGVudGl0eUlkOiBzdHJpbmcpID0+IHtcbiAgaGFzcy5jYWxsU2VydmljZShcImF1dG9tYXRpb25cIiwgXCJ0cmlnZ2VyXCIsIHtcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBdXRvbWF0aW9uID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL2F1dG9tYXRpb24vY29uZmlnLyR7aWR9YCk7XG5cbmxldCBpbml0aXRpYWxBdXRvbWF0aW9uRWRpdG9yRGF0YTogUGFydGlhbDxBdXRvbWF0aW9uQ29uZmlnPiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IHNob3dBdXRvbWF0aW9uRWRpdG9yID0gKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIGRhdGE/OiBQYXJ0aWFsPEF1dG9tYXRpb25Db25maWc+XG4pID0+IHtcbiAgaW5pdGl0aWFsQXV0b21hdGlvbkVkaXRvckRhdGEgPSBkYXRhO1xuICBuYXZpZ2F0ZShlbCwgXCIvY29uZmlnL2F1dG9tYXRpb24vZWRpdC9uZXdcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QXV0b21hdGlvbkVkaXRvckluaXREYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gaW5pdGl0aWFsQXV0b21hdGlvbkVkaXRvckRhdGE7XG4gIGluaXRpdGlhbEF1dG9tYXRpb25FZGl0b3JEYXRhID0gdW5kZWZpbmVkO1xuICByZXR1cm4gZGF0YTtcbn07XG4iLCJpbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlQXV0b21hdGlvbiB7XG4gIGRldmljZV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHN1YnR5cGU/OiBzdHJpbmc7XG4gIGV2ZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBEZXZpY2VBY3Rpb24gPSBEZXZpY2VBdXRvbWF0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUNvbmRpdGlvbiBleHRlbmRzIERldmljZUF1dG9tYXRpb24ge1xuICBjb25kaXRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VUcmlnZ2VyIGV4dGVuZHMgRGV2aWNlQXV0b21hdGlvbiB7XG4gIHBsYXRmb3JtOiBcImRldmljZVwiO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VBY3Rpb25zID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGRldmljZUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPERldmljZUFjdGlvbltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi9hY3Rpb24vbGlzdFwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VDb25kaXRpb25zID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGRldmljZUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPERldmljZUNvbmRpdGlvbltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi9jb25kaXRpb24vbGlzdFwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VUcmlnZ2VycyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBkZXZpY2VJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VUcmlnZ2VyW10+KHtcbiAgICB0eXBlOiBcImRldmljZV9hdXRvbWF0aW9uL3RyaWdnZXIvbGlzdFwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VBY3Rpb25DYXBhYmlsaXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFjdGlvbjogRGV2aWNlQWN0aW9uXG4pID0+XG4gIGhhc3MuY2FsbFdTPERldmljZUFjdGlvbltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi9hY3Rpb24vY2FwYWJpbGl0aWVzXCIsXG4gICAgYWN0aW9uLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlQ29uZGl0aW9uQ2FwYWJpbGl0aWVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25kaXRpb246IERldmljZUNvbmRpdGlvblxuKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VDb25kaXRpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vY29uZGl0aW9uL2NhcGFiaWxpdGllc1wiLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERldmljZVRyaWdnZXJDYXBhYmlsaXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHRyaWdnZXI6IERldmljZVRyaWdnZXJcbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlVHJpZ2dlcltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi90cmlnZ2VyL2NhcGFiaWxpdGllc1wiLFxuICAgIHRyaWdnZXIsXG4gIH0pO1xuXG5jb25zdCB3aGl0ZWxpc3QgPSBbXG4gIFwiYWJvdmVcIixcbiAgXCJiZWxvd1wiLFxuICBcImJyaWdodG5lc3NfcGN0XCIsXG4gIFwiY29kZVwiLFxuICBcImZvclwiLFxuICBcInBvc2l0aW9uXCIsXG4gIFwic2V0X2JyaWdodG5lc3NcIixcbl07XG5cbmV4cG9ydCBjb25zdCBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsID0gKFxuICBhOiBEZXZpY2VBdXRvbWF0aW9uLFxuICBiOiBEZXZpY2VBdXRvbWF0aW9uXG4pID0+IHtcbiAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgaW4gYSkge1xuICAgIGlmICh3aGl0ZWxpc3QuaW5jbHVkZXMocHJvcGVydHkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3QuaXMoYVtwcm9wZXJ0eV0sIGJbcHJvcGVydHldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGIpIHtcbiAgICBpZiAod2hpdGVsaXN0LmluY2x1ZGVzKHByb3BlcnR5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LmlzKGFbcHJvcGVydHldLCBiW3Byb3BlcnR5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25BY3Rpb24gPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFjdGlvbjogRGV2aWNlQWN0aW9uXG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzdGF0ZSA9IGFjdGlvbi5lbnRpdHlfaWQgPyBoYXNzLnN0YXRlc1thY3Rpb24uZW50aXR5X2lkXSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChcbiAgICBoYXNzLmxvY2FsaXplKFxuICAgICAgYGNvbXBvbmVudC4ke2FjdGlvbi5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLmFjdGlvbl90eXBlLiR7YWN0aW9uLnR5cGV9YCxcbiAgICAgIFwiZW50aXR5X25hbWVcIixcbiAgICAgIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBhY3Rpb24uZW50aXR5X2lkIHx8IFwiPHVua25vd24+XCIsXG4gICAgICBcInN1YnR5cGVcIixcbiAgICAgIGFjdGlvbi5zdWJ0eXBlXG4gICAgICAgID8gaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIGBjb21wb25lbnQuJHthY3Rpb24uZG9tYWlufS5kZXZpY2VfYXV0b21hdGlvbi5hY3Rpb25fc3VidHlwZS4ke2FjdGlvbi5zdWJ0eXBlfWBcbiAgICAgICAgICApIHx8IGFjdGlvbi5zdWJ0eXBlXG4gICAgICAgIDogXCJcIlxuICAgICkgfHwgKGFjdGlvbi5zdWJ0eXBlID8gYFwiJHthY3Rpb24uc3VidHlwZX1cIiAke2FjdGlvbi50eXBlfWAgOiBhY3Rpb24udHlwZSEpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uQ29uZGl0aW9uID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25kaXRpb246IERldmljZUNvbmRpdGlvblxuKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBjb25kaXRpb24uZW50aXR5X2lkXG4gICAgPyBoYXNzLnN0YXRlc1tjb25kaXRpb24uZW50aXR5X2lkXVxuICAgIDogdW5kZWZpbmVkO1xuICByZXR1cm4gKFxuICAgIGhhc3MubG9jYWxpemUoXG4gICAgICBgY29tcG9uZW50LiR7Y29uZGl0aW9uLmRvbWFpbn0uZGV2aWNlX2F1dG9tYXRpb24uY29uZGl0aW9uX3R5cGUuJHtjb25kaXRpb24udHlwZX1gLFxuICAgICAgXCJlbnRpdHlfbmFtZVwiLFxuICAgICAgc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IGNvbmRpdGlvbi5lbnRpdHlfaWQgfHwgXCI8dW5rbm93bj5cIixcbiAgICAgIFwic3VidHlwZVwiLFxuICAgICAgY29uZGl0aW9uLnN1YnR5cGVcbiAgICAgICAgPyBoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgYGNvbXBvbmVudC4ke2NvbmRpdGlvbi5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLmNvbmRpdGlvbl9zdWJ0eXBlLiR7Y29uZGl0aW9uLnN1YnR5cGV9YFxuICAgICAgICAgICkgfHwgY29uZGl0aW9uLnN1YnR5cGVcbiAgICAgICAgOiBcIlwiXG4gICAgKSB8fFxuICAgIChjb25kaXRpb24uc3VidHlwZVxuICAgICAgPyBgXCIke2NvbmRpdGlvbi5zdWJ0eXBlfVwiICR7Y29uZGl0aW9uLnR5cGV9YFxuICAgICAgOiBjb25kaXRpb24udHlwZSEpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uVHJpZ2dlciA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdHJpZ2dlcjogRGV2aWNlVHJpZ2dlclxuKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB0cmlnZ2VyLmVudGl0eV9pZCA/IGhhc3Muc3RhdGVzW3RyaWdnZXIuZW50aXR5X2lkXSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChcbiAgICBoYXNzLmxvY2FsaXplKFxuICAgICAgYGNvbXBvbmVudC4ke3RyaWdnZXIuZG9tYWlufS5kZXZpY2VfYXV0b21hdGlvbi50cmlnZ2VyX3R5cGUuJHt0cmlnZ2VyLnR5cGV9YCxcbiAgICAgIFwiZW50aXR5X25hbWVcIixcbiAgICAgIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiB0cmlnZ2VyLmVudGl0eV9pZCB8fCBcIjx1bmtub3duPlwiLFxuICAgICAgXCJzdWJ0eXBlXCIsXG4gICAgICB0cmlnZ2VyLnN1YnR5cGVcbiAgICAgICAgPyBoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgYGNvbXBvbmVudC4ke3RyaWdnZXIuZG9tYWlufS5kZXZpY2VfYXV0b21hdGlvbi50cmlnZ2VyX3N1YnR5cGUuJHt0cmlnZ2VyLnN1YnR5cGV9YFxuICAgICAgICAgICkgfHwgdHJpZ2dlci5zdWJ0eXBlXG4gICAgICAgIDogXCJcIlxuICAgICkgfHxcbiAgICAodHJpZ2dlci5zdWJ0eXBlID8gYFwiJHt0cmlnZ2VyLnN1YnR5cGV9XCIgJHt0cmlnZ2VyLnR5cGV9YCA6IHRyaWdnZXIudHlwZSEpXG4gICk7XG59O1xuIiwiaW1wb3J0IHtcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG4gIEhhc3NFbnRpdHlCYXNlLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZFwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tIFwiLi9hdXRvbWF0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NyaXB0RW50aXR5IGV4dGVuZHMgSGFzc0VudGl0eUJhc2Uge1xuICBhdHRyaWJ1dGVzOiBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSAmIHtcbiAgICBsYXN0X3RyaWdnZXJlZDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmlwdENvbmZpZyB7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIHNlcXVlbmNlOiBBY3Rpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudEFjdGlvbiB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIGV2ZW50X2RhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBldmVudF9kYXRhX3RlbXBsYXRlPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlQWN0aW9uIHtcbiAgc2VydmljZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ/OiBzdHJpbmc7XG4gIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUFjdGlvbiB7XG4gIGRldmljZV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsYXlBY3Rpb24ge1xuICBkZWxheTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lQWN0aW9uIHtcbiAgc2NlbmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWl0QWN0aW9uIHtcbiAgd2FpdF90ZW1wbGF0ZTogc3RyaW5nO1xuICB0aW1lb3V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb24gPVxuICB8IEV2ZW50QWN0aW9uXG4gIHwgRGV2aWNlQWN0aW9uXG4gIHwgU2VydmljZUFjdGlvblxuICB8IENvbmRpdGlvblxuICB8IERlbGF5QWN0aW9uXG4gIHwgU2NlbmVBY3Rpb25cbiAgfCBXYWl0QWN0aW9uO1xuXG5leHBvcnQgY29uc3QgdHJpZ2dlclNjcmlwdCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdmFyaWFibGVzPzoge31cbikgPT4gaGFzcy5jYWxsU2VydmljZShcInNjcmlwdFwiLCBjb21wdXRlT2JqZWN0SWQoZW50aXR5SWQpLCB2YXJpYWJsZXMpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlU2NyaXB0ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIG9iamVjdElkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL3NjcmlwdC9jb25maWcvJHtvYmplY3RJZH1gKTtcblxubGV0IGluaXRpdGlhbFNjcmlwdEVkaXRvckRhdGE6IFBhcnRpYWw8U2NyaXB0Q29uZmlnPiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IHNob3dTY3JpcHRFZGl0b3IgPSAoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgZGF0YT86IFBhcnRpYWw8U2NyaXB0Q29uZmlnPlxuKSA9PiB7XG4gIGluaXRpdGlhbFNjcmlwdEVkaXRvckRhdGEgPSBkYXRhO1xuICBuYXZpZ2F0ZShlbCwgXCIvY29uZmlnL3NjcmlwdC9lZGl0L25ld1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTY3JpcHRFZGl0b3JJbml0RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGluaXRpdGlhbFNjcmlwdEVkaXRvckRhdGE7XG4gIGluaXRpdGlhbFNjcmlwdEVkaXRvckRhdGEgPSB1bmRlZmluZWQ7XG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQWN0aW9uLFxuICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25BY3Rpb24sXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgeyBIYURldmljZUF1dG9tYXRpb25DYXJkIH0gZnJvbSBcIi4vaGEtZGV2aWNlLWF1dG9tYXRpb24tY2FyZFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWRldmljZS1hY3Rpb25zLWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIYURldmljZUFjdGlvbnNDYXJkIGV4dGVuZHMgSGFEZXZpY2VBdXRvbWF0aW9uQ2FyZDxEZXZpY2VBY3Rpb24+IHtcbiAgcHJvdGVjdGVkIHR5cGUgPSBcImFjdGlvblwiO1xuXG4gIHByb3RlY3RlZCBoZWFkZXJLZXkgPSBcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLmF1dG9tYXRpb24uYWN0aW9ucy5jYXB0aW9uXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIobG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uQWN0aW9uKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlLWFjdGlvbnMtY2FyZFwiOiBIYURldmljZUFjdGlvbnNDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jaGlwc1wiO1xuaW1wb3J0IHsgc2hvd0F1dG9tYXRpb25FZGl0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgeyBEZXZpY2VBdXRvbWF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCB7IHNob3dTY3JpcHRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhhRGV2aWNlQXV0b21hdGlvbkNhcmQ8XG4gIFQgZXh0ZW5kcyBEZXZpY2VBdXRvbWF0aW9uXG4+IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlSWQ/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHNjcmlwdCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhdXRvbWF0aW9uczogVFtdID0gW107XG5cbiAgcHJvdGVjdGVkIGhlYWRlcktleSA9IFwiXCI7XG5cbiAgcHJvdGVjdGVkIHR5cGUgPSBcIlwiO1xuXG4gIHByaXZhdGUgX2xvY2FsaXplRGV2aWNlQXV0b21hdGlvbjogKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgYXV0b21hdGlvbjogVFxuICApID0+IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb246IEhhRGV2aWNlQXV0b21hdGlvbkNhcmQ8XG4gICAgICBUXG4gICAgPltcIl9sb2NhbGl6ZURldmljZUF1dG9tYXRpb25cIl1cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9sb2NhbGl6ZURldmljZUF1dG9tYXRpb24gPSBsb2NhbGl6ZURldmljZUF1dG9tYXRpb247XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wcyk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiZGV2aWNlSWRcIikgfHwgY2hhbmdlZFByb3BzLmhhcyhcImF1dG9tYXRpb25zXCIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpO1xuICAgIGlmICghb2xkSGFzcyB8fCB0aGlzLmhhc3MubGFuZ3VhZ2UgIT09IG9sZEhhc3MubGFuZ3VhZ2UpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAodGhpcy5hdXRvbWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgzPlxuICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZSh0aGlzLmhlYWRlcktleSl9XG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGhhLWNoaXBzXG4gICAgICAgICAgQGNoaXAtY2xpY2tlZD0ke3RoaXMuX2hhbmRsZUF1dG9tYXRpb25DbGlja2VkfVxuICAgICAgICAgIC5pdGVtcz0ke3RoaXMuYXV0b21hdGlvbnMubWFwKChhdXRvbWF0aW9uKSA9PlxuICAgICAgICAgICAgdGhpcy5fbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uKHRoaXMuaGFzcywgYXV0b21hdGlvbilcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgIDwvaGEtY2hpcHM+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQXV0b21hdGlvbkNsaWNrZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgYXV0b21hdGlvbiA9IHRoaXMuYXV0b21hdGlvbnNbZXYuZGV0YWlsLmluZGV4XTtcbiAgICBpZiAoIWF1dG9tYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICBzaG93U2NyaXB0RWRpdG9yKHRoaXMsIHsgc2VxdWVuY2U6IFthdXRvbWF0aW9uXSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGRhdGFbdGhpcy50eXBlXSA9IFthdXRvbWF0aW9uXTtcbiAgICBzaG93QXV0b21hdGlvbkVkaXRvcih0aGlzLCBkYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1kaWFsb2dcIjtcbmltcG9ydCB7XG4gIERldmljZUFjdGlvbixcbiAgRGV2aWNlQ29uZGl0aW9uLFxuICBEZXZpY2VUcmlnZ2VyLFxuICBmZXRjaERldmljZUFjdGlvbnMsXG4gIGZldGNoRGV2aWNlQ29uZGl0aW9ucyxcbiAgZmV0Y2hEZXZpY2VUcmlnZ2Vycyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9oYS1kZXZpY2UtYWN0aW9ucy1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLWRldmljZS1jb25kaXRpb25zLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtZGV2aWNlLXRyaWdnZXJzLWNhcmRcIjtcbmltcG9ydCB7IERldmljZUF1dG9tYXRpb25EaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kZXZpY2UtYXV0b21hdGlvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcImRpYWxvZy1kZXZpY2UtYXV0b21hdGlvblwiKVxuZXhwb3J0IGNsYXNzIERpYWxvZ0RldmljZUF1dG9tYXRpb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3RyaWdnZXJzOiBEZXZpY2VUcmlnZ2VyW10gPSBbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25kaXRpb25zOiBEZXZpY2VDb25kaXRpb25bXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FjdGlvbnM6IERldmljZUFjdGlvbltdID0gW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogRGV2aWNlQXV0b21hdGlvbkRpYWxvZ1BhcmFtcztcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhwYXJhbXM6IERldmljZUF1dG9tYXRpb25EaWFsb2dQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5oYXNzLmxvYWRCYWNrZW5kVHJhbnNsYXRpb24oXCJkZXZpY2VfYXV0b21hdGlvblwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmICghY2hhbmdlZFByb3BzLmhhcyhcIl9wYXJhbXNcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90cmlnZ2VycyA9IFtdO1xuICAgIHRoaXMuX2NvbmRpdGlvbnMgPSBbXTtcbiAgICB0aGlzLl9hY3Rpb25zID0gW107XG5cbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGV2aWNlSWQsIHNjcmlwdCB9ID0gdGhpcy5fcGFyYW1zO1xuXG4gICAgZmV0Y2hEZXZpY2VBY3Rpb25zKHRoaXMuaGFzcywgZGV2aWNlSWQpLnRoZW4oKGFjdGlvbnMpID0+IHtcbiAgICAgIHRoaXMuX2FjdGlvbnMgPSBhY3Rpb25zO1xuICAgIH0pO1xuICAgIGlmIChzY3JpcHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmV0Y2hEZXZpY2VUcmlnZ2Vycyh0aGlzLmhhc3MsIGRldmljZUlkKS50aGVuKCh0cmlnZ2VycykgPT4ge1xuICAgICAgdGhpcy5fdHJpZ2dlcnMgPSB0cmlnZ2VycztcbiAgICB9KTtcbiAgICBmZXRjaERldmljZUNvbmRpdGlvbnModGhpcy5oYXNzLCBkZXZpY2VJZCkudGhlbigoY29uZGl0aW9ucykgPT4ge1xuICAgICAgdGhpcy5fY29uZGl0aW9ucyA9IGNvbmRpdGlvbnM7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtZGlhbG9nXG4gICAgICAgIG9wZW5cbiAgICAgICAgQGNsb3Npbmc9XCIke3RoaXMuX2Nsb3NlfVwiXG4gICAgICAgIC5oZWFkaW5nPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuZGV2aWNlcy4ke1xuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLnNjcmlwdCA/IFwic2NyaXB0XCIgOiBcImF1dG9tYXRpb25cIlxuICAgICAgICAgIH0uY3JlYXRlYFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2IEBjaGlwLWNsaWNrZWQ9JHt0aGlzLl9jbG9zZX0+XG4gICAgICAgICAgJHt0aGlzLl90cmlnZ2Vycy5sZW5ndGggfHxcbiAgICAgICAgICB0aGlzLl9jb25kaXRpb25zLmxlbmd0aCB8fFxuICAgICAgICAgIHRoaXMuX2FjdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgJHt0aGlzLl90cmlnZ2Vycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8aGEtZGV2aWNlLXRyaWdnZXJzLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF1dG9tYXRpb25zPSR7dGhpcy5fdHJpZ2dlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvaGEtZGV2aWNlLXRyaWdnZXJzLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAke3RoaXMuX2NvbmRpdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGhhLWRldmljZS1jb25kaXRpb25zLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF1dG9tYXRpb25zPSR7dGhpcy5fY29uZGl0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1kZXZpY2UtY29uZGl0aW9ucy1jYXJkPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9hY3Rpb25zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxoYS1kZXZpY2UtYWN0aW9ucy1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdXRvbWF0aW9ucz0ke3RoaXMuX2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NyaXB0PSR7dGhpcy5fcGFyYW1zLnNjcmlwdH1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1kZXZpY2UtYWN0aW9ucy1jYXJkPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmRldmljZXMuYXV0b21hdGlvbi5ub19kZXZpY2VfYXV0b21hdGlvbnNcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG13Yy1idXR0b24gc2xvdD1cInByaW1hcnlBY3Rpb25cIiBAY2xpY2s9XCIke3RoaXMuX2Nsb3NlfVwiPlxuICAgICAgICAgIENsb3NlXG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvaGEtZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBoYVN0eWxlRGlhbG9nO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctZGV2aWNlLWF1dG9tYXRpb25cIjogRGlhbG9nRGV2aWNlQXV0b21hdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQge1xuICBEZXZpY2VDb25kaXRpb24sXG4gIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCB7IEhhRGV2aWNlQXV0b21hdGlvbkNhcmQgfSBmcm9tIFwiLi9oYS1kZXZpY2UtYXV0b21hdGlvbi1jYXJkXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlLWNvbmRpdGlvbnMtY2FyZFwiKVxuZXhwb3J0IGNsYXNzIEhhRGV2aWNlQ29uZGl0aW9uc0NhcmQgZXh0ZW5kcyBIYURldmljZUF1dG9tYXRpb25DYXJkPFxuICBEZXZpY2VDb25kaXRpb25cbj4ge1xuICBwcm90ZWN0ZWQgdHlwZSA9IFwiY29uZGl0aW9uXCI7XG5cbiAgcHJvdGVjdGVkIGhlYWRlcktleSA9IFwidWkucGFuZWwuY29uZmlnLmRldmljZXMuYXV0b21hdGlvbi5jb25kaXRpb25zLmNhcHRpb25cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihsb2NhbGl6ZURldmljZUF1dG9tYXRpb25Db25kaXRpb24pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1kZXZpY2UtY29uZGl0aW9ucy1jYXJkXCI6IEhhRGV2aWNlQ29uZGl0aW9uc0NhcmQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7XG4gIERldmljZVRyaWdnZXIsXG4gIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvblRyaWdnZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgeyBIYURldmljZUF1dG9tYXRpb25DYXJkIH0gZnJvbSBcIi4vaGEtZGV2aWNlLWF1dG9tYXRpb24tY2FyZFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWRldmljZS10cmlnZ2Vycy1jYXJkXCIpXG5leHBvcnQgY2xhc3MgSGFEZXZpY2VUcmlnZ2Vyc0NhcmQgZXh0ZW5kcyBIYURldmljZUF1dG9tYXRpb25DYXJkPFxuICBEZXZpY2VUcmlnZ2VyXG4+IHtcbiAgcHJvdGVjdGVkIHR5cGUgPSBcInRyaWdnZXJcIjtcblxuICBwcm90ZWN0ZWQgaGVhZGVyS2V5ID0gXCJ1aS5wYW5lbC5jb25maWcuZGV2aWNlcy5hdXRvbWF0aW9uLnRyaWdnZXJzLmNhcHRpb25cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihsb2NhbGl6ZURldmljZUF1dG9tYXRpb25UcmlnZ2VyKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlLXRyaWdnZXJzLWNhcmRcIjogSGFEZXZpY2VUcmlnZ2Vyc0NhcmQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQVVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUdBO0FBQ0E7Ozs7Ozs7QUFPQTs7OztBQVhBOztBQUZBO0FBcUJBO0FBNUJBO0FBQUE7QUFBQTtBQUFBO0FBK0JBO0FBQ0E7QUFEQTtBQUdBO0FBbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQ0E7QUFDQTs7Ozs7QUFEQTtBQU9BO0FBNUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMktBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUdBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzQkE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFhQTtBQUVBO0FBSUE7QUFHQTtBQWdCQTtBQUVBO0FBSUE7QUFDQTtBQWNBOzs7Ozs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBdURBO0FBTUE7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFFQTtBQUNBO0FBUkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFvQkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXRDQTtBQUFBO0FBQUE7QUFBQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7O0FBSUE7QUFDQTs7OztBQVBBO0FBY0E7QUExREE7QUFBQTtBQUFBO0FBQUE7QUE2REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXhFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkVBOzs7O0FBQUE7QUFLQTtBQWhGQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFRQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFDQTtBQUFBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERBO0FBQUE7QUFBQTtBQUFBO0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBTUE7QUFDQTtBQUlBOztBQUdBO0FBQ0E7O0FBSkE7QUFRQTs7QUFHQTtBQUNBOztBQUpBO0FBUUE7O0FBR0E7QUFDQTtBQUNBOztBQUxBO0FBcEJBOztBQWtDQTs7OztBQTdDQTtBQWtEQTtBQTNHQTtBQUFBO0FBQUE7QUFBQTtBQThHQTtBQUNBO0FBL0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrSEE7QUFDQTtBQW5IQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBRUE7QUFDQTtBQVJBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBSUE7QUFHQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUFFQTtBQUNBO0FBUkE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
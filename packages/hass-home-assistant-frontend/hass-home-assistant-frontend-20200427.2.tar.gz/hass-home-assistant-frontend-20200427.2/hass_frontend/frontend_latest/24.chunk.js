(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[24],{

/***/ "./src/data/input_boolean.ts":
/*!***********************************!*\
  !*** ./src/data/input_boolean.ts ***!
  \***********************************/
/*! exports provided: fetchInputBoolean, createInputBoolean, updateInputBoolean, deleteInputBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInputBoolean", function() { return fetchInputBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputBoolean", function() { return createInputBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputBoolean", function() { return updateInputBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInputBoolean", function() { return deleteInputBoolean; });
const fetchInputBoolean = hass => hass.callWS({
  type: "input_boolean/list"
});
const createInputBoolean = (hass, values) => hass.callWS(Object.assign({
  type: "input_boolean/create"
}, values));
const updateInputBoolean = (hass, id, updates) => hass.callWS(Object.assign({
  type: "input_boolean/update",
  input_boolean_id: id
}, updates));
const deleteInputBoolean = (hass, id) => hass.callWS({
  type: "input_boolean/delete",
  input_boolean_id: id
});

/***/ }),

/***/ "./src/data/input_datetime.ts":
/*!************************************!*\
  !*** ./src/data/input_datetime.ts ***!
  \************************************/
/*! exports provided: setInputDateTimeValue, fetchInputDateTime, createInputDateTime, updateInputDateTime, deleteInputDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputDateTimeValue", function() { return setInputDateTimeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInputDateTime", function() { return fetchInputDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputDateTime", function() { return createInputDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputDateTime", function() { return updateInputDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInputDateTime", function() { return deleteInputDateTime; });
const setInputDateTimeValue = (hass, entityId, time = undefined, date = undefined) => {
  const param = {
    entity_id: entityId,
    time,
    date
  };
  hass.callService(entityId.split(".", 1)[0], "set_datetime", param);
};
const fetchInputDateTime = hass => hass.callWS({
  type: "input_datetime/list"
});
const createInputDateTime = (hass, values) => hass.callWS(Object.assign({
  type: "input_datetime/create"
}, values));
const updateInputDateTime = (hass, id, updates) => hass.callWS(Object.assign({
  type: "input_datetime/update",
  input_datetime_id: id
}, updates));
const deleteInputDateTime = (hass, id) => hass.callWS({
  type: "input_datetime/delete",
  input_datetime_id: id
});

/***/ }),

/***/ "./src/data/input_number.ts":
/*!**********************************!*\
  !*** ./src/data/input_number.ts ***!
  \**********************************/
/*! exports provided: fetchInputNumber, createInputNumber, updateInputNumber, deleteInputNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInputNumber", function() { return fetchInputNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputNumber", function() { return createInputNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputNumber", function() { return updateInputNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInputNumber", function() { return deleteInputNumber; });
const fetchInputNumber = hass => hass.callWS({
  type: "input_number/list"
});
const createInputNumber = (hass, values) => hass.callWS(Object.assign({
  type: "input_number/create"
}, values));
const updateInputNumber = (hass, id, updates) => hass.callWS(Object.assign({
  type: "input_number/update",
  input_number_id: id
}, updates));
const deleteInputNumber = (hass, id) => hass.callWS({
  type: "input_number/delete",
  input_number_id: id
});

/***/ }),

/***/ "./src/data/input_select.ts":
/*!**********************************!*\
  !*** ./src/data/input_select.ts ***!
  \**********************************/
/*! exports provided: setInputSelectOption, fetchInputSelect, createInputSelect, updateInputSelect, deleteInputSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputSelectOption", function() { return setInputSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInputSelect", function() { return fetchInputSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputSelect", function() { return createInputSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputSelect", function() { return updateInputSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInputSelect", function() { return deleteInputSelect; });
const setInputSelectOption = (hass, entity, option) => hass.callService("input_select", "select_option", {
  option,
  entity_id: entity
});
const fetchInputSelect = hass => hass.callWS({
  type: "input_select/list"
});
const createInputSelect = (hass, values) => hass.callWS(Object.assign({
  type: "input_select/create"
}, values));
const updateInputSelect = (hass, id, updates) => hass.callWS(Object.assign({
  type: "input_select/update",
  input_select_id: id
}, updates));
const deleteInputSelect = (hass, id) => hass.callWS({
  type: "input_select/delete",
  input_select_id: id
});

/***/ }),

/***/ "./src/data/input_text.ts":
/*!********************************!*\
  !*** ./src/data/input_text.ts ***!
  \********************************/
/*! exports provided: setValue, fetchInputText, createInputText, updateInputText, deleteInputText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInputText", function() { return fetchInputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputText", function() { return createInputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputText", function() { return updateInputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInputText", function() { return deleteInputText; });
const setValue = (hass, entity, value) => hass.callService(entity.split(".", 1)[0], "set_value", {
  value,
  entity_id: entity
});
const fetchInputText = hass => hass.callWS({
  type: "input_text/list"
});
const createInputText = (hass, values) => hass.callWS(Object.assign({
  type: "input_text/create"
}, values));
const updateInputText = (hass, id, updates) => hass.callWS(Object.assign({
  type: "input_text/update",
  input_text_id: id
}, updates));
const deleteInputText = (hass, id) => hass.callWS({
  type: "input_text/delete",
  input_text_id: id
});

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

/***/ "./src/panels/config/helpers/forms/ha-input_boolean-form.ts":
/*!******************************************************************!*\
  !*** ./src/panels/config/helpers/forms/ha-input_boolean-form.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_ha_icon_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-icon-input */ "./src/components/ha-icon-input.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
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








let HaInputBooleanForm = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-input_boolean-form")], function (_initialize, _LitElement) {
  class HaInputBooleanForm extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaInputBooleanForm,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "new",
      value: void 0
    }, {
      kind: "field",
      key: "_item",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_icon",
      value: void 0
    }, {
      kind: "set",
      key: "item",
      value: function item(_item) {
        this._item = _item;

        if (_item) {
          this._name = _item.name || "";
          this._icon = _item.icon || "";
        } else {
          this._name = "";
          this._icon = "";
        }
      }
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        this.updateComplete.then(() => {
          var _ref, _this$shadowRoot;

          return (_ref = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector("[dialogInitialFocus]")) === null || _ref === void 0 ? void 0 : _ref.focus();
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        const nameInvalid = !this._name || this._name.trim() === "";
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div class="form">
        <paper-input
          .value=${this._name}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.name")}
          .errorMessage="${this.hass.localize("ui.dialogs.helper_settings.required_error_msg")}"
          .invalid=${nameInvalid}
          dialogInitialFocus
        ></paper-input>
        <ha-icon-input
          .value=${this._icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.icon")}
        ></ha-icon-input>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this.new && !this._item) {
          return;
        }

        ev.stopPropagation();
        const configValue = ev.target.configValue;
        const value = ev.detail.value;

        if (this[`_${configValue}`] === value) {
          return;
        }

        const newValue = Object.assign({}, this._item);

        if (!value) {
          delete newValue[configValue];
        } else {
          newValue[configValue] = ev.detail.value;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value: newValue
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_5__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
        .form {
          color: var(--primary-text-color);
        }
        .row {
          padding: 16px 0;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/helpers/forms/ha-input_datetime-form.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/config/helpers/forms/ha-input_datetime-form.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_ha_icon_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-icon-input */ "./src/components/ha-icon-input.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
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










let HaInputDateTimeForm = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-input_datetime-form")], function (_initialize, _LitElement) {
  class HaInputDateTimeForm extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaInputDateTimeForm,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "new",
      value: void 0
    }, {
      kind: "field",
      key: "_item",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_mode",
      value: void 0
    }, {
      kind: "set",
      key: "item",
      value: function item(_item) {
        this._item = _item;

        if (_item) {
          this._name = _item.name || "";
          this._icon = _item.icon || "";
          this._mode = _item.has_time && _item.has_date ? "datetime" : _item.has_time ? "time" : "date";
        } else {
          this._name = "";
          this._icon = "";
          this._mode = "date";
        }
      }
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        this.updateComplete.then(() => {
          var _ref, _this$shadowRoot;

          return (_ref = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector("[dialogInitialFocus]")) === null || _ref === void 0 ? void 0 : _ref.focus();
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]``;
        }

        const nameInvalid = !this._name || this._name.trim() === "";
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <div class="form">
        <paper-input
          .value=${this._name}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.name")}
          .errorMessage="${this.hass.localize("ui.dialogs.helper_settings.required_error_msg")}"
          .invalid=${nameInvalid}
          dialogInitialFocus
        ></paper-input>
        <ha-icon-input
          .value=${this._icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.icon")}
        ></ha-icon-input>
        <br />
        ${this.hass.localize("ui.dialogs.helper_settings.input_datetime.mode")}:
        <br />
        <paper-radio-group
          .selected=${this._mode}
          @selected-changed=${this._modeChanged}
        >
          <paper-radio-button name="date">
            ${this.hass.localize("ui.dialogs.helper_settings.input_datetime.date")}
          </paper-radio-button>
          <paper-radio-button name="time">
            ${this.hass.localize("ui.dialogs.helper_settings.input_datetime.time")}
          </paper-radio-button>
          <paper-radio-button name="datetime">
            ${this.hass.localize("ui.dialogs.helper_settings.input_datetime.datetime")}
          </paper-radio-button>
        </paper-radio-group>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_modeChanged",
      value: function _modeChanged(ev) {
        const mode = ev.detail.value;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "value-changed", {
          value: Object.assign({}, this._item, {
            has_time: ["time", "datetime"].includes(mode),
            has_date: ["date", "datetime"].includes(mode)
          })
        });
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this.new && !this._item) {
          return;
        }

        ev.stopPropagation();
        const configValue = ev.target.configValue;
        const value = ev.detail.value;

        if (this[`_${configValue}`] === value) {
          return;
        }

        const newValue = Object.assign({}, this._item);

        if (!value) {
          delete newValue[configValue];
        } else {
          newValue[configValue] = ev.detail.value;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "value-changed", {
          value: newValue
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        .form {
          color: var(--primary-text-color);
        }
        .row {
          padding: 16px 0;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/helpers/forms/ha-input_number-form.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/config/helpers/forms/ha-input_number-form.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_ha_icon_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-icon-input */ "./src/components/ha-icon-input.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
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










let HaInputNumberForm = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-input_number-form")], function (_initialize, _LitElement) {
  class HaInputNumberForm extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaInputNumberForm,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "new",
      value: void 0
    }, {
      kind: "field",
      key: "_item",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_max",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_min",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_mode",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_step",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_unit_of_measurement",
      value: void 0
    }, {
      kind: "set",
      key: "item",
      value: // eslint-disable-next-line: variable-name
      function item(_item) {
        this._item = _item;

        if (_item) {
          var _item$max, _item$min;

          this._name = _item.name || "";
          this._icon = _item.icon || "";
          this._max = (_item$max = _item.max) !== null && _item$max !== void 0 ? _item$max : 100;
          this._min = (_item$min = _item.min) !== null && _item$min !== void 0 ? _item$min : 0;
          this._mode = _item.mode || "slider";
          this._step = _item.step || 1;
          this._unit_of_measurement = _item.unit_of_measurement;
        } else {
          this._item = {
            min: 0,
            max: 0
          };
          this._name = "";
          this._icon = "";
          this._max = 100;
          this._min = 0;
          this._mode = "slider";
          this._step = 1;
        }
      }
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        this.updateComplete.then(() => {
          var _ref, _this$shadowRoot;

          return (_ref = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector("[dialogInitialFocus]")) === null || _ref === void 0 ? void 0 : _ref.focus();
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$hass$userData;

        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]``;
        }

        const nameInvalid = !this._name || this._name.trim() === "";
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <div class="form">
        <paper-input
          .value=${this._name}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.name")}
          .errorMessage="${this.hass.localize("ui.dialogs.helper_settings.required_error_msg")}"
          .invalid=${nameInvalid}
          dialogInitialFocus
        ></paper-input>
        <ha-icon-input
          .value=${this._icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.icon")}
        ></ha-icon-input>
        <paper-input
          .value=${this._min}
          .configValue=${"min"}
          type="number"
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.input_number.min")}
        ></paper-input>
        <paper-input
          .value=${this._max}
          .configValue=${"max"}
          type="number"
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.input_number.max")}
        ></paper-input>
        ${((_this$hass$userData = this.hass.userData) === null || _this$hass$userData === void 0 ? void 0 : _this$hass$userData.showAdvanced) ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
              <div class="layout horizontal center justified">
                ${this.hass.localize("ui.dialogs.helper_settings.input_number.mode")}
                <paper-radio-group
                  .selected=${this._mode}
                  @selected-changed=${this._modeChanged}
                >
                  <paper-radio-button name="slider">
                    ${this.hass.localize("ui.dialogs.helper_settings.input_number.slider")}
                  </paper-radio-button>
                  <paper-radio-button name="box">
                    ${this.hass.localize("ui.dialogs.helper_settings.input_number.box")}
                  </paper-radio-button>
                </paper-radio-group>
              </div>
              <paper-input
                .value=${this._step}
                .configValue=${"step"}
                type="number"
                @value-changed=${this._valueChanged}
                .label=${this.hass.localize("ui.dialogs.helper_settings.input_number.step")}
              ></paper-input>

              <paper-input
                .value=${this._unit_of_measurement}
                .configValue=${"unit_of_measurement"}
                @value-changed=${this._valueChanged}
                .label=${this.hass.localize("ui.dialogs.helper_settings.input_number.unit_of_measurement")}
              ></paper-input>
            ` : ""}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_modeChanged",
      value: function _modeChanged(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "value-changed", {
          value: Object.assign({}, this._item, {
            mode: ev.detail.value
          })
        });
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this.new && !this._item) {
          return;
        }

        ev.stopPropagation();
        const configValue = ev.target.configValue;
        const value = ev.detail.value;

        if (this[`_${configValue}`] === value) {
          return;
        }

        const newValue = Object.assign({}, this._item);

        if (value === undefined || value === "") {
          delete newValue[configValue];
        } else {
          newValue[configValue] = ev.detail.value;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "value-changed", {
          value: newValue
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        .form {
          color: var(--primary-text-color);
        }
        ha-paper-dropdown-menu {
          display: block;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/helpers/forms/ha-input_select-form.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/config/helpers/forms/ha-input_select-form.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_ha_icon_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/ha-icon-input */ "./src/components/ha-icon-input.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
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













let HaInputSelectForm = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["customElement"])("ha-input_select-form")], function (_initialize, _LitElement) {
  class HaInputSelectForm extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaInputSelectForm,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "new",
      value: void 0
    }, {
      kind: "field",
      key: "_item",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_options",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["query"])("#option_input")],
      key: "_optionInput",
      value: void 0
    }, {
      kind: "set",
      key: "item",
      value: function item(_item) {
        this._item = _item;

        if (_item) {
          this._name = _item.name || "";
          this._icon = _item.icon || "";
          this._options = _item.options || [];
        } else {
          this._name = "";
          this._icon = "";
          this._options = [];
        }
      }
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        this.updateComplete.then(() => {
          var _ref, _this$shadowRoot;

          return (_ref = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector("[dialogInitialFocus]")) === null || _ref === void 0 ? void 0 : _ref.focus();
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]``;
        }

        const nameInvalid = !this._name || this._name.trim() === "";
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <div class="form">
        <paper-input
          .value=${this._name}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.name")}
          .errorMessage="${this.hass.localize("ui.dialogs.helper_settings.required_error_msg")}"
          .invalid=${nameInvalid}
          dialogInitialFocus
        ></paper-input>
        <ha-icon-input
          .value=${this._icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.icon")}
        ></ha-icon-input>
        ${this.hass.localize("ui.dialogs.helper_settings.input_select.options")}:
        ${this._options.length ? this._options.map((option, index) => {
          return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                <paper-item class="option">
                  <paper-item-body> ${option} </paper-item-body>
                  <paper-icon-button
                    .index=${index}
                    .title=${this.hass.localize("ui.dialogs.helper_settings.input_select.remove_option")}
                    @click=${this._removeOption}
                    icon="hass:delete"
                  ></paper-icon-button>
                </paper-item>
              `;
        }) : lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
              <paper-item>
                ${this.hass.localize("ui.dialogs.helper_settings.input_select.no_options")}
              </paper-item>
            `}
        <div class="layout horizontal bottom">
          <paper-input
            class="flex-auto"
            id="option_input"
            .label=${this.hass.localize("ui.dialogs.helper_settings.input_select.add_option")}
            @keydown=${this._handleKeyAdd}
          ></paper-input>
          <mwc-button @click=${this._addOption}
            >${this.hass.localize("ui.dialogs.helper_settings.input_select.add")}</mwc-button
          >
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_handleKeyAdd",
      value: function _handleKeyAdd(ev) {
        ev.stopPropagation();

        if (ev.keyCode !== 13) {
          return;
        }

        this._addOption();
      }
    }, {
      kind: "method",
      key: "_addOption",
      value: function _addOption() {
        const input = this._optionInput;

        if (!input || !input.value) {
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "value-changed", {
          value: Object.assign({}, this._item, {
            options: [...this._options, input.value]
          })
        });
        input.value = "";
      }
    }, {
      kind: "method",
      key: "_removeOption",
      value: async function _removeOption(ev) {
        if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_9__["showConfirmationDialog"])(this, {
          title: "Delete this item?",
          text: "Are you sure you want to delete this item?"
        }))) {
          return;
        }

        const index = ev.target.index;
        const options = [...this._options];
        options.splice(index, 1);
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "value-changed", {
          value: Object.assign({}, this._item, {
            options
          })
        });
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this.new && !this._item) {
          return;
        }

        ev.stopPropagation();
        const configValue = ev.target.configValue;
        const value = ev.detail.value;

        if (this[`_${configValue}`] === value) {
          return;
        }

        const newValue = Object.assign({}, this._item);

        if (!value) {
          delete newValue[configValue];
        } else {
          newValue[configValue] = ev.detail.value;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "value-changed", {
          value: newValue
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_5__["css"]`
        .form {
          color: var(--primary-text-color);
        }
        .option {
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          margin-top: 4px;
        }
        mwc-button {
          margin-left: 8px;
        }
        ha-paper-dropdown-menu {
          display: block;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/helpers/forms/ha-input_text-form.ts":
/*!***************************************************************!*\
  !*** ./src/panels/config/helpers/forms/ha-input_text-form.ts ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_ha_icon_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-icon-input */ "./src/components/ha-icon-input.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
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










let HaInputTextForm = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-input_text-form")], function (_initialize, _LitElement) {
  class HaInputTextForm extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaInputTextForm,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "new",
      value: void 0
    }, {
      kind: "field",
      key: "_item",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_max",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_min",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_mode",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_pattern",
      value: void 0
    }, {
      kind: "set",
      key: "item",
      value: function item(_item) {
        this._item = _item;

        if (_item) {
          this._name = _item.name || "";
          this._icon = _item.icon || "";
          this._max = _item.max || 100;
          this._min = _item.min || 0;
          this._mode = _item.mode || "text";
          this._pattern = _item.pattern;
        } else {
          this._name = "";
          this._icon = "";
          this._max = 100;
          this._min = 0;
          this._mode = "text";
        }
      }
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        this.updateComplete.then(() => {
          var _ref, _this$shadowRoot;

          return (_ref = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector("[dialogInitialFocus]")) === null || _ref === void 0 ? void 0 : _ref.focus();
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$hass$userData;

        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]``;
        }

        const nameInvalid = !this._name || this._name.trim() === "";
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <div class="form">
        <paper-input
          .value=${this._name}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.name")}
          .errorMessage="${this.hass.localize("ui.dialogs.helper_settings.required_error_msg")}"
          .invalid=${nameInvalid}
          dialogInitialFocus
        ></paper-input>
        <ha-icon-input
          .value=${this._icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
          .label=${this.hass.localize("ui.dialogs.helper_settings.generic.icon")}
        ></ha-icon-input>
        ${((_this$hass$userData = this.hass.userData) === null || _this$hass$userData === void 0 ? void 0 : _this$hass$userData.showAdvanced) ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
              <paper-input
                .value=${this._min}
                .configValue=${"min"}
                type="number"
                min="0"
                max="255"
                @value-changed=${this._valueChanged}
                .label=${this.hass.localize("ui.dialogs.helper_settings.input_text.min")}
              ></paper-input>
              <paper-input
                .value=${this._max}
                .configValue=${"max"}
                min="0"
                max="255"
                type="number"
                @value-changed=${this._valueChanged}
                .label=${this.hass.localize("ui.dialogs.helper_settings.input_text.max")}
              ></paper-input>
              <div class="layout horizontal center justified">
                ${this.hass.localize("ui.dialogs.helper_settings.input_text.mode")}
                <paper-radio-group
                  .selected=${this._mode}
                  @selected-changed=${this._modeChanged}
                >
                  <paper-radio-button name="text">
                    ${this.hass.localize("ui.dialogs.helper_settings.input_text.text")}
                  </paper-radio-button>
                  <paper-radio-button name="password">
                    ${this.hass.localize("ui.dialogs.helper_settings.input_text.password")}
                  </paper-radio-button>
                </paper-radio-group>
              </div>
              <paper-input
                .value=${this._pattern}
                .configValue=${"pattern"}
                @value-changed=${this._valueChanged}
                .label=${this.hass.localize("ui.dialogs.helper_settings.input_text.pattern")}
              ></paper-input>
            ` : ""}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_modeChanged",
      value: function _modeChanged(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "value-changed", {
          value: Object.assign({}, this._item, {
            mode: ev.detail.value
          })
        });
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this.new && !this._item) {
          return;
        }

        ev.stopPropagation();
        const configValue = ev.target.configValue;
        const value = ev.detail.value;

        if (this[`_${configValue}`] === value) {
          return;
        }

        const newValue = Object.assign({}, this._item);

        if (!value) {
          delete newValue[configValue];
        } else {
          newValue[configValue] = ev.detail.value;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "value-changed", {
          value: newValue
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        .form {
          color: var(--primary-text-color);
        }
        .row {
          padding: 16px 0;
        }
        ha-paper-dropdown-menu {
          display: block;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbnB1dF9ib29sZWFuLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2lucHV0X2RhdGV0aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2lucHV0X251bWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbnB1dF9zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW5wdXRfdGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oZWxwZXJzL2Zvcm1zL2hhLWlucHV0X2Jvb2xlYW4tZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oZWxwZXJzL2Zvcm1zL2hhLWlucHV0X2RhdGV0aW1lLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGVscGVycy9mb3Jtcy9oYS1pbnB1dF9udW1iZXItZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oZWxwZXJzL2Zvcm1zL2hhLWlucHV0X3NlbGVjdC1mb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hlbHBlcnMvZm9ybXMvaGEtaW5wdXRfdGV4dC1mb3JtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dEJvb2xlYW4ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGluaXRpYWw/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0Qm9vbGVhbk11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgaW5pdGlhbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoSW5wdXRCb29sZWFuID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPElucHV0Qm9vbGVhbltdPih7IHR5cGU6IFwiaW5wdXRfYm9vbGVhbi9saXN0XCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbnB1dEJvb2xlYW4gPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogSW5wdXRCb29sZWFuTXV0YWJsZVBhcmFtc1xuKSA9PlxuICBoYXNzLmNhbGxXUzxJbnB1dEJvb2xlYW4+KHtcbiAgICB0eXBlOiBcImlucHV0X2Jvb2xlYW4vY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUlucHV0Qm9vbGVhbiA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxJbnB1dEJvb2xlYW5NdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxJbnB1dEJvb2xlYW4+KHtcbiAgICB0eXBlOiBcImlucHV0X2Jvb2xlYW4vdXBkYXRlXCIsXG4gICAgaW5wdXRfYm9vbGVhbl9pZDogaWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVJbnB1dEJvb2xlYW4gPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiaW5wdXRfYm9vbGVhbi9kZWxldGVcIixcbiAgICBpbnB1dF9ib29sZWFuX2lkOiBpZCxcbiAgfSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXREYXRlVGltZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaW5pdGlhbD86IHN0cmluZztcbiAgaGFzX3RpbWU6IGJvb2xlYW47XG4gIGhhc19kYXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0RGF0ZVRpbWVNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIGluaXRpYWw6IHN0cmluZztcbiAgaGFzX3RpbWU6IGJvb2xlYW47XG4gIGhhc19kYXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0SW5wdXREYXRlVGltZVZhbHVlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB0aW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsXG4gIGRhdGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuKSA9PiB7XG4gIGNvbnN0IHBhcmFtID0geyBlbnRpdHlfaWQ6IGVudGl0eUlkLCB0aW1lLCBkYXRlIH07XG4gIGhhc3MuY2FsbFNlcnZpY2UoZW50aXR5SWQuc3BsaXQoXCIuXCIsIDEpWzBdLCBcInNldF9kYXRldGltZVwiLCBwYXJhbSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbnB1dERhdGVUaW1lID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPElucHV0RGF0ZVRpbWVbXT4oeyB0eXBlOiBcImlucHV0X2RhdGV0aW1lL2xpc3RcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0RGF0ZVRpbWUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogSW5wdXREYXRlVGltZU11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8SW5wdXREYXRlVGltZT4oe1xuICAgIHR5cGU6IFwiaW5wdXRfZGF0ZXRpbWUvY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUlucHV0RGF0ZVRpbWUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8SW5wdXREYXRlVGltZU11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPElucHV0RGF0ZVRpbWU+KHtcbiAgICB0eXBlOiBcImlucHV0X2RhdGV0aW1lL3VwZGF0ZVwiLFxuICAgIGlucHV0X2RhdGV0aW1lX2lkOiBpZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUlucHV0RGF0ZVRpbWUgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiaW5wdXRfZGF0ZXRpbWUvZGVsZXRlXCIsXG4gICAgaW5wdXRfZGF0ZXRpbWVfaWQ6IGlkLFxuICB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dE51bWJlciB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBpY29uPzogc3RyaW5nO1xuICBpbml0aWFsPzogbnVtYmVyO1xuICBzdGVwPzogbnVtYmVyO1xuICBtb2RlPzogXCJib3hcIiB8IFwic2xpZGVyXCI7XG4gIHVuaXRfb2ZfbWVhc3VyZW1lbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXROdW1iZXJNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIGluaXRpYWw6IG51bWJlcjtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIG1vZGU6IFwiYm94XCIgfCBcInNsaWRlclwiO1xuICB1bml0X29mX21lYXN1cmVtZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hJbnB1dE51bWJlciA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxJbnB1dE51bWJlcltdPih7IHR5cGU6IFwiaW5wdXRfbnVtYmVyL2xpc3RcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0TnVtYmVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IElucHV0TnVtYmVyTXV0YWJsZVBhcmFtc1xuKSA9PlxuICBoYXNzLmNhbGxXUzxJbnB1dE51bWJlcj4oe1xuICAgIHR5cGU6IFwiaW5wdXRfbnVtYmVyL2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVJbnB1dE51bWJlciA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxJbnB1dE51bWJlck11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPElucHV0TnVtYmVyPih7XG4gICAgdHlwZTogXCJpbnB1dF9udW1iZXIvdXBkYXRlXCIsXG4gICAgaW5wdXRfbnVtYmVyX2lkOiBpZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUlucHV0TnVtYmVyID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImlucHV0X251bWJlci9kZWxldGVcIixcbiAgICBpbnB1dF9udW1iZXJfaWQ6IGlkLFxuICB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFNlbGVjdCB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgb3B0aW9uczogc3RyaW5nW107XG4gIGljb24/OiBzdHJpbmc7XG4gIGluaXRpYWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRTZWxlY3RNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIGluaXRpYWw6IHN0cmluZztcbiAgb3B0aW9uczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBzZXRJbnB1dFNlbGVjdE9wdGlvbiA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5OiBzdHJpbmcsXG4gIG9wdGlvbjogc3RyaW5nXG4pID0+XG4gIGhhc3MuY2FsbFNlcnZpY2UoXCJpbnB1dF9zZWxlY3RcIiwgXCJzZWxlY3Rfb3B0aW9uXCIsIHtcbiAgICBvcHRpb24sXG4gICAgZW50aXR5X2lkOiBlbnRpdHksXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbnB1dFNlbGVjdCA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxJbnB1dFNlbGVjdFtdPih7IHR5cGU6IFwiaW5wdXRfc2VsZWN0L2xpc3RcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0U2VsZWN0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IElucHV0U2VsZWN0TXV0YWJsZVBhcmFtc1xuKSA9PlxuICBoYXNzLmNhbGxXUzxJbnB1dFNlbGVjdD4oe1xuICAgIHR5cGU6IFwiaW5wdXRfc2VsZWN0L2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVJbnB1dFNlbGVjdCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxJbnB1dFNlbGVjdE11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPElucHV0U2VsZWN0Pih7XG4gICAgdHlwZTogXCJpbnB1dF9zZWxlY3QvdXBkYXRlXCIsXG4gICAgaW5wdXRfc2VsZWN0X2lkOiBpZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUlucHV0U2VsZWN0ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImlucHV0X3NlbGVjdC9kZWxldGVcIixcbiAgICBpbnB1dF9zZWxlY3RfaWQ6IGlkLFxuICB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFRleHQge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGluaXRpYWw/OiBzdHJpbmc7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xuICBwYXR0ZXJuPzogc3RyaW5nO1xuICBtb2RlPzogXCJ0ZXh0XCIgfCBcInBhc3N3b3JkXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRUZXh0TXV0YWJsZVBhcmFtcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBpbml0aWFsOiBzdHJpbmc7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgcGF0dGVybjogc3RyaW5nO1xuICBtb2RlOiBcInRleHRcIiB8IFwicGFzc3dvcmRcIjtcbn1cblxuZXhwb3J0IGNvbnN0IHNldFZhbHVlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGVudGl0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxTZXJ2aWNlKGVudGl0eS5zcGxpdChcIi5cIiwgMSlbMF0sIFwic2V0X3ZhbHVlXCIsIHtcbiAgICB2YWx1ZSxcbiAgICBlbnRpdHlfaWQ6IGVudGl0eSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaElucHV0VGV4dCA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxJbnB1dFRleHRbXT4oeyB0eXBlOiBcImlucHV0X3RleHQvbGlzdFwiIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSW5wdXRUZXh0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IElucHV0VGV4dE11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8SW5wdXRUZXh0Pih7XG4gICAgdHlwZTogXCJpbnB1dF90ZXh0L2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVJbnB1dFRleHQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8SW5wdXRUZXh0TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8SW5wdXRUZXh0Pih7XG4gICAgdHlwZTogXCJpbnB1dF90ZXh0L3VwZGF0ZVwiLFxuICAgIGlucHV0X3RleHRfaWQ6IGlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlSW5wdXRUZXh0ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImlucHV0X3RleHQvZGVsZXRlXCIsXG4gICAgaW5wdXRfdGV4dF9pZDogaWQsXG4gIH0pO1xuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tIFwibGl0LWh0bWxcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW50ZXJmYWNlIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZyB8IFRlbXBsYXRlUmVzdWx0O1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgZGlzbWlzc1RleHQ/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xuICBjYW5jZWw/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBpbnB1dExhYmVsPzogc3RyaW5nO1xuICBpbnB1dFR5cGU/OiBzdHJpbmc7XG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUGFyYW1zXG4gIGV4dGVuZHMgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zLFxuICAgIFByb21wdERpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xuICBjb25maXJtYXRpb24/OiBib29sZWFuO1xuICBwcm9tcHQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZEdlbmVyaWNEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb25maXJtYXRpb25cIiAqLyBcIi4vZGlhbG9nLWJveFwiKTtcblxuY29uc3Qgc2hvd0RpYWxvZ0hlbHBlciA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogRGlhbG9nUGFyYW1zLFxuICBleHRyYT86IHtcbiAgICBjb25maXJtYXRpb24/OiBEaWFsb2dQYXJhbXNbXCJjb25maXJtYXRpb25cIl07XG4gICAgcHJvbXB0PzogRGlhbG9nUGFyYW1zW1wicHJvbXB0XCJdO1xuICB9XG4pID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3Qgb3JpZ0NhbmNlbCA9IGRpYWxvZ1BhcmFtcy5jYW5jZWw7XG4gICAgY29uc3Qgb3JpZ0NvbmZpcm0gPSBkaWFsb2dQYXJhbXMuY29uZmlybTtcblxuICAgIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctYm94XCIsXG4gICAgICBkaWFsb2dJbXBvcnQ6IGxvYWRHZW5lcmljRGlhbG9nLFxuICAgICAgZGlhbG9nUGFyYW1zOiB7XG4gICAgICAgIC4uLmRpYWxvZ1BhcmFtcyxcbiAgICAgICAgLi4uZXh0cmEsXG4gICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG51bGwgOiBmYWxzZSk7XG4gICAgICAgICAgaWYgKG9yaWdDYW5jZWwpIHtcbiAgICAgICAgICAgIG9yaWdDYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IChvdXQpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBvdXQgOiB0cnVlKTtcbiAgICAgICAgICBpZiAob3JpZ0NvbmZpcm0pIHtcbiAgICAgICAgICAgIG9yaWdDb25maXJtKG91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93QWxlcnREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEFsZXJ0RGlhbG9nUGFyYW1zXG4pID0+IHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zKTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maXJtYXRpb25EaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBjb25maXJtYXRpb246IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBib29sZWFuXG4gID47XG5cbmV4cG9ydCBjb25zdCBzaG93UHJvbXB0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBQcm9tcHREaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgcHJvbXB0OiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgbnVsbCB8IHN0cmluZ1xuICA+O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uLWlucHV0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvaW5wdXRfYm9vbGVhblwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtaW5wdXRfYm9vbGVhbi1mb3JtXCIpXG5jbGFzcyBIYUlucHV0Qm9vbGVhbkZvcm0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuZXc/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2l0ZW0/OiBJbnB1dEJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbmFtZSE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9pY29uITogc3RyaW5nO1xuXG4gIHNldCBpdGVtKGl0ZW06IElucHV0Qm9vbGVhbikge1xuICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLl9uYW1lID0gaXRlbS5uYW1lIHx8IFwiXCI7XG4gICAgICB0aGlzLl9pY29uID0gaXRlbS5pY29uIHx8IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5faWNvbiA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PlxuICAgICAgKHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJbZGlhbG9nSW5pdGlhbEZvY3VzXVwiXG4gICAgICApIGFzIEhUTUxFbGVtZW50KT8uZm9jdXMoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgbmFtZUludmFsaWQgPSAhdGhpcy5fbmFtZSB8fCB0aGlzLl9uYW1lLnRyaW0oKSA9PT0gXCJcIjtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fbmFtZX1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcIm5hbWVcIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5nZW5lcmljLm5hbWVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgLmVycm9yTWVzc2FnZT1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MucmVxdWlyZWRfZXJyb3JfbXNnXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgICAgLmludmFsaWQ9JHtuYW1lSW52YWxpZH1cbiAgICAgICAgICBkaWFsb2dJbml0aWFsRm9jdXNcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxoYS1pY29uLWlucHV0XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5faWNvbn1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImljb25cIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5nZW5lcmljLmljb25cIlxuICAgICAgICAgICl9XG4gICAgICAgID48L2hhLWljb24taW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGlmICghdGhpcy5uZXcgJiYgIXRoaXMuX2l0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSAoZXYudGFyZ2V0IGFzIGFueSkuY29uZmlnVmFsdWU7XG4gICAgY29uc3QgdmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKHRoaXNbYF8ke2NvbmZpZ1ZhbHVlfWBdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdWYWx1ZSA9IHsgLi4udGhpcy5faXRlbSB9O1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIGRlbGV0ZSBuZXdWYWx1ZVtjb25maWdWYWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlW2NvbmZpZ1ZhbHVlXSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5mb3JtIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaW5wdXRfYm9vbGVhbi1mb3JtXCI6IEhhSW5wdXRCb29sZWFuRm9ybTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7IElucHV0RGF0ZVRpbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9pbnB1dF9kYXRldGltZVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtaW5wdXRfZGF0ZXRpbWUtZm9ybVwiKVxuY2xhc3MgSGFJbnB1dERhdGVUaW1lRm9ybSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5ldz86IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfaXRlbT86IElucHV0RGF0ZVRpbWU7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbmFtZSE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9pY29uITogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX21vZGUhOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJkYXRldGltZVwiO1xuXG4gIHNldCBpdGVtKGl0ZW06IElucHV0RGF0ZVRpbWUpIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5fbmFtZSA9IGl0ZW0ubmFtZSB8fCBcIlwiO1xuICAgICAgdGhpcy5faWNvbiA9IGl0ZW0uaWNvbiB8fCBcIlwiO1xuICAgICAgdGhpcy5fbW9kZSA9XG4gICAgICAgIGl0ZW0uaGFzX3RpbWUgJiYgaXRlbS5oYXNfZGF0ZVxuICAgICAgICAgID8gXCJkYXRldGltZVwiXG4gICAgICAgICAgOiBpdGVtLmhhc190aW1lXG4gICAgICAgICAgPyBcInRpbWVcIlxuICAgICAgICAgIDogXCJkYXRlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5faWNvbiA9IFwiXCI7XG4gICAgICB0aGlzLl9tb2RlID0gXCJkYXRlXCI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PlxuICAgICAgKHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJbZGlhbG9nSW5pdGlhbEZvY3VzXVwiXG4gICAgICApIGFzIEhUTUxFbGVtZW50KT8uZm9jdXMoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgbmFtZUludmFsaWQgPSAhdGhpcy5fbmFtZSB8fCB0aGlzLl9uYW1lLnRyaW0oKSA9PT0gXCJcIjtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fbmFtZX1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcIm5hbWVcIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5nZW5lcmljLm5hbWVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgLmVycm9yTWVzc2FnZT1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MucmVxdWlyZWRfZXJyb3JfbXNnXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgICAgLmludmFsaWQ9JHtuYW1lSW52YWxpZH1cbiAgICAgICAgICBkaWFsb2dJbml0aWFsRm9jdXNcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxoYS1pY29uLWlucHV0XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5faWNvbn1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImljb25cIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5nZW5lcmljLmljb25cIlxuICAgICAgICAgICl9XG4gICAgICAgID48L2hhLWljb24taW5wdXQ+XG4gICAgICAgIDxiciAvPlxuICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuaGVscGVyX3NldHRpbmdzLmlucHV0X2RhdGV0aW1lLm1vZGVcIil9OlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fbW9kZX1cbiAgICAgICAgICBAc2VsZWN0ZWQtY2hhbmdlZD0ke3RoaXMuX21vZGVDaGFuZ2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MuaW5wdXRfZGF0ZXRpbWUuZGF0ZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInRpbWVcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuaGVscGVyX3NldHRpbmdzLmlucHV0X2RhdGV0aW1lLnRpbWVcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJkYXRldGltZVwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MuaW5wdXRfZGF0ZXRpbWUuZGF0ZXRpbWVcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9tb2RlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCBtb2RlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgLi4udGhpcy5faXRlbSxcbiAgICAgICAgaGFzX3RpbWU6IFtcInRpbWVcIiwgXCJkYXRldGltZVwiXS5pbmNsdWRlcyhtb2RlKSxcbiAgICAgICAgaGFzX2RhdGU6IFtcImRhdGVcIiwgXCJkYXRldGltZVwiXS5pbmNsdWRlcyhtb2RlKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm5ldyAmJiAhdGhpcy5faXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IChldi50YXJnZXQgYXMgYW55KS5jb25maWdWYWx1ZTtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAodGhpc1tgXyR7Y29uZmlnVmFsdWV9YF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1ZhbHVlID0geyAuLi50aGlzLl9pdGVtIH07XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgZGVsZXRlIG5ld1ZhbHVlW2NvbmZpZ1ZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWVbY29uZmlnVmFsdWVdID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pbnB1dF9kYXRldGltZS1mb3JtXCI6IEhhSW5wdXREYXRlVGltZUZvcm07XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1ncm91cC9wYXBlci1yYWRpby1ncm91cFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24taW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2lucHV0X251bWJlclwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtaW5wdXRfbnVtYmVyLWZvcm1cIilcbmNsYXNzIEhhSW5wdXROdW1iZXJGb3JtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmV3PzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9pdGVtPzogUGFydGlhbDxJbnB1dE51bWJlcj47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbmFtZSE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9pY29uITogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX21heD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9taW4/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbW9kZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdGVwPzogbnVtYmVyO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBAcHJvcGVydHkoKSBwcml2YXRlIF91bml0X29mX21lYXN1cmVtZW50Pzogc3RyaW5nO1xuXG4gIHNldCBpdGVtKGl0ZW06IElucHV0TnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuX25hbWUgPSBpdGVtLm5hbWUgfHwgXCJcIjtcbiAgICAgIHRoaXMuX2ljb24gPSBpdGVtLmljb24gfHwgXCJcIjtcbiAgICAgIHRoaXMuX21heCA9IGl0ZW0ubWF4ID8/IDEwMDtcbiAgICAgIHRoaXMuX21pbiA9IGl0ZW0ubWluID8/IDA7XG4gICAgICB0aGlzLl9tb2RlID0gaXRlbS5tb2RlIHx8IFwic2xpZGVyXCI7XG4gICAgICB0aGlzLl9zdGVwID0gaXRlbS5zdGVwIHx8IDE7XG4gICAgICB0aGlzLl91bml0X29mX21lYXN1cmVtZW50ID0gaXRlbS51bml0X29mX21lYXN1cmVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtID0ge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMCxcbiAgICAgIH07XG4gICAgICB0aGlzLl9uYW1lID0gXCJcIjtcbiAgICAgIHRoaXMuX2ljb24gPSBcIlwiO1xuICAgICAgdGhpcy5fbWF4ID0gMTAwO1xuICAgICAgdGhpcy5fbWluID0gMDtcbiAgICAgIHRoaXMuX21vZGUgPSBcInNsaWRlclwiO1xuICAgICAgdGhpcy5fc3RlcCA9IDE7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PlxuICAgICAgKHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJbZGlhbG9nSW5pdGlhbEZvY3VzXVwiXG4gICAgICApIGFzIEhUTUxFbGVtZW50KT8uZm9jdXMoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgbmFtZUludmFsaWQgPSAhdGhpcy5fbmFtZSB8fCB0aGlzLl9uYW1lLnRyaW0oKSA9PT0gXCJcIjtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fbmFtZX1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcIm5hbWVcIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5nZW5lcmljLm5hbWVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgLmVycm9yTWVzc2FnZT1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MucmVxdWlyZWRfZXJyb3JfbXNnXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgICAgLmludmFsaWQ9JHtuYW1lSW52YWxpZH1cbiAgICAgICAgICBkaWFsb2dJbml0aWFsRm9jdXNcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxoYS1pY29uLWlucHV0XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5faWNvbn1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImljb25cIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5nZW5lcmljLmljb25cIlxuICAgICAgICAgICl9XG4gICAgICAgID48L2hhLWljb24taW5wdXQ+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX21pbn1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcIm1pblwifVxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLmRpYWxvZ3MuaGVscGVyX3NldHRpbmdzLmlucHV0X251bWJlci5taW5cIlxuICAgICAgICAgICl9XG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl9tYXh9XG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJtYXhcIn1cbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5pbnB1dF9udW1iZXIubWF4XCJcbiAgICAgICAgICApfVxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgJHt0aGlzLmhhc3MudXNlckRhdGE/LnNob3dBZHZhbmNlZFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dCBob3Jpem9udGFsIGNlbnRlciBqdXN0aWZpZWRcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MuaW5wdXRfbnVtYmVyLm1vZGVcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl9tb2RlfVxuICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl9tb2RlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5pbnB1dF9udW1iZXIuc2xpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MuaW5wdXRfbnVtYmVyLmJveFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcInN0ZXBcIn1cbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5pbnB1dF9udW1iZXIuc3RlcFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdW5pdF9vZl9tZWFzdXJlbWVudH1cbiAgICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcInVuaXRfb2ZfbWVhc3VyZW1lbnRcIn1cbiAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5pbnB1dF9udW1iZXIudW5pdF9vZl9tZWFzdXJlbWVudFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX21vZGVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwge1xuICAgICAgdmFsdWU6IHsgLi4udGhpcy5faXRlbSwgbW9kZTogZXYuZGV0YWlsLnZhbHVlIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm5ldyAmJiAhdGhpcy5faXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IChldi50YXJnZXQgYXMgYW55KS5jb25maWdWYWx1ZTtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAodGhpc1tgXyR7Y29uZmlnVmFsdWV9YF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1ZhbHVlID0geyAuLi50aGlzLl9pdGVtIH07XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGRlbGV0ZSBuZXdWYWx1ZVtjb25maWdWYWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlW2NvbmZpZ1ZhbHVlXSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5mb3JtIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pbnB1dF9udW1iZXItZm9ybVwiOiBIYUlucHV0TnVtYmVyRm9ybTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgdHlwZSB7IFBhcGVySW5wdXRFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24taW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgdHlwZSB7IElucHV0U2VsZWN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvaW5wdXRfc2VsZWN0XCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtaW5wdXRfc2VsZWN0LWZvcm1cIilcbmNsYXNzIEhhSW5wdXRTZWxlY3RGb3JtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmV3PzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9pdGVtPzogSW5wdXRTZWxlY3Q7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbmFtZSE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9pY29uITogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX29wdGlvbnM6IHN0cmluZ1tdID0gW107XG5cbiAgQHF1ZXJ5KFwiI29wdGlvbl9pbnB1dFwiKSBwcml2YXRlIF9vcHRpb25JbnB1dD86IFBhcGVySW5wdXRFbGVtZW50O1xuXG4gIHNldCBpdGVtKGl0ZW06IElucHV0U2VsZWN0KSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuX25hbWUgPSBpdGVtLm5hbWUgfHwgXCJcIjtcbiAgICAgIHRoaXMuX2ljb24gPSBpdGVtLmljb24gfHwgXCJcIjtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBpdGVtLm9wdGlvbnMgfHwgW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5faWNvbiA9IFwiXCI7XG4gICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PlxuICAgICAgKHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJbZGlhbG9nSW5pdGlhbEZvY3VzXVwiXG4gICAgICApIGFzIEhUTUxFbGVtZW50KT8uZm9jdXMoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgbmFtZUludmFsaWQgPSAhdGhpcy5fbmFtZSB8fCB0aGlzLl9uYW1lLnRyaW0oKSA9PT0gXCJcIjtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fbmFtZX1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcIm5hbWVcIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5nZW5lcmljLm5hbWVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgLmVycm9yTWVzc2FnZT1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MucmVxdWlyZWRfZXJyb3JfbXNnXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgICAgLmludmFsaWQ9JHtuYW1lSW52YWxpZH1cbiAgICAgICAgICBkaWFsb2dJbml0aWFsRm9jdXNcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxoYS1pY29uLWlucHV0XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5faWNvbn1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImljb25cIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5nZW5lcmljLmljb25cIlxuICAgICAgICAgICl9XG4gICAgICAgID48L2hhLWljb24taW5wdXQ+XG4gICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLmRpYWxvZ3MuaGVscGVyX3NldHRpbmdzLmlucHV0X3NlbGVjdC5vcHRpb25zXCJcbiAgICAgICAgKX06XG4gICAgICAgICR7dGhpcy5fb3B0aW9ucy5sZW5ndGhcbiAgICAgICAgICA/IHRoaXMuX29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGNsYXNzPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PiAke29wdGlvbn0gPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgLmluZGV4PSR7aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIC50aXRsZT0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuaGVscGVyX3NldHRpbmdzLmlucHV0X3NlbGVjdC5yZW1vdmVfb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fcmVtb3ZlT3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MuaW5wdXRfc2VsZWN0Lm5vX29wdGlvbnNcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQgaG9yaXpvbnRhbCBib3R0b21cIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleC1hdXRvXCJcbiAgICAgICAgICAgIGlkPVwib3B0aW9uX2lucHV0XCJcbiAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MuaW5wdXRfc2VsZWN0LmFkZF9vcHRpb25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIEBrZXlkb3duPSR7dGhpcy5faGFuZGxlS2V5QWRkfVxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2FkZE9wdGlvbn1cbiAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MuaW5wdXRfc2VsZWN0LmFkZFwiXG4gICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlS2V5QWRkKGV2OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGV2LmtleUNvZGUgIT09IDEzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2FkZE9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkT3B0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5fb3B0aW9uSW5wdXQ7XG4gICAgaWYgKCFpbnB1dCB8fCAhaW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogeyAuLi50aGlzLl9pdGVtLCBvcHRpb25zOiBbLi4udGhpcy5fb3B0aW9ucywgaW5wdXQudmFsdWVdIH0sXG4gICAgfSk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVtb3ZlT3B0aW9uKGV2OiBFdmVudCkge1xuICAgIGlmIChcbiAgICAgICEoYXdhaXQgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRpdGxlOiBcIkRlbGV0ZSB0aGlzIGl0ZW0/XCIsXG4gICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/XCIsXG4gICAgICB9KSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSAoZXYudGFyZ2V0IGFzIGFueSkuaW5kZXg7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFsuLi50aGlzLl9vcHRpb25zXTtcbiAgICBvcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogeyAuLi50aGlzLl9pdGVtLCBvcHRpb25zIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm5ldyAmJiAhdGhpcy5faXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IChldi50YXJnZXQgYXMgYW55KS5jb25maWdWYWx1ZTtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAodGhpc1tgXyR7Y29uZmlnVmFsdWV9YF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1ZhbHVlID0geyAuLi50aGlzLl9pdGVtIH07XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgZGVsZXRlIG5ld1ZhbHVlW2NvbmZpZ1ZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWVbY29uZmlnVmFsdWVdID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pbnB1dF9zZWxlY3QtZm9ybVwiOiBIYUlucHV0U2VsZWN0Rm9ybTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2lucHV0X3RleHRcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWlucHV0X3RleHQtZm9ybVwiKVxuY2xhc3MgSGFJbnB1dFRleHRGb3JtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmV3PzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9pdGVtPzogSW5wdXRUZXh0O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25hbWUhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaWNvbiE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9tYXg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbWluPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX21vZGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGF0dGVybj86IHN0cmluZztcblxuICBzZXQgaXRlbShpdGVtOiBJbnB1dFRleHQpIHtcbiAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5fbmFtZSA9IGl0ZW0ubmFtZSB8fCBcIlwiO1xuICAgICAgdGhpcy5faWNvbiA9IGl0ZW0uaWNvbiB8fCBcIlwiO1xuICAgICAgdGhpcy5fbWF4ID0gaXRlbS5tYXggfHwgMTAwO1xuICAgICAgdGhpcy5fbWluID0gaXRlbS5taW4gfHwgMDtcbiAgICAgIHRoaXMuX21vZGUgPSBpdGVtLm1vZGUgfHwgXCJ0ZXh0XCI7XG4gICAgICB0aGlzLl9wYXR0ZXJuID0gaXRlbS5wYXR0ZXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uYW1lID0gXCJcIjtcbiAgICAgIHRoaXMuX2ljb24gPSBcIlwiO1xuICAgICAgdGhpcy5fbWF4ID0gMTAwO1xuICAgICAgdGhpcy5fbWluID0gMDtcbiAgICAgIHRoaXMuX21vZGUgPSBcInRleHRcIjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+XG4gICAgICAodGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIltkaWFsb2dJbml0aWFsRm9jdXNdXCJcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQpPy5mb2N1cygpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCBuYW1lSW52YWxpZCA9ICF0aGlzLl9uYW1lIHx8IHRoaXMuX25hbWUudHJpbSgpID09PSBcIlwiO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lfVxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wibmFtZVwifVxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLmRpYWxvZ3MuaGVscGVyX3NldHRpbmdzLmdlbmVyaWMubmFtZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICAuZXJyb3JNZXNzYWdlPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5yZXF1aXJlZF9lcnJvcl9tc2dcIlxuICAgICAgICAgICl9XCJcbiAgICAgICAgICAuaW52YWxpZD0ke25hbWVJbnZhbGlkfVxuICAgICAgICAgIGRpYWxvZ0luaXRpYWxGb2N1c1xuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPGhhLWljb24taW5wdXRcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl9pY29ufVxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wiaWNvblwifVxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLmRpYWxvZ3MuaGVscGVyX3NldHRpbmdzLmdlbmVyaWMuaWNvblwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPjwvaGEtaWNvbi1pbnB1dD5cbiAgICAgICAgJHt0aGlzLmhhc3MudXNlckRhdGE/LnNob3dBZHZhbmNlZFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fbWlufVxuICAgICAgICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wibWluXCJ9XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5pbnB1dF90ZXh0Lm1pblwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX21heH1cbiAgICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcIm1heFwifVxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MuaW5wdXRfdGV4dC5tYXhcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWwgY2VudGVyIGp1c3RpZmllZFwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5pbnB1dF90ZXh0Lm1vZGVcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl9tb2RlfVxuICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl9tb2RlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5oZWxwZXJfc2V0dGluZ3MuaW5wdXRfdGV4dC50ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmhlbHBlcl9zZXR0aW5ncy5pbnB1dF90ZXh0LnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9wYXR0ZXJufVxuICAgICAgICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wicGF0dGVyblwifVxuICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuaGVscGVyX3NldHRpbmdzLmlucHV0X3RleHQucGF0dGVyblwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX21vZGVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwge1xuICAgICAgdmFsdWU6IHsgLi4udGhpcy5faXRlbSwgbW9kZTogZXYuZGV0YWlsLnZhbHVlIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm5ldyAmJiAhdGhpcy5faXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IChldi50YXJnZXQgYXMgYW55KS5jb25maWdWYWx1ZTtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAodGhpc1tgXyR7Y29uZmlnVmFsdWV9YF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1ZhbHVlID0geyAuLi50aGlzLl9pdGVtIH07XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgZGVsZXRlIG5ld1ZhbHVlW2NvbmZpZ1ZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWVbY29uZmlnVmFsdWVdID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgfVxuICAgICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pbnB1dF90ZXh0LWZvcm1cIjogSGFJbnB1dFRleHRGb3JtO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFLQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUtBO0FBREE7QUFLQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDQSw2Z0JBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBSEE7QUFvQkE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUFBO0FBSUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7Ozs7OztBQUlBOzs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQW5CQTtBQXlCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVdBOzs7QUFoR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7Ozs7O0FBSUE7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUtBOzs7QUFHQTtBQUNBOzs7QUFHQTs7O0FBS0E7OztBQUtBOzs7O0FBekNBO0FBZ0RBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFEQTtBQU9BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7Ozs7O0FBRUE7QUFDQTs7Ozs7OztBQUFBO0FBV0E7OztBQTNJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7Ozs7Ozs7QUFJQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFHQTs7Ozs7O0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJQTs7QUFHQTs7QUFJQTtBQUNBOzs7QUFHQTs7O0FBS0E7Ozs7O0FBT0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBcENBOztBQXpDQTtBQXFGQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7Ozs7O0FBRUE7QUFDQTs7Ozs7OztBQUFBO0FBV0E7OztBQTFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7Ozs7Ozs7QUFJQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7OztBQUFBOzs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBR0E7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBR0E7Ozs7QUFSQTtBQWFBOztBQUdBOztBQUlBOzs7OztBQUtBO0FBR0E7O0FBRUE7QUFDQTs7OztBQTNEQTtBQWtFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQkE7OztBQTNMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7Ozs7Ozs7QUFJQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUlBOztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFLQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBS0E7O0FBSUE7QUFDQTs7O0FBR0E7OztBQUtBOzs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQWhEQTs7QUF2QkE7QUErRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFBQTtBQWNBOzs7QUE5S0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
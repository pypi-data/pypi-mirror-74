(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[51],{

/***/ "./src/common/dom/stop_propagation.ts":
/*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
/*! exports provided: stopPropagation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
const stopPropagation = ev => ev.stopPropagation();

/***/ }),

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");

const paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

class HaPaperDropdownClass extends paperDropdownClass {
  ready() {
    super.ready(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      if (window.getComputedStyle(this).direction === "rtl") {
        this.style.textAlign = "right";
      }
    }, 100);
  }

}
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

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

/***/ "./src/panels/lovelace/entity-rows/hui-input-select-entity-row.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-select-entity-row.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/stop_propagation */ "./src/common/dom/stop_propagation.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _data_input_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/input_select */ "./src/data/input_select.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/handle-action */ "./src/panels/lovelace/common/handle-action.ts");
/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/has-action */ "./src/panels/lovelace/common/has-action.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
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





















let HuiInputSelectEntityRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("hui-input-select-entity-row")], function (_initialize, _LitElement) {
  class HuiInputSelectEntityRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiInputSelectEntityRow,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config || !config.entity) {
          throw new Error("Invalid Configuration: 'entity' required");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_17__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``;
        }

        const stateObj = this.hass.states[this._config.entity];

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }

        const pointer = this._config.tap_action && this._config.tap_action.action !== "none" || this._config.entity && !_common_const__WEBPACK_IMPORTED_MODULE_5__["DOMAINS_HIDE_MORE_INFO"].includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_7__["computeDomain"])(this._config.entity));
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <state-badge
        .stateObj=${stateObj}
        .stateColor=${this._config.state_color}
        .overrideIcon=${this._config.icon}
        .overrideImage=${this._config.image}
        class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
          pointer
        })}
        @action=${this._handleAction}
        .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_14__["actionHandler"])({
          hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_16__["hasAction"])(this._config.hold_action),
          hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_16__["hasAction"])(this._config.double_tap_action)
        })}
        tabindex=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_4__["ifDefined"])(pointer ? "0" : undefined)}
      ></state-badge>
      <ha-paper-dropdown-menu
        .label=${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj)}
        .value=${stateObj.state}
        .disabled=${_data_entity__WEBPACK_IMPORTED_MODULE_11__["UNAVAILABLE_STATES"].includes(stateObj.state)}
        @iron-select=${this._selectedChanged}
        @click=${_common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_6__["stopPropagation"]}
      >
        <paper-listbox slot="dropdown-content">
          ${stateObj.attributes.options ? stateObj.attributes.options.map(option => lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]` <paper-item>${option}</paper-item> `) : ""}
        </paper-listbox>
      </ha-paper-dropdown-menu>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiInputSelectEntityRow.prototype), "updated", this).call(this, changedProps);

        if (!this.hass || !this._config) {
          return;
        }

        const stateObj = this.hass.states[this._config.entity];

        if (!stateObj) {
          return;
        } // Update selected after rendering the items or else it won't work in Firefox


        if (stateObj.attributes.options) {
          this.shadowRoot.querySelector("paper-listbox").selected = stateObj.attributes.options.indexOf(stateObj.state);
        }
      }
    }, {
      kind: "method",
      key: "_handleAction",
      value: function _handleAction(ev) {
        Object(_common_handle_action__WEBPACK_IMPORTED_MODULE_15__["handleAction"])(this, this.hass, this._config, ev.detail.action);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      :host {
        display: flex;
        align-items: center;
      }
      ha-paper-dropdown-menu {
        margin-left: 16px;
        flex: 1;
      }
      paper-item {
        cursor: pointer;
        min-width: 200px;
      }
      .pointer {
        cursor: pointer;
      }
      state-badge:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_selectedChanged",
      value: function _selectedChanged(ev) {
        const stateObj = this.hass.states[this._config.entity];
        const option = ev.target.selectedItem.innerText.trim();

        if (option === stateObj.state) {
          return;
        }

        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_12__["forwardHaptic"])("light");
        Object(_data_input_select__WEBPACK_IMPORTED_MODULE_13__["setInputSelectOption"])(this.hass, stateObj.entity_id, option);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zdG9wX3Byb3BhZ2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW5wdXRfc2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZW50aXR5LXJvd3MvaHVpLWlucHV0LXNlbGVjdC1lbnRpdHktcm93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdG9wUHJvcGFnYXRpb24gPSAoZXYpID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBwYXBlckRyb3Bkb3duQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXG4gIFwicGFwZXItZHJvcGRvd24tbWVudVwiXG4pIGFzIENvbnN0cnVjdG9yPFBvbHltZXJFbGVtZW50PjtcblxuLy8gcGF0Y2hlcyBwYXBlciBkcm9wIGRvd24gdG8gcHJvcGVybHkgc3VwcG9ydCBSVEwgLSBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWRyb3Bkb3duLW1lbnUvaXNzdWVzLzE4M1xuZXhwb3J0IGNsYXNzIEhhUGFwZXJEcm9wZG93bkNsYXNzIGV4dGVuZHMgcGFwZXJEcm9wZG93bkNsYXNzIHtcbiAgcHVibGljIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICB0aGlzLnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCI6IEhhUGFwZXJEcm9wZG93bkNsYXNzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIiwgSGFQYXBlckRyb3Bkb3duQ2xhc3MpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0U2VsZWN0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBvcHRpb25zOiBzdHJpbmdbXTtcbiAgaWNvbj86IHN0cmluZztcbiAgaW5pdGlhbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFNlbGVjdE11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgaW5pdGlhbDogc3RyaW5nO1xuICBvcHRpb25zOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldElucHV0U2VsZWN0T3B0aW9uID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHk6IHN0cmluZyxcbiAgb3B0aW9uOiBzdHJpbmdcbikgPT5cbiAgaGFzcy5jYWxsU2VydmljZShcImlucHV0X3NlbGVjdFwiLCBcInNlbGVjdF9vcHRpb25cIiwge1xuICAgIG9wdGlvbixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaElucHV0U2VsZWN0ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPElucHV0U2VsZWN0W10+KHsgdHlwZTogXCJpbnB1dF9zZWxlY3QvbGlzdFwiIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSW5wdXRTZWxlY3QgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogSW5wdXRTZWxlY3RNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPElucHV0U2VsZWN0Pih7XG4gICAgdHlwZTogXCJpbnB1dF9zZWxlY3QvY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUlucHV0U2VsZWN0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPElucHV0U2VsZWN0TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8SW5wdXRTZWxlY3Q+KHtcbiAgICB0eXBlOiBcImlucHV0X3NlbGVjdC91cGRhdGVcIixcbiAgICBpbnB1dF9zZWxlY3RfaWQ6IGlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlSW5wdXRTZWxlY3QgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiaW5wdXRfc2VsZWN0L2RlbGV0ZVwiLFxuICAgIGlucHV0X3NlbGVjdF9pZDogaWQsXG4gIH0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkXCI7XG5pbXBvcnQgeyBET01BSU5TX0hJREVfTU9SRV9JTkZPIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdFwiO1xuaW1wb3J0IHsgc3RvcFByb3BhZ2F0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vc3RvcF9wcm9wYWdhdGlvblwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBVTkFWQUlMQUJMRV9TVEFURVMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlcIjtcbmltcG9ydCB7IGZvcndhcmRIYXB0aWMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9oYXB0aWNzXCI7XG5pbXBvcnQgeyBzZXRJbnB1dFNlbGVjdE9wdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2lucHV0X3NlbGVjdFwiO1xuaW1wb3J0IHsgQWN0aW9uSGFuZGxlckV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIElucHV0U2VsZWN0RW50aXR5IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFbnRpdGllc0NhcmRFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vY2FyZHMvdHlwZXNcIjtcbmltcG9ydCB7IGFjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vY29tbW9uL2RpcmVjdGl2ZXMvYWN0aW9uLWhhbmRsZXItZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBoYW5kbGVBY3Rpb24gfSBmcm9tIFwiLi4vY29tbW9uL2hhbmRsZS1hY3Rpb25cIjtcbmltcG9ydCB7IGhhc0FjdGlvbiB9IGZyb20gXCIuLi9jb21tb24vaGFzLWFjdGlvblwiO1xuaW1wb3J0IHsgaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtY2hhbmdlZFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktd2FybmluZ1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VSb3cgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1pbnB1dC1zZWxlY3QtZW50aXR5LXJvd1wiKVxuY2xhc3MgSHVpSW5wdXRTZWxlY3RFbnRpdHlSb3cgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VSb3cge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogRW50aXRpZXNDYXJkRW50aXR5Q29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBFbnRpdGllc0NhcmRFbnRpdHlDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLmVudGl0eSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiAnZW50aXR5JyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkKHRoaXMsIGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1t0aGlzLl9jb25maWcuZW50aXR5XSBhc1xuICAgICAgfCBJbnB1dFNlbGVjdEVudGl0eVxuICAgICAgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGh1aS13YXJuaW5nXG4gICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS53YXJuaW5nLmVudGl0eV9ub3RfZm91bmRcIixcbiAgICAgICAgICAgIFwiZW50aXR5XCIsXG4gICAgICAgICAgICB0aGlzLl9jb25maWcuZW50aXR5XG4gICAgICAgICAgKX08L2h1aS13YXJuaW5nXG4gICAgICAgID5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRlciA9XG4gICAgICAodGhpcy5fY29uZmlnLnRhcF9hY3Rpb24gJiYgdGhpcy5fY29uZmlnLnRhcF9hY3Rpb24uYWN0aW9uICE9PSBcIm5vbmVcIikgfHxcbiAgICAgICh0aGlzLl9jb25maWcuZW50aXR5ICYmXG4gICAgICAgICFET01BSU5TX0hJREVfTU9SRV9JTkZPLmluY2x1ZGVzKGNvbXB1dGVEb21haW4odGhpcy5fY29uZmlnLmVudGl0eSkpKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAuc3RhdGVDb2xvcj0ke3RoaXMuX2NvbmZpZy5zdGF0ZV9jb2xvcn1cbiAgICAgICAgLm92ZXJyaWRlSWNvbj0ke3RoaXMuX2NvbmZpZy5pY29ufVxuICAgICAgICAub3ZlcnJpZGVJbWFnZT0ke3RoaXMuX2NvbmZpZy5pbWFnZX1cbiAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7XG4gICAgICAgICAgcG9pbnRlcixcbiAgICAgICAgfSl9XG4gICAgICAgIEBhY3Rpb249JHt0aGlzLl9oYW5kbGVBY3Rpb259XG4gICAgICAgIC5hY3Rpb25IYW5kbGVyPSR7YWN0aW9uSGFuZGxlcih7XG4gICAgICAgICAgaGFzSG9sZDogaGFzQWN0aW9uKHRoaXMuX2NvbmZpZyEuaG9sZF9hY3Rpb24pLFxuICAgICAgICAgIGhhc0RvdWJsZUNsaWNrOiBoYXNBY3Rpb24odGhpcy5fY29uZmlnIS5kb3VibGVfdGFwX2FjdGlvbiksXG4gICAgICAgIH0pfVxuICAgICAgICB0YWJpbmRleD0ke2lmRGVmaW5lZChwb2ludGVyID8gXCIwXCIgOiB1bmRlZmluZWQpfVxuICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAubGFiZWw9JHt0aGlzLl9jb25maWcubmFtZSB8fCBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKX1cbiAgICAgICAgLnZhbHVlPSR7c3RhdGVPYmouc3RhdGV9XG4gICAgICAgIC5kaXNhYmxlZD0ke1VOQVZBSUxBQkxFX1NUQVRFUy5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSl9XG4gICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX3NlbGVjdGVkQ2hhbmdlZH1cbiAgICAgICAgQGNsaWNrPSR7c3RvcFByb3BhZ2F0aW9ufVxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5vcHRpb25zXG4gICAgICAgICAgICA/IHN0YXRlT2JqLmF0dHJpYnV0ZXMub3B0aW9ucy5tYXAoXG4gICAgICAgICAgICAgICAgKG9wdGlvbikgPT4gaHRtbGAgPHBhcGVyLWl0ZW0+JHtvcHRpb259PC9wYXBlci1pdGVtPiBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1t0aGlzLl9jb25maWcuZW50aXR5XSBhc1xuICAgICAgfCBJbnB1dFNlbGVjdEVudGl0eVxuICAgICAgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHNlbGVjdGVkIGFmdGVyIHJlbmRlcmluZyB0aGUgaXRlbXMgb3IgZWxzZSBpdCB3b24ndCB3b3JrIGluIEZpcmVmb3hcbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwicGFwZXItbGlzdGJveFwiXG4gICAgICApIS5zZWxlY3RlZCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMub3B0aW9ucy5pbmRleE9mKHN0YXRlT2JqLnN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVBY3Rpb24oZXY6IEFjdGlvbkhhbmRsZXJFdmVudCkge1xuICAgIGhhbmRsZUFjdGlvbih0aGlzLCB0aGlzLmhhc3MhLCB0aGlzLl9jb25maWchLCBldi5kZXRhaWwuYWN0aW9uISk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgICAgLnBvaW50ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBzdGF0ZS1iYWRnZTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RlZENoYW5nZWQoZXYpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcyEuc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XTtcbiAgICBjb25zdCBvcHRpb24gPSBldi50YXJnZXQuc2VsZWN0ZWRJdGVtLmlubmVyVGV4dC50cmltKCk7XG4gICAgaWYgKG9wdGlvbiA9PT0gc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3J3YXJkSGFwdGljKFwibGlnaHRcIik7XG5cbiAgICBzZXRJbnB1dFNlbGVjdE9wdGlvbih0aGlzLmhhc3MhLCBzdGF0ZU9iai5lbnRpdHlfaWQsIG9wdGlvbik7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1pbnB1dC1zZWxlY3QtZW50aXR5LXJvd1wiOiBIdWlJbnB1dFNlbGVjdEVudGl0eVJvdztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFrQkE7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFLQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTs7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBeEJBO0FBZ0NBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0JBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBM0lBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
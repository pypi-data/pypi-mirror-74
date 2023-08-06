(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-alarm-panel-card-editor"],{

/***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
/*! exports provided: isEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityId", function() { return isEntityId; });
function isEntityId(value) {
  if (typeof value !== "string") {
    return "entity id should be a string";
  }

  if (!value.includes(".")) {
    return "entity id should be in the format 'domain.entity'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/lovelace/common/structs/is-icon.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
/*! exports provided: isIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIcon", function() { return isIcon; });
function isIcon(value) {
  if (typeof value !== "string") {
    return "icon should be a string";
  }

  if (!value.includes(":")) {
    return "icon should be in the format 'mdi:icon'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/lovelace/common/structs/struct.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
/*! exports provided: struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts");
/* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts");



const struct = Object(superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"])({
  types: {
    "entity-id": _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
    icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"]
  }
});

/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/config-elements-style.ts ***!
  \*****************************************************************************/
/*! exports provided: configElementStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configElementStyle", function() { return configElementStyle; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

const configElementStyle = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    ha-switch {
      padding: 16px 0;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`;

/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/hui-alarm-panel-card-editor.ts":
/*!***********************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-alarm-panel-card-editor.ts ***!
  \***********************************************************************************/
/*! exports provided: HuiAlarmPanelCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiAlarmPanelCardEditor", function() { return HuiAlarmPanelCardEditor; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");
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











const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_7__["struct"])({
  type: "string",
  entity: "string?",
  name: "string?",
  states: "array?",
  theme: "string?"
});
const includeDomains = ["alarm_control_panel"];
let HuiAlarmPanelCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("hui-alarm-panel-card-editor")], function (_initialize, _LitElement) {
  class HuiAlarmPanelCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiAlarmPanelCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        config = cardConfigStruct(config);
        this._config = config;
      }
    }, {
      kind: "get",
      key: "_entity",
      value: function _entity() {
        return this._config.entity || "";
      }
    }, {
      kind: "get",
      key: "_name",
      value: function _name() {
        return this._config.name || "";
      }
    }, {
      kind: "get",
      key: "_states",
      value: function _states() {
        return this._config.states || [];
      }
    }, {
      kind: "get",
      key: "_theme",
      value: function _theme() {
        return this._config.theme || "";
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]``;
        }

        const states = ["arm_home", "arm_away", "arm_night", "arm_custom_bypass"];
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_9__["configElementStyle"]}
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .hass=${this.hass}
          .value="${this._entity}"
          .configValue=${"entity"}
          .includeDomains=${includeDomains}
          @change="${this._valueChanged}"
          allow-custom-entity
        ></ha-entity-picker>
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value="${this._name}"
          .configValue="${"name"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <span>Used States</span> ${this._states.map((state, index) => {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
            <div class="states">
              <paper-item>${state}</paper-item>
              <ha-icon
                class="deleteState"
                .value="${index}"
                icon="hass:close"
                @click=${this._stateRemoved}
              ></ha-icon>
            </div>
          `;
        })}
        <paper-dropdown-menu
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.alarm-panel.available_states")}"
          @value-changed="${this._stateAdded}"
        >
          <paper-listbox slot="dropdown-content">
            ${states.map(state => {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]` <paper-item>${state}</paper-item> `;
        })}
          </paper-listbox>
        </paper-dropdown-menu>
        <hui-theme-select-editor
          .hass=${this.hass}
          .value="${this._theme}"
          .configValue="${"theme"}"
          @value-changed="${this._valueChanged}"
        ></hui-theme-select-editor>
      </div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
      .states {
        display: flex;
        flex-direction: row;
      }
      .deleteState {
        visibility: hidden;
      }
      .states:hover > .deleteState {
        visibility: visible;
      }
      ha-icon {
        padding-top: 12px;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_stateRemoved",
      value: function _stateRemoved(ev) {
        if (!this._config || !this._states || !this.hass) {
          return;
        }

        const target = ev.target;
        const index = Number(target.value);

        if (index > -1) {
          const newStates = [...this._states];
          newStates.splice(index, 1);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "config-changed", {
            config: Object.assign({}, this._config, {
              states: newStates
            })
          });
        }
      }
    }, {
      kind: "method",
      key: "_stateAdded",
      value: function _stateAdded(ev) {
        if (!this._config || !this.hass) {
          return;
        }

        const target = ev.target;

        if (!target.value || this._states.indexOf(target.value) !== -1) {
          return;
        }

        const newStates = [...this._states];
        newStates.push(target.value);
        target.value = "";
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "config-changed", {
          config: Object.assign({}, this._config, {
            states: newStates
          })
        });
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this._config || !this.hass) {
          return;
        }

        const target = ev.target;

        if (this[`_${target.configValue}`] === target.value) {
          return;
        }

        if (target.configValue) {
          if (target.value === "") {
            delete this._config[target.configValue];
          } else {
            this._config = Object.assign({}, this._config, {
              [target.configValue]: target.value
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWFsYXJtLXBhbmVsLWNhcmQtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1lbnRpdHktaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvc3RydWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9jb25maWctZWxlbWVudHMtc3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1hbGFybS1wYW5lbC1jYXJkLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNFbnRpdHlJZCh2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ2RvbWFpbi5lbnRpdHknXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJY29uKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdtZGk6aWNvbidcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IHN1cGVyc3RydWN0IH0gZnJvbSBcInN1cGVyc3RydWN0XCI7XG5pbXBvcnQgeyBpc0VudGl0eUlkIH0gZnJvbSBcIi4vaXMtZW50aXR5LWlkXCI7XG5pbXBvcnQgeyBpc0ljb24gfSBmcm9tIFwiLi9pcy1pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3QgPSBzdXBlcnN0cnVjdCh7XG4gIHR5cGVzOiB7XG4gICAgXCJlbnRpdHktaWRcIjogaXNFbnRpdHlJZCxcbiAgICBpY29uOiBpc0ljb24sXG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ0VsZW1lbnRTdHlsZSA9IGh0bWxgXG4gIDxzdHlsZT5cbiAgICBoYS1zd2l0Y2gge1xuICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cbiAgICAuc2lkZS1ieS1zaWRlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zaWRlLWJ5LXNpZGUgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5zdWZmaXgge1xuICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICB9XG4gIDwvc3R5bGU+XG5gO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEFsYXJtUGFuZWxDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NhcmRzL3R5cGVzXCI7XG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVkaXRvclRhcmdldCwgRW50aXRpZXNFZGl0b3JFdmVudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29uZmlnRWxlbWVudFN0eWxlIH0gZnJvbSBcIi4vY29uZmlnLWVsZW1lbnRzLXN0eWxlXCI7XG5cbmNvbnN0IGNhcmRDb25maWdTdHJ1Y3QgPSBzdHJ1Y3Qoe1xuICB0eXBlOiBcInN0cmluZ1wiLFxuICBlbnRpdHk6IFwic3RyaW5nP1wiLFxuICBuYW1lOiBcInN0cmluZz9cIixcbiAgc3RhdGVzOiBcImFycmF5P1wiLFxuICB0aGVtZTogXCJzdHJpbmc/XCIsXG59KTtcblxuY29uc3QgaW5jbHVkZURvbWFpbnMgPSBbXCJhbGFybV9jb250cm9sX3BhbmVsXCJdO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1hbGFybS1wYW5lbC1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUFsYXJtUGFuZWxDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIExvdmVsYWNlQ2FyZEVkaXRvciB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBBbGFybVBhbmVsQ2FyZENvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogQWxhcm1QYW5lbENhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgZ2V0IF9lbnRpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5lbnRpdHkgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLm5hbWUgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfc3RhdGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5zdGF0ZXMgfHwgW107XG4gIH1cblxuICBnZXQgX3RoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEudGhlbWUgfHwgXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVzID0gW1wiYXJtX2hvbWVcIiwgXCJhcm1fYXdheVwiLCBcImFybV9uaWdodFwiLCBcImFybV9jdXN0b21fYnlwYXNzXCJdO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmVudGl0eVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcucmVxdWlyZWRcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9lbnRpdHl9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImVudGl0eVwifVxuICAgICAgICAgIC5pbmNsdWRlRG9tYWlucz0ke2luY2x1ZGVEb21haW5zfVxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMubmFtZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9uYW1lfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcIm5hbWVcIn1cIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxzcGFuPlVzZWQgU3RhdGVzPC9zcGFuPiAke3RoaXMuX3N0YXRlcy5tYXAoKHN0YXRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlc1wiPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke3N0YXRlfTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGV0ZVN0YXRlXCJcbiAgICAgICAgICAgICAgICAudmFsdWU9XCIke2luZGV4fVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3N0YXRlUmVtb3ZlZH1cbiAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGA7XG4gICAgICAgIH0pfVxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5hbGFybS1wYW5lbC5hdmFpbGFibGVfc3RhdGVzXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3N0YXRlQWRkZWR9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAke3N0YXRlcy5tYXAoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYCA8cGFwZXItaXRlbT4ke3N0YXRlfTwvcGFwZXItaXRlbT4gYDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICA8aHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3RoZW1lfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRoZW1lXCJ9XCJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgID48L2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5zdGF0ZXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuICAgICAgLmRlbGV0ZVN0YXRlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLnN0YXRlczpob3ZlciA+IC5kZWxldGVTdGF0ZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9XG4gICAgICBoYS1pY29uIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlUmVtb3ZlZChldjogRW50aXRpZXNFZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLl9zdGF0ZXMgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlcyA9IFsuLi50aGlzLl9zdGF0ZXNdO1xuICAgICAgbmV3U3RhdGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7XG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgICBzdGF0ZXM6IG5ld1N0YXRlcyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlQWRkZWQoZXY6IEVudGl0aWVzRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0LnZhbHVlIHx8IHRoaXMuX3N0YXRlcy5pbmRleE9mKHRhcmdldC52YWx1ZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1N0YXRlcyA9IFsuLi50aGlzLl9zdGF0ZXNdO1xuICAgIG5ld1N0YXRlcy5wdXNoKHRhcmdldC52YWx1ZSk7XG4gICAgdGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICBzdGF0ZXM6IG5ld1N0YXRlcyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEVudGl0aWVzRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGlmICh0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWdbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIFt0YXJnZXQuY29uZmlnVmFsdWUhXTogdGFyZ2V0LnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktYWxhcm0tcGFuZWwtY2FyZC1lZGl0b3JcIjogSHVpQWxhcm1QYW5lbENhcmRFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUdBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQVBBO0FBV0E7O0FBRUE7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQXZEQTtBQTJEQTtBQTdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0dBOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBZUE7QUEvR0E7QUFBQTtBQUFBO0FBQUE7QUFrSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQWxJQTtBQUFBO0FBQUE7QUFBQTtBQXFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFNQTtBQXJKQTtBQUFBO0FBQUE7QUFBQTtBQXdKQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUExS0E7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
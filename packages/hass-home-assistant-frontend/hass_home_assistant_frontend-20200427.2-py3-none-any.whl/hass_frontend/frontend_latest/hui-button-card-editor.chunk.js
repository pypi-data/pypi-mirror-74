(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-button-card-editor"],{

/***/ "./src/panels/lovelace/editor/config-elements/hui-button-card-editor.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-button-card-editor.ts ***!
  \******************************************************************************/
/*! exports provided: HuiButtonCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiButtonCardEditor", function() { return HuiButtonCardEditor; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _components_ha_icon_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-icon-input */ "./src/components/ha-icon-input.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hui-action-editor */ "./src/panels/lovelace/components/hui-action-editor.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/lovelace/components/hui-entity-editor.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types */ "./src/panels/lovelace/editor/types.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");
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













const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_5__["struct"])({
  type: "string",
  entity: "string?",
  name: "string?",
  show_name: "boolean?",
  icon: "string?",
  show_icon: "boolean?",
  icon_height: "string?",
  tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_9__["actionConfigStruct"]),
  hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_9__["actionConfigStruct"]),
  theme: "string?"
});
let HuiButtonCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-button-card-editor")], function (_initialize, _LitElement) {
  class HuiButtonCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiButtonCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
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
      key: "_show_name",
      value: function _show_name() {
        return this._config.show_name || true;
      }
    }, {
      kind: "get",
      key: "_icon",
      value: function _icon() {
        return this._config.icon || "";
      }
    }, {
      kind: "get",
      key: "_show_icon",
      value: function _show_icon() {
        return this._config.show_icon || true;
      }
    }, {
      kind: "get",
      key: "_icon_height",
      value: function _icon_height() {
        return this._config.icon_height && this._config.icon_height.includes("px") ? String(parseFloat(this._config.icon_height)) : "";
      }
    }, {
      kind: "get",
      key: "_tap_action",
      value: function _tap_action() {
        return this._config.tap_action || {
          action: "more-info"
        };
      }
    }, {
      kind: "get",
      key: "_hold_action",
      value: function _hold_action() {
        return this._config.hold_action || {
          action: "none"
        };
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
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        const actions = ["more-info", "toggle", "navigate", "url", "call-service", "none"];
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_11__["configElementStyle"]}
      <div class="card-config">
        <ha-entity-picker
        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .hass=${this.hass}
          .value="${this._entity}"
          .configValue=${"entity"}
          @change="${this._valueChanged}"
          allow-custom-entity
        ></ha-entity-picker>
        <div class="side-by-side">
          <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._name}"
            .configValue="${"name"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <ha-icon-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value=${this._icon}
            .placeholder=${this._icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__["stateIcon"])(this.hass.states[this._entity])}
            .configValue=${"icon"}
            @value-changed=${this._valueChanged}
          ></ha-icon-input>
        </div>
        <div class="side-by-side">
          <ha-switch
            .checked="${this._config.show_name !== false}"
            .configValue="${"show_name"}"
            @change="${this._valueChanged}"
            >${this.hass.localize("ui.panel.lovelace.editor.card.generic.show_name")}</ha-switch
          >
          <ha-switch
            .checked="${this._config.show_icon !== false}"
            .configValue="${"show_icon"}"
            @change="${this._valueChanged}"
            >${this.hass.localize("ui.panel.lovelace.editor.card.generic.show_icon")}</ha-switch
          >
        </div>
        <div class="side-by-side">
          <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon_height")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._icon_height}"
            .configValue="${"icon_height"}"
            @value-changed="${this._valueChanged}"
            type="number"
          ><div class="suffix" slot="suffix">px</div>
          </paper-input>
          <hui-theme-select-editor
            .hass=${this.hass}
            .value="${this._theme}"
            .configValue="${"theme"}"
            @value-changed="${this._valueChanged}"
          ></hui-theme-select-editor>
        </paper-input>

        </div>
        <div class="side-by-side">
          <hui-action-editor
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config="${this._tap_action}"
            .actions="${actions}"
            .configValue="${"tap_action"}"
            @action-changed="${this._valueChanged}"
          ></hui-action-editor>
          <hui-action-editor
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config="${this._hold_action}"
            .actions="${actions}"
            .configValue="${"hold_action"}"
            @action-changed="${this._valueChanged}"
          ></hui-action-editor>
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this._config || !this.hass) {
          return;
        }

        const target = ev.target;

        if (this[`_${target.configValue}`] === target.value || this[`_${target.configValue}`] === target.config) {
          return;
        }

        if (target.configValue) {
          if (target.value === "") {
            delete this._config[target.configValue];
          } else {
            let newValue;

            if (target.configValue === "icon_height" && !isNaN(Number(target.value))) {
              newValue = `${String(target.value)}px`;
            }

            this._config = Object.assign({}, this._config, {
              [target.configValue]: target.checked !== undefined ? target.checked : newValue !== undefined ? newValue : target.value ? target.value : target.config
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWJ1dHRvbi1jYXJkLWVkaXRvci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktYnV0dG9uLWNhcmQtZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgc3RhdGVJY29uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uLWlucHV0XCI7XG5pbXBvcnQgeyBBY3Rpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQnV0dG9uQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuaW1wb3J0IHsgc3RydWN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktYWN0aW9uLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktZW50aXR5LWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktdGhlbWUtc2VsZWN0LWVkaXRvclwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBhY3Rpb25Db25maWdTdHJ1Y3QsXG4gIEVkaXRvclRhcmdldCxcbiAgRW50aXRpZXNFZGl0b3JFdmVudCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuaW1wb3J0IHsgY29uZmlnRWxlbWVudFN0eWxlIH0gZnJvbSBcIi4vY29uZmlnLWVsZW1lbnRzLXN0eWxlXCI7XG5cbmNvbnN0IGNhcmRDb25maWdTdHJ1Y3QgPSBzdHJ1Y3Qoe1xuICB0eXBlOiBcInN0cmluZ1wiLFxuICBlbnRpdHk6IFwic3RyaW5nP1wiLFxuICBuYW1lOiBcInN0cmluZz9cIixcbiAgc2hvd19uYW1lOiBcImJvb2xlYW4/XCIsXG4gIGljb246IFwic3RyaW5nP1wiLFxuICBzaG93X2ljb246IFwiYm9vbGVhbj9cIixcbiAgaWNvbl9oZWlnaHQ6IFwic3RyaW5nP1wiLFxuICB0YXBfYWN0aW9uOiBzdHJ1Y3Qub3B0aW9uYWwoYWN0aW9uQ29uZmlnU3RydWN0KSxcbiAgaG9sZF9hY3Rpb246IHN0cnVjdC5vcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3QpLFxuICB0aGVtZTogXCJzdHJpbmc/XCIsXG59KTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktYnV0dG9uLWNhcmQtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpQnV0dG9uQ2FyZEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnRcbiAgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogQnV0dG9uQ2FyZENvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogQnV0dG9uQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIGNvbmZpZyA9IGNhcmRDb25maWdTdHJ1Y3QoY29uZmlnKTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBnZXQgX2VudGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmVudGl0eSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9uYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEubmFtZSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9zaG93X25hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuc2hvd19uYW1lIHx8IHRydWU7XG4gIH1cblxuICBnZXQgX2ljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5pY29uIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX3Nob3dfaWNvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5zaG93X2ljb24gfHwgdHJ1ZTtcbiAgfVxuXG4gIGdldCBfaWNvbl9oZWlnaHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5pY29uX2hlaWdodCAmJiB0aGlzLl9jb25maWchLmljb25faGVpZ2h0LmluY2x1ZGVzKFwicHhcIilcbiAgICAgID8gU3RyaW5nKHBhcnNlRmxvYXQodGhpcy5fY29uZmlnIS5pY29uX2hlaWdodCkpXG4gICAgICA6IFwiXCI7XG4gIH1cblxuICBnZXQgX3RhcF9hY3Rpb24oKTogQWN0aW9uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50YXBfYWN0aW9uIHx8IHsgYWN0aW9uOiBcIm1vcmUtaW5mb1wiIH07XG4gIH1cblxuICBnZXQgX2hvbGRfYWN0aW9uKCk6IEFjdGlvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaG9sZF9hY3Rpb24gfHwgeyBhY3Rpb246IFwibm9uZVwiIH07XG4gIH1cblxuICBnZXQgX3RoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEudGhlbWUgfHwgXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIFwibW9yZS1pbmZvXCIsXG4gICAgICBcInRvZ2dsZVwiLFxuICAgICAgXCJuYXZpZ2F0ZVwiLFxuICAgICAgXCJ1cmxcIixcbiAgICAgIFwiY2FsbC1zZXJ2aWNlXCIsXG4gICAgICBcIm5vbmVcIixcbiAgICBdO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuZW50aXR5XCJcbiAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICl9KVwiXG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9lbnRpdHl9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImVudGl0eVwifVxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLm5hbWVcIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICApfSlcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9uYW1lfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wibmFtZVwifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPGhhLWljb24taW5wdXRcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuaWNvblwiXG4gICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgKX0pXCJcbiAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX2ljb259XG4gICAgICAgICAgICAucGxhY2Vob2xkZXI9JHtcbiAgICAgICAgICAgICAgdGhpcy5faWNvbiB8fCBzdGF0ZUljb24odGhpcy5oYXNzLnN0YXRlc1t0aGlzLl9lbnRpdHldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJpY29uXCJ9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9oYS1pY29uLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiPlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgIC5jaGVja2VkPVwiJHt0aGlzLl9jb25maWchLnNob3dfbmFtZSAhPT0gZmFsc2V9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJzaG93X25hbWVcIn1cIlxuICAgICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5zaG93X25hbWVcIlxuICAgICAgICAgICAgKX08L2hhLXN3aXRjaFxuICAgICAgICAgID5cbiAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAuY2hlY2tlZD1cIiR7dGhpcy5fY29uZmlnIS5zaG93X2ljb24gIT09IGZhbHNlfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wic2hvd19pY29uXCJ9XCJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuc2hvd19pY29uXCJcbiAgICAgICAgICAgICl9PC9oYS1zd2l0Y2hcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuaWNvbl9oZWlnaHRcIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICApfSlcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9pY29uX2hlaWdodH1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImljb25faGVpZ2h0XCJ9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgID48ZGl2IGNsYXNzPVwic3VmZml4XCIgc2xvdD1cInN1ZmZpeFwiPnB4PC9kaXY+XG4gICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8aHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcbiAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl90aGVtZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRoZW1lXCJ9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktdGhlbWUtc2VsZWN0LWVkaXRvcj5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiPlxuICAgICAgICAgIDxodWktYWN0aW9uLWVkaXRvclxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnRhcF9hY3Rpb25cIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICApfSlcIlxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl90YXBfYWN0aW9ufVwiXG4gICAgICAgICAgICAuYWN0aW9ucz1cIiR7YWN0aW9uc31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRhcF9hY3Rpb25cIn1cIlxuICAgICAgICAgICAgQGFjdGlvbi1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktYWN0aW9uLWVkaXRvcj5cbiAgICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5ob2xkX2FjdGlvblwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICl9KVwiXG4gICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgIC5jb25maWc9XCIke3RoaXMuX2hvbGRfYWN0aW9ufVwiXG4gICAgICAgICAgICAuYWN0aW9ucz1cIiR7YWN0aW9uc31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImhvbGRfYWN0aW9uXCJ9XCJcbiAgICAgICAgICAgIEBhY3Rpb24tY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLWFjdGlvbi1lZGl0b3I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRW50aXRpZXNFZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSB8fFxuICAgICAgdGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQuY29uZmlnXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY29uZmlnVmFsdWUpIHtcbiAgICAgIGlmICh0YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbmZpZ1t0YXJnZXQuY29uZmlnVmFsdWUhXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGFyZ2V0LmNvbmZpZ1ZhbHVlID09PSBcImljb25faGVpZ2h0XCIgJiZcbiAgICAgICAgICAhaXNOYU4oTnVtYmVyKHRhcmdldC52YWx1ZSkpXG4gICAgICAgICkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gYCR7U3RyaW5nKHRhcmdldC52YWx1ZSl9cHhgO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgICAgW3RhcmdldC5jb25maWdWYWx1ZSFdOlxuICAgICAgICAgICAgdGFyZ2V0LmNoZWNrZWQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IHRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgIDogbmV3VmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IG5ld1ZhbHVlXG4gICAgICAgICAgICAgIDogdGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgID8gdGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIDogdGFyZ2V0LmNvbmZpZyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IHRoaXMuX2NvbmZpZyB9KTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWJ1dHRvbi1jYXJkLWVkaXRvclwiOiBIdWlCdXR0b25DYXJkRWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBY0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFvQkE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFHQTtBQW5DQTtBQUFBO0FBQUE7QUFBQTtBQXNDQTtBQUFBO0FBQUE7QUFDQTtBQXZDQTtBQUFBO0FBQUE7QUFBQTtBQTBDQTtBQUFBO0FBQUE7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUFBQTtBQThDQTtBQUNBO0FBL0NBO0FBQUE7QUFBQTtBQUFBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUtBO0FBRUE7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFPQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBdkdBO0FBNEdBO0FBM0tBO0FBQUE7QUFBQTtBQUFBO0FBOEtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWxOQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
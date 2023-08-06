(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-picture-glance-card-editor"],{

/***/ "./src/panels/lovelace/editor/config-elements/hui-picture-glance-card-editor.ts":
/*!**************************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-picture-glance-card-editor.ts ***!
  \**************************************************************************************/
/*! exports provided: HuiPictureGlanceCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPictureGlanceCardEditor", function() { return HuiPictureGlanceCardEditor; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hui-action-editor */ "./src/panels/lovelace/components/hui-action-editor.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/lovelace/components/hui-entity-editor.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _process_editor_entities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../process-editor-entities */ "./src/panels/lovelace/editor/process-editor-entities.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../types */ "./src/panels/lovelace/editor/types.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");
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
  title: "string?",
  entity: "string?",
  image: "string?",
  camera_image: "string?",
  camera_view: "string?",
  aspect_ratio: "string?",
  tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_7__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_12__["actionConfigStruct"]),
  hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_7__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_12__["actionConfigStruct"]),
  entities: [_types__WEBPACK_IMPORTED_MODULE_12__["entitiesConfigStruct"]],
  theme: "string?"
});
const includeDomains = ["camera"];
let HuiPictureGlanceCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("hui-picture-glance-card-editor")], function (_initialize, _LitElement) {
  class HuiPictureGlanceCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiPictureGlanceCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_configEntities",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        config = cardConfigStruct(config);
        this._config = config;
        this._configEntities = Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_11__["processEditorEntities"])(config.entities);
      }
    }, {
      kind: "get",
      key: "_entity",
      value: function _entity() {
        return this._config.entity || "";
      }
    }, {
      kind: "get",
      key: "_title",
      value: function _title() {
        return this._config.title || "";
      }
    }, {
      kind: "get",
      key: "_image",
      value: function _image() {
        return this._config.image || this._camera_image ? "" : "https://www.home-assistant.io/images/merchandise/shirt-frontpage.png";
      }
    }, {
      kind: "get",
      key: "_camera_image",
      value: function _camera_image() {
        return this._config.camera_image || "";
      }
    }, {
      kind: "get",
      key: "_camera_view",
      value: function _camera_view() {
        return this._config.camera_view || "auto";
      }
    }, {
      kind: "get",
      key: "_state_image",
      value: function _state_image() {
        return this._config.state_image || {};
      }
    }, {
      kind: "get",
      key: "_aspect_ratio",
      value: function _aspect_ratio() {
        return this._config.aspect_ratio || "";
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
          action: "more-info"
        };
      }
    }, {
      kind: "get",
      key: "_show_name",
      value: function _show_name() {
        return this._config.show_name || false;
      }
    }, {
      kind: "get",
      key: "_show_state",
      value: function _show_state() {
        return this._config.show_state || false;
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
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]``;
        }

        const actions = ["more-info", "toggle", "navigate", "call-service", "none"];
        const views = ["auto", "live"];
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_13__["configElementStyle"]}
      <div class="card-config">
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.title")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value="${this._title}"
          .configValue="${"title"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.image")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value="${this._image}"
          .configValue="${"image"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.camera_image")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .hass=${this.hass}
          .value="${this._camera_image}"
          .configValue=${"camera_image"}
          @change="${this._valueChanged}"
          allow-custom-entity
          .includeDomains=${includeDomains}
        ></ha-entity-picker>
        <div class="side-by-side">
          <paper-dropdown-menu
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.camera_view")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .configValue="${"camera_view"}"
            @value-changed="${this._valueChanged}"
          >
            <paper-listbox
              slot="dropdown-content"
              .selected="${views.indexOf(this._camera_view)}"
            >
              ${views.map(view => {
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]` <paper-item>${view}</paper-item> `;
        })}
            </paper-listbox>
          </paper-dropdown-menu>
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.aspect_ratio")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            type="number"
            .value="${Number(this._aspect_ratio.replace("%", ""))}"
            .configValue="${"aspect_ratio"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .hass=${this.hass}
          .value="${this._entity}"
          .configValue=${"entity"}
          @change="${this._valueChanged}"
          allow-custom-entity
        ></ha-entity-picker>
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
        <hui-entity-editor
          .hass=${this.hass}
          .entities="${this._configEntities}"
          @entities-changed="${this._valueChanged}"
        ></hui-entity-editor>
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
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this._config || !this.hass) {
          return;
        }

        const target = ev.target;
        let value = target.value;

        if (target.configValue === "aspect_ratio" && target.value) {
          value += "%";
        }

        if (ev.detail && ev.detail.entities) {
          this._config.entities = ev.detail.entities;
          this._configEntities = Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_11__["processEditorEntities"])(this._config.entities);
        } else if (target.configValue) {
          if (this[`_${target.configValue}`] === value || this[`_${target.configValue}`] === target.config) {
            return;
          }

          if (value === "") {
            delete this._config[target.configValue];
          } else {
            this._config = Object.assign({}, this._config, {
              [target.configValue]: value || target.config
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXBpY3R1cmUtZ2xhbmNlLWNhcmQtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1waWN0dXJlLWdsYW5jZS1jYXJkLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCB7IEFjdGlvbkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQaWN0dXJlR2xhbmNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuaW1wb3J0IHsgc3RydWN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktYWN0aW9uLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktZW50aXR5LWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktdGhlbWUtc2VsZWN0LWVkaXRvclwiO1xuaW1wb3J0IHsgRW50aXR5Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2VudGl0eS1yb3dzL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHByb2Nlc3NFZGl0b3JFbnRpdGllcyB9IGZyb20gXCIuLi9wcm9jZXNzLWVkaXRvci1lbnRpdGllc1wiO1xuaW1wb3J0IHtcbiAgYWN0aW9uQ29uZmlnU3RydWN0LFxuICBFZGl0b3JUYXJnZXQsXG4gIGVudGl0aWVzQ29uZmlnU3RydWN0LFxuICBFbnRpdGllc0VkaXRvckV2ZW50LFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuL2NvbmZpZy1lbGVtZW50cy1zdHlsZVwiO1xuXG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgdGl0bGU6IFwic3RyaW5nP1wiLFxuICBlbnRpdHk6IFwic3RyaW5nP1wiLFxuICBpbWFnZTogXCJzdHJpbmc/XCIsXG4gIGNhbWVyYV9pbWFnZTogXCJzdHJpbmc/XCIsXG4gIGNhbWVyYV92aWV3OiBcInN0cmluZz9cIixcbiAgYXNwZWN0X3JhdGlvOiBcInN0cmluZz9cIixcbiAgdGFwX2FjdGlvbjogc3RydWN0Lm9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gIGhvbGRfYWN0aW9uOiBzdHJ1Y3Qub3B0aW9uYWwoYWN0aW9uQ29uZmlnU3RydWN0KSxcbiAgZW50aXRpZXM6IFtlbnRpdGllc0NvbmZpZ1N0cnVjdF0sXG4gIHRoZW1lOiBcInN0cmluZz9cIixcbn0pO1xuXG5jb25zdCBpbmNsdWRlRG9tYWlucyA9IFtcImNhbWVyYVwiXTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktcGljdHVyZS1nbGFuY2UtY2FyZC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlQaWN0dXJlR2xhbmNlQ2FyZEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnRcbiAgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogUGljdHVyZUdsYW5jZUNhcmRDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnRW50aXRpZXM/OiBFbnRpdHlDb25maWdbXTtcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogUGljdHVyZUdsYW5jZUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2NvbmZpZ0VudGl0aWVzID0gcHJvY2Vzc0VkaXRvckVudGl0aWVzKGNvbmZpZy5lbnRpdGllcyk7XG4gIH1cblxuICBnZXQgX2VudGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmVudGl0eSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF90aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRpdGxlIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2ltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaW1hZ2UgfHwgdGhpcy5fY2FtZXJhX2ltYWdlXG4gICAgICA/IFwiXCJcbiAgICAgIDogXCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9pbWFnZXMvbWVyY2hhbmRpc2Uvc2hpcnQtZnJvbnRwYWdlLnBuZ1wiO1xuICB9XG5cbiAgZ2V0IF9jYW1lcmFfaW1hZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5jYW1lcmFfaW1hZ2UgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfY2FtZXJhX3ZpZXcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5jYW1lcmFfdmlldyB8fCBcImF1dG9cIjtcbiAgfVxuXG4gIGdldCBfc3RhdGVfaW1hZ2UoKToge30ge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnN0YXRlX2ltYWdlIHx8IHt9O1xuICB9XG5cbiAgZ2V0IF9hc3BlY3RfcmF0aW8oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5hc3BlY3RfcmF0aW8gfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdGFwX2FjdGlvbigpOiBBY3Rpb25Db25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRhcF9hY3Rpb24gfHwgeyBhY3Rpb246IFwibW9yZS1pbmZvXCIgfTtcbiAgfVxuXG4gIGdldCBfaG9sZF9hY3Rpb24oKTogQWN0aW9uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5ob2xkX2FjdGlvbiB8fCB7IGFjdGlvbjogXCJtb3JlLWluZm9cIiB9O1xuICB9XG5cbiAgZ2V0IF9zaG93X25hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuc2hvd19uYW1lIHx8IGZhbHNlO1xuICB9XG5cbiAgZ2V0IF9zaG93X3N0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnNob3dfc3RhdGUgfHwgZmFsc2U7XG4gIH1cblxuICBnZXQgX3RoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEudGhlbWUgfHwgXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IFtcIm1vcmUtaW5mb1wiLCBcInRvZ2dsZVwiLCBcIm5hdmlnYXRlXCIsIFwiY2FsbC1zZXJ2aWNlXCIsIFwibm9uZVwiXTtcbiAgICBjb25zdCB2aWV3cyA9IFtcImF1dG9cIiwgXCJsaXZlXCJdO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy50aXRsZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl90aXRsZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0aXRsZVwifVwiXG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuaW1hZ2VcIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5faW1hZ2V9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaW1hZ2VcIn1cIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuY2FtZXJhX2ltYWdlXCJcbiAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2NhbWVyYV9pbWFnZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wiY2FtZXJhX2ltYWdlXCJ9XG4gICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgYWxsb3ctY3VzdG9tLWVudGl0eVxuICAgICAgICAgIC5pbmNsdWRlRG9tYWlucz0ke2luY2x1ZGVEb21haW5zfVxuICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuY2FtZXJhX3ZpZXdcIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImNhbWVyYV92aWV3XCJ9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIC5zZWxlY3RlZD1cIiR7dmlld3MuaW5kZXhPZih0aGlzLl9jYW1lcmFfdmlldyl9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHt2aWV3cy5tYXAoKHZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGAgPHBhcGVyLWl0ZW0+JHt2aWV3fTwvcGFwZXItaXRlbT4gYDtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5hc3BlY3RfcmF0aW9cIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAudmFsdWU9XCIke051bWJlcih0aGlzLl9hc3BlY3RfcmF0aW8ucmVwbGFjZShcIiVcIiwgXCJcIikpfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiYXNwZWN0X3JhdGlvXCJ9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuZW50aXR5XCJcbiAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2VudGl0eX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wiZW50aXR5XCJ9XG4gICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgYWxsb3ctY3VzdG9tLWVudGl0eVxuICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPGh1aS1hY3Rpb24tZWRpdG9yXG4gICAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnRhcF9hY3Rpb25cIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl90YXBfYWN0aW9ufVwiXG4gICAgICAgICAgICAuYWN0aW9ucz1cIiR7YWN0aW9uc31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRhcF9hY3Rpb25cIn1cIlxuICAgICAgICAgICAgQGFjdGlvbi1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktYWN0aW9uLWVkaXRvcj5cbiAgICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuaG9sZF9hY3Rpb25cIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl9ob2xkX2FjdGlvbn1cIlxuICAgICAgICAgICAgLmFjdGlvbnM9XCIke2FjdGlvbnN9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJob2xkX2FjdGlvblwifVwiXG4gICAgICAgICAgICBAYWN0aW9uLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L2h1aS1hY3Rpb24tZWRpdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGh1aS1lbnRpdHktZWRpdG9yXG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLmVudGl0aWVzPVwiJHt0aGlzLl9jb25maWdFbnRpdGllc31cIlxuICAgICAgICAgIEBlbnRpdGllcy1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvaHVpLWVudGl0eS1lZGl0b3I+XG4gICAgICAgIDxodWktdGhlbWUtc2VsZWN0LWVkaXRvclxuICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fdGhlbWV9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1widGhlbWVcIn1cIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3I+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlISA9PT0gXCJhc3BlY3RfcmF0aW9cIiAmJiB0YXJnZXQudmFsdWUpIHtcbiAgICAgIHZhbHVlICs9IFwiJVwiO1xuICAgIH1cblxuICAgIGlmIChldi5kZXRhaWwgJiYgZXYuZGV0YWlsLmVudGl0aWVzKSB7XG4gICAgICB0aGlzLl9jb25maWcuZW50aXRpZXMgPSBldi5kZXRhaWwuZW50aXRpZXM7XG4gICAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NFZGl0b3JFbnRpdGllcyh0aGlzLl9jb25maWcuZW50aXRpZXMpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdmFsdWUgfHxcbiAgICAgICAgdGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQuY29uZmlnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbmZpZ1t0YXJnZXQuY29uZmlnVmFsdWUhXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgICAgW3RhcmdldC5jb25maWdWYWx1ZSFdOiB2YWx1ZSB8fCB0YXJnZXQuY29uZmlnLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktcGljdHVyZS1nbGFuY2UtY2FyZC1lZGl0b3JcIjogSHVpUGljdHVyZUdsYW5jZUNhcmRFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBR0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0FBR0E7QUExQkE7QUFBQTtBQUFBO0FBQUE7QUE2QkE7QUFDQTtBQTlCQTtBQUFBO0FBQUE7QUFBQTtBQWlDQTtBQUNBO0FBbENBO0FBQUE7QUFBQTtBQUFBO0FBcUNBO0FBQ0E7QUF0Q0E7QUFBQTtBQUFBO0FBQUE7QUF5Q0E7QUFDQTtBQTFDQTtBQUFBO0FBQUE7QUFBQTtBQTZDQTtBQUFBO0FBQUE7QUFDQTtBQTlDQTtBQUFBO0FBQUE7QUFBQTtBQWlEQTtBQUFBO0FBQUE7QUFDQTtBQWxEQTtBQUFBO0FBQUE7QUFBQTtBQXFEQTtBQUNBO0FBdERBO0FBQUE7QUFBQTtBQUFBO0FBeURBO0FBQ0E7QUExREE7QUFBQTtBQUFBO0FBQUE7QUE2REE7QUFDQTtBQTlEQTtBQUFBO0FBQUE7QUFBQTtBQWlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUtBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBbEhBO0FBc0hBO0FBOUxBO0FBQUE7QUFBQTtBQUFBO0FBaU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFoT0E7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
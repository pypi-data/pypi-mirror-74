(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-conditional-card-editor"],{

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

/***/ "./src/panels/lovelace/editor/config-elements/hui-conditional-card-editor.ts":
/*!***********************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-conditional-card-editor.ts ***!
  \***********************************************************************************/
/*! exports provided: HuiConditionalCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiConditionalCardEditor", function() { return HuiConditionalCardEditor; });
/* harmony import */ var _polymer_paper_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _card_editor_hui_card_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card-editor/hui-card-picker */ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts");
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









const conditionStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_6__["struct"])({
  entity: "string",
  state: "string?",
  state_not: "string?"
});
const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_6__["struct"])({
  type: "string",
  card: "any",
  conditions: _common_structs_struct__WEBPACK_IMPORTED_MODULE_6__["struct"].optional([conditionStruct])
});
let HuiConditionalCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("hui-conditional-card-editor")], function (_initialize, _LitElement) {
  class HuiConditionalCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiConditionalCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_GUImode",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_guiModeAvailable",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_cardTab",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["query"])("hui-card-editor")],
      key: "_cardEditorEl",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        this._config = cardConfigStruct(config);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <paper-tabs
        .selected=${this._cardTab ? "1" : "0"}
        @iron-select=${this._selectTab}
      >
        <paper-tab
          >${this.hass.localize("ui.panel.lovelace.editor.card.conditional.conditions")}</paper-tab
        >
        <paper-tab
          >${this.hass.localize("ui.panel.lovelace.editor.card.conditional.card")}</paper-tab
        >
      </paper-tabs>
      ${this._cardTab ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
            <div class="card">
              ${this._config.card.type !== undefined ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                    <div class="card-options">
                      <mwc-button
                        @click=${this._toggleMode}
                        .disabled=${!this._guiModeAvailable}
                        class="gui-mode-button"
                      >
                        ${this.hass.localize(!this._cardEditorEl || this._GUImode ? "ui.panel.lovelace.editor.edit_card.show_code_editor" : "ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                      </mwc-button>
                      <mwc-button @click=${this._handleReplaceCard}
                        >${this.hass.localize("ui.panel.lovelace.editor.card.conditional.change_type")}</mwc-button
                      >
                    </div>
                    <hui-card-editor
                      .hass=${this.hass}
                      .value=${this._config.card}
                      .lovelace=${this.lovelace}
                      @config-changed=${this._handleCardChanged}
                      @GUImode-changed=${this._handleGUIModeChanged}
                    ></hui-card-editor>
                  ` : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                    <hui-card-picker
                      .hass=${this.hass}
                      .lovelace=${this.lovelace}
                      @config-changed=${this._handleCardPicked}
                    ></hui-card-picker>
                  `}
            </div>
          ` : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
            <div class="conditions">
              ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.condition_explanation")}
              ${this._config.conditions.map((cond, idx) => {
          var _this$hass;

          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                  <div class="condition">
                    <div class="entity">
                      <ha-entity-picker
                        .hass=${this.hass}
                        .value=${cond.entity}
                        .index=${idx}
                        .configValue=${"entity"}
                        @change=${this._changeCondition}
                        allow-custom-entity
                      ></ha-entity-picker>
                    </div>
                    <div class="state">
                      <paper-dropdown-menu>
                        <paper-listbox
                          .selected=${cond.state_not !== undefined ? 1 : 0}
                          slot="dropdown-content"
                          .index=${idx}
                          .configValue=${"invert"}
                          @selected-item-changed=${this._changeCondition}
                        >
                          <paper-item
                            >${this.hass.localize("ui.panel.lovelace.editor.card.conditional.state_equal")}</paper-item
                          >
                          <paper-item
                            >${this.hass.localize("ui.panel.lovelace.editor.card.conditional.state_not_equal")}</paper-item
                          >
                        </paper-listbox>
                      </paper-dropdown-menu>
                      <paper-input
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.state")} (${this.hass.localize("ui.panel.lovelace.editor.card.conditional.current_state")}: '${(_this$hass = this.hass) === null || _this$hass === void 0 ? void 0 : _this$hass.states[cond.entity].state}')"
                        .value=${cond.state_not !== undefined ? cond.state_not : cond.state}
                        .index=${idx}
                        .configValue=${"state"}
                        @value-changed=${this._changeCondition}
                      ></paper-input>
                    </div>
                  </div>
                `;
        })}
              <div class="condition">
                <ha-entity-picker
                  .hass=${this.hass}
                  @change=${this._addCondition}
                ></ha-entity-picker>
              </div>
            </div>
          `}
    `;
      }
    }, {
      kind: "method",
      key: "_selectTab",
      value: function _selectTab(ev) {
        this._cardTab = parseInt(ev.target.selected, 10) === 1;
      }
    }, {
      kind: "method",
      key: "_toggleMode",
      value: function _toggleMode() {
        var _this$_cardEditorEl;

        (_this$_cardEditorEl = this._cardEditorEl) === null || _this$_cardEditorEl === void 0 ? void 0 : _this$_cardEditorEl.toggleMode();
      }
    }, {
      kind: "method",
      key: "_setMode",
      value: function _setMode(value) {
        this._GUImode = value;

        if (this._cardEditorEl) {
          this._cardEditorEl.GUImode = value;
        }
      }
    }, {
      kind: "method",
      key: "_handleGUIModeChanged",
      value: function _handleGUIModeChanged(ev) {
        ev.stopPropagation();
        this._GUImode = ev.detail.guiMode;
        this._guiModeAvailable = ev.detail.guiModeAvailable;
      }
    }, {
      kind: "method",
      key: "_handleCardPicked",
      value: function _handleCardPicked(ev) {
        ev.stopPropagation();

        if (!this._config) {
          return;
        }

        this._setMode(true);

        this._guiModeAvailable = true;
        this._config.card = ev.detail.config;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "method",
      key: "_handleCardChanged",
      value: function _handleCardChanged(ev) {
        ev.stopPropagation();

        if (!this._config) {
          return;
        }

        this._config.card = ev.detail.config;
        this._guiModeAvailable = ev.detail.guiModeAvailable;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "method",
      key: "_handleReplaceCard",
      value: function _handleReplaceCard() {
        if (!this._config) {
          return;
        } // @ts-ignore


        this._config.card = {};
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "method",
      key: "_addCondition",
      value: function _addCondition(ev) {
        const target = ev.target;

        if (target.value === "" || !this._config) {
          return;
        }

        this._config.conditions.push({
          entity: target.value,
          state: ""
        });

        target.value = "";
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "method",
      key: "_changeCondition",
      value: function _changeCondition(ev) {
        const target = ev.target;

        if (!this._config || !target) {
          return;
        }

        if (target.configValue === "entity" && target.value === "") {
          this._config.conditions.splice(target.index, 1);
        } else {
          const condition = this._config.conditions[target.index];

          if (target.configValue === "entity") {
            condition.entity = target.value;
          } else if (target.configValue === "state") {
            if (condition.state_not !== undefined) {
              condition.state_not = target.value;
            } else {
              condition.state = target.value;
            }
          } else if (target.configValue === "invert") {
            if (target.selected === 1) {
              if (condition.state) {
                condition.state_not = condition.state;
                delete condition.state;
              }
            } else if (condition.state_not) {
              condition.state = condition.state_not;
              delete condition.state_not;
            }
          }

          this._config.conditions[target.index] = condition;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      paper-tabs {
        --paper-tabs-selection-bar-color: var(--primary-color);
        --paper-tab-ink: var(--primary-color);
        border-bottom: 1px solid var(--divider-color);
      }
      .conditions {
        margin-top: 8px;
      }
      .condition {
        margin-top: 8px;
        border: 1px solid var(--divider-color);
        padding: 12px;
      }
      .condition .state {
        display: flex;
        align-items: flex-end;
      }
      .condition .state paper-dropdown-menu {
        margin-right: 16px;
      }
      .condition .state paper-input {
        flex-grow: 1;
      }

      .card {
        margin-top: 8px;
        border: 1px solid var(--divider-color);
        padding: 12px;
      }
      @media (max-width: 450px) {
        .card,
        .condition {
          margin: 8px -12px 0;
        }
      }
      .card .card-options {
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }
      .gui-mode-button {
        margin-right: auto;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWNvbmRpdGlvbmFsLWNhcmQtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1lbnRpdHktaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvc3RydWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktY29uZGl0aW9uYWwtY2FyZC1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRW50aXR5SWQodmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCIuXCIpKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdkb21haW4uZW50aXR5J1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzSWNvbih2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnbWRpOmljb24nXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBzdXBlcnN0cnVjdCB9IGZyb20gXCJzdXBlcnN0cnVjdFwiO1xuaW1wb3J0IHsgaXNFbnRpdHlJZCB9IGZyb20gXCIuL2lzLWVudGl0eS1pZFwiO1xuaW1wb3J0IHsgaXNJY29uIH0gZnJvbSBcIi4vaXMtaWNvblwiO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0ID0gc3VwZXJzdHJ1Y3Qoe1xuICB0eXBlczoge1xuICAgIFwiZW50aXR5LWlkXCI6IGlzRW50aXR5SWQsXG4gICAgaWNvbjogaXNJY29uLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYlwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29uZGl0aW9uYWxDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NhcmRzL3R5cGVzXCI7XG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENvbmZpZ0NoYW5nZWRFdmVudCxcbiAgSHVpQ2FyZEVkaXRvcixcbn0gZnJvbSBcIi4uL2NhcmQtZWRpdG9yL2h1aS1jYXJkLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vY2FyZC1lZGl0b3IvaHVpLWNhcmQtcGlja2VyXCI7XG5pbXBvcnQgeyBHVUlNb2RlQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGNvbmRpdGlvblN0cnVjdCA9IHN0cnVjdCh7XG4gIGVudGl0eTogXCJzdHJpbmdcIixcbiAgc3RhdGU6IFwic3RyaW5nP1wiLFxuICBzdGF0ZV9ub3Q6IFwic3RyaW5nP1wiLFxufSk7XG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgY2FyZDogXCJhbnlcIixcbiAgY29uZGl0aW9uczogc3RydWN0Lm9wdGlvbmFsKFtjb25kaXRpb25TdHJ1Y3RdKSxcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jb25kaXRpb25hbC1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUNvbmRpdGlvbmFsQ2FyZEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnRcbiAgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2VDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogQ29uZGl0aW9uYWxDYXJkQ29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX0dVSW1vZGUgPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2d1aU1vZGVBdmFpbGFibGU/ID0gdHJ1ZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jYXJkVGFiID0gZmFsc2U7XG5cbiAgQHF1ZXJ5KFwiaHVpLWNhcmQtZWRpdG9yXCIpIHByaXZhdGUgX2NhcmRFZGl0b3JFbD86IEh1aUNhcmRFZGl0b3I7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IENvbmRpdGlvbmFsQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNhcmRDb25maWdTdHJ1Y3QoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItdGFic1xuICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl9jYXJkVGFiID8gXCIxXCIgOiBcIjBcIn1cbiAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fc2VsZWN0VGFifVxuICAgICAgPlxuICAgICAgICA8cGFwZXItdGFiXG4gICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZGl0aW9uYWwuY29uZGl0aW9uc1wiXG4gICAgICAgICAgKX08L3BhcGVyLXRhYlxuICAgICAgICA+XG4gICAgICAgIDxwYXBlci10YWJcbiAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25kaXRpb25hbC5jYXJkXCJcbiAgICAgICAgICApfTwvcGFwZXItdGFiXG4gICAgICAgID5cbiAgICAgIDwvcGFwZXItdGFicz5cbiAgICAgICR7dGhpcy5fY2FyZFRhYlxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAke3RoaXMuX2NvbmZpZy5jYXJkLnR5cGUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90b2dnbGVNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IXRoaXMuX2d1aU1vZGVBdmFpbGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImd1aS1tb2RlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fY2FyZEVkaXRvckVsIHx8IHRoaXMuX0dVSW1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5zaG93X2NvZGVfZWRpdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5zaG93X3Zpc3VhbF9lZGl0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5faGFuZGxlUmVwbGFjZUNhcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmRpdGlvbmFsLmNoYW5nZV90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGh1aS1jYXJkLWVkaXRvclxuICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX2NvbmZpZy5jYXJkfVxuICAgICAgICAgICAgICAgICAgICAgIC5sb3ZlbGFjZT0ke3RoaXMubG92ZWxhY2V9XG4gICAgICAgICAgICAgICAgICAgICAgQGNvbmZpZy1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlQ2FyZENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgQEdVSW1vZGUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUdVSU1vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICA+PC9odWktY2FyZC1lZGl0b3I+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8aHVpLWNhcmQtcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgLmxvdmVsYWNlPSR7dGhpcy5sb3ZlbGFjZX1cbiAgICAgICAgICAgICAgICAgICAgICBAY29uZmlnLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVDYXJkUGlja2VkfVxuICAgICAgICAgICAgICAgICAgICA+PC9odWktY2FyZC1waWNrZXI+XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZGl0aW9uc1wiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25kaXRpb25hbC5jb25kaXRpb25fZXhwbGFuYXRpb25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAke3RoaXMuX2NvbmZpZy5jb25kaXRpb25zLm1hcCgoY29uZCwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZGl0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtjb25kLmVudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleD0ke2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wiZW50aXR5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fY2hhbmdlQ29uZGl0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3ctY3VzdG9tLWVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke2NvbmQuc3RhdGVfbm90ICE9PSB1bmRlZmluZWQgPyAxIDogMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXg9JHtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wiaW52ZXJ0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1pdGVtLWNoYW5nZWQ9JHt0aGlzLl9jaGFuZ2VDb25kaXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZGl0aW9uYWwuc3RhdGVfZXF1YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25kaXRpb25hbC5zdGF0ZV9ub3RfZXF1YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5zdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmRpdGlvbmFsLmN1cnJlbnRfc3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX06ICcke3RoaXMuaGFzcz8uc3RhdGVzW2NvbmQuZW50aXR5XS5zdGF0ZX0nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtjb25kLnN0YXRlX25vdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gY29uZC5zdGF0ZV9ub3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb25kLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4PSR7aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJzdGF0ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9jaGFuZ2VDb25kaXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25kaXRpb25cIj5cbiAgICAgICAgICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fYWRkQ29uZGl0aW9ufVxuICAgICAgICAgICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0VGFiKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2NhcmRUYWIgPSBwYXJzZUludCgoZXYudGFyZ2V0ISBhcyBhbnkpLnNlbGVjdGVkISwgMTApID09PSAxO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlTW9kZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYXJkRWRpdG9yRWw/LnRvZ2dsZU1vZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9HVUltb2RlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2NhcmRFZGl0b3JFbCkge1xuICAgICAgdGhpcy5fY2FyZEVkaXRvckVsIS5HVUltb2RlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlR1VJTW9kZUNoYW5nZWQoZXY6IEhBU1NEb21FdmVudDxHVUlNb2RlQ2hhbmdlZEV2ZW50Pik6IHZvaWQge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX0dVSW1vZGUgPSBldi5kZXRhaWwuZ3VpTW9kZTtcbiAgICB0aGlzLl9ndWlNb2RlQXZhaWxhYmxlID0gZXYuZGV0YWlsLmd1aU1vZGVBdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDYXJkUGlja2VkKGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NldE1vZGUodHJ1ZSk7XG4gICAgdGhpcy5fZ3VpTW9kZUF2YWlsYWJsZSA9IHRydWU7XG4gICAgdGhpcy5fY29uZmlnLmNhcmQgPSBldi5kZXRhaWwuY29uZmlnO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDYXJkQ2hhbmdlZChldjogSEFTU0RvbUV2ZW50PENvbmZpZ0NoYW5nZWRFdmVudD4pOiB2b2lkIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcuY2FyZCA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgdGhpcy5fZ3VpTW9kZUF2YWlsYWJsZSA9IGV2LmRldGFpbC5ndWlNb2RlQXZhaWxhYmxlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXBsYWNlQ2FyZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5fY29uZmlnLmNhcmQgPSB7fTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkQ29uZGl0aW9uKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgYW55O1xuICAgIGlmICh0YXJnZXQudmFsdWUgPT09IFwiXCIgfHwgIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcuY29uZGl0aW9ucy5wdXNoKHtcbiAgICAgIGVudGl0eTogdGFyZ2V0LnZhbHVlLFxuICAgICAgc3RhdGU6IFwiXCIsXG4gICAgfSk7XG4gICAgdGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlQ29uZGl0aW9uKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBhbnk7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlID09PSBcImVudGl0eVwiICYmIHRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgdGhpcy5fY29uZmlnLmNvbmRpdGlvbnMuc3BsaWNlKHRhcmdldC5pbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuX2NvbmZpZy5jb25kaXRpb25zW3RhcmdldC5pbmRleF07XG4gICAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlID09PSBcImVudGl0eVwiKSB7XG4gICAgICAgIGNvbmRpdGlvbi5lbnRpdHkgPSB0YXJnZXQudmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5jb25maWdWYWx1ZSA9PT0gXCJzdGF0ZVwiKSB7XG4gICAgICAgIGlmIChjb25kaXRpb24uc3RhdGVfbm90ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25kaXRpb24uc3RhdGVfbm90ID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbmRpdGlvbi5zdGF0ZSA9IHRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY29uZmlnVmFsdWUgPT09IFwiaW52ZXJ0XCIpIHtcbiAgICAgICAgaWYgKHRhcmdldC5zZWxlY3RlZCA9PT0gMSkge1xuICAgICAgICAgIGlmIChjb25kaXRpb24uc3RhdGUpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbi5zdGF0ZV9ub3QgPSBjb25kaXRpb24uc3RhdGU7XG4gICAgICAgICAgICBkZWxldGUgY29uZGl0aW9uLnN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb25kaXRpb24uc3RhdGVfbm90KSB7XG4gICAgICAgICAgY29uZGl0aW9uLnN0YXRlID0gY29uZGl0aW9uLnN0YXRlX25vdDtcbiAgICAgICAgICBkZWxldGUgY29uZGl0aW9uLnN0YXRlX25vdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fY29uZmlnLmNvbmRpdGlvbnNbdGFyZ2V0LmluZGV4XSA9IGNvbmRpdGlvbjtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IHRoaXMuX2NvbmZpZyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLXRhYnMge1xuICAgICAgICAtLXBhcGVyLXRhYnMtc2VsZWN0aW9uLWJhci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIC0tcGFwZXItdGFiLWluazogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5jb25kaXRpb25zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuICAgICAgLmNvbmRpdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICB9XG4gICAgICAuY29uZGl0aW9uIC5zdGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICAgIC5jb25kaXRpb24gLnN0YXRlIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICB9XG4gICAgICAuY29uZGl0aW9uIC5zdGF0ZSBwYXBlci1pbnB1dCB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIC5jYXJkLFxuICAgICAgICAuY29uZGl0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDhweCAtMTJweCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY2FyZCAuY2FyZC1vcHRpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuZ3VpLW1vZGUtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jb25kaXRpb25hbC1jYXJkLWVkaXRvclwiOiBIdWlDb25kaXRpb25hbENhcmRFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBSUE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBS0E7OztBQUtBOztBQUdBOzs7QUFJQTtBQUNBOzs7QUFHQTs7QUFNQTtBQUNBOzs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF6QkE7O0FBOEJBO0FBQ0E7QUFDQTs7QUFFQTs7QUFyQ0E7O0FBMENBO0FBR0E7QUFBQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBS0E7Ozs7O0FBT0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTs7OztBQTVDQTtBQWlEQTs7O0FBR0E7QUFDQTs7OztBQUlBO0FBdkhBO0FBeUhBO0FBbEpBO0FBQUE7QUFBQTtBQUFBO0FBcUpBO0FBQ0E7QUF0SkE7QUFBQTtBQUFBO0FBQUE7QUF3SkE7QUFDQTtBQUFBO0FBQ0E7QUExSkE7QUFBQTtBQUFBO0FBQUE7QUE2SkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBaktBO0FBQUE7QUFBQTtBQUFBO0FBb0tBO0FBQ0E7QUFDQTtBQUNBO0FBdktBO0FBQUE7QUFBQTtBQUFBO0FBMEtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFsTEE7QUFBQTtBQUFBO0FBQUE7QUFxTEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBNUxBO0FBQUE7QUFBQTtBQUFBO0FBK0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBck1BO0FBQUE7QUFBQTtBQUFBO0FBd01BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBbE5BO0FBQUE7QUFBQTtBQUFBO0FBcU5BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFuUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNQQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZDQTtBQW5TQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
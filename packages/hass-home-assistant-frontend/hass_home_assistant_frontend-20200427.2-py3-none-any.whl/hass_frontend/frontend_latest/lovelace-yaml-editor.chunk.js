(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["lovelace-yaml-editor"],{

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

/***/ "./src/panels/lovelace/hui-editor.ts":
/*!*******************************************!*\
  !*** ./src/panels/lovelace/hui-editor.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
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
















const lovelaceStruct = _common_structs_struct__WEBPACK_IMPORTED_MODULE_14__["struct"].interface({
  title: "string?",
  views: ["object"]
});

let LovelaceFullConfigEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["customElement"])("hui-editor")], function (_initialize, _LitElement) {
  class LovelaceFullConfigEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: LovelaceFullConfigEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "closeEditor",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_saving",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_changed",
      value: void 0
    }, {
      kind: "field",
      key: "_generation",

      value() {
        return 1;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <app-header-layout>
        <app-header>
          <app-toolbar>
            <paper-icon-button
              icon="hass:close"
              @click="${this._closeEditor}"
            ></paper-icon-button>
            <div main-title>
              ${this.hass.localize("ui.panel.lovelace.editor.raw_editor.header")}
            </div>
            <div
              class="save-button
              ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_8__["classMap"])({
          saved: this._saving === false || this._changed === true
        })}"
            >
              ${this._changed ? this.hass.localize("ui.panel.lovelace.editor.raw_editor.unsaved_changes") : this.hass.localize("ui.panel.lovelace.editor.raw_editor.saved")}
            </div>
            <mwc-button
              raised
              @click="${this._handleSave}"
              .disabled=${!this._changed}
              >${this.hass.localize("ui.panel.lovelace.editor.raw_editor.save")}</mwc-button
            >
          </app-toolbar>
        </app-header>
        <div class="content">
          <ha-code-editor
            mode="yaml"
            autofocus
            .rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__["computeRTL"])(this.hass)}
            .hass=${this.hass}
            @value-changed="${this._yamlChanged}"
            @editor-save="${this._handleSave}"
          >
          </ha-code-editor>
        </div>
      </app-header-layout>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this.yamlEditor.value = Object(js_yaml__WEBPACK_IMPORTED_MODULE_6__["safeDump"])(this.lovelace.config);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_13__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_7__["css"]`
        :host {
          --code-mirror-height: 100%;
        }

        app-header-layout {
          height: 100vh;
        }

        app-toolbar {
          background-color: var(--dark-background-color, #455a64);
          color: var(--dark-text-color);
        }

        mwc-button[disabled] {
          background-color: var(--mdc-theme-on-primary);
          border-radius: 4px;
        }

        .comments {
          font-size: 16px;
        }

        .content {
          height: calc(100vh - 68px);
        }

        hui-code-editor {
          height: 100%;
        }

        .save-button {
          opacity: 0;
          font-size: 14px;
          padding: 0px 10px;
        }

        .saved {
          opacity: 1;
        }
      `];
      }
    }, {
      kind: "method",
      key: "_yamlChanged",
      value: function _yamlChanged() {
        this._changed = !this.yamlEditor.codemirror.getDoc().isClean(this._generation);

        if (this._changed && !window.onbeforeunload) {
          window.onbeforeunload = () => {
            return true;
          };
        } else if (!this._changed && window.onbeforeunload) {
          window.onbeforeunload = null;
        }
      }
    }, {
      kind: "method",
      key: "_closeEditor",
      value: async function _closeEditor() {
        if (this._changed && !(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__["showConfirmationDialog"])(this, {
          text: this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_changes"),
          dismissText: this.hass.localize("ui.common.no"),
          confirmText: this.hass.localize("ui.common.yes")
        }))) {
          return;
        }

        window.onbeforeunload = null;

        if (this.closeEditor) {
          this.closeEditor();
        }
      }
    }, {
      kind: "method",
      key: "_removeConfig",
      value: async function _removeConfig() {
        try {
          await this.lovelace.deleteConfig();
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__["showAlertDialog"])(this, {
            text: this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_remove", "error", err)
          });
        }

        window.onbeforeunload = null;

        if (this.closeEditor) {
          this.closeEditor();
        }
      }
    }, {
      kind: "method",
      key: "_handleSave",
      value: async function _handleSave() {
        this._saving = true;
        const value = this.yamlEditor.value;

        if (!value) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__["showConfirmationDialog"])(this, {
            title: this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_remove_config_title"),
            text: this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_remove_config_text"),
            confirmText: this.hass.localize("ui.common.yes"),
            dismissText: this.hass.localize("ui.common.no"),
            confirm: () => this._removeConfig()
          });
          return;
        }

        if (this.yamlEditor.hasComments) {
          if (!confirm(this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_comments"))) {
            return;
          }
        }

        let config;

        try {
          config = Object(js_yaml__WEBPACK_IMPORTED_MODULE_6__["safeLoad"])(value);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__["showAlertDialog"])(this, {
            text: this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_parse_yaml", "error", err)
          });
          this._saving = false;
          return;
        }

        try {
          config = lovelaceStruct(config);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__["showAlertDialog"])(this, {
            text: this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_invalid_config", "error", err)
          });
          return;
        } // @ts-ignore


        if (config.resources) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__["showAlertDialog"])(this, {
            text: this.hass.localize("ui.panel.lovelace.editor.raw_editor.resources_moved")
          });
        }

        try {
          await this.lovelace.saveConfig(config);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_12__["showAlertDialog"])(this, {
            text: this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_save_yaml", "error", err)
          });
        }

        this._generation = this.yamlEditor.codemirror.getDoc().changeGeneration(true);
        window.onbeforeunload = null;
        this._saving = false;
        this._changed = false;
      }
    }, {
      kind: "get",
      key: "yamlEditor",
      value: function yamlEditor() {
        return this.shadowRoot.querySelector("ha-code-editor");
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG92ZWxhY2UteWFtbC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9odWktZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBzYWZlRHVtcCwgc2FmZUxvYWQgfSBmcm9tIFwianMteWFtbFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuaW1wb3J0IHR5cGUgeyBIYUNvZGVFZGl0b3IgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5pbXBvcnQgdHlwZSB7IExvdmVsYWNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7XG4gIHNob3dBbGVydERpYWxvZyxcbiAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyxcbn0gZnJvbSBcIi4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCB0eXBlIHsgTG92ZWxhY2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBsb3ZlbGFjZVN0cnVjdCA9IHN0cnVjdC5pbnRlcmZhY2Uoe1xuICB0aXRsZTogXCJzdHJpbmc/XCIsXG4gIHZpZXdzOiBbXCJvYmplY3RcIl0sXG59KTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktZWRpdG9yXCIpXG5jbGFzcyBMb3ZlbGFjZUZ1bGxDb25maWdFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsb3ZlbGFjZT86IExvdmVsYWNlO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjbG9zZUVkaXRvcj86ICgpID0+IHZvaWQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2F2aW5nPzogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jaGFuZ2VkPzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9nZW5lcmF0aW9uID0gMTtcblxuICBwdWJsaWMgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgICAgIDxhcHAtaGVhZGVyPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fY2xvc2VFZGl0b3J9XCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IucmF3X2VkaXRvci5oZWFkZXJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwic2F2ZS1idXR0b25cbiAgICAgICAgICAgICAgJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgICAgc2F2ZWQ6IHRoaXMuX3NhdmluZyEgPT09IGZhbHNlIHx8IHRoaXMuX2NoYW5nZWQgPT09IHRydWUsXG4gICAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dGhpcy5fY2hhbmdlZFxuICAgICAgICAgICAgICAgID8gdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IucmF3X2VkaXRvci51bnNhdmVkX2NoYW5nZXNcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IucmF3X2VkaXRvci5zYXZlZFwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVTYXZlfVwiXG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0keyF0aGlzLl9jaGFuZ2VkfVxuICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3Iuc2F2ZVwiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgICAgbW9kZT1cInlhbWxcIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAucnRsPSR7Y29tcHV0ZVJUTCh0aGlzLmhhc3MpfVxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5feWFtbENoYW5nZWR9XCJcbiAgICAgICAgICAgIEBlZGl0b3Itc2F2ZT1cIiR7dGhpcy5faGFuZGxlU2F2ZX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2hhLWNvZGUtZWRpdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy55YW1sRWRpdG9yLnZhbHVlID0gc2FmZUR1bXAodGhpcy5sb3ZlbGFjZSEuY29uZmlnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC0tY29kZS1taXJyb3ItaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwLWhlYWRlci1sYXlvdXQge1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yLCAjNDU1YTY0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG13Yy1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tcHJpbWFyeSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW1lbnRzIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjhweCk7XG4gICAgICAgIH1cblxuICAgICAgICBodWktY29kZS1lZGl0b3Ige1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zYXZlLWJ1dHRvbiB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgX3lhbWxDaGFuZ2VkKCkge1xuICAgIHRoaXMuX2NoYW5nZWQgPSAhdGhpcy55YW1sRWRpdG9yXG4gICAgICAuY29kZW1pcnJvciEuZ2V0RG9jKClcbiAgICAgIC5pc0NsZWFuKHRoaXMuX2dlbmVyYXRpb24pO1xuICAgIGlmICh0aGlzLl9jaGFuZ2VkICYmICF3aW5kb3cub25iZWZvcmV1bmxvYWQpIHtcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NoYW5nZWQgJiYgd2luZG93Lm9uYmVmb3JldW5sb2FkKSB7XG4gICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2Nsb3NlRWRpdG9yKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuX2NoYW5nZWQgJiZcbiAgICAgICEoYXdhaXQgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5yYXdfZWRpdG9yLmNvbmZpcm1fdW5zYXZlZF9jaGFuZ2VzXCJcbiAgICAgICAgKSxcbiAgICAgICAgZGlzbWlzc1RleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24ubm9cIiksXG4gICAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnllc1wiKSxcbiAgICAgIH0pKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG4gICAgaWYgKHRoaXMuY2xvc2VFZGl0b3IpIHtcbiAgICAgIHRoaXMuY2xvc2VFZGl0b3IoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW1vdmVDb25maWcoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMubG92ZWxhY2UhLmRlbGV0ZUNvbmZpZygpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2hvd0FsZXJ0RGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IuZXJyb3JfcmVtb3ZlXCIsXG4gICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgIGVyclxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG4gICAgaWYgKHRoaXMuY2xvc2VFZGl0b3IpIHtcbiAgICAgIHRoaXMuY2xvc2VFZGl0b3IoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVTYXZlKCkge1xuICAgIHRoaXMuX3NhdmluZyA9IHRydWU7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMueWFtbEVkaXRvci52YWx1ZTtcblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IuY29uZmlybV9yZW1vdmVfY29uZmlnX3RpdGxlXCJcbiAgICAgICAgKSxcbiAgICAgICAgdGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IuY29uZmlybV9yZW1vdmVfY29uZmlnX3RleHRcIlxuICAgICAgICApLFxuICAgICAgICBjb25maXJtVGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY29tbW9uLnllc1wiKSxcbiAgICAgICAgZGlzbWlzc1RleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbW1vbi5ub1wiKSxcbiAgICAgICAgY29uZmlybTogKCkgPT4gdGhpcy5fcmVtb3ZlQ29uZmlnKCksXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy55YW1sRWRpdG9yLmhhc0NvbW1lbnRzKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjb25maXJtKFxuICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IuY29uZmlybV91bnNhdmVkX2NvbW1lbnRzXCJcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNvbmZpZzogTG92ZWxhY2VDb25maWc7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmZpZyA9IHNhZmVMb2FkKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5yYXdfZWRpdG9yLmVycm9yX3BhcnNlX3lhbWxcIixcbiAgICAgICAgICBcImVycm9yXCIsXG4gICAgICAgICAgZXJyXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NhdmluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uZmlnID0gbG92ZWxhY2VTdHJ1Y3QoY29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5yYXdfZWRpdG9yLmVycm9yX2ludmFsaWRfY29uZmlnXCIsXG4gICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgIGVyclxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoY29uZmlnLnJlc291cmNlcykge1xuICAgICAgc2hvd0FsZXJ0RGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IucmVzb3VyY2VzX21vdmVkXCJcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5sb3ZlbGFjZSEuc2F2ZUNvbmZpZyhjb25maWcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2hvd0FsZXJ0RGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IuZXJyb3Jfc2F2ZV95YW1sXCIsXG4gICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgIGVyclxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2dlbmVyYXRpb24gPSB0aGlzLnlhbWxFZGl0b3JcbiAgICAgIC5jb2RlbWlycm9yIS5nZXREb2MoKVxuICAgICAgLmNoYW5nZUdlbmVyYXRpb24odHJ1ZSk7XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcbiAgICB0aGlzLl9zYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9jaGFuZ2VkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGdldCB5YW1sRWRpdG9yKCk6IEhhQ29kZUVkaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImhhLWNvZGUtZWRpdG9yXCIpISBhcyBIYUNvZGVFZGl0b3I7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lZGl0b3JcIjogTG92ZWxhY2VGdWxsQ29uZmlnRWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7Ozs7QUFNQTtBQUNBO0FBREE7O0FBSUE7Ozs7QUFVQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBNUNBO0FBa0RBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7QUEvUEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
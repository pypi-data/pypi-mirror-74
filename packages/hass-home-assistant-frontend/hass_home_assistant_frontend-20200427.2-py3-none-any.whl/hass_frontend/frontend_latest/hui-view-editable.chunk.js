(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-view-editable"],{

/***/ "./src/panels/lovelace/components/hui-card-options.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-card-options.ts ***!
  \************************************************************/
/*! exports provided: HuiCardOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardOptions", function() { return HuiCardOptions; });
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor/card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editor/card-editor/show-move-card-view-dialog */ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts");
/* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editor/config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _editor_delete_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor/delete-card */ "./src/panels/lovelace/editor/delete-card.ts");
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










let HuiCardOptions = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("hui-card-options")], function (_initialize, _LitElement) {
  class HuiCardOptions extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiCardOptions,
    d: [{
      kind: "field",
      key: "cardConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "path",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <slot></slot>
      <ha-card>
        <div class="options">
          <div class="primary-actions">
            <mwc-button @click=${this._editCard}
              >${this.hass.localize("ui.panel.lovelace.editor.edit_card.edit")}</mwc-button
            >
          </div>
          <div class="secondary-actions">
            <paper-icon-button
              title="Move card down"
              class="move-arrow"
              icon="hass:arrow-down"
              @click=${this._cardDown}
              ?disabled=${this.lovelace.config.views[this.path[0]].cards.length === this.path[1] + 1}
            ></paper-icon-button>
            <paper-icon-button
              title="Move card up"
              class="move-arrow"
              icon="hass:arrow-up"
              @click=${this._cardUp}
              ?disabled=${this.path[1] === 0}
            ></paper-icon-button>
            <paper-menu-button
              horizontal-align="right"
              vertical-align="bottom"
              vertical-offset="40"
              close-on-activate
            >
              <paper-icon-button
                icon="hass:dots-vertical"
                slot="dropdown-trigger"
                aria-label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.options")}
              ></paper-icon-button>
              <paper-listbox slot="dropdown-content">
                <paper-item @tap=${this._moveCard}>
                  ${this.hass.localize("ui.panel.lovelace.editor.edit_card.move")}</paper-item
                >
                <paper-item @tap=${this._duplicateCard}
                  >${this.hass.localize("ui.panel.lovelace.editor.edit_card.duplicate")}</paper-item
                >
                <paper-item class="delete-item" @tap=${this._deleteCard}>
                  ${this.hass.localize("ui.panel.lovelace.editor.edit_card.delete")}</paper-item
                >
              </paper-listbox>
            </paper-menu-button>
          </div>
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
      :host(:hover) {
        overflow: hidden;
        outline: 2px solid var(--primary-color);
      }

      ha-card {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,
          rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
      }

      div.options {
        border-top: 1px solid #e8e8e8;
        padding: 5px 8px;
        display: flex;
        margin-top: -1px;
      }

      div.options .primary-actions {
        flex: 1;
        margin: auto;
      }

      div.options .secondary-actions {
        flex: 4;
        text-align: right;
      }

      paper-icon-button {
        color: var(--primary-text-color);
      }

      paper-icon-button.move-arrow[disabled] {
        color: var(--disabled-text-color);
      }

      paper-menu-button {
        color: var(--secondary-text-color);
        padding: 0;
      }

      paper-listbox {
        padding: 0;
      }

      paper-item.header {
        color: var(--primary-text-color);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
      }

      paper-item {
        cursor: pointer;
        white-space: nowrap;
      }

      paper-item.delete-item {
        color: var(--error-color);
      }
    `;
      }
    }, {
      kind: "method",
      key: "_duplicateCard",
      value: function _duplicateCard() {
        const path = this.path;
        const cardConfig = this.lovelace.config.views[path[0]].cards[path[1]];
        Object(_editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__["showEditCardDialog"])(this, {
          lovelaceConfig: this.lovelace.config,
          cardConfig,
          saveConfig: this.lovelace.saveConfig,
          path: [path[0]]
        });
      }
    }, {
      kind: "method",
      key: "_editCard",
      value: function _editCard() {
        Object(_editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__["showEditCardDialog"])(this, {
          lovelaceConfig: this.lovelace.config,
          saveConfig: this.lovelace.saveConfig,
          path: this.path
        });
      }
    }, {
      kind: "method",
      key: "_cardUp",
      value: function _cardUp() {
        const lovelace = this.lovelace;
        const path = this.path;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_7__["swapCard"])(lovelace.config, path, [path[0], path[1] - 1]));
      }
    }, {
      kind: "method",
      key: "_cardDown",
      value: function _cardDown() {
        const lovelace = this.lovelace;
        const path = this.path;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_7__["swapCard"])(lovelace.config, path, [path[0], path[1] + 1]));
      }
    }, {
      kind: "method",
      key: "_moveCard",
      value: function _moveCard() {
        Object(_editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_6__["showMoveCardViewDialog"])(this, {
          path: this.path,
          lovelace: this.lovelace
        });
      }
    }, {
      kind: "method",
      key: "_deleteCard",
      value: function _deleteCard() {
        Object(_editor_delete_card__WEBPACK_IMPORTED_MODULE_8__["confDeleteCard"])(this, this.hass, this.lovelace, this.path);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/show-delete-card-dialog.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-delete-card-dialog.ts ***!
  \***************************************************************************/
/*! exports provided: showDeleteCardDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDeleteCardDialog", function() { return showDeleteCardDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


const importDeleteCardDialog = () => Promise.all(/*! import() | hui-dialog-delete-card */[__webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-delete-card~hui-dialog-edit-card~hui-dialog-suggest-card~h~a8cf51a3"), __webpack_require__.e("hui-dialog-delete-card")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-delete-card */ "./src/panels/lovelace/editor/card-editor/hui-dialog-delete-card.ts"));

const showDeleteCardDialog = (element, deleteCardDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-delete-card",
    dialogImport: importDeleteCardDialog,
    dialogParams: deleteCardDialogParams
  });
};

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts ***!
  \******************************************************************************/
/*! exports provided: showMoveCardViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMoveCardViewDialog", function() { return showMoveCardViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

let registeredDialog = false;

const registerEditCardDialog = element => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
  dialogShowEvent: "show-move-card-view",
  dialogTag: "hui-dialog-move-card-view",
  dialogImport: () => Promise.all(/*! import() | hui-dialog-move-card-view */[__webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-move-card-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-move-card-view */ "./src/panels/lovelace/editor/card-editor/hui-dialog-move-card-view.ts"))
});

const showMoveCardViewDialog = (element, moveCardViewDialogParams) => {
  if (!registeredDialog) {
    registeredDialog = true;
    registerEditCardDialog(element);
  }

  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-move-card-view", moveCardViewDialogParams);
};

/***/ }),

/***/ "./src/panels/lovelace/editor/delete-card.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/editor/delete-card.ts ***!
  \***************************************************/
/*! exports provided: confDeleteCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confDeleteCard", function() { return confDeleteCard; });
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _util_toast_deleted_success__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/toast-deleted-success */ "./src/util/toast-deleted-success.ts");
/* harmony import */ var _card_editor_show_delete_card_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-editor/show-delete-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-delete-card-dialog.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-util */ "./src/panels/lovelace/editor/config-util.ts");




async function confDeleteCard(element, hass, lovelace, path) {
  const cardConfig = lovelace.config.views[path[0]].cards[path[1]];
  Object(_card_editor_show_delete_card_dialog__WEBPACK_IMPORTED_MODULE_2__["showDeleteCardDialog"])(element, {
    cardConfig,
    deleteCard: async () => {
      try {
        const newLovelace = Object(_config_util__WEBPACK_IMPORTED_MODULE_3__["deleteCard"])(lovelace.config, path);
        await lovelace.saveConfig(newLovelace);

        const action = async () => {
          await lovelace.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_3__["insertCard"])(newLovelace, path, cardConfig));
        };

        Object(_util_toast_deleted_success__WEBPACK_IMPORTED_MODULE_1__["showDeleteSuccessToast"])(element, hass, action);
      } catch (err) {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_0__["showAlertDialog"])(element, {
          text: `Deleting failed: ${err.message}`
        });
      }
    }
  });
}

/***/ }),

/***/ "./src/panels/lovelace/views/hui-view-editable.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/views/hui-view-editable.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_hui_card_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hui-card-options */ "./src/panels/lovelace/components/hui-card-options.ts");
// hui-view dependencies for when in edit mode.



/***/ }),

/***/ "./src/util/toast-deleted-success.ts":
/*!*******************************************!*\
  !*** ./src/util/toast-deleted-success.ts ***!
  \*******************************************/
/*! exports provided: showDeleteSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDeleteSuccessToast", function() { return showDeleteSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

const showDeleteSuccessToast = (el, hass, action) => {
  const toastParams = {
    message: hass.localize("ui.common.successfully_deleted")
  };

  if (action) {
    toastParams.action = {
      action,
      text: hass.localize("ui.common.undo")
    };
  }

  Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, toastParams);
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXZpZXctZWRpdGFibGUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvaHVpLWNhcmQtb3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LWRlbGV0ZS1jYXJkLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LW1vdmUtY2FyZC12aWV3LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9kZWxldGUtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL3ZpZXdzL2h1aS12aWV3LWVkaXRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3RvYXN0LWRlbGV0ZWQtc3VjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b25cIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHNob3dFZGl0Q2FyZERpYWxvZyB9IGZyb20gXCIuLi9lZGl0b3IvY2FyZC1lZGl0b3Ivc2hvdy1lZGl0LWNhcmQtZGlhbG9nXCI7XG5pbXBvcnQgeyBzaG93TW92ZUNhcmRWaWV3RGlhbG9nIH0gZnJvbSBcIi4uL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LW1vdmUtY2FyZC12aWV3LWRpYWxvZ1wiO1xuaW1wb3J0IHsgc3dhcENhcmQgfSBmcm9tIFwiLi4vZWRpdG9yL2NvbmZpZy11dGlsXCI7XG5pbXBvcnQgeyBjb25mRGVsZXRlQ2FyZCB9IGZyb20gXCIuLi9lZGl0b3IvZGVsZXRlLWNhcmRcIjtcbmltcG9ydCB7IExvdmVsYWNlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWNhcmQtb3B0aW9uc1wiKVxuZXhwb3J0IGNsYXNzIEh1aUNhcmRPcHRpb25zIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBjYXJkQ29uZmlnPzogTG92ZWxhY2VDYXJkQ29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbG92ZWxhY2U/OiBMb3ZlbGFjZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcGF0aD86IFtudW1iZXIsIG51bWJlcl07XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbWFyeS1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9lZGl0Q2FyZH1cbiAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuZWRpdFwiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeS1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIGNhcmQgZG93blwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibW92ZS1hcnJvd1wiXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOmFycm93LWRvd25cIlxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jYXJkRG93bn1cbiAgICAgICAgICAgICAgP2Rpc2FibGVkPSR7dGhpcy5sb3ZlbGFjZSEuY29uZmlnLnZpZXdzW3RoaXMucGF0aCFbMF1dLmNhcmRzIVxuICAgICAgICAgICAgICAgIC5sZW5ndGggPT09XG4gICAgICAgICAgICAgIHRoaXMucGF0aCFbMV0gKyAxfVxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIGNhcmQgdXBcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1vdmUtYXJyb3dcIlxuICAgICAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy11cFwiXG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2NhcmRVcH1cbiAgICAgICAgICAgICAgP2Rpc2FibGVkPSR7dGhpcy5wYXRoIVsxXSA9PT0gMH1cbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiNDBcIlxuICAgICAgICAgICAgICBjbG9zZS1vbi1hY3RpdmF0ZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gQHRhcD0ke3RoaXMuX21vdmVDYXJkfT5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLm1vdmVcIlxuICAgICAgICAgICAgICAgICAgKX08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gQHRhcD0ke3RoaXMuX2R1cGxpY2F0ZUNhcmR9XG4gICAgICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuZHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICl9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGNsYXNzPVwiZGVsZXRlLWl0ZW1cIiBAdGFwPSR7dGhpcy5fZGVsZXRlQ2FyZH0+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgKX08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItbWVudS1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCg6aG92ZXIpIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA1cHggLTRweCxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCAxcHggLTJweDtcbiAgICAgIH1cblxuICAgICAgZGl2Lm9wdGlvbnMge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgIH1cblxuICAgICAgZGl2Lm9wdGlvbnMgLnByaW1hcnktYWN0aW9ucyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cblxuICAgICAgZGl2Lm9wdGlvbnMgLnNlY29uZGFyeS1hY3Rpb25zIHtcbiAgICAgICAgZmxleDogNDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uLm1vdmUtYXJyb3dbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1tZW51LWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWxpc3Rib3gge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtLmhlYWRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0uZGVsZXRlLWl0ZW0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9kdXBsaWNhdGVDYXJkKCk6IHZvaWQge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnBhdGghO1xuICAgIGNvbnN0IGNhcmRDb25maWcgPSB0aGlzLmxvdmVsYWNlIS5jb25maWcudmlld3NbcGF0aFswXV0uY2FyZHMhW3BhdGhbMV1dO1xuICAgIHNob3dFZGl0Q2FyZERpYWxvZyh0aGlzLCB7XG4gICAgICBsb3ZlbGFjZUNvbmZpZzogdGhpcy5sb3ZlbGFjZSEuY29uZmlnLFxuICAgICAgY2FyZENvbmZpZyxcbiAgICAgIHNhdmVDb25maWc6IHRoaXMubG92ZWxhY2UhLnNhdmVDb25maWcsXG4gICAgICBwYXRoOiBbcGF0aFswXV0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lZGl0Q2FyZCgpOiB2b2lkIHtcbiAgICBzaG93RWRpdENhcmREaWFsb2codGhpcywge1xuICAgICAgbG92ZWxhY2VDb25maWc6IHRoaXMubG92ZWxhY2UhLmNvbmZpZyxcbiAgICAgIHNhdmVDb25maWc6IHRoaXMubG92ZWxhY2UhLnNhdmVDb25maWcsXG4gICAgICBwYXRoOiB0aGlzLnBhdGghLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FyZFVwKCk6IHZvaWQge1xuICAgIGNvbnN0IGxvdmVsYWNlID0gdGhpcy5sb3ZlbGFjZSE7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucGF0aCE7XG4gICAgbG92ZWxhY2Uuc2F2ZUNvbmZpZyhcbiAgICAgIHN3YXBDYXJkKGxvdmVsYWNlLmNvbmZpZywgcGF0aCwgW3BhdGhbMF0sIHBhdGhbMV0gLSAxXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FyZERvd24oKTogdm9pZCB7XG4gICAgY29uc3QgbG92ZWxhY2UgPSB0aGlzLmxvdmVsYWNlITtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wYXRoITtcbiAgICBsb3ZlbGFjZS5zYXZlQ29uZmlnKFxuICAgICAgc3dhcENhcmQobG92ZWxhY2UuY29uZmlnLCBwYXRoLCBbcGF0aFswXSwgcGF0aFsxXSArIDFdKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9tb3ZlQ2FyZCgpOiB2b2lkIHtcbiAgICBzaG93TW92ZUNhcmRWaWV3RGlhbG9nKHRoaXMsIHtcbiAgICAgIHBhdGg6IHRoaXMucGF0aCEsXG4gICAgICBsb3ZlbGFjZTogdGhpcy5sb3ZlbGFjZSEsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kZWxldGVDYXJkKCk6IHZvaWQge1xuICAgIGNvbmZEZWxldGVDYXJkKHRoaXMsIHRoaXMuaGFzcyEsIHRoaXMubG92ZWxhY2UhLCB0aGlzLnBhdGghKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWNhcmQtb3B0aW9uc1wiOiBIdWlDYXJkT3B0aW9ucztcbiAgfVxufVxuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZWxldGVDYXJkRGlhbG9nUGFyYW1zIHtcbiAgZGVsZXRlQ2FyZDogKCkgPT4gdm9pZDtcbiAgY2FyZENvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcbn1cblxuY29uc3QgaW1wb3J0RGVsZXRlQ2FyZERpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1kaWFsb2ctZGVsZXRlLWNhcmRcIiAqLyBcIi4vaHVpLWRpYWxvZy1kZWxldGUtY2FyZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzaG93RGVsZXRlQ2FyZERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRlbGV0ZUNhcmREaWFsb2dQYXJhbXM6IERlbGV0ZUNhcmREaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImh1aS1kaWFsb2ctZGVsZXRlLWNhcmRcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGltcG9ydERlbGV0ZUNhcmREaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBkZWxldGVDYXJkRGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcInNob3ctbW92ZS1jYXJkLXZpZXdcIjogTW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zO1xuICB9XG59XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zIHtcbiAgcGF0aDogW251bWJlciwgbnVtYmVyXTtcbiAgbG92ZWxhY2U6IExvdmVsYWNlO1xufVxuXG5jb25zdCByZWdpc3RlckVkaXRDYXJkRGlhbG9nID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogRXZlbnQgPT5cbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dTaG93RXZlbnQ6IFwic2hvdy1tb3ZlLWNhcmQtdmlld1wiLFxuICAgIGRpYWxvZ1RhZzogXCJodWktZGlhbG9nLW1vdmUtY2FyZC12aWV3XCIsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1kaWFsb2ctbW92ZS1jYXJkLXZpZXdcIiAqLyBcIi4vaHVpLWRpYWxvZy1tb3ZlLWNhcmQtdmlld1wiXG4gICAgICApLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNob3dNb3ZlQ2FyZFZpZXdEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBtb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXM6IE1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGlmICghcmVnaXN0ZXJlZERpYWxvZykge1xuICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgIHJlZ2lzdGVyRWRpdENhcmREaWFsb2coZWxlbWVudCk7XG4gIH1cbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1tb3ZlLWNhcmQtdmlld1wiLCBtb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXMpO1xufTtcbiIsImltcG9ydCB7IHNob3dBbGVydERpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzaG93RGVsZXRlU3VjY2Vzc1RvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdG9hc3QtZGVsZXRlZC1zdWNjZXNzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgc2hvd0RlbGV0ZUNhcmREaWFsb2cgfSBmcm9tIFwiLi9jYXJkLWVkaXRvci9zaG93LWRlbGV0ZS1jYXJkLWRpYWxvZ1wiO1xuaW1wb3J0IHsgZGVsZXRlQ2FyZCwgaW5zZXJ0Q2FyZCB9IGZyb20gXCIuL2NvbmZpZy11dGlsXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25mRGVsZXRlQ2FyZChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGxvdmVsYWNlOiBMb3ZlbGFjZSxcbiAgcGF0aDogW251bWJlciwgbnVtYmVyXVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGNhcmRDb25maWcgPSBsb3ZlbGFjZS5jb25maWcudmlld3NbcGF0aFswXV0uY2FyZHMhW3BhdGhbMV1dO1xuICBzaG93RGVsZXRlQ2FyZERpYWxvZyhlbGVtZW50LCB7XG4gICAgY2FyZENvbmZpZyxcbiAgICBkZWxldGVDYXJkOiBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdMb3ZlbGFjZSA9IGRlbGV0ZUNhcmQobG92ZWxhY2UuY29uZmlnLCBwYXRoKTtcbiAgICAgICAgYXdhaXQgbG92ZWxhY2Uuc2F2ZUNvbmZpZyhuZXdMb3ZlbGFjZSk7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBsb3ZlbGFjZS5zYXZlQ29uZmlnKGluc2VydENhcmQobmV3TG92ZWxhY2UsIHBhdGgsIGNhcmRDb25maWcpKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2hvd0RlbGV0ZVN1Y2Nlc3NUb2FzdChlbGVtZW50LCBoYXNzISwgYWN0aW9uKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzaG93QWxlcnREaWFsb2coZWxlbWVudCwge1xuICAgICAgICAgIHRleHQ6IGBEZWxldGluZyBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG59XG4iLCIvLyBodWktdmlldyBkZXBlbmRlbmNpZXMgZm9yIHdoZW4gaW4gZWRpdCBtb2RlLlxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLWNhcmQtb3B0aW9uc1wiO1xuIiwiaW1wb3J0IHsgU2hvd1RvYXN0UGFyYW1zIH0gZnJvbSBcIi4uL21hbmFnZXJzL25vdGlmaWNhdGlvbi1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzaG93VG9hc3QgfSBmcm9tIFwiLi90b2FzdFwiO1xuXG5leHBvcnQgY29uc3Qgc2hvd0RlbGV0ZVN1Y2Nlc3NUb2FzdCA9IChcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBhY3Rpb24/OiAoKSA9PiB2b2lkXG4pID0+IHtcbiAgY29uc3QgdG9hc3RQYXJhbXM6IFNob3dUb2FzdFBhcmFtcyA9IHtcbiAgICBtZXNzYWdlOiBoYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5zdWNjZXNzZnVsbHlfZGVsZXRlZFwiKSxcbiAgfTtcblxuICBpZiAoYWN0aW9uKSB7XG4gICAgdG9hc3RQYXJhbXMuYWN0aW9uID0geyBhY3Rpb24sIHRleHQ6IGhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnVuZG9cIikgfTtcbiAgfVxuXG4gIHNob3dUb2FzdChlbCwgdG9hc3RQYXJhbXMpO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7O0FBS0E7QUFDQTs7Ozs7Ozs7QUFVQTtBQUNBOzs7Ozs7QUFRQTtBQUNBOzs7Ozs7Ozs7OztBQVdBOzs7QUFLQTtBQUNBOztBQUlBO0FBQ0E7O0FBSUE7QUFDQTs7Ozs7OztBQXJEQTtBQStEQTtBQXpFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdFQTtBQTVJQTtBQUFBO0FBQUE7QUFBQTtBQStJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUF2SkE7QUFBQTtBQUFBO0FBQUE7QUEwSkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBL0pBO0FBQUE7QUFBQTtBQUFBO0FBa0tBO0FBQ0E7QUFDQTtBQUdBO0FBdktBO0FBQUE7QUFBQTtBQUFBO0FBMEtBO0FBQ0E7QUFDQTtBQUdBO0FBL0tBO0FBQUE7QUFBQTtBQUFBO0FBa0xBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUF0TEE7QUFBQTtBQUFBO0FBQUE7QUF5TEE7QUFDQTtBQTFMQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0Esc2lCQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBLHNlQUVBO0FBTEE7QUFDQTtBQVFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFmQTtBQWlCQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
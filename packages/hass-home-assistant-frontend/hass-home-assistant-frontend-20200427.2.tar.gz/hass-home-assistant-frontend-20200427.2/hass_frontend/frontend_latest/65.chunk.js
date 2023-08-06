(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[65],{

/***/ "./src/data/shopping-list.ts":
/*!***********************************!*\
  !*** ./src/data/shopping-list.ts ***!
  \***********************************/
/*! exports provided: fetchItems, updateItem, clearItems, addItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchItems", function() { return fetchItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearItems", function() { return clearItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
const fetchItems = hass => hass.callWS({
  type: "shopping_list/items"
});
const updateItem = (hass, itemId, item) => hass.callWS(Object.assign({
  type: "shopping_list/items/update",
  item_id: itemId
}, item));
const clearItems = hass => hass.callWS({
  type: "shopping_list/items/clear"
});
const addItem = (hass, name) => hass.callWS({
  type: "shopping_list/items/add",
  name
});

/***/ }),

/***/ "./src/panels/lovelace/cards/hui-shopping-list-card.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-shopping-list-card.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _data_shopping_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/shopping-list */ "./src/data/shopping-list.ts");
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










let HuiShoppingListCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-shopping-list-card")], function (_initialize, _LitElement) {
  class HuiShoppingListCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiShoppingListCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-shopping-list-editor */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("hui-alarm-panel-card-editor~hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui~192a43f6"), __webpack_require__.e("hui-shopping-list-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-shopping-list-editor */ "./src/panels/lovelace/editor/config-elements/hui-shopping-list-editor.ts"));
        return document.createElement("hui-shopping-list-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig() {
        return {
          type: "shopping-list"
        };
      }
    }, {
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
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_uncheckedItems",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_checkedItems",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubEvents",
      value: void 0
    }, {
      kind: "method",
      key: "getCardSize",
      value: function getCardSize() {
        return (this._config ? this._config.title ? 1 : 0 : 0) + 3;
      }
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        this._config = config;
        this._uncheckedItems = [];
        this._checkedItems = [];

        this._fetchData();
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiShoppingListCard.prototype), "connectedCallback", this).call(this);

        if (this.hass) {
          this._unsubEvents = this.hass.connection.subscribeEvents(() => this._fetchData(), "shopping_list_updated");

          this._fetchData();
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HuiShoppingListCard.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubEvents) {
          this._unsubEvents.then(unsub => unsub());
        }
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiShoppingListCard.prototype), "updated", this).call(this, changedProps);

        if (!this._config || !this.hass) {
          return;
        }

        const oldHass = changedProps.get("hass");
        const oldConfig = changedProps.get("_config");

        if (!oldHass || !oldConfig || oldHass.themes !== this.hass.themes || oldConfig.theme !== this._config.theme) {
          Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_4__["applyThemesOnElement"])(this, this.hass.themes, this._config.theme);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <ha-card
        .header=${this._config.title}
        class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
          "has-header": "title" in this._config
        })}
      >
        <div class="addRow">
          <ha-icon
            class="addButton"
            icon="hass:plus"
            .title=${this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item")}
            @click=${this._addItem}
          >
          </ha-icon>
          <paper-input
            no-label-float
            class="addBox"
            placeholder=${this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item")}
            @keydown=${this._addKeyPress}
          ></paper-input>
        </div>
        ${Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_3__["repeat"])(this._uncheckedItems, item => item.id, item => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <div class="editRow">
                <paper-checkbox
                  tabindex="0"
                  ?checked=${item.complete}
                  .itemId=${item.id}
                  @click=${this._completeItem}
                ></paper-checkbox>
                <paper-input
                  no-label-float
                  .value=${item.name}
                  .itemId=${item.id}
                  @change=${this._saveEdit}
                ></paper-input>
              </div>
            `)}
        ${this._checkedItems.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <div class="divider"></div>
              <div class="checked">
                <span>
                  ${this.hass.localize("ui.panel.lovelace.cards.shopping-list.checked_items")}
                </span>
                <ha-icon
                  class="clearall"
                  tabindex="0"
                  icon="hass:notification-clear-all"
                  .title=${this.hass.localize("ui.panel.lovelace.cards.shopping-list.clear_items")}
                  @click=${this._clearItems}
                >
                </ha-icon>
              </div>
              ${Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_3__["repeat"])(this._checkedItems, item => item.id, item => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                    <div class="editRow">
                      <paper-checkbox
                        tabindex="0"
                        ?checked=${item.complete}
                        .itemId=${item.id}
                        @click=${this._completeItem}
                      ></paper-checkbox>
                      <paper-input
                        no-label-float
                        .value=${item.name}
                        .itemId=${item.id}
                        @change=${this._saveEdit}
                      ></paper-input>
                    </div>
                  `)}
            ` : ""}
      </ha-card>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      ha-card {
        padding: 16px;
      }

      .has-header {
        padding-top: 0;
      }

      .editRow,
      .addRow,
      .checked {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .addRow ha-icon {
        color: var(--secondary-text-color);
        --iron-icon-width: 26px;
        --iron-icon-height: 26px;
      }

      .addButton {
        padding-right: 16px;
        cursor: pointer;
      }

      paper-checkbox {
        padding-left: 4px;
        padding-right: 20px;
        --paper-checkbox-label-spacing: 0px;
      }

      paper-input {
        flex-grow: 1;
      }

      .checked {
        margin: 12px 0;
        justify-content: space-between;
      }

      .checked span {
        color: var(--primary-color);
      }

      .divider {
        height: 1px;
        background-color: var(--divider-color);
        margin: 10px 0;
      }

      .clearall {
        cursor: pointer;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        if (this.hass) {
          const checkedItems = [];
          const uncheckedItems = [];
          const items = await Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_7__["fetchItems"])(this.hass);

          for (const key in items) {
            if (items[key].complete) {
              checkedItems.push(items[key]);
            } else {
              uncheckedItems.push(items[key]);
            }
          }

          this._checkedItems = checkedItems;
          this._uncheckedItems = uncheckedItems;
        }
      }
    }, {
      kind: "method",
      key: "_completeItem",
      value: function _completeItem(ev) {
        Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_7__["updateItem"])(this.hass, ev.target.itemId, {
          complete: ev.target.checked
        }).catch(() => this._fetchData());
      }
    }, {
      kind: "method",
      key: "_saveEdit",
      value: function _saveEdit(ev) {
        Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_7__["updateItem"])(this.hass, ev.target.itemId, {
          name: ev.target.value
        }).catch(() => this._fetchData());
        ev.target.blur();
      }
    }, {
      kind: "method",
      key: "_clearItems",
      value: function _clearItems() {
        if (this.hass) {
          Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_7__["clearItems"])(this.hass).catch(() => this._fetchData());
        }
      }
    }, {
      kind: "get",
      key: "_newItem",
      value: function _newItem() {
        return this.shadowRoot.querySelector(".addBox");
      }
    }, {
      kind: "method",
      key: "_addItem",
      value: function _addItem(ev) {
        const newItem = this._newItem;

        if (newItem.value.length > 0) {
          Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_7__["addItem"])(this.hass, newItem.value).catch(() => this._fetchData());
        }

        newItem.value = "";

        if (ev) {
          newItem.focus();
        }
      }
    }, {
      kind: "method",
      key: "_addKeyPress",
      value: function _addKeyPress(ev) {
        if (ev.keyCode === 13) {
          this._addItem(null);
        }
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zaG9wcGluZy1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY2FyZHMvaHVpLXNob3BwaW5nLWxpc3QtY2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvcHBpbmdMaXN0SXRlbSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgY29tcGxldGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaEl0ZW1zID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBQcm9taXNlPFNob3BwaW5nTGlzdEl0ZW1bXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwic2hvcHBpbmdfbGlzdC9pdGVtc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGl0ZW1JZDogbnVtYmVyLFxuICBpdGVtOiB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBjb21wbGV0ZT86IGJvb2xlYW47XG4gIH1cbik6IFByb21pc2U8U2hvcHBpbmdMaXN0SXRlbT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwic2hvcHBpbmdfbGlzdC9pdGVtcy91cGRhdGVcIixcbiAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgLi4uaXRlbSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjbGVhckl0ZW1zID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInNob3BwaW5nX2xpc3QvaXRlbXMvY2xlYXJcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBuYW1lOiBzdHJpbmdcbik6IFByb21pc2U8U2hvcHBpbmdMaXN0SXRlbT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwic2hvcHBpbmdfbGlzdC9pdGVtcy9hZGRcIixcbiAgICBuYW1lLFxuICB9KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgeyBQYXBlcklucHV0RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IHJlcGVhdCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3JlcGVhdFwiO1xuaW1wb3J0IHsgYXBwbHlUaGVtZXNPbkVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7XG4gIGFkZEl0ZW0sXG4gIGNsZWFySXRlbXMsXG4gIGZldGNoSXRlbXMsXG4gIFNob3BwaW5nTGlzdEl0ZW0sXG4gIHVwZGF0ZUl0ZW0sXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3Nob3BwaW5nLWxpc3RcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZCwgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBTZW5zb3JDYXJkQ29uZmlnLCBTaG9wcGluZ0xpc3RDYXJkQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktc2hvcHBpbmctbGlzdC1jYXJkXCIpXG5jbGFzcyBIdWlTaG9wcGluZ0xpc3RDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCBpbXBsZW1lbnRzIExvdmVsYWNlQ2FyZCB7XG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q29uZmlnRWxlbWVudCgpOiBQcm9taXNlPExvdmVsYWNlQ2FyZEVkaXRvcj4ge1xuICAgIGF3YWl0IGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLXNob3BwaW5nLWxpc3QtZWRpdG9yXCIgKi8gXCIuLi9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1zaG9wcGluZy1saXN0LWVkaXRvclwiXG4gICAgKTtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh1aS1zaG9wcGluZy1saXN0LWNhcmQtZWRpdG9yXCIpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRTdHViQ29uZmlnKCk6IFNob3BwaW5nTGlzdENhcmRDb25maWcge1xuICAgIHJldHVybiB7IHR5cGU6IFwic2hvcHBpbmctbGlzdFwiIH07XG4gIH1cblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogU2hvcHBpbmdMaXN0Q2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF91bmNoZWNrZWRJdGVtcz86IFNob3BwaW5nTGlzdEl0ZW1bXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jaGVja2VkSXRlbXM/OiBTaG9wcGluZ0xpc3RJdGVtW107XG5cbiAgcHJpdmF0ZSBfdW5zdWJFdmVudHM/OiBQcm9taXNlPCgpID0+IFByb21pc2U8dm9pZD4+O1xuXG4gIHB1YmxpYyBnZXRDYXJkU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAodGhpcy5fY29uZmlnID8gKHRoaXMuX2NvbmZpZy50aXRsZSA/IDEgOiAwKSA6IDApICsgMztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBTaG9wcGluZ0xpc3RDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX3VuY2hlY2tlZEl0ZW1zID0gW107XG4gICAgdGhpcy5fY2hlY2tlZEl0ZW1zID0gW107XG4gICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGlmICh0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gdGhpcy5oYXNzLmNvbm5lY3Rpb24uc3Vic2NyaWJlRXZlbnRzKFxuICAgICAgICAoKSA9PiB0aGlzLl9mZXRjaERhdGEoKSxcbiAgICAgICAgXCJzaG9wcGluZ19saXN0X3VwZGF0ZWRcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKHRoaXMuX3Vuc3ViRXZlbnRzKSB7XG4gICAgICB0aGlzLl91bnN1YkV2ZW50cy50aGVuKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IG9sZENvbmZpZyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJfY29uZmlnXCIpIGFzXG4gICAgICB8IFNlbnNvckNhcmRDb25maWdcbiAgICAgIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgIW9sZEhhc3MgfHxcbiAgICAgICFvbGRDb25maWcgfHxcbiAgICAgIG9sZEhhc3MudGhlbWVzICE9PSB0aGlzLmhhc3MudGhlbWVzIHx8XG4gICAgICBvbGRDb25maWcudGhlbWUgIT09IHRoaXMuX2NvbmZpZy50aGVtZVxuICAgICkge1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQodGhpcywgdGhpcy5oYXNzLnRoZW1lcywgdGhpcy5fY29uZmlnLnRoZW1lKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgLmhlYWRlcj0ke3RoaXMuX2NvbmZpZy50aXRsZX1cbiAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7XG4gICAgICAgICAgXCJoYXMtaGVhZGVyXCI6IFwidGl0bGVcIiBpbiB0aGlzLl9jb25maWcsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkUm93XCI+XG4gICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgIGNsYXNzPVwiYWRkQnV0dG9uXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAgICAgLnRpdGxlPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5jYXJkcy5zaG9wcGluZy1saXN0LmFkZF9pdGVtXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9hZGRJdGVtfVxuICAgICAgICAgID5cbiAgICAgICAgICA8L2hhLWljb24+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBuby1sYWJlbC1mbG9hdFxuICAgICAgICAgICAgY2xhc3M9XCJhZGRCb3hcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmNhcmRzLnNob3BwaW5nLWxpc3QuYWRkX2l0ZW1cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIEBrZXlkb3duPSR7dGhpcy5fYWRkS2V5UHJlc3N9XG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke3JlcGVhdChcbiAgICAgICAgICB0aGlzLl91bmNoZWNrZWRJdGVtcyEsXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQsXG4gICAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdFJvd1wiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICAgID9jaGVja2VkPSR7aXRlbS5jb21wbGV0ZX1cbiAgICAgICAgICAgICAgICAgIC5pdGVtSWQ9JHtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fY29tcGxldGVJdGVtfVxuICAgICAgICAgICAgICAgID48L3BhcGVyLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgbm8tbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIC5pdGVtSWQ9JHtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3NhdmVFZGl0fVxuICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgKX1cbiAgICAgICAgJHt0aGlzLl9jaGVja2VkSXRlbXMhLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2VkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuY2FyZHMuc2hvcHBpbmctbGlzdC5jaGVja2VkX2l0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoYS1pY29uXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyYWxsXCJcbiAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpub3RpZmljYXRpb24tY2xlYXItYWxsXCJcbiAgICAgICAgICAgICAgICAgIC50aXRsZT0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuY2FyZHMuc2hvcHBpbmctbGlzdC5jbGVhcl9pdGVtc1wiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fY2xlYXJJdGVtc31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9oYS1pY29uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgJHtyZXBlYXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tlZEl0ZW1zISxcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0Um93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgP2NoZWNrZWQ9JHtpdGVtLmNvbXBsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1JZD0ke2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jb21wbGV0ZUl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuby1sYWJlbC1mbG9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1JZD0ke2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fc2F2ZUVkaXR9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5oYXMtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIC5lZGl0Um93LFxuICAgICAgLmFkZFJvdyxcbiAgICAgIC5jaGVja2VkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmFkZFJvdyBoYS1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDI2cHg7XG4gICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogMjZweDtcbiAgICAgIH1cblxuICAgICAgLmFkZEJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgcGFwZXItY2hlY2tib3gge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgLS1wYXBlci1jaGVja2JveC1sYWJlbC1zcGFjaW5nOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuXG4gICAgICAuY2hlY2tlZCB7XG4gICAgICAgIG1hcmdpbjogMTJweCAwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgIC5jaGVja2VkIHNwYW4ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIH1cblxuICAgICAgLmNsZWFyYWxsIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuaGFzcykge1xuICAgICAgY29uc3QgY2hlY2tlZEl0ZW1zOiBTaG9wcGluZ0xpc3RJdGVtW10gPSBbXTtcbiAgICAgIGNvbnN0IHVuY2hlY2tlZEl0ZW1zOiBTaG9wcGluZ0xpc3RJdGVtW10gPSBbXTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgZmV0Y2hJdGVtcyh0aGlzLmhhc3MpO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbXMpIHtcbiAgICAgICAgaWYgKGl0ZW1zW2tleV0uY29tcGxldGUpIHtcbiAgICAgICAgICBjaGVja2VkSXRlbXMucHVzaChpdGVtc1trZXldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmNoZWNrZWRJdGVtcy5wdXNoKGl0ZW1zW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9jaGVja2VkSXRlbXMgPSBjaGVja2VkSXRlbXM7XG4gICAgICB0aGlzLl91bmNoZWNrZWRJdGVtcyA9IHVuY2hlY2tlZEl0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXBsZXRlSXRlbShldik6IHZvaWQge1xuICAgIHVwZGF0ZUl0ZW0odGhpcy5oYXNzISwgZXYudGFyZ2V0Lml0ZW1JZCwge1xuICAgICAgY29tcGxldGU6IGV2LnRhcmdldC5jaGVja2VkLFxuICAgIH0pLmNhdGNoKCgpID0+IHRoaXMuX2ZldGNoRGF0YSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NhdmVFZGl0KGV2KTogdm9pZCB7XG4gICAgdXBkYXRlSXRlbSh0aGlzLmhhc3MhLCBldi50YXJnZXQuaXRlbUlkLCB7XG4gICAgICBuYW1lOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSkuY2F0Y2goKCkgPT4gdGhpcy5fZmV0Y2hEYXRhKCkpO1xuXG4gICAgZXYudGFyZ2V0LmJsdXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFySXRlbXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzcykge1xuICAgICAgY2xlYXJJdGVtcyh0aGlzLmhhc3MpLmNhdGNoKCgpID0+IHRoaXMuX2ZldGNoRGF0YSgpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBfbmV3SXRlbSgpOiBQYXBlcklucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcIi5hZGRCb3hcIikgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9hZGRJdGVtKGV2KTogdm9pZCB7XG4gICAgY29uc3QgbmV3SXRlbSA9IHRoaXMuX25ld0l0ZW07XG5cbiAgICBpZiAobmV3SXRlbS52YWx1ZSEubGVuZ3RoID4gMCkge1xuICAgICAgYWRkSXRlbSh0aGlzLmhhc3MhLCBuZXdJdGVtLnZhbHVlISkuY2F0Y2goKCkgPT4gdGhpcy5fZmV0Y2hEYXRhKCkpO1xuICAgIH1cblxuICAgIG5ld0l0ZW0udmFsdWUgPSBcIlwiO1xuICAgIGlmIChldikge1xuICAgICAgbmV3SXRlbS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FkZEtleVByZXNzKGV2KTogdm9pZCB7XG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLl9hZGRJdGVtKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXNob3BwaW5nLWxpc3QtY2FyZFwiOiBIdWlTaG9wcGluZ0xpc3RDYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBSUE7QUFTQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBREE7QUFJQTtBQUtBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7Ozs7O0FBQ0E7QUFDQSxxckJBQ0E7QUFFQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7Ozs7OztBQVFBO0FBR0E7Ozs7OztBQU1BO0FBR0E7OztBQUdBOzs7O0FBUUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFoQkE7QUFxQkE7Ozs7QUFLQTs7Ozs7O0FBUUE7QUFHQTs7OztBQUlBOzs7O0FBUUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFoQkE7QUFwQkE7O0FBL0NBO0FBNEZBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF5REE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBbFNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
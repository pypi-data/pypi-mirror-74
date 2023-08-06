(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-group-page"],{

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/







/*
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./src/panels/config/zha/zha-group-page.ts":
/*!*************************************************!*\
  !*** ./src/panels/config/zha/zha-group-page.ts ***!
  \*************************************************/
/*! exports provided: ZHAGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAGroupPage", function() { return ZHAGroupPage; });
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _layouts_hass_error_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-error-screen */ "./src/layouts/hass-error-screen.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
/* harmony import */ var _zha_device_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zha-device-card */ "./src/panels/config/zha/zha-device-card.ts");
/* harmony import */ var _zha_devices_data_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zha-devices-data-table */ "./src/panels/config/zha/zha-devices-data-table.ts");
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














let ZHAGroupPage = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("zha-group-page")], function (_initialize, _LitElement) {
  class ZHAGroupPage extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAGroupPage,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "group",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "groupId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_processingAdd",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_processingRemove",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_filteredDevices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_selectedDevicesToAdd",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_selectedDevicesToRemove",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_firstUpdatedCalled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_members",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(group => group.members);
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHAGroupPage.prototype), "connectedCallback", this).call(this);

        if (this.hass && this._firstUpdatedCalled) {
          this._fetchData();
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(ZHAGroupPage.prototype), "disconnectedCallback", this).call(this);

        this._processingAdd = false;
        this._processingRemove = false;
        this._selectedDevicesToRemove = [];
        this._selectedDevicesToAdd = [];
        this.devices = [];
        this._filteredDevices = [];
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHAGroupPage.prototype), "firstUpdated", this).call(this, changedProperties);

        if (this.hass) {
          this._fetchData();
        }

        this._firstUpdatedCalled = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.group) {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
        <hass-error-screen
          error="${this.hass.localize("ui.panel.config.zha.groups.group_not_found")}"
        ></hass-error-screen>
      `;
        }

        const members = this._members(this.group);

        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <hass-subpage .header=${this.group.name}>
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:delete"
          @click=${this._deleteGroup}
        ></paper-icon-button>
        <ha-config-section .isWide=${this.isWide}>
          <div class="header">
            ${this.hass.localize("ui.panel.config.zha.groups.group_info")}
          </div>

          <p slot="introduction">
            ${this.hass.localize("ui.panel.config.zha.groups.group_details")}
          </p>

          <p><b>Name:</b> ${this.group.name}</p>
          <p><b>Group Id:</b> ${Object(_functions__WEBPACK_IMPORTED_MODULE_10__["formatAsPaddedHex"])(this.group.group_id)}</p>

          <div class="header">
            ${this.hass.localize("ui.panel.config.zha.groups.members")}
          </div>

          ${members.length ? members.map(member => lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  <zha-device-card
                    class="card"
                    .hass=${this.hass}
                    .device=${member}
                    .narrow=${this.narrow}
                    .showActions=${false}
                    .showEditableInfo=${false}
                  ></zha-device-card>
                `) : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <p>
                  This group has no members
                </p>
              `}
          ${members.length ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <div class="header">
                  ${this.hass.localize("ui.panel.config.zha.groups.remove_members")}
                </div>

                <zha-devices-data-table
                  .hass=${this.hass}
                  .devices=${members}
                  .narrow=${this.narrow}
                  selectable
                  @selection-changed=${this._handleRemoveSelectionChanged}
                >
                </zha-devices-data-table>

                <div class="paper-dialog-buttons">
                  <mwc-button
                    .disabled="${!this._selectedDevicesToRemove.length || this._processingRemove}"
                    @click="${this._removeMembersFromGroup}"
                    class="button"
                  >
                    <paper-spinner
                      ?active="${this._processingRemove}"
                      alt=${this.hass.localize("ui.panel.config.zha.groups.removing_members")}
                    ></paper-spinner>
                    ${this.hass.localize("ui.panel.config.zha.groups.remove_members")}</mwc-button
                  >
                </div>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]``}

          <div class="header">
            ${this.hass.localize("ui.panel.config.zha.groups.add_members")}
          </div>

          <zha-devices-data-table
            .hass=${this.hass}
            .devices=${this._filteredDevices}
            .narrow=${this.narrow}
            selectable
            @selection-changed=${this._handleAddSelectionChanged}
          >
          </zha-devices-data-table>

          <div class="paper-dialog-buttons">
            <mwc-button
              .disabled="${!this._selectedDevicesToAdd.length || this._processingAdd}"
              @click="${this._addMembersToGroup}"
              class="button"
            >
              <paper-spinner
                ?active="${this._processingAdd}"
                alt=${this.hass.localize("ui.panel.config.zha.groups.adding_members")}
              ></paper-spinner>
              ${this.hass.localize("ui.panel.config.zha.groups.add_members")}</mwc-button
            >
          </div>
        </ha-config-section>
      </hass-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        if (this.groupId !== null && this.groupId !== undefined) {
          this.group = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_6__["fetchGroup"])(this.hass, this.groupId);
        }

        this.devices = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_6__["fetchGroupableDevices"])(this.hass); // filter the groupable devices so we only show devices that aren't already in the group

        this._filterDevices();
      }
    }, {
      kind: "method",
      key: "_filterDevices",
      value: function _filterDevices() {
        // filter the groupable devices so we only show devices that aren't already in the group
        this._filteredDevices = this.devices.filter(device => {
          return !this.group.members.some(member => member.ieee === device.ieee);
        });
      }
    }, {
      kind: "method",
      key: "_handleAddSelectionChanged",
      value: function _handleAddSelectionChanged(ev) {
        this._selectedDevicesToAdd = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_handleRemoveSelectionChanged",
      value: function _handleRemoveSelectionChanged(ev) {
        this._selectedDevicesToRemove = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_addMembersToGroup",
      value: async function _addMembersToGroup() {
        this._processingAdd = true;
        this.group = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_6__["addMembersToGroup"])(this.hass, this.groupId, this._selectedDevicesToAdd);

        this._filterDevices();

        this._selectedDevicesToAdd = [];
        this._processingAdd = false;
      }
    }, {
      kind: "method",
      key: "_removeMembersFromGroup",
      value: async function _removeMembersFromGroup() {
        this._processingRemove = true;
        this.group = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_6__["removeMembersFromGroup"])(this.hass, this.groupId, this._selectedDevicesToRemove);

        this._filterDevices();

        this._selectedDevicesToRemove = [];
        this._processingRemove = false;
      }
    }, {
      kind: "method",
      key: "_deleteGroup",
      value: async function _deleteGroup() {
        await Object(_data_zha__WEBPACK_IMPORTED_MODULE_6__["removeGroups"])(this.hass, [this.groupId]);
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, `/config/zha/groups`, true);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        .header {
          font-family: var(--paper-font-display1_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-display1_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-display1_-_font-size);
          font-weight: var(--paper-font-display1_-_font-weight);
          letter-spacing: var(--paper-font-display1_-_letter-spacing);
          line-height: var(--paper-font-display1_-_line-height);
          opacity: var(--dark-primary-opacity);
        }

        ha-config-section *:last-child {
          padding-bottom: 24px;
        }

        .button {
          float: right;
        }

        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        .paper-dialog-buttons {
          align-items: flex-end;
          padding: 8px;
        }
        .paper-dialog-buttons .warning {
          --mdc-theme-primary: var(--google-red-500);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWdyb3VwLXBhZ2UuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1ncm91cC1wYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IFNlbGVjdGlvbkNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHtcbiAgYWRkTWVtYmVyc1RvR3JvdXAsXG4gIGZldGNoR3JvdXAsXG4gIGZldGNoR3JvdXBhYmxlRGV2aWNlcyxcbiAgcmVtb3ZlR3JvdXBzLFxuICByZW1vdmVNZW1iZXJzRnJvbUdyb3VwLFxuICBaSEFEZXZpY2UsXG4gIFpIQUdyb3VwLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1lcnJvci1zY3JlZW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgZm9ybWF0QXNQYWRkZWRIZXggfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vemhhLWRldmljZS1jYXJkXCI7XG5pbXBvcnQgXCIuL3poYS1kZXZpY2VzLWRhdGEtdGFibGVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJ6aGEtZ3JvdXAtcGFnZVwiKVxuZXhwb3J0IGNsYXNzIFpIQUdyb3VwUGFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGdyb3VwPzogWkhBR3JvdXA7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGdyb3VwSWQhOiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGRldmljZXM6IFpIQURldmljZVtdID0gW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcHJvY2Vzc2luZ0FkZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Byb2Nlc3NpbmdSZW1vdmUgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9maWx0ZXJlZERldmljZXM6IFpIQURldmljZVtdID0gW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWREZXZpY2VzVG9BZGQ6IHN0cmluZ1tdID0gW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWREZXZpY2VzVG9SZW1vdmU6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBfZmlyc3RVcGRhdGVkQ2FsbGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfbWVtYmVycyA9IG1lbW9pemVPbmUoXG4gICAgKGdyb3VwOiBaSEFHcm91cCk6IFpIQURldmljZVtdID0+IGdyb3VwLm1lbWJlcnNcbiAgKTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5oYXNzICYmIHRoaXMuX2ZpcnN0VXBkYXRlZENhbGxlZCkge1xuICAgICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0FkZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdSZW1vdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZXNUb1JlbW92ZSA9IFtdO1xuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkID0gW107XG4gICAgdGhpcy5kZXZpY2VzID0gW107XG4gICAgdGhpcy5fZmlsdGVyZWREZXZpY2VzID0gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKHRoaXMuaGFzcykge1xuICAgICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gICAgfVxuICAgIHRoaXMuX2ZpcnN0VXBkYXRlZENhbGxlZCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5ncm91cCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYXNzLWVycm9yLXNjcmVlblxuICAgICAgICAgIGVycm9yPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmdyb3VwX25vdF9mb3VuZFwiXG4gICAgICAgICAgKX1cIlxuICAgICAgICA+PC9oYXNzLWVycm9yLXNjcmVlbj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3QgbWVtYmVycyA9IHRoaXMuX21lbWJlcnModGhpcy5ncm91cCk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2UgLmhlYWRlcj0ke3RoaXMuZ3JvdXAubmFtZX0+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgIGljb249XCJoYXNzOmRlbGV0ZVwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fZGVsZXRlR3JvdXB9XG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmdyb3VwX2luZm9cIil9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8cCBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmdyb3VwX2RldGFpbHNcIil9XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+PGI+TmFtZTo8L2I+ICR7dGhpcy5ncm91cC5uYW1lfTwvcD5cbiAgICAgICAgICA8cD48Yj5Hcm91cCBJZDo8L2I+ICR7Zm9ybWF0QXNQYWRkZWRIZXgodGhpcy5ncm91cC5ncm91cF9pZCl9PC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5tZW1iZXJzXCIpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgJHttZW1iZXJzLmxlbmd0aFxuICAgICAgICAgICAgPyBtZW1iZXJzLm1hcChcbiAgICAgICAgICAgICAgICAobWVtYmVyKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHpoYS1kZXZpY2UtY2FyZFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRcIlxuICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgLmRldmljZT0ke21lbWJlcn1cbiAgICAgICAgICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgICAgICAgICAuc2hvd0FjdGlvbnM9JHtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgLnNob3dFZGl0YWJsZUluZm89JHtmYWxzZX1cbiAgICAgICAgICAgICAgICAgID48L3poYS1kZXZpY2UtY2FyZD5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFRoaXMgZ3JvdXAgaGFzIG5vIG1lbWJlcnNcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgJHttZW1iZXJzLmxlbmd0aFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLnJlbW92ZV9tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8emhhLWRldmljZXMtZGF0YS10YWJsZVxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAuZGV2aWNlcz0ke21lbWJlcnN9XG4gICAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlXG4gICAgICAgICAgICAgICAgICBAc2VsZWN0aW9uLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVSZW1vdmVTZWxlY3Rpb25DaGFuZ2VkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3poYS1kZXZpY2VzLWRhdGEtdGFibGU+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD1cIiR7IXRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvUmVtb3ZlLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nUmVtb3ZlfVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fcmVtb3ZlTWVtYmVyc0Zyb21Hcm91cH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgP2FjdGl2ZT1cIiR7dGhpcy5fcHJvY2Vzc2luZ1JlbW92ZX1cIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMucmVtb3ZpbmdfbWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMucmVtb3ZlX21lbWJlcnNcIlxuICAgICAgICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IGh0bWxgYH1cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMuYWRkX21lbWJlcnNcIil9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8emhhLWRldmljZXMtZGF0YS10YWJsZVxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAuZGV2aWNlcz0ke3RoaXMuX2ZpbHRlcmVkRGV2aWNlc31cbiAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgIHNlbGVjdGFibGVcbiAgICAgICAgICAgIEBzZWxlY3Rpb24tY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUFkZFNlbGVjdGlvbkNoYW5nZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgIDwvemhhLWRldmljZXMtZGF0YS10YWJsZT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgLmRpc2FibGVkPVwiJHshdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9BZGQubGVuZ3RoIHx8XG4gICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdBZGR9XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9hZGRNZW1iZXJzVG9Hcm91cH1cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgICAgP2FjdGl2ZT1cIiR7dGhpcy5fcHJvY2Vzc2luZ0FkZH1cIlxuICAgICAgICAgICAgICAgIGFsdD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMuYWRkaW5nX21lbWJlcnNcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmFkZF9tZW1iZXJzXCJcbiAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgaWYgKHRoaXMuZ3JvdXBJZCAhPT0gbnVsbCAmJiB0aGlzLmdyb3VwSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ncm91cCA9IGF3YWl0IGZldGNoR3JvdXAodGhpcy5oYXNzISwgdGhpcy5ncm91cElkKTtcbiAgICB9XG4gICAgdGhpcy5kZXZpY2VzID0gYXdhaXQgZmV0Y2hHcm91cGFibGVEZXZpY2VzKHRoaXMuaGFzcyEpO1xuICAgIC8vIGZpbHRlciB0aGUgZ3JvdXBhYmxlIGRldmljZXMgc28gd2Ugb25seSBzaG93IGRldmljZXMgdGhhdCBhcmVuJ3QgYWxyZWFkeSBpbiB0aGUgZ3JvdXBcbiAgICB0aGlzLl9maWx0ZXJEZXZpY2VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEZXZpY2VzKCkge1xuICAgIC8vIGZpbHRlciB0aGUgZ3JvdXBhYmxlIGRldmljZXMgc28gd2Ugb25seSBzaG93IGRldmljZXMgdGhhdCBhcmVuJ3QgYWxyZWFkeSBpbiB0aGUgZ3JvdXBcbiAgICB0aGlzLl9maWx0ZXJlZERldmljZXMgPSB0aGlzLmRldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IHtcbiAgICAgIHJldHVybiAhdGhpcy5ncm91cCEubWVtYmVycy5zb21lKChtZW1iZXIpID0+IG1lbWJlci5pZWVlID09PSBkZXZpY2UuaWVlZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVBZGRTZWxlY3Rpb25DaGFuZ2VkKFxuICAgIGV2OiBIQVNTRG9tRXZlbnQ8U2VsZWN0aW9uQ2hhbmdlZEV2ZW50PlxuICApOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZXNUb0FkZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJlbW92ZVNlbGVjdGlvbkNoYW5nZWQoXG4gICAgZXY6IEhBU1NEb21FdmVudDxTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvUmVtb3ZlID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWRkTWVtYmVyc1RvR3JvdXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0FkZCA9IHRydWU7XG4gICAgdGhpcy5ncm91cCA9IGF3YWl0IGFkZE1lbWJlcnNUb0dyb3VwKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgdGhpcy5ncm91cElkLFxuICAgICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9BZGRcbiAgICApO1xuICAgIHRoaXMuX2ZpbHRlckRldmljZXMoKTtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZXNUb0FkZCA9IFtdO1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdBZGQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlbW92ZU1lbWJlcnNGcm9tR3JvdXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ1JlbW92ZSA9IHRydWU7XG4gICAgdGhpcy5ncm91cCA9IGF3YWl0IHJlbW92ZU1lbWJlcnNGcm9tR3JvdXAoXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICB0aGlzLmdyb3VwSWQsXG4gICAgICB0aGlzLl9zZWxlY3RlZERldmljZXNUb1JlbW92ZVxuICAgICk7XG4gICAgdGhpcy5fZmlsdGVyRGV2aWNlcygpO1xuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvUmVtb3ZlID0gW107XG4gICAgdGhpcy5fcHJvY2Vzc2luZ1JlbW92ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlR3JvdXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgcmVtb3ZlR3JvdXBzKHRoaXMuaGFzcywgW3RoaXMuZ3JvdXBJZF0pO1xuICAgIG5hdmlnYXRlKHRoaXMsIGAvY29uZmlnL3poYS9ncm91cHNgLCB0cnVlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1kaXNwbGF5MV8tX2ZvbnQtZmFtaWx5KTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiB2YXIoXG4gICAgICAgICAgICAtLXBhcGVyLWZvbnQtZGlzcGxheTFfLV8td2Via2l0LWZvbnQtc21vb3RoaW5nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtZGlzcGxheTFfLV9mb250LXNpemUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LWRpc3BsYXkxXy1fZm9udC13ZWlnaHQpO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWRpc3BsYXkxXy1fbGV0dGVyLXNwYWNpbmcpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LWRpc3BsYXkxXy1fbGluZS1oZWlnaHQpO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNvbmZpZy1zZWN0aW9uICo6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBtd2MtYnV0dG9uIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyW2FjdGl2ZV0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5wYXBlci1kaWFsb2ctYnV0dG9ucyB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAucGFwZXItZGlhbG9nLWJ1dHRvbnMgLndhcm5pbmcge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQTRCQTtBQUNBO0FBN0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBRUE7QUFFQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQThCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFxQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUNBO0FBQUE7QUFBQTtBQUFBO0FBK0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFwREE7QUFBQTtBQUFBO0FBQUE7QUF1REE7QUFDQTs7QUFFQTs7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7Ozs7QUFnQkE7QUFDQTs7QUFHQTs7OztBQU1BO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFFQTs7OztBQUlBO0FBQ0E7O0FBSUE7OztBQTlCQTtBQUNBOztBQXNDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFFQTs7OztBQUlBO0FBQ0E7O0FBSUE7Ozs7O0FBekdBO0FBaUhBO0FBcExBO0FBQUE7QUFBQTtBQUFBO0FBdUxBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE3TEE7QUFBQTtBQUFBO0FBQUE7QUFnTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBNQTtBQUFBO0FBQUE7QUFBQTtBQXlNQTtBQUNBO0FBMU1BO0FBQUE7QUFBQTtBQUFBO0FBK01BO0FBQ0E7QUFoTkE7QUFBQTtBQUFBO0FBQUE7QUFtTkE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTVOQTtBQUFBO0FBQUE7QUFBQTtBQStOQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBeE9BO0FBQUE7QUFBQTtBQUFBO0FBMk9BO0FBQ0E7QUFDQTtBQTdPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ1BBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBDQTtBQTFSQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
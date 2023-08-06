(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-stack-card-editor"],{

/***/ "./node_modules/lit-html/directives/until.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/directives/until.js ***!
  \***************************************************/
/*! exports provided: until */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



const _state = new WeakMap(); // Effectively infinity, but a SMI.


const _infinity = 0x7fffffff;
/**
 * Renders one of a series of values, including Promises, to a Part.
 *
 * Values are rendered in priority order, with the first argument having the
 * highest priority and the last argument having the lowest priority. If a
 * value is a Promise, low-priority values will be rendered until it resolves.
 *
 * The priority of values can be used to create placeholder content for async
 * data. For example, a Promise with pending content can be the first,
 * highest-priority, argument, and a non_promise loading indicator template can
 * be used as the second, lower-priority, argument. The loading indicator will
 * render immediately, and the primary content will render when the Promise
 * resolves.
 *
 * Example:
 *
 *     const content = fetch('./content.txt').then(r => r.text());
 *     html`${until(content, html`<span>Loading...</span>`)}`
 */

const until = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])((...args) => part => {
  let state = _state.get(part);

  if (state === undefined) {
    state = {
      lastRenderedIndex: _infinity,
      values: []
    };

    _state.set(part, state);
  }

  const previousValues = state.values;
  let previousLength = previousValues.length;
  state.values = args;

  for (let i = 0; i < args.length; i++) {
    // If we've rendered a higher-priority value already, stop.
    if (i > state.lastRenderedIndex) {
      break;
    }

    const value = args[i]; // Render non-Promise values immediately

    if (Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value) || typeof value.then !== 'function') {
      part.setValue(value);
      state.lastRenderedIndex = i; // Since a lower-priority value will never overwrite a higher-priority
      // synchronous value, we can stop processsing now.

      break;
    } // If this is a Promise we've already handled, skip it.


    if (i < previousLength && value === previousValues[i]) {
      continue;
    } // We have a Promise that we haven't seen before, so priorities may have
    // changed. Forget what we rendered before.


    state.lastRenderedIndex = _infinity;
    previousLength = 0;
    Promise.resolve(value).then(resolvedValue => {
      const index = state.values.indexOf(value); // If state.values doesn't contain the value, we've re-rendered without
      // the value, so don't render it. Then, only render if the value is
      // higher-priority than what's already been rendered.

      if (index > -1 && index < state.lastRenderedIndex) {
        state.lastRenderedIndex = index;
        part.setValue(resolvedValue);
        part.commit();
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shallowEqual = function shallowEqual(newValue, oldValue) {
  return newValue === oldValue;
};

var simpleIsEqual = function simpleIsEqual(newArgs, lastArgs) {
  return newArgs.length === lastArgs.length && newArgs.every(function (newArg, index) {
    return shallowEqual(newArg, lastArgs[index]);
  });
};

function index(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

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

/***/ "./src/panels/lovelace/editor/config-elements/hui-stack-card-editor.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-stack-card-editor.ts ***!
  \*****************************************************************************/
/*! exports provided: HuiStackCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiStackCardEditor", function() { return HuiStackCardEditor; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _card_editor_hui_card_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card-editor/hui-card-picker */ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts");
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
  cards: ["any"],
  title: "string?"
});
let HuiStackCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("hui-stack-card-editor")], function (_initialize, _LitElement) {
  class HuiStackCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiStackCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_selectedCard",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_GUImode",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_guiModeAvailable",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["query"])("hui-card-editor")],
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
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]``;
        }

        const selected = this._selectedCard;
        const numcards = this._config.cards.length;
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <div class="card-config">
        <div class="toolbar">
          <paper-tabs
            .selected=${selected}
            scrollable
            @iron-activate=${this._handleSelectedCard}
          >
            ${this._config.cards.map((_card, i) => {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <paper-tab>
                  ${i + 1}
                </paper-tab>
              `;
        })}
          </paper-tabs>
          <paper-tabs
            id="add-card"
            .selected=${selected === numcards ? "0" : undefined}
            @iron-activate=${this._handleSelectedCard}
          >
            <paper-tab>
              <ha-icon icon="hass:plus"></ha-icon>
            </paper-tab>
          </paper-tabs>
        </div>

        <div id="editor">
          ${selected < numcards ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <div id="card-options">
                  <mwc-button
                    @click=${this._toggleMode}
                    .disabled=${!this._guiModeAvailable}
                    class="gui-mode-button"
                  >
                    ${this.hass.localize(!this._cardEditorEl || this._GUImode ? "ui.panel.lovelace.editor.edit_card.show_code_editor" : "ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                  </mwc-button>
                  <paper-icon-button
                    id="move-before"
                    title="Move card before"
                    icon="hass:arrow-left"
                    .disabled=${selected === 0}
                    @click=${this._handleMove}
                  ></paper-icon-button>

                  <paper-icon-button
                    id="move-after"
                    title="Move card after"
                    icon="hass:arrow-right"
                    .disabled=${selected === numcards - 1}
                    @click=${this._handleMove}
                  ></paper-icon-button>

                  <paper-icon-button
                    icon="hass:delete"
                    @click=${this._handleDeleteCard}
                  ></paper-icon-button>
                </div>

                <hui-card-editor
                  .hass=${this.hass}
                  .value=${this._config.cards[selected]}
                  .lovelace=${this.lovelace}
                  @config-changed=${this._handleConfigChanged}
                  @GUImode-changed=${this._handleGUIModeChanged}
                ></hui-card-editor>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <hui-card-picker
                  .hass=${this.hass}
                  .lovelace=${this.lovelace}
                  @config-changed="${this._handleCardPicked}"
                ></hui-card-picker>
              `}
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_handleSelectedCard",
      value: function _handleSelectedCard(ev) {
        if (ev.target.id === "add-card") {
          this._selectedCard = this._config.cards.length;
          return;
        }

        this._setMode(true);

        this._guiModeAvailable = true;
        this._selectedCard = parseInt(ev.detail.selected, 10);
      }
    }, {
      kind: "method",
      key: "_handleConfigChanged",
      value: function _handleConfigChanged(ev) {
        ev.stopPropagation();

        if (!this._config) {
          return;
        }

        this._config.cards[this._selectedCard] = ev.detail.config;
        this._guiModeAvailable = ev.detail.guiModeAvailable;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "method",
      key: "_handleCardPicked",
      value: function _handleCardPicked(ev) {
        ev.stopPropagation();

        if (!this._config) {
          return;
        }

        const config = ev.detail.config;

        this._config.cards.push(config);

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "method",
      key: "_handleDeleteCard",
      value: function _handleDeleteCard() {
        if (!this._config) {
          return;
        }

        this._config.cards.splice(this._selectedCard, 1);

        this._selectedCard = Math.max(0, this._selectedCard - 1);
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "method",
      key: "_handleMove",
      value: function _handleMove(ev) {
        if (!this._config) {
          return;
        }

        const source = this._selectedCard;
        const target = ev.target.id === "move-before" ? source - 1 : source + 1;

        const card = this._config.cards.splice(this._selectedCard, 1)[0];

        this._config.cards.splice(target, 0, card);

        this._selectedCard = target;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
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
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
      .toolbar {
        display: flex;
        --paper-tabs-selection-bar-color: var(--primary-color);
        --paper-tab-ink: var(--primary-color);
      }
      paper-tabs {
        display: flex;
        font-size: 14px;
        flex-grow: 1;
      }
      #add-card {
        max-width: 32px;
        padding: 0;
      }

      #card-options {
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }

      #editor {
        border: 1px solid var(--divider-color);
        padding: 12px;
      }
      @media (max-width: 450px) {
        #editor {
          margin: 0 -12px;
        }
      }

      .gui-mode-button {
        margin-right: auto;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXN0YWNrLWNhcmQtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL3VudGlsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1zdGFjay1jYXJkLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7aXNQcmltaXRpdmV9IGZyb20gJy4uL2xpYi9wYXJ0cy5qcyc7XG5pbXBvcnQge2RpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5pbnRlcmZhY2UgQXN5bmNTdGF0ZSB7XG4gIC8qKlxuICAgKiBUaGUgbGFzdCByZW5kZXJlZCBpbmRleCBvZiBhIGNhbGwgdG8gdW50aWwoKS4gQSB2YWx1ZSBvbmx5IHJlbmRlcnMgaWYgaXRzXG4gICAqIGluZGV4IGlzIGxlc3MgdGhhbiB0aGUgYGxhc3RSZW5kZXJlZEluZGV4YC5cbiAgICovXG4gIGxhc3RSZW5kZXJlZEluZGV4OiBudW1iZXI7XG5cbiAgdmFsdWVzOiB1bmtub3duW107XG59XG5cbmNvbnN0IF9zdGF0ZSA9IG5ldyBXZWFrTWFwPFBhcnQsIEFzeW5jU3RhdGU+KCk7XG4vLyBFZmZlY3RpdmVseSBpbmZpbml0eSwgYnV0IGEgU01JLlxuY29uc3QgX2luZmluaXR5ID0gMHg3ZmZmZmZmZjtcblxuLyoqXG4gKiBSZW5kZXJzIG9uZSBvZiBhIHNlcmllcyBvZiB2YWx1ZXMsIGluY2x1ZGluZyBQcm9taXNlcywgdG8gYSBQYXJ0LlxuICpcbiAqIFZhbHVlcyBhcmUgcmVuZGVyZWQgaW4gcHJpb3JpdHkgb3JkZXIsIHdpdGggdGhlIGZpcnN0IGFyZ3VtZW50IGhhdmluZyB0aGVcbiAqIGhpZ2hlc3QgcHJpb3JpdHkgYW5kIHRoZSBsYXN0IGFyZ3VtZW50IGhhdmluZyB0aGUgbG93ZXN0IHByaW9yaXR5LiBJZiBhXG4gKiB2YWx1ZSBpcyBhIFByb21pc2UsIGxvdy1wcmlvcml0eSB2YWx1ZXMgd2lsbCBiZSByZW5kZXJlZCB1bnRpbCBpdCByZXNvbHZlcy5cbiAqXG4gKiBUaGUgcHJpb3JpdHkgb2YgdmFsdWVzIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciBhc3luY1xuICogZGF0YS4gRm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB3aXRoIHBlbmRpbmcgY29udGVudCBjYW4gYmUgdGhlIGZpcnN0LFxuICogaGlnaGVzdC1wcmlvcml0eSwgYXJndW1lbnQsIGFuZCBhIG5vbl9wcm9taXNlIGxvYWRpbmcgaW5kaWNhdG9yIHRlbXBsYXRlIGNhblxuICogYmUgdXNlZCBhcyB0aGUgc2Vjb25kLCBsb3dlci1wcmlvcml0eSwgYXJndW1lbnQuIFRoZSBsb2FkaW5nIGluZGljYXRvciB3aWxsXG4gKiByZW5kZXIgaW1tZWRpYXRlbHksIGFuZCB0aGUgcHJpbWFyeSBjb250ZW50IHdpbGwgcmVuZGVyIHdoZW4gdGhlIFByb21pc2VcbiAqIHJlc29sdmVzLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNvbnN0IGNvbnRlbnQgPSBmZXRjaCgnLi9jb250ZW50LnR4dCcpLnRoZW4ociA9PiByLnRleHQoKSk7XG4gKiAgICAgaHRtbGAke3VudGlsKGNvbnRlbnQsIGh0bWxgPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj5gKX1gXG4gKi9cbmV4cG9ydCBjb25zdCB1bnRpbCA9IGRpcmVjdGl2ZSgoLi4uYXJnczogdW5rbm93bltdKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBsZXQgc3RhdGUgPSBfc3RhdGUuZ2V0KHBhcnQpITtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIGxhc3RSZW5kZXJlZEluZGV4OiBfaW5maW5pdHksXG4gICAgICB2YWx1ZXM6IFtdLFxuICAgIH07XG4gICAgX3N0YXRlLnNldChwYXJ0LCBzdGF0ZSk7XG4gIH1cbiAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBzdGF0ZS52YWx1ZXM7XG4gIGxldCBwcmV2aW91c0xlbmd0aCA9IHByZXZpb3VzVmFsdWVzLmxlbmd0aDtcbiAgc3RhdGUudmFsdWVzID0gYXJncztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBJZiB3ZSd2ZSByZW5kZXJlZCBhIGhpZ2hlci1wcmlvcml0eSB2YWx1ZSBhbHJlYWR5LCBzdG9wLlxuICAgIGlmIChpID4gc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gYXJnc1tpXTtcblxuICAgIC8vIFJlbmRlciBub24tUHJvbWlzZSB2YWx1ZXMgaW1tZWRpYXRlbHlcbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgIHR5cGVvZiAodmFsdWUgYXMge3RoZW4/OiB1bmtub3dufSkudGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGk7XG4gICAgICAvLyBTaW5jZSBhIGxvd2VyLXByaW9yaXR5IHZhbHVlIHdpbGwgbmV2ZXIgb3ZlcndyaXRlIGEgaGlnaGVyLXByaW9yaXR5XG4gICAgICAvLyBzeW5jaHJvbm91cyB2YWx1ZSwgd2UgY2FuIHN0b3AgcHJvY2Vzc3Npbmcgbm93LlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIFByb21pc2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkLCBza2lwIGl0LlxuICAgIGlmIChpIDwgcHJldmlvdXNMZW5ndGggJiYgdmFsdWUgPT09IHByZXZpb3VzVmFsdWVzW2ldKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBXZSBoYXZlIGEgUHJvbWlzZSB0aGF0IHdlIGhhdmVuJ3Qgc2VlbiBiZWZvcmUsIHNvIHByaW9yaXRpZXMgbWF5IGhhdmVcbiAgICAvLyBjaGFuZ2VkLiBGb3JnZXQgd2hhdCB3ZSByZW5kZXJlZCBiZWZvcmUuXG4gICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBfaW5maW5pdHk7XG4gICAgcHJldmlvdXNMZW5ndGggPSAwO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKChyZXNvbHZlZFZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgIC8vIElmIHN0YXRlLnZhbHVlcyBkb2Vzbid0IGNvbnRhaW4gdGhlIHZhbHVlLCB3ZSd2ZSByZS1yZW5kZXJlZCB3aXRob3V0XG4gICAgICAvLyB0aGUgdmFsdWUsIHNvIGRvbid0IHJlbmRlciBpdC4gVGhlbiwgb25seSByZW5kZXIgaWYgdGhlIHZhbHVlIGlzXG4gICAgICAvLyBoaWdoZXItcHJpb3JpdHkgdGhhbiB3aGF0J3MgYWxyZWFkeSBiZWVuIHJlbmRlcmVkLlxuICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGluZGV4O1xuICAgICAgICBwYXJ0LnNldFZhbHVlKHJlc29sdmVkVmFsdWUpO1xuICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiIsInZhciBzaGFsbG93RXF1YWwgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gIHJldHVybiBuZXdWYWx1ZSA9PT0gb2xkVmFsdWU7XG59O1xuXG52YXIgc2ltcGxlSXNFcXVhbCA9IGZ1bmN0aW9uIHNpbXBsZUlzRXF1YWwobmV3QXJncywgbGFzdEFyZ3MpIHtcbiAgcmV0dXJuIG5ld0FyZ3MubGVuZ3RoID09PSBsYXN0QXJncy5sZW5ndGggJiYgbmV3QXJncy5ldmVyeShmdW5jdGlvbiAobmV3QXJnLCBpbmRleCkge1xuICAgIHJldHVybiBzaGFsbG93RXF1YWwobmV3QXJnLCBsYXN0QXJnc1tpbmRleF0pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGluZGV4IChyZXN1bHRGbiwgaXNFcXVhbCkge1xuICBpZiAoaXNFcXVhbCA9PT0gdm9pZCAwKSB7XG4gICAgaXNFcXVhbCA9IHNpbXBsZUlzRXF1YWw7XG4gIH1cblxuICB2YXIgbGFzdFRoaXM7XG4gIHZhciBsYXN0QXJncyA9IFtdO1xuICB2YXIgbGFzdFJlc3VsdDtcbiAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcblxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBuZXdBcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgbmV3QXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoY2FsbGVkT25jZSAmJiBsYXN0VGhpcyA9PT0gdGhpcyAmJiBpc0VxdWFsKG5ld0FyZ3MsIGxhc3RBcmdzKSkge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdEZuLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgIGNhbGxlZE9uY2UgPSB0cnVlO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0QXJncyA9IG5ld0FyZ3M7XG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFbnRpdHlJZCh2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ2RvbWFpbi5lbnRpdHknXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJY29uKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdtZGk6aWNvbidcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IHN1cGVyc3RydWN0IH0gZnJvbSBcInN1cGVyc3RydWN0XCI7XG5pbXBvcnQgeyBpc0VudGl0eUlkIH0gZnJvbSBcIi4vaXMtZW50aXR5LWlkXCI7XG5pbXBvcnQgeyBpc0ljb24gfSBmcm9tIFwiLi9pcy1pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3QgPSBzdXBlcnN0cnVjdCh7XG4gIHR5cGVzOiB7XG4gICAgXCJlbnRpdHktaWRcIjogaXNFbnRpdHlJZCxcbiAgICBpY29uOiBpc0ljb24sXG4gIH0sXG59KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYlwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBTdGFja0NhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vY2FyZHMvdHlwZXNcIjtcbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZEVkaXRvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ29uZmlnQ2hhbmdlZEV2ZW50LFxuICBIdWlDYXJkRWRpdG9yLFxufSBmcm9tIFwiLi4vY2FyZC1lZGl0b3IvaHVpLWNhcmQtZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi9jYXJkLWVkaXRvci9odWktY2FyZC1waWNrZXJcIjtcbmltcG9ydCB7IEdVSU1vZGVDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgY2FyZENvbmZpZ1N0cnVjdCA9IHN0cnVjdCh7XG4gIHR5cGU6IFwic3RyaW5nXCIsXG4gIGNhcmRzOiBbXCJhbnlcIl0sXG4gIHRpdGxlOiBcInN0cmluZz9cIixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1zdGFjay1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aVN0YWNrQ2FyZEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnRcbiAgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2VDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogU3RhY2tDYXJkQ29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkQ2FyZCA9IDA7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfR1VJbW9kZSA9IHRydWU7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZ3VpTW9kZUF2YWlsYWJsZT8gPSB0cnVlO1xuXG4gIEBxdWVyeShcImh1aS1jYXJkLWVkaXRvclwiKSBwcml2YXRlIF9jYXJkRWRpdG9yRWw/OiBIdWlDYXJkRWRpdG9yO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBTdGFja0NhcmRDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGVkQ2FyZCE7XG4gICAgY29uc3QgbnVtY2FyZHMgPSB0aGlzLl9jb25maWcuY2FyZHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb25maWdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cbiAgICAgICAgICA8cGFwZXItdGFic1xuICAgICAgICAgICAgLnNlbGVjdGVkPSR7c2VsZWN0ZWR9XG4gICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICBAaXJvbi1hY3RpdmF0ZT0ke3RoaXMuX2hhbmRsZVNlbGVjdGVkQ2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuX2NvbmZpZy5jYXJkcy5tYXAoKF9jYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci10YWI+XG4gICAgICAgICAgICAgICAgICAke2kgKyAxfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9wYXBlci10YWJzPlxuICAgICAgICAgIDxwYXBlci10YWJzXG4gICAgICAgICAgICBpZD1cImFkZC1jYXJkXCJcbiAgICAgICAgICAgIC5zZWxlY3RlZD0ke3NlbGVjdGVkID09PSBudW1jYXJkcyA/IFwiMFwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgQGlyb24tYWN0aXZhdGU9JHt0aGlzLl9oYW5kbGVTZWxlY3RlZENhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLXRhYj5cbiAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cImhhc3M6cGx1c1wiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgIDwvcGFwZXItdGFicz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cImVkaXRvclwiPlxuICAgICAgICAgICR7c2VsZWN0ZWQgPCBudW1jYXJkc1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkLW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3RvZ2dsZU1vZGV9XG4gICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0keyF0aGlzLl9ndWlNb2RlQXZhaWxhYmxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImd1aS1tb2RlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fY2FyZEVkaXRvckVsIHx8IHRoaXMuX0dVSW1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLnNob3dfY29kZV9lZGl0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuc2hvd192aXN1YWxfZWRpdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1vdmUtYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIGNhcmQgYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0ke3NlbGVjdGVkID09PSAwfVxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVNb3ZlfVxuICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1vdmUtYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1vdmUgY2FyZCBhZnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmFycm93LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7c2VsZWN0ZWQgPT09IG51bWNhcmRzIC0gMX1cbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlTW92ZX1cbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlRGVsZXRlQ2FyZH1cbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGh1aS1jYXJkLWVkaXRvclxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9jb25maWcuY2FyZHNbc2VsZWN0ZWRdfVxuICAgICAgICAgICAgICAgICAgLmxvdmVsYWNlPSR7dGhpcy5sb3ZlbGFjZX1cbiAgICAgICAgICAgICAgICAgIEBjb25maWctY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNvbmZpZ0NoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBAR1VJbW9kZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlR1VJTW9kZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgPjwvaHVpLWNhcmQtZWRpdG9yPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgPGh1aS1jYXJkLXBpY2tlclxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAubG92ZWxhY2U9JHt0aGlzLmxvdmVsYWNlfVxuICAgICAgICAgICAgICAgICAgQGNvbmZpZy1jaGFuZ2VkPVwiJHt0aGlzLl9oYW5kbGVDYXJkUGlja2VkfVwiXG4gICAgICAgICAgICAgICAgPjwvaHVpLWNhcmQtcGlja2VyPlxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVTZWxlY3RlZENhcmQoZXYpIHtcbiAgICBpZiAoZXYudGFyZ2V0LmlkID09PSBcImFkZC1jYXJkXCIpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQ2FyZCA9IHRoaXMuX2NvbmZpZyEuY2FyZHMubGVuZ3RoO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZXRNb2RlKHRydWUpO1xuICAgIHRoaXMuX2d1aU1vZGVBdmFpbGFibGUgPSB0cnVlO1xuICAgIHRoaXMuX3NlbGVjdGVkQ2FyZCA9IHBhcnNlSW50KGV2LmRldGFpbC5zZWxlY3RlZCwgMTApO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ29uZmlnQ2hhbmdlZChldjogSEFTU0RvbUV2ZW50PENvbmZpZ0NoYW5nZWRFdmVudD4pIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcuY2FyZHNbdGhpcy5fc2VsZWN0ZWRDYXJkXSA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgdGhpcy5fZ3VpTW9kZUF2YWlsYWJsZSA9IGV2LmRldGFpbC5ndWlNb2RlQXZhaWxhYmxlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDYXJkUGlja2VkKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uZmlnID0gZXYuZGV0YWlsLmNvbmZpZztcbiAgICB0aGlzLl9jb25maWcuY2FyZHMucHVzaChjb25maWcpO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVEZWxldGVDYXJkKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZy5jYXJkcy5zcGxpY2UodGhpcy5fc2VsZWN0ZWRDYXJkLCAxKTtcbiAgICB0aGlzLl9zZWxlY3RlZENhcmQgPSBNYXRoLm1heCgwLCB0aGlzLl9zZWxlY3RlZENhcmQgLSAxKTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTW92ZShldikge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuX3NlbGVjdGVkQ2FyZDtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuaWQgPT09IFwibW92ZS1iZWZvcmVcIiA/IHNvdXJjZSAtIDEgOiBzb3VyY2UgKyAxO1xuICAgIGNvbnN0IGNhcmQgPSB0aGlzLl9jb25maWcuY2FyZHMuc3BsaWNlKHRoaXMuX3NlbGVjdGVkQ2FyZCwgMSlbMF07XG4gICAgdGhpcy5fY29uZmlnLmNhcmRzLnNwbGljZSh0YXJnZXQsIDAsIGNhcmQpO1xuICAgIHRoaXMuX3NlbGVjdGVkQ2FyZCA9IHRhcmdldDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlR1VJTW9kZUNoYW5nZWQoZXY6IEhBU1NEb21FdmVudDxHVUlNb2RlQ2hhbmdlZEV2ZW50Pik6IHZvaWQge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX0dVSW1vZGUgPSBldi5kZXRhaWwuZ3VpTW9kZTtcbiAgICB0aGlzLl9ndWlNb2RlQXZhaWxhYmxlID0gZXYuZGV0YWlsLmd1aU1vZGVBdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhcmRFZGl0b3JFbD8udG9nZ2xlTW9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0TW9kZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX0dVSW1vZGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fY2FyZEVkaXRvckVsKSB7XG4gICAgICB0aGlzLl9jYXJkRWRpdG9yRWwhLkdVSW1vZGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAudG9vbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgLS1wYXBlci10YWItaW5rOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXRhYnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cbiAgICAgICNhZGQtY2FyZCB7XG4gICAgICAgIG1heC13aWR0aDogMzJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgI2NhcmQtb3B0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAjZWRpdG9yIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgI2VkaXRvciB7XG4gICAgICAgICAgbWFyZ2luOiAwIC0xMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ndWktbW9kZS1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXN0YWNrLWNhcmQtZWRpdG9yXCI6IEh1aVN0YWNrQ2FyZEVkaXRvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUlBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUZBO0FBS0E7Ozs7QUFJQTtBQUNBOzs7Ozs7Ozs7QUFTQTs7O0FBSUE7QUFDQTs7O0FBR0E7Ozs7OztBQVVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7OztBQUtBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBekNBOztBQThDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQTlFQTtBQWtGQTtBQTdHQTtBQUFBO0FBQUE7QUFBQTtBQWdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXZIQTtBQUFBO0FBQUE7QUFBQTtBQTBIQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFqSUE7QUFBQTtBQUFBO0FBQUE7QUFvSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTNJQTtBQUFBO0FBQUE7QUFBQTtBQThJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBcEpBO0FBQUE7QUFBQTtBQUFBO0FBdUpBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBaEtBO0FBQUE7QUFBQTtBQUFBO0FBbUtBO0FBQ0E7QUFDQTtBQUNBO0FBdEtBO0FBQUE7QUFBQTtBQUFBO0FBd0tBO0FBQ0E7QUFBQTtBQUNBO0FBMUtBO0FBQUE7QUFBQTtBQUFBO0FBNktBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWpMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0xBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0NBO0FBeE5BO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
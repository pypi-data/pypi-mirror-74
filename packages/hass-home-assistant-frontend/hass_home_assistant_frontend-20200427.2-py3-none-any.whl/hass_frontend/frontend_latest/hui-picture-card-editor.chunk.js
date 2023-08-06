(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-picture-card-editor"],{

/***/ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js ***!
  \******************************************************************************************/
/*! exports provided: IronScrollTargetBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronScrollTargetBehavior", function() { return IronScrollTargetBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */

const IronScrollTargetBehavior = {
  properties: {
    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function () {
        return this._defaultScrollTarget;
      }
    }
  },
  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,
  _scrollTargetChanged: function (scrollTarget, isAttached) {
    var eventTarget;

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);

      this._oldScrollTarget = null;
    }

    if (!isAttached) {
      return;
    } // Support element id references


    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;
    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;
      this.scrollTarget = domHost && domHost.$ ? domHost.$[scrollTarget] : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this.ownerDocument).querySelector('#' + scrollTarget);
    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;

      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop;
    }

    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft;
    }

    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function (leftOrOptions, top) {
    var left;

    if (typeof leftOrOptions === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;

    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth;
    }

    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight;
    }

    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function () {
    return this.scrollTarget instanceof HTMLElement;
  },
  _toggleScrollListener: function (yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;

    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function (yes) {
    this._shouldHaveListener = yes;

    this._toggleScrollListener(yes, this.scrollTarget);
  }
};

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

/***/ "./src/panels/lovelace/editor/config-elements/hui-picture-card-editor.ts":
/*!*******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-picture-card-editor.ts ***!
  \*******************************************************************************/
/*! exports provided: HuiPictureCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPictureCardEditor", function() { return HuiPictureCardEditor; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hui-action-editor */ "./src/panels/lovelace/components/hui-action-editor.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./src/panels/lovelace/editor/types.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");
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









const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_3__["struct"])({
  type: "string",
  image: "string?",
  tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_3__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_6__["actionConfigStruct"]),
  hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_3__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_6__["actionConfigStruct"]),
  theme: "string?"
});
let HuiPictureCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-card-editor")], function (_initialize, _LitElement) {
  class HuiPictureCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiPictureCardEditor,
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
      key: "_image",
      value: function _image() {
        return this._config.image || "";
      }
    }, {
      kind: "get",
      key: "_tap_action",
      value: function _tap_action() {
        return this._config.tap_action || {
          action: "none"
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

        const actions = ["navigate", "url", "call-service", "none"];
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_7__["configElementStyle"]}
      <div class="card-config">
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.image")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .value="${this._image}"
          .configValue="${"image"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
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
          <hui-theme-select-editor
            .hass=${this.hass}
            .value="${this._theme}"
            .configValue="${"theme"}"
            @value-changed="${this._valueChanged}"
          ></hui-theme-select-editor>
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
            this._config = Object.assign({}, this._config, {
              [target.configValue]: target.value ? target.value : target.config
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXBpY3R1cmUtY2FyZC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yL2lyb24tc2Nyb2xsLXRhcmdldC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvY29uZmlnLWVsZW1lbnRzLXN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktcGljdHVyZS1jYXJkLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbiAqIGBQb2x5bWVyLklyb25TY3JvbGxUYXJnZXRCZWhhdmlvcmAgYWxsb3dzIGFuIGVsZW1lbnQgdG8gcmVzcG9uZCB0byBzY3JvbGxcbiAqIGV2ZW50cyBmcm9tIGEgZGVzaWduYXRlZCBzY3JvbGwgdGFyZ2V0LlxuICpcbiAqIEVsZW1lbnRzIHRoYXQgY29uc3VtZSB0aGlzIGJlaGF2aW9yIGNhbiBvdmVycmlkZSB0aGUgYF9zY3JvbGxIYW5kbGVyYFxuICogbWV0aG9kIHRvIGFkZCBsb2dpYyBvbiB0aGUgc2Nyb2xsIGV2ZW50LlxuICpcbiAqIEBkZW1vIGRlbW8vc2Nyb2xsaW5nLXJlZ2lvbi5odG1sIFNjcm9sbGluZyBSZWdpb25cbiAqIEBkZW1vIGRlbW8vZG9jdW1lbnQuaHRtbCBEb2N1bWVudCBFbGVtZW50XG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uU2Nyb2xsVGFyZ2V0QmVoYXZpb3IgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBoYW5kbGUgdGhlIHNjcm9sbCBldmVudFxuICAgICAqIG9uIHRoZSBiZWhhbGYgb2YgdGhlIGN1cnJlbnQgZWxlbWVudC4gVGhpcyBpcyB0eXBpY2FsbHkgYSByZWZlcmVuY2UgdG8gYW5cbiAgICAgKmVsZW1lbnQsIGJ1dCB0aGVyZSBhcmUgYSBmZXcgbW9yZSBwb3NpYmlsaXRpZXM6XG4gICAgICpcbiAgICAgKiAjIyMgRWxlbWVudHMgaWRcbiAgICAgKlxuICAgICAqYGBgaHRtbFxuICAgICAqIDxkaXYgaWQ9XCJzY3JvbGxhYmxlLWVsZW1lbnRcIiBzdHlsZT1cIm92ZXJmbG93OiBhdXRvO1wiPlxuICAgICAqICA8eC1lbGVtZW50IHNjcm9sbC10YXJnZXQ9XCJzY3JvbGxhYmxlLWVsZW1lbnRcIj5cbiAgICAgKiAgICA8IS0tIENvbnRlbnQtLT5cbiAgICAgKiAgPC94LWVsZW1lbnQ+XG4gICAgICogPC9kaXY+XG4gICAgICpgYGBcbiAgICAgKiBJbiB0aGlzIGNhc2UsIHRoZSBgc2Nyb2xsVGFyZ2V0YCB3aWxsIHBvaW50IHRvIHRoZSBvdXRlciBkaXYgZWxlbWVudC5cbiAgICAgKlxuICAgICAqICMjIyBEb2N1bWVudCBzY3JvbGxpbmdcbiAgICAgKlxuICAgICAqIEZvciBkb2N1bWVudCBzY3JvbGxpbmcsIHlvdSBjYW4gdXNlIHRoZSByZXNlcnZlZCB3b3JkIGBkb2N1bWVudGA6XG4gICAgICpcbiAgICAgKmBgYGh0bWxcbiAgICAgKiA8eC1lbGVtZW50IHNjcm9sbC10YXJnZXQ9XCJkb2N1bWVudFwiPlxuICAgICAqICAgPCEtLSBDb250ZW50IC0tPlxuICAgICAqIDwveC1lbGVtZW50PlxuICAgICAqYGBgXG4gICAgICpcbiAgICAgKiAjIyMgRWxlbWVudHMgcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKmBgYGpzXG4gICAgICogYXBwSGVhZGVyLnNjcm9sbFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxhYmxlLWVsZW1lbnQnKTtcbiAgICAgKmBgYFxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBkZWZhdWx0IGRvY3VtZW50XG4gICAgICovXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICB0eXBlOiBIVE1MRWxlbWVudCxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTY3JvbGxUYXJnZXQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydfc2Nyb2xsVGFyZ2V0Q2hhbmdlZChzY3JvbGxUYXJnZXQsIGlzQXR0YWNoZWQpJ10sXG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGV2ZW50IGxpc3RlbmVyIHNob3VsZCBiZSBpbnN0YWxsZWQuXG4gICAqL1xuICBfc2hvdWxkSGF2ZUxpc3RlbmVyOiB0cnVlLFxuXG4gIF9zY3JvbGxUYXJnZXRDaGFuZ2VkOiBmdW5jdGlvbihzY3JvbGxUYXJnZXQsIGlzQXR0YWNoZWQpIHtcbiAgICB2YXIgZXZlbnRUYXJnZXQ7XG5cbiAgICBpZiAodGhpcy5fb2xkU2Nyb2xsVGFyZ2V0KSB7XG4gICAgICB0aGlzLl90b2dnbGVTY3JvbGxMaXN0ZW5lcihmYWxzZSwgdGhpcy5fb2xkU2Nyb2xsVGFyZ2V0KTtcbiAgICAgIHRoaXMuX29sZFNjcm9sbFRhcmdldCA9IG51bGw7XG4gICAgfVxuICAgIGlmICghaXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGVsZW1lbnQgaWQgcmVmZXJlbmNlc1xuICAgIGlmIChzY3JvbGxUYXJnZXQgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0ID0gdGhpcy5fZG9jO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2Nyb2xsVGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGRvbUhvc3QgPSB0aGlzLmRvbUhvc3Q7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0ID0gZG9tSG9zdCAmJiBkb21Ib3N0LiQgP1xuICAgICAgICAgIGRvbUhvc3QuJFtzY3JvbGxUYXJnZXRdIDpcbiAgICAgICAgICBkb20odGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKCcjJyArIHNjcm9sbFRhcmdldCk7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgdGhpcy5fb2xkU2Nyb2xsVGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0O1xuICAgICAgdGhpcy5fdG9nZ2xlU2Nyb2xsTGlzdGVuZXIodGhpcy5fc2hvdWxkSGF2ZUxpc3RlbmVyLCBzY3JvbGxUYXJnZXQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUnVucyBvbiBldmVyeSBzY3JvbGwgZXZlbnQuIENvbnN1bWVyIG9mIHRoaXMgYmVoYXZpb3IgbWF5IG92ZXJyaWRlIHRoaXNcbiAgICogbWV0aG9kLlxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcigpIHt9LFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBzY3JvbGwgdGFyZ2V0LiBDb25zdW1lcnMgb2YgdGhpcyBiZWhhdmlvciBtYXkgd2FudCB0byBjdXN0b21pemVcbiAgICogdGhlIGRlZmF1bHQgc2Nyb2xsIHRhcmdldC5cbiAgICpcbiAgICogQHR5cGUge0VsZW1lbnR9XG4gICAqL1xuICBnZXQgX2RlZmF1bHRTY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvYztcbiAgfSxcblxuICAvKipcbiAgICogU2hvcnRjdXQgZm9yIHRoZSBkb2N1bWVudCBlbGVtZW50XG4gICAqXG4gICAqIEB0eXBlIHtFbGVtZW50fVxuICAgKi9cbiAgZ2V0IF9kb2MoKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IGlzIHNjcm9sbGVkXG4gICAqIHVwd2FyZC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBfc2Nyb2xsVG9wKCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93LnBhZ2VZT2Zmc2V0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGF0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgdG8gdGhlXG4gICAqIGxlZnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgX3Njcm9sbExlZnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cucGFnZVhPZmZzZXQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGF0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWRcbiAgICogdXB3YXJkLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc2V0IF9zY3JvbGxUb3AodG9wKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cucGFnZVhPZmZzZXQsIHRvcCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IHRvcDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IGlzIHNjcm9sbGVkIHRvIHRoZVxuICAgKiBsZWZ0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc2V0IF9zY3JvbGxMZWZ0KGxlZnQpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKGxlZnQsIHdpbmRvdy5wYWdlWU9mZnNldCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgY29udGVudCB0byBhIHBhcnRpY3VsYXIgcGxhY2UuXG4gICAqXG4gICAqIEBtZXRob2Qgc2Nyb2xsXG4gICAqIEBwYXJhbSB7bnVtYmVyfCF7bGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn19IGxlZnRPck9wdGlvbnMgVGhlIGxlZnQgcG9zaXRpb24gb3Igc2Nyb2xsIG9wdGlvbnNcbiAgICogQHBhcmFtIHtudW1iZXI9fSB0b3AgVGhlIHRvcCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2Nyb2xsOiBmdW5jdGlvbihsZWZ0T3JPcHRpb25zLCB0b3ApIHtcbiAgICB2YXIgbGVmdDtcblxuICAgIGlmICh0eXBlb2YgbGVmdE9yT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxlZnQgPSBsZWZ0T3JPcHRpb25zLmxlZnQ7XG4gICAgICB0b3AgPSBsZWZ0T3JPcHRpb25zLnRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IGxlZnRPck9wdGlvbnM7XG4gICAgfVxuXG4gICAgbGVmdCA9IGxlZnQgfHwgMDtcbiAgICB0b3AgPSB0b3AgfHwgMDtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKGxlZnQsIHRvcCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gdG9wO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbCB0YXJnZXQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgX3Njcm9sbFRhcmdldFdpZHRoKCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93LmlubmVyV2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGhlaWdodCBvZiB0aGUgc2Nyb2xsIHRhcmdldC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBfc2Nyb2xsVGFyZ2V0SGVpZ2h0KCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93LmlubmVySGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzY3JvbGwgdGFyZ2V0IGlzIGEgdmFsaWQgSFRNTEVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBfaXNWYWxpZFNjcm9sbFRhcmdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH0sXG5cbiAgX3RvZ2dsZVNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbih5ZXMsIHNjcm9sbFRhcmdldCkge1xuICAgIHZhciBldmVudFRhcmdldCA9IHNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93IDogc2Nyb2xsVGFyZ2V0O1xuICAgIGlmICh5ZXMpIHtcbiAgICAgIGlmICghdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlciA9IHRoaXMuX3Njcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlcikge1xuICAgICAgICBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHllcyBUcnVlIHRvIGFkZCB0aGUgZXZlbnQsIEZhbHNlIHRvIHJlbW92ZSBpdC5cbiAgICovXG4gIHRvZ2dsZVNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbih5ZXMpIHtcbiAgICB0aGlzLl9zaG91bGRIYXZlTGlzdGVuZXIgPSB5ZXM7XG4gICAgdGhpcy5fdG9nZ2xlU2Nyb2xsTGlzdGVuZXIoeWVzLCB0aGlzLnNjcm9sbFRhcmdldCk7XG4gIH1cblxufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ0VsZW1lbnRTdHlsZSA9IGh0bWxgXG4gIDxzdHlsZT5cbiAgICBoYS1zd2l0Y2gge1xuICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cbiAgICAuc2lkZS1ieS1zaWRlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zaWRlLWJ5LXNpZGUgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5zdWZmaXgge1xuICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICB9XG4gIDwvc3R5bGU+XG5gO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGljdHVyZUNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vY2FyZHMvdHlwZXNcIjtcbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLWFjdGlvbi1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZEVkaXRvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgYWN0aW9uQ29uZmlnU3RydWN0LFxuICBFZGl0b3JUYXJnZXQsXG4gIEVudGl0aWVzRWRpdG9yRXZlbnQsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29uZmlnRWxlbWVudFN0eWxlIH0gZnJvbSBcIi4vY29uZmlnLWVsZW1lbnRzLXN0eWxlXCI7XG5cbmNvbnN0IGNhcmRDb25maWdTdHJ1Y3QgPSBzdHJ1Y3Qoe1xuICB0eXBlOiBcInN0cmluZ1wiLFxuICBpbWFnZTogXCJzdHJpbmc/XCIsXG4gIHRhcF9hY3Rpb246IHN0cnVjdC5vcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3QpLFxuICBob2xkX2FjdGlvbjogc3RydWN0Lm9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gIHRoZW1lOiBcInN0cmluZz9cIixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1waWN0dXJlLWNhcmQtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpUGljdHVyZUNhcmRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50XG4gIGltcGxlbWVudHMgTG92ZWxhY2VDYXJkRWRpdG9yIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IFBpY3R1cmVDYXJkQ29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBQaWN0dXJlQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIGNvbmZpZyA9IGNhcmRDb25maWdTdHJ1Y3QoY29uZmlnKTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBnZXQgX2ltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaW1hZ2UgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdGFwX2FjdGlvbigpOiBBY3Rpb25Db25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRhcF9hY3Rpb24gfHwgeyBhY3Rpb246IFwibm9uZVwiIH07XG4gIH1cblxuICBnZXQgX2hvbGRfYWN0aW9uKCk6IEFjdGlvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaG9sZF9hY3Rpb24gfHwgeyBhY3Rpb246IFwibm9uZVwiIH07XG4gIH1cblxuICBnZXQgX3RoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEudGhlbWUgfHwgXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IFtcIm5hdmlnYXRlXCIsIFwidXJsXCIsIFwiY2FsbC1zZXJ2aWNlXCIsIFwibm9uZVwiXTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtjb25maWdFbGVtZW50U3R5bGV9XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb25maWdcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuaW1hZ2VcIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLnJlcXVpcmVkXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5faW1hZ2V9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaW1hZ2VcIn1cIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMudGFwX2FjdGlvblwiXG4gICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgIC5jb25maWc9XCIke3RoaXMuX3RhcF9hY3Rpb259XCJcbiAgICAgICAgICAgIC5hY3Rpb25zPVwiJHthY3Rpb25zfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1widGFwX2FjdGlvblwifVwiXG4gICAgICAgICAgICBAYWN0aW9uLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L2h1aS1hY3Rpb24tZWRpdG9yPlxuICAgICAgICAgIDxodWktYWN0aW9uLWVkaXRvclxuICAgICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5ob2xkX2FjdGlvblwiXG4gICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgIC5jb25maWc9XCIke3RoaXMuX2hvbGRfYWN0aW9ufVwiXG4gICAgICAgICAgICAuYWN0aW9ucz1cIiR7YWN0aW9uc31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImhvbGRfYWN0aW9uXCJ9XCJcbiAgICAgICAgICAgIEBhY3Rpb24tY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLWFjdGlvbi1lZGl0b3I+XG4gICAgICAgICAgPGh1aS10aGVtZS1zZWxlY3QtZWRpdG9yXG4gICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fdGhlbWV9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0aGVtZVwifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRW50aXRpZXNFZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSB8fFxuICAgICAgdGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQuY29uZmlnXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY29uZmlnVmFsdWUpIHtcbiAgICAgIGlmICh0YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbmZpZ1t0YXJnZXQuY29uZmlnVmFsdWUhXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgICAgW3RhcmdldC5jb25maWdWYWx1ZSFdOiB0YXJnZXQudmFsdWUgPyB0YXJnZXQudmFsdWUgOiB0YXJnZXQuY29uZmlnLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktcGljdHVyZS1jYXJkLWVkaXRvclwiOiBIdWlQaWN0dXJlQ2FyZEVkaXRvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FBV0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFyQ0E7QUE2Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFQQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQU9BO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBO0FBQUE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBMUNBO0FBK0NBO0FBakZBO0FBQUE7QUFBQTtBQUFBO0FBb0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTFHQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
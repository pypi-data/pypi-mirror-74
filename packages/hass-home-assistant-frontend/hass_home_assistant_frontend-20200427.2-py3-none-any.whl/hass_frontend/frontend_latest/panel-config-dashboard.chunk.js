(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-dashboard"],{

/***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
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






/**
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@group App Elements
@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,
  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },
  observers: ['resetLayout(isAttached, hasScrollingRegion)'],

  /**
   * A reference to the app-header element.
   *
   * @property header
   */
  get header() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.headerSlot).getDistributedNodes()[0];
  },

  _updateLayoutStates: function () {
    var header = this.header;

    if (!this.isAttached || !header) {
      return;
    } // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.


    this.$.wrapper.classList.remove('initializing'); // Update scroll target.

    header.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).

    var headerHeight = header.offsetHeight; // Update the header position.

    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function () {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    } // Update the content container position.


    var containerStyle = this.$.contentContainer.style;

    if (header.fixed && !header.condenses && this.hasScrollingRegion) {
      // If the header size does not change and we're using a scrolling region,
      // exclude the header area from the scrolling region so that the header
      // doesn't overlap the scrollbar.
      containerStyle.marginTop = headerHeight + 'px';
      containerStyle.paddingTop = '';
    } else {
      containerStyle.paddingTop = headerHeight + 'px';
      containerStyle.marginTop = '';
    }
  }
});

/***/ }),

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

/***/ "./src/components/ha-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
/*! exports provided: HaIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIconNext", function() { return HaIconNext; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
 // Not duplicate, this is for typing.
// eslint-disable-next-line


class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"] {
  connectedCallback() {
    super.connectedCallback(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      this.icon = window.getComputedStyle(this).direction === "ltr" ? "hass:chevron-right" : "hass:chevron-left";
    }, 100);
  }

}
customElements.define("ha-icon-next", HaIconNext);

/***/ }),

/***/ "./src/panels/config/dashboard/ha-config-dashboard.ts":
/*!************************************************************!*\
  !*** ./src/panels/config/dashboard/ha-config-dashboard.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
/* harmony import */ var _ha_config_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ha-config-navigation */ "./src/panels/config/dashboard/ha-config-navigation.ts");
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














let HaConfigDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-config-dashboard")], function (_initialize, _LitElement) {
  class HaConfigDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigDashboard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
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
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <app-header-layout has-scrolling-region>
        <app-header fixed slot="header">
          <app-toolbar>
            <ha-menu-button
              .hass=${this.hass}
              .narrow=${this.narrow}
            ></ha-menu-button>
          </app-toolbar>
        </app-header>

        <ha-config-section .narrow=${this.narrow} .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.header")}
          </div>

          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.introduction")}
          </div>

          ${this.cloudStatus && Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["isComponentLoaded"])(this.hass, "cloud") ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <ha-card>
                  <ha-config-navigation
                    .hass=${this.hass}
                    .showAdvanced=${this.showAdvanced}
                    .pages=${[{
          component: "cloud",
          path: "/config/cloud",
          translationKey: "ui.panel.config.cloud.caption",
          info: this.cloudStatus,
          icon: "hass:cloud-lock"
        }]}
                  ></ha-config-navigation>
                </ha-card>
              ` : ""}
          ${Object.values(_ha_panel_config__WEBPACK_IMPORTED_MODULE_10__["configSections"]).map(section => lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
              <ha-card>
                <ha-config-navigation
                  .hass=${this.hass}
                  .showAdvanced=${this.showAdvanced}
                  .pages=${section}
                ></ha-config-navigation>
              </ha-card>
            `)}
          ${!this.showAdvanced ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <div class="promo-advanced">
                  ${this.hass.localize("ui.panel.config.advanced_mode.hint_enable")}
                  <a href="/profile"
                    >${this.hass.localize("ui.panel.config.advanced_mode.link_profile_page")}</a
                  >.
                </div>
              ` : ""}
        </ha-config-section>
      </app-header-layout>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_8__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        app-header {
          --app-header-background-color: var(--primary-background-color);
        }
        ha-card:last-child {
          margin-bottom: 24px;
        }
        ha-config-section {
          margin-top: -20px;
        }
        ha-card {
          overflow: hidden;
        }
        ha-card a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
        .promo-advanced {
          text-align: center;
          color: var(--secondary-text-color);
          margin-bottom: 24px;
        }
        .promo-advanced a {
          color: var(--secondary-text-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/dashboard/ha-config-navigation.ts":
/*!*************************************************************!*\
  !*** ./src/panels/config/dashboard/ha-config-navigation.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
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









let HaConfigNavigation = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-config-navigation")], function (_initialize, _LitElement) {
  class HaConfigNavigation extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigNavigation,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "pages",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      ${this.pages.map(page => (!page.component || page.core || Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["isComponentLoaded"])(this.hass, page.component)) && (!page.advancedOnly || this.showAdvanced) ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
              <a
                href=${`/config/${page.component}`}
                aria-role="option"
                tabindex="-1"
              >
                <paper-icon-item>
                  <ha-icon .icon=${page.icon} slot="item-icon"></ha-icon>
                  <paper-item-body two-line>
                    ${this.hass.localize(page.translationKey || `ui.panel.config.${page.component}.caption`)}
                    ${page.component === "cloud" && page.info ? page.info.logged_in ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                            <div secondary>
                              ${this.hass.localize("ui.panel.config.cloud.description_login", "email", page.info.email)}
                            </div>
                          ` : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                            <div secondary>
                              ${this.hass.localize("ui.panel.config.cloud.description_features")}
                            </div>
                          ` : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                          <div secondary>
                            ${this.hass.localize(`ui.panel.config.${page.component}.description`)}
                          </div>
                        `}
                  </paper-item-body>
                  <ha-icon-next></ha-icon-next>
                </paper-icon-item>
              </a>
            ` : "")}
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
      a {
        text-decoration: none;
        color: var(--primary-text-color);
        position: relative;
        display: block;
        outline: 0;
      }
      ha-icon,
      ha-icon-next {
        color: var(--secondary-text-color);
      }
      .iron-selected paper-item::before,
      a:not(.iron-selected):focus::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        transition: opacity 15ms linear;
        will-change: opacity;
      }
      a:not(.iron-selected):focus::before {
        background-color: currentColor;
        opacity: var(--dark-divider-opacity);
      }
      .iron-selected paper-item:focus::before,
      .iron-selected:focus paper-item::before {
        opacity: 0.2;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWRhc2hib2FyZC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLW5leHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZGFzaGJvYXJkL2hhLWNvbmZpZy1kYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZGFzaGJvYXJkL2hhLWNvbmZpZy1uYXZpZ2F0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge0FwcExheW91dEJlaGF2aW9yfSBmcm9tICcuLi9hcHAtbGF5b3V0LWJlaGF2aW9yL2FwcC1sYXlvdXQtYmVoYXZpb3IuanMnO1xuXG4vKipcbmFwcC1oZWFkZXItbGF5b3V0IGlzIGEgd3JhcHBlciBlbGVtZW50IHRoYXQgcG9zaXRpb25zIGFuIGFwcC1oZWFkZXIgYW5kIG90aGVyXG5jb250ZW50LiBUaGlzIGVsZW1lbnQgdXNlcyB0aGUgZG9jdW1lbnQgc2Nyb2xsIGJ5IGRlZmF1bHQsIGJ1dCBpdCBjYW4gYWxzb1xuZGVmaW5lIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cblxuVXNpbmcgdGhlIGRvY3VtZW50IHNjcm9sbDpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0PlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5Vc2luZyBhbiBvd24gc2Nyb2xsaW5nIHJlZ2lvbjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uIHN0eWxlPVwid2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDQwMHB4O1wiPlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5BZGQgdGhlIGBmdWxsYmxlZWRgIGF0dHJpYnV0ZSB0byBhcHAtaGVhZGVyLWxheW91dCB0byBtYWtlIGl0IGZpdCB0aGUgc2l6ZSBvZlxuaXRzIGNvbnRhaW5lcjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGZ1bGxibGVlZD5cbiAuLi5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuQGdyb3VwIEFwcCBFbGVtZW50c1xuQGVsZW1lbnQgYXBwLWhlYWRlci1sYXlvdXRcbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2ltcGxlLmh0bWwgU2ltcGxlIERlbW9cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2Nyb2xsaW5nLXJlZ2lvbi5odG1sIFNjcm9sbGluZyBSZWdpb25cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vbXVzaWMuaHRtbCBNdXNpYyBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL2Zvb3Rlci5odG1sIEZvb3RlciBEZW1vXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2UgYXBwLWhlYWRlci1sYXlvdXQgdG8gaGF2ZSBpdHMgb3duIHN0YWNraW5nIGNvbnRleHQgc28gdGhhdCBpdHMgcGFyZW50IGNhblxuICAgICAgICAgKiBjb250cm9sIHRoZSBzdGFja2luZyBvZiBpdCByZWxhdGl2ZSB0byBvdGhlciBlbGVtZW50cyAoZS5nLiBhcHAtZHJhd2VyLWxheW91dCkuXG4gICAgICAgICAqIFRoaXMgY291bGQgYmUgZG9uZSB1c2luZyBcXGBpc29sYXRpb246IGlzb2xhdGVcXGAsIGJ1dCB0aGF0J3Mgbm90IHdlbGwgc3VwcG9ydGVkXG4gICAgICAgICAqIGFjcm9zcyBicm93c2Vycy5cbiAgICAgICAgICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpeGVkLXRvcDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkgI3dyYXBwZXIsXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIC8qIENyZWF0ZSBhIHN0YWNraW5nIGNvbnRleHQgaGVyZSBzbyB0aGF0IGFsbCBjaGlsZHJlbiBhcHBlYXIgYmVsb3cgdGhlIGhlYWRlci4gKi9cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgY2xhc3M9XCJpbml0aWFsaXppbmdcIj5cbiAgICAgIDxzbG90IGlkPVwiaGVhZGVyU2xvdFwiIG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ2FwcC1oZWFkZXItbGF5b3V0JyxcbiAgYmVoYXZpb3JzOiBbQXBwTGF5b3V0QmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgY3VycmVudCBlbGVtZW50IHdpbGwgaGF2ZSBpdHMgb3duIHNjcm9sbGluZyByZWdpb24uXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgZG9jdW1lbnQgc2Nyb2xsIHRvIGNvbnRyb2wgdGhlIGhlYWRlci5cbiAgICAgKi9cbiAgICBoYXNTY3JvbGxpbmdSZWdpb246IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsncmVzZXRMYXlvdXQoaXNBdHRhY2hlZCwgaGFzU2Nyb2xsaW5nUmVnaW9uKSddLFxuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgYXBwLWhlYWRlciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJvcGVydHkgaGVhZGVyXG4gICAqL1xuICBnZXQgaGVhZGVyKCkge1xuICAgIHJldHVybiBkb20odGhpcy4kLmhlYWRlclNsb3QpLmdldERpc3RyaWJ1dGVkTm9kZXMoKVswXTtcbiAgfSxcblxuICBfdXBkYXRlTGF5b3V0U3RhdGVzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQgfHwgIWhlYWRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGluaXRpYWxpemluZyBjbGFzcywgd2hpY2ggc3RhdGljbHkgcG9zaXRpb25zIHRoZSBoZWFkZXIgYW5kXG4gICAgLy8gdGhlIGNvbnRlbnQgdW50aWwgdGhlIGhlaWdodCBvZiB0aGUgaGVhZGVyIGNhbiBiZSByZWFkLlxuICAgIHRoaXMuJC53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2luaXRpYWxpemluZycpO1xuICAgIC8vIFVwZGF0ZSBzY3JvbGwgdGFyZ2V0LlxuICAgIGhlYWRlci5zY3JvbGxUYXJnZXQgPSB0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbiA/XG4gICAgICAgIHRoaXMuJC5jb250ZW50Q29udGFpbmVyIDpcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAvLyBHZXQgaGVhZGVyIGhlaWdodCBoZXJlIHNvIHRoYXQgc3R5bGUgcmVhZHMgYXJlIGJhdGNoZWQgdG9nZXRoZXIgYmVmb3JlXG4gICAgLy8gc3R5bGUgd3JpdGVzIChpLmUuIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGJlbG93KS5cbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gaGVhZGVyLm9mZnNldEhlaWdodDtcbiAgICAvLyBVcGRhdGUgdGhlIGhlYWRlciBwb3NpdGlvbi5cbiAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHJpZ2h0T2Zmc2V0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gcmVjdC5yaWdodDtcbiAgICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSByZWN0LmxlZnQgKyAncHgnO1xuICAgICAgICBoZWFkZXIuc3R5bGUucmlnaHQgPSByaWdodE9mZnNldCArICdweCc7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgaGVhZGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgfVxuICAgIC8vIFVwZGF0ZSB0aGUgY29udGVudCBjb250YWluZXIgcG9zaXRpb24uXG4gICAgdmFyIGNvbnRhaW5lclN0eWxlID0gdGhpcy4kLmNvbnRlbnRDb250YWluZXIuc3R5bGU7XG4gICAgaWYgKGhlYWRlci5maXhlZCAmJiAhaGVhZGVyLmNvbmRlbnNlcyAmJiB0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbikge1xuICAgICAgLy8gSWYgdGhlIGhlYWRlciBzaXplIGRvZXMgbm90IGNoYW5nZSBhbmQgd2UncmUgdXNpbmcgYSBzY3JvbGxpbmcgcmVnaW9uLFxuICAgICAgLy8gZXhjbHVkZSB0aGUgaGVhZGVyIGFyZWEgZnJvbSB0aGUgc2Nyb2xsaW5nIHJlZ2lvbiBzbyB0aGF0IHRoZSBoZWFkZXJcbiAgICAgIC8vIGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgc2Nyb2xsYmFyLlxuICAgICAgY29udGFpbmVyU3R5bGUubWFyZ2luVG9wID0gaGVhZGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCA9IGhlYWRlckhlaWdodCArICdweCc7XG4gICAgICBjb250YWluZXJTdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhSWNvbiB9IGZyb20gXCIuL2hhLWljb25cIjtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbk5leHQgZXh0ZW5kcyBIYUljb24ge1xuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaWNvbiA9XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICAgID8gXCJoYXNzOmNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgIDogXCJoYXNzOmNoZXZyb24tbGVmdFwiO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb24tbmV4dFwiOiBIYUljb25OZXh0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb24tbmV4dFwiLCBIYUljb25OZXh0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgaXNDb21wb25lbnRMb2FkZWQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1cyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgeyBjb25maWdTZWN0aW9ucyB9IGZyb20gXCIuLi9oYS1wYW5lbC1jb25maWdcIjtcbmltcG9ydCBcIi4vaGEtY29uZmlnLW5hdmlnYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctZGFzaGJvYXJkXCIpXG5jbGFzcyBIYUNvbmZpZ0Rhc2hib2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGNsb3VkU3RhdHVzPzogQ2xvdWRTdGF0dXM7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHNob3dBZHZhbmNlZCE6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIGZpeGVkIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtbWVudS1idXR0b25cbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLm5hcnJvdz0ke3RoaXMubmFycm93fSAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuaGVhZGVyXCIpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5pbnRyb2R1Y3Rpb25cIil9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke3RoaXMuY2xvdWRTdGF0dXMgJiYgaXNDb21wb25lbnRMb2FkZWQodGhpcy5oYXNzLCBcImNsb3VkXCIpXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICAgICAgICA8aGEtY29uZmlnLW5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgIC5zaG93QWR2YW5jZWQ9JHt0aGlzLnNob3dBZHZhbmNlZH1cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2VzPSR7W1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJjbG91ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvY29uZmlnL2Nsb3VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbktleTogXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuY2FwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbzogdGhpcy5jbG91ZFN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiaGFzczpjbG91ZC1sb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgID48L2hhLWNvbmZpZy1uYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7T2JqZWN0LnZhbHVlcyhjb25maWdTZWN0aW9ucykubWFwKFxuICAgICAgICAgICAgKHNlY3Rpb24pID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgICAgIDxoYS1jb25maWctbmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAuc2hvd0FkdmFuY2VkPSR7dGhpcy5zaG93QWR2YW5jZWR9XG4gICAgICAgICAgICAgICAgICAucGFnZXM9JHtzZWN0aW9ufVxuICAgICAgICAgICAgICAgID48L2hhLWNvbmZpZy1uYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgICAkeyF0aGlzLnNob3dBZHZhbmNlZFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9tby1hZHZhbmNlZFwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmFkdmFuY2VkX21vZGUuaGludF9lbmFibGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hZHZhbmNlZF9tb2RlLmxpbmtfcHJvZmlsZV9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgKX08L2FcbiAgICAgICAgICAgICAgICAgID4uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgYXBwLWhlYWRlciB7XG4gICAgICAgICAgLS1hcHAtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaGEtY2FyZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLWNvbmZpZy1zZWN0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGhhLWNhcmQgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9tby1hZHZhbmNlZCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAucHJvbW8tYWR2YW5jZWQgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb25maWctZGFzaGJvYXJkXCI6IEhhQ29uZmlnRGFzaGJvYXJkO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgaXNDb21wb25lbnRMb2FkZWQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1cywgQ2xvdWRTdGF0dXNMb2dnZWRJbiB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBQYWdlTmF2aWdhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29uZmlnLW5hdmlnYXRpb25cIilcbmNsYXNzIEhhQ29uZmlnTmF2aWdhdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHNob3dBZHZhbmNlZCE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHBhZ2VzITogUGFnZU5hdmlnYXRpb25bXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5wYWdlcy5tYXAoKHBhZ2UpID0+XG4gICAgICAgICghcGFnZS5jb21wb25lbnQgfHxcbiAgICAgICAgICBwYWdlLmNvcmUgfHxcbiAgICAgICAgICBpc0NvbXBvbmVudExvYWRlZCh0aGlzLmhhc3MsIHBhZ2UuY29tcG9uZW50KSkgJiZcbiAgICAgICAgKCFwYWdlLmFkdmFuY2VkT25seSB8fCB0aGlzLnNob3dBZHZhbmNlZClcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0ke2AvY29uZmlnLyR7cGFnZS5jb21wb25lbnR9YH1cbiAgICAgICAgICAgICAgICBhcmlhLXJvbGU9XCJvcHRpb25cIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICAgIDxoYS1pY29uIC5pY29uPSR7cGFnZS5pY29ufSBzbG90PVwiaXRlbS1pY29uXCI+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgcGFnZS50cmFuc2xhdGlvbktleSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy4ke3BhZ2UuY29tcG9uZW50fS5jYXB0aW9uYFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAke3BhZ2UuY29tcG9uZW50ID09PSBcImNsb3VkXCIgJiYgKHBhZ2UuaW5mbyBhcyBDbG91ZFN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICA/IHBhZ2UuaW5mby5sb2dnZWRfaW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5kZXNjcmlwdGlvbl9sb2dpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlLmluZm8gYXMgQ2xvdWRTdGF0dXNMb2dnZWRJbikuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5kZXNjcmlwdGlvbl9mZWF0dXJlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuJHtwYWdlLmNvbXBvbmVudH0uZGVzY3JpcHRpb25gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICA8aGEtaWNvbi1uZXh0PjwvaGEtaWNvbi1uZXh0PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwiXG4gICAgICApfVxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgIH1cbiAgICAgIGhhLWljb24sXG4gICAgICBoYS1pY29uLW5leHQge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgLmlyb24tc2VsZWN0ZWQgcGFwZXItaXRlbTo6YmVmb3JlLFxuICAgICAgYTpub3QoLmlyb24tc2VsZWN0ZWQpOmZvY3VzOjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTVtcyBsaW5lYXI7XG4gICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAgICAgfVxuICAgICAgYTpub3QoLmlyb24tc2VsZWN0ZWQpOmZvY3VzOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstZGl2aWRlci1vcGFjaXR5KTtcbiAgICAgIH1cbiAgICAgIC5pcm9uLXNlbGVjdGVkIHBhcGVyLWl0ZW06Zm9jdXM6OmJlZm9yZSxcbiAgICAgIC5pcm9uLXNlbGVjdGVkOmZvY3VzIHBhcGVyLWl0ZW06OmJlZm9yZSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb25maWctbmF2aWdhdGlvblwiOiBIYUNvbmZpZ05hdmlnYXRpb247XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBZ0ZBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0lBOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE0QkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFaQTtBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7Ozs7QUFJQTs7O0FBR0E7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7O0FBUEE7QUFtQkE7OztBQUlBO0FBQ0E7QUFDQTs7O0FBTkE7QUFXQTs7QUFHQTs7QUFJQTs7O0FBUEE7OztBQWxEQTtBQW1FQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2QkE7OztBQS9HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBT0E7Ozs7O0FBS0E7O0FBRUE7QUFJQTs7QUFJQTs7QUFIQTs7QUFZQTs7QUFiQTs7QUFvQkE7O0FBSUE7Ozs7O0FBekNBO0FBRkE7QUFvREE7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlDQTs7O0FBaEdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-lovelace~panel-shopping-list"],{

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

/***/ "./node_modules/@polymer/paper-item/paper-item-behavior.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-behavior.js ***!
  \*****************************************************************/
/*! exports provided: PaperItemBehaviorImpl, PaperItemBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehaviorImpl", function() { return PaperItemBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehavior", function() { return PaperItemBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
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
`PaperItemBehavior` is a convenience behavior shared by <paper-item> and
<paper-icon-item> that manages the shared control states and attributes of
the items.
*/

/** @polymerBehavior PaperItemBehavior */

const PaperItemBehaviorImpl = {
  hostAttributes: {
    role: 'option',
    tabindex: '0'
  }
};
/** @polymerBehavior */

const PaperItemBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], PaperItemBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-shared-styles.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
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




const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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
Material design:
[Lists](https://www.google.com/design/spec/components/lists.html)

`<paper-item>` is an interactive list item. By default, it is a horizontal
flexbox.

    <paper-item>Item</paper-item>

Use this element with `<paper-item-body>` to make Material Design styled
two-line and three-line items.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
      <iron-icon icon="warning"></iron-icon>
    </paper-item>

To use `paper-item` as a link, wrap it in an anchor tag. Since `paper-item` will
already receive focus, you may want to prevent the anchor tag from receiving
focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org/" tabindex="-1">
      <paper-item raised>Polymer Project</paper-item>
    </a>

If you are concerned about performance and want to use `paper-item` in a
`paper-listbox` with many items, you can just use a native `button` with the
`paper-item` class applied (provided you have correctly included the shared
styles):

    <style is="custom-style" include="paper-item-shared-styles"></style>

    <paper-listbox>
      <button class="paper-item" role="option">Inbox</button>
      <button class="paper-item" role="option">Starred</button>
      <button class="paper-item" role="option">Sent mail</button>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-min-height` | Minimum height of the item | `48px`
`--paper-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

### Accessibility

This element has `role="listitem"` by default. Depending on usage, it may be
more appropriate to set `role="menuitem"`, `role="menuitemcheckbox"` or
`role="menuitemradio"`.

    <paper-item role="menuitemcheckbox">
      <paper-item-body>
        Show your status
      </paper-item-body>
      <paper-checkbox></paper-checkbox>
    </paper-item>

@group Paper Elements
@element paper-item
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,
  is: 'paper-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperItemBehavior"]]
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zaG9wcGluZy1saXN0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtBcHBMYXlvdXRCZWhhdmlvcn0gZnJvbSAnLi4vYXBwLWxheW91dC1iZWhhdmlvci9hcHAtbGF5b3V0LWJlaGF2aW9yLmpzJztcblxuLyoqXG5hcHAtaGVhZGVyLWxheW91dCBpcyBhIHdyYXBwZXIgZWxlbWVudCB0aGF0IHBvc2l0aW9ucyBhbiBhcHAtaGVhZGVyIGFuZCBvdGhlclxuY29udGVudC4gVGhpcyBlbGVtZW50IHVzZXMgdGhlIGRvY3VtZW50IHNjcm9sbCBieSBkZWZhdWx0LCBidXQgaXQgY2FuIGFsc29cbmRlZmluZSBpdHMgb3duIHNjcm9sbGluZyByZWdpb24uXG5cblVzaW5nIHRoZSBkb2N1bWVudCBzY3JvbGw6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dD5cbiAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkIGNvbmRlbnNlcyBlZmZlY3RzPVwid2F0ZXJmYWxsXCI+XG4gICAgPGFwcC10b29sYmFyPlxuICAgICAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gICAgPC9hcHAtdG9vbGJhcj5cbiAgPC9hcHAtaGVhZGVyPlxuICA8ZGl2PlxuICAgIG1haW4gY29udGVudFxuICA8L2Rpdj5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuVXNpbmcgYW4gb3duIHNjcm9sbGluZyByZWdpb246XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbiBzdHlsZT1cIndpZHRoOiAzMDBweDsgaGVpZ2h0OiA0MDBweDtcIj5cbiAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkIGNvbmRlbnNlcyBlZmZlY3RzPVwid2F0ZXJmYWxsXCI+XG4gICAgPGFwcC10b29sYmFyPlxuICAgICAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gICAgPC9hcHAtdG9vbGJhcj5cbiAgPC9hcHAtaGVhZGVyPlxuICA8ZGl2PlxuICAgIG1haW4gY29udGVudFxuICA8L2Rpdj5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuQWRkIHRoZSBgZnVsbGJsZWVkYCBhdHRyaWJ1dGUgdG8gYXBwLWhlYWRlci1sYXlvdXQgdG8gbWFrZSBpdCBmaXQgdGhlIHNpemUgb2Zcbml0cyBjb250YWluZXI6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dCBmdWxsYmxlZWQ+XG4gLi4uXG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cbkBncm91cCBBcHAgRWxlbWVudHNcbkBlbGVtZW50IGFwcC1oZWFkZXItbGF5b3V0XG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL3NpbXBsZS5odG1sIFNpbXBsZSBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL3Njcm9sbGluZy1yZWdpb24uaHRtbCBTY3JvbGxpbmcgUmVnaW9uXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL211c2ljLmh0bWwgTXVzaWMgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9mb290ZXIuaHRtbCBGb290ZXIgRGVtb1xuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXhlZC10b3A7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyLFxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAvKiBDcmVhdGUgYSBzdGFja2luZyBjb250ZXh0IGhlcmUgc28gdGhhdCBhbGwgY2hpbGRyZW4gYXBwZWFyIGJlbG93IHRoZSBoZWFkZXIuICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwid3JhcHBlclwiIGNsYXNzPVwiaW5pdGlhbGl6aW5nXCI+XG4gICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdhcHAtaGVhZGVyLWxheW91dCcsXG4gIGJlaGF2aW9yczogW0FwcExheW91dEJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGN1cnJlbnQgZWxlbWVudCB3aWxsIGhhdmUgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGRvY3VtZW50IHNjcm9sbCB0byBjb250cm9sIHRoZSBoZWFkZXIuXG4gICAgICovXG4gICAgaGFzU2Nyb2xsaW5nUmVnaW9uOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ3Jlc2V0TGF5b3V0KGlzQXR0YWNoZWQsIGhhc1Njcm9sbGluZ1JlZ2lvbiknXSxcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGFwcC1oZWFkZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByb3BlcnR5IGhlYWRlclxuICAgKi9cbiAgZ2V0IGhlYWRlcigpIHtcbiAgICByZXR1cm4gZG9tKHRoaXMuJC5oZWFkZXJTbG90KS5nZXREaXN0cmlidXRlZE5vZGVzKClbMF07XG4gIH0sXG5cbiAgX3VwZGF0ZUxheW91dFN0YXRlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkIHx8ICFoZWFkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsaXppbmcgY2xhc3MsIHdoaWNoIHN0YXRpY2x5IHBvc2l0aW9ucyB0aGUgaGVhZGVyIGFuZFxuICAgIC8vIHRoZSBjb250ZW50IHVudGlsIHRoZSBoZWlnaHQgb2YgdGhlIGhlYWRlciBjYW4gYmUgcmVhZC5cbiAgICB0aGlzLiQud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbml0aWFsaXppbmcnKTtcbiAgICAvLyBVcGRhdGUgc2Nyb2xsIHRhcmdldC5cbiAgICBoZWFkZXIuc2Nyb2xsVGFyZ2V0ID0gdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24gP1xuICAgICAgICB0aGlzLiQuY29udGVudENvbnRhaW5lciA6XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgLy8gR2V0IGhlYWRlciBoZWlnaHQgaGVyZSBzbyB0aGF0IHN0eWxlIHJlYWRzIGFyZSBiYXRjaGVkIHRvZ2V0aGVyIGJlZm9yZVxuICAgIC8vIHN0eWxlIHdyaXRlcyAoaS5lLiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBiZWxvdykuXG4gICAgdmFyIGhlYWRlckhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gVXBkYXRlIHRoZSBoZWFkZXIgcG9zaXRpb24uXG4gICAgaWYgKCF0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciByaWdodE9mZnNldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIHJlY3QucmlnaHQ7XG4gICAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJpZ2h0ID0gcmlnaHRPZmZzZXQgKyAncHgnO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIGNvbnRlbnQgY29udGFpbmVyIHBvc2l0aW9uLlxuICAgIHZhciBjb250YWluZXJTdHlsZSA9IHRoaXMuJC5jb250ZW50Q29udGFpbmVyLnN0eWxlO1xuICAgIGlmIChoZWFkZXIuZml4ZWQgJiYgIWhlYWRlci5jb25kZW5zZXMgJiYgdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIC8vIElmIHRoZSBoZWFkZXIgc2l6ZSBkb2VzIG5vdCBjaGFuZ2UgYW5kIHdlJ3JlIHVzaW5nIGEgc2Nyb2xsaW5nIHJlZ2lvbixcbiAgICAgIC8vIGV4Y2x1ZGUgdGhlIGhlYWRlciBhcmVhIGZyb20gdGhlIHNjcm9sbGluZyByZWdpb24gc28gdGhhdCB0aGUgaGVhZGVyXG4gICAgICAvLyBkb2Vzbid0IG92ZXJsYXAgdGhlIHNjcm9sbGJhci5cbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9IGhlYWRlckhlaWdodCArICdweCc7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcblxuLypcbmBQYXBlckl0ZW1CZWhhdmlvcmAgaXMgYSBjb252ZW5pZW5jZSBiZWhhdmlvciBzaGFyZWQgYnkgPHBhcGVyLWl0ZW0+IGFuZFxuPHBhcGVyLWljb24taXRlbT4gdGhhdCBtYW5hZ2VzIHRoZSBzaGFyZWQgY29udHJvbCBzdGF0ZXMgYW5kIGF0dHJpYnV0ZXMgb2ZcbnRoZSBpdGVtcy5cbiovXG4vKiogQHBvbHltZXJCZWhhdmlvciBQYXBlckl0ZW1CZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySXRlbUJlaGF2aW9ySW1wbCA9IHtcbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnb3B0aW9uJywgdGFiaW5kZXg6ICcwJ31cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3IgPVxuICAgIFtJcm9uQnV0dG9uU3RhdGUsIElyb25Db250cm9sU3RhdGUsIFBhcGVySXRlbUJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QsIC5wYXBlci1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCA0OHB4KTtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5wYXBlci1pdGVtIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSksIC5wYXBlci1pdGVtW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5pcm9uLXNlbGVjdGVkKSwgLnBhcGVyLWl0ZW0uaXJvbi1zZWxlY3RlZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodCwgYm9sZCk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1zZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSksIC5wYXBlci1pdGVtW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yLCB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKSwgLnBhcGVyLWl0ZW06Zm9jdXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1mb2N1c2VkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6Zm9jdXMpOmJlZm9yZSwgLnBhcGVyLWl0ZW06Zm9jdXM6YmVmb3JlIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLWRpdmlkZXItb3BhY2l0eSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bTGlzdHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9saXN0cy5odG1sKVxuXG5gPHBhcGVyLWl0ZW0+YCBpcyBhbiBpbnRlcmFjdGl2ZSBsaXN0IGl0ZW0uIEJ5IGRlZmF1bHQsIGl0IGlzIGEgaG9yaXpvbnRhbFxuZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPkl0ZW08L3BhcGVyLWl0ZW0+XG5cblVzZSB0aGlzIGVsZW1lbnQgd2l0aCBgPHBhcGVyLWl0ZW0tYm9keT5gIHRvIG1ha2UgTWF0ZXJpYWwgRGVzaWduIHN0eWxlZFxudHdvLWxpbmUgYW5kIHRocmVlLWxpbmUgaXRlbXMuXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cIndhcm5pbmdcIj48L2lyb24taWNvbj5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRvIHVzZSBgcGFwZXItaXRlbWAgYXMgYSBsaW5rLCB3cmFwIGl0IGluIGFuIGFuY2hvciB0YWcuIFNpbmNlIGBwYXBlci1pdGVtYCB3aWxsXG5hbHJlYWR5IHJlY2VpdmUgZm9jdXMsIHlvdSBtYXkgd2FudCB0byBwcmV2ZW50IHRoZSBhbmNob3IgdGFnIGZyb20gcmVjZWl2aW5nXG5mb2N1cyBhcyB3ZWxsIGJ5IHNldHRpbmcgaXRzIHRhYmluZGV4IHRvIC0xLlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgPHBhcGVyLWl0ZW0gcmFpc2VkPlBvbHltZXIgUHJvamVjdDwvcGFwZXItaXRlbT5cbiAgICA8L2E+XG5cbklmIHlvdSBhcmUgY29uY2VybmVkIGFib3V0IHBlcmZvcm1hbmNlIGFuZCB3YW50IHRvIHVzZSBgcGFwZXItaXRlbWAgaW4gYVxuYHBhcGVyLWxpc3Rib3hgIHdpdGggbWFueSBpdGVtcywgeW91IGNhbiBqdXN0IHVzZSBhIG5hdGl2ZSBgYnV0dG9uYCB3aXRoIHRoZVxuYHBhcGVyLWl0ZW1gIGNsYXNzIGFwcGxpZWQgKHByb3ZpZGVkIHlvdSBoYXZlIGNvcnJlY3RseSBpbmNsdWRlZCB0aGUgc2hhcmVkXG5zdHlsZXMpOlxuXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgICA8cGFwZXItbGlzdGJveD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPkluYm94PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TdGFycmVkPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TZW50IG1haWw8L2J1dHRvbj5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgdGhlIGl0ZW0gfCBgNDhweGBcbmAtLXBhcGVyLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuVGhpcyBlbGVtZW50IGhhcyBgcm9sZT1cImxpc3RpdGVtXCJgIGJ5IGRlZmF1bHQuIERlcGVuZGluZyBvbiB1c2FnZSwgaXQgbWF5IGJlXG5tb3JlIGFwcHJvcHJpYXRlIHRvIHNldCBgcm9sZT1cIm1lbnVpdGVtXCJgLCBgcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcImAgb3JcbmByb2xlPVwibWVudWl0ZW1yYWRpb1wiYC5cblxuICAgIDxwYXBlci1pdGVtIHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCI+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICBTaG93IHlvdXIgc3RhdHVzXG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDxwYXBlci1jaGVja2JveD48L3BhcGVyLWNoZWNrYm94PlxuICAgIDwvcGFwZXItaXRlbT5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1pdGVtXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBZ0ZBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0lBOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0RBOzs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTtBQUNBOzs7Ozs7Ozs7OztBQURBO0FBY0E7QUFDQTtBQWZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
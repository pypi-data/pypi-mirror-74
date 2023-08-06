(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-zha-device-info"],{

/***/ "./node_modules/@polymer/iron-icon/iron-icon.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-icon/iron-icon.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "@polymer/iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "@polymer/iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,
  is: 'iron-icon',
  properties: {
    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {
      type: String
    },

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {
      type: String
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {
      type: String
    },

    /**
     * @type {!IronMeta}
     */
    _meta: {
      value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__["Base"].create('iron-meta', {
        type: 'iconset'
      })
    }
  },
  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],
  _DEFAULT_ICONSET: 'icons',
  _iconChanged: function (icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

    this._updateIcon();
  },
  _srcChanged: function (src) {
    this._updateIcon();
  },
  _usesIconset: function () {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function () {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).removeChild(this._img);
      }

      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset =
        /** @type {?Polymer.Iconset} */
        this._meta.byKey(this._iconsetName);

        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);

          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }

      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }

      this._img.src = this.src;
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).appendChild(this._img);
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,
  is: 'paper-dialog-scrollable',
  properties: {
    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {
      type: Object
    }
  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function () {
    this._ensureTarget();

    this.classList.add('no-padding');
  },
  attached: function () {
    this._ensureTarget();

    requestAnimationFrame(this.updateScrollState.bind(this));
  },
  updateScrollState: function () {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass('can-scroll', this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass('scrolled-to-bottom', this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >= this.scrollTarget.scrollHeight);
  },
  _ensureTarget: function () {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.

    if (this.dialogElement && this.dialogElement.behaviors && this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
      this.dialogElement.sizingTarget = this.scrollTarget;
      this.scrollTarget.classList.remove('fit');
    } else if (this.dialogElement) {
      this.scrollTarget.classList.add('fit');
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

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-item-body'
});

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

/***/ }),

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
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






const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ }),

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(value => part => {
  if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
    if (value !== part.value) {
      const name = part.committer.name;
      part.committer.element.removeAttribute(name);
    }
  } else {
    part.setValue(value);
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctemhhLWRldmljZS1pbmZvLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuXG5pbXBvcnQge0lyb25NZXRhfSBmcm9tICdAcG9seW1lci9pcm9uLW1ldGEvaXJvbi1tZXRhLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7QmFzZX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuXG5UaGUgYGlyb24taWNvbmAgZWxlbWVudCBkaXNwbGF5cyBhbiBpY29uLiBCeSBkZWZhdWx0IGFuIGljb24gcmVuZGVycyBhcyBhIDI0cHhcbnNxdWFyZS5cblxuRXhhbXBsZSB1c2luZyBzcmM6XG5cbiAgICA8aXJvbi1pY29uIHNyYz1cInN0YXIucG5nXCI+PC9pcm9uLWljb24+XG5cbkV4YW1wbGUgc2V0dGluZyBzaXplIHRvIDMycHggeCAzMnB4OlxuXG4gICAgPGlyb24taWNvbiBjbGFzcz1cImJpZ1wiIHNyYz1cImJpZ19zdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCI+XG4gICAgICAuYmlnIHtcbiAgICAgICAgLS1pcm9uLWljb24taGVpZ2h0OiAzMnB4O1xuICAgICAgICAtLWlyb24taWNvbi13aWR0aDogMzJweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG5UaGUgaXJvbiBlbGVtZW50cyBpbmNsdWRlIHNldmVyYWwgc2V0cyBvZiBpY29ucy4gVG8gdXNlIHRoZSBkZWZhdWx0IHNldCBvZlxuaWNvbnMsIGltcG9ydCBgaXJvbi1pY29ucy5qc2AgYW5kIHVzZSB0aGUgYGljb25gIGF0dHJpYnV0ZSB0byBzcGVjaWZ5IGFuIGljb246XG5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cbiAgICAgIGltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbnMvaXJvbi1pY29ucy5qc1wiO1xuICAgIDwvc2NyaXB0PlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwibWVudVwiPjwvaXJvbi1pY29uPlxuXG5UbyB1c2UgYSBkaWZmZXJlbnQgYnVpbHQtaW4gc2V0IG9mIGljb25zLCBpbXBvcnQgdGhlIHNwZWNpZmljXG5gaXJvbi1pY29ucy88aWNvbnNldD4taWNvbnMuanNgLCBhbmQgc3BlY2lmeSB0aGUgaWNvbiBhcyBgPGljb25zZXQ+OjxpY29uPmAuXG5Gb3IgZXhhbXBsZSwgdG8gdXNlIGEgY29tbXVuaWNhdGlvbiBpY29uLCB5b3Ugd291bGQgdXNlOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2NvbW11bmljYXRpb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cImNvbW11bmljYXRpb246ZW1haWxcIj48L2lyb24taWNvbj5cblxuWW91IGNhbiBhbHNvIGNyZWF0ZSBjdXN0b20gaWNvbiBzZXRzIG9mIGJpdG1hcCBvciBTVkcgaWNvbnMuXG5cbkV4YW1wbGUgb2YgdXNpbmcgYW4gaWNvbiBuYW1lZCBgY2hlcnJ5YCBmcm9tIGEgY3VzdG9tIGljb25zZXQgd2l0aCB0aGUgSURcbmBmcnVpdGA6XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJmcnVpdDpjaGVycnlcIj48L2lyb24taWNvbj5cblxuU2VlIGA8aXJvbi1pY29uc2V0PmAgYW5kIGA8aXJvbi1pY29uc2V0LXN2Zz5gIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0b1xuY3JlYXRlIGEgY3VzdG9tIGljb25zZXQuXG5cblNlZSB0aGUgYGlyb24taWNvbnNgIGRlbW8gdG8gc2VlIHRoZSBpY29ucyBhdmFpbGFibGUgaW4gdGhlIHZhcmlvdXMgaWNvbnNldHMuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0taXJvbi1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gfCB7fVxuYC0taXJvbi1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIHwgYDI0cHhgXG5gLS1pcm9uLWljb24taGVpZ2h0YCB8IEhlaWdodCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWZpbGwtY29sb3JgIHwgRmlsbCBjb2xvciBvZiB0aGUgc3ZnIGljb24gfCBgY3VycmVudGNvbG9yYFxuYC0taXJvbi1pY29uLXN0cm9rZS1jb2xvcmAgfCBTdHJva2UgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgbm9uZVxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGVsZW1lbnQgaXJvbi1pY29uXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG5AaG9tZXBhZ2UgcG9seW1lci5naXRodWIuaW9cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWlubGluZTtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgIGZpbGw6IHZhcigtLWlyb24taWNvbi1maWxsLWNvbG9yLCBjdXJyZW50Y29sb3IpO1xuICAgICAgICBzdHJva2U6IHZhcigtLWlyb24taWNvbi1zdHJva2UtY29sb3IsIG5vbmUpO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1pcm9uLWljb24td2lkdGgsIDI0cHgpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWlyb24taWNvbi1oZWlnaHQsIDI0cHgpO1xuICAgICAgICBAYXBwbHkgLS1pcm9uLWljb247XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbmAsXG5cbiAgaXM6ICdpcm9uLWljb24nLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBpY29uIHRvIHVzZS4gVGhlIG5hbWUgc2hvdWxkIGJlIG9mIHRoZSBmb3JtOlxuICAgICAqIGBpY29uc2V0X25hbWU6aWNvbl9uYW1lYC5cbiAgICAgKi9cbiAgICBpY29uOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0aGVtZSB0byB1c2VkLCBpZiBvbmUgaXMgc3BlY2lmaWVkIGJ5IHRoZVxuICAgICAqIGljb25zZXQuXG4gICAgICovXG4gICAgdGhlbWU6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdXNpbmcgaXJvbi1pY29uIHdpdGhvdXQgYW4gaWNvbnNldCwgeW91IGNhbiBzZXQgdGhlIHNyYyB0byBiZVxuICAgICAqIHRoZSBVUkwgb2YgYW4gaW5kaXZpZHVhbCBpY29uIGltYWdlIGZpbGUuIE5vdGUgdGhhdCB0aGlzIHdpbGwgdGFrZVxuICAgICAqIHByZWNlZGVuY2Ugb3ZlciBhIGdpdmVuIGljb24gYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IUlyb25NZXRhfVxuICAgICAqL1xuICAgIF9tZXRhOiB7dmFsdWU6IEJhc2UuY3JlYXRlKCdpcm9uLW1ldGEnLCB7dHlwZTogJ2ljb25zZXQnfSl9XG5cbiAgfSxcblxuICBvYnNlcnZlcnM6IFtcbiAgICAnX3VwZGF0ZUljb24oX21ldGEsIGlzQXR0YWNoZWQpJyxcbiAgICAnX3VwZGF0ZUljb24odGhlbWUsIGlzQXR0YWNoZWQpJyxcbiAgICAnX3NyY0NoYW5nZWQoc3JjLCBpc0F0dGFjaGVkKScsXG4gICAgJ19pY29uQ2hhbmdlZChpY29uLCBpc0F0dGFjaGVkKSdcbiAgXSxcblxuICBfREVGQVVMVF9JQ09OU0VUOiAnaWNvbnMnLFxuXG4gIF9pY29uQ2hhbmdlZDogZnVuY3Rpb24oaWNvbikge1xuICAgIHZhciBwYXJ0cyA9IChpY29uIHx8ICcnKS5zcGxpdCgnOicpO1xuICAgIHRoaXMuX2ljb25OYW1lID0gcGFydHMucG9wKCk7XG4gICAgdGhpcy5faWNvbnNldE5hbWUgPSBwYXJ0cy5wb3AoKSB8fCB0aGlzLl9ERUZBVUxUX0lDT05TRVQ7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF9zcmNDaGFuZ2VkOiBmdW5jdGlvbihzcmMpIHtcbiAgICB0aGlzLl91cGRhdGVJY29uKCk7XG4gIH0sXG5cbiAgX3VzZXNJY29uc2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pY29uIHx8ICF0aGlzLnNyYztcbiAgfSxcblxuICAvKiogQHN1cHByZXNzIHt2aXNpYmlsaXR5fSAqL1xuICBfdXBkYXRlSWNvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3VzZXNJY29uc2V0KCkpIHtcbiAgICAgIGlmICh0aGlzLl9pbWcgJiYgdGhpcy5faW1nLnBhcmVudE5vZGUpIHtcbiAgICAgICAgZG9tKHRoaXMucm9vdCkucmVtb3ZlQ2hpbGQodGhpcy5faW1nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pY29uTmFtZSA9PT0gJycpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ljb25zZXQpIHtcbiAgICAgICAgICB0aGlzLl9pY29uc2V0LnJlbW92ZUljb24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5faWNvbnNldE5hbWUgJiYgdGhpcy5fbWV0YSkge1xuICAgICAgICB0aGlzLl9pY29uc2V0ID0gLyoqIEB0eXBlIHs/UG9seW1lci5JY29uc2V0fSAqLyAoXG4gICAgICAgICAgICB0aGlzLl9tZXRhLmJ5S2V5KHRoaXMuX2ljb25zZXROYW1lKSk7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5hcHBseUljb24odGhpcywgdGhpcy5faWNvbk5hbWUsIHRoaXMudGhlbWUpO1xuICAgICAgICAgIHRoaXMudW5saXN0ZW4od2luZG93LCAnaXJvbi1pY29uc2V0LWFkZGVkJywgJ191cGRhdGVJY29uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW4od2luZG93LCAnaXJvbi1pY29uc2V0LWFkZGVkJywgJ191cGRhdGVJY29uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2ljb25zZXQpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pbWcpIHtcbiAgICAgICAgdGhpcy5faW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5faW1nLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5faW1nLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5faW1nLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgZG9tKHRoaXMucm9vdCkuYXBwZW5kQ2hpbGQodGhpcy5faW1nKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJEaWFsb2dCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bRGlhbG9nc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2RpYWxvZ3MuaHRtbClcblxuYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpbXBsZW1lbnRzIGEgc2Nyb2xsaW5nIGFyZWEgdXNlZCBpbiBhIE1hdGVyaWFsIERlc2lnblxuZGlhbG9nLiBJdCBzaG93cyBhIGRpdmlkZXIgYXQgdGhlIHRvcCBhbmQvb3IgYm90dG9tIGluZGljYXRpbmcgbW9yZSBjb250ZW50LFxuZGVwZW5kaW5nIG9uIHNjcm9sbCBwb3NpdGlvbi4gVXNlIHRoaXMgdG9nZXRoZXIgd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuSXQgc2hvd3MgYSB0b3AgZGl2aWRlciBhZnRlciBzY3JvbGxpbmcgaWYgaXQgaXMgbm90IHRoZSBmaXJzdCBjaGlsZCBpbiBpdHNcbnBhcmVudCBjb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGFib3ZlLiBJdCBzaG93cyBhIGJvdHRvbVxuZGl2aWRlciBpZiBpdCBpcyBzY3JvbGxhYmxlIGFuZCBpdCBpcyBub3QgdGhlIGxhc3QgY2hpbGQgaW4gaXRzIHBhcmVudFxuY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBiZWxvdy4gVGhlIGJvdHRvbSBkaXZpZGVyIGlzIGhpZGRlblxuaWYgaXQgaXMgc2Nyb2xsZWQgdG8gdGhlIGJvdHRvbS5cblxuSWYgYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpcyBub3QgYSBkaXJlY3QgY2hpbGQgb2YgdGhlIGVsZW1lbnQgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYCwgcmVtZW1iZXIgdG8gc2V0IHRoZSBgZGlhbG9nRWxlbWVudGA6XG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGwgaWQ9XCJteURpYWxvZ1wiPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwibXktY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgIDxoND5TdWItaGVhZGVyPC9oND5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgdmFyIHNjcm9sbGFibGUgPVxuUG9seW1lci5kb20obXlEaWFsb2cpLnF1ZXJ5U2VsZWN0b3IoJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyk7XG4gICAgICBzY3JvbGxhYmxlLmRpYWxvZ0VsZW1lbnQgPSBteURpYWxvZztcbiAgICA8L3NjcmlwdD5cblxuIyMjIFN0eWxpbmdcblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgfCBNaXhpbiBmb3IgdGhlIHNjcm9sbGFibGUgY29udGVudCB8IHt9XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXMtc2Nyb2xsZWQ6bm90KDpmaXJzdC1jaGlsZCkpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5jYW4tc2Nyb2xsOm5vdCguc2Nyb2xsZWQtdG8tYm90dG9tKTpub3QoOmxhc3QtY2hpbGQpKTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuXG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zY3JvbGw7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlO1xuICAgICAgfVxuXG4gICAgICAuZml0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cInNjcm9sbGFibGVcIiBjbGFzcz1cInNjcm9sbGFibGVcIiBvbi1zY3JvbGw9XCJ1cGRhdGVTY3JvbGxTdGF0ZVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlhbG9nIGVsZW1lbnQgdGhhdCBpbXBsZW1lbnRzIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgXG4gICAgICogY29udGFpbmluZyB0aGlzIGVsZW1lbnQuXG4gICAgICogQHR5cGUgez9Ob2RlfVxuICAgICAqL1xuICAgIGRpYWxvZ0VsZW1lbnQ6IHt0eXBlOiBPYmplY3R9XG5cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQuXG4gICAqL1xuICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLiQuc2Nyb2xsYWJsZTtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCduby1wYWRkaW5nJyk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVNjcm9sbFN0YXRlLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIHVwZGF0ZVNjcm9sbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKCdpcy1zY3JvbGxlZCcsIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA+IDApO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdjYW4tc2Nyb2xsJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0IDwgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnc2Nyb2xsZWQtdG8tYm90dG9tJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0ID49XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICB9LFxuXG4gIF9lbnN1cmVUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFJlYWQgcGFyZW50RWxlbWVudCBpbnN0ZWFkIG9mIHBhcmVudE5vZGUgaW4gb3JkZXIgdG8gc2tpcCBzaGFkb3dSb290cy5cbiAgICB0aGlzLmRpYWxvZ0VsZW1lbnQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQgfHwgdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIC8vIENoZWNrIGlmIGRpYWxvZyBpbXBsZW1lbnRzIHBhcGVyLWRpYWxvZy1iZWhhdmlvci4gSWYgbm90LCBmaXRcbiAgICAvLyBzY3JvbGxUYXJnZXQgdG8gaG9zdC5cbiAgICBpZiAodGhpcy5kaWFsb2dFbGVtZW50ICYmIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMgJiZcbiAgICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycy5pbmRleE9mKFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsKSA+PSAwKSB7XG4gICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuc2l6aW5nVGFyZ2V0ID0gdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmaXQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LmFkZCgnZml0Jyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG4vKlxuYFBhcGVySXRlbUJlaGF2aW9yYCBpcyBhIGNvbnZlbmllbmNlIGJlaGF2aW9yIHNoYXJlZCBieSA8cGFwZXItaXRlbT4gYW5kXG48cGFwZXItaWNvbi1pdGVtPiB0aGF0IG1hbmFnZXMgdGhlIHNoYXJlZCBjb250cm9sIHN0YXRlcyBhbmQgYXR0cmlidXRlcyBvZlxudGhlIGl0ZW1zLlxuKi9cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySXRlbUJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3JJbXBsID0ge1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdvcHRpb24nLCB0YWJpbmRleDogJzAnfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvciA9XG4gICAgW0lyb25CdXR0b25TdGF0ZSwgSXJvbkNvbnRyb2xTdGF0ZSwgUGFwZXJJdGVtQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5Vc2UgYDxwYXBlci1pdGVtLWJvZHk+YCBpbiBhIGA8cGFwZXItaXRlbT5gIG9yIGA8cGFwZXItaWNvbi1pdGVtPmAgdG8gbWFrZSB0d28tXG5vciB0aHJlZS0gbGluZSBpdGVtcy4gSXQgaXMgYSBmbGV4IGl0ZW0gdGhhdCBpcyBhIHZlcnRpY2FsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRoZSBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBgc2Vjb25kYXJ5YCBhdHRyaWJ1dGUgaXMgZ2l2ZW4gc2Vjb25kYXJ5IHRleHRcbnN0eWxpbmcuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHR3by1saW5lIGl0ZW0gfCBgNzJweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0aHJlZS1saW5lIGl0ZW0gfCBgODhweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3JgIHwgRm9yZWdyb3VuZCBjb2xvciBmb3IgdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnlgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBuZWVkZWQgZm9yIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHRvIHdvcmsgb24gZmYgKi9cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWp1c3RpZmllZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0d28tbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHQsIDcycHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhyZWUtbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodCwgODhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKFtzZWNvbmRhcnldKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0tYm9keSdcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0LCAucGFwZXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAucGFwZXItaXRlbSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pLCAucGFwZXItaXRlbVtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXJvbi1zZWxlY3RlZCksIC5wYXBlci1pdGVtLmlyb24tc2VsZWN0ZWQge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHQsIGJvbGQpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pLCAucGFwZXItaXRlbVtkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvciwgdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cyksIC5wYXBlci1pdGVtOmZvY3VzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKTpiZWZvcmUsIC5wYXBlci1pdGVtOmZvY3VzOmJlZm9yZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG5cbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1kaXZpZGVyLW9wYWNpdHkpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0xpc3RzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvbGlzdHMuaHRtbClcblxuYDxwYXBlci1pdGVtPmAgaXMgYW4gaW50ZXJhY3RpdmUgbGlzdCBpdGVtLiBCeSBkZWZhdWx0LCBpdCBpcyBhIGhvcml6b250YWxcbmZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5JdGVtPC9wYXBlci1pdGVtPlxuXG5Vc2UgdGhpcyBlbGVtZW50IHdpdGggYDxwYXBlci1pdGVtLWJvZHk+YCB0byBtYWtlIE1hdGVyaWFsIERlc2lnbiBzdHlsZWRcbnR3by1saW5lIGFuZCB0aHJlZS1saW5lIGl0ZW1zLlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UbyB1c2UgYHBhcGVyLWl0ZW1gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZSBgcGFwZXItaXRlbWAgd2lsbFxuYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGUgYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZ1xuZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnL1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pdGVtIHJhaXNlZD5Qb2x5bWVyIFByb2plY3Q8L3BhcGVyLWl0ZW0+XG4gICAgPC9hPlxuXG5JZiB5b3UgYXJlIGNvbmNlcm5lZCBhYm91dCBwZXJmb3JtYW5jZSBhbmQgd2FudCB0byB1c2UgYHBhcGVyLWl0ZW1gIGluIGFcbmBwYXBlci1saXN0Ym94YCB3aXRoIG1hbnkgaXRlbXMsIHlvdSBjYW4ganVzdCB1c2UgYSBuYXRpdmUgYGJ1dHRvbmAgd2l0aCB0aGVcbmBwYXBlci1pdGVtYCBjbGFzcyBhcHBsaWVkIChwcm92aWRlZCB5b3UgaGF2ZSBjb3JyZWN0bHkgaW5jbHVkZWQgdGhlIHNoYXJlZFxuc3R5bGVzKTpcblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5JbmJveDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U3RhcnJlZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U2VudCBtYWlsPC9idXR0b24+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIHRoZSBpdGVtIHwgYDQ4cHhgXG5gLS1wYXBlci1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cblRoaXMgZWxlbWVudCBoYXMgYHJvbGU9XCJsaXN0aXRlbVwiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdXNhZ2UsIGl0IG1heSBiZVxubW9yZSBhcHByb3ByaWF0ZSB0byBzZXQgYHJvbGU9XCJtZW51aXRlbVwiYCwgYHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCJgIG9yXG5gcm9sZT1cIm1lbnVpdGVtcmFkaW9cImAuXG5cbiAgICA8cGFwZXItaXRlbSByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgU2hvdyB5b3VyIHN0YXR1c1xuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8cGFwZXItY2hlY2tib3g+PC9wYXBlci1jaGVja2JveD5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaXRlbVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgbXVsdGlwbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGN5Y2xlcyBiZXR3ZWVuIGZvdXIgbGF5ZXJzIG9mIGNvbG9yczsgYnkgZGVmYXVsdCB0aGV5IGFyZVxuYmx1ZSwgcmVkLCB5ZWxsb3cgYW5kIGdyZWVuLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBjeWNsZSBiZXR3ZWVuIGZvdXJcbmRpZmZlcmVudCBjb2xvcnMuIFVzZSA8cGFwZXItc3Bpbm5lci1saXRlPiBmb3Igc2luZ2xlIGNvbG9yIHNwaW5uZXJzLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmaXJzdCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzZWNvbmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1yZWQtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yYCB8IENvbG9yIG9mIHRoZSB0aGlyZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXllbGxvdy01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZvdXJ0aCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWdyZWVuLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG4vKipcbiAqIEZvciBBdHRyaWJ1dGVQYXJ0cywgc2V0cyB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGFuZCByZW1vdmVzXG4gKiB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogRm9yIG90aGVyIHBhcnQgdHlwZXMsIHRoaXMgZGlyZWN0aXZlIGlzIGEgbm8tb3AuXG4gKi9cbmV4cG9ydCBjb25zdCBpZkRlZmluZWQgPSBkaXJlY3RpdmUoKHZhbHVlOiB1bmtub3duKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkge1xuICAgIGlmICh2YWx1ZSAhPT0gcGFydC52YWx1ZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHBhcnQuY29tbWl0dGVyLm5hbWU7XG4gICAgICBwYXJ0LmNvbW1pdHRlci5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQXdCQTtBQUVBO0FBRUE7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJBO0FBNEJBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEvR0E7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE4Q0E7QUFFQTtBQUVBOzs7OztBQUtBO0FBQUE7QUFBQTtBQVBBO0FBQ0E7QUFVQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuR0E7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQTRCQTtBQUNBO0FBN0JBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBb0NBO0FBcENBOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3REE7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBREE7QUFjQTtBQUNBO0FBZkE7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBO0FBRUE7QUFFQTtBQUxBOzs7Ozs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
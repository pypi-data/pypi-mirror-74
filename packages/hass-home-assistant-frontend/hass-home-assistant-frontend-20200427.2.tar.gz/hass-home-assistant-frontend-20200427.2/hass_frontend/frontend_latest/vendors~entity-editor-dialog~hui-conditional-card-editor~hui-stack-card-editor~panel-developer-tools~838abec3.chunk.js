(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~entity-editor-dialog~hui-conditional-card-editor~hui-stack-card-editor~panel-developer-tools~838abec3"],{

/***/ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js ***!
  \***************************************************************************/
/*! exports provided: IronMenubarBehaviorImpl, IronMenubarBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehaviorImpl", function() { return IronMenubarBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehavior", function() { return IronMenubarBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
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
 * `IronMenubarBehavior` implements accessible menubar behavior.
 *
 * @polymerBehavior IronMenubarBehavior
 */

const IronMenubarBehaviorImpl = {
  hostAttributes: {
    'role': 'menubar'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'left': '_onLeftKey',
    'right': '_onRightKey'
  },
  _onUpKey: function (event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },
  _onDownKey: function (event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },

  get _isRTL() {
    return window.getComputedStyle(this)['direction'] === 'rtl';
  },

  _onLeftKey: function (event) {
    if (this._isRTL) {
      this._focusNext();
    } else {
      this._focusPrevious();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onRightKey: function (event) {
    if (this._isRTL) {
      this._focusPrevious();
    } else {
      this._focusNext();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onKeydown: function (event) {
    if (this.keyboardEventMatchesKeys(event, 'up down left right esc')) {
      return;
    } // all other keys focus the menu item starting with that character


    this._focusWithKeyboardEvent(event);
  }
};
/** @polymerBehavior */

const IronMenubarBehavior = [_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronMenuBehavior"], IronMenubarBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-tabs/paper-tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@polymer/paper-tabs/paper-tab.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/








/*
`paper-tab` is styled to look like a tab. It should be used in conjunction with
`paper-tabs`.

Example:

    <paper-tabs selected="0">
      <paper-tab>TAB 1</paper-tab>
      <paper-tab>TAB 2</paper-tab>
      <paper-tab>TAB 3</paper-tab>
    </paper-tabs>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-tab-ink` | Ink color | `--paper-yellow-a100`
`--paper-tab` | Mixin applied to the tab | `{}`
`--paper-tab-content` | Mixin applied to the tab content | `{}`
`--paper-tab-content-focused` | Mixin applied to the tab content when the tab is focused | `{}`
`--paper-tab-content-unselected` | Mixin applied to the tab content when the tab is not selected | `{}`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex-auto;

        position: relative;
        padding: 0 12px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;

        @apply --paper-font-common-base;
        @apply --paper-tab;
      }

      :host(:focus) {
        outline: none;
      }

      :host([link]) {
        padding: 0;
      }

      .tab-content {
        height: 100%;
        transform: translateZ(0);
          -webkit-transform: translateZ(0);
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-flex-auto;
        @apply --paper-tab-content;
      }

      :host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;

        @apply --paper-tab-content-unselected;
      }

      :host(:focus) .tab-content {
        opacity: 1;
        font-weight: 700;

        @apply --paper-tab-content-focused;
      }

      paper-ripple {
        color: var(--paper-tab-ink, var(--paper-yellow-a100));
      }

      .tab-content > ::slotted(a) {
        @apply --layout-flex-auto;

        height: 100%;
      }
    </style>

    <div class="tab-content">
      <slot></slot>
    </div>
`,
  is: 'paper-tab',
  behaviors: [_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_3__["IronControlState"], _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__["IronButtonState"], _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_4__["PaperRippleBehavior"]],
  properties: {
    /**
     * If true, the tab will forward keyboard clicks (enter/space) to
     * the first anchor element found in its descendants
     */
    link: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },

  /** @private */
  hostAttributes: {
    role: 'tab'
  },
  listeners: {
    down: '_updateNoink',
    tap: '_onTap'
  },
  attached: function () {
    this._updateNoink();
  },

  get _parentNoink() {
    var parent = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this).parentNode;
    return !!parent && !!parent.noink;
  },

  _updateNoink: function () {
    this.noink = !!this.noink || !!this._parentNoink;
  },
  _onTap: function (event) {
    if (this.link) {
      var anchor = this.queryEffectiveChildren('a');

      if (!anchor) {
        return;
      } // Don't get stuck in a loop delegating
      // the listener from the child anchor


      if (event.target === anchor) {
        return;
      }

      anchor.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-tabs/paper-tabs-icons.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-tabs/paper-tabs-icons.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;
document.head.appendChild(template.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-tabs/paper-tabs.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-tabs/paper-tabs.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button.js */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _paper_tabs_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-tabs-icons.js */ "./node_modules/@polymer/paper-tabs/paper-tabs-icons.js");
/* harmony import */ var _paper_tab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-tab.js */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menubar-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/













/**
Material design: [Tabs](https://www.google.com/design/spec/components/tabs.html)

`paper-tabs` makes it easy to explore and switch between different views or
functional aspects of an app, or to browse categorized data sets.

Use `selected` property to get or set the selected tab.

Example:

    <paper-tabs selected="0">
      <paper-tab>TAB 1</paper-tab>
      <paper-tab>TAB 2</paper-tab>
      <paper-tab>TAB 3</paper-tab>
    </paper-tabs>

See <a href="?active=paper-tab">paper-tab</a> for more information about
`paper-tab`.

A common usage for `paper-tabs` is to use it along with `iron-pages` to switch
between different views.

    <paper-tabs selected="{{selected}}">
      <paper-tab>Tab 1</paper-tab>
      <paper-tab>Tab 2</paper-tab>
      <paper-tab>Tab 3</paper-tab>
    </paper-tabs>

    <iron-pages selected="{{selected}}">
      <div>Page 1</div>
      <div>Page 2</div>
      <div>Page 3</div>
    </iron-pages>

To use links in tabs, add `link` attribute to `paper-tab` and put an `<a>`
element in `paper-tab` with a `tabindex` of -1.

Example:

<pre><code>
&lt;style is="custom-style">
  .link {
    &#64;apply --layout-horizontal;
    &#64;apply --layout-center-center;
  }
&lt;/style>

&lt;paper-tabs selected="0">
  &lt;paper-tab link>
    &lt;a href="#link1" class="link" tabindex="-1">TAB ONE&lt;/a>
  &lt;/paper-tab>
  &lt;paper-tab link>
    &lt;a href="#link2" class="link" tabindex="-1">TAB TWO&lt;/a>
  &lt;/paper-tab>
  &lt;paper-tab link>
    &lt;a href="#link3" class="link" tabindex="-1">TAB THREE&lt;/a>
  &lt;/paper-tab>
&lt;/paper-tabs>
</code></pre>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-tabs-selection-bar-color` | Color for the selection bar | `--paper-yellow-a100`
`--paper-tabs-selection-bar` | Mixin applied to the selection bar | `{}`
`--paper-tabs` | Mixin applied to the tabs | `{}`
`--paper-tabs-content` | Mixin applied to the content container of tabs | `{}`
`--paper-tabs-container` | Mixin applied to the layout container of tabs | `{}`

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_10__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"]`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center;

        height: 48px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-tabs;
      }

      :host(:dir(rtl)) {
        @apply --layout-horizontal-reverse;
      }

      #tabsContainer {
        position: relative;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        @apply --layout-flex-auto;
        @apply --paper-tabs-container;
      }

      #tabsContent {
        height: 100%;
        -moz-flex-basis: auto;
        -ms-flex-basis: auto;
        flex-basis: auto;
        @apply --paper-tabs-content;
      }

      #tabsContent.scrollable {
        position: absolute;
        white-space: nowrap;
      }

      #tabsContent:not(.scrollable),
      #tabsContent.scrollable.fit-container {
        @apply --layout-horizontal;
      }

      #tabsContent.scrollable.fit-container {
        min-width: 100%;
      }

      #tabsContent.scrollable.fit-container > ::slotted(*) {
        /* IE - prevent tabs from compressing when they should scroll. */
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
      }

      .hidden {
        display: none;
      }

      .not-visible {
        opacity: 0;
        cursor: default;
      }

      paper-icon-button {
        width: 48px;
        height: 48px;
        padding: 12px;
        margin: 0 4px;
      }

      #selectionBar {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));
          -webkit-transform: scale(0);
        transform: scale(0);
          -webkit-transform-origin: left center;
        transform-origin: left center;
          transition: -webkit-transform;
        transition: transform;

        @apply --paper-tabs-selection-bar;
      }

      #selectionBar.align-bottom {
        top: 0;
        bottom: auto;
      }

      #selectionBar.expand {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
      }

      #selectionBar.contract {
        transition-duration: 0.18s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
      }

      #tabsContent > ::slotted(:not(#selectionBar)) {
        height: 100%;
      }
    </style>

    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>

    <div id="tabsContainer" on-track="_scroll" on-down="_down">
      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">
        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>
        <slot></slot>
      </div>
    </div>

    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>
`,
  is: 'paper-tabs',
  behaviors: [_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_9__["IronResizableBehavior"], _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_8__["IronMenubarBehavior"]],
  properties: {
    /**
     * If true, ink ripple effect is disabled. When this property is changed,
     * all descendant `<paper-tab>` elements have their `noink` property
     * changed to the new value as well.
     */
    noink: {
      type: Boolean,
      value: false,
      observer: '_noinkChanged'
    },

    /**
     * If true, the bottom bar to indicate the selected tab will not be shown.
     */
    noBar: {
      type: Boolean,
      value: false
    },

    /**
     * If true, the slide effect for the bottom bar is disabled.
     */
    noSlide: {
      type: Boolean,
      value: false
    },

    /**
     * If true, tabs are scrollable and the tab width is based on the label
     * width.
     */
    scrollable: {
      type: Boolean,
      value: false
    },

    /**
     * If true, tabs expand to fit their container. This currently only applies
     * when scrollable is true.
     */
    fitContainer: {
      type: Boolean,
      value: false
    },

    /**
     * If true, dragging on the tabs to scroll is disabled.
     */
    disableDrag: {
      type: Boolean,
      value: false
    },

    /**
     * If true, scroll buttons (left/right arrow) will be hidden for scrollable
     * tabs.
     */
    hideScrollButtons: {
      type: Boolean,
      value: false
    },

    /**
     * If true, the tabs are aligned to bottom (the selection bar appears at the
     * top).
     */
    alignBottom: {
      type: Boolean,
      value: false
    },
    selectable: {
      type: String,
      value: 'paper-tab'
    },

    /**
     * If true, tabs are automatically selected when focused using the
     * keyboard.
     */
    autoselect: {
      type: Boolean,
      value: false
    },

    /**
     * The delay (in milliseconds) between when the user stops interacting
     * with the tabs through the keyboard and when the focused item is
     * automatically selected (if `autoselect` is true).
     */
    autoselectDelay: {
      type: Number,
      value: 0
    },
    _step: {
      type: Number,
      value: 10
    },
    _holdDelay: {
      type: Number,
      value: 1
    },
    _leftHidden: {
      type: Boolean,
      value: false
    },
    _rightHidden: {
      type: Boolean,
      value: false
    },
    _previousTab: {
      type: Object
    }
  },

  /** @private */
  hostAttributes: {
    role: 'tablist'
  },
  listeners: {
    'iron-resize': '_onTabSizingChanged',
    'iron-items-changed': '_onTabSizingChanged',
    'iron-select': '_onIronSelect',
    'iron-deselect': '_onIronDeselect'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'left:keyup right:keyup': '_onArrowKeyup'
  },
  created: function () {
    this._holdJob = null;
    this._pendingActivationItem = undefined;
    this._pendingActivationTimeout = undefined;
    this._bindDelayedActivationHandler = this._delayedActivationHandler.bind(this);
    this.addEventListener('blur', this._onBlurCapture.bind(this), true);
  },
  ready: function () {
    this.setScrollDirection('y', this.$.tabsContainer);
  },
  detached: function () {
    this._cancelPendingActivation();
  },
  _noinkChanged: function (noink) {
    var childTabs = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_11__["dom"])(this).querySelectorAll('paper-tab');
    childTabs.forEach(noink ? this._setNoinkAttribute : this._removeNoinkAttribute);
  },
  _setNoinkAttribute: function (element) {
    element.setAttribute('noink', '');
  },
  _removeNoinkAttribute: function (element) {
    element.removeAttribute('noink');
  },
  _computeScrollButtonClass: function (hideThisButton, scrollable, hideScrollButtons) {
    if (!scrollable || hideScrollButtons) {
      return 'hidden';
    }

    if (hideThisButton) {
      return 'not-visible';
    }

    return '';
  },
  _computeTabsContentClass: function (scrollable, fitContainer) {
    return scrollable ? 'scrollable' + (fitContainer ? ' fit-container' : '') : ' fit-container';
  },
  _computeSelectionBarClass: function (noBar, alignBottom) {
    if (noBar) {
      return 'hidden';
    } else if (alignBottom) {
      return 'align-bottom';
    }

    return '';
  },
  // TODO(cdata): Add `track` response back in when gesture lands.
  _onTabSizingChanged: function () {
    this.debounce('_onTabSizingChanged', function () {
      this._scroll();

      this._tabChanged(this.selectedItem);
    }, 10);
  },
  _onIronSelect: function (event) {
    this._tabChanged(event.detail.item, this._previousTab);

    this._previousTab = event.detail.item;
    this.cancelDebouncer('tab-changed');
  },
  _onIronDeselect: function (event) {
    this.debounce('tab-changed', function () {
      this._tabChanged(null, this._previousTab);

      this._previousTab = null; // See polymer/polymer#1305
    }, 1);
  },
  _activateHandler: function () {
    // Cancel item activations scheduled by keyboard events when any other
    // action causes an item to be activated (e.g. clicks).
    this._cancelPendingActivation();

    _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_7__["IronMenuBehaviorImpl"]._activateHandler.apply(this, arguments);
  },

  /**
   * Activates an item after a delay (in milliseconds).
   */
  _scheduleActivation: function (item, delay) {
    this._pendingActivationItem = item;
    this._pendingActivationTimeout = this.async(this._bindDelayedActivationHandler, delay);
  },

  /**
   * Activates the last item given to `_scheduleActivation`.
   */
  _delayedActivationHandler: function () {
    var item = this._pendingActivationItem;
    this._pendingActivationItem = undefined;
    this._pendingActivationTimeout = undefined;
    item.fire(this.activateEvent, null, {
      bubbles: true,
      cancelable: true
    });
  },

  /**
   * Cancels a previously scheduled item activation made with
   * `_scheduleActivation`.
   */
  _cancelPendingActivation: function () {
    if (this._pendingActivationTimeout !== undefined) {
      this.cancelAsync(this._pendingActivationTimeout);
      this._pendingActivationItem = undefined;
      this._pendingActivationTimeout = undefined;
    }
  },
  _onArrowKeyup: function (event) {
    if (this.autoselect) {
      this._scheduleActivation(this.focusedItem, this.autoselectDelay);
    }
  },
  _onBlurCapture: function (event) {
    // Cancel a scheduled item activation (if any) when that item is
    // blurred.
    if (event.target === this._pendingActivationItem) {
      this._cancelPendingActivation();
    }
  },

  get _tabContainerScrollSize() {
    return Math.max(0, this.$.tabsContainer.scrollWidth - this.$.tabsContainer.offsetWidth);
  },

  _scroll: function (e, detail) {
    if (!this.scrollable) {
      return;
    }

    var ddx = detail && -detail.ddx || 0;

    this._affectScroll(ddx);
  },
  _down: function (e) {
    // go one beat async to defeat IronMenuBehavior
    // autorefocus-on-no-selection timeout
    this.async(function () {
      if (this._defaultFocusAsync) {
        this.cancelAsync(this._defaultFocusAsync);
        this._defaultFocusAsync = null;
      }
    }, 1);
  },
  _affectScroll: function (dx) {
    this.$.tabsContainer.scrollLeft += dx;
    var scrollLeft = this.$.tabsContainer.scrollLeft;
    this._leftHidden = scrollLeft === 0;
    this._rightHidden = scrollLeft === this._tabContainerScrollSize;
  },
  _onLeftScrollButtonDown: function () {
    this._scrollToLeft();

    this._holdJob = setInterval(this._scrollToLeft.bind(this), this._holdDelay);
  },
  _onRightScrollButtonDown: function () {
    this._scrollToRight();

    this._holdJob = setInterval(this._scrollToRight.bind(this), this._holdDelay);
  },
  _onScrollButtonUp: function () {
    clearInterval(this._holdJob);
    this._holdJob = null;
  },
  _scrollToLeft: function () {
    this._affectScroll(-this._step);
  },
  _scrollToRight: function () {
    this._affectScroll(this._step);
  },
  _tabChanged: function (tab, old) {
    if (!tab) {
      // Remove the bar without animation.
      this.$.selectionBar.classList.remove('expand');
      this.$.selectionBar.classList.remove('contract');

      this._positionBar(0, 0);

      return;
    }

    var r = this.$.tabsContent.getBoundingClientRect();
    var w = r.width;
    var tabRect = tab.getBoundingClientRect();
    var tabOffsetLeft = tabRect.left - r.left;
    this._pos = {
      width: this._calcPercent(tabRect.width, w),
      left: this._calcPercent(tabOffsetLeft, w)
    };

    if (this.noSlide || old == null) {
      // Position the bar without animation.
      this.$.selectionBar.classList.remove('expand');
      this.$.selectionBar.classList.remove('contract');

      this._positionBar(this._pos.width, this._pos.left);

      return;
    }

    var oldRect = old.getBoundingClientRect();
    var oldIndex = this.items.indexOf(old);
    var index = this.items.indexOf(tab);
    var m = 5; // bar animation: expand

    this.$.selectionBar.classList.add('expand');
    var moveRight = oldIndex < index;
    var isRTL = this._isRTL;

    if (isRTL) {
      moveRight = !moveRight;
    }

    if (moveRight) {
      this._positionBar(this._calcPercent(tabRect.left + tabRect.width - oldRect.left, w) - m, this._left);
    } else {
      this._positionBar(this._calcPercent(oldRect.left + oldRect.width - tabRect.left, w) - m, this._calcPercent(tabOffsetLeft, w) + m);
    }

    if (this.scrollable) {
      this._scrollToSelectedIfNeeded(tabRect.width, tabOffsetLeft);
    }
  },
  _scrollToSelectedIfNeeded: function (tabWidth, tabOffsetLeft) {
    var l = tabOffsetLeft - this.$.tabsContainer.scrollLeft;

    if (l < 0) {
      this.$.tabsContainer.scrollLeft += l;
    } else {
      l += tabWidth - this.$.tabsContainer.offsetWidth;

      if (l > 0) {
        this.$.tabsContainer.scrollLeft += l;
      }
    }
  },
  _calcPercent: function (w, w0) {
    return 100 * w / w0;
  },
  _positionBar: function (width, left) {
    width = width || 0;
    left = left || 0;
    this._width = width;
    this._left = left;
    this.transform('translateX(' + left + '%) scaleX(' + width / 100 + ')', this.$.selectionBar);
  },
  _onBarTransitionEnd: function (e) {
    var cl = this.$.selectionBar.classList; // bar animation: expand -> contract

    if (cl.contains('expand')) {
      cl.remove('expand');
      cl.add('contract');

      this._positionBar(this._pos.width, this._pos.left); // bar animation done

    } else if (cl.contains('contract')) {
      cl.remove('contract');
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35lbnRpdHktZWRpdG9yLWRpYWxvZ35odWktY29uZGl0aW9uYWwtY2FyZC1lZGl0b3J+aHVpLXN0YWNrLWNhcmQtZWRpdG9yfnBhbmVsLWRldmVsb3Blci10b29sc344MzhhYmVjMy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW1lbnUtYmVoYXZpb3IvaXJvbi1tZW51YmFyLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJzLWljb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25NZW51QmVoYXZpb3J9IGZyb20gJy4vaXJvbi1tZW51LWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBgSXJvbk1lbnViYXJCZWhhdmlvcmAgaW1wbGVtZW50cyBhY2Nlc3NpYmxlIG1lbnViYXIgYmVoYXZpb3IuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uTWVudWJhckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uTWVudWJhckJlaGF2aW9ySW1wbCA9IHtcblxuICBob3N0QXR0cmlidXRlczogeydyb2xlJzogJ21lbnViYXInfSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczogeydsZWZ0JzogJ19vbkxlZnRLZXknLCAncmlnaHQnOiAnX29uUmlnaHRLZXknfSxcblxuICBfb25VcEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzZWRJdGVtLmNsaWNrKCk7XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBfb25Eb3duS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuZm9jdXNlZEl0ZW0uY2xpY2soKTtcbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIGdldCBfaXNSVEwoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpWydkaXJlY3Rpb24nXSA9PT0gJ3J0bCc7XG4gIH0sXG5cbiAgX29uTGVmdEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5faXNSVEwpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c1ByZXZpb3VzKCk7XG4gICAgfVxuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgX29uUmlnaHRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzUlRMKSB7XG4gICAgICB0aGlzLl9mb2N1c1ByZXZpb3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzTmV4dCgpO1xuICAgIH1cbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIF9vbktleWRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzKGV2ZW50LCAndXAgZG93biBsZWZ0IHJpZ2h0IGVzYycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWxsIG90aGVyIGtleXMgZm9jdXMgdGhlIG1lbnUgaXRlbSBzdGFydGluZyB3aXRoIHRoYXQgY2hhcmFjdGVyXG4gICAgdGhpcy5fZm9jdXNXaXRoS2V5Ym9hcmRFdmVudChldmVudCk7XG4gIH1cblxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBJcm9uTWVudWJhckJlaGF2aW9yID0gW0lyb25NZW51QmVoYXZpb3IsIElyb25NZW51YmFyQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcbmBwYXBlci10YWJgIGlzIHN0eWxlZCB0byBsb29rIGxpa2UgYSB0YWIuIEl0IHNob3VsZCBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGhcbmBwYXBlci10YWJzYC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci10YWJzIHNlbGVjdGVkPVwiMFwiPlxuICAgICAgPHBhcGVyLXRhYj5UQUIgMTwvcGFwZXItdGFiPlxuICAgICAgPHBhcGVyLXRhYj5UQUIgMjwvcGFwZXItdGFiPlxuICAgICAgPHBhcGVyLXRhYj5UQUIgMzwvcGFwZXItdGFiPlxuICAgIDwvcGFwZXItdGFicz5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXRhYi1pbmtgIHwgSW5rIGNvbG9yIHwgYC0tcGFwZXIteWVsbG93LWExMDBgXG5gLS1wYXBlci10YWJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGFiIHwgYHt9YFxuYC0tcGFwZXItdGFiLWNvbnRlbnRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGFiIGNvbnRlbnQgfCBge31gXG5gLS1wYXBlci10YWItY29udGVudC1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRhYiBjb250ZW50IHdoZW4gdGhlIHRhYiBpcyBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItdGFiLWNvbnRlbnQtdW5zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0YWIgY29udGVudCB3aGVuIHRoZSB0YWIgaXMgbm90IHNlbGVjdGVkIHwgYHt9YFxuXG5UaGlzIGVsZW1lbnQgYXBwbGllcyB0aGUgbWl4aW4gYC0tcGFwZXItZm9udC1jb21tb24tYmFzZWAgYnV0IGRvZXMgbm90IGltcG9ydFxuYHBhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxgLiBJbiBvcmRlciB0byBhcHBseSB0aGUgYFJvYm90b2AgZm9udCB0byB0aGlzXG5lbGVtZW50LCBtYWtlIHN1cmUgeW91J3ZlIGltcG9ydGVkIGBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWlubGluZTtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LWF1dG87XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10YWI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cykge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbGlua10pIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLnRhYi1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LWF1dG87XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRhYi1jb250ZW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KC5pcm9uLXNlbGVjdGVkKSkgPiAudGFiLWNvbnRlbnQge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdGFiLWNvbnRlbnQtdW5zZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKSAudGFiLWNvbnRlbnQge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRhYi1jb250ZW50LWZvY3VzZWQ7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci10YWItaW5rLCB2YXIoLS1wYXBlci15ZWxsb3ctYTEwMCkpO1xuICAgICAgfVxuXG4gICAgICAudGFiLWNvbnRlbnQgPiA6OnNsb3R0ZWQoYSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1hdXRvO1xuXG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItdGFiJyxcblxuICBiZWhhdmlvcnM6IFtJcm9uQ29udHJvbFN0YXRlLCBJcm9uQnV0dG9uU3RhdGUsIFBhcGVyUmlwcGxlQmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSB0YWIgd2lsbCBmb3J3YXJkIGtleWJvYXJkIGNsaWNrcyAoZW50ZXIvc3BhY2UpIHRvXG4gICAgICogdGhlIGZpcnN0IGFuY2hvciBlbGVtZW50IGZvdW5kIGluIGl0cyBkZXNjZW5kYW50c1xuICAgICAqL1xuICAgIGxpbms6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX1cblxuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICd0YWInfSxcblxuICBsaXN0ZW5lcnM6IHtkb3duOiAnX3VwZGF0ZU5vaW5rJywgdGFwOiAnX29uVGFwJ30sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3VwZGF0ZU5vaW5rKCk7XG4gIH0sXG5cbiAgZ2V0IF9wYXJlbnROb2luaygpIHtcbiAgICB2YXIgcGFyZW50ID0gZG9tKHRoaXMpLnBhcmVudE5vZGU7XG4gICAgcmV0dXJuICEhcGFyZW50ICYmICEhcGFyZW50Lm5vaW5rO1xuICB9LFxuXG4gIF91cGRhdGVOb2luazogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ub2luayA9ICEhdGhpcy5ub2luayB8fCAhIXRoaXMuX3BhcmVudE5vaW5rO1xuICB9LFxuXG4gIF9vblRhcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5saW5rKSB7XG4gICAgICB2YXIgYW5jaG9yID0gdGhpcy5xdWVyeUVmZmVjdGl2ZUNoaWxkcmVuKCdhJyk7XG5cbiAgICAgIGlmICghYW5jaG9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRG9uJ3QgZ2V0IHN0dWNrIGluIGEgbG9vcCBkZWxlZ2F0aW5nXG4gICAgICAvLyB0aGUgbGlzdGVuZXIgZnJvbSB0aGUgY2hpbGQgYW5jaG9yXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBhbmNob3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhbmNob3IuY2xpY2soKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uc2V0LXN2Zy9pcm9uLWljb25zZXQtc3ZnLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgPGlyb24taWNvbnNldC1zdmcgbmFtZT1cInBhcGVyLXRhYnNcIiBzaXplPVwiMjRcIj5cbjxzdmc+PGRlZnM+XG48ZyBpZD1cImNoZXZyb24tbGVmdFwiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+PC9nPlxuPGcgaWQ9XCJjaGV2cm9uLXJpZ2h0XCI+PHBhdGggZD1cIk0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnpcIj48L3BhdGg+PC9nPlxuPC9kZWZzPjwvc3ZnPlxuPC9pcm9uLWljb25zZXQtc3ZnPmA7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItdGFicy1pY29ucy5qcyc7XG5pbXBvcnQgJy4vcGFwZXItdGFiLmpzJztcblxuaW1wb3J0IHtJcm9uTWVudUJlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZW51LWJlaGF2aW9yL2lyb24tbWVudS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25NZW51YmFyQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWVudS1iZWhhdmlvci9pcm9uLW1lbnViYXItYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uUmVzaXphYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtUYWJzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvdGFicy5odG1sKVxuXG5gcGFwZXItdGFic2AgbWFrZXMgaXQgZWFzeSB0byBleHBsb3JlIGFuZCBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnQgdmlld3Mgb3JcbmZ1bmN0aW9uYWwgYXNwZWN0cyBvZiBhbiBhcHAsIG9yIHRvIGJyb3dzZSBjYXRlZ29yaXplZCBkYXRhIHNldHMuXG5cblVzZSBgc2VsZWN0ZWRgIHByb3BlcnR5IHRvIGdldCBvciBzZXQgdGhlIHNlbGVjdGVkIHRhYi5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci10YWJzIHNlbGVjdGVkPVwiMFwiPlxuICAgICAgPHBhcGVyLXRhYj5UQUIgMTwvcGFwZXItdGFiPlxuICAgICAgPHBhcGVyLXRhYj5UQUIgMjwvcGFwZXItdGFiPlxuICAgICAgPHBhcGVyLXRhYj5UQUIgMzwvcGFwZXItdGFiPlxuICAgIDwvcGFwZXItdGFicz5cblxuU2VlIDxhIGhyZWY9XCI/YWN0aXZlPXBhcGVyLXRhYlwiPnBhcGVyLXRhYjwvYT4gZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXRcbmBwYXBlci10YWJgLlxuXG5BIGNvbW1vbiB1c2FnZSBmb3IgYHBhcGVyLXRhYnNgIGlzIHRvIHVzZSBpdCBhbG9uZyB3aXRoIGBpcm9uLXBhZ2VzYCB0byBzd2l0Y2hcbmJldHdlZW4gZGlmZmVyZW50IHZpZXdzLlxuXG4gICAgPHBhcGVyLXRhYnMgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkfX1cIj5cbiAgICAgIDxwYXBlci10YWI+VGFiIDE8L3BhcGVyLXRhYj5cbiAgICAgIDxwYXBlci10YWI+VGFiIDI8L3BhcGVyLXRhYj5cbiAgICAgIDxwYXBlci10YWI+VGFiIDM8L3BhcGVyLXRhYj5cbiAgICA8L3BhcGVyLXRhYnM+XG5cbiAgICA8aXJvbi1wYWdlcyBzZWxlY3RlZD1cInt7c2VsZWN0ZWR9fVwiPlxuICAgICAgPGRpdj5QYWdlIDE8L2Rpdj5cbiAgICAgIDxkaXY+UGFnZSAyPC9kaXY+XG4gICAgICA8ZGl2PlBhZ2UgMzwvZGl2PlxuICAgIDwvaXJvbi1wYWdlcz5cblxuVG8gdXNlIGxpbmtzIGluIHRhYnMsIGFkZCBgbGlua2AgYXR0cmlidXRlIHRvIGBwYXBlci10YWJgIGFuZCBwdXQgYW4gYDxhPmBcbmVsZW1lbnQgaW4gYHBhcGVyLXRhYmAgd2l0aCBhIGB0YWJpbmRleGAgb2YgLTEuXG5cbkV4YW1wbGU6XG5cbjxwcmU+PGNvZGU+XG4mbHQ7c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIj5cbiAgLmxpbmsge1xuICAgICYjNjQ7YXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAmIzY0O2FwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gIH1cbiZsdDsvc3R5bGU+XG5cbiZsdDtwYXBlci10YWJzIHNlbGVjdGVkPVwiMFwiPlxuICAmbHQ7cGFwZXItdGFiIGxpbms+XG4gICAgJmx0O2EgaHJlZj1cIiNsaW5rMVwiIGNsYXNzPVwibGlua1wiIHRhYmluZGV4PVwiLTFcIj5UQUIgT05FJmx0Oy9hPlxuICAmbHQ7L3BhcGVyLXRhYj5cbiAgJmx0O3BhcGVyLXRhYiBsaW5rPlxuICAgICZsdDthIGhyZWY9XCIjbGluazJcIiBjbGFzcz1cImxpbmtcIiB0YWJpbmRleD1cIi0xXCI+VEFCIFRXTyZsdDsvYT5cbiAgJmx0Oy9wYXBlci10YWI+XG4gICZsdDtwYXBlci10YWIgbGluaz5cbiAgICAmbHQ7YSBocmVmPVwiI2xpbmszXCIgY2xhc3M9XCJsaW5rXCIgdGFiaW5kZXg9XCItMVwiPlRBQiBUSFJFRSZsdDsvYT5cbiAgJmx0Oy9wYXBlci10YWI+XG4mbHQ7L3BhcGVyLXRhYnM+XG48L2NvZGU+PC9wcmU+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci10YWJzLXNlbGVjdGlvbi1iYXItY29sb3JgIHwgQ29sb3IgZm9yIHRoZSBzZWxlY3Rpb24gYmFyIHwgYC0tcGFwZXIteWVsbG93LWExMDBgXG5gLS1wYXBlci10YWJzLXNlbGVjdGlvbi1iYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgc2VsZWN0aW9uIGJhciB8IGB7fWBcbmAtLXBhcGVyLXRhYnNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGFicyB8IGB7fWBcbmAtLXBhcGVyLXRhYnMtY29udGVudGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjb250ZW50IGNvbnRhaW5lciBvZiB0YWJzIHwgYHt9YFxuYC0tcGFwZXItdGFicy1jb250YWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGF5b3V0IGNvbnRhaW5lciBvZiB0YWJzIHwgYHt9YFxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0O1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgICAgIC8qIE5PVEU6IEJvdGggdmFsdWVzIGFyZSBuZWVkZWQsIHNpbmNlIHNvbWUgcGhvbmVzIHJlcXVpcmUgdGhlIHZhbHVlIHRvIGJlIFxcYHRyYW5zcGFyZW50XFxgLiAqL1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdGFicztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmRpcihydGwpKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsLXJldmVyc2U7XG4gICAgICB9XG5cbiAgICAgICN0YWJzQ29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LWF1dG87XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRhYnMtY29udGFpbmVyO1xuICAgICAgfVxuXG4gICAgICAjdGFic0NvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC1tb3otZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgLW1zLWZsZXgtYmFzaXM6IGF1dG87XG4gICAgICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRhYnMtY29udGVudDtcbiAgICAgIH1cblxuICAgICAgI3RhYnNDb250ZW50LnNjcm9sbGFibGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgICN0YWJzQ29udGVudDpub3QoLnNjcm9sbGFibGUpLFxuICAgICAgI3RhYnNDb250ZW50LnNjcm9sbGFibGUuZml0LWNvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgfVxuXG4gICAgICAjdGFic0NvbnRlbnQuc2Nyb2xsYWJsZS5maXQtY29udGFpbmVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAjdGFic0NvbnRlbnQuc2Nyb2xsYWJsZS5maXQtY29udGFpbmVyID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgLyogSUUgLSBwcmV2ZW50IHRhYnMgZnJvbSBjb21wcmVzc2luZyB3aGVuIHRoZXkgc2hvdWxkIHNjcm9sbC4gKi9cbiAgICAgICAgLW1zLWZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEgMCBhdXRvO1xuICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5ub3QtdmlzaWJsZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDAgNHB4O1xuICAgICAgfVxuXG4gICAgICAjc2VsZWN0aW9uQmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wYXBlci10YWJzLXNlbGVjdGlvbi1iYXItY29sb3IsIHZhcigtLXBhcGVyLXllbGxvdy1hMTAwKSk7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm07XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyO1xuICAgICAgfVxuXG4gICAgICAjc2VsZWN0aW9uQmFyLmFsaWduLWJvdHRvbSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAjc2VsZWN0aW9uQmFyLmV4cGFuZCB7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKTtcbiAgICAgIH1cblxuICAgICAgI3NlbGVjdGlvbkJhci5jb250cmFjdCB7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMThzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpO1xuICAgICAgfVxuXG4gICAgICAjdGFic0NvbnRlbnQgPiA6OnNsb3R0ZWQoOm5vdCgjc2VsZWN0aW9uQmFyKSkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwicGFwZXItdGFiczpjaGV2cm9uLWxlZnRcIiBjbGFzcyQ9XCJbW19jb21wdXRlU2Nyb2xsQnV0dG9uQ2xhc3MoX2xlZnRIaWRkZW4sIHNjcm9sbGFibGUsIGhpZGVTY3JvbGxCdXR0b25zKV1dXCIgb24tdXA9XCJfb25TY3JvbGxCdXR0b25VcFwiIG9uLWRvd249XCJfb25MZWZ0U2Nyb2xsQnV0dG9uRG93blwiIHRhYmluZGV4PVwiLTFcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuXG4gICAgPGRpdiBpZD1cInRhYnNDb250YWluZXJcIiBvbi10cmFjaz1cIl9zY3JvbGxcIiBvbi1kb3duPVwiX2Rvd25cIj5cbiAgICAgIDxkaXYgaWQ9XCJ0YWJzQ29udGVudFwiIGNsYXNzJD1cIltbX2NvbXB1dGVUYWJzQ29udGVudENsYXNzKHNjcm9sbGFibGUsIGZpdENvbnRhaW5lcildXVwiPlxuICAgICAgICA8ZGl2IGlkPVwic2VsZWN0aW9uQmFyXCIgY2xhc3MkPVwiW1tfY29tcHV0ZVNlbGVjdGlvbkJhckNsYXNzKG5vQmFyLCBhbGlnbkJvdHRvbSldXVwiIG9uLXRyYW5zaXRpb25lbmQ9XCJfb25CYXJUcmFuc2l0aW9uRW5kXCI+PC9kaXY+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJwYXBlci10YWJzOmNoZXZyb24tcmlnaHRcIiBjbGFzcyQ9XCJbW19jb21wdXRlU2Nyb2xsQnV0dG9uQ2xhc3MoX3JpZ2h0SGlkZGVuLCBzY3JvbGxhYmxlLCBoaWRlU2Nyb2xsQnV0dG9ucyldXVwiIG9uLXVwPVwiX29uU2Nyb2xsQnV0dG9uVXBcIiBvbi1kb3duPVwiX29uUmlnaHRTY3JvbGxCdXR0b25Eb3duXCIgdGFiaW5kZXg9XCItMVwiPjwvcGFwZXItaWNvbi1idXR0b24+XG5gLFxuXG4gIGlzOiAncGFwZXItdGFicycsXG4gIGJlaGF2aW9yczogW0lyb25SZXNpemFibGVCZWhhdmlvciwgSXJvbk1lbnViYXJCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIGluayByaXBwbGUgZWZmZWN0IGlzIGRpc2FibGVkLiBXaGVuIHRoaXMgcHJvcGVydHkgaXMgY2hhbmdlZCxcbiAgICAgKiBhbGwgZGVzY2VuZGFudCBgPHBhcGVyLXRhYj5gIGVsZW1lbnRzIGhhdmUgdGhlaXIgYG5vaW5rYCBwcm9wZXJ0eVxuICAgICAqIGNoYW5nZWQgdG8gdGhlIG5ldyB2YWx1ZSBhcyB3ZWxsLlxuICAgICAqL1xuICAgIG5vaW5rOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBvYnNlcnZlcjogJ19ub2lua0NoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBib3R0b20gYmFyIHRvIGluZGljYXRlIHRoZSBzZWxlY3RlZCB0YWIgd2lsbCBub3QgYmUgc2hvd24uXG4gICAgICovXG4gICAgbm9CYXI6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIHNsaWRlIGVmZmVjdCBmb3IgdGhlIGJvdHRvbSBiYXIgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgbm9TbGlkZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0YWJzIGFyZSBzY3JvbGxhYmxlIGFuZCB0aGUgdGFiIHdpZHRoIGlzIGJhc2VkIG9uIHRoZSBsYWJlbFxuICAgICAqIHdpZHRoLlxuICAgICAqL1xuICAgIHNjcm9sbGFibGU6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGFicyBleHBhbmQgdG8gZml0IHRoZWlyIGNvbnRhaW5lci4gVGhpcyBjdXJyZW50bHkgb25seSBhcHBsaWVzXG4gICAgICogd2hlbiBzY3JvbGxhYmxlIGlzIHRydWUuXG4gICAgICovXG4gICAgZml0Q29udGFpbmVyOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIGRyYWdnaW5nIG9uIHRoZSB0YWJzIHRvIHNjcm9sbCBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlRHJhZzoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzY3JvbGwgYnV0dG9ucyAobGVmdC9yaWdodCBhcnJvdykgd2lsbCBiZSBoaWRkZW4gZm9yIHNjcm9sbGFibGVcbiAgICAgKiB0YWJzLlxuICAgICAqL1xuICAgIGhpZGVTY3JvbGxCdXR0b25zOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSB0YWJzIGFyZSBhbGlnbmVkIHRvIGJvdHRvbSAodGhlIHNlbGVjdGlvbiBiYXIgYXBwZWFycyBhdCB0aGVcbiAgICAgKiB0b3ApLlxuICAgICAqL1xuICAgIGFsaWduQm90dG9tOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIHNlbGVjdGFibGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAncGFwZXItdGFiJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0YWJzIGFyZSBhdXRvbWF0aWNhbGx5IHNlbGVjdGVkIHdoZW4gZm9jdXNlZCB1c2luZyB0aGVcbiAgICAgKiBrZXlib2FyZC5cbiAgICAgKi9cbiAgICBhdXRvc2VsZWN0OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWxheSAoaW4gbWlsbGlzZWNvbmRzKSBiZXR3ZWVuIHdoZW4gdGhlIHVzZXIgc3RvcHMgaW50ZXJhY3RpbmdcbiAgICAgKiB3aXRoIHRoZSB0YWJzIHRocm91Z2ggdGhlIGtleWJvYXJkIGFuZCB3aGVuIHRoZSBmb2N1c2VkIGl0ZW0gaXNcbiAgICAgKiBhdXRvbWF0aWNhbGx5IHNlbGVjdGVkIChpZiBgYXV0b3NlbGVjdGAgaXMgdHJ1ZSkuXG4gICAgICovXG4gICAgYXV0b3NlbGVjdERlbGF5OiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMH0sXG5cbiAgICBfc3RlcDoge3R5cGU6IE51bWJlciwgdmFsdWU6IDEwfSxcblxuICAgIF9ob2xkRGVsYXk6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAxfSxcblxuICAgIF9sZWZ0SGlkZGVuOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIF9yaWdodEhpZGRlbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBfcHJldmlvdXNUYWI6IHt0eXBlOiBPYmplY3R9XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ3RhYmxpc3QnfSxcblxuICBsaXN0ZW5lcnM6IHtcbiAgICAnaXJvbi1yZXNpemUnOiAnX29uVGFiU2l6aW5nQ2hhbmdlZCcsXG4gICAgJ2lyb24taXRlbXMtY2hhbmdlZCc6ICdfb25UYWJTaXppbmdDaGFuZ2VkJyxcbiAgICAnaXJvbi1zZWxlY3QnOiAnX29uSXJvblNlbGVjdCcsXG4gICAgJ2lyb24tZGVzZWxlY3QnOiAnX29uSXJvbkRlc2VsZWN0J1xuICB9LFxuXG4gIC8qKlxuICAgKiBAdHlwZSB7IU9iamVjdH1cbiAgICovXG4gIGtleUJpbmRpbmdzOiB7J2xlZnQ6a2V5dXAgcmlnaHQ6a2V5dXAnOiAnX29uQXJyb3dLZXl1cCd9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2hvbGRKb2IgPSBudWxsO1xuICAgIHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uSXRlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvblRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fYmluZERlbGF5ZWRBY3RpdmF0aW9uSGFuZGxlciA9XG4gICAgICAgIHRoaXMuX2RlbGF5ZWRBY3RpdmF0aW9uSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1ckNhcHR1cmUuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U2Nyb2xsRGlyZWN0aW9uKCd5JywgdGhpcy4kLnRhYnNDb250YWluZXIpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jYW5jZWxQZW5kaW5nQWN0aXZhdGlvbigpO1xuICB9LFxuXG4gIF9ub2lua0NoYW5nZWQ6IGZ1bmN0aW9uKG5vaW5rKSB7XG4gICAgdmFyIGNoaWxkVGFicyA9IGRvbSh0aGlzKS5xdWVyeVNlbGVjdG9yQWxsKCdwYXBlci10YWInKTtcbiAgICBjaGlsZFRhYnMuZm9yRWFjaChcbiAgICAgICAgbm9pbmsgPyB0aGlzLl9zZXROb2lua0F0dHJpYnV0ZSA6IHRoaXMuX3JlbW92ZU5vaW5rQXR0cmlidXRlKTtcbiAgfSxcblxuICBfc2V0Tm9pbmtBdHRyaWJ1dGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnbm9pbmsnLCAnJyk7XG4gIH0sXG5cbiAgX3JlbW92ZU5vaW5rQXR0cmlidXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ25vaW5rJyk7XG4gIH0sXG5cbiAgX2NvbXB1dGVTY3JvbGxCdXR0b25DbGFzczogZnVuY3Rpb24oXG4gICAgICBoaWRlVGhpc0J1dHRvbiwgc2Nyb2xsYWJsZSwgaGlkZVNjcm9sbEJ1dHRvbnMpIHtcbiAgICBpZiAoIXNjcm9sbGFibGUgfHwgaGlkZVNjcm9sbEJ1dHRvbnMpIHtcbiAgICAgIHJldHVybiAnaGlkZGVuJztcbiAgICB9XG5cbiAgICBpZiAoaGlkZVRoaXNCdXR0b24pIHtcbiAgICAgIHJldHVybiAnbm90LXZpc2libGUnO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfSxcblxuICBfY29tcHV0ZVRhYnNDb250ZW50Q2xhc3M6IGZ1bmN0aW9uKHNjcm9sbGFibGUsIGZpdENvbnRhaW5lcikge1xuICAgIHJldHVybiBzY3JvbGxhYmxlID8gJ3Njcm9sbGFibGUnICsgKGZpdENvbnRhaW5lciA/ICcgZml0LWNvbnRhaW5lcicgOiAnJykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgJyBmaXQtY29udGFpbmVyJztcbiAgfSxcblxuICBfY29tcHV0ZVNlbGVjdGlvbkJhckNsYXNzOiBmdW5jdGlvbihub0JhciwgYWxpZ25Cb3R0b20pIHtcbiAgICBpZiAobm9CYXIpIHtcbiAgICAgIHJldHVybiAnaGlkZGVuJztcbiAgICB9IGVsc2UgaWYgKGFsaWduQm90dG9tKSB7XG4gICAgICByZXR1cm4gJ2FsaWduLWJvdHRvbSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9LFxuXG4gIC8vIFRPRE8oY2RhdGEpOiBBZGQgYHRyYWNrYCByZXNwb25zZSBiYWNrIGluIHdoZW4gZ2VzdHVyZSBsYW5kcy5cblxuICBfb25UYWJTaXppbmdDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRlYm91bmNlKCdfb25UYWJTaXppbmdDaGFuZ2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9zY3JvbGwoKTtcbiAgICAgIHRoaXMuX3RhYkNoYW5nZWQodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH0sIDEwKTtcbiAgfSxcblxuICBfb25Jcm9uU2VsZWN0OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3RhYkNoYW5nZWQoZXZlbnQuZGV0YWlsLml0ZW0sIHRoaXMuX3ByZXZpb3VzVGFiKTtcbiAgICB0aGlzLl9wcmV2aW91c1RhYiA9IGV2ZW50LmRldGFpbC5pdGVtO1xuICAgIHRoaXMuY2FuY2VsRGVib3VuY2VyKCd0YWItY2hhbmdlZCcpO1xuICB9LFxuXG4gIF9vbklyb25EZXNlbGVjdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmRlYm91bmNlKCd0YWItY2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fdGFiQ2hhbmdlZChudWxsLCB0aGlzLl9wcmV2aW91c1RhYik7XG4gICAgICB0aGlzLl9wcmV2aW91c1RhYiA9IG51bGw7XG4gICAgICAvLyBTZWUgcG9seW1lci9wb2x5bWVyIzEzMDVcbiAgICB9LCAxKTtcbiAgfSxcblxuICBfYWN0aXZhdGVIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAvLyBDYW5jZWwgaXRlbSBhY3RpdmF0aW9ucyBzY2hlZHVsZWQgYnkga2V5Ym9hcmQgZXZlbnRzIHdoZW4gYW55IG90aGVyXG4gICAgLy8gYWN0aW9uIGNhdXNlcyBhbiBpdGVtIHRvIGJlIGFjdGl2YXRlZCAoZS5nLiBjbGlja3MpLlxuICAgIHRoaXMuX2NhbmNlbFBlbmRpbmdBY3RpdmF0aW9uKCk7XG5cbiAgICBJcm9uTWVudUJlaGF2aW9ySW1wbC5fYWN0aXZhdGVIYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyBhbiBpdGVtIGFmdGVyIGEgZGVsYXkgKGluIG1pbGxpc2Vjb25kcykuXG4gICAqL1xuICBfc2NoZWR1bGVBY3RpdmF0aW9uOiBmdW5jdGlvbihpdGVtLCBkZWxheSkge1xuICAgIHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uSXRlbSA9IGl0ZW07XG4gICAgdGhpcy5fcGVuZGluZ0FjdGl2YXRpb25UaW1lb3V0ID1cbiAgICAgICAgdGhpcy5hc3luYyh0aGlzLl9iaW5kRGVsYXllZEFjdGl2YXRpb25IYW5kbGVyLCBkZWxheSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgbGFzdCBpdGVtIGdpdmVuIHRvIGBfc2NoZWR1bGVBY3RpdmF0aW9uYC5cbiAgICovXG4gIF9kZWxheWVkQWN0aXZhdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtID0gdGhpcy5fcGVuZGluZ0FjdGl2YXRpb25JdGVtO1xuICAgIHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uSXRlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvblRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgaXRlbS5maXJlKHRoaXMuYWN0aXZhdGVFdmVudCwgbnVsbCwge2J1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWV9KTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VscyBhIHByZXZpb3VzbHkgc2NoZWR1bGVkIGl0ZW0gYWN0aXZhdGlvbiBtYWRlIHdpdGhcbiAgICogYF9zY2hlZHVsZUFjdGl2YXRpb25gLlxuICAgKi9cbiAgX2NhbmNlbFBlbmRpbmdBY3RpdmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcGVuZGluZ0FjdGl2YXRpb25UaW1lb3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsQXN5bmModGhpcy5fcGVuZGluZ0FjdGl2YXRpb25UaW1lb3V0KTtcbiAgICAgIHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG5cbiAgX29uQXJyb3dLZXl1cDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5hdXRvc2VsZWN0KSB7XG4gICAgICB0aGlzLl9zY2hlZHVsZUFjdGl2YXRpb24odGhpcy5mb2N1c2VkSXRlbSwgdGhpcy5hdXRvc2VsZWN0RGVsYXkpO1xuICAgIH1cbiAgfSxcblxuICBfb25CbHVyQ2FwdHVyZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBDYW5jZWwgYSBzY2hlZHVsZWQgaXRlbSBhY3RpdmF0aW9uIChpZiBhbnkpIHdoZW4gdGhhdCBpdGVtIGlzXG4gICAgLy8gYmx1cnJlZC5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvbkl0ZW0pIHtcbiAgICAgIHRoaXMuX2NhbmNlbFBlbmRpbmdBY3RpdmF0aW9uKCk7XG4gICAgfVxuICB9LFxuXG4gIGdldCBfdGFiQ29udGFpbmVyU2Nyb2xsU2l6ZSgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAgIDAsIHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbFdpZHRoIC0gdGhpcy4kLnRhYnNDb250YWluZXIub2Zmc2V0V2lkdGgpO1xuICB9LFxuXG4gIF9zY3JvbGw6IGZ1bmN0aW9uKGUsIGRldGFpbCkge1xuICAgIGlmICghdGhpcy5zY3JvbGxhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRkeCA9IChkZXRhaWwgJiYgLWRldGFpbC5kZHgpIHx8IDA7XG4gICAgdGhpcy5fYWZmZWN0U2Nyb2xsKGRkeCk7XG4gIH0sXG5cbiAgX2Rvd246IGZ1bmN0aW9uKGUpIHtcbiAgICAvLyBnbyBvbmUgYmVhdCBhc3luYyB0byBkZWZlYXQgSXJvbk1lbnVCZWhhdmlvclxuICAgIC8vIGF1dG9yZWZvY3VzLW9uLW5vLXNlbGVjdGlvbiB0aW1lb3V0XG4gICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYykge1xuICAgICAgICB0aGlzLmNhbmNlbEFzeW5jKHRoaXMuX2RlZmF1bHRGb2N1c0FzeW5jKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEZvY3VzQXN5bmMgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIDEpO1xuICB9LFxuXG4gIF9hZmZlY3RTY3JvbGw6IGZ1bmN0aW9uKGR4KSB7XG4gICAgdGhpcy4kLnRhYnNDb250YWluZXIuc2Nyb2xsTGVmdCArPSBkeDtcblxuICAgIHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kLnRhYnNDb250YWluZXIuc2Nyb2xsTGVmdDtcblxuICAgIHRoaXMuX2xlZnRIaWRkZW4gPSBzY3JvbGxMZWZ0ID09PSAwO1xuICAgIHRoaXMuX3JpZ2h0SGlkZGVuID0gc2Nyb2xsTGVmdCA9PT0gdGhpcy5fdGFiQ29udGFpbmVyU2Nyb2xsU2l6ZTtcbiAgfSxcblxuICBfb25MZWZ0U2Nyb2xsQnV0dG9uRG93bjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2Nyb2xsVG9MZWZ0KCk7XG4gICAgdGhpcy5faG9sZEpvYiA9IHNldEludGVydmFsKHRoaXMuX3Njcm9sbFRvTGVmdC5iaW5kKHRoaXMpLCB0aGlzLl9ob2xkRGVsYXkpO1xuICB9LFxuXG4gIF9vblJpZ2h0U2Nyb2xsQnV0dG9uRG93bjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2Nyb2xsVG9SaWdodCgpO1xuICAgIHRoaXMuX2hvbGRKb2IgPVxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLl9zY3JvbGxUb1JpZ2h0LmJpbmQodGhpcyksIHRoaXMuX2hvbGREZWxheSk7XG4gIH0sXG5cbiAgX29uU2Nyb2xsQnV0dG9uVXA6IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faG9sZEpvYik7XG4gICAgdGhpcy5faG9sZEpvYiA9IG51bGw7XG4gIH0sXG5cbiAgX3Njcm9sbFRvTGVmdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYWZmZWN0U2Nyb2xsKC10aGlzLl9zdGVwKTtcbiAgfSxcblxuICBfc2Nyb2xsVG9SaWdodDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYWZmZWN0U2Nyb2xsKHRoaXMuX3N0ZXApO1xuICB9LFxuXG4gIF90YWJDaGFuZ2VkOiBmdW5jdGlvbih0YWIsIG9sZCkge1xuICAgIGlmICghdGFiKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIGJhciB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICAgIHRoaXMuJC5zZWxlY3Rpb25CYXIuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJyk7XG4gICAgICB0aGlzLiQuc2VsZWN0aW9uQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRyYWN0Jyk7XG4gICAgICB0aGlzLl9wb3NpdGlvbkJhcigwLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgciA9IHRoaXMuJC50YWJzQ29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgdyA9IHIud2lkdGg7XG4gICAgdmFyIHRhYlJlY3QgPSB0YWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHRhYk9mZnNldExlZnQgPSB0YWJSZWN0LmxlZnQgLSByLmxlZnQ7XG5cbiAgICB0aGlzLl9wb3MgPSB7XG4gICAgICB3aWR0aDogdGhpcy5fY2FsY1BlcmNlbnQodGFiUmVjdC53aWR0aCwgdyksXG4gICAgICBsZWZ0OiB0aGlzLl9jYWxjUGVyY2VudCh0YWJPZmZzZXRMZWZ0LCB3KVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5ub1NsaWRlIHx8IG9sZCA9PSBudWxsKSB7XG4gICAgICAvLyBQb3NpdGlvbiB0aGUgYmFyIHdpdGhvdXQgYW5pbWF0aW9uLlxuICAgICAgdGhpcy4kLnNlbGVjdGlvbkJhci5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQnKTtcbiAgICAgIHRoaXMuJC5zZWxlY3Rpb25CYXIuY2xhc3NMaXN0LnJlbW92ZSgnY29udHJhY3QnKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQmFyKHRoaXMuX3Bvcy53aWR0aCwgdGhpcy5fcG9zLmxlZnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvbGRSZWN0ID0gb2xkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBvbGRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihvbGQpO1xuICAgIHZhciBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0YWIpO1xuICAgIHZhciBtID0gNTtcblxuICAgIC8vIGJhciBhbmltYXRpb246IGV4cGFuZFxuICAgIHRoaXMuJC5zZWxlY3Rpb25CYXIuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG5cbiAgICB2YXIgbW92ZVJpZ2h0ID0gb2xkSW5kZXggPCBpbmRleDtcbiAgICB2YXIgaXNSVEwgPSB0aGlzLl9pc1JUTDtcbiAgICBpZiAoaXNSVEwpIHtcbiAgICAgIG1vdmVSaWdodCA9ICFtb3ZlUmlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKG1vdmVSaWdodCkge1xuICAgICAgdGhpcy5fcG9zaXRpb25CYXIoXG4gICAgICAgICAgdGhpcy5fY2FsY1BlcmNlbnQodGFiUmVjdC5sZWZ0ICsgdGFiUmVjdC53aWR0aCAtIG9sZFJlY3QubGVmdCwgdykgLSBtLFxuICAgICAgICAgIHRoaXMuX2xlZnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbkJhcihcbiAgICAgICAgICB0aGlzLl9jYWxjUGVyY2VudChvbGRSZWN0LmxlZnQgKyBvbGRSZWN0LndpZHRoIC0gdGFiUmVjdC5sZWZ0LCB3KSAtIG0sXG4gICAgICAgICAgdGhpcy5fY2FsY1BlcmNlbnQodGFiT2Zmc2V0TGVmdCwgdykgKyBtKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxhYmxlKSB7XG4gICAgICB0aGlzLl9zY3JvbGxUb1NlbGVjdGVkSWZOZWVkZWQodGFiUmVjdC53aWR0aCwgdGFiT2Zmc2V0TGVmdCk7XG4gICAgfVxuICB9LFxuXG4gIF9zY3JvbGxUb1NlbGVjdGVkSWZOZWVkZWQ6IGZ1bmN0aW9uKHRhYldpZHRoLCB0YWJPZmZzZXRMZWZ0KSB7XG4gICAgdmFyIGwgPSB0YWJPZmZzZXRMZWZ0IC0gdGhpcy4kLnRhYnNDb250YWluZXIuc2Nyb2xsTGVmdDtcbiAgICBpZiAobCA8IDApIHtcbiAgICAgIHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbCArPSAodGFiV2lkdGggLSB0aGlzLiQudGFic0NvbnRhaW5lci5vZmZzZXRXaWR0aCk7XG4gICAgICBpZiAobCA+IDApIHtcbiAgICAgICAgdGhpcy4kLnRhYnNDb250YWluZXIuc2Nyb2xsTGVmdCArPSBsO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfY2FsY1BlcmNlbnQ6IGZ1bmN0aW9uKHcsIHcwKSB7XG4gICAgcmV0dXJuIDEwMCAqIHcgLyB3MDtcbiAgfSxcblxuICBfcG9zaXRpb25CYXI6IGZ1bmN0aW9uKHdpZHRoLCBsZWZ0KSB7XG4gICAgd2lkdGggPSB3aWR0aCB8fCAwO1xuICAgIGxlZnQgPSBsZWZ0IHx8IDA7XG5cbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuX2xlZnQgPSBsZWZ0O1xuICAgIHRoaXMudHJhbnNmb3JtKFxuICAgICAgICAndHJhbnNsYXRlWCgnICsgbGVmdCArICclKSBzY2FsZVgoJyArICh3aWR0aCAvIDEwMCkgKyAnKScsXG4gICAgICAgIHRoaXMuJC5zZWxlY3Rpb25CYXIpO1xuICB9LFxuXG4gIF9vbkJhclRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgY2wgPSB0aGlzLiQuc2VsZWN0aW9uQmFyLmNsYXNzTGlzdDtcbiAgICAvLyBiYXIgYW5pbWF0aW9uOiBleHBhbmQgLT4gY29udHJhY3RcbiAgICBpZiAoY2wuY29udGFpbnMoJ2V4cGFuZCcpKSB7XG4gICAgICBjbC5yZW1vdmUoJ2V4cGFuZCcpO1xuICAgICAgY2wuYWRkKCdjb250cmFjdCcpO1xuICAgICAgdGhpcy5fcG9zaXRpb25CYXIodGhpcy5fcG9zLndpZHRoLCB0aGlzLl9wb3MubGVmdCk7XG4gICAgICAvLyBiYXIgYW5pbWF0aW9uIGRvbmVcbiAgICB9IGVsc2UgaWYgKGNsLmNvbnRhaW5zKCdjb250cmFjdCcpKSB7XG4gICAgICBjbC5yZW1vdmUoJ2NvbnRyYWN0Jyk7XG4gICAgfVxuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhEQTtBQW9EQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFtRUE7QUFFQTtBQUVBO0FBRUE7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkhBOzs7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFFQTs7Ozs7QUFBQTtBQU1BOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFrSUE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBdEVBO0FBQ0E7QUF3RUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVmQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
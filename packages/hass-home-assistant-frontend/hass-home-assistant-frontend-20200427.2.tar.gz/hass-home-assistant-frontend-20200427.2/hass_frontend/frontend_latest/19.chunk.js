(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-radio-button/paper-radio-button.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/







const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
<style>
  :host {
    display: inline-block;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    @apply --paper-font-common-base;
    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);
    /* -1px is a sentinel for the default and is replace in \`attached\`. */
    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);
  }

  :host(:focus) {
    outline: none;
  }

  #radioContainer {
    @apply --layout-inline;
    @apply --layout-center-center;
    position: relative;
    width: var(--calculated-paper-radio-button-size);
    height: var(--calculated-paper-radio-button-size);
    vertical-align: middle;

    @apply --paper-radio-button-radio-container;
  }

  #ink {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    width: var(--calculated-paper-radio-button-ink-size);
    height: var(--calculated-paper-radio-button-ink-size);
    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #ink[checked] {
    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));
  }

  #offRadio, #onRadio {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #offRadio {
    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    background-color: var(--paper-radio-button-unchecked-background-color, transparent);
    transition: border-color 0.28s;
  }

  #onRadio {
    background-color: var(--paper-radio-button-checked-color, var(--primary-color));
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: -webkit-transform ease 0.28s;
    transition: transform ease 0.28s;
    will-change: transform;
  }

  :host([checked]) #offRadio {
    border-color: var(--paper-radio-button-checked-color, var(--primary-color));
  }

  :host([checked]) #onRadio {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  #radioLabel {
    line-height: normal;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: var(--paper-radio-button-label-spacing, 10px);
    white-space: normal;
    color: var(--paper-radio-button-label-color, var(--primary-text-color));

    @apply --paper-radio-button-label;
  }

  :host([checked]) #radioLabel {
    @apply --paper-radio-button-label-checked;
  }

  #radioLabel:dir(rtl) {
    margin-left: 0;
    margin-right: var(--paper-radio-button-label-spacing, 10px);
  }

  #radioLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #offRadio {
    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled][checked]) #onRadio {
    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #radioLabel {
    /* slightly darker than the button, so that it's readable */
    opacity: 0.65;
  }
</style>

<div id="radioContainer">
  <div id="offRadio"></div>
  <div id="onRadio"></div>
</div>

<div id="radioLabel"><slot></slot></div>`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Radio button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

`paper-radio-button` is a button that can be either checked or unchecked. The
user can tap the radio button to check or uncheck it.

Use a `<paper-radio-group>` to group a set of radio buttons. When radio buttons
are inside a radio group, exactly one radio button in the group can be checked
at any time.

Example:

    <paper-radio-button></paper-radio-button>
    <paper-radio-button>Item label</paper-radio-button>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-radio-button-unchecked-background-color` | Radio button background color when the input is not checked | `transparent`
`--paper-radio-button-unchecked-color` | Radio button color when the input is not checked | `--primary-text-color`
`--paper-radio-button-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
`--paper-radio-button-checked-color` | Radio button color when the input is checked | `--primary-color`
`--paper-radio-button-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-radio-button-size` | Size of the radio button | `16px`
`--paper-radio-button-ink-size` | Size of the ripple | `48px`
`--paper-radio-button-label-color` | Label color | `--primary-text-color`
`--paper-radio-button-label-spacing` | Spacing between the label and the button | `10px`
`--paper-radio-button-radio-container` | A mixin applied to the internal radio container | `{}`
`--paper-radio-button-label` | A mixin applied to the internal label | `{}`
`--paper-radio-button-label-checked` | A mixin applied to the internal label when the radio button is checked | `{}`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@group Paper Elements
@element paper-radio-button
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: template,
  is: 'paper-radio-button',
  behaviors: [_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperCheckedElementBehavior"]],
  hostAttributes: {
    role: 'radio',
    'aria-checked': false,
    tabindex: 0
  },
  properties: {
    /**
     * Fired when the checked state changes due to user interaction.
     *
     * @event change
     */

    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-checked'
    }
  },
  ready: function () {
    this._rippleContainer = this.$.radioContainer;
  },
  attached: function () {
    // Wait until styles have resolved to check for the default sentinel.
    // See polymer#4009 for more details.
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, function () {
      var inkSize = this.getComputedStyleValue('--calculated-paper-radio-button-ink-size').trim(); // If unset, compute and set the default `--paper-radio-button-ink-size`.

      if (inkSize === '-1px') {
        var size = parseFloat(this.getComputedStyleValue('--calculated-paper-radio-button-size').trim());
        var defaultInkSize = Math.floor(3 * size); // The button and ripple need to have the same parity so that their
        // centers align.

        if (defaultInkSize % 2 !== size % 2) {
          defaultInkSize++;
        }

        this.updateStyles({
          '--paper-radio-button-ink-size': defaultInkSize + 'px'
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-radio-group/paper-radio-group.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button.js */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menubar-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
Material design: [Radio
button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

`paper-radio-group` allows user to select at most one radio button from a set.
Checking one radio button that belongs to a radio group unchecks any
previously checked radio button within the same group. Use
`selected` to get or set the selected radio button.

The <paper-radio-buttons> inside the group must have the `name` attribute
set.

Example:

    <paper-radio-group selected="small">
      <paper-radio-button name="small">Small</paper-radio-button>
      <paper-radio-button name="medium">Medium</paper-radio-button>
      <paper-radio-button name="large">Large</paper-radio-button>
    </paper-radio-group>

Radio-button-groups can be made optional, and allow zero buttons to be selected:

    <paper-radio-group selected="small" allow-empty-selection>
      <paper-radio-button name="small">Small</paper-radio-button>
      <paper-radio-button name="medium">Medium</paper-radio-button>
      <paper-radio-button name="large">Large</paper-radio-button>
    </paper-radio-group>

See <a href="paper-radio-button">paper-radio-button</a> for more
information about `paper-radio-button`.


Custom property | Description | Default
----------------|-------------|----------
`--paper-radio-group-item-padding` | The padding of the item | `12px`

@group Paper Elements
@element paper-radio-group
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style>
      :host {
        display: inline-block;
      }

      :host ::slotted(*) {
        padding: var(--paper-radio-group-item-padding, 12px);
      }
    </style>

    <slot></slot>
`,
  is: 'paper-radio-group',
  behaviors: [_polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'radiogroup'
  },
  properties: {
    /**
     * Fired when the radio group selection changes.
     *
     * @event paper-radio-group-changed
     */

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    attrForSelected: {
      type: String,
      value: 'name'
    },

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectedAttribute: {
      type: String,
      value: 'checked'
    },

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectable: {
      type: String,
      value: 'paper-radio-button'
    },

    /**
     * If true, radio-buttons can be deselected
     */
    allowEmptySelection: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Selects the given value.
   */
  select: function (value) {
    var newItem = this._valueToItem(value);

    if (newItem && newItem.hasAttribute('disabled')) {
      return;
    }

    if (this.selected) {
      var oldItem = this._valueToItem(this.selected);

      if (this.selected == value) {
        // If deselecting is allowed we'll have to apply an empty selection.
        // Otherwise, we should force the selection to stay and make this
        // action a no-op.
        if (this.allowEmptySelection) {
          value = '';
        } else {
          if (oldItem) oldItem.checked = true;
          return;
        }
      }

      if (oldItem) oldItem.checked = false;
    }

    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_4__["IronSelectableBehavior"].select.apply(this, [value]);
    this.fire('paper-radio-group-changed');
  },
  _activateFocusedItem: function () {
    this._itemActivate(this._valueForItem(this.focusedItem), this.focusedItem);
  },
  _onUpKey: function (event) {
    this._focusPrevious();

    event.preventDefault();

    this._activateFocusedItem();
  },
  _onDownKey: function (event) {
    this._focusNext();

    event.preventDefault();

    this._activateFocusedItem();
  },
  _onLeftKey: function (event) {
    _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehaviorImpl"]._onLeftKey.apply(this, arguments);

    this._activateFocusedItem();
  },
  _onRightKey: function (event) {
    _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehaviorImpl"]._onRightKey.apply(this, arguments);

    this._activateFocusedItem();
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7YWZ0ZXJOZXh0UmVuZGVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9yZW5kZXItc3RhdHVzLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1zaXplOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tc2l6ZSwgMTZweCk7XG4gICAgLyogLTFweCBpcyBhIHNlbnRpbmVsIGZvciB0aGUgZGVmYXVsdCBhbmQgaXMgcmVwbGFjZSBpbiBcXGBhdHRhY2hlZFxcYC4gKi9cbiAgICAtLWNhbGN1bGF0ZWQtcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemUsIC0xcHgpO1xuICB9XG5cbiAgOmhvc3QoOmZvY3VzKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICNyYWRpb0NvbnRhaW5lciB7XG4gICAgQGFwcGx5IC0tbGF5b3V0LWlubGluZTtcbiAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItcmFkaW8tYnV0dG9uLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24tc2l6ZSk7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgIEBhcHBseSAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1yYWRpby1jb250YWluZXI7XG4gIH1cblxuICAjaW5rIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1pbmstc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1pbmstc2l6ZSk7XG4gICAgY29sb3I6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQtaW5rLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4gICNpbmtbY2hlY2tlZF0ge1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tY2hlY2tlZC1pbmstY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgfVxuXG4gICNvZmZSYWRpbywgI29uUmFkaW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAjb2ZmUmFkaW8ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQtYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI4cztcbiAgfVxuXG4gICNvblJhZGlvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIGVhc2UgMC4yOHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UgMC4yOHM7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgfVxuXG4gIDpob3N0KFtjaGVja2VkXSkgI29mZlJhZGlvIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi1jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gIH1cblxuICA6aG9zdChbY2hlY2tlZF0pICNvblJhZGlvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIH1cblxuICAjcmFkaW9MYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbC1zcGFjaW5nLCAxMHB4KTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuXG4gICAgQGFwcGx5IC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsO1xuICB9XG5cbiAgOmhvc3QoW2NoZWNrZWRdKSAjcmFkaW9MYWJlbCB7XG4gICAgQGFwcGx5IC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsLWNoZWNrZWQ7XG4gIH1cblxuICAjcmFkaW9MYWJlbDpkaXIocnRsKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtc3BhY2luZywgMTBweCk7XG4gIH1cblxuICAjcmFkaW9MYWJlbFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogZGlzYWJsZWQgc3RhdGUgKi9cblxuICA6aG9zdChbZGlzYWJsZWRdKSAjb2ZmUmFkaW8ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgOmhvc3QoW2Rpc2FibGVkXVtjaGVja2VkXSkgI29uUmFkaW8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIDpob3N0KFtkaXNhYmxlZF0pICNyYWRpb0xhYmVsIHtcbiAgICAvKiBzbGlnaHRseSBkYXJrZXIgdGhhbiB0aGUgYnV0dG9uLCBzbyB0aGF0IGl0J3MgcmVhZGFibGUgKi9cbiAgICBvcGFjaXR5OiAwLjY1O1xuICB9XG48L3N0eWxlPlxuXG48ZGl2IGlkPVwicmFkaW9Db250YWluZXJcIj5cbiAgPGRpdiBpZD1cIm9mZlJhZGlvXCI+PC9kaXY+XG4gIDxkaXYgaWQ9XCJvblJhZGlvXCI+PC9kaXY+XG48L2Rpdj5cblxuPGRpdiBpZD1cInJhZGlvTGFiZWxcIj48c2xvdD48L3Nsb3Q+PC9kaXY+YDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtSYWRpbyBidXR0b25dKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzZWxlY3Rpb24tY29udHJvbHMtcmFkaW8tYnV0dG9uKVxuXG5gcGFwZXItcmFkaW8tYnV0dG9uYCBpcyBhIGJ1dHRvbiB0aGF0IGNhbiBiZSBlaXRoZXIgY2hlY2tlZCBvciB1bmNoZWNrZWQuIFRoZVxudXNlciBjYW4gdGFwIHRoZSByYWRpbyBidXR0b24gdG8gY2hlY2sgb3IgdW5jaGVjayBpdC5cblxuVXNlIGEgYDxwYXBlci1yYWRpby1ncm91cD5gIHRvIGdyb3VwIGEgc2V0IG9mIHJhZGlvIGJ1dHRvbnMuIFdoZW4gcmFkaW8gYnV0dG9uc1xuYXJlIGluc2lkZSBhIHJhZGlvIGdyb3VwLCBleGFjdGx5IG9uZSByYWRpbyBidXR0b24gaW4gdGhlIGdyb3VwIGNhbiBiZSBjaGVja2VkXG5hdCBhbnkgdGltZS5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1yYWRpby1idXR0b24+PC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgPHBhcGVyLXJhZGlvLWJ1dHRvbj5JdGVtIGxhYmVsPC9wYXBlci1yYWRpby1idXR0b24+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWJhY2tncm91bmQtY29sb3JgIHwgUmFkaW8gYnV0dG9uIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgdHJhbnNwYXJlbnRgXG5gLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWNvbG9yYCB8IFJhZGlvIGJ1dHRvbiBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQtaW5rLWNvbG9yYCB8IFNlbGVjdGVkL2ZvY3VzIHJpcHBsZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1jaGVja2VkLWNvbG9yYCB8IFJhZGlvIGJ1dHRvbiBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYC0tcHJpbWFyeS1jb2xvcmBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1jaGVja2VkLWluay1jb2xvcmAgfCBTZWxlY3RlZC9mb2N1cyByaXBwbGUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1yYWRpby1idXR0b24tc2l6ZWAgfCBTaXplIG9mIHRoZSByYWRpbyBidXR0b24gfCBgMTZweGBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1pbmstc2l6ZWAgfCBTaXplIG9mIHRoZSByaXBwbGUgfCBgNDhweGBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbC1jb2xvcmAgfCBMYWJlbCBjb2xvciB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbC1zcGFjaW5nYCB8IFNwYWNpbmcgYmV0d2VlbiB0aGUgbGFiZWwgYW5kIHRoZSBidXR0b24gfCBgMTBweGBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1yYWRpby1jb250YWluZXJgIHwgQSBtaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCByYWRpbyBjb250YWluZXIgfCBge31gXG5gLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWxgIHwgQSBtaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBsYWJlbCB8IGB7fWBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbC1jaGVja2VkYCB8IEEgbWl4aW4gYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgbGFiZWwgd2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQgfCBge31gXG5cblRoaXMgZWxlbWVudCBhcHBsaWVzIHRoZSBtaXhpbiBgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlYCBidXQgZG9lcyBub3QgaW1wb3J0XG5gcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuIEluIG9yZGVyIHRvIGFwcGx5IHRoZSBgUm9ib3RvYCBmb250IHRvIHRoaXNcbmVsZW1lbnQsIG1ha2Ugc3VyZSB5b3UndmUgaW1wb3J0ZWQgYHBhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxgLlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXJhZGlvLWJ1dHRvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1yYWRpby1idXR0b24nLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcl0sXG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAncmFkaW8nLCAnYXJpYS1jaGVja2VkJzogZmFsc2UsIHRhYmluZGV4OiAwfSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqXG4gICAgICogQGV2ZW50IGNoYW5nZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQGV2ZW50IGlyb24tY2hhbmdlXG4gICAgICovXG5cbiAgICBhcmlhQWN0aXZlQXR0cmlidXRlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2FyaWEtY2hlY2tlZCd9XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuJC5yYWRpb0NvbnRhaW5lcjtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gV2FpdCB1bnRpbCBzdHlsZXMgaGF2ZSByZXNvbHZlZCB0byBjaGVjayBmb3IgdGhlIGRlZmF1bHQgc2VudGluZWwuXG4gICAgLy8gU2VlIHBvbHltZXIjNDAwOSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIGFmdGVyTmV4dFJlbmRlcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbmtTaXplID1cbiAgICAgICAgICB0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1pbmstc2l6ZScpXG4gICAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAvLyBJZiB1bnNldCwgY29tcHV0ZSBhbmQgc2V0IHRoZSBkZWZhdWx0IGAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1pbmstc2l6ZWAuXG4gICAgICBpZiAoaW5rU2l6ZSA9PT0gJy0xcHgnKSB7XG4gICAgICAgIHZhciBzaXplID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWNhbGN1bGF0ZWQtcGFwZXItcmFkaW8tYnV0dG9uLXNpemUnKVxuICAgICAgICAgICAgICAgIC50cmltKCkpO1xuICAgICAgICB2YXIgZGVmYXVsdElua1NpemUgPSBNYXRoLmZsb29yKDMgKiBzaXplKTtcblxuICAgICAgICAvLyBUaGUgYnV0dG9uIGFuZCByaXBwbGUgbmVlZCB0byBoYXZlIHRoZSBzYW1lIHBhcml0eSBzbyB0aGF0IHRoZWlyXG4gICAgICAgIC8vIGNlbnRlcnMgYWxpZ24uXG4gICAgICAgIGlmIChkZWZhdWx0SW5rU2l6ZSAlIDIgIT09IHNpemUgJSAyKSB7XG4gICAgICAgICAgZGVmYXVsdElua1NpemUrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgICAnLS1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemUnOiBkZWZhdWx0SW5rU2l6ZSArICdweCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSlcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uLmpzJztcblxuaW1wb3J0IHtJcm9uTWVudWJhckJlaGF2aW9yLCBJcm9uTWVudWJhckJlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZW51LWJlaGF2aW9yL2lyb24tbWVudWJhci1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25TZWxlY3RhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tc2VsZWN0b3IvaXJvbi1zZWxlY3RhYmxlLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUmFkaW9cbmJ1dHRvbl0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NlbGVjdGlvbi1jb250cm9scy1yYWRpby1idXR0b24pXG5cbmBwYXBlci1yYWRpby1ncm91cGAgYWxsb3dzIHVzZXIgdG8gc2VsZWN0IGF0IG1vc3Qgb25lIHJhZGlvIGJ1dHRvbiBmcm9tIGEgc2V0LlxuQ2hlY2tpbmcgb25lIHJhZGlvIGJ1dHRvbiB0aGF0IGJlbG9uZ3MgdG8gYSByYWRpbyBncm91cCB1bmNoZWNrcyBhbnlcbnByZXZpb3VzbHkgY2hlY2tlZCByYWRpbyBidXR0b24gd2l0aGluIHRoZSBzYW1lIGdyb3VwLiBVc2VcbmBzZWxlY3RlZGAgdG8gZ2V0IG9yIHNldCB0aGUgc2VsZWN0ZWQgcmFkaW8gYnV0dG9uLlxuXG5UaGUgPHBhcGVyLXJhZGlvLWJ1dHRvbnM+IGluc2lkZSB0aGUgZ3JvdXAgbXVzdCBoYXZlIHRoZSBgbmFtZWAgYXR0cmlidXRlXG5zZXQuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItcmFkaW8tZ3JvdXAgc2VsZWN0ZWQ9XCJzbWFsbFwiPlxuICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic21hbGxcIj5TbWFsbDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwibWVkaXVtXCI+TWVkaXVtPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJsYXJnZVwiPkxhcmdlPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgPC9wYXBlci1yYWRpby1ncm91cD5cblxuUmFkaW8tYnV0dG9uLWdyb3VwcyBjYW4gYmUgbWFkZSBvcHRpb25hbCwgYW5kIGFsbG93IHplcm8gYnV0dG9ucyB0byBiZSBzZWxlY3RlZDpcblxuICAgIDxwYXBlci1yYWRpby1ncm91cCBzZWxlY3RlZD1cInNtYWxsXCIgYWxsb3ctZW1wdHktc2VsZWN0aW9uPlxuICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic21hbGxcIj5TbWFsbDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwibWVkaXVtXCI+TWVkaXVtPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJsYXJnZVwiPkxhcmdlPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgPC9wYXBlci1yYWRpby1ncm91cD5cblxuU2VlIDxhIGhyZWY9XCJwYXBlci1yYWRpby1idXR0b25cIj5wYXBlci1yYWRpby1idXR0b248L2E+IGZvciBtb3JlXG5pbmZvcm1hdGlvbiBhYm91dCBgcGFwZXItcmFkaW8tYnV0dG9uYC5cblxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1yYWRpby1ncm91cC1pdGVtLXBhZGRpbmdgIHwgVGhlIHBhZGRpbmcgb2YgdGhlIGl0ZW0gfCBgMTJweGBcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1yYWRpby1ncm91cFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKCopIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFwZXItcmFkaW8tZ3JvdXAtaXRlbS1wYWRkaW5nLCAxMnB4KTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLXJhZGlvLWdyb3VwJyxcbiAgYmVoYXZpb3JzOiBbSXJvbk1lbnViYXJCZWhhdmlvcl0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7XG4gICAgcm9sZTogJ3JhZGlvZ3JvdXAnLFxuICB9LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSByYWRpbyBncm91cCBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBldmVudCBwYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZW4gZnJvbSBQb2x5bWVyLklyb25TZWxlY3RhYmxlQmVoYXZpb3JcbiAgICAgKi9cbiAgICBhdHRyRm9yU2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnbmFtZSd9LFxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVuIGZyb20gUG9seW1lci5Jcm9uU2VsZWN0YWJsZUJlaGF2aW9yXG4gICAgICovXG4gICAgc2VsZWN0ZWRBdHRyaWJ1dGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnY2hlY2tlZCd9LFxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVuIGZyb20gUG9seW1lci5Jcm9uU2VsZWN0YWJsZUJlaGF2aW9yXG4gICAgICovXG4gICAgc2VsZWN0YWJsZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdwYXBlci1yYWRpby1idXR0b24nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJhZGlvLWJ1dHRvbnMgY2FuIGJlIGRlc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBhbGxvd0VtcHR5U2VsZWN0aW9uOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICovXG4gIHNlbGVjdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgbmV3SXRlbSA9IHRoaXMuX3ZhbHVlVG9JdGVtKHZhbHVlKTtcbiAgICBpZiAobmV3SXRlbSAmJiBuZXdJdGVtLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB2YXIgb2xkSXRlbSA9IHRoaXMuX3ZhbHVlVG9JdGVtKHRoaXMuc2VsZWN0ZWQpO1xuXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSB2YWx1ZSkge1xuICAgICAgICAvLyBJZiBkZXNlbGVjdGluZyBpcyBhbGxvd2VkIHdlJ2xsIGhhdmUgdG8gYXBwbHkgYW4gZW1wdHkgc2VsZWN0aW9uLlxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIHNob3VsZCBmb3JjZSB0aGUgc2VsZWN0aW9uIHRvIHN0YXkgYW5kIG1ha2UgdGhpc1xuICAgICAgICAvLyBhY3Rpb24gYSBuby1vcC5cbiAgICAgICAgaWYgKHRoaXMuYWxsb3dFbXB0eVNlbGVjdGlvbikge1xuICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG9sZEl0ZW0pXG4gICAgICAgICAgICBvbGRJdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob2xkSXRlbSlcbiAgICAgICAgb2xkSXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgSXJvblNlbGVjdGFibGVCZWhhdmlvci5zZWxlY3QuYXBwbHkodGhpcywgW3ZhbHVlXSk7XG4gICAgdGhpcy5maXJlKCdwYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkJyk7XG4gIH0sXG5cbiAgX2FjdGl2YXRlRm9jdXNlZEl0ZW06IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2l0ZW1BY3RpdmF0ZSh0aGlzLl92YWx1ZUZvckl0ZW0odGhpcy5mb2N1c2VkSXRlbSksIHRoaXMuZm9jdXNlZEl0ZW0pO1xuICB9LFxuXG4gIF9vblVwS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX2ZvY3VzUHJldmlvdXMoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX2FjdGl2YXRlRm9jdXNlZEl0ZW0oKTtcbiAgfSxcblxuICBfb25Eb3duS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX2ZvY3VzTmV4dCgpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5fYWN0aXZhdGVGb2N1c2VkSXRlbSgpO1xuICB9LFxuXG4gIF9vbkxlZnRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgSXJvbk1lbnViYXJCZWhhdmlvckltcGwuX29uTGVmdEtleS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuX2FjdGl2YXRlRm9jdXNlZEl0ZW0oKTtcbiAgfSxcblxuICBfb25SaWdodEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBJcm9uTWVudWJhckJlaGF2aW9ySW1wbC5fb25SaWdodEtleS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuX2FjdGl2YXRlRm9jdXNlZEl0ZW0oKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQXREQTs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBO0FBQ0E7Ozs7Ozs7Ozs7OztBQURBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUF6QkE7QUFDQTtBQTJCQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE1R0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
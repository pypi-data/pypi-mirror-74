(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js ***!
  \**********************************************************************************************/
/*! exports provided: IronCheckedElementBehaviorImpl, IronCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehaviorImpl", function() { return IronCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehavior", function() { return IronCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
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
 * Use `IronCheckedElementBehavior` to implement a custom element that has a
 * `checked` property, which can be used for validation if the element is also
 * `required`. Element instances implementing this behavior will also be
 * registered for use in an `iron-form` element.
 *
 * @demo demo/index.html
 * @polymerBehavior IronCheckedElementBehavior
 */

const IronCheckedElementBehaviorImpl = {
  properties: {
    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */

    /**
     * Gets or sets the state, `true` is checked and `false` is unchecked.
     */
    checked: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      notify: true,
      observer: '_checkedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {
      type: Boolean,
      value: true,
      reflectToAttribute: true
    },

    /* Overriden from IronFormElementBehavior */
    value: {
      type: String,
      value: 'on',
      observer: '_valueChanged'
    }
  },
  observers: ['_requiredChanged(required)'],
  created: function () {
    // Used by `iron-form` to handle the case that an element with this behavior
    // doesn't have a role of 'checkbox' or 'radio', but should still only be
    // included when the form is serialized if `this.checked === true`.
    this._hasIronCheckedElementBehavior = true;
  },

  /**
   * Returns false if the element is required and not checked, and true
   * otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false or if `checked` is true.
   */
  _getValidity: function (_value) {
    return this.disabled || !this.required || this.checked;
  },

  /**
   * Update the aria-required label when `required` is changed.
   */
  _requiredChanged: function () {
    if (this.required) {
      this.setAttribute('aria-required', 'true');
    } else {
      this.removeAttribute('aria-required');
    }
  },

  /**
   * Fire `iron-changed` when the checked state changes.
   */
  _checkedChanged: function () {
    this.active = this.checked;
    this.fire('iron-change');
  },

  /**
   * Reset value to 'on' if it is set to `undefined`.
   */
  _valueChanged: function () {
    if (this.value === undefined || this.value === null) {
      this.value = 'on';
    }
  }
};
/** @polymerBehavior */

const IronCheckedElementBehavior = [_polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"], IronCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js ***!
  \*********************************************************************************/
/*! exports provided: PaperCheckedElementBehaviorImpl, PaperCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehaviorImpl", function() { return PaperCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehavior", function() { return PaperCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-checked-element-behavior/iron-checked-element-behavior.js */ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js");
/* harmony import */ var _paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
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
 * Use `PaperCheckedElementBehavior` to implement a custom element that has a
 * `checked` property similar to `IronCheckedElementBehavior` and is compatible
 * with having a ripple effect.
 * @polymerBehavior PaperCheckedElementBehavior
 */

const PaperCheckedElementBehaviorImpl = {
  /**
   * Synchronizes the element's checked state with its ripple effect.
   */
  _checkedChanged: function () {
    _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehaviorImpl"]._checkedChanged.call(this);

    if (this.hasRipple()) {
      if (this.checked) {
        this._ripple.setAttribute('checked', '');
      } else {
        this._ripple.removeAttribute('checked');
      }
    }
  },

  /**
   * Synchronizes the element's `active` and `checked` state.
   */
  _buttonStateChanged: function () {
    _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._buttonStateChanged.call(this);

    if (this.disabled) {
      return;
    }

    if (this.isAttached) {
      this.checked = this.active;
    }
  }
};
/** @polymerBehavior */

const PaperCheckedElementBehavior = [_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperInkyFocusBehavior"], _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehavior"], PaperCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/paper-checkbox/paper-checkbox.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js");
/* harmony import */ var _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/







const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;

    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);
    transition-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;

    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);
    animation-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;
template.setAttribute('strip-whitespace', '');
/**
Material design:
[Checkbox](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox)

`paper-checkbox` is a button that can be either checked or unchecked. User can
tap the checkbox to check or uncheck it. Usually you use checkboxes to allow
user to select multiple options from a set. If you have a single ON/OFF option,
avoid using a single checkbox and use `paper-toggle-button` instead.

Example:

    <paper-checkbox>label</paper-checkbox>

    <paper-checkbox checked> label</paper-checkbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-checkbox-unchecked-background-color` | Checkbox background color when the input is not checked | `transparent`
`--paper-checkbox-unchecked-color` | Checkbox border color when the input is not checked | `--primary-text-color`
`--paper-checkbox-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
`--paper-checkbox-checked-color` | Checkbox color when the input is checked | `--primary-color`
`--paper-checkbox-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-checkbox-checkmark-color` | Checkmark color | `white`
`--paper-checkbox-label-color` | Label color | `--primary-text-color`
`--paper-checkbox-label-checked-color` | Label color when the input is checked | `--paper-checkbox-label-color`
`--paper-checkbox-label-spacing` | Spacing between the label and the checkbox | `8px`
`--paper-checkbox-label` | Mixin applied to the label | `{}`
`--paper-checkbox-label-checked` | Mixin applied to the label when the input is checked | `{}`
`--paper-checkbox-error-color` | Checkbox color when invalid | `--error-color`
`--paper-checkbox-size` | Size of the checkbox | `18px`
`--paper-checkbox-ink-size` | Size of the ripple | `48px`
`--paper-checkbox-margin` | Margin around the checkbox container | `initial`
`--paper-checkbox-vertical-align` | Vertical alignment of the checkbox container | `middle`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: template,
  is: 'paper-checkbox',
  behaviors: [_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperCheckedElementBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'checkbox',
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
  attached: function () {
    // Wait until styles have resolved to check for the default sentinel.
    // See polymer#4009 for more details.
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, function () {
      var inkSize = this.getComputedStyleValue('--calculated-paper-checkbox-ink-size').trim(); // If unset, compute and set the default `--paper-checkbox-ink-size`.

      if (inkSize === '-1px') {
        var checkboxSizeText = this.getComputedStyleValue('--calculated-paper-checkbox-size').trim();
        var units = 'px';
        var unitsMatches = checkboxSizeText.match(/[A-Za-z]+$/);

        if (unitsMatches !== null) {
          units = unitsMatches[0];
        }

        var checkboxSize = parseFloat(checkboxSizeText);
        var defaultInkSize = 8 / 3 * checkboxSize;

        if (units === 'px') {
          defaultInkSize = Math.floor(defaultInkSize); // The checkbox and ripple need to have the same parity so that their
          // centers align.

          if (defaultInkSize % 2 !== checkboxSize % 2) {
            defaultInkSize++;
          }
        }

        this.updateStyles({
          '--paper-checkbox-ink-size': defaultInkSize + units
        });
      }
    });
  },
  _computeCheckboxClass: function (checked, invalid) {
    var className = '';

    if (checked) {
      className += 'checked ';
    }

    if (invalid) {
      className += 'invalid';
    }

    return className;
  },
  _computeCheckmarkClass: function (checked) {
    return checked ? '' : 'hidden';
  },
  // create ripple inside the checkboxContainer
  _createRipple: function () {
    this._rippleContainer = this.$.checkboxContainer;
    return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperInkyFocusBehaviorImpl"]._createRipple.call(this);
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uVmFsaWRhdGFibGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBVc2UgYElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYSBjdXN0b20gZWxlbWVudCB0aGF0IGhhcyBhXG4gKiBgY2hlY2tlZGAgcHJvcGVydHksIHdoaWNoIGNhbiBiZSB1c2VkIGZvciB2YWxpZGF0aW9uIGlmIHRoZSBlbGVtZW50IGlzIGFsc29cbiAqIGByZXF1aXJlZGAuIEVsZW1lbnQgaW5zdGFuY2VzIGltcGxlbWVudGluZyB0aGlzIGJlaGF2aW9yIHdpbGwgYWxzbyBiZVxuICogcmVnaXN0ZXJlZCBmb3IgdXNlIGluIGFuIGBpcm9uLWZvcm1gIGVsZW1lbnQuXG4gKlxuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKiBAcG9seW1lckJlaGF2aW9yIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGwgPSB7XG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBldmVudCBpcm9uLWNoYW5nZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBzdGF0ZSwgYHRydWVgIGlzIGNoZWNrZWQgYW5kIGBmYWxzZWAgaXMgdW5jaGVja2VkLlxuICAgICAqL1xuICAgIGNoZWNrZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgICBvYnNlcnZlcjogJ19jaGVja2VkQ2hhbmdlZCdcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB0b2dnbGVzIHRoZSBhY3RpdmUgc3RhdGUgd2l0aCBlYWNoIHRhcCBvciBwcmVzc1xuICAgICAqIG9mIHRoZSBzcGFjZWJhci5cbiAgICAgKi9cbiAgICB0b2dnbGVzOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IHRydWUsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKiBPdmVycmlkZW4gZnJvbSBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvciAqL1xuICAgIHZhbHVlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ29uJywgb2JzZXJ2ZXI6ICdfdmFsdWVDaGFuZ2VkJ31cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX3JlcXVpcmVkQ2hhbmdlZChyZXF1aXJlZCknXSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBVc2VkIGJ5IGBpcm9uLWZvcm1gIHRvIGhhbmRsZSB0aGUgY2FzZSB0aGF0IGFuIGVsZW1lbnQgd2l0aCB0aGlzIGJlaGF2aW9yXG4gICAgLy8gZG9lc24ndCBoYXZlIGEgcm9sZSBvZiAnY2hlY2tib3gnIG9yICdyYWRpbycsIGJ1dCBzaG91bGQgc3RpbGwgb25seSBiZVxuICAgIC8vIGluY2x1ZGVkIHdoZW4gdGhlIGZvcm0gaXMgc2VyaWFsaXplZCBpZiBgdGhpcy5jaGVja2VkID09PSB0cnVlYC5cbiAgICB0aGlzLl9oYXNJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciA9IHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgYW5kIG5vdCBjaGVja2VkLCBhbmQgdHJ1ZVxuICAgKiBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB7Kj19IF92YWx1ZSBJZ25vcmVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGByZXF1aXJlZGAgaXMgZmFsc2Ugb3IgaWYgYGNoZWNrZWRgIGlzIHRydWUuXG4gICAqL1xuICBfZ2V0VmFsaWRpdHk6IGZ1bmN0aW9uKF92YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8ICF0aGlzLnJlcXVpcmVkIHx8IHRoaXMuY2hlY2tlZDtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBhcmlhLXJlcXVpcmVkIGxhYmVsIHdoZW4gYHJlcXVpcmVkYCBpcyBjaGFuZ2VkLlxuICAgKi9cbiAgX3JlcXVpcmVkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtcmVxdWlyZWQnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZpcmUgYGlyb24tY2hhbmdlZGAgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBjaGFuZ2VzLlxuICAgKi9cbiAgX2NoZWNrZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuY2hlY2tlZDtcbiAgICB0aGlzLmZpcmUoJ2lyb24tY2hhbmdlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0IHZhbHVlIHRvICdvbicgaWYgaXQgaXMgc2V0IHRvIGB1bmRlZmluZWRgLlxuICAgKi9cbiAgX3ZhbHVlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJ29uJztcbiAgICB9XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSBbXG4gIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yLFxuICBJcm9uVmFsaWRhdGFibGVCZWhhdmlvcixcbiAgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsXG5dO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yLCBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yL2lyb24tY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzJztcblxuaW1wb3J0IHtQYXBlcklua3lGb2N1c0JlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWlua3ktZm9jdXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogVXNlIGBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JgIHRvIGltcGxlbWVudCBhIGN1c3RvbSBlbGVtZW50IHRoYXQgaGFzIGFcbiAqIGBjaGVja2VkYCBwcm9wZXJ0eSBzaW1pbGFyIHRvIGBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgYW5kIGlzIGNvbXBhdGlibGVcbiAqIHdpdGggaGF2aW5nIGEgcmlwcGxlIGVmZmVjdC5cbiAqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsID0ge1xuICAvKipcbiAgICogU3luY2hyb25pemVzIHRoZSBlbGVtZW50J3MgY2hlY2tlZCBzdGF0ZSB3aXRoIGl0cyByaXBwbGUgZWZmZWN0LlxuICAgKi9cbiAgX2NoZWNrZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGwuX2NoZWNrZWRDaGFuZ2VkLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyB0aGUgZWxlbWVudCdzIGBhY3RpdmVgIGFuZCBgY2hlY2tlZGAgc3RhdGUuXG4gICAqL1xuICBfYnV0dG9uU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBQYXBlclJpcHBsZUJlaGF2aW9yLl9idXR0b25TdGF0ZUNoYW5nZWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmFjdGl2ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yID0gW1xuICBQYXBlcklua3lGb2N1c0JlaGF2aW9yLFxuICBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcixcbiAgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UGFwZXJJbmt5Rm9jdXNCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1pbmt5LWZvY3VzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge2FmdGVyTmV4dFJlbmRlcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGA8c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemU6IHZhcigtLXBhcGVyLWNoZWNrYm94LXNpemUsIDE4cHgpO1xuICAgIC8qIC0xcHggaXMgYSBzZW50aW5lbCBmb3IgdGhlIGRlZmF1bHQgYW5kIGlzIHJlcGxhY2VkIGluIFxcYGF0dGFjaGVkXFxgLiAqL1xuICAgIC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZTogdmFyKC0tcGFwZXItY2hlY2tib3gtaW5rLXNpemUsIC0xcHgpO1xuICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgOmhvc3QoOmZvY3VzKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjY2hlY2tib3hDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpO1xuICAgIG1pbi13aWR0aDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKTtcbiAgICBtYXJnaW46IHZhcigtLXBhcGVyLWNoZWNrYm94LW1hcmdpbiwgaW5pdGlhbCk7XG4gICAgdmVydGljYWwtYWxpZ246IHZhcigtLXBhcGVyLWNoZWNrYm94LXZlcnRpY2FsLWFsaWduLCBtaWRkbGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gIH1cblxuICAjaW5rIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAvKiBDZW50ZXIgdGhlIHJpcHBsZSBpbiB0aGUgY2hlY2tib3ggYnkgbmVnYXRpdmUgb2Zmc2V0dGluZyBpdCBieVxuICAgICAqIChpbmtXaWR0aCAtIHJpcHBsZVdpZHRoKSAvIDIgKi9cbiAgICB0b3A6IGNhbGMoMHB4IC0gKHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemUpIC0gdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKSkgLyAyKTtcbiAgICBsZWZ0OiBjYWxjKDBweCAtICh2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplKSAtIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpIC8gMik7XG4gICAgd2lkdGg6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZSk7XG4gICAgY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1pbmstY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gICNpbms6ZGlyKHJ0bCkge1xuICAgIHJpZ2h0OiBjYWxjKDBweCAtICh2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplKSAtIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpIC8gMik7XG4gICAgbGVmdDogYXV0bztcbiAgfVxuXG4gICNpbmtbY2hlY2tlZF0ge1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1jaGVja2VkLWluay1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICB9XG5cbiAgI2NoZWNrYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHg7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMsIGJvcmRlci1jb2xvciAxNDBtcztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zLCBib3JkZXItY29sb3IgMTQwbXM7XG5cbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLWNoZWNrYm94LWFuaW1hdGlvbi1kdXJhdGlvbiwgMTQwbXMpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLWNoZWNrYm94LWFuaW1hdGlvbi1kdXJhdGlvbiwgMTQwbXMpO1xuICB9XG5cbiAgLyogY2hlY2tib3ggY2hlY2tlZCBhbmltYXRpb25zICovXG4gICNjaGVja2JveC5jaGVja2VkICNjaGVja21hcmsge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja21hcmstZXhwYW5kIDE0MG1zIGVhc2Utb3V0IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogY2hlY2ttYXJrLWV4cGFuZCAxNDBtcyBlYXNlLW91dCBmb3J3YXJkcztcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1jaGVja2JveC1hbmltYXRpb24tZHVyYXRpb24sIDE0MG1zKTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLWNoZWNrYm94LWFuaW1hdGlvbi1kdXJhdGlvbiwgMTQwbXMpO1xuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGNoZWNrbWFyay1leHBhbmQge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgY2hlY2ttYXJrLWV4cGFuZCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gIH1cblxuICAjY2hlY2tib3guY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICB9XG5cbiAgI2NoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNiU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogY2FsYygyLzE1ICogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKSk7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygyLzE1ICogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1jaGVja21hcmstY29sb3IsIHdoaXRlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDk3JSA4NiU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogOTclIDg2JTtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogcHJvdGVjdCBhZ2FpbnN0IHBhZ2UtbGV2ZWwgYm94LXNpemluZyAqL1xuICB9XG5cbiAgI2NoZWNrbWFyazpkaXIocnRsKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTQlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxNCU7XG4gIH1cblxuICAvKiBsYWJlbCAqL1xuICAjY2hlY2tib3hMYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFwZXItY2hlY2tib3gtbGFiZWwtc3BhY2luZywgOHB4KTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBAYXBwbHkgLS1wYXBlci1jaGVja2JveC1sYWJlbDtcbiAgfVxuXG4gIDpob3N0KFtjaGVja2VkXSkgI2NoZWNrYm94TGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1sYWJlbC1jaGVja2VkLWNvbG9yLCB2YXIoLS1wYXBlci1jaGVja2JveC1sYWJlbC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSkpO1xuICAgIEBhcHBseSAtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNoZWNrZWQ7XG4gIH1cblxuICAjY2hlY2tib3hMYWJlbDpkaXIocnRsKSB7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFwZXItY2hlY2tib3gtbGFiZWwtc3BhY2luZywgOHB4KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAjY2hlY2tib3hMYWJlbFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogZGlzYWJsZWQgc3RhdGUgKi9cblxuICA6aG9zdChbZGlzYWJsZWRdKSAjY2hlY2tib3gge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gIH1cblxuICA6aG9zdChbZGlzYWJsZWRdW2NoZWNrZWRdKSAjY2hlY2tib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgOmhvc3QoW2Rpc2FibGVkXSkgI2NoZWNrYm94TGFiZWwgIHtcbiAgICBvcGFjaXR5OiAwLjY1O1xuICB9XG5cbiAgLyogaW52YWxpZCBzdGF0ZSAqL1xuICAjY2hlY2tib3guaW52YWxpZDpub3QoLmNoZWNrZWQpIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWVycm9yLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICB9XG48L3N0eWxlPlxuXG48ZGl2IGlkPVwiY2hlY2tib3hDb250YWluZXJcIj5cbiAgPGRpdiBpZD1cImNoZWNrYm94XCIgY2xhc3MkPVwiW1tfY29tcHV0ZUNoZWNrYm94Q2xhc3MoY2hlY2tlZCwgaW52YWxpZCldXVwiPlxuICAgIDxkaXYgaWQ9XCJjaGVja21hcmtcIiBjbGFzcyQ9XCJbW19jb21wdXRlQ2hlY2ttYXJrQ2xhc3MoY2hlY2tlZCldXVwiPjwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGlkPVwiY2hlY2tib3hMYWJlbFwiPjxzbG90Pjwvc2xvdD48L2Rpdj5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltDaGVja2JveF0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NlbGVjdGlvbi1jb250cm9scy1jaGVja2JveClcblxuYHBhcGVyLWNoZWNrYm94YCBpcyBhIGJ1dHRvbiB0aGF0IGNhbiBiZSBlaXRoZXIgY2hlY2tlZCBvciB1bmNoZWNrZWQuIFVzZXIgY2FuXG50YXAgdGhlIGNoZWNrYm94IHRvIGNoZWNrIG9yIHVuY2hlY2sgaXQuIFVzdWFsbHkgeW91IHVzZSBjaGVja2JveGVzIHRvIGFsbG93XG51c2VyIHRvIHNlbGVjdCBtdWx0aXBsZSBvcHRpb25zIGZyb20gYSBzZXQuIElmIHlvdSBoYXZlIGEgc2luZ2xlIE9OL09GRiBvcHRpb24sXG5hdm9pZCB1c2luZyBhIHNpbmdsZSBjaGVja2JveCBhbmQgdXNlIGBwYXBlci10b2dnbGUtYnV0dG9uYCBpbnN0ZWFkLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLWNoZWNrYm94PmxhYmVsPC9wYXBlci1jaGVja2JveD5cblxuICAgIDxwYXBlci1jaGVja2JveCBjaGVja2VkPiBsYWJlbDwvcGFwZXItY2hlY2tib3g+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcmAgfCBDaGVja2JveCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYHRyYW5zcGFyZW50YFxuYC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yYCB8IENoZWNrYm94IGJvcmRlciBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1pbmstY29sb3JgIHwgU2VsZWN0ZWQvZm9jdXMgcmlwcGxlIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItY2hlY2tib3gtY2hlY2tlZC1jb2xvcmAgfCBDaGVja2JveCBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYC0tcHJpbWFyeS1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LWNoZWNrZWQtaW5rLWNvbG9yYCB8IFNlbGVjdGVkL2ZvY3VzIHJpcHBsZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYC0tcHJpbWFyeS1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LWNoZWNrbWFyay1jb2xvcmAgfCBDaGVja21hcmsgY29sb3IgfCBgd2hpdGVgXG5gLS1wYXBlci1jaGVja2JveC1sYWJlbC1jb2xvcmAgfCBMYWJlbCBjb2xvciB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNoZWNrZWQtY29sb3JgIHwgTGFiZWwgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNvbG9yYFxuYC0tcGFwZXItY2hlY2tib3gtbGFiZWwtc3BhY2luZ2AgfCBTcGFjaW5nIGJldHdlZW4gdGhlIGxhYmVsIGFuZCB0aGUgY2hlY2tib3ggfCBgOHB4YFxuYC0tcGFwZXItY2hlY2tib3gtbGFiZWxgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGFiZWwgfCBge31gXG5gLS1wYXBlci1jaGVja2JveC1sYWJlbC1jaGVja2VkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBge31gXG5gLS1wYXBlci1jaGVja2JveC1lcnJvci1jb2xvcmAgfCBDaGVja2JveCBjb2xvciB3aGVuIGludmFsaWQgfCBgLS1lcnJvci1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LXNpemVgIHwgU2l6ZSBvZiB0aGUgY2hlY2tib3ggfCBgMThweGBcbmAtLXBhcGVyLWNoZWNrYm94LWluay1zaXplYCB8IFNpemUgb2YgdGhlIHJpcHBsZSB8IGA0OHB4YFxuYC0tcGFwZXItY2hlY2tib3gtbWFyZ2luYCB8IE1hcmdpbiBhcm91bmQgdGhlIGNoZWNrYm94IGNvbnRhaW5lciB8IGBpbml0aWFsYFxuYC0tcGFwZXItY2hlY2tib3gtdmVydGljYWwtYWxpZ25gIHwgVmVydGljYWwgYWxpZ25tZW50IG9mIHRoZSBjaGVja2JveCBjb250YWluZXIgfCBgbWlkZGxlYFxuXG5UaGlzIGVsZW1lbnQgYXBwbGllcyB0aGUgbWl4aW4gYC0tcGFwZXItZm9udC1jb21tb24tYmFzZWAgYnV0IGRvZXMgbm90IGltcG9ydFxuYHBhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxgLiBJbiBvcmRlciB0byBhcHBseSB0aGUgYFJvYm90b2AgZm9udCB0byB0aGlzXG5lbGVtZW50LCBtYWtlIHN1cmUgeW91J3ZlIGltcG9ydGVkIGBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC5cblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1jaGVja2JveCcsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yXSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnY2hlY2tib3gnLCAnYXJpYS1jaGVja2VkJzogZmFsc2UsIHRhYmluZGV4OiAwfSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqXG4gICAgICogQGV2ZW50IGNoYW5nZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQGV2ZW50IGlyb24tY2hhbmdlXG4gICAgICovXG4gICAgYXJpYUFjdGl2ZUF0dHJpYnV0ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdhcmlhLWNoZWNrZWQnfVxuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBXYWl0IHVudGlsIHN0eWxlcyBoYXZlIHJlc29sdmVkIHRvIGNoZWNrIGZvciB0aGUgZGVmYXVsdCBzZW50aW5lbC5cbiAgICAvLyBTZWUgcG9seW1lciM0MDA5IGZvciBtb3JlIGRldGFpbHMuXG4gICAgYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGlua1NpemUgPVxuICAgICAgICAgIHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemUnKVxuICAgICAgICAgICAgICAudHJpbSgpO1xuICAgICAgLy8gSWYgdW5zZXQsIGNvbXB1dGUgYW5kIHNldCB0aGUgZGVmYXVsdCBgLS1wYXBlci1jaGVja2JveC1pbmstc2l6ZWAuXG4gICAgICBpZiAoaW5rU2l6ZSA9PT0gJy0xcHgnKSB7XG4gICAgICAgIHZhciBjaGVja2JveFNpemVUZXh0ID1cbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZScpXG4gICAgICAgICAgICAgICAgLnRyaW0oKTtcblxuICAgICAgICB2YXIgdW5pdHMgPSAncHgnO1xuICAgICAgICB2YXIgdW5pdHNNYXRjaGVzID0gY2hlY2tib3hTaXplVGV4dC5tYXRjaCgvW0EtWmEtel0rJC8pO1xuICAgICAgICBpZiAodW5pdHNNYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgdW5pdHMgPSB1bml0c01hdGNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hlY2tib3hTaXplID0gcGFyc2VGbG9hdChjaGVja2JveFNpemVUZXh0KTtcbiAgICAgICAgdmFyIGRlZmF1bHRJbmtTaXplID0gKDggLyAzKSAqIGNoZWNrYm94U2l6ZTtcblxuICAgICAgICBpZiAodW5pdHMgPT09ICdweCcpIHtcbiAgICAgICAgICBkZWZhdWx0SW5rU2l6ZSA9IE1hdGguZmxvb3IoZGVmYXVsdElua1NpemUpO1xuXG4gICAgICAgICAgLy8gVGhlIGNoZWNrYm94IGFuZCByaXBwbGUgbmVlZCB0byBoYXZlIHRoZSBzYW1lIHBhcml0eSBzbyB0aGF0IHRoZWlyXG4gICAgICAgICAgLy8gY2VudGVycyBhbGlnbi5cbiAgICAgICAgICBpZiAoZGVmYXVsdElua1NpemUgJSAyICE9PSBjaGVja2JveFNpemUgJSAyKSB7XG4gICAgICAgICAgICBkZWZhdWx0SW5rU2l6ZSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgICAnLS1wYXBlci1jaGVja2JveC1pbmstc2l6ZSc6IGRlZmF1bHRJbmtTaXplICsgdW5pdHMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIF9jb21wdXRlQ2hlY2tib3hDbGFzczogZnVuY3Rpb24oY2hlY2tlZCwgaW52YWxpZCkge1xuICAgIHZhciBjbGFzc05hbWUgPSAnJztcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgY2xhc3NOYW1lICs9ICdjaGVja2VkICc7XG4gICAgfVxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJ2ludmFsaWQnO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9LFxuXG4gIF9jb21wdXRlQ2hlY2ttYXJrQ2xhc3M6IGZ1bmN0aW9uKGNoZWNrZWQpIHtcbiAgICByZXR1cm4gY2hlY2tlZCA/ICcnIDogJ2hpZGRlbic7XG4gIH0sXG5cbiAgLy8gY3JlYXRlIHJpcHBsZSBpbnNpZGUgdGhlIGNoZWNrYm94Q29udGFpbmVyXG4gIF9jcmVhdGVSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuJC5jaGVja2JveENvbnRhaW5lcjtcbiAgICByZXR1cm4gUGFwZXJJbmt5Rm9jdXNCZWhhdmlvckltcGwuX2NyZWF0ZVJpcHBsZS5jYWxsKHRoaXMpO1xuICB9XG5cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpCQTtBQTRCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0VBO0FBOEVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUE2QkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFMQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7OztBQU1BOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuRkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
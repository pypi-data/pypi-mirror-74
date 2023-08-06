(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"],{

/***/ "./node_modules/@material/checkbox/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/constants.js ***!
  \******************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  BACKGROUND: 'mdc-checkbox__background',
  CHECKED: 'mdc-checkbox--checked',
  CHECKMARK: 'mdc-checkbox__checkmark',
  CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
  DISABLED: 'mdc-checkbox--disabled',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  MIXEDMARK: 'mdc-checkbox__mixedmark',
  NATIVE_CONTROL: 'mdc-checkbox__native-control',
  ROOT: 'mdc-checkbox',
  SELECTED: 'mdc-checkbox--selected',
  UPGRADED: 'mdc-checkbox--upgraded'
};
var strings = {
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
  NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_UNCHECKED: 'unchecked'
};
var numbers = {
  ANIM_END_LATCH_MS: 250
};

/***/ }),

/***/ "./node_modules/@material/checkbox/foundation.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/checkbox/foundation.js ***!
  \*******************************************************/
/*! exports provided: MDCCheckboxFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() { return MDCCheckboxFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/checkbox/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCCheckboxFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCCheckboxFoundation, _super);

  function MDCCheckboxFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCCheckboxFoundation.defaultAdapter, adapter)) || this;

    _this.currentCheckState_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INIT;
    _this.currentAnimationClass_ = '';
    _this.animEndLatchTimer_ = 0;
    _this.enableAnimationEndHandler_ = false;
    return _this;
  }

  Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "numbers", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        forceLayout: function () {
          return undefined;
        },
        hasNativeControl: function () {
          return false;
        },
        isAttachedToDOM: function () {
          return false;
        },
        isChecked: function () {
          return false;
        },
        isIndeterminate: function () {
          return false;
        },
        removeClass: function () {
          return undefined;
        },
        removeNativeControlAttr: function () {
          return undefined;
        },
        setNativeControlAttr: function () {
          return undefined;
        },
        setNativeControlDisabled: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCCheckboxFoundation.prototype.init = function () {
    this.currentCheckState_ = this.determineCheckState_();
    this.updateAriaChecked_();
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].UPGRADED);
  };

  MDCCheckboxFoundation.prototype.destroy = function () {
    clearTimeout(this.animEndLatchTimer_);
  };

  MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
    this.adapter_.setNativeControlDisabled(disabled);

    if (disabled) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    }
  };
  /**
   * Handles the animationend event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
    var _this = this;

    if (!this.enableAnimationEndHandler_) {
      return;
    }

    clearTimeout(this.animEndLatchTimer_);
    this.animEndLatchTimer_ = setTimeout(function () {
      _this.adapter_.removeClass(_this.currentAnimationClass_);

      _this.enableAnimationEndHandler_ = false;
    }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ANIM_END_LATCH_MS);
  };
  /**
   * Handles the change event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleChange = function () {
    this.transitionCheckState_();
  };

  MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
    if (!this.adapter_.hasNativeControl()) {
      return;
    }

    var oldState = this.currentCheckState_;
    var newState = this.determineCheckState_();

    if (oldState === newState) {
      return;
    }

    this.updateAriaChecked_();
    var TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;
    var SELECTED = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SELECTED;

    if (newState === TRANSITION_STATE_UNCHECKED) {
      this.adapter_.removeClass(SELECTED);
    } else {
      this.adapter_.addClass(SELECTED);
    } // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.


    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState; // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.

    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.enableAnimationEndHandler_ = true;
    }
  };

  MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
    var TRANSITION_STATE_INDETERMINATE = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INDETERMINATE,
        TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;

    if (this.adapter_.isIndeterminate()) {
      return TRANSITION_STATE_INDETERMINATE;
    }

    return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  };

  MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
    var TRANSITION_STATE_INIT = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INIT,
        TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;
    var _a = MDCCheckboxFoundation.cssClasses,
        ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED,
        ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE,
        ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED,
        ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE,
        ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED,
        ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;

    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return '';
        }

        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;

      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;

      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;

      default:
        // TRANSITION_STATE_INDETERMINATE
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  };

  MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
    // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
    if (this.adapter_.isIndeterminate()) {
      this.adapter_.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_INDETERMINATE_VALUE);
    } else {
      // The on/off state does not need to keep track of aria-checked, since
      // the screenreader uses the checked property on the checkbox element.
      this.adapter_.removeNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR);
    }
  };

  return MDCCheckboxFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCCheckboxFoundation);

/***/ }),

/***/ "./node_modules/@material/mwc-checkbox/mwc-checkbox-base.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material/mwc-checkbox/mwc-checkbox-base.js ***!
  \******************************************************************/
/*! exports provided: CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return CheckboxBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_checkbox_foundation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/checkbox/foundation.js */ "./node_modules/@material/checkbox/foundation.js");
/* harmony import */ var _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-base/form-element.js */ "./node_modules/@material/mwc-base/form-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");





class CheckboxBase extends _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["FormElement"] {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.indeterminate = false;
    this.disabled = false;
    this.value = '';
    this.mdcFoundationClass = _material_checkbox_foundation_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  get ripple() {
    return this.mdcRoot.ripple;
  }

  createAdapter() {
    return Object.assign(Object.assign({}, Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["addHasRemoveClass"])(this.mdcRoot)), {
      forceLayout: () => {
        this.mdcRoot.offsetWidth;
      },
      isAttachedToDOM: () => this.isConnected,
      isIndeterminate: () => this.indeterminate,
      isChecked: () => this.checked,
      hasNativeControl: () => Boolean(this.formElement),
      setNativeControlDisabled: disabled => {
        this.formElement.disabled = disabled;
      },
      setNativeControlAttr: (attr, value) => {
        this.formElement.setAttribute(attr, value);
      },
      removeNativeControlAttr: attr => {
        this.formElement.removeAttribute(attr);
      }
    });
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <div class="mdc-checkbox"
           @animationend="${this._animationEndHandler}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              @change="${this._changeHandler}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}">
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        <div class="mdc-checkbox__ripple"></div>
      </div>`;
  }

  firstUpdated() {
    super.firstUpdated();
    this.mdcRoot.ripple = Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["rippleNode"])({
      surfaceNode: this.mdcRoot,
      interactionNode: this.formElement
    });
  }

  _changeHandler() {
    this.checked = this.formElement.checked;
    this.indeterminate = this.formElement.indeterminate;
    this.mdcFoundation.handleChange();
  }

  _animationEndHandler() {
    this.mdcFoundation.handleAnimationEnd();
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('.mdc-checkbox')], CheckboxBase.prototype, "mdcRoot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('input')], CheckboxBase.prototype, "formElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], CheckboxBase.prototype, "checked", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], CheckboxBase.prototype, "indeterminate", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
}), Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (value) {
  this.mdcFoundation.setDisabled(value);
})], CheckboxBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: String
})], CheckboxBase.prototype, "value", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js ***!
  \*****************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-8A000000secondary00000000secondary{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-8A000000secondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000secondary00000000secondary}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000secondary00000000secondary}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.38);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.38)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-checkbox{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox .mdc-checkbox__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}:host{outline:none;display:inline-block}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{background-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background---mdc-checkbox-unchecked-colorsecondary00000000secondary{0%{border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background---mdc-checkbox-unchecked-colorsecondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background---mdc-checkbox-unchecked-colorsecondary00000000secondary}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background---mdc-checkbox-unchecked-colorsecondary00000000secondary}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-mark-color, #fff)}`;

/***/ }),

/***/ "./node_modules/@material/mwc-checkbox/mwc-checkbox.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-checkbox/mwc-checkbox.js ***!
  \*************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_checkbox_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-checkbox-base.js */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-base.js");
/* harmony import */ var _mwc_checkbox_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-checkbox-css.js */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js");

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let Checkbox = class Checkbox extends _mwc_checkbox_base_js__WEBPACK_IMPORTED_MODULE_2__["CheckboxBase"] {};
Checkbox.styles = _mwc_checkbox_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Checkbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-checkbox')], Checkbox);


/***/ }),

/***/ "./node_modules/deep-clone-simple/index.js":
/*!*************************************************!*\
  !*** ./node_modules/deep-clone-simple/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepcopy; });
function deepcopy(value) {
  if (!(!!value && typeof value == 'object')) {
    return value;
  }

  if (Object.prototype.toString.call(value) == '[object Date]') {
    return new Date(value.getTime());
  }

  if (Array.isArray(value)) {
    return value.map(deepcopy);
  }

  var result = {};
  Object.keys(value).forEach(function (key) {
    result[key] = deepcopy(value[key]);
  });
  return result;
}

/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;

    if (d.type !== 'RPC') {
      return;
    }

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var params = [],
          len = arguments.length;

      while (len--) params[len] = arguments[len];

      return new Promise(function (a, b) {
        var id = ++c;
        callbacks[id] = [a, b];
        worker.postMessage({
          type: 'RPC',
          id: id,
          method: method,
          params: params
        });
      });
    };
  });
}

module.exports = addMethods;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktdW51c2VkLWVudGl0aWVzfnBhbmVsLWNvbmZpZy1hcmVhc35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctZGV2aWNlc35wYW5lbC1jb35jMGNlMTY1ZC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2ZvdW5kYXRpb24udHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtY2hlY2tib3gtYmFzZS50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1jaGVja2JveC1jc3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZXAtY2xvbmUtc2ltcGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvcnBjLXdyYXBwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQU5JTV9DSEVDS0VEX0lOREVURVJNSU5BVEU6ICdtZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC1pbmRldGVybWluYXRlJyxcbiAgICBBTklNX0NIRUNLRURfVU5DSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtdW5jaGVja2VkJyxcbiAgICBBTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRDogJ21kYy1jaGVja2JveC0tYW5pbS1pbmRldGVybWluYXRlLWNoZWNrZWQnLFxuICAgIEFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS11bmNoZWNrZWQnLFxuICAgIEFOSU1fVU5DSEVDS0VEX0NIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWNoZWNrZWQnLFxuICAgIEFOSU1fVU5DSEVDS0VEX0lOREVURVJNSU5BVEU6ICdtZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUnLFxuICAgIEJBQ0tHUk9VTkQ6ICdtZGMtY2hlY2tib3hfX2JhY2tncm91bmQnLFxuICAgIENIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWNoZWNrZWQnLFxuICAgIENIRUNLTUFSSzogJ21kYy1jaGVja2JveF9fY2hlY2ttYXJrJyxcbiAgICBDSEVDS01BUktfUEFUSDogJ21kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGgnLFxuICAgIERJU0FCTEVEOiAnbWRjLWNoZWNrYm94LS1kaXNhYmxlZCcsXG4gICAgSU5ERVRFUk1JTkFURTogJ21kYy1jaGVja2JveC0taW5kZXRlcm1pbmF0ZScsXG4gICAgTUlYRURNQVJLOiAnbWRjLWNoZWNrYm94X19taXhlZG1hcmsnLFxuICAgIE5BVElWRV9DT05UUk9MOiAnbWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbCcsXG4gICAgUk9PVDogJ21kYy1jaGVja2JveCcsXG4gICAgU0VMRUNURUQ6ICdtZGMtY2hlY2tib3gtLXNlbGVjdGVkJyxcbiAgICBVUEdSQURFRDogJ21kYy1jaGVja2JveC0tdXBncmFkZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX0NIRUNLRURfQVRUUjogJ2FyaWEtY2hlY2tlZCcsXG4gICAgQVJJQV9DSEVDS0VEX0lOREVURVJNSU5BVEVfVkFMVUU6ICdtaXhlZCcsXG4gICAgTkFUSVZFX0NPTlRST0xfU0VMRUNUT1I6ICcubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbCcsXG4gICAgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEOiAnY2hlY2tlZCcsXG4gICAgVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFOiAnaW5kZXRlcm1pbmF0ZScsXG4gICAgVFJBTlNJVElPTl9TVEFURV9JTklUOiAnaW5pdCcsXG4gICAgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ6ICd1bmNoZWNrZWQnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBBTklNX0VORF9MQVRDSF9NUzogMjUwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0NoZWNrYm94Rm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENDaGVja2JveEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDQ2hlY2tib3hGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDQ2hlY2tib3hGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY3VycmVudENoZWNrU3RhdGVfID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX0lOSVQ7XG4gICAgICAgIF90aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18gPSAnJztcbiAgICAgICAgX3RoaXMuYW5pbUVuZExhdGNoVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZW5hYmxlQW5pbWF0aW9uRW5kSGFuZGxlcl8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZm9yY2VMYXlvdXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNOYXRpdmVDb250cm9sOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0F0dGFjaGVkVG9ET006IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNJbmRldGVybWluYXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZU5hdGl2ZUNvbnRyb2xBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TmF0aXZlQ29udHJvbEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXROYXRpdmVDb250cm9sRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hlY2tTdGF0ZV8gPSB0aGlzLmRldGVybWluZUNoZWNrU3RhdGVfKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQXJpYUNoZWNrZWRfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5VUEdSQURFRCk7XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyk7XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLnNldERpc2FibGVkID0gZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TmF0aXZlQ29udHJvbERpc2FibGVkKGRpc2FibGVkKTtcbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkRJU0FCTEVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgYW5pbWF0aW9uZW5kIGV2ZW50IGZvciB0aGUgY2hlY2tib3hcbiAgICAgKi9cbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUFuaW1hdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZUFuaW1hdGlvbkVuZEhhbmRsZXJfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbUVuZExhdGNoVGltZXJfKTtcbiAgICAgICAgdGhpcy5hbmltRW5kTGF0Y2hUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKF90aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18pO1xuICAgICAgICAgICAgX3RoaXMuZW5hYmxlQW5pbWF0aW9uRW5kSGFuZGxlcl8gPSBmYWxzZTtcbiAgICAgICAgfSwgbnVtYmVycy5BTklNX0VORF9MQVRDSF9NUyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBjaGFuZ2UgZXZlbnQgZm9yIHRoZSBjaGVja2JveFxuICAgICAqL1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25DaGVja1N0YXRlXygpO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS50cmFuc2l0aW9uQ2hlY2tTdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNOYXRpdmVDb250cm9sKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2xkU3RhdGUgPSB0aGlzLmN1cnJlbnRDaGVja1N0YXRlXztcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gdGhpcy5kZXRlcm1pbmVDaGVja1N0YXRlXygpO1xuICAgICAgICBpZiAob2xkU3RhdGUgPT09IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVBcmlhQ2hlY2tlZF8oKTtcbiAgICAgICAgdmFyIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgdmFyIFNFTEVDVEVEID0gY3NzQ2xhc3Nlcy5TRUxFQ1RFRDtcbiAgICAgICAgaWYgKG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhTRUxFQ1RFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFNFTEVDVEVEKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB0byBlbnN1cmUgdGhhdCB0aGVyZSBpc24ndCBhIHByZXZpb3VzbHkgZXhpc3RpbmcgYW5pbWF0aW9uIGNsYXNzLCBpbiBjYXNlIGZvciBleGFtcGxlXG4gICAgICAgIC8vIHRoZSB1c2VyIGludGVyYWN0ZWQgd2l0aCB0aGUgY2hlY2tib3ggYmVmb3JlIHRoZSBhbmltYXRpb24gd2FzIGZpbmlzaGVkLlxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvcmNlTGF5b3V0KCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKHRoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfID0gdGhpcy5nZXRUcmFuc2l0aW9uQW5pbWF0aW9uQ2xhc3NfKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuY3VycmVudENoZWNrU3RhdGVfID0gbmV3U3RhdGU7XG4gICAgICAgIC8vIENoZWNrIGZvciBwYXJlbnROb2RlIHNvIHRoYXQgYW5pbWF0aW9ucyBhcmUgb25seSBydW4gd2hlbiB0aGUgZWxlbWVudCBpcyBhdHRhY2hlZFxuICAgICAgICAvLyB0byB0aGUgRE9NLlxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0F0dGFjaGVkVG9ET00oKSAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyh0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18pO1xuICAgICAgICAgICAgdGhpcy5lbmFibGVBbmltYXRpb25FbmRIYW5kbGVyXyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuZGV0ZXJtaW5lQ2hlY2tTdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBUUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEUgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfSU5ERVRFUk1JTkFURSwgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQsIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNJbmRldGVybWluYXRlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBUUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaXNDaGVja2VkKCkgPyBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgOiBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDtcbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0VHJhbnNpdGlvbkFuaW1hdGlvbkNsYXNzXyA9IGZ1bmN0aW9uIChvbGRTdGF0ZSwgbmV3U3RhdGUpIHtcbiAgICAgICAgdmFyIFRSQU5TSVRJT05fU1RBVEVfSU5JVCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9JTklULCBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCwgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEO1xuICAgICAgICB2YXIgX2EgPSBNRENDaGVja2JveEZvdW5kYXRpb24uY3NzQ2xhc3NlcywgQU5JTV9VTkNIRUNLRURfQ0hFQ0tFRCA9IF9hLkFOSU1fVU5DSEVDS0VEX0NIRUNLRUQsIEFOSU1fVU5DSEVDS0VEX0lOREVURVJNSU5BVEUgPSBfYS5BTklNX1VOQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFLCBBTklNX0NIRUNLRURfVU5DSEVDS0VEID0gX2EuQU5JTV9DSEVDS0VEX1VOQ0hFQ0tFRCwgQU5JTV9DSEVDS0VEX0lOREVURVJNSU5BVEUgPSBfYS5BTklNX0NIRUNLRURfSU5ERVRFUk1JTkFURSwgQU5JTV9JTkRFVEVSTUlOQVRFX0NIRUNLRUQgPSBfYS5BTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRCwgQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRCA9IF9hLkFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQ7XG4gICAgICAgIHN3aXRjaCAob2xkU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgVFJBTlNJVElPTl9TVEFURV9JTklUOlxuICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA/IEFOSU1fSU5ERVRFUk1JTkFURV9DSEVDS0VEIDogQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgICAgIGNhc2UgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgPyBBTklNX1VOQ0hFQ0tFRF9DSEVDS0VEIDogQU5JTV9VTkNIRUNLRURfSU5ERVRFUk1JTkFURTtcbiAgICAgICAgICAgIGNhc2UgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQgPyBBTklNX0NIRUNLRURfVU5DSEVDS0VEIDogQU5JTV9DSEVDS0VEX0lOREVURVJNSU5BVEU7XG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBUUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEVcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA/IEFOSU1fSU5ERVRFUk1JTkFURV9DSEVDS0VEIDogQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVBcmlhQ2hlY2tlZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEVuc3VyZSBhcmlhLWNoZWNrZWQgaXMgc2V0IHRvIG1peGVkIGlmIGNoZWNrYm94IGlzIGluIGluZGV0ZXJtaW5hdGUgc3RhdGUuXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzSW5kZXRlcm1pbmF0ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldE5hdGl2ZUNvbnRyb2xBdHRyKHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIsIHN0cmluZ3MuQVJJQV9DSEVDS0VEX0lOREVURVJNSU5BVEVfVkFMVUUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIG9uL29mZiBzdGF0ZSBkb2VzIG5vdCBuZWVkIHRvIGtlZXAgdHJhY2sgb2YgYXJpYS1jaGVja2VkLCBzaW5jZVxuICAgICAgICAgICAgLy8gdGhlIHNjcmVlbnJlYWRlciB1c2VzIHRoZSBjaGVja2VkIHByb3BlcnR5IG9uIHRoZSBjaGVja2JveCBlbGVtZW50LlxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVOYXRpdmVDb250cm9sQXR0cihzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NoZWNrYm94Rm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDQ2hlY2tib3hGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDQ2hlY2tib3hGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge01EQ0NoZWNrYm94QWRhcHRlcn0gZnJvbSAnQG1hdGVyaWFsL2NoZWNrYm94L2FkYXB0ZXIuanMnO1xuaW1wb3J0IE1EQ0NoZWNrYm94Rm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvY2hlY2tib3gvZm91bmRhdGlvbi5qcyc7XG5pbXBvcnQge2FkZEhhc1JlbW92ZUNsYXNzLCBGb3JtRWxlbWVudCwgSFRNTEVsZW1lbnRXaXRoUmlwcGxlLCBvYnNlcnZlcn0gZnJvbSAnQG1hdGVyaWFsL213Yy1iYXNlL2Zvcm0tZWxlbWVudC5qcyc7XG5pbXBvcnQge3JpcHBsZU5vZGV9IGZyb20gJ0BtYXRlcmlhbC9td2MtcmlwcGxlL3JpcHBsZS1kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHtodG1sLCBwcm9wZXJ0eSwgcXVlcnl9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGNsYXNzIENoZWNrYm94QmFzZSBleHRlbmRzIEZvcm1FbGVtZW50IHtcbiAgQHF1ZXJ5KCcubWRjLWNoZWNrYm94JykgcHJvdGVjdGVkIG1kY1Jvb3QhOiBIVE1MRWxlbWVudFdpdGhSaXBwbGU7XG5cbiAgQHF1ZXJ5KCdpbnB1dCcpIHByb3RlY3RlZCBmb3JtRWxlbWVudCE6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgY2hlY2tlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KVxuICBAb2JzZXJ2ZXIoZnVuY3Rpb24odGhpczogQ2hlY2tib3hCYXNlLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5zZXREaXNhYmxlZCh2YWx1ZSk7XG4gIH0pXG4gIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBTdHJpbmd9KSB2YWx1ZSA9ICcnO1xuXG4gIHByb3RlY3RlZCBtZGNGb3VuZGF0aW9uQ2xhc3MgPSBNRENDaGVja2JveEZvdW5kYXRpb247XG5cbiAgcHJvdGVjdGVkIG1kY0ZvdW5kYXRpb24hOiBNRENDaGVja2JveEZvdW5kYXRpb247XG5cbiAgZ2V0IHJpcHBsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZGNSb290LnJpcHBsZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVBZGFwdGVyKCk6IE1EQ0NoZWNrYm94QWRhcHRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFkZEhhc1JlbW92ZUNsYXNzKHRoaXMubWRjUm9vdCksXG4gICAgICBmb3JjZUxheW91dDogKCkgPT4ge1xuICAgICAgICB0aGlzLm1kY1Jvb3Qub2Zmc2V0V2lkdGg7XG4gICAgICB9LFxuICAgICAgaXNBdHRhY2hlZFRvRE9NOiAoKSA9PiB0aGlzLmlzQ29ubmVjdGVkLFxuICAgICAgaXNJbmRldGVybWluYXRlOiAoKSA9PiB0aGlzLmluZGV0ZXJtaW5hdGUsXG4gICAgICBpc0NoZWNrZWQ6ICgpID0+IHRoaXMuY2hlY2tlZCxcbiAgICAgIGhhc05hdGl2ZUNvbnRyb2w6ICgpID0+IEJvb2xlYW4odGhpcy5mb3JtRWxlbWVudCksXG4gICAgICBzZXROYXRpdmVDb250cm9sRGlzYWJsZWQ6IChkaXNhYmxlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB9LFxuICAgICAgc2V0TmF0aXZlQ29udHJvbEF0dHI6IChhdHRyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZU5hdGl2ZUNvbnRyb2xBdHRyOiAoYXR0cjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hlY2tib3hcIlxuICAgICAgICAgICBAYW5pbWF0aW9uZW5kPVwiJHt0aGlzLl9hbmltYXRpb25FbmRIYW5kbGVyfVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sXCJcbiAgICAgICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fY2hhbmdlSGFuZGxlcn1cIlxuICAgICAgICAgICAgICAuaW5kZXRlcm1pbmF0ZT1cIiR7dGhpcy5pbmRldGVybWluYXRlfVwiXG4gICAgICAgICAgICAgIC5jaGVja2VkPVwiJHt0aGlzLmNoZWNrZWR9XCJcbiAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cIm1kYy1jaGVja2JveF9fY2hlY2ttYXJrXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJtZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMS43MywxMi45MSA4LjEsMTkuMjggMjIuNzksNC41OVwiPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWNoZWNrYm94X19taXhlZG1hcmtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hlY2tib3hfX3JpcHBsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLm1kY1Jvb3QucmlwcGxlID0gcmlwcGxlTm9kZShcbiAgICAgICAge3N1cmZhY2VOb2RlOiB0aGlzLm1kY1Jvb3QsIGludGVyYWN0aW9uTm9kZTogdGhpcy5mb3JtRWxlbWVudH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlSGFuZGxlcigpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmZvcm1FbGVtZW50LmNoZWNrZWQ7XG4gICAgdGhpcy5pbmRldGVybWluYXRlID0gdGhpcy5mb3JtRWxlbWVudC5pbmRldGVybWluYXRlO1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVDaGFuZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FuaW1hdGlvbkVuZEhhbmRsZXIoKSB7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmhhbmRsZUFuaW1hdGlvbkVuZCgpO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2Nzc30gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgLm1kYy10b3VjaC10YXJnZXQtd3JhcHBlcntkaXNwbGF5OmlubGluZX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC11bmNoZWNrZWQtY2hlY2tlZC1jaGVja21hcmstcGF0aHswJSw1MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MjkuNzgzMzM4NX01MCV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjB9fUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1pbmRldGVybWluYXRlLW1peGVkbWFya3swJSw2OC4yJXt0cmFuc2Zvcm06c2NhbGVYKDApfTY4LjIle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsIDAsIDAsIDEpfTEwMCV7dHJhbnNmb3JtOnNjYWxlWCgxKX19QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtY2hlY2tlZC11bmNoZWNrZWQtY2hlY2ttYXJrLXBhdGh7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO29wYWNpdHk6MTtzdHJva2UtZGFzaG9mZnNldDowfXRve29wYWNpdHk6MDtzdHJva2UtZGFzaG9mZnNldDotMjkuNzgzMzM4NX19QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtY2hlY2tlZC1pbmRldGVybWluYXRlLWNoZWNrbWFya3tmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtvcGFjaXR5OjF9dG97dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLWNoZWNrZWQtY2hlY2ttYXJre2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC4xNCwgMCwgMCwgMSk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfXRve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LWNoZWNrZWQtaW5kZXRlcm1pbmF0ZS1taXhlZG1hcmt7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOm1kYy1hbmltYXRpb24tZGVjZWxlcmF0aW9uLWN1cnZlLXRpbWluZy1mdW5jdGlvbjt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7b3BhY2l0eTowfXRve3RyYW5zZm9ybTpyb3RhdGUoMGRlZyk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLWNoZWNrZWQtbWl4ZWRtYXJre2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC4xNCwgMCwgMCwgMSk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtvcGFjaXR5OjF9dG97dHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS11bmNoZWNrZWQtbWl4ZWRtYXJrezAle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO3RyYW5zZm9ybTpzY2FsZVgoMSk7b3BhY2l0eToxfTMyLjglLDEwMCV7dHJhbnNmb3JtOnNjYWxlWCgwKTtvcGFjaXR5OjB9fS5tZGMtY2hlY2tib3h7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7ZmxleDowIDAgMThweDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bGluZS1oZWlnaHQ6MDt3aGl0ZS1zcGFjZTpub3dyYXA7Y3Vyc29yOnBvaW50ZXI7dmVydGljYWwtYWxpZ246Ym90dG9tO3BhZGRpbmc6MTFweH0ubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmNoZWNrZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZDo6YmVmb3JlLC5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6aW5kZXRlcm1pbmF0ZX4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9Lm1kYy1jaGVja2JveC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3JlLC5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfS5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZDpob3ZlciAubWRjLWNoZWNrYm94X19yaXBwbGU6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLWNoZWNrYm94Lm1kYy1jaGVja2JveC0tc2VsZWN0ZWQubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3JlLC5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLWNoZWNrYm94Lm1kYy1jaGVja2JveC0tc2VsZWN0ZWQ6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKSAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1jaGVja2JveC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZC5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkLm1kYy1jaGVja2JveC0tc2VsZWN0ZWQgLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmUsLm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQubWRjLWNoZWNrYm94LS1zZWxlY3RlZCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfS5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHt0b3A6MTFweDtsZWZ0OjExcHh9Lm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjpiZWZvcmV7dG9wOi0xM3B4O2xlZnQ6LTEzcHg7d2lkdGg6NDBweDtoZWlnaHQ6NDBweH0ubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9se3RvcDowcHg7cmlnaHQ6MHB4O2xlZnQ6MHB4O3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZDpub3QoOmNoZWNrZWQpOm5vdCg6aW5kZXRlcm1pbmF0ZSl+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZDpjaGVja2Vkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZDppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7Ym9yZGVyLWNvbG9yOiMwMTg3ODY7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpO2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LWZhZGUtaW4tYmFja2dyb3VuZC04QTAwMDAwMHNlY29uZGFyeTAwMDAwMDAwc2Vjb25kYXJ5ezAle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH01MCV7Ym9yZGVyLWNvbG9yOiMwMTg3ODY7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpO2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1mYWRlLW91dC1iYWNrZ3JvdW5kLThBMDAwMDAwc2Vjb25kYXJ5MDAwMDAwMDBzZWNvbmRhcnl7MCUsODAle2JvcmRlci1jb2xvcjojMDE4Nzg2O2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KTtiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX0xMDAle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH19Lm1kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtY2hlY2tlZCAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtaW5kZXRlcm1pbmF0ZSAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7YW5pbWF0aW9uLW5hbWU6bWRjLWNoZWNrYm94LWZhZGUtaW4tYmFja2dyb3VuZC04QTAwMDAwMHNlY29uZGFyeTAwMDAwMDAwc2Vjb25kYXJ5fS5tZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC11bmNoZWNrZWQgLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS11bmNoZWNrZWQgLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2FuaW1hdGlvbi1uYW1lOm1kYy1jaGVja2JveC1mYWRlLW91dC1iYWNrZ3JvdW5kLThBMDAwMDAwc2Vjb25kYXJ5MDAwMDAwMDBzZWNvbmRhcnl9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2xbZGlzYWJsZWRdOm5vdCg6Y2hlY2tlZCk6bm90KDppbmRldGVybWluYXRlKX4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCk7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbFtkaXNhYmxlZF06Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sW2Rpc2FibGVkXTppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19jaGVja21hcmt7Y29sb3I6I2ZmZn0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre2JvcmRlci1jb2xvcjojZmZmfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmRpc2FibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJre2NvbG9yOiNmZmZ9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZGlzYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7Ym9yZGVyLWNvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpey5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sW2Rpc2FibGVkXTpub3QoOmNoZWNrZWQpOm5vdCg6aW5kZXRlcm1pbmF0ZSl+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtib3JkZXItY29sb3I6R3JheVRleHQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbFtkaXNhYmxlZF06Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sW2Rpc2FibGVkXTppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7Ym9yZGVyLWNvbG9yOkdyYXlUZXh0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZGlzYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19jaGVja21hcmt7Y29sb3I6R3JheVRleHR9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZGlzYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7Ym9yZGVyLWNvbG9yOkdyYXlUZXh0fS5tZGMtY2hlY2tib3hfX21peGVkbWFya3ttYXJnaW46MCAxcHh9fS5tZGMtY2hlY2tib3gtLWRpc2FibGVke2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOmFic29sdXRlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxOHB4O2hlaWdodDoxOHB4O2JvcmRlcjoycHggc29saWQgY3VycmVudENvbG9yO2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7cG9pbnRlci1ldmVudHM6bm9uZTt3aWxsLWNoYW5nZTpiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSxib3JkZXItY29sb3IgOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKX0ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtb24tc3VyZmFjZSwgIzAwMCl9Lm1kYy1jaGVja2JveF9fY2hlY2ttYXJre3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAxODBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKX0ubWRjLWNoZWNrYm94LS11cGdyYWRlZCAubWRjLWNoZWNrYm94X19jaGVja21hcmt7b3BhY2l0eToxfS5tZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoe3RyYW5zaXRpb246c3Ryb2tlLWRhc2hvZmZzZXQgMTgwbXMgMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSk7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6My4xMnB4O3N0cm9rZS1kYXNob2Zmc2V0OjI5Ljc4MzMzODU7c3Ryb2tlLWRhc2hhcnJheToyOS43ODMzMzg1fS5tZGMtY2hlY2tib3hfX21peGVkbWFya3t3aWR0aDoxMDAlO2hlaWdodDowO3RyYW5zZm9ybTpzY2FsZVgoMCkgcm90YXRlKDBkZWcpO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSx0cmFuc2Zvcm0gOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKX0ubWRjLWNoZWNrYm94LS11cGdyYWRlZCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3gtLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFyaywubWRjLWNoZWNrYm94LS11cGdyYWRlZCAubWRjLWNoZWNrYm94X19jaGVja21hcmstcGF0aCwubWRjLWNoZWNrYm94LS11cGdyYWRlZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7dHJhbnNpdGlvbjpub25lICFpbXBvcnRhbnR9Lm1kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtY2hlY2tlZCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUgLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtdW5jaGVja2VkIC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveC0tYW5pbS1pbmRldGVybWluYXRlLXVuY2hlY2tlZCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2FuaW1hdGlvbi1kdXJhdGlvbjoxODBtczthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcn0ubWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1jaGVja2VkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoe2FuaW1hdGlvbjptZGMtY2hlY2tib3gtdW5jaGVja2VkLWNoZWNrZWQtY2hlY2ttYXJrLXBhdGggMTgwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1pbmRldGVybWluYXRlIC5tZGMtY2hlY2tib3hfX21peGVkbWFya3thbmltYXRpb246bWRjLWNoZWNrYm94LXVuY2hlY2tlZC1pbmRldGVybWluYXRlLW1peGVkbWFyayA5MG1zIGxpbmVhciAwczt0cmFuc2l0aW9uOm5vbmV9Lm1kYy1jaGVja2JveC0tYW5pbS1jaGVja2VkLXVuY2hlY2tlZCAubWRjLWNoZWNrYm94X19jaGVja21hcmstcGF0aHthbmltYXRpb246bWRjLWNoZWNrYm94LWNoZWNrZWQtdW5jaGVja2VkLWNoZWNrbWFyay1wYXRoIDkwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtaW5kZXRlcm1pbmF0ZSAubWRjLWNoZWNrYm94X19jaGVja21hcmt7YW5pbWF0aW9uOm1kYy1jaGVja2JveC1jaGVja2VkLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrIDkwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtaW5kZXRlcm1pbmF0ZSAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7YW5pbWF0aW9uOm1kYy1jaGVja2JveC1jaGVja2VkLWluZGV0ZXJtaW5hdGUtbWl4ZWRtYXJrIDkwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtY2hlY2tlZCAubWRjLWNoZWNrYm94X19jaGVja21hcmt7YW5pbWF0aW9uOm1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLWNoZWNrZWQtY2hlY2ttYXJrIDUwMG1zIGxpbmVhciAwczt0cmFuc2l0aW9uOm5vbmV9Lm1kYy1jaGVja2JveC0tYW5pbS1pbmRldGVybWluYXRlLWNoZWNrZWQgLm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre2FuaW1hdGlvbjptZGMtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS1jaGVja2VkLW1peGVkbWFyayA1MDBtcyBsaW5lYXIgMHM7dHJhbnNpdGlvbjpub25lfS5tZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS11bmNoZWNrZWQgLm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre2FuaW1hdGlvbjptZGMtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS11bmNoZWNrZWQtbWl4ZWRtYXJrIDMwMG1zIGxpbmVhciAwczt0cmFuc2l0aW9uOm5vbmV9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSxiYWNrZ3JvdW5kLWNvbG9yIDkwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmNoZWNrZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19jaGVja21hcmstcGF0aCwubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGh7c3Ryb2tlLWRhc2hvZmZzZXQ6MH0ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtOnNjYWxlKDAsIDApO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIjt3aWxsLWNoYW5nZTpvcGFjaXR5LHRyYW5zZm9ybTt0cmFuc2l0aW9uOm9wYWNpdHkgOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSx0cmFuc2Zvcm0gOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpmb2N1c34ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjpiZWZvcmV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6LjEyO3RyYW5zaXRpb246b3BhY2l0eSA4MG1zIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSx0cmFuc2Zvcm0gODBtcyAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSl9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2x7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOjA7cGFkZGluZzowO29wYWNpdHk6MDtjdXJzb3I6aW5oZXJpdH0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpkaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfS5tZGMtY2hlY2tib3gtLXRvdWNoe21hcmdpbi10b3A6NHB4O21hcmdpbi1ib3R0b206NHB4O21hcmdpbi1yaWdodDo0cHg7bWFyZ2luLWxlZnQ6NHB4fS5tZGMtY2hlY2tib3gtLXRvdWNoIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9se3RvcDotNHB4O3JpZ2h0Oi00cHg7bGVmdDotNHB4O3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHh9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3t0cmFuc2l0aW9uOm9wYWNpdHkgMTgwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLHRyYW5zZm9ybSAxODBtcyAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7b3BhY2l0eToxfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmNoZWNrZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoLTQ1ZGVnKX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJre3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSx0cmFuc2Zvcm0gOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre3RyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDBkZWcpO29wYWNpdHk6MX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctcmFkaXVzLWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQsIDApKSBzY2FsZSgxKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjB9dG97b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXR7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9dG97b3BhY2l0eTowfX0ubWRjLWNoZWNrYm94ey0tbWRjLXJpcHBsZS1mZy1zaXplOiAwOy0tbWRjLXJpcHBsZS1sZWZ0OiAwOy0tbWRjLXJpcHBsZS10b3A6IDA7LS1tZGMtcmlwcGxlLWZnLXNjYWxlOiAxOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kOiAwOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQ6IDA7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCl9Lm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmJlZm9yZSwubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7Y29udGVudDpcIlwifS5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmV7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDoxfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye3RvcDowO2xlZnQ6MDt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCAwKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCl9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24gLm1kYy1jaGVja2JveF9fcmlwcGxlOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gMjI1bXMgZm9yd2FyZHMsbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWluIDc1bXMgZm9yd2FyZHN9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbiAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0IDE1MG1zO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fcmlwcGxlOjpiZWZvcmUsLm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAwMDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1vbi1zdXJmYWNlLCAjMDAwKX0ubWRjLWNoZWNrYm94OmhvdmVyIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3JlLC5tZGMtY2hlY2tib3g6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1cyAubWRjLWNoZWNrYm94X19yaXBwbGU6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1jaGVja2JveDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLWNoZWNrYm94Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3JlLC5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fcmlwcGxlOjphZnRlcnt0b3A6Y2FsYyg1MCUgLSA1MCUpO2xlZnQ6Y2FsYyg1MCUgLSA1MCUpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX3JpcHBsZTo6YmVmb3JlLC5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye3RvcDp2YXIoLS1tZGMtcmlwcGxlLXRvcCwgY2FsYyg1MCUgLSA1MCUpKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgY2FsYyg1MCUgLSA1MCUpKTt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZCAubWRjLWNoZWNrYm94X19yaXBwbGU6OmFmdGVye3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1jaGVja2JveF9fcmlwcGxle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjpiZWZvcmV7Y29udGVudDpub25lfTpob3N0e291dGxpbmU6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9ja30ubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmZvY3Vzfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy1jaGVja2JveC11bmNoZWNrZWQtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC41NCkpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sW2Rpc2FibGVkXTpub3QoOmNoZWNrZWQpOm5vdCg6aW5kZXRlcm1pbmF0ZSl+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtib3JkZXItY29sb3I6dmFyKC0tbWRjLWNoZWNrYm94LWRpc2FibGVkLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuMzgpKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sW2Rpc2FibGVkXTpjaGVja2Vkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2xbZGlzYWJsZWRdOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtY2hlY2tib3gtZGlzYWJsZWQtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC4zOCkpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6bm90KDpjaGVja2VkKTpub3QoOmluZGV0ZXJtaW5hdGUpfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy1jaGVja2JveC11bmNoZWNrZWQtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC41NCkpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZDpjaGVja2Vkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZDppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7Ym9yZGVyLWNvbG9yOiMwMTg3ODY7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpO2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LWZhZGUtaW4tYmFja2dyb3VuZC0tLW1kYy1jaGVja2JveC11bmNoZWNrZWQtY29sb3JzZWNvbmRhcnkwMDAwMDAwMHNlY29uZGFyeXswJXtib3JkZXItY29sb3I6dmFyKC0tbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjU0KSk7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH01MCV7Ym9yZGVyLWNvbG9yOiMwMTg3ODY7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpO2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1mYWRlLW91dC1iYWNrZ3JvdW5kLS0tbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvcnNlY29uZGFyeTAwMDAwMDAwc2Vjb25kYXJ5ezAlLDgwJXtib3JkZXItY29sb3I6IzAxODc4Njtib3JkZXItY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nik7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9MTAwJXtib3JkZXItY29sb3I6dmFyKC0tbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjU0KSk7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH19Lm1kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtY2hlY2tlZCAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtaW5kZXRlcm1pbmF0ZSAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7YW5pbWF0aW9uLW5hbWU6bWRjLWNoZWNrYm94LWZhZGUtaW4tYmFja2dyb3VuZC0tLW1kYy1jaGVja2JveC11bmNoZWNrZWQtY29sb3JzZWNvbmRhcnkwMDAwMDAwMHNlY29uZGFyeX0ubWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtdW5jaGVja2VkIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtdW5jaGVja2VkIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHthbmltYXRpb24tbmFtZTptZGMtY2hlY2tib3gtZmFkZS1vdXQtYmFja2dyb3VuZC0tLW1kYy1jaGVja2JveC11bmNoZWNrZWQtY29sb3JzZWNvbmRhcnkwMDAwMDAwMHNlY29uZGFyeX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJre2NvbG9yOnZhcigtLW1kYy1jaGVja2JveC1tYXJrLWNvbG9yLCAjZmZmKX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtY2hlY2tib3gtbWFyay1jb2xvciwgI2ZmZil9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZGlzYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19jaGVja21hcmt7Y29sb3I6dmFyKC0tbWRjLWNoZWNrYm94LW1hcmstY29sb3IsICNmZmYpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmRpc2FibGVkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtY2hlY2tib3gtbWFyay1jb2xvciwgI2ZmZil9YDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3VzdG9tRWxlbWVudH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQge0NoZWNrYm94QmFzZX0gZnJvbSAnLi9td2MtY2hlY2tib3gtYmFzZS5qcyc7XG5pbXBvcnQge3N0eWxlfSBmcm9tICcuL213Yy1jaGVja2JveC1jc3MuanMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtd2MtY2hlY2tib3gnOiBDaGVja2JveDtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnbXdjLWNoZWNrYm94JylcbmV4cG9ydCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENoZWNrYm94QmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBzdHlsZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZXBjb3B5KHZhbHVlKSB7XG4gIGlmICghKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUuZ2V0VGltZSgpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUubWFwKGRlZXBjb3B5KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0ge307XG4gIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKFxuICAgIGZ1bmN0aW9uKGtleSkgeyByZXN1bHRba2V5XSA9IGRlZXBjb3B5KHZhbHVlW2tleV0pOyB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1ldGhvZHMod29ya2VyLCBtZXRob2RzKSB7XG5cdGxldCBjID0gMDtcblx0bGV0IGNhbGxiYWNrcyA9IHt9O1xuXHR3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XG5cdFx0bGV0IGQgPSBlLmRhdGE7XG5cdFx0aWYgKGQudHlwZSE9PSdSUEMnKSByZXR1cm47XG5cdFx0aWYgKGQuaWQpIHtcblx0XHRcdGxldCBmID0gY2FsbGJhY2tzW2QuaWRdO1xuXHRcdFx0aWYgKGYpIHtcblx0XHRcdFx0ZGVsZXRlIGNhbGxiYWNrc1tkLmlkXTtcblx0XHRcdFx0aWYgKGQuZXJyb3IpIHtcblx0XHRcdFx0XHRmWzFdKE9iamVjdC5hc3NpZ24oRXJyb3IoZC5lcnJvci5tZXNzYWdlKSwgZC5lcnJvcikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGZbMF0oZC5yZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXHRcdFx0ZXZ0LmluaXRFdmVudChkLm1ldGhvZCwgZmFsc2UsIGZhbHNlKTtcblx0XHRcdGV2dC5kYXRhID0gZC5wYXJhbXM7XG5cdFx0XHR3b3JrZXIuZGlzcGF0Y2hFdmVudChldnQpO1xuXHRcdH1cblx0fSk7XG5cdG1ldGhvZHMuZm9yRWFjaCggbWV0aG9kID0+IHtcblx0XHR3b3JrZXJbbWV0aG9kXSA9ICguLi5wYXJhbXMpID0+IG5ldyBQcm9taXNlKCAoYSwgYikgPT4ge1xuXHRcdFx0bGV0IGlkID0gKytjO1xuXHRcdFx0Y2FsbGJhY2tzW2lkXSA9IFthLCBiXTtcblx0XHRcdHdvcmtlci5wb3N0TWVzc2FnZSh7IHR5cGU6ICdSUEMnLCBpZCwgbWV0aG9kLCBwYXJhbXMgfSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0NBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFuQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRkE7O0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFZQTtBQWJBOztBQUFBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBS0E7QUFFQTtBQU1BO0FBRUE7QUFFQTtBQW9FQTtBQUNBO0FBakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFSQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckZBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUpBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7OztBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7O0FBbkJBO0FBc0JBO0FBQ0E7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@material/mwc-switch/mwc-switch-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-switch/mwc-switch-base.js ***!
  \**************************************************************/
/*! exports provided: SwitchBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchBase", function() { return SwitchBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/form-element.js */ "./node_modules/@material/mwc-base/form-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var _material_switch_foundation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/switch/foundation.js */ "./node_modules/@material/switch/foundation.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

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





class SwitchBase extends _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["FormElement"] {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.disabled = false;
    this.mdcFoundationClass = _material_switch_foundation_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  _changeHandler(e) {
    this.mdcFoundation.handleChange(e); // catch "click" event and sync properties

    this.checked = this.formElement.checked;
  }

  createAdapter() {
    return Object.assign(Object.assign({}, Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["addHasRemoveClass"])(this.mdcRoot)), {
      setNativeControlChecked: checked => {
        this.formElement.checked = checked;
      },
      setNativeControlDisabled: disabled => {
        this.formElement.disabled = disabled;
      },
      setNativeControlAttr: (attr, value) => {
        this.formElement.setAttribute(attr, value);
      }
    });
  }

  get ripple() {
    return this.rippleNode.ripple;
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay" .ripple="${Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])({
      interactionNode: this
    })}">
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              @change="${this._changeHandler}">
          </div>
        </div>
      </div>
      <slot></slot>`;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
}), Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (value) {
  this.mdcFoundation.setChecked(value);
})], SwitchBase.prototype, "checked", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
}), Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (value) {
  this.mdcFoundation.setDisabled(value);
})], SwitchBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('.mdc-switch')], SwitchBase.prototype, "mdcRoot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('input')], SwitchBase.prototype, "formElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('.mdc-switch__thumb-underlay')], SwitchBase.prototype, "rippleNode", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-switch/mwc-switch-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-switch/mwc-switch-css.js ***!
  \*************************************************************/
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

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`.mdc-switch__thumb-underlay{left:-18px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__native-control{width:68px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-color:transparent}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__thumb-underlay:hover::before{opacity:.04}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{outline:none}`;

/***/ }),

/***/ "./node_modules/@material/mwc-switch/mwc-switch.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-switch/mwc-switch.js ***!
  \*********************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_switch_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-switch-base.js */ "./node_modules/@material/mwc-switch/mwc-switch-base.js");
/* harmony import */ var _mwc_switch_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-switch-css.js */ "./node_modules/@material/mwc-switch/mwc-switch-css.js");

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




let Switch = class Switch extends _mwc_switch_base_js__WEBPACK_IMPORTED_MODULE_2__["SwitchBase"] {};
Switch.styles = _mwc_switch_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Switch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-switch')], Switch);


/***/ }),

/***/ "./node_modules/@material/switch/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/switch/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
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

/** CSS classes used by the switch. */
var cssClasses = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: 'mdc-switch--checked',

  /** Class used for a switch that is disabled. */
  DISABLED: 'mdc-switch--disabled'
};
/** String constants used by the switch. */

var strings = {
  /** Aria attribute for checked or unchecked state of switch */
  ARIA_CHECKED_ATTR: 'aria-checked',

  /** A CSS selector used to locate the native HTML control for the switch.  */
  NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',

  /** A CSS selector used to locate the ripple surface element for the switch. */
  RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay'
};


/***/ }),

/***/ "./node_modules/@material/switch/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/switch/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCSwitchFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSwitchFoundation", function() { return MDCSwitchFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/switch/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
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




var MDCSwitchFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSwitchFoundation, _super);

  function MDCSwitchFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCSwitchFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCSwitchFoundation, "strings", {
    /** The string constants used by the switch. */
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitchFoundation, "cssClasses", {
    /** The CSS classes used by the switch. */
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitchFoundation, "defaultAdapter", {
    /** The default Adapter for the switch. */
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        setNativeControlChecked: function () {
          return undefined;
        },
        setNativeControlDisabled: function () {
          return undefined;
        },
        setNativeControlAttr: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /** Sets the checked state of the switch. */

  MDCSwitchFoundation.prototype.setChecked = function (checked) {
    this.adapter_.setNativeControlChecked(checked);
    this.updateAriaChecked_(checked);
    this.updateCheckedStyling_(checked);
  };
  /** Sets the disabled state of the switch. */


  MDCSwitchFoundation.prototype.setDisabled = function (disabled) {
    this.adapter_.setNativeControlDisabled(disabled);

    if (disabled) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    }
  };
  /** Handles the change event for the switch native control. */


  MDCSwitchFoundation.prototype.handleChange = function (evt) {
    var nativeControl = evt.target;
    this.updateAriaChecked_(nativeControl.checked);
    this.updateCheckedStyling_(nativeControl.checked);
  };
  /** Updates the styling of the switch based on its checked state. */


  MDCSwitchFoundation.prototype.updateCheckedStyling_ = function (checked) {
    if (checked) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHECKED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHECKED);
    }
  };

  MDCSwitchFoundation.prototype.updateAriaChecked_ = function (checked) {
    this.adapter_.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR, "" + !!checked);
  };

  return MDCSwitchFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCSwitchFoundation);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL213Yy1zd2l0Y2gtYmFzZS50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1zd2l0Y2gtY3NzLnRzIiwid2VicGFjazovLy9zcmMvbXdjLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vY29uc3RhbnRzLnRzIiwid2VicGFjazovLy9mb3VuZGF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7YWRkSGFzUmVtb3ZlQ2xhc3MsIEZvcm1FbGVtZW50LCBIVE1MRWxlbWVudFdpdGhSaXBwbGUsIG9ic2VydmVyfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvZm9ybS1lbGVtZW50LmpzJztcbmltcG9ydCB7cmlwcGxlfSBmcm9tICdAbWF0ZXJpYWwvbXdjLXJpcHBsZS9yaXBwbGUtZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7TURDU3dpdGNoQWRhcHRlcn0gZnJvbSAnQG1hdGVyaWFsL3N3aXRjaC9hZGFwdGVyJztcbmltcG9ydCBNRENTd2l0Y2hGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9zd2l0Y2gvZm91bmRhdGlvbi5qcyc7XG5pbXBvcnQge2h0bWwsIHByb3BlcnR5LCBxdWVyeX0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY2xhc3MgU3dpdGNoQmFzZSBleHRlbmRzIEZvcm1FbGVtZW50IHtcbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSlcbiAgQG9ic2VydmVyKGZ1bmN0aW9uKHRoaXM6IFN3aXRjaEJhc2UsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLnNldENoZWNrZWQodmFsdWUpO1xuICB9KVxuICBjaGVja2VkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSlcbiAgQG9ic2VydmVyKGZ1bmN0aW9uKHRoaXM6IFN3aXRjaEJhc2UsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLnNldERpc2FibGVkKHZhbHVlKTtcbiAgfSlcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAcXVlcnkoJy5tZGMtc3dpdGNoJykgcHJvdGVjdGVkIG1kY1Jvb3QhOiBIVE1MRWxlbWVudDtcblxuICBAcXVlcnkoJ2lucHV0JykgcHJvdGVjdGVkIGZvcm1FbGVtZW50ITogSFRNTElucHV0RWxlbWVudDtcblxuICBwcm90ZWN0ZWQgbWRjRm91bmRhdGlvbiE6IE1EQ1N3aXRjaEZvdW5kYXRpb247XG5cbiAgcHJpdmF0ZSBfY2hhbmdlSGFuZGxlcihlOiBFdmVudCkge1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVDaGFuZ2UoZSk7XG4gICAgLy8gY2F0Y2ggXCJjbGlja1wiIGV2ZW50IGFuZCBzeW5jIHByb3BlcnRpZXNcbiAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmZvcm1FbGVtZW50LmNoZWNrZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWRjRm91bmRhdGlvbkNsYXNzID0gTURDU3dpdGNoRm91bmRhdGlvbjtcblxuICBwcm90ZWN0ZWQgY3JlYXRlQWRhcHRlcigpOiBNRENTd2l0Y2hBZGFwdGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWRkSGFzUmVtb3ZlQ2xhc3ModGhpcy5tZGNSb290KSxcbiAgICAgIHNldE5hdGl2ZUNvbnRyb2xDaGVja2VkOiAoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgfSxcbiAgICAgIHNldE5hdGl2ZUNvbnRyb2xEaXNhYmxlZDogKGRpc2FibGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIH0sXG4gICAgICBzZXROYXRpdmVDb250cm9sQXR0cjogKGF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGdldCByaXBwbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlwcGxlTm9kZS5yaXBwbGU7XG4gIH1cblxuICBAcXVlcnkoJy5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheScpXG4gIHByb3RlY3RlZCByaXBwbGVOb2RlITogSFRNTEVsZW1lbnRXaXRoUmlwcGxlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLXN3aXRjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXN3aXRjaF9fdHJhY2tcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5XCIgLnJpcHBsZT1cIiR7cmlwcGxlKHtcbiAgICAgIGludGVyYWN0aW9uTm9kZTogdGhpc1xuICAgIH0pfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoX190aHVtYlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGlkPVwiYmFzaWMtc3dpdGNoXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9jaGFuZ2VIYW5kbGVyfVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3NzfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzc2AubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXl7bGVmdDotMThweDtyaWdodDppbml0aWFsO3RvcDotMTdweDt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fVtkaXI9cnRsXSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXksLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5W2Rpcj1ydGxde2xlZnQ6aW5pdGlhbDtyaWdodDotMThweH0ubWRjLXN3aXRjaF9fbmF0aXZlLWNvbnRyb2x7d2lkdGg6NjhweDtoZWlnaHQ6NDhweH0ubWRjLXN3aXRjaHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtvdXRsaW5lOm5vbmU7dXNlci1zZWxlY3Q6bm9uZX0ubWRjLXN3aXRjaC5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX190cmFja3tiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX0ubWRjLXN3aXRjaC5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX190aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KTtib3JkZXItY29sb3I6IzAxODc4Njtib3JkZXItY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9Lm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdHJhY2t7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1ie2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZn0ubWRjLXN3aXRjaF9fbmF0aXZlLWNvbnRyb2x7bGVmdDowO3JpZ2h0OmluaXRpYWw7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bWFyZ2luOjA7b3BhY2l0eTowO2N1cnNvcjpwb2ludGVyO3BvaW50ZXItZXZlbnRzOmF1dG99W2Rpcj1ydGxdIC5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbCwubWRjLXN3aXRjaF9fbmF0aXZlLWNvbnRyb2xbZGlyPXJ0bF17bGVmdDppbml0aWFsO3JpZ2h0OjB9Lm1kYy1zd2l0Y2hfX3RyYWNre2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDozMnB4O2hlaWdodDoxNHB4O2JvcmRlcjoxcHggc29saWQ7Ym9yZGVyLXJhZGl1czo3cHg7b3BhY2l0eTouMzg7dHJhbnNpdGlvbjpvcGFjaXR5IDkwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxiYWNrZ3JvdW5kLWNvbG9yIDkwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxib3JkZXItY29sb3IgOTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXl7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zaXRpb246dHJhbnNmb3JtIDkwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxiYWNrZ3JvdW5kLWNvbG9yIDkwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxib3JkZXItY29sb3IgOTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpfS5tZGMtc3dpdGNoX190aHVtYntib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLC4xMik7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7Ym9yZGVyOjEwcHggc29saWQ7Ym9yZGVyLXJhZGl1czo1MCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjF9Lm1kYy1zd2l0Y2gtLWNoZWNrZWQgLm1kYy1zd2l0Y2hfX3RyYWNre29wYWNpdHk6LjU0fS5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KX1bZGlyPXJ0bF0gLm1kYy1zd2l0Y2gtLWNoZWNrZWQgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5LC5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheVtkaXI9cnRsXXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCl9Lm1kYy1zd2l0Y2gtLWNoZWNrZWQgLm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9se3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KX1bZGlyPXJ0bF0gLm1kYy1zd2l0Y2gtLWNoZWNrZWQgLm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9sLC5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbFtkaXI9cnRsXXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KX0ubWRjLXN3aXRjaC0tZGlzYWJsZWR7b3BhY2l0eTouMzg7cG9pbnRlci1ldmVudHM6bm9uZX0ubWRjLXN3aXRjaC0tZGlzYWJsZWQgLm1kYy1zd2l0Y2hfX3RodW1ie2JvcmRlci13aWR0aDoxcHh9Lm1kYy1zd2l0Y2gtLWRpc2FibGVkIC5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbHtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCwgMCkpIHNjYWxlKDEpfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dHtmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX10b3tvcGFjaXR5OjB9fS5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OjpiZWZvcmUsLm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzllOWU5ZX0ubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA4fS5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMjR9Lm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjI0fS5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMjR9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5ey0tbWRjLXJpcHBsZS1mZy1zaXplOiAwOy0tbWRjLXJpcHBsZS1sZWZ0OiAwOy0tbWRjLXJpcHBsZS10b3A6IDA7LS1tZGMtcmlwcGxlLWZnLXNjYWxlOiAxOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kOiAwOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQ6IDA7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCl9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OjpiZWZvcmUsLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OlwiXCJ9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OjpiZWZvcmV7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDoxfS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjpiZWZvcmV7dHJhbnNmb3JtOnNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOjA7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCAwKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCl9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctcmFkaXVzLWluIDIyNW1zIGZvcndhcmRzLG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbiA3NW1zIGZvcndhcmRzfS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQgMTUwbXM7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OjpiZWZvcmUsLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OjphZnRlcnt0b3A6Y2FsYyg1MCUgLSA1MCUpO2xlZnQ6Y2FsYyg1MCUgLSA1MCUpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCBjYWxjKDUwJSAtIDUwJSkpO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCBjYWxjKDUwJSAtIDUwJSkpO3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OjpiZWZvcmUsLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Omhvc3R7b3V0bGluZTpub25lfWA7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2N1c3RvbUVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IHtTd2l0Y2hCYXNlfSBmcm9tICcuL213Yy1zd2l0Y2gtYmFzZS5qcyc7XG5pbXBvcnQge3N0eWxlfSBmcm9tICcuL213Yy1zd2l0Y2gtY3NzLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXdjLXN3aXRjaCc6IFN3aXRjaDtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnbXdjLXN3aXRjaCcpXG5leHBvcnQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgU3dpdGNoQmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBzdHlsZTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqIENTUyBjbGFzc2VzIHVzZWQgYnkgdGhlIHN3aXRjaC4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIC8qKiBDbGFzcyB1c2VkIGZvciBhIHN3aXRjaCB0aGF0IGlzIGluIHRoZSBcImNoZWNrZWRcIiAob24pIHBvc2l0aW9uLiAqL1xuICAgIENIRUNLRUQ6ICdtZGMtc3dpdGNoLS1jaGVja2VkJyxcbiAgICAvKiogQ2xhc3MgdXNlZCBmb3IgYSBzd2l0Y2ggdGhhdCBpcyBkaXNhYmxlZC4gKi9cbiAgICBESVNBQkxFRDogJ21kYy1zd2l0Y2gtLWRpc2FibGVkJyxcbn07XG4vKiogU3RyaW5nIGNvbnN0YW50cyB1c2VkIGJ5IHRoZSBzd2l0Y2guICovXG52YXIgc3RyaW5ncyA9IHtcbiAgICAvKiogQXJpYSBhdHRyaWJ1dGUgZm9yIGNoZWNrZWQgb3IgdW5jaGVja2VkIHN0YXRlIG9mIHN3aXRjaCAqL1xuICAgIEFSSUFfQ0hFQ0tFRF9BVFRSOiAnYXJpYS1jaGVja2VkJyxcbiAgICAvKiogQSBDU1Mgc2VsZWN0b3IgdXNlZCB0byBsb2NhdGUgdGhlIG5hdGl2ZSBIVE1MIGNvbnRyb2wgZm9yIHRoZSBzd2l0Y2guICAqL1xuICAgIE5BVElWRV9DT05UUk9MX1NFTEVDVE9SOiAnLm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9sJyxcbiAgICAvKiogQSBDU1Mgc2VsZWN0b3IgdXNlZCB0byBsb2NhdGUgdGhlIHJpcHBsZSBzdXJmYWNlIGVsZW1lbnQgZm9yIHRoZSBzd2l0Y2guICovXG4gICAgUklQUExFX1NVUkZBQ0VfU0VMRUNUT1I6ICcubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXknLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ1N3aXRjaEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDU3dpdGNoRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENTd2l0Y2hGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1N3aXRjaEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU3dpdGNoRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgLyoqIFRoZSBzdHJpbmcgY29uc3RhbnRzIHVzZWQgYnkgdGhlIHN3aXRjaC4gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1N3aXRjaEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIC8qKiBUaGUgQ1NTIGNsYXNzZXMgdXNlZCBieSB0aGUgc3dpdGNoLiAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU3dpdGNoRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKiBUaGUgZGVmYXVsdCBBZGFwdGVyIGZvciB0aGUgc3dpdGNoLiAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldE5hdGl2ZUNvbnRyb2xDaGVja2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TmF0aXZlQ29udHJvbERpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TmF0aXZlQ29udHJvbEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKiBTZXRzIHRoZSBjaGVja2VkIHN0YXRlIG9mIHRoZSBzd2l0Y2guICovXG4gICAgTURDU3dpdGNoRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Q2hlY2tlZCA9IGZ1bmN0aW9uIChjaGVja2VkKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TmF0aXZlQ29udHJvbENoZWNrZWQoY2hlY2tlZCk7XG4gICAgICAgIHRoaXMudXBkYXRlQXJpYUNoZWNrZWRfKGNoZWNrZWQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrZWRTdHlsaW5nXyhjaGVja2VkKTtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSBvZiB0aGUgc3dpdGNoLiAqL1xuICAgIE1EQ1N3aXRjaEZvdW5kYXRpb24ucHJvdG90eXBlLnNldERpc2FibGVkID0gZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TmF0aXZlQ29udHJvbERpc2FibGVkKGRpc2FibGVkKTtcbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkRJU0FCTEVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEhhbmRsZXMgdGhlIGNoYW5nZSBldmVudCBmb3IgdGhlIHN3aXRjaCBuYXRpdmUgY29udHJvbC4gKi9cbiAgICBNRENTd2l0Y2hGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBuYXRpdmVDb250cm9sID0gZXZ0LnRhcmdldDtcbiAgICAgICAgdGhpcy51cGRhdGVBcmlhQ2hlY2tlZF8obmF0aXZlQ29udHJvbC5jaGVja2VkKTtcbiAgICAgICAgdGhpcy51cGRhdGVDaGVja2VkU3R5bGluZ18obmF0aXZlQ29udHJvbC5jaGVja2VkKTtcbiAgICB9O1xuICAgIC8qKiBVcGRhdGVzIHRoZSBzdHlsaW5nIG9mIHRoZSBzd2l0Y2ggYmFzZWQgb24gaXRzIGNoZWNrZWQgc3RhdGUuICovXG4gICAgTURDU3dpdGNoRm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlQ2hlY2tlZFN0eWxpbmdfID0gZnVuY3Rpb24gKGNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DSEVDS0VEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5DSEVDS0VEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDU3dpdGNoRm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlQXJpYUNoZWNrZWRfID0gZnVuY3Rpb24gKGNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXROYXRpdmVDb250cm9sQXR0cihzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSLCBcIlwiICsgISFjaGVja2VkKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENTd2l0Y2hGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTd2l0Y2hGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDU3dpdGNoRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBOztBQUtBO0FBTUE7QUFjQTtBQTJDQTtBQUNBO0FBbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTs7Ozs7OztBQVNBOzs7O0FBWkE7QUFpQkE7QUFDQTtBQXBFQTtBQUNBO0FBSUE7QUFKQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFKQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUErQkE7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUtBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUtBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQVJBOztBQUFBO0FBY0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
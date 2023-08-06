(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-dialog-suggest-card~panel-lovelace"],{

/***/ "./node_modules/@material/mwc-base/base-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/base-element.js ***!
  \*********************************************************/
/*! exports provided: observer, addHasRemoveClass, BaseElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return BaseElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer.js */ "./node_modules/@material/mwc-base/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _observer_js__WEBPACK_IMPORTED_MODULE_1__["observer"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@material/mwc-base/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["addHasRemoveClass"]; });

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



class BaseElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    if (this.mdcFoundation !== undefined) {
      this.mdcFoundation.destroy();
    }

    this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
    this.mdcFoundation.init();
  }

  firstUpdated() {
    this.createFoundation();
  }

}

/***/ }),

/***/ "./node_modules/@material/mwc-base/form-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/form-element.js ***!
  \*********************************************************/
/*! exports provided: FormElement, observer, addHasRemoveClass, BaseElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["addHasRemoveClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"]; });

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


class FormElement extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"] {
  createRenderRoot() {
    return this.attachShadow({
      mode: 'open',
      delegatesFocus: true
    });
  }

  click() {
    if (this.formElement) {
      this.formElement.focus();
      this.formElement.click();
    }
  }

  setAriaLabel(label) {
    if (this.formElement) {
      this.formElement.setAttribute('aria-label', label);
    }
  }

  firstUpdated() {
    super.firstUpdated();
    this.mdcRoot.addEventListener('change', e => {
      this.dispatchEvent(new Event('change', e));
    });
  }

}

/***/ }),

/***/ "./node_modules/@material/mwc-base/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/mwc-base/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
const observer = observer => // eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
  // if we haven't wrapped `updated` in this class, do so
  if (!proto.constructor._observers) {
    proto.constructor._observers = new Map();
    const userUpdated = proto.updated;

    proto.updated = function (changedProperties) {
      userUpdated.call(this, changedProperties);
      changedProperties.forEach((v, k) => {
        const observer = this.constructor._observers.get(k);

        if (observer !== undefined) {
          observer.call(this, this[k], v);
        }
      });
    }; // clone any existing observers (superclasses)

  } else if (!proto.constructor.hasOwnProperty('_observers')) {
    const observers = proto.constructor._observers;
    proto.constructor._observers = new Map();
    observers.forEach( // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (v, k) => proto.constructor._observers.set(k, v));
  } // set this method


  proto.constructor._observers.set(propName, observer);
};

/***/ }),

/***/ "./node_modules/@material/mwc-base/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/mwc-base/utils.js ***!
  \**************************************************/
/*! exports provided: isNodeElement, findAssignedElement, addHasRemoveClass, supportsPassiveEventListener, deepActiveElementPath, doesElementContainFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeElement", function() { return isNodeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAssignedElement", function() { return findAssignedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return addHasRemoveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListener", function() { return supportsPassiveEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepActiveElementPath", function() { return deepActiveElementPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return doesElementContainFocus; });
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
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

/**
 * Return an element assigned to a given slot that matches the given selector
 */

/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */

const isNodeElement = node => {
  return node.nodeType === Node.ELEMENT_NODE;
};
function findAssignedElement(slot, selector) {
  for (const node of slot.assignedNodes({
    flatten: true
  })) {
    if (isNodeElement(node)) {
      const el = node;

      if (Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__["matches"])(el, selector)) {
        return el;
      }
    }
  }

  return null;
}
function addHasRemoveClass(element) {
  return {
    addClass: className => {
      element.classList.add(className);
    },
    removeClass: className => {
      element.classList.remove(className);
    },
    hasClass: className => element.classList.contains(className)
  };
}
let supportsPassive = false;

const fn = () => {};

const optionsBlock = {
  get passive() {
    supportsPassive = true;
    return false;
  }

};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
/**
 * Do event listeners suport the `passive` option?
 */

const supportsPassiveEventListener = supportsPassive;
const deepActiveElementPath = (doc = window.document) => {
  let activeElement = doc.activeElement;
  const path = [];

  if (!activeElement) {
    return path;
  }

  while (activeElement) {
    path.push(activeElement);

    if (activeElement.shadowRoot) {
      activeElement = activeElement.shadowRoot.activeElement;
    } else {
      break;
    }
  }

  return path;
};
const doesElementContainFocus = element => {
  const activePath = deepActiveElementPath();

  if (!activePath.length) {
    return false;
  }

  const deepActiveElement = activePath[activePath.length - 1];
  const focusEv = new Event('check-if-focused', {
    bubbles: true,
    composed: true
  });
  let composedPath = [];

  const listener = ev => {
    composedPath = ev.composedPath();
  };

  document.body.addEventListener('check-if-focused', listener);
  deepActiveElement.dispatchEvent(focusEv);
  document.body.removeEventListener('check-if-focused', listener);
  return composedPath.indexOf(element) !== -1;
};

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-base.js ***!
  \**************************************************************/
/*! exports provided: RippleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleBase", function() { return RippleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");

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




class RippleBase extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.interactionNode = this;
  }

  connectedCallback() {
    if (this.interactionNode === this) {
      const parent = this.parentNode;

      if (parent instanceof HTMLElement) {
        this.interactionNode = parent;
      } else if (parent instanceof ShadowRoot && parent.host instanceof HTMLElement) {
        this.interactionNode = parent.host;
      }
    }

    super.connectedCallback();
  } // TODO(sorvell) #css: sizing.


  render() {
    const classes = {
      'mdc-ripple-surface--primary': this.primary,
      'mdc-ripple-surface--accent': this.accent
    };
    const {
      disabled,
      unbounded,
      active,
      interactionNode
    } = this;
    const rippleOptions = {
      disabled,
      unbounded,
      interactionNode
    };

    if (active !== undefined) {
      rippleOptions.active = active;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div .ripple="${Object(_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["ripple"])(rippleOptions)}"
          class="mdc-ripple-surface ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes)}"></div>`;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "primary", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "active", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "accent", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "unbounded", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  attribute: false
})], RippleBase.prototype, "interactionNode", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-css.js ***!
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

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}`;

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple.js ***!
  \*********************************************************/
/*! exports provided: Ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-ripple-base.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js");
/* harmony import */ var _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-ripple-css.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js");

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




let Ripple = class Ripple extends _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__["RippleBase"] {};
Ripple.styles = _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Ripple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-ripple')], Ripple);


/***/ }),

/***/ "./node_modules/@thomasloven/round-slider/src/main.js":
/*!************************************************************!*\
  !*** ./node_modules/@thomasloven/round-slider/src/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


class RoundSlider extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
    return {
      value: {
        type: Number
      },
      high: {
        type: Number
      },
      low: {
        type: Number
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      step: {
        type: Number
      },
      startAngle: {
        type: Number
      },
      arcLength: {
        type: Number
      },
      handleSize: {
        type: Number
      },
      handleZoom: {
        type: Number
      },
      disabled: {
        type: Boolean
      },
      dragging: {
        type: Boolean,
        reflect: true
      },
      rtl: {
        type: Boolean
      },
      _scale: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.startAngle = 135;
    this.arcLength = 270;
    this.handleSize = 6;
    this.handleZoom = 1.5;
    this.disabled = false;
    this.dragging = false;
    this.rtl = false;
    this._scale = 1;
  }

  get _start() {
    return this.startAngle * Math.PI / 180;
  }

  get _len() {
    // Things get weird if length is more than a complete turn
    return Math.min(this.arcLength * Math.PI / 180, 2 * Math.PI - 0.01);
  }

  get _end() {
    return this._start + this._len;
  }

  get _enabled() {
    // If handle is disabled
    if (this.disabled) return false;
    if (this.value == null && (this.high == null || this.low == null)) return false;
    if (this.value != null && (this.value > this.max || this.value < this.min)) return false;
    if (this.high != null && (this.high > this.max || this.high < this.min)) return false;
    if (this.low != null && (this.low > this.max || this.low < this.min)) return false;
    return true;
  }

  _angleInside(angle) {
    // Check if an angle is on the arc
    let a = (this.startAngle + this.arcLength / 2 - angle + 180 + 360) % 360 - 180;
    return a < this.arcLength / 2 && a > -this.arcLength / 2;
  }

  _angle2xy(angle) {
    if (this.rtl) return {
      x: -Math.cos(angle),
      y: Math.sin(angle)
    };
    return {
      x: Math.cos(angle),
      y: Math.sin(angle)
    };
  }

  _xy2angle(x, y) {
    if (this.rtl) x = -x;
    return (Math.atan2(y, x) - this._start + 2 * Math.PI) % (2 * Math.PI);
  }

  _value2angle(value) {
    const fraction = (value - this.min) / (this.max - this.min);
    return this._start + fraction * this._len;
  }

  _angle2value(angle) {
    return Math.round((angle / this._len * (this.max - this.min) + this.min) / this.step) * this.step;
  }

  get _boundaries() {
    // Get the maximum extents of the bar arc
    const start = this._angle2xy(this._start);

    const end = this._angle2xy(this._end);

    let up = 1;
    if (!this._angleInside(270)) up = Math.max(-start.y, -end.y);
    let down = 1;
    if (!this._angleInside(90)) down = Math.max(start.y, end.y);
    let left = 1;
    if (!this._angleInside(180)) left = Math.max(-start.x, -end.x);
    let right = 1;
    if (!this._angleInside(0)) right = Math.max(start.x, end.x);
    return {
      up,
      down,
      left,
      right,
      height: up + down,
      width: left + right
    };
  }

  dragStart(ev) {
    let handle = ev.target; // Avoid double events mouseDown->focus

    if (this._rotation && this._rotation.type !== "focus") return; // If an invisible handle was clicked, switch to the visible counterpart

    if (handle.classList.contains("overflow")) handle = handle.nextElementSibling;
    if (!handle.classList.contains("handle")) return;
    handle.setAttribute('stroke-width', 2 * this.handleSize * this.handleZoom * this._scale);
    const min = handle.id === "high" ? this.low : this.min;
    const max = handle.id === "low" ? this.high : this.max;
    this._rotation = {
      handle,
      min,
      max,
      start: this[handle.id],
      type: ev.type
    };
    this.dragging = true;
  }

  dragEnd(ev) {
    if (!this._rotation) return;
    const handle = this._rotation.handle;
    handle.setAttribute('stroke-width', 2 * this.handleSize * this._scale);
    this._rotation = false;
    this.dragging = false;
    handle.blur();
    let event = new CustomEvent('value-changed', {
      detail: {
        [handle.id]: this[handle.id]
      }
    });
    this.dispatchEvent(event); // This makes the low handle render over the high handle if they both are
    // close to the top end.  Otherwise if would be unclickable, and the high
    // handle locked by the low.  Calcualtion is done in the dragEnd handler to
    // avoid "z fighting" while dragging.

    if (this.low && this.low >= 0.99 * this.max) this._reverseOrder = true;else this._reverseOrder = false;
  }

  drag(ev) {
    if (!this._rotation) return;
    if (this._rotation.type === "focus") return;
    ev.preventDefault();
    const mouseX = ev.type === "touchmove" ? ev.touches[0].clientX : ev.clientX;
    const mouseY = ev.type === "touchmove" ? ev.touches[0].clientY : ev.clientY;
    const rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
    const boundaries = this._boundaries;
    const x = mouseX - (rect.left + boundaries.left * rect.width / boundaries.width);
    const y = mouseY - (rect.top + boundaries.up * rect.height / boundaries.height);

    const angle = this._xy2angle(x, y);

    const pos = this._angle2value(angle);

    this._dragpos(pos);
  }

  _dragpos(pos) {
    if (pos < this._rotation.min || pos > this._rotation.max) return;
    const handle = this._rotation.handle;
    this[handle.id] = pos;
    let event = new CustomEvent('value-changing', {
      detail: {
        [handle.id]: pos
      }
    });
    this.dispatchEvent(event);
  }

  _keyStep(ev) {
    if (!this._rotation) return;
    const handle = this._rotation.handle;
    if (ev.key === "ArrowLeft") if (this.rtl) this._dragpos(this[handle.id] + this.step);else this._dragpos(this[handle.id] - this.step);
    if (ev.key === "ArrowRight") if (this.rtl) this._dragpos(this[handle.id] - this.step);else this._dragpos(this[handle.id] + this.step);
  }

  firstUpdated() {
    document.addEventListener('mouseup', this.dragEnd.bind(this));
    document.addEventListener('touchend', this.dragEnd.bind(this), {
      passive: false
    });
    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('touchmove', this.drag.bind(this), {
      passive: false
    });
    document.addEventListener('keydown', this._keyStep.bind(this));
  }

  updated(changedProperties) {
    // Workaround for vector-effect not working in IE and pre-Chromium Edge
    // That's also why the _scale property exists
    if (this.shadowRoot.querySelector("svg") && this.shadowRoot.querySelector("svg").style.vectorEffect !== undefined) return;

    if (changedProperties.has("_scale") && this._scale != 1) {
      this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(e => {
        if (e.getAttribute('stroke-width')) return;
        const orig = parseFloat(getComputedStyle(e).getPropertyValue('stroke-width'));
        e.style.strokeWidth = `${orig * this._scale}px`;
      });
    }

    const rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
    const scale = Math.max(rect.width, rect.height);
    this._scale = 2 / scale;
  }

  _renderArc(start, end) {
    const diff = end - start;
    start = this._angle2xy(start);
    end = this._angle2xy(end + 0.001); // Safari doesn't like arcs with no length

    return `
      M ${start.x} ${start.y}
      A 1 1,
        0,
        ${diff > Math.PI ? "1" : "0"} ${this.rtl ? "0" : "1"},
        ${end.x} ${end.y}
    `;
  }

  _renderHandle(id) {
    const theta = this._value2angle(this[id]);

    const pos = this._angle2xy(theta); // Two handles are drawn. One visible, and one invisible that's twice as
    // big. Makes it easier to click.


    return lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`
      <g class="${id} handle">
        <path
          id=${id}
          class="overflow"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x + 0.001} ${pos.y + 0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4 * this.handleSize * this._scale}"
          />
        <path
          id=${id}
          class="handle"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x + 0.001} ${pos.y + 0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2 * this.handleSize * this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          />
        </g>
      `;
  }

  render() {
    const view = this._boundaries;
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-view.left} ${-view.up} ${view.width} ${view.height}"
        style="margin: ${this.handleSize * this.handleZoom}px;"
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start, this._end)}
            vector-effect="non-scaling-stroke"
          />
          ${this._enabled ? lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`
              <path
                class="bar"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._value2angle(this.low != null ? this.low : this.min), this._value2angle(this.high != null ? this.high : this.value))}
              />` : ``}
        </g>

        <g class="handles">
        ${this._enabled ? this.low != null ? this._reverseOrder ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("high")} ${this._renderHandle("low")}` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("low")} ${this._renderHandle("high")}` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("value")}` : ``}
        </g>
      </svg>
    `;
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      g.handles {
        stroke: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));
        stroke-linecap: round;
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      .handle:focus {
        outline: unset;
      }
    `;
  }

}

customElements.define('round-slider', RoundSlider);

/***/ }),

/***/ "./node_modules/deep-freeze/index.js":
/*!*******************************************!*\
  !*** ./node_modules/deep-freeze/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  return o;
};

/***/ }),

/***/ "./node_modules/lit-html/directives/style-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/style-map.js ***!
  \*******************************************************/
/*! exports provided: styleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return styleMap; });
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
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */

const styleMapCache = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS propertes. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */

const styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(styleInfo => part => {
  if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'style' || part.committer.parts.length > 1) {
    throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
  }

  const {
    committer
  } = part;
  const {
    style
  } = committer.element; // Handle static styles the first time we see a Part

  if (!styleMapCache.has(part)) {
    style.cssText = committer.strings.join(' ');
  } // Remove old properties that no longer exist in styleInfo


  const oldInfo = styleMapCache.get(part);

  for (const name in oldInfo) {
    if (!(name in styleInfo)) {
      if (name.indexOf('-') === -1) {
        // tslint:disable-next-line:no-any
        style[name] = null;
      } else {
        style.removeProperty(name);
      }
    }
  } // Add or update properties


  for (const name in styleInfo) {
    if (name.indexOf('-') === -1) {
      // tslint:disable-next-line:no-any
      style[name] = styleInfo[name];
    } else {
      style.setProperty(name, styleInfo[name]);
    }
  }

  styleMapCache.set(part, styleInfo);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktZGlhbG9nLXN1Z2dlc3QtY2FyZH5wYW5lbC1sb3ZlbGFjZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYmFzZS1lbGVtZW50LnRzIiwid2VicGFjazovLy9zcmMvZm9ybS1lbGVtZW50LnRzIiwid2VicGFjazovLy9zcmMvb2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1yaXBwbGUtYmFzZS50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1yaXBwbGUtY3NzLnRzIiwid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRob21hc2xvdmVuL3JvdW5kLXNsaWRlci9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVlcC1mcmVlemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL3N0eWxlLW1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7TURDRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UnO1xuaW1wb3J0IHtMaXRFbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCB7Q29uc3RydWN0b3J9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0IHtvYnNlcnZlcn0gZnJvbSAnLi9vYnNlcnZlci5qcyc7XG5leHBvcnQge2FkZEhhc1JlbW92ZUNsYXNzfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCAqIGZyb20gJ0BtYXRlcmlhbC9iYXNlL3R5cGVzLmpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8qKlxuICAgKiBSb290IGVsZW1lbnQgZm9yIE1EQyBGb3VuZGF0aW9uIHVzYWdlLlxuICAgKlxuICAgKiBEZWZpbmUgaW4geW91ciBjb21wb25lbnQgd2l0aCB0aGUgYEBxdWVyeWAgZGVjb3JhdG9yXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgbWRjUm9vdDogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBtZGNGb3VuZGF0aW9uQ2xhc3M6IENvbnN0cnVjdG9yPE1EQ0ZvdW5kYXRpb24+O1xuXG4gIC8qKlxuICAgKiBBbiBpbnN0YW5jZSBvZiB0aGUgTURDIEZvdW5kYXRpb24gY2xhc3MgdG8gYXR0YWNoIHRvIHRoZSByb290IGVsZW1lbnRcbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBtZGNGb3VuZGF0aW9uOiBNRENGb3VuZGF0aW9uO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGFkYXB0ZXIgZm9yIHRoZSBgbWRjRm91bmRhdGlvbmAuXG4gICAqXG4gICAqIE92ZXJyaWRlIGFuZCByZXR1cm4gYW4gb2JqZWN0IHdpdGggdGhlIEFkYXB0ZXIncyBmdW5jdGlvbnMgaW1wbGVtZW50ZWQ6XG4gICAqXG4gICAqICAgIHtcbiAgICogICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAqICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgKiAgICAgIC4uLlxuICAgKiAgICB9XG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlQWRhcHRlcigpOiB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIGF0dGFjaCB0aGUgTURDIEZvdW5kYXRpb24gdG8gdGhlIGluc3RhbmNlXG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlRm91bmRhdGlvbigpIHtcbiAgICBpZiAodGhpcy5tZGNGb3VuZGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWRjRm91bmRhdGlvbi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMubWRjRm91bmRhdGlvbiA9IG5ldyB0aGlzLm1kY0ZvdW5kYXRpb25DbGFzcyh0aGlzLmNyZWF0ZUFkYXB0ZXIoKSk7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmluaXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5jcmVhdGVGb3VuZGF0aW9uKCk7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHtNRENSaXBwbGVGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMnO1xuXG5pbXBvcnQge0Jhc2VFbGVtZW50fSBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYmFzZS1lbGVtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBIVE1MRWxlbWVudFdpdGhSaXBwbGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHJpcHBsZT86IE1EQ1JpcHBsZUZvdW5kYXRpb247XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGb3JtRWxlbWVudCBleHRlbmRzIEJhc2VFbGVtZW50IHtcbiAgLyoqXG4gICAqIEZvcm0tY2FwYWJsZSBlbGVtZW50IGluIHRoZSBjb21wb25lbnQgU2hhZG93Um9vdC5cbiAgICpcbiAgICogRGVmaW5lIGluIHlvdXIgY29tcG9uZW50IHdpdGggdGhlIGBAcXVlcnlgIGRlY29yYXRvclxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGZvcm1FbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBwcm90ZWN0ZWQgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJywgZGVsZWdhdGVzRm9jdXM6IHRydWV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgcmlwcGxlIGdldHRlciBmb3IgUmlwcGxlIGludGVncmF0aW9uIHdpdGggbXdjLWZvcm1maWVsZFxuICAgKi9cbiAgcmVhZG9ubHkgcmlwcGxlPzogTURDUmlwcGxlRm91bmRhdGlvbjtcblxuICBjbGljaygpIHtcbiAgICBpZiAodGhpcy5mb3JtRWxlbWVudCkge1xuICAgICAgdGhpcy5mb3JtRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5mb3JtRWxlbWVudC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFyaWFMYWJlbChsYWJlbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZm9ybUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKCk7XG4gICAgdGhpcy5tZGNSb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnLCBlKSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7UHJvcGVydHlWYWx1ZXN9IGZyb20gJ2xpdC1lbGVtZW50L2xpYi91cGRhdGluZy1lbGVtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBPYnNlcnZlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICh2YWx1ZTogYW55LCBvbGQ6IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBvYnNlcnZlciA9IChvYnNlcnZlcjogT2JzZXJ2ZXIpID0+XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAocHJvdG86IGFueSwgcHJvcE5hbWU6IFByb3BlcnR5S2V5KSA9PiB7XG4gICAgICAvLyBpZiB3ZSBoYXZlbid0IHdyYXBwZWQgYHVwZGF0ZWRgIGluIHRoaXMgY2xhc3MsIGRvIHNvXG4gICAgICBpZiAoIXByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMpIHtcbiAgICAgICAgcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycyA9IG5ldyBNYXA8UHJvcGVydHlLZXksIE9ic2VydmVyPigpO1xuICAgICAgICBjb25zdCB1c2VyVXBkYXRlZCA9IHByb3RvLnVwZGF0ZWQ7XG4gICAgICAgIHByb3RvLnVwZGF0ZWQgPSBmdW5jdGlvbihjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICAgICAgICB1c2VyVXBkYXRlZC5jYWxsKHRoaXMsIGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICBjaGFuZ2VkUHJvcGVydGllcy5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMuY29uc3RydWN0b3IuX29ic2VydmVycy5nZXQoayk7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5jYWxsKHRoaXMsIHRoaXNba10sIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBjbG9uZSBhbnkgZXhpc3Rpbmcgb2JzZXJ2ZXJzIChzdXBlcmNsYXNzZXMpXG4gICAgICB9IGVsc2UgaWYgKCFwcm90by5jb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eSgnX29ic2VydmVycycpKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVycyA9IHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnM7XG4gICAgICAgIHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIG9ic2VydmVycy5mb3JFYWNoKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICh2OiBhbnksIGs6IFByb3BlcnR5S2V5KSA9PiBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzLnNldChrLCB2KSk7XG4gICAgICB9XG4gICAgICAvLyBzZXQgdGhpcyBtZXRob2RcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMuc2V0KHByb3BOYW1lLCBvYnNlcnZlcik7XG4gICAgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gZWxlbWVudCBhc3NpZ25lZCB0byBhIGdpdmVuIHNsb3QgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBzZWxlY3RvclxuICovXG5cbmltcG9ydCB7bWF0Y2hlc30gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgbm9kZSBpcyBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2tcbiAqL1xuZXhwb3J0IGNvbnN0IGlzTm9kZUVsZW1lbnQgPSAobm9kZTogTm9kZSk6IG5vZGUgaXMgRWxlbWVudCA9PiB7XG4gIHJldHVybiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQXNzaWduZWRFbGVtZW50KHNsb3Q6IEhUTUxTbG90RWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZykge1xuICBmb3IgKGNvbnN0IG5vZGUgb2Ygc2xvdC5hc3NpZ25lZE5vZGVzKHtmbGF0dGVuOiB0cnVlfSkpIHtcbiAgICBpZiAoaXNOb2RlRWxlbWVudChub2RlKSkge1xuICAgICAgY29uc3QgZWwgPSAobm9kZSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCB0eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhhc1JlbW92ZUNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgYWRkQ2xhc3M6IChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSxcbiAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9LFxuICAgIGhhc0NsYXNzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gIH07XG59XG5cbmxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbmNvbnN0IGZuID0gKCkgPT4geyAvKiBlbXB0eSBsaXN0ZW5lciAqLyB9O1xuY29uc3Qgb3B0aW9uc0Jsb2NrOiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyA9IHtcbiAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd4JywgZm4sIG9wdGlvbnNCbG9jayk7XG5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd4JywgZm4pO1xuLyoqXG4gKiBEbyBldmVudCBsaXN0ZW5lcnMgc3Vwb3J0IHRoZSBgcGFzc2l2ZWAgb3B0aW9uP1xuICovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lciA9IHN1cHBvcnRzUGFzc2l2ZTtcblxuZXhwb3J0IGNvbnN0IGRlZXBBY3RpdmVFbGVtZW50UGF0aCA9IChkb2MgPSB3aW5kb3cuZG9jdW1lbnQpOiBFbGVtZW50W10gPT4ge1xuICBsZXQgYWN0aXZlRWxlbWVudCA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICBjb25zdCBwYXRoOiBFbGVtZW50W10gPSBbXTtcblxuICBpZiAoIWFjdGl2ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHdoaWxlIChhY3RpdmVFbGVtZW50KSB7XG4gICAgcGF0aC5wdXNoKGFjdGl2ZUVsZW1lbnQpO1xuICAgIGlmIChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZG9lc0VsZW1lbnRDb250YWluRm9jdXMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuID0+IHtcbiAgY29uc3QgYWN0aXZlUGF0aCA9IGRlZXBBY3RpdmVFbGVtZW50UGF0aCgpO1xuXG4gIGlmICghYWN0aXZlUGF0aC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkZWVwQWN0aXZlRWxlbWVudCA9IGFjdGl2ZVBhdGhbYWN0aXZlUGF0aC5sZW5ndGggLSAxXTtcbiAgY29uc3QgZm9jdXNFdiA9XG4gICAgICBuZXcgRXZlbnQoJ2NoZWNrLWlmLWZvY3VzZWQnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KTtcbiAgbGV0IGNvbXBvc2VkUGF0aDogRXZlbnRUYXJnZXRbXSA9IFtdO1xuICBjb25zdCBsaXN0ZW5lciA9IChldjogRXZlbnQpID0+IHtcbiAgICBjb21wb3NlZFBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcbiAgfTtcblxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoZWNrLWlmLWZvY3VzZWQnLCBsaXN0ZW5lcik7XG4gIGRlZXBBY3RpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQoZm9jdXNFdik7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hlY2staWYtZm9jdXNlZCcsIGxpc3RlbmVyKTtcblxuICByZXR1cm4gY29tcG9zZWRQYXRoLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7aHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHl9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7Y2xhc3NNYXB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IHtyaXBwbGUsIFJpcHBsZU9wdGlvbnN9IGZyb20gJy4vcmlwcGxlLWRpcmVjdGl2ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHByaW1hcnkgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBhY3RpdmU6IGJvb2xlYW58dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGFjY2VudCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHVuYm91bmRlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHthdHRyaWJ1dGU6IGZhbHNlfSkgcHJvdGVjdGVkIGludGVyYWN0aW9uTm9kZTogSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmludGVyYWN0aW9uTm9kZSA9PT0gdGhpcykge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHwgU2hhZG93Um9vdCB8IG51bGw7XG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbk5vZGUgPSBwYXJlbnQ7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHBhcmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgJiYgcGFyZW50Lmhvc3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uTm9kZSA9IHBhcmVudC5ob3N0O1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgLy8gVE9ETyhzb3J2ZWxsKSAjY3NzOiBzaXppbmcuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknOiB0aGlzLnByaW1hcnksXG4gICAgICAnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnOiB0aGlzLmFjY2VudCxcbiAgICB9O1xuICAgIGNvbnN0IHtkaXNhYmxlZCwgdW5ib3VuZGVkLCBhY3RpdmUsIGludGVyYWN0aW9uTm9kZX0gPSB0aGlzO1xuICAgIGNvbnN0IHJpcHBsZU9wdGlvbnM6IFJpcHBsZU9wdGlvbnMgPSB7ZGlzYWJsZWQsIHVuYm91bmRlZCwgaW50ZXJhY3Rpb25Ob2RlfTtcbiAgICBpZiAoYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZU9wdGlvbnMuYWN0aXZlID0gYWN0aXZlO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgLnJpcHBsZT1cIiR7cmlwcGxlKHJpcHBsZU9wdGlvbnMpfVwiXG4gICAgICAgICAgY2xhc3M9XCJtZGMtcmlwcGxlLXN1cmZhY2UgJHtjbGFzc01hcChjbGFzc2VzKX1cIj48L2Rpdj5gO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2Nzc30gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLXJhZGl1cy1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0LCAwKSkgc2NhbGUoMSl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0e2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfXRve29wYWNpdHk6MH19Lm1kYy1yaXBwbGUtc3VyZmFjZXstLW1kYy1yaXBwbGUtZmctc2l6ZTogMDstLW1kYy1yaXBwbGUtbGVmdDogMDstLW1kYy1yaXBwbGUtdG9wOiAwOy0tbWRjLXJpcHBsZS1mZy1zY2FsZTogMTstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0OiAwOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6bm9uZTtvdmVyZmxvdzpoaWRkZW59Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmV7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDoxfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCAwKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tZGMtcmlwcGxlLXN1cmZhY2U6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gMTAwJSk7bGVmdDpjYWxjKDUwJSAtIDEwMCUpO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCV9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF17b3ZlcmZsb3c6dmlzaWJsZX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gNTAlKTtsZWZ0OmNhbGMoNTAlIC0gNTAlKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCBjYWxjKDUwJSAtIDUwJSkpO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCBjYWxjKDUwJSAtIDUwJSkpO3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM2MjAwZWU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtcHJpbWFyeSwgIzYyMDBlZSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnkubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudC5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2V7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH1gO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjdXN0b21FbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCB7UmlwcGxlQmFzZX0gZnJvbSAnLi9td2MtcmlwcGxlLWJhc2UuanMnO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSAnLi9td2MtcmlwcGxlLWNzcy5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ213Yy1yaXBwbGUnOiBSaXBwbGU7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ213Yy1yaXBwbGUnKVxuZXhwb3J0IGNsYXNzIFJpcHBsZSBleHRlbmRzIFJpcHBsZUJhc2Uge1xuICBzdGF0aWMgc3R5bGVzID0gc3R5bGU7XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBjc3MsXG4gIHN2Zyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIFJvdW5kU2xpZGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBoaWdoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGxvdzoge3R5cGU6IE51bWJlcn0sXG4gICAgICBtaW46IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbWF4OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHN0ZXA6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3RhcnRBbmdsZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBhcmNMZW5ndGg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgaGFuZGxlU2l6ZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBoYW5kbGVab29tOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGRpc2FibGVkOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBkcmFnZ2luZzoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9LFxuICAgICAgcnRsOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBfc2NhbGU6IHt0eXBlOiBOdW1iZXJ9LFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5taW4gPSAwO1xuICAgIHRoaXMubWF4ID0gMTAwO1xuICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgdGhpcy5zdGFydEFuZ2xlID0gMTM1O1xuICAgIHRoaXMuYXJjTGVuZ3RoID0gMjcwO1xuICAgIHRoaXMuaGFuZGxlU2l6ZSA9IDY7XG4gICAgdGhpcy5oYW5kbGVab29tID0gMS41O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5ydGwgPSBmYWxzZTtcbiAgICB0aGlzLl9zY2FsZSA9IDE7XG4gIH1cblxuICBnZXQgX3N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0QW5nbGUqTWF0aC5QSS8xODA7XG4gIH1cbiAgZ2V0IF9sZW4oKSB7XG4gICAgLy8gVGhpbmdzIGdldCB3ZWlyZCBpZiBsZW5ndGggaXMgbW9yZSB0aGFuIGEgY29tcGxldGUgdHVyblxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmFyY0xlbmd0aCpNYXRoLlBJLzE4MCwgMipNYXRoLlBJLTAuMDEpO1xuICB9XG4gIGdldCBfZW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIHRoaXMuX2xlbjtcbiAgfVxuXG4gIGdldCBfZW5hYmxlZCgpIHtcbiAgICAvLyBJZiBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICBpZih0aGlzLmRpc2FibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PSBudWxsICYmICh0aGlzLmhpZ2ggPT0gbnVsbCB8fCB0aGlzLmxvdyA9PSBudWxsKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYodGhpcy52YWx1ZSAhPSBudWxsICYmICh0aGlzLnZhbHVlID4gdGhpcy5tYXggfHwgdGhpcy52YWx1ZSA8IHRoaXMubWluKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHRoaXMuaGlnaCAhPSBudWxsICYmICh0aGlzLmhpZ2ggPiB0aGlzLm1heCB8fCB0aGlzLmhpZ2ggPCB0aGlzLm1pbikpIHJldHVybiBmYWxzZTtcbiAgICBpZih0aGlzLmxvdyAhPSBudWxsICYmICh0aGlzLmxvdyA+IHRoaXMubWF4IHx8IHRoaXMubG93IDwgdGhpcy5taW4pKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfYW5nbGVJbnNpZGUoYW5nbGUpIHtcbiAgICAvLyBDaGVjayBpZiBhbiBhbmdsZSBpcyBvbiB0aGUgYXJjXG4gICAgbGV0IGEgPSAodGhpcy5zdGFydEFuZ2xlICsgdGhpcy5hcmNMZW5ndGgvMiAtIGFuZ2xlICsgMTgwICsgMzYwKSAlIDM2MCAtIDE4MDtcbiAgICByZXR1cm4gKGEgPCB0aGlzLmFyY0xlbmd0aC8yICYmIGEgPiAtdGhpcy5hcmNMZW5ndGgvMik7XG4gIH1cbiAgX2FuZ2xlMnh5KGFuZ2xlKSB7XG4gICAgaWYodGhpcy5ydGwpXG4gICAgICByZXR1cm4ge3g6IC1NYXRoLmNvcyhhbmdsZSksIHk6IE1hdGguc2luKGFuZ2xlKX1cbiAgICByZXR1cm4ge3g6IE1hdGguY29zKGFuZ2xlKSwgeTogTWF0aC5zaW4oYW5nbGUpfVxuICB9XG4gIF94eTJhbmdsZSh4LHkpIHtcbiAgICBpZih0aGlzLnJ0bClcbiAgICAgIHggPSAteDtcbiAgICByZXR1cm4gKE1hdGguYXRhbjIoeSx4KSAtIHRoaXMuX3N0YXJ0ICsgMipNYXRoLlBJKSAlICgyKk1hdGguUEkpO1xuICB9XG5cbiAgX3ZhbHVlMmFuZ2xlKHZhbHVlKSB7XG4gICAgY29uc3QgZnJhY3Rpb24gPSAodmFsdWUgLSB0aGlzLm1pbikvKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIGZyYWN0aW9uICogdGhpcy5fbGVuO1xuICB9XG4gIF9hbmdsZTJ2YWx1ZShhbmdsZSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChhbmdsZS90aGlzLl9sZW4qKHRoaXMubWF4IC0gdGhpcy5taW4pICsgdGhpcy5taW4pL3RoaXMuc3RlcCkqdGhpcy5zdGVwO1xuICB9XG5cblxuICBnZXQgX2JvdW5kYXJpZXMoKSB7XG4gICAgLy8gR2V0IHRoZSBtYXhpbXVtIGV4dGVudHMgb2YgdGhlIGJhciBhcmNcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2FuZ2xlMnh5KHRoaXMuX3N0YXJ0KTtcbiAgICBjb25zdCBlbmQgPSB0aGlzLl9hbmdsZTJ4eSh0aGlzLl9lbmQpO1xuXG4gICAgbGV0IHVwID0gMTtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMjcwKSlcbiAgICAgIHVwID0gIE1hdGgubWF4KC1zdGFydC55LCAtZW5kLnkpO1xuXG4gICAgbGV0IGRvd24gPSAxO1xuICAgIGlmKCF0aGlzLl9hbmdsZUluc2lkZSg5MCkpXG4gICAgICBkb3duID0gTWF0aC5tYXgoc3RhcnQueSwgZW5kLnkpO1xuXG4gICAgbGV0IGxlZnQgPSAxO1xuICAgIGlmKCF0aGlzLl9hbmdsZUluc2lkZSgxODApKVxuICAgICAgbGVmdCA9IE1hdGgubWF4KC1zdGFydC54LCAtZW5kLngpO1xuXG4gICAgbGV0IHJpZ2h0ID0gMTtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMCkpXG4gICAgICByaWdodCA9IE1hdGgubWF4KHN0YXJ0LngsIGVuZC54KTtcblxuICAgIHJldHVybiB7XG4gICAgICB1cCwgZG93biwgbGVmdCwgcmlnaHQsXG4gICAgICBoZWlnaHQ6IHVwK2Rvd24sXG4gICAgICB3aWR0aDogbGVmdCtyaWdodCxcbiAgICB9O1xuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2KSB7XG4gICAgbGV0IGhhbmRsZSA9IGV2LnRhcmdldDtcblxuICAgIC8vIEF2b2lkIGRvdWJsZSBldmVudHMgbW91c2VEb3duLT5mb2N1c1xuICAgIGlmKHRoaXMuX3JvdGF0aW9uICYmIHRoaXMuX3JvdGF0aW9uLnR5cGUgIT09IFwiZm9jdXNcIikgcmV0dXJuO1xuXG4gICAgLy8gSWYgYW4gaW52aXNpYmxlIGhhbmRsZSB3YXMgY2xpY2tlZCwgc3dpdGNoIHRvIHRoZSB2aXNpYmxlIGNvdW50ZXJwYXJ0XG4gICAgaWYoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcIm92ZXJmbG93XCIpKVxuICAgICAgaGFuZGxlID0gaGFuZGxlLm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgaWYoIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoYW5kbGVcIikpIHJldHVybjtcbiAgICBoYW5kbGUuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAyKnRoaXMuaGFuZGxlU2l6ZSp0aGlzLmhhbmRsZVpvb20qdGhpcy5fc2NhbGUpO1xuXG4gICAgY29uc3QgbWluID0gaGFuZGxlLmlkID09PSBcImhpZ2hcIiA/IHRoaXMubG93IDogdGhpcy5taW47XG4gICAgY29uc3QgbWF4ID0gaGFuZGxlLmlkID09PSBcImxvd1wiID8gdGhpcy5oaWdoIDogdGhpcy5tYXg7XG4gICAgdGhpcy5fcm90YXRpb24gPSB7IGhhbmRsZSwgbWluLCBtYXgsIHN0YXJ0OiB0aGlzW2hhbmRsZS5pZF0sIHR5cGU6IGV2LnR5cGV9O1xuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgZHJhZ0VuZChldikge1xuICAgIGlmKCF0aGlzLl9yb3RhdGlvbikgcmV0dXJuO1xuXG4gICAgY29uc3QgaGFuZGxlID0gdGhpcy5fcm90YXRpb24uaGFuZGxlO1xuICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDIqdGhpcy5oYW5kbGVTaXplKnRoaXMuX3NjYWxlKTtcblxuICAgIHRoaXMuX3JvdGF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgaGFuZGxlLmJsdXIoKTtcblxuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndmFsdWUtY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBbaGFuZGxlLmlkXSA6IHRoaXNbaGFuZGxlLmlkXSxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgLy8gVGhpcyBtYWtlcyB0aGUgbG93IGhhbmRsZSByZW5kZXIgb3ZlciB0aGUgaGlnaCBoYW5kbGUgaWYgdGhleSBib3RoIGFyZVxuICAgIC8vIGNsb3NlIHRvIHRoZSB0b3AgZW5kLiAgT3RoZXJ3aXNlIGlmIHdvdWxkIGJlIHVuY2xpY2thYmxlLCBhbmQgdGhlIGhpZ2hcbiAgICAvLyBoYW5kbGUgbG9ja2VkIGJ5IHRoZSBsb3cuICBDYWxjdWFsdGlvbiBpcyBkb25lIGluIHRoZSBkcmFnRW5kIGhhbmRsZXIgdG9cbiAgICAvLyBhdm9pZCBcInogZmlnaHRpbmdcIiB3aGlsZSBkcmFnZ2luZy5cbiAgICBpZih0aGlzLmxvdyAmJiB0aGlzLmxvdyA+PSAwLjk5KnRoaXMubWF4KVxuICAgICAgdGhpcy5fcmV2ZXJzZU9yZGVyID0gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICB0aGlzLl9yZXZlcnNlT3JkZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGRyYWcoZXYpIHtcbiAgICBpZighdGhpcy5fcm90YXRpb24pIHJldHVybjtcbiAgICBpZih0aGlzLl9yb3RhdGlvbi50eXBlID09PSBcImZvY3VzXCIpIHJldHVybjtcblxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBtb3VzZVggPSAoZXYudHlwZSA9PT0gXCJ0b3VjaG1vdmVcIikgPyBldi50b3VjaGVzWzBdLmNsaWVudFggOiBldi5jbGllbnRYO1xuICAgIGNvbnN0IG1vdXNlWSA9IChldi50eXBlID09PSBcInRvdWNobW92ZVwiKSA/IGV2LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2LmNsaWVudFk7XG5cbiAgICBjb25zdCByZWN0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm91bmRhcmllcyA9IHRoaXMuX2JvdW5kYXJpZXM7XG4gICAgY29uc3QgeCA9IG1vdXNlWCAtIChyZWN0LmxlZnQgKyBib3VuZGFyaWVzLmxlZnQqcmVjdC53aWR0aC9ib3VuZGFyaWVzLndpZHRoKTtcbiAgICBjb25zdCB5ID0gbW91c2VZIC0gKHJlY3QudG9wICsgYm91bmRhcmllcy51cCpyZWN0LmhlaWdodC9ib3VuZGFyaWVzLmhlaWdodCk7XG5cbiAgICBjb25zdCBhbmdsZSA9IHRoaXMuX3h5MmFuZ2xlKHgseSk7XG4gICAgY29uc3QgcG9zID0gdGhpcy5fYW5nbGUydmFsdWUoYW5nbGUpO1xuICAgIHRoaXMuX2RyYWdwb3MocG9zKTtcbiAgfVxuXG4gIF9kcmFncG9zKHBvcykge1xuICAgIGlmKHBvcyA8IHRoaXMuX3JvdGF0aW9uLm1pbiB8fCBwb3MgPiB0aGlzLl9yb3RhdGlvbi5tYXgpIHJldHVybjtcblxuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuX3JvdGF0aW9uLmhhbmRsZTtcbiAgICB0aGlzW2hhbmRsZS5pZF0gPSBwb3M7XG5cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5naW5nJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIFtoYW5kbGUuaWRdIDogcG9zLFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBfa2V5U3RlcChldikge1xuICAgIGlmKCF0aGlzLl9yb3RhdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuX3JvdGF0aW9uLmhhbmRsZTtcbiAgICBpZihldi5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpXG4gICAgICBpZih0aGlzLnJ0bClcbiAgICAgICAgdGhpcy5fZHJhZ3Bvcyh0aGlzW2hhbmRsZS5pZF0gKyB0aGlzLnN0ZXApO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLl9kcmFncG9zKHRoaXNbaGFuZGxlLmlkXSAtIHRoaXMuc3RlcCk7XG4gICAgaWYoZXYua2V5ID09PSBcIkFycm93UmlnaHRcIilcbiAgICAgIGlmKHRoaXMucnRsKVxuICAgICAgICB0aGlzLl9kcmFncG9zKHRoaXNbaGFuZGxlLmlkXSAtIHRoaXMuc3RlcCk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuX2RyYWdwb3ModGhpc1toYW5kbGUuaWRdICsgdGhpcy5zdGVwKTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnRW5kLmJpbmQodGhpcyksIHtwYXNzaXZlOiBmYWxzZX0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZy5iaW5kKHRoaXMpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcuYmluZCh0aGlzKSwge3Bhc3NpdmU6IGZhbHNlfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2tleVN0ZXAuYmluZCh0aGlzKSk7XG4gIH1cblxuICB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG5cbiAgICAvLyBXb3JrYXJvdW5kIGZvciB2ZWN0b3ItZWZmZWN0IG5vdCB3b3JraW5nIGluIElFIGFuZCBwcmUtQ2hyb21pdW0gRWRnZVxuICAgIC8vIFRoYXQncyBhbHNvIHdoeSB0aGUgX3NjYWxlIHByb3BlcnR5IGV4aXN0c1xuICAgIGlmKHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpXG4gICAgJiYgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUudmVjdG9yRWZmZWN0ICE9PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiX3NjYWxlXCIpICYmIHRoaXMuX3NjYWxlICE9IDEpIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwYXRoXCIpLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYoZS5nZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG9yaWcgPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZSkuZ2V0UHJvcGVydHlWYWx1ZSgnc3Ryb2tlLXdpZHRoJykpO1xuICAgICAgICBlLnN0eWxlLnN0cm9rZVdpZHRoID0gYCR7b3JpZyp0aGlzLl9zY2FsZX1weGA7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIHRoaXMuX3NjYWxlID0gMi9zY2FsZTtcbiAgfVxuXG5cblxuICBfcmVuZGVyQXJjKHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCBkaWZmID0gZW5kLXN0YXJ0O1xuICAgIHN0YXJ0ID0gdGhpcy5fYW5nbGUyeHkoc3RhcnQpO1xuICAgIGVuZCA9IHRoaXMuX2FuZ2xlMnh5KGVuZCswLjAwMSk7IC8vIFNhZmFyaSBkb2Vzbid0IGxpa2UgYXJjcyB3aXRoIG5vIGxlbmd0aFxuICAgIHJldHVybiBgXG4gICAgICBNICR7c3RhcnQueH0gJHtzdGFydC55fVxuICAgICAgQSAxIDEsXG4gICAgICAgIDAsXG4gICAgICAgICR7KGRpZmYpID4gTWF0aC5QSSA/IFwiMVwiIDogXCIwXCJ9ICR7dGhpcy5ydGwgPyBcIjBcIiA6IFwiMVwifSxcbiAgICAgICAgJHtlbmQueH0gJHtlbmQueX1cbiAgICBgO1xuICB9XG5cbiAgX3JlbmRlckhhbmRsZShpZCkge1xuICAgIGNvbnN0IHRoZXRhID0gdGhpcy5fdmFsdWUyYW5nbGUodGhpc1tpZF0pO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX2FuZ2xlMnh5KHRoZXRhKTtcblxuICAgIC8vIFR3byBoYW5kbGVzIGFyZSBkcmF3bi4gT25lIHZpc2libGUsIGFuZCBvbmUgaW52aXNpYmxlIHRoYXQncyB0d2ljZSBhc1xuICAgIC8vIGJpZy4gTWFrZXMgaXQgZWFzaWVyIHRvIGNsaWNrLlxuICAgIHJldHVybiBzdmdgXG4gICAgICA8ZyBjbGFzcz1cIiR7aWR9IGhhbmRsZVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPSR7aWR9XG4gICAgICAgICAgY2xhc3M9XCJvdmVyZmxvd1wiXG4gICAgICAgICAgZD1cIlxuICAgICAgICAgIE0gJHtwb3MueH0gJHtwb3MueX1cbiAgICAgICAgICBMICR7cG9zLngrMC4wMDF9ICR7cG9zLnkrMC4wMDF9XG4gICAgICAgICAgXCJcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICBzdHJva2U9XCJyZ2JhKDAsMCwwLDApXCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIkezQqdGhpcy5oYW5kbGVTaXplKnRoaXMuX3NjYWxlfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBpZD0ke2lkfVxuICAgICAgICAgIGNsYXNzPVwiaGFuZGxlXCJcbiAgICAgICAgICBkPVwiXG4gICAgICAgICAgTSAke3Bvcy54fSAke3Bvcy55fVxuICAgICAgICAgIEwgJHtwb3MueCswLjAwMX0gJHtwb3MueSswLjAwMX1cbiAgICAgICAgICBcIlxuICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIiR7Mip0aGlzLmhhbmRsZVNpemUqdGhpcy5fc2NhbGV9XCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIEBmb2N1cz0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgICAgIEBibHVyPSR7dGhpcy5kcmFnRW5kfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIGBcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuX2JvdW5kYXJpZXM7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdmdcbiAgICAgICAgQG1vdXNlZG93bj0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgICBAdG91Y2hzdGFydD0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgICB4bWxuPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB2aWV3Qm94PVwiJHstdmlldy5sZWZ0fSAkey12aWV3LnVwfSAke3ZpZXcud2lkdGh9ICR7dmlldy5oZWlnaHR9XCJcbiAgICAgICAgc3R5bGU9XCJtYXJnaW46ICR7dGhpcy5oYW5kbGVTaXplKnRoaXMuaGFuZGxlWm9vbX1weDtcIlxuICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICA+XG4gICAgICAgIDxnIGNsYXNzPVwic2xpZGVyXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGNsYXNzPVwicGF0aFwiXG4gICAgICAgICAgICBkPSR7dGhpcy5fcmVuZGVyQXJjKHRoaXMuX3N0YXJ0LCB0aGlzLl9lbmQpfVxuICAgICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICAkeyB0aGlzLl9lbmFibGVkXG4gICAgICAgICAgICA/IHN2Z2BcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJhclwiXG4gICAgICAgICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgICAgICAgZD0ke3RoaXMuX3JlbmRlckFyYyhcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlMmFuZ2xlKHRoaXMubG93ICE9IG51bGwgPyB0aGlzLmxvdyA6IHRoaXMubWluKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlMmFuZ2xlKHRoaXMuaGlnaCAhPSBudWxsID8gdGhpcy5oaWdoIDogdGhpcy52YWx1ZSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPmBcbiAgICAgICAgICAgIDogYGBcbiAgICAgICAgICB9XG4gICAgICAgIDwvZz5cblxuICAgICAgICA8ZyBjbGFzcz1cImhhbmRsZXNcIj5cbiAgICAgICAgJHsgdGhpcy5fZW5hYmxlZFxuICAgICAgICAgID8gdGhpcy5sb3cgIT0gbnVsbFxuICAgICAgICAgICAgICA/IHRoaXMuX3JldmVyc2VPcmRlclxuICAgICAgICAgICAgICAgID8gaHRtbGAke3RoaXMuX3JlbmRlckhhbmRsZShcImhpZ2hcIil9ICR7dGhpcy5fcmVuZGVySGFuZGxlKFwibG93XCIpfWBcbiAgICAgICAgICAgICAgICA6IGh0bWxgJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJsb3dcIil9ICR7dGhpcy5fcmVuZGVySGFuZGxlKFwiaGlnaFwiKX1gXG4gICAgICAgICAgICAgIDogaHRtbGAke3RoaXMuX3JlbmRlckhhbmRsZShcInZhbHVlXCIpfWBcbiAgICAgICAgICA6IGBgXG4gICAgICAgIH1cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBzdmcge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIH1cbiAgICAgIC5zbGlkZXIge1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBzdHJva2Utd2lkdGg6IHZhcigtLXJvdW5kLXNsaWRlci1wYXRoLXdpZHRoLCAzKTtcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHZhcigtLXJvdW5kLXNsaWRlci1saW5lY2FwLCByb3VuZCk7XG4gICAgICB9XG4gICAgICAucGF0aCB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLXBhdGgtY29sb3IsIGxpZ2h0Z3JheSk7XG4gICAgICB9XG4gICAgICAuYmFyIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1yb3VuZC1zbGlkZXItYmFyLWNvbG9yLCBkZWVwc2t5Ymx1ZSk7XG4gICAgICB9XG4gICAgICBnLmhhbmRsZXMge1xuICAgICAgICBzdHJva2U6IHZhcigtLXJvdW5kLXNsaWRlci1oYW5kbGUtY29sb3IsIHZhcigtLXJvdW5kLXNsaWRlci1iYXItY29sb3IsIGRlZXBza3libHVlKSk7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgIH1cbiAgICAgIGcubG93LmhhbmRsZSB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLWxvdy1oYW5kbGUtY29sb3IpO1xuICAgICAgfVxuICAgICAgZy5oaWdoLmhhbmRsZSB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLWhpZ2gtaGFuZGxlLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5oYW5kbGU6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiB1bnNldDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncm91bmQtc2xpZGVyJywgUm91bmRTbGlkZXIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWVwRnJlZXplIChvKSB7XG4gIE9iamVjdC5mcmVlemUobyk7XG5cbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIGlmIChvLmhhc093blByb3BlcnR5KHByb3ApXG4gICAgJiYgb1twcm9wXSAhPT0gbnVsbFxuICAgICYmICh0eXBlb2Ygb1twcm9wXSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICYmICFPYmplY3QuaXNGcm96ZW4ob1twcm9wXSkpIHtcbiAgICAgIGRlZXBGcmVlemUob1twcm9wXSk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBvO1xufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVQYXJ0LCBkaXJlY3RpdmUsIFBhcnQsIFByb3BlcnR5UGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlSW5mbyB7XG4gIHJlYWRvbmx5IFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbi8qKlxuICogU3RvcmVzIHRoZSBTdHlsZUluZm8gb2JqZWN0IGFwcGxpZWQgdG8gYSBnaXZlbiBBdHRyaWJ1dGVQYXJ0LlxuICogVXNlZCB0byB1bnNldCBleGlzdGluZyB2YWx1ZXMgd2hlbiBhIG5ldyBTdHlsZUluZm8gb2JqZWN0IGlzIGFwcGxpZWQuXG4gKi9cbmNvbnN0IHN0eWxlTWFwQ2FjaGUgPSBuZXcgV2Vha01hcDxBdHRyaWJ1dGVQYXJ0LCBTdHlsZUluZm8+KCk7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBhcHBsaWVzIENTUyBwcm9wZXJ0aWVzIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogYHN0eWxlTWFwYCBjYW4gb25seSBiZSB1c2VkIGluIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZSBhbmQgbXVzdCBiZSB0aGUgb25seVxuICogZXhwcmVzc2lvbiBpbiB0aGUgYXR0cmlidXRlLiBJdCB0YWtlcyB0aGUgcHJvcGVydHkgbmFtZXMgaW4gdGhlIGBzdHlsZUluZm9gXG4gKiBvYmplY3QgYW5kIGFkZHMgdGhlIHByb3BlcnR5IHZhbHVlcyBhcyBDU1MgcHJvcGVydGVzLiBQcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBkYXNoZXMgKGAtYCkgYXJlIGFzc3VtZWQgdG8gYmUgdmFsaWQgQ1NTIHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlXG4gKiBlbGVtZW50J3Mgc3R5bGUgb2JqZWN0IHVzaW5nIGBzZXRQcm9wZXJ0eSgpYC4gTmFtZXMgd2l0aG91dCBkYXNoZXMgYXJlXG4gKiBhc3N1bWVkIHRvIGJlIGNhbWVsQ2FzZWQgSmF2YVNjcmlwdCBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZSBlbGVtZW50J3NcbiAqIHN0eWxlIG9iamVjdCB1c2luZyBwcm9wZXJ0eSBhc3NpZ25tZW50LCBhbGxvd2luZyB0aGUgc3R5bGUgb2JqZWN0IHRvXG4gKiB0cmFuc2xhdGUgSmF2YVNjcmlwdC1zdHlsZSBuYW1lcyB0byBDU1MgcHJvcGVydHkgbmFtZXMuXG4gKlxuICogRm9yIGV4YW1wbGUgYHN0eWxlTWFwKHtiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCAnYm9yZGVyLXRvcCc6ICc1cHgnLCAnLS1zaXplJzpcbiAqICcwJ30pYCBzZXRzIHRoZSBgYmFja2dyb3VuZC1jb2xvcmAsIGBib3JkZXItdG9wYCBhbmQgYC0tc2l6ZWAgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0gc3R5bGVJbmZvIHtTdHlsZUluZm99XG4gKi9cbmV4cG9ydCBjb25zdCBzdHlsZU1hcCA9IGRpcmVjdGl2ZSgoc3R5bGVJbmZvOiBTdHlsZUluZm8pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICghKHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB8fCAocGFydCBpbnN0YW5jZW9mIFByb3BlcnR5UGFydCkgfHxcbiAgICAgIHBhcnQuY29tbWl0dGVyLm5hbWUgIT09ICdzdHlsZScgfHwgcGFydC5jb21taXR0ZXIucGFydHMubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSBgc3R5bGVNYXBgIGRpcmVjdGl2ZSBtdXN0IGJlIHVzZWQgaW4gdGhlIHN0eWxlIGF0dHJpYnV0ZSAnICtcbiAgICAgICAgJ2FuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgaW4gdGhlIGF0dHJpYnV0ZS4nKTtcbiAgfVxuXG4gIGNvbnN0IHtjb21taXR0ZXJ9ID0gcGFydDtcbiAgY29uc3Qge3N0eWxlfSA9IGNvbW1pdHRlci5lbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gIC8vIEhhbmRsZSBzdGF0aWMgc3R5bGVzIHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBhIFBhcnRcbiAgaWYgKCFzdHlsZU1hcENhY2hlLmhhcyhwYXJ0KSkge1xuICAgIHN0eWxlLmNzc1RleHQgPSBjb21taXR0ZXIuc3RyaW5ncy5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBSZW1vdmUgb2xkIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3QgaW4gc3R5bGVJbmZvXG4gIGNvbnN0IG9sZEluZm8gPSBzdHlsZU1hcENhY2hlLmdldChwYXJ0KTtcbiAgZm9yIChjb25zdCBuYW1lIGluIG9sZEluZm8pIHtcbiAgICBpZiAoIShuYW1lIGluIHN0eWxlSW5mbykpIHtcbiAgICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAoc3R5bGUgYXMgYW55KVtuYW1lXSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgb3IgdXBkYXRlIHByb3BlcnRpZXNcbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlSW5mbykge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIChzdHlsZSBhcyBhbnkpW25hbWVdID0gc3R5bGVJbmZvW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBzdHlsZUluZm9bbmFtZV0pO1xuICAgIH1cbiAgfVxuICBzdHlsZU1hcENhY2hlLnNldChwYXJ0LCBzdHlsZUluZm8pO1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUdBO0FBQ0E7QUFHQTtBQStCQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUVBO0FBTUE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7OztBQUlBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUVBO0FBRUE7QUFBQTs7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUVBO0FBOEJBO0FBQ0E7QUE3QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBeEJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7Ozs7QUFLQTtBQUxBOzs7O0FBZUE7OztBQTlCQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlDQTtBQUNBO0FBN1dBO0FBQ0E7QUE4V0E7Ozs7Ozs7Ozs7O0FDdFhBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQU1BOzs7OztBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~zha-config-dashboard"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc356aGEtY29uZmlnLWRhc2hib2FyZC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYmFzZS1lbGVtZW50LnRzIiwid2VicGFjazovLy9zcmMvZm9ybS1lbGVtZW50LnRzIiwid2VicGFjazovLy9zcmMvb2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvc3R5bGUtbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHtNRENGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvYmFzZSc7XG5pbXBvcnQge0xpdEVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IHtDb25zdHJ1Y3Rvcn0gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQge29ic2VydmVyfSBmcm9tICcuL29ic2VydmVyLmpzJztcbmV4cG9ydCB7YWRkSGFzUmVtb3ZlQ2xhc3N9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0ICogZnJvbSAnQG1hdGVyaWFsL2Jhc2UvdHlwZXMuanMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLyoqXG4gICAqIFJvb3QgZWxlbWVudCBmb3IgTURDIEZvdW5kYXRpb24gdXNhZ2UuXG4gICAqXG4gICAqIERlZmluZSBpbiB5b3VyIGNvbXBvbmVudCB3aXRoIHRoZSBgQHF1ZXJ5YCBkZWNvcmF0b3JcbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBtZGNSb290OiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IG1kY0ZvdW5kYXRpb25DbGFzczogQ29uc3RydWN0b3I8TURDRm91bmRhdGlvbj47XG5cbiAgLyoqXG4gICAqIEFuIGluc3RhbmNlIG9mIHRoZSBNREMgRm91bmRhdGlvbiBjbGFzcyB0byBhdHRhY2ggdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IG1kY0ZvdW5kYXRpb246IE1EQ0ZvdW5kYXRpb247XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgYWRhcHRlciBmb3IgdGhlIGBtZGNGb3VuZGF0aW9uYC5cbiAgICpcbiAgICogT3ZlcnJpZGUgYW5kIHJldHVybiBhbiBvYmplY3Qgd2l0aCB0aGUgQWRhcHRlcidzIGZ1bmN0aW9ucyBpbXBsZW1lbnRlZDpcbiAgICpcbiAgICogICAge1xuICAgKiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICogICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAqICAgICAgLi4uXG4gICAqICAgIH1cbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVBZGFwdGVyKCk6IHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgYXR0YWNoIHRoZSBNREMgRm91bmRhdGlvbiB0byB0aGUgaW5zdGFuY2VcbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVGb3VuZGF0aW9uKCkge1xuICAgIGlmICh0aGlzLm1kY0ZvdW5kYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uID0gbmV3IHRoaXMubWRjRm91bmRhdGlvbkNsYXNzKHRoaXMuY3JlYXRlQWRhcHRlcigpKTtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uaW5pdCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLmNyZWF0ZUZvdW5kYXRpb24oKTtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQge01EQ1JpcHBsZUZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyc7XG5cbmltcG9ydCB7QmFzZUVsZW1lbnR9IGZyb20gJy4vYmFzZS1lbGVtZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9iYXNlLWVsZW1lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhUTUxFbGVtZW50V2l0aFJpcHBsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgcmlwcGxlPzogTURDUmlwcGxlRm91bmRhdGlvbjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1FbGVtZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQge1xuICAvKipcbiAgICogRm9ybS1jYXBhYmxlIGVsZW1lbnQgaW4gdGhlIGNvbXBvbmVudCBTaGFkb3dSb290LlxuICAgKlxuICAgKiBEZWZpbmUgaW4geW91ciBjb21wb25lbnQgd2l0aCB0aGUgYEBxdWVyeWAgZGVjb3JhdG9yXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZm9ybUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudCByaXBwbGUgZ2V0dGVyIGZvciBSaXBwbGUgaW50ZWdyYXRpb24gd2l0aCBtd2MtZm9ybWZpZWxkXG4gICAqL1xuICByZWFkb25seSByaXBwbGU/OiBNRENSaXBwbGVGb3VuZGF0aW9uO1xuXG4gIGNsaWNrKCkge1xuICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICB0aGlzLmZvcm1FbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLmZvcm1FbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXJpYUxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mb3JtRWxlbWVudCkge1xuICAgICAgdGhpcy5mb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLm1kY1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIGUpKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtQcm9wZXJ0eVZhbHVlc30gZnJvbSAnbGl0LWVsZW1lbnQvbGliL3VwZGF0aW5nLWVsZW1lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgKHZhbHVlOiBhbnksIG9sZDogYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IG9ic2VydmVyID0gKG9ic2VydmVyOiBPYnNlcnZlcikgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIChwcm90bzogYW55LCBwcm9wTmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAgIC8vIGlmIHdlIGhhdmVuJ3Qgd3JhcHBlZCBgdXBkYXRlZGAgaW4gdGhpcyBjbGFzcywgZG8gc29cbiAgICAgIGlmICghcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycykge1xuICAgICAgICBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgT2JzZXJ2ZXI+KCk7XG4gICAgICAgIGNvbnN0IHVzZXJVcGRhdGVkID0gcHJvdG8udXBkYXRlZDtcbiAgICAgICAgcHJvdG8udXBkYXRlZCA9IGZ1bmN0aW9uKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgICAgICAgIHVzZXJVcGRhdGVkLmNhbGwodGhpcywgY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzLmdldChrKTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmNhbGwodGhpcywgdGhpc1trXSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNsb25lIGFueSBleGlzdGluZyBvYnNlcnZlcnMgKHN1cGVyY2xhc3NlcylcbiAgICAgIH0gZWxzZSBpZiAoIXByb3RvLmNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KCdfb2JzZXJ2ZXJzJykpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJzID0gcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycztcbiAgICAgICAgcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgKHY6IGFueSwgazogUHJvcGVydHlLZXkpID0+IHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMuc2V0KGssIHYpKTtcbiAgICAgIH1cbiAgICAgIC8vIHNldCB0aGlzIG1ldGhvZFxuICAgICAgcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycy5zZXQocHJvcE5hbWUsIG9ic2VydmVyKTtcbiAgICB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4vKipcbiAqIFJldHVybiBhbiBlbGVtZW50IGFzc2lnbmVkIHRvIGEgZ2l2ZW4gc2xvdCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHNlbGVjdG9yXG4gKi9cblxuaW1wb3J0IHttYXRjaGVzfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBub2RlIGlzIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVja1xuICovXG5leHBvcnQgY29uc3QgaXNOb2RlRWxlbWVudCA9IChub2RlOiBOb2RlKTogbm9kZSBpcyBFbGVtZW50ID0+IHtcbiAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBc3NpZ25lZEVsZW1lbnQoc2xvdDogSFRNTFNsb3RFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBzbG90LmFzc2lnbmVkTm9kZXMoe2ZsYXR0ZW46IHRydWV9KSkge1xuICAgIGlmIChpc05vZGVFbGVtZW50KG5vZGUpKSB7XG4gICAgICBjb25zdCBlbCA9IChub2RlIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IHR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkSGFzUmVtb3ZlQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBhZGRDbGFzczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9LFxuICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0sXG4gICAgaGFzQ2xhc3M6IChjbGFzc05hbWU6IHN0cmluZykgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgfTtcbn1cblxubGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuY29uc3QgZm4gPSAoKSA9PiB7IC8qIGVtcHR5IGxpc3RlbmVyICovIH07XG5jb25zdCBvcHRpb25zQmxvY2s6IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zID0ge1xuICBnZXQgcGFzc2l2ZSgpIHtcbiAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3gnLCBmbiwgb3B0aW9uc0Jsb2NrKTtcbmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3gnLCBmbik7XG4vKipcbiAqIERvIGV2ZW50IGxpc3RlbmVycyBzdXBvcnQgdGhlIGBwYXNzaXZlYCBvcHRpb24/XG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyID0gc3VwcG9ydHNQYXNzaXZlO1xuXG5leHBvcnQgY29uc3QgZGVlcEFjdGl2ZUVsZW1lbnRQYXRoID0gKGRvYyA9IHdpbmRvdy5kb2N1bWVudCk6IEVsZW1lbnRbXSA9PiB7XG4gIGxldCBhY3RpdmVFbGVtZW50ID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gIGNvbnN0IHBhdGg6IEVsZW1lbnRbXSA9IFtdO1xuXG4gIGlmICghYWN0aXZlRWxlbWVudCkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBwYXRoLnB1c2goYWN0aXZlRWxlbWVudCk7XG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCkge1xuICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBkb2VzRWxlbWVudENvbnRhaW5Gb2N1cyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBhY3RpdmVQYXRoID0gZGVlcEFjdGl2ZUVsZW1lbnRQYXRoKCk7XG5cbiAgaWYgKCFhY3RpdmVQYXRoLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRlZXBBY3RpdmVFbGVtZW50ID0gYWN0aXZlUGF0aFthY3RpdmVQYXRoLmxlbmd0aCAtIDFdO1xuICBjb25zdCBmb2N1c0V2ID1cbiAgICAgIG5ldyBFdmVudCgnY2hlY2staWYtZm9jdXNlZCcsIHtidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZX0pO1xuICBsZXQgY29tcG9zZWRQYXRoOiBFdmVudFRhcmdldFtdID0gW107XG4gIGNvbnN0IGxpc3RlbmVyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgIGNvbXBvc2VkUGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuICB9O1xuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2hlY2staWYtZm9jdXNlZCcsIGxpc3RlbmVyKTtcbiAgZGVlcEFjdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChmb2N1c0V2KTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGVjay1pZi1mb2N1c2VkJywgbGlzdGVuZXIpO1xuXG4gIHJldHVybiBjb21wb3NlZFBhdGguaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG4vKipcbiAqIEZvciBBdHRyaWJ1dGVQYXJ0cywgc2V0cyB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGFuZCByZW1vdmVzXG4gKiB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogRm9yIG90aGVyIHBhcnQgdHlwZXMsIHRoaXMgZGlyZWN0aXZlIGlzIGEgbm8tb3AuXG4gKi9cbmV4cG9ydCBjb25zdCBpZkRlZmluZWQgPSBkaXJlY3RpdmUoKHZhbHVlOiB1bmtub3duKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkge1xuICAgIGlmICh2YWx1ZSAhPT0gcGFydC52YWx1ZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHBhcnQuY29tbWl0dGVyLm5hbWU7XG4gICAgICBwYXJ0LmNvbW1pdHRlci5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydCwgUHJvcGVydHlQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVJbmZvIHtcbiAgcmVhZG9ubHkgW25hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuLyoqXG4gKiBTdG9yZXMgdGhlIFN0eWxlSW5mbyBvYmplY3QgYXBwbGllZCB0byBhIGdpdmVuIEF0dHJpYnV0ZVBhcnQuXG4gKiBVc2VkIHRvIHVuc2V0IGV4aXN0aW5nIHZhbHVlcyB3aGVuIGEgbmV3IFN0eWxlSW5mbyBvYmplY3QgaXMgYXBwbGllZC5cbiAqL1xuY29uc3Qgc3R5bGVNYXBDYWNoZSA9IG5ldyBXZWFrTWFwPEF0dHJpYnV0ZVBhcnQsIFN0eWxlSW5mbz4oKTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgQ1NTIHByb3BlcnRpZXMgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBgc3R5bGVNYXBgIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGBzdHlsZWAgYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5XG4gKiBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGUuIEl0IHRha2VzIHRoZSBwcm9wZXJ0eSBuYW1lcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYWRkcyB0aGUgcHJvcGVydHkgdmFsdWVzIGFzIENTUyBwcm9wZXJ0ZXMuIFByb3BlcnR5IG5hbWVzIHdpdGhcbiAqIGRhc2hlcyAoYC1gKSBhcmUgYXNzdW1lZCB0byBiZSB2YWxpZCBDU1MgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGVcbiAqIGVsZW1lbnQncyBzdHlsZSBvYmplY3QgdXNpbmcgYHNldFByb3BlcnR5KClgLiBOYW1lcyB3aXRob3V0IGRhc2hlcyBhcmVcbiAqIGFzc3VtZWQgdG8gYmUgY2FtZWxDYXNlZCBKYXZhU2NyaXB0IHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlIGVsZW1lbnQnc1xuICogc3R5bGUgb2JqZWN0IHVzaW5nIHByb3BlcnR5IGFzc2lnbm1lbnQsIGFsbG93aW5nIHRoZSBzdHlsZSBvYmplY3QgdG9cbiAqIHRyYW5zbGF0ZSBKYXZhU2NyaXB0LXN0eWxlIG5hbWVzIHRvIENTUyBwcm9wZXJ0eSBuYW1lcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSBgc3R5bGVNYXAoe2JhY2tncm91bmRDb2xvcjogJ3JlZCcsICdib3JkZXItdG9wJzogJzVweCcsICctLXNpemUnOlxuICogJzAnfSlgIHNldHMgdGhlIGBiYWNrZ3JvdW5kLWNvbG9yYCwgYGJvcmRlci10b3BgIGFuZCBgLS1zaXplYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSBzdHlsZUluZm8ge1N0eWxlSW5mb31cbiAqL1xuZXhwb3J0IGNvbnN0IHN0eWxlTWFwID0gZGlyZWN0aXZlKChzdHlsZUluZm86IFN0eWxlSW5mbykgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgaWYgKCEocGFydCBpbnN0YW5jZW9mIEF0dHJpYnV0ZVBhcnQpIHx8IChwYXJ0IGluc3RhbmNlb2YgUHJvcGVydHlQYXJ0KSB8fFxuICAgICAgcGFydC5jb21taXR0ZXIubmFtZSAhPT0gJ3N0eWxlJyB8fCBwYXJ0LmNvbW1pdHRlci5wYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIGBzdHlsZU1hcGAgZGlyZWN0aXZlIG11c3QgYmUgdXNlZCBpbiB0aGUgc3R5bGUgYXR0cmlidXRlICcgK1xuICAgICAgICAnYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCBpbiB0aGUgYXR0cmlidXRlLicpO1xuICB9XG5cbiAgY29uc3Qge2NvbW1pdHRlcn0gPSBwYXJ0O1xuICBjb25zdCB7c3R5bGV9ID0gY29tbWl0dGVyLmVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgLy8gSGFuZGxlIHN0YXRpYyBzdHlsZXMgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIGEgUGFydFxuICBpZiAoIXN0eWxlTWFwQ2FjaGUuaGFzKHBhcnQpKSB7XG4gICAgc3R5bGUuY3NzVGV4dCA9IGNvbW1pdHRlci5zdHJpbmdzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBvbGQgcHJvcGVydGllcyB0aGF0IG5vIGxvbmdlciBleGlzdCBpbiBzdHlsZUluZm9cbiAgY29uc3Qgb2xkSW5mbyA9IHN0eWxlTWFwQ2FjaGUuZ2V0KHBhcnQpO1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gb2xkSW5mbykge1xuICAgIGlmICghKG5hbWUgaW4gc3R5bGVJbmZvKSkge1xuICAgICAgaWYgKG5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIChzdHlsZSBhcyBhbnkpW25hbWVdID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBvciB1cGRhdGUgcHJvcGVydGllc1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVJbmZvKSB7XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgKHN0eWxlIGFzIGFueSlbbmFtZV0gPSBzdHlsZUluZm9bbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHN0eWxlSW5mb1tuYW1lXSk7XG4gICAgfVxuICB9XG4gIHN0eWxlTWFwQ2FjaGUuc2V0KHBhcnQsIHN0eWxlSW5mbyk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBR0E7QUFDQTtBQUdBO0FBK0JBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdDQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBRUE7QUFNQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7O0FBSUE7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBTUE7Ozs7O0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
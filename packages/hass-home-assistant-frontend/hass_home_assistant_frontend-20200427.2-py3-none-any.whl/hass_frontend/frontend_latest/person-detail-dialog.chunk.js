(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["person-detail-dialog"],{

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

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

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

/***/ "./src/components/user/ha-user-picker.ts":
/*!***********************************************!*\
  !*** ./src/components/user/ha-user-picker.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/user */ "./src/data/user.ts");
/* harmony import */ var _ha_user_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ha-user-badge */ "./src/components/user/ha-user-badge.ts");
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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }














let HaUserPicker = _decorate(null, function (_initialize, _LitElement) {
  class HaUserPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaUserPicker,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "users",
      value: void 0
    }, {
      kind: "field",
      key: "_sortedUsers",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(users => {
          if (!users) {
            return [];
          }

          return users.filter(user => !user.system_generated).sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_9__["compare"])(a.name, b.name));
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <paper-dropdown-menu-light .label=${this.label}>
        <paper-listbox
          slot="dropdown-content"
          .selected=${this._value}
          attr-for-selected="data-user-id"
          @iron-select=${this._userChanged}
        >
          <paper-icon-item data-user-id="">
            No user
          </paper-icon-item>
          ${this._sortedUsers(this.users).map(user => lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
              <paper-icon-item data-user-id=${user.id}>
                <ha-user-badge .user=${user} slot="item-icon"></ha-user-badge>
                ${user.name}
              </paper-icon-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu-light>
    `;
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        return this.value || "";
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaUserPicker.prototype), "firstUpdated", this).call(this, changedProps);

        if (this.users === undefined) {
          Object(_data_user__WEBPACK_IMPORTED_MODULE_10__["fetchUsers"])(this.hass).then(users => {
            this.users = users;
          });
        }
      }
    }, {
      kind: "method",
      key: "_userChanged",
      value: function _userChanged(ev) {
        const newValue = ev.detail.item.dataset.userId;

        if (newValue !== this._value) {
          this.value = ev.detail.value;
          setTimeout(() => {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "value-changed", {
              value: newValue
            });
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "change");
          }, 0);
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
      :host {
        display: inline-block;
      }
      paper-dropdown-menu-light {
        display: block;
      }
      paper-listbox {
        min-width: 200px;
      }
      paper-icon-item {
        cursor: pointer;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]);

customElements.define("ha-user-picker", HaUserPicker);

/***/ }),

/***/ "./src/panels/config/person/dialog-person-detail.ts":
/*!**********************************************************!*\
  !*** ./src/panels/config/person/dialog-person-detail.ts ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _components_entity_ha_entities_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/entity/ha-entities-picker */ "./src/components/entity/ha-entities-picker.ts");
/* harmony import */ var _components_ha_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-dialog */ "./src/components/ha-dialog.ts");
/* harmony import */ var _components_user_ha_user_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/user/ha-user-picker */ "./src/components/user/ha-user-picker.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
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









const includeDomains = ["device_tracker"];

let DialogPersonDetail = _decorate(null, function (_initialize, _LitElement) {
  class DialogPersonDetail extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogPersonDetail,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_userId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_deviceTrackers",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_submitting",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_deviceTrackersAvailable",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(hass => {
          return Object.keys(hass.states).some(entityId => entityId.substr(0, entityId.indexOf(".")) === "device_tracker");
        });
      }

    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        this._error = undefined;

        if (this._params.entry) {
          this._name = this._params.entry.name || "";
          this._userId = this._params.entry.user_id || undefined;
          this._deviceTrackers = this._params.entry.device_trackers || [];
        } else {
          this._name = "";
          this._userId = undefined;
          this._deviceTrackers = [];
        }

        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``;
        }

        const nameInvalid = this._name.trim() === "";
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <ha-dialog
        open
        @closing="${this._close}"
        scrimClickAction=""
        escapeKeyAction=""
        .heading=${Object(_components_ha_dialog__WEBPACK_IMPORTED_MODULE_5__["createCloseHeading"])(this.hass, this._params.entry ? this._params.entry.name : this.hass.localize("ui.panel.config.person.detail.new_person"))}
      >
        <div>
          ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]` <div class="error">${this._error}</div> ` : ""}
          <div class="form">
            <paper-input
              dialogInitialFocus
              .value=${this._name}
              @value-changed=${this._nameChanged}
              label="${this.hass.localize("ui.panel.config.person.detail.name")}"
              error-message="${this.hass.localize("ui.panel.config.person.detail.name_error_msg")}"
              required
              auto-validate
            ></paper-input>
            <ha-user-picker
              label="${this.hass.localize("ui.panel.config.person.detail.linked_user")}"
              .hass=${this.hass}
              .value=${this._userId}
              .users=${this._params.users}
              @value-changed=${this._userChanged}
            ></ha-user-picker>
            ${this._deviceTrackersAvailable(this.hass) ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                  <p>
                    ${this.hass.localize("ui.panel.config.person.detail.device_tracker_intro")}
                  </p>
                  <ha-entities-picker
                    .hass=${this.hass}
                    .value=${this._deviceTrackers}
                    .includeDomains=${includeDomains}
                    .pickedEntityLabel=${this.hass.localize("ui.panel.config.person.detail.device_tracker_picked")}
                    .pickEntityLabel=${this.hass.localize("ui.panel.config.person.detail.device_tracker_pick")}
                    @value-changed=${this._deviceTrackersChanged}
                  >
                  </ha-entities-picker>
                ` : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                  <p>
                    ${this.hass.localize("ui.panel.config.person.detail.no_device_tracker_available_intro")}
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.home-assistant.io/integrations/#presence-detection"
                        target="_blank"
                        rel="noreferrer"
                        >${this.hass.localize("ui.panel.config.person.detail.link_presence_detection_integrations")}</a
                      >
                    </li>
                    <li>
                      <a
                        @click="${this._closeDialog}"
                        href="/config/integrations"
                      >
                        ${this.hass.localize("ui.panel.config.person.detail.link_integrations_page")}</a
                      >
                    </li>
                  </ul>
                `}
          </div>
        </div>
        ${this._params.entry ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <mwc-button
                slot="secondaryAction"
                class="warning"
                @click="${this._deleteEntry}"
                .disabled=${this._submitting}
              >
                ${this.hass.localize("ui.panel.config.person.detail.delete")}
              </mwc-button>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``}
        <mwc-button
          slot="primaryAction"
          @click="${this._updateEntry}"
          .disabled=${nameInvalid || this._submitting}
        >
          ${this._params.entry ? this.hass.localize("ui.panel.config.person.detail.update") : this.hass.localize("ui.panel.config.person.detail.create")}
        </mwc-button>
      </ha-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._params = undefined;
      }
    }, {
      kind: "method",
      key: "_nameChanged",
      value: function _nameChanged(ev) {
        this._error = undefined;
        this._name = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_userChanged",
      value: function _userChanged(ev) {
        this._error = undefined;
        this._userId = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_deviceTrackersChanged",
      value: function _deviceTrackersChanged(ev) {
        this._error = undefined;
        this._deviceTrackers = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_updateEntry",
      value: async function _updateEntry() {
        this._submitting = true;

        try {
          const values = {
            name: this._name.trim(),
            device_trackers: this._deviceTrackers,
            user_id: this._userId || null
          };

          if (this._params.entry) {
            await this._params.updateEntry(values);
          } else {
            await this._params.createEntry(values);
          }

          this._params = undefined;
        } catch (err) {
          this._error = err ? err.message : "Unknown error";
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_deleteEntry",
      value: async function _deleteEntry() {
        this._submitting = true;

        try {
          if (await this._params.removeEntry()) {
            this._params = undefined;
          }
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._params = undefined;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
        .form {
          padding-bottom: 24px;
        }
        ha-user-picker {
          margin-top: 16px;
        }
        a {
          color: var(--primary-color);
        }
        p {
          color: var(--primary-text-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

customElements.define("dialog-person-detail", DialogPersonDetail);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLWRldGFpbC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2Jhc2UtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vc3JjL29ic2VydmVyLnRzIiwid2VicGFjazovLy9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL2lmLWRlZmluZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlci9oYS11c2VyLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9wZXJzb24vZGlhbG9nLXBlcnNvbi1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQge01EQ0ZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9iYXNlJztcbmltcG9ydCB7TGl0RWxlbWVudH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQge0NvbnN0cnVjdG9yfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCB7b2JzZXJ2ZXJ9IGZyb20gJy4vb2JzZXJ2ZXIuanMnO1xuZXhwb3J0IHthZGRIYXNSZW1vdmVDbGFzc30gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQgKiBmcm9tICdAbWF0ZXJpYWwvYmFzZS90eXBlcy5qcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvKipcbiAgICogUm9vdCBlbGVtZW50IGZvciBNREMgRm91bmRhdGlvbiB1c2FnZS5cbiAgICpcbiAgICogRGVmaW5lIGluIHlvdXIgY29tcG9uZW50IHdpdGggdGhlIGBAcXVlcnlgIGRlY29yYXRvclxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IG1kY1Jvb3Q6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgbWRjRm91bmRhdGlvbkNsYXNzOiBDb25zdHJ1Y3RvcjxNRENGb3VuZGF0aW9uPjtcblxuICAvKipcbiAgICogQW4gaW5zdGFuY2Ugb2YgdGhlIE1EQyBGb3VuZGF0aW9uIGNsYXNzIHRvIGF0dGFjaCB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgbWRjRm91bmRhdGlvbjogTURDRm91bmRhdGlvbjtcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBhZGFwdGVyIGZvciB0aGUgYG1kY0ZvdW5kYXRpb25gLlxuICAgKlxuICAgKiBPdmVycmlkZSBhbmQgcmV0dXJuIGFuIG9iamVjdCB3aXRoIHRoZSBBZGFwdGVyJ3MgZnVuY3Rpb25zIGltcGxlbWVudGVkOlxuICAgKlxuICAgKiAgICB7XG4gICAqICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgKiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICogICAgICAuLi5cbiAgICogICAgfVxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUFkYXB0ZXIoKToge31cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBhdHRhY2ggdGhlIE1EQyBGb3VuZGF0aW9uIHRvIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUZvdW5kYXRpb24oKSB7XG4gICAgaWYgKHRoaXMubWRjRm91bmRhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1kY0ZvdW5kYXRpb24uZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24gPSBuZXcgdGhpcy5tZGNGb3VuZGF0aW9uQ2xhc3ModGhpcy5jcmVhdGVBZGFwdGVyKCkpO1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5pbml0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlRm91bmRhdGlvbigpO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge1Byb3BlcnR5VmFsdWVzfSBmcm9tICdsaXQtZWxlbWVudC9saWIvdXBkYXRpbmctZWxlbWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2ZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAodmFsdWU6IGFueSwgb2xkOiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXIgPSAob2JzZXJ2ZXI6IE9ic2VydmVyKSA9PlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgKHByb3RvOiBhbnksIHByb3BOYW1lOiBQcm9wZXJ0eUtleSkgPT4ge1xuICAgICAgLy8gaWYgd2UgaGF2ZW4ndCB3cmFwcGVkIGB1cGRhdGVkYCBpbiB0aGlzIGNsYXNzLCBkbyBzb1xuICAgICAgaWYgKCFwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzKSB7XG4gICAgICAgIHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBPYnNlcnZlcj4oKTtcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZWQgPSBwcm90by51cGRhdGVkO1xuICAgICAgICBwcm90by51cGRhdGVkID0gZnVuY3Rpb24oY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgICAgICAgdXNlclVwZGF0ZWQuY2FsbCh0aGlzLCBjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgY2hhbmdlZFByb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMuZ2V0KGspO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuY2FsbCh0aGlzLCB0aGlzW2tdLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY2xvbmUgYW55IGV4aXN0aW5nIG9ic2VydmVycyAoc3VwZXJjbGFzc2VzKVxuICAgICAgfSBlbHNlIGlmICghcHJvdG8uY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoJ19vYnNlcnZlcnMnKSkge1xuICAgICAgICBjb25zdCBvYnNlcnZlcnMgPSBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzO1xuICAgICAgICBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAodjogYW55LCBrOiBQcm9wZXJ0eUtleSkgPT4gcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycy5zZXQoaywgdikpO1xuICAgICAgfVxuICAgICAgLy8gc2V0IHRoaXMgbWV0aG9kXG4gICAgICBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzLnNldChwcm9wTmFtZSwgb2JzZXJ2ZXIpO1xuICAgIH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbi8qKlxuICogUmV0dXJuIGFuIGVsZW1lbnQgYXNzaWduZWQgdG8gYSBnaXZlbiBzbG90IHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gc2VsZWN0b3JcbiAqL1xuXG5pbXBvcnQge21hdGNoZXN9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIG5vZGUgaXMgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vZGVFbGVtZW50ID0gKG5vZGU6IE5vZGUpOiBub2RlIGlzIEVsZW1lbnQgPT4ge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZEFzc2lnbmVkRWxlbWVudChzbG90OiBIVE1MU2xvdEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgZm9yIChjb25zdCBub2RlIG9mIHNsb3QuYXNzaWduZWROb2Rlcyh7ZmxhdHRlbjogdHJ1ZX0pKSB7XG4gICAgaWYgKGlzTm9kZUVsZW1lbnQobm9kZSkpIHtcbiAgICAgIGNvbnN0IGVsID0gKG5vZGUgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgdHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIYXNSZW1vdmVDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSxcbiAgICBoYXNDbGFzczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICB9O1xufVxuXG5sZXQgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5jb25zdCBmbiA9ICgpID0+IHsgLyogZW1wdHkgbGlzdGVuZXIgKi8gfTtcbmNvbnN0IG9wdGlvbnNCbG9jazogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgPSB7XG4gIGdldCBwYXNzaXZlKCkge1xuICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigneCcsIGZuLCBvcHRpb25zQmxvY2spO1xuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigneCcsIGZuKTtcbi8qKlxuICogRG8gZXZlbnQgbGlzdGVuZXJzIHN1cG9ydCB0aGUgYHBhc3NpdmVgIG9wdGlvbj9cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXIgPSBzdXBwb3J0c1Bhc3NpdmU7XG5cbmV4cG9ydCBjb25zdCBkZWVwQWN0aXZlRWxlbWVudFBhdGggPSAoZG9jID0gd2luZG93LmRvY3VtZW50KTogRWxlbWVudFtdID0+IHtcbiAgbGV0IGFjdGl2ZUVsZW1lbnQgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgY29uc3QgcGF0aDogRWxlbWVudFtdID0gW107XG5cbiAgaWYgKCFhY3RpdmVFbGVtZW50KSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICB3aGlsZSAoYWN0aXZlRWxlbWVudCkge1xuICAgIHBhdGgucHVzaChhY3RpdmVFbGVtZW50KTtcbiAgICBpZiAoYWN0aXZlRWxlbWVudC5zaGFkb3dSb290KSB7XG4gICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufTtcblxuZXhwb3J0IGNvbnN0IGRvZXNFbGVtZW50Q29udGFpbkZvY3VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGFjdGl2ZVBhdGggPSBkZWVwQWN0aXZlRWxlbWVudFBhdGgoKTtcblxuICBpZiAoIWFjdGl2ZVBhdGgubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZGVlcEFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVQYXRoW2FjdGl2ZVBhdGgubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGZvY3VzRXYgPVxuICAgICAgbmV3IEV2ZW50KCdjaGVjay1pZi1mb2N1c2VkJywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSk7XG4gIGxldCBjb21wb3NlZFBhdGg6IEV2ZW50VGFyZ2V0W10gPSBbXTtcbiAgY29uc3QgbGlzdGVuZXIgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgY29tcG9zZWRQYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjaGVjay1pZi1mb2N1c2VkJywgbGlzdGVuZXIpO1xuICBkZWVwQWN0aXZlRWxlbWVudC5kaXNwYXRjaEV2ZW50KGZvY3VzRXYpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoZWNrLWlmLWZvY3VzZWQnLCBsaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGNvbXBvc2VkUGF0aC5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uc2V0LXN2Zy9pcm9uLWljb25zZXQtc3ZnLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGlyb24taWNvbnNldC1zdmcgbmFtZT1cInBhcGVyLWRyb3Bkb3duLW1lbnVcIiBzaXplPVwiMjRcIj5cbjxzdmc+PGRlZnM+XG48ZyBpZD1cImFycm93LWRyb3AtZG93blwiPjxwYXRoIGQ9XCJNNyAxMGw1IDUgNS01elwiPjwvcGF0aD48L2c+XG48L2RlZnM+PC9zdmc+XG48L2lyb24taWNvbnNldC1zdmc+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgLyogTk9URShjZGF0YSk6IEJvdGggdmFsdWVzIGFyZSBuZWVkZWQsIHNpbmNlIHNvbWUgcGhvbmVzIHJlcXVpcmUgdGhlXG4gICAgICAgICAqIHZhbHVlIHRvIGJlIFxcYHRyYW5zcGFyZW50XFxgLlxuICAgICAgICAgKi9cbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtub2lua10pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtuby1sYWJlbC1mbG9hdF0pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1yaXBwbGUge1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1yaXBwbGU7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1idXR0b247XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1pbnB1dDtcbiAgICAgIH1cblxuICAgICAgaXJvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVQYXJ0LCBkaXJlY3RpdmUsIFBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuLyoqXG4gKiBGb3IgQXR0cmlidXRlUGFydHMsIHNldHMgdGhlIGF0dHJpYnV0ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCBhbmQgcmVtb3Zlc1xuICogdGhlIGF0dHJpYnV0ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLlxuICpcbiAqIEZvciBvdGhlciBwYXJ0IHR5cGVzLCB0aGlzIGRpcmVjdGl2ZSBpcyBhIG5vLW9wLlxuICovXG5leHBvcnQgY29uc3QgaWZEZWZpbmVkID0gZGlyZWN0aXZlKCh2YWx1ZTogdW5rbm93bikgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgcGFydCBpbnN0YW5jZW9mIEF0dHJpYnV0ZVBhcnQpIHtcbiAgICBpZiAodmFsdWUgIT09IHBhcnQudmFsdWUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwYXJ0LmNvbW1pdHRlci5uYW1lO1xuICAgICAgcGFydC5jb21taXR0ZXIuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICB9XG59KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBmZXRjaFVzZXJzLCBVc2VyIH0gZnJvbSBcIi4uLy4uL2RhdGEvdXNlclwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9oYS11c2VyLWJhZGdlXCI7XG5cbmNsYXNzIEhhVXNlclBpY2tlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgdXNlcnM/OiBVc2VyW107XG5cbiAgcHJpdmF0ZSBfc29ydGVkVXNlcnMgPSBtZW1vaXplT25lKCh1c2Vycz86IFVzZXJbXSkgPT4ge1xuICAgIGlmICghdXNlcnMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlcnNcbiAgICAgIC5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLnN5c3RlbV9nZW5lcmF0ZWQpXG4gICAgICAuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLm5hbWUsIGIubmFtZSkpO1xuICB9KTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0IC5sYWJlbD0ke3RoaXMubGFiZWx9PlxuICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cImRhdGEtdXNlci1pZFwiXG4gICAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fdXNlckNoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtIGRhdGEtdXNlci1pZD1cIlwiPlxuICAgICAgICAgICAgTm8gdXNlclxuICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICR7dGhpcy5fc29ydGVkVXNlcnModGhpcy51c2VycykubWFwKFxuICAgICAgICAgICAgKHVzZXIpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0gZGF0YS11c2VyLWlkPSR7dXNlci5pZH0+XG4gICAgICAgICAgICAgICAgPGhhLXVzZXItYmFkZ2UgLnVzZXI9JHt1c2VyfSBzbG90PVwiaXRlbS1pY29uXCI+PC9oYS11c2VyLWJhZGdlPlxuICAgICAgICAgICAgICAgICR7dXNlci5uYW1lfVxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBcIlwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAodGhpcy51c2VycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmZXRjaFVzZXJzKHRoaXMuaGFzcyEpLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VzZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBldi5kZXRhaWwuaXRlbS5kYXRhc2V0LnVzZXJJZDtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXVzZXItcGlja2VyXCIsIEhhVXNlclBpY2tlcik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdGllcy1waWNrZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNsb3NlSGVhZGluZyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy91c2VyL2hhLXVzZXItcGlja2VyXCI7XG5pbXBvcnQgeyBQZXJzb25NdXRhYmxlUGFyYW1zIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvcGVyc29uXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGVyc29uRGV0YWlsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctcGVyc29uLWRldGFpbFwiO1xuXG5jb25zdCBpbmNsdWRlRG9tYWlucyA9IFtcImRldmljZV90cmFja2VyXCJdO1xuXG5jbGFzcyBEaWFsb2dQZXJzb25EZXRhaWwgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25hbWUhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdXNlcklkPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RldmljZVRyYWNrZXJzITogc3RyaW5nW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogUGVyc29uRGV0YWlsRGlhbG9nUGFyYW1zO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N1Ym1pdHRpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIF9kZXZpY2VUcmFja2Vyc0F2YWlsYWJsZSA9IG1lbW9pemVPbmUoKGhhc3MpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpLnNvbWUoXG4gICAgICAoZW50aXR5SWQpID0+XG4gICAgICAgIGVudGl0eUlkLnN1YnN0cigwLCBlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSkgPT09IFwiZGV2aWNlX3RyYWNrZXJcIlxuICAgICk7XG4gIH0pO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHBhcmFtczogUGVyc29uRGV0YWlsRGlhbG9nUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl9wYXJhbXMuZW50cnkpIHtcbiAgICAgIHRoaXMuX25hbWUgPSB0aGlzLl9wYXJhbXMuZW50cnkubmFtZSB8fCBcIlwiO1xuICAgICAgdGhpcy5fdXNlcklkID0gdGhpcy5fcGFyYW1zLmVudHJ5LnVzZXJfaWQgfHwgdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlVHJhY2tlcnMgPSB0aGlzLl9wYXJhbXMuZW50cnkuZGV2aWNlX3RyYWNrZXJzIHx8IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uYW1lID0gXCJcIjtcbiAgICAgIHRoaXMuX3VzZXJJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZVRyYWNrZXJzID0gW107XG4gICAgfVxuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgbmFtZUludmFsaWQgPSB0aGlzLl9uYW1lLnRyaW0oKSA9PT0gXCJcIjtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1kaWFsb2dcbiAgICAgICAgb3BlblxuICAgICAgICBAY2xvc2luZz1cIiR7dGhpcy5fY2xvc2V9XCJcbiAgICAgICAgc2NyaW1DbGlja0FjdGlvbj1cIlwiXG4gICAgICAgIGVzY2FwZUtleUFjdGlvbj1cIlwiXG4gICAgICAgIC5oZWFkaW5nPSR7Y3JlYXRlQ2xvc2VIZWFkaW5nKFxuICAgICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgICB0aGlzLl9wYXJhbXMuZW50cnlcbiAgICAgICAgICAgID8gdGhpcy5fcGFyYW1zLmVudHJ5Lm5hbWVcbiAgICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLm5ld19wZXJzb25cIilcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke3RoaXMuX2Vycm9yID8gaHRtbGAgPGRpdiBjbGFzcz1cImVycm9yXCI+JHt0aGlzLl9lcnJvcn08L2Rpdj4gYCA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBkaWFsb2dJbml0aWFsRm9jdXNcbiAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fbmFtZX1cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9uYW1lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgbGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLmRldGFpbC5uYW1lXCJcbiAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5kZXRhaWwubmFtZV9lcnJvcl9tc2dcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGVcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPGhhLXVzZXItcGlja2VyXG4gICAgICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5kZXRhaWwubGlua2VkX3VzZXJcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl91c2VySWR9XG4gICAgICAgICAgICAgIC51c2Vycz0ke3RoaXMuX3BhcmFtcy51c2Vyc31cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl91c2VyQ2hhbmdlZH1cbiAgICAgICAgICAgID48L2hhLXVzZXItcGlja2VyPlxuICAgICAgICAgICAgJHt0aGlzLl9kZXZpY2VUcmFja2Vyc0F2YWlsYWJsZSh0aGlzLmhhc3MpXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLmRldmljZV90cmFja2VyX2ludHJvXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxoYS1lbnRpdGllcy1waWNrZXJcbiAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX2RldmljZVRyYWNrZXJzfVxuICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZURvbWFpbnM9JHtpbmNsdWRlRG9tYWluc31cbiAgICAgICAgICAgICAgICAgICAgLnBpY2tlZEVudGl0eUxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5kZXRhaWwuZGV2aWNlX3RyYWNrZXJfcGlja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgLnBpY2tFbnRpdHlMYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLmRldmljZV90cmFja2VyX3BpY2tcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2RldmljZVRyYWNrZXJzQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvaGEtZW50aXRpZXMtcGlja2VyPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLm5vX2RldmljZV90cmFja2VyX2F2YWlsYWJsZV9pbnRyb1wiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2ludGVncmF0aW9ucy8jcHJlc2VuY2UtZGV0ZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5kZXRhaWwubGlua19wcmVzZW5jZV9kZXRlY3Rpb25faW50ZWdyYXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9PC9hXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fY2xvc2VEaWFsb2d9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29uZmlnL2ludGVncmF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLmxpbmtfaW50ZWdyYXRpb25zX3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX08L2FcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke3RoaXMuX3BhcmFtcy5lbnRyeVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwic2Vjb25kYXJ5QWN0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fZGVsZXRlRW50cnl9XCJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl9zdWJtaXR0aW5nfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5kZXRhaWwuZGVsZXRlXCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYGB9XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgc2xvdD1cInByaW1hcnlBY3Rpb25cIlxuICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fdXBkYXRlRW50cnl9XCJcbiAgICAgICAgICAuZGlzYWJsZWQ9JHtuYW1lSW52YWxpZCB8fCB0aGlzLl9zdWJtaXR0aW5nfVxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLl9wYXJhbXMuZW50cnlcbiAgICAgICAgICAgID8gdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLnVwZGF0ZVwiKVxuICAgICAgICAgICAgOiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5kZXRhaWwuY3JlYXRlXCIpfVxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICA8L2hhLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX25hbWUgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF91c2VyQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdXNlcklkID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGV2aWNlVHJhY2tlcnNDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZ1tdPikge1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2RldmljZVRyYWNrZXJzID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRW50cnkoKSB7XG4gICAgdGhpcy5fc3VibWl0dGluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbHVlczogUGVyc29uTXV0YWJsZVBhcmFtcyA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50cmltKCksXG4gICAgICAgIGRldmljZV90cmFja2VyczogdGhpcy5fZGV2aWNlVHJhY2tlcnMsXG4gICAgICAgIHVzZXJfaWQ6IHRoaXMuX3VzZXJJZCB8fCBudWxsLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLl9wYXJhbXMhLmVudHJ5KSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3BhcmFtcyEudXBkYXRlRW50cnkodmFsdWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3BhcmFtcyEuY3JlYXRlRW50cnkodmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyID8gZXJyLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc3VibWl0dGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RlbGV0ZUVudHJ5KCkge1xuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoYXdhaXQgdGhpcy5fcGFyYW1zIS5yZW1vdmVFbnRyeSgpKSB7XG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc3VibWl0dGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLXVzZXItcGlja2VyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctcGVyc29uLWRldGFpbFwiOiBEaWFsb2dQZXJzb25EZXRhaWw7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZGlhbG9nLXBlcnNvbi1kZXRhaWxcIiwgRGlhbG9nUGVyc29uRGV0YWlsKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBR0E7QUFDQTtBQUdBO0FBK0JBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7O0FBSUE7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFBQTtBQU9BOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvRUE7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFHQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTs7QUFKQTs7O0FBWEE7QUFzQkE7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTs7O0FBcEZBO0FBQ0E7QUFzRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7O0FBQUE7Ozs7Ozs7O0FBRUE7QUFDQTtBQUlBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTs7O0FBR0E7OztBQVFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBR0E7Ozs7O0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBOzs7QUFqQkE7O0FBdUJBOzs7Ozs7OztBQVVBOzs7OztBQU9BOzs7QUFHQTs7OztBQU1BOzs7QUFHQTs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBUkE7OztBQWNBO0FBQ0E7O0FBRUE7OztBQTNHQTtBQWlIQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlCQTs7O0FBdE9BO0FBQ0E7QUE4T0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
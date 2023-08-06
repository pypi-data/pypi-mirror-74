(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~config-entry-system-options"],{

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

/***/ "./node_modules/@polymer/neon-animation/neon-animatable-behavior.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animatable-behavior.js ***!
  \**************************************************************************/
/*! exports provided: NeonAnimatableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimatableBehavior", function() { return NeonAnimatableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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
 * `NeonAnimatableBehavior` is implemented by elements containing
 * animations for use with elements implementing
 * `NeonAnimationRunnerBehavior`.
 * @polymerBehavior
 */

const NeonAnimatableBehavior = {
  properties: {
    /**
     * Animation configuration. See README for more info.
     */
    animationConfig: {
      type: Object
    },

    /**
     * Convenience property for setting an 'entry' animation. Do not set
     * `animationConfig.entry` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    entryAnimation: {
      observer: '_entryAnimationChanged',
      type: String
    },

    /**
     * Convenience property for setting an 'exit' animation. Do not set
     * `animationConfig.exit` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    exitAnimation: {
      observer: '_exitAnimationChanged',
      type: String
    }
  },
  _entryAnimationChanged: function () {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['entry'] = [{
      name: this.entryAnimation,
      node: this
    }];
  },
  _exitAnimationChanged: function () {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['exit'] = [{
      name: this.exitAnimation,
      node: this
    }];
  },
  _copyProperties: function (config1, config2) {
    // shallowly copy properties from config2 to config1
    for (var property in config2) {
      config1[property] = config2[property];
    }
  },
  _cloneConfig: function (config) {
    var clone = {
      isClone: true
    };

    this._copyProperties(clone, config);

    return clone;
  },
  _getAnimationConfigRecursive: function (type, map, allConfigs) {
    if (!this.animationConfig) {
      return;
    }

    if (this.animationConfig.value && typeof this.animationConfig.value === 'function') {
      this._warn(this._logf('playAnimation', 'Please put \'animationConfig\' inside of your components \'properties\' object instead of outside of it.'));

      return;
    } // type is optional


    var thisConfig;

    if (type) {
      thisConfig = this.animationConfig[type];
    } else {
      thisConfig = this.animationConfig;
    }

    if (!Array.isArray(thisConfig)) {
      thisConfig = [thisConfig];
    } // iterate animations and recurse to process configurations from child nodes


    if (thisConfig) {
      for (var config, index = 0; config = thisConfig[index]; index++) {
        if (config.animatable) {
          config.animatable._getAnimationConfigRecursive(config.type || type, map, allConfigs);
        } else {
          if (config.id) {
            var cachedConfig = map[config.id];

            if (cachedConfig) {
              // merge configurations with the same id, making a clone lazily
              if (!cachedConfig.isClone) {
                map[config.id] = this._cloneConfig(cachedConfig);
                cachedConfig = map[config.id];
              }

              this._copyProperties(cachedConfig, config);
            } else {
              // put any configs with an id into a map
              map[config.id] = config;
            }
          } else {
            allConfigs.push(config);
          }
        }
      }
    }
  },

  /**
   * An element implementing `NeonAnimationRunnerBehavior` calls this
   * method to configure an animation with an optional type. Elements
   * implementing `NeonAnimatableBehavior` should define the property
   * `animationConfig`, which is either a configuration object or a map of
   * animation type to array of configuration objects.
   */
  getAnimationConfig: function (type) {
    var map = {};
    var allConfigs = [];

    this._getAnimationConfigRecursive(type, map, allConfigs); // append the configurations saved in the map to the array


    for (var key in map) {
      allConfigs.push(map[key]);
    }

    return allConfigs;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js ***!
  \********************************************************************************/
/*! exports provided: NeonAnimationRunnerBehaviorImpl, NeonAnimationRunnerBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehaviorImpl", function() { return NeonAnimationRunnerBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehavior", function() { return NeonAnimationRunnerBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neon-animatable-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animatable-behavior.js");
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
 * `NeonAnimationRunnerBehavior` adds a method to run animations.
 *
 * @polymerBehavior NeonAnimationRunnerBehavior
 */

const NeonAnimationRunnerBehaviorImpl = {
  _configureAnimations: function (configs) {
    var results = [];
    var resultsToPlay = [];

    if (configs.length > 0) {
      for (let config, index = 0; config = configs[index]; index++) {
        let neonAnimation = document.createElement(config.name); // is this element actually a neon animation?

        if (neonAnimation.isNeonAnimation) {
          let result = null; // Closure compiler does not work well with a try / catch here.
          // .configure needs to be explicitly defined

          if (!neonAnimation.configure) {
            /**
             * @param {Object} config
             * @return {AnimationEffectReadOnly}
             */
            neonAnimation.configure = function (config) {
              return null;
            };
          }

          result = neonAnimation.configure(config);
          resultsToPlay.push({
            result: result,
            config: config,
            neonAnimation: neonAnimation
          });
        } else {
          console.warn(this.is + ':', config.name, 'not found!');
        }
      }
    }

    for (var i = 0; i < resultsToPlay.length; i++) {
      let result = resultsToPlay[i].result;
      let config = resultsToPlay[i].config;
      let neonAnimation = resultsToPlay[i].neonAnimation; // configuration or play could fail if polyfills aren't loaded

      try {
        // Check if we have an Effect rather than an Animation
        if (typeof result.cancel != 'function') {
          result = document.timeline.play(result);
        }
      } catch (e) {
        result = null;
        console.warn('Couldnt play', '(', config.name, ').', e);
      }

      if (result) {
        results.push({
          neonAnimation: neonAnimation,
          config: config,
          animation: result
        });
      }
    }

    return results;
  },
  _shouldComplete: function (activeEntries) {
    var finished = true;

    for (var i = 0; i < activeEntries.length; i++) {
      if (activeEntries[i].animation.playState != 'finished') {
        finished = false;
        break;
      }
    }

    return finished;
  },
  _complete: function (activeEntries) {
    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].neonAnimation.complete(activeEntries[i].config);
    }

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.cancel();
    }
  },

  /**
   * Plays an animation with an optional `type`.
   * @param {string=} type
   * @param {!Object=} cookie
   */
  playAnimation: function (type, cookie) {
    var configs = this.getAnimationConfig(type);

    if (!configs) {
      return;
    }

    this._active = this._active || {};

    if (this._active[type]) {
      this._complete(this._active[type]);

      delete this._active[type];
    }

    var activeEntries = this._configureAnimations(configs);

    if (activeEntries.length == 0) {
      this.fire('neon-animation-finish', cookie, {
        bubbles: false
      });
      return;
    }

    this._active[type] = activeEntries;

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.onfinish = function () {
        if (this._shouldComplete(activeEntries)) {
          this._complete(activeEntries);

          delete this._active[type];
          this.fire('neon-animation-finish', cookie, {
            bubbles: false
          });
        }
      }.bind(this);
    }
  },

  /**
   * Cancels the currently running animations.
   */
  cancelAnimation: function () {
    for (var k in this._active) {
      var entries = this._active[k];

      for (var j in entries) {
        entries[j].animation.cancel();
      }
    }

    this._active = {};
  }
};
/** @polymerBehavior */

const NeonAnimationRunnerBehavior = [_neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimatableBehavior"], NeonAnimationRunnerBehaviorImpl];

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2Jhc2UtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vc3JjL2Zvcm0tZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vc3JjL29ic2VydmVyLnRzIiwid2VicGFjazovLy9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRpb24tcnVubmVyLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7TURDRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UnO1xuaW1wb3J0IHtMaXRFbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCB7Q29uc3RydWN0b3J9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0IHtvYnNlcnZlcn0gZnJvbSAnLi9vYnNlcnZlci5qcyc7XG5leHBvcnQge2FkZEhhc1JlbW92ZUNsYXNzfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCAqIGZyb20gJ0BtYXRlcmlhbC9iYXNlL3R5cGVzLmpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8qKlxuICAgKiBSb290IGVsZW1lbnQgZm9yIE1EQyBGb3VuZGF0aW9uIHVzYWdlLlxuICAgKlxuICAgKiBEZWZpbmUgaW4geW91ciBjb21wb25lbnQgd2l0aCB0aGUgYEBxdWVyeWAgZGVjb3JhdG9yXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgbWRjUm9vdDogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBtZGNGb3VuZGF0aW9uQ2xhc3M6IENvbnN0cnVjdG9yPE1EQ0ZvdW5kYXRpb24+O1xuXG4gIC8qKlxuICAgKiBBbiBpbnN0YW5jZSBvZiB0aGUgTURDIEZvdW5kYXRpb24gY2xhc3MgdG8gYXR0YWNoIHRvIHRoZSByb290IGVsZW1lbnRcbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBtZGNGb3VuZGF0aW9uOiBNRENGb3VuZGF0aW9uO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGFkYXB0ZXIgZm9yIHRoZSBgbWRjRm91bmRhdGlvbmAuXG4gICAqXG4gICAqIE92ZXJyaWRlIGFuZCByZXR1cm4gYW4gb2JqZWN0IHdpdGggdGhlIEFkYXB0ZXIncyBmdW5jdGlvbnMgaW1wbGVtZW50ZWQ6XG4gICAqXG4gICAqICAgIHtcbiAgICogICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAqICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgKiAgICAgIC4uLlxuICAgKiAgICB9XG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlQWRhcHRlcigpOiB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIGF0dGFjaCB0aGUgTURDIEZvdW5kYXRpb24gdG8gdGhlIGluc3RhbmNlXG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlRm91bmRhdGlvbigpIHtcbiAgICBpZiAodGhpcy5tZGNGb3VuZGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWRjRm91bmRhdGlvbi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMubWRjRm91bmRhdGlvbiA9IG5ldyB0aGlzLm1kY0ZvdW5kYXRpb25DbGFzcyh0aGlzLmNyZWF0ZUFkYXB0ZXIoKSk7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmluaXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5jcmVhdGVGb3VuZGF0aW9uKCk7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHtNRENSaXBwbGVGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMnO1xuXG5pbXBvcnQge0Jhc2VFbGVtZW50fSBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYmFzZS1lbGVtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBIVE1MRWxlbWVudFdpdGhSaXBwbGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHJpcHBsZT86IE1EQ1JpcHBsZUZvdW5kYXRpb247XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGb3JtRWxlbWVudCBleHRlbmRzIEJhc2VFbGVtZW50IHtcbiAgLyoqXG4gICAqIEZvcm0tY2FwYWJsZSBlbGVtZW50IGluIHRoZSBjb21wb25lbnQgU2hhZG93Um9vdC5cbiAgICpcbiAgICogRGVmaW5lIGluIHlvdXIgY29tcG9uZW50IHdpdGggdGhlIGBAcXVlcnlgIGRlY29yYXRvclxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGZvcm1FbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBwcm90ZWN0ZWQgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJywgZGVsZWdhdGVzRm9jdXM6IHRydWV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgcmlwcGxlIGdldHRlciBmb3IgUmlwcGxlIGludGVncmF0aW9uIHdpdGggbXdjLWZvcm1maWVsZFxuICAgKi9cbiAgcmVhZG9ubHkgcmlwcGxlPzogTURDUmlwcGxlRm91bmRhdGlvbjtcblxuICBjbGljaygpIHtcbiAgICBpZiAodGhpcy5mb3JtRWxlbWVudCkge1xuICAgICAgdGhpcy5mb3JtRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5mb3JtRWxlbWVudC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFyaWFMYWJlbChsYWJlbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZm9ybUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKCk7XG4gICAgdGhpcy5tZGNSb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnLCBlKSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7UHJvcGVydHlWYWx1ZXN9IGZyb20gJ2xpdC1lbGVtZW50L2xpYi91cGRhdGluZy1lbGVtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBPYnNlcnZlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICh2YWx1ZTogYW55LCBvbGQ6IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBvYnNlcnZlciA9IChvYnNlcnZlcjogT2JzZXJ2ZXIpID0+XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAocHJvdG86IGFueSwgcHJvcE5hbWU6IFByb3BlcnR5S2V5KSA9PiB7XG4gICAgICAvLyBpZiB3ZSBoYXZlbid0IHdyYXBwZWQgYHVwZGF0ZWRgIGluIHRoaXMgY2xhc3MsIGRvIHNvXG4gICAgICBpZiAoIXByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMpIHtcbiAgICAgICAgcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycyA9IG5ldyBNYXA8UHJvcGVydHlLZXksIE9ic2VydmVyPigpO1xuICAgICAgICBjb25zdCB1c2VyVXBkYXRlZCA9IHByb3RvLnVwZGF0ZWQ7XG4gICAgICAgIHByb3RvLnVwZGF0ZWQgPSBmdW5jdGlvbihjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICAgICAgICB1c2VyVXBkYXRlZC5jYWxsKHRoaXMsIGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICBjaGFuZ2VkUHJvcGVydGllcy5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMuY29uc3RydWN0b3IuX29ic2VydmVycy5nZXQoayk7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5jYWxsKHRoaXMsIHRoaXNba10sIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBjbG9uZSBhbnkgZXhpc3Rpbmcgb2JzZXJ2ZXJzIChzdXBlcmNsYXNzZXMpXG4gICAgICB9IGVsc2UgaWYgKCFwcm90by5jb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eSgnX29ic2VydmVycycpKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVycyA9IHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnM7XG4gICAgICAgIHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIG9ic2VydmVycy5mb3JFYWNoKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICh2OiBhbnksIGs6IFByb3BlcnR5S2V5KSA9PiBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzLnNldChrLCB2KSk7XG4gICAgICB9XG4gICAgICAvLyBzZXQgdGhpcyBtZXRob2RcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMuc2V0KHByb3BOYW1lLCBvYnNlcnZlcik7XG4gICAgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gZWxlbWVudCBhc3NpZ25lZCB0byBhIGdpdmVuIHNsb3QgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBzZWxlY3RvclxuICovXG5cbmltcG9ydCB7bWF0Y2hlc30gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgbm9kZSBpcyBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2tcbiAqL1xuZXhwb3J0IGNvbnN0IGlzTm9kZUVsZW1lbnQgPSAobm9kZTogTm9kZSk6IG5vZGUgaXMgRWxlbWVudCA9PiB7XG4gIHJldHVybiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQXNzaWduZWRFbGVtZW50KHNsb3Q6IEhUTUxTbG90RWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZykge1xuICBmb3IgKGNvbnN0IG5vZGUgb2Ygc2xvdC5hc3NpZ25lZE5vZGVzKHtmbGF0dGVuOiB0cnVlfSkpIHtcbiAgICBpZiAoaXNOb2RlRWxlbWVudChub2RlKSkge1xuICAgICAgY29uc3QgZWwgPSAobm9kZSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCB0eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhhc1JlbW92ZUNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgYWRkQ2xhc3M6IChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSxcbiAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9LFxuICAgIGhhc0NsYXNzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gIH07XG59XG5cbmxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbmNvbnN0IGZuID0gKCkgPT4geyAvKiBlbXB0eSBsaXN0ZW5lciAqLyB9O1xuY29uc3Qgb3B0aW9uc0Jsb2NrOiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyA9IHtcbiAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd4JywgZm4sIG9wdGlvbnNCbG9jayk7XG5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd4JywgZm4pO1xuLyoqXG4gKiBEbyBldmVudCBsaXN0ZW5lcnMgc3Vwb3J0IHRoZSBgcGFzc2l2ZWAgb3B0aW9uP1xuICovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lciA9IHN1cHBvcnRzUGFzc2l2ZTtcblxuZXhwb3J0IGNvbnN0IGRlZXBBY3RpdmVFbGVtZW50UGF0aCA9IChkb2MgPSB3aW5kb3cuZG9jdW1lbnQpOiBFbGVtZW50W10gPT4ge1xuICBsZXQgYWN0aXZlRWxlbWVudCA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICBjb25zdCBwYXRoOiBFbGVtZW50W10gPSBbXTtcblxuICBpZiAoIWFjdGl2ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHdoaWxlIChhY3RpdmVFbGVtZW50KSB7XG4gICAgcGF0aC5wdXNoKGFjdGl2ZUVsZW1lbnQpO1xuICAgIGlmIChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZG9lc0VsZW1lbnRDb250YWluRm9jdXMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuID0+IHtcbiAgY29uc3QgYWN0aXZlUGF0aCA9IGRlZXBBY3RpdmVFbGVtZW50UGF0aCgpO1xuXG4gIGlmICghYWN0aXZlUGF0aC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkZWVwQWN0aXZlRWxlbWVudCA9IGFjdGl2ZVBhdGhbYWN0aXZlUGF0aC5sZW5ndGggLSAxXTtcbiAgY29uc3QgZm9jdXNFdiA9XG4gICAgICBuZXcgRXZlbnQoJ2NoZWNrLWlmLWZvY3VzZWQnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KTtcbiAgbGV0IGNvbXBvc2VkUGF0aDogRXZlbnRUYXJnZXRbXSA9IFtdO1xuICBjb25zdCBsaXN0ZW5lciA9IChldjogRXZlbnQpID0+IHtcbiAgICBjb21wb3NlZFBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcbiAgfTtcblxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoZWNrLWlmLWZvY3VzZWQnLCBsaXN0ZW5lcik7XG4gIGRlZXBBY3RpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQoZm9jdXNFdik7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hlY2staWYtZm9jdXNlZCcsIGxpc3RlbmVyKTtcblxuICByZXR1cm4gY29tcG9zZWRQYXRoLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gKiBgTmVvbkFuaW1hdGFibGVCZWhhdmlvcmAgaXMgaW1wbGVtZW50ZWQgYnkgZWxlbWVudHMgY29udGFpbmluZ1xuICogYW5pbWF0aW9ucyBmb3IgdXNlIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG4gKiBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYC5cbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRhYmxlQmVoYXZpb3IgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogQW5pbWF0aW9uIGNvbmZpZ3VyYXRpb24uIFNlZSBSRUFETUUgZm9yIG1vcmUgaW5mby5cbiAgICAgKi9cbiAgICBhbmltYXRpb25Db25maWc6IHt0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgZm9yIHNldHRpbmcgYW4gJ2VudHJ5JyBhbmltYXRpb24uIERvIG5vdCBzZXRcbiAgICAgKiBgYW5pbWF0aW9uQ29uZmlnLmVudHJ5YCBtYW51YWxseSBpZiB1c2luZyB0aGlzLiBUaGUgYW5pbWF0ZWQgbm9kZSBpcyBzZXRcbiAgICAgKiB0byBgdGhpc2AgaWYgdXNpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBlbnRyeUFuaW1hdGlvbjoge1xuICAgICAgb2JzZXJ2ZXI6ICdfZW50cnlBbmltYXRpb25DaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgZm9yIHNldHRpbmcgYW4gJ2V4aXQnIGFuaW1hdGlvbi4gRG8gbm90IHNldFxuICAgICAqIGBhbmltYXRpb25Db25maWcuZXhpdGAgbWFudWFsbHkgaWYgdXNpbmcgdGhpcy4gVGhlIGFuaW1hdGVkIG5vZGUgaXMgc2V0XG4gICAgICogdG8gYHRoaXNgIGlmIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgZXhpdEFuaW1hdGlvbjoge1xuICAgICAgb2JzZXJ2ZXI6ICdfZXhpdEFuaW1hdGlvbkNoYW5nZWQnLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgfSxcblxuICBfZW50cnlBbmltYXRpb25DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnWydlbnRyeSddID0gW3tuYW1lOiB0aGlzLmVudHJ5QW5pbWF0aW9uLCBub2RlOiB0aGlzfV07XG4gIH0sXG5cbiAgX2V4aXRBbmltYXRpb25DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnWydleGl0J10gPSBbe25hbWU6IHRoaXMuZXhpdEFuaW1hdGlvbiwgbm9kZTogdGhpc31dO1xuICB9LFxuXG4gIF9jb3B5UHJvcGVydGllczogZnVuY3Rpb24oY29uZmlnMSwgY29uZmlnMikge1xuICAgIC8vIHNoYWxsb3dseSBjb3B5IHByb3BlcnRpZXMgZnJvbSBjb25maWcyIHRvIGNvbmZpZzFcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb25maWcyKSB7XG4gICAgICBjb25maWcxW3Byb3BlcnR5XSA9IGNvbmZpZzJbcHJvcGVydHldO1xuICAgIH1cbiAgfSxcblxuICBfY2xvbmVDb25maWc6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBjbG9uZSA9IHtpc0Nsb25lOiB0cnVlfTtcbiAgICB0aGlzLl9jb3B5UHJvcGVydGllcyhjbG9uZSwgY29uZmlnKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH0sXG5cbiAgX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZTogZnVuY3Rpb24odHlwZSwgbWFwLCBhbGxDb25maWdzKSB7XG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbkNvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkNvbmZpZy52YWx1ZSAmJlxuICAgICAgICB0eXBlb2YgdGhpcy5hbmltYXRpb25Db25maWcudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX3dhcm4odGhpcy5fbG9nZihcbiAgICAgICAgICAncGxheUFuaW1hdGlvbicsXG4gICAgICAgICAgJ1BsZWFzZSBwdXQgXFwnYW5pbWF0aW9uQ29uZmlnXFwnIGluc2lkZSBvZiB5b3VyIGNvbXBvbmVudHMgXFwncHJvcGVydGllc1xcJyBvYmplY3QgaW5zdGVhZCBvZiBvdXRzaWRlIG9mIGl0LicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0eXBlIGlzIG9wdGlvbmFsXG4gICAgdmFyIHRoaXNDb25maWc7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHRoaXNDb25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZ1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc0NvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzQ29uZmlnKSkge1xuICAgICAgdGhpc0NvbmZpZyA9IFt0aGlzQ29uZmlnXTtcbiAgICB9XG5cbiAgICAvLyBpdGVyYXRlIGFuaW1hdGlvbnMgYW5kIHJlY3Vyc2UgdG8gcHJvY2VzcyBjb25maWd1cmF0aW9ucyBmcm9tIGNoaWxkIG5vZGVzXG4gICAgaWYgKHRoaXNDb25maWcpIHtcbiAgICAgIGZvciAodmFyIGNvbmZpZywgaW5kZXggPSAwOyBjb25maWcgPSB0aGlzQ29uZmlnW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBpZiAoY29uZmlnLmFuaW1hdGFibGUpIHtcbiAgICAgICAgICBjb25maWcuYW5pbWF0YWJsZS5fZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlKFxuICAgICAgICAgICAgICBjb25maWcudHlwZSB8fCB0eXBlLCBtYXAsIGFsbENvbmZpZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZWRDb25maWcgPSBtYXBbY29uZmlnLmlkXTtcbiAgICAgICAgICAgIGlmIChjYWNoZWRDb25maWcpIHtcbiAgICAgICAgICAgICAgLy8gbWVyZ2UgY29uZmlndXJhdGlvbnMgd2l0aCB0aGUgc2FtZSBpZCwgbWFraW5nIGEgY2xvbmUgbGF6aWx5XG4gICAgICAgICAgICAgIGlmICghY2FjaGVkQ29uZmlnLmlzQ2xvbmUpIHtcbiAgICAgICAgICAgICAgICBtYXBbY29uZmlnLmlkXSA9IHRoaXMuX2Nsb25lQ29uZmlnKGNhY2hlZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgY2FjaGVkQ29uZmlnID0gbWFwW2NvbmZpZy5pZF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5fY29weVByb3BlcnRpZXMoY2FjaGVkQ29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gcHV0IGFueSBjb25maWdzIHdpdGggYW4gaWQgaW50byBhIG1hcFxuICAgICAgICAgICAgICBtYXBbY29uZmlnLmlkXSA9IGNvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsQ29uZmlncy5wdXNoKGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBbiBlbGVtZW50IGltcGxlbWVudGluZyBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYCBjYWxscyB0aGlzXG4gICAqIG1ldGhvZCB0byBjb25maWd1cmUgYW4gYW5pbWF0aW9uIHdpdGggYW4gb3B0aW9uYWwgdHlwZS4gRWxlbWVudHNcbiAgICogaW1wbGVtZW50aW5nIGBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yYCBzaG91bGQgZGVmaW5lIHRoZSBwcm9wZXJ0eVxuICAgKiBgYW5pbWF0aW9uQ29uZmlnYCwgd2hpY2ggaXMgZWl0aGVyIGEgY29uZmlndXJhdGlvbiBvYmplY3Qgb3IgYSBtYXAgb2ZcbiAgICogYW5pbWF0aW9uIHR5cGUgdG8gYXJyYXkgb2YgY29uZmlndXJhdGlvbiBvYmplY3RzLlxuICAgKi9cbiAgZ2V0QW5pbWF0aW9uQ29uZmlnOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIHZhciBhbGxDb25maWdzID0gW107XG4gICAgdGhpcy5fZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlKHR5cGUsIG1hcCwgYWxsQ29uZmlncyk7XG4gICAgLy8gYXBwZW5kIHRoZSBjb25maWd1cmF0aW9ucyBzYXZlZCBpbiB0aGUgbWFwIHRvIHRoZSBhcnJheVxuICAgIGZvciAodmFyIGtleSBpbiBtYXApIHtcbiAgICAgIGFsbENvbmZpZ3MucHVzaChtYXBba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxDb25maWdzO1xuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7TmVvbkFuaW1hdGFibGVCZWhhdmlvcn0gZnJvbSAnLi9uZW9uLWFuaW1hdGFibGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgIGFkZHMgYSBtZXRob2QgdG8gcnVuIGFuaW1hdGlvbnMuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvckltcGwgPSB7XG5cbiAgX2NvbmZpZ3VyZUFuaW1hdGlvbnM6IGZ1bmN0aW9uKGNvbmZpZ3MpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciByZXN1bHRzVG9QbGF5ID0gW107XG5cbiAgICBpZiAoY29uZmlncy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBjb25maWcsIGluZGV4ID0gMDsgY29uZmlnID0gY29uZmlnc1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgbGV0IG5lb25BbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbmZpZy5uYW1lKTtcbiAgICAgICAgLy8gaXMgdGhpcyBlbGVtZW50IGFjdHVhbGx5IGEgbmVvbiBhbmltYXRpb24/XG4gICAgICAgIGlmIChuZW9uQW5pbWF0aW9uLmlzTmVvbkFuaW1hdGlvbikge1xuICAgICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICAgIC8vIENsb3N1cmUgY29tcGlsZXIgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggYSB0cnkgLyBjYXRjaCBoZXJlLlxuICAgICAgICAgIC8vIC5jb25maWd1cmUgbmVlZHMgdG8gYmUgZXhwbGljaXRseSBkZWZpbmVkXG4gICAgICAgICAgaWYgKCFuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBbmltYXRpb25FZmZlY3RSZWFkT25seX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmVvbkFuaW1hdGlvbi5jb25maWd1cmUgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0ID0gbmVvbkFuaW1hdGlvbi5jb25maWd1cmUoY29uZmlnKTtcbiAgICAgICAgICByZXN1bHRzVG9QbGF5LnB1c2goe1xuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgIG5lb25BbmltYXRpb246IG5lb25BbmltYXRpb24sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuaXMgKyAnOicsIGNvbmZpZy5uYW1lLCAnbm90IGZvdW5kIScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzVG9QbGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1RvUGxheVtpXS5yZXN1bHQ7XG4gICAgICBsZXQgY29uZmlnID0gcmVzdWx0c1RvUGxheVtpXS5jb25maWc7XG4gICAgICBsZXQgbmVvbkFuaW1hdGlvbiA9IHJlc3VsdHNUb1BsYXlbaV0ubmVvbkFuaW1hdGlvbjtcbiAgICAgIC8vIGNvbmZpZ3VyYXRpb24gb3IgcGxheSBjb3VsZCBmYWlsIGlmIHBvbHlmaWxscyBhcmVuJ3QgbG9hZGVkXG4gICAgICB0cnkge1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGFuIEVmZmVjdCByYXRoZXIgdGhhbiBhbiBBbmltYXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQuY2FuY2VsICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXN1bHQgPSBkb2N1bWVudC50aW1lbGluZS5wbGF5KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZG50IHBsYXknLCAnKCcsIGNvbmZpZy5uYW1lLCAnKS4nLCBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIG5lb25BbmltYXRpb246IG5lb25BbmltYXRpb24sXG4gICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgYW5pbWF0aW9uOiByZXN1bHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9LFxuXG4gIF9zaG91bGRDb21wbGV0ZTogZnVuY3Rpb24oYWN0aXZlRW50cmllcykge1xuICAgIHZhciBmaW5pc2hlZCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24ucGxheVN0YXRlICE9ICdmaW5pc2hlZCcpIHtcbiAgICAgICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaW5pc2hlZDtcbiAgfSxcblxuICBfY29tcGxldGU6IGZ1bmN0aW9uKGFjdGl2ZUVudHJpZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0ubmVvbkFuaW1hdGlvbi5jb21wbGV0ZShhY3RpdmVFbnRyaWVzW2ldLmNvbmZpZyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBQbGF5cyBhbiBhbmltYXRpb24gd2l0aCBhbiBvcHRpb25hbCBgdHlwZWAuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gdHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3Q9fSBjb29raWVcbiAgICovXG4gIHBsYXlBbmltYXRpb246IGZ1bmN0aW9uKHR5cGUsIGNvb2tpZSkge1xuICAgIHZhciBjb25maWdzID0gdGhpcy5nZXRBbmltYXRpb25Db25maWcodHlwZSk7XG4gICAgaWYgKCFjb25maWdzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMuX2FjdGl2ZSB8fCB7fTtcbiAgICBpZiAodGhpcy5fYWN0aXZlW3R5cGVdKSB7XG4gICAgICB0aGlzLl9jb21wbGV0ZSh0aGlzLl9hY3RpdmVbdHlwZV0pO1xuICAgICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVt0eXBlXTtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlRW50cmllcyA9IHRoaXMuX2NvbmZpZ3VyZUFuaW1hdGlvbnMoY29uZmlncyk7XG5cbiAgICBpZiAoYWN0aXZlRW50cmllcy5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5maXJlKCduZW9uLWFuaW1hdGlvbi1maW5pc2gnLCBjb29raWUsIHtidWJibGVzOiBmYWxzZX0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVt0eXBlXSA9IGFjdGl2ZUVudHJpZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLm9uZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRDb21wbGV0ZShhY3RpdmVFbnRyaWVzKSkge1xuICAgICAgICAgIHRoaXMuX2NvbXBsZXRlKGFjdGl2ZUVudHJpZXMpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hY3RpdmVbdHlwZV07XG4gICAgICAgICAgdGhpcy5maXJlKCduZW9uLWFuaW1hdGlvbi1maW5pc2gnLCBjb29raWUsIHtidWJibGVzOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIHRoZSBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb25zLlxuICAgKi9cbiAgY2FuY2VsQW5pbWF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBrIGluIHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9hY3RpdmVba11cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllc1tqXS5hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlID0ge307XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yID1cbiAgICBbTmVvbkFuaW1hdGFibGVCZWhhdmlvciwgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcblxuaW1wb3J0IHtQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltEaWFsb2dzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvZGlhbG9ncy5odG1sKVxuXG5gcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIGltcGxlbWVudHMgYSBzY3JvbGxpbmcgYXJlYSB1c2VkIGluIGEgTWF0ZXJpYWwgRGVzaWduXG5kaWFsb2cuIEl0IHNob3dzIGEgZGl2aWRlciBhdCB0aGUgdG9wIGFuZC9vciBib3R0b20gaW5kaWNhdGluZyBtb3JlIGNvbnRlbnQsXG5kZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uLiBVc2UgdGhpcyB0b2dldGhlciB3aXRoIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAuXG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGw+XG4gICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgTG9yZW0gaXBzdW0uLi5cbiAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG5JdCBzaG93cyBhIHRvcCBkaXZpZGVyIGFmdGVyIHNjcm9sbGluZyBpZiBpdCBpcyBub3QgdGhlIGZpcnN0IGNoaWxkIGluIGl0c1xucGFyZW50IGNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYWJvdmUuIEl0IHNob3dzIGEgYm90dG9tXG5kaXZpZGVyIGlmIGl0IGlzIHNjcm9sbGFibGUgYW5kIGl0IGlzIG5vdCB0aGUgbGFzdCBjaGlsZCBpbiBpdHMgcGFyZW50XG5jb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGJlbG93LiBUaGUgYm90dG9tIGRpdmlkZXIgaXMgaGlkZGVuXG5pZiBpdCBpcyBzY3JvbGxlZCB0byB0aGUgYm90dG9tLlxuXG5JZiBgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIGlzIG5vdCBhIGRpcmVjdCBjaGlsZCBvZiB0aGUgZWxlbWVudCBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLCByZW1lbWJlciB0byBzZXQgdGhlIGBkaWFsb2dFbGVtZW50YDpcblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbCBpZD1cIm15RGlhbG9nXCI+XG4gICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJteS1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgPGg0PlN1Yi1oZWFkZXI8L2g0PlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgTG9yZW0gaXBzdW0uLi5cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuICAgIDxzY3JpcHQ+XG4gICAgICB2YXIgc2Nyb2xsYWJsZSA9XG5Qb2x5bWVyLmRvbShteURpYWxvZykucXVlcnlTZWxlY3RvcigncGFwZXItZGlhbG9nLXNjcm9sbGFibGUnKTtcbiAgICAgIHNjcm9sbGFibGUuZGlhbG9nRWxlbWVudCA9IG15RGlhbG9nO1xuICAgIDwvc2NyaXB0PlxuXG4jIyMgU3R5bGluZ1xuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCB8IE1peGluIGZvciB0aGUgc2Nyb2xsYWJsZSBjb250ZW50IHwge31cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5pcy1zY3JvbGxlZDpub3QoOmZpcnN0LWNoaWxkKSk6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmNhbi1zY3JvbGw6bm90KC5zY3JvbGxlZC10by1ib3R0b20pOm5vdCg6bGFzdC1jaGlsZCkpOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG5cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXNjcm9sbDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGU7XG4gICAgICB9XG5cbiAgICAgIC5maXQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZVwiIGNsYXNzPVwic2Nyb2xsYWJsZVwiIG9uLXNjcm9sbD1cInVwZGF0ZVNjcm9sbFN0YXRlXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItZGlhbG9nLXNjcm9sbGFibGUnLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaWFsb2cgZWxlbWVudCB0aGF0IGltcGxlbWVudHMgYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmBcbiAgICAgKiBjb250YWluaW5nIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAdHlwZSB7P05vZGV9XG4gICAgICovXG4gICAgZGlhbG9nRWxlbWVudDoge3R5cGU6IE9iamVjdH1cblxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgZWxlbWVudC5cbiAgICovXG4gIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zY3JvbGxhYmxlO1xuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ25vLXBhZGRpbmcnKTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlU2Nyb2xsU3RhdGUuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgdXBkYXRlU2Nyb2xsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2lzLXNjcm9sbGVkJywgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID4gMCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ2Nhbi1zY3JvbGwnLFxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQgPCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdzY3JvbGxlZC10by1ib3R0b20nLFxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQgPj1cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gIH0sXG5cbiAgX2Vuc3VyZVRhcmdldDogZnVuY3Rpb24oKSB7XG4gICAgLy8gUmVhZCBwYXJlbnRFbGVtZW50IGluc3RlYWQgb2YgcGFyZW50Tm9kZSBpbiBvcmRlciB0byBza2lwIHNoYWRvd1Jvb3RzLlxuICAgIHRoaXMuZGlhbG9nRWxlbWVudCA9IHRoaXMuZGlhbG9nRWxlbWVudCB8fCB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gQ2hlY2sgaWYgZGlhbG9nIGltcGxlbWVudHMgcGFwZXItZGlhbG9nLWJlaGF2aW9yLiBJZiBub3QsIGZpdFxuICAgIC8vIHNjcm9sbFRhcmdldCB0byBob3N0LlxuICAgIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQgJiYgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycyAmJlxuICAgICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzLmluZGV4T2YoUGFwZXJEaWFsb2dCZWhhdmlvckltcGwpID49IDApIHtcbiAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5zaXppbmdUYXJnZXQgPSB0aGlzLnNjcm9sbFRhcmdldDtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpdCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2dFbGVtZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QuYWRkKCdmaXQnKTtcbiAgICB9XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFHQTtBQUNBO0FBR0E7QUErQkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0NBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFFQTtBQU1BO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7QUFJQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFDQTs7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25IQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7Ozs7Ozs7QUFNQTtBQUVBO0FBRUE7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBdEJBO0FBNkJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTNIQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwSUE7QUF1SUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMzSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBOENBO0FBRUE7QUFFQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFQQTtBQUNBO0FBVUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
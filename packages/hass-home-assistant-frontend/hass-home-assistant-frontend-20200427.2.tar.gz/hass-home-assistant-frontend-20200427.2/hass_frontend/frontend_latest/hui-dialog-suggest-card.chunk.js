(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-suggest-card"],{

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

/***/ "./src/common/dom/toggle_attribute.ts":
/*!********************************************!*\
  !*** ./src/common/dom/toggle_attribute.ts ***!
  \********************************************/
/*! exports provided: toggleAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAttribute", function() { return toggleAttribute; });
// Toggle Attribute Polyfill because it's too new for some browsers
const toggleAttribute = (el, name, force) => {
  if (force !== undefined) {
    force = !!force;
  }

  if (el.hasAttribute(name)) {
    if (force) {
      return true;
    }

    el.removeAttribute(name);
    return false;
  }

  if (force === false) {
    return false;
  }

  el.setAttribute(name, "");
  return true;
};

/***/ }),

/***/ "./src/components/dialog/ha-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: HaIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIronFocusablesHelper", function() { return HaIronFocusablesHelper; });
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


const HaIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/ha-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDialog", function() { return HaPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-iron-focusables-helper */ "./src/components/dialog/ha-iron-focusables-helper.js");



const paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

const haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _ha_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_2__["HaIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore

class HaPaperDialog extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass) {}
// @ts-ignore
customElements.define("ha-paper-dialog", HaPaperDialog);

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts":
/*!********************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-preview.ts ***!
  \********************************************************************/
/*! exports provided: HuiCardPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardPreview", function() { return HuiCardPreview; });
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../create-element/create-card-element */ "./src/panels/lovelace/create-element/create-card-element.ts");
/* harmony import */ var _create_element_create_element_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../create-element/create-element-base */ "./src/panels/lovelace/create-element/create-element-base.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class HuiCardPreview extends HTMLElement {
  get _error() {
    var _this$_element;

    return ((_this$_element = this._element) === null || _this$_element === void 0 ? void 0 : _this$_element.tagName) === "HUI-ERROR-CARD";
  }

  constructor() {
    super();

    _defineProperty(this, "_hass", void 0);

    _defineProperty(this, "_element", void 0);

    _defineProperty(this, "_config", void 0);

    this.addEventListener("ll-rebuild", () => {
      this._cleanup();

      if (this._config) {
        this.config = this._config;
      }
    });
  }

  set hass(hass) {
    if (!this._hass || this._hass.language !== hass.language) {
      this.style.direction = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_1__["computeRTL"])(hass) ? "rtl" : "ltr";
    }

    this._hass = hass;

    if (this._element) {
      this._element.hass = hass;
    }
  }

  set error(error) {
    this._createCard(Object(_create_element_create_element_base__WEBPACK_IMPORTED_MODULE_3__["createErrorCardConfig"])(`${error.type}: ${error.message}`, undefined));
  }

  set config(configValue) {
    const curConfig = this._config;
    this._config = configValue;

    if (!configValue) {
      this._cleanup();

      return;
    }

    if (!configValue.type) {
      this._createCard(Object(_create_element_create_element_base__WEBPACK_IMPORTED_MODULE_3__["createErrorCardConfig"])("No card type found", configValue));

      return;
    }

    if (!this._element) {
      this._createCard(configValue);

      return;
    } // in case the element was an error element we always want to recreate it


    if (!this._error && curConfig && configValue.type === curConfig.type) {
      try {
        this._element.setConfig(configValue);
      } catch (err) {
        this._createCard(Object(_create_element_create_element_base__WEBPACK_IMPORTED_MODULE_3__["createErrorCardConfig"])(err.message, configValue));
      }
    } else {
      this._createCard(configValue);
    }
  }

  _createCard(configValue) {
    this._cleanup();

    this._element = Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_2__["createCardElement"])(configValue);

    if (this._hass) {
      this._element.hass = this._hass;
    }

    this.appendChild(this._element);
  }

  _cleanup() {
    if (!this._element) {
      return;
    }

    this.removeChild(this._element);
    this._element = undefined;
  }

}
customElements.define("hui-card-preview", HuiCardPreview);

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-dialog-suggest-card.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-dialog-suggest-card.ts ***!
  \***************************************************************************/
/*! exports provided: HuiDialogSuggestCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogSuggestCard", function() { return HuiDialogSuggestCard; });
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-freeze */ "./node_modules/deep-freeze/index.js");
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deep_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _components_ha_yaml_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-yaml-editor */ "./src/components/ha-yaml-editor.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");
/* harmony import */ var _common_generate_lovelace_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/generate-lovelace-config */ "./src/panels/lovelace/common/generate-lovelace-config.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _hui_card_preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hui-card-preview */ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts");
/* harmony import */ var _show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
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











let HuiDialogSuggestCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-dialog-suggest-card")], function (_initialize, _LitElement) {
  class HuiDialogSuggestCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiDialogSuggestCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_cardConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_saving",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_yamlMode",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("ha-paper-dialog")],
      key: "_dialog",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("ha-yaml-editor")],
      key: "_yamlEditor",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        var _ref, _this$hass$panels$lov;

        this._params = params;
        this._yamlMode = ((_ref = (_this$hass$panels$lov = this.hass.panels.lovelace) === null || _this$hass$panels$lov === void 0 ? void 0 : _this$hass$panels$lov.config) === null || _ref === void 0 ? void 0 : _ref.mode) === "yaml";
        this._cardConfig = params.cardConfig || Object(_common_generate_lovelace_config__WEBPACK_IMPORTED_MODULE_6__["computeCards"])(params.entities.map(entityId => [entityId, this.hass.states[entityId]]), {}, true);

        if (!Object.isFrozen(this._cardConfig)) {
          this._cardConfig = deep_freeze__WEBPACK_IMPORTED_MODULE_0___default()(this._cardConfig);
        }

        if (this._dialog) {
          this._dialog.open();
        }

        if (this._yamlEditor) {
          this._yamlEditor.setValue(this._cardConfig);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <ha-paper-dialog with-backdrop opened>
        <h2>
          ${this.hass.localize("ui.panel.lovelace.editor.suggest_card.header")}
        </h2>
        <paper-dialog-scrollable>
          ${this._cardConfig ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <div class="element-preview">
                  ${this._cardConfig.map(cardConfig => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                      <hui-card-preview
                        .hass=${this.hass}
                        .config="${cardConfig}"
                      ></hui-card-preview>
                    `)}
                </div>
              ` : ""}
          ${this._yamlMode && this._cardConfig ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <div class="editor">
                  <ha-yaml-editor
                    .defaultValue=${this._cardConfig}
                  ></ha-yaml-editor>
                </div>
              ` : ""}
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._close}">
            ${this._yamlMode ? this.hass.localize("ui.common.close") : this.hass.localize("ui.common.cancel")}
          </mwc-button>
          ${!this._yamlMode ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <mwc-button @click="${this._pickCard}"
                  >${this.hass.localize("ui.panel.lovelace.editor.suggest_card.create_own")}</mwc-button
                >
                <mwc-button ?disabled="${this._saving}" @click="${this._save}">
                  ${this._saving ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                        <paper-spinner active alt="Saving"></paper-spinner>
                      ` : this.hass.localize("ui.panel.lovelace.editor.suggest_card.add")}
                </mwc-button>
              ` : ""}
        </div>
      </ha-paper-dialog>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_4__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }
        @media all and (min-width: 850px) {
          ha-paper-dialog {
            width: 845px;
          }
        }
        ha-paper-dialog {
          max-width: 845px;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        .hidden {
          display: none;
        }
        .element-preview {
          position: relative;
        }
        hui-card-preview {
          padding-top: 8px;
          margin: 4px auto;
          max-width: 390px;
          display: block;
          width: 100%;
        }
        .editor {
          padding-top: 16px;
        }
      `];
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._dialog.close();

        this._params = undefined;
        this._cardConfig = undefined;
        this._yamlMode = false;
      }
    }, {
      kind: "method",
      key: "_pickCard",
      value: function _pickCard() {
        var _this$_params, _this$_params2, _this$_params3;

        if (!((_this$_params = this._params) === null || _this$_params === void 0 ? void 0 : _this$_params.lovelaceConfig) || !((_this$_params2 = this._params) === null || _this$_params2 === void 0 ? void 0 : _this$_params2.path) || !((_this$_params3 = this._params) === null || _this$_params3 === void 0 ? void 0 : _this$_params3.saveConfig)) {
          return;
        }

        Object(_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_9__["showEditCardDialog"])(this, {
          lovelaceConfig: this._params.lovelaceConfig,
          saveConfig: this._params.saveConfig,
          path: this._params.path,
          entities: this._params.entities
        });

        this._close();
      }
    }, {
      kind: "method",
      key: "_save",
      value: async function _save() {
        var _this$_params4, _this$_params5, _this$_params6;

        if (!((_this$_params4 = this._params) === null || _this$_params4 === void 0 ? void 0 : _this$_params4.lovelaceConfig) || !((_this$_params5 = this._params) === null || _this$_params5 === void 0 ? void 0 : _this$_params5.path) || !((_this$_params6 = this._params) === null || _this$_params6 === void 0 ? void 0 : _this$_params6.saveConfig) || !this._cardConfig) {
          return;
        }

        this._saving = true;
        await this._params.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_7__["addCards"])(this._params.lovelaceConfig, this._params.path, this._cardConfig));
        this._saving = false;
        Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_5__["showSaveSuccessToast"])(this, this.hass);

        this._close();
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/util/toast-saved-success.ts":
/*!*****************************************!*\
  !*** ./src/util/toast-saved-success.ts ***!
  \*****************************************/
/*! exports provided: showSaveSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveSuccessToast", function() { return showSaveSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

const showSaveSuccessToast = (el, hass) => Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, {
  message: hass.localize("ui.common.successfully_saved")
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1zdWdnZXN0LWNhcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRhYmxlLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGlvbi1ydW5uZXItYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vdG9nZ2xlX2F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NhcmQtZWRpdG9yL2h1aS1jYXJkLXByZXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY2FyZC1lZGl0b3IvaHVpLWRpYWxvZy1zdWdnZXN0LWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdG9hc3Qtc2F2ZWQtc3VjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRhYmxlQmVoYXZpb3JgIGlzIGltcGxlbWVudGVkIGJ5IGVsZW1lbnRzIGNvbnRhaW5pbmdcbiAqIGFuaW1hdGlvbnMgZm9yIHVzZSB3aXRoIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAuXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGlvbiBjb25maWd1cmF0aW9uLiBTZWUgUkVBRE1FIGZvciBtb3JlIGluZm8uXG4gICAgICovXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7dHlwZTogT2JqZWN0fSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdlbnRyeScgYW5pbWF0aW9uLiBEbyBub3Qgc2V0XG4gICAgICogYGFuaW1hdGlvbkNvbmZpZy5lbnRyeWAgbWFudWFsbHkgaWYgdXNpbmcgdGhpcy4gVGhlIGFuaW1hdGVkIG5vZGUgaXMgc2V0XG4gICAgICogdG8gYHRoaXNgIGlmIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgZW50cnlBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZCcsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdleGl0JyBhbmltYXRpb24uIERvIG5vdCBzZXRcbiAgICAgKiBgYW5pbWF0aW9uQ29uZmlnLmV4aXRgIG1hbnVhbGx5IGlmIHVzaW5nIHRoaXMuIFRoZSBhbmltYXRlZCBub2RlIGlzIHNldFxuICAgICAqIHRvIGB0aGlzYCBpZiB1c2luZyB0aGlzIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGV4aXRBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2V4aXRBbmltYXRpb25DaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gIH0sXG5cbiAgX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZW50cnknXSA9IFt7bmFtZTogdGhpcy5lbnRyeUFuaW1hdGlvbiwgbm9kZTogdGhpc31dO1xuICB9LFxuXG4gIF9leGl0QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZXhpdCddID0gW3tuYW1lOiB0aGlzLmV4aXRBbmltYXRpb24sIG5vZGU6IHRoaXN9XTtcbiAgfSxcblxuICBfY29weVByb3BlcnRpZXM6IGZ1bmN0aW9uKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgICAvLyBzaGFsbG93bHkgY29weSBwcm9wZXJ0aWVzIGZyb20gY29uZmlnMiB0byBjb25maWcxXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnMVtwcm9wZXJ0eV0gPSBjb25maWcyW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0sXG5cbiAgX2Nsb25lQ29uZmlnOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICB2YXIgY2xvbmUgPSB7aXNDbG9uZTogdHJ1ZX07XG4gICAgdGhpcy5fY29weVByb3BlcnRpZXMoY2xvbmUsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9LFxuXG4gIF9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmU6IGZ1bmN0aW9uKHR5cGUsIG1hcCwgYWxsQ29uZmlncykge1xuICAgIGlmICghdGhpcy5hbmltYXRpb25Db25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25Db25maWcudmFsdWUgJiZcbiAgICAgICAgdHlwZW9mIHRoaXMuYW5pbWF0aW9uQ29uZmlnLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl93YXJuKHRoaXMuX2xvZ2YoXG4gICAgICAgICAgJ3BsYXlBbmltYXRpb24nLFxuICAgICAgICAgICdQbGVhc2UgcHV0IFxcJ2FuaW1hdGlvbkNvbmZpZ1xcJyBpbnNpZGUgb2YgeW91ciBjb21wb25lbnRzIFxcJ3Byb3BlcnRpZXNcXCcgb2JqZWN0IGluc3RlYWQgb2Ygb3V0c2lkZSBvZiBpdC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHlwZSBpcyBvcHRpb25hbFxuICAgIHZhciB0aGlzQ29uZmlnO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0aGlzQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWdbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNDb25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpc0NvbmZpZykpIHtcbiAgICAgIHRoaXNDb25maWcgPSBbdGhpc0NvbmZpZ107XG4gICAgfVxuXG4gICAgLy8gaXRlcmF0ZSBhbmltYXRpb25zIGFuZCByZWN1cnNlIHRvIHByb2Nlc3MgY29uZmlndXJhdGlvbnMgZnJvbSBjaGlsZCBub2Rlc1xuICAgIGlmICh0aGlzQ29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBjb25maWcsIGluZGV4ID0gMDsgY29uZmlnID0gdGhpc0NvbmZpZ1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgaWYgKGNvbmZpZy5hbmltYXRhYmxlKSB7XG4gICAgICAgICAgY29uZmlnLmFuaW1hdGFibGUuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZShcbiAgICAgICAgICAgICAgY29uZmlnLnR5cGUgfHwgdHlwZSwgbWFwLCBhbGxDb25maWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGVkQ29uZmlnID0gbWFwW2NvbmZpZy5pZF07XG4gICAgICAgICAgICBpZiAoY2FjaGVkQ29uZmlnKSB7XG4gICAgICAgICAgICAgIC8vIG1lcmdlIGNvbmZpZ3VyYXRpb25zIHdpdGggdGhlIHNhbWUgaWQsIG1ha2luZyBhIGNsb25lIGxhemlseVxuICAgICAgICAgICAgICBpZiAoIWNhY2hlZENvbmZpZy5pc0Nsb25lKSB7XG4gICAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSB0aGlzLl9jbG9uZUNvbmZpZyhjYWNoZWRDb25maWcpO1xuICAgICAgICAgICAgICAgIGNhY2hlZENvbmZpZyA9IG1hcFtjb25maWcuaWRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX2NvcHlQcm9wZXJ0aWVzKGNhY2hlZENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHB1dCBhbnkgY29uZmlncyB3aXRoIGFuIGlkIGludG8gYSBtYXBcbiAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSBjb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbENvbmZpZ3MucHVzaChjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQW4gZWxlbWVudCBpbXBsZW1lbnRpbmcgYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgY2FsbHMgdGhpc1xuICAgKiBtZXRob2QgdG8gY29uZmlndXJlIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIHR5cGUuIEVsZW1lbnRzXG4gICAqIGltcGxlbWVudGluZyBgTmVvbkFuaW1hdGFibGVCZWhhdmlvcmAgc2hvdWxkIGRlZmluZSB0aGUgcHJvcGVydHlcbiAgICogYGFuaW1hdGlvbkNvbmZpZ2AsIHdoaWNoIGlzIGVpdGhlciBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IG9yIGEgbWFwIG9mXG4gICAqIGFuaW1hdGlvbiB0eXBlIHRvIGFycmF5IG9mIGNvbmZpZ3VyYXRpb24gb2JqZWN0cy5cbiAgICovXG4gIGdldEFuaW1hdGlvbkNvbmZpZzogZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB2YXIgYWxsQ29uZmlncyA9IFtdO1xuICAgIHRoaXMuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZSh0eXBlLCBtYXAsIGFsbENvbmZpZ3MpO1xuICAgIC8vIGFwcGVuZCB0aGUgY29uZmlndXJhdGlvbnMgc2F2ZWQgaW4gdGhlIG1hcCB0byB0aGUgYXJyYXlcbiAgICBmb3IgKHZhciBrZXkgaW4gbWFwKSB7XG4gICAgICBhbGxDb25maWdzLnB1c2gobWFwW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gYWxsQ29uZmlncztcbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge05lb25BbmltYXRhYmxlQmVoYXZpb3J9IGZyb20gJy4vbmVvbi1hbmltYXRhYmxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYCBhZGRzIGEgbWV0aG9kIHRvIHJ1biBhbmltYXRpb25zLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JJbXBsID0ge1xuXG4gIF9jb25maWd1cmVBbmltYXRpb25zOiBmdW5jdGlvbihjb25maWdzKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcmVzdWx0c1RvUGxheSA9IFtdO1xuXG4gICAgaWYgKGNvbmZpZ3MubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY29uZmlnLCBpbmRleCA9IDA7IGNvbmZpZyA9IGNvbmZpZ3NbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBuZW9uQW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb25maWcubmFtZSk7XG4gICAgICAgIC8vIGlzIHRoaXMgZWxlbWVudCBhY3R1YWxseSBhIG5lb24gYW5pbWF0aW9uP1xuICAgICAgICBpZiAobmVvbkFuaW1hdGlvbi5pc05lb25BbmltYXRpb24pIHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAvLyBDbG9zdXJlIGNvbXBpbGVyIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGEgdHJ5IC8gY2F0Y2ggaGVyZS5cbiAgICAgICAgICAvLyAuY29uZmlndXJlIG5lZWRzIHRvIGJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgIGlmICghbmVvbkFuaW1hdGlvbi5jb25maWd1cmUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAgICAgICAgICogQHJldHVybiB7QW5pbWF0aW9uRWZmZWN0UmVhZE9ubHl9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5lb25BbmltYXRpb24uY29uZmlndXJlID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdCA9IG5lb25BbmltYXRpb24uY29uZmlndXJlKGNvbmZpZyk7XG4gICAgICAgICAgcmVzdWx0c1RvUGxheS5wdXNoKHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICBuZW9uQW5pbWF0aW9uOiBuZW9uQW5pbWF0aW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLmlzICsgJzonLCBjb25maWcubmFtZSwgJ25vdCBmb3VuZCEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0c1RvUGxheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNUb1BsYXlbaV0ucmVzdWx0O1xuICAgICAgbGV0IGNvbmZpZyA9IHJlc3VsdHNUb1BsYXlbaV0uY29uZmlnO1xuICAgICAgbGV0IG5lb25BbmltYXRpb24gPSByZXN1bHRzVG9QbGF5W2ldLm5lb25BbmltYXRpb247XG4gICAgICAvLyBjb25maWd1cmF0aW9uIG9yIHBsYXkgY291bGQgZmFpbCBpZiBwb2x5ZmlsbHMgYXJlbid0IGxvYWRlZFxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbiBFZmZlY3QgcmF0aGVyIHRoYW4gYW4gQW5pbWF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmNhbmNlbCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZG9jdW1lbnQudGltZWxpbmUucGxheShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGRudCBwbGF5JywgJygnLCBjb25maWcubmFtZSwgJykuJywgZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBuZW9uQW5pbWF0aW9uOiBuZW9uQW5pbWF0aW9uLFxuICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgIGFuaW1hdGlvbjogcmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSxcblxuICBfc2hvdWxkQ29tcGxldGU6IGZ1bmN0aW9uKGFjdGl2ZUVudHJpZXMpIHtcbiAgICB2YXIgZmluaXNoZWQgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLnBsYXlTdGF0ZSAhPSAnZmluaXNoZWQnKSB7XG4gICAgICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmluaXNoZWQ7XG4gIH0sXG5cbiAgX2NvbXBsZXRlOiBmdW5jdGlvbihhY3RpdmVFbnRyaWVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLm5lb25BbmltYXRpb24uY29tcGxldGUoYWN0aXZlRW50cmllc1tpXS5jb25maWcpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUGxheXMgYW4gYW5pbWF0aW9uIHdpdGggYW4gb3B0aW9uYWwgYHR5cGVgLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IHR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0PX0gY29va2llXG4gICAqL1xuICBwbGF5QW5pbWF0aW9uOiBmdW5jdGlvbih0eXBlLCBjb29raWUpIHtcbiAgICB2YXIgY29uZmlncyA9IHRoaXMuZ2V0QW5pbWF0aW9uQ29uZmlnKHR5cGUpO1xuICAgIGlmICghY29uZmlncykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9hY3RpdmUgfHwge307XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVt0eXBlXSkge1xuICAgICAgdGhpcy5fY29tcGxldGUodGhpcy5fYWN0aXZlW3R5cGVdKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9hY3RpdmVbdHlwZV07XG4gICAgfVxuXG4gICAgdmFyIGFjdGl2ZUVudHJpZXMgPSB0aGlzLl9jb25maWd1cmVBbmltYXRpb25zKGNvbmZpZ3MpO1xuXG4gICAgaWYgKGFjdGl2ZUVudHJpZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuZmlyZSgnbmVvbi1hbmltYXRpb24tZmluaXNoJywgY29va2llLCB7YnViYmxlczogZmFsc2V9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVbdHlwZV0gPSBhY3RpdmVFbnRyaWVzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5vbmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdWxkQ29tcGxldGUoYWN0aXZlRW50cmllcykpIHtcbiAgICAgICAgICB0aGlzLl9jb21wbGV0ZShhY3RpdmVFbnRyaWVzKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fYWN0aXZlW3R5cGVdO1xuICAgICAgICAgIHRoaXMuZmlyZSgnbmVvbi1hbmltYXRpb24tZmluaXNoJywgY29va2llLCB7YnViYmxlczogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VscyB0aGUgY3VycmVudGx5IHJ1bm5pbmcgYW5pbWF0aW9ucy5cbiAgICovXG4gIGNhbmNlbEFuaW1hdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgayBpbiB0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5fYWN0aXZlW2tdXG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXNbal0uYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZSA9IHt9O1xuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvciA9XG4gICAgW05lb25BbmltYXRhYmxlQmVoYXZpb3IsIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvckltcGxdO1xuIiwiLy8gVG9nZ2xlIEF0dHJpYnV0ZSBQb2x5ZmlsbCBiZWNhdXNlIGl0J3MgdG9vIG5ldyBmb3Igc29tZSBicm93c2Vyc1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUF0dHJpYnV0ZSA9IChcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBuYW1lOiBzdHJpbmcsXG4gIGZvcmNlPzogYm9vbGVhblxuKSA9PiB7XG4gIGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yY2UgPSAhIWZvcmNlO1xuICB9XG5cbiAgaWYgKGVsLmhhc0F0dHJpYnV0ZShuYW1lKSkge1xuICAgIGlmIChmb3JjZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZm9yY2UgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIFwiXCIpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlclwiO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbVwiO1xuXG5leHBvcnQgY29uc3QgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gICAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4LlxuICAgIHZhciBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24gKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgdHlwZSB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyXCI7XG5cbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIikgYXMgQ29uc3RydWN0b3I8XG4gIFBhcGVyRGlhbG9nRWxlbWVudFxuPjtcblxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cbmNvbnN0IGhhVGFiRml4QmVoYXZpb3JJbXBsID0ge1xuICBnZXQgX2ZvY3VzYWJsZU5vZGVzKCkge1xuICAgIHJldHVybiBIYUlyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XG4gIH0sXG59O1xuXG4vLyBwYXBlci1kaWFsb2cgdGhhdCB1c2VzIHRoZSBoYVRhYkZpeEJlaGF2aW9ySW1wbCBiZWh2YWlvclxuLy8gZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2cgZXh0ZW5kcyBwYXBlckRpYWxvZ0NsYXNzIHt9XG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZ1xuICBleHRlbmRzIG1peGluQmVoYXZpb3JzKFtoYVRhYkZpeEJlaGF2aW9ySW1wbF0sIHBhcGVyRGlhbG9nQ2xhc3MpXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYXBlci1kaWFsb2dcIjogSGFQYXBlckRpYWxvZztcbiAgfVxufVxuLy8gQHRzLWlnbm9yZVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItZGlhbG9nXCIsIEhhUGFwZXJEaWFsb2cpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDYXJkRWxlbWVudCB9IGZyb20gXCIuLi8uLi9jcmVhdGUtZWxlbWVudC9jcmVhdGUtY2FyZC1lbGVtZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmZpZ0Vycm9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVFcnJvckNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vY3JlYXRlLWVsZW1lbnQvY3JlYXRlLWVsZW1lbnQtYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgSHVpQ2FyZFByZXZpZXcgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHByaXZhdGUgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByaXZhdGUgX2VsZW1lbnQ/OiBMb3ZlbGFjZUNhcmQ7XG5cbiAgcHJpdmF0ZSBfY29uZmlnPzogTG92ZWxhY2VDYXJkQ29uZmlnO1xuXG4gIHByaXZhdGUgZ2V0IF9lcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudD8udGFnTmFtZSA9PT0gXCJIVUktRVJST1ItQ0FSRFwiO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJsbC1yZWJ1aWxkXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgIGlmICh0aGlzLl9jb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLl9jb25maWc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXQgaGFzcyhoYXNzOiBIb21lQXNzaXN0YW50KSB7XG4gICAgaWYgKCF0aGlzLl9oYXNzIHx8IHRoaXMuX2hhc3MubGFuZ3VhZ2UgIT09IGhhc3MubGFuZ3VhZ2UpIHtcbiAgICAgIHRoaXMuc3R5bGUuZGlyZWN0aW9uID0gY29tcHV0ZVJUTChoYXNzKSA/IFwicnRsXCIgOiBcImx0clwiO1xuICAgIH1cblxuICAgIHRoaXMuX2hhc3MgPSBoYXNzO1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50Lmhhc3MgPSBoYXNzO1xuICAgIH1cbiAgfVxuXG4gIHNldCBlcnJvcihlcnJvcjogQ29uZmlnRXJyb3IpIHtcbiAgICB0aGlzLl9jcmVhdGVDYXJkKFxuICAgICAgY3JlYXRlRXJyb3JDYXJkQ29uZmlnKGAke2Vycm9yLnR5cGV9OiAke2Vycm9yLm1lc3NhZ2V9YCwgdW5kZWZpbmVkKVxuICAgICk7XG4gIH1cblxuICBzZXQgY29uZmlnKGNvbmZpZ1ZhbHVlOiBMb3ZlbGFjZUNhcmRDb25maWcpIHtcbiAgICBjb25zdCBjdXJDb25maWcgPSB0aGlzLl9jb25maWc7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnVmFsdWU7XG5cbiAgICBpZiAoIWNvbmZpZ1ZhbHVlKSB7XG4gICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWdWYWx1ZS50eXBlKSB7XG4gICAgICB0aGlzLl9jcmVhdGVDYXJkKFxuICAgICAgICBjcmVhdGVFcnJvckNhcmRDb25maWcoXCJObyBjYXJkIHR5cGUgZm91bmRcIiwgY29uZmlnVmFsdWUpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5fY3JlYXRlQ2FyZChjb25maWdWYWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaW4gY2FzZSB0aGUgZWxlbWVudCB3YXMgYW4gZXJyb3IgZWxlbWVudCB3ZSBhbHdheXMgd2FudCB0byByZWNyZWF0ZSBpdFxuICAgIGlmICghdGhpcy5fZXJyb3IgJiYgY3VyQ29uZmlnICYmIGNvbmZpZ1ZhbHVlLnR5cGUgPT09IGN1ckNvbmZpZy50eXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldENvbmZpZyhjb25maWdWYWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlQ2FyZChjcmVhdGVFcnJvckNhcmRDb25maWcoZXJyLm1lc3NhZ2UsIGNvbmZpZ1ZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUNhcmQoY29uZmlnVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNhcmQoY29uZmlnVmFsdWU6IExvdmVsYWNlQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gY3JlYXRlQ2FyZEVsZW1lbnQoY29uZmlnVmFsdWUpO1xuXG4gICAgaWYgKHRoaXMuX2hhc3MpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQhLmhhc3MgPSB0aGlzLl9oYXNzO1xuICAgIH1cblxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudCEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYW51cCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICB0aGlzLl9lbGVtZW50ID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY2FyZC1wcmV2aWV3XCI6IEh1aUNhcmRQcmV2aWV3O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImh1aS1jYXJkLXByZXZpZXdcIiwgSHVpQ2FyZFByZXZpZXcpO1xuIiwiaW1wb3J0IGRlZXBGcmVlemUgZnJvbSBcImRlZXAtZnJlZXplXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgcXVlcnksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHR5cGUgeyBIYVBhcGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS15YW1sLWVkaXRvclwiO1xuaW1wb3J0IHR5cGUgeyBIYVlhbWxFZGl0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS15YW1sLWVkaXRvclwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2hvd1NhdmVTdWNjZXNzVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC90b2FzdC1zYXZlZC1zdWNjZXNzXCI7XG5pbXBvcnQgeyBjb21wdXRlQ2FyZHMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2dlbmVyYXRlLWxvdmVsYWNlLWNvbmZpZ1wiO1xuaW1wb3J0IHsgYWRkQ2FyZHMgfSBmcm9tIFwiLi4vY29uZmlnLXV0aWxcIjtcbmltcG9ydCBcIi4vaHVpLWNhcmQtcHJldmlld1wiO1xuaW1wb3J0IHsgc2hvd0VkaXRDYXJkRGlhbG9nIH0gZnJvbSBcIi4vc2hvdy1lZGl0LWNhcmQtZGlhbG9nXCI7XG5pbXBvcnQgeyBTdWdnZXN0Q2FyZERpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctc3VnZ2VzdC1jYXJkLWRpYWxvZ1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1kaWFsb2ctc3VnZ2VzdC1jYXJkXCIpXG5leHBvcnQgY2xhc3MgSHVpRGlhbG9nU3VnZ2VzdENhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IFN1Z2dlc3RDYXJkRGlhbG9nUGFyYW1zO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NhcmRDb25maWc/OiBMb3ZlbGFjZUNhcmRDb25maWdbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zYXZpbmcgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF95YW1sTW9kZSA9IGZhbHNlO1xuXG4gIEBxdWVyeShcImhhLXBhcGVyLWRpYWxvZ1wiKSBwcml2YXRlIF9kaWFsb2c/OiBIYVBhcGVyRGlhbG9nO1xuXG4gIEBxdWVyeShcImhhLXlhbWwtZWRpdG9yXCIpIHByaXZhdGUgX3lhbWxFZGl0b3I/OiBIYVlhbWxFZGl0b3I7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBTdWdnZXN0Q2FyZERpYWxvZ1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl95YW1sTW9kZSA9XG4gICAgICAodGhpcy5oYXNzLnBhbmVscy5sb3ZlbGFjZT8uY29uZmlnIGFzIGFueSk/Lm1vZGUgPT09IFwieWFtbFwiO1xuICAgIHRoaXMuX2NhcmRDb25maWcgPVxuICAgICAgcGFyYW1zLmNhcmRDb25maWcgfHxcbiAgICAgIGNvbXB1dGVDYXJkcyhcbiAgICAgICAgcGFyYW1zLmVudGl0aWVzLm1hcCgoZW50aXR5SWQpID0+IFtcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eUlkXSxcbiAgICAgICAgXSksXG4gICAgICAgIHt9LFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIGlmICghT2JqZWN0LmlzRnJvemVuKHRoaXMuX2NhcmRDb25maWcpKSB7XG4gICAgICB0aGlzLl9jYXJkQ29uZmlnID0gZGVlcEZyZWV6ZSh0aGlzLl9jYXJkQ29uZmlnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RpYWxvZykge1xuICAgICAgdGhpcy5fZGlhbG9nLm9wZW4oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3lhbWxFZGl0b3IpIHtcbiAgICAgIHRoaXMuX3lhbWxFZGl0b3Iuc2V0VmFsdWUodGhpcy5fY2FyZENvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZGlhbG9nIHdpdGgtYmFja2Ryb3Agb3BlbmVkPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnN1Z2dlc3RfY2FyZC5oZWFkZXJcIil9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICAke3RoaXMuX2NhcmRDb25maWdcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX2NhcmRDb25maWcubWFwKFxuICAgICAgICAgICAgICAgICAgICAoY2FyZENvbmZpZykgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8aHVpLWNhcmQtcHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uZmlnPVwiJHtjYXJkQ29uZmlnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaHVpLWNhcmQtcHJldmlldz5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7dGhpcy5feWFtbE1vZGUgJiYgdGhpcy5fY2FyZENvbmZpZ1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JcIj5cbiAgICAgICAgICAgICAgICAgIDxoYS15YW1sLWVkaXRvclxuICAgICAgICAgICAgICAgICAgICAuZGVmYXVsdFZhbHVlPSR7dGhpcy5fY2FyZENvbmZpZ31cbiAgICAgICAgICAgICAgICAgID48L2hhLXlhbWwtZWRpdG9yPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fY2xvc2V9XCI+XG4gICAgICAgICAgICAke3RoaXMuX3lhbWxNb2RlXG4gICAgICAgICAgICAgID8gdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5jbG9zZVwiKVxuICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uY2FuY2VsXCIpfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAkeyF0aGlzLl95YW1sTW9kZVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fcGlja0NhcmR9XCJcbiAgICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnN1Z2dlc3RfY2FyZC5jcmVhdGVfb3duXCJcbiAgICAgICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uID9kaXNhYmxlZD1cIiR7dGhpcy5fc2F2aW5nfVwiIEBjbGljaz1cIiR7dGhpcy5fc2F2ZX1cIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5fc2F2aW5nXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZSBhbHQ9XCJTYXZpbmdcIj48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5zdWdnZXN0X2NhcmQuYWRkXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICAvKiBvdmVycnVsZSB0aGUgaGEtc3R5bGUtZGlhbG9nIG1heC1oZWlnaHQgb24gc21hbGwgc2NyZWVucyAqL1xuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICB3aWR0aDogODQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4NDVweDtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZWxlbWVudC1wcmV2aWV3IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaHVpLWNhcmQtcHJldmlldyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICBtYXJnaW46IDRweCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogMzkwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXRvciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZyEuY2xvc2UoKTtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl95YW1sTW9kZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGlja0NhcmQoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuX3BhcmFtcz8ubG92ZWxhY2VDb25maWcgfHxcbiAgICAgICF0aGlzLl9wYXJhbXM/LnBhdGggfHxcbiAgICAgICF0aGlzLl9wYXJhbXM/LnNhdmVDb25maWdcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hvd0VkaXRDYXJkRGlhbG9nKHRoaXMsIHtcbiAgICAgIGxvdmVsYWNlQ29uZmlnOiB0aGlzLl9wYXJhbXMhLmxvdmVsYWNlQ29uZmlnLFxuICAgICAgc2F2ZUNvbmZpZzogdGhpcy5fcGFyYW1zIS5zYXZlQ29uZmlnLFxuICAgICAgcGF0aDogdGhpcy5fcGFyYW1zIS5wYXRoLFxuICAgICAgZW50aXRpZXM6IHRoaXMuX3BhcmFtcyEuZW50aXRpZXMsXG4gICAgfSk7XG4gICAgdGhpcy5fY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NhdmUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuX3BhcmFtcz8ubG92ZWxhY2VDb25maWcgfHxcbiAgICAgICF0aGlzLl9wYXJhbXM/LnBhdGggfHxcbiAgICAgICF0aGlzLl9wYXJhbXM/LnNhdmVDb25maWcgfHxcbiAgICAgICF0aGlzLl9jYXJkQ29uZmlnXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NhdmluZyA9IHRydWU7XG4gICAgYXdhaXQgdGhpcy5fcGFyYW1zIS5zYXZlQ29uZmlnKFxuICAgICAgYWRkQ2FyZHMoXG4gICAgICAgIHRoaXMuX3BhcmFtcyEubG92ZWxhY2VDb25maWcsXG4gICAgICAgIHRoaXMuX3BhcmFtcyEucGF0aCBhcyBbbnVtYmVyXSxcbiAgICAgICAgdGhpcy5fY2FyZENvbmZpZ1xuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgc2hvd1NhdmVTdWNjZXNzVG9hc3QodGhpcywgdGhpcy5oYXNzKTtcbiAgICB0aGlzLl9jbG9zZSgpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktZGlhbG9nLXN1Z2dlc3QtY2FyZFwiOiBIdWlEaWFsb2dTdWdnZXN0Q2FyZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4vdG9hc3RcIjtcblxuZXhwb3J0IGNvbnN0IHNob3dTYXZlU3VjY2Vzc1RvYXN0ID0gKGVsOiBIVE1MRWxlbWVudCwgaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgc2hvd1RvYXN0KGVsLCB7XG4gICAgbWVzc2FnZTogaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uc3VjY2Vzc2Z1bGx5X3NhdmVkXCIpLFxuICB9KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTs7Ozs7OztBQU1BO0FBRUE7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF0QkE7QUE2QkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBM0hBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBJQTtBQXVJQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzNKQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFHQTtBQUdBO0FBRUE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBekZBO0FBaUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFDQTtBQVVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBQUE7QUFBQTtBQUFBO0FBeUNBOzs7QUFHQTs7O0FBR0E7O0FBR0E7O0FBR0E7QUFDQTs7QUFKQTs7QUFIQTtBQWNBOzs7QUFJQTs7O0FBSkE7OztBQVdBO0FBQ0E7O0FBSUE7QUFFQTtBQUNBOztBQUlBO0FBQ0E7O0FBQUE7O0FBUkE7OztBQXBDQTtBQXlEQTtBQWxHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF5Q0E7QUE5SUE7QUFBQTtBQUFBO0FBQUE7QUFpSkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBckpBO0FBQUE7QUFBQTtBQUFBO0FBdUpBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBS0E7QUFDQTtBQXRLQTtBQUFBO0FBQUE7QUFBQTtBQXdLQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTVMQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-dialog-select-view"],{

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

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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







/*
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./node_modules/@polymer/paper-listbox/paper-listbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-listbox/paper-listbox.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
[Menus](https://www.google.com/design/spec/components/menus.html)

`<paper-listbox>` implements an accessible listbox control with Material Design
styling. The focused item is highlighted, and the selected item has bolded text.

    <paper-listbox>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

An initial selection can be specified with the `selected` attribute.

    <paper-listbox selected="0">
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

Make a multi-select listbox with the `multi` attribute. Items in a multi-select
listbox can be deselected, and multiple item can be selected.

    <paper-listbox multi>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-listbox-background-color`   | Menu background color |
`--primary-background-color`
`--paper-listbox-color`              | Menu foreground color |
`--primary-text-color`
`--paper-listbox`                    | Mixin applied to the listbox | `{}`

### Accessibility

`<paper-listbox>` has `role="listbox"` by default. A multi-select listbox will
also have `aria-multiselectable` set. It implements key bindings to navigate
through the listbox with the up and down arrow keys, esc to exit the listbox,
and enter to activate a listbox item. Typing the first letter of a listbox item
will also focus it.

@group Paper Elements
@element paper-listbox
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-listbox',
  behaviors: [_polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronMenuBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'listbox'
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktZGlhbG9nLXNlbGVjdC12aWV3LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRpb24tcnVubmVyLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gKiBgTmVvbkFuaW1hdGFibGVCZWhhdmlvcmAgaXMgaW1wbGVtZW50ZWQgYnkgZWxlbWVudHMgY29udGFpbmluZ1xuICogYW5pbWF0aW9ucyBmb3IgdXNlIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG4gKiBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYC5cbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRhYmxlQmVoYXZpb3IgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogQW5pbWF0aW9uIGNvbmZpZ3VyYXRpb24uIFNlZSBSRUFETUUgZm9yIG1vcmUgaW5mby5cbiAgICAgKi9cbiAgICBhbmltYXRpb25Db25maWc6IHt0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgZm9yIHNldHRpbmcgYW4gJ2VudHJ5JyBhbmltYXRpb24uIERvIG5vdCBzZXRcbiAgICAgKiBgYW5pbWF0aW9uQ29uZmlnLmVudHJ5YCBtYW51YWxseSBpZiB1c2luZyB0aGlzLiBUaGUgYW5pbWF0ZWQgbm9kZSBpcyBzZXRcbiAgICAgKiB0byBgdGhpc2AgaWYgdXNpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBlbnRyeUFuaW1hdGlvbjoge1xuICAgICAgb2JzZXJ2ZXI6ICdfZW50cnlBbmltYXRpb25DaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgZm9yIHNldHRpbmcgYW4gJ2V4aXQnIGFuaW1hdGlvbi4gRG8gbm90IHNldFxuICAgICAqIGBhbmltYXRpb25Db25maWcuZXhpdGAgbWFudWFsbHkgaWYgdXNpbmcgdGhpcy4gVGhlIGFuaW1hdGVkIG5vZGUgaXMgc2V0XG4gICAgICogdG8gYHRoaXNgIGlmIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgZXhpdEFuaW1hdGlvbjoge1xuICAgICAgb2JzZXJ2ZXI6ICdfZXhpdEFuaW1hdGlvbkNoYW5nZWQnLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgfSxcblxuICBfZW50cnlBbmltYXRpb25DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnWydlbnRyeSddID0gW3tuYW1lOiB0aGlzLmVudHJ5QW5pbWF0aW9uLCBub2RlOiB0aGlzfV07XG4gIH0sXG5cbiAgX2V4aXRBbmltYXRpb25DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnWydleGl0J10gPSBbe25hbWU6IHRoaXMuZXhpdEFuaW1hdGlvbiwgbm9kZTogdGhpc31dO1xuICB9LFxuXG4gIF9jb3B5UHJvcGVydGllczogZnVuY3Rpb24oY29uZmlnMSwgY29uZmlnMikge1xuICAgIC8vIHNoYWxsb3dseSBjb3B5IHByb3BlcnRpZXMgZnJvbSBjb25maWcyIHRvIGNvbmZpZzFcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb25maWcyKSB7XG4gICAgICBjb25maWcxW3Byb3BlcnR5XSA9IGNvbmZpZzJbcHJvcGVydHldO1xuICAgIH1cbiAgfSxcblxuICBfY2xvbmVDb25maWc6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBjbG9uZSA9IHtpc0Nsb25lOiB0cnVlfTtcbiAgICB0aGlzLl9jb3B5UHJvcGVydGllcyhjbG9uZSwgY29uZmlnKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH0sXG5cbiAgX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZTogZnVuY3Rpb24odHlwZSwgbWFwLCBhbGxDb25maWdzKSB7XG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbkNvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkNvbmZpZy52YWx1ZSAmJlxuICAgICAgICB0eXBlb2YgdGhpcy5hbmltYXRpb25Db25maWcudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX3dhcm4odGhpcy5fbG9nZihcbiAgICAgICAgICAncGxheUFuaW1hdGlvbicsXG4gICAgICAgICAgJ1BsZWFzZSBwdXQgXFwnYW5pbWF0aW9uQ29uZmlnXFwnIGluc2lkZSBvZiB5b3VyIGNvbXBvbmVudHMgXFwncHJvcGVydGllc1xcJyBvYmplY3QgaW5zdGVhZCBvZiBvdXRzaWRlIG9mIGl0LicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0eXBlIGlzIG9wdGlvbmFsXG4gICAgdmFyIHRoaXNDb25maWc7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHRoaXNDb25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZ1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc0NvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzQ29uZmlnKSkge1xuICAgICAgdGhpc0NvbmZpZyA9IFt0aGlzQ29uZmlnXTtcbiAgICB9XG5cbiAgICAvLyBpdGVyYXRlIGFuaW1hdGlvbnMgYW5kIHJlY3Vyc2UgdG8gcHJvY2VzcyBjb25maWd1cmF0aW9ucyBmcm9tIGNoaWxkIG5vZGVzXG4gICAgaWYgKHRoaXNDb25maWcpIHtcbiAgICAgIGZvciAodmFyIGNvbmZpZywgaW5kZXggPSAwOyBjb25maWcgPSB0aGlzQ29uZmlnW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBpZiAoY29uZmlnLmFuaW1hdGFibGUpIHtcbiAgICAgICAgICBjb25maWcuYW5pbWF0YWJsZS5fZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlKFxuICAgICAgICAgICAgICBjb25maWcudHlwZSB8fCB0eXBlLCBtYXAsIGFsbENvbmZpZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZWRDb25maWcgPSBtYXBbY29uZmlnLmlkXTtcbiAgICAgICAgICAgIGlmIChjYWNoZWRDb25maWcpIHtcbiAgICAgICAgICAgICAgLy8gbWVyZ2UgY29uZmlndXJhdGlvbnMgd2l0aCB0aGUgc2FtZSBpZCwgbWFraW5nIGEgY2xvbmUgbGF6aWx5XG4gICAgICAgICAgICAgIGlmICghY2FjaGVkQ29uZmlnLmlzQ2xvbmUpIHtcbiAgICAgICAgICAgICAgICBtYXBbY29uZmlnLmlkXSA9IHRoaXMuX2Nsb25lQ29uZmlnKGNhY2hlZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgY2FjaGVkQ29uZmlnID0gbWFwW2NvbmZpZy5pZF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5fY29weVByb3BlcnRpZXMoY2FjaGVkQ29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gcHV0IGFueSBjb25maWdzIHdpdGggYW4gaWQgaW50byBhIG1hcFxuICAgICAgICAgICAgICBtYXBbY29uZmlnLmlkXSA9IGNvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsQ29uZmlncy5wdXNoKGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBbiBlbGVtZW50IGltcGxlbWVudGluZyBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYCBjYWxscyB0aGlzXG4gICAqIG1ldGhvZCB0byBjb25maWd1cmUgYW4gYW5pbWF0aW9uIHdpdGggYW4gb3B0aW9uYWwgdHlwZS4gRWxlbWVudHNcbiAgICogaW1wbGVtZW50aW5nIGBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yYCBzaG91bGQgZGVmaW5lIHRoZSBwcm9wZXJ0eVxuICAgKiBgYW5pbWF0aW9uQ29uZmlnYCwgd2hpY2ggaXMgZWl0aGVyIGEgY29uZmlndXJhdGlvbiBvYmplY3Qgb3IgYSBtYXAgb2ZcbiAgICogYW5pbWF0aW9uIHR5cGUgdG8gYXJyYXkgb2YgY29uZmlndXJhdGlvbiBvYmplY3RzLlxuICAgKi9cbiAgZ2V0QW5pbWF0aW9uQ29uZmlnOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIHZhciBhbGxDb25maWdzID0gW107XG4gICAgdGhpcy5fZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlKHR5cGUsIG1hcCwgYWxsQ29uZmlncyk7XG4gICAgLy8gYXBwZW5kIHRoZSBjb25maWd1cmF0aW9ucyBzYXZlZCBpbiB0aGUgbWFwIHRvIHRoZSBhcnJheVxuICAgIGZvciAodmFyIGtleSBpbiBtYXApIHtcbiAgICAgIGFsbENvbmZpZ3MucHVzaChtYXBba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxDb25maWdzO1xuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7TmVvbkFuaW1hdGFibGVCZWhhdmlvcn0gZnJvbSAnLi9uZW9uLWFuaW1hdGFibGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgIGFkZHMgYSBtZXRob2QgdG8gcnVuIGFuaW1hdGlvbnMuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvckltcGwgPSB7XG5cbiAgX2NvbmZpZ3VyZUFuaW1hdGlvbnM6IGZ1bmN0aW9uKGNvbmZpZ3MpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciByZXN1bHRzVG9QbGF5ID0gW107XG5cbiAgICBpZiAoY29uZmlncy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBjb25maWcsIGluZGV4ID0gMDsgY29uZmlnID0gY29uZmlnc1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgbGV0IG5lb25BbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbmZpZy5uYW1lKTtcbiAgICAgICAgLy8gaXMgdGhpcyBlbGVtZW50IGFjdHVhbGx5IGEgbmVvbiBhbmltYXRpb24/XG4gICAgICAgIGlmIChuZW9uQW5pbWF0aW9uLmlzTmVvbkFuaW1hdGlvbikge1xuICAgICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICAgIC8vIENsb3N1cmUgY29tcGlsZXIgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggYSB0cnkgLyBjYXRjaCBoZXJlLlxuICAgICAgICAgIC8vIC5jb25maWd1cmUgbmVlZHMgdG8gYmUgZXhwbGljaXRseSBkZWZpbmVkXG4gICAgICAgICAgaWYgKCFuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBbmltYXRpb25FZmZlY3RSZWFkT25seX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmVvbkFuaW1hdGlvbi5jb25maWd1cmUgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0ID0gbmVvbkFuaW1hdGlvbi5jb25maWd1cmUoY29uZmlnKTtcbiAgICAgICAgICByZXN1bHRzVG9QbGF5LnB1c2goe1xuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgIG5lb25BbmltYXRpb246IG5lb25BbmltYXRpb24sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuaXMgKyAnOicsIGNvbmZpZy5uYW1lLCAnbm90IGZvdW5kIScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzVG9QbGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1RvUGxheVtpXS5yZXN1bHQ7XG4gICAgICBsZXQgY29uZmlnID0gcmVzdWx0c1RvUGxheVtpXS5jb25maWc7XG4gICAgICBsZXQgbmVvbkFuaW1hdGlvbiA9IHJlc3VsdHNUb1BsYXlbaV0ubmVvbkFuaW1hdGlvbjtcbiAgICAgIC8vIGNvbmZpZ3VyYXRpb24gb3IgcGxheSBjb3VsZCBmYWlsIGlmIHBvbHlmaWxscyBhcmVuJ3QgbG9hZGVkXG4gICAgICB0cnkge1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGFuIEVmZmVjdCByYXRoZXIgdGhhbiBhbiBBbmltYXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQuY2FuY2VsICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXN1bHQgPSBkb2N1bWVudC50aW1lbGluZS5wbGF5KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZG50IHBsYXknLCAnKCcsIGNvbmZpZy5uYW1lLCAnKS4nLCBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIG5lb25BbmltYXRpb246IG5lb25BbmltYXRpb24sXG4gICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgYW5pbWF0aW9uOiByZXN1bHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9LFxuXG4gIF9zaG91bGRDb21wbGV0ZTogZnVuY3Rpb24oYWN0aXZlRW50cmllcykge1xuICAgIHZhciBmaW5pc2hlZCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24ucGxheVN0YXRlICE9ICdmaW5pc2hlZCcpIHtcbiAgICAgICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaW5pc2hlZDtcbiAgfSxcblxuICBfY29tcGxldGU6IGZ1bmN0aW9uKGFjdGl2ZUVudHJpZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0ubmVvbkFuaW1hdGlvbi5jb21wbGV0ZShhY3RpdmVFbnRyaWVzW2ldLmNvbmZpZyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBQbGF5cyBhbiBhbmltYXRpb24gd2l0aCBhbiBvcHRpb25hbCBgdHlwZWAuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gdHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3Q9fSBjb29raWVcbiAgICovXG4gIHBsYXlBbmltYXRpb246IGZ1bmN0aW9uKHR5cGUsIGNvb2tpZSkge1xuICAgIHZhciBjb25maWdzID0gdGhpcy5nZXRBbmltYXRpb25Db25maWcodHlwZSk7XG4gICAgaWYgKCFjb25maWdzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMuX2FjdGl2ZSB8fCB7fTtcbiAgICBpZiAodGhpcy5fYWN0aXZlW3R5cGVdKSB7XG4gICAgICB0aGlzLl9jb21wbGV0ZSh0aGlzLl9hY3RpdmVbdHlwZV0pO1xuICAgICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVt0eXBlXTtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlRW50cmllcyA9IHRoaXMuX2NvbmZpZ3VyZUFuaW1hdGlvbnMoY29uZmlncyk7XG5cbiAgICBpZiAoYWN0aXZlRW50cmllcy5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5maXJlKCduZW9uLWFuaW1hdGlvbi1maW5pc2gnLCBjb29raWUsIHtidWJibGVzOiBmYWxzZX0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVt0eXBlXSA9IGFjdGl2ZUVudHJpZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLm9uZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRDb21wbGV0ZShhY3RpdmVFbnRyaWVzKSkge1xuICAgICAgICAgIHRoaXMuX2NvbXBsZXRlKGFjdGl2ZUVudHJpZXMpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hY3RpdmVbdHlwZV07XG4gICAgICAgICAgdGhpcy5maXJlKCduZW9uLWFuaW1hdGlvbi1maW5pc2gnLCBjb29raWUsIHtidWJibGVzOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIHRoZSBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb25zLlxuICAgKi9cbiAgY2FuY2VsQW5pbWF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBrIGluIHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9hY3RpdmVba11cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllc1tqXS5hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlID0ge307XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yID1cbiAgICBbTmVvbkFuaW1hdGFibGVCZWhhdmlvciwgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pY29uLWl0ZW0+YCBpcyBhIGNvbnZlbmllbmNlIGVsZW1lbnQgdG8gbWFrZSBhbiBpdGVtIHdpdGggaWNvbi4gSXQgaXMgYW5cbmludGVyYWN0aXZlIGxpc3QgaXRlbSB3aXRoIGEgZml4ZWQtd2lkdGggaWNvbiBhcmVhLCBhY2NvcmRpbmcgdG8gTWF0ZXJpYWxcbkRlc2lnbi4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGljb25zIGFyZSBvZiB2YXJ5aW5nIHdpZHRocywgYnV0IHlvdSB3YW50IHRoZSBpdGVtXG5ib2RpZXMgdG8gbGluZSB1cC4gVXNlIHRoaXMgbGlrZSBhIGA8cGFwZXItaXRlbT5gLiBUaGUgY2hpbGQgbm9kZSB3aXRoIHRoZSBzbG90XG5uYW1lIGBpdGVtLWljb25gIGlzIHBsYWNlZCBpbiB0aGUgaWNvbiBhcmVhLlxuXG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImZhdm9yaXRlXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvaXJvbi1pY29uPlxuICAgICAgRmF2b3JpdGVcbiAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2Rpdj5cbiAgICAgIEF2YXRhclxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIGFyZWEgfCBgNTZweGBcbmAtLXBhcGVyLWl0ZW0taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIGFyZWEgfCBge31gXG5gLS1wYXBlci1pY29uLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWljb24ge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcblxuICAgICAgICB3aWR0aDogdmFyKC0tcGFwZXItaXRlbS1pY29uLXdpZHRoLCA1NnB4KTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudEljb25cIiBjbGFzcz1cImNvbnRlbnQtaWNvblwiPlxuICAgICAgPHNsb3QgbmFtZT1cIml0ZW0taWNvblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaWNvbi1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge0lyb25NZW51QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWVudS1iZWhhdmlvci9pcm9uLW1lbnUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bTWVudXNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9tZW51cy5odG1sKVxuXG5gPHBhcGVyLWxpc3Rib3g+YCBpbXBsZW1lbnRzIGFuIGFjY2Vzc2libGUgbGlzdGJveCBjb250cm9sIHdpdGggTWF0ZXJpYWwgRGVzaWduXG5zdHlsaW5nLiBUaGUgZm9jdXNlZCBpdGVtIGlzIGhpZ2hsaWdodGVkLCBhbmQgdGhlIHNlbGVjdGVkIGl0ZW0gaGFzIGJvbGRlZCB0ZXh0LlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDE8L3BhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDI8L3BhcGVyLWl0ZW0+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG5BbiBpbml0aWFsIHNlbGVjdGlvbiBjYW4gYmUgc3BlY2lmaWVkIHdpdGggdGhlIGBzZWxlY3RlZGAgYXR0cmlidXRlLlxuXG4gICAgPHBhcGVyLWxpc3Rib3ggc2VsZWN0ZWQ9XCIwXCI+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDE8L3BhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDI8L3BhcGVyLWl0ZW0+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG5NYWtlIGEgbXVsdGktc2VsZWN0IGxpc3Rib3ggd2l0aCB0aGUgYG11bHRpYCBhdHRyaWJ1dGUuIEl0ZW1zIGluIGEgbXVsdGktc2VsZWN0XG5saXN0Ym94IGNhbiBiZSBkZXNlbGVjdGVkLCBhbmQgbXVsdGlwbGUgaXRlbSBjYW4gYmUgc2VsZWN0ZWQuXG5cbiAgICA8cGFwZXItbGlzdGJveCBtdWx0aT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMTwvcGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMjwvcGFwZXItaXRlbT5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1saXN0Ym94LWJhY2tncm91bmQtY29sb3JgICAgfCBNZW51IGJhY2tncm91bmQgY29sb3IgfFxuYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItbGlzdGJveC1jb2xvcmAgICAgICAgICAgICAgIHwgTWVudSBmb3JlZ3JvdW5kIGNvbG9yIHxcbmAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWxpc3Rib3hgICAgICAgICAgICAgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxpc3Rib3ggfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbmA8cGFwZXItbGlzdGJveD5gIGhhcyBgcm9sZT1cImxpc3Rib3hcImAgYnkgZGVmYXVsdC4gQSBtdWx0aS1zZWxlY3QgbGlzdGJveCB3aWxsXG5hbHNvIGhhdmUgYGFyaWEtbXVsdGlzZWxlY3RhYmxlYCBzZXQuIEl0IGltcGxlbWVudHMga2V5IGJpbmRpbmdzIHRvIG5hdmlnYXRlXG50aHJvdWdoIHRoZSBsaXN0Ym94IHdpdGggdGhlIHVwIGFuZCBkb3duIGFycm93IGtleXMsIGVzYyB0byBleGl0IHRoZSBsaXN0Ym94LFxuYW5kIGVudGVyIHRvIGFjdGl2YXRlIGEgbGlzdGJveCBpdGVtLiBUeXBpbmcgdGhlIGZpcnN0IGxldHRlciBvZiBhIGxpc3Rib3ggaXRlbVxud2lsbCBhbHNvIGZvY3VzIGl0LlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWxpc3Rib3hcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXItbGlzdGJveC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWxpc3Rib3gtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWxpc3Rib3g7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1saXN0Ym94JyxcbiAgYmVoYXZpb3JzOiBbSXJvbk1lbnVCZWhhdmlvcl0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ2xpc3Rib3gnfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7Ozs7Ozs7QUFNQTtBQUVBO0FBRUE7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBdEJBO0FBNkJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTNIQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwSUE7QUF1SUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMzSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE0QkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFyQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
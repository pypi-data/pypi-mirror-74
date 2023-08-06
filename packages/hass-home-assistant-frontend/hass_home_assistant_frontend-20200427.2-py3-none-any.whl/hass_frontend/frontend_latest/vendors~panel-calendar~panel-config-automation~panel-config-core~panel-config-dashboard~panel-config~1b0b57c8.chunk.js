(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~1b0b57c8"],{

/***/ "./node_modules/@polymer/app-layout/app-header/app-header.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header/app-header.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
/* harmony import */ var _app_scroll_effects_app_scroll_effects_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-scroll-effects/app-scroll-effects-behavior.js */ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js");
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
app-header is container element for app-toolbars at the top of the screen that
can have scroll effects. By default, an app-header moves away from the viewport
when scrolling down and if using `reveals`, the header slides back when
scrolling back up. For example:

```html
<app-header reveals>
  <app-toolbar>
    <div main-title>App name</div>
  </app-toolbar>
</app-header>
```

app-header can also condense when scrolling down. To achieve this behavior, the
header must have a larger height than the `sticky` element in the light DOM. For
example:

```html
<app-header style="height: 96px;" condenses fixed>
  <app-toolbar style="height: 64px;">
    <div main-title>App name</div>
  </app-toolbar>
</app-header>
```

In this case the header is initially `96px` tall, and it shrinks to `64px` when
scrolling down. That is what is meant by "condensing".

### Sticky element

The element that is positioned fixed to top of the header's `scrollTarget` when
a threshold is reached, similar to `position: sticky` in CSS. This element
**must** be an immediate child of app-header. By default, the `sticky` element
is the first `app-toolbar that is an immediate child of app-header.

```html
<app-header condenses>
  <app-toolbar> Sticky element </app-toolbar>
</app-header>
```

#### Customizing the sticky element

```html
<app-header condenses>
  <app-toolbar></app-toolbar>
  <app-toolbar sticky> Sticky element </app-toolbar>
</app-header>
```

### Scroll target

The app-header's `scrollTarget` property allows to customize the scrollable
element to which the header responds when the user scrolls. By default,
app-header uses the document as the scroll target, but you can customize this
property by setting the id of the element, e.g.

```html
<div id="scrollingRegion" style="overflow-y: auto;">
  <app-header scroll-target="scrollingRegion">
  </app-header>
</div>
```

In this case, the `scrollTarget` property points to the outer div element.
Alternatively, you can set this property programmatically:

```js
appHeader.scrollTarget = document.querySelector("#scrollingRegion");
```

## Backgrounds
app-header has two background layers that can be used for styling when the
header is condensed or when the scrollable element is scrolled to the top.

## Scroll effects

Scroll effects are _optional_ visual effects applied in app-header based on
scroll position. For example, The [Material Design scrolling
techniques](https://www.google.com/design/spec/patterns/scrolling-techniques.html)
recommends effects that can be installed via the `effects` property. e.g.

```html
<app-header effects="waterfall">
  <app-toolbar>App name</app-toolbar>
</app-header>
```

#### Importing the effects

To use the scroll effects, you must explicitly import them in addition to
`app-header`:

```js
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
```

#### List of effects

* **blend-background**
Fades in/out two background elements by applying CSS opacity based on scroll
position. You can use this effect to smoothly change the background color or
image of the header. For example, using the mixin
`--app-header-background-rear-layer` lets you assign a different background when
the header is condensed:

```css
app-header {
  background-color: red;
  --app-header-background-rear-layer: {
    /* The header is blue when condensed *\/
    background-color: blue;
  };
}
```

* **fade-background**
Upon scrolling past a threshold, this effect will trigger an opacity transition
to fade in/out the backgrounds. Compared to the `blend-background` effect, this
effect doesn't interpolate the opacity based on scroll position.


* **parallax-background**
A simple parallax effect that vertically translates the backgrounds based on a
fraction of the scroll position. For example:

```css
app-header {
  --app-header-background-front-layer: {
    background-image: url(...);
  };
}
```
```html
<app-header style="height: 300px;" effects="parallax-background">
  <app-toolbar>App name</app-toolbar>
</app-header>
```

The fraction determines how far the background moves relative to the scroll
position. This value can be assigned via the `scalar` config value and it is
typically a value between 0 and 1 inclusive. If `scalar=0`, the background
doesn't move away from the header.

* **resize-title**
Progressively interpolates the size of the title from the element with the
`main-title` attribute to the element with the `condensed-title` attribute as
the header condenses. For example:

```html
<app-header condenses reveals effects="resize-title">
  <app-toolbar>
      <h4 condensed-title>App name</h4>
  </app-toolbar>
  <app-toolbar>
      <h1 main-title>App name</h1>
  </app-toolbar>
</app-header>
```

* **resize-snapped-title**
Upon scrolling past a threshold, this effect fades in/out the titles using
opacity transitions. Similarly to `resize-title`, the `main-title` and
`condensed-title` elements must be placed in the light DOM.

* **waterfall**
Toggles the shadow property in app-header to create a sense of depth (as
recommended in the MD spec) between the header and the underneath content. You
can change the shadow by customizing the `--app-header-shadow` mixin. For
example:

```css
app-header {
  --app-header-shadow: {
    box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.2);
  };
}
```

```html
<app-header condenses reveals effects="waterfall">
  <app-toolbar>
      <h1 main-title>App name</h1>
  </app-toolbar>
</app-header>
```

* **material**
Installs the waterfall, resize-title, blend-background and parallax-background
effects.

### Content attributes

Attribute | Description         | Default
----------|---------------------|----------------------------------------
`sticky` | Element that remains at the top when the header condenses. | The first app-toolbar in the light DOM.


## Styling

Mixin | Description | Default
------|-------------|----------
`--app-header-background-front-layer` | Applies to the front layer of the background. | {}
`--app-header-background-rear-layer` | Applies to the rear layer of the background. | {}
`--app-header-shadow` | Applies to the shadow. | {}

@group App Elements
@element app-header
@demo app-header/demo/blend-background-1.html Blend Background Image
@demo app-header/demo/blend-background-2.html Blend 2 Background Images
@demo app-header/demo/blend-background-3.html Blend Background Colors
@demo app-header/demo/contacts.html Contacts Demo
@demo app-header/demo/give.html Resize Snapped Title Demo
@demo app-header/demo/music.html Reveals Demo
@demo app-header/demo/no-effects.html Condenses and Reveals Demo
@demo app-header/demo/notes.html Fixed with Dynamic Shadow Demo
@demo app-header/demo/custom-sticky-element-1.html Custom Sticky Element Demo 1
@demo app-header/demo/custom-sticky-element-2.html Custom Sticky Element Demo 2

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,
  is: 'app-header',
  behaviors: [_app_scroll_effects_app_scroll_effects_behavior_js__WEBPACK_IMPORTED_MODULE_6__["AppScrollEffectsBehavior"], _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the header will automatically collapse when scrolling down.
     * That is, the `sticky` element remains visible when the header is fully
     *condensed whereas the rest of the elements will collapse below `sticky`
     *element.
     *
     * By default, the `sticky` element is the first toolbar in the light DOM:
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar>This toolbar remains on top</app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     * </app-header>
     * ```
     *
     * Additionally, you can specify which toolbar or element remains visible in
     *condensed mode by adding the `sticky` attribute to that element. For
     *example: if we want the last toolbar to remain visible, we can add the
     *`sticky` attribute to it.
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar sticky>This toolbar remains on top</app-toolbar>
     * </app-header>
     * ```
     *
     * Note the `sticky` element must be a direct child of `app-header`.
     */
    condenses: {
      type: Boolean,
      value: false
    },

    /**
     * Mantains the header fixed at the top so it never moves away.
     */
    fixed: {
      type: Boolean,
      value: false
    },

    /**
     * Slides back the header when scrolling back up.
     */
    reveals: {
      type: Boolean,
      value: false
    },

    /**
     * Displays a shadow below the header.
     */
    shadow: {
      type: Boolean,
      reflectToAttribute: true,
      value: false
    }
  },
  observers: ['_configChanged(isAttached, condenses, fixed)'],

  /**
   * A cached offsetHeight of the current element.
   *
   * @type {number}
   */
  _height: 0,

  /**
   * The distance in pixels the header will be translated to when scrolling.
   *
   * @type {number}
   */
  _dHeight: 0,

  /**
   * The offsetTop of `_stickyEl`
   *
   * @type {number}
   */
  _stickyElTop: 0,

  /**
   * A reference to the element that remains visible when the header condenses.
   *
   * @type {HTMLElement}
   */
  _stickyElRef: null,

  /**
   * The header's top value used for the `transformY`
   *
   * @type {number}
   */
  _top: 0,

  /**
   * The current scroll progress.
   *
   * @type {number}
   */
  _progress: 0,
  _wasScrollingDown: false,
  _initScrollTop: 0,
  _initTimestamp: 0,
  _lastTimestamp: 0,
  _lastScrollTop: 0,

  /**
   * The distance the header is allowed to move away.
   *
   * @type {number}
   */
  get _maxHeaderTop() {
    return this.fixed ? this._dHeight : this._height + 5;
  },

  /**
   * Returns a reference to the sticky element.
   *
   * @return {HTMLElement}?
   */
  get _stickyEl() {
    if (this._stickyElRef) {
      return this._stickyElRef;
    }

    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.slot).getDistributedNodes(); // Get the element with the sticky attribute on it or the first element in
    // the light DOM.

    for (var i = 0, node; node =
    /** @type {!HTMLElement} */
    nodes[i]; i++) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.hasAttribute('sticky')) {
          this._stickyElRef = node;
          break;
        } else if (!this._stickyElRef) {
          this._stickyElRef = node;
        }
      }
    }

    return this._stickyElRef;
  },

  _configChanged: function () {
    this.resetLayout();

    this._notifyLayoutChanged();
  },
  _updateLayoutStates: function () {
    if (this.offsetWidth === 0 && this.offsetHeight === 0) {
      return;
    }

    var scrollTop = this._clampedScrollTop;
    var firstSetup = this._height === 0 || scrollTop === 0;
    var currentDisabled = this.disabled;
    this._height = this.offsetHeight;
    this._stickyElRef = null;
    this.disabled = true; // prepare for measurement

    if (!firstSetup) {
      this._updateScrollState(0, true);
    }

    if (this._mayMove()) {
      this._dHeight = this._stickyEl ? this._height - this._stickyEl.offsetHeight : 0;
    } else {
      this._dHeight = 0;
    }

    this._stickyElTop = this._stickyEl ? this._stickyEl.offsetTop : 0;

    this._setUpEffect();

    if (firstSetup) {
      this._updateScrollState(scrollTop, true);
    } else {
      this._updateScrollState(this._lastScrollTop, true);

      this._layoutIfDirty();
    } // restore no transition


    this.disabled = currentDisabled;
  },

  /**
   * Updates the scroll state.
   *
   * @param {number} scrollTop
   * @param {boolean=} forceUpdate (default: false)
   */
  _updateScrollState: function (scrollTop, forceUpdate) {
    if (this._height === 0) {
      return;
    }

    var progress = 0;
    var top = 0;
    var lastTop = this._top;
    var lastScrollTop = this._lastScrollTop;
    var maxHeaderTop = this._maxHeaderTop;
    var dScrollTop = scrollTop - this._lastScrollTop;
    var absDScrollTop = Math.abs(dScrollTop);
    var isScrollingDown = scrollTop > this._lastScrollTop;
    var now = performance.now();

    if (this._mayMove()) {
      top = this._clamp(this.reveals ? lastTop + dScrollTop : scrollTop, 0, maxHeaderTop);
    }

    if (scrollTop >= this._dHeight) {
      top = this.condenses && !this.fixed ? Math.max(this._dHeight, top) : top;
      this.style.transitionDuration = '0ms';
    }

    if (this.reveals && !this.disabled && absDScrollTop < 100) {
      // set the initial scroll position
      if (now - this._initTimestamp > 300 || this._wasScrollingDown !== isScrollingDown) {
        this._initScrollTop = scrollTop;
        this._initTimestamp = now;
      }

      if (scrollTop >= maxHeaderTop) {
        // check if the header is allowed to snap
        if (Math.abs(this._initScrollTop - scrollTop) > 30 || absDScrollTop > 10) {
          if (isScrollingDown && scrollTop >= maxHeaderTop) {
            top = maxHeaderTop;
          } else if (!isScrollingDown && scrollTop >= this._dHeight) {
            top = this.condenses && !this.fixed ? this._dHeight : 0;
          }

          var scrollVelocity = dScrollTop / (now - this._lastTimestamp);
          this.style.transitionDuration = this._clamp((top - lastTop) / scrollVelocity, 0, 300) + 'ms';
        } else {
          top = this._top;
        }
      }
    }

    if (this._dHeight === 0) {
      progress = scrollTop > 0 ? 1 : 0;
    } else {
      progress = top / this._dHeight;
    }

    if (!forceUpdate) {
      this._lastScrollTop = scrollTop;
      this._top = top;
      this._wasScrollingDown = isScrollingDown;
      this._lastTimestamp = now;
    }

    if (forceUpdate || progress !== this._progress || lastTop !== top || scrollTop === 0) {
      this._progress = progress;

      this._runEffects(progress, top);

      this._transformHeader(top);
    }
  },

  /**
   * Returns true if the current header is allowed to move as the user scrolls.
   *
   * @return {boolean}
   */
  _mayMove: function () {
    return this.condenses || !this.fixed;
  },

  /**
   * Returns true if the current header will condense based on the size of the
   * header and the `consenses` property.
   *
   * @return {boolean}
   */
  willCondense: function () {
    return this._dHeight > 0 && this.condenses;
  },

  /**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport.
   *
   * @method isOnScreen
   * @return {boolean}
   */
  isOnScreen: function () {
    return this._height !== 0 && this._top < this._height;
  },

  /**
   * Returns true if there's content below the current element.
   *
   * @method isContentBelow
   * @return {boolean}
   */
  isContentBelow: function () {
    return this._top === 0 ? this._clampedScrollTop > 0 : this._clampedScrollTop - this._maxHeaderTop >= 0;
  },

  /**
   * Transforms the header.
   *
   * @param {number} y
   */
  _transformHeader: function (y) {
    this.translate3d(0, -y + 'px', 0);

    if (this._stickyEl) {
      this.translate3d(0, this.condenses && y >= this._stickyElTop ? Math.min(y, this._dHeight) - this._stickyElTop + 'px' : 0, 0, this._stickyEl);
    }
  },
  _clamp: function (v, min, max) {
    return Math.min(max, Math.max(min, v));
  },
  _ensureBgContainers: function () {
    if (!this._bgContainer) {
      this._bgContainer = document.createElement('div');
      this._bgContainer.id = 'background';
      this._bgRear = document.createElement('div');
      this._bgRear.id = 'backgroundRearLayer';

      this._bgContainer.appendChild(this._bgRear);

      this._bgFront = document.createElement('div');
      this._bgFront.id = 'backgroundFrontLayer';

      this._bgContainer.appendChild(this._bgFront);

      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).insertBefore(this._bgContainer, this.$.contentContainer);
    }
  },
  _getDOMRef: function (id) {
    switch (id) {
      case 'backgroundFrontLayer':
        this._ensureBgContainers();

        return this._bgFront;

      case 'backgroundRearLayer':
        this._ensureBgContainers();

        return this._bgRear;

      case 'background':
        this._ensureBgContainers();

        return this._bgContainer;

      case 'mainTitle':
        return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).querySelector('[main-title]');

      case 'condensedTitle':
        return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).querySelector('[condensed-title]');
    }

    return null;
  },

  /**
   * Returns an object containing the progress value of the scroll effects
   * and the top position of the header.
   *
   * @method getScrollState
   * @return {Object}
   */
  getScrollState: function () {
    return {
      progress: this._progress,
      top: this._top
    };
  }
});

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js ***!
  \********************************************************************************************/
/*! exports provided: AppScrollEffectsBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppScrollEffectsBehavior", function() { return AppScrollEffectsBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js */ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helpers.js */ "./node_modules/@polymer/app-layout/helpers/helpers.js");
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



/**
 * `Polymer.AppScrollEffectsBehavior` provides an interface that allows an
 * element to use scrolls effects.
 *
 * ### Importing the app-layout effects
 *
 * app-layout provides a set of scroll effects that can be used by explicitly
 * importing `app-scroll-effects.js`:
 *
 * ```js
 * import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
 * ```
 *
 * The scroll effects can also be used by individually importing
 * `@polymer/app-layout/app-scroll-effects/effects/[effectName].js`. For
 * example:
 *
 * ```js
 * import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
 * ```
 *
 * ### Consuming effects
 *
 * Effects can be consumed via the `effects` property. For example:
 *
 * ```html
 * <app-header effects="waterfall"></app-header>
 * ```
 *
 * ### Creating scroll effects
 *
 * You may want to create a custom scroll effect if you need to modify the CSS
 * of an element based on the scroll position.
 *
 * A scroll effect definition is an object with `setUp()`, `tearDown()` and
 * `run()` functions.
 *
 * To register the effect, you can use
 * `Polymer.AppLayout.registerEffect(effectName, effectDef)` For example, let's
 * define an effect that resizes the header's logo:
 *
 * ```js
 * Polymer.AppLayout.registerEffect('resizable-logo', {
 *   setUp: function(config) {
 *     // the effect's config is passed to the setUp.
 *     this._fxResizeLogo = { logo: Polymer.dom(this).querySelector('[logo]') };
 *   },
 *
 *   run: function(progress) {
 *      // the progress of the effect
 *      this.transform('scale3d(' + progress + ', '+ progress +', 1)',
 * this._fxResizeLogo.logo);
 *   },
 *
 *   tearDown: function() {
 *      // clean up and reset of states
 *      delete this._fxResizeLogo;
 *   }
 * });
 * ```
 * Now, you can consume the effect:
 *
 * ```html
 * <app-header id="appHeader" effects="resizable-logo">
 *   <img logo src="logo.svg">
 * </app-header>
 * ```
 *
 * ### Imperative API
 *
 * ```js
 * var logoEffect = appHeader.createEffect('resizable-logo', effectConfig);
 * // run the effect: logoEffect.run(progress);
 * // tear down the effect: logoEffect.tearDown();
 * ```
 *
 * ### Configuring effects
 *
 * For effects installed via the `effects` property, their configuration can be
 * set via the `effectsConfig` property. For example:
 *
 * ```html
 * <app-header effects="waterfall"
 *   effects-config='{"waterfall": {"startsAt": 0, "endsAt": 0.5}}'>
 * </app-header>
 * ```
 *
 * All effects have a `startsAt` and `endsAt` config property. They specify at
 * what point the effect should start and end. This value goes from 0 to 1
 * inclusive.
 *
 * @polymerBehavior
 */

const AppScrollEffectsBehavior = [_polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronScrollTargetBehavior"], {
  properties: {
    /**
     * A space-separated list of the effects names that will be triggered when
     * the user scrolls. e.g. `waterfall parallax-background` installs the
     * `waterfall` and `parallax-background`.
     */
    effects: {
      type: String
    },

    /**
     * An object that configurates the effects installed via the `effects`
     * property. e.g.
     * ```js
     *  element.effectsConfig = {
     *   "blend-background": {
     *     "startsAt": 0.5
     *   }
     * };
     * ```
     * Every effect has at least two config properties: `startsAt` and
     * `endsAt`. These properties indicate when the event should start and end
     * respectively and relative to the overall element progress. So for
     * example, if `blend-background` starts at `0.5`, the effect will only
     * start once the current element reaches 0.5 of its progress. In this
     * context, the progress is a value in the range of `[0, 1]` that
     * indicates where this element is on the screen relative to the viewport.
     */
    effectsConfig: {
      type: Object,
      value: function () {
        return {};
      }
    },

    /**
     * Disables CSS transitions and scroll effects on the element.
     */
    disabled: {
      type: Boolean,
      reflectToAttribute: true,
      value: false
    },

    /**
     * Allows to set a `scrollTop` threshold. When greater than 0,
     * `thresholdTriggered` is true only when the scroll target's `scrollTop`
     * has reached this value.
     *
     * For example, if `threshold = 100`, `thresholdTriggered` is true when
     * the `scrollTop` is at least `100`.
     */
    threshold: {
      type: Number,
      value: 0
    },

    /**
     * True if the `scrollTop` threshold (set in `scrollTopThreshold`) has
     * been reached.
     */
    thresholdTriggered: {
      type: Boolean,
      notify: true,
      readOnly: true,
      reflectToAttribute: true
    }
  },
  observers: ['_effectsChanged(effects, effectsConfig, isAttached)'],

  /**
   * Updates the scroll state. This method should be overridden
   * by the consumer of this behavior.
   *
   * @method _updateScrollState
   * @param {number} scrollTop
   */
  _updateScrollState: function (scrollTop) {},

  /**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport. This method should be
   * overridden by the consumer of this behavior.
   *
   * @method isOnScreen
   * @return {boolean}
   */
  isOnScreen: function () {
    return false;
  },

  /**
   * Returns true if there's content below the current element. This method
   * should be overridden by the consumer of this behavior.
   *
   * @method isContentBelow
   * @return {boolean}
   */
  isContentBelow: function () {
    return false;
  },

  /**
   * List of effects handlers that will take place during scroll.
   *
   * @type {Array<Function>}
   */
  _effectsRunFn: null,

  /**
   * List of the effects definitions installed via the `effects` property.
   *
   * @type {Array<Object>}
   */
  _effects: null,

  /**
   * The clamped value of `_scrollTop`.
   * @type number
   */
  get _clampedScrollTop() {
    return Math.max(0, this._scrollTop);
  },

  attached: function () {
    this._scrollStateChanged();
  },
  detached: function () {
    this._tearDownEffects();
  },

  /**
   * Creates an effect object from an effect's name that can be used to run
   * effects programmatically.
   *
   * @method createEffect
   * @param {string} effectName The effect's name registered via `Polymer.AppLayout.registerEffect`.
   * @param {Object=} effectConfig The effect config object. (Optional)
   * @return {Object} An effect object with the following functions:
   *
   *  * `effect.setUp()`, Sets up the requirements for the effect.
   *       This function is called automatically before the `effect` function
   * returns.
   *  * `effect.run(progress, y)`, Runs the effect given a `progress`.
   *  * `effect.tearDown()`, Cleans up any DOM nodes or element references
   * used by the effect.
   *
   * Example:
   * ```js
   * var parallax = element.createEffect('parallax-background');
   * // runs the effect
   * parallax.run(0.5, 0);
   * ```
   */
  createEffect: function (effectName, effectConfig) {
    var effectDef = _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__["_scrollEffects"][effectName];

    if (!effectDef) {
      throw new ReferenceError(this._getUndefinedMsg(effectName));
    }

    var prop = this._boundEffect(effectDef, effectConfig || {});

    prop.setUp();
    return prop;
  },

  /**
   * Called when `effects` or `effectsConfig` changes.
   */
  _effectsChanged: function (effects, effectsConfig, isAttached) {
    this._tearDownEffects();

    if (!effects || !isAttached) {
      return;
    }

    effects.split(' ').forEach(function (effectName) {
      var effectDef;

      if (effectName !== '') {
        if (effectDef = _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__["_scrollEffects"][effectName]) {
          this._effects.push(this._boundEffect(effectDef, effectsConfig[effectName]));
        } else {
          console.warn(this._getUndefinedMsg(effectName));
        }
      }
    }, this);

    this._setUpEffect();
  },

  /**
   * Forces layout
   */
  _layoutIfDirty: function () {
    return this.offsetWidth;
  },

  /**
   * Returns an effect object bound to the current context.
   *
   * @param {Object} effectDef
   * @param {Object=} effectsConfig The effect config object if the effect accepts config values. (Optional)
   */
  _boundEffect: function (effectDef, effectsConfig) {
    effectsConfig = effectsConfig || {};
    var startsAt = parseFloat(effectsConfig.startsAt || 0);
    var endsAt = parseFloat(effectsConfig.endsAt || 1);
    var deltaS = endsAt - startsAt;

    var noop = function () {}; // fast path if possible


    var runFn = startsAt === 0 && endsAt === 1 ? effectDef.run : function (progress, y) {
      effectDef.run.call(this, Math.max(0, (progress - startsAt) / deltaS), y);
    };
    return {
      setUp: effectDef.setUp ? effectDef.setUp.bind(this, effectsConfig) : noop,
      run: effectDef.run ? runFn.bind(this) : noop,
      tearDown: effectDef.tearDown ? effectDef.tearDown.bind(this) : noop
    };
  },

  /**
   * Sets up the effects.
   */
  _setUpEffect: function () {
    if (this.isAttached && this._effects) {
      this._effectsRunFn = [];

      this._effects.forEach(function (effectDef) {
        // install the effect only if no error was reported
        if (effectDef.setUp() !== false) {
          this._effectsRunFn.push(effectDef.run);
        }
      }, this);
    }
  },

  /**
   * Tears down the effects.
   */
  _tearDownEffects: function () {
    if (this._effects) {
      this._effects.forEach(function (effectDef) {
        effectDef.tearDown();
      });
    }

    this._effectsRunFn = [];
    this._effects = [];
  },

  /**
   * Runs the effects.
   *
   * @param {number} p The progress
   * @param {number} y The top position of the current element relative to the viewport.
   */
  _runEffects: function (p, y) {
    if (this._effectsRunFn) {
      this._effectsRunFn.forEach(function (run) {
        run(p, y);
      });
    }
  },

  /**
   * Overrides the `_scrollHandler`.
   */
  _scrollHandler: function () {
    this._scrollStateChanged();
  },
  _scrollStateChanged: function () {
    if (!this.disabled) {
      var scrollTop = this._clampedScrollTop;

      this._updateScrollState(scrollTop);

      if (this.threshold > 0) {
        this._setThresholdTriggered(scrollTop >= this.threshold);
      }
    }
  },

  /**
   * Override this method to return a reference to a node in the local DOM.
   * The node is consumed by a scroll effect.
   *
   * @param {string} id The id for the node.
   */
  _getDOMRef: function (id) {
    console.warn('_getDOMRef', '`' + id + '` is undefined');
  },
  _getUndefinedMsg: function (effectName) {
    return 'Scroll effect `' + effectName + '` is undefined. ' + 'Did you forget to import app-layout/app-scroll-effects/effects/' + effectName + '.html ?';
  }
}];

/***/ }),

/***/ "./node_modules/@polymer/app-layout/helpers/helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/helpers/helpers.js ***!
  \*************************************************************/
/*! exports provided: _scrollEffects, _scrollTimer, scrollTimingFunction, registerEffect, queryAllRoot, scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_scrollEffects", function() { return _scrollEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_scrollTimer", function() { return _scrollTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTimingFunction", function() { return scrollTimingFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEffect", function() { return registerEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAllRoot", function() { return queryAllRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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

const _scrollEffects = {};
let _scrollTimer = null;
const scrollTimingFunction = function easeOutQuad(t, b, c, d) {
  t /= d;
  return -c * t * (t - 2) + b;
};
/**
 * Registers a scroll effect to be used in elements that implement the
 * `Polymer.AppScrollEffectsBehavior` behavior.
 *
 * @param {string} effectName The effect name.
 * @param {Object} effectDef The effect definition.
 */

const registerEffect = function registerEffect(effectName, effectDef) {
  if (_scrollEffects[effectName] != null) {
    throw new Error('effect `' + effectName + '` is already registered.');
  }

  _scrollEffects[effectName] = effectDef;
};
const queryAllRoot = function (selector, root) {
  var queue = [root];
  var matches = [];

  while (queue.length > 0) {
    var node = queue.shift();
    matches.push.apply(matches, node.querySelectorAll(selector));

    for (var i = 0; node.children[i]; i++) {
      if (node.children[i].shadowRoot) {
        queue.push(node.children[i].shadowRoot);
      }
    }
  }

  return matches;
};
/**
 * Scrolls to a particular set of coordinates in a scroll target.
 * If the scroll target is not defined, then it would use the main document as
 * the target.
 *
 * To scroll in a smooth fashion, you can set the option `behavior: 'smooth'`.
 * e.g.
 *
 * ```js
 * Polymer.AppLayout.scroll({top: 0, behavior: 'smooth'});
 * ```
 *
 * To scroll in a silent mode, without notifying scroll changes to any
 * app-layout elements, you can set the option `behavior: 'silent'`. This is
 * particularly useful we you are using `app-header` and you desire to scroll to
 * the top of a scrolling region without running scroll effects. e.g.
 *
 * ```js
 * Polymer.AppLayout.scroll({top: 0, behavior: 'silent'});
 * ```
 *
 * @param {Object} options {top: Number, left: Number, behavior: String(smooth | silent)}
 */

const scroll = function scroll(options) {
  options = options || {};
  var docEl = document.documentElement;
  var target = options.target || docEl;
  var hasNativeScrollBehavior = 'scrollBehavior' in target.style && target.scroll;
  var scrollClassName = 'app-layout-silent-scroll';
  var scrollTop = options.top || 0;
  var scrollLeft = options.left || 0;
  var scrollTo = target === docEl ? window.scrollTo : function scrollTo(scrollLeft, scrollTop) {
    target.scrollLeft = scrollLeft;
    target.scrollTop = scrollTop;
  };

  if (options.behavior === 'smooth') {
    if (hasNativeScrollBehavior) {
      target.scroll(options);
    } else {
      var timingFn = scrollTimingFunction;
      var startTime = Date.now();
      var currentScrollTop = target === docEl ? window.pageYOffset : target.scrollTop;
      var currentScrollLeft = target === docEl ? window.pageXOffset : target.scrollLeft;
      var deltaScrollTop = scrollTop - currentScrollTop;
      var deltaScrollLeft = scrollLeft - currentScrollLeft;
      var duration = 300;

      var updateFrame = function updateFrame() {
        var now = Date.now();
        var elapsedTime = now - startTime;

        if (elapsedTime < duration) {
          scrollTo(timingFn(elapsedTime, currentScrollLeft, deltaScrollLeft, duration), timingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration));
          requestAnimationFrame(updateFrame);
        } else {
          scrollTo(scrollLeft, scrollTop);
        }
      }.bind(this);

      updateFrame();
    }
  } else if (options.behavior === 'silent') {
    var headers = queryAllRoot('app-header', document.body);
    headers.forEach(function (header) {
      header.setAttribute('silent-scroll', '');
    }); // Browsers keep the scroll momentum even if the bottom of the scrolling
    // content was reached. This means that calling scroll({top: 0, behavior:
    // 'silent'}) when the momentum is still going will result in more scroll
    // events and thus scroll effects. This seems to only apply when using
    // document scrolling. Therefore, when should we remove the class from the
    // document element?

    if (_scrollTimer) {
      window.cancelAnimationFrame(_scrollTimer);
    }

    _scrollTimer = window.requestAnimationFrame(function () {
      headers.forEach(function (header) {
        header.removeAttribute('silent-scroll');
      });
      _scrollTimer = null;
    });
    scrollTo(scrollLeft, scrollTop);
  } else {
    scrollTo(scrollLeft, scrollTop);
  }
};

/***/ }),

/***/ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js ***!
  \******************************************************************************************/
/*! exports provided: IronScrollTargetBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronScrollTargetBehavior", function() { return IronScrollTargetBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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


/**
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */

const IronScrollTargetBehavior = {
  properties: {
    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function () {
        return this._defaultScrollTarget;
      }
    }
  },
  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,
  _scrollTargetChanged: function (scrollTarget, isAttached) {
    var eventTarget;

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);

      this._oldScrollTarget = null;
    }

    if (!isAttached) {
      return;
    } // Support element id references


    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;
    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;
      this.scrollTarget = domHost && domHost.$ ? domHost.$[scrollTarget] : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this.ownerDocument).querySelector('#' + scrollTarget);
    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;

      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop;
    }

    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft;
    }

    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function (leftOrOptions, top) {
    var left;

    if (typeof leftOrOptions === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;

    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth;
    }

    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight;
    }

    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function () {
    return this.scrollTarget instanceof HTMLElement;
  },
  _toggleScrollListener: function (yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;

    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function (yes) {
    this._shouldHaveListener = yes;

    this._toggleScrollListener(yes, this.scrollTarget);
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jYWxlbmRhcn5wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctY29yZX5wYW5lbC1jb25maWctZGFzaGJvYXJkfnBhbmVsLWNvbmZpZ34xYjBiNTdjOC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvYXBwLWxheW91dC9hcHAtc2Nyb2xsLWVmZmVjdHMvYXBwLXNjcm9sbC1lZmZlY3RzLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2hlbHBlcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yL2lyb24tc2Nyb2xsLXRhcmdldC1iZWhhdmlvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtBcHBMYXlvdXRCZWhhdmlvcn0gZnJvbSAnLi4vYXBwLWxheW91dC1iZWhhdmlvci9hcHAtbGF5b3V0LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7QXBwU2Nyb2xsRWZmZWN0c0JlaGF2aW9yfSBmcm9tICcuLi9hcHAtc2Nyb2xsLWVmZmVjdHMvYXBwLXNjcm9sbC1lZmZlY3RzLWJlaGF2aW9yLmpzJztcblxuLyoqXG5hcHAtaGVhZGVyIGlzIGNvbnRhaW5lciBlbGVtZW50IGZvciBhcHAtdG9vbGJhcnMgYXQgdGhlIHRvcCBvZiB0aGUgc2NyZWVuIHRoYXRcbmNhbiBoYXZlIHNjcm9sbCBlZmZlY3RzLiBCeSBkZWZhdWx0LCBhbiBhcHAtaGVhZGVyIG1vdmVzIGF3YXkgZnJvbSB0aGUgdmlld3BvcnRcbndoZW4gc2Nyb2xsaW5nIGRvd24gYW5kIGlmIHVzaW5nIGByZXZlYWxzYCwgdGhlIGhlYWRlciBzbGlkZXMgYmFjayB3aGVuXG5zY3JvbGxpbmcgYmFjayB1cC4gRm9yIGV4YW1wbGU6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyIHJldmVhbHM+XG4gIDxhcHAtdG9vbGJhcj5cbiAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgPC9hcHAtdG9vbGJhcj5cbjwvYXBwLWhlYWRlcj5cbmBgYFxuXG5hcHAtaGVhZGVyIGNhbiBhbHNvIGNvbmRlbnNlIHdoZW4gc2Nyb2xsaW5nIGRvd24uIFRvIGFjaGlldmUgdGhpcyBiZWhhdmlvciwgdGhlXG5oZWFkZXIgbXVzdCBoYXZlIGEgbGFyZ2VyIGhlaWdodCB0aGFuIHRoZSBgc3RpY2t5YCBlbGVtZW50IGluIHRoZSBsaWdodCBET00uIEZvclxuZXhhbXBsZTpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXIgc3R5bGU9XCJoZWlnaHQ6IDk2cHg7XCIgY29uZGVuc2VzIGZpeGVkPlxuICA8YXBwLXRvb2xiYXIgc3R5bGU9XCJoZWlnaHQ6IDY0cHg7XCI+XG4gICAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gIDwvYXBwLXRvb2xiYXI+XG48L2FwcC1oZWFkZXI+XG5gYGBcblxuSW4gdGhpcyBjYXNlIHRoZSBoZWFkZXIgaXMgaW5pdGlhbGx5IGA5NnB4YCB0YWxsLCBhbmQgaXQgc2hyaW5rcyB0byBgNjRweGAgd2hlblxuc2Nyb2xsaW5nIGRvd24uIFRoYXQgaXMgd2hhdCBpcyBtZWFudCBieSBcImNvbmRlbnNpbmdcIi5cblxuIyMjIFN0aWNreSBlbGVtZW50XG5cblRoZSBlbGVtZW50IHRoYXQgaXMgcG9zaXRpb25lZCBmaXhlZCB0byB0b3Agb2YgdGhlIGhlYWRlcidzIGBzY3JvbGxUYXJnZXRgIHdoZW5cbmEgdGhyZXNob2xkIGlzIHJlYWNoZWQsIHNpbWlsYXIgdG8gYHBvc2l0aW9uOiBzdGlja3lgIGluIENTUy4gVGhpcyBlbGVtZW50XG4qKm11c3QqKiBiZSBhbiBpbW1lZGlhdGUgY2hpbGQgb2YgYXBwLWhlYWRlci4gQnkgZGVmYXVsdCwgdGhlIGBzdGlja3lgIGVsZW1lbnRcbmlzIHRoZSBmaXJzdCBgYXBwLXRvb2xiYXIgdGhhdCBpcyBhbiBpbW1lZGlhdGUgY2hpbGQgb2YgYXBwLWhlYWRlci5cblxuYGBgaHRtbFxuPGFwcC1oZWFkZXIgY29uZGVuc2VzPlxuICA8YXBwLXRvb2xiYXI+IFN0aWNreSBlbGVtZW50IDwvYXBwLXRvb2xiYXI+XG48L2FwcC1oZWFkZXI+XG5gYGBcblxuIyMjIyBDdXN0b21pemluZyB0aGUgc3RpY2t5IGVsZW1lbnRcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXIgY29uZGVuc2VzPlxuICA8YXBwLXRvb2xiYXI+PC9hcHAtdG9vbGJhcj5cbiAgPGFwcC10b29sYmFyIHN0aWNreT4gU3RpY2t5IGVsZW1lbnQgPC9hcHAtdG9vbGJhcj5cbjwvYXBwLWhlYWRlcj5cbmBgYFxuXG4jIyMgU2Nyb2xsIHRhcmdldFxuXG5UaGUgYXBwLWhlYWRlcidzIGBzY3JvbGxUYXJnZXRgIHByb3BlcnR5IGFsbG93cyB0byBjdXN0b21pemUgdGhlIHNjcm9sbGFibGVcbmVsZW1lbnQgdG8gd2hpY2ggdGhlIGhlYWRlciByZXNwb25kcyB3aGVuIHRoZSB1c2VyIHNjcm9sbHMuIEJ5IGRlZmF1bHQsXG5hcHAtaGVhZGVyIHVzZXMgdGhlIGRvY3VtZW50IGFzIHRoZSBzY3JvbGwgdGFyZ2V0LCBidXQgeW91IGNhbiBjdXN0b21pemUgdGhpc1xucHJvcGVydHkgYnkgc2V0dGluZyB0aGUgaWQgb2YgdGhlIGVsZW1lbnQsIGUuZy5cblxuYGBgaHRtbFxuPGRpdiBpZD1cInNjcm9sbGluZ1JlZ2lvblwiIHN0eWxlPVwib3ZlcmZsb3cteTogYXV0bztcIj5cbiAgPGFwcC1oZWFkZXIgc2Nyb2xsLXRhcmdldD1cInNjcm9sbGluZ1JlZ2lvblwiPlxuICA8L2FwcC1oZWFkZXI+XG48L2Rpdj5cbmBgYFxuXG5JbiB0aGlzIGNhc2UsIHRoZSBgc2Nyb2xsVGFyZ2V0YCBwcm9wZXJ0eSBwb2ludHMgdG8gdGhlIG91dGVyIGRpdiBlbGVtZW50LlxuQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBzZXQgdGhpcyBwcm9wZXJ0eSBwcm9ncmFtbWF0aWNhbGx5OlxuXG5gYGBqc1xuYXBwSGVhZGVyLnNjcm9sbFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsaW5nUmVnaW9uXCIpO1xuYGBgXG5cbiMjIEJhY2tncm91bmRzXG5hcHAtaGVhZGVyIGhhcyB0d28gYmFja2dyb3VuZCBsYXllcnMgdGhhdCBjYW4gYmUgdXNlZCBmb3Igc3R5bGluZyB3aGVuIHRoZVxuaGVhZGVyIGlzIGNvbmRlbnNlZCBvciB3aGVuIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgaXMgc2Nyb2xsZWQgdG8gdGhlIHRvcC5cblxuIyMgU2Nyb2xsIGVmZmVjdHNcblxuU2Nyb2xsIGVmZmVjdHMgYXJlIF9vcHRpb25hbF8gdmlzdWFsIGVmZmVjdHMgYXBwbGllZCBpbiBhcHAtaGVhZGVyIGJhc2VkIG9uXG5zY3JvbGwgcG9zaXRpb24uIEZvciBleGFtcGxlLCBUaGUgW01hdGVyaWFsIERlc2lnbiBzY3JvbGxpbmdcbnRlY2huaXF1ZXNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvcGF0dGVybnMvc2Nyb2xsaW5nLXRlY2huaXF1ZXMuaHRtbClcbnJlY29tbWVuZHMgZWZmZWN0cyB0aGF0IGNhbiBiZSBpbnN0YWxsZWQgdmlhIHRoZSBgZWZmZWN0c2AgcHJvcGVydHkuIGUuZy5cblxuYGBgaHRtbFxuPGFwcC1oZWFkZXIgZWZmZWN0cz1cIndhdGVyZmFsbFwiPlxuICA8YXBwLXRvb2xiYXI+QXBwIG5hbWU8L2FwcC10b29sYmFyPlxuPC9hcHAtaGVhZGVyPlxuYGBgXG5cbiMjIyMgSW1wb3J0aW5nIHRoZSBlZmZlY3RzXG5cblRvIHVzZSB0aGUgc2Nyb2xsIGVmZmVjdHMsIHlvdSBtdXN0IGV4cGxpY2l0bHkgaW1wb3J0IHRoZW0gaW4gYWRkaXRpb24gdG9cbmBhcHAtaGVhZGVyYDpcblxuYGBganNcbmltcG9ydCAnQHBvbHltZXIvYXBwLWxheW91dC9hcHAtc2Nyb2xsLWVmZmVjdHMvYXBwLXNjcm9sbC1lZmZlY3RzLmpzJztcbmBgYFxuXG4jIyMjIExpc3Qgb2YgZWZmZWN0c1xuXG4qICoqYmxlbmQtYmFja2dyb3VuZCoqXG5GYWRlcyBpbi9vdXQgdHdvIGJhY2tncm91bmQgZWxlbWVudHMgYnkgYXBwbHlpbmcgQ1NTIG9wYWNpdHkgYmFzZWQgb24gc2Nyb2xsXG5wb3NpdGlvbi4gWW91IGNhbiB1c2UgdGhpcyBlZmZlY3QgdG8gc21vb3RobHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9yXG5pbWFnZSBvZiB0aGUgaGVhZGVyLiBGb3IgZXhhbXBsZSwgdXNpbmcgdGhlIG1peGluXG5gLS1hcHAtaGVhZGVyLWJhY2tncm91bmQtcmVhci1sYXllcmAgbGV0cyB5b3UgYXNzaWduIGEgZGlmZmVyZW50IGJhY2tncm91bmQgd2hlblxudGhlIGhlYWRlciBpcyBjb25kZW5zZWQ6XG5cbmBgYGNzc1xuYXBwLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgLS1hcHAtaGVhZGVyLWJhY2tncm91bmQtcmVhci1sYXllcjoge1xuICAgIC8qIFRoZSBoZWFkZXIgaXMgYmx1ZSB3aGVuIGNvbmRlbnNlZCAqXFwvXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgfTtcbn1cbmBgYFxuXG4qICoqZmFkZS1iYWNrZ3JvdW5kKipcblVwb24gc2Nyb2xsaW5nIHBhc3QgYSB0aHJlc2hvbGQsIHRoaXMgZWZmZWN0IHdpbGwgdHJpZ2dlciBhbiBvcGFjaXR5IHRyYW5zaXRpb25cbnRvIGZhZGUgaW4vb3V0IHRoZSBiYWNrZ3JvdW5kcy4gQ29tcGFyZWQgdG8gdGhlIGBibGVuZC1iYWNrZ3JvdW5kYCBlZmZlY3QsIHRoaXNcbmVmZmVjdCBkb2Vzbid0IGludGVycG9sYXRlIHRoZSBvcGFjaXR5IGJhc2VkIG9uIHNjcm9sbCBwb3NpdGlvbi5cblxuXG4qICoqcGFyYWxsYXgtYmFja2dyb3VuZCoqXG5BIHNpbXBsZSBwYXJhbGxheCBlZmZlY3QgdGhhdCB2ZXJ0aWNhbGx5IHRyYW5zbGF0ZXMgdGhlIGJhY2tncm91bmRzIGJhc2VkIG9uIGFcbmZyYWN0aW9uIG9mIHRoZSBzY3JvbGwgcG9zaXRpb24uIEZvciBleGFtcGxlOlxuXG5gYGBjc3NcbmFwcC1oZWFkZXIge1xuICAtLWFwcC1oZWFkZXItYmFja2dyb3VuZC1mcm9udC1sYXllcjoge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi4pO1xuICB9O1xufVxuYGBgXG5gYGBodG1sXG48YXBwLWhlYWRlciBzdHlsZT1cImhlaWdodDogMzAwcHg7XCIgZWZmZWN0cz1cInBhcmFsbGF4LWJhY2tncm91bmRcIj5cbiAgPGFwcC10b29sYmFyPkFwcCBuYW1lPC9hcHAtdG9vbGJhcj5cbjwvYXBwLWhlYWRlcj5cbmBgYFxuXG5UaGUgZnJhY3Rpb24gZGV0ZXJtaW5lcyBob3cgZmFyIHRoZSBiYWNrZ3JvdW5kIG1vdmVzIHJlbGF0aXZlIHRvIHRoZSBzY3JvbGxcbnBvc2l0aW9uLiBUaGlzIHZhbHVlIGNhbiBiZSBhc3NpZ25lZCB2aWEgdGhlIGBzY2FsYXJgIGNvbmZpZyB2YWx1ZSBhbmQgaXQgaXNcbnR5cGljYWxseSBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmUuIElmIGBzY2FsYXI9MGAsIHRoZSBiYWNrZ3JvdW5kXG5kb2Vzbid0IG1vdmUgYXdheSBmcm9tIHRoZSBoZWFkZXIuXG5cbiogKipyZXNpemUtdGl0bGUqKlxuUHJvZ3Jlc3NpdmVseSBpbnRlcnBvbGF0ZXMgdGhlIHNpemUgb2YgdGhlIHRpdGxlIGZyb20gdGhlIGVsZW1lbnQgd2l0aCB0aGVcbmBtYWluLXRpdGxlYCBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnQgd2l0aCB0aGUgYGNvbmRlbnNlZC10aXRsZWAgYXR0cmlidXRlIGFzXG50aGUgaGVhZGVyIGNvbmRlbnNlcy4gRm9yIGV4YW1wbGU6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyIGNvbmRlbnNlcyByZXZlYWxzIGVmZmVjdHM9XCJyZXNpemUtdGl0bGVcIj5cbiAgPGFwcC10b29sYmFyPlxuICAgICAgPGg0IGNvbmRlbnNlZC10aXRsZT5BcHAgbmFtZTwvaDQ+XG4gIDwvYXBwLXRvb2xiYXI+XG4gIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxoMSBtYWluLXRpdGxlPkFwcCBuYW1lPC9oMT5cbiAgPC9hcHAtdG9vbGJhcj5cbjwvYXBwLWhlYWRlcj5cbmBgYFxuXG4qICoqcmVzaXplLXNuYXBwZWQtdGl0bGUqKlxuVXBvbiBzY3JvbGxpbmcgcGFzdCBhIHRocmVzaG9sZCwgdGhpcyBlZmZlY3QgZmFkZXMgaW4vb3V0IHRoZSB0aXRsZXMgdXNpbmdcbm9wYWNpdHkgdHJhbnNpdGlvbnMuIFNpbWlsYXJseSB0byBgcmVzaXplLXRpdGxlYCwgdGhlIGBtYWluLXRpdGxlYCBhbmRcbmBjb25kZW5zZWQtdGl0bGVgIGVsZW1lbnRzIG11c3QgYmUgcGxhY2VkIGluIHRoZSBsaWdodCBET00uXG5cbiogKip3YXRlcmZhbGwqKlxuVG9nZ2xlcyB0aGUgc2hhZG93IHByb3BlcnR5IGluIGFwcC1oZWFkZXIgdG8gY3JlYXRlIGEgc2Vuc2Ugb2YgZGVwdGggKGFzXG5yZWNvbW1lbmRlZCBpbiB0aGUgTUQgc3BlYykgYmV0d2VlbiB0aGUgaGVhZGVyIGFuZCB0aGUgdW5kZXJuZWF0aCBjb250ZW50LiBZb3VcbmNhbiBjaGFuZ2UgdGhlIHNoYWRvdyBieSBjdXN0b21pemluZyB0aGUgYC0tYXBwLWhlYWRlci1zaGFkb3dgIG1peGluLiBGb3JcbmV4YW1wbGU6XG5cbmBgYGNzc1xuYXBwLWhlYWRlciB7XG4gIC0tYXBwLWhlYWRlci1zaGFkb3c6IHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNXB4IDJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfTtcbn1cbmBgYFxuXG5gYGBodG1sXG48YXBwLWhlYWRlciBjb25kZW5zZXMgcmV2ZWFscyBlZmZlY3RzPVwid2F0ZXJmYWxsXCI+XG4gIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxoMSBtYWluLXRpdGxlPkFwcCBuYW1lPC9oMT5cbiAgPC9hcHAtdG9vbGJhcj5cbjwvYXBwLWhlYWRlcj5cbmBgYFxuXG4qICoqbWF0ZXJpYWwqKlxuSW5zdGFsbHMgdGhlIHdhdGVyZmFsbCwgcmVzaXplLXRpdGxlLCBibGVuZC1iYWNrZ3JvdW5kIGFuZCBwYXJhbGxheC1iYWNrZ3JvdW5kXG5lZmZlY3RzLlxuXG4jIyMgQ29udGVudCBhdHRyaWJ1dGVzXG5cbkF0dHJpYnV0ZSB8IERlc2NyaXB0aW9uICAgICAgICAgfCBEZWZhdWx0XG4tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5gc3RpY2t5YCB8IEVsZW1lbnQgdGhhdCByZW1haW5zIGF0IHRoZSB0b3Agd2hlbiB0aGUgaGVhZGVyIGNvbmRlbnNlcy4gfCBUaGUgZmlyc3QgYXBwLXRvb2xiYXIgaW4gdGhlIGxpZ2h0IERPTS5cblxuXG4jIyBTdHlsaW5nXG5cbk1peGluIHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1hcHAtaGVhZGVyLWJhY2tncm91bmQtZnJvbnQtbGF5ZXJgIHwgQXBwbGllcyB0byB0aGUgZnJvbnQgbGF5ZXIgb2YgdGhlIGJhY2tncm91bmQuIHwge31cbmAtLWFwcC1oZWFkZXItYmFja2dyb3VuZC1yZWFyLWxheWVyYCB8IEFwcGxpZXMgdG8gdGhlIHJlYXIgbGF5ZXIgb2YgdGhlIGJhY2tncm91bmQuIHwge31cbmAtLWFwcC1oZWFkZXItc2hhZG93YCB8IEFwcGxpZXMgdG8gdGhlIHNoYWRvdy4gfCB7fVxuXG5AZ3JvdXAgQXBwIEVsZW1lbnRzXG5AZWxlbWVudCBhcHAtaGVhZGVyXG5AZGVtbyBhcHAtaGVhZGVyL2RlbW8vYmxlbmQtYmFja2dyb3VuZC0xLmh0bWwgQmxlbmQgQmFja2dyb3VuZCBJbWFnZVxuQGRlbW8gYXBwLWhlYWRlci9kZW1vL2JsZW5kLWJhY2tncm91bmQtMi5odG1sIEJsZW5kIDIgQmFja2dyb3VuZCBJbWFnZXNcbkBkZW1vIGFwcC1oZWFkZXIvZGVtby9ibGVuZC1iYWNrZ3JvdW5kLTMuaHRtbCBCbGVuZCBCYWNrZ3JvdW5kIENvbG9yc1xuQGRlbW8gYXBwLWhlYWRlci9kZW1vL2NvbnRhY3RzLmh0bWwgQ29udGFjdHMgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci9kZW1vL2dpdmUuaHRtbCBSZXNpemUgU25hcHBlZCBUaXRsZSBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyL2RlbW8vbXVzaWMuaHRtbCBSZXZlYWxzIERlbW9cbkBkZW1vIGFwcC1oZWFkZXIvZGVtby9uby1lZmZlY3RzLmh0bWwgQ29uZGVuc2VzIGFuZCBSZXZlYWxzIERlbW9cbkBkZW1vIGFwcC1oZWFkZXIvZGVtby9ub3Rlcy5odG1sIEZpeGVkIHdpdGggRHluYW1pYyBTaGFkb3cgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci9kZW1vL2N1c3RvbS1zdGlja3ktZWxlbWVudC0xLmh0bWwgQ3VzdG9tIFN0aWNreSBFbGVtZW50IERlbW8gMVxuQGRlbW8gYXBwLWhlYWRlci9kZW1vL2N1c3RvbS1zdGlja3ktZWxlbWVudC0yLmh0bWwgQ3VzdG9tIFN0aWNreSBFbGVtZW50IERlbW8gMlxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIDpob3N0OjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogLTVweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCA1cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgICAgICAgQGFwcGx5IC0tYXBwLWhlYWRlci1zaGFkb3c7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzaGFkb3ddKTo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgI2JhY2tncm91bmQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAjYmFja2dyb3VuZEZyb250TGF5ZXIsXG4gICAgICAjYmFja2dyb3VuZFJlYXJMYXllciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG5cbiAgICAgICNiYWNrZ3JvdW5kRnJvbnRMYXllciB7XG4gICAgICAgIEBhcHBseSAtLWFwcC1oZWFkZXItYmFja2dyb3VuZC1mcm9udC1sYXllcjtcbiAgICAgIH1cblxuICAgICAgI2JhY2tncm91bmRSZWFyTGF5ZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBAYXBwbHkgLS1hcHAtaGVhZGVyLWJhY2tncm91bmQtcmVhci1sYXllcjtcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSk6OmFmdGVyLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgI2JhY2tncm91bmRGcm9udExheWVyLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgI2JhY2tncm91bmRSZWFyTGF5ZXIsXG4gICAgICAvKiBTaWxlbnQgc2Nyb2xsaW5nIHNob3VsZCBub3QgcnVuIENTUyB0cmFuc2l0aW9ucyAqL1xuICAgICAgOmhvc3QoW3NpbGVudC1zY3JvbGxdKSxcbiAgICAgIDpob3N0KFtzaWxlbnQtc2Nyb2xsXSk6OmFmdGVyLFxuICAgICAgOmhvc3QoW3NpbGVudC1zY3JvbGxdKSAjYmFja2dyb3VuZEZyb250TGF5ZXIsXG4gICAgICA6aG9zdChbc2lsZW50LXNjcm9sbF0pICNiYWNrZ3JvdW5kUmVhckxheWVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoYXBwLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSksXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW3N0aWNreV0pLFxuICAgICAgLyogU2lsZW50IHNjcm9sbGluZyBzaG91bGQgbm90IHJ1biBDU1MgdHJhbnNpdGlvbnMgKi9cbiAgICAgIDpob3N0KFtzaWxlbnQtc2Nyb2xsXSkgOjpzbG90dGVkKGFwcC10b29sYmFyOmZpcnN0LW9mLXR5cGUpLFxuICAgICAgOmhvc3QoW3NpbGVudC1zY3JvbGxdKSA6OnNsb3R0ZWQoW3N0aWNreV0pIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxuICAgICAgPHNsb3QgaWQ9XCJzbG90XCI+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ2FwcC1oZWFkZXInLFxuICBiZWhhdmlvcnM6IFtBcHBTY3JvbGxFZmZlY3RzQmVoYXZpb3IsIEFwcExheW91dEJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGhlYWRlciB3aWxsIGF1dG9tYXRpY2FsbHkgY29sbGFwc2Ugd2hlbiBzY3JvbGxpbmcgZG93bi5cbiAgICAgKiBUaGF0IGlzLCB0aGUgYHN0aWNreWAgZWxlbWVudCByZW1haW5zIHZpc2libGUgd2hlbiB0aGUgaGVhZGVyIGlzIGZ1bGx5XG4gICAgICpjb25kZW5zZWQgd2hlcmVhcyB0aGUgcmVzdCBvZiB0aGUgZWxlbWVudHMgd2lsbCBjb2xsYXBzZSBiZWxvdyBgc3RpY2t5YFxuICAgICAqZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBgc3RpY2t5YCBlbGVtZW50IGlzIHRoZSBmaXJzdCB0b29sYmFyIGluIHRoZSBsaWdodCBET006XG4gICAgICpcbiAgICAgKmBgYGh0bWxcbiAgICAgKiA8YXBwLWhlYWRlciBjb25kZW5zZXM+XG4gICAgICogICA8YXBwLXRvb2xiYXI+VGhpcyB0b29sYmFyIHJlbWFpbnMgb24gdG9wPC9hcHAtdG9vbGJhcj5cbiAgICAgKiAgIDxhcHAtdG9vbGJhcj48L2FwcC10b29sYmFyPlxuICAgICAqICAgPGFwcC10b29sYmFyPjwvYXBwLXRvb2xiYXI+XG4gICAgICogPC9hcHAtaGVhZGVyPlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQWRkaXRpb25hbGx5LCB5b3UgY2FuIHNwZWNpZnkgd2hpY2ggdG9vbGJhciBvciBlbGVtZW50IHJlbWFpbnMgdmlzaWJsZSBpblxuICAgICAqY29uZGVuc2VkIG1vZGUgYnkgYWRkaW5nIHRoZSBgc3RpY2t5YCBhdHRyaWJ1dGUgdG8gdGhhdCBlbGVtZW50LiBGb3JcbiAgICAgKmV4YW1wbGU6IGlmIHdlIHdhbnQgdGhlIGxhc3QgdG9vbGJhciB0byByZW1haW4gdmlzaWJsZSwgd2UgY2FuIGFkZCB0aGVcbiAgICAgKmBzdGlja3lgIGF0dHJpYnV0ZSB0byBpdC5cbiAgICAgKlxuICAgICAqYGBgaHRtbFxuICAgICAqIDxhcHAtaGVhZGVyIGNvbmRlbnNlcz5cbiAgICAgKiAgIDxhcHAtdG9vbGJhcj48L2FwcC10b29sYmFyPlxuICAgICAqICAgPGFwcC10b29sYmFyPjwvYXBwLXRvb2xiYXI+XG4gICAgICogICA8YXBwLXRvb2xiYXIgc3RpY2t5PlRoaXMgdG9vbGJhciByZW1haW5zIG9uIHRvcDwvYXBwLXRvb2xiYXI+XG4gICAgICogPC9hcHAtaGVhZGVyPlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogTm90ZSB0aGUgYHN0aWNreWAgZWxlbWVudCBtdXN0IGJlIGEgZGlyZWN0IGNoaWxkIG9mIGBhcHAtaGVhZGVyYC5cbiAgICAgKi9cbiAgICBjb25kZW5zZXM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogTWFudGFpbnMgdGhlIGhlYWRlciBmaXhlZCBhdCB0aGUgdG9wIHNvIGl0IG5ldmVyIG1vdmVzIGF3YXkuXG4gICAgICovXG4gICAgZml4ZWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2xpZGVzIGJhY2sgdGhlIGhlYWRlciB3aGVuIHNjcm9sbGluZyBiYWNrIHVwLlxuICAgICAqL1xuICAgIHJldmVhbHM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgYSBzaGFkb3cgYmVsb3cgdGhlIGhlYWRlci5cbiAgICAgKi9cbiAgICBzaGFkb3c6IHt0eXBlOiBCb29sZWFuLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsIHZhbHVlOiBmYWxzZX1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX2NvbmZpZ0NoYW5nZWQoaXNBdHRhY2hlZCwgY29uZGVuc2VzLCBmaXhlZCknXSxcblxuICAvKipcbiAgICogQSBjYWNoZWQgb2Zmc2V0SGVpZ2h0IG9mIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBfaGVpZ2h0OiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIHRoZSBoZWFkZXIgd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHdoZW4gc2Nyb2xsaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgX2RIZWlnaHQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBvZmZzZXRUb3Agb2YgYF9zdGlja3lFbGBcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIF9zdGlja3lFbFRvcDogMCxcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdGhhdCByZW1haW5zIHZpc2libGUgd2hlbiB0aGUgaGVhZGVyIGNvbmRlbnNlcy5cbiAgICpcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX3N0aWNreUVsUmVmOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVhZGVyJ3MgdG9wIHZhbHVlIHVzZWQgZm9yIHRoZSBgdHJhbnNmb3JtWWBcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIF90b3A6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjcm9sbCBwcm9ncmVzcy5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIF9wcm9ncmVzczogMCxcblxuICBfd2FzU2Nyb2xsaW5nRG93bjogZmFsc2UsXG4gIF9pbml0U2Nyb2xsVG9wOiAwLFxuICBfaW5pdFRpbWVzdGFtcDogMCxcbiAgX2xhc3RUaW1lc3RhbXA6IDAsXG4gIF9sYXN0U2Nyb2xsVG9wOiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgdGhlIGhlYWRlciBpcyBhbGxvd2VkIHRvIG1vdmUgYXdheS5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBfbWF4SGVhZGVyVG9wKCkge1xuICAgIHJldHVybiB0aGlzLmZpeGVkID8gdGhpcy5fZEhlaWdodCA6IHRoaXMuX2hlaWdodCArIDU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHN0aWNreSBlbGVtZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0/XG4gICAqL1xuICBnZXQgX3N0aWNreUVsKCkge1xuICAgIGlmICh0aGlzLl9zdGlja3lFbFJlZikge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0aWNreUVsUmVmO1xuICAgIH1cbiAgICB2YXIgbm9kZXMgPSBkb20odGhpcy4kLnNsb3QpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICAvLyBHZXQgdGhlIGVsZW1lbnQgd2l0aCB0aGUgc3RpY2t5IGF0dHJpYnV0ZSBvbiBpdCBvciB0aGUgZmlyc3QgZWxlbWVudCBpblxuICAgIC8vIHRoZSBsaWdodCBET00uXG4gICAgZm9yICh2YXIgaSA9IDAsIG5vZGU7IG5vZGUgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGVzW2ldKTsgaSsrKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlKCdzdGlja3knKSkge1xuICAgICAgICAgIHRoaXMuX3N0aWNreUVsUmVmID0gbm9kZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fc3RpY2t5RWxSZWYpIHtcbiAgICAgICAgICB0aGlzLl9zdGlja3lFbFJlZiA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNreUVsUmVmO1xuICB9LFxuXG4gIF9jb25maWdDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlc2V0TGF5b3V0KCk7XG4gICAgdGhpcy5fbm90aWZ5TGF5b3V0Q2hhbmdlZCgpO1xuICB9LFxuXG4gIF91cGRhdGVMYXlvdXRTdGF0ZXM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9mZnNldFdpZHRoID09PSAwICYmIHRoaXMub2Zmc2V0SGVpZ2h0ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9jbGFtcGVkU2Nyb2xsVG9wO1xuICAgIHZhciBmaXJzdFNldHVwID0gdGhpcy5faGVpZ2h0ID09PSAwIHx8IHNjcm9sbFRvcCA9PT0gMDtcbiAgICB2YXIgY3VycmVudERpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLm9mZnNldEhlaWdodDtcbiAgICB0aGlzLl9zdGlja3lFbFJlZiA9IG51bGw7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgLy8gcHJlcGFyZSBmb3IgbWVhc3VyZW1lbnRcbiAgICBpZiAoIWZpcnN0U2V0dXApIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbFN0YXRlKDAsIHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF5TW92ZSgpKSB7XG4gICAgICB0aGlzLl9kSGVpZ2h0ID1cbiAgICAgICAgICB0aGlzLl9zdGlja3lFbCA/IHRoaXMuX2hlaWdodCAtIHRoaXMuX3N0aWNreUVsLm9mZnNldEhlaWdodCA6IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RIZWlnaHQgPSAwO1xuICAgIH1cbiAgICB0aGlzLl9zdGlja3lFbFRvcCA9IHRoaXMuX3N0aWNreUVsID8gdGhpcy5fc3RpY2t5RWwub2Zmc2V0VG9wIDogMDtcbiAgICB0aGlzLl9zZXRVcEVmZmVjdCgpO1xuICAgIGlmIChmaXJzdFNldHVwKSB7XG4gICAgICB0aGlzLl91cGRhdGVTY3JvbGxTdGF0ZShzY3JvbGxUb3AsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGVTY3JvbGxTdGF0ZSh0aGlzLl9sYXN0U2Nyb2xsVG9wLCB0cnVlKTtcbiAgICAgIHRoaXMuX2xheW91dElmRGlydHkoKTtcbiAgICB9XG4gICAgLy8gcmVzdG9yZSBubyB0cmFuc2l0aW9uXG4gICAgdGhpcy5kaXNhYmxlZCA9IGN1cnJlbnREaXNhYmxlZDtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc2Nyb2xsIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsVG9wXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlVXBkYXRlIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIF91cGRhdGVTY3JvbGxTdGF0ZTogZnVuY3Rpb24oc2Nyb2xsVG9wLCBmb3JjZVVwZGF0ZSkge1xuICAgIGlmICh0aGlzLl9oZWlnaHQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHByb2dyZXNzID0gMDtcbiAgICB2YXIgdG9wID0gMDtcbiAgICB2YXIgbGFzdFRvcCA9IHRoaXMuX3RvcDtcbiAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IHRoaXMuX2xhc3RTY3JvbGxUb3A7XG4gICAgdmFyIG1heEhlYWRlclRvcCA9IHRoaXMuX21heEhlYWRlclRvcDtcbiAgICB2YXIgZFNjcm9sbFRvcCA9IHNjcm9sbFRvcCAtIHRoaXMuX2xhc3RTY3JvbGxUb3A7XG4gICAgdmFyIGFic0RTY3JvbGxUb3AgPSBNYXRoLmFicyhkU2Nyb2xsVG9wKTtcbiAgICB2YXIgaXNTY3JvbGxpbmdEb3duID0gc2Nyb2xsVG9wID4gdGhpcy5fbGFzdFNjcm9sbFRvcDtcbiAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBpZiAodGhpcy5fbWF5TW92ZSgpKSB7XG4gICAgICB0b3AgPSB0aGlzLl9jbGFtcChcbiAgICAgICAgICB0aGlzLnJldmVhbHMgPyBsYXN0VG9wICsgZFNjcm9sbFRvcCA6IHNjcm9sbFRvcCwgMCwgbWF4SGVhZGVyVG9wKTtcbiAgICB9XG4gICAgaWYgKHNjcm9sbFRvcCA+PSB0aGlzLl9kSGVpZ2h0KSB7XG4gICAgICB0b3AgPSB0aGlzLmNvbmRlbnNlcyAmJiAhdGhpcy5maXhlZCA/IE1hdGgubWF4KHRoaXMuX2RIZWlnaHQsIHRvcCkgOiB0b3A7XG4gICAgICB0aGlzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwbXMnO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXZlYWxzICYmICF0aGlzLmRpc2FibGVkICYmIGFic0RTY3JvbGxUb3AgPCAxMDApIHtcbiAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBzY3JvbGwgcG9zaXRpb25cbiAgICAgIGlmIChub3cgLSB0aGlzLl9pbml0VGltZXN0YW1wID4gMzAwIHx8XG4gICAgICAgICAgdGhpcy5fd2FzU2Nyb2xsaW5nRG93biAhPT0gaXNTY3JvbGxpbmdEb3duKSB7XG4gICAgICAgIHRoaXMuX2luaXRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgIHRoaXMuX2luaXRUaW1lc3RhbXAgPSBub3c7XG4gICAgICB9XG4gICAgICBpZiAoc2Nyb2xsVG9wID49IG1heEhlYWRlclRvcCkge1xuICAgICAgICAvLyBjaGVjayBpZiB0aGUgaGVhZGVyIGlzIGFsbG93ZWQgdG8gc25hcFxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5faW5pdFNjcm9sbFRvcCAtIHNjcm9sbFRvcCkgPiAzMCB8fFxuICAgICAgICAgICAgYWJzRFNjcm9sbFRvcCA+IDEwKSB7XG4gICAgICAgICAgaWYgKGlzU2Nyb2xsaW5nRG93biAmJiBzY3JvbGxUb3AgPj0gbWF4SGVhZGVyVG9wKSB7XG4gICAgICAgICAgICB0b3AgPSBtYXhIZWFkZXJUb3A7XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNTY3JvbGxpbmdEb3duICYmIHNjcm9sbFRvcCA+PSB0aGlzLl9kSGVpZ2h0KSB7XG4gICAgICAgICAgICB0b3AgPSB0aGlzLmNvbmRlbnNlcyAmJiAhdGhpcy5maXhlZCA/IHRoaXMuX2RIZWlnaHQgOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc2Nyb2xsVmVsb2NpdHkgPSBkU2Nyb2xsVG9wIC8gKG5vdyAtIHRoaXMuX2xhc3RUaW1lc3RhbXApO1xuICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICAgICAgICAgICAgdGhpcy5fY2xhbXAoKHRvcCAtIGxhc3RUb3ApIC8gc2Nyb2xsVmVsb2NpdHksIDAsIDMwMCkgKyAnbXMnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvcCA9IHRoaXMuX3RvcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fZEhlaWdodCA9PT0gMCkge1xuICAgICAgcHJvZ3Jlc3MgPSBzY3JvbGxUb3AgPiAwID8gMSA6IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzID0gdG9wIC8gdGhpcy5fZEhlaWdodDtcbiAgICB9XG4gICAgaWYgKCFmb3JjZVVwZGF0ZSkge1xuICAgICAgdGhpcy5fbGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgIHRoaXMuX3RvcCA9IHRvcDtcbiAgICAgIHRoaXMuX3dhc1Njcm9sbGluZ0Rvd24gPSBpc1Njcm9sbGluZ0Rvd247XG4gICAgICB0aGlzLl9sYXN0VGltZXN0YW1wID0gbm93O1xuICAgIH1cbiAgICBpZiAoZm9yY2VVcGRhdGUgfHwgcHJvZ3Jlc3MgIT09IHRoaXMuX3Byb2dyZXNzIHx8IGxhc3RUb3AgIT09IHRvcCB8fFxuICAgICAgICBzY3JvbGxUb3AgPT09IDApIHtcbiAgICAgIHRoaXMuX3Byb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICB0aGlzLl9ydW5FZmZlY3RzKHByb2dyZXNzLCB0b3ApO1xuICAgICAgdGhpcy5fdHJhbnNmb3JtSGVhZGVyKHRvcCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgaGVhZGVyIGlzIGFsbG93ZWQgdG8gbW92ZSBhcyB0aGUgdXNlciBzY3JvbGxzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgX21heU1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmRlbnNlcyB8fCAhdGhpcy5maXhlZDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IGhlYWRlciB3aWxsIGNvbmRlbnNlIGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZVxuICAgKiBoZWFkZXIgYW5kIHRoZSBgY29uc2Vuc2VzYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHdpbGxDb25kZW5zZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RIZWlnaHQgPiAwICYmIHRoaXMuY29uZGVuc2VzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgZWxlbWVudCBpcyBvbiB0aGUgc2NyZWVuLlxuICAgKiBUaGF0IGlzLCB2aXNpYmxlIGluIHRoZSBjdXJyZW50IHZpZXdwb3J0LlxuICAgKlxuICAgKiBAbWV0aG9kIGlzT25TY3JlZW5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzT25TY3JlZW46IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQgIT09IDAgJiYgdGhpcy5fdG9wIDwgdGhpcy5faGVpZ2h0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUncyBjb250ZW50IGJlbG93IHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAqXG4gICAqIEBtZXRob2QgaXNDb250ZW50QmVsb3dcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ29udGVudEJlbG93OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9wID09PSAwID8gdGhpcy5fY2xhbXBlZFNjcm9sbFRvcCA+IDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGFtcGVkU2Nyb2xsVG9wIC0gdGhpcy5fbWF4SGVhZGVyVG9wID49IDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGhlYWRlci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICovXG4gIF90cmFuc2Zvcm1IZWFkZXI6IGZ1bmN0aW9uKHkpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsICgteSkgKyAncHgnLCAwKTtcbiAgICBpZiAodGhpcy5fc3RpY2t5RWwpIHtcbiAgICAgIHRoaXMudHJhbnNsYXRlM2QoXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLmNvbmRlbnNlcyAmJiB5ID49IHRoaXMuX3N0aWNreUVsVG9wID9cbiAgICAgICAgICAgICAgKE1hdGgubWluKHksIHRoaXMuX2RIZWlnaHQpIC0gdGhpcy5fc3RpY2t5RWxUb3ApICsgJ3B4JyA6XG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLl9zdGlja3lFbCk7XG4gICAgfVxuICB9LFxuXG4gIF9jbGFtcDogZnVuY3Rpb24odiwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHYpKTtcbiAgfSxcblxuICBfZW5zdXJlQmdDb250YWluZXJzOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2JnQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9iZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fYmdDb250YWluZXIuaWQgPSAnYmFja2dyb3VuZCc7XG4gICAgICB0aGlzLl9iZ1JlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX2JnUmVhci5pZCA9ICdiYWNrZ3JvdW5kUmVhckxheWVyJztcbiAgICAgIHRoaXMuX2JnQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2JnUmVhcik7XG4gICAgICB0aGlzLl9iZ0Zyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLl9iZ0Zyb250LmlkID0gJ2JhY2tncm91bmRGcm9udExheWVyJztcbiAgICAgIHRoaXMuX2JnQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2JnRnJvbnQpO1xuICAgICAgZG9tKHRoaXMucm9vdCkuaW5zZXJ0QmVmb3JlKHRoaXMuX2JnQ29udGFpbmVyLCB0aGlzLiQuY29udGVudENvbnRhaW5lcik7XG4gICAgfVxuICB9LFxuXG4gIF9nZXRET01SZWY6IGZ1bmN0aW9uKGlkKSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSAnYmFja2dyb3VuZEZyb250TGF5ZXInOlxuICAgICAgICB0aGlzLl9lbnN1cmVCZ0NvbnRhaW5lcnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JnRnJvbnQ7XG4gICAgICBjYXNlICdiYWNrZ3JvdW5kUmVhckxheWVyJzpcbiAgICAgICAgdGhpcy5fZW5zdXJlQmdDb250YWluZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZ1JlYXI7XG4gICAgICBjYXNlICdiYWNrZ3JvdW5kJzpcbiAgICAgICAgdGhpcy5fZW5zdXJlQmdDb250YWluZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZ0NvbnRhaW5lcjtcbiAgICAgIGNhc2UgJ21haW5UaXRsZSc6XG4gICAgICAgIHJldHVybiBkb20odGhpcykucXVlcnlTZWxlY3RvcignW21haW4tdGl0bGVdJyk7XG4gICAgICBjYXNlICdjb25kZW5zZWRUaXRsZSc6XG4gICAgICAgIHJldHVybiBkb20odGhpcykucXVlcnlTZWxlY3RvcignW2NvbmRlbnNlZC10aXRsZV0nKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb2dyZXNzIHZhbHVlIG9mIHRoZSBzY3JvbGwgZWZmZWN0c1xuICAgKiBhbmQgdGhlIHRvcCBwb3NpdGlvbiBvZiB0aGUgaGVhZGVyLlxuICAgKlxuICAgKiBAbWV0aG9kIGdldFNjcm9sbFN0YXRlXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldFNjcm9sbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge3Byb2dyZXNzOiB0aGlzLl9wcm9ncmVzcywgdG9wOiB0aGlzLl90b3B9O1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uU2Nyb2xsVGFyZ2V0QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tc2Nyb2xsLXRhcmdldC1iZWhhdmlvci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtfc2Nyb2xsRWZmZWN0c30gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzLmpzJztcblxuLyoqXG4gKiBgUG9seW1lci5BcHBTY3JvbGxFZmZlY3RzQmVoYXZpb3JgIHByb3ZpZGVzIGFuIGludGVyZmFjZSB0aGF0IGFsbG93cyBhblxuICogZWxlbWVudCB0byB1c2Ugc2Nyb2xscyBlZmZlY3RzLlxuICpcbiAqICMjIyBJbXBvcnRpbmcgdGhlIGFwcC1sYXlvdXQgZWZmZWN0c1xuICpcbiAqIGFwcC1sYXlvdXQgcHJvdmlkZXMgYSBzZXQgb2Ygc2Nyb2xsIGVmZmVjdHMgdGhhdCBjYW4gYmUgdXNlZCBieSBleHBsaWNpdGx5XG4gKiBpbXBvcnRpbmcgYGFwcC1zY3JvbGwtZWZmZWN0cy5qc2A6XG4gKlxuICogYGBganNcbiAqIGltcG9ydCAnQHBvbHltZXIvYXBwLWxheW91dC9hcHAtc2Nyb2xsLWVmZmVjdHMvYXBwLXNjcm9sbC1lZmZlY3RzLmpzJztcbiAqIGBgYFxuICpcbiAqIFRoZSBzY3JvbGwgZWZmZWN0cyBjYW4gYWxzbyBiZSB1c2VkIGJ5IGluZGl2aWR1YWxseSBpbXBvcnRpbmdcbiAqIGBAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1zY3JvbGwtZWZmZWN0cy9lZmZlY3RzL1tlZmZlY3ROYW1lXS5qc2AuIEZvclxuICogZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0ICdAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1zY3JvbGwtZWZmZWN0cy9lZmZlY3RzL3dhdGVyZmFsbC5qcyc7XG4gKiBgYGBcbiAqXG4gKiAjIyMgQ29uc3VtaW5nIGVmZmVjdHNcbiAqXG4gKiBFZmZlY3RzIGNhbiBiZSBjb25zdW1lZCB2aWEgdGhlIGBlZmZlY3RzYCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgaHRtbFxuICogPGFwcC1oZWFkZXIgZWZmZWN0cz1cIndhdGVyZmFsbFwiPjwvYXBwLWhlYWRlcj5cbiAqIGBgYFxuICpcbiAqICMjIyBDcmVhdGluZyBzY3JvbGwgZWZmZWN0c1xuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjcmVhdGUgYSBjdXN0b20gc2Nyb2xsIGVmZmVjdCBpZiB5b3UgbmVlZCB0byBtb2RpZnkgdGhlIENTU1xuICogb2YgYW4gZWxlbWVudCBiYXNlZCBvbiB0aGUgc2Nyb2xsIHBvc2l0aW9uLlxuICpcbiAqIEEgc2Nyb2xsIGVmZmVjdCBkZWZpbml0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBzZXRVcCgpYCwgYHRlYXJEb3duKClgIGFuZFxuICogYHJ1bigpYCBmdW5jdGlvbnMuXG4gKlxuICogVG8gcmVnaXN0ZXIgdGhlIGVmZmVjdCwgeW91IGNhbiB1c2VcbiAqIGBQb2x5bWVyLkFwcExheW91dC5yZWdpc3RlckVmZmVjdChlZmZlY3ROYW1lLCBlZmZlY3REZWYpYCBGb3IgZXhhbXBsZSwgbGV0J3NcbiAqIGRlZmluZSBhbiBlZmZlY3QgdGhhdCByZXNpemVzIHRoZSBoZWFkZXIncyBsb2dvOlxuICpcbiAqIGBgYGpzXG4gKiBQb2x5bWVyLkFwcExheW91dC5yZWdpc3RlckVmZmVjdCgncmVzaXphYmxlLWxvZ28nLCB7XG4gKiAgIHNldFVwOiBmdW5jdGlvbihjb25maWcpIHtcbiAqICAgICAvLyB0aGUgZWZmZWN0J3MgY29uZmlnIGlzIHBhc3NlZCB0byB0aGUgc2V0VXAuXG4gKiAgICAgdGhpcy5fZnhSZXNpemVMb2dvID0geyBsb2dvOiBQb2x5bWVyLmRvbSh0aGlzKS5xdWVyeVNlbGVjdG9yKCdbbG9nb10nKSB9O1xuICogICB9LFxuICpcbiAqICAgcnVuOiBmdW5jdGlvbihwcm9ncmVzcykge1xuICogICAgICAvLyB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIGVmZmVjdFxuICogICAgICB0aGlzLnRyYW5zZm9ybSgnc2NhbGUzZCgnICsgcHJvZ3Jlc3MgKyAnLCAnKyBwcm9ncmVzcyArJywgMSknLFxuICogdGhpcy5fZnhSZXNpemVMb2dvLmxvZ28pO1xuICogICB9LFxuICpcbiAqICAgdGVhckRvd246IGZ1bmN0aW9uKCkge1xuICogICAgICAvLyBjbGVhbiB1cCBhbmQgcmVzZXQgb2Ygc3RhdGVzXG4gKiAgICAgIGRlbGV0ZSB0aGlzLl9meFJlc2l6ZUxvZ287XG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKiBOb3csIHlvdSBjYW4gY29uc3VtZSB0aGUgZWZmZWN0OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhcHAtaGVhZGVyIGlkPVwiYXBwSGVhZGVyXCIgZWZmZWN0cz1cInJlc2l6YWJsZS1sb2dvXCI+XG4gKiAgIDxpbWcgbG9nbyBzcmM9XCJsb2dvLnN2Z1wiPlxuICogPC9hcHAtaGVhZGVyPlxuICogYGBgXG4gKlxuICogIyMjIEltcGVyYXRpdmUgQVBJXG4gKlxuICogYGBganNcbiAqIHZhciBsb2dvRWZmZWN0ID0gYXBwSGVhZGVyLmNyZWF0ZUVmZmVjdCgncmVzaXphYmxlLWxvZ28nLCBlZmZlY3RDb25maWcpO1xuICogLy8gcnVuIHRoZSBlZmZlY3Q6IGxvZ29FZmZlY3QucnVuKHByb2dyZXNzKTtcbiAqIC8vIHRlYXIgZG93biB0aGUgZWZmZWN0OiBsb2dvRWZmZWN0LnRlYXJEb3duKCk7XG4gKiBgYGBcbiAqXG4gKiAjIyMgQ29uZmlndXJpbmcgZWZmZWN0c1xuICpcbiAqIEZvciBlZmZlY3RzIGluc3RhbGxlZCB2aWEgdGhlIGBlZmZlY3RzYCBwcm9wZXJ0eSwgdGhlaXIgY29uZmlndXJhdGlvbiBjYW4gYmVcbiAqIHNldCB2aWEgdGhlIGBlZmZlY3RzQ29uZmlnYCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgaHRtbFxuICogPGFwcC1oZWFkZXIgZWZmZWN0cz1cIndhdGVyZmFsbFwiXG4gKiAgIGVmZmVjdHMtY29uZmlnPSd7XCJ3YXRlcmZhbGxcIjoge1wic3RhcnRzQXRcIjogMCwgXCJlbmRzQXRcIjogMC41fX0nPlxuICogPC9hcHAtaGVhZGVyPlxuICogYGBgXG4gKlxuICogQWxsIGVmZmVjdHMgaGF2ZSBhIGBzdGFydHNBdGAgYW5kIGBlbmRzQXRgIGNvbmZpZyBwcm9wZXJ0eS4gVGhleSBzcGVjaWZ5IGF0XG4gKiB3aGF0IHBvaW50IHRoZSBlZmZlY3Qgc2hvdWxkIHN0YXJ0IGFuZCBlbmQuIFRoaXMgdmFsdWUgZ29lcyBmcm9tIDAgdG8gMVxuICogaW5jbHVzaXZlLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcFNjcm9sbEVmZmVjdHNCZWhhdmlvciA9IFtcbiAgSXJvblNjcm9sbFRhcmdldEJlaGF2aW9yLFxuICB7XG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgIC8qKlxuICAgICAgICogQSBzcGFjZS1zZXBhcmF0ZWQgbGlzdCBvZiB0aGUgZWZmZWN0cyBuYW1lcyB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW5cbiAgICAgICAqIHRoZSB1c2VyIHNjcm9sbHMuIGUuZy4gYHdhdGVyZmFsbCBwYXJhbGxheC1iYWNrZ3JvdW5kYCBpbnN0YWxscyB0aGVcbiAgICAgICAqIGB3YXRlcmZhbGxgIGFuZCBgcGFyYWxsYXgtYmFja2dyb3VuZGAuXG4gICAgICAgKi9cbiAgICAgIGVmZmVjdHM6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFuIG9iamVjdCB0aGF0IGNvbmZpZ3VyYXRlcyB0aGUgZWZmZWN0cyBpbnN0YWxsZWQgdmlhIHRoZSBgZWZmZWN0c2BcbiAgICAgICAqIHByb3BlcnR5LiBlLmcuXG4gICAgICAgKiBgYGBqc1xuICAgICAgICogIGVsZW1lbnQuZWZmZWN0c0NvbmZpZyA9IHtcbiAgICAgICAqICAgXCJibGVuZC1iYWNrZ3JvdW5kXCI6IHtcbiAgICAgICAqICAgICBcInN0YXJ0c0F0XCI6IDAuNVxuICAgICAgICogICB9XG4gICAgICAgKiB9O1xuICAgICAgICogYGBgXG4gICAgICAgKiBFdmVyeSBlZmZlY3QgaGFzIGF0IGxlYXN0IHR3byBjb25maWcgcHJvcGVydGllczogYHN0YXJ0c0F0YCBhbmRcbiAgICAgICAqIGBlbmRzQXRgLiBUaGVzZSBwcm9wZXJ0aWVzIGluZGljYXRlIHdoZW4gdGhlIGV2ZW50IHNob3VsZCBzdGFydCBhbmQgZW5kXG4gICAgICAgKiByZXNwZWN0aXZlbHkgYW5kIHJlbGF0aXZlIHRvIHRoZSBvdmVyYWxsIGVsZW1lbnQgcHJvZ3Jlc3MuIFNvIGZvclxuICAgICAgICogZXhhbXBsZSwgaWYgYGJsZW5kLWJhY2tncm91bmRgIHN0YXJ0cyBhdCBgMC41YCwgdGhlIGVmZmVjdCB3aWxsIG9ubHlcbiAgICAgICAqIHN0YXJ0IG9uY2UgdGhlIGN1cnJlbnQgZWxlbWVudCByZWFjaGVzIDAuNSBvZiBpdHMgcHJvZ3Jlc3MuIEluIHRoaXNcbiAgICAgICAqIGNvbnRleHQsIHRoZSBwcm9ncmVzcyBpcyBhIHZhbHVlIGluIHRoZSByYW5nZSBvZiBgWzAsIDFdYCB0aGF0XG4gICAgICAgKiBpbmRpY2F0ZXMgd2hlcmUgdGhpcyBlbGVtZW50IGlzIG9uIHRoZSBzY3JlZW4gcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0LlxuICAgICAgICovXG4gICAgICBlZmZlY3RzQ29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEaXNhYmxlcyBDU1MgdHJhbnNpdGlvbnMgYW5kIHNjcm9sbCBlZmZlY3RzIG9uIHRoZSBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBkaXNhYmxlZDoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSwgdmFsdWU6IGZhbHNlfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbGxvd3MgdG8gc2V0IGEgYHNjcm9sbFRvcGAgdGhyZXNob2xkLiBXaGVuIGdyZWF0ZXIgdGhhbiAwLFxuICAgICAgICogYHRocmVzaG9sZFRyaWdnZXJlZGAgaXMgdHJ1ZSBvbmx5IHdoZW4gdGhlIHNjcm9sbCB0YXJnZXQncyBgc2Nyb2xsVG9wYFxuICAgICAgICogaGFzIHJlYWNoZWQgdGhpcyB2YWx1ZS5cbiAgICAgICAqXG4gICAgICAgKiBGb3IgZXhhbXBsZSwgaWYgYHRocmVzaG9sZCA9IDEwMGAsIGB0aHJlc2hvbGRUcmlnZ2VyZWRgIGlzIHRydWUgd2hlblxuICAgICAgICogdGhlIGBzY3JvbGxUb3BgIGlzIGF0IGxlYXN0IGAxMDBgLlxuICAgICAgICovXG4gICAgICB0aHJlc2hvbGQ6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIGlmIHRoZSBgc2Nyb2xsVG9wYCB0aHJlc2hvbGQgKHNldCBpbiBgc2Nyb2xsVG9wVGhyZXNob2xkYCkgaGFzXG4gICAgICAgKiBiZWVuIHJlYWNoZWQuXG4gICAgICAgKi9cbiAgICAgIHRocmVzaG9sZFRyaWdnZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb2JzZXJ2ZXJzOiBbJ19lZmZlY3RzQ2hhbmdlZChlZmZlY3RzLCBlZmZlY3RzQ29uZmlnLCBpc0F0dGFjaGVkKSddLFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc2Nyb2xsIHN0YXRlLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGRlblxuICAgICAqIGJ5IHRoZSBjb25zdW1lciBvZiB0aGlzIGJlaGF2aW9yLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBfdXBkYXRlU2Nyb2xsU3RhdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsVG9wXG4gICAgICovXG4gICAgX3VwZGF0ZVNjcm9sbFN0YXRlOiBmdW5jdGlvbihzY3JvbGxUb3ApIHt9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IGVsZW1lbnQgaXMgb24gdGhlIHNjcmVlbi5cbiAgICAgKiBUaGF0IGlzLCB2aXNpYmxlIGluIHRoZSBjdXJyZW50IHZpZXdwb3J0LiBUaGlzIG1ldGhvZCBzaG91bGQgYmVcbiAgICAgKiBvdmVycmlkZGVuIGJ5IHRoZSBjb25zdW1lciBvZiB0aGlzIGJlaGF2aW9yLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBpc09uU2NyZWVuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc09uU2NyZWVuOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlJ3MgY29udGVudCBiZWxvdyB0aGUgY3VycmVudCBlbGVtZW50LiBUaGlzIG1ldGhvZFxuICAgICAqIHNob3VsZCBiZSBvdmVycmlkZGVuIGJ5IHRoZSBjb25zdW1lciBvZiB0aGlzIGJlaGF2aW9yLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBpc0NvbnRlbnRCZWxvd1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNDb250ZW50QmVsb3c6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIGVmZmVjdHMgaGFuZGxlcnMgdGhhdCB3aWxsIHRha2UgcGxhY2UgZHVyaW5nIHNjcm9sbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtBcnJheTxGdW5jdGlvbj59XG4gICAgICovXG4gICAgX2VmZmVjdHNSdW5GbjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgdGhlIGVmZmVjdHMgZGVmaW5pdGlvbnMgaW5zdGFsbGVkIHZpYSB0aGUgYGVmZmVjdHNgIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQHR5cGUge0FycmF5PE9iamVjdD59XG4gICAgICovXG4gICAgX2VmZmVjdHM6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2xhbXBlZCB2YWx1ZSBvZiBgX3Njcm9sbFRvcGAuXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IF9jbGFtcGVkU2Nyb2xsVG9wKCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHRoaXMuX3Njcm9sbFRvcCk7XG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFN0YXRlQ2hhbmdlZCgpO1xuICAgIH0sXG5cbiAgICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl90ZWFyRG93bkVmZmVjdHMoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlZmZlY3Qgb2JqZWN0IGZyb20gYW4gZWZmZWN0J3MgbmFtZSB0aGF0IGNhbiBiZSB1c2VkIHRvIHJ1blxuICAgICAqIGVmZmVjdHMgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY3JlYXRlRWZmZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVmZmVjdE5hbWUgVGhlIGVmZmVjdCdzIG5hbWUgcmVnaXN0ZXJlZCB2aWEgYFBvbHltZXIuQXBwTGF5b3V0LnJlZ2lzdGVyRWZmZWN0YC5cbiAgICAgKiBAcGFyYW0ge09iamVjdD19IGVmZmVjdENvbmZpZyBUaGUgZWZmZWN0IGNvbmZpZyBvYmplY3QuIChPcHRpb25hbClcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIGVmZmVjdCBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAgICAgKlxuICAgICAqICAqIGBlZmZlY3Quc2V0VXAoKWAsIFNldHMgdXAgdGhlIHJlcXVpcmVtZW50cyBmb3IgdGhlIGVmZmVjdC5cbiAgICAgKiAgICAgICBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IGJlZm9yZSB0aGUgYGVmZmVjdGAgZnVuY3Rpb25cbiAgICAgKiByZXR1cm5zLlxuICAgICAqICAqIGBlZmZlY3QucnVuKHByb2dyZXNzLCB5KWAsIFJ1bnMgdGhlIGVmZmVjdCBnaXZlbiBhIGBwcm9ncmVzc2AuXG4gICAgICogICogYGVmZmVjdC50ZWFyRG93bigpYCwgQ2xlYW5zIHVwIGFueSBET00gbm9kZXMgb3IgZWxlbWVudCByZWZlcmVuY2VzXG4gICAgICogdXNlZCBieSB0aGUgZWZmZWN0LlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiBgYGBqc1xuICAgICAqIHZhciBwYXJhbGxheCA9IGVsZW1lbnQuY3JlYXRlRWZmZWN0KCdwYXJhbGxheC1iYWNrZ3JvdW5kJyk7XG4gICAgICogLy8gcnVucyB0aGUgZWZmZWN0XG4gICAgICogcGFyYWxsYXgucnVuKDAuNSwgMCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgY3JlYXRlRWZmZWN0OiBmdW5jdGlvbihlZmZlY3ROYW1lLCBlZmZlY3RDb25maWcpIHtcbiAgICAgIHZhciBlZmZlY3REZWYgPSBfc2Nyb2xsRWZmZWN0c1tlZmZlY3ROYW1lXTtcbiAgICAgIGlmICghZWZmZWN0RGVmKSB7XG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcih0aGlzLl9nZXRVbmRlZmluZWRNc2coZWZmZWN0TmFtZSkpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3AgPSB0aGlzLl9ib3VuZEVmZmVjdChlZmZlY3REZWYsIGVmZmVjdENvbmZpZyB8fCB7fSk7XG4gICAgICBwcm9wLnNldFVwKCk7XG4gICAgICByZXR1cm4gcHJvcDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYGVmZmVjdHNgIG9yIGBlZmZlY3RzQ29uZmlnYCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIF9lZmZlY3RzQ2hhbmdlZDogZnVuY3Rpb24oZWZmZWN0cywgZWZmZWN0c0NvbmZpZywgaXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5fdGVhckRvd25FZmZlY3RzKCk7XG5cbiAgICAgIGlmICghZWZmZWN0cyB8fCAhaXNBdHRhY2hlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlZmZlY3RzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihlZmZlY3ROYW1lKSB7XG4gICAgICAgIHZhciBlZmZlY3REZWY7XG4gICAgICAgIGlmIChlZmZlY3ROYW1lICE9PSAnJykge1xuICAgICAgICAgIGlmICgoZWZmZWN0RGVmID0gX3Njcm9sbEVmZmVjdHNbZWZmZWN0TmFtZV0pKSB7XG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RzLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5fYm91bmRFZmZlY3QoZWZmZWN0RGVmLCBlZmZlY3RzQ29uZmlnW2VmZmVjdE5hbWVdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLl9nZXRVbmRlZmluZWRNc2coZWZmZWN0TmFtZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIHRoaXMuX3NldFVwRWZmZWN0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZvcmNlcyBsYXlvdXRcbiAgICAgKi9cbiAgICBfbGF5b3V0SWZEaXJ0eTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5vZmZzZXRXaWR0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBlZmZlY3Qgb2JqZWN0IGJvdW5kIHRvIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWZmZWN0RGVmXG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBlZmZlY3RzQ29uZmlnIFRoZSBlZmZlY3QgY29uZmlnIG9iamVjdCBpZiB0aGUgZWZmZWN0IGFjY2VwdHMgY29uZmlnIHZhbHVlcy4gKE9wdGlvbmFsKVxuICAgICAqL1xuICAgIF9ib3VuZEVmZmVjdDogZnVuY3Rpb24oZWZmZWN0RGVmLCBlZmZlY3RzQ29uZmlnKSB7XG4gICAgICBlZmZlY3RzQ29uZmlnID0gZWZmZWN0c0NvbmZpZyB8fCB7fTtcbiAgICAgIHZhciBzdGFydHNBdCA9IHBhcnNlRmxvYXQoZWZmZWN0c0NvbmZpZy5zdGFydHNBdCB8fCAwKTtcbiAgICAgIHZhciBlbmRzQXQgPSBwYXJzZUZsb2F0KGVmZmVjdHNDb25maWcuZW5kc0F0IHx8IDEpO1xuICAgICAgdmFyIGRlbHRhUyA9IGVuZHNBdCAtIHN0YXJ0c0F0O1xuICAgICAgdmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgLy8gZmFzdCBwYXRoIGlmIHBvc3NpYmxlXG4gICAgICB2YXIgcnVuRm4gPSAoc3RhcnRzQXQgPT09IDAgJiYgZW5kc0F0ID09PSAxKSA/XG4gICAgICAgICAgZWZmZWN0RGVmLnJ1biA6XG4gICAgICAgICAgZnVuY3Rpb24ocHJvZ3Jlc3MsIHkpIHtcbiAgICAgICAgICAgIGVmZmVjdERlZi5ydW4uY2FsbChcbiAgICAgICAgICAgICAgICB0aGlzLCBNYXRoLm1heCgwLCAocHJvZ3Jlc3MgLSBzdGFydHNBdCkgLyBkZWx0YVMpLCB5KTtcbiAgICAgICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VXA6IGVmZmVjdERlZi5zZXRVcCA/IGVmZmVjdERlZi5zZXRVcC5iaW5kKHRoaXMsIGVmZmVjdHNDb25maWcpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vb3AsXG4gICAgICAgIHJ1bjogZWZmZWN0RGVmLnJ1biA/IHJ1bkZuLmJpbmQodGhpcykgOiBub29wLFxuICAgICAgICB0ZWFyRG93bjogZWZmZWN0RGVmLnRlYXJEb3duID8gZWZmZWN0RGVmLnRlYXJEb3duLmJpbmQodGhpcykgOiBub29wXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBlZmZlY3RzLlxuICAgICAqL1xuICAgIF9zZXRVcEVmZmVjdDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5pc0F0dGFjaGVkICYmIHRoaXMuX2VmZmVjdHMpIHtcbiAgICAgICAgdGhpcy5fZWZmZWN0c1J1bkZuID0gW107XG4gICAgICAgIHRoaXMuX2VmZmVjdHMuZm9yRWFjaChmdW5jdGlvbihlZmZlY3REZWYpIHtcbiAgICAgICAgICAvLyBpbnN0YWxsIHRoZSBlZmZlY3Qgb25seSBpZiBubyBlcnJvciB3YXMgcmVwb3J0ZWRcbiAgICAgICAgICBpZiAoZWZmZWN0RGVmLnNldFVwKCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RzUnVuRm4ucHVzaChlZmZlY3REZWYucnVuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUZWFycyBkb3duIHRoZSBlZmZlY3RzLlxuICAgICAqL1xuICAgIF90ZWFyRG93bkVmZmVjdHM6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2VmZmVjdHMpIHtcbiAgICAgICAgdGhpcy5fZWZmZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKGVmZmVjdERlZikge1xuICAgICAgICAgIGVmZmVjdERlZi50ZWFyRG93bigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VmZmVjdHNSdW5GbiA9IFtdO1xuICAgICAgdGhpcy5fZWZmZWN0cyA9IFtdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSBlZmZlY3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHAgVGhlIHByb2dyZXNzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHRvcCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydC5cbiAgICAgKi9cbiAgICBfcnVuRWZmZWN0czogZnVuY3Rpb24ocCwgeSkge1xuICAgICAgaWYgKHRoaXMuX2VmZmVjdHNSdW5Gbikge1xuICAgICAgICB0aGlzLl9lZmZlY3RzUnVuRm4uZm9yRWFjaChmdW5jdGlvbihydW4pIHtcbiAgICAgICAgICBydW4ocCwgeSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZXMgdGhlIGBfc2Nyb2xsSGFuZGxlcmAuXG4gICAgICovXG4gICAgX3Njcm9sbEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2Nyb2xsU3RhdGVDaGFuZ2VkKCk7XG4gICAgfSxcblxuICAgIF9zY3JvbGxTdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9jbGFtcGVkU2Nyb2xsVG9wO1xuICAgICAgICB0aGlzLl91cGRhdGVTY3JvbGxTdGF0ZShzY3JvbGxUb3ApO1xuICAgICAgICBpZiAodGhpcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VGhyZXNob2xkVHJpZ2dlcmVkKHNjcm9sbFRvcCA+PSB0aGlzLnRocmVzaG9sZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcmVmZXJlbmNlIHRvIGEgbm9kZSBpbiB0aGUgbG9jYWwgRE9NLlxuICAgICAqIFRoZSBub2RlIGlzIGNvbnN1bWVkIGJ5IGEgc2Nyb2xsIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgZm9yIHRoZSBub2RlLlxuICAgICAqL1xuICAgIF9nZXRET01SZWY6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ19nZXRET01SZWYnLCAnYCcgKyBpZCArICdgIGlzIHVuZGVmaW5lZCcpO1xuICAgIH0sXG5cbiAgICBfZ2V0VW5kZWZpbmVkTXNnOiBmdW5jdGlvbihlZmZlY3ROYW1lKSB7XG4gICAgICByZXR1cm4gJ1Njcm9sbCBlZmZlY3QgYCcgKyBlZmZlY3ROYW1lICsgJ2AgaXMgdW5kZWZpbmVkLiAnICtcbiAgICAgICAgICAnRGlkIHlvdSBmb3JnZXQgdG8gaW1wb3J0IGFwcC1sYXlvdXQvYXBwLXNjcm9sbC1lZmZlY3RzL2VmZmVjdHMvJyArXG4gICAgICAgICAgZWZmZWN0TmFtZSArICcuaHRtbCA/JztcbiAgICB9XG5cbiAgfVxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuZXhwb3J0IGNvbnN0IF9zY3JvbGxFZmZlY3RzID0ge307XG5leHBvcnQgbGV0IF9zY3JvbGxUaW1lciA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxUaW1pbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgdCAvPSBkO1xuICByZXR1cm4gLWMgKiB0ICogKHQgLSAyKSArIGI7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVycyBhIHNjcm9sbCBlZmZlY3QgdG8gYmUgdXNlZCBpbiBlbGVtZW50cyB0aGF0IGltcGxlbWVudCB0aGVcbiAqIGBQb2x5bWVyLkFwcFNjcm9sbEVmZmVjdHNCZWhhdmlvcmAgYmVoYXZpb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVmZmVjdE5hbWUgVGhlIGVmZmVjdCBuYW1lLlxuICogQHBhcmFtIHtPYmplY3R9IGVmZmVjdERlZiBUaGUgZWZmZWN0IGRlZmluaXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCByZWdpc3RlckVmZmVjdCA9IGZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KGVmZmVjdE5hbWUsIGVmZmVjdERlZikge1xuICBpZiAoX3Njcm9sbEVmZmVjdHNbZWZmZWN0TmFtZV0gIT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZWZmZWN0IGAnICsgZWZmZWN0TmFtZSArICdgIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC4nKTtcbiAgfVxuICBfc2Nyb2xsRWZmZWN0c1tlZmZlY3ROYW1lXSA9IGVmZmVjdERlZjtcbn07XG5cbmV4cG9ydCBjb25zdCBxdWVyeUFsbFJvb3QgPSBmdW5jdGlvbihzZWxlY3Rvciwgcm9vdCkge1xuICB2YXIgcXVldWUgPSBbcm9vdF07XG4gIHZhciBtYXRjaGVzID0gW107XG5cbiAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgbm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgbWF0Y2hlcy5wdXNoLmFwcGx5KG1hdGNoZXMsIG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgIGZvciAodmFyIGkgPSAwOyBub2RlLmNoaWxkcmVuW2ldOyBpKyspIHtcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuW2ldLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgcXVldWUucHVzaChub2RlLmNoaWxkcmVuW2ldLnNoYWRvd1Jvb3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0Y2hlcztcbn07XG5cbi8qKlxuICogU2Nyb2xscyB0byBhIHBhcnRpY3VsYXIgc2V0IG9mIGNvb3JkaW5hdGVzIGluIGEgc2Nyb2xsIHRhcmdldC5cbiAqIElmIHRoZSBzY3JvbGwgdGFyZ2V0IGlzIG5vdCBkZWZpbmVkLCB0aGVuIGl0IHdvdWxkIHVzZSB0aGUgbWFpbiBkb2N1bWVudCBhc1xuICogdGhlIHRhcmdldC5cbiAqXG4gKiBUbyBzY3JvbGwgaW4gYSBzbW9vdGggZmFzaGlvbiwgeW91IGNhbiBzZXQgdGhlIG9wdGlvbiBgYmVoYXZpb3I6ICdzbW9vdGgnYC5cbiAqIGUuZy5cbiAqXG4gKiBgYGBqc1xuICogUG9seW1lci5BcHBMYXlvdXQuc2Nyb2xsKHt0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJ30pO1xuICogYGBgXG4gKlxuICogVG8gc2Nyb2xsIGluIGEgc2lsZW50IG1vZGUsIHdpdGhvdXQgbm90aWZ5aW5nIHNjcm9sbCBjaGFuZ2VzIHRvIGFueVxuICogYXBwLWxheW91dCBlbGVtZW50cywgeW91IGNhbiBzZXQgdGhlIG9wdGlvbiBgYmVoYXZpb3I6ICdzaWxlbnQnYC4gVGhpcyBpc1xuICogcGFydGljdWxhcmx5IHVzZWZ1bCB3ZSB5b3UgYXJlIHVzaW5nIGBhcHAtaGVhZGVyYCBhbmQgeW91IGRlc2lyZSB0byBzY3JvbGwgdG9cbiAqIHRoZSB0b3Agb2YgYSBzY3JvbGxpbmcgcmVnaW9uIHdpdGhvdXQgcnVubmluZyBzY3JvbGwgZWZmZWN0cy4gZS5nLlxuICpcbiAqIGBgYGpzXG4gKiBQb2x5bWVyLkFwcExheW91dC5zY3JvbGwoe3RvcDogMCwgYmVoYXZpb3I6ICdzaWxlbnQnfSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB7dG9wOiBOdW1iZXIsIGxlZnQ6IE51bWJlciwgYmVoYXZpb3I6IFN0cmluZyhzbW9vdGggfCBzaWxlbnQpfVxuICovXG5leHBvcnQgY29uc3Qgc2Nyb2xsID0gZnVuY3Rpb24gc2Nyb2xsKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgZG9jRWw7XG4gIHZhciBoYXNOYXRpdmVTY3JvbGxCZWhhdmlvciA9XG4gICAgICAnc2Nyb2xsQmVoYXZpb3InIGluIHRhcmdldC5zdHlsZSAmJiB0YXJnZXQuc2Nyb2xsO1xuICB2YXIgc2Nyb2xsQ2xhc3NOYW1lID0gJ2FwcC1sYXlvdXQtc2lsZW50LXNjcm9sbCc7XG4gIHZhciBzY3JvbGxUb3AgPSBvcHRpb25zLnRvcCB8fCAwO1xuICB2YXIgc2Nyb2xsTGVmdCA9IG9wdGlvbnMubGVmdCB8fCAwO1xuICB2YXIgc2Nyb2xsVG8gPSB0YXJnZXQgPT09IGRvY0VsID8gd2luZG93LnNjcm9sbFRvIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNjcm9sbFRvKHNjcm9sbExlZnQsIHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gIGlmIChvcHRpb25zLmJlaGF2aW9yID09PSAnc21vb3RoJykge1xuICAgIGlmIChoYXNOYXRpdmVTY3JvbGxCZWhhdmlvcikge1xuICAgICAgdGFyZ2V0LnNjcm9sbChvcHRpb25zKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGltaW5nRm4gPSBzY3JvbGxUaW1pbmdGdW5jdGlvbjtcbiAgICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxUb3AgPVxuICAgICAgICAgIHRhcmdldCA9PT0gZG9jRWwgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiB0YXJnZXQuc2Nyb2xsVG9wO1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxMZWZ0ID1cbiAgICAgICAgICB0YXJnZXQgPT09IGRvY0VsID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICB2YXIgZGVsdGFTY3JvbGxUb3AgPSBzY3JvbGxUb3AgLSBjdXJyZW50U2Nyb2xsVG9wO1xuICAgICAgdmFyIGRlbHRhU2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdDtcbiAgICAgIHZhciBkdXJhdGlvbiA9IDMwMDtcbiAgICAgIHZhciB1cGRhdGVGcmFtZSA9XG4gICAgICAgICAgKGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKCkge1xuICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB2YXIgZWxhcHNlZFRpbWUgPSBub3cgLSBzdGFydFRpbWU7XG5cbiAgICAgICAgICAgIGlmIChlbGFwc2VkVGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgIHNjcm9sbFRvKFxuICAgICAgICAgICAgICAgICAgdGltaW5nRm4oXG4gICAgICAgICAgICAgICAgICAgICAgZWxhcHNlZFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgZGVsdGFTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICAgIHRpbWluZ0ZuKFxuICAgICAgICAgICAgICAgICAgICAgIGVsYXBzZWRUaW1lLCBjdXJyZW50U2Nyb2xsVG9wLCBkZWx0YVNjcm9sbFRvcCwgZHVyYXRpb24pKTtcbiAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUZyYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNjcm9sbFRvKHNjcm9sbExlZnQsIHNjcm9sbFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkuYmluZCh0aGlzKTtcblxuICAgICAgdXBkYXRlRnJhbWUoKTtcbiAgICB9XG5cbiAgfSBlbHNlIGlmIChvcHRpb25zLmJlaGF2aW9yID09PSAnc2lsZW50Jykge1xuICAgIHZhciBoZWFkZXJzID0gcXVlcnlBbGxSb290KCdhcHAtaGVhZGVyJywgZG9jdW1lbnQuYm9keSk7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdzaWxlbnQtc2Nyb2xsJywgJycpO1xuICAgIH0pO1xuXG4gICAgLy8gQnJvd3NlcnMga2VlcCB0aGUgc2Nyb2xsIG1vbWVudHVtIGV2ZW4gaWYgdGhlIGJvdHRvbSBvZiB0aGUgc2Nyb2xsaW5nXG4gICAgLy8gY29udGVudCB3YXMgcmVhY2hlZC4gVGhpcyBtZWFucyB0aGF0IGNhbGxpbmcgc2Nyb2xsKHt0b3A6IDAsIGJlaGF2aW9yOlxuICAgIC8vICdzaWxlbnQnfSkgd2hlbiB0aGUgbW9tZW50dW0gaXMgc3RpbGwgZ29pbmcgd2lsbCByZXN1bHQgaW4gbW9yZSBzY3JvbGxcbiAgICAvLyBldmVudHMgYW5kIHRodXMgc2Nyb2xsIGVmZmVjdHMuIFRoaXMgc2VlbXMgdG8gb25seSBhcHBseSB3aGVuIHVzaW5nXG4gICAgLy8gZG9jdW1lbnQgc2Nyb2xsaW5nLiBUaGVyZWZvcmUsIHdoZW4gc2hvdWxkIHdlIHJlbW92ZSB0aGUgY2xhc3MgZnJvbSB0aGVcbiAgICAvLyBkb2N1bWVudCBlbGVtZW50P1xuXG4gICAgaWYgKF9zY3JvbGxUaW1lcikge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKF9zY3JvbGxUaW1lcik7XG4gICAgfVxuXG4gICAgX3Njcm9sbFRpbWVyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgaGVhZGVyLnJlbW92ZUF0dHJpYnV0ZSgnc2lsZW50LXNjcm9sbCcpO1xuICAgICAgfSk7XG4gICAgICBfc2Nyb2xsVGltZXIgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgc2Nyb2xsVG8oc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKTtcblxuICB9IGVsc2Uge1xuICAgIHNjcm9sbFRvKHNjcm9sbExlZnQsIHNjcm9sbFRvcCk7XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbiAqIGBQb2x5bWVyLklyb25TY3JvbGxUYXJnZXRCZWhhdmlvcmAgYWxsb3dzIGFuIGVsZW1lbnQgdG8gcmVzcG9uZCB0byBzY3JvbGxcbiAqIGV2ZW50cyBmcm9tIGEgZGVzaWduYXRlZCBzY3JvbGwgdGFyZ2V0LlxuICpcbiAqIEVsZW1lbnRzIHRoYXQgY29uc3VtZSB0aGlzIGJlaGF2aW9yIGNhbiBvdmVycmlkZSB0aGUgYF9zY3JvbGxIYW5kbGVyYFxuICogbWV0aG9kIHRvIGFkZCBsb2dpYyBvbiB0aGUgc2Nyb2xsIGV2ZW50LlxuICpcbiAqIEBkZW1vIGRlbW8vc2Nyb2xsaW5nLXJlZ2lvbi5odG1sIFNjcm9sbGluZyBSZWdpb25cbiAqIEBkZW1vIGRlbW8vZG9jdW1lbnQuaHRtbCBEb2N1bWVudCBFbGVtZW50XG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uU2Nyb2xsVGFyZ2V0QmVoYXZpb3IgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBoYW5kbGUgdGhlIHNjcm9sbCBldmVudFxuICAgICAqIG9uIHRoZSBiZWhhbGYgb2YgdGhlIGN1cnJlbnQgZWxlbWVudC4gVGhpcyBpcyB0eXBpY2FsbHkgYSByZWZlcmVuY2UgdG8gYW5cbiAgICAgKmVsZW1lbnQsIGJ1dCB0aGVyZSBhcmUgYSBmZXcgbW9yZSBwb3NpYmlsaXRpZXM6XG4gICAgICpcbiAgICAgKiAjIyMgRWxlbWVudHMgaWRcbiAgICAgKlxuICAgICAqYGBgaHRtbFxuICAgICAqIDxkaXYgaWQ9XCJzY3JvbGxhYmxlLWVsZW1lbnRcIiBzdHlsZT1cIm92ZXJmbG93OiBhdXRvO1wiPlxuICAgICAqICA8eC1lbGVtZW50IHNjcm9sbC10YXJnZXQ9XCJzY3JvbGxhYmxlLWVsZW1lbnRcIj5cbiAgICAgKiAgICA8IS0tIENvbnRlbnQtLT5cbiAgICAgKiAgPC94LWVsZW1lbnQ+XG4gICAgICogPC9kaXY+XG4gICAgICpgYGBcbiAgICAgKiBJbiB0aGlzIGNhc2UsIHRoZSBgc2Nyb2xsVGFyZ2V0YCB3aWxsIHBvaW50IHRvIHRoZSBvdXRlciBkaXYgZWxlbWVudC5cbiAgICAgKlxuICAgICAqICMjIyBEb2N1bWVudCBzY3JvbGxpbmdcbiAgICAgKlxuICAgICAqIEZvciBkb2N1bWVudCBzY3JvbGxpbmcsIHlvdSBjYW4gdXNlIHRoZSByZXNlcnZlZCB3b3JkIGBkb2N1bWVudGA6XG4gICAgICpcbiAgICAgKmBgYGh0bWxcbiAgICAgKiA8eC1lbGVtZW50IHNjcm9sbC10YXJnZXQ9XCJkb2N1bWVudFwiPlxuICAgICAqICAgPCEtLSBDb250ZW50IC0tPlxuICAgICAqIDwveC1lbGVtZW50PlxuICAgICAqYGBgXG4gICAgICpcbiAgICAgKiAjIyMgRWxlbWVudHMgcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKmBgYGpzXG4gICAgICogYXBwSGVhZGVyLnNjcm9sbFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxhYmxlLWVsZW1lbnQnKTtcbiAgICAgKmBgYFxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBkZWZhdWx0IGRvY3VtZW50XG4gICAgICovXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICB0eXBlOiBIVE1MRWxlbWVudCxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTY3JvbGxUYXJnZXQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydfc2Nyb2xsVGFyZ2V0Q2hhbmdlZChzY3JvbGxUYXJnZXQsIGlzQXR0YWNoZWQpJ10sXG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGV2ZW50IGxpc3RlbmVyIHNob3VsZCBiZSBpbnN0YWxsZWQuXG4gICAqL1xuICBfc2hvdWxkSGF2ZUxpc3RlbmVyOiB0cnVlLFxuXG4gIF9zY3JvbGxUYXJnZXRDaGFuZ2VkOiBmdW5jdGlvbihzY3JvbGxUYXJnZXQsIGlzQXR0YWNoZWQpIHtcbiAgICB2YXIgZXZlbnRUYXJnZXQ7XG5cbiAgICBpZiAodGhpcy5fb2xkU2Nyb2xsVGFyZ2V0KSB7XG4gICAgICB0aGlzLl90b2dnbGVTY3JvbGxMaXN0ZW5lcihmYWxzZSwgdGhpcy5fb2xkU2Nyb2xsVGFyZ2V0KTtcbiAgICAgIHRoaXMuX29sZFNjcm9sbFRhcmdldCA9IG51bGw7XG4gICAgfVxuICAgIGlmICghaXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGVsZW1lbnQgaWQgcmVmZXJlbmNlc1xuICAgIGlmIChzY3JvbGxUYXJnZXQgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0ID0gdGhpcy5fZG9jO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2Nyb2xsVGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGRvbUhvc3QgPSB0aGlzLmRvbUhvc3Q7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0ID0gZG9tSG9zdCAmJiBkb21Ib3N0LiQgP1xuICAgICAgICAgIGRvbUhvc3QuJFtzY3JvbGxUYXJnZXRdIDpcbiAgICAgICAgICBkb20odGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKCcjJyArIHNjcm9sbFRhcmdldCk7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgdGhpcy5fb2xkU2Nyb2xsVGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0O1xuICAgICAgdGhpcy5fdG9nZ2xlU2Nyb2xsTGlzdGVuZXIodGhpcy5fc2hvdWxkSGF2ZUxpc3RlbmVyLCBzY3JvbGxUYXJnZXQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUnVucyBvbiBldmVyeSBzY3JvbGwgZXZlbnQuIENvbnN1bWVyIG9mIHRoaXMgYmVoYXZpb3IgbWF5IG92ZXJyaWRlIHRoaXNcbiAgICogbWV0aG9kLlxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcigpIHt9LFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBzY3JvbGwgdGFyZ2V0LiBDb25zdW1lcnMgb2YgdGhpcyBiZWhhdmlvciBtYXkgd2FudCB0byBjdXN0b21pemVcbiAgICogdGhlIGRlZmF1bHQgc2Nyb2xsIHRhcmdldC5cbiAgICpcbiAgICogQHR5cGUge0VsZW1lbnR9XG4gICAqL1xuICBnZXQgX2RlZmF1bHRTY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvYztcbiAgfSxcblxuICAvKipcbiAgICogU2hvcnRjdXQgZm9yIHRoZSBkb2N1bWVudCBlbGVtZW50XG4gICAqXG4gICAqIEB0eXBlIHtFbGVtZW50fVxuICAgKi9cbiAgZ2V0IF9kb2MoKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IGlzIHNjcm9sbGVkXG4gICAqIHVwd2FyZC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBfc2Nyb2xsVG9wKCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93LnBhZ2VZT2Zmc2V0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGF0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgdG8gdGhlXG4gICAqIGxlZnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgX3Njcm9sbExlZnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cucGFnZVhPZmZzZXQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGF0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWRcbiAgICogdXB3YXJkLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc2V0IF9zY3JvbGxUb3AodG9wKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cucGFnZVhPZmZzZXQsIHRvcCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IHRvcDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IGlzIHNjcm9sbGVkIHRvIHRoZVxuICAgKiBsZWZ0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc2V0IF9zY3JvbGxMZWZ0KGxlZnQpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKGxlZnQsIHdpbmRvdy5wYWdlWU9mZnNldCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgY29udGVudCB0byBhIHBhcnRpY3VsYXIgcGxhY2UuXG4gICAqXG4gICAqIEBtZXRob2Qgc2Nyb2xsXG4gICAqIEBwYXJhbSB7bnVtYmVyfCF7bGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn19IGxlZnRPck9wdGlvbnMgVGhlIGxlZnQgcG9zaXRpb24gb3Igc2Nyb2xsIG9wdGlvbnNcbiAgICogQHBhcmFtIHtudW1iZXI9fSB0b3AgVGhlIHRvcCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2Nyb2xsOiBmdW5jdGlvbihsZWZ0T3JPcHRpb25zLCB0b3ApIHtcbiAgICB2YXIgbGVmdDtcblxuICAgIGlmICh0eXBlb2YgbGVmdE9yT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxlZnQgPSBsZWZ0T3JPcHRpb25zLmxlZnQ7XG4gICAgICB0b3AgPSBsZWZ0T3JPcHRpb25zLnRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IGxlZnRPck9wdGlvbnM7XG4gICAgfVxuXG4gICAgbGVmdCA9IGxlZnQgfHwgMDtcbiAgICB0b3AgPSB0b3AgfHwgMDtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKGxlZnQsIHRvcCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gdG9wO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbCB0YXJnZXQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgX3Njcm9sbFRhcmdldFdpZHRoKCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93LmlubmVyV2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGhlaWdodCBvZiB0aGUgc2Nyb2xsIHRhcmdldC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBfc2Nyb2xsVGFyZ2V0SGVpZ2h0KCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93LmlubmVySGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzY3JvbGwgdGFyZ2V0IGlzIGEgdmFsaWQgSFRNTEVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBfaXNWYWxpZFNjcm9sbFRhcmdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH0sXG5cbiAgX3RvZ2dsZVNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbih5ZXMsIHNjcm9sbFRhcmdldCkge1xuICAgIHZhciBldmVudFRhcmdldCA9IHNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93IDogc2Nyb2xsVGFyZ2V0O1xuICAgIGlmICh5ZXMpIHtcbiAgICAgIGlmICghdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlciA9IHRoaXMuX3Njcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlcikge1xuICAgICAgICBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHllcyBUcnVlIHRvIGFkZCB0aGUgZXZlbnQsIEZhbHNlIHRvIHJlbW92ZSBpdC5cbiAgICovXG4gIHRvZ2dsZVNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbih5ZXMpIHtcbiAgICB0aGlzLl9zaG91bGRIYXZlTGlzdGVuZXIgPSB5ZXM7XG4gICAgdGhpcy5fdG9nZ2xlU2Nyb2xsTGlzdGVuZXIoeWVzLCB0aGlzLnNjcm9sbFRhcmdldCk7XG4gIH1cblxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZOQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFxRkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9DQTtBQWtEQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWJBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW5iQTs7Ozs7Ozs7Ozs7O0FDalBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBO0FBSUE7QUFFQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBckRBO0FBNkRBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQW5TQTs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FBV0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFyQ0E7QUE2Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFQQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-integrations"],{

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

/***/ "./node_modules/@polymer/app-route/app-route.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/app-route/app-route.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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
`app-route` is an element that enables declarative, self-describing routing
for a web app.

In its typical usage, a `app-route` element consumes an object that describes
some state about the current route, via the `route` property. It then parses
that state using the `pattern` property, and produces two artifacts: some `data`
related to the `route`, and a `tail` that contains the rest of the `route` that
did not match.

Here is a basic example, when used with `app-location`:

    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{data}}"
        tail="{{tail}}">
    </app-route>

In the above example, the `app-location` produces a `route` value. Then, the
`route.path` property is matched by comparing it to the `pattern` property. If
the `pattern` property matches `route.path`, the `app-route` will set or update
its `data` property with an object whose properties correspond to the parameters
in `pattern`. So, in the above example, if `route.path` was `'/about'`, the
value of `data` would be `{"page": "about"}`.

The `tail` property represents the remaining part of the route state after the
`pattern` has been applied to a matching `route`.

Here is another example, where `tail` is used:

    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subroute}}">
    </app-route>
    <app-route
        route="{{subroute}}"
        pattern="/:id"
        data="{{subrouteData}}">
    </app-route>

In the above example, there are two `app-route` elements. The first
`app-route` consumes a `route`. When the `route` is matched, the first
`app-route` also produces `routeData` from its `data`, and `subroute` from
its `tail`. The second `app-route` consumes the `subroute`, and when it
matches, it produces an object called `subrouteData` from its `data`.

So, when `route.path` is `'/about'`, the `routeData` object will look like
this: `{ page: 'about' }`

And `subrouteData` will be null. However, if `route.path` changes to
`'/article/123'`, the `routeData` object will look like this:
`{ page: 'article' }`

And the `subrouteData` will look like this: `{ id: '123' }`

`app-route` is responsive to bi-directional changes to the `data` objects
they produce. So, if `routeData.page` changed from `'article'` to `'about'`,
the `app-route` will update `route.path`. This in-turn will update the
`app-location`, and cause the global location bar to change its value.

@element app-route
@demo demo/index.html
@demo demo/data-loading-demo.html
@demo demo/simple-demo.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'app-route',
  properties: {
    /**
     * The URL component managed by this element.
     */
    route: {
      type: Object,
      notify: true
    },

    /**
     * The pattern of slash-separated segments to match `route.path` against.
     *
     * For example the pattern "/foo" will match "/foo" or "/foo/bar"
     * but not "/foobar".
     *
     * Path segments like `/:named` are mapped to properties on the `data`
     * object.
     */
    pattern: {
      type: String
    },

    /**
     * The parameterized values that are extracted from the route as
     * described by `pattern`.
     */
    data: {
      type: Object,
      value: function () {
        return {};
      },
      notify: true
    },

    /**
     * Auto activate route if path empty
     */
    autoActivate: {
      type: Boolean,
      value: false
    },
    _queryParamsUpdating: {
      type: Boolean,
      value: false
    },

    /**
     * @type {?Object}
     */
    queryParams: {
      type: Object,
      value: function () {
        return {};
      },
      notify: true
    },

    /**
     * The part of `route.path` NOT consumed by `pattern`.
     */
    tail: {
      type: Object,
      value: function () {
        return {
          path: null,
          prefix: null,
          __queryParams: null
        };
      },
      notify: true
    },

    /**
     * Whether the current route is active. True if `route.path` matches the
     * `pattern`, false otherwise.
     */
    active: {
      type: Boolean,
      notify: true,
      readOnly: true
    },

    /**
     * @type {?string}
     */
    _matched: {
      type: String,
      value: ''
    }
  },
  observers: ['__tryToMatch(route.path, pattern)', '__updatePathOnDataChange(data.*)', '__tailPathChanged(tail.path)', '__routeQueryParamsChanged(route.__queryParams)', '__tailQueryParamsChanged(tail.__queryParams)', '__queryParamsChanged(queryParams.*)'],
  created: function () {
    this.linkPaths('route.__queryParams', 'tail.__queryParams');
    this.linkPaths('tail.__queryParams', 'route.__queryParams');
  },

  /**
   * Deal with the query params object being assigned to wholesale.
   */
  __routeQueryParamsChanged: function (queryParams) {
    if (queryParams && this.tail) {
      if (this.tail.__queryParams !== queryParams) {
        this.set('tail.__queryParams', queryParams);
      }

      if (!this.active || this._queryParamsUpdating) {
        return;
      } // Copy queryParams and track whether there are any differences compared
      // to the existing query params.


      var copyOfQueryParams = {};
      var anythingChanged = false;

      for (var key in queryParams) {
        copyOfQueryParams[key] = queryParams[key];

        if (anythingChanged || !this.queryParams || queryParams[key] !== this.queryParams[key]) {
          anythingChanged = true;
        }
      } // Need to check whether any keys were deleted


      for (var key in this.queryParams) {
        if (anythingChanged || !(key in queryParams)) {
          anythingChanged = true;
          break;
        }
      }

      if (!anythingChanged) {
        return;
      }

      this._queryParamsUpdating = true;
      this.set('queryParams', copyOfQueryParams);
      this._queryParamsUpdating = false;
    }
  },
  __tailQueryParamsChanged: function (queryParams) {
    if (queryParams && this.route && this.route.__queryParams != queryParams) {
      this.set('route.__queryParams', queryParams);
    }
  },
  __queryParamsChanged: function (changes) {
    if (!this.active || this._queryParamsUpdating) {
      return;
    }

    this.set('route.__' + changes.path, changes.value);
  },
  __resetProperties: function () {
    this._setActive(false);

    this._matched = null;
  },
  __tryToMatch: function () {
    if (!this.route) {
      return;
    }

    var path = this.route.path;
    var pattern = this.pattern;

    if (this.autoActivate && path === '') {
      path = '/';
    }

    if (!pattern) {
      return;
    }

    if (!path) {
      this.__resetProperties();

      return;
    }

    var remainingPieces = path.split('/');
    var patternPieces = pattern.split('/');
    var matched = [];
    var namedMatches = {};

    for (var i = 0; i < patternPieces.length; i++) {
      var patternPiece = patternPieces[i];

      if (!patternPiece && patternPiece !== '') {
        break;
      }

      var pathPiece = remainingPieces.shift(); // We don't match this path.

      if (!pathPiece && pathPiece !== '') {
        this.__resetProperties();

        return;
      }

      matched.push(pathPiece);

      if (patternPiece.charAt(0) == ':') {
        namedMatches[patternPiece.slice(1)] = pathPiece;
      } else if (patternPiece !== pathPiece) {
        this.__resetProperties();

        return;
      }
    }

    this._matched = matched.join('/'); // Properties that must be updated atomically.

    var propertyUpdates = {}; // this.active

    if (!this.active) {
      propertyUpdates.active = true;
    } // this.tail


    var tailPrefix = this.route.prefix + this._matched;
    var tailPath = remainingPieces.join('/');

    if (remainingPieces.length > 0) {
      tailPath = '/' + tailPath;
    }

    if (!this.tail || this.tail.prefix !== tailPrefix || this.tail.path !== tailPath) {
      propertyUpdates.tail = {
        prefix: tailPrefix,
        path: tailPath,
        __queryParams: this.route.__queryParams
      };
    } // this.data


    propertyUpdates.data = namedMatches;
    this._dataInUrl = {};

    for (var key in namedMatches) {
      this._dataInUrl[key] = namedMatches[key];
    }

    if (this.setProperties) {
      // atomic update
      this.setProperties(propertyUpdates, true);
    } else {
      this.__setMulti(propertyUpdates);
    }
  },
  __tailPathChanged: function (path) {
    if (!this.active) {
      return;
    }

    var tailPath = path;
    var newPath = this._matched;

    if (tailPath) {
      if (tailPath.charAt(0) !== '/') {
        tailPath = '/' + tailPath;
      }

      newPath += tailPath;
    }

    this.set('route.path', newPath);
  },
  __updatePathOnDataChange: function () {
    if (!this.route || !this.active) {
      return;
    }

    var newPath = this.__getLink({});

    var oldPath = this.__getLink(this._dataInUrl);

    if (newPath === oldPath) {
      return;
    }

    this.set('route.path', newPath);
  },
  __getLink: function (overrideValues) {
    var values = {
      tail: null
    };

    for (var key in this.data) {
      values[key] = this.data[key];
    }

    for (var key in overrideValues) {
      values[key] = overrideValues[key];
    }

    var patternPieces = this.pattern.split('/');
    var interp = patternPieces.map(function (value) {
      if (value[0] == ':') {
        value = values[value.slice(1)];
      }

      return value;
    }, this);

    if (values.tail && values.tail.path) {
      if (interp.length > 0 && values.tail.path.charAt(0) === '/') {
        interp.push(values.tail.path.slice(1));
      } else {
        interp.push(values.tail.path);
      }
    }

    return interp.join('/');
  },
  __setMulti: function (setObj) {
    // HACK(rictic): skirting around 1.0's lack of a setMulti by poking at
    //     internal data structures. I would not advise that you copy this
    //     example.
    //
    //     In the future this will be a feature of Polymer itself.
    //     See: https://github.com/Polymer/polymer/issues/3640
    //
    //     Hacking around with private methods like this is juggling footguns,
    //     and is likely to have unexpected and unsupported rough edges.
    //
    //     Be ye so warned.
    for (var property in setObj) {
      this._propertySetter(property, setObj[property]);
    } // notify in a specific order


    if (setObj.data !== undefined) {
      this._pathEffector('data', this.data);

      this._notifyChange('data');
    }

    if (setObj.active !== undefined) {
      this._pathEffector('active', this.active);

      this._notifyChange('active');
    }

    if (setObj.tail !== undefined) {
      this._pathEffector('tail', this.tail);

      this._notifyChange('tail');
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctaW50ZWdyYXRpb25zLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9td2MtcmlwcGxlLWJhc2UudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtcmlwcGxlLWNzcy50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1yaXBwbGUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtodG1sLCBMaXRFbGVtZW50LCBwcm9wZXJ0eX0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHtjbGFzc01hcH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5pbXBvcnQge3JpcHBsZSwgUmlwcGxlT3B0aW9uc30gZnJvbSAnLi9yaXBwbGUtZGlyZWN0aXZlLmpzJztcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgcHJpbWFyeSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGFjdGl2ZTogYm9vbGVhbnx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgYWNjZW50ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgdW5ib3VuZGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe2F0dHJpYnV0ZTogZmFsc2V9KSBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25Ob2RlOiBIVE1MRWxlbWVudCA9IHRoaXM7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25Ob2RlID09PSB0aGlzKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQgfCBTaGFkb3dSb290IHwgbnVsbDtcbiAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uTm9kZSA9IHBhcmVudDtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgcGFyZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCAmJiBwYXJlbnQuaG9zdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25Ob2RlID0gcGFyZW50Lmhvc3Q7XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICAvLyBUT0RPKHNvcnZlbGwpICNjc3M6IHNpemluZy5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ21kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeSc6IHRoaXMucHJpbWFyeSxcbiAgICAgICdtZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudCc6IHRoaXMuYWNjZW50LFxuICAgIH07XG4gICAgY29uc3Qge2Rpc2FibGVkLCB1bmJvdW5kZWQsIGFjdGl2ZSwgaW50ZXJhY3Rpb25Ob2RlfSA9IHRoaXM7XG4gICAgY29uc3QgcmlwcGxlT3B0aW9uczogUmlwcGxlT3B0aW9ucyA9IHtkaXNhYmxlZCwgdW5ib3VuZGVkLCBpbnRlcmFjdGlvbk5vZGV9O1xuICAgIGlmIChhY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlT3B0aW9ucy5hY3RpdmUgPSBhY3RpdmU7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiAucmlwcGxlPVwiJHtyaXBwbGUocmlwcGxlT3B0aW9ucyl9XCJcbiAgICAgICAgICBjbGFzcz1cIm1kYy1yaXBwbGUtc3VyZmFjZSAke2NsYXNzTWFwKGNsYXNzZXMpfVwiPjwvZGl2PmA7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3NzfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzc2BAa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctcmFkaXVzLWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQsIDApKSBzY2FsZSgxKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjB9dG97b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXR7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9dG97b3BhY2l0eTowfX0ubWRjLXJpcHBsZS1zdXJmYWNley0tbWRjLXJpcHBsZS1mZy1zaXplOiAwOy0tbWRjLXJpcHBsZS1sZWZ0OiAwOy0tbWRjLXJpcHBsZS10b3A6IDA7LS1tZGMtcmlwcGxlLWZnLXNjYWxlOiAxOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kOiAwOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQ6IDA7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCk7cG9zaXRpb246cmVsYXRpdmU7b3V0bGluZTpub25lO292ZXJmbG93OmhpZGRlbn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7Y29udGVudDpcIlwifS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZXt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4OjF9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjpiZWZvcmV7dHJhbnNmb3JtOnNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3RvcDowO2xlZnQ6MDt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctcmFkaXVzLWluIDIyNW1zIGZvcndhcmRzLG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbiA3NW1zIGZvcndhcmRzfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0IDE1MG1zO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1kYy1yaXBwbGUtc3VyZmFjZTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOjphZnRlcnt0b3A6Y2FsYyg1MCUgLSAxMDAlKTtsZWZ0OmNhbGMoNTAlIC0gMTAwJSk7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXXtvdmVyZmxvdzp2aXNpYmxlfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF06OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdOjphZnRlcnt0b3A6Y2FsYyg1MCUgLSA1MCUpO2xlZnQ6Y2FsYyg1MCUgLSA1MCUpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIGNhbGMoNTAlIC0gNTAlKSk7bGVmdDp2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIGNhbGMoNTAlIC0gNTAlKSk7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzYyMDBlZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1wcmltYXJ5LCAjNjIwMGVlKX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZXtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowfWA7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2N1c3RvbUVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IHtSaXBwbGVCYXNlfSBmcm9tICcuL213Yy1yaXBwbGUtYmFzZS5qcyc7XG5pbXBvcnQge3N0eWxlfSBmcm9tICcuL213Yy1yaXBwbGUtY3NzLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXdjLXJpcHBsZSc6IFJpcHBsZTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnbXdjLXJpcHBsZScpXG5leHBvcnQgY2xhc3MgUmlwcGxlIGV4dGVuZHMgUmlwcGxlQmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBzdHlsZTtcbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5cbi8qKlxuYGFwcC1yb3V0ZWAgaXMgYW4gZWxlbWVudCB0aGF0IGVuYWJsZXMgZGVjbGFyYXRpdmUsIHNlbGYtZGVzY3JpYmluZyByb3V0aW5nXG5mb3IgYSB3ZWIgYXBwLlxuXG5JbiBpdHMgdHlwaWNhbCB1c2FnZSwgYSBgYXBwLXJvdXRlYCBlbGVtZW50IGNvbnN1bWVzIGFuIG9iamVjdCB0aGF0IGRlc2NyaWJlc1xuc29tZSBzdGF0ZSBhYm91dCB0aGUgY3VycmVudCByb3V0ZSwgdmlhIHRoZSBgcm91dGVgIHByb3BlcnR5LiBJdCB0aGVuIHBhcnNlc1xudGhhdCBzdGF0ZSB1c2luZyB0aGUgYHBhdHRlcm5gIHByb3BlcnR5LCBhbmQgcHJvZHVjZXMgdHdvIGFydGlmYWN0czogc29tZSBgZGF0YWBcbnJlbGF0ZWQgdG8gdGhlIGByb3V0ZWAsIGFuZCBhIGB0YWlsYCB0aGF0IGNvbnRhaW5zIHRoZSByZXN0IG9mIHRoZSBgcm91dGVgIHRoYXRcbmRpZCBub3QgbWF0Y2guXG5cbkhlcmUgaXMgYSBiYXNpYyBleGFtcGxlLCB3aGVuIHVzZWQgd2l0aCBgYXBwLWxvY2F0aW9uYDpcblxuICAgIDxhcHAtbG9jYXRpb24gcm91dGU9XCJ7e3JvdXRlfX1cIj48L2FwcC1sb2NhdGlvbj5cbiAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwie3tyb3V0ZX19XCJcbiAgICAgICAgcGF0dGVybj1cIi86cGFnZVwiXG4gICAgICAgIGRhdGE9XCJ7e2RhdGF9fVwiXG4gICAgICAgIHRhaWw9XCJ7e3RhaWx9fVwiPlxuICAgIDwvYXBwLXJvdXRlPlxuXG5JbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIGBhcHAtbG9jYXRpb25gIHByb2R1Y2VzIGEgYHJvdXRlYCB2YWx1ZS4gVGhlbiwgdGhlXG5gcm91dGUucGF0aGAgcHJvcGVydHkgaXMgbWF0Y2hlZCBieSBjb21wYXJpbmcgaXQgdG8gdGhlIGBwYXR0ZXJuYCBwcm9wZXJ0eS4gSWZcbnRoZSBgcGF0dGVybmAgcHJvcGVydHkgbWF0Y2hlcyBgcm91dGUucGF0aGAsIHRoZSBgYXBwLXJvdXRlYCB3aWxsIHNldCBvciB1cGRhdGVcbml0cyBgZGF0YWAgcHJvcGVydHkgd2l0aCBhbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBjb3JyZXNwb25kIHRvIHRoZSBwYXJhbWV0ZXJzXG5pbiBgcGF0dGVybmAuIFNvLCBpbiB0aGUgYWJvdmUgZXhhbXBsZSwgaWYgYHJvdXRlLnBhdGhgIHdhcyBgJy9hYm91dCdgLCB0aGVcbnZhbHVlIG9mIGBkYXRhYCB3b3VsZCBiZSBge1wicGFnZVwiOiBcImFib3V0XCJ9YC5cblxuVGhlIGB0YWlsYCBwcm9wZXJ0eSByZXByZXNlbnRzIHRoZSByZW1haW5pbmcgcGFydCBvZiB0aGUgcm91dGUgc3RhdGUgYWZ0ZXIgdGhlXG5gcGF0dGVybmAgaGFzIGJlZW4gYXBwbGllZCB0byBhIG1hdGNoaW5nIGByb3V0ZWAuXG5cbkhlcmUgaXMgYW5vdGhlciBleGFtcGxlLCB3aGVyZSBgdGFpbGAgaXMgdXNlZDpcblxuICAgIDxhcHAtbG9jYXRpb24gcm91dGU9XCJ7e3JvdXRlfX1cIj48L2FwcC1sb2NhdGlvbj5cbiAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwie3tyb3V0ZX19XCJcbiAgICAgICAgcGF0dGVybj1cIi86cGFnZVwiXG4gICAgICAgIGRhdGE9XCJ7e3JvdXRlRGF0YX19XCJcbiAgICAgICAgdGFpbD1cInt7c3Vicm91dGV9fVwiPlxuICAgIDwvYXBwLXJvdXRlPlxuICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJ7e3N1YnJvdXRlfX1cIlxuICAgICAgICBwYXR0ZXJuPVwiLzppZFwiXG4gICAgICAgIGRhdGE9XCJ7e3N1YnJvdXRlRGF0YX19XCI+XG4gICAgPC9hcHAtcm91dGU+XG5cbkluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGVyZSBhcmUgdHdvIGBhcHAtcm91dGVgIGVsZW1lbnRzLiBUaGUgZmlyc3RcbmBhcHAtcm91dGVgIGNvbnN1bWVzIGEgYHJvdXRlYC4gV2hlbiB0aGUgYHJvdXRlYCBpcyBtYXRjaGVkLCB0aGUgZmlyc3RcbmBhcHAtcm91dGVgIGFsc28gcHJvZHVjZXMgYHJvdXRlRGF0YWAgZnJvbSBpdHMgYGRhdGFgLCBhbmQgYHN1YnJvdXRlYCBmcm9tXG5pdHMgYHRhaWxgLiBUaGUgc2Vjb25kIGBhcHAtcm91dGVgIGNvbnN1bWVzIHRoZSBgc3Vicm91dGVgLCBhbmQgd2hlbiBpdFxubWF0Y2hlcywgaXQgcHJvZHVjZXMgYW4gb2JqZWN0IGNhbGxlZCBgc3Vicm91dGVEYXRhYCBmcm9tIGl0cyBgZGF0YWAuXG5cblNvLCB3aGVuIGByb3V0ZS5wYXRoYCBpcyBgJy9hYm91dCdgLCB0aGUgYHJvdXRlRGF0YWAgb2JqZWN0IHdpbGwgbG9vayBsaWtlXG50aGlzOiBgeyBwYWdlOiAnYWJvdXQnIH1gXG5cbkFuZCBgc3Vicm91dGVEYXRhYCB3aWxsIGJlIG51bGwuIEhvd2V2ZXIsIGlmIGByb3V0ZS5wYXRoYCBjaGFuZ2VzIHRvXG5gJy9hcnRpY2xlLzEyMydgLCB0aGUgYHJvdXRlRGF0YWAgb2JqZWN0IHdpbGwgbG9vayBsaWtlIHRoaXM6XG5geyBwYWdlOiAnYXJ0aWNsZScgfWBcblxuQW5kIHRoZSBgc3Vicm91dGVEYXRhYCB3aWxsIGxvb2sgbGlrZSB0aGlzOiBgeyBpZDogJzEyMycgfWBcblxuYGFwcC1yb3V0ZWAgaXMgcmVzcG9uc2l2ZSB0byBiaS1kaXJlY3Rpb25hbCBjaGFuZ2VzIHRvIHRoZSBgZGF0YWAgb2JqZWN0c1xudGhleSBwcm9kdWNlLiBTbywgaWYgYHJvdXRlRGF0YS5wYWdlYCBjaGFuZ2VkIGZyb20gYCdhcnRpY2xlJ2AgdG8gYCdhYm91dCdgLFxudGhlIGBhcHAtcm91dGVgIHdpbGwgdXBkYXRlIGByb3V0ZS5wYXRoYC4gVGhpcyBpbi10dXJuIHdpbGwgdXBkYXRlIHRoZVxuYGFwcC1sb2NhdGlvbmAsIGFuZCBjYXVzZSB0aGUgZ2xvYmFsIGxvY2F0aW9uIGJhciB0byBjaGFuZ2UgaXRzIHZhbHVlLlxuXG5AZWxlbWVudCBhcHAtcm91dGVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGRlbW8gZGVtby9kYXRhLWxvYWRpbmctZGVtby5odG1sXG5AZGVtbyBkZW1vL3NpbXBsZS1kZW1vLmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgaXM6ICdhcHAtcm91dGUnLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgVVJMIGNvbXBvbmVudCBtYW5hZ2VkIGJ5IHRoaXMgZWxlbWVudC5cbiAgICAgKi9cbiAgICByb3V0ZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGF0dGVybiBvZiBzbGFzaC1zZXBhcmF0ZWQgc2VnbWVudHMgdG8gbWF0Y2ggYHJvdXRlLnBhdGhgIGFnYWluc3QuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZSB0aGUgcGF0dGVybiBcIi9mb29cIiB3aWxsIG1hdGNoIFwiL2Zvb1wiIG9yIFwiL2Zvby9iYXJcIlxuICAgICAqIGJ1dCBub3QgXCIvZm9vYmFyXCIuXG4gICAgICpcbiAgICAgKiBQYXRoIHNlZ21lbnRzIGxpa2UgYC86bmFtZWRgIGFyZSBtYXBwZWQgdG8gcHJvcGVydGllcyBvbiB0aGUgYGRhdGFgXG4gICAgICogb2JqZWN0LlxuICAgICAqL1xuICAgIHBhdHRlcm46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBhcmFtZXRlcml6ZWQgdmFsdWVzIHRoYXQgYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSByb3V0ZSBhc1xuICAgICAqIGRlc2NyaWJlZCBieSBgcGF0dGVybmAuXG4gICAgICovXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGFjdGl2YXRlIHJvdXRlIGlmIHBhdGggZW1wdHlcbiAgICAgKi9cbiAgICBhdXRvQWN0aXZhdGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgfSxcblxuICAgIF9xdWVyeVBhcmFtc1VwZGF0aW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICAgKi9cbiAgICBxdWVyeVBhcmFtczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCBvZiBgcm91dGUucGF0aGAgTk9UIGNvbnN1bWVkIGJ5IGBwYXR0ZXJuYC5cbiAgICAgKi9cbiAgICB0YWlsOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgICAgX19xdWVyeVBhcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgcm91dGUgaXMgYWN0aXZlLiBUcnVlIGlmIGByb3V0ZS5wYXRoYCBtYXRjaGVzIHRoZVxuICAgICAqIGBwYXR0ZXJuYCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICAgKi9cbiAgICBfbWF0Y2hlZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnLFxuICAgIH1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFtcbiAgICAnX190cnlUb01hdGNoKHJvdXRlLnBhdGgsIHBhdHRlcm4pJyxcbiAgICAnX191cGRhdGVQYXRoT25EYXRhQ2hhbmdlKGRhdGEuKiknLFxuICAgICdfX3RhaWxQYXRoQ2hhbmdlZCh0YWlsLnBhdGgpJyxcbiAgICAnX19yb3V0ZVF1ZXJ5UGFyYW1zQ2hhbmdlZChyb3V0ZS5fX3F1ZXJ5UGFyYW1zKScsXG4gICAgJ19fdGFpbFF1ZXJ5UGFyYW1zQ2hhbmdlZCh0YWlsLl9fcXVlcnlQYXJhbXMpJyxcbiAgICAnX19xdWVyeVBhcmFtc0NoYW5nZWQocXVlcnlQYXJhbXMuKiknXG4gIF0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5saW5rUGF0aHMoJ3JvdXRlLl9fcXVlcnlQYXJhbXMnLCAndGFpbC5fX3F1ZXJ5UGFyYW1zJyk7XG4gICAgdGhpcy5saW5rUGF0aHMoJ3RhaWwuX19xdWVyeVBhcmFtcycsICdyb3V0ZS5fX3F1ZXJ5UGFyYW1zJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlYWwgd2l0aCB0aGUgcXVlcnkgcGFyYW1zIG9iamVjdCBiZWluZyBhc3NpZ25lZCB0byB3aG9sZXNhbGUuXG4gICAqL1xuICBfX3JvdXRlUXVlcnlQYXJhbXNDaGFuZ2VkOiBmdW5jdGlvbihxdWVyeVBhcmFtcykge1xuICAgIGlmIChxdWVyeVBhcmFtcyAmJiB0aGlzLnRhaWwpIHtcbiAgICAgIGlmICh0aGlzLnRhaWwuX19xdWVyeVBhcmFtcyAhPT0gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3RhaWwuX19xdWVyeVBhcmFtcycsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCB0aGlzLl9xdWVyeVBhcmFtc1VwZGF0aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ29weSBxdWVyeVBhcmFtcyBhbmQgdHJhY2sgd2hldGhlciB0aGVyZSBhcmUgYW55IGRpZmZlcmVuY2VzIGNvbXBhcmVkXG4gICAgICAvLyB0byB0aGUgZXhpc3RpbmcgcXVlcnkgcGFyYW1zLlxuICAgICAgdmFyIGNvcHlPZlF1ZXJ5UGFyYW1zID0ge307XG4gICAgICB2YXIgYW55dGhpbmdDaGFuZ2VkID0gZmFsc2U7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgY29weU9mUXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgIGlmIChhbnl0aGluZ0NoYW5nZWQgfHwgIXRoaXMucXVlcnlQYXJhbXMgfHxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gIT09IHRoaXMucXVlcnlQYXJhbXNba2V5XSkge1xuICAgICAgICAgIGFueXRoaW5nQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIE5lZWQgdG8gY2hlY2sgd2hldGhlciBhbnkga2V5cyB3ZXJlIGRlbGV0ZWRcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGlmIChhbnl0aGluZ0NoYW5nZWQgfHwgIShrZXkgaW4gcXVlcnlQYXJhbXMpKSB7XG4gICAgICAgICAgYW55dGhpbmdDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFueXRoaW5nQ2hhbmdlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9xdWVyeVBhcmFtc1VwZGF0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0KCdxdWVyeVBhcmFtcycsIGNvcHlPZlF1ZXJ5UGFyYW1zKTtcbiAgICAgIHRoaXMuX3F1ZXJ5UGFyYW1zVXBkYXRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgX190YWlsUXVlcnlQYXJhbXNDaGFuZ2VkOiBmdW5jdGlvbihxdWVyeVBhcmFtcykge1xuICAgIGlmIChxdWVyeVBhcmFtcyAmJiB0aGlzLnJvdXRlICYmIHRoaXMucm91dGUuX19xdWVyeVBhcmFtcyAhPSBxdWVyeVBhcmFtcykge1xuICAgICAgdGhpcy5zZXQoJ3JvdXRlLl9fcXVlcnlQYXJhbXMnLCBxdWVyeVBhcmFtcyk7XG4gICAgfVxuICB9LFxuXG4gIF9fcXVlcnlQYXJhbXNDaGFuZ2VkOiBmdW5jdGlvbihjaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCB0aGlzLl9xdWVyeVBhcmFtc1VwZGF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXQoJ3JvdXRlLl9fJyArIGNoYW5nZXMucGF0aCwgY2hhbmdlcy52YWx1ZSk7XG4gIH0sXG5cbiAgX19yZXNldFByb3BlcnRpZXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5fbWF0Y2hlZCA9IG51bGw7XG4gIH0sXG5cbiAgX190cnlUb01hdGNoOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucm91dGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGF0aCA9IHRoaXMucm91dGUucGF0aDtcbiAgICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVybjtcblxuICAgIGlmICh0aGlzLmF1dG9BY3RpdmF0ZSAmJiBwYXRoID09PSAnJykge1xuICAgICAgcGF0aCA9ICcvJztcbiAgICB9XG5cbiAgICBpZiAoIXBhdHRlcm4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHRoaXMuX19yZXNldFByb3BlcnRpZXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmVtYWluaW5nUGllY2VzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgIHZhciBwYXR0ZXJuUGllY2VzID0gcGF0dGVybi5zcGxpdCgnLycpO1xuXG4gICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICB2YXIgbmFtZWRNYXRjaGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdHRlcm5QaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXR0ZXJuUGllY2UgPSBwYXR0ZXJuUGllY2VzW2ldO1xuICAgICAgaWYgKCFwYXR0ZXJuUGllY2UgJiYgcGF0dGVyblBpZWNlICE9PSAnJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHZhciBwYXRoUGllY2UgPSByZW1haW5pbmdQaWVjZXMuc2hpZnQoKTtcblxuICAgICAgLy8gV2UgZG9uJ3QgbWF0Y2ggdGhpcyBwYXRoLlxuICAgICAgaWYgKCFwYXRoUGllY2UgJiYgcGF0aFBpZWNlICE9PSAnJykge1xuICAgICAgICB0aGlzLl9fcmVzZXRQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1hdGNoZWQucHVzaChwYXRoUGllY2UpO1xuXG4gICAgICBpZiAocGF0dGVyblBpZWNlLmNoYXJBdCgwKSA9PSAnOicpIHtcbiAgICAgICAgbmFtZWRNYXRjaGVzW3BhdHRlcm5QaWVjZS5zbGljZSgxKV0gPSBwYXRoUGllY2U7XG4gICAgICB9IGVsc2UgaWYgKHBhdHRlcm5QaWVjZSAhPT0gcGF0aFBpZWNlKSB7XG4gICAgICAgIHRoaXMuX19yZXNldFByb3BlcnRpZXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX21hdGNoZWQgPSBtYXRjaGVkLmpvaW4oJy8nKTtcblxuICAgIC8vIFByb3BlcnRpZXMgdGhhdCBtdXN0IGJlIHVwZGF0ZWQgYXRvbWljYWxseS5cbiAgICB2YXIgcHJvcGVydHlVcGRhdGVzID0ge307XG5cbiAgICAvLyB0aGlzLmFjdGl2ZVxuICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgIHByb3BlcnR5VXBkYXRlcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHRoaXMudGFpbFxuICAgIHZhciB0YWlsUHJlZml4ID0gdGhpcy5yb3V0ZS5wcmVmaXggKyB0aGlzLl9tYXRjaGVkO1xuICAgIHZhciB0YWlsUGF0aCA9IHJlbWFpbmluZ1BpZWNlcy5qb2luKCcvJyk7XG4gICAgaWYgKHJlbWFpbmluZ1BpZWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWlsUGF0aCA9ICcvJyArIHRhaWxQYXRoO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudGFpbCB8fCB0aGlzLnRhaWwucHJlZml4ICE9PSB0YWlsUHJlZml4IHx8XG4gICAgICAgIHRoaXMudGFpbC5wYXRoICE9PSB0YWlsUGF0aCkge1xuICAgICAgcHJvcGVydHlVcGRhdGVzLnRhaWwgPSB7XG4gICAgICAgIHByZWZpeDogdGFpbFByZWZpeCxcbiAgICAgICAgcGF0aDogdGFpbFBhdGgsXG4gICAgICAgIF9fcXVlcnlQYXJhbXM6IHRoaXMucm91dGUuX19xdWVyeVBhcmFtc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmRhdGFcbiAgICBwcm9wZXJ0eVVwZGF0ZXMuZGF0YSA9IG5hbWVkTWF0Y2hlcztcbiAgICB0aGlzLl9kYXRhSW5VcmwgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmFtZWRNYXRjaGVzKSB7XG4gICAgICB0aGlzLl9kYXRhSW5Vcmxba2V5XSA9IG5hbWVkTWF0Y2hlc1trZXldO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldFByb3BlcnRpZXMpIHtcbiAgICAgIC8vIGF0b21pYyB1cGRhdGVcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wZXJ0eVVwZGF0ZXMsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9fc2V0TXVsdGkocHJvcGVydHlVcGRhdGVzKTtcbiAgICB9XG4gIH0sXG5cbiAgX190YWlsUGF0aENoYW5nZWQ6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0YWlsUGF0aCA9IHBhdGg7XG4gICAgdmFyIG5ld1BhdGggPSB0aGlzLl9tYXRjaGVkO1xuICAgIGlmICh0YWlsUGF0aCkge1xuICAgICAgaWYgKHRhaWxQYXRoLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICAgIHRhaWxQYXRoID0gJy8nICsgdGFpbFBhdGg7XG4gICAgICB9XG4gICAgICBuZXdQYXRoICs9IHRhaWxQYXRoO1xuICAgIH1cbiAgICB0aGlzLnNldCgncm91dGUucGF0aCcsIG5ld1BhdGgpO1xuICB9LFxuXG4gIF9fdXBkYXRlUGF0aE9uRGF0YUNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvdXRlIHx8ICF0aGlzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbmV3UGF0aCA9IHRoaXMuX19nZXRMaW5rKHt9KTtcbiAgICB2YXIgb2xkUGF0aCA9IHRoaXMuX19nZXRMaW5rKHRoaXMuX2RhdGFJblVybCk7XG4gICAgaWYgKG5ld1BhdGggPT09IG9sZFBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXQoJ3JvdXRlLnBhdGgnLCBuZXdQYXRoKTtcbiAgfSxcblxuICBfX2dldExpbms6IGZ1bmN0aW9uKG92ZXJyaWRlVmFsdWVzKSB7XG4gICAgdmFyIHZhbHVlcyA9IHt0YWlsOiBudWxsfTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5kYXRhKSB7XG4gICAgICB2YWx1ZXNba2V5XSA9IHRoaXMuZGF0YVtrZXldO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gb3ZlcnJpZGVWYWx1ZXMpIHtcbiAgICAgIHZhbHVlc1trZXldID0gb3ZlcnJpZGVWYWx1ZXNba2V5XTtcbiAgICB9XG4gICAgdmFyIHBhdHRlcm5QaWVjZXMgPSB0aGlzLnBhdHRlcm4uc3BsaXQoJy8nKTtcbiAgICB2YXIgaW50ZXJwID0gcGF0dGVyblBpZWNlcy5tYXAoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZVswXSA9PSAnOicpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZXNbdmFsdWUuc2xpY2UoMSldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIHRoaXMpO1xuICAgIGlmICh2YWx1ZXMudGFpbCAmJiB2YWx1ZXMudGFpbC5wYXRoKSB7XG4gICAgICBpZiAoaW50ZXJwLmxlbmd0aCA+IDAgJiYgdmFsdWVzLnRhaWwucGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgICAgICBpbnRlcnAucHVzaCh2YWx1ZXMudGFpbC5wYXRoLnNsaWNlKDEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVycC5wdXNoKHZhbHVlcy50YWlsLnBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW50ZXJwLmpvaW4oJy8nKTtcbiAgfSxcblxuICBfX3NldE11bHRpOiBmdW5jdGlvbihzZXRPYmopIHtcbiAgICAvLyBIQUNLKHJpY3RpYyk6IHNraXJ0aW5nIGFyb3VuZCAxLjAncyBsYWNrIG9mIGEgc2V0TXVsdGkgYnkgcG9raW5nIGF0XG4gICAgLy8gICAgIGludGVybmFsIGRhdGEgc3RydWN0dXJlcy4gSSB3b3VsZCBub3QgYWR2aXNlIHRoYXQgeW91IGNvcHkgdGhpc1xuICAgIC8vICAgICBleGFtcGxlLlxuICAgIC8vXG4gICAgLy8gICAgIEluIHRoZSBmdXR1cmUgdGhpcyB3aWxsIGJlIGEgZmVhdHVyZSBvZiBQb2x5bWVyIGl0c2VsZi5cbiAgICAvLyAgICAgU2VlOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyL2lzc3Vlcy8zNjQwXG4gICAgLy9cbiAgICAvLyAgICAgSGFja2luZyBhcm91bmQgd2l0aCBwcml2YXRlIG1ldGhvZHMgbGlrZSB0aGlzIGlzIGp1Z2dsaW5nIGZvb3RndW5zLFxuICAgIC8vICAgICBhbmQgaXMgbGlrZWx5IHRvIGhhdmUgdW5leHBlY3RlZCBhbmQgdW5zdXBwb3J0ZWQgcm91Z2ggZWRnZXMuXG4gICAgLy9cbiAgICAvLyAgICAgQmUgeWUgc28gd2FybmVkLlxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNldE9iaikge1xuICAgICAgdGhpcy5fcHJvcGVydHlTZXR0ZXIocHJvcGVydHksIHNldE9ialtwcm9wZXJ0eV0pO1xuICAgIH1cbiAgICAvLyBub3RpZnkgaW4gYSBzcGVjaWZpYyBvcmRlclxuICAgIGlmIChzZXRPYmouZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9wYXRoRWZmZWN0b3IoJ2RhdGEnLCB0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKCdkYXRhJyk7XG4gICAgfVxuICAgIGlmIChzZXRPYmouYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3BhdGhFZmZlY3RvcignYWN0aXZlJywgdGhpcy5hY3RpdmUpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgaWYgKHNldE9iai50YWlsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3BhdGhFZmZlY3RvcigndGFpbCcsIHRoaXMudGFpbCk7XG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoJ3RhaWwnKTtcbiAgICB9XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBRUE7QUFFQTtBQUFBOztBQUNBO0FBSUE7QUFFQTtBQUVBO0FBRUE7QUE4QkE7QUFDQTtBQTdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNFQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQXRGQTtBQTRGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBbFZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
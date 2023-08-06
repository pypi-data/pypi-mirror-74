(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/@polymer/iron-image/iron-image.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-image/iron-image.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/resolve-url.js */ "./node_modules/@polymer/polymer/lib/utils/resolve-url.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/




/**
`iron-image` is an element for displaying an image that provides useful sizing and
preloading options not found on the standard `<img>` tag.

The `sizing` option allows the image to be either cropped (`cover`) or
letterboxed (`contain`) to fill a fixed user-size placed on the element.

The `preload` option prevents the browser from rendering the image until the
image is fully loaded.  In the interim, either the element's CSS `background-color`
can be be used as the placeholder, or the `placeholder` property can be
set to a URL (preferably a data-URI, for instant rendering) for an
placeholder image.

The `fade` option (only valid when `preload` is set) will cause the placeholder
image/color to be faded out once the image is rendered.

Examples:

  Basically identical to `<img src="...">` tag:

    <iron-image src="http://lorempixel.com/400/400"></iron-image>

  Will letterbox the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="contain"
      src="http://lorempixel.com/600/400"></iron-image>

  Will crop the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="cover"
      src="http://lorempixel.com/600/400"></iron-image>

  Will show light-gray background until the image loads:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will show a base-64 encoded placeholder image until the image loads:

    <iron-image style="width:400px; height:400px;" placeholder="data:image/gif;base64,..."
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will fade the light-gray background out once the image is loaded:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload fade src="http://lorempixel.com/600/400"></iron-image>

Custom property | Description | Default
----------------|-------------|----------
`--iron-image-placeholder` | Mixin applied to #placeholder | `{}`
`--iron-image-width` | Sets the width of the wrapped image | `auto`
`--iron-image-height` | Sets the height of the wrapped image | `auto`

@group Iron Elements
@element iron-image
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,
  is: 'iron-image',
  properties: {
    /**
     * The URL of an image.
     */
    src: {
      type: String,
      value: ''
    },

    /**
     * A short text alternative for the image.
     */
    alt: {
      type: String,
      value: null
    },

    /**
     * CORS enabled images support:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */
    crossorigin: {
      type: String,
      value: null
    },

    /**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */
    preventLoad: {
      type: Boolean,
      value: false
    },

    /**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */
    sizing: {
      type: String,
      value: null,
      reflectToAttribute: true
    },

    /**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */
    position: {
      type: String,
      value: 'center'
    },

    /**
     * When `true`, any change to the `src` property will cause the
     * `placeholder` image to be shown until the new image has loaded.
     */
    preload: {
      type: Boolean,
      value: false
    },

    /**
     * This image will be used as a background/placeholder until the src image
     * has loaded.  Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */
    placeholder: {
      type: String,
      value: null,
      observer: '_placeholderChanged'
    },

    /**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */
    fade: {
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that is true when the image is loaded.
     */
    loaded: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that tracks the loading state of the image when the
     * `preload` option is used.
     */
    loading: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that indicates that the last set `src` failed to load.
     */
    error: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Can be used to set the width of image (e.g. via binding); size may also
     * be set via CSS.
     */
    width: {
      observer: '_widthChanged',
      type: Number,
      value: null
    },

    /**
     * Can be used to set the height of image (e.g. via binding); size may also
     * be set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */
    height: {
      observer: '_heightChanged',
      type: Number,
      value: null
    }
  },
  observers: ['_transformChanged(sizing, position)', '_loadStateObserver(src, preventLoad)'],
  created: function () {
    this._resolvedSrc = '';
  },
  _imgOnLoad: function () {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this._setLoading(false);

    this._setLoaded(true);

    this._setError(false);
  },
  _imgOnError: function () {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    this._setLoading(false);

    this._setLoaded(false);

    this._setError(true);
  },
  _computePlaceholderHidden: function () {
    return !this.preload || !this.fade && !this.loading && this.loaded;
  },
  _computePlaceholderClassName: function () {
    return this.preload && this.fade && !this.loading && this.loaded ? 'faded-out' : '';
  },
  _computeImgDivHidden: function () {
    return !this.sizing;
  },
  _computeImgDivARIAHidden: function () {
    return this.alt === '' ? 'true' : undefined;
  },
  _computeImgDivARIALabel: function () {
    if (this.alt !== null) {
      return this.alt;
    } // Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
    // that URL x, but '' is the default for src.


    if (this.src === '') {
      return '';
    } // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.


    var resolved = this._resolveSrc(this.src); // Remove query parts, get file name.


    return resolved.replace(/[?|#].*/g, '').split('/').pop();
  },
  _computeImgHidden: function () {
    return !!this.sizing;
  },
  _widthChanged: function () {
    this.style.width = isNaN(this.width) ? this.width : this.width + 'px';
  },
  _heightChanged: function () {
    this.style.height = isNaN(this.height) ? this.height : this.height + 'px';
  },
  _loadStateObserver: function (src, preventLoad) {
    var newResolvedSrc = this._resolveSrc(src);

    if (newResolvedSrc === this._resolvedSrc) {
      return;
    }

    this._resolvedSrc = '';
    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    if (src === '' || preventLoad) {
      this._setLoading(false);

      this._setLoaded(false);

      this._setError(false);
    } else {
      this._resolvedSrc = newResolvedSrc;
      this.$.img.src = this._resolvedSrc;
      this.$.sizedImgDiv.style.backgroundImage = 'url("' + this._resolvedSrc + '")';

      this._setLoading(true);

      this._setLoaded(false);

      this._setError(false);
    }
  },
  _placeholderChanged: function () {
    this.$.placeholder.style.backgroundImage = this.placeholder ? 'url("' + this.placeholder + '")' : '';
  },
  _transformChanged: function () {
    var sizedImgDivStyle = this.$.sizedImgDiv.style;
    var placeholderStyle = this.$.placeholder.style;
    sizedImgDivStyle.backgroundSize = placeholderStyle.backgroundSize = this.sizing;
    sizedImgDivStyle.backgroundPosition = placeholderStyle.backgroundPosition = this.sizing ? this.position : '';
    sizedImgDivStyle.backgroundRepeat = placeholderStyle.backgroundRepeat = this.sizing ? 'no-repeat' : '';
  },
  _resolveSrc: function (testSrc) {
    var resolved = Object(_polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__["resolveUrl"])(testSrc, this.$.baseURIAnchor.href); // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.

    if (resolved.length >= 2 && resolved[0] === '/' && resolved[1] !== '/') {
      // In IE location.origin might not work
      // https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
      resolved = (location.origin || location.protocol + '//' + location.host) + resolved;
    }

    return resolved;
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1pbWFnZS9pcm9uLWltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHtyZXNvbHZlVXJsfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9yZXNvbHZlLXVybC5qcyc7XG5cbi8qKlxuYGlyb24taW1hZ2VgIGlzIGFuIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgYW4gaW1hZ2UgdGhhdCBwcm92aWRlcyB1c2VmdWwgc2l6aW5nIGFuZFxucHJlbG9hZGluZyBvcHRpb25zIG5vdCBmb3VuZCBvbiB0aGUgc3RhbmRhcmQgYDxpbWc+YCB0YWcuXG5cblRoZSBgc2l6aW5nYCBvcHRpb24gYWxsb3dzIHRoZSBpbWFnZSB0byBiZSBlaXRoZXIgY3JvcHBlZCAoYGNvdmVyYCkgb3JcbmxldHRlcmJveGVkIChgY29udGFpbmApIHRvIGZpbGwgYSBmaXhlZCB1c2VyLXNpemUgcGxhY2VkIG9uIHRoZSBlbGVtZW50LlxuXG5UaGUgYHByZWxvYWRgIG9wdGlvbiBwcmV2ZW50cyB0aGUgYnJvd3NlciBmcm9tIHJlbmRlcmluZyB0aGUgaW1hZ2UgdW50aWwgdGhlXG5pbWFnZSBpcyBmdWxseSBsb2FkZWQuICBJbiB0aGUgaW50ZXJpbSwgZWl0aGVyIHRoZSBlbGVtZW50J3MgQ1NTIGBiYWNrZ3JvdW5kLWNvbG9yYFxuY2FuIGJlIGJlIHVzZWQgYXMgdGhlIHBsYWNlaG9sZGVyLCBvciB0aGUgYHBsYWNlaG9sZGVyYCBwcm9wZXJ0eSBjYW4gYmVcbnNldCB0byBhIFVSTCAocHJlZmVyYWJseSBhIGRhdGEtVVJJLCBmb3IgaW5zdGFudCByZW5kZXJpbmcpIGZvciBhblxucGxhY2Vob2xkZXIgaW1hZ2UuXG5cblRoZSBgZmFkZWAgb3B0aW9uIChvbmx5IHZhbGlkIHdoZW4gYHByZWxvYWRgIGlzIHNldCkgd2lsbCBjYXVzZSB0aGUgcGxhY2Vob2xkZXJcbmltYWdlL2NvbG9yIHRvIGJlIGZhZGVkIG91dCBvbmNlIHRoZSBpbWFnZSBpcyByZW5kZXJlZC5cblxuRXhhbXBsZXM6XG5cbiAgQmFzaWNhbGx5IGlkZW50aWNhbCB0byBgPGltZyBzcmM9XCIuLi5cIj5gIHRhZzpcblxuICAgIDxpcm9uLWltYWdlIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS80MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgbGV0dGVyYm94IHRoZSBpbWFnZSB0byBmaXQ6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7XCIgc2l6aW5nPVwiY29udGFpblwiXG4gICAgICBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIGNyb3AgdGhlIGltYWdlIHRvIGZpdDpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDtcIiBzaXppbmc9XCJjb3ZlclwiXG4gICAgICBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIHNob3cgbGlnaHQtZ3JheSBiYWNrZ3JvdW5kIHVudGlsIHRoZSBpbWFnZSBsb2FkczpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1wiXG4gICAgICBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBzaG93IGEgYmFzZS02NCBlbmNvZGVkIHBsYWNlaG9sZGVyIGltYWdlIHVudGlsIHRoZSBpbWFnZSBsb2FkczpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDtcIiBwbGFjZWhvbGRlcj1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCwuLi5cIlxuICAgICAgc2l6aW5nPVwiY292ZXJcIiBwcmVsb2FkIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgZmFkZSB0aGUgbGlnaHQtZ3JheSBiYWNrZ3JvdW5kIG91dCBvbmNlIHRoZSBpbWFnZSBpcyBsb2FkZWQ6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcIlxuICAgICAgc2l6aW5nPVwiY292ZXJcIiBwcmVsb2FkIGZhZGUgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24taW1hZ2UtcGxhY2Vob2xkZXJgIHwgTWl4aW4gYXBwbGllZCB0byAjcGxhY2Vob2xkZXIgfCBge31gXG5gLS1pcm9uLWltYWdlLXdpZHRoYCB8IFNldHMgdGhlIHdpZHRoIG9mIHRoZSB3cmFwcGVkIGltYWdlIHwgYGF1dG9gXG5gLS1pcm9uLWltYWdlLWhlaWdodGAgfCBTZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHdyYXBwZWQgaW1hZ2UgfCBgYXV0b2BcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24taW1hZ2VcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2Jhc2VVUklBbmNob3Ige1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAjc2l6ZWRJbWdEaXYge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IHZhcigtLWlyb24taW1hZ2Utd2lkdGgsIGF1dG8pO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWlyb24taW1hZ2UtaGVpZ2h0LCBhdXRvKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3NpemluZ10pICNzaXplZEltZ0RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbc2l6aW5nXSkgI2ltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNwbGFjZWhvbGRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICBAYXBwbHkgLS1pcm9uLWltYWdlLXBsYWNlaG9sZGVyO1xuICAgICAgfVxuXG4gICAgICAjcGxhY2Vob2xkZXIuZmFkZWQtb3V0IHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGEgaWQ9XCJiYXNlVVJJQW5jaG9yXCIgaHJlZj1cIiNcIj48L2E+XG4gICAgPGRpdiBpZD1cInNpemVkSW1nRGl2XCIgcm9sZT1cImltZ1wiIGhpZGRlbiQ9XCJbW19jb21wdXRlSW1nRGl2SGlkZGVuKHNpemluZyldXVwiIGFyaWEtaGlkZGVuJD1cIltbX2NvbXB1dGVJbWdEaXZBUklBSGlkZGVuKGFsdCldXVwiIGFyaWEtbGFiZWwkPVwiW1tfY29tcHV0ZUltZ0RpdkFSSUFMYWJlbChhbHQsIHNyYyldXVwiPjwvZGl2PlxuICAgIDxpbWcgaWQ9XCJpbWdcIiBhbHQkPVwiW1thbHRdXVwiIGhpZGRlbiQ9XCJbW19jb21wdXRlSW1nSGlkZGVuKHNpemluZyldXVwiIGNyb3Nzb3JpZ2luJD1cIltbY3Jvc3NvcmlnaW5dXVwiIG9uLWxvYWQ9XCJfaW1nT25Mb2FkXCIgb24tZXJyb3I9XCJfaW1nT25FcnJvclwiPlxuICAgIDxkaXYgaWQ9XCJwbGFjZWhvbGRlclwiIGhpZGRlbiQ9XCJbW19jb21wdXRlUGxhY2Vob2xkZXJIaWRkZW4ocHJlbG9hZCwgZmFkZSwgbG9hZGluZywgbG9hZGVkKV1dXCIgY2xhc3MkPVwiW1tfY29tcHV0ZVBsYWNlaG9sZGVyQ2xhc3NOYW1lKHByZWxvYWQsIGZhZGUsIGxvYWRpbmcsIGxvYWRlZCldXVwiPjwvZGl2PlxuYCxcblxuICBpczogJ2lyb24taW1hZ2UnLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgVVJMIG9mIGFuIGltYWdlLlxuICAgICAqL1xuICAgIHNyYzoge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfSxcblxuICAgIC8qKlxuICAgICAqIEEgc2hvcnQgdGV4dCBhbHRlcm5hdGl2ZSBmb3IgdGhlIGltYWdlLlxuICAgICAqL1xuICAgIGFsdDoge3R5cGU6IFN0cmluZywgdmFsdWU6IG51bGx9LFxuXG4gICAgLyoqXG4gICAgICogQ09SUyBlbmFibGVkIGltYWdlcyBzdXBwb3J0OlxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQ09SU19lbmFibGVkX2ltYWdlXG4gICAgICovXG4gICAgY3Jvc3NvcmlnaW46IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGltYWdlIGlzIHByZXZlbnRlZCBmcm9tIGxvYWRpbmcgYW5kIGFueSBwbGFjZWhvbGRlciBpc1xuICAgICAqIHNob3duLiAgVGhpcyBtYXkgYmUgdXNlZnVsIHdoZW4gYSBiaW5kaW5nIHRvIHRoZSBzcmMgcHJvcGVydHkgaXMga25vd24gdG9cbiAgICAgKiBiZSBpbnZhbGlkLCB0byBwcmV2ZW50IDQwNCByZXF1ZXN0cy5cbiAgICAgKi9cbiAgICBwcmV2ZW50TG9hZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgc2l6aW5nIG9wdGlvbiBmb3IgdGhlIGltYWdlLiAgVmFsaWQgdmFsdWVzIGFyZSBgY29udGFpbmAgKGZ1bGxcbiAgICAgKiBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIGlzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGVsZW1lbnQgYW5kXG4gICAgICogbGV0dGVyYm94ZWQpIG9yIGBjb3ZlcmAgKGltYWdlIGlzIGNyb3BwZWQgaW4gb3JkZXIgdG8gZnVsbHkgY292ZXIgdGhlXG4gICAgICogYm91bmRzIG9mIHRoZSBlbGVtZW50KSwgb3IgYG51bGxgIChkZWZhdWx0OiBpbWFnZSB0YWtlcyBuYXR1cmFsIHNpemUpLlxuICAgICAqL1xuICAgIHNpemluZzoge3R5cGU6IFN0cmluZywgdmFsdWU6IG51bGwsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgc2l6aW5nIG9wdGlvbiBpcyB1c2VkIChgY292ZXJgIG9yIGBjb250YWluYCksIHRoaXMgZGV0ZXJtaW5lc1xuICAgICAqIGhvdyB0aGUgaW1hZ2UgaXMgYWxpZ25lZCB3aXRoaW4gdGhlIGVsZW1lbnQgYm91bmRzLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2NlbnRlcid9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgdHJ1ZWAsIGFueSBjaGFuZ2UgdG8gdGhlIGBzcmNgIHByb3BlcnR5IHdpbGwgY2F1c2UgdGhlXG4gICAgICogYHBsYWNlaG9sZGVyYCBpbWFnZSB0byBiZSBzaG93biB1bnRpbCB0aGUgbmV3IGltYWdlIGhhcyBsb2FkZWQuXG4gICAgICovXG4gICAgcHJlbG9hZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGltYWdlIHdpbGwgYmUgdXNlZCBhcyBhIGJhY2tncm91bmQvcGxhY2Vob2xkZXIgdW50aWwgdGhlIHNyYyBpbWFnZVxuICAgICAqIGhhcyBsb2FkZWQuICBVc2Ugb2YgYSBkYXRhLVVSSSBmb3IgcGxhY2Vob2xkZXIgaXMgZW5jb3VyYWdlZCBmb3IgaW5zdGFudFxuICAgICAqIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZywgdmFsdWU6IG51bGwsIG9ic2VydmVyOiAnX3BsYWNlaG9sZGVyQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgcHJlbG9hZGAgaXMgdHJ1ZSwgc2V0dGluZyBgZmFkZWAgdG8gdHJ1ZSB3aWxsIGNhdXNlIHRoZSBpbWFnZSB0b1xuICAgICAqIGZhZGUgaW50byBwbGFjZS5cbiAgICAgKi9cbiAgICBmYWRlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFJlYWQtb25seSB2YWx1ZSB0aGF0IGlzIHRydWUgd2hlbiB0aGUgaW1hZ2UgaXMgbG9hZGVkLlxuICAgICAqL1xuICAgIGxvYWRlZDoge25vdGlmeTogdHJ1ZSwgcmVhZE9ubHk6IHRydWUsIHR5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBSZWFkLW9ubHkgdmFsdWUgdGhhdCB0cmFja3MgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGltYWdlIHdoZW4gdGhlXG4gICAgICogYHByZWxvYWRgIG9wdGlvbiBpcyB1c2VkLlxuICAgICAqL1xuICAgIGxvYWRpbmc6IHtub3RpZnk6IHRydWUsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogUmVhZC1vbmx5IHZhbHVlIHRoYXQgaW5kaWNhdGVzIHRoYXQgdGhlIGxhc3Qgc2V0IGBzcmNgIGZhaWxlZCB0byBsb2FkLlxuICAgICAqL1xuICAgIGVycm9yOiB7bm90aWZ5OiB0cnVlLCByZWFkT25seTogdHJ1ZSwgdHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSB1c2VkIHRvIHNldCB0aGUgd2lkdGggb2YgaW1hZ2UgKGUuZy4gdmlhIGJpbmRpbmcpOyBzaXplIG1heSBhbHNvXG4gICAgICogYmUgc2V0IHZpYSBDU1MuXG4gICAgICovXG4gICAgd2lkdGg6IHtvYnNlcnZlcjogJ193aWR0aENoYW5nZWQnLCB0eXBlOiBOdW1iZXIsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSB1c2VkIHRvIHNldCB0aGUgaGVpZ2h0IG9mIGltYWdlIChlLmcuIHZpYSBiaW5kaW5nKTsgc2l6ZSBtYXkgYWxzb1xuICAgICAqIGJlIHNldCB2aWEgQ1NTLlxuICAgICAqXG4gICAgICogQGF0dHJpYnV0ZSBoZWlnaHRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgaGVpZ2h0OiB7b2JzZXJ2ZXI6ICdfaGVpZ2h0Q2hhbmdlZCcsIHR5cGU6IE51bWJlciwgdmFsdWU6IG51bGx9LFxuICB9LFxuXG4gIG9ic2VydmVyczogW1xuICAgICdfdHJhbnNmb3JtQ2hhbmdlZChzaXppbmcsIHBvc2l0aW9uKScsXG4gICAgJ19sb2FkU3RhdGVPYnNlcnZlcihzcmMsIHByZXZlbnRMb2FkKSdcbiAgXSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yZXNvbHZlZFNyYyA9ICcnO1xuICB9LFxuXG4gIF9pbWdPbkxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLiQuaW1nLnNyYyAhPT0gdGhpcy5fcmVzb2x2ZVNyYyh0aGlzLnNyYykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB0aGlzLl9zZXRMb2FkZWQodHJ1ZSk7XG4gICAgdGhpcy5fc2V0RXJyb3IoZmFsc2UpO1xuICB9LFxuXG4gIF9pbWdPbkVycm9yOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy4kLmltZy5zcmMgIT09IHRoaXMuX3Jlc29sdmVTcmModGhpcy5zcmMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4kLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcblxuICAgIHRoaXMuX3NldExvYWRpbmcoZmFsc2UpO1xuICAgIHRoaXMuX3NldExvYWRlZChmYWxzZSk7XG4gICAgdGhpcy5fc2V0RXJyb3IodHJ1ZSk7XG4gIH0sXG5cbiAgX2NvbXB1dGVQbGFjZWhvbGRlckhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLnByZWxvYWQgfHwgKCF0aGlzLmZhZGUgJiYgIXRoaXMubG9hZGluZyAmJiB0aGlzLmxvYWRlZCk7XG4gIH0sXG5cbiAgX2NvbXB1dGVQbGFjZWhvbGRlckNsYXNzTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLnByZWxvYWQgJiYgdGhpcy5mYWRlICYmICF0aGlzLmxvYWRpbmcgJiYgdGhpcy5sb2FkZWQpID9cbiAgICAgICAgJ2ZhZGVkLW91dCcgOlxuICAgICAgICAnJztcbiAgfSxcblxuICBfY29tcHV0ZUltZ0RpdkhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLnNpemluZztcbiAgfSxcblxuICBfY29tcHV0ZUltZ0RpdkFSSUFIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFsdCA9PT0gJycgPyAndHJ1ZScgOiB1bmRlZmluZWQ7XG4gIH0sXG5cbiAgX2NvbXB1dGVJbWdEaXZBUklBTGFiZWw6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmFsdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWx0O1xuICAgIH1cblxuICAgIC8vIFBvbHltZXIuUmVzb2x2ZVVybC5yZXNvbHZlVXJsIHdpbGwgcmVzb2x2ZSAnJyByZWxhdGl2ZSB0byBhIFVSTCB4IHRvXG4gICAgLy8gdGhhdCBVUkwgeCwgYnV0ICcnIGlzIHRoZSBkZWZhdWx0IGZvciBzcmMuXG4gICAgaWYgKHRoaXMuc3JjID09PSAnJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIE5PVEU6IFVzZSBvZiBgVVJMYCB3YXMgcmVtb3ZlZCBoZXJlIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnRcbiAgICAvLyBjb25zdHJ1Y3RpbmcgaXQuIElmIHRoaXMgZW5kcyB1cCBiZWluZyBwcm9ibGVtYXRpYywgd2Ugc2hvdWxkXG4gICAgLy8gY29uc2lkZXIgcmV2ZXJ0aW5nIGFuZCBhZGRpbmcgdGhlIFVSTCBwb2x5ZmlsbCBhcyBhIGRldiBkZXBlbmRlbmN5LlxuICAgIHZhciByZXNvbHZlZCA9IHRoaXMuX3Jlc29sdmVTcmModGhpcy5zcmMpO1xuICAgIC8vIFJlbW92ZSBxdWVyeSBwYXJ0cywgZ2V0IGZpbGUgbmFtZS5cbiAgICByZXR1cm4gcmVzb2x2ZWQucmVwbGFjZSgvWz98I10uKi9nLCAnJykuc3BsaXQoJy8nKS5wb3AoKTtcbiAgfSxcblxuICBfY29tcHV0ZUltZ0hpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5zaXppbmc7XG4gIH0sXG5cbiAgX3dpZHRoQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS53aWR0aCA9IGlzTmFOKHRoaXMud2lkdGgpID8gdGhpcy53aWR0aCA6IHRoaXMud2lkdGggKyAncHgnO1xuICB9LFxuXG4gIF9oZWlnaHRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGlzTmFOKHRoaXMuaGVpZ2h0KSA/IHRoaXMuaGVpZ2h0IDogdGhpcy5oZWlnaHQgKyAncHgnO1xuICB9LFxuXG4gIF9sb2FkU3RhdGVPYnNlcnZlcjogZnVuY3Rpb24oc3JjLCBwcmV2ZW50TG9hZCkge1xuICAgIHZhciBuZXdSZXNvbHZlZFNyYyA9IHRoaXMuX3Jlc29sdmVTcmMoc3JjKTtcbiAgICBpZiAobmV3UmVzb2x2ZWRTcmMgPT09IHRoaXMuX3Jlc29sdmVkU3JjKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVzb2x2ZWRTcmMgPSAnJztcbiAgICB0aGlzLiQuaW1nLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgdGhpcy4kLnNpemVkSW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuXG4gICAgaWYgKHNyYyA9PT0gJycgfHwgcHJldmVudExvYWQpIHtcbiAgICAgIHRoaXMuX3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgdGhpcy5fc2V0TG9hZGVkKGZhbHNlKTtcbiAgICAgIHRoaXMuX3NldEVycm9yKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVzb2x2ZWRTcmMgPSBuZXdSZXNvbHZlZFNyYztcbiAgICAgIHRoaXMuJC5pbWcuc3JjID0gdGhpcy5fcmVzb2x2ZWRTcmM7XG4gICAgICB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAndXJsKFwiJyArIHRoaXMuX3Jlc29sdmVkU3JjICsgJ1wiKSc7XG5cbiAgICAgIHRoaXMuX3NldExvYWRpbmcodHJ1ZSk7XG4gICAgICB0aGlzLl9zZXRMb2FkZWQoZmFsc2UpO1xuICAgICAgdGhpcy5fc2V0RXJyb3IoZmFsc2UpO1xuICAgIH1cbiAgfSxcblxuICBfcGxhY2Vob2xkZXJDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiQucGxhY2Vob2xkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA/ICd1cmwoXCInICsgdGhpcy5wbGFjZWhvbGRlciArICdcIiknIDogJyc7XG4gIH0sXG5cbiAgX3RyYW5zZm9ybUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzaXplZEltZ0RpdlN0eWxlID0gdGhpcy4kLnNpemVkSW1nRGl2LnN0eWxlO1xuICAgIHZhciBwbGFjZWhvbGRlclN0eWxlID0gdGhpcy4kLnBsYWNlaG9sZGVyLnN0eWxlO1xuXG4gICAgc2l6ZWRJbWdEaXZTdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IHBsYWNlaG9sZGVyU3R5bGUuYmFja2dyb3VuZFNpemUgPVxuICAgICAgICB0aGlzLnNpemluZztcblxuICAgIHNpemVkSW1nRGl2U3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gcGxhY2Vob2xkZXJTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPVxuICAgICAgICB0aGlzLnNpemluZyA/IHRoaXMucG9zaXRpb24gOiAnJztcblxuICAgIHNpemVkSW1nRGl2U3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IHBsYWNlaG9sZGVyU3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9XG4gICAgICAgIHRoaXMuc2l6aW5nID8gJ25vLXJlcGVhdCcgOiAnJztcbiAgfSxcblxuICBfcmVzb2x2ZVNyYzogZnVuY3Rpb24odGVzdFNyYykge1xuICAgIHZhciByZXNvbHZlZCA9IHJlc29sdmVVcmwodGVzdFNyYywgdGhpcy4kLmJhc2VVUklBbmNob3IuaHJlZik7XG4gICAgLy8gTk9URTogVXNlIG9mIGBVUkxgIHdhcyByZW1vdmVkIGhlcmUgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydFxuICAgIC8vIGNvbnN0cnVjdGluZyBpdC4gSWYgdGhpcyBlbmRzIHVwIGJlaW5nIHByb2JsZW1hdGljLCB3ZSBzaG91bGRcbiAgICAvLyBjb25zaWRlciByZXZlcnRpbmcgYW5kIGFkZGluZyB0aGUgVVJMIHBvbHlmaWxsIGFzIGEgZGV2IGRlcGVuZGVuY3kuXG4gICAgaWYgKHJlc29sdmVkLmxlbmd0aCA+PSAyICYmIHJlc29sdmVkWzBdID09PSAnLycgJiYgcmVzb2x2ZWRbMV0gIT09ICcvJykge1xuICAgICAgLy8gSW4gSUUgbG9jYXRpb24ub3JpZ2luIG1pZ2h0IG5vdCB3b3JrXG4gICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3NjM4MDIvbG9jYXRpb24tb3JpZ2luLWlzLXVuZGVmaW5lZC1pbi1pZS0xMS1vbi13aW5kb3dzLTEwLWJ1dC13b3Jrcy1vbi13aW5kb3dzLTdcbiAgICAgIHJlc29sdmVkID0gKGxvY2F0aW9uLm9yaWdpbiB8fCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0KSArXG4gICAgICAgICAgcmVzb2x2ZWQ7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQThEQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZGQTtBQTBGQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQXBTQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
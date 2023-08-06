(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-server-control"],{

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

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
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






const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctc2VydmVyLWNvbnRyb2wuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL213Yy1yaXBwbGUtYmFzZS50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1yaXBwbGUtY3NzLnRzIiwid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7aHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHl9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7Y2xhc3NNYXB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IHtyaXBwbGUsIFJpcHBsZU9wdGlvbnN9IGZyb20gJy4vcmlwcGxlLWRpcmVjdGl2ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHByaW1hcnkgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBhY3RpdmU6IGJvb2xlYW58dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGFjY2VudCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHVuYm91bmRlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHthdHRyaWJ1dGU6IGZhbHNlfSkgcHJvdGVjdGVkIGludGVyYWN0aW9uTm9kZTogSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmludGVyYWN0aW9uTm9kZSA9PT0gdGhpcykge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHwgU2hhZG93Um9vdCB8IG51bGw7XG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbk5vZGUgPSBwYXJlbnQ7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHBhcmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgJiYgcGFyZW50Lmhvc3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uTm9kZSA9IHBhcmVudC5ob3N0O1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgLy8gVE9ETyhzb3J2ZWxsKSAjY3NzOiBzaXppbmcuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknOiB0aGlzLnByaW1hcnksXG4gICAgICAnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnOiB0aGlzLmFjY2VudCxcbiAgICB9O1xuICAgIGNvbnN0IHtkaXNhYmxlZCwgdW5ib3VuZGVkLCBhY3RpdmUsIGludGVyYWN0aW9uTm9kZX0gPSB0aGlzO1xuICAgIGNvbnN0IHJpcHBsZU9wdGlvbnM6IFJpcHBsZU9wdGlvbnMgPSB7ZGlzYWJsZWQsIHVuYm91bmRlZCwgaW50ZXJhY3Rpb25Ob2RlfTtcbiAgICBpZiAoYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZU9wdGlvbnMuYWN0aXZlID0gYWN0aXZlO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgLnJpcHBsZT1cIiR7cmlwcGxlKHJpcHBsZU9wdGlvbnMpfVwiXG4gICAgICAgICAgY2xhc3M9XCJtZGMtcmlwcGxlLXN1cmZhY2UgJHtjbGFzc01hcChjbGFzc2VzKX1cIj48L2Rpdj5gO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2Nzc30gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLXJhZGl1cy1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0LCAwKSkgc2NhbGUoMSl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0e2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfXRve29wYWNpdHk6MH19Lm1kYy1yaXBwbGUtc3VyZmFjZXstLW1kYy1yaXBwbGUtZmctc2l6ZTogMDstLW1kYy1yaXBwbGUtbGVmdDogMDstLW1kYy1yaXBwbGUtdG9wOiAwOy0tbWRjLXJpcHBsZS1mZy1zY2FsZTogMTstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0OiAwOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6bm9uZTtvdmVyZmxvdzpoaWRkZW59Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmV7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDoxfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCAwKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tZGMtcmlwcGxlLXN1cmZhY2U6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gMTAwJSk7bGVmdDpjYWxjKDUwJSAtIDEwMCUpO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCV9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF17b3ZlcmZsb3c6dmlzaWJsZX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gNTAlKTtsZWZ0OmNhbGMoNTAlIC0gNTAlKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCBjYWxjKDUwJSAtIDUwJSkpO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCBjYWxjKDUwJSAtIDUwJSkpO3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM2MjAwZWU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtcHJpbWFyeSwgIzYyMDBlZSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnkubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudC5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2V7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH1gO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjdXN0b21FbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCB7UmlwcGxlQmFzZX0gZnJvbSAnLi9td2MtcmlwcGxlLWJhc2UuanMnO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSAnLi9td2MtcmlwcGxlLWNzcy5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ213Yy1yaXBwbGUnOiBSaXBwbGU7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ213Yy1yaXBwbGUnKVxuZXhwb3J0IGNsYXNzIFJpcHBsZSBleHRlbmRzIFJpcHBsZUJhc2Uge1xuICBzdGF0aWMgc3R5bGVzID0gc3R5bGU7XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgbXVsdGlwbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGN5Y2xlcyBiZXR3ZWVuIGZvdXIgbGF5ZXJzIG9mIGNvbG9yczsgYnkgZGVmYXVsdCB0aGV5IGFyZVxuYmx1ZSwgcmVkLCB5ZWxsb3cgYW5kIGdyZWVuLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBjeWNsZSBiZXR3ZWVuIGZvdXJcbmRpZmZlcmVudCBjb2xvcnMuIFVzZSA8cGFwZXItc3Bpbm5lci1saXRlPiBmb3Igc2luZ2xlIGNvbG9yIHNwaW5uZXJzLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmaXJzdCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzZWNvbmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1yZWQtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yYCB8IENvbG9yIG9mIHRoZSB0aGlyZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXllbGxvdy01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZvdXJ0aCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWdyZWVuLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBRUE7QUFFQTtBQUFBOztBQUNBO0FBSUE7QUFFQTtBQUVBO0FBRUE7QUE4QkE7QUFDQTtBQTdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF5Q0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
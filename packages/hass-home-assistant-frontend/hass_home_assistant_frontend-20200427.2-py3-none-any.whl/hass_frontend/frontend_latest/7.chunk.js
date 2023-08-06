(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js ***!
  \***************************************************************************/
/*! exports provided: DisableUpgradeMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableUpgradeMixin", function() { return DisableUpgradeMixin; });
/* harmony import */ var _element_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js");
/* harmony import */ var _utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


const DISABLED_ATTR = 'disable-upgrade';
/**
 * Element class mixin that allows the element to boot up in a non-enabled
 * state when the `disable-upgrade` attribute is present. This mixin is
 * designed to be used with element classes like PolymerElement that perform
 * initial startup work when they are first connected. When the
 * `disable-upgrade` attribute is removed, if the element is connected, it
 * boots up and "enables" as it otherwise would; if it is not connected, the
 * element boots up when it is next connected.
 *
 * Using `disable-upgrade` with PolymerElement prevents any data propagation
 * to the element, any element DOM from stamping, or any work done in
 * connected/disconnctedCallback from occuring, but it does not prevent work
 * done in the element constructor.
 *
 * Note, this mixin must be applied on top of any element class that
 * itself implements a `connectedCallback` so that it can control the work
 * done in `connectedCallback`. For example,
 *
 *     MyClass = DisableUpgradeMixin(class extends BaseClass {...});
 *
 * @mixinFunction
 * @polymer
 * @appliesMixin ElementMixin
 */

const DisableUpgradeMixin = Object(_utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__["dedupingMixin"])(base => {
  /**
   * @constructor
   * @extends {base}
   * @implements {Polymer_ElementMixin}
   * @private
   */
  const superClass = Object(_element_mixin_js__WEBPACK_IMPORTED_MODULE_0__["ElementMixin"])(base);
  /**
   * @polymer
   * @mixinClass
   * @implements {Polymer_DisableUpgradeMixin}
   */

  class DisableUpgradeClass extends superClass {
    /** @override */
    static get observedAttributes() {
      return super.observedAttributes.concat(DISABLED_ATTR);
    }
    /** @override */


    attributeChangedCallback(name, old, value, namespace) {
      if (name == DISABLED_ATTR) {
        if (!this.__dataEnabled && value == null && this.isConnected) {
          super.connectedCallback();
        }
      } else {
        super.attributeChangedCallback(name, old, value, namespace);
      }
    }
    /*
      NOTE: cannot gate on attribute because this is called before
      attributes are delivered. Therefore, we stub this out and
      call `super._initializeProperties()` manually.
    */

    /** @override */


    _initializeProperties() {} // prevent user code in connected from running

    /** @override */


    connectedCallback() {
      if (this.__dataEnabled || !this.hasAttribute(DISABLED_ATTR)) {
        super.connectedCallback();
      }
    } // prevent element from turning on properties

    /** @override */


    _enableProperties() {
      if (!this.hasAttribute(DISABLED_ATTR)) {
        if (!this.__dataEnabled) {
          super._initializeProperties();
        }

        super._enableProperties();
      }
    } // only go if "enabled"

    /** @override */


    disconnectedCallback() {
      if (this.__dataEnabled) {
        super.disconnectedCallback();
      }
    }

  }

  return DisableUpgradeClass;
});

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/color.js":
/*!**************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/color.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");



const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="material-color-light">
  <template>
    <style>
      :host,
      #host-fix {
        /* Text colors */
        --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
        --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
        --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

        /* Primary colors */
        --material-primary-color: var(--primary-color, #6200ee);
        --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
        --material-primary-text-color: var(--material-primary-color);

        /* Error colors */
        --material-error-color: var(--error-color, #b00020);
        --material-error-text-color: var(--material-error-color);

        /* Background colors */
        --material-background-color: var(--light-theme-background-color, #fff);
        --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
        --material-disabled-color: rgba(0, 0, 0, 0.26);

        /* Divider colors */
        --material-divider-color: rgba(0, 0, 0, 0.12);

        /* Undocumented internal properties (prefixed with three dashes) */

        /* Text field tweaks */
        --_material-text-field-input-line-background-color: initial;
        --_material-text-field-input-line-opacity: initial;
        --_material-text-field-input-line-hover-opacity: initial;
        --_material-text-field-focused-label-opacity: initial;

        /* Button tweaks */
        --_material-button-raised-background-color: initial;
        --_material-button-outline-color: initial;

        /* Grid tweaks */
        --_material-grid-row-hover-background-color: initial;

        /* Split layout tweaks */
        --_material-split-layout-splitter-background-color: initial;

        background-color: var(--material-background-color);
        color: var(--material-body-text-color);
      }

      [theme~="dark"] {
        /* Text colors */
        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

        /* Primary colors */
        --material-primary-color: var(--light-primary-color, #7e3ff2);
        --material-primary-text-color: #b794f6;

        /* Error colors */
        --material-error-color: var(--error-color, #de2839);
        --material-error-text-color: var(--material-error-color);

        /* Background colors */
        --material-background-color: var(--dark-theme-background-color, #303030);
        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
        --material-disabled-color: rgba(255, 255, 255, 0.3);

        /* Divider colors */
        --material-divider-color: rgba(255, 255, 255, 0.12);

        /* Undocumented internal properties (prefixed with three dashes) */

        /* Text field tweaks */
        --_material-text-field-input-line-background-color: #fff;
        --_material-text-field-input-line-opacity: 0.7;
        --_material-text-field-input-line-hover-opacity: 1;
        --_material-text-field-focused-label-opacity: 1;

        /* Button tweaks */
        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
        --_material-button-outline-color: rgba(255, 255, 255, 0.2);

        /* Grid tweaks */
        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
        --_material-grid-row-selected-overlay-opacity: 0.16;

        /* Split layout tweaks */
        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

        background-color: var(--material-background-color);
        color: var(--material-body-text-color);
      }

      a {
        color: inherit;
      }
    </style>
  </template>
</dom-module><dom-module id="material-color-dark">
  <template>
    <style>
      :host,
      #host-fix {
        /* Text colors */
        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

        /* Primary colors */
        --material-primary-color: var(--light-primary-color, #7e3ff2);
        --material-primary-text-color: #b794f6;

        /* Error colors */
        --material-error-color: var(--error-color, #de2839);
        --material-error-text-color: var(--material-error-color);

        /* Background colors */
        --material-background-color: var(--dark-theme-background-color, #303030);
        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
        --material-disabled-color: rgba(255, 255, 255, 0.3);

        /* Divider colors */
        --material-divider-color: rgba(255, 255, 255, 0.12);

        /* Undocumented internal properties (prefixed with three dashes) */

        /* Text field tweaks */
        --_material-text-field-input-line-background-color: #fff;
        --_material-text-field-input-line-opacity: 0.7;
        --_material-text-field-input-line-hover-opacity: 1;
        --_material-text-field-focused-label-opacity: 1;

        /* Button tweaks */
        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
        --_material-button-outline-color: rgba(255, 255, 255, 0.2);

        /* Grid tweaks */
        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
        --_material-grid-row-selected-overlay-opacity: 0.16;

        /* Split layout tweaks */
        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

        background-color: var(--material-background-color);
        color: var(--material-body-text-color);
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    :root {
      /* Text colors */
      --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
      --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
      --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

      /* Primary colors */
      --material-primary-color: var(--primary-color, #6200ee);
      --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
      --material-primary-text-color: var(--material-primary-color);

      /* Error colors */
      --material-error-color: var(--error-color, #b00020);
      --material-error-text-color: var(--material-error-color);

      /* Background colors */
      --material-background-color: var(--light-theme-background-color, #fff);
      --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
      --material-disabled-color: rgba(0, 0, 0, 0.26);

      /* Divider colors */
      --material-divider-color: rgba(0, 0, 0, 0.12);
    }
  </style>
</custom-style>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/font-icons.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");


const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<custom-style>
  <style>
    @font-face {
      font-family: 'material-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAjAAAsAAAAADZQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAFZSk09oY21hcAAAAYgAAACNAAACNOuCXH5nbHlmAAACGAAABDwAAAXsdK8UGGhlYWQAAAZUAAAAMAAAADYX9T2IaGhlYQAABoQAAAAgAAAAJBGyCLpobXR4AAAGpAAAABQAAABAjXoAAGxvY2EAAAa4AAAAIgAAACIKMgjUbWF4cAAABtwAAAAfAAAAIAEeAFRuYW1lAAAG/AAAATQAAAJe3l764XBvc3QAAAgwAAAAjwAAAMqJEjDWeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYOS4wTiBgZWBgYGfbQIDA2MAhGZpYChlymZgYGJgZWbACgLSXFMYHF4xvuJnv/CvgOEG+wXG6UBhRpAcAMyUDJN4nO2R2Q0DIQxEHwt7HzSSGlJQvlJkqqGJjYdJGbH0PPJgELKBEcjBIyiQ3iQUr3BT9zNb9wvP3lPkt3rfkZNy1KXnIXpLvDgxs7DGvZ2Dk4saxxP/OHr+/KqqCZo+08EgzUa7acVoym002lubDNLZIF0M0tUg3Yz22XaD9DD6XTsN0ssgrYb6BZEQJiUAAAB4nH1UbUhbVxg+77259yZMJbfko7DhbnJtrjYuWfNxsx9qBFu32ljHWqWO6VD6MW1G4uYPsfSDdQOHXOuPrtYfKytKJziYEJkQZLQ/BqHCpsUfghZX1jHBjBUWWqfes51zE1dloyfJyXvOed5znvO+z3sQINKEeb4WmRECBURZBAGEeU1fyOgPhliJlTT9geneVpTxD23/jPbinSAGRYgADGuMP8P4CILgGd9W1HRPXyDeiEEIL5pvCnH0MnqVeMhh2e4iP9ldAnbRVgpBV6AGwmLIB6xLdAnzpzPb+zOn1fdU8uVr8/9/3eVr+fEMacZg1+LGBmfLczKHuNuIQ8gCggUU9lP8/hDjN01pcBluk8sQK4/jOa6P4kCxEOI8p+kTzCkNq6Z1YukTGswVcLUFHNnOCeyaBvexqjGnuD4Nh3GYWIVYxLkV9FJ+PwqluwpxcqK+QGJidIyfDLkm0hnW8wXiziL09xskPma0Hx1CEbKPW+CRwFudDuR0SBEVRVSr4kGKh3UrPlA81kgNRFTJWQpOh1UoAYFnZZoC07dz6RRejx0/HgN7Kg0j6RTYY01NMbyeSs+NXR9+WB2NVj8cvg71z+2eG0zxMVwjmAksO53G3elpnKVOYJtOw430NNhiTRsb//HDacPmbPoE/uEC0OsbMRtn12jGLQwzCznIsWu4CHJ77vgKkl50RzkcDMti0DQ1939M8izPUSG8mPJmWSZDEkSaieivy7IqzKMSdABVoTcROsDLEj1N3RehuQLebjOiGQxEFF52Kx7FEw5FLKCGQ0bEZbegqEGJkuUZMh0MOB1Oh93G/7b4GOdy63i0veruJSwMmlcGN1vLvQdHOs8kzndOFxW3xhoqK8HUiX9SvRV09mLy91+eQdGfWTjXHv1R/xJfktwGqL2x+yx8/McoWD6AjcFnZYPc153nE2c6Ryq85Sl4zdsQay0u1jNwKHmRzh70qtl3u85i7clXOAsfwVW+0tvQ2Ooy9ERqYZsvQfuQQu5biPW/gS4oyUOFpFIdOaiMeKIiN+1tdBygKyGKMU09XV3CMy0tcHRpFbKrS3C0pQXPLK0+HejtqTt8uK6nF6w71sA79XXlFRXldfXjOwZf0tGGJ5eX8WRbR0cbNC8vQ3Nbx1bpXkf8hFqstMfVMNCuGiO6AhFYyRTjVjYHmFm06y3ykQGhKxn1YN3JJkmwTCfkfOWEjMqhyQOXyP+auJaXcVU0WkUkPTYzdutR5XzFRLL3Sn8ifsfn9/vuxBO5RPcJ/D0zyzUn9mqfCE78pve7QKgAox6v+05SLKXF0M7SQbiVIW+enaEkyod+djTnMoIdNqINInkByStyzd3dNXorNXT18v3oFxf6j7xlHNHP2YygR6u74noXTuJFo8QeTw5+3vh2MDDTZz154spnN/PcjXx8kvyw7gh+hJMwDDlc9A+3XcsFeJxjYGRgYADi5PtWjvH8Nl8ZuDkTgCIM16srKhH0v0zO++wXgFwOBiaQKAA6hAuJeJxjYGRgYL/wr4CBgcuKgeH/f877DEARFCAAAIewBYJ4nGNgYGDgTCAOc1lhigEAvMIGAwAAAAAAGAAwAGIAdgCKAJ4AwAEkATIBcAHoAlACXgKsAvYAAHicY2BkYGAQYPBgYGEAASYg5gJCBob/YD4DABFeAXMAeJx9kL1uwjAUhU8gUJVIVaWqnRgsVepSEX5G1BkkRgb2EBwIcuLIMUi8QR+kT9CH6NgH6VP0xHiBAVtyvvvdc50oAB7xgwDNCvDgzma1cMfqzG3Ss+eQ/Oq5gwhjz136D889vGPhOcITDrwhCO9p+vj03GL+y3Ob/ttzSP713MEL/jx30Q/guYdV0Pcc4S0wRWKlyRM1yFNd1ku5PajkSl5WK2nqXJdiHI8uG3NZSkOzEeuTqI/bibWZyIwuxEyXViqlRWX0XqY23llbTYfDzPs41QUKJLCQMMhJCgM+U2iUqLGk3/JfKHbMzeSt3sr5mqapBf9/jNHNiTl96XrnzIZTa5x41jjyiya0FhnrjBnNuwRmbrZJK25NU7nenialj7FzUxWmGHJnV/nYvb34BzHZcLZ4nG2MQQ6CMBREO0ARtSjuvASHqu1XCD+0+YKE20tD3DmLmbxk8lSm9tzV/zTIkKOARokDKhxxwhkGNS64osFNXaxIWFoflnGx4s2Oc0xQOcs0eivadeQGs/VHwtgyPaf6B9K/ukk7pnTj4IbKS4jJp2lziaGVWt+/7YPJ5xsUke1aCnGwvpxjGqW+tN8xfgA=) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --material-icons-arrow-downward: "\\ea01";
      --material-icons-arrow-upward: "\\ea02";
      --material-icons-calendar: "\\ea03";
      --material-icons-check: "\\ea04";
      --material-icons-chevron-left: "\\ea05";
      --material-icons-chevron-right: "\\ea06";
      --material-icons-clear: "\\ea07";
      --material-icons-clock: "\\ea08";
      --material-icons-dropdown: "\\ea09";
      --material-icons-error: "\\ea0a";
      --material-icons-eye-disabled: "\\ea0b";
      --material-icons-eye: "\\ea0c";
      --material-icons-play: "\\ea0d";
      --material-icons-reload: "\\ea0e";
      --material-icons-upload: "\\ea0f";
    }
  </style>
</custom-style>`;
document.head.appendChild($_documentContainer.content);
/* NOTICE: Generated with 'gulp icons' */

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/font-roboto.js":
/*!********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/font-roboto.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const font = 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic';
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.crossOrigin = 'anonymous';
link.href = font;
document.head.appendChild(link);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/mixins/overlay.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/mixins/overlay.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _shadow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shadow.js */ "./node_modules/@vaadin/vaadin-material-styles/shadow.js");



const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="material-overlay">
  <template>
    <style>
      :host {
        top: 16px;
        right: 16px;
        /* TODO (@jouni): remove unnecessary multiplication after https://github.com/vaadin/vaadin-overlay/issues/90 is fixed */
        bottom: calc(1px * var(--vaadin-overlay-viewport-bottom) + 16px);
        left: 16px;
      }

      [part="overlay"] {
        background-color: var(--material-background-color);
        border-radius: 4px;
        box-shadow: var(--material-shadow-elevation-4dp);
        color: var(--material-body-text-color);
        font-family: var(--material-font-family);
        font-size: var(--material-body-font-size);
        font-weight: 400;
      }

      [part="content"] {
        padding: 8px 0;
      }

      [part="backdrop"] {
        opacity: 0.2;
        animation: 0.2s vaadin-overlay-backdrop-enter;
        will-change: opacity;
      }

      @keyframes vaadin-overlay-backdrop-enter {
        0% {
          opacity: 0;
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/shadow.js":
/*!***************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/shadow.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");


const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<custom-style>
  <style is="custom-style">
    html {
      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */
      --material-shadow-elevation-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      --material-shadow-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);
      --material-shadow-elevation-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
      --material-shadow-elevation-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
      --material-shadow-elevation-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
      --material-shadow-elevation-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 4px 22px 3px rgba(0, 0, 0, 0.12), 0 6px 7px -4px rgba(0, 0, 0, 0.4);
      --material-shadow-elevation-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
      --material-shadow-elevation-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.4);
    }
  </style>
</custom-style>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/typography.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/typography.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _font_roboto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font-roboto.js */ "./node_modules/@vaadin/vaadin-material-styles/font-roboto.js");
/* harmony import */ var _font_roboto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_font_roboto_js__WEBPACK_IMPORTED_MODULE_4__);




const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`<custom-style>
  <style>
    html {
      /* Font family */
      --material-font-family: 'Roboto', sans-serif;

      /* Font sizes */
      --material-h1-font-size: 6rem;
      --material-h2-font-size: 3.75rem;
      --material-h3-font-size: 3rem;
      --material-h4-font-size: 2.125rem;
      --material-h5-font-size: 1.5rem;
      --material-h6-font-size: 1.25rem;
      --material-body-font-size: 1rem;
      --material-small-font-size: 0.875rem;
      --material-button-font-size: 0.875rem;
      --material-caption-font-size: 0.75rem;

      /* Icon size */
      --material-icon-font-size: 20px;
    }
  </style>
</custom-style><dom-module id="material-typography">
  <template>
    <style>
      body {
        font-family: var(--material-font-family);
        font-size: var(--material-body-font-size);
        line-height: 1.4;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: inherit;
        line-height: 1.1;
        margin-top: 1.5em;
      }

      h1 {
        font-size: var(--material-h3-font-size);
        font-weight: 300;
        letter-spacing: -0.015em;
        margin-bottom: 1em;
        text-indent: -0.07em;
      }

      h2 {
        font-size: var(--material-h4-font-size);
        font-weight: 300;
        letter-spacing: -0.01em;
        margin-bottom: 0.75em;
        text-indent: -0.07em;
      }

      h3 {
        font-size: var(--material-h5-font-size);
        font-weight: 400;
        margin-bottom: 0.75em;
        text-indent: -0.05em;
      }

      h4 {
        font-size: var(--material-h6-font-size);
        font-weight: 400;
        letter-spacing: 0.01em;
        margin-bottom: 0.75em;
        text-indent: -0.05em;
      }

      h5 {
        font-size: var(--material-body-font-size);
        font-weight: 500;
        margin-bottom: 0.5em;
        text-indent: -0.025em;
      }

      h6 {
        font-size: var(--material-small-font-size);
        font-weight: 500;
        letter-spacing: 0.01em;
        margin-bottom: 0.25em;
        text-indent: -0.025em;
      }

      a,
      b,
      strong {
        font-weight: 500;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/version.js":
/*!****************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/version.js ***!
  \****************************************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
class Material extends HTMLElement {
  static get version() {
    return '1.2.3';
  }

}

customElements.define('vaadin-material-styles', Material);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js ***!
  \*****************************************************************************/
/*! exports provided: FocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusablesHelper", function() { return FocusablesHelper; });
const p = Element.prototype;
const matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
/**
 * `Polymer.IronFocusablesHelper` relies on some Polymer-specific legacy API,
 * especially the `root` property which does not exist for native shadow DOM.
 * That's why we have this helper here.
 * See https://github.com/PolymerElements/iron-overlay-behavior/issues/282
 */

const FocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the children,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    const result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    const needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return this._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isFocusable: function (element) {
    // From http://stackoverflow.com/a/1600194/4228703:
    // There isn't a definite list, it's up to the browser. The only
    // standard we have is DOM Level 2 HTML
    // https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
    // only elements that have a focus() method are HTMLInputElement,
    // HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
    // notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
    // tests with tabbables in different browsers
    // http://allyjs.io/data-tables/focusable.html
    // Elements that cannot be focused if they have [disabled] attribute.
    if (matches.call(element, 'input, select, textarea, button, object')) {
      return matches.call(element, ':not([disabled])');
    } // Elements that can be focused even if they have [disabled] attribute.


    return matches.call(element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
  },

  /**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isTabbable: function (element) {
    return this.isFocusable(element) && matches.call(element, ':not([tabindex="-1"])') && this._isVisible(element);
  },

  /**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */
  _normalizedTabIndex: function (element) {
    if (this.isFocusable(element)) {
      const tabIndex = element.getAttribute('tabindex') || 0;
      return Number(tabIndex);
    }

    return -1;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result` if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !this._isVisible(node)) {
      return false;
    }

    const element =
    /** @type {!HTMLElement} */
    node;

    const tabIndex = this._normalizedTabIndex(element);

    let needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distribution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distribution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>


    let children;

    if (element.localName === 'slot') {
      children = element.assignedNodes({
        flatten: true
      });
    } else {
      // Use shadow root if possible, will check for distributed nodes.
      children = (element.shadowRoot || element).children;
    }

    if (children) {
      for (let i = 0; i < children.length; i++) {
        // Ensure method is always invoked to collect tabbable children.
        needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
      }
    }

    return needsSort;
  },

  /**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */
  _isVisible: function (element) {
    // Check inline style first to save a re-flow. If looks good, check also
    // computed style.
    let style = element.style;

    if (style.visibility !== 'hidden' && style.display !== 'none') {
      style = window.getComputedStyle(element);
      return style.visibility !== 'hidden' && style.display !== 'none';
    }

    return false;
  },

  /**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _sortByTabIndex: function (tabbables) {
    // Implement a merge sort as Array.prototype.sort does a non-stable sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const len = tabbables.length;

    if (len < 2) {
      return tabbables;
    }

    const pivot = Math.ceil(len / 2);

    const left = this._sortByTabIndex(tabbables.slice(0, pivot));

    const right = this._sortByTabIndex(tabbables.slice(pivot));

    return this._mergeSortByTabIndex(left, right);
  },

  /**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _mergeSortByTabIndex: function (left, right) {
    const result = [];

    while (left.length > 0 && right.length > 0) {
      if (this._hasLowerTabOrder(left[0], right[0])) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    return result.concat(left, right);
  },

  /**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */
  _hasLowerTabOrder: function (a, b) {
    // Normalize tabIndexes
    // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
    const ati = Math.max(a.tabIndex, 0);
    const bti = Math.max(b.tabIndex, 0);
    return ati === 0 || bti === 0 ? bti > ati : ati > bti;
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js ***!
  \*******************************************************************/
/*! exports provided: OverlayElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayElement", function() { return OverlayElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-focusables-helper.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







let overlayContentCounter = 0;
const overlayContentCache = {};

const createOverlayContent = cssText => {
  const is = overlayContentCache[cssText] || processOverlayStyles(cssText);
  return document.createElement(is);
};

const processOverlayStyles = cssText => {
  overlayContentCounter++;
  const is = `vaadin-overlay-content-${overlayContentCounter}`;
  const styledTemplate = document.createElement('template');
  const style = document.createElement('style');
  style.textContent = ':host { display: block; }' + cssText;
  styledTemplate.content.appendChild(style);

  if (window.ShadyCSS) {
    window.ShadyCSS.prepareTemplate(styledTemplate, is);
  } // NOTE(platosha): Have to use an awkward IIFE returning class here
  // to prevent this class from showing up in analysis.json & API docs.

  /** @private */


  const klass = (() => class extends HTMLElement {
    static get is() {
      return is;
    }

    constructor() {
      super();

      if (!this.shadowRoot) {
        this.attachShadow({
          mode: 'open'
        });
        this.shadowRoot.appendChild(document.importNode(styledTemplate.content, true));
      }
    }

    connectedCallback() {
      if (window.ShadyCSS) {
        window.ShadyCSS.styleElement(this);
      }
    }

  })();

  customElements.define(klass.is, klass);
  overlayContentCache[cssText] = is;
  return is;
};
/**
 *
 * `<vaadin-overlay>` is a Web Component for creating overlays. The content of the overlay
 * can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the overlay uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `owner`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `owner`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-overlay id="overlay"></vaadin-overlay>
 * ```
 * ```js
 * const overlay = document.querySelector('#overlay');
 * overlay.renderer = function(root) {
 *  root.textContent = "Overlay content";
 * };
 * ```
 *
 * Renderer is called on the opening of the overlay and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * **NOTE:** when the renderer property is defined, the `<template>` content is not used.
 *
 * ### Templating
 *
 * Alternatively, the content can be provided with Polymer Template.
 * Overlay finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * After the content from the template is stamped, the `content` property
 * points to the content container.
 *
 * The overlay provides `forwardHostProp` when calling
 * `Polymer.Templatize.templatize` for the template, so that the bindings
 * from the parent scope propagate to the content.  You can also pass
 * custom `instanceProps` object using the `instanceProps` property.
 *
 * ```html
 * <vaadin-overlay>
 *   <template>Overlay content</template>
 * </vaadin-overlay>
 * ```
 *
 * **NOTE:** when using `instanceProps`: because of the Polymer limitation,
 * every template can only be templatized once, so it is important
 * to set `instanceProps` before the `template` is assigned to the overlay.
 *
 * ### Styling
 *
 * To style the overlay content, use styles in the parent scope:
 *
 * - If the overlay is used in a component, then the component styles
 *   apply the overlay content.
 * - If the overlay is used in the global DOM scope, then global styles
 *   apply to the overlay content.
 *
 * See examples for styling the overlay content in the live demos.
 *
 * The following Shadow DOM parts are available for styling the overlay component itself:
 *
 * Part name  | Description
 * -----------|---------------------------------------------------------|
 * `backdrop` | Backdrop of the overlay
 * `overlay`  | Container for position/sizing/alignment of the content
 * `content`  | Content of the overlay
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part
 * ---|---|---
 * `opening` | Applied just after the overlay is attached to the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 * `closing` | Applied just before the overlay is detached from the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 *
 * The following custom CSS properties are available for styling:
 *
 * Custom CSS property | Description | Default value
 * ---|---|---
 * `--vaadin-overlay-viewport-bottom` | Bottom offset of the visible viewport area | `0` or detected offset
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */


class OverlayElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`;
  }

  static get is() {
    return 'vaadin-overlay';
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        notify: true,
        observer: '_openedChanged',
        reflectToAttribute: true
      },

      /**
       * Owner element passed with renderer function
       */
      owner: Element,

      /**
       * Custom function for rendering the content of the overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `owner` The host element of the renderer function.
       * - `model` The object with the properties related with rendering.
       */
      renderer: Function,

      /**
       * The template of the overlay content.
       */
      template: {
        type: Object,
        notify: true
      },

      /**
       * Optional argument for `Polymer.Templatize.templatize`.
       */
      instanceProps: {
        type: Object
      },

      /**
       * References the content container after the template is stamped.
       */
      content: {
        type: Object,
        notify: true
      },
      withBackdrop: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Object with properties that is passed to `renderer` function
       */
      model: Object,

      /**
       * When true the overlay won't disable the main content, showing
       * it doesn’t change the functionality of the user interface.
       */
      modeless: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_modelessChanged'
      },

      /**
       * When set to true, the overlay is hidden. This also closes the overlay
       * immediately in case there is a closing animation in progress.
       */
      hidden: {
        type: Boolean,
        reflectToAttribute: true,
        observer: '_hiddenChanged'
      },

      /**
       * When true move focus to the first focusable element in the overlay,
       * or to the overlay if there are no focusable elements.
       */
      focusTrap: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to enable restoring of focus when overlay is closed.
       */
      restoreFocusOnClose: {
        type: Boolean,
        value: false
      },
      _mouseDownInside: {
        type: Boolean
      },
      _mouseUpInside: {
        type: Boolean
      },
      _instance: {
        type: Object
      },
      _originalContentPart: Object,
      _contentNodes: Array,
      _oldOwner: Element,
      _oldModel: Object,
      _oldTemplate: Object,
      _oldInstanceProps: Object,
      _oldRenderer: Object,
      _oldOpened: Boolean
    };
  }

  static get observers() {
    return ['_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)'];
  }

  constructor() {
    super();
    this._boundMouseDownListener = this._mouseDownListener.bind(this);
    this._boundMouseUpListener = this._mouseUpListener.bind(this);
    this._boundOutsideClickListener = this._outsideClickListener.bind(this);
    this._boundKeydownListener = this._keydownListener.bind(this);
    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_3__["FlattenedNodesObserver"](this, info => {
      this._setTemplateFromNodes(info.addedNodes);
    }); // Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.

    this._boundIronOverlayCanceledListener = this._ironOverlayCanceled.bind(this);

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      this._boundIosResizeListener = () => this._detectIosNavbar();
    }
  }

  ready() {
    super.ready();

    this._observer.flush(); // Need to add dummy click listeners to this and the backdrop or else
    // the document click event listener (_outsideClickListener) may never
    // get invoked on iOS Safari (reproducible in <vaadin-dialog>
    // and <vaadin-context-menu>).


    this.addEventListener('click', () => {});
    this.$.backdrop.addEventListener('click', () => {});
  }

  _detectIosNavbar() {
    if (!this.opened) {
      return;
    }

    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const landscape = innerWidth > innerHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (landscape && clientHeight > innerHeight) {
      this.style.setProperty('--vaadin-overlay-viewport-bottom', clientHeight - innerHeight + 'px');
    } else {
      this.style.setProperty('--vaadin-overlay-viewport-bottom', '0');
    }
  }

  _setTemplateFromNodes(nodes) {
    this.template = nodes.filter(node => node.localName && node.localName === 'template')[0] || this.template;
  }
  /**
   * @event vaadin-overlay-close
   * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
   */


  close(sourceEvent) {
    var evt = new CustomEvent('vaadin-overlay-close', {
      bubbles: true,
      cancelable: true,
      detail: {
        sourceEvent: sourceEvent
      }
    });
    this.dispatchEvent(evt);

    if (!evt.defaultPrevented) {
      this.opened = false;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (this._boundIosResizeListener) {
      this._detectIosNavbar();

      window.addEventListener('resize', this._boundIosResizeListener);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._boundIosResizeListener && window.removeEventListener('resize', this._boundIosResizeListener);
  }

  _ironOverlayCanceled(event) {
    event.preventDefault();
  }

  _mouseDownListener(event) {
    this._mouseDownInside = event.composedPath().indexOf(this.$.overlay) >= 0;
  }

  _mouseUpListener(event) {
    this._mouseUpInside = event.composedPath().indexOf(this.$.overlay) >= 0;
  }
  /**
   * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
   * propagating the event to the listener in the button. Otherwise, if the clicked button would call
   * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
   *
   * @event vaadin-overlay-outside-click
   * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
   */


  _outsideClickListener(event) {
    if (event.composedPath().indexOf(this.$.overlay) !== -1 || this._mouseDownInside || this._mouseUpInside) {
      this._mouseDownInside = false;
      this._mouseUpInside = false;
      return;
    }

    if (!this._last) {
      return;
    }

    const evt = new CustomEvent('vaadin-overlay-outside-click', {
      bubbles: true,
      cancelable: true,
      detail: {
        sourceEvent: event
      }
    });
    this.dispatchEvent(evt);

    if (this.opened && !evt.defaultPrevented) {
      this.close(event);
    }
  }
  /**
   * @event vaadin-overlay-escape-press
   * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
   */


  _keydownListener(event) {
    if (!this._last) {
      return;
    } // TAB


    if (event.key === 'Tab' && this.focusTrap) {
      // if only tab key is pressed, cycle forward, else cycle backwards.
      this._cycleTab(event.shiftKey ? -1 : 1);

      event.preventDefault(); // ESC
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      const evt = new CustomEvent('vaadin-overlay-escape-press', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event
        }
      });
      this.dispatchEvent(evt);

      if (this.opened && !evt.defaultPrevented) {
        this.close(event);
      }
    }
  }

  _ensureTemplatized() {
    this._setTemplateFromNodes(Array.from(this.children));
  }
  /**
   * @event vaadin-overlay-open
   * fired after the `vaadin-overlay` is opened.
   */


  _openedChanged(opened, wasOpened) {
    if (!this._instance) {
      this._ensureTemplatized();
    }

    if (opened) {
      // Store focused node.
      this.__restoreFocusNode = this._getActiveElement();

      this._animatedOpening();

      Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_2__["afterNextRender"])(this, () => {
        if (this.focusTrap && !this.contains(document._activeElement || document.activeElement)) {
          this._cycleTab(0, 0);
        }

        const evt = new CustomEvent('vaadin-overlay-open', {
          bubbles: true
        });
        this.dispatchEvent(evt);
      });

      if (!this.modeless) {
        this._addGlobalListeners();
      }
    } else if (wasOpened) {
      this._animatedClosing();

      if (!this.modeless) {
        this._removeGlobalListeners();
      }
    }
  }

  _hiddenChanged(hidden) {
    if (hidden && this.hasAttribute('closing')) {
      this._flushAnimation('closing');
    }
  }

  _shouldAnimate() {
    const name = getComputedStyle(this).getPropertyValue('animation-name');
    const hidden = getComputedStyle(this).getPropertyValue('display') === 'none';
    return !hidden && name && name != 'none';
  }

  _enqueueAnimation(type, callback) {
    const handler = `__${type}Handler`;

    const listener = () => {
      callback();
      this.removeEventListener('animationend', listener);
      delete this[handler];
    };

    this[handler] = listener;
    this.addEventListener('animationend', listener);
  }

  _flushAnimation(type) {
    const handler = `__${type}Handler`;

    if (typeof this[handler] === 'function') {
      this[handler]();
    }
  }

  _animatedOpening() {
    if (this.parentNode === document.body && this.hasAttribute('closing')) {
      this._flushAnimation('closing');
    }

    this._attachOverlay();

    this.setAttribute('opening', '');

    const finishOpening = () => {
      this.removeAttribute('opening');
      document.addEventListener('iron-overlay-canceled', this._boundIronOverlayCanceledListener);

      if (!this.modeless) {
        this._enterModalState();
      }
    };

    if (this._shouldAnimate()) {
      this._enqueueAnimation('opening', finishOpening);
    } else {
      finishOpening();
    }
  }

  _attachOverlay() {
    this._placeholder = document.createComment('vaadin-overlay-placeholder');
    this.parentNode.insertBefore(this._placeholder, this);
    document.body.appendChild(this);
  }

  _animatedClosing() {
    if (this.hasAttribute('opening')) {
      this._flushAnimation('opening');
    }

    if (this._placeholder) {
      this.setAttribute('closing', '');

      const finishClosing = () => {
        this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

        this._exitModalState();

        document.removeEventListener('iron-overlay-canceled', this._boundIronOverlayCanceledListener);

        this._detachOverlay();

        this.removeAttribute('closing');

        if (this.restoreFocusOnClose && this.__restoreFocusNode) {
          // If the activeElement is `<body>` or inside the overlay,
          // we are allowed to restore the focus. In all the other
          // cases focus might have been moved elsewhere by another
          // component or by the user interaction (e.g. click on a
          // button outside the overlay).
          const activeElement = this._getActiveElement();

          if (activeElement === document.body || this._deepContains(activeElement)) {
            this.__restoreFocusNode.focus();
          }

          this.__restoreFocusNode = null;
        }
      };

      if (this._shouldAnimate()) {
        this._enqueueAnimation('closing', finishClosing);
      } else {
        finishClosing();
      }
    }
  }

  _detachOverlay() {
    this._placeholder.parentNode.insertBefore(this, this._placeholder);

    this._placeholder.parentNode.removeChild(this._placeholder);
  }
  /**
   * Returns all attached overlays.
   */


  static get __attachedInstances() {
    return Array.from(document.body.children).filter(el => el instanceof OverlayElement);
  }
  /**
   * returns true if this is the last one in the opened overlays stack
   */


  get _last() {
    return this === OverlayElement.__attachedInstances.pop();
  }

  _modelessChanged(modeless) {
    if (!modeless) {
      if (this.opened) {
        this._addGlobalListeners();

        this._enterModalState();
      }
    } else {
      this._removeGlobalListeners();

      this._exitModalState();
    }
  }

  _addGlobalListeners() {
    document.addEventListener('mousedown', this._boundMouseDownListener);
    document.addEventListener('mouseup', this._boundMouseUpListener); // Firefox leaks click to document on contextmenu even if prevented
    // https://bugzilla.mozilla.org/show_bug.cgi?id=990614

    document.documentElement.addEventListener('click', this._boundOutsideClickListener, true);
    document.addEventListener('keydown', this._boundKeydownListener);
  }

  _enterModalState() {
    if (document.body.style.pointerEvents !== 'none') {
      // Set body pointer-events to 'none' to disable mouse interactions with
      // other document nodes.
      this._previousDocumentPointerEvents = document.body.style.pointerEvents;
      document.body.style.pointerEvents = 'none';
    } // Disable pointer events in other attached overlays


    OverlayElement.__attachedInstances.forEach(el => {
      if (el !== this && !el.hasAttribute('opening') && !el.hasAttribute('closing')) {
        el.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents = 'none';
      }
    });
  }

  _removeGlobalListeners() {
    document.removeEventListener('mousedown', this._boundMouseDownListener);
    document.removeEventListener('mouseup', this._boundMouseUpListener);
    document.documentElement.removeEventListener('click', this._boundOutsideClickListener, true);
    document.removeEventListener('keydown', this._boundKeydownListener);
  }

  _exitModalState() {
    if (this._previousDocumentPointerEvents !== undefined) {
      // Restore body pointer-events
      document.body.style.pointerEvents = this._previousDocumentPointerEvents;
      delete this._previousDocumentPointerEvents;
    } // Restore pointer events in the previous overlay(s)


    const instances = OverlayElement.__attachedInstances;
    let el; // Use instances.pop() to ensure the reverse order

    while (el = instances.pop()) {
      if (el === this) {
        // Skip the current instance
        continue;
      }

      el.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

      if (!el.modeless) {
        // Stop after the last modal
        break;
      }
    }
  }

  _removeOldContent() {
    if (!this.content || !this._contentNodes) {
      return;
    }

    this._observer.disconnect();

    this._contentNodes.forEach(node => {
      if (node.parentNode === this.content) {
        this.content.removeChild(node);
      }
    });

    if (this._originalContentPart) {
      // Restore the original <div part="content">
      this.$.content.parentNode.replaceChild(this._originalContentPart, this.$.content);
      this.$.content = this._originalContentPart;
      this._originalContentPart = undefined;
    }

    this._observer.connect();

    this._contentNodes = undefined;
    this.content = undefined;
  }

  _stampOverlayTemplate(template, instanceProps) {
    this._removeOldContent();

    if (!template._Templatizer) {
      template._Templatizer = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__["templatize"])(template, this, {
        instanceProps: instanceProps,
        forwardHostProp: function (prop, value) {
          if (this._instance) {
            this._instance.forwardHostProp(prop, value);
          }
        }
      });
    }

    this._instance = new template._Templatizer({});
    this._contentNodes = Array.from(this._instance.root.childNodes);
    const templateRoot = template._templateRoot || (template._templateRoot = template.getRootNode());

    const _isScoped = templateRoot !== document;

    if (_isScoped) {
      const isShady = window.ShadyCSS && !window.ShadyCSS.nativeShadow;

      if (!this.$.content.shadowRoot) {
        this.$.content.attachShadow({
          mode: 'open'
        });
      }

      let scopeCssText = Array.from(templateRoot.querySelectorAll('style')).reduce((result, style) => result + style.textContent, '');

      if (isShady) {
        // NOTE(platosha): ShadyCSS removes <style>’s from templates, so
        // we have to use these protected APIs to get their contents back
        const styleInfo = window.ShadyCSS.ScopingShim._styleInfoForNode(templateRoot.host);

        if (styleInfo) {
          scopeCssText += styleInfo._getStyleRules().parsedCssText;
          scopeCssText += '}';
        }
      } // The overlay root’s :host styles should not apply inside the overlay


      scopeCssText = scopeCssText.replace(/:host/g, ':host-nomatch');

      if (scopeCssText) {
        if (isShady) {
          // ShadyDOM: replace the <div part="content"> with a generated
          // styled custom element
          const contentPart = createOverlayContent(scopeCssText);
          contentPart.id = 'content';
          contentPart.setAttribute('part', 'content');
          this.$.content.parentNode.replaceChild(contentPart, this.$.content); // NOTE(platosha): carry the style scope of the content part

          contentPart.className = this.$.content.className;
          this._originalContentPart = this.$.content;
          this.$.content = contentPart;
        } else {
          // Shadow DOM: append a style to the content shadowRoot
          const style = document.createElement('style');
          style.textContent = scopeCssText;
          this.$.content.shadowRoot.appendChild(style);

          this._contentNodes.unshift(style);
        }
      }

      this.$.content.shadowRoot.appendChild(this._instance.root);
      this.content = this.$.content.shadowRoot;
    } else {
      this.appendChild(this._instance.root);
      this.content = this;
    }
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this.template = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    if (this.renderer) {
      this.renderer.call(this.owner, this.content, this.owner, this.model);
    }
  }

  _templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened) {
    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for overlay content');
    }

    const ownerOrModelChanged = this._oldOwner !== owner || this._oldModel !== model;
    this._oldModel = model;
    this._oldOwner = owner;
    const templateOrInstancePropsChanged = this._oldInstanceProps !== instanceProps || this._oldTemplate !== template;
    this._oldInstanceProps = instanceProps;
    this._oldTemplate = template;
    const rendererChanged = this._oldRenderer !== renderer;
    this._oldRenderer = renderer;
    const openedChanged = this._oldOpened !== opened;
    this._oldOpened = opened;

    if (template && templateOrInstancePropsChanged) {
      this._stampOverlayTemplate(template, instanceProps);
    } else if (renderer && (rendererChanged || openedChanged || ownerOrModelChanged)) {
      this.content = this;

      if (rendererChanged) {
        while (this.content.firstChild) {
          this.content.removeChild(this.content.firstChild);
        }
      }

      if (opened) {
        this.render();
      }
    }
  }

  _isFocused(element) {
    return element && element.getRootNode().activeElement === element;
  }

  _focusedIndex(elements) {
    elements = elements || this._getFocusableElements();
    return elements.indexOf(elements.filter(this._isFocused).pop());
  }

  _cycleTab(increment, index) {
    const focusableElements = this._getFocusableElements();

    if (index === undefined) {
      index = this._focusedIndex(focusableElements);
    }

    index += increment; // rollover to first item

    if (index >= focusableElements.length) {
      index = 0; // go to last item
    } else if (index < 0) {
      index = focusableElements.length - 1;
    }

    focusableElements[index].focus();
  }

  _getFocusableElements() {
    // collect all focusable elements
    return _vaadin_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__["FocusablesHelper"].getTabbableNodes(this.$.overlay);
  }

  _getActiveElement() {
    let active = document._activeElement || document.activeElement; // document.activeElement can be null
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
    // In IE 11, it can also be an object when operating in iframes
    // or document.documentElement (when overlay closed on outside click).
    // In these cases, default it to document.body.

    if (!active || active === document.documentElement || active instanceof Element === false) {
      active = document.body;
    }

    while (active.shadowRoot && active.shadowRoot.activeElement) {
      active = active.shadowRoot.activeElement;
    }

    return active;
  }

  _deepContains(node) {
    if (this.contains(node)) {
      return true;
    }

    let n = node;
    const doc = node.ownerDocument; // walk from node to `this` or `document`

    while (n && n !== doc && n !== this) {
      n = n.parentNode || n.host;
    }

    return n === this;
  }

}

customElements.define(OverlayElement.is, OverlayElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js ***!
  \*****************************************************************************/
/*! exports provided: ThemableMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemableMixin", function() { return ThemableMixin; });
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");


/**
 * @polymerMixin
 */

const ThemableMixin = superClass => class VaadinThemableMixin extends Object(_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemePropertyMixin"])(superClass) {
  /** @protected */
  static finalize() {
    super.finalize();
    const template = this.prototype._template;
    const hasOwnTemplate = this.template && this.template.parentElement && this.template.parentElement.id === this.is;

    const inheritedTemplate = Object.getPrototypeOf(this.prototype)._template;

    if (inheritedTemplate && !hasOwnTemplate) {
      // The element doesn't define its own template -> include the theme modules from the inherited template
      Array.from(inheritedTemplate.content.querySelectorAll('style[include]')).forEach(s => {
        this._includeStyle(s.getAttribute('include'), template);
      });
    }

    this._includeMatchingThemes(template);
  }
  /** @protected */


  static _includeMatchingThemes(template) {
    const domModule = _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__["DomModule"];
    const modules = domModule.prototype.modules;
    let hasThemes = false;
    const defaultModuleName = this.is + '-default-theme';
    Object.keys(modules).sort((moduleNameA, moduleNameB) => {
      const vaadinA = moduleNameA.indexOf('vaadin-') === 0;
      const vaadinB = moduleNameB.indexOf('vaadin-') === 0;
      const vaadinThemePrefixes = ['lumo-', 'material-'];
      const vaadinThemeA = vaadinThemePrefixes.filter(prefix => moduleNameA.indexOf(prefix) === 0).length > 0;
      const vaadinThemeB = vaadinThemePrefixes.filter(prefix => moduleNameB.indexOf(prefix) === 0).length > 0;

      if (vaadinA !== vaadinB) {
        // Include vaadin core styles first
        return vaadinA ? -1 : 1;
      } else if (vaadinThemeA !== vaadinThemeB) {
        // Include vaadin theme styles after that
        return vaadinThemeA ? -1 : 1;
      } else {
        // Lastly include custom styles so they override all vaadin styles
        return 0;
      }
    }).forEach(moduleName => {
      if (moduleName !== defaultModuleName) {
        const themeFor = modules[moduleName].getAttribute('theme-for');

        if (themeFor) {
          themeFor.split(' ').forEach(themeForToken => {
            if (new RegExp('^' + themeForToken.split('*').join('.*') + '$').test(this.is)) {
              hasThemes = true;

              this._includeStyle(moduleName, template);
            }
          });
        }
      }
    });

    if (!hasThemes && modules[defaultModuleName]) {
      // No theme modules found, include the default module if it exists
      this._includeStyle(defaultModuleName, template);
    }
  }
  /** @private */


  static _includeStyle(moduleName, template) {
    if (template && !template.content.querySelector(`style[include="${moduleName}"]`)) {
      const styleEl = document.createElement('style');
      styleEl.setAttribute('include', moduleName);
      template.content.appendChild(styleEl);
    }
  }

};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js ***!
  \***********************************************************************************/
/*! exports provided: ThemePropertyMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePropertyMixin", function() { return ThemePropertyMixin; });
/**
 * @polymerMixin
 */
const ThemePropertyMixin = superClass => class VaadinThemePropertyMixin extends superClass {
  static get properties() {
    return {
      /**
       * Helper property with theme attribute value facilitating propagation
       * in shadow DOM. Allows using `theme$="[[theme]]"` in the template.
       *
       * @protected
       */
      theme: {
        type: String,
        readOnly: true
      }
    };
  }
  /** @protected */


  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === 'theme') {
      this._setTheme(newValue);
    }
  }

};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZGlzYWJsZS11cGdyYWRlLW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9mb250LWljb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvZm9udC1yb2JvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9taXhpbnMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1vdmVybGF5L3NyYy92YWFkaW4tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW92ZXJsYXkvc3JjL3ZhYWRpbi1vdmVybGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtZS1wcm9wZXJ0eS1taXhpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0IHsgRWxlbWVudE1peGluIH0gZnJvbSAnLi9lbGVtZW50LW1peGluLmpzJztcblxuaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gJy4uL3V0aWxzL21peGluLmpzJztcblxuY29uc3QgRElTQUJMRURfQVRUUiA9ICdkaXNhYmxlLXVwZ3JhZGUnO1xuXG4vKipcbiAqIEVsZW1lbnQgY2xhc3MgbWl4aW4gdGhhdCBhbGxvd3MgdGhlIGVsZW1lbnQgdG8gYm9vdCB1cCBpbiBhIG5vbi1lbmFibGVkXG4gKiBzdGF0ZSB3aGVuIHRoZSBgZGlzYWJsZS11cGdyYWRlYCBhdHRyaWJ1dGUgaXMgcHJlc2VudC4gVGhpcyBtaXhpbiBpc1xuICogZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGVsZW1lbnQgY2xhc3NlcyBsaWtlIFBvbHltZXJFbGVtZW50IHRoYXQgcGVyZm9ybVxuICogaW5pdGlhbCBzdGFydHVwIHdvcmsgd2hlbiB0aGV5IGFyZSBmaXJzdCBjb25uZWN0ZWQuIFdoZW4gdGhlXG4gKiBgZGlzYWJsZS11cGdyYWRlYCBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCwgaWYgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkLCBpdFxuICogYm9vdHMgdXAgYW5kIFwiZW5hYmxlc1wiIGFzIGl0IG90aGVyd2lzZSB3b3VsZDsgaWYgaXQgaXMgbm90IGNvbm5lY3RlZCwgdGhlXG4gKiBlbGVtZW50IGJvb3RzIHVwIHdoZW4gaXQgaXMgbmV4dCBjb25uZWN0ZWQuXG4gKlxuICogVXNpbmcgYGRpc2FibGUtdXBncmFkZWAgd2l0aCBQb2x5bWVyRWxlbWVudCBwcmV2ZW50cyBhbnkgZGF0YSBwcm9wYWdhdGlvblxuICogdG8gdGhlIGVsZW1lbnQsIGFueSBlbGVtZW50IERPTSBmcm9tIHN0YW1waW5nLCBvciBhbnkgd29yayBkb25lIGluXG4gKiBjb25uZWN0ZWQvZGlzY29ubmN0ZWRDYWxsYmFjayBmcm9tIG9jY3VyaW5nLCBidXQgaXQgZG9lcyBub3QgcHJldmVudCB3b3JrXG4gKiBkb25lIGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLlxuICpcbiAqIE5vdGUsIHRoaXMgbWl4aW4gbXVzdCBiZSBhcHBsaWVkIG9uIHRvcCBvZiBhbnkgZWxlbWVudCBjbGFzcyB0aGF0XG4gKiBpdHNlbGYgaW1wbGVtZW50cyBhIGBjb25uZWN0ZWRDYWxsYmFja2Agc28gdGhhdCBpdCBjYW4gY29udHJvbCB0aGUgd29ya1xuICogZG9uZSBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgLiBGb3IgZXhhbXBsZSxcbiAqXG4gKiAgICAgTXlDbGFzcyA9IERpc2FibGVVcGdyYWRlTWl4aW4oY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3Mgey4uLn0pO1xuICpcbiAqIEBtaXhpbkZ1bmN0aW9uXG4gKiBAcG9seW1lclxuICogQGFwcGxpZXNNaXhpbiBFbGVtZW50TWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IERpc2FibGVVcGdyYWRlTWl4aW4gPSBkZWR1cGluZ01peGluKChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyB7YmFzZX1cbiAgICogQGltcGxlbWVudHMge1BvbHltZXJfRWxlbWVudE1peGlufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IEVsZW1lbnRNaXhpbihiYXNlKTtcblxuICAvKipcbiAgICogQHBvbHltZXJcbiAgICogQG1peGluQ2xhc3NcbiAgICogQGltcGxlbWVudHMge1BvbHltZXJfRGlzYWJsZVVwZ3JhZGVNaXhpbn1cbiAgICovXG4gIGNsYXNzIERpc2FibGVVcGdyYWRlQ2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcblxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlZEF0dHJpYnV0ZXMuY29uY2F0KERJU0FCTEVEX0FUVFIpO1xuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkLCB2YWx1ZSwgbmFtZXNwYWNlKSB7XG4gICAgICBpZiAobmFtZSA9PSBESVNBQkxFRF9BVFRSKSB7XG4gICAgICAgIGlmICghdGhpcy5fX2RhdGFFbmFibGVkICYmIHZhbHVlID09IG51bGwgJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGQsIHZhbHVlLCBuYW1lc3BhY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICBOT1RFOiBjYW5ub3QgZ2F0ZSBvbiBhdHRyaWJ1dGUgYmVjYXVzZSB0aGlzIGlzIGNhbGxlZCBiZWZvcmVcbiAgICAgIGF0dHJpYnV0ZXMgYXJlIGRlbGl2ZXJlZC4gVGhlcmVmb3JlLCB3ZSBzdHViIHRoaXMgb3V0IGFuZFxuICAgICAgY2FsbCBgc3VwZXIuX2luaXRpYWxpemVQcm9wZXJ0aWVzKClgIG1hbnVhbGx5LlxuICAgICovXG4gICAvKiogQG92ZXJyaWRlICovXG4gICAgX2luaXRpYWxpemVQcm9wZXJ0aWVzKCkge31cblxuICAgIC8vIHByZXZlbnQgdXNlciBjb2RlIGluIGNvbm5lY3RlZCBmcm9tIHJ1bm5pbmdcbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAodGhpcy5fX2RhdGFFbmFibGVkIHx8ICF0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRF9BVFRSKSkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHByZXZlbnQgZWxlbWVudCBmcm9tIHR1cm5pbmcgb24gcHJvcGVydGllc1xuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBfZW5hYmxlUHJvcGVydGllcygpIHtcbiAgICAgIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoRElTQUJMRURfQVRUUikpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9fZGF0YUVuYWJsZWQpIHtcbiAgICAgICAgICBzdXBlci5faW5pdGlhbGl6ZVByb3BlcnRpZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5fZW5hYmxlUHJvcGVydGllcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG9ubHkgZ28gaWYgXCJlbmFibGVkXCJcbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAodGhpcy5fX2RhdGFFbmFibGVkKSB7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzYWJsZVVwZ3JhZGVDbGFzcztcblxufSk7XG4iLCJpbXBvcnQgJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2N1c3RvbS1zdHlsZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1tb2R1bGUuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtY29sb3ItbGlnaHRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0LFxuICAgICAgI2hvc3QtZml4IHtcbiAgICAgICAgLyogVGV4dCBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3I6IHZhcigtLWxpZ2h0LXRoZW1lLXRleHQtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC44NykpO1xuICAgICAgICAtLW1hdGVyaWFsLXNlY29uZGFyeS10ZXh0LWNvbG9yOiB2YXIoLS1saWdodC10aGVtZS1zZWNvbmRhcnktY29sb3IsIHJnYmEoMCwgMCwgMCwgMC41NCkpO1xuICAgICAgICAtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3I6IHZhcigtLWxpZ2h0LXRoZW1lLWRpc2FibGVkLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuMzgpKTtcblxuICAgICAgICAvKiBQcmltYXJ5IGNvbG9ycyAqL1xuICAgICAgICAtLW1hdGVyaWFsLXByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICM2MjAwZWUpO1xuICAgICAgICAtLW1hdGVyaWFsLXByaW1hcnktY29udHJhc3QtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtYmFzZS1jb2xvciwgI2ZmZik7XG4gICAgICAgIC0tbWF0ZXJpYWwtcHJpbWFyeS10ZXh0LWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKTtcblxuICAgICAgICAvKiBFcnJvciBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1lcnJvci1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IsICNiMDAwMjApO1xuICAgICAgICAtLW1hdGVyaWFsLWVycm9yLXRleHQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWVycm9yLWNvbG9yKTtcblxuICAgICAgICAvKiBCYWNrZ3JvdW5kIGNvbG9ycyAqL1xuICAgICAgICAtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXRoZW1lLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xuICAgICAgICAtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC10aGVtZS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgI2Y1ZjVmNSk7XG4gICAgICAgIC0tbWF0ZXJpYWwtZGlzYWJsZWQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG5cbiAgICAgICAgLyogRGl2aWRlciBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1kaXZpZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXG4gICAgICAgIC8qIFVuZG9jdW1lbnRlZCBpbnRlcm5hbCBwcm9wZXJ0aWVzIChwcmVmaXhlZCB3aXRoIHRocmVlIGRhc2hlcykgKi9cblxuICAgICAgICAvKiBUZXh0IGZpZWxkIHR3ZWFrcyAqL1xuICAgICAgICAtLV9tYXRlcmlhbC10ZXh0LWZpZWxkLWlucHV0LWxpbmUtYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLW9wYWNpdHk6IGluaXRpYWw7XG4gICAgICAgIC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1ob3Zlci1vcGFjaXR5OiBpbml0aWFsO1xuICAgICAgICAtLV9tYXRlcmlhbC10ZXh0LWZpZWxkLWZvY3VzZWQtbGFiZWwtb3BhY2l0eTogaW5pdGlhbDtcblxuICAgICAgICAvKiBCdXR0b24gdHdlYWtzICovXG4gICAgICAgIC0tX21hdGVyaWFsLWJ1dHRvbi1yYWlzZWQtYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgLS1fbWF0ZXJpYWwtYnV0dG9uLW91dGxpbmUtY29sb3I6IGluaXRpYWw7XG5cbiAgICAgICAgLyogR3JpZCB0d2Vha3MgKi9cbiAgICAgICAgLS1fbWF0ZXJpYWwtZ3JpZC1yb3ctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcblxuICAgICAgICAvKiBTcGxpdCBsYXlvdXQgdHdlYWtzICovXG4gICAgICAgIC0tX21hdGVyaWFsLXNwbGl0LWxheW91dC1zcGxpdHRlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3RoZW1lfj1cImRhcmtcIl0ge1xuICAgICAgICAvKiBUZXh0IGNvbG9ycyAqL1xuICAgICAgICAtLW1hdGVyaWFsLWJvZHktdGV4dC1jb2xvcjogdmFyKC0tZGFyay10aGVtZS10ZXh0LWNvbG9yLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpKTtcbiAgICAgICAgLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcjogdmFyKC0tZGFyay10aGVtZS1zZWNvbmRhcnktY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSk7XG4gICAgICAgIC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcjogdmFyKC0tZGFyay10aGVtZS1kaXNhYmxlZC1jb2xvciwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpKTtcblxuICAgICAgICAvKiBQcmltYXJ5IGNvbG9ycyAqL1xuICAgICAgICAtLW1hdGVyaWFsLXByaW1hcnktY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IsICM3ZTNmZjIpO1xuICAgICAgICAtLW1hdGVyaWFsLXByaW1hcnktdGV4dC1jb2xvcjogI2I3OTRmNjtcblxuICAgICAgICAvKiBFcnJvciBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1lcnJvci1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IsICNkZTI4MzkpO1xuICAgICAgICAtLW1hdGVyaWFsLWVycm9yLXRleHQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWVycm9yLWNvbG9yKTtcblxuICAgICAgICAvKiBCYWNrZ3JvdW5kIGNvbG9ycyAqL1xuICAgICAgICAtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtYmFja2dyb3VuZC1jb2xvciwgIzMwMzAzMCk7XG4gICAgICAgIC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsICMzYjNiM2IpO1xuICAgICAgICAtLW1hdGVyaWFsLWRpc2FibGVkLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbiAgICAgICAgLyogRGl2aWRlciBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1kaXZpZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuXG4gICAgICAgIC8qIFVuZG9jdW1lbnRlZCBpbnRlcm5hbCBwcm9wZXJ0aWVzIChwcmVmaXhlZCB3aXRoIHRocmVlIGRhc2hlcykgKi9cblxuICAgICAgICAvKiBUZXh0IGZpZWxkIHR3ZWFrcyAqL1xuICAgICAgICAtLV9tYXRlcmlhbC10ZXh0LWZpZWxkLWlucHV0LWxpbmUtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLW9wYWNpdHk6IDAuNztcbiAgICAgICAgLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWhvdmVyLW9wYWNpdHk6IDE7XG4gICAgICAgIC0tX21hdGVyaWFsLXRleHQtZmllbGQtZm9jdXNlZC1sYWJlbC1vcGFjaXR5OiAxO1xuXG4gICAgICAgIC8qIEJ1dHRvbiB0d2Vha3MgKi9cbiAgICAgICAgLS1fbWF0ZXJpYWwtYnV0dG9uLXJhaXNlZC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgICAtLV9tYXRlcmlhbC1idXR0b24tb3V0bGluZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXG4gICAgICAgIC8qIEdyaWQgdHdlYWtzICovXG4gICAgICAgIC0tX21hdGVyaWFsLWdyaWQtcm93LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICAgIC0tX21hdGVyaWFsLWdyaWQtcm93LXNlbGVjdGVkLW92ZXJsYXktb3BhY2l0eTogMC4xNjtcblxuICAgICAgICAvKiBTcGxpdCBsYXlvdXQgdHdlYWtzICovXG4gICAgICAgIC0tX21hdGVyaWFsLXNwbGl0LWxheW91dC1zcGxpdHRlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT48ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWNvbG9yLWRhcmtcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0LFxuICAgICAgI2hvc3QtZml4IHtcbiAgICAgICAgLyogVGV4dCBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtdGV4dC1jb2xvciwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSk7XG4gICAgICAgIC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtc2Vjb25kYXJ5LWNvbG9yLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpO1xuICAgICAgICAtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtZGlzYWJsZWQtY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSk7XG5cbiAgICAgICAgLyogUHJpbWFyeSBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCAjN2UzZmYyKTtcbiAgICAgICAgLS1tYXRlcmlhbC1wcmltYXJ5LXRleHQtY29sb3I6ICNiNzk0ZjY7XG5cbiAgICAgICAgLyogRXJyb3IgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtZXJyb3ItY29sb3I6IHZhcigtLWVycm9yLWNvbG9yLCAjZGUyODM5KTtcbiAgICAgICAgLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci1jb2xvcik7XG5cbiAgICAgICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRoZW1lLWJhY2tncm91bmQtY29sb3IsICMzMDMwMzApO1xuICAgICAgICAtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRoZW1lLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCAjM2IzYjNiKTtcbiAgICAgICAgLS1tYXRlcmlhbC1kaXNhYmxlZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4gICAgICAgIC8qIERpdmlkZXIgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtZGl2aWRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcblxuICAgICAgICAvKiBVbmRvY3VtZW50ZWQgaW50ZXJuYWwgcHJvcGVydGllcyAocHJlZml4ZWQgd2l0aCB0aHJlZSBkYXNoZXMpICovXG5cbiAgICAgICAgLyogVGV4dCBmaWVsZCB0d2Vha3MgKi9cbiAgICAgICAgLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1vcGFjaXR5OiAwLjc7XG4gICAgICAgIC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1ob3Zlci1vcGFjaXR5OiAxO1xuICAgICAgICAtLV9tYXRlcmlhbC10ZXh0LWZpZWxkLWZvY3VzZWQtbGFiZWwtb3BhY2l0eTogMTtcblxuICAgICAgICAvKiBCdXR0b24gdHdlYWtzICovXG4gICAgICAgIC0tX21hdGVyaWFsLWJ1dHRvbi1yYWlzZWQtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgICAgLS1fbWF0ZXJpYWwtYnV0dG9uLW91dGxpbmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblxuICAgICAgICAvKiBHcmlkIHR3ZWFrcyAqL1xuICAgICAgICAtLV9tYXRlcmlhbC1ncmlkLXJvdy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgICAtLV9tYXRlcmlhbC1ncmlkLXJvdy1zZWxlY3RlZC1vdmVybGF5LW9wYWNpdHk6IDAuMTY7XG5cbiAgICAgICAgLyogU3BsaXQgbGF5b3V0IHR3ZWFrcyAqL1xuICAgICAgICAtLV9tYXRlcmlhbC1zcGxpdC1sYXlvdXQtc3BsaXR0ZXItYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxjdXN0b20tc3R5bGU+XG4gIDxzdHlsZT5cbiAgICA6cm9vdCB7XG4gICAgICAvKiBUZXh0IGNvbG9ycyAqL1xuICAgICAgLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3I6IHZhcigtLWxpZ2h0LXRoZW1lLXRleHQtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC44NykpO1xuICAgICAgLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcjogdmFyKC0tbGlnaHQtdGhlbWUtc2Vjb25kYXJ5LWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuNTQpKTtcbiAgICAgIC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcjogdmFyKC0tbGlnaHQtdGhlbWUtZGlzYWJsZWQtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC4zOCkpO1xuXG4gICAgICAvKiBQcmltYXJ5IGNvbG9ycyAqL1xuICAgICAgLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjNjIwMGVlKTtcbiAgICAgIC0tbWF0ZXJpYWwtcHJpbWFyeS1jb250cmFzdC1jb2xvcjogdmFyKC0tZGFyay10aGVtZS1iYXNlLWNvbG9yLCAjZmZmKTtcbiAgICAgIC0tbWF0ZXJpYWwtcHJpbWFyeS10ZXh0LWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKTtcblxuICAgICAgLyogRXJyb3IgY29sb3JzICovXG4gICAgICAtLW1hdGVyaWFsLWVycm9yLWNvbG9yOiB2YXIoLS1lcnJvci1jb2xvciwgI2IwMDAyMCk7XG4gICAgICAtLW1hdGVyaWFsLWVycm9yLXRleHQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWVycm9yLWNvbG9yKTtcblxuICAgICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cbiAgICAgIC0tbWF0ZXJpYWwtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGhlbWUtYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG4gICAgICAtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC10aGVtZS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgI2Y1ZjVmNSk7XG4gICAgICAtLW1hdGVyaWFsLWRpc2FibGVkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuXG4gICAgICAvKiBEaXZpZGVyIGNvbG9ycyAqL1xuICAgICAgLS1tYXRlcmlhbC1kaXZpZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvY3VzdG9tLXN0eWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvY3VzdG9tLXN0eWxlLmpzJztcbmltcG9ydCAnLi92ZXJzaW9uLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8Y3VzdG9tLXN0eWxlPlxuICA8c3R5bGU+XG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogJ21hdGVyaWFsLWljb25zJztcbiAgICAgIHNyYzogdXJsKGRhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFBakFBQXNBQUFBQURaUUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCSFUxVkNBQUFCQ0FBQUFEc0FBQUJVSUlzbGVrOVRMeklBQUFGRUFBQUFSQUFBQUZaU2swOW9ZMjFoY0FBQUFZZ0FBQUNOQUFBQ05PdUNYSDVuYkhsbUFBQUNHQUFBQkR3QUFBWHNkSzhVR0dobFlXUUFBQVpVQUFBQU1BQUFBRFlYOVQySWFHaGxZUUFBQm9RQUFBQWdBQUFBSkJHeUNMcG9iWFI0QUFBR3BBQUFBQlFBQUFCQWpYb0FBR3h2WTJFQUFBYTRBQUFBSWdBQUFDSUtNZ2pVYldGNGNBQUFCdHdBQUFBZkFBQUFJQUVlQUZSdVlXMWxBQUFHL0FBQUFUUUFBQUplM2w3NjRYQnZjM1FBQUFnd0FBQUFqd0FBQU1xSkVqRFdlSnhqWUdSZ1lPQmlNR0N3WTJCeWNmTUpZZURMU1N6Slk1QmlZR0dBQUpBOE1wc3hKek05a1lFRHhnUEtzWUJwRGlCbWc0Z0NBQ1k3QlVnQWVKeGpZT1M0d1RpQmdaV0JnWUdmYlFJREEyTUFoR1pwWUNobHltWmdZR0pnWldiQUNnTFNYRk1ZSEY0eHZ1Sm52L0N2Z09FRyt3WEc2VUJoUnBBY0FNeVVESk40bk8yUjJRMERJUXhFSHd0N0h6U1NHbEpRdmxKa3FxR0pqWWRKR2JIMFBQSmdFTEtCRWNqQkl5aVEzaVFVcjNCVDl6TmI5d3ZQM2xQa3QzcmZrWk55MUtYbklYcEx2RGd4czdER3ZaMkRrNHNheHhQL09IcisvS3FxQ1pvKzA4RWd6VWE3YWNWb3ltMDAybHViRE5MWklGME0wdFVnM1l6MjJYYUQ5REQ2WFRzTjBzc2dyWWI2QlpFUUppVUFBQUI0bkgxVWJVaGJWeGcrNzcyNTl5Wk1KYmZrbzdEaGJuSnRyall1V2ZOeHN4OXFCRnUzMmxqSFdxV082VkQ2TVcxRzR1WVBzZlNEZFFPSFhPdVBydFlmS3l0S0p6aVlFSmtRWkxRL0JxSENwc1VmZ2haWDFqSEJqQlVXV3FmZXM1MXpFMWRsb3lmSnlYdk9lZDV6bnZPK3ozc1FJTktFZWI0V21SRUNCVVJaQkFHRWVVMWZ5T2dQaGxpSmxUVDlnZW5lVnBUeEQyMy9qUGJpblNBR1JZZ0FER3VNUDhQNENJTGdHZDlXMUhSUFh5RGVpRUVJTDVwdkNuSDBNbnFWZU1oaDJlNGlQOWxkQW5iUlZncEJWNkFHd21MSUI2eExkQW56cHpQYit6T24xZmRVOHVWcjgvOS8zZVZyK2ZFTWFjWmcxK0xHQm1mTGN6S0h1TnVJUThnQ2dnVVU5bFA4L2hEak4wMXBjQmx1azhzUUs0L2pPYTZQNGtDeEVPSThwK2tUekNrTnE2WjFZdWtUR3N3VmNMVUZITm5PQ2V5YUJ2ZXhxakdudUQ0TmgzR1lXSVZZeExrVjlGSitQd3FsdXdweGNxSytRR0ppZEl5ZkRMa20waG5XOHdYaXppTDA5eHNrUG1hMEh4MUNFYktQVytDUndGdWREdVIwU0JFVlJWU3I0a0dLaDNVclBsQTgxa2dOUkZUSldRcE9oMVVvQVlGblpab0MwN2R6NlJSZWp4MC9IZ043S2cwajZSVFlZMDFOTWJ5ZVNzK05YUjkrV0IyTlZqOGN2ZzcxeisyZUcwenhNVndqbUFrc081M0czZWxwbktWT1lKdE93NDMwTk5oaVRSc2IvL0hEYWNQbWJQb0UvdUVDME9zYk1SdG4xMmpHTFF3ekN6bklzV3U0Q0hKNzd2Z0trbDUwUnprY0RNdGkwRFExOTM5TThpelBVU0c4bVBKbVdTWkRFa1NhaWVpdnk3SXF6S01TZEFCVm9UY1JPc0RMRWoxTjNSZWh1UUxlYmpPaUdReEVGRjUyS3g3RkV3NUZMS0NHUTBiRVpiZWdxRUdKa3VVWk1oME1PQjFPaDkzRy83YjRHT2R5NjNpMHZlcnVKU3dNbWxjR04xdkx2UWRIT3M4a3puZE9GeFczeGhvcUs4SFVpWDlTdlJWMDltTHk5MStlUWRHZldUalhIdjFSL3hKZmt0d0dxTDJ4K3l4OC9NY29XRDZBamNGblpZUGMxNTNuRTJjNlJ5cTg1U2w0emRzUWF5MHUxak53S0htUnpoNzBxdGwzdTg1aTdjbFhPQXNmd1ZXKzB0dlEyT295OUVScVlac3ZRZnVRUXU1YmlQVy9nUzRveVVPRnBGSWRPYWlNZUtJaU4rMXRkQnlnS3lHS01VMDlYVjNDTXkwdGNIUnBGYktyUzNDMHBRWFBMSzArSGVqdHFUdDh1SzZuRjZ3NzFzQTc5WFhsRlJYbGRmWGpPd1pmMHRHR0o1ZVg4V1JiUjBjYk5DOHZRM05ieDFicFhrZjhoRnFzdE1mVk1OQ3VHaU82QWhGWXlSVGpWallIbUZtMDZ5M3lrUUdoS3huMVlOM0pKa213VENma2ZPV0VqTXFoeVFPWHlQK2F1SmFYY1ZVMFdrVWtQVFl6ZHV0UjVYekZSTEwzU244aWZzZm45L3Z1eEJPNVJQY0ovRDB6eXpVbjltcWZDRTc4cHZlN1FLZ0FveDZ2KzA1U0xLWEYwTTdTUWJpVklXK2VuYUVreW9kK2RqVG5Nb0lkTnFJTklua0J5U3R5emQzZE5Yb3JOWFQxOHYzb0Z4ZjZqN3hsSE5IUDJZeWdSNnU3NG5vWFR1SkZvOFFlVHc1KzN2aDJNRERUWnoxNTRzcG5OL1Bjalh4OGt2eXc3Z2graEpNd0REbGM5QSszWGNzRmVKeGpZR1JnWUFEaTVQdFdqdkg4Tmw4WnVEa1RnQ0lNMTZzcktoSDB2MHpPKyt3WGdGd09CaWFRS0FBNmhBdUplSnhqWUdSZ1lML3dyNENCZ2N1S2dlSC9mODc3REVBUkZDQUFBSWV3QllKNG5HTmdZR0RnVENBT2MxbGhpZ0VBdk1JR0F3QUFBQUFBR0FBd0FHSUFkZ0NLQUo0QXdBRWtBVElCY0FIb0FsQUNYZ0tzQXZZQUFIaWNZMkJrWUdBUVlQQmdZR0VBQVNZZzVnSkNCb2IvWUQ0REFCRmVBWE1BZUp4OWtMMXV3akFVaFU4Z1VKVklWYVdxblJnc1ZlcFNFWDVHMUJra1JnYjJFQndJY3VMSU1VaThRUitrVDlDSDZOZ0g2VlAweEhpQkFWdHl2dnZkYzUwb0FCN3hnd0ROQ3ZEZ3ptYTFjTWZxekczU3MrZVEvT3E1Z3doanoxMzZEODg5dkdQaE9jSVREcndoQ085cCt2ajAzR0wreTNPYi90dHpTUDcxM01FTC9qeDMwUS9ndVlkVjBQY2M0UzB3UldLbHlSTTF5Rk5kMWt1NVBhamtTbDVXSzJucVhKZGlISTh1RzNOWlNrT3pFZXVUcUkvYmliV1p5SXd1eEV5WFZpcWxSV1gwWHFZMjNsbGJUWWZEelBzNDFRVUtKTENRTU1oSkNnTStVMmlVcUxHazMvSmZLSGJNemVTdDNzcjVtcWFwQmY5L2pOSE5pVGw5NlhybnpJWlRhNXg0MWpqeWl5YTBGaG5yakJuTnV3Um1iclpKSzI1TlU3bmVuaWFsajdGelV4V21HSEpuVi9uWXZiMzRCekhaY0xaNG5HMk1RUTZDTUJSRU8wQVJ0U2p1dkFTSHF1MVhDRCswK1lLRTIwdEQzRG1MbWJ4azhsU205dHpWL3pUSWtLT0FSb2tES2h4eHdoa0dOUzY0b3NGTlhheElXRm9mbG5HeDRzMk9jMHhRT2NzMGVpdmFkZVFHcy9WSHd0Z3lQYWY2QjlLL3VrazdwblRqNEliS1M0akpwMmx6aWFHVld0Ky83WVBKNXhzVWtlMWFDbkd3dnB4akdxVyt0Tjh4ZmdBPSkgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cblxuICAgIGh0bWwge1xuICAgICAgLS1tYXRlcmlhbC1pY29ucy1hcnJvdy1kb3dud2FyZDogXCJcXFxcZWEwMVwiO1xuICAgICAgLS1tYXRlcmlhbC1pY29ucy1hcnJvdy11cHdhcmQ6IFwiXFxcXGVhMDJcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtY2FsZW5kYXI6IFwiXFxcXGVhMDNcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtY2hlY2s6IFwiXFxcXGVhMDRcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtY2hldnJvbi1sZWZ0OiBcIlxcXFxlYTA1XCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWNoZXZyb24tcmlnaHQ6IFwiXFxcXGVhMDZcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtY2xlYXI6IFwiXFxcXGVhMDdcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtY2xvY2s6IFwiXFxcXGVhMDhcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtZHJvcGRvd246IFwiXFxcXGVhMDlcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtZXJyb3I6IFwiXFxcXGVhMGFcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtZXllLWRpc2FibGVkOiBcIlxcXFxlYTBiXCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWV5ZTogXCJcXFxcZWEwY1wiO1xuICAgICAgLS1tYXRlcmlhbC1pY29ucy1wbGF5OiBcIlxcXFxlYTBkXCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLXJlbG9hZDogXCJcXFxcZWEwZVwiO1xuICAgICAgLS1tYXRlcmlhbC1pY29ucy11cGxvYWQ6IFwiXFxcXGVhMGZcIjtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2N1c3RvbS1zdHlsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG5cbi8qIE5PVElDRTogR2VuZXJhdGVkIHdpdGggJ2d1bHAgaWNvbnMnICovXG4vKlxuICBGSVhNRShwb2x5bWVyLW1vZHVsaXplcik6IHRoZSBhYm92ZSBjb21tZW50cyB3ZXJlIGV4dHJhY3RlZFxuICBmcm9tIEhUTUwgYW5kIG1heSBiZSBvdXQgb2YgcGxhY2UgaGVyZS4gUmV2aWV3IHRoZW0gYW5kXG4gIHRoZW4gZGVsZXRlIHRoaXMgY29tbWVudCFcbiovXG47XG4iLCJjb25zdCBmb250ID0gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubzo0MDAsNzAwfFJvYm90bzo0MDAsMzAwLDMwMGl0YWxpYyw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljJztcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5saW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbmxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG5saW5rLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG5saW5rLmhyZWYgPSBmb250O1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiIsImltcG9ydCAnLi4vY29sb3IuanMnO1xuaW1wb3J0ICcuLi90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnLi4vc2hhZG93LmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLW92ZXJsYXlcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgLyogVE9ETyAoQGpvdW5pKTogcmVtb3ZlIHVubmVjZXNzYXJ5IG11bHRpcGxpY2F0aW9uIGFmdGVyIGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLW92ZXJsYXkvaXNzdWVzLzkwIGlzIGZpeGVkICovXG4gICAgICAgIGJvdHRvbTogY2FsYygxcHggKiB2YXIoLS12YWFkaW4tb3ZlcmxheS12aWV3cG9ydC1ib3R0b20pICsgMTZweCk7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tNGRwKTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWJvZHktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYXRlcmlhbC1mb250LWZhbWlseSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtYm9keS1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNvbnRlbnRcIl0ge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJiYWNrZHJvcFwiXSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgYW5pbWF0aW9uOiAwLjJzIHZhYWRpbi1vdmVybGF5LWJhY2tkcm9wLWVudGVyO1xuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyB2YWFkaW4tb3ZlcmxheS1iYWNrZHJvcC1lbnRlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2N1c3RvbS1zdHlsZS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGN1c3RvbS1zdHlsZT5cbiAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCI+XG4gICAgaHRtbCB7XG4gICAgICAvKiBmcm9tIGh0dHA6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9jNTM5NGRkZjJlOGIyYTVjOTE4NTkwNGI1NzQyMWNkYiAqL1xuICAgICAgLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLTJkcDogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLTNkcDogMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLTRkcDogMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgIC0tbWF0ZXJpYWwtc2hhZG93LWVsZXZhdGlvbi02ZHA6IDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLThkcDogMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLTEyZHA6IDAgMTJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCAyMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tMTZkcDogMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tMjRkcDogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvY3VzdG9tLXN0eWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvY3VzdG9tLXN0eWxlLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvZG9tLW1vZHVsZS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8Y3VzdG9tLXN0eWxlPlxuICA8c3R5bGU+XG4gICAgaHRtbCB7XG4gICAgICAvKiBGb250IGZhbWlseSAqL1xuICAgICAgLS1tYXRlcmlhbC1mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cbiAgICAgIC8qIEZvbnQgc2l6ZXMgKi9cbiAgICAgIC0tbWF0ZXJpYWwtaDEtZm9udC1zaXplOiA2cmVtO1xuICAgICAgLS1tYXRlcmlhbC1oMi1mb250LXNpemU6IDMuNzVyZW07XG4gICAgICAtLW1hdGVyaWFsLWgzLWZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIC0tbWF0ZXJpYWwtaDQtZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgICAgIC0tbWF0ZXJpYWwtaDUtZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAtLW1hdGVyaWFsLWg2LWZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIC0tbWF0ZXJpYWwtYm9keS1mb250LXNpemU6IDFyZW07XG4gICAgICAtLW1hdGVyaWFsLXNtYWxsLWZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAtLW1hdGVyaWFsLWJ1dHRvbi1mb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgLS1tYXRlcmlhbC1jYXB0aW9uLWZvbnQtc2l6ZTogMC43NXJlbTtcblxuICAgICAgLyogSWNvbiBzaXplICovXG4gICAgICAtLW1hdGVyaWFsLWljb24tZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvY3VzdG9tLXN0eWxlPjxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtdHlwb2dyYXBoeVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYXRlcmlhbC1mb250LWZhbWlseSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtYm9keS1mb250LXNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgfVxuXG4gICAgICBoMSxcbiAgICAgIGgyLFxuICAgICAgaDMsXG4gICAgICBoNCxcbiAgICAgIGg1LFxuICAgICAgaDYge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1oMy1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDE1ZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC0wLjA3ZW07XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1oNC1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xuICAgICAgICB0ZXh0LWluZGVudDogLTAuMDdlbTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWg1LWZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC0wLjA1ZW07XG4gICAgICB9XG5cbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1oNi1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XG4gICAgICAgIHRleHQtaW5kZW50OiAtMC4wNWVtO1xuICAgICAgfVxuXG4gICAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtYm9keS1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC0wLjAyNWVtO1xuICAgICAgfVxuXG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtc21hbGwtZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xuICAgICAgICB0ZXh0LWluZGVudDogLTAuMDI1ZW07XG4gICAgICB9XG5cbiAgICAgIGEsXG4gICAgICBiLFxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcblxuaW1wb3J0ICcuL2ZvbnQtcm9ib3RvLmpzJztcbiIsImNsYXNzIE1hdGVyaWFsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuICcxLjIuMyc7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd2YWFkaW4tbWF0ZXJpYWwtc3R5bGVzJywgTWF0ZXJpYWwpO1xuXG5leHBvcnQgeyBNYXRlcmlhbCB9O1xuIiwiY29uc3QgcCA9IEVsZW1lbnQucHJvdG90eXBlO1xuY29uc3QgbWF0Y2hlcyA9IHAubWF0Y2hlcyB8fCBwLm1hdGNoZXNTZWxlY3RvciB8fCBwLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICBwLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IHAub01hdGNoZXNTZWxlY3RvciB8fCBwLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxuLyoqXG4gKiBgUG9seW1lci5Jcm9uRm9jdXNhYmxlc0hlbHBlcmAgcmVsaWVzIG9uIHNvbWUgUG9seW1lci1zcGVjaWZpYyBsZWdhY3kgQVBJLFxuICogZXNwZWNpYWxseSB0aGUgYHJvb3RgIHByb3BlcnR5IHdoaWNoIGRvZXMgbm90IGV4aXN0IGZvciBuYXRpdmUgc2hhZG93IERPTS5cbiAqIFRoYXQncyB3aHkgd2UgaGF2ZSB0aGlzIGhlbHBlciBoZXJlLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lzc3Vlcy8yODJcbiAqL1xuY29uc3QgRm9jdXNhYmxlc0hlbHBlciA9IHtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWxkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICBjb25zdCBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgYSBlbGVtZW50IGlzIGZvY3VzYWJsZS5cbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRm9jdXNhYmxlOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgLy8gRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjAwMTk0LzQyMjg3MDM6XG4gICAgLy8gVGhlcmUgaXNuJ3QgYSBkZWZpbml0ZSBsaXN0LCBpdCdzIHVwIHRvIHRoZSBicm93c2VyLiBUaGUgb25seVxuICAgIC8vIHN0YW5kYXJkIHdlIGhhdmUgaXMgRE9NIExldmVsIDIgSFRNTFxuICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1IVE1ML2h0bWwuaHRtbCwgYWNjb3JkaW5nIHRvIHdoaWNoIHRoZVxuICAgIC8vIG9ubHkgZWxlbWVudHMgdGhhdCBoYXZlIGEgZm9jdXMoKSBtZXRob2QgYXJlIEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgLy8gSFRNTFNlbGVjdEVsZW1lbnQsIEhUTUxUZXh0QXJlYUVsZW1lbnQgYW5kIEhUTUxBbmNob3JFbGVtZW50LiBUaGlzXG4gICAgLy8gbm90YWJseSBvbWl0cyBIVE1MQnV0dG9uRWxlbWVudCBhbmQgSFRNTEFyZWFFbGVtZW50LiBSZWZlcnJpbmcgdG8gdGhlc2VcbiAgICAvLyB0ZXN0cyB3aXRoIHRhYmJhYmxlcyBpbiBkaWZmZXJlbnQgYnJvd3NlcnNcbiAgICAvLyBodHRwOi8vYWxseWpzLmlvL2RhdGEtdGFibGVzL2ZvY3VzYWJsZS5odG1sXG5cbiAgICAvLyBFbGVtZW50cyB0aGF0IGNhbm5vdCBiZSBmb2N1c2VkIGlmIHRoZXkgaGF2ZSBbZGlzYWJsZWRdIGF0dHJpYnV0ZS5cbiAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBvYmplY3QnKSkge1xuICAgICAgcmV0dXJuIG1hdGNoZXMuY2FsbChlbGVtZW50LCAnOm5vdChbZGlzYWJsZWRdKScpO1xuICAgIH1cbiAgICAvLyBFbGVtZW50cyB0aGF0IGNhbiBiZSBmb2N1c2VkIGV2ZW4gaWYgdGhleSBoYXZlIFtkaXNhYmxlZF0gYXR0cmlidXRlLlxuICAgIHJldHVybiBtYXRjaGVzLmNhbGwoZWxlbWVudCwgJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlmcmFtZSwgW3RhYmluZGV4XSwgW2NvbnRlbnRFZGl0YWJsZV0nKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBpZiBhIGVsZW1lbnQgaXMgdGFiYmFibGUuIFRvIGJlIHRhYmJhYmxlLCBhIGVsZW1lbnQgbXVzdCBiZVxuICAgKiBmb2N1c2FibGUsIHZpc2libGUsIGFuZCB3aXRoIGEgdGFiaW5kZXggIT09IC0xLlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNUYWJiYWJsZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLmlzRm9jdXNhYmxlKGVsZW1lbnQpICYmXG4gICAgICAgIG1hdGNoZXMuY2FsbChlbGVtZW50LCAnOm5vdChbdGFiaW5kZXg9XCItMVwiXSknKSAmJlxuICAgICAgICB0aGlzLl9pc1Zpc2libGUoZWxlbWVudCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgZWxlbWVudCB0YWJpbmRleC4gSWYgbm90IGZvY3VzYWJsZSwgcmV0dXJucyAtMS5cbiAgICogSXQgY2hlY2tzIGZvciB0aGUgYXR0cmlidXRlIFwidGFiaW5kZXhcIiBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IHByb3BlcnR5XG4gICAqIGB0YWJJbmRleGAgc2luY2UgYnJvd3NlcnMgYXNzaWduIGRpZmZlcmVudCB2YWx1ZXMgdG8gaXQuXG4gICAqIGUuZy4gaW4gRmlyZWZveCBgPGRpdiBjb250ZW50ZWRpdGFibGU+YCBoYXMgYHRhYkluZGV4ID0gLTFgXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4geyFudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfbm9ybWFsaXplZFRhYkluZGV4OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c2FibGUoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IHRhYkluZGV4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgfHwgMDtcbiAgICAgIHJldHVybiBOdW1iZXIodGFiSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGAgaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fCAhdGhpcy5faXNWaXNpYmxlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIGNvbnN0IHRhYkluZGV4ID0gdGhpcy5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIGxldCBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cmlidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJpYnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgbGV0IGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gJ3Nsb3QnKSB7XG4gICAgICBjaGlsZHJlbiA9IGVsZW1lbnQuYXNzaWduZWROb2Rlcyh7ZmxhdHRlbjogdHJ1ZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgY2hpbGRyZW4gPSAoZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGVsZW1lbnQgaGFzIGB2aXNpYmlsaXR5OiBoaWRkZW5gIG9yIGBkaXNwbGF5OiBub25lYFxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2lzVmlzaWJsZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIC8vIENoZWNrIGlubGluZSBzdHlsZSBmaXJzdCB0byBzYXZlIGEgcmUtZmxvdy4gSWYgbG9va3MgZ29vZCwgY2hlY2sgYWxzb1xuICAgIC8vIGNvbXB1dGVkIHN0eWxlLlxuICAgIGxldCBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG4gICAgaWYgKHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmIHN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgIHJldHVybiAoc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicgJiYgc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTb3J0cyBhbiBhcnJheSBvZiB0YWJiYWJsZSBlbGVtZW50cyBieSB0YWJpbmRleC4gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gdGFiYmFibGVzXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NvcnRCeVRhYkluZGV4OiBmdW5jdGlvbih0YWJiYWJsZXMpIHtcbiAgICAvLyBJbXBsZW1lbnQgYSBtZXJnZSBzb3J0IGFzIEFycmF5LnByb3RvdHlwZS5zb3J0IGRvZXMgYSBub24tc3RhYmxlIHNvcnRcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0XG4gICAgY29uc3QgbGVuID0gdGFiYmFibGVzLmxlbmd0aDtcbiAgICBpZiAobGVuIDwgMikge1xuICAgICAgcmV0dXJuIHRhYmJhYmxlcztcbiAgICB9XG4gICAgY29uc3QgcGl2b3QgPSBNYXRoLmNlaWwobGVuIC8gMik7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMuX3NvcnRCeVRhYkluZGV4KHRhYmJhYmxlcy5zbGljZSgwLCBwaXZvdCkpO1xuICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5fc29ydEJ5VGFiSW5kZXgodGFiYmFibGVzLnNsaWNlKHBpdm90KSk7XG4gICAgcmV0dXJuIHRoaXMuX21lcmdlU29ydEJ5VGFiSW5kZXgobGVmdCwgcmlnaHQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNZXJnZSBzb3J0IGl0ZXJhdG9yLCBtZXJnZXMgdGhlIHR3byBhcnJheXMgaW50byBvbmUsIHNvcnRlZCBieSB0YWIgaW5kZXguXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IGxlZnRcbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmlnaHRcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfbWVyZ2VTb3J0QnlUYWJJbmRleDogZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB3aGlsZSAoKGxlZnQubGVuZ3RoID4gMCkgJiYgKHJpZ2h0Lmxlbmd0aCA+IDApKSB7XG4gICAgICBpZiAodGhpcy5faGFzTG93ZXJUYWJPcmRlcihsZWZ0WzBdLCByaWdodFswXSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocmlnaHQuc2hpZnQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChsZWZ0LnNoaWZ0KCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuY29uY2F0KGxlZnQsIHJpZ2h0KTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBpZiBlbGVtZW50IGBhYCBoYXMgbG93ZXIgdGFiIG9yZGVyIGNvbXBhcmVkIHRvIGVsZW1lbnQgYGJgXG4gICAqIChib3RoIGVsZW1lbnRzIGFyZSBhc3N1bWVkIHRvIGJlIGZvY3VzYWJsZSBhbmQgdGFiYmFibGUpLlxuICAgKiBFbGVtZW50cyB3aXRoIHRhYmluZGV4ID0gMCBoYXZlIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50c1xuICAgKiB3aXRoIHRhYmluZGV4ID4gMC5cbiAgICogSWYgYm90aCBoYXZlIHNhbWUgdGFiaW5kZXgsIGl0IHJldHVybnMgZmFsc2UuXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBhXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBiXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGFzTG93ZXJUYWJPcmRlcjogZnVuY3Rpb24oYSwgYikge1xuICAgIC8vIE5vcm1hbGl6ZSB0YWJJbmRleGVzXG4gICAgLy8gZS5nLiBpbiBGaXJlZm94IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZT5gIGhhcyBgdGFiSW5kZXggPSAtMWBcbiAgICBjb25zdCBhdGkgPSBNYXRoLm1heChhLnRhYkluZGV4LCAwKTtcbiAgICBjb25zdCBidGkgPSBNYXRoLm1heChiLnRhYkluZGV4LCAwKTtcbiAgICByZXR1cm4gKGF0aSA9PT0gMCB8fCBidGkgPT09IDApID8gYnRpID4gYXRpIDogYXRpID4gYnRpO1xuICB9XG59O1xuXG5leHBvcnQgeyBGb2N1c2FibGVzSGVscGVyIH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgdGVtcGxhdGl6ZSB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3RlbXBsYXRpemUuanMnO1xuaW1wb3J0IHsgYWZ0ZXJOZXh0UmVuZGVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG5pbXBvcnQgeyBGbGF0dGVuZWROb2Rlc09ic2VydmVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZmxhdHRlbmVkLW5vZGVzLW9ic2VydmVyLmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gJy4vdmFhZGluLWZvY3VzYWJsZXMtaGVscGVyLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5sZXQgb3ZlcmxheUNvbnRlbnRDb3VudGVyID0gMDtcbmNvbnN0IG92ZXJsYXlDb250ZW50Q2FjaGUgPSB7fTtcblxuY29uc3QgY3JlYXRlT3ZlcmxheUNvbnRlbnQgPSAoY3NzVGV4dCkgPT4ge1xuICBjb25zdCBpcyA9IG92ZXJsYXlDb250ZW50Q2FjaGVbY3NzVGV4dF0gfHwgcHJvY2Vzc092ZXJsYXlTdHlsZXMoY3NzVGV4dCk7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzKTtcbn07XG5cbmNvbnN0IHByb2Nlc3NPdmVybGF5U3R5bGVzID0gKGNzc1RleHQpID0+IHtcbiAgb3ZlcmxheUNvbnRlbnRDb3VudGVyKys7XG4gIGNvbnN0IGlzID0gYHZhYWRpbi1vdmVybGF5LWNvbnRlbnQtJHtvdmVybGF5Q29udGVudENvdW50ZXJ9YDtcblxuICBjb25zdCBzdHlsZWRUZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSAnOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfScgKyBjc3NUZXh0O1xuICBzdHlsZWRUZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZShzdHlsZWRUZW1wbGF0ZSwgaXMpO1xuICB9XG5cbiAgLy8gTk9URShwbGF0b3NoYSk6IEhhdmUgdG8gdXNlIGFuIGF3a3dhcmQgSUlGRSByZXR1cm5pbmcgY2xhc3MgaGVyZVxuICAvLyB0byBwcmV2ZW50IHRoaXMgY2xhc3MgZnJvbSBzaG93aW5nIHVwIGluIGFuYWx5c2lzLmpzb24gJiBBUEkgZG9jcy5cbiAgLyoqIEBwcml2YXRlICovXG4gIGNvbnN0IGtsYXNzID0gKCgpID0+IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgICByZXR1cm4gaXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICBpZiAoIXRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChkb2N1bWVudC5pbXBvcnROb2RlKHN0eWxlZFRlbXBsYXRlLmNvbnRlbnQsIHRydWUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmICh3aW5kb3cuU2hhZHlDU1MpIHtcbiAgICAgICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlRWxlbWVudCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKGtsYXNzLmlzLCBrbGFzcyk7XG5cbiAgb3ZlcmxheUNvbnRlbnRDYWNoZVtjc3NUZXh0XSA9IGlzO1xuICByZXR1cm4gaXM7XG59O1xuXG4vKipcbiAqXG4gKiBgPHZhYWRpbi1vdmVybGF5PmAgaXMgYSBXZWIgQ29tcG9uZW50IGZvciBjcmVhdGluZyBvdmVybGF5cy4gVGhlIGNvbnRlbnQgb2YgdGhlIG92ZXJsYXlcbiAqIGNhbiBiZSBwb3B1bGF0ZWQgaW4gdHdvIHdheXM6IGltcGVyYXRpdmVseSBieSB1c2luZyByZW5kZXJlciBjYWxsYmFjayBmdW5jdGlvbiBhbmRcbiAqIGRlY2xhcmF0aXZlbHkgYnkgdXNpbmcgUG9seW1lcidzIFRlbXBsYXRlcy5cbiAqXG4gKiAjIyMgUmVuZGVyaW5nXG4gKlxuICogQnkgZGVmYXVsdCwgdGhlIG92ZXJsYXkgdXNlcyB0aGUgY29udGVudCBwcm92aWRlZCBieSB1c2luZyB0aGUgcmVuZGVyZXIgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKlxuICogVGhlIHJlbmRlcmVyIGZ1bmN0aW9uIHByb3ZpZGVzIGByb290YCwgYG93bmVyYCwgYG1vZGVsYCBhcmd1bWVudHMgd2hlbiBhcHBsaWNhYmxlLlxuICogR2VuZXJhdGUgRE9NIGNvbnRlbnQgYnkgdXNpbmcgYG1vZGVsYCBvYmplY3QgcHJvcGVydGllcyBpZiBuZWVkZWQsIGFwcGVuZCBpdCB0byB0aGUgYHJvb3RgXG4gKiBlbGVtZW50IGFuZCBjb250cm9sIHRoZSBzdGF0ZSBvZiB0aGUgaG9zdCBlbGVtZW50IGJ5IGFjY2Vzc2luZyBgb3duZXJgLiBCZWZvcmUgZ2VuZXJhdGluZyBuZXdcbiAqIGNvbnRlbnQsIHVzZXJzIGFyZSBhYmxlIHRvIGNoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgY29udGVudCBpbiBgcm9vdGAgZm9yIHJldXNpbmcgaXQuXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi1vdmVybGF5IGlkPVwib3ZlcmxheVwiPjwvdmFhZGluLW92ZXJsYXk+XG4gKiBgYGBcbiAqIGBgYGpzXG4gKiBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcbiAqIG92ZXJsYXkucmVuZGVyZXIgPSBmdW5jdGlvbihyb290KSB7XG4gKiAgcm9vdC50ZXh0Q29udGVudCA9IFwiT3ZlcmxheSBjb250ZW50XCI7XG4gKiB9O1xuICogYGBgXG4gKlxuICogUmVuZGVyZXIgaXMgY2FsbGVkIG9uIHRoZSBvcGVuaW5nIG9mIHRoZSBvdmVybGF5IGFuZCBlYWNoIHRpbWUgdGhlIHJlbGF0ZWQgbW9kZWwgaXMgdXBkYXRlZC5cbiAqIERPTSBnZW5lcmF0ZWQgZHVyaW5nIHRoZSByZW5kZXJlciBjYWxsIGNhbiBiZSByZXVzZWRcbiAqIGluIHRoZSBuZXh0IHJlbmRlcmVyIGNhbGwgYW5kIHdpbGwgYmUgcHJvdmlkZWQgd2l0aCB0aGUgYHJvb3RgIGFyZ3VtZW50LlxuICogT24gZmlyc3QgY2FsbCBpdCB3aWxsIGJlIGVtcHR5LlxuICpcbiAqICoqTk9URToqKiB3aGVuIHRoZSByZW5kZXJlciBwcm9wZXJ0eSBpcyBkZWZpbmVkLCB0aGUgYDx0ZW1wbGF0ZT5gIGNvbnRlbnQgaXMgbm90IHVzZWQuXG4gKlxuICogIyMjIFRlbXBsYXRpbmdcbiAqXG4gKiBBbHRlcm5hdGl2ZWx5LCB0aGUgY29udGVudCBjYW4gYmUgcHJvdmlkZWQgd2l0aCBQb2x5bWVyIFRlbXBsYXRlLlxuICogT3ZlcmxheSBmaW5kcyB0aGUgZmlyc3QgY2hpbGQgdGVtcGxhdGUgYW5kIHVzZXMgdGhhdCBpbiBjYXNlIHJlbmRlcmVyIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBpcyBub3QgcHJvdmlkZWQuIFlvdSBjYW4gYWxzbyBzZXQgYSBjdXN0b20gdGVtcGxhdGUgdXNpbmcgdGhlIGB0ZW1wbGF0ZWAgcHJvcGVydHkuXG4gKlxuICogQWZ0ZXIgdGhlIGNvbnRlbnQgZnJvbSB0aGUgdGVtcGxhdGUgaXMgc3RhbXBlZCwgdGhlIGBjb250ZW50YCBwcm9wZXJ0eVxuICogcG9pbnRzIHRvIHRoZSBjb250ZW50IGNvbnRhaW5lci5cbiAqXG4gKiBUaGUgb3ZlcmxheSBwcm92aWRlcyBgZm9yd2FyZEhvc3RQcm9wYCB3aGVuIGNhbGxpbmdcbiAqIGBQb2x5bWVyLlRlbXBsYXRpemUudGVtcGxhdGl6ZWAgZm9yIHRoZSB0ZW1wbGF0ZSwgc28gdGhhdCB0aGUgYmluZGluZ3NcbiAqIGZyb20gdGhlIHBhcmVudCBzY29wZSBwcm9wYWdhdGUgdG8gdGhlIGNvbnRlbnQuICBZb3UgY2FuIGFsc28gcGFzc1xuICogY3VzdG9tIGBpbnN0YW5jZVByb3BzYCBvYmplY3QgdXNpbmcgdGhlIGBpbnN0YW5jZVByb3BzYCBwcm9wZXJ0eS5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLW92ZXJsYXk+XG4gKiAgIDx0ZW1wbGF0ZT5PdmVybGF5IGNvbnRlbnQ8L3RlbXBsYXRlPlxuICogPC92YWFkaW4tb3ZlcmxheT5cbiAqIGBgYFxuICpcbiAqICoqTk9URToqKiB3aGVuIHVzaW5nIGBpbnN0YW5jZVByb3BzYDogYmVjYXVzZSBvZiB0aGUgUG9seW1lciBsaW1pdGF0aW9uLFxuICogZXZlcnkgdGVtcGxhdGUgY2FuIG9ubHkgYmUgdGVtcGxhdGl6ZWQgb25jZSwgc28gaXQgaXMgaW1wb3J0YW50XG4gKiB0byBzZXQgYGluc3RhbmNlUHJvcHNgIGJlZm9yZSB0aGUgYHRlbXBsYXRlYCBpcyBhc3NpZ25lZCB0byB0aGUgb3ZlcmxheS5cbiAqXG4gKiAjIyMgU3R5bGluZ1xuICpcbiAqIFRvIHN0eWxlIHRoZSBvdmVybGF5IGNvbnRlbnQsIHVzZSBzdHlsZXMgaW4gdGhlIHBhcmVudCBzY29wZTpcbiAqXG4gKiAtIElmIHRoZSBvdmVybGF5IGlzIHVzZWQgaW4gYSBjb21wb25lbnQsIHRoZW4gdGhlIGNvbXBvbmVudCBzdHlsZXNcbiAqICAgYXBwbHkgdGhlIG92ZXJsYXkgY29udGVudC5cbiAqIC0gSWYgdGhlIG92ZXJsYXkgaXMgdXNlZCBpbiB0aGUgZ2xvYmFsIERPTSBzY29wZSwgdGhlbiBnbG9iYWwgc3R5bGVzXG4gKiAgIGFwcGx5IHRvIHRoZSBvdmVybGF5IGNvbnRlbnQuXG4gKlxuICogU2VlIGV4YW1wbGVzIGZvciBzdHlsaW5nIHRoZSBvdmVybGF5IGNvbnRlbnQgaW4gdGhlIGxpdmUgZGVtb3MuXG4gKlxuICogVGhlIGZvbGxvd2luZyBTaGFkb3cgRE9NIHBhcnRzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmcgdGhlIG92ZXJsYXkgY29tcG9uZW50IGl0c2VsZjpcbiAqXG4gKiBQYXJ0IG5hbWUgIHwgRGVzY3JpcHRpb25cbiAqIC0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIGBiYWNrZHJvcGAgfCBCYWNrZHJvcCBvZiB0aGUgb3ZlcmxheVxuICogYG92ZXJsYXlgICB8IENvbnRhaW5lciBmb3IgcG9zaXRpb24vc2l6aW5nL2FsaWdubWVudCBvZiB0aGUgY29udGVudFxuICogYGNvbnRlbnRgICB8IENvbnRlbnQgb2YgdGhlIG92ZXJsYXlcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHN0YXRlIGF0dHJpYnV0ZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgfCBEZXNjcmlwdGlvbiB8IFBhcnRcbiAqIC0tLXwtLS18LS0tXG4gKiBgb3BlbmluZ2AgfCBBcHBsaWVkIGp1c3QgYWZ0ZXIgdGhlIG92ZXJsYXkgaXMgYXR0YWNoZWQgdG8gdGhlIERPTS4gWW91IGNhbiBhcHBseSBhIENTUyBAa2V5ZnJhbWUgYW5pbWF0aW9uIGZvciB0aGlzIHN0YXRlLiB8IGA6aG9zdGBcbiAqIGBjbG9zaW5nYCB8IEFwcGxpZWQganVzdCBiZWZvcmUgdGhlIG92ZXJsYXkgaXMgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLiBZb3UgY2FuIGFwcGx5IGEgQ1NTIEBrZXlmcmFtZSBhbmltYXRpb24gZm9yIHRoaXMgc3RhdGUuIHwgYDpob3N0YFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogQ3VzdG9tIENTUyBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdCB2YWx1ZVxuICogLS0tfC0tLXwtLS1cbiAqIGAtLXZhYWRpbi1vdmVybGF5LXZpZXdwb3J0LWJvdHRvbWAgfCBCb3R0b20gb2Zmc2V0IG9mIHRoZSB2aXNpYmxlIHZpZXdwb3J0IGFyZWEgfCBgMGAgb3IgZGV0ZWN0ZWQgb2Zmc2V0XG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqL1xuY2xhc3MgT3ZlcmxheUVsZW1lbnQgZXh0ZW5kcyBUaGVtYWJsZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICB6LWluZGV4OiAyMDA7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgICAgICAvKlxuICAgICAgICAgIERlc3BpdGUgb2Ygd2hhdCB0aGUgbmFtZXMgc2F5LCA8dmFhZGluLW92ZXJsYXk+IGlzIGp1c3QgYSBjb250YWluZXJcbiAgICAgICAgICBmb3IgcG9zaXRpb24vc2l6aW5nL2FsaWdubWVudC4gVGhlIGFjdHVhbCBvdmVybGF5IGlzIHRoZSBvdmVybGF5IHBhcnQuXG4gICAgICAgICovXG5cbiAgICAgICAgLypcbiAgICAgICAgICBEZWZhdWx0IHBvc2l0aW9uIGNvbnN0cmFpbnRzOiB0aGUgZW50aXJlIHZpZXdwb3J0LiBOb3RlOiB0aGVtZXMgY2FuXG4gICAgICAgICAgb3ZlcnJpZGUgdGhpcyB0byBpbnRyb2R1Y2UgZ2FwcyBiZXR3ZWVuIHRoZSBvdmVybGF5IGFuZCB0aGUgdmlld3BvcnQuXG4gICAgICAgICovXG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogdmFyKC0tdmFhZGluLW92ZXJsYXktdmlld3BvcnQtYm90dG9tKTtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAvKiBVc2UgZmxleGJveCBhbGlnbm1lbnQgZm9yIHRoZSBvdmVybGF5IHBhcnQuICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIG1ha2VzIGRyb3Bkb3ducyBzaXppbmcgZWFzaWVyICovXG4gICAgICAgIC8qIEFsaWduIHRvIGNlbnRlciBieSBkZWZhdWx0LiAqL1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAvKiBBbGxvdyBjZW50ZXJpbmcgd2hlbiBtYXgtd2lkdGgvbWF4LWhlaWdodCBhcHBsaWVzLiAqL1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgLyogVGhlIGhvc3QgaXMgbm90IGNsaWNrYWJsZSwgb25seSB0aGUgb3ZlcmxheSBwYXJ0IGlzLiAqL1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICAvKiBSZW1vdmUgdGFwIGhpZ2hsaWdodCBvbiB0b3VjaCBkZXZpY2VzLiAqL1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC8qIENTUyBBUEkgZm9yIGhvc3QgKi9cbiAgICAgICAgLS12YWFkaW4tb3ZlcmxheS12aWV3cG9ydC1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSxcbiAgICAgIDpob3N0KDpub3QoW29wZW5lZF0pOm5vdChbY2xvc2luZ10pKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG5cbiAgICAgICAgLyogUHJldmVudCBvdmVyZmxvd2luZyB0aGUgaG9zdCBpbiBNU0lFIDExICovXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IGluaXRpYWw7IC8qIHJlZW5hYmxlIHRhcCBoaWdobGlnaHQgaW5zaWRlICovXG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiYmFja2Ryb3BcIl0ge1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJiYWNrZHJvcFwiIHBhcnQ9XCJiYWNrZHJvcFwiIGhpZGRlblxcJD1cInt7IXdpdGhCYWNrZHJvcH19XCI+PC9kaXY+XG4gICAgPGRpdiBwYXJ0PVwib3ZlcmxheVwiIGlkPVwib3ZlcmxheVwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgPGRpdiBwYXJ0PVwiY29udGVudFwiIGlkPVwiY29udGVudFwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLW92ZXJsYXknO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJyxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE93bmVyIGVsZW1lbnQgcGFzc2VkIHdpdGggcmVuZGVyZXIgZnVuY3Rpb25cbiAgICAgICAqL1xuICAgICAgb3duZXI6IEVsZW1lbnQsXG5cbiAgICAgIC8qKlxuICAgICAgICogQ3VzdG9tIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIG92ZXJsYXkuXG4gICAgICAgKiBSZWNlaXZlcyB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgKlxuICAgICAgICogLSBgcm9vdGAgVGhlIHJvb3QgY29udGFpbmVyIERPTSBlbGVtZW50LiBBcHBlbmQgeW91ciBjb250ZW50IHRvIGl0LlxuICAgICAgICogLSBgb3duZXJgIFRoZSBob3N0IGVsZW1lbnQgb2YgdGhlIHJlbmRlcmVyIGZ1bmN0aW9uLlxuICAgICAgICogLSBgbW9kZWxgIFRoZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyByZWxhdGVkIHdpdGggcmVuZGVyaW5nLlxuICAgICAgICovXG4gICAgICByZW5kZXJlcjogRnVuY3Rpb24sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHRlbXBsYXRlIG9mIHRoZSBvdmVybGF5IGNvbnRlbnQuXG4gICAgICAgKi9cbiAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbmFsIGFyZ3VtZW50IGZvciBgUG9seW1lci5UZW1wbGF0aXplLnRlbXBsYXRpemVgLlxuICAgICAgICovXG4gICAgICBpbnN0YW5jZVByb3BzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZWZlcmVuY2VzIHRoZSBjb250ZW50IGNvbnRhaW5lciBhZnRlciB0aGUgdGVtcGxhdGUgaXMgc3RhbXBlZC5cbiAgICAgICAqL1xuICAgICAgY29udGVudDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgd2l0aEJhY2tkcm9wOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGhhdCBpcyBwYXNzZWQgdG8gYHJlbmRlcmVyYCBmdW5jdGlvblxuICAgICAgICovXG4gICAgICBtb2RlbDogT2JqZWN0LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdHJ1ZSB0aGUgb3ZlcmxheSB3b24ndCBkaXNhYmxlIHRoZSBtYWluIGNvbnRlbnQsIHNob3dpbmdcbiAgICAgICAqIGl0IGRvZXNu4oCZdCBjaGFuZ2UgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHVzZXIgaW50ZXJmYWNlLlxuICAgICAgICovXG4gICAgICBtb2RlbGVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfbW9kZWxlc3NDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHNldCB0byB0cnVlLCB0aGUgb3ZlcmxheSBpcyBoaWRkZW4uIFRoaXMgYWxzbyBjbG9zZXMgdGhlIG92ZXJsYXlcbiAgICAgICAqIGltbWVkaWF0ZWx5IGluIGNhc2UgdGhlcmUgaXMgYSBjbG9zaW5nIGFuaW1hdGlvbiBpbiBwcm9ncmVzcy5cbiAgICAgICAqL1xuICAgICAgaGlkZGVuOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfaGlkZGVuQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiB0cnVlIG1vdmUgZm9jdXMgdG8gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBvdmVybGF5LFxuICAgICAgICogb3IgdG8gdGhlIG92ZXJsYXkgaWYgdGhlcmUgYXJlIG5vIGZvY3VzYWJsZSBlbGVtZW50cy5cbiAgICAgICAqL1xuICAgICAgZm9jdXNUcmFwOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgcmVzdG9yaW5nIG9mIGZvY3VzIHdoZW4gb3ZlcmxheSBpcyBjbG9zZWQuXG4gICAgICAgKi9cbiAgICAgIHJlc3RvcmVGb2N1c09uQ2xvc2U6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgX21vdXNlRG93bkluc2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBfbW91c2VVcEluc2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBfaW5zdGFuY2U6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICBfb3JpZ2luYWxDb250ZW50UGFydDogT2JqZWN0LFxuXG4gICAgICBfY29udGVudE5vZGVzOiBBcnJheSxcblxuICAgICAgX29sZE93bmVyOiBFbGVtZW50LFxuXG4gICAgICBfb2xkTW9kZWw6IE9iamVjdCxcblxuICAgICAgX29sZFRlbXBsYXRlOiBPYmplY3QsXG5cbiAgICAgIF9vbGRJbnN0YW5jZVByb3BzOiBPYmplY3QsXG5cbiAgICAgIF9vbGRSZW5kZXJlcjogT2JqZWN0LFxuXG4gICAgICBfb2xkT3BlbmVkOiBCb29sZWFuXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnX3RlbXBsYXRlT3JSZW5kZXJlckNoYW5nZWQodGVtcGxhdGUsIHJlbmRlcmVyLCBvd25lciwgbW9kZWwsIGluc3RhbmNlUHJvcHMsIG9wZW5lZCknXG4gICAgXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYm91bmRNb3VzZURvd25MaXN0ZW5lciA9IHRoaXMuX21vdXNlRG93bkxpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRNb3VzZVVwTGlzdGVuZXIgPSB0aGlzLl9tb3VzZVVwTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE91dHNpZGVDbGlja0xpc3RlbmVyID0gdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZEtleWRvd25MaXN0ZW5lciA9IHRoaXMuX2tleWRvd25MaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgRmxhdHRlbmVkTm9kZXNPYnNlcnZlcih0aGlzLCBpbmZvID0+IHtcbiAgICAgIHRoaXMuX3NldFRlbXBsYXRlRnJvbU5vZGVzKGluZm8uYWRkZWROb2Rlcyk7XG4gICAgfSk7XG5cbiAgICAvLyBMaXN0ZW5lciBmb3IgcHJldmVudGluZyBjbG9zaW5nIG9mIHRoZSBwYXBlci1kaWFsb2cgYW5kIGFsbCBjb21wb25lbnRzIGV4dGVuZGluZyBgaXJvbi1vdmVybGF5LWJlaGF2aW9yYC5cbiAgICB0aGlzLl9ib3VuZElyb25PdmVybGF5Q2FuY2VsZWRMaXN0ZW5lciA9IHRoaXMuX2lyb25PdmVybGF5Q2FuY2VsZWQuYmluZCh0aGlzKTtcblxuICAgIGlmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgdGhpcy5fYm91bmRJb3NSZXNpemVMaXN0ZW5lciA9ICgpID0+IHRoaXMuX2RldGVjdElvc05hdmJhcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICB0aGlzLl9vYnNlcnZlci5mbHVzaCgpO1xuXG4gICAgLy8gTmVlZCB0byBhZGQgZHVtbXkgY2xpY2sgbGlzdGVuZXJzIHRvIHRoaXMgYW5kIHRoZSBiYWNrZHJvcCBvciBlbHNlXG4gICAgLy8gdGhlIGRvY3VtZW50IGNsaWNrIGV2ZW50IGxpc3RlbmVyIChfb3V0c2lkZUNsaWNrTGlzdGVuZXIpIG1heSBuZXZlclxuICAgIC8vIGdldCBpbnZva2VkIG9uIGlPUyBTYWZhcmkgKHJlcHJvZHVjaWJsZSBpbiA8dmFhZGluLWRpYWxvZz5cbiAgICAvLyBhbmQgPHZhYWRpbi1jb250ZXh0LW1lbnU+KS5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xuICAgIHRoaXMuJC5iYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcbiAgfVxuXG4gIF9kZXRlY3RJb3NOYXZiYXIoKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGNvbnN0IGxhbmRzY2FwZSA9IGlubmVyV2lkdGggPiBpbm5lckhlaWdodDtcblxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICBpZiAobGFuZHNjYXBlICYmIGNsaWVudEhlaWdodCA+IGlubmVySGVpZ2h0KSB7XG4gICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KCctLXZhYWRpbi1vdmVybGF5LXZpZXdwb3J0LWJvdHRvbScsIGNsaWVudEhlaWdodCAtIGlubmVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFhZGluLW92ZXJsYXktdmlld3BvcnQtYm90dG9tJywgJzAnKTtcbiAgICB9XG4gIH1cblxuICBfc2V0VGVtcGxhdGVGcm9tTm9kZXMobm9kZXMpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5sb2NhbE5hbWUgJiYgbm9kZS5sb2NhbE5hbWUgPT09ICd0ZW1wbGF0ZScpWzBdIHx8IHRoaXMudGVtcGxhdGU7XG4gIH1cblxuICAvKipcbiAgICogQGV2ZW50IHZhYWRpbi1vdmVybGF5LWNsb3NlXG4gICAqIGZpcmVkIGJlZm9yZSB0aGUgYHZhYWRpbi1vdmVybGF5YCB3aWxsIGJlIGNsb3NlZC4gSWYgY2FuY2VsZWQgdGhlIGNsb3Npbmcgb2YgdGhlIG92ZXJsYXkgaXMgY2FuY2VsZWQgYXMgd2VsbC5cbiAgICovXG4gIGNsb3NlKHNvdXJjZUV2ZW50KSB7XG4gICAgdmFyIGV2dCA9IG5ldyBDdXN0b21FdmVudCgndmFhZGluLW92ZXJsYXktY2xvc2UnLCB7YnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiB7c291cmNlRXZlbnQ6IHNvdXJjZUV2ZW50fX0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIGlmICghZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGlmICh0aGlzLl9ib3VuZElvc1Jlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9kZXRlY3RJb3NOYXZiYXIoKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9ib3VuZElvc1Jlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgdGhpcy5fYm91bmRJb3NSZXNpemVMaXN0ZW5lciAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fYm91bmRJb3NSZXNpemVMaXN0ZW5lcik7XG4gIH1cblxuICBfaXJvbk92ZXJsYXlDYW5jZWxlZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBfbW91c2VEb3duTGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLl9tb3VzZURvd25JbnNpZGUgPSBldmVudC5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMuJC5vdmVybGF5KSA+PSAwO1xuICB9XG5cbiAgX21vdXNlVXBMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMuX21vdXNlVXBJbnNpZGUgPSBldmVudC5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMuJC5vdmVybGF5KSA+PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIG5lZWQgdG8gbGlzdGVuIG9uICdjbGljaycgLyAndGFwJyBldmVudCBhbmQgY2FwdHVyZSBpdCBhbmQgY2xvc2UgdGhlIG92ZXJsYXkgYmVmb3JlXG4gICAqIHByb3BhZ2F0aW5nIHRoZSBldmVudCB0byB0aGUgbGlzdGVuZXIgaW4gdGhlIGJ1dHRvbi4gT3RoZXJ3aXNlLCBpZiB0aGUgY2xpY2tlZCBidXR0b24gd291bGQgY2FsbFxuICAgKiBvcGVuKCksIHRoaXMgd291bGQgaGFwcGVuOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVo4NlZfSUNVQ0Q0XG4gICAqXG4gICAqIEBldmVudCB2YWFkaW4tb3ZlcmxheS1vdXRzaWRlLWNsaWNrXG4gICAqIGZpcmVkIGJlZm9yZSB0aGUgYHZhYWRpbi1vdmVybGF5YCB3aWxsIGJlIGNsb3NlZCBvbiBvdXRzaWRlIGNsaWNrLiBJZiBjYW5jZWxlZCB0aGUgY2xvc2luZyBvZiB0aGUgb3ZlcmxheSBpcyBjYW5jZWxlZCBhcyB3ZWxsLlxuICAgKi9cbiAgX291dHNpZGVDbGlja0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluZGV4T2YodGhpcy4kLm92ZXJsYXkpICE9PSAtMSB8fFxuICAgICAgICB0aGlzLl9tb3VzZURvd25JbnNpZGUgfHwgdGhpcy5fbW91c2VVcEluc2lkZSkge1xuICAgICAgdGhpcy5fbW91c2VEb3duSW5zaWRlID0gZmFsc2U7XG4gICAgICB0aGlzLl9tb3VzZVVwSW5zaWRlID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fbGFzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgndmFhZGluLW92ZXJsYXktb3V0c2lkZS1jbGljaycsIHtidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBkZXRhaWw6IHtzb3VyY2VFdmVudDogZXZlbnR9fSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2dCk7XG5cbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgIWV2dC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICB0aGlzLmNsb3NlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGV2ZW50IHZhYWRpbi1vdmVybGF5LWVzY2FwZS1wcmVzc1xuICAgKiBmaXJlZCBiZWZvcmUgdGhlIGB2YWFkaW4tb3ZlcmxheWAgd2lsbCBiZSBjbG9zZWQgb24gRVNDIGJ1dHRvbiBwcmVzcy4gSWYgY2FuY2VsZWQgdGhlIGNsb3Npbmcgb2YgdGhlIG92ZXJsYXkgaXMgY2FuY2VsZWQgYXMgd2VsbC5cbiAgICovXG4gIF9rZXlkb3duTGlzdGVuZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2xhc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUQUJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJyAmJiB0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgLy8gaWYgb25seSB0YWIga2V5IGlzIHByZXNzZWQsIGN5Y2xlIGZvcndhcmQsIGVsc2UgY3ljbGUgYmFja3dhcmRzLlxuICAgICAgdGhpcy5fY3ljbGVUYWIoZXZlbnQuc2hpZnRLZXkgPyAtMSA6IDEpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gRVNDXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgndmFhZGluLW92ZXJsYXktZXNjYXBlLXByZXNzJywge2J1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDoge3NvdXJjZUV2ZW50OiBldmVudH19KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldnQpO1xuXG4gICAgICBpZiAodGhpcy5vcGVuZWQgJiYgIWV2dC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9lbnN1cmVUZW1wbGF0aXplZCgpIHtcbiAgICB0aGlzLl9zZXRUZW1wbGF0ZUZyb21Ob2RlcyhBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgdmFhZGluLW92ZXJsYXktb3BlblxuICAgKiBmaXJlZCBhZnRlciB0aGUgYHZhYWRpbi1vdmVybGF5YCBpcyBvcGVuZWQuXG4gICAqL1xuICBfb3BlbmVkQ2hhbmdlZChvcGVuZWQsIHdhc09wZW5lZCkge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2Vuc3VyZVRlbXBsYXRpemVkKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgLy8gU3RvcmUgZm9jdXNlZCBub2RlLlxuICAgICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUgPSB0aGlzLl9nZXRBY3RpdmVFbGVtZW50KCk7XG4gICAgICB0aGlzLl9hbmltYXRlZE9wZW5pbmcoKTtcblxuICAgICAgYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNUcmFwICYmICF0aGlzLmNvbnRhaW5zKGRvY3VtZW50Ll9hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5fY3ljbGVUYWIoMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhYWRpbi1vdmVybGF5LW9wZW4nLCB7YnViYmxlczogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoaXMubW9kZWxlc3MpIHtcbiAgICAgICAgdGhpcy5fYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3YXNPcGVuZWQpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGVkQ2xvc2luZygpO1xuXG4gICAgICBpZiAoIXRoaXMubW9kZWxlc3MpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2hpZGRlbkNoYW5nZWQoaGlkZGVuKSB7XG4gICAgaWYgKGhpZGRlbiAmJiB0aGlzLmhhc0F0dHJpYnV0ZSgnY2xvc2luZycpKSB7XG4gICAgICB0aGlzLl9mbHVzaEFuaW1hdGlvbignY2xvc2luZycpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG91bGRBbmltYXRlKCkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMpLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1uYW1lJyk7XG4gICAgY29uc3QgaGlkZGVuID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJztcbiAgICByZXR1cm4gIWhpZGRlbiAmJiBuYW1lICYmIG5hbWUgIT0gJ25vbmUnO1xuICB9XG5cbiAgX2VucXVldWVBbmltYXRpb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBoYW5kbGVyID0gYF9fJHt0eXBlfUhhbmRsZXJgO1xuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgbGlzdGVuZXIpO1xuICAgICAgZGVsZXRlIHRoaXNbaGFuZGxlcl07XG4gICAgfTtcbiAgICB0aGlzW2hhbmRsZXJdID0gbGlzdGVuZXI7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBsaXN0ZW5lcik7XG4gIH1cblxuICBfZmx1c2hBbmltYXRpb24odHlwZSkge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBgX18ke3R5cGV9SGFuZGxlcmA7XG4gICAgaWYgKHR5cGVvZiB0aGlzW2hhbmRsZXJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzW2hhbmRsZXJdKCk7XG4gICAgfVxuICB9XG5cbiAgX2FuaW1hdGVkT3BlbmluZygpIHtcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5ICYmIHRoaXMuaGFzQXR0cmlidXRlKCdjbG9zaW5nJykpIHtcbiAgICAgIHRoaXMuX2ZsdXNoQW5pbWF0aW9uKCdjbG9zaW5nJyk7XG4gICAgfVxuICAgIHRoaXMuX2F0dGFjaE92ZXJsYXkoKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnb3BlbmluZycsICcnKTtcblxuICAgIGNvbnN0IGZpbmlzaE9wZW5pbmcgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbmluZycpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1vdmVybGF5LWNhbmNlbGVkJywgdGhpcy5fYm91bmRJcm9uT3ZlcmxheUNhbmNlbGVkTGlzdGVuZXIpO1xuXG4gICAgICBpZiAoIXRoaXMubW9kZWxlc3MpIHtcbiAgICAgICAgdGhpcy5fZW50ZXJNb2RhbFN0YXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9zaG91bGRBbmltYXRlKCkpIHtcbiAgICAgIHRoaXMuX2VucXVldWVBbmltYXRpb24oJ29wZW5pbmcnLCBmaW5pc2hPcGVuaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmluaXNoT3BlbmluZygpO1xuICAgIH1cbiAgfVxuXG4gIF9hdHRhY2hPdmVybGF5KCkge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgndmFhZGluLW92ZXJsYXktcGxhY2Vob2xkZXInKTtcbiAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuX3BsYWNlaG9sZGVyLCB0aGlzKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMpO1xuICB9XG5cbiAgX2FuaW1hdGVkQ2xvc2luZygpIHtcbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ29wZW5pbmcnKSkge1xuICAgICAgdGhpcy5fZmx1c2hBbmltYXRpb24oJ29wZW5pbmcnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY2xvc2luZycsICcnKTtcblxuICAgICAgY29uc3QgZmluaXNoQ2xvc2luZyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1twYXJ0PVwib3ZlcmxheVwiXScpLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycpO1xuXG4gICAgICAgIHRoaXMuX2V4aXRNb2RhbFN0YXRlKCk7XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXJvbi1vdmVybGF5LWNhbmNlbGVkJywgdGhpcy5fYm91bmRJcm9uT3ZlcmxheUNhbmNlbGVkTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLl9kZXRhY2hPdmVybGF5KCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdjbG9zaW5nJyk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVzdG9yZUZvY3VzT25DbG9zZSAmJiB0aGlzLl9fcmVzdG9yZUZvY3VzTm9kZSkge1xuICAgICAgICAgIC8vIElmIHRoZSBhY3RpdmVFbGVtZW50IGlzIGA8Ym9keT5gIG9yIGluc2lkZSB0aGUgb3ZlcmxheSxcbiAgICAgICAgICAvLyB3ZSBhcmUgYWxsb3dlZCB0byByZXN0b3JlIHRoZSBmb2N1cy4gSW4gYWxsIHRoZSBvdGhlclxuICAgICAgICAgIC8vIGNhc2VzIGZvY3VzIG1pZ2h0IGhhdmUgYmVlbiBtb3ZlZCBlbHNld2hlcmUgYnkgYW5vdGhlclxuICAgICAgICAgIC8vIGNvbXBvbmVudCBvciBieSB0aGUgdXNlciBpbnRlcmFjdGlvbiAoZS5nLiBjbGljayBvbiBhXG4gICAgICAgICAgLy8gYnV0dG9uIG91dHNpZGUgdGhlIG92ZXJsYXkpLlxuICAgICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9nZXRBY3RpdmVFbGVtZW50KCk7XG5cbiAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kZWVwQ29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuX3Nob3VsZEFuaW1hdGUoKSkge1xuICAgICAgICB0aGlzLl9lbnF1ZXVlQW5pbWF0aW9uKCdjbG9zaW5nJywgZmluaXNoQ2xvc2luZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaW5pc2hDbG9zaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RldGFjaE92ZXJsYXkoKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcywgdGhpcy5fcGxhY2Vob2xkZXIpO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fcGxhY2Vob2xkZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGF0dGFjaGVkIG92ZXJsYXlzLlxuICAgKi9cbiAgc3RhdGljIGdldCBfX2F0dGFjaGVkSW5zdGFuY2VzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZpbHRlcihlbCA9PiBlbCBpbnN0YW5jZW9mIE92ZXJsYXlFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgdGhpcyBpcyB0aGUgbGFzdCBvbmUgaW4gdGhlIG9wZW5lZCBvdmVybGF5cyBzdGFja1xuICAgKi9cbiAgZ2V0IF9sYXN0KCkge1xuICAgIHJldHVybiB0aGlzID09PSBPdmVybGF5RWxlbWVudC5fX2F0dGFjaGVkSW5zdGFuY2VzLnBvcCgpO1xuICB9XG5cbiAgX21vZGVsZXNzQ2hhbmdlZChtb2RlbGVzcykge1xuICAgIGlmICghbW9kZWxlc3MpIHtcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLl9hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5fZW50ZXJNb2RhbFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycygpO1xuICAgICAgdGhpcy5fZXhpdE1vZGFsU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBfYWRkR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2JvdW5kTW91c2VEb3duTGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9ib3VuZE1vdXNlVXBMaXN0ZW5lcik7XG4gICAgLy8gRmlyZWZveCBsZWFrcyBjbGljayB0byBkb2N1bWVudCBvbiBjb250ZXh0bWVudSBldmVuIGlmIHByZXZlbnRlZFxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTk5MDYxNFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JvdW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9ib3VuZEtleWRvd25MaXN0ZW5lcik7XG4gIH1cblxuICBfZW50ZXJNb2RhbFN0YXRlKCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgIT09ICdub25lJykge1xuICAgICAgLy8gU2V0IGJvZHkgcG9pbnRlci1ldmVudHMgdG8gJ25vbmUnIHRvIGRpc2FibGUgbW91c2UgaW50ZXJhY3Rpb25zIHdpdGhcbiAgICAgIC8vIG90aGVyIGRvY3VtZW50IG5vZGVzLlxuICAgICAgdGhpcy5fcHJldmlvdXNEb2N1bWVudFBvaW50ZXJFdmVudHMgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHM7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBwb2ludGVyIGV2ZW50cyBpbiBvdGhlciBhdHRhY2hlZCBvdmVybGF5c1xuICAgIE92ZXJsYXlFbGVtZW50Ll9fYXR0YWNoZWRJbnN0YW5jZXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwgIT09IHRoaXMgJiYgIWVsLmhhc0F0dHJpYnV0ZSgnb3BlbmluZycpICYmICFlbC5oYXNBdHRyaWJ1dGUoJ2Nsb3NpbmcnKSkge1xuICAgICAgICBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1twYXJ0PVwib3ZlcmxheVwiXScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVtb3ZlR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2JvdW5kTW91c2VEb3duTGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9ib3VuZE1vdXNlVXBMaXN0ZW5lcik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fYm91bmRPdXRzaWRlQ2xpY2tMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2JvdW5kS2V5ZG93bkxpc3RlbmVyKTtcbiAgfVxuXG4gIF9leGl0TW9kYWxTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcHJldmlvdXNEb2N1bWVudFBvaW50ZXJFdmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gUmVzdG9yZSBib2R5IHBvaW50ZXItZXZlbnRzXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSB0aGlzLl9wcmV2aW91c0RvY3VtZW50UG9pbnRlckV2ZW50cztcbiAgICAgIGRlbGV0ZSB0aGlzLl9wcmV2aW91c0RvY3VtZW50UG9pbnRlckV2ZW50cztcbiAgICB9XG5cbiAgICAvLyBSZXN0b3JlIHBvaW50ZXIgZXZlbnRzIGluIHRoZSBwcmV2aW91cyBvdmVybGF5KHMpXG4gICAgY29uc3QgaW5zdGFuY2VzID0gT3ZlcmxheUVsZW1lbnQuX19hdHRhY2hlZEluc3RhbmNlcztcbiAgICBsZXQgZWw7XG4gICAgLy8gVXNlIGluc3RhbmNlcy5wb3AoKSB0byBlbnN1cmUgdGhlIHJldmVyc2Ugb3JkZXJcbiAgICB3aGlsZSAoZWwgPSBpbnN0YW5jZXMucG9wKCkpIHtcbiAgICAgIGlmIChlbCA9PT0gdGhpcykge1xuICAgICAgICAvLyBTa2lwIHRoZSBjdXJyZW50IGluc3RhbmNlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdbcGFydD1cIm92ZXJsYXlcIl0nKS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnKTtcbiAgICAgIGlmICghZWwubW9kZWxlc3MpIHtcbiAgICAgICAgLy8gU3RvcCBhZnRlciB0aGUgbGFzdCBtb2RhbFxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlT2xkQ29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuY29udGVudCB8fCAhdGhpcy5fY29udGVudE5vZGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgdGhpcy5fY29udGVudE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlID09PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX29yaWdpbmFsQ29udGVudFBhcnQpIHtcbiAgICAgIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIDxkaXYgcGFydD1cImNvbnRlbnRcIj5cbiAgICAgIHRoaXMuJC5jb250ZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRoaXMuX29yaWdpbmFsQ29udGVudFBhcnQsIHRoaXMuJC5jb250ZW50KTtcbiAgICAgIHRoaXMuJC5jb250ZW50ID0gdGhpcy5fb3JpZ2luYWxDb250ZW50UGFydDtcbiAgICAgIHRoaXMuX29yaWdpbmFsQ29udGVudFBhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5fb2JzZXJ2ZXIuY29ubmVjdCgpO1xuXG4gICAgdGhpcy5fY29udGVudE5vZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29udGVudCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIF9zdGFtcE92ZXJsYXlUZW1wbGF0ZSh0ZW1wbGF0ZSwgaW5zdGFuY2VQcm9wcykge1xuICAgIHRoaXMuX3JlbW92ZU9sZENvbnRlbnQoKTtcblxuICAgIGlmICghdGVtcGxhdGUuX1RlbXBsYXRpemVyKSB7XG4gICAgICB0ZW1wbGF0ZS5fVGVtcGxhdGl6ZXIgPSB0ZW1wbGF0aXplKHRlbXBsYXRlLCB0aGlzLCB7XG4gICAgICAgIGluc3RhbmNlUHJvcHM6IGluc3RhbmNlUHJvcHMsXG4gICAgICAgIGZvcndhcmRIb3N0UHJvcDogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmZvcndhcmRIb3N0UHJvcChwcm9wLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyB0ZW1wbGF0ZS5fVGVtcGxhdGl6ZXIoe30pO1xuICAgIHRoaXMuX2NvbnRlbnROb2RlcyA9IEFycmF5LmZyb20odGhpcy5faW5zdGFuY2Uucm9vdC5jaGlsZE5vZGVzKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlUm9vdCA9IHRlbXBsYXRlLl90ZW1wbGF0ZVJvb3QgfHwgKHRlbXBsYXRlLl90ZW1wbGF0ZVJvb3QgPSB0ZW1wbGF0ZS5nZXRSb290Tm9kZSgpKTtcbiAgICBjb25zdCBfaXNTY29wZWQgPSB0ZW1wbGF0ZVJvb3QgIT09IGRvY3VtZW50O1xuXG4gICAgaWYgKF9pc1Njb3BlZCkge1xuICAgICAgY29uc3QgaXNTaGFkeSA9IHdpbmRvdy5TaGFkeUNTUyAmJiAhd2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdztcblxuICAgICAgaWYgKCF0aGlzLiQuY29udGVudC5zaGFkb3dSb290KSB7XG4gICAgICAgIHRoaXMuJC5jb250ZW50LmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzY29wZUNzc1RleHQgPSBBcnJheS5mcm9tKHRlbXBsYXRlUm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKVxuICAgICAgICAucmVkdWNlKChyZXN1bHQsIHN0eWxlKSA9PiByZXN1bHQgKyBzdHlsZS50ZXh0Q29udGVudCwgJycpO1xuXG4gICAgICBpZiAoaXNTaGFkeSkge1xuICAgICAgICAvLyBOT1RFKHBsYXRvc2hhKTogU2hhZHlDU1MgcmVtb3ZlcyA8c3R5bGU+4oCZcyBmcm9tIHRlbXBsYXRlcywgc29cbiAgICAgICAgLy8gd2UgaGF2ZSB0byB1c2UgdGhlc2UgcHJvdGVjdGVkIEFQSXMgdG8gZ2V0IHRoZWlyIGNvbnRlbnRzIGJhY2tcbiAgICAgICAgY29uc3Qgc3R5bGVJbmZvID0gd2luZG93LlNoYWR5Q1NTLlNjb3BpbmdTaGltXG4gICAgICAgICAgLl9zdHlsZUluZm9Gb3JOb2RlKHRlbXBsYXRlUm9vdC5ob3N0KTtcbiAgICAgICAgaWYgKHN0eWxlSW5mbykge1xuICAgICAgICAgIHNjb3BlQ3NzVGV4dCArPSBzdHlsZUluZm8uX2dldFN0eWxlUnVsZXMoKS5wYXJzZWRDc3NUZXh0O1xuICAgICAgICAgIHNjb3BlQ3NzVGV4dCArPSAnfSc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIG92ZXJsYXkgcm9vdOKAmXMgOmhvc3Qgc3R5bGVzIHNob3VsZCBub3QgYXBwbHkgaW5zaWRlIHRoZSBvdmVybGF5XG4gICAgICBzY29wZUNzc1RleHQgPSBzY29wZUNzc1RleHQucmVwbGFjZSgvOmhvc3QvZywgJzpob3N0LW5vbWF0Y2gnKTtcblxuICAgICAgaWYgKHNjb3BlQ3NzVGV4dCkge1xuICAgICAgICBpZiAoaXNTaGFkeSkge1xuICAgICAgICAgIC8vIFNoYWR5RE9NOiByZXBsYWNlIHRoZSA8ZGl2IHBhcnQ9XCJjb250ZW50XCI+IHdpdGggYSBnZW5lcmF0ZWRcbiAgICAgICAgICAvLyBzdHlsZWQgY3VzdG9tIGVsZW1lbnRcbiAgICAgICAgICBjb25zdCBjb250ZW50UGFydCA9IGNyZWF0ZU92ZXJsYXlDb250ZW50KHNjb3BlQ3NzVGV4dCk7XG4gICAgICAgICAgY29udGVudFBhcnQuaWQgPSAnY29udGVudCc7XG4gICAgICAgICAgY29udGVudFBhcnQuc2V0QXR0cmlidXRlKCdwYXJ0JywgJ2NvbnRlbnQnKTtcbiAgICAgICAgICB0aGlzLiQuY29udGVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb250ZW50UGFydCwgdGhpcy4kLmNvbnRlbnQpO1xuICAgICAgICAgIC8vIE5PVEUocGxhdG9zaGEpOiBjYXJyeSB0aGUgc3R5bGUgc2NvcGUgb2YgdGhlIGNvbnRlbnQgcGFydFxuICAgICAgICAgIGNvbnRlbnRQYXJ0LmNsYXNzTmFtZSA9IHRoaXMuJC5jb250ZW50LmNsYXNzTmFtZTtcbiAgICAgICAgICB0aGlzLl9vcmlnaW5hbENvbnRlbnRQYXJ0ID0gdGhpcy4kLmNvbnRlbnQ7XG4gICAgICAgICAgdGhpcy4kLmNvbnRlbnQgPSBjb250ZW50UGFydDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTaGFkb3cgRE9NOiBhcHBlbmQgYSBzdHlsZSB0byB0aGUgY29udGVudCBzaGFkb3dSb290XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc2NvcGVDc3NUZXh0O1xuICAgICAgICAgIHRoaXMuJC5jb250ZW50LnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgIHRoaXMuX2NvbnRlbnROb2Rlcy51bnNoaWZ0KHN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLiQuY29udGVudC5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMuX2luc3RhbmNlLnJvb3QpO1xuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy4kLmNvbnRlbnQuc2hhZG93Um9vdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLl9pbnN0YW5jZS5yb290KTtcbiAgICAgIHRoaXMuY29udGVudCA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgX3JlbW92ZU5ld1JlbmRlcmVyT3JUZW1wbGF0ZSh0ZW1wbGF0ZSwgb2xkVGVtcGxhdGUsIHJlbmRlcmVyLCBvbGRSZW5kZXJlcikge1xuICAgIGlmICh0ZW1wbGF0ZSAhPT0gb2xkVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMudGVtcGxhdGUgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmIChyZW5kZXJlciAhPT0gb2xkUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hbnVhbGx5IGludm9rZSBleGlzdGluZyByZW5kZXJlci5cbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5yZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5jYWxsKHRoaXMub3duZXIsIHRoaXMuY29udGVudCwgdGhpcy5vd25lciwgdGhpcy5tb2RlbCk7XG4gICAgfVxuICB9XG5cbiAgX3RlbXBsYXRlT3JSZW5kZXJlckNoYW5nZWQodGVtcGxhdGUsIHJlbmRlcmVyLCBvd25lciwgbW9kZWwsIGluc3RhbmNlUHJvcHMsIG9wZW5lZCkge1xuICAgIGlmICh0ZW1wbGF0ZSAmJiByZW5kZXJlcikge1xuICAgICAgdGhpcy5fcmVtb3ZlTmV3UmVuZGVyZXJPclRlbXBsYXRlKHRlbXBsYXRlLCB0aGlzLl9vbGRUZW1wbGF0ZSwgcmVuZGVyZXIsIHRoaXMuX29sZFJlbmRlcmVyKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IHNob3VsZCBvbmx5IHVzZSBlaXRoZXIgYSByZW5kZXJlciBvciBhIHRlbXBsYXRlIGZvciBvdmVybGF5IGNvbnRlbnQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBvd25lck9yTW9kZWxDaGFuZ2VkID0gKHRoaXMuX29sZE93bmVyICE9PSBvd25lciB8fCB0aGlzLl9vbGRNb2RlbCAhPT0gbW9kZWwpO1xuICAgIHRoaXMuX29sZE1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5fb2xkT3duZXIgPSBvd25lcjtcblxuICAgIGNvbnN0IHRlbXBsYXRlT3JJbnN0YW5jZVByb3BzQ2hhbmdlZCA9ICh0aGlzLl9vbGRJbnN0YW5jZVByb3BzICE9PSBpbnN0YW5jZVByb3BzIHx8IHRoaXMuX29sZFRlbXBsYXRlICE9PSB0ZW1wbGF0ZSk7XG4gICAgdGhpcy5fb2xkSW5zdGFuY2VQcm9wcyA9IGluc3RhbmNlUHJvcHM7XG4gICAgdGhpcy5fb2xkVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGNvbnN0IHJlbmRlcmVyQ2hhbmdlZCA9IHRoaXMuX29sZFJlbmRlcmVyICE9PSByZW5kZXJlcjtcbiAgICB0aGlzLl9vbGRSZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgY29uc3Qgb3BlbmVkQ2hhbmdlZCA9IHRoaXMuX29sZE9wZW5lZCAhPT0gb3BlbmVkO1xuICAgIHRoaXMuX29sZE9wZW5lZCA9IG9wZW5lZDtcblxuICAgIGlmICh0ZW1wbGF0ZSAmJiB0ZW1wbGF0ZU9ySW5zdGFuY2VQcm9wc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuX3N0YW1wT3ZlcmxheVRlbXBsYXRlKHRlbXBsYXRlLCBpbnN0YW5jZVByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHJlbmRlcmVyICYmIChyZW5kZXJlckNoYW5nZWQgfHwgb3BlbmVkQ2hhbmdlZCB8fCBvd25lck9yTW9kZWxDaGFuZ2VkKSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcztcblxuICAgICAgaWYgKHJlbmRlcmVyQ2hhbmdlZCkge1xuICAgICAgICB3aGlsZSAodGhpcy5jb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvcGVuZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaXNGb2N1c2VkKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50LmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudDtcbiAgfVxuXG4gIF9mb2N1c2VkSW5kZXgoZWxlbWVudHMpIHtcbiAgICBlbGVtZW50cyA9IGVsZW1lbnRzIHx8IHRoaXMuX2dldEZvY3VzYWJsZUVsZW1lbnRzKCk7XG4gICAgcmV0dXJuIGVsZW1lbnRzLmluZGV4T2YoZWxlbWVudHMuZmlsdGVyKHRoaXMuX2lzRm9jdXNlZCkucG9wKCkpO1xuICB9XG5cbiAgX2N5Y2xlVGFiKGluY3JlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IHRoaXMuX2dldEZvY3VzYWJsZUVsZW1lbnRzKCk7XG5cbiAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5kZXggPSB0aGlzLl9mb2N1c2VkSW5kZXgoZm9jdXNhYmxlRWxlbWVudHMpO1xuICAgIH1cblxuICAgIGluZGV4ICs9IGluY3JlbWVudDtcblxuICAgIC8vIHJvbGxvdmVyIHRvIGZpcnN0IGl0ZW1cbiAgICBpZiAoaW5kZXggPj0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBmb2N1c2FibGVFbGVtZW50c1tpbmRleF0uZm9jdXMoKTtcbiAgfVxuXG4gIF9nZXRGb2N1c2FibGVFbGVtZW50cygpIHtcbiAgICAvLyBjb2xsZWN0IGFsbCBmb2N1c2FibGUgZWxlbWVudHNcbiAgICByZXR1cm4gRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMuJC5vdmVybGF5KTtcbiAgfVxuXG4gIF9nZXRBY3RpdmVFbGVtZW50KCkge1xuICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5fYWN0aXZlRWxlbWVudCB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIC8vIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIGJlIG51bGxcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvYWN0aXZlRWxlbWVudFxuICAgIC8vIEluIElFIDExLCBpdCBjYW4gYWxzbyBiZSBhbiBvYmplY3Qgd2hlbiBvcGVyYXRpbmcgaW4gaWZyYW1lc1xuICAgIC8vIG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAod2hlbiBvdmVybGF5IGNsb3NlZCBvbiBvdXRzaWRlIGNsaWNrKS5cbiAgICAvLyBJbiB0aGVzZSBjYXNlcywgZGVmYXVsdCBpdCB0byBkb2N1bWVudC5ib2R5LlxuICAgIGlmICghYWN0aXZlIHx8IGFjdGl2ZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGFjdGl2ZSBpbnN0YW5jZW9mIEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICBhY3RpdmUgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cbiAgICB3aGlsZSAoYWN0aXZlLnNoYWRvd1Jvb3QgJiYgYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkge1xuICAgICAgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZTtcbiAgfVxuXG4gIF9kZWVwQ29udGFpbnMobm9kZSkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5zKG5vZGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IG4gPSBub2RlO1xuICAgIGNvbnN0IGRvYyA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICAvLyB3YWxrIGZyb20gbm9kZSB0byBgdGhpc2Agb3IgYGRvY3VtZW50YFxuICAgIHdoaWxlIChuICYmIG4gIT09IGRvYyAmJiBuICE9PSB0aGlzKSB7XG4gICAgICBuID0gbi5wYXJlbnROb2RlIHx8IG4uaG9zdDtcbiAgICB9XG4gICAgcmV0dXJuIG4gPT09IHRoaXM7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKE92ZXJsYXlFbGVtZW50LmlzLCBPdmVybGF5RWxlbWVudCk7XG5cbmV4cG9ydCB7IE92ZXJsYXlFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBEb21Nb2R1bGUgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20tbW9kdWxlLmpzJztcbmltcG9ydCB7IFRoZW1lUHJvcGVydHlNaXhpbiB9IGZyb20gJy4vdmFhZGluLXRoZW1lLXByb3BlcnR5LW1peGluLmpzJztcblxuLyoqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBjb25zdCBUaGVtYWJsZU1peGluID0gc3VwZXJDbGFzcyA9PiBjbGFzcyBWYWFkaW5UaGVtYWJsZU1peGluIGV4dGVuZHMgVGhlbWVQcm9wZXJ0eU1peGluKHN1cGVyQ2xhc3MpIHtcblxuICAvKiogQHByb3RlY3RlZCAqL1xuICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgc3VwZXIuZmluYWxpemUoKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5wcm90b3R5cGUuX3RlbXBsYXRlO1xuXG4gICAgY29uc3QgaGFzT3duVGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlICYmIHRoaXMudGVtcGxhdGUucGFyZW50RWxlbWVudCAmJiB0aGlzLnRlbXBsYXRlLnBhcmVudEVsZW1lbnQuaWQgPT09IHRoaXMuaXM7XG4gICAgY29uc3QgaW5oZXJpdGVkVGVtcGxhdGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5wcm90b3R5cGUpLl90ZW1wbGF0ZTtcbiAgICBpZiAoaW5oZXJpdGVkVGVtcGxhdGUgJiYgIWhhc093blRlbXBsYXRlKSB7XG4gICAgICAvLyBUaGUgZWxlbWVudCBkb2Vzbid0IGRlZmluZSBpdHMgb3duIHRlbXBsYXRlIC0+IGluY2x1ZGUgdGhlIHRoZW1lIG1vZHVsZXMgZnJvbSB0aGUgaW5oZXJpdGVkIHRlbXBsYXRlXG4gICAgICBBcnJheS5mcm9tKGluaGVyaXRlZFRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3R5bGVbaW5jbHVkZV0nKSkuZm9yRWFjaChzID0+IHtcbiAgICAgICAgdGhpcy5faW5jbHVkZVN0eWxlKHMuZ2V0QXR0cmlidXRlKCdpbmNsdWRlJyksIHRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2luY2x1ZGVNYXRjaGluZ1RoZW1lcyh0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKiogQHByb3RlY3RlZCAqL1xuICBzdGF0aWMgX2luY2x1ZGVNYXRjaGluZ1RoZW1lcyh0ZW1wbGF0ZSkge1xuICAgIGNvbnN0IGRvbU1vZHVsZSA9IERvbU1vZHVsZTtcbiAgICBjb25zdCBtb2R1bGVzID0gZG9tTW9kdWxlLnByb3RvdHlwZS5tb2R1bGVzO1xuXG4gICAgbGV0IGhhc1RoZW1lcyA9IGZhbHNlO1xuICAgIGNvbnN0IGRlZmF1bHRNb2R1bGVOYW1lID0gdGhpcy5pcyArICctZGVmYXVsdC10aGVtZSc7XG5cbiAgICBPYmplY3Qua2V5cyhtb2R1bGVzKVxuICAgICAgLnNvcnQoKG1vZHVsZU5hbWVBLCBtb2R1bGVOYW1lQikgPT4ge1xuICAgICAgICBjb25zdCB2YWFkaW5BID0gbW9kdWxlTmFtZUEuaW5kZXhPZigndmFhZGluLScpID09PSAwO1xuICAgICAgICBjb25zdCB2YWFkaW5CID0gbW9kdWxlTmFtZUIuaW5kZXhPZigndmFhZGluLScpID09PSAwO1xuXG4gICAgICAgIGNvbnN0IHZhYWRpblRoZW1lUHJlZml4ZXMgPSBbJ2x1bW8tJywgJ21hdGVyaWFsLSddO1xuICAgICAgICBjb25zdCB2YWFkaW5UaGVtZUEgPSB2YWFkaW5UaGVtZVByZWZpeGVzLmZpbHRlcihwcmVmaXggPT4gbW9kdWxlTmFtZUEuaW5kZXhPZihwcmVmaXgpID09PSAwKS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCB2YWFkaW5UaGVtZUIgPSB2YWFkaW5UaGVtZVByZWZpeGVzLmZpbHRlcihwcmVmaXggPT4gbW9kdWxlTmFtZUIuaW5kZXhPZihwcmVmaXgpID09PSAwKS5sZW5ndGggPiAwO1xuXG4gICAgICAgIGlmICh2YWFkaW5BICE9PSB2YWFkaW5CKSB7XG4gICAgICAgICAgLy8gSW5jbHVkZSB2YWFkaW4gY29yZSBzdHlsZXMgZmlyc3RcbiAgICAgICAgICByZXR1cm4gdmFhZGluQSA/IC0xIDogMTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWFkaW5UaGVtZUEgIT09IHZhYWRpblRoZW1lQikge1xuICAgICAgICAgIC8vIEluY2x1ZGUgdmFhZGluIHRoZW1lIHN0eWxlcyBhZnRlciB0aGF0XG4gICAgICAgICAgcmV0dXJuIHZhYWRpblRoZW1lQSA/IC0xIDogMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBMYXN0bHkgaW5jbHVkZSBjdXN0b20gc3R5bGVzIHNvIHRoZXkgb3ZlcnJpZGUgYWxsIHZhYWRpbiBzdHlsZXNcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICBpZiAobW9kdWxlTmFtZSAhPT0gZGVmYXVsdE1vZHVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCB0aGVtZUZvciA9IG1vZHVsZXNbbW9kdWxlTmFtZV0uZ2V0QXR0cmlidXRlKCd0aGVtZS1mb3InKTtcbiAgICAgICAgICBpZiAodGhlbWVGb3IpIHtcbiAgICAgICAgICAgIHRoZW1lRm9yLnNwbGl0KCcgJykuZm9yRWFjaCh0aGVtZUZvclRva2VuID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoJ14nICsgdGhlbWVGb3JUb2tlbi5zcGxpdCgnKicpLmpvaW4oJy4qJykgKyAnJCcpLnRlc3QodGhpcy5pcykpIHtcbiAgICAgICAgICAgICAgICBoYXNUaGVtZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luY2x1ZGVTdHlsZShtb2R1bGVOYW1lLCB0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAoIWhhc1RoZW1lcyAmJiBtb2R1bGVzW2RlZmF1bHRNb2R1bGVOYW1lXSkge1xuICAgICAgLy8gTm8gdGhlbWUgbW9kdWxlcyBmb3VuZCwgaW5jbHVkZSB0aGUgZGVmYXVsdCBtb2R1bGUgaWYgaXQgZXhpc3RzXG4gICAgICB0aGlzLl9pbmNsdWRlU3R5bGUoZGVmYXVsdE1vZHVsZU5hbWUsIHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgc3RhdGljIF9pbmNsdWRlU3R5bGUobW9kdWxlTmFtZSwgdGVtcGxhdGUpIHtcbiAgICBpZiAodGVtcGxhdGUgJiYgIXRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3Rvcihgc3R5bGVbaW5jbHVkZT1cIiR7bW9kdWxlTmFtZX1cIl1gKSkge1xuICAgICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZUVsLnNldEF0dHJpYnV0ZSgnaW5jbHVkZScsIG1vZHVsZU5hbWUpO1xuICAgICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgICB9XG4gIH1cblxufTtcbiIsIi8qKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgVGhlbWVQcm9wZXJ0eU1peGluID0gc3VwZXJDbGFzcyA9PiBjbGFzcyBWYWFkaW5UaGVtZVByb3BlcnR5TWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIEhlbHBlciBwcm9wZXJ0eSB3aXRoIHRoZW1lIGF0dHJpYnV0ZSB2YWx1ZSBmYWNpbGl0YXRpbmcgcHJvcGFnYXRpb25cbiAgICAgICAqIGluIHNoYWRvdyBET00uIEFsbG93cyB1c2luZyBgdGhlbWUkPVwiW1t0aGVtZV1dXCJgIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAqXG4gICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgKi9cbiAgICAgIHRoZW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqIEBwcm90ZWN0ZWQgKi9cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuXG4gICAgaWYgKG5hbWUgPT09ICd0aGVtZScpIHtcbiAgICAgIHRoaXMuX3NldFRoZW1lKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUVBOzs7Ozs7QUFNQTtBQUVBOzs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBEQTtBQUNBO0FBc0RBO0FBRUE7Ozs7Ozs7Ozs7OztBQy9HQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlMQTs7Ozs7Ozs7Ozs7O0FDdExBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZCQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3Q0E7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdCQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9HQTs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUNBO0FBR0E7Ozs7Ozs7QUFNQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsTUE7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBQ0E7QUFvQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBekhBO0FBMkhBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXB5QkE7QUFDQTtBQXF5QkE7Ozs7Ozs7Ozs7Ozs7QUNwOEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUVBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
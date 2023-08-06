(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-server-control"],{

/***/ "./src/components/buttons/ha-call-service-button.js":
/*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");

/* eslint-plugin-disable lit */





/*
 * @appliesMixin EventsMixin
 */

class HaCallServiceButton extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        tabindex="0"
        ><slot></slot
      ></ha-progress-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      domain: {
        type: String
      },
      service: {
        type: String
      },
      serviceData: {
        type: Object,
        value: {}
      },
      confirmation: {
        type: String
      }
    };
  }

  callService() {
    this.progress = true; // eslint-disable-next-line @typescript-eslint/no-this-alias

    var el = this;
    var eventData = {
      domain: this.domain,
      service: this.service,
      serviceData: this.serviceData
    };
    this.hass.callService(this.domain, this.service, this.serviceData).then(function () {
      el.progress = false;
      el.$.progress.actionSuccess();
      eventData.success = true;
    }, function () {
      el.progress = false;
      el.$.progress.actionError();
      eventData.success = false;
    }).then(function () {
      el.fire("hass-service-called", eventData);
    });
  }

  buttonTapped() {
    if (this.confirmation) {
      Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_2__["showConfirmationDialog"])(this, {
        text: this.confirmation,
        confirm: () => this.callService()
      });
    } else {
      this.callService();
    }
  }

}

customElements.define("ha-call-service-button", HaCallServiceButton);

/***/ }),

/***/ "./src/components/buttons/ha-progress-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



/* eslint-plugin-disable lit */



class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }

  tempClass(className) {
    var classList = this.$.container.classList;
    classList.add(className);
    setTimeout(() => {
      classList.remove(className);
    }, 1000);
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.buttonTapped(ev));
  }

  buttonTapped(ev) {
    if (this.progress) ev.stopPropagation();
  }

  actionSuccess() {
    this.tempClass("success");
  }

  actionError() {
    this.tempClass("error");
  }

  computeDisabled(disabled, progress) {
    return disabled || progress;
  }

}

customElements.define("ha-progress-button", HaProgressButton);

/***/ }),

/***/ "./src/dialogs/generic/show-dialog-box.ts":
/*!************************************************!*\
  !*** ./src/dialogs/generic/show-dialog-box.ts ***!
  \************************************************/
/*! exports provided: loadGenericDialog, showAlertDialog, showConfirmationDialog, showPromptDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGenericDialog", function() { return loadGenericDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertDialog", function() { return showAlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPromptDialog", function() { return showPromptDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadGenericDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(13), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e(14), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-box */ "./src/dialogs/generic/dialog-box.ts"));

const showDialogHelper = (element, dialogParams, extra) => new Promise(resolve => {
  const origCancel = dialogParams.cancel;
  const origConfirm = dialogParams.confirm;
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-box",
    dialogImport: loadGenericDialog,
    dialogParams: Object.assign({}, dialogParams, {}, extra, {
      cancel: () => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? null : false);

        if (origCancel) {
          origCancel();
        }
      },
      confirm: out => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? out : true);

        if (origConfirm) {
          origConfirm(out);
        }
      }
    })
  });
});

const showAlertDialog = (element, dialogParams) => showDialogHelper(element, dialogParams);
const showConfirmationDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  confirmation: true
});
const showPromptDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  prompt: true
});

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  /**
  * Dispatches a custom event with an optional detail value.
  *
  * @param {string} type Name of event type.
  * @param {*=} detail Detail value containing event-specific
  *   payload.
  * @param {{ bubbles: (boolean|undefined),
           cancelable: (boolean|undefined),
            composed: (boolean|undefined) }=}
  *  options Object specifying options.  These may include:
  *  `bubbles` (boolean, defaults to `true`),
  *  `cancelable` (boolean, defaults to false), and
  *  `node` on which to fire the event (HTMLElement, defaults to `this`).
  * @return {Event} The new event that was fired.
  */
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

});

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
    return {
      hass: Object,

      /**
       * Translates a string to the current `language`. Any parameters to the
       * string should be passed in order, as follows:
       * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
       */
      localize: {
        type: Function,
        computed: "__computeLocalize(hass.localize)"
      }
    };
  }

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ }),

/***/ "./src/panels/config/server_control/ha-config-section-server-control.js":
/*!******************************************************************************!*\
  !*** ./src/panels/config/server_control/ha-config-section-server-control.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.ts");



/* eslint-plugin-disable lit */








/*
 * @appliesMixin LocalizeMixin
 */

class HaConfigSectionServerControl extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex ha-style">
        .validate-container {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: 140px;
        }

        .validate-result {
          color: var(--google-green-500);
          font-weight: 500;
          margin-bottom: 1em;
        }

        .config-invalid {
          margin: 1em 0;
        }

        .config-invalid .text {
          color: var(--google-red-500);
          font-weight: 500;
        }

        .config-invalid mwc-button {
          float: right;
        }

        .validate-log {
          white-space: pre-wrap;
          direction: ltr;
        }
      </style>
      <ha-config-section is-wide="[[isWide]]">
        <span slot="header"
          >[[localize('ui.panel.config.server_control.caption')]]</span
        >
        <span slot="introduction"
          >[[localize('ui.panel.config.server_control.description')]]</span
        >

        <template is="dom-if" if="[[showAdvanced]]">
          <ha-card
            header="[[localize('ui.panel.config.server_control.section.validation.heading')]]"
          >
            <div class="card-content">
              [[localize('ui.panel.config.server_control.section.validation.introduction')]]
              <template is="dom-if" if="[[!validateLog]]">
                <div class="validate-container">
                  <template is="dom-if" if="[[!validating]]">
                    <template is="dom-if" if="[[isValid]]">
                      <div class="validate-result" id="result">
                        [[localize('ui.panel.config.server_control.section.validation.valid')]]
                      </div>
                    </template>
                    <mwc-button raised="" on-click="validateConfig">
                      [[localize('ui.panel.config.server_control.section.validation.check_config')]]
                    </mwc-button>
                  </template>
                  <template is="dom-if" if="[[validating]]">
                    <paper-spinner active=""></paper-spinner>
                  </template>
                </div>
              </template>
              <template is="dom-if" if="[[validateLog]]">
                <div class="config-invalid">
                  <span class="text">
                    [[localize('ui.panel.config.server_control.section.validation.invalid')]]
                  </span>
                  <mwc-button raised="" on-click="validateConfig">
                    [[localize('ui.panel.config.server_control.section.validation.check_config')]]
                  </mwc-button>
                </div>
                <div id="configLog" class="validate-log">[[validateLog]]</div>
              </template>
            </div>
          </ha-card>

          <ha-card
            header="[[localize('ui.panel.config.server_control.section.reloading.heading')]]"
          >
            <div class="card-content">
              [[localize('ui.panel.config.server_control.section.reloading.introduction')]]
            </div>
            <div class="card-actions">
              <ha-call-service-button
                hass="[[hass]]"
                domain="homeassistant"
                service="reload_core_config"
                >[[localize('ui.panel.config.server_control.section.reloading.core')]]
              </ha-call-service-button>
            </div>
            <template is="dom-if" if="[[groupLoaded(hass)]]">
              <div class="card-actions">
                <ha-call-service-button
                  hass="[[hass]]"
                  domain="group"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.group')]]
                </ha-call-service-button>
              </div>
            </template>
            <template is="dom-if" if="[[automationLoaded(hass)]]">
              <div class="card-actions">
                <ha-call-service-button
                  hass="[[hass]]"
                  domain="automation"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.automation')]]
                </ha-call-service-button>
              </div>
            </template>
            <template is="dom-if" if="[[scriptLoaded(hass)]]">
              <div class="card-actions">
                <ha-call-service-button
                  hass="[[hass]]"
                  domain="script"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.script')]]
                </ha-call-service-button>
              </div>
            </template>
            <template is="dom-if" if="[[sceneLoaded(hass)]]">
              <div class="card-actions">
                <ha-call-service-button
                  hass="[[hass]]"
                  domain="scene"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.scene')]]
                </ha-call-service-button>
              </div>
            </template>
            <template is="dom-if" if="[[personLoaded(hass)]]">
              <div class="card-actions">
                <ha-call-service-button
                  hass="[[hass]]"
                  domain="person"
                  service="reload"
                  >[[localize('ui.panel.config.server_control.section.reloading.person')]]
                </ha-call-service-button>
              </div>
            </template>
            <div class="card-actions">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zone"
                service="reload"
                >[[localize('ui.panel.config.server_control.section.reloading.zone')]]
              </ha-call-service-button>
            </div>
          </ha-card>
        </template>
        <ha-card
          header="[[localize('ui.panel.config.server_control.section.server_management.heading')]]"
        >
          <div class="card-content">
            [[localize('ui.panel.config.server_control.section.server_management.introduction')]]
          </div>
          <div class="card-actions warning">
            <ha-call-service-button
              class="warning"
              hass="[[hass]]"
              domain="homeassistant"
              service="restart"
              confirmation="[[localize('ui.panel.config.server_control.section.server_management.confirm_restart')]]"
              >[[localize('ui.panel.config.server_control.section.server_management.restart')]]
            </ha-call-service-button>
            <ha-call-service-button
              class="warning"
              hass="[[hass]]"
              domain="homeassistant"
              service="stop"
              confirmation="[[localize('ui.panel.config.server_control.section.server_management.confirm_stop')]]"
              >[[localize('ui.panel.config.server_control.section.server_management.stop')]]
            </ha-call-service-button>
          </div>
        </ha-card>
      </ha-config-section>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      isWide: {
        type: Boolean,
        value: false
      },
      validating: {
        type: Boolean,
        value: false
      },
      isValid: {
        type: Boolean,
        value: null
      },
      validateLog: {
        type: String,
        value: ""
      },
      showAdvanced: Boolean
    };
  }

  groupLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["isComponentLoaded"])(hass, "group");
  }

  automationLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["isComponentLoaded"])(hass, "automation");
  }

  scriptLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["isComponentLoaded"])(hass, "script");
  }

  sceneLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["isComponentLoaded"])(hass, "scene");
  }

  personLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["isComponentLoaded"])(hass, "person");
  }

  validateConfig() {
    this.validating = true;
    this.validateLog = "";
    this.isValid = null;
    this.hass.callApi("POST", "config/core/check_config").then(result => {
      this.validating = false;
      this.isValid = result.result === "valid";

      if (!this.isValid) {
        this.validateLog = result.errors;
      }
    });
  }

}

customElements.define("ha-config-section-server-control", HaConfigSectionServerControl);

/***/ }),

/***/ "./src/panels/config/server_control/ha-config-server-control.js":
/*!**********************************************************************!*\
  !*** ./src/panels/config/server_control/ha-config-server-control.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _layouts_hass_tabs_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/hass-tabs-subpage */ "./src/layouts/hass-tabs-subpage.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
/* harmony import */ var _ha_config_section_server_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ha-config-section-server-control */ "./src/panels/config/server_control/ha-config-section-server-control.js");




/* eslint-plugin-disable lit */







/*
 * @appliesMixin LocalizeMixin
 */

class HaConfigServerControl extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 32px;
        }

        .border {
          margin: 32px auto 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          max-width: 1040px;
        }

        .narrow .border {
          max-width: 640px;
        }
      </style>

      <hass-tabs-subpage
        hass="[[hass]]"
        narrow="[[narrow]]"
        route="[[route]]"
        back-path="/config"
        tabs="[[_computeTabs()]]"
        show-advanced="[[showAdvanced]]"
      >
        <div class$="[[computeClasses(isWide)]]">
          <ha-config-section-server-control
            is-wide="[[isWide]]"
            show-advanced="[[showAdvanced]]"
            hass="[[hass]]"
          ></ha-config-section-server-control>
        </div>
      </hass-tabs-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      narrow: Boolean,
      route: Object,
      showAdvanced: Boolean
    };
  }

  _computeTabs() {
    return _ha_panel_config__WEBPACK_IMPORTED_MODULE_8__["configSections"].general;
  }

  computeClasses(isWide) {
    return isWide ? "content" : "content narrow";
  }

}

customElements.define("ha-config-server-control", HaConfigServerControl);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNlcnZlci1jb250cm9sLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2VydmVyX2NvbnRyb2wvaGEtY29uZmlnLXNlY3Rpb24tc2VydmVyLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2VydmVyX2NvbnRyb2wvaGEtY29uZmlnLXNlcnZlci1jb250cm9sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBcIi4vaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2FsbFNlcnZpY2VCdXR0b24gZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICBpZD1cInByb2dyZXNzXCJcbiAgICAgICAgcHJvZ3Jlc3M9XCJbW3Byb2dyZXNzXV1cIlxuICAgICAgICBvbi1jbGljaz1cImJ1dHRvblRhcHBlZFwiXG4gICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgID48c2xvdD48L3Nsb3RcbiAgICAgID48L2hhLXByb2dyZXNzLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgY29uZmlybWF0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNhbGxTZXJ2aWNlKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB0cnVlO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdmFyIGV2ZW50RGF0YSA9IHtcbiAgICAgIGRvbWFpbjogdGhpcy5kb21haW4sXG4gICAgICBzZXJ2aWNlOiB0aGlzLnNlcnZpY2UsXG4gICAgICBzZXJ2aWNlRGF0YTogdGhpcy5zZXJ2aWNlRGF0YSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZSwgdGhpcy5zZXJ2aWNlRGF0YSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvblN1Y2Nlc3MoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlbC5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIGVsLiQucHJvZ3Jlc3MuYWN0aW9uRXJyb3IoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsLmZpcmUoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIGV2ZW50RGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZCgpIHtcbiAgICBpZiAodGhpcy5jb25maXJtYXRpb24pIHtcbiAgICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiB0aGlzLmNvbmZpcm1hdGlvbixcbiAgICAgICAgY29uZmlybTogKCkgPT4gdGhpcy5jYWxsU2VydmljZSgpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsbFNlcnZpY2UoKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiLCBIYUNhbGxTZXJ2aWNlQnV0dG9uKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhUHJvZ3Jlc3NCdXR0b24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VjY2VzcyBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtZ3JlZW4tNTAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIG13Yy1idXR0b24ge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQ7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIGlkPVwiYnV0dG9uXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZURpc2FibGVkKGRpc2FibGVkLCBwcm9ncmVzcyldXVwiXG4gICAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1twcm9ncmVzc11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+PHBhcGVyLXNwaW5uZXIgYWN0aXZlPVwiXCI+PC9wYXBlci1zcGlubmVyPjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB0ZW1wQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNsYXNzTGlzdCA9IHRoaXMuJC5jb250YWluZXIuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB0aGlzLmJ1dHRvblRhcHBlZChldikpO1xuICB9XG5cbiAgYnV0dG9uVGFwcGVkKGV2KSB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MpIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgYWN0aW9uU3VjY2VzcygpIHtcbiAgICB0aGlzLnRlbXBDbGFzcyhcInN1Y2Nlc3NcIik7XG4gIH1cblxuICBhY3Rpb25FcnJvcigpIHtcbiAgICB0aGlzLnRlbXBDbGFzcyhcImVycm9yXCIpO1xuICB9XG5cbiAgY29tcHV0ZURpc2FibGVkKGRpc2FibGVkLCBwcm9ncmVzcykge1xuICAgIHJldHVybiBkaXNhYmxlZCB8fCBwcm9ncmVzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wcm9ncmVzcy1idXR0b25cIiwgSGFQcm9ncmVzc0J1dHRvbik7XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbnRlcmZhY2UgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZXN1bHQ7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBkaXNtaXNzVGV4dD86IHN0cmluZztcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG4gIGNhbmNlbD86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGlucHV0TGFiZWw/OiBzdHJpbmc7XG4gIGlucHV0VHlwZT86IHN0cmluZztcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dQYXJhbXNcbiAgZXh0ZW5kcyBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMsXG4gICAgUHJvbXB0RGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNvbmZpcm1hdGlvbj86IGJvb2xlYW47XG4gIHByb21wdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkR2VuZXJpY0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpcm1hdGlvblwiICovIFwiLi9kaWFsb2ctYm94XCIpO1xuXG5jb25zdCBzaG93RGlhbG9nSGVscGVyID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBEaWFsb2dQYXJhbXMsXG4gIGV4dHJhPzoge1xuICAgIGNvbmZpcm1hdGlvbj86IERpYWxvZ1BhcmFtc1tcImNvbmZpcm1hdGlvblwiXTtcbiAgICBwcm9tcHQ/OiBEaWFsb2dQYXJhbXNbXCJwcm9tcHRcIl07XG4gIH1cbikgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBvcmlnQ2FuY2VsID0gZGlhbG9nUGFyYW1zLmNhbmNlbDtcbiAgICBjb25zdCBvcmlnQ29uZmlybSA9IGRpYWxvZ1BhcmFtcy5jb25maXJtO1xuXG4gICAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgICAgZGlhbG9nVGFnOiBcImRpYWxvZy1ib3hcIixcbiAgICAgIGRpYWxvZ0ltcG9ydDogbG9hZEdlbmVyaWNEaWFsb2csXG4gICAgICBkaWFsb2dQYXJhbXM6IHtcbiAgICAgICAgLi4uZGlhbG9nUGFyYW1zLFxuICAgICAgICAuLi5leHRyYSxcbiAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gbnVsbCA6IGZhbHNlKTtcbiAgICAgICAgICBpZiAob3JpZ0NhbmNlbCkge1xuICAgICAgICAgICAgb3JpZ0NhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybTogKG91dCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG91dCA6IHRydWUpO1xuICAgICAgICAgIGlmIChvcmlnQ29uZmlybSkge1xuICAgICAgICAgICAgb3JpZ0NvbmZpcm0ob3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNob3dBbGVydERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQWxlcnREaWFsb2dQYXJhbXNcbikgPT4gc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IGNvbmZpcm1hdGlvbjogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIGJvb2xlYW5cbiAgPjtcblxuZXhwb3J0IGNvbnN0IHNob3dQcm9tcHREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IFByb21wdERpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBwcm9tcHQ6IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBudWxsIHwgc3RyaW5nXG4gID47XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYUNvbmZpZ1NlY3Rpb25TZXJ2ZXJDb250cm9sIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLnZhbGlkYXRlLWNvbnRhaW5lciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmFsaWRhdGUtcmVzdWx0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29uZmlnLWludmFsaWQge1xuICAgICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29uZmlnLWludmFsaWQgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb25maWctaW52YWxpZCBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAudmFsaWRhdGUtbG9nIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5jYXB0aW9uJyldXTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuZGVzY3JpcHRpb24nKV1dPC9zcGFuXG4gICAgICAgID5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0FkdmFuY2VkXV1cIj5cbiAgICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgICAgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24udmFsaWRhdGlvbi5oZWFkaW5nJyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi52YWxpZGF0aW9uLmludHJvZHVjdGlvbicpXV1cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyF2YWxpZGF0ZUxvZ11dXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbGlkYXRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyF2YWxpZGF0aW5nXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2lzVmFsaWRdXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWxpZGF0ZS1yZXN1bHRcIiBpZD1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24udmFsaWRhdGlvbi52YWxpZCcpXV1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkPVwiXCIgb24tY2xpY2s9XCJ2YWxpZGF0ZUNvbmZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnZhbGlkYXRpb24uY2hlY2tfY29uZmlnJyldXVxuICAgICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3ZhbGlkYXRpbmddXVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU9XCJcIj48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbdmFsaWRhdGVMb2ddXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWctaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnZhbGlkYXRpb24uaW52YWxpZCcpXV1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD1cIlwiIG9uLWNsaWNrPVwidmFsaWRhdGVDb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24udmFsaWRhdGlvbi5jaGVja19jb25maWcnKV1dXG4gICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbmZpZ0xvZ1wiIGNsYXNzPVwidmFsaWRhdGUtbG9nXCI+W1t2YWxpZGF0ZUxvZ11dPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG5cbiAgICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgICAgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24ucmVsb2FkaW5nLmhlYWRpbmcnKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5pbnRyb2R1Y3Rpb24nKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cImhvbWVhc3Npc3RhbnRcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWxvYWRfY29yZV9jb25maWdcIlxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5yZWxvYWRpbmcuY29yZScpXV1cbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZ3JvdXBMb2FkZWQoaGFzcyldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJncm91cFwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVsb2FkXCJcbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5yZWxvYWRpbmcuZ3JvdXAnKV1dXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbYXV0b21hdGlvbkxvYWRlZChoYXNzKV1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cImF1dG9tYXRpb25cIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlbG9hZFwiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24ucmVsb2FkaW5nLmF1dG9tYXRpb24nKV1dXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2NyaXB0TG9hZGVkKGhhc3MpXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWxvYWRcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5zY3JpcHQnKV1dXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2NlbmVMb2FkZWQoaGFzcyldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJzY2VuZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVsb2FkXCJcbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5yZWxvYWRpbmcuc2NlbmUnKV1dXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcGVyc29uTG9hZGVkKGhhc3MpXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwicGVyc29uXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWxvYWRcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5wZXJzb24nKV1dXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJ6b25lXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVsb2FkXCJcbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24ucmVsb2FkaW5nLnpvbmUnKV1dXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5zZXJ2ZXJfbWFuYWdlbWVudC5oZWFkaW5nJyldXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5zZXJ2ZXJfbWFuYWdlbWVudC5pbnRyb2R1Y3Rpb24nKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9ucyB3YXJuaW5nXCI+XG4gICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBkb21haW49XCJob21lYXNzaXN0YW50XCJcbiAgICAgICAgICAgICAgc2VydmljZT1cInJlc3RhcnRcIlxuICAgICAgICAgICAgICBjb25maXJtYXRpb249XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5zZXJ2ZXJfbWFuYWdlbWVudC5jb25maXJtX3Jlc3RhcnQnKV1dXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnNlcnZlcl9tYW5hZ2VtZW50LnJlc3RhcnQnKV1dXG4gICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBkb21haW49XCJob21lYXNzaXN0YW50XCJcbiAgICAgICAgICAgICAgc2VydmljZT1cInN0b3BcIlxuICAgICAgICAgICAgICBjb25maXJtYXRpb249XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5zZXJ2ZXJfbWFuYWdlbWVudC5jb25maXJtX3N0b3AnKV1dXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnNlcnZlcl9tYW5hZ2VtZW50LnN0b3AnKV1dXG4gICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgdmFsaWRhdGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBpc1ZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgdmFsaWRhdGVMb2c6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIHNob3dBZHZhbmNlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgZ3JvdXBMb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcImdyb3VwXCIpO1xuICB9XG5cbiAgYXV0b21hdGlvbkxvYWRlZChoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwiYXV0b21hdGlvblwiKTtcbiAgfVxuXG4gIHNjcmlwdExvYWRlZChoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwic2NyaXB0XCIpO1xuICB9XG5cbiAgc2NlbmVMb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcInNjZW5lXCIpO1xuICB9XG5cbiAgcGVyc29uTG9hZGVkKGhhc3MpIHtcbiAgICByZXR1cm4gaXNDb21wb25lbnRMb2FkZWQoaGFzcywgXCJwZXJzb25cIik7XG4gIH1cblxuICB2YWxpZGF0ZUNvbmZpZygpIHtcbiAgICB0aGlzLnZhbGlkYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdGVMb2cgPSBcIlwiO1xuICAgIHRoaXMuaXNWYWxpZCA9IG51bGw7XG5cbiAgICB0aGlzLmhhc3MuY2FsbEFwaShcIlBPU1RcIiwgXCJjb25maWcvY29yZS9jaGVja19jb25maWdcIikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNWYWxpZCA9IHJlc3VsdC5yZXN1bHQgPT09IFwidmFsaWRcIjtcblxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUxvZyA9IHJlc3VsdC5lcnJvcnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcImhhLWNvbmZpZy1zZWN0aW9uLXNlcnZlci1jb250cm9sXCIsXG4gIEhhQ29uZmlnU2VjdGlvblNlcnZlckNvbnRyb2xcbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCB7IGNvbmZpZ1NlY3Rpb25zIH0gZnJvbSBcIi4uL2hhLXBhbmVsLWNvbmZpZ1wiO1xuaW1wb3J0IFwiLi9oYS1jb25maWctc2VjdGlvbi1zZXJ2ZXItY29udHJvbFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhQ29uZmlnU2VydmVyQ29udHJvbCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3JkZXIge1xuICAgICAgICAgIG1hcmdpbjogMzJweCBhdXRvIDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93IC5ib3JkZXIge1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxoYXNzLXRhYnMtc3VicGFnZVxuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBiYWNrLXBhdGg9XCIvY29uZmlnXCJcbiAgICAgICAgdGFicz1cIltbX2NvbXB1dGVUYWJzKCldXVwiXG4gICAgICAgIHNob3ctYWR2YW5jZWQ9XCJbW3Nob3dBZHZhbmNlZF1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbi1zZXJ2ZXItY29udHJvbFxuICAgICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgICAgc2hvdy1hZHZhbmNlZD1cIltbc2hvd0FkdmFuY2VkXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICA+PC9oYS1jb25maWctc2VjdGlvbi1zZXJ2ZXItY29udHJvbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3MtdGFicy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIHJvdXRlOiBPYmplY3QsXG4gICAgICBzaG93QWR2YW5jZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlVGFicygpIHtcbiAgICByZXR1cm4gY29uZmlnU2VjdGlvbnMuZ2VuZXJhbDtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHJldHVybiBpc1dpZGUgPyBcImNvbnRlbnRcIiA6IFwiY29udGVudCBuYXJyb3dcIjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VydmVyLWNvbnRyb2xcIiwgSGFDb25maWdTZXJ2ZXJDb250cm9sKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUF2QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxGQTtBQUNBO0FBbUZBOzs7Ozs7Ozs7Ozs7QUM5RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEdBO0FBQ0E7QUFpR0E7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDQSw2Z0JBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBSEE7QUFvQkE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUFBO0FBSUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQXpCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0UEE7QUFDQTtBQXVQQTs7Ozs7Ozs7Ozs7O0FDdlFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZEQTtBQUNBO0FBd0RBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
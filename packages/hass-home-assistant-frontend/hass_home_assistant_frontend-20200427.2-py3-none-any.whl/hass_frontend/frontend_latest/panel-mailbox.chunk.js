(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-mailbox"],{

/***/ "./src/common/datetime/check_options_support.ts":
/*!******************************************************!*\
  !*** ./src/common/datetime/check_options_support.ts ***!
  \******************************************************/
/*! exports provided: toLocaleDateStringSupportsOptions, toLocaleTimeStringSupportsOptions, toLocaleStringSupportsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateStringSupportsOptions", function() { return toLocaleDateStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeStringSupportsOptions", function() { return toLocaleTimeStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleStringSupportsOptions", function() { return toLocaleStringSupportsOptions; });
// Check for support of native locale string options
function checkToLocaleDateStringSupportsOptions() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

const toLocaleDateStringSupportsOptions = checkToLocaleDateStringSupportsOptions();
const toLocaleTimeStringSupportsOptions = checkToLocaleTimeStringSupportsOptions();
const toLocaleStringSupportsOptions = checkToLocaleStringSupportsOptions();

/***/ }),

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: formatDateTime, formatDateTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTime", function() { return formatDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTimeWithSeconds", function() { return formatDateTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDateTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.shortTime}`);
const formatDateTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.mediumTime}`);

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

/***/ "./src/panels/mailbox/ha-panel-mailbox.js":
/*!************************************************!*\
  !*** ./src/panels/mailbox/ha-panel-mailbox.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");










/* eslint-plugin-disable lit */








let registeredDialog = false;
/*
 * @appliesMixin LocalizeMixin
 */

class HaPanelMailbox extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_10__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_9__["html"]`
      <style include="ha-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          padding: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        ha-card {
          overflow: hidden;
        }

        paper-item {
          cursor: pointer;
        }

        .empty {
          text-align: center;
          color: var(--secondary-text-color);
        }

        .header {
          @apply --paper-font-title;
        }

        .row {
          display: flex;
          justify-content: space-between;
        }

        @media all and (max-width: 450px) {
          .content {
            width: auto;
            padding: 0;
          }
        }

        .tip {
          color: var(--secondary-text-color);
          font-size: 14px;
        }
        .date {
          color: var(--primary-text-color);
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.mailbox')]]</div>
          </app-toolbar>
          <div sticky hidden$="[[areTabsHidden(platforms)]]">
            <paper-tabs
              scrollable
              selected="[[_currentPlatform]]"
              on-iron-activate="handlePlatformSelected"
            >
              <template is="dom-repeat" items="[[platforms]]">
                <paper-tab data-entity="[[item]]">
                  [[getPlatformName(item)]]
                </paper-tab>
              </template>
            </paper-tabs>
          </div>
        </app-header>
        <div class="content">
          <ha-card>
            <template is="dom-if" if="[[!_messages.length]]">
              <div class="card-content empty">
                [[localize('ui.panel.mailbox.empty')]]
              </div>
            </template>
            <template is="dom-repeat" items="[[_messages]]">
              <paper-item on-click="openMP3Dialog">
                <paper-item-body style="width:100%" two-line>
                  <div class="row">
                    <div>[[item.caller]]</div>
                    <div class="tip">
                      [[localize('ui.duration.second', 'count', item.duration)]]
                    </div>
                  </div>
                  <div secondary>
                    <span class="date">[[item.timestamp]]</span> -
                    [[item.message]]
                  </div>
                </paper-item-body>
              </paper-item>
            </template>
          </ha-card>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      platforms: {
        type: Array
      },
      _messages: {
        type: Array
      },
      _currentPlatform: {
        type: Number,
        value: 0
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!registeredDialog) {
      registeredDialog = true;
      this.fire("register-dialog", {
        dialogShowEvent: "show-audio-message-dialog",
        dialogTag: "ha-dialog-show-audio-message",
        dialogImport: () => Promise.all(/*! import() | ha-dialog-show-audio-message */[__webpack_require__.e(1), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e("vendors~ha-dialog-show-audio-message"), __webpack_require__.e("ha-dialog-show-audio-message")]).then(__webpack_require__.bind(null, /*! ./ha-dialog-show-audio-message */ "./src/panels/mailbox/ha-dialog-show-audio-message.js"))
      });
    }

    this.hassChanged = this.hassChanged.bind(this);
    this.hass.connection.subscribeEvents(this.hassChanged, "mailbox_updated").then(function (unsub) {
      this._unsubEvents = unsub;
    }.bind(this));
    this.computePlatforms().then(function (platforms) {
      this.platforms = platforms;
      this.hassChanged();
    }.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._unsubEvents) this._unsubEvents();
  }

  hassChanged() {
    if (!this._messages) {
      this._messages = [];
    }

    this.getMessages().then(function (items) {
      this._messages = items;
    }.bind(this));
  }

  openMP3Dialog(event) {
    this.fire("show-audio-message-dialog", {
      hass: this.hass,
      message: event.model.item
    });
  }

  getMessages() {
    const platform = this.platforms[this._currentPlatform];
    return this.hass.callApi("GET", `mailbox/messages/${platform.name}`).then(values => {
      const platformItems = [];
      const arrayLength = values.length;

      for (let i = 0; i < arrayLength; i++) {
        const datetime = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_11__["formatDateTime"])(new Date(values[i].info.origtime * 1000), this.hass.language);
        platformItems.push({
          timestamp: datetime,
          caller: values[i].info.callerid,
          message: values[i].text,
          sha: values[i].sha,
          duration: values[i].info.duration,
          platform: platform
        });
      }

      return platformItems.sort(function (a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
    });
  }

  computePlatforms() {
    return this.hass.callApi("GET", "mailbox/platforms");
  }

  handlePlatformSelected(ev) {
    const newPlatform = ev.detail.selected;

    if (newPlatform !== this._currentPlatform) {
      this._currentPlatform = newPlatform;
      this.hassChanged();
    }
  }

  areTabsHidden(platforms) {
    return !platforms || platforms.length < 2;
  }

  getPlatformName(item) {
    const entity = `mailbox.${item.name}`;
    const stateObj = this.hass.states[entity.toLowerCase()];
    return stateObj.attributes.friendly_name;
  }

}

customElements.define("ha-panel-mailbox", HaPanelMailbox);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbWFpbGJveC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvY2hlY2tfb3B0aW9uc19zdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbWFpbGJveC9oYS1wYW5lbC1tYWlsYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIGNoZWNrVG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUb0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja1RvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgY29uc3QgdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKTtcbmV4cG9ydCBjb25zdCB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuZXhwb3J0IGNvbnN0IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuaW1wb3J0IHsgdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgfSBmcm9tIFwiLi9jaGVja19vcHRpb25zX3N1cHBvcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGVUaW1lID0gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT5cbiAgICAgIGZlY2hhLmZvcm1hdChcbiAgICAgICAgZGF0ZU9iaixcbiAgICAgICAgYCR7ZmVjaGEubWFza3MubG9uZ0RhdGV9LCAke2ZlY2hhLm1hc2tzLnNob3J0VGltZX1gXG4gICAgICApO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZVRpbWVXaXRoU2Vjb25kcyA9IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+XG4gICAgICBmZWNoYS5mb3JtYXQoXG4gICAgICAgIGRhdGVPYmosXG4gICAgICAgIGAke2ZlY2hhLm1hc2tzLmxvbmdEYXRlfSwgJHtmZWNoYS5tYXNrcy5tZWRpdW1UaW1lfWBcbiAgICAgICk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLXRleHRhcmVhXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZVRpbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFQYW5lbE1haWxib3ggZXh0ZW5kcyBFdmVudHNNaXhpbihMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVtcHR5IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICAucm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aXAge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgICAgPjwvaGEtbWVudS1idXR0b24+XG4gICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgncGFuZWwubWFpbGJveCcpXV08L2Rpdj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICAgIDxkaXYgc3RpY2t5IGhpZGRlbiQ9XCJbW2FyZVRhYnNIaWRkZW4ocGxhdGZvcm1zKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItdGFic1xuICAgICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tfY3VycmVudFBsYXRmb3JtXV1cIlxuICAgICAgICAgICAgICBvbi1pcm9uLWFjdGl2YXRlPVwiaGFuZGxlUGxhdGZvcm1TZWxlY3RlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbcGxhdGZvcm1zXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItdGFiIGRhdGEtZW50aXR5PVwiW1tpdGVtXV1cIj5cbiAgICAgICAgICAgICAgICAgIFtbZ2V0UGxhdGZvcm1OYW1lKGl0ZW0pXV1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLXRhYj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItdGFicz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfbWVzc2FnZXMubGVuZ3RoXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudCBlbXB0eVwiPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLm1haWxib3guZW1wdHknKV1dXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX21lc3NhZ2VzXV1cIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gb24tY2xpY2s9XCJvcGVuTVAzRGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSBzdHlsZT1cIndpZHRoOjEwMCVcIiB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5bW2l0ZW0uY2FsbGVyXV08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLnNlY29uZCcsICdjb3VudCcsIGl0ZW0uZHVyYXRpb24pXV1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGVcIj5bW2l0ZW0udGltZXN0YW1wXV08L3NwYW4+IC1cbiAgICAgICAgICAgICAgICAgICAgW1tpdGVtLm1lc3NhZ2VdXVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuXG4gICAgICBwbGF0Zm9ybXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBfbWVzc2FnZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBfY3VycmVudFBsYXRmb3JtOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICghcmVnaXN0ZXJlZERpYWxvZykge1xuICAgICAgcmVnaXN0ZXJlZERpYWxvZyA9IHRydWU7XG4gICAgICB0aGlzLmZpcmUoXCJyZWdpc3Rlci1kaWFsb2dcIiwge1xuICAgICAgICBkaWFsb2dTaG93RXZlbnQ6IFwic2hvdy1hdWRpby1tZXNzYWdlLWRpYWxvZ1wiLFxuICAgICAgICBkaWFsb2dUYWc6IFwiaGEtZGlhbG9nLXNob3ctYXVkaW8tbWVzc2FnZVwiLFxuICAgICAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJoYS1kaWFsb2ctc2hvdy1hdWRpby1tZXNzYWdlXCIgKi8gXCIuL2hhLWRpYWxvZy1zaG93LWF1ZGlvLW1lc3NhZ2VcIlxuICAgICAgICAgICksXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5oYXNzQ2hhbmdlZCA9IHRoaXMuaGFzc0NoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhc3MuY29ubmVjdGlvblxuICAgICAgLnN1YnNjcmliZUV2ZW50cyh0aGlzLmhhc3NDaGFuZ2VkLCBcIm1haWxib3hfdXBkYXRlZFwiKVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uICh1bnN1Yikge1xuICAgICAgICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gdW5zdWI7XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB0aGlzLmNvbXB1dGVQbGF0Zm9ybXMoKS50aGVuKFxuICAgICAgZnVuY3Rpb24gKHBsYXRmb3Jtcykge1xuICAgICAgICB0aGlzLnBsYXRmb3JtcyA9IHBsYXRmb3JtcztcbiAgICAgICAgdGhpcy5oYXNzQ2hhbmdlZCgpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViRXZlbnRzKSB0aGlzLl91bnN1YkV2ZW50cygpO1xuICB9XG5cbiAgaGFzc0NoYW5nZWQoKSB7XG4gICAgaWYgKCF0aGlzLl9tZXNzYWdlcykge1xuICAgICAgdGhpcy5fbWVzc2FnZXMgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5nZXRNZXNzYWdlcygpLnRoZW4oXG4gICAgICBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZXMgPSBpdGVtcztcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH1cblxuICBvcGVuTVAzRGlhbG9nKGV2ZW50KSB7XG4gICAgdGhpcy5maXJlKFwic2hvdy1hdWRpby1tZXNzYWdlLWRpYWxvZ1wiLCB7XG4gICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICBtZXNzYWdlOiBldmVudC5tb2RlbC5pdGVtLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgY29uc3QgcGxhdGZvcm0gPSB0aGlzLnBsYXRmb3Jtc1t0aGlzLl9jdXJyZW50UGxhdGZvcm1dO1xuICAgIHJldHVybiB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwiR0VUXCIsIGBtYWlsYm94L21lc3NhZ2VzLyR7cGxhdGZvcm0ubmFtZX1gKVxuICAgICAgLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgICBjb25zdCBwbGF0Zm9ybUl0ZW1zID0gW107XG4gICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZXRpbWUgPSBmb3JtYXREYXRlVGltZShcbiAgICAgICAgICAgIG5ldyBEYXRlKHZhbHVlc1tpXS5pbmZvLm9yaWd0aW1lICogMTAwMCksXG4gICAgICAgICAgICB0aGlzLmhhc3MubGFuZ3VhZ2VcbiAgICAgICAgICApO1xuICAgICAgICAgIHBsYXRmb3JtSXRlbXMucHVzaCh7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IGRhdGV0aW1lLFxuICAgICAgICAgICAgY2FsbGVyOiB2YWx1ZXNbaV0uaW5mby5jYWxsZXJpZCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHZhbHVlc1tpXS50ZXh0LFxuICAgICAgICAgICAgc2hhOiB2YWx1ZXNbaV0uc2hhLFxuICAgICAgICAgICAgZHVyYXRpb246IHZhbHVlc1tpXS5pbmZvLmR1cmF0aW9uLFxuICAgICAgICAgICAgcGxhdGZvcm06IHBsYXRmb3JtLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbGF0Zm9ybUl0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi50aW1lc3RhbXApIC0gbmV3IERhdGUoYS50aW1lc3RhbXApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZVBsYXRmb3JtcygpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNzLmNhbGxBcGkoXCJHRVRcIiwgXCJtYWlsYm94L3BsYXRmb3Jtc1wiKTtcbiAgfVxuXG4gIGhhbmRsZVBsYXRmb3JtU2VsZWN0ZWQoZXYpIHtcbiAgICBjb25zdCBuZXdQbGF0Zm9ybSA9IGV2LmRldGFpbC5zZWxlY3RlZDtcbiAgICBpZiAobmV3UGxhdGZvcm0gIT09IHRoaXMuX2N1cnJlbnRQbGF0Zm9ybSkge1xuICAgICAgdGhpcy5fY3VycmVudFBsYXRmb3JtID0gbmV3UGxhdGZvcm07XG4gICAgICB0aGlzLmhhc3NDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgYXJlVGFic0hpZGRlbihwbGF0Zm9ybXMpIHtcbiAgICByZXR1cm4gIXBsYXRmb3JtcyB8fCBwbGF0Zm9ybXMubGVuZ3RoIDwgMjtcbiAgfVxuXG4gIGdldFBsYXRmb3JtTmFtZShpdGVtKSB7XG4gICAgY29uc3QgZW50aXR5ID0gYG1haWxib3guJHtpdGVtLm5hbWV9YDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbZW50aXR5LnRvTG93ZXJDYXNlKCldO1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWU7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwtbWFpbGJveFwiLCBIYVBhbmVsTWFpbGJveCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa2ZBRUE7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxPQTtBQUNBO0FBbU9BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
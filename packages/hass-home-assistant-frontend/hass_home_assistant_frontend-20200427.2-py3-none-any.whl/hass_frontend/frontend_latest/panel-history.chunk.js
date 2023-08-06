(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-history"],{

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

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
};

/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = stateObj => {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
};

/***/ }),

/***/ "./src/data/entity.ts":
/*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
/*! exports provided: UNAVAILABLE, UNKNOWN, UNAVAILABLE_STATES, ENTITY_COMPONENT_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE", function() { return UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN", function() { return UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE_STATES", function() { return UNAVAILABLE_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_COMPONENT_DOMAINS", function() { return ENTITY_COMPONENT_DOMAINS; });
const UNAVAILABLE = "unavailable";
const UNKNOWN = "unknown";
const UNAVAILABLE_STATES = [UNAVAILABLE, UNKNOWN];
const ENTITY_COMPONENT_DOMAINS = ["air_quality", "alarm_control_panel", "alert", "automation", "binary_sensor", "calendar", "camera", "counter", "cover", "dominos", "fan", "geo_location", "group", "history_graph", "image_processing", "input_boolean", "input_datetime", "input_number", "input_select", "input_text", "light", "lock", "mailbox", "media_player", "person", "plant", "remember_the_milk", "remote", "scene", "script", "sensor", "switch", "timer", "utility_meter", "vacuum", "weather", "wink", "zha", "zwave"];

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

/***/ "./src/panels/history/ha-panel-history.js":
/*!************************************************!*\
  !*** ./src/panels/history/ha-panel-history.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_theme_material_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/theme/material/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../resources/ha-date-picker-style */ "./src/resources/ha-date-picker-style.js");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");









/* eslint-plugin-disable lit */











/*
 * @appliesMixin LocalizeMixin
 */

class HaPanelHistory extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_9__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_8__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding: 0 16px 16px;
        }

        vaadin-date-picker {
          margin-right: 16px;
          max-width: 200px;
        }

        paper-dropdown-menu {
          max-width: 100px;
          margin-right: 16px;
          margin-top: 5px;
          --paper-input-container-label-floating: {
            padding-bottom: 11px;
          }
          --paper-input-suffix: {
            height: 24px;
          }
        }

        :host([rtl]) paper-dropdown-menu {
          text-align: right;
        }

        paper-item {
          cursor: pointer;
          white-space: nowrap;
        }
      </style>

      <ha-state-history-data
        hass="[[hass]]"
        filter-type="[[_filterType]]"
        start-time="[[_computeStartTime(_currentDate)]]"
        end-time="[[endTime]]"
        data="{{stateHistory}}"
        is-loading="{{isLoadingData}}"
      ></ha-state-history-data>
      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.history')]]</div>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div class="flex layout horizontal wrap">
            <vaadin-date-picker
              id="picker"
              value="{{_currentDate}}"
              label="[[localize('ui.panel.history.showing_entries')]]"
              disabled="[[isLoadingData]]"
              required
            ></vaadin-date-picker>

            <paper-dropdown-menu
              label-float
              label="[[localize('ui.panel.history.period')]]"
              disabled="[[isLoadingData]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_periodIndex}}"
              >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 1)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 3)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.week', 'count', 1)]]</paper-item
                >
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[stateHistory]]"
            is-loading-data="[[isLoadingData]]"
            end-time="[[endTime]]"
            no-single
          >
          </state-history-charts>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      stateHistory: {
        type: Object,
        value: null
      },
      _periodIndex: {
        type: Number,
        value: 0
      },
      isLoadingData: {
        type: Boolean,
        value: false
      },
      endTime: {
        type: Object,
        computed: "_computeEndTime(_currentDate, _periodIndex)"
      },
      // ISO8601 formatted date string
      _currentDate: {
        type: String,
        value: function () {
          var value = new Date();
          var today = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
          return today.toISOString().split("T")[0];
        }
      },
      _filterType: {
        type: String,
        value: "date"
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)"
      }
    };
  }

  datepickerFocus() {
    this.datePicker.adjustPosition();
  }

  connectedCallback() {
    super.connectedCallback(); // We are unable to parse date because we use intl api to render date

    this.$.picker.set("i18n.parseDate", null);
    this.$.picker.set("i18n.formatDate", date => Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_11__["formatDate"])(new Date(date.year, date.month, date.day), this.hass.language));
  }

  _computeStartTime(_currentDate) {
    if (!_currentDate) return undefined;

    var parts = _currentDate.split("-");

    parts[1] = parseInt(parts[1]) - 1;
    return new Date(parts[0], parts[1], parts[2]);
  }

  _computeEndTime(_currentDate, periodIndex) {
    var startTime = this._computeStartTime(_currentDate);

    var endTime = new Date(startTime);
    endTime.setDate(startTime.getDate() + this._computeFilterDays(periodIndex));
    return endTime;
  }

  _computeFilterDays(periodIndex) {
    switch (periodIndex) {
      case 1:
        return 3;

      case 2:
        return 7;

      default:
        return 1;
    }
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__["computeRTL"])(hass);
  }

}

customElements.define("ha-panel-history", HaPanelHistory);

/***/ }),

/***/ "./src/resources/ha-date-picker-style.js":
/*!***********************************************!*\
  !*** ./src/resources/ha-date-picker-style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = `
<dom-module id="ha-date-picker-text-field-styles" theme-for="vaadin-text-field">
  <template>
    <style>
      :host {
        padding: 8px 0 11px 0;
        margin: 0;
      }

      [part~="label"] {
        top: 6px;
        font-size: var(--paper-font-subhead_-_font-size);
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      :host([focused]) [part~="label"] {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }

      [part~="input-field"] {
        color: var(--primary-text-color);
        top: 3px;
      }

      [part~="input-field"]::before, [part~="input-field"]::after {
        background-color: var(--paper-input-container-color, var(--secondary-text-color));
        opacity: 1;
      }

      :host([focused]) [part~="input-field"]::before, :host([focused]) [part~="input-field"]::after {
        background-color: var(--paper-input-container-focus-color, var(--primary-color));
      }

      [part~="value"] {
        font-size: var(--paper-font-subhead_-_font-size);
        height: 24px;
        padding-top: 4px;
        padding-bottom: 0;
      }
    </style>
  </template>
</dom-module>
<dom-module id="ha-date-picker-button-styles" theme-for="vaadin-button">
  <template>
    <style>
      :host([part~="today-button"]) [part~="button"]::before {
        content: "⦿";
        color: var(--primary-color);
      }

      [part~="button"] {
        font-family: inherit;
        font-size: var(--paper-font-subhead_-_font-size);
        border: none;
        background: transparent;
        cursor: pointer;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
        color: inherit;
      }

      [part~="button"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module>
<dom-module id="ha-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="vaadin-date-picker-overlay-default-theme">
      [part~="toolbar"] {
        padding: 0.3em;
        background-color: var(--secondary-background-color);
      }

      [part="years"] {
        background-color: var(--secondary-text-color);
        --material-body-text-color: var(--primary-background-color);
      }

      [part="overlay"] {
        background-color: var(--primary-background-color);
        --material-body-text-color: var(--secondary-text-color);
      }

    </style>
  </template>
</dom-module>
<dom-module id="ha-date-picker-month-styles" theme-for="vaadin-month-calendar">
  <template>
    <style include="vaadin-month-calendar-default-theme">
      [part="date"][today] {
        color: var(--primary-color);
      }
    </style>
  </template>
</dom-module>
`;
document.head.appendChild(documentContainer.content);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaGlzdG9yeS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvY2hlY2tfb3B0aW9uc19zdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9oaXN0b3J5L2hhLXBhbmVsLWhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9oYS1kYXRlLXBpY2tlci1zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiBjaGVja1RvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUb0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGNvbnN0IHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9IGNoZWNrVG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCk7XG5leHBvcnQgY29uc3QgdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKTtcbmV4cG9ydCBjb25zdCB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9IGNoZWNrVG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcbmltcG9ydCB7IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zIH0gZnJvbSBcIi4vY2hlY2tfb3B0aW9uc19zdXBwb3J0XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlVGltZSA9IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+XG4gICAgICBmZWNoYS5mb3JtYXQoXG4gICAgICAgIGRhdGVPYmosXG4gICAgICAgIGAke2ZlY2hhLm1hc2tzLmxvbmdEYXRlfSwgJHtmZWNoYS5tYXNrcy5zaG9ydFRpbWV9YFxuICAgICAgKTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGVUaW1lV2l0aFNlY29uZHMgPSB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9uc1xuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PlxuICAgICAgZmVjaGEuZm9ybWF0KFxuICAgICAgICBkYXRlT2JqLFxuICAgICAgICBgJHtmZWNoYS5tYXNrcy5sb25nRGF0ZX0sICR7ZmVjaGEubWFza3MubWVkaXVtVGltZX1gXG4gICAgICApO1xuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlTmFtZSA9IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsImV4cG9ydCBjb25zdCBVTkFWQUlMQUJMRSA9IFwidW5hdmFpbGFibGVcIjtcbmV4cG9ydCBjb25zdCBVTktOT1dOID0gXCJ1bmtub3duXCI7XG5cbmV4cG9ydCBjb25zdCBVTkFWQUlMQUJMRV9TVEFURVMgPSBbVU5BVkFJTEFCTEUsIFVOS05PV05dO1xuXG5leHBvcnQgY29uc3QgRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TID0gW1xuICBcImFpcl9xdWFsaXR5XCIsXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImFsZXJ0XCIsXG4gIFwiYXV0b21hdGlvblwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJjYWxlbmRhclwiLFxuICBcImNhbWVyYVwiLFxuICBcImNvdW50ZXJcIixcbiAgXCJjb3ZlclwiLFxuICBcImRvbWlub3NcIixcbiAgXCJmYW5cIixcbiAgXCJnZW9fbG9jYXRpb25cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbWFnZV9wcm9jZXNzaW5nXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImlucHV0X2RhdGV0aW1lXCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1haWxib3hcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJwZXJzb25cIixcbiAgXCJwbGFudFwiLFxuICBcInJlbWVtYmVyX3RoZV9taWxrXCIsXG4gIFwicmVtb3RlXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzZW5zb3JcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJ0aW1lclwiLFxuICBcInV0aWxpdHlfbWV0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwid2lua1wiLFxuICBcInpoYVwiLFxuICBcInp3YXZlXCIsXG5dO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlclwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydHNcIjtcbmltcG9ydCBcIi4uLy4uL2RhdGEvaGEtc3RhdGUtaGlzdG9yeS1kYXRhXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtZGF0ZS1waWNrZXItc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxIaXN0b3J5IGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFhZGluLWRhdGUtcGlja2VyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZzoge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDExcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC0tcGFwZXItaW5wdXQtc3VmZml4OiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxoYS1zdGF0ZS1oaXN0b3J5LWRhdGFcbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgZmlsdGVyLXR5cGU9XCJbW19maWx0ZXJUeXBlXV1cIlxuICAgICAgICBzdGFydC10aW1lPVwiW1tfY29tcHV0ZVN0YXJ0VGltZShfY3VycmVudERhdGUpXV1cIlxuICAgICAgICBlbmQtdGltZT1cIltbZW5kVGltZV1dXCJcbiAgICAgICAgZGF0YT1cInt7c3RhdGVIaXN0b3J5fX1cIlxuICAgICAgICBpcy1sb2FkaW5nPVwie3tpc0xvYWRpbmdEYXRhfX1cIlxuICAgICAgPjwvaGEtc3RhdGUtaGlzdG9yeS1kYXRhPlxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgICAgPjwvaGEtbWVudS1idXR0b24+XG4gICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgncGFuZWwuaGlzdG9yeScpXV08L2Rpdj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxheW91dCBob3Jpem9udGFsIHdyYXBcIj5cbiAgICAgICAgICAgIDx2YWFkaW4tZGF0ZS1waWNrZXJcbiAgICAgICAgICAgICAgaWQ9XCJwaWNrZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X2N1cnJlbnREYXRlfX1cIlxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmhpc3Rvcnkuc2hvd2luZ19lbnRyaWVzJyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0xvYWRpbmdEYXRhXV1cIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPjwvdmFhZGluLWRhdGUtcGlja2VyPlxuXG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmhpc3RvcnkucGVyaW9kJyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0xvYWRpbmdEYXRhXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3BlcmlvZEluZGV4fX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi5kYXknLCAnY291bnQnLCAxKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24uZGF5JywgJ2NvdW50JywgMyldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLndlZWsnLCAnY291bnQnLCAxKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnRzXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgaGlzdG9yeS1kYXRhPVwiW1tzdGF0ZUhpc3RvcnldXVwiXG4gICAgICAgICAgICBpcy1sb2FkaW5nLWRhdGE9XCJbW2lzTG9hZGluZ0RhdGFdXVwiXG4gICAgICAgICAgICBlbmQtdGltZT1cIltbZW5kVGltZV1dXCJcbiAgICAgICAgICAgIG5vLXNpbmdsZVxuICAgICAgICAgID5cbiAgICAgICAgICA8L3N0YXRlLWhpc3RvcnktY2hhcnRzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuXG4gICAgICBzdGF0ZUhpc3Rvcnk6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIF9wZXJpb2RJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcblxuICAgICAgaXNMb2FkaW5nRGF0YToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBlbmRUaW1lOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVFbmRUaW1lKF9jdXJyZW50RGF0ZSwgX3BlcmlvZEluZGV4KVwiLFxuICAgICAgfSxcblxuICAgICAgLy8gSVNPODYwMSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAgICAgIF9jdXJyZW50RGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIERhdGUuVVRDKHZhbHVlLmdldEZ1bGxZZWFyKCksIHZhbHVlLmdldE1vbnRoKCksIHZhbHVlLmdldERhdGUoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIF9maWx0ZXJUeXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiZGF0ZVwiLFxuICAgICAgfSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGRhdGVwaWNrZXJGb2N1cygpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIuYWRqdXN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gV2UgYXJlIHVuYWJsZSB0byBwYXJzZSBkYXRlIGJlY2F1c2Ugd2UgdXNlIGludGwgYXBpIHRvIHJlbmRlciBkYXRlXG4gICAgdGhpcy4kLnBpY2tlci5zZXQoXCJpMThuLnBhcnNlRGF0ZVwiLCBudWxsKTtcbiAgICB0aGlzLiQucGlja2VyLnNldChcImkxOG4uZm9ybWF0RGF0ZVwiLCAoZGF0ZSkgPT5cbiAgICAgIGZvcm1hdERhdGUobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksIHRoaXMuaGFzcy5sYW5ndWFnZSlcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTdGFydFRpbWUoX2N1cnJlbnREYXRlKSB7XG4gICAgaWYgKCFfY3VycmVudERhdGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcnRzID0gX2N1cnJlbnREYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBwYXJ0c1sxXSA9IHBhcnNlSW50KHBhcnRzWzFdKSAtIDE7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnRzWzBdLCBwYXJ0c1sxXSwgcGFydHNbMl0pO1xuICB9XG5cbiAgX2NvbXB1dGVFbmRUaW1lKF9jdXJyZW50RGF0ZSwgcGVyaW9kSW5kZXgpIHtcbiAgICB2YXIgc3RhcnRUaW1lID0gdGhpcy5fY29tcHV0ZVN0YXJ0VGltZShfY3VycmVudERhdGUpO1xuICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoc3RhcnRUaW1lKTtcbiAgICBlbmRUaW1lLnNldERhdGUoc3RhcnRUaW1lLmdldERhdGUoKSArIHRoaXMuX2NvbXB1dGVGaWx0ZXJEYXlzKHBlcmlvZEluZGV4KSk7XG4gICAgcmV0dXJuIGVuZFRpbWU7XG4gIH1cblxuICBfY29tcHV0ZUZpbHRlckRheXMocGVyaW9kSW5kZXgpIHtcbiAgICBzd2l0Y2ggKHBlcmlvZEluZGV4KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gNztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1oaXN0b3J5XCIsIEhhUGFuZWxIaXN0b3J5KTtcbiIsImNvbnN0IGRvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblxuZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYFxuPGRvbS1tb2R1bGUgaWQ9XCJoYS1kYXRlLXBpY2tlci10ZXh0LWZpZWxkLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi10ZXh0LWZpZWxkXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwIDExcHggMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJsYWJlbFwiXSB7XG4gICAgICAgIHRvcDogNnB4O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgW3BhcnR+PVwibGFiZWxcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHRvcDogM3B4O1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJpbnB1dC1maWVsZFwiXTo6YmVmb3JlLCBbcGFydH49XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgW3BhcnR+PVwiaW5wdXQtZmllbGRcIl06OmJlZm9yZSwgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwidmFsdWVcIl0ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItYnV0dG9uLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1idXR0b25cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0KFtwYXJ0fj1cInRvZGF5LWJ1dHRvblwiXSkgW3BhcnR+PVwiYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIuKmv1wiO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImJ1dHRvblwiXSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCA0OHB4KTtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJidXR0b25cIl06Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLW92ZXJsYXktc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXlcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktZGVmYXVsdC10aGVtZVwiPlxuICAgICAgW3BhcnR+PVwidG9vbGJhclwiXSB7XG4gICAgICAgIHBhZGRpbmc6IDAuM2VtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAtLW1hdGVyaWFsLWJvZHktdGV4dC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItbW9udGgtc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLW1vbnRoLWNhbGVuZGFyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cInZhYWRpbi1tb250aC1jYWxlbmRhci1kZWZhdWx0LXRoZW1lXCI+XG4gICAgICBbcGFydD1cImRhdGVcIl1bdG9kYXldIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGRvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFhQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUF6Q0E7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdMQTtBQUNBO0FBOExBOzs7Ozs7Ozs7OztBQ3ZOQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1HQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
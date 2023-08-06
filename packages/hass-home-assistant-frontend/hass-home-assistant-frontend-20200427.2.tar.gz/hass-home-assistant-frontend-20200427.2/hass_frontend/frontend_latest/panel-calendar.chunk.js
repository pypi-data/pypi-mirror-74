(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-calendar"],{

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

/***/ "./src/panels/calendar/ha-big-calendar.js":
/*!************************************************!*\
  !*** ./src/panels/calendar/ha-big-calendar.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");

/* eslint-plugin-disable lit */


 // eslint-disable-next-line import/no-duplicates,import/no-extraneous-dependencies


 // eslint-disable-next-line import/no-duplicates,import/no-extraneous-dependencies




react_big_calendar__WEBPACK_IMPORTED_MODULE_4__["default"].setLocalizer(react_big_calendar__WEBPACK_IMPORTED_MODULE_4__["default"].momentLocalizer(moment__WEBPACK_IMPORTED_MODULE_2___default.a));
const DEFAULT_VIEW = "month";

class HaBigCalendar extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <link
        rel="stylesheet"
        href="/static/panels/calendar/react-big-calendar.css"
      />
      <style>
        div#root {
          height: 100%;
          width: 100%;
        }
      </style>
      <div id="root"></div>
    `;
  }

  static get properties() {
    return {
      events: {
        type: Array,
        observer: "_update"
      }
    };
  }

  _update(events) {
    const allViews = react_big_calendar__WEBPACK_IMPORTED_MODULE_4__["default"].Views.values;
    const BCElement = react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      events: events,
      views: allViews,
      popup: true,
      onNavigate: (date, viewName) => this.fire("navigate", {
        date,
        viewName
      }),
      onView: viewName => this.fire("view-changed", {
        viewName
      }),
      eventPropGetter: this._setEventStyle,
      defaultView: DEFAULT_VIEW,
      defaultDate: new Date()
    });
    Object(react__WEBPACK_IMPORTED_MODULE_3__["render"])(BCElement, this.$.root);
  }

  _setEventStyle(event) {
    // https://stackoverflow.com/questions/34587067/change-color-of-react-big-calendar-events
    const newStyle = {};

    if (event.color) {
      newStyle.backgroundColor = event.color;
    }

    return {
      style: newStyle
    };
  }

}

customElements.define("ha-big-calendar", HaBigCalendar);

/***/ }),

/***/ "./src/panels/calendar/ha-panel-calendar.js":
/*!**************************************************!*\
  !*** ./src/panels/calendar/ha-panel-calendar.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-big-calendar/lib/utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js");
/* harmony import */ var react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_big_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ha-big-calendar */ "./src/panels/calendar/ha-big-calendar.js");







/* eslint-plugin-disable lit */









const DEFAULT_VIEW = "month";
/*
 * @appliesMixin LocalizeMixin
 */

class HaPanelCalendar extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_12__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding: 16px;
          @apply --layout-horizontal;
        }

        ha-big-calendar {
          min-height: 500px;
          min-width: 100%;
        }

        #calendars {
          padding-right: 16px;
          width: 15%;
          min-width: 170px;
        }

        paper-item {
          cursor: pointer;
        }

        div.all_calendars {
          ￼height: 20px;
          ￼text-align: center;
        }

        .iron-selected {
          background-color: #e5e5e5;
          font-weight: normal;
        }

        :host([narrow]) .content {
          flex-direction: column;
        }
        :host([narrow]) #calendars {
          margin-bottom: 24px;
          width: 100%;
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.calendar')]]</div>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div id="calendars" class="layout vertical wrap">
            <ha-card header="Calendars">
              <paper-listbox
                id="calendar_list"
                multi
                on-selected-items-changed="_fetchData"
                selected-values="{{selectedCalendars}}"
                attr-for-selected="item-name"
              >
                <template is="dom-repeat" items="[[calendars]]">
                  <paper-item item-name="[[item.entity_id]]">
                    <span
                      class="calendar_color"
                      style$="background-color: [[item.color]]"
                    ></span>
                    <span class="calendar_color_spacer"></span> [[item.name]]
                  </paper-item>
                </template>
              </paper-listbox>
            </ha-card>
          </div>
          <div class="flex layout horizontal wrap">
            <ha-big-calendar
              default-date="[[currentDate]]"
              default-view="[[currentView]]"
              on-navigate="_handleNavigate"
              on-view="_handleViewChanged"
              events="[[events]]"
            >
            </ha-big-calendar>
          </div>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      currentView: {
        type: String,
        value: DEFAULT_VIEW
      },
      currentDate: {
        type: Object,
        value: new Date()
      },
      events: {
        type: Array,
        value: []
      },
      calendars: {
        type: Array,
        value: []
      },
      selectedCalendars: {
        type: Array,
        value: []
      },
      narrow: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this._fetchCalendars();
  }

  _fetchCalendars() {
    this.hass.callApi("get", "calendars").then(result => {
      this.calendars = result;
      this.selectedCalendars = result.map(cal => cal.entity_id);
    });
  }

  _fetchData() {
    const start = react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9___default.a.firstVisibleDay(this.currentDate).toISOString();
    const end = react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9___default.a.lastVisibleDay(this.currentDate).toISOString();
    const params = encodeURI(`?start=${start}&end=${end}`);
    const calls = this.selectedCalendars.map(cal => this.hass.callApi("get", `calendars/${cal}${params}`));
    Promise.all(calls).then(results => {
      const tmpEvents = [];
      results.forEach(res => {
        res.forEach(ev => {
          ev.start = new Date(ev.start);

          if (ev.end) {
            ev.end = new Date(ev.end);
          } else {
            ev.end = null;
          }

          tmpEvents.push(ev);
        });
      });
      this.events = tmpEvents;
    });
  }

  _getDateRange() {
    let startDate;
    let endDate;

    if (this.currentView === "day") {
      startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("day");
      endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("day");
    } else if (this.currentView === "week") {
      startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("isoWeek");
      endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).endOf("isoWeek");
    } else if (this.currentView === "month") {
      startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("month").subtract(7, "days");
      endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).endOf("month").add(7, "days");
    } else if (this.currentView === "agenda") {
      startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("day");
      endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).endOf("day").add(1, "month");
    }

    return [startDate.toISOString(), endDate.toISOString()];
  }

  _handleViewChanged(ev) {
    // Calendar view changed
    this.currentView = ev.detail.viewName;

    this._fetchData();
  }

  _handleNavigate(ev) {
    // Calendar date range changed
    this.currentDate = ev.detail.date;
    this.currentView = ev.detail.viewName;

    this._fetchData();
  }

}

customElements.define("ha-panel-calendar", HaPanelCalendar);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY2FsZW5kYXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY2FsZW5kYXIvaGEtYmlnLWNhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY2FsZW5kYXIvaGEtcGFuZWwtY2FsZW5kYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1kdXBsaWNhdGVzLGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJpZ0NhbGVuZGFyIGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXJcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZHVwbGljYXRlcyxpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5CaWdDYWxlbmRhci5zZXRMb2NhbGl6ZXIoQmlnQ2FsZW5kYXIubW9tZW50TG9jYWxpemVyKG1vbWVudCkpO1xuXG5jb25zdCBERUZBVUxUX1ZJRVcgPSBcIm1vbnRoXCI7XG5cbmNsYXNzIEhhQmlnQ2FsZW5kYXIgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCIvc3RhdGljL3BhbmVscy9jYWxlbmRhci9yZWFjdC1iaWctY2FsZW5kYXIuY3NzXCJcbiAgICAgIC8+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIGRpdiNyb290IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50czoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3VwZGF0ZVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX3VwZGF0ZShldmVudHMpIHtcbiAgICBjb25zdCBhbGxWaWV3cyA9IEJpZ0NhbGVuZGFyLlZpZXdzLnZhbHVlcztcblxuICAgIGNvbnN0IEJDRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmlnQ2FsZW5kYXIsIHtcbiAgICAgIGV2ZW50czogZXZlbnRzLFxuICAgICAgdmlld3M6IGFsbFZpZXdzLFxuICAgICAgcG9wdXA6IHRydWUsXG4gICAgICBvbk5hdmlnYXRlOiAoZGF0ZSwgdmlld05hbWUpID0+IHRoaXMuZmlyZShcIm5hdmlnYXRlXCIsIHsgZGF0ZSwgdmlld05hbWUgfSksXG4gICAgICBvblZpZXc6ICh2aWV3TmFtZSkgPT4gdGhpcy5maXJlKFwidmlldy1jaGFuZ2VkXCIsIHsgdmlld05hbWUgfSksXG4gICAgICBldmVudFByb3BHZXR0ZXI6IHRoaXMuX3NldEV2ZW50U3R5bGUsXG4gICAgICBkZWZhdWx0VmlldzogREVGQVVMVF9WSUVXLFxuICAgICAgZGVmYXVsdERhdGU6IG5ldyBEYXRlKCksXG4gICAgfSk7XG4gICAgcmVuZGVyKEJDRWxlbWVudCwgdGhpcy4kLnJvb3QpO1xuICB9XG5cbiAgX3NldEV2ZW50U3R5bGUoZXZlbnQpIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNDU4NzA2Ny9jaGFuZ2UtY29sb3Itb2YtcmVhY3QtYmlnLWNhbGVuZGFyLWV2ZW50c1xuICAgIGNvbnN0IG5ld1N0eWxlID0ge307XG4gICAgaWYgKGV2ZW50LmNvbG9yKSB7XG4gICAgICBuZXdTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBldmVudC5jb2xvcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgc3R5bGU6IG5ld1N0eWxlIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtYmlnLWNhbGVuZGFyXCIsIEhhQmlnQ2FsZW5kYXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IGRhdGVzIGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXIvbGliL3V0aWxzL2RhdGVzXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi9oYS1iaWctY2FsZW5kYXJcIjtcblxuY29uc3QgREVGQVVMVF9WSUVXID0gXCJtb250aFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxDYWxlbmRhciBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtYmlnLWNhbGVuZGFyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAjY2FsZW5kYXJzIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5hbGxfY2FsZW5kYXJzIHtcbiAgICAgICAgICDvv7xoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAg77+8dGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlyb24tc2VsZWN0ZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtuYXJyb3ddKSAuY29udGVudCB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbbmFycm93XSkgI2NhbGVuZGFycyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgICAgPjwvaGEtbWVudS1idXR0b24+XG4gICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgncGFuZWwuY2FsZW5kYXInKV1dPC9kaXY+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY2FsZW5kYXJzXCIgY2xhc3M9XCJsYXlvdXQgdmVydGljYWwgd3JhcFwiPlxuICAgICAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiQ2FsZW5kYXJzXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgaWQ9XCJjYWxlbmRhcl9saXN0XCJcbiAgICAgICAgICAgICAgICBtdWx0aVxuICAgICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWl0ZW1zLWNoYW5nZWQ9XCJfZmV0Y2hEYXRhXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC12YWx1ZXM9XCJ7e3NlbGVjdGVkQ2FsZW5kYXJzfX1cIlxuICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbY2FsZW5kYXJzXV1cIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT1cIltbaXRlbS5lbnRpdHlfaWRdXVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXJfY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlJD1cImJhY2tncm91bmQtY29sb3I6IFtbaXRlbS5jb2xvcl1dXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYWxlbmRhcl9jb2xvcl9zcGFjZXJcIj48L3NwYW4+IFtbaXRlbS5uYW1lXV1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGF5b3V0IGhvcml6b250YWwgd3JhcFwiPlxuICAgICAgICAgICAgPGhhLWJpZy1jYWxlbmRhclxuICAgICAgICAgICAgICBkZWZhdWx0LWRhdGU9XCJbW2N1cnJlbnREYXRlXV1cIlxuICAgICAgICAgICAgICBkZWZhdWx0LXZpZXc9XCJbW2N1cnJlbnRWaWV3XV1cIlxuICAgICAgICAgICAgICBvbi1uYXZpZ2F0ZT1cIl9oYW5kbGVOYXZpZ2F0ZVwiXG4gICAgICAgICAgICAgIG9uLXZpZXc9XCJfaGFuZGxlVmlld0NoYW5nZWRcIlxuICAgICAgICAgICAgICBldmVudHM9XCJbW2V2ZW50c11dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvaGEtYmlnLWNhbGVuZGFyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBjdXJyZW50Vmlldzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBERUZBVUxUX1ZJRVcsXG4gICAgICB9LFxuXG4gICAgICBjdXJyZW50RGF0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcblxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogW10sXG4gICAgICB9LFxuXG4gICAgICBjYWxlbmRhcnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkQ2FsZW5kYXJzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogW10sXG4gICAgICB9LFxuXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9mZXRjaENhbGVuZGFycygpO1xuICB9XG5cbiAgX2ZldGNoQ2FsZW5kYXJzKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsQXBpKFwiZ2V0XCIsIFwiY2FsZW5kYXJzXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5jYWxlbmRhcnMgPSByZXN1bHQ7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2FsZW5kYXJzID0gcmVzdWx0Lm1hcCgoY2FsKSA9PiBjYWwuZW50aXR5X2lkKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9mZXRjaERhdGEoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBkYXRlcy5maXJzdFZpc2libGVEYXkodGhpcy5jdXJyZW50RGF0ZSkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBlbmQgPSBkYXRlcy5sYXN0VmlzaWJsZURheSh0aGlzLmN1cnJlbnREYXRlKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IHBhcmFtcyA9IGVuY29kZVVSSShgP3N0YXJ0PSR7c3RhcnR9JmVuZD0ke2VuZH1gKTtcbiAgICBjb25zdCBjYWxscyA9IHRoaXMuc2VsZWN0ZWRDYWxlbmRhcnMubWFwKChjYWwpID0+XG4gICAgICB0aGlzLmhhc3MuY2FsbEFwaShcImdldFwiLCBgY2FsZW5kYXJzLyR7Y2FsfSR7cGFyYW1zfWApXG4gICAgKTtcbiAgICBQcm9taXNlLmFsbChjYWxscykudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgY29uc3QgdG1wRXZlbnRzID0gW107XG5cbiAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgICAgIHJlcy5mb3JFYWNoKChldikgPT4ge1xuICAgICAgICAgIGV2LnN0YXJ0ID0gbmV3IERhdGUoZXYuc3RhcnQpO1xuICAgICAgICAgIGlmIChldi5lbmQpIHtcbiAgICAgICAgICAgIGV2LmVuZCA9IG5ldyBEYXRlKGV2LmVuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2LmVuZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRtcEV2ZW50cy5wdXNoKGV2KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXZlbnRzID0gdG1wRXZlbnRzO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldERhdGVSYW5nZSgpIHtcbiAgICBsZXQgc3RhcnREYXRlO1xuICAgIGxldCBlbmREYXRlO1xuICAgIGlmICh0aGlzLmN1cnJlbnRWaWV3ID09PSBcImRheVwiKSB7XG4gICAgICBzdGFydERhdGUgPSBtb21lbnQodGhpcy5jdXJyZW50RGF0ZSkuc3RhcnRPZihcImRheVwiKTtcbiAgICAgIGVuZERhdGUgPSBtb21lbnQodGhpcy5jdXJyZW50RGF0ZSkuc3RhcnRPZihcImRheVwiKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09IFwid2Vla1wiKSB7XG4gICAgICBzdGFydERhdGUgPSBtb21lbnQodGhpcy5jdXJyZW50RGF0ZSkuc3RhcnRPZihcImlzb1dlZWtcIik7XG4gICAgICBlbmREYXRlID0gbW9tZW50KHRoaXMuY3VycmVudERhdGUpLmVuZE9mKFwiaXNvV2Vla1wiKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09IFwibW9udGhcIikge1xuICAgICAgc3RhcnREYXRlID0gbW9tZW50KHRoaXMuY3VycmVudERhdGUpLnN0YXJ0T2YoXCJtb250aFwiKS5zdWJ0cmFjdCg3LCBcImRheXNcIik7XG4gICAgICBlbmREYXRlID0gbW9tZW50KHRoaXMuY3VycmVudERhdGUpLmVuZE9mKFwibW9udGhcIikuYWRkKDcsIFwiZGF5c1wiKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09IFwiYWdlbmRhXCIpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKS5zdGFydE9mKFwiZGF5XCIpO1xuICAgICAgZW5kRGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKS5lbmRPZihcImRheVwiKS5hZGQoMSwgXCJtb250aFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFtzdGFydERhdGUudG9JU09TdHJpbmcoKSwgZW5kRGF0ZS50b0lTT1N0cmluZygpXTtcbiAgfVxuXG4gIF9oYW5kbGVWaWV3Q2hhbmdlZChldikge1xuICAgIC8vIENhbGVuZGFyIHZpZXcgY2hhbmdlZFxuICAgIHRoaXMuY3VycmVudFZpZXcgPSBldi5kZXRhaWwudmlld05hbWU7XG4gICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gIH1cblxuICBfaGFuZGxlTmF2aWdhdGUoZXYpIHtcbiAgICAvLyBDYWxlbmRhciBkYXRlIHJhbmdlIGNoYW5nZWRcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gZXYuZGV0YWlsLmRhdGU7XG4gICAgdGhpcy5jdXJyZW50VmlldyA9IGV2LmRldGFpbC52aWV3TmFtZTtcbiAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1jYWxlbmRhclwiLCBIYVBhbmVsQ2FsZW5kYXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWxEQTtBQUNBO0FBbURBOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQTVCQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFuTUE7QUFDQTtBQW9NQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-config-script"],{

/***/ "./src/components/ha-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");

/**
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */

const PaperSliderClass = customElements.get("paper-slider");

class HaPaperSlider extends PaperSliderClass {
  static get template() {
    const tpl = document.createElement("template");
    tpl.innerHTML = PaperSliderClass.template.innerHTML;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .disabled.ring > .slider-knob > .slider-knob-inner {
        background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
        border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }

      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        }
    `;
    tpl.content.appendChild(styleEl);
    return tpl;
  }

}

customElements.define("ha-paper-slider", HaPaperSlider);

/***/ }),

/***/ "./src/components/paper-time-input.js":
/*!********************************************!*\
  !*** ./src/components/paper-time-input.js ***!
  \********************************************/
/*! exports provided: PaperTimeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperTimeInput", function() { return PaperTimeInput; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
Adapted from paper-time-input from
https://github.com/ryanburns23/paper-time-input
MIT Licensed. Copyright (c) 2017 Ryan Burns

`<paper-time-input>` Polymer element to accept a time with paper-input & paper-dropdown-menu
Inspired by the time input in google forms

### Styling

`<paper-time-input>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-time-input-dropdown-ripple-color` | dropdown ripple color | `--primary-color`
`--paper-time-input-cotnainer` | Mixin applied to the inputs | `{}`
`--paper-time-dropdown-input-cotnainer` | Mixin applied to the dropdown input | `{}`
*/





/* eslint-plugin-disable lit */


class PaperTimeInput extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(
              --paper-time-input-dropdown-ripple-color,
              var(--primary-color)
            );
          }
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          }
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          }
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
          color: var(
            --paper-input-container-color,
            var(--secondary-text-color)
          );
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">
        <!-- Hour Input -->
        <paper-input
          id="hour"
          type="number"
          value="{{hour}}"
          label="[[hourLabel]]"
          on-change="_shouldFormatHour"
          on-focus="_onFocus"
          required
          prevent-invalid-input
          auto-validate="[[autoValidate]]"
          maxlength="2"
          max="[[_computeHourMax(format)]]"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input
          id="min"
          type="number"
          value="{{min}}"
          label="[[minLabel]]"
          on-change="_formatMin"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span hidden$="[[!enableSecond]]" suffix slot="suffix">:</span>
        </paper-input>

        <!-- Sec Input -->
        <paper-input
          id="sec"
          type="number"
          value="{{sec}}"
          label="[[secLabel]]"
          on-change="_formatSec"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
          hidden$="[[!enableSecond]]"
        >
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu
          id="dropdown"
          required=""
          hidden$="[[_equal(format, 24)]]"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <paper-listbox
            attr-for-selected="name"
            selected="{{amPm}}"
            slot="dropdown-content"
          >
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
  }

  static get properties() {
    return {
      /**
       * Label for the input
       */
      label: {
        type: String,
        value: "Time"
      },

      /**
       * auto validate time inputs
       */
      autoValidate: {
        type: Boolean,
        value: true
      },

      /**
       * hides the label
       */
      hideLabel: {
        type: Boolean,
        value: false
      },

      /**
       * float the input labels
       */
      floatInputLabels: {
        type: Boolean,
        value: false
      },

      /**
       * always float the input labels
       */
      alwaysFloatInputLabels: {
        type: Boolean,
        value: false
      },

      /**
       * 12 or 24 hr format
       */
      format: {
        type: Number,
        value: 12
      },

      /**
       * disables the inputs
       */
      disabled: {
        type: Boolean,
        value: false
      },

      /**
       * hour
       */
      hour: {
        type: String,
        notify: true
      },

      /**
       * minute
       */
      min: {
        type: String,
        notify: true
      },

      /**
       * second
       */
      sec: {
        type: String,
        notify: true
      },

      /**
       * Suffix for the hour input
       */
      hourLabel: {
        type: String,
        value: ""
      },

      /**
       * Suffix for the min input
       */
      minLabel: {
        type: String,
        value: ":"
      },

      /**
       * Suffix for the sec input
       */
      secLabel: {
        type: String,
        value: ""
      },

      /**
       * show the sec field
       */
      enableSecond: {
        type: Boolean,
        value: false
      },

      /**
       * limit hours input
       */
      noHoursLimit: {
        type: Boolean,
        value: false
      },

      /**
       * AM or PM
       */
      amPm: {
        type: String,
        notify: true,
        value: "AM"
      },

      /**
       * Formatted time string
       */
      value: {
        type: String,
        notify: true,
        readOnly: true,
        computed: "_computeTime(min, hour, sec, amPm)"
      }
    };
  }
  /**
   * Validate the inputs
   * @return {boolean}
   */


  validate() {
    var valid = true; // Validate hour & min fields

    if (!this.$.hour.validate() | !this.$.min.validate()) {
      valid = false;
    } // Validate second field


    if (this.enableSecond && !this.$.sec.validate()) {
      valid = false;
    } // Validate AM PM if 12 hour time


    if (this.format === 12 && !this.$.dropdown.validate()) {
      valid = false;
    }

    return valid;
  }
  /**
   * Create time string
   */


  _computeTime(min, hour, sec, amPm) {
    let str;

    if (hour || min || sec && this.enableSecond) {
      hour = hour || "00";
      min = min || "00";
      sec = sec || "00";
      str = hour + ":" + min; // add sec field

      if (this.enableSecond && sec) {
        str = str + ":" + sec;
      } // No ampm on 24 hr time


      if (this.format === 12) {
        str = str + " " + amPm;
      }
    }

    return str;
  }

  _onFocus(ev) {
    ev.target.inputElement.inputElement.select();
  }
  /**
   * Format sec
   */


  _formatSec() {
    if (this.sec.toString().length === 1) {
      this.sec = this.sec.toString().padStart(2, "0");
    }
  }
  /**
   * Format min
   */


  _formatMin() {
    if (this.min.toString().length === 1) {
      this.min = this.min.toString().padStart(2, "0");
    }
  }
  /**
   * Format hour
   */


  _shouldFormatHour() {
    if (this.format === 24 && this.hour.toString().length === 1) {
      this.hour = this.hour.toString().padStart(2, "0");
    }
  }
  /**
   * 24 hour format has a max hr of 23
   */


  _computeHourMax(format) {
    if (this.noHoursLimit) {
      return null;
    }

    if (format === 12) {
      return format;
    }

    return 23;
  }

  _equal(n1, n2) {
    return n1 === n2;
  }

}
customElements.define("paper-time-input", PaperTimeInput);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93fmhhLW1mYS1tb2R1bGUtc2V0dXAtZmxvd35tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLWNvbmZpZy1zY3JpcHQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFwZXItdGltZS1pbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXIvcGFwZXItc2xpZGVyXCI7XG5cbi8qKlxuICogQHBvbHltZXJcbiAqIEBjdXN0b21FbGVtZW50XG4gKiBAYXBwbGllc01peGluIHBhcGVyLXNsaWRlclxuICovXG5jb25zdCBQYXBlclNsaWRlckNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItc2xpZGVyXCIpO1xuXG5jbGFzcyBIYVBhcGVyU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRwbC5pbm5lckhUTUwgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmlubmVySFRNTDtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYFxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogIHZhcigtLWhhLXBhcGVyLXNsaWRlci1waW4tZm9udC1zaXplLCAxMHB4KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgLmRpc2FibGVkLnJpbmcgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXItZGlzYWJsZWQta25vYi1jb2xvciwgdmFyKC0tcGFwZXItZ3JleS00MDApKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGFwZXItc2xpZGVyLWRpc2FibGVkLWtub2ItY29sb3IsIHZhcigtLXBhcGVyLWdyZXktNDAwKSk7XG4gICAgICB9XG5cbiAgICAgIC5waW4gPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcblxuICAgICAgICBib3R0b206IGNhbGMoMTVweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDIuMmVtO1xuICAgICAgICBoZWlnaHQ6IDIuMmVtO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmJlZm9yZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoN3B4LCAtN3B4KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoN3B4LCAtN3B4KTtcbiAgICAgIH1cblxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IHVuc2V0O1xuICAgICAgICBmb250LXNpemU6IHVuc2V0O1xuXG4gICAgICAgIGJvdHRvbTogY2FsYygxNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEuMWVtO1xuICAgICAgICB3aWR0aDogMi4yZW07XG4gICAgICAgIGhlaWdodDogMi4xZW07XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpcj1cInJ0bFwiXSkgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgYDtcbiAgICB0cGwuY29udGVudC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgICByZXR1cm4gdHBsO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1zbGlkZXJcIiwgSGFQYXBlclNsaWRlcik7XG4iLCIvKipcbkFkYXB0ZWQgZnJvbSBwYXBlci10aW1lLWlucHV0IGZyb21cbmh0dHBzOi8vZ2l0aHViLmNvbS9yeWFuYnVybnMyMy9wYXBlci10aW1lLWlucHV0XG5NSVQgTGljZW5zZWQuIENvcHlyaWdodCAoYykgMjAxNyBSeWFuIEJ1cm5zXG5cbmA8cGFwZXItdGltZS1pbnB1dD5gIFBvbHltZXIgZWxlbWVudCB0byBhY2NlcHQgYSB0aW1lIHdpdGggcGFwZXItaW5wdXQgJiBwYXBlci1kcm9wZG93bi1tZW51XG5JbnNwaXJlZCBieSB0aGUgdGltZSBpbnB1dCBpbiBnb29nbGUgZm9ybXNcblxuIyMjIFN0eWxpbmdcblxuYDxwYXBlci10aW1lLWlucHV0PmAgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci10aW1lLWlucHV0LWRyb3Bkb3duLXJpcHBsZS1jb2xvcmAgfCBkcm9wZG93biByaXBwbGUgY29sb3IgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItdGltZS1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXRzIHwgYHt9YFxuYC0tcGFwZXItdGltZS1kcm9wZG93bi1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZHJvcGRvd24gaW5wdXQgfCBge31gXG4qL1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBQYXBlclRpbWVJbnB1dCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgICAvKiBEYW1uIHlvdSBmaXJlZm94XG4gICAgICAgICAgICAgKiBOZWVkZWQgdG8gaGlkZSBzcGluIG51bSBpbiBmaXJlZm94XG4gICAgICAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3OTA5MzUvY2FuLWktaGlkZS10aGUtaHRtbDUtbnVtYmVyLWlucHV0LXMtc3Bpbi1ib3hcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI6IHtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZV8tXy13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAvKiBGb3JjZSByaXBwbGUgdG8gdXNlIHRoZSB3aG9sZSBjb250YWluZXIgKi9cbiAgICAgICAgICAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlOiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgICAtLXBhcGVyLXRpbWUtaW5wdXQtZHJvcGRvd24tcmlwcGxlLWNvbG9yLFxuICAgICAgICAgICAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcbiAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYnV0dG9uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWRyb3Bkb3duLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lOiB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM6IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsXG4gICAgICAgICAgICB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtaW5wdXQtd3JhcCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LW5vLXdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8bGFiZWwgaGlkZGVuJD1cIltbaGlkZUxhYmVsXV1cIj5bW2xhYmVsXV08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbWUtaW5wdXQtd3JhcFwiPlxuICAgICAgICA8IS0tIEhvdXIgSW5wdXQgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwiaG91clwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9XCJ7e2hvdXJ9fVwiXG4gICAgICAgICAgbGFiZWw9XCJbW2hvdXJMYWJlbF1dXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJfc2hvdWxkRm9ybWF0SG91clwiXG4gICAgICAgICAgb24tZm9jdXM9XCJfb25Gb2N1c1wiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBwcmV2ZW50LWludmFsaWQtaW5wdXRcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1thdXRvVmFsaWRhdGVdXVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMlwiXG4gICAgICAgICAgbWF4PVwiW1tfY29tcHV0ZUhvdXJNYXgoZm9ybWF0KV1dXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdCQ9XCJbWyFmbG9hdElucHV0TGFiZWxzXV1cIlxuICAgICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbCQ9XCJbW2Fsd2F5c0Zsb2F0SW5wdXRMYWJlbHNdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPjo8L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPCEtLSBNaW4gSW5wdXQgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwibWluXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT1cInt7bWlufX1cIlxuICAgICAgICAgIGxhYmVsPVwiW1ttaW5MYWJlbF1dXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJfZm9ybWF0TWluXCJcbiAgICAgICAgICBvbi1mb2N1cz1cIl9vbkZvY3VzXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW2F1dG9WYWxpZGF0ZV1dXCJcbiAgICAgICAgICBwcmV2ZW50LWludmFsaWQtaW5wdXRcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyXCJcbiAgICAgICAgICBtYXg9XCI1OVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXQkPVwiW1shZmxvYXRJbnB1dExhYmVsc11dXCJcbiAgICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWwkPVwiW1thbHdheXNGbG9hdElucHV0TGFiZWxzXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGhpZGRlbiQ9XCJbWyFlbmFibGVTZWNvbmRdXVwiIHN1ZmZpeCBzbG90PVwic3VmZml4XCI+Ojwvc3Bhbj5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8IS0tIFNlYyBJbnB1dCAtLT5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgaWQ9XCJzZWNcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPVwie3tzZWN9fVwiXG4gICAgICAgICAgbGFiZWw9XCJbW3NlY0xhYmVsXV1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cIl9mb3JtYXRTZWNcIlxuICAgICAgICAgIG9uLWZvY3VzPVwiX29uRm9jdXNcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICAgIHByZXZlbnQtaW52YWxpZC1pbnB1dFxuICAgICAgICAgIG1heGxlbmd0aD1cIjJcIlxuICAgICAgICAgIG1heD1cIjU5XCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdCQ9XCJbWyFmbG9hdElucHV0TGFiZWxzXV1cIlxuICAgICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbCQ9XCJbW2Fsd2F5c0Zsb2F0SW5wdXRMYWJlbHNdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbWyFlbmFibGVTZWNvbmRdXVwiXG4gICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8IS0tIERyb3Bkb3duIE1lbnUgLS0+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgaWQ9XCJkcm9wZG93blwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW19lcXVhbChmb3JtYXQsIDI0KV1dXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwibmFtZVwiXG4gICAgICAgICAgICBzZWxlY3RlZD1cInt7YW1QbX19XCJcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItaXRlbSBuYW1lPVwiQU1cIj5BTTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtIG5hbWU9XCJQTVwiPlBNPC9wYXBlci1pdGVtPlxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBMYWJlbCBmb3IgdGhlIGlucHV0XG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiVGltZVwiLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogYXV0byB2YWxpZGF0ZSB0aW1lIGlucHV0c1xuICAgICAgICovXG4gICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBoaWRlcyB0aGUgbGFiZWxcbiAgICAgICAqL1xuICAgICAgaGlkZUxhYmVsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGZsb2F0IHRoZSBpbnB1dCBsYWJlbHNcbiAgICAgICAqL1xuICAgICAgZmxvYXRJbnB1dExhYmVsczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBhbHdheXMgZmxvYXQgdGhlIGlucHV0IGxhYmVsc1xuICAgICAgICovXG4gICAgICBhbHdheXNGbG9hdElucHV0TGFiZWxzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIDEyIG9yIDI0IGhyIGZvcm1hdFxuICAgICAgICovXG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTIsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBkaXNhYmxlcyB0aGUgaW5wdXRzXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGhvdXJcbiAgICAgICAqL1xuICAgICAgaG91cjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIG1pbnV0ZVxuICAgICAgICovXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBzZWNvbmRcbiAgICAgICAqL1xuICAgICAgc2VjOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogU3VmZml4IGZvciB0aGUgaG91ciBpbnB1dFxuICAgICAgICovXG4gICAgICBob3VyTGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFN1ZmZpeCBmb3IgdGhlIG1pbiBpbnB1dFxuICAgICAgICovXG4gICAgICBtaW5MYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIjpcIixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFN1ZmZpeCBmb3IgdGhlIHNlYyBpbnB1dFxuICAgICAgICovXG4gICAgICBzZWNMYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogc2hvdyB0aGUgc2VjIGZpZWxkXG4gICAgICAgKi9cbiAgICAgIGVuYWJsZVNlY29uZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBsaW1pdCBob3VycyBpbnB1dFxuICAgICAgICovXG4gICAgICBub0hvdXJzTGltaXQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogQU0gb3IgUE1cbiAgICAgICAqL1xuICAgICAgYW1QbToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IFwiQU1cIixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEZvcm1hdHRlZCB0aW1lIHN0cmluZ1xuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlVGltZShtaW4sIGhvdXIsIHNlYywgYW1QbSlcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGUgaW5wdXRzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICB2YWxpZGF0ZSgpIHtcbiAgICB2YXIgdmFsaWQgPSB0cnVlO1xuICAgIC8vIFZhbGlkYXRlIGhvdXIgJiBtaW4gZmllbGRzXG4gICAgaWYgKCF0aGlzLiQuaG91ci52YWxpZGF0ZSgpIHwgIXRoaXMuJC5taW4udmFsaWRhdGUoKSkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gVmFsaWRhdGUgc2Vjb25kIGZpZWxkXG4gICAgaWYgKHRoaXMuZW5hYmxlU2Vjb25kICYmICF0aGlzLiQuc2VjLnZhbGlkYXRlKCkpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZhbGlkYXRlIEFNIFBNIGlmIDEyIGhvdXIgdGltZVxuICAgIGlmICh0aGlzLmZvcm1hdCA9PT0gMTIgJiYgIXRoaXMuJC5kcm9wZG93bi52YWxpZGF0ZSgpKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRpbWUgc3RyaW5nXG4gICAqL1xuICBfY29tcHV0ZVRpbWUobWluLCBob3VyLCBzZWMsIGFtUG0pIHtcbiAgICBsZXQgc3RyO1xuICAgIGlmIChob3VyIHx8IG1pbiB8fCAoc2VjICYmIHRoaXMuZW5hYmxlU2Vjb25kKSkge1xuICAgICAgaG91ciA9IGhvdXIgfHwgXCIwMFwiO1xuICAgICAgbWluID0gbWluIHx8IFwiMDBcIjtcbiAgICAgIHNlYyA9IHNlYyB8fCBcIjAwXCI7XG4gICAgICBzdHIgPSBob3VyICsgXCI6XCIgKyBtaW47XG4gICAgICAvLyBhZGQgc2VjIGZpZWxkXG4gICAgICBpZiAodGhpcy5lbmFibGVTZWNvbmQgJiYgc2VjKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIFwiOlwiICsgc2VjO1xuICAgICAgfVxuICAgICAgLy8gTm8gYW1wbSBvbiAyNCBociB0aW1lXG4gICAgICBpZiAodGhpcy5mb3JtYXQgPT09IDEyKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIFwiIFwiICsgYW1QbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgX29uRm9jdXMoZXYpIHtcbiAgICBldi50YXJnZXQuaW5wdXRFbGVtZW50LmlucHV0RWxlbWVudC5zZWxlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgc2VjXG4gICAqL1xuICBfZm9ybWF0U2VjKCkge1xuICAgIGlmICh0aGlzLnNlYy50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5zZWMgPSB0aGlzLnNlYy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IG1pblxuICAgKi9cbiAgX2Zvcm1hdE1pbigpIHtcbiAgICBpZiAodGhpcy5taW4udG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMubWluID0gdGhpcy5taW4udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBob3VyXG4gICAqL1xuICBfc2hvdWxkRm9ybWF0SG91cigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0ICYmIHRoaXMuaG91ci50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5ob3VyID0gdGhpcy5ob3VyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAyNCBob3VyIGZvcm1hdCBoYXMgYSBtYXggaHIgb2YgMjNcbiAgICovXG4gIF9jb21wdXRlSG91ck1heChmb3JtYXQpIHtcbiAgICBpZiAodGhpcy5ub0hvdXJzTGltaXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSAxMikge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG4gICAgcmV0dXJuIDIzO1xuICB9XG5cbiAgX2VxdWFsKG4xLCBuMikge1xuICAgIHJldHVybiBuMSA9PT0gbjI7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwicGFwZXItdGltZS1pbnB1dFwiLCBQYXBlclRpbWVJbnB1dCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQWpFQTtBQUNBO0FBaUVBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWtLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBckhBO0FBNEhBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhZQTtBQWtZQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
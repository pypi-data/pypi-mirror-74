(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[52],{

/***/ "./src/components/ha-date-input.ts":
/*!*****************************************!*\
  !*** ./src/components/ha-date-input.ts ***!
  \*****************************************/
/*! exports provided: HaDateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDateInput", function() { return HaDateInput; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



let HaDateInput = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-date-input")], function (_initialize, _LitElement) {
  class HaDateInput extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaDateInput,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "year",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "month",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "day",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean
      })],
      key: "disabled",

      value() {
        return false;
      }

    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      :host {
        display: block;
        font-family: var(--paper-font-common-base_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-common-base_-_-webkit-font-smoothing
        );
      }

      paper-input {
        width: 30px;
        text-align: center;
        --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        --paper-input-container-input_-_-moz-appearance: textfield;
        --paper-input-container-shared-input-style_-_appearance: textfield;
        --paper-input-container-input-webkit-spinner_-_-webkit-appearance: none;
        --paper-input-container-input-webkit-spinner_-_margin: 0;
        --paper-input-container-input-webkit-spinner_-_display: none;
      }

      paper-input#year {
        width: 50px;
      }

      .date-input-wrap {
        display: flex;
        flex-direction: row;
      }
    `;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div class="date-input-wrap">
        <paper-input
          id="year"
          type="number"
          .value=${this.year}
          @change=${this._formatYear}
          maxlength="4"
          max="9999"
          min="0"
          .disabled=${this.disabled}
          no-label-float
        >
          <span suffix="" slot="suffix">-</span>
        </paper-input>
        <paper-input
          id="month"
          type="number"
          .value=${this.month}
          @change=${this._formatMonth}
          maxlength="2"
          max="12"
          min="1"
          .disabled=${this.disabled}
          no-label-float
        >
          <span suffix="" slot="suffix">-</span>
        </paper-input>
        <paper-input
          id="day"
          type="number"
          .value=${this.day}
          @change=${this._formatDay}
          maxlength="2"
          max="31"
          min="1"
          .disabled=${this.disabled}
          no-label-float
        >
        </paper-input>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_formatYear",
      value: function _formatYear() {
        const yearElement = this.shadowRoot.getElementById("year");
        this.year = yearElement.value;
      }
    }, {
      kind: "method",
      key: "_formatMonth",
      value: function _formatMonth() {
        const monthElement = this.shadowRoot.getElementById("month");
        this.month = ("0" + monthElement.value).slice(-2);
      }
    }, {
      kind: "method",
      key: "_formatDay",
      value: function _formatDay() {
        const dayElement = this.shadowRoot.getElementById("day");
        this.day = ("0" + dayElement.value).slice(-2);
      }
    }, {
      kind: "get",
      key: "value",
      value: function value() {
        return `${this.year}-${this.month}-${this.day}`;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

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

/***/ }),

/***/ "./src/data/input_datetime.ts":
/*!************************************!*\
  !*** ./src/data/input_datetime.ts ***!
  \************************************/
/*! exports provided: setInputDateTimeValue, fetchInputDateTime, createInputDateTime, updateInputDateTime, deleteInputDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputDateTimeValue", function() { return setInputDateTimeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInputDateTime", function() { return fetchInputDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputDateTime", function() { return createInputDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputDateTime", function() { return updateInputDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInputDateTime", function() { return deleteInputDateTime; });
const setInputDateTimeValue = (hass, entityId, time = undefined, date = undefined) => {
  const param = {
    entity_id: entityId,
    time,
    date
  };
  hass.callService(entityId.split(".", 1)[0], "set_datetime", param);
};
const fetchInputDateTime = hass => hass.callWS({
  type: "input_datetime/list"
});
const createInputDateTime = (hass, values) => hass.callWS(Object.assign({
  type: "input_datetime/create"
}, values));
const updateInputDateTime = (hass, id, updates) => hass.callWS(Object.assign({
  type: "input_datetime/update",
  input_datetime_id: id
}, updates));
const deleteInputDateTime = (hass, id) => hass.callWS({
  type: "input_datetime/delete",
  input_datetime_id: id
});

/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-datetime-entity-row.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-datetime-entity-row.ts ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_date_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-date-input */ "./src/components/ha-date-input.ts");
/* harmony import */ var _components_paper_time_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/paper-time-input */ "./src/components/paper-time-input.js");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _data_input_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/input_datetime */ "./src/data/input_datetime.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









let HuiInputDatetimeEntityRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-input-datetime-entity-row")], function (_initialize, _LitElement) {
  class HuiInputDatetimeEntityRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiInputDatetimeEntityRow,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config) {
          throw new Error("Configuration error");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const stateObj = this.hass.states[this._config.entity];

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${stateObj.attributes.has_date ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-date-input
                .disabled=${_data_entity__WEBPACK_IMPORTED_MODULE_3__["UNAVAILABLE_STATES"].includes(stateObj.state)}
                .year=${stateObj.attributes.year}
                .month=${("0" + stateObj.attributes.month).slice(-2)}
                .day=${("0" + stateObj.attributes.day).slice(-2)}
                @change=${this._selectedValueChanged}
                @click=${this._stopEventPropagation}
              ></ha-date-input>
              ${stateObj.attributes.has_time ? "," : ""}
            ` : ``}
        ${stateObj.attributes.has_time ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-time-input
                .disabled=${_data_entity__WEBPACK_IMPORTED_MODULE_3__["UNAVAILABLE_STATES"].includes(stateObj.state)}
                .hour=${stateObj.state === "unknown" ? "" : ("0" + stateObj.attributes.hour).slice(-2)}
                .min=${stateObj.state === "unknown" ? "" : ("0" + stateObj.attributes.minute).slice(-2)}
                .amPm=${false}
                @change=${this._selectedValueChanged}
                @click=${this._stopEventPropagation}
                hide-label
                format="24"
              ></paper-time-input>
            ` : ``}
      </hui-generic-entity-row>
    `;
      }
    }, {
      kind: "method",
      key: "_stopEventPropagation",
      value: function _stopEventPropagation(ev) {
        ev.stopPropagation();
      }
    }, {
      kind: "get",
      key: "_timeInputEl",
      value: function _timeInputEl() {
        return this.shadowRoot.querySelector("paper-time-input");
      }
    }, {
      kind: "get",
      key: "_dateInputEl",
      value: function _dateInputEl() {
        return this.shadowRoot.querySelector("ha-date-input");
      }
    }, {
      kind: "method",
      key: "_selectedValueChanged",
      value: function _selectedValueChanged(ev) {
        const stateObj = this.hass.states[this._config.entity];
        const time = this._timeInputEl !== null ? this._timeInputEl.value.trim() + ":00" : undefined;
        const date = this._dateInputEl !== null ? this._dateInputEl.value : undefined;

        if (time !== stateObj.state) {
          Object(_data_input_datetime__WEBPACK_IMPORTED_MODULE_4__["setInputDateTimeValue"])(this.hass, stateObj.entity_id, time, date);
        }

        ev.target.blur();
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1kYXRlLWlucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcGVyLXRpbWUtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW5wdXRfZGF0ZXRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lbnRpdHktcm93cy9odWktaW5wdXQtZGF0ZXRpbWUtZW50aXR5LXJvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHR5cGUgeyBQYXBlcklucHV0RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWRhdGUtaW5wdXRcIilcbmV4cG9ydCBjbGFzcyBIYURhdGVJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgeWVhcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbW9udGg/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGRheT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1jb21tb24tYmFzZV8tX2ZvbnQtZmFtaWx5KTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogdmFyKFxuICAgICAgICAgIC0tcGFwZXItZm9udC1jb21tb24tYmFzZV8tXy13ZWJraXQtZm9udC1zbW9vdGhpbmdcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGVfLV8td2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXRfLV8tbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlXy1fYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtc3Bpbm5lcl8tXy13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXJfLV9tYXJnaW46IDA7XG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyXy1fZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaW5wdXQjeWVhciB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICAuZGF0ZS1pbnB1dC13cmFwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1pbnB1dC13cmFwXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwieWVhclwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy55ZWFyfVxuICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9mb3JtYXRZZWFyfVxuICAgICAgICAgIG1heGxlbmd0aD1cIjRcIlxuICAgICAgICAgIG1heD1cIjk5OTlcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuZGlzYWJsZWR9XG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXRcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIHN1ZmZpeD1cIlwiIHNsb3Q9XCJzdWZmaXhcIj4tPC9zcGFuPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBpZD1cIm1vbnRoXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLm1vbnRofVxuICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9mb3JtYXRNb250aH1cbiAgICAgICAgICBtYXhsZW5ndGg9XCIyXCJcbiAgICAgICAgICBtYXg9XCIxMlwiXG4gICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cbiAgICAgICAgICBuby1sYWJlbC1mbG9hdFxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPi08L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwiZGF5XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLmRheX1cbiAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fZm9ybWF0RGF5fVxuICAgICAgICAgIG1heGxlbmd0aD1cIjJcIlxuICAgICAgICAgIG1heD1cIjMxXCJcbiAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0XG4gICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9mb3JtYXRZZWFyKCkge1xuICAgIGNvbnN0IHllYXJFbGVtZW50ID0gdGhpcy5zaGFkb3dSb290IS5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwieWVhclwiXG4gICAgKSBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICB0aGlzLnllYXIgPSB5ZWFyRWxlbWVudC52YWx1ZSE7XG4gIH1cblxuICBwcml2YXRlIF9mb3JtYXRNb250aCgpIHtcbiAgICBjb25zdCBtb250aEVsZW1lbnQgPSB0aGlzLnNoYWRvd1Jvb3QhLmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJtb250aFwiXG4gICAgKSBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICB0aGlzLm1vbnRoID0gKFwiMFwiICsgbW9udGhFbGVtZW50LnZhbHVlISkuc2xpY2UoLTIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZm9ybWF0RGF5KCkge1xuICAgIGNvbnN0IGRheUVsZW1lbnQgPSB0aGlzLnNoYWRvd1Jvb3QhLmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJkYXlcIlxuICAgICkgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5kYXkgPSAoXCIwXCIgKyBkYXlFbGVtZW50LnZhbHVlISkuc2xpY2UoLTIpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiBgJHt0aGlzLnllYXJ9LSR7dGhpcy5tb250aH0tJHt0aGlzLmRheX1gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1kYXRlLWlucHV0XCI6IEhhRGF0ZUlucHV0O1xuICB9XG59XG4iLCIvKipcbkFkYXB0ZWQgZnJvbSBwYXBlci10aW1lLWlucHV0IGZyb21cbmh0dHBzOi8vZ2l0aHViLmNvbS9yeWFuYnVybnMyMy9wYXBlci10aW1lLWlucHV0XG5NSVQgTGljZW5zZWQuIENvcHlyaWdodCAoYykgMjAxNyBSeWFuIEJ1cm5zXG5cbmA8cGFwZXItdGltZS1pbnB1dD5gIFBvbHltZXIgZWxlbWVudCB0byBhY2NlcHQgYSB0aW1lIHdpdGggcGFwZXItaW5wdXQgJiBwYXBlci1kcm9wZG93bi1tZW51XG5JbnNwaXJlZCBieSB0aGUgdGltZSBpbnB1dCBpbiBnb29nbGUgZm9ybXNcblxuIyMjIFN0eWxpbmdcblxuYDxwYXBlci10aW1lLWlucHV0PmAgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci10aW1lLWlucHV0LWRyb3Bkb3duLXJpcHBsZS1jb2xvcmAgfCBkcm9wZG93biByaXBwbGUgY29sb3IgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItdGltZS1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXRzIHwgYHt9YFxuYC0tcGFwZXItdGltZS1kcm9wZG93bi1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZHJvcGRvd24gaW5wdXQgfCBge31gXG4qL1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBQYXBlclRpbWVJbnB1dCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgICAvKiBEYW1uIHlvdSBmaXJlZm94XG4gICAgICAgICAgICAgKiBOZWVkZWQgdG8gaGlkZSBzcGluIG51bSBpbiBmaXJlZm94XG4gICAgICAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3OTA5MzUvY2FuLWktaGlkZS10aGUtaHRtbDUtbnVtYmVyLWlucHV0LXMtc3Bpbi1ib3hcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI6IHtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZV8tXy13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAvKiBGb3JjZSByaXBwbGUgdG8gdXNlIHRoZSB3aG9sZSBjb250YWluZXIgKi9cbiAgICAgICAgICAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlOiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgICAtLXBhcGVyLXRpbWUtaW5wdXQtZHJvcGRvd24tcmlwcGxlLWNvbG9yLFxuICAgICAgICAgICAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcbiAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYnV0dG9uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWRyb3Bkb3duLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lOiB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM6IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsXG4gICAgICAgICAgICB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtaW5wdXQtd3JhcCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LW5vLXdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8bGFiZWwgaGlkZGVuJD1cIltbaGlkZUxhYmVsXV1cIj5bW2xhYmVsXV08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbWUtaW5wdXQtd3JhcFwiPlxuICAgICAgICA8IS0tIEhvdXIgSW5wdXQgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwiaG91clwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9XCJ7e2hvdXJ9fVwiXG4gICAgICAgICAgbGFiZWw9XCJbW2hvdXJMYWJlbF1dXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJfc2hvdWxkRm9ybWF0SG91clwiXG4gICAgICAgICAgb24tZm9jdXM9XCJfb25Gb2N1c1wiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBwcmV2ZW50LWludmFsaWQtaW5wdXRcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1thdXRvVmFsaWRhdGVdXVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMlwiXG4gICAgICAgICAgbWF4PVwiW1tfY29tcHV0ZUhvdXJNYXgoZm9ybWF0KV1dXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdCQ9XCJbWyFmbG9hdElucHV0TGFiZWxzXV1cIlxuICAgICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbCQ9XCJbW2Fsd2F5c0Zsb2F0SW5wdXRMYWJlbHNdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPjo8L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPCEtLSBNaW4gSW5wdXQgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwibWluXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT1cInt7bWlufX1cIlxuICAgICAgICAgIGxhYmVsPVwiW1ttaW5MYWJlbF1dXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJfZm9ybWF0TWluXCJcbiAgICAgICAgICBvbi1mb2N1cz1cIl9vbkZvY3VzXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW2F1dG9WYWxpZGF0ZV1dXCJcbiAgICAgICAgICBwcmV2ZW50LWludmFsaWQtaW5wdXRcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyXCJcbiAgICAgICAgICBtYXg9XCI1OVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXQkPVwiW1shZmxvYXRJbnB1dExhYmVsc11dXCJcbiAgICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWwkPVwiW1thbHdheXNGbG9hdElucHV0TGFiZWxzXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGhpZGRlbiQ9XCJbWyFlbmFibGVTZWNvbmRdXVwiIHN1ZmZpeCBzbG90PVwic3VmZml4XCI+Ojwvc3Bhbj5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8IS0tIFNlYyBJbnB1dCAtLT5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgaWQ9XCJzZWNcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPVwie3tzZWN9fVwiXG4gICAgICAgICAgbGFiZWw9XCJbW3NlY0xhYmVsXV1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cIl9mb3JtYXRTZWNcIlxuICAgICAgICAgIG9uLWZvY3VzPVwiX29uRm9jdXNcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICAgIHByZXZlbnQtaW52YWxpZC1pbnB1dFxuICAgICAgICAgIG1heGxlbmd0aD1cIjJcIlxuICAgICAgICAgIG1heD1cIjU5XCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdCQ9XCJbWyFmbG9hdElucHV0TGFiZWxzXV1cIlxuICAgICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbCQ9XCJbW2Fsd2F5c0Zsb2F0SW5wdXRMYWJlbHNdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbWyFlbmFibGVTZWNvbmRdXVwiXG4gICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8IS0tIERyb3Bkb3duIE1lbnUgLS0+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgaWQ9XCJkcm9wZG93blwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW19lcXVhbChmb3JtYXQsIDI0KV1dXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwibmFtZVwiXG4gICAgICAgICAgICBzZWxlY3RlZD1cInt7YW1QbX19XCJcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItaXRlbSBuYW1lPVwiQU1cIj5BTTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtIG5hbWU9XCJQTVwiPlBNPC9wYXBlci1pdGVtPlxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBMYWJlbCBmb3IgdGhlIGlucHV0XG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiVGltZVwiLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogYXV0byB2YWxpZGF0ZSB0aW1lIGlucHV0c1xuICAgICAgICovXG4gICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBoaWRlcyB0aGUgbGFiZWxcbiAgICAgICAqL1xuICAgICAgaGlkZUxhYmVsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGZsb2F0IHRoZSBpbnB1dCBsYWJlbHNcbiAgICAgICAqL1xuICAgICAgZmxvYXRJbnB1dExhYmVsczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBhbHdheXMgZmxvYXQgdGhlIGlucHV0IGxhYmVsc1xuICAgICAgICovXG4gICAgICBhbHdheXNGbG9hdElucHV0TGFiZWxzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIDEyIG9yIDI0IGhyIGZvcm1hdFxuICAgICAgICovXG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTIsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBkaXNhYmxlcyB0aGUgaW5wdXRzXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGhvdXJcbiAgICAgICAqL1xuICAgICAgaG91cjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIG1pbnV0ZVxuICAgICAgICovXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBzZWNvbmRcbiAgICAgICAqL1xuICAgICAgc2VjOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogU3VmZml4IGZvciB0aGUgaG91ciBpbnB1dFxuICAgICAgICovXG4gICAgICBob3VyTGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFN1ZmZpeCBmb3IgdGhlIG1pbiBpbnB1dFxuICAgICAgICovXG4gICAgICBtaW5MYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIjpcIixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFN1ZmZpeCBmb3IgdGhlIHNlYyBpbnB1dFxuICAgICAgICovXG4gICAgICBzZWNMYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogc2hvdyB0aGUgc2VjIGZpZWxkXG4gICAgICAgKi9cbiAgICAgIGVuYWJsZVNlY29uZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBsaW1pdCBob3VycyBpbnB1dFxuICAgICAgICovXG4gICAgICBub0hvdXJzTGltaXQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogQU0gb3IgUE1cbiAgICAgICAqL1xuICAgICAgYW1QbToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IFwiQU1cIixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEZvcm1hdHRlZCB0aW1lIHN0cmluZ1xuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlVGltZShtaW4sIGhvdXIsIHNlYywgYW1QbSlcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGUgaW5wdXRzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICB2YWxpZGF0ZSgpIHtcbiAgICB2YXIgdmFsaWQgPSB0cnVlO1xuICAgIC8vIFZhbGlkYXRlIGhvdXIgJiBtaW4gZmllbGRzXG4gICAgaWYgKCF0aGlzLiQuaG91ci52YWxpZGF0ZSgpIHwgIXRoaXMuJC5taW4udmFsaWRhdGUoKSkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gVmFsaWRhdGUgc2Vjb25kIGZpZWxkXG4gICAgaWYgKHRoaXMuZW5hYmxlU2Vjb25kICYmICF0aGlzLiQuc2VjLnZhbGlkYXRlKCkpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZhbGlkYXRlIEFNIFBNIGlmIDEyIGhvdXIgdGltZVxuICAgIGlmICh0aGlzLmZvcm1hdCA9PT0gMTIgJiYgIXRoaXMuJC5kcm9wZG93bi52YWxpZGF0ZSgpKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRpbWUgc3RyaW5nXG4gICAqL1xuICBfY29tcHV0ZVRpbWUobWluLCBob3VyLCBzZWMsIGFtUG0pIHtcbiAgICBsZXQgc3RyO1xuICAgIGlmIChob3VyIHx8IG1pbiB8fCAoc2VjICYmIHRoaXMuZW5hYmxlU2Vjb25kKSkge1xuICAgICAgaG91ciA9IGhvdXIgfHwgXCIwMFwiO1xuICAgICAgbWluID0gbWluIHx8IFwiMDBcIjtcbiAgICAgIHNlYyA9IHNlYyB8fCBcIjAwXCI7XG4gICAgICBzdHIgPSBob3VyICsgXCI6XCIgKyBtaW47XG4gICAgICAvLyBhZGQgc2VjIGZpZWxkXG4gICAgICBpZiAodGhpcy5lbmFibGVTZWNvbmQgJiYgc2VjKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIFwiOlwiICsgc2VjO1xuICAgICAgfVxuICAgICAgLy8gTm8gYW1wbSBvbiAyNCBociB0aW1lXG4gICAgICBpZiAodGhpcy5mb3JtYXQgPT09IDEyKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIFwiIFwiICsgYW1QbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgX29uRm9jdXMoZXYpIHtcbiAgICBldi50YXJnZXQuaW5wdXRFbGVtZW50LmlucHV0RWxlbWVudC5zZWxlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgc2VjXG4gICAqL1xuICBfZm9ybWF0U2VjKCkge1xuICAgIGlmICh0aGlzLnNlYy50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5zZWMgPSB0aGlzLnNlYy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IG1pblxuICAgKi9cbiAgX2Zvcm1hdE1pbigpIHtcbiAgICBpZiAodGhpcy5taW4udG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMubWluID0gdGhpcy5taW4udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBob3VyXG4gICAqL1xuICBfc2hvdWxkRm9ybWF0SG91cigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0ICYmIHRoaXMuaG91ci50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5ob3VyID0gdGhpcy5ob3VyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAyNCBob3VyIGZvcm1hdCBoYXMgYSBtYXggaHIgb2YgMjNcbiAgICovXG4gIF9jb21wdXRlSG91ck1heChmb3JtYXQpIHtcbiAgICBpZiAodGhpcy5ub0hvdXJzTGltaXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSAxMikge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG4gICAgcmV0dXJuIDIzO1xuICB9XG5cbiAgX2VxdWFsKG4xLCBuMikge1xuICAgIHJldHVybiBuMSA9PT0gbjI7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwicGFwZXItdGltZS1pbnB1dFwiLCBQYXBlclRpbWVJbnB1dCk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXREYXRlVGltZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaW5pdGlhbD86IHN0cmluZztcbiAgaGFzX3RpbWU6IGJvb2xlYW47XG4gIGhhc19kYXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0RGF0ZVRpbWVNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIGluaXRpYWw6IHN0cmluZztcbiAgaGFzX3RpbWU6IGJvb2xlYW47XG4gIGhhc19kYXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0SW5wdXREYXRlVGltZVZhbHVlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB0aW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsXG4gIGRhdGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuKSA9PiB7XG4gIGNvbnN0IHBhcmFtID0geyBlbnRpdHlfaWQ6IGVudGl0eUlkLCB0aW1lLCBkYXRlIH07XG4gIGhhc3MuY2FsbFNlcnZpY2UoZW50aXR5SWQuc3BsaXQoXCIuXCIsIDEpWzBdLCBcInNldF9kYXRldGltZVwiLCBwYXJhbSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbnB1dERhdGVUaW1lID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPElucHV0RGF0ZVRpbWVbXT4oeyB0eXBlOiBcImlucHV0X2RhdGV0aW1lL2xpc3RcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0RGF0ZVRpbWUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogSW5wdXREYXRlVGltZU11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8SW5wdXREYXRlVGltZT4oe1xuICAgIHR5cGU6IFwiaW5wdXRfZGF0ZXRpbWUvY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUlucHV0RGF0ZVRpbWUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8SW5wdXREYXRlVGltZU11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPElucHV0RGF0ZVRpbWU+KHtcbiAgICB0eXBlOiBcImlucHV0X2RhdGV0aW1lL3VwZGF0ZVwiLFxuICAgIGlucHV0X2RhdGV0aW1lX2lkOiBpZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUlucHV0RGF0ZVRpbWUgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiaW5wdXRfZGF0ZXRpbWUvZGVsZXRlXCIsXG4gICAgaW5wdXRfZGF0ZXRpbWVfaWQ6IGlkLFxuICB9KTtcbiIsImltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1kYXRlLWlucHV0XCI7XG5pbXBvcnQgdHlwZSB7IEhhRGF0ZUlucHV0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZGF0ZS1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9wYXBlci10aW1lLWlucHV0XCI7XG5pbXBvcnQgdHlwZSB7IFBhcGVyVGltZUlucHV0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcGFwZXItdGltZS1pbnB1dFwiO1xuaW1wb3J0IHsgVU5BVkFJTEFCTEVfU1RBVEVTIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5XCI7XG5pbXBvcnQgeyBzZXRJbnB1dERhdGVUaW1lVmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9pbnB1dF9kYXRldGltZVwiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBoYXNDb25maWdPckVudGl0eUNoYW5nZWQgfSBmcm9tIFwiLi4vY29tbW9uL2hhcy1jaGFuZ2VkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS1nZW5lcmljLWVudGl0eS1yb3dcIjtcbmltcG9ydCB0eXBlIHsgRW50aXR5Q29uZmlnLCBMb3ZlbGFjZVJvdyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWlucHV0LWRhdGV0aW1lLWVudGl0eS1yb3dcIilcbmNsYXNzIEh1aUlucHV0RGF0ZXRpbWVFbnRpdHlSb3cgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VSb3cge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogRW50aXR5Q29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBFbnRpdHlDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlndXJhdGlvbiBlcnJvclwiKTtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eV07XG5cbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGh1aS13YXJuaW5nXG4gICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS53YXJuaW5nLmVudGl0eV9ub3RfZm91bmRcIixcbiAgICAgICAgICAgIFwiZW50aXR5XCIsXG4gICAgICAgICAgICB0aGlzLl9jb25maWcuZW50aXR5XG4gICAgICAgICAgKX08L2h1aS13YXJuaW5nXG4gICAgICAgID5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aHVpLWdlbmVyaWMtZW50aXR5LXJvdyAuaGFzcz0ke3RoaXMuaGFzc30gLmNvbmZpZz0ke3RoaXMuX2NvbmZpZ30+XG4gICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5oYXNfZGF0ZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWRhdGUtaW5wdXRcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHtVTkFWQUlMQUJMRV9TVEFURVMuaW5jbHVkZXMoc3RhdGVPYmouc3RhdGUpfVxuICAgICAgICAgICAgICAgIC55ZWFyPSR7c3RhdGVPYmouYXR0cmlidXRlcy55ZWFyfVxuICAgICAgICAgICAgICAgIC5tb250aD0keyhcIjBcIiArIHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGgpLnNsaWNlKC0yKX1cbiAgICAgICAgICAgICAgICAuZGF5PSR7KFwiMFwiICsgc3RhdGVPYmouYXR0cmlidXRlcy5kYXkpLnNsaWNlKC0yKX1cbiAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fc2VsZWN0ZWRWYWx1ZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc3RvcEV2ZW50UHJvcGFnYXRpb259XG4gICAgICAgICAgICAgID48L2hhLWRhdGUtaW5wdXQ+XG4gICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5oYXNfdGltZSA/IFwiLFwiIDogXCJcIn1cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IGBgfVxuICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWVcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci10aW1lLWlucHV0XG4gICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7VU5BVkFJTEFCTEVfU1RBVEVTLmluY2x1ZGVzKHN0YXRlT2JqLnN0YXRlKX1cbiAgICAgICAgICAgICAgICAuaG91cj0ke3N0YXRlT2JqLnN0YXRlID09PSBcInVua25vd25cIlxuICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICA6IChcIjBcIiArIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaG91cikuc2xpY2UoLTIpfVxuICAgICAgICAgICAgICAgIC5taW49JHtzdGF0ZU9iai5zdGF0ZSA9PT0gXCJ1bmtub3duXCJcbiAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgOiAoXCIwXCIgKyBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbnV0ZSkuc2xpY2UoLTIpfVxuICAgICAgICAgICAgICAgIC5hbVBtPSR7ZmFsc2V9XG4gICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3NlbGVjdGVkVmFsdWVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3N0b3BFdmVudFByb3BhZ2F0aW9ufVxuICAgICAgICAgICAgICAgIGhpZGUtbGFiZWxcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCIyNFwiXG4gICAgICAgICAgICAgID48L3BhcGVyLXRpbWUtaW5wdXQ+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBgYH1cbiAgICAgIDwvaHVpLWdlbmVyaWMtZW50aXR5LXJvdz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RvcEV2ZW50UHJvcGFnYXRpb24oZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdGltZUlucHV0RWwoKTogUGFwZXJUaW1lSW5wdXQge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci10aW1lLWlucHV0XCIpITtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9kYXRlSW5wdXRFbCgpOiBIYURhdGVJbnB1dCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImhhLWRhdGUtaW5wdXRcIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRWYWx1ZUNoYW5nZWQoZXYpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcyEuc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XTtcblxuICAgIGNvbnN0IHRpbWUgPVxuICAgICAgdGhpcy5fdGltZUlucHV0RWwgIT09IG51bGxcbiAgICAgICAgPyB0aGlzLl90aW1lSW5wdXRFbC52YWx1ZS50cmltKCkgKyBcIjowMFwiXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgZGF0ZSA9XG4gICAgICB0aGlzLl9kYXRlSW5wdXRFbCAhPT0gbnVsbCA/IHRoaXMuX2RhdGVJbnB1dEVsLnZhbHVlIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRpbWUgIT09IHN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICBzZXRJbnB1dERhdGVUaW1lVmFsdWUodGhpcy5oYXNzISwgc3RhdGVPYmouZW50aXR5X2lkLCB0aW1lLCBkYXRlKTtcbiAgICB9XG5cbiAgICBldi50YXJnZXQuYmx1cigpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktaW5wdXQtZGF0ZXRpbWUtZW50aXR5LXJvd1wiOiBIdWlJbnB1dERhdGV0aW1lRW50aXR5Um93O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBVUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQVBBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJBO0FBdkNBO0FBQUE7QUFBQTtBQUFBO0FBMENBOzs7OztBQUtBO0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7QUFRQTtBQUNBOzs7O0FBSUE7Ozs7Ozs7O0FBUUE7QUFDQTs7OztBQUlBOzs7OztBQXBDQTtBQTBDQTtBQXBGQTtBQUFBO0FBQUE7QUFBQTtBQXVGQTtBQUdBO0FBQ0E7QUEzRkE7QUFBQTtBQUFBO0FBQUE7QUE4RkE7QUFHQTtBQUNBO0FBbEdBO0FBQUE7QUFBQTtBQUFBO0FBcUdBO0FBR0E7QUFDQTtBQXpHQTtBQUFBO0FBQUE7QUFBQTtBQTRHQTtBQUNBO0FBN0dBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWtLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBckhBO0FBNEhBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhZQTtBQWtZQTs7Ozs7Ozs7Ozs7O0FDellBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUtBO0FBREE7QUFLQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBUUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFWQTtBQWFBOztBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTs7OztBQVpBOztBQWZBO0FBbUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBcEdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
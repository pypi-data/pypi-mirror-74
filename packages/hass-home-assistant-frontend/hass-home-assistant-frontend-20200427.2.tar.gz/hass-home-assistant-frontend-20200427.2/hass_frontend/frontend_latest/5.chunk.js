(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js ***!
  \**************************************************************************/
/*! exports provided: IronA11yAnnouncer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronA11yAnnouncer", function() { return IronA11yAnnouncer; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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



/**
`iron-a11y-announcer` is a singleton element that is intended to add a11y
to features that require on-demand announcement from screen readers. In
order to make use of the announcer, it is best to request its availability
in the announcing element.

Example:

    Polymer({

      is: 'x-chatty',

      attached: function() {
        // This will create the singleton element if it has not
        // been created yet:
        Polymer.IronA11yAnnouncer.requestAvailability();
      }
    });

After the `iron-a11y-announcer` has been made available, elements can
make announces by firing bubbling `iron-announce` events.

Example:

    this.fire('iron-announce', {
      text: 'This is an announcement!'
    }, { bubbles: true });

Note: announcements are only audible if you have a screen reader enabled.

@group Iron Elements
@demo demo/index.html
*/

const IronA11yAnnouncer = Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,
  is: 'iron-a11y-announcer',
  properties: {
    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: {
      type: String,
      value: 'polite'
    },
    _text: {
      type: String,
      value: ''
    }
  },
  created: function () {
    if (!IronA11yAnnouncer.instance) {
      IronA11yAnnouncer.instance = this;
    }

    document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
  },

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */
  announce: function (text) {
    this._text = '';
    this.async(function () {
      this._text = text;
    }, 100);
  },
  _onIronAnnounce: function (event) {
    if (event.detail && event.detail.text) {
      this.announce(event.detail.text);
    }
  }
});
IronA11yAnnouncer.instance = null;

IronA11yAnnouncer.requestAvailability = function () {
  if (!IronA11yAnnouncer.instance) {
    IronA11yAnnouncer.instance = document.createElement('iron-a11y-announcer');
  }

  document.body.appendChild(IronA11yAnnouncer.instance);
};

/***/ }),

/***/ "./node_modules/@polymer/iron-input/iron-input.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-input/iron-input.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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






/**
`<iron-input>` is a wrapper to a native `<input>` element, that adds two-way
binding and prevention of invalid input. To use it, you must distribute a native
`<input>` yourself. You can continue to use the native `input` as you would
normally:

    <iron-input>
      <input>
    </iron-input>

    <iron-input>
      <input type="email" disabled>
    </iron-input>

### Two-way binding

By default you can only get notified of changes to a native `<input>`'s `value`
due to user input:

    <input value="{{myValue::input}}">

This means that if you imperatively set the value (i.e. `someNativeInput.value =
'foo'`), no events will be fired and this change cannot be observed.

`iron-input` adds the `bind-value` property that mirrors the native `input`'s
'`value` property; this property can be used for two-way data binding.
`bind-value` will notify if it is changed either by user input or by script.

    <iron-input bind-value="{{myValue}}">
      <input>
    </iron-input>

Note: this means that if you want to imperatively set the native `input`'s, you
_must_ set `bind-value` instead, so that the wrapper `iron-input` can be
notified.

### Validation

`iron-input` uses the native `input`'s validation. For simplicity, `iron-input`
has a `validate()` method (which internally just checks the distributed
`input`'s validity), which sets an `invalid` attribute that can also be used for
styling.

To validate automatically as you type, you can use the `auto-validate`
attribute.

`iron-input` also fires an `iron-input-validate` event after `validate()` is
called. You can use it to implement a custom validator:

    var CatsOnlyValidator = {
      validate: function(ironInput) {
        var valid = !ironInput.bindValue || ironInput.bindValue === 'cat';
        ironInput.invalid = !valid;
        return valid;
      }
    }
    ironInput.addEventListener('iron-input-validate', function() {
      CatsOnly.validate(input2);
    });

You can also use an element implementing an
[`IronValidatorBehavior`](/element/PolymerElements/iron-validatable-behavior).
This example can also be found in the demo for this element:

    <iron-input validator="cats-only">
      <input>
    </iron-input>

### Preventing invalid input

It may be desirable to only allow users to enter certain characters. You can use
the `allowed-pattern` attribute to accomplish this. This feature is separate
from validation, and `allowed-pattern` does not affect how the input is
validated.

    // Only allow typing digits, but a valid input has exactly 5 digits.
    <iron-input allowed-pattern="[0-9]">
      <input pattern="\d{5}">
    </iron-input>

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,
  is: 'iron-input',
  behaviors: [_polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"]],

  /**
   * Fired whenever `validate()` is called.
   *
   * @event iron-input-validate
   */
  properties: {
    /**
     * Use this property instead of `value` for two-way data binding, or to
     * set a default value for the input. **Do not** use the distributed
     * input's `value` property to set a default value.
     */
    bindValue: {
      type: String,
      value: ''
    },

    /**
     * Computed property that echoes `bindValue` (mostly used for Polymer 1.0
     * backcompatibility, if you were one-way binding to the Polymer 1.0
     * `input is="iron-input"` value attribute).
     */
    value: {
      type: String,
      computed: '_computeValue(bindValue)'
    },

    /**
     * Regex-like list of characters allowed as input; all characters not in the
     * list will be rejected. The recommended format should be a list of allowed
     * characters, for example, `[a-zA-Z0-9.+-!;:]`.
     *
     * This pattern represents the allowed characters for the field; as the user
     * inputs text, each individual character will be checked against the
     * pattern (rather than checking the entire value as a whole). If a
     * character is not a match, it will be rejected.
     *
     * Pasted input will have each character checked individually; if any
     * character doesn't match `allowedPattern`, the entire pasted string will
     * be rejected.
     *
     * Note: if you were using `iron-input` in 1.0, you were also required to
     * set `prevent-invalid-input`. This is no longer needed as of Polymer 2.0,
     * and will be set automatically for you if an `allowedPattern` is provided.
     *
     */
    allowedPattern: {
      type: String
    },

    /**
     * Set to true to auto-validate the input value as you type.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * The native input element.
     */
    _inputElement: Object
  },
  observers: ['_bindValueChanged(bindValue, _inputElement)'],
  listeners: {
    'input': '_onInput',
    'keypress': '_onKeypress'
  },
  created: function () {
    _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yAnnouncer"].requestAvailability();
    this._previousValidInput = '';
    this._patternAlreadyChecked = false;
  },
  attached: function () {
    // If the input is added at a later time, update the internal reference.
    this._observer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(this).observeNodes(function (info) {
      this._initSlottedInput();
    }.bind(this));
  },
  detached: function () {
    if (this._observer) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(this).unobserveNodes(this._observer);
      this._observer = null;
    }
  },

  /**
   * Returns the distributed input element.
   */
  get inputElement() {
    return this._inputElement;
  },

  _initSlottedInput: function () {
    this._inputElement = this.getEffectiveChildren()[0];

    if (this.inputElement && this.inputElement.value) {
      this.bindValue = this.inputElement.value;
    }

    this.fire('iron-input-ready');
  },

  get _patternRegExp() {
    var pattern;

    if (this.allowedPattern) {
      pattern = new RegExp(this.allowedPattern);
    } else {
      switch (this.inputElement.type) {
        case 'number':
          pattern = /[0-9.,e-]/;
          break;
      }
    }

    return pattern;
  },

  /**
   * @suppress {checkTypes}
   */
  _bindValueChanged: function (bindValue, inputElement) {
    // The observer could have run before attached() when we have actually
    // initialized this property.
    if (!inputElement) {
      return;
    }

    if (bindValue === undefined) {
      inputElement.value = null;
    } else if (bindValue !== inputElement.value) {
      this.inputElement.value = bindValue;
    }

    if (this.autoValidate) {
      this.validate();
    } // manually notify because we don't want to notify until after setting value


    this.fire('bind-value-changed', {
      value: bindValue
    });
  },
  _onInput: function () {
    // Need to validate each of the characters pasted if they haven't
    // been validated inside `_onKeypress` already.
    if (this.allowedPattern && !this._patternAlreadyChecked) {
      var valid = this._checkPatternValidity();

      if (!valid) {
        this._announceInvalidCharacter('Invalid string of characters not entered.');

        this.inputElement.value = this._previousValidInput;
      }
    }

    this.bindValue = this._previousValidInput = this.inputElement.value;
    this._patternAlreadyChecked = false;
  },
  _isPrintable: function (event) {
    // What a control/printable character is varies wildly based on the browser.
    // - most control characters (arrows, backspace) do not send a `keypress`
    // event
    //   in Chrome, but the *do* on Firefox
    // - in Firefox, when they do send a `keypress` event, control chars have
    //   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
    // - printable characters always send a keypress event.
    // - in Firefox, printable chars always have a keyCode = 0. In Chrome, the
    // keyCode
    //   always matches the charCode.
    // None of this makes any sense.
    // For these keys, ASCII code == browser keycode.
    var anyNonPrintable = event.keyCode == 8 || // backspace
    event.keyCode == 9 || // tab
    event.keyCode == 13 || // enter
    event.keyCode == 27; // escape
    // For these keys, make sure it's a browser keycode and not an ASCII code.

    var mozNonPrintable = event.keyCode == 19 || // pause
    event.keyCode == 20 || // caps lock
    event.keyCode == 45 || // insert
    event.keyCode == 46 || // delete
    event.keyCode == 144 || // num lock
    event.keyCode == 145 || // scroll lock
    event.keyCode > 32 && event.keyCode < 41 || // page up/down, end, home, arrows
    event.keyCode > 111 && event.keyCode < 124; // fn keys

    return !anyNonPrintable && !(event.charCode == 0 && mozNonPrintable);
  },
  _onKeypress: function (event) {
    if (!this.allowedPattern && this.inputElement.type !== 'number') {
      return;
    }

    var regexp = this._patternRegExp;

    if (!regexp) {
      return;
    } // Handle special keys and backspace


    if (event.metaKey || event.ctrlKey || event.altKey) {
      return;
    } // Check the pattern either here or in `_onInput`, but not in both.


    this._patternAlreadyChecked = true;
    var thisChar = String.fromCharCode(event.charCode);

    if (this._isPrintable(event) && !regexp.test(thisChar)) {
      event.preventDefault();

      this._announceInvalidCharacter('Invalid character ' + thisChar + ' not entered.');
    }
  },
  _checkPatternValidity: function () {
    var regexp = this._patternRegExp;

    if (!regexp) {
      return true;
    }

    for (var i = 0; i < this.inputElement.value.length; i++) {
      if (!regexp.test(this.inputElement.value[i])) {
        return false;
      }
    }

    return true;
  },

  /**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, then any constraints.
   * @return {boolean} True if the value is valid.
   */
  validate: function () {
    if (!this.inputElement) {
      this.invalid = false;
      return true;
    } // Use the nested input's native validity.


    var valid = this.inputElement.checkValidity(); // Only do extra checking if the browser thought this was valid.

    if (valid) {
      // Empty, required input is invalid
      if (this.required && this.bindValue === '') {
        valid = false;
      } else if (this.hasValidator()) {
        valid = _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"].validate.call(this, this.bindValue);
      }
    }

    this.invalid = !valid;
    this.fire('iron-input-validate');
    return valid;
  },
  _announceInvalidCharacter: function (message) {
    this.fire('iron-announce', {
      text: message
    });
  },
  _computeValue: function (bindValue) {
    return bindValue;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-input/paper-input.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/paper-input/paper-input.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_input_iron_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-input/iron-input.js */ "./node_modules/@polymer/iron-input/iron-input.js");
/* harmony import */ var _paper_input_char_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-input-char-counter.js */ "./node_modules/@polymer/paper-input/paper-input-char-counter.js");
/* harmony import */ var _paper_input_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-input-container.js */ "./node_modules/@polymer/paper-input/paper-input-container.js");
/* harmony import */ var _paper_input_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-input-error.js */ "./node_modules/@polymer/paper-input/paper-input-error.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paper-input-behavior.js */ "./node_modules/@polymer/paper-input/paper-input-behavior.js");
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










/**
Material design: [Text
fields](https://www.google.com/design/spec/components/text-fields.html)

`<paper-input>` is a single-line text field with Material Design styling.

    <paper-input label="Input label"></paper-input>

It may include an optional error message or character counter.

    <paper-input error-message="Invalid input!" label="Input
    label"></paper-input> <paper-input char-counter label="Input
    label"></paper-input>

It can also include custom prefix or suffix elements, which are displayed
before or after the text input itself. In order for an element to be
considered as a prefix, it must have the `prefix` attribute (and similarly
for `suffix`).

    <paper-input label="total">
      <div prefix>$</div>
      <paper-icon-button slot="suffix" icon="clear"></paper-icon-button>
    </paper-input>

A `paper-input` can use the native `type=search` or `type=file` features.
However, since we can't control the native styling of the input (search icon,
file button, date placeholder, etc.), in these cases the label will be
automatically floated. The `placeholder` attribute can still be used for
additional informational text.

    <paper-input label="search!" type="search"
        placeholder="search for cats" autosave="test" results="5">
    </paper-input>

See `Polymer.PaperInputBehavior` for more API docs.

### Focus

To focus a paper-input, you can call the native `focus()` method as long as the
paper input has a tab index. Similarly, `blur()` will blur the element.

### Styling

See `Polymer.PaperInputContainer` for a list of custom properties used to
style this element.

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer reveal button (the eyeball) | {}

@group Paper Elements
@element paper-input
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__["Polymer"])({
  is: 'paper-input',
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"]`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,
  behaviors: [_paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_9__["PaperInputBehavior"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronFormElementBehavior"]],
  properties: {
    value: {
      // Required for the correct TypeScript type-generation
      type: String
    }
  },

  /**
   * Returns a reference to the focusable element. Overridden from
   * PaperInputBehavior to correctly focus the native input.
   *
   * @return {!HTMLElement}
   */
  get _focusableElement() {
    return this.inputElement._inputElement;
  },

  // Note: This event is only available in the 1.0 version of this element.
  // In 2.0, the functionality of `_onIronInputReady` is done in
  // PaperInputBehavior::attached.
  listeners: {
    'iron-input-ready': '_onIronInputReady'
  },
  _onIronInputReady: function () {
    // Even though this is only used in the next line, save this for
    // backwards compatibility, since the native input had this ID until 2.0.5.
    if (!this.$.nativeInput) {
      this.$.nativeInput = this.$$('input');
    }

    if (this.inputElement && this._typesThatHaveText.indexOf(this.$.nativeInput.type) !== -1) {
      this.alwaysFloatLabel = true;
    } // Only validate when attached if the input already has a value.


    if (!!this.inputElement.bindValue) {
      this.$.container._handleValueAndAutoValidate(this.inputElement);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24taW5wdXQvaXJvbi1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbmBpcm9uLWExMXktYW5ub3VuY2VyYCBpcyBhIHNpbmdsZXRvbiBlbGVtZW50IHRoYXQgaXMgaW50ZW5kZWQgdG8gYWRkIGExMXlcbnRvIGZlYXR1cmVzIHRoYXQgcmVxdWlyZSBvbi1kZW1hbmQgYW5ub3VuY2VtZW50IGZyb20gc2NyZWVuIHJlYWRlcnMuIEluXG5vcmRlciB0byBtYWtlIHVzZSBvZiB0aGUgYW5ub3VuY2VyLCBpdCBpcyBiZXN0IHRvIHJlcXVlc3QgaXRzIGF2YWlsYWJpbGl0eVxuaW4gdGhlIGFubm91bmNpbmcgZWxlbWVudC5cblxuRXhhbXBsZTpcblxuICAgIFBvbHltZXIoe1xuXG4gICAgICBpczogJ3gtY2hhdHR5JyxcblxuICAgICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgY3JlYXRlIHRoZSBzaW5nbGV0b24gZWxlbWVudCBpZiBpdCBoYXMgbm90XG4gICAgICAgIC8vIGJlZW4gY3JlYXRlZCB5ZXQ6XG4gICAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG5BZnRlciB0aGUgYGlyb24tYTExeS1hbm5vdW5jZXJgIGhhcyBiZWVuIG1hZGUgYXZhaWxhYmxlLCBlbGVtZW50cyBjYW5cbm1ha2UgYW5ub3VuY2VzIGJ5IGZpcmluZyBidWJibGluZyBgaXJvbi1hbm5vdW5jZWAgZXZlbnRzLlxuXG5FeGFtcGxlOlxuXG4gICAgdGhpcy5maXJlKCdpcm9uLWFubm91bmNlJywge1xuICAgICAgdGV4dDogJ1RoaXMgaXMgYW4gYW5ub3VuY2VtZW50ISdcbiAgICB9LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG5cbk5vdGU6IGFubm91bmNlbWVudHMgYXJlIG9ubHkgYXVkaWJsZSBpZiB5b3UgaGF2ZSBhIHNjcmVlbiByZWFkZXIgZW5hYmxlZC5cblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cbmV4cG9ydCBjb25zdCBJcm9uQTExeUFubm91bmNlciA9IFBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsMHB4LDBweCwwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBhcmlhLWxpdmUkPVwiW1ttb2RlXV1cIj5bW190ZXh0XV08L2Rpdj5cbmAsXG5cbiAgaXM6ICdpcm9uLWExMXktYW5ub3VuY2VyJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgb2YgbW9kZSBpcyB1c2VkIHRvIHNldCB0aGUgYGFyaWEtbGl2ZWAgYXR0cmlidXRlXG4gICAgICogZm9yIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBhbm5vdW5jZWQuIFZhbGlkIHZhbHVlcyBhcmU6IGBvZmZgLFxuICAgICAqIGBwb2xpdGVgIGFuZCBgYXNzZXJ0aXZlYC5cbiAgICAgKi9cbiAgICBtb2RlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3BvbGl0ZSd9LFxuXG4gICAgX3RleHQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ31cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIUlyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKSB7XG4gICAgICBJcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnaXJvbi1hbm5vdW5jZScsIHRoaXMuX29uSXJvbkFubm91bmNlLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYXVzZSBhIHRleHQgc3RyaW5nIHRvIGJlIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHQgdGhhdCBzaG91bGQgYmUgYW5ub3VuY2VkLlxuICAgKi9cbiAgYW5ub3VuY2U6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB0aGlzLl90ZXh0ID0gJyc7XG4gICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgIH0sIDEwMCk7XG4gIH0sXG5cbiAgX29uSXJvbkFubm91bmNlOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLnRleHQpIHtcbiAgICAgIHRoaXMuYW5ub3VuY2UoZXZlbnQuZGV0YWlsLnRleHQpO1xuICAgIH1cbiAgfVxufSk7XG5cbklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gbnVsbDtcblxuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIUlyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKSB7XG4gICAgSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLWExMXktYW5ub3VuY2VyJyk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKElyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKTtcbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlBbm5vdW5jZXJ9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5qcyc7XG5pbXBvcnQge0lyb25WYWxpZGF0YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbmA8aXJvbi1pbnB1dD5gIGlzIGEgd3JhcHBlciB0byBhIG5hdGl2ZSBgPGlucHV0PmAgZWxlbWVudCwgdGhhdCBhZGRzIHR3by13YXlcbmJpbmRpbmcgYW5kIHByZXZlbnRpb24gb2YgaW52YWxpZCBpbnB1dC4gVG8gdXNlIGl0LCB5b3UgbXVzdCBkaXN0cmlidXRlIGEgbmF0aXZlXG5gPGlucHV0PmAgeW91cnNlbGYuIFlvdSBjYW4gY29udGludWUgdG8gdXNlIHRoZSBuYXRpdmUgYGlucHV0YCBhcyB5b3Ugd291bGRcbm5vcm1hbGx5OlxuXG4gICAgPGlyb24taW5wdXQ+XG4gICAgICA8aW5wdXQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG4gICAgPGlyb24taW5wdXQ+XG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgZGlzYWJsZWQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG4jIyMgVHdvLXdheSBiaW5kaW5nXG5cbkJ5IGRlZmF1bHQgeW91IGNhbiBvbmx5IGdldCBub3RpZmllZCBvZiBjaGFuZ2VzIHRvIGEgbmF0aXZlIGA8aW5wdXQ+YCdzIGB2YWx1ZWBcbmR1ZSB0byB1c2VyIGlucHV0OlxuXG4gICAgPGlucHV0IHZhbHVlPVwie3tteVZhbHVlOjppbnB1dH19XCI+XG5cblRoaXMgbWVhbnMgdGhhdCBpZiB5b3UgaW1wZXJhdGl2ZWx5IHNldCB0aGUgdmFsdWUgKGkuZS4gYHNvbWVOYXRpdmVJbnB1dC52YWx1ZSA9XG4nZm9vJ2ApLCBubyBldmVudHMgd2lsbCBiZSBmaXJlZCBhbmQgdGhpcyBjaGFuZ2UgY2Fubm90IGJlIG9ic2VydmVkLlxuXG5gaXJvbi1pbnB1dGAgYWRkcyB0aGUgYGJpbmQtdmFsdWVgIHByb3BlcnR5IHRoYXQgbWlycm9ycyB0aGUgbmF0aXZlIGBpbnB1dGAnc1xuJ2B2YWx1ZWAgcHJvcGVydHk7IHRoaXMgcHJvcGVydHkgY2FuIGJlIHVzZWQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nLlxuYGJpbmQtdmFsdWVgIHdpbGwgbm90aWZ5IGlmIGl0IGlzIGNoYW5nZWQgZWl0aGVyIGJ5IHVzZXIgaW5wdXQgb3IgYnkgc2NyaXB0LlxuXG4gICAgPGlyb24taW5wdXQgYmluZC12YWx1ZT1cInt7bXlWYWx1ZX19XCI+XG4gICAgICA8aW5wdXQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG5Ob3RlOiB0aGlzIG1lYW5zIHRoYXQgaWYgeW91IHdhbnQgdG8gaW1wZXJhdGl2ZWx5IHNldCB0aGUgbmF0aXZlIGBpbnB1dGAncywgeW91XG5fbXVzdF8gc2V0IGBiaW5kLXZhbHVlYCBpbnN0ZWFkLCBzbyB0aGF0IHRoZSB3cmFwcGVyIGBpcm9uLWlucHV0YCBjYW4gYmVcbm5vdGlmaWVkLlxuXG4jIyMgVmFsaWRhdGlvblxuXG5gaXJvbi1pbnB1dGAgdXNlcyB0aGUgbmF0aXZlIGBpbnB1dGAncyB2YWxpZGF0aW9uLiBGb3Igc2ltcGxpY2l0eSwgYGlyb24taW5wdXRgXG5oYXMgYSBgdmFsaWRhdGUoKWAgbWV0aG9kICh3aGljaCBpbnRlcm5hbGx5IGp1c3QgY2hlY2tzIHRoZSBkaXN0cmlidXRlZFxuYGlucHV0YCdzIHZhbGlkaXR5KSwgd2hpY2ggc2V0cyBhbiBgaW52YWxpZGAgYXR0cmlidXRlIHRoYXQgY2FuIGFsc28gYmUgdXNlZCBmb3JcbnN0eWxpbmcuXG5cblRvIHZhbGlkYXRlIGF1dG9tYXRpY2FsbHkgYXMgeW91IHR5cGUsIHlvdSBjYW4gdXNlIHRoZSBgYXV0by12YWxpZGF0ZWBcbmF0dHJpYnV0ZS5cblxuYGlyb24taW5wdXRgIGFsc28gZmlyZXMgYW4gYGlyb24taW5wdXQtdmFsaWRhdGVgIGV2ZW50IGFmdGVyIGB2YWxpZGF0ZSgpYCBpc1xuY2FsbGVkLiBZb3UgY2FuIHVzZSBpdCB0byBpbXBsZW1lbnQgYSBjdXN0b20gdmFsaWRhdG9yOlxuXG4gICAgdmFyIENhdHNPbmx5VmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKGlyb25JbnB1dCkge1xuICAgICAgICB2YXIgdmFsaWQgPSAhaXJvbklucHV0LmJpbmRWYWx1ZSB8fCBpcm9uSW5wdXQuYmluZFZhbHVlID09PSAnY2F0JztcbiAgICAgICAgaXJvbklucHV0LmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaXJvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24taW5wdXQtdmFsaWRhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIENhdHNPbmx5LnZhbGlkYXRlKGlucHV0Mik7XG4gICAgfSk7XG5cbllvdSBjYW4gYWxzbyB1c2UgYW4gZWxlbWVudCBpbXBsZW1lbnRpbmcgYW5cbltgSXJvblZhbGlkYXRvckJlaGF2aW9yYF0oL2VsZW1lbnQvUG9seW1lckVsZW1lbnRzL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IpLlxuVGhpcyBleGFtcGxlIGNhbiBhbHNvIGJlIGZvdW5kIGluIHRoZSBkZW1vIGZvciB0aGlzIGVsZW1lbnQ6XG5cbiAgICA8aXJvbi1pbnB1dCB2YWxpZGF0b3I9XCJjYXRzLW9ubHlcIj5cbiAgICAgIDxpbnB1dD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbiMjIyBQcmV2ZW50aW5nIGludmFsaWQgaW5wdXRcblxuSXQgbWF5IGJlIGRlc2lyYWJsZSB0byBvbmx5IGFsbG93IHVzZXJzIHRvIGVudGVyIGNlcnRhaW4gY2hhcmFjdGVycy4gWW91IGNhbiB1c2VcbnRoZSBgYWxsb3dlZC1wYXR0ZXJuYCBhdHRyaWJ1dGUgdG8gYWNjb21wbGlzaCB0aGlzLiBUaGlzIGZlYXR1cmUgaXMgc2VwYXJhdGVcbmZyb20gdmFsaWRhdGlvbiwgYW5kIGBhbGxvd2VkLXBhdHRlcm5gIGRvZXMgbm90IGFmZmVjdCBob3cgdGhlIGlucHV0IGlzXG52YWxpZGF0ZWQuXG5cbiAgICAvLyBPbmx5IGFsbG93IHR5cGluZyBkaWdpdHMsIGJ1dCBhIHZhbGlkIGlucHV0IGhhcyBleGFjdGx5IDUgZGlnaXRzLlxuICAgIDxpcm9uLWlucHV0IGFsbG93ZWQtcGF0dGVybj1cIlswLTldXCI+XG4gICAgICA8aW5wdXQgcGF0dGVybj1cIlxcZHs1fVwiPlxuICAgIDwvaXJvbi1pbnB1dD5cblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzbG90IGlkPVwiY29udGVudFwiPjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdpcm9uLWlucHV0JyxcbiAgYmVoYXZpb3JzOiBbSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JdLFxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuZXZlciBgdmFsaWRhdGUoKWAgaXMgY2FsbGVkLlxuICAgKlxuICAgKiBAZXZlbnQgaXJvbi1pbnB1dC12YWxpZGF0ZVxuICAgKi9cblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGB2YWx1ZWAgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nLCBvciB0b1xuICAgICAqIHNldCBhIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBpbnB1dC4gKipEbyBub3QqKiB1c2UgdGhlIGRpc3RyaWJ1dGVkXG4gICAgICogaW5wdXQncyBgdmFsdWVgIHByb3BlcnR5IHRvIHNldCBhIGRlZmF1bHQgdmFsdWUuXG4gICAgICovXG4gICAgYmluZFZhbHVlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9LFxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZWQgcHJvcGVydHkgdGhhdCBlY2hvZXMgYGJpbmRWYWx1ZWAgKG1vc3RseSB1c2VkIGZvciBQb2x5bWVyIDEuMFxuICAgICAqIGJhY2tjb21wYXRpYmlsaXR5LCBpZiB5b3Ugd2VyZSBvbmUtd2F5IGJpbmRpbmcgdG8gdGhlIFBvbHltZXIgMS4wXG4gICAgICogYGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiYCB2YWx1ZSBhdHRyaWJ1dGUpLlxuICAgICAqL1xuICAgIHZhbHVlOiB7dHlwZTogU3RyaW5nLCBjb21wdXRlZDogJ19jb21wdXRlVmFsdWUoYmluZFZhbHVlKSd9LFxuXG4gICAgLyoqXG4gICAgICogUmVnZXgtbGlrZSBsaXN0IG9mIGNoYXJhY3RlcnMgYWxsb3dlZCBhcyBpbnB1dDsgYWxsIGNoYXJhY3RlcnMgbm90IGluIHRoZVxuICAgICAqIGxpc3Qgd2lsbCBiZSByZWplY3RlZC4gVGhlIHJlY29tbWVuZGVkIGZvcm1hdCBzaG91bGQgYmUgYSBsaXN0IG9mIGFsbG93ZWRcbiAgICAgKiBjaGFyYWN0ZXJzLCBmb3IgZXhhbXBsZSwgYFthLXpBLVowLTkuKy0hOzpdYC5cbiAgICAgKlxuICAgICAqIFRoaXMgcGF0dGVybiByZXByZXNlbnRzIHRoZSBhbGxvd2VkIGNoYXJhY3RlcnMgZm9yIHRoZSBmaWVsZDsgYXMgdGhlIHVzZXJcbiAgICAgKiBpbnB1dHMgdGV4dCwgZWFjaCBpbmRpdmlkdWFsIGNoYXJhY3RlciB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCB0aGVcbiAgICAgKiBwYXR0ZXJuIChyYXRoZXIgdGhhbiBjaGVja2luZyB0aGUgZW50aXJlIHZhbHVlIGFzIGEgd2hvbGUpLiBJZiBhXG4gICAgICogY2hhcmFjdGVyIGlzIG5vdCBhIG1hdGNoLCBpdCB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAqXG4gICAgICogUGFzdGVkIGlucHV0IHdpbGwgaGF2ZSBlYWNoIGNoYXJhY3RlciBjaGVja2VkIGluZGl2aWR1YWxseTsgaWYgYW55XG4gICAgICogY2hhcmFjdGVyIGRvZXNuJ3QgbWF0Y2ggYGFsbG93ZWRQYXR0ZXJuYCwgdGhlIGVudGlyZSBwYXN0ZWQgc3RyaW5nIHdpbGxcbiAgICAgKiBiZSByZWplY3RlZC5cbiAgICAgKlxuICAgICAqIE5vdGU6IGlmIHlvdSB3ZXJlIHVzaW5nIGBpcm9uLWlucHV0YCBpbiAxLjAsIHlvdSB3ZXJlIGFsc28gcmVxdWlyZWQgdG9cbiAgICAgKiBzZXQgYHByZXZlbnQtaW52YWxpZC1pbnB1dGAuIFRoaXMgaXMgbm8gbG9uZ2VyIG5lZWRlZCBhcyBvZiBQb2x5bWVyIDIuMCxcbiAgICAgKiBhbmQgd2lsbCBiZSBzZXQgYXV0b21hdGljYWxseSBmb3IgeW91IGlmIGFuIGBhbGxvd2VkUGF0dGVybmAgaXMgcHJvdmlkZWQuXG4gICAgICpcbiAgICAgKi9cbiAgICBhbGxvd2VkUGF0dGVybjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLXZhbGlkYXRlIHRoZSBpbnB1dCB2YWx1ZSBhcyB5b3UgdHlwZS5cbiAgICAgKi9cbiAgICBhdXRvVmFsaWRhdGU6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIF9pbnB1dEVsZW1lbnQ6IE9iamVjdCxcbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX2JpbmRWYWx1ZUNoYW5nZWQoYmluZFZhbHVlLCBfaW5wdXRFbGVtZW50KSddLFxuICBsaXN0ZW5lcnM6IHsnaW5wdXQnOiAnX29uSW5wdXQnLCAna2V5cHJlc3MnOiAnX29uS2V5cHJlc3MnfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBJcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7XG4gICAgdGhpcy5fcHJldmlvdXNWYWxpZElucHV0ID0gJyc7XG4gICAgdGhpcy5fcGF0dGVybkFscmVhZHlDaGVja2VkID0gZmFsc2U7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhZGRlZCBhdCBhIGxhdGVyIHRpbWUsIHVwZGF0ZSB0aGUgaW50ZXJuYWwgcmVmZXJlbmNlLlxuICAgIHRoaXMuX29ic2VydmVyID0gZG9tKHRoaXMpLm9ic2VydmVOb2RlcyhmdW5jdGlvbihpbmZvKSB7XG4gICAgICB0aGlzLl9pbml0U2xvdHRlZElucHV0KCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICBkb20odGhpcykudW5vYnNlcnZlTm9kZXModGhpcy5fb2JzZXJ2ZXIpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGdldCBpbnB1dEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudDtcbiAgfSxcblxuICBfaW5pdFNsb3R0ZWRJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faW5wdXRFbGVtZW50ID0gdGhpcy5nZXRFZmZlY3RpdmVDaGlsZHJlbigpWzBdO1xuXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlKSB7XG4gICAgICB0aGlzLmJpbmRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuZmlyZSgnaXJvbi1pbnB1dC1yZWFkeScpO1xuICB9LFxuXG4gIGdldCBfcGF0dGVyblJlZ0V4cCgpIHtcbiAgICB2YXIgcGF0dGVybjtcbiAgICBpZiAodGhpcy5hbGxvd2VkUGF0dGVybikge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAodGhpcy5hbGxvd2VkUGF0dGVybik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAodGhpcy5pbnB1dEVsZW1lbnQudHlwZSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIHBhdHRlcm4gPSAvWzAtOS4sZS1dLztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdHRlcm47XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc31cbiAgICovXG4gIF9iaW5kVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbihiaW5kVmFsdWUsIGlucHV0RWxlbWVudCkge1xuICAgIC8vIFRoZSBvYnNlcnZlciBjb3VsZCBoYXZlIHJ1biBiZWZvcmUgYXR0YWNoZWQoKSB3aGVuIHdlIGhhdmUgYWN0dWFsbHlcbiAgICAvLyBpbml0aWFsaXplZCB0aGlzIHByb3BlcnR5LlxuICAgIGlmICghaW5wdXRFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGJpbmRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoYmluZFZhbHVlICE9PSBpbnB1dEVsZW1lbnQudmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gYmluZFZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG9WYWxpZGF0ZSkge1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIC8vIG1hbnVhbGx5IG5vdGlmeSBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gbm90aWZ5IHVudGlsIGFmdGVyIHNldHRpbmcgdmFsdWVcbiAgICB0aGlzLmZpcmUoJ2JpbmQtdmFsdWUtY2hhbmdlZCcsIHt2YWx1ZTogYmluZFZhbHVlfSk7XG4gIH0sXG5cbiAgX29uSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIE5lZWQgdG8gdmFsaWRhdGUgZWFjaCBvZiB0aGUgY2hhcmFjdGVycyBwYXN0ZWQgaWYgdGhleSBoYXZlbid0XG4gICAgLy8gYmVlbiB2YWxpZGF0ZWQgaW5zaWRlIGBfb25LZXlwcmVzc2AgYWxyZWFkeS5cbiAgICBpZiAodGhpcy5hbGxvd2VkUGF0dGVybiAmJiAhdGhpcy5fcGF0dGVybkFscmVhZHlDaGVja2VkKSB7XG4gICAgICB2YXIgdmFsaWQgPSB0aGlzLl9jaGVja1BhdHRlcm5WYWxpZGl0eSgpO1xuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICB0aGlzLl9hbm5vdW5jZUludmFsaWRDaGFyYWN0ZXIoXG4gICAgICAgICAgICAnSW52YWxpZCBzdHJpbmcgb2YgY2hhcmFjdGVycyBub3QgZW50ZXJlZC4nKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYmluZFZhbHVlID0gdGhpcy5fcHJldmlvdXNWYWxpZElucHV0ID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgdGhpcy5fcGF0dGVybkFscmVhZHlDaGVja2VkID0gZmFsc2U7XG4gIH0sXG5cbiAgX2lzUHJpbnRhYmxlOiBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIFdoYXQgYSBjb250cm9sL3ByaW50YWJsZSBjaGFyYWN0ZXIgaXMgdmFyaWVzIHdpbGRseSBiYXNlZCBvbiB0aGUgYnJvd3Nlci5cbiAgICAvLyAtIG1vc3QgY29udHJvbCBjaGFyYWN0ZXJzIChhcnJvd3MsIGJhY2tzcGFjZSkgZG8gbm90IHNlbmQgYSBga2V5cHJlc3NgXG4gICAgLy8gZXZlbnRcbiAgICAvLyAgIGluIENocm9tZSwgYnV0IHRoZSAqZG8qIG9uIEZpcmVmb3hcbiAgICAvLyAtIGluIEZpcmVmb3gsIHdoZW4gdGhleSBkbyBzZW5kIGEgYGtleXByZXNzYCBldmVudCwgY29udHJvbCBjaGFycyBoYXZlXG4gICAgLy8gICBhIGNoYXJDb2RlID0gMCwga2V5Q29kZSA9IHh4IChmb3IgZXguIDQwIGZvciBkb3duIGFycm93KVxuICAgIC8vIC0gcHJpbnRhYmxlIGNoYXJhY3RlcnMgYWx3YXlzIHNlbmQgYSBrZXlwcmVzcyBldmVudC5cbiAgICAvLyAtIGluIEZpcmVmb3gsIHByaW50YWJsZSBjaGFycyBhbHdheXMgaGF2ZSBhIGtleUNvZGUgPSAwLiBJbiBDaHJvbWUsIHRoZVxuICAgIC8vIGtleUNvZGVcbiAgICAvLyAgIGFsd2F5cyBtYXRjaGVzIHRoZSBjaGFyQ29kZS5cbiAgICAvLyBOb25lIG9mIHRoaXMgbWFrZXMgYW55IHNlbnNlLlxuXG4gICAgLy8gRm9yIHRoZXNlIGtleXMsIEFTQ0lJIGNvZGUgPT0gYnJvd3NlciBrZXljb2RlLlxuICAgIHZhciBhbnlOb25QcmludGFibGUgPSAoZXZlbnQua2V5Q29kZSA9PSA4KSB8fCAgLy8gYmFja3NwYWNlXG4gICAgICAgIChldmVudC5rZXlDb2RlID09IDkpIHx8ICAgICAgICAgICAgICAgICAgICAvLyB0YWJcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHx8ICAgICAgICAgICAgICAgICAgIC8vIGVudGVyXG4gICAgICAgIChldmVudC5rZXlDb2RlID09IDI3KTsgICAgICAgICAgICAgICAgICAgICAvLyBlc2NhcGVcblxuICAgIC8vIEZvciB0aGVzZSBrZXlzLCBtYWtlIHN1cmUgaXQncyBhIGJyb3dzZXIga2V5Y29kZSBhbmQgbm90IGFuIEFTQ0lJIGNvZGUuXG4gICAgdmFyIG1vek5vblByaW50YWJsZSA9IChldmVudC5rZXlDb2RlID09IDE5KSB8fCAgLy8gcGF1c2VcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMjApIHx8ICAgICAgICAgICAgICAgICAgICAvLyBjYXBzIGxvY2tcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gNDUpIHx8ICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnRcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gNDYpIHx8ICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGVcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMTQ0KSB8fCAgICAgICAgICAgICAgICAgICAvLyBudW0gbG9ja1xuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxNDUpIHx8ICAgICAgICAgICAgICAgICAgIC8vIHNjcm9sbCBsb2NrXG4gICAgICAgIChldmVudC5rZXlDb2RlID4gMzIgJiZcbiAgICAgICAgIGV2ZW50LmtleUNvZGUgPCA0MSkgfHwgIC8vIHBhZ2UgdXAvZG93biwgZW5kLCBob21lLCBhcnJvd3NcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPiAxMTEgJiYgZXZlbnQua2V5Q29kZSA8IDEyNCk7ICAvLyBmbiBrZXlzXG5cbiAgICByZXR1cm4gIWFueU5vblByaW50YWJsZSAmJiAhKGV2ZW50LmNoYXJDb2RlID09IDAgJiYgbW96Tm9uUHJpbnRhYmxlKTtcbiAgfSxcblxuICBfb25LZXlwcmVzczogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuYWxsb3dlZFBhdHRlcm4gJiYgdGhpcy5pbnB1dEVsZW1lbnQudHlwZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJlZ2V4cCA9IHRoaXMuX3BhdHRlcm5SZWdFeHA7XG4gICAgaWYgKCFyZWdleHApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgc3BlY2lhbCBrZXlzIGFuZCBiYWNrc3BhY2VcbiAgICBpZiAoZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoZSBwYXR0ZXJuIGVpdGhlciBoZXJlIG9yIGluIGBfb25JbnB1dGAsIGJ1dCBub3QgaW4gYm90aC5cbiAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSB0cnVlO1xuXG4gICAgdmFyIHRoaXNDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5jaGFyQ29kZSk7XG4gICAgaWYgKHRoaXMuX2lzUHJpbnRhYmxlKGV2ZW50KSAmJiAhcmVnZXhwLnRlc3QodGhpc0NoYXIpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fYW5ub3VuY2VJbnZhbGlkQ2hhcmFjdGVyKFxuICAgICAgICAgICdJbnZhbGlkIGNoYXJhY3RlciAnICsgdGhpc0NoYXIgKyAnIG5vdCBlbnRlcmVkLicpO1xuICAgIH1cbiAgfSxcblxuICBfY2hlY2tQYXR0ZXJuVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWdleHAgPSB0aGlzLl9wYXR0ZXJuUmVnRXhwO1xuICAgIGlmICghcmVnZXhwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFyZWdleHAudGVzdCh0aGlzLmlucHV0RWxlbWVudC52YWx1ZVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuIFRoZSB2YWxpZGF0b3IgcHJvdmlkZWQgaW4gYHZhbGlkYXRvcmBcbiAgICogd2lsbCBiZSB1c2VkIGZpcnN0LCB0aGVuIGFueSBjb25zdHJhaW50cy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWQuXG4gICAqL1xuICB2YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnZhbGlkID0gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBVc2UgdGhlIG5lc3RlZCBpbnB1dCdzIG5hdGl2ZSB2YWxpZGl0eS5cbiAgICB2YXIgdmFsaWQgPSB0aGlzLmlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG5cbiAgICAvLyBPbmx5IGRvIGV4dHJhIGNoZWNraW5nIGlmIHRoZSBicm93c2VyIHRob3VnaHQgdGhpcyB3YXMgdmFsaWQuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICAvLyBFbXB0eSwgcmVxdWlyZWQgaW5wdXQgaXMgaW52YWxpZFxuICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgdGhpcy5iaW5kVmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzVmFsaWRhdG9yKCkpIHtcbiAgICAgICAgdmFsaWQgPSBJcm9uVmFsaWRhdGFibGVCZWhhdmlvci52YWxpZGF0ZS5jYWxsKHRoaXMsIHRoaXMuYmluZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgdGhpcy5maXJlKCdpcm9uLWlucHV0LXZhbGlkYXRlJyk7XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9LFxuXG4gIF9hbm5vdW5jZUludmFsaWRDaGFyYWN0ZXI6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmZpcmUoJ2lyb24tYW5ub3VuY2UnLCB7dGV4dDogbWVzc2FnZX0pO1xuICB9LFxuXG4gIF9jb21wdXRlVmFsdWU6IGZ1bmN0aW9uKGJpbmRWYWx1ZSkge1xuICAgIHJldHVybiBiaW5kVmFsdWU7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWlucHV0L2lyb24taW5wdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWNoYXItY291bnRlci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtY29udGFpbmVyLmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1lcnJvci5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7RG9tTW9kdWxlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20tbW9kdWxlLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge1BhcGVySW5wdXRCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pbnB1dC1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbVGV4dFxuZmllbGRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvdGV4dC1maWVsZHMuaHRtbClcblxuYDxwYXBlci1pbnB1dD5gIGlzIGEgc2luZ2xlLWxpbmUgdGV4dCBmaWVsZCB3aXRoIE1hdGVyaWFsIERlc2lnbiBzdHlsaW5nLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwiSW5wdXQgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBtYXkgaW5jbHVkZSBhbiBvcHRpb25hbCBlcnJvciBtZXNzYWdlIG9yIGNoYXJhY3RlciBjb3VudGVyLlxuXG4gICAgPHBhcGVyLWlucHV0IGVycm9yLW1lc3NhZ2U9XCJJbnZhbGlkIGlucHV0IVwiIGxhYmVsPVwiSW5wdXRcbiAgICBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+IDxwYXBlci1pbnB1dCBjaGFyLWNvdW50ZXIgbGFiZWw9XCJJbnB1dFxuICAgIGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgY2FuIGFsc28gaW5jbHVkZSBjdXN0b20gcHJlZml4IG9yIHN1ZmZpeCBlbGVtZW50cywgd2hpY2ggYXJlIGRpc3BsYXllZFxuYmVmb3JlIG9yIGFmdGVyIHRoZSB0ZXh0IGlucHV0IGl0c2VsZi4gSW4gb3JkZXIgZm9yIGFuIGVsZW1lbnQgdG8gYmVcbmNvbnNpZGVyZWQgYXMgYSBwcmVmaXgsIGl0IG11c3QgaGF2ZSB0aGUgYHByZWZpeGAgYXR0cmlidXRlIChhbmQgc2ltaWxhcmx5XG5mb3IgYHN1ZmZpeGApLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwidG90YWxcIj5cbiAgICAgIDxkaXYgcHJlZml4PiQ8L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgaWNvbj1cImNsZWFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5BIGBwYXBlci1pbnB1dGAgY2FuIHVzZSB0aGUgbmF0aXZlIGB0eXBlPXNlYXJjaGAgb3IgYHR5cGU9ZmlsZWAgZmVhdHVyZXMuXG5Ib3dldmVyLCBzaW5jZSB3ZSBjYW4ndCBjb250cm9sIHRoZSBuYXRpdmUgc3R5bGluZyBvZiB0aGUgaW5wdXQgKHNlYXJjaCBpY29uLFxuZmlsZSBidXR0b24sIGRhdGUgcGxhY2Vob2xkZXIsIGV0Yy4pLCBpbiB0aGVzZSBjYXNlcyB0aGUgbGFiZWwgd2lsbCBiZVxuYXV0b21hdGljYWxseSBmbG9hdGVkLiBUaGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgY2FuIHN0aWxsIGJlIHVzZWQgZm9yXG5hZGRpdGlvbmFsIGluZm9ybWF0aW9uYWwgdGV4dC5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInNlYXJjaCFcIiB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGNhdHNcIiBhdXRvc2F2ZT1cInRlc3RcIiByZXN1bHRzPVwiNVwiPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIGZvciBtb3JlIEFQSSBkb2NzLlxuXG4jIyMgRm9jdXNcblxuVG8gZm9jdXMgYSBwYXBlci1pbnB1dCwgeW91IGNhbiBjYWxsIHRoZSBuYXRpdmUgYGZvY3VzKClgIG1ldGhvZCBhcyBsb25nIGFzIHRoZVxucGFwZXIgaW5wdXQgaGFzIGEgdGFiIGluZGV4LiBTaW1pbGFybHksIGBibHVyKClgIHdpbGwgYmx1ciB0aGUgZWxlbWVudC5cblxuIyMjIFN0eWxpbmdcblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRDb250YWluZXJgIGZvciBhIGxpc3Qgb2YgY3VzdG9tIHByb3BlcnRpZXMgdXNlZCB0b1xuc3R5bGUgdGhpcyBlbGVtZW50LlxuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIEludGVybmV0IEV4cGxvcmVyIHJldmVhbCBidXR0b24gKHRoZSBleWViYWxsKSB8IHt9XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaW5wdXRcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1pbnB1dCcsXG5cbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgLyogRmlyZWZveCBzZXRzIGEgbWluLXdpZHRoIG9uIHRoZSBpbnB1dCwgd2hpY2ggY2FuIGNhdXNlIGxheW91dCBpc3N1ZXMgKi9cbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAvKiBJbiAxLngsIHRoZSA8aW5wdXQ+IGlzIGRpc3RyaWJ1dGVkIHRvIHBhcGVyLWlucHV0LWNvbnRhaW5lciwgd2hpY2ggc3R5bGVzIGl0LlxuICAgICAgSW4gMi54IHRoZSA8aXJvbi1pbnB1dD4gaXMgZGlzdHJpYnV0ZWQgdG8gcGFwZXItaW5wdXQtY29udGFpbmVyLCB3aGljaCBzdHlsZXNcbiAgICAgIGl0LCBidXQgaW4gb3JkZXIgZm9yIHRoaXMgdG8gd29yayBjb3JyZWN0bHksIHdlIG5lZWQgdG8gcmVzZXQgc29tZVxuICAgICAgb2YgdGhlIG5hdGl2ZSBpbnB1dCdzIHByb3BlcnRpZXMgdG8gaW5oZXJpdCAoZnJvbSB0aGUgaXJvbi1pbnB1dCkgKi9cbiAgICAgIGlyb24taW5wdXQgPiBpbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICAgICAgd29yZC1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtY2xlYXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtcmV2ZWFsIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLXJldmVhbDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lciBpZD1cImNvbnRhaW5lclwiIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsKGFsd2F5c0Zsb2F0TGFiZWwscGxhY2Vob2xkZXIpXV1cIiBhdXRvLXZhbGlkYXRlJD1cIltbYXV0b1ZhbGlkYXRlXV1cIiBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIiBpbnZhbGlkPVwiW1tpbnZhbGlkXV1cIj5cblxuICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvciQ9XCJbW19pbnB1dElkXV1cIiBzbG90PVwibGFiZWxcIj5bW2xhYmVsXV08L2xhYmVsPlxuXG4gICAgICA8IS0tIE5lZWQgdG8gYmluZCBtYXhsZW5ndGggc28gdGhhdCB0aGUgcGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHdvcmtzIGNvcnJlY3RseSAtLT5cbiAgICAgIDxpcm9uLWlucHV0IGJpbmQtdmFsdWU9XCJ7e3ZhbHVlfX1cIiBzbG90PVwiaW5wdXRcIiBjbGFzcz1cImlucHV0LWVsZW1lbnRcIiBpZCQ9XCJbW19pbnB1dElkXV1cIiBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiIHZhbGlkYXRvcj1cIltbdmFsaWRhdG9yXV1cIj5cbiAgICAgICAgPGlucHV0IGFyaWEtbGFiZWxsZWRieSQ9XCJbW19hcmlhTGFiZWxsZWRCeV1dXCIgYXJpYS1kZXNjcmliZWRieSQ9XCJbW19hcmlhRGVzY3JpYmVkQnldXVwiIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiIHRpdGxlJD1cIltbdGl0bGVdXVwiIHR5cGUkPVwiW1t0eXBlXV1cIiBwYXR0ZXJuJD1cIltbcGF0dGVybl1dXCIgcmVxdWlyZWQkPVwiW1tyZXF1aXJlZF1dXCIgYXV0b2NvbXBsZXRlJD1cIltbYXV0b2NvbXBsZXRlXV1cIiBhdXRvZm9jdXMkPVwiW1thdXRvZm9jdXNdXVwiIGlucHV0bW9kZSQ9XCJbW2lucHV0bW9kZV1dXCIgbWlubGVuZ3RoJD1cIltbbWlubGVuZ3RoXV1cIiBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiIG1pbiQ9XCJbW21pbl1dXCIgbWF4JD1cIltbbWF4XV1cIiBzdGVwJD1cIltbc3RlcF1dXCIgbmFtZSQ9XCJbW25hbWVdXVwiIHBsYWNlaG9sZGVyJD1cIltbcGxhY2Vob2xkZXJdXVwiIHJlYWRvbmx5JD1cIltbcmVhZG9ubHldXVwiIGxpc3QkPVwiW1tsaXN0XV1cIiBzaXplJD1cIltbc2l6ZV1dXCIgYXV0b2NhcGl0YWxpemUkPVwiW1thdXRvY2FwaXRhbGl6ZV1dXCIgYXV0b2NvcnJlY3QkPVwiW1thdXRvY29ycmVjdF1dXCIgb24tY2hhbmdlPVwiX29uQ2hhbmdlXCIgdGFiaW5kZXgkPVwiW1t0YWJJbmRleF1dXCIgYXV0b3NhdmUkPVwiW1thdXRvc2F2ZV1dXCIgcmVzdWx0cyQ9XCJbW3Jlc3VsdHNdXVwiIGFjY2VwdCQ9XCJbW2FjY2VwdF1dXCIgbXVsdGlwbGUkPVwiW1ttdWx0aXBsZV1dXCI+XG4gICAgICA8L2lyb24taW5wdXQ+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+PC9zbG90PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZXJyb3JNZXNzYWdlXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWVycm9yIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIHNsb3Q9XCJhZGQtb25cIj5bW2Vycm9yTWVzc2FnZV1dPC9wYXBlci1pbnB1dC1lcnJvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjaGFyQ291bnRlcl1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgc2xvdD1cImFkZC1vblwiPjwvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuICBgLFxuXG4gIGJlaGF2aW9yczogW1BhcGVySW5wdXRCZWhhdmlvciwgSXJvbkZvcm1FbGVtZW50QmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgLy8gUmVxdWlyZWQgZm9yIHRoZSBjb3JyZWN0IFR5cGVTY3JpcHQgdHlwZS1nZW5lcmF0aW9uXG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LiBPdmVycmlkZGVuIGZyb21cbiAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGNvcnJlY3RseSBmb2N1cyB0aGUgbmF0aXZlIGlucHV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHshSFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgX2ZvY3VzYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50Ll9pbnB1dEVsZW1lbnQ7XG4gIH0sXG5cbiAgLy8gTm90ZTogVGhpcyBldmVudCBpcyBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgMS4wIHZlcnNpb24gb2YgdGhpcyBlbGVtZW50LlxuICAvLyBJbiAyLjAsIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGBfb25Jcm9uSW5wdXRSZWFkeWAgaXMgZG9uZSBpblxuICAvLyBQYXBlcklucHV0QmVoYXZpb3I6OmF0dGFjaGVkLlxuICBsaXN0ZW5lcnM6IHsnaXJvbi1pbnB1dC1yZWFkeSc6ICdfb25Jcm9uSW5wdXRSZWFkeSd9LFxuXG4gIF9vbklyb25JbnB1dFJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBFdmVuIHRob3VnaCB0aGlzIGlzIG9ubHkgdXNlZCBpbiB0aGUgbmV4dCBsaW5lLCBzYXZlIHRoaXMgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHNpbmNlIHRoZSBuYXRpdmUgaW5wdXQgaGFkIHRoaXMgSUQgdW50aWwgMi4wLjUuXG4gICAgaWYgKCF0aGlzLiQubmF0aXZlSW5wdXQpIHtcbiAgICAgIHRoaXMuJC5uYXRpdmVJbnB1dCA9IHRoaXMuJCQoJ2lucHV0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJlxuICAgICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dC5pbmRleE9mKHRoaXMuJC5uYXRpdmVJbnB1dC50eXBlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWx3YXlzRmxvYXRMYWJlbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gT25seSB2YWxpZGF0ZSB3aGVuIGF0dGFjaGVkIGlmIHRoZSBpbnB1dCBhbHJlYWR5IGhhcyBhIHZhbHVlLlxuICAgIGlmICghIXRoaXMuaW5wdXRFbGVtZW50LmJpbmRWYWx1ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lci5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5pbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfSxcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTs7Ozs7Ozs7O0FBREE7QUFZQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuREE7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtGQTtBQUNBOzs7Ozs7O0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFNQTtBQUVBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQTdDQTtBQWdEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBMVFBOzs7Ozs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUE2R0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEpBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
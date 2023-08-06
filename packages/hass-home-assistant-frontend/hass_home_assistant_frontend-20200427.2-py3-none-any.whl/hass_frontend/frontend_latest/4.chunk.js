(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js ***!
  \****************************************************************************************/
/*! exports provided: IronFormElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronFormElementBehavior", function() { return IronFormElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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
  IronFormElementBehavior adds a `name`, `value` and `required` properties to
  a custom element. It mostly exists for backcompatibility with Polymer 1.x, and
  is probably not something you want to use.

  @demo demo/index.html
  @polymerBehavior
 */

const IronFormElementBehavior = {
  properties: {
    /**
     * The name of this element.
     */
    name: {
      type: String
    },

    /**
     * The value for this element.
     * @type {*}
     */
    value: {
      notify: true,
      type: String
    },

    /**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */
    required: {
      type: Boolean,
      value: false
    }
  },
  // Empty implementations for backcompatibility.
  attached: function () {},
  detached: function () {}
};

/***/ }),

/***/ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js ***!
  \**************************************************************************************/
/*! exports provided: IronValidatableBehaviorMeta, IronValidatableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronValidatableBehaviorMeta", function() { return IronValidatableBehaviorMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronValidatableBehavior", function() { return IronValidatableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
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
 * Singleton IronMeta instance.
 */

let IronValidatableBehaviorMeta = null;
/**
 * `Use IronValidatableBehavior` to implement an element that validates
 * user input. Use the related `IronValidatorBehavior` to add custom
 * validation logic to an iron-input.
 *
 * By default, an `<iron-form>` element validates its fields when the user
 * presses the submit button. To validate a form imperatively, call the form's
 * `validate()` method, which in turn will call `validate()` on all its
 * children. By using `IronValidatableBehavior`, your custom element
 * will get a public `validate()`, which will return the validity of the
 * element, and a corresponding `invalid` attribute, which can be used for
 * styling.
 *
 * To implement the custom validation logic of your element, you must override
 * the protected `_getValidity()` method of this behaviour, rather than
 * `validate()`. See
 * [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
 * for an example.
 *
 * ### Accessibility
 *
 * Changing the `invalid` property, either manually or by calling `validate()`
 * will update the `aria-invalid` attribute.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */

const IronValidatableBehavior = {
  properties: {
    /**
     * Name of the validator to use.
     */
    validator: {
      type: String
    },

    /**
     * True if the last call to `validate` is invalid.
     */
    invalid: {
      notify: true,
      reflectToAttribute: true,
      type: Boolean,
      value: false,
      observer: '_invalidChanged'
    }
  },
  registered: function () {
    IronValidatableBehaviorMeta = new _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__["IronMeta"]({
      type: 'validator'
    });
  },
  _invalidChanged: function () {
    if (this.invalid) {
      this.setAttribute('aria-invalid', 'true');
    } else {
      this.removeAttribute('aria-invalid');
    }
  },

  /* Recompute this every time it's needed, because we don't know if the
   * underlying IronValidatableBehaviorMeta has changed. */
  get _validator() {
    return IronValidatableBehaviorMeta && IronValidatableBehaviorMeta.byKey(this.validator);
  },

  /**
   * @return {boolean} True if the validator `validator` exists.
   */
  hasValidator: function () {
    return this._validator != null;
  },

  /**
   * Returns true if the `value` is valid, and updates `invalid`. If you want
   * your element to have custom validation logic, do not override this method;
   * override `_getValidity(value)` instead.
    * @param {Object} value Deprecated: The value to be validated. By default,
   * it is passed to the validator's `validate()` function, if a validator is
   set.
   * If this argument is not specified, then the element's `value` property
   * is used, if it exists.
   * @return {boolean} True if `value` is valid.
   */
  validate: function (value) {
    // If this is an element that also has a value property, and there was
    // no explicit value argument passed, use the element's property instead.
    if (value === undefined && this.value !== undefined) this.invalid = !this._getValidity(this.value);else this.invalid = !this._getValidity(value);
    return !this.invalid;
  },

  /**
   * Returns true if `value` is valid.  By default, it is passed
   * to the validator's `validate()` function, if a validator is set. You
   * should override this method if you want to implement custom validity
   * logic for your element.
   *
   * @param {Object} value The value to be validated.
   * @return {boolean} True if `value` is valid.
   */
  _getValidity: function (value) {
    if (this.hasValidator()) {
      return this._validator.validate(value);
    }

    return true;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-input/paper-input-addon-behavior.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@polymer/paper-input/paper-input-addon-behavior.js ***!
  \*************************************************************************/
/*! exports provided: PaperInputAddonBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputAddonBehavior", function() { return PaperInputAddonBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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
 * Use `Polymer.PaperInputAddonBehavior` to implement an add-on for
 * `<paper-input-container>`. A add-on appears below the input, and may display
 * information based on the input value and validity such as a character counter
 * or an error message.
 * @polymerBehavior
 */

const PaperInputAddonBehavior = {
  attached: function () {
    this.fire('addon-attached');
  },

  /**
   * The function called by `<paper-input-container>` when the input value or
   * validity changes.
   * @param {{
   *   invalid: boolean,
   *   inputElement: (Element|undefined),
   *   value: (string|undefined)
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function (state) {}
};

/***/ }),

/***/ "./node_modules/@polymer/paper-input/paper-input-behavior.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/paper-input/paper-input-behavior.js ***!
  \*******************************************************************/
/*! exports provided: PaperInputHelper, PaperInputBehaviorImpl, PaperInputBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputHelper", function() { return PaperInputHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputBehaviorImpl", function() { return PaperInputBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputBehavior", function() { return PaperInputBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
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




 // Generate unique, monotonically increasing IDs for labels (needed by
// aria-labelledby) and add-ons.

const PaperInputHelper = {};
PaperInputHelper.NextLabelID = 1;
PaperInputHelper.NextAddonID = 1;
PaperInputHelper.NextInputID = 1;
/**
 * Use `PaperInputBehavior` to implement inputs with `<paper-input-container>`.
 * This behavior is implemented by `<paper-input>`. It exposes a number of
 * properties from `<paper-input-container>` and `<input is="iron-input">` and
 * they should be bound in your template.
 *
 * The input element can be accessed by the `inputElement` property if you need
 * to access properties or methods that are not exposed.
 * @polymerBehavior PaperInputBehavior
 */

const PaperInputBehaviorImpl = {
  properties: {
    /**
     * Fired when the input changes due to user interaction.
     *
     * @event change
     */

    /**
     * The label for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * `<label>`'s content and `hidden` property, e.g.
     * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
     */
    label: {
      type: String
    },

    /**
     * The value for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<iron-input>`'s `bindValue`
     * property, or the value property of your input that is `notify:true`.
     * @type {*}
     */
    value: {
      notify: true,
      type: String
    },

    /**
     * Set to true to disable this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * both the `<paper-input-container>`'s and the input's `disabled` property.
     */
    disabled: {
      type: Boolean,
      value: false
    },

    /**
     * Returns true if the value is invalid. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to both the
     * `<paper-input-container>`'s and the input's `invalid` property.
     *
     * If `autoValidate` is true, the `invalid` attribute is managed
     * automatically, which can clobber attempts to manage it manually.
     */
    invalid: {
      type: Boolean,
      value: false,
      notify: true
    },

    /**
     * Set this to specify the pattern allowed by `preventInvalidInput`. If
     * you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
     * property.
     */
    allowedPattern: {
      type: String
    },

    /**
     * The type of the input. The supported types are the
     * [native input's
     * types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the (Polymer 1) `<input is="iron-input">`'s or
     * (Polymer 2)
     * `<iron-input>`'s `type` property.
     */
    type: {
      type: String
    },

    /**
     * The datalist of the input (if any). This should match the id of an
     * existing `<datalist>`. If you're using PaperInputBehavior to implement
     * your own paper-input-like element, bind this to the `<input
     * is="iron-input">`'s `list` property.
     */
    list: {
      type: String
    },

    /**
     * A pattern to validate the `input` with. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `pattern` property.
     */
    pattern: {
      type: String
    },

    /**
     * Set to true to mark the input as required. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `required` property.
     */
    required: {
      type: Boolean,
      value: false
    },

    /**
     * The error message to display when the input is invalid. If you're using
     * PaperInputBehavior to implement your own paper-input-like element,
     * bind this to the `<paper-input-error>`'s content, if using.
     */
    errorMessage: {
      type: String
    },

    /**
     * Set to true to show a character counter.
     */
    charCounter: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable the floating label. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `noLabelFloat` property.
     */
    noLabelFloat: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to always float the label. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to auto-validate the input value. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `autoValidate` property.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * Name of the validator to use. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `validator` property.
     */
    validator: {
      type: String
    },
    // HTMLInputElement attributes for binding if needed

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocomplete`
     * property.
     */
    autocomplete: {
      type: String,
      value: 'off'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autofocus`
     * property.
     */
    autofocus: {
      type: Boolean,
      observer: '_autofocusChanged'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `inputmode`
     * property.
     */
    inputmode: {
      type: String
    },

    /**
     * The minimum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `minlength`
     * property.
     */
    minlength: {
      type: Number
    },

    /**
     * The maximum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `maxlength`
     * property.
     */
    maxlength: {
      type: Number
    },

    /**
     * The minimum (numeric or date-time) input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `min` property.
     */
    min: {
      type: String
    },

    /**
     * The maximum (numeric or date-time) input value.
     * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `max` property.
     */
    max: {
      type: String
    },

    /**
     * Limits the numeric or date-time increments.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `step` property.
     */
    step: {
      type: String
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `name` property.
     */
    name: {
      type: String
    },

    /**
     * A placeholder string in addition to the label. If this is set, the label
     * will always float.
     */
    placeholder: {
      type: String,
      // need to set a default so _computeAlwaysFloatLabel is run
      value: ''
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `readonly`
     * property.
     */
    readonly: {
      type: Boolean,
      value: false
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `size` property.
     */
    size: {
      type: Number
    },
    // Nonstandard attributes for binding if needed

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocapitalize`
     * property.
     *
     * @type {string}
     */
    autocapitalize: {
      type: String,
      value: 'none'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocorrect`
     * property.
     */
    autocorrect: {
      type: String,
      value: 'off'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autosave`
     * property, used with type=search.
     */
    autosave: {
      type: String
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `results` property,
     * used with type=search.
     */
    results: {
      type: Number
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `accept` property,
     * used with type=file.
     */
    accept: {
      type: String
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the`<input is="iron-input">`'s `multiple` property,
     * used with type=file.
     */
    multiple: {
      type: Boolean
    },

    /** @private */
    _ariaDescribedBy: {
      type: String,
      value: ''
    },

    /** @private */
    _ariaLabelledBy: {
      type: String,
      value: ''
    },

    /** @private */
    _inputId: {
      type: String,
      value: ''
    }
  },
  listeners: {
    'addon-attached': '_onAddonAttached'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'shift+tab:keydown': '_onShiftTabDown'
  },

  /** @private */
  hostAttributes: {
    tabindex: 0
  },

  /**
   * Returns a reference to the input element.
   * @return {!HTMLElement}
   */
  get inputElement() {
    // Chrome generates audit errors if an <input type="password"> has a
    // duplicate ID, which is almost always true in Shady DOM. Generate
    // a unique ID instead.
    if (!this.$) {
      this.$ = {};
    }

    if (!this.$.input) {
      this._generateInputId();

      this.$.input = this.$$('#' + this._inputId);
    }

    return this.$.input;
  },

  /**
   * Returns a reference to the focusable element.
   * @return {!HTMLElement}
   */
  get _focusableElement() {
    return this.inputElement;
  },

  created: function () {
    // These types have some default placeholder text; overlapping
    // the label on top of it looks terrible. Auto-float the label in this case.
    this._typesThatHaveText = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week', 'file'];
  },
  attached: function () {
    this._updateAriaLabelledBy(); // In the 2.0 version of the element, this is handled in `onIronInputReady`,
    // i.e. after the native input has finished distributing. In the 1.0
    // version, the input is in the shadow tree, so it's already available.


    if (!_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] && this.inputElement && this._typesThatHaveText.indexOf(this.inputElement.type) !== -1) {
      this.alwaysFloatLabel = true;
    }
  },
  _appendStringWithSpace: function (str, more) {
    if (str) {
      str = str + ' ' + more;
    } else {
      str = more;
    }

    return str;
  },
  _onAddonAttached: function (event) {
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).rootTarget;

    if (target.id) {
      this._ariaDescribedBy = this._appendStringWithSpace(this._ariaDescribedBy, target.id);
    } else {
      var id = 'paper-input-add-on-' + PaperInputHelper.NextAddonID++;
      target.id = id;
      this._ariaDescribedBy = this._appendStringWithSpace(this._ariaDescribedBy, id);
    }
  },

  /**
   * Validates the input element and sets an error style if needed.
   *
   * @return {boolean}
   */
  validate: function () {
    return this.inputElement.validate();
  },

  /**
   * Forward focus to inputElement. Overriden from IronControlState.
   */
  _focusBlurHandler: function (event) {
    _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"]._focusBlurHandler.call(this, event); // Forward the focus to the nested input.


    if (this.focused && !this._shiftTabPressed && this._focusableElement) {
      this._focusableElement.focus();
    }
  },

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onShiftTabDown: function (event) {
    var oldTabIndex = this.getAttribute('tabindex');
    this._shiftTabPressed = true;
    this.setAttribute('tabindex', '-1');
    this.async(function () {
      this.setAttribute('tabindex', oldTabIndex);
      this._shiftTabPressed = false;
    }, 1);
  },

  /**
   * If `autoValidate` is true, then validates the element.
   */
  _handleAutoValidate: function () {
    if (this.autoValidate) this.validate();
  },

  /**
   * Restores the cursor to its original position after updating the value.
   * @param {string} newValue The value that should be saved.
   */
  updateValueAndPreserveCaret: function (newValue) {
    // Not all elements might have selection, and even if they have the
    // right properties, accessing them might throw an exception (like for
    // <input type=number>)
    try {
      var start = this.inputElement.selectionStart;
      this.value = newValue; // The cursor automatically jumps to the end after re-setting the value,
      // so restore it to its original position.

      this.inputElement.selectionStart = start;
      this.inputElement.selectionEnd = start;
    } catch (e) {
      // Just set the value and give up on the caret.
      this.value = newValue;
    }
  },
  _computeAlwaysFloatLabel: function (alwaysFloatLabel, placeholder) {
    return placeholder || alwaysFloatLabel;
  },
  _updateAriaLabelledBy: function () {
    var label = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).querySelector('label');

    if (!label) {
      this._ariaLabelledBy = '';
      return;
    }

    var labelledBy;

    if (label.id) {
      labelledBy = label.id;
    } else {
      labelledBy = 'paper-input-label-' + PaperInputHelper.NextLabelID++;
      label.id = labelledBy;
    }

    this._ariaLabelledBy = labelledBy;
  },
  _generateInputId: function () {
    if (!this._inputId || this._inputId === '') {
      this._inputId = 'input-' + PaperInputHelper.NextInputID++;
    }
  },
  _onChange: function (event) {
    // In the Shadow DOM, the `change` event is not leaked into the
    // ancestor tree, so we must do this manually.
    // See
    // https://w3c.github.io/webcomponents/spec/shadow/#events-that-are-not-leaked-into-ancestor-trees.
    if (this.shadowRoot) {
      this.fire(event.type, {
        sourceEvent: event
      }, {
        node: this,
        bubbles: event.bubbles,
        cancelable: event.cancelable
      });
    }
  },
  _autofocusChanged: function () {
    // Firefox doesn't respect the autofocus attribute if it's applied after
    // the page is loaded (Chrome/WebKit do respect it), preventing an
    // autofocus attribute specified in markup from taking effect when the
    // element is upgraded. As a workaround, if the autofocus property is set,
    // and the focus hasn't already been moved elsewhere, we take focus.
    if (this.autofocus && this._focusableElement) {
      // In IE 11, the default document.activeElement can be the page's
      // outermost html element, but there are also cases (under the
      // polyfill?) in which the activeElement is not a real HTMLElement, but
      // just a plain object. We identify the latter case as having no valid
      // activeElement.
      var activeElement = document.activeElement;
      var isActiveElementValid = activeElement instanceof HTMLElement; // Has some other element has already taken the focus?

      var isSomeElementActive = isActiveElementValid && activeElement !== document.body && activeElement !== document.documentElement;
      /* IE 11 */

      if (!isSomeElementActive) {
        // No specific element has taken the focus yet, so we can take it.
        this._focusableElement.focus();
      }
    }
  }
};
/** @polymerBehavior */

const PaperInputBehavior = [_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"], PaperInputBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-input/paper-input-char-counter.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@polymer/paper-input/paper-input-char-counter.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-input-addon-behavior.js */ "./node_modules/@polymer/paper-input/paper-input-addon-behavior.js");
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





/*
`<paper-input-char-counter>` is a character counter for use with
`<paper-input-container>`. It shows the number of characters entered in the
input and the max length if it is specified.

    <paper-input-container>
      <input maxlength="20">
      <paper-input-char-counter></paper-input-char-counter>
    </paper-input-container>

### Styling

The following mixin is available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-char-counter` | Mixin applied to the element | `{}`
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,
  is: 'paper-input-char-counter',
  behaviors: [_paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_4__["PaperInputAddonBehavior"]],
  properties: {
    _charCounterStr: {
      type: String,
      value: '0'
    }
  },

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function (state) {
    if (!state.inputElement) {
      return;
    }

    state.value = state.value || '';
    var counter = state.value.toString().length.toString();

    if (state.inputElement.hasAttribute('maxlength')) {
      counter += '/' + state.inputElement.getAttribute('maxlength');
    }

    this._charCounterStr = counter;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-input/paper-input-container.js":
/*!********************************************************************!*\
  !*** ./node_modules/@polymer/paper-input/paper-input-container.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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








const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
/*
`<paper-input-container>` is a container for a `<label>`, an `<iron-input>` or
`<textarea>` and optional add-on elements such as an error message or character
counter, used to implement Material Design text fields.

For example:

    <paper-input-container>
      <label slot="label">Your name</label>
      <iron-input slot="input">
        <input>
      </iron-input>
      // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
instead of the above.
    </paper-input-container>

You can style the nested `<input>` however you want; if you want it to look like
a Material Design input, you can style it with the
--paper-input-container-shared-input-style mixin.

Do not wrap `<paper-input-container>` around elements that already include it,
such as `<paper-input>`. Doing so may cause events to bounce infinitely between
the container and its contained element.

### Listening for input changes

By default, it listens for changes on the `bind-value` attribute on its children
nodes and perform tasks such as auto-validating and label styling when the
`bind-value` changes. You can configure the attribute it listens to with the
`attr-for-value` attribute.

### Using a custom input element

You can use a custom input element in a `<paper-input-container>`, for example
to implement a compound input field like a social security number input. The
custom input element should have the `paper-input-input` class, have a
`notify:true` value property and optionally implements
`Polymer.IronValidatableBehavior` if it is validatable.

    <paper-input-container attr-for-value="ssn-value">
      <label slot="label">Social security number</label>
      <ssn-input slot="input" class="paper-input-input"></ssn-input>
    </paper-input-container>


If you're using a `<paper-input-container>` imperatively, it's important to make
sure that you attach its children (the `iron-input` and the optional `label`)
before you attach the `<paper-input-container>` itself, so that it can be set up
correctly.

### Validation

If the `auto-validate` attribute is set, the input container will validate the
input and update the container styling when the input value changes.

### Add-ons

Add-ons are child elements of a `<paper-input-container>` with the `add-on`
attribute and implements the `Polymer.PaperInputAddonBehavior` behavior. They
are notified when the input value or validity changes, and may implement
functionality such as error messages or character counters. They appear at the
bottom of the input.

### Prefixes and suffixes
These are child elements of a `<paper-input-container>` with the `prefix`
or `suffix` attribute, and are displayed inline with the input, before or after.

    <paper-input-container>
      <div slot="prefix">$</div>
      <label slot="label">Total</label>
      <iron-input slot="input">
        <input>
      </iron-input>
      // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
instead of the above. <paper-icon-button slot="suffix"
icon="clear"></paper-icon-button>
    </paper-input-container>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-color` | Label and underline color when the input is not focused | `--secondary-text-color`
`--paper-input-container-focus-color` | Label and underline color when the input is focused | `--primary-color`
`--paper-input-container-invalid-color` | Label and underline color when the input is is invalid | `--error-color`
`--paper-input-container-input-color` | Input foreground color | `--primary-text-color`
`--paper-input-container` | Mixin applied to the container | `{}`
`--paper-input-container-disabled` | Mixin applied to the container when it's disabled | `{}`
`--paper-input-container-label` | Mixin applied to the label | `{}`
`--paper-input-container-label-focus` | Mixin applied to the label when the input is focused | `{}`
`--paper-input-container-label-floating` | Mixin applied to the label when floating | `{}`
`--paper-input-container-input` | Mixin applied to the input | `{}`
`--paper-input-container-input-align` | The vertical-align property of the input | `bottom`
`--paper-input-container-input-disabled` | Mixin applied to the input when the component is disabled | `{}`
`--paper-input-container-input-focus` | Mixin applied to the input when focused | `{}`
`--paper-input-container-input-invalid` | Mixin applied to the input when invalid | `{}`
`--paper-input-container-input-webkit-spinner` | Mixin applied to the webkit spinner | `{}`
`--paper-input-container-input-webkit-clear` | Mixin applied to the webkit clear button | `{}`
`--paper-input-container-input-webkit-calendar-picker-indicator` | Mixin applied to the webkit calendar picker indicator | `{}`
`--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer clear button | `{}`
`--paper-input-container-underline` | Mixin applied to the underline | `{}`
`--paper-input-container-underline-focus` | Mixin applied to the underline when the input is focused | `{}`
`--paper-input-container-underline-disabled` | Mixin applied to the underline when the input is disabled | `{}`
`--paper-input-prefix` | Mixin applied to the input prefix | `{}`
`--paper-input-suffix` | Mixin applied to the input suffix | `{}`

This element is `display:block` by default, but you can set the `inline`
attribute to make it `display:inline-block`.
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,
  is: 'paper-input-container',
  properties: {
    /**
     * Set to true to disable the floating label. The label disappears when the
     * input value is not null.
     */
    noLabelFloat: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to always float the floating label.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * The attribute to listen for value changes on.
     */
    attrForValue: {
      type: String,
      value: 'bind-value'
    },

    /**
     * Set to true to auto-validate the input value when it changes.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * True if the input is invalid. This property is set automatically when the
     * input value changes if auto-validating, or when the `iron-input-validate`
     * event is heard from a child.
     */
    invalid: {
      observer: '_invalidChanged',
      type: Boolean,
      value: false
    },

    /**
     * True if the input has focus.
     */
    focused: {
      readOnly: true,
      type: Boolean,
      value: false,
      notify: true
    },
    _addons: {
      type: Array // do not set a default value here intentionally - it will be initialized
      // lazily when a distributed child is attached, which may occur before
      // configuration for this element in polyfill.

    },
    _inputHasContent: {
      type: Boolean,
      value: false
    },
    _inputSelector: {
      type: String,
      value: 'input,iron-input,textarea,.paper-input-input'
    },
    _boundOnFocus: {
      type: Function,
      value: function () {
        return this._onFocus.bind(this);
      }
    },
    _boundOnBlur: {
      type: Function,
      value: function () {
        return this._onBlur.bind(this);
      }
    },
    _boundOnInput: {
      type: Function,
      value: function () {
        return this._onInput.bind(this);
      }
    },
    _boundValueChanged: {
      type: Function,
      value: function () {
        return this._onValueChanged.bind(this);
      }
    }
  },
  listeners: {
    'addon-attached': '_onAddonAttached',
    'iron-input-validate': '_onIronInputValidate'
  },

  get _valueChangedEvent() {
    return this.attrForValue + '-changed';
  },

  get _propertyForValue() {
    return Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_6__["dashToCamelCase"])(this.attrForValue);
  },

  get _inputElement() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_5__["dom"])(this).querySelector(this._inputSelector);
  },

  get _inputElementValue() {
    return this._inputElement[this._propertyForValue] || this._inputElement.value;
  },

  ready: function () {
    // Paper-input treats a value of undefined differently at startup than
    // the rest of the time (specifically: it does not validate it at startup,
    // but it does after that. We need to track whether the first time we
    // encounter the value is basically this first time, so that we can validate
    // it correctly the rest of the time. See
    // https://github.com/PolymerElements/paper-input/issues/605
    this.__isFirstValueUpdate = true;

    if (!this._addons) {
      this._addons = [];
    }

    this.addEventListener('focus', this._boundOnFocus, true);
    this.addEventListener('blur', this._boundOnBlur, true);
  },
  attached: function () {
    if (this.attrForValue) {
      this._inputElement.addEventListener(this._valueChangedEvent, this._boundValueChanged);
    } else {
      this.addEventListener('input', this._onInput);
    } // Only validate when attached if the input already has a value.


    if (this._inputElementValue && this._inputElementValue != '') {
      this._handleValueAndAutoValidate(this._inputElement);
    } else {
      this._handleValue(this._inputElement);
    }
  },

  /** @private */
  _onAddonAttached: function (event) {
    if (!this._addons) {
      this._addons = [];
    }

    var target = event.target;

    if (this._addons.indexOf(target) === -1) {
      this._addons.push(target);

      if (this.isAttached) {
        this._handleValue(this._inputElement);
      }
    }
  },

  /** @private */
  _onFocus: function () {
    this._setFocused(true);
  },

  /** @private */
  _onBlur: function () {
    this._setFocused(false);

    this._handleValueAndAutoValidate(this._inputElement);
  },

  /** @private */
  _onInput: function (event) {
    this._handleValueAndAutoValidate(event.target);
  },

  /** @private */
  _onValueChanged: function (event) {
    var input = event.target; // Paper-input treats a value of undefined differently at startup than
    // the rest of the time (specifically: it does not validate it at startup,
    // but it does after that. If this is in fact the bootup case, ignore
    // validation, just this once.

    if (this.__isFirstValueUpdate) {
      this.__isFirstValueUpdate = false;

      if (input.value === undefined || input.value === '') {
        return;
      }
    }

    this._handleValueAndAutoValidate(event.target);
  },

  /** @private */
  _handleValue: function (inputElement) {
    var value = this._inputElementValue; // type="number" hack needed because this.value is empty until it's valid

    if (value || value === 0 || inputElement.type === 'number' && !inputElement.checkValidity()) {
      this._inputHasContent = true;
    } else {
      this._inputHasContent = false;
    }

    this.updateAddons({
      inputElement: inputElement,
      value: value,
      invalid: this.invalid
    });
  },

  /** @private */
  _handleValueAndAutoValidate: function (inputElement) {
    if (this.autoValidate && inputElement) {
      var valid;

      if (inputElement.validate) {
        valid = inputElement.validate(this._inputElementValue);
      } else {
        valid = inputElement.checkValidity();
      }

      this.invalid = !valid;
    } // Call this last to notify the add-ons.


    this._handleValue(inputElement);
  },

  /** @private */
  _onIronInputValidate: function (event) {
    this.invalid = this._inputElement.invalid;
  },

  /** @private */
  _invalidChanged: function () {
    if (this._addons) {
      this.updateAddons({
        invalid: this.invalid
      });
    }
  },

  /**
   * Call this to update the state of add-ons.
   * @param {Object} state Add-on state.
   */
  updateAddons: function (state) {
    for (var addon, index = 0; addon = this._addons[index]; index++) {
      addon.update(state);
    }
  },

  /** @private */
  _computeInputContentClass: function (noLabelFloat, alwaysFloatLabel, focused, invalid, _inputHasContent) {
    var cls = 'input-content';

    if (!noLabelFloat) {
      var label = this.querySelector('label');

      if (alwaysFloatLabel || _inputHasContent) {
        cls += ' label-is-floating'; // If the label is floating, ignore any offsets that may have been
        // applied from a prefix element.

        this.$.labelAndInputContainer.style.position = 'static';

        if (invalid) {
          cls += ' is-invalid';
        } else if (focused) {
          cls += ' label-is-highlighted';
        }
      } else {
        // When the label is not floating, it should overlap the input element.
        if (label) {
          this.$.labelAndInputContainer.style.position = 'relative';
        }

        if (invalid) {
          cls += ' is-invalid';
        }
      }
    } else {
      if (_inputHasContent) {
        cls += ' label-is-hidden';
      }

      if (invalid) {
        cls += ' is-invalid';
      }
    }

    if (focused) {
      cls += ' focused';
    }

    return cls;
  },

  /** @private */
  _computeUnderlineClass: function (focused, invalid) {
    var cls = 'underline';

    if (invalid) {
      cls += ' is-invalid';
    } else if (focused) {
      cls += ' is-highlighted';
    }

    return cls;
  },

  /** @private */
  _computeAddOnContentClass: function (focused, invalid) {
    var cls = 'add-on-content';

    if (invalid) {
      cls += ' is-invalid';
    } else if (focused) {
      cls += ' is-highlighted';
    }

    return cls;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-input/paper-input-error.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/paper-input/paper-input-error.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-input-addon-behavior.js */ "./node_modules/@polymer/paper-input/paper-input-addon-behavior.js");
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






/*
`<paper-input-error>` is an error message for use with
`<paper-input-container>`. The error is displayed when the
`<paper-input-container>` is `invalid`.

    <paper-input-container>
      <input pattern="[0-9]*">
      <paper-input-error slot="add-on">Only numbers are
allowed!</paper-input-error>
    </paper-input-container>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-invalid-color` | The foreground color of the error | `--error-color`
`--paper-input-error` | Mixin applied to the error | `{}`
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,
  is: 'paper-input-error',
  behaviors: [_paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperInputAddonBehavior"]],
  properties: {
    /**
     * True if the error is showing.
     */
    invalid: {
      readOnly: true,
      reflectToAttribute: true,
      type: Boolean
    }
  },

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function (state) {
    this._setInvalid(state.invalid);
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWNoYXItY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvciBhZGRzIGEgYG5hbWVgLCBgdmFsdWVgIGFuZCBgcmVxdWlyZWRgIHByb3BlcnRpZXMgdG9cbiAgYSBjdXN0b20gZWxlbWVudC4gSXQgbW9zdGx5IGV4aXN0cyBmb3IgYmFja2NvbXBhdGliaWxpdHkgd2l0aCBQb2x5bWVyIDEueCwgYW5kXG4gIGlzIHByb2JhYmx5IG5vdCBzb21ldGhpbmcgeW91IHdhbnQgdG8gdXNlLlxuXG4gIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAqL1xuICAgIG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGZvciB0aGlzIGVsZW1lbnQuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgdmFsdWU6IHtub3RpZnk6IHRydWUsIHR5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC4gSWYgdXNlZCBpbiBhIGZvcm0sIGFcbiAgICAgKiBjdXN0b20gZWxlbWVudCB0aGF0IHVzZXMgdGhpcyBiZWhhdmlvciBzaG91bGQgYWxzbyB1c2VcbiAgICAgKiBJcm9uVmFsaWRhdGFibGVCZWhhdmlvciBhbmQgZGVmaW5lIGEgY3VzdG9tIHZhbGlkYXRpb24gbWV0aG9kLlxuICAgICAqIE90aGVyd2lzZSwgYSBgcmVxdWlyZWRgIGVsZW1lbnQgd2lsbCBhbHdheXMgYmUgY29uc2lkZXJlZCB2YWxpZC5cbiAgICAgKiBJdCdzIGFsc28gc3Ryb25nbHkgcmVjb21tZW5kZWQgdG8gcHJvdmlkZSBhIHZpc3VhbCBzdHlsZSBmb3IgdGhlIGVsZW1lbnRcbiAgICAgKiB3aGVuIGl0cyB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcbiAgfSxcblxuICAvLyBFbXB0eSBpbXBsZW1lbnRhdGlvbnMgZm9yIGJhY2tjb21wYXRpYmlsaXR5LlxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7fSxcbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge31cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbk1ldGF9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWV0YS9pcm9uLW1ldGEuanMnO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBJcm9uTWV0YSBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IGxldCBJcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEgPSBudWxsO1xuXG4vKipcbiAqIGBVc2UgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JgIHRvIGltcGxlbWVudCBhbiBlbGVtZW50IHRoYXQgdmFsaWRhdGVzXG4gKiB1c2VyIGlucHV0LiBVc2UgdGhlIHJlbGF0ZWQgYElyb25WYWxpZGF0b3JCZWhhdmlvcmAgdG8gYWRkIGN1c3RvbVxuICogdmFsaWRhdGlvbiBsb2dpYyB0byBhbiBpcm9uLWlucHV0LlxuICpcbiAqIEJ5IGRlZmF1bHQsIGFuIGA8aXJvbi1mb3JtPmAgZWxlbWVudCB2YWxpZGF0ZXMgaXRzIGZpZWxkcyB3aGVuIHRoZSB1c2VyXG4gKiBwcmVzc2VzIHRoZSBzdWJtaXQgYnV0dG9uLiBUbyB2YWxpZGF0ZSBhIGZvcm0gaW1wZXJhdGl2ZWx5LCBjYWxsIHRoZSBmb3JtJ3NcbiAqIGB2YWxpZGF0ZSgpYCBtZXRob2QsIHdoaWNoIGluIHR1cm4gd2lsbCBjYWxsIGB2YWxpZGF0ZSgpYCBvbiBhbGwgaXRzXG4gKiBjaGlsZHJlbi4gQnkgdXNpbmcgYElyb25WYWxpZGF0YWJsZUJlaGF2aW9yYCwgeW91ciBjdXN0b20gZWxlbWVudFxuICogd2lsbCBnZXQgYSBwdWJsaWMgYHZhbGlkYXRlKClgLCB3aGljaCB3aWxsIHJldHVybiB0aGUgdmFsaWRpdHkgb2YgdGhlXG4gKiBlbGVtZW50LCBhbmQgYSBjb3JyZXNwb25kaW5nIGBpbnZhbGlkYCBhdHRyaWJ1dGUsIHdoaWNoIGNhbiBiZSB1c2VkIGZvclxuICogc3R5bGluZy5cbiAqXG4gKiBUbyBpbXBsZW1lbnQgdGhlIGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljIG9mIHlvdXIgZWxlbWVudCwgeW91IG11c3Qgb3ZlcnJpZGVcbiAqIHRoZSBwcm90ZWN0ZWQgYF9nZXRWYWxpZGl0eSgpYCBtZXRob2Qgb2YgdGhpcyBiZWhhdmlvdXIsIHJhdGhlciB0aGFuXG4gKiBgdmFsaWRhdGUoKWAuIFNlZVxuICogW3RoaXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1mb3JtL2Jsb2IvbWFzdGVyL2RlbW8vc2ltcGxlLWVsZW1lbnQuaHRtbClcbiAqIGZvciBhbiBleGFtcGxlLlxuICpcbiAqICMjIyBBY2Nlc3NpYmlsaXR5XG4gKlxuICogQ2hhbmdpbmcgdGhlIGBpbnZhbGlkYCBwcm9wZXJ0eSwgZWl0aGVyIG1hbnVhbGx5IG9yIGJ5IGNhbGxpbmcgYHZhbGlkYXRlKClgXG4gKiB3aWxsIHVwZGF0ZSB0aGUgYGFyaWEtaW52YWxpZGAgYXR0cmlidXRlLlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IgPSB7XG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIHZhbGlkYXRvciB0byB1c2UuXG4gICAgICovXG4gICAgdmFsaWRhdG9yOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGxhc3QgY2FsbCB0byBgdmFsaWRhdGVgIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgaW52YWxpZDoge1xuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyOiAnX2ludmFsaWRDaGFuZ2VkJ1xuICAgIH0sXG4gIH0sXG5cbiAgcmVnaXN0ZXJlZDogZnVuY3Rpb24oKSB7XG4gICAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhID0gbmV3IElyb25NZXRhKHt0eXBlOiAndmFsaWRhdG9yJ30pO1xuICB9LFxuXG4gIF9pbnZhbGlkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW52YWxpZCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyogUmVjb21wdXRlIHRoaXMgZXZlcnkgdGltZSBpdCdzIG5lZWRlZCwgYmVjYXVzZSB3ZSBkb24ndCBrbm93IGlmIHRoZVxuICAgKiB1bmRlcmx5aW5nIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSBoYXMgY2hhbmdlZC4gKi9cbiAgZ2V0IF92YWxpZGF0b3IoKSB7XG4gICAgcmV0dXJuIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSAmJlxuICAgICAgICBJcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEuYnlLZXkodGhpcy52YWxpZGF0b3IpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWxpZGF0b3IgYHZhbGlkYXRvcmAgZXhpc3RzLlxuICAgKi9cbiAgaGFzVmFsaWRhdG9yOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yICE9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYHZhbHVlYCBpcyB2YWxpZCwgYW5kIHVwZGF0ZXMgYGludmFsaWRgLiBJZiB5b3Ugd2FudFxuICAgKiB5b3VyIGVsZW1lbnQgdG8gaGF2ZSBjdXN0b20gdmFsaWRhdGlvbiBsb2dpYywgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kO1xuICAgKiBvdmVycmlkZSBgX2dldFZhbGlkaXR5KHZhbHVlKWAgaW5zdGVhZC5cblxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgRGVwcmVjYXRlZDogVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZC4gQnkgZGVmYXVsdCxcbiAgICogaXQgaXMgcGFzc2VkIHRvIHRoZSB2YWxpZGF0b3IncyBgdmFsaWRhdGUoKWAgZnVuY3Rpb24sIGlmIGEgdmFsaWRhdG9yIGlzXG4gICBzZXQuXG4gICAqIElmIHRoaXMgYXJndW1lbnQgaXMgbm90IHNwZWNpZmllZCwgdGhlbiB0aGUgZWxlbWVudCdzIGB2YWx1ZWAgcHJvcGVydHlcbiAgICogaXMgdXNlZCwgaWYgaXQgZXhpc3RzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuXG4gICAqL1xuICB2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBJZiB0aGlzIGlzIGFuIGVsZW1lbnQgdGhhdCBhbHNvIGhhcyBhIHZhbHVlIHByb3BlcnR5LCBhbmQgdGhlcmUgd2FzXG4gICAgLy8gbm8gZXhwbGljaXQgdmFsdWUgYXJndW1lbnQgcGFzc2VkLCB1c2UgdGhlIGVsZW1lbnQncyBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMuaW52YWxpZCA9ICF0aGlzLl9nZXRWYWxpZGl0eSh0aGlzLnZhbHVlKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmludmFsaWQgPSAhdGhpcy5fZ2V0VmFsaWRpdHkodmFsdWUpO1xuICAgIHJldHVybiAhdGhpcy5pbnZhbGlkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gIEJ5IGRlZmF1bHQsIGl0IGlzIHBhc3NlZFxuICAgKiB0byB0aGUgdmFsaWRhdG9yJ3MgYHZhbGlkYXRlKClgIGZ1bmN0aW9uLCBpZiBhIHZhbGlkYXRvciBpcyBzZXQuIFlvdVxuICAgKiBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgeW91IHdhbnQgdG8gaW1wbGVtZW50IGN1c3RvbSB2YWxpZGl0eVxuICAgKiBsb2dpYyBmb3IgeW91ciBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLlxuICAgKi9cblxuICBfZ2V0VmFsaWRpdHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRhdG9yKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGUodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gKiBVc2UgYFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JgIHRvIGltcGxlbWVudCBhbiBhZGQtb24gZm9yXG4gKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLiBBIGFkZC1vbiBhcHBlYXJzIGJlbG93IHRoZSBpbnB1dCwgYW5kIG1heSBkaXNwbGF5XG4gKiBpbmZvcm1hdGlvbiBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsdWUgYW5kIHZhbGlkaXR5IHN1Y2ggYXMgYSBjaGFyYWN0ZXIgY291bnRlclxuICogb3IgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySW5wdXRBZGRvbkJlaGF2aW9yID0ge1xuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maXJlKCdhZGRvbi1hdHRhY2hlZCcpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gY2FsbGVkIGJ5IGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgd2hlbiB0aGUgaW5wdXQgdmFsdWUgb3JcbiAgICogdmFsaWRpdHkgY2hhbmdlcy5cbiAgICogQHBhcmFtIHt7XG4gICAqICAgaW52YWxpZDogYm9vbGVhbixcbiAgICogICBpbnB1dEVsZW1lbnQ6IChFbGVtZW50fHVuZGVmaW5lZCksXG4gICAqICAgdmFsdWU6IChzdHJpbmd8dW5kZWZpbmVkKVxuICAgKiB9fSBzdGF0ZSAtXG4gICAqICAgICBpbnB1dEVsZW1lbnQ6IFRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiAgICAgdmFsdWU6IFRoZSBpbnB1dCB2YWx1ZS5cbiAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAqL1xuICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7fVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25BMTF5S2V5c0JlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuLy8gR2VuZXJhdGUgdW5pcXVlLCBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgSURzIGZvciBsYWJlbHMgKG5lZWRlZCBieVxuLy8gYXJpYS1sYWJlbGxlZGJ5KSBhbmQgYWRkLW9ucy5cbmV4cG9ydCBjb25zdCBQYXBlcklucHV0SGVscGVyID0ge307XG5cblBhcGVySW5wdXRIZWxwZXIuTmV4dExhYmVsSUQgPSAxO1xuUGFwZXJJbnB1dEhlbHBlci5OZXh0QWRkb25JRCA9IDE7XG5QYXBlcklucHV0SGVscGVyLk5leHRJbnB1dElEID0gMTtcblxuLyoqXG4gKiBVc2UgYFBhcGVySW5wdXRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGlucHV0cyB3aXRoIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuXG4gKiBUaGlzIGJlaGF2aW9yIGlzIGltcGxlbWVudGVkIGJ5IGA8cGFwZXItaW5wdXQ+YC4gSXQgZXhwb3NlcyBhIG51bWJlciBvZlxuICogcHJvcGVydGllcyBmcm9tIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgYW5kIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCBhbmRcbiAqIHRoZXkgc2hvdWxkIGJlIGJvdW5kIGluIHlvdXIgdGVtcGxhdGUuXG4gKlxuICogVGhlIGlucHV0IGVsZW1lbnQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBgaW5wdXRFbGVtZW50YCBwcm9wZXJ0eSBpZiB5b3UgbmVlZFxuICogdG8gYWNjZXNzIHByb3BlcnRpZXMgb3IgbWV0aG9kcyB0aGF0IGFyZSBub3QgZXhwb3NlZC5cbiAqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJJbnB1dEJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlcklucHV0QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqXG4gICAgICogQGV2ZW50IGNoYW5nZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIGZvciB0aGlzIGlucHV0LiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICogYDxsYWJlbD5gJ3MgY29udGVudCBhbmQgYGhpZGRlbmAgcHJvcGVydHksIGUuZy5cbiAgICAgKiBgPGxhYmVsIGhpZGRlbiQ9XCJbWyFsYWJlbF1dXCI+W1tsYWJlbF1dPC9sYWJlbD5gIGluIHlvdXIgYHRlbXBsYXRlYFxuICAgICAqL1xuICAgIGxhYmVsOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBmb3IgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAqIHRoZSBgPGlyb24taW5wdXQ+YCdzIGBiaW5kVmFsdWVgXG4gICAgICogcHJvcGVydHksIG9yIHRoZSB2YWx1ZSBwcm9wZXJ0eSBvZiB5b3VyIGlucHV0IHRoYXQgaXMgYG5vdGlmeTp0cnVlYC5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICB2YWx1ZToge25vdGlmeTogdHJ1ZSwgdHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAqIGJvdGggdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBhbmQgdGhlIGlucHV0J3MgYGRpc2FibGVkYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIGludmFsaWQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3JcbiAgICAgKiB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG8gYm90aCB0aGVcbiAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYW5kIHRoZSBpbnB1dCdzIGBpbnZhbGlkYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIElmIGBhdXRvVmFsaWRhdGVgIGlzIHRydWUsIHRoZSBgaW52YWxpZGAgYXR0cmlidXRlIGlzIG1hbmFnZWRcbiAgICAgKiBhdXRvbWF0aWNhbGx5LCB3aGljaCBjYW4gY2xvYmJlciBhdHRlbXB0cyB0byBtYW5hZ2UgaXQgbWFudWFsbHkuXG4gICAgICovXG4gICAgaW52YWxpZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIHRvIHNwZWNpZnkgdGhlIHBhdHRlcm4gYWxsb3dlZCBieSBgcHJldmVudEludmFsaWRJbnB1dGAuIElmXG4gICAgICogeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGFsbG93ZWRQYXR0ZXJuYFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGFsbG93ZWRQYXR0ZXJuOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBpbnB1dC4gVGhlIHN1cHBvcnRlZCB0eXBlcyBhcmUgdGhlXG4gICAgICogW25hdGl2ZSBpbnB1dCdzXG4gICAgICogdHlwZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXzxpbnB1dD5fdHlwZXMpLlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIChQb2x5bWVyIDEpIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIG9yXG4gICAgICogKFBvbHltZXIgMilcbiAgICAgKiBgPGlyb24taW5wdXQ+YCdzIGB0eXBlYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICB0eXBlOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhbGlzdCBvZiB0aGUgaW5wdXQgKGlmIGFueSkuIFRoaXMgc2hvdWxkIG1hdGNoIHRoZSBpZCBvZiBhblxuICAgICAqIGV4aXN0aW5nIGA8ZGF0YWxpc3Q+YC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnRcbiAgICAgKiB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dFxuICAgICAqIGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbGlzdGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbGlzdDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBBIHBhdHRlcm4gdG8gdmFsaWRhdGUgdGhlIGBpbnB1dGAgd2l0aC4gSWYgeW91J3JlIHVzaW5nXG4gICAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmRcbiAgICAgKiB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcGF0dGVybmAgcHJvcGVydHkuXG4gICAgICovXG4gICAgcGF0dGVybjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC4gSWYgeW91J3JlIHVzaW5nXG4gICAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmRcbiAgICAgKiB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVxdWlyZWRgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGUgaW5wdXQgaXMgaW52YWxpZC4gSWYgeW91J3JlIHVzaW5nXG4gICAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsXG4gICAgICogYmluZCB0aGlzIHRvIHRoZSBgPHBhcGVyLWlucHV0LWVycm9yPmAncyBjb250ZW50LCBpZiB1c2luZy5cbiAgICAgKi9cbiAgICBlcnJvck1lc3NhZ2U6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gc2hvdyBhIGNoYXJhY3RlciBjb3VudGVyLlxuICAgICAqL1xuICAgIGNoYXJDb3VudGVyOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGZsb2F0aW5nIGxhYmVsLiBJZiB5b3UncmUgdXNpbmdcbiAgICAgKiBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZFxuICAgICAqIHRoaXMgdG8gdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgbm9MYWJlbEZsb2F0YCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBub0xhYmVsRmxvYXQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IHRoZSBsYWJlbC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvclxuICAgICAqIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGVcbiAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYGFsd2F5c0Zsb2F0TGFiZWxgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUuIElmIHlvdSdyZSB1c2luZ1xuICAgICAqIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kXG4gICAgICogdGhpcyB0byB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBhdXRvVmFsaWRhdGVgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGF1dG9WYWxpZGF0ZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSB2YWxpZGF0b3IgdG8gdXNlLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICogdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGB2YWxpZGF0b3JgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHZhbGlkYXRvcjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvLyBIVE1MSW5wdXRFbGVtZW50IGF0dHJpYnV0ZXMgZm9yIGJpbmRpbmcgaWYgbmVlZGVkXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2NvbXBsZXRlYFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGF1dG9jb21wbGV0ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdvZmYnfSxcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvZm9jdXNgXG4gICAgICogcHJvcGVydHkuXG4gICAgICovXG4gICAgYXV0b2ZvY3VzOiB7dHlwZTogQm9vbGVhbiwgb2JzZXJ2ZXI6ICdfYXV0b2ZvY3VzQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGlucHV0bW9kZWBcbiAgICAgKiBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBpbnB1dG1vZGU6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbWlubGVuZ3RoYFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIG1pbmxlbmd0aDoge3R5cGU6IE51bWJlcn0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtYXhsZW5ndGhgXG4gICAgICogcHJvcGVydHkuXG4gICAgICovXG4gICAgbWF4bGVuZ3RoOiB7dHlwZTogTnVtYmVyfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIChudW1lcmljIG9yIGRhdGUtdGltZSkgaW5wdXQgdmFsdWUuXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1pbmAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbWluOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIChudW1lcmljIG9yIGRhdGUtdGltZSkgaW5wdXQgdmFsdWUuXG4gICAgICogQ2FuIGJlIGEgU3RyaW5nIChlLmcuIGBcIjIwMDAtMDEtMDFcImApIG9yIGEgTnVtYmVyIChlLmcuIGAyYCkuXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1heGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbWF4OiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIExpbWl0cyB0aGUgbnVtZXJpYyBvciBkYXRlLXRpbWUgaW5jcmVtZW50cy5cbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgc3RlcGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgc3RlcDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbmFtZWAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbmFtZToge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBBIHBsYWNlaG9sZGVyIHN0cmluZyBpbiBhZGRpdGlvbiB0byB0aGUgbGFiZWwuIElmIHRoaXMgaXMgc2V0LCB0aGUgbGFiZWxcbiAgICAgKiB3aWxsIGFsd2F5cyBmbG9hdC5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgLy8gbmVlZCB0byBzZXQgYSBkZWZhdWx0IHNvIF9jb21wdXRlQWx3YXlzRmxvYXRMYWJlbCBpcyBydW5cbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVhZG9ubHlgXG4gICAgICogcHJvcGVydHkuXG4gICAgICovXG4gICAgcmVhZG9ubHk6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHNpemVgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHNpemU6IHt0eXBlOiBOdW1iZXJ9LFxuXG4gICAgLy8gTm9uc3RhbmRhcmQgYXR0cmlidXRlcyBmb3IgYmluZGluZyBpZiBuZWVkZWRcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvY2FwaXRhbGl6ZWBcbiAgICAgKiBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgYXV0b2NhcGl0YWxpemU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnbm9uZSd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9jb3JyZWN0YFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGF1dG9jb3JyZWN0OiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ29mZid9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9zYXZlYFxuICAgICAqIHByb3BlcnR5LCB1c2VkIHdpdGggdHlwZT1zZWFyY2guXG4gICAgICovXG4gICAgYXV0b3NhdmU6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHJlc3VsdHNgIHByb3BlcnR5LFxuICAgICAqIHVzZWQgd2l0aCB0eXBlPXNlYXJjaC5cbiAgICAgKi9cbiAgICByZXN1bHRzOiB7dHlwZTogTnVtYmVyfSxcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhY2NlcHRgIHByb3BlcnR5LFxuICAgICAqIHVzZWQgd2l0aCB0eXBlPWZpbGUuXG4gICAgICovXG4gICAgYWNjZXB0OiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG11bHRpcGxlYCBwcm9wZXJ0eSxcbiAgICAgKiB1c2VkIHdpdGggdHlwZT1maWxlLlxuICAgICAqL1xuICAgIG11bHRpcGxlOiB7dHlwZTogQm9vbGVhbn0sXG5cbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICBfYXJpYURlc2NyaWJlZEJ5OiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9LFxuXG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgX2FyaWFMYWJlbGxlZEJ5OiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9LFxuXG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgX2lucHV0SWQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ31cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHtcbiAgICAnYWRkb24tYXR0YWNoZWQnOiAnX29uQWRkb25BdHRhY2hlZCcsXG4gIH0sXG5cbiAgLyoqXG4gICAqIEB0eXBlIHshT2JqZWN0fVxuICAgKi9cbiAga2V5QmluZGluZ3M6IHsnc2hpZnQrdGFiOmtleWRvd24nOiAnX29uU2hpZnRUYWJEb3duJ30sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7dGFiaW5kZXg6IDB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshSFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgaW5wdXRFbGVtZW50KCkge1xuICAgIC8vIENocm9tZSBnZW5lcmF0ZXMgYXVkaXQgZXJyb3JzIGlmIGFuIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIj4gaGFzIGFcbiAgICAvLyBkdXBsaWNhdGUgSUQsIHdoaWNoIGlzIGFsbW9zdCBhbHdheXMgdHJ1ZSBpbiBTaGFkeSBET00uIEdlbmVyYXRlXG4gICAgLy8gYSB1bmlxdWUgSUQgaW5zdGVhZC5cbiAgICBpZiAoIXRoaXMuJCkge1xuICAgICAgdGhpcy4kID0ge31cbiAgICB9XG4gICAgaWYgKCF0aGlzLiQuaW5wdXQpIHtcbiAgICAgIHRoaXMuX2dlbmVyYXRlSW5wdXRJZCgpO1xuICAgICAgdGhpcy4kLmlucHV0ID0gdGhpcy4kJCgnIycgKyB0aGlzLl9pbnB1dElkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuJC5pbnB1dDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBfZm9jdXNhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQ7XG4gIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVGhlc2UgdHlwZXMgaGF2ZSBzb21lIGRlZmF1bHQgcGxhY2Vob2xkZXIgdGV4dDsgb3ZlcmxhcHBpbmdcbiAgICAvLyB0aGUgbGFiZWwgb24gdG9wIG9mIGl0IGxvb2tzIHRlcnJpYmxlLiBBdXRvLWZsb2F0IHRoZSBsYWJlbCBpbiB0aGlzIGNhc2UuXG4gICAgdGhpcy5fdHlwZXNUaGF0SGF2ZVRleHQgPVxuICAgICAgICBbJ2RhdGUnLCAnZGF0ZXRpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnbW9udGgnLCAndGltZScsICd3ZWVrJywgJ2ZpbGUnXTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlQXJpYUxhYmVsbGVkQnkoKTtcblxuICAgIC8vIEluIHRoZSAyLjAgdmVyc2lvbiBvZiB0aGUgZWxlbWVudCwgdGhpcyBpcyBoYW5kbGVkIGluIGBvbklyb25JbnB1dFJlYWR5YCxcbiAgICAvLyBpLmUuIGFmdGVyIHRoZSBuYXRpdmUgaW5wdXQgaGFzIGZpbmlzaGVkIGRpc3RyaWJ1dGluZy4gSW4gdGhlIDEuMFxuICAgIC8vIHZlcnNpb24sIHRoZSBpbnB1dCBpcyBpbiB0aGUgc2hhZG93IHRyZWUsIHNvIGl0J3MgYWxyZWFkeSBhdmFpbGFibGUuXG4gICAgaWYgKCFQb2x5bWVyRWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudCAmJlxuICAgICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dC5pbmRleE9mKHRoaXMuaW5wdXRFbGVtZW50LnR5cGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hbHdheXNGbG9hdExhYmVsID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgX2FwcGVuZFN0cmluZ1dpdGhTcGFjZTogZnVuY3Rpb24oc3RyLCBtb3JlKSB7XG4gICAgaWYgKHN0cikge1xuICAgICAgc3RyID0gc3RyICsgJyAnICsgbW9yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gbW9yZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfSxcblxuICBfb25BZGRvbkF0dGFjaGVkOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBkb20oZXZlbnQpLnJvb3RUYXJnZXQ7XG4gICAgaWYgKHRhcmdldC5pZCkge1xuICAgICAgdGhpcy5fYXJpYURlc2NyaWJlZEJ5ID1cbiAgICAgICAgICB0aGlzLl9hcHBlbmRTdHJpbmdXaXRoU3BhY2UodGhpcy5fYXJpYURlc2NyaWJlZEJ5LCB0YXJnZXQuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWQgPSAncGFwZXItaW5wdXQtYWRkLW9uLScgKyBQYXBlcklucHV0SGVscGVyLk5leHRBZGRvbklEKys7XG4gICAgICB0YXJnZXQuaWQgPSBpZDtcbiAgICAgIHRoaXMuX2FyaWFEZXNjcmliZWRCeSA9XG4gICAgICAgICAgdGhpcy5fYXBwZW5kU3RyaW5nV2l0aFNwYWNlKHRoaXMuX2FyaWFEZXNjcmliZWRCeSwgaWQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSBpbnB1dCBlbGVtZW50IGFuZCBzZXRzIGFuIGVycm9yIHN0eWxlIGlmIG5lZWRlZC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQudmFsaWRhdGUoKTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yd2FyZCBmb2N1cyB0byBpbnB1dEVsZW1lbnQuIE92ZXJyaWRlbiBmcm9tIElyb25Db250cm9sU3RhdGUuXG4gICAqL1xuICBfZm9jdXNCbHVySGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBJcm9uQ29udHJvbFN0YXRlLl9mb2N1c0JsdXJIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuXG4gICAgLy8gRm9yd2FyZCB0aGUgZm9jdXMgdG8gdGhlIG5lc3RlZCBpbnB1dC5cbiAgICBpZiAodGhpcy5mb2N1c2VkICYmICF0aGlzLl9zaGlmdFRhYlByZXNzZWQgJiYgdGhpcy5fZm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgc2hpZnQrdGFiIGtleXByZXNzIGlzIGRldGVjdGVkIGJ5IHRoZSBtZW51LlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIGtleSBjb21iaW5hdGlvbiBldmVudC5cbiAgICovXG4gIF9vblNoaWZ0VGFiRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgb2xkVGFiSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB0aGlzLl9zaGlmdFRhYlByZXNzZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCBvbGRUYWJJbmRleCk7XG4gICAgICB0aGlzLl9zaGlmdFRhYlByZXNzZWQgPSBmYWxzZTtcbiAgICB9LCAxKTtcbiAgfSxcblxuICAvKipcbiAgICogSWYgYGF1dG9WYWxpZGF0ZWAgaXMgdHJ1ZSwgdGhlbiB2YWxpZGF0ZXMgdGhlIGVsZW1lbnQuXG4gICAqL1xuICBfaGFuZGxlQXV0b1ZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5hdXRvVmFsaWRhdGUpXG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc3RvcmVzIHRoZSBjdXJzb3IgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uIGFmdGVyIHVwZGF0aW5nIHRoZSB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1ZhbHVlIFRoZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBzYXZlZC5cbiAgICovXG4gIHVwZGF0ZVZhbHVlQW5kUHJlc2VydmVDYXJldDogZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICAvLyBOb3QgYWxsIGVsZW1lbnRzIG1pZ2h0IGhhdmUgc2VsZWN0aW9uLCBhbmQgZXZlbiBpZiB0aGV5IGhhdmUgdGhlXG4gICAgLy8gcmlnaHQgcHJvcGVydGllcywgYWNjZXNzaW5nIHRoZW0gbWlnaHQgdGhyb3cgYW4gZXhjZXB0aW9uIChsaWtlIGZvclxuICAgIC8vIDxpbnB1dCB0eXBlPW51bWJlcj4pXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAvLyBUaGUgY3Vyc29yIGF1dG9tYXRpY2FsbHkganVtcHMgdG8gdGhlIGVuZCBhZnRlciByZS1zZXR0aW5nIHRoZSB2YWx1ZSxcbiAgICAgIC8vIHNvIHJlc3RvcmUgaXQgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzdGFydDtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHN0YXJ0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIEp1c3Qgc2V0IHRoZSB2YWx1ZSBhbmQgZ2l2ZSB1cCBvbiB0aGUgY2FyZXQuXG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIF9jb21wdXRlQWx3YXlzRmxvYXRMYWJlbDogZnVuY3Rpb24oYWx3YXlzRmxvYXRMYWJlbCwgcGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gcGxhY2Vob2xkZXIgfHwgYWx3YXlzRmxvYXRMYWJlbDtcbiAgfSxcblxuICBfdXBkYXRlQXJpYUxhYmVsbGVkQnk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYWJlbCA9IGRvbSh0aGlzLnJvb3QpLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgaWYgKCFsYWJlbCkge1xuICAgICAgdGhpcy5fYXJpYUxhYmVsbGVkQnkgPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxhYmVsbGVkQnk7XG4gICAgaWYgKGxhYmVsLmlkKSB7XG4gICAgICBsYWJlbGxlZEJ5ID0gbGFiZWwuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsbGVkQnkgPSAncGFwZXItaW5wdXQtbGFiZWwtJyArIFBhcGVySW5wdXRIZWxwZXIuTmV4dExhYmVsSUQrKztcbiAgICAgIGxhYmVsLmlkID0gbGFiZWxsZWRCeTtcbiAgICB9XG4gICAgdGhpcy5fYXJpYUxhYmVsbGVkQnkgPSBsYWJlbGxlZEJ5O1xuICB9LFxuXG4gIF9nZW5lcmF0ZUlucHV0SWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5faW5wdXRJZCB8fCB0aGlzLl9pbnB1dElkID09PSAnJykge1xuICAgICAgdGhpcy5faW5wdXRJZCA9ICdpbnB1dC0nICsgUGFwZXJJbnB1dEhlbHBlci5OZXh0SW5wdXRJRCsrO1xuICAgIH1cbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gSW4gdGhlIFNoYWRvdyBET00sIHRoZSBgY2hhbmdlYCBldmVudCBpcyBub3QgbGVha2VkIGludG8gdGhlXG4gICAgLy8gYW5jZXN0b3IgdHJlZSwgc28gd2UgbXVzdCBkbyB0aGlzIG1hbnVhbGx5LlxuICAgIC8vIFNlZVxuICAgIC8vIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvc2hhZG93LyNldmVudHMtdGhhdC1hcmUtbm90LWxlYWtlZC1pbnRvLWFuY2VzdG9yLXRyZWVzLlxuICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgIHRoaXMuZmlyZShcbiAgICAgICAgICBldmVudC50eXBlLFxuICAgICAgICAgIHtzb3VyY2VFdmVudDogZXZlbnR9LFxuICAgICAgICAgIHtub2RlOiB0aGlzLCBidWJibGVzOiBldmVudC5idWJibGVzLCBjYW5jZWxhYmxlOiBldmVudC5jYW5jZWxhYmxlfSk7XG4gICAgfVxuICB9LFxuXG4gIF9hdXRvZm9jdXNDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgcmVzcGVjdCB0aGUgYXV0b2ZvY3VzIGF0dHJpYnV0ZSBpZiBpdCdzIGFwcGxpZWQgYWZ0ZXJcbiAgICAvLyB0aGUgcGFnZSBpcyBsb2FkZWQgKENocm9tZS9XZWJLaXQgZG8gcmVzcGVjdCBpdCksIHByZXZlbnRpbmcgYW5cbiAgICAvLyBhdXRvZm9jdXMgYXR0cmlidXRlIHNwZWNpZmllZCBpbiBtYXJrdXAgZnJvbSB0YWtpbmcgZWZmZWN0IHdoZW4gdGhlXG4gICAgLy8gZWxlbWVudCBpcyB1cGdyYWRlZC4gQXMgYSB3b3JrYXJvdW5kLCBpZiB0aGUgYXV0b2ZvY3VzIHByb3BlcnR5IGlzIHNldCxcbiAgICAvLyBhbmQgdGhlIGZvY3VzIGhhc24ndCBhbHJlYWR5IGJlZW4gbW92ZWQgZWxzZXdoZXJlLCB3ZSB0YWtlIGZvY3VzLlxuICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiB0aGlzLl9mb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAvLyBJbiBJRSAxMSwgdGhlIGRlZmF1bHQgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gYmUgdGhlIHBhZ2Unc1xuICAgICAgLy8gb3V0ZXJtb3N0IGh0bWwgZWxlbWVudCwgYnV0IHRoZXJlIGFyZSBhbHNvIGNhc2VzICh1bmRlciB0aGVcbiAgICAgIC8vIHBvbHlmaWxsPykgaW4gd2hpY2ggdGhlIGFjdGl2ZUVsZW1lbnQgaXMgbm90IGEgcmVhbCBIVE1MRWxlbWVudCwgYnV0XG4gICAgICAvLyBqdXN0IGEgcGxhaW4gb2JqZWN0LiBXZSBpZGVudGlmeSB0aGUgbGF0dGVyIGNhc2UgYXMgaGF2aW5nIG5vIHZhbGlkXG4gICAgICAvLyBhY3RpdmVFbGVtZW50LlxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgdmFyIGlzQWN0aXZlRWxlbWVudFZhbGlkID0gYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuXG4gICAgICAvLyBIYXMgc29tZSBvdGhlciBlbGVtZW50IGhhcyBhbHJlYWR5IHRha2VuIHRoZSBmb2N1cz9cbiAgICAgIHZhciBpc1NvbWVFbGVtZW50QWN0aXZlID0gaXNBY3RpdmVFbGVtZW50VmFsaWQgJiZcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmXG4gICAgICAgICAgYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvKiBJRSAxMSAqL1xuICAgICAgaWYgKCFpc1NvbWVFbGVtZW50QWN0aXZlKSB7XG4gICAgICAgIC8vIE5vIHNwZWNpZmljIGVsZW1lbnQgaGFzIHRha2VuIHRoZSBmb2N1cyB5ZXQsIHNvIHdlIGNhbiB0YWtlIGl0LlxuICAgICAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySW5wdXRCZWhhdmlvciA9XG4gICAgW0lyb25Db250cm9sU3RhdGUsIElyb25BMTF5S2V5c0JlaGF2aW9yLCBQYXBlcklucHV0QmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySW5wdXRBZGRvbkJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWlucHV0LWFkZG9uLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaW5wdXQtY2hhci1jb3VudGVyPmAgaXMgYSBjaGFyYWN0ZXIgY291bnRlciBmb3IgdXNlIHdpdGhcbmA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuIEl0IHNob3dzIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBlbnRlcmVkIGluIHRoZVxuaW5wdXQgYW5kIHRoZSBtYXggbGVuZ3RoIGlmIGl0IGlzIHNwZWNpZmllZC5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXI+XG4gICAgICA8aW5wdXQgbWF4bGVuZ3RoPVwiMjBcIj5cbiAgICAgIDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+PC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgbWl4aW4gaXMgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZWxlbWVudCB8IGB7fWBcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmRpcihydGwpKSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c3Bhbj5bW19jaGFyQ291bnRlclN0cl1dPC9zcGFuPlxuYCxcblxuICBpczogJ3BhcGVyLWlucHV0LWNoYXItY291bnRlcicsXG4gIGJlaGF2aW9yczogW1BhcGVySW5wdXRBZGRvbkJlaGF2aW9yXSxcbiAgcHJvcGVydGllczoge19jaGFyQ291bnRlclN0cjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICcwJ319LFxuXG4gIC8qKlxuICAgKiBUaGlzIG92ZXJyaWRlcyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGluIFBhcGVySW5wdXRBZGRvbkJlaGF2aW9yLlxuICAgKiBAcGFyYW0ge3tcbiAgICogICBpbnB1dEVsZW1lbnQ6IChFbGVtZW50fHVuZGVmaW5lZCksXG4gICAqICAgdmFsdWU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICogICBpbnZhbGlkOiBib29sZWFuXG4gICAqIH19IHN0YXRlIC1cbiAgICogICAgIGlucHV0RWxlbWVudDogVGhlIGlucHV0IGVsZW1lbnQuXG4gICAqICAgICB2YWx1ZTogVGhlIGlucHV0IHZhbHVlLlxuICAgKiAgICAgaW52YWxpZDogVHJ1ZSBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICovXG4gIHVwZGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmlucHV0RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0YXRlLnZhbHVlID0gc3RhdGUudmFsdWUgfHwgJyc7XG5cbiAgICB2YXIgY291bnRlciA9IHN0YXRlLnZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAoc3RhdGUuaW5wdXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbWF4bGVuZ3RoJykpIHtcbiAgICAgIGNvdW50ZXIgKz0gJy8nICsgc3RhdGUuaW5wdXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2hhckNvdW50ZXJTdHIgPSBjb3VudGVyO1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2Rhc2hUb0NhbWVsQ2FzZX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvY2FzZS1tYXAuanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG48Y3VzdG9tLXN0eWxlPlxuICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIj5cbiAgICBodG1sIHtcbiAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHRvIG1ha2UgYSBzdGFja2luZyBjb250ZXh0ICovXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1hbGlnbiwgYm90dG9tKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICB9O1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvY3VzdG9tLXN0eWxlPlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG5cbi8qXG5gPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGlzIGEgY29udGFpbmVyIGZvciBhIGA8bGFiZWw+YCwgYW4gYDxpcm9uLWlucHV0PmAgb3JcbmA8dGV4dGFyZWE+YCBhbmQgb3B0aW9uYWwgYWRkLW9uIGVsZW1lbnRzIHN1Y2ggYXMgYW4gZXJyb3IgbWVzc2FnZSBvciBjaGFyYWN0ZXJcbmNvdW50ZXIsIHVzZWQgdG8gaW1wbGVtZW50IE1hdGVyaWFsIERlc2lnbiB0ZXh0IGZpZWxkcy5cblxuRm9yIGV4YW1wbGU6XG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGxhYmVsIHNsb3Q9XCJsYWJlbFwiPllvdXIgbmFtZTwvbGFiZWw+XG4gICAgICA8aXJvbi1pbnB1dCBzbG90PVwiaW5wdXRcIj5cbiAgICAgICAgPGlucHV0PlxuICAgICAgPC9pcm9uLWlucHV0PlxuICAgICAgLy8gSW4gUG9seW1lciAxLjAsIHlvdSB3b3VsZCB1c2UgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIiBzbG90PVwiaW5wdXRcIj5gXG5pbnN0ZWFkIG9mIHRoZSBhYm92ZS5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuWW91IGNhbiBzdHlsZSB0aGUgbmVzdGVkIGA8aW5wdXQ+YCBob3dldmVyIHlvdSB3YW50OyBpZiB5b3Ugd2FudCBpdCB0byBsb29rIGxpa2VcbmEgTWF0ZXJpYWwgRGVzaWduIGlucHV0LCB5b3UgY2FuIHN0eWxlIGl0IHdpdGggdGhlXG4tLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGUgbWl4aW4uXG5cbkRvIG5vdCB3cmFwIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgYXJvdW5kIGVsZW1lbnRzIHRoYXQgYWxyZWFkeSBpbmNsdWRlIGl0LFxuc3VjaCBhcyBgPHBhcGVyLWlucHV0PmAuIERvaW5nIHNvIG1heSBjYXVzZSBldmVudHMgdG8gYm91bmNlIGluZmluaXRlbHkgYmV0d2VlblxudGhlIGNvbnRhaW5lciBhbmQgaXRzIGNvbnRhaW5lZCBlbGVtZW50LlxuXG4jIyMgTGlzdGVuaW5nIGZvciBpbnB1dCBjaGFuZ2VzXG5cbkJ5IGRlZmF1bHQsIGl0IGxpc3RlbnMgZm9yIGNoYW5nZXMgb24gdGhlIGBiaW5kLXZhbHVlYCBhdHRyaWJ1dGUgb24gaXRzIGNoaWxkcmVuXG5ub2RlcyBhbmQgcGVyZm9ybSB0YXNrcyBzdWNoIGFzIGF1dG8tdmFsaWRhdGluZyBhbmQgbGFiZWwgc3R5bGluZyB3aGVuIHRoZVxuYGJpbmQtdmFsdWVgIGNoYW5nZXMuIFlvdSBjYW4gY29uZmlndXJlIHRoZSBhdHRyaWJ1dGUgaXQgbGlzdGVucyB0byB3aXRoIHRoZVxuYGF0dHItZm9yLXZhbHVlYCBhdHRyaWJ1dGUuXG5cbiMjIyBVc2luZyBhIGN1c3RvbSBpbnB1dCBlbGVtZW50XG5cbllvdSBjYW4gdXNlIGEgY3VzdG9tIGlucHV0IGVsZW1lbnQgaW4gYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLCBmb3IgZXhhbXBsZVxudG8gaW1wbGVtZW50IGEgY29tcG91bmQgaW5wdXQgZmllbGQgbGlrZSBhIHNvY2lhbCBzZWN1cml0eSBudW1iZXIgaW5wdXQuIFRoZVxuY3VzdG9tIGlucHV0IGVsZW1lbnQgc2hvdWxkIGhhdmUgdGhlIGBwYXBlci1pbnB1dC1pbnB1dGAgY2xhc3MsIGhhdmUgYVxuYG5vdGlmeTp0cnVlYCB2YWx1ZSBwcm9wZXJ0eSBhbmQgb3B0aW9uYWxseSBpbXBsZW1lbnRzXG5gUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvcmAgaWYgaXQgaXMgdmFsaWRhdGFibGUuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyIGF0dHItZm9yLXZhbHVlPVwic3NuLXZhbHVlXCI+XG4gICAgICA8bGFiZWwgc2xvdD1cImxhYmVsXCI+U29jaWFsIHNlY3VyaXR5IG51bWJlcjwvbGFiZWw+XG4gICAgICA8c3NuLWlucHV0IHNsb3Q9XCJpbnB1dFwiIGNsYXNzPVwicGFwZXItaW5wdXQtaW5wdXRcIj48L3Nzbi1pbnB1dD5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuXG5JZiB5b3UncmUgdXNpbmcgYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGltcGVyYXRpdmVseSwgaXQncyBpbXBvcnRhbnQgdG8gbWFrZVxuc3VyZSB0aGF0IHlvdSBhdHRhY2ggaXRzIGNoaWxkcmVuICh0aGUgYGlyb24taW5wdXRgIGFuZCB0aGUgb3B0aW9uYWwgYGxhYmVsYClcbmJlZm9yZSB5b3UgYXR0YWNoIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGl0c2VsZiwgc28gdGhhdCBpdCBjYW4gYmUgc2V0IHVwXG5jb3JyZWN0bHkuXG5cbiMjIyBWYWxpZGF0aW9uXG5cbklmIHRoZSBgYXV0by12YWxpZGF0ZWAgYXR0cmlidXRlIGlzIHNldCwgdGhlIGlucHV0IGNvbnRhaW5lciB3aWxsIHZhbGlkYXRlIHRoZVxuaW5wdXQgYW5kIHVwZGF0ZSB0aGUgY29udGFpbmVyIHN0eWxpbmcgd2hlbiB0aGUgaW5wdXQgdmFsdWUgY2hhbmdlcy5cblxuIyMjIEFkZC1vbnNcblxuQWRkLW9ucyBhcmUgY2hpbGQgZWxlbWVudHMgb2YgYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIHdpdGggdGhlIGBhZGQtb25gXG5hdHRyaWJ1dGUgYW5kIGltcGxlbWVudHMgdGhlIGBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yYCBiZWhhdmlvci4gVGhleVxuYXJlIG5vdGlmaWVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIG9yIHZhbGlkaXR5IGNoYW5nZXMsIGFuZCBtYXkgaW1wbGVtZW50XG5mdW5jdGlvbmFsaXR5IHN1Y2ggYXMgZXJyb3IgbWVzc2FnZXMgb3IgY2hhcmFjdGVyIGNvdW50ZXJzLiBUaGV5IGFwcGVhciBhdCB0aGVcbmJvdHRvbSBvZiB0aGUgaW5wdXQuXG5cbiMjIyBQcmVmaXhlcyBhbmQgc3VmZml4ZXNcblRoZXNlIGFyZSBjaGlsZCBlbGVtZW50cyBvZiBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgd2l0aCB0aGUgYHByZWZpeGBcbm9yIGBzdWZmaXhgIGF0dHJpYnV0ZSwgYW5kIGFyZSBkaXNwbGF5ZWQgaW5saW5lIHdpdGggdGhlIGlucHV0LCBiZWZvcmUgb3IgYWZ0ZXIuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGRpdiBzbG90PVwicHJlZml4XCI+JDwvZGl2PlxuICAgICAgPGxhYmVsIHNsb3Q9XCJsYWJlbFwiPlRvdGFsPC9sYWJlbD5cbiAgICAgIDxpcm9uLWlucHV0IHNsb3Q9XCJpbnB1dFwiPlxuICAgICAgICA8aW5wdXQ+XG4gICAgICA8L2lyb24taW5wdXQ+XG4gICAgICAvLyBJbiBQb2x5bWVyIDEuMCwgeW91IHdvdWxkIHVzZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiIHNsb3Q9XCJpbnB1dFwiPmBcbmluc3RlYWQgb2YgdGhlIGFib3ZlLiA8cGFwZXItaWNvbi1idXR0b24gc2xvdD1cInN1ZmZpeFwiXG5pY29uPVwiY2xlYXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yYCB8IExhYmVsIGFuZCB1bmRlcmxpbmUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGZvY3VzZWQgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvcmAgfCBMYWJlbCBhbmQgdW5kZXJsaW5lIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3JgIHwgTGFiZWwgYW5kIHVuZGVybGluZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBpcyBpbnZhbGlkIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtY29sb3JgIHwgSW5wdXQgZm9yZWdyb3VuZCBjb2xvciB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY29udGFpbmVyIHdoZW4gaXQncyBkaXNhYmxlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mb2N1c2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZsb2F0aW5nYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHdoZW4gZmxvYXRpbmcgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtYWxpZ25gIHwgVGhlIHZlcnRpY2FsLWFsaWduIHByb3BlcnR5IG9mIHRoZSBpbnB1dCB8IGBib3R0b21gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWZvY3VzYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHdoZW4gZm9jdXNlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1pbnZhbGlkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHdoZW4gaW52YWxpZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtc3Bpbm5lcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB3ZWJraXQgc3Bpbm5lciB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2xlYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgd2Via2l0IGNsZWFyIGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB3ZWJraXQgY2FsZW5kYXIgcGlja2VyIGluZGljYXRvciB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBJbnRlcm5ldCBFeHBsb3JlciBjbGVhciBidXR0b24gfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHVuZGVybGluZSB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdW5kZXJsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHVuZGVybGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LXByZWZpeGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCBwcmVmaXggfCBge31gXG5gLS1wYXBlci1pbnB1dC1zdWZmaXhgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgc3VmZml4IHwgYHt9YFxuXG5UaGlzIGVsZW1lbnQgaXMgYGRpc3BsYXk6YmxvY2tgIGJ5IGRlZmF1bHQsIGJ1dCB5b3UgY2FuIHNldCB0aGUgYGlubGluZWBcbmF0dHJpYnV0ZSB0byBtYWtlIGl0IGBkaXNwbGF5OmlubGluZS1ibG9ja2AuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW5saW5lXSkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDAuMzM7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZmxvYXRlZC1sYWJlbC1wbGFjZWhvbGRlciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgIH1cblxuICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5mb2N1c2VkLWxpbmUge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLDEsMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLDEsMSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1mb2N1cztcbiAgICAgIH1cblxuICAgICAgLnVuZGVybGluZS5pcy1oaWdobGlnaHRlZCAuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRyYW5zaXRpb24tZWFzaW5nO1xuICAgICAgfVxuXG4gICAgICAudW5kZXJsaW5lLmlzLWludmFsaWQgLmZvY3VzZWQtbGluZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXM7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10cmFuc2l0aW9uLWVhc2luZztcbiAgICAgIH1cblxuICAgICAgLnVuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgLnVuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1hdXRvO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtcmVsYXRpdmU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzLCB3aWR0aCAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCB3aWR0aCAwLjI1cztcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgICAgIC8qIEZpeCBmb3Igc2FmYXJpIG5vdCBmb2N1c2luZyAwLWhlaWdodCBkYXRlL3RpbWUgaW5wdXRzIHdpdGggLXdlYmtpdC1hcHBlcmFuY2U6IG5vbmU7ICovXG4gICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10cmFuc2l0aW9uLWVhc2luZztcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc1JSkgc2NhbGUoMC43NSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzUlKSBzY2FsZSgwLjc1KTtcblxuICAgICAgICAvKiBTaW5jZSB3ZSBzY2FsZSB0byA3NS8xMDAgb2YgdGhlIHNpemUsIHdlIGFjdHVhbGx5IGhhdmUgMTAwLzc1IG9mIHRoZVxuICAgICAgICBvcmlnaW5hbCBzcGFjZSBub3cgYXZhaWxhYmxlICovXG4gICAgICAgIHdpZHRoOiAxMzMlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmRpcihydGwpKSAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgOmhvc3QoOmRpcihydGwpKSAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWdobGlnaHRlZCA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlnaGxpZ2h0ZWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWRkZW4gOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZGRlbiA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpcm9uLWlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICAgIC8qIFRoZSBhcHBseSBzaGltIGRvZXNuJ3QgYXBwbHkgdGhlIG5lc3RlZCBjb2xvciBjdXN0b20gcHJvcGVydHksXG4gICAgICAgICAgc28gd2UgaGF2ZSB0byByZS1hcHBseSBpdCBoZXJlLiAqL1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0O1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtc3Bpbm5lcjtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQoaXJvbi1pbnB1dCksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZChpcm9uLWF1dG9ncm93LXRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1pbnB1dCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGlyb24taW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtaW5wdXQpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWludmFsaWQ7XG4gICAgICB9XG5cbiAgICAgIC5wcmVmaXggOjpzbG90dGVkKCopIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LW5vbmU7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LXByZWZpeDtcbiAgICAgIH1cblxuICAgICAgLnN1ZmZpeCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1zdWZmaXg7XG4gICAgICB9XG5cbiAgICAgIC8qIEZpcmVmb3ggc2V0cyBhIG1pbi13aWR0aCBvbiB0aGUgaW5wdXQsIHdoaWNoIGNhbiBjYXVzZSBsYXlvdXQgaXNzdWVzICovXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpIHtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQodGV4dGFyZWEpIHtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYWRkLW9uLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtb24tY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgLmFkZC1vbi1jb250ZW50LmlzLWhpZ2hsaWdodGVkIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZsb2F0ZWQtbGFiZWwtcGxhY2Vob2xkZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBoaWRkZW49XCJbW25vTGFiZWxGbG9hdF1dXCI+Jm5ic3A7PC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmVmaXhcIj48c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90Pjwvc3Bhbj5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW19jb21wdXRlSW5wdXRDb250ZW50Q2xhc3Mobm9MYWJlbEZsb2F0LGFsd2F5c0Zsb2F0TGFiZWwsZm9jdXNlZCxpbnZhbGlkLF9pbnB1dEhhc0NvbnRlbnQpXV1cIiBpZD1cImxhYmVsQW5kSW5wdXRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+PC9zbG90PlxuICAgICAgICA8c2xvdCBuYW1lPVwiaW5wdXRcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWZmaXhcIj48c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90Pjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3MkPVwiW1tfY29tcHV0ZVVuZGVybGluZUNsYXNzKGZvY3VzZWQsaW52YWxpZCldXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInVuZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzJD1cIltbX2NvbXB1dGVBZGRPbkNvbnRlbnRDbGFzcyhmb2N1c2VkLGludmFsaWQpXV1cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJhZGQtb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItaW5wdXQtY29udGFpbmVyJyxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuIFRoZSBsYWJlbCBkaXNhcHBlYXJzIHdoZW4gdGhlXG4gICAgICogaW5wdXQgdmFsdWUgaXMgbm90IG51bGwuXG4gICAgICovXG4gICAgbm9MYWJlbEZsb2F0OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICAgICovXG4gICAgYWx3YXlzRmxvYXRMYWJlbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXR0cmlidXRlIHRvIGxpc3RlbiBmb3IgdmFsdWUgY2hhbmdlcyBvbi5cbiAgICAgKi9cbiAgICBhdHRyRm9yVmFsdWU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnYmluZC12YWx1ZSd9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUgd2hlbiBpdCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIGF1dG9WYWxpZGF0ZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBpbnB1dCBpcyBpbnZhbGlkLiBUaGlzIHByb3BlcnR5IGlzIHNldCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlXG4gICAgICogaW5wdXQgdmFsdWUgY2hhbmdlcyBpZiBhdXRvLXZhbGlkYXRpbmcsIG9yIHdoZW4gdGhlIGBpcm9uLWlucHV0LXZhbGlkYXRlYFxuICAgICAqIGV2ZW50IGlzIGhlYXJkIGZyb20gYSBjaGlsZC5cbiAgICAgKi9cbiAgICBpbnZhbGlkOiB7b2JzZXJ2ZXI6ICdfaW52YWxpZENoYW5nZWQnLCB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgaW5wdXQgaGFzIGZvY3VzLlxuICAgICAqL1xuICAgIGZvY3VzZWQ6IHtyZWFkT25seTogdHJ1ZSwgdHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBub3RpZnk6IHRydWV9LFxuXG4gICAgX2FkZG9uczoge1xuICAgICAgdHlwZTogQXJyYXlcbiAgICAgIC8vIGRvIG5vdCBzZXQgYSBkZWZhdWx0IHZhbHVlIGhlcmUgaW50ZW50aW9uYWxseSAtIGl0IHdpbGwgYmUgaW5pdGlhbGl6ZWRcbiAgICAgIC8vIGxhemlseSB3aGVuIGEgZGlzdHJpYnV0ZWQgY2hpbGQgaXMgYXR0YWNoZWQsIHdoaWNoIG1heSBvY2N1ciBiZWZvcmVcbiAgICAgIC8vIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgZWxlbWVudCBpbiBwb2x5ZmlsbC5cbiAgICB9LFxuXG4gICAgX2lucHV0SGFzQ29udGVudDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBfaW5wdXRTZWxlY3RvcjpcbiAgICAgICAge3R5cGU6IFN0cmluZywgdmFsdWU6ICdpbnB1dCxpcm9uLWlucHV0LHRleHRhcmVhLC5wYXBlci1pbnB1dC1pbnB1dCd9LFxuXG4gICAgX2JvdW5kT25Gb2N1czoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9ib3VuZE9uQmx1cjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2JvdW5kT25JbnB1dDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbklucHV0LmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9ib3VuZFZhbHVlQ2hhbmdlZDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vblZhbHVlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHtcbiAgICAnYWRkb24tYXR0YWNoZWQnOiAnX29uQWRkb25BdHRhY2hlZCcsXG4gICAgJ2lyb24taW5wdXQtdmFsaWRhdGUnOiAnX29uSXJvbklucHV0VmFsaWRhdGUnXG4gIH0sXG5cbiAgZ2V0IF92YWx1ZUNoYW5nZWRFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyRm9yVmFsdWUgKyAnLWNoYW5nZWQnO1xuICB9LFxuXG4gIGdldCBfcHJvcGVydHlGb3JWYWx1ZSgpIHtcbiAgICByZXR1cm4gZGFzaFRvQ2FtZWxDYXNlKHRoaXMuYXR0ckZvclZhbHVlKTtcbiAgfSxcblxuICBnZXQgX2lucHV0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZG9tKHRoaXMpLnF1ZXJ5U2VsZWN0b3IodGhpcy5faW5wdXRTZWxlY3Rvcik7XG4gIH0sXG5cbiAgZ2V0IF9pbnB1dEVsZW1lbnRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50W3RoaXMuX3Byb3BlcnR5Rm9yVmFsdWVdIHx8XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudC52YWx1ZTtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgLy8gUGFwZXItaW5wdXQgdHJlYXRzIGEgdmFsdWUgb2YgdW5kZWZpbmVkIGRpZmZlcmVudGx5IGF0IHN0YXJ0dXAgdGhhblxuICAgIC8vIHRoZSByZXN0IG9mIHRoZSB0aW1lIChzcGVjaWZpY2FsbHk6IGl0IGRvZXMgbm90IHZhbGlkYXRlIGl0IGF0IHN0YXJ0dXAsXG4gICAgLy8gYnV0IGl0IGRvZXMgYWZ0ZXIgdGhhdC4gV2UgbmVlZCB0byB0cmFjayB3aGV0aGVyIHRoZSBmaXJzdCB0aW1lIHdlXG4gICAgLy8gZW5jb3VudGVyIHRoZSB2YWx1ZSBpcyBiYXNpY2FsbHkgdGhpcyBmaXJzdCB0aW1lLCBzbyB0aGF0IHdlIGNhbiB2YWxpZGF0ZVxuICAgIC8vIGl0IGNvcnJlY3RseSB0aGUgcmVzdCBvZiB0aGUgdGltZS4gU2VlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1pbnB1dC9pc3N1ZXMvNjA1XG4gICAgdGhpcy5fX2lzRmlyc3RWYWx1ZVVwZGF0ZSA9IHRydWU7XG4gICAgaWYgKCF0aGlzLl9hZGRvbnMpIHtcbiAgICAgIHRoaXMuX2FkZG9ucyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fYm91bmRPbkZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9ib3VuZE9uQmx1ciwgdHJ1ZSk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmF0dHJGb3JWYWx1ZSkge1xuICAgICAgdGhpcy5faW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VkRXZlbnQsIHRoaXMuX2JvdW5kVmFsdWVDaGFuZ2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQpO1xuICAgIH1cblxuICAgIC8vIE9ubHkgdmFsaWRhdGUgd2hlbiBhdHRhY2hlZCBpZiB0aGUgaW5wdXQgYWxyZWFkeSBoYXMgYSB2YWx1ZS5cbiAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50VmFsdWUgJiYgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgIT0gJycpIHtcbiAgICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhbmRsZVZhbHVlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfb25BZGRvbkF0dGFjaGVkOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5fYWRkb25zKSB7XG4gICAgICB0aGlzLl9hZGRvbnMgPSBbXTtcbiAgICB9XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGhpcy5fYWRkb25zLmluZGV4T2YodGFyZ2V0KSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX2FkZG9ucy5wdXNoKHRhcmdldCk7XG4gICAgICBpZiAodGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVZhbHVlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfb25Gb2N1czogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX29uQmx1cjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX29uSW5wdXQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUoZXZlbnQudGFyZ2V0KTtcbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX29uVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBpbnB1dCA9IGV2ZW50LnRhcmdldDtcblxuICAgIC8vIFBhcGVyLWlucHV0IHRyZWF0cyBhIHZhbHVlIG9mIHVuZGVmaW5lZCBkaWZmZXJlbnRseSBhdCBzdGFydHVwIHRoYW5cbiAgICAvLyB0aGUgcmVzdCBvZiB0aGUgdGltZSAoc3BlY2lmaWNhbGx5OiBpdCBkb2VzIG5vdCB2YWxpZGF0ZSBpdCBhdCBzdGFydHVwLFxuICAgIC8vIGJ1dCBpdCBkb2VzIGFmdGVyIHRoYXQuIElmIHRoaXMgaXMgaW4gZmFjdCB0aGUgYm9vdHVwIGNhc2UsIGlnbm9yZVxuICAgIC8vIHZhbGlkYXRpb24sIGp1c3QgdGhpcyBvbmNlLlxuICAgIGlmICh0aGlzLl9faXNGaXJzdFZhbHVlVXBkYXRlKSB7XG4gICAgICB0aGlzLl9faXNGaXJzdFZhbHVlVXBkYXRlID0gZmFsc2U7XG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKGV2ZW50LnRhcmdldCk7XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oaW5wdXRFbGVtZW50KSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5faW5wdXRFbGVtZW50VmFsdWU7XG5cbiAgICAvLyB0eXBlPVwibnVtYmVyXCIgaGFjayBuZWVkZWQgYmVjYXVzZSB0aGlzLnZhbHVlIGlzIGVtcHR5IHVudGlsIGl0J3MgdmFsaWRcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDAgfHxcbiAgICAgICAgKGlucHV0RWxlbWVudC50eXBlID09PSAnbnVtYmVyJyAmJiAhaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkpIHtcbiAgICAgIHRoaXMuX2lucHV0SGFzQ29udGVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lucHV0SGFzQ29udGVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQWRkb25zKFxuICAgICAgICB7aW5wdXRFbGVtZW50OiBpbnB1dEVsZW1lbnQsIHZhbHVlOiB2YWx1ZSwgaW52YWxpZDogdGhpcy5pbnZhbGlkfSk7XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZTogZnVuY3Rpb24oaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuYXV0b1ZhbGlkYXRlICYmIGlucHV0RWxlbWVudCkge1xuICAgICAgdmFyIHZhbGlkO1xuXG4gICAgICBpZiAoaW5wdXRFbGVtZW50LnZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkID0gaW5wdXRFbGVtZW50LnZhbGlkYXRlKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkID0gaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW52YWxpZCA9ICF2YWxpZDtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoaXMgbGFzdCB0byBub3RpZnkgdGhlIGFkZC1vbnMuXG4gICAgdGhpcy5faGFuZGxlVmFsdWUoaW5wdXRFbGVtZW50KTtcbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX29uSXJvbklucHV0VmFsaWRhdGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5pbnZhbGlkID0gdGhpcy5faW5wdXRFbGVtZW50LmludmFsaWQ7XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9pbnZhbGlkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2FkZG9ucykge1xuICAgICAgdGhpcy51cGRhdGVBZGRvbnMoe2ludmFsaWQ6IHRoaXMuaW52YWxpZH0pO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2FsbCB0aGlzIHRvIHVwZGF0ZSB0aGUgc3RhdGUgb2YgYWRkLW9ucy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIEFkZC1vbiBzdGF0ZS5cbiAgICovXG4gIHVwZGF0ZUFkZG9uczogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBmb3IgKHZhciBhZGRvbiwgaW5kZXggPSAwOyBhZGRvbiA9IHRoaXMuX2FkZG9uc1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgIGFkZG9uLnVwZGF0ZShzdGF0ZSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfY29tcHV0ZUlucHV0Q29udGVudENsYXNzOiBmdW5jdGlvbihcbiAgICAgIG5vTGFiZWxGbG9hdCwgYWx3YXlzRmxvYXRMYWJlbCwgZm9jdXNlZCwgaW52YWxpZCwgX2lucHV0SGFzQ29udGVudCkge1xuICAgIHZhciBjbHMgPSAnaW5wdXQtY29udGVudCc7XG4gICAgaWYgKCFub0xhYmVsRmxvYXQpIHtcbiAgICAgIHZhciBsYWJlbCA9IHRoaXMucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcblxuICAgICAgaWYgKGFsd2F5c0Zsb2F0TGFiZWwgfHwgX2lucHV0SGFzQ29udGVudCkge1xuICAgICAgICBjbHMgKz0gJyBsYWJlbC1pcy1mbG9hdGluZyc7XG4gICAgICAgIC8vIElmIHRoZSBsYWJlbCBpcyBmbG9hdGluZywgaWdub3JlIGFueSBvZmZzZXRzIHRoYXQgbWF5IGhhdmUgYmVlblxuICAgICAgICAvLyBhcHBsaWVkIGZyb20gYSBwcmVmaXggZWxlbWVudC5cbiAgICAgICAgdGhpcy4kLmxhYmVsQW5kSW5wdXRDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgICB9IGVsc2UgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgICBjbHMgKz0gJyBsYWJlbC1pcy1oaWdobGlnaHRlZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdoZW4gdGhlIGxhYmVsIGlzIG5vdCBmbG9hdGluZywgaXQgc2hvdWxkIG92ZXJsYXAgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgIHRoaXMuJC5sYWJlbEFuZElucHV0Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChfaW5wdXRIYXNDb250ZW50KSB7XG4gICAgICAgIGNscyArPSAnIGxhYmVsLWlzLWhpZGRlbic7XG4gICAgICB9XG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgIGNscyArPSAnIGZvY3VzZWQnO1xuICAgIH1cbiAgICByZXR1cm4gY2xzO1xuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfY29tcHV0ZVVuZGVybGluZUNsYXNzOiBmdW5jdGlvbihmb2N1c2VkLCBpbnZhbGlkKSB7XG4gICAgdmFyIGNscyA9ICd1bmRlcmxpbmUnO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICB9IGVsc2UgaWYgKGZvY3VzZWQpIHtcbiAgICAgIGNscyArPSAnIGlzLWhpZ2hsaWdodGVkJ1xuICAgIH1cbiAgICByZXR1cm4gY2xzO1xuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfY29tcHV0ZUFkZE9uQ29udGVudENsYXNzOiBmdW5jdGlvbihmb2N1c2VkLCBpbnZhbGlkKSB7XG4gICAgdmFyIGNscyA9ICdhZGQtb24tY29udGVudCc7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgIH0gZWxzZSBpZiAoZm9jdXNlZCkge1xuICAgICAgY2xzICs9ICcgaXMtaGlnaGxpZ2h0ZWQnXG4gICAgfVxuICAgIHJldHVybiBjbHM7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlcklucHV0QWRkb25CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWlucHV0LWVycm9yPmAgaXMgYW4gZXJyb3IgbWVzc2FnZSBmb3IgdXNlIHdpdGhcbmA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuIFRoZSBlcnJvciBpcyBkaXNwbGF5ZWQgd2hlbiB0aGVcbmA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaXMgYGludmFsaWRgLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxpbnB1dCBwYXR0ZXJuPVwiWzAtOV0qXCI+XG4gICAgICA8cGFwZXItaW5wdXQtZXJyb3Igc2xvdD1cImFkZC1vblwiPk9ubHkgbnVtYmVycyBhcmVcbmFsbG93ZWQhPC9wYXBlci1pbnB1dC1lcnJvcj5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yYCB8IFRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSBlcnJvciB8IGAtLWVycm9yLWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtZXJyb3JgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZXJyb3IgfCBge31gXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWVycm9yO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9XG5cbiAgICAgICNhMTF5V3JhcHBlciB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSAjYTExeVdyYXBwZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8IS0tXG4gICAgSWYgdGhlIHBhcGVyLWlucHV0LWVycm9yIGVsZW1lbnQgaXMgZGlyZWN0bHkgcmVmZXJlbmNlZCBieSBhblxuICAgIFxcYGFyaWEtZGVzY3JpYmVkYnlcXGAgYXR0cmlidXRlLCBzdWNoIGFzIHdoZW4gdXNlZCBhcyBhIHBhcGVyLWlucHV0IGFkZC1vbixcbiAgICB0aGVuIGFwcGx5aW5nIFxcYHZpc2liaWxpdHk6IGhpZGRlbjtcXGAgdG8gdGhlIHBhcGVyLWlucHV0LWVycm9yIGVsZW1lbnQgaXRzZWxmXG4gICAgZG9lcyBub3QgaGlkZSB0aGUgZXJyb3IuXG5cbiAgICBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOlxuICAgIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9hY2NuYW1lLTEuMS8jbWFwcGluZ19hZGRpdGlvbmFsX25kX2Rlc2NyaXB0aW9uXG4gICAgLS0+XG4gICAgPGRpdiBpZD1cImExMXlXcmFwcGVyXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItaW5wdXQtZXJyb3InLFxuICBiZWhhdmlvcnM6IFtQYXBlcklucHV0QWRkb25CZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGVycm9yIGlzIHNob3dpbmcuXG4gICAgICovXG4gICAgaW52YWxpZDoge3JlYWRPbmx5OiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsIHR5cGU6IEJvb2xlYW59XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgb3ZlcnJpZGVzIHRoZSB1cGRhdGUgZnVuY3Rpb24gaW4gUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3IuXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgIGlucHV0RWxlbWVudDogKEVsZW1lbnR8dW5kZWZpbmVkKSxcbiAgICogICB2YWx1ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgKiAgIGludmFsaWQ6IGJvb2xlYW5cbiAgICogfX0gc3RhdGUgLVxuICAgKiAgICAgaW5wdXRFbGVtZW50OiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAqICAgICBpbnZhbGlkOiBUcnVlIGlmIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgKi9cbiAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIHRoaXMuX3NldEludmFsaWQoc3RhdGUuaW52YWxpZCk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBOzs7Ozs7Ozs7QUFRQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFwQkE7QUF1QkE7QUFDQTtBQUNBO0FBM0JBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7O0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVEE7QUFrQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbkZBOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFqQkE7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7Ozs7OztBQU1BOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUF6UUE7QUE0UUE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlkQTtBQWllQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3JnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQXVCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcERBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUJBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQW1QQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFuRUE7QUEyRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXpoQkE7Ozs7Ozs7Ozs7OztBQzlKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUEyQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBbEVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
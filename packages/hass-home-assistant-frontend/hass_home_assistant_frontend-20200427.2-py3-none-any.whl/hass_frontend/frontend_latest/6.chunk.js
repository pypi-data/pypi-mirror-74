(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_input_paper_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input.js */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button.js */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _paper_dropdown_menu_icons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paper-dropdown-menu-icons.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js");
/* harmony import */ var _paper_dropdown_menu_shared_styles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paper-dropdown-menu-shared-styles.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
Material design: [Dropdown
menus](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)

`paper-dropdown-menu` is similar to a native browser select element.
`paper-dropdown-menu` works with selectable content. The currently selected
item is displayed in the control. If no item is selected, the `label` is
displayed instead.

Example:

    <paper-dropdown-menu label="Your favourite pastry">
      <paper-listbox slot="dropdown-content">
        <paper-item>Croissant</paper-item>
        <paper-item>Donut</paper-item>
        <paper-item>Financier</paper-item>
        <paper-item>Madeleine</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>

This example renders a dropdown menu with 4 options.

The child element with the slot `dropdown-content` is used as the dropdown
menu. This can be a [`paper-listbox`](paper-listbox), or any other or
element that acts like an [`iron-selector`](iron-selector).

Specifically, the menu child must fire an
[`iron-select`](iron-selector#event-iron-select) event when one of its
children is selected, and an
[`iron-deselect`](iron-selector#event-iron-deselect) event when a child is
deselected. The selected or deselected item must be passed as the event's
`detail.item` property.

Applications can listen for the `iron-select` and `iron-deselect` events
to react when options are selected and deselected.

### Styling

The following custom properties and mixins are also available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dropdown-menu` | A mixin that is applied to the element host | `{}`
`--paper-dropdown-menu-disabled` | A mixin that is applied to the element host when disabled | `{}`
`--paper-dropdown-menu-ripple` | A mixin that is applied to the internal ripple | `{}`
`--paper-dropdown-menu-button` | A mixin that is applied to the internal menu button | `{}`
`--paper-dropdown-menu-input` | A mixin that is applied to the internal paper input | `{}`
`--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`

You can also use any of the `paper-input-container` and `paper-menu-button`
style mixins and custom properties to style the internal input and menu button
respectively.

@group Paper Elements
@element paper-dropdown-menu
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__["html"]`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,
  is: 'paper-dropdown-menu',
  behaviors: [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__["IronControlState"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__["IronValidatableBehavior"]],
  properties: {
    /**
     * The derived "label" of the currently selected item. This value
     * is the `label` property on the selected item if set, or else the
     * trimmed text content of the selected item.
     */
    selectedItemLabel: {
      type: String,
      notify: true,
      readOnly: true
    },

    /**
     * The last selected item. An item is selected if the dropdown menu has
     * a child with slot `dropdown-content`, and that child triggers an
     * `iron-select` event with the selected `item` in the `detail`.
     *
     * @type {?Object}
     */
    selectedItem: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * The value for this element that will be used when submitting in
     * a form. It reflects the value of `selectedItemLabel`. If set directly,
     * it will not update the `selectedItemLabel` value.
     */
    value: {
      type: String,
      notify: true
    },

    /**
     * The label for the dropdown.
     */
    label: {
      type: String
    },

    /**
     * The placeholder for the dropdown.
     */
    placeholder: {
      type: String
    },

    /**
     * The error message to display when invalid.
     */
    errorMessage: {
      type: String
    },

    /**
     * True if the dropdown is open. Otherwise, false.
     */
    opened: {
      type: Boolean,
      notify: true,
      value: false,
      observer: '_openedChanged'
    },

    /**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     */
    allowOutsideScroll: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable the floating label. Bind this to the
     * `<paper-input-container>`'s `noLabelFloat` property.
     */
    noLabelFloat: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * Set to true to always float the label. Bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */
    noAnimations: {
      type: Boolean,
      value: false
    },

    /**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */
    horizontalAlign: {
      type: String,
      value: 'right'
    },

    /**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */
    verticalAlign: {
      type: String,
      value: 'top'
    },

    /**
     * Overrides the vertical offset computed in
     * _computeMenuVerticalOffset.
     */
    verticalOffset: Number,

    /**
     * If true, the `horizontalAlign` and `verticalAlign` properties will
     * be considered preferences instead of strict requirements when
     * positioning the dropdown and may be changed if doing so reduces
     * the area of the dropdown falling outside of `fitInto`.
     */
    dynamicAlign: {
      type: Boolean
    },

    /**
     * Whether focus should be restored to the dropdown when the menu closes.
     */
    restoreFocusOnClose: {
      type: Boolean,
      value: true
    }
  },
  listeners: {
    'tap': '_onTap'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'up down': 'open',
    'esc': 'close'
  },
  hostAttributes: {
    role: 'combobox',
    'aria-autocomplete': 'none',
    'aria-haspopup': 'true'
  },
  observers: ['_selectedItemChanged(selectedItem)'],
  attached: function () {
    // NOTE(cdata): Due to timing, a preselected value in a `IronSelectable`
    // child will cause an `iron-select` event to fire while the element is
    // still in a `DocumentFragment`. This has the effect of causing
    // handlers not to fire. So, we double check this value on attached:
    var contentElement = this.contentElement;

    if (contentElement && contentElement.selectedItem) {
      this._setSelectedItem(contentElement.selectedItem);
    }
  },

  /**
   * The content element that is contained by the dropdown menu, if any.
   */
  get contentElement() {
    // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__["dom"])(this.$.content).getDistributedNodes();

    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  /**
   * Show the dropdown content.
   */
  open: function () {
    this.$.menuButton.open();
  },

  /**
   * Hide the dropdown content.
   */
  close: function () {
    this.$.menuButton.close();
  },

  /**
   * A handler that is called when `iron-select` is fired.
   *
   * @param {CustomEvent} event An `iron-select` event.
   */
  _onIronSelect: function (event) {
    this._setSelectedItem(event.detail.item);
  },

  /**
   * A handler that is called when `iron-deselect` is fired.
   *
   * @param {CustomEvent} event An `iron-deselect` event.
   */
  _onIronDeselect: function (event) {
    this._setSelectedItem(null);
  },

  /**
   * A handler that is called when the dropdown is tapped.
   *
   * @param {CustomEvent} event A tap event.
   */
  _onTap: function (event) {
    if (_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__["findOriginalTarget"](event) === this) {
      this.open();
    }
  },

  /**
   * Compute the label for the dropdown given a selected item.
   *
   * @param {Element} selectedItem A selected Element item, with an
   * optional `label` property.
   */
  _selectedItemChanged: function (selectedItem) {
    var value = '';

    if (!selectedItem) {
      value = '';
    } else {
      value = selectedItem.label || selectedItem.getAttribute('label') || selectedItem.textContent.trim();
    }

    this.value = value;

    this._setSelectedItemLabel(value);
  },

  /**
   * Compute the vertical offset of the menu based on the value of
   * `noLabelFloat`.
   *
   * @param {boolean} noLabelFloat True if the label should not float
   * @param {number=} opt_verticalOffset Optional offset from the user
   * above the input, otherwise false.
   */
  _computeMenuVerticalOffset: function (noLabelFloat, opt_verticalOffset) {
    // Override offset if it's passed from the user.
    if (opt_verticalOffset) {
      return opt_verticalOffset;
    } // NOTE(cdata): These numbers are somewhat magical because they are
    // derived from the metrics of elements internal to `paper-input`'s
    // template. The metrics will change depending on whether or not the
    // input has a floating label.


    return noLabelFloat ? -4 : 8;
  },

  /**
   * Returns false if the element is required and does not have a selection,
   * and true otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false, or if `required` is true
   * and the element has a valid selection.
   */
  _getValidity: function (_value) {
    return this.disabled || !this.required || this.required && !!this.value;
  },
  _openedChanged: function () {
    var openState = this.opened ? 'true' : 'false';
    var e = this.contentElement;

    if (e) {
      e.setAttribute('aria-expanded', openState);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbnNldC1zdmcvaXJvbi1pY29uc2V0LXN2Zy5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgYDxpcm9uLWljb25zZXQtc3ZnIG5hbWU9XCJwYXBlci1kcm9wZG93bi1tZW51XCIgc2l6ZT1cIjI0XCI+XG48c3ZnPjxkZWZzPlxuPGcgaWQ9XCJhcnJvdy1kcm9wLWRvd25cIj48cGF0aCBkPVwiTTcgMTBsNSA1IDUtNXpcIj48L3BhdGg+PC9nPlxuPC9kZWZzPjwvc3ZnPlxuPC9pcm9uLWljb25zZXQtc3ZnPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgYDxkb20tbW9kdWxlIGlkPVwicGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgIC8qIE5PVEUoY2RhdGEpOiBCb3RoIHZhbHVlcyBhcmUgbmVlZGVkLCBzaW5jZSBzb21lIHBob25lcyByZXF1aXJlIHRoZVxuICAgICAgICAgKiB2YWx1ZSB0byBiZSBcXGB0cmFuc3BhcmVudFxcYC5cbiAgICAgICAgICovXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dDoge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm9pbmtdKSBwYXBlci1yaXBwbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm8tbGFiZWwtZmxvYXRdKSBwYXBlci1yaXBwbGUge1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItcmlwcGxlIHtcbiAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICByaWdodDogMHB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1tZW51LWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtYnV0dG9uO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGlyb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1yaXBwbGUvcGFwZXItcmlwcGxlLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbnMuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWRyb3Bkb3duLW1lbnUtc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7SXJvbkJ1dHRvblN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5pbXBvcnQge0lyb25Gb3JtRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25WYWxpZGF0YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCAqIGFzIGdlc3R1cmVzIGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2dlc3R1cmVzLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW0Ryb3Bkb3duXG5tZW51c10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2J1dHRvbnMuaHRtbCNidXR0b25zLWRyb3Bkb3duLWJ1dHRvbnMpXG5cbmBwYXBlci1kcm9wZG93bi1tZW51YCBpcyBzaW1pbGFyIHRvIGEgbmF0aXZlIGJyb3dzZXIgc2VsZWN0IGVsZW1lbnQuXG5gcGFwZXItZHJvcGRvd24tbWVudWAgd29ya3Mgd2l0aCBzZWxlY3RhYmxlIGNvbnRlbnQuIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWRcbml0ZW0gaXMgZGlzcGxheWVkIGluIHRoZSBjb250cm9sLiBJZiBubyBpdGVtIGlzIHNlbGVjdGVkLCB0aGUgYGxhYmVsYCBpc1xuZGlzcGxheWVkIGluc3RlYWQuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIllvdXIgZmF2b3VyaXRlIHBhc3RyeVwiPlxuICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgPHBhcGVyLWl0ZW0+Q3JvaXNzYW50PC9wYXBlci1pdGVtPlxuICAgICAgICA8cGFwZXItaXRlbT5Eb251dDwvcGFwZXItaXRlbT5cbiAgICAgICAgPHBhcGVyLWl0ZW0+RmluYW5jaWVyPC9wYXBlci1pdGVtPlxuICAgICAgICA8cGFwZXItaXRlbT5NYWRlbGVpbmU8L3BhcGVyLWl0ZW0+XG4gICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuXG5UaGlzIGV4YW1wbGUgcmVuZGVycyBhIGRyb3Bkb3duIG1lbnUgd2l0aCA0IG9wdGlvbnMuXG5cblRoZSBjaGlsZCBlbGVtZW50IHdpdGggdGhlIHNsb3QgYGRyb3Bkb3duLWNvbnRlbnRgIGlzIHVzZWQgYXMgdGhlIGRyb3Bkb3duXG5tZW51LiBUaGlzIGNhbiBiZSBhIFtgcGFwZXItbGlzdGJveGBdKHBhcGVyLWxpc3Rib3gpLCBvciBhbnkgb3RoZXIgb3JcbmVsZW1lbnQgdGhhdCBhY3RzIGxpa2UgYW4gW2Bpcm9uLXNlbGVjdG9yYF0oaXJvbi1zZWxlY3RvcikuXG5cblNwZWNpZmljYWxseSwgdGhlIG1lbnUgY2hpbGQgbXVzdCBmaXJlIGFuXG5bYGlyb24tc2VsZWN0YF0oaXJvbi1zZWxlY3RvciNldmVudC1pcm9uLXNlbGVjdCkgZXZlbnQgd2hlbiBvbmUgb2YgaXRzXG5jaGlsZHJlbiBpcyBzZWxlY3RlZCwgYW5kIGFuXG5bYGlyb24tZGVzZWxlY3RgXShpcm9uLXNlbGVjdG9yI2V2ZW50LWlyb24tZGVzZWxlY3QpIGV2ZW50IHdoZW4gYSBjaGlsZCBpc1xuZGVzZWxlY3RlZC4gVGhlIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQgaXRlbSBtdXN0IGJlIHBhc3NlZCBhcyB0aGUgZXZlbnQnc1xuYGRldGFpbC5pdGVtYCBwcm9wZXJ0eS5cblxuQXBwbGljYXRpb25zIGNhbiBsaXN0ZW4gZm9yIHRoZSBgaXJvbi1zZWxlY3RgIGFuZCBgaXJvbi1kZXNlbGVjdGAgZXZlbnRzXG50byByZWFjdCB3aGVuIG9wdGlvbnMgYXJlIHNlbGVjdGVkIGFuZCBkZXNlbGVjdGVkLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGFsc28gYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kcm9wZG93bi1tZW51YCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IGhvc3QgfCBge31gXG5gLS1wYXBlci1kcm9wZG93bi1tZW51LWRpc2FibGVkYCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IGhvc3Qgd2hlbiBkaXNhYmxlZCB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlYCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCByaXBwbGUgfCBge31gXG5gLS1wYXBlci1kcm9wZG93bi1tZW51LWJ1dHRvbmAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgbWVudSBidXR0b24gfCBge31gXG5gLS1wYXBlci1kcm9wZG93bi1tZW51LWlucHV0YCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBwYXBlciBpbnB1dCB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbmAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgaWNvbiB8IGB7fWBcblxuWW91IGNhbiBhbHNvIHVzZSBhbnkgb2YgdGhlIGBwYXBlci1pbnB1dC1jb250YWluZXJgIGFuZCBgcGFwZXItbWVudS1idXR0b25gXG5zdHlsZSBtaXhpbnMgYW5kIGN1c3RvbSBwcm9wZXJ0aWVzIHRvIHN0eWxlIHRoZSBpbnRlcm5hbCBpbnB1dCBhbmQgbWVudSBidXR0b25cbnJlc3BlY3RpdmVseS5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1kcm9wZG93bi1tZW51XG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cblxuICAgIDwhLS0gdGhpcyBkaXYgZnVsZmlsbHMgYW4gYTExeSByZXF1aXJlbWVudCBmb3IgY29tYm9ib3gsIGRvIG5vdCByZW1vdmUgLS0+XG4gICAgPHNwYW4gcm9sZT1cImJ1dHRvblwiPjwvc3Bhbj5cbiAgICA8cGFwZXItbWVudS1idXR0b24gaWQ9XCJtZW51QnV0dG9uXCIgdmVydGljYWwtYWxpZ249XCJbW3ZlcnRpY2FsQWxpZ25dXVwiIGhvcml6b250YWwtYWxpZ249XCJbW2hvcml6b250YWxBbGlnbl1dXCIgZHluYW1pYy1hbGlnbj1cIltbZHluYW1pY0FsaWduXV1cIiB2ZXJ0aWNhbC1vZmZzZXQ9XCJbW19jb21wdXRlTWVudVZlcnRpY2FsT2Zmc2V0KG5vTGFiZWxGbG9hdCwgdmVydGljYWxPZmZzZXQpXV1cIiBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiIG5vLWFuaW1hdGlvbnM9XCJbW25vQW5pbWF0aW9uc11dXCIgb24taXJvbi1zZWxlY3Q9XCJfb25Jcm9uU2VsZWN0XCIgb24taXJvbi1kZXNlbGVjdD1cIl9vbklyb25EZXNlbGVjdFwiIG9wZW5lZD1cInt7b3BlbmVkfX1cIiBjbG9zZS1vbi1hY3RpdmF0ZSBhbGxvdy1vdXRzaWRlLXNjcm9sbD1cIltbYWxsb3dPdXRzaWRlU2Nyb2xsXV1cIiByZXN0b3JlLWZvY3VzLW9uLWNsb3NlPVwiW1tyZXN0b3JlRm9jdXNPbkNsb3NlXV1cIj5cbiAgICAgIDwhLS0gc3VwcG9ydCBoeWJyaWQgbW9kZTogdXNlciBtaWdodCBiZSB1c2luZyBwYXBlci1tZW51LWJ1dHRvbiAxLnggd2hpY2ggZGlzdHJpYnV0ZXMgdmlhIDxjb250ZW50PiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi10cmlnZ2VyXCIgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIj5cbiAgICAgICAgPHBhcGVyLXJpcHBsZT48L3BhcGVyLXJpcHBsZT5cbiAgICAgICAgPCEtLSBwYXBlci1pbnB1dCBoYXMgdHlwZT1cInRleHRcIiBmb3IgYTExeSwgZG8gbm90IHJlbW92ZSAtLT5cbiAgICAgICAgPHBhcGVyLWlucHV0IHR5cGU9XCJ0ZXh0XCIgaW52YWxpZD1cIltbaW52YWxpZF1dXCIgcmVhZG9ubHkgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIiB2YWx1ZT1cIltbdmFsdWVdXVwiIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlcl1dXCIgZXJyb3ItbWVzc2FnZT1cIltbZXJyb3JNZXNzYWdlXV1cIiBhbHdheXMtZmxvYXQtbGFiZWw9XCJbW2Fsd2F5c0Zsb2F0TGFiZWxdXVwiIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiIGxhYmVsPVwiW1tsYWJlbF1dXCI+XG4gICAgICAgICAgPCEtLSBzdXBwb3J0IGh5YnJpZCBtb2RlOiB1c2VyIG1pZ2h0IGJlIHVzaW5nIHBhcGVyLWlucHV0IDEueCB3aGljaCBkaXN0cmlidXRlcyB2aWEgPGNvbnRlbnQ+IC0tPlxuICAgICAgICAgIDxpcm9uLWljb24gaWNvbj1cInBhcGVyLWRyb3Bkb3duLW1lbnU6YXJyb3ctZHJvcC1kb3duXCIgc3VmZml4IHNsb3Q9XCJzdWZmaXhcIj48L2lyb24taWNvbj5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNsb3QgaWQ9XCJjb250ZW50XCIgbmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIiBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPjwvc2xvdD5cbiAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuYCxcblxuICBpczogJ3BhcGVyLWRyb3Bkb3duLW1lbnUnLFxuXG4gIGJlaGF2aW9yczogW1xuICAgIElyb25CdXR0b25TdGF0ZSxcbiAgICBJcm9uQ29udHJvbFN0YXRlLFxuICAgIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yLFxuICAgIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yXG4gIF0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBkZXJpdmVkIFwibGFiZWxcIiBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uIFRoaXMgdmFsdWVcbiAgICAgKiBpcyB0aGUgYGxhYmVsYCBwcm9wZXJ0eSBvbiB0aGUgc2VsZWN0ZWQgaXRlbSBpZiBzZXQsIG9yIGVsc2UgdGhlXG4gICAgICogdHJpbW1lZCB0ZXh0IGNvbnRlbnQgb2YgdGhlIHNlbGVjdGVkIGl0ZW0uXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtTGFiZWw6IHt0eXBlOiBTdHJpbmcsIG5vdGlmeTogdHJ1ZSwgcmVhZE9ubHk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhc3Qgc2VsZWN0ZWQgaXRlbS4gQW4gaXRlbSBpcyBzZWxlY3RlZCBpZiB0aGUgZHJvcGRvd24gbWVudSBoYXNcbiAgICAgKiBhIGNoaWxkIHdpdGggc2xvdCBgZHJvcGRvd24tY29udGVudGAsIGFuZCB0aGF0IGNoaWxkIHRyaWdnZXJzIGFuXG4gICAgICogYGlyb24tc2VsZWN0YCBldmVudCB3aXRoIHRoZSBzZWxlY3RlZCBgaXRlbWAgaW4gdGhlIGBkZXRhaWxgLlxuICAgICAqXG4gICAgICogQHR5cGUgez9PYmplY3R9XG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtOiB7dHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWUsIHJlYWRPbmx5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBmb3IgdGhpcyBlbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gc3VibWl0dGluZyBpblxuICAgICAqIGEgZm9ybS4gSXQgcmVmbGVjdHMgdGhlIHZhbHVlIG9mIGBzZWxlY3RlZEl0ZW1MYWJlbGAuIElmIHNldCBkaXJlY3RseSxcbiAgICAgKiBpdCB3aWxsIG5vdCB1cGRhdGUgdGhlIGBzZWxlY3RlZEl0ZW1MYWJlbGAgdmFsdWUuXG4gICAgICovXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIGZvciB0aGUgZHJvcGRvd24uXG4gICAgICovXG4gICAgbGFiZWw6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgZHJvcGRvd24uXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIGludmFsaWQuXG4gICAgICovXG4gICAgZXJyb3JNZXNzYWdlOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGRyb3Bkb3duIGlzIG9wZW4uIE90aGVyd2lzZSwgZmFsc2UuXG4gICAgICovXG4gICAgb3BlbmVkOlxuICAgICAgICB7dHlwZTogQm9vbGVhbiwgbm90aWZ5OiB0cnVlLCB2YWx1ZTogZmFsc2UsIG9ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBkcm9wZG93biB3aWxsIGNvbnN0cmFpbiBzY3JvbGxpbmcgb24gdGhlIHBhZ2VcbiAgICAgKiB0byBpdHNlbGYgd2hlbiBvcGVuZWQuXG4gICAgICogU2V0IHRvIHRydWUgaW4gb3JkZXIgdG8gcHJldmVudCBzY3JvbGwgZnJvbSBiZWluZyBjb25zdHJhaW5lZFxuICAgICAqIHRvIHRoZSBkcm9wZG93biB3aGVuIGl0IG9wZW5zLlxuICAgICAqL1xuICAgIGFsbG93T3V0c2lkZVNjcm9sbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBmbG9hdGluZyBsYWJlbC4gQmluZCB0aGlzIHRvIHRoZVxuICAgICAqIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgbm9MYWJlbEZsb2F0YCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBub0xhYmVsRmxvYXQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhbHdheXMgZmxvYXQgdGhlIGxhYmVsLiBCaW5kIHRoaXMgdG8gdGhlXG4gICAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBhbHdheXNGbG9hdExhYmVsYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBhbHdheXNGbG9hdExhYmVsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgYW5pbWF0aW9ucyB3aGVuIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGhlXG4gICAgICogZHJvcGRvd24uXG4gICAgICovXG4gICAgbm9BbmltYXRpb25zOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBtZW51IGRyb3Bkb3duXG4gICAgICogaG9yaXpvbnRhbGx5IHJlbGF0aXZlIHRvIHRoZSBkcm9wZG93biB0cmlnZ2VyLlxuICAgICAqL1xuICAgIGhvcml6b250YWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdyaWdodCd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIG1lbnUgZHJvcGRvd25cbiAgICAgKiB2ZXJ0aWNhbGx5IHJlbGF0aXZlIHRvIHRoZSBkcm9wZG93biB0cmlnZ2VyLlxuICAgICAqL1xuICAgIHZlcnRpY2FsQWxpZ246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAndG9wJ30sXG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZXMgdGhlIHZlcnRpY2FsIG9mZnNldCBjb21wdXRlZCBpblxuICAgICAqIF9jb21wdXRlTWVudVZlcnRpY2FsT2Zmc2V0LlxuICAgICAqL1xuICAgIHZlcnRpY2FsT2Zmc2V0OiBOdW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYGhvcml6b250YWxBbGlnbmAgYW5kIGB2ZXJ0aWNhbEFsaWduYCBwcm9wZXJ0aWVzIHdpbGxcbiAgICAgKiBiZSBjb25zaWRlcmVkIHByZWZlcmVuY2VzIGluc3RlYWQgb2Ygc3RyaWN0IHJlcXVpcmVtZW50cyB3aGVuXG4gICAgICogcG9zaXRpb25pbmcgdGhlIGRyb3Bkb3duIGFuZCBtYXkgYmUgY2hhbmdlZCBpZiBkb2luZyBzbyByZWR1Y2VzXG4gICAgICogdGhlIGFyZWEgb2YgdGhlIGRyb3Bkb3duIGZhbGxpbmcgb3V0c2lkZSBvZiBgZml0SW50b2AuXG4gICAgICovXG4gICAgZHluYW1pY0FsaWduOiB7dHlwZTogQm9vbGVhbn0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGZvY3VzIHNob3VsZCBiZSByZXN0b3JlZCB0byB0aGUgZHJvcGRvd24gd2hlbiB0aGUgbWVudSBjbG9zZXMuXG4gICAgICovXG4gICAgcmVzdG9yZUZvY3VzT25DbG9zZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlfSxcbiAgfSxcblxuICBsaXN0ZW5lcnM6IHsndGFwJzogJ19vblRhcCd9LFxuXG4gIC8qKlxuICAgKiBAdHlwZSB7IU9iamVjdH1cbiAgICovXG4gIGtleUJpbmRpbmdzOiB7J3VwIGRvd24nOiAnb3BlbicsICdlc2MnOiAnY2xvc2UnfSxcblxuICBob3N0QXR0cmlidXRlczpcbiAgICAgIHtyb2xlOiAnY29tYm9ib3gnLCAnYXJpYS1hdXRvY29tcGxldGUnOiAnbm9uZScsICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnfSxcblxuICBvYnNlcnZlcnM6IFsnX3NlbGVjdGVkSXRlbUNoYW5nZWQoc2VsZWN0ZWRJdGVtKSddLFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBOT1RFKGNkYXRhKTogRHVlIHRvIHRpbWluZywgYSBwcmVzZWxlY3RlZCB2YWx1ZSBpbiBhIGBJcm9uU2VsZWN0YWJsZWBcbiAgICAvLyBjaGlsZCB3aWxsIGNhdXNlIGFuIGBpcm9uLXNlbGVjdGAgZXZlbnQgdG8gZmlyZSB3aGlsZSB0aGUgZWxlbWVudCBpc1xuICAgIC8vIHN0aWxsIGluIGEgYERvY3VtZW50RnJhZ21lbnRgLiBUaGlzIGhhcyB0aGUgZWZmZWN0IG9mIGNhdXNpbmdcbiAgICAvLyBoYW5kbGVycyBub3QgdG8gZmlyZS4gU28sIHdlIGRvdWJsZSBjaGVjayB0aGlzIHZhbHVlIG9uIGF0dGFjaGVkOlxuICAgIHZhciBjb250ZW50RWxlbWVudCA9IHRoaXMuY29udGVudEVsZW1lbnQ7XG4gICAgaWYgKGNvbnRlbnRFbGVtZW50ICYmIGNvbnRlbnRFbGVtZW50LnNlbGVjdGVkSXRlbSkge1xuICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKGNvbnRlbnRFbGVtZW50LnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBlbGVtZW50IHRoYXQgaXMgY29udGFpbmVkIGJ5IHRoZSBkcm9wZG93biBtZW51LCBpZiBhbnkuXG4gICAqL1xuICBnZXQgY29udGVudEVsZW1lbnQoKSB7XG4gICAgLy8gUG9seW1lciAyLnggcmV0dXJucyBzbG90LmFzc2lnbmVkTm9kZXMgd2hpY2ggY2FuIGNvbnRhaW4gdGV4dCBub2Rlcy5cbiAgICB2YXIgbm9kZXMgPSBkb20odGhpcy4kLmNvbnRlbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKG5vZGVzW2ldLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBkcm9wZG93biBjb250ZW50LlxuICAgKi9cbiAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kLm1lbnVCdXR0b24ub3BlbigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBkcm9wZG93biBjb250ZW50LlxuICAgKi9cbiAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJC5tZW51QnV0dG9uLmNsb3NlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGBpcm9uLXNlbGVjdGAgaXMgZmlyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEFuIGBpcm9uLXNlbGVjdGAgZXZlbnQuXG4gICAqL1xuICBfb25Jcm9uU2VsZWN0OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbShldmVudC5kZXRhaWwuaXRlbSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGBpcm9uLWRlc2VsZWN0YCBpcyBmaXJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQW4gYGlyb24tZGVzZWxlY3RgIGV2ZW50LlxuICAgKi9cbiAgX29uSXJvbkRlc2VsZWN0OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbShudWxsKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGRyb3Bkb3duIGlzIHRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSB0YXAgZXZlbnQuXG4gICAqL1xuICBfb25UYXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGdlc3R1cmVzLmZpbmRPcmlnaW5hbFRhcmdldChldmVudCkgPT09IHRoaXMpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgbGFiZWwgZm9yIHRoZSBkcm9wZG93biBnaXZlbiBhIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gc2VsZWN0ZWRJdGVtIEEgc2VsZWN0ZWQgRWxlbWVudCBpdGVtLCB3aXRoIGFuXG4gICAqIG9wdGlvbmFsIGBsYWJlbGAgcHJvcGVydHkuXG4gICAqL1xuICBfc2VsZWN0ZWRJdGVtQ2hhbmdlZDogZnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgdmFyIHZhbHVlID0gJyc7XG4gICAgaWYgKCFzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gc2VsZWN0ZWRJdGVtLmxhYmVsIHx8IHNlbGVjdGVkSXRlbS5nZXRBdHRyaWJ1dGUoJ2xhYmVsJykgfHxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW1MYWJlbCh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGUgdGhlIHZlcnRpY2FsIG9mZnNldCBvZiB0aGUgbWVudSBiYXNlZCBvbiB0aGUgdmFsdWUgb2ZcbiAgICogYG5vTGFiZWxGbG9hdGAuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbm9MYWJlbEZsb2F0IFRydWUgaWYgdGhlIGxhYmVsIHNob3VsZCBub3QgZmxvYXRcbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfdmVydGljYWxPZmZzZXQgT3B0aW9uYWwgb2Zmc2V0IGZyb20gdGhlIHVzZXJcbiAgICogYWJvdmUgdGhlIGlucHV0LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBfY29tcHV0ZU1lbnVWZXJ0aWNhbE9mZnNldDogZnVuY3Rpb24obm9MYWJlbEZsb2F0LCBvcHRfdmVydGljYWxPZmZzZXQpIHtcbiAgICAvLyBPdmVycmlkZSBvZmZzZXQgaWYgaXQncyBwYXNzZWQgZnJvbSB0aGUgdXNlci5cbiAgICBpZiAob3B0X3ZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gb3B0X3ZlcnRpY2FsT2Zmc2V0O1xuICAgIH1cblxuICAgIC8vIE5PVEUoY2RhdGEpOiBUaGVzZSBudW1iZXJzIGFyZSBzb21ld2hhdCBtYWdpY2FsIGJlY2F1c2UgdGhleSBhcmVcbiAgICAvLyBkZXJpdmVkIGZyb20gdGhlIG1ldHJpY3Mgb2YgZWxlbWVudHMgaW50ZXJuYWwgdG8gYHBhcGVyLWlucHV0YCdzXG4gICAgLy8gdGVtcGxhdGUuIFRoZSBtZXRyaWNzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB3aGV0aGVyIG9yIG5vdCB0aGVcbiAgICAvLyBpbnB1dCBoYXMgYSBmbG9hdGluZyBsYWJlbC5cbiAgICByZXR1cm4gbm9MYWJlbEZsb2F0ID8gLTQgOiA4O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIGFuZCBkb2VzIG5vdCBoYXZlIGEgc2VsZWN0aW9uLFxuICAgKiBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB7Kj19IF92YWx1ZSBJZ25vcmVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGByZXF1aXJlZGAgaXMgZmFsc2UsIG9yIGlmIGByZXF1aXJlZGAgaXMgdHJ1ZVxuICAgKiBhbmQgdGhlIGVsZW1lbnQgaGFzIGEgdmFsaWQgc2VsZWN0aW9uLlxuICAgKi9cbiAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbihfdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZXF1aXJlZCB8fCAodGhpcy5yZXF1aXJlZCAmJiAhIXRoaXMudmFsdWUpO1xuICB9LFxuXG4gIF9vcGVuZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3BlblN0YXRlID0gdGhpcy5vcGVuZWQgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICAgIHZhciBlID0gdGhpcy5jb250ZW50RWxlbWVudDtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuU3RhdGUpO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUFBO0FBT0E7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9FQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFvQkE7QUFFQTtBQU9BO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQXZHQTtBQTBHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEvUUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
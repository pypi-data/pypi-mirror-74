(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js ***!
  \************************************************************************/
/*! exports provided: IronMenuBehaviorImpl, IronMenuBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenuBehaviorImpl", function() { return IronMenuBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenuBehavior", function() { return IronMenuBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-selector/iron-multi-selectable.js */ "./node_modules/@polymer/iron-selector/iron-multi-selectable.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
 * `IronMenuBehavior` implements accessible menu behavior.
 *
 * @demo demo/index.html
 * @polymerBehavior IronMenuBehavior
 */

const IronMenuBehaviorImpl = {
  properties: {
    /**
     * Returns the currently focused item.
     * @type {?Object}
     */
    focusedItem: {
      observer: '_focusedItemChanged',
      readOnly: true,
      type: Object
    },

    /**
     * The attribute to use on menu items to look up the item title. Typing the
     * first letter of an item when the menu is open focuses that item. If
     * unset, `textContent` will be used.
     */
    attrForItemTitle: {
      type: String
    },

    /**
     * @type {boolean}
     */
    disabled: {
      type: Boolean,
      value: false,
      observer: '_disabledChanged'
    }
  },

  /**
   * The list of keys has been taken from
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
   * @private
   */
  _MODIFIER_KEYS: ['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock'],

  /** @private */
  _SEARCH_RESET_TIMEOUT_MS: 1000,

  /** @private */
  _previousTabIndex: 0,
  hostAttributes: {
    'role': 'menu'
  },
  observers: ['_updateMultiselectable(multi)'],
  listeners: {
    'focus': '_onFocus',
    'keydown': '_onKeydown',
    'iron-items-changed': '_onIronItemsChanged'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'up': '_onUpKey',
    'down': '_onDownKey',
    'esc': '_onEscKey',
    'shift+tab:keydown': '_onShiftTabDown'
  },
  attached: function () {
    this._resetTabindices();
  },

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @param {string|number} value the value to select.
   */
  select: function (value) {
    // Cancel automatically focusing a default item if the menu received focus
    // through a user action selecting a particular item.
    if (this._defaultFocusAsync) {
      this.cancelAsync(this._defaultFocusAsync);
      this._defaultFocusAsync = null;
    }

    var item = this._valueToItem(value);

    if (item && item.hasAttribute('disabled')) return;

    this._setFocusedItem(item);

    _polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronMultiSelectableBehaviorImpl"].select.apply(this, arguments);
  },

  /**
   * Resets all tabindex attributes to the appropriate value based on the
   * current selection state. The appropriate value is `0` (focusable) for
   * the default selected item, and `-1` (not keyboard focusable) for all
   * other items. Also sets the correct initial values for aria-selected
   * attribute, true for default selected item and false for others.
   */
  _resetTabindices: function () {
    var firstSelectedItem = this.multi ? this.selectedItems && this.selectedItems[0] : this.selectedItem;
    this.items.forEach(function (item) {
      item.setAttribute('tabindex', item === firstSelectedItem ? '0' : '-1');
      item.setAttribute('aria-selected', this._selection.isSelected(item));
    }, this);
  },

  /**
   * Sets appropriate ARIA based on whether or not the menu is meant to be
   * multi-selectable.
   *
   * @param {boolean} multi True if the menu should be multi-selectable.
   */
  _updateMultiselectable: function (multi) {
    if (multi) {
      this.setAttribute('aria-multiselectable', 'true');
    } else {
      this.removeAttribute('aria-multiselectable');
    }
  },

  /**
   * Given a KeyboardEvent, this method will focus the appropriate item in the
   * menu (if there is a relevant item, and it is possible to focus it).
   *
   * @param {KeyboardEvent} event A KeyboardEvent.
   */
  _focusWithKeyboardEvent: function (event) {
    // Make sure that the key pressed is not a modifier key.
    // getModifierState is not being used, as it is not available in Safari
    // earlier than 10.0.2 (https://trac.webkit.org/changeset/206725/webkit)
    if (this._MODIFIER_KEYS.indexOf(event.key) !== -1) return;
    this.cancelDebouncer('_clearSearchText');
    var searchText = this._searchText || '';
    var key = event.key && event.key.length == 1 ? event.key : String.fromCharCode(event.keyCode);
    searchText += key.toLocaleLowerCase();
    var searchLength = searchText.length;

    for (var i = 0, item; item = this.items[i]; i++) {
      if (item.hasAttribute('disabled')) {
        continue;
      }

      var attr = this.attrForItemTitle || 'textContent';
      var title = (item[attr] || item.getAttribute(attr) || '').trim();

      if (title.length < searchLength) {
        continue;
      }

      if (title.slice(0, searchLength).toLocaleLowerCase() == searchText) {
        this._setFocusedItem(item);

        break;
      }
    }

    this._searchText = searchText;
    this.debounce('_clearSearchText', this._clearSearchText, this._SEARCH_RESET_TIMEOUT_MS);
  },
  _clearSearchText: function () {
    this._searchText = '';
  },

  /**
   * Focuses the previous item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusPrevious: function () {
    var length = this.items.length;
    var curFocusIndex = Number(this.indexOf(this.focusedItem));

    for (var i = 1; i < length + 1; i++) {
      var item = this.items[(curFocusIndex - i + length) % length];

      if (!item.hasAttribute('disabled')) {
        var owner = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(item).getOwnerRoot() || document;

        this._setFocusedItem(item); // Focus might not have worked, if the element was hidden or not
        // focusable. In that case, try again.


        if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(owner).activeElement == item) {
          return;
        }
      }
    }
  },

  /**
   * Focuses the next item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusNext: function () {
    var length = this.items.length;
    var curFocusIndex = Number(this.indexOf(this.focusedItem));

    for (var i = 1; i < length + 1; i++) {
      var item = this.items[(curFocusIndex + i) % length];

      if (!item.hasAttribute('disabled')) {
        var owner = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(item).getOwnerRoot() || document;

        this._setFocusedItem(item); // Focus might not have worked, if the element was hidden or not
        // focusable. In that case, try again.


        if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(owner).activeElement == item) {
          return;
        }
      }
    }
  },

  /**
   * Mutates items in the menu based on provided selection details, so that
   * all items correctly reflect selection state.
   *
   * @param {Element} item An item in the menu.
   * @param {boolean} isSelected True if the item should be shown in a
   * selected state, otherwise false.
   */
  _applySelection: function (item, isSelected) {
    if (isSelected) {
      item.setAttribute('aria-selected', 'true');
    } else {
      item.setAttribute('aria-selected', 'false');
    }

    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__["IronSelectableBehavior"]._applySelection.apply(this, arguments);
  },

  /**
   * Discretely updates tabindex values among menu items as the focused item
   * changes.
   *
   * @param {Element} focusedItem The element that is currently focused.
   * @param {?Element} old The last element that was considered focused, if
   * applicable.
   */
  _focusedItemChanged: function (focusedItem, old) {
    old && old.setAttribute('tabindex', '-1');

    if (focusedItem && !focusedItem.hasAttribute('disabled') && !this.disabled) {
      focusedItem.setAttribute('tabindex', '0');
      focusedItem.focus();
    }
  },

  /**
   * A handler that responds to mutation changes related to the list of items
   * in the menu.
   *
   * @param {CustomEvent} event An event containing mutation records as its
   * detail.
   */
  _onIronItemsChanged: function (event) {
    if (event.detail.addedNodes.length) {
      this._resetTabindices();
    }
  },

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onShiftTabDown: function (event) {
    var oldTabIndex = this.getAttribute('tabindex');
    IronMenuBehaviorImpl._shiftTabPressed = true;

    this._setFocusedItem(null);

    this.setAttribute('tabindex', '-1');
    this.async(function () {
      this.setAttribute('tabindex', oldTabIndex);
      IronMenuBehaviorImpl._shiftTabPressed = false; // NOTE(cdata): polymer/polymer#1305
    }, 1);
  },

  /**
   * Handler that is called when the menu receives focus.
   *
   * @param {FocusEvent} event A focus event.
   */
  _onFocus: function (event) {
    if (IronMenuBehaviorImpl._shiftTabPressed) {
      // do not focus the menu itself
      return;
    } // Do not focus the selected tab if the deepest target is part of the
    // menu element's local DOM and is focusable.


    var rootTarget =
    /** @type {?HTMLElement} */
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(event).rootTarget;

    if (rootTarget !== this && typeof rootTarget.tabIndex !== 'undefined' && !this.isLightDescendant(rootTarget)) {
      return;
    } // clear the cached focus item


    this._defaultFocusAsync = this.async(function () {
      // focus the selected item when the menu receives focus, or the first item
      // if no item is selected
      var firstSelectedItem = this.multi ? this.selectedItems && this.selectedItems[0] : this.selectedItem;

      this._setFocusedItem(null);

      if (firstSelectedItem) {
        this._setFocusedItem(firstSelectedItem);
      } else if (this.items[0]) {
        // We find the first none-disabled item (if one exists)
        this._focusNext();
      }
    });
  },

  /**
   * Handler that is called when the up key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onUpKey: function (event) {
    // up and down arrows moves the focus
    this._focusPrevious();

    event.detail.keyboardEvent.preventDefault();
  },

  /**
   * Handler that is called when the down key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onDownKey: function (event) {
    this._focusNext();

    event.detail.keyboardEvent.preventDefault();
  },

  /**
   * Handler that is called when the esc key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onEscKey: function (event) {
    var focusedItem = this.focusedItem;

    if (focusedItem) {
      focusedItem.blur();
    }
  },

  /**
   * Handler that is called when a keydown event is detected.
   *
   * @param {KeyboardEvent} event A keyboard event.
   */
  _onKeydown: function (event) {
    if (!this.keyboardEventMatchesKeys(event, 'up down esc')) {
      // all other keys focus the menu item starting with that character
      this._focusWithKeyboardEvent(event);
    }

    event.stopPropagation();
  },
  // override _activateHandler
  _activateHandler: function (event) {
    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__["IronSelectableBehavior"]._activateHandler.call(this, event);

    event.stopPropagation();
  },

  /**
   * Updates this element's tab index when it's enabled/disabled.
   * @param {boolean} disabled
   */
  _disabledChanged: function (disabled) {
    if (disabled) {
      this._previousTabIndex = this.hasAttribute('tabindex') ? this.tabIndex : 0;
      this.removeAttribute('tabindex'); // No tabindex means not tab-able or select-able.
    } else if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', this._previousTabIndex);
    }
  }
};
IronMenuBehaviorImpl._shiftTabPressed = false;
/** @polymerBehavior */

const IronMenuBehavior = [_polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronMultiSelectableBehavior"], _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"], IronMenuBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/iron-selector/iron-multi-selectable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/iron-selector/iron-multi-selectable.js ***!
  \**********************************************************************/
/*! exports provided: IronMultiSelectableBehaviorImpl, IronMultiSelectableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMultiSelectableBehaviorImpl", function() { return IronMultiSelectableBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMultiSelectableBehavior", function() { return IronMultiSelectableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
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
 * @polymerBehavior IronMultiSelectableBehavior
 */

const IronMultiSelectableBehaviorImpl = {
  properties: {
    /**
     * If true, multiple selections are allowed.
     */
    multi: {
      type: Boolean,
      value: false,
      observer: 'multiChanged'
    },

    /**
     * Gets or sets the selected elements. This is used instead of `selected`
     * when `multi` is true.
     */
    selectedValues: {
      type: Array,
      notify: true,
      value: function () {
        return [];
      }
    },

    /**
     * Returns an array of currently selected items.
     */
    selectedItems: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function () {
        return [];
      }
    }
  },
  observers: ['_updateSelected(selectedValues.splices)'],

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function (value) {
    if (this.multi) {
      this._toggleSelected(value);
    } else {
      this.selected = value;
    }
  },
  multiChanged: function (multi) {
    this._selection.multi = multi;

    this._updateSelected();
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null || this.selectedValues != null && this.selectedValues.length;
  },

  _updateAttrForSelected: function () {
    if (!this.multi) {
      _iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__["IronSelectableBehavior"]._updateAttrForSelected.apply(this);
    } else if (this.selectedItems && this.selectedItems.length > 0) {
      this.selectedValues = this.selectedItems.map(function (selectedItem) {
        return this._indexToValue(this.indexOf(selectedItem));
      }, this).filter(function (unfilteredValue) {
        return unfilteredValue != null;
      }, this);
    }
  },
  _updateSelected: function () {
    if (this.multi) {
      this._selectMulti(this.selectedValues);
    } else {
      this._selectSelected(this.selected);
    }
  },
  _selectMulti: function (values) {
    values = values || [];
    var selectedItems = (this._valuesToItems(values) || []).filter(function (item) {
      return item !== null && item !== undefined;
    }); // clear all but the current selected items

    this._selection.clear(selectedItems); // select only those not selected yet


    for (var i = 0; i < selectedItems.length; i++) {
      this._selection.setItemSelected(selectedItems[i], true);
    } // Check for items, since this array is populated only when attached


    if (this.fallbackSelection && !this._selection.get().length) {
      var fallback = this._valueToItem(this.fallbackSelection);

      if (fallback) {
        this.select(this.fallbackSelection);
      }
    }
  },
  _selectionChange: function () {
    var s = this._selection.get();

    if (this.multi) {
      this._setSelectedItems(s);

      this._setSelectedItem(s.length ? s[0] : null);
    } else {
      if (s !== null && s !== undefined) {
        this._setSelectedItems([s]);

        this._setSelectedItem(s);
      } else {
        this._setSelectedItems([]);

        this._setSelectedItem(null);
      }
    }
  },
  _toggleSelected: function (value) {
    var i = this.selectedValues.indexOf(value);
    var unselected = i < 0;

    if (unselected) {
      this.push('selectedValues', value);
    } else {
      this.splice('selectedValues', i, 1);
    }
  },
  _valuesToItems: function (values) {
    return values == null ? null : values.map(function (value) {
      return this._valueToItem(value);
    }, this);
  }
};
/** @polymerBehavior */

const IronMultiSelectableBehavior = [_iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__["IronSelectableBehavior"], IronMultiSelectableBehaviorImpl];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW1lbnUtYmVoYXZpb3IvaXJvbi1tZW51LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXNlbGVjdG9yL2lyb24tbXVsdGktc2VsZWN0YWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9yLCBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLXNlbGVjdG9yL2lyb24tbXVsdGktc2VsZWN0YWJsZS5qcyc7XG5pbXBvcnQge0lyb25TZWxlY3RhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tc2VsZWN0b3IvaXJvbi1zZWxlY3RhYmxlLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbiAqIGBJcm9uTWVudUJlaGF2aW9yYCBpbXBsZW1lbnRzIGFjY2Vzc2libGUgbWVudSBiZWhhdmlvci5cbiAqXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqIEBwb2x5bWVyQmVoYXZpb3IgSXJvbk1lbnVCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbk1lbnVCZWhhdmlvckltcGwgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXRlbS5cbiAgICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICAgKi9cbiAgICBmb2N1c2VkSXRlbTpcbiAgICAgICAge29ic2VydmVyOiAnX2ZvY3VzZWRJdGVtQ2hhbmdlZCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGF0dHJpYnV0ZSB0byB1c2Ugb24gbWVudSBpdGVtcyB0byBsb29rIHVwIHRoZSBpdGVtIHRpdGxlLiBUeXBpbmcgdGhlXG4gICAgICogZmlyc3QgbGV0dGVyIG9mIGFuIGl0ZW0gd2hlbiB0aGUgbWVudSBpcyBvcGVuIGZvY3VzZXMgdGhhdCBpdGVtLiBJZlxuICAgICAqIHVuc2V0LCBgdGV4dENvbnRlbnRgIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBhdHRyRm9ySXRlbVRpdGxlOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb2JzZXJ2ZXI6ICdfZGlzYWJsZWRDaGFuZ2VkJyxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBrZXlzIGhhcyBiZWVuIHRha2VuIGZyb21cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQvZ2V0TW9kaWZpZXJTdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX01PRElGSUVSX0tFWVM6IFtcbiAgICAnQWx0JyxcbiAgICAnQWx0R3JhcGgnLFxuICAgICdDYXBzTG9jaycsXG4gICAgJ0NvbnRyb2wnLFxuICAgICdGbicsXG4gICAgJ0ZuTG9jaycsXG4gICAgJ0h5cGVyJyxcbiAgICAnTWV0YScsXG4gICAgJ051bUxvY2snLFxuICAgICdPUycsXG4gICAgJ1Njcm9sbExvY2snLFxuICAgICdTaGlmdCcsXG4gICAgJ1N1cGVyJyxcbiAgICAnU3ltYm9sJyxcbiAgICAnU3ltYm9sTG9jaydcbiAgXSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX1NFQVJDSF9SRVNFVF9USU1FT1VUX01TOiAxMDAwLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfcHJldmlvdXNUYWJJbmRleDogMCxcblxuICBob3N0QXR0cmlidXRlczoge1xuICAgICdyb2xlJzogJ21lbnUnLFxuICB9LFxuXG4gIG9ic2VydmVyczogWydfdXBkYXRlTXVsdGlzZWxlY3RhYmxlKG11bHRpKSddLFxuXG4gIGxpc3RlbmVyczoge1xuICAgICdmb2N1cyc6ICdfb25Gb2N1cycsXG4gICAgJ2tleWRvd24nOiAnX29uS2V5ZG93bicsXG4gICAgJ2lyb24taXRlbXMtY2hhbmdlZCc6ICdfb25Jcm9uSXRlbXNDaGFuZ2VkJ1xuICB9LFxuXG4gIC8qKlxuICAgKiBAdHlwZSB7IU9iamVjdH1cbiAgICovXG4gIGtleUJpbmRpbmdzOiB7XG4gICAgJ3VwJzogJ19vblVwS2V5JyxcbiAgICAnZG93bic6ICdfb25Eb3duS2V5JyxcbiAgICAnZXNjJzogJ19vbkVzY0tleScsXG4gICAgJ3NoaWZ0K3RhYjprZXlkb3duJzogJ19vblNoaWZ0VGFiRG93bidcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVzZXRUYWJpbmRpY2VzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGdpdmVuIHZhbHVlLiBJZiB0aGUgYG11bHRpYCBwcm9wZXJ0eSBpcyB0cnVlLCB0aGVuIHRoZSBzZWxlY3RlZFxuICAgKiBzdGF0ZSBvZiB0aGUgYHZhbHVlYCB3aWxsIGJlIHRvZ2dsZWQ7IG90aGVyd2lzZSB0aGUgYHZhbHVlYCB3aWxsIGJlXG4gICAqIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHZhbHVlIHRoZSB2YWx1ZSB0byBzZWxlY3QuXG4gICAqL1xuICBzZWxlY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gQ2FuY2VsIGF1dG9tYXRpY2FsbHkgZm9jdXNpbmcgYSBkZWZhdWx0IGl0ZW0gaWYgdGhlIG1lbnUgcmVjZWl2ZWQgZm9jdXNcbiAgICAvLyB0aHJvdWdoIGEgdXNlciBhY3Rpb24gc2VsZWN0aW5nIGEgcGFydGljdWxhciBpdGVtLlxuICAgIGlmICh0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYykge1xuICAgICAgdGhpcy5jYW5jZWxBc3luYyh0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYyk7XG4gICAgICB0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYyA9IG51bGw7XG4gICAgfVxuICAgIHZhciBpdGVtID0gdGhpcy5fdmFsdWVUb0l0ZW0odmFsdWUpO1xuICAgIGlmIChpdGVtICYmIGl0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKGl0ZW0pO1xuICAgIElyb25NdWx0aVNlbGVjdGFibGVCZWhhdmlvckltcGwuc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0cyBhbGwgdGFiaW5kZXggYXR0cmlidXRlcyB0byB0aGUgYXBwcm9wcmlhdGUgdmFsdWUgYmFzZWQgb24gdGhlXG4gICAqIGN1cnJlbnQgc2VsZWN0aW9uIHN0YXRlLiBUaGUgYXBwcm9wcmlhdGUgdmFsdWUgaXMgYDBgIChmb2N1c2FibGUpIGZvclxuICAgKiB0aGUgZGVmYXVsdCBzZWxlY3RlZCBpdGVtLCBhbmQgYC0xYCAobm90IGtleWJvYXJkIGZvY3VzYWJsZSkgZm9yIGFsbFxuICAgKiBvdGhlciBpdGVtcy4gQWxzbyBzZXRzIHRoZSBjb3JyZWN0IGluaXRpYWwgdmFsdWVzIGZvciBhcmlhLXNlbGVjdGVkXG4gICAqIGF0dHJpYnV0ZSwgdHJ1ZSBmb3IgZGVmYXVsdCBzZWxlY3RlZCBpdGVtIGFuZCBmYWxzZSBmb3Igb3RoZXJzLlxuICAgKi9cbiAgX3Jlc2V0VGFiaW5kaWNlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZpcnN0U2VsZWN0ZWRJdGVtID0gdGhpcy5tdWx0aSA/XG4gICAgICAgICh0aGlzLnNlbGVjdGVkSXRlbXMgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zWzBdKSA6XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIGl0ZW0gPT09IGZpcnN0U2VsZWN0ZWRJdGVtID8gJzAnIDogJy0xJyk7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRoaXMuX3NlbGVjdGlvbi5pc1NlbGVjdGVkKGl0ZW0pKTtcbiAgICB9LCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhcHByb3ByaWF0ZSBBUklBIGJhc2VkIG9uIHdoZXRoZXIgb3Igbm90IHRoZSBtZW51IGlzIG1lYW50IHRvIGJlXG4gICAqIG11bHRpLXNlbGVjdGFibGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbXVsdGkgVHJ1ZSBpZiB0aGUgbWVudSBzaG91bGQgYmUgbXVsdGktc2VsZWN0YWJsZS5cbiAgICovXG4gIF91cGRhdGVNdWx0aXNlbGVjdGFibGU6IGZ1bmN0aW9uKG11bHRpKSB7XG4gICAgaWYgKG11bHRpKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgS2V5Ym9hcmRFdmVudCwgdGhpcyBtZXRob2Qgd2lsbCBmb2N1cyB0aGUgYXBwcm9wcmlhdGUgaXRlbSBpbiB0aGVcbiAgICogbWVudSAoaWYgdGhlcmUgaXMgYSByZWxldmFudCBpdGVtLCBhbmQgaXQgaXMgcG9zc2libGUgdG8gZm9jdXMgaXQpLlxuICAgKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IEEgS2V5Ym9hcmRFdmVudC5cbiAgICovXG4gIF9mb2N1c1dpdGhLZXlib2FyZEV2ZW50OiBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBrZXkgcHJlc3NlZCBpcyBub3QgYSBtb2RpZmllciBrZXkuXG4gICAgLy8gZ2V0TW9kaWZpZXJTdGF0ZSBpcyBub3QgYmVpbmcgdXNlZCwgYXMgaXQgaXMgbm90IGF2YWlsYWJsZSBpbiBTYWZhcmlcbiAgICAvLyBlYXJsaWVyIHRoYW4gMTAuMC4yIChodHRwczovL3RyYWMud2Via2l0Lm9yZy9jaGFuZ2VzZXQvMjA2NzI1L3dlYmtpdClcbiAgICBpZiAodGhpcy5fTU9ESUZJRVJfS0VZUy5pbmRleE9mKGV2ZW50LmtleSkgIT09IC0xKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5jYW5jZWxEZWJvdW5jZXIoJ19jbGVhclNlYXJjaFRleHQnKTtcblxuICAgIHZhciBzZWFyY2hUZXh0ID0gdGhpcy5fc2VhcmNoVGV4dCB8fCAnJztcbiAgICB2YXIga2V5ID0gZXZlbnQua2V5ICYmIGV2ZW50LmtleS5sZW5ndGggPT0gMSA/XG4gICAgICAgIGV2ZW50LmtleSA6XG4gICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gICAgc2VhcmNoVGV4dCArPSBrZXkudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgIHZhciBzZWFyY2hMZW5ndGggPSBzZWFyY2hUZXh0Lmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBpdGVtOyBpdGVtID0gdGhpcy5pdGVtc1tpXTsgaSsrKSB7XG4gICAgICBpZiAoaXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdHRyID0gdGhpcy5hdHRyRm9ySXRlbVRpdGxlIHx8ICd0ZXh0Q29udGVudCc7XG4gICAgICB2YXIgdGl0bGUgPSAoaXRlbVthdHRyXSB8fCBpdGVtLmdldEF0dHJpYnV0ZShhdHRyKSB8fCAnJykudHJpbSgpO1xuXG4gICAgICBpZiAodGl0bGUubGVuZ3RoIDwgc2VhcmNoTGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGl0bGUuc2xpY2UoMCwgc2VhcmNoTGVuZ3RoKS50b0xvY2FsZUxvd2VyQ2FzZSgpID09IHNlYXJjaFRleHQpIHtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZEl0ZW0oaXRlbSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3NlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgIHRoaXMuZGVib3VuY2UoXG4gICAgICAgICdfY2xlYXJTZWFyY2hUZXh0JyxcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2hUZXh0LFxuICAgICAgICB0aGlzLl9TRUFSQ0hfUkVTRVRfVElNRU9VVF9NUyk7XG4gIH0sXG5cbiAgX2NsZWFyU2VhcmNoVGV4dDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9ICcnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBwcmV2aW91cyBpdGVtIChyZWxhdGl2ZSB0byB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXRlbSkgaW4gdGhlXG4gICAqIG1lbnUsIGRpc2FibGVkIGl0ZW1zIHdpbGwgYmUgc2tpcHBlZC5cbiAgICogTG9vcCB1bnRpbCBsZW5ndGggKyAxIHRvIGhhbmRsZSBjYXNlIG9mIHNpbmdsZSBpdGVtIGluIG1lbnUuXG4gICAqL1xuICBfZm9jdXNQcmV2aW91czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIHZhciBjdXJGb2N1c0luZGV4ID0gTnVtYmVyKHRoaXMuaW5kZXhPZih0aGlzLmZvY3VzZWRJdGVtKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbmd0aCArIDE7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zWyhjdXJGb2N1c0luZGV4IC0gaSArIGxlbmd0aCkgJSBsZW5ndGhdO1xuICAgICAgaWYgKCFpdGVtLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICB2YXIgb3duZXIgPSBkb20oaXRlbSkuZ2V0T3duZXJSb290KCkgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKGl0ZW0pO1xuXG4gICAgICAgIC8vIEZvY3VzIG1pZ2h0IG5vdCBoYXZlIHdvcmtlZCwgaWYgdGhlIGVsZW1lbnQgd2FzIGhpZGRlbiBvciBub3RcbiAgICAgICAgLy8gZm9jdXNhYmxlLiBJbiB0aGF0IGNhc2UsIHRyeSBhZ2Fpbi5cbiAgICAgICAgaWYgKGRvbShvd25lcikuYWN0aXZlRWxlbWVudCA9PSBpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBuZXh0IGl0ZW0gKHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBpdGVtKSBpbiB0aGVcbiAgICogbWVudSwgZGlzYWJsZWQgaXRlbXMgd2lsbCBiZSBza2lwcGVkLlxuICAgKiBMb29wIHVudGlsIGxlbmd0aCArIDEgdG8gaGFuZGxlIGNhc2Ugb2Ygc2luZ2xlIGl0ZW0gaW4gbWVudS5cbiAgICovXG4gIF9mb2N1c05leHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB2YXIgY3VyRm9jdXNJbmRleCA9IE51bWJlcih0aGlzLmluZGV4T2YodGhpcy5mb2N1c2VkSXRlbSkpO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW5ndGggKyAxOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1soY3VyRm9jdXNJbmRleCArIGkpICUgbGVuZ3RoXTtcbiAgICAgIGlmICghaXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgdmFyIG93bmVyID0gZG9tKGl0ZW0pLmdldE93bmVyUm9vdCgpIHx8IGRvY3VtZW50O1xuICAgICAgICB0aGlzLl9zZXRGb2N1c2VkSXRlbShpdGVtKTtcblxuICAgICAgICAvLyBGb2N1cyBtaWdodCBub3QgaGF2ZSB3b3JrZWQsIGlmIHRoZSBlbGVtZW50IHdhcyBoaWRkZW4gb3Igbm90XG4gICAgICAgIC8vIGZvY3VzYWJsZS4gSW4gdGhhdCBjYXNlLCB0cnkgYWdhaW4uXG4gICAgICAgIGlmIChkb20ob3duZXIpLmFjdGl2ZUVsZW1lbnQgPT0gaXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTXV0YXRlcyBpdGVtcyBpbiB0aGUgbWVudSBiYXNlZCBvbiBwcm92aWRlZCBzZWxlY3Rpb24gZGV0YWlscywgc28gdGhhdFxuICAgKiBhbGwgaXRlbXMgY29ycmVjdGx5IHJlZmxlY3Qgc2VsZWN0aW9uIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGl0ZW0gQW4gaXRlbSBpbiB0aGUgbWVudS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc1NlbGVjdGVkIFRydWUgaWYgdGhlIGl0ZW0gc2hvdWxkIGJlIHNob3duIGluIGFcbiAgICogc2VsZWN0ZWQgc3RhdGUsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIF9hcHBseVNlbGVjdGlvbjogZnVuY3Rpb24oaXRlbSwgaXNTZWxlY3RlZCkge1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxuICAgIElyb25TZWxlY3RhYmxlQmVoYXZpb3IuX2FwcGx5U2VsZWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERpc2NyZXRlbHkgdXBkYXRlcyB0YWJpbmRleCB2YWx1ZXMgYW1vbmcgbWVudSBpdGVtcyBhcyB0aGUgZm9jdXNlZCBpdGVtXG4gICAqIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZm9jdXNlZEl0ZW0gVGhlIGVsZW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgZm9jdXNlZC5cbiAgICogQHBhcmFtIHs/RWxlbWVudH0gb2xkIFRoZSBsYXN0IGVsZW1lbnQgdGhhdCB3YXMgY29uc2lkZXJlZCBmb2N1c2VkLCBpZlxuICAgKiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgX2ZvY3VzZWRJdGVtQ2hhbmdlZDogZnVuY3Rpb24oZm9jdXNlZEl0ZW0sIG9sZCkge1xuICAgIG9sZCAmJiBvbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIGlmIChmb2N1c2VkSXRlbSAmJiAhZm9jdXNlZEl0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmXG4gICAgICAgICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBmb2N1c2VkSXRlbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgIGZvY3VzZWRJdGVtLmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdGhhdCByZXNwb25kcyB0byBtdXRhdGlvbiBjaGFuZ2VzIHJlbGF0ZWQgdG8gdGhlIGxpc3Qgb2YgaXRlbXNcbiAgICogaW4gdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEFuIGV2ZW50IGNvbnRhaW5pbmcgbXV0YXRpb24gcmVjb3JkcyBhcyBpdHNcbiAgICogZGV0YWlsLlxuICAgKi9cbiAgX29uSXJvbkl0ZW1zQ2hhbmdlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGV0YWlsLmFkZGVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9yZXNldFRhYmluZGljZXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIHNoaWZ0K3RhYiBrZXlwcmVzcyBpcyBkZXRlY3RlZCBieSB0aGUgbWVudS5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBrZXkgY29tYmluYXRpb24gZXZlbnQuXG4gICAqL1xuICBfb25TaGlmdFRhYkRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG9sZFRhYkluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG5cbiAgICBJcm9uTWVudUJlaGF2aW9ySW1wbC5fc2hpZnRUYWJQcmVzc2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKG51bGwpO1xuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jywgb2xkVGFiSW5kZXgpO1xuICAgICAgSXJvbk1lbnVCZWhhdmlvckltcGwuX3NoaWZ0VGFiUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgLy8gTk9URShjZGF0YSk6IHBvbHltZXIvcG9seW1lciMxMzA1XG4gICAgfSwgMSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgbWVudSByZWNlaXZlcyBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtGb2N1c0V2ZW50fSBldmVudCBBIGZvY3VzIGV2ZW50LlxuICAgKi9cbiAgX29uRm9jdXM6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKElyb25NZW51QmVoYXZpb3JJbXBsLl9zaGlmdFRhYlByZXNzZWQpIHtcbiAgICAgIC8vIGRvIG5vdCBmb2N1cyB0aGUgbWVudSBpdHNlbGZcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEbyBub3QgZm9jdXMgdGhlIHNlbGVjdGVkIHRhYiBpZiB0aGUgZGVlcGVzdCB0YXJnZXQgaXMgcGFydCBvZiB0aGVcbiAgICAvLyBtZW51IGVsZW1lbnQncyBsb2NhbCBET00gYW5kIGlzIGZvY3VzYWJsZS5cbiAgICB2YXIgcm9vdFRhcmdldCA9XG4gICAgICAgIC8qKiBAdHlwZSB7P0hUTUxFbGVtZW50fSAqLyAoZG9tKGV2ZW50KS5yb290VGFyZ2V0KTtcbiAgICBpZiAocm9vdFRhcmdldCAhPT0gdGhpcyAmJiB0eXBlb2Ygcm9vdFRhcmdldC50YWJJbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgIXRoaXMuaXNMaWdodERlc2NlbmRhbnQocm9vdFRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjbGVhciB0aGUgY2FjaGVkIGZvY3VzIGl0ZW1cbiAgICB0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYyA9IHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICAvLyBmb2N1cyB0aGUgc2VsZWN0ZWQgaXRlbSB3aGVuIHRoZSBtZW51IHJlY2VpdmVzIGZvY3VzLCBvciB0aGUgZmlyc3QgaXRlbVxuICAgICAgLy8gaWYgbm8gaXRlbSBpcyBzZWxlY3RlZFxuICAgICAgdmFyIGZpcnN0U2VsZWN0ZWRJdGVtID0gdGhpcy5tdWx0aSA/XG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRJdGVtcyAmJiB0aGlzLnNlbGVjdGVkSXRlbXNbMF0pIDpcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgICAgdGhpcy5fc2V0Rm9jdXNlZEl0ZW0obnVsbCk7XG5cbiAgICAgIGlmIChmaXJzdFNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLl9zZXRGb2N1c2VkSXRlbShmaXJzdFNlbGVjdGVkSXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXRlbXNbMF0pIHtcbiAgICAgICAgLy8gV2UgZmluZCB0aGUgZmlyc3Qgbm9uZS1kaXNhYmxlZCBpdGVtIChpZiBvbmUgZXhpc3RzKVxuICAgICAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB1cCBrZXkgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBrZXkgY29tYmluYXRpb24gZXZlbnQuXG4gICAqL1xuICBfb25VcEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyB1cCBhbmQgZG93biBhcnJvd3MgbW92ZXMgdGhlIGZvY3VzXG4gICAgdGhpcy5fZm9jdXNQcmV2aW91cygpO1xuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgZG93biBrZXkgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBrZXkgY29tYmluYXRpb24gZXZlbnQuXG4gICAqL1xuICBfb25Eb3duS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX2ZvY3VzTmV4dCgpO1xuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgZXNjIGtleSBpcyBwcmVzc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIGtleSBjb21iaW5hdGlvbiBldmVudC5cbiAgICovXG4gIF9vbkVzY0tleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgZm9jdXNlZEl0ZW0gPSB0aGlzLmZvY3VzZWRJdGVtO1xuICAgIGlmIChmb2N1c2VkSXRlbSkge1xuICAgICAgZm9jdXNlZEl0ZW0uYmx1cigpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGEga2V5ZG93biBldmVudCBpcyBkZXRlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBBIGtleWJvYXJkIGV2ZW50LlxuICAgKi9cbiAgX29uS2V5ZG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMua2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzKGV2ZW50LCAndXAgZG93biBlc2MnKSkge1xuICAgICAgLy8gYWxsIG90aGVyIGtleXMgZm9jdXMgdGhlIG1lbnUgaXRlbSBzdGFydGluZyB3aXRoIHRoYXQgY2hhcmFjdGVyXG4gICAgICB0aGlzLl9mb2N1c1dpdGhLZXlib2FyZEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sXG5cbiAgLy8gb3ZlcnJpZGUgX2FjdGl2YXRlSGFuZGxlclxuICBfYWN0aXZhdGVIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgIElyb25TZWxlY3RhYmxlQmVoYXZpb3IuX2FjdGl2YXRlSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGlzIGVsZW1lbnQncyB0YWIgaW5kZXggd2hlbiBpdCdzIGVuYWJsZWQvZGlzYWJsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWRcbiAgICovXG4gIF9kaXNhYmxlZENoYW5nZWQ6IGZ1bmN0aW9uKGRpc2FibGVkKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c1RhYkluZGV4ID1cbiAgICAgICAgICB0aGlzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSA/IHRoaXMudGFiSW5kZXggOiAwO1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXG4gICAgICAgICAgJ3RhYmluZGV4Jyk7ICAvLyBObyB0YWJpbmRleCBtZWFucyBub3QgdGFiLWFibGUgb3Igc2VsZWN0LWFibGUuXG4gICAgfSBlbHNlIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3ByZXZpb3VzVGFiSW5kZXgpO1xuICAgIH1cbiAgfVxufTtcblxuSXJvbk1lbnVCZWhhdmlvckltcGwuX3NoaWZ0VGFiUHJlc3NlZCA9IGZhbHNlO1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25NZW51QmVoYXZpb3IgPVxuICAgIFtJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3IsIElyb25BMTF5S2V5c0JlaGF2aW9yLCBJcm9uTWVudUJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvblNlbGVjdGFibGVCZWhhdmlvcn0gZnJvbSAnLi9pcm9uLXNlbGVjdGFibGUuanMnO1xuXG4vKipcbiAqIEBwb2x5bWVyQmVoYXZpb3IgSXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3JJbXBsID0ge1xuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBtdWx0aXBsZSBzZWxlY3Rpb25zIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIG11bHRpOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBvYnNlcnZlcjogJ211bHRpQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBzZWxlY3RlZCBlbGVtZW50cy4gVGhpcyBpcyB1c2VkIGluc3RlYWQgb2YgYHNlbGVjdGVkYFxuICAgICAqIHdoZW4gYG11bHRpYCBpcyB0cnVlLlxuICAgICAqL1xuICAgIHNlbGVjdGVkVmFsdWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtcy5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSxcblxuICB9LFxuXG4gIG9ic2VydmVyczogWydfdXBkYXRlU2VsZWN0ZWQoc2VsZWN0ZWRWYWx1ZXMuc3BsaWNlcyknXSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZSBgbXVsdGlgIHByb3BlcnR5IGlzIHRydWUsIHRoZW4gdGhlIHNlbGVjdGVkXG4gICAqIHN0YXRlIG9mIHRoZSBgdmFsdWVgIHdpbGwgYmUgdG9nZ2xlZDsgb3RoZXJ3aXNlIHRoZSBgdmFsdWVgIHdpbGwgYmVcbiAgICogc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gdmFsdWUgdGhlIHZhbHVlIHRvIHNlbGVjdC5cbiAgICovXG4gIHNlbGVjdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5tdWx0aSkge1xuICAgICAgdGhpcy5fdG9nZ2xlU2VsZWN0ZWQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIG11bHRpQ2hhbmdlZDogZnVuY3Rpb24obXVsdGkpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24ubXVsdGkgPSBtdWx0aTtcbiAgICB0aGlzLl91cGRhdGVTZWxlY3RlZCgpO1xuICB9LFxuXG4gIC8vIFVOVVNFRCwgRk9SIEFQSSBDT01QQVRJQklMSVRZXG4gIGdldCBfc2hvdWxkVXBkYXRlU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkICE9IG51bGwgfHxcbiAgICAgICAgKHRoaXMuc2VsZWN0ZWRWYWx1ZXMgIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGVkVmFsdWVzLmxlbmd0aCk7XG4gIH0sXG5cbiAgX3VwZGF0ZUF0dHJGb3JTZWxlY3RlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm11bHRpKSB7XG4gICAgICBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yLl91cGRhdGVBdHRyRm9yU2VsZWN0ZWQuYXBwbHkodGhpcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc1xuICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmRleFRvVmFsdWUodGhpcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRoaXMpXG4gICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odW5maWx0ZXJlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZmlsdGVyZWRWYWx1ZSAhPSBudWxsO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgX3VwZGF0ZVNlbGVjdGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5tdWx0aSkge1xuICAgICAgdGhpcy5fc2VsZWN0TXVsdGkodGhpcy5zZWxlY3RlZFZhbHVlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdFNlbGVjdGVkKHRoaXMuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfSxcblxuICBfc2VsZWN0TXVsdGk6IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHZhbHVlcyA9IHZhbHVlcyB8fCBbXTtcblxuICAgIHZhciBzZWxlY3RlZEl0ZW1zID1cbiAgICAgICAgKHRoaXMuX3ZhbHVlc1RvSXRlbXModmFsdWVzKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gbnVsbCAmJiBpdGVtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gY2xlYXIgYWxsIGJ1dCB0aGUgY3VycmVudCBzZWxlY3RlZCBpdGVtc1xuICAgIHRoaXMuX3NlbGVjdGlvbi5jbGVhcihzZWxlY3RlZEl0ZW1zKTtcblxuICAgIC8vIHNlbGVjdCBvbmx5IHRob3NlIG5vdCBzZWxlY3RlZCB5ZXRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbi5zZXRJdGVtU2VsZWN0ZWQoc2VsZWN0ZWRJdGVtc1tpXSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGl0ZW1zLCBzaW5jZSB0aGlzIGFycmF5IGlzIHBvcHVsYXRlZCBvbmx5IHdoZW4gYXR0YWNoZWRcbiAgICBpZiAodGhpcy5mYWxsYmFja1NlbGVjdGlvbiAmJiAhdGhpcy5fc2VsZWN0aW9uLmdldCgpLmxlbmd0aCkge1xuICAgICAgdmFyIGZhbGxiYWNrID0gdGhpcy5fdmFsdWVUb0l0ZW0odGhpcy5mYWxsYmFja1NlbGVjdGlvbik7XG4gICAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5mYWxsYmFja1NlbGVjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9zZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzID0gdGhpcy5fc2VsZWN0aW9uLmdldCgpO1xuICAgIGlmICh0aGlzLm11bHRpKSB7XG4gICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW1zKHMpO1xuICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKHMubGVuZ3RoID8gc1swXSA6IG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocyAhPT0gbnVsbCAmJiBzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtcyhbc10pO1xuICAgICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0ocyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW1zKFtdKTtcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfdG9nZ2xlU2VsZWN0ZWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGkgPSB0aGlzLnNlbGVjdGVkVmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIHZhciB1bnNlbGVjdGVkID0gaSA8IDA7XG4gICAgaWYgKHVuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMucHVzaCgnc2VsZWN0ZWRWYWx1ZXMnLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3BsaWNlKCdzZWxlY3RlZFZhbHVlcycsIGksIDEpO1xuICAgIH1cbiAgfSxcblxuICBfdmFsdWVzVG9JdGVtczogZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgcmV0dXJuICh2YWx1ZXMgPT0gbnVsbCkgPyBudWxsIDogdmFsdWVzLm1hcChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlVG9JdGVtKHZhbHVlKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3IgPVxuICAgIFtJcm9uU2VsZWN0YWJsZUJlaGF2aW9yLCBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3JJbXBsXTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BO0FBRUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFuQkE7QUFDQTtBQXlCQTs7Ozs7QUFLQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBeFpBO0FBMlpBO0FBRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNyYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQXRCQTtBQWlDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9JQTtBQWtKQTtBQUNBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
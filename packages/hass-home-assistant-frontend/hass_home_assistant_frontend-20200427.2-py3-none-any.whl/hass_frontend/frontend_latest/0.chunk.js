(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@polymer/iron-selector/iron-selectable.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/iron-selector/iron-selectable.js ***!
  \****************************************************************/
/*! exports provided: IronSelectableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronSelectableBehavior", function() { return IronSelectableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
/* harmony import */ var _iron_selection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iron-selection.js */ "./node_modules/@polymer/iron-selector/iron-selection.js");
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
 * @polymerBehavior
 */

const IronSelectableBehavior = {
  /**
   * Fired when iron-selector is activated (selected or deselected).
   * It is fired before the selected items are changed.
   * Cancel the event to abort selection.
   *
   * @event iron-activate
   */

  /**
   * Fired when an item is selected
   *
   * @event iron-select
   */

  /**
   * Fired when an item is deselected
   *
   * @event iron-deselect
   */

  /**
   * Fired when the list of selectable items changes (e.g., items are
   * added or removed). The detail of the event is a mutation record that
   * describes what changed.
   *
   * @event iron-items-changed
   */
  properties: {
    /**
     * If you want to use an attribute value or property of an element for
     * `selected` instead of the index, set this to the name of the attribute
     * or property. Hyphenated values are converted to camel case when used to
     * look up the property of a selectable element. Camel cased values are
     * *not* converted to hyphenated values for attribute lookup. It's
     * recommended that you provide the hyphenated form of the name so that
     * selection works in both cases. (Use `attr-or-property-name` instead of
     * `attrOrPropertyName`.)
     */
    attrForSelected: {
      type: String,
      value: null
    },

    /**
     * Gets or sets the selected element. The default is to use the index of the
     * item.
     * @type {string|number}
     */
    selected: {
      type: String,
      notify: true
    },

    /**
     * Returns the currently selected item.
     *
     * @type {?Object}
     */
    selectedItem: {
      type: Object,
      readOnly: true,
      notify: true
    },

    /**
     * The event that fires from items when they are selected. Selectable
     * will listen for this event from items and update the selection state.
     * Set to empty string to listen to no events.
     */
    activateEvent: {
      type: String,
      value: 'tap',
      observer: '_activateEventChanged'
    },

    /**
     * This is a CSS selector string.  If this is set, only items that match the
     * CSS selector are selectable.
     */
    selectable: String,

    /**
     * The class to set on elements when selected.
     */
    selectedClass: {
      type: String,
      value: 'iron-selected'
    },

    /**
     * The attribute to set on elements when selected.
     */
    selectedAttribute: {
      type: String,
      value: null
    },

    /**
     * Default fallback if the selection based on selected with
     * `attrForSelected` is not found.
     */
    fallbackSelection: {
      type: String,
      value: null
    },

    /**
     * The list of items from which a selection can be made.
     */
    items: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function () {
        return [];
      }
    },

    /**
     * The set of excluded elements where the key is the `localName`
     * of the element that will be ignored from the item list.
     *
     * @default {template: 1}
     */
    _excludedLocalNames: {
      type: Object,
      value: function () {
        return {
          'template': 1,
          'dom-bind': 1,
          'dom-if': 1,
          'dom-repeat': 1
        };
      }
    }
  },
  observers: ['_updateAttrForSelected(attrForSelected)', '_updateSelected(selected)', '_checkFallback(fallbackSelection)'],
  created: function () {
    this._bindFilterItem = this._filterItem.bind(this);
    this._selection = new _iron_selection_js__WEBPACK_IMPORTED_MODULE_3__["IronSelection"](this._applySelection.bind(this));
  },
  attached: function () {
    this._observer = this._observeItems(this);

    this._addListener(this.activateEvent);
  },
  detached: function () {
    if (this._observer) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this).unobserveNodes(this._observer);
    }

    this._removeListener(this.activateEvent);
  },

  /**
   * Returns the index of the given item.
   *
   * @method indexOf
   * @param {Object} item
   * @returns Returns the index of the item
   */
  indexOf: function (item) {
    return this.items ? this.items.indexOf(item) : -1;
  },

  /**
   * Selects the given value.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function (value) {
    this.selected = value;
  },

  /**
   * Selects the previous item.
   *
   * @method selectPrevious
   */
  selectPrevious: function () {
    var length = this.items.length;
    var index = length - 1;

    if (this.selected !== undefined) {
      index = (Number(this._valueToIndex(this.selected)) - 1 + length) % length;
    }

    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the next item.
   *
   * @method selectNext
   */
  selectNext: function () {
    var index = 0;

    if (this.selected !== undefined) {
      index = (Number(this._valueToIndex(this.selected)) + 1) % this.items.length;
    }

    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the item at the given index.
   *
   * @method selectIndex
   */
  selectIndex: function (index) {
    this.select(this._indexToValue(index));
  },

  /**
   * Force a synchronous update of the `items` property.
   *
   * NOTE: Consider listening for the `iron-items-changed` event to respond to
   * updates to the set of selectable items after updates to the DOM list and
   * selection state have been made.
   *
   * WARNING: If you are using this method, you should probably consider an
   * alternate approach. Synchronously querying for items is potentially
   * slow for many use cases. The `items` property will update asynchronously
   * on its own to reflect selectable items in the DOM.
   */
  forceSynchronousItemUpdate: function () {
    if (this._observer && typeof this._observer.flush === 'function') {
      // NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
      // `observeNodes` callbacks. Polymer 2.x returns an object from
      // `observeNodes` with a `flush` that synchronously gives the callback any
      // pending MutationRecords (retrieved with `takeRecords`). Any case where
      // ShadyDOM flushes were expected to synchronously trigger item updates
      // will now require calling `forceSynchronousItemUpdate`.
      this._observer.flush();
    } else {
      this._updateItems();
    }
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null;
  },

  _checkFallback: function () {
    this._updateSelected();
  },
  _addListener: function (eventName) {
    this.listen(this, eventName, '_activateHandler');
  },
  _removeListener: function (eventName) {
    this.unlisten(this, eventName, '_activateHandler');
  },
  _activateEventChanged: function (eventName, old) {
    this._removeListener(old);

    this._addListener(eventName);
  },
  _updateItems: function () {
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this).queryDistributedElements(this.selectable || '*');
    nodes = Array.prototype.filter.call(nodes, this._bindFilterItem);

    this._setItems(nodes);
  },
  _updateAttrForSelected: function () {
    if (this.selectedItem) {
      this.selected = this._valueForItem(this.selectedItem);
    }
  },
  _updateSelected: function () {
    this._selectSelected(this.selected);
  },
  _selectSelected: function (selected) {
    if (!this.items) {
      return;
    }

    var item = this._valueToItem(this.selected);

    if (item) {
      this._selection.select(item);
    } else {
      this._selection.clear();
    } // Check for items, since this array is populated only when attached
    // Since Number(0) is falsy, explicitly check for undefined


    if (this.fallbackSelection && this.items.length && this._selection.get() === undefined) {
      this.selected = this.fallbackSelection;
    }
  },
  _filterItem: function (node) {
    return !this._excludedLocalNames[node.localName];
  },
  _valueToItem: function (value) {
    return value == null ? null : this.items[this._valueToIndex(value)];
  },
  _valueToIndex: function (value) {
    if (this.attrForSelected) {
      for (var i = 0, item; item = this.items[i]; i++) {
        if (this._valueForItem(item) == value) {
          return i;
        }
      }
    } else {
      return Number(value);
    }
  },
  _indexToValue: function (index) {
    if (this.attrForSelected) {
      var item = this.items[index];

      if (item) {
        return this._valueForItem(item);
      }
    } else {
      return index;
    }
  },
  _valueForItem: function (item) {
    if (!item) {
      return null;
    }

    if (!this.attrForSelected) {
      var i = this.indexOf(item);
      return i === -1 ? null : i;
    }

    var propValue = item[Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_2__["dashToCamelCase"])(this.attrForSelected)];
    return propValue != undefined ? propValue : item.getAttribute(this.attrForSelected);
  },
  _applySelection: function (item, isSelected) {
    if (this.selectedClass) {
      this.toggleClass(this.selectedClass, isSelected, item);
    }

    if (this.selectedAttribute) {
      this.toggleAttribute(this.selectedAttribute, isSelected, item);
    }

    this._selectionChange();

    this.fire('iron-' + (isSelected ? 'select' : 'deselect'), {
      item: item
    });
  },
  _selectionChange: function () {
    this._setSelectedItem(this._selection.get());
  },
  // observe items change under the given node.
  _observeItems: function (node) {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(node).observeNodes(function (mutation) {
      this._updateItems();

      this._updateSelected(); // Let other interested parties know about the change so that
      // we don't have to recreate mutation observers everywhere.


      this.fire('iron-items-changed', mutation, {
        bubbles: false,
        cancelable: false
      });
    });
  },
  _activateHandler: function (e) {
    var t = e.target;
    var items = this.items;

    while (t && t != this) {
      var i = items.indexOf(t);

      if (i >= 0) {
        var value = this._indexToValue(i);

        this._itemActivate(value, t);

        return;
      }

      t = t.parentNode;
    }
  },
  _itemActivate: function (value, item) {
    if (!this.fire('iron-activate', {
      selected: value,
      item: item
    }, {
      cancelable: true
    }).defaultPrevented) {
      this.select(value);
    }
  }
};

/***/ }),

/***/ "./node_modules/@polymer/iron-selector/iron-selection.js":
/*!***************************************************************!*\
  !*** ./node_modules/@polymer/iron-selector/iron-selection.js ***!
  \***************************************************************/
/*! exports provided: IronSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronSelection", function() { return IronSelection; });
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

class IronSelection {
  /**
   * @param {!Function} selectCallback
   * @suppress {missingProvide}
   */
  constructor(selectCallback) {
    this.selection = [];
    this.selectCallback = selectCallback;
  }
  /**
   * Retrieves the selected item(s).
   *
   * @returns Returns the selected item(s). If the multi property is true,
   * `get` will return an array, otherwise it will return
   * the selected item or undefined if there is no selection.
   */


  get() {
    return this.multi ? this.selection.slice() : this.selection[0];
  }
  /**
   * Clears all the selection except the ones indicated.
   *
   * @param {Array} excludes items to be excluded.
   */


  clear(excludes) {
    this.selection.slice().forEach(function (item) {
      if (!excludes || excludes.indexOf(item) < 0) {
        this.setItemSelected(item, false);
      }
    }, this);
  }
  /**
   * Indicates if a given item is selected.
   *
   * @param {*} item The item whose selection state should be checked.
   * @return {boolean} Returns true if `item` is selected.
   */


  isSelected(item) {
    return this.selection.indexOf(item) >= 0;
  }
  /**
   * Sets the selection state for a given item to either selected or deselected.
   *
   * @param {*} item The item to select.
   * @param {boolean} isSelected True for selected, false for deselected.
   */


  setItemSelected(item, isSelected) {
    if (item != null) {
      if (isSelected !== this.isSelected(item)) {
        // proceed to update selection only if requested state differs from
        // current
        if (isSelected) {
          this.selection.push(item);
        } else {
          var i = this.selection.indexOf(item);

          if (i >= 0) {
            this.selection.splice(i, 1);
          }
        }

        if (this.selectCallback) {
          this.selectCallback(item, isSelected);
        }
      }
    }
  }
  /**
   * Sets the selection state for a given item. If the `multi` property
   * is true, then the selected state of `item` will be toggled; otherwise
   * the `item` will be selected.
   *
   * @param {*} item The item to select.
   */


  select(item) {
    if (this.multi) {
      this.toggle(item);
    } else if (this.get() !== item) {
      this.setItemSelected(this.get(), false);
      this.setItemSelected(item, true);
    }
  }
  /**
   * Toggles the selection state for `item`.
   *
   * @param {*} item The item to toggle.
   */


  toggle(item) {
    this.setItemSelected(item, !this.isSelected(item));
  }

}
;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXNlbGVjdG9yL2lyb24tc2VsZWN0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1zZWxlY3Rvci9pcm9uLXNlbGVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtkYXNoVG9DYW1lbENhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzJztcblxuaW1wb3J0IHtJcm9uU2VsZWN0aW9ufSBmcm9tICcuL2lyb24tc2VsZWN0aW9uLmpzJztcblxuLyoqXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yID0ge1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGlyb24tc2VsZWN0b3IgaXMgYWN0aXZhdGVkIChzZWxlY3RlZCBvciBkZXNlbGVjdGVkKS5cbiAgICogSXQgaXMgZmlyZWQgYmVmb3JlIHRoZSBzZWxlY3RlZCBpdGVtcyBhcmUgY2hhbmdlZC5cbiAgICogQ2FuY2VsIHRoZSBldmVudCB0byBhYm9ydCBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBldmVudCBpcm9uLWFjdGl2YXRlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICpcbiAgICogQGV2ZW50IGlyb24tc2VsZWN0XG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGFuIGl0ZW0gaXMgZGVzZWxlY3RlZFxuICAgKlxuICAgKiBAZXZlbnQgaXJvbi1kZXNlbGVjdFxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgbGlzdCBvZiBzZWxlY3RhYmxlIGl0ZW1zIGNoYW5nZXMgKGUuZy4sIGl0ZW1zIGFyZVxuICAgKiBhZGRlZCBvciByZW1vdmVkKS4gVGhlIGRldGFpbCBvZiB0aGUgZXZlbnQgaXMgYSBtdXRhdGlvbiByZWNvcmQgdGhhdFxuICAgKiBkZXNjcmliZXMgd2hhdCBjaGFuZ2VkLlxuICAgKlxuICAgKiBAZXZlbnQgaXJvbi1pdGVtcy1jaGFuZ2VkXG4gICAqL1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSB3YW50IHRvIHVzZSBhbiBhdHRyaWJ1dGUgdmFsdWUgb3IgcHJvcGVydHkgb2YgYW4gZWxlbWVudCBmb3JcbiAgICAgKiBgc2VsZWN0ZWRgIGluc3RlYWQgb2YgdGhlIGluZGV4LCBzZXQgdGhpcyB0byB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gICAgICogb3IgcHJvcGVydHkuIEh5cGhlbmF0ZWQgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgdG8gY2FtZWwgY2FzZSB3aGVuIHVzZWQgdG9cbiAgICAgKiBsb29rIHVwIHRoZSBwcm9wZXJ0eSBvZiBhIHNlbGVjdGFibGUgZWxlbWVudC4gQ2FtZWwgY2FzZWQgdmFsdWVzIGFyZVxuICAgICAqICpub3QqIGNvbnZlcnRlZCB0byBoeXBoZW5hdGVkIHZhbHVlcyBmb3IgYXR0cmlidXRlIGxvb2t1cC4gSXQnc1xuICAgICAqIHJlY29tbWVuZGVkIHRoYXQgeW91IHByb3ZpZGUgdGhlIGh5cGhlbmF0ZWQgZm9ybSBvZiB0aGUgbmFtZSBzbyB0aGF0XG4gICAgICogc2VsZWN0aW9uIHdvcmtzIGluIGJvdGggY2FzZXMuIChVc2UgYGF0dHItb3ItcHJvcGVydHktbmFtZWAgaW5zdGVhZCBvZlxuICAgICAqIGBhdHRyT3JQcm9wZXJ0eU5hbWVgLilcbiAgICAgKi9cbiAgICBhdHRyRm9yU2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc2VsZWN0ZWQgZWxlbWVudC4gVGhlIGRlZmF1bHQgaXMgdG8gdXNlIHRoZSBpbmRleCBvZiB0aGVcbiAgICAgKiBpdGVtLlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqL1xuICAgIHNlbGVjdGVkOiB7dHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IHt0eXBlOiBPYmplY3QsIHJlYWRPbmx5OiB0cnVlLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGV2ZW50IHRoYXQgZmlyZXMgZnJvbSBpdGVtcyB3aGVuIHRoZXkgYXJlIHNlbGVjdGVkLiBTZWxlY3RhYmxlXG4gICAgICogd2lsbCBsaXN0ZW4gZm9yIHRoaXMgZXZlbnQgZnJvbSBpdGVtcyBhbmQgdXBkYXRlIHRoZSBzZWxlY3Rpb24gc3RhdGUuXG4gICAgICogU2V0IHRvIGVtcHR5IHN0cmluZyB0byBsaXN0ZW4gdG8gbm8gZXZlbnRzLlxuICAgICAqL1xuICAgIGFjdGl2YXRlRXZlbnQ6XG4gICAgICAgIHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAndGFwJywgb2JzZXJ2ZXI6ICdfYWN0aXZhdGVFdmVudENoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSBDU1Mgc2VsZWN0b3Igc3RyaW5nLiAgSWYgdGhpcyBpcyBzZXQsIG9ubHkgaXRlbXMgdGhhdCBtYXRjaCB0aGVcbiAgICAgKiBDU1Mgc2VsZWN0b3IgYXJlIHNlbGVjdGFibGUuXG4gICAgICovXG4gICAgc2VsZWN0YWJsZTogU3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNsYXNzIHRvIHNldCBvbiBlbGVtZW50cyB3aGVuIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdGVkQ2xhc3M6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnaXJvbi1zZWxlY3RlZCd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGF0dHJpYnV0ZSB0byBzZXQgb24gZWxlbWVudHMgd2hlbiBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEF0dHJpYnV0ZToge3R5cGU6IFN0cmluZywgdmFsdWU6IG51bGx9LFxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBmYWxsYmFjayBpZiB0aGUgc2VsZWN0aW9uIGJhc2VkIG9uIHNlbGVjdGVkIHdpdGhcbiAgICAgKiBgYXR0ckZvclNlbGVjdGVkYCBpcyBub3QgZm91bmQuXG4gICAgICovXG4gICAgZmFsbGJhY2tTZWxlY3Rpb246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGl0ZW1zIGZyb20gd2hpY2ggYSBzZWxlY3Rpb24gY2FuIGJlIG1hZGUuXG4gICAgICovXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNldCBvZiBleGNsdWRlZCBlbGVtZW50cyB3aGVyZSB0aGUga2V5IGlzIHRoZSBgbG9jYWxOYW1lYFxuICAgICAqIG9mIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBpZ25vcmVkIGZyb20gdGhlIGl0ZW0gbGlzdC5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IHt0ZW1wbGF0ZTogMX1cbiAgICAgKi9cbiAgICBfZXhjbHVkZWRMb2NhbE5hbWVzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgJ3RlbXBsYXRlJzogMSxcbiAgICAgICAgICAnZG9tLWJpbmQnOiAxLFxuICAgICAgICAgICdkb20taWYnOiAxLFxuICAgICAgICAgICdkb20tcmVwZWF0JzogMSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVBdHRyRm9yU2VsZWN0ZWQoYXR0ckZvclNlbGVjdGVkKScsXG4gICAgJ191cGRhdGVTZWxlY3RlZChzZWxlY3RlZCknLFxuICAgICdfY2hlY2tGYWxsYmFjayhmYWxsYmFja1NlbGVjdGlvbiknXG4gIF0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYmluZEZpbHRlckl0ZW0gPSB0aGlzLl9maWx0ZXJJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc2VsZWN0aW9uID0gbmV3IElyb25TZWxlY3Rpb24odGhpcy5fYXBwbHlTZWxlY3Rpb24uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fb2JzZXJ2ZUl0ZW1zKHRoaXMpO1xuICAgIHRoaXMuX2FkZExpc3RlbmVyKHRoaXMuYWN0aXZhdGVFdmVudCk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgZG9tKHRoaXMpLnVub2JzZXJ2ZU5vZGVzKHRoaXMuX29ic2VydmVyKTtcbiAgICB9XG4gICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIodGhpcy5hY3RpdmF0ZUV2ZW50KTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGdpdmVuIGl0ZW0uXG4gICAqXG4gICAqIEBtZXRob2QgaW5kZXhPZlxuICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaXRlbVxuICAgKi9cbiAgaW5kZXhPZjogZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pIDogLTE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGdpdmVuIHZhbHVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHZhbHVlIHRoZSB2YWx1ZSB0byBzZWxlY3QuXG4gICAqL1xuICBzZWxlY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBwcmV2aW91cyBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdFByZXZpb3VzXG4gICAqL1xuICBzZWxlY3RQcmV2aW91czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IGxlbmd0aCAtIDE7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5kZXggPSAoTnVtYmVyKHRoaXMuX3ZhbHVlVG9JbmRleCh0aGlzLnNlbGVjdGVkKSkgLSAxICsgbGVuZ3RoKSAlIGxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuX2luZGV4VG9WYWx1ZShpbmRleCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIG5leHQgaXRlbS5cbiAgICpcbiAgICogQG1ldGhvZCBzZWxlY3ROZXh0XG4gICAqL1xuICBzZWxlY3ROZXh0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGV4ID1cbiAgICAgICAgICAoTnVtYmVyKHRoaXMuX3ZhbHVlVG9JbmRleCh0aGlzLnNlbGVjdGVkKSkgKyAxKSAlIHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5faW5kZXhUb1ZhbHVlKGluZGV4KTtcbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0SW5kZXhcbiAgICovXG4gIHNlbGVjdEluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuX2luZGV4VG9WYWx1ZShpbmRleCkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZSBhIHN5bmNocm9ub3VzIHVwZGF0ZSBvZiB0aGUgYGl0ZW1zYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogTk9URTogQ29uc2lkZXIgbGlzdGVuaW5nIGZvciB0aGUgYGlyb24taXRlbXMtY2hhbmdlZGAgZXZlbnQgdG8gcmVzcG9uZCB0b1xuICAgKiB1cGRhdGVzIHRvIHRoZSBzZXQgb2Ygc2VsZWN0YWJsZSBpdGVtcyBhZnRlciB1cGRhdGVzIHRvIHRoZSBET00gbGlzdCBhbmRcbiAgICogc2VsZWN0aW9uIHN0YXRlIGhhdmUgYmVlbiBtYWRlLlxuICAgKlxuICAgKiBXQVJOSU5HOiBJZiB5b3UgYXJlIHVzaW5nIHRoaXMgbWV0aG9kLCB5b3Ugc2hvdWxkIHByb2JhYmx5IGNvbnNpZGVyIGFuXG4gICAqIGFsdGVybmF0ZSBhcHByb2FjaC4gU3luY2hyb25vdXNseSBxdWVyeWluZyBmb3IgaXRlbXMgaXMgcG90ZW50aWFsbHlcbiAgICogc2xvdyBmb3IgbWFueSB1c2UgY2FzZXMuIFRoZSBgaXRlbXNgIHByb3BlcnR5IHdpbGwgdXBkYXRlIGFzeW5jaHJvbm91c2x5XG4gICAqIG9uIGl0cyBvd24gdG8gcmVmbGVjdCBzZWxlY3RhYmxlIGl0ZW1zIGluIHRoZSBET00uXG4gICAqL1xuICBmb3JjZVN5bmNocm9ub3VzSXRlbVVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX29ic2VydmVyICYmIHR5cGVvZiB0aGlzLl9vYnNlcnZlci5mbHVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gTk9URShiaWNrbmVsbHIpOiBgZG9tLmZsdXNoYCBhYm92ZSBpcyBubyBsb25nZXIgc3VmZmljaWVudCB0byB0cmlnZ2VyXG4gICAgICAvLyBgb2JzZXJ2ZU5vZGVzYCBjYWxsYmFja3MuIFBvbHltZXIgMi54IHJldHVybnMgYW4gb2JqZWN0IGZyb21cbiAgICAgIC8vIGBvYnNlcnZlTm9kZXNgIHdpdGggYSBgZmx1c2hgIHRoYXQgc3luY2hyb25vdXNseSBnaXZlcyB0aGUgY2FsbGJhY2sgYW55XG4gICAgICAvLyBwZW5kaW5nIE11dGF0aW9uUmVjb3JkcyAocmV0cmlldmVkIHdpdGggYHRha2VSZWNvcmRzYCkuIEFueSBjYXNlIHdoZXJlXG4gICAgICAvLyBTaGFkeURPTSBmbHVzaGVzIHdlcmUgZXhwZWN0ZWQgdG8gc3luY2hyb25vdXNseSB0cmlnZ2VyIGl0ZW0gdXBkYXRlc1xuICAgICAgLy8gd2lsbCBub3cgcmVxdWlyZSBjYWxsaW5nIGBmb3JjZVN5bmNocm9ub3VzSXRlbVVwZGF0ZWAuXG4gICAgICB0aGlzLl9vYnNlcnZlci5mbHVzaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGVJdGVtcygpO1xuICAgIH1cbiAgfSxcblxuICAvLyBVTlVTRUQsIEZPUiBBUEkgQ09NUEFUSUJJTElUWVxuICBnZXQgX3Nob3VsZFVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCAhPSBudWxsO1xuICB9LFxuXG4gIF9jaGVja0ZhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVTZWxlY3RlZCgpO1xuICB9LFxuXG4gIF9hZGRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5saXN0ZW4odGhpcywgZXZlbnROYW1lLCAnX2FjdGl2YXRlSGFuZGxlcicpO1xuICB9LFxuXG4gIF9yZW1vdmVMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy51bmxpc3Rlbih0aGlzLCBldmVudE5hbWUsICdfYWN0aXZhdGVIYW5kbGVyJyk7XG4gIH0sXG5cbiAgX2FjdGl2YXRlRXZlbnRDaGFuZ2VkOiBmdW5jdGlvbihldmVudE5hbWUsIG9sZCkge1xuICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKG9sZCk7XG4gICAgdGhpcy5fYWRkTGlzdGVuZXIoZXZlbnROYW1lKTtcbiAgfSxcblxuICBfdXBkYXRlSXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlcyA9IGRvbSh0aGlzKS5xdWVyeURpc3RyaWJ1dGVkRWxlbWVudHModGhpcy5zZWxlY3RhYmxlIHx8ICcqJyk7XG4gICAgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwobm9kZXMsIHRoaXMuX2JpbmRGaWx0ZXJJdGVtKTtcbiAgICB0aGlzLl9zZXRJdGVtcyhub2Rlcyk7XG4gIH0sXG5cbiAgX3VwZGF0ZUF0dHJGb3JTZWxlY3RlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5fdmFsdWVGb3JJdGVtKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG4gIH0sXG5cbiAgX3VwZGF0ZVNlbGVjdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZWxlY3RTZWxlY3RlZCh0aGlzLnNlbGVjdGVkKTtcbiAgfSxcblxuICBfc2VsZWN0U2VsZWN0ZWQ6IGZ1bmN0aW9uKHNlbGVjdGVkKSB7XG4gICAgaWYgKCF0aGlzLml0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl92YWx1ZVRvSXRlbSh0aGlzLnNlbGVjdGVkKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uLnNlbGVjdChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgfVxuICAgIC8vIENoZWNrIGZvciBpdGVtcywgc2luY2UgdGhpcyBhcnJheSBpcyBwb3B1bGF0ZWQgb25seSB3aGVuIGF0dGFjaGVkXG4gICAgLy8gU2luY2UgTnVtYmVyKDApIGlzIGZhbHN5LCBleHBsaWNpdGx5IGNoZWNrIGZvciB1bmRlZmluZWRcbiAgICBpZiAodGhpcy5mYWxsYmFja1NlbGVjdGlvbiAmJiB0aGlzLml0ZW1zLmxlbmd0aCAmJlxuICAgICAgICAodGhpcy5fc2VsZWN0aW9uLmdldCgpID09PSB1bmRlZmluZWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5mYWxsYmFja1NlbGVjdGlvbjtcbiAgICB9XG4gIH0sXG5cbiAgX2ZpbHRlckl0ZW06IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gIXRoaXMuX2V4Y2x1ZGVkTG9jYWxOYW1lc1tub2RlLmxvY2FsTmFtZV07XG4gIH0sXG5cbiAgX3ZhbHVlVG9JdGVtOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgPT0gbnVsbCkgPyBudWxsIDogdGhpcy5pdGVtc1t0aGlzLl92YWx1ZVRvSW5kZXgodmFsdWUpXTtcbiAgfSxcblxuICBfdmFsdWVUb0luZGV4OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh0aGlzLmF0dHJGb3JTZWxlY3RlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGl0ZW07IGl0ZW0gPSB0aGlzLml0ZW1zW2ldOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlRm9ySXRlbShpdGVtKSA9PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBfaW5kZXhUb1ZhbHVlOiBmdW5jdGlvbihpbmRleCkge1xuICAgIGlmICh0aGlzLmF0dHJGb3JTZWxlY3RlZCkge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZUZvckl0ZW0oaXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH0sXG5cbiAgX3ZhbHVlRm9ySXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5hdHRyRm9yU2VsZWN0ZWQpIHtcbiAgICAgIHZhciBpID0gdGhpcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgcmV0dXJuIGkgPT09IC0xID8gbnVsbCA6IGk7XG4gICAgfVxuICAgIHZhciBwcm9wVmFsdWUgPSBpdGVtW2Rhc2hUb0NhbWVsQ2FzZSh0aGlzLmF0dHJGb3JTZWxlY3RlZCldO1xuICAgIHJldHVybiBwcm9wVmFsdWUgIT0gdW5kZWZpbmVkID8gcHJvcFZhbHVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0QXR0cmlidXRlKHRoaXMuYXR0ckZvclNlbGVjdGVkKTtcbiAgfSxcblxuICBfYXBwbHlTZWxlY3Rpb246IGZ1bmN0aW9uKGl0ZW0sIGlzU2VsZWN0ZWQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZENsYXNzKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuc2VsZWN0ZWRDbGFzcywgaXNTZWxlY3RlZCwgaXRlbSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkQXR0cmlidXRlKSB7XG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLnNlbGVjdGVkQXR0cmlidXRlLCBpc1NlbGVjdGVkLCBpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgdGhpcy5maXJlKCdpcm9uLScgKyAoaXNTZWxlY3RlZCA/ICdzZWxlY3QnIDogJ2Rlc2VsZWN0JyksIHtpdGVtOiBpdGVtfSk7XG4gIH0sXG5cbiAgX3NlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKHRoaXMuX3NlbGVjdGlvbi5nZXQoKSk7XG4gIH0sXG5cbiAgLy8gb2JzZXJ2ZSBpdGVtcyBjaGFuZ2UgdW5kZXIgdGhlIGdpdmVuIG5vZGUuXG4gIF9vYnNlcnZlSXRlbXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gZG9tKG5vZGUpLm9ic2VydmVOb2RlcyhmdW5jdGlvbihtdXRhdGlvbikge1xuICAgICAgdGhpcy5fdXBkYXRlSXRlbXMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkKCk7XG5cbiAgICAgIC8vIExldCBvdGhlciBpbnRlcmVzdGVkIHBhcnRpZXMga25vdyBhYm91dCB0aGUgY2hhbmdlIHNvIHRoYXRcbiAgICAgIC8vIHdlIGRvbid0IGhhdmUgdG8gcmVjcmVhdGUgbXV0YXRpb24gb2JzZXJ2ZXJzIGV2ZXJ5d2hlcmUuXG4gICAgICB0aGlzLmZpcmUoXG4gICAgICAgICAgJ2lyb24taXRlbXMtY2hhbmdlZCcsIG11dGF0aW9uLCB7YnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgX2FjdGl2YXRlSGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgIHZhciB0ID0gZS50YXJnZXQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICB3aGlsZSAodCAmJiB0ICE9IHRoaXMpIHtcbiAgICAgIHZhciBpID0gaXRlbXMuaW5kZXhPZih0KTtcbiAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5faW5kZXhUb1ZhbHVlKGkpO1xuICAgICAgICB0aGlzLl9pdGVtQWN0aXZhdGUodmFsdWUsIHQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0ID0gdC5wYXJlbnROb2RlO1xuICAgIH1cbiAgfSxcblxuICBfaXRlbUFjdGl2YXRlOiBmdW5jdGlvbih2YWx1ZSwgaXRlbSkge1xuICAgIGlmICghdGhpcy5maXJlKCdpcm9uLWFjdGl2YXRlJywge3NlbGVjdGVkOiB2YWx1ZSwgaXRlbTogaXRlbX0sIHtcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBJcm9uU2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBzZWxlY3RDYWxsYmFja1xuICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm92aWRlfVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2VsZWN0Q2FsbGJhY2spIHtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0Q2FsbGJhY2sgPSBzZWxlY3RDYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHNlbGVjdGVkIGl0ZW0ocykuXG4gICAqXG4gICAqIEByZXR1cm5zIFJldHVybnMgdGhlIHNlbGVjdGVkIGl0ZW0ocykuIElmIHRoZSBtdWx0aSBwcm9wZXJ0eSBpcyB0cnVlLFxuICAgKiBgZ2V0YCB3aWxsIHJldHVybiBhbiBhcnJheSwgb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuXG4gICAqIHRoZSBzZWxlY3RlZCBpdGVtIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGkgPyB0aGlzLnNlbGVjdGlvbi5zbGljZSgpIDogdGhpcy5zZWxlY3Rpb25bMF07XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCB0aGUgc2VsZWN0aW9uIGV4Y2VwdCB0aGUgb25lcyBpbmRpY2F0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4Y2x1ZGVzIGl0ZW1zIHRvIGJlIGV4Y2x1ZGVkLlxuICAgKi9cbiAgY2xlYXIoZXhjbHVkZXMpIHtcbiAgICB0aGlzLnNlbGVjdGlvbi5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYgKCFleGNsdWRlcyB8fCBleGNsdWRlcy5pbmRleE9mKGl0ZW0pIDwgMCkge1xuICAgICAgICB0aGlzLnNldEl0ZW1TZWxlY3RlZChpdGVtLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGBpdGVtYCBpcyBzZWxlY3RlZC5cbiAgICovXG4gIGlzU2VsZWN0ZWQoaXRlbSkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5pbmRleE9mKGl0ZW0pID49IDA7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0aW9uIHN0YXRlIGZvciBhIGdpdmVuIGl0ZW0gdG8gZWl0aGVyIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSB0byBzZWxlY3QuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZWxlY3RlZCBUcnVlIGZvciBzZWxlY3RlZCwgZmFsc2UgZm9yIGRlc2VsZWN0ZWQuXG4gICAqL1xuICBzZXRJdGVtU2VsZWN0ZWQoaXRlbSwgaXNTZWxlY3RlZCkge1xuICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1NlbGVjdGVkICE9PSB0aGlzLmlzU2VsZWN0ZWQoaXRlbSkpIHtcbiAgICAgICAgLy8gcHJvY2VlZCB0byB1cGRhdGUgc2VsZWN0aW9uIG9ubHkgaWYgcmVxdWVzdGVkIHN0YXRlIGRpZmZlcnMgZnJvbVxuICAgICAgICAvLyBjdXJyZW50XG4gICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuc2VsZWN0aW9uLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RDYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q2FsbGJhY2soaXRlbSwgaXNTZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0aW9uIHN0YXRlIGZvciBhIGdpdmVuIGl0ZW0uIElmIHRoZSBgbXVsdGlgIHByb3BlcnR5XG4gICAqIGlzIHRydWUsIHRoZW4gdGhlIHNlbGVjdGVkIHN0YXRlIG9mIGBpdGVtYCB3aWxsIGJlIHRvZ2dsZWQ7IG90aGVyd2lzZVxuICAgKiB0aGUgYGl0ZW1gIHdpbGwgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSB0byBzZWxlY3QuXG4gICAqL1xuICBzZWxlY3QoaXRlbSkge1xuICAgIGlmICh0aGlzLm11bHRpKSB7XG4gICAgICB0aGlzLnRvZ2dsZShpdGVtKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0KCkgIT09IGl0ZW0pIHtcbiAgICAgIHRoaXMuc2V0SXRlbVNlbGVjdGVkKHRoaXMuZ2V0KCksIGZhbHNlKTtcbiAgICAgIHRoaXMuc2V0SXRlbVNlbGVjdGVkKGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBzZWxlY3Rpb24gc3RhdGUgZm9yIGBpdGVtYC5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIHRvIHRvZ2dsZS5cbiAgICovXG4gIHRvZ2dsZShpdGVtKSB7XG4gICAgdGhpcy5zZXRJdGVtU2VsZWN0ZWQoaXRlbSwgIXRoaXMuaXNTZWxlY3RlZChpdGVtKSk7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUVBOzs7Ozs7OztBQVFBOzs7Ozs7QUFNQTs7Ozs7O0FBTUE7Ozs7Ozs7QUFRQTtBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVRBO0FBNUVBO0FBeUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUF4WEE7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUE5RkE7QUE4RkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
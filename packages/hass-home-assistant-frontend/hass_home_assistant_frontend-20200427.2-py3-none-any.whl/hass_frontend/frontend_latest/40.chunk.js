(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/@polymer/app-storage/app-storage-behavior.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/app-storage/app-storage-behavior.js ***!
  \*******************************************************************/
/*! exports provided: AppStorageBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStorageBehavior", function() { return AppStorageBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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

var SPLICES_RX = /\.splices$/;
var LENGTH_RX = /\.length$/;
var NUMBER_RX = /\.?#?([0-9]+)$/;
/**
 * AppStorageBehavior is an abstract behavior that makes it easy to
 * synchronize in-memory data and a persistent storage system, such as
 * the browser's IndexedDB, or a remote database like Firebase.
 *
 * For examples of how to use this behavior to write your own app storage
 * elements see `<app-localstorage-document>` here, or check out
 * [polymerfire](https://github.com/Firebase/polymerfire) and
 * [app-pouchdb](https://github.com/PolymerElements/app-pouchdb).
 *
 * @polymerBehavior
 */

const AppStorageBehavior = {
  properties: {
    /**
     * The data to synchronize.
     */
    data: {
      type: Object,
      notify: true,
      value: function () {
        return this.zeroValue;
      }
    },

    /**
     * If this is true transactions will happen one after the other,
     * never in parallel.
     *
     * Specifically, no transaction will begin until every previously
     * enqueued transaction by this element has completed.
     *
     * If it is false, new transactions will be executed as they are
     * received.
     */
    sequentialTransactions: {
      type: Boolean,
      value: false
    },

    /**
     * When true, will perform detailed logging.
     */
    log: {
      type: Boolean,
      value: false
    }
  },
  observers: ['__dataChanged(data.*)'],
  created: function () {
    this.__initialized = false;
    this.__syncingToMemory = false;
    this.__initializingStoredValue = null;
    this.__transactionQueueAdvances = Promise.resolve();
  },
  ready: function () {
    this._initializeStoredValue();
  },

  /**
   * Override this getter to return true if the value has never been
   * persisted to storage.
   *
   * @return {boolean}
   */
  get isNew() {
    return true;
  },

  /**
   * A promise that will resolve once all queued transactions
   * have completed.
   *
   * This field is updated as new transactions are enqueued, so it will
   * only wait for transactions which were enqueued when the field
   * was accessed.
   *
   * This promise never rejects.
   *
   * @return {Promise}
   */
  get transactionsComplete() {
    return this.__transactionQueueAdvances;
  },

  /**
   * Override this getter to define the default value to use when
   * there's no data stored.
   *
   * @return {*}
   */
  get zeroValue() {
    return undefined;
  },

  /**
   * Override this method.
   *
   * If the data value represented by this storage instance is new, this
   * method generates an attempt to write the value to storage.
   *
   *
   * @param {*} args
   * @return {Promise} a Promise that settles only once the write has.
   */
  saveValue: function (args) {
    return Promise.resolve();
  },

  /**
   * Optional. Override this method to clear out the mapping of this
   * storage object and a logical location within storage.
   *
   * If this method is supported, after it's called, isNew() should be
   * true.
   */
  reset: function () {},

  /**
   * Remove the data from storage.
   *
   * @return {Promise} A promise that settles once the destruction is
   *   complete.
   */
  destroy: function () {
    this.data = this.zeroValue;
    return this.saveValue();
  },

  /**
   * Perform the initial sync between storage and memory. This method
   * is called automatically while the element is being initialized.
   * Implementations may override it.
   *
   * If an implementation intends to call this method, it should instead
   * call _initializeStoredValue, which provides reentrancy protection.
   *
   * @return {Promise} A promise that settles once this process is
   *     complete.
   */
  initializeStoredValue: function () {
    if (this.isNew) {
      return Promise.resolve();
    } // If this is not a "new" model, then we should attempt
    // to read an initial value from storage:


    return this._getStoredValue('data').then(function (data) {
      this._log('Got stored value!', data, this.data);

      if (data == null) {
        return this._setStoredValue('data', this.data || this.zeroValue);
      } else {
        this.syncToMemory(function () {
          this.set('data', data);
        });
      }
    }.bind(this));
  },

  /**
   * Override this method to implement reading a value from storage.
   *
   *
   * @param {string} storagePath The path (through storage) of the value to
   *   create, relative to the root of storage associated with this instance.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. _If there is no
   *   such value at the provided path through storage, then the promise will
   *   resolve to `undefined`._ The promise will be rejected if the transaction
   *   fails for any reason.
   */
  getStoredValue: function (storagePath) {
    return Promise.resolve();
  },

  /**
   * Override this method to implement creating and updating
   * stored values.
   *
   *
   * @param {string} storagePath The path of the value to update, relative
   *   to the root storage path configured for this instance.
   * @param {*} value The updated in-memory value to apply to the stored value
   *   at the provided path.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. The promise
   *   will be rejected if the transaction fails for any reason.
   */
  setStoredValue: function (storagePath, value) {
    return Promise.resolve(value);
  },

  /**
   * Maps a Polymer databinding path to the corresponding path in the
   * storage system. Override to define a custom mapping.
   *
   * The inverse of storagePathToMemoryPath.
   *
   * @param {string} path An in-memory path through a storage object.
   * @return {string} The provided path mapped to the equivalent location in
   *   storage. This mapped version of the path is suitable for use with the
   *   CRUD operations on both memory and storage.
   */
  memoryPathToStoragePath: function (path) {
    return path;
  },

  /**
   * Maps a storage path to the corresponding Polymer databinding path.
   * Override to define a custom mapping.
   *
   * The inverse of memoryPathToStoragePath.
   *
   * @param {string} path The storage path through a storage object.
   * @return {string} The provided path through storage mapped to the
   *   equivalent Polymer path through the in-memory representation of storage.
   */
  storagePathToMemoryPath: function (path) {
    return path;
  },

  /**
   * Enables performing transformations on the in-memory representation of
   * storage without activating observers that will cause those
   * transformations to be re-applied to the storage backend. This is useful
   * for preventing redundant (or cyclical) application of transformations.
   *
   * @param {Function} operation A function that will perform the desired
   *   transformation. It will be called synchronously, when it is safe to
   *   apply the transformation.
   */
  syncToMemory: function (operation) {
    if (this.__syncingToMemory) {
      return;
    }

    this._group('Sync to memory.');

    this.__syncingToMemory = true;
    operation.call(this);
    this.__syncingToMemory = false;

    this._groupEnd('Sync to memory.');
  },

  /**
   * A convenience method. Returns true iff value is null, undefined,
   * an empty array, or an object with no keys.
   */
  valueIsEmpty: function (value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else if (Object.prototype.isPrototypeOf(value)) {
      return Object.keys(value).length === 0;
    } else {
      return value == null;
    }
  },

  /**
   * Like `getStoredValue` but called with a Polymer path rather than
   * a storage path.
   *
   * @param {string} path The Polymer path to get.
   * @return {Promise} A Promise of the value stored at that path.
   */
  _getStoredValue: function (path) {
    return this.getStoredValue(this.memoryPathToStoragePath(path));
  },

  /**
   * Like `setStoredValue` but called with a Polymer path rather than
   * a storage path.
   *
   * @param {string} path The Polymer path to update.
   * @param {*} value The updated in-memory value to apply to the stored value
   *   at the provided path.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. The promise
   *   will be rejected if the transaction fails for any reason.
   */
  _setStoredValue: function (path, value) {
    return this.setStoredValue(this.memoryPathToStoragePath(path), value);
  },

  /**
   * Enqueues the given function in the transaction queue.
   *
   * The transaction queue allows for optional parallelism/sequentiality
   * via the `sequentialTransactions` boolean property, as well as giving
   * the user a convenient way to wait for all pending transactions to
   * finish.
   *
   * The given function may be called immediately or after an arbitrary
   * delay. Its `this` context will be bound to the element.
   *
   * If the transaction performs any asynchronous operations it must
   * return a promise.
   *
   * @param {Function} transaction A function implementing the transaction.
   * @return {Promise} A promise that resolves once the transaction has
   *   finished. This promise will never reject.
   */
  _enqueueTransaction: function (transaction) {
    if (this.sequentialTransactions) {
      transaction = transaction.bind(this);
    } else {
      var result = transaction.call(this);

      transaction = function () {
        return result;
      };
    }

    return this.__transactionQueueAdvances = this.__transactionQueueAdvances.then(transaction).catch(function (error) {
      this._error('Error performing queued transaction.', error);
    }.bind(this));
  },

  /**
   * A wrapper around `console.log`.
   */
  _log: function (...args) {
    if (this.log) {
      console.log.apply(console, args);
    }
  },

  /**
   * A wrapper around `console.error`.
   */
  _error: function (...args) {
    if (this.log) {
      console.error.apply(console, args);
    }
  },

  /**
   * A wrapper around `console.group`.
   */
  _group: function (...args) {
    if (this.log) {
      console.group.apply(console, args);
    }
  },

  /**
   * A wrapper around `console.groupEnd`.
   */
  _groupEnd: function (...args) {
    if (this.log) {
      console.groupEnd.apply(console, args);
    }
  },

  /**
   * A reentrancy-save wrapper around `this.initializeStoredValue`.
   * Prefer calling this method over that one.
   *
   * @return {Promise} The result of calling `initializeStoredValue`,
   *   or `undefined` if called while initializing.
   */
  _initializeStoredValue: function () {
    if (this.__initializingStoredValue) {
      return;
    }

    this._group('Initializing stored value.');

    var initializingStoredValue = this.__initializingStoredValue = this.initializeStoredValue().then(function () {
      this.__initialized = true;
      this.__initializingStoredValue = null;

      this._groupEnd('Initializing stored value.');
    }.bind(this)).catch(function (e) {
      this.__initializingStoredValue = null;

      this._groupEnd('Initializing stored value.');
    }.bind(this));
    return this._enqueueTransaction(function () {
      return initializingStoredValue;
    });
  },
  __dataChanged: function (change) {
    if (this.isNew || this.__syncingToMemory || !this.__initialized || this.__pathCanBeIgnored(change.path)) {
      return;
    }

    var path = this.__normalizeMemoryPath(change.path);

    var value = change.value;
    var indexSplices = value && value.indexSplices;

    this._enqueueTransaction(function () {
      this._log('Setting', path + ':', indexSplices || value);

      if (indexSplices && this.__pathIsSplices(path)) {
        path = this.__parentPath(path);
        value = this.get(path);
      }

      return this._setStoredValue(path, value);
    });
  },
  __normalizeMemoryPath: function (path) {
    var parts = path.split('.');
    var parentPath = [];
    var currentPath = [];
    var normalizedPath = [];
    var index;

    for (var i = 0; i < parts.length; ++i) {
      currentPath.push(parts[i]);

      if (/^#/.test(parts[i])) {
        normalizedPath.push(this.get(parentPath).indexOf(this.get(currentPath)));
      } else {
        normalizedPath.push(parts[i]);
      }

      parentPath.push(parts[i]);
    }

    return normalizedPath.join('.');
  },
  __parentPath: function (path) {
    var parentPath = path.split('.');
    return parentPath.slice(0, parentPath.length - 1).join('.');
  },
  __pathCanBeIgnored: function (path) {
    return LENGTH_RX.test(path) && Array.isArray(this.get(this.__parentPath(path)));
  },
  __pathIsSplices: function (path) {
    return SPLICES_RX.test(path) && Array.isArray(this.get(this.__parentPath(path)));
  },
  __pathRefersToArray: function (path) {
    return (SPLICES_RX.test(path) || LENGTH_RX.test(path)) && Array.isArray(this.get(this.__parentPath(path)));
  },
  __pathTailToIndex: function (path) {
    var tail = path.split('.').pop();
    return window.parseInt(tail.replace(NUMBER_RX, '$1'), 10);
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-behavior.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-behavior.js ***!
  \*****************************************************************/
/*! exports provided: PaperItemBehaviorImpl, PaperItemBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehaviorImpl", function() { return PaperItemBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehavior", function() { return PaperItemBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
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
`PaperItemBehavior` is a convenience behavior shared by <paper-item> and
<paper-icon-item> that manages the shared control states and attributes of
the items.
*/

/** @polymerBehavior PaperItemBehavior */

const PaperItemBehaviorImpl = {
  hostAttributes: {
    role: 'option',
    tabindex: '0'
  }
};
/** @polymerBehavior */

const PaperItemBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], PaperItemBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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






/*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-item-body'
});

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-shared-styles.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
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




const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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
Material design:
[Lists](https://www.google.com/design/spec/components/lists.html)

`<paper-item>` is an interactive list item. By default, it is a horizontal
flexbox.

    <paper-item>Item</paper-item>

Use this element with `<paper-item-body>` to make Material Design styled
two-line and three-line items.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
      <iron-icon icon="warning"></iron-icon>
    </paper-item>

To use `paper-item` as a link, wrap it in an anchor tag. Since `paper-item` will
already receive focus, you may want to prevent the anchor tag from receiving
focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org/" tabindex="-1">
      <paper-item raised>Polymer Project</paper-item>
    </a>

If you are concerned about performance and want to use `paper-item` in a
`paper-listbox` with many items, you can just use a native `button` with the
`paper-item` class applied (provided you have correctly included the shared
styles):

    <style is="custom-style" include="paper-item-shared-styles"></style>

    <paper-listbox>
      <button class="paper-item" role="option">Inbox</button>
      <button class="paper-item" role="option">Starred</button>
      <button class="paper-item" role="option">Sent mail</button>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-min-height` | Minimum height of the item | `48px`
`--paper-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

### Accessibility

This element has `role="listitem"` by default. Depending on usage, it may be
more appropriate to set `role="menuitem"`, `role="menuitemcheckbox"` or
`role="menuitemradio"`.

    <paper-item role="menuitemcheckbox">
      <paper-item-body>
        Show your status
      </paper-item-body>
      <paper-checkbox></paper-checkbox>
    </paper-item>

@group Paper Elements
@element paper-item
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,
  is: 'paper-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(value => part => {
  if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
    if (value !== part.value) {
      const name = part.committer.name;
      part.committer.element.removeAttribute(name);
    }
  } else {
    part.setValue(value);
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvYXBwLXN0b3JhZ2UvYXBwLXN0b3JhZ2UtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLmpzIiwid2VicGFjazovLy8uLi9zcmMvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxudmFyIFNQTElDRVNfUlggPSAvXFwuc3BsaWNlcyQvO1xudmFyIExFTkdUSF9SWCA9IC9cXC5sZW5ndGgkLztcbnZhciBOVU1CRVJfUlggPSAvXFwuPyM/KFswLTldKykkLztcblxuLyoqXG4gKiBBcHBTdG9yYWdlQmVoYXZpb3IgaXMgYW4gYWJzdHJhY3QgYmVoYXZpb3IgdGhhdCBtYWtlcyBpdCBlYXN5IHRvXG4gKiBzeW5jaHJvbml6ZSBpbi1tZW1vcnkgZGF0YSBhbmQgYSBwZXJzaXN0ZW50IHN0b3JhZ2Ugc3lzdGVtLCBzdWNoIGFzXG4gKiB0aGUgYnJvd3NlcidzIEluZGV4ZWREQiwgb3IgYSByZW1vdGUgZGF0YWJhc2UgbGlrZSBGaXJlYmFzZS5cbiAqXG4gKiBGb3IgZXhhbXBsZXMgb2YgaG93IHRvIHVzZSB0aGlzIGJlaGF2aW9yIHRvIHdyaXRlIHlvdXIgb3duIGFwcCBzdG9yYWdlXG4gKiBlbGVtZW50cyBzZWUgYDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PmAgaGVyZSwgb3IgY2hlY2sgb3V0XG4gKiBbcG9seW1lcmZpcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GaXJlYmFzZS9wb2x5bWVyZmlyZSkgYW5kXG4gKiBbYXBwLXBvdWNoZGJdKGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvYXBwLXBvdWNoZGIpLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcFN0b3JhZ2VCZWhhdmlvciA9IHtcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHRvIHN5bmNocm9uaXplLlxuICAgICAqL1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuemVyb1ZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIGlzIHRydWUgdHJhbnNhY3Rpb25zIHdpbGwgaGFwcGVuIG9uZSBhZnRlciB0aGUgb3RoZXIsXG4gICAgICogbmV2ZXIgaW4gcGFyYWxsZWwuXG4gICAgICpcbiAgICAgKiBTcGVjaWZpY2FsbHksIG5vIHRyYW5zYWN0aW9uIHdpbGwgYmVnaW4gdW50aWwgZXZlcnkgcHJldmlvdXNseVxuICAgICAqIGVucXVldWVkIHRyYW5zYWN0aW9uIGJ5IHRoaXMgZWxlbWVudCBoYXMgY29tcGxldGVkLlxuICAgICAqXG4gICAgICogSWYgaXQgaXMgZmFsc2UsIG5ldyB0cmFuc2FjdGlvbnMgd2lsbCBiZSBleGVjdXRlZCBhcyB0aGV5IGFyZVxuICAgICAqIHJlY2VpdmVkLlxuICAgICAqL1xuICAgIHNlcXVlbnRpYWxUcmFuc2FjdGlvbnM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB3aWxsIHBlcmZvcm0gZGV0YWlsZWQgbG9nZ2luZy5cbiAgICAgKi9cbiAgICBsb2c6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19fZGF0YUNoYW5nZWQoZGF0YS4qKSddLFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX19pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuX19zeW5jaW5nVG9NZW1vcnkgPSBmYWxzZTtcbiAgICB0aGlzLl9faW5pdGlhbGl6aW5nU3RvcmVkVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX190cmFuc2FjdGlvblF1ZXVlQWR2YW5jZXMgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZVN0b3JlZFZhbHVlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgZ2V0dGVyIHRvIHJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgbmV2ZXIgYmVlblxuICAgKiBwZXJzaXN0ZWQgdG8gc3RvcmFnZS5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc05ldygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uY2UgYWxsIHF1ZXVlZCB0cmFuc2FjdGlvbnNcbiAgICogaGF2ZSBjb21wbGV0ZWQuXG4gICAqXG4gICAqIFRoaXMgZmllbGQgaXMgdXBkYXRlZCBhcyBuZXcgdHJhbnNhY3Rpb25zIGFyZSBlbnF1ZXVlZCwgc28gaXQgd2lsbFxuICAgKiBvbmx5IHdhaXQgZm9yIHRyYW5zYWN0aW9ucyB3aGljaCB3ZXJlIGVucXVldWVkIHdoZW4gdGhlIGZpZWxkXG4gICAqIHdhcyBhY2Nlc3NlZC5cbiAgICpcbiAgICogVGhpcyBwcm9taXNlIG5ldmVyIHJlamVjdHMuXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICBnZXQgdHJhbnNhY3Rpb25zQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX190cmFuc2FjdGlvblF1ZXVlQWR2YW5jZXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgZ2V0dGVyIHRvIGRlZmluZSB0aGUgZGVmYXVsdCB2YWx1ZSB0byB1c2Ugd2hlblxuICAgKiB0aGVyZSdzIG5vIGRhdGEgc3RvcmVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0IHplcm9WYWx1ZSgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogSWYgdGhlIGRhdGEgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhpcyBzdG9yYWdlIGluc3RhbmNlIGlzIG5ldywgdGhpc1xuICAgKiBtZXRob2QgZ2VuZXJhdGVzIGFuIGF0dGVtcHQgdG8gd3JpdGUgdGhlIHZhbHVlIHRvIHN0b3JhZ2UuXG4gICAqXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gYXJnc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBhIFByb21pc2UgdGhhdCBzZXR0bGVzIG9ubHkgb25jZSB0aGUgd3JpdGUgaGFzLlxuICAgKi9cbiAgc2F2ZVZhbHVlOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPcHRpb25hbC4gT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2xlYXIgb3V0IHRoZSBtYXBwaW5nIG9mIHRoaXNcbiAgICogc3RvcmFnZSBvYmplY3QgYW5kIGEgbG9naWNhbCBsb2NhdGlvbiB3aXRoaW4gc3RvcmFnZS5cbiAgICpcbiAgICogSWYgdGhpcyBtZXRob2QgaXMgc3VwcG9ydGVkLCBhZnRlciBpdCdzIGNhbGxlZCwgaXNOZXcoKSBzaG91bGQgYmVcbiAgICogdHJ1ZS5cbiAgICovXG4gIHJlc2V0OiBmdW5jdGlvbigpIHt9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGRhdGEgZnJvbSBzdG9yYWdlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCBzZXR0bGVzIG9uY2UgdGhlIGRlc3RydWN0aW9uIGlzXG4gICAqICAgY29tcGxldGUuXG4gICAqL1xuICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnplcm9WYWx1ZTtcbiAgICByZXR1cm4gdGhpcy5zYXZlVmFsdWUoKTtcbiAgfSxcblxuICAvKipcbiAgICogUGVyZm9ybSB0aGUgaW5pdGlhbCBzeW5jIGJldHdlZW4gc3RvcmFnZSBhbmQgbWVtb3J5LiBUaGlzIG1ldGhvZFxuICAgKiBpcyBjYWxsZWQgYXV0b21hdGljYWxseSB3aGlsZSB0aGUgZWxlbWVudCBpcyBiZWluZyBpbml0aWFsaXplZC5cbiAgICogSW1wbGVtZW50YXRpb25zIG1heSBvdmVycmlkZSBpdC5cbiAgICpcbiAgICogSWYgYW4gaW1wbGVtZW50YXRpb24gaW50ZW5kcyB0byBjYWxsIHRoaXMgbWV0aG9kLCBpdCBzaG91bGQgaW5zdGVhZFxuICAgKiBjYWxsIF9pbml0aWFsaXplU3RvcmVkVmFsdWUsIHdoaWNoIHByb3ZpZGVzIHJlZW50cmFuY3kgcHJvdGVjdGlvbi5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgc2V0dGxlcyBvbmNlIHRoaXMgcHJvY2VzcyBpc1xuICAgKiAgICAgY29tcGxldGUuXG4gICAqL1xuICBpbml0aWFsaXplU3RvcmVkVmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzTmV3KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBub3QgYSBcIm5ld1wiIG1vZGVsLCB0aGVuIHdlIHNob3VsZCBhdHRlbXB0XG4gICAgLy8gdG8gcmVhZCBhbiBpbml0aWFsIHZhbHVlIGZyb20gc3RvcmFnZTpcbiAgICByZXR1cm4gdGhpcy5fZ2V0U3RvcmVkVmFsdWUoJ2RhdGEnKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRoaXMuX2xvZygnR290IHN0b3JlZCB2YWx1ZSEnLCBkYXRhLCB0aGlzLmRhdGEpO1xuICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0U3RvcmVkVmFsdWUoJ2RhdGEnLCB0aGlzLmRhdGEgfHwgdGhpcy56ZXJvVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5zZXQoJ2RhdGEnLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW1wbGVtZW50IHJlYWRpbmcgYSB2YWx1ZSBmcm9tIHN0b3JhZ2UuXG4gICAqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yYWdlUGF0aCBUaGUgcGF0aCAodGhyb3VnaCBzdG9yYWdlKSBvZiB0aGUgdmFsdWUgdG9cbiAgICogICBjcmVhdGUsIHJlbGF0aXZlIHRvIHRoZSByb290IG9mIHN0b3JhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNhbm9uaWNhbCB2YWx1ZSBzdG9yZWRcbiAgICogICBhdCB0aGUgcHJvdmlkZWQgcGF0aCB3aGVuIHRoZSB0cmFuc2FjdGlvbiBoYXMgY29tcGxldGVkLiBfSWYgdGhlcmUgaXMgbm9cbiAgICogICBzdWNoIHZhbHVlIGF0IHRoZSBwcm92aWRlZCBwYXRoIHRocm91Z2ggc3RvcmFnZSwgdGhlbiB0aGUgcHJvbWlzZSB3aWxsXG4gICAqICAgcmVzb2x2ZSB0byBgdW5kZWZpbmVkYC5fIFRoZSBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgaWYgdGhlIHRyYW5zYWN0aW9uXG4gICAqICAgZmFpbHMgZm9yIGFueSByZWFzb24uXG4gICAqL1xuICBnZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24oc3RvcmFnZVBhdGgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGltcGxlbWVudCBjcmVhdGluZyBhbmQgdXBkYXRpbmdcbiAgICogc3RvcmVkIHZhbHVlcy5cbiAgICpcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VQYXRoIFRoZSBwYXRoIG9mIHRoZSB2YWx1ZSB0byB1cGRhdGUsIHJlbGF0aXZlXG4gICAqICAgdG8gdGhlIHJvb3Qgc3RvcmFnZSBwYXRoIGNvbmZpZ3VyZWQgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHVwZGF0ZWQgaW4tbWVtb3J5IHZhbHVlIHRvIGFwcGx5IHRvIHRoZSBzdG9yZWQgdmFsdWVcbiAgICogICBhdCB0aGUgcHJvdmlkZWQgcGF0aC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY2Fub25pY2FsIHZhbHVlIHN0b3JlZFxuICAgKiAgIGF0IHRoZSBwcm92aWRlZCBwYXRoIHdoZW4gdGhlIHRyYW5zYWN0aW9uIGhhcyBjb21wbGV0ZWQuIFRoZSBwcm9taXNlXG4gICAqICAgd2lsbCBiZSByZWplY3RlZCBpZiB0aGUgdHJhbnNhY3Rpb24gZmFpbHMgZm9yIGFueSByZWFzb24uXG4gICAqL1xuICBzZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24oc3RvcmFnZVBhdGgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1hcHMgYSBQb2x5bWVyIGRhdGFiaW5kaW5nIHBhdGggdG8gdGhlIGNvcnJlc3BvbmRpbmcgcGF0aCBpbiB0aGVcbiAgICogc3RvcmFnZSBzeXN0ZW0uIE92ZXJyaWRlIHRvIGRlZmluZSBhIGN1c3RvbSBtYXBwaW5nLlxuICAgKlxuICAgKiBUaGUgaW52ZXJzZSBvZiBzdG9yYWdlUGF0aFRvTWVtb3J5UGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQW4gaW4tbWVtb3J5IHBhdGggdGhyb3VnaCBhIHN0b3JhZ2Ugb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBwcm92aWRlZCBwYXRoIG1hcHBlZCB0byB0aGUgZXF1aXZhbGVudCBsb2NhdGlvbiBpblxuICAgKiAgIHN0b3JhZ2UuIFRoaXMgbWFwcGVkIHZlcnNpb24gb2YgdGhlIHBhdGggaXMgc3VpdGFibGUgZm9yIHVzZSB3aXRoIHRoZVxuICAgKiAgIENSVUQgb3BlcmF0aW9ucyBvbiBib3RoIG1lbW9yeSBhbmQgc3RvcmFnZS5cbiAgICovXG4gIG1lbW9yeVBhdGhUb1N0b3JhZ2VQYXRoOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1hcHMgYSBzdG9yYWdlIHBhdGggdG8gdGhlIGNvcnJlc3BvbmRpbmcgUG9seW1lciBkYXRhYmluZGluZyBwYXRoLlxuICAgKiBPdmVycmlkZSB0byBkZWZpbmUgYSBjdXN0b20gbWFwcGluZy5cbiAgICpcbiAgICogVGhlIGludmVyc2Ugb2YgbWVtb3J5UGF0aFRvU3RvcmFnZVBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBzdG9yYWdlIHBhdGggdGhyb3VnaCBhIHN0b3JhZ2Ugb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBwcm92aWRlZCBwYXRoIHRocm91Z2ggc3RvcmFnZSBtYXBwZWQgdG8gdGhlXG4gICAqICAgZXF1aXZhbGVudCBQb2x5bWVyIHBhdGggdGhyb3VnaCB0aGUgaW4tbWVtb3J5IHJlcHJlc2VudGF0aW9uIG9mIHN0b3JhZ2UuXG4gICAqL1xuICBzdG9yYWdlUGF0aFRvTWVtb3J5UGF0aDogZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiBwYXRoO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHBlcmZvcm1pbmcgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBpbi1tZW1vcnkgcmVwcmVzZW50YXRpb24gb2ZcbiAgICogc3RvcmFnZSB3aXRob3V0IGFjdGl2YXRpbmcgb2JzZXJ2ZXJzIHRoYXQgd2lsbCBjYXVzZSB0aG9zZVxuICAgKiB0cmFuc2Zvcm1hdGlvbnMgdG8gYmUgcmUtYXBwbGllZCB0byB0aGUgc3RvcmFnZSBiYWNrZW5kLiBUaGlzIGlzIHVzZWZ1bFxuICAgKiBmb3IgcHJldmVudGluZyByZWR1bmRhbnQgKG9yIGN5Y2xpY2FsKSBhcHBsaWNhdGlvbiBvZiB0cmFuc2Zvcm1hdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9wZXJhdGlvbiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBwZXJmb3JtIHRoZSBkZXNpcmVkXG4gICAqICAgdHJhbnNmb3JtYXRpb24uIEl0IHdpbGwgYmUgY2FsbGVkIHN5bmNocm9ub3VzbHksIHdoZW4gaXQgaXMgc2FmZSB0b1xuICAgKiAgIGFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbi5cbiAgICovXG4gIHN5bmNUb01lbW9yeTogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgaWYgKHRoaXMuX19zeW5jaW5nVG9NZW1vcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ncm91cCgnU3luYyB0byBtZW1vcnkuJyk7XG5cbiAgICB0aGlzLl9fc3luY2luZ1RvTWVtb3J5ID0gdHJ1ZTtcbiAgICBvcGVyYXRpb24uY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9fc3luY2luZ1RvTWVtb3J5ID0gZmFsc2U7XG5cbiAgICB0aGlzLl9ncm91cEVuZCgnU3luYyB0byBtZW1vcnkuJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgbWV0aG9kLiBSZXR1cm5zIHRydWUgaWZmIHZhbHVlIGlzIG51bGwsIHVuZGVmaW5lZCxcbiAgICogYW4gZW1wdHkgYXJyYXksIG9yIGFuIG9iamVjdCB3aXRoIG5vIGtleXMuXG4gICAqL1xuICB2YWx1ZUlzRW1wdHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTGlrZSBgZ2V0U3RvcmVkVmFsdWVgIGJ1dCBjYWxsZWQgd2l0aCBhIFBvbHltZXIgcGF0aCByYXRoZXIgdGhhblxuICAgKiBhIHN0b3JhZ2UgcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIFBvbHltZXIgcGF0aCB0byBnZXQuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgUHJvbWlzZSBvZiB0aGUgdmFsdWUgc3RvcmVkIGF0IHRoYXQgcGF0aC5cbiAgICovXG4gIF9nZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0b3JlZFZhbHVlKHRoaXMubWVtb3J5UGF0aFRvU3RvcmFnZVBhdGgocGF0aCkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBMaWtlIGBzZXRTdG9yZWRWYWx1ZWAgYnV0IGNhbGxlZCB3aXRoIGEgUG9seW1lciBwYXRoIHJhdGhlciB0aGFuXG4gICAqIGEgc3RvcmFnZSBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgUG9seW1lciBwYXRoIHRvIHVwZGF0ZS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdXBkYXRlZCBpbi1tZW1vcnkgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHN0b3JlZCB2YWx1ZVxuICAgKiAgIGF0IHRoZSBwcm92aWRlZCBwYXRoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjYW5vbmljYWwgdmFsdWUgc3RvcmVkXG4gICAqICAgYXQgdGhlIHByb3ZpZGVkIHBhdGggd2hlbiB0aGUgdHJhbnNhY3Rpb24gaGFzIGNvbXBsZXRlZC4gVGhlIHByb21pc2VcbiAgICogICB3aWxsIGJlIHJlamVjdGVkIGlmIHRoZSB0cmFuc2FjdGlvbiBmYWlscyBmb3IgYW55IHJlYXNvbi5cbiAgICovXG4gIF9zZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24ocGF0aCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRTdG9yZWRWYWx1ZSh0aGlzLm1lbW9yeVBhdGhUb1N0b3JhZ2VQYXRoKHBhdGgpLCB2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVucXVldWVzIHRoZSBnaXZlbiBmdW5jdGlvbiBpbiB0aGUgdHJhbnNhY3Rpb24gcXVldWUuXG4gICAqXG4gICAqIFRoZSB0cmFuc2FjdGlvbiBxdWV1ZSBhbGxvd3MgZm9yIG9wdGlvbmFsIHBhcmFsbGVsaXNtL3NlcXVlbnRpYWxpdHlcbiAgICogdmlhIHRoZSBgc2VxdWVudGlhbFRyYW5zYWN0aW9uc2AgYm9vbGVhbiBwcm9wZXJ0eSwgYXMgd2VsbCBhcyBnaXZpbmdcbiAgICogdGhlIHVzZXIgYSBjb252ZW5pZW50IHdheSB0byB3YWl0IGZvciBhbGwgcGVuZGluZyB0cmFuc2FjdGlvbnMgdG9cbiAgICogZmluaXNoLlxuICAgKlxuICAgKiBUaGUgZ2l2ZW4gZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBpbW1lZGlhdGVseSBvciBhZnRlciBhbiBhcmJpdHJhcnlcbiAgICogZGVsYXkuIEl0cyBgdGhpc2AgY29udGV4dCB3aWxsIGJlIGJvdW5kIHRvIHRoZSBlbGVtZW50LlxuICAgKlxuICAgKiBJZiB0aGUgdHJhbnNhY3Rpb24gcGVyZm9ybXMgYW55IGFzeW5jaHJvbm91cyBvcGVyYXRpb25zIGl0IG11c3RcbiAgICogcmV0dXJuIGEgcHJvbWlzZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNhY3Rpb24gQSBmdW5jdGlvbiBpbXBsZW1lbnRpbmcgdGhlIHRyYW5zYWN0aW9uLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIHRoZSB0cmFuc2FjdGlvbiBoYXNcbiAgICogICBmaW5pc2hlZC4gVGhpcyBwcm9taXNlIHdpbGwgbmV2ZXIgcmVqZWN0LlxuICAgKi9cbiAgX2VucXVldWVUcmFuc2FjdGlvbjogZnVuY3Rpb24odHJhbnNhY3Rpb24pIHtcbiAgICBpZiAodGhpcy5zZXF1ZW50aWFsVHJhbnNhY3Rpb25zKSB7XG4gICAgICB0cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uLmJpbmQodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSB0cmFuc2FjdGlvbi5jYWxsKHRoaXMpO1xuICAgICAgdHJhbnNhY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX190cmFuc2FjdGlvblF1ZXVlQWR2YW5jZXMgPVxuICAgICAgICAgICAgICAgdGhpcy5fX3RyYW5zYWN0aW9uUXVldWVBZHZhbmNlcy50aGVuKHRyYW5zYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgcXVldWVkIHRyYW5zYWN0aW9uLicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIHdyYXBwZXIgYXJvdW5kIGBjb25zb2xlLmxvZ2AuXG4gICAqL1xuICBfbG9nOiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgd3JhcHBlciBhcm91bmQgYGNvbnNvbGUuZXJyb3JgLlxuICAgKi9cbiAgX2Vycm9yOiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMubG9nKSB7XG4gICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQSB3cmFwcGVyIGFyb3VuZCBgY29uc29sZS5ncm91cGAuXG4gICAqL1xuICBfZ3JvdXA6IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy5sb2cpIHtcbiAgICAgIGNvbnNvbGUuZ3JvdXAuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBIHdyYXBwZXIgYXJvdW5kIGBjb25zb2xlLmdyb3VwRW5kYC5cbiAgICovXG4gIF9ncm91cEVuZDogZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGlmICh0aGlzLmxvZykge1xuICAgICAgY29uc29sZS5ncm91cEVuZC5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgcmVlbnRyYW5jeS1zYXZlIHdyYXBwZXIgYXJvdW5kIGB0aGlzLmluaXRpYWxpemVTdG9yZWRWYWx1ZWAuXG4gICAqIFByZWZlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG92ZXIgdGhhdCBvbmUuXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFRoZSByZXN1bHQgb2YgY2FsbGluZyBgaW5pdGlhbGl6ZVN0b3JlZFZhbHVlYCxcbiAgICogICBvciBgdW5kZWZpbmVkYCBpZiBjYWxsZWQgd2hpbGUgaW5pdGlhbGl6aW5nLlxuICAgKi9cbiAgX2luaXRpYWxpemVTdG9yZWRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX19pbml0aWFsaXppbmdTdG9yZWRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2dyb3VwKCdJbml0aWFsaXppbmcgc3RvcmVkIHZhbHVlLicpO1xuXG4gICAgdmFyIGluaXRpYWxpemluZ1N0b3JlZFZhbHVlID0gdGhpcy5fX2luaXRpYWxpemluZ1N0b3JlZFZhbHVlID1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplU3RvcmVkVmFsdWUoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuX19pbml0aWFsaXppbmdTdG9yZWRWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMuX2dyb3VwRW5kKCdJbml0aWFsaXppbmcgc3RvcmVkIHZhbHVlLicpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5fX2luaXRpYWxpemluZ1N0b3JlZFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBFbmQoJ0luaXRpYWxpemluZyBzdG9yZWQgdmFsdWUuJyk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VucXVldWVUcmFuc2FjdGlvbihmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbml0aWFsaXppbmdTdG9yZWRWYWx1ZTtcbiAgICB9KTtcbiAgfSxcblxuICBfX2RhdGFDaGFuZ2VkOiBmdW5jdGlvbihjaGFuZ2UpIHtcbiAgICBpZiAodGhpcy5pc05ldyB8fCB0aGlzLl9fc3luY2luZ1RvTWVtb3J5IHx8ICF0aGlzLl9faW5pdGlhbGl6ZWQgfHxcbiAgICAgICAgdGhpcy5fX3BhdGhDYW5CZUlnbm9yZWQoY2hhbmdlLnBhdGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhdGggPSB0aGlzLl9fbm9ybWFsaXplTWVtb3J5UGF0aChjaGFuZ2UucGF0aCk7XG4gICAgdmFyIHZhbHVlID0gY2hhbmdlLnZhbHVlO1xuICAgIHZhciBpbmRleFNwbGljZXMgPSB2YWx1ZSAmJiB2YWx1ZS5pbmRleFNwbGljZXM7XG5cbiAgICB0aGlzLl9lbnF1ZXVlVHJhbnNhY3Rpb24oZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9sb2coJ1NldHRpbmcnLCBwYXRoICsgJzonLCBpbmRleFNwbGljZXMgfHwgdmFsdWUpO1xuXG4gICAgICBpZiAoaW5kZXhTcGxpY2VzICYmIHRoaXMuX19wYXRoSXNTcGxpY2VzKHBhdGgpKSB7XG4gICAgICAgIHBhdGggPSB0aGlzLl9fcGFyZW50UGF0aChwYXRoKTtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldChwYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3NldFN0b3JlZFZhbHVlKHBhdGgsIHZhbHVlKTtcbiAgICB9KTtcbiAgfSxcblxuICBfX25vcm1hbGl6ZU1lbW9yeVBhdGg6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgdmFyIHBhcmVudFBhdGggPSBbXTtcbiAgICB2YXIgY3VycmVudFBhdGggPSBbXTtcbiAgICB2YXIgbm9ybWFsaXplZFBhdGggPSBbXTtcbiAgICB2YXIgaW5kZXg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjdXJyZW50UGF0aC5wdXNoKHBhcnRzW2ldKTtcbiAgICAgIGlmICgvXiMvLnRlc3QocGFydHNbaV0pKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRQYXRoLnB1c2goXG4gICAgICAgICAgICB0aGlzLmdldChwYXJlbnRQYXRoKS5pbmRleE9mKHRoaXMuZ2V0KGN1cnJlbnRQYXRoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9ybWFsaXplZFBhdGgucHVzaChwYXJ0c1tpXSk7XG4gICAgICB9XG4gICAgICBwYXJlbnRQYXRoLnB1c2gocGFydHNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemVkUGF0aC5qb2luKCcuJyk7XG4gIH0sXG5cbiAgX19wYXJlbnRQYXRoOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgdmFyIHBhcmVudFBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgcmV0dXJuIHBhcmVudFBhdGguc2xpY2UoMCwgcGFyZW50UGF0aC5sZW5ndGggLSAxKS5qb2luKCcuJyk7XG4gIH0sXG5cbiAgX19wYXRoQ2FuQmVJZ25vcmVkOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgcmV0dXJuIExFTkdUSF9SWC50ZXN0KHBhdGgpICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5nZXQodGhpcy5fX3BhcmVudFBhdGgocGF0aCkpKTtcbiAgfSxcblxuICBfX3BhdGhJc1NwbGljZXM6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gU1BMSUNFU19SWC50ZXN0KHBhdGgpICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5nZXQodGhpcy5fX3BhcmVudFBhdGgocGF0aCkpKTtcbiAgfSxcblxuICBfX3BhdGhSZWZlcnNUb0FycmF5OiBmdW5jdGlvbihwYXRoKSB7XG4gICAgcmV0dXJuIChTUExJQ0VTX1JYLnRlc3QocGF0aCkgfHwgTEVOR1RIX1JYLnRlc3QocGF0aCkpICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5nZXQodGhpcy5fX3BhcmVudFBhdGgocGF0aCkpKTtcbiAgfSxcblxuICBfX3BhdGhUYWlsVG9JbmRleDogZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciB0YWlsID0gcGF0aC5zcGxpdCgnLicpLnBvcCgpO1xuICAgIHJldHVybiB3aW5kb3cucGFyc2VJbnQodGFpbC5yZXBsYWNlKE5VTUJFUl9SWCwgJyQxJyksIDEwKTtcbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG4vKlxuYFBhcGVySXRlbUJlaGF2aW9yYCBpcyBhIGNvbnZlbmllbmNlIGJlaGF2aW9yIHNoYXJlZCBieSA8cGFwZXItaXRlbT4gYW5kXG48cGFwZXItaWNvbi1pdGVtPiB0aGF0IG1hbmFnZXMgdGhlIHNoYXJlZCBjb250cm9sIHN0YXRlcyBhbmQgYXR0cmlidXRlcyBvZlxudGhlIGl0ZW1zLlxuKi9cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySXRlbUJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3JJbXBsID0ge1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdvcHRpb24nLCB0YWJpbmRleDogJzAnfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvciA9XG4gICAgW0lyb25CdXR0b25TdGF0ZSwgSXJvbkNvbnRyb2xTdGF0ZSwgUGFwZXJJdGVtQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5Vc2UgYDxwYXBlci1pdGVtLWJvZHk+YCBpbiBhIGA8cGFwZXItaXRlbT5gIG9yIGA8cGFwZXItaWNvbi1pdGVtPmAgdG8gbWFrZSB0d28tXG5vciB0aHJlZS0gbGluZSBpdGVtcy4gSXQgaXMgYSBmbGV4IGl0ZW0gdGhhdCBpcyBhIHZlcnRpY2FsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRoZSBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBgc2Vjb25kYXJ5YCBhdHRyaWJ1dGUgaXMgZ2l2ZW4gc2Vjb25kYXJ5IHRleHRcbnN0eWxpbmcuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHR3by1saW5lIGl0ZW0gfCBgNzJweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0aHJlZS1saW5lIGl0ZW0gfCBgODhweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3JgIHwgRm9yZWdyb3VuZCBjb2xvciBmb3IgdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnlgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBuZWVkZWQgZm9yIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHRvIHdvcmsgb24gZmYgKi9cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWp1c3RpZmllZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0d28tbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHQsIDcycHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhyZWUtbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodCwgODhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKFtzZWNvbmRhcnldKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0tYm9keSdcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0LCAucGFwZXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAucGFwZXItaXRlbSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pLCAucGFwZXItaXRlbVtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXJvbi1zZWxlY3RlZCksIC5wYXBlci1pdGVtLmlyb24tc2VsZWN0ZWQge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHQsIGJvbGQpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pLCAucGFwZXItaXRlbVtkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvciwgdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cyksIC5wYXBlci1pdGVtOmZvY3VzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKTpiZWZvcmUsIC5wYXBlci1pdGVtOmZvY3VzOmJlZm9yZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG5cbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1kaXZpZGVyLW9wYWNpdHkpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0xpc3RzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvbGlzdHMuaHRtbClcblxuYDxwYXBlci1pdGVtPmAgaXMgYW4gaW50ZXJhY3RpdmUgbGlzdCBpdGVtLiBCeSBkZWZhdWx0LCBpdCBpcyBhIGhvcml6b250YWxcbmZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5JdGVtPC9wYXBlci1pdGVtPlxuXG5Vc2UgdGhpcyBlbGVtZW50IHdpdGggYDxwYXBlci1pdGVtLWJvZHk+YCB0byBtYWtlIE1hdGVyaWFsIERlc2lnbiBzdHlsZWRcbnR3by1saW5lIGFuZCB0aHJlZS1saW5lIGl0ZW1zLlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UbyB1c2UgYHBhcGVyLWl0ZW1gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZSBgcGFwZXItaXRlbWAgd2lsbFxuYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGUgYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZ1xuZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnL1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pdGVtIHJhaXNlZD5Qb2x5bWVyIFByb2plY3Q8L3BhcGVyLWl0ZW0+XG4gICAgPC9hPlxuXG5JZiB5b3UgYXJlIGNvbmNlcm5lZCBhYm91dCBwZXJmb3JtYW5jZSBhbmQgd2FudCB0byB1c2UgYHBhcGVyLWl0ZW1gIGluIGFcbmBwYXBlci1saXN0Ym94YCB3aXRoIG1hbnkgaXRlbXMsIHlvdSBjYW4ganVzdCB1c2UgYSBuYXRpdmUgYGJ1dHRvbmAgd2l0aCB0aGVcbmBwYXBlci1pdGVtYCBjbGFzcyBhcHBsaWVkIChwcm92aWRlZCB5b3UgaGF2ZSBjb3JyZWN0bHkgaW5jbHVkZWQgdGhlIHNoYXJlZFxuc3R5bGVzKTpcblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5JbmJveDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U3RhcnJlZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U2VudCBtYWlsPC9idXR0b24+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIHRoZSBpdGVtIHwgYDQ4cHhgXG5gLS1wYXBlci1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cblRoaXMgZWxlbWVudCBoYXMgYHJvbGU9XCJsaXN0aXRlbVwiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdXNhZ2UsIGl0IG1heSBiZVxubW9yZSBhcHByb3ByaWF0ZSB0byBzZXQgYHJvbGU9XCJtZW51aXRlbVwiYCwgYHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCJgIG9yXG5gcm9sZT1cIm1lbnVpdGVtcmFkaW9cImAuXG5cbiAgICA8cGFwZXItaXRlbSByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgU2hvdyB5b3VyIHN0YXR1c1xuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8cGFwZXItY2hlY2tib3g+PC9wYXBlci1jaGVja2JveD5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaXRlbVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7QXR0cmlidXRlUGFydCwgZGlyZWN0aXZlLCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogRm9yIEF0dHJpYnV0ZVBhcnRzLCBzZXRzIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQgYW5kIHJlbW92ZXNcbiAqIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBGb3Igb3RoZXIgcGFydCB0eXBlcywgdGhpcyBkaXJlY3RpdmUgaXMgYSBuby1vcC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlmRGVmaW5lZCA9IGRpcmVjdGl2ZSgodmFsdWU6IHVua25vd24pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB7XG4gICAgaWYgKHZhbHVlICE9PSBwYXJ0LnZhbHVlKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGFydC5jb21taXR0ZXIubmFtZTtcbiAgICAgIHBhcnQuY29tbWl0dGVyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUEzQkE7QUE4QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBdGJBOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE0QkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQW9DQTtBQXBDQTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0RBOzs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTtBQUNBOzs7Ozs7Ozs7OztBQURBO0FBY0E7QUFDQTtBQWZBOzs7Ozs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
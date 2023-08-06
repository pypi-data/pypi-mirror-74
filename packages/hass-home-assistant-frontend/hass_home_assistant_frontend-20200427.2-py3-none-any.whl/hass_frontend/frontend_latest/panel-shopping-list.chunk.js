(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-shopping-list"],{

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

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: isComponentLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponentLoaded", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
const isComponentLoaded = (hass, component) => hass && hass.config.components.indexOf(component) !== -1;

/***/ }),

/***/ "./src/dialogs/voice-command-dialog/show-ha-voice-command-dialog.ts":
/*!**************************************************************************!*\
  !*** ./src/dialogs/voice-command-dialog/show-ha-voice-command-dialog.ts ***!
  \**************************************************************************/
/*! exports provided: showVoiceCommandDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showVoiceCommandDialog", function() { return showVoiceCommandDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


const loadVoiceCommandDialog = () => Promise.all(/*! import() | ha-voice-command-dialog */[__webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e("ha-voice-command-dialog")]).then(__webpack_require__.bind(null, /*! ./ha-voice-command-dialog */ "./src/dialogs/voice-command-dialog/ha-voice-command-dialog.ts"));

const showVoiceCommandDialog = element => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "ha-voice-command-dialog",
    dialogImport: loadVoiceCommandDialog,
    dialogParams: {}
  });
};

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

/***/ "./src/panels/shopping-list/ha-panel-shopping-list.js":
/*!************************************************************!*\
  !*** ./src/panels/shopping-list/ha-panel-shopping-list.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _dialogs_voice_command_dialog_show_ha_voice_command_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dialogs/voice-command-dialog/show-ha-voice-command-dialog */ "./src/dialogs/voice-command-dialog/show-ha-voice-command-dialog.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");












/* eslint-plugin-disable lit */







/*
 * @appliesMixin LocalizeMixin
 */

class HaPanelShoppingList extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_12__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_11__["html"]`
      <style include="ha-style">
        :host {
          height: 100%;
        }
        app-toolbar paper-listbox {
          width: 150px;
        }
        app-toolbar paper-item {
          cursor: pointer;
        }
        .content {
          padding-bottom: 32px;
          max-width: 600px;
          margin: 0 auto;
        }
        paper-icon-item {
          border-top: 1px solid var(--divider-color);
        }
        paper-icon-item:first-child {
          border-top: 0;
        }
        paper-checkbox {
          padding: 11px;
        }
        paper-input {
          --paper-input-container-underline: {
            display: none;
          }
          --paper-input-container-underline-focus: {
            display: none;
          }
          position: relative;
          top: 1px;
        }
        .tip {
          padding: 24px;
          text-align: center;
          color: var(--secondary-text-color);
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.shopping_list')]]</div>

            <paper-icon-button
              hidden$="[[!conversation]]"
              aria-label="Start conversation"
              icon="hass:microphone"
              on-click="_showVoiceCommandDialog"
            ></paper-icon-button>

            <paper-menu-button
              horizontal-align="right"
              horizontal-offset="-5"
              vertical-offset="-5"
            >
              <paper-icon-button
                icon="hass:dots-vertical"
                slot="dropdown-trigger"
              ></paper-icon-button>
              <paper-listbox slot="dropdown-content">
                <paper-item on-click="_clearCompleted"
                  >[[localize('ui.panel.shopping-list.clear_completed')]]</paper-item
                >
              </paper-listbox>
            </paper-menu-button>
          </app-toolbar>
        </app-header>

        <div class="content">
          <ha-card>
            <paper-icon-item on-focus="_focusRowInput">
              <paper-icon-button
                slot="item-icon"
                icon="hass:plus"
                on-click="_addItem"
              ></paper-icon-button>
              <paper-item-body>
                <paper-input
                  id="addBox"
                  placeholder="[[localize('ui.panel.shopping-list.add_item')]]"
                  on-keydown="_addKeyPress"
                  no-label-float
                ></paper-input>
              </paper-item-body>
            </paper-icon-item>

            <template is="dom-repeat" items="[[items]]">
              <paper-icon-item>
                <paper-checkbox
                  slot="item-icon"
                  checked="{{item.complete}}"
                  on-click="_itemCompleteTapped"
                  tabindex="0"
                ></paper-checkbox>
                <paper-item-body>
                  <paper-input
                    id="editBox"
                    no-label-float
                    value="[[item.name]]"
                    on-change="_saveEdit"
                  ></paper-input>
                </paper-item-body>
              </paper-icon-item>
            </template>
          </ha-card>
          <div class="tip" hidden$="[[!conversation]]">
            [[localize('ui.panel.shopping-list.microphone_tip')]]
          </div>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      conversation: {
        type: Boolean,
        computed: "_computeConversation(hass)"
      },
      items: {
        type: Array,
        value: []
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._fetchData = this._fetchData.bind(this);
    this.hass.connection.subscribeEvents(this._fetchData, "shopping_list_updated").then(function (unsub) {
      this._unsubEvents = unsub;
    }.bind(this));

    this._fetchData();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._unsubEvents) this._unsubEvents();
  }

  _fetchData() {
    this.hass.callApi("get", "shopping_list").then(function (items) {
      items.reverse();
      this.items = items;
    }.bind(this));
  }

  _itemCompleteTapped(ev) {
    ev.stopPropagation();
    this.hass.callApi("post", "shopping_list/item/" + ev.model.item.id, {
      complete: ev.target.checked
    }).catch(() => this._fetchData());
  }

  _addItem(ev) {
    this.hass.callApi("post", "shopping_list/item", {
      name: this.$.addBox.value
    }).catch(() => this._fetchData());
    this.$.addBox.value = ""; // Presence of 'ev' means tap on "add" button.

    if (ev) {
      setTimeout(() => this.$.addBox.focus(), 10);
    }
  }

  _addKeyPress(ev) {
    if (ev.keyCode === 13) {
      this._addItem();
    }
  }

  _computeConversation(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_13__["isComponentLoaded"])(hass, "conversation");
  }

  _showVoiceCommandDialog() {
    Object(_dialogs_voice_command_dialog_show_ha_voice_command_dialog__WEBPACK_IMPORTED_MODULE_16__["showVoiceCommandDialog"])(this);
  }

  _saveEdit(ev) {
    const {
      index,
      item
    } = ev.model;
    const name = ev.target.value;

    if (name === item.name) {
      return;
    }

    this.set(["items", index, "name"], name);
    this.hass.callApi("post", "shopping_list/item/" + item.id, {
      name: name
    }).catch(() => this._fetchData());
  }

  _clearCompleted() {
    this.hass.callApi("POST", "shopping_list/clear_completed");
  }

}

customElements.define("ha-panel-shopping-list", HaPanelShoppingList);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtc2hvcHBpbmctbGlzdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy92b2ljZS1jb21tYW5kLWRpYWxvZy9zaG93LWhhLXZvaWNlLWNvbW1hbmQtZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9zaG9wcGluZy1saXN0L2hhLXBhbmVsLXNob3BwaW5nLWxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuVXNlIGA8cGFwZXItaXRlbS1ib2R5PmAgaW4gYSBgPHBhcGVyLWl0ZW0+YCBvciBgPHBhcGVyLWljb24taXRlbT5gIHRvIG1ha2UgdHdvLVxub3IgdGhyZWUtIGxpbmUgaXRlbXMuIEl0IGlzIGEgZmxleCBpdGVtIHRoYXQgaXMgYSB2ZXJ0aWNhbCBmbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UaGUgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgYHNlY29uZGFyeWAgYXR0cmlidXRlIGlzIGdpdmVuIHNlY29uZGFyeSB0ZXh0XG5zdHlsaW5nLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0d28tbGluZSBpdGVtIHwgYDcycHhgXG5gLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdGhyZWUtbGluZSBpdGVtIHwgYDg4cHhgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yYCB8IEZvcmVncm91bmQgY29sb3IgZm9yIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogbmVlZGVkIGZvciB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB0byB3b3JrIG9uIGZmICovXG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdHdvLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0LCA3MnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RocmVlLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHQsIDg4cHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChbc2Vjb25kYXJ5XSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtLWJvZHknXG59KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLyoqIFJldHVybiBpZiBhIGNvbXBvbmVudCBpcyBsb2FkZWQuICovXG5leHBvcnQgY29uc3QgaXNDb21wb25lbnRMb2FkZWQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbXBvbmVudDogc3RyaW5nXG4pOiBib29sZWFuID0+IGhhc3MgJiYgaGFzcy5jb25maWcuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkgIT09IC0xO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5jb25zdCBsb2FkVm9pY2VDb21tYW5kRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaGEtdm9pY2UtY29tbWFuZC1kaWFsb2dcIiAqLyBcIi4vaGEtdm9pY2UtY29tbWFuZC1kaWFsb2dcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc2hvd1ZvaWNlQ29tbWFuZERpYWxvZyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImhhLXZvaWNlLWNvbW1hbmQtZGlhbG9nXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkVm9pY2VDb21tYW5kRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczoge30sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGlzQ29tcG9uZW50TG9hZGVkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgeyBzaG93Vm9pY2VDb21tYW5kRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2RpYWxvZ3Mvdm9pY2UtY29tbWFuZC1kaWFsb2cvc2hvdy1oYS12b2ljZS1jb21tYW5kLWRpYWxvZ1wiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxTaG9wcGluZ0xpc3QgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYXBwLXRvb2xiYXIgcGFwZXItbGlzdGJveCB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGFwcC10b29sYmFyIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItY2hlY2tib3gge1xuICAgICAgICAgIHBhZGRpbmc6IDExcHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZToge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWZvY3VzOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpcCB7XG4gICAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgICAgPjwvaGEtbWVudS1idXR0b24+XG4gICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgncGFuZWwuc2hvcHBpbmdfbGlzdCcpXV08L2Rpdj5cblxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFjb252ZXJzYXRpb25dXVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTdGFydCBjb252ZXJzYXRpb25cIlxuICAgICAgICAgICAgICBpY29uPVwiaGFzczptaWNyb3Bob25lXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJfc2hvd1ZvaWNlQ29tbWFuZERpYWxvZ1wiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cblxuICAgICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAgIGhvcml6b250YWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gb24tY2xpY2s9XCJfY2xlYXJDb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnNob3BwaW5nLWxpc3QuY2xlYXJfY29tcGxldGVkJyldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0gb24tZm9jdXM9XCJfZm9jdXNSb3dJbnB1dFwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9hZGRJdGVtXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cImFkZEJveFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnNob3BwaW5nLWxpc3QuYWRkX2l0ZW0nKV1dXCJcbiAgICAgICAgICAgICAgICAgIG9uLWtleWRvd249XCJfYWRkS2V5UHJlc3NcIlxuICAgICAgICAgICAgICAgICAgbm8tbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tpdGVtc11dXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJ7e2l0ZW0uY29tcGxldGV9fVwiXG4gICAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9pdGVtQ29tcGxldGVUYXBwZWRcIlxuICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdEJveFwiXG4gICAgICAgICAgICAgICAgICAgIG5vLWxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiW1tpdGVtLm5hbWVdXVwiXG4gICAgICAgICAgICAgICAgICAgIG9uLWNoYW5nZT1cIl9zYXZlRWRpdFwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlwXCIgaGlkZGVuJD1cIltbIWNvbnZlcnNhdGlvbl1dXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5zaG9wcGluZy1saXN0Lm1pY3JvcGhvbmVfdGlwJyldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuICAgICAgY29udmVyc2F0aW9uOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQ29udmVyc2F0aW9uKGhhc3MpXCIsXG4gICAgICB9LFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fZmV0Y2hEYXRhID0gdGhpcy5fZmV0Y2hEYXRhLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmhhc3MuY29ubmVjdGlvblxuICAgICAgLnN1YnNjcmliZUV2ZW50cyh0aGlzLl9mZXRjaERhdGEsIFwic2hvcHBpbmdfbGlzdF91cGRhdGVkXCIpXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHVuc3ViKSB7XG4gICAgICAgICAgdGhpcy5fdW5zdWJFdmVudHMgPSB1bnN1YjtcbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fdW5zdWJFdmVudHMpIHRoaXMuX3Vuc3ViRXZlbnRzKCk7XG4gIH1cblxuICBfZmV0Y2hEYXRhKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsQXBpKFwiZ2V0XCIsIFwic2hvcHBpbmdfbGlzdFwiKS50aGVuKFxuICAgICAgZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIGl0ZW1zLnJldmVyc2UoKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIF9pdGVtQ29tcGxldGVUYXBwZWQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwicG9zdFwiLCBcInNob3BwaW5nX2xpc3QvaXRlbS9cIiArIGV2Lm1vZGVsLml0ZW0uaWQsIHtcbiAgICAgICAgY29tcGxldGU6IGV2LnRhcmdldC5jaGVja2VkLFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLl9mZXRjaERhdGEoKSk7XG4gIH1cblxuICBfYWRkSXRlbShldikge1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwic2hvcHBpbmdfbGlzdC9pdGVtXCIsIHtcbiAgICAgICAgbmFtZTogdGhpcy4kLmFkZEJveC52YWx1ZSxcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5fZmV0Y2hEYXRhKCkpO1xuICAgIHRoaXMuJC5hZGRCb3gudmFsdWUgPSBcIlwiO1xuICAgIC8vIFByZXNlbmNlIG9mICdldicgbWVhbnMgdGFwIG9uIFwiYWRkXCIgYnV0dG9uLlxuICAgIGlmIChldikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLiQuYWRkQm94LmZvY3VzKCksIDEwKTtcbiAgICB9XG4gIH1cblxuICBfYWRkS2V5UHJlc3MoZXYpIHtcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW0oKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZUNvbnZlcnNhdGlvbihoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwiY29udmVyc2F0aW9uXCIpO1xuICB9XG5cbiAgX3Nob3dWb2ljZUNvbW1hbmREaWFsb2coKSB7XG4gICAgc2hvd1ZvaWNlQ29tbWFuZERpYWxvZyh0aGlzKTtcbiAgfVxuXG4gIF9zYXZlRWRpdChldikge1xuICAgIGNvbnN0IHsgaW5kZXgsIGl0ZW0gfSA9IGV2Lm1vZGVsO1xuICAgIGNvbnN0IG5hbWUgPSBldi50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAobmFtZSA9PT0gaXRlbS5uYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXQoW1wiaXRlbXNcIiwgaW5kZXgsIFwibmFtZVwiXSwgbmFtZSk7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJzaG9wcGluZ19saXN0L2l0ZW0vXCIgKyBpdGVtLmlkLCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuX2ZldGNoRGF0YSgpKTtcbiAgfVxuXG4gIF9jbGVhckNvbXBsZXRlZCgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbEFwaShcIlBPU1RcIiwgXCJzaG9wcGluZ19saXN0L2NsZWFyX2NvbXBsZXRlZFwiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1zaG9wcGluZy1saXN0XCIsIEhhUGFuZWxTaG9wcGluZ0xpc3QpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE0QkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBb0NBO0FBcENBOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSw0WkFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN05BO0FBQ0E7QUE4TkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
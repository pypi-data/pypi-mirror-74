(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config"],{

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

/***/ "./src/common/dom/media_query.ts":
/*!***************************************!*\
  !*** ./src/common/dom/media_query.ts ***!
  \***************************************/
/*! exports provided: listenMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenMediaQuery", function() { return listenMediaQuery; });
/**
 * Attach a media query. Listener is called right away and when it matches.
 * @param mediaQuery media query to match.
 * @param listener listener to call when media query changes between match/unmatch
 * @returns function to remove the listener.
 */
const listenMediaQuery = (mediaQuery, matchesChanged) => {
  const mql = matchMedia(mediaQuery);

  const listener = e => matchesChanged(e.matches);

  mql.addListener(listener);
  matchesChanged(mql.matches);
  return () => mql.removeListener(listener);
};

/***/ }),

/***/ "./src/data/cloud.ts":
/*!***************************!*\
  !*** ./src/data/cloud.ts ***!
  \***************************/
/*! exports provided: fetchCloudStatus, createCloudhook, deleteCloudhook, connectCloudRemote, disconnectCloudRemote, fetchCloudSubscriptionInfo, convertThingTalk, updateCloudPref, updateCloudGoogleEntityConfig, cloudSyncGoogleAssistant, updateCloudAlexaEntityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudStatus", function() { return fetchCloudStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCloudhook", function() { return createCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCloudhook", function() { return deleteCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectCloudRemote", function() { return connectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectCloudRemote", function() { return disconnectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudSubscriptionInfo", function() { return fetchCloudSubscriptionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertThingTalk", function() { return convertThingTalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudPref", function() { return updateCloudPref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudGoogleEntityConfig", function() { return updateCloudGoogleEntityConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudSyncGoogleAssistant", function() { return cloudSyncGoogleAssistant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudAlexaEntityConfig", function() { return updateCloudAlexaEntityConfig; });
const fetchCloudStatus = hass => hass.callWS({
  type: "cloud/status"
});
const createCloudhook = (hass, webhookId) => hass.callWS({
  type: "cloud/cloudhook/create",
  webhook_id: webhookId
});
const deleteCloudhook = (hass, webhookId) => hass.callWS({
  type: "cloud/cloudhook/delete",
  webhook_id: webhookId
});
const connectCloudRemote = hass => hass.callWS({
  type: "cloud/remote/connect"
});
const disconnectCloudRemote = hass => hass.callWS({
  type: "cloud/remote/disconnect"
});
const fetchCloudSubscriptionInfo = hass => hass.callWS({
  type: "cloud/subscription"
});
const convertThingTalk = (hass, query) => hass.callWS({
  type: "cloud/thingtalk/convert",
  query
});
const updateCloudPref = (hass, prefs) => hass.callWS(Object.assign({
  type: "cloud/update_prefs"
}, prefs));
const updateCloudGoogleEntityConfig = (hass, entityId, values) => hass.callWS(Object.assign({
  type: "cloud/google_assistant/entities/update",
  entity_id: entityId
}, values));
const cloudSyncGoogleAssistant = hass => hass.callApi("POST", "cloud/google_actions/sync");
const updateCloudAlexaEntityConfig = (hass, entityId, values) => hass.callWS(Object.assign({
  type: "cloud/alexa/entities/update",
  entity_id: entityId
}, values));

/***/ }),

/***/ "./src/panels/config/ha-panel-config.ts":
/*!**********************************************!*\
  !*** ./src/panels/config/ha-panel-config.ts ***!
  \**********************************************/
/*! exports provided: configSections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configSections", function() { return configSections; });
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/media_query */ "./src/common/dom/media_query.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









const configSections = {
  integrations: [{
    component: "integrations",
    path: "/config/integrations",
    translationKey: "ui.panel.config.integrations.caption",
    icon: "hass:puzzle",
    core: true
  }, {
    component: "devices",
    path: "/config/devices",
    translationKey: "ui.panel.config.devices.caption",
    icon: "hass:devices",
    core: true
  }, {
    component: "entities",
    path: "/config/entities",
    translationKey: "ui.panel.config.entities.caption",
    icon: "hass:shape",
    core: true
  }, {
    component: "areas",
    path: "/config/areas",
    translationKey: "ui.panel.config.areas.caption",
    icon: "hass:sofa",
    core: true
  }],
  automation: [{
    component: "automation",
    path: "/config/automation",
    translationKey: "ui.panel.config.automation.caption",
    icon: "hass:robot"
  }, {
    component: "scene",
    path: "/config/scene",
    translationKey: "ui.panel.config.scene.caption",
    icon: "hass:palette"
  }, {
    component: "script",
    path: "/config/script",
    translationKey: "ui.panel.config.script.caption",
    icon: "hass:script-text"
  }, {
    component: "helpers",
    path: "/config/helpers",
    translationKey: "ui.panel.config.helpers.caption",
    icon: "hass:tools",
    core: true
  }],
  lovelace: [{
    component: "lovelace",
    path: "/config/lovelace/dashboards",
    translationKey: "ui.panel.config.lovelace.caption",
    icon: "hass:view-dashboard"
  }],
  persons: [{
    component: "person",
    path: "/config/person",
    translationKey: "ui.panel.config.person.caption",
    icon: "hass:account"
  }, {
    component: "zone",
    path: "/config/zone",
    translationKey: "ui.panel.config.zone.caption",
    icon: "hass:map-marker-radius"
  }, {
    component: "users",
    path: "/config/users",
    translationKey: "ui.panel.config.users.caption",
    icon: "hass:account-badge-horizontal",
    core: true
  }],
  general: [{
    component: "core",
    path: "/config/core",
    translationKey: "ui.panel.config.core.caption",
    icon: "hass:home-assistant",
    core: true
  }, {
    component: "server_control",
    path: "/config/server_control",
    translationKey: "ui.panel.config.server_control.caption",
    icon: "hass:server",
    core: true
  }, {
    component: "customize",
    path: "/config/customize",
    translationKey: "ui.panel.config.customize.caption",
    icon: "hass:pencil",
    core: true,
    advancedOnly: true
  }],
  other: [{
    component: "zha",
    path: "/config/zha",
    translationKey: "component.zha.title",
    icon: "hass:zigbee"
  }, {
    component: "zwave",
    path: "/config/zwave",
    translationKey: "component.zwave.title",
    icon: "hass:z-wave"
  }]
};

let HaPanelConfig = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("ha-panel-config")], function (_initialize, _HassRouterPage) {
  class HaPanelConfig extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaPanelConfig,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboard",
          routes: {
            areas: {
              tag: "ha-config-areas",
              load: () => Promise.all(/*! import() | panel-config-areas */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e(16), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("vendors~panel-config-areas"), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("panel-config-areas")]).then(__webpack_require__.bind(null, /*! ./areas/ha-config-areas */ "./src/panels/config/areas/ha-config-areas.ts"))
            },
            automation: {
              tag: "ha-config-automation",
              load: () => Promise.all(/*! import() | panel-config-automation */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e(13), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~1b0b57c8"), __webpack_require__.e(16), __webpack_require__.e(15), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-delete-card~hui-dialog-edit-card~hui-dialog-suggest-card~h~a8cf51a3"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e(17), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~hui-dialog-suggest-card~more-info-dialog~panel-c~e54ccf84"), __webpack_require__.e(19), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~person-detail-dialog"), __webpack_require__.e("vendors~panel-config-automation~panel-config-script"), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e(12), __webpack_require__.e(14), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e(18), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-editor-dialog~panel-config-automation~panel-~da811c14"), __webpack_require__.e("hui-dialog-suggest-card~more-info-dialog~panel-config-automation~panel-config-devices~panel-lovelace"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-config-script"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("hui-dialog-save-config~hui-dialog-suggest-card~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-scene~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation")]).then(__webpack_require__.bind(null, /*! ./automation/ha-config-automation */ "./src/panels/config/automation/ha-config-automation.ts"))
            },
            cloud: {
              tag: "ha-config-cloud",
              load: () => Promise.all(/*! import() | panel-config-cloud */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(13), __webpack_require__.e("vendors~panel-config-cloud"), __webpack_require__.e(9), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e(14), __webpack_require__.e("panel-config-cloud")]).then(__webpack_require__.bind(null, /*! ./cloud/ha-config-cloud */ "./src/panels/config/cloud/ha-config-cloud.ts"))
            },
            core: {
              tag: "ha-config-core",
              load: () => Promise.all(/*! import() | panel-config-core */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~1b0b57c8"), __webpack_require__.e(19), __webpack_require__.e("vendors~onboarding-core-config~panel-config-core"), __webpack_require__.e("vendors~panel-config-core"), __webpack_require__.e(9), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("onboarding-core-config~panel-config-core~zone-detail-dialog"), __webpack_require__.e("panel-config-core")]).then(__webpack_require__.bind(null, /*! ./core/ha-config-core */ "./src/panels/config/core/ha-config-core.js"))
            },
            devices: {
              tag: "ha-config-devices",
              load: () => Promise.all(/*! import() | panel-config-devices */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e(13), __webpack_require__.e(16), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~hui-dialog-suggest-card~more-info-dialog~panel-c~e54ccf84"), __webpack_require__.e("vendors~panel-config-devices"), __webpack_require__.e(9), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e(12), __webpack_require__.e(14), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("hui-dialog-suggest-card~more-info-dialog~panel-config-automation~panel-config-devices~panel-lovelace"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-devices~panel-lovelace"), __webpack_require__.e("panel-config-devices")]).then(__webpack_require__.bind(null, /*! ./devices/ha-config-devices */ "./src/panels/config/devices/ha-config-devices.ts"))
            },
            server_control: {
              tag: "ha-config-server-control",
              load: () => Promise.all(/*! import() | panel-config-server-control */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~1b0b57c8"), __webpack_require__.e("vendors~panel-config-server-control"), __webpack_require__.e(9), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("panel-config-server-control")]).then(__webpack_require__.bind(null, /*! ./server_control/ha-config-server-control */ "./src/panels/config/server_control/ha-config-server-control.js"))
            },
            customize: {
              tag: "ha-config-customize",
              load: () => Promise.all(/*! import() | panel-config-customize */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(15), __webpack_require__.e("vendors~panel-config-customize"), __webpack_require__.e(9), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("panel-config-customize")]).then(__webpack_require__.bind(null, /*! ./customize/ha-config-customize */ "./src/panels/config/customize/ha-config-customize.js"))
            },
            dashboard: {
              tag: "ha-config-dashboard",
              load: () => Promise.all(/*! import() | panel-config-dashboard */[__webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~1b0b57c8"), __webpack_require__.e(9), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("panel-config-dashboard")]).then(__webpack_require__.bind(null, /*! ./dashboard/ha-config-dashboard */ "./src/panels/config/dashboard/ha-config-dashboard.ts"))
            },
            entities: {
              tag: "ha-config-entities",
              load: () => Promise.all(/*! import() | panel-config-entities */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e(16), __webpack_require__.e(15), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-editor-dialog~panel-config-automation~panel-~da811c14"), __webpack_require__.e("panel-config-entities")]).then(__webpack_require__.bind(null, /*! ./entities/ha-config-entities */ "./src/panels/config/entities/ha-config-entities.ts"))
            },
            integrations: {
              tag: "ha-config-integrations",
              load: () => Promise.all(/*! import() | panel-config-integrations */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e("vendors~dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~pa~f9cbd3da"), __webpack_require__.e("vendors~panel-config-integrations"), __webpack_require__.e(9), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-editor-dialog~panel-config-automation~panel-~da811c14"), __webpack_require__.e("panel-config-integrations")]).then(__webpack_require__.bind(null, /*! ./integrations/ha-config-integrations */ "./src/panels/config/integrations/ha-config-integrations.ts"))
            },
            lovelace: {
              tag: "ha-config-lovelace",
              load: () => __webpack_require__.e(/*! import() | panel-config-lovelace */ "panel-config-lovelace").then(__webpack_require__.bind(null, /*! ./lovelace/ha-config-lovelace */ "./src/panels/config/lovelace/ha-config-lovelace.ts"))
            },
            person: {
              tag: "ha-config-person",
              load: () => Promise.all(/*! import() | panel-config-person */[__webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e(9), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e("panel-config-person")]).then(__webpack_require__.bind(null, /*! ./person/ha-config-person */ "./src/panels/config/person/ha-config-person.ts"))
            },
            script: {
              tag: "ha-config-script",
              load: () => Promise.all(/*! import() | panel-config-script */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~1b0b57c8"), __webpack_require__.e(16), __webpack_require__.e(15), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-delete-card~hui-dialog-edit-card~hui-dialog-suggest-card~h~a8cf51a3"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e(17), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~hui-dialog-suggest-card~more-info-dialog~panel-c~e54ccf84"), __webpack_require__.e(19), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~person-detail-dialog"), __webpack_require__.e("vendors~panel-config-automation~panel-config-script"), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e(12), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e(18), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-editor-dialog~panel-config-automation~panel-~da811c14"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-config-script"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("hui-dialog-save-config~hui-dialog-suggest-card~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-scene~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-script")]).then(__webpack_require__.bind(null, /*! ./script/ha-config-script */ "./src/panels/config/script/ha-config-script.ts"))
            },
            scene: {
              tag: "ha-config-scene",
              load: () => Promise.all(/*! import() | panel-config-scene */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e(16), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("vendors~panel-config-scene~person-detail-dialog"), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e(12), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-editor-dialog~panel-config-automation~panel-~da811c14"), __webpack_require__.e("panel-config-automation~panel-config-scene~panel-config-script"), __webpack_require__.e("panel-config-scene~person-detail-dialog"), __webpack_require__.e("panel-config-scene")]).then(__webpack_require__.bind(null, /*! ./scene/ha-config-scene */ "./src/panels/config/scene/ha-config-scene.ts"))
            },
            helpers: {
              tag: "ha-config-helpers",
              load: () => Promise.all(/*! import() | panel-config-helpers */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e(16), __webpack_require__.e(15), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("panel-config-helpers")]).then(__webpack_require__.bind(null, /*! ./helpers/ha-config-helpers */ "./src/panels/config/helpers/ha-config-helpers.ts"))
            },
            users: {
              tag: "ha-config-users",
              load: () => Promise.all(/*! import() | panel-config-users */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e(16), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("panel-config-users")]).then(__webpack_require__.bind(null, /*! ./users/ha-config-users */ "./src/panels/config/users/ha-config-users.ts"))
            },
            zone: {
              tag: "ha-config-zone",
              load: () => Promise.all(/*! import() | panel-config-zone */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(16), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e("vendors~panel-config-zone"), __webpack_require__.e(9), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-editor-dialog~panel-config-automation~panel-~da811c14"), __webpack_require__.e("panel-config-zone")]).then(__webpack_require__.bind(null, /*! ./zone/ha-config-zone */ "./src/panels/config/zone/ha-config-zone.ts"))
            },
            zha: {
              tag: "zha-config-dashboard-router",
              load: () => __webpack_require__.e(/*! import() | panel-config-zha */ "panel-config-zha").then(__webpack_require__.bind(null, /*! ./zha/zha-config-dashboard-router */ "./src/panels/config/zha/zha-config-dashboard-router.ts"))
            },
            zwave: {
              tag: "ha-config-zwave",
              load: () => Promise.all(/*! import() | panel-config-zwave */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-dashboard~panel-config~1b0b57c8"), __webpack_require__.e(15), __webpack_require__.e("vendors~panel-config-zwave"), __webpack_require__.e(9), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("panel-config-zwave")]).then(__webpack_require__.bind(null, /*! ./zwave/ha-config-zwave */ "./src/panels/config/zwave/ha-config-zwave.js"))
            }
          }
        };
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_wideSidebar",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_wide",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_cloudStatus",
      value: void 0
    }, {
      kind: "field",
      key: "_listeners",

      value() {
        return [];
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HaPanelConfig.prototype), "connectedCallback", this).call(this);

        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__["listenMediaQuery"])("(min-width: 1040px)", matches => {
          this._wide = matches;
        }));

        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__["listenMediaQuery"])("(min-width: 1296px)", matches => {
          this._wideSidebar = matches;
        }));
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaPanelConfig.prototype), "disconnectedCallback", this).call(this);

        while (this._listeners.length) {
          this._listeners.pop()();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaPanelConfig.prototype), "firstUpdated", this).call(this, changedProps);

        this.hass.loadBackendTranslation("title");

        if (Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_3__["isComponentLoaded"])(this.hass, "cloud")) {
          this._updateCloudStatus();
        }

        this.addEventListener("ha-refresh-cloud-status", () => this._updateCloudStatus());
        this.style.setProperty("--app-header-background-color", "var(--sidebar-background-color)");
        this.style.setProperty("--app-header-text-color", "var(--sidebar-text-color)");
        this.style.setProperty("--app-header-border-bottom", "1px solid var(--divider-color)");
      }
    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(el) {
        const isWide = this.hass.dockedSidebar === "docked" ? this._wideSidebar : this._wide;

        if ("setProperties" in el) {
          var _this$hass$userData;

          // As long as we have Polymer panels
          el.setProperties({
            route: this.routeTail,
            hass: this.hass,
            showAdvanced: Boolean((_this$hass$userData = this.hass.userData) === null || _this$hass$userData === void 0 ? void 0 : _this$hass$userData.showAdvanced),
            isWide,
            narrow: this.narrow,
            cloudStatus: this._cloudStatus
          });
        } else {
          var _this$hass$userData2;

          el.route = this.routeTail;
          el.hass = this.hass;
          el.showAdvanced = Boolean((_this$hass$userData2 = this.hass.userData) === null || _this$hass$userData2 === void 0 ? void 0 : _this$hass$userData2.showAdvanced);
          el.isWide = isWide;
          el.narrow = this.narrow;
          el.cloudStatus = this._cloudStatus;
        }
      }
    }, {
      kind: "method",
      key: "_updateCloudStatus",
      value: async function _updateCloudStatus() {
        this._cloudStatus = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_5__["fetchCloudStatus"])(this.hass);

        if (this._cloudStatus.cloud === "connecting") {
          setTimeout(() => this._updateCloudStatus(), 5000);
        }
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_7__["HassRouterPage"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9tZWRpYV9xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbG91ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1wYW5lbC1jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG4vKlxuYFBhcGVySXRlbUJlaGF2aW9yYCBpcyBhIGNvbnZlbmllbmNlIGJlaGF2aW9yIHNoYXJlZCBieSA8cGFwZXItaXRlbT4gYW5kXG48cGFwZXItaWNvbi1pdGVtPiB0aGF0IG1hbmFnZXMgdGhlIHNoYXJlZCBjb250cm9sIHN0YXRlcyBhbmQgYXR0cmlidXRlcyBvZlxudGhlIGl0ZW1zLlxuKi9cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySXRlbUJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3JJbXBsID0ge1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdvcHRpb24nLCB0YWJpbmRleDogJzAnfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvciA9XG4gICAgW0lyb25CdXR0b25TdGF0ZSwgSXJvbkNvbnRyb2xTdGF0ZSwgUGFwZXJJdGVtQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5Vc2UgYDxwYXBlci1pdGVtLWJvZHk+YCBpbiBhIGA8cGFwZXItaXRlbT5gIG9yIGA8cGFwZXItaWNvbi1pdGVtPmAgdG8gbWFrZSB0d28tXG5vciB0aHJlZS0gbGluZSBpdGVtcy4gSXQgaXMgYSBmbGV4IGl0ZW0gdGhhdCBpcyBhIHZlcnRpY2FsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRoZSBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBgc2Vjb25kYXJ5YCBhdHRyaWJ1dGUgaXMgZ2l2ZW4gc2Vjb25kYXJ5IHRleHRcbnN0eWxpbmcuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHR3by1saW5lIGl0ZW0gfCBgNzJweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0aHJlZS1saW5lIGl0ZW0gfCBgODhweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3JgIHwgRm9yZWdyb3VuZCBjb2xvciBmb3IgdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnlgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBuZWVkZWQgZm9yIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHRvIHdvcmsgb24gZmYgKi9cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWp1c3RpZmllZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0d28tbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHQsIDcycHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhyZWUtbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodCwgODhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKFtzZWNvbmRhcnldKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0tYm9keSdcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0LCAucGFwZXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAucGFwZXItaXRlbSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pLCAucGFwZXItaXRlbVtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXJvbi1zZWxlY3RlZCksIC5wYXBlci1pdGVtLmlyb24tc2VsZWN0ZWQge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHQsIGJvbGQpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pLCAucGFwZXItaXRlbVtkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvciwgdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cyksIC5wYXBlci1pdGVtOmZvY3VzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKTpiZWZvcmUsIC5wYXBlci1pdGVtOmZvY3VzOmJlZm9yZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG5cbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1kaXZpZGVyLW9wYWNpdHkpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0xpc3RzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvbGlzdHMuaHRtbClcblxuYDxwYXBlci1pdGVtPmAgaXMgYW4gaW50ZXJhY3RpdmUgbGlzdCBpdGVtLiBCeSBkZWZhdWx0LCBpdCBpcyBhIGhvcml6b250YWxcbmZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5JdGVtPC9wYXBlci1pdGVtPlxuXG5Vc2UgdGhpcyBlbGVtZW50IHdpdGggYDxwYXBlci1pdGVtLWJvZHk+YCB0byBtYWtlIE1hdGVyaWFsIERlc2lnbiBzdHlsZWRcbnR3by1saW5lIGFuZCB0aHJlZS1saW5lIGl0ZW1zLlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UbyB1c2UgYHBhcGVyLWl0ZW1gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZSBgcGFwZXItaXRlbWAgd2lsbFxuYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGUgYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZ1xuZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnL1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pdGVtIHJhaXNlZD5Qb2x5bWVyIFByb2plY3Q8L3BhcGVyLWl0ZW0+XG4gICAgPC9hPlxuXG5JZiB5b3UgYXJlIGNvbmNlcm5lZCBhYm91dCBwZXJmb3JtYW5jZSBhbmQgd2FudCB0byB1c2UgYHBhcGVyLWl0ZW1gIGluIGFcbmBwYXBlci1saXN0Ym94YCB3aXRoIG1hbnkgaXRlbXMsIHlvdSBjYW4ganVzdCB1c2UgYSBuYXRpdmUgYGJ1dHRvbmAgd2l0aCB0aGVcbmBwYXBlci1pdGVtYCBjbGFzcyBhcHBsaWVkIChwcm92aWRlZCB5b3UgaGF2ZSBjb3JyZWN0bHkgaW5jbHVkZWQgdGhlIHNoYXJlZFxuc3R5bGVzKTpcblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5JbmJveDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U3RhcnJlZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U2VudCBtYWlsPC9idXR0b24+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIHRoZSBpdGVtIHwgYDQ4cHhgXG5gLS1wYXBlci1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cblRoaXMgZWxlbWVudCBoYXMgYHJvbGU9XCJsaXN0aXRlbVwiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdXNhZ2UsIGl0IG1heSBiZVxubW9yZSBhcHByb3ByaWF0ZSB0byBzZXQgYHJvbGU9XCJtZW51aXRlbVwiYCwgYHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCJgIG9yXG5gcm9sZT1cIm1lbnVpdGVtcmFkaW9cImAuXG5cbiAgICA8cGFwZXItaXRlbSByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgU2hvdyB5b3VyIHN0YXR1c1xuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8cGFwZXItY2hlY2tib3g+PC9wYXBlci1jaGVja2JveD5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaXRlbVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBSZXR1cm4gaWYgYSBjb21wb25lbnQgaXMgbG9hZGVkLiAqL1xuZXhwb3J0IGNvbnN0IGlzQ29tcG9uZW50TG9hZGVkID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiA9PiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbiIsIi8qKlxuICogQXR0YWNoIGEgbWVkaWEgcXVlcnkuIExpc3RlbmVyIGlzIGNhbGxlZCByaWdodCBhd2F5IGFuZCB3aGVuIGl0IG1hdGNoZXMuXG4gKiBAcGFyYW0gbWVkaWFRdWVyeSBtZWRpYSBxdWVyeSB0byBtYXRjaC5cbiAqIEBwYXJhbSBsaXN0ZW5lciBsaXN0ZW5lciB0byBjYWxsIHdoZW4gbWVkaWEgcXVlcnkgY2hhbmdlcyBiZXR3ZWVuIG1hdGNoL3VubWF0Y2hcbiAqIEByZXR1cm5zIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBsaXN0ZW5NZWRpYVF1ZXJ5ID0gKFxuICBtZWRpYVF1ZXJ5OiBzdHJpbmcsXG4gIG1hdGNoZXNDaGFuZ2VkOiAobWF0Y2hlczogYm9vbGVhbikgPT4gdm9pZFxuKSA9PiB7XG4gIGNvbnN0IG1xbCA9IG1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGUpID0+IG1hdGNoZXNDaGFuZ2VkKGUubWF0Y2hlcyk7XG4gIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIG1hdGNoZXNDaGFuZ2VkKG1xbC5tYXRjaGVzKTtcbiAgcmV0dXJuICgpID0+IG1xbC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG59O1xuIiwiaW1wb3J0IHsgRW50aXR5RmlsdGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlclwiO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJDb250YWluZXIgfSBmcm9tIFwiLi4vcGFuZWxzL2NvbmZpZy9hdXRvbWF0aW9uL3RoaW5ndGFsay9kaWFsb2ctdGhpbmd0YWxrXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBdXRvbWF0aW9uQ29uZmlnIH0gZnJvbSBcIi4vYXV0b21hdGlvblwiO1xuXG5pbnRlcmZhY2UgQ2xvdWRTdGF0dXNCYXNlIHtcbiAgbG9nZ2VkX2luOiBib29sZWFuO1xuICBjbG91ZDogXCJkaXNjb25uZWN0ZWRcIiB8IFwiY29ubmVjdGluZ1wiIHwgXCJjb25uZWN0ZWRcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVFbnRpdHlDb25maWcge1xuICBzaG91bGRfZXhwb3NlPzogYm9vbGVhbjtcbiAgb3ZlcnJpZGVfbmFtZT86IHN0cmluZztcbiAgYWxpYXNlcz86IHN0cmluZ1tdO1xuICBkaXNhYmxlXzJmYT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxleGFFbnRpdHlDb25maWcge1xuICBzaG91bGRfZXhwb3NlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uIHtcbiAgY29tbW9uX25hbWU6IHN0cmluZztcbiAgZXhwaXJlX2RhdGU6IHN0cmluZztcbiAgZmluZ2VycHJpbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZFByZWZlcmVuY2VzIHtcbiAgZ29vZ2xlX2VuYWJsZWQ6IGJvb2xlYW47XG4gIGFsZXhhX2VuYWJsZWQ6IGJvb2xlYW47XG4gIHJlbW90ZV9lbmFibGVkOiBib29sZWFuO1xuICBnb29nbGVfc2VjdXJlX2RldmljZXNfcGluOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNsb3VkaG9va3M6IHsgW3dlYmhvb2tJZDogc3RyaW5nXTogQ2xvdWRXZWJob29rIH07XG4gIGdvb2dsZV9lbnRpdHlfY29uZmlnczoge1xuICAgIFtlbnRpdHlJZDogc3RyaW5nXTogR29vZ2xlRW50aXR5Q29uZmlnO1xuICB9O1xuICBhbGV4YV9lbnRpdHlfY29uZmlnczoge1xuICAgIFtlbnRpdHlJZDogc3RyaW5nXTogQWxleGFFbnRpdHlDb25maWc7XG4gIH07XG4gIGFsZXhhX3JlcG9ydF9zdGF0ZTogYm9vbGVhbjtcbiAgZ29vZ2xlX3JlcG9ydF9zdGF0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgQ2xvdWRTdGF0dXNMb2dnZWRJbiA9IENsb3VkU3RhdHVzQmFzZSAmIHtcbiAgZW1haWw6IHN0cmluZztcbiAgZ29vZ2xlX2VudGl0aWVzOiBFbnRpdHlGaWx0ZXI7XG4gIGdvb2dsZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgYWxleGFfZW50aXRpZXM6IEVudGl0eUZpbHRlcjtcbiAgcHJlZnM6IENsb3VkUHJlZmVyZW5jZXM7XG4gIHJlbW90ZV9kb21haW46IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVtb3RlX2Nvbm5lY3RlZDogYm9vbGVhbjtcbiAgcmVtb3RlX2NlcnRpZmljYXRlOiB1bmRlZmluZWQgfCBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uO1xufTtcblxuZXhwb3J0IHR5cGUgQ2xvdWRTdGF0dXMgPSBDbG91ZFN0YXR1c0Jhc2UgfCBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkluZm8ge1xuICBodW1hbl9kZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkV2ViaG9vayB7XG4gIHdlYmhvb2tfaWQ6IHN0cmluZztcbiAgY2xvdWRob29rX2lkOiBzdHJpbmc7XG4gIGNsb3VkaG9va191cmw6IHN0cmluZztcbiAgbWFuYWdlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhpbmdUYWxrQ29udmVyc2lvbiB7XG4gIGNvbmZpZzogUGFydGlhbDxBdXRvbWF0aW9uQ29uZmlnPjtcbiAgcGxhY2Vob2xkZXJzOiBQbGFjZWhvbGRlckNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQ2xvdWRTdGF0dXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8Q2xvdWRTdGF0dXM+KHsgdHlwZTogXCJjbG91ZC9zdGF0dXNcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsb3VkaG9vayA9IChoYXNzOiBIb21lQXNzaXN0YW50LCB3ZWJob29rSWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1M8Q2xvdWRXZWJob29rPih7XG4gICAgdHlwZTogXCJjbG91ZC9jbG91ZGhvb2svY3JlYXRlXCIsXG4gICAgd2ViaG9va19pZDogd2ViaG9va0lkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNsb3VkaG9vayA9IChoYXNzOiBIb21lQXNzaXN0YW50LCB3ZWJob29rSWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY2xvdWQvY2xvdWRob29rL2RlbGV0ZVwiLFxuICAgIHdlYmhvb2tfaWQ6IHdlYmhvb2tJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0Q2xvdWRSZW1vdGUgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY2xvdWQvcmVtb3RlL2Nvbm5lY3RcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkaXNjb25uZWN0Q2xvdWRSZW1vdGUgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY2xvdWQvcmVtb3RlL2Rpc2Nvbm5lY3RcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkU3Vic2NyaXB0aW9uSW5mbyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxTdWJzY3JpcHRpb25JbmZvPih7IHR5cGU6IFwiY2xvdWQvc3Vic2NyaXB0aW9uXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0VGhpbmdUYWxrID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIHF1ZXJ5OiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPFRoaW5nVGFsa0NvbnZlcnNpb24+KHsgdHlwZTogXCJjbG91ZC90aGluZ3RhbGsvY29udmVydFwiLCBxdWVyeSB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNsb3VkUHJlZiA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgcHJlZnM6IHtcbiAgICBnb29nbGVfZW5hYmxlZD86IENsb3VkUHJlZmVyZW5jZXNbXCJnb29nbGVfZW5hYmxlZFwiXTtcbiAgICBhbGV4YV9lbmFibGVkPzogQ2xvdWRQcmVmZXJlbmNlc1tcImFsZXhhX2VuYWJsZWRcIl07XG4gICAgYWxleGFfcmVwb3J0X3N0YXRlPzogQ2xvdWRQcmVmZXJlbmNlc1tcImFsZXhhX3JlcG9ydF9zdGF0ZVwiXTtcbiAgICBnb29nbGVfcmVwb3J0X3N0YXRlPzogQ2xvdWRQcmVmZXJlbmNlc1tcImdvb2dsZV9yZXBvcnRfc3RhdGVcIl07XG4gICAgZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3Bpbj86IENsb3VkUHJlZmVyZW5jZXNbXCJnb29nbGVfc2VjdXJlX2RldmljZXNfcGluXCJdO1xuICB9XG4pID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL3VwZGF0ZV9wcmVmc1wiLFxuICAgIC4uLnByZWZzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNsb3VkR29vZ2xlRW50aXR5Q29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB2YWx1ZXM6IEdvb2dsZUVudGl0eUNvbmZpZ1xuKSA9PlxuICBoYXNzLmNhbGxXUzxHb29nbGVFbnRpdHlDb25maWc+KHtcbiAgICB0eXBlOiBcImNsb3VkL2dvb2dsZV9hc3Npc3RhbnQvZW50aXRpZXMvdXBkYXRlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbEFwaShcIlBPU1RcIiwgXCJjbG91ZC9nb29nbGVfYWN0aW9ucy9zeW5jXCIpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xvdWRBbGV4YUVudGl0eUNvbmZpZyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdmFsdWVzOiBBbGV4YUVudGl0eUNvbmZpZ1xuKSA9PlxuICBoYXNzLmNhbGxXUzxBbGV4YUVudGl0eUNvbmZpZz4oe1xuICAgIHR5cGU6IFwiY2xvdWQvYWxleGEvZW50aXRpZXMvdXBkYXRlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lclwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIFByb3BlcnR5VmFsdWVzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IGxpc3Rlbk1lZGlhUXVlcnkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9tZWRpYV9xdWVyeVwiO1xuaW1wb3J0IHsgQ2xvdWRTdGF0dXMsIGZldGNoQ2xvdWRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IFwiLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgeyBIYXNzUm91dGVyUGFnZSwgUm91dGVyT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9sYXlvdXRzL2hhc3Mtcm91dGVyLXBhZ2VcIjtcbmltcG9ydCB7IFBhZ2VOYXZpZ2F0aW9uIH0gZnJvbSBcIi4uLy4uL2xheW91dHMvaGFzcy10YWJzLXN1YnBhZ2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWdTZWN0aW9uczogeyBbbmFtZTogc3RyaW5nXTogUGFnZU5hdmlnYXRpb25bXSB9ID0ge1xuICBpbnRlZ3JhdGlvbnM6IFtcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiaW50ZWdyYXRpb25zXCIsXG4gICAgICBwYXRoOiBcIi9jb25maWcvaW50ZWdyYXRpb25zXCIsXG4gICAgICB0cmFuc2xhdGlvbktleTogXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNhcHRpb25cIixcbiAgICAgIGljb246IFwiaGFzczpwdXp6bGVcIixcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiZGV2aWNlc1wiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL2RldmljZXNcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLmNhcHRpb25cIixcbiAgICAgIGljb246IFwiaGFzczpkZXZpY2VzXCIsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgY29tcG9uZW50OiBcImVudGl0aWVzXCIsXG4gICAgICBwYXRoOiBcIi9jb25maWcvZW50aXRpZXNcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5jYXB0aW9uXCIsXG4gICAgICBpY29uOiBcImhhc3M6c2hhcGVcIixcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiYXJlYXNcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy9hcmVhc1wiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLmFyZWFzLmNhcHRpb25cIixcbiAgICAgIGljb246IFwiaGFzczpzb2ZhXCIsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGF1dG9tYXRpb246IFtcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiYXV0b21hdGlvblwiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL2F1dG9tYXRpb25cIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmNhcHRpb25cIixcbiAgICAgIGljb246IFwiaGFzczpyb2JvdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29tcG9uZW50OiBcInNjZW5lXCIsXG4gICAgICBwYXRoOiBcIi9jb25maWcvc2NlbmVcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5jYXB0aW9uXCIsXG4gICAgICBpY29uOiBcImhhc3M6cGFsZXR0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29tcG9uZW50OiBcInNjcmlwdFwiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL3NjcmlwdFwiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5jYXB0aW9uXCIsXG4gICAgICBpY29uOiBcImhhc3M6c2NyaXB0LXRleHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogXCJoZWxwZXJzXCIsXG4gICAgICBwYXRoOiBcIi9jb25maWcvaGVscGVyc1wiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLmhlbHBlcnMuY2FwdGlvblwiLFxuICAgICAgaWNvbjogXCJoYXNzOnRvb2xzXCIsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGxvdmVsYWNlOiBbXG4gICAge1xuICAgICAgY29tcG9uZW50OiBcImxvdmVsYWNlXCIsXG4gICAgICBwYXRoOiBcIi9jb25maWcvbG92ZWxhY2UvZGFzaGJvYXJkc1wiLFxuICAgICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmNhcHRpb25cIixcbiAgICAgIGljb246IFwiaGFzczp2aWV3LWRhc2hib2FyZFwiLFxuICAgIH0sXG4gIF0sXG4gIHBlcnNvbnM6IFtcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwicGVyc29uXCIsXG4gICAgICBwYXRoOiBcIi9jb25maWcvcGVyc29uXCIsXG4gICAgICB0cmFuc2xhdGlvbktleTogXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLmNhcHRpb25cIixcbiAgICAgIGljb246IFwiaGFzczphY2NvdW50XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiem9uZVwiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL3pvbmVcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy56b25lLmNhcHRpb25cIixcbiAgICAgIGljb246IFwiaGFzczptYXAtbWFya2VyLXJhZGl1c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29tcG9uZW50OiBcInVzZXJzXCIsXG4gICAgICBwYXRoOiBcIi9jb25maWcvdXNlcnNcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5jYXB0aW9uXCIsXG4gICAgICBpY29uOiBcImhhc3M6YWNjb3VudC1iYWRnZS1ob3Jpem9udGFsXCIsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGdlbmVyYWw6IFtcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IFwiY29yZVwiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL2NvcmVcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLmNhcHRpb25cIixcbiAgICAgIGljb246IFwiaGFzczpob21lLWFzc2lzdGFudFwiLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogXCJzZXJ2ZXJfY29udHJvbFwiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL3NlcnZlcl9jb250cm9sXCIsXG4gICAgICB0cmFuc2xhdGlvbktleTogXCJ1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuY2FwdGlvblwiLFxuICAgICAgaWNvbjogXCJoYXNzOnNlcnZlclwiLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogXCJjdXN0b21pemVcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy9jdXN0b21pemVcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcInVpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUuY2FwdGlvblwiLFxuICAgICAgaWNvbjogXCJoYXNzOnBlbmNpbFwiLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIGFkdmFuY2VkT25seTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBvdGhlcjogW1xuICAgIHtcbiAgICAgIGNvbXBvbmVudDogXCJ6aGFcIixcbiAgICAgIHBhdGg6IFwiL2NvbmZpZy96aGFcIixcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiBcImNvbXBvbmVudC56aGEudGl0bGVcIixcbiAgICAgIGljb246IFwiaGFzczp6aWdiZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogXCJ6d2F2ZVwiLFxuICAgICAgcGF0aDogXCIvY29uZmlnL3p3YXZlXCIsXG4gICAgICB0cmFuc2xhdGlvbktleTogXCJjb21wb25lbnQuendhdmUudGl0bGVcIixcbiAgICAgIGljb246IFwiaGFzczp6LXdhdmVcIixcbiAgICB9LFxuICBdLFxufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1wYW5lbC1jb25maWdcIilcbmNsYXNzIEhhUGFuZWxDb25maWcgZXh0ZW5kcyBIYXNzUm91dGVyUGFnZSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBwcm90ZWN0ZWQgcm91dGVyT3B0aW9uczogUm91dGVyT3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0UGFnZTogXCJkYXNoYm9hcmRcIixcbiAgICByb3V0ZXM6IHtcbiAgICAgIGFyZWFzOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctYXJlYXNcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1hcmVhc1wiICovIFwiLi9hcmVhcy9oYS1jb25maWctYXJlYXNcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgYXV0b21hdGlvbjoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWF1dG9tYXRpb25cIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1hdXRvbWF0aW9uXCIgKi8gXCIuL2F1dG9tYXRpb24vaGEtY29uZmlnLWF1dG9tYXRpb25cIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgY2xvdWQ6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1jbG91ZFwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWNsb3VkXCIgKi8gXCIuL2Nsb3VkL2hhLWNvbmZpZy1jbG91ZFwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBjb3JlOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctY29yZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWNvcmVcIiAqLyBcIi4vY29yZS9oYS1jb25maWctY29yZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBkZXZpY2VzOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctZGV2aWNlc1wiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWRldmljZXNcIiAqLyBcIi4vZGV2aWNlcy9oYS1jb25maWctZGV2aWNlc1wiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBzZXJ2ZXJfY29udHJvbDoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLXNlcnZlci1jb250cm9sXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctc2VydmVyLWNvbnRyb2xcIiAqLyBcIi4vc2VydmVyX2NvbnRyb2wvaGEtY29uZmlnLXNlcnZlci1jb250cm9sXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIGN1c3RvbWl6ZToge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWN1c3RvbWl6ZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWN1c3RvbWl6ZVwiICovIFwiLi9jdXN0b21pemUvaGEtY29uZmlnLWN1c3RvbWl6ZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBkYXNoYm9hcmQ6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1kYXNoYm9hcmRcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1kYXNoYm9hcmRcIiAqLyBcIi4vZGFzaGJvYXJkL2hhLWNvbmZpZy1kYXNoYm9hcmRcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1lbnRpdGllc1wiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWVudGl0aWVzXCIgKi8gXCIuL2VudGl0aWVzL2hhLWNvbmZpZy1lbnRpdGllc1wiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBpbnRlZ3JhdGlvbnM6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1pbnRlZ3JhdGlvbnNcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1pbnRlZ3JhdGlvbnNcIiAqLyBcIi4vaW50ZWdyYXRpb25zL2hhLWNvbmZpZy1pbnRlZ3JhdGlvbnNcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgbG92ZWxhY2U6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1sb3ZlbGFjZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWxvdmVsYWNlXCIgKi8gXCIuL2xvdmVsYWNlL2hhLWNvbmZpZy1sb3ZlbGFjZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1wZXJzb25cIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1wZXJzb25cIiAqLyBcIi4vcGVyc29uL2hhLWNvbmZpZy1wZXJzb25cIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctc2NyaXB0XCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctc2NyaXB0XCIgKi8gXCIuL3NjcmlwdC9oYS1jb25maWctc2NyaXB0XCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHNjZW5lOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctc2NlbmVcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1zY2VuZVwiICovIFwiLi9zY2VuZS9oYS1jb25maWctc2NlbmVcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgaGVscGVyczoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWhlbHBlcnNcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1oZWxwZXJzXCIgKi8gXCIuL2hlbHBlcnMvaGEtY29uZmlnLWhlbHBlcnNcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgdXNlcnM6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy11c2Vyc1wiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXVzZXJzXCIgKi8gXCIuL3VzZXJzL2hhLWNvbmZpZy11c2Vyc1wiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB6b25lOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctem9uZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXpvbmVcIiAqLyBcIi4vem9uZS9oYS1jb25maWctem9uZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB6aGE6IHtcbiAgICAgICAgdGFnOiBcInpoYS1jb25maWctZGFzaGJvYXJkLXJvdXRlclwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXpoYVwiICovIFwiLi96aGEvemhhLWNvbmZpZy1kYXNoYm9hcmQtcm91dGVyXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHp3YXZlOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctendhdmVcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy16d2F2ZVwiICovIFwiLi96d2F2ZS9oYS1jb25maWctendhdmVcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfd2lkZVNpZGViYXIgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF93aWRlID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1cztcblxuICBwcml2YXRlIF9saXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICBsaXN0ZW5NZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogMTA0MHB4KVwiLCAobWF0Y2hlcykgPT4ge1xuICAgICAgICB0aGlzLl93aWRlID0gbWF0Y2hlcztcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgIGxpc3Rlbk1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiAxMjk2cHgpXCIsIChtYXRjaGVzKSA9PiB7XG4gICAgICAgIHRoaXMuX3dpZGVTaWRlYmFyID0gbWF0Y2hlcztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdoaWxlICh0aGlzLl9saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucG9wKCkhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5oYXNzLmxvYWRCYWNrZW5kVHJhbnNsYXRpb24oXCJ0aXRsZVwiKTtcbiAgICBpZiAoaXNDb21wb25lbnRMb2FkZWQodGhpcy5oYXNzLCBcImNsb3VkXCIpKSB7XG4gICAgICB0aGlzLl91cGRhdGVDbG91ZFN0YXR1cygpO1xuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiLCAoKSA9PlxuICAgICAgdGhpcy5fdXBkYXRlQ2xvdWRTdGF0dXMoKVxuICAgICk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1hcHAtaGVhZGVyLWJhY2tncm91bmQtY29sb3JcIixcbiAgICAgIFwidmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKVwiXG4gICAgKTtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLWFwcC1oZWFkZXItdGV4dC1jb2xvclwiLFxuICAgICAgXCJ2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpXCJcbiAgICApO1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tYXBwLWhlYWRlci1ib3JkZXItYm90dG9tXCIsXG4gICAgICBcIjFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKVwiXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVQYWdlRWwoZWwpIHtcbiAgICBjb25zdCBpc1dpZGUgPVxuICAgICAgdGhpcy5oYXNzLmRvY2tlZFNpZGViYXIgPT09IFwiZG9ja2VkXCIgPyB0aGlzLl93aWRlU2lkZWJhciA6IHRoaXMuX3dpZGU7XG5cbiAgICBpZiAoXCJzZXRQcm9wZXJ0aWVzXCIgaW4gZWwpIHtcbiAgICAgIC8vIEFzIGxvbmcgYXMgd2UgaGF2ZSBQb2x5bWVyIHBhbmVsc1xuICAgICAgKGVsIGFzIFBvbHltZXJFbGVtZW50KS5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgcm91dGU6IHRoaXMucm91dGVUYWlsLFxuICAgICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICAgIHNob3dBZHZhbmNlZDogQm9vbGVhbih0aGlzLmhhc3MudXNlckRhdGE/LnNob3dBZHZhbmNlZCksXG4gICAgICAgIGlzV2lkZSxcbiAgICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgICAgY2xvdWRTdGF0dXM6IHRoaXMuX2Nsb3VkU3RhdHVzLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJvdXRlID0gdGhpcy5yb3V0ZVRhaWw7XG4gICAgICBlbC5oYXNzID0gdGhpcy5oYXNzO1xuICAgICAgZWwuc2hvd0FkdmFuY2VkID0gQm9vbGVhbih0aGlzLmhhc3MudXNlckRhdGE/LnNob3dBZHZhbmNlZCk7XG4gICAgICBlbC5pc1dpZGUgPSBpc1dpZGU7XG4gICAgICBlbC5uYXJyb3cgPSB0aGlzLm5hcnJvdztcbiAgICAgIGVsLmNsb3VkU3RhdHVzID0gdGhpcy5fY2xvdWRTdGF0dXM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlQ2xvdWRTdGF0dXMoKSB7XG4gICAgdGhpcy5fY2xvdWRTdGF0dXMgPSBhd2FpdCBmZXRjaENsb3VkU3RhdHVzKHRoaXMuaGFzcyk7XG5cbiAgICBpZiAodGhpcy5fY2xvdWRTdGF0dXMuY2xvdWQgPT09IFwiY29ubmVjdGluZ1wiKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3VwZGF0ZUNsb3VkU3RhdHVzKCksIDUwMDApO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFuZWwtY29uZmlnXCI6IEhhUGFuZWxDb25maWc7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQW9DQTtBQXBDQTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0RBOzs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTtBQUNBOzs7Ozs7Ozs7OztBQURBO0FBY0E7QUFDQTtBQWZBOzs7Ozs7Ozs7Ozs7QUMxRkE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTs7Ozs7O0FBTUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFEQTtBQUlBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFXQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUdBO0FBTUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXRIQTtBQUNBO0FBK0hBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsazJEQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EseStHQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsNmlCQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsZy9CQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsaTZEQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsczBCQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0Esd3pCQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsOGlCQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EscWtEQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsMnVDQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsZ1BBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSw0eUJBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSw0eEdBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSwyc0VBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSw0cURBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSxtZ0RBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSwyaUNBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQSw4T0FFQTtBQUpBO0FBT0E7QUFDQTtBQUNBLDR4QkFFQTtBQUpBO0FBL0hBO0FBRkE7Ozs7O0FBMklBOzs7O0FBQUE7Ozs7O0FBRUE7Ozs7QUFBQTs7Ozs7QUFFQTs7Ozs7Ozs7QUFFQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUlBO0FBSUE7QUFJQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBcE9BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
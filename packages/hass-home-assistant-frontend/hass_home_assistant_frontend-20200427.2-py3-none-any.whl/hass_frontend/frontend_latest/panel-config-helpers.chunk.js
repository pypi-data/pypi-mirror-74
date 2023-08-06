(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-helpers"],{

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

/***/ "./src/common/const.ts":
/*!*****************************!*\
  !*** ./src/common/const.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_TOGGLE", function() { return DOMAINS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_C", function() { return UNIT_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_F", function() { return UNIT_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_ENTITY_ID", function() { return DEFAULT_VIEW_ENTITY_ID; });
/** Constants to be used in the frontend. */
// Constants should be alphabetically sorted by name.
// Arrays with values should be alphabetically sorted if order doesn't matter.
// Each constant should have a description what it is supposed to be used for.

/** Icon to use when no icon specified for domain. */
const DEFAULT_DOMAIN_ICON = "hass:bookmark";
/** Domains that have a state card. */

const DOMAINS_WITH_CARD = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
/** Domains with separate more info dialog. */

const DOMAINS_WITH_MORE_INFO = ["alarm_control_panel", "automation", "camera", "climate", "configurator", "counter", "cover", "fan", "group", "history_graph", "input_datetime", "light", "lock", "media_player", "person", "script", "sun", "timer", "updater", "vacuum", "water_heater", "weather"];
/** Domains that show no more info dialog. */

const DOMAINS_HIDE_MORE_INFO = ["input_number", "input_select", "input_text", "scene", "weblink"];
/** Domains that should have the history hidden in the more info dialog. */

const DOMAINS_MORE_INFO_NO_HISTORY = ["camera", "configurator", "history_graph", "scene"];
/** States that we consider "off". */

const STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Lovelace. */

const DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
/** Temperature units. */

const UNIT_C = "°C";
const UNIT_F = "°F";
/** Entity ID of the default view. */

const DEFAULT_VIEW_ENTITY_ID = "group.default_view";

/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = stateObj => {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};

/***/ }),

/***/ "./src/common/entity/domain_icon.ts":
/*!******************************************!*\
  !*** ./src/common/entity/domain_icon.ts ***!
  \******************************************/
/*! exports provided: domainIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainIcon", function() { return domainIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/**
 * Return the icon to be used for a domain.
 *
 * Optionally pass in a state to influence the domain icon.
 */

const fixedIcons = {
  alert: "hass:alert",
  alexa: "hass:amazon-alexa",
  automation: "hass:robot",
  calendar: "hass:calendar",
  camera: "hass:video",
  climate: "hass:thermostat",
  configurator: "hass:settings",
  conversation: "hass:text-to-speech",
  counter: "hass:counter",
  device_tracker: "hass:account",
  fan: "hass:fan",
  google_assistant: "hass:google-assistant",
  group: "hass:google-circles-communities",
  history_graph: "hass:chart-line",
  homeassistant: "hass:home-assistant",
  homekit: "hass:home-automation",
  image_processing: "hass:image-filter-frames",
  input_boolean: "hass:toggle-switch-outline",
  input_datetime: "hass:calendar-clock",
  input_number: "hass:ray-vertex",
  input_select: "hass:format-list-bulleted",
  input_text: "hass:textbox",
  light: "hass:lightbulb",
  mailbox: "hass:mailbox",
  notify: "hass:comment-alert",
  persistent_notification: "hass:bell",
  person: "hass:account",
  plant: "hass:flower",
  proximity: "hass:apple-safari",
  remote: "hass:remote",
  scene: "hass:palette",
  script: "hass:script-text",
  sensor: "hass:eye",
  simple_alarm: "hass:bell",
  sun: "hass:white-balance-sunny",
  switch: "hass:flash",
  timer: "hass:timer",
  updater: "hass:cloud-upload",
  vacuum: "hass:robot-vacuum",
  water_heater: "hass:thermometer",
  weather: "hass:weather-cloudy",
  weblink: "hass:open-in-new",
  zone: "hass:map-marker-radius"
};
const domainIcon = (domain, state) => {
  if (domain in fixedIcons) {
    return fixedIcons[domain];
  }

  switch (domain) {
    case "alarm_control_panel":
      switch (state) {
        case "armed_home":
          return "hass:bell-plus";

        case "armed_night":
          return "hass:bell-sleep";

        case "disarmed":
          return "hass:bell-outline";

        case "triggered":
          return "hass:bell-ring";

        default:
          return "hass:bell";
      }

    case "binary_sensor":
      return state && state === "off" ? "hass:radiobox-blank" : "hass:checkbox-marked-circle";

    case "cover":
      switch (state) {
        case "opening":
          return "hass:arrow-up-box";

        case "closing":
          return "hass:arrow-down-box";

        case "closed":
          return "hass:window-closed";

        default:
          return "hass:window-open";
      }

    case "lock":
      return state && state === "unlocked" ? "hass:lock-open" : "hass:lock";

    case "media_player":
      return state && state === "playing" ? "hass:cast-connected" : "hass:cast";

    case "zwave":
      switch (state) {
        case "dead":
          return "hass:emoticon-dead";

        case "sleeping":
          return "hass:sleep";

        case "initializing":
          return "hass:timer-sand";

        default:
          return "hass:z-wave";
      }

    default:
      // eslint-disable-next-line
      console.warn("Unable to find icon for domain " + domain + " (" + state + ")");
      return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
  }
};

/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class HaIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("ha-icon", HaIcon);

/***/ }),

/***/ "./src/panels/config/entities/show-dialog-entity-editor.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/config/entities/show-dialog-entity-editor.ts ***!
  \*****************************************************************/
/*! exports provided: loadEntityEditorDialog, showEntityEditorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEntityEditorDialog", function() { return loadEntityEditorDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEntityEditorDialog", function() { return showEntityEditorDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadEntityEditorDialog = () => Promise.all(/*! import() | entity-editor-dialog */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(13), __webpack_require__.e("vendors~entity-editor-dialog~hui-conditional-card-editor~hui-stack-card-editor~panel-developer-tools~838abec3"), __webpack_require__.e("vendors~entity-editor-dialog"), __webpack_require__.e(14), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-editor-dialog~panel-config-automation~panel-~da811c14"), __webpack_require__.e("entity-editor-dialog~helper-detail-dialog~hui-button-card-editor~hui-entity-card-editor~hui-light-ca~1d54093c"), __webpack_require__.e("entity-editor-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-entity-editor */ "./src/panels/config/entities/dialog-entity-editor.ts"));

const getDialog = () => {
  return document.querySelector("home-assistant").shadowRoot.querySelector("dialog-entity-editor");
};

const showEntityEditorDialog = (element, entityDetailParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-entity-editor",
    dialogImport: loadEntityEditorDialog,
    dialogParams: entityDetailParams
  });
  return getDialog;
};

/***/ }),

/***/ "./src/panels/config/helpers/const.ts":
/*!********************************************!*\
  !*** ./src/panels/config/helpers/const.ts ***!
  \********************************************/
/*! exports provided: HELPER_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELPER_DOMAINS", function() { return HELPER_DOMAINS; });
const HELPER_DOMAINS = ["input_boolean", "input_text", "input_number", "input_datetime", "input_select"];

/***/ }),

/***/ "./src/panels/config/helpers/ha-config-helpers.ts":
/*!********************************************************!*\
  !*** ./src/panels/config/helpers/ha-config-helpers.ts ***!
  \********************************************************/
/*! exports provided: HaConfigHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaConfigHelpers", function() { return HaConfigHelpers; });
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_tabs_subpage_data_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../layouts/hass-tabs-subpage-data-table */ "./src/layouts/hass-tabs-subpage-data-table.ts");
/* harmony import */ var _entities_show_dialog_entity_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../entities/show-dialog-entity-editor */ "./src/panels/config/entities/show-dialog-entity-editor.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./const */ "./src/panels/config/helpers/const.ts");
/* harmony import */ var _show_dialog_helper_detail__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./show-dialog-helper-detail */ "./src/panels/config/helpers/show-dialog-helper-detail.ts");
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



















let HaConfigHelpers = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["customElement"])("ha-config-helpers")], function (_initialize, _LitElement) {
  class HaConfigHelpers extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigHelpers,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_stateItems",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])((narrow, _language) => {
          const columns = {
            icon: {
              title: "",
              type: "icon",
              template: (icon, helper) => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
            <ha-icon .icon=${icon || Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_8__["domainIcon"])(helper.type)}></ha-icon>
          `
            },
            name: {
              title: this.hass.localize("ui.panel.config.helpers.picker.headers.name"),
              sortable: true,
              filterable: true,
              grows: true,
              direction: "asc",
              template: (name, item) => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
              ${name}
              ${narrow ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                    <div class="secondary">
                      ${item.entity_id}
                    </div>
                  ` : ""}
            `
            }
          };

          if (!narrow) {
            columns.entity_id = {
              title: this.hass.localize("ui.panel.config.helpers.picker.headers.entity_id"),
              sortable: true,
              filterable: true,
              width: "25%"
            };
          }

          columns.type = {
            title: this.hass.localize("ui.panel.config.helpers.picker.headers.type"),
            sortable: true,
            width: "25%",
            filterable: true,
            template: type => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
            ${this.hass.localize(`ui.panel.config.helpers.types.${type}`) || type}
          `
          };
          columns.editable = {
            title: "",
            type: "icon",
            template: editable => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
          ${!editable ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                <div
                  tabindex="0"
                  style="display:inline-block; position: relative;"
                >
                  <ha-icon icon="hass:pencil-off"></ha-icon>
                  <paper-tooltip position="left">
                    ${this.hass.localize("ui.panel.config.entities.picker.status.readonly")}
                  </paper-tooltip>
                </div>
              ` : ""}
        `
          };
          return columns;
        });
      }

    }, {
      kind: "field",
      key: "_getItems",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(stateItems => {
          return stateItems.map(state => {
            return {
              id: state.entity_id,
              icon: state.attributes.icon,
              name: state.attributes.friendly_name || "",
              entity_id: state.entity_id,
              editable: state.attributes.editable,
              type: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(state)
            };
          });
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || this._stateItems === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]` <hass-loading-screen></hass-loading-screen> `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${_ha_panel_config__WEBPACK_IMPORTED_MODULE_15__["configSections"].automation}
        .columns=${this._columns(this.narrow, this.hass.language)}
        .data=${this._getItems(this._stateItems)}
        @row-click=${this._openEditDialog}
        hasFab
      >
      </hass-tabs-subpage-data-table>
      <ha-fab
        ?is-wide=${this.isWide}
        ?narrow=${this.narrow}
        icon="hass:plus"
        title="${this.hass.localize("ui.panel.config.helpers.picker.add_helper")}"
        @click=${this._createHelpler}
      ></ha-fab>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaConfigHelpers.prototype), "firstUpdated", this).call(this, changedProps);

        this._getStates();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaConfigHelpers.prototype), "updated", this).call(this, changedProps);

        const oldHass = changedProps.get("hass");

        if (oldHass && this._stateItems) {
          this._getStates(oldHass);
        }
      }
    }, {
      kind: "method",
      key: "_getStates",
      value: function _getStates(oldHass) {
        let changed = false;
        const tempStates = Object.values(this.hass.states).filter(entity => {
          if (!_const__WEBPACK_IMPORTED_MODULE_16__["HELPER_DOMAINS"].includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(entity))) {
            return false;
          }

          if ((oldHass === null || oldHass === void 0 ? void 0 : oldHass.states[entity.entity_id]) !== entity) {
            changed = true;
          }

          return true;
        });

        if (changed || this._stateItems.length !== tempStates.length) {
          this._stateItems = tempStates;
        }
      }
    }, {
      kind: "method",
      key: "_openEditDialog",
      value: async function _openEditDialog(ev) {
        const entityId = ev.detail.id;
        Object(_entities_show_dialog_entity_editor__WEBPACK_IMPORTED_MODULE_14__["showEntityEditorDialog"])(this, {
          entity_id: entityId
        });
      }
    }, {
      kind: "method",
      key: "_createHelpler",
      value: function _createHelpler() {
        Object(_show_dialog_helper_detail__WEBPACK_IMPORTED_MODULE_17__["showHelperDetailDialog"])(this);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["css"]`
      ha-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
      }
      ha-fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }
      ha-fab[narrow] {
        bottom: 84px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/helpers/show-dialog-helper-detail.ts":
/*!****************************************************************!*\
  !*** ./src/panels/config/helpers/show-dialog-helper-detail.ts ***!
  \****************************************************************/
/*! exports provided: loadHelperDetailDialog, showHelperDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHelperDetailDialog", function() { return loadHelperDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHelperDetailDialog", function() { return showHelperDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadHelperDetailDialog = () => Promise.all(/*! import() | helper-detail-dialog */[__webpack_require__.e(13), __webpack_require__.e("vendors~add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zig~61d72af3"), __webpack_require__.e(19), __webpack_require__.e(14), __webpack_require__.e("add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zigbee-info~af4b98d6"), __webpack_require__.e("entity-editor-dialog~helper-detail-dialog~hui-button-card-editor~hui-entity-card-editor~hui-light-ca~1d54093c"), __webpack_require__.e(24), __webpack_require__.e("helper-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-helper-detail */ "./src/panels/config/helpers/dialog-helper-detail.ts"));
const showHelperDetailDialog = element => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-helper-detail",
    dialogImport: loadHelperDetailDialog,
    dialogParams: {}
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWhlbHBlcnMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9kb21haW5faWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2VudGl0aWVzL3Nob3ctZGlhbG9nLWVudGl0eS1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGVscGVycy9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oZWxwZXJzL2hhLWNvbmZpZy1oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hlbHBlcnMvc2hvdy1kaWFsb2ctaGVscGVyLWRldGFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pY29uLWl0ZW0+YCBpcyBhIGNvbnZlbmllbmNlIGVsZW1lbnQgdG8gbWFrZSBhbiBpdGVtIHdpdGggaWNvbi4gSXQgaXMgYW5cbmludGVyYWN0aXZlIGxpc3QgaXRlbSB3aXRoIGEgZml4ZWQtd2lkdGggaWNvbiBhcmVhLCBhY2NvcmRpbmcgdG8gTWF0ZXJpYWxcbkRlc2lnbi4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGljb25zIGFyZSBvZiB2YXJ5aW5nIHdpZHRocywgYnV0IHlvdSB3YW50IHRoZSBpdGVtXG5ib2RpZXMgdG8gbGluZSB1cC4gVXNlIHRoaXMgbGlrZSBhIGA8cGFwZXItaXRlbT5gLiBUaGUgY2hpbGQgbm9kZSB3aXRoIHRoZSBzbG90XG5uYW1lIGBpdGVtLWljb25gIGlzIHBsYWNlZCBpbiB0aGUgaWNvbiBhcmVhLlxuXG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImZhdm9yaXRlXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvaXJvbi1pY29uPlxuICAgICAgRmF2b3JpdGVcbiAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2Rpdj5cbiAgICAgIEF2YXRhclxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIGFyZWEgfCBgNTZweGBcbmAtLXBhcGVyLWl0ZW0taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIGFyZWEgfCBge31gXG5gLS1wYXBlci1pY29uLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWljb24ge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcblxuICAgICAgICB3aWR0aDogdmFyKC0tcGFwZXItaXRlbS1pY29uLXdpZHRoLCA1NnB4KTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudEljb25cIiBjbGFzcz1cImNvbnRlbnQtaWNvblwiPlxuICAgICAgPHNsb3QgbmFtZT1cIml0ZW0taWNvblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaWNvbi1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiIsIi8qKiBDb25zdGFudHMgdG8gYmUgdXNlZCBpbiB0aGUgZnJvbnRlbmQuICovXG5cbi8vIENvbnN0YW50cyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGJ5IG5hbWUuXG4vLyBBcnJheXMgd2l0aCB2YWx1ZXMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBpZiBvcmRlciBkb2Vzbid0IG1hdHRlci5cbi8vIEVhY2ggY29uc3RhbnQgc2hvdWxkIGhhdmUgYSBkZXNjcmlwdGlvbiB3aGF0IGl0IGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgZm9yLlxuXG4vKiogSWNvbiB0byB1c2Ugd2hlbiBubyBpY29uIHNwZWNpZmllZCBmb3IgZG9tYWluLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRE9NQUlOX0lDT04gPSBcImhhc3M6Ym9va21hcmtcIjtcblxuLyoqIERvbWFpbnMgdGhhdCBoYXZlIGEgc3RhdGUgY2FyZC4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IFtcbiAgXCJjbGltYXRlXCIsXG4gIFwiY292ZXJcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInNjZW5lXCIsXG4gIFwic2NyaXB0XCIsXG4gIFwidGltZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgXCJ3ZWJsaW5rXCIsXG5dO1xuXG4vKiogRG9tYWlucyB3aXRoIHNlcGFyYXRlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX01PUkVfSU5GTyA9IFtcbiAgXCJhbGFybV9jb250cm9sX3BhbmVsXCIsXG4gIFwiYXV0b21hdGlvblwiLFxuICBcImNhbWVyYVwiLFxuICBcImNsaW1hdGVcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJjb3VudGVyXCIsXG4gIFwiY292ZXJcIixcbiAgXCJmYW5cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbnB1dF9kYXRldGltZVwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInBlcnNvblwiLFxuICBcInNjcmlwdFwiLFxuICBcInN1blwiLFxuICBcInRpbWVyXCIsXG4gIFwidXBkYXRlclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYXRoZXJcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdyBubyBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfSElERV9NT1JFX0lORk8gPSBbXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcInNjZW5lXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG91bGQgaGF2ZSB0aGUgaGlzdG9yeSBoaWRkZW4gaW4gdGhlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSA9IFtcbiAgXCJjYW1lcmFcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwic2NlbmVcIixcbl07XG5cbi8qKiBTdGF0ZXMgdGhhdCB3ZSBjb25zaWRlciBcIm9mZlwiLiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRFU19PRkYgPSBbXCJjbG9zZWRcIiwgXCJsb2NrZWRcIiwgXCJvZmZcIl07XG5cbi8qKiBEb21haW5zIHdoZXJlIHdlIGFsbG93IHRvZ2dsZSBpbiBMb3ZlbGFjZS4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1RPR0dMRSA9IG5ldyBTZXQoW1xuICBcImZhblwiLFxuICBcImlucHV0X2Jvb2xlYW5cIixcbiAgXCJsaWdodFwiLFxuICBcInN3aXRjaFwiLFxuICBcImdyb3VwXCIsXG4gIFwiYXV0b21hdGlvblwiLFxuXSk7XG5cbi8qKiBUZW1wZXJhdHVyZSB1bml0cy4gKi9cbmV4cG9ydCBjb25zdCBVTklUX0MgPSBcIsKwQ1wiO1xuZXhwb3J0IGNvbnN0IFVOSVRfRiA9IFwiwrBGXCI7XG5cbi8qKiBFbnRpdHkgSUQgb2YgdGhlIGRlZmF1bHQgdmlldy4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1ZJRVdfRU5USVRZX0lEID0gXCJncm91cC5kZWZhdWx0X3ZpZXdcIjtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufTtcbiIsIi8qKlxuICogUmV0dXJuIHRoZSBpY29uIHRvIGJlIHVzZWQgZm9yIGEgZG9tYWluLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBhIHN0YXRlIHRvIGluZmx1ZW5jZSB0aGUgZG9tYWluIGljb24uXG4gKi9cbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcblxuY29uc3QgZml4ZWRJY29ucyA9IHtcbiAgYWxlcnQ6IFwiaGFzczphbGVydFwiLFxuICBhbGV4YTogXCJoYXNzOmFtYXpvbi1hbGV4YVwiLFxuICBhdXRvbWF0aW9uOiBcImhhc3M6cm9ib3RcIixcbiAgY2FsZW5kYXI6IFwiaGFzczpjYWxlbmRhclwiLFxuICBjYW1lcmE6IFwiaGFzczp2aWRlb1wiLFxuICBjbGltYXRlOiBcImhhc3M6dGhlcm1vc3RhdFwiLFxuICBjb25maWd1cmF0b3I6IFwiaGFzczpzZXR0aW5nc1wiLFxuICBjb252ZXJzYXRpb246IFwiaGFzczp0ZXh0LXRvLXNwZWVjaFwiLFxuICBjb3VudGVyOiBcImhhc3M6Y291bnRlclwiLFxuICBkZXZpY2VfdHJhY2tlcjogXCJoYXNzOmFjY291bnRcIixcbiAgZmFuOiBcImhhc3M6ZmFuXCIsXG4gIGdvb2dsZV9hc3Npc3RhbnQ6IFwiaGFzczpnb29nbGUtYXNzaXN0YW50XCIsXG4gIGdyb3VwOiBcImhhc3M6Z29vZ2xlLWNpcmNsZXMtY29tbXVuaXRpZXNcIixcbiAgaGlzdG9yeV9ncmFwaDogXCJoYXNzOmNoYXJ0LWxpbmVcIixcbiAgaG9tZWFzc2lzdGFudDogXCJoYXNzOmhvbWUtYXNzaXN0YW50XCIsXG4gIGhvbWVraXQ6IFwiaGFzczpob21lLWF1dG9tYXRpb25cIixcbiAgaW1hZ2VfcHJvY2Vzc2luZzogXCJoYXNzOmltYWdlLWZpbHRlci1mcmFtZXNcIixcbiAgaW5wdXRfYm9vbGVhbjogXCJoYXNzOnRvZ2dsZS1zd2l0Y2gtb3V0bGluZVwiLFxuICBpbnB1dF9kYXRldGltZTogXCJoYXNzOmNhbGVuZGFyLWNsb2NrXCIsXG4gIGlucHV0X251bWJlcjogXCJoYXNzOnJheS12ZXJ0ZXhcIixcbiAgaW5wdXRfc2VsZWN0OiBcImhhc3M6Zm9ybWF0LWxpc3QtYnVsbGV0ZWRcIixcbiAgaW5wdXRfdGV4dDogXCJoYXNzOnRleHRib3hcIixcbiAgbGlnaHQ6IFwiaGFzczpsaWdodGJ1bGJcIixcbiAgbWFpbGJveDogXCJoYXNzOm1haWxib3hcIixcbiAgbm90aWZ5OiBcImhhc3M6Y29tbWVudC1hbGVydFwiLFxuICBwZXJzaXN0ZW50X25vdGlmaWNhdGlvbjogXCJoYXNzOmJlbGxcIixcbiAgcGVyc29uOiBcImhhc3M6YWNjb3VudFwiLFxuICBwbGFudDogXCJoYXNzOmZsb3dlclwiLFxuICBwcm94aW1pdHk6IFwiaGFzczphcHBsZS1zYWZhcmlcIixcbiAgcmVtb3RlOiBcImhhc3M6cmVtb3RlXCIsXG4gIHNjZW5lOiBcImhhc3M6cGFsZXR0ZVwiLFxuICBzY3JpcHQ6IFwiaGFzczpzY3JpcHQtdGV4dFwiLFxuICBzZW5zb3I6IFwiaGFzczpleWVcIixcbiAgc2ltcGxlX2FsYXJtOiBcImhhc3M6YmVsbFwiLFxuICBzdW46IFwiaGFzczp3aGl0ZS1iYWxhbmNlLXN1bm55XCIsXG4gIHN3aXRjaDogXCJoYXNzOmZsYXNoXCIsXG4gIHRpbWVyOiBcImhhc3M6dGltZXJcIixcbiAgdXBkYXRlcjogXCJoYXNzOmNsb3VkLXVwbG9hZFwiLFxuICB2YWN1dW06IFwiaGFzczpyb2JvdC12YWN1dW1cIixcbiAgd2F0ZXJfaGVhdGVyOiBcImhhc3M6dGhlcm1vbWV0ZXJcIixcbiAgd2VhdGhlcjogXCJoYXNzOndlYXRoZXItY2xvdWR5XCIsXG4gIHdlYmxpbms6IFwiaGFzczpvcGVuLWluLW5ld1wiLFxuICB6b25lOiBcImhhc3M6bWFwLW1hcmtlci1yYWRpdXNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBkb21haW5JY29uID0gKGRvbWFpbjogc3RyaW5nLCBzdGF0ZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGlmIChkb21haW4gaW4gZml4ZWRJY29ucykge1xuICAgIHJldHVybiBmaXhlZEljb25zW2RvbWFpbl07XG4gIH1cblxuICBzd2l0Y2ggKGRvbWFpbikge1xuICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJhcm1lZF9ob21lXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsLXBsdXNcIjtcbiAgICAgICAgY2FzZSBcImFybWVkX25pZ2h0XCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsLXNsZWVwXCI7XG4gICAgICAgIGNhc2UgXCJkaXNhcm1lZFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmVsbC1vdXRsaW5lXCI7XG4gICAgICAgIGNhc2UgXCJ0cmlnZ2VyZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGwtcmluZ1wiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmVsbFwiO1xuICAgICAgfVxuXG4gICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSA9PT0gXCJvZmZcIlxuICAgICAgICA/IFwiaGFzczpyYWRpb2JveC1ibGFua1wiXG4gICAgICAgIDogXCJoYXNzOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtcblxuICAgIGNhc2UgXCJjb3ZlclwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwib3BlbmluZ1wiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YXJyb3ctdXAtYm94XCI7XG4gICAgICAgIGNhc2UgXCJjbG9zaW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczphcnJvdy1kb3duLWJveFwiO1xuICAgICAgICBjYXNlIFwiY2xvc2VkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczp3aW5kb3ctY2xvc2VkXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczp3aW5kb3ctb3BlblwiO1xuICAgICAgfVxuXG4gICAgY2FzZSBcImxvY2tcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSA9PT0gXCJ1bmxvY2tlZFwiID8gXCJoYXNzOmxvY2stb3BlblwiIDogXCJoYXNzOmxvY2tcIjtcblxuICAgIGNhc2UgXCJtZWRpYV9wbGF5ZXJcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSA9PT0gXCJwbGF5aW5nXCIgPyBcImhhc3M6Y2FzdC1jb25uZWN0ZWRcIiA6IFwiaGFzczpjYXN0XCI7XG5cbiAgICBjYXNlIFwiendhdmVcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcImRlYWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmVtb3RpY29uLWRlYWRcIjtcbiAgICAgICAgY2FzZSBcInNsZWVwaW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpzbGVlcFwiO1xuICAgICAgICBjYXNlIFwiaW5pdGlhbGl6aW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczp0aW1lci1zYW5kXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczp6LXdhdmVcIjtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJVbmFibGUgdG8gZmluZCBpY29uIGZvciBkb21haW4gXCIgKyBkb21haW4gKyBcIiAoXCIgKyBzdGF0ZSArIFwiKVwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIERFRkFVTFRfRE9NQUlOX0lDT047XG4gIH1cbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgdHlwZSB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IERpYWxvZ0VudGl0eUVkaXRvciB9IGZyb20gXCIuL2RpYWxvZy1lbnRpdHktZWRpdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2dQYXJhbXMge1xuICBlbnRyeT86IEVudGl0eVJlZ2lzdHJ5RW50cnk7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICB0YWI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRW50aXR5RWRpdG9yRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZW50aXR5LWVkaXRvci1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLWVudGl0eS1lZGl0b3JcIlxuICApO1xuXG5jb25zdCBnZXREaWFsb2cgPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiaG9tZS1hc3Npc3RhbnRcIikhXG4gICAgLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2ctZW50aXR5LWVkaXRvclwiKSBhc1xuICAgIHwgRGlhbG9nRW50aXR5RWRpdG9yXG4gICAgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd0VudGl0eUVkaXRvckRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGVudGl0eURldGFpbFBhcmFtczogRW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2dQYXJhbXNcbik6ICgoKSA9PiBEaWFsb2dFbnRpdHlFZGl0b3IgfCB1bmRlZmluZWQpID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZW50aXR5LWVkaXRvclwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZEVudGl0eUVkaXRvckRpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXM6IGVudGl0eURldGFpbFBhcmFtcyxcbiAgfSk7XG4gIHJldHVybiBnZXREaWFsb2c7XG59O1xuIiwiaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvaW5wdXRfYm9vbGVhblwiO1xuaW1wb3J0IHsgSW5wdXREYXRlVGltZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2lucHV0X2RhdGV0aW1lXCI7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2lucHV0X251bWJlclwiO1xuaW1wb3J0IHsgSW5wdXRTZWxlY3QgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9pbnB1dF9zZWxlY3RcIjtcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2lucHV0X3RleHRcIjtcblxuZXhwb3J0IGNvbnN0IEhFTFBFUl9ET01BSU5TID0gW1xuICBcImlucHV0X2Jvb2xlYW5cIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbl07XG5cbmV4cG9ydCB0eXBlIEhlbHBlciA9XG4gIHwgSW5wdXRCb29sZWFuXG4gIHwgSW5wdXRUZXh0XG4gIHwgSW5wdXROdW1iZXJcbiAgfCBJbnB1dFNlbGVjdFxuICB8IElucHV0RGF0ZVRpbWU7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZG9tYWluX2ljb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbW1vbi9zZWFyY2gvc2VhcmNoLWlucHV0XCI7XG5pbXBvcnQge1xuICBEYXRhVGFibGVDb2x1bW5Db250YWluZXIsXG4gIFJvd0NsaWNrZWRFdmVudCxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3MtbG9hZGluZy1zY3JlZW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHNob3dFbnRpdHlFZGl0b3JEaWFsb2cgfSBmcm9tIFwiLi4vZW50aXRpZXMvc2hvdy1kaWFsb2ctZW50aXR5LWVkaXRvclwiO1xuaW1wb3J0IHsgY29uZmlnU2VjdGlvbnMgfSBmcm9tIFwiLi4vaGEtcGFuZWwtY29uZmlnXCI7XG5pbXBvcnQgeyBIRUxQRVJfRE9NQUlOUyB9IGZyb20gXCIuL2NvbnN0XCI7XG5pbXBvcnQgeyBzaG93SGVscGVyRGV0YWlsRGlhbG9nIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctaGVscGVyLWRldGFpbFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvbmZpZy1oZWxwZXJzXCIpXG5leHBvcnQgY2xhc3MgSGFDb25maWdIZWxwZXJzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdGF0ZUl0ZW1zOiBIYXNzRW50aXR5W10gPSBbXTtcblxuICBwcml2YXRlIF9jb2x1bW5zID0gbWVtb2l6ZShcbiAgICAobmFycm93LCBfbGFuZ3VhZ2UpOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPT4ge1xuICAgICAgY29uc3QgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyID0ge1xuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdHlwZTogXCJpY29uXCIsXG4gICAgICAgICAgdGVtcGxhdGU6IChpY29uLCBoZWxwZXI6IGFueSkgPT4gaHRtbGBcbiAgICAgICAgICAgIDxoYS1pY29uIC5pY29uPSR7aWNvbiB8fCBkb21haW5JY29uKGhlbHBlci50eXBlKX0+PC9oYS1pY29uPlxuICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaGVscGVycy5waWNrZXIuaGVhZGVycy5uYW1lXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgZ3Jvd3M6IHRydWUsXG4gICAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICAgIHRlbXBsYXRlOiAobmFtZSwgaXRlbTogYW55KSA9PlxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgJHtuYW1lfVxuICAgICAgICAgICAgICAke25hcnJvd1xuICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgaWYgKCFuYXJyb3cpIHtcbiAgICAgICAgY29sdW1ucy5lbnRpdHlfaWQgPSB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmhlbHBlcnMucGlja2VyLmhlYWRlcnMuZW50aXR5X2lkXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb2x1bW5zLnR5cGUgPSB7XG4gICAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaGVscGVycy5waWNrZXIuaGVhZGVycy50eXBlXCJcbiAgICAgICAgKSxcbiAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogKHR5cGUpID0+XG4gICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKGB1aS5wYW5lbC5jb25maWcuaGVscGVycy50eXBlcy4ke3R5cGV9YCkgfHxcbiAgICAgICAgICAgIHR5cGV9XG4gICAgICAgICAgYCxcbiAgICAgIH07XG4gICAgICBjb2x1bW5zLmVkaXRhYmxlID0ge1xuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJpY29uXCIsXG4gICAgICAgIHRlbXBsYXRlOiAoZWRpdGFibGUpID0+IGh0bWxgXG4gICAgICAgICAgJHshZWRpdGFibGVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgcG9zaXRpb246IHJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cImhhc3M6cGVuY2lsLW9mZlwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIHBvc2l0aW9uPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuc3RhdHVzLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItdG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICBgLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cbiAgKTtcblxuICBwcml2YXRlIF9nZXRJdGVtcyA9IG1lbW9pemUoKHN0YXRlSXRlbXM6IEhhc3NFbnRpdHlbXSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZUl0ZW1zLm1hcCgoc3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBzdGF0ZS5lbnRpdHlfaWQsXG4gICAgICAgIGljb246IHN0YXRlLmF0dHJpYnV0ZXMuaWNvbixcbiAgICAgICAgbmFtZTogc3RhdGUuYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCIsXG4gICAgICAgIGVudGl0eV9pZDogc3RhdGUuZW50aXR5X2lkLFxuICAgICAgICBlZGl0YWJsZTogc3RhdGUuYXR0cmlidXRlcy5lZGl0YWJsZSxcbiAgICAgICAgdHlwZTogY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8IHRoaXMuX3N0YXRlSXRlbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGh0bWxgIDxoYXNzLWxvYWRpbmctc2NyZWVuPjwvaGFzcy1sb2FkaW5nLXNjcmVlbj4gYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlXG4gICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgIGJhY2stcGF0aD1cIi9jb25maWdcIlxuICAgICAgICAucm91dGU9JHt0aGlzLnJvdXRlfVxuICAgICAgICAudGFicz0ke2NvbmZpZ1NlY3Rpb25zLmF1dG9tYXRpb259XG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLm5hcnJvdywgdGhpcy5oYXNzLmxhbmd1YWdlKX1cbiAgICAgICAgLmRhdGE9JHt0aGlzLl9nZXRJdGVtcyh0aGlzLl9zdGF0ZUl0ZW1zKX1cbiAgICAgICAgQHJvdy1jbGljaz0ke3RoaXMuX29wZW5FZGl0RGlhbG9nfVxuICAgICAgICBoYXNGYWJcbiAgICAgID5cbiAgICAgIDwvaGFzcy10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZT5cbiAgICAgIDxoYS1mYWJcbiAgICAgICAgP2lzLXdpZGU9JHt0aGlzLmlzV2lkZX1cbiAgICAgICAgP25hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgdGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5oZWxwZXJzLnBpY2tlci5hZGRfaGVscGVyXCJcbiAgICAgICAgKX1cIlxuICAgICAgICBAY2xpY2s9JHt0aGlzLl9jcmVhdGVIZWxwbGVyfVxuICAgICAgPjwvaGEtZmFiPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9nZXRTdGF0ZXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQgfCB1bmRlZmluZWQ7XG4gICAgaWYgKG9sZEhhc3MgJiYgdGhpcy5fc3RhdGVJdGVtcykge1xuICAgICAgdGhpcy5fZ2V0U3RhdGVzKG9sZEhhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFN0YXRlcyhvbGRIYXNzPzogSG9tZUFzc2lzdGFudCkge1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgY29uc3QgdGVtcFN0YXRlcyA9IE9iamVjdC52YWx1ZXModGhpcy5oYXNzIS5zdGF0ZXMpLmZpbHRlcigoZW50aXR5KSA9PiB7XG4gICAgICBpZiAoIUhFTFBFUl9ET01BSU5TLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAob2xkSGFzcz8uc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdICE9PSBlbnRpdHkpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGlmIChjaGFuZ2VkIHx8IHRoaXMuX3N0YXRlSXRlbXMubGVuZ3RoICE9PSB0ZW1wU3RhdGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fc3RhdGVJdGVtcyA9IHRlbXBTdGF0ZXM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb3BlbkVkaXREaWFsb2coZXY6IEN1c3RvbUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuZGV0YWlsIGFzIFJvd0NsaWNrZWRFdmVudCkuaWQ7XG4gICAgc2hvd0VudGl0eUVkaXRvckRpYWxvZyh0aGlzLCB7XG4gICAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlSGVscGxlcigpIHtcbiAgICBzaG93SGVscGVyRGV0YWlsRGlhbG9nKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtZmFiIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgaGEtZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICByaWdodDogMjRweDtcbiAgICAgIH1cbiAgICAgIGhhLWZhYltuYXJyb3ddIHtcbiAgICAgICAgYm90dG9tOiA4NHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRIZWxwZXJEZXRhaWxEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJoZWxwZXItZGV0YWlsLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctaGVscGVyLWRldGFpbFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzaG93SGVscGVyRGV0YWlsRGlhbG9nID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWhlbHBlci1kZXRhaWxcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRIZWxwZXJEZXRhaWxEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiB7fSxcbiAgfSk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE0QkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQWlCQTtBQUNBO0FBQUE7QUF5QkE7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUdBO0FBdkRBO0FBeURBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25IQTtBQUlBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBLDY5QkFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQTs7QUFIQTs7QUFYQTtBQVJBO0FBQ0E7QUE0QkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBUUE7OztBQVJBOztBQUpBO0FBcUJBO0FBQ0E7QUF2RkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQTJGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBckdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBR0E7O0FBcEJBO0FBdUJBO0FBbklBO0FBQUE7QUFBQTtBQUFBO0FBc0lBO0FBQ0E7QUFBQTtBQUNBO0FBeElBO0FBQUE7QUFBQTtBQUFBO0FBMklBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFoSkE7QUFBQTtBQUFBO0FBQUE7QUFtSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpLQTtBQUFBO0FBQUE7QUFBQTtBQW9LQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBeEtBO0FBQUE7QUFBQTtBQUFBO0FBMktBO0FBQ0E7QUE1S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStLQTs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWVBO0FBOUxBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxxd0JBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
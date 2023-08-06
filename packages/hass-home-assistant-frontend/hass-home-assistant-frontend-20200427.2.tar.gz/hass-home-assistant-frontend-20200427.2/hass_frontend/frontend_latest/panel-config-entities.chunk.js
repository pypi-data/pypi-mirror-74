(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-entities"],{

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

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
};

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
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

/***/ "./src/data/config_entries.ts":
/*!************************************!*\
  !*** ./src/data/config_entries.ts ***!
  \************************************/
/*! exports provided: getConfigEntries, updateConfigEntry, deleteConfigEntry, getConfigEntrySystemOptions, updateConfigEntrySystemOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntries", function() { return getConfigEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfigEntry", function() { return updateConfigEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigEntry", function() { return deleteConfigEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntrySystemOptions", function() { return getConfigEntrySystemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfigEntrySystemOptions", function() { return updateConfigEntrySystemOptions; });
const getConfigEntries = hass => hass.callApi("GET", "config/config_entries/entry");
const updateConfigEntry = (hass, configEntryId, updatedValues) => hass.callWS(Object.assign({
  type: "config_entries/update",
  entry_id: configEntryId
}, updatedValues));
const deleteConfigEntry = (hass, configEntryId) => hass.callApi("DELETE", `config/config_entries/entry/${configEntryId}`);
const getConfigEntrySystemOptions = (hass, configEntryId) => hass.callWS({
  type: "config_entries/system_options/list",
  entry_id: configEntryId
});
const updateConfigEntrySystemOptions = (hass, configEntryId, params) => hass.callWS(Object.assign({
  type: "config_entries/system_options/update",
  entry_id: configEntryId
}, params));

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: findBatteryEntity, computeEntityRegistryName, getExtendedEntityRegistryEntry, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBatteryEntity", function() { return findBatteryEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtendedEntityRegistryEntry", function() { return getExtendedEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const findBatteryEntity = (hass, entities) => entities.find(entity => hass.states[entity.entity_id] && hass.states[entity.entity_id].attributes.device_class === "battery");
const computeEntityRegistryName = (hass, entry) => {
  if (entry.name) {
    return entry.name;
  }

  const state = hass.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const getExtendedEntityRegistryEntry = (hass, entityId) => hass.callWS({
  type: "config/entity_registry/get",
  entity_id: entityId
});
const updateEntityRegistryEntry = (hass, entityId, updates) => hass.callWS(Object.assign({
  type: "config/entity_registry/update",
  entity_id: entityId
}, updates));
const removeEntityRegistryEntry = (hass, entityId) => hass.callWS({
  type: "config/entity_registry/remove",
  entity_id: entityId
});

const fetchEntityRegistry = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then(entities => store.setState(entities, true)), 500, true), "entity_registry_updated");

const subscribeEntityRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/integration.ts":
/*!*********************************!*\
  !*** ./src/data/integration.ts ***!
  \*********************************/
/*! exports provided: integrationIssuesUrl, domainToName, fetchIntegrationManifests, fetchIntegrationManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integrationIssuesUrl", function() { return integrationIssuesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainToName", function() { return domainToName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIntegrationManifests", function() { return fetchIntegrationManifests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIntegrationManifest", function() { return fetchIntegrationManifest; });
const integrationIssuesUrl = domain => `https://github.com/home-assistant/home-assistant/issues?q=is%3Aissue+is%3Aopen+label%3A%22integration%3A+${domain}%22`;
const domainToName = (localize, domain) => localize(`component.${domain}.title`) || domain;
const fetchIntegrationManifests = hass => hass.callWS({
  type: "manifest/list"
});
const fetchIntegrationManifest = (hass, integration) => hass.callWS({
  type: "manifest/get",
  integration
});

/***/ }),

/***/ "./src/dialogs/generic/show-dialog-box.ts":
/*!************************************************!*\
  !*** ./src/dialogs/generic/show-dialog-box.ts ***!
  \************************************************/
/*! exports provided: loadGenericDialog, showAlertDialog, showConfirmationDialog, showPromptDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGenericDialog", function() { return loadGenericDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertDialog", function() { return showAlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPromptDialog", function() { return showPromptDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadGenericDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(13), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e(14), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-box */ "./src/dialogs/generic/dialog-box.ts"));

const showDialogHelper = (element, dialogParams, extra) => new Promise(resolve => {
  const origCancel = dialogParams.cancel;
  const origConfirm = dialogParams.confirm;
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-box",
    dialogImport: loadGenericDialog,
    dialogParams: Object.assign({}, dialogParams, {}, extra, {
      cancel: () => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? null : false);

        if (origCancel) {
          origCancel();
        }
      },
      confirm: out => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? out : true);

        if (origConfirm) {
          origConfirm(out);
        }
      }
    })
  });
});

const showAlertDialog = (element, dialogParams) => showDialogHelper(element, dialogParams);
const showConfirmationDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  confirmation: true
});
const showPromptDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  prompt: true
});

/***/ }),

/***/ "./src/panels/config/entities/ha-config-entities.ts":
/*!**********************************************************!*\
  !*** ./src/panels/config/entities/ha-config-entities.ts ***!
  \**********************************************************/
/*! exports provided: HaConfigEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaConfigEntities", function() { return HaConfigEntities; });
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _data_integration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../data/integration */ "./src/data/integration.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_tabs_subpage_data_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../layouts/hass-tabs-subpage-data-table */ "./src/layouts/hass-tabs-subpage-data-table.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
/* harmony import */ var _show_dialog_entity_editor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./show-dialog-entity-editor */ "./src/panels/config/entities/show-dialog-entity-editor.ts");
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


























let HaConfigEntities = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["customElement"])("ha-config-entities")], function (_initialize, _SubscribeMixin) {
  class HaConfigEntities extends _SubscribeMixin {
    constructor() {
      super();

      _initialize(this);

      window.addEventListener("location-changed", () => {
        this._searchParms = new URLSearchParams(window.location.search);
      });
      window.addEventListener("popstate", () => {
        this._searchParms = new URLSearchParams(window.location.search);
      });
    }

  }

  return {
    F: HaConfigEntities,
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
      key: "_entities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_stateEntities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_entries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_showDisabled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_showUnavailable",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_showReadOnly",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_filter",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_searchParms",

      value() {
        return new URLSearchParams(window.location.search);
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_selectedEntities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["query"])("hass-tabs-subpage-data-table")],
      key: "_dataTable",
      value: void 0
    }, {
      kind: "field",
      key: "getDialog",
      value: void 0
    }, {
      kind: "field",
      key: "_activeFilters",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])((filters, localize, entries) => {
          const filterTexts = [];
          filters.forEach((value, key) => {
            switch (key) {
              case "config_entry":
                {
                  if (!entries) {
                    this._loadConfigEntries();

                    break;
                  }

                  const configEntry = entries.find(entry => entry.entry_id === value);

                  if (!configEntry) {
                    break;
                  }

                  const integrationName = Object(_data_integration__WEBPACK_IMPORTED_MODULE_18__["domainToName"])(localize, configEntry.domain);
                  filterTexts.push(`${this.hass.localize("ui.panel.config.integrations.integration")} ${integrationName}${integrationName !== configEntry.title ? `: ${configEntry.title}` : ""}`);
                  break;
                }
            }
          });
          return filterTexts.length ? filterTexts : undefined;
        });
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])((narrow, _language) => {
          const columns = {
            icon: {
              title: "",
              type: "icon",
              template: icon => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
            <ha-icon slot="item-icon" .icon=${icon}></ha-icon>
          `
            },
            name: {
              title: this.hass.localize("ui.panel.config.entities.picker.headers.name"),
              sortable: true,
              filterable: true,
              direction: "asc",
              grows: true
            }
          };
          const statusColumn = {
            title: this.hass.localize("ui.panel.config.entities.picker.headers.status"),
            type: "icon",
            sortable: true,
            filterable: true,
            width: "68px",
            template: (_status, entity) => entity.unavailable || entity.disabled_by || entity.readonly ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                <div
                  tabindex="0"
                  style="display:inline-block; position: relative;"
                >
                  <ha-icon
                    style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_7__["styleMap"])({
              color: entity.unavailable ? "var(--google-red-500)" : ""
            })}
                    .icon=${entity.restored ? "hass:restore-alert" : entity.unavailable ? "hass:alert-circle" : entity.disabled_by ? "hass:cancel" : "hass:pencil-off"}
                  ></ha-icon>
                  <paper-tooltip position="left">
                    ${entity.restored ? this.hass.localize("ui.panel.config.entities.picker.status.restored") : entity.unavailable ? this.hass.localize("ui.panel.config.entities.picker.status.unavailable") : entity.disabled_by ? this.hass.localize("ui.panel.config.entities.picker.status.disabled") : this.hass.localize("ui.panel.config.entities.picker.status.readonly")}
                  </paper-tooltip>
                </div>
              ` : ""
          };

          if (narrow) {
            columns.name.template = (name, entity) => {
              return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
            ${name}<br />
            ${entity.entity_id} |
            ${this.hass.localize(`component.${entity.platform}.title`) || entity.platform}
          `;
            };

            columns.status = statusColumn;
            return columns;
          }

          columns.entity_id = {
            title: this.hass.localize("ui.panel.config.entities.picker.headers.entity_id"),
            sortable: true,
            filterable: true,
            width: "25%"
          };
          columns.platform = {
            title: this.hass.localize("ui.panel.config.entities.picker.headers.integration"),
            sortable: true,
            filterable: true,
            width: "20%",
            template: platform => this.hass.localize(`component.${platform}.title`) || platform
          };
          columns.status = statusColumn;
          return columns;
        });
      }

    }, {
      kind: "field",
      key: "_filteredEntities",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])((entities, stateEntities, filters, showDisabled, showUnavailable, showReadOnly) => {
          if (!showDisabled) {
            entities = entities.filter(entity => !entity.disabled_by);
          }

          const result = [];
          entities = showReadOnly ? entities.concat(stateEntities) : entities;
          filters.forEach((value, key) => {
            switch (key) {
              case "config_entry":
                entities = entities.filter(entity => entity.config_entry_id === value);
                break;
            }
          });

          for (const entry of entities) {
            const entity = this.hass.states[entry.entity_id];
            const unavailable = (entity === null || entity === void 0 ? void 0 : entity.state) === "unavailable";
            const restored = entity === null || entity === void 0 ? void 0 : entity.attributes.restored;

            if (!showUnavailable && unavailable) {
              continue;
            }

            result.push(Object.assign({}, entry, {
              icon: entity ? Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_12__["stateIcon"])(entity) : Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_11__["domainIcon"])(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entry.entity_id)),
              name: Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_17__["computeEntityRegistryName"])(this.hass, entry) || this.hass.localize("state.default.unavailable"),
              unavailable,
              restored,
              status: restored ? this.hass.localize("ui.panel.config.entities.picker.status.restored") : unavailable ? this.hass.localize("ui.panel.config.entities.picker.status.unavailable") : entry.disabled_by ? this.hass.localize("ui.panel.config.entities.picker.status.disabled") : this.hass.localize("ui.panel.config.entities.picker.status.ok")
            }));
          }

          return result;
        });
      }

    }, {
      kind: "method",
      key: "hassSubscribe",
      value: function hassSubscribe() {
        return [Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_17__["subscribeEntityRegistry"])(this.hass.connection, entities => {
          this._entities = entities;
        })];
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaConfigEntities.prototype), "disconnectedCallback", this).call(this);

        if (!this.getDialog) {
          return;
        }

        const dialog = this.getDialog();

        if (!dialog) {
          return;
        }

        dialog.closeDialog();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || this._entities === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]` <hass-loading-screen></hass-loading-screen> `;
        }

        const activeFilters = this._activeFilters(this._searchParms, this.hass.localize, this._entries);

        const headerToolbar = this._selectedEntities.length ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
          <p class="selected-txt">
            ${this.hass.localize("ui.panel.config.entities.picker.selected", "number", this._selectedEntities.length)}
          </p>
          <div class="header-btns">
            ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                  <mwc-button @click=${this._enableSelected}
                    >${this.hass.localize("ui.panel.config.entities.picker.enable_selected.button")}</mwc-button
                  >
                  <mwc-button @click=${this._disableSelected}
                    >${this.hass.localize("ui.panel.config.entities.picker.disable_selected.button")}</mwc-button
                  >
                  <mwc-button @click=${this._removeSelected}
                    >${this.hass.localize("ui.panel.config.entities.picker.remove_selected.button")}</mwc-button
                  >
                ` : lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                  <paper-icon-button
                    id="enable-btn"
                    icon="hass:undo"
                    @click=${this._enableSelected}
                  ></paper-icon-button>
                  <paper-tooltip for="enable-btn">
                    ${this.hass.localize("ui.panel.config.entities.picker.enable_selected.button")}
                  </paper-tooltip>
                  <paper-icon-button
                    id="disable-btn"
                    icon="hass:cancel"
                    @click=${this._disableSelected}
                  ></paper-icon-button>
                  <paper-tooltip for="disable-btn">
                    ${this.hass.localize("ui.panel.config.entities.picker.disable_selected.button")}
                  </paper-tooltip>
                  <paper-icon-button
                    id="remove-btn"
                    icon="hass:delete"
                    @click=${this._removeSelected}
                  ></paper-icon-button>
                  <paper-tooltip for="remove-btn">
                    ${this.hass.localize("ui.panel.config.entities.picker.remove_selected.button")}
                  </paper-tooltip>
                `}
          </div>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
          <search-input
            no-label-float
            no-underline
            @value-changed=${this._handleSearchChange}
            .filter=${this._filter}
          ></search-input
          >${activeFilters ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`<div class="active-filters">
                ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]` <div>
                      <ha-icon icon="hass:filter-variant"></ha-icon>
                      <paper-tooltip position="left">
                        ${this.hass.localize("ui.panel.config.filtering.filtering_by")}
                        ${activeFilters.join(", ")}
                      </paper-tooltip>
                    </div>` : `${this.hass.localize("ui.panel.config.filtering.filtering_by")} ${activeFilters.join(", ")}`}
                <mwc-button @click=${this._clearFilter}
                  >${this.hass.localize("ui.panel.config.filtering.clear")}</mwc-button
                >
              </div>` : ""}
          <paper-menu-button no-animations horizontal-align="right">
            <paper-icon-button
              aria-label=${this.hass.localize("ui.panel.config.entities.picker.filter.filter")}
              title="${this.hass.localize("ui.panel.config.entities.picker.filter.filter")}"
              icon="hass:filter-variant"
              slot="dropdown-trigger"
            ></paper-icon-button>
            <paper-listbox slot="dropdown-content">
              <paper-icon-item @tap="${this._showDisabledChanged}">
                <paper-checkbox
                  .checked=${this._showDisabled}
                  slot="item-icon"
                ></paper-checkbox>
                ${this.hass.localize("ui.panel.config.entities.picker.filter.show_disabled")}
              </paper-icon-item>
              <paper-icon-item @tap="${this._showRestoredChanged}">
                <paper-checkbox
                  .checked=${this._showUnavailable}
                  slot="item-icon"
                ></paper-checkbox>
                ${this.hass.localize("ui.panel.config.entities.picker.filter.show_unavailable")}
              </paper-icon-item>
              <paper-icon-item @tap="${this._showReadOnlyChanged}">
                <paper-checkbox
                  .checked=${this._showReadOnly}
                  slot="item-icon"
                ></paper-checkbox>
                ${this.hass.localize("ui.panel.config.entities.picker.filter.show_readonly")}
              </paper-icon-item>
            </paper-listbox>
          </paper-menu-button>
        `;
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        .backPath=${this._searchParms.has("historyBack") ? undefined : "/config"}
        .route=${this.route}
        .tabs=${_ha_panel_config__WEBPACK_IMPORTED_MODULE_23__["configSections"].integrations}
        .columns=${this._columns(this.narrow, this.hass.language)}
        .data=${this._filteredEntities(this._entities, this._stateEntities, this._searchParms, this._showDisabled, this._showUnavailable, this._showReadOnly)}
        .filter=${this._filter}
        selectable
        @selection-changed=${this._handleSelectionChanged}
        @row-click=${this._openEditEntry}
        id="entity_id"
      >
        <div
          class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_6__["classMap"])({
          "search-toolbar": this.narrow,
          "table-header": !this.narrow
        })}
          slot="header"
        >
          ${headerToolbar}
        </div>
      </hass-tabs-subpage-data-table>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaConfigEntities.prototype), "firstUpdated", this).call(this, changedProps);

        Object(_show_dialog_entity_editor__WEBPACK_IMPORTED_MODULE_24__["loadEntityEditorDialog"])();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaConfigEntities.prototype), "updated", this).call(this, changedProps);

        const oldHass = changedProps.get("hass");
        let changed = false;

        if (!this.hass || !this._entities) {
          return;
        }

        if (changedProps.has("hass") || changedProps.has("_entities")) {
          const stateEntities = [];
          const regEntityIds = new Set(this._entities.map(entity => entity.entity_id));

          for (const entityId of Object.keys(this.hass.states)) {
            if (regEntityIds.has(entityId)) {
              continue;
            }

            if (!oldHass || this.hass.states[entityId] !== oldHass.states[entityId]) {
              changed = true;
            }

            stateEntities.push({
              name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__["computeStateName"])(this.hass.states[entityId]),
              entity_id: entityId,
              platform: Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entityId),
              disabled_by: null,
              readonly: true,
              selectable: false
            });
          }

          if (changed) {
            this._stateEntities = stateEntities;
          }
        }
      }
    }, {
      kind: "method",
      key: "_showDisabledChanged",
      value: function _showDisabledChanged() {
        this._showDisabled = !this._showDisabled;
      }
    }, {
      kind: "method",
      key: "_showRestoredChanged",
      value: function _showRestoredChanged() {
        this._showUnavailable = !this._showUnavailable;
      }
    }, {
      kind: "method",
      key: "_showReadOnlyChanged",
      value: function _showReadOnlyChanged() {
        this._showReadOnly = !this._showReadOnly;
      }
    }, {
      kind: "method",
      key: "_handleSearchChange",
      value: function _handleSearchChange(ev) {
        this._filter = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_handleSelectionChanged",
      value: function _handleSelectionChanged(ev) {
        this._selectedEntities = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_enableSelected",
      value: function _enableSelected() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_19__["showConfirmationDialog"])(this, {
          title: this.hass.localize("ui.panel.config.entities.picker.enable_selected.confirm_title", "number", this._selectedEntities.length),
          text: this.hass.localize("ui.panel.config.entities.picker.enable_selected.confirm_text"),
          confirmText: this.hass.localize("ui.common.yes"),
          dismissText: this.hass.localize("ui.common.no"),
          confirm: () => {
            this._selectedEntities.forEach(entity => Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_17__["updateEntityRegistryEntry"])(this.hass, entity, {
              disabled_by: null
            }));

            this._clearSelection();
          }
        });
      }
    }, {
      kind: "method",
      key: "_disableSelected",
      value: function _disableSelected() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_19__["showConfirmationDialog"])(this, {
          title: this.hass.localize("ui.panel.config.entities.picker.disable_selected.confirm_title", "number", this._selectedEntities.length),
          text: this.hass.localize("ui.panel.config.entities.picker.disable_selected.confirm_text"),
          confirmText: this.hass.localize("ui.common.yes"),
          dismissText: this.hass.localize("ui.common.no"),
          confirm: () => {
            this._selectedEntities.forEach(entity => Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_17__["updateEntityRegistryEntry"])(this.hass, entity, {
              disabled_by: "user"
            }));

            this._clearSelection();
          }
        });
      }
    }, {
      kind: "method",
      key: "_removeSelected",
      value: function _removeSelected() {
        const removeableEntities = this._selectedEntities.filter(entity => {
          const stateObj = this.hass.states[entity];
          return stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes.restored;
        });

        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_19__["showConfirmationDialog"])(this, {
          title: this.hass.localize(`ui.panel.config.entities.picker.remove_selected.confirm_${removeableEntities.length !== this._selectedEntities.length ? "partly_" : ""}title`, "number", removeableEntities.length),
          text: removeableEntities.length === this._selectedEntities.length ? this.hass.localize("ui.panel.config.entities.picker.remove_selected.confirm_text") : this.hass.localize("ui.panel.config.entities.picker.remove_selected.confirm_partly_text", "removable", removeableEntities.length, "selected", this._selectedEntities.length),
          confirmText: this.hass.localize("ui.common.yes"),
          dismissText: this.hass.localize("ui.common.no"),
          confirm: () => {
            removeableEntities.forEach(entity => Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_17__["removeEntityRegistryEntry"])(this.hass, entity));

            this._clearSelection();
          }
        });
      }
    }, {
      kind: "method",
      key: "_clearSelection",
      value: function _clearSelection() {
        this._dataTable.clearSelection();
      }
    }, {
      kind: "method",
      key: "_openEditEntry",
      value: function _openEditEntry(ev) {
        const entityId = ev.detail.id;

        const entry = this._entities.find(entity => entity.entity_id === entityId);

        this.getDialog = Object(_show_dialog_entity_editor__WEBPACK_IMPORTED_MODULE_24__["showEntityEditorDialog"])(this, {
          entry,
          entity_id: entityId
        });
      }
    }, {
      kind: "method",
      key: "_loadConfigEntries",
      value: async function _loadConfigEntries() {
        this._entries = await Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_16__["getConfigEntries"])(this.hass);
      }
    }, {
      kind: "method",
      key: "_clearFilter",
      value: function _clearFilter() {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_13__["navigate"])(this, window.location.pathname, true);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["css"]`
      hass-loading-screen {
        --app-header-background-color: var(--sidebar-background-color);
        --app-header-text-color: var(--sidebar-text-color);
      }
      a {
        color: var(--primary-color);
      }
      h2 {
        margin-top: 0;
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        opacity: var(--dark-primary-opacity);
      }
      p {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-subhead_-_-webkit-font-smoothing
        );
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
      }
      ha-data-table {
        width: 100%;
        --data-table-border-width: 0;
      }
      :host(:not([narrow])) ha-data-table {
        height: calc(100vh - 65px);
        display: block;
      }
      ha-switch {
        margin-top: 16px;
      }
      .table-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
      }
      search-input {
        margin-left: 16px;
        flex-grow: 1;
        position: relative;
        top: 2px;
      }
      .search-toolbar search-input {
        margin-left: 8px;
        top: 1px;
      }
      .search-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--secondary-text-color);
        position: relative;
        top: -8px;
      }
      .selected-txt {
        font-weight: bold;
        padding-left: 16px;
      }
      .table-header .selected-txt {
        margin-top: 20px;
      }
      .search-toolbar .selected-txt {
        font-size: 16px;
      }
      .header-btns > mwc-button,
      .header-btns > paper-icon-button {
        margin: 8px;
      }
      .active-filters {
        color: var(--primary-text-color);
        position: relative;
        display: flex;
        align-items: center;
        padding: 2px 2px 2px 8px;
        margin-left: 4px;
        font-size: 14px;
      }
      .active-filters ha-icon {
        color: var(--primary-color);
      }
      .active-filters mwc-button {
        margin-left: 8px;
      }
      .active-filters::before {
        background-color: var(--primary-color);
        opacity: 0.12;
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: "";
      }
    `;
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_22__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"]));

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWVudGl0aWVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19lbnRyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2VudGl0eV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbnRlZ3JhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9lbnRpdGllcy9oYS1jb25maWctZW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZW50aXRpZXMvc2hvdy1kaWFsb2ctZW50aXR5LWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pY29uLWl0ZW0+YCBpcyBhIGNvbnZlbmllbmNlIGVsZW1lbnQgdG8gbWFrZSBhbiBpdGVtIHdpdGggaWNvbi4gSXQgaXMgYW5cbmludGVyYWN0aXZlIGxpc3QgaXRlbSB3aXRoIGEgZml4ZWQtd2lkdGggaWNvbiBhcmVhLCBhY2NvcmRpbmcgdG8gTWF0ZXJpYWxcbkRlc2lnbi4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGljb25zIGFyZSBvZiB2YXJ5aW5nIHdpZHRocywgYnV0IHlvdSB3YW50IHRoZSBpdGVtXG5ib2RpZXMgdG8gbGluZSB1cC4gVXNlIHRoaXMgbGlrZSBhIGA8cGFwZXItaXRlbT5gLiBUaGUgY2hpbGQgbm9kZSB3aXRoIHRoZSBzbG90XG5uYW1lIGBpdGVtLWljb25gIGlzIHBsYWNlZCBpbiB0aGUgaWNvbiBhcmVhLlxuXG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImZhdm9yaXRlXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvaXJvbi1pY29uPlxuICAgICAgRmF2b3JpdGVcbiAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2Rpdj5cbiAgICAgIEF2YXRhclxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIGFyZWEgfCBgNTZweGBcbmAtLXBhcGVyLWl0ZW0taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIGFyZWEgfCBge31gXG5gLS1wYXBlci1pY29uLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWljb24ge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcblxuICAgICAgICB3aWR0aDogdmFyKC0tcGFwZXItaXRlbS1pY29uLXdpZHRoLCA1NnB4KTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudEljb25cIiBjbGFzcz1cImNvbnRlbnQtaWNvblwiPlxuICAgICAgPHNsb3QgbmFtZT1cIml0ZW0taWNvblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaWNvbi1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlT2JqZWN0SWQgPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZU5hbWUgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgdHlwZSB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdFbnRyeSB7XG4gIGVudHJ5X2lkOiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzb3VyY2U6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcbiAgY29ubmVjdGlvbl9jbGFzczogc3RyaW5nO1xuICBzdXBwb3J0c19vcHRpb25zOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0VudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zIHtcbiAgZGlzYWJsZV9uZXdfZW50aXRpZXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdFbnRyaWVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbEFwaTxDb25maWdFbnRyeVtdPihcIkdFVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9lbnRyeVwiKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbmZpZ0VudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWdFbnRyeUlkOiBzdHJpbmcsXG4gIHVwZGF0ZWRWYWx1ZXM6IFBhcnRpYWw8Q29uZmlnRW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxDb25maWdFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnX2VudHJpZXMvdXBkYXRlXCIsXG4gICAgZW50cnlfaWQ6IGNvbmZpZ0VudHJ5SWQsXG4gICAgLi4udXBkYXRlZFZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maWdFbnRyeSA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBjb25maWdFbnRyeUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaTx7XG4gICAgcmVxdWlyZV9yZXN0YXJ0OiBib29sZWFuO1xuICB9PihcIkRFTEVURVwiLCBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2VudHJ5LyR7Y29uZmlnRW50cnlJZH1gKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29uZmlnRW50cnlJZDogc3RyaW5nXG4pID0+XG4gIGhhc3MuY2FsbFdTPENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucz4oe1xuICAgIHR5cGU6IFwiY29uZmlnX2VudHJpZXMvc3lzdGVtX29wdGlvbnMvbGlzdFwiLFxuICAgIGVudHJ5X2lkOiBjb25maWdFbnRyeUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29uZmlnRW50cnlJZDogc3RyaW5nLFxuICBwYXJhbXM6IFBhcnRpYWw8Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zPlxuKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy9zeXN0ZW1fb3B0aW9ucy91cGRhdGVcIixcbiAgICBlbnRyeV9pZDogY29uZmlnRW50cnlJZCxcbiAgICAuLi5wYXJhbXMsXG4gIH0pO1xuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiwgY3JlYXRlQ29sbGVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyeV9pZD86IHN0cmluZztcbiAgZGV2aWNlX2lkPzogc3RyaW5nO1xuICBkaXNhYmxlZF9ieTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRFbnRpdHlSZWdpc3RyeUVudHJ5IGV4dGVuZHMgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIHVuaXF1ZV9pZDogc3RyaW5nO1xuICBjYXBhYmlsaXRpZXM6IG9iamVjdDtcbiAgb3JpZ2luYWxfbmFtZT86IHN0cmluZztcbiAgb3JpZ2luYWxfaWNvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zIHtcbiAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gIGljb24/OiBzdHJpbmcgfCBudWxsO1xuICBkaXNhYmxlZF9ieT86IHN0cmluZyB8IG51bGw7XG4gIG5ld19lbnRpdHlfaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBmaW5kQmF0dGVyeUVudGl0eSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXVxuKTogRW50aXR5UmVnaXN0cnlFbnRyeSB8IHVuZGVmaW5lZCA9PlxuICBlbnRpdGllcy5maW5kKFxuICAgIChlbnRpdHkpID0+XG4gICAgICBoYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSAmJlxuICAgICAgaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF0uYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgPT09IFwiYmF0dGVyeVwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRyeTogRW50aXR5UmVnaXN0cnlFbnRyeVxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChlbnRyeS5uYW1lKSB7XG4gICAgcmV0dXJuIGVudHJ5Lm5hbWU7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RXh0ZW5kZWRFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPEV4dEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvZ2V0XCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXM+XG4pOiBQcm9taXNlPEV4dEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9yZW1vdmVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuY29uc3QgZmV0Y2hFbnRpdHlSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2xpc3RcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGVudGl0aWVzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGVudGl0aWVzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248RW50aXR5UmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9lbnRpdHlSZWdpc3RyeVwiLFxuICAgIGZldGNoRW50aXR5UmVnaXN0cnksXG4gICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZWdyYXRpb25NYW5pZmVzdCB7XG4gIGlzX2J1aWx0X2luOiBib29sZWFuO1xuICBkb21haW46IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBjb25maWdfZmxvdzogYm9vbGVhbjtcbiAgZG9jdW1lbnRhdGlvbjogc3RyaW5nO1xuICBkZXBlbmRlbmNpZXM/OiBzdHJpbmdbXTtcbiAgYWZ0ZXJfZGVwZW5kZW5jaWVzPzogc3RyaW5nW107XG4gIGNvZGVvd25lcnM/OiBzdHJpbmdbXTtcbiAgcmVxdWlyZW1lbnRzPzogc3RyaW5nW107XG4gIHNzZHA/OiBBcnJheTx7IG1hbnVmYWN0dXJlcj86IHN0cmluZzsgbW9kZWxOYW1lPzogc3RyaW5nOyBzdD86IHN0cmluZyB9PjtcbiAgemVyb2NvbmY/OiBzdHJpbmdbXTtcbiAgaG9tZWtpdD86IHsgbW9kZWxzOiBzdHJpbmdbXSB9O1xuICBxdWFsaXR5X3NjYWxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaW50ZWdyYXRpb25Jc3N1ZXNVcmwgPSAoZG9tYWluOiBzdHJpbmcpID0+XG4gIGBodHRwczovL2dpdGh1Yi5jb20vaG9tZS1hc3Npc3RhbnQvaG9tZS1hc3Npc3RhbnQvaXNzdWVzP3E9aXMlM0Fpc3N1ZStpcyUzQW9wZW4rbGFiZWwlM0ElMjJpbnRlZ3JhdGlvbiUzQSske2RvbWFpbn0lMjJgO1xuXG5leHBvcnQgY29uc3QgZG9tYWluVG9OYW1lID0gKGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsIGRvbWFpbjogc3RyaW5nKSA9PlxuICBsb2NhbGl6ZShgY29tcG9uZW50LiR7ZG9tYWlufS50aXRsZWApIHx8IGRvbWFpbjtcblxuZXhwb3J0IGNvbnN0IGZldGNoSW50ZWdyYXRpb25NYW5pZmVzdHMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8SW50ZWdyYXRpb25NYW5pZmVzdFtdPih7IHR5cGU6IFwibWFuaWZlc3QvbGlzdFwiIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbnRlZ3JhdGlvbk1hbmlmZXN0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpbnRlZ3JhdGlvbjogc3RyaW5nXG4pID0+IGhhc3MuY2FsbFdTPEludGVncmF0aW9uTWFuaWZlc3Q+KHsgdHlwZTogXCJtYW5pZmVzdC9nZXRcIiwgaW50ZWdyYXRpb24gfSk7XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbnRlcmZhY2UgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZXN1bHQ7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBkaXNtaXNzVGV4dD86IHN0cmluZztcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG4gIGNhbmNlbD86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGlucHV0TGFiZWw/OiBzdHJpbmc7XG4gIGlucHV0VHlwZT86IHN0cmluZztcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dQYXJhbXNcbiAgZXh0ZW5kcyBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMsXG4gICAgUHJvbXB0RGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNvbmZpcm1hdGlvbj86IGJvb2xlYW47XG4gIHByb21wdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkR2VuZXJpY0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpcm1hdGlvblwiICovIFwiLi9kaWFsb2ctYm94XCIpO1xuXG5jb25zdCBzaG93RGlhbG9nSGVscGVyID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBEaWFsb2dQYXJhbXMsXG4gIGV4dHJhPzoge1xuICAgIGNvbmZpcm1hdGlvbj86IERpYWxvZ1BhcmFtc1tcImNvbmZpcm1hdGlvblwiXTtcbiAgICBwcm9tcHQ/OiBEaWFsb2dQYXJhbXNbXCJwcm9tcHRcIl07XG4gIH1cbikgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBvcmlnQ2FuY2VsID0gZGlhbG9nUGFyYW1zLmNhbmNlbDtcbiAgICBjb25zdCBvcmlnQ29uZmlybSA9IGRpYWxvZ1BhcmFtcy5jb25maXJtO1xuXG4gICAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgICAgZGlhbG9nVGFnOiBcImRpYWxvZy1ib3hcIixcbiAgICAgIGRpYWxvZ0ltcG9ydDogbG9hZEdlbmVyaWNEaWFsb2csXG4gICAgICBkaWFsb2dQYXJhbXM6IHtcbiAgICAgICAgLi4uZGlhbG9nUGFyYW1zLFxuICAgICAgICAuLi5leHRyYSxcbiAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gbnVsbCA6IGZhbHNlKTtcbiAgICAgICAgICBpZiAob3JpZ0NhbmNlbCkge1xuICAgICAgICAgICAgb3JpZ0NhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybTogKG91dCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG91dCA6IHRydWUpO1xuICAgICAgICAgIGlmIChvcmlnQ29uZmlybSkge1xuICAgICAgICAgICAgb3JpZ0NvbmZpcm0ob3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNob3dBbGVydERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQWxlcnREaWFsb2dQYXJhbXNcbikgPT4gc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IGNvbmZpcm1hdGlvbjogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIGJvb2xlYW5cbiAgPjtcblxuZXhwb3J0IGNvbnN0IHNob3dQcm9tcHREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IFByb21wdERpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBwcm9tcHQ6IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBudWxsIHwgc3RyaW5nXG4gID47XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgcXVlcnksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcFwiO1xuaW1wb3J0IG1lbW9pemUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgdHlwZSB7IEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBzdGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbW1vbi9zZWFyY2gvc2VhcmNoLWlucHV0XCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHR5cGUge1xuICBEYXRhVGFibGVDb2x1bW5Db250YWluZXIsXG4gIERhdGFUYWJsZUNvbHVtbkRhdGEsXG4gIFJvd0NsaWNrZWRFdmVudCxcbiAgU2VsZWN0aW9uQ2hhbmdlZEV2ZW50LFxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuaW1wb3J0IHsgQ29uZmlnRW50cnksIGdldENvbmZpZ0VudHJpZXMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHtcbiAgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSxcbiAgRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnksXG4gIHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgZG9tYWluVG9OYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvaW50ZWdyYXRpb25cIjtcbmltcG9ydCB7IHNob3dDb25maXJtYXRpb25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB0eXBlIHsgSGFUYWJzU3VicGFnZURhdGFUYWJsZSB9IGZyb20gXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7IFN1YnNjcmliZU1peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9zdWJzY3JpYmUtbWl4aW5cIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbmZpZ1NlY3Rpb25zIH0gZnJvbSBcIi4uL2hhLXBhbmVsLWNvbmZpZ1wiO1xuaW1wb3J0IHsgRGlhbG9nRW50aXR5RWRpdG9yIH0gZnJvbSBcIi4vZGlhbG9nLWVudGl0eS1lZGl0b3JcIjtcbmltcG9ydCB7XG4gIGxvYWRFbnRpdHlFZGl0b3JEaWFsb2csXG4gIHNob3dFbnRpdHlFZGl0b3JEaWFsb2csXG59IGZyb20gXCIuL3Nob3ctZGlhbG9nLWVudGl0eS1lZGl0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZUVudGl0eSBleHRlbmRzIEVudGl0eVJlZ2lzdHJ5RW50cnkge1xuICByZWFkb25seT86IGJvb2xlYW47XG4gIHNlbGVjdGFibGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJvdyBleHRlbmRzIFN0YXRlRW50aXR5IHtcbiAgaWNvbjogc3RyaW5nO1xuICB1bmF2YWlsYWJsZTogYm9vbGVhbjtcbiAgcmVzdG9yZWQ6IGJvb2xlYW47XG4gIHN0YXR1czogc3RyaW5nO1xufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvbmZpZy1lbnRpdGllc1wiKVxuZXhwb3J0IGNsYXNzIEhhQ29uZmlnRW50aXRpZXMgZXh0ZW5kcyBTdWJzY3JpYmVNaXhpbihMaXRFbGVtZW50KSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdGllcz86IEVudGl0eVJlZ2lzdHJ5RW50cnlbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdGF0ZUVudGl0aWVzOiBTdGF0ZUVudGl0eVtdID0gW107XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIF9lbnRyaWVzPzogQ29uZmlnRW50cnlbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zaG93RGlzYWJsZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zaG93VW5hdmFpbGFibGUgPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dSZWFkT25seSA9IHRydWU7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZmlsdGVyID0gXCJcIjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWFyY2hQYXJtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoXG4gICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaFxuICApO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkRW50aXRpZXM6IHN0cmluZ1tdID0gW107XG5cbiAgQHF1ZXJ5KFwiaGFzcy10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZVwiKVxuICBwcml2YXRlIF9kYXRhVGFibGUhOiBIYVRhYnNTdWJwYWdlRGF0YVRhYmxlO1xuXG4gIHByaXZhdGUgZ2V0RGlhbG9nPzogKCkgPT4gRGlhbG9nRW50aXR5RWRpdG9yIHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgX2FjdGl2ZUZpbHRlcnMgPSBtZW1vaXplKFxuICAgIChcbiAgICAgIGZpbHRlcnM6IFVSTFNlYXJjaFBhcmFtcyxcbiAgICAgIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gICAgICBlbnRyaWVzPzogQ29uZmlnRW50cnlbXVxuICAgICk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlclRleHRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgZmlsdGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcImNvbmZpZ19lbnRyeVwiOiB7XG4gICAgICAgICAgICBpZiAoIWVudHJpZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9hZENvbmZpZ0VudHJpZXMoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb25maWdFbnRyeSA9IGVudHJpZXMuZmluZChcbiAgICAgICAgICAgICAgKGVudHJ5KSA9PiBlbnRyeS5lbnRyeV9pZCA9PT0gdmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ0VudHJ5KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW50ZWdyYXRpb25OYW1lID0gZG9tYWluVG9OYW1lKGxvY2FsaXplLCBjb25maWdFbnRyeS5kb21haW4pO1xuICAgICAgICAgICAgZmlsdGVyVGV4dHMucHVzaChcbiAgICAgICAgICAgICAgYCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5pbnRlZ3JhdGlvblwiXG4gICAgICAgICAgICAgICl9ICR7aW50ZWdyYXRpb25OYW1lfSR7XG4gICAgICAgICAgICAgICAgaW50ZWdyYXRpb25OYW1lICE9PSBjb25maWdFbnRyeS50aXRsZVxuICAgICAgICAgICAgICAgICAgPyBgOiAke2NvbmZpZ0VudHJ5LnRpdGxlfWBcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmlsdGVyVGV4dHMubGVuZ3RoID8gZmlsdGVyVGV4dHMgOiB1bmRlZmluZWQ7XG4gICAgfVxuICApO1xuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplKFxuICAgIChuYXJyb3csIF9sYW5ndWFnZSk6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9PiB7XG4gICAgICBjb25zdCBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSB7XG4gICAgICAgIGljb246IHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICB0eXBlOiBcImljb25cIixcbiAgICAgICAgICB0ZW1wbGF0ZTogKGljb24pID0+IGh0bWxgXG4gICAgICAgICAgICA8aGEtaWNvbiBzbG90PVwiaXRlbS1pY29uXCIgLmljb249JHtpY29ufT48L2hhLWljb24+XG4gICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuaGVhZGVycy5uYW1lXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICAgIGdyb3dzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3RhdHVzQ29sdW1uOiBEYXRhVGFibGVDb2x1bW5EYXRhID0ge1xuICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5oZWFkZXJzLnN0YXR1c1wiXG4gICAgICAgICksXG4gICAgICAgIHR5cGU6IFwiaWNvblwiLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd2lkdGg6IFwiNjhweFwiLFxuICAgICAgICB0ZW1wbGF0ZTogKF9zdGF0dXMsIGVudGl0eTogYW55KSA9PlxuICAgICAgICAgIGVudGl0eS51bmF2YWlsYWJsZSB8fCBlbnRpdHkuZGlzYWJsZWRfYnkgfHwgZW50aXR5LnJlYWRvbmx5XG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7IHBvc2l0aW9uOiByZWxhdGl2ZTtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxoYS1pY29uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPSR7c3R5bGVNYXAoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlbnRpdHkudW5hdmFpbGFibGUgPyBcInZhcigtLWdvb2dsZS1yZWQtNTAwKVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIC5pY29uPSR7ZW50aXR5LnJlc3RvcmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImhhc3M6cmVzdG9yZS1hbGVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBlbnRpdHkudW5hdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiaGFzczphbGVydC1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIDogZW50aXR5LmRpc2FibGVkX2J5XG4gICAgICAgICAgICAgICAgICAgICAgPyBcImhhc3M6Y2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiaGFzczpwZW5jaWwtb2ZmXCJ9XG4gICAgICAgICAgICAgICAgICA+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgcG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZW50aXR5LnJlc3RvcmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5zdGF0dXMucmVzdG9yZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogZW50aXR5LnVuYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5zdGF0dXMudW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogZW50aXR5LmRpc2FibGVkX2J5XG4gICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5zdGF0dXMuZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuc3RhdHVzLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIixcbiAgICAgIH07XG5cbiAgICAgIGlmIChuYXJyb3cpIHtcbiAgICAgICAgY29sdW1ucy5uYW1lLnRlbXBsYXRlID0gKG5hbWUsIGVudGl0eTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAke25hbWV9PGJyIC8+XG4gICAgICAgICAgICAke2VudGl0eS5lbnRpdHlfaWR9IHxcbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHtlbnRpdHkucGxhdGZvcm19LnRpdGxlYCkgfHxcbiAgICAgICAgICAgIGVudGl0eS5wbGF0Zm9ybX1cbiAgICAgICAgICBgO1xuICAgICAgICB9O1xuICAgICAgICBjb2x1bW5zLnN0YXR1cyA9IHN0YXR1c0NvbHVtbjtcbiAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbnMuZW50aXR5X2lkID0ge1xuICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5oZWFkZXJzLmVudGl0eV9pZFwiXG4gICAgICAgICksXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgIH07XG4gICAgICBjb2x1bW5zLnBsYXRmb3JtID0ge1xuICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5oZWFkZXJzLmludGVncmF0aW9uXCJcbiAgICAgICAgKSxcbiAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgIHdpZHRoOiBcIjIwJVwiLFxuICAgICAgICB0ZW1wbGF0ZTogKHBsYXRmb3JtKSA9PlxuICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7cGxhdGZvcm19LnRpdGxlYCkgfHwgcGxhdGZvcm0sXG4gICAgICB9O1xuICAgICAgY29sdW1ucy5zdGF0dXMgPSBzdGF0dXNDb2x1bW47XG5cbiAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cbiAgKTtcblxuICBwcml2YXRlIF9maWx0ZXJlZEVudGl0aWVzID0gbWVtb2l6ZShcbiAgICAoXG4gICAgICBlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdLFxuICAgICAgc3RhdGVFbnRpdGllczogU3RhdGVFbnRpdHlbXSxcbiAgICAgIGZpbHRlcnM6IFVSTFNlYXJjaFBhcmFtcyxcbiAgICAgIHNob3dEaXNhYmxlZDogYm9vbGVhbixcbiAgICAgIHNob3dVbmF2YWlsYWJsZTogYm9vbGVhbixcbiAgICAgIHNob3dSZWFkT25seTogYm9vbGVhblxuICAgICk6IEVudGl0eVJvd1tdID0+IHtcbiAgICAgIGlmICghc2hvd0Rpc2FibGVkKSB7XG4gICAgICAgIGVudGl0aWVzID0gZW50aXRpZXMuZmlsdGVyKChlbnRpdHkpID0+ICFlbnRpdHkuZGlzYWJsZWRfYnkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQ6IEVudGl0eVJvd1tdID0gW107XG5cbiAgICAgIGVudGl0aWVzID0gc2hvd1JlYWRPbmx5ID8gZW50aXRpZXMuY29uY2F0KHN0YXRlRW50aXRpZXMpIDogZW50aXRpZXM7XG5cbiAgICAgIGZpbHRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJjb25maWdfZW50cnlcIjpcbiAgICAgICAgICAgIGVudGl0aWVzID0gZW50aXRpZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAoZW50aXR5KSA9PiBlbnRpdHkuY29uZmlnX2VudHJ5X2lkID09PSB2YWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRpdGllcykge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmhhc3Muc3RhdGVzW2VudHJ5LmVudGl0eV9pZF07XG4gICAgICAgIGNvbnN0IHVuYXZhaWxhYmxlID0gZW50aXR5Py5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiO1xuICAgICAgICBjb25zdCByZXN0b3JlZCA9IGVudGl0eT8uYXR0cmlidXRlcy5yZXN0b3JlZDtcblxuICAgICAgICBpZiAoIXNob3dVbmF2YWlsYWJsZSAmJiB1bmF2YWlsYWJsZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIC4uLmVudHJ5LFxuICAgICAgICAgIGljb246IGVudGl0eVxuICAgICAgICAgICAgPyBzdGF0ZUljb24oZW50aXR5KVxuICAgICAgICAgICAgOiBkb21haW5JY29uKGNvbXB1dGVEb21haW4oZW50cnkuZW50aXR5X2lkKSksXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUodGhpcy5oYXNzISwgZW50cnkpIHx8XG4gICAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUoXCJzdGF0ZS5kZWZhdWx0LnVuYXZhaWxhYmxlXCIpLFxuICAgICAgICAgIHVuYXZhaWxhYmxlLFxuICAgICAgICAgIHJlc3RvcmVkLFxuICAgICAgICAgIHN0YXR1czogcmVzdG9yZWRcbiAgICAgICAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5zdGF0dXMucmVzdG9yZWRcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHVuYXZhaWxhYmxlXG4gICAgICAgICAgICA/IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuc3RhdHVzLnVuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBlbnRyeS5kaXNhYmxlZF9ieVxuICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLnN0YXR1cy5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5zdGF0dXMub2tcIiksXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvY2F0aW9uLWNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fc2VhcmNoUGFybXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fc2VhcmNoUGFybXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGhhc3NTdWJzY3JpYmUoKTogVW5zdWJzY3JpYmVGdW5jW10ge1xuICAgIHJldHVybiBbXG4gICAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiEsIChlbnRpdGllcykgPT4ge1xuICAgICAgICB0aGlzLl9lbnRpdGllcyA9IGVudGl0aWVzO1xuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICghdGhpcy5nZXREaWFsb2cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5nZXREaWFsb2coKTtcbiAgICBpZiAoIWRpYWxvZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkaWFsb2cuY2xvc2VEaWFsb2coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8IHRoaXMuX2VudGl0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYCA8aGFzcy1sb2FkaW5nLXNjcmVlbj48L2hhc3MtbG9hZGluZy1zY3JlZW4+IGA7XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB0aGlzLl9hY3RpdmVGaWx0ZXJzKFxuICAgICAgdGhpcy5fc2VhcmNoUGFybXMsXG4gICAgICB0aGlzLmhhc3MubG9jYWxpemUsXG4gICAgICB0aGlzLl9lbnRyaWVzXG4gICAgKTtcbiAgICBjb25zdCBoZWFkZXJUb29sYmFyID0gdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5sZW5ndGhcbiAgICAgID8gaHRtbGBcbiAgICAgICAgICA8cCBjbGFzcz1cInNlbGVjdGVkLXR4dFwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5zZWxlY3RlZFwiLFxuICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLmxlbmd0aFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1idG5zXCI+XG4gICAgICAgICAgICAkeyF0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9lbmFibGVTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5lbmFibGVfc2VsZWN0ZWQuYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2Rpc2FibGVTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5kaXNhYmxlX3NlbGVjdGVkLmJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9yZW1vdmVTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5yZW1vdmVfc2VsZWN0ZWQuYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBpZD1cImVuYWJsZS1idG5cIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczp1bmRvXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fZW5hYmxlU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIGZvcj1cImVuYWJsZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmVuYWJsZV9zZWxlY3RlZC5idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGlzYWJsZS1idG5cIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9kaXNhYmxlU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIGZvcj1cImRpc2FibGUtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5kaXNhYmxlX3NlbGVjdGVkLmJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZW1vdmUtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fcmVtb3ZlU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIGZvcj1cInJlbW92ZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLnJlbW92ZV9zZWxlY3RlZC5idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgIDogaHRtbGBcbiAgICAgICAgICA8c2VhcmNoLWlucHV0XG4gICAgICAgICAgICBuby1sYWJlbC1mbG9hdFxuICAgICAgICAgICAgbm8tdW5kZXJsaW5lXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgIC5maWx0ZXI9JHt0aGlzLl9maWx0ZXJ9XG4gICAgICAgICAgPjwvc2VhcmNoLWlucHV0XG4gICAgICAgICAgPiR7YWN0aXZlRmlsdGVyc1xuICAgICAgICAgICAgPyBodG1sYDxkaXYgY2xhc3M9XCJhY3RpdmUtZmlsdGVyc1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5uYXJyb3dcbiAgICAgICAgICAgICAgICAgID8gaHRtbGAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvbiBpY29uPVwiaGFzczpmaWx0ZXItdmFyaWFudFwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5maWx0ZXJpbmcuZmlsdGVyaW5nX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAke2FjdGl2ZUZpbHRlcnMuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICAgICAgOiBgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZmlsdGVyaW5nLmZpbHRlcmluZ19ieVwiXG4gICAgICAgICAgICAgICAgICAgICl9ICR7YWN0aXZlRmlsdGVycy5qb2luKFwiLCBcIil9YH1cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9jbGVhckZpbHRlcn1cbiAgICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZmlsdGVyaW5nLmNsZWFyXCJcbiAgICAgICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uIG5vLWFuaW1hdGlvbnMgaG9yaXpvbnRhbC1hbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmZpbHRlci5maWx0ZXJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB0aXRsZT1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuZmlsdGVyLmZpbHRlclwiXG4gICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZmlsdGVyLXZhcmlhbnRcIlxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0gQHRhcD1cIiR7dGhpcy5fc2hvd0Rpc2FibGVkQ2hhbmdlZH1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5fc2hvd0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgICAgPjwvcGFwZXItY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmZpbHRlci5zaG93X2Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbSBAdGFwPVwiJHt0aGlzLl9zaG93UmVzdG9yZWRDaGFuZ2VkfVwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9zaG93VW5hdmFpbGFibGV9XG4gICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuZmlsdGVyLnNob3dfdW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtIEB0YXA9XCIke3RoaXMuX3Nob3dSZWFkT25seUNoYW5nZWR9XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX3Nob3dSZWFkT25seX1cbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJpdGVtLWljb25cIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5maWx0ZXIuc2hvd19yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgYDtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3MtdGFicy1zdWJwYWdlLWRhdGEtdGFibGVcbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgLmJhY2tQYXRoPSR7dGhpcy5fc2VhcmNoUGFybXMuaGFzKFwiaGlzdG9yeUJhY2tcIilcbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogXCIvY29uZmlnXCJ9XG4gICAgICAgIC5yb3V0ZT0ke3RoaXMucm91dGV9XG4gICAgICAgIC50YWJzPSR7Y29uZmlnU2VjdGlvbnMuaW50ZWdyYXRpb25zfVxuICAgICAgICAuY29sdW1ucz0ke3RoaXMuX2NvbHVtbnModGhpcy5uYXJyb3csIHRoaXMuaGFzcy5sYW5ndWFnZSl9XG4gICAgICAgIC5kYXRhPSR7dGhpcy5fZmlsdGVyZWRFbnRpdGllcyhcbiAgICAgICAgICB0aGlzLl9lbnRpdGllcyxcbiAgICAgICAgICB0aGlzLl9zdGF0ZUVudGl0aWVzLFxuICAgICAgICAgIHRoaXMuX3NlYXJjaFBhcm1zLFxuICAgICAgICAgIHRoaXMuX3Nob3dEaXNhYmxlZCxcbiAgICAgICAgICB0aGlzLl9zaG93VW5hdmFpbGFibGUsXG4gICAgICAgICAgdGhpcy5fc2hvd1JlYWRPbmx5XG4gICAgICAgICl9XG4gICAgICAgIC5maWx0ZXI9JHt0aGlzLl9maWx0ZXJ9XG4gICAgICAgIHNlbGVjdGFibGVcbiAgICAgICAgQHNlbGVjdGlvbi1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlU2VsZWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgQHJvdy1jbGljaz0ke3RoaXMuX29wZW5FZGl0RW50cnl9XG4gICAgICAgIGlkPVwiZW50aXR5X2lkXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPSR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgXCJzZWFyY2gtdG9vbGJhclwiOiB0aGlzLm5hcnJvdyxcbiAgICAgICAgICAgIFwidGFibGUtaGVhZGVyXCI6ICF0aGlzLm5hcnJvdyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzbG90PVwiaGVhZGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7aGVhZGVyVG9vbGJhcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3MtdGFicy1zdWJwYWdlLWRhdGEtdGFibGU+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgbG9hZEVudGl0eUVkaXRvckRpYWxvZygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKTtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9lbnRpdGllcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikgfHwgY2hhbmdlZFByb3BzLmhhcyhcIl9lbnRpdGllc1wiKSkge1xuICAgICAgY29uc3Qgc3RhdGVFbnRpdGllczogU3RhdGVFbnRpdHlbXSA9IFtdO1xuICAgICAgY29uc3QgcmVnRW50aXR5SWRzID0gbmV3IFNldChcbiAgICAgICAgdGhpcy5fZW50aXRpZXMubWFwKChlbnRpdHkpID0+IGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBlbnRpdHlJZCBvZiBPYmplY3Qua2V5cyh0aGlzLmhhc3Muc3RhdGVzKSkge1xuICAgICAgICBpZiAocmVnRW50aXR5SWRzLmhhcyhlbnRpdHlJZCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIW9sZEhhc3MgfHxcbiAgICAgICAgICB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eUlkXSAhPT0gb2xkSGFzcy5zdGF0ZXNbZW50aXR5SWRdXG4gICAgICAgICkge1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlRW50aXRpZXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogY29tcHV0ZVN0YXRlTmFtZSh0aGlzLmhhc3Muc3RhdGVzW2VudGl0eUlkXSksXG4gICAgICAgICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAgICAgICBwbGF0Zm9ybTogY29tcHV0ZURvbWFpbihlbnRpdHlJZCksXG4gICAgICAgICAgZGlzYWJsZWRfYnk6IG51bGwsXG4gICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5fc3RhdGVFbnRpdGllcyA9IHN0YXRlRW50aXRpZXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd0Rpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl9zaG93RGlzYWJsZWQgPSAhdGhpcy5fc2hvd0Rpc2FibGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd1Jlc3RvcmVkQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl9zaG93VW5hdmFpbGFibGUgPSAhdGhpcy5fc2hvd1VuYXZhaWxhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd1JlYWRPbmx5Q2hhbmdlZCgpIHtcbiAgICB0aGlzLl9zaG93UmVhZE9ubHkgPSAhdGhpcy5fc2hvd1JlYWRPbmx5O1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2VhcmNoQ2hhbmdlKGV2OiBDdXN0b21FdmVudCkge1xuICAgIHRoaXMuX2ZpbHRlciA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNlbGVjdGlvbkNoYW5nZWQoXG4gICAgZXY6IEhBU1NEb21FdmVudDxTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9lbmFibGVTZWxlY3RlZCgpIHtcbiAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5lbmFibGVfc2VsZWN0ZWQuY29uZmlybV90aXRsZVwiLFxuICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLmxlbmd0aFxuICAgICAgKSxcbiAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmVuYWJsZV9zZWxlY3RlZC5jb25maXJtX3RleHRcIlxuICAgICAgKSxcbiAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgZGlzbWlzc1RleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbW1vbi5ub1wiKSxcbiAgICAgIGNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+XG4gICAgICAgICAgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MsIGVudGl0eSwge1xuICAgICAgICAgICAgZGlzYWJsZWRfYnk6IG51bGwsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kaXNhYmxlU2VsZWN0ZWQoKSB7XG4gICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuZGlzYWJsZV9zZWxlY3RlZC5jb25maXJtX3RpdGxlXCIsXG4gICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMubGVuZ3RoXG4gICAgICApLFxuICAgICAgdGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuZGlzYWJsZV9zZWxlY3RlZC5jb25maXJtX3RleHRcIlxuICAgICAgKSxcbiAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgZGlzbWlzc1RleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbW1vbi5ub1wiKSxcbiAgICAgIGNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+XG4gICAgICAgICAgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MsIGVudGl0eSwge1xuICAgICAgICAgICAgZGlzYWJsZWRfYnk6IFwidXNlclwiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2NsZWFyU2VsZWN0aW9uKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgcmVtb3ZlYWJsZUVudGl0aWVzID0gdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5maWx0ZXIoKGVudGl0eSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eV07XG4gICAgICByZXR1cm4gc3RhdGVPYmo/LmF0dHJpYnV0ZXMucmVzdG9yZWQ7XG4gICAgfSk7XG4gICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICBgdWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5yZW1vdmVfc2VsZWN0ZWQuY29uZmlybV8ke1xuICAgICAgICAgIHJlbW92ZWFibGVFbnRpdGllcy5sZW5ndGggIT09IHRoaXMuX3NlbGVjdGVkRW50aXRpZXMubGVuZ3RoXG4gICAgICAgICAgICA/IFwicGFydGx5X1wiXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfXRpdGxlYCxcbiAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgcmVtb3ZlYWJsZUVudGl0aWVzLmxlbmd0aFxuICAgICAgKSxcbiAgICAgIHRleHQ6XG4gICAgICAgIHJlbW92ZWFibGVFbnRpdGllcy5sZW5ndGggPT09IHRoaXMuX3NlbGVjdGVkRW50aXRpZXMubGVuZ3RoXG4gICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5yZW1vdmVfc2VsZWN0ZWQuY29uZmlybV90ZXh0XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLnJlbW92ZV9zZWxlY3RlZC5jb25maXJtX3BhcnRseV90ZXh0XCIsXG4gICAgICAgICAgICAgIFwicmVtb3ZhYmxlXCIsXG4gICAgICAgICAgICAgIHJlbW92ZWFibGVFbnRpdGllcy5sZW5ndGgsXG4gICAgICAgICAgICAgIFwic2VsZWN0ZWRcIixcbiAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5sZW5ndGhcbiAgICAgICAgICAgICksXG4gICAgICBjb25maXJtVGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY29tbW9uLnllc1wiKSxcbiAgICAgIGRpc21pc3NUZXh0OiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jb21tb24ubm9cIiksXG4gICAgICBjb25maXJtOiAoKSA9PiB7XG4gICAgICAgIHJlbW92ZWFibGVFbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+XG4gICAgICAgICAgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MsIGVudGl0eSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhclNlbGVjdGlvbigpIHtcbiAgICB0aGlzLl9kYXRhVGFibGUuY2xlYXJTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5FZGl0RW50cnkoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuZGV0YWlsIGFzIFJvd0NsaWNrZWRFdmVudCkuaWQ7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9lbnRpdGllcyEuZmluZChcbiAgICAgIChlbnRpdHkpID0+IGVudGl0eS5lbnRpdHlfaWQgPT09IGVudGl0eUlkXG4gICAgKTtcbiAgICB0aGlzLmdldERpYWxvZyA9IHNob3dFbnRpdHlFZGl0b3JEaWFsb2codGhpcywge1xuICAgICAgZW50cnksXG4gICAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfbG9hZENvbmZpZ0VudHJpZXMoKSB7XG4gICAgdGhpcy5fZW50cmllcyA9IGF3YWl0IGdldENvbmZpZ0VudHJpZXModGhpcy5oYXNzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyRmlsdGVyKCkge1xuICAgIG5hdmlnYXRlKHRoaXMsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgdHJ1ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYXNzLWxvYWRpbmctc2NyZWVuIHtcbiAgICAgICAgLS1hcHAtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIC0tYXBwLWhlYWRlci10ZXh0LWNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9mb250LWZhbWlseSk7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHZhcihcbiAgICAgICAgICAtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV8td2Via2l0LWZvbnQtc21vb3RoaW5nXG4gICAgICAgICk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fZm9udC13ZWlnaHQpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2xldHRlci1zcGFjaW5nKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9saW5lLWhlaWdodCk7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1zdWJoZWFkXy1fZm9udC1mYW1pbHkpO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiB2YXIoXG4gICAgICAgICAgLS1wYXBlci1mb250LXN1YmhlYWRfLV8td2Via2l0LWZvbnQtc21vb3RoaW5nXG4gICAgICAgICk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXdlaWdodCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9saW5lLWhlaWdodCk7XG4gICAgICB9XG4gICAgICBoYS1kYXRhLXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0tZGF0YS10YWJsZS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICB9XG4gICAgICA6aG9zdCg6bm90KFtuYXJyb3ddKSkgaGEtZGF0YS10YWJsZSB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIGhhLXN3aXRjaCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICB9XG4gICAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC4xMik7XG4gICAgICB9XG4gICAgICBzZWFyY2gtaW5wdXQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgfVxuICAgICAgLnNlYXJjaC10b29sYmFyIHNlYXJjaC1pbnB1dCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgfVxuICAgICAgLnNlYXJjaC10b29sYmFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLThweDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RlZC10eHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgfVxuICAgICAgLnRhYmxlLWhlYWRlciAuc2VsZWN0ZWQtdHh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cbiAgICAgIC5zZWFyY2gtdG9vbGJhciAuc2VsZWN0ZWQtdHh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLmhlYWRlci1idG5zID4gbXdjLWJ1dHRvbixcbiAgICAgIC5oZWFkZXItYnRucyA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICB9XG4gICAgICAuYWN0aXZlLWZpbHRlcnMge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAycHggMnB4IDJweCA4cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5hY3RpdmUtZmlsdGVycyBoYS1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgLmFjdGl2ZS1maWx0ZXJzIG13Yy1idXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgICAgLmFjdGl2ZS1maWx0ZXJzOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMC4xMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBFbnRpdHlSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBEaWFsb2dFbnRpdHlFZGl0b3IgfSBmcm9tIFwiLi9kaWFsb2ctZW50aXR5LWVkaXRvclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zIHtcbiAgZW50cnk/OiBFbnRpdHlSZWdpc3RyeUVudHJ5O1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgdGFiPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZEVudGl0eUVkaXRvckRpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImVudGl0eS1lZGl0b3ItZGlhbG9nXCIgKi8gXCIuL2RpYWxvZy1lbnRpdHktZWRpdG9yXCJcbiAgKTtcblxuY29uc3QgZ2V0RGlhbG9nID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcImhvbWUtYXNzaXN0YW50XCIpIVxuICAgIC5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nLWVudGl0eS1lZGl0b3JcIikgYXNcbiAgICB8IERpYWxvZ0VudGl0eUVkaXRvclxuICAgIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dFbnRpdHlFZGl0b3JEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBlbnRpdHlEZXRhaWxQYXJhbXM6IEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zXG4pOiAoKCkgPT4gRGlhbG9nRW50aXR5RWRpdG9yIHwgdW5kZWZpbmVkKSA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWVudGl0eS1lZGl0b3JcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRFbnRpdHlFZGl0b3JEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBlbnRpdHlEZXRhaWxQYXJhbXMsXG4gIH0pO1xuICByZXR1cm4gZ2V0RGlhbG9nO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBNEJBO0FBQ0E7QUE3QkE7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBSUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTJCQTtBQVVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBLDZnQkFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFIQTtBQW9CQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBQUE7QUFJQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBa0JBO0FBREE7QUFzUEE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5UEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQXJFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBUkE7QUFtQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVFBO0FBQ0E7QUFEQTtBQUdBOzs7QUFTQTs7O0FBbkJBO0FBVEE7QUFDQTtBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFFQTtBQUNBO0FBaExBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUE0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQVZBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBbFBBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWdRQTtBQUVBO0FBQ0E7QUFFQTtBQXJRQTtBQUFBO0FBQUE7QUFBQTtBQXdRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBalJBO0FBQUE7QUFBQTtBQUFBO0FBb1JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBOztBQUdBOzs7QUFPQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTs7QUFJQTtBQUNBOztBQWJBOzs7O0FBc0JBOzs7QUFHQTs7Ozs7QUFPQTs7O0FBR0E7Ozs7O0FBT0E7OztBQUdBOztBQUlBOztBQTNEQTs7OztBQWtFQTtBQUNBOztBQUVBO0FBRUE7OztBQUlBO0FBR0E7O0FBUEE7QUFhQTtBQUNBOztBQWhCQTs7O0FBd0JBO0FBR0E7Ozs7O0FBT0E7O0FBRUE7OztBQUdBOztBQUlBOztBQUVBOzs7QUFHQTs7QUFJQTs7QUFFQTs7O0FBR0E7Ozs7QUE5SEE7QUFzSUE7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7OztBQU1BOzs7QUEvQkE7QUFtQ0E7QUFyY0E7QUFBQTtBQUFBO0FBQUE7QUF3Y0E7QUFDQTtBQUFBO0FBQ0E7QUExY0E7QUFBQTtBQUFBO0FBQUE7QUE2Y0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvZUE7QUFBQTtBQUFBO0FBQUE7QUFrZkE7QUFDQTtBQW5mQTtBQUFBO0FBQUE7QUFBQTtBQXNmQTtBQUNBO0FBdmZBO0FBQUE7QUFBQTtBQUFBO0FBMGZBO0FBQ0E7QUEzZkE7QUFBQTtBQUFBO0FBQUE7QUE4ZkE7QUFDQTtBQS9mQTtBQUFBO0FBQUE7QUFBQTtBQW9nQkE7QUFDQTtBQXJnQkE7QUFBQTtBQUFBO0FBQUE7QUF3Z0JBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQWxCQTtBQW9CQTtBQTVoQkE7QUFBQTtBQUFBO0FBQUE7QUEraEJBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQWxCQTtBQW9CQTtBQW5qQkE7QUFBQTtBQUFBO0FBQUE7QUFzakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBU0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTdCQTtBQStCQTtBQXpsQkE7QUFBQTtBQUFBO0FBQUE7QUE0bEJBO0FBQ0E7QUE3bEJBO0FBQUE7QUFBQTtBQUFBO0FBZ21CQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUF4bUJBO0FBQUE7QUFBQTtBQUFBO0FBMm1CQTtBQUNBO0FBNW1CQTtBQUFBO0FBQUE7QUFBQTtBQSttQkE7QUFDQTtBQWhuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1uQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXdHQTtBQTN0QkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBLDY5QkFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
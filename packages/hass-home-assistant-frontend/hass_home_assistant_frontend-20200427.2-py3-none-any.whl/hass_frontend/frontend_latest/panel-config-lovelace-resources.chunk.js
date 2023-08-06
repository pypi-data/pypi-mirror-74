(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-lovelace-resources"],{

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

/***/ "./src/common/dom/load_resource.ts":
/*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
/*! exports provided: loadCSS, loadJS, loadImg, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCSS", function() { return loadCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJS", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImg", function() { return loadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
// Load a resource and get a promise when loading done.
// From: https://davidwalsh.name/javascript-loader
const _load = (tag, url, type) => {
  // This promise will be used by Promise.all to determine success or failure
  return new Promise((resolve, reject) => {
    const element = document.createElement(tag);
    let attr = "src";
    let parent = "body"; // Important success and error for the promise

    element.onload = () => resolve(url);

    element.onerror = () => reject(url); // Need to set different attributes depending on tag type


    switch (tag) {
      case "script":
        element.async = true;

        if (type) {
          element.type = type;
        }

        break;

      case "link":
        element.type = "text/css";
        element.rel = "stylesheet";
        attr = "href";
        parent = "head";
    } // Inject into document to kick off loading


    element[attr] = url;
    document[parent].appendChild(element);
  });
};

const loadCSS = url => _load("link", url);
const loadJS = url => _load("script", url);
const loadImg = url => _load("img", url);
const loadModule = url => _load("script", url, "module");

/***/ }),

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

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

/***/ "./src/data/lovelace.ts":
/*!******************************!*\
  !*** ./src/data/lovelace.ts ***!
  \******************************/
/*! exports provided: fetchResources, createResource, updateResource, deleteResource, fetchDashboards, createDashboard, updateDashboard, deleteDashboard, fetchConfig, saveConfig, deleteConfig, subscribeLovelaceUpdates, getLovelaceCollection, getLegacyLovelaceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchResources", function() { return fetchResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResource", function() { return createResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateResource", function() { return updateResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResource", function() { return deleteResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDashboards", function() { return fetchDashboards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDashboard", function() { return createDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDashboard", function() { return updateDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDashboard", function() { return deleteDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfig", function() { return deleteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeLovelaceUpdates", function() { return subscribeLovelaceUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLovelaceCollection", function() { return getLovelaceCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegacyLovelaceCollection", function() { return getLegacyLovelaceCollection; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");

const fetchResources = conn => conn.sendMessagePromise({
  type: "lovelace/resources"
});
const createResource = (hass, values) => hass.callWS(Object.assign({
  type: "lovelace/resources/create"
}, values));
const updateResource = (hass, id, updates) => hass.callWS(Object.assign({
  type: "lovelace/resources/update",
  resource_id: id
}, updates));
const deleteResource = (hass, id) => hass.callWS({
  type: "lovelace/resources/delete",
  resource_id: id
});
const fetchDashboards = hass => hass.callWS({
  type: "lovelace/dashboards/list"
});
const createDashboard = (hass, values) => hass.callWS(Object.assign({
  type: "lovelace/dashboards/create"
}, values));
const updateDashboard = (hass, id, updates) => hass.callWS(Object.assign({
  type: "lovelace/dashboards/update",
  dashboard_id: id
}, updates));
const deleteDashboard = (hass, id) => hass.callWS({
  type: "lovelace/dashboards/delete",
  dashboard_id: id
});
const fetchConfig = (conn, urlPath, force) => conn.sendMessagePromise({
  type: "lovelace/config",
  url_path: urlPath,
  force
});
const saveConfig = (hass, urlPath, config) => hass.callWS({
  type: "lovelace/config/save",
  url_path: urlPath,
  config
});
const deleteConfig = (hass, urlPath) => hass.callWS({
  type: "lovelace/config/delete",
  url_path: urlPath
});
const subscribeLovelaceUpdates = (conn, urlPath, onChange) => conn.subscribeEvents(ev => {
  if (ev.data.url_path === urlPath) {
    onChange();
  }
}, "lovelace_updated");
const getLovelaceCollection = (conn, urlPath = null) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, `_lovelace_${urlPath !== null && urlPath !== void 0 ? urlPath : ""}`, conn2 => fetchConfig(conn2, urlPath, false), (_conn, store) => subscribeLovelaceUpdates(conn, urlPath, () => fetchConfig(conn, urlPath, false).then(config => store.setState(config, true)))); // Legacy functions to support cast for Home Assistion < 0.107

const fetchLegacyConfig = (conn, force) => conn.sendMessagePromise({
  type: "lovelace/config",
  force
});

const subscribeLegacyLovelaceUpdates = (conn, onChange) => conn.subscribeEvents(onChange, "lovelace_updated");

const getLegacyLovelaceCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_lovelace", conn2 => fetchLegacyConfig(conn2, false), (_conn, store) => subscribeLegacyLovelaceUpdates(conn, () => fetchLegacyConfig(conn, false).then(config => store.setState(config, true))));

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

/***/ "./src/panels/config/lovelace/resources/ha-config-lovelace-resources.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/config/lovelace/resources/ha-config-lovelace-resources.ts ***!
  \******************************************************************************/
/*! exports provided: HaConfigLovelaceRescources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaConfigLovelaceRescources", function() { return HaConfigLovelaceRescources; });
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../data/lovelace */ "./src/data/lovelace.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_tabs_subpage_data_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../layouts/hass-tabs-subpage-data-table */ "./src/layouts/hass-tabs-subpage-data-table.ts");
/* harmony import */ var _lovelace_common_load_resources__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lovelace/common/load-resources */ "./src/panels/lovelace/common/load-resources.ts");
/* harmony import */ var _ha_config_lovelace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ha-config-lovelace */ "./src/panels/config/lovelace/ha-config-lovelace.ts");
/* harmony import */ var _show_dialog_lovelace_resource_detail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./show-dialog-lovelace-resource-detail */ "./src/panels/config/lovelace/resources/show-dialog-lovelace-resource-detail.ts");
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


















let HaConfigLovelaceRescources = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["customElement"])("ha-config-lovelace-resources")], function (_initialize, _LitElement) {
  class HaConfigLovelaceRescources extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigLovelaceRescources,
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
      key: "_resources",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(_language => {
          return {
            url: {
              title: this.hass.localize("ui.panel.config.lovelace.resources.picker.headers.url"),
              sortable: true,
              filterable: true,
              direction: "asc",
              grows: true
            },
            type: {
              title: this.hass.localize("ui.panel.config.lovelace.resources.picker.headers.type"),
              sortable: true,
              filterable: true,
              width: "30%",
              template: type => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
              ${this.hass.localize(`ui.panel.config.lovelace.resources.types.${type}`) || type}
            `
            }
          };
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || this._resources === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]` <hass-loading-screen></hass-loading-screen> `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${_ha_config_lovelace__WEBPACK_IMPORTED_MODULE_15__["lovelaceTabs"]}
        .columns=${this._columns(this.hass.language)}
        .data=${this._resources}
        .noDataText=${this.hass.localize("ui.panel.config.lovelace.resources.picker.no_resources")}
        @row-click=${this._editResource}
        hasFab
      >
      </hass-tabs-subpage-data-table>
      <ha-fab
        ?is-wide=${this.isWide}
        ?narrow=${this.narrow}
        icon="hass:plus"
        title=${this.hass.localize("ui.panel.config.lovelace.resources.picker.add_resource")}
        @click=${this._addResource}
      ></ha-fab>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaConfigLovelaceRescources.prototype), "firstUpdated", this).call(this, changedProps);

        this._getResources();
      }
    }, {
      kind: "method",
      key: "_getResources",
      value: async function _getResources() {
        this._resources = await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_10__["fetchResources"])(this.hass.connection);
      }
    }, {
      kind: "method",
      key: "_editResource",
      value: function _editResource(ev) {
        var _ref, _this$hass$panels$lov;

        if (((_ref = (_this$hass$panels$lov = this.hass.panels.lovelace) === null || _this$hass$panels$lov === void 0 ? void 0 : _this$hass$panels$lov.config) === null || _ref === void 0 ? void 0 : _ref.mode) !== "storage") {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_11__["showAlertDialog"])(this, {
            text: this.hass.localize("ui.panel.config.lovelace.resources.cant_edit_yaml")
          });
          return;
        }

        const id = ev.detail.id;

        const resource = this._resources.find(res => res.id === id);

        this._openDialog(resource);
      }
    }, {
      kind: "method",
      key: "_addResource",
      value: function _addResource() {
        var _ref2, _this$hass$panels$lov2;

        if (((_ref2 = (_this$hass$panels$lov2 = this.hass.panels.lovelace) === null || _this$hass$panels$lov2 === void 0 ? void 0 : _this$hass$panels$lov2.config) === null || _ref2 === void 0 ? void 0 : _ref2.mode) !== "storage") {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_11__["showAlertDialog"])(this, {
            text: this.hass.localize("ui.panel.config.lovelace.resources.cant_edit_yaml")
          });
          return;
        }

        this._openDialog();
      }
    }, {
      kind: "method",
      key: "_openDialog",
      value: async function _openDialog(resource) {
        Object(_show_dialog_lovelace_resource_detail__WEBPACK_IMPORTED_MODULE_16__["showResourceDetailDialog"])(this, {
          resource,
          createResource: async values => {
            const created = await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_10__["createResource"])(this.hass, values);
            this._resources = this._resources.concat(created).sort((res1, res2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_7__["compare"])(res1.url, res2.url));
            Object(_lovelace_common_load_resources__WEBPACK_IMPORTED_MODULE_14__["loadLovelaceResources"])([created], this.hass.auth.data.hassUrl);
          },
          updateResource: async values => {
            const updated = await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_10__["updateResource"])(this.hass, resource.id, values);
            this._resources = this._resources.map(res => res === resource ? updated : res);
            Object(_lovelace_common_load_resources__WEBPACK_IMPORTED_MODULE_14__["loadLovelaceResources"])([updated], this.hass.auth.data.hassUrl);
          },
          removeResource: async () => {
            if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_11__["showConfirmationDialog"])(this, {
              text: this.hass.localize("ui.panel.config.lovelace.resources.confirm_delete")
            }))) {
              return false;
            }

            try {
              await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_10__["deleteResource"])(this.hass, resource.id);
              this._resources = this._resources.filter(res => res !== resource);
              Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_11__["showConfirmationDialog"])(this, {
                title: this.hass.localize("ui.panel.config.lovelace.resources.refresh_header"),
                text: this.hass.localize("ui.panel.config.lovelace.resources.refresh_body"),
                confirm: () => location.reload()
              });
              return true;
            } catch (err) {
              return false;
            }
          }
        });
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

/***/ "./src/panels/config/lovelace/resources/show-dialog-lovelace-resource-detail.ts":
/*!**************************************************************************************!*\
  !*** ./src/panels/config/lovelace/resources/show-dialog-lovelace-resource-detail.ts ***!
  \**************************************************************************************/
/*! exports provided: loadResourceDetailDialog, showResourceDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResourceDetailDialog", function() { return loadResourceDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showResourceDetailDialog", function() { return showResourceDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadResourceDetailDialog = () => Promise.all(/*! import() | lovelace-resource-detail-dialog */[__webpack_require__.e("vendors~add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zig~61d72af3"), __webpack_require__.e("add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zigbee-info~af4b98d6"), __webpack_require__.e("lovelace-resource-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-lovelace-resource-detail */ "./src/panels/config/lovelace/resources/dialog-lovelace-resource-detail.ts"));
const showResourceDetailDialog = (element, dialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-lovelace-resource-detail",
    dialogImport: loadResourceDetailDialog,
    dialogParams
  });
};

/***/ }),

/***/ "./src/panels/lovelace/common/load-resources.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/load-resources.ts ***!
  \******************************************************/
/*! exports provided: loadLovelaceResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLovelaceResources", function() { return loadLovelaceResources; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/load_resource */ "./src/common/dom/load_resource.ts");

// CSS and JS should only be imported once. Modules and HTML are safe.
const CSS_CACHE = {};
const JS_CACHE = {};
const loadLovelaceResources = (resources, hassUrl) => resources.forEach(resource => {
  const normalizedUrl = new URL(resource.url, hassUrl).toString();

  switch (resource.type) {
    case "css":
      if (normalizedUrl in CSS_CACHE) {
        break;
      }

      CSS_CACHE[normalizedUrl] = Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadCSS"])(normalizedUrl);
      break;

    case "js":
      if (normalizedUrl in JS_CACHE) {
        break;
      }

      JS_CACHE[normalizedUrl] = Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])(normalizedUrl);
      break;

    case "module":
      Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadModule"])(normalizedUrl);
      break;

    case "html":
      __webpack_require__.e(/*! import() | import-href-polyfill */ "import-href-polyfill").then(__webpack_require__.bind(null, /*! ../../../resources/html-import/import-href */ "./src/resources/html-import/import-href.js")).then(({
        importHref
      }) => importHref(normalizedUrl));
      break;

    default:
      // eslint-disable-next-line
      console.warn(`Unknown resource type specified: ${resource.type}`);
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWxvdmVsYWNlLXJlc291cmNlcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9sb2FkX3Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9sb3ZlbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9sb3ZlbGFjZS9yZXNvdXJjZXMvaGEtY29uZmlnLWxvdmVsYWNlLXJlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9sb3ZlbGFjZS9yZXNvdXJjZXMvc2hvdy1kaWFsb2ctbG92ZWxhY2UtcmVzb3VyY2UtZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2xvYWQtcmVzb3VyY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLy8gTG9hZCBhIHJlc291cmNlIGFuZCBnZXQgYSBwcm9taXNlIHdoZW4gbG9hZGluZyBkb25lLlxuLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1sb2FkZXJcblxuY29uc3QgX2xvYWQgPSAoXG4gIHRhZzogXCJsaW5rXCIgfCBcInNjcmlwdFwiIHwgXCJpbWdcIixcbiAgdXJsOiBzdHJpbmcsXG4gIHR5cGU/OiBcIm1vZHVsZVwiXG4pID0+IHtcbiAgLy8gVGhpcyBwcm9taXNlIHdpbGwgYmUgdXNlZCBieSBQcm9taXNlLmFsbCB0byBkZXRlcm1pbmUgc3VjY2VzcyBvciBmYWlsdXJlXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBsZXQgYXR0ciA9IFwic3JjXCI7XG4gICAgbGV0IHBhcmVudCA9IFwiYm9keVwiO1xuXG4gICAgLy8gSW1wb3J0YW50IHN1Y2Nlc3MgYW5kIGVycm9yIGZvciB0aGUgcHJvbWlzZVxuICAgIGVsZW1lbnQub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh1cmwpO1xuICAgIGVsZW1lbnQub25lcnJvciA9ICgpID0+IHJlamVjdCh1cmwpO1xuXG4gICAgLy8gTmVlZCB0byBzZXQgZGlmZmVyZW50IGF0dHJpYnV0ZXMgZGVwZW5kaW5nIG9uIHRhZyB0eXBlXG4gICAgc3dpdGNoICh0YWcpIHtcbiAgICAgIGNhc2UgXCJzY3JpcHRcIjpcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAoZWxlbWVudCBhcyBIVE1MU2NyaXB0RWxlbWVudCkudHlwZSA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGlua1wiOlxuICAgICAgICAoZWxlbWVudCBhcyBIVE1MTGlua0VsZW1lbnQpLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxMaW5rRWxlbWVudCkucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgIGF0dHIgPSBcImhyZWZcIjtcbiAgICAgICAgcGFyZW50ID0gXCJoZWFkXCI7XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGludG8gZG9jdW1lbnQgdG8ga2ljayBvZmYgbG9hZGluZ1xuICAgIGVsZW1lbnRbYXR0cl0gPSB1cmw7XG4gICAgZG9jdW1lbnRbcGFyZW50XS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENTUyA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJsaW5rXCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZEpTID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcInNjcmlwdFwiLCB1cmwpO1xuZXhwb3J0IGNvbnN0IGxvYWRJbWcgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwiaW1nXCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZE1vZHVsZSA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJzY3JpcHRcIiwgdXJsLCBcIm1vZHVsZVwiKTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IHR5cGUgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQge1xuICBDb25uZWN0aW9uLFxuICBnZXRDb2xsZWN0aW9uLFxuICBIYXNzRXZlbnRCYXNlLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VQYW5lbENvbmZpZyB7XG4gIG1vZGU6IFwieWFtbFwiIHwgXCJzdG9yYWdlXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VDb25maWcge1xuICB0aXRsZT86IHN0cmluZztcbiAgdmlld3M6IExvdmVsYWNlVmlld0NvbmZpZ1tdO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExlZ2FjeUxvdmVsYWNlQ29uZmlnIGV4dGVuZHMgTG92ZWxhY2VDb25maWcge1xuICByZXNvdXJjZXM/OiBMb3ZlbGFjZVJlc291cmNlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VSZXNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IFwiY3NzXCIgfCBcImpzXCIgfCBcIm1vZHVsZVwiIHwgXCJodG1sXCI7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlUmVzb3VyY2VzTXV0YWJsZVBhcmFtcyB7XG4gIHJlc190eXBlOiBcImNzc1wiIHwgXCJqc1wiIHwgXCJtb2R1bGVcIiB8IFwiaHRtbFwiO1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTG92ZWxhY2VEYXNoYm9hcmQgPVxuICB8IExvdmVsYWNlWWFtbERhc2hib2FyZFxuICB8IExvdmVsYWNlU3RvcmFnZURhc2hib2FyZDtcblxuaW50ZXJmYWNlIExvdmVsYWNlR2VuZXJpY0Rhc2hib2FyZCB7XG4gIGlkOiBzdHJpbmc7XG4gIHVybF9wYXRoOiBzdHJpbmc7XG4gIHJlcXVpcmVfYWRtaW46IGJvb2xlYW47XG4gIHNob3dfaW5fc2lkZWJhcjogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVlhbWxEYXNoYm9hcmQgZXh0ZW5kcyBMb3ZlbGFjZUdlbmVyaWNEYXNoYm9hcmQge1xuICBtb2RlOiBcInlhbWxcIjtcbiAgZmlsZW5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVN0b3JhZ2VEYXNoYm9hcmQgZXh0ZW5kcyBMb3ZlbGFjZUdlbmVyaWNEYXNoYm9hcmQge1xuICBtb2RlOiBcInN0b3JhZ2VcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZURhc2hib2FyZE11dGFibGVQYXJhbXMge1xuICByZXF1aXJlX2FkbWluOiBib29sZWFuO1xuICBzaG93X2luX3NpZGViYXI6IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VEYXNoYm9hcmRDcmVhdGVQYXJhbXNcbiAgZXh0ZW5kcyBMb3ZlbGFjZURhc2hib2FyZE11dGFibGVQYXJhbXMge1xuICB1cmxfcGF0aDogc3RyaW5nO1xuICBtb2RlOiBcInN0b3JhZ2VcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVZpZXdDb25maWcge1xuICBpbmRleD86IG51bWJlcjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGJhZGdlcz86IEFycmF5PHN0cmluZyB8IExvdmVsYWNlQmFkZ2VDb25maWc+O1xuICBjYXJkcz86IExvdmVsYWNlQ2FyZENvbmZpZ1tdO1xuICBwYXRoPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICB0aGVtZT86IHN0cmluZztcbiAgcGFuZWw/OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IFNob3dWaWV3Q29uZmlnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd1ZpZXdDb25maWcge1xuICB1c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlQmFkZ2VDb25maWcge1xuICB0eXBlPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VDYXJkQ29uZmlnIHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHZpZXdfaW5kZXg/OiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvZ2dsZUFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwidG9nZ2xlXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbFNlcnZpY2VBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcImNhbGwtc2VydmljZVwiO1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIHNlcnZpY2VfZGF0YT86IHtcbiAgICBlbnRpdHlfaWQ/OiBzdHJpbmcgfCBbc3RyaW5nXTtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm5hdmlnYXRlXCI7XG4gIG5hdmlnYXRpb25fcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVybEFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwidXJsXCI7XG4gIHVybF9wYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9yZUluZm9BY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm1vcmUtaW5mb1wiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJub25lXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJmaXJlLWRvbS1ldmVudFwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VBY3Rpb25Db25maWcge1xuICBjb25maXJtYXRpb24/OiBDb25maXJtYXRpb25SZXN0cmljdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25SZXN0cmljdGlvbkNvbmZpZyB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGV4ZW1wdGlvbnM/OiBSZXN0cmljdGlvbkNvbmZpZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3RyaWN0aW9uQ29uZmlnIHtcbiAgdXNlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25Db25maWcgPVxuICB8IFRvZ2dsZUFjdGlvbkNvbmZpZ1xuICB8IENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnXG4gIHwgTmF2aWdhdGVBY3Rpb25Db25maWdcbiAgfCBVcmxBY3Rpb25Db25maWdcbiAgfCBNb3JlSW5mb0FjdGlvbkNvbmZpZ1xuICB8IE5vQWN0aW9uQ29uZmlnXG4gIHwgQ3VzdG9tQWN0aW9uQ29uZmlnO1xuXG50eXBlIExvdmVsYWNlVXBkYXRlZEV2ZW50ID0gSGFzc0V2ZW50QmFzZSAmIHtcbiAgZXZlbnRfdHlwZTogXCJsb3ZlbGFjZV91cGRhdGVkXCI7XG4gIGRhdGE6IHtcbiAgICB1cmxfcGF0aDogc3RyaW5nIHwgbnVsbDtcbiAgICBtb2RlOiBcInlhbWxcIiB8IFwic3RvcmFnZVwiO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUmVzb3VyY2VzID0gKGNvbm46IENvbm5lY3Rpb24pOiBQcm9taXNlPExvdmVsYWNlUmVzb3VyY2VbXT4gPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvcmVzb3VyY2VzXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVzb3VyY2UgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogTG92ZWxhY2VSZXNvdXJjZXNNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPExvdmVsYWNlUmVzb3VyY2U+KHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL3Jlc291cmNlcy9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUmVzb3VyY2UgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8TG92ZWxhY2VSZXNvdXJjZXNNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxMb3ZlbGFjZVJlc291cmNlPih7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9yZXNvdXJjZXMvdXBkYXRlXCIsXG4gICAgcmVzb3VyY2VfaWQ6IGlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUmVzb3VyY2UgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvcmVzb3VyY2VzL2RlbGV0ZVwiLFxuICAgIHJlc291cmNlX2lkOiBpZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhc2hib2FyZHMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnRcbik6IFByb21pc2U8TG92ZWxhY2VEYXNoYm9hcmRbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvZGFzaGJvYXJkcy9saXN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGFzaGJvYXJkID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IExvdmVsYWNlRGFzaGJvYXJkQ3JlYXRlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPExvdmVsYWNlRGFzaGJvYXJkPih7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9kYXNoYm9hcmRzL2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEYXNoYm9hcmQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8TG92ZWxhY2VEYXNoYm9hcmRNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxMb3ZlbGFjZURhc2hib2FyZD4oe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvZGFzaGJvYXJkcy91cGRhdGVcIixcbiAgICBkYXNoYm9hcmRfaWQ6IGlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlRGFzaGJvYXJkID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2Rhc2hib2FyZHMvZGVsZXRlXCIsXG4gICAgZGFzaGJvYXJkX2lkOiBpZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbmZpZyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgdXJsUGF0aDogc3RyaW5nIHwgbnVsbCxcbiAgZm9yY2U6IGJvb2xlYW5cbik6IFByb21pc2U8TG92ZWxhY2VDb25maWc+ID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2NvbmZpZ1wiLFxuICAgIHVybF9wYXRoOiB1cmxQYXRoLFxuICAgIGZvcmNlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNhdmVDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHVybFBhdGg6IHN0cmluZyB8IG51bGwsXG4gIGNvbmZpZzogTG92ZWxhY2VDb25maWdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvY29uZmlnL3NhdmVcIixcbiAgICB1cmxfcGF0aDogdXJsUGF0aCxcbiAgICBjb25maWcsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB1cmxQYXRoOiBzdHJpbmcgfCBudWxsXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2NvbmZpZy9kZWxldGVcIixcbiAgICB1cmxfcGF0aDogdXJsUGF0aCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVMb3ZlbGFjZVVwZGF0ZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIHVybFBhdGg6IHN0cmluZyB8IG51bGwsXG4gIG9uQ2hhbmdlOiAoKSA9PiB2b2lkXG4pID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzPExvdmVsYWNlVXBkYXRlZEV2ZW50PigoZXYpID0+IHtcbiAgICBpZiAoZXYuZGF0YS51cmxfcGF0aCA9PT0gdXJsUGF0aCkge1xuICAgICAgb25DaGFuZ2UoKTtcbiAgICB9XG4gIH0sIFwibG92ZWxhY2VfdXBkYXRlZFwiKTtcblxuZXhwb3J0IGNvbnN0IGdldExvdmVsYWNlQ29sbGVjdGlvbiA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgdXJsUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbikgPT5cbiAgZ2V0Q29sbGVjdGlvbihcbiAgICBjb25uLFxuICAgIGBfbG92ZWxhY2VfJHt1cmxQYXRoID8/IFwiXCJ9YCxcbiAgICAoY29ubjIpID0+IGZldGNoQ29uZmlnKGNvbm4yLCB1cmxQYXRoLCBmYWxzZSksXG4gICAgKF9jb25uLCBzdG9yZSkgPT5cbiAgICAgIHN1YnNjcmliZUxvdmVsYWNlVXBkYXRlcyhjb25uLCB1cmxQYXRoLCAoKSA9PlxuICAgICAgICBmZXRjaENvbmZpZyhjb25uLCB1cmxQYXRoLCBmYWxzZSkudGhlbigoY29uZmlnKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGNvbmZpZywgdHJ1ZSlcbiAgICAgICAgKVxuICAgICAgKVxuICApO1xuXG4vLyBMZWdhY3kgZnVuY3Rpb25zIHRvIHN1cHBvcnQgY2FzdCBmb3IgSG9tZSBBc3Npc3Rpb24gPCAwLjEwN1xuY29uc3QgZmV0Y2hMZWdhY3lDb25maWcgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGZvcmNlOiBib29sZWFuXG4pOiBQcm9taXNlPExvdmVsYWNlQ29uZmlnPiA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9jb25maWdcIixcbiAgICBmb3JjZSxcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUxlZ2FjeUxvdmVsYWNlVXBkYXRlcyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICgpID0+IHZvaWRcbikgPT4gY29ubi5zdWJzY3JpYmVFdmVudHMob25DaGFuZ2UsIFwibG92ZWxhY2VfdXBkYXRlZFwiKTtcblxuZXhwb3J0IGNvbnN0IGdldExlZ2FjeUxvdmVsYWNlQ29sbGVjdGlvbiA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uKFxuICAgIGNvbm4sXG4gICAgXCJfbG92ZWxhY2VcIixcbiAgICAoY29ubjIpID0+IGZldGNoTGVnYWN5Q29uZmlnKGNvbm4yLCBmYWxzZSksXG4gICAgKF9jb25uLCBzdG9yZSkgPT5cbiAgICAgIHN1YnNjcmliZUxlZ2FjeUxvdmVsYWNlVXBkYXRlcyhjb25uLCAoKSA9PlxuICAgICAgICBmZXRjaExlZ2FjeUNvbmZpZyhjb25uLCBmYWxzZSkudGhlbigoY29uZmlnKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGNvbmZpZywgdHJ1ZSlcbiAgICAgICAgKVxuICAgICAgKVxuICApO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1dpdGhMb3ZlbGFjZVByb20gZXh0ZW5kcyBXaW5kb3cge1xuICBsbENvbmZQcm9tPzogUHJvbWlzZTxMb3ZlbGFjZUNvbmZpZz47XG4gIGxsUmVzUHJvbT86IFByb21pc2U8TG92ZWxhY2VSZXNvdXJjZVtdPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25IYW5kbGVyT3B0aW9ucyB7XG4gIGhhc0hvbGQ/OiBib29sZWFuO1xuICBoYXNEb3VibGVDbGljaz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uSGFuZGxlckRldGFpbCB7XG4gIGFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25IYW5kbGVyRXZlbnQgPSBIQVNTRG9tRXZlbnQ8QWN0aW9uSGFuZGxlckRldGFpbD47XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbnRlcmZhY2UgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZXN1bHQ7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBkaXNtaXNzVGV4dD86IHN0cmluZztcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG4gIGNhbmNlbD86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGlucHV0TGFiZWw/OiBzdHJpbmc7XG4gIGlucHV0VHlwZT86IHN0cmluZztcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dQYXJhbXNcbiAgZXh0ZW5kcyBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMsXG4gICAgUHJvbXB0RGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNvbmZpcm1hdGlvbj86IGJvb2xlYW47XG4gIHByb21wdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkR2VuZXJpY0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpcm1hdGlvblwiICovIFwiLi9kaWFsb2ctYm94XCIpO1xuXG5jb25zdCBzaG93RGlhbG9nSGVscGVyID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBEaWFsb2dQYXJhbXMsXG4gIGV4dHJhPzoge1xuICAgIGNvbmZpcm1hdGlvbj86IERpYWxvZ1BhcmFtc1tcImNvbmZpcm1hdGlvblwiXTtcbiAgICBwcm9tcHQ/OiBEaWFsb2dQYXJhbXNbXCJwcm9tcHRcIl07XG4gIH1cbikgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBvcmlnQ2FuY2VsID0gZGlhbG9nUGFyYW1zLmNhbmNlbDtcbiAgICBjb25zdCBvcmlnQ29uZmlybSA9IGRpYWxvZ1BhcmFtcy5jb25maXJtO1xuXG4gICAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgICAgZGlhbG9nVGFnOiBcImRpYWxvZy1ib3hcIixcbiAgICAgIGRpYWxvZ0ltcG9ydDogbG9hZEdlbmVyaWNEaWFsb2csXG4gICAgICBkaWFsb2dQYXJhbXM6IHtcbiAgICAgICAgLi4uZGlhbG9nUGFyYW1zLFxuICAgICAgICAuLi5leHRyYSxcbiAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gbnVsbCA6IGZhbHNlKTtcbiAgICAgICAgICBpZiAob3JpZ0NhbmNlbCkge1xuICAgICAgICAgICAgb3JpZ0NhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybTogKG91dCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG91dCA6IHRydWUpO1xuICAgICAgICAgIGlmIChvcmlnQ29uZmlybSkge1xuICAgICAgICAgICAgb3JpZ0NvbmZpcm0ob3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNob3dBbGVydERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQWxlcnREaWFsb2dQYXJhbXNcbikgPT4gc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IGNvbmZpcm1hdGlvbjogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIGJvb2xlYW5cbiAgPjtcblxuZXhwb3J0IGNvbnN0IHNob3dQcm9tcHREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IFByb21wdERpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBwcm9tcHQ6IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBudWxsIHwgc3RyaW5nXG4gID47XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBtZW1vaXplIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7XG4gIERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lcixcbiAgUm93Q2xpY2tlZEV2ZW50LFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVJlc291cmNlLFxuICBkZWxldGVSZXNvdXJjZSxcbiAgZmV0Y2hSZXNvdXJjZXMsXG4gIExvdmVsYWNlUmVzb3VyY2UsXG4gIHVwZGF0ZVJlc291cmNlLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHtcbiAgc2hvd0FsZXJ0RGlhbG9nLFxuICBzaG93Q29uZmlybWF0aW9uRGlhbG9nLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBsb2FkTG92ZWxhY2VSZXNvdXJjZXMgfSBmcm9tIFwiLi4vLi4vLi4vbG92ZWxhY2UvY29tbW9uL2xvYWQtcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBsb3ZlbGFjZVRhYnMgfSBmcm9tIFwiLi4vaGEtY29uZmlnLWxvdmVsYWNlXCI7XG5pbXBvcnQgeyBzaG93UmVzb3VyY2VEZXRhaWxEaWFsb2cgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1sb3ZlbGFjZS1yZXNvdXJjZS1kZXRhaWxcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctbG92ZWxhY2UtcmVzb3VyY2VzXCIpXG5leHBvcnQgY2xhc3MgSGFDb25maWdMb3ZlbGFjZVJlc2NvdXJjZXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Jlc291cmNlczogTG92ZWxhY2VSZXNvdXJjZVtdID0gW107XG5cbiAgcHJpdmF0ZSBfY29sdW1ucyA9IG1lbW9pemUoXG4gICAgKF9sYW5ndWFnZSk6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLnBpY2tlci5oZWFkZXJzLnVybFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGRpcmVjdGlvbjogXCJhc2NcIixcbiAgICAgICAgICBncm93czogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5yZXNvdXJjZXMucGlja2VyLmhlYWRlcnMudHlwZVwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHdpZHRoOiBcIjMwJVwiLFxuICAgICAgICAgIHRlbXBsYXRlOiAodHlwZSkgPT5cbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLnR5cGVzLiR7dHlwZX1gXG4gICAgICAgICAgICAgICkgfHwgdHlwZX1cbiAgICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCB0aGlzLl9yZXNvdXJjZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGh0bWxgIDxoYXNzLWxvYWRpbmctc2NyZWVuPjwvaGFzcy1sb2FkaW5nLXNjcmVlbj4gYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlXG4gICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgIGJhY2stcGF0aD1cIi9jb25maWdcIlxuICAgICAgICAucm91dGU9JHt0aGlzLnJvdXRlfVxuICAgICAgICAudGFicz0ke2xvdmVsYWNlVGFic31cbiAgICAgICAgLmNvbHVtbnM9JHt0aGlzLl9jb2x1bW5zKHRoaXMuaGFzcy5sYW5ndWFnZSl9XG4gICAgICAgIC5kYXRhPSR7dGhpcy5fcmVzb3VyY2VzfVxuICAgICAgICAubm9EYXRhVGV4dD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5yZXNvdXJjZXMucGlja2VyLm5vX3Jlc291cmNlc1wiXG4gICAgICAgICl9XG4gICAgICAgIEByb3ctY2xpY2s9JHt0aGlzLl9lZGl0UmVzb3VyY2V9XG4gICAgICAgIGhhc0ZhYlxuICAgICAgPlxuICAgICAgPC9oYXNzLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlPlxuICAgICAgPGhhLWZhYlxuICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICA/bmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICB0aXRsZT0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5yZXNvdXJjZXMucGlja2VyLmFkZF9yZXNvdXJjZVwiXG4gICAgICAgICl9XG4gICAgICAgIEBjbGljaz0ke3RoaXMuX2FkZFJlc291cmNlfVxuICAgICAgPjwvaGEtZmFiPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9nZXRSZXNvdXJjZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldFJlc291cmNlcygpIHtcbiAgICB0aGlzLl9yZXNvdXJjZXMgPSBhd2FpdCBmZXRjaFJlc291cmNlcyh0aGlzLmhhc3MuY29ubmVjdGlvbik7XG4gIH1cblxuICBwcml2YXRlIF9lZGl0UmVzb3VyY2UoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgaWYgKCh0aGlzLmhhc3MucGFuZWxzLmxvdmVsYWNlPy5jb25maWcgYXMgYW55KT8ubW9kZSAhPT0gXCJzdG9yYWdlXCIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLmNhbnRfZWRpdF95YW1sXCJcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IChldi5kZXRhaWwgYXMgUm93Q2xpY2tlZEV2ZW50KS5pZDtcbiAgICBjb25zdCByZXNvdXJjZSA9IHRoaXMuX3Jlc291cmNlcy5maW5kKChyZXMpID0+IHJlcy5pZCA9PT0gaWQpO1xuICAgIHRoaXMuX29wZW5EaWFsb2cocmVzb3VyY2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkUmVzb3VyY2UoKSB7XG4gICAgaWYgKCh0aGlzLmhhc3MucGFuZWxzLmxvdmVsYWNlPy5jb25maWcgYXMgYW55KT8ubW9kZSAhPT0gXCJzdG9yYWdlXCIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLmNhbnRfZWRpdF95YW1sXCJcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vcGVuRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9vcGVuRGlhbG9nKHJlc291cmNlPzogTG92ZWxhY2VSZXNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHNob3dSZXNvdXJjZURldGFpbERpYWxvZyh0aGlzLCB7XG4gICAgICByZXNvdXJjZSxcbiAgICAgIGNyZWF0ZVJlc291cmNlOiBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBjcmVhdGVSZXNvdXJjZSh0aGlzLmhhc3MhLCB2YWx1ZXMpO1xuICAgICAgICB0aGlzLl9yZXNvdXJjZXMgPSB0aGlzLl9yZXNvdXJjZXMhLmNvbmNhdChjcmVhdGVkKS5zb3J0KChyZXMxLCByZXMyKSA9PlxuICAgICAgICAgIGNvbXBhcmUocmVzMS51cmwsIHJlczIudXJsKVxuICAgICAgICApO1xuICAgICAgICBsb2FkTG92ZWxhY2VSZXNvdXJjZXMoW2NyZWF0ZWRdLCB0aGlzLmhhc3MhLmF1dGguZGF0YS5oYXNzVXJsKTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGVSZXNvdXJjZTogYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdXBkYXRlUmVzb3VyY2UodGhpcy5oYXNzISwgcmVzb3VyY2UhLmlkLCB2YWx1ZXMpO1xuICAgICAgICB0aGlzLl9yZXNvdXJjZXMgPSB0aGlzLl9yZXNvdXJjZXMhLm1hcCgocmVzKSA9PlxuICAgICAgICAgIHJlcyA9PT0gcmVzb3VyY2UgPyB1cGRhdGVkIDogcmVzXG4gICAgICAgICk7XG4gICAgICAgIGxvYWRMb3ZlbGFjZVJlc291cmNlcyhbdXBkYXRlZF0sIHRoaXMuaGFzcyEuYXV0aC5kYXRhLmhhc3NVcmwpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZVJlc291cmNlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKGF3YWl0IHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICAgICAgdGV4dDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLmNvbmZpcm1fZGVsZXRlXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSkpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgZGVsZXRlUmVzb3VyY2UodGhpcy5oYXNzISwgcmVzb3VyY2UhLmlkKTtcbiAgICAgICAgICB0aGlzLl9yZXNvdXJjZXMgPSB0aGlzLl9yZXNvdXJjZXMhLmZpbHRlcigocmVzKSA9PiByZXMgIT09IHJlc291cmNlKTtcbiAgICAgICAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5yZXNvdXJjZXMucmVmcmVzaF9oZWFkZXJcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLnJlc291cmNlcy5yZWZyZXNoX2JvZHlcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNvbmZpcm06ICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1mYWIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgICBoYS1mYWJbaXMtd2lkZV0ge1xuICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgICAgaGEtZmFiW25hcnJvd10ge1xuICAgICAgICBib3R0b206IDg0cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgTG92ZWxhY2VSZXNvdXJjZSxcbiAgTG92ZWxhY2VSZXNvdXJjZXNNdXRhYmxlUGFyYW1zLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlUmVzb3VyY2VEZXRhaWxzRGlhbG9nUGFyYW1zIHtcbiAgcmVzb3VyY2U/OiBMb3ZlbGFjZVJlc291cmNlO1xuICBjcmVhdGVSZXNvdXJjZTogKHZhbHVlczogTG92ZWxhY2VSZXNvdXJjZXNNdXRhYmxlUGFyYW1zKSA9PiBQcm9taXNlPHVua25vd24+O1xuICB1cGRhdGVSZXNvdXJjZTogKFxuICAgIHVwZGF0ZXM6IFBhcnRpYWw8TG92ZWxhY2VSZXNvdXJjZXNNdXRhYmxlUGFyYW1zPlxuICApID0+IFByb21pc2U8dW5rbm93bj47XG4gIHJlbW92ZVJlc291cmNlOiAoKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZFJlc291cmNlRGV0YWlsRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG92ZWxhY2UtcmVzb3VyY2UtZGV0YWlsLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctbG92ZWxhY2UtcmVzb3VyY2UtZGV0YWlsXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNob3dSZXNvdXJjZURldGFpbERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogTG92ZWxhY2VSZXNvdXJjZURldGFpbHNEaWFsb2dQYXJhbXNcbikgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1sb3ZlbGFjZS1yZXNvdXJjZS1kZXRhaWxcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRSZXNvdXJjZURldGFpbERpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGxvYWRDU1MsIGxvYWRKUywgbG9hZE1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2xvYWRfcmVzb3VyY2VcIjtcbmltcG9ydCB7IExvdmVsYWNlUmVzb3VyY2UgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuXG4vLyBDU1MgYW5kIEpTIHNob3VsZCBvbmx5IGJlIGltcG9ydGVkIG9uY2UuIE1vZHVsZXMgYW5kIEhUTUwgYXJlIHNhZmUuXG5jb25zdCBDU1NfQ0FDSEUgPSB7fTtcbmNvbnN0IEpTX0NBQ0hFID0ge307XG5cbmV4cG9ydCBjb25zdCBsb2FkTG92ZWxhY2VSZXNvdXJjZXMgPSAoXG4gIHJlc291cmNlczogTm9uTnVsbGFibGU8TG92ZWxhY2VSZXNvdXJjZVtdPixcbiAgaGFzc1VybDogc3RyaW5nXG4pID0+XG4gIHJlc291cmNlcy5mb3JFYWNoKChyZXNvdXJjZSkgPT4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSBuZXcgVVJMKHJlc291cmNlLnVybCwgaGFzc1VybCkudG9TdHJpbmcoKTtcbiAgICBzd2l0Y2ggKHJlc291cmNlLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJjc3NcIjpcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRVcmwgaW4gQ1NTX0NBQ0hFKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgQ1NTX0NBQ0hFW25vcm1hbGl6ZWRVcmxdID0gbG9hZENTUyhub3JtYWxpemVkVXJsKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJqc1wiOlxuICAgICAgICBpZiAobm9ybWFsaXplZFVybCBpbiBKU19DQUNIRSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIEpTX0NBQ0hFW25vcm1hbGl6ZWRVcmxdID0gbG9hZEpTKG5vcm1hbGl6ZWRVcmwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm1vZHVsZVwiOlxuICAgICAgICBsb2FkTW9kdWxlKG5vcm1hbGl6ZWRVcmwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImh0bWxcIjpcbiAgICAgICAgaW1wb3J0KFxuICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaW1wb3J0LWhyZWYtcG9seWZpbGxcIiAqLyBcIi4uLy4uLy4uL3Jlc291cmNlcy9odG1sLWltcG9ydC9pbXBvcnQtaHJlZlwiXG4gICAgICAgICkudGhlbigoeyBpbXBvcnRIcmVmIH0pID0+IGltcG9ydEhyZWYobm9ybWFsaXplZFVybCkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biByZXNvdXJjZSB0eXBlIHNwZWNpZmllZDogJHtyZXNvdXJjZS50eXBlfWApO1xuICAgIH1cbiAgfSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQTRCQTtBQUNBO0FBN0JBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFJQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrS0E7QUFFQTtBQURBO0FBSUE7QUFLQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBSUE7QUFEQTtBQUlBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFnQkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7O0FDMVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBLDZnQkFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFIQTtBQW9CQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBQUE7QUFJQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBT0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFUQTtBQVZBO0FBeUJBO0FBdENBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFHQTs7QUF2QkE7QUEwQkE7QUF4RUE7QUFBQTtBQUFBO0FBQUE7QUEyRUE7QUFDQTtBQUFBO0FBQ0E7QUE3RUE7QUFBQTtBQUFBO0FBQUE7QUFnRkE7QUFDQTtBQWpGQTtBQUFBO0FBQUE7QUFBQTtBQW1GQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUEvRkE7QUFBQTtBQUFBO0FBQUE7QUFpR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTNHQTtBQUFBO0FBQUE7QUFBQTtBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBO0FBNkNBO0FBM0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4SkE7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFlQTtBQTdLQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUEsMGtCQUVBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK05BQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQTZCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
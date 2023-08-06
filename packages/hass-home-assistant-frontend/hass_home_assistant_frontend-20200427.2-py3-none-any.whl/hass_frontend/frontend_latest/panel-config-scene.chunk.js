(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-scene"],{

/***/ "./node_modules/@polymer/paper-listbox/paper-listbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-listbox/paper-listbox.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
[Menus](https://www.google.com/design/spec/components/menus.html)

`<paper-listbox>` implements an accessible listbox control with Material Design
styling. The focused item is highlighted, and the selected item has bolded text.

    <paper-listbox>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

An initial selection can be specified with the `selected` attribute.

    <paper-listbox selected="0">
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

Make a multi-select listbox with the `multi` attribute. Items in a multi-select
listbox can be deselected, and multiple item can be selected.

    <paper-listbox multi>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-listbox-background-color`   | Menu background color |
`--primary-background-color`
`--paper-listbox-color`              | Menu foreground color |
`--primary-text-color`
`--paper-listbox`                    | Mixin applied to the listbox | `{}`

### Accessibility

`<paper-listbox>` has `role="listbox"` by default. A multi-select listbox will
also have `aria-multiselectable` set. It implements key bindings to navigate
through the listbox with the up and down arrow keys, esc to exit the listbox,
and enter to activate a listbox item. Typing the first letter of a listbox item
will also focus it.

@group Paper Elements
@element paper-listbox
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-listbox',
  behaviors: [_polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronMenuBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'listbox'
  }
});

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

/***/ "./src/data/scene.ts":
/*!***************************!*\
  !*** ./src/data/scene.ts ***!
  \***************************/
/*! exports provided: SCENE_IGNORED_DOMAINS, showSceneEditor, getSceneEditorInitData, activateScene, applyScene, getSceneConfig, saveScene, deleteScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE_IGNORED_DOMAINS", function() { return SCENE_IGNORED_DOMAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSceneEditor", function() { return showSceneEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneEditorInitData", function() { return getSceneEditorInitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateScene", function() { return activateScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScene", function() { return applyScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneConfig", function() { return getSceneConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveScene", function() { return saveScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScene", function() { return deleteScene; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const SCENE_IGNORED_DOMAINS = ["sensor", "binary_sensor", "device_tracker", "person", "persistent_notification", "configuration", "image_processing", "sun", "weather", "zone"];
let inititialSceneEditorData;
const showSceneEditor = (el, data) => {
  inititialSceneEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/scene/edit/new");
};
const getSceneEditorInitData = () => {
  const data = inititialSceneEditorData;
  inititialSceneEditorData = undefined;
  return data;
};
const activateScene = (hass, entityId) => hass.callService("scene", "turn_on", {
  entity_id: entityId
});
const applyScene = (hass, entities) => hass.callService("scene", "apply", {
  entities
});
const getSceneConfig = (hass, sceneId) => hass.callApi("GET", `config/scene/config/${sceneId}`);
const saveScene = (hass, sceneId, config) => hass.callApi("POST", `config/scene/config/${sceneId}`, config);
const deleteScene = (hass, id) => hass.callApi("DELETE", `config/scene/config/${id}`);

/***/ }),

/***/ "./src/panels/config/scene/ha-config-scene.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/scene/ha-config-scene.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var _ha_scene_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-scene-dashboard */ "./src/panels/config/scene/ha-scene-dashboard.ts");
/* harmony import */ var _ha_scene_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-scene-editor */ "./src/panels/config/scene/ha-scene-editor.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/util/debounce */ "./src/common/util/debounce.ts");
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









const equal = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  return a.every((scene, index) => scene === b[index]);
};

let HaConfigScene = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-config-scene")], function (_initialize, _HassRouterPage) {
  class HaConfigScene extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigScene,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "scenes",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboard",
          routes: {
            dashboard: {
              tag: "ha-scene-dashboard",
              cache: true
            },
            edit: {
              tag: "ha-scene-editor"
            }
          }
        };
      }

    }, {
      kind: "field",
      key: "_debouncedUpdateScenes",

      value() {
        return Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_6__["debounce"])(pageEl => {
          const newScenes = this._getScenes(this.hass.states);

          if (!equal(newScenes, pageEl.scenes)) {
            pageEl.scenes = newScenes;
          }
        }, 10);
      }

    }, {
      kind: "field",
      key: "_getScenes",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(states => {
          return Object.values(states).filter(entity => Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__["computeStateDomain"])(entity) === "scene" && !entity.attributes.hidden);
        });
      }

    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(pageEl, changedProps) {
        pageEl.hass = this.hass;
        pageEl.narrow = this.narrow;
        pageEl.isWide = this.isWide;
        pageEl.route = this.routeTail;
        pageEl.showAdvanced = this.showAdvanced;

        if (this.hass) {
          if (!pageEl.scenes || !changedProps) {
            pageEl.scenes = this._getScenes(this.hass.states);
          } else if (changedProps && changedProps.has("hass")) {
            this._debouncedUpdateScenes(pageEl);
          }
        }

        if ((!changedProps || changedProps.has("route")) && this._currentPage === "edit") {
          pageEl.creatingNew = undefined;
          const sceneId = this.routeTail.path.substr(1);
          pageEl.sceneId = sceneId === "new" ? null : sceneId;
        }
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__["HassRouterPage"]);

/***/ }),

/***/ "./src/panels/config/scene/ha-scene-dashboard.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/scene/ha-scene-dashboard.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _data_scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/scene */ "./src/data/scene.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_hass_tabs_subpage_data_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/hass-tabs-subpage-data-table */ "./src/layouts/hass-tabs-subpage-data-table.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../util/toast */ "./src/util/toast.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
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


















let HaSceneDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("ha-scene-dashboard")], function (_initialize, _LitElement) {
  class HaSceneDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaSceneDashboard,
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
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "scenes",
      value: void 0
    }, {
      kind: "field",
      key: "_scenes",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(scenes => {
          return scenes.map(scene => {
            return Object.assign({}, scene, {
              name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(scene)
            });
          });
        });
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(_language => {
          return {
            activate: {
              title: "",
              type: "icon-button",
              template: (_toggle, scene) => lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <paper-icon-button
                .scene=${scene}
                icon="hass:play"
                title="${this.hass.localize("ui.panel.config.scene.picker.activate_scene")}"
                @click=${ev => this._activateScene(ev)}
              ></paper-icon-button>
            `
            },
            name: {
              title: this.hass.localize("ui.panel.config.scene.picker.headers.name"),
              sortable: true,
              filterable: true,
              direction: "asc",
              grows: true
            },
            info: {
              title: "",
              type: "icon-button",
              template: (_info, scene) => lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
            <paper-icon-button
              .scene=${scene}
              @click=${this._showInfo}
              icon="hass:information-outline"
              title="${this.hass.localize("ui.panel.config.scene.picker.show_info_scene")}"
            ></paper-icon-button>
          `
            },
            edit: {
              title: "",
              type: "icon-button",
              template: (_info, scene) => lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
            <a
              href=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_3__["ifDefined"])(scene.attributes.id ? `/config/scene/edit/${scene.attributes.id}` : undefined)}
            >
              <paper-icon-button
                .icon=${scene.attributes.id ? "hass:pencil" : "hass:pencil-off"}
                .disabled=${!scene.attributes.id}
                title="${this.hass.localize("ui.panel.config.scene.picker.edit_scene")}"
              ></paper-icon-button>
            </a>
            ${!scene.attributes.id ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                  <paper-tooltip position="left">
                    ${this.hass.localize("ui.panel.config.scene.picker.only_editable")}
                  </paper-tooltip>
                ` : ""}
          `
            }
          };
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${_ha_panel_config__WEBPACK_IMPORTED_MODULE_15__["configSections"].automation}
        .columns=${this._columns(this.hass.language)}
        .data=${this._scenes(this.scenes)}
        id="entity_id"
        .noDataText=${this.hass.localize("ui.panel.config.scene.picker.no_scenes")}
        hasFab
      >
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:help-circle"
          @click=${this._showHelp}
        ></paper-icon-button>
      </hass-tabs-subpage-data-table>
      <a href="/config/scene/edit/new">
        <ha-fab
          ?is-wide=${this.isWide}
          ?narrow=${this.narrow}
          icon="hass:plus"
          title=${this.hass.localize("ui.panel.config.scene.picker.add_scene")}
          ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(this.hass)}
        ></ha-fab>
      </a>
    `;
      }
    }, {
      kind: "method",
      key: "_showInfo",
      value: function _showInfo(ev) {
        ev.stopPropagation();
        const entityId = ev.currentTarget.scene.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_activateScene",
      value: async function _activateScene(ev) {
        ev.stopPropagation();
        const scene = ev.target.scene;
        await Object(_data_scene__WEBPACK_IMPORTED_MODULE_10__["activateScene"])(this.hass, scene.entity_id);
        Object(_util_toast__WEBPACK_IMPORTED_MODULE_14__["showToast"])(this, {
          message: this.hass.localize("ui.panel.config.scene.activated", "name", Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(scene))
        });
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_9__["forwardHaptic"])("light");
      }
    }, {
      kind: "method",
      key: "_showHelp",
      value: function _showHelp() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_11__["showAlertDialog"])(this, {
          title: this.hass.localize("ui.panel.config.scene.picker.header"),
          text: lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
        ${this.hass.localize("ui.panel.config.scene.picker.introduction")}
        <p>
          <a
            href="https://home-assistant.io/docs/scene/editor/"
            target="_blank"
            rel="noreferrer"
          >
            ${this.hass.localize("ui.panel.config.scene.picker.learn_more")}
          </a>
        </p>
      `
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_13__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
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
        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }

        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/scene/ha-scene-editor.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/scene/ha-scene-editor.ts ***!
  \****************************************************/
/*! exports provided: HaSceneEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaSceneEditor", function() { return HaSceneEditor; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_entity_ha_entities_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/entity/ha-entities-picker */ "./src/components/entity/ha-entities-picker.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _data_scene__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../data/scene */ "./src/data/scene.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
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


























let HaSceneEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-scene-editor")], function (_initialize, _SubscribeMixin) {
  class HaSceneEditor extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaSceneEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "sceneId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "scenes",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_dirty",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_errors",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_entities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_deviceRegistryEntries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_entityRegistryEntries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_scene",
      value: void 0
    }, {
      kind: "field",
      key: "_storedStates",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_unsubscribeEvents",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_deviceEntityLookup",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_activateContextId",
      value: void 0
    }, {
      kind: "field",
      key: "_getEntitiesDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])((entities, devices, deviceEntityLookup, deviceRegs) => {
          const outputDevices = [];

          if (devices.length) {
            const deviceLookup = {};

            for (const device of deviceRegs) {
              deviceLookup[device.id] = device;
            }

            devices.forEach(deviceId => {
              const device = deviceLookup[deviceId];
              const deviceEntities = deviceEntityLookup[deviceId] || [];
              outputDevices.push({
                name: Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_17__["computeDeviceName"])(device, this.hass, this._deviceEntityLookup[device.id]),
                id: device.id,
                entities: deviceEntities
              });
            });
          }

          const outputEntities = [];
          entities.forEach(entity => {
            if (!outputDevices.find(device => device.entities.includes(entity))) {
              outputEntities.push(entity);
            }
          });
          return {
            devices: outputDevices,
            entities: outputEntities
          };
        });
      }

    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaSceneEditor.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubscribeEvents) {
          this._unsubscribeEvents();

          this._unsubscribeEvents = undefined;
        }
      }
    }, {
      kind: "method",
      key: "hassSubscribe",
      value: function hassSubscribe() {
        return [Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_18__["subscribeEntityRegistry"])(this.hass.connection, entries => {
          this._entityRegistryEntries = entries;
        }), Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_17__["subscribeDeviceRegistry"])(this.hass.connection, entries => {
          this._deviceRegistryEntries = entries;
        })];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]``;
        }

        const {
          devices,
          entities
        } = this._getEntitiesDevices(this._entities, this._devices, this._deviceEntityLookup, this._deviceRegistryEntries);

        const name = this._scene ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(this._scene) : this.hass.localize("ui.panel.config.scene.editor.default_name");
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <hass-tabs-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        .backCallback=${() => this._backTapped()}
        .tabs=${_ha_panel_config__WEBPACK_IMPORTED_MODULE_24__["configSections"].automation}
      >
        ${!this.sceneId ? "" : lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <paper-icon-button
                slot="toolbar-icon"
                title="${this.hass.localize("ui.panel.config.scene.picker.delete_scene")}"
                icon="hass:delete"
                @click=${this._deleteTapped}
              ></paper-icon-button>
            `}
        ${this._errors ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]` <div class="errors">${this._errors}</div> ` : ""}
        ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]` <span slot="header">${name}</span> ` : ""}
        <div
          id="root"
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(this.hass)
        })}"
        >
          <ha-config-section .isWide=${this.isWide}>
            ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]` <span slot="header">${name}</span> ` : ""}
            <div slot="introduction">
              ${this.hass.localize("ui.panel.config.scene.editor.introduction")}
            </div>
            <ha-card>
              <div class="card-content">
                <paper-input
                  .value=${this._scene ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(this._scene) : ""}
                  @value-changed=${this._nameChanged}
                  label=${this.hass.localize("ui.panel.config.scene.editor.name")}
                ></paper-input>
              </div>
            </ha-card>
          </ha-config-section>

          <ha-config-section .isWide=${this.isWide}>
            <div slot="header">
              ${this.hass.localize("ui.panel.config.scene.editor.devices.header")}
            </div>
            <div slot="introduction">
              ${this.hass.localize("ui.panel.config.scene.editor.devices.introduction")}
            </div>

            ${devices.map(device => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                  <ha-card>
                    <div class="card-header">
                      ${device.name}
                      <paper-icon-button
                        icon="hass:delete"
                        title="${this.hass.localize("ui.panel.config.scene.editor.devices.delete")}"
                        .device=${device.id}
                        @click=${this._deleteDevice}
                      ></paper-icon-button>
                    </div>
                    ${device.entities.map(entityId => {
          const entityStateObj = this.hass.states[entityId];

          if (!entityStateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]``;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                        <paper-icon-item
                          .entityId=${entityId}
                          @click=${this._showMoreInfo}
                          class="device-entity"
                        >
                          <state-badge
                            .stateObj=${entityStateObj}
                            slot="item-icon"
                          ></state-badge>
                          <paper-item-body>
                            ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(entityStateObj)}
                          </paper-item-body>
                        </paper-icon-item>
                      `;
        })}
                  </ha-card>
                `)}

            <ha-card
              .header=${this.hass.localize("ui.panel.config.scene.editor.devices.add")}
            >
              <div class="card-content">
                <ha-device-picker
                  @value-changed=${this._devicePicked}
                  .hass=${this.hass}
                  .label=${this.hass.localize("ui.panel.config.scene.editor.devices.add")}
                ></ha-device-picker>
              </div>
            </ha-card>
          </ha-config-section>

          ${this.showAdvanced ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                <ha-config-section .isWide=${this.isWide}>
                  <div slot="header">
                    ${this.hass.localize("ui.panel.config.scene.editor.entities.header")}
                  </div>
                  <div slot="introduction">
                    ${this.hass.localize("ui.panel.config.scene.editor.entities.introduction")}
                  </div>
                  ${entities.length ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                        <ha-card
                          class="entities"
                          .header=${this.hass.localize("ui.panel.config.scene.editor.entities.without_device")}
                        >
                          ${entities.map(entityId => {
          const entityStateObj = this.hass.states[entityId];

          if (!entityStateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]``;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                              <paper-icon-item
                                .entityId=${entityId}
                                @click=${this._showMoreInfo}
                                class="device-entity"
                              >
                                <state-badge
                                  .stateObj=${entityStateObj}
                                  slot="item-icon"
                                ></state-badge>
                                <paper-item-body>
                                  ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(entityStateObj)}
                                </paper-item-body>
                                <paper-icon-button
                                  icon="hass:delete"
                                  .entityId=${entityId}
                                  .title="${this.hass.localize("ui.panel.config.scene.editor.entities.delete")}"
                                  @click=${this._deleteEntity}
                                ></paper-icon-button>
                              </paper-icon-item>
                            `;
        })}
                        </ha-card>
                      ` : ""}

                  <ha-card
                    header=${this.hass.localize("ui.panel.config.scene.editor.entities.add")}
                  >
                    <div class="card-content">
                      ${this.hass.localize("ui.panel.config.scene.editor.entities.device_entities")}
                      <ha-entity-picker
                        @value-changed=${this._entityPicked}
                        .excludeDomains=${_data_scene__WEBPACK_IMPORTED_MODULE_19__["SCENE_IGNORED_DOMAINS"]}
                        .hass=${this.hass}
                        label=${this.hass.localize("ui.panel.config.scene.editor.entities.add")}
                      ></ha-entity-picker>
                    </div>
                  </ha-card>
                </ha-config-section>
              ` : ""}
        </div>
        <ha-fab
          ?is-wide=${this.isWide}
          ?narrow=${this.narrow}
          ?dirty=${this._dirty}
          icon="hass:content-save"
          .title=${this.hass.localize("ui.panel.config.scene.editor.save")}
          @click=${this._saveScene}
          class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(this.hass)
        })}
        ></ha-fab>
      </hass-tabs-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaSceneEditor.prototype), "updated", this).call(this, changedProps);

        const oldscene = changedProps.get("sceneId");

        if (changedProps.has("sceneId") && this.sceneId && this.hass && ( // Only refresh config if we picked a new scene. If same ID, don't fetch it.
        !oldscene || oldscene !== this.sceneId)) {
          this._loadConfig();
        }

        if (changedProps.has("sceneId") && !this.sceneId && this.hass) {
          this._dirty = false;
          const initData = Object(_data_scene__WEBPACK_IMPORTED_MODULE_19__["getSceneEditorInitData"])();
          this._config = Object.assign({
            name: this.hass.localize("ui.panel.config.scene.editor.default_name"),
            entities: {}
          }, initData);

          this._initEntities(this._config);

          if (initData) {
            this._dirty = true;
          }
        }

        if (changedProps.has("_entityRegistryEntries")) {
          for (const entity of this._entityRegistryEntries) {
            if (!entity.device_id || _data_scene__WEBPACK_IMPORTED_MODULE_19__["SCENE_IGNORED_DOMAINS"].includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__["computeDomain"])(entity.entity_id))) {
              continue;
            }

            if (!(entity.device_id in this._deviceEntityLookup)) {
              this._deviceEntityLookup[entity.device_id] = [];
            }

            if (!this._deviceEntityLookup[entity.device_id].includes(entity.entity_id)) {
              this._deviceEntityLookup[entity.device_id].push(entity.entity_id);
            }

            if (this._entities.includes(entity.entity_id) && !this._devices.includes(entity.device_id)) {
              this._devices = [...this._devices, entity.device_id];
            }
          }
        }

        if (changedProps.has("scenes") && this.sceneId && this._config && !this._scene) {
          this._setScene();
        }
      }
    }, {
      kind: "method",
      key: "_setScene",
      value: async function _setScene() {
        const scene = this.scenes.find(entity => entity.attributes.id === this.sceneId);

        if (!scene) {
          return;
        }

        this._scene = scene;
        const {
          context
        } = await Object(_data_scene__WEBPACK_IMPORTED_MODULE_19__["activateScene"])(this.hass, this._scene.entity_id);
        this._activateContextId = context.id;
        this._unsubscribeEvents = await this.hass.connection.subscribeEvents(event => this._stateChanged(event), "state_changed");
      }
    }, {
      kind: "method",
      key: "_showMoreInfo",
      value: function _showMoreInfo(ev) {
        const entityId = ev.currentTarget.entityId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_loadConfig",
      value: async function _loadConfig() {
        let config;

        try {
          config = await Object(_data_scene__WEBPACK_IMPORTED_MODULE_19__["getSceneConfig"])(this.hass, this.sceneId);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_20__["showAlertDialog"])(this, {
            text: err.status_code === 404 ? this.hass.localize("ui.panel.config.scene.editor.load_error_not_editable") : this.hass.localize("ui.panel.config.scene.editor.load_error_unknown", "err_no", err.status_code)
          }).then(() => history.back());
          return;
        }

        if (!config.entities) {
          config.entities = {};
        }

        this._initEntities(config);

        this._setScene();

        this._dirty = false;
        this._config = config;
      }
    }, {
      kind: "method",
      key: "_initEntities",
      value: function _initEntities(config) {
        this._entities = Object.keys(config.entities);

        this._entities.forEach(entity => this._storeState(entity));

        const filteredEntityReg = this._entityRegistryEntries.filter(entityReg => this._entities.includes(entityReg.entity_id));

        this._devices = [];

        for (const entityReg of filteredEntityReg) {
          if (!entityReg.device_id) {
            continue;
          }

          if (!this._devices.includes(entityReg.device_id)) {
            this._devices = [...this._devices, entityReg.device_id];
          }
        }
      }
    }, {
      kind: "method",
      key: "_entityPicked",
      value: function _entityPicked(ev) {
        const entityId = ev.detail.value;
        ev.target.value = "";

        if (this._entities.includes(entityId)) {
          return;
        }

        this._entities = [...this._entities, entityId];

        this._storeState(entityId);

        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_deleteEntity",
      value: function _deleteEntity(ev) {
        ev.stopPropagation();
        const deleteEntityId = ev.target.entityId;
        this._entities = this._entities.filter(entityId => entityId !== deleteEntityId);
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_devicePicked",
      value: function _devicePicked(ev) {
        const device = ev.detail.value;
        ev.target.value = "";

        if (this._devices.includes(device)) {
          return;
        }

        this._devices = [...this._devices, device];
        const deviceEntities = this._deviceEntityLookup[device];

        if (!deviceEntities) {
          return;
        }

        this._entities = [...this._entities, ...deviceEntities];
        deviceEntities.forEach(entityId => {
          this._storeState(entityId);
        });
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_deleteDevice",
      value: function _deleteDevice(ev) {
        const deviceId = ev.target.device;
        this._devices = this._devices.filter(device => device !== deviceId);
        const deviceEntities = this._deviceEntityLookup[deviceId];

        if (!deviceEntities) {
          return;
        }

        this._entities = this._entities.filter(entityId => !deviceEntities.includes(entityId));
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_nameChanged",
      value: function _nameChanged(ev) {
        if (!this._config || this._config.name === ev.detail.value) {
          return;
        }

        this._config.name = ev.detail.value;
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_stateChanged",
      value: function _stateChanged(event) {
        if (event.context.id !== this._activateContextId && this._entities.includes(event.data.entity_id)) {
          this._dirty = true;
        }
      }
    }, {
      kind: "method",
      key: "_backTapped",
      value: function _backTapped() {
        if (this._dirty) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_20__["showConfirmationDialog"])(this, {
            text: this.hass.localize("ui.panel.config.scene.editor.unsaved_confirm"),
            confirmText: this.hass.localize("ui.common.yes"),
            dismissText: this.hass.localize("ui.common.no"),
            confirm: () => this._goBack()
          });
        } else {
          this._goBack();
        }
      }
    }, {
      kind: "method",
      key: "_goBack",
      value: function _goBack() {
        Object(_data_scene__WEBPACK_IMPORTED_MODULE_19__["applyScene"])(this.hass, this._storedStates);
        history.back();
      }
    }, {
      kind: "method",
      key: "_deleteTapped",
      value: function _deleteTapped() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_20__["showConfirmationDialog"])(this, {
          text: this.hass.localize("ui.panel.config.scene.picker.delete_confirm"),
          confirmText: this.hass.localize("ui.common.yes"),
          dismissText: this.hass.localize("ui.common.no"),
          confirm: () => this._delete()
        });
      }
    }, {
      kind: "method",
      key: "_delete",
      value: async function _delete() {
        await Object(_data_scene__WEBPACK_IMPORTED_MODULE_19__["deleteScene"])(this.hass, this.sceneId);
        Object(_data_scene__WEBPACK_IMPORTED_MODULE_19__["applyScene"])(this.hass, this._storedStates);
        history.back();
      }
    }, {
      kind: "method",
      key: "_calculateStates",
      value: function _calculateStates() {
        const output = {};

        this._entities.forEach(entityId => {
          const state = this._getCurrentState(entityId);

          if (state) {
            output[entityId] = state;
          }
        });

        return output;
      }
    }, {
      kind: "method",
      key: "_storeState",
      value: function _storeState(entityId) {
        if (entityId in this._storedStates) {
          return;
        }

        const state = this._getCurrentState(entityId);

        if (!state) {
          return;
        }

        this._storedStates[entityId] = state;
      }
    }, {
      kind: "method",
      key: "_getCurrentState",
      value: function _getCurrentState(entityId) {
        const stateObj = this.hass.states[entityId];

        if (!stateObj) {
          return undefined;
        }

        return Object.assign({}, stateObj.attributes, {
          state: stateObj.state
        });
      }
    }, {
      kind: "method",
      key: "_saveScene",
      value: async function _saveScene() {
        const id = !this.sceneId ? "" + Date.now() : this.sceneId;
        this._config = Object.assign({}, this._config, {
          entities: this._calculateStates()
        });

        try {
          await Object(_data_scene__WEBPACK_IMPORTED_MODULE_19__["saveScene"])(this.hass, id, this._config);
          this._dirty = false;

          if (!this.sceneId) {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_10__["navigate"])(this, `/config/scene/edit/${id}`, true);
          }
        } catch (err) {
          this._errors = err.body.message || err.message;
          throw err;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_22__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
        ha-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers ha-card,
        .script ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .rtl .card-menu {
          right: auto;
          left: 0;
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        paper-icon-item {
          padding: 8px 16px;
        }
        ha-card paper-icon-button {
          color: var(--secondary-text-color);
        }
        .card-header > paper-icon-button {
          float: right;
          position: relative;
          top: -8px;
        }
        .device-entity {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        ha-fab[narrow] {
          bottom: 84px;
          margin-bottom: -140px;
        }
        ha-fab[dirty] {
          margin-bottom: 0;
        }

        ha-fab.rtl {
          right: auto;
          left: 16px;
        }

        ha-fab[is-wide].rtl {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `];
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_21__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjZW5lLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2NlbmUvaGEtY29uZmlnLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3NjZW5lL2hhLXNjZW5lLWRhc2hib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY2VuZS9oYS1zY2VuZS1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7SXJvbk1lbnVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZW51LWJlaGF2aW9yL2lyb24tbWVudS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltNZW51c10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL21lbnVzLmh0bWwpXG5cbmA8cGFwZXItbGlzdGJveD5gIGltcGxlbWVudHMgYW4gYWNjZXNzaWJsZSBsaXN0Ym94IGNvbnRyb2wgd2l0aCBNYXRlcmlhbCBEZXNpZ25cbnN0eWxpbmcuIFRoZSBmb2N1c2VkIGl0ZW0gaXMgaGlnaGxpZ2h0ZWQsIGFuZCB0aGUgc2VsZWN0ZWQgaXRlbSBoYXMgYm9sZGVkIHRleHQuXG5cbiAgICA8cGFwZXItbGlzdGJveD5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMTwvcGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMjwvcGFwZXItaXRlbT5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbkFuIGluaXRpYWwgc2VsZWN0aW9uIGNhbiBiZSBzcGVjaWZpZWQgd2l0aCB0aGUgYHNlbGVjdGVkYCBhdHRyaWJ1dGUuXG5cbiAgICA8cGFwZXItbGlzdGJveCBzZWxlY3RlZD1cIjBcIj5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMTwvcGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMjwvcGFwZXItaXRlbT5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbk1ha2UgYSBtdWx0aS1zZWxlY3QgbGlzdGJveCB3aXRoIHRoZSBgbXVsdGlgIGF0dHJpYnV0ZS4gSXRlbXMgaW4gYSBtdWx0aS1zZWxlY3Rcbmxpc3Rib3ggY2FuIGJlIGRlc2VsZWN0ZWQsIGFuZCBtdWx0aXBsZSBpdGVtIGNhbiBiZSBzZWxlY3RlZC5cblxuICAgIDxwYXBlci1saXN0Ym94IG11bHRpPlxuICAgICAgPHBhcGVyLWl0ZW0+SXRlbSAxPC9wYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0+SXRlbSAyPC9wYXBlci1pdGVtPlxuICAgIDwvcGFwZXItbGlzdGJveD5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWxpc3Rib3gtYmFja2dyb3VuZC1jb2xvcmAgICB8IE1lbnUgYmFja2dyb3VuZCBjb2xvciB8XG5gLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3JgXG5gLS1wYXBlci1saXN0Ym94LWNvbG9yYCAgICAgICAgICAgICAgfCBNZW51IGZvcmVncm91bmQgY29sb3IgfFxuYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItbGlzdGJveGAgICAgICAgICAgICAgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGlzdGJveCB8IGB7fWBcblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuYDxwYXBlci1saXN0Ym94PmAgaGFzIGByb2xlPVwibGlzdGJveFwiYCBieSBkZWZhdWx0LiBBIG11bHRpLXNlbGVjdCBsaXN0Ym94IHdpbGxcbmFsc28gaGF2ZSBgYXJpYS1tdWx0aXNlbGVjdGFibGVgIHNldC4gSXQgaW1wbGVtZW50cyBrZXkgYmluZGluZ3MgdG8gbmF2aWdhdGVcbnRocm91Z2ggdGhlIGxpc3Rib3ggd2l0aCB0aGUgdXAgYW5kIGRvd24gYXJyb3cga2V5cywgZXNjIHRvIGV4aXQgdGhlIGxpc3Rib3gsXG5hbmQgZW50ZXIgdG8gYWN0aXZhdGUgYSBsaXN0Ym94IGl0ZW0uIFR5cGluZyB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgbGlzdGJveCBpdGVtXG53aWxsIGFsc28gZm9jdXMgaXQuXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItbGlzdGJveFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlci1saXN0Ym94LWJhY2tncm91bmQtY29sb3IsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItbGlzdGJveC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbGlzdGJveDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWxpc3Rib3gnLFxuICBiZWhhdmlvcnM6IFtJcm9uTWVudUJlaGF2aW9yXSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnbGlzdGJveCd9XG59KTtcbiIsImltcG9ydCB7IENvbm5lY3Rpb24sIGNyZWF0ZUNvbGxlY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnkge1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xuICBjb25maWdfZW50cnlfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV9pZD86IHN0cmluZztcbiAgZGlzYWJsZWRfYnk6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0RW50aXR5UmVnaXN0cnlFbnRyeSBleHRlbmRzIEVudGl0eVJlZ2lzdHJ5RW50cnkge1xuICB1bmlxdWVfaWQ6IHN0cmluZztcbiAgY2FwYWJpbGl0aWVzOiBvYmplY3Q7XG4gIG9yaWdpbmFsX25hbWU/OiBzdHJpbmc7XG4gIG9yaWdpbmFsX2ljb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcyB7XG4gIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICBpY29uPzogc3RyaW5nIHwgbnVsbDtcbiAgZGlzYWJsZWRfYnk/OiBzdHJpbmcgfCBudWxsO1xuICBuZXdfZW50aXR5X2lkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZmluZEJhdHRlcnlFbnRpdHkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W11cbik6IEVudGl0eVJlZ2lzdHJ5RW50cnkgfCB1bmRlZmluZWQgPT5cbiAgZW50aXRpZXMuZmluZChcbiAgICAoZW50aXR5KSA9PlxuICAgICAgaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF0gJiZcbiAgICAgIGhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzID09PSBcImJhdHRlcnlcIlxuICApO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50cnk6IEVudGl0eVJlZ2lzdHJ5RW50cnlcbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoZW50cnkubmFtZSkge1xuICAgIHJldHVybiBlbnRyeS5uYW1lO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50cnkuZW50aXR5X2lkXTtcbiAgcmV0dXJuIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEV4dGVuZGVkRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxFeHRFbnRpdHlSZWdpc3RyeUVudHJ5PiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2dldFwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPlxuKTogUHJvbWlzZTxFeHRFbnRpdHlSZWdpc3RyeUVudHJ5PiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvcmVtb3ZlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRW50aXR5UmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hFbnRpdHlSZWdpc3RyeShjb25uKS50aGVuKChlbnRpdGllcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShlbnRpdGllcywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiZW50aXR5X3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEVudGl0eVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZW50aXR5UmVnaXN0cnlcIixcbiAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSxcbiAgSGFzc0VudGl0eUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgU2VydmljZUNhbGxSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgU0NFTkVfSUdOT1JFRF9ET01BSU5TID0gW1xuICBcInNlbnNvclwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJkZXZpY2VfdHJhY2tlclwiLFxuICBcInBlcnNvblwiLFxuICBcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCIsXG4gIFwiY29uZmlndXJhdGlvblwiLFxuICBcImltYWdlX3Byb2Nlc3NpbmdcIixcbiAgXCJzdW5cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwiem9uZVwiLFxuXTtcblxubGV0IGluaXRpdGlhbFNjZW5lRWRpdG9yRGF0YTogUGFydGlhbDxTY2VuZUNvbmZpZz4gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBzaG93U2NlbmVFZGl0b3IgPSAoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgZGF0YT86IFBhcnRpYWw8U2NlbmVDb25maWc+XG4pID0+IHtcbiAgaW5pdGl0aWFsU2NlbmVFZGl0b3JEYXRhID0gZGF0YTtcbiAgbmF2aWdhdGUoZWwsIFwiL2NvbmZpZy9zY2VuZS9lZGl0L25ld1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTY2VuZUVkaXRvckluaXREYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gaW5pdGl0aWFsU2NlbmVFZGl0b3JEYXRhO1xuICBpbml0aXRpYWxTY2VuZUVkaXRvckRhdGEgPSB1bmRlZmluZWQ7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUVudGl0eSBleHRlbmRzIEhhc3NFbnRpdHlCYXNlIHtcbiAgYXR0cmlidXRlczogSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UgJiB7IGlkPzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVudGl0aWVzOiBTY2VuZUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lRW50aXRpZXMge1xuICBbZW50aXR5SWQ6IHN0cmluZ106IHN0cmluZyB8IHsgc3RhdGU6IHN0cmluZzsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZVNjZW5lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPFNlcnZpY2VDYWxsUmVzcG9uc2U+ID0+XG4gIGhhc3MuY2FsbFNlcnZpY2UoXCJzY2VuZVwiLCBcInR1cm5fb25cIiwgeyBlbnRpdHlfaWQ6IGVudGl0eUlkIH0pO1xuXG5leHBvcnQgY29uc3QgYXBwbHlTY2VuZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXRpZXM6IFNjZW5lRW50aXRpZXNcbik6IFByb21pc2U8U2VydmljZUNhbGxSZXNwb25zZT4gPT5cbiAgaGFzcy5jYWxsU2VydmljZShcInNjZW5lXCIsIFwiYXBwbHlcIiwgeyBlbnRpdGllcyB9KTtcblxuZXhwb3J0IGNvbnN0IGdldFNjZW5lQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzY2VuZUlkOiBzdHJpbmdcbik6IFByb21pc2U8U2NlbmVDb25maWc+ID0+XG4gIGhhc3MuY2FsbEFwaTxTY2VuZUNvbmZpZz4oXCJHRVRcIiwgYGNvbmZpZy9zY2VuZS9jb25maWcvJHtzY2VuZUlkfWApO1xuXG5leHBvcnQgY29uc3Qgc2F2ZVNjZW5lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzY2VuZUlkOiBzdHJpbmcsXG4gIGNvbmZpZzogU2NlbmVDb25maWdcbikgPT4gaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke3NjZW5lSWR9YCwgY29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNjZW5lID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke2lkfWApO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIFByb3BlcnR5VmFsdWVzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBTY2VuZUVudGl0eSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3NjZW5lXCI7XG5pbXBvcnQge1xuICBIYXNzUm91dGVyUGFnZSxcbiAgUm91dGVyT3B0aW9ucyxcbn0gZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9oYS1zY2VuZS1kYXNoYm9hcmRcIjtcbmltcG9ydCBcIi4vaGEtc2NlbmUtZWRpdG9yXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5jb25zdCBlcXVhbCA9IChhOiBTY2VuZUVudGl0eVtdLCBiOiBTY2VuZUVudGl0eVtdKTogYm9vbGVhbiA9PiB7XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGEuZXZlcnkoKHNjZW5lLCBpbmRleCkgPT4gc2NlbmUgPT09IGJbaW5kZXhdKTtcbn07XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29uZmlnLXNjZW5lXCIpXG5jbGFzcyBIYUNvbmZpZ1NjZW5lIGV4dGVuZHMgSGFzc1JvdXRlclBhZ2Uge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHNob3dBZHZhbmNlZCE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHNjZW5lczogU2NlbmVFbnRpdHlbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImRhc2hib2FyZFwiLFxuICAgIHJvdXRlczoge1xuICAgICAgZGFzaGJvYXJkOiB7XG4gICAgICAgIHRhZzogXCJoYS1zY2VuZS1kYXNoYm9hcmRcIixcbiAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgZWRpdDoge1xuICAgICAgICB0YWc6IFwiaGEtc2NlbmUtZWRpdG9yXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgcHJpdmF0ZSBfZGVib3VuY2VkVXBkYXRlU2NlbmVzID0gZGVib3VuY2UoKHBhZ2VFbCkgPT4ge1xuICAgIGNvbnN0IG5ld1NjZW5lcyA9IHRoaXMuX2dldFNjZW5lcyh0aGlzLmhhc3Muc3RhdGVzKTtcbiAgICBpZiAoIWVxdWFsKG5ld1NjZW5lcywgcGFnZUVsLnNjZW5lcykpIHtcbiAgICAgIHBhZ2VFbC5zY2VuZXMgPSBuZXdTY2VuZXM7XG4gICAgfVxuICB9LCAxMCk7XG5cbiAgcHJpdmF0ZSBfZ2V0U2NlbmVzID0gbWVtb2l6ZU9uZSgoc3RhdGVzOiBIYXNzRW50aXRpZXMpOiBTY2VuZUVudGl0eVtdID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzdGF0ZXMpLmZpbHRlcihcbiAgICAgIChlbnRpdHkpID0+XG4gICAgICAgIGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpID09PSBcInNjZW5lXCIgJiYgIWVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlblxuICAgICkgYXMgU2NlbmVFbnRpdHlbXTtcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChwYWdlRWwsIGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBwYWdlRWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICBwYWdlRWwubmFycm93ID0gdGhpcy5uYXJyb3c7XG4gICAgcGFnZUVsLmlzV2lkZSA9IHRoaXMuaXNXaWRlO1xuICAgIHBhZ2VFbC5yb3V0ZSA9IHRoaXMucm91dGVUYWlsO1xuICAgIHBhZ2VFbC5zaG93QWR2YW5jZWQgPSB0aGlzLnNob3dBZHZhbmNlZDtcblxuICAgIGlmICh0aGlzLmhhc3MpIHtcbiAgICAgIGlmICghcGFnZUVsLnNjZW5lcyB8fCAhY2hhbmdlZFByb3BzKSB7XG4gICAgICAgIHBhZ2VFbC5zY2VuZXMgPSB0aGlzLl9nZXRTY2VuZXModGhpcy5oYXNzLnN0YXRlcyk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZWRQcm9wcyAmJiBjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSkge1xuICAgICAgICB0aGlzLl9kZWJvdW5jZWRVcGRhdGVTY2VuZXMocGFnZUVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoIWNoYW5nZWRQcm9wcyB8fCBjaGFuZ2VkUHJvcHMuaGFzKFwicm91dGVcIikpICYmXG4gICAgICB0aGlzLl9jdXJyZW50UGFnZSA9PT0gXCJlZGl0XCJcbiAgICApIHtcbiAgICAgIHBhZ2VFbC5jcmVhdGluZ05ldyA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IHNjZW5lSWQgPSB0aGlzLnJvdXRlVGFpbC5wYXRoLnN1YnN0cigxKTtcbiAgICAgIHBhZ2VFbC5zY2VuZUlkID0gc2NlbmVJZCA9PT0gXCJuZXdcIiA/IG51bGwgOiBzY2VuZUlkO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29uZmlnLXNjZW5lXCI6IEhhQ29uZmlnU2NlbmU7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkXCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCB7IGZvcndhcmRIYXB0aWMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9oYXB0aWNzXCI7XG5pbXBvcnQgeyBhY3RpdmF0ZVNjZW5lLCBTY2VuZUVudGl0eSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3NjZW5lXCI7XG5pbXBvcnQgeyBzaG93QWxlcnREaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzaG93VG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC90b2FzdFwiO1xuaW1wb3J0IHsgY29uZmlnU2VjdGlvbnMgfSBmcm9tIFwiLi4vaGEtcGFuZWwtY29uZmlnXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtc2NlbmUtZGFzaGJvYXJkXCIpXG5jbGFzcyBIYVNjZW5lRGFzaGJvYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NlbmVzITogU2NlbmVFbnRpdHlbXTtcblxuICBwcml2YXRlIF9zY2VuZXMgPSBtZW1vaXplT25lKChzY2VuZXM6IFNjZW5lRW50aXR5W10pID0+IHtcbiAgICByZXR1cm4gc2NlbmVzLm1hcCgoc2NlbmUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNjZW5lLFxuICAgICAgICBuYW1lOiBjb21wdXRlU3RhdGVOYW1lKHNjZW5lKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplT25lKFxuICAgIChfbGFuZ3VhZ2UpOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZhdGU6IHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICB0eXBlOiBcImljb24tYnV0dG9uXCIsXG4gICAgICAgICAgdGVtcGxhdGU6IChfdG9nZ2xlLCBzY2VuZSkgPT5cbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIC5zY2VuZT0ke3NjZW5lfVxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnBsYXlcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIuYWN0aXZhdGVfc2NlbmVcIlxuICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHsoZXY6IEV2ZW50KSA9PiB0aGlzLl9hY3RpdmF0ZVNjZW5lKGV2KX1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5oZWFkZXJzLm5hbWVcIlxuICAgICAgICAgICksXG4gICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgICAgZ3Jvd3M6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICB0eXBlOiBcImljb24tYnV0dG9uXCIsXG4gICAgICAgICAgdGVtcGxhdGU6IChfaW5mbywgc2NlbmUpID0+IGh0bWxgXG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgLnNjZW5lPSR7c2NlbmV9XG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dJbmZvfVxuICAgICAgICAgICAgICBpY29uPVwiaGFzczppbmZvcm1hdGlvbi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIuc2hvd19pbmZvX3NjZW5lXCJcbiAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIHR5cGU6IFwiaWNvbi1idXR0b25cIixcbiAgICAgICAgICB0ZW1wbGF0ZTogKF9pbmZvLCBzY2VuZTogYW55KSA9PiBodG1sYFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj0ke2lmRGVmaW5lZChcbiAgICAgICAgICAgICAgICBzY2VuZS5hdHRyaWJ1dGVzLmlkXG4gICAgICAgICAgICAgICAgICA/IGAvY29uZmlnL3NjZW5lL2VkaXQvJHtzY2VuZS5hdHRyaWJ1dGVzLmlkfWBcbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIC5pY29uPSR7c2NlbmUuYXR0cmlidXRlcy5pZCA/IFwiaGFzczpwZW5jaWxcIiA6IFwiaGFzczpwZW5jaWwtb2ZmXCJ9XG4gICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IXNjZW5lLmF0dHJpYnV0ZXMuaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5lZGl0X3NjZW5lXCJcbiAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgJHshc2NlbmUuYXR0cmlidXRlcy5pZFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLm9ubHlfZWRpdGFibGVcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlXG4gICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgIGJhY2stcGF0aD1cIi9jb25maWdcIlxuICAgICAgICAucm91dGU9JHt0aGlzLnJvdXRlfVxuICAgICAgICAudGFicz0ke2NvbmZpZ1NlY3Rpb25zLmF1dG9tYXRpb259XG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLmhhc3MubGFuZ3VhZ2UpfVxuICAgICAgICAuZGF0YT0ke3RoaXMuX3NjZW5lcyh0aGlzLnNjZW5lcyl9XG4gICAgICAgIGlkPVwiZW50aXR5X2lkXCJcbiAgICAgICAgLm5vRGF0YVRleHQ9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLm5vX3NjZW5lc1wiXG4gICAgICAgICl9XG4gICAgICAgIGhhc0ZhYlxuICAgICAgPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpoZWxwLWNpcmNsZVwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd0hlbHB9XG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPC9oYXNzLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlPlxuICAgICAgPGEgaHJlZj1cIi9jb25maWcvc2NlbmUvZWRpdC9uZXdcIj5cbiAgICAgICAgPGhhLWZhYlxuICAgICAgICAgID9pcy13aWRlPSR7dGhpcy5pc1dpZGV9XG4gICAgICAgICAgP25hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAgIHRpdGxlPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5hZGRfc2NlbmVcIil9XG4gICAgICAgICAgP3J0bD0ke2NvbXB1dGVSVEwodGhpcy5oYXNzKX1cbiAgICAgICAgPjwvaGEtZmFiPlxuICAgICAgPC9hPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9zaG93SW5mbyhldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGVudGl0eUlkID0gZXYuY3VycmVudFRhcmdldC5zY2VuZS5lbnRpdHlfaWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2FjdGl2YXRlU2NlbmUoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBzY2VuZSA9IGV2LnRhcmdldC5zY2VuZSBhcyBTY2VuZUVudGl0eTtcbiAgICBhd2FpdCBhY3RpdmF0ZVNjZW5lKHRoaXMuaGFzcywgc2NlbmUuZW50aXR5X2lkKTtcbiAgICBzaG93VG9hc3QodGhpcywge1xuICAgICAgbWVzc2FnZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5hY3RpdmF0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIGNvbXB1dGVTdGF0ZU5hbWUoc2NlbmUpXG4gICAgICApLFxuICAgIH0pO1xuICAgIGZvcndhcmRIYXB0aWMoXCJsaWdodFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dIZWxwKCkge1xuICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5oZWFkZXJcIiksXG4gICAgICB0ZXh0OiBodG1sYFxuICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIuaW50cm9kdWN0aW9uXCIpfVxuICAgICAgICA8cD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9zY2VuZS9lZGl0b3IvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIubGVhcm5fbW9yZVwiKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIGAsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIGhhLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiW25hcnJvd10ge1xuICAgICAgICAgIGJvdHRvbTogODRweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltydGxdW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zY2VuZS1kYXNoYm9hcmRcIjogSGFTY2VuZURhc2hib2FyZDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBIYXNzRXZlbnQgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXRpZXMtcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcbmltcG9ydCB7XG4gIGNvbXB1dGVEZXZpY2VOYW1lLFxuICBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBhY3RpdmF0ZVNjZW5lLFxuICBhcHBseVNjZW5lLFxuICBkZWxldGVTY2VuZSxcbiAgZ2V0U2NlbmVDb25maWcsXG4gIGdldFNjZW5lRWRpdG9ySW5pdERhdGEsXG4gIHNhdmVTY2VuZSxcbiAgU2NlbmVDb25maWcsXG4gIFNjZW5lRW50aXRpZXMsXG4gIFNjZW5lRW50aXR5LFxuICBTQ0VORV9JR05PUkVEX0RPTUFJTlMsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3NjZW5lXCI7XG5pbXBvcnQge1xuICBzaG93Q29uZmlybWF0aW9uRGlhbG9nLFxuICBzaG93QWxlcnREaWFsb2csXG59IGZyb20gXCIuLi8uLi8uLi9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94XCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvc3Vic2NyaWJlLW1peGluXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgY29uZmlnU2VjdGlvbnMgfSBmcm9tIFwiLi4vaGEtcGFuZWwtY29uZmlnXCI7XG5cbmludGVyZmFjZSBEZXZpY2VFbnRpdGllcyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXRpZXM6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgRGV2aWNlRW50aXRpZXNMb29rdXAge1xuICBbZGV2aWNlSWQ6IHN0cmluZ106IHN0cmluZ1tdO1xufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLXNjZW5lLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEhhU2NlbmVFZGl0b3IgZXh0ZW5kcyBTdWJzY3JpYmVNaXhpbihMaXRFbGVtZW50KSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NlbmVJZD86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NlbmVzITogU2NlbmVFbnRpdHlbXTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc2hvd0FkdmFuY2VkITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kaXJ0eSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9ycz86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWchOiBTY2VuZUNvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdGllczogc3RyaW5nW10gPSBbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RldmljZVJlZ2lzdHJ5RW50cmllczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdID0gW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXR5UmVnaXN0cnlFbnRyaWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10gPSBbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zY2VuZT86IFNjZW5lRW50aXR5O1xuXG4gIHByaXZhdGUgX3N0b3JlZFN0YXRlczogU2NlbmVFbnRpdGllcyA9IHt9O1xuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlRXZlbnRzPzogKCkgPT4gdm9pZDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VFbnRpdHlMb29rdXA6IERldmljZUVudGl0aWVzTG9va3VwID0ge307XG5cbiAgcHJpdmF0ZSBfYWN0aXZhdGVDb250ZXh0SWQ/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ2V0RW50aXRpZXNEZXZpY2VzID0gbWVtb2l6ZU9uZShcbiAgICAoXG4gICAgICBlbnRpdGllczogc3RyaW5nW10sXG4gICAgICBkZXZpY2VzOiBzdHJpbmdbXSxcbiAgICAgIGRldmljZUVudGl0eUxvb2t1cDogRGV2aWNlRW50aXRpZXNMb29rdXAsXG4gICAgICBkZXZpY2VSZWdzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W11cbiAgICApID0+IHtcbiAgICAgIGNvbnN0IG91dHB1dERldmljZXM6IERldmljZUVudGl0aWVzW10gPSBbXTtcblxuICAgICAgaWYgKGRldmljZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRldmljZUxvb2t1cDogeyBbZGV2aWNlSWQ6IHN0cmluZ106IERldmljZVJlZ2lzdHJ5RW50cnkgfSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGRldmljZSBvZiBkZXZpY2VSZWdzKSB7XG4gICAgICAgICAgZGV2aWNlTG9va3VwW2RldmljZS5pZF0gPSBkZXZpY2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXZpY2VzLmZvckVhY2goKGRldmljZUlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGV2aWNlID0gZGV2aWNlTG9va3VwW2RldmljZUlkXTtcbiAgICAgICAgICBjb25zdCBkZXZpY2VFbnRpdGllczogc3RyaW5nW10gPSBkZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlSWRdIHx8IFtdO1xuICAgICAgICAgIG91dHB1dERldmljZXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBjb21wdXRlRGV2aWNlTmFtZShcbiAgICAgICAgICAgICAgZGV2aWNlLFxuICAgICAgICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgICAgICAgIHRoaXMuX2RldmljZUVudGl0eUxvb2t1cFtkZXZpY2UuaWRdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaWQ6IGRldmljZS5pZCxcbiAgICAgICAgICAgIGVudGl0aWVzOiBkZXZpY2VFbnRpdGllcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG91dHB1dEVudGl0aWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgaWYgKCFvdXRwdXREZXZpY2VzLmZpbmQoKGRldmljZSkgPT4gZGV2aWNlLmVudGl0aWVzLmluY2x1ZGVzKGVudGl0eSkpKSB7XG4gICAgICAgICAgb3V0cHV0RW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHsgZGV2aWNlczogb3V0cHV0RGV2aWNlcywgZW50aXRpZXM6IG91dHB1dEVudGl0aWVzIH07XG4gICAgfVxuICApO1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YnNjcmliZUV2ZW50cykge1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmVFdmVudHMoKTtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlRXZlbnRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNzU3Vic2NyaWJlKCkge1xuICAgIHJldHVybiBbXG4gICAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiwgKGVudHJpZXMpID0+IHtcbiAgICAgICAgdGhpcy5fZW50aXR5UmVnaXN0cnlFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIHRoaXMuX2RldmljZVJlZ2lzdHJ5RW50cmllcyA9IGVudHJpZXM7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGNvbnN0IHsgZGV2aWNlcywgZW50aXRpZXMgfSA9IHRoaXMuX2dldEVudGl0aWVzRGV2aWNlcyhcbiAgICAgIHRoaXMuX2VudGl0aWVzLFxuICAgICAgdGhpcy5fZGV2aWNlcyxcbiAgICAgIHRoaXMuX2RldmljZUVudGl0eUxvb2t1cCxcbiAgICAgIHRoaXMuX2RldmljZVJlZ2lzdHJ5RW50cmllc1xuICAgICk7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX3NjZW5lXG4gICAgICA/IGNvbXB1dGVTdGF0ZU5hbWUodGhpcy5fc2NlbmUpXG4gICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZGVmYXVsdF9uYW1lXCIpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy10YWJzLXN1YnBhZ2VcbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgLnJvdXRlPSR7dGhpcy5yb3V0ZX1cbiAgICAgICAgLmJhY2tDYWxsYmFjaz0keygpID0+IHRoaXMuX2JhY2tUYXBwZWQoKX1cbiAgICAgICAgLnRhYnM9JHtjb25maWdTZWN0aW9ucy5hdXRvbWF0aW9ufVxuICAgICAgPlxuICAgICAgICAkeyF0aGlzLnNjZW5lSWRcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIuZGVsZXRlX3NjZW5lXCJcbiAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9kZWxldGVUYXBwZWR9XG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgYH1cbiAgICAgICAgJHt0aGlzLl9lcnJvcnMgPyBodG1sYCA8ZGl2IGNsYXNzPVwiZXJyb3JzXCI+JHt0aGlzLl9lcnJvcnN9PC9kaXY+IGAgOiBcIlwifVxuICAgICAgICAke3RoaXMubmFycm93ID8gaHRtbGAgPHNwYW4gc2xvdD1cImhlYWRlclwiPiR7bmFtZX08L3NwYW4+IGAgOiBcIlwifVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJyb290XCJcbiAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMuaGFzcyksXG4gICAgICAgICAgfSl9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgICAgJHshdGhpcy5uYXJyb3cgPyBodG1sYCA8c3BhbiBzbG90PVwiaGVhZGVyXCI+JHtuYW1lfTwvc3Bhbj4gYCA6IFwiXCJ9XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmludHJvZHVjdGlvblwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3NjZW5lID8gY29tcHV0ZVN0YXRlTmFtZSh0aGlzLl9zY2VuZSkgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9uYW1lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IubmFtZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmRldmljZXMuaGVhZGVyXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5kZXZpY2VzLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgJHtkZXZpY2VzLm1hcChcbiAgICAgICAgICAgICAgKGRldmljZSkgPT5cbiAgICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICR7ZGV2aWNlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmRldmljZXMuZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXZpY2U9JHtkZXZpY2UuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9kZWxldGVEZXZpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAke2RldmljZS5lbnRpdGllcy5tYXAoKGVudGl0eUlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50aXR5U3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVudGl0eVN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBgO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dNb3JlSW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZXZpY2UtZW50aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7ZW50aXR5U3RhdGVPYmp9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3N0YXRlLWJhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y29tcHV0ZVN0YXRlTmFtZShlbnRpdHlTdGF0ZU9iail9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgICAgLmhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZGV2aWNlcy5hZGRcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGhhLWRldmljZS1waWNrZXJcbiAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZGV2aWNlUGlja2VkfVxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5kZXZpY2VzLmFkZFwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID48L2hhLWRldmljZS1waWNrZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgICAke3RoaXMuc2hvd0FkdmFuY2VkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmVudGl0aWVzLmhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZW50aXRpZXMuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgJHtlbnRpdGllcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXI9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmVudGl0aWVzLndpdGhvdXRfZGV2aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtlbnRpdGllcy5tYXAoKGVudGl0eUlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50aXR5U3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVudGl0eVN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dNb3JlSW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZXZpY2UtZW50aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7ZW50aXR5U3RhdGVPYmp9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3N0YXRlLWJhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y29tcHV0ZVN0YXRlTmFtZShlbnRpdHlTdGF0ZU9iail9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbnRpdHlJZD0ke2VudGl0eUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZT1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmVudGl0aWVzLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2RlbGV0ZUVudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICAgICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5lbnRpdGllcy5hZGRcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZW50aXRpZXMuZGV2aWNlX2VudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2VudGl0eVBpY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5leGNsdWRlRG9tYWlucz0ke1NDRU5FX0lHTk9SRURfRE9NQUlOU31cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5lbnRpdGllcy5hZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgP2lzLXdpZGU9JHt0aGlzLmlzV2lkZX1cbiAgICAgICAgICA/bmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgP2RpcnR5PSR7dGhpcy5fZGlydHl9XG4gICAgICAgICAgaWNvbj1cImhhc3M6Y29udGVudC1zYXZlXCJcbiAgICAgICAgICAudGl0bGU9JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLnNhdmVcIil9XG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2F2ZVNjZW5lfVxuICAgICAgICAgIGNsYXNzPSR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMuaGFzcyksXG4gICAgICAgICAgfSl9XG4gICAgICAgID48L2hhLWZhYj5cbiAgICAgIDwvaGFzcy10YWJzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBjb25zdCBvbGRzY2VuZSA9IGNoYW5nZWRQcm9wcy5nZXQoXCJzY2VuZUlkXCIpO1xuXG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcInNjZW5lSWRcIikgJiZcbiAgICAgIHRoaXMuc2NlbmVJZCAmJlxuICAgICAgdGhpcy5oYXNzICYmXG4gICAgICAvLyBPbmx5IHJlZnJlc2ggY29uZmlnIGlmIHdlIHBpY2tlZCBhIG5ldyBzY2VuZS4gSWYgc2FtZSBJRCwgZG9uJ3QgZmV0Y2ggaXQuXG4gICAgICAoIW9sZHNjZW5lIHx8IG9sZHNjZW5lICE9PSB0aGlzLnNjZW5lSWQpXG4gICAgKSB7XG4gICAgICB0aGlzLl9sb2FkQ29uZmlnKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJzY2VuZUlkXCIpICYmICF0aGlzLnNjZW5lSWQgJiYgdGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgY29uc3QgaW5pdERhdGEgPSBnZXRTY2VuZUVkaXRvckluaXREYXRhKCk7XG4gICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZGVmYXVsdF9uYW1lXCIpLFxuICAgICAgICBlbnRpdGllczoge30sXG4gICAgICAgIC4uLmluaXREYXRhLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2luaXRFbnRpdGllcyh0aGlzLl9jb25maWcpO1xuICAgICAgaWYgKGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl9lbnRpdHlSZWdpc3RyeUVudHJpZXNcIikpIHtcbiAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHRoaXMuX2VudGl0eVJlZ2lzdHJ5RW50cmllcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWVudGl0eS5kZXZpY2VfaWQgfHxcbiAgICAgICAgICBTQ0VORV9JR05PUkVEX0RPTUFJTlMuaW5jbHVkZXMoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZW50aXR5LmRldmljZV9pZCBpbiB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXApKSB7XG4gICAgICAgICAgdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXBbZW50aXR5LmRldmljZV9pZF0uaW5jbHVkZXMoZW50aXR5LmVudGl0eV9pZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdLnB1c2goZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuX2VudGl0aWVzLmluY2x1ZGVzKGVudGl0eS5lbnRpdHlfaWQpICYmXG4gICAgICAgICAgIXRoaXMuX2RldmljZXMuaW5jbHVkZXMoZW50aXR5LmRldmljZV9pZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fZGV2aWNlcyA9IFsuLi50aGlzLl9kZXZpY2VzLCBlbnRpdHkuZGV2aWNlX2lkXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwic2NlbmVzXCIpICYmXG4gICAgICB0aGlzLnNjZW5lSWQgJiZcbiAgICAgIHRoaXMuX2NvbmZpZyAmJlxuICAgICAgIXRoaXMuX3NjZW5lXG4gICAgKSB7XG4gICAgICB0aGlzLl9zZXRTY2VuZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NldFNjZW5lKCkge1xuICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXMuZmluZChcbiAgICAgIChlbnRpdHk6IFNjZW5lRW50aXR5KSA9PiBlbnRpdHkuYXR0cmlidXRlcy5pZCA9PT0gdGhpcy5zY2VuZUlkXG4gICAgKTtcbiAgICBpZiAoIXNjZW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSBhd2FpdCBhY3RpdmF0ZVNjZW5lKHRoaXMuaGFzcywgdGhpcy5fc2NlbmUuZW50aXR5X2lkKTtcbiAgICB0aGlzLl9hY3RpdmF0ZUNvbnRleHRJZCA9IGNvbnRleHQuaWQ7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmVFdmVudHMgPSBhd2FpdCB0aGlzLmhhc3MhLmNvbm5lY3Rpb24uc3Vic2NyaWJlRXZlbnRzPFxuICAgICAgSGFzc0V2ZW50XG4gICAgPigoZXZlbnQpID0+IHRoaXMuX3N0YXRlQ2hhbmdlZChldmVudCksIFwic3RhdGVfY2hhbmdlZFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dNb3JlSW5mbyhldjogRXZlbnQpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZW50aXR5SWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWRDb25maWcoKSB7XG4gICAgbGV0IGNvbmZpZzogU2NlbmVDb25maWc7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmZpZyA9IGF3YWl0IGdldFNjZW5lQ29uZmlnKHRoaXMuaGFzcywgdGhpcy5zY2VuZUlkISk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzaG93QWxlcnREaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OlxuICAgICAgICAgIGVyci5zdGF0dXNfY29kZSA9PT0gNDA0XG4gICAgICAgICAgICA/IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IubG9hZF9lcnJvcl9ub3RfZWRpdGFibGVcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IubG9hZF9lcnJvcl91bmtub3duXCIsXG4gICAgICAgICAgICAgICAgXCJlcnJfbm9cIixcbiAgICAgICAgICAgICAgICBlcnIuc3RhdHVzX2NvZGVcbiAgICAgICAgICAgICAgKSxcbiAgICAgIH0pLnRoZW4oKCkgPT4gaGlzdG9yeS5iYWNrKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLmVudGl0aWVzKSB7XG4gICAgICBjb25maWcuZW50aXRpZXMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbml0RW50aXRpZXMoY29uZmlnKTtcblxuICAgIHRoaXMuX3NldFNjZW5lKCk7XG5cbiAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRFbnRpdGllcyhjb25maWc6IFNjZW5lQ29uZmlnKSB7XG4gICAgdGhpcy5fZW50aXRpZXMgPSBPYmplY3Qua2V5cyhjb25maWcuZW50aXRpZXMpO1xuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4gdGhpcy5fc3RvcmVTdGF0ZShlbnRpdHkpKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkRW50aXR5UmVnID0gdGhpcy5fZW50aXR5UmVnaXN0cnlFbnRyaWVzLmZpbHRlcigoZW50aXR5UmVnKSA9PlxuICAgICAgdGhpcy5fZW50aXRpZXMuaW5jbHVkZXMoZW50aXR5UmVnLmVudGl0eV9pZClcbiAgICApO1xuICAgIHRoaXMuX2RldmljZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgZW50aXR5UmVnIG9mIGZpbHRlcmVkRW50aXR5UmVnKSB7XG4gICAgICBpZiAoIWVudGl0eVJlZy5kZXZpY2VfaWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2RldmljZXMuaW5jbHVkZXMoZW50aXR5UmVnLmRldmljZV9pZCkpIHtcbiAgICAgICAgdGhpcy5fZGV2aWNlcyA9IFsuLi50aGlzLl9kZXZpY2VzLCBlbnRpdHlSZWcuZGV2aWNlX2lkXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlQaWNrZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgKGV2LnRhcmdldCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcbiAgICBpZiAodGhpcy5fZW50aXRpZXMuaW5jbHVkZXMoZW50aXR5SWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2VudGl0aWVzID0gWy4uLnRoaXMuX2VudGl0aWVzLCBlbnRpdHlJZF07XG4gICAgdGhpcy5fc3RvcmVTdGF0ZShlbnRpdHlJZCk7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlRW50aXR5KGV2OiBFdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGRlbGV0ZUVudGl0eUlkID0gKGV2LnRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIHRoaXMuX2VudGl0aWVzID0gdGhpcy5fZW50aXRpZXMuZmlsdGVyKFxuICAgICAgKGVudGl0eUlkKSA9PiBlbnRpdHlJZCAhPT0gZGVsZXRlRW50aXR5SWRcbiAgICApO1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2RldmljZVBpY2tlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCBkZXZpY2UgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgKGV2LnRhcmdldCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcbiAgICBpZiAodGhpcy5fZGV2aWNlcy5pbmNsdWRlcyhkZXZpY2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2RldmljZXMgPSBbLi4udGhpcy5fZGV2aWNlcywgZGV2aWNlXTtcbiAgICBjb25zdCBkZXZpY2VFbnRpdGllcyA9IHRoaXMuX2RldmljZUVudGl0eUxvb2t1cFtkZXZpY2VdO1xuICAgIGlmICghZGV2aWNlRW50aXRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZW50aXRpZXMgPSBbLi4udGhpcy5fZW50aXRpZXMsIC4uLmRldmljZUVudGl0aWVzXTtcbiAgICBkZXZpY2VFbnRpdGllcy5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgdGhpcy5fc3RvcmVTdGF0ZShlbnRpdHlJZCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlRGV2aWNlKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGRldmljZUlkID0gKGV2LnRhcmdldCBhcyBhbnkpLmRldmljZTtcbiAgICB0aGlzLl9kZXZpY2VzID0gdGhpcy5fZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4gZGV2aWNlICE9PSBkZXZpY2VJZCk7XG4gICAgY29uc3QgZGV2aWNlRW50aXRpZXMgPSB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlSWRdO1xuICAgIGlmICghZGV2aWNlRW50aXRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZW50aXRpZXMgPSB0aGlzLl9lbnRpdGllcy5maWx0ZXIoXG4gICAgICAoZW50aXR5SWQpID0+ICFkZXZpY2VFbnRpdGllcy5pbmNsdWRlcyhlbnRpdHlJZClcbiAgICApO1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX25hbWVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8IHRoaXMuX2NvbmZpZy5uYW1lID09PSBldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnLm5hbWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdGVDaGFuZ2VkKGV2ZW50OiBIYXNzRXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldmVudC5jb250ZXh0LmlkICE9PSB0aGlzLl9hY3RpdmF0ZUNvbnRleHRJZCAmJlxuICAgICAgdGhpcy5fZW50aXRpZXMuaW5jbHVkZXMoZXZlbnQuZGF0YS5lbnRpdHlfaWQpXG4gICAgKSB7XG4gICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYmFja1RhcHBlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGlydHkpIHtcbiAgICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci51bnNhdmVkX2NvbmZpcm1cIlxuICAgICAgICApLFxuICAgICAgICBjb25maXJtVGV4dDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi55ZXNcIiksXG4gICAgICAgIGRpc21pc3NUZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLm5vXCIpLFxuICAgICAgICBjb25maXJtOiAoKSA9PiB0aGlzLl9nb0JhY2soKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nb0JhY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nb0JhY2soKTogdm9pZCB7XG4gICAgYXBwbHlTY2VuZSh0aGlzLmhhc3MsIHRoaXMuX3N0b3JlZFN0YXRlcyk7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9kZWxldGVUYXBwZWQoKTogdm9pZCB7XG4gICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICB0ZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5kZWxldGVfY29uZmlybVwiKSxcbiAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnllc1wiKSxcbiAgICAgIGRpc21pc3NUZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLm5vXCIpLFxuICAgICAgY29uZmlybTogKCkgPT4gdGhpcy5fZGVsZXRlKCksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kZWxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgZGVsZXRlU2NlbmUodGhpcy5oYXNzLCB0aGlzLnNjZW5lSWQhKTtcbiAgICBhcHBseVNjZW5lKHRoaXMuaGFzcywgdGhpcy5fc3RvcmVkU3RhdGVzKTtcbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVN0YXRlcygpOiBTY2VuZUVudGl0aWVzIHtcbiAgICBjb25zdCBvdXRwdXQ6IFNjZW5lRW50aXRpZXMgPSB7fTtcbiAgICB0aGlzLl9lbnRpdGllcy5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9nZXRDdXJyZW50U3RhdGUoZW50aXR5SWQpO1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIG91dHB1dFtlbnRpdHlJZF0gPSBzdGF0ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RvcmVTdGF0ZShlbnRpdHlJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGVudGl0eUlkIGluIHRoaXMuX3N0b3JlZFN0YXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2dldEN1cnJlbnRTdGF0ZShlbnRpdHlJZCk7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdG9yZWRTdGF0ZXNbZW50aXR5SWRdID0gc3RhdGU7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDdXJyZW50U3RhdGUoZW50aXR5SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1tlbnRpdHlJZF07XG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uc3RhdGVPYmouYXR0cmlidXRlcywgc3RhdGU6IHN0YXRlT2JqLnN0YXRlIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zYXZlU2NlbmUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaWQgPSAhdGhpcy5zY2VuZUlkID8gXCJcIiArIERhdGUubm93KCkgOiB0aGlzLnNjZW5lSWQhO1xuICAgIHRoaXMuX2NvbmZpZyA9IHsgLi4udGhpcy5fY29uZmlnLCBlbnRpdGllczogdGhpcy5fY2FsY3VsYXRlU3RhdGVzKCkgfTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2F2ZVNjZW5lKHRoaXMuaGFzcywgaWQsIHRoaXMuX2NvbmZpZyk7XG4gICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXG4gICAgICBpZiAoIXRoaXMuc2NlbmVJZCkge1xuICAgICAgICBuYXZpZ2F0ZSh0aGlzLCBgL2NvbmZpZy9zY2VuZS9lZGl0LyR7aWR9YCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvcnMgPSBlcnIuYm9keS5tZXNzYWdlIHx8IGVyci5tZXNzYWdlO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3JzIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50cmlnZ2VycyxcbiAgICAgICAgLnNjcmlwdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaWdnZXJzIGhhLWNhcmQsXG4gICAgICAgIC5zY3JpcHQgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuYWRkLWNhcmQgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLW1lbnUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAucnRsIC5jYXJkLW1lbnUge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbWVudSBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1jYXJkIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWhlYWRlciA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLThweDtcbiAgICAgICAgfVxuICAgICAgICAuZGV2aWNlLWVudGl0eSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIHNwYW5bc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTgwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWJvdHRvbSAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiW25hcnJvd10ge1xuICAgICAgICAgIGJvdHRvbTogODRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiW2RpcnR5XSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYi5ydGwge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ucnRsIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zY2VuZS1lZGl0b3JcIjogSGFTY2VuZUVkaXRvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQXJCQTs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBMkJBO0FBVUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFhQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBSUE7QUFBQTtBQUVBO0FBSUE7QUFBQTtBQUVBO0FBTUE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7OztBQUFBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBTEE7QUFGQTs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBSUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBN0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUVBO0FBR0E7OztBQVhBO0FBZUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFSQTtBQWNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFPQTtBQUNBO0FBQ0E7OztBQUtBOztBQUdBOztBQUhBOztBQW5CQTtBQXZDQTtBQXNFQTs7Ozs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFRQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7OztBQTNCQTtBQStCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFPQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BOzs7O0FBVkE7QUFlQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUNBOzs7QUF6TUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFZQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBYUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBOUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWtGQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBdkZBO0FBQUE7QUFBQTtBQUFBO0FBMEZBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWxHQTtBQUFBO0FBQUE7QUFBQTtBQXFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUtBOztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7QUFRQTs7QUFFQTs7O0FBS0E7OztBQUtBOzs7QUFLQTs7O0FBR0E7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7OztBQUlBOzs7QUFYQTtBQWVBOztBQW5DQTtBQUNBOztBQXdDQTs7OztBQU1BO0FBQ0E7QUFDQTs7Ozs7O0FBUUE7QUFFQTs7QUFFQTs7O0FBS0E7O0FBSUE7OztBQUlBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTs7OztBQUlBOzs7O0FBSUE7Ozs7QUFJQTtBQUNBO0FBR0E7OztBQW5CQTtBQXVCQTs7QUFwQ0E7QUFDQTs7QUF5Q0E7OztBQUtBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQW5FQTs7O0FBOEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7QUF2TUE7QUE2TUE7QUEvVEE7QUFBQTtBQUFBO0FBQUE7QUFrVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBOVhBO0FBQUE7QUFBQTtBQUFBO0FBaVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBN1lBO0FBQUE7QUFBQTtBQUFBO0FBZ1pBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFsWkE7QUFBQTtBQUFBO0FBQUE7QUFxWkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsYkE7QUFBQTtBQUFBO0FBQUE7QUFxYkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcmNBO0FBQUE7QUFBQTtBQUFBO0FBd2NBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBaGRBO0FBQUE7QUFBQTtBQUFBO0FBbWRBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUF6ZEE7QUFBQTtBQUFBO0FBQUE7QUE0ZEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNlQTtBQUFBO0FBQUE7QUFBQTtBQThlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBeGZBO0FBQUE7QUFBQTtBQUFBO0FBMmZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBaGdCQTtBQUFBO0FBQUE7QUFBQTtBQW1nQkE7QUFJQTtBQUNBO0FBQ0E7QUF6Z0JBO0FBQUE7QUFBQTtBQUFBO0FBNGdCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBeGhCQTtBQUFBO0FBQUE7QUFBQTtBQTJoQkE7QUFDQTtBQUNBO0FBN2hCQTtBQUFBO0FBQUE7QUFBQTtBQWdpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUF0aUJBO0FBQUE7QUFBQTtBQUFBO0FBeWlCQTtBQUNBO0FBQ0E7QUFDQTtBQTVpQkE7QUFBQTtBQUFBO0FBQUE7QUEraUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZqQkE7QUFBQTtBQUFBO0FBQUE7QUEwakJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWxrQkE7QUFBQTtBQUFBO0FBQUE7QUFxa0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMWtCQTtBQUFBO0FBQUE7QUFBQTtBQTZrQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwRkE7QUF2ckJBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
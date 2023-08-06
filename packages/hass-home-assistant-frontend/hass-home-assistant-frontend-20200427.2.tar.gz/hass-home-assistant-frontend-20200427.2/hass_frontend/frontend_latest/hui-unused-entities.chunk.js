(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities"],{

/***/ "./src/panels/lovelace/common/compute-unused-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/compute-unused-entities.ts ***!
  \***************************************************************/
/*! exports provided: EXCLUDED_DOMAINS, computeUsedEntities, calcUnusedEntities, computeUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXCLUDED_DOMAINS", function() { return EXCLUDED_DOMAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeUsedEntities", function() { return computeUsedEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcUnusedEntities", function() { return calcUnusedEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeUnusedEntities", function() { return computeUnusedEntities; });
const EXCLUDED_DOMAINS = ["zone", "persistent_notification"];

const addFromAction = (entities, actionConfig) => {
  if (actionConfig.action !== "call-service" || !actionConfig.service_data || !actionConfig.service_data.entity_id) {
    return;
  }

  let entityIds = actionConfig.service_data.entity_id;

  if (!Array.isArray(entityIds)) {
    entityIds = [entityIds];
  }

  for (const entityId of entityIds) {
    entities.add(entityId);
  }
};

const addEntityId = (entities, entity) => {
  if (typeof entity === "string") {
    entities.add(entity);
    return;
  }

  if (entity.entity) {
    entities.add(entity.entity);
  }

  if (entity.camera_image) {
    entities.add(entity.camera_image);
  }

  if (entity.tap_action) {
    addFromAction(entities, entity.tap_action);
  }

  if (entity.hold_action) {
    addFromAction(entities, entity.hold_action);
  }
};

const addEntities = (entities, obj) => {
  if (obj.entity) {
    addEntityId(entities, obj.entity);
  }

  if (obj.entities && Array.isArray(obj.entities)) {
    obj.entities.forEach(entity => addEntityId(entities, entity));
  }

  if (obj.card) {
    addEntities(entities, obj.card);
  }

  if (obj.cards && Array.isArray(obj.cards)) {
    obj.cards.forEach(card => addEntities(entities, card));
  }

  if (obj.elements && Array.isArray(obj.elements)) {
    obj.elements.forEach(card => addEntities(entities, card));
  }

  if (obj.badges && Array.isArray(obj.badges)) {
    obj.badges.forEach(badge => addEntityId(entities, badge));
  }
};

const computeUsedEntities = config => {
  const entities = new Set();
  config.views.forEach(view => addEntities(entities, view));
  return entities;
};
const calcUnusedEntities = (hass, usedEntities) => {
  const unusedEntities = new Set();

  for (const entity of Object.keys(hass.states)) {
    if (!usedEntities.has(entity) && !EXCLUDED_DOMAINS.includes(entity.split(".", 1)[0])) {
      unusedEntities.add(entity);
    }
  }

  return unusedEntities;
};
const computeUnusedEntities = (hass, config) => {
  const usedEntities = computeUsedEntities(config);
  const unusedEntities = calcUnusedEntities(hass, usedEntities);
  return unusedEntities;
};

/***/ }),

/***/ "./src/panels/lovelace/editor/add-entities-to-view.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/editor/add-entities-to-view.ts ***!
  \************************************************************/
/*! exports provided: addEntitiesToLovelaceView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntitiesToLovelaceView", function() { return addEntitiesToLovelaceView; });
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/lovelace */ "./src/data/lovelace.ts");
/* harmony import */ var _card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-editor/show-suggest-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-suggest-card-dialog.ts");
/* harmony import */ var _select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-view/show-select-view-dialog */ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts");



const addEntitiesToLovelaceView = async (element, hass, entities, lovelaceConfig, saveConfigFunc) => {
  var _ref, _panels$lovelace;

  if (((_ref = (_panels$lovelace = hass.panels.lovelace) === null || _panels$lovelace === void 0 ? void 0 : _panels$lovelace.config) === null || _ref === void 0 ? void 0 : _ref.mode) === "yaml") {
    Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_1__["showSuggestCardDialog"])(element, {
      entities
    });
    return;
  }

  if (!lovelaceConfig) {
    try {
      lovelaceConfig = await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_0__["fetchConfig"])(hass.connection, null, false);
    } catch {
      alert(hass.localize("ui.panel.lovelace.editor.add_entities.generated_unsupported"));
      return;
    }
  }

  if (!lovelaceConfig.views.length) {
    alert("You don't have any Lovelace views, first create a view in Lovelace.");
    return;
  }

  if (!saveConfigFunc) {
    saveConfigFunc = async newConfig => {
      try {
        await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_0__["saveConfig"])(hass, null, newConfig);
      } catch {
        alert(hass.localize("ui.panel.config.devices.add_entities.saving_failed"));
      }
    };
  }

  if (lovelaceConfig.views.length === 1) {
    Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_1__["showSuggestCardDialog"])(element, {
      lovelaceConfig: lovelaceConfig,
      saveConfig: saveConfigFunc,
      path: [0],
      entities
    });
    return;
  }

  Object(_select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_2__["showSelectViewDialog"])(element, {
    lovelaceConfig,
    viewSelectedCallback: view => {
      Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_1__["showSuggestCardDialog"])(element, {
        lovelaceConfig: lovelaceConfig,
        saveConfig: saveConfigFunc,
        path: [view],
        entities
      });
    }
  });
};

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/show-suggest-card-dialog.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-suggest-card-dialog.ts ***!
  \****************************************************************************/
/*! exports provided: showSuggestCardDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuggestCardDialog", function() { return showSuggestCardDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


const importsuggestCardDialog = () => Promise.all(/*! import() | hui-dialog-suggest-card */[__webpack_require__.e(1), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(13), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-delete-card~hui-dialog-edit-card~hui-dialog-suggest-card~h~a8cf51a3"), __webpack_require__.e(17), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~hui-dialog-suggest-card~more-info-dialog~panel-c~e54ccf84"), __webpack_require__.e("vendors~hui-dialog-suggest-card~more-info-dialog~panel-history~panel-lovelace"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-zigbee-info~hui-dialog-suggest-card~more-info-dialog"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-lovelace"), __webpack_require__.e(14), __webpack_require__.e(18), __webpack_require__.e("hui-dialog-suggest-card~more-info-dialog~panel-config-automation~panel-config-devices~panel-lovelace"), __webpack_require__.e("hui-dialog-suggest-card~more-info-dialog~panel-history~panel-lovelace"), __webpack_require__.e("hui-dialog-save-config~hui-dialog-suggest-card~panel-config-automation~panel-config-script"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-devices~panel-lovelace"), __webpack_require__.e("hui-dialog-suggest-card~panel-lovelace"), __webpack_require__.e("hui-dialog-suggest-card")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-suggest-card */ "./src/panels/lovelace/editor/card-editor/hui-dialog-suggest-card.ts"));

const showSuggestCardDialog = (element, suggestCardDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-suggest-card",
    dialogImport: importsuggestCardDialog,
    dialogParams: suggestCardDialogParams
  });
};

/***/ }),

/***/ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts ***!
  \***************************************************************************/
/*! exports provided: showSelectViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSelectViewDialog", function() { return showSelectViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showSelectViewDialog = (element, selectViewDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-select-view",
    dialogImport: () => Promise.all(/*! import() | hui-dialog-select-view */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e("vendors~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-select-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-select-view */ "./src/panels/lovelace/editor/select-view/hui-dialog-select-view.ts")),
    dialogParams: selectViewDialogParams
  });
};

/***/ }),

/***/ "./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts ***!
  \***************************************************************************/
/*! exports provided: HuiUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiUnusedEntities", function() { return HuiUnusedEntities; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/compute-unused-entities */ "./src/panels/lovelace/common/compute-unused-entities.ts");
/* harmony import */ var _add_entities_to_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../add-entities-to-view */ "./src/panels/lovelace/editor/add-entities-to-view.ts");
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















let HuiUnusedEntities = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-unused-entities")], function (_initialize, _LitElement) {
  class HuiUnusedEntities extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiUnusedEntities,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
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
      key: "_unusedEntities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_selectedEntities",

      value() {
        return [];
      }

    }, {
      kind: "get",
      key: "_config",
      value: function _config() {
        return this.lovelace.config;
      }
    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(narrow => {
          const columns = {
            icon: {
              title: "",
              type: "icon",
              template: (_icon, entity) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <state-badge
            @click=${this._handleEntityClicked}
            .hass=${this.hass}
            .stateObj=${entity.stateObj}
          ></state-badge>
        `
            },
            name: {
              title: this.hass.localize("ui.panel.lovelace.unused_entities.entity"),
              sortable: true,
              filterable: true,
              grows: true,
              direction: "asc",
              template: (name, entity) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div @click=${this._handleEntityClicked} style="cursor: pointer;">
            ${name}
            ${narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="secondary">
                    ${entity.stateObj.entity_id}
                  </div>
                ` : ""}
          </div>
        `
            }
          };

          if (narrow) {
            return columns;
          }

          columns.entity_id = {
            title: this.hass.localize("ui.panel.lovelace.unused_entities.entity_id"),
            sortable: true,
            filterable: true,
            width: "30%"
          };
          columns.domain = {
            title: this.hass.localize("ui.panel.lovelace.unused_entities.domain"),
            sortable: true,
            filterable: true,
            width: "15%"
          };
          columns.last_changed = {
            title: this.hass.localize("ui.panel.lovelace.unused_entities.last_changed"),
            type: "numeric",
            sortable: true,
            width: "15%",
            template: lastChanged => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <ha-relative-time
          .hass=${this.hass}
          .datetime=${lastChanged}
        ></ha-relative-time>
      `
          };
          return columns;
        });
      }

    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HuiUnusedEntities.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("lovelace")) {
          this._getUnusedEntities();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.lovelace) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        if (this.lovelace.mode === "storage" && this.lovelace.editMode === false) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <ha-card
              header="${this.hass.localize("ui.panel.lovelace.unused_entities.title")}"
            >
              <div class="card-content">
                ${this.hass.localize("ui.panel.lovelace.unused_entities.available_entities")}
                ${this.lovelace.mode === "storage" ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <br />${this.hass.localize("ui.panel.lovelace.unused_entities.select_to_add")}
                    ` : ""}
              </div>
            </ha-card>
          ` : ""}
      <ha-data-table
        .columns=${this._columns(this.narrow)}
        .data=${this._unusedEntities.map(entity => {
          const stateObj = this.hass.states[entity];
          return {
            icon: "",
            entity_id: entity,
            stateObj,
            name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj),
            domain: Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__["computeDomain"])(entity),
            last_changed: stateObj.last_changed
          };
        })}
        .id=${"entity_id"}
        selectable
        @selection-changed=${this._handleSelectionChanged}
      ></ha-data-table>

      ${this._selectedEntities.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <ha-fab
              class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(this.hass)
        })}"
              icon="hass:plus"
              .label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.add")}
              @click=${this._addToLovelaceView}
            ></ha-fab>
          ` : ""}
    `;
      }
    }, {
      kind: "method",
      key: "_getUnusedEntities",
      value: function _getUnusedEntities() {
        if (!this.hass || !this.lovelace) {
          return;
        }

        this._selectedEntities = [];
        const unusedEntities = Object(_common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_12__["computeUnusedEntities"])(this.hass, this._config);
        this._unusedEntities = [...unusedEntities].sort();
      }
    }, {
      kind: "method",
      key: "_handleSelectionChanged",
      value: function _handleSelectionChanged(ev) {
        this._selectedEntities = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_handleEntityClicked",
      value: function _handleEntityClicked(ev) {
        const entityId = ev.target.closest(".mdc-data-table__row").rowId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_addToLovelaceView",
      value: function _addToLovelaceView() {
        Object(_add_entities_to_view__WEBPACK_IMPORTED_MODULE_13__["addEntitiesToLovelaceView"])(this, this.hass, this._selectedEntities, this.lovelace.config, this.lovelace.saveConfig);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        background: var(--lovelace-background);
        display: flex;
        flex-direction: column;
      }
      ha-card {
        --ha-card-box-shadow: none;
        --ha-card-border-radius: 0;
      }
      ha-data-table {
        --data-table-border-width: 0;
        flex-grow: 1;
        margin-top: -20px;
      }
      ha-fab {
        position: absolute;
        right: 16px;
        bottom: 16px;
        z-index: 1;
      }
      ha-fab.rtl {
        left: 16px;
        right: auto;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2NvbXB1dGUtdW51c2VkLWVudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2FkZC1lbnRpdGllcy10by12aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NhcmQtZWRpdG9yL3Nob3ctc3VnZ2VzdC1jYXJkLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zZWxlY3Qtdmlldy9zaG93LXNlbGVjdC12aWV3LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci91bnVzZWQtZW50aXRpZXMvaHVpLXVudXNlZC1lbnRpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25Db25maWcsIExvdmVsYWNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEVYQ0xVREVEX0RPTUFJTlMgPSBbXCJ6b25lXCIsIFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIl07XG5cbmNvbnN0IGFkZEZyb21BY3Rpb24gPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBhY3Rpb25Db25maWc6IEFjdGlvbkNvbmZpZykgPT4ge1xuICBpZiAoXG4gICAgYWN0aW9uQ29uZmlnLmFjdGlvbiAhPT0gXCJjYWxsLXNlcnZpY2VcIiB8fFxuICAgICFhY3Rpb25Db25maWcuc2VydmljZV9kYXRhIHx8XG4gICAgIWFjdGlvbkNvbmZpZy5zZXJ2aWNlX2RhdGEuZW50aXR5X2lkXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZW50aXR5SWRzID0gYWN0aW9uQ29uZmlnLnNlcnZpY2VfZGF0YS5lbnRpdHlfaWQ7XG4gIGlmICghQXJyYXkuaXNBcnJheShlbnRpdHlJZHMpKSB7XG4gICAgZW50aXR5SWRzID0gW2VudGl0eUlkc107XG4gIH1cbiAgZm9yIChjb25zdCBlbnRpdHlJZCBvZiBlbnRpdHlJZHMpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5SWQpO1xuICB9XG59O1xuXG5jb25zdCBhZGRFbnRpdHlJZCA9IChlbnRpdGllczogU2V0PHN0cmluZz4sIGVudGl0eSkgPT4ge1xuICBpZiAodHlwZW9mIGVudGl0eSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbnRpdHkuZW50aXR5KSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5lbnRpdHkpO1xuICB9XG4gIGlmIChlbnRpdHkuY2FtZXJhX2ltYWdlKSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5jYW1lcmFfaW1hZ2UpO1xuICB9XG4gIGlmIChlbnRpdHkudGFwX2FjdGlvbikge1xuICAgIGFkZEZyb21BY3Rpb24oZW50aXRpZXMsIGVudGl0eS50YXBfYWN0aW9uKTtcbiAgfVxuICBpZiAoZW50aXR5LmhvbGRfYWN0aW9uKSB7XG4gICAgYWRkRnJvbUFjdGlvbihlbnRpdGllcywgZW50aXR5LmhvbGRfYWN0aW9uKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRW50aXRpZXMgPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBvYmopID0+IHtcbiAgaWYgKG9iai5lbnRpdHkpIHtcbiAgICBhZGRFbnRpdHlJZChlbnRpdGllcywgb2JqLmVudGl0eSk7XG4gIH1cbiAgaWYgKG9iai5lbnRpdGllcyAmJiBBcnJheS5pc0FycmF5KG9iai5lbnRpdGllcykpIHtcbiAgICBvYmouZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiBhZGRFbnRpdHlJZChlbnRpdGllcywgZW50aXR5KSk7XG4gIH1cbiAgaWYgKG9iai5jYXJkKSB7XG4gICAgYWRkRW50aXRpZXMoZW50aXRpZXMsIG9iai5jYXJkKTtcbiAgfVxuICBpZiAob2JqLmNhcmRzICYmIEFycmF5LmlzQXJyYXkob2JqLmNhcmRzKSkge1xuICAgIG9iai5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiBhZGRFbnRpdGllcyhlbnRpdGllcywgY2FyZCkpO1xuICB9XG4gIGlmIChvYmouZWxlbWVudHMgJiYgQXJyYXkuaXNBcnJheShvYmouZWxlbWVudHMpKSB7XG4gICAgb2JqLmVsZW1lbnRzLmZvckVhY2goKGNhcmQpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCBjYXJkKSk7XG4gIH1cbiAgaWYgKG9iai5iYWRnZXMgJiYgQXJyYXkuaXNBcnJheShvYmouYmFkZ2VzKSkge1xuICAgIG9iai5iYWRnZXMuZm9yRWFjaCgoYmFkZ2UpID0+IGFkZEVudGl0eUlkKGVudGl0aWVzLCBiYWRnZSkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVVzZWRFbnRpdGllcyA9IChjb25maWc6IExvdmVsYWNlQ29uZmlnKTogU2V0PHN0cmluZz4gPT4ge1xuICBjb25zdCBlbnRpdGllcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25maWcudmlld3MuZm9yRWFjaCgodmlldykgPT4gYWRkRW50aXRpZXMoZW50aXRpZXMsIHZpZXcpKTtcbiAgcmV0dXJuIGVudGl0aWVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNVbnVzZWRFbnRpdGllcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdXNlZEVudGl0aWVzOiBTZXQ8c3RyaW5nPlxuKTogU2V0PHN0cmluZz4gPT4ge1xuICBjb25zdCB1bnVzZWRFbnRpdGllczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5cbiAgZm9yIChjb25zdCBlbnRpdHkgb2YgT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpKSB7XG4gICAgaWYgKFxuICAgICAgIXVzZWRFbnRpdGllcy5oYXMoZW50aXR5KSAmJlxuICAgICAgIUVYQ0xVREVEX0RPTUFJTlMuaW5jbHVkZXMoZW50aXR5LnNwbGl0KFwiLlwiLCAxKVswXSlcbiAgICApIHtcbiAgICAgIHVudXNlZEVudGl0aWVzLmFkZChlbnRpdHkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bnVzZWRFbnRpdGllcztcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlVW51c2VkRW50aXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmZpZzogTG92ZWxhY2VDb25maWdcbik6IFNldDxzdHJpbmc+ID0+IHtcbiAgY29uc3QgdXNlZEVudGl0aWVzID0gY29tcHV0ZVVzZWRFbnRpdGllcyhjb25maWcpO1xuICBjb25zdCB1bnVzZWRFbnRpdGllcyA9IGNhbGNVbnVzZWRFbnRpdGllcyhoYXNzLCB1c2VkRW50aXRpZXMpO1xuICByZXR1cm4gdW51c2VkRW50aXRpZXM7XG59O1xuIiwiaW1wb3J0IHtcbiAgZmV0Y2hDb25maWcsXG4gIExvdmVsYWNlQ29uZmlnLFxuICBzYXZlQ29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2hvd1N1Z2dlc3RDYXJkRGlhbG9nIH0gZnJvbSBcIi4vY2FyZC1lZGl0b3Ivc2hvdy1zdWdnZXN0LWNhcmQtZGlhbG9nXCI7XG5pbXBvcnQgeyBzaG93U2VsZWN0Vmlld0RpYWxvZyB9IGZyb20gXCIuL3NlbGVjdC12aWV3L3Nob3ctc2VsZWN0LXZpZXctZGlhbG9nXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRFbnRpdGllc1RvTG92ZWxhY2VWaWV3ID0gYXN5bmMgKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXRpZXM6IHN0cmluZ1tdLFxuICBsb3ZlbGFjZUNvbmZpZz86IExvdmVsYWNlQ29uZmlnLFxuICBzYXZlQ29uZmlnRnVuYz86IChuZXdDb25maWc6IExvdmVsYWNlQ29uZmlnKSA9PiB2b2lkXG4pID0+IHtcbiAgaWYgKChoYXNzIS5wYW5lbHMubG92ZWxhY2U/LmNvbmZpZyBhcyBhbnkpPy5tb2RlID09PSBcInlhbWxcIikge1xuICAgIHNob3dTdWdnZXN0Q2FyZERpYWxvZyhlbGVtZW50LCB7XG4gICAgICBlbnRpdGllcyxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFsb3ZlbGFjZUNvbmZpZykge1xuICAgIHRyeSB7XG4gICAgICBsb3ZlbGFjZUNvbmZpZyA9IGF3YWl0IGZldGNoQ29uZmlnKGhhc3MuY29ubmVjdGlvbiwgbnVsbCwgZmFsc2UpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgYWxlcnQoXG4gICAgICAgIGhhc3MubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuYWRkX2VudGl0aWVzLmdlbmVyYXRlZF91bnN1cHBvcnRlZFwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmICghbG92ZWxhY2VDb25maWcudmlld3MubGVuZ3RoKSB7XG4gICAgYWxlcnQoXG4gICAgICBcIllvdSBkb24ndCBoYXZlIGFueSBMb3ZlbGFjZSB2aWV3cywgZmlyc3QgY3JlYXRlIGEgdmlldyBpbiBMb3ZlbGFjZS5cIlxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghc2F2ZUNvbmZpZ0Z1bmMpIHtcbiAgICBzYXZlQ29uZmlnRnVuYyA9IGFzeW5jIChuZXdDb25maWc6IExvdmVsYWNlQ29uZmlnKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzYXZlQ29uZmlnKGhhc3MhLCBudWxsLCBuZXdDb25maWcpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIGhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuZGV2aWNlcy5hZGRfZW50aXRpZXMuc2F2aW5nX2ZhaWxlZFwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgaWYgKGxvdmVsYWNlQ29uZmlnLnZpZXdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHNob3dTdWdnZXN0Q2FyZERpYWxvZyhlbGVtZW50LCB7XG4gICAgICBsb3ZlbGFjZUNvbmZpZzogbG92ZWxhY2VDb25maWchLFxuICAgICAgc2F2ZUNvbmZpZzogc2F2ZUNvbmZpZ0Z1bmMsXG4gICAgICBwYXRoOiBbMF0sXG4gICAgICBlbnRpdGllcyxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgc2hvd1NlbGVjdFZpZXdEaWFsb2coZWxlbWVudCwge1xuICAgIGxvdmVsYWNlQ29uZmlnLFxuICAgIHZpZXdTZWxlY3RlZENhbGxiYWNrOiAodmlldykgPT4ge1xuICAgICAgc2hvd1N1Z2dlc3RDYXJkRGlhbG9nKGVsZW1lbnQsIHtcbiAgICAgICAgbG92ZWxhY2VDb25maWc6IGxvdmVsYWNlQ29uZmlnISxcbiAgICAgICAgc2F2ZUNvbmZpZzogc2F2ZUNvbmZpZ0Z1bmMsXG4gICAgICAgIHBhdGg6IFt2aWV3XSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRDb25maWcsIExvdmVsYWNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0Q2FyZERpYWxvZ1BhcmFtcyB7XG4gIGxvdmVsYWNlQ29uZmlnPzogTG92ZWxhY2VDb25maWc7XG4gIHNhdmVDb25maWc/OiAoY29uZmlnOiBMb3ZlbGFjZUNvbmZpZykgPT4gdm9pZDtcbiAgcGF0aD86IFtudW1iZXJdO1xuICBlbnRpdGllczogc3RyaW5nW107IC8vIFdlIGNhbiBwYXNzIGVudGl0eSBpZCdzIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgY29uZmlnIHdoZW4gYSBjYXJkIGlzIHBpY2tlZFxuICBjYXJkQ29uZmlnPzogTG92ZWxhY2VDYXJkQ29uZmlnW107IC8vIFdlIGNhbiBwYXNzIGEgc3VnZ2VzdGVkIGNvbmZpZ1xufVxuXG5jb25zdCBpbXBvcnRzdWdnZXN0Q2FyZERpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1kaWFsb2ctc3VnZ2VzdC1jYXJkXCIgKi8gXCIuL2h1aS1kaWFsb2ctc3VnZ2VzdC1jYXJkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNob3dTdWdnZXN0Q2FyZERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN1Z2dlc3RDYXJkRGlhbG9nUGFyYW1zOiBTdWdnZXN0Q2FyZERpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiaHVpLWRpYWxvZy1zdWdnZXN0LWNhcmRcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGltcG9ydHN1Z2dlc3RDYXJkRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3VnZ2VzdENhcmREaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RWaWV3RGlhbG9nUGFyYW1zIHtcbiAgbG92ZWxhY2VDb25maWc6IExvdmVsYWNlQ29uZmlnO1xuICB2aWV3U2VsZWN0ZWRDYWxsYmFjazogKHZpZXc6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dTZWxlY3RWaWV3RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc2VsZWN0Vmlld0RpYWxvZ1BhcmFtczogU2VsZWN0Vmlld0RpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJodWktZGlhbG9nLXNlbGVjdC12aWV3XCIgKi8gXCIuL2h1aS1kaWFsb2ctc2VsZWN0LXZpZXdcIlxuICAgICAgKSxcbiAgICBkaWFsb2dQYXJhbXM6IHNlbGVjdFZpZXdEaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCwgSEFTU0RvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHR5cGUge1xuICBEYXRhVGFibGVDb2x1bW5Db250YWluZXIsXG4gIFNlbGVjdGlvbkNoYW5nZWRFdmVudCxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgdHlwZSB7IExvdmVsYWNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVVudXNlZEVudGl0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wdXRlLXVudXNlZC1lbnRpdGllc1wiO1xuaW1wb3J0IHR5cGUgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgYWRkRW50aXRpZXNUb0xvdmVsYWNlVmlldyB9IGZyb20gXCIuLi9hZGQtZW50aXRpZXMtdG8tdmlld1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS11bnVzZWQtZW50aXRpZXNcIilcbmV4cG9ydCBjbGFzcyBIdWlVbnVzZWRFbnRpdGllcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbG92ZWxhY2U/OiBMb3ZlbGFjZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdz86IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdW51c2VkRW50aXRpZXM6IHN0cmluZ1tdID0gW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRFbnRpdGllczogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIGdldCBfY29uZmlnKCk6IExvdmVsYWNlQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5sb3ZlbGFjZSEuY29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29sdW1ucyA9IG1lbW9pemVPbmUoKG5hcnJvdzogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9IHtcbiAgICAgIGljb246IHtcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiaWNvblwiLFxuICAgICAgICB0ZW1wbGF0ZTogKF9pY29uLCBlbnRpdHk6IGFueSkgPT4gaHRtbGBcbiAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZUVudGl0eUNsaWNrZWR9XG4gICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzcyF9XG4gICAgICAgICAgICAuc3RhdGVPYmo9JHtlbnRpdHkuc3RhdGVPYmp9XG4gICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB0aXRsZTogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLnVudXNlZF9lbnRpdGllcy5lbnRpdHlcIiksXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICBncm93czogdHJ1ZSxcbiAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICB0ZW1wbGF0ZTogKG5hbWUsIGVudGl0eTogYW55KSA9PiBodG1sYFxuICAgICAgICAgIDxkaXYgQGNsaWNrPSR7dGhpcy5faGFuZGxlRW50aXR5Q2xpY2tlZH0gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+XG4gICAgICAgICAgICAke25hbWV9XG4gICAgICAgICAgICAke25hcnJvd1xuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZW50aXR5LnN0YXRlT2JqLmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKG5hcnJvdykge1xuICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29sdW1ucy5lbnRpdHlfaWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLnVudXNlZF9lbnRpdGllcy5lbnRpdHlfaWRcIiksXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICB3aWR0aDogXCIzMCVcIixcbiAgICB9O1xuICAgIGNvbHVtbnMuZG9tYWluID0ge1xuICAgICAgdGl0bGU6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5sb3ZlbGFjZS51bnVzZWRfZW50aXRpZXMuZG9tYWluXCIpLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgd2lkdGg6IFwiMTUlXCIsXG4gICAgfTtcbiAgICBjb2x1bW5zLmxhc3RfY2hhbmdlZCA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLnVudXNlZF9lbnRpdGllcy5sYXN0X2NoYW5nZWRcIlxuICAgICAgKSxcbiAgICAgIHR5cGU6IFwibnVtZXJpY1wiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICB3aWR0aDogXCIxNSVcIixcbiAgICAgIHRlbXBsYXRlOiAobGFzdENoYW5nZWQ6IHN0cmluZykgPT4gaHRtbGBcbiAgICAgICAgPGhhLXJlbGF0aXZlLXRpbWVcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzcyF9XG4gICAgICAgICAgLmRhdGV0aW1lPSR7bGFzdENoYW5nZWR9XG4gICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICBgLFxuICAgIH07XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwibG92ZWxhY2VcIikpIHtcbiAgICAgIHRoaXMuX2dldFVudXNlZEVudGl0aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMubG92ZWxhY2UpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG92ZWxhY2UubW9kZSA9PT0gXCJzdG9yYWdlXCIgJiYgdGhpcy5sb3ZlbGFjZS5lZGl0TW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAkeyF0aGlzLm5hcnJvd1xuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgICAgICBoZWFkZXI9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLnVudXNlZF9lbnRpdGllcy50aXRsZVwiXG4gICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS51bnVzZWRfZW50aXRpZXMuYXZhaWxhYmxlX2VudGl0aWVzXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICR7dGhpcy5sb3ZlbGFjZS5tb2RlID09PSBcInN0b3JhZ2VcIlxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS51bnVzZWRfZW50aXRpZXMuc2VsZWN0X3RvX2FkZFwiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICAgIDxoYS1kYXRhLXRhYmxlXG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLm5hcnJvdyEpfVxuICAgICAgICAuZGF0YT0ke3RoaXMuX3VudXNlZEVudGl0aWVzLm1hcCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3MhLnN0YXRlc1tlbnRpdHldO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgZW50aXR5X2lkOiBlbnRpdHksXG4gICAgICAgICAgICBzdGF0ZU9iaixcbiAgICAgICAgICAgIG5hbWU6IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopLFxuICAgICAgICAgICAgZG9tYWluOiBjb21wdXRlRG9tYWluKGVudGl0eSksXG4gICAgICAgICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlT2JqIS5sYXN0X2NoYW5nZWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSl9XG4gICAgICAgIC5pZD0ke1wiZW50aXR5X2lkXCJ9XG4gICAgICAgIHNlbGVjdGFibGVcbiAgICAgICAgQHNlbGVjdGlvbi1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlU2VsZWN0aW9uQ2hhbmdlZH1cbiAgICAgID48L2hhLWRhdGEtdGFibGU+XG5cbiAgICAgICR7dGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5sZW5ndGhcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLWZhYlxuICAgICAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLmhhc3MpLFxuICAgICAgICAgICAgICB9KX1cIlxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5hZGRcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9hZGRUb0xvdmVsYWNlVmlld31cbiAgICAgICAgICAgID48L2hhLWZhYj5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VW51c2VkRW50aXRpZXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMubG92ZWxhY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcyA9IFtdO1xuICAgIGNvbnN0IHVudXNlZEVudGl0aWVzID0gY29tcHV0ZVVudXNlZEVudGl0aWVzKHRoaXMuaGFzcywgdGhpcy5fY29uZmlnISk7XG4gICAgdGhpcy5fdW51c2VkRW50aXRpZXMgPSBbLi4udW51c2VkRW50aXRpZXNdLnNvcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNlbGVjdGlvbkNoYW5nZWQoXG4gICAgZXY6IEhBU1NEb21FdmVudDxTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFbnRpdHlDbGlja2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoXG4gICAgICBcIi5tZGMtZGF0YS10YWJsZV9fcm93XCJcbiAgICApIGFzIGFueSkucm93SWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRUb0xvdmVsYWNlVmlldygpOiB2b2lkIHtcbiAgICBhZGRFbnRpdGllc1RvTG92ZWxhY2VWaWV3KFxuICAgICAgdGhpcyxcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMsXG4gICAgICB0aGlzLmxvdmVsYWNlIS5jb25maWcsXG4gICAgICB0aGlzLmxvdmVsYWNlIS5zYXZlQ29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbG92ZWxhY2UtYmFja2dyb3VuZCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgLS1oYS1jYXJkLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIC0taGEtY2FyZC1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgfVxuICAgICAgaGEtZGF0YS10YWJsZSB7XG4gICAgICAgIC0tZGF0YS10YWJsZS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICB9XG4gICAgICBoYS1mYWIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgICBoYS1mYWIucnRsIHtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXVudXNlZC1lbnRpdGllc1wiOiBIdWlVbnVzZWRFbnRpdGllcztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVRBO0FBV0E7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUEsaWxEQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFJQTtBQUNBO0FBQ0EsbW1CQUVBO0FBRUE7QUFOQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTs7QUFIQTs7O0FBVEE7QUFaQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQVZBO0FBZUE7QUFDQTtBQWpGQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekZBO0FBQUE7QUFBQTtBQUFBO0FBNEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOzs7QUFLQTtBQUdBO0FBRUE7QUFGQTs7O0FBWEE7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFHQTtBQUNBO0FBREE7O0FBSUE7QUFHQTs7QUFWQTtBQXpDQTtBQXdEQTtBQTVKQTtBQUFBO0FBQUE7QUFBQTtBQStKQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcktBO0FBQUE7QUFBQTtBQUFBO0FBMEtBO0FBQ0E7QUEzS0E7QUFBQTtBQUFBO0FBQUE7QUE4S0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQXBMQTtBQUFBO0FBQUE7QUFBQTtBQXVMQTtBQU9BO0FBOUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBCQTtBQTNOQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
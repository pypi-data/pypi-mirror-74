(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[77],{

/***/ "./src/panels/lovelace/cards/hui-picture-glance-card.ts":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-glance-card.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_find_entites__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/find-entites */ "./src/panels/lovelace/common/find-entites.ts");
/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/handle-action */ "./src/panels/lovelace/common/handle-action.ts");
/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/has-action */ "./src/panels/lovelace/common/has-action.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _components_hui_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/hui-image */ "./src/panels/lovelace/components/hui-image.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
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




















const STATES_OFF = new Set(["closed", "locked", "not_home", "off"]);

let HuiPictureGlanceCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-picture-glance-card")], function (_initialize, _LitElement) {
  class HuiPictureGlanceCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiPictureGlanceCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-picture-glance-card-editor */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-delete-card~hui-dialog-edit-card~hui-dialog-suggest-card~h~a8cf51a3"), __webpack_require__.e("vendors~hui-picture-glance-card-editor"), __webpack_require__.e(10), __webpack_require__.e("hui-alarm-panel-card-editor~hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui~192a43f6"), __webpack_require__.e("hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-card-editor~hui-gaug~aa2f21d6"), __webpack_require__.e("hui-button-card-editor~hui-entity-card-editor~hui-light-card-editor~hui-picture-card-editor~hui-pict~6832566a"), __webpack_require__.e("hui-picture-glance-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-picture-glance-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-picture-glance-card-editor.ts"));
        return document.createElement("hui-picture-glance-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig(hass, entities, entitiesFallback) {
        const maxEntities = 2;
        const foundEntities = Object(_common_find_entites__WEBPACK_IMPORTED_MODULE_12__["findEntities"])(hass, maxEntities, entities, entitiesFallback, ["sensor", "binary_sensor"]);
        return {
          type: "picture-glance",
          title: "Kitchen",
          image: "https://demo.home-assistant.io/stub_config/kitchen.png",
          entities: foundEntities
        };
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      key: "_entitiesDialog",
      value: void 0
    }, {
      kind: "field",
      key: "_entitiesToggle",
      value: void 0
    }, {
      kind: "method",
      key: "getCardSize",
      value: function getCardSize() {
        return 3;
      }
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config || !config.entities || !Array.isArray(config.entities) || !(config.image || config.camera_image || config.state_image) || config.state_image && !config.entity) {
          throw new Error("Invalid card configuration");
        }

        const entities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_16__["processConfigEntities"])(config.entities);
        this._entitiesDialog = [];
        this._entitiesToggle = [];
        entities.forEach(item => {
          if (config.force_dialog || !_common_const__WEBPACK_IMPORTED_MODULE_3__["DOMAINS_TOGGLE"].has(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_5__["computeDomain"])(item.entity))) {
            this._entitiesDialog.push(item);
          } else {
            this._entitiesToggle.push(item);
          }
        });
        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_15__["hasConfigOrEntityChanged"])(this, changedProps)) {
          return true;
        }

        const oldHass = changedProps.get("hass");

        if (!oldHass || oldHass.themes !== this.hass.themes || oldHass.language !== this.hass.language) {
          return true;
        }

        if (this._entitiesDialog) {
          for (const entity of this._entitiesDialog) {
            if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
              return true;
            }
          }
        }

        if (this._entitiesToggle) {
          for (const entity of this._entitiesToggle) {
            if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
              return true;
            }
          }
        }

        return false;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiPictureGlanceCard.prototype), "updated", this).call(this, changedProps);

        if (!this._config || !this.hass) {
          return;
        }

        const oldHass = changedProps.get("hass");
        const oldConfig = changedProps.get("_config");

        if (!oldHass || !oldConfig || oldHass.themes !== this.hass.themes || oldConfig.theme !== this._config.theme) {
          Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_4__["applyThemesOnElement"])(this, this.hass.themes, this._config.theme);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card>
        <hui-image
          class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          clickable: Boolean(this._config.tap_action || this._config.hold_action || this._config.camera_image)
        })}
          @action=${this._handleAction}
          .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_11__["actionHandler"])({
          hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_14__["hasAction"])(this._config.hold_action),
          hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_14__["hasAction"])(this._config.double_tap_action)
        })}
          tabindex=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_2__["ifDefined"])(Object(_common_has_action__WEBPACK_IMPORTED_MODULE_14__["hasAction"])(this._config.tap_action) ? "0" : undefined)}
          .config=${this._config}
          .hass=${this.hass}
          .image=${this._config.image}
          .stateImage=${this._config.state_image}
          .stateFilter=${this._config.state_filter}
          .cameraImage=${this._config.camera_image}
          .cameraView=${this._config.camera_view}
          .entity=${this._config.entity}
          .aspectRatio=${this._config.aspect_ratio}
        ></hui-image>
        <div class="box">
          ${this._config.title ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <div class="title">${this._config.title}</div> ` : ""}
          <div class="row">
            ${this._entitiesDialog.map(entityConf => this.renderEntity(entityConf, true))}
          </div>
          <div class="row">
            ${this._entitiesToggle.map(entityConf => this.renderEntity(entityConf, false))}
          </div>
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "renderEntity",
      value: function renderEntity(entityConf, dialog) {
        const stateObj = this.hass.states[entityConf.entity];
        entityConf = Object.assign({
          tap_action: {
            action: dialog ? "more-info" : "toggle"
          }
        }, entityConf);

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", entityConf.entity)}
        ></hui-warning-element>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="wrapper">
        <ha-icon
          @action=${this._handleAction}
          .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_11__["actionHandler"])({
          hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_14__["hasAction"])(entityConf.hold_action),
          hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_14__["hasAction"])(entityConf.double_tap_action)
        })}
          tabindex=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_2__["ifDefined"])(Object(_common_has_action__WEBPACK_IMPORTED_MODULE_14__["hasAction"])(entityConf.tap_action) ? "0" : undefined)}
          .config=${entityConf}
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          "state-on": !STATES_OFF.has(stateObj.state)
        })}"
          .icon="${entityConf.icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_8__["stateIcon"])(stateObj)}"
          title="${`
            ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj)} : ${Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)}
          `}"
        ></ha-icon>
        ${this._config.show_state !== true && entityConf.show_state !== true ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <div class="state"></div> ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="state">
                ${entityConf.attribute ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      ${entityConf.prefix}${stateObj.attributes[entityConf.attribute]}${entityConf.suffix}
                    ` : Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)}
              </div>
            `}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_handleAction",
      value: function _handleAction(ev) {
        const config = ev.currentTarget.config;
        Object(_common_handle_action__WEBPACK_IMPORTED_MODULE_13__["handleAction"])(this, this.hass, config, ev.detail.action);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-card {
        position: relative;
        min-height: 48px;
        overflow: hidden;
      }

      hui-image.clickable {
        cursor: pointer;
      }

      .box {
        /* start paper-font-common-nowrap style */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* end paper-font-common-nowrap style */

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 4px 8px;
        font-size: 16px;
        line-height: 40px;
        color: white;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
      }

      .box .title {
        font-weight: 500;
        margin-left: 8px;
      }

      ha-icon {
        cursor: pointer;
        padding: 8px;
        color: #a9a9a9;
      }

      ha-icon.state-on {
        color: white;
      }
      ha-icon.show-state {
        width: 20px;
        height: 20px;
        padding-bottom: 4px;
        padding-top: 4px;
      }
      ha-icon:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
      .state {
        display: block;
        font-size: 12px;
        text-align: center;
        line-height: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .row {
        display: flex;
        flex-direction: row;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        width: 40px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1waWN0dXJlLWdsYW5jZS1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkXCI7XG5pbXBvcnQgeyBET01BSU5TX1RPR0dMRSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RcIjtcbmltcG9ydCB7IGFwcGx5VGhlbWVzT25FbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRGlzcGxheSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZGlzcGxheVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgc3RhdGVJY29uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7IEFjdGlvbkhhbmRsZXJFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBhY3Rpb25IYW5kbGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9kaXJlY3RpdmVzL2FjdGlvbi1oYW5kbGVyLWRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgZmluZEVudGl0aWVzIH0gZnJvbSBcIi4uL2NvbW1vbi9maW5kLWVudGl0ZXNcIjtcbmltcG9ydCB7IGhhbmRsZUFjdGlvbiB9IGZyb20gXCIuLi9jb21tb24vaGFuZGxlLWFjdGlvblwiO1xuaW1wb3J0IHsgaGFzQWN0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtYWN0aW9uXCI7XG5pbXBvcnQgeyBoYXNDb25maWdPckVudGl0eUNoYW5nZWQgfSBmcm9tIFwiLi4vY29tbW9uL2hhcy1jaGFuZ2VkXCI7XG5pbXBvcnQgeyBwcm9jZXNzQ29uZmlnRW50aXRpZXMgfSBmcm9tIFwiLi4vY29tbW9uL3Byb2Nlc3MtY29uZmlnLWVudGl0aWVzXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS1pbWFnZVwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktd2FybmluZy1lbGVtZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmQsIExvdmVsYWNlQ2FyZEVkaXRvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgUGljdHVyZUdsYW5jZUNhcmRDb25maWcsIFBpY3R1cmVHbGFuY2VFbnRpdHlDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBTVEFURVNfT0ZGID0gbmV3IFNldChbXCJjbG9zZWRcIiwgXCJsb2NrZWRcIiwgXCJub3RfaG9tZVwiLCBcIm9mZlwiXSk7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLXBpY3R1cmUtZ2xhbmNlLWNhcmRcIilcbmNsYXNzIEh1aVBpY3R1cmVHbGFuY2VDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCBpbXBsZW1lbnRzIExvdmVsYWNlQ2FyZCB7XG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q29uZmlnRWxlbWVudCgpOiBQcm9taXNlPExvdmVsYWNlQ2FyZEVkaXRvcj4ge1xuICAgIGF3YWl0IGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLXBpY3R1cmUtZ2xhbmNlLWNhcmQtZWRpdG9yXCIgKi8gXCIuLi9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1waWN0dXJlLWdsYW5jZS1jYXJkLWVkaXRvclwiXG4gICAgKTtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh1aS1waWN0dXJlLWdsYW5jZS1jYXJkLWVkaXRvclwiKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R1YkNvbmZpZyhcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGVudGl0aWVzOiBzdHJpbmdbXSxcbiAgICBlbnRpdGllc0ZhbGxiYWNrOiBzdHJpbmdbXVxuICApOiBQaWN0dXJlR2xhbmNlQ2FyZENvbmZpZyB7XG4gICAgY29uc3QgbWF4RW50aXRpZXMgPSAyO1xuICAgIGNvbnN0IGZvdW5kRW50aXRpZXMgPSBmaW5kRW50aXRpZXMoXG4gICAgICBoYXNzLFxuICAgICAgbWF4RW50aXRpZXMsXG4gICAgICBlbnRpdGllcyxcbiAgICAgIGVudGl0aWVzRmFsbGJhY2ssXG4gICAgICBbXCJzZW5zb3JcIiwgXCJiaW5hcnlfc2Vuc29yXCJdXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcInBpY3R1cmUtZ2xhbmNlXCIsXG4gICAgICB0aXRsZTogXCJLaXRjaGVuXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2RlbW8uaG9tZS1hc3Npc3RhbnQuaW8vc3R1Yl9jb25maWcva2l0Y2hlbi5wbmdcIixcbiAgICAgIGVudGl0aWVzOiBmb3VuZEVudGl0aWVzLFxuICAgIH07XG4gIH1cblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogUGljdHVyZUdsYW5jZUNhcmRDb25maWc7XG5cbiAgcHJpdmF0ZSBfZW50aXRpZXNEaWFsb2c/OiBQaWN0dXJlR2xhbmNlRW50aXR5Q29uZmlnW107XG5cbiAgcHJpdmF0ZSBfZW50aXRpZXNUb2dnbGU/OiBQaWN0dXJlR2xhbmNlRW50aXR5Q29uZmlnW107XG5cbiAgcHVibGljIGdldENhcmRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDM7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogUGljdHVyZUdsYW5jZUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhY29uZmlnIHx8XG4gICAgICAhY29uZmlnLmVudGl0aWVzIHx8XG4gICAgICAhQXJyYXkuaXNBcnJheShjb25maWcuZW50aXRpZXMpIHx8XG4gICAgICAhKGNvbmZpZy5pbWFnZSB8fCBjb25maWcuY2FtZXJhX2ltYWdlIHx8IGNvbmZpZy5zdGF0ZV9pbWFnZSkgfHxcbiAgICAgIChjb25maWcuc3RhdGVfaW1hZ2UgJiYgIWNvbmZpZy5lbnRpdHkpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNhcmQgY29uZmlndXJhdGlvblwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRpdGllcyA9IHByb2Nlc3NDb25maWdFbnRpdGllcyhjb25maWcuZW50aXRpZXMpO1xuICAgIHRoaXMuX2VudGl0aWVzRGlhbG9nID0gW107XG4gICAgdGhpcy5fZW50aXRpZXNUb2dnbGUgPSBbXTtcblxuICAgIGVudGl0aWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY29uZmlnLmZvcmNlX2RpYWxvZyB8fFxuICAgICAgICAhRE9NQUlOU19UT0dHTEUuaGFzKGNvbXB1dGVEb21haW4oaXRlbS5lbnRpdHkpKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzRGlhbG9nIS5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZW50aXRpZXNUb2dnbGUhLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkKHRoaXMsIGNoYW5nZWRQcm9wcykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgIW9sZEhhc3MgfHxcbiAgICAgIG9sZEhhc3MudGhlbWVzICE9PSB0aGlzLmhhc3MhLnRoZW1lcyB8fFxuICAgICAgb2xkSGFzcy5sYW5ndWFnZSAhPT0gdGhpcy5oYXNzIS5sYW5ndWFnZVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VudGl0aWVzRGlhbG9nKSB7XG4gICAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiB0aGlzLl9lbnRpdGllc0RpYWxvZykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb2xkSGFzcyEuc3RhdGVzW2VudGl0eS5lbnRpdHldICE9PSB0aGlzLmhhc3MhLnN0YXRlc1tlbnRpdHkuZW50aXR5XVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbnRpdGllc1RvZ2dsZSkge1xuICAgICAgZm9yIChjb25zdCBlbnRpdHkgb2YgdGhpcy5fZW50aXRpZXNUb2dnbGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG9sZEhhc3MhLnN0YXRlc1tlbnRpdHkuZW50aXR5XSAhPT0gdGhpcy5oYXNzIS5zdGF0ZXNbZW50aXR5LmVudGl0eV1cbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgb2xkQ29uZmlnID0gY2hhbmdlZFByb3BzLmdldChcIl9jb25maWdcIikgYXNcbiAgICAgIHwgUGljdHVyZUdsYW5jZUNhcmRDb25maWdcbiAgICAgIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgIW9sZEhhc3MgfHxcbiAgICAgICFvbGRDb25maWcgfHxcbiAgICAgIG9sZEhhc3MudGhlbWVzICE9PSB0aGlzLmhhc3MudGhlbWVzIHx8XG4gICAgICBvbGRDb25maWcudGhlbWUgIT09IHRoaXMuX2NvbmZpZy50aGVtZVxuICAgICkge1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQodGhpcywgdGhpcy5oYXNzLnRoZW1lcywgdGhpcy5fY29uZmlnLnRoZW1lKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxodWktaW1hZ2VcbiAgICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICAgIGNsaWNrYWJsZTogQm9vbGVhbihcbiAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLnRhcF9hY3Rpb24gfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWcuaG9sZF9hY3Rpb24gfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWcuY2FtZXJhX2ltYWdlXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIEBhY3Rpb249JHt0aGlzLl9oYW5kbGVBY3Rpb259XG4gICAgICAgICAgLmFjdGlvbkhhbmRsZXI9JHthY3Rpb25IYW5kbGVyKHtcbiAgICAgICAgICAgIGhhc0hvbGQ6IGhhc0FjdGlvbih0aGlzLl9jb25maWchLmhvbGRfYWN0aW9uKSxcbiAgICAgICAgICAgIGhhc0RvdWJsZUNsaWNrOiBoYXNBY3Rpb24odGhpcy5fY29uZmlnIS5kb3VibGVfdGFwX2FjdGlvbiksXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgdGFiaW5kZXg9JHtpZkRlZmluZWQoXG4gICAgICAgICAgICBoYXNBY3Rpb24odGhpcy5fY29uZmlnLnRhcF9hY3Rpb24pID8gXCIwXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICApfVxuICAgICAgICAgIC5jb25maWc9JHt0aGlzLl9jb25maWd9XG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLmltYWdlPSR7dGhpcy5fY29uZmlnLmltYWdlfVxuICAgICAgICAgIC5zdGF0ZUltYWdlPSR7dGhpcy5fY29uZmlnLnN0YXRlX2ltYWdlfVxuICAgICAgICAgIC5zdGF0ZUZpbHRlcj0ke3RoaXMuX2NvbmZpZy5zdGF0ZV9maWx0ZXJ9XG4gICAgICAgICAgLmNhbWVyYUltYWdlPSR7dGhpcy5fY29uZmlnLmNhbWVyYV9pbWFnZX1cbiAgICAgICAgICAuY2FtZXJhVmlldz0ke3RoaXMuX2NvbmZpZy5jYW1lcmFfdmlld31cbiAgICAgICAgICAuZW50aXR5PSR7dGhpcy5fY29uZmlnLmVudGl0eX1cbiAgICAgICAgICAuYXNwZWN0UmF0aW89JHt0aGlzLl9jb25maWcuYXNwZWN0X3JhdGlvfVxuICAgICAgICA+PC9odWktaW1hZ2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAke3RoaXMuX2NvbmZpZy50aXRsZVxuICAgICAgICAgICAgPyBodG1sYCA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RoaXMuX2NvbmZpZy50aXRsZX08L2Rpdj4gYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICR7dGhpcy5fZW50aXRpZXNEaWFsb2chLm1hcCgoZW50aXR5Q29uZikgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFbnRpdHkoZW50aXR5Q29uZiwgdHJ1ZSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgJHt0aGlzLl9lbnRpdGllc1RvZ2dsZSEubWFwKChlbnRpdHlDb25mKSA9PlxuICAgICAgICAgICAgICB0aGlzLnJlbmRlckVudGl0eShlbnRpdHlDb25mLCBmYWxzZSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckVudGl0eShcbiAgICBlbnRpdHlDb25mOiBQaWN0dXJlR2xhbmNlRW50aXR5Q29uZmlnLFxuICAgIGRpYWxvZzogYm9vbGVhblxuICApOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3MhLnN0YXRlc1tlbnRpdHlDb25mLmVudGl0eV07XG5cbiAgICBlbnRpdHlDb25mID0ge1xuICAgICAgdGFwX2FjdGlvbjogeyBhY3Rpb246IGRpYWxvZyA/IFwibW9yZS1pbmZvXCIgOiBcInRvZ2dsZVwiIH0sXG4gICAgICAuLi5lbnRpdHlDb25mLFxuICAgIH07XG5cbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGh1aS13YXJuaW5nLWVsZW1lbnRcbiAgICAgICAgICBsYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLndhcm5pbmcuZW50aXR5X25vdF9mb3VuZFwiLFxuICAgICAgICAgICAgXCJlbnRpdHlcIixcbiAgICAgICAgICAgIGVudGl0eUNvbmYuZW50aXR5XG4gICAgICAgICAgKX1cbiAgICAgICAgPjwvaHVpLXdhcm5pbmctZWxlbWVudD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8aGEtaWNvblxuICAgICAgICAgIEBhY3Rpb249JHt0aGlzLl9oYW5kbGVBY3Rpb259XG4gICAgICAgICAgLmFjdGlvbkhhbmRsZXI9JHthY3Rpb25IYW5kbGVyKHtcbiAgICAgICAgICAgIGhhc0hvbGQ6IGhhc0FjdGlvbihlbnRpdHlDb25mLmhvbGRfYWN0aW9uKSxcbiAgICAgICAgICAgIGhhc0RvdWJsZUNsaWNrOiBoYXNBY3Rpb24oZW50aXR5Q29uZi5kb3VibGVfdGFwX2FjdGlvbiksXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgdGFiaW5kZXg9JHtpZkRlZmluZWQoXG4gICAgICAgICAgICBoYXNBY3Rpb24oZW50aXR5Q29uZi50YXBfYWN0aW9uKSA/IFwiMFwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgKX1cbiAgICAgICAgICAuY29uZmlnPSR7ZW50aXR5Q29uZn1cbiAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgXCJzdGF0ZS1vblwiOiAhU1RBVEVTX09GRi5oYXMoc3RhdGVPYmouc3RhdGUpLFxuICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgLmljb249XCIke2VudGl0eUNvbmYuaWNvbiB8fCBzdGF0ZUljb24oc3RhdGVPYmopfVwiXG4gICAgICAgICAgdGl0bGU9XCIke2BcbiAgICAgICAgICAgICR7Y29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iail9IDogJHtjb21wdXRlU3RhdGVEaXNwbGF5KFxuICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZSxcbiAgICAgICAgICAgIHN0YXRlT2JqLFxuICAgICAgICAgICAgdGhpcy5oYXNzIS5sYW5ndWFnZVxuICAgICAgICAgICl9XG4gICAgICAgICAgYH1cIlxuICAgICAgICA+PC9oYS1pY29uPlxuICAgICAgICAke3RoaXMuX2NvbmZpZyEuc2hvd19zdGF0ZSAhPT0gdHJ1ZSAmJiBlbnRpdHlDb25mLnNob3dfc3RhdGUgIT09IHRydWVcbiAgICAgICAgICA/IGh0bWxgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiPjwvZGl2PiBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAke2VudGl0eUNvbmYuYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgJHtlbnRpdHlDb25mLnByZWZpeH0ke3N0YXRlT2JqLmF0dHJpYnV0ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlDb25mLmF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgIF19JHtlbnRpdHlDb25mLnN1ZmZpeH1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBjb21wdXRlU3RhdGVEaXNwbGF5KFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGVPYmosXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sYW5ndWFnZVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGB9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQWN0aW9uKGV2OiBBY3Rpb25IYW5kbGVyRXZlbnQpIHtcbiAgICBjb25zdCBjb25maWcgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmNvbmZpZyBhcyBhbnk7XG4gICAgaGFuZGxlQWN0aW9uKHRoaXMsIHRoaXMuaGFzcyEsIGNvbmZpZywgZXYuZGV0YWlsLmFjdGlvbiEpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgaHVpLWltYWdlLmNsaWNrYWJsZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmJveCB7XG4gICAgICAgIC8qIHN0YXJ0IHBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcCBzdHlsZSAqL1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgLyogZW5kIHBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcCBzdHlsZSAqL1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cblxuICAgICAgLmJveCAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuXG4gICAgICBoYS1pY29uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjYTlhOWE5O1xuICAgICAgfVxuXG4gICAgICBoYS1pY29uLnN0YXRlLW9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgaGEtaWNvbi5zaG93LXN0YXRlIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgIH1cbiAgICAgIGhhLWljb246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1waWN0dXJlLWdsYW5jZS1jYXJkXCI6IEh1aVBpY3R1cmVHbGFuY2VDYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7Ozs7O0FBQ0E7QUFDQSxxdkNBQ0E7QUFFQTtBQUNBOzs7OztBQUVBO0FBS0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBSUE7OztBQUtBOzs7O0FBdENBO0FBNkNBOzs7O0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7O0FBRkE7QUFTQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7O0FBSUE7QUFFQTtBQUZBOztBQVlBOztBQXhDQTtBQTJDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNEVBOzs7QUEzVUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[74],{

/***/ "./src/panels/lovelace/cards/hui-gauge-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-gauge-card.ts ***!
  \*****************************************************/
/*! exports provided: severityMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "severityMap", function() { return severityMap; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_find_entites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/find-entites */ "./src/panels/lovelace/common/find-entites.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
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











const severityMap = {
  red: "var(--label-badge-red)",
  green: "var(--label-badge-green)",
  yellow: "var(--label-badge-yellow)",
  normal: "var(--label-badge-blue)"
};

let HuiGaugeCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-gauge-card")], function (_initialize, _LitElement) {
  class HuiGaugeCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiGaugeCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-gauge-card-editor */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("vendors~hui-gauge-card-editor"), __webpack_require__.e(10), __webpack_require__.e("hui-alarm-panel-card-editor~hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui~192a43f6"), __webpack_require__.e("hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-card-editor~hui-gaug~aa2f21d6"), __webpack_require__.e("hui-gauge-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-gauge-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-gauge-card-editor.ts"));
        return document.createElement("hui-gauge-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig(hass, entities, entitiesFallback) {
        const includeDomains = ["sensor"];
        const maxEntities = 1;

        const entityFilter = stateObj => {
          return !isNaN(Number(stateObj.state));
        };

        const foundEntities = Object(_common_find_entites__WEBPACK_IMPORTED_MODULE_7__["findEntities"])(hass, maxEntities, entities, entitiesFallback, includeDomains, entityFilter);
        return {
          type: "gauge",
          entity: foundEntities[0] || ""
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
      key: "_baseUnit",

      value() {
        return "50px";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      key: "_updated",
      value: void 0
    }, {
      kind: "method",
      key: "getCardSize",
      value: function getCardSize() {
        return 2;
      }
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config || !config.entity) {
          throw new Error("Invalid card configuration");
        }

        if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_5__["isValidEntityId"])(config.entity)) {
          throw new Error("Invalid Entity");
        }

        this._config = Object.assign({
          min: 0,
          max: 100
        }, config);
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiGaugeCard.prototype), "connectedCallback", this).call(this);

        this._setBaseUnit();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const stateObj = this.hass.states[this._config.entity];

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }

        const state = Number(stateObj.state);

        if (isNaN(state)) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric", "entity", this._config.entity)}</hui-warning
        >
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card
        @click="${this._handleClick}"
        tabindex="0"
        style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__["styleMap"])({
          "--base-unit": this._baseUnit
        })}
      >
        <div class="container">
          <div class="gauge-a"></div>
          <div
            class="gauge-c"
            style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__["styleMap"])({
          transform: `rotate(${this._translateTurn(state)}turn)`,
          "background-color": this._computeSeverity(state)
        })}
          ></div>
          <div class="gauge-b"></div>
        </div>
        <div class="gauge-data">
          <div id="percent">
            ${stateObj.state}
            ${this._config.unit || stateObj.attributes.unit_of_measurement || ""}
          </div>
          <div id="name">
            ${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj)}
          </div>
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_8__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this._updated = true;

        this._setBaseUnit(); // eslint-disable-next-line wc/no-self-class


        this.classList.add("init");
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiGaugeCard.prototype), "updated", this).call(this, changedProps);

        if (!this._config || !this.hass) {
          return;
        }

        const oldHass = changedProps.get("hass");
        const oldConfig = changedProps.get("_config");

        if (!oldHass || !oldConfig || oldHass.themes !== this.hass.themes || oldConfig.theme !== this._config.theme) {
          Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__["applyThemesOnElement"])(this, this.hass.themes, this._config.theme);
        }
      }
    }, {
      kind: "method",
      key: "_setBaseUnit",
      value: function _setBaseUnit() {
        if (!this.isConnected || !this._updated) {
          return;
        }

        const baseUnit = this._computeBaseUnit();

        if (baseUnit !== "0px") {
          this._baseUnit = baseUnit;
        }
      }
    }, {
      kind: "method",
      key: "_computeSeverity",
      value: function _computeSeverity(numberValue) {
        const sections = this._config.severity;

        if (!sections) {
          return severityMap.normal;
        }

        const sectionsArray = Object.keys(sections);
        const sortable = sectionsArray.map(severity => [severity, sections[severity]]);

        for (const severity of sortable) {
          if (severityMap[severity[0]] == null || isNaN(severity[1])) {
            return severityMap.normal;
          }
        }

        sortable.sort((a, b) => a[1] - b[1]);

        if (numberValue >= sortable[0][1] && numberValue < sortable[1][1]) {
          return severityMap[sortable[0][0]];
        }

        if (numberValue >= sortable[1][1] && numberValue < sortable[2][1]) {
          return severityMap[sortable[1][0]];
        }

        if (numberValue >= sortable[2][1]) {
          return severityMap[sortable[2][0]];
        }

        return severityMap.normal;
      }
    }, {
      kind: "method",
      key: "_translateTurn",
      value: function _translateTurn(value) {
        const {
          min,
          max
        } = this._config;
        const maxTurnValue = Math.min(Math.max(value, min), max);
        return 5 * (maxTurnValue - min) / (max - min) / 10;
      }
    }, {
      kind: "method",
      key: "_computeBaseUnit",
      value: function _computeBaseUnit() {
        return this.clientWidth < 200 ? this.clientWidth / 5 + "px" : "50px";
      }
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "hass-more-info", {
          entityId: this._config.entity
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-card {
        cursor: pointer;
        padding: 16px 16px 0 16px;
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
      ha-card:focus {
        outline: none;
        background: var(--divider-color);
      }
      .container {
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2);
        overflow: hidden;
        position: relative;
      }
      .gauge-a {
        position: absolute;
        background-color: var(--primary-background-color);
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2);
        top: 0%;
        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)
          0px 0px;
      }
      .gauge-b {
        position: absolute;
        background-color: var(--paper-card-background-color);
        width: calc(var(--base-unit) * 2.5);
        height: calc(var(--base-unit) * 1.25);
        top: calc(var(--base-unit) * 0.75);
        margin-left: calc(var(--base-unit) * 0.75);
        margin-right: auto;
        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)
          0px 0px;
      }
      .gauge-c {
        position: absolute;
        background-color: var(--label-badge-blue);
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2);
        top: calc(var(--base-unit) * 2);
        margin-left: auto;
        margin-right: auto;
        border-radius: 0px 0px calc(var(--base-unit) * 2)
          calc(var(--base-unit) * 2);
        transform-origin: center top;
      }
      .init .gauge-c {
        transition: all 1.3s ease-in-out;
      }
      .gauge-data {
        text-align: center;
        color: var(--primary-text-color);
        line-height: calc(var(--base-unit) * 0.3);
        width: 100%;
        position: relative;
        top: calc(var(--base-unit) * -0.5);
      }
      .init .gauge-data {
        transition: all 1s ease-out;
      }
      .gauge-data #percent {
        font-size: calc(var(--base-unit) * 0.55);
        line-height: calc(var(--base-unit) * 0.55);
      }
      .gauge-data #name {
        padding-top: calc(var(--base-unit) * 0.15);
        font-size: calc(var(--base-unit) * 0.3);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1nYXVnZS1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvdHlwZXNcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwXCI7XG5pbXBvcnQgeyBhcHBseVRoZW1lc09uRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBpc1ZhbGlkRW50aXR5SWQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS92YWxpZF9lbnRpdHlfaWRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmluZEVudGl0aWVzIH0gZnJvbSBcIi4uL2NvbW1vbi9maW5kLWVudGl0ZXNcIjtcbmltcG9ydCB7IGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCB9IGZyb20gXCIuLi9jb21tb24vaGFzLWNoYW5nZWRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLXdhcm5pbmdcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZCwgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBHYXVnZUNhcmRDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V2ZXJpdHlNYXAgPSB7XG4gIHJlZDogXCJ2YXIoLS1sYWJlbC1iYWRnZS1yZWQpXCIsXG4gIGdyZWVuOiBcInZhcigtLWxhYmVsLWJhZGdlLWdyZWVuKVwiLFxuICB5ZWxsb3c6IFwidmFyKC0tbGFiZWwtYmFkZ2UteWVsbG93KVwiLFxuICBub3JtYWw6IFwidmFyKC0tbGFiZWwtYmFkZ2UtYmx1ZSlcIixcbn07XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWdhdWdlLWNhcmRcIilcbmNsYXNzIEh1aUdhdWdlQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmQge1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldENvbmZpZ0VsZW1lbnQoKTogUHJvbWlzZTxMb3ZlbGFjZUNhcmRFZGl0b3I+IHtcbiAgICBhd2FpdCBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1nYXVnZS1jYXJkLWVkaXRvclwiICovIFwiLi4vZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktZ2F1Z2UtY2FyZC1lZGl0b3JcIlxuICAgICk7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJodWktZ2F1Z2UtY2FyZC1lZGl0b3JcIik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFN0dWJDb25maWcoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBlbnRpdGllczogc3RyaW5nW10sXG4gICAgZW50aXRpZXNGYWxsYmFjazogc3RyaW5nW11cbiAgKTogR2F1Z2VDYXJkQ29uZmlnIHtcbiAgICBjb25zdCBpbmNsdWRlRG9tYWlucyA9IFtcInNlbnNvclwiXTtcbiAgICBjb25zdCBtYXhFbnRpdGllcyA9IDE7XG4gICAgY29uc3QgZW50aXR5RmlsdGVyID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gIWlzTmFOKE51bWJlcihzdGF0ZU9iai5zdGF0ZSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBmb3VuZEVudGl0aWVzID0gZmluZEVudGl0aWVzKFxuICAgICAgaGFzcyxcbiAgICAgIG1heEVudGl0aWVzLFxuICAgICAgZW50aXRpZXMsXG4gICAgICBlbnRpdGllc0ZhbGxiYWNrLFxuICAgICAgaW5jbHVkZURvbWFpbnMsXG4gICAgICBlbnRpdHlGaWx0ZXJcbiAgICApO1xuXG4gICAgcmV0dXJuIHsgdHlwZTogXCJnYXVnZVwiLCBlbnRpdHk6IGZvdW5kRW50aXRpZXNbMF0gfHwgXCJcIiB9O1xuICB9XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Jhc2VVbml0ID0gXCI1MHB4XCI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogR2F1Z2VDYXJkQ29uZmlnO1xuXG4gIHByaXZhdGUgX3VwZGF0ZWQ/OiBib29sZWFuO1xuXG4gIHB1YmxpYyBnZXRDYXJkU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEdhdWdlQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuZW50aXR5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNhcmQgY29uZmlndXJhdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkRW50aXR5SWQoY29uZmlnLmVudGl0eSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgRW50aXR5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSB7IG1pbjogMCwgbWF4OiAxMDAsIC4uLmNvbmZpZyB9O1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fc2V0QmFzZVVuaXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZy5lbnRpdHldO1xuXG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxodWktd2FybmluZ1xuICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2Uud2FybmluZy5lbnRpdHlfbm90X2ZvdW5kXCIsXG4gICAgICAgICAgICBcImVudGl0eVwiLFxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmVudGl0eVxuICAgICAgICAgICl9PC9odWktd2FybmluZ1xuICAgICAgICA+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gTnVtYmVyKHN0YXRlT2JqLnN0YXRlKTtcblxuICAgIGlmIChpc05hTihzdGF0ZSkpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aHVpLXdhcm5pbmdcbiAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLndhcm5pbmcuZW50aXR5X25vbl9udW1lcmljXCIsXG4gICAgICAgICAgICBcImVudGl0eVwiLFxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmVudGl0eVxuICAgICAgICAgICl9PC9odWktd2FybmluZ1xuICAgICAgICA+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVDbGlja31cIlxuICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICBzdHlsZT0ke3N0eWxlTWFwKHtcbiAgICAgICAgICBcIi0tYmFzZS11bml0XCI6IHRoaXMuX2Jhc2VVbml0LFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXVnZS1hXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJnYXVnZS1jXCJcbiAgICAgICAgICAgIHN0eWxlPSR7c3R5bGVNYXAoe1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHt0aGlzLl90cmFuc2xhdGVUdXJuKHN0YXRlKX10dXJuKWAsXG4gICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiB0aGlzLl9jb21wdXRlU2V2ZXJpdHkoc3RhdGUpLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXVnZS1iXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2F1Z2UtZGF0YVwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJwZXJjZW50XCI+XG4gICAgICAgICAgICAke3N0YXRlT2JqLnN0YXRlfVxuICAgICAgICAgICAgJHt0aGlzLl9jb25maWcudW5pdCB8fFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50IHx8XG4gICAgICAgICAgICBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJuYW1lXCI+XG4gICAgICAgICAgICAke3RoaXMuX2NvbmZpZy5uYW1lIHx8IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl91cGRhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zZXRCYXNlVW5pdCgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB3Yy9uby1zZWxmLWNsYXNzXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaW5pdFwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IG9sZENvbmZpZyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJfY29uZmlnXCIpIGFzXG4gICAgICB8IEdhdWdlQ2FyZENvbmZpZ1xuICAgICAgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoXG4gICAgICAhb2xkSGFzcyB8fFxuICAgICAgIW9sZENvbmZpZyB8fFxuICAgICAgb2xkSGFzcy50aGVtZXMgIT09IHRoaXMuaGFzcy50aGVtZXMgfHxcbiAgICAgIG9sZENvbmZpZy50aGVtZSAhPT0gdGhpcy5fY29uZmlnLnRoZW1lXG4gICAgKSB7XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudCh0aGlzLCB0aGlzLmhhc3MudGhlbWVzLCB0aGlzLl9jb25maWcudGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldEJhc2VVbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCB8fCAhdGhpcy5fdXBkYXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBiYXNlVW5pdCA9IHRoaXMuX2NvbXB1dGVCYXNlVW5pdCgpO1xuICAgIGlmIChiYXNlVW5pdCAhPT0gXCIwcHhcIikge1xuICAgICAgdGhpcy5fYmFzZVVuaXQgPSBiYXNlVW5pdDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlU2V2ZXJpdHkobnVtYmVyVmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0aGlzLl9jb25maWchLnNldmVyaXR5O1xuXG4gICAgaWYgKCFzZWN0aW9ucykge1xuICAgICAgcmV0dXJuIHNldmVyaXR5TWFwLm5vcm1hbDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWN0aW9uc0FycmF5ID0gT2JqZWN0LmtleXMoc2VjdGlvbnMpO1xuICAgIGNvbnN0IHNvcnRhYmxlID0gc2VjdGlvbnNBcnJheS5tYXAoKHNldmVyaXR5KSA9PiBbXG4gICAgICBzZXZlcml0eSxcbiAgICAgIHNlY3Rpb25zW3NldmVyaXR5XSxcbiAgICBdKTtcblxuICAgIGZvciAoY29uc3Qgc2V2ZXJpdHkgb2Ygc29ydGFibGUpIHtcbiAgICAgIGlmIChzZXZlcml0eU1hcFtzZXZlcml0eVswXV0gPT0gbnVsbCB8fCBpc05hTihzZXZlcml0eVsxXSkpIHtcbiAgICAgICAgcmV0dXJuIHNldmVyaXR5TWFwLm5vcm1hbDtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ydGFibGUuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pO1xuXG4gICAgaWYgKG51bWJlclZhbHVlID49IHNvcnRhYmxlWzBdWzFdICYmIG51bWJlclZhbHVlIDwgc29ydGFibGVbMV1bMV0pIHtcbiAgICAgIHJldHVybiBzZXZlcml0eU1hcFtzb3J0YWJsZVswXVswXV07XG4gICAgfVxuICAgIGlmIChudW1iZXJWYWx1ZSA+PSBzb3J0YWJsZVsxXVsxXSAmJiBudW1iZXJWYWx1ZSA8IHNvcnRhYmxlWzJdWzFdKSB7XG4gICAgICByZXR1cm4gc2V2ZXJpdHlNYXBbc29ydGFibGVbMV1bMF1dO1xuICAgIH1cbiAgICBpZiAobnVtYmVyVmFsdWUgPj0gc29ydGFibGVbMl1bMV0pIHtcbiAgICAgIHJldHVybiBzZXZlcml0eU1hcFtzb3J0YWJsZVsyXVswXV07XG4gICAgfVxuICAgIHJldHVybiBzZXZlcml0eU1hcC5ub3JtYWw7XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2xhdGVUdXJuKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMuX2NvbmZpZyE7XG4gICAgY29uc3QgbWF4VHVyblZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiEpLCBtYXghKTtcbiAgICByZXR1cm4gKDUgKiAobWF4VHVyblZhbHVlIC0gbWluISkpIC8gKG1heCEgLSBtaW4hKSAvIDEwO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUJhc2VVbml0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50V2lkdGggPCAyMDAgPyB0aGlzLmNsaWVudFdpZHRoIC8gNSArIFwicHhcIiA6IFwiNTBweFwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2xpY2soKTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogdGhpcy5fY29uZmlnIS5lbnRpdHkgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMCAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgaGEtY2FyZDpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiA0KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiAyKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmdhdWdlLWEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiA0KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiAyKTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1iYXNlLXVuaXQpICogMi41KSBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiAyLjUpXG4gICAgICAgICAgMHB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5nYXVnZS1iIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1iYXNlLXVuaXQpICogMi41KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiAxLjI1KTtcbiAgICAgICAgdG9wOiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiAwLjc1KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tYmFzZS11bml0KSAqIDAuNzUpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYmFzZS11bml0KSAqIDIuNSkgY2FsYyh2YXIoLS1iYXNlLXVuaXQpICogMi41KVxuICAgICAgICAgIDBweCAwcHg7XG4gICAgICB9XG4gICAgICAuZ2F1Z2UtYyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtYmx1ZSk7XG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiA0KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiAyKTtcbiAgICAgICAgdG9wOiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiAyKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiAyKVxuICAgICAgICAgIGNhbGModmFyKC0tYmFzZS11bml0KSAqIDIpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xuICAgICAgfVxuICAgICAgLmluaXQgLmdhdWdlLWMge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMS4zcyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICAgIC5nYXVnZS1kYXRhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0KSAqIDAuMyk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogY2FsYyh2YXIoLS1iYXNlLXVuaXQpICogLTAuNSk7XG4gICAgICB9XG4gICAgICAuaW5pdCAuZ2F1Z2UtZGF0YSB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgICAgIH1cbiAgICAgIC5nYXVnZS1kYXRhICNwZXJjZW50IHtcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWJhc2UtdW5pdCkgKiAwLjU1KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0KSAqIDAuNTUpO1xuICAgICAgfVxuICAgICAgLmdhdWdlLWRhdGEgI25hbWUge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1iYXNlLXVuaXQpICogMC4xNSk7XG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1iYXNlLXVuaXQpICogMC4zKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktZ2F1Z2UtY2FyZFwiOiBIdWlHYXVnZUNhcmQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7OztBQUNBO0FBQ0EsdzdCQUNBO0FBRUE7QUFDQTs7Ozs7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTs7Ozs7QUFFQTs7OztBQUFBOzs7OztBQUVBOzs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRkE7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQURBOzs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7O0FBU0E7QUFDQTs7O0FBS0E7Ozs7QUEzQkE7QUFnQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU1BO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0RUE7OztBQWxTQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
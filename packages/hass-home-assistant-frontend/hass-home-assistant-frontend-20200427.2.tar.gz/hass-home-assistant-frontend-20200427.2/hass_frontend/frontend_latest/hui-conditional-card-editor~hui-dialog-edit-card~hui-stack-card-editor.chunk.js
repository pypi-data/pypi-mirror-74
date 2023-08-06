(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor"],{

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

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-picker.ts ***!
  \*******************************************************************/
/*! exports provided: HuiCardPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardPicker", function() { return HuiCardPicker; });
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_until__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/until */ "./node_modules/lit-html/directives/until.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _data_lovelace_custom_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/lovelace_custom_cards */ "./src/data/lovelace_custom_cards.ts");
/* harmony import */ var _common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/compute-unused-entities */ "./src/panels/lovelace/common/compute-unused-entities.ts");
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../create-element/create-card-element */ "./src/panels/lovelace/create-element/create-card-element.ts");
/* harmony import */ var _get_card_stub_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../get-card-stub-config */ "./src/panels/lovelace/editor/get-card-stub-config.ts");
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













const previewCards = ["alarm-panel", "button", "entities", "entity", "gauge", "glance", "history-graph", "light", "map", "markdown", "media-control", "picture", "picture-elements", "picture-entity", "picture-glance", "plant-status", "sensor", "thermostat", "weather-forecast"];
const nonPreviewCards = ["conditional", "entity-filter", "horizontal-stack", "iframe", "vertical-stack", "shopping-list"];
let HuiCardPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-card-picker")], function (_initialize, _LitElement) {
  class HuiCardPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiCardPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_cards",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "lovelace",
      value: void 0
    }, {
      kind: "field",
      key: "cardPicked",
      value: void 0
    }, {
      kind: "field",
      key: "_filter",
      value: void 0
    }, {
      kind: "field",
      key: "_unusedEntities",
      value: void 0
    }, {
      kind: "field",
      key: "_usedEntities",
      value: void 0
    }, {
      kind: "field",
      key: "_filterCards",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])((cardElements, filter) => {
          if (filter) {
            let cards = cardElements.map(cardElement => cardElement.card);
            const options = {
              keys: ["type", "name", "description"],
              caseSensitive: false,
              minMatchCharLength: 2,
              threshold: 0.2
            };
            const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_0__(cards, options);
            cards = fuse.search(filter);
            cardElements = cardElements.filter(cardElement => cards.includes(cardElement.card));
          }

          return cardElements;
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.lovelace || !this._unusedEntities || !this._usedEntities) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <search-input
        .filter=${this._filter}
        no-label-float
        @value-changed=${this._handleSearchChange}
      ></search-input>
      <div class="cards-container">
        ${this._filterCards(this._cards, this._filter).map(cardElement => cardElement.element)}
      </div>
      <div class="cards-container">
        <div
          class="card"
          @click="${this._cardPicked}"
          .config="${{
          type: ""
        }}"
        >
          <div class="preview description">
            ${this.hass.localize(`ui.panel.lovelace.editor.card.generic.manual_description`)}
          </div>
          <div class="card-header">
            ${this.hass.localize(`ui.panel.lovelace.editor.card.generic.manual`)}
          </div>
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        const oldHass = changedProps.get("hass");

        if (!oldHass) {
          return true;
        }

        if (oldHass.language !== this.hass.language) {
          return true;
        }

        return false;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        if (!this.hass || !this.lovelace) {
          return;
        }

        const usedEntities = Object(_common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_9__["computeUsedEntities"])(this.lovelace);
        const unusedEntities = Object(_common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_9__["calcUnusedEntities"])(this.hass, usedEntities);
        this._usedEntities = [...usedEntities].filter(eid => this.hass.states[eid] && !_data_entity__WEBPACK_IMPORTED_MODULE_7__["UNAVAILABLE_STATES"].includes(this.hass.states[eid].state));
        this._unusedEntities = [...unusedEntities].filter(eid => this.hass.states[eid] && !_data_entity__WEBPACK_IMPORTED_MODULE_7__["UNAVAILABLE_STATES"].includes(this.hass.states[eid].state));

        this._loadCards();
      }
    }, {
      kind: "method",
      key: "_loadCards",
      value: function _loadCards() {
        let cards = previewCards.map(type => ({
          type,
          name: this.hass.localize(`ui.panel.lovelace.editor.card.${type}.name`),
          description: this.hass.localize(`ui.panel.lovelace.editor.card.${type}.description`)
        })).concat(nonPreviewCards.map(type => ({
          type,
          name: this.hass.localize(`ui.panel.lovelace.editor.card.${type}.name`),
          description: this.hass.localize(`ui.panel.lovelace.editor.card.${type}.description`),
          noElement: true
        })));

        if (_data_lovelace_custom_cards__WEBPACK_IMPORTED_MODULE_8__["customCards"].length > 0) {
          cards = cards.concat(_data_lovelace_custom_cards__WEBPACK_IMPORTED_MODULE_8__["customCards"].map(ccard => ({
            type: ccard.type,
            name: ccard.name,
            description: ccard.description,
            noElement: true,
            isCustom: true
          })));
        }

        this._cards = cards.map(card => ({
          card: card,
          element: lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`${Object(lit_html_directives_until__WEBPACK_IMPORTED_MODULE_3__["until"])(this._renderCardElement(card), lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
          <div class="card spinner">
            <paper-spinner active alt="Loading"></paper-spinner>
          </div>
        `)}`
        }));
      }
    }, {
      kind: "method",
      key: "_handleSearchChange",
      value: function _handleSearchChange(ev) {
        this._filter = ev.detail.value;
        this.requestUpdate();
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
        .cards-container {
          display: grid;
          grid-gap: 8px 8px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          margin-top: 20px;
        }

        .card {
          height: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          border: 1px solid var(--divider-color);
          background: var(--primary-background-color, #fafafa);
          cursor: pointer;
          box-sizing: border-box;
          position: relative;
        }

        .card-header {
          color: var(--ha-card-header-color, --primary-text-color);
          font-family: var(--ha-card-header-font-family, inherit);
          font-size: 16px;
          letter-spacing: -0.012em;
          line-height: 20px;
          padding: 12px 16px;
          display: block;
          text-align: center;
          background: var(
            --ha-card-background,
            var(--paper-card-background-color, white)
          );
          border-radius: 0 0 4px 4px;
          border-top: 1px solid var(--divider-color);
        }

        .preview {
          pointer-events: none;
          margin: 20px;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preview > :first-child {
          zoom: 0.6;
          display: block;
          width: 100%;
        }

        .description {
          text-align: center;
        }

        .spinner {
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
      `];
      }
    }, {
      kind: "method",
      key: "_cardPicked",
      value: function _cardPicked(ev) {
        const config = ev.currentTarget.config;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "config-changed", {
          config
        });
      }
    }, {
      kind: "method",
      key: "_createCardElement",
      value: function _createCardElement(cardConfig) {
        const element = Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_10__["createCardElement"])(cardConfig);
        element.hass = this.hass;
        element.addEventListener("ll-rebuild", ev => {
          ev.stopPropagation();
          element.parentElement.replaceChild(this._createCardElement(cardConfig), element);
        }, {
          once: true
        });
        return element;
      }
    }, {
      kind: "method",
      key: "_renderCardElement",
      value: async function _renderCardElement(card) {
        let {
          type
        } = card;
        const {
          noElement,
          isCustom,
          name,
          description
        } = card;
        const customCard = isCustom ? Object(_data_lovelace_custom_cards__WEBPACK_IMPORTED_MODULE_8__["getCustomCardEntry"])(type) : undefined;

        if (isCustom) {
          type = `${_data_lovelace_custom_cards__WEBPACK_IMPORTED_MODULE_8__["CUSTOM_TYPE_PREFIX"]}${type}`;
        }

        let element;
        let cardConfig = {
          type
        };

        if (this.hass && this.lovelace) {
          cardConfig = await Object(_get_card_stub_config__WEBPACK_IMPORTED_MODULE_11__["getCardStubConfig"])(this.hass, type, this._unusedEntities, this._usedEntities);

          if (!noElement || (customCard === null || customCard === void 0 ? void 0 : customCard.preview)) {
            element = this._createCardElement(cardConfig);
          }
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div class="card">
        <div
          class="overlay"
          @click=${this._cardPicked}
          .config=${cardConfig}
        ></div>
        <div
          class="preview ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
          description: !element || element.tagName === "HUI-ERROR-CARD"
        })}"
        >
          ${element && element.tagName !== "HUI-ERROR-CARD" ? element : customCard ? customCard.description || this.hass.localize(`ui.panel.lovelace.editor.cardpicker.no_description`) : description}
        </div>
        <div class="card-header">
          ${customCard ? `${this.hass.localize("ui.panel.lovelace.editor.cardpicker.custom_card")}: ${customCard.name || customCard.type}` : name}
        </div>
      </div>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/get-card-stub-config.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/editor/get-card-stub-config.ts ***!
  \************************************************************/
/*! exports provided: getCardStubConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardStubConfig", function() { return getCardStubConfig; });
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-element/create-card-element */ "./src/panels/lovelace/create-element/create-card-element.ts");

const getCardStubConfig = async (hass, type, entities, entitiesFallback) => {
  let cardConfig = {
    type
  };
  const elClass = await Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_0__["getCardElementClass"])(type);

  if (elClass && elClass.getStubConfig) {
    const classStubConfig = elClass.getStubConfig(hass, entities, entitiesFallback);
    cardConfig = Object.assign({}, cardConfig, {}, classStubConfig);
  }

  return cardConfig;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWNvbmRpdGlvbmFsLWNhcmQtZWRpdG9yfmh1aS1kaWFsb2ctZWRpdC1jYXJkfmh1aS1zdGFjay1jYXJkLWVkaXRvci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2NvbXB1dGUtdW51c2VkLWVudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NhcmQtZWRpdG9yL2h1aS1jYXJkLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9nZXQtY2FyZC1zdHViLWNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25Db25maWcsIExvdmVsYWNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEVYQ0xVREVEX0RPTUFJTlMgPSBbXCJ6b25lXCIsIFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIl07XG5cbmNvbnN0IGFkZEZyb21BY3Rpb24gPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBhY3Rpb25Db25maWc6IEFjdGlvbkNvbmZpZykgPT4ge1xuICBpZiAoXG4gICAgYWN0aW9uQ29uZmlnLmFjdGlvbiAhPT0gXCJjYWxsLXNlcnZpY2VcIiB8fFxuICAgICFhY3Rpb25Db25maWcuc2VydmljZV9kYXRhIHx8XG4gICAgIWFjdGlvbkNvbmZpZy5zZXJ2aWNlX2RhdGEuZW50aXR5X2lkXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZW50aXR5SWRzID0gYWN0aW9uQ29uZmlnLnNlcnZpY2VfZGF0YS5lbnRpdHlfaWQ7XG4gIGlmICghQXJyYXkuaXNBcnJheShlbnRpdHlJZHMpKSB7XG4gICAgZW50aXR5SWRzID0gW2VudGl0eUlkc107XG4gIH1cbiAgZm9yIChjb25zdCBlbnRpdHlJZCBvZiBlbnRpdHlJZHMpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5SWQpO1xuICB9XG59O1xuXG5jb25zdCBhZGRFbnRpdHlJZCA9IChlbnRpdGllczogU2V0PHN0cmluZz4sIGVudGl0eSkgPT4ge1xuICBpZiAodHlwZW9mIGVudGl0eSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbnRpdHkuZW50aXR5KSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5lbnRpdHkpO1xuICB9XG4gIGlmIChlbnRpdHkuY2FtZXJhX2ltYWdlKSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5jYW1lcmFfaW1hZ2UpO1xuICB9XG4gIGlmIChlbnRpdHkudGFwX2FjdGlvbikge1xuICAgIGFkZEZyb21BY3Rpb24oZW50aXRpZXMsIGVudGl0eS50YXBfYWN0aW9uKTtcbiAgfVxuICBpZiAoZW50aXR5LmhvbGRfYWN0aW9uKSB7XG4gICAgYWRkRnJvbUFjdGlvbihlbnRpdGllcywgZW50aXR5LmhvbGRfYWN0aW9uKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRW50aXRpZXMgPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBvYmopID0+IHtcbiAgaWYgKG9iai5lbnRpdHkpIHtcbiAgICBhZGRFbnRpdHlJZChlbnRpdGllcywgb2JqLmVudGl0eSk7XG4gIH1cbiAgaWYgKG9iai5lbnRpdGllcyAmJiBBcnJheS5pc0FycmF5KG9iai5lbnRpdGllcykpIHtcbiAgICBvYmouZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiBhZGRFbnRpdHlJZChlbnRpdGllcywgZW50aXR5KSk7XG4gIH1cbiAgaWYgKG9iai5jYXJkKSB7XG4gICAgYWRkRW50aXRpZXMoZW50aXRpZXMsIG9iai5jYXJkKTtcbiAgfVxuICBpZiAob2JqLmNhcmRzICYmIEFycmF5LmlzQXJyYXkob2JqLmNhcmRzKSkge1xuICAgIG9iai5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiBhZGRFbnRpdGllcyhlbnRpdGllcywgY2FyZCkpO1xuICB9XG4gIGlmIChvYmouZWxlbWVudHMgJiYgQXJyYXkuaXNBcnJheShvYmouZWxlbWVudHMpKSB7XG4gICAgb2JqLmVsZW1lbnRzLmZvckVhY2goKGNhcmQpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCBjYXJkKSk7XG4gIH1cbiAgaWYgKG9iai5iYWRnZXMgJiYgQXJyYXkuaXNBcnJheShvYmouYmFkZ2VzKSkge1xuICAgIG9iai5iYWRnZXMuZm9yRWFjaCgoYmFkZ2UpID0+IGFkZEVudGl0eUlkKGVudGl0aWVzLCBiYWRnZSkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVVzZWRFbnRpdGllcyA9IChjb25maWc6IExvdmVsYWNlQ29uZmlnKTogU2V0PHN0cmluZz4gPT4ge1xuICBjb25zdCBlbnRpdGllcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25maWcudmlld3MuZm9yRWFjaCgodmlldykgPT4gYWRkRW50aXRpZXMoZW50aXRpZXMsIHZpZXcpKTtcbiAgcmV0dXJuIGVudGl0aWVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNVbnVzZWRFbnRpdGllcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdXNlZEVudGl0aWVzOiBTZXQ8c3RyaW5nPlxuKTogU2V0PHN0cmluZz4gPT4ge1xuICBjb25zdCB1bnVzZWRFbnRpdGllczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5cbiAgZm9yIChjb25zdCBlbnRpdHkgb2YgT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpKSB7XG4gICAgaWYgKFxuICAgICAgIXVzZWRFbnRpdGllcy5oYXMoZW50aXR5KSAmJlxuICAgICAgIUVYQ0xVREVEX0RPTUFJTlMuaW5jbHVkZXMoZW50aXR5LnNwbGl0KFwiLlwiLCAxKVswXSlcbiAgICApIHtcbiAgICAgIHVudXNlZEVudGl0aWVzLmFkZChlbnRpdHkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bnVzZWRFbnRpdGllcztcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlVW51c2VkRW50aXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmZpZzogTG92ZWxhY2VDb25maWdcbik6IFNldDxzdHJpbmc+ID0+IHtcbiAgY29uc3QgdXNlZEVudGl0aWVzID0gY29tcHV0ZVVzZWRFbnRpdGllcyhjb25maWcpO1xuICBjb25zdCB1bnVzZWRFbnRpdGllcyA9IGNhbGNVbnVzZWRFbnRpdGllcyhoYXNzLCB1c2VkRW50aXRpZXMpO1xuICByZXR1cm4gdW51c2VkRW50aXRpZXM7XG59O1xuIiwiaW1wb3J0ICogYXMgRnVzZSBmcm9tIFwiZnVzZS5qc1wiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IHVudGlsIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWxcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tbW9uL3NlYXJjaC9zZWFyY2gtaW5wdXRcIjtcbmltcG9ydCB7IFVOQVZBSUxBQkxFX1NUQVRFUyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2VudGl0eVwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkQ29uZmlnLCBMb3ZlbGFjZUNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQge1xuICBDdXN0b21DYXJkRW50cnksXG4gIGN1c3RvbUNhcmRzLFxuICBDVVNUT01fVFlQRV9QUkVGSVgsXG4gIGdldEN1c3RvbUNhcmRFbnRyeSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VfY3VzdG9tX2NhcmRzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBjYWxjVW51c2VkRW50aXRpZXMsXG4gIGNvbXB1dGVVc2VkRW50aXRpZXMsXG59IGZyb20gXCIuLi8uLi9jb21tb24vY29tcHV0ZS11bnVzZWQtZW50aXRpZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUNhcmRFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2NyZWF0ZS1lbGVtZW50L2NyZWF0ZS1jYXJkLWVsZW1lbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0Q2FyZFN0dWJDb25maWcgfSBmcm9tIFwiLi4vZ2V0LWNhcmQtc3R1Yi1jb25maWdcIjtcbmltcG9ydCB7IENhcmRQaWNrVGFyZ2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBDYXJkIHtcbiAgdHlwZTogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbm9FbGVtZW50PzogYm9vbGVhbjtcbiAgaXNDdXN0b20/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgQ2FyZEVsZW1lbnQge1xuICBjYXJkOiBDYXJkO1xuICBlbGVtZW50OiBUZW1wbGF0ZVJlc3VsdDtcbn1cblxuY29uc3QgcHJldmlld0NhcmRzOiBzdHJpbmdbXSA9IFtcbiAgXCJhbGFybS1wYW5lbFwiLFxuICBcImJ1dHRvblwiLFxuICBcImVudGl0aWVzXCIsXG4gIFwiZW50aXR5XCIsXG4gIFwiZ2F1Z2VcIixcbiAgXCJnbGFuY2VcIixcbiAgXCJoaXN0b3J5LWdyYXBoXCIsXG4gIFwibGlnaHRcIixcbiAgXCJtYXBcIixcbiAgXCJtYXJrZG93blwiLFxuICBcIm1lZGlhLWNvbnRyb2xcIixcbiAgXCJwaWN0dXJlXCIsXG4gIFwicGljdHVyZS1lbGVtZW50c1wiLFxuICBcInBpY3R1cmUtZW50aXR5XCIsXG4gIFwicGljdHVyZS1nbGFuY2VcIixcbiAgXCJwbGFudC1zdGF0dXNcIixcbiAgXCJzZW5zb3JcIixcbiAgXCJ0aGVybW9zdGF0XCIsXG4gIFwid2VhdGhlci1mb3JlY2FzdFwiLFxuXTtcblxuY29uc3Qgbm9uUHJldmlld0NhcmRzOiBzdHJpbmdbXSA9IFtcbiAgXCJjb25kaXRpb25hbFwiLFxuICBcImVudGl0eS1maWx0ZXJcIixcbiAgXCJob3Jpem9udGFsLXN0YWNrXCIsXG4gIFwiaWZyYW1lXCIsXG4gIFwidmVydGljYWwtc3RhY2tcIixcbiAgXCJzaG9wcGluZy1saXN0XCIsXG5dO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jYXJkLXBpY2tlclwiKVxuZXhwb3J0IGNsYXNzIEh1aUNhcmRQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NhcmRzOiBDYXJkRWxlbWVudFtdID0gW107XG5cbiAgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2VDb25maWc7XG5cbiAgcHVibGljIGNhcmRQaWNrZWQ/OiAoY2FyZENvbmY6IExvdmVsYWNlQ2FyZENvbmZpZykgPT4gdm9pZDtcblxuICBwcml2YXRlIF9maWx0ZXI/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdW51c2VkRW50aXRpZXM/OiBzdHJpbmdbXTtcblxuICBwcml2YXRlIF91c2VkRW50aXRpZXM/OiBzdHJpbmdbXTtcblxuICBwcml2YXRlIF9maWx0ZXJDYXJkcyA9IG1lbW9pemVPbmUoXG4gICAgKGNhcmRFbGVtZW50czogQ2FyZEVsZW1lbnRbXSwgZmlsdGVyPzogc3RyaW5nKTogQ2FyZEVsZW1lbnRbXSA9PiB7XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIGxldCBjYXJkcyA9IGNhcmRFbGVtZW50cy5tYXAoXG4gICAgICAgICAgKGNhcmRFbGVtZW50OiBDYXJkRWxlbWVudCkgPT4gY2FyZEVsZW1lbnQuY2FyZFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBvcHRpb25zOiBGdXNlLkZ1c2VPcHRpb25zPENhcmQ+ID0ge1xuICAgICAgICAgIGtleXM6IFtcInR5cGVcIiwgXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAyLFxuICAgICAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmdXNlID0gbmV3IEZ1c2UoY2FyZHMsIG9wdGlvbnMpO1xuICAgICAgICBjYXJkcyA9IGZ1c2Uuc2VhcmNoKGZpbHRlcik7XG4gICAgICAgIGNhcmRFbGVtZW50cyA9IGNhcmRFbGVtZW50cy5maWx0ZXIoKGNhcmRFbGVtZW50OiBDYXJkRWxlbWVudCkgPT5cbiAgICAgICAgICBjYXJkcy5pbmNsdWRlcyhjYXJkRWxlbWVudC5jYXJkKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcmRFbGVtZW50cztcbiAgICB9XG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuaGFzcyB8fFxuICAgICAgIXRoaXMubG92ZWxhY2UgfHxcbiAgICAgICF0aGlzLl91bnVzZWRFbnRpdGllcyB8fFxuICAgICAgIXRoaXMuX3VzZWRFbnRpdGllc1xuICAgICkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzZWFyY2gtaW5wdXRcbiAgICAgICAgLmZpbHRlcj0ke3RoaXMuX2ZpbHRlcn1cbiAgICAgICAgbm8tbGFiZWwtZmxvYXRcbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICA+PC9zZWFyY2gtaW5wdXQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICAgICR7dGhpcy5fZmlsdGVyQ2FyZHModGhpcy5fY2FyZHMsIHRoaXMuX2ZpbHRlcikubWFwKFxuICAgICAgICAgIChjYXJkRWxlbWVudDogQ2FyZEVsZW1lbnQpID0+IGNhcmRFbGVtZW50LmVsZW1lbnRcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYXJkXCJcbiAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2NhcmRQaWNrZWR9XCJcbiAgICAgICAgICAuY29uZmlnPVwiJHt7IHR5cGU6IFwiXCIgfX1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXcgZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgYHVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMubWFudWFsX2Rlc2NyaXB0aW9uYFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgYHVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMubWFudWFsYFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQgfCB1bmRlZmluZWQ7XG4gICAgaWYgKCFvbGRIYXNzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob2xkSGFzcy5sYW5ndWFnZSAhPT0gdGhpcy5oYXNzIS5sYW5ndWFnZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5sb3ZlbGFjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZWRFbnRpdGllcyA9IGNvbXB1dGVVc2VkRW50aXRpZXModGhpcy5sb3ZlbGFjZSk7XG4gICAgY29uc3QgdW51c2VkRW50aXRpZXMgPSBjYWxjVW51c2VkRW50aXRpZXModGhpcy5oYXNzLCB1c2VkRW50aXRpZXMpO1xuXG4gICAgdGhpcy5fdXNlZEVudGl0aWVzID0gWy4uLnVzZWRFbnRpdGllc10uZmlsdGVyKFxuICAgICAgKGVpZCkgPT5cbiAgICAgICAgdGhpcy5oYXNzIS5zdGF0ZXNbZWlkXSAmJlxuICAgICAgICAhVU5BVkFJTEFCTEVfU1RBVEVTLmluY2x1ZGVzKHRoaXMuaGFzcyEuc3RhdGVzW2VpZF0uc3RhdGUpXG4gICAgKTtcbiAgICB0aGlzLl91bnVzZWRFbnRpdGllcyA9IFsuLi51bnVzZWRFbnRpdGllc10uZmlsdGVyKFxuICAgICAgKGVpZCkgPT5cbiAgICAgICAgdGhpcy5oYXNzIS5zdGF0ZXNbZWlkXSAmJlxuICAgICAgICAhVU5BVkFJTEFCTEVfU1RBVEVTLmluY2x1ZGVzKHRoaXMuaGFzcyEuc3RhdGVzW2VpZF0uc3RhdGUpXG4gICAgKTtcblxuICAgIHRoaXMuX2xvYWRDYXJkcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZENhcmRzKCkge1xuICAgIGxldCBjYXJkczogQ2FyZFtdID0gcHJldmlld0NhcmRzXG4gICAgICAubWFwKCh0eXBlOiBzdHJpbmcpID0+ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIG5hbWU6IHRoaXMuaGFzcyEubG9jYWxpemUoYHVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLiR7dHlwZX0ubmFtZWApLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBgdWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuJHt0eXBlfS5kZXNjcmlwdGlvbmBcbiAgICAgICAgKSxcbiAgICAgIH0pKVxuICAgICAgLmNvbmNhdChcbiAgICAgICAgbm9uUHJldmlld0NhcmRzLm1hcCgodHlwZTogc3RyaW5nKSA9PiAoe1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbmFtZTogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIGB1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC4ke3R5cGV9Lm5hbWVgXG4gICAgICAgICAgKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIGB1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC4ke3R5cGV9LmRlc2NyaXB0aW9uYFxuICAgICAgICAgICksXG4gICAgICAgICAgbm9FbGVtZW50OiB0cnVlLFxuICAgICAgICB9KSlcbiAgICAgICk7XG4gICAgaWYgKGN1c3RvbUNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNhcmRzID0gY2FyZHMuY29uY2F0KFxuICAgICAgICBjdXN0b21DYXJkcy5tYXAoKGNjYXJkOiBDdXN0b21DYXJkRW50cnkpID0+ICh7XG4gICAgICAgICAgdHlwZTogY2NhcmQudHlwZSxcbiAgICAgICAgICBuYW1lOiBjY2FyZC5uYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjY2FyZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBub0VsZW1lbnQ6IHRydWUsXG4gICAgICAgICAgaXNDdXN0b206IHRydWUsXG4gICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fY2FyZHMgPSBjYXJkcy5tYXAoKGNhcmQ6IENhcmQpID0+ICh7XG4gICAgICBjYXJkOiBjYXJkLFxuICAgICAgZWxlbWVudDogaHRtbGAke3VudGlsKFxuICAgICAgICB0aGlzLl9yZW5kZXJDYXJkRWxlbWVudChjYXJkKSxcbiAgICAgICAgaHRtbGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzcGlubmVyXCI+XG4gICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmUgYWx0PVwiTG9hZGluZ1wiPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgKX1gLFxuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNlYXJjaENoYW5nZShldjogQ3VzdG9tRXZlbnQpIHtcbiAgICB0aGlzLl9maWx0ZXIgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcbiAgICAgICAgLmNhcmRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWdhcDogOHB4IDhweDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLCAjZmFmYWZhKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1jb2xvciwgLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LWZhbWlseSwgaW5oZXJpdCk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcihcbiAgICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcmV2aWV3IHtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcmV2aWV3ID4gOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICB6b29tOiAwLjY7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FyZFBpY2tlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZyA9IChldi5jdXJyZW50VGFyZ2V0ISBhcyBDYXJkUGlja1RhcmdldClcbiAgICAgIC5jb25maWc7XG5cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNhcmRFbGVtZW50KGNhcmRDb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDYXJkRWxlbWVudChjYXJkQ29uZmlnKSBhcyBMb3ZlbGFjZUNhcmQ7XG4gICAgZWxlbWVudC5oYXNzID0gdGhpcy5oYXNzO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibGwtcmVidWlsZFwiLFxuICAgICAgKGV2KSA9PiB7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQhLnJlcGxhY2VDaGlsZChcbiAgICAgICAgICB0aGlzLl9jcmVhdGVDYXJkRWxlbWVudChjYXJkQ29uZmlnKSxcbiAgICAgICAgICBlbGVtZW50XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVuZGVyQ2FyZEVsZW1lbnQoY2FyZDogQ2FyZCk6IFByb21pc2U8VGVtcGxhdGVSZXN1bHQ+IHtcbiAgICBsZXQgeyB0eXBlIH0gPSBjYXJkO1xuICAgIGNvbnN0IHsgbm9FbGVtZW50LCBpc0N1c3RvbSwgbmFtZSwgZGVzY3JpcHRpb24gfSA9IGNhcmQ7XG4gICAgY29uc3QgY3VzdG9tQ2FyZCA9IGlzQ3VzdG9tID8gZ2V0Q3VzdG9tQ2FyZEVudHJ5KHR5cGUpIDogdW5kZWZpbmVkO1xuICAgIGlmIChpc0N1c3RvbSkge1xuICAgICAgdHlwZSA9IGAke0NVU1RPTV9UWVBFX1BSRUZJWH0ke3R5cGV9YDtcbiAgICB9XG5cbiAgICBsZXQgZWxlbWVudDogTG92ZWxhY2VDYXJkIHwgdW5kZWZpbmVkO1xuICAgIGxldCBjYXJkQ29uZmlnOiBMb3ZlbGFjZUNhcmRDb25maWcgPSB7IHR5cGUgfTtcblxuICAgIGlmICh0aGlzLmhhc3MgJiYgdGhpcy5sb3ZlbGFjZSkge1xuICAgICAgY2FyZENvbmZpZyA9IGF3YWl0IGdldENhcmRTdHViQ29uZmlnKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRoaXMuX3VudXNlZEVudGl0aWVzISxcbiAgICAgICAgdGhpcy5fdXNlZEVudGl0aWVzIVxuICAgICAgKTtcblxuICAgICAgaWYgKCFub0VsZW1lbnQgfHwgY3VzdG9tQ2FyZD8ucHJldmlldykge1xuICAgICAgICBlbGVtZW50ID0gdGhpcy5fY3JlYXRlQ2FyZEVsZW1lbnQoY2FyZENvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJvdmVybGF5XCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jYXJkUGlja2VkfVxuICAgICAgICAgIC5jb25maWc9JHtjYXJkQ29uZmlnfVxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInByZXZpZXcgJHtjbGFzc01hcCh7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogIWVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSBcIkhVSS1FUlJPUi1DQVJEXCIsXG4gICAgICAgICAgfSl9XCJcbiAgICAgICAgPlxuICAgICAgICAgICR7ZWxlbWVudCAmJiBlbGVtZW50LnRhZ05hbWUgIT09IFwiSFVJLUVSUk9SLUNBUkRcIlxuICAgICAgICAgICAgPyBlbGVtZW50XG4gICAgICAgICAgICA6IGN1c3RvbUNhcmRcbiAgICAgICAgICAgID8gY3VzdG9tQ2FyZC5kZXNjcmlwdGlvbiB8fFxuICAgICAgICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZHBpY2tlci5ub19kZXNjcmlwdGlvbmBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICR7Y3VzdG9tQ2FyZFxuICAgICAgICAgICAgPyBgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmRwaWNrZXIuY3VzdG9tX2NhcmRcIlxuICAgICAgICAgICAgICApfTogJHtjdXN0b21DYXJkLm5hbWUgfHwgY3VzdG9tQ2FyZC50eXBlfWBcbiAgICAgICAgICAgIDogbmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY2FyZC1waWNrZXJcIjogSHVpQ2FyZFBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTG92ZWxhY2VDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldENhcmRFbGVtZW50Q2xhc3MgfSBmcm9tIFwiLi4vY3JlYXRlLWVsZW1lbnQvY3JlYXRlLWNhcmQtZWxlbWVudFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FyZFN0dWJDb25maWcgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHR5cGU6IHN0cmluZyxcbiAgZW50aXRpZXM6IHN0cmluZ1tdLFxuICBlbnRpdGllc0ZhbGxiYWNrOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxMb3ZlbGFjZUNhcmRDb25maWc+ID0+IHtcbiAgbGV0IGNhcmRDb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZyA9IHsgdHlwZSB9O1xuXG4gIGNvbnN0IGVsQ2xhc3MgPSBhd2FpdCBnZXRDYXJkRWxlbWVudENsYXNzKHR5cGUpO1xuXG4gIGlmIChlbENsYXNzICYmIGVsQ2xhc3MuZ2V0U3R1YkNvbmZpZykge1xuICAgIGNvbnN0IGNsYXNzU3R1YkNvbmZpZyA9IGVsQ2xhc3MuZ2V0U3R1YkNvbmZpZyhcbiAgICAgIGhhc3MsXG4gICAgICBlbnRpdGllcyxcbiAgICAgIGVudGl0aWVzRmFsbGJhY2tcbiAgICApO1xuXG4gICAgY2FyZENvbmZpZyA9IHsgLi4uY2FyZENvbmZpZywgLi4uY2xhc3NTdHViQ29uZmlnIH07XG4gIH1cblxuICByZXR1cm4gY2FyZENvbmZpZztcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBSUE7QUFFQTtBQWdCQTtBQXNCQTtBQVVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBaUJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQWxDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFzQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQUE7OztBQUdBOzs7QUFLQTs7OztBQXZCQTtBQThCQTtBQTdFQTtBQUFBO0FBQUE7QUFBQTtBQWdGQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExRkE7QUFBQTtBQUFBO0FBQUE7QUE2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQWhIQTtBQUFBO0FBQUE7QUFBQTtBQW1IQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFDQTtBQUdBO0FBR0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFBQTtBQUZBO0FBV0E7QUE3SkE7QUFBQTtBQUFBO0FBQUE7QUFnS0E7QUFDQTtBQUNBO0FBbEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1RUE7QUE1T0E7QUFBQTtBQUFBO0FBQUE7QUErT0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQW5QQTtBQUFBO0FBQUE7QUFBQTtBQXNQQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQXBRQTtBQUFBO0FBQUE7QUFBQTtBQXVRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQURBOztBQUlBOzs7QUFVQTs7O0FBdEJBO0FBOEJBO0FBNVRBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
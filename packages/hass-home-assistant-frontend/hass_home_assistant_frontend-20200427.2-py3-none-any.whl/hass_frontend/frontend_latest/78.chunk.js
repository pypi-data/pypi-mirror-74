(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[78],{

/***/ "./src/panels/lovelace/cards/hui-plant-status-card.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-plant-status-card.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_find_entites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/find-entites */ "./src/panels/lovelace/common/find-entites.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
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










const SENSORS = {
  moisture: "hass:water",
  temperature: "hass:thermometer",
  brightness: "hass:white-balance-sunny",
  conductivity: "hass:emoticon-poop",
  battery: "hass:battery"
};

let HuiPlantStatusCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-plant-status-card")], function (_initialize, _LitElement) {
  class HuiPlantStatusCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiPlantStatusCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-plant-status-card-editor */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("vendors~hui-plant-status-card-editor"), __webpack_require__.e(10), __webpack_require__.e("hui-alarm-panel-card-editor~hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui~192a43f6"), __webpack_require__.e("hui-plant-status-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-plant-status-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-plant-status-card-editor.ts"));
        return document.createElement("hui-plant-status-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig(hass, entities, entitiesFallback) {
        const includeDomains = ["plant"];
        const maxEntities = 1;
        const foundEntities = Object(_common_find_entites__WEBPACK_IMPORTED_MODULE_7__["findEntities"])(hass, maxEntities, entities, entitiesFallback, includeDomains);
        return {
          type: "plant-status",
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
      key: "_config",
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
        if (!config.entity || config.entity.split(".")[0] !== "plant") {
          throw new Error("Specify an entity from within the plant domain.");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_8__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiPlantStatusCard.prototype), "updated", this).call(this, changedProps);

        if (!this._config || !this.hass) {
          return;
        }

        const oldHass = changedProps.get("hass");
        const oldConfig = changedProps.get("_config");

        if (!oldHass || !oldConfig || oldHass.themes !== this.hass.themes || oldConfig.theme !== this._config.theme) {
          Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_1__["applyThemesOnElement"])(this, this.hass.themes, this._config.theme);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this._config) {
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

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card
        class="${stateObj.attributes.entity_picture ? "has-plant-image" : ""}"
      >
        <div
          class="banner"
          style="background-image:url(${stateObj.attributes.entity_picture})"
        >
          <div class="header">
            ${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj)}
          </div>
        </div>
        <div class="content">
          ${this.computeAttributes(stateObj).map(item => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div
                class="attributes"
                @action=${this._handleMoreInfo}
                .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_6__["actionHandler"])()}
                tabindex="0"
                .value="${item}"
              >
                <div>
                  <ha-icon
                    icon="${this.computeIcon(item, stateObj.attributes.battery)}"
                  ></ha-icon>
                </div>
                <div
                  class="${stateObj.attributes.problem.indexOf(item) === -1 ? "" : "problem"}"
                >
                  ${stateObj.attributes[item]}
                </div>
                <div class="uom">
                  ${stateObj.attributes.unit_of_measurement_dict[item] || ""}
                </div>
              </div>
            `)}
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .banner {
        display: flex;
        align-items: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding-top: 12px;
      }

      .has-plant-image .banner {
        padding-top: 30%;
      }

      .header {
        /* start paper-font-headline style */
        font-family: "Roboto", "Noto", sans-serif;
        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */
        text-rendering: optimizeLegibility;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        /* end paper-font-headline style */

        line-height: 40px;
        padding: 8px 16px;
      }

      .has-plant-image .header {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        padding: 16px;
        color: white;
        width: 100%;
        background: rgba(0, 0, 0, var(--dark-secondary-opacity));
      }

      .content {
        display: flex;
        justify-content: space-between;
        padding: 16px 32px 24px 32px;
      }

      .has-plant-image .content {
        padding-bottom: 16px;
      }

      ha-icon {
        color: var(--paper-item-icon-color);
        margin-bottom: 8px;
      }

      .attributes {
        cursor: pointer;
      }

      .attributes:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }

      .attributes div {
        text-align: center;
      }

      .problem {
        color: var(--google-red-500);
        font-weight: bold;
      }

      .uom {
        color: var(--secondary-text-color);
      }
    `;
      }
    }, {
      kind: "method",
      key: "computeAttributes",
      value: function computeAttributes(stateObj) {
        return Object.keys(SENSORS).filter(key => key in stateObj.attributes);
      }
    }, {
      kind: "method",
      key: "computeIcon",
      value: function computeIcon(attr, batLvl) {
        const icon = SENSORS[attr];

        if (attr === "battery") {
          if (batLvl <= 5) {
            return `${icon}-alert`;
          }

          if (batLvl < 95) {
            return `${icon}-${Math.round(batLvl / 10 - 0.01) * 10}`;
          }
        }

        return icon;
      }
    }, {
      kind: "method",
      key: "_handleMoreInfo",
      value: function _handleMoreInfo(ev) {
        const target = ev.currentTarget;
        const stateObj = this.hass.states[this._config.entity];

        if (target.value) {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "hass-more-info", {
            entityId: stateObj.attributes.sensors[target.value]
          });
        }
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzguY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1wbGFudC1zdGF0dXMtY2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgYXBwbHlUaGVtZXNPbkVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGFjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vY29tbW9uL2RpcmVjdGl2ZXMvYWN0aW9uLWhhbmRsZXItZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBmaW5kRW50aXRpZXMgfSBmcm9tIFwiLi4vY29tbW9uL2ZpbmQtZW50aXRlc1wiO1xuaW1wb3J0IHsgaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtY2hhbmdlZFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkLCBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBsYW50QXR0cmlidXRlVGFyZ2V0LCBQbGFudFN0YXR1c0NhcmRDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBTRU5TT1JTID0ge1xuICBtb2lzdHVyZTogXCJoYXNzOndhdGVyXCIsXG4gIHRlbXBlcmF0dXJlOiBcImhhc3M6dGhlcm1vbWV0ZXJcIixcbiAgYnJpZ2h0bmVzczogXCJoYXNzOndoaXRlLWJhbGFuY2Utc3VubnlcIixcbiAgY29uZHVjdGl2aXR5OiBcImhhc3M6ZW1vdGljb24tcG9vcFwiLFxuICBiYXR0ZXJ5OiBcImhhc3M6YmF0dGVyeVwiLFxufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktcGxhbnQtc3RhdHVzLWNhcmRcIilcbmNsYXNzIEh1aVBsYW50U3RhdHVzQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmQge1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldENvbmZpZ0VsZW1lbnQoKTogUHJvbWlzZTxMb3ZlbGFjZUNhcmRFZGl0b3I+IHtcbiAgICBhd2FpdCBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1wbGFudC1zdGF0dXMtY2FyZC1lZGl0b3JcIiAqLyBcIi4uL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLXBsYW50LXN0YXR1cy1jYXJkLWVkaXRvclwiXG4gICAgKTtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh1aS1wbGFudC1zdGF0dXMtY2FyZC1lZGl0b3JcIik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFN0dWJDb25maWcoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBlbnRpdGllczogc3RyaW5nW10sXG4gICAgZW50aXRpZXNGYWxsYmFjazogc3RyaW5nW11cbiAgKTogUGxhbnRTdGF0dXNDYXJkQ29uZmlnIHtcbiAgICBjb25zdCBpbmNsdWRlRG9tYWlucyA9IFtcInBsYW50XCJdO1xuICAgIGNvbnN0IG1heEVudGl0aWVzID0gMTtcbiAgICBjb25zdCBmb3VuZEVudGl0aWVzID0gZmluZEVudGl0aWVzKFxuICAgICAgaGFzcyxcbiAgICAgIG1heEVudGl0aWVzLFxuICAgICAgZW50aXRpZXMsXG4gICAgICBlbnRpdGllc0ZhbGxiYWNrLFxuICAgICAgaW5jbHVkZURvbWFpbnNcbiAgICApO1xuXG4gICAgcmV0dXJuIHsgdHlwZTogXCJwbGFudC1zdGF0dXNcIiwgZW50aXR5OiBmb3VuZEVudGl0aWVzWzBdIHx8IFwiXCIgfTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBQbGFudFN0YXR1c0NhcmRDb25maWc7XG5cbiAgcHVibGljIGdldENhcmRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDM7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogUGxhbnRTdGF0dXNDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFjb25maWcuZW50aXR5IHx8IGNvbmZpZy5lbnRpdHkuc3BsaXQoXCIuXCIpWzBdICE9PSBcInBsYW50XCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNwZWNpZnkgYW4gZW50aXR5IGZyb20gd2l0aGluIHRoZSBwbGFudCBkb21haW4uXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNDb25maWdPckVudGl0eUNoYW5nZWQodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvbGRIYXNzID0gY2hhbmdlZFByb3BzLmdldChcImhhc3NcIikgYXMgSG9tZUFzc2lzdGFudCB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBvbGRDb25maWcgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiX2NvbmZpZ1wiKSBhc1xuICAgICAgfCBQbGFudFN0YXR1c0NhcmRDb25maWdcbiAgICAgIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgIW9sZEhhc3MgfHxcbiAgICAgICFvbGRDb25maWcgfHxcbiAgICAgIG9sZEhhc3MudGhlbWVzICE9PSB0aGlzLmhhc3MudGhlbWVzIHx8XG4gICAgICBvbGRDb25maWcudGhlbWUgIT09IHRoaXMuX2NvbmZpZy50aGVtZVxuICAgICkge1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQodGhpcywgdGhpcy5oYXNzLnRoZW1lcywgdGhpcy5fY29uZmlnLnRoZW1lKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1t0aGlzLl9jb25maWchLmVudGl0eV07XG5cbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGh1aS13YXJuaW5nXG4gICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS53YXJuaW5nLmVudGl0eV9ub3RfZm91bmRcIixcbiAgICAgICAgICAgIFwiZW50aXR5XCIsXG4gICAgICAgICAgICB0aGlzLl9jb25maWcuZW50aXR5XG4gICAgICAgICAgKX08L2h1aS13YXJuaW5nXG4gICAgICAgID5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZFxuICAgICAgICBjbGFzcz1cIiR7c3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSA/IFwiaGFzLXBsYW50LWltYWdlXCIgOiBcIlwifVwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImJhbm5lclwiXG4gICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybCgke3N0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmV9KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAke3RoaXMuX2NvbmZpZy5uYW1lIHx8IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAke3RoaXMuY29tcHV0ZUF0dHJpYnV0ZXMoc3RhdGVPYmopLm1hcChcbiAgICAgICAgICAgIChpdGVtKSA9PiBodG1sYFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICBAYWN0aW9uPSR7dGhpcy5faGFuZGxlTW9yZUluZm99XG4gICAgICAgICAgICAgICAgLmFjdGlvbkhhbmRsZXI9JHthY3Rpb25IYW5kbGVyKCl9XG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICAudmFsdWU9XCIke2l0ZW19XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiJHt0aGlzLmNvbXB1dGVJY29uKFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5iYXR0ZXJ5XG4gICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCIke3N0YXRlT2JqLmF0dHJpYnV0ZXMucHJvYmxlbS5pbmRleE9mKGl0ZW0pID09PSAtMVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInByb2JsZW1cIn1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlc1tpdGVtXX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW9tXCI+XG4gICAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudF9kaWN0W2l0ZW1dIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuYmFubmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuaGFzLXBsYW50LWltYWdlIC5iYW5uZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMzAlO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgLyogc3RhcnQgcGFwZXItZm9udC1oZWFkbGluZSBzdHlsZSAqL1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJOb3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyAvKiBPUyBYIHN1YnBpeGVsIEFBIGJsZWVkIGJ1ZyAqL1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgLyogZW5kIHBhcGVyLWZvbnQtaGVhZGxpbmUgc3R5bGUgKi9cblxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5oYXMtcGxhbnQtaW1hZ2UgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgdmFyKC0tZGFyay1zZWNvbmRhcnktb3BhY2l0eSkpO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMTZweCAzMnB4IDI0cHggMzJweDtcbiAgICAgIH1cblxuICAgICAgLmhhcy1wbGFudC1pbWFnZSAuY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBoYS1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIH1cblxuICAgICAgLmF0dHJpYnV0ZXMge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5hdHRyaWJ1dGVzOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5hdHRyaWJ1dGVzIGRpdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnByb2JsZW0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLnVvbSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZUF0dHJpYnV0ZXMoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKFNFTlNPUlMpLmZpbHRlcigoa2V5KSA9PiBrZXkgaW4gc3RhdGVPYmouYXR0cmlidXRlcyk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVJY29uKGF0dHI6IHN0cmluZywgYmF0THZsOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGljb24gPSBTRU5TT1JTW2F0dHJdO1xuICAgIGlmIChhdHRyID09PSBcImJhdHRlcnlcIikge1xuICAgICAgaWYgKGJhdEx2bCA8PSA1KSB7XG4gICAgICAgIHJldHVybiBgJHtpY29ufS1hbGVydGA7XG4gICAgICB9XG4gICAgICBpZiAoYmF0THZsIDwgOTUpIHtcbiAgICAgICAgcmV0dXJuIGAke2ljb259LSR7TWF0aC5yb3VuZChiYXRMdmwgLyAxMCAtIDAuMDEpICogMTB9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGljb247XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNb3JlSW5mbyhldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0ISBhcyBQbGFudEF0dHJpYnV0ZVRhcmdldDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcyEuc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XTtcblxuICAgIGlmICh0YXJnZXQudmFsdWUpIHtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgICAgZW50aXR5SWQ6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc2Vuc29yc1t0YXJnZXQudmFsdWVdLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktcGxhbnQtc3RhdHVzLWNhcmRcIjogSHVpUGxhbnRTdGF0dXNDYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7Ozs7O0FBQ0E7QUFDQSxtMUJBQ0E7QUFFQTtBQUNBOzs7OztBQUVBO0FBS0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7Ozs7O0FBRUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQU1BO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFGQTtBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOzs7QUFHQTs7OztBQUlBOzs7QUFJQTtBQUNBOztBQUVBOzs7O0FBSUE7Ozs7QUFPQTs7QUFJQTs7O0FBR0E7OztBQXpCQTs7O0FBYkE7QUE4Q0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0RUE7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBOU9BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
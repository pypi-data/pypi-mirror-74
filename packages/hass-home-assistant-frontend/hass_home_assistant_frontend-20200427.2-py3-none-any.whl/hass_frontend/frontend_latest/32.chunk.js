(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[32],{

/***/ "./src/panels/lovelace/common/compute-tooltip.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/compute-tooltip.ts ***!
  \*******************************************************/
/*! exports provided: computeTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeTooltip", function() { return computeTooltip; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");


function computeActionTooltip(hass, state, config, isHold) {
  if (!config || !config.action || config.action === "none") {
    return "";
  }

  let tooltip = (isHold ? hass.localize("ui.panel.lovelace.cards.picture-elements.hold") : hass.localize("ui.panel.lovelace.cards.picture-elements.tap")) + " ";

  switch (config.action) {
    case "navigate":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.navigate_to", "location", config.navigation_path)}`;
      break;

    case "url":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.url", "url_path", config.url_path)}`;
      break;

    case "toggle":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.toggle", "name", state)}`;
      break;

    case "call-service":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.call_service", "name", config.service)}`;
      break;

    case "more-info":
      tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.more_info", "name", state)}`;
      break;
  }

  return tooltip;
}

const computeTooltip = (hass, config) => {
  if (config.title === null) {
    return "";
  }

  if (config.title) {
    return config.title;
  }

  let stateName = "";
  let tooltip = "";

  if (config.entity) {
    stateName = config.entity in hass.states ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(hass.states[config.entity]) : config.entity;
  }

  if (!config.tap_action && !config.hold_action) {
    return stateName;
  }

  const tapTooltip = config.tap_action ? computeActionTooltip(hass, stateName, config.tap_action, false) : "";
  const holdTooltip = config.hold_action ? computeActionTooltip(hass, stateName, config.hold_action, true) : "";
  const newline = tapTooltip && holdTooltip ? "\n" : "";
  tooltip = tapTooltip + newline + holdTooltip;
  return tooltip;
};

/***/ }),

/***/ "./src/panels/lovelace/components/hui-buttons-base.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-buttons-base.ts ***!
  \************************************************************/
/*! exports provided: HuiButtonsBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiButtonsBase", function() { return HuiButtonsBase; });
/* harmony import */ var _material_mwc_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-ripple */ "./node_modules/@material/mwc-ripple/mwc-ripple.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/handle-action */ "./src/panels/lovelace/common/handle-action.ts");
/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/has-action */ "./src/panels/lovelace/common/has-action.ts");
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










let HuiButtonsBase = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-buttons-base")], function (_initialize, _LitElement) {
  class HuiButtonsBase extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiButtonsBase,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "configEntities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["queryAll"])("state-badge")],
      key: "_badges",
      value: void 0
    }, {
      kind: "field",
      key: "_hass",
      value: void 0
    }, {
      kind: "set",
      key: "hass",
      value: function hass(_hass) {
        var _this$configEntities;

        this._hass = _hass;
        const entitiesShowingIcons = (_this$configEntities = this.configEntities) === null || _this$configEntities === void 0 ? void 0 : _this$configEntities.filter(entity => entity.show_icon !== false);

        this._badges.forEach((badge, index) => {
          badge.hass = _hass;
          badge.stateObj = _hass.states[entitiesShowingIcons[index].entity];
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${(this.configEntities || []).map(entityConf => {
          const stateObj = this._hass.states[entityConf.entity];

          if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`<div class='missing'><iron-icon icon="hass:alert"></div>`;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
          <div
            @action=${this._handleAction}
            .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_6__["actionHandler"])({
            hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_8__["hasAction"])(entityConf.hold_action),
            hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_8__["hasAction"])(entityConf.double_tap_action)
          })}
            .config=${entityConf}
            tabindex="0"
          >
            ${entityConf.show_icon !== false ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  <state-badge
                    title=${Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_5__["computeTooltip"])(this._hass, entityConf)}
                    .hass=${this._hass}
                    .stateObj=${stateObj}
                    .overrideIcon=${entityConf.icon}
                    .overrideImage=${entityConf.image}
                    stateColor
                  ></state-badge>
                ` : ""}
            <span>
              ${entityConf.show_name || entityConf.name && entityConf.show_name !== false ? entityConf.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj) : ""}
            </span>
            <mwc-ripple unbounded></mwc-ripple>
          </div>
        `;
        })}
    `;
      }
    }, {
      kind: "method",
      key: "_handleAction",
      value: function _handleAction(ev) {
        const config = ev.currentTarget.config;
        Object(_common_handle_action__WEBPACK_IMPORTED_MODULE_7__["handleAction"])(this, this._hass, Object.assign({
          tap_action: {
            action: "toggle"
          }
        }, config), ev.detail.action);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      :host {
        display: flex;
        justify-content: space-evenly;
      }
      .missing {
        color: #fce588;
      }
      div {
        cursor: pointer;
        align-items: center;
        display: inline-flex;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9jb21wdXRlLXRvb2x0aXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21wb25lbnRzL2h1aS1idXR0b25zLWJhc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgQWN0aW9uQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIENvbmZpZyB7XG4gIGVudGl0eT86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRhcF9hY3Rpb24/OiBBY3Rpb25Db25maWc7XG4gIGhvbGRfYWN0aW9uPzogQWN0aW9uQ29uZmlnO1xuICBkb3VibGVfdGFwX2FjdGlvbj86IEFjdGlvbkNvbmZpZztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUFjdGlvblRvb2x0aXAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlOiBzdHJpbmcsXG4gIGNvbmZpZzogQWN0aW9uQ29uZmlnLFxuICBpc0hvbGQ6IGJvb2xlYW5cbikge1xuICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLmFjdGlvbiB8fCBjb25maWcuYWN0aW9uID09PSBcIm5vbmVcIikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgbGV0IHRvb2x0aXAgPVxuICAgIChpc0hvbGRcbiAgICAgID8gaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLmNhcmRzLnBpY3R1cmUtZWxlbWVudHMuaG9sZFwiKVxuICAgICAgOiBoYXNzLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UuY2FyZHMucGljdHVyZS1lbGVtZW50cy50YXBcIikpICsgXCIgXCI7XG5cbiAgc3dpdGNoIChjb25maWcuYWN0aW9uKSB7XG4gICAgY2FzZSBcIm5hdmlnYXRlXCI6XG4gICAgICB0b29sdGlwICs9IGAke2hhc3MubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuY2FyZHMucGljdHVyZS1lbGVtZW50cy5uYXZpZ2F0ZV90b1wiLFxuICAgICAgICBcImxvY2F0aW9uXCIsXG4gICAgICAgIGNvbmZpZy5uYXZpZ2F0aW9uX3BhdGhcbiAgICAgICl9YDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ1cmxcIjpcbiAgICAgIHRvb2x0aXAgKz0gYCR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5jYXJkcy5waWN0dXJlLWVsZW1lbnRzLnVybFwiLFxuICAgICAgICBcInVybF9wYXRoXCIsXG4gICAgICAgIGNvbmZpZy51cmxfcGF0aFxuICAgICAgKX1gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRvZ2dsZVwiOlxuICAgICAgdG9vbHRpcCArPSBgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmNhcmRzLnBpY3R1cmUtZWxlbWVudHMudG9nZ2xlXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBzdGF0ZVxuICAgICAgKX1gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGwtc2VydmljZVwiOlxuICAgICAgdG9vbHRpcCArPSBgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmNhcmRzLnBpY3R1cmUtZWxlbWVudHMuY2FsbF9zZXJ2aWNlXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBjb25maWcuc2VydmljZVxuICAgICAgKX1gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1vcmUtaW5mb1wiOlxuICAgICAgdG9vbHRpcCArPSBgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmNhcmRzLnBpY3R1cmUtZWxlbWVudHMubW9yZV9pbmZvXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBzdGF0ZVxuICAgICAgKX1gO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdG9vbHRpcDtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVUb29sdGlwID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGNvbmZpZzogQ29uZmlnKTogc3RyaW5nID0+IHtcbiAgaWYgKGNvbmZpZy50aXRsZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50aXRsZSkge1xuICAgIHJldHVybiBjb25maWcudGl0bGU7XG4gIH1cblxuICBsZXQgc3RhdGVOYW1lID0gXCJcIjtcbiAgbGV0IHRvb2x0aXAgPSBcIlwiO1xuXG4gIGlmIChjb25maWcuZW50aXR5KSB7XG4gICAgc3RhdGVOYW1lID1cbiAgICAgIGNvbmZpZy5lbnRpdHkgaW4gaGFzcy5zdGF0ZXNcbiAgICAgICAgPyBjb21wdXRlU3RhdGVOYW1lKGhhc3Muc3RhdGVzW2NvbmZpZy5lbnRpdHldKVxuICAgICAgICA6IGNvbmZpZy5lbnRpdHk7XG4gIH1cblxuICBpZiAoIWNvbmZpZy50YXBfYWN0aW9uICYmICFjb25maWcuaG9sZF9hY3Rpb24pIHtcbiAgICByZXR1cm4gc3RhdGVOYW1lO1xuICB9XG5cbiAgY29uc3QgdGFwVG9vbHRpcCA9IGNvbmZpZy50YXBfYWN0aW9uXG4gICAgPyBjb21wdXRlQWN0aW9uVG9vbHRpcChoYXNzLCBzdGF0ZU5hbWUsIGNvbmZpZy50YXBfYWN0aW9uLCBmYWxzZSlcbiAgICA6IFwiXCI7XG4gIGNvbnN0IGhvbGRUb29sdGlwID0gY29uZmlnLmhvbGRfYWN0aW9uXG4gICAgPyBjb21wdXRlQWN0aW9uVG9vbHRpcChoYXNzLCBzdGF0ZU5hbWUsIGNvbmZpZy5ob2xkX2FjdGlvbiwgdHJ1ZSlcbiAgICA6IFwiXCI7XG5cbiAgY29uc3QgbmV3bGluZSA9IHRhcFRvb2x0aXAgJiYgaG9sZFRvb2x0aXAgPyBcIlxcblwiIDogXCJcIjtcblxuICB0b29sdGlwID0gdGFwVG9vbHRpcCArIG5ld2xpbmUgKyBob2xkVG9vbHRpcDtcblxuICByZXR1cm4gdG9vbHRpcDtcbn07XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLXJpcHBsZVwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeUFsbCxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCB0eXBlIHsgU3RhdGVCYWRnZSB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkhhbmRsZXJFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgRW50aXRpZXNDYXJkRW50aXR5Q29uZmlnIH0gZnJvbSBcIi4uL2NhcmRzL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlVG9vbHRpcCB9IGZyb20gXCIuLi9jb21tb24vY29tcHV0ZS10b29sdGlwXCI7XG5pbXBvcnQgeyBhY3Rpb25IYW5kbGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9kaXJlY3RpdmVzL2FjdGlvbi1oYW5kbGVyLWRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgaGFuZGxlQWN0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9oYW5kbGUtYWN0aW9uXCI7XG5pbXBvcnQgeyBoYXNBY3Rpb24gfSBmcm9tIFwiLi4vY29tbW9uL2hhcy1hY3Rpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktYnV0dG9ucy1iYXNlXCIpXG5leHBvcnQgY2xhc3MgSHVpQnV0dG9uc0Jhc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbmZpZ0VudGl0aWVzPzogRW50aXRpZXNDYXJkRW50aXR5Q29uZmlnW107XG5cbiAgQHF1ZXJ5QWxsKFwic3RhdGUtYmFkZ2VcIikgcHJvdGVjdGVkIF9iYWRnZXMhOiBTdGF0ZUJhZGdlW107XG5cbiAgcHJpdmF0ZSBfaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgc2V0IGhhc3MoaGFzczogSG9tZUFzc2lzdGFudCkge1xuICAgIHRoaXMuX2hhc3MgPSBoYXNzO1xuICAgIGNvbnN0IGVudGl0aWVzU2hvd2luZ0ljb25zID0gdGhpcy5jb25maWdFbnRpdGllcz8uZmlsdGVyKFxuICAgICAgKGVudGl0eSkgPT4gZW50aXR5LnNob3dfaWNvbiAhPT0gZmFsc2VcbiAgICApO1xuICAgIHRoaXMuX2JhZGdlcy5mb3JFYWNoKChiYWRnZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgYmFkZ2UuaGFzcyA9IGhhc3M7XG4gICAgICBiYWRnZS5zdGF0ZU9iaiA9IGhhc3Muc3RhdGVzW2VudGl0aWVzU2hvd2luZ0ljb25zIVtpbmRleF0uZW50aXR5XTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7KHRoaXMuY29uZmlnRW50aXRpZXMgfHwgW10pLm1hcCgoZW50aXR5Q29uZikgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuX2hhc3MhLnN0YXRlc1tlbnRpdHlDb25mLmVudGl0eV07XG4gICAgICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPSdtaXNzaW5nJz48aXJvbi1pY29uIGljb249XCJoYXNzOmFsZXJ0XCI+PC9kaXY+YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIEBhY3Rpb249JHt0aGlzLl9oYW5kbGVBY3Rpb259XG4gICAgICAgICAgICAuYWN0aW9uSGFuZGxlcj0ke2FjdGlvbkhhbmRsZXIoe1xuICAgICAgICAgICAgICBoYXNIb2xkOiBoYXNBY3Rpb24oZW50aXR5Q29uZi5ob2xkX2FjdGlvbiksXG4gICAgICAgICAgICAgIGhhc0RvdWJsZUNsaWNrOiBoYXNBY3Rpb24oZW50aXR5Q29uZi5kb3VibGVfdGFwX2FjdGlvbiksXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC5jb25maWc9JHtlbnRpdHlDb25mfVxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAke2VudGl0eUNvbmYuc2hvd19pY29uICE9PSBmYWxzZVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9JHtjb21wdXRlVG9vbHRpcCh0aGlzLl9oYXNzISwgZW50aXR5Q29uZil9XG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5faGFzc31cbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7c3RhdGVPYmp9XG4gICAgICAgICAgICAgICAgICAgIC5vdmVycmlkZUljb249JHtlbnRpdHlDb25mLmljb259XG4gICAgICAgICAgICAgICAgICAgIC5vdmVycmlkZUltYWdlPSR7ZW50aXR5Q29uZi5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgc3RhdGVDb2xvclxuICAgICAgICAgICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgJHtlbnRpdHlDb25mLnNob3dfbmFtZSB8fFxuICAgICAgICAgICAgICAoZW50aXR5Q29uZi5uYW1lICYmIGVudGl0eUNvbmYuc2hvd19uYW1lICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICA/IGVudGl0eUNvbmYubmFtZSB8fCBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKVxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxtd2MtcmlwcGxlIHVuYm91bmRlZD48L213Yy1yaXBwbGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICB9KX1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQWN0aW9uKGV2OiBBY3Rpb25IYW5kbGVyRXZlbnQpIHtcbiAgICBjb25zdCBjb25maWcgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmNvbmZpZyBhcyBFbnRpdGllc0NhcmRFbnRpdHlDb25maWc7XG4gICAgaGFuZGxlQWN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIHRoaXMuX2hhc3MhLFxuICAgICAgeyB0YXBfYWN0aW9uOiB7IGFjdGlvbjogXCJ0b2dnbGVcIiB9LCAuLi5jb25maWcgfSxcbiAgICAgIGV2LmRldGFpbC5hY3Rpb24hXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICB9XG4gICAgICAubWlzc2luZyB7XG4gICAgICAgIGNvbG9yOiAjZmNlNTg4O1xuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktYnV0dG9ucy1iYXNlXCI6IEh1aUJ1dHRvbnNCYXNlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBbkNBO0FBQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBVUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFQQTs7QUFhQTs7OztBQXZCQTtBQStCQTtBQXRDQTtBQXdDQTtBQTNEQTtBQUFBO0FBQUE7QUFBQTtBQThEQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQXJFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0VBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTtBQXRGQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
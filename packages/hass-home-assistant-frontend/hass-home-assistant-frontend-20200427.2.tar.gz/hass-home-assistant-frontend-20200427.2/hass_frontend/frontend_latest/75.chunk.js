(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[75],{

/***/ "./src/panels/lovelace/cards/hui-picture-card.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-card.ts ***!
  \*******************************************************/
/*! exports provided: HuiPictureCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPictureCard", function() { return HuiPictureCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ "./src/panels/lovelace/common/directives/action-handler-directive.ts");
/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/handle-action */ "./src/panels/lovelace/common/handle-action.ts");
/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-action */ "./src/panels/lovelace/common/has-action.ts");
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









let HuiPictureCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-picture-card")], function (_initialize, _LitElement) {
  class HuiPictureCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiPictureCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-picture-card-editor */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-delete-card~hui-dialog-edit-card~hui-dialog-suggest-card~h~a8cf51a3"), __webpack_require__.e("hui-alarm-panel-card-editor~hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui~192a43f6"), __webpack_require__.e("hui-button-card-editor~hui-entity-card-editor~hui-light-card-editor~hui-picture-card-editor~hui-pict~6832566a"), __webpack_require__.e("hui-picture-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-picture-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-picture-card-editor.ts"));
        return document.createElement("hui-picture-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig() {
        return {
          type: "picture",
          image: "https://demo.home-assistant.io/stub_config/t-shirt-promo.png",
          tap_action: {
            action: "none"
          },
          hold_action: {
            action: "none"
          }
        };
      }
    }, {
      kind: "field",
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
        if (!config || !config.image) {
          throw new Error("Invalid Configuration: 'image' required");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiPictureCard.prototype), "updated", this).call(this, changedProps);

        if (!this._config || !this.hass) {
          return;
        }

        const oldHass = changedProps.get("hass");
        const oldConfig = changedProps.get("_config");

        if (!oldHass || !oldConfig || oldHass.themes !== this.hass.themes || oldConfig.theme !== this._config.theme) {
          Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_3__["applyThemesOnElement"])(this, this.hass.themes, this._config.theme);
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
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${Object(_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_5__["actionHandler"])({
          hasHold: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_7__["hasAction"])(this._config.hold_action),
          hasDoubleClick: Object(_common_has_action__WEBPACK_IMPORTED_MODULE_7__["hasAction"])(this._config.double_tap_action)
        })}
        tabindex=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_2__["ifDefined"])(Object(_common_has_action__WEBPACK_IMPORTED_MODULE_7__["hasAction"])(this._config.tap_action) ? "0" : undefined)}
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          clickable: Boolean(this._config.tap_action || this._config.hold_action || this._config.double_tap_action)
        })}"
      >
        <img src="${this.hass.hassUrl(this._config.image)}" />
      </ha-card>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-card {
        overflow: hidden;
      }

      ha-card.clickable {
        cursor: pointer;
      }

      img {
        display: block;
        width: 100%;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_handleAction",
      value: function _handleAction(ev) {
        Object(_common_handle_action__WEBPACK_IMPORTED_MODULE_6__["handleAction"])(this, this.hass, this._config, ev.detail.action);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1waWN0dXJlLWNhcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IGlmRGVmaW5lZCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2lmLWRlZmluZWRcIjtcbmltcG9ydCB7IGFwcGx5VGhlbWVzT25FbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IHsgQWN0aW9uSGFuZGxlckV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGFjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vY29tbW9uL2RpcmVjdGl2ZXMvYWN0aW9uLWhhbmRsZXItZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBoYW5kbGVBY3Rpb24gfSBmcm9tIFwiLi4vY29tbW9uL2hhbmRsZS1hY3Rpb25cIjtcbmltcG9ydCB7IGhhc0FjdGlvbiB9IGZyb20gXCIuLi9jb21tb24vaGFzLWFjdGlvblwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkLCBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBpY3R1cmVDYXJkQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktcGljdHVyZS1jYXJkXCIpXG5leHBvcnQgY2xhc3MgSHVpUGljdHVyZUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VDYXJkIHtcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDb25maWdFbGVtZW50KCk6IFByb21pc2U8TG92ZWxhY2VDYXJkRWRpdG9yPiB7XG4gICAgYXdhaXQgaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJodWktcGljdHVyZS1jYXJkLWVkaXRvclwiICovIFwiLi4vZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktcGljdHVyZS1jYXJkLWVkaXRvclwiXG4gICAgKTtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh1aS1waWN0dXJlLWNhcmQtZWRpdG9yXCIpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRTdHViQ29uZmlnKCk6IFBpY3R1cmVDYXJkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJwaWN0dXJlXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2RlbW8uaG9tZS1hc3Npc3RhbnQuaW8vc3R1Yl9jb25maWcvdC1zaGlydC1wcm9tby5wbmdcIixcbiAgICAgIHRhcF9hY3Rpb246IHsgYWN0aW9uOiBcIm5vbmVcIiB9LFxuICAgICAgaG9sZF9hY3Rpb246IHsgYWN0aW9uOiBcIm5vbmVcIiB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIF9jb25maWc/OiBQaWN0dXJlQ2FyZENvbmZpZztcblxuICBwdWJsaWMgZ2V0Q2FyZFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBQaWN0dXJlQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuaW1hZ2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQ29uZmlndXJhdGlvbjogJ2ltYWdlJyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgb2xkQ29uZmlnID0gY2hhbmdlZFByb3BzLmdldChcIl9jb25maWdcIikgYXNcbiAgICAgIHwgUGljdHVyZUNhcmRDb25maWdcbiAgICAgIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgIW9sZEhhc3MgfHxcbiAgICAgICFvbGRDb25maWcgfHxcbiAgICAgIG9sZEhhc3MudGhlbWVzICE9PSB0aGlzLmhhc3MudGhlbWVzIHx8XG4gICAgICBvbGRDb25maWcudGhlbWUgIT09IHRoaXMuX2NvbmZpZy50aGVtZVxuICAgICkge1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQodGhpcywgdGhpcy5oYXNzLnRoZW1lcywgdGhpcy5fY29uZmlnLnRoZW1lKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgQGFjdGlvbj0ke3RoaXMuX2hhbmRsZUFjdGlvbn1cbiAgICAgICAgLmFjdGlvbkhhbmRsZXI9JHthY3Rpb25IYW5kbGVyKHtcbiAgICAgICAgICBoYXNIb2xkOiBoYXNBY3Rpb24odGhpcy5fY29uZmlnIS5ob2xkX2FjdGlvbiksXG4gICAgICAgICAgaGFzRG91YmxlQ2xpY2s6IGhhc0FjdGlvbih0aGlzLl9jb25maWchLmRvdWJsZV90YXBfYWN0aW9uKSxcbiAgICAgICAgfSl9XG4gICAgICAgIHRhYmluZGV4PSR7aWZEZWZpbmVkKFxuICAgICAgICAgIGhhc0FjdGlvbih0aGlzLl9jb25maWcudGFwX2FjdGlvbikgPyBcIjBcIiA6IHVuZGVmaW5lZFxuICAgICAgICApfVxuICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgIGNsaWNrYWJsZTogQm9vbGVhbihcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy50YXBfYWN0aW9uIHx8XG4gICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5ob2xkX2FjdGlvbiB8fFxuICAgICAgICAgICAgICB0aGlzLl9jb25maWcuZG91YmxlX3RhcF9hY3Rpb25cbiAgICAgICAgICApLFxuICAgICAgICB9KX1cIlxuICAgICAgPlxuICAgICAgICA8aW1nIHNyYz1cIiR7dGhpcy5oYXNzLmhhc3NVcmwodGhpcy5fY29uZmlnLmltYWdlKX1cIiAvPlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgaGEtY2FyZC5jbGlja2FibGUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQWN0aW9uKGV2OiBBY3Rpb25IYW5kbGVyRXZlbnQpIHtcbiAgICBoYW5kbGVBY3Rpb24odGhpcywgdGhpcy5oYXNzISwgdGhpcy5fY29uZmlnISwgZXYuZGV0YWlsLmFjdGlvbiEpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktcGljdHVyZS1jYXJkXCI6IEh1aVBpY3R1cmVDYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLHEvQkFDQTtBQUVBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0JBO0FBQ0E7QUF2QkE7QUFBQTtBQUFBO0FBQUE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBa0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBbkRBO0FBQUE7QUFBQTtBQUFBO0FBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7QUFDQTtBQURBOztBQVFBOztBQWxCQTtBQXFCQTtBQS9FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0ZBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTtBQWhHQTtBQUFBO0FBQUE7QUFBQTtBQW1HQTtBQUNBO0FBcEdBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
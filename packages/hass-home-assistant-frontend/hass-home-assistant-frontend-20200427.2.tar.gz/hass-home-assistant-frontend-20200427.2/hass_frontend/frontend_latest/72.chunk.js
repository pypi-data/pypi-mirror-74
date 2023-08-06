(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[72],{

/***/ "./src/panels/lovelace/cards/hui-conditional-card.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-conditional-card.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/compute-card-size */ "./src/panels/lovelace/common/compute-card-size.ts");
/* harmony import */ var _components_hui_conditional_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-conditional-base */ "./src/panels/lovelace/components/hui-conditional-base.ts");
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-element/create-card-element */ "./src/panels/lovelace/create-element/create-card-element.ts");
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






let HuiConditionalCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-conditional-card")], function (_initialize, _HuiConditionalBase) {
  class HuiConditionalCard extends _HuiConditionalBase {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiConditionalCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-conditional-card-editor */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("vendors~entity-editor-dialog~hui-conditional-card-editor~hui-stack-card-editor~panel-developer-tools~838abec3"), __webpack_require__.e("vendors~dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~pa~f9cbd3da"), __webpack_require__.e("vendors~hui-conditional-card-editor"), __webpack_require__.e(10), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e("hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor"), __webpack_require__.e("hui-conditional-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-conditional-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-conditional-card-editor.ts"));
        return document.createElement("hui-conditional-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig() {
        return {
          type: "conditional",
          conditions: [],
          // @ts-ignore
          card: {}
        };
      }
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        this.validateConfig(config);

        if (!config.card) {
          throw new Error("No card configured.");
        }

        this._element = this._createCardElement(config.card);
      }
    }, {
      kind: "method",
      key: "getCardSize",
      value: function getCardSize() {
        return Object(_common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__["computeCardSize"])(this._element);
      }
    }, {
      kind: "method",
      key: "_createCardElement",
      value: function _createCardElement(cardConfig) {
        const element = Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_3__["createCardElement"])(cardConfig);

        if (this.hass) {
          element.hass = this.hass;
        }

        element.addEventListener("ll-rebuild", ev => {
          ev.stopPropagation();

          this._rebuildCard(cardConfig);
        }, {
          once: true
        });
        return element;
      }
    }, {
      kind: "method",
      key: "_rebuildCard",
      value: function _rebuildCard(config) {
        this._element = this._createCardElement(config);

        if (this.lastChild) {
          this.replaceChild(this._element, this.lastChild);
        }
      }
    }]
  };
}, _components_hui_conditional_base__WEBPACK_IMPORTED_MODULE_2__["HuiConditionalBase"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1jb25kaXRpb25hbC1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBjb21wdXRlQ2FyZFNpemUgfSBmcm9tIFwiLi4vY29tbW9uL2NvbXB1dGUtY2FyZC1zaXplXCI7XG5pbXBvcnQgeyBIdWlDb25kaXRpb25hbEJhc2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9odWktY29uZGl0aW9uYWwtYmFzZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZEVsZW1lbnQgfSBmcm9tIFwiLi4vY3JlYXRlLWVsZW1lbnQvY3JlYXRlLWNhcmQtZWxlbWVudFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkLCBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmRpdGlvbmFsQ2FyZENvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWNvbmRpdGlvbmFsLWNhcmRcIilcbmNsYXNzIEh1aUNvbmRpdGlvbmFsQ2FyZCBleHRlbmRzIEh1aUNvbmRpdGlvbmFsQmFzZSBpbXBsZW1lbnRzIExvdmVsYWNlQ2FyZCB7XG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q29uZmlnRWxlbWVudCgpOiBQcm9taXNlPExvdmVsYWNlQ2FyZEVkaXRvcj4ge1xuICAgIGF3YWl0IGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLWNvbmRpdGlvbmFsLWNhcmQtZWRpdG9yXCIgKi8gXCIuLi9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1jb25kaXRpb25hbC1jYXJkLWVkaXRvclwiXG4gICAgKTtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh1aS1jb25kaXRpb25hbC1jYXJkLWVkaXRvclwiKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R1YkNvbmZpZygpOiBDb25kaXRpb25hbENhcmRDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcImNvbmRpdGlvbmFsXCIsXG4gICAgICBjb25kaXRpb25zOiBbXSxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNhcmQ6IHt9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogQ29uZGl0aW9uYWxDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGF0ZUNvbmZpZyhjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FyZCBjb25maWd1cmVkLlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fY3JlYXRlQ2FyZEVsZW1lbnQoY29uZmlnLmNhcmQpO1xuICB9XG5cbiAgcHVibGljIGdldENhcmRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGNvbXB1dGVDYXJkU2l6ZSh0aGlzLl9lbGVtZW50IGFzIExvdmVsYWNlQ2FyZCk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDYXJkRWxlbWVudChjYXJkQ29uZmlnOiBMb3ZlbGFjZUNhcmRDb25maWcpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2FyZEVsZW1lbnQoY2FyZENvbmZpZykgYXMgTG92ZWxhY2VDYXJkO1xuICAgIGlmICh0aGlzLmhhc3MpIHtcbiAgICAgIGVsZW1lbnQuaGFzcyA9IHRoaXMuaGFzcztcbiAgICB9XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJsbC1yZWJ1aWxkXCIsXG4gICAgICAoZXYpID0+IHtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuX3JlYnVpbGRDYXJkKGNhcmRDb25maWcpO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlYnVpbGRDYXJkKGNvbmZpZzogTG92ZWxhY2VDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2NyZWF0ZUNhcmRFbGVtZW50KGNvbmZpZyk7XG4gICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICB0aGlzLnJlcGxhY2VDaGlsZCh0aGlzLl9lbGVtZW50LCB0aGlzLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY29uZGl0aW9uYWwtY2FyZFwiOiBIdWlDb25kaXRpb25hbENhcmQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7Ozs7O0FBQ0E7QUFDQSxpbkNBQ0E7QUFFQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFwREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-lovelace"],{

/***/ "./src/panels/config/lovelace/ha-config-lovelace.ts":
/*!**********************************************************!*\
  !*** ./src/panels/config/lovelace/ha-config-lovelace.ts ***!
  \**********************************************************/
/*! exports provided: lovelaceTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lovelaceTabs", function() { return lovelaceTabs; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
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



const lovelaceTabs = [{
  component: "lovelace",
  path: "/config/lovelace/dashboards",
  translationKey: "ui.panel.config.lovelace.dashboards.caption",
  icon: "hass:view-dashboard"
}, {
  component: "lovelace",
  path: "/config/lovelace/resources",
  translationKey: "ui.panel.config.lovelace.resources.caption",
  icon: "hass:file-multiple",
  advancedOnly: true
}];

let HaConfigLovelace = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-config-lovelace")], function (_initialize, _HassRouterPage) {
  class HaConfigLovelace extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigLovelace,
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
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboards",
          routes: {
            dashboards: {
              tag: "ha-config-lovelace-dashboards",
              load: () => Promise.all(/*! import() | panel-config-lovelace-dashboards */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e(16), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("panel-config-lovelace-dashboards")]).then(__webpack_require__.bind(null, /*! ./dashboards/ha-config-lovelace-dashboards */ "./src/panels/config/lovelace/dashboards/ha-config-lovelace-dashboards.ts")),
              cache: true
            },
            resources: {
              tag: "ha-config-lovelace-resources",
              load: () => Promise.all(/*! import() | panel-config-lovelace-resources */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e(16), __webpack_require__.e(15), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-confi~41c12095"), __webpack_require__.e("vendors~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-~9e8e2a3f"), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-areas~panel-config-automation~panel-config-helper~c9d97d21"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"), __webpack_require__.e("panel-config-lovelace-resources")]).then(__webpack_require__.bind(null, /*! ./resources/ha-config-lovelace-resources */ "./src/panels/config/lovelace/resources/ha-config-lovelace-resources.ts"))
            }
          }
        };
      }

    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(pageEl) {
        pageEl.hass = this.hass;
        pageEl.narrow = this.narrow;
        pageEl.isWide = this.isWide;
        pageEl.route = this.routeTail;
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_1__["HassRouterPage"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWxvdmVsYWNlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvbG92ZWxhY2UvaGEtY29uZmlnLWxvdmVsYWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQge1xuICBIYXNzUm91dGVyUGFnZSxcbiAgUm91dGVyT3B0aW9ucyxcbn0gZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgbG92ZWxhY2VUYWJzID0gW1xuICB7XG4gICAgY29tcG9uZW50OiBcImxvdmVsYWNlXCIsXG4gICAgcGF0aDogXCIvY29uZmlnL2xvdmVsYWNlL2Rhc2hib2FyZHNcIixcbiAgICB0cmFuc2xhdGlvbktleTogXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5jYXB0aW9uXCIsXG4gICAgaWNvbjogXCJoYXNzOnZpZXctZGFzaGJvYXJkXCIsXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IFwibG92ZWxhY2VcIixcbiAgICBwYXRoOiBcIi9jb25maWcvbG92ZWxhY2UvcmVzb3VyY2VzXCIsXG4gICAgdHJhbnNsYXRpb25LZXk6IFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLnJlc291cmNlcy5jYXB0aW9uXCIsXG4gICAgaWNvbjogXCJoYXNzOmZpbGUtbXVsdGlwbGVcIixcbiAgICBhZHZhbmNlZE9ubHk6IHRydWUsXG4gIH0sXG5dO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvbmZpZy1sb3ZlbGFjZVwiKVxuY2xhc3MgSGFDb25maWdMb3ZlbGFjZSBleHRlbmRzIEhhc3NSb3V0ZXJQYWdlIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImRhc2hib2FyZHNcIixcbiAgICByb3V0ZXM6IHtcbiAgICAgIGRhc2hib2FyZHM6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1sb3ZlbGFjZS1kYXNoYm9hcmRzXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctbG92ZWxhY2UtZGFzaGJvYXJkc1wiICovIFwiLi9kYXNoYm9hcmRzL2hhLWNvbmZpZy1sb3ZlbGFjZS1kYXNoYm9hcmRzXCJcbiAgICAgICAgICApLFxuICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICByZXNvdXJjZXM6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1sb3ZlbGFjZS1yZXNvdXJjZXNcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1sb3ZlbGFjZS1yZXNvdXJjZXNcIiAqLyBcIi4vcmVzb3VyY2VzL2hhLWNvbmZpZy1sb3ZlbGFjZS1yZXNvdXJjZXNcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChwYWdlRWwpIHtcbiAgICBwYWdlRWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICBwYWdlRWwubmFycm93ID0gdGhpcy5uYXJyb3c7XG4gICAgcGFnZUVsLmlzV2lkZSA9IHRoaXMuaXNXaWRlO1xuICAgIHBhZ2VFbC5yb3V0ZSA9IHRoaXMucm91dGVUYWlsO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb25maWctbG92ZWxhY2VcIjogSGFDb25maWdMb3ZlbGFjZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBU0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4a0RBRUE7QUFFQTtBQU5BO0FBUUE7QUFDQTtBQUNBLHF1REFFQTtBQUpBO0FBVEE7QUFGQTs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBakNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
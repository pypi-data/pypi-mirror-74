(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-zha"],{

/***/ "./src/panels/config/zha/zha-config-dashboard-router.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/zha/zha-config-dashboard-router.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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




let ZHAConfigDashboardRouter = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("zha-config-dashboard-router")], function (_initialize, _HassRouterPage) {
  class ZHAConfigDashboardRouter extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAConfigDashboardRouter,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboard",
          showLoading: true,
          routes: {
            dashboard: {
              tag: "zha-config-dashboard",
              load: () => Promise.all(/*! import() | zha-config-dashboard */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e("vendors~zha-config-dashboard"), __webpack_require__.e(9), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("zha-config-dashboard")]).then(__webpack_require__.bind(null, /*! ./zha-config-dashboard */ "./src/panels/config/zha/zha-config-dashboard.ts"))
            },
            device: {
              tag: "zha-device-page",
              load: () => Promise.all(/*! import() | zha-devices-page */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e("vendors~zha-devices-page"), __webpack_require__.e(9), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e(12), __webpack_require__.e("dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"), __webpack_require__.e("zha-devices-page")]).then(__webpack_require__.bind(null, /*! ./zha-device-page */ "./src/panels/config/zha/zha-device-page.ts"))
            },
            add: {
              tag: "zha-add-devices-page",
              load: () => Promise.all(/*! import() | zha-add-devices-page */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-delete-card~hui-dialog-edit-card~hui-dialog-suggest-card~h~a8cf51a3"), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(12), __webpack_require__.e("dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"), __webpack_require__.e("zha-add-devices-page")]).then(__webpack_require__.bind(null, /*! ./zha-add-devices-page */ "./src/panels/config/zha/zha-add-devices-page.ts"))
            },
            groups: {
              tag: "zha-groups-dashboard",
              load: () => Promise.all(/*! import() | zha-groups-dashboard */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e("vendors~zha-groups-dashboard"), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("zha-groups-dashboard")]).then(__webpack_require__.bind(null, /*! ./zha-groups-dashboard */ "./src/panels/config/zha/zha-groups-dashboard.ts"))
            },
            group: {
              tag: "zha-group-page",
              load: () => Promise.all(/*! import() | zha-group-page */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e("vendors~zha-add-group-page~zha-group-page"), __webpack_require__.e(9), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e(12), __webpack_require__.e("dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"), __webpack_require__.e("zha-add-group-page~zha-group-page"), __webpack_require__.e("zha-group-page")]).then(__webpack_require__.bind(null, /*! ./zha-group-page */ "./src/panels/config/zha/zha-group-page.ts"))
            },
            "group-add": {
              tag: "zha-add-group-page",
              load: () => Promise.all(/*! import() | zha-add-group-page */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~ec251abe"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-co~c0ce165d"), __webpack_require__.e("vendors~zha-add-group-page~zha-group-page"), __webpack_require__.e("dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"), __webpack_require__.e(11), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~6028c3d2"), __webpack_require__.e("hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"), __webpack_require__.e("zha-add-group-page~zha-group-page"), __webpack_require__.e("zha-add-group-page")]).then(__webpack_require__.bind(null, /*! ./zha-add-group-page */ "./src/panels/config/zha/zha-add-group-page.ts"))
            }
          }
        };
      }

    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(el) {
        el.route = this.routeTail;
        el.hass = this.hass;
        el.isWide = this.isWide;
        el.narrow = this.narrow;

        if (this._currentPage === "group") {
          el.groupId = this.routeTail.path.substr(1);
        } else if (this._currentPage === "device") {
          el.ieee = this.routeTail.path.substr(1);
        }
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_1__["HassRouterPage"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXpoYS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtY29uZmlnLWRhc2hib2FyZC1yb3V0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7XG4gIEhhc3NSb3V0ZXJQYWdlLFxuICBSb3V0ZXJPcHRpb25zLFxufSBmcm9tIFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXJvdXRlci1wYWdlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiemhhLWNvbmZpZy1kYXNoYm9hcmQtcm91dGVyXCIpXG5jbGFzcyBaSEFDb25maWdEYXNoYm9hcmRSb3V0ZXIgZXh0ZW5kcyBIYXNzUm91dGVyUGFnZSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcm91dGVyT3B0aW9uczogUm91dGVyT3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0UGFnZTogXCJkYXNoYm9hcmRcIixcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGRhc2hib2FyZDoge1xuICAgICAgICB0YWc6IFwiemhhLWNvbmZpZy1kYXNoYm9hcmRcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInpoYS1jb25maWctZGFzaGJvYXJkXCIgKi8gXCIuL3poYS1jb25maWctZGFzaGJvYXJkXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIGRldmljZToge1xuICAgICAgICB0YWc6IFwiemhhLWRldmljZS1wYWdlXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ6aGEtZGV2aWNlcy1wYWdlXCIgKi8gXCIuL3poYS1kZXZpY2UtcGFnZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBhZGQ6IHtcbiAgICAgICAgdGFnOiBcInpoYS1hZGQtZGV2aWNlcy1wYWdlXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ6aGEtYWRkLWRldmljZXMtcGFnZVwiICovIFwiLi96aGEtYWRkLWRldmljZXMtcGFnZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBncm91cHM6IHtcbiAgICAgICAgdGFnOiBcInpoYS1ncm91cHMtZGFzaGJvYXJkXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ6aGEtZ3JvdXBzLWRhc2hib2FyZFwiICovIFwiLi96aGEtZ3JvdXBzLWRhc2hib2FyZFwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBncm91cDoge1xuICAgICAgICB0YWc6IFwiemhhLWdyb3VwLXBhZ2VcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ6aGEtZ3JvdXAtcGFnZVwiICovIFwiLi96aGEtZ3JvdXAtcGFnZVwiKSxcbiAgICAgIH0sXG4gICAgICBcImdyb3VwLWFkZFwiOiB7XG4gICAgICAgIHRhZzogXCJ6aGEtYWRkLWdyb3VwLXBhZ2VcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInpoYS1hZGQtZ3JvdXAtcGFnZVwiICovIFwiLi96aGEtYWRkLWdyb3VwLXBhZ2VcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChlbCk6IHZvaWQge1xuICAgIGVsLnJvdXRlID0gdGhpcy5yb3V0ZVRhaWw7XG4gICAgZWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICBlbC5pc1dpZGUgPSB0aGlzLmlzV2lkZTtcbiAgICBlbC5uYXJyb3cgPSB0aGlzLm5hcnJvdztcbiAgICBpZiAodGhpcy5fY3VycmVudFBhZ2UgPT09IFwiZ3JvdXBcIikge1xuICAgICAgZWwuZ3JvdXBJZCA9IHRoaXMucm91dGVUYWlsLnBhdGguc3Vic3RyKDEpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudFBhZ2UgPT09IFwiZGV2aWNlXCIpIHtcbiAgICAgIGVsLmllZWUgPSB0aGlzLnJvdXRlVGFpbC5wYXRoLnN1YnN0cigxKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1jb25maWctZGFzaGJvYXJkLXJvdXRlclwiOiBaSEFDb25maWdEYXNoYm9hcmRSb3V0ZXI7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtoQ0FFQTtBQUpBO0FBT0E7QUFDQTtBQUNBLHV5Q0FFQTtBQUpBO0FBT0E7QUFDQTtBQUNBLHN1QkFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBLHc1QkFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBLDgyQ0FDQTtBQUhBO0FBS0E7QUFDQTtBQUNBLGltQ0FFQTtBQUpBO0FBbENBO0FBSEE7Ozs7OztBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWhFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
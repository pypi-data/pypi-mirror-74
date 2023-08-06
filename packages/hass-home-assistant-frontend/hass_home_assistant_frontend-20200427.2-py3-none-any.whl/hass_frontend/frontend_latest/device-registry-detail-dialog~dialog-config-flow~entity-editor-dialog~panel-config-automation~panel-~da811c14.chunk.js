(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["device-registry-detail-dialog~dialog-config-flow~entity-editor-dialog~panel-config-automation~panel-~da811c14"],{

/***/ "./src/mixins/subscribe-mixin.ts":
/*!***************************************!*\
  !*** ./src/mixins/subscribe-mixin.ts ***!
  \***************************************/
/*! exports provided: SubscribeMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeMixin", function() { return SubscribeMixin; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
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


const SubscribeMixin = superClass => {
  let SubscribeClass = _decorate(null, function (_initialize, _superClass) {
    class SubscribeClass extends _superClass {
      constructor(...args) {
        super(...args);

        _initialize(this);
      }

    }

    return {
      F: SubscribeClass,
      d: [{
        kind: "field",
        decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
        key: "hass",
        value: void 0
      }, {
        kind: "field",
        key: "__unsubs",
        value: void 0
      }, {
        kind: "method",
        key: "connectedCallback",
        value: function connectedCallback() {
          _get(_getPrototypeOf(SubscribeClass.prototype), "connectedCallback", this).call(this);

          this.__checkSubscribed();
        }
      }, {
        kind: "method",
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(SubscribeClass.prototype), "disconnectedCallback", this).call(this);

          if (this.__unsubs) {
            while (this.__unsubs.length) {
              this.__unsubs.pop()();
            }

            this.__unsubs = undefined;
          }
        }
      }, {
        kind: "method",
        key: "updated",
        value: function updated(changedProps) {
          _get(_getPrototypeOf(SubscribeClass.prototype), "updated", this).call(this, changedProps);

          if (changedProps.has("hass")) {
            this.__checkSubscribed();
          }
        }
      }, {
        kind: "method",
        key: "hassSubscribe",
        value: function hassSubscribe() {
          return [];
        }
      }, {
        kind: "method",
        key: "__checkSubscribed",
        value: function __checkSubscribed() {
          if (this.__unsubs !== undefined || !this.isConnected || this.hass === undefined) {
            return;
          }

          this.__unsubs = this.hassSubscribe();
        }
      }]
    };
  }, superClass);

  return SubscribeClass;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2d+ZGlhbG9nLWNvbmZpZy1mbG93fmVudGl0eS1lZGl0b3ItZGlhbG9nfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLX5kYTgxMWMxNC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9taXhpbnMvc3Vic2NyaWJlLW1peGluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IHByb3BlcnR5LCBQcm9wZXJ0eVZhbHVlcywgVXBkYXRpbmdFbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhhc3NTdWJzY3JpYmVFbGVtZW50IHtcbiAgaGFzc1N1YnNjcmliZSgpOiBVbnN1YnNjcmliZUZ1bmNbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFN1YnNjcmliZU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxVcGRhdGluZ0VsZW1lbnQ+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIFN1YnNjcmliZUNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gICAgcHJpdmF0ZSBfX3Vuc3Vicz86IFVuc3Vic2NyaWJlRnVuY1tdO1xuXG4gICAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX19jaGVja1N1YnNjcmliZWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgaWYgKHRoaXMuX191bnN1YnMpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX191bnN1YnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fX3Vuc3Vicy5wb3AoKSEoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fdW5zdWJzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSkge1xuICAgICAgICB0aGlzLl9fY2hlY2tTdWJzY3JpYmVkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhc3NTdWJzY3JpYmUoKTogVW5zdWJzY3JpYmVGdW5jW10ge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHByaXZhdGUgX19jaGVja1N1YnNjcmliZWQoKTogdm9pZCB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX191bnN1YnMgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAhKCh0aGlzIGFzIHVua25vd24pIGFzIEVsZW1lbnQpLmlzQ29ubmVjdGVkIHx8XG4gICAgICAgIHRoaXMuaGFzcyA9PT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3Vuc3VicyA9IHRoaXMuaGFzc1N1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gU3Vic2NyaWJlQ2xhc3M7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFzQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBQUE7QUFBQTtBQUFBO0FBNkJBO0FBQ0E7QUE5QkE7QUFBQTtBQUFBO0FBQUE7QUFpQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBekNBO0FBQUE7QUFBQTtBQUNBO0FBMENBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
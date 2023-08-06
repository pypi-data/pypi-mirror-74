(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[69],{

/***/ "./src/panels/lovelace/common/process-config-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/process-config-entities.ts ***!
  \***************************************************************/
/*! exports provided: processConfigEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processConfigEntities", function() { return processConfigEntities; });
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
// Parse array of entity objects from config

const processConfigEntities = entities => {
  if (!entities || !Array.isArray(entities)) {
    throw new Error("Entities need to be an array");
  }

  return entities.map((entityConf, index) => {
    if (typeof entityConf === "object" && !Array.isArray(entityConf) && entityConf.type) {
      return entityConf;
    }

    let config;

    if (typeof entityConf === "string") {
      config = {
        entity: entityConf
      };
    } else if (typeof entityConf === "object" && !Array.isArray(entityConf)) {
      if (!entityConf.entity) {
        throw new Error(`Entity object at position ${index} is missing entity field.`);
      }

      config = entityConf;
    } else {
      throw new Error(`Invalid entity specified at position ${index}.`);
    }

    if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_0__["isValidEntityId"])(config.entity)) {
      throw new Error(`Invalid entity ID at position ${index}: ${config.entity}`);
    }

    return config;
  });
};

/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-buttons-row.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-buttons-row.ts ***!
  \*************************************************************/
/*! exports provided: HuiButtonsRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiButtonsRow", function() { return HuiButtonsRow; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _components_hui_buttons_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-buttons-base */ "./src/panels/lovelace/components/hui-buttons-base.ts");
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




let HuiButtonsRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-buttons-row")], function (_initialize, _LitElement) {
  class HuiButtonsRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiButtonsRow,
    d: [{
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig() {
        return {
          entities: []
        };
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      key: "_configEntities",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        this._configEntities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_1__["processConfigEntities"])(config.entities);
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hui-buttons-base
        .hass=${this.hass}
        .configEntities=${this._configEntities}
      ></hui-buttons-base>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9wcm9jZXNzLWNvbmZpZy1lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL3NwZWNpYWwtcm93cy9odWktYnV0dG9ucy1yb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFyc2UgYXJyYXkgb2YgZW50aXR5IG9iamVjdHMgZnJvbSBjb25maWdcbmltcG9ydCB7IGlzVmFsaWRFbnRpdHlJZCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3ZhbGlkX2VudGl0eV9pZFwiO1xuaW1wb3J0IHsgRW50aXR5Q29uZmlnIH0gZnJvbSBcIi4uL2VudGl0eS1yb3dzL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9jZXNzQ29uZmlnRW50aXRpZXMgPSA8VCBleHRlbmRzIEVudGl0eUNvbmZpZz4oXG4gIGVudGl0aWVzOiBBcnJheTxUIHwgc3RyaW5nPlxuKTogVFtdID0+IHtcbiAgaWYgKCFlbnRpdGllcyB8fCAhQXJyYXkuaXNBcnJheShlbnRpdGllcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbnRpdGllcyBuZWVkIHRvIGJlIGFuIGFycmF5XCIpO1xuICB9XG5cbiAgcmV0dXJuIGVudGl0aWVzLm1hcChcbiAgICAoZW50aXR5Q29uZiwgaW5kZXgpOiBUID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGVudGl0eUNvbmYgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoZW50aXR5Q29uZikgJiZcbiAgICAgICAgZW50aXR5Q29uZi50eXBlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eUNvbmY7XG4gICAgICB9XG5cbiAgICAgIGxldCBjb25maWc6IFQ7XG5cbiAgICAgIGlmICh0eXBlb2YgZW50aXR5Q29uZiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25maWcgPSB7IGVudGl0eTogZW50aXR5Q29uZiB9IGFzIFQ7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbnRpdHlDb25mID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGVudGl0eUNvbmYpKSB7XG4gICAgICAgIGlmICghZW50aXR5Q29uZi5lbnRpdHkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgRW50aXR5IG9iamVjdCBhdCBwb3NpdGlvbiAke2luZGV4fSBpcyBtaXNzaW5nIGVudGl0eSBmaWVsZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcgPSBlbnRpdHlDb25mIGFzIFQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZW50aXR5IHNwZWNpZmllZCBhdCBwb3NpdGlvbiAke2luZGV4fS5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkRW50aXR5SWQoY29uZmlnLmVudGl0eSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGVudGl0eSBJRCBhdCBwb3NpdGlvbiAke2luZGV4fTogJHtjb25maWcuZW50aXR5fWBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG59O1xuIiwiaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHByb2Nlc3NDb25maWdFbnRpdGllcyB9IGZyb20gXCIuLi9jb21tb24vcHJvY2Vzcy1jb25maWctZW50aXRpZXNcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLWJ1dHRvbnMtYmFzZVwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uc1Jvd0NvbmZpZyxcbiAgRW50aXR5Q29uZmlnLFxuICBMb3ZlbGFjZVJvdyxcbn0gZnJvbSBcIi4uL2VudGl0eS1yb3dzL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWJ1dHRvbnMtcm93XCIpXG5leHBvcnQgY2xhc3MgSHVpQnV0dG9uc1JvdyBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZVJvdyB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R1YkNvbmZpZygpOiBvYmplY3Qge1xuICAgIHJldHVybiB7IGVudGl0aWVzOiBbXSB9O1xuICB9XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByaXZhdGUgX2NvbmZpZ0VudGl0aWVzPzogRW50aXR5Q29uZmlnW107XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEJ1dHRvbnNSb3dDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NDb25maWdFbnRpdGllcyhjb25maWcuZW50aXRpZXMpO1xuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGh1aS1idXR0b25zLWJhc2VcbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIC5jb25maWdFbnRpdGllcz0ke3RoaXMuX2NvbmZpZ0VudGl0aWVzfVxuICAgICAgPjwvaHVpLWJ1dHRvbnMtYmFzZT5cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktYnV0dG9ucy1yb3dcIjogSHVpQnV0dG9uc1JvdztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQVFBO0FBQ0E7QUFRQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBZUE7O0FBRUE7QUFDQTs7QUFIQTtBQU1BO0FBckJBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
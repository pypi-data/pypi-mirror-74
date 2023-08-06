(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[33],{

/***/ "./src/panels/lovelace/common/validate-condition.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/common/validate-condition.ts ***!
  \**********************************************************/
/*! exports provided: checkConditionsMet, validateConditionalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkConditionsMet", function() { return checkConditionsMet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConditionalConfig", function() { return validateConditionalConfig; });
function checkConditionsMet(conditions, hass) {
  return conditions.every(c => {
    const state = hass.states[c.entity] ? hass.states[c.entity].state : "unavailable";
    return c.state ? state === c.state : state !== c.state_not;
  });
}
function validateConditionalConfig(conditions) {
  return conditions.every(c => c.entity && (c.state || c.state_not));
}

/***/ }),

/***/ "./src/panels/lovelace/components/hui-conditional-base.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-conditional-base.ts ***!
  \****************************************************************/
/*! exports provided: HuiConditionalBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiConditionalBase", function() { return HuiConditionalBase; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_validate_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/validate-condition */ "./src/panels/lovelace/common/validate-condition.ts");
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



let HuiConditionalBase = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-conditional-base")], function (_initialize, _UpdatingElement) {
  class HuiConditionalBase extends _UpdatingElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiConditionalBase,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "editMode",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      key: "_element",
      value: void 0
    }, {
      kind: "method",
      key: "validateConfig",
      value: function validateConfig(config) {
        if (!config.conditions) {
          throw new Error("No conditions configured.");
        }

        if (!Array.isArray(config.conditions)) {
          throw new Error("Conditions should be in an array.");
        }

        if (!Object(_common_validate_condition__WEBPACK_IMPORTED_MODULE_1__["validateConditionalConfig"])(config.conditions)) {
          throw new Error("Conditions are invalid.");
        }

        if (this.lastChild) {
          this.removeChild(this.lastChild);
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "update",
      value: function update() {
        if (!this._element || !this.hass || !this._config) {
          return;
        }

        this._element.editMode = this.editMode;
        const visible = this.editMode || Object(_common_validate_condition__WEBPACK_IMPORTED_MODULE_1__["checkConditionsMet"])(this._config.conditions, this.hass);
        this.style.setProperty("display", visible ? "" : "none");

        if (visible) {
          this._element.hass = this.hass;

          if (!this._element.parentElement) {
            this.appendChild(this._element);
          }
        }
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi92YWxpZGF0ZS1jb25kaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21wb25lbnRzL2h1aS1jb25kaXRpb25hbC1iYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25kaXRpb24ge1xuICBlbnRpdHk6IHN0cmluZztcbiAgc3RhdGU/OiBzdHJpbmc7XG4gIHN0YXRlX25vdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9uc01ldChcbiAgY29uZGl0aW9uczogQ29uZGl0aW9uW10sXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnRcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29uZGl0aW9ucy5ldmVyeSgoYykgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbYy5lbnRpdHldXG4gICAgICA/IGhhc3MhLnN0YXRlc1tjLmVudGl0eV0uc3RhdGVcbiAgICAgIDogXCJ1bmF2YWlsYWJsZVwiO1xuXG4gICAgcmV0dXJuIGMuc3RhdGUgPyBzdGF0ZSA9PT0gYy5zdGF0ZSA6IHN0YXRlICE9PSBjLnN0YXRlX25vdDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbmRpdGlvbmFsQ29uZmlnKGNvbmRpdGlvbnM6IENvbmRpdGlvbltdKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb25kaXRpb25zLmV2ZXJ5KFxuICAgIChjKSA9PiAoKGMuZW50aXR5ICYmIChjLnN0YXRlIHx8IGMuc3RhdGVfbm90KSkgYXMgdW5rbm93bikgYXMgYm9vbGVhblxuICApO1xufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIFVwZGF0aW5nRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29uZGl0aW9uYWxDYXJkQ29uZmlnIH0gZnJvbSBcIi4uL2NhcmRzL3R5cGVzXCI7XG5pbXBvcnQge1xuICBjaGVja0NvbmRpdGlvbnNNZXQsXG4gIHZhbGlkYXRlQ29uZGl0aW9uYWxDb25maWcsXG59IGZyb20gXCIuLi9jb21tb24vdmFsaWRhdGUtY29uZGl0aW9uXCI7XG5pbXBvcnQgeyBDb25kaXRpb25hbFJvd0NvbmZpZywgTG92ZWxhY2VSb3cgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jb25kaXRpb25hbC1iYXNlXCIpXG5leHBvcnQgY2xhc3MgSHVpQ29uZGl0aW9uYWxCYXNlIGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlZGl0TW9kZT86IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIF9jb25maWc/OiBDb25kaXRpb25hbENhcmRDb25maWcgfCBDb25kaXRpb25hbFJvd0NvbmZpZztcblxuICBwcm90ZWN0ZWQgX2VsZW1lbnQ/OiBMb3ZlbGFjZUNhcmQgfCBMb3ZlbGFjZVJvdztcblxuICBwcm90ZWN0ZWQgdmFsaWRhdGVDb25maWcoXG4gICAgY29uZmlnOiBDb25kaXRpb25hbENhcmRDb25maWcgfCBDb25kaXRpb25hbFJvd0NvbmZpZ1xuICApOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZy5jb25kaXRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb25kaXRpb25zIGNvbmZpZ3VyZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShjb25maWcuY29uZGl0aW9ucykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbmRpdGlvbnMgc2hvdWxkIGJlIGluIGFuIGFycmF5LlwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkYXRlQ29uZGl0aW9uYWxDb25maWcoY29uZmlnLmNvbmRpdGlvbnMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25kaXRpb25zIGFyZSBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50IHx8ICF0aGlzLmhhc3MgfHwgIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZWRpdE1vZGUgPSB0aGlzLmVkaXRNb2RlO1xuXG4gICAgY29uc3QgdmlzaWJsZSA9XG4gICAgICB0aGlzLmVkaXRNb2RlIHx8IGNoZWNrQ29uZGl0aW9uc01ldCh0aGlzLl9jb25maWcuY29uZGl0aW9ucywgdGhpcy5oYXNzKTtcblxuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIHZpc2libGUgPyBcIlwiIDogXCJub25lXCIpO1xuXG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuaGFzcyA9IHRoaXMuaGFzcztcbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY29uZGl0aW9uYWwtYmFzZVwiOiBIdWlDb25kaXRpb25hbEJhc2U7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBR0E7QUFRQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakRBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
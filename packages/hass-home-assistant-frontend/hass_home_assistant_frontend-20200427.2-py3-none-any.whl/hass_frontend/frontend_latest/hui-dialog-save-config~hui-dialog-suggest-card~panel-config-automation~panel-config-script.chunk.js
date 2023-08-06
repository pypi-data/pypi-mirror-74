(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-save-config~hui-dialog-suggest-card~panel-config-automation~panel-config-script"],{

/***/ "./src/components/ha-yaml-editor.ts":
/*!******************************************!*\
  !*** ./src/components/ha-yaml-editor.ts ***!
  \******************************************/
/*! exports provided: HaYamlEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaYamlEditor", function() { return HaYamlEditor; });
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util/render-status */ "./src/common/util/render-status.ts");
/* harmony import */ var _ha_code_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-code-editor */ "./src/components/ha-code-editor.ts");
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







const isEmpty = obj => {
  if (typeof obj !== "object") {
    return false;
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
};

let HaYamlEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-yaml-editor")], function (_initialize, _LitElement) {
  class HaYamlEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaYamlEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "defaultValue",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "isValid",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_yaml",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("ha-code-editor")],
      key: "_editor",
      value: void 0
    }, {
      kind: "method",
      key: "setValue",
      value: function setValue(value) {
        try {
          this._yaml = value && !isEmpty(value) ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeDump"])(value) : "";
        } catch (err) {
          alert(`There was an error converting to YAML: ${err}`);
        }

        Object(_common_util_render_status__WEBPACK_IMPORTED_MODULE_3__["afterNextRender"])(() => {
          var _this$_editor;

          if ((_this$_editor = this._editor) === null || _this$_editor === void 0 ? void 0 : _this$_editor.codemirror) {
            this._editor.codemirror.refresh();
          }

          Object(_common_util_render_status__WEBPACK_IMPORTED_MODULE_3__["afterNextRender"])(() => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "editor-refreshed"));
        });
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        if (this.defaultValue) {
          this.setValue(this.defaultValue);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this._yaml === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${this.label ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <p>${this.label}</p> ` : ""}
      <ha-code-editor
        .value=${this._yaml}
        mode="yaml"
        .error=${this.isValid === false}
        @value-changed=${this._onChange}
      ></ha-code-editor>
    `;
      }
    }, {
      kind: "method",
      key: "_onChange",
      value: function _onChange(ev) {
        ev.stopPropagation();
        const value = ev.detail.value;
        let parsed;
        let isValid = true;

        if (value) {
          try {
            parsed = Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeLoad"])(value);
          } catch (err) {
            // Invalid YAML
            isValid = false;
          }
        } else {
          parsed = {};
        }

        this.value = parsed;
        this.isValid = isValid;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value: parsed,
          isValid
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1zYXZlLWNvbmZpZ35odWktZGlhbG9nLXN1Z2dlc3QtY2FyZH5wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctc2NyaXB0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEteWFtbC1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2FmZUR1bXAsIHNhZmVMb2FkIH0gZnJvbSBcImpzLXlhbWxcIjtcbmltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgYWZ0ZXJOZXh0UmVuZGVyIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL3JlbmRlci1zdGF0dXNcIjtcbmltcG9ydCBcIi4vaGEtY29kZS1lZGl0b3JcIjtcbmltcG9ydCB0eXBlIHsgSGFDb2RlRWRpdG9yIH0gZnJvbSBcIi4vaGEtY29kZS1lZGl0b3JcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJlZGl0b3ItcmVmcmVzaGVkXCI6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5jb25zdCBpc0VtcHR5ID0gKG9iajogb2JqZWN0KTogYm9vbGVhbiA9PiB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS15YW1sLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEhhWWFtbEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBhbnk7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGRlZmF1bHRWYWx1ZT86IGFueTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNWYWxpZCA9IHRydWU7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3lhbWwgPSBcIlwiO1xuXG4gIEBxdWVyeShcImhhLWNvZGUtZWRpdG9yXCIpIHByaXZhdGUgX2VkaXRvcj86IEhhQ29kZUVkaXRvcjtcblxuICBwdWJsaWMgc2V0VmFsdWUodmFsdWUpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5feWFtbCA9IHZhbHVlICYmICFpc0VtcHR5KHZhbHVlKSA/IHNhZmVEdW1wKHZhbHVlKSA6IFwiXCI7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgVGhlcmUgd2FzIGFuIGVycm9yIGNvbnZlcnRpbmcgdG8gWUFNTDogJHtlcnJ9YCk7XG4gICAgfVxuICAgIGFmdGVyTmV4dFJlbmRlcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZWRpdG9yPy5jb2RlbWlycm9yKSB7XG4gICAgICAgIHRoaXMuX2VkaXRvci5jb2RlbWlycm9yLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICAgIGFmdGVyTmV4dFJlbmRlcigoKSA9PiBmaXJlRXZlbnQodGhpcywgXCJlZGl0b3ItcmVmcmVzaGVkXCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAodGhpcy5feWFtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5sYWJlbCA/IGh0bWxgIDxwPiR7dGhpcy5sYWJlbH08L3A+IGAgOiBcIlwifVxuICAgICAgPGhhLWNvZGUtZWRpdG9yXG4gICAgICAgIC52YWx1ZT0ke3RoaXMuX3lhbWx9XG4gICAgICAgIG1vZGU9XCJ5YW1sXCJcbiAgICAgICAgLmVycm9yPSR7dGhpcy5pc1ZhbGlkID09PSBmYWxzZX1cbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9vbkNoYW5nZX1cbiAgICAgID48L2hhLWNvZGUtZWRpdG9yPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9vbkNoYW5nZShldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBsZXQgcGFyc2VkO1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkID0gc2FmZUxvYWQodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIEludmFsaWQgWUFNTFxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSBwYXJzZWQ7XG4gICAgdGhpcy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogcGFyc2VkLCBpc1ZhbGlkIH0gYXMgYW55KTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEteWFtbC1lZGl0b3JcIjogSGFZYW1sRWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQU5BO0FBU0E7QUE5Q0E7QUFBQTtBQUFBO0FBQUE7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXJFQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
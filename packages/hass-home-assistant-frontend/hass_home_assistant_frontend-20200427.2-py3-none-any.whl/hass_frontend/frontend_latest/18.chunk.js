(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[18],{

/***/ "./src/components/ha-code-editor.ts":
/*!******************************************!*\
  !*** ./src/components/ha-code-editor.ts ***!
  \******************************************/
/*! exports provided: HaCodeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaCodeEditor", function() { return HaCodeEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/codemirror.ondemand */ "./src/resources/codemirror.ondemand.ts");
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




let HaCodeEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-code-editor")], function (_initialize, _UpdatingElement) {
  class HaCodeEditor extends _UpdatingElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaCodeEditor,
    d: [{
      kind: "field",
      key: "codemirror",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "mode",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "autofocus",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "readOnly",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "rtl",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "error",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_value",

      value() {
        return "";
      }

    }, {
      kind: "set",
      key: "value",
      value: function value(_value) {
        this._value = _value;
      }
    }, {
      kind: "get",
      key: "value",
      value: function value() {
        return this.codemirror ? this.codemirror.getValue() : this._value;
      }
    }, {
      kind: "get",
      key: "hasComments",
      value: function hasComments() {
        return !!this.shadowRoot.querySelector("span.cm-comment");
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HaCodeEditor.prototype), "connectedCallback", this).call(this);

        if (!this.codemirror) {
          return;
        }

        this.codemirror.refresh();

        if (this.autofocus !== false) {
          this.codemirror.focus();
        }
      }
    }, {
      kind: "method",
      key: "update",
      value: function update(changedProps) {
        _get(_getPrototypeOf(HaCodeEditor.prototype), "update", this).call(this, changedProps);

        if (!this.codemirror) {
          return;
        }

        if (changedProps.has("mode")) {
          this.codemirror.setOption("mode", this.mode);
        }

        if (changedProps.has("autofocus")) {
          this.codemirror.setOption("autofocus", this.autofocus !== false);
        }

        if (changedProps.has("_value") && this._value !== this.value) {
          this.codemirror.setValue(this._value);
        }

        if (changedProps.has("rtl")) {
          this.codemirror.setOption("gutters", this._calcGutters());

          this._setScrollBarDirection();
        }

        if (changedProps.has("error")) {
          this.classList.toggle("error-state", this.error);
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaCodeEditor.prototype), "firstUpdated", this).call(this, changedProps);

        this._load();
      }
    }, {
      kind: "method",
      key: "_load",
      value: async function _load() {
        const loaded = await Object(_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_2__["loadCodeMirror"])();
        const codeMirror = loaded.codeMirror;
        const shadowRoot = this.attachShadow({
          mode: "open"
        });
        shadowRoot.innerHTML = `
    <style>
      ${loaded.codeMirrorCss}
      .CodeMirror {
        height: var(--code-mirror-height, auto);
        direction: var(--code-mirror-direction, ltr);
      }
      .CodeMirror-scroll {
        max-height: var(--code-mirror-max-height, --code-mirror-height);
      }
      .CodeMirror-gutters {
        border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        background-color: var(--paper-dialog-background-color, var(--primary-background-color));
        transition: 0.2s ease border-right;
      }
      :host(.error-state) .CodeMirror-gutters {
        border-color: var(--error-state-color, red);
      }
      .CodeMirror-focused .CodeMirror-gutters {
        border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      .CodeMirror-linenumber {
        color: var(--paper-dialog-color, var(--primary-text-color));
      }
      .rtl .CodeMirror-vscrollbar {
        right: auto;
        left: 0px;
      }
      .rtl-gutter {
        width: 20px;
      }
    </style>`;
        this.codemirror = codeMirror(shadowRoot, {
          value: this._value,
          lineNumbers: true,
          tabSize: 2,
          mode: this.mode,
          autofocus: this.autofocus !== false,
          viewportMargin: Infinity,
          readOnly: this.readOnly,
          extraKeys: {
            Tab: "indentMore",
            "Shift-Tab": "indentLess"
          },
          gutters: this._calcGutters()
        });

        this._setScrollBarDirection();

        this.codemirror.on("changes", () => this._onChange());
      }
    }, {
      kind: "method",
      key: "_onChange",
      value: function _onChange() {
        const newValue = this.value;

        if (newValue === this._value) {
          return;
        }

        this._value = newValue;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "value-changed", {
          value: this._value
        });
      }
    }, {
      kind: "method",
      key: "_calcGutters",
      value: function _calcGutters() {
        return this.rtl ? ["rtl-gutter", "CodeMirror-linenumbers"] : [];
      }
    }, {
      kind: "method",
      key: "_setScrollBarDirection",
      value: function _setScrollBarDirection() {
        if (this.codemirror) {
          this.codemirror.getWrapperElement().classList.toggle("rtl", this.rtl);
        }
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]);

/***/ }),

/***/ "./src/resources/codemirror.ondemand.ts":
/*!**********************************************!*\
  !*** ./src/resources/codemirror.ondemand.ts ***!
  \**********************************************/
/*! exports provided: loadCodeMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCodeMirror", function() { return loadCodeMirror; });
let loaded;
const loadCodeMirror = async () => {
  if (!loaded) {
    loaded = Promise.all(/*! import() | codemirror */[__webpack_require__.e("vendors~codemirror"), __webpack_require__.e("codemirror")]).then(__webpack_require__.bind(null, /*! ./codemirror */ "./src/resources/codemirror.ts"));
  }

  return loaded;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcImNvZGVtaXJyb3JcIjtcbmltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVXBkYXRpbmdFbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGxvYWRDb2RlTWlycm9yIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9jb2RlbWlycm9yLm9uZGVtYW5kXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiZWRpdG9yLXNhdmVcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29kZS1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIYUNvZGVFZGl0b3IgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBwdWJsaWMgY29kZW1pcnJvcj86IEVkaXRvcjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbW9kZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBhdXRvZm9jdXMgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBydGwgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZXJyb3IgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF92YWx1ZSA9IFwiXCI7XG5cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlbWlycm9yID8gdGhpcy5jb2RlbWlycm9yLmdldFZhbHVlKCkgOiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzQ29tbWVudHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jbS1jb21tZW50XCIpO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb2RlbWlycm9yLnJlZnJlc2goKTtcbiAgICBpZiAodGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJtb2RlXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwibW9kZVwiLCB0aGlzLm1vZGUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImF1dG9mb2N1c1wiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcImF1dG9mb2N1c1wiLCB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl92YWx1ZVwiKSAmJiB0aGlzLl92YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJydGxcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJndXR0ZXJzXCIsIHRoaXMuX2NhbGNHdXR0ZXJzKCkpO1xuICAgICAgdGhpcy5fc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiZXJyb3JcIikpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImVycm9yLXN0YXRlXCIsIHRoaXMuZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2xvYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbG9hZGVkID0gYXdhaXQgbG9hZENvZGVNaXJyb3IoKTtcblxuICAgIGNvbnN0IGNvZGVNaXJyb3IgPSBsb2FkZWQuY29kZU1pcnJvcjtcblxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuXG4gICAgc2hhZG93Um9vdCEuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT5cbiAgICAgICR7bG9hZGVkLmNvZGVNaXJyb3JDc3N9XG4gICAgICAuQ29kZU1pcnJvciB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29kZS1taXJyb3ItaGVpZ2h0LCBhdXRvKTtcbiAgICAgICAgZGlyZWN0aW9uOiB2YXIoLS1jb2RlLW1pcnJvci1kaXJlY3Rpb24sIGx0cik7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1zY3JvbGwge1xuICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1jb2RlLW1pcnJvci1tYXgtaGVpZ2h0LCAtLWNvZGUtbWlycm9yLWhlaWdodCk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBib3JkZXItcmlnaHQ7XG4gICAgICB9XG4gICAgICA6aG9zdCguZXJyb3Itc3RhdGUpIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yLXN0YXRlLWNvbG9yLCByZWQpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItZm9jdXNlZCAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICAucnRsIC5Db2RlTWlycm9yLXZzY3JvbGxiYXIge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgLnJ0bC1ndXR0ZXIge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPmA7XG5cbiAgICB0aGlzLmNvZGVtaXJyb3IgPSBjb2RlTWlycm9yKHNoYWRvd1Jvb3QsIHtcbiAgICAgIHZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgdGFiU2l6ZTogMixcbiAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlLFxuICAgICAgdmlld3BvcnRNYXJnaW46IEluZmluaXR5LFxuICAgICAgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksXG4gICAgICBleHRyYUtleXM6IHtcbiAgICAgICAgVGFiOiBcImluZGVudE1vcmVcIixcbiAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXG4gICAgICB9LFxuICAgICAgZ3V0dGVyczogdGhpcy5fY2FsY0d1dHRlcnMoKSxcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTtcbiAgICB0aGlzLmNvZGVtaXJyb3IhLm9uKFwiY2hhbmdlc1wiLCAoKSA9PiB0aGlzLl9vbkNoYW5nZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiB0aGlzLl92YWx1ZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGNHdXR0ZXJzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5ydGwgPyBbXCJydGwtZ3V0dGVyXCIsIFwiQ29kZU1pcnJvci1saW5lbnVtYmVyc1wiXSA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5nZXRXcmFwcGVyRWxlbWVudCgpLmNsYXNzTGlzdC50b2dnbGUoXCJydGxcIiwgdGhpcy5ydGwpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29kZS1lZGl0b3JcIjogSGFDb2RlRWRpdG9yO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgTG9hZGVkQ29kZU1pcnJvciB7XG4gIGNvZGVNaXJyb3I6IGFueTtcbiAgY29kZU1pcnJvckNzczogYW55O1xufVxuXG5sZXQgbG9hZGVkOiBQcm9taXNlPExvYWRlZENvZGVNaXJyb3I+O1xuXG5leHBvcnQgY29uc3QgbG9hZENvZGVNaXJyb3IgPSBhc3luYyAoKTogUHJvbWlzZTxMb2FkZWRDb2RlTWlycm9yPiA9PiB7XG4gIGlmICghbG9hZGVkKSB7XG4gICAgbG9hZGVkID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29kZW1pcnJvclwiICovIFwiLi9jb2RlbWlycm9yXCIpO1xuICB9XG4gIHJldHVybiBsb2FkZWQ7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBTUE7QUFDQTtBQVNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFMQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBUEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQW9CQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBO0FBQUE7QUE0QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBQUE7QUFBQTtBQUFBO0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBN0RBO0FBQUE7QUFBQTtBQUFBO0FBZ0VBO0FBQ0E7QUFBQTtBQUNBO0FBbEVBO0FBQUE7QUFBQTtBQUFBO0FBcUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVpBO0FBQ0E7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQTVIQTtBQUFBO0FBQUE7QUFBQTtBQStIQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBcklBO0FBQUE7QUFBQTtBQUFBO0FBd0lBO0FBQ0E7QUF6SUE7QUFBQTtBQUFBO0FBQUE7QUE0SUE7QUFDQTtBQUNBO0FBQ0E7QUEvSUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0Esa09BQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
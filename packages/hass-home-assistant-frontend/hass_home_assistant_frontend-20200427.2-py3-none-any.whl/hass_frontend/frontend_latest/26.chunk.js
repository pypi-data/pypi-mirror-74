(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[26],{

/***/ "./src/components/ha-label-badge.ts":
/*!******************************************!*\
  !*** ./src/components/ha-label-badge.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
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





let HaLabelBadge = _decorate(null, function (_initialize, _LitElement) {
  class HaLabelBadge extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaLabelBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "description",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "image",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="badge-container">
        <div class="label-badge" id="badge">
          <div
            class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          value: true,
          big: Boolean(this.value && this.value.length > 4)
        })}"
          >
            ${this.icon && !this.value && !this.image ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <ha-icon .icon="${this.icon}"></ha-icon> ` : ""}
            ${this.value && !this.image ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <span>${this.value}</span> ` : ""}
          </div>
          ${this.label ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div
                  class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          label: true,
          big: this.label.length > 5
        })}"
                >
                  <span>${this.label}</span>
                </div>
              ` : ""}
        </div>
        ${this.description ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <div class="title">${this.description}</div> ` : ""}
      </div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .badge-container {
          display: inline-block;
          text-align: center;
          vertical-align: top;
          padding: var(--ha-label-badge-padding, 0 0 0 0);
        }
        .label-badge {
          position: relative;
          display: block;
          margin: 0 auto;
          width: var(--ha-label-badge-size, 2.5em);
          text-align: center;
          height: var(--ha-label-badge-size, 2.5em);
          line-height: var(--ha-label-badge-size, 2.5em);
          font-size: var(--ha-label-badge-font-size, 1.5em);
          border-radius: 50%;
          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));
          color: var(--label-badge-text-color, rgb(76, 76, 76));

          white-space: nowrap;
          background-color: var(--label-badge-background-color, white);
          background-size: cover;
          transition: border 0.3s ease-in-out;
        }
        .label-badge .value {
          font-size: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label-badge .value.big {
          font-size: 70%;
        }
        .label-badge .label {
          position: absolute;
          bottom: -1em;
          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */
          left: -0.2em;
          right: -0.2em;
          line-height: 1em;
          font-size: 0.5em;
        }
        .label-badge .label span {
          box-sizing: border-box;
          max-width: 100%;
          display: inline-block;
          background-color: var(--ha-label-badge-color, var(--primary-color));
          color: var(--ha-label-badge-label-color, white);
          border-radius: 1em;
          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */
          font-weight: 500;
          overflow: hidden;
          text-transform: uppercase;
          text-overflow: ellipsis;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform, uppercase);
        }
        .label-badge .label.big span {
          font-size: 90%;
          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */
        }
        .badge-container .title {
          margin-top: 1em;
          font-size: var(--ha-label-badge-title-font-size, 0.9em);
          width: var(--ha-label-badge-title-width, 5em);
          font-weight: var(--ha-label-badge-title-font-weight, 400);
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: normal;
        }
      `];
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HaLabelBadge.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("image")) {
          this.shadowRoot.getElementById("badge").style.backgroundImage = this.image ? `url(${this.image})` : "";
        }
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("ha-label-badge", HaLabelBadge);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1sYWJlbC1iYWRnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IFwiLi9oYS1pY29uXCI7XG5cbmNsYXNzIEhhTGFiZWxCYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGljb24/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1iYWRnZVwiIGlkPVwiYmFkZ2VcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYmlnOiBCb29sZWFuKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiA0KSxcbiAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLmljb24gJiYgIXRoaXMudmFsdWUgJiYgIXRoaXMuaW1hZ2VcbiAgICAgICAgICAgICAgPyBodG1sYCA8aGEtaWNvbiAuaWNvbj1cIiR7dGhpcy5pY29ufVwiPjwvaGEtaWNvbj4gYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAke3RoaXMudmFsdWUgJiYgIXRoaXMuaW1hZ2VcbiAgICAgICAgICAgICAgPyBodG1sYCA8c3Bhbj4ke3RoaXMudmFsdWV9PC9zcGFuPiBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAke3RoaXMubGFiZWxcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYmlnOiB0aGlzLmxhYmVsLmxlbmd0aCA+IDUsXG4gICAgICAgICAgICAgICAgICB9KX1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7dGhpcy5kZXNjcmlwdGlvblxuICAgICAgICAgID8gaHRtbGAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0aGlzLmRlc2NyaXB0aW9ufTwvZGl2PiBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICAuYmFkZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taGEtbGFiZWwtYmFkZ2UtcGFkZGluZywgMCAwIDAgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXNpemUsIDIuNWVtKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1zaXplLCAyLjVlbSk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXNpemUsIDIuNWVtKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZSwgMS41ZW0pO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDAuMWVtIHNvbGlkIHZhcigtLWhhLWxhYmVsLWJhZGdlLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLXRleHQtY29sb3IsIHJnYig3NiwgNzYsIDc2KSk7XG5cbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSAudmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIC52YWx1ZS5iaWcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSAubGFiZWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC0xZW07XG4gICAgICAgICAgLyogTWFrZSB0aGUgbGFiZWwgYXMgd2lkZSBhcyBjb250YWluZXIrYm9yZGVyLiAocGFyZW50X2JvcmRlcndpZHRoIC8gZm9udC1zaXplKSAqL1xuICAgICAgICAgIGxlZnQ6IC0wLjJlbTtcbiAgICAgICAgICByaWdodDogLTAuMmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwtYmFkZ2UgLmxhYmVsIHNwYW4ge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1sYWJlbC1jb2xvciwgd2hpdGUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgICBwYWRkaW5nOiA5JSAxNiUgOCUgMTYlOyAvKiBtb3N0bHkgYXBpdGFsaXplZCB0ZXh0LCBub3QgbXVjaCBkZXNjZW5kZXJzID0+IGJpdCBtb3JlIHRvcCBtYXJnaW4gKi9cbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHZhcigtLWhhLWxhYmVsLWJhZGdlLWxhYmVsLXRleHQtdHJhbnNmb3JtLCB1cHBlcmNhc2UpO1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSAubGFiZWwuYmlnIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwJSAxMiUgNyUgMTIlOyAvKiBwdXNoIHNtYWxsZXIgdGV4dCBhIGJpdCBkb3duIHRvIGNlbnRlciB2ZXJ0aWNhbGx5ICovXG4gICAgICAgIH1cbiAgICAgICAgLmJhZGdlLWNvbnRhaW5lciAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXRpdGxlLWZvbnQtc2l6ZSwgMC45ZW0pO1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS10aXRsZS13aWR0aCwgNWVtKTtcbiAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0taGEtbGFiZWwtYmFkZ2UtdGl0bGUtZm9udC13ZWlnaHQsIDQwMCk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiaW1hZ2VcIikpIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdCEuZ2V0RWxlbWVudEJ5SWQoXCJiYWRnZVwiKSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdGhpc1xuICAgICAgICAuaW1hZ2VcbiAgICAgICAgPyBgdXJsKCR7dGhpcy5pbWFnZX0pYFxuICAgICAgICA6IFwiXCI7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1sYWJlbC1iYWRnZVwiOiBIYUxhYmVsQmFkZ2U7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbGFiZWwtYmFkZ2VcIiwgSGFMYWJlbEJhZGdlKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFHQTs7QUFJQTs7QUFHQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTs7QUFSQTs7QUFhQTs7QUE3QkE7QUFrQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7OztBQXBJQTtBQUNBO0FBNElBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
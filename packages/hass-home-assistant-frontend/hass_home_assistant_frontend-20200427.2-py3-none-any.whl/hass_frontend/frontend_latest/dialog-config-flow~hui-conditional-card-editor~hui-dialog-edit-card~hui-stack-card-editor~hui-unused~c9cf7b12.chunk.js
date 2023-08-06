(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-config-flow~hui-conditional-card-editor~hui-dialog-edit-card~hui-stack-card-editor~hui-unused~c9cf7b12"],{

/***/ "./src/common/search/search-input.ts":
/*!*******************************************!*\
  !*** ./src/common/search/search-input.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/fire_event */ "./src/common/dom/fire_event.ts");
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









let SearchInput = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("search-input")], function (_initialize, _LitElement) {
  class SearchInput extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: SearchInput,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "filter",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: Boolean,
        attribute: "no-label-float"
      })],
      key: "noLabelFloat",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: Boolean,
        attribute: "no-underline"
      })],
      key: "noUnderline",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: Boolean
      })],
      key: "autofocus",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        this.shadowRoot.querySelector("paper-input").focus();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        .no-underline:not(.focused) {
          --paper-input-container-underline: {
            display: none;
            height: 0;
          }
        }
      </style>
      <paper-input
        class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
          "no-underline": this.noUnderline
        })}
        .autofocus=${this.autofocus}
        label="Search"
        .value=${this.filter}
        @value-changed=${this._filterInputChanged}
        .noLabelFloat=${this.noLabelFloat}
      >
        <ha-icon icon="hass:magnify" slot="prefix" class="prefix"></ha-icon>
        ${this.filter && lit_html__WEBPACK_IMPORTED_MODULE_3__["html"]`
          <paper-icon-button
            slot="suffix"
            class="suffix"
            @click=${this._clearSearch}
            icon="hass:close"
            alt="Clear"
            title="Clear"
          ></paper-icon-button>
        `}
      </paper-input>
    `;
      }
    }, {
      kind: "method",
      key: "_filterChanged",
      value: async function _filterChanged(value) {
        Object(_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "value-changed", {
          value: String(value)
        });
      }
    }, {
      kind: "method",
      key: "_filterInputChanged",
      value: async function _filterInputChanged(e) {
        this._filterChanged(e.target.value);
      }
    }, {
      kind: "method",
      key: "_clearSearch",
      value: async function _clearSearch() {
        this._filterChanged("");
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      ha-icon {
        margin: 8px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93fmh1aS1jb25kaXRpb25hbC1jYXJkLWVkaXRvcn5odWktZGlhbG9nLWVkaXQtY2FyZH5odWktc3RhY2stY2FyZC1lZGl0b3J+aHVpLXVudXNlZH5jOWNmN2IxMi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vc2VhcmNoL3NlYXJjaC1pbnB1dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBodG1sLCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2RvbS9maXJlX2V2ZW50XCI7XG5cbkBjdXN0b21FbGVtZW50KFwic2VhcmNoLWlucHV0XCIpXG5jbGFzcyBTZWFyY2hJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZmlsdGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogXCJuby1sYWJlbC1mbG9hdFwiIH0pXG4gIHB1YmxpYyBub0xhYmVsRmxvYXQ/ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiBcIm5vLXVuZGVybGluZVwiIH0pXG4gIHB1YmxpYyBub1VuZGVybGluZSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgcHVibGljIGF1dG9mb2N1cyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1pbnB1dFwiKSEuZm9jdXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAubm8tdW5kZXJsaW5lOm5vdCguZm9jdXNlZCkge1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZToge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7IFwibm8tdW5kZXJsaW5lXCI6IHRoaXMubm9VbmRlcmxpbmUgfSl9XG4gICAgICAgIC5hdXRvZm9jdXM9JHt0aGlzLmF1dG9mb2N1c31cbiAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAudmFsdWU9JHt0aGlzLmZpbHRlcn1cbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9maWx0ZXJJbnB1dENoYW5nZWR9XG4gICAgICAgIC5ub0xhYmVsRmxvYXQ9JHt0aGlzLm5vTGFiZWxGbG9hdH1cbiAgICAgID5cbiAgICAgICAgPGhhLWljb24gaWNvbj1cImhhc3M6bWFnbmlmeVwiIHNsb3Q9XCJwcmVmaXhcIiBjbGFzcz1cInByZWZpeFwiPjwvaGEtaWNvbj5cbiAgICAgICAgJHt0aGlzLmZpbHRlciAmJlxuICAgICAgICBodG1sYFxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICBjbGFzcz1cInN1ZmZpeFwiXG4gICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jbGVhclNlYXJjaH1cbiAgICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICAgIGFsdD1cIkNsZWFyXCJcbiAgICAgICAgICAgIHRpdGxlPVwiQ2xlYXJcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICBgfVxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmlsdGVyQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiBTdHJpbmcodmFsdWUpIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmlsdGVySW5wdXRDaGFuZ2VkKGUpIHtcbiAgICB0aGlzLl9maWx0ZXJDaGFuZ2VkKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2NsZWFyU2VhcmNoKCkge1xuICAgIHRoaXMuX2ZpbHRlckNoYW5nZWQoXCJcIik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1pY29uIHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic2VhcmNoLWlucHV0XCI6IFNlYXJjaElucHV0O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7O0FBS0E7Ozs7O0FBS0E7O0FBNUJBO0FBK0JBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7O0FBQUE7QUFLQTs7O0FBcEVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
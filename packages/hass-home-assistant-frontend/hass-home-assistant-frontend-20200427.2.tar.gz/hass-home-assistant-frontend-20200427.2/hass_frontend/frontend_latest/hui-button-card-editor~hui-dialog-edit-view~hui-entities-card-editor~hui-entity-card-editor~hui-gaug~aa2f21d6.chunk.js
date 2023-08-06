(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-card-editor~hui-gaug~aa2f21d6"],{

/***/ "./src/panels/lovelace/components/hui-entity-editor.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-entity-editor.ts ***!
  \*************************************************************/
/*! exports provided: HuiEntityEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiEntityEditor", function() { return HuiEntityEditor; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
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





let HuiEntityEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-entity-editor")], function (_initialize, _LitElement) {
  class HuiEntityEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiEntityEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "entities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.entities) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <h3>
        ${this.label || this.hass.localize("ui.panel.lovelace.editor.card.generic.entities") + " (" + this.hass.localize("ui.panel.lovelace.editor.card.config.required") + ")"}
      </h3>
      <div class="entities">
        ${this.entities.map((entityConf, index) => {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <div class="entity">
              <ha-entity-picker
                .hass=${this.hass}
                .value="${entityConf.entity}"
                .index="${index}"
                @change="${this._valueChanged}"
                allow-custom-entity
              ></ha-entity-picker>
              <paper-icon-button
                title="Move entity down"
                icon="hass:arrow-down"
                .index="${index}"
                @click="${this._entityDown}"
                ?disabled="${index === this.entities.length - 1}"
              ></paper-icon-button>
              <paper-icon-button
                title="Move entity up"
                icon="hass:arrow-up"
                .index="${index}"
                @click="${this._entityUp}"
                ?disabled="${index === 0}"
              ></paper-icon-button>
            </div>
          `;
        })}
        <ha-entity-picker
          .hass=${this.hass}
          @change="${this._addEntity}"
        ></ha-entity-picker>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_addEntity",
      value: function _addEntity(ev) {
        const target = ev.target;

        if (target.value === "") {
          return;
        }

        const newConfigEntities = this.entities.concat({
          entity: target.value
        });
        target.value = "";
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "entities-changed", {
          entities: newConfigEntities
        });
      }
    }, {
      kind: "method",
      key: "_entityUp",
      value: function _entityUp(ev) {
        const target = ev.target;
        const newEntities = this.entities.concat();
        [newEntities[target.index - 1], newEntities[target.index]] = [newEntities[target.index], newEntities[target.index - 1]];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "entities-changed", {
          entities: newEntities
        });
      }
    }, {
      kind: "method",
      key: "_entityDown",
      value: function _entityDown(ev) {
        const target = ev.target;
        const newEntities = this.entities.concat();
        [newEntities[target.index + 1], newEntities[target.index]] = [newEntities[target.index], newEntities[target.index + 1]];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "entities-changed", {
          entities: newEntities
        });
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const target = ev.target;
        const newConfigEntities = this.entities.concat();

        if (target.value === "") {
          newConfigEntities.splice(target.index, 1);
        } else {
          newConfigEntities[target.index] = Object.assign({}, newConfigEntities[target.index], {
            entity: target.value
          });
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "entities-changed", {
          entities: newConfigEntities
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      .entities {
        padding-left: 20px;
      }
      .entity {
        display: flex;
        align-items: flex-end;
      }
      .entity ha-entity-picker {
        flex-grow: 1;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/config-elements-style.ts ***!
  \*****************************************************************************/
/*! exports provided: configElementStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configElementStyle", function() { return configElementStyle; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

const configElementStyle = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    ha-switch {
      padding: 16px 0;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWJ1dHRvbi1jYXJkLWVkaXRvcn5odWktZGlhbG9nLWVkaXQtdmlld35odWktZW50aXRpZXMtY2FyZC1lZGl0b3J+aHVpLWVudGl0eS1jYXJkLWVkaXRvcn5odWktZ2F1Z35hYTJmMjFkNi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tcG9uZW50cy9odWktZW50aXR5LWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvY29uZmlnLWVsZW1lbnRzLXN0eWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVkaXRvclRhcmdldCB9IGZyb20gXCIuLi9lZGl0b3IvdHlwZXNcIjtcbmltcG9ydCB7IEVudGl0eUNvbmZpZyB9IGZyb20gXCIuLi9lbnRpdHktcm93cy90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1lbnRpdHktZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpRW50aXR5RWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgZW50aXRpZXM/OiBFbnRpdHlDb25maWdbXTtcblxuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgbGFiZWw/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmVudGl0aWVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgzPlxuICAgICAgICAke3RoaXMubGFiZWwgfHxcbiAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuZW50aXRpZXNcIikgK1xuICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5yZXF1aXJlZFwiKSArXG4gICAgICAgICAgXCIpXCJ9XG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImVudGl0aWVzXCI+XG4gICAgICAgICR7dGhpcy5lbnRpdGllcy5tYXAoKGVudGl0eUNvbmYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW50aXR5XCI+XG4gICAgICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgLnZhbHVlPVwiJHtlbnRpdHlDb25mLmVudGl0eX1cIlxuICAgICAgICAgICAgICAgIC5pbmRleD1cIiR7aW5kZXh9XCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiTW92ZSBlbnRpdHkgZG93blwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctZG93blwiXG4gICAgICAgICAgICAgICAgLmluZGV4PVwiJHtpbmRleH1cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fZW50aXR5RG93bn1cIlxuICAgICAgICAgICAgICAgID9kaXNhYmxlZD1cIiR7aW5kZXggPT09IHRoaXMuZW50aXRpZXMhLmxlbmd0aCAtIDF9XCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiTW92ZSBlbnRpdHkgdXBcIlxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmFycm93LXVwXCJcbiAgICAgICAgICAgICAgICAuaW5kZXg9XCIke2luZGV4fVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9lbnRpdHlVcH1cIlxuICAgICAgICAgICAgICAgID9kaXNhYmxlZD1cIiR7aW5kZXggPT09IDB9XCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgO1xuICAgICAgICB9KX1cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9hZGRFbnRpdHl9XCJcbiAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9hZGRFbnRpdHkoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgaWYgKHRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdDb25maWdFbnRpdGllcyA9IHRoaXMuZW50aXRpZXMhLmNvbmNhdCh7XG4gICAgICBlbnRpdHk6IHRhcmdldC52YWx1ZSBhcyBzdHJpbmcsXG4gICAgfSk7XG4gICAgdGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJlbnRpdGllcy1jaGFuZ2VkXCIsIHsgZW50aXRpZXM6IG5ld0NvbmZpZ0VudGl0aWVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5VXAoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgY29uc3QgbmV3RW50aXRpZXMgPSB0aGlzLmVudGl0aWVzIS5jb25jYXQoKTtcblxuICAgIFtuZXdFbnRpdGllc1t0YXJnZXQuaW5kZXghIC0gMV0sIG5ld0VudGl0aWVzW3RhcmdldC5pbmRleCFdXSA9IFtcbiAgICAgIG5ld0VudGl0aWVzW3RhcmdldC5pbmRleCFdLFxuICAgICAgbmV3RW50aXRpZXNbdGFyZ2V0LmluZGV4ISAtIDFdLFxuICAgIF07XG5cbiAgICBmaXJlRXZlbnQodGhpcywgXCJlbnRpdGllcy1jaGFuZ2VkXCIsIHsgZW50aXRpZXM6IG5ld0VudGl0aWVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5RG93bihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBjb25zdCBuZXdFbnRpdGllcyA9IHRoaXMuZW50aXRpZXMhLmNvbmNhdCgpO1xuXG4gICAgW25ld0VudGl0aWVzW3RhcmdldC5pbmRleCEgKyAxXSwgbmV3RW50aXRpZXNbdGFyZ2V0LmluZGV4IV1dID0gW1xuICAgICAgbmV3RW50aXRpZXNbdGFyZ2V0LmluZGV4IV0sXG4gICAgICBuZXdFbnRpdGllc1t0YXJnZXQuaW5kZXghICsgMV0sXG4gICAgXTtcblxuICAgIGZpcmVFdmVudCh0aGlzLCBcImVudGl0aWVzLWNoYW5nZWRcIiwgeyBlbnRpdGllczogbmV3RW50aXRpZXMgfSk7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgY29uc3QgbmV3Q29uZmlnRW50aXRpZXMgPSB0aGlzLmVudGl0aWVzIS5jb25jYXQoKTtcblxuICAgIGlmICh0YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIG5ld0NvbmZpZ0VudGl0aWVzLnNwbGljZSh0YXJnZXQuaW5kZXghLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29uZmlnRW50aXRpZXNbdGFyZ2V0LmluZGV4IV0gPSB7XG4gICAgICAgIC4uLm5ld0NvbmZpZ0VudGl0aWVzW3RhcmdldC5pbmRleCFdLFxuICAgICAgICBlbnRpdHk6IHRhcmdldC52YWx1ZSEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZpcmVFdmVudCh0aGlzLCBcImVudGl0aWVzLWNoYW5nZWRcIiwgeyBlbnRpdGllczogbmV3Q29uZmlnRW50aXRpZXMgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuZW50aXRpZXMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgICAuZW50aXR5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgICAgLmVudGl0eSBoYS1lbnRpdHktcGlja2VyIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lbnRpdHktZWRpdG9yXCI6IEh1aUVudGl0eUVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlnRWxlbWVudFN0eWxlID0gaHRtbGBcbiAgPHN0eWxlPlxuICAgIGhhLXN3aXRjaCB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgfVxuICAgIC5zaWRlLWJ5LXNpZGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLnNpZGUtYnktc2lkZSA+ICoge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgLnN1ZmZpeCB7XG4gICAgICBtYXJnaW46IDAgOHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbmA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBTUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFPQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBckJBO0FBeUJBOztBQUVBO0FBQ0E7OztBQXRDQTtBQTBDQTtBQXREQTtBQUFBO0FBQUE7QUFBQTtBQXlEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBbEVBO0FBQUE7QUFBQTtBQUFBO0FBcUVBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBOUVBO0FBQUE7QUFBQTtBQUFBO0FBaUZBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBMUZBO0FBQUE7QUFBQTtBQUFBO0FBNkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQTFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkdBOzs7Ozs7Ozs7OztBQUFBO0FBWUE7QUF6SEE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
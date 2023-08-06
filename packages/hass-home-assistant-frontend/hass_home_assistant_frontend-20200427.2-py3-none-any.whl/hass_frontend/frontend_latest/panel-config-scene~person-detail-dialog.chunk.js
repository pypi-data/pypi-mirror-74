(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-scene~person-detail-dialog"],{

/***/ "./src/common/entity/valid_entity_id.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/valid_entity_id.ts ***!
  \**********************************************/
/*! exports provided: isValidEntityId, createValidEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEntityId", function() { return isValidEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValidEntityId", function() { return createValidEntityId; });
const validEntityId = /^(\w+)\.(\w+)$/;
const isValidEntityId = entityId => validEntityId.test(entityId);
const createValidEntityId = input => input.toLowerCase().replace(/\s|'/g, "_") // replace spaces and quotes with underscore
.replace(/\W/g, "") // remove not allowed chars
.replace(/_{2,}/g, "_") // replace multiple underscores with 1
.replace(/_$/, ""); // remove underscores at the end

/***/ }),

/***/ "./src/components/entity/ha-entities-picker.ts":
/*!*****************************************************!*\
  !*** ./src/components/entity/ha-entities-picker.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button-light */ "./node_modules/@polymer/paper-icon-button/paper-icon-button-light.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
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







let HaEntitiesPickerLight = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-entities-picker")], function (_initialize, _LitElement) {
  class HaEntitiesPickerLight extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaEntitiesPickerLight,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Array,
        attribute: "include-domains"
      })],
      key: "includeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Array,
        attribute: "exclude-domains"
      })],
      key: "excludeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        attribute: "picked-entity-label"
      })],
      key: "pickedEntityLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        attribute: "pick-entity-label"
      })],
      key: "pickEntityLabel",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Show entities from specific domains.
       * @type {string}
       * @attr include-domains
       */

      /**
       * Show no entities of these domains.
       * @type {Array}
       * @attr exclude-domains
       */
      function render() {
        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        const currentEntities = this._currentEntities;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${currentEntities.map(entityId => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
          <div>
            <ha-entity-picker
              allow-custom-entity
              .curValue=${entityId}
              .hass=${this.hass}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .entityFilter=${this._entityFilter}
              .value=${entityId}
              .label=${this.pickedEntityLabel}
              @value-changed=${this._entityChanged}
            ></ha-entity-picker>
          </div>
        `)}
      <div>
        <ha-entity-picker
          .hass=${this.hass}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .entityFilter=${this._entityFilter}
          .label=${this.pickEntityLabel}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
      </div>
    `;
      }
    }, {
      kind: "field",
      key: "_entityFilter",

      value() {
        return stateObj => !this.value || !this.value.includes(stateObj.entity_id);
      }

    }, {
      kind: "get",
      key: "_currentEntities",
      value: function _currentEntities() {
        return this.value || [];
      }
    }, {
      kind: "method",
      key: "_updateEntities",
      value: async function _updateEntities(entities) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value: entities
        });
        this.value = entities;
      }
    }, {
      kind: "method",
      key: "_entityChanged",
      value: function _entityChanged(event) {
        event.stopPropagation();
        const curValue = event.currentTarget.curValue;
        const newValue = event.detail.value;

        if (newValue === curValue || newValue !== "" && !Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_3__["isValidEntityId"])(newValue)) {
          return;
        }

        if (newValue === "") {
          this._updateEntities(this._currentEntities.filter(ent => ent !== curValue));
        } else {
          this._updateEntities(this._currentEntities.map(ent => ent === curValue ? newValue : ent));
        }
      }
    }, {
      kind: "method",
      key: "_addEntity",
      value: async function _addEntity(event) {
        event.stopPropagation();
        const toAdd = event.detail.value;
        event.currentTarget.value = "";

        if (!toAdd) {
          return;
        }

        const currentEntities = this._currentEntities;

        if (currentEntities.includes(toAdd)) {
          return;
        }

        this._updateEntities([...currentEntities, toAdd]);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjZW5lfnBlcnNvbi1kZXRhaWwtZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvdmFsaWRfZW50aXR5X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdGllcy1waWNrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsaWRFbnRpdHlJZCA9IC9eKFxcdyspXFwuKFxcdyspJC87XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW50aXR5SWQgPSAoZW50aXR5SWQ6IHN0cmluZykgPT5cbiAgdmFsaWRFbnRpdHlJZC50ZXN0KGVudGl0eUlkKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZhbGlkRW50aXR5SWQgPSAoaW5wdXQ6IHN0cmluZykgPT5cbiAgaW5wdXRcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXHN8Jy9nLCBcIl9cIikgLy8gcmVwbGFjZSBzcGFjZXMgYW5kIHF1b3RlcyB3aXRoIHVuZGVyc2NvcmVcbiAgICAucmVwbGFjZSgvXFxXL2csIFwiXCIpIC8vIHJlbW92ZSBub3QgYWxsb3dlZCBjaGFyc1xuICAgIC5yZXBsYWNlKC9fezIsfS9nLCBcIl9cIikgLy8gcmVwbGFjZSBtdWx0aXBsZSB1bmRlcnNjb3JlcyB3aXRoIDFcbiAgICAucmVwbGFjZSgvXyQvLCBcIlwiKTsgLy8gcmVtb3ZlIHVuZGVyc2NvcmVzIGF0IHRoZSBlbmRcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCI7XG5pbXBvcnQgdHlwZSB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgaXNWYWxpZEVudGl0eUlkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvdmFsaWRfZW50aXR5X2lkXCI7XG5pbXBvcnQgdHlwZSB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuL2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCB0eXBlIHsgSGFFbnRpdHlQaWNrZXJFbnRpdHlGaWx0ZXJGdW5jIH0gZnJvbSBcIi4vaGEtZW50aXR5LXBpY2tlclwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWVudGl0aWVzLXBpY2tlclwiKVxuY2xhc3MgSGFFbnRpdGllc1BpY2tlckxpZ2h0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU2hvdyBlbnRpdGllcyBmcm9tIHNwZWNpZmljIGRvbWFpbnMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBhdHRyIGluY2x1ZGUtZG9tYWluc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJpbmNsdWRlLWRvbWFpbnNcIiB9KVxuICBwdWJsaWMgaW5jbHVkZURvbWFpbnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU2hvdyBubyBlbnRpdGllcyBvZiB0aGVzZSBkb21haW5zLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqIEBhdHRyIGV4Y2x1ZGUtZG9tYWluc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJleGNsdWRlLWRvbWFpbnNcIiB9KVxuICBwdWJsaWMgZXhjbHVkZURvbWFpbnM/OiBzdHJpbmdbXTtcblxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IFwicGlja2VkLWVudGl0eS1sYWJlbFwiIH0pXG4gIHB1YmxpYyBwaWNrZWRFbnRpdHlMYWJlbD86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IFwicGljay1lbnRpdHktbGFiZWxcIiB9KSBwdWJsaWMgcGlja0VudGl0eUxhYmVsPzogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRFbnRpdGllcyA9IHRoaXMuX2N1cnJlbnRFbnRpdGllcztcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7Y3VycmVudEVudGl0aWVzLm1hcChcbiAgICAgICAgKGVudGl0eUlkKSA9PiBodG1sYFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgICAgICAgIC5jdXJWYWx1ZT0ke2VudGl0eUlkfVxuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgLmluY2x1ZGVEb21haW5zPSR7dGhpcy5pbmNsdWRlRG9tYWluc31cbiAgICAgICAgICAgICAgLmV4Y2x1ZGVEb21haW5zPSR7dGhpcy5leGNsdWRlRG9tYWluc31cbiAgICAgICAgICAgICAgLmVudGl0eUZpbHRlcj0ke3RoaXMuX2VudGl0eUZpbHRlcn1cbiAgICAgICAgICAgICAgLnZhbHVlPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMucGlja2VkRW50aXR5TGFiZWx9XG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZW50aXR5Q2hhbmdlZH1cbiAgICAgICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgIC5pbmNsdWRlRG9tYWlucz0ke3RoaXMuaW5jbHVkZURvbWFpbnN9XG4gICAgICAgICAgLmV4Y2x1ZGVEb21haW5zPSR7dGhpcy5leGNsdWRlRG9tYWluc31cbiAgICAgICAgICAuZW50aXR5RmlsdGVyPSR7dGhpcy5fZW50aXR5RmlsdGVyfVxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMucGlja0VudGl0eUxhYmVsfVxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fYWRkRW50aXR5fVxuICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2VudGl0eUZpbHRlcjogSGFFbnRpdHlQaWNrZXJFbnRpdHlGaWx0ZXJGdW5jID0gKFxuICAgIHN0YXRlT2JqOiBIYXNzRW50aXR5XG4gICkgPT4gIXRoaXMudmFsdWUgfHwgIXRoaXMudmFsdWUuaW5jbHVkZXMoc3RhdGVPYmouZW50aXR5X2lkKTtcblxuICBwcml2YXRlIGdldCBfY3VycmVudEVudGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRW50aXRpZXMoZW50aXRpZXMpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlOiBlbnRpdGllcyxcbiAgICB9KTtcblxuICAgIHRoaXMudmFsdWUgPSBlbnRpdGllcztcbiAgfVxuXG4gIHByaXZhdGUgX2VudGl0eUNoYW5nZWQoZXZlbnQ6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGN1clZhbHVlID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5jdXJWYWx1ZTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGV2ZW50LmRldGFpbC52YWx1ZTtcbiAgICBpZiAoXG4gICAgICBuZXdWYWx1ZSA9PT0gY3VyVmFsdWUgfHxcbiAgICAgIChuZXdWYWx1ZSAhPT0gXCJcIiAmJiAhaXNWYWxpZEVudGl0eUlkKG5ld1ZhbHVlKSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5ld1ZhbHVlID09PSBcIlwiKSB7XG4gICAgICB0aGlzLl91cGRhdGVFbnRpdGllcyhcbiAgICAgICAgdGhpcy5fY3VycmVudEVudGl0aWVzLmZpbHRlcigoZW50KSA9PiBlbnQgIT09IGN1clZhbHVlKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlRW50aXRpZXMoXG4gICAgICAgIHRoaXMuX2N1cnJlbnRFbnRpdGllcy5tYXAoKGVudCkgPT4gKGVudCA9PT0gY3VyVmFsdWUgPyBuZXdWYWx1ZSA6IGVudCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2FkZEVudGl0eShldmVudDogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgdG9BZGQgPSBldmVudC5kZXRhaWwudmFsdWU7XG4gICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgYW55KS52YWx1ZSA9IFwiXCI7XG4gICAgaWYgKCF0b0FkZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50RW50aXRpZXMgPSB0aGlzLl9jdXJyZW50RW50aXRpZXM7XG4gICAgaWYgKGN1cnJlbnRFbnRpdGllcy5pbmNsdWRlcyh0b0FkZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVFbnRpdGllcyhbLi4uY3VycmVudEVudGl0aWVzLCB0b0FkZF0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1lbnRpdGllcy1waWNrZXJcIjogSGFFbnRpdGllc1BpY2tlckxpZ2h0O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQU9BO0FBQUE7QUFBQTtBQUFBOzs7OztBQVFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUdBO0FBQUE7QUFBQTs7Ozs7QUFHQTtBQUFBO0FBQUE7Ozs7Ozs7QUFuQkE7Ozs7OztBQVFBOzs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFaQTs7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBekJBO0FBNkJBOzs7Ozs7QUFHQTs7Ozs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBakhBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
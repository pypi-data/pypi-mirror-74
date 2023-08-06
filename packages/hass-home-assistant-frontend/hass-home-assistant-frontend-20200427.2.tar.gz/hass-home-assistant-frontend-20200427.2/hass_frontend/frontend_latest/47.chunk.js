(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[47],{

/***/ "./src/common/dom/setup-leaflet-map.ts":
/*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
/*! exports provided: setupLeafletMap, createTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLeafletMap", function() { return setupLeafletMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileLayer", function() { return createTileLayer; });
// Sets up a Leaflet map on the provided DOM element
const setupLeafletMap = async (mapElement, darkMode = false, draw = false) => {
  if (!mapElement.parentNode) {
    throw new Error("Cannot setup Leaflet map on disconnected element");
  } // eslint-disable-next-line


  const Leaflet = await __webpack_require__.e(/*! import() | leaflet */ "vendors~leaflet").then(__webpack_require__.t.bind(null, /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js", 7));
  Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";

  if (draw) {
    await __webpack_require__.e(/*! import() | leaflet-draw */ "vendors~leaflet-draw").then(__webpack_require__.t.bind(null, /*! leaflet-draw */ "./node_modules/leaflet-draw/dist/leaflet.draw.js", 7));
  }

  const map = Leaflet.map(mapElement);
  const style = document.createElement("link");
  style.setAttribute("href", "/static/images/leaflet/leaflet.css");
  style.setAttribute("rel", "stylesheet");
  mapElement.parentNode.appendChild(style);
  map.setView([52.3731339, 4.8903147], 13);
  createTileLayer(Leaflet, darkMode).addTo(map);
  return [map, Leaflet];
};
const createTileLayer = (leaflet, darkMode) => {
  return leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/${darkMode ? "dark_all" : "light_all"}/{z}/{x}/{y}${leaflet.Browser.retina ? "@2x.png" : ".png"}`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20
  });
};

/***/ }),

/***/ "./src/common/util/parse-aspect-ratio.ts":
/*!***********************************************!*\
  !*** ./src/common/util/parse-aspect-ratio.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseAspectRatio; });
// Handle 16x9, 16:9, 1.78x1, 1.78:1, 1.78
// Ignore everything else
const parseOrThrow = num => {
  const parsed = parseFloat(num);

  if (isNaN(parsed)) {
    throw new Error(`${num} is not a number`);
  }

  return parsed;
};

function parseAspectRatio(input) {
  if (!input) {
    return null;
  }

  try {
    if (input.endsWith("%")) {
      return {
        w: 100,
        h: parseOrThrow(input.substr(0, input.length - 1))
      };
    }

    const arr = input.replace(":", "x").split("x");

    if (arr.length === 0) {
      return null;
    }

    return arr.length === 1 ? {
      w: parseOrThrow(arr[0]),
      h: 1
    } : {
      w: parseOrThrow(arr[0]),
      h: parseOrThrow(arr[1])
    };
  } catch (err) {// Ignore the error
  }

  return null;
}

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  /**
  * Dispatches a custom event with an optional detail value.
  *
  * @param {string} type Name of event type.
  * @param {*=} detail Detail value containing event-specific
  *   payload.
  * @param {{ bubbles: (boolean|undefined),
           cancelable: (boolean|undefined),
            composed: (boolean|undefined) }=}
  *  options Object specifying options.  These may include:
  *  `bubbles` (boolean, defaults to `true`),
  *  `cancelable` (boolean, defaults to false), and
  *  `node` on which to fire the event (HTMLElement, defaults to `this`).
  * @return {Event} The new event that was fired.
  */
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

});

/***/ }),

/***/ "./src/panels/lovelace/cards/hui-map-card.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-map-card.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/util/parse-aspect-ratio */ "./src/common/util/parse-aspect-ratio.ts");
/* harmony import */ var _data_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/history */ "./src/data/history.ts");
/* harmony import */ var _map_ha_entity_marker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../map/ha-entity-marker */ "./src/panels/map/ha-entity-marker.js");
/* harmony import */ var _common_find_entites__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/find-entites */ "./src/panels/lovelace/common/find-entites.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
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
















let HuiMapCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-map-card")], function (_initialize, _LitElement) {
  class HuiMapCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiMapCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-map-card-editor */[__webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("vendors~hui-map-card-editor"), __webpack_require__.e(10), __webpack_require__.e("hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-card-editor~hui-gaug~aa2f21d6"), __webpack_require__.e("hui-map-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-map-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-map-card-editor.ts"));
        return document.createElement("hui-map-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig(hass, entities, entitiesFallback) {
        const includeDomains = ["device_tracker"];
        const maxEntities = 2;
        const foundEntities = Object(_common_find_entites__WEBPACK_IMPORTED_MODULE_11__["findEntities"])(hass, maxEntities, entities, entitiesFallback, includeDomains);
        return {
          type: "map",
          entities: foundEntities
        };
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "isPanel",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "editMode",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_history",
      value: void 0
    }, {
      kind: "field",
      key: "_date",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      key: "_configEntities",
      value: void 0
    }, {
      kind: "field",
      key: "Leaflet",
      value: void 0
    }, {
      kind: "field",
      key: "_leafletMap",
      value: void 0
    }, {
      kind: "field",
      key: "_resizeObserver",
      value: void 0
    }, {
      kind: "field",
      key: "_debouncedResizeListener",

      value() {
        return Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_7__["debounce"])(() => {
          if (!this._leafletMap) {
            return;
          }

          this._leafletMap.invalidateSize();
        }, 100, false);
      }

    }, {
      kind: "field",
      key: "_mapItems",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_mapZones",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_mapPaths",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_connected",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_colorDict",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_colorIndex",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      key: "_colors",

      value() {
        return ["#0288D1", "#00AA00", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7"];
      }

    }, {
      kind: "method",
      key: "setConfig",
      value: // eslint-disable-next-line
      // @ts-ignore
      function setConfig(config) {
        if (!config) {
          throw new Error("Error in card configuration.");
        }

        if (!config.entities && !config.geo_location_sources) {
          throw new Error("Either entities or geo_location_sources must be defined");
        }

        if (config.entities && !Array.isArray(config.entities)) {
          throw new Error("Entities need to be an array");
        }

        if (config.geo_location_sources && !Array.isArray(config.geo_location_sources)) {
          throw new Error("Geo_location_sources needs to be an array");
        }

        this._config = config;
        this._configEntities = config.entities ? Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_12__["processConfigEntities"])(config.entities) : [];

        this._cleanupHistory();
      }
    }, {
      kind: "method",
      key: "getCardSize",
      value: function getCardSize() {
        var _this$_config;

        if (!((_this$_config = this._config) === null || _this$_config === void 0 ? void 0 : _this$_config.aspect_ratio)) {
          return 5;
        }

        const ratio = Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_8__["default"])(this._config.aspect_ratio);
        const ar = ratio && ratio.w > 0 && ratio.h > 0 ? `${(100 * ratio.h / ratio.w).toFixed(2)}` : "100";
        return 1 + Math.floor(Number(ar) / 25) || 3;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiMapCard.prototype), "connectedCallback", this).call(this);

        this._connected = true;

        if (this.hasUpdated) {
          this.loadMap();

          this._attachObserver();
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HuiMapCard.prototype), "disconnectedCallback", this).call(this);

        this._connected = false;

        if (this._leafletMap) {
          this._leafletMap.remove();

          this._leafletMap = undefined;
          this.Leaflet = undefined;
        }

        if (this._resizeObserver) {
          this._resizeObserver.unobserve(this._mapEl);
        } else {
          window.removeEventListener("resize", this._debouncedResizeListener);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <ha-card id="card" .header=${this._config.title}>
        <div id="root">
          <div
            id="map"
            class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
          dark: this._config.dark_mode === true
        })}
          ></div>
          <paper-icon-button
            @click=${this._fitMap}
            tabindex="0"
            icon="hass:image-filter-center-focus"
            title="Reset focus"
          ></paper-icon-button>
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (!changedProps.has("hass") || changedProps.size > 1) {
          return true;
        }

        const oldHass = changedProps.get("hass");

        if (!oldHass || !this._configEntities) {
          return true;
        } // Check if any state has changed


        for (const entity of this._configEntities) {
          if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
            return true;
          }
        }

        return false;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HuiMapCard.prototype), "firstUpdated", this).call(this, changedProps);

        this.loadMap();
        const root = this.shadowRoot.getElementById("root");

        if (!this._config || this.isPanel || !root) {
          return;
        }

        if (this._connected) {
          this._attachObserver();
        }

        if (!this._config.aspect_ratio) {
          root.style.paddingBottom = "100%";
          return;
        }

        const ratio = Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_8__["default"])(this._config.aspect_ratio);
        root.style.paddingBottom = ratio && ratio.w > 0 && ratio.h > 0 ? `${(100 * ratio.h / ratio.w).toFixed(2)}%` : root.style.paddingBottom = "100%";
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        var _this$_configEntities;

        if (changedProps.has("hass") || changedProps.has("_history")) {
          this._drawEntities();

          this._fitMap();
        }

        if (changedProps.has("_config") && changedProps.get("_config") !== undefined) {
          this.updateMap(changedProps.get("_config"));
        }

        if (this._config.hours_to_show && ((_this$_configEntities = this._configEntities) === null || _this$_configEntities === void 0 ? void 0 : _this$_configEntities.length)) {
          const minute = 60000;

          if (changedProps.has("_config")) {
            this._getHistory();
          } else if (Date.now() - this._date.getTime() >= minute) {
            this._getHistory();
          }
        }
      }
    }, {
      kind: "get",
      key: "_mapEl",
      value: function _mapEl() {
        return this.shadowRoot.getElementById("map");
      }
    }, {
      kind: "method",
      key: "loadMap",
      value: async function loadMap() {
        [this._leafletMap, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_3__["setupLeafletMap"])(this._mapEl, this._config !== undefined ? this._config.dark_mode === true : false);

        this._drawEntities();

        this._leafletMap.invalidateSize();

        this._fitMap();
      }
    }, {
      kind: "method",
      key: "updateMap",
      value: function updateMap(oldConfig) {
        const map = this._leafletMap;
        const config = this._config;
        const Leaflet = this.Leaflet;

        if (!map || !config || !Leaflet) {
          return;
        }

        if (config.dark_mode !== oldConfig.dark_mode) {
          Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_3__["createTileLayer"])(Leaflet, config.dark_mode === true).addTo(map);
        }

        if (config.entities !== oldConfig.entities || config.geo_location_sources !== oldConfig.geo_location_sources) {
          this._drawEntities();
        }

        map.invalidateSize();

        this._fitMap();
      }
    }, {
      kind: "method",
      key: "_fitMap",
      value: function _fitMap() {
        if (!this._leafletMap || !this.Leaflet || !this._config || !this.hass) {
          return;
        }

        const zoom = this._config.default_zoom;

        if (this._mapItems.length === 0) {
          this._leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude, this.hass.config.longitude), zoom || 14);

          return;
        }

        const bounds = this.Leaflet.featureGroup(this._mapItems).getBounds();

        this._leafletMap.fitBounds(bounds.pad(0.5));

        if (zoom && this._leafletMap.getZoom() > zoom) {
          this._leafletMap.setZoom(zoom);
        }
      }
    }, {
      kind: "method",
      key: "_getColor",
      value: function _getColor(entityId) {
        let color;

        if (this._colorDict[entityId]) {
          color = this._colorDict[entityId];
        } else {
          color = this._colors[this._colorIndex];
          this._colorIndex = (this._colorIndex + 1) % this._colors.length;
          this._colorDict[entityId] = color;
        }

        return color;
      }
    }, {
      kind: "method",
      key: "_drawEntities",
      value: function _drawEntities() {
        const hass = this.hass;
        const map = this._leafletMap;
        const config = this._config;
        const Leaflet = this.Leaflet;

        if (!hass || !map || !config || !Leaflet) {
          return;
        }

        if (this._mapItems) {
          this._mapItems.forEach(marker => marker.remove());
        }

        const mapItems = this._mapItems = [];

        if (this._mapZones) {
          this._mapZones.forEach(marker => marker.remove());
        }

        const mapZones = this._mapZones = [];

        if (this._mapPaths) {
          this._mapPaths.forEach(marker => marker.remove());
        }

        const mapPaths = this._mapPaths = [];

        const allEntities = this._configEntities.concat(); // Calculate visible geo location sources


        if (config.geo_location_sources) {
          const includesAll = config.geo_location_sources.includes("all");

          for (const entityId of Object.keys(hass.states)) {
            const stateObj = hass.states[entityId];

            if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__["computeDomain"])(entityId) === "geo_location" && (includesAll || config.geo_location_sources.includes(stateObj.attributes.source))) {
              allEntities.push({
                entity: entityId
              });
            }
          }
        } // DRAW history


        if (this._config.hours_to_show && this._history) {
          for (const entityStates of this._history) {
            if ((entityStates === null || entityStates === void 0 ? void 0 : entityStates.length) <= 1) {
              continue;
            }

            const entityId = entityStates[0].entity_id; // filter location data from states and remove all invalid locations

            const path = entityStates.reduce((accumulator, state) => {
              const latitude = state.attributes.latitude;
              const longitude = state.attributes.longitude;

              if (latitude && longitude) {
                accumulator.push([latitude, longitude]);
              }

              return accumulator;
            }, []); // DRAW HISTORY

            for (let markerIndex = 0; markerIndex < path.length - 1; markerIndex++) {
              const opacityStep = 0.8 / (path.length - 2);
              const opacity = 0.2 + markerIndex * opacityStep; // DRAW history path dots

              mapPaths.push(Leaflet.circleMarker(path[markerIndex], {
                radius: 3,
                color: this._getColor(entityId),
                opacity,
                interactive: false
              })); // DRAW history path lines

              const line = [path[markerIndex], path[markerIndex + 1]];
              mapPaths.push(Leaflet.polyline(line, {
                color: this._getColor(entityId),
                opacity,
                interactive: false
              }));
            }
          }
        } // DRAW entities


        for (const entity of allEntities) {
          const entityId = entity.entity;
          const stateObj = hass.states[entityId];

          if (!stateObj) {
            continue;
          }

          const title = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(stateObj);
          const {
            latitude,
            longitude,
            passive,
            icon,
            radius,
            entity_picture: entityPicture,
            gps_accuracy: gpsAccuracy
          } = stateObj.attributes;

          if (!(latitude && longitude)) {
            continue;
          }

          if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(stateObj) === "zone") {
            // DRAW ZONE
            if (passive) {
              continue;
            } // create icon


            let iconHTML = "";

            if (icon) {
              const el = document.createElement("ha-icon");
              el.setAttribute("icon", icon);
              iconHTML = el.outerHTML;
            } else {
              const el = document.createElement("span");
              el.innerHTML = title;
              iconHTML = el.outerHTML;
            } // create marker with the icon


            mapZones.push(Leaflet.marker([latitude, longitude], {
              icon: Leaflet.divIcon({
                html: iconHTML,
                iconSize: [24, 24],
                className: this._config.dark_mode === true ? "dark" : "light"
              }),
              interactive: false,
              title
            })); // create circle around it

            mapZones.push(Leaflet.circle([latitude, longitude], {
              interactive: false,
              color: "#FF9800",
              radius
            }));
            continue;
          } // DRAW ENTITY
          // create icon


          const entityName = title.split(" ").map(part => part[0]).join("").substr(0, 3); // create market with the icon

          mapItems.push(Leaflet.marker([latitude, longitude], {
            icon: Leaflet.divIcon({
              // Leaflet clones this element before adding it to the map. This messes up
              // our Polymer object and we can't pass data through. Thus we hack like this.
              html: `
              <ha-entity-marker
                entity-id="${entityId}"
                entity-name="${entityName}"
                entity-picture="${entityPicture || ""}"
                entity-color="${this._getColor(entityId)}"
              ></ha-entity-marker>
            `,
              iconSize: [48, 48],
              className: ""
            }),
            title: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(stateObj)
          })); // create circle around if entity has accuracy

          if (gpsAccuracy) {
            mapItems.push(Leaflet.circle([latitude, longitude], {
              interactive: false,
              color: this._getColor(entityId),
              radius: gpsAccuracy
            }));
          }
        }

        this._mapItems.forEach(marker => map.addLayer(marker));

        this._mapZones.forEach(marker => map.addLayer(marker));

        this._mapPaths.forEach(marker => map.addLayer(marker));
      }
    }, {
      kind: "method",
      key: "_attachObserver",
      value: function _attachObserver() {
        // Observe changes to map size and invalidate to prevent broken rendering
        // Uses ResizeObserver in Chrome, otherwise window resize event
        // @ts-ignore
        if (typeof ResizeObserver === "function") {
          // @ts-ignore
          this._resizeObserver = new ResizeObserver(() => this._debouncedResizeListener());

          this._resizeObserver.observe(this._mapEl);
        } else {
          window.addEventListener("resize", this._debouncedResizeListener);
        }
      }
    }, {
      kind: "method",
      key: "_getHistory",
      value: async function _getHistory() {
        this._date = new Date();

        if (!this._configEntities) {
          return;
        }

        const entityIds = this._configEntities.map(entity => entity.entity).join(",");

        const endTime = new Date();
        const startTime = new Date();
        startTime.setHours(endTime.getHours() - this._config.hours_to_show);
        const skipInitialState = false;
        const significantChangesOnly = false;
        const stateHistory = await Object(_data_history__WEBPACK_IMPORTED_MODULE_9__["fetchRecent"])(this.hass, entityIds, startTime, endTime, skipInitialState, significantChangesOnly);

        if (stateHistory.length < 1) {
          return;
        }

        this._history = stateHistory;
      }
    }, {
      kind: "method",
      key: "_cleanupHistory",
      value: function _cleanupHistory() {
        if (!this._history) {
          return;
        }

        if (this._config.hours_to_show <= 0) {
          this._history = undefined;
        } else {
          var _this$_configEntities2;

          // remove unused entities
          const configEntityIds = (_this$_configEntities2 = this._configEntities) === null || _this$_configEntities2 === void 0 ? void 0 : _this$_configEntities2.map(configEntity => configEntity.entity);
          this._history = this._history.reduce((accumulator, entityStates) => {
            const entityId = entityStates[0].entity_id;

            if (configEntityIds === null || configEntityIds === void 0 ? void 0 : configEntityIds.includes(entityId)) {
              accumulator.push(entityStates);
            }

            return accumulator;
          }, []);
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      :host([ispanel]) ha-card {
        width: 100%;
        height: 100%;
      }

      :host([ispanel][editMode]) ha-card {
        height: calc(100% - 51px);
      }

      ha-card {
        overflow: hidden;
      }

      #map {
        z-index: 0;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fafaf8;
      }

      #map.dark {
        background: #090909;
      }

      paper-icon-button {
        position: absolute;
        top: 75px;
        left: 7px;
      }

      #root {
        position: relative;
      }

      :host([ispanel]) #root {
        height: 100%;
      }

      .dark {
        color: #ffffff;
      }

      .light {
        color: #000000;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/panels/map/ha-entity-marker.js":
/*!********************************************!*\
  !*** ./src/panels/map/ha-entity-marker.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_image_iron_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-image/iron-image */ "./node_modules/@polymer/iron-image/iron-image.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");


/* eslint-plugin-disable lit */



/*
 * @appliesMixin EventsMixin
 */

class HaEntityMarker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          vertical-align: top;
          position: relative;
          display: block;
          margin: 0 auto;
          width: 2.5em;
          text-align: center;
          height: 2.5em;
          line-height: 2.5em;
          font-size: 1.5em;
          border-radius: 50%;
          border: 0.1em solid
            var(--ha-marker-color, var(--default-primary-color));
          color: rgb(76, 76, 76);
          background-color: white;
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker" style$="border-color:{{entityColor}}">
        <template is="dom-if" if="[[entityName]]">[[entityName]]</template>
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      entityId: {
        type: String,
        value: ""
      },
      entityName: {
        type: String,
        value: null
      },
      entityPicture: {
        type: String,
        value: null
      },
      entityColor: {
        type: String,
        value: null
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.badgeTap(ev));
  }

  badgeTap(ev) {
    ev.stopPropagation();

    if (this.entityId) {
      this.fire("hass-more-info", {
        entityId: this.entityId
      });
    }
  }

}

customElements.define("ha-entity-marker", HaEntityMarker);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zZXR1cC1sZWFmbGV0LW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvcGFyc2UtYXNwZWN0LXJhdGlvLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY2FyZHMvaHVpLW1hcC1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbWFwL2hhLWVudGl0eS1tYXJrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwIH0gZnJvbSBcImxlYWZsZXRcIjtcblxuLy8gU2V0cyB1cCBhIExlYWZsZXQgbWFwIG9uIHRoZSBwcm92aWRlZCBET00gZWxlbWVudFxuZXhwb3J0IHR5cGUgTGVhZmxldE1vZHVsZVR5cGUgPSB0eXBlb2YgaW1wb3J0KFwibGVhZmxldFwiKTtcbmV4cG9ydCB0eXBlIExlYWZsZXREcmF3TW9kdWxlVHlwZSA9IHR5cGVvZiBpbXBvcnQoXCJsZWFmbGV0LWRyYXdcIik7XG5cbmV4cG9ydCBjb25zdCBzZXR1cExlYWZsZXRNYXAgPSBhc3luYyAoXG4gIG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkYXJrTW9kZSA9IGZhbHNlLFxuICBkcmF3ID0gZmFsc2Vcbik6IFByb21pc2U8W01hcCwgTGVhZmxldE1vZHVsZVR5cGVdPiA9PiB7XG4gIGlmICghbWFwRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNldHVwIExlYWZsZXQgbWFwIG9uIGRpc2Nvbm5lY3RlZCBlbGVtZW50XCIpO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBMZWFmbGV0ID0gKGF3YWl0IGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxlYWZsZXRcIiAqLyBcImxlYWZsZXRcIlxuICApKSBhcyBMZWFmbGV0TW9kdWxlVHlwZTtcbiAgTGVhZmxldC5JY29uLkRlZmF1bHQuaW1hZ2VQYXRoID0gXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2ltYWdlcy9cIjtcblxuICBpZiAoZHJhdykge1xuICAgIGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxlYWZsZXQtZHJhd1wiICovIFwibGVhZmxldC1kcmF3XCIpO1xuICB9XG5cbiAgY29uc3QgbWFwID0gTGVhZmxldC5tYXAobWFwRWxlbWVudCk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2xlYWZsZXQuY3NzXCIpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICBtYXBFbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBtYXAuc2V0VmlldyhbNTIuMzczMTMzOSwgNC44OTAzMTQ3XSwgMTMpO1xuICBjcmVhdGVUaWxlTGF5ZXIoTGVhZmxldCwgZGFya01vZGUpLmFkZFRvKG1hcCk7XG5cbiAgcmV0dXJuIFttYXAsIExlYWZsZXRdO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbGVMYXllciA9IChcbiAgbGVhZmxldDogTGVhZmxldE1vZHVsZVR5cGUsXG4gIGRhcmtNb2RlOiBib29sZWFuXG4pID0+IHtcbiAgcmV0dXJuIGxlYWZsZXQudGlsZUxheWVyKFxuICAgIGBodHRwczovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vJHtcbiAgICAgIGRhcmtNb2RlID8gXCJkYXJrX2FsbFwiIDogXCJsaWdodF9hbGxcIlxuICAgIH0ve3p9L3t4fS97eX0ke2xlYWZsZXQuQnJvd3Nlci5yZXRpbmEgPyBcIkAyeC5wbmdcIiA6IFwiLnBuZ1wifWAsXG4gICAge1xuICAgICAgYXR0cmlidXRpb246XG4gICAgICAgICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+LCAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vY2FydG8uY29tL2F0dHJpYnV0aW9uc1wiPkNBUlRPPC9hPicsXG4gICAgICBzdWJkb21haW5zOiBcImFiY2RcIixcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAyMCxcbiAgICB9XG4gICk7XG59O1xuIiwiLy8gSGFuZGxlIDE2eDksIDE2OjksIDEuNzh4MSwgMS43ODoxLCAxLjc4XG4vLyBJZ25vcmUgZXZlcnl0aGluZyBlbHNlXG5jb25zdCBwYXJzZU9yVGhyb3cgPSAobnVtKSA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlRmxvYXQobnVtKTtcbiAgaWYgKGlzTmFOKHBhcnNlZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bnVtfSBpcyBub3QgYSBudW1iZXJgKTtcbiAgfVxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VBc3BlY3RSYXRpbyhpbnB1dDogc3RyaW5nKSB7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB0cnkge1xuICAgIGlmIChpbnB1dC5lbmRzV2l0aChcIiVcIikpIHtcbiAgICAgIHJldHVybiB7IHc6IDEwMCwgaDogcGFyc2VPclRocm93KGlucHV0LnN1YnN0cigwLCBpbnB1dC5sZW5ndGggLSAxKSkgfTtcbiAgICB9XG5cbiAgICBjb25zdCBhcnIgPSBpbnB1dC5yZXBsYWNlKFwiOlwiLCBcInhcIikuc3BsaXQoXCJ4XCIpO1xuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyLmxlbmd0aCA9PT0gMVxuICAgICAgPyB7IHc6IHBhcnNlT3JUaHJvdyhhcnJbMF0pLCBoOiAxIH1cbiAgICAgIDogeyB3OiBwYXJzZU9yVGhyb3coYXJyWzBdKSwgaDogcGFyc2VPclRocm93KGFyclsxXSkgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSWdub3JlIHRoZSBlcnJvclxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBDaXJjbGUsXG4gIENpcmNsZU1hcmtlcixcbiAgTGF0TG5nVHVwbGUsXG4gIExheWVyLFxuICBNYXAsXG4gIE1hcmtlcixcbiAgUG9seWxpbmUsXG59IGZyb20gXCJsZWFmbGV0XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlVGlsZUxheWVyLFxuICBMZWFmbGV0TW9kdWxlVHlwZSxcbiAgc2V0dXBMZWFmbGV0TWFwLFxufSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9zZXR1cC1sZWFmbGV0LW1hcFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcbmltcG9ydCBwYXJzZUFzcGVjdFJhdGlvIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9wYXJzZS1hc3BlY3QtcmF0aW9cIjtcbmltcG9ydCB7IGZldGNoUmVjZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvaGlzdG9yeVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi4vLi4vbWFwL2hhLWVudGl0eS1tYXJrZXJcIjtcbmltcG9ydCB7IGZpbmRFbnRpdGllcyB9IGZyb20gXCIuLi9jb21tb24vZmluZC1lbnRpdGVzXCI7XG5pbXBvcnQgeyBwcm9jZXNzQ29uZmlnRW50aXRpZXMgfSBmcm9tIFwiLi4vY29tbW9uL3Byb2Nlc3MtY29uZmlnLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgeyBNYXBDYXJkQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktbWFwLWNhcmRcIilcbmNsYXNzIEh1aU1hcENhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VDYXJkIHtcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDb25maWdFbGVtZW50KCkge1xuICAgIGF3YWl0IGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLW1hcC1jYXJkLWVkaXRvclwiICovIFwiLi4vZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktbWFwLWNhcmQtZWRpdG9yXCJcbiAgICApO1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHVpLW1hcC1jYXJkLWVkaXRvclwiKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R1YkNvbmZpZyhcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGVudGl0aWVzOiBzdHJpbmdbXSxcbiAgICBlbnRpdGllc0ZhbGxiYWNrOiBzdHJpbmdbXVxuICApOiBNYXBDYXJkQ29uZmlnIHtcbiAgICBjb25zdCBpbmNsdWRlRG9tYWlucyA9IFtcImRldmljZV90cmFja2VyXCJdO1xuICAgIGNvbnN0IG1heEVudGl0aWVzID0gMjtcbiAgICBjb25zdCBmb3VuZEVudGl0aWVzID0gZmluZEVudGl0aWVzKFxuICAgICAgaGFzcyxcbiAgICAgIG1heEVudGl0aWVzLFxuICAgICAgZW50aXRpZXMsXG4gICAgICBlbnRpdGllc0ZhbGxiYWNrLFxuICAgICAgaW5jbHVkZURvbWFpbnNcbiAgICApO1xuXG4gICAgcmV0dXJuIHsgdHlwZTogXCJtYXBcIiwgZW50aXRpZXM6IGZvdW5kRW50aXRpZXMgfTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pXG4gIHB1YmxpYyBpc1BhbmVsID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KVxuICBwdWJsaWMgZWRpdE1vZGUgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9oaXN0b3J5PzogSGFzc0VudGl0eVtdW107XG5cbiAgcHJpdmF0ZSBfZGF0ZT86IERhdGU7XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfY29uZmlnPzogTWFwQ2FyZENvbmZpZztcblxuICBwcml2YXRlIF9jb25maWdFbnRpdGllcz86IEVudGl0eUNvbmZpZ1tdO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBwcml2YXRlIExlYWZsZXQ/OiBMZWFmbGV0TW9kdWxlVHlwZTtcblxuICBwcml2YXRlIF9sZWFmbGV0TWFwPzogTWFwO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHJpdmF0ZSBfcmVzaXplT2JzZXJ2ZXI/OiBSZXNpemVPYnNlcnZlcjtcblxuICBwcml2YXRlIF9kZWJvdW5jZWRSZXNpemVMaXN0ZW5lciA9IGRlYm91bmNlKFxuICAgICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fbGVhZmxldE1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sZWFmbGV0TWFwLmludmFsaWRhdGVTaXplKCk7XG4gICAgfSxcbiAgICAxMDAsXG4gICAgZmFsc2VcbiAgKTtcblxuICBwcml2YXRlIF9tYXBJdGVtczogQXJyYXk8TWFya2VyIHwgQ2lyY2xlPiA9IFtdO1xuXG4gIHByaXZhdGUgX21hcFpvbmVzOiBBcnJheTxNYXJrZXIgfCBDaXJjbGU+ID0gW107XG5cbiAgcHJpdmF0ZSBfbWFwUGF0aHM6IEFycmF5PFBvbHlsaW5lIHwgQ2lyY2xlTWFya2VyPiA9IFtdO1xuXG4gIHByaXZhdGUgX2Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2NvbG9yRGljdDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIHByaXZhdGUgX2NvbG9ySW5kZXggPSAwO1xuXG4gIHByaXZhdGUgX2NvbG9yczogc3RyaW5nW10gPSBbXG4gICAgXCIjMDI4OEQxXCIsXG4gICAgXCIjMDBBQTAwXCIsXG4gICAgXCIjOTg0ZWEzXCIsXG4gICAgXCIjMDBkMmQ1XCIsXG4gICAgXCIjZmY3ZjAwXCIsXG4gICAgXCIjYWY4ZDAwXCIsXG4gICAgXCIjN2Y4MGNkXCIsXG4gICAgXCIjYjNlOTAwXCIsXG4gICAgXCIjYzQyZTYwXCIsXG4gICAgXCIjYTY1NjI4XCIsXG4gICAgXCIjZjc4MWJmXCIsXG4gICAgXCIjOGRkM2M3XCIsXG4gIF07XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IE1hcENhcmRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gY2FyZCBjb25maWd1cmF0aW9uLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5lbnRpdGllcyAmJiAhY29uZmlnLmdlb19sb2NhdGlvbl9zb3VyY2VzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiRWl0aGVyIGVudGl0aWVzIG9yIGdlb19sb2NhdGlvbl9zb3VyY2VzIG11c3QgYmUgZGVmaW5lZFwiXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmVudGl0aWVzICYmICFBcnJheS5pc0FycmF5KGNvbmZpZy5lbnRpdGllcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGl0aWVzIG5lZWQgdG8gYmUgYW4gYXJyYXlcIik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNvbmZpZy5nZW9fbG9jYXRpb25fc291cmNlcyAmJlxuICAgICAgIUFycmF5LmlzQXJyYXkoY29uZmlnLmdlb19sb2NhdGlvbl9zb3VyY2VzKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VvX2xvY2F0aW9uX3NvdXJjZXMgbmVlZHMgdG8gYmUgYW4gYXJyYXlcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2NvbmZpZ0VudGl0aWVzID0gY29uZmlnLmVudGl0aWVzXG4gICAgICA/IHByb2Nlc3NDb25maWdFbnRpdGllcyhjb25maWcuZW50aXRpZXMpXG4gICAgICA6IFtdO1xuXG4gICAgdGhpcy5fY2xlYW51cEhpc3RvcnkoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXJkU2l6ZSgpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5fY29uZmlnPy5hc3BlY3RfcmF0aW8pIHtcbiAgICAgIHJldHVybiA1O1xuICAgIH1cblxuICAgIGNvbnN0IHJhdGlvID0gcGFyc2VBc3BlY3RSYXRpbyh0aGlzLl9jb25maWcuYXNwZWN0X3JhdGlvKTtcbiAgICBjb25zdCBhciA9XG4gICAgICByYXRpbyAmJiByYXRpby53ID4gMCAmJiByYXRpby5oID4gMFxuICAgICAgICA/IGAkeygoMTAwICogcmF0aW8uaCkgLyByYXRpby53KS50b0ZpeGVkKDIpfWBcbiAgICAgICAgOiBcIjEwMFwiO1xuICAgIHJldHVybiAxICsgTWF0aC5mbG9vcihOdW1iZXIoYXIpIC8gMjUpIHx8IDM7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgIHRoaXMubG9hZE1hcCgpO1xuICAgICAgdGhpcy5fYXR0YWNoT2JzZXJ2ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9sZWFmbGV0TWFwKSB7XG4gICAgICB0aGlzLl9sZWFmbGV0TWFwLnJlbW92ZSgpO1xuICAgICAgdGhpcy5fbGVhZmxldE1hcCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuTGVhZmxldCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLl9tYXBFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX2RlYm91bmNlZFJlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZCBpZD1cImNhcmRcIiAuaGVhZGVyPSR7dGhpcy5fY29uZmlnLnRpdGxlfT5cbiAgICAgICAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cIm1hcFwiXG4gICAgICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHsgZGFyazogdGhpcy5fY29uZmlnLmRhcmtfbW9kZSA9PT0gdHJ1ZSB9KX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9maXRNYXB9XG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6aW1hZ2UtZmlsdGVyLWNlbnRlci1mb2N1c1wiXG4gICAgICAgICAgICB0aXRsZT1cIlJlc2V0IGZvY3VzXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoY2hhbmdlZFByb3BzKSB7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSB8fCBjaGFuZ2VkUHJvcHMuc2l6ZSA+IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFvbGRIYXNzIHx8ICF0aGlzLl9jb25maWdFbnRpdGllcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYW55IHN0YXRlIGhhcyBjaGFuZ2VkXG4gICAgZm9yIChjb25zdCBlbnRpdHkgb2YgdGhpcy5fY29uZmlnRW50aXRpZXMpIHtcbiAgICAgIGlmIChvbGRIYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5XSAhPT0gdGhpcy5oYXNzIS5zdGF0ZXNbZW50aXR5LmVudGl0eV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5sb2FkTWFwKCk7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuc2hhZG93Um9vdCEuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgdGhpcy5pc1BhbmVsIHx8ICFyb290KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgdGhpcy5fYXR0YWNoT2JzZXJ2ZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5hc3BlY3RfcmF0aW8pIHtcbiAgICAgIHJvb3Quc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMTAwJVwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJhdGlvID0gcGFyc2VBc3BlY3RSYXRpbyh0aGlzLl9jb25maWcuYXNwZWN0X3JhdGlvKTtcblxuICAgIHJvb3Quc3R5bGUucGFkZGluZ0JvdHRvbSA9XG4gICAgICByYXRpbyAmJiByYXRpby53ID4gMCAmJiByYXRpby5oID4gMFxuICAgICAgICA/IGAkeygoMTAwICogcmF0aW8uaCkgLyByYXRpby53KS50b0ZpeGVkKDIpfSVgXG4gICAgICAgIDogKHJvb3Quc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMTAwJVwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikgfHwgY2hhbmdlZFByb3BzLmhhcyhcIl9oaXN0b3J5XCIpKSB7XG4gICAgICB0aGlzLl9kcmF3RW50aXRpZXMoKTtcbiAgICAgIHRoaXMuX2ZpdE1hcCgpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiX2NvbmZpZ1wiKSAmJlxuICAgICAgY2hhbmdlZFByb3BzLmdldChcIl9jb25maWdcIikgIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgdGhpcy51cGRhdGVNYXAoY2hhbmdlZFByb3BzLmdldChcIl9jb25maWdcIikgYXMgTWFwQ2FyZENvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZyEuaG91cnNfdG9fc2hvdyAmJiB0aGlzLl9jb25maWdFbnRpdGllcz8ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBtaW51dGUgPSA2MDAwMDtcbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX2NvbmZpZ1wiKSkge1xuICAgICAgICB0aGlzLl9nZXRIaXN0b3J5KCk7XG4gICAgICB9IGVsc2UgaWYgKERhdGUubm93KCkgLSB0aGlzLl9kYXRlIS5nZXRUaW1lKCkgPj0gbWludXRlKSB7XG4gICAgICAgIHRoaXMuX2dldEhpc3RvcnkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBfbWFwRWwoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLmdldEVsZW1lbnRCeUlkKFwibWFwXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkTWFwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIFt0aGlzLl9sZWFmbGV0TWFwLCB0aGlzLkxlYWZsZXRdID0gYXdhaXQgc2V0dXBMZWFmbGV0TWFwKFxuICAgICAgdGhpcy5fbWFwRWwsXG4gICAgICB0aGlzLl9jb25maWcgIT09IHVuZGVmaW5lZCA/IHRoaXMuX2NvbmZpZy5kYXJrX21vZGUgPT09IHRydWUgOiBmYWxzZVxuICAgICk7XG4gICAgdGhpcy5fZHJhd0VudGl0aWVzKCk7XG4gICAgdGhpcy5fbGVhZmxldE1hcC5pbnZhbGlkYXRlU2l6ZSgpO1xuICAgIHRoaXMuX2ZpdE1hcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVNYXAob2xkQ29uZmlnOiBNYXBDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5fbGVhZmxldE1hcDtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLl9jb25maWc7XG4gICAgY29uc3QgTGVhZmxldCA9IHRoaXMuTGVhZmxldDtcbiAgICBpZiAoIW1hcCB8fCAhY29uZmlnIHx8ICFMZWFmbGV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25maWcuZGFya19tb2RlICE9PSBvbGRDb25maWcuZGFya19tb2RlKSB7XG4gICAgICBjcmVhdGVUaWxlTGF5ZXIoTGVhZmxldCwgY29uZmlnLmRhcmtfbW9kZSA9PT0gdHJ1ZSkuYWRkVG8obWFwKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgY29uZmlnLmVudGl0aWVzICE9PSBvbGRDb25maWcuZW50aXRpZXMgfHxcbiAgICAgIGNvbmZpZy5nZW9fbG9jYXRpb25fc291cmNlcyAhPT0gb2xkQ29uZmlnLmdlb19sb2NhdGlvbl9zb3VyY2VzXG4gICAgKSB7XG4gICAgICB0aGlzLl9kcmF3RW50aXRpZXMoKTtcbiAgICB9XG4gICAgbWFwLmludmFsaWRhdGVTaXplKCk7XG4gICAgdGhpcy5fZml0TWFwKCk7XG4gIH1cblxuICBwcml2YXRlIF9maXRNYXAoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9sZWFmbGV0TWFwIHx8ICF0aGlzLkxlYWZsZXQgfHwgIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHpvb20gPSB0aGlzLl9jb25maWcuZGVmYXVsdF96b29tO1xuICAgIGlmICh0aGlzLl9tYXBJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2xlYWZsZXRNYXAuc2V0VmlldyhcbiAgICAgICAgbmV3IHRoaXMuTGVhZmxldC5MYXRMbmcoXG4gICAgICAgICAgdGhpcy5oYXNzLmNvbmZpZy5sYXRpdHVkZSxcbiAgICAgICAgICB0aGlzLmhhc3MuY29uZmlnLmxvbmdpdHVkZVxuICAgICAgICApLFxuICAgICAgICB6b29tIHx8IDE0XG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuTGVhZmxldC5mZWF0dXJlR3JvdXAodGhpcy5fbWFwSXRlbXMpLmdldEJvdW5kcygpO1xuICAgIHRoaXMuX2xlYWZsZXRNYXAuZml0Qm91bmRzKGJvdW5kcy5wYWQoMC41KSk7XG5cbiAgICBpZiAoem9vbSAmJiB0aGlzLl9sZWFmbGV0TWFwLmdldFpvb20oKSA+IHpvb20pIHtcbiAgICAgIHRoaXMuX2xlYWZsZXRNYXAuc2V0Wm9vbSh6b29tKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRDb2xvcihlbnRpdHlJZDogc3RyaW5nKSB7XG4gICAgbGV0IGNvbG9yO1xuICAgIGlmICh0aGlzLl9jb2xvckRpY3RbZW50aXR5SWRdKSB7XG4gICAgICBjb2xvciA9IHRoaXMuX2NvbG9yRGljdFtlbnRpdHlJZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbG9yID0gdGhpcy5fY29sb3JzW3RoaXMuX2NvbG9ySW5kZXhdO1xuICAgICAgdGhpcy5fY29sb3JJbmRleCA9ICh0aGlzLl9jb2xvckluZGV4ICsgMSkgJSB0aGlzLl9jb2xvcnMubGVuZ3RoO1xuICAgICAgdGhpcy5fY29sb3JEaWN0W2VudGl0eUlkXSA9IGNvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBwcml2YXRlIF9kcmF3RW50aXRpZXMoKTogdm9pZCB7XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICBjb25zdCBtYXAgPSB0aGlzLl9sZWFmbGV0TWFwO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZztcbiAgICBjb25zdCBMZWFmbGV0ID0gdGhpcy5MZWFmbGV0O1xuICAgIGlmICghaGFzcyB8fCAhbWFwIHx8ICFjb25maWcgfHwgIUxlYWZsZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWFwSXRlbXMpIHtcbiAgICAgIHRoaXMuX21hcEl0ZW1zLmZvckVhY2goKG1hcmtlcikgPT4gbWFya2VyLnJlbW92ZSgpKTtcbiAgICB9XG4gICAgY29uc3QgbWFwSXRlbXM6IExheWVyW10gPSAodGhpcy5fbWFwSXRlbXMgPSBbXSk7XG5cbiAgICBpZiAodGhpcy5fbWFwWm9uZXMpIHtcbiAgICAgIHRoaXMuX21hcFpvbmVzLmZvckVhY2goKG1hcmtlcikgPT4gbWFya2VyLnJlbW92ZSgpKTtcbiAgICB9XG4gICAgY29uc3QgbWFwWm9uZXM6IExheWVyW10gPSAodGhpcy5fbWFwWm9uZXMgPSBbXSk7XG5cbiAgICBpZiAodGhpcy5fbWFwUGF0aHMpIHtcbiAgICAgIHRoaXMuX21hcFBhdGhzLmZvckVhY2goKG1hcmtlcikgPT4gbWFya2VyLnJlbW92ZSgpKTtcbiAgICB9XG4gICAgY29uc3QgbWFwUGF0aHM6IExheWVyW10gPSAodGhpcy5fbWFwUGF0aHMgPSBbXSk7XG5cbiAgICBjb25zdCBhbGxFbnRpdGllcyA9IHRoaXMuX2NvbmZpZ0VudGl0aWVzIS5jb25jYXQoKTtcblxuICAgIC8vIENhbGN1bGF0ZSB2aXNpYmxlIGdlbyBsb2NhdGlvbiBzb3VyY2VzXG4gICAgaWYgKGNvbmZpZy5nZW9fbG9jYXRpb25fc291cmNlcykge1xuICAgICAgY29uc3QgaW5jbHVkZXNBbGwgPSBjb25maWcuZ2VvX2xvY2F0aW9uX3NvdXJjZXMuaW5jbHVkZXMoXCJhbGxcIik7XG4gICAgICBmb3IgKGNvbnN0IGVudGl0eUlkIG9mIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKSkge1xuICAgICAgICBjb25zdCBzdGF0ZU9iaiA9IGhhc3Muc3RhdGVzW2VudGl0eUlkXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbXB1dGVEb21haW4oZW50aXR5SWQpID09PSBcImdlb19sb2NhdGlvblwiICYmXG4gICAgICAgICAgKGluY2x1ZGVzQWxsIHx8XG4gICAgICAgICAgICBjb25maWcuZ2VvX2xvY2F0aW9uX3NvdXJjZXMuaW5jbHVkZXMoc3RhdGVPYmouYXR0cmlidXRlcy5zb3VyY2UpKVxuICAgICAgICApIHtcbiAgICAgICAgICBhbGxFbnRpdGllcy5wdXNoKHsgZW50aXR5OiBlbnRpdHlJZCB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERSQVcgaGlzdG9yeVxuICAgIGlmICh0aGlzLl9jb25maWchLmhvdXJzX3RvX3Nob3cgJiYgdGhpcy5faGlzdG9yeSkge1xuICAgICAgZm9yIChjb25zdCBlbnRpdHlTdGF0ZXMgb2YgdGhpcy5faGlzdG9yeSkge1xuICAgICAgICBpZiAoZW50aXR5U3RhdGVzPy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVudGl0eUlkID0gZW50aXR5U3RhdGVzWzBdLmVudGl0eV9pZDtcblxuICAgICAgICAvLyBmaWx0ZXIgbG9jYXRpb24gZGF0YSBmcm9tIHN0YXRlcyBhbmQgcmVtb3ZlIGFsbCBpbnZhbGlkIGxvY2F0aW9uc1xuICAgICAgICBjb25zdCBwYXRoID0gZW50aXR5U3RhdGVzLnJlZHVjZShcbiAgICAgICAgICAoYWNjdW11bGF0b3I6IExhdExuZ1R1cGxlW10sIHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IHN0YXRlLmF0dHJpYnV0ZXMubGF0aXR1ZGU7XG4gICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBzdGF0ZS5hdHRyaWJ1dGVzLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIGlmIChsYXRpdHVkZSAmJiBsb25naXR1ZGUpIHtcbiAgICAgICAgICAgICAgYWNjdW11bGF0b3IucHVzaChbbGF0aXR1ZGUsIGxvbmdpdHVkZV0gYXMgTGF0TG5nVHVwbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW11cbiAgICAgICAgKSBhcyBMYXRMbmdUdXBsZVtdO1xuXG4gICAgICAgIC8vIERSQVcgSElTVE9SWVxuICAgICAgICBmb3IgKFxuICAgICAgICAgIGxldCBtYXJrZXJJbmRleCA9IDA7XG4gICAgICAgICAgbWFya2VySW5kZXggPCBwYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgbWFya2VySW5kZXgrK1xuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBvcGFjaXR5U3RlcCA9IDAuOCAvIChwYXRoLmxlbmd0aCAtIDIpO1xuICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSAwLjIgKyBtYXJrZXJJbmRleCAqIG9wYWNpdHlTdGVwO1xuXG4gICAgICAgICAgLy8gRFJBVyBoaXN0b3J5IHBhdGggZG90c1xuICAgICAgICAgIG1hcFBhdGhzLnB1c2goXG4gICAgICAgICAgICBMZWFmbGV0LmNpcmNsZU1hcmtlcihwYXRoW21hcmtlckluZGV4XSwge1xuICAgICAgICAgICAgICByYWRpdXM6IDMsXG4gICAgICAgICAgICAgIGNvbG9yOiB0aGlzLl9nZXRDb2xvcihlbnRpdHlJZCksXG4gICAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIERSQVcgaGlzdG9yeSBwYXRoIGxpbmVzXG4gICAgICAgICAgY29uc3QgbGluZSA9IFtwYXRoW21hcmtlckluZGV4XSwgcGF0aFttYXJrZXJJbmRleCArIDFdXTtcbiAgICAgICAgICBtYXBQYXRocy5wdXNoKFxuICAgICAgICAgICAgTGVhZmxldC5wb2x5bGluZShsaW5lLCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB0aGlzLl9nZXRDb2xvcihlbnRpdHlJZCksXG4gICAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERSQVcgZW50aXRpZXNcbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBhbGxFbnRpdGllcykge1xuICAgICAgY29uc3QgZW50aXR5SWQgPSBlbnRpdHkuZW50aXR5O1xuICAgICAgY29uc3Qgc3RhdGVPYmogPSBoYXNzLnN0YXRlc1tlbnRpdHlJZF07XG4gICAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdGl0bGUgPSBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZSxcbiAgICAgICAgcGFzc2l2ZSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgcmFkaXVzLFxuICAgICAgICBlbnRpdHlfcGljdHVyZTogZW50aXR5UGljdHVyZSxcbiAgICAgICAgZ3BzX2FjY3VyYWN5OiBncHNBY2N1cmFjeSxcbiAgICAgIH0gPSBzdGF0ZU9iai5hdHRyaWJ1dGVzO1xuXG4gICAgICBpZiAoIShsYXRpdHVkZSAmJiBsb25naXR1ZGUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSA9PT0gXCJ6b25lXCIpIHtcbiAgICAgICAgLy8gRFJBVyBaT05FXG4gICAgICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgaWNvblxuICAgICAgICBsZXQgaWNvbkhUTUwgPSBcIlwiO1xuICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhhLWljb25cIik7XG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiaWNvblwiLCBpY29uKTtcbiAgICAgICAgICBpY29uSFRNTCA9IGVsLm91dGVySFRNTDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IHRpdGxlO1xuICAgICAgICAgIGljb25IVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIG1hcmtlciB3aXRoIHRoZSBpY29uXG4gICAgICAgIG1hcFpvbmVzLnB1c2goXG4gICAgICAgICAgTGVhZmxldC5tYXJrZXIoW2xhdGl0dWRlLCBsb25naXR1ZGVdLCB7XG4gICAgICAgICAgICBpY29uOiBMZWFmbGV0LmRpdkljb24oe1xuICAgICAgICAgICAgICBodG1sOiBpY29uSFRNTCxcbiAgICAgICAgICAgICAgaWNvblNpemU6IFsyNCwgMjRdLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuX2NvbmZpZyEuZGFya19tb2RlID09PSB0cnVlID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGNpcmNsZSBhcm91bmQgaXRcbiAgICAgICAgbWFwWm9uZXMucHVzaChcbiAgICAgICAgICBMZWFmbGV0LmNpcmNsZShbbGF0aXR1ZGUsIGxvbmdpdHVkZV0sIHtcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yOiBcIiNGRjk4MDBcIixcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBEUkFXIEVOVElUWVxuICAgICAgLy8gY3JlYXRlIGljb25cbiAgICAgIGNvbnN0IGVudGl0eU5hbWUgPSB0aXRsZVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5tYXAoKHBhcnQpID0+IHBhcnRbMF0pXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgICAgIC5zdWJzdHIoMCwgMyk7XG5cbiAgICAgIC8vIGNyZWF0ZSBtYXJrZXQgd2l0aCB0aGUgaWNvblxuICAgICAgbWFwSXRlbXMucHVzaChcbiAgICAgICAgTGVhZmxldC5tYXJrZXIoW2xhdGl0dWRlLCBsb25naXR1ZGVdLCB7XG4gICAgICAgICAgaWNvbjogTGVhZmxldC5kaXZJY29uKHtcbiAgICAgICAgICAgIC8vIExlYWZsZXQgY2xvbmVzIHRoaXMgZWxlbWVudCBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBtYXAuIFRoaXMgbWVzc2VzIHVwXG4gICAgICAgICAgICAvLyBvdXIgUG9seW1lciBvYmplY3QgYW5kIHdlIGNhbid0IHBhc3MgZGF0YSB0aHJvdWdoLiBUaHVzIHdlIGhhY2sgbGlrZSB0aGlzLlxuICAgICAgICAgICAgaHRtbDogYFxuICAgICAgICAgICAgICA8aGEtZW50aXR5LW1hcmtlclxuICAgICAgICAgICAgICAgIGVudGl0eS1pZD1cIiR7ZW50aXR5SWR9XCJcbiAgICAgICAgICAgICAgICBlbnRpdHktbmFtZT1cIiR7ZW50aXR5TmFtZX1cIlxuICAgICAgICAgICAgICAgIGVudGl0eS1waWN0dXJlPVwiJHtlbnRpdHlQaWN0dXJlIHx8IFwiXCJ9XCJcbiAgICAgICAgICAgICAgICBlbnRpdHktY29sb3I9XCIke3RoaXMuX2dldENvbG9yKGVudGl0eUlkKX1cIlxuICAgICAgICAgICAgICA+PC9oYS1lbnRpdHktbWFya2VyPlxuICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIGljb25TaXplOiBbNDgsIDQ4XSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aXRsZTogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaiksXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICAvLyBjcmVhdGUgY2lyY2xlIGFyb3VuZCBpZiBlbnRpdHkgaGFzIGFjY3VyYWN5XG4gICAgICBpZiAoZ3BzQWNjdXJhY3kpIHtcbiAgICAgICAgbWFwSXRlbXMucHVzaChcbiAgICAgICAgICBMZWFmbGV0LmNpcmNsZShbbGF0aXR1ZGUsIGxvbmdpdHVkZV0sIHtcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLl9nZXRDb2xvcihlbnRpdHlJZCksXG4gICAgICAgICAgICByYWRpdXM6IGdwc0FjY3VyYWN5LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwSXRlbXMuZm9yRWFjaCgobWFya2VyKSA9PiBtYXAuYWRkTGF5ZXIobWFya2VyKSk7XG4gICAgdGhpcy5fbWFwWm9uZXMuZm9yRWFjaCgobWFya2VyKSA9PiBtYXAuYWRkTGF5ZXIobWFya2VyKSk7XG4gICAgdGhpcy5fbWFwUGF0aHMuZm9yRWFjaCgobWFya2VyKSA9PiBtYXAuYWRkTGF5ZXIobWFya2VyKSk7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hPYnNlcnZlcigpOiB2b2lkIHtcbiAgICAvLyBPYnNlcnZlIGNoYW5nZXMgdG8gbWFwIHNpemUgYW5kIGludmFsaWRhdGUgdG8gcHJldmVudCBicm9rZW4gcmVuZGVyaW5nXG4gICAgLy8gVXNlcyBSZXNpemVPYnNlcnZlciBpbiBDaHJvbWUsIG90aGVyd2lzZSB3aW5kb3cgcmVzaXplIGV2ZW50XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLl9yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PlxuICAgICAgICB0aGlzLl9kZWJvdW5jZWRSZXNpemVMaXN0ZW5lcigpXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9tYXBFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX2RlYm91bmNlZFJlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9nZXRIaXN0b3J5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKCF0aGlzLl9jb25maWdFbnRpdGllcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGl0eUlkcyA9IHRoaXMuX2NvbmZpZ0VudGl0aWVzIS5tYXAoKGVudGl0eSkgPT4gZW50aXR5LmVudGl0eSkuam9pbihcbiAgICAgIFwiLFwiXG4gICAgKTtcbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIHN0YXJ0VGltZS5zZXRIb3VycyhlbmRUaW1lLmdldEhvdXJzKCkgLSB0aGlzLl9jb25maWchLmhvdXJzX3RvX3Nob3chKTtcbiAgICBjb25zdCBza2lwSW5pdGlhbFN0YXRlID0gZmFsc2U7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRDaGFuZ2VzT25seSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVIaXN0b3J5ID0gYXdhaXQgZmV0Y2hSZWNlbnQoXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICBlbnRpdHlJZHMsXG4gICAgICBzdGFydFRpbWUsXG4gICAgICBlbmRUaW1lLFxuICAgICAgc2tpcEluaXRpYWxTdGF0ZSxcbiAgICAgIHNpZ25pZmljYW50Q2hhbmdlc09ubHlcbiAgICApO1xuXG4gICAgaWYgKHN0YXRlSGlzdG9yeS5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faGlzdG9yeSA9IHN0YXRlSGlzdG9yeTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFudXBIaXN0b3J5KCkge1xuICAgIGlmICghdGhpcy5faGlzdG9yeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29uZmlnIS5ob3Vyc190b19zaG93ISA8PSAwKSB7XG4gICAgICB0aGlzLl9oaXN0b3J5ID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZW1vdmUgdW51c2VkIGVudGl0aWVzXG4gICAgICBjb25zdCBjb25maWdFbnRpdHlJZHMgPSB0aGlzLl9jb25maWdFbnRpdGllcz8ubWFwKFxuICAgICAgICAoY29uZmlnRW50aXR5KSA9PiBjb25maWdFbnRpdHkuZW50aXR5XG4gICAgICApO1xuICAgICAgdGhpcy5faGlzdG9yeSA9IHRoaXMuX2hpc3RvcnkhLnJlZHVjZShcbiAgICAgICAgKGFjY3VtdWxhdG9yOiBIYXNzRW50aXR5W11bXSwgZW50aXR5U3RhdGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50aXR5SWQgPSBlbnRpdHlTdGF0ZXNbMF0uZW50aXR5X2lkO1xuICAgICAgICAgIGlmIChjb25maWdFbnRpdHlJZHM/LmluY2x1ZGVzKGVudGl0eUlkKSkge1xuICAgICAgICAgICAgYWNjdW11bGF0b3IucHVzaChlbnRpdHlTdGF0ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgICApIGFzIEhhc3NFbnRpdHlbXVtdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0KFtpc3BhbmVsXSkgaGEtY2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpc3BhbmVsXVtlZGl0TW9kZV0pIGhhLWNhcmQge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUxcHgpO1xuICAgICAgfVxuXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgI21hcCB7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZjg7XG4gICAgICB9XG5cbiAgICAgICNtYXAuZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwOTA5MDk7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDc1cHg7XG4gICAgICAgIGxlZnQ6IDdweDtcbiAgICAgIH1cblxuICAgICAgI3Jvb3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpc3BhbmVsXSkgI3Jvb3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG5cbiAgICAgIC5saWdodCB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1tYXAtY2FyZFwiOiBIdWlNYXBDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWltYWdlL2lyb24taW1hZ2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhRW50aXR5TWFya2VyIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1wb3NpdGlvbmluZ1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5tYXJrZXIge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi41ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZFxuICAgICAgICAgICAgdmFyKC0taGEtbWFya2VyLWNvbG9yLCB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgICBjb2xvcjogcmdiKDc2LCA3NiwgNzYpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGlyb24taW1hZ2Uge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1hcmtlclwiIHN0eWxlJD1cImJvcmRlci1jb2xvcjp7e2VudGl0eUNvbG9yfX1cIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2VudGl0eU5hbWVdXVwiPltbZW50aXR5TmFtZV1dPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2VudGl0eVBpY3R1cmVdXVwiPlxuICAgICAgICAgIDxpcm9uLWltYWdlXG4gICAgICAgICAgICBzaXppbmc9XCJjb3ZlclwiXG4gICAgICAgICAgICBjbGFzcz1cImZpdFwiXG4gICAgICAgICAgICBzcmM9XCJbW2VudGl0eVBpY3R1cmVdXVwiXG4gICAgICAgICAgPjwvaXJvbi1pbWFnZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgZW50aXR5SWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eU5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eVBpY3R1cmU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eUNvbG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5iYWRnZVRhcChldikpO1xuICB9XG5cbiAgYmFkZ2VUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5lbnRpdHlJZCkge1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogdGhpcy5lbnRpdHlJZCB9KTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZW50aXR5LW1hcmtlclwiLCBIYUVudGl0eU1hcmtlcik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLGlNQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0Esd01BQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFRQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFXQTtBQVVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7Ozs7O0FBQ0E7QUFDQSxvcUJBQ0E7QUFFQTtBQUNBOzs7OztBQUVBO0FBS0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBOzs7OztBQUVBOzs7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBS0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7Ozs7OztBQS9CQTtBQUtBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTs7O0FBR0E7Ozs7Ozs7QUFSQTtBQWdCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBV0E7QUFDQTtBQVpBO0FBY0E7QUFmQTtBQUNBO0FBbUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtREE7OztBQXZvQkE7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBcEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE5RUE7QUFDQTtBQStFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
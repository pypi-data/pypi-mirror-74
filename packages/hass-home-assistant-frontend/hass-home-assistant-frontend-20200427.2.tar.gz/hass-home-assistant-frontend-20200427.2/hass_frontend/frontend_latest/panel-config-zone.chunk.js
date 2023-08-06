(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-zone"],{

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

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
};

/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = stateObj => {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
};

/***/ }),

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

/***/ }),

/***/ "./src/components/map/ha-locations-editor.ts":
/*!***************************************************!*\
  !*** ./src/components/map/ha-locations-editor.ts ***!
  \***************************************************/
/*! exports provided: HaLocationsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaLocationsEditor", function() { return HaLocationsEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _data_zone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/zone */ "./src/data/zone.ts");
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





let HaLocationsEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-locations-editor")], function (_initialize, _LitElement) {
  class HaLocationsEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaLocationsEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "locations",
      value: void 0
    }, {
      kind: "field",
      key: "fitZoom",

      value() {
        return 16;
      }

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
      key: "_locationMarkers",
      value: void 0
    }, {
      kind: "field",
      key: "_circles",

      value() {
        return {};
      }

    }, {
      kind: "method",
      key: "fitMap",
      value: // eslint-disable-next-line
      // eslint-disable-next-line
      function fitMap() {
        if (!this._leafletMap || !this._locationMarkers || !Object.keys(this._locationMarkers).length) {
          return;
        }

        const bounds = this.Leaflet.latLngBounds(Object.values(this._locationMarkers).map(item => item.getLatLng()));

        this._leafletMap.fitBounds(bounds.pad(0.5));
      }
    }, {
      kind: "method",
      key: "fitMarker",
      value: function fitMarker(id) {
        if (!this._leafletMap || !this._locationMarkers) {
          return;
        }

        const marker = this._locationMarkers[id];

        if (!marker) {
          return;
        }

        if (marker.getBounds) {
          this._leafletMap.fitBounds(marker.getBounds());

          marker.bringToFront();
        } else {
          const circle = this._circles[id];

          if (circle) {
            this._leafletMap.fitBounds(circle.getBounds());
          } else {
            this._leafletMap.setView(marker.getLatLng(), this.fitZoom);
          }
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <div id="map"></div> `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaLocationsEditor.prototype), "firstUpdated", this).call(this, changedProps);

        this._initMap();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaLocationsEditor.prototype), "updated", this).call(this, changedProps); // Still loading.


        if (!this.Leaflet) {
          return;
        }

        if (changedProps.has("locations")) {
          this._updateMarkers();
        }
      }
    }, {
      kind: "get",
      key: "_mapEl",
      value: function _mapEl() {
        return this.shadowRoot.querySelector("div");
      }
    }, {
      kind: "method",
      key: "_initMap",
      value: async function _initMap() {
        [this._leafletMap, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_2__["setupLeafletMap"])(this._mapEl, false, true);

        this._updateMarkers();

        this.fitMap();

        this._leafletMap.invalidateSize();
      }
    }, {
      kind: "method",
      key: "_updateLocation",
      value: function _updateLocation(ev) {
        const marker = ev.target;
        const latlng = marker.getLatLng();
        let longitude = latlng.lng;

        if (Math.abs(longitude) > 180.0) {
          // Normalize longitude if map provides values beyond -180 to +180 degrees.
          longitude = (longitude % 360.0 + 540.0) % 360.0 - 180.0;
        }

        const location = [latlng.lat, longitude];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "location-updated", {
          id: marker.id,
          location
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_updateRadius",
      value: function _updateRadius(ev) {
        const marker = ev.target;
        const circle = this._locationMarkers[marker.id];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "radius-updated", {
          id: marker.id,
          radius: circle.getRadius()
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_markerClicked",
      value: function _markerClicked(ev) {
        const marker = ev.target;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "marker-clicked", {
          id: marker.id
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_updateMarkers",
      value: function _updateMarkers() {
        if (this._locationMarkers) {
          Object.values(this._locationMarkers).forEach(marker => {
            marker.remove();
          });
          this._locationMarkers = undefined;
          Object.values(this._circles).forEach(circle => circle.remove());
          this._circles = {};
        }

        if (!this.locations || !this.locations.length) {
          return;
        }

        this._locationMarkers = {};
        this.locations.forEach(location => {
          let icon;

          if (location.icon) {
            // create icon
            const el = document.createElement("div");
            el.className = "named-icon";

            if (location.name) {
              el.innerText = location.name;
            }

            const iconEl = document.createElement("ha-icon");
            iconEl.setAttribute("icon", location.icon);
            el.prepend(iconEl);
            icon = this.Leaflet.divIcon({
              html: el.outerHTML,
              iconSize: [24, 24],
              className: "light"
            });
          }

          if (location.radius) {
            const circle = this.Leaflet.circle([location.latitude, location.longitude], {
              color: location.radius_color || _data_zone__WEBPACK_IMPORTED_MODULE_3__["defaultRadiusColor"],
              radius: location.radius
            });
            circle.addTo(this._leafletMap);

            if (location.radius_editable || location.location_editable) {
              // @ts-ignore
              circle.editing.enable(); // @ts-ignore

              const moveMarker = circle.editing._moveMarker; // @ts-ignore

              const resizeMarker = circle.editing._resizeMarkers[0];

              if (icon) {
                moveMarker.setIcon(icon);
              }

              resizeMarker.id = moveMarker.id = location.id;
              moveMarker.addEventListener("dragend", // @ts-ignore
              ev => this._updateLocation(ev)).addEventListener("click", // @ts-ignore
              ev => this._markerClicked(ev));

              if (location.radius_editable) {
                resizeMarker.addEventListener("dragend", // @ts-ignore
                ev => this._updateRadius(ev));
              } else {
                resizeMarker.remove();
              }

              this._locationMarkers[location.id] = circle;
            } else {
              this._circles[location.id] = circle;
            }
          }

          if (!location.radius || !location.radius_editable && !location.location_editable) {
            const options = {
              title: location.name
            };

            if (icon) {
              options.icon = icon;
            }

            const marker = this.Leaflet.marker([location.latitude, location.longitude], options).addEventListener("dragend", // @ts-ignore
            ev => this._updateLocation(ev)).addEventListener("click", // @ts-ignore
            ev => this._markerClicked(ev)).addTo(this._leafletMap);
            marker.id = location.id;
            this._locationMarkers[location.id] = marker;
          }
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
        height: 300px;
      }
      #map {
        height: 100%;
      }
      .light {
        color: #000000;
      }
      .leaflet-marker-draggable {
        cursor: move !important;
      }
      .leaflet-edit-resize {
        border-radius: 50%;
        cursor: nesw-resize !important;
      }
      .named-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/data/core.ts":
/*!**************************!*\
  !*** ./src/data/core.ts ***!
  \**************************/
/*! exports provided: saveCoreConfig, detectCoreConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCoreConfig", function() { return saveCoreConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCoreConfig", function() { return detectCoreConfig; });
const saveCoreConfig = (hass, values) => hass.callWS(Object.assign({
  type: "config/core/update"
}, values));
const detectCoreConfig = hass => hass.callWS({
  type: "config/core/detect"
});

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: findBatteryEntity, computeEntityRegistryName, getExtendedEntityRegistryEntry, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBatteryEntity", function() { return findBatteryEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtendedEntityRegistryEntry", function() { return getExtendedEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const findBatteryEntity = (hass, entities) => entities.find(entity => hass.states[entity.entity_id] && hass.states[entity.entity_id].attributes.device_class === "battery");
const computeEntityRegistryName = (hass, entry) => {
  if (entry.name) {
    return entry.name;
  }

  const state = hass.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const getExtendedEntityRegistryEntry = (hass, entityId) => hass.callWS({
  type: "config/entity_registry/get",
  entity_id: entityId
});
const updateEntityRegistryEntry = (hass, entityId, updates) => hass.callWS(Object.assign({
  type: "config/entity_registry/update",
  entity_id: entityId
}, updates));
const removeEntityRegistryEntry = (hass, entityId) => hass.callWS({
  type: "config/entity_registry/remove",
  entity_id: entityId
});

const fetchEntityRegistry = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then(entities => store.setState(entities, true)), 500, true), "entity_registry_updated");

const subscribeEntityRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/zone.ts":
/*!**************************!*\
  !*** ./src/data/zone.ts ***!
  \**************************/
/*! exports provided: defaultRadiusColor, homeRadiusColor, passiveRadiusColor, fetchZones, createZone, updateZone, deleteZone, showZoneEditor, getZoneEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRadiusColor", function() { return defaultRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRadiusColor", function() { return homeRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveRadiusColor", function() { return passiveRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchZones", function() { return fetchZones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createZone", function() { return createZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateZone", function() { return updateZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteZone", function() { return deleteZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showZoneEditor", function() { return showZoneEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneEditorInitData", function() { return getZoneEditorInitData; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const defaultRadiusColor = "#FF9800";
const homeRadiusColor = "#03a9f4";
const passiveRadiusColor = "#9b9b9b";
const fetchZones = hass => hass.callWS({
  type: "zone/list"
});
const createZone = (hass, values) => hass.callWS(Object.assign({
  type: "zone/create"
}, values));
const updateZone = (hass, zoneId, updates) => hass.callWS(Object.assign({
  type: "zone/update",
  zone_id: zoneId
}, updates));
const deleteZone = (hass, zoneId) => hass.callWS({
  type: "zone/delete",
  zone_id: zoneId
});
let inititialZoneEditorData;
const showZoneEditor = (el, data) => {
  inititialZoneEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/zone/new");
};
const getZoneEditorInitData = () => {
  const data = inititialZoneEditorData;
  inititialZoneEditorData = undefined;
  return data;
};

/***/ }),

/***/ "./src/dialogs/generic/show-dialog-box.ts":
/*!************************************************!*\
  !*** ./src/dialogs/generic/show-dialog-box.ts ***!
  \************************************************/
/*! exports provided: loadGenericDialog, showAlertDialog, showConfirmationDialog, showPromptDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGenericDialog", function() { return loadGenericDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertDialog", function() { return showAlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPromptDialog", function() { return showPromptDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadGenericDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(13), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e(14), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-box */ "./src/dialogs/generic/dialog-box.ts"));

const showDialogHelper = (element, dialogParams, extra) => new Promise(resolve => {
  const origCancel = dialogParams.cancel;
  const origConfirm = dialogParams.confirm;
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-box",
    dialogImport: loadGenericDialog,
    dialogParams: Object.assign({}, dialogParams, {}, extra, {
      cancel: () => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? null : false);

        if (origCancel) {
          origCancel();
        }
      },
      confirm: out => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? out : true);

        if (origConfirm) {
          origConfirm(out);
        }
      }
    })
  });
});

const showAlertDialog = (element, dialogParams) => showDialogHelper(element, dialogParams);
const showConfirmationDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  confirmation: true
});
const showPromptDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  prompt: true
});

/***/ }),

/***/ "./src/panels/config/zone/ha-config-zone.ts":
/*!**************************************************!*\
  !*** ./src/panels/config/zone/ha-config-zone.ts ***!
  \**************************************************/
/*! exports provided: HaConfigZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaConfigZone", function() { return HaConfigZone; });
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_map_ha_locations_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/map/ha-locations-editor */ "./src/components/map/ha-locations-editor.ts");
/* harmony import */ var _data_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/core */ "./src/data/core.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _data_zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../data/zone */ "./src/data/zone.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_tabs_subpage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../layouts/hass-tabs-subpage */ "./src/layouts/hass-tabs-subpage.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
/* harmony import */ var _show_dialog_zone_detail__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./show-dialog-zone-detail */ "./src/panels/config/zone/show-dialog-zone-detail.ts");
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
























let HaConfigZone = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-config-zone")], function (_initialize, _SubscribeMixin) {
  class HaConfigZone extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigZone,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_storageItems",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_stateItems",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_activeEntry",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_canEditCore",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])("ha-locations-editor")],
      key: "_map",
      value: void 0
    }, {
      kind: "field",
      key: "_regEntities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_getZones",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])((storageItems, stateItems) => {
          const stateLocations = stateItems.map(state => {
            return {
              id: state.entity_id,
              icon: state.attributes.icon,
              name: state.attributes.friendly_name || state.entity_id,
              latitude: state.attributes.latitude,
              longitude: state.attributes.longitude,
              radius: state.attributes.radius,
              radius_color: state.entity_id === "zone.home" ? _data_zone__WEBPACK_IMPORTED_MODULE_15__["homeRadiusColor"] : state.attributes.passive ? _data_zone__WEBPACK_IMPORTED_MODULE_15__["passiveRadiusColor"] : _data_zone__WEBPACK_IMPORTED_MODULE_15__["defaultRadiusColor"],
              location_editable: state.entity_id === "zone.home" && this._canEditCore,
              radius_editable: false
            };
          });
          const storageLocations = storageItems.map(zone => {
            return Object.assign({}, zone, {
              radius_color: zone.passive ? _data_zone__WEBPACK_IMPORTED_MODULE_15__["passiveRadiusColor"] : _data_zone__WEBPACK_IMPORTED_MODULE_15__["defaultRadiusColor"],
              location_editable: true,
              radius_editable: true
            });
          });
          return storageLocations.concat(stateLocations);
        });
      }

    }, {
      kind: "method",
      key: "hassSubscribe",
      value: function hassSubscribe() {
        return [Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_14__["subscribeEntityRegistry"])(this.hass.connection, entities => {
          this._regEntities = entities.map(registryEntry => registryEntry.entity_id);

          this._filterStates();
        })];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || this._storageItems === undefined || this._stateItems === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]` <hass-loading-screen></hass-loading-screen> `;
        }

        const hass = this.hass;
        const listBox = this._storageItems.length === 0 && this._stateItems.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
            <div class="empty">
              ${hass.localize("ui.panel.config.zone.no_zones_created_yet")}
              <br />
              <mwc-button @click=${this._createZone}>
                ${hass.localize("ui.panel.config.zone.create_zone")}</mwc-button
              >
            </div>
          ` : lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
            <paper-listbox
              attr-for-selected="data-id"
              .selected=${this._activeEntry || ""}
            >
              ${this._storageItems.map(entry => {
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                  <paper-icon-item
                    data-id=${entry.id}
                    @click=${this._itemClicked}
                    .entry=${entry}
                  >
                    <ha-icon .icon=${entry.icon} slot="item-icon"> </ha-icon>
                    <paper-item-body>
                      ${entry.name}
                    </paper-item-body>
                    ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                          <paper-icon-button
                            icon="hass:pencil"
                            .entry=${entry}
                            @click=${this._openEditEntry}
                          ></paper-icon-button>
                        ` : ""}
                  </paper-icon-item>
                `;
        })}
              ${this._stateItems.map(state => {
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                  <paper-icon-item
                    data-id=${state.entity_id}
                    @click=${this._stateItemClicked}
                  >
                    <ha-icon .icon=${state.attributes.icon} slot="item-icon">
                    </ha-icon>
                    <paper-item-body>
                      ${state.attributes.friendly_name || state.entity_id}
                    </paper-item-body>
                    <div style="display:inline-block">
                      <paper-icon-button
                        .entityId=${state.entity_id}
                        icon="hass:pencil"
                        @click=${this._openCoreConfig}
                        disabled=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_5__["ifDefined"])(state.entity_id === "zone.home" && this.narrow && this._canEditCore ? undefined : true)}
                      ></paper-icon-button>
                      <paper-tooltip position="left">
                        ${state.entity_id === "zone.home" ? this.hass.localize(`ui.panel.config.zone.${this.narrow ? "edit_home_zone_narrow" : "edit_home_zone"}`) : this.hass.localize("ui.panel.config.zone.configured_in_yaml")}
                      </paper-tooltip>
                    </div>
                  </paper-icon-item>
                `;
        })}
            </paper-listbox>
          `;
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <hass-tabs-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        back-path="/config"
        .tabs=${_ha_panel_config__WEBPACK_IMPORTED_MODULE_21__["configSections"].persons}
      >
        ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <ha-config-section .isWide=${this.isWide}>
                <span slot="introduction">
                  ${hass.localize("ui.panel.config.zone.introduction")}
                </span>
                <ha-card>${listBox}</ha-card>
              </ha-config-section>
            ` : ""}
        ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="flex">
                <ha-locations-editor
                  .locations=${this._getZones(this._storageItems, this._stateItems)}
                  @location-updated=${this._locationUpdated}
                  @radius-updated=${this._radiusUpdated}
                  @marker-clicked=${this._markerClicked}
                ></ha-locations-editor>
                <div class="overflow">
                  ${listBox}
                </div>
              </div>
            ` : ""}
      </hass-tabs-subpage>

      <ha-fab
        ?is-wide=${this.isWide}
        ?narrow=${this.narrow}
        icon="hass:plus"
        title="${hass.localize("ui.panel.config.zone.add_zone")}"
        @click=${this._createZone}
      ></ha-fab>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        var _this$hass$user;

        _get(_getPrototypeOf(HaConfigZone.prototype), "firstUpdated", this).call(this, changedProps);

        this._canEditCore = Boolean((_this$hass$user = this.hass.user) === null || _this$hass$user === void 0 ? void 0 : _this$hass$user.is_admin) && ["storage", "default"].includes(this.hass.config.config_source);

        this._fetchData();

        if (this.route.path === "/new") {
          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_8__["navigate"])(this, "/config/zone", true);

          this._createZone();
        }
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaConfigZone.prototype), "updated", this).call(this, changedProps);

        const oldHass = changedProps.get("hass");

        if (oldHass && this._stateItems) {
          this._getStates(oldHass);
        }
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        this._storageItems = (await Object(_data_zone__WEBPACK_IMPORTED_MODULE_15__["fetchZones"])(this.hass)).sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_9__["compare"])(ent1.name, ent2.name));

        this._getStates();
      }
    }, {
      kind: "method",
      key: "_getStates",
      value: function _getStates(oldHass) {
        let changed = false;
        const tempStates = Object.values(this.hass.states).filter(entity => {
          if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(entity) !== "zone") {
            return false;
          }

          if ((oldHass === null || oldHass === void 0 ? void 0 : oldHass.states[entity.entity_id]) !== entity) {
            changed = true;
          }

          if (this._regEntities.includes(entity.entity_id)) {
            return false;
          }

          return true;
        });

        if (changed) {
          this._stateItems = tempStates;
        }
      }
    }, {
      kind: "method",
      key: "_filterStates",
      value: function _filterStates() {
        if (!this._stateItems) {
          return;
        }

        const tempStates = this._stateItems.filter(entity => !this._regEntities.includes(entity.entity_id));

        if (tempStates.length !== this._stateItems.length) {
          this._stateItems = tempStates;
        }
      }
    }, {
      kind: "method",
      key: "_locationUpdated",
      value: async function _locationUpdated(ev) {
        this._activeEntry = ev.detail.id;

        if (ev.detail.id === "zone.home" && this._canEditCore) {
          await Object(_data_core__WEBPACK_IMPORTED_MODULE_13__["saveCoreConfig"])(this.hass, {
            latitude: ev.detail.location[0],
            longitude: ev.detail.location[1]
          });
          return;
        }

        const entry = this._storageItems.find(item => item.id === ev.detail.id);

        if (!entry) {
          return;
        }

        this._updateEntry(entry, {
          latitude: ev.detail.location[0],
          longitude: ev.detail.location[1]
        });
      }
    }, {
      kind: "method",
      key: "_radiusUpdated",
      value: function _radiusUpdated(ev) {
        this._activeEntry = ev.detail.id;

        const entry = this._storageItems.find(item => item.id === ev.detail.id);

        if (!entry) {
          return;
        }

        this._updateEntry(entry, {
          radius: ev.detail.radius
        });
      }
    }, {
      kind: "method",
      key: "_markerClicked",
      value: function _markerClicked(ev) {
        this._activeEntry = ev.detail.id;
      }
    }, {
      kind: "method",
      key: "_createZone",
      value: function _createZone() {
        this._openDialog();
      }
    }, {
      kind: "method",
      key: "_itemClicked",
      value: function _itemClicked(ev) {
        if (this.narrow) {
          this._openEditEntry(ev);

          return;
        }

        const entry = ev.currentTarget.entry;

        this._zoomZone(entry.id);
      }
    }, {
      kind: "method",
      key: "_stateItemClicked",
      value: function _stateItemClicked(ev) {
        const entityId = ev.currentTarget.getAttribute("data-id");

        this._zoomZone(entityId);
      }
    }, {
      kind: "method",
      key: "_zoomZone",
      value: function _zoomZone(id) {
        var _this$_map;

        (_this$_map = this._map) === null || _this$_map === void 0 ? void 0 : _this$_map.fitMarker(id);
      }
    }, {
      kind: "method",
      key: "_openEditEntry",
      value: function _openEditEntry(ev) {
        const entry = ev.currentTarget.entry;

        this._openDialog(entry);
      }
    }, {
      kind: "method",
      key: "_openCoreConfig",
      value: async function _openCoreConfig(ev) {
        const entityId = ev.currentTarget.entityId;

        if (entityId !== "zone.home" || !this.narrow || !this._canEditCore) {
          return;
        }

        if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_16__["showConfirmationDialog"])(this, {
          title: this.hass.localize("ui.panel.config.zone.go_to_core_config"),
          text: this.hass.localize("ui.panel.config.zone.home_zone_core_config"),
          confirmText: this.hass.localize("ui.common.yes"),
          dismissText: this.hass.localize("ui.common.no")
        }))) {
          return;
        }

        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_8__["navigate"])(this, "/config/core");
      }
    }, {
      kind: "method",
      key: "_createEntry",
      value: async function _createEntry(values) {
        var _this$_map2;

        const created = await Object(_data_zone__WEBPACK_IMPORTED_MODULE_15__["createZone"])(this.hass, values);
        this._storageItems = this._storageItems.concat(created).sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_9__["compare"])(ent1.name, ent2.name));

        if (this.narrow) {
          return;
        }

        await this.updateComplete;
        this._activeEntry = created.id;
        (_this$_map2 = this._map) === null || _this$_map2 === void 0 ? void 0 : _this$_map2.fitMarker(created.id);
      }
    }, {
      kind: "method",
      key: "_updateEntry",
      value: async function _updateEntry(entry, values, fitMap = false) {
        var _this$_map3;

        const updated = await Object(_data_zone__WEBPACK_IMPORTED_MODULE_15__["updateZone"])(this.hass, entry.id, values);
        this._storageItems = this._storageItems.map(ent => ent === entry ? updated : ent);

        if (this.narrow || !fitMap) {
          return;
        }

        await this.updateComplete;
        this._activeEntry = entry.id;
        (_this$_map3 = this._map) === null || _this$_map3 === void 0 ? void 0 : _this$_map3.fitMarker(entry.id);
      }
    }, {
      kind: "method",
      key: "_removeEntry",
      value: async function _removeEntry(entry) {
        if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_16__["showConfirmationDialog"])(this, {
          title: this.hass.localize("ui.panel.config.zone.confirm_delete"),
          text: this.hass.localize("ui.panel.config.zone.confirm_delete2"),
          dismissText: this.hass.localize("ui.common.no"),
          confirmText: this.hass.localize("ui.common.yes")
        }))) {
          return false;
        }

        try {
          await Object(_data_zone__WEBPACK_IMPORTED_MODULE_15__["deleteZone"])(this.hass, entry.id);
          this._storageItems = this._storageItems.filter(ent => ent !== entry);

          if (!this.narrow) {
            var _this$_map4;

            (_this$_map4 = this._map) === null || _this$_map4 === void 0 ? void 0 : _this$_map4.fitMap();
          }

          return true;
        } catch (err) {
          return false;
        }
      }
    }, {
      kind: "method",
      key: "_openDialog",
      value: async function _openDialog(entry) {
        Object(_show_dialog_zone_detail__WEBPACK_IMPORTED_MODULE_22__["showZoneDetailDialog"])(this, {
          entry,
          createEntry: values => this._createEntry(values),
          updateEntry: entry ? values => this._updateEntry(entry, values, true) : undefined,
          removeEntry: entry ? () => this._removeEntry(entry) : undefined
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
      hass-loading-screen {
        --app-header-background-color: var(--sidebar-background-color);
        --app-header-text-color: var(--sidebar-text-color);
      }
      a {
        color: var(--primary-color);
      }
      ha-card {
        max-width: 600px;
        margin: 16px auto;
        overflow: hidden;
      }
      ha-icon,
      paper-icon-button:not([disabled]) {
        color: var(--secondary-text-color);
      }
      .empty {
        text-align: center;
        padding: 8px;
      }
      .flex {
        display: flex;
        height: 100%;
      }
      .overflow {
        height: 100%;
        overflow: auto;
      }
      ha-locations-editor {
        flex-grow: 1;
        height: 100%;
      }
      .flex paper-listbox,
      .flex .empty {
        border-left: 1px solid var(--divider-color);
        width: 250px;
        min-height: 100%;
        box-sizing: border-box;
      }
      paper-icon-item {
        padding-top: 4px;
        padding-bottom: 4px;
      }
      .overflow paper-icon-item:last-child {
        margin-bottom: 80px;
      }
      paper-icon-item.iron-selected:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        background-color: var(--sidebar-selected-icon-color);
        opacity: 0.12;
        transition: opacity 15ms linear;
        will-change: opacity;
      }
      ha-card {
        margin-bottom: 100px;
      }
      ha-card paper-item {
        cursor: pointer;
      }
      ha-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
      }
      ha-fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }
      ha-fab[narrow] {
        bottom: 84px;
      }
    `;
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_19__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]));

/***/ }),

/***/ "./src/panels/config/zone/show-dialog-zone-detail.ts":
/*!***********************************************************!*\
  !*** ./src/panels/config/zone/show-dialog-zone-detail.ts ***!
  \***********************************************************/
/*! exports provided: loadZoneDetailDialog, showZoneDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadZoneDetailDialog", function() { return loadZoneDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showZoneDetailDialog", function() { return showZoneDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadZoneDetailDialog = () => Promise.all(/*! import() | zone-detail-dialog */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(13), __webpack_require__.e("vendors~add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zig~61d72af3"), __webpack_require__.e(14), __webpack_require__.e("add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zigbee-info~af4b98d6"), __webpack_require__.e("onboarding-core-config~panel-config-core~zone-detail-dialog"), __webpack_require__.e("zone-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-zone-detail */ "./src/panels/config/zone/dialog-zone-detail.ts"));
const showZoneDetailDialog = (element, systemLogDetailParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-zone-detail",
    dialogImport: loadZoneDetailDialog,
    dialogParams: systemLogDetailParams
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXpvbmUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zZXR1cC1sZWFmbGV0LW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdHJpbmcvY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvaGEtbG9jYXRpb25zLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jb3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2VudGl0eV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS96b25lLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3pvbmUvaGEtY29uZmlnLXpvbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvem9uZS9zaG93LWRpYWxvZy16b25lLWRldGFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXAgfSBmcm9tIFwibGVhZmxldFwiO1xuXG4vLyBTZXRzIHVwIGEgTGVhZmxldCBtYXAgb24gdGhlIHByb3ZpZGVkIERPTSBlbGVtZW50XG5leHBvcnQgdHlwZSBMZWFmbGV0TW9kdWxlVHlwZSA9IHR5cGVvZiBpbXBvcnQoXCJsZWFmbGV0XCIpO1xuZXhwb3J0IHR5cGUgTGVhZmxldERyYXdNb2R1bGVUeXBlID0gdHlwZW9mIGltcG9ydChcImxlYWZsZXQtZHJhd1wiKTtcblxuZXhwb3J0IGNvbnN0IHNldHVwTGVhZmxldE1hcCA9IGFzeW5jIChcbiAgbWFwRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRhcmtNb2RlID0gZmFsc2UsXG4gIGRyYXcgPSBmYWxzZVxuKTogUHJvbWlzZTxbTWFwLCBMZWFmbGV0TW9kdWxlVHlwZV0+ID0+IHtcbiAgaWYgKCFtYXBFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0dXAgTGVhZmxldCBtYXAgb24gZGlzY29ubmVjdGVkIGVsZW1lbnRcIik7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IExlYWZsZXQgPSAoYXdhaXQgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGVhZmxldFwiICovIFwibGVhZmxldFwiXG4gICkpIGFzIExlYWZsZXRNb2R1bGVUeXBlO1xuICBMZWFmbGV0Lkljb24uRGVmYXVsdC5pbWFnZVBhdGggPSBcIi9zdGF0aWMvaW1hZ2VzL2xlYWZsZXQvaW1hZ2VzL1wiO1xuXG4gIGlmIChkcmF3KSB7XG4gICAgYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGVhZmxldC1kcmF3XCIgKi8gXCJsZWFmbGV0LWRyYXdcIik7XG4gIH1cblxuICBjb25zdCBtYXAgPSBMZWFmbGV0Lm1hcChtYXBFbGVtZW50KTtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi9zdGF0aWMvaW1hZ2VzL2xlYWZsZXQvbGVhZmxldC5jc3NcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gIG1hcEVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIG1hcC5zZXRWaWV3KFs1Mi4zNzMxMzM5LCA0Ljg5MDMxNDddLCAxMyk7XG4gIGNyZWF0ZVRpbGVMYXllcihMZWFmbGV0LCBkYXJrTW9kZSkuYWRkVG8obWFwKTtcblxuICByZXR1cm4gW21hcCwgTGVhZmxldF07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGlsZUxheWVyID0gKFxuICBsZWFmbGV0OiBMZWFmbGV0TW9kdWxlVHlwZSxcbiAgZGFya01vZGU6IGJvb2xlYW5cbikgPT4ge1xuICByZXR1cm4gbGVhZmxldC50aWxlTGF5ZXIoXG4gICAgYGh0dHBzOi8ve3N9LmJhc2VtYXBzLmNhcnRvY2RuLmNvbS8ke1xuICAgICAgZGFya01vZGUgPyBcImRhcmtfYWxsXCIgOiBcImxpZ2h0X2FsbFwiXG4gICAgfS97en0ve3h9L3t5fSR7bGVhZmxldC5Ccm93c2VyLnJldGluYSA/IFwiQDJ4LnBuZ1wiIDogXCIucG5nXCJ9YCxcbiAgICB7XG4gICAgICBhdHRyaWJ1dGlvbjpcbiAgICAgICAgJyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4sICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly9jYXJ0by5jb20vYXR0cmlidXRpb25zXCI+Q0FSVE88L2E+JyxcbiAgICAgIHN1YmRvbWFpbnM6IFwiYWJjZFwiLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDIwLFxuICAgIH1cbiAgKTtcbn07XG4iLCIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgY29uc3QgY29tcHV0ZU9iamVjdElkID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlRG9tYWluID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCJpbXBvcnQge1xuICBDaXJjbGUsXG4gIERpdkljb24sXG4gIERyYWdFbmRFdmVudCxcbiAgTGF0TG5nLFxuICBNYXAsXG4gIE1hcmtlcixcbiAgTWFya2VyT3B0aW9ucyxcbn0gZnJvbSBcImxlYWZsZXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIExlYWZsZXRNb2R1bGVUeXBlLFxuICBzZXR1cExlYWZsZXRNYXAsXG59IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwXCI7XG5pbXBvcnQgeyBkZWZhdWx0UmFkaXVzQ29sb3IgfSBmcm9tIFwiLi4vLi4vZGF0YS96b25lXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwibG9jYXRpb24tdXBkYXRlZFwiOiB7IGlkOiBzdHJpbmc7IGxvY2F0aW9uOiBbbnVtYmVyLCBudW1iZXJdIH07XG4gICAgXCJyYWRpdXMtdXBkYXRlZFwiOiB7IGlkOiBzdHJpbmc7IHJhZGl1czogbnVtYmVyIH07XG4gICAgXCJtYXJrZXItY2xpY2tlZFwiOiB7IGlkOiBzdHJpbmcgfTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckxvY2F0aW9uIHtcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIHJhZGl1cz86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgcmFkaXVzX2NvbG9yPzogc3RyaW5nO1xuICBsb2NhdGlvbl9lZGl0YWJsZT86IGJvb2xlYW47XG4gIHJhZGl1c19lZGl0YWJsZT86IGJvb2xlYW47XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtbG9jYXRpb25zLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEhhTG9jYXRpb25zRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsb2NhdGlvbnM/OiBNYXJrZXJMb2NhdGlvbltdO1xuXG4gIHB1YmxpYyBmaXRab29tID0gMTY7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHByaXZhdGUgTGVhZmxldD86IExlYWZsZXRNb2R1bGVUeXBlO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBwcml2YXRlIF9sZWFmbGV0TWFwPzogTWFwO1xuXG4gIHByaXZhdGUgX2xvY2F0aW9uTWFya2Vycz86IHsgW2tleTogc3RyaW5nXTogTWFya2VyIHwgQ2lyY2xlIH07XG5cbiAgcHJpdmF0ZSBfY2lyY2xlczogeyBba2V5OiBzdHJpbmddOiBDaXJjbGUgfSA9IHt9O1xuXG4gIHB1YmxpYyBmaXRNYXAoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuX2xlYWZsZXRNYXAgfHxcbiAgICAgICF0aGlzLl9sb2NhdGlvbk1hcmtlcnMgfHxcbiAgICAgICFPYmplY3Qua2V5cyh0aGlzLl9sb2NhdGlvbk1hcmtlcnMpLmxlbmd0aFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLkxlYWZsZXQhLmxhdExuZ0JvdW5kcyhcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5fbG9jYXRpb25NYXJrZXJzKS5tYXAoKGl0ZW0pID0+IGl0ZW0uZ2V0TGF0TG5nKCkpXG4gICAgKTtcbiAgICB0aGlzLl9sZWFmbGV0TWFwLmZpdEJvdW5kcyhib3VuZHMucGFkKDAuNSkpO1xuICB9XG5cbiAgcHVibGljIGZpdE1hcmtlcihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9sZWFmbGV0TWFwIHx8ICF0aGlzLl9sb2NhdGlvbk1hcmtlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWFya2VyID0gdGhpcy5fbG9jYXRpb25NYXJrZXJzW2lkXTtcbiAgICBpZiAoIW1hcmtlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKG1hcmtlciBhcyBDaXJjbGUpLmdldEJvdW5kcykge1xuICAgICAgdGhpcy5fbGVhZmxldE1hcC5maXRCb3VuZHMoKG1hcmtlciBhcyBDaXJjbGUpLmdldEJvdW5kcygpKTtcbiAgICAgIChtYXJrZXIgYXMgQ2lyY2xlKS5icmluZ1RvRnJvbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2lyY2xlID0gdGhpcy5fY2lyY2xlc1tpZF07XG4gICAgICBpZiAoY2lyY2xlKSB7XG4gICAgICAgIHRoaXMuX2xlYWZsZXRNYXAuZml0Qm91bmRzKGNpcmNsZS5nZXRCb3VuZHMoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sZWFmbGV0TWFwLnNldFZpZXcobWFya2VyLmdldExhdExuZygpLCB0aGlzLmZpdFpvb20pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYCA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+IGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9pbml0TWFwKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gU3RpbGwgbG9hZGluZy5cbiAgICBpZiAoIXRoaXMuTGVhZmxldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwibG9jYXRpb25zXCIpKSB7XG4gICAgICB0aGlzLl91cGRhdGVNYXJrZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX21hcEVsKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2luaXRNYXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgW3RoaXMuX2xlYWZsZXRNYXAsIHRoaXMuTGVhZmxldF0gPSBhd2FpdCBzZXR1cExlYWZsZXRNYXAoXG4gICAgICB0aGlzLl9tYXBFbCxcbiAgICAgIGZhbHNlLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgdGhpcy5fdXBkYXRlTWFya2VycygpO1xuICAgIHRoaXMuZml0TWFwKCk7XG4gICAgdGhpcy5fbGVhZmxldE1hcC5pbnZhbGlkYXRlU2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTG9jYXRpb24oZXY6IERyYWdFbmRFdmVudCkge1xuICAgIGNvbnN0IG1hcmtlciA9IGV2LnRhcmdldDtcbiAgICBjb25zdCBsYXRsbmc6IExhdExuZyA9IG1hcmtlci5nZXRMYXRMbmcoKTtcbiAgICBsZXQgbG9uZ2l0dWRlOiBudW1iZXIgPSBsYXRsbmcubG5nO1xuICAgIGlmIChNYXRoLmFicyhsb25naXR1ZGUpID4gMTgwLjApIHtcbiAgICAgIC8vIE5vcm1hbGl6ZSBsb25naXR1ZGUgaWYgbWFwIHByb3ZpZGVzIHZhbHVlcyBiZXlvbmQgLTE4MCB0byArMTgwIGRlZ3JlZXMuXG4gICAgICBsb25naXR1ZGUgPSAoKChsb25naXR1ZGUgJSAzNjAuMCkgKyA1NDAuMCkgJSAzNjAuMCkgLSAxODAuMDtcbiAgICB9XG4gICAgY29uc3QgbG9jYXRpb246IFtudW1iZXIsIG51bWJlcl0gPSBbbGF0bG5nLmxhdCwgbG9uZ2l0dWRlXTtcbiAgICBmaXJlRXZlbnQoXG4gICAgICB0aGlzLFxuICAgICAgXCJsb2NhdGlvbi11cGRhdGVkXCIsXG4gICAgICB7IGlkOiBtYXJrZXIuaWQsIGxvY2F0aW9uIH0sXG4gICAgICB7IGJ1YmJsZXM6IGZhbHNlIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUmFkaXVzKGV2OiBEcmFnRW5kRXZlbnQpIHtcbiAgICBjb25zdCBtYXJrZXIgPSBldi50YXJnZXQ7XG4gICAgY29uc3QgY2lyY2xlID0gdGhpcy5fbG9jYXRpb25NYXJrZXJzIVttYXJrZXIuaWRdIGFzIENpcmNsZTtcbiAgICBmaXJlRXZlbnQoXG4gICAgICB0aGlzLFxuICAgICAgXCJyYWRpdXMtdXBkYXRlZFwiLFxuICAgICAgeyBpZDogbWFya2VyLmlkLCByYWRpdXM6IGNpcmNsZS5nZXRSYWRpdXMoKSB9LFxuICAgICAgeyBidWJibGVzOiBmYWxzZSB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtlckNsaWNrZWQoZXY6IERyYWdFbmRFdmVudCkge1xuICAgIGNvbnN0IG1hcmtlciA9IGV2LnRhcmdldDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJtYXJrZXItY2xpY2tlZFwiLCB7IGlkOiBtYXJrZXIuaWQgfSwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1hcmtlcnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2F0aW9uTWFya2Vycykge1xuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLl9sb2NhdGlvbk1hcmtlcnMpLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgICBtYXJrZXIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VycyA9IHVuZGVmaW5lZDtcblxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLl9jaXJjbGVzKS5mb3JFYWNoKChjaXJjbGUpID0+IGNpcmNsZS5yZW1vdmUoKSk7XG4gICAgICB0aGlzLl9jaXJjbGVzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxvY2F0aW9ucyB8fCAhdGhpcy5sb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbG9jYXRpb25NYXJrZXJzID0ge307XG5cbiAgICB0aGlzLmxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbjogTWFya2VyTG9jYXRpb24pID0+IHtcbiAgICAgIGxldCBpY29uOiBEaXZJY29uIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKGxvY2F0aW9uLmljb24pIHtcbiAgICAgICAgLy8gY3JlYXRlIGljb25cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSBcIm5hbWVkLWljb25cIjtcbiAgICAgICAgaWYgKGxvY2F0aW9uLm5hbWUpIHtcbiAgICAgICAgICBlbC5pbm5lclRleHQgPSBsb2NhdGlvbi5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoYS1pY29uXCIpO1xuICAgICAgICBpY29uRWwuc2V0QXR0cmlidXRlKFwiaWNvblwiLCBsb2NhdGlvbi5pY29uKTtcbiAgICAgICAgZWwucHJlcGVuZChpY29uRWwpO1xuXG4gICAgICAgIGljb24gPSB0aGlzLkxlYWZsZXQhLmRpdkljb24oe1xuICAgICAgICAgIGh0bWw6IGVsLm91dGVySFRNTCxcbiAgICAgICAgICBpY29uU2l6ZTogWzI0LCAyNF0sXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImxpZ2h0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGxvY2F0aW9uLnJhZGl1cykge1xuICAgICAgICBjb25zdCBjaXJjbGUgPSB0aGlzLkxlYWZsZXQhLmNpcmNsZShcbiAgICAgICAgICBbbG9jYXRpb24ubGF0aXR1ZGUsIGxvY2F0aW9uLmxvbmdpdHVkZV0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6IGxvY2F0aW9uLnJhZGl1c19jb2xvciB8fCBkZWZhdWx0UmFkaXVzQ29sb3IsXG4gICAgICAgICAgICByYWRpdXM6IGxvY2F0aW9uLnJhZGl1cyxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGNpcmNsZS5hZGRUbyh0aGlzLl9sZWFmbGV0TWFwISk7XG4gICAgICAgIGlmIChsb2NhdGlvbi5yYWRpdXNfZWRpdGFibGUgfHwgbG9jYXRpb24ubG9jYXRpb25fZWRpdGFibGUpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY2lyY2xlLmVkaXRpbmcuZW5hYmxlKCk7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNvbnN0IG1vdmVNYXJrZXIgPSBjaXJjbGUuZWRpdGluZy5fbW92ZU1hcmtlcjtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY29uc3QgcmVzaXplTWFya2VyID0gY2lyY2xlLmVkaXRpbmcuX3Jlc2l6ZU1hcmtlcnNbMF07XG4gICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgIG1vdmVNYXJrZXIuc2V0SWNvbihpY29uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzaXplTWFya2VyLmlkID0gbW92ZU1hcmtlci5pZCA9IGxvY2F0aW9uLmlkO1xuICAgICAgICAgIG1vdmVNYXJrZXJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBcImRyYWdlbmRcIixcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAoZXY6IERyYWdFbmRFdmVudCkgPT4gdGhpcy5fdXBkYXRlTG9jYXRpb24oZXYpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIChldjogTW91c2VFdmVudCkgPT4gdGhpcy5fbWFya2VyQ2xpY2tlZChldilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGxvY2F0aW9uLnJhZGl1c19lZGl0YWJsZSkge1xuICAgICAgICAgICAgcmVzaXplTWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIFwiZHJhZ2VuZFwiLFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIChldjogRHJhZ0VuZEV2ZW50KSA9PiB0aGlzLl91cGRhdGVSYWRpdXMoZXYpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNpemVNYXJrZXIucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VycyFbbG9jYXRpb24uaWRdID0gY2lyY2xlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2NpcmNsZXNbbG9jYXRpb24uaWRdID0gY2lyY2xlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFsb2NhdGlvbi5yYWRpdXMgfHxcbiAgICAgICAgKCFsb2NhdGlvbi5yYWRpdXNfZWRpdGFibGUgJiYgIWxvY2F0aW9uLmxvY2F0aW9uX2VkaXRhYmxlKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1hcmtlck9wdGlvbnMgPSB7XG4gICAgICAgICAgdGl0bGU6IGxvY2F0aW9uLm5hbWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICBvcHRpb25zLmljb24gPSBpY29uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5MZWFmbGV0IS5tYXJrZXIoXG4gICAgICAgICAgW2xvY2F0aW9uLmxhdGl0dWRlLCBsb2NhdGlvbi5sb25naXR1ZGVdLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJkcmFnZW5kXCIsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAoZXY6IERyYWdFbmRFdmVudCkgPT4gdGhpcy5fdXBkYXRlTG9jYXRpb24oZXYpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgKGV2OiBNb3VzZUV2ZW50KSA9PiB0aGlzLl9tYXJrZXJDbGlja2VkKGV2KVxuICAgICAgICAgIClcbiAgICAgICAgICAuYWRkVG8odGhpcy5fbGVhZmxldE1hcCk7XG4gICAgICAgIG1hcmtlci5pZCA9IGxvY2F0aW9uLmlkO1xuXG4gICAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VycyFbbG9jYXRpb24uaWRdID0gbWFya2VyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIH1cbiAgICAgICNtYXAge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAubGlnaHQge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cbiAgICAgIC5sZWFmbGV0LW1hcmtlci1kcmFnZ2FibGUge1xuICAgICAgICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5sZWFmbGV0LWVkaXQtcmVzaXplIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjdXJzb3I6IG5lc3ctcmVzaXplICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAubmFtZWQtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtbG9jYXRpb25zLWVkaXRvclwiOiBIYUxvY2F0aW9uc0VkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGFzc0NvbmZpZyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdVcGRhdGVWYWx1ZXMge1xuICBsb2NhdGlvbl9uYW1lOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICBlbGV2YXRpb246IG51bWJlcjtcbiAgdW5pdF9zeXN0ZW06IFwibWV0cmljXCIgfCBcImltcGVyaWFsXCI7XG4gIHRpbWVfem9uZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgc2F2ZUNvcmVDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogUGFydGlhbDxDb25maWdVcGRhdGVWYWx1ZXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPEhhc3NDb25maWc+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9jb3JlL3VwZGF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZXRlY3RDb3JlQ29uZmlnID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPFBhcnRpYWw8Q29uZmlnVXBkYXRlVmFsdWVzPj4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2NvcmUvZGV0ZWN0XCIsXG4gIH0pO1xuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiwgY3JlYXRlQ29sbGVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyeV9pZD86IHN0cmluZztcbiAgZGV2aWNlX2lkPzogc3RyaW5nO1xuICBkaXNhYmxlZF9ieTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRFbnRpdHlSZWdpc3RyeUVudHJ5IGV4dGVuZHMgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIHVuaXF1ZV9pZDogc3RyaW5nO1xuICBjYXBhYmlsaXRpZXM6IG9iamVjdDtcbiAgb3JpZ2luYWxfbmFtZT86IHN0cmluZztcbiAgb3JpZ2luYWxfaWNvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zIHtcbiAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gIGljb24/OiBzdHJpbmcgfCBudWxsO1xuICBkaXNhYmxlZF9ieT86IHN0cmluZyB8IG51bGw7XG4gIG5ld19lbnRpdHlfaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBmaW5kQmF0dGVyeUVudGl0eSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXVxuKTogRW50aXR5UmVnaXN0cnlFbnRyeSB8IHVuZGVmaW5lZCA9PlxuICBlbnRpdGllcy5maW5kKFxuICAgIChlbnRpdHkpID0+XG4gICAgICBoYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSAmJlxuICAgICAgaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF0uYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgPT09IFwiYmF0dGVyeVwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRyeTogRW50aXR5UmVnaXN0cnlFbnRyeVxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChlbnRyeS5uYW1lKSB7XG4gICAgcmV0dXJuIGVudHJ5Lm5hbWU7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RXh0ZW5kZWRFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPEV4dEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvZ2V0XCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXM+XG4pOiBQcm9taXNlPEV4dEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9yZW1vdmVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuY29uc3QgZmV0Y2hFbnRpdHlSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2xpc3RcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGVudGl0aWVzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGVudGl0aWVzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248RW50aXR5UmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9lbnRpdHlSZWdpc3RyeVwiLFxuICAgIGZldGNoRW50aXR5UmVnaXN0cnksXG4gICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJhZGl1c0NvbG9yID0gXCIjRkY5ODAwXCI7XG5leHBvcnQgY29uc3QgaG9tZVJhZGl1c0NvbG9yID0gXCIjMDNhOWY0XCI7XG5leHBvcnQgY29uc3QgcGFzc2l2ZVJhZGl1c0NvbG9yID0gXCIjOWI5YjliXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9uZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIHBhc3NpdmU/OiBib29sZWFuO1xuICByYWRpdXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9uZU11dGFibGVQYXJhbXMge1xuICBpY29uOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhc3NpdmU6IGJvb2xlYW47XG4gIHJhZGl1czogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hab25lcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxab25lW10+KHsgdHlwZTogXCJ6b25lL2xpc3RcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVpvbmUgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgdmFsdWVzOiBab25lTXV0YWJsZVBhcmFtcykgPT5cbiAgaGFzcy5jYWxsV1M8Wm9uZT4oe1xuICAgIHR5cGU6IFwiem9uZS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlWm9uZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgem9uZUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8Wm9uZU11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPFpvbmU+KHtcbiAgICB0eXBlOiBcInpvbmUvdXBkYXRlXCIsXG4gICAgem9uZV9pZDogem9uZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlWm9uZSA9IChoYXNzOiBIb21lQXNzaXN0YW50LCB6b25lSWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiem9uZS9kZWxldGVcIixcbiAgICB6b25lX2lkOiB6b25lSWQsXG4gIH0pO1xuXG5sZXQgaW5pdGl0aWFsWm9uZUVkaXRvckRhdGE6IFBhcnRpYWw8Wm9uZU11dGFibGVQYXJhbXM+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3Qgc2hvd1pvbmVFZGl0b3IgPSAoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgZGF0YT86IFBhcnRpYWw8Wm9uZU11dGFibGVQYXJhbXM+XG4pID0+IHtcbiAgaW5pdGl0aWFsWm9uZUVkaXRvckRhdGEgPSBkYXRhO1xuICBuYXZpZ2F0ZShlbCwgXCIvY29uZmlnL3pvbmUvbmV3XCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFpvbmVFZGl0b3JJbml0RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGluaXRpdGlhbFpvbmVFZGl0b3JEYXRhO1xuICBpbml0aXRpYWxab25lRWRpdG9yRGF0YSA9IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tIFwibGl0LWh0bWxcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW50ZXJmYWNlIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZyB8IFRlbXBsYXRlUmVzdWx0O1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgZGlzbWlzc1RleHQ/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xuICBjYW5jZWw/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBpbnB1dExhYmVsPzogc3RyaW5nO1xuICBpbnB1dFR5cGU/OiBzdHJpbmc7XG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUGFyYW1zXG4gIGV4dGVuZHMgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zLFxuICAgIFByb21wdERpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xuICBjb25maXJtYXRpb24/OiBib29sZWFuO1xuICBwcm9tcHQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZEdlbmVyaWNEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb25maXJtYXRpb25cIiAqLyBcIi4vZGlhbG9nLWJveFwiKTtcblxuY29uc3Qgc2hvd0RpYWxvZ0hlbHBlciA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogRGlhbG9nUGFyYW1zLFxuICBleHRyYT86IHtcbiAgICBjb25maXJtYXRpb24/OiBEaWFsb2dQYXJhbXNbXCJjb25maXJtYXRpb25cIl07XG4gICAgcHJvbXB0PzogRGlhbG9nUGFyYW1zW1wicHJvbXB0XCJdO1xuICB9XG4pID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3Qgb3JpZ0NhbmNlbCA9IGRpYWxvZ1BhcmFtcy5jYW5jZWw7XG4gICAgY29uc3Qgb3JpZ0NvbmZpcm0gPSBkaWFsb2dQYXJhbXMuY29uZmlybTtcblxuICAgIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctYm94XCIsXG4gICAgICBkaWFsb2dJbXBvcnQ6IGxvYWRHZW5lcmljRGlhbG9nLFxuICAgICAgZGlhbG9nUGFyYW1zOiB7XG4gICAgICAgIC4uLmRpYWxvZ1BhcmFtcyxcbiAgICAgICAgLi4uZXh0cmEsXG4gICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG51bGwgOiBmYWxzZSk7XG4gICAgICAgICAgaWYgKG9yaWdDYW5jZWwpIHtcbiAgICAgICAgICAgIG9yaWdDYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IChvdXQpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBvdXQgOiB0cnVlKTtcbiAgICAgICAgICBpZiAob3JpZ0NvbmZpcm0pIHtcbiAgICAgICAgICAgIG9yaWdDb25maXJtKG91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93QWxlcnREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEFsZXJ0RGlhbG9nUGFyYW1zXG4pID0+IHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zKTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maXJtYXRpb25EaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBjb25maXJtYXRpb246IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBib29sZWFuXG4gID47XG5cbmV4cG9ydCBjb25zdCBzaG93UHJvbXB0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBQcm9tcHREaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgcHJvbXB0OiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgbnVsbCB8IHN0cmluZ1xuICA+O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSwgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgcXVlcnksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGlmRGVmaW5lZCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2lmLWRlZmluZWRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbWFwL2hhLWxvY2F0aW9ucy1lZGl0b3JcIjtcbmltcG9ydCB0eXBlIHtcbiAgSGFMb2NhdGlvbnNFZGl0b3IsXG4gIE1hcmtlckxvY2F0aW9uLFxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9tYXAvaGEtbG9jYXRpb25zLWVkaXRvclwiO1xuaW1wb3J0IHsgc2F2ZUNvcmVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb3JlXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlWm9uZSxcbiAgZGVmYXVsdFJhZGl1c0NvbG9yLFxuICBkZWxldGVab25lLFxuICBmZXRjaFpvbmVzLFxuICBob21lUmFkaXVzQ29sb3IsXG4gIHBhc3NpdmVSYWRpdXNDb2xvcixcbiAgdXBkYXRlWm9uZSxcbiAgWm9uZSxcbiAgWm9uZU11dGFibGVQYXJhbXMsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3pvbmVcIjtcbmltcG9ydCB7IHNob3dDb25maXJtYXRpb25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvc3Vic2NyaWJlLW1peGluXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgY29uZmlnU2VjdGlvbnMgfSBmcm9tIFwiLi4vaGEtcGFuZWwtY29uZmlnXCI7XG5pbXBvcnQgeyBzaG93Wm9uZURldGFpbERpYWxvZyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLXpvbmUtZGV0YWlsXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29uZmlnLXpvbmVcIilcbmV4cG9ydCBjbGFzcyBIYUNvbmZpZ1pvbmUgZXh0ZW5kcyBTdWJzY3JpYmVNaXhpbihMaXRFbGVtZW50KSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93PzogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdG9yYWdlSXRlbXM/OiBab25lW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3RhdGVJdGVtcz86IEhhc3NFbnRpdHlbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hY3RpdmVFbnRyeSA9IFwiXCI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2FuRWRpdENvcmUgPSBmYWxzZTtcblxuICBAcXVlcnkoXCJoYS1sb2NhdGlvbnMtZWRpdG9yXCIpIHByaXZhdGUgX21hcD86IEhhTG9jYXRpb25zRWRpdG9yO1xuXG4gIHByaXZhdGUgX3JlZ0VudGl0aWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2dldFpvbmVzID0gbWVtb2l6ZU9uZShcbiAgICAoc3RvcmFnZUl0ZW1zOiBab25lW10sIHN0YXRlSXRlbXM6IEhhc3NFbnRpdHlbXSk6IE1hcmtlckxvY2F0aW9uW10gPT4ge1xuICAgICAgY29uc3Qgc3RhdGVMb2NhdGlvbnM6IE1hcmtlckxvY2F0aW9uW10gPSBzdGF0ZUl0ZW1zLm1hcCgoc3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogc3RhdGUuZW50aXR5X2lkLFxuICAgICAgICAgIGljb246IHN0YXRlLmF0dHJpYnV0ZXMuaWNvbixcbiAgICAgICAgICBuYW1lOiBzdGF0ZS5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgc3RhdGUuZW50aXR5X2lkLFxuICAgICAgICAgIGxhdGl0dWRlOiBzdGF0ZS5hdHRyaWJ1dGVzLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogc3RhdGUuYXR0cmlidXRlcy5sb25naXR1ZGUsXG4gICAgICAgICAgcmFkaXVzOiBzdGF0ZS5hdHRyaWJ1dGVzLnJhZGl1cyxcbiAgICAgICAgICByYWRpdXNfY29sb3I6XG4gICAgICAgICAgICBzdGF0ZS5lbnRpdHlfaWQgPT09IFwiem9uZS5ob21lXCJcbiAgICAgICAgICAgICAgPyBob21lUmFkaXVzQ29sb3JcbiAgICAgICAgICAgICAgOiBzdGF0ZS5hdHRyaWJ1dGVzLnBhc3NpdmVcbiAgICAgICAgICAgICAgPyBwYXNzaXZlUmFkaXVzQ29sb3JcbiAgICAgICAgICAgICAgOiBkZWZhdWx0UmFkaXVzQ29sb3IsXG4gICAgICAgICAgbG9jYXRpb25fZWRpdGFibGU6XG4gICAgICAgICAgICBzdGF0ZS5lbnRpdHlfaWQgPT09IFwiem9uZS5ob21lXCIgJiYgdGhpcy5fY2FuRWRpdENvcmUsXG4gICAgICAgICAgcmFkaXVzX2VkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc3RvcmFnZUxvY2F0aW9uczogTWFya2VyTG9jYXRpb25bXSA9IHN0b3JhZ2VJdGVtcy5tYXAoKHpvbmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi56b25lLFxuICAgICAgICAgIHJhZGl1c19jb2xvcjogem9uZS5wYXNzaXZlID8gcGFzc2l2ZVJhZGl1c0NvbG9yIDogZGVmYXVsdFJhZGl1c0NvbG9yLFxuICAgICAgICAgIGxvY2F0aW9uX2VkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIHJhZGl1c19lZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0b3JhZ2VMb2NhdGlvbnMuY29uY2F0KHN0YXRlTG9jYXRpb25zKTtcbiAgICB9XG4gICk7XG5cbiAgcHVibGljIGhhc3NTdWJzY3JpYmUoKTogVW5zdWJzY3JpYmVGdW5jW10ge1xuICAgIHJldHVybiBbXG4gICAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiEsIChlbnRpdGllcykgPT4ge1xuICAgICAgICB0aGlzLl9yZWdFbnRpdGllcyA9IGVudGl0aWVzLm1hcChcbiAgICAgICAgICAocmVnaXN0cnlFbnRyeSkgPT4gcmVnaXN0cnlFbnRyeS5lbnRpdHlfaWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZmlsdGVyU3RhdGVzKCk7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuaGFzcyB8fFxuICAgICAgdGhpcy5fc3RvcmFnZUl0ZW1zID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX3N0YXRlSXRlbXMgPT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgcmV0dXJuIGh0bWxgIDxoYXNzLWxvYWRpbmctc2NyZWVuPjwvaGFzcy1sb2FkaW5nLXNjcmVlbj4gYDtcbiAgICB9XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICBjb25zdCBsaXN0Qm94ID1cbiAgICAgIHRoaXMuX3N0b3JhZ2VJdGVtcy5sZW5ndGggPT09IDAgJiYgdGhpcy5fc3RhdGVJdGVtcy5sZW5ndGggPT09IDBcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCI+XG4gICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56b25lLm5vX3pvbmVzX2NyZWF0ZWRfeWV0XCIpfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fY3JlYXRlWm9uZX0+XG4gICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUuY3JlYXRlX3pvbmVcIil9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJkYXRhLWlkXCJcbiAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fYWN0aXZlRW50cnkgfHwgXCJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHt0aGlzLl9zdG9yYWdlSXRlbXMubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPSR7ZW50cnkuaWR9XG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2l0ZW1DbGlja2VkfVxuICAgICAgICAgICAgICAgICAgICAuZW50cnk9JHtlbnRyeX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb24gLmljb249JHtlbnRyeS5pY29ufSBzbG90PVwiaXRlbS1pY29uXCI+IDwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAke2VudHJ5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW50cnk9JHtlbnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuRWRpdEVudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgJHt0aGlzLl9zdGF0ZUl0ZW1zLm1hcCgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD0ke3N0YXRlLmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc3RhdGVJdGVtQ2xpY2tlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb24gLmljb249JHtzdGF0ZS5hdHRyaWJ1dGVzLmljb259IHNsb3Q9XCJpdGVtLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICR7c3RhdGUuYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IHN0YXRlLmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7c3RhdGUuZW50aXR5X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX29wZW5Db3JlQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9JHtpZkRlZmluZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmVudGl0eV9pZCA9PT0gXCJ6b25lLmhvbWVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFycm93ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuRWRpdENvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3RhdGUuZW50aXR5X2lkID09PSBcInpvbmUuaG9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy56b25lLiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImVkaXRfaG9tZV96b25lX25hcnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImVkaXRfaG9tZV96b25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpvbmUuY29uZmlndXJlZF9pbl95YW1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICBgO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy10YWJzLXN1YnBhZ2VcbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgLnJvdXRlPSR7dGhpcy5yb3V0ZX1cbiAgICAgICAgYmFjay1wYXRoPVwiL2NvbmZpZ1wiXG4gICAgICAgIC50YWJzPSR7Y29uZmlnU2VjdGlvbnMucGVyc29uc31cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLm5hcnJvd1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUuaW50cm9kdWN0aW9uXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aGEtY2FyZD4ke2xpc3RCb3h9PC9oYS1jYXJkPlxuICAgICAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHshdGhpcy5uYXJyb3dcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGhhLWxvY2F0aW9ucy1lZGl0b3JcbiAgICAgICAgICAgICAgICAgIC5sb2NhdGlvbnM9JHt0aGlzLl9nZXRab25lcyhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcmFnZUl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUl0ZW1zXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgQGxvY2F0aW9uLXVwZGF0ZWQ9JHt0aGlzLl9sb2NhdGlvblVwZGF0ZWR9XG4gICAgICAgICAgICAgICAgICBAcmFkaXVzLXVwZGF0ZWQ9JHt0aGlzLl9yYWRpdXNVcGRhdGVkfVxuICAgICAgICAgICAgICAgICAgQG1hcmtlci1jbGlja2VkPSR7dGhpcy5fbWFya2VyQ2xpY2tlZH1cbiAgICAgICAgICAgICAgICA+PC9oYS1sb2NhdGlvbnMtZWRpdG9yPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgJHtsaXN0Qm94fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhc3MtdGFicy1zdWJwYWdlPlxuXG4gICAgICA8aGEtZmFiXG4gICAgICAgID9pcy13aWRlPSR7dGhpcy5pc1dpZGV9XG4gICAgICAgID9uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgIHRpdGxlPVwiJHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUuYWRkX3pvbmVcIil9XCJcbiAgICAgICAgQGNsaWNrPSR7dGhpcy5fY3JlYXRlWm9uZX1cbiAgICAgID48L2hhLWZhYj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fY2FuRWRpdENvcmUgPVxuICAgICAgQm9vbGVhbih0aGlzLmhhc3MudXNlcj8uaXNfYWRtaW4pICYmXG4gICAgICBbXCJzdG9yYWdlXCIsIFwiZGVmYXVsdFwiXS5pbmNsdWRlcyh0aGlzLmhhc3MuY29uZmlnLmNvbmZpZ19zb3VyY2UpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICAgIGlmICh0aGlzLnJvdXRlLnBhdGggPT09IFwiL25ld1wiKSB7XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBcIi9jb25maWcvem9uZVwiLCB0cnVlKTtcbiAgICAgIHRoaXMuX2NyZWF0ZVpvbmUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkO1xuICAgIGlmIChvbGRIYXNzICYmIHRoaXMuX3N0YXRlSXRlbXMpIHtcbiAgICAgIHRoaXMuX2dldFN0YXRlcyhvbGRIYXNzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgdGhpcy5fc3RvcmFnZUl0ZW1zID0gKGF3YWl0IGZldGNoWm9uZXModGhpcy5oYXNzISkpLnNvcnQoKGVudDEsIGVudDIpID0+XG4gICAgICBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKVxuICAgICk7XG4gICAgdGhpcy5fZ2V0U3RhdGVzKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTdGF0ZXMob2xkSGFzcz86IEhvbWVBc3Npc3RhbnQpIHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHRlbXBTdGF0ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMuaGFzcyEuc3RhdGVzKS5maWx0ZXIoKGVudGl0eSkgPT4ge1xuICAgICAgaWYgKGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpICE9PSBcInpvbmVcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAob2xkSGFzcz8uc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdICE9PSBlbnRpdHkpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcmVnRW50aXRpZXMuaW5jbHVkZXMoZW50aXR5LmVudGl0eV9pZCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy5fc3RhdGVJdGVtcyA9IHRlbXBTdGF0ZXM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyU3RhdGVzKCkge1xuICAgIGlmICghdGhpcy5fc3RhdGVJdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wU3RhdGVzID0gdGhpcy5fc3RhdGVJdGVtcy5maWx0ZXIoXG4gICAgICAoZW50aXR5KSA9PiAhdGhpcy5fcmVnRW50aXRpZXMuaW5jbHVkZXMoZW50aXR5LmVudGl0eV9pZClcbiAgICApO1xuICAgIGlmICh0ZW1wU3RhdGVzLmxlbmd0aCAhPT0gdGhpcy5fc3RhdGVJdGVtcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N0YXRlSXRlbXMgPSB0ZW1wU3RhdGVzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvY2F0aW9uVXBkYXRlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICB0aGlzLl9hY3RpdmVFbnRyeSA9IGV2LmRldGFpbC5pZDtcbiAgICBpZiAoZXYuZGV0YWlsLmlkID09PSBcInpvbmUuaG9tZVwiICYmIHRoaXMuX2NhbkVkaXRDb3JlKSB7XG4gICAgICBhd2FpdCBzYXZlQ29yZUNvbmZpZyh0aGlzLmhhc3MsIHtcbiAgICAgICAgbGF0aXR1ZGU6IGV2LmRldGFpbC5sb2NhdGlvblswXSxcbiAgICAgICAgbG9uZ2l0dWRlOiBldi5kZXRhaWwubG9jYXRpb25bMV0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9zdG9yYWdlSXRlbXMhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGV2LmRldGFpbC5pZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVFbnRyeShlbnRyeSwge1xuICAgICAgbGF0aXR1ZGU6IGV2LmRldGFpbC5sb2NhdGlvblswXSxcbiAgICAgIGxvbmdpdHVkZTogZXYuZGV0YWlsLmxvY2F0aW9uWzFdLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmFkaXVzVXBkYXRlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICB0aGlzLl9hY3RpdmVFbnRyeSA9IGV2LmRldGFpbC5pZDtcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuX3N0b3JhZ2VJdGVtcyEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZXYuZGV0YWlsLmlkKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZUVudHJ5KGVudHJ5LCB7XG4gICAgICByYWRpdXM6IGV2LmRldGFpbC5yYWRpdXMsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrZXJDbGlja2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIHRoaXMuX2FjdGl2ZUVudHJ5ID0gZXYuZGV0YWlsLmlkO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlWm9uZSgpIHtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9pdGVtQ2xpY2tlZChldjogRXZlbnQpIHtcbiAgICBpZiAodGhpcy5uYXJyb3cpIHtcbiAgICAgIHRoaXMuX29wZW5FZGl0RW50cnkoZXYpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbnRyeTogWm9uZSA9IChldi5jdXJyZW50VGFyZ2V0ISBhcyBhbnkpLmVudHJ5O1xuICAgIHRoaXMuX3pvb21ab25lKGVudHJ5LmlkKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlSXRlbUNsaWNrZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuY3VycmVudFRhcmdldCEgYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcbiAgICAgIFwiZGF0YS1pZFwiXG4gICAgKSE7XG4gICAgdGhpcy5fem9vbVpvbmUoZW50aXR5SWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfem9vbVpvbmUoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21hcD8uZml0TWFya2VyKGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5FZGl0RW50cnkoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50cnk6IFpvbmUgPSAoZXYuY3VycmVudFRhcmdldCEgYXMgYW55KS5lbnRyeTtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKGVudHJ5KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX29wZW5Db3JlQ29uZmlnKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkOiBzdHJpbmcgPSAoZXYuY3VycmVudFRhcmdldCEgYXMgYW55KS5lbnRpdHlJZDtcbiAgICBpZiAoZW50aXR5SWQgIT09IFwiem9uZS5ob21lXCIgfHwgIXRoaXMubmFycm93IHx8ICF0aGlzLl9jYW5FZGl0Q29yZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhKGF3YWl0IHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUuZ29fdG9fY29yZV9jb25maWdcIiksXG4gICAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56b25lLmhvbWVfem9uZV9jb3JlX2NvbmZpZ1wiKSxcbiAgICAgICAgY29uZmlybVRleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgICBkaXNtaXNzVGV4dDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5ub1wiKSxcbiAgICAgIH0pKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuYXZpZ2F0ZSh0aGlzLCBcIi9jb25maWcvY29yZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2NyZWF0ZUVudHJ5KHZhbHVlczogWm9uZU11dGFibGVQYXJhbXMpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgY3JlYXRlWm9uZSh0aGlzLmhhc3MhLCB2YWx1ZXMpO1xuICAgIHRoaXMuX3N0b3JhZ2VJdGVtcyA9IHRoaXMuX3N0b3JhZ2VJdGVtcyEuY29uY2F0KFxuICAgICAgY3JlYXRlZFxuICAgICkuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpO1xuICAgIGlmICh0aGlzLm5hcnJvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIHRoaXMuX2FjdGl2ZUVudHJ5ID0gY3JlYXRlZC5pZDtcbiAgICB0aGlzLl9tYXA/LmZpdE1hcmtlcihjcmVhdGVkLmlkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUVudHJ5KFxuICAgIGVudHJ5OiBab25lLFxuICAgIHZhbHVlczogUGFydGlhbDxab25lTXV0YWJsZVBhcmFtcz4sXG4gICAgZml0TWFwID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHVwZGF0ZVpvbmUodGhpcy5oYXNzISwgZW50cnkhLmlkLCB2YWx1ZXMpO1xuICAgIHRoaXMuX3N0b3JhZ2VJdGVtcyA9IHRoaXMuX3N0b3JhZ2VJdGVtcyEubWFwKChlbnQpID0+XG4gICAgICBlbnQgPT09IGVudHJ5ID8gdXBkYXRlZCA6IGVudFxuICAgICk7XG4gICAgaWYgKHRoaXMubmFycm93IHx8ICFmaXRNYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB0aGlzLl9hY3RpdmVFbnRyeSA9IGVudHJ5LmlkO1xuICAgIHRoaXMuX21hcD8uZml0TWFya2VyKGVudHJ5LmlkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlbW92ZUVudHJ5KGVudHJ5OiBab25lKSB7XG4gICAgaWYgKFxuICAgICAgIShhd2FpdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGl0bGU6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuem9uZS5jb25maXJtX2RlbGV0ZVwiKSxcbiAgICAgICAgdGV4dDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56b25lLmNvbmZpcm1fZGVsZXRlMlwiKSxcbiAgICAgICAgZGlzbWlzc1RleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24ubm9cIiksXG4gICAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnllc1wiKSxcbiAgICAgIH0pKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkZWxldGVab25lKHRoaXMuaGFzcyEsIGVudHJ5IS5pZCk7XG4gICAgICB0aGlzLl9zdG9yYWdlSXRlbXMgPSB0aGlzLl9zdG9yYWdlSXRlbXMhLmZpbHRlcigoZW50KSA9PiBlbnQgIT09IGVudHJ5KTtcbiAgICAgIGlmICghdGhpcy5uYXJyb3cpIHtcbiAgICAgICAgdGhpcy5fbWFwPy5maXRNYXAoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX29wZW5EaWFsb2coZW50cnk/OiBab25lKSB7XG4gICAgc2hvd1pvbmVEZXRhaWxEaWFsb2codGhpcywge1xuICAgICAgZW50cnksXG4gICAgICBjcmVhdGVFbnRyeTogKHZhbHVlcykgPT4gdGhpcy5fY3JlYXRlRW50cnkodmFsdWVzKSxcbiAgICAgIHVwZGF0ZUVudHJ5OiBlbnRyeVxuICAgICAgICA/ICh2YWx1ZXMpID0+IHRoaXMuX3VwZGF0ZUVudHJ5KGVudHJ5LCB2YWx1ZXMsIHRydWUpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcmVtb3ZlRW50cnk6IGVudHJ5ID8gKCkgPT4gdGhpcy5fcmVtb3ZlRW50cnkoZW50cnkpIDogdW5kZWZpbmVkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGFzcy1sb2FkaW5nLXNjcmVlbiB7XG4gICAgICAgIC0tYXBwLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAtLWFwcC1oZWFkZXItdGV4dC1jb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICBoYS1pY29uLFxuICAgICAgcGFwZXItaWNvbi1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5lbXB0eSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuICAgICAgLmZsZXgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAub3ZlcmZsb3cge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuICAgICAgaGEtbG9jYXRpb25zLWVkaXRvciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLmZsZXggcGFwZXItbGlzdGJveCxcbiAgICAgIC5mbGV4IC5lbXB0eSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgICAub3ZlcmZsb3cgcGFwZXItaWNvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItaWNvbi1pdGVtLmlyb24tc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkLWljb24tY29sb3IpO1xuICAgICAgICBvcGFjaXR5OiAwLjEyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1bXMgbGluZWFyO1xuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIGhhLWZhYiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgIGhhLWZhYltpcy13aWRlXSB7XG4gICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBoYS1mYWJbbmFycm93XSB7XG4gICAgICAgIGJvdHRvbTogODRweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBab25lLCBab25lTXV0YWJsZVBhcmFtcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3pvbmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBab25lRGV0YWlsRGlhbG9nUGFyYW1zIHtcbiAgZW50cnk/OiBab25lO1xuICBjcmVhdGVFbnRyeTogKHZhbHVlczogWm9uZU11dGFibGVQYXJhbXMpID0+IFByb21pc2U8dW5rbm93bj47XG4gIHVwZGF0ZUVudHJ5PzogKHVwZGF0ZXM6IFBhcnRpYWw8Wm9uZU11dGFibGVQYXJhbXM+KSA9PiBQcm9taXNlPHVua25vd24+O1xuICByZW1vdmVFbnRyeT86ICgpID0+IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkWm9uZURldGFpbERpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInpvbmUtZGV0YWlsLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctem9uZS1kZXRhaWxcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93Wm9uZURldGFpbERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN5c3RlbUxvZ0RldGFpbFBhcmFtczogWm9uZURldGFpbERpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLXpvbmUtZGV0YWlsXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkWm9uZURldGFpbERpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXM6IHN5c3RlbUxvZ0RldGFpbFBhcmFtcyxcbiAgfSk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxpTUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLHdNQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBVUE7QUFDQTtBQUlBO0FBd0JBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUEzQkE7QUFBQTtBQUFBO0FBQUE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBQUE7QUFBQTtBQUFBO0FBbURBO0FBQ0E7QUFwREE7QUFBQTtBQUFBO0FBQUE7QUF1REE7QUFDQTtBQUFBO0FBQ0E7QUF6REE7QUFBQTtBQUFBO0FBQUE7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRFQTtBQUFBO0FBQUE7QUFBQTtBQXlFQTtBQUNBO0FBMUVBO0FBQUE7QUFBQTtBQUFBO0FBNkVBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFyRkE7QUFBQTtBQUFBO0FBQUE7QUF3RkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQXRHQTtBQUFBO0FBQUE7QUFBQTtBQXlHQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFqSEE7QUFBQTtBQUFBO0FBQUE7QUFvSEE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF0SEE7QUFBQTtBQUFBO0FBQUE7QUF5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBS0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBek9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0T0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBCQTtBQXRRQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBREE7QUFLQTtBQUVBO0FBREE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTJCQTtBQVVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBcUJBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBLDZnQkFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFIQTtBQW9CQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBQUE7QUFJQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBbkRBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXVEQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUEvREE7QUFBQTtBQUFBO0FBQUE7QUFrRUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUlBOztBQUVBO0FBQ0E7OztBQU5BOzs7QUFhQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBSUE7QUFDQTs7QUFMQTs7QUFWQTtBQXFCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7Ozs7QUFJQTs7QUFFQTtBQUNBOzs7QUFTQTs7OztBQXhCQTtBQXVDQTs7QUEvRUE7QUFtRkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBRUE7O0FBRUE7O0FBRUE7O0FBTkE7QUFVQTs7O0FBSUE7QUFJQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFiQTs7OztBQXFCQTtBQUNBOztBQUVBO0FBQ0E7O0FBM0NBO0FBOENBO0FBM01BO0FBQUE7QUFBQTtBQUFBO0FBNk1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF2TkE7QUFBQTtBQUFBO0FBQUE7QUEwTkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQS9OQTtBQUFBO0FBQUE7QUFBQTtBQWtPQTtBQUNBO0FBRUE7QUFDQTtBQXRPQTtBQUFBO0FBQUE7QUFBQTtBQXlPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExUEE7QUFBQTtBQUFBO0FBQUE7QUE2UEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF0UUE7QUFBQTtBQUFBO0FBQUE7QUF5UUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBelJBO0FBQUE7QUFBQTtBQUFBO0FBNFJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQXBTQTtBQUFBO0FBQUE7QUFBQTtBQXVTQTtBQUNBO0FBeFNBO0FBQUE7QUFBQTtBQUFBO0FBMlNBO0FBQ0E7QUE1U0E7QUFBQTtBQUFBO0FBQUE7QUErU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFyVEE7QUFBQTtBQUFBO0FBQUE7QUF3VEE7QUFDQTtBQUVBO0FBQ0E7QUE1VEE7QUFBQTtBQUFBO0FBQUE7QUE4VEE7QUFDQTtBQUFBO0FBQ0E7QUFoVUE7QUFBQTtBQUFBO0FBQUE7QUFtVUE7QUFDQTtBQUFBO0FBQ0E7QUFyVUE7QUFBQTtBQUFBO0FBQUE7QUF3VUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZWQTtBQUFBO0FBQUE7QUFBQTtBQXlWQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXBXQTtBQUFBO0FBQUE7QUFBQTtBQTBXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXJYQTtBQUFBO0FBQUE7QUFBQTtBQXdYQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3WUE7QUFBQTtBQUFBO0FBQUE7QUFnWkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBUUE7QUF4WkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0ZBO0FBM2VBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQSxvc0JBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
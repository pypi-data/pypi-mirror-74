(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[22],{

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

/***/ "./src/panels/lovelace/components/hui-image.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/components/hui-image.ts ***!
  \*****************************************************/
/*! exports provided: HuiImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiImage", function() { return HuiImage; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/util/parse-aspect-ratio */ "./src/common/util/parse-aspect-ratio.ts");
/* harmony import */ var _components_ha_camera_stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-camera-stream */ "./src/components/ha-camera-stream.ts");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/camera */ "./src/data/camera.ts");
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








const UPDATE_INTERVAL = 10000;
const DEFAULT_FILTER = "grayscale(100%)";
let HuiImage = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-image")], function (_initialize, _LitElement) {
  class HuiImage extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiImage,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "entity",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "image",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "stateImage",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "cameraImage",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "cameraView",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "aspectRatio",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "filter",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "stateFilter",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_loadError",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cameraImageSrc",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("img")],
      key: "_image",
      value: void 0
    }, {
      kind: "field",
      key: "_lastImageHeight",
      value: void 0
    }, {
      kind: "field",
      key: "_cameraUpdater",
      value: void 0
    }, {
      kind: "field",
      key: "_attached",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiImage.prototype), "connectedCallback", this).call(this);

        this._attached = true;

        if (this.cameraImage && this.cameraView !== "live") {
          this._startUpdateCameraInterval();
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HuiImage.prototype), "disconnectedCallback", this).call(this);

        this._attached = false;

        this._stopUpdateCameraInterval();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const ratio = this.aspectRatio ? Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_4__["default"])(this.aspectRatio) : null;
        const stateObj = this.entity ? this.hass.states[this.entity] : undefined;
        const state = stateObj ? stateObj.state : "unavailable"; // Figure out image source to use

        let imageSrc;
        let cameraObj; // Track if we are we using a fallback image, used for filter.

        let imageFallback = !this.stateImage;

        if (this.cameraImage) {
          if (this.cameraView === "live") {
            cameraObj = this.hass.states[this.cameraImage];
          } else {
            imageSrc = this._cameraImageSrc;
          }
        } else if (this.stateImage) {
          const stateImage = this.stateImage[state];

          if (stateImage) {
            imageSrc = stateImage;
          } else {
            imageSrc = this.image;
            imageFallback = true;
          }
        } else {
          imageSrc = this.image;
        }

        if (imageSrc) {
          imageSrc = this.hass.hassUrl(imageSrc);
        } // Figure out filter to use


        let filter = this.filter || "";

        if (this.stateFilter && this.stateFilter[state]) {
          filter = this.stateFilter[state];
        }

        if (!filter && this.entity) {
          const isOff = !stateObj || _common_const__WEBPACK_IMPORTED_MODULE_3__["STATES_OFF"].includes(state);
          filter = isOff && imageFallback ? DEFAULT_FILTER : "";
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div
        style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])({
          paddingBottom: ratio && ratio.w > 0 && ratio.h > 0 ? `${(100 * ratio.h / ratio.w).toFixed(2)}%` : ""
        })}
        class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          ratio: Boolean(ratio && ratio.w > 0 && ratio.h > 0)
        })}
      >
        ${this.cameraImage && this.cameraView === "live" ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-camera-stream
                .hass=${this.hass}
                .stateObj="${cameraObj}"
              ></ha-camera-stream>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <img
                id="image"
                src=${imageSrc}
                @error=${this._onImageError}
                @load=${this._onImageLoad}
                style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])({
          filter,
          display: this._loadError ? "none" : "block"
        })}
              />
            `}
        <div
          id="brokenImage"
          style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])({
          height: `${this._lastImageHeight || "100"}px`,
          display: this._loadError ? "block" : "none"
        })}
        ></div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("cameraImage") && this.cameraView !== "live") {
          this._updateCameraImageSrc();

          this._startUpdateCameraInterval();
        }
      }
    }, {
      kind: "method",
      key: "_startUpdateCameraInterval",
      value: function _startUpdateCameraInterval() {
        this._stopUpdateCameraInterval();

        if (this.cameraImage && this._attached) {
          this._cameraUpdater = window.setInterval(() => this._updateCameraImageSrc(), UPDATE_INTERVAL);
        }
      }
    }, {
      kind: "method",
      key: "_stopUpdateCameraInterval",
      value: function _stopUpdateCameraInterval() {
        if (this._cameraUpdater) {
          clearInterval(this._cameraUpdater);
        }
      }
    }, {
      kind: "method",
      key: "_onImageError",
      value: function _onImageError() {
        this._loadError = true;
      }
    }, {
      kind: "method",
      key: "_onImageLoad",
      value: async function _onImageLoad() {
        this._loadError = false;
        await this.updateComplete;
        this._lastImageHeight = this._image.offsetHeight;
      }
    }, {
      kind: "method",
      key: "_updateCameraImageSrc",
      value: async function _updateCameraImageSrc() {
        if (!this.hass || !this.cameraImage) {
          return;
        }

        const cameraState = this.hass.states[this.cameraImage];

        if (!cameraState) {
          this._onImageError();

          return;
        }

        this._cameraImageSrc = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_6__["fetchThumbnailUrlWithCache"])(this.hass, this.cameraImage);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      img {
        display: block;
        height: auto;
        transition: filter 0.2s linear;
        width: 100%;
      }

      .ratio {
        position: relative;
        width: 100%;
        height: 0;
      }

      .ratio img,
      .ratio div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #brokenImage {
        background: grey url("/static/images/image-broken.svg") center/36px
          no-repeat;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvcGFyc2UtYXNwZWN0LXJhdGlvLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tcG9uZW50cy9odWktaW1hZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGFuZGxlIDE2eDksIDE2OjksIDEuNzh4MSwgMS43ODoxLCAxLjc4XG4vLyBJZ25vcmUgZXZlcnl0aGluZyBlbHNlXG5jb25zdCBwYXJzZU9yVGhyb3cgPSAobnVtKSA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlRmxvYXQobnVtKTtcbiAgaWYgKGlzTmFOKHBhcnNlZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bnVtfSBpcyBub3QgYSBudW1iZXJgKTtcbiAgfVxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VBc3BlY3RSYXRpbyhpbnB1dDogc3RyaW5nKSB7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB0cnkge1xuICAgIGlmIChpbnB1dC5lbmRzV2l0aChcIiVcIikpIHtcbiAgICAgIHJldHVybiB7IHc6IDEwMCwgaDogcGFyc2VPclRocm93KGlucHV0LnN1YnN0cigwLCBpbnB1dC5sZW5ndGggLSAxKSkgfTtcbiAgICB9XG5cbiAgICBjb25zdCBhcnIgPSBpbnB1dC5yZXBsYWNlKFwiOlwiLCBcInhcIikuc3BsaXQoXCJ4XCIpO1xuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyLmxlbmd0aCA9PT0gMVxuICAgICAgPyB7IHc6IHBhcnNlT3JUaHJvdyhhcnJbMF0pLCBoOiAxIH1cbiAgICAgIDogeyB3OiBwYXJzZU9yVGhyb3coYXJyWzBdKSwgaDogcGFyc2VPclRocm93KGFyclsxXSkgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSWdub3JlIHRoZSBlcnJvclxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgcXVlcnksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcFwiO1xuaW1wb3J0IHsgU1RBVEVTX09GRiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RcIjtcbmltcG9ydCBwYXJzZUFzcGVjdFJhdGlvIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9wYXJzZS1hc3BlY3QtcmF0aW9cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FtZXJhLXN0cmVhbVwiO1xuaW1wb3J0IHsgZmV0Y2hUaHVtYm5haWxVcmxXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jYW1lcmFcIjtcbmltcG9ydCB7IENhbWVyYUVudGl0eSwgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCBVUERBVEVfSU5URVJWQUwgPSAxMDAwMDtcbmNvbnN0IERFRkFVTFRfRklMVEVSID0gXCJncmF5c2NhbGUoMTAwJSlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVNwZWNpZmljQ29uZmlnIHtcbiAgW3N0YXRlOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWltYWdlXCIpXG5leHBvcnQgY2xhc3MgSHVpSW1hZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlbnRpdHk/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGltYWdlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZUltYWdlPzogU3RhdGVTcGVjaWZpY0NvbmZpZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgY2FtZXJhSW1hZ2U/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGNhbWVyYVZpZXc/OiBcImxpdmVcIiB8IFwiYXV0b1wiO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhc3BlY3RSYXRpbz86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZmlsdGVyPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZUZpbHRlcj86IFN0YXRlU3BlY2lmaWNDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbG9hZEVycm9yPzogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jYW1lcmFJbWFnZVNyYz86IHN0cmluZztcblxuICBAcXVlcnkoXCJpbWdcIikgcHJpdmF0ZSBfaW1hZ2UhOiBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gIHByaXZhdGUgX2xhc3RJbWFnZUhlaWdodD86IG51bWJlcjtcblxuICBwcml2YXRlIF9jYW1lcmFVcGRhdGVyPzogbnVtYmVyO1xuXG4gIHByaXZhdGUgX2F0dGFjaGVkPzogYm9vbGVhbjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuY2FtZXJhSW1hZ2UgJiYgdGhpcy5jYW1lcmFWaWV3ICE9PSBcImxpdmVcIikge1xuICAgICAgdGhpcy5fc3RhcnRVcGRhdGVDYW1lcmFJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2F0dGFjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RvcFVwZGF0ZUNhbWVyYUludGVydmFsKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLmFzcGVjdFJhdGlvID8gcGFyc2VBc3BlY3RSYXRpbyh0aGlzLmFzcGVjdFJhdGlvKSA6IG51bGw7XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmVudGl0eSA/IHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5lbnRpdHldIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHN0YXRlID0gc3RhdGVPYmogPyBzdGF0ZU9iai5zdGF0ZSA6IFwidW5hdmFpbGFibGVcIjtcblxuICAgIC8vIEZpZ3VyZSBvdXQgaW1hZ2Ugc291cmNlIHRvIHVzZVxuICAgIGxldCBpbWFnZVNyYzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGxldCBjYW1lcmFPYmo6IENhbWVyYUVudGl0eSB8IHVuZGVmaW5lZDtcbiAgICAvLyBUcmFjayBpZiB3ZSBhcmUgd2UgdXNpbmcgYSBmYWxsYmFjayBpbWFnZSwgdXNlZCBmb3IgZmlsdGVyLlxuICAgIGxldCBpbWFnZUZhbGxiYWNrID0gIXRoaXMuc3RhdGVJbWFnZTtcblxuICAgIGlmICh0aGlzLmNhbWVyYUltYWdlKSB7XG4gICAgICBpZiAodGhpcy5jYW1lcmFWaWV3ID09PSBcImxpdmVcIikge1xuICAgICAgICBjYW1lcmFPYmogPSB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuY2FtZXJhSW1hZ2VdIGFzIENhbWVyYUVudGl0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlU3JjID0gdGhpcy5fY2FtZXJhSW1hZ2VTcmM7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlSW1hZ2UpIHtcbiAgICAgIGNvbnN0IHN0YXRlSW1hZ2UgPSB0aGlzLnN0YXRlSW1hZ2Vbc3RhdGVdO1xuXG4gICAgICBpZiAoc3RhdGVJbWFnZSkge1xuICAgICAgICBpbWFnZVNyYyA9IHN0YXRlSW1hZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZVNyYyA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIGltYWdlRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZVNyYyA9IHRoaXMuaW1hZ2U7XG4gICAgfVxuXG4gICAgaWYgKGltYWdlU3JjKSB7XG4gICAgICBpbWFnZVNyYyA9IHRoaXMuaGFzcy5oYXNzVXJsKGltYWdlU3JjKTtcbiAgICB9XG5cbiAgICAvLyBGaWd1cmUgb3V0IGZpbHRlciB0byB1c2VcbiAgICBsZXQgZmlsdGVyID0gdGhpcy5maWx0ZXIgfHwgXCJcIjtcblxuICAgIGlmICh0aGlzLnN0YXRlRmlsdGVyICYmIHRoaXMuc3RhdGVGaWx0ZXJbc3RhdGVdKSB7XG4gICAgICBmaWx0ZXIgPSB0aGlzLnN0YXRlRmlsdGVyW3N0YXRlXTtcbiAgICB9XG5cbiAgICBpZiAoIWZpbHRlciAmJiB0aGlzLmVudGl0eSkge1xuICAgICAgY29uc3QgaXNPZmYgPSAhc3RhdGVPYmogfHwgU1RBVEVTX09GRi5pbmNsdWRlcyhzdGF0ZSk7XG4gICAgICBmaWx0ZXIgPSBpc09mZiAmJiBpbWFnZUZhbGxiYWNrID8gREVGQVVMVF9GSUxURVIgOiBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT0ke3N0eWxlTWFwKHtcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOlxuICAgICAgICAgICAgcmF0aW8gJiYgcmF0aW8udyA+IDAgJiYgcmF0aW8uaCA+IDBcbiAgICAgICAgICAgICAgPyBgJHsoKDEwMCAqIHJhdGlvLmgpIC8gcmF0aW8udykudG9GaXhlZCgyKX0lYFxuICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICByYXRpbzogQm9vbGVhbihyYXRpbyAmJiByYXRpby53ID4gMCAmJiByYXRpby5oID4gMCksXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICAke3RoaXMuY2FtZXJhSW1hZ2UgJiYgdGhpcy5jYW1lcmFWaWV3ID09PSBcImxpdmVcIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWNhbWVyYS1zdHJlYW1cbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAuc3RhdGVPYmo9XCIke2NhbWVyYU9ian1cIlxuICAgICAgICAgICAgICA+PC9oYS1jYW1lcmEtc3RyZWFtPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHNyYz0ke2ltYWdlU3JjfVxuICAgICAgICAgICAgICAgIEBlcnJvcj0ke3RoaXMuX29uSW1hZ2VFcnJvcn1cbiAgICAgICAgICAgICAgICBAbG9hZD0ke3RoaXMuX29uSW1hZ2VMb2FkfVxuICAgICAgICAgICAgICAgIHN0eWxlPSR7c3R5bGVNYXAoe1xuICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5fbG9hZEVycm9yID8gXCJub25lXCIgOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJicm9rZW5JbWFnZVwiXG4gICAgICAgICAgc3R5bGU9JHtzdHlsZU1hcCh7XG4gICAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMuX2xhc3RJbWFnZUhlaWdodCB8fCBcIjEwMFwifXB4YCxcbiAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuX2xvYWRFcnJvciA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2FtZXJhSW1hZ2VcIikgJiYgdGhpcy5jYW1lcmFWaWV3ICE9PSBcImxpdmVcIikge1xuICAgICAgdGhpcy5fdXBkYXRlQ2FtZXJhSW1hZ2VTcmMoKTtcbiAgICAgIHRoaXMuX3N0YXJ0VXBkYXRlQ2FtZXJhSW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdGFydFVwZGF0ZUNhbWVyYUludGVydmFsKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0b3BVcGRhdGVDYW1lcmFJbnRlcnZhbCgpO1xuICAgIGlmICh0aGlzLmNhbWVyYUltYWdlICYmIHRoaXMuX2F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9jYW1lcmFVcGRhdGVyID0gd2luZG93LnNldEludGVydmFsKFxuICAgICAgICAoKSA9PiB0aGlzLl91cGRhdGVDYW1lcmFJbWFnZVNyYygpLFxuICAgICAgICBVUERBVEVfSU5URVJWQUxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RvcFVwZGF0ZUNhbWVyYUludGVydmFsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jYW1lcmFVcGRhdGVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2NhbWVyYVVwZGF0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uSW1hZ2VFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2FkRXJyb3IgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25JbWFnZUxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fbG9hZEVycm9yID0gZmFsc2U7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB0aGlzLl9sYXN0SW1hZ2VIZWlnaHQgPSB0aGlzLl9pbWFnZS5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDYW1lcmFJbWFnZVNyYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5jYW1lcmFJbWFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYVN0YXRlID0gdGhpcy5oYXNzLnN0YXRlc1t0aGlzLmNhbWVyYUltYWdlXSBhc1xuICAgICAgfCBDYW1lcmFFbnRpdHlcbiAgICAgIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFjYW1lcmFTdGF0ZSkge1xuICAgICAgdGhpcy5fb25JbWFnZUVycm9yKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2FtZXJhSW1hZ2VTcmMgPSBhd2FpdCBmZXRjaFRodW1ibmFpbFVybFdpdGhDYWNoZShcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIHRoaXMuY2FtZXJhSW1hZ2VcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnMgbGluZWFyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnJhdGlvIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAucmF0aW8gaW1nLFxuICAgICAgLnJhdGlvIGRpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAjYnJva2VuSW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmV5IHVybChcIi9zdGF0aWMvaW1hZ2VzL2ltYWdlLWJyb2tlbi5zdmdcIikgY2VudGVyLzM2cHhcbiAgICAgICAgICBuby1yZXBlYXQ7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWltYWdlXCI6IEh1aUltYWdlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQU9BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUFBQTtBQUFBO0FBQUE7QUF3Q0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBM0NBO0FBQUE7QUFBQTtBQUFBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFEQTs7QUFJQTs7QUFHQTtBQUNBOztBQUpBOzs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7OztBQWpDQTtBQXdDQTtBQXRJQTtBQUFBO0FBQUE7QUFBQTtBQXlJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUE3SUE7QUFBQTtBQUFBO0FBQUE7QUFnSkE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBdkpBO0FBQUE7QUFBQTtBQUFBO0FBMEpBO0FBQ0E7QUFDQTtBQUNBO0FBN0pBO0FBQUE7QUFBQTtBQUFBO0FBZ0tBO0FBQ0E7QUFqS0E7QUFBQTtBQUFBO0FBQUE7QUFvS0E7QUFDQTtBQUNBO0FBQ0E7QUF2S0E7QUFBQTtBQUFBO0FBQUE7QUEwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQTNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOExBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCQTtBQTFOQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
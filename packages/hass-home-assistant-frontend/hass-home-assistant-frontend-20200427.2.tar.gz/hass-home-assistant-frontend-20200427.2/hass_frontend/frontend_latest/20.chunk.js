(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[20],{

/***/ "./src/common/util/time-cache-function-promise.ts":
/*!********************************************************!*\
  !*** ./src/common/util/time-cache-function-promise.ts ***!
  \********************************************************/
/*! exports provided: timeCachePromiseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCachePromiseFunc", function() { return timeCachePromiseFunc; });
const timeCachePromiseFunc = async (cacheKey, cacheTime, func, hass, entityId, ...args) => {
  let cache = hass[cacheKey];

  if (!cache) {
    cache = hass[cacheKey] = {};
  }

  const lastResult = cache[entityId];

  if (lastResult) {
    return lastResult;
  }

  const result = func(hass, entityId, ...args);
  cache[entityId] = result;
  result.then( // When successful, set timer to clear cache
  () => setTimeout(() => {
    cache[entityId] = undefined;
  }, cacheTime), // On failure, clear cache right away
  () => {
    cache[entityId] = undefined;
  });
  return result;
};

/***/ }),

/***/ "./src/components/ha-camera-stream.ts":
/*!********************************************!*\
  !*** ./src/components/ha-camera-stream.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/camera */ "./src/data/camera.ts");
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







let HaCameraStream = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-camera-stream")], function (_initialize, _LitElement) {
  class HaCameraStream extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaCameraStream,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "showControls",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_attached",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_forceMJPEG",

      value() {
        return undefined;
      }

    }, {
      kind: "field",
      key: "_hlsPolyfillInstance",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: // We keep track if we should force MJPEG with a string
      // that way it automatically resets if we change entity.
      function connectedCallback() {
        _get(_getPrototypeOf(HaCameraStream.prototype), "connectedCallback", this).call(this);

        this._attached = true;
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaCameraStream.prototype), "disconnectedCallback", this).call(this);

        this._attached = false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.stateObj || !this._attached) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${ false || this._shouldRenderMJPEG ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <img
              @load=${this._elementResized}
              .src=${ false ? undefined : Object(_data_camera__WEBPACK_IMPORTED_MODULE_4__["computeMJPEGStreamUrl"])(this.stateObj)}
              .alt=${`Preview of the ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(this.stateObj)} camera.`}
            />
          ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <video
              autoplay
              muted
              playsinline
              ?controls=${this.showControls}
              @loadeddata=${this._elementResized}
            ></video>
          `}
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaCameraStream.prototype), "updated", this).call(this, changedProps);

        const stateObjChanged = changedProps.has("stateObj");
        const attachedChanged = changedProps.has("_attached");
        const oldState = changedProps.get("stateObj");
        const oldEntityId = oldState ? oldState.entity_id : undefined;
        const curEntityId = this.stateObj ? this.stateObj.entity_id : undefined;

        if (!stateObjChanged && !attachedChanged || stateObjChanged && oldEntityId === curEntityId) {
          return;
        } // If we are no longer attached, destroy polyfill.


        if (attachedChanged && !this._attached) {
          this._destroyPolyfill();

          return;
        } // Nothing to do if we are render MJPEG.


        if (this._shouldRenderMJPEG) {
          return;
        } // Tear down existing polyfill, if available


        this._destroyPolyfill();

        if (curEntityId) {
          this._startHls();
        }
      }
    }, {
      kind: "get",
      key: "_shouldRenderMJPEG",
      value: function _shouldRenderMJPEG() {
        return this._forceMJPEG === this.stateObj.entity_id || !this.hass.config.components.includes("stream") || !Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_3__["supportsFeature"])(this.stateObj, _data_camera__WEBPACK_IMPORTED_MODULE_4__["CAMERA_SUPPORT_STREAM"]);
      }
    }, {
      kind: "get",
      key: "_videoEl",
      value: function _videoEl() {
        return this.shadowRoot.querySelector("video");
      }
    }, {
      kind: "method",
      key: "_startHls",
      value: async function _startHls() {
        // eslint-disable-next-line
        const Hls = (await __webpack_require__.e(/*! import() | hls.js */ "vendors~hls.js").then(__webpack_require__.t.bind(null, /*! hls.js */ "./node_modules/hls.js/dist/hls.js", 7))).default;
        let hlsSupported = Hls.isSupported();
        const videoEl = this._videoEl;

        if (!hlsSupported) {
          hlsSupported = videoEl.canPlayType("application/vnd.apple.mpegurl") !== "";
        }

        if (!hlsSupported) {
          this._forceMJPEG = this.stateObj.entity_id;
          return;
        }

        try {
          const {
            url
          } = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_4__["fetchStreamUrl"])(this.hass, this.stateObj.entity_id);

          if (Hls.isSupported()) {
            this._renderHLSPolyfill(videoEl, Hls, url);
          } else {
            this._renderHLSNative(videoEl, url);
          }

          return;
        } catch (err) {
          // Fails if we were unable to get a stream
          // eslint-disable-next-line
          console.error(err);
          this._forceMJPEG = this.stateObj.entity_id;
        }
      }
    }, {
      kind: "method",
      key: "_renderHLSNative",
      value: async function _renderHLSNative(videoEl, url) {
        videoEl.src = url;
        await new Promise(resolve => videoEl.addEventListener("loadedmetadata", resolve));
        videoEl.play();
      }
    }, {
      kind: "method",
      key: "_renderHLSPolyfill",
      value: async function _renderHLSPolyfill(videoEl, // eslint-disable-next-line
      Hls, url) {
        const hls = new Hls();
        this._hlsPolyfillInstance = hls;
        hls.attachMedia(videoEl);
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          hls.loadSource(url);
        });
      }
    }, {
      kind: "method",
      key: "_elementResized",
      value: function _elementResized() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_destroyPolyfill",
      value: function _destroyPolyfill() {
        if (this._hlsPolyfillInstance) {
          this._hlsPolyfillInstance.destroy();

          this._hlsPolyfillInstance = undefined;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host,
      img,
      video {
        display: block;
      }

      img,
      video {
        width: 100%;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/data/auth.ts":
/*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
/*! exports provided: hassUrl, getSignedPath, fetchAuthProviders, createAuthForUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hassUrl", function() { return hassUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedPath", function() { return getSignedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthProviders", function() { return fetchAuthProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthForUser", function() { return createAuthForUser; });
const hassUrl = `${location.protocol}//${location.host}`;
const getSignedPath = (hass, path) => hass.callWS({
  type: "auth/sign_path",
  path
});
const fetchAuthProviders = () => fetch("/auth/providers", {
  credentials: "same-origin"
});
const createAuthForUser = async (hass, userId, username, password) => hass.callWS({
  type: "config/auth_provider/homeassistant/create",
  user_id: userId,
  username,
  password
});

/***/ }),

/***/ "./src/data/camera.ts":
/*!****************************!*\
  !*** ./src/data/camera.ts ***!
  \****************************/
/*! exports provided: CAMERA_SUPPORT_ON_OFF, CAMERA_SUPPORT_STREAM, computeMJPEGStreamUrl, fetchThumbnailUrlWithCache, fetchThumbnailUrl, fetchStreamUrl, fetchCameraPrefs, updateCameraPrefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_ON_OFF", function() { return CAMERA_SUPPORT_ON_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_STREAM", function() { return CAMERA_SUPPORT_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMJPEGStreamUrl", function() { return computeMJPEGStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrlWithCache", function() { return fetchThumbnailUrlWithCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrl", function() { return fetchThumbnailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStreamUrl", function() { return fetchStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCameraPrefs", function() { return fetchCameraPrefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCameraPrefs", function() { return updateCameraPrefs; });
/* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/data/auth.ts");


const CAMERA_SUPPORT_ON_OFF = 1;
const CAMERA_SUPPORT_STREAM = 2;
const computeMJPEGStreamUrl = entity => `/api/camera_proxy_stream/${entity.entity_id}?token=${entity.attributes.access_token}`;
const fetchThumbnailUrlWithCache = (hass, entityId) => Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
const fetchThumbnailUrl = async (hass, entityId) => {
  const path = await Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(hass, `/api/camera_proxy/${entityId}`);
  return hass.hassUrl(path.path);
};
const fetchStreamUrl = async (hass, entityId, format) => {
  const data = {
    type: "camera/stream",
    entity_id: entityId
  };

  if (format) {
    // @ts-ignore
    data.format = format;
  }

  const stream = await hass.callWS(data);
  stream.url = hass.hassUrl(stream.url);
  return stream;
};
const fetchCameraPrefs = (hass, entityId) => hass.callWS({
  type: "camera/get_prefs",
  entity_id: entityId
});
const updateCameraPrefs = (hass, entityId, prefs) => hass.callWS(Object.assign({
  type: "camera/update_prefs",
  entity_id: entityId
}, prefs));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvdGltZS1jYWNoZS1mdW5jdGlvbi1wcm9taXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhbWVyYS1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jYW1lcmEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUmVzdWx0Q2FjaGU8VD4ge1xuICBbZW50aXR5SWQ6IHN0cmluZ106IFByb21pc2U8VD4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCB0aW1lQ2FjaGVQcm9taXNlRnVuYyA9IGFzeW5jIDxUPihcbiAgY2FjaGVLZXk6IHN0cmluZyxcbiAgY2FjaGVUaW1lOiBudW1iZXIsXG4gIGZ1bmM6IChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGVudGl0eUlkOiBzdHJpbmcsXG4gICAgLi4uYXJnczogdW5rbm93bltdXG4gICkgPT4gUHJvbWlzZTxUPixcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgLi4uYXJnczogdW5rbm93bltdXG4pOiBQcm9taXNlPFQ+ID0+IHtcbiAgbGV0IGNhY2hlOiBSZXN1bHRDYWNoZTxUPiB8IHVuZGVmaW5lZCA9IChoYXNzIGFzIGFueSlbY2FjaGVLZXldO1xuXG4gIGlmICghY2FjaGUpIHtcbiAgICBjYWNoZSA9IGhhc3NbY2FjaGVLZXldID0ge307XG4gIH1cblxuICBjb25zdCBsYXN0UmVzdWx0ID0gY2FjaGVbZW50aXR5SWRdO1xuXG4gIGlmIChsYXN0UmVzdWx0KSB7XG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBmdW5jKGhhc3MsIGVudGl0eUlkLCAuLi5hcmdzKTtcbiAgY2FjaGVbZW50aXR5SWRdID0gcmVzdWx0O1xuXG4gIHJlc3VsdC50aGVuKFxuICAgIC8vIFdoZW4gc3VjY2Vzc2Z1bCwgc2V0IHRpbWVyIHRvIGNsZWFyIGNhY2hlXG4gICAgKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWNoZSFbZW50aXR5SWRdID0gdW5kZWZpbmVkO1xuICAgICAgfSwgY2FjaGVUaW1lKSxcbiAgICAvLyBPbiBmYWlsdXJlLCBjbGVhciBjYWNoZSByaWdodCBhd2F5XG4gICAgKCkgPT4ge1xuICAgICAgY2FjaGUhW2VudGl0eUlkXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5pbXBvcnQge1xuICBDQU1FUkFfU1VQUE9SVF9TVFJFQU0sXG4gIGNvbXB1dGVNSlBFR1N0cmVhbVVybCxcbiAgZmV0Y2hTdHJlYW1VcmwsXG59IGZyb20gXCIuLi9kYXRhL2NhbWVyYVwiO1xuaW1wb3J0IHsgQ2FtZXJhRW50aXR5LCBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSExTTW9kdWxlID0gdHlwZW9mIGltcG9ydChcImhscy5qc1wiKTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jYW1lcmEtc3RyZWFtXCIpXG5jbGFzcyBIYUNhbWVyYVN0cmVhbSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqPzogQ2FtZXJhRW50aXR5O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIHNob3dDb250cm9scyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2F0dGFjaGVkID0gZmFsc2U7XG5cbiAgLy8gV2Uga2VlcCB0cmFjayBpZiB3ZSBzaG91bGQgZm9yY2UgTUpQRUcgd2l0aCBhIHN0cmluZ1xuICAvLyB0aGF0IHdheSBpdCBhdXRvbWF0aWNhbGx5IHJlc2V0cyBpZiB3ZSBjaGFuZ2UgZW50aXR5LlxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9mb3JjZU1KUEVHOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBfaGxzUG9seWZpbGxJbnN0YW5jZT86IEhscztcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLnN0YXRlT2JqIHx8ICF0aGlzLl9hdHRhY2hlZCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7X19ERU1PX18gfHwgdGhpcy5fc2hvdWxkUmVuZGVyTUpQRUdcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBAbG9hZD0ke3RoaXMuX2VsZW1lbnRSZXNpemVkfVxuICAgICAgICAgICAgICAuc3JjPSR7X19ERU1PX19cbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmVcbiAgICAgICAgICAgICAgICA6IGNvbXB1dGVNSlBFR1N0cmVhbVVybCh0aGlzLnN0YXRlT2JqKX1cbiAgICAgICAgICAgICAgLmFsdD0ke2BQcmV2aWV3IG9mIHRoZSAke2NvbXB1dGVTdGF0ZU5hbWUoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9ialxuICAgICAgICAgICAgICApfSBjYW1lcmEuYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgYXV0b3BsYXlcbiAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgcGxheXNpbmxpbmVcbiAgICAgICAgICAgICAgP2NvbnRyb2xzPSR7dGhpcy5zaG93Q29udHJvbHN9XG4gICAgICAgICAgICAgIEBsb2FkZWRkYXRhPSR7dGhpcy5fZWxlbWVudFJlc2l6ZWR9XG4gICAgICAgICAgICA+PC92aWRlbz5cbiAgICAgICAgICBgfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgY29uc3Qgc3RhdGVPYmpDaGFuZ2VkID0gY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpO1xuICAgIGNvbnN0IGF0dGFjaGVkQ2hhbmdlZCA9IGNoYW5nZWRQcm9wcy5oYXMoXCJfYXR0YWNoZWRcIik7XG5cbiAgICBjb25zdCBvbGRTdGF0ZSA9IGNoYW5nZWRQcm9wcy5nZXQoXCJzdGF0ZU9ialwiKSBhcyB0aGlzW1wic3RhdGVPYmpcIl07XG4gICAgY29uc3Qgb2xkRW50aXR5SWQgPSBvbGRTdGF0ZSA/IG9sZFN0YXRlLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjdXJFbnRpdHlJZCA9IHRoaXMuc3RhdGVPYmogPyB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChcbiAgICAgICghc3RhdGVPYmpDaGFuZ2VkICYmICFhdHRhY2hlZENoYW5nZWQpIHx8XG4gICAgICAoc3RhdGVPYmpDaGFuZ2VkICYmIG9sZEVudGl0eUlkID09PSBjdXJFbnRpdHlJZClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBhcmUgbm8gbG9uZ2VyIGF0dGFjaGVkLCBkZXN0cm95IHBvbHlmaWxsLlxuICAgIGlmIChhdHRhY2hlZENoYW5nZWQgJiYgIXRoaXMuX2F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9kZXN0cm95UG9seWZpbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIHRvIGRvIGlmIHdlIGFyZSByZW5kZXIgTUpQRUcuXG4gICAgaWYgKHRoaXMuX3Nob3VsZFJlbmRlck1KUEVHKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGVhciBkb3duIGV4aXN0aW5nIHBvbHlmaWxsLCBpZiBhdmFpbGFibGVcbiAgICB0aGlzLl9kZXN0cm95UG9seWZpbGwoKTtcblxuICAgIGlmIChjdXJFbnRpdHlJZCkge1xuICAgICAgdGhpcy5fc3RhcnRIbHMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBfc2hvdWxkUmVuZGVyTUpQRUcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2ZvcmNlTUpQRUcgPT09IHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZCB8fFxuICAgICAgIXRoaXMuaGFzcyEuY29uZmlnLmNvbXBvbmVudHMuaW5jbHVkZXMoXCJzdHJlYW1cIikgfHxcbiAgICAgICFzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiEsIENBTUVSQV9TVVBQT1JUX1NUUkVBTSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZpZGVvRWwoKTogSFRNTFZpZGVvRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3N0YXJ0SGxzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0IEhscyA9ICgoYXdhaXQgaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJobHMuanNcIiAqLyBcImhscy5qc1wiXG4gICAgKSkgYXMgYW55KS5kZWZhdWx0IGFzIEhMU01vZHVsZTtcbiAgICBsZXQgaGxzU3VwcG9ydGVkID0gSGxzLmlzU3VwcG9ydGVkKCk7XG4gICAgY29uc3QgdmlkZW9FbCA9IHRoaXMuX3ZpZGVvRWw7XG5cbiAgICBpZiAoIWhsc1N1cHBvcnRlZCkge1xuICAgICAgaGxzU3VwcG9ydGVkID1cbiAgICAgICAgdmlkZW9FbC5jYW5QbGF5VHlwZShcImFwcGxpY2F0aW9uL3ZuZC5hcHBsZS5tcGVndXJsXCIpICE9PSBcIlwiO1xuICAgIH1cblxuICAgIGlmICghaGxzU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLl9mb3JjZU1KUEVHID0gdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHVybCB9ID0gYXdhaXQgZmV0Y2hTdHJlYW1VcmwoXG4gICAgICAgIHRoaXMuaGFzcyEsXG4gICAgICAgIHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZFxuICAgICAgKTtcblxuICAgICAgaWYgKEhscy5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlckhMU1BvbHlmaWxsKHZpZGVvRWwsIEhscywgdXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlckhMU05hdGl2ZSh2aWRlb0VsLCB1cmwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gRmFpbHMgaWYgd2Ugd2VyZSB1bmFibGUgdG8gZ2V0IGEgc3RyZWFtXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHRoaXMuX2ZvcmNlTUpQRUcgPSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVuZGVySExTTmF0aXZlKHZpZGVvRWw6IEhUTUxWaWRlb0VsZW1lbnQsIHVybDogc3RyaW5nKSB7XG4gICAgdmlkZW9FbC5zcmMgPSB1cmw7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICB2aWRlb0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRtZXRhZGF0YVwiLCByZXNvbHZlKVxuICAgICk7XG4gICAgdmlkZW9FbC5wbGF5KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW5kZXJITFNQb2x5ZmlsbChcbiAgICB2aWRlb0VsOiBIVE1MVmlkZW9FbGVtZW50LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIEhsczogSExTTW9kdWxlLFxuICAgIHVybDogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IGhscyA9IG5ldyBIbHMoKTtcbiAgICB0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlID0gaGxzO1xuICAgIGhscy5hdHRhY2hNZWRpYSh2aWRlb0VsKTtcbiAgICBobHMub24oSGxzLkV2ZW50cy5NRURJQV9BVFRBQ0hFRCwgKCkgPT4ge1xuICAgICAgaGxzLmxvYWRTb3VyY2UodXJsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2VsZW1lbnRSZXNpemVkKCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveVBvbHlmaWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3QsXG4gICAgICBpbWcsXG4gICAgICB2aWRlbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBpbWcsXG4gICAgICB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNhbWVyYS1zdHJlYW1cIjogSGFDYW1lcmFTdHJlYW07XG4gIH1cbn1cbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUHJvdmlkZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVkZW50aWFsIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25lZFBhdGgge1xuICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNzVXJsID0gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9YDtcblxuZXhwb3J0IGNvbnN0IGdldFNpZ25lZFBhdGggPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTaWduZWRQYXRoPiA9PiBoYXNzLmNhbGxXUyh7IHR5cGU6IFwiYXV0aC9zaWduX3BhdGhcIiwgcGF0aCB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXV0aFByb3ZpZGVycyA9ICgpID0+XG4gIGZldGNoKFwiL2F1dGgvcHJvdmlkZXJzXCIsIHtcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUF1dGhGb3JVc2VyID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB1c2VySWQ6IHN0cmluZyxcbiAgdXNlcm5hbWU6IHN0cmluZyxcbiAgcGFzc3dvcmQ6IHN0cmluZ1xuKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aF9wcm92aWRlci9ob21lYXNzaXN0YW50L2NyZWF0ZVwiLFxuICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZCxcbiAgfSk7XG4iLCJpbXBvcnQgeyB0aW1lQ2FjaGVQcm9taXNlRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdXRpbC90aW1lLWNhY2hlLWZ1bmN0aW9uLXByb21pc2VcIjtcbmltcG9ydCB7IENhbWVyYUVudGl0eSwgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0U2lnbmVkUGF0aCB9IGZyb20gXCIuL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IENBTUVSQV9TVVBQT1JUX09OX09GRiA9IDE7XG5leHBvcnQgY29uc3QgQ0FNRVJBX1NVUFBPUlRfU1RSRUFNID0gMjtcblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQcmVmZXJlbmNlcyB7XG4gIHByZWxvYWRfc3RyZWFtOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVRodW1ibmFpbCB7XG4gIGNvbnRlbnRfdHlwZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWFtIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlTUpQRUdTdHJlYW1VcmwgPSAoZW50aXR5OiBDYW1lcmFFbnRpdHkpID0+XG4gIGAvYXBpL2NhbWVyYV9wcm94eV9zdHJlYW0vJHtlbnRpdHkuZW50aXR5X2lkfT90b2tlbj0ke2VudGl0eS5hdHRyaWJ1dGVzLmFjY2Vzc190b2tlbn1gO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHVtYm5haWxVcmxXaXRoQ2FjaGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbikgPT5cbiAgdGltZUNhY2hlUHJvbWlzZUZ1bmMoXG4gICAgXCJfY2FtZXJhVG1iVXJsXCIsXG4gICAgOTAwMCxcbiAgICBmZXRjaFRodW1ibmFpbFVybCxcbiAgICBoYXNzLFxuICAgIGVudGl0eUlkXG4gICk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbFVybCA9IGFzeW5jIChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IHBhdGggPSBhd2FpdCBnZXRTaWduZWRQYXRoKGhhc3MsIGAvYXBpL2NhbWVyYV9wcm94eS8ke2VudGl0eUlkfWApO1xuICByZXR1cm4gaGFzcy5oYXNzVXJsKHBhdGgucGF0aCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTdHJlYW1VcmwgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIGZvcm1hdD86IFwiaGxzXCJcbikgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIHR5cGU6IFwiY2FtZXJhL3N0cmVhbVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH07XG4gIGlmIChmb3JtYXQpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZGF0YS5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cbiAgY29uc3Qgc3RyZWFtID0gYXdhaXQgaGFzcy5jYWxsV1M8U3RyZWFtPihkYXRhKTtcbiAgc3RyZWFtLnVybCA9IGhhc3MuaGFzc1VybChzdHJlYW0udXJsKTtcbiAgcmV0dXJuIHN0cmVhbTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhbWVyYVByZWZzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGVudGl0eUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPENhbWVyYVByZWZlcmVuY2VzPih7XG4gICAgdHlwZTogXCJjYW1lcmEvZ2V0X3ByZWZzXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYW1lcmFQcmVmcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgcHJlZnM6IHtcbiAgICBwcmVsb2FkX3N0cmVhbT86IGJvb2xlYW47XG4gIH1cbikgPT5cbiAgaGFzcy5jYWxsV1M8Q2FtZXJhUHJlZmVyZW5jZXM+KHtcbiAgICB0eXBlOiBcImNhbWVyYS91cGRhdGVfcHJlZnNcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnByZWZzLFxuICB9KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7QUFBQTs7Ozs7QUFFQTs7OztBQUFBOzs7OztBQUlBOzs7O0FBQUE7Ozs7Ozs7Ozs7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBR0E7O0FBUEE7Ozs7O0FBaUJBO0FBQ0E7O0FBRUE7QUFyQkE7QUF1QkE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUtBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBLHdMQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFBQTtBQVlBOzs7QUEzTEE7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBSUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBZUE7QUFHQTtBQVlBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQVFBO0FBQ0E7QUFGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
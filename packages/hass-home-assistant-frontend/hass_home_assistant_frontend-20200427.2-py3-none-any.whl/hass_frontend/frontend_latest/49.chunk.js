(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[49],{

/***/ "./src/cast/const.ts":
/*!***************************!*\
  !*** ./src/cast/const.ts ***!
  \***************************/
/*! exports provided: CAST_DEV, CAST_APP_ID, CAST_NS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_DEV", function() { return CAST_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_APP_ID", function() { return CAST_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_NS", function() { return CAST_NS; });
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");
 // Guard dev mode with `__dev__` so it can only ever be enabled in dev mode.

const CAST_DEV =  true && true;
const CAST_APP_ID = CAST_DEV ? _dev_const__WEBPACK_IMPORTED_MODULE_0__["CAST_DEV_APP_ID"] : "B12CE3CA";
const CAST_NS = "urn:x-cast:com.nabucasa.hast";

/***/ }),

/***/ "./src/cast/dev_const.ts":
/*!*******************************!*\
  !*** ./src/cast/dev_const.ts ***!
  \*******************************/
/*! exports provided: CAST_DEV_APP_ID, CAST_DEV_HASS_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_DEV_APP_ID", function() { return CAST_DEV_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_DEV_HASS_URL", function() { return CAST_DEV_HASS_URL; });
// Replace this with your own unpublished cast app that points at your local dev
const CAST_DEV_APP_ID = "5FE44367"; // Chromecast SDK will only load on localhost and HTTPS
// So during local development we have to send our dev IP address,
// but then run the UI on localhost.

const CAST_DEV_HASS_URL = "http://192.168.1.234:8123";

/***/ }),

/***/ "./src/cast/receiver_messages.ts":
/*!***************************************!*\
  !*** ./src/cast/receiver_messages.ts ***!
  \***************************************/
/*! exports provided: castSendAuth, castSendShowLovelaceView, castSendShowDemo, ensureConnectedCastSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSendAuth", function() { return castSendAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSendShowLovelaceView", function() { return castSendShowLovelaceView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSendShowDemo", function() { return castSendShowDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureConnectedCastSession", function() { return ensureConnectedCastSession; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/cast/const.ts");
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");
// Nessages to be processed inside the Cast Receiver app


const castSendAuth = (cast, auth) => cast.sendMessage({
  type: "connect",
  refreshToken: auth.data.refresh_token,
  clientId: auth.data.clientId,
  hassUrl: _const__WEBPACK_IMPORTED_MODULE_0__["CAST_DEV"] ? _dev_const__WEBPACK_IMPORTED_MODULE_1__["CAST_DEV_HASS_URL"] : auth.data.hassUrl
});
const castSendShowLovelaceView = (cast, viewPath, urlPath) => cast.sendMessage({
  type: "show_lovelace_view",
  viewPath,
  urlPath: urlPath || null
});
const castSendShowDemo = cast => cast.sendMessage({
  type: "show_demo"
});
const ensureConnectedCastSession = (cast, auth) => {
  if (cast.castConnectedToOurHass) {
    return undefined;
  }

  return new Promise(resolve => {
    const unsub = cast.addEventListener("connection-changed", () => {
      if (cast.castConnectedToOurHass) {
        unsub();
        resolve();
      }
    });
    castSendAuth(cast, auth);
  });
};

/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-cast-row.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-cast-row.ts ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _cast_receiver_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../cast/receiver_messages */ "./src/cast/receiver_messages.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
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







let HuiCastRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-cast-row")], function (_initialize, _LitElement) {
  class HuiCastRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiCastRow,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_castManager",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_noHTTPS",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config || config.view === undefined || config.view === null) {
          throw new Error("Invalid Configuration: 'view' required");
        }

        this._config = Object.assign({
          icon: "hass:television",
          name: "Home Assistant Cast"
        }, config);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        const active = this._castManager && this._castManager.status && this._config.view === this._castManager.status.lovelacePath && this._config.dashboard === this._castManager.status.urlPath;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <ha-icon .icon="${this._config.icon}"></ha-icon>
      <div class="flex">
        <div class="name">${this._config.name}</div>
        ${this._noHTTPS ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` Cast requires HTTPS ` : this._castManager === undefined ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`` : this._castManager === null ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` Cast API unavailable ` : this._castManager.castState === "NO_DEVICES_AVAILABLE" ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` No devices found ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <div class="controls">
                <google-cast-launcher></google-cast-launcher>
                <mwc-button
                  @click=${this._sendLovelace}
                  class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
          inactive: !active
        })}
                  .unelevated=${active}
                  .disabled=${!this._castManager.status}
                >
                  SHOW
                </mwc-button>
              </div>
            `}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HuiCastRow.prototype), "firstUpdated", this).call(this, changedProps);

        if (location.protocol === "http:" && location.hostname !== "localhost") {
          this._noHTTPS = true;
        }

        __webpack_require__.e(/*! import() */ 56).then(__webpack_require__.bind(null, /*! ../../../cast/cast_manager */ "./src/cast/cast_manager.ts")).then(({
          getCastManager
        }) => getCastManager(this.hass.auth).then(mgr => {
          this._castManager = mgr;
          mgr.addEventListener("connection-changed", () => {
            this.requestUpdate();
          });
          mgr.addEventListener("state-changed", () => {
            this.requestUpdate();
          });
        }, () => {
          this._castManager = null;
        }));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiCastRow.prototype), "updated", this).call(this, changedProps);

        if (this._config && this._config.hide_if_unavailable) {
          this.style.display = !this._castManager || this._castManager.castState === "NO_DEVICES_AVAILABLE" ? "none" : "";
        }
      }
    }, {
      kind: "method",
      key: "_sendLovelace",
      value: async function _sendLovelace() {
        await Object(_cast_receiver_messages__WEBPACK_IMPORTED_MODULE_3__["ensureConnectedCastSession"])(this._castManager, this.hass.auth);
        Object(_cast_receiver_messages__WEBPACK_IMPORTED_MODULE_3__["castSendShowLovelaceView"])(this._castManager, this._config.view, this._config.dashboard);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      :host {
        display: flex;
        align-items: center;
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      .flex {
        flex: 1;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .controls {
        display: flex;
        align-items: center;
      }
      google-cast-launcher {
        margin-right: 0.57em;
        cursor: pointer;
        display: inline-block;
        height: 24px;
        width: 24px;
      }
      .inactive {
        padding: 0 4px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FzdC9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FzdC9kZXZfY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nhc3QvcmVjZWl2ZXJfbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9zcGVjaWFsLXJvd3MvaHVpLWNhc3Qtcm93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENBU1RfREVWX0FQUF9JRCB9IGZyb20gXCIuL2Rldl9jb25zdFwiO1xuXG4vLyBHdWFyZCBkZXYgbW9kZSB3aXRoIGBfX2Rldl9fYCBzbyBpdCBjYW4gb25seSBldmVyIGJlIGVuYWJsZWQgaW4gZGV2IG1vZGUuXG5leHBvcnQgY29uc3QgQ0FTVF9ERVYgPSBfX0RFVl9fICYmIHRydWU7XG5cbmV4cG9ydCBjb25zdCBDQVNUX0FQUF9JRCA9IENBU1RfREVWID8gQ0FTVF9ERVZfQVBQX0lEIDogXCJCMTJDRTNDQVwiO1xuZXhwb3J0IGNvbnN0IENBU1RfTlMgPSBcInVybjp4LWNhc3Q6Y29tLm5hYnVjYXNhLmhhc3RcIjtcbiIsIi8vIFJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgb3duIHVucHVibGlzaGVkIGNhc3QgYXBwIHRoYXQgcG9pbnRzIGF0IHlvdXIgbG9jYWwgZGV2XG5leHBvcnQgY29uc3QgQ0FTVF9ERVZfQVBQX0lEID0gXCI1RkU0NDM2N1wiO1xuXG4vLyBDaHJvbWVjYXN0IFNESyB3aWxsIG9ubHkgbG9hZCBvbiBsb2NhbGhvc3QgYW5kIEhUVFBTXG4vLyBTbyBkdXJpbmcgbG9jYWwgZGV2ZWxvcG1lbnQgd2UgaGF2ZSB0byBzZW5kIG91ciBkZXYgSVAgYWRkcmVzcyxcbi8vIGJ1dCB0aGVuIHJ1biB0aGUgVUkgb24gbG9jYWxob3N0LlxuZXhwb3J0IGNvbnN0IENBU1RfREVWX0hBU1NfVVJMID0gXCJodHRwOi8vMTkyLjE2OC4xLjIzNDo4MTIzXCI7XG4iLCIvLyBOZXNzYWdlcyB0byBiZSBwcm9jZXNzZWQgaW5zaWRlIHRoZSBDYXN0IFJlY2VpdmVyIGFwcFxuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgQ2FzdE1hbmFnZXIgfSBmcm9tIFwiLi9jYXN0X21hbmFnZXJcIjtcbmltcG9ydCB7IENBU1RfREVWIH0gZnJvbSBcIi4vY29uc3RcIjtcbmltcG9ydCB7IENBU1RfREVWX0hBU1NfVVJMIH0gZnJvbSBcIi4vZGV2X2NvbnN0XCI7XG5pbXBvcnQgeyBCYXNlQ2FzdE1lc3NhZ2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdldFN0YXR1c01lc3NhZ2UgZXh0ZW5kcyBCYXNlQ2FzdE1lc3NhZ2Uge1xuICB0eXBlOiBcImdldF9zdGF0dXNcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0TWVzc2FnZSBleHRlbmRzIEJhc2VDYXN0TWVzc2FnZSB7XG4gIHR5cGU6IFwiY29ubmVjdFwiO1xuICByZWZyZXNoVG9rZW46IHN0cmluZztcbiAgY2xpZW50SWQ6IHN0cmluZyB8IG51bGw7XG4gIGhhc3NVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaG93TG92ZWxhY2VWaWV3TWVzc2FnZSBleHRlbmRzIEJhc2VDYXN0TWVzc2FnZSB7XG4gIHR5cGU6IFwic2hvd19sb3ZlbGFjZV92aWV3XCI7XG4gIHZpZXdQYXRoOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICB1cmxQYXRoOiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dEZW1vTWVzc2FnZSBleHRlbmRzIEJhc2VDYXN0TWVzc2FnZSB7XG4gIHR5cGU6IFwic2hvd19kZW1vXCI7XG59XG5cbmV4cG9ydCB0eXBlIEhhc3NNZXNzYWdlID1cbiAgfCBTaG93RGVtb01lc3NhZ2VcbiAgfCBHZXRTdGF0dXNNZXNzYWdlXG4gIHwgQ29ubmVjdE1lc3NhZ2VcbiAgfCBTaG93TG92ZWxhY2VWaWV3TWVzc2FnZTtcblxuZXhwb3J0IGNvbnN0IGNhc3RTZW5kQXV0aCA9IChjYXN0OiBDYXN0TWFuYWdlciwgYXV0aDogQXV0aCkgPT5cbiAgY2FzdC5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogXCJjb25uZWN0XCIsXG4gICAgcmVmcmVzaFRva2VuOiBhdXRoLmRhdGEucmVmcmVzaF90b2tlbixcbiAgICBjbGllbnRJZDogYXV0aC5kYXRhLmNsaWVudElkLFxuICAgIGhhc3NVcmw6IENBU1RfREVWID8gQ0FTVF9ERVZfSEFTU19VUkwgOiBhdXRoLmRhdGEuaGFzc1VybCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjYXN0U2VuZFNob3dMb3ZlbGFjZVZpZXcgPSAoXG4gIGNhc3Q6IENhc3RNYW5hZ2VyLFxuICB2aWV3UGF0aDogU2hvd0xvdmVsYWNlVmlld01lc3NhZ2VbXCJ2aWV3UGF0aFwiXSxcbiAgdXJsUGF0aD86IHN0cmluZyB8IG51bGxcbikgPT5cbiAgY2FzdC5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogXCJzaG93X2xvdmVsYWNlX3ZpZXdcIixcbiAgICB2aWV3UGF0aCxcbiAgICB1cmxQYXRoOiB1cmxQYXRoIHx8IG51bGwsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY2FzdFNlbmRTaG93RGVtbyA9IChjYXN0OiBDYXN0TWFuYWdlcikgPT5cbiAgY2FzdC5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogXCJzaG93X2RlbW9cIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVDb25uZWN0ZWRDYXN0U2Vzc2lvbiA9IChjYXN0OiBDYXN0TWFuYWdlciwgYXV0aDogQXV0aCkgPT4ge1xuICBpZiAoY2FzdC5jYXN0Q29ubmVjdGVkVG9PdXJIYXNzKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHVuc3ViID0gY2FzdC5hZGRFdmVudExpc3RlbmVyKFwiY29ubmVjdGlvbi1jaGFuZ2VkXCIsICgpID0+IHtcbiAgICAgIGlmIChjYXN0LmNhc3RDb25uZWN0ZWRUb091ckhhc3MpIHtcbiAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FzdFNlbmRBdXRoKGNhc3QsIGF1dGgpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvbi9td2MtYnV0dG9uXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBDYXN0TWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi9jYXN0L2Nhc3RfbWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgY2FzdFNlbmRTaG93TG92ZWxhY2VWaWV3LFxuICBlbnN1cmVDb25uZWN0ZWRDYXN0U2Vzc2lvbixcbn0gZnJvbSBcIi4uLy4uLy4uL2Nhc3QvcmVjZWl2ZXJfbWVzc2FnZXNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ2FzdENvbmZpZywgTG92ZWxhY2VSb3cgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktY2FzdC1yb3dcIilcbmNsYXNzIEh1aUNhc3RSb3cgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VSb3cge1xuICBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogQ2FzdENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jYXN0TWFuYWdlcj86IENhc3RNYW5hZ2VyIHwgbnVsbDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9ub0hUVFBTID0gZmFsc2U7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IENhc3RDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZyB8fCBjb25maWcudmlldyA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy52aWV3ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246ICd2aWV3JyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBpY29uOiBcImhhc3M6dGVsZXZpc2lvblwiLFxuICAgICAgbmFtZTogXCJIb21lIEFzc2lzdGFudCBDYXN0XCIsXG4gICAgICAuLi5jb25maWcsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZSA9XG4gICAgICB0aGlzLl9jYXN0TWFuYWdlciAmJlxuICAgICAgdGhpcy5fY2FzdE1hbmFnZXIuc3RhdHVzICYmXG4gICAgICB0aGlzLl9jb25maWcudmlldyA9PT0gdGhpcy5fY2FzdE1hbmFnZXIuc3RhdHVzLmxvdmVsYWNlUGF0aCAmJlxuICAgICAgdGhpcy5fY29uZmlnLmRhc2hib2FyZCA9PT0gdGhpcy5fY2FzdE1hbmFnZXIuc3RhdHVzLnVybFBhdGg7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1pY29uIC5pY29uPVwiJHt0aGlzLl9jb25maWcuaWNvbn1cIj48L2hhLWljb24+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7dGhpcy5fY29uZmlnLm5hbWV9PC9kaXY+XG4gICAgICAgICR7dGhpcy5fbm9IVFRQU1xuICAgICAgICAgID8gaHRtbGAgQ2FzdCByZXF1aXJlcyBIVFRQUyBgXG4gICAgICAgICAgOiB0aGlzLl9jYXN0TWFuYWdlciA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBodG1sYGBcbiAgICAgICAgICA6IHRoaXMuX2Nhc3RNYW5hZ2VyID09PSBudWxsXG4gICAgICAgICAgPyBodG1sYCBDYXN0IEFQSSB1bmF2YWlsYWJsZSBgXG4gICAgICAgICAgOiB0aGlzLl9jYXN0TWFuYWdlci5jYXN0U3RhdGUgPT09IFwiTk9fREVWSUNFU19BVkFJTEFCTEVcIlxuICAgICAgICAgID8gaHRtbGAgTm8gZGV2aWNlcyBmb3VuZCBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8Z29vZ2xlLWNhc3QtbGF1bmNoZXI+PC9nb29nbGUtY2FzdC1sYXVuY2hlcj5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2VuZExvdmVsYWNlfVxuICAgICAgICAgICAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7IGluYWN0aXZlOiAhYWN0aXZlIH0pfVxuICAgICAgICAgICAgICAgICAgLnVuZWxldmF0ZWQ9JHthY3RpdmV9XG4gICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshdGhpcy5fY2FzdE1hbmFnZXIuc3RhdHVzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNIT1dcbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIGxvY2F0aW9uLmhvc3RuYW1lICE9PSBcImxvY2FsaG9zdFwiKSB7XG4gICAgICB0aGlzLl9ub0hUVFBTID0gdHJ1ZTtcbiAgICB9XG4gICAgaW1wb3J0KFwiLi4vLi4vLi4vY2FzdC9jYXN0X21hbmFnZXJcIikudGhlbigoeyBnZXRDYXN0TWFuYWdlciB9KSA9PlxuICAgICAgZ2V0Q2FzdE1hbmFnZXIodGhpcy5oYXNzLmF1dGgpLnRoZW4oXG4gICAgICAgIChtZ3IpID0+IHtcbiAgICAgICAgICB0aGlzLl9jYXN0TWFuYWdlciA9IG1ncjtcbiAgICAgICAgICBtZ3IuYWRkRXZlbnRMaXN0ZW5lcihcImNvbm5lY3Rpb24tY2hhbmdlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtZ3IuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXRlLWNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9jYXN0TWFuYWdlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLmhpZGVfaWZfdW5hdmFpbGFibGUpIHtcbiAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9XG4gICAgICAgICF0aGlzLl9jYXN0TWFuYWdlciB8fFxuICAgICAgICB0aGlzLl9jYXN0TWFuYWdlci5jYXN0U3RhdGUgPT09IFwiTk9fREVWSUNFU19BVkFJTEFCTEVcIlxuICAgICAgICAgID8gXCJub25lXCJcbiAgICAgICAgICA6IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2VuZExvdmVsYWNlKCkge1xuICAgIGF3YWl0IGVuc3VyZUNvbm5lY3RlZENhc3RTZXNzaW9uKHRoaXMuX2Nhc3RNYW5hZ2VyISwgdGhpcy5oYXNzLmF1dGgpO1xuICAgIGNhc3RTZW5kU2hvd0xvdmVsYWNlVmlldyhcbiAgICAgIHRoaXMuX2Nhc3RNYW5hZ2VyISxcbiAgICAgIHRoaXMuX2NvbmZpZyEudmlldyxcbiAgICAgIHRoaXMuX2NvbmZpZyEuZGFzaGJvYXJkXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGhhLWljb24ge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IpO1xuICAgICAgfVxuICAgICAgLmZsZXgge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLm5hbWUge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICAgIC5jb250cm9scyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBnb29nbGUtY2FzdC1sYXVuY2hlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41N2VtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgIH1cbiAgICAgIC5pbmFjdGl2ZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jYXN0LXJvd1wiOiBIdWlDYXN0Um93O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQThCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBU0E7QUFFQTtBQUlBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7Ozs7OztBQUdBOzs7OztBQUVBOzs7OztBQUVBOzs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBOztBQXhCQTtBQTJCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9DQTs7O0FBN0lBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
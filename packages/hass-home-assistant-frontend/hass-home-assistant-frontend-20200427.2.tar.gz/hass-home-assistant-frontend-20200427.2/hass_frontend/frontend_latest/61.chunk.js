(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[61],{

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

/***/ "./src/panels/lovelace/cards/hui-iframe-card.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-iframe-card.ts ***!
  \******************************************************/
/*! exports provided: HuiIframeCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiIframeCard", function() { return HuiIframeCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/util/parse-aspect-ratio */ "./src/common/util/parse-aspect-ratio.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
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





let HuiIframeCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-iframe-card")], function (_initialize, _LitElement) {
  class HuiIframeCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiIframeCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-iframe-card-editor */[__webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("hui-iframe-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-iframe-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-iframe-card-editor.ts"));
        return document.createElement("hui-iframe-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig() {
        return {
          type: "iframe",
          url: "https://www.home-assistant.io",
          aspect_ratio: "50%"
        };
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "isPanel",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "editMode",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "getCardSize",
      value: function getCardSize() {
        if (!this._config) {
          return 3;
        }

        const aspectRatio = this._config.aspect_ratio ? Number(this._config.aspect_ratio.replace("%", "")) : 50;
        return 1 + aspectRatio / 25;
      }
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config.url) {
          throw new Error("URL required");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        let padding = "";

        if (!this.isPanel && this._config.aspect_ratio) {
          const ratio = Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_2__["default"])(this._config.aspect_ratio);

          if (ratio && ratio.w > 0 && ratio.h > 0) {
            padding = `${(100 * ratio.h / ratio.w).toFixed(2)}%`;
          }
        } else if (!this.isPanel) {
          padding = "50%";
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card .header="${this._config.title}">
        <div
          id="root"
          style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__["styleMap"])({
          "padding-top": padding
        })}"
        >
          <iframe
            src="${this._config.url}"
            sandbox="allow-forms allow-modals allow-popups allow-pointer-lock allow-same-origin allow-scripts"
            allowfullscreen="true"
          ></iframe>
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
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

      #root {
        width: 100%;
        position: relative;
      }

      :host([ispanel]) #root {
        height: 100%;
      }

      iframe {
        position: absolute;
        border: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvcGFyc2UtYXNwZWN0LXJhdGlvLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY2FyZHMvaHVpLWlmcmFtZS1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhhbmRsZSAxNng5LCAxNjo5LCAxLjc4eDEsIDEuNzg6MSwgMS43OFxuLy8gSWdub3JlIGV2ZXJ5dGhpbmcgZWxzZVxuY29uc3QgcGFyc2VPclRocm93ID0gKG51bSkgPT4ge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZUZsb2F0KG51bSk7XG4gIGlmIChpc05hTihwYXJzZWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke251bX0gaXMgbm90IGEgbnVtYmVyYCk7XG4gIH1cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlQXNwZWN0UmF0aW8oaW5wdXQ6IHN0cmluZykge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAoaW5wdXQuZW5kc1dpdGgoXCIlXCIpKSB7XG4gICAgICByZXR1cm4geyB3OiAxMDAsIGg6IHBhcnNlT3JUaHJvdyhpbnB1dC5zdWJzdHIoMCwgaW5wdXQubGVuZ3RoIC0gMSkpIH07XG4gICAgfVxuXG4gICAgY29uc3QgYXJyID0gaW5wdXQucmVwbGFjZShcIjpcIiwgXCJ4XCIpLnNwbGl0KFwieFwiKTtcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyci5sZW5ndGggPT09IDFcbiAgICAgID8geyB3OiBwYXJzZU9yVGhyb3coYXJyWzBdKSwgaDogMSB9XG4gICAgICA6IHsgdzogcGFyc2VPclRocm93KGFyclswXSksIGg6IHBhcnNlT3JUaHJvdyhhcnJbMV0pIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElnbm9yZSB0aGUgZXJyb3JcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXBcIjtcbmltcG9ydCBwYXJzZUFzcGVjdFJhdGlvIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9wYXJzZS1hc3BlY3QtcmF0aW9cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkLCBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IElmcmFtZUNhcmRDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1pZnJhbWUtY2FyZFwiKVxuZXhwb3J0IGNsYXNzIEh1aUlmcmFtZUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VDYXJkIHtcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDb25maWdFbGVtZW50KCk6IFByb21pc2U8TG92ZWxhY2VDYXJkRWRpdG9yPiB7XG4gICAgYXdhaXQgaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJodWktaWZyYW1lLWNhcmQtZWRpdG9yXCIgKi8gXCIuLi9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1pZnJhbWUtY2FyZC1lZGl0b3JcIlxuICAgICk7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJodWktaWZyYW1lLWNhcmQtZWRpdG9yXCIpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRTdHViQ29uZmlnKCk6IElmcmFtZUNhcmRDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcImlmcmFtZVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvXCIsXG4gICAgICBhc3BlY3RfcmF0aW86IFwiNTAlXCIsXG4gICAgfTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSlcbiAgcHVibGljIGlzUGFuZWwgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pXG4gIHB1YmxpYyBlZGl0TW9kZSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBfY29uZmlnPzogSWZyYW1lQ2FyZENvbmZpZztcblxuICBwdWJsaWMgZ2V0Q2FyZFNpemUoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdGhpcy5fY29uZmlnLmFzcGVjdF9yYXRpb1xuICAgICAgPyBOdW1iZXIodGhpcy5fY29uZmlnLmFzcGVjdF9yYXRpby5yZXBsYWNlKFwiJVwiLCBcIlwiKSlcbiAgICAgIDogNTA7XG4gICAgcmV0dXJuIDEgKyBhc3BlY3RSYXRpbyAvIDI1O1xuICB9XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IElmcmFtZUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZy51cmwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVSTCByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBsZXQgcGFkZGluZyA9IFwiXCI7XG4gICAgaWYgKCF0aGlzLmlzUGFuZWwgJiYgdGhpcy5fY29uZmlnLmFzcGVjdF9yYXRpbykge1xuICAgICAgY29uc3QgcmF0aW8gPSBwYXJzZUFzcGVjdFJhdGlvKHRoaXMuX2NvbmZpZy5hc3BlY3RfcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvICYmIHJhdGlvLncgPiAwICYmIHJhdGlvLmggPiAwKSB7XG4gICAgICAgIHBhZGRpbmcgPSBgJHsoKDEwMCAqIHJhdGlvLmgpIC8gcmF0aW8udykudG9GaXhlZCgyKX0lYDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzUGFuZWwpIHtcbiAgICAgIHBhZGRpbmcgPSBcIjUwJVwiO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQgLmhlYWRlcj1cIiR7dGhpcy5fY29uZmlnLnRpdGxlfVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJyb290XCJcbiAgICAgICAgICBzdHlsZT1cIiR7c3R5bGVNYXAoe1xuICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiOiBwYWRkaW5nLFxuICAgICAgICAgIH0pfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICBzcmM9XCIke3RoaXMuX2NvbmZpZy51cmx9XCJcbiAgICAgICAgICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXBvaW50ZXItbG9jayBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcbiAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIlxuICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0KFtpc3BhbmVsXSkgaGEtY2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpc3BhbmVsXVtlZGl0TW9kZV0pIGhhLWNhcmQge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUxcHgpO1xuICAgICAgfVxuXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgI3Jvb3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaXNwYW5lbF0pICNyb290IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBpZnJhbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1pZnJhbWUtY2FyZFwiOiBIdWlJZnJhbWVDYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBU0E7QUFDQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLG1hQUNBO0FBRUE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFkQTtBQUFBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBaEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1CQTtBQUFBO0FBQUE7QUFuQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBaENBO0FBQUE7QUFBQTtBQUFBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQUFBO0FBQUE7QUFBQTtBQTJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTs7O0FBS0E7Ozs7OztBQVRBO0FBZ0JBO0FBekVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdDQTtBQTVHQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
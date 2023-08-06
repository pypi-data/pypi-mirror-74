(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;

    if (d.type !== 'RPC') {
      return;
    }

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var params = [],
          len = arguments.length;

      while (len--) params[len] = arguments[len];

      return new Promise(function (a, b) {
        var id = ++c;
        callbacks[id] = [a, b];
        worker.postMessage({
          type: 'RPC',
          id: id,
          method: method,
          params: params
        });
      });
    };
  });
}

module.exports = addMethods;

/***/ }),

/***/ "./src/data/ws-templates.ts":
/*!**********************************!*\
  !*** ./src/data/ws-templates.ts ***!
  \**********************************/
/*! exports provided: subscribeRenderTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeRenderTemplate", function() { return subscribeRenderTemplate; });
const subscribeRenderTemplate = (conn, onChange, params) => {
  return conn.subscribeMessage(msg => onChange(msg.result), Object.assign({
    type: "render_template"
  }, params));
};

/***/ }),

/***/ "./src/panels/lovelace/cards/hui-markdown-card.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-markdown-card.ts ***!
  \********************************************************/
/*! exports provided: HuiMarkdownCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiMarkdownCard", function() { return HuiMarkdownCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _data_ws_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/ws-templates */ "./src/data/ws-templates.ts");
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







let HuiMarkdownCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-markdown-card")], function (_initialize, _LitElement) {
  class HuiMarkdownCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiMarkdownCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-markdown-card-editor */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-delete-card~hui-dialog-edit-card~hui-dialog-suggest-card~h~a8cf51a3"), __webpack_require__.e("hui-alarm-panel-card-editor~hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui~192a43f6"), __webpack_require__.e("hui-markdown-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-markdown-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-markdown-card-editor.ts"));
        return document.createElement("hui-markdown-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig() {
        return {
          type: "markdown",
          content: "The **Markdown** card allows you to write any text. You can style it **bold**, *italicized*, ~strikethrough~ etc. You can do images, links, and more.\n\nFor more information see the [Markdown Cheatsheet](https://commonmark.org/help)."
        };
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_content",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_unsubRenderTemplate",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_hass",
      value: void 0
    }, {
      kind: "method",
      key: "getCardSize",
      value: function getCardSize() {
        return this._config === undefined ? 3 : this._config.card_size === undefined ? this._config.content.split("\n").length + (this._config.title ? 1 : 0) : this._config.card_size;
      }
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config.content) {
          throw new Error("Invalid Configuration: Content Required");
        }

        this._config = config;

        this._disconnect().then(() => {
          if (this._hass) {
            this._connect();
          }
        });
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._disconnect();
      }
    }, {
      kind: "set",
      key: "hass",
      value: function hass(_hass) {
        this._hass = _hass;

        this._connect();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card .header="${this._config.title}">
        <ha-markdown
          breaks
          class="markdown ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          "no-header": !this._config.title
        })}"
          .content="${this._content}"
        ></ha-markdown>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiMarkdownCard.prototype), "updated", this).call(this, changedProps);

        if (!this._config || !this._hass) {
          return;
        }

        const oldHass = changedProps.get("hass");
        const oldConfig = changedProps.get("_config");

        if (!oldHass || !oldConfig || oldHass.themes !== this.hass.themes || oldConfig.theme !== this._config.theme) {
          Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__["applyThemesOnElement"])(this, this._hass.themes, this._config.theme);
        }
      }
    }, {
      kind: "method",
      key: "_connect",
      value: async function _connect() {
        if (!this._unsubRenderTemplate && this._hass && this._config) {
          this._unsubRenderTemplate = Object(_data_ws_templates__WEBPACK_IMPORTED_MODULE_5__["subscribeRenderTemplate"])(this._hass.connection, result => {
            this._content = result;
          }, {
            template: this._config.content,
            entity_ids: this._config.entity_id,
            variables: {
              config: this._config,
              user: this._hass.user.name
            }
          });

          this._unsubRenderTemplate.catch(() => {
            this._content = this._config.content;
            this._unsubRenderTemplate = undefined;
          });
        }
      }
    }, {
      kind: "method",
      key: "_disconnect",
      value: async function _disconnect() {
        if (this._unsubRenderTemplate) {
          try {
            const unsub = await this._unsubRenderTemplate;
            this._unsubRenderTemplate = undefined;
            await unsub();
          } catch (e) {
            if (e.code === "not_found") {// If we get here, the connection was probably already closed. Ignore.
            } else {
              throw e;
            }
          }
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-markdown {
        display: block;
        padding: 0 16px 16px;
        -ms-user-select: initial;
        -webkit-user-select: initial;
        -moz-user-select: initial;
      }
      .markdown.no-header {
        padding-top: 16px;
      }
      ha-markdown > *:first-child {
        margin-top: 0;
      }
      ha-markdown > *:last-child {
        margin-bottom: 0;
      }
      ha-markdown a {
        color: var(--primary-color);
      }
      ha-markdown img {
        max-width: 100%;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3JwYy13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3dzLXRlbXBsYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1tYXJrZG93bi1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1ldGhvZHMod29ya2VyLCBtZXRob2RzKSB7XG5cdGxldCBjID0gMDtcblx0bGV0IGNhbGxiYWNrcyA9IHt9O1xuXHR3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XG5cdFx0bGV0IGQgPSBlLmRhdGE7XG5cdFx0aWYgKGQudHlwZSE9PSdSUEMnKSByZXR1cm47XG5cdFx0aWYgKGQuaWQpIHtcblx0XHRcdGxldCBmID0gY2FsbGJhY2tzW2QuaWRdO1xuXHRcdFx0aWYgKGYpIHtcblx0XHRcdFx0ZGVsZXRlIGNhbGxiYWNrc1tkLmlkXTtcblx0XHRcdFx0aWYgKGQuZXJyb3IpIHtcblx0XHRcdFx0XHRmWzFdKE9iamVjdC5hc3NpZ24oRXJyb3IoZC5lcnJvci5tZXNzYWdlKSwgZC5lcnJvcikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGZbMF0oZC5yZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXHRcdFx0ZXZ0LmluaXRFdmVudChkLm1ldGhvZCwgZmFsc2UsIGZhbHNlKTtcblx0XHRcdGV2dC5kYXRhID0gZC5wYXJhbXM7XG5cdFx0XHR3b3JrZXIuZGlzcGF0Y2hFdmVudChldnQpO1xuXHRcdH1cblx0fSk7XG5cdG1ldGhvZHMuZm9yRWFjaCggbWV0aG9kID0+IHtcblx0XHR3b3JrZXJbbWV0aG9kXSA9ICguLi5wYXJhbXMpID0+IG5ldyBQcm9taXNlKCAoYSwgYikgPT4ge1xuXHRcdFx0bGV0IGlkID0gKytjO1xuXHRcdFx0Y2FsbGJhY2tzW2lkXSA9IFthLCBiXTtcblx0XHRcdHdvcmtlci5wb3N0TWVzc2FnZSh7IHR5cGU6ICdSUEMnLCBpZCwgbWV0aG9kLCBwYXJhbXMgfSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiwgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5pbnRlcmZhY2UgUmVuZGVyVGVtcGxhdGVSZXN1bHQge1xuICByZXN1bHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZVJlbmRlclRlbXBsYXRlID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHJlc3VsdDogc3RyaW5nKSA9PiB2b2lkLFxuICBwYXJhbXM6IHtcbiAgICB0ZW1wbGF0ZTogc3RyaW5nO1xuICAgIGVudGl0eV9pZHM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB2YXJpYWJsZXM/OiBvYmplY3Q7XG4gIH1cbik6IFByb21pc2U8VW5zdWJzY3JpYmVGdW5jPiA9PiB7XG4gIHJldHVybiBjb25uLnN1YnNjcmliZU1lc3NhZ2UoXG4gICAgKG1zZzogUmVuZGVyVGVtcGxhdGVSZXN1bHQpID0+IG9uQ2hhbmdlKG1zZy5yZXN1bHQpLFxuICAgIHsgdHlwZTogXCJyZW5kZXJfdGVtcGxhdGVcIiwgLi4ucGFyYW1zIH1cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgYXBwbHlUaGVtZXNPbkVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLW1hcmtkb3duXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVSZW5kZXJUZW1wbGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3dzLXRlbXBsYXRlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkLCBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IE1hcmtkb3duQ2FyZENvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLW1hcmtkb3duLWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIdWlNYXJrZG93bkNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VDYXJkIHtcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDb25maWdFbGVtZW50KCk6IFByb21pc2U8TG92ZWxhY2VDYXJkRWRpdG9yPiB7XG4gICAgYXdhaXQgaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJodWktbWFya2Rvd24tY2FyZC1lZGl0b3JcIiAqLyBcIi4uL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLW1hcmtkb3duLWNhcmQtZWRpdG9yXCJcbiAgICApO1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHVpLW1hcmtkb3duLWNhcmQtZWRpdG9yXCIpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRTdHViQ29uZmlnKCk6IE1hcmtkb3duQ2FyZENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWFya2Rvd25cIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiVGhlICoqTWFya2Rvd24qKiBjYXJkIGFsbG93cyB5b3UgdG8gd3JpdGUgYW55IHRleHQuIFlvdSBjYW4gc3R5bGUgaXQgKipib2xkKiosICppdGFsaWNpemVkKiwgfnN0cmlrZXRocm91Z2h+IGV0Yy4gWW91IGNhbiBkbyBpbWFnZXMsIGxpbmtzLCBhbmQgbW9yZS5cXG5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIFtNYXJrZG93biBDaGVhdHNoZWV0XShodHRwczovL2NvbW1vbm1hcmsub3JnL2hlbHApLlwiLFxuICAgIH07XG4gIH1cblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBNYXJrZG93bkNhcmRDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29udGVudD86IHN0cmluZyA9IFwiXCI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdW5zdWJSZW5kZXJUZW1wbGF0ZT86IFByb21pc2U8VW5zdWJzY3JpYmVGdW5jPjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9oYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBwdWJsaWMgZ2V0Q2FyZFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnID09PSB1bmRlZmluZWRcbiAgICAgID8gM1xuICAgICAgOiB0aGlzLl9jb25maWcuY2FyZF9zaXplID09PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fY29uZmlnLmNvbnRlbnQuc3BsaXQoXCJcXG5cIikubGVuZ3RoICsgKHRoaXMuX2NvbmZpZy50aXRsZSA/IDEgOiAwKVxuICAgICAgOiB0aGlzLl9jb25maWcuY2FyZF9zaXplO1xuICB9XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IE1hcmtkb3duQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnLmNvbnRlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQ29uZmlndXJhdGlvbjogQ29udGVudCBSZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fZGlzY29ubmVjdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhc3MpIHtcbiAgICAgICAgdGhpcy5fY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2Rpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaGFzcyhoYXNzKSB7XG4gICAgdGhpcy5faGFzcyA9IGhhc3M7XG4gICAgdGhpcy5fY29ubmVjdCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZCAuaGVhZGVyPVwiJHt0aGlzLl9jb25maWcudGl0bGV9XCI+XG4gICAgICAgIDxoYS1tYXJrZG93blxuICAgICAgICAgIGJyZWFrc1xuICAgICAgICAgIGNsYXNzPVwibWFya2Rvd24gJHtjbGFzc01hcCh7XG4gICAgICAgICAgICBcIm5vLWhlYWRlclwiOiAhdGhpcy5fY29uZmlnLnRpdGxlLFxuICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgLmNvbnRlbnQ9XCIke3RoaXMuX2NvbnRlbnR9XCJcbiAgICAgICAgPjwvaGEtbWFya2Rvd24+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuX2hhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgb2xkQ29uZmlnID0gY2hhbmdlZFByb3BzLmdldChcIl9jb25maWdcIikgYXNcbiAgICAgIHwgTWFya2Rvd25DYXJkQ29uZmlnXG4gICAgICB8IHVuZGVmaW5lZDtcblxuICAgIGlmIChcbiAgICAgICFvbGRIYXNzIHx8XG4gICAgICAhb2xkQ29uZmlnIHx8XG4gICAgICBvbGRIYXNzLnRoZW1lcyAhPT0gdGhpcy5oYXNzLnRoZW1lcyB8fFxuICAgICAgb2xkQ29uZmlnLnRoZW1lICE9PSB0aGlzLl9jb25maWcudGhlbWVcbiAgICApIHtcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KHRoaXMsIHRoaXMuX2hhc3MudGhlbWVzLCB0aGlzLl9jb25maWcudGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2Nvbm5lY3QoKSB7XG4gICAgaWYgKCF0aGlzLl91bnN1YlJlbmRlclRlbXBsYXRlICYmIHRoaXMuX2hhc3MgJiYgdGhpcy5fY29uZmlnKSB7XG4gICAgICB0aGlzLl91bnN1YlJlbmRlclRlbXBsYXRlID0gc3Vic2NyaWJlUmVuZGVyVGVtcGxhdGUoXG4gICAgICAgIHRoaXMuX2hhc3MuY29ubmVjdGlvbixcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NvbnRlbnQgPSByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fY29uZmlnLmNvbnRlbnQsXG4gICAgICAgICAgZW50aXR5X2lkczogdGhpcy5fY29uZmlnLmVudGl0eV9pZCxcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5fY29uZmlnLFxuICAgICAgICAgICAgdXNlcjogdGhpcy5faGFzcy51c2VyIS5uYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLl91bnN1YlJlbmRlclRlbXBsYXRlLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5fY29udGVudCA9IHRoaXMuX2NvbmZpZyEuY29udGVudDtcbiAgICAgICAgdGhpcy5fdW5zdWJSZW5kZXJUZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2Rpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMuX3Vuc3ViUmVuZGVyVGVtcGxhdGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVuc3ViID0gYXdhaXQgdGhpcy5fdW5zdWJSZW5kZXJUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fdW5zdWJSZW5kZXJUZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgYXdhaXQgdW5zdWIoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJub3RfZm91bmRcIikge1xuICAgICAgICAgIC8vIElmIHdlIGdldCBoZXJlLCB0aGUgY29ubmVjdGlvbiB3YXMgcHJvYmFibHkgYWxyZWFkeSBjbG9zZWQuIElnbm9yZS5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtbWFya2Rvd24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICAgIC5tYXJrZG93bi5uby1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgIH1cbiAgICAgIGhhLW1hcmtkb3duID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG4gICAgICBoYS1tYXJrZG93biA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICBoYS1tYXJrZG93biBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgaGEtbWFya2Rvd24gaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1tYXJrZG93bi1jYXJkXCI6IEh1aU1hcmtkb3duQ2FyZDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBOztBQW5CQTtBQXNCQTtBQUNBOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBREE7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFTQTtBQUVBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsNnpCQUNBO0FBRUE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5QkE7QUFLQTtBQTlCQTtBQUFBO0FBQUE7QUFBQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQ0E7QUFBQTtBQUFBO0FBQUE7QUE4Q0E7QUFDQTtBQS9DQTtBQUFBO0FBQUE7QUFBQTtBQWtEQTtBQUNBO0FBQUE7QUFDQTtBQXBEQTtBQUFBO0FBQUE7QUFBQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFQQTtBQVdBO0FBdEVBO0FBQUE7QUFBQTtBQUFBO0FBeUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBMUZBO0FBQUE7QUFBQTtBQUFBO0FBNkZBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpIQTtBQUFBO0FBQUE7QUFBQTtBQW9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0lBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0JBO0FBNUpBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
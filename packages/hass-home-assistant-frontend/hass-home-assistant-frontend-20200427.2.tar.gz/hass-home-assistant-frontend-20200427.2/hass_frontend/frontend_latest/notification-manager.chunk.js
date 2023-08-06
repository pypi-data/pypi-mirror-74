(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["notification-manager"],{

/***/ "./src/components/ha-toast.ts":
/*!************************************!*\
  !*** ./src/components/ha-toast.ts ***!
  \************************************/
/*! exports provided: HaToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaToast", function() { return HaToast; });
/* harmony import */ var _polymer_paper_toast_paper_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-toast/paper-toast */ "./node_modules/@polymer/paper-toast/paper-toast.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const PaperToast = customElements.get("paper-toast");
class HaToast extends PaperToast {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_resizeListener", void 0);

    _defineProperty(this, "_mediaq", void 0);
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this._resizeListener) {
      this._resizeListener = ev => this.classList.toggle("fit-bottom", ev.matches);

      this._mediaq = window.matchMedia("(max-width: 599px");
    }

    this._mediaq.addListener(this._resizeListener);

    this._resizeListener(this._mediaq);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this._mediaq.removeListener(this._resizeListener);
  }

}
customElements.define("ha-toast", HaToast);

/***/ }),

/***/ "./src/managers/notification-manager.ts":
/*!**********************************************!*\
  !*** ./src/managers/notification-manager.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-toast */ "./src/components/ha-toast.ts");
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






let NotificationManager = _decorate(null, function (_initialize, _LitElement) {
  class NotificationManager extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: NotificationManager,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_action",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_noCancelOnOutsideClick",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("ha-toast")],
      key: "_toast",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog({
        message,
        action,
        duration,
        dismissable
      }) {
        let toast = this._toast; // Can happen on initial load

        if (!toast) {
          await this.updateComplete;
          toast = this._toast;
        }

        toast.setAttribute("dir", Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_2__["computeRTL"])(this.hass) ? "rtl" : "ltr");
        this._action = action || undefined;
        this._noCancelOnOutsideClick = dismissable === undefined ? false : !dismissable;
        toast.hide();
        toast.show({
          text: message,
          duration: duration === undefined ? 3000 : duration
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <ha-toast .noCancelOnOutsideClick=${this._noCancelOnOutsideClick}>
        ${this._action ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <mwc-button
                .label=${this._action.text}
                @click=${this.buttonClicked}
              ></mwc-button>
            ` : ""}
      </ha-toast>
    `;
      }
    }, {
      kind: "method",
      key: "buttonClicked",
      value: function buttonClicked() {
        this._toast.hide();

        if (this._action) {
          this._action.action();
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      ha-toast {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      mwc-button {
        color: var(--primary-color);
        font-weight: bold;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

customElements.define("notification-manager", NotificationManager);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLW1hbmFnZXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS10b2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlcnMvbm90aWZpY2F0aW9uLW1hbmFnZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9hc3QvcGFwZXItdG9hc3RcIjtcbmltcG9ydCB0eXBlIHsgUGFwZXJUb2FzdEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItdG9hc3QvcGFwZXItdG9hc3RcIjtcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgUGFwZXJUb2FzdCA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLXRvYXN0XCIpIGFzIENvbnN0cnVjdG9yPFxuICBQYXBlclRvYXN0RWxlbWVudFxuPjtcblxuZXhwb3J0IGNsYXNzIEhhVG9hc3QgZXh0ZW5kcyBQYXBlclRvYXN0IHtcbiAgcHJpdmF0ZSBfcmVzaXplTGlzdGVuZXI/OiAob2JqOiB7IG1hdGNoZXM6IGJvb2xlYW4gfSkgPT4gdW5rbm93bjtcblxuICBwcml2YXRlIF9tZWRpYXE/OiBNZWRpYVF1ZXJ5TGlzdDtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGlmICghdGhpcy5fcmVzaXplTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyID0gKGV2KSA9PlxuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJmaXQtYm90dG9tXCIsIGV2Lm1hdGNoZXMpO1xuICAgICAgdGhpcy5fbWVkaWFxID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA1OTlweFwiKTtcbiAgICB9XG4gICAgdGhpcy5fbWVkaWFxIS5hZGRMaXN0ZW5lcih0aGlzLl9yZXNpemVMaXN0ZW5lcik7XG4gICAgdGhpcy5fcmVzaXplTGlzdGVuZXIodGhpcy5fbWVkaWFxISk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9tZWRpYXEhLnJlbW92ZUxpc3RlbmVyKHRoaXMuX3Jlc2l6ZUxpc3RlbmVyISk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXRvYXN0XCI6IEhhVG9hc3Q7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtdG9hc3RcIiwgSGFUb2FzdCk7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBxdWVyeSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS10b2FzdFwiO1xuaW1wb3J0IHR5cGUgeyBIYVRvYXN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGEtdG9hc3RcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dUb2FzdFBhcmFtcyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgYWN0aW9uPzogVG9hc3RBY3Rpb25QYXJhbXM7XG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBkaXNtaXNzYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RBY3Rpb25QYXJhbXMge1xuICBhY3Rpb246ICgpID0+IHZvaWQ7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuY2xhc3MgTm90aWZpY2F0aW9uTWFuYWdlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYWN0aW9uPzogVG9hc3RBY3Rpb25QYXJhbXM7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbm9DYW5jZWxPbk91dHNpZGVDbGljayA9IGZhbHNlO1xuXG4gIEBxdWVyeShcImhhLXRvYXN0XCIpIHByaXZhdGUgX3RvYXN0ITogSGFUb2FzdDtcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyh7XG4gICAgbWVzc2FnZSxcbiAgICBhY3Rpb24sXG4gICAgZHVyYXRpb24sXG4gICAgZGlzbWlzc2FibGUsXG4gIH06IFNob3dUb2FzdFBhcmFtcykge1xuICAgIGxldCB0b2FzdCA9IHRoaXMuX3RvYXN0O1xuICAgIC8vIENhbiBoYXBwZW4gb24gaW5pdGlhbCBsb2FkXG4gICAgaWYgKCF0b2FzdCkge1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAgIHRvYXN0ID0gdGhpcy5fdG9hc3Q7XG4gICAgfVxuICAgIHRvYXN0LnNldEF0dHJpYnV0ZShcImRpclwiLCBjb21wdXRlUlRMKHRoaXMuaGFzcykgPyBcInJ0bFwiIDogXCJsdHJcIik7XG4gICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9ub0NhbmNlbE9uT3V0c2lkZUNsaWNrID1cbiAgICAgIGRpc21pc3NhYmxlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICFkaXNtaXNzYWJsZTtcbiAgICB0b2FzdC5oaWRlKCk7XG4gICAgdG9hc3Quc2hvdyh7XG4gICAgICB0ZXh0OiBtZXNzYWdlLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uID09PSB1bmRlZmluZWQgPyAzMDAwIDogZHVyYXRpb24sXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS10b2FzdCAubm9DYW5jZWxPbk91dHNpZGVDbGljaz0ke3RoaXMuX25vQ2FuY2VsT25PdXRzaWRlQ2xpY2t9PlxuICAgICAgICAke3RoaXMuX2FjdGlvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLl9hY3Rpb24udGV4dH1cbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLmJ1dHRvbkNsaWNrZWR9XG4gICAgICAgICAgICAgID48L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9oYS10b2FzdD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBidXR0b25DbGlja2VkKCkge1xuICAgIHRoaXMuX3RvYXN0LmhpZGUoKTtcbiAgICBpZiAodGhpcy5fYWN0aW9uKSB7XG4gICAgICB0aGlzLl9hY3Rpb24uYWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtdG9hc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG4gICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm5vdGlmaWNhdGlvbi1tYW5hZ2VyXCIsIE5vdGlmaWNhdGlvbk1hbmFnZXIpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImhhc3Mtbm90aWZpY2F0aW9uXCI6IFNob3dUb2FzdFBhcmFtcztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXJCQTtBQTZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7O0FBQUE7Ozs7O0FBRUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFKQTs7QUFGQTtBQVlBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQUFBO0FBV0E7OztBQWxFQTtBQUNBO0FBb0VBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
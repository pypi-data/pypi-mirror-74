(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["lovelace-resource-detail-dialog"],{

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");

const paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

class HaPaperDropdownClass extends paperDropdownClass {
  ready() {
    super.ready(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      if (window.getComputedStyle(this).direction === "rtl") {
        this.style.textAlign = "right";
      }
    }, 100);
  }

}
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

/***/ }),

/***/ "./src/panels/config/lovelace/resources/dialog-lovelace-resource-detail.ts":
/*!*********************************************************************************!*\
  !*** ./src/panels/config/lovelace/resources/dialog-lovelace-resource-detail.ts ***!
  \*********************************************************************************/
/*! exports provided: DialogLovelaceResourceDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogLovelaceResourceDetail", function() { return DialogLovelaceResourceDetail; });
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-dialog */ "./src/components/ha-dialog.ts");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
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









let DialogLovelaceResourceDetail = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("dialog-lovelace-resource-detail")], function (_initialize, _LitElement) {
  class DialogLovelaceResourceDetail extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogLovelaceResourceDetail,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_url",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_type",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_submitting",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        this._error = undefined;

        if (this._params.resource) {
          this._url = this._params.resource.url || "";
          this._type = this._params.resource.type || "module";
        } else {
          this._url = "";
          this._type = "module";
        }

        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]``;
        }

        const urlInvalid = this._url.trim() === "";
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <ha-dialog
        open
        @closing=${this._close}
        scrimClickAction
        escapeKeyAction
        .heading=${Object(_components_ha_dialog__WEBPACK_IMPORTED_MODULE_5__["createCloseHeading"])(this.hass, this._params.resource ? this._params.resource.url : this.hass.localize("ui.panel.config.lovelace.resources.detail.new_resource"))}
      >
        <div>
          ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]` <div class="error">${this._error}</div> ` : ""}
          <div class="form">
            <h3 class="warning">
              ${this.hass.localize("ui.panel.config.lovelace.resources.detail.warning_header")}
            </h3>
            ${this.hass.localize("ui.panel.config.lovelace.resources.detail.warning_text")}
            <paper-input
              .value=${this._url}
              @value-changed=${this._urlChanged}
              .label=${this.hass.localize("ui.panel.config.lovelace.resources.detail.url")}
              .errorMessage=${this.hass.localize("ui.panel.config.lovelace.resources.detail.url_error_msg")}
              .invalid=${urlInvalid}
              dialogInitialFocus
            ></paper-input>
            <br />
            <ha-paper-dropdown-menu
              .label=${this.hass.localize("ui.panel.config.lovelace.resources.detail.type")}
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${this._type}
                @iron-select=${this._typeChanged}
                attr-for-selected="type"
              >
                <paper-item type="module">
                  ${this.hass.localize("ui.panel.config.lovelace.resources.types.module")}
                </paper-item>
                ${this._type === "js" ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                      <paper-item type="js">
                        ${this.hass.localize("ui.panel.config.lovelace.resources.types.js")}
                      </paper-item>
                    ` : ""}
                <paper-item type="css">
                  ${this.hass.localize("ui.panel.config.lovelace.resources.types.css")}
                </paper-item>
                ${this._type === "html" ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                      <paper-item type="html">
                        ${this.hass.localize("ui.panel.config.lovelace.resources.types.html")}
                      </paper-item>
                    ` : ""}
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </div>
        ${this._params.resource ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <mwc-button
                slot="secondaryAction"
                class="warning"
                @click="${this._deleteResource}"
                .disabled=${this._submitting}
              >
                ${this.hass.localize("ui.panel.config.lovelace.resources.detail.delete")}
              </mwc-button>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]``}
        <mwc-button
          slot="primaryAction"
          @click="${this._updateResource}"
          .disabled=${urlInvalid || this._submitting}
        >
          ${this._params.resource ? this.hass.localize("ui.panel.config.lovelace.resources.detail.update") : this.hass.localize("ui.panel.config.lovelace.resources.detail.create")}
        </mwc-button>
      </ha-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_urlChanged",
      value: function _urlChanged(ev) {
        this._error = undefined;
        this._url = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_typeChanged",
      value: function _typeChanged(ev) {
        this._type = ev.detail.item.getAttribute("type");
      }
    }, {
      kind: "method",
      key: "_updateResource",
      value: async function _updateResource() {
        this._submitting = true;

        try {
          const values = {
            url: this._url.trim(),
            res_type: this._type
          };

          if (this._params.resource) {
            await this._params.updateResource(values);
          } else {
            await this._params.createResource(values);
          }

          this._params = undefined;
        } catch (err) {
          this._error = (err === null || err === void 0 ? void 0 : err.message) || "Unknown error";
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_deleteResource",
      value: async function _deleteResource() {
        this._submitting = true;

        try {
          if (await this._params.removeResource()) {
            this._close();
          }
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._params = undefined;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
        .warning {
          color: var(--error-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG92ZWxhY2UtcmVzb3VyY2UtZGV0YWlsLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvbG92ZWxhY2UvcmVzb3VyY2VzL2RpYWxvZy1sb3ZlbGFjZS1yZXNvdXJjZS1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBwYXBlckRyb3Bkb3duQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXG4gIFwicGFwZXItZHJvcGRvd24tbWVudVwiXG4pIGFzIENvbnN0cnVjdG9yPFBvbHltZXJFbGVtZW50PjtcblxuLy8gcGF0Y2hlcyBwYXBlciBkcm9wIGRvd24gdG8gcHJvcGVybHkgc3VwcG9ydCBSVEwgLSBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWRyb3Bkb3duLW1lbnUvaXNzdWVzLzE4M1xuZXhwb3J0IGNsYXNzIEhhUGFwZXJEcm9wZG93bkNsYXNzIGV4dGVuZHMgcGFwZXJEcm9wZG93bkNsYXNzIHtcbiAgcHVibGljIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICB0aGlzLnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCI6IEhhUGFwZXJEcm9wZG93bkNsYXNzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIiwgSGFQYXBlckRyb3Bkb3duQ2xhc3MpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNsb3NlSGVhZGluZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQge1xuICBMb3ZlbGFjZVJlc291cmNlLFxuICBMb3ZlbGFjZVJlc291cmNlc011dGFibGVQYXJhbXMsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VSZXNvdXJjZURldGFpbHNEaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1sb3ZlbGFjZS1yZXNvdXJjZS1kZXRhaWxcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJkaWFsb2ctbG92ZWxhY2UtcmVzb3VyY2UtZGV0YWlsXCIpXG5leHBvcnQgY2xhc3MgRGlhbG9nTG92ZWxhY2VSZXNvdXJjZURldGFpbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogTG92ZWxhY2VSZXNvdXJjZURldGFpbHNEaWFsb2dQYXJhbXM7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdXJsITogTG92ZWxhY2VSZXNvdXJjZVtcInVybFwiXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF90eXBlITogTG92ZWxhY2VSZXNvdXJjZVtcInR5cGVcIl07XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3VibWl0dGluZyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKFxuICAgIHBhcmFtczogTG92ZWxhY2VSZXNvdXJjZURldGFpbHNEaWFsb2dQYXJhbXNcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl9wYXJhbXMucmVzb3VyY2UpIHtcbiAgICAgIHRoaXMuX3VybCA9IHRoaXMuX3BhcmFtcy5yZXNvdXJjZS51cmwgfHwgXCJcIjtcbiAgICAgIHRoaXMuX3R5cGUgPSB0aGlzLl9wYXJhbXMucmVzb3VyY2UudHlwZSB8fCBcIm1vZHVsZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cmwgPSBcIlwiO1xuICAgICAgdGhpcy5fdHlwZSA9IFwibW9kdWxlXCI7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgdXJsSW52YWxpZCA9IHRoaXMuX3VybC50cmltKCkgPT09IFwiXCI7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtZGlhbG9nXG4gICAgICAgIG9wZW5cbiAgICAgICAgQGNsb3Npbmc9JHt0aGlzLl9jbG9zZX1cbiAgICAgICAgc2NyaW1DbGlja0FjdGlvblxuICAgICAgICBlc2NhcGVLZXlBY3Rpb25cbiAgICAgICAgLmhlYWRpbmc9JHtjcmVhdGVDbG9zZUhlYWRpbmcoXG4gICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgIHRoaXMuX3BhcmFtcy5yZXNvdXJjZVxuICAgICAgICAgICAgPyB0aGlzLl9wYXJhbXMucmVzb3VyY2UudXJsXG4gICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLmRldGFpbC5uZXdfcmVzb3VyY2VcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHt0aGlzLl9lcnJvciA/IGh0bWxgIDxkaXYgY2xhc3M9XCJlcnJvclwiPiR7dGhpcy5fZXJyb3J9PC9kaXY+IGAgOiBcIlwifVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5yZXNvdXJjZXMuZGV0YWlsLndhcm5pbmdfaGVhZGVyXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLnJlc291cmNlcy5kZXRhaWwud2FybmluZ190ZXh0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdXJsfVxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3VybENoYW5nZWR9XG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLmRldGFpbC51cmxcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAuZXJyb3JNZXNzYWdlPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5yZXNvdXJjZXMuZGV0YWlsLnVybF9lcnJvcl9tc2dcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAuaW52YWxpZD0ke3VybEludmFsaWR9XG4gICAgICAgICAgICAgIGRpYWxvZ0luaXRpYWxGb2N1c1xuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLmRldGFpbC50eXBlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fdHlwZX1cbiAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9JHt0aGlzLl90eXBlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cInR5cGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5yZXNvdXJjZXMudHlwZXMubW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fdHlwZSA9PT0gXCJqc1wiXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gdHlwZT1cImpzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLnJlc291cmNlcy50eXBlcy5qc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIHR5cGU9XCJjc3NcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLnR5cGVzLmNzc1wiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAke3RoaXMuX3R5cGUgPT09IFwiaHRtbFwiXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gdHlwZT1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UucmVzb3VyY2VzLnR5cGVzLmh0bWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHt0aGlzLl9wYXJhbXMucmVzb3VyY2VcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgc2xvdD1cInNlY29uZGFyeUFjdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2RlbGV0ZVJlc291cmNlfVwiXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fc3VibWl0dGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLnJlc291cmNlcy5kZXRhaWwuZGVsZXRlXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYGB9XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgc2xvdD1cInByaW1hcnlBY3Rpb25cIlxuICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fdXBkYXRlUmVzb3VyY2V9XCJcbiAgICAgICAgICAuZGlzYWJsZWQ9JHt1cmxJbnZhbGlkIHx8IHRoaXMuX3N1Ym1pdHRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMuX3BhcmFtcy5yZXNvdXJjZVxuICAgICAgICAgICAgPyB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLnJlc291cmNlcy5kZXRhaWwudXBkYXRlXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLnJlc291cmNlcy5kZXRhaWwuY3JlYXRlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgPC9oYS1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3VybENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3VybCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3R5cGVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIHRoaXMuX3R5cGUgPSBldi5kZXRhaWwuaXRlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlUmVzb3VyY2UoKSB7XG4gICAgdGhpcy5fc3VibWl0dGluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbHVlczogTG92ZWxhY2VSZXNvdXJjZXNNdXRhYmxlUGFyYW1zID0ge1xuICAgICAgICB1cmw6IHRoaXMuX3VybC50cmltKCksXG4gICAgICAgIHJlc190eXBlOiB0aGlzLl90eXBlLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLl9wYXJhbXMhLnJlc291cmNlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3BhcmFtcyEudXBkYXRlUmVzb3VyY2UodmFsdWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3BhcmFtcyEuY3JlYXRlUmVzb3VyY2UodmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyPy5tZXNzYWdlIHx8IFwiVW5rbm93biBlcnJvclwiO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlUmVzb3VyY2UoKSB7XG4gICAgdGhpcy5fc3VibWl0dGluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhd2FpdCB0aGlzLl9wYXJhbXMhLnJlbW92ZVJlc291cmNlKCkpIHtcbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc3VibWl0dGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgLndhcm5pbmcge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGlhbG9nLWxvdmVsYWNlLXJlc291cmNlLWRldGFpbFwiOiBEaWFsb2dMb3ZlbGFjZVJlc291cmNlRGV0YWlsO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQU1BO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFBQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUdBOzs7QUFHQTs7O0FBVUE7OztBQUdBOztBQUlBOztBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7Ozs7O0FBS0E7Ozs7QUFNQTtBQUNBOzs7O0FBSUE7O0FBSUE7O0FBR0E7O0FBSEE7O0FBVUE7O0FBSUE7O0FBR0E7O0FBSEE7Ozs7O0FBYUE7Ozs7QUFLQTtBQUNBOztBQUVBOztBQVJBOzs7QUFnQkE7QUFDQTs7QUFFQTs7O0FBckdBO0FBK0dBO0FBaEpBO0FBQUE7QUFBQTtBQUFBO0FBbUpBO0FBQ0E7QUFDQTtBQXJKQTtBQUFBO0FBQUE7QUFBQTtBQXdKQTtBQUNBO0FBekpBO0FBQUE7QUFBQTtBQUFBO0FBNEpBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdLQTtBQUFBO0FBQUE7QUFBQTtBQWdMQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhMQTtBQUFBO0FBQUE7QUFBQTtBQTJMQTtBQUNBO0FBNUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErTEE7Ozs7QUFBQTtBQVFBO0FBdk1BO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
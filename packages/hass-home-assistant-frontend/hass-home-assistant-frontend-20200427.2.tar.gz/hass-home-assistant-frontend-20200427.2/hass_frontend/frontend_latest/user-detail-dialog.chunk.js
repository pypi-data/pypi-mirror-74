(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["user-detail-dialog"],{

/***/ "./src/panels/config/users/dialog-user-detail.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/users/dialog-user-detail.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-dialog */ "./src/components/ha-dialog.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/user */ "./src/data/user.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
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










let DialogUserDetail = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("dialog-user-detail")], function (_initialize, _LitElement) {
  class DialogUserDetail extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogUserDetail,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_isAdmin",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
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
        this._name = params.entry.name || "";
        this._isAdmin = params.entry.group_ids[0] === _data_user__WEBPACK_IMPORTED_MODULE_6__["SYSTEM_GROUP_ID_ADMIN"];
        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]``;
        }

        const user = this._params.entry;
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <ha-dialog
        open
        @closing=${this._close}
        scrimClickAction
        escapeKeyAction
        .heading=${Object(_components_ha_dialog__WEBPACK_IMPORTED_MODULE_4__["createCloseHeading"])(this.hass, user.name)}
      >
        <div>
          ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]` <div class="error">${this._error}</div> ` : ""}
          <div class="secondary">
            ${this.hass.localize("ui.panel.config.users.editor.id")}: ${user.id}
          </div>
          <div>
            ${user.is_owner ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  <span class="state"
                    >${this.hass.localize("ui.panel.config.users.editor.owner")}</span
                  >
                ` : ""}
            ${user.system_generated ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  <span class="state">
                    ${this.hass.localize("ui.panel.config.users.editor.system_generated")}
                  </span>
                ` : ""}
            ${user.is_active ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  <span class="state"
                    >${this.hass.localize("ui.panel.config.users.editor.active")}</span
                  >
                ` : ""}
          </div>
          <div class="form">
            <paper-input
              .value=${this._name}
              .disabled=${user.system_generated}
              @value-changed=${this._nameChanged}
              label="${this.hass.localize("ui.panel.config.users.editor.name")}"
            ></paper-input>
            <ha-switch
              .disabled=${user.system_generated}
              .checked=${this._isAdmin}
              @change=${this._adminChanged}
            >
              ${this.hass.localize("ui.panel.config.users.editor.admin")}
            </ha-switch>
            ${!this._isAdmin ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  <br />
                  The users group is a work in progress. The user will be unable
                  to administer the instance via the UI. We're still auditing
                  all management API endpoints to ensure that they correctly
                  limit access to administrators.
                ` : ""}
          </div>
        </div>

        <div slot="secondaryAction">
          <mwc-button
            class="warning"
            @click=${this._deleteEntry}
            .disabled=${this._submitting || user.system_generated}
          >
            ${this.hass.localize("ui.panel.config.users.editor.delete_user")}
          </mwc-button>
          ${user.system_generated ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <paper-tooltip position="right">
                  ${this.hass.localize("ui.panel.config.users.editor.system_generated_users_not_removable")}
                </paper-tooltip>
              ` : ""}
        </div>
        <div slot="primaryAction">
          <mwc-button
            @click=${this._updateEntry}
            .disabled=${!this._name || this._submitting || user.system_generated}
          >
            ${this.hass.localize("ui.panel.config.users.editor.update_user")}
          </mwc-button>
          ${user.system_generated ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <paper-tooltip position="left">
                  ${this.hass.localize("ui.panel.config.users.editor.system_generated_users_not_editable")}
                </paper-tooltip>
              ` : ""}
        </div>
      </ha-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_nameChanged",
      value: function _nameChanged(ev) {
        this._error = undefined;
        this._name = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_adminChanged",
      value: async function _adminChanged(ev) {
        this._isAdmin = ev.target.checked;
      }
    }, {
      kind: "method",
      key: "_updateEntry",
      value: async function _updateEntry() {
        this._submitting = true;

        try {
          await this._params.updateEntry({
            name: this._name.trim(),
            group_ids: [this._isAdmin ? _data_user__WEBPACK_IMPORTED_MODULE_6__["SYSTEM_GROUP_ID_ADMIN"] : _data_user__WEBPACK_IMPORTED_MODULE_6__["SYSTEM_GROUP_ID_USER"]]
          });

          this._close();
        } catch (err) {
          this._error = (err === null || err === void 0 ? void 0 : err.message) || "Unknown error";
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_deleteEntry",
      value: async function _deleteEntry() {
        this._submitting = true;

        try {
          if (await this._params.removeEntry()) {
            this._params = undefined;
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
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        ha-dialog {
          --mdc-dialog-max-width: 500px;
        }
        .form {
          padding-top: 16px;
        }
        .secondary {
          color: var(--secondary-text-color);
        }
        .state {
          background-color: rgba(var(--rgb-primary-text-color), 0.15);
          border-radius: 16px;
          padding: 4px 8px;
          margin-top: 8px;
          display: inline-block;
        }
        .state:not(:first-child) {
          margin-left: 8px;
        }
        ha-switch {
          margin-top: 8px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWwtZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvdXNlcnMvZGlhbG9nLXVzZXItZGV0YWlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNsb3NlSGVhZGluZyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7XG4gIFNZU1RFTV9HUk9VUF9JRF9BRE1JTixcbiAgU1lTVEVNX0dST1VQX0lEX1VTRVIsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3VzZXJcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgaGFTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBVc2VyRGV0YWlsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctdXNlci1kZXRhaWxcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJkaWFsb2ctdXNlci1kZXRhaWxcIilcbmNsYXNzIERpYWxvZ1VzZXJEZXRhaWwgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25hbWUhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaXNBZG1pbj86IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogVXNlckRldGFpbERpYWxvZ1BhcmFtcztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdWJtaXR0aW5nID0gZmFsc2U7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBVc2VyRGV0YWlsRGlhbG9nUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX25hbWUgPSBwYXJhbXMuZW50cnkubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuX2lzQWRtaW4gPSBwYXJhbXMuZW50cnkuZ3JvdXBfaWRzWzBdID09PSBTWVNURU1fR1JPVVBfSURfQURNSU47XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCB1c2VyID0gdGhpcy5fcGFyYW1zLmVudHJ5O1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWRpYWxvZ1xuICAgICAgICBvcGVuXG4gICAgICAgIEBjbG9zaW5nPSR7dGhpcy5fY2xvc2V9XG4gICAgICAgIHNjcmltQ2xpY2tBY3Rpb25cbiAgICAgICAgZXNjYXBlS2V5QWN0aW9uXG4gICAgICAgIC5oZWFkaW5nPSR7Y3JlYXRlQ2xvc2VIZWFkaW5nKHRoaXMuaGFzcywgdXNlci5uYW1lKX1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke3RoaXMuX2Vycm9yID8gaHRtbGAgPGRpdiBjbGFzcz1cImVycm9yXCI+JHt0aGlzLl9lcnJvcn08L2Rpdj4gYCA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLmlkXCIpfTogJHt1c2VyLmlkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAke3VzZXIuaXNfb3duZXJcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3Iub3duZXJcIlxuICAgICAgICAgICAgICAgICAgICApfTwvc3BhblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgJHt1c2VyLnN5c3RlbV9nZW5lcmF0ZWRcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3Iuc3lzdGVtX2dlbmVyYXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAke3VzZXIuaXNfYWN0aXZlXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLmFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICl9PC9zcGFuXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lfVxuICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt1c2VyLnN5c3RlbV9nZW5lcmF0ZWR9XG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fbmFtZUNoYW5nZWR9XG4gICAgICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5uYW1lXCJcbiAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0ke3VzZXIuc3lzdGVtX2dlbmVyYXRlZH1cbiAgICAgICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9pc0FkbWlufVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fYWRtaW5DaGFuZ2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IuYWRtaW5cIil9XG4gICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICAgICR7IXRoaXMuX2lzQWRtaW5cbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICBUaGUgdXNlcnMgZ3JvdXAgaXMgYSB3b3JrIGluIHByb2dyZXNzLiBUaGUgdXNlciB3aWxsIGJlIHVuYWJsZVxuICAgICAgICAgICAgICAgICAgdG8gYWRtaW5pc3RlciB0aGUgaW5zdGFuY2UgdmlhIHRoZSBVSS4gV2UncmUgc3RpbGwgYXVkaXRpbmdcbiAgICAgICAgICAgICAgICAgIGFsbCBtYW5hZ2VtZW50IEFQSSBlbmRwb2ludHMgdG8gZW5zdXJlIHRoYXQgdGhleSBjb3JyZWN0bHlcbiAgICAgICAgICAgICAgICAgIGxpbWl0IGFjY2VzcyB0byBhZG1pbmlzdHJhdG9ycy5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzbG90PVwic2Vjb25kYXJ5QWN0aW9uXCI+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9kZWxldGVFbnRyeX1cbiAgICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3N1Ym1pdHRpbmcgfHwgdXNlci5zeXN0ZW1fZ2VuZXJhdGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IuZGVsZXRlX3VzZXJcIil9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICR7dXNlci5zeXN0ZW1fZ2VuZXJhdGVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5zeXN0ZW1fZ2VuZXJhdGVkX3VzZXJzX25vdF9yZW1vdmFibGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLXRvb2x0aXA+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc2xvdD1cInByaW1hcnlBY3Rpb25cIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdXBkYXRlRW50cnl9XG4gICAgICAgICAgICAuZGlzYWJsZWQ9JHshdGhpcy5fbmFtZSB8fFxuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGluZyB8fFxuICAgICAgICAgICAgdXNlci5zeXN0ZW1fZ2VuZXJhdGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IudXBkYXRlX3VzZXJcIil9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICR7dXNlci5zeXN0ZW1fZ2VuZXJhdGVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgcG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLnN5c3RlbV9nZW5lcmF0ZWRfdXNlcnNfbm90X2VkaXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX25hbWVDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9uYW1lID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWRtaW5DaGFuZ2VkKGV2KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5faXNBZG1pbiA9IGV2LnRhcmdldC5jaGVja2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRW50cnkoKSB7XG4gICAgdGhpcy5fc3VibWl0dGluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3BhcmFtcyEudXBkYXRlRW50cnkoe1xuICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRyaW0oKSxcbiAgICAgICAgZ3JvdXBfaWRzOiBbXG4gICAgICAgICAgdGhpcy5faXNBZG1pbiA/IFNZU1RFTV9HUk9VUF9JRF9BRE1JTiA6IFNZU1RFTV9HUk9VUF9JRF9VU0VSLFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9jbG9zZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fZXJyb3IgPSBlcnI/Lm1lc3NhZ2UgfHwgXCJVbmtub3duIGVycm9yXCI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kZWxldGVFbnRyeSgpIHtcbiAgICB0aGlzLl9zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgaWYgKGF3YWl0IHRoaXMuX3BhcmFtcyEucmVtb3ZlRW50cnkoKSkge1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIGhhLWRpYWxvZyB7XG4gICAgICAgICAgLS1tZGMtZGlhbG9nLW1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWNvbmRhcnkge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LXRleHQtY29sb3IpLCAwLjE1KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGU6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtc3dpdGNoIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGlhbG9nLXVzZXItZGV0YWlsXCI6IERpYWxvZ1VzZXJEZXRhaWw7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUdBOztBQUhBO0FBU0E7O0FBR0E7O0FBSEE7QUFTQTs7QUFHQTs7QUFIQTs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztBQUFBOzs7Ozs7O0FBZUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFHQTs7QUFIQTs7OztBQVlBO0FBQ0E7O0FBSUE7O0FBRUE7O0FBR0E7O0FBSEE7OztBQWpHQTtBQTZHQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEyQkE7OztBQTlNQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
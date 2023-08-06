(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["lovelace-dashboard-detail-dialog"],{

/***/ "./src/common/string/slugify.ts":
/*!**************************************!*\
  !*** ./src/common/string/slugify.ts ***!
  \**************************************/
/*! exports provided: slugify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
// https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
const slugify = value => {
  const a = "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b = "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");
  return value.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
  .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
  .replace(/&/g, "-and-") // Replace & with 'and'
  .replace(/[^\w-]+/g, "") // Remove all non-word characters
  .replace(/--+/g, "-") // Replace multiple - with single -
  .replace(/^-+/, "") // Trim - from start of text
  .replace(/-+$/, ""); // Trim - from end of text
};

/***/ }),

/***/ "./src/panels/config/lovelace/dashboards/dialog-lovelace-dashboard-detail.ts":
/*!***********************************************************************************!*\
  !*** ./src/panels/config/lovelace/dashboards/dialog-lovelace-dashboard-detail.ts ***!
  \***********************************************************************************/
/*! exports provided: DialogLovelaceDashboardDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogLovelaceDashboardDetail", function() { return DialogLovelaceDashboardDetail; });
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-dialog */ "./src/components/ha-dialog.ts");
/* harmony import */ var _components_ha_icon_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-icon-input */ "./src/components/ha-icon-input.ts");
/* harmony import */ var _common_string_slugify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/string/slugify */ "./src/common/string/slugify.ts");
/* harmony import */ var _data_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/panel */ "./src/data/panel.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
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








let DialogLovelaceDashboardDetail = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("dialog-lovelace-dashboard-detail")], function (_initialize, _LitElement) {
  class DialogLovelaceDashboardDetail extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogLovelaceDashboardDetail,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_urlPath",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_showInSidebar",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_title",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_requireAdmin",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
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
        this._urlPath = this._params.urlPath || "";

        if (this._params.dashboard) {
          this._showInSidebar = !!this._params.dashboard.show_in_sidebar;
          this._icon = this._params.dashboard.icon || "";
          this._title = this._params.dashboard.title || "";
          this._requireAdmin = this._params.dashboard.require_admin || false;
        } else {
          this._showInSidebar = true;
          this._icon = "";
          this._title = "";
          this._requireAdmin = false;
        }

        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$hass$userData, _this$hass$userData2, _this$_params$dashboa, _this$_params$dashboa2;

        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        const defaultPanelUrlPath = this.hass.defaultPanel;
        const urlInvalid = this._params.urlPath !== "lovelace" && !/^[a-zA-Z0-9_-]+-[a-zA-Z0-9_-]+$/.test(this._urlPath);
        const titleInvalid = !this._title.trim();
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <ha-dialog
        open
        @closing="${this._close}"
        scrimClickAction
        escapeKeyAction
        .heading=${Object(_components_ha_dialog__WEBPACK_IMPORTED_MODULE_2__["createCloseHeading"])(this.hass, this._params.urlPath ? this._title || this.hass.localize("ui.panel.config.lovelace.dashboards.detail.edit_dashboard") : this.hass.localize("ui.panel.config.lovelace.dashboards.detail.new_dashboard"))}
      >
        <div>
          ${this._params.dashboard && !this._params.dashboard.id ? this.hass.localize("ui.panel.config.lovelace.dashboards.cant_edit_yaml") : this._params.urlPath === "lovelace" ? this.hass.localize("ui.panel.config.lovelace.dashboards.cant_edit_default") : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <div class="error">${this._error}</div> ` : ""}
                <div class="form">
                  <paper-input
                    .value=${this._title}
                    @value-changed=${this._titleChanged}
                    .label=${this.hass.localize("ui.panel.config.lovelace.dashboards.detail.title")}
                    @blur=${((_this$hass$userData = this.hass.userData) === null || _this$hass$userData === void 0 ? void 0 : _this$hass$userData.showAdvanced) ? this._fillUrlPath : undefined}
                    .invalid=${titleInvalid}
                    .errorMessage=${this.hass.localize("ui.panel.config.lovelace.dashboards.detail.title_required")}
                    dialogInitialFocus
                  ></paper-input>
                  <ha-icon-input
                    .value=${this._icon}
                    @value-changed=${this._iconChanged}
                    .label=${this.hass.localize("ui.panel.config.lovelace.dashboards.detail.icon")}
                  ></ha-icon-input>
                  ${!this._params.dashboard && ((_this$hass$userData2 = this.hass.userData) === null || _this$hass$userData2 === void 0 ? void 0 : _this$hass$userData2.showAdvanced) ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                        <paper-input
                          .value=${this._urlPath}
                          @value-changed=${this._urlChanged}
                          .label=${this.hass.localize("ui.panel.config.lovelace.dashboards.detail.url")}
                          .errorMessage=${this.hass.localize("ui.panel.config.lovelace.dashboards.detail.url_error_msg")}
                          .invalid=${urlInvalid}
                        ></paper-input>
                      ` : ""}
                  <ha-switch
                    .checked=${this._showInSidebar}
                    @change=${this._showSidebarChanged}
                    >${this.hass.localize("ui.panel.config.lovelace.dashboards.detail.show_sidebar")}
                  </ha-switch>
                  <ha-switch
                    .checked=${this._requireAdmin}
                    @change=${this._requireAdminChanged}
                    >${this.hass.localize("ui.panel.config.lovelace.dashboards.detail.require_admin")}
                  </ha-switch>
                </div>
              `}
        </div>
        ${this._params.urlPath ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              ${((_this$_params$dashboa = this._params.dashboard) === null || _this$_params$dashboa === void 0 ? void 0 : _this$_params$dashboa.id) ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                    <mwc-button
                      slot="secondaryAction"
                      class="warning"
                      @click=${this._deleteDashboard}
                      .disabled=${this._submitting}
                    >
                      ${this.hass.localize("ui.panel.config.lovelace.dashboards.detail.delete")}
                    </mwc-button>
                  ` : ""}
              <mwc-button
                slot="secondaryAction"
                @click=${this._toggleDefault}
                .disabled=${this._params.urlPath === "lovelace" && defaultPanelUrlPath === "lovelace"}
              >
                ${this._params.urlPath === defaultPanelUrlPath ? this.hass.localize("ui.panel.config.lovelace.dashboards.detail.remove_default") : this.hass.localize("ui.panel.config.lovelace.dashboards.detail.set_default")}
              </mwc-button>
            ` : ""}
        <mwc-button
          slot="primaryAction"
          @click="${this._updateDashboard}"
          .disabled=${urlInvalid || titleInvalid || this._submitting}
        >
          ${this._params.urlPath ? ((_this$_params$dashboa2 = this._params.dashboard) === null || _this$_params$dashboa2 === void 0 ? void 0 : _this$_params$dashboa2.id) ? this.hass.localize("ui.panel.config.lovelace.dashboards.detail.update") : this.hass.localize("ui.common.close") : this.hass.localize("ui.panel.config.lovelace.dashboards.detail.create")}
        </mwc-button>
      </ha-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_urlChanged",
      value: function _urlChanged(ev) {
        this._error = undefined;
        this._urlPath = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_iconChanged",
      value: function _iconChanged(ev) {
        this._error = undefined;
        this._icon = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_titleChanged",
      value: function _titleChanged(ev) {
        var _this$hass$userData3;

        this._error = undefined;
        this._title = ev.detail.value;

        if (!((_this$hass$userData3 = this.hass.userData) === null || _this$hass$userData3 === void 0 ? void 0 : _this$hass$userData3.showAdvanced)) {
          this._fillUrlPath();
        }
      }
    }, {
      kind: "method",
      key: "_fillUrlPath",
      value: function _fillUrlPath() {
        var _this$hass$userData4;

        if (((_this$hass$userData4 = this.hass.userData) === null || _this$hass$userData4 === void 0 ? void 0 : _this$hass$userData4.showAdvanced) && this._urlPath || !this._title) {
          return;
        }

        const slugifyTitle = Object(_common_string_slugify__WEBPACK_IMPORTED_MODULE_4__["slugify"])(this._title);
        this._urlPath = slugifyTitle.includes("-") ? slugifyTitle : `lovelace-${slugifyTitle}`;
      }
    }, {
      kind: "method",
      key: "_showSidebarChanged",
      value: function _showSidebarChanged(ev) {
        this._showInSidebar = ev.target.checked;
      }
    }, {
      kind: "method",
      key: "_requireAdminChanged",
      value: function _requireAdminChanged(ev) {
        this._requireAdmin = ev.target.checked;
      }
    }, {
      kind: "method",
      key: "_toggleDefault",
      value: function _toggleDefault() {
        var _this$_params;

        const urlPath = (_this$_params = this._params) === null || _this$_params === void 0 ? void 0 : _this$_params.urlPath;

        if (!urlPath) {
          return;
        }

        Object(_data_panel__WEBPACK_IMPORTED_MODULE_5__["setDefaultPanel"])(this, urlPath === this.hass.defaultPanel ? _data_panel__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_PANEL"] : urlPath);
      }
    }, {
      kind: "method",
      key: "_updateDashboard",
      value: async function _updateDashboard() {
        var _this$_params2, _this$_params$dashboa3;

        if (((_this$_params2 = this._params) === null || _this$_params2 === void 0 ? void 0 : _this$_params2.urlPath) && !((_this$_params$dashboa3 = this._params.dashboard) === null || _this$_params$dashboa3 === void 0 ? void 0 : _this$_params$dashboa3.id)) {
          this._close();
        }

        this._submitting = true;

        try {
          const values = {
            require_admin: this._requireAdmin,
            show_in_sidebar: this._showInSidebar,
            icon: this._icon || undefined,
            title: this._title
          };

          if (this._params.dashboard) {
            await this._params.updateDashboard(values);
          } else {
            values.url_path = this._urlPath.trim();
            values.mode = "storage";
            await this._params.createDashboard(values);
          }

          this._close();
        } catch (err) {
          this._error = (err === null || err === void 0 ? void 0 : err.message) || "Unknown error";
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_deleteDashboard",
      value: async function _deleteDashboard() {
        this._submitting = true;

        try {
          if (await this._params.removeDashboard()) {
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
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_6__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
        ha-switch {
          padding: 16px 0;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG92ZWxhY2UtZGFzaGJvYXJkLWRldGFpbC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9zbHVnaWZ5LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2xvdmVsYWNlL2Rhc2hib2FyZHMvZGlhbG9nLWxvdmVsYWNlLWRhc2hib2FyZC1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaGFnZW1hbm4vMzgyYWRmYzU3YWRiZDVhZjA3OGRjOTNmZWVmMDFmZTFcbmV4cG9ydCBjb25zdCBzbHVnaWZ5ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYSA9XG4gICAgXCLDoMOhw6TDosOjw6XEg8OmxIXDp8SHxI3EkcSPw6jDqcSbxJfDq8OqxJnEn8e14binw6zDrcOvw67Er8WC4bi/x7nFhMWIw7HDssOzw7bDtMWTw7jhuZXFlcWZw5/Fn8WbxaHImcWlyJvDucO6w7zDu8eYxa/FscWrxbPhuoPhuo3Dv8O9xbrFvsW8wrcvXyw6O1wiO1xuICBjb25zdCBiID1cbiAgICBcImFhYWFhYWFhYWNjY2RkZWVlZWVlZWdnaGlpaWlpbG1ubm5ub29vb29vcHJyc3Nzc3N0dHV1dXV1dXV1dXd4eXl6enotLS0tLS1cIjtcbiAgY29uc3QgcCA9IG5ldyBSZWdFeHAoYS5zcGxpdChcIlwiKS5qb2luKFwifFwiKSwgXCJnXCIpO1xuXG4gIHJldHVybiB2YWx1ZVxuICAgIC50b1N0cmluZygpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIikgLy8gUmVwbGFjZSBzcGFjZXMgd2l0aCAtXG4gICAgLnJlcGxhY2UocCwgKGMpID0+IGIuY2hhckF0KGEuaW5kZXhPZihjKSkpIC8vIFJlcGxhY2Ugc3BlY2lhbCBjaGFyYWN0ZXJzXG4gICAgLnJlcGxhY2UoLyYvZywgXCItYW5kLVwiKSAvLyBSZXBsYWNlICYgd2l0aCAnYW5kJ1xuICAgIC5yZXBsYWNlKC9bXlxcdy1dKy9nLCBcIlwiKSAvLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnNcbiAgICAucmVwbGFjZSgvLS0rL2csIFwiLVwiKSAvLyBSZXBsYWNlIG11bHRpcGxlIC0gd2l0aCBzaW5nbGUgLVxuICAgIC5yZXBsYWNlKC9eLSsvLCBcIlwiKSAvLyBUcmltIC0gZnJvbSBzdGFydCBvZiB0ZXh0XG4gICAgLnJlcGxhY2UoLy0rJC8sIFwiXCIpOyAvLyBUcmltIC0gZnJvbSBlbmQgb2YgdGV4dFxufTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uL213Yy1idXR0b25cIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xvc2VIZWFkaW5nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZGlhbG9nXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24taW5wdXRcIjtcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvc2x1Z2lmeVwiO1xuaW1wb3J0IHtcbiAgTG92ZWxhY2VEYXNoYm9hcmQsXG4gIExvdmVsYWNlRGFzaGJvYXJkQ3JlYXRlUGFyYW1zLFxuICBMb3ZlbGFjZURhc2hib2FyZE11dGFibGVQYXJhbXMsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBERUZBVUxUX1BBTkVMLCBzZXREZWZhdWx0UGFuZWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9wYW5lbFwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBoYVN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlRGFzaGJvYXJkRGV0YWlsc0RpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWxvdmVsYWNlLWRhc2hib2FyZC1kZXRhaWxcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJkaWFsb2ctbG92ZWxhY2UtZGFzaGJvYXJkLWRldGFpbFwiKVxuZXhwb3J0IGNsYXNzIERpYWxvZ0xvdmVsYWNlRGFzaGJvYXJkRGV0YWlsIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wYXJhbXM/OiBMb3ZlbGFjZURhc2hib2FyZERldGFpbHNEaWFsb2dQYXJhbXM7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdXJsUGF0aCE6IExvdmVsYWNlRGFzaGJvYXJkW1widXJsX3BhdGhcIl07XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2hvd0luU2lkZWJhciE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaWNvbiE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF90aXRsZSE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9yZXF1aXJlQWRtaW4hOiBMb3ZlbGFjZURhc2hib2FyZFtcInJlcXVpcmVfYWRtaW5cIl07XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3VibWl0dGluZyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKFxuICAgIHBhcmFtczogTG92ZWxhY2VEYXNoYm9hcmREZXRhaWxzRGlhbG9nUGFyYW1zXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl91cmxQYXRoID0gdGhpcy5fcGFyYW1zLnVybFBhdGggfHwgXCJcIjtcbiAgICBpZiAodGhpcy5fcGFyYW1zLmRhc2hib2FyZCkge1xuICAgICAgdGhpcy5fc2hvd0luU2lkZWJhciA9ICEhdGhpcy5fcGFyYW1zLmRhc2hib2FyZC5zaG93X2luX3NpZGViYXI7XG4gICAgICB0aGlzLl9pY29uID0gdGhpcy5fcGFyYW1zLmRhc2hib2FyZC5pY29uIHx8IFwiXCI7XG4gICAgICB0aGlzLl90aXRsZSA9IHRoaXMuX3BhcmFtcy5kYXNoYm9hcmQudGl0bGUgfHwgXCJcIjtcbiAgICAgIHRoaXMuX3JlcXVpcmVBZG1pbiA9IHRoaXMuX3BhcmFtcy5kYXNoYm9hcmQucmVxdWlyZV9hZG1pbiB8fCBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0luU2lkZWJhciA9IHRydWU7XG4gICAgICB0aGlzLl9pY29uID0gXCJcIjtcbiAgICAgIHRoaXMuX3RpdGxlID0gXCJcIjtcbiAgICAgIHRoaXMuX3JlcXVpcmVBZG1pbiA9IGZhbHNlO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRQYW5lbFVybFBhdGggPSB0aGlzLmhhc3MuZGVmYXVsdFBhbmVsO1xuICAgIGNvbnN0IHVybEludmFsaWQgPVxuICAgICAgdGhpcy5fcGFyYW1zLnVybFBhdGggIT09IFwibG92ZWxhY2VcIiAmJlxuICAgICAgIS9eW2EtekEtWjAtOV8tXSstW2EtekEtWjAtOV8tXSskLy50ZXN0KHRoaXMuX3VybFBhdGgpO1xuICAgIGNvbnN0IHRpdGxlSW52YWxpZCA9ICF0aGlzLl90aXRsZS50cmltKCk7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtZGlhbG9nXG4gICAgICAgIG9wZW5cbiAgICAgICAgQGNsb3Npbmc9XCIke3RoaXMuX2Nsb3NlfVwiXG4gICAgICAgIHNjcmltQ2xpY2tBY3Rpb25cbiAgICAgICAgZXNjYXBlS2V5QWN0aW9uXG4gICAgICAgIC5oZWFkaW5nPSR7Y3JlYXRlQ2xvc2VIZWFkaW5nKFxuICAgICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgICB0aGlzLl9wYXJhbXMudXJsUGF0aFxuICAgICAgICAgICAgPyB0aGlzLl90aXRsZSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMuZGV0YWlsLmVkaXRfZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5kYXNoYm9hcmRzLmRldGFpbC5uZXdfZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7dGhpcy5fcGFyYW1zLmRhc2hib2FyZCAmJiAhdGhpcy5fcGFyYW1zLmRhc2hib2FyZC5pZFxuICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5jYW50X2VkaXRfeWFtbFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdGhpcy5fcGFyYW1zLnVybFBhdGggPT09IFwibG92ZWxhY2VcIlxuICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5jYW50X2VkaXRfZGVmYXVsdFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAke3RoaXMuX2Vycm9yXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgIDxkaXYgY2xhc3M9XCJlcnJvclwiPiR7dGhpcy5fZXJyb3J9PC9kaXY+IGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3RpdGxlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMuZGV0YWlsLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9JHt0aGlzLmhhc3MudXNlckRhdGE/LnNob3dBZHZhbmNlZFxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZmlsbFVybFBhdGhcbiAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgLmludmFsaWQ9JHt0aXRsZUludmFsaWR9XG4gICAgICAgICAgICAgICAgICAgIC5lcnJvck1lc3NhZ2U9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5kZXRhaWwudGl0bGVfcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dJbml0aWFsRm9jdXNcbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgICAgPGhhLWljb24taW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5faWNvbn1cbiAgICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9pY29uQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMuZGV0YWlsLmljb25cIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtaWNvbi1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICR7IXRoaXMuX3BhcmFtcy5kYXNoYm9hcmQgJiYgdGhpcy5oYXNzLnVzZXJEYXRhPy5zaG93QWR2YW5jZWRcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3VybFBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdXJsQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMuZGV0YWlsLnVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvck1lc3NhZ2U9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5kZXRhaWwudXJsX2Vycm9yX21zZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnZhbGlkPSR7dXJsSW52YWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX3Nob3dJblNpZGViYXJ9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9zaG93U2lkZWJhckNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5kYXNoYm9hcmRzLmRldGFpbC5zaG93X3NpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oYS1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5fcmVxdWlyZUFkbWlufVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fcmVxdWlyZUFkbWluQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMuZGV0YWlsLnJlcXVpcmVfYWRtaW5cIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oYS1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke3RoaXMuX3BhcmFtcy51cmxQYXRoXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAke3RoaXMuX3BhcmFtcy5kYXNoYm9hcmQ/LmlkXG4gICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzZWNvbmRhcnlBY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fZGVsZXRlRGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMuZGV0YWlsLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwic2Vjb25kYXJ5QWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90b2dnbGVEZWZhdWx0fVxuICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3BhcmFtcy51cmxQYXRoID09PSBcImxvdmVsYWNlXCIgJiZcbiAgICAgICAgICAgICAgICBkZWZhdWx0UGFuZWxVcmxQYXRoID09PSBcImxvdmVsYWNlXCJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuX3BhcmFtcy51cmxQYXRoID09PSBkZWZhdWx0UGFuZWxVcmxQYXRoXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5sb3ZlbGFjZS5kYXNoYm9hcmRzLmRldGFpbC5yZW1vdmVfZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMuZGV0YWlsLnNldF9kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBzbG90PVwicHJpbWFyeUFjdGlvblwiXG4gICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl91cGRhdGVEYXNoYm9hcmR9XCJcbiAgICAgICAgICAuZGlzYWJsZWQ9JHt1cmxJbnZhbGlkIHx8IHRpdGxlSW52YWxpZCB8fCB0aGlzLl9zdWJtaXR0aW5nfVxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLl9wYXJhbXMudXJsUGF0aFxuICAgICAgICAgICAgPyB0aGlzLl9wYXJhbXMuZGFzaGJvYXJkPy5pZFxuICAgICAgICAgICAgICA/IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmxvdmVsYWNlLmRhc2hib2FyZHMuZGV0YWlsLnVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbW1vbi5jbG9zZVwiKVxuICAgICAgICAgICAgOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcubG92ZWxhY2UuZGFzaGJvYXJkcy5kZXRhaWwuY3JlYXRlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgPC9oYS1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3VybENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3VybFBhdGggPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9pY29uQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faWNvbiA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3RpdGxlQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdGl0bGUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKCF0aGlzLmhhc3MudXNlckRhdGE/LnNob3dBZHZhbmNlZCkge1xuICAgICAgdGhpcy5fZmlsbFVybFBhdGgoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maWxsVXJsUGF0aCgpIHtcbiAgICBpZiAoKHRoaXMuaGFzcy51c2VyRGF0YT8uc2hvd0FkdmFuY2VkICYmIHRoaXMuX3VybFBhdGgpIHx8ICF0aGlzLl90aXRsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNsdWdpZnlUaXRsZSA9IHNsdWdpZnkodGhpcy5fdGl0bGUpO1xuICAgIHRoaXMuX3VybFBhdGggPSBzbHVnaWZ5VGl0bGUuaW5jbHVkZXMoXCItXCIpXG4gICAgICA/IHNsdWdpZnlUaXRsZVxuICAgICAgOiBgbG92ZWxhY2UtJHtzbHVnaWZ5VGl0bGV9YDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dTaWRlYmFyQ2hhbmdlZChldjogRXZlbnQpIHtcbiAgICB0aGlzLl9zaG93SW5TaWRlYmFyID0gKGV2LnRhcmdldCBhcyBIYVN3aXRjaCkuY2hlY2tlZDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcXVpcmVBZG1pbkNoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgdGhpcy5fcmVxdWlyZUFkbWluID0gKGV2LnRhcmdldCBhcyBIYVN3aXRjaCkuY2hlY2tlZDtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZURlZmF1bHQoKSB7XG4gICAgY29uc3QgdXJsUGF0aCA9IHRoaXMuX3BhcmFtcz8udXJsUGF0aDtcbiAgICBpZiAoIXVybFBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0RGVmYXVsdFBhbmVsKFxuICAgICAgdGhpcyxcbiAgICAgIHVybFBhdGggPT09IHRoaXMuaGFzcy5kZWZhdWx0UGFuZWwgPyBERUZBVUxUX1BBTkVMIDogdXJsUGF0aFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVEYXNoYm9hcmQoKSB7XG4gICAgaWYgKHRoaXMuX3BhcmFtcz8udXJsUGF0aCAmJiAhdGhpcy5fcGFyYW1zLmRhc2hib2FyZD8uaWQpIHtcbiAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZXM6IFBhcnRpYWw8TG92ZWxhY2VEYXNoYm9hcmRNdXRhYmxlUGFyYW1zPiA9IHtcbiAgICAgICAgcmVxdWlyZV9hZG1pbjogdGhpcy5fcmVxdWlyZUFkbWluLFxuICAgICAgICBzaG93X2luX3NpZGViYXI6IHRoaXMuX3Nob3dJblNpZGViYXIsXG4gICAgICAgIGljb246IHRoaXMuX2ljb24gfHwgdW5kZWZpbmVkLFxuICAgICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuX3BhcmFtcyEuZGFzaGJvYXJkKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3BhcmFtcyEudXBkYXRlRGFzaGJvYXJkKHZhbHVlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAodmFsdWVzIGFzIExvdmVsYWNlRGFzaGJvYXJkQ3JlYXRlUGFyYW1zKS51cmxfcGF0aCA9IHRoaXMuX3VybFBhdGgudHJpbSgpO1xuICAgICAgICAodmFsdWVzIGFzIExvdmVsYWNlRGFzaGJvYXJkQ3JlYXRlUGFyYW1zKS5tb2RlID0gXCJzdG9yYWdlXCI7XG4gICAgICAgIGF3YWl0IHRoaXMuX3BhcmFtcyEuY3JlYXRlRGFzaGJvYXJkKFxuICAgICAgICAgIHZhbHVlcyBhcyBMb3ZlbGFjZURhc2hib2FyZENyZWF0ZVBhcmFtc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyPy5tZXNzYWdlIHx8IFwiVW5rbm93biBlcnJvclwiO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlRGFzaGJvYXJkKCkge1xuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoYXdhaXQgdGhpcy5fcGFyYW1zIS5yZW1vdmVEYXNoYm9hcmQoKSkge1xuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1zd2l0Y2gge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctbG92ZWxhY2UtZGFzaGJvYXJkLWRldGFpbFwiOiBEaWFsb2dMb3ZlbGFjZURhc2hib2FyZERldGFpbDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQUtBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBckNBO0FBQUE7QUFBQTtBQUFBO0FBdUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7QUFHQTs7O0FBR0E7OztBQWFBO0FBU0E7OztBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTs7OztBQU1BO0FBQ0E7QUFDQTs7QUFJQTs7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUdBOztBQVhBOztBQWdCQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7O0FBS0E7O0FBRUE7QUFFQTs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBUkE7OztBQWdCQTtBQUNBOztBQUdBOztBQXRCQTs7O0FBa0NBO0FBQ0E7O0FBRUE7OztBQTNIQTtBQXVJQTtBQXZMQTtBQUFBO0FBQUE7QUFBQTtBQTBMQTtBQUNBO0FBQ0E7QUE1TEE7QUFBQTtBQUFBO0FBQUE7QUErTEE7QUFDQTtBQUNBO0FBak1BO0FBQUE7QUFBQTtBQUFBO0FBbU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXpNQTtBQUFBO0FBQUE7QUFBQTtBQTJNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFwTkE7QUFBQTtBQUFBO0FBQUE7QUF1TkE7QUFDQTtBQXhOQTtBQUFBO0FBQUE7QUFBQTtBQTJOQTtBQUNBO0FBNU5BO0FBQUE7QUFBQTtBQUFBO0FBOE5BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBdk9BO0FBQUE7QUFBQTtBQUFBO0FBeU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcFFBO0FBQUE7QUFBQTtBQUFBO0FBdVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL1FBO0FBQUE7QUFBQTtBQUFBO0FBa1JBO0FBQ0E7QUFuUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNSQTs7OztBQUFBO0FBUUE7QUE5UkE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
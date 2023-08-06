(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~ed363bfa"],{

/***/ "./src/layouts/hass-tabs-subpage.ts":
/*!******************************************!*\
  !*** ./src/layouts/hass-tabs-subpage.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-ripple */ "./node_modules/@material/mwc-ripple/mwc-ripple.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
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











let HassTabsSubpage = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hass-tabs-subpage")], function (_initialize, _LitElement) {
  class HassTabsSubpage extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HassTabsSubpage,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: String,
        attribute: "back-path"
      })],
      key: "backPath",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "backCallback",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean
      })],
      key: "hassio",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean,
        attribute: "main-page"
      })],
      key: "mainPage",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "tabs",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "narrow",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_activeTab",
      value: void 0
    }, {
      kind: "field",
      key: "_getTabs",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])((tabs, activeTab, showAdvanced, _components, _language, _narrow) => {
          const shownTabs = tabs.filter(page => (!page.component || page.core || Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["isComponentLoaded"])(this.hass, page.component)) && (!page.advancedOnly || showAdvanced));
          return shownTabs.map(page => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <div
              class="tab ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            active: page === activeTab
          })}"
              @click=${this._tabTapped}
              .path=${page.path}
            >
              ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <ha-icon .icon=${page.icon}></ha-icon> ` : ""}
              ${!this.narrow || page === activeTab ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                    <span class="name"
                      >${page.translationKey ? this.hass.localize(page.translationKey) : page.name}</span
                    >
                  ` : ""}
              <mwc-ripple></mwc-ripple>
            </div>
          `);
        });
      }

    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HassTabsSubpage.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("route")) {
          this._activeTab = this.tabs.find(tab => `${this.route.prefix}${this.route.path}`.includes(tab.path));
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$hass$userData;

        const tabs = this._getTabs(this.tabs, this._activeTab, (_this$hass$userData = this.hass.userData) === null || _this$hass$userData === void 0 ? void 0 : _this$hass$userData.showAdvanced, this.hass.config.components, this.hass.language, this.narrow);

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div class="toolbar">
        ${this.mainPage ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <ha-menu-button
                .hass=${this.hass}
                .hassio=${this.hassio}
                .narrow=${this.narrow}
              ></ha-menu-button>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <ha-paper-icon-button-arrow-prev
                aria-label="Back"
                .hassio=${this.hassio}
                @click=${this._backTapped}
              ></ha-paper-icon-button-arrow-prev>
            `}
        ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <div class="main-title"><slot name="header"></slot></div> ` : ""}
        ${tabs.length > 1 || !this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <div id="tabbar" class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
          "bottom-bar": this.narrow
        })}>
                ${tabs}
              </div>
            ` : ""}
        <div id="toolbar-icon">
          <slot name="toolbar-icon"></slot>
        </div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_tabTapped",
      value: function _tabTapped(ev) {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, ev.currentTarget.path, true);
      }
    }, {
      kind: "method",
      key: "_backTapped",
      value: function _backTapped() {
        if (this.backPath) {
          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, this.backPath);
          return;
        }

        if (this.backCallback) {
          this.backCallback();
          return;
        }

        history.back();
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      :host {
        display: block;
        height: 100%;
        background-color: var(--primary-background-color);
      }

      .toolbar {
        display: flex;
        align-items: center;
        font-size: 20px;
        height: 65px;
        background-color: var(--sidebar-background-color);
        font-weight: 400;
        color: var(--sidebar-text-color);
        border-bottom: 1px solid var(--divider-color);
        padding: 0 16px;
        box-sizing: border-box;
      }

      #tabbar {
        display: flex;
        font-size: 14px;
      }

      #tabbar.bottom-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 16px;
        box-sizing: border-box;
        background-color: var(--sidebar-background-color);
        border-top: 1px solid var(--divider-color);
        justify-content: space-between;
        z-index: 1;
        font-size: 12px;
        width: 100%;
      }

      #tabbar:not(.bottom-bar) {
        flex: 1;
        justify-content: center;
      }

      .tab {
        padding: 0 32px;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 64px;
        cursor: pointer;
      }

      .name {
        white-space: nowrap;
      }

      .tab.active {
        color: var(--primary-color);
      }

      #tabbar:not(.bottom-bar) .tab.active {
        border-bottom: 2px solid var(--primary-color);
      }

      .bottom-bar .tab {
        padding: 0 16px;
        width: 20%;
        min-width: 0;
      }

      :host(:not([narrow])) #toolbar-icon {
        min-width: 40px;
      }

      ha-menu-button,
      ha-paper-icon-button-arrow-prev,
      ::slotted([slot="toolbar-icon"]) {
        flex-shrink: 0;
        pointer-events: auto;
        color: var(--sidebar-icon-color);
      }

      .main-title {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 40px;
        line-height: 20px;
      }

      .content {
        position: relative;
        width: 100%;
        height: calc(100% - 65px);
        overflow-y: auto;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([narrow]) .content {
        height: calc(100% - 128px);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWFyZWFzfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLWNvbmZpZy1jb3JlfnBhbmVsLWNvbmZpZy1jdXN0b21pemV+cGFuZWwtY29uZmlnLWRldn5lZDM2M2JmYS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBtYXRlcmlhbC9td2MtcmlwcGxlXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBSb3V0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZU5hdmlnYXRpb24ge1xuICBwYXRoOiBzdHJpbmc7XG4gIHRyYW5zbGF0aW9uS2V5Pzogc3RyaW5nO1xuICBjb21wb25lbnQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvcmU/OiBib29sZWFuO1xuICBhZHZhbmNlZE9ubHk/OiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICBpbmZvPzogYW55O1xufVxuXG5AY3VzdG9tRWxlbWVudChcImhhc3MtdGFicy1zdWJwYWdlXCIpXG5jbGFzcyBIYXNzVGFic1N1YnBhZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImJhY2stcGF0aFwiIH0pIHB1YmxpYyBiYWNrUGF0aD86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgYmFja0NhbGxiYWNrPzogKCkgPT4gdm9pZDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBoYXNzaW8gPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwibWFpbi1wYWdlXCIgfSkgcHVibGljIG1haW5QYWdlID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHJvdXRlITogUm91dGU7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHRhYnMhOiBQYWdlTmF2aWdhdGlvbltdO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcHVibGljIG5hcnJvdyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FjdGl2ZVRhYj86IFBhZ2VOYXZpZ2F0aW9uO1xuXG4gIHByaXZhdGUgX2dldFRhYnMgPSBtZW1vaXplT25lKFxuICAgIChcbiAgICAgIHRhYnM6IFBhZ2VOYXZpZ2F0aW9uW10sXG4gICAgICBhY3RpdmVUYWI6IFBhZ2VOYXZpZ2F0aW9uIHwgdW5kZWZpbmVkLFxuICAgICAgc2hvd0FkdmFuY2VkOiBib29sZWFuIHwgdW5kZWZpbmVkLFxuICAgICAgX2NvbXBvbmVudHMsXG4gICAgICBfbGFuZ3VhZ2UsXG4gICAgICBfbmFycm93XG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBzaG93blRhYnMgPSB0YWJzLmZpbHRlcihcbiAgICAgICAgKHBhZ2UpID0+XG4gICAgICAgICAgKCFwYWdlLmNvbXBvbmVudCB8fFxuICAgICAgICAgICAgcGFnZS5jb3JlIHx8XG4gICAgICAgICAgICBpc0NvbXBvbmVudExvYWRlZCh0aGlzLmhhc3MsIHBhZ2UuY29tcG9uZW50KSkgJiZcbiAgICAgICAgICAoIXBhZ2UuYWR2YW5jZWRPbmx5IHx8IHNob3dBZHZhbmNlZClcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBzaG93blRhYnMubWFwKFxuICAgICAgICAocGFnZSkgPT5cbiAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cInRhYiAke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHBhZ2UgPT09IGFjdGl2ZVRhYixcbiAgICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdGFiVGFwcGVkfVxuICAgICAgICAgICAgICAucGF0aD0ke3BhZ2UucGF0aH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHt0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICAgID8gaHRtbGAgPGhhLWljb24gLmljb249JHtwYWdlLmljb259PjwvaGEtaWNvbj4gYFxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgJHshdGhpcy5uYXJyb3cgfHwgcGFnZSA9PT0gYWN0aXZlVGFiXG4gICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgID4ke3BhZ2UudHJhbnNsYXRpb25LZXlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKHBhZ2UudHJhbnNsYXRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhZ2UubmFtZX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgPG13Yy1yaXBwbGU+PC9td2MtcmlwcGxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInJvdXRlXCIpKSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYWIgPSB0aGlzLnRhYnMuZmluZCgodGFiKSA9PlxuICAgICAgICBgJHt0aGlzLnJvdXRlLnByZWZpeH0ke3RoaXMucm91dGUucGF0aH1gLmluY2x1ZGVzKHRhYi5wYXRoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy5fZ2V0VGFicyhcbiAgICAgIHRoaXMudGFicyxcbiAgICAgIHRoaXMuX2FjdGl2ZVRhYixcbiAgICAgIHRoaXMuaGFzcy51c2VyRGF0YT8uc2hvd0FkdmFuY2VkLFxuICAgICAgdGhpcy5oYXNzLmNvbmZpZy5jb21wb25lbnRzLFxuICAgICAgdGhpcy5oYXNzLmxhbmd1YWdlLFxuICAgICAgdGhpcy5uYXJyb3dcbiAgICApO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuICAgICAgICAke3RoaXMubWFpblBhZ2VcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgIC5oYXNzaW89JHt0aGlzLmhhc3Npb31cbiAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFja1wiXG4gICAgICAgICAgICAgICAgLmhhc3Npbz0ke3RoaXMuaGFzc2lvfVxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2JhY2tUYXBwZWR9XG4gICAgICAgICAgICAgID48L2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICAke3RoaXMubmFycm93XG4gICAgICAgICAgPyBodG1sYCA8ZGl2IGNsYXNzPVwibWFpbi10aXRsZVwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+IGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7dGFicy5sZW5ndGggPiAxIHx8ICF0aGlzLm5hcnJvd1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRhYmJhclwiIGNsYXNzPSR7Y2xhc3NNYXAoeyBcImJvdHRvbS1iYXJcIjogdGhpcy5uYXJyb3cgfSl9PlxuICAgICAgICAgICAgICAgICR7dGFic31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8ZGl2IGlkPVwidG9vbGJhci1pY29uXCI+XG4gICAgICAgICAgPHNsb3QgbmFtZT1cInRvb2xiYXItaWNvblwiPjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF90YWJUYXBwZWQoZXY6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBuYXZpZ2F0ZSh0aGlzLCAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLnBhdGgsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmFja1RhcHBlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5iYWNrUGF0aCkge1xuICAgICAgbmF2aWdhdGUodGhpcywgdGhpcy5iYWNrUGF0aCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmJhY2tDYWxsYmFjaykge1xuICAgICAgdGhpcy5iYWNrQ2FsbGJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC50b29sYmFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgI3RhYmJhciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgI3RhYmJhci5ib3R0b20tYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgICN0YWJiYXI6bm90KC5ib3R0b20tYmFyKSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAudGFiIHtcbiAgICAgICAgcGFkZGluZzogMCAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm5hbWUge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICAudGFiLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgI3RhYmJhcjpub3QoLmJvdHRvbS1iYXIpIC50YWIuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuYm90dG9tLWJhciAudGFiIHtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW25hcnJvd10pKSAjdG9vbGJhci1pY29uIHtcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICBoYS1tZW51LWJ1dHRvbixcbiAgICAgIGhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXYsXG4gICAgICA6OnNsb3R0ZWQoW3Nsb3Q9XCJ0b29sYmFyLWljb25cIl0pIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1pY29uLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1haW4tdGl0bGUge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgbWF4LWhlaWdodDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW25hcnJvd10pIC5jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjhweCk7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGFzcy10YWJzLXN1YnBhZ2VcIjogSGFzc1RhYnNTdWJwYWdlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFQTs7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQUE7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7QUFTQTtBQVFBOztBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFHQTs7QUFHQTs7QUFIQTs7O0FBYkE7QUEwQkE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVFBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTs7QUFMQTs7O0FBV0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFIQTs7Ozs7Ozs7QUFwQkE7QUFtQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBHQTs7O0FBcFBBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
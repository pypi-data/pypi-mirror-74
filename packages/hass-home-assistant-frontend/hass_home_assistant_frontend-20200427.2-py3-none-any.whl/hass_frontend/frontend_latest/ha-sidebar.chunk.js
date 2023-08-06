(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["ha-sidebar"],{

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class HaIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("ha-icon", HaIcon);

/***/ }),

/***/ "./src/components/ha-sidebar.ts":
/*!**************************************!*\
  !*** ./src/components/ha-sidebar.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/panel */ "./src/data/panel.ts");
/* harmony import */ var _data_persistent_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/persistent_notification */ "./src/data/persistent_notification.ts");
/* harmony import */ var _external_app_external_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../external_app/external_config */ "./src/external_app/external_config.ts");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _ha_menu_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _user_ha_user_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/ha-user-badge */ "./src/components/user/ha-user-badge.ts");
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


















const SHOW_AFTER_SPACER = ["config", "developer-tools", "hassio"];
const SUPPORT_SCROLL_IF_NEEDED = ("scrollIntoViewIfNeeded" in document.body);
const SORT_VALUE_URL_PATHS = {
  map: 1,
  logbook: 2,
  history: 3,
  "developer-tools": 9,
  hassio: 10,
  config: 11
};

const panelSorter = (a, b) => {
  // Put all the Lovelace at the top.
  const aLovelace = a.component_name === "lovelace";
  const bLovelace = b.component_name === "lovelace";

  if (aLovelace && bLovelace) {
    return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_9__["compare"])(a.title, b.title);
  }

  if (aLovelace && !bLovelace) {
    return -1;
  }

  if (bLovelace) {
    return 1;
  }

  const aBuiltIn = (a.url_path in SORT_VALUE_URL_PATHS);
  const bBuiltIn = (b.url_path in SORT_VALUE_URL_PATHS);

  if (aBuiltIn && bBuiltIn) {
    return SORT_VALUE_URL_PATHS[a.url_path] - SORT_VALUE_URL_PATHS[b.url_path];
  }

  if (aBuiltIn) {
    return -1;
  }

  if (bBuiltIn) {
    return 1;
  } // both not built in, sort by title


  return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_9__["compare"])(a.title, b.title);
};

const computePanels = hass => {
  const panels = hass.panels;

  if (!panels) {
    return [[], []];
  }

  const beforeSpacer = [];
  const afterSpacer = [];
  Object.values(panels).forEach(panel => {
    if (!panel.title || panel.url_path === hass.defaultPanel) {
      return;
    }

    (SHOW_AFTER_SPACER.includes(panel.url_path) ? afterSpacer : beforeSpacer).push(panel);
  });
  beforeSpacer.sort(panelSorter);
  afterSpacer.sort(panelSorter);
  return [beforeSpacer, afterSpacer];
};
/*
 * @appliesMixin LocalizeMixin
 */


let HaSidebar = _decorate(null, function (_initialize, _LitElement) {
  class HaSidebar extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaSidebar,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean
      })],
      key: "alwaysExpand",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_externalConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_notifications",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "_rtl",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_mouseLeaveTimeout",
      value: void 0
    }, {
      kind: "field",
      key: "_tooltipHideTimeout",
      value: void 0
    }, {
      kind: "field",
      key: "_recentKeydownActiveUntil",

      value() {
        return 0;
      }

    }, {
      kind: "method",
      key: "render",
      value: // property used only in css
      // @ts-ignore
      function render() {
        const hass = this.hass;

        if (!hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]``;
        }

        const [beforeSpacer, afterSpacer] = computePanels(hass);
        let notificationCount = this._notifications ? this._notifications.length : 0;

        for (const entityId in hass.states) {
          if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__["computeDomain"])(entityId) === "configurator") {
            notificationCount++;
          }
        }

        const defaultPanel = Object(_data_panel__WEBPACK_IMPORTED_MODULE_11__["getDefaultPanel"])(hass);
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <div class="menu">
        ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
              <paper-icon-button
                aria-label=${hass.localize("ui.sidebar.sidebar_toggle")}
                .icon=${hass.dockedSidebar === "docked" ? "hass:menu-open" : "hass:menu"}
                @click=${this._toggleSidebar}
              ></paper-icon-button>
            ` : ""}
        <span class="title">Home Assistant</span>
      </div>
      <paper-listbox
        attr-for-selected="data-panel"
        .selected=${hass.panelUrl}
        @focusin=${this._listboxFocusIn}
        @focusout=${this._listboxFocusOut}
        @scroll=${this._listboxScroll}
        @keydown=${this._listboxKeydown}
      >
        ${this._renderPanel(defaultPanel.url_path, defaultPanel.icon || "hass:view-dashboard", defaultPanel.title || hass.localize("panel.states"))}
        ${beforeSpacer.map(panel => this._renderPanel(panel.url_path, panel.icon, hass.localize(`panel.${panel.title}`) || panel.title))}
        <div class="spacer" disabled></div>

        ${afterSpacer.map(panel => this._renderPanel(panel.url_path, panel.icon, hass.localize(`panel.${panel.title}`) || panel.title))}
        ${this._externalConfig && this._externalConfig.hasSettingsScreen ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
              <a
                aria-role="option"
                aria-label=${hass.localize("ui.sidebar.external_app_configuration")}
                href="#external-app-configuration"
                tabindex="-1"
                @click=${this._handleExternalAppConfiguration}
                @mouseenter=${this._itemMouseEnter}
                @mouseleave=${this._itemMouseLeave}
              >
                <paper-icon-item>
                  <ha-icon
                    slot="item-icon"
                    icon="hass:cellphone-settings-variant"
                  ></ha-icon>
                  <span class="item-text">
                    ${hass.localize("ui.sidebar.external_app_configuration")}
                  </span>
                </paper-icon-item>
              </a>
            ` : ""}
      </paper-listbox>

      <div class="divider"></div>

      <div
        class="notifications-container"
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <paper-icon-item
          class="notifications"
          aria-role="option"
          @click=${this._handleShowNotificationDrawer}
        >
          <ha-icon slot="item-icon" icon="hass:bell"></ha-icon>
          ${!this.expanded && notificationCount > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                <span class="notification-badge" slot="item-icon">
                  ${notificationCount}
                </span>
              ` : ""}
          <span class="item-text">
            ${hass.localize("ui.notification_drawer.title")}
          </span>
          ${this.expanded && notificationCount > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                <span class="notification-badge">${notificationCount}</span>
              ` : ""}
        </paper-icon-item>
      </div>

      <a
        class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_6__["classMap"])({
          profile: true,
          // Mimick behavior that paper-listbox provides
          "iron-selected": hass.panelUrl === "profile"
        })}
        href="/profile"
        data-panel="panel"
        tabindex="-1"
        aria-role="option"
        aria-label=${hass.localize("panel.profile")}
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <paper-icon-item>
          <ha-user-badge slot="item-icon" .user=${hass.user}></ha-user-badge>

          <span class="item-text">
            ${hass.user ? hass.user.name : ""}
          </span>
        </paper-icon-item>
      </a>
      <div disabled class="bottom-spacer"></div>
      <div class="tooltip"></div>
    `;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (changedProps.has("expanded") || changedProps.has("narrow") || changedProps.has("alwaysExpand") || changedProps.has("_externalConfig") || changedProps.has("_notifications")) {
          return true;
        }

        if (!this.hass || !changedProps.has("hass")) {
          return false;
        }

        const oldHass = changedProps.get("hass");

        if (!oldHass) {
          return true;
        }

        const hass = this.hass;
        return hass.panels !== oldHass.panels || hass.panelUrl !== oldHass.panelUrl || hass.user !== oldHass.user || hass.localize !== oldHass.localize || hass.states !== oldHass.states || hass.defaultPanel !== oldHass.defaultPanel;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaSidebar.prototype), "firstUpdated", this).call(this, changedProps);

        if (this.hass && this.hass.auth.external) {
          Object(_external_app_external_config__WEBPACK_IMPORTED_MODULE_13__["getExternalConfig"])(this.hass.auth.external).then(conf => {
            this._externalConfig = conf;
          });
        }

        Object(_data_persistent_notification__WEBPACK_IMPORTED_MODULE_12__["subscribeNotifications"])(this.hass.connection, notifications => {
          this._notifications = notifications;
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaSidebar.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("alwaysExpand")) {
          this.expanded = this.alwaysExpand;
        }

        if (!changedProps.has("hass")) {
          return;
        }

        this._rtl = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__["computeRTL"])(this.hass);

        if (!SUPPORT_SCROLL_IF_NEEDED) {
          return;
        }

        const oldHass = changedProps.get("hass");

        if (!oldHass || oldHass.panelUrl !== this.hass.panelUrl) {
          const selectedEl = this.shadowRoot.querySelector(".iron-selected");

          if (selectedEl) {
            // @ts-ignore
            selectedEl.scrollIntoViewIfNeeded();
          }
        }
      }
    }, {
      kind: "get",
      key: "_tooltip",
      value: function _tooltip() {
        return this.shadowRoot.querySelector(".tooltip");
      }
    }, {
      kind: "method",
      key: "_itemMouseEnter",
      value: function _itemMouseEnter(ev) {
        // On keypresses on the listbox, we're going to ignore mouse enter events
        // for 100ms so that we ignore it when pressing down arrow scrolls the
        // sidebar causing the mouse to hover a new icon
        if (this.expanded || new Date().getTime() < this._recentKeydownActiveUntil) {
          return;
        }

        if (this._mouseLeaveTimeout) {
          clearTimeout(this._mouseLeaveTimeout);
          this._mouseLeaveTimeout = undefined;
        }

        this._showTooltip(ev.currentTarget);
      }
    }, {
      kind: "method",
      key: "_itemMouseLeave",
      value: function _itemMouseLeave() {
        if (this._mouseLeaveTimeout) {
          clearTimeout(this._mouseLeaveTimeout);
        }

        this._mouseLeaveTimeout = window.setTimeout(() => {
          this._hideTooltip();
        }, 500);
      }
    }, {
      kind: "method",
      key: "_listboxFocusIn",
      value: function _listboxFocusIn(ev) {
        if (this.expanded || ev.target.nodeName !== "A") {
          return;
        }

        this._showTooltip(ev.target.querySelector("paper-icon-item"));
      }
    }, {
      kind: "method",
      key: "_listboxFocusOut",
      value: function _listboxFocusOut() {
        this._hideTooltip();
      }
    }, {
      kind: "method",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["eventOptions"])({
        passive: true
      })],
      key: "_listboxScroll",
      value: function _listboxScroll() {
        // On keypresses on the listbox, we're going to ignore scroll events
        // for 100ms so that if pressing down arrow scrolls the sidebar, the tooltip
        // will not be hidden.
        if (new Date().getTime() < this._recentKeydownActiveUntil) {
          return;
        }

        this._hideTooltip();
      }
    }, {
      kind: "method",
      key: "_listboxKeydown",
      value: function _listboxKeydown() {
        this._recentKeydownActiveUntil = new Date().getTime() + 100;
      }
    }, {
      kind: "method",
      key: "_showTooltip",
      value: function _showTooltip(item) {
        if (this._tooltipHideTimeout) {
          clearTimeout(this._tooltipHideTimeout);
          this._tooltipHideTimeout = undefined;
        }

        const tooltip = this._tooltip;
        const listbox = this.shadowRoot.querySelector("paper-listbox");
        let top = item.offsetTop + 11;

        if (listbox.contains(item)) {
          top -= listbox.scrollTop;
        }

        tooltip.innerHTML = item.querySelector(".item-text").innerHTML;
        tooltip.style.display = "block";
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${item.offsetLeft + item.clientWidth + 4}px`;
      }
    }, {
      kind: "method",
      key: "_hideTooltip",
      value: function _hideTooltip() {
        // Delay it a little in case other events are pending processing.
        if (!this._tooltipHideTimeout) {
          this._tooltipHideTimeout = window.setTimeout(() => {
            this._tooltipHideTimeout = undefined;
            this._tooltip.style.display = "none";
          }, 10);
        }
      }
    }, {
      kind: "method",
      key: "_handleShowNotificationDrawer",
      value: function _handleShowNotificationDrawer() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "hass-show-notifications");
      }
    }, {
      kind: "method",
      key: "_handleExternalAppConfiguration",
      value: function _handleExternalAppConfiguration(ev) {
        ev.preventDefault();
        this.hass.auth.external.fireMessage({
          type: "config_screen/show"
        });
      }
    }, {
      kind: "method",
      key: "_toggleSidebar",
      value: function _toggleSidebar() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "hass-toggle-menu");
      }
    }, {
      kind: "method",
      key: "_renderPanel",
      value: function _renderPanel(urlPath, icon, title) {
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <a
        aria-role="option"
        href="${`/${urlPath}`}"
        data-panel="${urlPath}"
        tabindex="-1"
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <paper-icon-item>
          <ha-icon slot="item-icon" .icon="${icon}"></ha-icon>
          <span class="item-text">${title}</span>
        </paper-icon-item>
      </a>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["css"]`
      :host {
        height: 100%;
        display: block;
        overflow: hidden;
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        border-right: 1px solid var(--divider-color);
        background-color: var(--sidebar-background-color);
        width: 64px;
      }
      :host([expanded]) {
        width: 256px;
      }

      .menu {
        box-sizing: border-box;
        height: 65px;
        display: flex;
        padding: 0 12px;
        border-bottom: 1px solid transparent;
        white-space: nowrap;
        font-weight: 400;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        font-size: 20px;
        align-items: center;
      }
      :host([expanded]) .menu {
        width: 256px;
      }

      .menu paper-icon-button {
        color: var(--sidebar-icon-color);
      }
      :host([expanded]) .menu paper-icon-button {
        margin-right: 23px;
      }
      :host([expanded][_rtl]) .menu paper-icon-button {
        margin-right: 0px;
        margin-left: 23px;
      }

      .title {
        display: none;
      }
      :host([expanded]) .title {
        display: initial;
      }

      paper-listbox::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
      }

      paper-listbox::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: var(--scrollbar-thumb-color);
      }

      paper-listbox {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: calc(100% - 196px);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-color: var(--scrollbar-thumb-color) transparent;
        scrollbar-width: thin;
        background: none;
      }

      a {
        text-decoration: none;
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        position: relative;
        display: block;
        outline: 0;
      }

      paper-icon-item {
        box-sizing: border-box;
        margin: 4px 8px;
        padding-left: 12px;
        border-radius: 4px;
        --paper-item-min-height: 40px;
        width: 48px;
      }
      :host([expanded]) paper-icon-item {
        width: 240px;
      }
      :host([_rtl]) paper-icon-item {
        padding-left: auto;
        padding-right: 12px;
      }

      ha-icon[slot="item-icon"] {
        color: var(--sidebar-icon-color);
      }

      .iron-selected paper-icon-item::before,
      a:not(.iron-selected):focus::before {
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        transition: opacity 15ms linear;
        will-change: opacity;
      }
      .iron-selected paper-icon-item::before {
        background-color: var(--sidebar-selected-icon-color);
        opacity: 0.12;
      }
      a:not(.iron-selected):focus::before {
        background-color: currentColor;
        opacity: var(--dark-divider-opacity);
        margin: 4px 8px;
      }
      .iron-selected paper-icon-item:focus::before,
      .iron-selected:focus paper-icon-item::before {
        opacity: 0.2;
      }

      .iron-selected paper-icon-item[pressed]:before {
        opacity: 0.37;
      }

      paper-icon-item span {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
      }

      a.iron-selected paper-icon-item ha-icon {
        color: var(--sidebar-selected-icon-color);
      }

      a.iron-selected .item-text {
        color: var(--sidebar-selected-text-color);
      }

      paper-icon-item .item-text {
        display: none;
        max-width: calc(100% - 56px);
      }
      :host([expanded]) paper-icon-item .item-text {
        display: block;
      }

      .divider {
        bottom: 112px;
        padding: 10px 0;
      }
      .divider::before {
        content: " ";
        display: block;
        height: 1px;
        background-color: var(--divider-color);
      }
      .notifications-container {
        display: flex;
      }
      .notifications {
        cursor: pointer;
      }
      .notifications .item-text {
        flex: 1;
      }
      .profile {
      }
      .profile paper-icon-item {
        padding-left: 4px;
      }
      :host([_rtl]) .profile paper-icon-item {
        padding-left: auto;
        padding-right: 4px;
      }
      .profile .item-text {
        margin-left: 8px;
      }
      :host([_rtl]) .profile .item-text {
        margin-right: 8px;
      }

      .notification-badge {
        min-width: 20px;
        box-sizing: border-box;
        border-radius: 50%;
        font-weight: 400;
        background-color: var(--accent-color);
        line-height: 20px;
        text-align: center;
        padding: 0px 6px;
        color: var(--text-primary-color);
      }
      ha-icon + .notification-badge {
        position: absolute;
        bottom: 14px;
        left: 26px;
        font-size: 0.65em;
      }

      .spacer {
        flex: 1;
        pointer-events: none;
      }

      .subheader {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        padding: 16px;
        white-space: nowrap;
      }

      .dev-tools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 8px;
        width: 256px;
        box-sizing: border-box;
      }

      .dev-tools a {
        color: var(--sidebar-icon-color);
      }

      .tooltip {
        display: none;
        position: absolute;
        opacity: 0.9;
        border-radius: 2px;
        white-space: nowrap;
        color: var(--sidebar-background-color);
        background-color: var(--sidebar-text-color);
        padding: 4px;
        font-weight: 500;
      }

      :host([_rtl]) .menu paper-icon-button {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"]);

customElements.define("ha-sidebar", HaSidebar);

/***/ }),

/***/ "./src/external_app/external_config.ts":
/*!*********************************************!*\
  !*** ./src/external_app/external_config.ts ***!
  \*********************************************/
/*! exports provided: getExternalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExternalConfig", function() { return getExternalConfig; });
const getExternalConfig = bus => {
  if (!bus.cache.cfg) {
    bus.cache.cfg = bus.sendMessage({
      type: "config/get"
    });
  }

  return bus.cache.cfg;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtc2lkZWJhci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9leHRlcm5hbF9hcHAvZXh0ZXJuYWxfY29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IHR5cGUgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCB0eXBlIHsgUGFwZXJJY29uSXRlbUVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgZXZlbnRPcHRpb25zLFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IGdldERlZmF1bHRQYW5lbCB9IGZyb20gXCIuLi9kYXRhL3BhbmVsXCI7XG5pbXBvcnQge1xuICBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uLFxuICBzdWJzY3JpYmVOb3RpZmljYXRpb25zLFxufSBmcm9tIFwiLi4vZGF0YS9wZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHtcbiAgRXh0ZXJuYWxDb25maWcsXG4gIGdldEV4dGVybmFsQ29uZmlnLFxufSBmcm9tIFwiLi4vZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2NvbmZpZ1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50LCBQYW5lbEluZm8gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4vaGEtaWNvblwiO1xuaW1wb3J0IFwiLi9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi91c2VyL2hhLXVzZXItYmFkZ2VcIjtcblxuY29uc3QgU0hPV19BRlRFUl9TUEFDRVIgPSBbXCJjb25maWdcIiwgXCJkZXZlbG9wZXItdG9vbHNcIiwgXCJoYXNzaW9cIl07XG5cbmNvbnN0IFNVUFBPUlRfU0NST0xMX0lGX05FRURFRCA9IFwic2Nyb2xsSW50b1ZpZXdJZk5lZWRlZFwiIGluIGRvY3VtZW50LmJvZHk7XG5cbmNvbnN0IFNPUlRfVkFMVUVfVVJMX1BBVEhTID0ge1xuICBtYXA6IDEsXG4gIGxvZ2Jvb2s6IDIsXG4gIGhpc3Rvcnk6IDMsXG4gIFwiZGV2ZWxvcGVyLXRvb2xzXCI6IDksXG4gIGhhc3NpbzogMTAsXG4gIGNvbmZpZzogMTEsXG59O1xuXG5jb25zdCBwYW5lbFNvcnRlciA9IChhOiBQYW5lbEluZm8sIGI6IFBhbmVsSW5mbykgPT4ge1xuICAvLyBQdXQgYWxsIHRoZSBMb3ZlbGFjZSBhdCB0aGUgdG9wLlxuICBjb25zdCBhTG92ZWxhY2UgPSBhLmNvbXBvbmVudF9uYW1lID09PSBcImxvdmVsYWNlXCI7XG4gIGNvbnN0IGJMb3ZlbGFjZSA9IGIuY29tcG9uZW50X25hbWUgPT09IFwibG92ZWxhY2VcIjtcblxuICBpZiAoYUxvdmVsYWNlICYmIGJMb3ZlbGFjZSkge1xuICAgIHJldHVybiBjb21wYXJlKGEudGl0bGUhLCBiLnRpdGxlISk7XG4gIH1cbiAgaWYgKGFMb3ZlbGFjZSAmJiAhYkxvdmVsYWNlKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChiTG92ZWxhY2UpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGNvbnN0IGFCdWlsdEluID0gYS51cmxfcGF0aCBpbiBTT1JUX1ZBTFVFX1VSTF9QQVRIUztcbiAgY29uc3QgYkJ1aWx0SW4gPSBiLnVybF9wYXRoIGluIFNPUlRfVkFMVUVfVVJMX1BBVEhTO1xuXG4gIGlmIChhQnVpbHRJbiAmJiBiQnVpbHRJbikge1xuICAgIHJldHVybiBTT1JUX1ZBTFVFX1VSTF9QQVRIU1thLnVybF9wYXRoXSAtIFNPUlRfVkFMVUVfVVJMX1BBVEhTW2IudXJsX3BhdGhdO1xuICB9XG4gIGlmIChhQnVpbHRJbikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYkJ1aWx0SW4pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICAvLyBib3RoIG5vdCBidWlsdCBpbiwgc29ydCBieSB0aXRsZVxuICByZXR1cm4gY29tcGFyZShhLnRpdGxlISwgYi50aXRsZSEpO1xufTtcblxuY29uc3QgY29tcHV0ZVBhbmVscyA9IChoYXNzOiBIb21lQXNzaXN0YW50KTogW1BhbmVsSW5mb1tdLCBQYW5lbEluZm9bXV0gPT4ge1xuICBjb25zdCBwYW5lbHMgPSBoYXNzLnBhbmVscztcbiAgaWYgKCFwYW5lbHMpIHtcbiAgICByZXR1cm4gW1tdLCBbXV07XG4gIH1cblxuICBjb25zdCBiZWZvcmVTcGFjZXI6IFBhbmVsSW5mb1tdID0gW107XG4gIGNvbnN0IGFmdGVyU3BhY2VyOiBQYW5lbEluZm9bXSA9IFtdO1xuXG4gIE9iamVjdC52YWx1ZXMocGFuZWxzKS5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICAgIGlmICghcGFuZWwudGl0bGUgfHwgcGFuZWwudXJsX3BhdGggPT09IGhhc3MuZGVmYXVsdFBhbmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIChTSE9XX0FGVEVSX1NQQUNFUi5pbmNsdWRlcyhwYW5lbC51cmxfcGF0aClcbiAgICAgID8gYWZ0ZXJTcGFjZXJcbiAgICAgIDogYmVmb3JlU3BhY2VyXG4gICAgKS5wdXNoKHBhbmVsKTtcbiAgfSk7XG5cbiAgYmVmb3JlU3BhY2VyLnNvcnQocGFuZWxTb3J0ZXIpO1xuICBhZnRlclNwYWNlci5zb3J0KHBhbmVsU29ydGVyKTtcblxuICByZXR1cm4gW2JlZm9yZVNwYWNlciwgYWZ0ZXJTcGFjZXJdO1xufTtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVNpZGViYXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGFsd2F5c0V4cGFuZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcHVibGljIGV4cGFuZGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXh0ZXJuYWxDb25maWc/OiBFeHRlcm5hbENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9ub3RpZmljYXRpb25zPzogUGVyc2lzdGVudE5vdGlmaWNhdGlvbltdO1xuXG4gIC8vIHByb3BlcnR5IHVzZWQgb25seSBpbiBjc3NcbiAgLy8gQHRzLWlnbm9yZVxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHByaXZhdGUgX3J0bCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX21vdXNlTGVhdmVUaW1lb3V0PzogbnVtYmVyO1xuXG4gIHByaXZhdGUgX3Rvb2x0aXBIaWRlVGltZW91dD86IG51bWJlcjtcblxuICBwcml2YXRlIF9yZWNlbnRLZXlkb3duQWN0aXZlVW50aWwgPSAwO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcblxuICAgIGlmICghaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBbYmVmb3JlU3BhY2VyLCBhZnRlclNwYWNlcl0gPSBjb21wdXRlUGFuZWxzKGhhc3MpO1xuXG4gICAgbGV0IG5vdGlmaWNhdGlvbkNvdW50ID0gdGhpcy5fbm90aWZpY2F0aW9uc1xuICAgICAgPyB0aGlzLl9ub3RpZmljYXRpb25zLmxlbmd0aFxuICAgICAgOiAwO1xuICAgIGZvciAoY29uc3QgZW50aXR5SWQgaW4gaGFzcy5zdGF0ZXMpIHtcbiAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eUlkKSA9PT0gXCJjb25maWd1cmF0b3JcIikge1xuICAgICAgICBub3RpZmljYXRpb25Db3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRQYW5lbCA9IGdldERlZmF1bHRQYW5lbChoYXNzKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgJHshdGhpcy5uYXJyb3dcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuc2lkZWJhci5zaWRlYmFyX3RvZ2dsZVwiKX1cbiAgICAgICAgICAgICAgICAuaWNvbj0ke2hhc3MuZG9ja2VkU2lkZWJhciA9PT0gXCJkb2NrZWRcIlxuICAgICAgICAgICAgICAgICAgPyBcImhhc3M6bWVudS1vcGVuXCJcbiAgICAgICAgICAgICAgICAgIDogXCJoYXNzOm1lbnVcIn1cbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90b2dnbGVTaWRlYmFyfVxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5Ib21lIEFzc2lzdGFudDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJkYXRhLXBhbmVsXCJcbiAgICAgICAgLnNlbGVjdGVkPSR7aGFzcy5wYW5lbFVybH1cbiAgICAgICAgQGZvY3VzaW49JHt0aGlzLl9saXN0Ym94Rm9jdXNJbn1cbiAgICAgICAgQGZvY3Vzb3V0PSR7dGhpcy5fbGlzdGJveEZvY3VzT3V0fVxuICAgICAgICBAc2Nyb2xsPSR7dGhpcy5fbGlzdGJveFNjcm9sbH1cbiAgICAgICAgQGtleWRvd249JHt0aGlzLl9saXN0Ym94S2V5ZG93bn1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLl9yZW5kZXJQYW5lbChcbiAgICAgICAgICBkZWZhdWx0UGFuZWwudXJsX3BhdGgsXG4gICAgICAgICAgZGVmYXVsdFBhbmVsLmljb24gfHwgXCJoYXNzOnZpZXctZGFzaGJvYXJkXCIsXG4gICAgICAgICAgZGVmYXVsdFBhbmVsLnRpdGxlIHx8IGhhc3MubG9jYWxpemUoXCJwYW5lbC5zdGF0ZXNcIilcbiAgICAgICAgKX1cbiAgICAgICAgJHtiZWZvcmVTcGFjZXIubWFwKChwYW5lbCkgPT5cbiAgICAgICAgICB0aGlzLl9yZW5kZXJQYW5lbChcbiAgICAgICAgICAgIHBhbmVsLnVybF9wYXRoLFxuICAgICAgICAgICAgcGFuZWwuaWNvbixcbiAgICAgICAgICAgIGhhc3MubG9jYWxpemUoYHBhbmVsLiR7cGFuZWwudGl0bGV9YCkgfHwgcGFuZWwudGl0bGVcbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIiBkaXNhYmxlZD48L2Rpdj5cblxuICAgICAgICAke2FmdGVyU3BhY2VyLm1hcCgocGFuZWwpID0+XG4gICAgICAgICAgdGhpcy5fcmVuZGVyUGFuZWwoXG4gICAgICAgICAgICBwYW5lbC51cmxfcGF0aCxcbiAgICAgICAgICAgIHBhbmVsLmljb24sXG4gICAgICAgICAgICBoYXNzLmxvY2FsaXplKGBwYW5lbC4ke3BhbmVsLnRpdGxlfWApIHx8IHBhbmVsLnRpdGxlXG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgICAke3RoaXMuX2V4dGVybmFsQ29uZmlnICYmIHRoaXMuX2V4dGVybmFsQ29uZmlnLmhhc1NldHRpbmdzU2NyZWVuXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGFyaWEtcm9sZT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnNpZGViYXIuZXh0ZXJuYWxfYXBwX2NvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgaHJlZj1cIiNleHRlcm5hbC1hcHAtY29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlRXh0ZXJuYWxBcHBDb25maWd1cmF0aW9ufVxuICAgICAgICAgICAgICAgIEBtb3VzZWVudGVyPSR7dGhpcy5faXRlbU1vdXNlRW50ZXJ9XG4gICAgICAgICAgICAgICAgQG1vdXNlbGVhdmU9JHt0aGlzLl9pdGVtTW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2VsbHBob25lLXNldHRpbmdzLXZhcmlhbnRcIlxuICAgICAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcInVpLnNpZGViYXIuZXh0ZXJuYWxfYXBwX2NvbmZpZ3VyYXRpb25cIil9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJub3RpZmljYXRpb25zLWNvbnRhaW5lclwiXG4gICAgICAgIEBtb3VzZWVudGVyPSR7dGhpcy5faXRlbU1vdXNlRW50ZXJ9XG4gICAgICAgIEBtb3VzZWxlYXZlPSR7dGhpcy5faXRlbU1vdXNlTGVhdmV9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbnNcIlxuICAgICAgICAgIGFyaWEtcm9sZT1cIm9wdGlvblwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlU2hvd05vdGlmaWNhdGlvbkRyYXdlcn1cbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1pY29uIHNsb3Q9XCJpdGVtLWljb25cIiBpY29uPVwiaGFzczpiZWxsXCI+PC9oYS1pY29uPlxuICAgICAgICAgICR7IXRoaXMuZXhwYW5kZWQgJiYgbm90aWZpY2F0aW9uQ291bnQgPiAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub3RpZmljYXRpb24tYmFkZ2VcIiBzbG90PVwiaXRlbS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAke25vdGlmaWNhdGlvbkNvdW50fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5ub3RpZmljYXRpb25fZHJhd2VyLnRpdGxlXCIpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAke3RoaXMuZXhwYW5kZWQgJiYgbm90aWZpY2F0aW9uQ291bnQgPiAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub3RpZmljYXRpb24tYmFkZ2VcIj4ke25vdGlmaWNhdGlvbkNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YVxuICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICBwcm9maWxlOiB0cnVlLFxuICAgICAgICAgIC8vIE1pbWljayBiZWhhdmlvciB0aGF0IHBhcGVyLWxpc3Rib3ggcHJvdmlkZXNcbiAgICAgICAgICBcImlyb24tc2VsZWN0ZWRcIjogaGFzcy5wYW5lbFVybCA9PT0gXCJwcm9maWxlXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBocmVmPVwiL3Byb2ZpbGVcIlxuICAgICAgICBkYXRhLXBhbmVsPVwicGFuZWxcIlxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgYXJpYS1yb2xlPVwib3B0aW9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD0ke2hhc3MubG9jYWxpemUoXCJwYW5lbC5wcm9maWxlXCIpfVxuICAgICAgICBAbW91c2VlbnRlcj0ke3RoaXMuX2l0ZW1Nb3VzZUVudGVyfVxuICAgICAgICBAbW91c2VsZWF2ZT0ke3RoaXMuX2l0ZW1Nb3VzZUxlYXZlfVxuICAgICAgPlxuICAgICAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgIDxoYS11c2VyLWJhZGdlIHNsb3Q9XCJpdGVtLWljb25cIiAudXNlcj0ke2hhc3MudXNlcn0+PC9oYS11c2VyLWJhZGdlPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXRleHRcIj5cbiAgICAgICAgICAgICR7aGFzcy51c2VyID8gaGFzcy51c2VyLm5hbWUgOiBcIlwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICA8L2E+XG4gICAgICA8ZGl2IGRpc2FibGVkIGNsYXNzPVwiYm90dG9tLXNwYWNlclwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj48L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcImV4cGFuZGVkXCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwibmFycm93XCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiYWx3YXlzRXhwYW5kXCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiX2V4dGVybmFsQ29uZmlnXCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiX25vdGlmaWNhdGlvbnNcIilcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQ7XG4gICAgaWYgKCFvbGRIYXNzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICByZXR1cm4gKFxuICAgICAgaGFzcy5wYW5lbHMgIT09IG9sZEhhc3MucGFuZWxzIHx8XG4gICAgICBoYXNzLnBhbmVsVXJsICE9PSBvbGRIYXNzLnBhbmVsVXJsIHx8XG4gICAgICBoYXNzLnVzZXIgIT09IG9sZEhhc3MudXNlciB8fFxuICAgICAgaGFzcy5sb2NhbGl6ZSAhPT0gb2xkSGFzcy5sb2NhbGl6ZSB8fFxuICAgICAgaGFzcy5zdGF0ZXMgIT09IG9sZEhhc3Muc3RhdGVzIHx8XG4gICAgICBoYXNzLmRlZmF1bHRQYW5lbCAhPT0gb2xkSGFzcy5kZWZhdWx0UGFuZWxcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAodGhpcy5oYXNzICYmIHRoaXMuaGFzcy5hdXRoLmV4dGVybmFsKSB7XG4gICAgICBnZXRFeHRlcm5hbENvbmZpZyh0aGlzLmhhc3MuYXV0aC5leHRlcm5hbCkudGhlbigoY29uZikgPT4ge1xuICAgICAgICB0aGlzLl9leHRlcm5hbENvbmZpZyA9IGNvbmY7XG4gICAgICB9KTtcbiAgICB9XG4gICAgc3Vic2NyaWJlTm90aWZpY2F0aW9ucyh0aGlzLmhhc3MuY29ubmVjdGlvbiwgKG5vdGlmaWNhdGlvbnMpID0+IHtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25zO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiYWx3YXlzRXhwYW5kXCIpKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5hbHdheXNFeHBhbmQ7XG4gICAgfVxuICAgIGlmICghY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ydGwgPSBjb21wdXRlUlRMKHRoaXMuaGFzcyk7XG5cbiAgICBpZiAoIVNVUFBPUlRfU0NST0xMX0lGX05FRURFRCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvbGRIYXNzID0gY2hhbmdlZFByb3BzLmdldChcImhhc3NcIikgYXMgSG9tZUFzc2lzdGFudCB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIW9sZEhhc3MgfHwgb2xkSGFzcy5wYW5lbFVybCAhPT0gdGhpcy5oYXNzLnBhbmVsVXJsKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEVsID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiLmlyb24tc2VsZWN0ZWRcIik7XG4gICAgICBpZiAoc2VsZWN0ZWRFbCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNlbGVjdGVkRWwuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF90b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCIudG9vbHRpcFwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9pdGVtTW91c2VFbnRlcihldjogTW91c2VFdmVudCkge1xuICAgIC8vIE9uIGtleXByZXNzZXMgb24gdGhlIGxpc3Rib3gsIHdlJ3JlIGdvaW5nIHRvIGlnbm9yZSBtb3VzZSBlbnRlciBldmVudHNcbiAgICAvLyBmb3IgMTAwbXMgc28gdGhhdCB3ZSBpZ25vcmUgaXQgd2hlbiBwcmVzc2luZyBkb3duIGFycm93IHNjcm9sbHMgdGhlXG4gICAgLy8gc2lkZWJhciBjYXVzaW5nIHRoZSBtb3VzZSB0byBob3ZlciBhIG5ldyBpY29uXG4gICAgaWYgKFxuICAgICAgdGhpcy5leHBhbmRlZCB8fFxuICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgPCB0aGlzLl9yZWNlbnRLZXlkb3duQWN0aXZlVW50aWxcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vdXNlTGVhdmVUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fbW91c2VMZWF2ZVRpbWVvdXQpO1xuICAgICAgdGhpcy5fbW91c2VMZWF2ZVRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuX3Nob3dUb29sdGlwKGV2LmN1cnJlbnRUYXJnZXQgYXMgUGFwZXJJY29uSXRlbUVsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXRlbU1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKHRoaXMuX21vdXNlTGVhdmVUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fbW91c2VMZWF2ZVRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLl9tb3VzZUxlYXZlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVUb29sdGlwKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3Rib3hGb2N1c0luKGV2KSB7XG4gICAgaWYgKHRoaXMuZXhwYW5kZWQgfHwgZXYudGFyZ2V0Lm5vZGVOYW1lICE9PSBcIkFcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zaG93VG9vbHRpcChldi50YXJnZXQucXVlcnlTZWxlY3RvcihcInBhcGVyLWljb24taXRlbVwiKSk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0Ym94Rm9jdXNPdXQoKSB7XG4gICAgdGhpcy5faGlkZVRvb2x0aXAoKTtcbiAgfVxuXG4gIEBldmVudE9wdGlvbnMoe1xuICAgIHBhc3NpdmU6IHRydWUsXG4gIH0pXG4gIHByaXZhdGUgX2xpc3Rib3hTY3JvbGwoKSB7XG4gICAgLy8gT24ga2V5cHJlc3NlcyBvbiB0aGUgbGlzdGJveCwgd2UncmUgZ29pbmcgdG8gaWdub3JlIHNjcm9sbCBldmVudHNcbiAgICAvLyBmb3IgMTAwbXMgc28gdGhhdCBpZiBwcmVzc2luZyBkb3duIGFycm93IHNjcm9sbHMgdGhlIHNpZGViYXIsIHRoZSB0b29sdGlwXG4gICAgLy8gd2lsbCBub3QgYmUgaGlkZGVuLlxuICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IHRoaXMuX3JlY2VudEtleWRvd25BY3RpdmVVbnRpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9oaWRlVG9vbHRpcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGJveEtleWRvd24oKSB7XG4gICAgdGhpcy5fcmVjZW50S2V5ZG93bkFjdGl2ZVVudGlsID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAxMDA7XG4gIH1cblxuICBwcml2YXRlIF9zaG93VG9vbHRpcChpdGVtOiBQYXBlckljb25JdGVtRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwSGlkZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90b29sdGlwSGlkZVRpbWVvdXQpO1xuICAgICAgdGhpcy5fdG9vbHRpcEhpZGVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCB0b29sdGlwID0gdGhpcy5fdG9vbHRpcDtcbiAgICBjb25zdCBsaXN0Ym94ID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwicGFwZXItbGlzdGJveFwiKSE7XG4gICAgbGV0IHRvcCA9IGl0ZW0ub2Zmc2V0VG9wICsgMTE7XG4gICAgaWYgKGxpc3Rib3guY29udGFpbnMoaXRlbSkpIHtcbiAgICAgIHRvcCAtPSBsaXN0Ym94LnNjcm9sbFRvcDtcbiAgICB9XG4gICAgdG9vbHRpcC5pbm5lckhUTUwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS10ZXh0XCIpIS5pbm5lckhUTUw7XG4gICAgdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRvb2x0aXAuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICB0b29sdGlwLnN0eWxlLmxlZnQgPSBgJHtpdGVtLm9mZnNldExlZnQgKyBpdGVtLmNsaWVudFdpZHRoICsgNH1weGA7XG4gIH1cblxuICBwcml2YXRlIF9oaWRlVG9vbHRpcCgpIHtcbiAgICAvLyBEZWxheSBpdCBhIGxpdHRsZSBpbiBjYXNlIG90aGVyIGV2ZW50cyBhcmUgcGVuZGluZyBwcm9jZXNzaW5nLlxuICAgIGlmICghdGhpcy5fdG9vbHRpcEhpZGVUaW1lb3V0KSB7XG4gICAgICB0aGlzLl90b29sdGlwSGlkZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBIaWRlVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2hvd05vdGlmaWNhdGlvbkRyYXdlcigpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLXNob3ctbm90aWZpY2F0aW9uc1wiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUV4dGVybmFsQXBwQ29uZmlndXJhdGlvbihldjogRXZlbnQpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaGFzcy5hdXRoLmV4dGVybmFsIS5maXJlTWVzc2FnZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZ19zY3JlZW4vc2hvd1wiLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLXRvZ2dsZS1tZW51XCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyUGFuZWwodXJsUGF0aCwgaWNvbiwgdGl0bGUpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxhXG4gICAgICAgIGFyaWEtcm9sZT1cIm9wdGlvblwiXG4gICAgICAgIGhyZWY9XCIke2AvJHt1cmxQYXRofWB9XCJcbiAgICAgICAgZGF0YS1wYW5lbD1cIiR7dXJsUGF0aH1cIlxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgQG1vdXNlZW50ZXI9JHt0aGlzLl9pdGVtTW91c2VFbnRlcn1cbiAgICAgICAgQG1vdXNlbGVhdmU9JHt0aGlzLl9pdGVtTW91c2VMZWF2ZX1cbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgICAgICA8aGEtaWNvbiBzbG90PVwiaXRlbS1pY29uXCIgLmljb249XCIke2ljb259XCI+PC9oYS1pY29uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10ZXh0XCI+JHt0aXRsZX08L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgPC9hPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkge1xuICAgICAgICB3aWR0aDogMjU2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZW51IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkgLm1lbnUge1xuICAgICAgICB3aWR0aDogMjU2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZW51IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItaWNvbi1jb2xvcik7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSAubWVudSBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjNweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtleHBhbmRlZF1bX3J0bF0pIC5tZW51IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbGlzdGJveDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC40cmVtO1xuICAgICAgICBoZWlnaHQ6IDAuNHJlbTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbGlzdGJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGxiYXItdGh1bWItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTk2cHgpO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Nyb2xsYmFyLXRodW1iLWNvbG9yKSB0cmFuc3BhcmVudDtcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDRweCA4cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAtLXBhcGVyLWl0ZW0tbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbX3J0bF0pIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogYXV0bztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICAgIH1cblxuICAgICAgaGEtaWNvbltzbG90PVwiaXRlbS1pY29uXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItaWNvbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5pcm9uLXNlbGVjdGVkIHBhcGVyLWljb24taXRlbTo6YmVmb3JlLFxuICAgICAgYTpub3QoLmlyb24tc2VsZWN0ZWQpOmZvY3VzOjpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNW1zIGxpbmVhcjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgICB9XG4gICAgICAuaXJvbi1zZWxlY3RlZCBwYXBlci1pY29uLWl0ZW06OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItc2VsZWN0ZWQtaWNvbi1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDAuMTI7XG4gICAgICB9XG4gICAgICBhOm5vdCguaXJvbi1zZWxlY3RlZCk6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1kaXZpZGVyLW9wYWNpdHkpO1xuICAgICAgICBtYXJnaW46IDRweCA4cHg7XG4gICAgICB9XG4gICAgICAuaXJvbi1zZWxlY3RlZCBwYXBlci1pY29uLWl0ZW06Zm9jdXM6OmJlZm9yZSxcbiAgICAgIC5pcm9uLXNlbGVjdGVkOmZvY3VzIHBhcGVyLWljb24taXRlbTo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgfVxuXG4gICAgICAuaXJvbi1zZWxlY3RlZCBwYXBlci1pY29uLWl0ZW1bcHJlc3NlZF06YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMC4zNztcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1pdGVtIHNwYW4ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBhLmlyb24tc2VsZWN0ZWQgcGFwZXItaWNvbi1pdGVtIGhhLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1zZWxlY3RlZC1pY29uLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgYS5pcm9uLXNlbGVjdGVkIC5pdGVtLXRleHQge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1zZWxlY3RlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1pdGVtIC5pdGVtLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDU2cHgpO1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkgcGFwZXItaWNvbi1pdGVtIC5pdGVtLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLmRpdmlkZXIge1xuICAgICAgICBib3R0b206IDExMnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICB9XG4gICAgICAuZGl2aWRlcjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG4gICAgICAubm90aWZpY2F0aW9ucy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLm5vdGlmaWNhdGlvbnMge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAubm90aWZpY2F0aW9ucyAuaXRlbS10ZXh0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlIHtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW19ydGxdKSAucHJvZmlsZSBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlIC5pdGVtLXRleHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW19ydGxdKSAucHJvZmlsZSAuaXRlbS10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb24tYmFkZ2Uge1xuICAgICAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDZweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBoYS1pY29uICsgLm5vdGlmaWNhdGlvbi1iYWRnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxNHB4O1xuICAgICAgICBsZWZ0OiAyNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuNjVlbTtcbiAgICAgIH1cblxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuc3ViaGVhZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmRldi10b29scyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIHdpZHRoOiAyNTZweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgLmRldi10b29scyBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItaWNvbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC50b29sdGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW19ydGxdKSAubWVudSBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtc2lkZWJhclwiOiBIYVNpZGViYXI7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2lkZWJhclwiLCBIYVNpZGViYXIpO1xuIiwiaW1wb3J0IHsgRXh0ZXJuYWxNZXNzYWdpbmcgfSBmcm9tIFwiLi9leHRlcm5hbF9tZXNzYWdpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFeHRlcm5hbENvbmZpZyB7XG4gIGhhc1NldHRpbmdzU2NyZWVuOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RXh0ZXJuYWxDb25maWcgPSAoXG4gIGJ1czogRXh0ZXJuYWxNZXNzYWdpbmdcbik6IFByb21pc2U8RXh0ZXJuYWxDb25maWc+ID0+IHtcbiAgaWYgKCFidXMuY2FjaGUuY2ZnKSB7XG4gICAgYnVzLmNhY2hlLmNmZyA9IGJ1cy5zZW5kTWVzc2FnZTxFeHRlcm5hbENvbmZpZz4oe1xuICAgICAgdHlwZTogXCJjb25maWcvZ2V0XCIsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGJ1cy5jYWNoZS5jZmc7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBSUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUlBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7Ozs7O0FBUkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTs7QUFHQTtBQUNBO0FBR0E7O0FBUEE7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBOzs7QUFTQTtBQU9BOzs7QUFJQTs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOzs7O0FBbkJBOzs7Ozs7O0FBK0JBO0FBQ0E7Ozs7O0FBS0E7OztBQUdBOztBQUdBOztBQUhBOztBQVFBOztBQUVBO0FBRUE7QUFGQTs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7OztBQVNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7O0FBeEhBO0FBK0hBOzs7O0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVFBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBWEE7QUFlQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK1BBOzs7QUFubUJBO0FBQ0E7QUEybUJBOzs7Ozs7Ozs7Ozs7QUNodEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
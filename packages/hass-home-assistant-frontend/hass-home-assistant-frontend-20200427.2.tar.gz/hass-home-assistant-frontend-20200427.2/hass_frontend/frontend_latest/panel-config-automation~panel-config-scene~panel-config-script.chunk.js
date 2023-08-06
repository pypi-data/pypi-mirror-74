(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-automation~panel-config-scene~panel-config-script"],{

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

/***/ "./src/components/device/ha-device-picker.ts":
/*!***************************************************!*\
  !*** ./src/components/device/ha-device-picker.ts ***!
  \***************************************************/
/*! exports provided: HaDevicePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDevicePicker", function() { return HaDevicePicker; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _vaadin_vaadin_combo_box_theme_material_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
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

















const rowRenderer = (root, _owner, model) => {
  if (!root.firstElementChild) {
    root.innerHTML = `
    <style>
      paper-item {
        margin: -10px 0;
        padding: 0;
      }
    </style>
    <paper-item>
      <paper-item-body two-line="">    
        <div class='name'>[[item.name]]</div>
        <div secondary>[[item.area]]</div>
      </paper-item-body>
    </paper-item>
    `;
  }

  root.querySelector(".name").textContent = model.item.name;
  root.querySelector("[secondary]").textContent = model.item.area;
};

let HaDevicePicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["customElement"])("ha-device-picker")], function (_initialize, _SubscribeMixin) {
  class HaDevicePicker extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaDevicePicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "devices",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "areas",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "entities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Array,
        attribute: "include-domains"
      })],
      key: "includeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Array,
        attribute: "exclude-domains"
      })],
      key: "excludeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Array,
        attribute: "include-device-classes"
      })],
      key: "includeDeviceClasses",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Boolean
      })],
      key: "_opened",
      value: void 0
    }, {
      kind: "field",
      key: "_getDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])((devices, areas, entities, includeDomains, excludeDomains, includeDeviceClasses) => {
          if (!devices.length) {
            return [];
          }

          const deviceEntityLookup = {};

          for (const entity of entities) {
            if (!entity.device_id) {
              continue;
            }

            if (!(entity.device_id in deviceEntityLookup)) {
              deviceEntityLookup[entity.device_id] = [];
            }

            deviceEntityLookup[entity.device_id].push(entity);
          }

          const areaLookup = {};

          for (const area of areas) {
            areaLookup[area.area_id] = area;
          }

          let inputDevices = [...devices];

          if (includeDomains) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return false;
              }

              return deviceEntityLookup[device.id].some(entity => includeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entity.entity_id)));
            });
          }

          if (excludeDomains) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return true;
              }

              return entities.every(entity => !excludeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entity.entity_id)));
            });
          }

          if (includeDeviceClasses) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return false;
              }

              return deviceEntityLookup[device.id].some(entity => {
                const stateObj = this.hass.states[entity.entity_id];

                if (!stateObj) {
                  return false;
                }

                return stateObj.attributes.device_class && includeDeviceClasses.includes(stateObj.attributes.device_class);
              });
            });
          }

          const outputDevices = inputDevices.map(device => {
            return {
              id: device.id,
              name: Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_12__["computeDeviceName"])(device, this.hass, deviceEntityLookup[device.id]),
              area: device.area_id ? areaLookup[device.area_id].name : "No area"
            };
          });

          if (outputDevices.length === 1) {
            return outputDevices;
          }

          return outputDevices.sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_10__["compare"])(a.name || "", b.name || ""));
        });
      }

    }, {
      kind: "method",
      key: "hassSubscribe",
      value:
      /**
       * Show only devices with entities from specific domains.
       * @type {Array}
       * @attr include-domains
       */

      /**
       * Show no devices with entities of these domains.
       * @type {Array}
       * @attr exclude-domains
       */

      /**
       * Show only deviced with entities of these device classes.
       * @type {Array}
       * @attr include-device-classes
       */
      function hassSubscribe() {
        return [Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_12__["subscribeDeviceRegistry"])(this.hass.connection, devices => {
          this.devices = devices;
        }), Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_11__["subscribeAreaRegistry"])(this.hass.connection, areas => {
          this.areas = areas;
        }), Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_13__["subscribeEntityRegistry"])(this.hass.connection, entities => {
          this.entities = entities;
        })];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.devices || !this.areas || !this.entities) {
          return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]``;
        }

        const devices = this._getDevices(this.devices, this.areas, this.entities, this.includeDomains, this.excludeDomains, this.includeDeviceClasses);

        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <vaadin-combo-box-light
        item-value-path="id"
        item-id-path="id"
        item-label-path="name"
        .items=${devices}
        .value=${this._value}
        .renderer=${rowRenderer}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._deviceChanged}
      >
        <paper-input
          .label=${this.label === undefined && this.hass ? this.hass.localize("ui.components.device-picker.device") : this.label}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <paper-icon-button
                  aria-label=${this.hass.localize("ui.components.device-picker.clear")}
                  slot="suffix"
                  class="clear-button"
                  icon="hass:close"
                  @click=${this._clearValue}
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              ` : ""}
          ${devices.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <paper-icon-button
                  aria-label=${this.hass.localize("ui.components.device-picker.show_devices")}
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened ? "hass:menu-up" : "hass:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              ` : ""}
        </paper-input>
      </vaadin-combo-box-light>
    `;
      }
    }, {
      kind: "method",
      key: "_clearValue",
      value: function _clearValue(ev) {
        ev.stopPropagation();

        this._setValue("");
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        return this.value || "";
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        this._opened = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_deviceChanged",
      value: function _deviceChanged(ev) {
        const newValue = ev.detail.value;

        if (newValue !== this._value) {
          this._setValue(newValue);
        }
      }
    }, {
      kind: "method",
      key: "_setValue",
      value: function _setValue(value) {
        this.value = value;
        setTimeout(() => {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "value-changed", {
            value
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "change");
        }, 0);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `;
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_14__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]));

/***/ }),

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const createAreaRegistryEntry = (hass, values) => hass.callWS(Object.assign({
  type: "config/area_registry/create"
}, values));
const updateAreaRegistryEntry = (hass, areaId, updates) => hass.callWS(Object.assign({
  type: "config/area_registry/update",
  area_id: areaId
}, updates));
const deleteAreaRegistryEntry = (hass, areaId) => hass.callWS({
  type: "config/area_registry/delete",
  area_id: areaId
});

const fetchAreaRegistry = conn => conn.sendMessagePromise({
  type: "config/area_registry/list"
}).then(areas => areas.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name)));

const subscribeAreaRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchAreaRegistry(conn).then(areas => store.setState(areas, true)), 500, true), "area_registry_updated");

const subscribeAreaRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: fallbackDeviceName, computeDeviceName, devicesInArea, updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackDeviceName", function() { return fallbackDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDeviceName", function() { return computeDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devicesInArea", function() { return devicesInArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const fallbackDeviceName = (hass, entities) => {
  for (const entity of entities || []) {
    const entityId = typeof entity === "string" ? entity : entity.entity_id;
    const stateObj = hass.states[entityId];

    if (stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(stateObj);
    }
  }

  return undefined;
};
const computeDeviceName = (device, hass, entities) => {
  return device.name_by_user || device.name || entities && fallbackDeviceName(hass, entities) || hass.localize("ui.panel.config.devices.unnamed_device");
};
const devicesInArea = (devices, areaId) => devices.filter(device => device.area_id === areaId);
const updateDeviceRegistryEntry = (hass, deviceId, updates) => hass.callWS(Object.assign({
  type: "config/device_registry/update",
  device_id: deviceId
}, updates));

const fetchDeviceRegistry = conn => conn.sendMessagePromise({
  type: "config/device_registry/list"
});

const subscribeDeviceRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchDeviceRegistry(conn).then(devices => store.setState(devices, true)), 500, true), "device_registry_updated");

const subscribeDeviceRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/dialogs/generic/show-dialog-box.ts":
/*!************************************************!*\
  !*** ./src/dialogs/generic/show-dialog-box.ts ***!
  \************************************************/
/*! exports provided: loadGenericDialog, showAlertDialog, showConfirmationDialog, showPromptDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGenericDialog", function() { return loadGenericDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertDialog", function() { return showAlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPromptDialog", function() { return showPromptDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadGenericDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(13), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e(14), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-box */ "./src/dialogs/generic/dialog-box.ts"));

const showDialogHelper = (element, dialogParams, extra) => new Promise(resolve => {
  const origCancel = dialogParams.cancel;
  const origConfirm = dialogParams.confirm;
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-box",
    dialogImport: loadGenericDialog,
    dialogParams: Object.assign({}, dialogParams, {}, extra, {
      cancel: () => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? null : false);

        if (origCancel) {
          origCancel();
        }
      },
      confirm: out => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? out : true);

        if (origConfirm) {
          origConfirm(out);
        }
      }
    })
  });
});

const showAlertDialog = (element, dialogParams) => showDialogHelper(element, dialogParams);
const showConfirmationDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  confirmation: true
});
const showPromptDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  prompt: true
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb25+cGFuZWwtY29uZmlnLXNjZW5lfnBhbmVsLWNvbmZpZy1zY3JpcHQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FyZWFfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWNvbWJvLWJveC90aGVtZS9tYXRlcmlhbC92YWFkaW4tY29tYm8tYm94LWxpZ2h0XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IHtcbiAgQXJlYVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZUFyZWFSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgY29tcHV0ZURldmljZU5hbWUsXG4gIERldmljZUVudGl0eUxvb2t1cCxcbiAgRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N1YnNjcmliZS1taXhpblwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBEZXZpY2Uge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFyZWE6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn1cblxuY29uc3Qgcm93UmVuZGVyZXIgPSAocm9vdDogSFRNTEVsZW1lbnQsIF9vd25lciwgbW9kZWw6IHsgaXRlbTogRGV2aWNlIH0pID0+IHtcbiAgaWYgKCFyb290LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgcm9vdC5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIG1hcmdpbjogLTEwcHggMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPiAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+W1tpdGVtLm5hbWVdXTwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5bW2l0ZW0uYXJlYV1dPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG4gICAgYDtcbiAgfVxuXG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpIS50ZXh0Q29udGVudCA9IG1vZGVsLml0ZW0ubmFtZSE7XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIltzZWNvbmRhcnldXCIpIS50ZXh0Q29udGVudCA9IG1vZGVsLml0ZW0uYXJlYSE7XG59O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWRldmljZS1waWNrZXJcIilcbmV4cG9ydCBjbGFzcyBIYURldmljZVBpY2tlciBleHRlbmRzIFN1YnNjcmliZU1peGluKExpdEVsZW1lbnQpIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGRldmljZXM/OiBEZXZpY2VSZWdpc3RyeUVudHJ5W107XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGFyZWFzPzogQXJlYVJlZ2lzdHJ5RW50cnlbXTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50aXRpZXM/OiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG5cbiAgLyoqXG4gICAqIFNob3cgb25seSBkZXZpY2VzIHdpdGggZW50aXRpZXMgZnJvbSBzcGVjaWZpYyBkb21haW5zLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqIEBhdHRyIGluY2x1ZGUtZG9tYWluc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJpbmNsdWRlLWRvbWFpbnNcIiB9KVxuICBwdWJsaWMgaW5jbHVkZURvbWFpbnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU2hvdyBubyBkZXZpY2VzIHdpdGggZW50aXRpZXMgb2YgdGhlc2UgZG9tYWlucy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAYXR0ciBleGNsdWRlLWRvbWFpbnNcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5LCBhdHRyaWJ1dGU6IFwiZXhjbHVkZS1kb21haW5zXCIgfSlcbiAgcHVibGljIGV4Y2x1ZGVEb21haW5zPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFNob3cgb25seSBkZXZpY2VkIHdpdGggZW50aXRpZXMgb2YgdGhlc2UgZGV2aWNlIGNsYXNzZXMuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICogQGF0dHIgaW5jbHVkZS1kZXZpY2UtY2xhc3Nlc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJpbmNsdWRlLWRldmljZS1jbGFzc2VzXCIgfSlcbiAgcHVibGljIGluY2x1ZGVEZXZpY2VDbGFzc2VzPzogc3RyaW5nW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBwcml2YXRlIF9vcGVuZWQ/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2dldERldmljZXMgPSBtZW1vaXplT25lKFxuICAgIChcbiAgICAgIGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSxcbiAgICAgIGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdLFxuICAgICAgZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSxcbiAgICAgIGluY2x1ZGVEb21haW5zOiB0aGlzW1wiaW5jbHVkZURvbWFpbnNcIl0sXG4gICAgICBleGNsdWRlRG9tYWluczogdGhpc1tcImV4Y2x1ZGVEb21haW5zXCJdLFxuICAgICAgaW5jbHVkZURldmljZUNsYXNzZXM6IHRoaXNbXCJpbmNsdWRlRGV2aWNlQ2xhc3Nlc1wiXVxuICAgICk6IERldmljZVtdID0+IHtcbiAgICAgIGlmICghZGV2aWNlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXZpY2VFbnRpdHlMb29rdXA6IERldmljZUVudGl0eUxvb2t1cCA9IHt9O1xuICAgICAgZm9yIChjb25zdCBlbnRpdHkgb2YgZW50aXRpZXMpIHtcbiAgICAgICAgaWYgKCFlbnRpdHkuZGV2aWNlX2lkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZW50aXR5LmRldmljZV9pZCBpbiBkZXZpY2VFbnRpdHlMb29rdXApKSB7XG4gICAgICAgICAgZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdLnB1c2goZW50aXR5KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXJlYUxvb2t1cDogeyBbYXJlYUlkOiBzdHJpbmddOiBBcmVhUmVnaXN0cnlFbnRyeSB9ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGFyZWEgb2YgYXJlYXMpIHtcbiAgICAgICAgYXJlYUxvb2t1cFthcmVhLmFyZWFfaWRdID0gYXJlYTtcbiAgICAgIH1cblxuICAgICAgbGV0IGlucHV0RGV2aWNlcyA9IFsuLi5kZXZpY2VzXTtcblxuICAgICAgaWYgKGluY2x1ZGVEb21haW5zKSB7XG4gICAgICAgIGlucHV0RGV2aWNlcyA9IGlucHV0RGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldkVudGl0aWVzID0gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF07XG4gICAgICAgICAgaWYgKCFkZXZFbnRpdGllcyB8fCAhZGV2RW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlLmlkXS5zb21lKChlbnRpdHkpID0+XG4gICAgICAgICAgICBpbmNsdWRlRG9tYWlucy5pbmNsdWRlcyhjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhjbHVkZURvbWFpbnMpIHtcbiAgICAgICAgaW5wdXREZXZpY2VzID0gaW5wdXREZXZpY2VzLmZpbHRlcigoZGV2aWNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGV2RW50aXRpZXMgPSBkZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlLmlkXTtcbiAgICAgICAgICBpZiAoIWRldkVudGl0aWVzIHx8ICFkZXZFbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZW50aXRpZXMuZXZlcnkoXG4gICAgICAgICAgICAoZW50aXR5KSA9PlxuICAgICAgICAgICAgICAhZXhjbHVkZURvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluY2x1ZGVEZXZpY2VDbGFzc2VzKSB7XG4gICAgICAgIGlucHV0RGV2aWNlcyA9IGlucHV0RGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldkVudGl0aWVzID0gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF07XG4gICAgICAgICAgaWYgKCFkZXZFbnRpdGllcyB8fCAhZGV2RW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlLmlkXS5zb21lKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgICAgICAgICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgJiZcbiAgICAgICAgICAgICAgaW5jbHVkZURldmljZUNsYXNzZXMuaW5jbHVkZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0cHV0RGV2aWNlcyA9IGlucHV0RGV2aWNlcy5tYXAoKGRldmljZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBkZXZpY2UuaWQsXG4gICAgICAgICAgbmFtZTogY29tcHV0ZURldmljZU5hbWUoXG4gICAgICAgICAgICBkZXZpY2UsXG4gICAgICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgICAgICBkZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlLmlkXVxuICAgICAgICAgICksXG4gICAgICAgICAgYXJlYTogZGV2aWNlLmFyZWFfaWQgPyBhcmVhTG9va3VwW2RldmljZS5hcmVhX2lkXS5uYW1lIDogXCJObyBhcmVhXCIsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGlmIChvdXRwdXREZXZpY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gb3V0cHV0RGV2aWNlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXREZXZpY2VzLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYS5uYW1lIHx8IFwiXCIsIGIubmFtZSB8fCBcIlwiKSk7XG4gICAgfVxuICApO1xuXG4gIHB1YmxpYyBoYXNzU3Vic2NyaWJlKCk6IFVuc3Vic2NyaWJlRnVuY1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24hLCAoZGV2aWNlcykgPT4ge1xuICAgICAgICB0aGlzLmRldmljZXMgPSBkZXZpY2VzO1xuICAgICAgfSksXG4gICAgICBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24hLCAoYXJlYXMpID0+IHtcbiAgICAgICAgdGhpcy5hcmVhcyA9IGFyZWFzO1xuICAgICAgfSksXG4gICAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiEsIChlbnRpdGllcykgPT4ge1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmRldmljZXMgfHwgIXRoaXMuYXJlYXMgfHwgIXRoaXMuZW50aXRpZXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGNvbnN0IGRldmljZXMgPSB0aGlzLl9nZXREZXZpY2VzKFxuICAgICAgdGhpcy5kZXZpY2VzLFxuICAgICAgdGhpcy5hcmVhcyxcbiAgICAgIHRoaXMuZW50aXRpZXMsXG4gICAgICB0aGlzLmluY2x1ZGVEb21haW5zLFxuICAgICAgdGhpcy5leGNsdWRlRG9tYWlucyxcbiAgICAgIHRoaXMuaW5jbHVkZURldmljZUNsYXNzZXNcbiAgICApO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiaWRcIlxuICAgICAgICBpdGVtLWlkLXBhdGg9XCJpZFwiXG4gICAgICAgIGl0ZW0tbGFiZWwtcGF0aD1cIm5hbWVcIlxuICAgICAgICAuaXRlbXM9JHtkZXZpY2VzfVxuICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgLnJlbmRlcmVyPSR7cm93UmVuZGVyZXJ9XG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD0ke3RoaXMuX29wZW5lZENoYW5nZWR9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZGV2aWNlQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5sYWJlbCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuaGFzc1xuICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLmRldmljZS1waWNrZXIuZGV2aWNlXCIpXG4gICAgICAgICAgICA6IHRoaXMubGFiZWx9XG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJub25lXCJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLnZhbHVlXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmNvbXBvbmVudHMuZGV2aWNlLXBpY2tlci5jbGVhclwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jbGVhclZhbHVlfVxuICAgICAgICAgICAgICAgICAgbm8tcmlwcGxlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtkZXZpY2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkuY29tcG9uZW50cy5kZXZpY2UtcGlja2VyLnNob3dfZGV2aWNlc1wiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgLmljb249JHt0aGlzLl9vcGVuZWQgPyBcImhhc3M6bWVudS11cFwiIDogXCJoYXNzOm1lbnUtZG93blwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRvZ2dsZVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJWYWx1ZShldjogRXZlbnQpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9zZXRWYWx1ZShcIlwiKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPikge1xuICAgIHRoaXMuX29wZW5lZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2RldmljZUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWUgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgfSwgMCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1pbnB1dCA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWRldmljZS1waWNrZXJcIjogSGFEZXZpY2VQaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbm5lY3Rpb24sIGNyZWF0ZUNvbGxlY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlFbnRyeSB7XG4gIGFyZWFfaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtc1xuKSA9PlxuICBoYXNzLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBhcmVhSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBcmVhUmVnaXN0cnlFbnRyeSA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBhcmVhSWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvZGVsZXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICB9KTtcblxuY29uc3QgZmV0Y2hBcmVhUmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ublxuICAgIC5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9saXN0XCIsXG4gICAgfSlcbiAgICAudGhlbigoYXJlYXMpID0+IGFyZWFzLnNvcnQoKGVudDEsIGVudDIpID0+IGNvbXBhcmUoZW50MS5uYW1lLCBlbnQyLm5hbWUpKSk7XG5cbmNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hBcmVhUmVnaXN0cnkoY29ubikudGhlbigoYXJlYXMpID0+IHN0b3JlLnNldFN0YXRlKGFyZWFzLCB0cnVlKSksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImFyZWFfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVBcmVhUmVnaXN0cnkgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoYXJlYXM6IEFyZWFSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxBcmVhUmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9hcmVhUmVnaXN0cnlcIixcbiAgICBmZXRjaEFyZWFSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVBcmVhUmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IENvbm5lY3Rpb24sIGNyZWF0ZUNvbGxlY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRW50aXR5UmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuL2VudGl0eV9yZWdpc3RyeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVJlZ2lzdHJ5RW50cnkge1xuICBpZDogc3RyaW5nO1xuICBjb25maWdfZW50cmllczogc3RyaW5nW107XG4gIGNvbm5lY3Rpb25zOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XG4gIG1vZGVsPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBzd192ZXJzaW9uPzogc3RyaW5nO1xuICB2aWFfZGV2aWNlX2lkPzogc3RyaW5nO1xuICBhcmVhX2lkPzogc3RyaW5nO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlRW50aXR5TG9va3VwIHtcbiAgW2RldmljZUlkOiBzdHJpbmddOiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBhcmVhX2lkPzogc3RyaW5nIHwgbnVsbDtcbiAgbmFtZV9ieV91c2VyPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGZhbGxiYWNrRGV2aWNlTmFtZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSB8IHN0cmluZ1tdXG4pID0+IHtcbiAgZm9yIChjb25zdCBlbnRpdHkgb2YgZW50aXRpZXMgfHwgW10pIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IHR5cGVvZiBlbnRpdHkgPT09IFwic3RyaW5nXCIgPyBlbnRpdHkgOiBlbnRpdHkuZW50aXR5X2lkO1xuICAgIGNvbnN0IHN0YXRlT2JqID0gaGFzcy5zdGF0ZXNbZW50aXR5SWRdO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVEZXZpY2VOYW1lID0gKFxuICBkZXZpY2U6IERldmljZVJlZ2lzdHJ5RW50cnksXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0aWVzPzogRW50aXR5UmVnaXN0cnlFbnRyeVtdIHwgc3RyaW5nW11cbikgPT4ge1xuICByZXR1cm4gKFxuICAgIGRldmljZS5uYW1lX2J5X3VzZXIgfHxcbiAgICBkZXZpY2UubmFtZSB8fFxuICAgIChlbnRpdGllcyAmJiBmYWxsYmFja0RldmljZU5hbWUoaGFzcywgZW50aXRpZXMpKSB8fFxuICAgIGhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuZGV2aWNlcy51bm5hbWVkX2RldmljZVwiKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRldmljZXNJbkFyZWEgPSAoZGV2aWNlczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdLCBhcmVhSWQ6IHN0cmluZykgPT5cbiAgZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4gZGV2aWNlLmFyZWFfaWQgPT09IGFyZWFJZCk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBkZXZpY2VJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZGV2aWNlX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRGV2aWNlUmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hEZXZpY2VSZWdpc3RyeShjb25uKS50aGVuKChkZXZpY2VzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGRldmljZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImRldmljZV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPERldmljZVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZHJcIixcbiAgICBmZXRjaERldmljZVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbnRlcmZhY2UgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZXN1bHQ7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBkaXNtaXNzVGV4dD86IHN0cmluZztcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG4gIGNhbmNlbD86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGlucHV0TGFiZWw/OiBzdHJpbmc7XG4gIGlucHV0VHlwZT86IHN0cmluZztcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dQYXJhbXNcbiAgZXh0ZW5kcyBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMsXG4gICAgUHJvbXB0RGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNvbmZpcm1hdGlvbj86IGJvb2xlYW47XG4gIHByb21wdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkR2VuZXJpY0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpcm1hdGlvblwiICovIFwiLi9kaWFsb2ctYm94XCIpO1xuXG5jb25zdCBzaG93RGlhbG9nSGVscGVyID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBEaWFsb2dQYXJhbXMsXG4gIGV4dHJhPzoge1xuICAgIGNvbmZpcm1hdGlvbj86IERpYWxvZ1BhcmFtc1tcImNvbmZpcm1hdGlvblwiXTtcbiAgICBwcm9tcHQ/OiBEaWFsb2dQYXJhbXNbXCJwcm9tcHRcIl07XG4gIH1cbikgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBvcmlnQ2FuY2VsID0gZGlhbG9nUGFyYW1zLmNhbmNlbDtcbiAgICBjb25zdCBvcmlnQ29uZmlybSA9IGRpYWxvZ1BhcmFtcy5jb25maXJtO1xuXG4gICAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgICAgZGlhbG9nVGFnOiBcImRpYWxvZy1ib3hcIixcbiAgICAgIGRpYWxvZ0ltcG9ydDogbG9hZEdlbmVyaWNEaWFsb2csXG4gICAgICBkaWFsb2dQYXJhbXM6IHtcbiAgICAgICAgLi4uZGlhbG9nUGFyYW1zLFxuICAgICAgICAuLi5leHRyYSxcbiAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gbnVsbCA6IGZhbHNlKTtcbiAgICAgICAgICBpZiAob3JpZ0NhbmNlbCkge1xuICAgICAgICAgICAgb3JpZ0NhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybTogKG91dCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG91dCA6IHRydWUpO1xuICAgICAgICAgIGlmIChvcmlnQ29uZmlybSkge1xuICAgICAgICAgICAgb3JpZ0NvbmZpcm0ob3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNob3dBbGVydERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQWxlcnREaWFsb2dQYXJhbXNcbikgPT4gc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IGNvbmZpcm1hdGlvbjogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIGJvb2xlYW5cbiAgPjtcblxuZXhwb3J0IGNvbnN0IHNob3dQcm9tcHREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IFByb21wdERpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBwcm9tcHQ6IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBudWxsIHwgc3RyaW5nXG4gID47XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQU1BO0FBSUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQUE7QUFBQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBQUE7QUFBQTtBQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0NBO0FBQUE7QUFBQTtBQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUNBO0FBQUE7QUFyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFsSUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBYUE7Ozs7OztBQVFBOzs7Ozs7QUFRQTs7Ozs7QUF3R0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBakpBO0FBQUE7QUFBQTtBQUFBO0FBb0pBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7O0FBU0E7O0FBR0E7Ozs7QUFNQTs7Ozs7QUFUQTtBQWdCQTs7QUFHQTs7O0FBS0E7Ozs7QUFSQTs7O0FBckNBO0FBc0RBO0FBck5BO0FBQUE7QUFBQTtBQUFBO0FBd05BO0FBQ0E7QUFBQTtBQUNBO0FBMU5BO0FBQUE7QUFBQTtBQUFBO0FBNk5BO0FBQ0E7QUE5TkE7QUFBQTtBQUFBO0FBQUE7QUFpT0E7QUFDQTtBQWxPQTtBQUFBO0FBQUE7QUFBQTtBQXFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExT0E7QUFBQTtBQUFBO0FBQUE7QUE2T0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWxQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcVBBOzs7Ozs7Ozs7O0FBQUE7QUFXQTtBQWhRQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBWUE7QUFLQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFHQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBVUE7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUEwQkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQU1BO0FBRUE7QUFHQTtBQU1BO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDQSw2Z0JBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBSEE7QUFvQkE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUFBO0FBSUE7QUFJQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["thingtalk-dialog"],{

/***/ "./src/common/util/patch.ts":
/*!**********************************!*\
  !*** ./src/common/util/patch.ts ***!
  \**********************************/
/*! exports provided: applyPatch, getPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatch", function() { return applyPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPath", function() { return getPath; });
const applyPatch = (data, path, value) => {
  if (path.length === 1) {
    data[path[0]] = value;
    return;
  }

  if (!data[path[0]]) {
    data[path[0]] = {};
  } // eslint-disable-next-line consistent-return


  return applyPatch(data[path[0]], path.slice(1), value);
};
const getPath = (data, path) => {
  if (path.length === 1) {
    return data[path[0]];
  }

  if (data[path[0]] === undefined) {
    return undefined;
  }

  return getPath(data[path[0]], path.slice(1));
};

/***/ }),

/***/ "./src/components/device/ha-area-devices-picker.ts":
/*!*********************************************************!*\
  !*** ./src/components/device/ha-area-devices-picker.ts ***!
  \*********************************************************/
/*! exports provided: HaAreaDevicesPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaAreaDevicesPicker", function() { return HaAreaDevicesPicker; });
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _vaadin_vaadin_combo_box_theme_material_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _ha_devices_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ha-devices-picker */ "./src/components/device/ha-devices-picker.ts");
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



















const rowRenderer = (root, _owner, model) => {
  if (!root.firstElementChild) {
    root.innerHTML = `
    <style>
      paper-item {
        width: 100%;
        margin: -10px 0;
        padding: 0;
      }
      paper-icon-button {
        float: right;
      }
      .devices {
        display: none;
      }
      .devices.visible {
        display: block;
      }
    </style>
    <paper-item>
      <paper-item-body two-line="">
        <div class='name'>[[item.name]]</div>
        <div secondary>[[item.devices.length]] devices</div>
      </paper-item-body>
    </paper-item>
    `;
  }

  root.querySelector(".name").textContent = model.item.name;
  root.querySelector("[secondary]").textContent = `${model.item.devices.length.toString()} devices`;
};

let HaAreaDevicesPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["customElement"])("ha-area-devices-picker")], function (_initialize, _SubscribeMixin) {
  class HaAreaDevicesPicker extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaAreaDevicesPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "area",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "devices",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Array,
        attribute: "include-domains"
      })],
      key: "includeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Array,
        attribute: "exclude-domains"
      })],
      key: "excludeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Array,
        attribute: "include-device-classes"
      })],
      key: "includeDeviceClasses",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Boolean
      })],
      key: "_opened",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_areaPicker",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_devices",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_areas",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_entities",
      value: void 0
    }, {
      kind: "field",
      key: "_selectedDevices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_filteredDevices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_getDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])((devices, areas, entities, includeDomains, excludeDomains, includeDeviceClasses) => {
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

          let inputDevices = [...devices];

          if (includeDomains) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return false;
              }

              return deviceEntityLookup[device.id].some(entity => includeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__["computeDomain"])(entity.entity_id)));
            });
          }

          if (excludeDomains) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return true;
              }

              return entities.every(entity => !excludeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__["computeDomain"])(entity.entity_id)));
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

          this._filteredDevices = inputDevices;
          const areaLookup = {};

          for (const area of areas) {
            areaLookup[area.area_id] = area;
          }

          const devicesByArea = {};

          for (const device of inputDevices) {
            const areaId = device.area_id;

            if (areaId) {
              if (!(areaId in devicesByArea)) {
                devicesByArea[areaId] = {
                  id: areaId,
                  name: areaLookup[areaId].name,
                  devices: []
                };
              }

              devicesByArea[areaId].devices.push(device.id);
            }
          }

          const sorted = Object.keys(devicesByArea).sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_11__["compare"])(devicesByArea[a].name || "", devicesByArea[b].name || "")).map(key => devicesByArea[key]);
          return sorted;
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
        return [Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_13__["subscribeDeviceRegistry"])(this.hass.connection, devices => {
          this._devices = devices;
        }), Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_12__["subscribeAreaRegistry"])(this.hass.connection, areas => {
          this._areas = areas;
        }), Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_14__["subscribeEntityRegistry"])(this.hass.connection, entities => {
          this._entities = entities;
        })];
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaAreaDevicesPicker.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("area") && this.area) {
          this._areaPicker = true;
          this.value = this.area;
        } else if (changedProps.has("devices") && this.devices) {
          this._areaPicker = false;

          const filteredDeviceIds = this._filteredDevices.map(device => device.id);

          const selectedDevices = this.devices.filter(device => filteredDeviceIds.includes(device));

          this._setValue(selectedDevices);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._devices || !this._areas || !this._entities) {
          return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]``;
        }

        const areas = this._getDevices(this._devices, this._areas, this._entities, this.includeDomains, this.excludeDomains, this.includeDeviceClasses);

        if (!this._areaPicker || areas.length === 0) {
          return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
        <ha-devices-picker
          @value-changed=${this._devicesPicked}
          .hass=${this.hass}
          .includeDomains=${this.includeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .value=${this._selectedDevices}
          .pickDeviceLabel=${`Add ${this.label} device`}
          .pickedDeviceLabel=${`${this.label} device`}
        ></ha-devices-picker>
        ${areas.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
              <mwc-button @click=${this._switchPicker}
                >Choose an area</mwc-button
              >
            ` : ""}
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <vaadin-combo-box-light
        item-value-path="id"
        item-id-path="id"
        item-label-path="name"
        .items=${areas}
        .value=${this._value}
        .renderer=${rowRenderer}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._areaPicked}
      >
        <paper-input
          .label=${this.label === undefined && this.hass ? this.hass.localize("ui.components.device-picker.device") : `${this.label} in area`}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
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
          ${areas.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
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
      <mwc-button @click=${this._switchPicker}
        >Choose individual devices</mwc-button
      >
    `;
      }
    }, {
      kind: "method",
      key: "_clearValue",
      value: function _clearValue(ev) {
        ev.stopPropagation();

        this._setValue([]);
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        return this.value || [];
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        this._opened = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_switchPicker",
      value: async function _switchPicker() {
        this._areaPicker = !this._areaPicker;
      }
    }, {
      kind: "method",
      key: "_areaPicked",
      value: async function _areaPicked(ev) {
        const value = ev.detail.value;
        let selectedDevices = [];
        const target = ev.target;

        if (target.selectedItem) {
          selectedDevices = target.selectedItem.devices;
        }

        if (value !== this._value || this._selectedDevices !== selectedDevices) {
          this._setValue(selectedDevices, value);
        }
      }
    }, {
      kind: "method",
      key: "_devicesPicked",
      value: function _devicesPicked(ev) {
        ev.stopPropagation();
        const selectedDevices = ev.detail.value;

        this._setValue(selectedDevices);
      }
    }, {
      kind: "method",
      key: "_setValue",
      value: function _setValue(selectedDevices, value = "") {
        this.value = value;
        this._selectedDevices = selectedDevices;
        setTimeout(() => {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "value-changed", {
            value: selectedDevices
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "change");
        }, 0);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["css"]`
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
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_15__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"]));

/***/ }),

/***/ "./src/components/device/ha-devices-picker.ts":
/*!****************************************************!*\
  !*** ./src/components/device/ha-devices-picker.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button-light */ "./node_modules/@polymer/paper-icon-button/paper-icon-button-light.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _ha_device_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-device-picker */ "./src/components/device/ha-device-picker.ts");
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






let HaDevicesPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-devices-picker")], function (_initialize, _LitElement) {
  class HaDevicesPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaDevicesPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Array,
        attribute: "include-domains"
      })],
      key: "includeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Array,
        attribute: "exclude-domains"
      })],
      key: "excludeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        attribute: "picked-device-label"
      }), Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Array,
        attribute: "include-device-classes"
      })],
      key: "includeDeviceClasses",
      value: void 0
    }, {
      kind: "field",
      key: "pickedDeviceLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        attribute: "pick-device-label"
      })],
      key: "pickDeviceLabel",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Show entities from specific domains.
       * @type {string}
       * @attr include-domains
       */

      /**
       * Show no entities of these domains.
       * @type {Array}
       * @attr exclude-domains
       */
      function render() {
        if (!this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        const currentDevices = this._currentDevices;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${currentDevices.map(entityId => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
          <div>
            <ha-device-picker
              allow-custom-entity
              .curValue=${entityId}
              .hass=${this.hass}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .value=${entityId}
              .label=${this.pickedDeviceLabel}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          </div>
        `)}
      <div>
        <ha-device-picker
          .hass=${this.hass}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .label=${this.pickDeviceLabel}
          @value-changed=${this._addDevice}
        ></ha-device-picker>
      </div>
    `;
      }
    }, {
      kind: "get",
      key: "_currentDevices",
      value: function _currentDevices() {
        return this.value || [];
      }
    }, {
      kind: "method",
      key: "_updateDevices",
      value: async function _updateDevices(devices) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value: devices
        });
        this.value = devices;
      }
    }, {
      kind: "method",
      key: "_deviceChanged",
      value: function _deviceChanged(event) {
        event.stopPropagation();
        const curValue = event.currentTarget.curValue;
        const newValue = event.detail.value;

        if (newValue === curValue || newValue !== "") {
          return;
        }

        if (newValue === "") {
          this._updateDevices(this._currentDevices.filter(dev => dev !== curValue));
        } else {
          this._updateDevices(this._currentDevices.map(dev => dev === curValue ? newValue : dev));
        }
      }
    }, {
      kind: "method",
      key: "_addDevice",
      value: async function _addDevice(event) {
        event.stopPropagation();
        const toAdd = event.detail.value;
        event.currentTarget.value = "";

        if (!toAdd) {
          return;
        }

        const currentDevices = this._currentDevices;

        if (currentDevices.includes(toAdd)) {
          return;
        }

        this._updateDevices([...currentDevices, toAdd]);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/components/dialog/ha-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: HaIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIronFocusablesHelper", function() { return HaIronFocusablesHelper; });
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


const HaIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_0__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_1__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/ha-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDialog", function() { return HaPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-iron-focusables-helper */ "./src/components/dialog/ha-iron-focusables-helper.js");



const paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

const haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _ha_iron_focusables_helper__WEBPACK_IMPORTED_MODULE_2__["HaIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore

class HaPaperDialog extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass) {}
// @ts-ignore
customElements.define("ha-paper-dialog", HaPaperDialog);

/***/ }),

/***/ "./src/data/integration.ts":
/*!*********************************!*\
  !*** ./src/data/integration.ts ***!
  \*********************************/
/*! exports provided: integrationIssuesUrl, domainToName, fetchIntegrationManifests, fetchIntegrationManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integrationIssuesUrl", function() { return integrationIssuesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainToName", function() { return domainToName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIntegrationManifests", function() { return fetchIntegrationManifests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIntegrationManifest", function() { return fetchIntegrationManifest; });
const integrationIssuesUrl = domain => `https://github.com/home-assistant/home-assistant/issues?q=is%3Aissue+is%3Aopen+label%3A%22integration%3A+${domain}%22`;
const domainToName = (localize, domain) => localize(`component.${domain}.title`) || domain;
const fetchIntegrationManifests = hass => hass.callWS({
  type: "manifest/list"
});
const fetchIntegrationManifest = (hass, integration) => hass.callWS({
  type: "manifest/get",
  integration
});

/***/ }),

/***/ "./src/panels/config/automation/thingtalk/dialog-thingtalk.ts":
/*!********************************************************************!*\
  !*** ./src/panels/config/automation/thingtalk/dialog-thingtalk.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _ha_thingtalk_placeholders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-thingtalk-placeholders */ "./src/panels/config/automation/thingtalk/ha-thingtalk-placeholders.ts");
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











let DialogThingtalk = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-dialog-thinktalk")], function (_initialize, _LitElement) {
  class DialogThingtalk extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogThingtalk,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_submitting",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_opened",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_placeholders",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])("#input")],
      key: "_input",
      value: void 0
    }, {
      kind: "field",
      key: "_value",
      value: void 0
    }, {
      kind: "field",
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: function showDialog(params) {
        this._params = params;
        this._error = undefined;
        this._opened = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]``;
        }

        if (this._placeholders) {
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
        <ha-thingtalk-placeholders
          .hass=${this.hass}
          .placeholders=${this._placeholders}
          .opened=${this._opened}
          .skip=${() => this._skip()}
          @opened-changed=${this._openedChanged}
          @placeholders-filled=${this._handlePlaceholders}
        >
        </ha-thingtalk-placeholders>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <ha-paper-dialog
        with-backdrop
        .opened=${this._opened}
        @opened-changed=${this._openedChanged}
      >
        <h2>Create a new automation</h2>
        <paper-dialog-scrollable>
          ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]` <div class="error">${this._error}</div> ` : ""}
          Type below what this automation should do, and we will try to convert
          it into a Home Assistant automation. (only English is supported for
          now)<br /><br />
          For example:
          <ul @click=${this._handleExampleClick}>
            <li>
              <button class="link">
                Turn off the lights when I leave home
              </button>
            </li>
            <li>
              <button class="link">
                Turn on the lights when the sun is set
              </button>
            </li>
            <li>
              <button class="link">
                Notify me if the door opens and I am not at home
              </button>
            </li>
            <li>
              <button class="link">
                Turn the light on when motion is detected
              </button>
            </li>
          </ul>
          <paper-input
            id="input"
            label="What should this automation do?"
            autofocus
            @keyup=${this._handleKeyUp}
          ></paper-input>
          <a
            href="https://almond.stanford.edu/"
            target="_blank"
            rel="noreferrer"
            class="attribution"
            >Powered by Almond</a
          >
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button class="left" @click="${this._skip}">
            Skip
          </mwc-button>
          <mwc-button @click="${this._generate}" .disabled=${this._submitting}>
            <paper-spinner
              ?active="${this._submitting}"
              alt="Creating your automation..."
            ></paper-spinner>
            Create automation
          </mwc-button>
        </div>
      </ha-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_generate",
      value: async function _generate() {
        this._value = this._input.value;

        if (!this._value) {
          this._error = "Enter a command or tap skip.";
          return;
        }

        this._submitting = true;
        let config;
        let placeholders;

        try {
          const result = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["convertThingTalk"])(this.hass, this._value);
          config = result.config;
          placeholders = result.placeholders;
        } catch (err) {
          this._error = err.message;
          this._submitting = false;
          return;
        }

        this._submitting = false;

        if (!Object.keys(config).length) {
          this._error = "We couldn't create an automation for that (yet?).";
        } else if (Object.keys(placeholders).length) {
          this._config = config;
          this._placeholders = placeholders;
        } else {
          this._sendConfig(this._value, config);
        }
      }
    }, {
      kind: "method",
      key: "_handlePlaceholders",
      value: function _handlePlaceholders(ev) {
        const placeholderValues = ev.detail.value;
        Object.entries(placeholderValues).forEach(([type, values]) => {
          Object.entries(values).forEach(([index, placeholder]) => {
            const devices = Object.values(placeholder);

            if (devices.length === 1) {
              Object.entries(devices[0]).forEach(([field, value]) => {
                this._config[type][index][field] = value;
              });
              return;
            }

            const automation = Object.assign({}, this._config[type][index]);
            const newAutomations = [];
            devices.forEach(fields => {
              const newAutomation = Object.assign({}, automation);
              Object.entries(fields).forEach(([field, value]) => {
                newAutomation[field] = value;
              });
              newAutomations.push(newAutomation);
            });

            this._config[type].splice(index, 1, ...newAutomations);
          });
        });

        this._sendConfig(this._value, this._config);
      }
    }, {
      kind: "method",
      key: "_sendConfig",
      value: function _sendConfig(input, config) {
        this._params.callback(Object.assign({
          alias: input
        }, config));

        this._closeDialog();
      }
    }, {
      kind: "method",
      key: "_skip",
      value: function _skip() {
        this._params.callback(undefined);

        this._closeDialog();
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._placeholders = undefined;

        if (this._input) {
          this._input.value = null;
        }

        this._opened = false;
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        if (!ev.detail.value) {
          this._closeDialog();
        }
      }
    }, {
      kind: "method",
      key: "_handleKeyUp",
      value: function _handleKeyUp(ev) {
        if (ev.keyCode === 13) {
          this._generate();
        }
      }
    }, {
      kind: "method",
      key: "_handleExampleClick",
      value: function _handleExampleClick(ev) {
        this._input.value = ev.target.innerText;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyle"], _resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
        ha-paper-dialog {
          max-width: 500px;
        }
        mwc-button.left {
          margin-right: auto;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        .error {
          color: var(--google-red-500);
        }
        .attribution {
          color: var(--secondary-text-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/automation/thingtalk/ha-thingtalk-placeholders.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/config/automation/thingtalk/ha-thingtalk-placeholders.ts ***!
  \*****************************************************************************/
/*! exports provided: ThingTalkPlaceholders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThingTalkPlaceholders", function() { return ThingTalkPlaceholders; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_util_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/util/patch */ "./src/common/util/patch.ts");
/* harmony import */ var _components_device_ha_area_devices_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/device/ha-area-devices-picker */ "./src/components/device/ha-area-devices-picker.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _data_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/integration */ "./src/data/integration.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
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













let ThingTalkPlaceholders = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-thingtalk-placeholders")], function (_initialize, _SubscribeMixin) {
  class ThingTalkPlaceholders extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ThingTalkPlaceholders,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opened",
      value: void 0
    }, {
      kind: "field",
      key: "skip",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "placeholders",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      key: "_deviceEntityLookup",

      value() {
        return {};
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_extraInfo",

      value() {
        return {};
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_placeholderValues",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_devices",
      value: void 0
    }, {
      kind: "field",
      key: "_areas",
      value: void 0
    }, {
      kind: "field",
      key: "_search",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "hassSubscribe",
      value: function hassSubscribe() {
        return [Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_7__["subscribeEntityRegistry"])(this.hass.connection, entries => {
          for (const entity of entries) {
            if (!entity.device_id) {
              continue;
            }

            if (!(entity.device_id in this._deviceEntityLookup)) {
              this._deviceEntityLookup[entity.device_id] = [];
            }

            if (!this._deviceEntityLookup[entity.device_id].includes(entity.entity_id)) {
              this._deviceEntityLookup[entity.device_id].push(entity.entity_id);
            }
          }
        }), Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_6__["subscribeDeviceRegistry"])(this.hass.connection, devices => {
          this._devices = devices;

          this._searchNames();
        }), Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_5__["subscribeAreaRegistry"])(this.hass.connection, areas => {
          this._areas = areas;

          this._searchNames();
        })];
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("placeholders")) {
          this._search = true;

          this._searchNames();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-paper-dialog
        modal
        with-backdrop
        .opened=${this.opened}
        @opened-changed="${this._openedChanged}"
      >
        <h2>Great! Now we need to link some devices.</h2>
        <paper-dialog-scrollable>
          ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <div class="error">${this._error}</div> ` : ""}
          ${Object.entries(this.placeholders).map(([type, placeholders]) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <h3>
                  ${this.hass.localize(`ui.panel.config.automation.editor.${type}s.name`)}:
                </h3>
                ${placeholders.map(placeholder => {
          if (placeholder.fields.includes("device_id")) {
            const extraInfo = Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["getPath"])(this._extraInfo, [type, placeholder.index]);
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <ha-area-devices-picker
                        .type=${type}
                        .placeholder=${placeholder}
                        @value-changed=${this._devicePicked}
                        .hass=${this.hass}
                        .area=${extraInfo ? extraInfo.area_id : undefined}
                        .devices=${extraInfo && extraInfo.device_ids ? extraInfo.device_ids : undefined}
                        .includeDomains=${placeholder.domains}
                        .includeDeviceClasses=${placeholder.device_classes}
                        .label=${this._getLabel(placeholder.domains, placeholder.device_classes)}
                      ></ha-area-devices-picker>
                      ${extraInfo && extraInfo.manualEntity ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                            <h3>
                              One or more devices have more than one matching
                              entity, please pick the one you want to use.
                            </h3>
                            ${Object.keys(extraInfo.manualEntity).map(idx => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                                <ha-entity-picker
                                  id="device-entity-picker"
                                  .type=${type}
                                  .placeholder=${placeholder}
                                  .index=${idx}
                                  @change=${this._entityPicked}
                                  .includeDomains=${placeholder.domains}
                                  .includeDeviceClasses=${placeholder.device_classes}
                                  .hass=${this.hass}
                                  .label=${`${this._getLabel(placeholder.domains, placeholder.device_classes)} of device ${this._getDeviceName(Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["getPath"])(this._placeholderValues, [type, placeholder.index, idx, "device_id"]))}`}
                                  .entityFilter=${state => {
              const devId = this._placeholderValues[type][placeholder.index][idx].device_id;
              return this._deviceEntityLookup[devId].includes(state.entity_id);
            }}
                                ></ha-entity-picker>
                              `)}
                          ` : ""}
                    `;
          }

          if (placeholder.fields.includes("entity_id")) {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <ha-entity-picker
                        .type=${type}
                        .placeholder=${placeholder}
                        @change=${this._entityPicked}
                        .includeDomains=${placeholder.domains}
                        .includeDeviceClasses=${placeholder.device_classes}
                        .hass=${this.hass}
                        .label=${this._getLabel(placeholder.domains, placeholder.device_classes)}
                      ></ha-entity-picker>
                    `;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <div class="error">
                      Unknown placeholder<br />
                      ${placeholder.domains}<br />
                      ${placeholder.fields.map(field => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` ${field}<br /> `)}
                    </div>
                  `;
        })}
              `)}
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button class="left" @click="${this.skip}">
            Skip
          </mwc-button>
          <mwc-button @click="${this._done}" .disabled=${!this._isDone}>
            Create automation
          </mwc-button>
        </div>
      </ha-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_getDeviceName",
      value: function _getDeviceName(deviceId) {
        if (!this._devices) {
          return "";
        }

        const foundDevice = this._devices.find(device => device.id === deviceId);

        if (!foundDevice) {
          return "";
        }

        return foundDevice.name_by_user || foundDevice.name || "";
      }
    }, {
      kind: "method",
      key: "_searchNames",
      value: function _searchNames() {
        if (!this._search || !this._areas || !this._devices) {
          return;
        }

        this._search = false;
        Object.entries(this.placeholders).forEach(([type, placeholders]) => placeholders.forEach(placeholder => {
          if (!placeholder.name) {
            return;
          }

          const name = placeholder.name;

          const foundArea = this._areas.find(area => area.name.toLowerCase().includes(name));

          if (foundArea) {
            Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["applyPatch"])(this._extraInfo, [type, placeholder.index, "area_id"], foundArea.area_id);
            this.requestUpdate("_extraInfo");
            return;
          }

          const foundDevices = this._devices.filter(device => {
            const deviceName = device.name_by_user || device.name;

            if (!deviceName) {
              return false;
            }

            return deviceName.toLowerCase().includes(name);
          });

          if (foundDevices.length) {
            Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["applyPatch"])(this._extraInfo, [type, placeholder.index, "device_ids"], foundDevices.map(device => device.id));
            this.requestUpdate("_extraInfo");
          }
        }));
      }
    }, {
      kind: "get",
      key: "_isDone",
      value: function _isDone() {
        return Object.entries(this.placeholders).every(([type, placeholders]) => placeholders.every(placeholder => placeholder.fields.every(field => {
          const entries = Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["getPath"])(this._placeholderValues, [type, placeholder.index]);

          if (!entries) {
            return false;
          }

          const values = Object.values(entries);
          return values.every(entry => entry[field] !== undefined && entry[field] !== "");
        })));
      }
    }, {
      kind: "method",
      key: "_getLabel",
      value: function _getLabel(domains, deviceClasses) {
        return `${domains.map(domain => Object(_data_integration__WEBPACK_IMPORTED_MODULE_8__["domainToName"])(this.hass.localize, domain)).join(", ")}${deviceClasses ? ` of type ${deviceClasses.join(", ")}` : ""}`;
      }
    }, {
      kind: "method",
      key: "_devicePicked",
      value: function _devicePicked(ev) {
        const value = ev.detail.value;

        if (!value) {
          return;
        }

        const target = ev.target;
        const placeholder = target.placeholder;
        const type = target.type;
        let oldValues = Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["getPath"])(this._placeholderValues, [type, placeholder.index]);

        if (oldValues) {
          oldValues = Object.values(oldValues);
        }

        const oldExtraInfo = Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["getPath"])(this._extraInfo, [type, placeholder.index]);

        if (this._placeholderValues[type]) {
          delete this._placeholderValues[type][placeholder.index];
        }

        if (this._extraInfo[type]) {
          delete this._extraInfo[type][placeholder.index];
        }

        if (!value.length) {
          this.requestUpdate("_placeholderValues");
          return;
        }

        value.forEach((deviceId, index) => {
          let oldIndex;

          if (oldValues) {
            const oldDevice = oldValues.find((oldVal, idx) => {
              oldIndex = idx;
              return oldVal.device_id === deviceId;
            });

            if (oldDevice) {
              Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["applyPatch"])(this._placeholderValues, [type, placeholder.index, index], oldDevice);

              if (oldExtraInfo) {
                Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["applyPatch"])(this._extraInfo, [type, placeholder.index, index], oldExtraInfo[oldIndex]);
              }

              return;
            }
          }

          Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["applyPatch"])(this._placeholderValues, [type, placeholder.index, index, "device_id"], deviceId);

          if (!placeholder.fields.includes("entity_id")) {
            return;
          }

          const devEntities = this._deviceEntityLookup[deviceId];
          const entities = devEntities.filter(eid => {
            if (placeholder.device_classes) {
              const stateObj = this.hass.states[eid];

              if (!stateObj) {
                return false;
              }

              return placeholder.domains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_2__["computeDomain"])(eid)) && stateObj.attributes.device_class && placeholder.device_classes.includes(stateObj.attributes.device_class);
            }

            return placeholder.domains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_2__["computeDomain"])(eid));
          });

          if (entities.length === 0) {
            // Should not happen because we filter the device picker on domain
            this._error = `No ${placeholder.domains.map(domain => Object(_data_integration__WEBPACK_IMPORTED_MODULE_8__["domainToName"])(this.hass.localize, domain)).join(", ")} entities found in this device.`;
          } else if (entities.length === 1) {
            Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["applyPatch"])(this._placeholderValues, [type, placeholder.index, index, "entity_id"], entities[0]);
            this.requestUpdate("_placeholderValues");
          } else {
            delete this._placeholderValues[type][placeholder.index][index].entity_id;
            Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["applyPatch"])(this._extraInfo, [type, placeholder.index, "manualEntity", index], true);
            this.requestUpdate("_placeholderValues");
          }
        });
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this.shadowRoot.querySelector("ha-paper-dialog"), "iron-resize");
      }
    }, {
      kind: "method",
      key: "_entityPicked",
      value: function _entityPicked(ev) {
        const target = ev.target;
        const placeholder = target.placeholder;
        const value = target.value;
        const type = target.type;
        const index = target.index || 0;
        Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_3__["applyPatch"])(this._placeholderValues, [type, placeholder.index, index, "entity_id"], value);
        this.requestUpdate("_placeholderValues");
      }
    }, {
      kind: "method",
      key: "_done",
      value: function _done() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "placeholders-filled", {
          value: this._placeholderValues
        });
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        // The opened-changed event doesn't leave the shadowdom so we re-dispatch it
        this.dispatchEvent(new CustomEvent(ev.type, ev));
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        ha-paper-dialog {
          max-width: 500px;
        }
        mwc-button.left {
          margin-right: auto;
        }
        paper-dialog-scrollable {
          margin-top: 10px;
        }
        h3 {
          margin: 10px 0 0 0;
          font-weight: 500;
        }
        .error {
          color: var(--google-red-500);
        }
      `];
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_9__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpbmd0YWxrLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9wYXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2UvaGEtYXJlYS1kZXZpY2VzLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlcy1waWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbnRlZ3JhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9hdXRvbWF0aW9uL3RoaW5ndGFsay9kaWFsb2ctdGhpbmd0YWxrLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2F1dG9tYXRpb24vdGhpbmd0YWxrL2hhLXRoaW5ndGFsay1wbGFjZWhvbGRlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwcGx5UGF0Y2ggPSAoZGF0YSwgcGF0aCwgdmFsdWUpOiB2b2lkID0+IHtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgZGF0YVtwYXRoWzBdXSA9IHZhbHVlO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWRhdGFbcGF0aFswXV0pIHtcbiAgICBkYXRhW3BhdGhbMF1dID0ge307XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIHJldHVybiBhcHBseVBhdGNoKGRhdGFbcGF0aFswXV0sIHBhdGguc2xpY2UoMSksIHZhbHVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYXRoID0gKGRhdGEsIHBhdGgpOiBhbnkgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZGF0YVtwYXRoWzBdXTtcbiAgfVxuICBpZiAoZGF0YVtwYXRoWzBdXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gZ2V0UGF0aChkYXRhW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpKTtcbn07XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvbi9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1jb21iby1ib3gtbGlnaHRcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IHtcbiAgQXJlYVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZUFyZWFSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlRW50aXR5TG9va3VwLFxuICBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Vic2NyaWJlLW1peGluXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4vaGEtZGV2aWNlcy1waWNrZXJcIjtcblxuaW50ZXJmYWNlIERldmljZXNCeUFyZWEge1xuICBbYXJlYUlkOiBzdHJpbmddOiBBcmVhRGV2aWNlcztcbn1cblxuaW50ZXJmYWNlIEFyZWFEZXZpY2VzIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGV2aWNlczogc3RyaW5nW107XG59XG5cbmNvbnN0IHJvd1JlbmRlcmVyID0gKFxuICByb290OiBIVE1MRWxlbWVudCxcbiAgX293bmVyLFxuICBtb2RlbDogeyBpdGVtOiBBcmVhRGV2aWNlcyB9XG4pID0+IHtcbiAgaWYgKCFyb290LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgcm9vdC5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IC0xMHB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICAgIC5kZXZpY2VzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5kZXZpY2VzLnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz5bW2l0ZW0ubmFtZV1dPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PltbaXRlbS5kZXZpY2VzLmxlbmd0aF1dIGRldmljZXM8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgIDwvcGFwZXItaXRlbT5cbiAgICBgO1xuICB9XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpIS50ZXh0Q29udGVudCA9IG1vZGVsLml0ZW0ubmFtZSE7XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcbiAgICBcIltzZWNvbmRhcnldXCJcbiAgKSEudGV4dENvbnRlbnQgPSBgJHttb2RlbC5pdGVtLmRldmljZXMubGVuZ3RoLnRvU3RyaW5nKCl9IGRldmljZXNgO1xufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1hcmVhLWRldmljZXMtcGlja2VyXCIpXG5leHBvcnQgY2xhc3MgSGFBcmVhRGV2aWNlc1BpY2tlciBleHRlbmRzIFN1YnNjcmliZU1peGluKExpdEVsZW1lbnQpIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGFyZWE/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGRldmljZXM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU2hvdyBvbmx5IGRldmljZXMgd2l0aCBlbnRpdGllcyBmcm9tIHNwZWNpZmljIGRvbWFpbnMuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICogQGF0dHIgaW5jbHVkZS1kb21haW5zXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImluY2x1ZGUtZG9tYWluc1wiIH0pXG4gIHB1YmxpYyBpbmNsdWRlRG9tYWlucz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBTaG93IG5vIGRldmljZXMgd2l0aCBlbnRpdGllcyBvZiB0aGVzZSBkb21haW5zLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqIEBhdHRyIGV4Y2x1ZGUtZG9tYWluc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJleGNsdWRlLWRvbWFpbnNcIiB9KVxuICBwdWJsaWMgZXhjbHVkZURvbWFpbnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU2hvdyBvbmx5IGRldmljZWQgd2l0aCBlbnRpdGllcyBvZiB0aGVzZSBkZXZpY2UgY2xhc3Nlcy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAYXR0ciBpbmNsdWRlLWRldmljZS1jbGFzc2VzXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImluY2x1ZGUtZGV2aWNlLWNsYXNzZXNcIiB9KVxuICBwdWJsaWMgaW5jbHVkZURldmljZUNsYXNzZXM/OiBzdHJpbmdbXTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHByaXZhdGUgX29wZW5lZD86IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYXJlYVBpY2tlciA9IHRydWU7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGV2aWNlcz86IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hcmVhcz86IEFyZWFSZWdpc3RyeUVudHJ5W107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXRpZXM/OiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWREZXZpY2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2ZpbHRlcmVkRGV2aWNlczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdID0gW107XG5cbiAgcHJpdmF0ZSBfZ2V0RGV2aWNlcyA9IG1lbW9pemVPbmUoXG4gICAgKFxuICAgICAgZGV2aWNlczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdLFxuICAgICAgYXJlYXM6IEFyZWFSZWdpc3RyeUVudHJ5W10sXG4gICAgICBlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdLFxuICAgICAgaW5jbHVkZURvbWFpbnM6IHRoaXNbXCJpbmNsdWRlRG9tYWluc1wiXSxcbiAgICAgIGV4Y2x1ZGVEb21haW5zOiB0aGlzW1wiZXhjbHVkZURvbWFpbnNcIl0sXG4gICAgICBpbmNsdWRlRGV2aWNlQ2xhc3NlczogdGhpc1tcImluY2x1ZGVEZXZpY2VDbGFzc2VzXCJdXG4gICAgKTogQXJlYURldmljZXNbXSA9PiB7XG4gICAgICBpZiAoIWRldmljZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV2aWNlRW50aXR5TG9va3VwOiBEZXZpY2VFbnRpdHlMb29rdXAgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzKSB7XG4gICAgICAgIGlmICghZW50aXR5LmRldmljZV9pZCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVudGl0eS5kZXZpY2VfaWQgaW4gZGV2aWNlRW50aXR5TG9va3VwKSkge1xuICAgICAgICAgIGRldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGRldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXS5wdXNoKGVudGl0eSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBpbnB1dERldmljZXMgPSBbLi4uZGV2aWNlc107XG5cbiAgICAgIGlmIChpbmNsdWRlRG9tYWlucykge1xuICAgICAgICBpbnB1dERldmljZXMgPSBpbnB1dERldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IHtcbiAgICAgICAgICBjb25zdCBkZXZFbnRpdGllcyA9IGRldmljZUVudGl0eUxvb2t1cFtkZXZpY2UuaWRdO1xuICAgICAgICAgIGlmICghZGV2RW50aXRpZXMgfHwgIWRldkVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF0uc29tZSgoZW50aXR5KSA9PlxuICAgICAgICAgICAgaW5jbHVkZURvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4Y2x1ZGVEb21haW5zKSB7XG4gICAgICAgIGlucHV0RGV2aWNlcyA9IGlucHV0RGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldkVudGl0aWVzID0gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF07XG4gICAgICAgICAgaWYgKCFkZXZFbnRpdGllcyB8fCAhZGV2RW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVudGl0aWVzLmV2ZXJ5KFxuICAgICAgICAgICAgKGVudGl0eSkgPT5cbiAgICAgICAgICAgICAgIWV4Y2x1ZGVEb21haW5zLmluY2x1ZGVzKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmNsdWRlRGV2aWNlQ2xhc3Nlcykge1xuICAgICAgICBpbnB1dERldmljZXMgPSBpbnB1dERldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IHtcbiAgICAgICAgICBjb25zdCBkZXZFbnRpdGllcyA9IGRldmljZUVudGl0eUxvb2t1cFtkZXZpY2UuaWRdO1xuICAgICAgICAgIGlmICghZGV2RW50aXRpZXMgfHwgIWRldkVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF0uc29tZSgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF07XG4gICAgICAgICAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzICYmXG4gICAgICAgICAgICAgIGluY2x1ZGVEZXZpY2VDbGFzc2VzLmluY2x1ZGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2ZpbHRlcmVkRGV2aWNlcyA9IGlucHV0RGV2aWNlcztcblxuICAgICAgY29uc3QgYXJlYUxvb2t1cDogeyBbYXJlYUlkOiBzdHJpbmddOiBBcmVhUmVnaXN0cnlFbnRyeSB9ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGFyZWEgb2YgYXJlYXMpIHtcbiAgICAgICAgYXJlYUxvb2t1cFthcmVhLmFyZWFfaWRdID0gYXJlYTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV2aWNlc0J5QXJlYTogRGV2aWNlc0J5QXJlYSA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IGRldmljZSBvZiBpbnB1dERldmljZXMpIHtcbiAgICAgICAgY29uc3QgYXJlYUlkID0gZGV2aWNlLmFyZWFfaWQ7XG4gICAgICAgIGlmIChhcmVhSWQpIHtcbiAgICAgICAgICBpZiAoIShhcmVhSWQgaW4gZGV2aWNlc0J5QXJlYSkpIHtcbiAgICAgICAgICAgIGRldmljZXNCeUFyZWFbYXJlYUlkXSA9IHtcbiAgICAgICAgICAgICAgaWQ6IGFyZWFJZCxcbiAgICAgICAgICAgICAgbmFtZTogYXJlYUxvb2t1cFthcmVhSWRdLm5hbWUsXG4gICAgICAgICAgICAgIGRldmljZXM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGV2aWNlc0J5QXJlYVthcmVhSWRdLmRldmljZXMucHVzaChkZXZpY2UuaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNvcnRlZCA9IE9iamVjdC5rZXlzKGRldmljZXNCeUFyZWEpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgIGNvbXBhcmUoZGV2aWNlc0J5QXJlYVthXS5uYW1lIHx8IFwiXCIsIGRldmljZXNCeUFyZWFbYl0ubmFtZSB8fCBcIlwiKVxuICAgICAgICApXG4gICAgICAgIC5tYXAoKGtleSkgPT4gZGV2aWNlc0J5QXJlYVtrZXldKTtcblxuICAgICAgcmV0dXJuIHNvcnRlZDtcbiAgICB9XG4gICk7XG5cbiAgcHVibGljIGhhc3NTdWJzY3JpYmUoKTogVW5zdWJzY3JpYmVGdW5jW10ge1xuICAgIHJldHVybiBbXG4gICAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiEsIChkZXZpY2VzKSA9PiB7XG4gICAgICAgIHRoaXMuX2RldmljZXMgPSBkZXZpY2VzO1xuICAgICAgfSksXG4gICAgICBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24hLCAoYXJlYXMpID0+IHtcbiAgICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24hLCAoZW50aXRpZXMpID0+IHtcbiAgICAgICAgdGhpcy5fZW50aXRpZXMgPSBlbnRpdGllcztcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiYXJlYVwiKSAmJiB0aGlzLmFyZWEpIHtcbiAgICAgIHRoaXMuX2FyZWFQaWNrZXIgPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuYXJlYTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJkZXZpY2VzXCIpICYmIHRoaXMuZGV2aWNlcykge1xuICAgICAgdGhpcy5fYXJlYVBpY2tlciA9IGZhbHNlO1xuICAgICAgY29uc3QgZmlsdGVyZWREZXZpY2VJZHMgPSB0aGlzLl9maWx0ZXJlZERldmljZXMubWFwKFxuICAgICAgICAoZGV2aWNlKSA9PiBkZXZpY2UuaWRcbiAgICAgICk7XG4gICAgICBjb25zdCBzZWxlY3RlZERldmljZXMgPSB0aGlzLmRldmljZXMuZmlsdGVyKChkZXZpY2UpID0+XG4gICAgICAgIGZpbHRlcmVkRGV2aWNlSWRzLmluY2x1ZGVzKGRldmljZSlcbiAgICAgICk7XG4gICAgICB0aGlzLl9zZXRWYWx1ZShzZWxlY3RlZERldmljZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fZGV2aWNlcyB8fCAhdGhpcy5fYXJlYXMgfHwgIXRoaXMuX2VudGl0aWVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCBhcmVhcyA9IHRoaXMuX2dldERldmljZXMoXG4gICAgICB0aGlzLl9kZXZpY2VzLFxuICAgICAgdGhpcy5fYXJlYXMsXG4gICAgICB0aGlzLl9lbnRpdGllcyxcbiAgICAgIHRoaXMuaW5jbHVkZURvbWFpbnMsXG4gICAgICB0aGlzLmV4Y2x1ZGVEb21haW5zLFxuICAgICAgdGhpcy5pbmNsdWRlRGV2aWNlQ2xhc3Nlc1xuICAgICk7XG4gICAgaWYgKCF0aGlzLl9hcmVhUGlja2VyIHx8IGFyZWFzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYS1kZXZpY2VzLXBpY2tlclxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZGV2aWNlc1BpY2tlZH1cbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAuaW5jbHVkZURvbWFpbnM9JHt0aGlzLmluY2x1ZGVEb21haW5zfVxuICAgICAgICAgIC5pbmNsdWRlRGV2aWNlQ2xhc3Nlcz0ke3RoaXMuaW5jbHVkZURldmljZUNsYXNzZXN9XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fc2VsZWN0ZWREZXZpY2VzfVxuICAgICAgICAgIC5waWNrRGV2aWNlTGFiZWw9JHtgQWRkICR7dGhpcy5sYWJlbH0gZGV2aWNlYH1cbiAgICAgICAgICAucGlja2VkRGV2aWNlTGFiZWw9JHtgJHt0aGlzLmxhYmVsfSBkZXZpY2VgfVxuICAgICAgICA+PC9oYS1kZXZpY2VzLXBpY2tlcj5cbiAgICAgICAgJHthcmVhcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9zd2l0Y2hQaWNrZXJ9XG4gICAgICAgICAgICAgICAgPkNob29zZSBhbiBhcmVhPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0XG4gICAgICAgIGl0ZW0tdmFsdWUtcGF0aD1cImlkXCJcbiAgICAgICAgaXRlbS1pZC1wYXRoPVwiaWRcIlxuICAgICAgICBpdGVtLWxhYmVsLXBhdGg9XCJuYW1lXCJcbiAgICAgICAgLml0ZW1zPSR7YXJlYXN9XG4gICAgICAgIC52YWx1ZT0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAucmVuZGVyZXI9JHtyb3dSZW5kZXJlcn1cbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9hcmVhUGlja2VkfVxuICAgICAgPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsID09PSB1bmRlZmluZWQgJiYgdGhpcy5oYXNzXG4gICAgICAgICAgICA/IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMuZGV2aWNlLXBpY2tlci5kZXZpY2VcIilcbiAgICAgICAgICAgIDogYCR7dGhpcy5sYWJlbH0gaW4gYXJlYWB9XG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJub25lXCJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLnZhbHVlXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmNvbXBvbmVudHMuZGV2aWNlLXBpY2tlci5jbGVhclwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jbGVhclZhbHVlfVxuICAgICAgICAgICAgICAgICAgbm8tcmlwcGxlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHthcmVhcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmNvbXBvbmVudHMuZGV2aWNlLXBpY2tlci5zaG93X2RldmljZXNcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIC5pY29uPSR7dGhpcy5fb3BlbmVkID8gXCJoYXNzOm1lbnUtdXBcIiA6IFwiaGFzczptZW51LWRvd25cIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUb2dnbGVcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9zd2l0Y2hQaWNrZXJ9XG4gICAgICAgID5DaG9vc2UgaW5kaXZpZHVhbCBkZXZpY2VzPC9td2MtYnV0dG9uXG4gICAgICA+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyVmFsdWUoZXY6IEV2ZW50KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5fc2V0VmFsdWUoW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPikge1xuICAgIHRoaXMuX29wZW5lZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3N3aXRjaFBpY2tlcigpIHtcbiAgICB0aGlzLl9hcmVhUGlja2VyID0gIXRoaXMuX2FyZWFQaWNrZXI7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9hcmVhUGlja2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBsZXQgc2VsZWN0ZWREZXZpY2VzID0gW107XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIGFueTtcbiAgICBpZiAodGFyZ2V0LnNlbGVjdGVkSXRlbSkge1xuICAgICAgc2VsZWN0ZWREZXZpY2VzID0gdGFyZ2V0LnNlbGVjdGVkSXRlbS5kZXZpY2VzO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmFsdWUgfHwgdGhpcy5fc2VsZWN0ZWREZXZpY2VzICE9PSBzZWxlY3RlZERldmljZXMpIHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKHNlbGVjdGVkRGV2aWNlcywgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RldmljZXNQaWNrZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgc2VsZWN0ZWREZXZpY2VzID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX3NldFZhbHVlKHNlbGVjdGVkRGV2aWNlcyk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRWYWx1ZShzZWxlY3RlZERldmljZXM6IHN0cmluZ1tdLCB2YWx1ZSA9IFwiXCIpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VzID0gc2VsZWN0ZWREZXZpY2VzO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiBzZWxlY3RlZERldmljZXMgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgfSwgMCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1pbnB1dCA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWFyZWEtZGV2aWNlcy1waWNrZXJcIjogSGFBcmVhRGV2aWNlc1BpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24tbGlnaHRcIjtcbmltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4vaGEtZGV2aWNlLXBpY2tlclwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWRldmljZXMtcGlja2VyXCIpXG5jbGFzcyBIYURldmljZXNQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBTaG93IGVudGl0aWVzIGZyb20gc3BlY2lmaWMgZG9tYWlucy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGF0dHIgaW5jbHVkZS1kb21haW5zXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImluY2x1ZGUtZG9tYWluc1wiIH0pXG4gIHB1YmxpYyBpbmNsdWRlRG9tYWlucz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBTaG93IG5vIGVudGl0aWVzIG9mIHRoZXNlIGRvbWFpbnMuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICogQGF0dHIgZXhjbHVkZS1kb21haW5zXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImV4Y2x1ZGUtZG9tYWluc1wiIH0pXG4gIHB1YmxpYyBleGNsdWRlRG9tYWlucz86IHN0cmluZ1tdO1xuXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogXCJwaWNrZWQtZGV2aWNlLWxhYmVsXCIgfSlcbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJpbmNsdWRlLWRldmljZS1jbGFzc2VzXCIgfSlcbiAgcHVibGljIGluY2x1ZGVEZXZpY2VDbGFzc2VzPzogc3RyaW5nW107XG5cbiAgcHVibGljIHBpY2tlZERldmljZUxhYmVsPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogXCJwaWNrLWRldmljZS1sYWJlbFwiIH0pIHB1YmxpYyBwaWNrRGV2aWNlTGFiZWw/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudERldmljZXMgPSB0aGlzLl9jdXJyZW50RGV2aWNlcztcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7Y3VycmVudERldmljZXMubWFwKFxuICAgICAgICAoZW50aXR5SWQpID0+IGh0bWxgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoYS1kZXZpY2UtcGlja2VyXG4gICAgICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgICAgICAgLmN1clZhbHVlPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAuaW5jbHVkZURvbWFpbnM9JHt0aGlzLmluY2x1ZGVEb21haW5zfVxuICAgICAgICAgICAgICAuZXhjbHVkZURvbWFpbnM9JHt0aGlzLmV4Y2x1ZGVEb21haW5zfVxuICAgICAgICAgICAgICAuaW5jbHVkZURldmljZUNsYXNzZXM9JHt0aGlzLmluY2x1ZGVEZXZpY2VDbGFzc2VzfVxuICAgICAgICAgICAgICAudmFsdWU9JHtlbnRpdHlJZH1cbiAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5waWNrZWREZXZpY2VMYWJlbH1cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9kZXZpY2VDaGFuZ2VkfVxuICAgICAgICAgICAgPjwvaGEtZGV2aWNlLXBpY2tlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgKX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1kZXZpY2UtcGlja2VyXG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLmluY2x1ZGVEb21haW5zPSR7dGhpcy5pbmNsdWRlRG9tYWluc31cbiAgICAgICAgICAuZXhjbHVkZURvbWFpbnM9JHt0aGlzLmV4Y2x1ZGVEb21haW5zfVxuICAgICAgICAgIC5pbmNsdWRlRGV2aWNlQ2xhc3Nlcz0ke3RoaXMuaW5jbHVkZURldmljZUNsYXNzZXN9XG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5waWNrRGV2aWNlTGFiZWx9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9hZGREZXZpY2V9XG4gICAgICAgID48L2hhLWRldmljZS1waWNrZXI+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2N1cnJlbnREZXZpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRGV2aWNlcyhkZXZpY2VzKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogZGV2aWNlcyxcbiAgICB9KTtcblxuICAgIHRoaXMudmFsdWUgPSBkZXZpY2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGV2aWNlQ2hhbmdlZChldmVudDogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY3VyVmFsdWUgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBhbnkpLmN1clZhbHVlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gY3VyVmFsdWUgfHwgbmV3VmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5ld1ZhbHVlID09PSBcIlwiKSB7XG4gICAgICB0aGlzLl91cGRhdGVEZXZpY2VzKFxuICAgICAgICB0aGlzLl9jdXJyZW50RGV2aWNlcy5maWx0ZXIoKGRldikgPT4gZGV2ICE9PSBjdXJWYWx1ZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZURldmljZXMoXG4gICAgICAgIHRoaXMuX2N1cnJlbnREZXZpY2VzLm1hcCgoZGV2KSA9PiAoZGV2ID09PSBjdXJWYWx1ZSA/IG5ld1ZhbHVlIDogZGV2KSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWRkRGV2aWNlKGV2ZW50OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB0b0FkZCA9IGV2ZW50LmRldGFpbC52YWx1ZTtcbiAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcbiAgICBpZiAoIXRvQWRkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnREZXZpY2VzID0gdGhpcy5fY3VycmVudERldmljZXM7XG4gICAgaWYgKGN1cnJlbnREZXZpY2VzLmluY2x1ZGVzKHRvQWRkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZURldmljZXMoWy4uLmN1cnJlbnREZXZpY2VzLCB0b0FkZF0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1kZXZpY2VzLXBpY2tlclwiOiBIYURldmljZXNQaWNrZXI7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyXCI7XG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbiAobm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB0eXBlIHsgUGFwZXJEaWFsb2dFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXJcIjtcblxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgUGFwZXJEaWFsb2dFbGVtZW50XG4+O1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG4vLyBAdHMtaWdub3JlXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVncmF0aW9uTWFuaWZlc3Qge1xuICBpc19idWlsdF9pbjogYm9vbGVhbjtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgY29uZmlnX2Zsb3c6IGJvb2xlYW47XG4gIGRvY3VtZW50YXRpb246IHN0cmluZztcbiAgZGVwZW5kZW5jaWVzPzogc3RyaW5nW107XG4gIGFmdGVyX2RlcGVuZGVuY2llcz86IHN0cmluZ1tdO1xuICBjb2Rlb3duZXJzPzogc3RyaW5nW107XG4gIHJlcXVpcmVtZW50cz86IHN0cmluZ1tdO1xuICBzc2RwPzogQXJyYXk8eyBtYW51ZmFjdHVyZXI/OiBzdHJpbmc7IG1vZGVsTmFtZT86IHN0cmluZzsgc3Q/OiBzdHJpbmcgfT47XG4gIHplcm9jb25mPzogc3RyaW5nW107XG4gIGhvbWVraXQ/OiB7IG1vZGVsczogc3RyaW5nW10gfTtcbiAgcXVhbGl0eV9zY2FsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGludGVncmF0aW9uSXNzdWVzVXJsID0gKGRvbWFpbjogc3RyaW5nKSA9PlxuICBgaHR0cHM6Ly9naXRodWIuY29tL2hvbWUtYXNzaXN0YW50L2hvbWUtYXNzaXN0YW50L2lzc3Vlcz9xPWlzJTNBaXNzdWUraXMlM0FvcGVuK2xhYmVsJTNBJTIyaW50ZWdyYXRpb24lM0ErJHtkb21haW59JTIyYDtcblxuZXhwb3J0IGNvbnN0IGRvbWFpblRvTmFtZSA9IChsb2NhbGl6ZTogTG9jYWxpemVGdW5jLCBkb21haW46IHN0cmluZykgPT5cbiAgbG9jYWxpemUoYGNvbXBvbmVudC4ke2RvbWFpbn0udGl0bGVgKSB8fCBkb21haW47XG5cbmV4cG9ydCBjb25zdCBmZXRjaEludGVncmF0aW9uTWFuaWZlc3RzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPEludGVncmF0aW9uTWFuaWZlc3RbXT4oeyB0eXBlOiBcIm1hbmlmZXN0L2xpc3RcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoSW50ZWdyYXRpb25NYW5pZmVzdCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaW50ZWdyYXRpb246IHN0cmluZ1xuKSA9PiBoYXNzLmNhbGxXUzxJbnRlZ3JhdGlvbk1hbmlmZXN0Pih7IHR5cGU6IFwibWFuaWZlc3QvZ2V0XCIsIGludGVncmF0aW9uIH0pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHR5cGUgeyBQYXBlcklucHV0RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB0eXBlIHsgQXV0b21hdGlvbkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2F1dG9tYXRpb25cIjtcbmltcG9ydCB7IGNvbnZlcnRUaGluZ1RhbGsgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHR5cGUgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGUsIGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IFRoaW5ndGFsa0RpYWxvZ1BhcmFtcyB9IGZyb20gXCIuLi9zaG93LWRpYWxvZy10aGluZ3RhbGtcIjtcbmltcG9ydCBcIi4vaGEtdGhpbmd0YWxrLXBsYWNlaG9sZGVyc1wiO1xuaW1wb3J0IHR5cGUgeyBQbGFjZWhvbGRlclZhbHVlcyB9IGZyb20gXCIuL2hhLXRoaW5ndGFsay1wbGFjZWhvbGRlcnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQbGFjZWhvbGRlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgaW5kZXg6IG51bWJlcjtcbiAgZmllbGRzOiBzdHJpbmdbXTtcbiAgZG9tYWluczogc3RyaW5nW107XG4gIGRldmljZV9jbGFzc2VzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxhY2Vob2xkZXJDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBQbGFjZWhvbGRlcltdO1xufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLWRpYWxvZy10aGlua3RhbGtcIilcbmNsYXNzIERpYWxvZ1RoaW5ndGFsayBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogVGhpbmd0YWxrRGlhbG9nUGFyYW1zO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N1Ym1pdHRpbmcgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wbGFjZWhvbGRlcnM/OiBQbGFjZWhvbGRlckNvbnRhaW5lcjtcblxuICBAcXVlcnkoXCIjaW5wdXRcIikgcHJpdmF0ZSBfaW5wdXQ/OiBQYXBlcklucHV0RWxlbWVudDtcblxuICBwcml2YXRlIF92YWx1ZSE6IHN0cmluZztcblxuICBwcml2YXRlIF9jb25maWchOiBQYXJ0aWFsPEF1dG9tYXRpb25Db25maWc+O1xuXG4gIHB1YmxpYyBzaG93RGlhbG9nKHBhcmFtczogVGhpbmd0YWxrRGlhbG9nUGFyYW1zKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BsYWNlaG9sZGVycykge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYS10aGluZ3RhbGstcGxhY2Vob2xkZXJzXG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLnBsYWNlaG9sZGVycz0ke3RoaXMuX3BsYWNlaG9sZGVyc31cbiAgICAgICAgICAub3BlbmVkPSR7dGhpcy5fb3BlbmVkfVxuICAgICAgICAgIC5za2lwPSR7KCkgPT4gdGhpcy5fc2tpcCgpfVxuICAgICAgICAgIEBvcGVuZWQtY2hhbmdlZD0ke3RoaXMuX29wZW5lZENoYW5nZWR9XG4gICAgICAgICAgQHBsYWNlaG9sZGVycy1maWxsZWQ9JHt0aGlzLl9oYW5kbGVQbGFjZWhvbGRlcnN9XG4gICAgICAgID5cbiAgICAgICAgPC9oYS10aGluZ3RhbGstcGxhY2Vob2xkZXJzPlxuICAgICAgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZGlhbG9nXG4gICAgICAgIHdpdGgtYmFja2Ryb3BcbiAgICAgICAgLm9wZW5lZD0ke3RoaXMuX29wZW5lZH1cbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgPGgyPkNyZWF0ZSBhIG5ldyBhdXRvbWF0aW9uPC9oMj5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICR7dGhpcy5fZXJyb3IgPyBodG1sYCA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PiBgIDogXCJcIn1cbiAgICAgICAgICBUeXBlIGJlbG93IHdoYXQgdGhpcyBhdXRvbWF0aW9uIHNob3VsZCBkbywgYW5kIHdlIHdpbGwgdHJ5IHRvIGNvbnZlcnRcbiAgICAgICAgICBpdCBpbnRvIGEgSG9tZSBBc3Npc3RhbnQgYXV0b21hdGlvbi4gKG9ubHkgRW5nbGlzaCBpcyBzdXBwb3J0ZWQgZm9yXG4gICAgICAgICAgbm93KTxiciAvPjxiciAvPlxuICAgICAgICAgIEZvciBleGFtcGxlOlxuICAgICAgICAgIDx1bCBAY2xpY2s9JHt0aGlzLl9oYW5kbGVFeGFtcGxlQ2xpY2t9PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlua1wiPlxuICAgICAgICAgICAgICAgIFR1cm4gb2ZmIHRoZSBsaWdodHMgd2hlbiBJIGxlYXZlIGhvbWVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlua1wiPlxuICAgICAgICAgICAgICAgIFR1cm4gb24gdGhlIGxpZ2h0cyB3aGVuIHRoZSBzdW4gaXMgc2V0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICBOb3RpZnkgbWUgaWYgdGhlIGRvb3Igb3BlbnMgYW5kIEkgYW0gbm90IGF0IGhvbWVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlua1wiPlxuICAgICAgICAgICAgICAgIFR1cm4gdGhlIGxpZ2h0IG9uIHdoZW4gbW90aW9uIGlzIGRldGVjdGVkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgICBsYWJlbD1cIldoYXQgc2hvdWxkIHRoaXMgYXV0b21hdGlvbiBkbz9cIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICBAa2V5dXA9JHt0aGlzLl9oYW5kbGVLZXlVcH1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYWxtb25kLnN0YW5mb3JkLmVkdS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3M9XCJhdHRyaWJ1dGlvblwiXG4gICAgICAgICAgICA+UG93ZXJlZCBieSBBbG1vbmQ8L2FcbiAgICAgICAgICA+XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIGNsYXNzPVwibGVmdFwiIEBjbGljaz1cIiR7dGhpcy5fc2tpcH1cIj5cbiAgICAgICAgICAgIFNraXBcbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9nZW5lcmF0ZX1cIiAuZGlzYWJsZWQ9JHt0aGlzLl9zdWJtaXR0aW5nfT5cbiAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgID9hY3RpdmU9XCIke3RoaXMuX3N1Ym1pdHRpbmd9XCJcbiAgICAgICAgICAgICAgYWx0PVwiQ3JlYXRpbmcgeW91ciBhdXRvbWF0aW9uLi4uXCJcbiAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICBDcmVhdGUgYXV0b21hdGlvblxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2VuZXJhdGUoKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnB1dCEudmFsdWUgYXMgc3RyaW5nO1xuICAgIGlmICghdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gXCJFbnRlciBhIGNvbW1hbmQgb3IgdGFwIHNraXAuXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIGxldCBjb25maWc6IFBhcnRpYWw8QXV0b21hdGlvbkNvbmZpZz47XG4gICAgbGV0IHBsYWNlaG9sZGVyczogUGxhY2Vob2xkZXJDb250YWluZXI7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnZlcnRUaGluZ1RhbGsodGhpcy5oYXNzLCB0aGlzLl92YWx1ZSk7XG4gICAgICBjb25maWcgPSByZXN1bHQuY29uZmlnO1xuICAgICAgcGxhY2Vob2xkZXJzID0gcmVzdWx0LnBsYWNlaG9sZGVycztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyLm1lc3NhZ2U7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3VibWl0dGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSBcIldlIGNvdWxkbid0IGNyZWF0ZSBhbiBhdXRvbWF0aW9uIGZvciB0aGF0ICh5ZXQ/KS5cIjtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKHBsYWNlaG9sZGVycykubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlcnMgPSBwbGFjZWhvbGRlcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbmRDb25maWcodGhpcy5fdmFsdWUsIGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGxhY2Vob2xkZXJzKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyVmFsdWVzID0gZXYuZGV0YWlsLnZhbHVlIGFzIFBsYWNlaG9sZGVyVmFsdWVzO1xuICAgIE9iamVjdC5lbnRyaWVzKHBsYWNlaG9sZGVyVmFsdWVzKS5mb3JFYWNoKChbdHlwZSwgdmFsdWVzXSkgPT4ge1xuICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVzKS5mb3JFYWNoKChbaW5kZXgsIHBsYWNlaG9sZGVyXSkgPT4ge1xuICAgICAgICBjb25zdCBkZXZpY2VzID0gT2JqZWN0LnZhbHVlcyhwbGFjZWhvbGRlcik7XG4gICAgICAgIGlmIChkZXZpY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRldmljZXNbMF0pLmZvckVhY2goKFtmaWVsZCwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jb25maWdbdHlwZV1baW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdXRvbWF0aW9uID0geyAuLi50aGlzLl9jb25maWdbdHlwZV1baW5kZXhdIH07XG4gICAgICAgIGNvbnN0IG5ld0F1dG9tYXRpb25zOiBhbnlbXSA9IFtdO1xuICAgICAgICBkZXZpY2VzLmZvckVhY2goKGZpZWxkcykgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0F1dG9tYXRpb24gPSB7IC4uLmF1dG9tYXRpb24gfTtcbiAgICAgICAgICBPYmplY3QuZW50cmllcyhmaWVsZHMpLmZvckVhY2goKFtmaWVsZCwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBuZXdBdXRvbWF0aW9uW2ZpZWxkXSA9IHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5ld0F1dG9tYXRpb25zLnB1c2gobmV3QXV0b21hdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jb25maWdbdHlwZV0uc3BsaWNlKGluZGV4LCAxLCAuLi5uZXdBdXRvbWF0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZW5kQ29uZmlnKHRoaXMuX3ZhbHVlLCB0aGlzLl9jb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VuZENvbmZpZyhpbnB1dCwgY29uZmlnKSB7XG4gICAgdGhpcy5fcGFyYW1zIS5jYWxsYmFjayh7IGFsaWFzOiBpbnB1dCwgLi4uY29uZmlnIH0pO1xuICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9za2lwKCkge1xuICAgIHRoaXMuX3BhcmFtcyEuY2FsbGJhY2sodW5kZWZpbmVkKTtcbiAgICB0aGlzLl9jbG9zZURpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJzID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl9pbnB1dCkge1xuICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICBpZiAoIWV2LmRldGFpbC52YWx1ZSkge1xuICAgICAgdGhpcy5fY2xvc2VEaWFsb2coKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVLZXlVcChldjogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5fZ2VuZXJhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFeGFtcGxlQ2xpY2soZXY6IEV2ZW50KSB7XG4gICAgdGhpcy5faW5wdXQhLnZhbHVlID0gKGV2LnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaW5uZXJUZXh0O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ubGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24gcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXNwaW5uZXJbYWN0aXZlXSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1kaWFsb2ctdGhpbmt0YWxrXCI6IERpYWxvZ1RoaW5ndGFsaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgYXBwbHlQYXRjaCwgZ2V0UGF0aCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9wYXRjaFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtYXJlYS1kZXZpY2VzLXBpY2tlclwiO1xuaW1wb3J0IHtcbiAgQXJlYVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZUFyZWFSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IGRvbWFpblRvTmFtZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2ludGVncmF0aW9uXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvc3Vic2NyaWJlLW1peGluXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXIsIFBsYWNlaG9sZGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vZGlhbG9nLXRoaW5ndGFsa1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcInBsYWNlaG9sZGVycy1maWxsZWRcIjogeyB2YWx1ZTogUGxhY2Vob2xkZXJWYWx1ZXMgfTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBsYWNlaG9sZGVyVmFsdWVzIHtcbiAgW2tleTogc3RyaW5nXToge1xuICAgIFtpbmRleDogbnVtYmVyXToge1xuICAgICAgW2luZGV4OiBudW1iZXJdOiB7IGRldmljZV9pZD86IHN0cmluZzsgZW50aXR5X2lkPzogc3RyaW5nIH07XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRyYUluZm8ge1xuICBba2V5OiBzdHJpbmddOiB7XG4gICAgW2luZGV4OiBudW1iZXJdOiB7XG4gICAgICBbaW5kZXg6IG51bWJlcl06IHtcbiAgICAgICAgYXJlYV9pZD86IHN0cmluZztcbiAgICAgICAgZGV2aWNlX2lkcz86IHN0cmluZ1tdO1xuICAgICAgICBtYW51YWxFbnRpdHk6IGJvb2xlYW47XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbmludGVyZmFjZSBEZXZpY2VFbnRpdGllc0xvb2t1cCB7XG4gIFtkZXZpY2VJZDogc3RyaW5nXTogc3RyaW5nW107XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtdGhpbmd0YWxrLXBsYWNlaG9sZGVyc1wiKVxuZXhwb3J0IGNsYXNzIFRoaW5nVGFsa1BsYWNlaG9sZGVycyBleHRlbmRzIFN1YnNjcmliZU1peGluKExpdEVsZW1lbnQpIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcGVuZWQhOiBib29sZWFuO1xuXG4gIHB1YmxpYyBza2lwITogKCkgPT4gdm9pZDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcGxhY2Vob2xkZXJzITogUGxhY2Vob2xkZXJDb250YWluZXI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGV2aWNlRW50aXR5TG9va3VwOiBEZXZpY2VFbnRpdGllc0xvb2t1cCA9IHt9O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2V4dHJhSW5mbzogRXh0cmFJbmZvID0ge307XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGxhY2Vob2xkZXJWYWx1ZXM6IFBsYWNlaG9sZGVyVmFsdWVzID0ge307XG5cbiAgcHJpdmF0ZSBfZGV2aWNlcz86IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcblxuICBwcml2YXRlIF9hcmVhcz86IEFyZWFSZWdpc3RyeUVudHJ5W107XG5cbiAgcHJpdmF0ZSBfc2VhcmNoID0gZmFsc2U7XG5cbiAgcHVibGljIGhhc3NTdWJzY3JpYmUoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uLCAoZW50cmllcykgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFlbnRpdHkuZGV2aWNlX2lkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEoZW50aXR5LmRldmljZV9pZCBpbiB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXApKSB7XG4gICAgICAgICAgICB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXBbZW50aXR5LmRldmljZV9pZF0gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMuX2RldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgZW50aXR5LmVudGl0eV9pZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdLnB1c2goZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uISwgKGRldmljZXMpID0+IHtcbiAgICAgICAgdGhpcy5fZGV2aWNlcyA9IGRldmljZXM7XG4gICAgICAgIHRoaXMuX3NlYXJjaE5hbWVzKCk7XG4gICAgICB9KSxcbiAgICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiEsIChhcmVhcykgPT4ge1xuICAgICAgICB0aGlzLl9hcmVhcyA9IGFyZWFzO1xuICAgICAgICB0aGlzLl9zZWFyY2hOYW1lcygpO1xuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInBsYWNlaG9sZGVyc1wiKSkge1xuICAgICAgdGhpcy5fc2VhcmNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3NlYXJjaE5hbWVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZGlhbG9nXG4gICAgICAgIG1vZGFsXG4gICAgICAgIHdpdGgtYmFja2Ryb3BcbiAgICAgICAgLm9wZW5lZD0ke3RoaXMub3BlbmVkfVxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9XCIke3RoaXMuX29wZW5lZENoYW5nZWR9XCJcbiAgICAgID5cbiAgICAgICAgPGgyPkdyZWF0ISBOb3cgd2UgbmVlZCB0byBsaW5rIHNvbWUgZGV2aWNlcy48L2gyPlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgJHt0aGlzLl9lcnJvciA/IGh0bWxgIDxkaXYgY2xhc3M9XCJlcnJvclwiPiR7dGhpcy5fZXJyb3J9PC9kaXY+IGAgOiBcIlwifVxuICAgICAgICAgICR7T2JqZWN0LmVudHJpZXModGhpcy5wbGFjZWhvbGRlcnMpLm1hcChcbiAgICAgICAgICAgIChbdHlwZSwgcGxhY2Vob2xkZXJzXSkgPT5cbiAgICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci4ke3R5cGV9cy5uYW1lYFxuICAgICAgICAgICAgICAgICAgKX06XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAke3BsYWNlaG9sZGVycy5tYXAoKHBsYWNlaG9sZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIuZmllbGRzLmluY2x1ZGVzKFwiZGV2aWNlX2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhSW5mbyA9IGdldFBhdGgodGhpcy5fZXh0cmFJbmZvLCBbXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxoYS1hcmVhLWRldmljZXMtcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHlwZT0ke3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZGV2aWNlUGlja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYXJlYT0ke2V4dHJhSW5mbyA/IGV4dHJhSW5mby5hcmVhX2lkIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRldmljZXM9JHtleHRyYUluZm8gJiYgZXh0cmFJbmZvLmRldmljZV9pZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBleHRyYUluZm8uZGV2aWNlX2lkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlRG9tYWlucz0ke3BsYWNlaG9sZGVyLmRvbWFpbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZURldmljZUNsYXNzZXM9JHtwbGFjZWhvbGRlci5kZXZpY2VfY2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuX2dldExhYmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5kb21haW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5kZXZpY2VfY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1hcmVhLWRldmljZXMtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICR7ZXh0cmFJbmZvICYmIGV4dHJhSW5mby5tYW51YWxFbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmUgb3IgbW9yZSBkZXZpY2VzIGhhdmUgbW9yZSB0aGFuIG9uZSBtYXRjaGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LCBwbGVhc2UgcGljayB0aGUgb25lIHlvdSB3YW50IHRvIHVzZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7T2JqZWN0LmtleXMoZXh0cmFJbmZvLm1hbnVhbEVudGl0eSkubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlkeCkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRldmljZS1lbnRpdHktcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHlwZT0ke3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyPSR7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4PSR7aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVEb21haW5zPSR7cGxhY2Vob2xkZXIuZG9tYWluc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZURldmljZUNsYXNzZXM9JHtwbGFjZWhvbGRlci5kZXZpY2VfY2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWw9JHtgJHt0aGlzLl9nZXRMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmRvbWFpbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5kZXZpY2VfY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IG9mIGRldmljZSAke3RoaXMuX2dldERldmljZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQYXRoKHRoaXMuX3BsYWNlaG9sZGVyVmFsdWVzLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGV2aWNlX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW50aXR5RmlsdGVyPSR7KHN0YXRlOiBIYXNzRW50aXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXZJZCA9IHRoaXMuX3BsYWNlaG9sZGVyVmFsdWVzW3R5cGVdW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5pbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtpZHhdLmRldmljZV9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKHN0YXRlLmVudGl0eV9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIuZmllbGRzLmluY2x1ZGVzKFwiZW50aXR5X2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHlwZT0ke3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZURvbWFpbnM9JHtwbGFjZWhvbGRlci5kb21haW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVEZXZpY2VDbGFzc2VzPSR7cGxhY2Vob2xkZXIuZGV2aWNlX2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuX2dldExhYmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5kb21haW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5kZXZpY2VfY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIFVua25vd24gcGxhY2Vob2xkZXI8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAke3BsYWNlaG9sZGVyLmRvbWFpbnN9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgJHtwbGFjZWhvbGRlci5maWVsZHMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkKSA9PiBodG1sYCAke2ZpZWxkfTxiciAvPiBgXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gY2xhc3M9XCJsZWZ0XCIgQGNsaWNrPVwiJHt0aGlzLnNraXB9XCI+XG4gICAgICAgICAgICBTa2lwXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fZG9uZX1cIiAuZGlzYWJsZWQ9JHshdGhpcy5faXNEb25lfT5cbiAgICAgICAgICAgIENyZWF0ZSBhdXRvbWF0aW9uXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9nZXREZXZpY2VOYW1lKGRldmljZUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5fZGV2aWNlcykge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IGZvdW5kRGV2aWNlID0gdGhpcy5fZGV2aWNlcy5maW5kKChkZXZpY2UpID0+IGRldmljZS5pZCA9PT0gZGV2aWNlSWQpO1xuICAgIGlmICghZm91bmREZXZpY2UpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmREZXZpY2UubmFtZV9ieV91c2VyIHx8IGZvdW5kRGV2aWNlLm5hbWUgfHwgXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgX3NlYXJjaE5hbWVzKCkge1xuICAgIGlmICghdGhpcy5fc2VhcmNoIHx8ICF0aGlzLl9hcmVhcyB8fCAhdGhpcy5fZGV2aWNlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZWFyY2ggPSBmYWxzZTtcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLnBsYWNlaG9sZGVycykuZm9yRWFjaCgoW3R5cGUsIHBsYWNlaG9sZGVyc10pID0+XG4gICAgICBwbGFjZWhvbGRlcnMuZm9yRWFjaCgocGxhY2Vob2xkZXIpID0+IHtcbiAgICAgICAgaWYgKCFwbGFjZWhvbGRlci5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWUgPSBwbGFjZWhvbGRlci5uYW1lO1xuICAgICAgICBjb25zdCBmb3VuZEFyZWEgPSB0aGlzLl9hcmVhcyEuZmluZCgoYXJlYSkgPT5cbiAgICAgICAgICBhcmVhLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhuYW1lKVxuICAgICAgICApO1xuICAgICAgICBpZiAoZm91bmRBcmVhKSB7XG4gICAgICAgICAgYXBwbHlQYXRjaChcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhSW5mbyxcbiAgICAgICAgICAgIFt0eXBlLCBwbGFjZWhvbGRlci5pbmRleCwgXCJhcmVhX2lkXCJdLFxuICAgICAgICAgICAgZm91bmRBcmVhLmFyZWFfaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShcIl9leHRyYUluZm9cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvdW5kRGV2aWNlcyA9IHRoaXMuX2RldmljZXMhLmZpbHRlcigoZGV2aWNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGV2aWNlTmFtZSA9IGRldmljZS5uYW1lX2J5X3VzZXIgfHwgZGV2aWNlLm5hbWU7XG4gICAgICAgICAgaWYgKCFkZXZpY2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXZpY2VOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZm91bmREZXZpY2VzLmxlbmd0aCkge1xuICAgICAgICAgIGFwcGx5UGF0Y2goXG4gICAgICAgICAgICB0aGlzLl9leHRyYUluZm8sXG4gICAgICAgICAgICBbdHlwZSwgcGxhY2Vob2xkZXIuaW5kZXgsIFwiZGV2aWNlX2lkc1wiXSxcbiAgICAgICAgICAgIGZvdW5kRGV2aWNlcy5tYXAoKGRldmljZSkgPT4gZGV2aWNlLmlkKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKFwiX2V4dHJhSW5mb1wiKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2lzRG9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5wbGFjZWhvbGRlcnMpLmV2ZXJ5KChbdHlwZSwgcGxhY2Vob2xkZXJzXSkgPT5cbiAgICAgIHBsYWNlaG9sZGVycy5ldmVyeSgocGxhY2Vob2xkZXIpID0+XG4gICAgICAgIHBsYWNlaG9sZGVyLmZpZWxkcy5ldmVyeSgoZmllbGQpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyaWVzOiB7XG4gICAgICAgICAgICBba2V5OiBudW1iZXJdOiB7IGRldmljZV9pZD86IHN0cmluZzsgZW50aXR5X2lkPzogc3RyaW5nIH07XG4gICAgICAgICAgfSA9IGdldFBhdGgodGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXMsIFt0eXBlLCBwbGFjZWhvbGRlci5pbmRleF0pO1xuICAgICAgICAgIGlmICghZW50cmllcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGVudHJpZXMpO1xuICAgICAgICAgIHJldHVybiB2YWx1ZXMuZXZlcnkoXG4gICAgICAgICAgICAoZW50cnkpID0+IGVudHJ5W2ZpZWxkXSAhPT0gdW5kZWZpbmVkICYmIGVudHJ5W2ZpZWxkXSAhPT0gXCJcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExhYmVsKGRvbWFpbnM6IHN0cmluZ1tdLCBkZXZpY2VDbGFzc2VzPzogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gYCR7ZG9tYWluc1xuICAgICAgLm1hcCgoZG9tYWluKSA9PiBkb21haW5Ub05hbWUodGhpcy5oYXNzLmxvY2FsaXplLCBkb21haW4pKVxuICAgICAgLmpvaW4oXCIsIFwiKX0ke1xuICAgICAgZGV2aWNlQ2xhc3NlcyA/IGAgb2YgdHlwZSAke2RldmljZUNsYXNzZXMuam9pbihcIiwgXCIpfWAgOiBcIlwiXG4gICAgfWA7XG4gIH1cblxuICBwcml2YXRlIF9kZXZpY2VQaWNrZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZ1tdID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIGFueTtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRhcmdldC5wbGFjZWhvbGRlciBhcyBQbGFjZWhvbGRlcjtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG5cbiAgICBsZXQgb2xkVmFsdWVzID0gZ2V0UGF0aCh0aGlzLl9wbGFjZWhvbGRlclZhbHVlcywgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4XSk7XG4gICAgaWYgKG9sZFZhbHVlcykge1xuICAgICAgb2xkVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvbGRWYWx1ZXMpO1xuICAgIH1cbiAgICBjb25zdCBvbGRFeHRyYUluZm8gPSBnZXRQYXRoKHRoaXMuX2V4dHJhSW5mbywgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4XSk7XG5cbiAgICBpZiAodGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXNbdHlwZV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9wbGFjZWhvbGRlclZhbHVlc1t0eXBlXVtwbGFjZWhvbGRlci5pbmRleF07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V4dHJhSW5mb1t0eXBlXSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2V4dHJhSW5mb1t0eXBlXVtwbGFjZWhvbGRlci5pbmRleF07XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShcIl9wbGFjZWhvbGRlclZhbHVlc1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChkZXZpY2VJZCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBvbGRJbmRleDtcbiAgICAgIGlmIChvbGRWYWx1ZXMpIHtcbiAgICAgICAgY29uc3Qgb2xkRGV2aWNlID0gb2xkVmFsdWVzLmZpbmQoKG9sZFZhbCwgaWR4KSA9PiB7XG4gICAgICAgICAgb2xkSW5kZXggPSBpZHg7XG4gICAgICAgICAgcmV0dXJuIG9sZFZhbC5kZXZpY2VfaWQgPT09IGRldmljZUlkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob2xkRGV2aWNlKSB7XG4gICAgICAgICAgYXBwbHlQYXRjaChcbiAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVmFsdWVzLFxuICAgICAgICAgICAgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4LCBpbmRleF0sXG4gICAgICAgICAgICBvbGREZXZpY2VcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChvbGRFeHRyYUluZm8pIHtcbiAgICAgICAgICAgIGFwcGx5UGF0Y2goXG4gICAgICAgICAgICAgIHRoaXMuX2V4dHJhSW5mbyxcbiAgICAgICAgICAgICAgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4LCBpbmRleF0sXG4gICAgICAgICAgICAgIG9sZEV4dHJhSW5mb1tvbGRJbmRleF1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcHBseVBhdGNoKFxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclZhbHVlcyxcbiAgICAgICAgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4LCBpbmRleCwgXCJkZXZpY2VfaWRcIl0sXG4gICAgICAgIGRldmljZUlkXG4gICAgICApO1xuXG4gICAgICBpZiAoIXBsYWNlaG9sZGVyLmZpZWxkcy5pbmNsdWRlcyhcImVudGl0eV9pZFwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldkVudGl0aWVzID0gdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2RldmljZUlkXTtcblxuICAgICAgY29uc3QgZW50aXRpZXMgPSBkZXZFbnRpdGllcy5maWx0ZXIoKGVpZCkgPT4ge1xuICAgICAgICBpZiAocGxhY2Vob2xkZXIuZGV2aWNlX2NsYXNzZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbZWlkXTtcbiAgICAgICAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBwbGFjZWhvbGRlci5kb21haW5zLmluY2x1ZGVzKGNvbXB1dGVEb21haW4oZWlkKSkgJiZcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzICYmXG4gICAgICAgICAgICBwbGFjZWhvbGRlci5kZXZpY2VfY2xhc3Nlcy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3NcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlci5kb21haW5zLmluY2x1ZGVzKGNvbXB1dGVEb21haW4oZWlkKSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU2hvdWxkIG5vdCBoYXBwZW4gYmVjYXVzZSB3ZSBmaWx0ZXIgdGhlIGRldmljZSBwaWNrZXIgb24gZG9tYWluXG4gICAgICAgIHRoaXMuX2Vycm9yID0gYE5vICR7cGxhY2Vob2xkZXIuZG9tYWluc1xuICAgICAgICAgIC5tYXAoKGRvbWFpbikgPT4gZG9tYWluVG9OYW1lKHRoaXMuaGFzcy5sb2NhbGl6ZSwgZG9tYWluKSlcbiAgICAgICAgICAuam9pbihcIiwgXCIpfSBlbnRpdGllcyBmb3VuZCBpbiB0aGlzIGRldmljZS5gO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdGllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgYXBwbHlQYXRjaChcbiAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclZhbHVlcyxcbiAgICAgICAgICBbdHlwZSwgcGxhY2Vob2xkZXIuaW5kZXgsIGluZGV4LCBcImVudGl0eV9pZFwiXSxcbiAgICAgICAgICBlbnRpdGllc1swXVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoXCJfcGxhY2Vob2xkZXJWYWx1ZXNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXNbdHlwZV1bcGxhY2Vob2xkZXIuaW5kZXhdW2luZGV4XVxuICAgICAgICAgIC5lbnRpdHlfaWQ7XG4gICAgICAgIGFwcGx5UGF0Y2goXG4gICAgICAgICAgdGhpcy5fZXh0cmFJbmZvLFxuICAgICAgICAgIFt0eXBlLCBwbGFjZWhvbGRlci5pbmRleCwgXCJtYW51YWxFbnRpdHlcIiwgaW5kZXhdLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKFwiX3BsYWNlaG9sZGVyVmFsdWVzXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlyZUV2ZW50KFxuICAgICAgdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiaGEtcGFwZXItZGlhbG9nXCIpISBhcyBIVE1MRWxlbWVudCxcbiAgICAgIFwiaXJvbi1yZXNpemVcIlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlQaWNrZWQoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIGFueTtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRhcmdldC5wbGFjZWhvbGRlciBhcyBQbGFjZWhvbGRlcjtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgY29uc3QgaW5kZXggPSB0YXJnZXQuaW5kZXggfHwgMDtcbiAgICBhcHBseVBhdGNoKFxuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXMsXG4gICAgICBbdHlwZSwgcGxhY2Vob2xkZXIuaW5kZXgsIGluZGV4LCBcImVudGl0eV9pZFwiXSxcbiAgICAgIHZhbHVlXG4gICAgKTtcbiAgICB0aGlzLnJlcXVlc3RVcGRhdGUoXCJfcGxhY2Vob2xkZXJWYWx1ZXNcIik7XG4gIH1cblxuICBwcml2YXRlIF9kb25lKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInBsYWNlaG9sZGVycy1maWxsZWRcIiwgeyB2YWx1ZTogdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXMgfSk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KTogdm9pZCB7XG4gICAgLy8gVGhlIG9wZW5lZC1jaGFuZ2VkIGV2ZW50IGRvZXNuJ3QgbGVhdmUgdGhlIHNoYWRvd2RvbSBzbyB3ZSByZS1kaXNwYXRjaCBpdFxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXYudHlwZSwgZXYpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ubGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtdGhpbmd0YWxrLXBsYWNlaG9sZGVyc1wiOiBUaGluZ1RhbGtQbGFjZWhvbGRlcnM7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUlBO0FBR0E7QUFDQTtBQVdBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXdCQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUFBO0FBQUE7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBQUE7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdDQTtBQUFBO0FBQUE7QUFoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1DQTtBQUFBO0FBbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQTJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBdEpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQVdBOzs7Ozs7QUFRQTs7Ozs7O0FBUUE7Ozs7O0FBOEhBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQXJLQTtBQUFBO0FBQUE7QUFBQTtBQXdLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF0TEE7QUFBQTtBQUFBO0FBQUE7QUF5TEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBOzs7QUFGQTtBQVZBO0FBa0JBO0FBQ0E7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7OztBQVNBOztBQUdBOzs7O0FBTUE7Ozs7O0FBVEE7QUFnQkE7O0FBR0E7OztBQUtBOzs7O0FBUkE7OztBQWdCQTs7O0FBckRBO0FBeURBO0FBalJBO0FBQUE7QUFBQTtBQUFBO0FBb1JBO0FBQ0E7QUFBQTtBQUNBO0FBdFJBO0FBQUE7QUFBQTtBQUFBO0FBeVJBO0FBQ0E7QUExUkE7QUFBQTtBQUFBO0FBQUE7QUE2UkE7QUFDQTtBQTlSQTtBQUFBO0FBQUE7QUFBQTtBQWlTQTtBQUNBO0FBbFNBO0FBQUE7QUFBQTtBQUFBO0FBcVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9TQTtBQUFBO0FBQUE7QUFBQTtBQWtUQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBclRBO0FBQUE7QUFBQTtBQUFBO0FBd1RBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTlUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaVVBOzs7Ozs7Ozs7O0FBQUE7QUFXQTtBQTVVQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFRQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTs7Ozs7OztBQXRCQTs7Ozs7O0FBUUE7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFaQTs7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBekJBO0FBNkJBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBN0dBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBVUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQWVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7OztBQUFBOzs7OztBQUVBOzs7O0FBQUE7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBUEE7QUFXQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7Ozs7QUFJQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7O0FBV0E7OztBQUdBOztBQUVBOzs7Ozs7O0FBdkRBO0FBK0RBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJBOzs7QUFwT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBbUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQW5EQTtBQUFBO0FBQUE7QUFBQTtBQXNEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUExREE7QUFBQTtBQUFBO0FBQUE7QUE2REE7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFJQTs7QUFJQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBS0E7Ozs7O0FBTUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBR0E7QUFHQTs7QUE3QkE7QUFOQTtBQWpCQTtBQTJEQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQWNBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTs7QUFKQTtBQVNBO0FBbkdBOzs7QUF3R0E7OztBQUdBOzs7OztBQXJIQTtBQTJIQTtBQXhMQTtBQUFBO0FBQUE7QUFBQTtBQTJMQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFuTUE7QUFBQTtBQUFBO0FBQUE7QUFzTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBN09BO0FBQUE7QUFBQTtBQUFBO0FBZ1BBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFoUUE7QUFBQTtBQUFBO0FBQUE7QUFtUUE7QUFLQTtBQXhRQTtBQUFBO0FBQUE7QUFBQTtBQTJRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQXZYQTtBQUFBO0FBQUE7QUFBQTtBQTBYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBcllBO0FBQUE7QUFBQTtBQUFBO0FBd1lBO0FBQUE7QUFBQTtBQUNBO0FBellBO0FBQUE7QUFBQTtBQUFBO0FBNFlBO0FBQ0E7QUFDQTtBQTlZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaVpBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUJBO0FBdGFBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
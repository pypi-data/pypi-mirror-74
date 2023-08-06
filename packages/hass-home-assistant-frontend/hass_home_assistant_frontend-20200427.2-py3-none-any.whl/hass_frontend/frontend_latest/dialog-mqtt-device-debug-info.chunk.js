(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-mqtt-device-debug-info"],{

/***/ "./src/dialogs/mqtt-device-debug-info-dialog/dialog-mqtt-device-debug-info.ts":
/*!************************************************************************************!*\
  !*** ./src/dialogs/mqtt-device-debug-info-dialog/dialog-mqtt-device-debug-info.ts ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_ha_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-dialog */ "./src/components/ha-dialog.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_mqtt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/mqtt */ "./src/data/mqtt.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _mqtt_discovery_payload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mqtt-discovery-payload */ "./src/dialogs/mqtt-device-debug-info-dialog/mqtt-discovery-payload.ts");
/* harmony import */ var _mqtt_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mqtt-messages */ "./src/dialogs/mqtt-device-debug-info-dialog/mqtt-messages.ts");
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












let DialogMQTTDeviceDebugInfo = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("dialog-mqtt-device-debug-info")], function (_initialize, _LitElement) {
  class DialogMQTTDeviceDebugInfo extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogMQTTDeviceDebugInfo,
    d: [{
      kind: "field",
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
      key: "_debugInfo",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_showAsYaml",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_showDeserialized",

      value() {
        return true;
      }

    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        Object(_data_mqtt__WEBPACK_IMPORTED_MODULE_6__["fetchMQTTDebugInfo"])(this.hass, params.device.id).then(results => {
          this._debugInfo = results;
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params || !this._debugInfo) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <ha-dialog
        open
        @closing=${this._close}
        .heading="${this.hass.localize("ui.dialogs.mqtt_device_debug_info.title", "device", Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_5__["computeDeviceName"])(this._params.device, this.hass))}"
      >
        <h4>
          ${this.hass.localize("ui.dialogs.mqtt_device_debug_info.payload_display")}
        </h4>
        <ha-switch
          .checked=${this._showDeserialized}
          @change=${this._showDeserializedChanged}
        >
          ${this.hass.localize("ui.dialogs.mqtt_device_debug_info.deserialize")}
        </ha-switch>
        <ha-switch
          .checked=${this._showAsYaml}
          @change=${this._showAsYamlChanged}
        >
          ${this.hass.localize("ui.dialogs.mqtt_device_debug_info.show_as_yaml")}
        </ha-switch>
        <h4>
          ${this.hass.localize("ui.dialogs.mqtt_device_debug_info.entities")}
        </h4>
        <ul class="entitylist">
          ${this._debugInfo.entities.length ? this._renderEntities() : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                ${this.hass.localize("ui.dialogs.mqtt_device_debug_info.no_entities")}
              `}
        </ul>
        <h4>
          ${this.hass.localize("ui.dialogs.mqtt_device_debug_info.triggers")}
        </h4>
        <ul class="triggerlist">
          ${this._debugInfo.triggers.length ? this._renderTriggers() : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                ${this.hass.localize("ui.dialogs.mqtt_device_debug_info.no_triggers")}
              `}
        </ul>
        <mwc-button slot="primaryAction" @click=${this._close}>
          ${this.hass.localize("ui.dialogs.generic.close")}
        </mwc-button>
      </ha-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._params = undefined;
        this._debugInfo = undefined;
      }
    }, {
      kind: "method",
      key: "_showAsYamlChanged",
      value: function _showAsYamlChanged(ev) {
        this._showAsYaml = ev.target.checked;
      }
    }, {
      kind: "method",
      key: "_showDeserializedChanged",
      value: function _showDeserializedChanged(ev) {
        this._showDeserialized = ev.target.checked;
      }
    }, {
      kind: "method",
      key: "_renderEntities",
      value: function _renderEntities() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${this._debugInfo.entities.map(entity => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
          <li class="entitylistitem">
            '${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(this.hass.states[entity.entity_id])}'
            (<code>${entity.entity_id}</code>)
            <br />MQTT discovery data:
            <ul class="discoverydata">
              <li>
                Topic:
                <code>${entity.discovery_data.topic}</code>
              </li>
              <li>
                <mqtt-discovery-payload
                  .hass=${this.hass}
                  .payload=${entity.discovery_data.payload}
                  .showAsYaml=${this._showAsYaml}
                  .summary=${"Payload"}
                >
                </mqtt-discovery-payload>
              </li>
            </ul>
            Subscribed topics:
            <ul>
              ${entity.subscriptions.map(topic => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  <li>
                    <code>${topic.topic}</code>
                    <mqtt-messages
                      .hass=${this.hass}
                      .messages=${topic.messages}
                      .showDeserialized=${this._showDeserialized}
                      .showAsYaml=${this._showAsYaml}
                      .subscribedTopic=${topic.topic}
                      .summary=${this.hass.localize("ui.dialogs.mqtt_device_debug_info.recent_messages", "n", topic.messages.length)}
                    >
                    </mqtt-messages>
                  </li>
                `)}
            </ul>
          </li>
        `)}
    `;
      }
    }, {
      kind: "method",
      key: "_renderTriggers",
      value: function _renderTriggers() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${this._debugInfo.triggers.map(trigger => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
          <li class="triggerlistitem">
            MQTT discovery data:
            <ul class="discoverydata">
            <li>
              Topic:
              <code>${trigger.discovery_data.topic}</code>
            </li>
            <li>
              <mqtt-discovery-payload
                .hass=${this.hass}
                .payload=${trigger.discovery_data.payload}
                .showAsYaml=${this._showAsYaml}
                .summary=${"Payload"}
              >
            </li>
            </mqtt-discovery-payload>
            </ul>
          </li>
        `)}
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
        ha-dialog {
          --mdc-dialog-max-width: 95%;
          --mdc-dialog-min-width: 640px;
        }
        ha-switch {
          margin: 16px;
        }
        .discoverydata {
          list-style-type: none;
          margin: 4px;
          padding-left: 16px;
        }
        .entitylistitem {
          margin-bottom: 12px;
        }
        .triggerlistitem {
          margin-bottom: 12px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/mqtt-device-debug-info-dialog/mqtt-discovery-payload.ts":
/*!*****************************************************************************!*\
  !*** ./src/dialogs/mqtt-device-debug-info-dialog/mqtt-discovery-payload.ts ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
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





let MQTTDiscoveryPayload = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("mqtt-discovery-payload")], function (_initialize, _LitElement) {
  class MQTTDiscoveryPayload extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MQTTDiscoveryPayload,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "payload",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "showAsYaml",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "summary",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_open",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div
        class="expander ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
          open: this._open
        })}"
        @click=${this._handleToggle}
      >
        ${this.summary}
      </div>
      ${this._open ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <div class="payload">
            ${this._renderPayload()}
          </div>` : ""}
    `;
      }
    }, {
      kind: "method",
      key: "_renderPayload",
      value: function _renderPayload() {
        const payload = this.payload;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      ${this.showAsYaml ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <pre>${Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeDump"])(payload)}</pre> ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <pre>${JSON.stringify(payload, null, 2)}</pre> `}
    `;
      }
    }, {
      kind: "method",
      key: "_handleToggle",
      value: function _handleToggle() {
        this._open = !this._open;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      .expander {
        cursor: pointer;
        position: relative;
        padding: 8px;
        padding-left: 29px;
        border: 1px solid var(--divider-color);
      }
      .expander:before {
        content: "";
        position: absolute;
        border-right: 2px solid var(--primary-text-color);
        border-bottom: 2px solid var(--primary-text-color);
        width: 5px;
        height: 5px;
        top: 50%;
        left: 12px;
        transform: translateY(-50%) rotate(-45deg);
      }
      .expander.open:before {
        transform: translateY(-50%) rotate(45deg);
      }
      .payload {
        border: 1px solid var(--divider-color);
        border-top: 0;
        padding-left: 16px;
      }
      pre {
        display: inline-block;
        font-size: 0.9em;
        padding-left: 4px;
        padding-right: 4px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/mqtt-device-debug-info-dialog/mqtt-messages.ts":
/*!********************************************************************!*\
  !*** ./src/dialogs/mqtt-device-debug-info-dialog/mqtt-messages.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
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






let MQTTMessages = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("mqtt-messages")], function (_initialize, _LitElement) {
  class MQTTMessages extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MQTTMessages,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "messages",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "showAsYaml",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "showDeserialized",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "subscribedTopic",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "summary",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_open",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_payloadsJson",

      value() {
        return new WeakMap();
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_showTopic",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this.messages.forEach(message => {
          // If any message's topic differs from the subscribed topic, show topics + payload
          if (this.subscribedTopic !== message.topic) {
            this._showTopic = true;
          }
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div
        class="expander ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
          open: this._open
        })}"
        @click=${this._handleToggle}
      >
        ${this.summary}
      </div>
      ${this._open ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <ul class="message-list">
              ${this.messages.map(message => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  <li class="message">
                    <div class="time">
                      Received
                      ${Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__["formatTimeWithSeconds"])(new Date(message.time), this.hass.language)}
                    </div>
                    ${this._renderSingleMessage(message)}
                  </li>
                `)}
            </ul>
          ` : ""}
    `;
      }
    }, {
      kind: "method",
      key: "_renderSingleMessage",
      value: function _renderSingleMessage(message) {
        const topic = message.topic;
        return this._showTopic ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
          <ul class="message-with-topic">
            <li>Topic: <code>${topic}</code></li>
            <li>
              Payload: ${this._renderSinglePayload(message)}
            </li>
          </ul>
        ` : this._renderSinglePayload(message);
      }
    }, {
      kind: "method",
      key: "_renderSinglePayload",
      value: function _renderSinglePayload(message) {
        let json;

        if (this.showDeserialized) {
          if (!this._payloadsJson.has(message)) {
            json = this._tryParseJson(message.payload);

            this._payloadsJson.set(message, json);
          } else {
            json = this._payloadsJson.get(message);
          }
        }

        return json ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
          ${this.showAsYaml ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <pre>${Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeDump"])(json)}</pre> ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <pre>${JSON.stringify(json, null, 2)}</pre> `}
        ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <code>${message.payload}</code> `;
      }
    }, {
      kind: "method",
      key: "_tryParseJson",
      value: function _tryParseJson(payload) {
        let jsonPayload = null;
        let o = payload; // If the payload is a string, determine if the payload is valid JSON and if it
        // is, assign the object representation to this._payloadJson.

        if (typeof payload === "string") {
          try {
            o = JSON.parse(payload);
          } catch (e) {
            o = null;
          }
        } // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object",
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:


        if (o && typeof o === "object") {
          jsonPayload = o;
        }

        return jsonPayload;
      }
    }, {
      kind: "method",
      key: "_handleToggle",
      value: function _handleToggle() {
        this._open = !this._open;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      .expander {
        cursor: pointer;
        position: relative;
        padding: 8px;
        padding-left: 29px;
        border: 1px solid var(--divider-color);
      }
      .expander:before {
        content: "";
        position: absolute;
        border-right: 2px solid var(--primary-text-color);
        border-bottom: 2px solid var(--primary-text-color);
        width: 5px;
        height: 5px;
        top: 50%;
        left: 12px;
        transform: translateY(-50%) rotate(-45deg);
      }
      .expander.open:before {
        transform: translateY(-50%) rotate(45deg);
      }
      .message {
        font-size: 0.9em;
        margin-bottom: 12px;
      }
      .message-list {
        border: 1px solid var(--divider-color);
        border-top: 0;
        padding-left: 28px;
        margin: 0;
      }
      pre {
        display: inline-block;
        font-size: 0.9em;
        margin: 0;
        padding-left: 4px;
        padding-right: 4px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW1xdHQtZGV2aWNlLWRlYnVnLWluZm8uY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tcXR0LWRldmljZS1kZWJ1Zy1pbmZvLWRpYWxvZy9kaWFsb2ctbXF0dC1kZXZpY2UtZGVidWctaW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tcXR0LWRldmljZS1kZWJ1Zy1pbmZvLWRpYWxvZy9tcXR0LWRpc2NvdmVyeS1wYXlsb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21xdHQtZGV2aWNlLWRlYnVnLWluZm8tZGlhbG9nL21xdHQtbWVzc2FnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB0eXBlIHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7IGNvbXB1dGVEZXZpY2VOYW1lIH0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBmZXRjaE1RVFREZWJ1Z0luZm8sIE1RVFREZXZpY2VEZWJ1Z0luZm8gfSBmcm9tIFwiLi4vLi4vZGF0YS9tcXR0XCI7XG5pbXBvcnQgeyBoYVN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4vbXF0dC1kaXNjb3ZlcnktcGF5bG9hZFwiO1xuaW1wb3J0IFwiLi9tcXR0LW1lc3NhZ2VzXCI7XG5pbXBvcnQgeyBNUVRURGV2aWNlRGVidWdJbmZvRGlhbG9nUGFyYW1zIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctbXF0dC1kZXZpY2UtZGVidWctaW5mb1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImRpYWxvZy1tcXR0LWRldmljZS1kZWJ1Zy1pbmZvXCIpXG5jbGFzcyBEaWFsb2dNUVRURGV2aWNlRGVidWdJbmZvIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wYXJhbXM/OiBNUVRURGV2aWNlRGVidWdJbmZvRGlhbG9nUGFyYW1zO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RlYnVnSW5mbz86IE1RVFREZXZpY2VEZWJ1Z0luZm87XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2hvd0FzWWFtbCA9IHRydWU7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2hvd0Rlc2VyaWFsaXplZCA9IHRydWU7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2coXG4gICAgcGFyYW1zOiBNUVRURGV2aWNlRGVidWdJbmZvRGlhbG9nUGFyYW1zXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICBmZXRjaE1RVFREZWJ1Z0luZm8odGhpcy5oYXNzLCBwYXJhbXMuZGV2aWNlLmlkKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICB0aGlzLl9kZWJ1Z0luZm8gPSByZXN1bHRzO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMgfHwgIXRoaXMuX2RlYnVnSW5mbykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1kaWFsb2dcbiAgICAgICAgb3BlblxuICAgICAgICBAY2xvc2luZz0ke3RoaXMuX2Nsb3NlfVxuICAgICAgICAuaGVhZGluZz1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLmRpYWxvZ3MubXF0dF9kZXZpY2VfZGVidWdfaW5mby50aXRsZVwiLFxuICAgICAgICAgIFwiZGV2aWNlXCIsXG4gICAgICAgICAgY29tcHV0ZURldmljZU5hbWUodGhpcy5fcGFyYW1zLmRldmljZSwgdGhpcy5oYXNzKVxuICAgICAgICApfVwiXG4gICAgICA+XG4gICAgICAgIDxoND5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLmRpYWxvZ3MubXF0dF9kZXZpY2VfZGVidWdfaW5mby5wYXlsb2FkX2Rpc3BsYXlcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX3Nob3dEZXNlcmlhbGl6ZWR9XG4gICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3Nob3dEZXNlcmlhbGl6ZWRDaGFuZ2VkfVxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLm1xdHRfZGV2aWNlX2RlYnVnX2luZm8uZGVzZXJpYWxpemVcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaGEtc3dpdGNoPlxuICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9zaG93QXNZYW1sfVxuICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9zaG93QXNZYW1sQ2hhbmdlZH1cbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuZGlhbG9ncy5tcXR0X2RldmljZV9kZWJ1Z19pbmZvLnNob3dfYXNfeWFtbFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9oYS1zd2l0Y2g+XG4gICAgICAgIDxoND5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5kaWFsb2dzLm1xdHRfZGV2aWNlX2RlYnVnX2luZm8uZW50aXRpZXNcIil9XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDx1bCBjbGFzcz1cImVudGl0eWxpc3RcIj5cbiAgICAgICAgICAke3RoaXMuX2RlYnVnSW5mby5lbnRpdGllcy5sZW5ndGhcbiAgICAgICAgICAgID8gdGhpcy5fcmVuZGVyRW50aXRpZXMoKVxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5tcXR0X2RldmljZV9kZWJ1Z19pbmZvLm5vX2VudGl0aWVzXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuZGlhbG9ncy5tcXR0X2RldmljZV9kZWJ1Z19pbmZvLnRyaWdnZXJzXCIpfVxuICAgICAgICA8L2g0PlxuICAgICAgICA8dWwgY2xhc3M9XCJ0cmlnZ2VybGlzdFwiPlxuICAgICAgICAgICR7dGhpcy5fZGVidWdJbmZvLnRyaWdnZXJzLmxlbmd0aFxuICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJUcmlnZ2VycygpXG4gICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLm1xdHRfZGV2aWNlX2RlYnVnX2luZm8ubm9fdHJpZ2dlcnNcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxtd2MtYnV0dG9uIHNsb3Q9XCJwcmltYXJ5QWN0aW9uXCIgQGNsaWNrPSR7dGhpcy5fY2xvc2V9PlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuZ2VuZXJpYy5jbG9zZVwiKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgPC9oYS1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9kZWJ1Z0luZm8gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF9zaG93QXNZYW1sQ2hhbmdlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zaG93QXNZYW1sID0gKGV2LnRhcmdldCBhcyBIYVN3aXRjaCkuY2hlY2tlZDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dEZXNlcmlhbGl6ZWRDaGFuZ2VkKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3Nob3dEZXNlcmlhbGl6ZWQgPSAoZXYudGFyZ2V0IGFzIEhhU3dpdGNoKS5jaGVja2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyRW50aXRpZXMoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLl9kZWJ1Z0luZm8hLmVudGl0aWVzLm1hcChcbiAgICAgICAgKGVudGl0eSkgPT4gaHRtbGBcbiAgICAgICAgICA8bGkgY2xhc3M9XCJlbnRpdHlsaXN0aXRlbVwiPlxuICAgICAgICAgICAgJyR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdKX0nXG4gICAgICAgICAgICAoPGNvZGU+JHtlbnRpdHkuZW50aXR5X2lkfTwvY29kZT4pXG4gICAgICAgICAgICA8YnIgLz5NUVRUIGRpc2NvdmVyeSBkYXRhOlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZGlzY292ZXJ5ZGF0YVwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgVG9waWM6XG4gICAgICAgICAgICAgICAgPGNvZGU+JHtlbnRpdHkuZGlzY292ZXJ5X2RhdGEudG9waWN9PC9jb2RlPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPG1xdHQtZGlzY292ZXJ5LXBheWxvYWRcbiAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgLnBheWxvYWQ9JHtlbnRpdHkuZGlzY292ZXJ5X2RhdGEucGF5bG9hZH1cbiAgICAgICAgICAgICAgICAgIC5zaG93QXNZYW1sPSR7dGhpcy5fc2hvd0FzWWFtbH1cbiAgICAgICAgICAgICAgICAgIC5zdW1tYXJ5PSR7XCJQYXlsb2FkXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvbXF0dC1kaXNjb3ZlcnktcGF5bG9hZD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICBTdWJzY3JpYmVkIHRvcGljczpcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgJHtlbnRpdHkuc3Vic2NyaXB0aW9ucy5tYXAoXG4gICAgICAgICAgICAgICAgKHRvcGljKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8Y29kZT4ke3RvcGljLnRvcGljfTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgPG1xdHQtbWVzc2FnZXNcbiAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAubWVzc2FnZXM9JHt0b3BpYy5tZXNzYWdlc31cbiAgICAgICAgICAgICAgICAgICAgICAuc2hvd0Rlc2VyaWFsaXplZD0ke3RoaXMuX3Nob3dEZXNlcmlhbGl6ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgLnNob3dBc1lhbWw9JHt0aGlzLl9zaG93QXNZYW1sfVxuICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmVkVG9waWM9JHt0b3BpYy50b3BpY31cbiAgICAgICAgICAgICAgICAgICAgICAuc3VtbWFyeT0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MubXF0dF9kZXZpY2VfZGVidWdfaW5mby5yZWNlbnRfbWVzc2FnZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWMubWVzc2FnZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L21xdHQtbWVzc2FnZXM+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgYFxuICAgICAgKX1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyVHJpZ2dlcnMoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLl9kZWJ1Z0luZm8hLnRyaWdnZXJzLm1hcChcbiAgICAgICAgKHRyaWdnZXIpID0+IGh0bWxgXG4gICAgICAgICAgPGxpIGNsYXNzPVwidHJpZ2dlcmxpc3RpdGVtXCI+XG4gICAgICAgICAgICBNUVRUIGRpc2NvdmVyeSBkYXRhOlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZGlzY292ZXJ5ZGF0YVwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBUb3BpYzpcbiAgICAgICAgICAgICAgPGNvZGU+JHt0cmlnZ2VyLmRpc2NvdmVyeV9kYXRhLnRvcGljfTwvY29kZT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxtcXR0LWRpc2NvdmVyeS1wYXlsb2FkXG4gICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgLnBheWxvYWQ9JHt0cmlnZ2VyLmRpc2NvdmVyeV9kYXRhLnBheWxvYWR9XG4gICAgICAgICAgICAgICAgLnNob3dBc1lhbWw9JHt0aGlzLl9zaG93QXNZYW1sfVxuICAgICAgICAgICAgICAgIC5zdW1tYXJ5PSR7XCJQYXlsb2FkXCJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L21xdHQtZGlzY292ZXJ5LXBheWxvYWQ+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIGBcbiAgICAgICl9XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgaGEtZGlhbG9nIHtcbiAgICAgICAgICAtLW1kYy1kaWFsb2ctbWF4LXdpZHRoOiA5NSU7XG4gICAgICAgICAgLS1tZGMtZGlhbG9nLW1pbi13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtc3dpdGNoIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpc2NvdmVyeWRhdGEge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVudGl0eWxpc3RpdGVtIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC50cmlnZ2VybGlzdGl0ZW0ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGlhbG9nLW1xdHQtZGV2aWNlLWRlYnVnLWluZm9cIjogRGlhbG9nTVFUVERldmljZURlYnVnSW5mbztcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2FmZUR1bXAgfSBmcm9tIFwianMteWFtbFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm1xdHQtZGlzY292ZXJ5LXBheWxvYWRcIilcbmNsYXNzIE1RVFREaXNjb3ZlcnlQYXlsb2FkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBwYXlsb2FkITogb2JqZWN0O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzaG93QXNZYW1sID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHN1bW1hcnkhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfb3BlbiA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImV4cGFuZGVyICR7Y2xhc3NNYXAoeyBvcGVuOiB0aGlzLl9vcGVuIH0pfVwiXG4gICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZVRvZ2dsZX1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLnN1bW1hcnl9XG4gICAgICA8L2Rpdj5cbiAgICAgICR7dGhpcy5fb3BlblxuICAgICAgICA/IGh0bWxgIDxkaXYgY2xhc3M9XCJwYXlsb2FkXCI+XG4gICAgICAgICAgICAke3RoaXMuX3JlbmRlclBheWxvYWQoKX1cbiAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIDogXCJcIn1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyUGF5bG9hZCgpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHRoaXMucGF5bG9hZDtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5zaG93QXNZYW1sXG4gICAgICAgID8gaHRtbGAgPHByZT4ke3NhZmVEdW1wKHBheWxvYWQpfTwvcHJlPiBgXG4gICAgICAgIDogaHRtbGAgPHByZT4ke0pTT04uc3RyaW5naWZ5KHBheWxvYWQsIG51bGwsIDIpfTwvcHJlPiBgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5fb3BlbiA9ICF0aGlzLl9vcGVuO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmV4cGFuZGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyOXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5leHBhbmRlcjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICAgIC5leHBhbmRlci5vcGVuOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuICAgICAgLnBheWxvYWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgfVxuICAgICAgcHJlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm1xdHQtZGlzY292ZXJ5LXBheWxvYWRcIjogTVFUVERpc2NvdmVyeVBheWxvYWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IHNhZmVEdW1wIH0gZnJvbSBcImpzLXlhbWxcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IGZvcm1hdFRpbWVXaXRoU2Vjb25kcyB9IGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IE1RVFRNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL2RhdGEvbXF0dFwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm1xdHQtbWVzc2FnZXNcIilcbmNsYXNzIE1RVFRNZXNzYWdlcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG1lc3NhZ2VzITogTVFUVE1lc3NhZ2VbXTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc2hvd0FzWWFtbCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzaG93RGVzZXJpYWxpemVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHN1YnNjcmliZWRUb3BpYyE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc3VtbWFyeSE6IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9vcGVuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGF5bG9hZHNKc29uID0gbmV3IFdlYWtNYXAoKTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zaG93VG9waWMgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgLy8gSWYgYW55IG1lc3NhZ2UncyB0b3BpYyBkaWZmZXJzIGZyb20gdGhlIHN1YnNjcmliZWQgdG9waWMsIHNob3cgdG9waWNzICsgcGF5bG9hZFxuICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlZFRvcGljICE9PSBtZXNzYWdlLnRvcGljKSB7XG4gICAgICAgIHRoaXMuX3Nob3dUb3BpYyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJleHBhbmRlciAke2NsYXNzTWFwKHsgb3BlbjogdGhpcy5fb3BlbiB9KX1cIlxuICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVUb2dnbGV9XG4gICAgICA+XG4gICAgICAgICR7dGhpcy5zdW1tYXJ5fVxuICAgICAgPC9kaXY+XG4gICAgICAke3RoaXMuX29wZW5cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVzc2FnZS1saXN0XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5tZXNzYWdlcy5tYXAoXG4gICAgICAgICAgICAgICAgKG1lc3NhZ2UpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUmVjZWl2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAke2Zvcm1hdFRpbWVXaXRoU2Vjb25kcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKG1lc3NhZ2UudGltZSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc3MubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9yZW5kZXJTaW5nbGVNZXNzYWdlKG1lc3NhZ2UpfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJTaW5nbGVNZXNzYWdlKG1lc3NhZ2UpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3QgdG9waWMgPSBtZXNzYWdlLnRvcGljO1xuICAgIHJldHVybiB0aGlzLl9zaG93VG9waWNcbiAgICAgID8gaHRtbGBcbiAgICAgICAgICA8dWwgY2xhc3M9XCJtZXNzYWdlLXdpdGgtdG9waWNcIj5cbiAgICAgICAgICAgIDxsaT5Ub3BpYzogPGNvZGU+JHt0b3BpY308L2NvZGU+PC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgUGF5bG9hZDogJHt0aGlzLl9yZW5kZXJTaW5nbGVQYXlsb2FkKG1lc3NhZ2UpfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICBgXG4gICAgICA6IHRoaXMuX3JlbmRlclNpbmdsZVBheWxvYWQobWVzc2FnZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJTaW5nbGVQYXlsb2FkKG1lc3NhZ2UpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgbGV0IGpzb247XG5cbiAgICBpZiAodGhpcy5zaG93RGVzZXJpYWxpemVkKSB7XG4gICAgICBpZiAoIXRoaXMuX3BheWxvYWRzSnNvbi5oYXMobWVzc2FnZSkpIHtcbiAgICAgICAganNvbiA9IHRoaXMuX3RyeVBhcnNlSnNvbihtZXNzYWdlLnBheWxvYWQpO1xuICAgICAgICB0aGlzLl9wYXlsb2Fkc0pzb24uc2V0KG1lc3NhZ2UsIGpzb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAganNvbiA9IHRoaXMuX3BheWxvYWRzSnNvbi5nZXQobWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb25cbiAgICAgID8gaHRtbGBcbiAgICAgICAgICAke3RoaXMuc2hvd0FzWWFtbFxuICAgICAgICAgICAgPyBodG1sYCA8cHJlPiR7c2FmZUR1bXAoanNvbil9PC9wcmU+IGBcbiAgICAgICAgICAgIDogaHRtbGAgPHByZT4ke0pTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpfTwvcHJlPiBgfVxuICAgICAgICBgXG4gICAgICA6IGh0bWxgIDxjb2RlPiR7bWVzc2FnZS5wYXlsb2FkfTwvY29kZT4gYDtcbiAgfVxuXG4gIHByaXZhdGUgX3RyeVBhcnNlSnNvbihwYXlsb2FkKSB7XG4gICAgbGV0IGpzb25QYXlsb2FkID0gbnVsbDtcbiAgICBsZXQgbyA9IHBheWxvYWQ7XG5cbiAgICAvLyBJZiB0aGUgcGF5bG9hZCBpcyBhIHN0cmluZywgZGV0ZXJtaW5lIGlmIHRoZSBwYXlsb2FkIGlzIHZhbGlkIEpTT04gYW5kIGlmIGl0XG4gICAgLy8gaXMsIGFzc2lnbiB0aGUgb2JqZWN0IHJlcHJlc2VudGF0aW9uIHRvIHRoaXMuX3BheWxvYWRKc29uLlxuICAgIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbyA9IEpTT04ucGFyc2UocGF5bG9hZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGUgbm9uLWV4Y2VwdGlvbi10aHJvd2luZyBjYXNlczpcbiAgICAvLyBOZWl0aGVyIEpTT04ucGFyc2UoZmFsc2UpIG9yIEpTT04ucGFyc2UoMTIzNCkgdGhyb3cgZXJyb3JzLCBoZW5jZSB0aGUgdHlwZS1jaGVja2luZyxcbiAgICAvLyBidXQuLi4gSlNPTi5wYXJzZShudWxsKSByZXR1cm5zIG51bGwsIGFuZCB0eXBlb2YgbnVsbCA9PT0gXCJvYmplY3RcIixcbiAgICAvLyBzbyB3ZSBtdXN0IGNoZWNrIGZvciB0aGF0LCB0b28uIFRoYW5rZnVsbHksIG51bGwgaXMgZmFsc2V5LCBzbyB0aGlzIHN1ZmZpY2VzOlxuICAgIGlmIChvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBqc29uUGF5bG9hZCA9IG87XG4gICAgfVxuICAgIHJldHVybiBqc29uUGF5bG9hZDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVRvZ2dsZSgpIHtcbiAgICB0aGlzLl9vcGVuID0gIXRoaXMuX29wZW47XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuZXhwYW5kZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI5cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuICAgICAgLmV4cGFuZGVyOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgICAgLmV4cGFuZGVyLm9wZW46YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG4gICAgICAubWVzc2FnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgICAubWVzc2FnZS1saXN0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgcHJlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwibXF0dC1tZXNzYWdlc1wiOiBNUVRUTWVzc2FnZXM7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFHQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7OztBQUFBOzs7OztBQUVBOzs7O0FBQUE7Ozs7OztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBT0E7OztBQUtBO0FBQ0E7O0FBRUE7OztBQUtBO0FBQ0E7O0FBRUE7OztBQUtBOzs7QUFHQTtBQUdBO0FBR0E7OztBQUdBOzs7QUFHQTtBQUdBO0FBR0E7O0FBRUE7QUFDQTs7O0FBeERBO0FBNERBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7Ozs7QUFLQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBVkE7OztBQXZCQTtBQURBO0FBaURBOzs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFPQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFkQTtBQURBO0FBd0JBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVCQTs7O0FBM01BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7O0FBQUE7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUVBO0FBRkE7QUFQQTtBQWFBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0NBOzs7QUF6RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7Ozs7O0FBR0E7Ozs7O0FBRUE7Ozs7QUFBQTs7Ozs7QUFFQTs7OztBQUFBOzs7OztBQUVBOzs7OztBQUVBOzs7OztBQUVBOzs7O0FBQUE7Ozs7O0FBRUE7Ozs7QUFBQTs7Ozs7QUFFQTs7OztBQUFBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFHQTs7OztBQUtBOztBQUtBOztBQVZBOztBQUhBO0FBUEE7QUE0QkE7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7OztBQUxBO0FBVUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQU9BOzs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXdDQTs7O0FBbEtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
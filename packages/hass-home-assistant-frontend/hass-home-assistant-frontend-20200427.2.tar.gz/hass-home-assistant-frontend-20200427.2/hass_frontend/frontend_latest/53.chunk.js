(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[53],{

/***/ "./src/panels/lovelace/cards/hui-media-control-card.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-media-control-card.ts ***!
  \*************************************************************/
/*! exports provided: HuiMediaControlCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiMediaControlCard", function() { return HuiMediaControlCard; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_progress_paper_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-progress/paper-progress */ "./node_modules/@polymer/paper-progress/paper-progress.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var node_vibrant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-vibrant */ "./node_modules/node-vibrant/lib/browser.js");
/* harmony import */ var node_vibrant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_vibrant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _data_media_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../data/media-player */ "./src/data/media-player.ts");
/* harmony import */ var _common_color_contrast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/color/contrast */ "./src/panels/lovelace/common/color/contrast.ts");
/* harmony import */ var _common_find_entites__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/find-entites */ "./src/panels/lovelace/common/find-entites.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_marquee__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/hui-marquee */ "./src/panels/lovelace/components/hui-marquee.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
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























function getContrastRatio(rgb1, rgb2) {
  return Math.round((Object(_common_color_contrast__WEBPACK_IMPORTED_MODULE_16__["contrast"])(rgb1, rgb2) + Number.EPSILON) * 100) / 100;
} // How much the total diff between 2 RGB colors can be
// to be considered similar.


const COLOR_SIMILARITY_THRESHOLD = 150; // For debug purposes, is being tree shaken.

const DEBUG_COLOR =  true && false;

const logColor = (color, label = `${color.getHex()} - ${color.getPopulation()}`) => // eslint-disable-next-line no-console
console.log(`%c${label}`, `color: ${color.getBodyTextColor()}; background-color: ${color.getHex()}`);

const customGenerator = colors => {
  colors.sort((colorA, colorB) => colorB.population - colorA.population);
  const backgroundColor = colors[0];
  let foregroundColor;
  const contrastRatios = new Map();

  const approvedContrastRatio = color => {
    if (!contrastRatios.has(color)) {
      contrastRatios.set(color, getContrastRatio(backgroundColor.rgb, color.rgb));
    }

    return contrastRatios.get(color) > _data_media_player__WEBPACK_IMPORTED_MODULE_15__["CONTRAST_RATIO"];
  }; // We take each next color and find one that has better contrast.


  for (let i = 1; i < colors.length && foregroundColor === undefined; i++) {
    // If this color matches, score, take it.
    if (approvedContrastRatio(colors[i])) {
      if (DEBUG_COLOR) {
        logColor(colors[i], "PICKED");
      }

      foregroundColor = colors[i].hex;
      break;
    } // This color has the wrong contrast ratio, but it is the right color.
    // Let's find similar colors that might have the right contrast ratio


    const currentColor = colors[i];

    if (DEBUG_COLOR) {
      logColor(colors[i], "Finding similar color with better contrast");
    }

    for (let j = i + 1; j < colors.length; j++) {
      const compareColor = colors[j]; // difference. 0 is same, 765 max difference

      const diffScore = Math.abs(currentColor.rgb[0] - compareColor.rgb[0]) + Math.abs(currentColor.rgb[1] - compareColor.rgb[1]) + Math.abs(currentColor.rgb[2] - compareColor.rgb[2]);

      if (DEBUG_COLOR) {
        logColor(colors[j], `${colors[j].hex} - ${diffScore}`);
      }

      if (diffScore > COLOR_SIMILARITY_THRESHOLD) {
        continue;
      }

      if (approvedContrastRatio(compareColor)) {
        if (DEBUG_COLOR) {
          logColor(compareColor, "PICKED");
        }

        foregroundColor = compareColor.hex;
        break;
      }
    }
  }

  if (foregroundColor === undefined) {
    foregroundColor = backgroundColor.bodyTextColor;
  }

  if (DEBUG_COLOR) {
    // eslint-disable-next-line no-console
    console.log(); // eslint-disable-next-line no-console

    console.log("%cPicked colors", `color: ${foregroundColor}; background-color: ${backgroundColor.hex}; font-weight: bold; padding: 16px;`);
    colors.forEach(color => logColor(color)); // eslint-disable-next-line no-console

    console.log();
  }

  return [foregroundColor, backgroundColor.hex];
};

let HuiMediaControlCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("hui-media-control-card")], function (_initialize, _LitElement) {
  class HuiMediaControlCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiMediaControlCard,
    d: [{
      kind: "method",
      static: true,
      key: "getConfigElement",
      value: async function getConfigElement() {
        await Promise.all(/*! import() | hui-media-control-card-editor */[__webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430"), __webpack_require__.e("vendors~hui-media-control-card-editor"), __webpack_require__.e(10), __webpack_require__.e("hui-media-control-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-media-control-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-media-control-card-editor.ts"));
        return document.createElement("hui-media-control-card-editor");
      }
    }, {
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig(hass, entities, entitiesFallback) {
        const includeDomains = ["media_player"];
        const maxEntities = 1;
        const foundEntities = Object(_common_find_entites__WEBPACK_IMPORTED_MODULE_17__["findEntities"])(hass, maxEntities, entities, entitiesFallback, includeDomains);
        return {
          type: "media-control",
          entity: foundEntities[0] || ""
        };
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_foregroundColor",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_backgroundColor",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_narrow",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_veryNarrow",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_cardHeight",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["query"])("paper-progress")],
      key: "_progressBar",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_marqueeActive",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_progressInterval",
      value: void 0
    }, {
      kind: "field",
      key: "_resizeObserver",
      value: void 0
    }, {
      kind: "method",
      key: "getCardSize",
      value: function getCardSize() {
        return 3;
      }
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config.entity || config.entity.split(".")[0] !== "media_player") {
          throw new Error("Specify an entity from within the media_player domain.");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiMediaControlCard.prototype), "connectedCallback", this).call(this);

        this.updateComplete.then(() => this._measureCard());

        if (!this.hass || !this._config) {
          return;
        }

        const stateObj = this._stateObj;

        if (!stateObj) {
          return;
        }

        if (!this._progressInterval && this._showProgressBar && stateObj.state === "playing") {
          this._progressInterval = window.setInterval(() => this._updateProgressBar(), 1000);
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._progressInterval) {
          clearInterval(this._progressInterval);
          this._progressInterval = undefined;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this._config) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]``;
        }

        const stateObj = this._stateObj;

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }

        const imageStyle = {
          "background-image": this._image ? `url(${this.hass.hassUrl(this._image)})` : "none",
          width: `${this._cardHeight}px`,
          "background-color": this._backgroundColor || ""
        };
        const gradientStyle = {
          "background-image": `linear-gradient(to right, ${this._backgroundColor}, ${this._backgroundColor + "00"})`,
          width: `${this._cardHeight}px`
        };
        const state = stateObj.state;
        const isOffState = state === "off";
        const isUnavailable = _data_entity__WEBPACK_IMPORTED_MODULE_14__["UNAVAILABLE_STATES"].includes(state) || state === "off" && !Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_TURN_ON"]);
        const hasNoImage = !this._image;

        const controls = this._getControls();

        const showControls = controls && (!this._veryNarrow || isOffState || state === "idle" || state === "on");
        const mediaDescription = Object(_data_media_player__WEBPACK_IMPORTED_MODULE_15__["computeMediaDescription"])(stateObj);
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <ha-card>
        <div
          class="background ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
          "no-image": hasNoImage,
          off: isOffState || isUnavailable,
          unavailable: isUnavailable
        })}"
        >
          <div
            class="color-block"
            style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
          "background-color": this._backgroundColor || ""
        })}
          ></div>
          <div
            class="no-img"
            style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
          "background-color": this._backgroundColor || ""
        })}
          ></div>
          <div class="image" style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])(imageStyle)}></div>
          ${hasNoImage ? "" : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                <div
                  class="color-gradient"
                  style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])(gradientStyle)}
                ></div>
              `}
        </div>
        <div
          class="player ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
          "no-image": hasNoImage,
          narrow: this._narrow && !this._veryNarrow,
          off: isOffState || isUnavailable,
          "no-progress": this._veryNarrow || !this._showProgressBar,
          "no-controls": !showControls
        })}"
          style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
          color: this._foregroundColor || ""
        })}
        >
          <div class="top-info">
            <div class="icon-name">
              <ha-icon class="icon" .icon=${Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_9__["stateIcon"])(stateObj)}></ha-icon>
              <div>
                ${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(this.hass.states[this._config.entity])}
              </div>
            </div>
            <div>
              <paper-icon-button
                icon="hass:dots-vertical"
                class="more-info"
                @click=${this._handleMoreInfo}
              ></paper-icon-button>
            </div>
          </div>
          ${isUnavailable ? "" : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                <div
                  class="title-controls"
                  style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
          paddingRight: isOffState ? "0" : `${this._cardHeight - 40}px`
        })}
                >
                  ${!mediaDescription && !stateObj.attributes.media_title ? "" : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        <div class="media-info">
                          <hui-marquee
                            .text=${stateObj.attributes.media_title || mediaDescription}
                            .active=${this._marqueeActive}
                            @mouseover=${this._marqueeMouseOver}
                            @mouseleave=${this._marqueeMouseLeave}
                          ></hui-marquee>
                          ${!stateObj.attributes.media_title ? "" : mediaDescription}
                        </div>
                      `}
                  ${!showControls ? "" : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        <div class="controls">
                          ${controls.map(control => lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                              <paper-icon-button
                                .icon=${control.icon}
                                action=${control.action}
                                @click=${this._handleClick}
                              ></paper-icon-button>
                            `)}
                        </div>
                      `}
                </div>
                ${!this._showProgressBar ? "" : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                      <paper-progress
                        .max=${stateObj.attributes.media_duration}
                        style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
          "--paper-progress-active-color": this._foregroundColor || "var(--accent-color)",
          cursor: Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_SEEK"]) ? "pointer" : "initial"
        })}
                        @click=${this._handleSeek}
                      ></paper-progress>
                    `}
              `}
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_18__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this._attachObserver();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        var _oldHass$states$this$, _oldHass$states$this$2;

        _get(_getPrototypeOf(HuiMediaControlCard.prototype), "updated", this).call(this, changedProps);

        if (!this._config || !this.hass || !changedProps.has("hass")) {
          return;
        }

        const stateObj = this._stateObj;

        if (!stateObj) {
          if (this._progressInterval) {
            clearInterval(this._progressInterval);
            this._progressInterval = undefined;
          }

          this._foregroundColor = undefined;
          this._backgroundColor = undefined;
          return;
        }

        const oldHass = changedProps.get("hass");
        const oldConfig = changedProps.get("_config");

        if (!oldHass || !oldConfig || oldHass.themes !== this.hass.themes || oldConfig.theme !== this._config.theme) {
          Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__["applyThemesOnElement"])(this, this.hass.themes, this._config.theme);
        }

        this._updateProgressBar();

        if (!this._progressInterval && this._showProgressBar && stateObj.state === "playing") {
          this._progressInterval = window.setInterval(() => this._updateProgressBar(), 1000);
        } else if (this._progressInterval && (!this._showProgressBar || stateObj.state !== "playing")) {
          clearInterval(this._progressInterval);
          this._progressInterval = undefined;
        }

        const oldImage = (oldHass === null || oldHass === void 0 ? void 0 : (_oldHass$states$this$ = oldHass.states[this._config.entity]) === null || _oldHass$states$this$ === void 0 ? void 0 : _oldHass$states$this$.attributes.entity_picture_local) || (oldHass === null || oldHass === void 0 ? void 0 : (_oldHass$states$this$2 = oldHass.states[this._config.entity]) === null || _oldHass$states$this$2 === void 0 ? void 0 : _oldHass$states$this$2.attributes.entity_picture);

        if (!this._image) {
          this._foregroundColor = undefined;
          this._backgroundColor = undefined;
          return;
        }

        if (this._image !== oldImage) {
          this._setColors();
        }
      }
    }, {
      kind: "method",
      key: "_getControls",
      value: function _getControls() {
        const stateObj = this._stateObj;

        if (!stateObj) {
          return undefined;
        }

        const state = stateObj.state;

        if (_data_entity__WEBPACK_IMPORTED_MODULE_14__["UNAVAILABLE_STATES"].includes(state)) {
          return undefined;
        }

        if (state === "off") {
          return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_TURN_ON"]) ? [{
            icon: "hass:power",
            action: "turn_on"
          }] : undefined;
        }

        if (state === "on") {
          return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_TURN_OFF"]) ? [{
            icon: "hass:power",
            action: "turn_off"
          }] : undefined;
        }

        if (state === "idle") {
          return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORTS_PLAY"]) ? [{
            icon: "hass:play",
            action: "media_play"
          }] : undefined;
        }

        const buttons = [];

        if (Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_PREVIOUS_TRACK"])) {
          buttons.push({
            icon: "hass:skip-previous",
            action: "media_previous_track"
          });
        }

        if (state === "playing" && (Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_PAUSE"]) || Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_STOP"])) || state === "paused" && Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORTS_PLAY"])) {
          buttons.push({
            icon: state !== "playing" ? "hass:play" : Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_PAUSE"]) ? "hass:pause" : "hass:stop",
            action: "media_play_pause"
          });
        }

        if (Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_NEXT_TRACK"])) {
          buttons.push({
            icon: "hass:skip-next",
            action: "media_next_track"
          });
        }

        return buttons.length > 0 ? buttons : undefined;
      }
    }, {
      kind: "get",
      key: "_image",
      value: function _image() {
        if (!this.hass || !this._config) {
          return undefined;
        }

        const stateObj = this._stateObj;

        if (!stateObj) {
          return undefined;
        }

        return stateObj.attributes.entity_picture_local || stateObj.attributes.entity_picture;
      }
    }, {
      kind: "get",
      key: "_showProgressBar",
      value: function _showProgressBar() {
        if (!this.hass || !this._config || this._narrow) {
          return false;
        }

        const stateObj = this._stateObj;

        if (!stateObj) {
          return false;
        }

        return (stateObj.state === "playing" || stateObj.state === "paused") && "media_duration" in stateObj.attributes && "media_position" in stateObj.attributes;
      }
    }, {
      kind: "method",
      key: "_measureCard",
      value: function _measureCard() {
        const card = this.shadowRoot.querySelector("ha-card");

        if (!card) {
          return;
        }

        this._narrow = card.offsetWidth < 350;
        this._veryNarrow = card.offsetWidth < 300;
        this._cardHeight = card.offsetHeight;
      }
    }, {
      kind: "method",
      key: "_attachObserver",
      value: function _attachObserver() {
        if (typeof ResizeObserver !== "function") {
          __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.t.bind(null, /*! resize-observer */ "./node_modules/resize-observer/lib/ResizeObserver.js", 7)).then(modules => {
            modules.install();

            this._attachObserver();
          });
          return;
        }

        this._resizeObserver = new ResizeObserver(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_11__["debounce"])(() => this._measureCard(), 250, false));
        const card = this.shadowRoot.querySelector("ha-card"); // If we show an error or warning there is no ha-card

        if (!card) {
          return;
        }

        this._resizeObserver.observe(card);
      }
    }, {
      kind: "method",
      key: "_handleMoreInfo",
      value: function _handleMoreInfo() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "hass-more-info", {
          entityId: this._config.entity
        });
      }
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick(e) {
        this.hass.callService("media_player", e.currentTarget.getAttribute("action"), {
          entity_id: this._config.entity
        });
      }
    }, {
      kind: "method",
      key: "_updateProgressBar",
      value: function _updateProgressBar() {
        if (this._progressBar) {
          this._progressBar.value = Object(_data_media_player__WEBPACK_IMPORTED_MODULE_15__["getCurrentProgress"])(this._stateObj);
        }
      }
    }, {
      kind: "get",
      key: "_stateObj",
      value: function _stateObj() {
        return this.hass.states[this._config.entity];
      }
    }, {
      kind: "method",
      key: "_handleSeek",
      value: function _handleSeek(e) {
        const stateObj = this._stateObj;

        if (!Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_10__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_15__["SUPPORT_SEEK"])) {
          return;
        }

        const progressWidth = this.shadowRoot.querySelector("paper-progress").offsetWidth;
        const percent = e.offsetX / progressWidth;
        const position = e.currentTarget.max * percent;
        this.hass.callService("media_player", "media_seek", {
          entity_id: this._config.entity,
          seek_position: position
        });
      }
    }, {
      kind: "method",
      key: "_setColors",
      value: function _setColors() {
        if (!this._image) {
          return;
        }

        new node_vibrant__WEBPACK_IMPORTED_MODULE_5___default.a(this._image, {
          colorCount: 16,
          generator: customGenerator
        }).getPalette().then(([foreground, background]) => {
          this._backgroundColor = background;
          this._foregroundColor = foreground;
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.error("Error getting Image Colors", err);
          this._foregroundColor = undefined;
          this._backgroundColor = undefined;
        });
      }
    }, {
      kind: "method",
      key: "_marqueeMouseOver",
      value: function _marqueeMouseOver() {
        if (!this._marqueeActive) {
          this._marqueeActive = true;
        }
      }
    }, {
      kind: "method",
      key: "_marqueeMouseLeave",
      value: function _marqueeMouseLeave() {
        if (this._marqueeActive) {
          this._marqueeActive = false;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      ha-card {
        overflow: hidden;
      }

      .background {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition: filter 0.8s;
      }

      .color-block {
        background-color: var(--primary-color);
        transition: background-color 0.8s;
        width: 100%;
      }

      .color-gradient {
        position: absolute;
        background-image: linear-gradient(
          to right,
          var(--primary-color),
          transparent
        );
        height: 100%;
        right: 0;
        opacity: 1;
        transition: width 0.8s, opacity 0.8s linear 0.8s;
      }

      .image {
        background-color: var(--primary-color);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
        height: 100%;
        opacity: 1;
        transition: width 0.8s, background-image 0.8s, background-color 0.8s,
          background-size 0.8s, opacity 0.8s linear 0.8s;
      }

      .no-image .image {
        opacity: 0;
      }

      .no-img {
        background-color: var(--primary-color);
        background-size: initial;
        background-repeat: no-repeat;
        background-position: center center;
        padding-bottom: 0;
        position: absolute;
        right: 0;
        height: 100%;
        background-image: url("../static/images/card_media_player_bg.png");
        width: 50%;
        transition: opacity 0.8s, background-color 0.8s;
      }

      .off .image,
      .off .color-gradient {
        opacity: 0;
        transition: opacity 0s, width 0.8s;
        width: 0;
      }

      .unavailable .no-img,
      .background:not(.off):not(.no-image) .no-img {
        opacity: 0;
      }

      .player {
        position: relative;
        padding: 16px;
        color: var(--text-primary-color);
        transition-property: color, padding;
        transition-duration: 0.4s;
      }

      .icon {
        width: 18px;
      }

      .controls {
        padding: 8px 8px 8px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: padding, color;
        transition-duration: 0.4s;
        margin-left: -12px;
      }

      .controls > div {
        display: flex;
        align-items: center;
      }

      .controls paper-icon-button {
        width: 44px;
        height: 44px;
      }

      paper-icon-button[action="media_play"],
      paper-icon-button[action="media_play_pause"],
      paper-icon-button[action="turn_on"],
      paper-icon-button[action="turn_off"] {
        width: 56px;
        height: 56px;
      }

      .top-info {
        display: flex;
        justify-content: space-between;
      }

      .icon-name {
        display: flex;
        height: fit-content;
        align-items: center;
      }

      .icon-name ha-icon {
        padding-right: 8px;
      }

      .more-info {
        position: absolute;
        top: 8px;
        right: 0px;
      }

      .media-info {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      hui-marquee {
        font-size: 1.2em;
        margin: 0px 0 4px;
      }

      .title-controls {
        padding-top: 16px;
      }

      paper-progress {
        width: 100%;
        height: var(--paper-progress-height, 4px);
        margin-top: 4px;
        border-radius: calc(var(--paper-progress-height, 4px) / 2);
        --paper-progress-container-color: rgba(200, 200, 200, 0.5);
      }

      .no-image .controls {
        padding: 0;
      }

      .off.background {
        filter: grayscale(1);
      }

      .narrow .controls,
      .no-progress .controls {
        padding-bottom: 0;
      }

      .narrow paper-icon-button {
        width: 40px;
        height: 40px;
      }

      .narrow paper-icon-button[action="media_play"],
      .narrow paper-icon-button[action="media_play_pause"],
      .narrow paper-icon-button[action="turn_on"] {
        width: 50px;
        height: 50px;
      }

      .no-progress.player:not(.no-controls) {
        padding-bottom: 0px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/common/color/contrast.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/color/contrast.ts ***!
  \******************************************************/
/*! exports provided: contrast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrast", function() { return contrast; });
/* harmony import */ var _luminanace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luminanace */ "./src/panels/lovelace/common/color/luminanace.ts");

const contrast = (rgb1, rgb2) => {
  const lum1 = Object(_luminanace__WEBPACK_IMPORTED_MODULE_0__["luminanace"])(...rgb1);
  const lum2 = Object(_luminanace__WEBPACK_IMPORTED_MODULE_0__["luminanace"])(...rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};

/***/ }),

/***/ "./src/panels/lovelace/common/color/luminanace.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/common/color/luminanace.ts ***!
  \********************************************************/
/*! exports provided: luminanace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "luminanace", function() { return luminanace; });
const luminanace = (r, g, b) => {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

/***/ }),

/***/ "./src/panels/lovelace/components/hui-marquee.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/components/hui-marquee.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
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



let HuiMarquee = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-marquee")], function (_initialize, _LitElement) {
  class HuiMarquee extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiMarquee,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "text",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "active",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        reflect: true,
        type: Boolean,
        attribute: "animating"
      })],
      key: "_animating",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HuiMarquee.prototype), "firstUpdated", this).call(this, changedProps); // eslint-disable-next-line wc/no-self-class


        this.addEventListener("mouseover", () => this.classList.add("hovering"), {
          // Capture because we need to run before a parent sets active on us.
          // Hovering will disable the overflow, allowing us to calc if we overflow.
          capture: true
        }); // eslint-disable-next-line wc/no-self-class

        this.addEventListener("mouseout", () => this.classList.remove("hovering"));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HuiMarquee.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("text") && this._animating) {
          this._animating = false;
        }

        if (changedProperties.has("active") && this.active && this.offsetWidth < this.scrollWidth) {
          this._animating = true;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.text) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="marquee-inner" @animationiteration=${this._onIteration}>
        <span>${this.text}</span>
        ${this._animating ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]` <span>${this.text}</span> ` : ""}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_onIteration",
      value: function _onIteration() {
        if (!this.active) {
          this._animating = false;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: flex;
        position: relative;
        align-items: center;
        height: 1em;
        contain: strict;
      }

      .marquee-inner {
        position: absolute;
        left: 0;
        right: 0;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      :host(.hovering) .marquee-inner {
        text-overflow: initial;
        overflow: initial;
      }

      :host([animating]) .marquee-inner {
        left: initial;
        right: initial;
        animation: marquee 10s linear infinite;
      }

      :host([animating]) .marquee-inner span {
        padding-right: 16px;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1tZWRpYS1jb250cm9sLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vY29sb3IvY29udHJhc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vY29sb3IvbHVtaW5hbmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvaHVpLW1hcnF1ZWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB0eXBlIHsgUGFwZXJJY29uQnV0dG9uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcHJvZ3Jlc3MvcGFwZXItcHJvZ3Jlc3NcIjtcbmltcG9ydCB0eXBlIHsgUGFwZXJQcm9ncmVzc0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItcHJvZ3Jlc3MvcGFwZXItcHJvZ3Jlc3NcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXBcIjtcbmltcG9ydCBWaWJyYW50IGZyb20gXCJub2RlLXZpYnJhbnRcIjtcbmltcG9ydCB7IFN3YXRjaCB9IGZyb20gXCJub2RlLXZpYnJhbnQvbGliL2NvbG9yXCI7XG5pbXBvcnQgeyBhcHBseVRoZW1lc09uRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBzdGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7IFVOQVZBSUxBQkxFX1NUQVRFUyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eVwiO1xuaW1wb3J0IHtcbiAgY29tcHV0ZU1lZGlhRGVzY3JpcHRpb24sXG4gIENPTlRSQVNUX1JBVElPLFxuICBnZXRDdXJyZW50UHJvZ3Jlc3MsXG4gIFNVUFBPUlRTX1BMQVksXG4gIFNVUFBPUlRfTkVYVF9UUkFDSyxcbiAgU1VQUE9SVF9QQVVTRSxcbiAgU1VQUE9SVF9QUkVWSU9VU19UUkFDSyxcbiAgU1VQUE9SVF9TRUVLLFxuICBTVVBQT1JUX1NUT1AsXG4gIFNVUFBPUlRfVFVSTl9PRkYsXG4gIFNVUFBPUlRfVFVSTl9PTixcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbWVkaWEtcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQsIE1lZGlhRW50aXR5IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb250cmFzdCB9IGZyb20gXCIuLi9jb21tb24vY29sb3IvY29udHJhc3RcIjtcbmltcG9ydCB7IGZpbmRFbnRpdGllcyB9IGZyb20gXCIuLi9jb21tb24vZmluZC1lbnRpdGVzXCI7XG5pbXBvcnQgeyBoYXNDb25maWdPckVudGl0eUNoYW5nZWQgfSBmcm9tIFwiLi4vY29tbW9uL2hhcy1jaGFuZ2VkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS1tYXJxdWVlXCI7XG5pbXBvcnQgdHlwZSB7IExvdmVsYWNlQ2FyZCwgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS13YXJuaW5nXCI7XG5pbXBvcnQgeyBNZWRpYUNvbnRyb2xDYXJkQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZnVuY3Rpb24gZ2V0Q29udHJhc3RSYXRpbyhcbiAgcmdiMTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICByZ2IyOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cbik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnJvdW5kKChjb250cmFzdChyZ2IxLCByZ2IyKSArIE51bWJlci5FUFNJTE9OKSAqIDEwMCkgLyAxMDA7XG59XG5cbi8vIEhvdyBtdWNoIHRoZSB0b3RhbCBkaWZmIGJldHdlZW4gMiBSR0IgY29sb3JzIGNhbiBiZVxuLy8gdG8gYmUgY29uc2lkZXJlZCBzaW1pbGFyLlxuY29uc3QgQ09MT1JfU0lNSUxBUklUWV9USFJFU0hPTEQgPSAxNTA7XG5cbi8vIEZvciBkZWJ1ZyBwdXJwb3NlcywgaXMgYmVpbmcgdHJlZSBzaGFrZW4uXG5jb25zdCBERUJVR19DT0xPUiA9IF9fREVWX18gJiYgZmFsc2U7XG5cbmNvbnN0IGxvZ0NvbG9yID0gKFxuICBjb2xvcjogU3dhdGNoLFxuICBsYWJlbCA9IGAke2NvbG9yLmdldEhleCgpfSAtICR7Y29sb3IuZ2V0UG9wdWxhdGlvbigpfWBcbikgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS5sb2coXG4gICAgYCVjJHtsYWJlbH1gLFxuICAgIGBjb2xvcjogJHtjb2xvci5nZXRCb2R5VGV4dENvbG9yKCl9OyBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmdldEhleCgpfWBcbiAgKTtcblxuY29uc3QgY3VzdG9tR2VuZXJhdG9yID0gKGNvbG9yczogU3dhdGNoW10pID0+IHtcbiAgY29sb3JzLnNvcnQoKGNvbG9yQSwgY29sb3JCKSA9PiBjb2xvckIucG9wdWxhdGlvbiAtIGNvbG9yQS5wb3B1bGF0aW9uKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbMF07XG4gIGxldCBmb3JlZ3JvdW5kQ29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBjb25zdCBjb250cmFzdFJhdGlvcyA9IG5ldyBNYXA8U3dhdGNoLCBudW1iZXI+KCk7XG4gIGNvbnN0IGFwcHJvdmVkQ29udHJhc3RSYXRpbyA9IChjb2xvcjogU3dhdGNoKSA9PiB7XG4gICAgaWYgKCFjb250cmFzdFJhdGlvcy5oYXMoY29sb3IpKSB7XG4gICAgICBjb250cmFzdFJhdGlvcy5zZXQoXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmRDb2xvci5yZ2IsIGNvbG9yLnJnYilcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyYXN0UmF0aW9zLmdldChjb2xvcikhID4gQ09OVFJBU1RfUkFUSU87XG4gIH07XG5cbiAgLy8gV2UgdGFrZSBlYWNoIG5leHQgY29sb3IgYW5kIGZpbmQgb25lIHRoYXQgaGFzIGJldHRlciBjb250cmFzdC5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjb2xvcnMubGVuZ3RoICYmIGZvcmVncm91bmRDb2xvciA9PT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAvLyBJZiB0aGlzIGNvbG9yIG1hdGNoZXMsIHNjb3JlLCB0YWtlIGl0LlxuICAgIGlmIChhcHByb3ZlZENvbnRyYXN0UmF0aW8oY29sb3JzW2ldKSkge1xuICAgICAgaWYgKERFQlVHX0NPTE9SKSB7XG4gICAgICAgIGxvZ0NvbG9yKGNvbG9yc1tpXSwgXCJQSUNLRURcIik7XG4gICAgICB9XG4gICAgICBmb3JlZ3JvdW5kQ29sb3IgPSBjb2xvcnNbaV0uaGV4O1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBjb2xvciBoYXMgdGhlIHdyb25nIGNvbnRyYXN0IHJhdGlvLCBidXQgaXQgaXMgdGhlIHJpZ2h0IGNvbG9yLlxuICAgIC8vIExldCdzIGZpbmQgc2ltaWxhciBjb2xvcnMgdGhhdCBtaWdodCBoYXZlIHRoZSByaWdodCBjb250cmFzdCByYXRpb1xuXG4gICAgY29uc3QgY3VycmVudENvbG9yID0gY29sb3JzW2ldO1xuICAgIGlmIChERUJVR19DT0xPUikge1xuICAgICAgbG9nQ29sb3IoY29sb3JzW2ldLCBcIkZpbmRpbmcgc2ltaWxhciBjb2xvciB3aXRoIGJldHRlciBjb250cmFzdFwiKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBjb2xvcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGNvbXBhcmVDb2xvciA9IGNvbG9yc1tqXTtcblxuICAgICAgLy8gZGlmZmVyZW5jZS4gMCBpcyBzYW1lLCA3NjUgbWF4IGRpZmZlcmVuY2VcbiAgICAgIGNvbnN0IGRpZmZTY29yZSA9XG4gICAgICAgIE1hdGguYWJzKGN1cnJlbnRDb2xvci5yZ2JbMF0gLSBjb21wYXJlQ29sb3IucmdiWzBdKSArXG4gICAgICAgIE1hdGguYWJzKGN1cnJlbnRDb2xvci5yZ2JbMV0gLSBjb21wYXJlQ29sb3IucmdiWzFdKSArXG4gICAgICAgIE1hdGguYWJzKGN1cnJlbnRDb2xvci5yZ2JbMl0gLSBjb21wYXJlQ29sb3IucmdiWzJdKTtcblxuICAgICAgaWYgKERFQlVHX0NPTE9SKSB7XG4gICAgICAgIGxvZ0NvbG9yKGNvbG9yc1tqXSwgYCR7Y29sb3JzW2pdLmhleH0gLSAke2RpZmZTY29yZX1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpZmZTY29yZSA+IENPTE9SX1NJTUlMQVJJVFlfVEhSRVNIT0xEKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXBwcm92ZWRDb250cmFzdFJhdGlvKGNvbXBhcmVDb2xvcikpIHtcbiAgICAgICAgaWYgKERFQlVHX0NPTE9SKSB7XG4gICAgICAgICAgbG9nQ29sb3IoY29tcGFyZUNvbG9yLCBcIlBJQ0tFRFwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JlZ3JvdW5kQ29sb3IgPSBjb21wYXJlQ29sb3IuaGV4O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZm9yZWdyb3VuZENvbG9yID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3JlZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3IuYm9keVRleHRDb2xvcjtcbiAgfVxuXG4gIGlmIChERUJVR19DT0xPUikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCIlY1BpY2tlZCBjb2xvcnNcIixcbiAgICAgIGBjb2xvcjogJHtmb3JlZ3JvdW5kQ29sb3J9OyBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvci5oZXh9OyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogMTZweDtgXG4gICAgKTtcbiAgICBjb2xvcnMuZm9yRWFjaCgoY29sb3IpID0+IGxvZ0NvbG9yKGNvbG9yKSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZygpO1xuICB9XG5cbiAgcmV0dXJuIFtmb3JlZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvci5oZXhdO1xufTtcblxuaW50ZXJmYWNlIENvbnRyb2xCdXR0b24ge1xuICBpY29uOiBzdHJpbmc7XG4gIGFjdGlvbjogc3RyaW5nO1xufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS1tZWRpYS1jb250cm9sLWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIdWlNZWRpYUNvbnRyb2xDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCBpbXBsZW1lbnRzIExvdmVsYWNlQ2FyZCB7XG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q29uZmlnRWxlbWVudCgpOiBQcm9taXNlPExvdmVsYWNlQ2FyZEVkaXRvcj4ge1xuICAgIGF3YWl0IGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLW1lZGlhLWNvbnRyb2wtY2FyZC1lZGl0b3JcIiAqLyBcIi4uL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLW1lZGlhLWNvbnRyb2wtY2FyZC1lZGl0b3JcIlxuICAgICk7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJodWktbWVkaWEtY29udHJvbC1jYXJkLWVkaXRvclwiKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R1YkNvbmZpZyhcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGVudGl0aWVzOiBzdHJpbmdbXSxcbiAgICBlbnRpdGllc0ZhbGxiYWNrOiBzdHJpbmdbXVxuICApOiBNZWRpYUNvbnRyb2xDYXJkQ29uZmlnIHtcbiAgICBjb25zdCBpbmNsdWRlRG9tYWlucyA9IFtcIm1lZGlhX3BsYXllclwiXTtcbiAgICBjb25zdCBtYXhFbnRpdGllcyA9IDE7XG4gICAgY29uc3QgZm91bmRFbnRpdGllcyA9IGZpbmRFbnRpdGllcyhcbiAgICAgIGhhc3MsXG4gICAgICBtYXhFbnRpdGllcyxcbiAgICAgIGVudGl0aWVzLFxuICAgICAgZW50aXRpZXNGYWxsYmFjayxcbiAgICAgIGluY2x1ZGVEb21haW5zXG4gICAgKTtcblxuICAgIHJldHVybiB7IHR5cGU6IFwibWVkaWEtY29udHJvbFwiLCBlbnRpdHk6IGZvdW5kRW50aXRpZXNbMF0gfHwgXCJcIiB9O1xuICB9XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IE1lZGlhQ29udHJvbENhcmRDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZm9yZWdyb3VuZENvbG9yPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2JhY2tncm91bmRDb2xvcj86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9uYXJyb3cgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF92ZXJ5TmFycm93ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2FyZEhlaWdodCA9IDA7XG5cbiAgQHF1ZXJ5KFwicGFwZXItcHJvZ3Jlc3NcIikgcHJpdmF0ZSBfcHJvZ3Jlc3NCYXI/OiBQYXBlclByb2dyZXNzRWxlbWVudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9tYXJxdWVlQWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NJbnRlcnZhbD86IG51bWJlcjtcblxuICBwcml2YXRlIF9yZXNpemVPYnNlcnZlcj86IFJlc2l6ZU9ic2VydmVyO1xuXG4gIHB1YmxpYyBnZXRDYXJkU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAzO1xuICB9XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IE1lZGlhQ29udHJvbENhcmRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZy5lbnRpdHkgfHwgY29uZmlnLmVudGl0eS5zcGxpdChcIi5cIilbMF0gIT09IFwibWVkaWFfcGxheWVyXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNwZWNpZnkgYW4gZW50aXR5IGZyb20gd2l0aGluIHRoZSBtZWRpYV9wbGF5ZXIgZG9tYWluLlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4gdGhpcy5fbWVhc3VyZUNhcmQoKSk7XG5cbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLl9zdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhdGhpcy5fcHJvZ3Jlc3NJbnRlcnZhbCAmJlxuICAgICAgdGhpcy5fc2hvd1Byb2dyZXNzQmFyICYmXG4gICAgICBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJwbGF5aW5nXCJcbiAgICApIHtcbiAgICAgIHRoaXMuX3Byb2dyZXNzSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoXG4gICAgICAgICgpID0+IHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKCksXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wcm9ncmVzc0ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX3Byb2dyZXNzSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuX3N0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxodWktd2FybmluZ1xuICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2Uud2FybmluZy5lbnRpdHlfbm90X2ZvdW5kXCIsXG4gICAgICAgICAgICBcImVudGl0eVwiLFxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmVudGl0eVxuICAgICAgICAgICl9PC9odWktd2FybmluZ1xuICAgICAgICA+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlU3R5bGUgPSB7XG4gICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogdGhpcy5faW1hZ2VcbiAgICAgICAgPyBgdXJsKCR7dGhpcy5oYXNzLmhhc3NVcmwodGhpcy5faW1hZ2UpfSlgXG4gICAgICAgIDogXCJub25lXCIsXG4gICAgICB3aWR0aDogYCR7dGhpcy5fY2FyZEhlaWdodH1weGAsXG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogdGhpcy5fYmFja2dyb3VuZENvbG9yIHx8IFwiXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IGdyYWRpZW50U3R5bGUgPSB7XG4gICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yXG4gICAgICB9LCAke3RoaXMuX2JhY2tncm91bmRDb2xvciArIFwiMDBcIn0pYCxcbiAgICAgIHdpZHRoOiBgJHt0aGlzLl9jYXJkSGVpZ2h0fXB4YCxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdGUgPSBzdGF0ZU9iai5zdGF0ZTtcblxuICAgIGNvbnN0IGlzT2ZmU3RhdGUgPSBzdGF0ZSA9PT0gXCJvZmZcIjtcbiAgICBjb25zdCBpc1VuYXZhaWxhYmxlID1cbiAgICAgIFVOQVZBSUxBQkxFX1NUQVRFUy5pbmNsdWRlcyhzdGF0ZSkgfHxcbiAgICAgIChzdGF0ZSA9PT0gXCJvZmZcIiAmJiAhc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBTVVBQT1JUX1RVUk5fT04pKTtcbiAgICBjb25zdCBoYXNOb0ltYWdlID0gIXRoaXMuX2ltYWdlO1xuICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5fZ2V0Q29udHJvbHMoKTtcbiAgICBjb25zdCBzaG93Q29udHJvbHMgPVxuICAgICAgY29udHJvbHMgJiZcbiAgICAgICghdGhpcy5fdmVyeU5hcnJvdyB8fCBpc09mZlN0YXRlIHx8IHN0YXRlID09PSBcImlkbGVcIiB8fCBzdGF0ZSA9PT0gXCJvblwiKTtcblxuICAgIGNvbnN0IG1lZGlhRGVzY3JpcHRpb24gPSBjb21wdXRlTWVkaWFEZXNjcmlwdGlvbihzdGF0ZU9iaik7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJiYWNrZ3JvdW5kICR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgXCJuby1pbWFnZVwiOiBoYXNOb0ltYWdlLFxuICAgICAgICAgICAgb2ZmOiBpc09mZlN0YXRlIHx8IGlzVW5hdmFpbGFibGUsXG4gICAgICAgICAgICB1bmF2YWlsYWJsZTogaXNVbmF2YWlsYWJsZSxcbiAgICAgICAgICB9KX1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjb2xvci1ibG9ja1wiXG4gICAgICAgICAgICBzdHlsZT0ke3N0eWxlTWFwKHtcbiAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IHRoaXMuX2JhY2tncm91bmRDb2xvciB8fCBcIlwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwibm8taW1nXCJcbiAgICAgICAgICAgIHN0eWxlPSR7c3R5bGVNYXAoe1xuICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogdGhpcy5fYmFja2dyb3VuZENvbG9yIHx8IFwiXCIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlXCIgc3R5bGU9JHtzdHlsZU1hcChpbWFnZVN0eWxlKX0+PC9kaXY+XG4gICAgICAgICAgJHtoYXNOb0ltYWdlXG4gICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbG9yLWdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPSR7c3R5bGVNYXAoZ3JhZGllbnRTdHlsZSl9XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwicGxheWVyICR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgXCJuby1pbWFnZVwiOiBoYXNOb0ltYWdlLFxuICAgICAgICAgICAgbmFycm93OiB0aGlzLl9uYXJyb3cgJiYgIXRoaXMuX3ZlcnlOYXJyb3csXG4gICAgICAgICAgICBvZmY6IGlzT2ZmU3RhdGUgfHwgaXNVbmF2YWlsYWJsZSxcbiAgICAgICAgICAgIFwibm8tcHJvZ3Jlc3NcIjogdGhpcy5fdmVyeU5hcnJvdyB8fCAhdGhpcy5fc2hvd1Byb2dyZXNzQmFyLFxuICAgICAgICAgICAgXCJuby1jb250cm9sc1wiOiAhc2hvd0NvbnRyb2xzLFxuICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgc3R5bGU9JHtzdHlsZU1hcCh7IGNvbG9yOiB0aGlzLl9mb3JlZ3JvdW5kQ29sb3IgfHwgXCJcIiB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3AtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tbmFtZVwiPlxuICAgICAgICAgICAgICA8aGEtaWNvbiBjbGFzcz1cImljb25cIiAuaWNvbj0ke3N0YXRlSWNvbihzdGF0ZU9iail9PjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAke3RoaXMuX2NvbmZpZyEubmFtZSB8fFxuICAgICAgICAgICAgICAgIGNvbXB1dGVTdGF0ZU5hbWUodGhpcy5oYXNzIS5zdGF0ZXNbdGhpcy5fY29uZmlnIS5lbnRpdHldKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibW9yZS1pbmZvXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVNb3JlSW5mb31cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAke2lzVW5hdmFpbGFibGVcbiAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGl0bGUtY29udHJvbHNcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9JHtzdHlsZU1hcCh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogaXNPZmZTdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgID8gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGAke3RoaXMuX2NhcmRIZWlnaHQgLSA0MH1weGAsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAkeyFtZWRpYURlc2NyaXB0aW9uICYmICFzdGF0ZU9iai5hdHRyaWJ1dGVzLm1lZGlhX3RpdGxlXG4gICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aHVpLW1hcnF1ZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWVkaWFfdGl0bGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYURlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmU9JHt0aGlzLl9tYXJxdWVlQWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9JHt0aGlzLl9tYXJxdWVlTW91c2VPdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtb3VzZWxlYXZlPSR7dGhpcy5fbWFycXVlZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2h1aS1tYXJxdWVlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAkeyFzdGF0ZU9iai5hdHRyaWJ1dGVzLm1lZGlhX3RpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtZWRpYURlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICR7IXNob3dDb250cm9sc1xuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7Y29udHJvbHMhLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29udHJvbCkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWNvbj0ke2NvbnRyb2wuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPSR7Y29udHJvbC5hY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAkeyF0aGlzLl9zaG93UHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1wcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1heD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWVkaWFfZHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT0ke3N0eWxlTWFwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLXBhcGVyLXByb2dyZXNzLWFjdGl2ZS1jb2xvclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmVncm91bmRDb2xvciB8fCBcInZhcigtLWFjY2VudC1jb2xvcilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIFNVUFBPUlRfU0VFSylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImluaXRpYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlU2Vla31cbiAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1wcm9ncmVzcz5cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNDb25maWdPckVudGl0eUNoYW5nZWQodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fYXR0YWNoT2JzZXJ2ZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzIHx8ICFjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5fc3RhdGVPYmo7XG5cbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICBpZiAodGhpcy5fcHJvZ3Jlc3NJbnRlcnZhbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX3Byb2dyZXNzSW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9wcm9ncmVzc0ludGVydmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdGhpcy5fZm9yZWdyb3VuZENvbG9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IG9sZENvbmZpZyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJfY29uZmlnXCIpIGFzXG4gICAgICB8IE1lZGlhQ29udHJvbENhcmRDb25maWdcbiAgICAgIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgIW9sZEhhc3MgfHxcbiAgICAgICFvbGRDb25maWcgfHxcbiAgICAgIG9sZEhhc3MudGhlbWVzICE9PSB0aGlzLmhhc3MudGhlbWVzIHx8XG4gICAgICBvbGRDb25maWcudGhlbWUgIT09IHRoaXMuX2NvbmZpZy50aGVtZVxuICAgICkge1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQodGhpcywgdGhpcy5oYXNzLnRoZW1lcywgdGhpcy5fY29uZmlnLnRoZW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0JhcigpO1xuXG4gICAgaWYgKFxuICAgICAgIXRoaXMuX3Byb2dyZXNzSW50ZXJ2YWwgJiZcbiAgICAgIHRoaXMuX3Nob3dQcm9ncmVzc0JhciAmJlxuICAgICAgc3RhdGVPYmouc3RhdGUgPT09IFwicGxheWluZ1wiXG4gICAgKSB7XG4gICAgICB0aGlzLl9wcm9ncmVzc0ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKFxuICAgICAgICAoKSA9PiB0aGlzLl91cGRhdGVQcm9ncmVzc0JhcigpLFxuICAgICAgICAxMDAwXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLl9wcm9ncmVzc0ludGVydmFsICYmXG4gICAgICAoIXRoaXMuX3Nob3dQcm9ncmVzc0JhciB8fCBzdGF0ZU9iai5zdGF0ZSAhPT0gXCJwbGF5aW5nXCIpXG4gICAgKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX3Byb2dyZXNzSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRJbWFnZSA9XG4gICAgICBvbGRIYXNzPy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eV0/LmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmVfbG9jYWwgfHxcbiAgICAgIG9sZEhhc3M/LnN0YXRlc1t0aGlzLl9jb25maWcuZW50aXR5XT8uYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZTtcblxuICAgIGlmICghdGhpcy5faW1hZ2UpIHtcbiAgICAgIHRoaXMuX2ZvcmVncm91bmRDb2xvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW1hZ2UgIT09IG9sZEltYWdlKSB7XG4gICAgICB0aGlzLl9zZXRDb2xvcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRDb250cm9scygpOiBDb250cm9sQnV0dG9uW10gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5fc3RhdGVPYmo7XG5cbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gc3RhdGVPYmouc3RhdGU7XG5cbiAgICBpZiAoVU5BVkFJTEFCTEVfU1RBVEVTLmluY2x1ZGVzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUgPT09IFwib2ZmXCIpIHtcbiAgICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIFNVUFBPUlRfVFVSTl9PTilcbiAgICAgICAgPyBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiaGFzczpwb3dlclwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwidHVybl9vblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSA9PT0gXCJvblwiKSB7XG4gICAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBTVVBQT1JUX1RVUk5fT0ZGKVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJoYXNzOnBvd2VyXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJ0dXJuX29mZlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIFNVUFBPUlRTX1BMQVkpXG4gICAgICAgID8gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImhhc3M6cGxheVwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwibWVkaWFfcGxheVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbnM6IENvbnRyb2xCdXR0b25bXSA9IFtdO1xuXG4gICAgaWYgKHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgU1VQUE9SVF9QUkVWSU9VU19UUkFDSykpIHtcbiAgICAgIGJ1dHRvbnMucHVzaCh7XG4gICAgICAgIGljb246IFwiaGFzczpza2lwLXByZXZpb3VzXCIsXG4gICAgICAgIGFjdGlvbjogXCJtZWRpYV9wcmV2aW91c190cmFja1wiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKHN0YXRlID09PSBcInBsYXlpbmdcIiAmJlxuICAgICAgICAoc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBTVVBQT1JUX1BBVVNFKSB8fFxuICAgICAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgU1VQUE9SVF9TVE9QKSkpIHx8XG4gICAgICAoc3RhdGUgPT09IFwicGF1c2VkXCIgJiYgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBTVVBQT1JUU19QTEFZKSlcbiAgICApIHtcbiAgICAgIGJ1dHRvbnMucHVzaCh7XG4gICAgICAgIGljb246XG4gICAgICAgICAgc3RhdGUgIT09IFwicGxheWluZ1wiXG4gICAgICAgICAgICA/IFwiaGFzczpwbGF5XCJcbiAgICAgICAgICAgIDogc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBTVVBQT1JUX1BBVVNFKVxuICAgICAgICAgICAgPyBcImhhc3M6cGF1c2VcIlxuICAgICAgICAgICAgOiBcImhhc3M6c3RvcFwiLFxuICAgICAgICBhY3Rpb246IFwibWVkaWFfcGxheV9wYXVzZVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgU1VQUE9SVF9ORVhUX1RSQUNLKSkge1xuICAgICAgYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgaWNvbjogXCJoYXNzOnNraXAtbmV4dFwiLFxuICAgICAgICBhY3Rpb246IFwibWVkaWFfbmV4dF90cmFja1wiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbnMubGVuZ3RoID4gMCA/IGJ1dHRvbnMgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfaW1hZ2UoKSB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuX3N0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZV9sb2NhbCB8fFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfc2hvd1Byb2dyZXNzQmFyKCkge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWcgfHwgdGhpcy5fbmFycm93KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLl9zdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKHN0YXRlT2JqLnN0YXRlID09PSBcInBsYXlpbmdcIiB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJwYXVzZWRcIikgJiZcbiAgICAgIFwibWVkaWFfZHVyYXRpb25cIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICBcIm1lZGlhX3Bvc2l0aW9uXCIgaW4gc3RhdGVPYmouYXR0cmlidXRlc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9tZWFzdXJlQ2FyZCgpIHtcbiAgICBjb25zdCBjYXJkID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiaGEtY2FyZFwiKTtcbiAgICBpZiAoIWNhcmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbmFycm93ID0gY2FyZC5vZmZzZXRXaWR0aCA8IDM1MDtcbiAgICB0aGlzLl92ZXJ5TmFycm93ID0gY2FyZC5vZmZzZXRXaWR0aCA8IDMwMDtcbiAgICB0aGlzLl9jYXJkSGVpZ2h0ID0gY2FyZC5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hPYnNlcnZlcigpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIFJlc2l6ZU9ic2VydmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGltcG9ydChcInJlc2l6ZS1vYnNlcnZlclwiKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgIG1vZHVsZXMuaW5zdGFsbCgpO1xuICAgICAgICB0aGlzLl9hdHRhY2hPYnNlcnZlcigpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoXG4gICAgICBkZWJvdW5jZSgoKSA9PiB0aGlzLl9tZWFzdXJlQ2FyZCgpLCAyNTAsIGZhbHNlKVxuICAgICk7XG5cbiAgICBjb25zdCBjYXJkID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiaGEtY2FyZFwiKTtcbiAgICAvLyBJZiB3ZSBzaG93IGFuIGVycm9yIG9yIHdhcm5pbmcgdGhlcmUgaXMgbm8gaGEtY2FyZFxuICAgIGlmICghY2FyZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXNpemVPYnNlcnZlci5vYnNlcnZlKGNhcmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTW9yZUluZm8oKTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQ6IHRoaXMuX2NvbmZpZyEuZW50aXR5LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaGFzcyEuY2FsbFNlcnZpY2UoXG4gICAgICBcIm1lZGlhX3BsYXllclwiLFxuICAgICAgKGUuY3VycmVudFRhcmdldCEgYXMgUGFwZXJJY29uQnV0dG9uRWxlbWVudCkuZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpISxcbiAgICAgIHtcbiAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWchLmVudGl0eSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUHJvZ3Jlc3NCYXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Byb2dyZXNzQmFyKSB7XG4gICAgICB0aGlzLl9wcm9ncmVzc0Jhci52YWx1ZSA9IGdldEN1cnJlbnRQcm9ncmVzcyh0aGlzLl9zdGF0ZU9iaiEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9zdGF0ZU9iaigpOiBNZWRpYUVudGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuaGFzcyEuc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XSBhcyBNZWRpYUVudGl0eTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNlZWsoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5fc3RhdGVPYmohO1xuXG4gICAgaWYgKCFzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIFNVUFBPUlRfU0VFSykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc1dpZHRoID0gKHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcbiAgICAgIFwicGFwZXItcHJvZ3Jlc3NcIlxuICAgICkgYXMgSFRNTEVsZW1lbnQpLm9mZnNldFdpZHRoO1xuXG4gICAgY29uc3QgcGVyY2VudCA9IGUub2Zmc2V0WCAvIHByb2dyZXNzV2lkdGg7XG4gICAgY29uc3QgcG9zaXRpb24gPSAoZS5jdXJyZW50VGFyZ2V0ISBhcyBhbnkpLm1heCAqIHBlcmNlbnQ7XG5cbiAgICB0aGlzLmhhc3MhLmNhbGxTZXJ2aWNlKFwibWVkaWFfcGxheWVyXCIsIFwibWVkaWFfc2Vla1wiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuX2NvbmZpZyEuZW50aXR5LFxuICAgICAgc2Vla19wb3NpdGlvbjogcG9zaXRpb24sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRDb2xvcnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pbWFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ldyBWaWJyYW50KHRoaXMuX2ltYWdlLCB7XG4gICAgICBjb2xvckNvdW50OiAxNixcbiAgICAgIGdlbmVyYXRvcjogY3VzdG9tR2VuZXJhdG9yLFxuICAgIH0pXG4gICAgICAuZ2V0UGFsZXR0ZSgpXG4gICAgICAudGhlbigoW2ZvcmVncm91bmQsIGJhY2tncm91bmRdOiBbc3RyaW5nLCBzdHJpbmddKSA9PiB7XG4gICAgICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMuX2ZvcmVncm91bmRDb2xvciA9IGZvcmVncm91bmQ7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBJbWFnZSBDb2xvcnNcIiwgZXJyKTtcbiAgICAgICAgdGhpcy5fZm9yZWdyb3VuZENvbG9yID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSB1bmRlZmluZWQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcnF1ZWVNb3VzZU92ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9tYXJxdWVlQWN0aXZlKSB7XG4gICAgICB0aGlzLl9tYXJxdWVlQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXJxdWVlTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbWFycXVlZUFjdGl2ZSkge1xuICAgICAgdGhpcy5fbWFycXVlZUFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC44cztcbiAgICAgIH1cblxuICAgICAgLmNvbG9yLWJsb2NrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC44cztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5jb2xvci1ncmFkaWVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgIHZhcigtLXByaW1hcnktY29sb3IpLFxuICAgICAgICAgIHRyYW5zcGFyZW50XG4gICAgICAgICk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuOHMsIG9wYWNpdHkgMC44cyBsaW5lYXIgMC44cztcbiAgICAgIH1cblxuICAgICAgLmltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjhzLCBiYWNrZ3JvdW5kLWltYWdlIDAuOHMsIGJhY2tncm91bmQtY29sb3IgMC44cyxcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemUgMC44cywgb3BhY2l0eSAwLjhzIGxpbmVhciAwLjhzO1xuICAgICAgfVxuXG4gICAgICAubm8taW1hZ2UgLmltYWdlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgLm5vLWltZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGluaXRpYWw7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3N0YXRpYy9pbWFnZXMvY2FyZF9tZWRpYV9wbGF5ZXJfYmcucG5nXCIpO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMsIGJhY2tncm91bmQtY29sb3IgMC44cztcbiAgICAgIH1cblxuICAgICAgLm9mZiAuaW1hZ2UsXG4gICAgICAub2ZmIC5jb2xvci1ncmFkaWVudCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMHMsIHdpZHRoIDAuOHM7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAudW5hdmFpbGFibGUgLm5vLWltZyxcbiAgICAgIC5iYWNrZ3JvdW5kOm5vdCgub2ZmKTpub3QoLm5vLWltYWdlKSAubm8taW1nIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgLnBsYXllciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBwYWRkaW5nO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgICAgfVxuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICAuY29udHJvbHMge1xuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcsIGNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEycHg7XG4gICAgICB9XG5cbiAgICAgIC5jb250cm9scyA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5jb250cm9scyBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uW2FjdGlvbj1cIm1lZGlhX3BsYXlcIl0sXG4gICAgICBwYXBlci1pY29uLWJ1dHRvblthY3Rpb249XCJtZWRpYV9wbGF5X3BhdXNlXCJdLFxuICAgICAgcGFwZXItaWNvbi1idXR0b25bYWN0aW9uPVwidHVybl9vblwiXSxcbiAgICAgIHBhcGVyLWljb24tYnV0dG9uW2FjdGlvbj1cInR1cm5fb2ZmXCJdIHtcbiAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgIH1cblxuICAgICAgLnRvcC1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAuaWNvbi1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmljb24tbmFtZSBoYS1pY29uIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgfVxuXG4gICAgICAubW9yZS1pbmZvIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIH1cblxuICAgICAgLm1lZGlhLWluZm8ge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgaHVpLW1hcnF1ZWUge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBtYXJnaW46IDBweCAwIDRweDtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlLWNvbnRyb2xzIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLXByb2dyZXNzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtaGVpZ2h0LCA0cHgpO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFwZXItcHJvZ3Jlc3MtaGVpZ2h0LCA0cHgpIC8gMik7XG4gICAgICAgIC0tcGFwZXItcHJvZ3Jlc3MtY29udGFpbmVyLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7XG4gICAgICB9XG5cbiAgICAgIC5uby1pbWFnZSAuY29udHJvbHMge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICAub2ZmLmJhY2tncm91bmQge1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgIH1cblxuICAgICAgLm5hcnJvdyAuY29udHJvbHMsXG4gICAgICAubm8tcHJvZ3Jlc3MgLmNvbnRyb2xzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC5uYXJyb3cgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAubmFycm93IHBhcGVyLWljb24tYnV0dG9uW2FjdGlvbj1cIm1lZGlhX3BsYXlcIl0sXG4gICAgICAubmFycm93IHBhcGVyLWljb24tYnV0dG9uW2FjdGlvbj1cIm1lZGlhX3BsYXlfcGF1c2VcIl0sXG4gICAgICAubmFycm93IHBhcGVyLWljb24tYnV0dG9uW2FjdGlvbj1cInR1cm5fb25cIl0ge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgfVxuXG4gICAgICAubm8tcHJvZ3Jlc3MucGxheWVyOm5vdCgubm8tY29udHJvbHMpIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktbWVkaWEtY29udHJvbC1jYXJkXCI6IEh1aU1lZGlhQ29udHJvbENhcmQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGx1bWluYW5hY2UgfSBmcm9tIFwiLi9sdW1pbmFuYWNlXCI7XG5cbmV4cG9ydCBjb25zdCBjb250cmFzdCA9IChcbiAgcmdiMTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICByZ2IyOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cbik6IG51bWJlciA9PiB7XG4gIGNvbnN0IGx1bTEgPSBsdW1pbmFuYWNlKC4uLnJnYjEpO1xuICBjb25zdCBsdW0yID0gbHVtaW5hbmFjZSguLi5yZ2IyKTtcbiAgY29uc3QgYnJpZ2h0ZXN0ID0gTWF0aC5tYXgobHVtMSwgbHVtMik7XG4gIGNvbnN0IGRhcmtlc3QgPSBNYXRoLm1pbihsdW0xLCBsdW0yKTtcbiAgcmV0dXJuIChicmlnaHRlc3QgKyAwLjA1KSAvIChkYXJrZXN0ICsgMC4wNSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGx1bWluYW5hY2UgPSAocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IGEgPSBbciwgZywgYl0ubWFwKCh2KSA9PiB7XG4gICAgdiAvPSAyNTU7XG4gICAgcmV0dXJuIHYgPD0gMC4wMzkyOCA/IHYgLyAxMi45MiA6ICgodiArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQ7XG4gIH0pO1xuICByZXR1cm4gYVswXSAqIDAuMjEyNiArIGFbMV0gKiAwLjcxNTIgKyBhWzJdICogMC4wNzIyO1xufTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktbWFycXVlZVwiKVxuY2xhc3MgSHVpTWFycXVlZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdGV4dD86IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBhY3RpdmU/OiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogXCJhbmltYXRpbmdcIiB9KVxuICBwcml2YXRlIF9hbmltYXRpbmcgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHdjL25vLXNlbGYtY2xhc3NcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4gdGhpcy5jbGFzc0xpc3QuYWRkKFwiaG92ZXJpbmdcIiksIHtcbiAgICAgIC8vIENhcHR1cmUgYmVjYXVzZSB3ZSBuZWVkIHRvIHJ1biBiZWZvcmUgYSBwYXJlbnQgc2V0cyBhY3RpdmUgb24gdXMuXG4gICAgICAvLyBIb3ZlcmluZyB3aWxsIGRpc2FibGUgdGhlIG92ZXJmbG93LCBhbGxvd2luZyB1cyB0byBjYWxjIGlmIHdlIG92ZXJmbG93LlxuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgd2Mvbm8tc2VsZi1jbGFzc1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyaW5nXCIpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInRleHRcIikgJiYgdGhpcy5fYW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9hbmltYXRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJhY3RpdmVcIikgJiZcbiAgICAgIHRoaXMuYWN0aXZlICYmXG4gICAgICB0aGlzLm9mZnNldFdpZHRoIDwgdGhpcy5zY3JvbGxXaWR0aFxuICAgICkge1xuICAgICAgdGhpcy5fYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtYXJxdWVlLWlubmVyXCIgQGFuaW1hdGlvbml0ZXJhdGlvbj0ke3RoaXMuX29uSXRlcmF0aW9ufT5cbiAgICAgICAgPHNwYW4+JHt0aGlzLnRleHR9PC9zcGFuPlxuICAgICAgICAke3RoaXMuX2FuaW1hdGluZyA/IGh0bWxgIDxzcGFuPiR7dGhpcy50ZXh0fTwvc3Bhbj4gYCA6IFwiXCJ9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25JdGVyYXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5fYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICBjb250YWluOiBzdHJpY3Q7XG4gICAgICB9XG5cbiAgICAgIC5tYXJxdWVlLWlubmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5ob3ZlcmluZykgLm1hcnF1ZWUtaW5uZXIge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2FuaW1hdGluZ10pIC5tYXJxdWVlLWlubmVyIHtcbiAgICAgICAgbGVmdDogaW5pdGlhbDtcbiAgICAgICAgcmlnaHQ6IGluaXRpYWw7XG4gICAgICAgIGFuaW1hdGlvbjogbWFycXVlZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbYW5pbWF0aW5nXSkgLm1hcnF1ZWUtaW5uZXIgc3BhbiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbWFycXVlZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1tYXJxdWVlXCI6IEh1aU1hcnF1ZWU7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSw4a0JBQ0E7QUFFQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpREE7QUFDQTtBQWxEQTtBQUFBO0FBQUE7QUFBQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExREE7QUFBQTtBQUFBO0FBQUE7QUE2REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBcEZBO0FBQUE7QUFBQTtBQUFBO0FBdUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRkE7QUFBQTtBQUFBO0FBQUE7QUE4RkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUdBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7OztBQVFBO0FBQ0E7QUFEQTs7OztBQU1BO0FBQ0E7QUFEQTs7QUFJQTtBQUNBOzs7QUFLQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7Ozs7QUFJQTs7QUFFQTs7Ozs7OztBQVFBOzs7O0FBSUE7OztBQUtBO0FBQ0E7QUFEQTs7QUFNQTs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBSUE7QUFDQTs7QUFJQTs7QUFHQTtBQUNBO0FBQ0E7O0FBTEE7O0FBVUE7O0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFIQTtBQU9BOztBQUVBO0FBQ0E7OztBQW5IQTtBQXVIQTtBQW5RQTtBQUFBO0FBQUE7QUFBQTtBQXNRQTtBQUNBO0FBdlFBO0FBQUE7QUFBQTtBQUFBO0FBMFFBO0FBQ0E7QUEzUUE7QUFBQTtBQUFBO0FBQUE7QUE2UUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5VUE7QUFBQTtBQUFBO0FBQUE7QUFpVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBTUE7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFoYUE7QUFBQTtBQUFBO0FBQUE7QUFtYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBamJBO0FBQUE7QUFBQTtBQUFBO0FBb2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQW5jQTtBQUFBO0FBQUE7QUFBQTtBQXNjQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTdjQTtBQUFBO0FBQUE7QUFBQTtBQWdkQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFsZUE7QUFBQTtBQUFBO0FBQUE7QUFxZUE7QUFDQTtBQURBO0FBR0E7QUF4ZUE7QUFBQTtBQUFBO0FBQUE7QUEyZUE7QUFJQTtBQURBO0FBSUE7QUFsZkE7QUFBQTtBQUFBO0FBQUE7QUFxZkE7QUFDQTtBQUNBO0FBQ0E7QUF4ZkE7QUFBQTtBQUFBO0FBQUE7QUEyZkE7QUFDQTtBQTVmQTtBQUFBO0FBQUE7QUFBQTtBQStmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBaGhCQTtBQUFBO0FBQUE7QUFBQTtBQW1oQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRpQkE7QUFBQTtBQUFBO0FBQUE7QUF5aUJBO0FBQ0E7QUFDQTtBQUNBO0FBNWlCQTtBQUFBO0FBQUE7QUFBQTtBQStpQkE7QUFDQTtBQUNBO0FBQ0E7QUFsakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxakJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThMQTtBQW52QkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNwS0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQVdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUhBO0FBTUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlDQTs7O0FBbEdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
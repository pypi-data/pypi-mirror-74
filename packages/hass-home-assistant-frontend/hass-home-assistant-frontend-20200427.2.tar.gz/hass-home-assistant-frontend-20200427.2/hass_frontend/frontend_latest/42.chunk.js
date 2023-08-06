(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ }),

/***/ "./src/data/graph.ts":
/*!***************************!*\
  !*** ./src/data/graph.ts ***!
  \***************************/
/*! exports provided: strokeWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeWidth", function() { return strokeWidth; });
const strokeWidth = 5;

/***/ }),

/***/ "./src/panels/lovelace/common/graph/coordinates.ts":
/*!*********************************************************!*\
  !*** ./src/panels/lovelace/common/graph/coordinates.ts ***!
  \*********************************************************/
/*! exports provided: coordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordinates", function() { return coordinates; });
/* harmony import */ var _data_graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/graph */ "./src/data/graph.ts");


const average = items => {
  return items.reduce((sum, entry) => sum + parseFloat(entry.state), 0) / items.length;
};

const lastValue = items => {
  return parseFloat(items[items.length - 1].state) || 0;
};

const calcPoints = (history, hours, width, detail, min, max) => {
  const coords = [];
  const height = 80;
  let yRatio = (max - min) / height;
  yRatio = yRatio !== 0 ? yRatio : height;
  let xRatio = width / (hours - (detail === 1 ? 1 : 0));
  xRatio = isFinite(xRatio) ? xRatio : width;
  const first = history.filter(Boolean)[0];
  let last = [average(first), lastValue(first)];

  const getCoords = (item, i, offset = 0, depth = 1) => {
    if (depth > 1 && item) {
      return item.forEach((subItem, index) => getCoords(subItem, i, index, depth - 1));
    }

    const x = xRatio * (i + offset / 6);

    if (item) {
      last = [average(item), lastValue(item)];
    }

    const y = height + _data_graph__WEBPACK_IMPORTED_MODULE_0__["strokeWidth"] / 2 - ((item ? last[0] : last[1]) - min) / yRatio;
    return coords.push([x, y]);
  };

  for (let i = 0; i < history.length; i += 1) {
    getCoords(history[i], i, 0, detail);
  }

  if (coords.length === 1) {
    coords[1] = [width, coords[0][1]];
  }

  coords.push([width, coords[coords.length - 1][1]]);
  return coords;
};

const coordinates = (history, hours, width, detail) => {
  history.forEach(item => {
    item.state = Number(item.state);
  });
  history = history.filter(item => !Number.isNaN(item.state));
  const min = Math.min(...history.map(item => item.state));
  const max = Math.max(...history.map(item => item.state));
  const now = new Date().getTime();

  const reduce = (res, item, point) => {
    const age = now - new Date(item.last_changed).getTime();
    let key = Math.abs(age / (1000 * 3600) - hours);

    if (point) {
      key = (key - Math.floor(key)) * 60;
      key = Number((Math.round(key / 10) * 10).toString()[0]);
    } else {
      key = Math.floor(key);
    }

    if (!res[key]) {
      res[key] = [];
    }

    res[key].push(item);
    return res;
  };

  history = history.reduce((res, item) => reduce(res, item, false), []);

  if (detail > 1) {
    history = history.map(entry => entry.reduce((res, item) => reduce(res, item, true), []));
  }

  if (!history.length) {
    return undefined;
  }

  return calcPoints(history, hours, width, detail, min, max);
};

/***/ }),

/***/ "./src/panels/lovelace/common/graph/get-path.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/graph/get-path.ts ***!
  \******************************************************/
/*! exports provided: getPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPath", function() { return getPath; });
const midPoint = (_Ax, _Ay, _Bx, _By) => {
  const _Zx = (_Ax - _Bx) / 2 + _Bx;

  const _Zy = (_Ay - _By) / 2 + _By;

  return [_Zx, _Zy];
};

const getPath = coords => {
  if (!coords.length) {
    return "";
  }

  let next;
  let Z;
  const X = 0;
  const Y = 1;
  let path = "";
  let last = coords.filter(Boolean)[0];
  path += `M ${last[X]},${last[Y]}`;

  for (const coord of coords) {
    next = coord;
    Z = midPoint(last[X], last[Y], next[X], next[Y]);
    path += ` ${Z[X]},${Z[Y]}`;
    path += ` Q${next[X]},${next[Y]}`;
    last = next;
  }

  path += ` ${next[X]},${next[Y]}`;
  return path;
};

/***/ }),

/***/ "./src/panels/lovelace/components/hui-graph-base.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/components/hui-graph-base.ts ***!
  \**********************************************************/
/*! exports provided: HuiGraphBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiGraphBase", function() { return HuiGraphBase; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/graph */ "./src/data/graph.ts");
/* harmony import */ var _common_graph_get_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/graph/get-path */ "./src/panels/lovelace/common/graph/get-path.ts");
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




let HuiGraphBase = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-graph-base")], function (_initialize, _LitElement) {
  class HuiGraphBase extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiGraphBase,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "coordinates",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_path",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this._path ? lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`<svg width="100%" height="100%" viewBox="0 0 500 100">
          <g>
            <mask id="fill">
              <path
                class='fill'
                fill='white'
                d="${this._path} L 500, 100 L 0, 100 z"
              />
            </mask>
            <rect height="100%" width="100%" id="fill-rect" fill="var(--accent-color)" mask="url(#fill)"></rect>
            <mask id="line">
              <path
                fill="none"
                stroke="var(--accent-color)"
                stroke-width="${_data_graph__WEBPACK_IMPORTED_MODULE_1__["strokeWidth"]}"
                stroke-linecap="round"
                stroke-linejoin="round"
                d=${this._path}
              ></path>
            </mask>
            <rect height="100%" width="100%" id="rect" fill="var(--accent-color)" mask="url(#line)"></rect>
          </g>
        </svg>` : lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`<svg width="100%" height="100%" viewBox="0 0 500 100"></svg>`}
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (!this.coordinates) {
          return;
        }

        if (changedProps.has("coordinates")) {
          this._path = Object(_common_graph_get_path__WEBPACK_IMPORTED_MODULE_2__["getPath"])(this.coordinates);
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
        width: 100%;
      }
      .fill {
        opacity: 0.1;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/header-footer/hui-graph-header-footer.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/lovelace/header-footer/hui-graph-header-footer.ts ***!
  \**********************************************************************/
/*! exports provided: HuiGraphHeaderFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiGraphHeaderFooter", function() { return HuiGraphHeaderFooter; });
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/history */ "./src/data/history.ts");
/* harmony import */ var _common_graph_coordinates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/graph/coordinates */ "./src/panels/lovelace/common/graph/coordinates.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_graph_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-graph-base */ "./src/panels/lovelace/components/hui-graph-base.ts");
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







const MINUTE = 60000;
const DAY = 86400000;
let HuiGraphHeaderFooter = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-graph-header-footer")], function (_initialize, _LitElement) {
  class HuiGraphHeaderFooter extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiGraphHeaderFooter,
    d: [{
      kind: "method",
      static: true,
      key: "getStubConfig",
      value: function getStubConfig() {
        return {};
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_coordinates",
      value: void 0
    }, {
      kind: "field",
      key: "_date",
      value: void 0
    }, {
      kind: "field",
      key: "_stateHistory",
      value: void 0
    }, {
      kind: "field",
      key: "_fetching",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!(config === null || config === void 0 ? void 0 : config.entity) || config.entity.split(".")[0] !== "sensor") {
          throw new Error("Invalid Configuration: An entity from within the sensor domain required");
        }

        const cardConfig = Object.assign({
          detail: 1,
          hours_to_show: 24
        }, config);
        cardConfig.hours_to_show = Number(cardConfig.hours_to_show);
        cardConfig.detail = cardConfig.detail === 1 || cardConfig.detail === 2 ? cardConfig.detail : 1;
        this._config = cardConfig;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        if (!this._coordinates) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        <div class="container">
          <paper-spinner active></paper-spinner>
        </div>
      `;
        }

        if (this._coordinates.length < 1) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        <div class="container">
          <div class="info">
            No state history found.
          </div>
        </div>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <hui-graph-base .coordinates=${this._coordinates}></hui-graph-base>
    `;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_4__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (!this._config || !this.hass || this._fetching && !changedProps.has("_config")) {
          return;
        }

        if (changedProps.has("_config")) {
          const oldConfig = changedProps.get("_config");

          if (!oldConfig || oldConfig.entity !== this._config.entity) {
            this._stateHistory = [];
          }

          this._getCoordinates();
        } else if (Date.now() - this._date.getTime() >= MINUTE) {
          this._getCoordinates();
        }
      }
    }, {
      kind: "method",
      key: "_getCoordinates",
      value: async function _getCoordinates() {
        var _this$_stateHistory;

        this._fetching = true;
        const endTime = new Date();
        const startTime = !this._date || !((_this$_stateHistory = this._stateHistory) === null || _this$_stateHistory === void 0 ? void 0 : _this$_stateHistory.length) ? new Date(new Date().setHours(endTime.getHours() - this._config.hours_to_show)) : this._date;

        if (this._stateHistory.length) {
          this._stateHistory = this._stateHistory.filter(entity => endTime.getTime() - new Date(entity.last_changed).getTime() <= DAY);
        }

        const stateHistory = await Object(_data_history__WEBPACK_IMPORTED_MODULE_2__["fetchRecent"])(this.hass, this._config.entity, startTime, endTime, Boolean(this._stateHistory.length));

        if (stateHistory.length && stateHistory[0].length) {
          this._stateHistory.push(...stateHistory[0]);
        }

        this._coordinates = Object(_common_graph_coordinates__WEBPACK_IMPORTED_MODULE_3__["coordinates"])(this._stateHistory, this._config.hours_to_show, 500, this._config.detail);
        this._date = endTime;
        this._fetching = false;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      paper-spinner {
        position: absolute;
        top: calc(50% - 28px);
      }
      .container {
        display: flex;
        justify-content: center;
        position: relative;
        padding-bottom: 20%;
      }
      .info {
        position: absolute;
        top: calc(50% - 16px);
        color: var(--secondary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2dyYXBoLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2dyYXBoL2Nvb3JkaW5hdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2dyYXBoL2dldC1wYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tcG9uZW50cy9odWktZ3JhcGgtYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2hlYWRlci1mb290ZXIvaHVpLWdyYXBoLWhlYWRlci1mb290ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXNwaW5uZXItc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlclNwaW5uZXJCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+PC9zdHlsZT5cblxuICA8ZGl2IGlkPVwic3Bpbm5lckNvbnRhaW5lclwiIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCIgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIG11bHRpcGxlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBjeWNsZXMgYmV0d2VlbiBmb3VyIGxheWVycyBvZiBjb2xvcnM7IGJ5IGRlZmF1bHQgdGhleSBhcmVcbmJsdWUsIHJlZCwgeWVsbG93IGFuZCBncmVlbi4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gY3ljbGUgYmV0d2VlbiBmb3VyXG5kaWZmZXJlbnQgY29sb3JzLiBVc2UgPHBhcGVyLXNwaW5uZXItbGl0ZT4gZm9yIHNpbmdsZSBjb2xvciBzcGlubmVycy5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZmlyc3Qgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc2Vjb25kIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtcmVkLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcmAgfCBDb2xvciBvZiB0aGUgdGhpcmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS15ZWxsb3ctNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmb3VydGggc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lclxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lcicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiIsImV4cG9ydCBjb25zdCBzdHJva2VXaWR0aCA9IDU7XG4iLCJpbXBvcnQgeyBzdHJva2VXaWR0aCB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2dyYXBoXCI7XG5cbmNvbnN0IGF2ZXJhZ2UgPSAoaXRlbXM6IGFueVtdKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIChcbiAgICBpdGVtcy5yZWR1Y2UoKHN1bSwgZW50cnkpID0+IHN1bSArIHBhcnNlRmxvYXQoZW50cnkuc3RhdGUpLCAwKSAvXG4gICAgaXRlbXMubGVuZ3RoXG4gICk7XG59O1xuXG5jb25zdCBsYXN0VmFsdWUgPSAoaXRlbXM6IGFueVtdKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uc3RhdGUpIHx8IDA7XG59O1xuXG5jb25zdCBjYWxjUG9pbnRzID0gKFxuICBoaXN0b3J5OiBhbnksXG4gIGhvdXJzOiBudW1iZXIsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGRldGFpbDogbnVtYmVyLFxuICBtaW46IG51bWJlcixcbiAgbWF4OiBudW1iZXJcbik6IG51bWJlcltdW10gPT4ge1xuICBjb25zdCBjb29yZHMgPSBbXSBhcyBudW1iZXJbXVtdO1xuICBjb25zdCBoZWlnaHQgPSA4MDtcbiAgbGV0IHlSYXRpbyA9IChtYXggLSBtaW4pIC8gaGVpZ2h0O1xuICB5UmF0aW8gPSB5UmF0aW8gIT09IDAgPyB5UmF0aW8gOiBoZWlnaHQ7XG4gIGxldCB4UmF0aW8gPSB3aWR0aCAvIChob3VycyAtIChkZXRhaWwgPT09IDEgPyAxIDogMCkpO1xuICB4UmF0aW8gPSBpc0Zpbml0ZSh4UmF0aW8pID8geFJhdGlvIDogd2lkdGg7XG5cbiAgY29uc3QgZmlyc3QgPSBoaXN0b3J5LmZpbHRlcihCb29sZWFuKVswXTtcbiAgbGV0IGxhc3QgPSBbYXZlcmFnZShmaXJzdCksIGxhc3RWYWx1ZShmaXJzdCldO1xuXG4gIGNvbnN0IGdldENvb3JkcyA9IChpdGVtOiBhbnlbXSwgaTogbnVtYmVyLCBvZmZzZXQgPSAwLCBkZXB0aCA9IDEpID0+IHtcbiAgICBpZiAoZGVwdGggPiAxICYmIGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmZvckVhY2goKHN1Ykl0ZW0sIGluZGV4KSA9PlxuICAgICAgICBnZXRDb29yZHMoc3ViSXRlbSwgaSwgaW5kZXgsIGRlcHRoIC0gMSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgeCA9IHhSYXRpbyAqIChpICsgb2Zmc2V0IC8gNik7XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgbGFzdCA9IFthdmVyYWdlKGl0ZW0pLCBsYXN0VmFsdWUoaXRlbSldO1xuICAgIH1cbiAgICBjb25zdCB5ID1cbiAgICAgIGhlaWdodCArIHN0cm9rZVdpZHRoIC8gMiAtICgoaXRlbSA/IGxhc3RbMF0gOiBsYXN0WzFdKSAtIG1pbikgLyB5UmF0aW87XG4gICAgcmV0dXJuIGNvb3Jkcy5wdXNoKFt4LCB5XSk7XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXN0b3J5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZ2V0Q29vcmRzKGhpc3RvcnlbaV0sIGksIDAsIGRldGFpbCk7XG4gIH1cblxuICBpZiAoY29vcmRzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvb3Jkc1sxXSA9IFt3aWR0aCwgY29vcmRzWzBdWzFdXTtcbiAgfVxuXG4gIGNvb3Jkcy5wdXNoKFt3aWR0aCwgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXVsxXV0pO1xuICByZXR1cm4gY29vcmRzO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvb3JkaW5hdGVzID0gKFxuICBoaXN0b3J5OiBhbnksXG4gIGhvdXJzOiBudW1iZXIsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGRldGFpbDogbnVtYmVyXG4pOiBudW1iZXJbXVtdIHwgdW5kZWZpbmVkID0+IHtcbiAgaGlzdG9yeS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5zdGF0ZSA9IE51bWJlcihpdGVtLnN0YXRlKTtcbiAgfSk7XG4gIGhpc3RvcnkgPSBoaXN0b3J5LmZpbHRlcigoaXRlbSkgPT4gIU51bWJlci5pc05hTihpdGVtLnN0YXRlKSk7XG5cbiAgY29uc3QgbWluID0gTWF0aC5taW4oLi4uaGlzdG9yeS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3RhdGUpKTtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uaGlzdG9yeS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3RhdGUpKTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgY29uc3QgcmVkdWNlID0gKHJlcywgaXRlbSwgcG9pbnQpID0+IHtcbiAgICBjb25zdCBhZ2UgPSBub3cgLSBuZXcgRGF0ZShpdGVtLmxhc3RfY2hhbmdlZCkuZ2V0VGltZSgpO1xuXG4gICAgbGV0IGtleSA9IE1hdGguYWJzKGFnZSAvICgxMDAwICogMzYwMCkgLSBob3Vycyk7XG4gICAgaWYgKHBvaW50KSB7XG4gICAgICBrZXkgPSAoa2V5IC0gTWF0aC5mbG9vcihrZXkpKSAqIDYwO1xuICAgICAga2V5ID0gTnVtYmVyKChNYXRoLnJvdW5kKGtleSAvIDEwKSAqIDEwKS50b1N0cmluZygpWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gTWF0aC5mbG9vcihrZXkpO1xuICAgIH1cbiAgICBpZiAoIXJlc1trZXldKSB7XG4gICAgICByZXNba2V5XSA9IFtdO1xuICAgIH1cbiAgICByZXNba2V5XS5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgaGlzdG9yeSA9IGhpc3RvcnkucmVkdWNlKChyZXMsIGl0ZW0pID0+IHJlZHVjZShyZXMsIGl0ZW0sIGZhbHNlKSwgW10pO1xuICBpZiAoZGV0YWlsID4gMSkge1xuICAgIGhpc3RvcnkgPSBoaXN0b3J5Lm1hcCgoZW50cnkpID0+XG4gICAgICBlbnRyeS5yZWR1Y2UoKHJlcywgaXRlbSkgPT4gcmVkdWNlKHJlcywgaXRlbSwgdHJ1ZSksIFtdKVxuICAgICk7XG4gIH1cblxuICBpZiAoIWhpc3RvcnkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBjYWxjUG9pbnRzKGhpc3RvcnksIGhvdXJzLCB3aWR0aCwgZGV0YWlsLCBtaW4sIG1heCk7XG59O1xuIiwiY29uc3QgbWlkUG9pbnQgPSAoXG4gIF9BeDogbnVtYmVyLFxuICBfQXk6IG51bWJlcixcbiAgX0J4OiBudW1iZXIsXG4gIF9CeTogbnVtYmVyXG4pOiBudW1iZXJbXSA9PiB7XG4gIGNvbnN0IF9aeCA9IChfQXggLSBfQngpIC8gMiArIF9CeDtcbiAgY29uc3QgX1p5ID0gKF9BeSAtIF9CeSkgLyAyICsgX0J5O1xuICByZXR1cm4gW19aeCwgX1p5XTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYXRoID0gKGNvb3JkczogbnVtYmVyW11bXSk6IHN0cmluZyA9PiB7XG4gIGlmICghY29vcmRzLmxlbmd0aCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgbGV0IG5leHQ6IG51bWJlcltdO1xuICBsZXQgWjogbnVtYmVyW107XG4gIGNvbnN0IFggPSAwO1xuICBjb25zdCBZID0gMTtcbiAgbGV0IHBhdGggPSBcIlwiO1xuICBsZXQgbGFzdCA9IGNvb3Jkcy5maWx0ZXIoQm9vbGVhbilbMF07XG5cbiAgcGF0aCArPSBgTSAke2xhc3RbWF19LCR7bGFzdFtZXX1gO1xuXG4gIGZvciAoY29uc3QgY29vcmQgb2YgY29vcmRzKSB7XG4gICAgbmV4dCA9IGNvb3JkO1xuICAgIFogPSBtaWRQb2ludChsYXN0W1hdLCBsYXN0W1ldLCBuZXh0W1hdLCBuZXh0W1ldKTtcbiAgICBwYXRoICs9IGAgJHtaW1hdfSwke1pbWV19YDtcbiAgICBwYXRoICs9IGAgUSR7bmV4dFtYXX0sJHtuZXh0W1ldfWA7XG4gICAgbGFzdCA9IG5leHQ7XG4gIH1cblxuICBwYXRoICs9IGAgJHtuZXh0IVtYXX0sJHtuZXh0IVtZXX1gO1xuICByZXR1cm4gcGF0aDtcbn07XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBzdmcsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IHN0cm9rZVdpZHRoIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZ3JhcGhcIjtcbmltcG9ydCB7IGdldFBhdGggfSBmcm9tIFwiLi4vY29tbW9uL2dyYXBoL2dldC1wYXRoXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWdyYXBoLWJhc2VcIilcbmV4cG9ydCBjbGFzcyBIdWlHcmFwaEJhc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvb3JkaW5hdGVzPzogYW55O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhdGg/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuX3BhdGhcbiAgICAgICAgPyBzdmdgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA1MDAgMTAwXCI+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8bWFzayBpZD1cImZpbGxcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBjbGFzcz0nZmlsbCdcbiAgICAgICAgICAgICAgICBmaWxsPSd3aGl0ZSdcbiAgICAgICAgICAgICAgICBkPVwiJHt0aGlzLl9wYXRofSBMIDUwMCwgMTAwIEwgMCwgMTAwIHpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9tYXNrPlxuICAgICAgICAgICAgPHJlY3QgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIGlkPVwiZmlsbC1yZWN0XCIgZmlsbD1cInZhcigtLWFjY2VudC1jb2xvcilcIiBtYXNrPVwidXJsKCNmaWxsKVwiPjwvcmVjdD5cbiAgICAgICAgICAgIDxtYXNrIGlkPVwibGluZVwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJ2YXIoLS1hY2NlbnQtY29sb3IpXCJcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIke3N0cm9rZVdpZHRofVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9JHt0aGlzLl9wYXRofVxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9tYXNrPlxuICAgICAgICAgICAgPHJlY3QgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIGlkPVwicmVjdFwiIGZpbGw9XCJ2YXIoLS1hY2NlbnQtY29sb3IpXCIgbWFzaz1cInVybCgjbGluZSlcIj48L3JlY3Q+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5gXG4gICAgICAgIDogc3ZnYDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNTAwIDEwMFwiPjwvc3ZnPmB9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuY29vcmRpbmF0ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNvb3JkaW5hdGVzXCIpKSB7XG4gICAgICB0aGlzLl9wYXRoID0gZ2V0UGF0aCh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmZpbGwge1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWdyYXBoLWJhc2VcIjogSHVpR3JhcGhCYXNlO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmZXRjaFJlY2VudCB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2hpc3RvcnlcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvb3JkaW5hdGVzIH0gZnJvbSBcIi4uL2NvbW1vbi9ncmFwaC9jb29yZGluYXRlc1wiO1xuaW1wb3J0IHsgaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtY2hhbmdlZFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktZ3JhcGgtYmFzZVwiO1xuaW1wb3J0IHsgTG92ZWxhY2VIZWFkZXJGb290ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEdyYXBoSGVhZGVyRm9vdGVyQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgTUlOVVRFID0gNjAwMDA7XG5jb25zdCBEQVkgPSA4NjQwMDAwMDtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktZ3JhcGgtaGVhZGVyLWZvb3RlclwiKVxuZXhwb3J0IGNsYXNzIEh1aUdyYXBoSGVhZGVyRm9vdGVyIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIExvdmVsYWNlSGVhZGVyRm9vdGVyIHtcbiAgcHVibGljIHN0YXRpYyBnZXRTdHViQ29uZmlnKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBfY29uZmlnPzogR3JhcGhIZWFkZXJGb290ZXJDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29vcmRpbmF0ZXM/OiBudW1iZXJbXVtdO1xuXG4gIHByaXZhdGUgX2RhdGU/OiBEYXRlO1xuXG4gIHByaXZhdGUgX3N0YXRlSGlzdG9yeT86IEhhc3NFbnRpdHlbXTtcblxuICBwcml2YXRlIF9mZXRjaGluZyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBHcmFwaEhlYWRlckZvb3RlckNvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnPy5lbnRpdHkgfHwgY29uZmlnLmVudGl0eS5zcGxpdChcIi5cIilbMF0gIT09IFwic2Vuc29yXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246IEFuIGVudGl0eSBmcm9tIHdpdGhpbiB0aGUgc2Vuc29yIGRvbWFpbiByZXF1aXJlZFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRDb25maWcgPSB7XG4gICAgICBkZXRhaWw6IDEsXG4gICAgICBob3Vyc190b19zaG93OiAyNCxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuXG4gICAgY2FyZENvbmZpZy5ob3Vyc190b19zaG93ID0gTnVtYmVyKGNhcmRDb25maWcuaG91cnNfdG9fc2hvdyk7XG4gICAgY2FyZENvbmZpZy5kZXRhaWwgPVxuICAgICAgY2FyZENvbmZpZy5kZXRhaWwgPT09IDEgfHwgY2FyZENvbmZpZy5kZXRhaWwgPT09IDJcbiAgICAgICAgPyBjYXJkQ29uZmlnLmRldGFpbFxuICAgICAgICA6IDE7XG5cbiAgICB0aGlzLl9jb25maWcgPSBjYXJkQ29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2Nvb3JkaW5hdGVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgTm8gc3RhdGUgaGlzdG9yeSBmb3VuZC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGh1aS1ncmFwaC1iYXNlIC5jb29yZGluYXRlcz0ke3RoaXMuX2Nvb3JkaW5hdGVzfT48L2h1aS1ncmFwaC1iYXNlPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkKHRoaXMsIGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuX2NvbmZpZyB8fFxuICAgICAgIXRoaXMuaGFzcyB8fFxuICAgICAgKHRoaXMuX2ZldGNoaW5nICYmICFjaGFuZ2VkUHJvcHMuaGFzKFwiX2NvbmZpZ1wiKSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl9jb25maWdcIikpIHtcbiAgICAgIGNvbnN0IG9sZENvbmZpZyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJfY29uZmlnXCIpIGFzIEdyYXBoSGVhZGVyRm9vdGVyQ29uZmlnO1xuICAgICAgaWYgKCFvbGRDb25maWcgfHwgb2xkQ29uZmlnLmVudGl0eSAhPT0gdGhpcy5fY29uZmlnLmVudGl0eSkge1xuICAgICAgICB0aGlzLl9zdGF0ZUhpc3RvcnkgPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2UgaWYgKERhdGUubm93KCkgLSB0aGlzLl9kYXRlIS5nZXRUaW1lKCkgPj0gTUlOVVRFKSB7XG4gICAgICB0aGlzLl9nZXRDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldENvb3JkaW5hdGVzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2ZldGNoaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBzdGFydFRpbWUgPVxuICAgICAgIXRoaXMuX2RhdGUgfHwgIXRoaXMuX3N0YXRlSGlzdG9yeT8ubGVuZ3RoXG4gICAgICAgID8gbmV3IERhdGUoXG4gICAgICAgICAgICBuZXcgRGF0ZSgpLnNldEhvdXJzKFxuICAgICAgICAgICAgICBlbmRUaW1lLmdldEhvdXJzKCkgLSB0aGlzLl9jb25maWchLmhvdXJzX3RvX3Nob3chXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICA6IHRoaXMuX2RhdGU7XG5cbiAgICBpZiAodGhpcy5fc3RhdGVIaXN0b3J5IS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N0YXRlSGlzdG9yeSA9IHRoaXMuX3N0YXRlSGlzdG9yeSEuZmlsdGVyKFxuICAgICAgICAoZW50aXR5KSA9PlxuICAgICAgICAgIGVuZFRpbWUuZ2V0VGltZSgpIC0gbmV3IERhdGUoZW50aXR5Lmxhc3RfY2hhbmdlZCkuZ2V0VGltZSgpIDw9IERBWVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZUhpc3RvcnkgPSBhd2FpdCBmZXRjaFJlY2VudChcbiAgICAgIHRoaXMuaGFzcyEsXG4gICAgICB0aGlzLl9jb25maWchLmVudGl0eSxcbiAgICAgIHN0YXJ0VGltZSxcbiAgICAgIGVuZFRpbWUsXG4gICAgICBCb29sZWFuKHRoaXMuX3N0YXRlSGlzdG9yeSEubGVuZ3RoKVxuICAgICk7XG5cbiAgICBpZiAoc3RhdGVIaXN0b3J5Lmxlbmd0aCAmJiBzdGF0ZUhpc3RvcnlbMF0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdGF0ZUhpc3RvcnkhLnB1c2goLi4uc3RhdGVIaXN0b3J5WzBdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzKFxuICAgICAgdGhpcy5fc3RhdGVIaXN0b3J5LFxuICAgICAgdGhpcy5fY29uZmlnIS5ob3Vyc190b19zaG93ISxcbiAgICAgIDUwMCxcbiAgICAgIHRoaXMuX2NvbmZpZyEuZGV0YWlsIVxuICAgICk7XG5cbiAgICB0aGlzLl9kYXRlID0gZW5kVGltZTtcbiAgICB0aGlzLl9mZXRjaGluZyA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDI4cHgpO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMCU7XG4gICAgICB9XG4gICAgICAuaW5mbyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE2cHgpO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1ncmFwaC1oZWFkZXItZm9vdGVyXCI6IEh1aUdyYXBoSGVhZGVyRm9vdGVyO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBO0FBRUE7QUFFQTtBQUxBOzs7Ozs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQVdBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTs7Ozs7O0FBT0E7Ozs7Ozs7O0FBUUE7OztBQUdBOzs7OztBQWxCQTtBQURBO0FBMkJBO0FBakNBO0FBQUE7QUFBQTtBQUFBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThDQTs7Ozs7Ozs7QUFBQTtBQVNBO0FBdkRBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRUE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBdENBO0FBQUE7QUFBQTtBQUFBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBbEVBO0FBQUE7QUFBQTtBQUFBO0FBcUVBO0FBQ0E7QUF0RUE7QUFBQTtBQUFBO0FBQUE7QUF5RUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRkE7QUFBQTtBQUFBO0FBQUE7QUE2RkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQXJJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0lBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQkE7QUF6SkE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
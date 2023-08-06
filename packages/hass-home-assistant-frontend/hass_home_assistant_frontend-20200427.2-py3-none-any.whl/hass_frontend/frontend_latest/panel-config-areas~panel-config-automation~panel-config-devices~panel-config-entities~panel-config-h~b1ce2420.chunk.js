(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-areas~panel-config-automation~panel-config-devices~panel-config-entities~panel-config-h~b1ce2420"],{

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/*! exports provided: afterNextRender, nextRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterNextRender", function() { return afterNextRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRender", function() { return nextRender; });
const afterNextRender = cb => {
  requestAnimationFrame(() => setTimeout(cb, 0));
};
const nextRender = () => {
  return new Promise(resolve => {
    afterNextRender(resolve);
  });
};

/***/ }),

/***/ "./src/layouts/hass-tabs-subpage-data-table.ts":
/*!*****************************************************!*\
  !*** ./src/layouts/hass-tabs-subpage-data-table.ts ***!
  \*****************************************************/
/*! exports provided: HaTabsSubpageDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaTabsSubpageDataTable", function() { return HaTabsSubpageDataTable; });
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _hass_tabs_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hass-tabs-subpage */ "./src/layouts/hass-tabs-subpage.ts");
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







let HaTabsSubpageDataTable = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("hass-tabs-subpage-data-table")], function (_initialize, _LitElement) {
  class HaTabsSubpageDataTable extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaTabsSubpageDataTable,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: Object
      })],
      key: "columns",

      value() {
        return {};
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: Array
      })],
      key: "data",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: Boolean
      })],
      key: "selectable",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: Boolean
      })],
      key: "hasFab",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: String
      })],
      key: "id",

      value() {
        return "id";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: String
      })],
      key: "filter",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: Array
      })],
      key: "activeFilters",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: String,
        attribute: "back-path"
      })],
      key: "backPath",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "backCallback",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({
        type: String
      })],
      key: "noDataText",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "tabs",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["query"])("ha-data-table")],
      key: "_dataTable",
      value: void 0
    }, {
      kind: "method",
      key: "clearSelection",
      value:
      /**
       * Object with the columns.
       * @type {Object}
       */

      /**
       * Data to show in the table.
       * @type {Array}
       */

      /**
       * Should rows be selectable.
       * @type {Boolean}
       */

      /**
       * Do we need to add padding for a fab.
       * @type {Boolean}
       */

      /**
       * Field with a unique id per entry in data.
       * @type {String}
       */

      /**
       * String to filter the data in the data table on.
       * @type {String}
       */

      /**
       * List of strings that show what the data is currently filtered by.
       * @type {Array}
       */

      /**
       * What path to use when the back button is pressed.
       * @type {String}
       * @attr back-path
       */

      /**
       * Function to call when the back button is pressed.
       * @type {() => void}
       */

      /**
       * String to show when there are no records in the data table.
       * @type {String}
       */

      /**
       * Array of tabs to show on the page.
       * @type {Array}
       */
      function clearSelection() {
        this._dataTable.clearSelection();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <hass-tabs-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .backPath=${this.backPath}
        .backCallback=${this.backCallback}
        .route=${this.route}
        .tabs=${this.tabs}
      >
        <div slot="toolbar-icon"><slot name="toolbar-icon"></slot></div>
        ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <div slot="header">
                <slot name="header">
                  <div class="search-toolbar">
                    <search-input
                      .filter=${this.filter}
                      class="header"
                      no-label-float
                      no-underline
                      @value-changed=${this._handleSearchChange}
                    ></search-input>
                    ${this.activeFilters ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`<div class="active-filters">
                          <div>
                            <ha-icon icon="hass:filter-variant"></ha-icon>
                            <paper-tooltip position="left">
                              ${this.hass.localize("ui.panel.config.filtering.filtering_by")}
                              ${this.activeFilters.join(", ")}
                            </paper-tooltip>
                          </div>
                          <mwc-button @click=${this._clearFilter}
                            >${this.hass.localize("ui.panel.config.filtering.clear")}</mwc-button
                          >
                        </div>` : ""}
                  </div>
                </slot>
              </div>
            ` : ""}
        <ha-data-table
          .columns=${this.columns}
          .data=${this.data}
          .filter=${this.filter}
          .selectable=${this.selectable}
          .hasFab=${this.hasFab}
          .id=${this.id}
          .noDataText=${this.noDataText}
        >
          ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                <div slot="header">
                  <slot name="header">
                    <slot name="header">
                      <div class="table-header">
                        <search-input
                          .filter=${this.filter}
                          no-label-float
                          no-underline
                          @value-changed=${this._handleSearchChange}
                        >
                        </search-input>
                        ${this.activeFilters ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`<div class="active-filters">
                              ${this.hass.localize("ui.panel.config.filtering.filtering_by")}
                              ${this.activeFilters.join(", ")}
                              <mwc-button @click=${this._clearFilter}
                                >${this.hass.localize("ui.panel.config.filtering.clear")}</mwc-button
                              >
                            </div>` : ""}
                      </div></slot
                    ></slot
                  >
                </div>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]` <div slot="header"></div> `}
        </ha-data-table>
      </hass-tabs-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_handleSearchChange",
      value: function _handleSearchChange(ev) {
        this.filter = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_clearFilter",
      value: function _clearFilter() {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_3__["navigate"])(this, window.location.pathname);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      ha-data-table {
        width: 100%;
        height: 100%;
        --data-table-border-width: 0;
      }
      :host(:not([narrow])) ha-data-table {
        height: calc(100vh - 65px);
        display: block;
      }
      .table-header {
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
        padding: 0 16px;
        display: flex;
        align-items: center;
      }
      .search-toolbar {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
        padding: 0 16px;
      }
      search-input {
        position: relative;
        top: 2px;
        flex-grow: 1;
      }
      search-input.header {
        left: -8px;
        top: -7px;
      }
      .active-filters {
        color: var(--primary-text-color);
        position: relative;
        display: flex;
        align-items: center;
        padding: 2px 2px 2px 8px;
        margin-left: 4px;
        font-size: 14px;
      }
      .active-filters ha-icon {
        color: var(--primary-color);
      }
      .active-filters mwc-button {
        margin-left: 8px;
      }
      .active-filters::before {
        background-color: var(--primary-color);
        opacity: 0.12;
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: "";
      }
      .search-toolbar .active-filters {
        top: -8px;
        right: -16px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWFyZWFzfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLWNvbmZpZy1kZXZpY2VzfnBhbmVsLWNvbmZpZy1lbnRpdGllc35wYW5lbC1jb25maWctaH5iMWNlMjQyMC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9yZW5kZXItc3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlLWRhdGEtdGFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFmdGVyTmV4dFJlbmRlciA9IChjYjogKCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gc2V0VGltZW91dChjYiwgMCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IG5leHRSZW5kZXIgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGFmdGVyTmV4dFJlbmRlcihyZXNvbHZlKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgdHlwZSB7XG4gIERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lcixcbiAgRGF0YVRhYmxlUm93RGF0YSxcbiAgSGFEYXRhVGFibGUsXG59IGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50LCBSb3V0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9oYXNzLXRhYnMtc3VicGFnZVwiO1xuaW1wb3J0IHR5cGUgeyBQYWdlTmF2aWdhdGlvbiB9IGZyb20gXCIuL2hhc3MtdGFicy1zdWJwYWdlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGFzcy10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZVwiKVxuZXhwb3J0IGNsYXNzIEhhVGFic1N1YnBhZ2VEYXRhVGFibGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE9iamVjdCB3aXRoIHRoZSBjb2x1bW5zLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pIHB1YmxpYyBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSB7fTtcblxuICAvKipcbiAgICogRGF0YSB0byBzaG93IGluIHRoZSB0YWJsZS5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSkgcHVibGljIGRhdGE6IERhdGFUYWJsZVJvd0RhdGFbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgcm93cyBiZSBzZWxlY3RhYmxlLlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogRG8gd2UgbmVlZCB0byBhZGQgcGFkZGluZyBmb3IgYSBmYWIuXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgaGFzRmFiID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEZpZWxkIHdpdGggYSB1bmlxdWUgaWQgcGVyIGVudHJ5IGluIGRhdGEuXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSkgcHVibGljIGlkID0gXCJpZFwiO1xuXG4gIC8qKlxuICAgKiBTdHJpbmcgdG8gZmlsdGVyIHRoZSBkYXRhIGluIHRoZSBkYXRhIHRhYmxlIG9uLlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pIHB1YmxpYyBmaWx0ZXIgPSBcIlwiO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHN0cmluZ3MgdGhhdCBzaG93IHdoYXQgdGhlIGRhdGEgaXMgY3VycmVudGx5IGZpbHRlcmVkIGJ5LlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KSBwdWJsaWMgYWN0aXZlRmlsdGVycz87XG5cbiAgLyoqXG4gICAqIFdoYXQgcGF0aCB0byB1c2Ugd2hlbiB0aGUgYmFjayBidXR0b24gaXMgcHJlc3NlZC5cbiAgICogQHR5cGUge1N0cmluZ31cbiAgICogQGF0dHIgYmFjay1wYXRoXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJiYWNrLXBhdGhcIiB9KSBwdWJsaWMgYmFja1BhdGg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgYmFjayBidXR0b24gaXMgcHJlc3NlZC5cbiAgICogQHR5cGUgeygpID0+IHZvaWR9XG4gICAqL1xuICBAcHJvcGVydHkoKSBwdWJsaWMgYmFja0NhbGxiYWNrPzogKCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogU3RyaW5nIHRvIHNob3cgd2hlbiB0aGVyZSBhcmUgbm8gcmVjb3JkcyBpbiB0aGUgZGF0YSB0YWJsZS5cbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwdWJsaWMgbm9EYXRhVGV4dD86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICAvKipcbiAgICogQXJyYXkgb2YgdGFicyB0byBzaG93IG9uIHRoZSBwYWdlLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdGFicyE6IFBhZ2VOYXZpZ2F0aW9uW107XG5cbiAgQHF1ZXJ5KFwiaGEtZGF0YS10YWJsZVwiKSBwcml2YXRlIF9kYXRhVGFibGUhOiBIYURhdGFUYWJsZTtcblxuICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5fZGF0YVRhYmxlLmNsZWFyU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXRhYnMtc3VicGFnZVxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAuYmFja1BhdGg9JHt0aGlzLmJhY2tQYXRofVxuICAgICAgICAuYmFja0NhbGxiYWNrPSR7dGhpcy5iYWNrQ2FsbGJhY2t9XG4gICAgICAgIC5yb3V0ZT0ke3RoaXMucm91dGV9XG4gICAgICAgIC50YWJzPSR7dGhpcy50YWJzfVxuICAgICAgPlxuICAgICAgICA8ZGl2IHNsb3Q9XCJ0b29sYmFyLWljb25cIj48c2xvdCBuYW1lPVwidG9vbGJhci1pY29uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICAke3RoaXMubmFycm93XG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlYXJjaC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXI9JHt0aGlzLmZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgbm8tbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgICAgICBuby11bmRlcmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgPjwvc2VhcmNoLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuYWN0aXZlRmlsdGVyc1xuICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGA8ZGl2IGNsYXNzPVwiYWN0aXZlLWZpbHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvbiBpY29uPVwiaGFzczpmaWx0ZXItdmFyaWFudFwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5maWx0ZXJpbmcuZmlsdGVyaW5nX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuYWN0aXZlRmlsdGVycy5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fY2xlYXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZmlsdGVyaW5nLmNsZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxoYS1kYXRhLXRhYmxlXG4gICAgICAgICAgLmNvbHVtbnM9JHt0aGlzLmNvbHVtbnN9XG4gICAgICAgICAgLmRhdGE9JHt0aGlzLmRhdGF9XG4gICAgICAgICAgLmZpbHRlcj0ke3RoaXMuZmlsdGVyfVxuICAgICAgICAgIC5zZWxlY3RhYmxlPSR7dGhpcy5zZWxlY3RhYmxlfVxuICAgICAgICAgIC5oYXNGYWI9JHt0aGlzLmhhc0ZhYn1cbiAgICAgICAgICAuaWQ9JHt0aGlzLmlkfVxuICAgICAgICAgIC5ub0RhdGFUZXh0PSR7dGhpcy5ub0RhdGFUZXh0fVxuICAgICAgICA+XG4gICAgICAgICAgJHshdGhpcy5uYXJyb3dcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWFyY2gtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcj0ke3RoaXMuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuby1sYWJlbC1mbG9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuby11bmRlcmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlYXJjaC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5hY3RpdmVGaWx0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGA8ZGl2IGNsYXNzPVwiYWN0aXZlLWZpbHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5maWx0ZXJpbmcuZmlsdGVyaW5nX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuYWN0aXZlRmlsdGVycy5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9jbGVhckZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmZpbHRlcmluZy5jbGVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9zbG90XG4gICAgICAgICAgICAgICAgICAgID48L3Nsb3RcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYCA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj48L2Rpdj4gYH1cbiAgICAgICAgPC9oYS1kYXRhLXRhYmxlPlxuICAgICAgPC9oYXNzLXRhYnMtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2VhcmNoQ2hhbmdlKGV2OiBDdXN0b21FdmVudCkge1xuICAgIHRoaXMuZmlsdGVyID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJGaWx0ZXIoKSB7XG4gICAgbmF2aWdhdGUodGhpcywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGhhLWRhdGEtdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtLWRhdGEtdGFibGUtYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgfVxuICAgICAgOmhvc3QoOm5vdChbbmFycm93XSkpIGhhLWRhdGEtdGFibGUge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuMTIpO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuc2VhcmNoLXRvb2xiYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICB9XG4gICAgICBzZWFyY2gtaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgICBzZWFyY2gtaW5wdXQuaGVhZGVyIHtcbiAgICAgICAgbGVmdDogLThweDtcbiAgICAgICAgdG9wOiAtN3B4O1xuICAgICAgfVxuICAgICAgLmFjdGl2ZS1maWx0ZXJzIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnB4IDJweCAycHggOHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAuYWN0aXZlLWZpbHRlcnMgaGEtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5hY3RpdmUtZmlsdGVycyBtd2MtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIC5hY3RpdmUtZmlsdGVyczo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDAuMTI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB9XG4gICAgICAuc2VhcmNoLXRvb2xiYXIgLmFjdGl2ZS1maWx0ZXJzIHtcbiAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICByaWdodDogLTE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFPQTtBQUlBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFYQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQWpCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF1QkE7QUFBQTtBQXZCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUE2QkE7QUFBQTtBQTdCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQ0E7QUFBQTtBQW5DQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF5Q0E7QUFBQTtBQXpDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUErQ0E7QUFBQTtBQS9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0RBO0FBQUE7QUFBQTtBQXREQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtFQTtBQUFBO0FBbEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7OztBQU1BOzs7OztBQU1BOzs7OztBQU1BOzs7OztBQU1BOzs7OztBQU1BOzs7OztBQU1BOzs7OztBQU1BOzs7Ozs7QUFPQTs7Ozs7QUFNQTs7Ozs7QUFRQTs7OztBQVFBO0FBQ0E7QUFDQTtBQWhGQTtBQUFBO0FBQUE7QUFBQTtBQW1GQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7OztBQU1BOzs7O0FBSUE7O0FBRUE7Ozs7QUFLQTtBQUdBOzs7QUFHQTtBQUNBOztBQVpBOzs7O0FBWkE7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFPQTs7O0FBR0E7OztBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7O0FBUEE7Ozs7O0FBYkE7OztBQXREQTtBQXlGQTtBQTVLQTtBQUFBO0FBQUE7QUFBQTtBQStLQTtBQUNBO0FBaExBO0FBQUE7QUFBQTtBQUFBO0FBbUxBO0FBQ0E7QUFwTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBOERBO0FBclBBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
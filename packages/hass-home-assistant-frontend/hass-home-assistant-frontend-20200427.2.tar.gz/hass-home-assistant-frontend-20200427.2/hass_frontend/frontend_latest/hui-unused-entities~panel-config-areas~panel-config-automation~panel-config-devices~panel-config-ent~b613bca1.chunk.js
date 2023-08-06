(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities~panel-config-areas~panel-config-automation~panel-config-devices~panel-config-ent~b613bca1"],{

/***/ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts":
/*!**********************************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist!./src/components/data-table/sort_filter_worker.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(/*! ../../../node_modules/workerize-loader/dist/rpc-wrapper.js */ "./node_modules/workerize-loader/dist/rpc-wrapper.js")
				var methods = ["filterSortData","filterData","sortData"]
				module.exports = function() {
					var w = new Worker(__webpack_require__.p + "393b925a75277824ba3f.worker.js", { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),

/***/ "./src/components/data-table/ha-data-table.ts":
/*!****************************************************!*\
  !*** ./src/components/data-table/ha-data-table.ts ***!
  \****************************************************/
/*! exports provided: HaDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDataTable", function() { return HaDataTable; });
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var lit_virtualizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-virtualizer */ "./node_modules/lit-virtualizer/lit-virtualizer.js");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workerize-loader!./sort_filter_worker */ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/util/render-status */ "./src/common/util/render-status.ts");
/* harmony import */ var _ha_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ha-checkbox */ "./src/components/ha-checkbox.ts");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ha-icon */ "./src/components/ha-icon.ts");
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






 // @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax








let HaDataTable = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-data-table")], function (_initialize, _LitElement) {
  class HaDataTable extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaDataTable,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Object
      })],
      key: "columns",

      value() {
        return {};
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Array
      })],
      key: "data",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean
      })],
      key: "selectable",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean
      })],
      key: "hasFab",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean,
        attribute: "auto-height"
      })],
      key: "autoHeight",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: String
      })],
      key: "id",

      value() {
        return "id";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: String
      })],
      key: "noDataText",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: String
      })],
      key: "filter",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean
      })],
      key: "_filterable",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: String
      })],
      key: "_filter",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: String
      })],
      key: "_sortColumn",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: String
      })],
      key: "_sortDirection",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Array
      })],
      key: "_filteredData",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("slot[name='header']")],
      key: "_header",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])(".mdc-data-table__table")],
      key: "_table",
      value: void 0
    }, {
      kind: "field",
      key: "_checkableRowsCount",
      value: void 0
    }, {
      kind: "field",
      key: "_checkedRows",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_sortColumns",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "curRequest",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      key: "_worker",
      value: void 0
    }, {
      kind: "field",
      key: "_debounceSearch",

      value() {
        return Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_9__["debounce"])(value => {
          this._filter = value;
        }, 100, false);
      }

    }, {
      kind: "method",
      key: "clearSelection",
      value: function clearSelection() {
        this._checkedRows = [];

        this._checkedRowsChanged();
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HaDataTable.prototype), "connectedCallback", this).call(this);

        if (this._filteredData.length) {
          // Force update of location of rows
          this._filteredData = [...this._filteredData];
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(properties) {
        _get(_getPrototypeOf(HaDataTable.prototype), "firstUpdated", this).call(this, properties);

        this._worker = workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6___default()();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(properties) {
        _get(_getPrototypeOf(HaDataTable.prototype), "updated", this).call(this, properties);

        if (properties.has("columns")) {
          this._filterable = Object.values(this.columns).some(column => column.filterable);

          for (const columnId in this.columns) {
            if (this.columns[columnId].direction) {
              this._sortDirection = this.columns[columnId].direction;
              this._sortColumn = columnId;
              break;
            }
          }

          const clonedColumns = Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__["default"])(this.columns);
          Object.values(clonedColumns).forEach(column => {
            delete column.title;
            delete column.type;
            delete column.template;
          });
          this._sortColumns = clonedColumns;
        }

        if (properties.has("filter")) {
          this._debounceSearch(this.filter);
        }

        if (properties.has("data")) {
          this._checkableRowsCount = this.data.filter(row => row.selectable !== false).length;
        }

        if (properties.has("data") || properties.has("columns") || properties.has("_filter") || properties.has("_sortColumn") || properties.has("_sortDirection")) {
          this._filterData();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$_header;

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div class="mdc-data-table">
        <slot name="header" @slotchange=${this._calcTableHeight}>
          ${this._filterable ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <div class="table-header">
                  <search-input
                    @value-changed=${this._handleSearchChange}
                  ></search-input>
                </div>
              ` : ""}
        </slot>
        <div
          class="mdc-data-table__table ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
          "auto-height": this.autoHeight
        })}"
          style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
          height: this.autoHeight ? `${(this._filteredData.length || 1) * 53 + 57}px` : `calc(100% - ${(_this$_header = this._header) === null || _this$_header === void 0 ? void 0 : _this$_header.clientHeight}px)`
        })}
        >
          <div class="mdc-data-table__header-row">
            ${this.selectable ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  <div
                    class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                    role="columnheader"
                    scope="col"
                  >
                    <ha-checkbox
                      class="mdc-data-table__row-checkbox"
                      @change=${this._handleHeaderRowCheckboxClick}
                      .indeterminate=${this._checkedRows.length && this._checkedRows.length !== this._checkableRowsCount}
                      .checked=${this._checkedRows.length === this._checkableRowsCount}
                    >
                    </ha-checkbox>
                  </div>
                ` : ""}
            ${Object.entries(this.columns).map(columnEntry => {
          const [key, column] = columnEntry;
          const sorted = key === this._sortColumn;
          const classes = {
            "mdc-data-table__header-cell--numeric": Boolean(column.type === "numeric"),
            "mdc-data-table__header-cell--icon": Boolean(column.type === "icon"),
            "mdc-data-table__header-cell--icon-button": Boolean(column.type === "icon-button"),
            sortable: Boolean(column.sortable),
            "not-sorted": Boolean(column.sortable && !sorted),
            grows: Boolean(column.grows)
          };
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <div
                  class="mdc-data-table__header-cell ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes)}"
                  style=${column.width ? Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
            [column.grows ? "minWidth" : "width"]: column.width,
            maxWidth: column.maxWidth || ""
          }) : ""}
                  role="columnheader"
                  scope="col"
                  @click=${this._handleHeaderClick}
                  .columnId=${key}
                >
                  ${column.sortable ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                        <ha-icon
                          .icon=${sorted && this._sortDirection === "desc" ? "hass:arrow-down" : "hass:arrow-up"}
                        ></ha-icon>
                      ` : ""}
                  <span>${column.title}</span>
                </div>
              `;
        })}
          </div>
          ${!this._filteredData.length ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <div class="mdc-data-table__content">
                  <div class="mdc-data-table__row">
                    <div class="mdc-data-table__cell grows center">
                      ${this.noDataText || "No data"}
                    </div>
                  </div>
                </div>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <div class="mdc-data-table__content scroller">
                  ${Object(lit_virtualizer__WEBPACK_IMPORTED_MODULE_5__["scroll"])({
          items: !this.hasFab ? this._filteredData : [...this._filteredData, ...[{
            empty: true
          }]],
          renderItem: row => {
            if (row.empty) {
              return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <div class="mdc-data-table__row"></div> `;
            }

            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                        <div
                          .rowId="${row[this.id]}"
                          @click=${this._handleRowClick}
                          class="mdc-data-table__row ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
              "mdc-data-table__row--selected": this._checkedRows.includes(String(row[this.id]))
            })}"
                          aria-selected=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_3__["ifDefined"])(this._checkedRows.includes(String(row[this.id])) ? true : undefined)}
                          .selectable=${row.selectable !== false}
                        >
                          ${this.selectable ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                                <div
                                  class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                                >
                                  <ha-checkbox
                                    class="mdc-data-table__row-checkbox"
                                    @change=${this._handleRowCheckboxClick}
                                    .disabled=${row.selectable === false}
                                    .checked=${this._checkedRows.includes(String(row[this.id]))}
                                  >
                                  </ha-checkbox>
                                </div>
                              ` : ""}
                          ${Object.entries(this.columns).map(columnEntry => {
              const [key, column] = columnEntry;
              return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                              <div
                                class="mdc-data-table__cell ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
                "mdc-data-table__cell--numeric": Boolean(column.type === "numeric"),
                "mdc-data-table__cell--icon": Boolean(column.type === "icon"),
                "mdc-data-table__cell--icon-button": Boolean(column.type === "icon-button"),
                grows: Boolean(column.grows)
              })}"
                                style=${column.width ? Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
                [column.grows ? "minWidth" : "width"]: column.width,
                maxWidth: column.maxWidth ? column.maxWidth : ""
              }) : ""}
                              >
                                ${column.template ? column.template(row[key], row) : row[key]}
                              </div>
                            `;
            })}
                        </div>
                      `;
          }
        })}
                </div>
              `}
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_filterData",
      value: async function _filterData() {
        const startTime = new Date().getTime();
        this.curRequest++;
        const curRequest = this.curRequest;

        const filterProm = this._worker.filterSortData(this.data, this._sortColumns, this._filter, this._sortDirection, this._sortColumn);

        const [data] = await Promise.all([filterProm, _common_util_render_status__WEBPACK_IMPORTED_MODULE_10__["nextRender"]]);
        const curTime = new Date().getTime();
        const elapsed = curTime - startTime;

        if (elapsed < 100) {
          await new Promise(resolve => setTimeout(resolve, 100 - elapsed));
        }

        if (this.curRequest !== curRequest) {
          return;
        }

        this._filteredData = data;
      }
    }, {
      kind: "method",
      key: "_handleHeaderClick",
      value: function _handleHeaderClick(ev) {
        const columnId = ev.target.closest(".mdc-data-table__header-cell").columnId;

        if (!this.columns[columnId].sortable) {
          return;
        }

        if (!this._sortDirection || this._sortColumn !== columnId) {
          this._sortDirection = "asc";
        } else if (this._sortDirection === "asc") {
          this._sortDirection = "desc";
        } else {
          this._sortDirection = null;
        }

        this._sortColumn = this._sortDirection === null ? undefined : columnId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "sorting-changed", {
          column: columnId,
          direction: this._sortDirection
        });
      }
    }, {
      kind: "method",
      key: "_handleHeaderRowCheckboxClick",
      value: function _handleHeaderRowCheckboxClick(ev) {
        const checkbox = ev.target;

        if (checkbox.checked) {
          this._checkedRows = this._filteredData.filter(data => data.selectable !== false).map(data => data[this.id]);

          this._checkedRowsChanged();
        } else {
          this._checkedRows = [];

          this._checkedRowsChanged();
        }
      }
    }, {
      kind: "method",
      key: "_handleRowCheckboxClick",
      value: function _handleRowCheckboxClick(ev) {
        const checkbox = ev.target;
        const rowId = checkbox.closest(".mdc-data-table__row").rowId;

        if (checkbox.checked) {
          if (this._checkedRows.includes(rowId)) {
            return;
          }

          this._checkedRows = [...this._checkedRows, rowId];
        } else {
          this._checkedRows = this._checkedRows.filter(row => row !== rowId);
        }

        this._checkedRowsChanged();
      }
    }, {
      kind: "method",
      key: "_handleRowClick",
      value: function _handleRowClick(ev) {
        const target = ev.target;

        if (target.tagName === "HA-CHECKBOX") {
          return;
        }

        const rowId = target.closest(".mdc-data-table__row").rowId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "row-click", {
          id: rowId
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_checkedRowsChanged",
      value: function _checkedRowsChanged() {
        // force scroller to update, change it's items
        this._filteredData = [...this._filteredData];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "selection-changed", {
          value: this._checkedRows
        });
      }
    }, {
      kind: "method",
      key: "_handleSearchChange",
      value: function _handleSearchChange(ev) {
        this._debounceSearch(ev.detail.value);
      }
    }, {
      kind: "method",
      key: "_calcTableHeight",
      value: async function _calcTableHeight() {
        if (this.autoHeight) {
          return;
        }

        await this.updateComplete;
        this._table.style.height = `calc(100% - ${this._header.clientHeight}px)`;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      /* default mdc styles, colors changed, without checkbox styles */
      :host {
        height: 100%;
      }
      .mdc-data-table__content {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: 0.0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
      }

      .mdc-data-table {
        background-color: var(--data-table-background-color);
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(var(--rgb-primary-text-color), 0.12);
        display: inline-flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow: hidden;
      }

      .mdc-data-table__row--selected {
        background-color: rgba(var(--rgb-primary-color), 0.04);
      }

      .mdc-data-table__row {
        display: flex;
        width: 100%;
        height: 52px;
      }

      .mdc-data-table__row ~ .mdc-data-table__row {
        border-top: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
      }

      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {
        background-color: rgba(var(--rgb-primary-text-color), 0.04);
      }

      .mdc-data-table__header-cell {
        color: var(--primary-text-color);
      }

      .mdc-data-table__cell {
        color: var(--primary-text-color);
      }

      .mdc-data-table__header-row {
        height: 56px;
        display: flex;
        width: 100%;
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
        overflow-x: auto;
      }

      .mdc-data-table__header-row::-webkit-scrollbar {
        display: none;
      }

      .mdc-data-table__cell,
      .mdc-data-table__header-cell {
        padding-right: 16px;
        padding-left: 16px;
        align-self: center;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-shrink: 0;
        box-sizing: border-box;
      }

      .mdc-data-table__cell.mdc-data-table__cell--icon {
        overflow: initial;
      }

      .mdc-data-table__header-cell--checkbox,
      .mdc-data-table__cell--checkbox {
        /* @noflip */
        padding-left: 16px;
        /* @noflip */
        padding-right: 0;
        width: 56px;
      }
      [dir="rtl"] .mdc-data-table__header-cell--checkbox,
      .mdc-data-table__header-cell--checkbox[dir="rtl"],
      [dir="rtl"] .mdc-data-table__cell--checkbox,
      .mdc-data-table__cell--checkbox[dir="rtl"] {
        /* @noflip */
        padding-left: 0;
        /* @noflip */
        padding-right: 16px;
      }

      .mdc-data-table__table {
        height: 100%;
        width: 100%;
        border: 0;
        white-space: nowrap;
      }

      .mdc-data-table__cell {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: 0.0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
      }

      .mdc-data-table__cell--numeric {
        text-align: right;
      }
      [dir="rtl"] .mdc-data-table__cell--numeric,
      .mdc-data-table__cell--numeric[dir="rtl"] {
        /* @noflip */
        text-align: left;
      }

      .mdc-data-table__cell--icon {
        color: var(--secondary-text-color);
        text-align: center;
      }

      .mdc-data-table__header-cell--icon,
      .mdc-data-table__cell--icon {
        width: 54px;
      }

      .mdc-data-table__header-cell.mdc-data-table__header-cell--icon {
        text-align: center;
      }
      .mdc-data-table__header-cell.sortable.mdc-data-table__header-cell--icon:hover,
      .mdc-data-table__header-cell.sortable.mdc-data-table__header-cell--icon:not(.not-sorted) {
        text-align: left;
      }

      .mdc-data-table__cell--icon:first-child ha-icon {
        margin-left: 8px;
      }

      .mdc-data-table__cell--icon:first-child state-badge {
        margin-right: -8px;
      }

      .mdc-data-table__header-cell--icon-button,
      .mdc-data-table__cell--icon-button {
        width: 56px;
        padding: 8px;
      }

      .mdc-data-table__header-cell--icon-button:first-child,
      .mdc-data-table__cell--icon-button:first-child {
        width: 64px;
        padding-left: 16px;
      }

      .mdc-data-table__header-cell--icon-button:last-child,
      .mdc-data-table__cell--icon-button:last-child {
        width: 64px;
        padding-right: 16px;
      }

      .mdc-data-table__cell--icon-button a {
        color: var(--primary-text-color);
      }

      .mdc-data-table__header-cell {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-weight: 500;
        letter-spacing: 0.0071428571em;
        text-decoration: inherit;
        text-transform: inherit;
        text-align: left;
      }
      [dir="rtl"] .mdc-data-table__header-cell,
      .mdc-data-table__header-cell[dir="rtl"] {
        /* @noflip */
        text-align: right;
      }

      .mdc-data-table__header-cell--numeric {
        text-align: right;
      }
      .mdc-data-table__header-cell--numeric.sortable:hover,
      .mdc-data-table__header-cell--numeric.sortable:not(.not-sorted) {
        text-align: left;
      }
      [dir="rtl"] .mdc-data-table__header-cell--numeric,
      .mdc-data-table__header-cell--numeric[dir="rtl"] {
        /* @noflip */
        text-align: left;
      }

      /* custom from here */

      :host {
        display: block;
      }

      .mdc-data-table {
        display: block;
        border-width: var(--data-table-border-width, 1px);
        height: 100%;
      }
      .mdc-data-table__header-cell {
        overflow: hidden;
        position: relative;
      }
      .mdc-data-table__header-cell span {
        position: relative;
        left: 0px;
      }

      .mdc-data-table__header-cell.sortable {
        cursor: pointer;
      }
      .mdc-data-table__header-cell > * {
        transition: left 0.2s ease;
      }
      .mdc-data-table__header-cell ha-icon {
        top: -3px;
        position: absolute;
      }
      .mdc-data-table__header-cell.not-sorted ha-icon {
        left: -20px;
      }
      .mdc-data-table__header-cell.sortable:not(.not-sorted) span,
      .mdc-data-table__header-cell.sortable.not-sorted:hover span {
        left: 24px;
      }
      .mdc-data-table__header-cell.sortable:not(.not-sorted) ha-icon,
      .mdc-data-table__header-cell.sortable:hover.not-sorted ha-icon {
        left: 12px;
      }
      .table-header {
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
        padding: 0 16px;
      }
      search-input {
        position: relative;
        top: 2px;
      }
      slot[name="header"] {
        display: block;
      }
      .center {
        text-align: center;
      }
      .secondary {
        color: var(--secondary-text-color);
      }
      .scroller {
        display: flex;
        position: relative;
        contain: strict;
        height: calc(100% - 57px);
      }
      .mdc-data-table__table:not(.auto-height) .scroller {
        overflow: auto;
      }
      .grows {
        flex-grow: 1;
        flex-shrink: 1;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-checkbox.ts":
/*!***************************************!*\
  !*** ./src/components/ha-checkbox.ts ***!
  \***************************************/
/*! exports provided: HaCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaCheckbox", function() { return HaCheckbox; });
/* harmony import */ var _material_mwc_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-checkbox */ "./node_modules/@material/mwc-checkbox/mwc-checkbox.js");
/* harmony import */ var _material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-checkbox/mwc-checkbox-css */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
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




const MwcCheckbox = customElements.get("mwc-checkbox");
let HaCheckbox = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("ha-checkbox")], function (_initialize, _MwcCheckbox) {
  class HaCheckbox extends _MwcCheckbox {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaCheckbox,
    d: [{
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        _get(_getPrototypeOf(HaCheckbox.prototype), "firstUpdated", this).call(this);

        this.style.setProperty("--mdc-theme-secondary", "var(--primary-color)");
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_1__["style"], lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
        .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)
          ~ .mdc-checkbox__background {
          border-color: rgba(var(--rgb-primary-text-color), 0.54);
        }
      `];
      }
    }]
  };
}, MwcCheckbox);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllc35wYW5lbC1jb25maWctYXJlYXN+cGFuZWwtY29uZmlnLWF1dG9tYXRpb25+cGFuZWwtY29uZmlnLWRldmljZXN+cGFuZWwtY29uZmlnLWVudH5iNjEzYmNhMS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RhdGEtdGFibGUvc29ydF9maWx0ZXJfd29ya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jaGVja2JveC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblx0XHRcdFx0dmFyIGFkZE1ldGhvZHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qc1wiKVxuXHRcdFx0XHR2YXIgbWV0aG9kcyA9IFtcImZpbHRlclNvcnREYXRhXCIsXCJmaWx0ZXJEYXRhXCIsXCJzb3J0RGF0YVwiXVxuXHRcdFx0XHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB3ID0gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzkzYjkyNWE3NTI3NzgyNGJhM2Yud29ya2VyLmpzXCIsIHsgbmFtZTogXCJbaGFzaF0ud29ya2VyLmpzXCIgfSlcblx0XHRcdFx0XHRhZGRNZXRob2RzKHcsIG1ldGhvZHMpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIHdcblx0XHRcdFx0fVxuXHRcdFx0IiwiaW1wb3J0IGRlZXBDbG9uZSBmcm9tIFwiZGVlcC1jbG9uZS1zaW1wbGVcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZFwiO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXBcIjtcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCJsaXQtdmlydHVhbGl6ZXJcIjtcbi8vIEB0cy1pZ25vcmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8td2VicGFjay1sb2FkZXItc3ludGF4XG5pbXBvcnQgc29ydEZpbHRlcldvcmtlciBmcm9tIFwid29ya2VyaXplLWxvYWRlciEuL3NvcnRfZmlsdGVyX3dvcmtlclwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tbW9uL3NlYXJjaC9zZWFyY2gtaW5wdXRcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBuZXh0UmVuZGVyIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL3JlbmRlci1zdGF0dXNcIjtcbmltcG9ydCBcIi4uL2hhLWNoZWNrYm94XCI7XG5pbXBvcnQgdHlwZSB7IEhhQ2hlY2tib3ggfSBmcm9tIFwiLi4vaGEtY2hlY2tib3hcIjtcbmltcG9ydCBcIi4uL2hhLWljb25cIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJzZWxlY3Rpb24tY2hhbmdlZFwiOiBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ7XG4gICAgXCJyb3ctY2xpY2tcIjogUm93Q2xpY2tlZEV2ZW50O1xuICAgIFwic29ydGluZy1jaGFuZ2VkXCI6IFNvcnRpbmdDaGFuZ2VkRXZlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3dDbGlja2VkRXZlbnQge1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbkNoYW5nZWRFdmVudCB7XG4gIHZhbHVlOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTb3J0aW5nQ2hhbmdlZEV2ZW50IHtcbiAgY29sdW1uOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogU29ydGluZ0RpcmVjdGlvbjtcbn1cblxuZXhwb3J0IHR5cGUgU29ydGluZ0RpcmVjdGlvbiA9IFwiZGVzY1wiIHwgXCJhc2NcIiB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogRGF0YVRhYmxlQ29sdW1uRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVTb3J0Q29sdW1uRGF0YSB7XG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgZmlsdGVyYWJsZT86IGJvb2xlYW47XG4gIGZpbHRlcktleT86IHN0cmluZztcbiAgZGlyZWN0aW9uPzogU29ydGluZ0RpcmVjdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVDb2x1bW5EYXRhIGV4dGVuZHMgRGF0YVRhYmxlU29ydENvbHVtbkRhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICB0eXBlPzogXCJudW1lcmljXCIgfCBcImljb25cIiB8IFwiaWNvbi1idXR0b25cIjtcbiAgdGVtcGxhdGU/OiA8VD4oZGF0YTogYW55LCByb3c6IFQpID0+IFRlbXBsYXRlUmVzdWx0IHwgc3RyaW5nO1xuICB3aWR0aD86IHN0cmluZztcbiAgbWF4V2lkdGg/OiBzdHJpbmc7XG4gIGdyb3dzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVSb3dEYXRhIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBzZWxlY3RhYmxlPzogYm9vbGVhbjtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1kYXRhLXRhYmxlXCIpXG5leHBvcnQgY2xhc3MgSGFEYXRhVGFibGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pIHB1YmxpYyBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSB7fTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KSBwdWJsaWMgZGF0YTogRGF0YVRhYmxlUm93RGF0YVtdID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGhhc0ZhYiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogXCJhdXRvLWhlaWdodFwiIH0pXG4gIHB1YmxpYyBhdXRvSGVpZ2h0ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pIHB1YmxpYyBpZCA9IFwiaWRcIjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSkgcHVibGljIG5vRGF0YVRleHQ/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pIHB1YmxpYyBmaWx0ZXIgPSBcIlwiO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHJpdmF0ZSBfZmlsdGVyYWJsZSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwcml2YXRlIF9maWx0ZXIgPSBcIlwiO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwcml2YXRlIF9zb3J0Q29sdW1uPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwcml2YXRlIF9zb3J0RGlyZWN0aW9uOiBTb3J0aW5nRGlyZWN0aW9uID0gbnVsbDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KSBwcml2YXRlIF9maWx0ZXJlZERhdGE6IERhdGFUYWJsZVJvd0RhdGFbXSA9IFtdO1xuXG4gIEBxdWVyeShcInNsb3RbbmFtZT0naGVhZGVyJ11cIikgcHJpdmF0ZSBfaGVhZGVyITogSFRNTFNsb3RFbGVtZW50O1xuXG4gIEBxdWVyeShcIi5tZGMtZGF0YS10YWJsZV9fdGFibGVcIikgcHJpdmF0ZSBfdGFibGUhOiBIVE1MRGl2RWxlbWVudDtcblxuICBwcml2YXRlIF9jaGVja2FibGVSb3dzQ291bnQ/OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfY2hlY2tlZFJvd3M6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBfc29ydENvbHVtbnM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBEYXRhVGFibGVTb3J0Q29sdW1uRGF0YTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgY3VyUmVxdWVzdCA9IDA7XG5cbiAgcHJpdmF0ZSBfd29ya2VyOiBhbnkgfCB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBfZGVib3VuY2VTZWFyY2ggPSBkZWJvdW5jZShcbiAgICAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fZmlsdGVyID0gdmFsdWU7XG4gICAgfSxcbiAgICAxMDAsXG4gICAgZmFsc2VcbiAgKTtcblxuICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tlZFJvd3MgPSBbXTtcbiAgICB0aGlzLl9jaGVja2VkUm93c0NoYW5nZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl9maWx0ZXJlZERhdGEubGVuZ3RoKSB7XG4gICAgICAvLyBGb3JjZSB1cGRhdGUgb2YgbG9jYXRpb24gb2Ygcm93c1xuICAgICAgdGhpcy5fZmlsdGVyZWREYXRhID0gWy4uLnRoaXMuX2ZpbHRlcmVkRGF0YV07XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChwcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChwcm9wZXJ0aWVzKTtcbiAgICB0aGlzLl93b3JrZXIgPSBzb3J0RmlsdGVyV29ya2VyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChwcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQocHJvcGVydGllcyk7XG5cbiAgICBpZiAocHJvcGVydGllcy5oYXMoXCJjb2x1bW5zXCIpKSB7XG4gICAgICB0aGlzLl9maWx0ZXJhYmxlID0gT2JqZWN0LnZhbHVlcyh0aGlzLmNvbHVtbnMpLnNvbWUoXG4gICAgICAgIChjb2x1bW4pID0+IGNvbHVtbi5maWx0ZXJhYmxlXG4gICAgICApO1xuXG4gICAgICBmb3IgKGNvbnN0IGNvbHVtbklkIGluIHRoaXMuY29sdW1ucykge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5zW2NvbHVtbklkXS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLl9zb3J0RGlyZWN0aW9uID0gdGhpcy5jb2x1bW5zW2NvbHVtbklkXS5kaXJlY3Rpb24hO1xuICAgICAgICAgIHRoaXMuX3NvcnRDb2x1bW4gPSBjb2x1bW5JZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjbG9uZWRDb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSBkZWVwQ2xvbmUodGhpcy5jb2x1bW5zKTtcbiAgICAgIE9iamVjdC52YWx1ZXMoY2xvbmVkQ29sdW1ucykuZm9yRWFjaCgoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBjb2x1bW4udGl0bGU7XG4gICAgICAgIGRlbGV0ZSBjb2x1bW4udHlwZTtcbiAgICAgICAgZGVsZXRlIGNvbHVtbi50ZW1wbGF0ZTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zb3J0Q29sdW1ucyA9IGNsb25lZENvbHVtbnM7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMuaGFzKFwiZmlsdGVyXCIpKSB7XG4gICAgICB0aGlzLl9kZWJvdW5jZVNlYXJjaCh0aGlzLmZpbHRlcik7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMuaGFzKFwiZGF0YVwiKSkge1xuICAgICAgdGhpcy5fY2hlY2thYmxlUm93c0NvdW50ID0gdGhpcy5kYXRhLmZpbHRlcihcbiAgICAgICAgKHJvdykgPT4gcm93LnNlbGVjdGFibGUgIT09IGZhbHNlXG4gICAgICApLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcImRhdGFcIikgfHxcbiAgICAgIHByb3BlcnRpZXMuaGFzKFwiY29sdW1uc1wiKSB8fFxuICAgICAgcHJvcGVydGllcy5oYXMoXCJfZmlsdGVyXCIpIHx8XG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcIl9zb3J0Q29sdW1uXCIpIHx8XG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcIl9zb3J0RGlyZWN0aW9uXCIpXG4gICAgKSB7XG4gICAgICB0aGlzLl9maWx0ZXJEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZGF0YS10YWJsZVwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCIgQHNsb3RjaGFuZ2U9JHt0aGlzLl9jYWxjVGFibGVIZWlnaHR9PlxuICAgICAgICAgICR7dGhpcy5fZmlsdGVyYWJsZVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWFyY2gtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICA+PC9zZWFyY2gtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9zbG90PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fdGFibGUgJHtjbGFzc01hcCh7XG4gICAgICAgICAgICBcImF1dG8taGVpZ2h0XCI6IHRoaXMuYXV0b0hlaWdodCxcbiAgICAgICAgICB9KX1cIlxuICAgICAgICAgIHN0eWxlPSR7c3R5bGVNYXAoe1xuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmF1dG9IZWlnaHRcbiAgICAgICAgICAgICAgPyBgJHsodGhpcy5fZmlsdGVyZWREYXRhLmxlbmd0aCB8fCAxKSAqIDUzICsgNTd9cHhgXG4gICAgICAgICAgICAgIDogYGNhbGMoMTAwJSAtICR7dGhpcy5faGVhZGVyPy5jbGllbnRIZWlnaHR9cHgpYCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9faGVhZGVyLXJvd1wiPlxuICAgICAgICAgICAgJHt0aGlzLnNlbGVjdGFibGVcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCBtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fcm93LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5faGFuZGxlSGVhZGVyUm93Q2hlY2tib3hDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAuaW5kZXRlcm1pbmF0ZT0ke3RoaXMuX2NoZWNrZWRSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrZWRSb3dzLmxlbmd0aCAhPT0gdGhpcy5fY2hlY2thYmxlUm93c0NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5fY2hlY2tlZFJvd3MubGVuZ3RoID09PVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrYWJsZVJvd3NDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2hhLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAke09iamVjdC5lbnRyaWVzKHRoaXMuY29sdW1ucykubWFwKChjb2x1bW5FbnRyeSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBba2V5LCBjb2x1bW5dID0gY29sdW1uRW50cnk7XG4gICAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IGtleSA9PT0gdGhpcy5fc29ydENvbHVtbjtcbiAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICBcIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpY1wiOiBCb29sZWFuKFxuICAgICAgICAgICAgICAgICAgY29sdW1uLnR5cGUgPT09IFwibnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBcIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvblwiOiBCb29sZWFuKFxuICAgICAgICAgICAgICAgICAgY29sdW1uLnR5cGUgPT09IFwiaWNvblwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBcIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvbi1idXR0b25cIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgIGNvbHVtbi50eXBlID09PSBcImljb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBCb29sZWFuKGNvbHVtbi5zb3J0YWJsZSksXG4gICAgICAgICAgICAgICAgXCJub3Qtc29ydGVkXCI6IEJvb2xlYW4oY29sdW1uLnNvcnRhYmxlICYmICFzb3J0ZWQpLFxuICAgICAgICAgICAgICAgIGdyb3dzOiBCb29sZWFuKGNvbHVtbi5ncm93cyksXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsICR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPSR7Y29sdW1uLndpZHRoXG4gICAgICAgICAgICAgICAgICAgID8gc3R5bGVNYXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbi5ncm93cyA/IFwibWluV2lkdGhcIiA6IFwid2lkdGhcIl06IGNvbHVtbi53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBjb2x1bW4ubWF4V2lkdGggfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZUhlYWRlckNsaWNrfVxuICAgICAgICAgICAgICAgICAgLmNvbHVtbklkPSR7a2V5fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICR7Y29sdW1uLnNvcnRhYmxlXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uPSR7c29ydGVkICYmIHRoaXMuX3NvcnREaXJlY3Rpb24gPT09IFwiZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImhhc3M6YXJyb3ctZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImhhc3M6YXJyb3ctdXBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4ke2NvbHVtbi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAkeyF0aGlzLl9maWx0ZXJlZERhdGEubGVuZ3RoXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2NlbGwgZ3Jvd3MgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm5vRGF0YVRleHQgfHwgXCJObyBkYXRhXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2NvbnRlbnQgc2Nyb2xsZXJcIj5cbiAgICAgICAgICAgICAgICAgICR7c2Nyb2xsKHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6ICF0aGlzLmhhc0ZhYlxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZmlsdGVyZWREYXRhXG4gICAgICAgICAgICAgICAgICAgICAgOiBbLi4udGhpcy5fZmlsdGVyZWREYXRhLCAuLi5beyBlbXB0eTogdHJ1ZSB9XV0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW06IChyb3c6IERhdGFUYWJsZVJvd0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGAgPGRpdiBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19yb3dcIj48L2Rpdj4gYDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yb3dJZD1cIiR7cm93W3RoaXMuaWRdfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZVJvd0NsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19yb3cgJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZGMtZGF0YS10YWJsZV9fcm93LS1zZWxlY3RlZFwiOiB0aGlzLl9jaGVja2VkUm93cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyhyb3dbdGhpcy5pZF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD0ke2lmRGVmaW5lZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja2VkUm93cy5pbmNsdWRlcyhTdHJpbmcocm93W3RoaXMuaWRdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGFibGU9JHtyb3cuc2VsZWN0YWJsZSAhPT0gZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5zZWxlY3RhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fY2VsbCBtZGMtZGF0YS10YWJsZV9fY2VsbC0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19yb3ctY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2hhbmRsZVJvd0NoZWNrYm94Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHtyb3cuc2VsZWN0YWJsZSA9PT0gZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2NoZWNrZWRSb3dzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocm93W3RoaXMuaWRdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oYS1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAke09iamVjdC5lbnRyaWVzKHRoaXMuY29sdW1ucykubWFwKChjb2x1bW5FbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIGNvbHVtbl0gPSBjb2x1bW5FbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fY2VsbCAke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kYy1kYXRhLXRhYmxlX19jZWxsLS1udW1lcmljXCI6IEJvb2xlYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4udHlwZSA9PT0gXCJudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWRjLWRhdGEtdGFibGVfX2NlbGwtLWljb25cIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi50eXBlID09PSBcImljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvbi1idXR0b25cIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi50eXBlID09PSBcImljb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3dzOiBCb29sZWFuKGNvbHVtbi5ncm93cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPSR7Y29sdW1uLndpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZU1hcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW4uZ3Jvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibWluV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ3aWR0aFwiXTogY29sdW1uLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogY29sdW1uLm1heFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4ubWF4V2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjb2x1bW4udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi50ZW1wbGF0ZShyb3dba2V5XSwgcm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcm93W2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmlsdGVyRGF0YSgpIHtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmN1clJlcXVlc3QrKztcbiAgICBjb25zdCBjdXJSZXF1ZXN0ID0gdGhpcy5jdXJSZXF1ZXN0O1xuXG4gICAgY29uc3QgZmlsdGVyUHJvbSA9IHRoaXMuX3dvcmtlci5maWx0ZXJTb3J0RGF0YShcbiAgICAgIHRoaXMuZGF0YSxcbiAgICAgIHRoaXMuX3NvcnRDb2x1bW5zLFxuICAgICAgdGhpcy5fZmlsdGVyLFxuICAgICAgdGhpcy5fc29ydERpcmVjdGlvbixcbiAgICAgIHRoaXMuX3NvcnRDb2x1bW5cbiAgICApO1xuXG4gICAgY29uc3QgW2RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZpbHRlclByb20sIG5leHRSZW5kZXJdKTtcblxuICAgIGNvbnN0IGN1clRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCBlbGFwc2VkID0gY3VyVGltZSAtIHN0YXJ0VGltZTtcblxuICAgIGlmIChlbGFwc2VkIDwgMTAwKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAgLSBlbGFwc2VkKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1clJlcXVlc3QgIT09IGN1clJlcXVlc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZmlsdGVyZWREYXRhID0gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUhlYWRlckNsaWNrKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGNvbHVtbklkID0gKChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoXG4gICAgICBcIi5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGxcIlxuICAgICkgYXMgYW55KS5jb2x1bW5JZDtcbiAgICBpZiAoIXRoaXMuY29sdW1uc1tjb2x1bW5JZF0uc29ydGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9zb3J0RGlyZWN0aW9uIHx8IHRoaXMuX3NvcnRDb2x1bW4gIT09IGNvbHVtbklkKSB7XG4gICAgICB0aGlzLl9zb3J0RGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3NvcnREaXJlY3Rpb24gPT09IFwiYXNjXCIpIHtcbiAgICAgIHRoaXMuX3NvcnREaXJlY3Rpb24gPSBcImRlc2NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc29ydERpcmVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydENvbHVtbiA9IHRoaXMuX3NvcnREaXJlY3Rpb24gPT09IG51bGwgPyB1bmRlZmluZWQgOiBjb2x1bW5JZDtcblxuICAgIGZpcmVFdmVudCh0aGlzLCBcInNvcnRpbmctY2hhbmdlZFwiLCB7XG4gICAgICBjb2x1bW46IGNvbHVtbklkLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9zb3J0RGlyZWN0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlSGVhZGVyUm93Q2hlY2tib3hDbGljayhldjogRXZlbnQpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGV2LnRhcmdldCBhcyBIYUNoZWNrYm94O1xuICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICB0aGlzLl9jaGVja2VkUm93cyA9IHRoaXMuX2ZpbHRlcmVkRGF0YVxuICAgICAgICAuZmlsdGVyKChkYXRhKSA9PiBkYXRhLnNlbGVjdGFibGUgIT09IGZhbHNlKVxuICAgICAgICAubWFwKChkYXRhKSA9PiBkYXRhW3RoaXMuaWRdKTtcbiAgICAgIHRoaXMuX2NoZWNrZWRSb3dzQ2hhbmdlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jaGVja2VkUm93cyA9IFtdO1xuICAgICAgdGhpcy5fY2hlY2tlZFJvd3NDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUm93Q2hlY2tib3hDbGljayhldjogRXZlbnQpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGV2LnRhcmdldCBhcyBIYUNoZWNrYm94O1xuICAgIGNvbnN0IHJvd0lkID0gKGNoZWNrYm94LmNsb3Nlc3QoXCIubWRjLWRhdGEtdGFibGVfX3Jvd1wiKSBhcyBhbnkpLnJvd0lkO1xuXG4gICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLl9jaGVja2VkUm93cy5pbmNsdWRlcyhyb3dJZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2hlY2tlZFJvd3MgPSBbLi4udGhpcy5fY2hlY2tlZFJvd3MsIHJvd0lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2hlY2tlZFJvd3MgPSB0aGlzLl9jaGVja2VkUm93cy5maWx0ZXIoKHJvdykgPT4gcm93ICE9PSByb3dJZCk7XG4gICAgfVxuICAgIHRoaXMuX2NoZWNrZWRSb3dzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUm93Q2xpY2soZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gXCJIQS1DSEVDS0JPWFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJvd0lkID0gKHRhcmdldC5jbG9zZXN0KFwiLm1kYy1kYXRhLXRhYmxlX19yb3dcIikgYXMgYW55KS5yb3dJZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJyb3ctY2xpY2tcIiwgeyBpZDogcm93SWQgfSwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrZWRSb3dzQ2hhbmdlZCgpIHtcbiAgICAvLyBmb3JjZSBzY3JvbGxlciB0byB1cGRhdGUsIGNoYW5nZSBpdCdzIGl0ZW1zXG4gICAgdGhpcy5fZmlsdGVyZWREYXRhID0gWy4uLnRoaXMuX2ZpbHRlcmVkRGF0YV07XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwic2VsZWN0aW9uLWNoYW5nZWRcIiwge1xuICAgICAgdmFsdWU6IHRoaXMuX2NoZWNrZWRSb3dzLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2VhcmNoQ2hhbmdlKGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2RlYm91bmNlU2VhcmNoKGV2LmRldGFpbC52YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jYWxjVGFibGVIZWlnaHQoKSB7XG4gICAgaWYgKHRoaXMuYXV0b0hlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIHRoaXMuX3RhYmxlLnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMCUgLSAke3RoaXMuX2hlYWRlci5jbGllbnRIZWlnaHR9cHgpYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC8qIGRlZmF1bHQgbWRjIHN0eWxlcywgY29sb3JzIGNoYW5nZWQsIHdpdGhvdXQgY2hlY2tib3ggc3R5bGVzICovXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY29udGVudCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE3ODU3MTQyOWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXRhLXRhYmxlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuMTIpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19yb3ctLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS1jb2xvciksIDAuMDQpO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3JvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fcm93IH4gLm1kYy1kYXRhLXRhYmxlX19yb3cge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC4xMik7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fcm93Om5vdCgubWRjLWRhdGEtdGFibGVfX3Jvdy0tc2VsZWN0ZWQpOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC4wNCk7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLXJvdyB7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LXRleHQtY29sb3IpLCAwLjEyKTtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItcm93Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbCxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwubWRjLWRhdGEtdGFibGVfX2NlbGwtLWljb24ge1xuICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tY2hlY2tib3gsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwtLWNoZWNrYm94IHtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICB9XG4gICAgICBbZGlyPVwicnRsXCJdIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWNoZWNrYm94LFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tY2hlY2tib3hbZGlyPVwicnRsXCJdLFxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2NlbGwtLWNoZWNrYm94LFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1jaGVja2JveFtkaXI9XCJydGxcIl0ge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3RhYmxlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwge1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNzg1NzE0MjllbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1udW1lcmljIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICBbZGlyPVwicnRsXCJdIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0tbnVtZXJpYyxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0tbnVtZXJpY1tkaXI9XCJydGxcIl0ge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvbixcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvbiB7XG4gICAgICAgIHdpZHRoOiA1NHB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwuc29ydGFibGUubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1pY29uOmhvdmVyLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC5zb3J0YWJsZS5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWljb246bm90KC5ub3Qtc29ydGVkKSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvbjpmaXJzdC1jaGlsZCBoYS1pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1pY29uOmZpcnN0LWNoaWxkIHN0YXRlLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1pY29uLWJ1dHRvbixcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1pY29uLWJ1dHRvbjpmaXJzdC1jaGlsZCxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvbi1idXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1pY29uLWJ1dHRvbjpsYXN0LWNoaWxkLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1pY29uLWJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvbi1idXR0b24gYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDA3MTQyODU3MWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbFtkaXI9XCJydGxcIl0ge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljLnNvcnRhYmxlOmhvdmVyLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpYy5zb3J0YWJsZTpub3QoLm5vdC1zb3J0ZWQpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICAgIFtkaXI9XCJydGxcIl0gLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpYyxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLW51bWVyaWNbZGlyPVwicnRsXCJdIHtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAvKiBjdXN0b20gZnJvbSBoZXJlICovXG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItd2lkdGg6IHZhcigtLWRhdGEtdGFibGUtYm9yZGVyLXdpZHRoLCAxcHgpO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwuc29ydGFibGUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsID4gKiB7XG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4ycyBlYXNlO1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCBoYS1pY29uIHtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLm5vdC1zb3J0ZWQgaGEtaWNvbiB7XG4gICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC5zb3J0YWJsZTpub3QoLm5vdC1zb3J0ZWQpIHNwYW4sXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLnNvcnRhYmxlLm5vdC1zb3J0ZWQ6aG92ZXIgc3BhbiB7XG4gICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLnNvcnRhYmxlOm5vdCgubm90LXNvcnRlZCkgaGEtaWNvbixcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwuc29ydGFibGU6aG92ZXIubm90LXNvcnRlZCBoYS1pY29uIHtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgIH1cbiAgICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC4xMik7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgIH1cbiAgICAgIHNlYXJjaC1pbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICB9XG4gICAgICBzbG90W25hbWU9XCJoZWFkZXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIC5jZW50ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuc2Vjb25kYXJ5IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5zY3JvbGxlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29udGFpbjogc3RyaWN0O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU3cHgpO1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX190YWJsZTpub3QoLmF1dG8taGVpZ2h0KSAuc2Nyb2xsZXIge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cbiAgICAgIC5ncm93cyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGF0YS10YWJsZVwiOiBIYURhdGFUYWJsZTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1jaGVja2JveFwiO1xuaW1wb3J0IHR5cGUgeyBDaGVja2JveCB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWNoZWNrYm94XCI7XG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWNoZWNrYm94L213Yy1jaGVja2JveC1jc3NcIjtcbmltcG9ydCB7IGNzcywgQ1NTUmVzdWx0LCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IE13Y0NoZWNrYm94ID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLWNoZWNrYm94XCIpIGFzIENvbnN0cnVjdG9yPENoZWNrYm94PjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jaGVja2JveFwiKVxuZXhwb3J0IGNsYXNzIEhhQ2hlY2tib3ggZXh0ZW5kcyBNd2NDaGVja2JveCB7XG4gIHB1YmxpYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKCk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbWRjLXRoZW1lLXNlY29uZGFyeVwiLCBcInZhcigtLXByaW1hcnktY29sb3IpXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6bm90KDpjaGVja2VkKTpub3QoOmluZGV0ZXJtaW5hdGUpXG4gICAgICAgICAgfiAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuNTQpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNoZWNrYm94XCI6IEhhQ2hlY2tib3g7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW9EQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUhBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFMQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBUEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBVEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQVpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFoQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBa0JBO0FBQUE7QUFsQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBb0JBO0FBQUE7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBc0JBO0FBQUE7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBeEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQTBCQTtBQUFBO0FBMUJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQThDQTtBQUNBO0FBL0NBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXFEQTtBQUNBO0FBQUE7QUFDQTtBQXZEQTtBQUFBO0FBQUE7QUFBQTtBQTBEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9EQTtBQUFBO0FBQUE7QUFBQTtBQWtFQTtBQUNBO0FBQUE7QUFDQTtBQXBFQTtBQUFBO0FBQUE7QUFBQTtBQXVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQW5IQTtBQUFBO0FBQUE7QUFBQTtBQXFIQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTs7O0FBSUE7OztBQUpBOzs7QUFXQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7OztBQU9BOzs7Ozs7OztBQVNBO0FBQ0E7QUFFQTs7OztBQVpBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBWkE7QUFjQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBOzs7QUFPQTtBQUNBOztBQUVBOztBQUdBOztBQUhBO0FBU0E7O0FBdkJBO0FBMEJBOztBQUVBOzs7O0FBS0E7Ozs7QUFMQTs7QUFZQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFLQTs7QUFFQTs7Ozs7O0FBT0E7QUFDQTtBQUNBOzs7O0FBVEE7QUFpQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFWQTtBQVlBO0FBRUE7QUFHQTtBQUpBOztBQVVBOztBQXpCQTtBQThCQTs7QUFqRUE7QUFvRUE7QUE1RUE7O0FBK0VBOzs7QUFuTEE7QUF1TEE7QUE3U0E7QUFBQTtBQUFBO0FBQUE7QUFnVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXhVQTtBQUFBO0FBQUE7QUFBQTtBQTJVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBL1ZBO0FBQUE7QUFBQTtBQUFBO0FBa1dBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTVXQTtBQUFBO0FBQUE7QUFBQTtBQStXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEzWEE7QUFBQTtBQUFBO0FBQUE7QUE4WEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFwWUE7QUFBQTtBQUFBO0FBQUE7QUF1WUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBNVlBO0FBQUE7QUFBQTtBQUFBO0FBK1lBO0FBQ0E7QUFoWkE7QUFBQTtBQUFBO0FBQUE7QUFtWkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF4WkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVSQTtBQWxyQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTs7Ozs7QUFBQTtBQVNBO0FBaEJBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
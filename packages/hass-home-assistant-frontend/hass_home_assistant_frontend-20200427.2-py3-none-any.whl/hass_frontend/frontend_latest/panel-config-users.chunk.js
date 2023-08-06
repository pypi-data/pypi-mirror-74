(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-users"],{

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

/***/ "./src/data/user.ts":
/*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
/*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, GROUPS, fetchUsers, createUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_ADMIN", function() { return SYSTEM_GROUP_ID_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_USER", function() { return SYSTEM_GROUP_ID_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_READ_ONLY", function() { return SYSTEM_GROUP_ID_READ_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUPS", function() { return GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
const SYSTEM_GROUP_ID_ADMIN = "system-admin";
const SYSTEM_GROUP_ID_USER = "system-users";
const SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
const GROUPS = [SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_ADMIN];
const fetchUsers = async hass => hass.callWS({
  type: "config/auth/list"
});
const createUser = async (hass, name, group_ids) => hass.callWS({
  type: "config/auth/create",
  name,
  group_ids
});
const updateUser = async (hass, userId, params) => hass.callWS(Object.assign({}, params, {
  type: "config/auth/update",
  user_id: userId
}));
const deleteUser = async (hass, userId) => hass.callWS({
  type: "config/auth/delete",
  user_id: userId
});

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

/***/ }),

/***/ "./src/panels/config/users/ha-config-users.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/users/ha-config-users.ts ***!
  \****************************************************/
/*! exports provided: HaConfigUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaConfigUsers", function() { return HaConfigUsers; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/user */ "./src/data/user.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_hass_tabs_subpage_data_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-tabs-subpage-data-table */ "./src/layouts/hass-tabs-subpage-data-table.ts");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
/* harmony import */ var _show_dialog_add_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-dialog-add-user */ "./src/panels/config/users/show-dialog-add-user.ts");
/* harmony import */ var _show_dialog_user_detail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show-dialog-user-detail */ "./src/panels/config/users/show-dialog-user-detail.ts");
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












let HaConfigUsers = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-config-users")], function (_initialize, _LitElement) {
  class HaConfigUsers extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigUsers,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_users",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(_language => {
          return {
            name: {
              title: this.hass.localize("ui.panel.config.users.picker.headers.name"),
              sortable: true,
              filterable: true,
              direction: "asc",
              grows: true,
              template: name => lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]`
            ${name || this.hass.localize("ui.panel.config.users.editor.unnamed_user")}
          `
            },
            group_ids: {
              title: this.hass.localize("ui.panel.config.users.picker.headers.group"),
              sortable: true,
              filterable: true,
              width: "25%",
              template: groupIds => lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]`
            ${this.hass.localize(`groups.${groupIds[0]}`)}
          `
            },
            system_generated: {
              title: this.hass.localize("ui.panel.config.users.picker.headers.system"),
              type: "icon",
              sortable: true,
              filterable: true,
              template: generated => lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]`
            ${generated ? lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]` <ha-icon icon="hass:check-circle-outline"></ha-icon> ` : ""}
          `
            }
          };
        });
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(HaConfigUsers.prototype), "firstUpdated", this).call(this, changedProperties);

        this._fetchUsers();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        backPath="/config"
        .tabs=${_ha_panel_config__WEBPACK_IMPORTED_MODULE_8__["configSections"].persons}
        .columns=${this._columns(this.hass.language)}
        .data=${this._users}
        @row-click=${this._editUser}
        hasFab
      >
      </hass-tabs-subpage-data-table>
      <ha-fab
        ?is-wide=${this.isWide}
        ?narrow=${this.narrow}
        icon="hass:plus"
        .title=${this.hass.localize("ui.panel.config.users.picker.add_user")}
        @click=${this._addUser}
        ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_3__["computeRTL"])(this.hass)}
      ></ha-fab>
    `;
      }
    }, {
      kind: "method",
      key: "_fetchUsers",
      value: async function _fetchUsers() {
        this._users = await Object(_data_user__WEBPACK_IMPORTED_MODULE_5__["fetchUsers"])(this.hass);
      }
    }, {
      kind: "method",
      key: "_editUser",
      value: function _editUser(ev) {
        const id = ev.detail.id;

        const entry = this._users.find(user => user.id === id);

        if (!entry) {
          return;
        }

        Object(_show_dialog_user_detail__WEBPACK_IMPORTED_MODULE_10__["showUserDetailDialog"])(this, {
          entry,
          updateEntry: async values => {
            const updated = await Object(_data_user__WEBPACK_IMPORTED_MODULE_5__["updateUser"])(this.hass, entry.id, values);
            this._users = this._users.map(ent => ent === entry ? updated.user : ent);
          },
          removeEntry: async () => {
            if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_6__["showConfirmationDialog"])(this, {
              title: this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion", "name", entry.name),
              dismissText: this.hass.localize("ui.common.no"),
              confirmText: this.hass.localize("ui.common.yes")
            }))) {
              return false;
            }

            try {
              await Object(_data_user__WEBPACK_IMPORTED_MODULE_5__["deleteUser"])(this.hass, entry.id);
              this._users = this._users.filter(ent => ent !== entry);
              return true;
            } catch (err) {
              return false;
            }
          }
        });
      }
    }, {
      kind: "method",
      key: "_addUser",
      value: function _addUser() {
        Object(_show_dialog_add_user__WEBPACK_IMPORTED_MODULE_9__["showAddUserDialog"])(this, {
          userAddedCallback: async user => {
            if (user) {
              this._users = [...this._users, user];
            }
          }
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
      }
      ha-fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }
      ha-fab[rtl] {
        right: auto;
        left: 16px;
      }
      ha-fab[narrow] {
        bottom: 84px;
      }
      ha-fab[rtl][is-wide] {
        bottom: 24px;
        right: auto;
        left: 24px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/users/show-dialog-add-user.ts":
/*!*********************************************************!*\
  !*** ./src/panels/config/users/show-dialog-add-user.ts ***!
  \*********************************************************/
/*! exports provided: loadAddUserDialog, showAddUserDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAddUserDialog", function() { return loadAddUserDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAddUserDialog", function() { return showAddUserDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadAddUserDialog = () => Promise.all(/*! import() | add-user-dialog */[__webpack_require__.e(13), __webpack_require__.e("vendors~add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zig~61d72af3"), __webpack_require__.e(14), __webpack_require__.e("add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zigbee-info~af4b98d6"), __webpack_require__.e("add-user-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-add-user */ "./src/panels/config/users/dialog-add-user.ts"));
const showAddUserDialog = (element, dialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-add-user",
    dialogImport: loadAddUserDialog,
    dialogParams
  });
};

/***/ }),

/***/ "./src/panels/config/users/show-dialog-user-detail.ts":
/*!************************************************************!*\
  !*** ./src/panels/config/users/show-dialog-user-detail.ts ***!
  \************************************************************/
/*! exports provided: loadUserDetailDialog, showUserDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUserDetailDialog", function() { return loadUserDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUserDetailDialog", function() { return showUserDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadUserDetailDialog = () => Promise.all(/*! import() | user-detail-dialog */[__webpack_require__.e(13), __webpack_require__.e("vendors~add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zig~61d72af3"), __webpack_require__.e(14), __webpack_require__.e("add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zigbee-info~af4b98d6"), __webpack_require__.e("user-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-user-detail */ "./src/panels/config/users/dialog-user-detail.ts"));
const showUserDetailDialog = (element, detailParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-user-detail",
    dialogImport: loadUserDetailDialog,
    dialogParams: detailParams
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXVzZXJzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3VzZXJzL2hhLWNvbmZpZy11c2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy91c2Vycy9zaG93LWRpYWxvZy1hZGQtdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy91c2Vycy9zaG93LWRpYWxvZy11c2VyLWRldGFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgdHlwZSB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IENyZWRlbnRpYWwgfSBmcm9tIFwiLi9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfQURNSU4gPSBcInN5c3RlbS1hZG1pblwiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9VU0VSID0gXCJzeXN0ZW0tdXNlcnNcIjtcbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfUkVBRF9PTkxZID0gXCJzeXN0ZW0tcmVhZC1vbmx5XCI7XG5cbmV4cG9ydCBjb25zdCBHUk9VUFMgPSBbU1lTVEVNX0dST1VQX0lEX1VTRVIsIFNZU1RFTV9HUk9VUF9JRF9BRE1JTl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNfb3duZXI6IGJvb2xlYW47XG4gIGlzX2FjdGl2ZTogYm9vbGVhbjtcbiAgc3lzdGVtX2dlbmVyYXRlZDogYm9vbGVhbjtcbiAgZ3JvdXBfaWRzOiBzdHJpbmdbXTtcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVVc2VyUGFyYW1zIHtcbiAgbmFtZT86IFVzZXJbXCJuYW1lXCJdO1xuICBncm91cF9pZHM/OiBVc2VyW1wiZ3JvdXBfaWRzXCJdO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxVc2VyW10+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hdXRoL2xpc3RcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBuYW1lOiBzdHJpbmcsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBncm91cF9pZHM/OiBVc2VyW1wiZ3JvdXBfaWRzXCJdXG4pID0+XG4gIGhhc3MuY2FsbFdTPHsgdXNlcjogVXNlciB9Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9jcmVhdGVcIixcbiAgICBuYW1lLFxuICAgIGdyb3VwX2lkcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB1c2VySWQ6IHN0cmluZyxcbiAgcGFyYW1zOiBVcGRhdGVVc2VyUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPHsgdXNlcjogVXNlciB9Pih7XG4gICAgLi4ucGFyYW1zLFxuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvdXBkYXRlXCIsXG4gICAgdXNlcl9pZDogdXNlcklkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCwgdXNlcklkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPHZvaWQ+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hdXRoL2RlbGV0ZVwiLFxuICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgfSk7XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbnRlcmZhY2UgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZXN1bHQ7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBkaXNtaXNzVGV4dD86IHN0cmluZztcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG4gIGNhbmNlbD86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0RGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGlucHV0TGFiZWw/OiBzdHJpbmc7XG4gIGlucHV0VHlwZT86IHN0cmluZztcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dQYXJhbXNcbiAgZXh0ZW5kcyBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMsXG4gICAgUHJvbXB0RGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNvbmZpcm1hdGlvbj86IGJvb2xlYW47XG4gIHByb21wdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkR2VuZXJpY0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpcm1hdGlvblwiICovIFwiLi9kaWFsb2ctYm94XCIpO1xuXG5jb25zdCBzaG93RGlhbG9nSGVscGVyID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBEaWFsb2dQYXJhbXMsXG4gIGV4dHJhPzoge1xuICAgIGNvbmZpcm1hdGlvbj86IERpYWxvZ1BhcmFtc1tcImNvbmZpcm1hdGlvblwiXTtcbiAgICBwcm9tcHQ/OiBEaWFsb2dQYXJhbXNbXCJwcm9tcHRcIl07XG4gIH1cbikgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBvcmlnQ2FuY2VsID0gZGlhbG9nUGFyYW1zLmNhbmNlbDtcbiAgICBjb25zdCBvcmlnQ29uZmlybSA9IGRpYWxvZ1BhcmFtcy5jb25maXJtO1xuXG4gICAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgICAgZGlhbG9nVGFnOiBcImRpYWxvZy1ib3hcIixcbiAgICAgIGRpYWxvZ0ltcG9ydDogbG9hZEdlbmVyaWNEaWFsb2csXG4gICAgICBkaWFsb2dQYXJhbXM6IHtcbiAgICAgICAgLi4uZGlhbG9nUGFyYW1zLFxuICAgICAgICAuLi5leHRyYSxcbiAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gbnVsbCA6IGZhbHNlKTtcbiAgICAgICAgICBpZiAob3JpZ0NhbmNlbCkge1xuICAgICAgICAgICAgb3JpZ0NhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybTogKG91dCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG91dCA6IHRydWUpO1xuICAgICAgICAgIGlmIChvcmlnQ29uZmlybSkge1xuICAgICAgICAgICAgb3JpZ0NvbmZpcm0ob3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNob3dBbGVydERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQWxlcnREaWFsb2dQYXJhbXNcbikgPT4gc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IGNvbmZpcm1hdGlvbjogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIGJvb2xlYW5cbiAgPjtcblxuZXhwb3J0IGNvbnN0IHNob3dQcm9tcHREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IFByb21wdERpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBwcm9tcHQ6IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBudWxsIHwgc3RyaW5nXG4gID47XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7IEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7XG4gIERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lcixcbiAgUm93Q2xpY2tlZEV2ZW50LFxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5pbXBvcnQgeyBkZWxldGVVc2VyLCBmZXRjaFVzZXJzLCB1cGRhdGVVc2VyLCBVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvdXNlclwiO1xuaW1wb3J0IHsgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb25maWdTZWN0aW9ucyB9IGZyb20gXCIuLi9oYS1wYW5lbC1jb25maWdcIjtcbmltcG9ydCB7IHNob3dBZGRVc2VyRGlhbG9nIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctYWRkLXVzZXJcIjtcbmltcG9ydCB7IHNob3dVc2VyRGV0YWlsRGlhbG9nIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctdXNlci1kZXRhaWxcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctdXNlcnNcIilcbmV4cG9ydCBjbGFzcyBIYUNvbmZpZ1VzZXJzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgX3VzZXJzOiBVc2VyW10gPSBbXTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcblxuICBwcml2YXRlIF9jb2x1bW5zID0gbWVtb2l6ZU9uZShcbiAgICAoX2xhbmd1YWdlKTogRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXNlcnMucGlja2VyLmhlYWRlcnMubmFtZVwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGRpcmVjdGlvbjogXCJhc2NcIixcbiAgICAgICAgICBncm93czogdHJ1ZSxcbiAgICAgICAgICB0ZW1wbGF0ZTogKG5hbWUpID0+IGh0bWxgXG4gICAgICAgICAgICAke25hbWUgfHxcbiAgICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLnVubmFtZWRfdXNlclwiKX1cbiAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgICAgICBncm91cF9pZHM6IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXNlcnMucGlja2VyLmhlYWRlcnMuZ3JvdXBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICB0ZW1wbGF0ZTogKGdyb3VwSWRzKSA9PiBodG1sYFxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoYGdyb3Vwcy4ke2dyb3VwSWRzWzBdfWApfVxuICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICAgIHN5c3RlbV9nZW5lcmF0ZWQ6IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXNlcnMucGlja2VyLmhlYWRlcnMuc3lzdGVtXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHR5cGU6IFwiaWNvblwiLFxuICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgdGVtcGxhdGU6IChnZW5lcmF0ZWQpID0+IGh0bWxgXG4gICAgICAgICAgICAke2dlbmVyYXRlZFxuICAgICAgICAgICAgICA/IGh0bWxgIDxoYS1pY29uIGljb249XCJoYXNzOmNoZWNrLWNpcmNsZS1vdXRsaW5lXCI+PC9oYS1pY29uPiBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICk7XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIHRoaXMuX2ZldGNoVXNlcnMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZVxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAucm91dGU9JHt0aGlzLnJvdXRlfVxuICAgICAgICBiYWNrUGF0aD1cIi9jb25maWdcIlxuICAgICAgICAudGFicz0ke2NvbmZpZ1NlY3Rpb25zLnBlcnNvbnN9XG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLmhhc3MubGFuZ3VhZ2UpfVxuICAgICAgICAuZGF0YT0ke3RoaXMuX3VzZXJzfVxuICAgICAgICBAcm93LWNsaWNrPSR7dGhpcy5fZWRpdFVzZXJ9XG4gICAgICAgIGhhc0ZhYlxuICAgICAgPlxuICAgICAgPC9oYXNzLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlPlxuICAgICAgPGhhLWZhYlxuICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICA/bmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAudGl0bGU9JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcudXNlcnMucGlja2VyLmFkZF91c2VyXCIpfVxuICAgICAgICBAY2xpY2s9JHt0aGlzLl9hZGRVc2VyfVxuICAgICAgICA/cnRsPSR7Y29tcHV0ZVJUTCh0aGlzLmhhc3MpfVxuICAgICAgPjwvaGEtZmFiPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaFVzZXJzKCkge1xuICAgIHRoaXMuX3VzZXJzID0gYXdhaXQgZmV0Y2hVc2Vycyh0aGlzLmhhc3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZWRpdFVzZXIoZXY6IEhBU1NEb21FdmVudDxSb3dDbGlja2VkRXZlbnQ+KSB7XG4gICAgY29uc3QgaWQgPSBldi5kZXRhaWwuaWQ7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl91c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09PSBpZCk7XG5cbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hvd1VzZXJEZXRhaWxEaWFsb2codGhpcywge1xuICAgICAgZW50cnksXG4gICAgICB1cGRhdGVFbnRyeTogYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdXBkYXRlVXNlcih0aGlzLmhhc3MhLCBlbnRyeSEuaWQsIHZhbHVlcyk7XG4gICAgICAgIHRoaXMuX3VzZXJzID0gdGhpcy5fdXNlcnMhLm1hcCgoZW50KSA9PlxuICAgICAgICAgIGVudCA9PT0gZW50cnkgPyB1cGRhdGVkLnVzZXIgOiBlbnRcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVFbnRyeTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShhd2FpdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IuY29uZmlybV91c2VyX2RlbGV0aW9uXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgICBlbnRyeS5uYW1lXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZGlzbWlzc1RleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24ubm9cIiksXG4gICAgICAgICAgICBjb25maXJtVGV4dDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi55ZXNcIiksXG4gICAgICAgICAgfSkpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgZGVsZXRlVXNlcih0aGlzLmhhc3MhLCBlbnRyeSEuaWQpO1xuICAgICAgICAgIHRoaXMuX3VzZXJzID0gdGhpcy5fdXNlcnMhLmZpbHRlcigoZW50KSA9PiBlbnQgIT09IGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVXNlcigpIHtcbiAgICBzaG93QWRkVXNlckRpYWxvZyh0aGlzLCB7XG4gICAgICB1c2VyQWRkZWRDYWxsYmFjazogYXN5bmMgKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICB0aGlzLl91c2VycyA9IFsuLi50aGlzLl91c2VycywgdXNlcl07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtZmFiIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgaGEtZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICByaWdodDogMjRweDtcbiAgICAgIH1cbiAgICAgIGhhLWZhYltydGxdIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1mYWJbbmFycm93XSB7XG4gICAgICAgIGJvdHRvbTogODRweDtcbiAgICAgIH1cbiAgICAgIGhhLWZhYltydGxdW2lzLXdpZGVdIHtcbiAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMjRweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvdXNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkZFVzZXJEaWFsb2dQYXJhbXMge1xuICB1c2VyQWRkZWRDYWxsYmFjazogKHVzZXI6IFVzZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkQWRkVXNlckRpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFkZC11c2VyLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctYWRkLXVzZXJcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93QWRkVXNlckRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogQWRkVXNlckRpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWFkZC11c2VyXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkQWRkVXNlckRpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IFVwZGF0ZVVzZXJQYXJhbXMsIFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS91c2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRldGFpbERpYWxvZ1BhcmFtcyB7XG4gIGVudHJ5OiBVc2VyO1xuICB1cGRhdGVFbnRyeTogKHVwZGF0ZXM6IFBhcnRpYWw8VXBkYXRlVXNlclBhcmFtcz4pID0+IFByb21pc2U8dW5rbm93bj47XG4gIHJlbW92ZUVudHJ5OiAoKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZFVzZXJEZXRhaWxEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ1c2VyLWRldGFpbC1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLXVzZXItZGV0YWlsXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd1VzZXJEZXRhaWxEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkZXRhaWxQYXJhbXM6IFVzZXJEZXRhaWxEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy11c2VyLWRldGFpbFwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZFVzZXJEZXRhaWxEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBkZXRhaWxQYXJhbXMsXG4gIH0pO1xufTtcbiJdLCJtYXBwaW5n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
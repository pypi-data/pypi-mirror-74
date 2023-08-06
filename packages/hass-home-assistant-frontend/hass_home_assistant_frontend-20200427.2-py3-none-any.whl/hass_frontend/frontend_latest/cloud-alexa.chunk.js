(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-alexa"],{

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(value => part => {
  if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
    if (value !== part.value) {
      const name = part.committer.name;
      part.committer.element.removeAttribute(name);
    }
  } else {
    part.setValue(value);
  }
});

/***/ }),

/***/ "./src/common/datetime/relative_time.ts":
/*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relativeTime; });
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
const tests = [60, 60, 24, 7];
const langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize, options = {}) {
  const compareTime = options.compareTime || new Date();
  let delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
  const tense = delta >= 0 ? "past" : "future";
  delta = Math.abs(delta);
  let timeDesc;

  for (let i = 0; i < tests.length; i++) {
    if (delta < tests[i]) {
      delta = Math.floor(delta);
      timeDesc = localize(`ui.components.relative_time.duration.${langKey[i]}`, "count", delta);
      break;
    }

    delta /= tests[i];
  }

  if (timeDesc === undefined) {
    delta = Math.floor(delta);
    timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
  }

  return options.includeTense === false ? timeDesc : localize(`ui.components.relative_time.${tense}`, "time", timeDesc);
}

/***/ }),

/***/ "./src/common/entity/entity_filter.ts":
/*!********************************************!*\
  !*** ./src/common/entity/entity_filter.ts ***!
  \********************************************/
/*! exports provided: isEmptyFilter, generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyFilter", function() { return isEmptyFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const isEmptyFilter = filter => filter.include_domains.length + filter.include_entities.length + filter.exclude_domains.length + filter.exclude_entities.length === 0;
const generateFilter = (includeDomains, includeEntities, excludeDomains, excludeEntities) => {
  const includeDomainsSet = new Set(includeDomains);
  const includeEntitiesSet = new Set(includeEntities);
  const excludeDomainsSet = new Set(excludeDomains);
  const excludeEntitiesSet = new Set(excludeEntities);
  const haveInclude = includeDomainsSet.size > 0 || includeEntitiesSet.size > 0;
  const haveExclude = excludeDomainsSet.size > 0 || excludeEntitiesSet.size > 0; // Case 1 - no includes or excludes - pass all entities

  if (!haveInclude && !haveExclude) {
    return () => true;
  } // Case 2 - includes, no excludes - only include specified entities


  if (haveInclude && !haveExclude) {
    return entityId => includeEntitiesSet.has(entityId) || includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId));
  } // Case 3 - excludes, no includes - only exclude specified entities


  if (!haveInclude && haveExclude) {
    return entityId => !excludeEntitiesSet.has(entityId) && !excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId));
  } // Case 4 - both includes and excludes specified
  // Case 4a - include domain specified
  //  - if domain is included, pass if entity not excluded
  //  - if domain is not included, pass if entity is included
  // note: if both include and exclude domains specified,
  //   the exclude domains are ignored


  if (includeDomainsSet.size) {
    return entityId => includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId)) ? !excludeEntitiesSet.has(entityId) : includeEntitiesSet.has(entityId);
  } // Case 4b - exclude domain specified
  //  - if domain is excluded, pass if entity is included
  //  - if domain is not excluded, pass if entity not excluded


  if (excludeDomainsSet.size) {
    return entityId => excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId)) ? includeEntitiesSet.has(entityId) : !excludeEntitiesSet.has(entityId);
  } // Case 4c - neither include or exclude domain specified
  //  - Only pass if entity is included.  Ignore entity excludes.


  return entityId => includeEntitiesSet.has(entityId);
};

/***/ }),

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

/***/ "./src/components/entity/state-info.js":
/*!*********************************************!*\
  !*** ./src/components/entity/state-info.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _ha_relative_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");

/* eslint-plugin-disable lit */







class StateInfo extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.styleTemplate} ${this.stateBadgeTemplate} ${this.infoTemplate}
    `;
  }

  static get styleTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          @apply --paper-font-body1;
          min-width: 120px;
          white-space: nowrap;
        }

        state-badge {
          float: left;
        }

        :host([rtl]) state-badge {
          float: right;
        }

        .info {
          margin-left: 56px;
        }

        :host([rtl]) .info {
          margin-right: 56px;
          margin-left: 0;
          text-align: right;
        }

        .name {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          line-height: 40px;
        }

        .name[in-dialog],
        :host([secondary-line]) .name {
          line-height: 20px;
        }

        .time-ago,
        .extra-info,
        .extra-info > * {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>
    `;
  }

  static get stateBadgeTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]` <state-badge state-obj="[[stateObj]]"></state-badge> `;
  }

  static get infoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="info">
        <div class="name" in-dialog$="[[inDialog]]">
          [[computeStateName(stateObj)]]
        </div>

        <template is="dom-if" if="[[inDialog]]">
          <div class="time-ago">
            <ha-relative-time
              hass="[[hass]]"
              datetime="[[stateObj.last_changed]]"
            ></ha-relative-time>
          </div>
        </template>
        <template is="dom-if" if="[[!inDialog]]">
          <div class="extra-info"><slot> </slot></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: () => false
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "computeRTL(hass)"
      }
    };
  }

  computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj);
  }

  computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_3__["computeRTL"])(hass);
  }

}

customElements.define("state-info", StateInfo);

/***/ }),

/***/ "./src/components/ha-relative-time.js":
/*!********************************************!*\
  !*** ./src/components/ha-relative-time.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");

/* eslint-plugin-disable lit */




/*
 * @appliesMixin LocalizeMixin
 */

class HaRelativeTime extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get properties() {
    return {
      hass: Object,
      datetime: {
        type: String,
        observer: "datetimeChanged"
      },
      datetimeObj: {
        type: Object,
        observer: "datetimeObjChanged"
      },
      parsedDateTime: Object
    };
  }

  constructor() {
    super();
    this.updateRelative = this.updateRelative.bind(this);
  }

  connectedCallback() {
    super.connectedCallback(); // update every 60 seconds

    this.updateInterval = setInterval(this.updateRelative, 60000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.updateInterval);
  }

  datetimeChanged(newVal) {
    this.parsedDateTime = newVal ? new Date(newVal) : null;
    this.updateRelative();
  }

  datetimeObjChanged(newVal) {
    this.parsedDateTime = newVal;
    this.updateRelative();
  }

  updateRelative() {
    const root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);

    if (!this.parsedDateTime) {
      root.innerHTML = this.localize("ui.components.relative_time.never");
    } else {
      root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
    }
  }

}

customElements.define("ha-relative-time", HaRelativeTime);

/***/ }),

/***/ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts":
/*!******************************************************************!*\
  !*** ./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts ***!
  \******************************************************************/
/*! exports provided: loadDomainTogglerDialog, showDomainTogglerDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDomainTogglerDialog", function() { return loadDomainTogglerDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDomainTogglerDialog", function() { return showDomainTogglerDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadDomainTogglerDialog = () => Promise.all(/*! import() | dialog-domain-toggler */[__webpack_require__.e(1), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e("dialog-domain-toggler")]).then(__webpack_require__.bind(null, /*! ./dialog-domain-toggler */ "./src/dialogs/domain-toggler/dialog-domain-toggler.ts"));
const showDomainTogglerDialog = (element, dialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-domain-toggler",
    dialogImport: loadDomainTogglerDialog,
    dialogParams
  });
};

/***/ }),

/***/ "./src/panels/config/cloud/alexa/cloud-alexa.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/cloud/alexa/cloud-alexa.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/entity/entity_filter */ "./src/common/entity/entity_filter.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../data/alexa */ "./src/data/alexa.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
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

















const DEFAULT_CONFIG_EXPOSE = true;
const IGNORE_INTERFACES = ["Alexa.EndpointHealth"];

const configIsExposed = config => config.should_expose === undefined ? DEFAULT_CONFIG_EXPOSE : config.should_expose;

let CloudAlexa = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("cloud-alexa")], function (_initialize, _LitElement) {
  class CloudAlexa extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: CloudAlexa,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean
      })],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_entities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_entityConfigs",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_popstateSyncAttached",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_popstateReloadStatusAttached",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_isInitialExposed",
      value: void 0
    }, {
      kind: "field",
      key: "_getEntityFilterFunc",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(filter => Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_6__["generateFilter"])(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities));
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this._entities === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` <hass-loading-screen></hass-loading-screen> `;
        }

        const emptyFilter = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_6__["isEmptyFilter"])(this.cloudStatus.alexa_entities);

        const filterFunc = this._getEntityFilterFunc(this.cloudStatus.alexa_entities); // We will only generate `isInitialExposed` during first render.
        // On each subsequent render we will use the same set so that cards
        // will not jump around when we change the exposed setting.


        const showInExposed = this._isInitialExposed || new Set();
        const trackExposed = this._isInitialExposed === undefined;
        let selected = 0; // On first render we decide which cards show in which category.
        // That way cards won't jump around when changing values.

        const exposedCards = [];
        const notExposedCards = [];

        this._entities.forEach(entity => {
          const stateObj = this.hass.states[entity.entity_id];
          const config = this._entityConfigs[entity.entity_id] || {};
          const isExposed = emptyFilter ? configIsExposed(config) : filterFunc(entity.entity_id);

          if (isExposed) {
            selected++;

            if (trackExposed) {
              showInExposed.add(entity.entity_id);
            }
          }

          const target = showInExposed.has(entity.entity_id) ? exposedCards : notExposedCards;
          target.push(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        <ha-card>
          <div class="card-content">
            <state-info
              .hass=${this.hass}
              .stateObj=${stateObj}
              secondary-line
              @click=${this._showMoreInfo}
            >
              ${entity.interfaces.filter(ifc => !IGNORE_INTERFACES.includes(ifc)).map(ifc => ifc.replace("Alexa.", "").replace("Controller", "")).join(", ")}
            </state-info>
            <ha-switch
              .entityId=${entity.entity_id}
              .disabled=${!emptyFilter}
              .checked=${isExposed}
              @change=${this._exposeChanged}
            >
              ${this.hass.localize("ui.panel.config.cloud.alexa.expose")}
            </ha-switch>
          </div>
        </ha-card>
      `);
        });

        if (trackExposed) {
          this._isInitialExposed = showInExposed;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <hass-subpage header="${this.hass.localize("ui.panel.config.cloud.alexa.title")}">
        <span slot="toolbar-icon">
          ${selected}${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]` selected ` : ""}
        </span>
        ${emptyFilter ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <paper-icon-button
                  slot="toolbar-icon"
                  icon="hass:tune"
                  @click=${this._openDomainToggler}
                ></paper-icon-button>
              ` : ""}
        ${!emptyFilter ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <div class="banner">
                  ${this.hass.localize("ui.panel.config.cloud.alexa.banner")}
                </div>
              ` : ""}
          ${exposedCards.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  <h1>
                    ${this.hass.localize("ui.panel.config.cloud.alexa.exposed_entities")}
                  </h1>
                  <div class="content">${exposedCards}</div>
                ` : ""}
          ${notExposedCards.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  <h1>
                    ${this.hass.localize("ui.panel.config.cloud.alexa.not_exposed_entities")}
                  </h1>
                  <div class="content">${notExposedCards}</div>
                ` : ""}
        </div>
      </hass-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(CloudAlexa.prototype), "firstUpdated", this).call(this, changedProps);

        this._fetchData();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(CloudAlexa.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("cloudStatus")) {
          this._entityConfigs = this.cloudStatus.prefs.alexa_entity_configs;
        }
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        const entities = await Object(_data_alexa__WEBPACK_IMPORTED_MODULE_11__["fetchCloudAlexaEntities"])(this.hass);
        entities.sort((a, b) => {
          const stateA = this.hass.states[a.entity_id];
          const stateB = this.hass.states[b.entity_id];
          return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_7__["compare"])(stateA ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateA) : a.entity_id, stateB ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateB) : b.entity_id);
        });
        this._entities = entities;
      }
    }, {
      kind: "method",
      key: "_showMoreInfo",
      value: function _showMoreInfo(ev) {
        const entityId = ev.currentTarget.stateObj.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_exposeChanged",
      value: async function _exposeChanged(ev) {
        const entityId = ev.currentTarget.entityId;
        const newExposed = ev.target.checked;
        await this._updateExposed(entityId, newExposed);
      }
    }, {
      kind: "method",
      key: "_updateExposed",
      value: async function _updateExposed(entityId, newExposed) {
        const curExposed = configIsExposed(this._entityConfigs[entityId] || {});

        if (newExposed === curExposed) {
          return;
        }

        await this._updateConfig(entityId, {
          should_expose: newExposed
        });

        this._ensureEntitySync();
      }
    }, {
      kind: "method",
      key: "_updateConfig",
      value: async function _updateConfig(entityId, values) {
        const updatedConfig = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_12__["updateCloudAlexaEntityConfig"])(this.hass, entityId, values);
        this._entityConfigs = Object.assign({}, this._entityConfigs, {
          [entityId]: updatedConfig
        });

        this._ensureStatusReload();
      }
    }, {
      kind: "method",
      key: "_openDomainToggler",
      value: function _openDomainToggler() {
        Object(_dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__["showDomainTogglerDialog"])(this, {
          domains: this._entities.map(entity => Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__["computeDomain"])(entity.entity_id)).filter((value, idx, self) => self.indexOf(value) === idx),
          toggleDomain: (domain, turnOn) => {
            this._entities.forEach(entity => {
              if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__["computeDomain"])(entity.entity_id) === domain) {
                this._updateExposed(entity.entity_id, turnOn);
              }
            });
          }
        });
      }
    }, {
      kind: "method",
      key: "_ensureStatusReload",
      value: function _ensureStatusReload() {
        if (this._popstateReloadStatusAttached) {
          return;
        }

        this._popstateReloadStatusAttached = true; // Cache parent because by the time popstate happens,
        // this element is detached

        const parent = this.parentElement;
        window.addEventListener("popstate", () => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(parent, "ha-refresh-cloud-status"), {
          once: true
        });
      }
    }, {
      kind: "method",
      key: "_ensureEntitySync",
      value: function _ensureEntitySync() {
        if (this._popstateSyncAttached) {
          return;
        }

        this._popstateSyncAttached = true; // Cache parent because by the time popstate happens,
        // this element is detached
        // const parent = this.parentElement!;

        window.addEventListener("popstate", () => {// We don't have anything yet.
          // showToast(parent, { message: "Synchronizing changes to Google." });
          // cloudSyncGoogleAssistant(this.hass);
        }, {
          once: true
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      .banner {
        color: var(--primary-text-color);
        background-color: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        padding: 16px 8px;
        text-align: center;
      }
      h1 {
        color: var(--primary-text-color);
        font-size: 24px;
        letter-spacing: -0.012em;
        margin-bottom: 0;
        padding: 0 8px;
      }
      .content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 8px 8px;
        padding: 8px;
      }
      ha-switch {
        clear: both;
      }
      .card-content {
        padding-bottom: 12px;
      }
      state-info {
        cursor: pointer;
      }
      ha-switch {
        padding: 8px 0;
      }

      @media all and (max-width: 450px) {
        ha-card {
          max-width: 100%;
        }
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYWxleGEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXJlbGF0aXZlLXRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWxleGEvY2xvdWQtYWxleGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG4vKipcbiAqIEZvciBBdHRyaWJ1dGVQYXJ0cywgc2V0cyB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGFuZCByZW1vdmVzXG4gKiB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogRm9yIG90aGVyIHBhcnQgdHlwZXMsIHRoaXMgZGlyZWN0aXZlIGlzIGEgbm8tb3AuXG4gKi9cbmV4cG9ydCBjb25zdCBpZkRlZmluZWQgPSBkaXJlY3RpdmUoKHZhbHVlOiB1bmtub3duKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkge1xuICAgIGlmICh2YWx1ZSAhPT0gcGFydC52YWx1ZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHBhcnQuY29tbWl0dGVyLm5hbWU7XG4gICAgICBwYXJ0LmNvbW1pdHRlci5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBkYXRlIG9iamVjdCBhcyByZWxhdGl2ZSB0aW1lIGZyb20gbm93LlxuICpcbiAqIEV4YW1wbGUgb3V0cHV0OiA1IG1pbnV0ZXMgYWdvLCBpbiAzIGRheXMuXG4gKi9cbmNvbnN0IHRlc3RzID0gWzYwLCA2MCwgMjQsIDddO1xuY29uc3QgbGFuZ0tleSA9IFtcInNlY29uZFwiLCBcIm1pbnV0ZVwiLCBcImhvdXJcIiwgXCJkYXlcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbGF0aXZlVGltZShcbiAgZGF0ZU9iajogRGF0ZSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgb3B0aW9uczoge1xuICAgIGNvbXBhcmVUaW1lPzogRGF0ZTtcbiAgICBpbmNsdWRlVGVuc2U/OiBib29sZWFuO1xuICB9ID0ge31cbik6IHN0cmluZyB7XG4gIGNvbnN0IGNvbXBhcmVUaW1lID0gb3B0aW9ucy5jb21wYXJlVGltZSB8fCBuZXcgRGF0ZSgpO1xuICBsZXQgZGVsdGEgPSAoY29tcGFyZVRpbWUuZ2V0VGltZSgpIC0gZGF0ZU9iai5nZXRUaW1lKCkpIC8gMTAwMDtcbiAgY29uc3QgdGVuc2UgPSBkZWx0YSA+PSAwID8gXCJwYXN0XCIgOiBcImZ1dHVyZVwiO1xuICBkZWx0YSA9IE1hdGguYWJzKGRlbHRhKTtcblxuICBsZXQgdGltZURlc2M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkZWx0YSA8IHRlc3RzW2ldKSB7XG4gICAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgICAgYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi4ke2xhbmdLZXlbaV19YCxcbiAgICAgICAgXCJjb3VudFwiLFxuICAgICAgICBkZWx0YVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlbHRhIC89IHRlc3RzW2ldO1xuICB9XG5cbiAgaWYgKHRpbWVEZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICBcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi53ZWVrXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBkZWx0YVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucy5pbmNsdWRlVGVuc2UgPT09IGZhbHNlXG4gICAgPyB0aW1lRGVzY1xuICAgIDogbG9jYWxpemUoYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS4ke3RlbnNlfWAsIFwidGltZVwiLCB0aW1lRGVzYyk7XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IHR5cGUgRmlsdGVyRnVuYyA9IChlbnRpdHlJZDogc3RyaW5nKSA9PiBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUZpbHRlciB7XG4gIGluY2x1ZGVfZG9tYWluczogc3RyaW5nW107XG4gIGluY2x1ZGVfZW50aXRpZXM6IHN0cmluZ1tdO1xuICBleGNsdWRlX2RvbWFpbnM6IHN0cmluZ1tdO1xuICBleGNsdWRlX2VudGl0aWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzRW1wdHlGaWx0ZXIgPSAoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gIGZpbHRlci5pbmNsdWRlX2RvbWFpbnMubGVuZ3RoICtcbiAgICBmaWx0ZXIuaW5jbHVkZV9lbnRpdGllcy5sZW5ndGggK1xuICAgIGZpbHRlci5leGNsdWRlX2RvbWFpbnMubGVuZ3RoICtcbiAgICBmaWx0ZXIuZXhjbHVkZV9lbnRpdGllcy5sZW5ndGggPT09XG4gIDA7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUZpbHRlciA9IChcbiAgaW5jbHVkZURvbWFpbnM/OiBzdHJpbmdbXSxcbiAgaW5jbHVkZUVudGl0aWVzPzogc3RyaW5nW10sXG4gIGV4Y2x1ZGVEb21haW5zPzogc3RyaW5nW10sXG4gIGV4Y2x1ZGVFbnRpdGllcz86IHN0cmluZ1tdXG4pOiBGaWx0ZXJGdW5jID0+IHtcbiAgY29uc3QgaW5jbHVkZURvbWFpbnNTZXQgPSBuZXcgU2V0KGluY2x1ZGVEb21haW5zKTtcbiAgY29uc3QgaW5jbHVkZUVudGl0aWVzU2V0ID0gbmV3IFNldChpbmNsdWRlRW50aXRpZXMpO1xuICBjb25zdCBleGNsdWRlRG9tYWluc1NldCA9IG5ldyBTZXQoZXhjbHVkZURvbWFpbnMpO1xuICBjb25zdCBleGNsdWRlRW50aXRpZXNTZXQgPSBuZXcgU2V0KGV4Y2x1ZGVFbnRpdGllcyk7XG5cbiAgY29uc3QgaGF2ZUluY2x1ZGUgPSBpbmNsdWRlRG9tYWluc1NldC5zaXplID4gMCB8fCBpbmNsdWRlRW50aXRpZXNTZXQuc2l6ZSA+IDA7XG4gIGNvbnN0IGhhdmVFeGNsdWRlID0gZXhjbHVkZURvbWFpbnNTZXQuc2l6ZSA+IDAgfHwgZXhjbHVkZUVudGl0aWVzU2V0LnNpemUgPiAwO1xuXG4gIC8vIENhc2UgMSAtIG5vIGluY2x1ZGVzIG9yIGV4Y2x1ZGVzIC0gcGFzcyBhbGwgZW50aXRpZXNcbiAgaWYgKCFoYXZlSW5jbHVkZSAmJiAhaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKCkgPT4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENhc2UgMiAtIGluY2x1ZGVzLCBubyBleGNsdWRlcyAtIG9ubHkgaW5jbHVkZSBzcGVjaWZpZWQgZW50aXRpZXNcbiAgaWYgKGhhdmVJbmNsdWRlICYmICFoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKSB8fFxuICAgICAgaW5jbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKTtcbiAgfVxuXG4gIC8vIENhc2UgMyAtIGV4Y2x1ZGVzLCBubyBpbmNsdWRlcyAtIG9ubHkgZXhjbHVkZSBzcGVjaWZpZWQgZW50aXRpZXNcbiAgaWYgKCFoYXZlSW5jbHVkZSAmJiBoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCkgJiZcbiAgICAgICFleGNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpO1xuICB9XG5cbiAgLy8gQ2FzZSA0IC0gYm90aCBpbmNsdWRlcyBhbmQgZXhjbHVkZXMgc3BlY2lmaWVkXG4gIC8vIENhc2UgNGEgLSBpbmNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIGluY2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBub3QgZXhjbHVkZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIG5vdCBpbmNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWRcbiAgLy8gbm90ZTogaWYgYm90aCBpbmNsdWRlIGFuZCBleGNsdWRlIGRvbWFpbnMgc3BlY2lmaWVkLFxuICAvLyAgIHRoZSBleGNsdWRlIGRvbWFpbnMgYXJlIGlnbm9yZWRcbiAgaWYgKGluY2x1ZGVEb21haW5zU2V0LnNpemUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgaW5jbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKVxuICAgICAgICA/ICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKVxuICAgICAgICA6IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xuICB9XG5cbiAgLy8gQ2FzZSA0YiAtIGV4Y2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBpZiBkb21haW4gaXMgZXhjbHVkZWQsIHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBub3QgZXhjbHVkZWQsIHBhc3MgaWYgZW50aXR5IG5vdCBleGNsdWRlZFxuICBpZiAoZXhjbHVkZURvbWFpbnNTZXQuc2l6ZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBleGNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpXG4gICAgICAgID8gaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZClcbiAgICAgICAgOiAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG4gIH1cblxuICAvLyBDYXNlIDRjIC0gbmVpdGhlciBpbmNsdWRlIG9yIGV4Y2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBPbmx5IHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkLiAgSWdub3JlIGVudGl0eSBleGNsdWRlcy5cbiAgcmV0dXJuIChlbnRpdHlJZCkgPT4gaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vaGEtcmVsYXRpdmUtdGltZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1iYWRnZVwiO1xuXG5jbGFzcyBTdGF0ZUluZm8gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZX0gJHt0aGlzLnN0YXRlQmFkZ2VUZW1wbGF0ZX0gJHt0aGlzLmluZm9UZW1wbGF0ZX1cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS1iYWRnZSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgc3RhdGUtYmFkZ2Uge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lW2luLWRpYWxvZ10sXG4gICAgICAgIDpob3N0KFtzZWNvbmRhcnktbGluZV0pIC5uYW1lIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLWFnbyxcbiAgICAgICAgLmV4dHJhLWluZm8sXG4gICAgICAgIC5leHRyYS1pbmZvID4gKiB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVCYWRnZVRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYCA8c3RhdGUtYmFkZ2Ugc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9zdGF0ZS1iYWRnZT4gYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIiBpbi1kaWFsb2ckPVwiW1tpbkRpYWxvZ11dXCI+XG4gICAgICAgICAgW1tjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpbkRpYWxvZ11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtYWdvXCI+XG4gICAgICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBkYXRldGltZT1cIltbc3RhdGVPYmoubGFzdF9jaGFuZ2VkXV1cIlxuICAgICAgICAgICAgPjwvaGEtcmVsYXRpdmUtdGltZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFpbkRpYWxvZ11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWluZm9cIj48c2xvdD4gPC9zbG90PjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiAoKSA9PiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtaW5mb1wiLCBTdGF0ZUluZm8pO1xuIiwiaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbVwiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9yZWxhdGl2ZV90aW1lXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFSZWxhdGl2ZVRpbWUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgZGF0ZXRpbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGRhdGV0aW1lT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWREYXRlVGltZTogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUgPSB0aGlzLnVwZGF0ZVJlbGF0aXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIHVwZGF0ZSBldmVyeSA2MCBzZWNvbmRzXG4gICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlUmVsYXRpdmUsIDYwMDAwKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnVwZGF0ZUludGVydmFsKTtcbiAgfVxuXG4gIGRhdGV0aW1lQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsID8gbmV3IERhdGUobmV3VmFsKSA6IG51bGw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICBkYXRldGltZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIHVwZGF0ZVJlbGF0aXZlKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb20odGhpcyk7XG4gICAgaWYgKCF0aGlzLnBhcnNlZERhdGVUaW1lKSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHRoaXMubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUubmV2ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gcmVsYXRpdmVUaW1lKHRoaXMucGFyc2VkRGF0ZVRpbWUsIHRoaXMubG9jYWxpemUpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1yZWxhdGl2ZS10aW1lXCIsIEhhUmVsYXRpdmVUaW1lKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBIYURvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXMge1xuICBkb21haW5zOiBzdHJpbmdbXTtcbiAgdG9nZ2xlRG9tYWluOiAoZG9tYWluOiBzdHJpbmcsIHR1cm5PbjogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWREb21haW5Ub2dnbGVyRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLWRvbWFpbi10b2dnbGVyXCIgKi8gXCIuL2RpYWxvZy1kb21haW4tdG9nZ2xlclwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogSGFEb21haW5Ub2dnbGVyRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZG9tYWluLXRvZ2dsZXJcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWREb21haW5Ub2dnbGVyRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7XG4gIEVudGl0eUZpbHRlcixcbiAgZ2VuZXJhdGVGaWx0ZXIsXG4gIGlzRW1wdHlGaWx0ZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2VudGl0eV9maWx0ZXJcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgdHlwZSB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBBbGV4YUVudGl0eSwgZmV0Y2hDbG91ZEFsZXhhRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9hbGV4YVwiO1xuaW1wb3J0IHtcbiAgQWxleGFFbnRpdHlDb25maWcsXG4gIENsb3VkUHJlZmVyZW5jZXMsXG4gIENsb3VkU3RhdHVzTG9nZ2VkSW4sXG4gIHVwZGF0ZUNsb3VkQWxleGFFbnRpdHlDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kaWFsb2dzL2RvbWFpbi10b2dnbGVyL3Nob3ctZGlhbG9nLWRvbWFpbi10b2dnbGVyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3MtbG9hZGluZy1zY3JlZW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgREVGQVVMVF9DT05GSUdfRVhQT1NFID0gdHJ1ZTtcbmNvbnN0IElHTk9SRV9JTlRFUkZBQ0VTID0gW1wiQWxleGEuRW5kcG9pbnRIZWFsdGhcIl07XG5cbmNvbnN0IGNvbmZpZ0lzRXhwb3NlZCA9IChjb25maWc6IEFsZXhhRW50aXR5Q29uZmlnKSA9PlxuICBjb25maWcuc2hvdWxkX2V4cG9zZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBERUZBVUxUX0NPTkZJR19FWFBPU0VcbiAgICA6IGNvbmZpZy5zaG91bGRfZXhwb3NlO1xuXG5AY3VzdG9tRWxlbWVudChcImNsb3VkLWFsZXhhXCIpXG5jbGFzcyBDbG91ZEFsZXhhIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgY2xvdWRTdGF0dXMhOiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXRpZXM/OiBBbGV4YUVudGl0eVtdO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgX2VudGl0eUNvbmZpZ3M6IENsb3VkUHJlZmVyZW5jZXNbXCJhbGV4YV9lbnRpdHlfY29uZmlnc1wiXSA9IHt9O1xuXG4gIHByaXZhdGUgX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2lzSW5pdGlhbEV4cG9zZWQ/OiBTZXQ8c3RyaW5nPjtcblxuICBwcml2YXRlIF9nZXRFbnRpdHlGaWx0ZXJGdW5jID0gbWVtb2l6ZU9uZSgoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gICAgZ2VuZXJhdGVGaWx0ZXIoXG4gICAgICBmaWx0ZXIuaW5jbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmluY2x1ZGVfZW50aXRpZXMsXG4gICAgICBmaWx0ZXIuZXhjbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmV4Y2x1ZGVfZW50aXRpZXNcbiAgICApXG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKHRoaXMuX2VudGl0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYCA8aGFzcy1sb2FkaW5nLXNjcmVlbj48L2hhc3MtbG9hZGluZy1zY3JlZW4+IGA7XG4gICAgfVxuICAgIGNvbnN0IGVtcHR5RmlsdGVyID0gaXNFbXB0eUZpbHRlcih0aGlzLmNsb3VkU3RhdHVzLmFsZXhhX2VudGl0aWVzKTtcbiAgICBjb25zdCBmaWx0ZXJGdW5jID0gdGhpcy5fZ2V0RW50aXR5RmlsdGVyRnVuYyhcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMuYWxleGFfZW50aXRpZXNcbiAgICApO1xuXG4gICAgLy8gV2Ugd2lsbCBvbmx5IGdlbmVyYXRlIGBpc0luaXRpYWxFeHBvc2VkYCBkdXJpbmcgZmlyc3QgcmVuZGVyLlxuICAgIC8vIE9uIGVhY2ggc3Vic2VxdWVudCByZW5kZXIgd2Ugd2lsbCB1c2UgdGhlIHNhbWUgc2V0IHNvIHRoYXQgY2FyZHNcbiAgICAvLyB3aWxsIG5vdCBqdW1wIGFyb3VuZCB3aGVuIHdlIGNoYW5nZSB0aGUgZXhwb3NlZCBzZXR0aW5nLlxuICAgIGNvbnN0IHNob3dJbkV4cG9zZWQgPSB0aGlzLl9pc0luaXRpYWxFeHBvc2VkIHx8IG5ldyBTZXQoKTtcbiAgICBjb25zdCB0cmFja0V4cG9zZWQgPSB0aGlzLl9pc0luaXRpYWxFeHBvc2VkID09PSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSAwO1xuXG4gICAgLy8gT24gZmlyc3QgcmVuZGVyIHdlIGRlY2lkZSB3aGljaCBjYXJkcyBzaG93IGluIHdoaWNoIGNhdGVnb3J5LlxuICAgIC8vIFRoYXQgd2F5IGNhcmRzIHdvbid0IGp1bXAgYXJvdW5kIHdoZW4gY2hhbmdpbmcgdmFsdWVzLlxuICAgIGNvbnN0IGV4cG9zZWRDYXJkczogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuICAgIGNvbnN0IG5vdEV4cG9zZWRDYXJkczogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuXG4gICAgdGhpcy5fZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF07XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eS5lbnRpdHlfaWRdIHx8IHt9O1xuICAgICAgY29uc3QgaXNFeHBvc2VkID0gZW1wdHlGaWx0ZXJcbiAgICAgICAgPyBjb25maWdJc0V4cG9zZWQoY29uZmlnKVxuICAgICAgICA6IGZpbHRlckZ1bmMoZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICBpZiAoaXNFeHBvc2VkKSB7XG4gICAgICAgIHNlbGVjdGVkKys7XG5cbiAgICAgICAgaWYgKHRyYWNrRXhwb3NlZCkge1xuICAgICAgICAgIHNob3dJbkV4cG9zZWQuYWRkKGVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IHNob3dJbkV4cG9zZWQuaGFzKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICAgID8gZXhwb3NlZENhcmRzXG4gICAgICAgIDogbm90RXhwb3NlZENhcmRzO1xuXG4gICAgICB0YXJnZXQucHVzaChodG1sYFxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7c3RhdGVPYmp9XG4gICAgICAgICAgICAgIHNlY29uZGFyeS1saW5lXG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dNb3JlSW5mb31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHtlbnRpdHkuaW50ZXJmYWNlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGlmYykgPT4gIUlHTk9SRV9JTlRFUkZBQ0VTLmluY2x1ZGVzKGlmYykpXG4gICAgICAgICAgICAgICAgLm1hcCgoaWZjKSA9PlxuICAgICAgICAgICAgICAgICAgaWZjLnJlcGxhY2UoXCJBbGV4YS5cIiwgXCJcIikucmVwbGFjZShcIkNvbnRyb2xsZXJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5LmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IWVtcHR5RmlsdGVyfVxuICAgICAgICAgICAgICAuY2hlY2tlZD0ke2lzRXhwb3NlZH1cbiAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2V4cG9zZUNoYW5nZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hbGV4YS5leHBvc2VcIil9XG4gICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgYCk7XG4gICAgfSk7XG5cbiAgICBpZiAodHJhY2tFeHBvc2VkKSB7XG4gICAgICB0aGlzLl9pc0luaXRpYWxFeHBvc2VkID0gc2hvd0luRXhwb3NlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hbGV4YS50aXRsZVwiXG4gICAgICApfVwiPlxuICAgICAgICA8c3BhbiBzbG90PVwidG9vbGJhci1pY29uXCI+XG4gICAgICAgICAgJHtzZWxlY3RlZH0keyF0aGlzLm5hcnJvdyA/IGh0bWxgIHNlbGVjdGVkIGAgOiBcIlwifVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICR7XG4gICAgICAgICAgZW1wdHlGaWx0ZXJcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6dHVuZVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuRG9tYWluVG9nZ2xlcn1cbiAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgJHtcbiAgICAgICAgICAhZW1wdHlGaWx0ZXJcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFubmVyXCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWxleGEuYmFubmVyXCIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICBleHBvc2VkQ2FyZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hbGV4YS5leHBvc2VkX2VudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7ZXhwb3NlZENhcmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICBub3RFeHBvc2VkQ2FyZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hbGV4YS5ub3RfZXhwb3NlZF9lbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke25vdEV4cG9zZWRDYXJkc308L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNsb3VkU3RhdHVzXCIpKSB7XG4gICAgICB0aGlzLl9lbnRpdHlDb25maWdzID0gdGhpcy5jbG91ZFN0YXR1cy5wcmVmcy5hbGV4YV9lbnRpdHlfY29uZmlncztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgY29uc3QgZW50aXRpZXMgPSBhd2FpdCBmZXRjaENsb3VkQWxleGFFbnRpdGllcyh0aGlzLmhhc3MpO1xuICAgIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlQSA9IHRoaXMuaGFzcy5zdGF0ZXNbYS5lbnRpdHlfaWRdO1xuICAgICAgY29uc3Qgc3RhdGVCID0gdGhpcy5oYXNzLnN0YXRlc1tiLmVudGl0eV9pZF07XG4gICAgICByZXR1cm4gY29tcGFyZShcbiAgICAgICAgc3RhdGVBID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZUEpIDogYS5lbnRpdHlfaWQsXG4gICAgICAgIHN0YXRlQiA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVCKSA6IGIuZW50aXR5X2lkXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuX2VudGl0aWVzID0gZW50aXRpZXM7XG4gIH1cblxuICBwcml2YXRlIF9zaG93TW9yZUluZm8oZXYpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IGV2LmN1cnJlbnRUYXJnZXQuc3RhdGVPYmouZW50aXR5X2lkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9leHBvc2VDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5lbnRpdHlJZDtcbiAgICBjb25zdCBuZXdFeHBvc2VkID0gKGV2LnRhcmdldCBhcyBIYVN3aXRjaCkuY2hlY2tlZDtcbiAgICBhd2FpdCB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eUlkLCBuZXdFeHBvc2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQ6IHN0cmluZywgbmV3RXhwb3NlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGN1ckV4cG9zZWQgPSBjb25maWdJc0V4cG9zZWQodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pO1xuICAgIGlmIChuZXdFeHBvc2VkID09PSBjdXJFeHBvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUNvbmZpZyhlbnRpdHlJZCwge1xuICAgICAgc2hvdWxkX2V4cG9zZTogbmV3RXhwb3NlZCxcbiAgICB9KTtcbiAgICB0aGlzLl9lbnN1cmVFbnRpdHlTeW5jKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDb25maWcoZW50aXR5SWQ6IHN0cmluZywgdmFsdWVzOiBBbGV4YUVudGl0eUNvbmZpZykge1xuICAgIGNvbnN0IHVwZGF0ZWRDb25maWcgPSBhd2FpdCB1cGRhdGVDbG91ZEFsZXhhRW50aXR5Q29uZmlnKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgZW50aXR5SWQsXG4gICAgICB2YWx1ZXNcbiAgICApO1xuICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB7XG4gICAgICAuLi50aGlzLl9lbnRpdHlDb25maWdzLFxuICAgICAgW2VudGl0eUlkXTogdXBkYXRlZENvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuX2Vuc3VyZVN0YXR1c1JlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkRvbWFpblRvZ2dsZXIoKSB7XG4gICAgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2codGhpcywge1xuICAgICAgZG9tYWluczogdGhpcy5fZW50aXRpZXMhLm1hcCgoZW50aXR5KSA9PlxuICAgICAgICBjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICApLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KSxcbiAgICAgIHRvZ2dsZURvbWFpbjogKGRvbWFpbiwgdHVybk9uKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzIS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gZG9tYWluKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eS5lbnRpdHlfaWQsIHR1cm5Pbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnN1cmVTdGF0dXNSZWxvYWQoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IHRydWU7XG4gICAgLy8gQ2FjaGUgcGFyZW50IGJlY2F1c2UgYnkgdGhlIHRpbWUgcG9wc3RhdGUgaGFwcGVucyxcbiAgICAvLyB0aGlzIGVsZW1lbnQgaXMgZGV0YWNoZWRcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQhO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJwb3BzdGF0ZVwiLFxuICAgICAgKCkgPT4gZmlyZUV2ZW50KHBhcmVudCwgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZUVudGl0eVN5bmMoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIC8vIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgYW55dGhpbmcgeWV0LlxuICAgICAgICAvLyBzaG93VG9hc3QocGFyZW50LCB7IG1lc3NhZ2U6IFwiU3luY2hyb25pemluZyBjaGFuZ2VzIHRvIEdvb2dsZS5cIiB9KTtcbiAgICAgICAgLy8gY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50KHRoaXMuaGFzcyk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICAgIGdyaWQtZ2FwOiA4cHggOHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICBoYS1zd2l0Y2gge1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICAgIHN0YXRlLWluZm8ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBoYS1zd2l0Y2gge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtYWxleGFcIjogQ2xvdWRBbGV4YTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQU9BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEdBO0FBQ0E7QUF5R0E7Ozs7Ozs7Ozs7OztBQ2xIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXREQTtBQUNBO0FBdURBOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLHlhQUVBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUdBO0FBQUE7QUFBQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFJQTs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBdEJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7O0FBR0E7Ozs7QUFLQTs7QUFMQTtBQVdBOztBQUdBOztBQUhBO0FBU0E7O0FBR0E7O0FBSUE7QUFQQTtBQVlBOztBQUdBOztBQUlBO0FBUEE7OztBQXhDQTtBQXNEQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQ0E7OztBQXJUQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
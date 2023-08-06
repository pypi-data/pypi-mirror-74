(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-google-assistant"],{

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

/***/ "./src/data/google_assistant.ts":
/*!**************************************!*\
  !*** ./src/data/google_assistant.ts ***!
  \**************************************/
/*! exports provided: fetchCloudGoogleEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudGoogleEntities", function() { return fetchCloudGoogleEntities; });
const fetchCloudGoogleEntities = hass => hass.callWS({
  type: "cloud/google_assistant/entities"
});

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

/***/ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts ***!
  \****************************************************************************/
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
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _data_google_assistant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../data/google_assistant */ "./src/data/google_assistant.ts");
/* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../util/toast */ "./src/util/toast.ts");
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

const configIsExposed = config => config.should_expose === undefined ? DEFAULT_CONFIG_EXPOSE : config.should_expose;

let CloudGoogleAssistant = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("cloud-google-assistant")], function (_initialize, _LitElement) {
  class CloudGoogleAssistant extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: CloudGoogleAssistant,
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
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
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

        const emptyFilter = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_6__["isEmptyFilter"])(this.cloudStatus.google_entities);

        const filterFunc = this._getEntityFilterFunc(this.cloudStatus.google_entities); // We will only generate `isInitialExposed` during first render.
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
              ${entity.traits.map(trait => trait.substr(trait.lastIndexOf(".") + 1)).join(", ")}
            </state-info>
            <ha-switch
              .entityId=${entity.entity_id}
              .disabled=${!emptyFilter}
              .checked=${isExposed}
              @change=${this._exposeChanged}
            >
              ${this.hass.localize("ui.panel.config.cloud.google.expose")}
            </ha-switch>
            ${entity.might_2fa ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  <ha-switch
                    .entityId=${entity.entity_id}
                    .checked=${Boolean(config.disable_2fa)}
                    @change=${this._disable2FAChanged}
                  >
                    ${this.hass.localize("ui.panel.config.cloud.google.disable_2FA")}
                  </ha-switch>
                ` : ""}
          </div>
        </ha-card>
      `);
        });

        if (trackExposed) {
          this._isInitialExposed = showInExposed;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <hass-subpage header="${this.hass.localize("ui.panel.config.cloud.google.title")}">
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
                  ${this.hass.localize("ui.panel.config.cloud.google.banner")}
                </div>
              ` : ""}
          ${exposedCards.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  <h1>
                    ${this.hass.localize("ui.panel.config.cloud.google.exposed_entities")}
                  </h1>
                  <div class="content">${exposedCards}</div>
                ` : ""}
          ${notExposedCards.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                  <h1>
                    ${this.hass.localize("ui.panel.config.cloud.google.not_exposed_entities")}
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
        _get(_getPrototypeOf(CloudGoogleAssistant.prototype), "firstUpdated", this).call(this, changedProps);

        this._fetchData();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(CloudGoogleAssistant.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("cloudStatus")) {
          this._entityConfigs = this.cloudStatus.prefs.google_entity_configs;
        }
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        const entities = await Object(_data_google_assistant__WEBPACK_IMPORTED_MODULE_12__["fetchCloudGoogleEntities"])(this.hass);
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
      key: "_disable2FAChanged",
      value: async function _disable2FAChanged(ev) {
        const entityId = ev.currentTarget.entityId;
        const newDisable2FA = ev.target.checked;
        const curDisable2FA = Boolean((this._entityConfigs[entityId] || {}).disable_2fa);

        if (newDisable2FA === curDisable2FA) {
          return;
        }

        await this._updateConfig(entityId, {
          disable_2fa: newDisable2FA
        });
      }
    }, {
      kind: "method",
      key: "_updateConfig",
      value: async function _updateConfig(entityId, values) {
        const updatedConfig = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_11__["updateCloudGoogleEntityConfig"])(this.hass, entityId, values);
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

        const parent = this.parentElement;
        window.addEventListener("popstate", () => {
          Object(_util_toast__WEBPACK_IMPORTED_MODULE_16__["showToast"])(parent, {
            message: this.hass.localize("ui.panel.config.cloud.google.sync_to_google")
          });
          Object(_data_cloud__WEBPACK_IMPORTED_MODULE_11__["cloudSyncGoogleAssistant"])(this.hass);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9zcmMvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9nb29nbGVfYXNzaXN0YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2RvbWFpbi10b2dnbGVyL3Nob3ctZGlhbG9nLWRvbWFpbi10b2dnbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2dvb2dsZS1hc3Npc3RhbnQvY2xvdWQtZ29vZ2xlLWFzc2lzdGFudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7QXR0cmlidXRlUGFydCwgZGlyZWN0aXZlLCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogRm9yIEF0dHJpYnV0ZVBhcnRzLCBzZXRzIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQgYW5kIHJlbW92ZXNcbiAqIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBGb3Igb3RoZXIgcGFydCB0eXBlcywgdGhpcyBkaXJlY3RpdmUgaXMgYSBuby1vcC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlmRGVmaW5lZCA9IGRpcmVjdGl2ZSgodmFsdWU6IHVua25vd24pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB7XG4gICAgaWYgKHZhbHVlICE9PSBwYXJ0LnZhbHVlKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGFydC5jb21taXR0ZXIubmFtZTtcbiAgICAgIHBhcnQuY29tbWl0dGVyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRhdGUgb2JqZWN0IGFzIHJlbGF0aXZlIHRpbWUgZnJvbSBub3cuXG4gKlxuICogRXhhbXBsZSBvdXRwdXQ6IDUgbWludXRlcyBhZ28sIGluIDMgZGF5cy5cbiAqL1xuY29uc3QgdGVzdHMgPSBbNjAsIDYwLCAyNCwgN107XG5jb25zdCBsYW5nS2V5ID0gW1wic2Vjb25kXCIsIFwibWludXRlXCIsIFwiaG91clwiLCBcImRheVwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKFxuICBkYXRlT2JqOiBEYXRlLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBvcHRpb25zOiB7XG4gICAgY29tcGFyZVRpbWU/OiBEYXRlO1xuICAgIGluY2x1ZGVUZW5zZT86IGJvb2xlYW47XG4gIH0gPSB7fVxuKTogc3RyaW5nIHtcbiAgY29uc3QgY29tcGFyZVRpbWUgPSBvcHRpb25zLmNvbXBhcmVUaW1lIHx8IG5ldyBEYXRlKCk7XG4gIGxldCBkZWx0YSA9IChjb21wYXJlVGltZS5nZXRUaW1lKCkgLSBkYXRlT2JqLmdldFRpbWUoKSkgLyAxMDAwO1xuICBjb25zdCB0ZW5zZSA9IGRlbHRhID49IDAgPyBcInBhc3RcIiA6IFwiZnV0dXJlXCI7XG4gIGRlbHRhID0gTWF0aC5hYnMoZGVsdGEpO1xuXG4gIGxldCB0aW1lRGVzYztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRlbHRhIDwgdGVzdHNbaV0pIHtcbiAgICAgIGRlbHRhID0gTWF0aC5mbG9vcihkZWx0YSk7XG4gICAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgICBgdWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLmR1cmF0aW9uLiR7bGFuZ0tleVtpXX1gLFxuICAgICAgICBcImNvdW50XCIsXG4gICAgICAgIGRlbHRhXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgLz0gdGVzdHNbaV07XG4gIH1cblxuICBpZiAodGltZURlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIGRlbHRhID0gTWF0aC5mbG9vcihkZWx0YSk7XG4gICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgIFwidWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLmR1cmF0aW9uLndlZWtcIixcbiAgICAgIFwiY291bnRcIixcbiAgICAgIGRlbHRhXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLmluY2x1ZGVUZW5zZSA9PT0gZmFsc2VcbiAgICA/IHRpbWVEZXNjXG4gICAgOiBsb2NhbGl6ZShgdWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLiR7dGVuc2V9YCwgXCJ0aW1lXCIsIHRpbWVEZXNjKTtcbn1cbiIsImltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJGdW5jID0gKGVudGl0eUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5RmlsdGVyIHtcbiAgaW5jbHVkZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgaW5jbHVkZV9lbnRpdGllczogc3RyaW5nW107XG4gIGV4Y2x1ZGVfZG9tYWluczogc3RyaW5nW107XG4gIGV4Y2x1ZGVfZW50aXRpZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgaXNFbXB0eUZpbHRlciA9IChmaWx0ZXI6IEVudGl0eUZpbHRlcikgPT5cbiAgZmlsdGVyLmluY2x1ZGVfZG9tYWlucy5sZW5ndGggK1xuICAgIGZpbHRlci5pbmNsdWRlX2VudGl0aWVzLmxlbmd0aCArXG4gICAgZmlsdGVyLmV4Y2x1ZGVfZG9tYWlucy5sZW5ndGggK1xuICAgIGZpbHRlci5leGNsdWRlX2VudGl0aWVzLmxlbmd0aCA9PT1cbiAgMDtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRmlsdGVyID0gKFxuICBpbmNsdWRlRG9tYWlucz86IHN0cmluZ1tdLFxuICBpbmNsdWRlRW50aXRpZXM/OiBzdHJpbmdbXSxcbiAgZXhjbHVkZURvbWFpbnM/OiBzdHJpbmdbXSxcbiAgZXhjbHVkZUVudGl0aWVzPzogc3RyaW5nW11cbik6IEZpbHRlckZ1bmMgPT4ge1xuICBjb25zdCBpbmNsdWRlRG9tYWluc1NldCA9IG5ldyBTZXQoaW5jbHVkZURvbWFpbnMpO1xuICBjb25zdCBpbmNsdWRlRW50aXRpZXNTZXQgPSBuZXcgU2V0KGluY2x1ZGVFbnRpdGllcyk7XG4gIGNvbnN0IGV4Y2x1ZGVEb21haW5zU2V0ID0gbmV3IFNldChleGNsdWRlRG9tYWlucyk7XG4gIGNvbnN0IGV4Y2x1ZGVFbnRpdGllc1NldCA9IG5ldyBTZXQoZXhjbHVkZUVudGl0aWVzKTtcblxuICBjb25zdCBoYXZlSW5jbHVkZSA9IGluY2x1ZGVEb21haW5zU2V0LnNpemUgPiAwIHx8IGluY2x1ZGVFbnRpdGllc1NldC5zaXplID4gMDtcbiAgY29uc3QgaGF2ZUV4Y2x1ZGUgPSBleGNsdWRlRG9tYWluc1NldC5zaXplID4gMCB8fCBleGNsdWRlRW50aXRpZXNTZXQuc2l6ZSA+IDA7XG5cbiAgLy8gQ2FzZSAxIC0gbm8gaW5jbHVkZXMgb3IgZXhjbHVkZXMgLSBwYXNzIGFsbCBlbnRpdGllc1xuICBpZiAoIWhhdmVJbmNsdWRlICYmICFoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoKSA9PiB0cnVlO1xuICB9XG5cbiAgLy8gQ2FzZSAyIC0gaW5jbHVkZXMsIG5vIGV4Y2x1ZGVzIC0gb25seSBpbmNsdWRlIHNwZWNpZmllZCBlbnRpdGllc1xuICBpZiAoaGF2ZUluY2x1ZGUgJiYgIWhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpIHx8XG4gICAgICBpbmNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpO1xuICB9XG5cbiAgLy8gQ2FzZSAzIC0gZXhjbHVkZXMsIG5vIGluY2x1ZGVzIC0gb25seSBleGNsdWRlIHNwZWNpZmllZCBlbnRpdGllc1xuICBpZiAoIWhhdmVJbmNsdWRlICYmIGhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKSAmJlxuICAgICAgIWV4Y2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSk7XG4gIH1cblxuICAvLyBDYXNlIDQgLSBib3RoIGluY2x1ZGVzIGFuZCBleGNsdWRlcyBzcGVjaWZpZWRcbiAgLy8gQ2FzZSA0YSAtIGluY2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBpZiBkb21haW4gaXMgaW5jbHVkZWQsIHBhc3MgaWYgZW50aXR5IG5vdCBleGNsdWRlZFxuICAvLyAgLSBpZiBkb21haW4gaXMgbm90IGluY2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZFxuICAvLyBub3RlOiBpZiBib3RoIGluY2x1ZGUgYW5kIGV4Y2x1ZGUgZG9tYWlucyBzcGVjaWZpZWQsXG4gIC8vICAgdGhlIGV4Y2x1ZGUgZG9tYWlucyBhcmUgaWdub3JlZFxuICBpZiAoaW5jbHVkZURvbWFpbnNTZXQuc2l6ZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBpbmNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpXG4gICAgICAgID8gIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpXG4gICAgICAgIDogaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG4gIH1cblxuICAvLyBDYXNlIDRiIC0gZXhjbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBleGNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIG5vdCBleGNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgbm90IGV4Y2x1ZGVkXG4gIGlmIChleGNsdWRlRG9tYWluc1NldC5zaXplKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGV4Y2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSlcbiAgICAgICAgPyBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKVxuICAgICAgICA6ICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbiAgfVxuXG4gIC8vIENhc2UgNGMgLSBuZWl0aGVyIGluY2x1ZGUgb3IgZXhjbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIE9ubHkgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWQuICBJZ25vcmUgZW50aXR5IGV4Y2x1ZGVzLlxuICByZXR1cm4gKGVudGl0eUlkKSA9PiBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbn07XG4iLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgXCIuLi9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWJhZGdlXCI7XG5cbmNsYXNzIFN0YXRlSW5mbyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlfSAke3RoaXMuc3RhdGVCYWRnZVRlbXBsYXRlfSAke3RoaXMuaW5mb1RlbXBsYXRlfVxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWJhZGdlIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBzdGF0ZS1iYWRnZSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDU2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWVbaW4tZGlhbG9nXSxcbiAgICAgICAgOmhvc3QoW3NlY29uZGFyeS1saW5lXSkgLm5hbWUge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtYWdvLFxuICAgICAgICAuZXh0cmEtaW5mbyxcbiAgICAgICAgLmV4dHJhLWluZm8gPiAqIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUJhZGdlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgIDxzdGF0ZS1iYWRnZSBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIj48L3N0YXRlLWJhZGdlPiBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBpbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiIGluLWRpYWxvZyQ9XCJbW2luRGlhbG9nXV1cIj5cbiAgICAgICAgICBbW2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2luRGlhbG9nXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1hZ29cIj5cbiAgICAgICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGRhdGV0aW1lPVwiW1tzdGF0ZU9iai5sYXN0X2NoYW5nZWRdXVwiXG4gICAgICAgICAgICA+PC9oYS1yZWxhdGl2ZS10aW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWluRGlhbG9nXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtaW5mb1wiPjxzbG90PiA8L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6ICgpID0+IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1pbmZvXCIsIFN0YXRlSW5mbyk7XG4iLCJpbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVJlbGF0aXZlVGltZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBkYXRldGltZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGF0ZXRpbWVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHBhcnNlZERhdGVUaW1lOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSA9IHRoaXMudXBkYXRlUmVsYXRpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gdXBkYXRlIGV2ZXJ5IDYwIHNlY29uZHNcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVSZWxhdGl2ZSwgNjAwMDApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICB9XG5cbiAgZGF0ZXRpbWVDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWwgPyBuZXcgRGF0ZShuZXdWYWwpIDogbnVsbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIGRhdGV0aW1lT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgdXBkYXRlUmVsYXRpdmUoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvbSh0aGlzKTtcbiAgICBpZiAoIXRoaXMucGFyc2VkRGF0ZVRpbWUpIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGhpcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5uZXZlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSByZWxhdGl2ZVRpbWUodGhpcy5wYXJzZWREYXRlVGltZSwgdGhpcy5sb2NhbGl6ZSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXJlbGF0aXZlLXRpbWVcIiwgSGFSZWxhdGl2ZVRpbWUpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZUVudGl0eSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICB0cmFpdHM6IHN0cmluZ1tdO1xuICBtaWdodF8yZmE6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkR29vZ2xlRW50aXRpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8R29vZ2xlRW50aXR5W10+KHsgdHlwZTogXCJjbG91ZC9nb29nbGVfYXNzaXN0YW50L2VudGl0aWVzXCIgfSk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFEb21haW5Ub2dnbGVyRGlhbG9nUGFyYW1zIHtcbiAgZG9tYWluczogc3RyaW5nW107XG4gIHRvZ2dsZURvbWFpbjogKGRvbWFpbjogc3RyaW5nLCB0dXJuT246IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRG9tYWluVG9nZ2xlckRpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1kb21haW4tdG9nZ2xlclwiICovIFwiLi9kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEhhRG9tYWluVG9nZ2xlckRpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWRvbWFpbi10b2dnbGVyXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkRG9tYWluVG9nZ2xlckRpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQge1xuICBFbnRpdHlGaWx0ZXIsXG4gIGdlbmVyYXRlRmlsdGVyLFxuICBpc0VtcHR5RmlsdGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuaW1wb3J0IHR5cGUgeyBIYVN3aXRjaCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuaW1wb3J0IHtcbiAgQ2xvdWRQcmVmZXJlbmNlcyxcbiAgQ2xvdWRTdGF0dXNMb2dnZWRJbixcbiAgY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50LFxuICBHb29nbGVFbnRpdHlDb25maWcsXG4gIHVwZGF0ZUNsb3VkR29vZ2xlRW50aXR5Q29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hDbG91ZEdvb2dsZUVudGl0aWVzLFxuICBHb29nbGVFbnRpdHksXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2dvb2dsZV9hc3Npc3RhbnRcIjtcbmltcG9ydCB7IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdG9hc3RcIjtcblxuY29uc3QgREVGQVVMVF9DT05GSUdfRVhQT1NFID0gdHJ1ZTtcblxuY29uc3QgY29uZmlnSXNFeHBvc2VkID0gKGNvbmZpZzogR29vZ2xlRW50aXR5Q29uZmlnKSA9PlxuICBjb25maWcuc2hvdWxkX2V4cG9zZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBERUZBVUxUX0NPTkZJR19FWFBPU0VcbiAgICA6IGNvbmZpZy5zaG91bGRfZXhwb3NlO1xuXG5AY3VzdG9tRWxlbWVudChcImNsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIilcbmNsYXNzIENsb3VkR29vZ2xlQXNzaXN0YW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgY2xvdWRTdGF0dXMhOiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudGl0aWVzPzogR29vZ2xlRW50aXR5W107XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfZW50aXR5Q29uZmlnczogQ2xvdWRQcmVmZXJlbmNlc1tcImdvb2dsZV9lbnRpdHlfY29uZmlnc1wiXSA9IHt9O1xuXG4gIHByaXZhdGUgX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2lzSW5pdGlhbEV4cG9zZWQ/OiBTZXQ8c3RyaW5nPjtcblxuICBwcml2YXRlIF9nZXRFbnRpdHlGaWx0ZXJGdW5jID0gbWVtb2l6ZU9uZSgoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gICAgZ2VuZXJhdGVGaWx0ZXIoXG4gICAgICBmaWx0ZXIuaW5jbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmluY2x1ZGVfZW50aXRpZXMsXG4gICAgICBmaWx0ZXIuZXhjbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmV4Y2x1ZGVfZW50aXRpZXNcbiAgICApXG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKHRoaXMuX2VudGl0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYCA8aGFzcy1sb2FkaW5nLXNjcmVlbj48L2hhc3MtbG9hZGluZy1zY3JlZW4+IGA7XG4gICAgfVxuICAgIGNvbnN0IGVtcHR5RmlsdGVyID0gaXNFbXB0eUZpbHRlcih0aGlzLmNsb3VkU3RhdHVzLmdvb2dsZV9lbnRpdGllcyk7XG4gICAgY29uc3QgZmlsdGVyRnVuYyA9IHRoaXMuX2dldEVudGl0eUZpbHRlckZ1bmMoXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzLmdvb2dsZV9lbnRpdGllc1xuICAgICk7XG5cbiAgICAvLyBXZSB3aWxsIG9ubHkgZ2VuZXJhdGUgYGlzSW5pdGlhbEV4cG9zZWRgIGR1cmluZyBmaXJzdCByZW5kZXIuXG4gICAgLy8gT24gZWFjaCBzdWJzZXF1ZW50IHJlbmRlciB3ZSB3aWxsIHVzZSB0aGUgc2FtZSBzZXQgc28gdGhhdCBjYXJkc1xuICAgIC8vIHdpbGwgbm90IGp1bXAgYXJvdW5kIHdoZW4gd2UgY2hhbmdlIHRoZSBleHBvc2VkIHNldHRpbmcuXG4gICAgY29uc3Qgc2hvd0luRXhwb3NlZCA9IHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgfHwgbmV3IFNldCgpO1xuICAgIGNvbnN0IHRyYWNrRXhwb3NlZCA9IHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgPT09IHVuZGVmaW5lZDtcblxuICAgIGxldCBzZWxlY3RlZCA9IDA7XG5cbiAgICAvLyBPbiBmaXJzdCByZW5kZXIgd2UgZGVjaWRlIHdoaWNoIGNhcmRzIHNob3cgaW4gd2hpY2ggY2F0ZWdvcnkuXG4gICAgLy8gVGhhdCB3YXkgY2FyZHMgd29uJ3QganVtcCBhcm91bmQgd2hlbiBjaGFuZ2luZyB2YWx1ZXMuXG4gICAgY29uc3QgZXhwb3NlZENhcmRzOiBUZW1wbGF0ZVJlc3VsdFtdID0gW107XG4gICAgY29uc3Qgbm90RXhwb3NlZENhcmRzOiBUZW1wbGF0ZVJlc3VsdFtdID0gW107XG5cbiAgICB0aGlzLl9lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2VudGl0eUNvbmZpZ3NbZW50aXR5LmVudGl0eV9pZF0gfHwge307XG4gICAgICBjb25zdCBpc0V4cG9zZWQgPSBlbXB0eUZpbHRlclxuICAgICAgICA/IGNvbmZpZ0lzRXhwb3NlZChjb25maWcpXG4gICAgICAgIDogZmlsdGVyRnVuYyhlbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgIGlmIChpc0V4cG9zZWQpIHtcbiAgICAgICAgc2VsZWN0ZWQrKztcblxuICAgICAgICBpZiAodHJhY2tFeHBvc2VkKSB7XG4gICAgICAgICAgc2hvd0luRXhwb3NlZC5hZGQoZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2hvd0luRXhwb3NlZC5oYXMoZW50aXR5LmVudGl0eV9pZClcbiAgICAgICAgPyBleHBvc2VkQ2FyZHNcbiAgICAgICAgOiBub3RFeHBvc2VkQ2FyZHM7XG5cbiAgICAgIHRhcmdldC5wdXNoKGh0bWxgXG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAuc3RhdGVPYmo9JHtzdGF0ZU9ian1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5LWxpbmVcbiAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd01vcmVJbmZvfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke2VudGl0eS50cmFpdHNcbiAgICAgICAgICAgICAgICAubWFwKCh0cmFpdCkgPT4gdHJhaXQuc3Vic3RyKHRyYWl0Lmxhc3RJbmRleE9mKFwiLlwiKSArIDEpKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICA8L3N0YXRlLWluZm8+XG4gICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgIC5lbnRpdHlJZD0ke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0keyFlbXB0eUZpbHRlcn1cbiAgICAgICAgICAgICAgLmNoZWNrZWQ9JHtpc0V4cG9zZWR9XG4gICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9leHBvc2VDaGFuZ2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZ29vZ2xlLmV4cG9zZVwiKX1cbiAgICAgICAgICAgIDwvaGEtc3dpdGNoPlxuICAgICAgICAgICAgJHtlbnRpdHkubWlnaHRfMmZhXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5LmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHtCb29sZWFuKGNvbmZpZy5kaXNhYmxlXzJmYSl9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9kaXNhYmxlMkZBQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5kaXNhYmxlXzJGQVwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgYCk7XG4gICAgfSk7XG5cbiAgICBpZiAodHJhY2tFeHBvc2VkKSB7XG4gICAgICB0aGlzLl9pc0luaXRpYWxFeHBvc2VkID0gc2hvd0luRXhwb3NlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5nb29nbGUudGl0bGVcIlxuICAgICAgKX1cIj5cbiAgICAgICAgPHNwYW4gc2xvdD1cInRvb2xiYXItaWNvblwiPlxuICAgICAgICAgICR7c2VsZWN0ZWR9JHshdGhpcy5uYXJyb3cgPyBodG1sYCBzZWxlY3RlZCBgIDogXCJcIn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAke1xuICAgICAgICAgIGVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnR1bmVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3BlbkRvbWFpblRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICR7XG4gICAgICAgICAgIWVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5iYW5uZXJcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5leHBvc2VkX2VudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7ZXhwb3NlZENhcmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICBub3RFeHBvc2VkQ2FyZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5nb29nbGUubm90X2V4cG9zZWRfZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtub3RFeHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJjbG91ZFN0YXR1c1wiKSkge1xuICAgICAgdGhpcy5fZW50aXR5Q29uZmlncyA9IHRoaXMuY2xvdWRTdGF0dXMucHJlZnMuZ29vZ2xlX2VudGl0eV9jb25maWdzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpIHtcbiAgICBjb25zdCBlbnRpdGllcyA9IGF3YWl0IGZldGNoQ2xvdWRHb29nbGVFbnRpdGllcyh0aGlzLmhhc3MpO1xuICAgIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlQSA9IHRoaXMuaGFzcy5zdGF0ZXNbYS5lbnRpdHlfaWRdO1xuICAgICAgY29uc3Qgc3RhdGVCID0gdGhpcy5oYXNzLnN0YXRlc1tiLmVudGl0eV9pZF07XG4gICAgICByZXR1cm4gY29tcGFyZShcbiAgICAgICAgc3RhdGVBID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZUEpIDogYS5lbnRpdHlfaWQsXG4gICAgICAgIHN0YXRlQiA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVCKSA6IGIuZW50aXR5X2lkXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuX2VudGl0aWVzID0gZW50aXRpZXM7XG4gIH1cblxuICBwcml2YXRlIF9zaG93TW9yZUluZm8oZXYpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IGV2LmN1cnJlbnRUYXJnZXQuc3RhdGVPYmouZW50aXR5X2lkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9leHBvc2VDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5lbnRpdHlJZDtcbiAgICBjb25zdCBuZXdFeHBvc2VkID0gKGV2LnRhcmdldCBhcyBIYVN3aXRjaCkuY2hlY2tlZDtcbiAgICBhd2FpdCB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eUlkLCBuZXdFeHBvc2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQ6IHN0cmluZywgbmV3RXhwb3NlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGN1ckV4cG9zZWQgPSBjb25maWdJc0V4cG9zZWQodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pO1xuICAgIGlmIChuZXdFeHBvc2VkID09PSBjdXJFeHBvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUNvbmZpZyhlbnRpdHlJZCwge1xuICAgICAgc2hvdWxkX2V4cG9zZTogbmV3RXhwb3NlZCxcbiAgICB9KTtcbiAgICB0aGlzLl9lbnN1cmVFbnRpdHlTeW5jKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kaXNhYmxlMkZBQ2hhbmdlZChldjogRXZlbnQpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZW50aXR5SWQ7XG4gICAgY29uc3QgbmV3RGlzYWJsZTJGQSA9IChldi50YXJnZXQgYXMgSGFTd2l0Y2gpLmNoZWNrZWQ7XG4gICAgY29uc3QgY3VyRGlzYWJsZTJGQSA9IEJvb2xlYW4oXG4gICAgICAodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pLmRpc2FibGVfMmZhXG4gICAgKTtcbiAgICBpZiAobmV3RGlzYWJsZTJGQSA9PT0gY3VyRGlzYWJsZTJGQSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLl91cGRhdGVDb25maWcoZW50aXR5SWQsIHtcbiAgICAgIGRpc2FibGVfMmZhOiBuZXdEaXNhYmxlMkZBLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlQ29uZmlnKGVudGl0eUlkOiBzdHJpbmcsIHZhbHVlczogR29vZ2xlRW50aXR5Q29uZmlnKSB7XG4gICAgY29uc3QgdXBkYXRlZENvbmZpZyA9IGF3YWl0IHVwZGF0ZUNsb3VkR29vZ2xlRW50aXR5Q29uZmlnKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgZW50aXR5SWQsXG4gICAgICB2YWx1ZXNcbiAgICApO1xuICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB7XG4gICAgICAuLi50aGlzLl9lbnRpdHlDb25maWdzLFxuICAgICAgW2VudGl0eUlkXTogdXBkYXRlZENvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuX2Vuc3VyZVN0YXR1c1JlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkRvbWFpblRvZ2dsZXIoKSB7XG4gICAgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2codGhpcywge1xuICAgICAgZG9tYWluczogdGhpcy5fZW50aXRpZXMhLm1hcCgoZW50aXR5KSA9PlxuICAgICAgICBjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICApLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KSxcbiAgICAgIHRvZ2dsZURvbWFpbjogKGRvbWFpbiwgdHVybk9uKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzIS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gZG9tYWluKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eS5lbnRpdHlfaWQsIHR1cm5Pbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnN1cmVTdGF0dXNSZWxvYWQoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IHRydWU7XG4gICAgLy8gQ2FjaGUgcGFyZW50IGJlY2F1c2UgYnkgdGhlIHRpbWUgcG9wc3RhdGUgaGFwcGVucyxcbiAgICAvLyB0aGlzIGVsZW1lbnQgaXMgZGV0YWNoZWRcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQhO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJwb3BzdGF0ZVwiLFxuICAgICAgKCkgPT4gZmlyZUV2ZW50KHBhcmVudCwgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZUVudGl0eVN5bmMoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHNob3dUb2FzdChwYXJlbnQsIHtcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZ29vZ2xlLnN5bmNfdG9fZ29vZ2xlXCJcbiAgICAgICAgICApLFxuICAgICAgICB9KTtcbiAgICAgICAgY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50KHRoaXMuaGFzcyk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICAgIGdyaWQtZ2FwOiA4cHggOHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgICBzdGF0ZS1pbmZvIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgaGEtc3dpdGNoIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIjogQ2xvdWRHb29nbGVBc3Npc3RhbnQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFPQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhHQTtBQUNBO0FBeUdBOzs7Ozs7Ozs7Ozs7QUNsSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0REE7QUFDQTtBQXVEQTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQSx5YUFFQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBUEE7OztBQXJCQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBOztBQUdBOzs7O0FBS0E7O0FBTEE7QUFXQTs7QUFHQTs7QUFIQTtBQVNBOztBQUdBOztBQUlBO0FBUEE7QUFZQTs7QUFHQTs7QUFJQTtBQVBBOzs7QUF4Q0E7QUFzREE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTs7OztBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBdUNBOzs7QUE1VUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
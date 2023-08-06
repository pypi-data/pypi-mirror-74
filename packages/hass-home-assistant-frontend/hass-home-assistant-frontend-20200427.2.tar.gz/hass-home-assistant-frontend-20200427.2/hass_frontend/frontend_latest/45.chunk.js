(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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


/*
A set of layout classes that let you specify layout properties directly in
markup. You must include this file in every element that needs to use them.

Sample use:

    import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

    const template = html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        .test { width: 100px; }
      </style>
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
    `;
    document.body.appendChild(template.content);

The following imports are available:
 - iron-flex
 - iron-flex-reverse
 - iron-flex-alignment
 - iron-flex-factors
 - iron-positioning
*/

const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

/***/ }),

/***/ "./src/components/ha-cover-controls.js":
/*!*********************************************!*\
  !*** ./src/components/ha-cover-controls.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");


/* eslint-plugin-disable lit */





class HaCoverControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        .state {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div class="state">
        <paper-icon-button
          aria-label="Open cover"
          icon="[[computeOpenIcon(stateObj)]]"
          on-click="onOpenTap"
          invisible$="[[!entityObj.supportsOpen]]"
          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Stop the cover from moving"
          icon="hass:stop"
          on-click="onStopTap"
          invisible$="[[!entityObj.supportsStop]]"
          disabled="[[computStopDisabled(stateObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Close cover"
          icon="[[computeCloseIcon(stateObj)]]"
          on-click="onCloseTap"
          invisible$="[[!entityObj.supportsClose]]"
          disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(hass, stateObj)"
      }
    };
  }

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__["default"](hass, stateObj);
  }

  computeOpenIcon(stateObj) {
    switch (stateObj.attributes.device_class) {
      case "awning":
      case "gate":
        return "hass:arrow-expand-horizontal";

      default:
        return "hass:arrow-up";
    }
  }

  computeCloseIcon(stateObj) {
    switch (stateObj.attributes.device_class) {
      case "awning":
      case "gate":
        return "hass:arrow-collapse-horizontal";

      default:
        return "hass:arrow-down";
    }
  }

  computeStopDisabled(stateObj) {
    if (stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_3__["UNAVAILABLE"]) {
      return true;
    }

    return false;
  }

  computeOpenDisabled(stateObj, entityObj) {
    if (stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_3__["UNAVAILABLE"]) {
      return true;
    }

    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    if (stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_3__["UNAVAILABLE"]) {
      return true;
    }

    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState;
  }

  onOpenTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCover();
  }

  onCloseTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCover();
  }

  onStopTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCover();
  }

}

customElements.define("ha-cover-controls", HaCoverControls);

/***/ }),

/***/ "./src/components/ha-cover-tilt-controls.js":
/*!**************************************************!*\
  !*** ./src/components/ha-cover-tilt-controls.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");



/* eslint-plugin-disable lit */





class HaCoverTiltControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex"></style>
      <style>
        :host {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <paper-icon-button
        aria-label="Open cover tilt"
        icon="hass:arrow-top-right"
        on-click="onOpenTiltTap"
        title="Open tilt"
        invisible$="[[!entityObj.supportsOpenTilt]]"
        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Stop cover from moving"
        icon="hass:stop"
        on-click="onStopTiltTap"
        invisible$="[[!entityObj.supportsStopTilt]]"
        disabled="[[computStopDisabled(stateObj)]]"
        title="Stop tilt"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Close cover tilt"
        icon="hass:arrow-bottom-left"
        on-click="onCloseTiltTap"
        title="Close tilt"
        invisible$="[[!entityObj.supportsCloseTilt]]"
        disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(hass, stateObj)"
      }
    };
  }

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_5__["default"](hass, stateObj);
  }

  computeStopDisabled(stateObj) {
    if (stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_4__["UNAVAILABLE"]) {
      return true;
    }

    return false;
  }

  computeOpenDisabled(stateObj, entityObj) {
    if (stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_4__["UNAVAILABLE"]) {
      return true;
    }

    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyOpenTilt && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    if (stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_4__["UNAVAILABLE"]) {
      return true;
    }

    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyClosedTilt && !assumedState;
  }

  onOpenTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCoverTilt();
  }

  onCloseTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCoverTilt();
  }

  onStopTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCoverTilt();
  }

}

customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);

/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-cover-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-cover-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_cover_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-cover-controls */ "./src/components/ha-cover-controls.js");
/* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/cover-model */ "./src/util/cover-model.js");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
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









let HuiCoverEntityRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-cover-entity-row")], function (_initialize, _LitElement) {
  class HuiCoverEntityRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiCoverEntityRow,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        if (!config) {
          throw new Error("Configuration error");
        }

        this._config = config;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_4__["hasConfigOrEntityChanged"])(this, changedProps);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._config || !this.hass) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const stateObj = this.hass.states[this._config.entity];

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${Object(_util_cover_model__WEBPACK_IMPORTED_MODULE_3__["isTiltOnly"])(stateObj) ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-cover-tilt-controls
                .hass=${this.hass}
                .stateObj=${stateObj}
              ></ha-cover-tilt-controls>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-cover-controls
                .hass=${this.hass}
                .stateObj=${stateObj}
              ></ha-cover-controls>
            `}
      </hui-generic-entity-row>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-cover-controls,
      ha-cover-tilt-controls {
        margin-right: -0.57em;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/util/cover-model.js":
/*!*********************************!*\
  !*** ./src/util/cover-model.js ***!
  \*********************************/
/*! exports provided: default, supportsOpen, supportsClose, supportsSetPosition, supportsStop, supportsOpenTilt, supportsCloseTilt, supportsStopTilt, supportsSetTiltPosition, isTiltOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpen", function() { return supportsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsClose", function() { return supportsClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetPosition", function() { return supportsSetPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStop", function() { return supportsStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpenTilt", function() { return supportsOpenTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCloseTilt", function() { return supportsCloseTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStopTilt", function() { return supportsStopTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetTiltPosition", function() { return supportsSetTiltPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTiltOnly", function() { return isTiltOnly; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");

/* eslint-enable no-bitwise */

class CoverEntity {
  constructor(hass, stateObj) {
    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  get isFullyOpen() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 100;
    }

    return this.stateObj.state === "open";
  }

  get isFullyClosed() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 0;
    }

    return this.stateObj.state === "closed";
  }

  get isFullyOpenTilt() {
    return this._attr.current_tilt_position === 100;
  }

  get isFullyClosedTilt() {
    return this._attr.current_tilt_position === 0;
  }

  get isOpening() {
    return this.stateObj.state === "opening";
  }

  get isClosing() {
    return this.stateObj.state === "closing";
  }

  get supportsOpen() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
  }

  get supportsClose() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2);
  }

  get supportsSetPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
  }

  get supportsStop() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
  }

  get supportsOpenTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
  }

  get supportsCloseTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
  }

  get supportsStopTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 64);
  }

  get supportsSetTiltPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
  }

  get isTiltOnly() {
    const supportsCover = this.supportsOpen || this.supportsClose || this.supportsStop;
    const supportsTilt = this.supportsOpenTilt || this.supportsCloseTilt || this.supportsStopTilt;
    return supportsTilt && !supportsCover;
  }

  openCover() {
    this.callService("open_cover");
  }

  closeCover() {
    this.callService("close_cover");
  }

  stopCover() {
    this.callService("stop_cover");
  }

  openCoverTilt() {
    this.callService("open_cover_tilt");
  }

  closeCoverTilt() {
    this.callService("close_cover_tilt");
  }

  stopCoverTilt() {
    this.callService("stop_cover_tilt");
  }

  setCoverPosition(position) {
    this.callService("set_cover_position", {
      position
    });
  }

  setCoverTiltPosition(tiltPosition) {
    this.callService("set_cover_tilt_position", {
      tilt_position: tiltPosition
    });
  } // helper method


  callService(service, data = {}) {
    data.entity_id = this.stateObj.entity_id;
    this.hass.callService("cover", service, data);
  }

}
const supportsOpen = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 1);
const supportsClose = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 2);
const supportsSetPosition = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 4);
const supportsStop = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 8);
const supportsOpenTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 16);
const supportsCloseTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 32);
const supportsStopTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 64);
const supportsSetTiltPosition = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 128);
function isTiltOnly(stateObj) {
  const supportsCover = supportsOpen(stateObj) || supportsClose(stateObj) || supportsStop(stateObj);
  const supportsTilt = supportsOpenTilt(stateObj) || supportsCloseTilt(stateObj) || supportsStopTilt(stateObj);
  return supportsTilt && !supportsCover;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY292ZXItY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY292ZXItdGlsdC1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VudGl0eS1yb3dzL2h1aS1jb3Zlci1lbnRpdHktcm93LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvdmVyLW1vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuQSBzZXQgb2YgbGF5b3V0IGNsYXNzZXMgdGhhdCBsZXQgeW91IHNwZWNpZnkgbGF5b3V0IHByb3BlcnRpZXMgZGlyZWN0bHkgaW5cbm1hcmt1cC4gWW91IG11c3QgaW5jbHVkZSB0aGlzIGZpbGUgaW4gZXZlcnkgZWxlbWVudCB0aGF0IG5lZWRzIHRvIHVzZSB0aGVtLlxuXG5TYW1wbGUgdXNlOlxuXG4gICAgaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlcy5qcyc7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAudGVzdCB7IHdpZHRoOiAxMDBweDsgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQgaG9yaXpvbnRhbCBjZW50ZXItY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0XCI+aG9yaXpvbnRhbCBsYXlvdXQgY2VudGVyIGFsaWdubWVudDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQpO1xuXG5UaGUgZm9sbG93aW5nIGltcG9ydHMgYXJlIGF2YWlsYWJsZTpcbiAtIGlyb24tZmxleFxuIC0gaXJvbi1mbGV4LXJldmVyc2VcbiAtIGlyb24tZmxleC1hbGlnbm1lbnRcbiAtIGlyb24tZmxleC1mYWN0b3JzXG4gLSBpcm9uLXBvc2l0aW9uaW5nXG4qL1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4vKiBNb3N0IGNvbW1vbiB1c2VkIGZsZXggc3R5bGVzKi9cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1mbGV4XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAubGF5b3V0Lmhvcml6b250YWwsXG4gICAgICAubGF5b3V0LnZlcnRpY2FsIHtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5pbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0Lmhvcml6b250YWwge1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LnZlcnRpY2FsIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC53cmFwIHtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5uby13cmFwIHtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXIsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLWp1c3RpZmllZCxcbiAgICAgIC5sYXlvdXQuY2VudGVyLWNlbnRlciB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4IHtcbiAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtYXV0byB7XG4gICAgICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxIDEgYXV0bztcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LW5vbmUge1xuICAgICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG4vKiBCYXNpYyBmbGV4Ym94IHJldmVyc2Ugc3R5bGVzICovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleC1yZXZlcnNlXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAubGF5b3V0Lmhvcml6b250YWwtcmV2ZXJzZSxcbiAgICAgIC5sYXlvdXQudmVydGljYWwtcmV2ZXJzZSB7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuaG9yaXpvbnRhbC1yZXZlcnNlIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC52ZXJ0aWNhbC1yZXZlcnNlIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC53cmFwLXJldmVyc2Uge1xuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG4vKiBGbGV4Ym94IGFsaWdubWVudCAqL1xuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWZsZXgtYWxpZ25tZW50XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAvKipcbiAgICAgICAqIEFsaWdubWVudCBpbiBjcm9zcyBheGlzLlxuICAgICAgICovXG4gICAgICAubGF5b3V0LnN0YXJ0IHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXIsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuZW5kIHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5iYXNlbGluZSB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbGlnbm1lbnQgaW4gbWFpbiBheGlzLlxuICAgICAgICovXG4gICAgICAubGF5b3V0LnN0YXJ0LWp1c3RpZmllZCB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlci1qdXN0aWZpZWQsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmVuZC1qdXN0aWZpZWQge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5hcm91bmQtanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZWxmIGFsaWdubWVudC5cbiAgICAgICAqL1xuICAgICAgLnNlbGYtc3RhcnQge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1jZW50ZXIge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1lbmQge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1zdHJldGNoIHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgIH1cblxuICAgICAgLnNlbGYtYmFzZWxpbmUge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIG11bHRpLWxpbmUgYWxpZ25tZW50IGluIG1haW4gYXhpcy5cbiAgICAgICAqL1xuICAgICAgLmxheW91dC5zdGFydC1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdGFydDsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5lbmQtYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogZW5kOyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlci1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuYmV0d2Vlbi1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBqdXN0aWZ5OyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmFyb3VuZC1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBkaXN0cmlidXRlOyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG4vKiBOb24tZmxleGJveCBwb3NpdGlvbmluZyBoZWxwZXIgc3R5bGVzICovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleC1mYWN0b3JzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAuZmxleCxcbiAgICAgIC5mbGV4LTEge1xuICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgfVxuXG4gICAgICAuZmxleC0yIHtcbiAgICAgICAgLW1zLWZsZXg6IDI7XG4gICAgICAgIC13ZWJraXQtZmxleDogMjtcbiAgICAgICAgZmxleDogMjtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMyB7XG4gICAgICAgIC1tcy1mbGV4OiAzO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDM7XG4gICAgICAgIGZsZXg6IDM7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTQge1xuICAgICAgICAtbXMtZmxleDogNDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA0O1xuICAgICAgICBmbGV4OiA0O1xuICAgICAgfVxuXG4gICAgICAuZmxleC01IHtcbiAgICAgICAgLW1zLWZsZXg6IDU7XG4gICAgICAgIC13ZWJraXQtZmxleDogNTtcbiAgICAgICAgZmxleDogNTtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtNiB7XG4gICAgICAgIC1tcy1mbGV4OiA2O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDY7XG4gICAgICAgIGZsZXg6IDY7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTcge1xuICAgICAgICAtbXMtZmxleDogNztcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA3O1xuICAgICAgICBmbGV4OiA3O1xuICAgICAgfVxuXG4gICAgICAuZmxleC04IHtcbiAgICAgICAgLW1zLWZsZXg6IDg7XG4gICAgICAgIC13ZWJraXQtZmxleDogODtcbiAgICAgICAgZmxleDogODtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtOSB7XG4gICAgICAgIC1tcy1mbGV4OiA5O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDk7XG4gICAgICAgIGZsZXg6IDk7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTEwIHtcbiAgICAgICAgLW1zLWZsZXg6IDEwO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEwO1xuICAgICAgICBmbGV4OiAxMDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMTEge1xuICAgICAgICAtbXMtZmxleDogMTE7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTE7XG4gICAgICAgIGZsZXg6IDExO1xuICAgICAgfVxuXG4gICAgICAuZmxleC0xMiB7XG4gICAgICAgIC1tcy1mbGV4OiAxMjtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxMjtcbiAgICAgICAgZmxleDogMTI7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1wb3NpdGlvbmluZ1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaW52aXNpYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5yZWxhdGl2ZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBib2R5LmZ1bGxibGVlZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbCB7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC8qIGZpeGVkIHBvc2l0aW9uICovXG4gICAgICAuZml4ZWQtYm90dG9tLFxuICAgICAgLmZpeGVkLWxlZnQsXG4gICAgICAuZml4ZWQtcmlnaHQsXG4gICAgICAuZml4ZWQtdG9wIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtdG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLXJpZ2h0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtYm90dG9tIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLWxlZnQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IFVOQVZBSUxBQkxFIH0gZnJvbSBcIi4uL2RhdGEvZW50aXR5XCI7XG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uL3V0aWwvY292ZXItbW9kZWxcIjtcblxuY2xhc3MgSGFDb3ZlckNvbnRyb2xzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgW2ludmlzaWJsZV0ge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gY292ZXJcIlxuICAgICAgICAgIGljb249XCJbW2NvbXB1dGVPcGVuSWNvbihzdGF0ZU9iaildXVwiXG4gICAgICAgICAgb24tY2xpY2s9XCJvbk9wZW5UYXBcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNPcGVuXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlN0b3AgdGhlIGNvdmVyIGZyb20gbW92aW5nXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpzdG9wXCJcbiAgICAgICAgICBvbi1jbGljaz1cIm9uU3RvcFRhcFwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c1N0b3BdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dFN0b3BEaXNhYmxlZChzdGF0ZU9iaildXVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgY292ZXJcIlxuICAgICAgICAgIGljb249XCJbW2NvbXB1dGVDbG9zZUljb24oc3RhdGVPYmopXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwib25DbG9zZVRhcFwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c0Nsb3NlXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlT3Blbkljb24oc3RhdGVPYmopIHtcbiAgICBzd2l0Y2ggKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgICBjYXNlIFwiYXduaW5nXCI6XG4gICAgICBjYXNlIFwiZ2F0ZVwiOlxuICAgICAgICByZXR1cm4gXCJoYXNzOmFycm93LWV4cGFuZC1ob3Jpem9udGFsXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJoYXNzOmFycm93LXVwXCI7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZUNsb3NlSWNvbihzdGF0ZU9iaikge1xuICAgIHN3aXRjaCAoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpIHtcbiAgICAgIGNhc2UgXCJhd25pbmdcIjpcbiAgICAgIGNhc2UgXCJnYXRlXCI6XG4gICAgICAgIHJldHVybiBcImhhc3M6YXJyb3ctY29sbGFwc2UtaG9yaXpvbnRhbFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiaGFzczphcnJvdy1kb3duXCI7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZVN0b3BEaXNhYmxlZChzdGF0ZU9iaikge1xuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gVU5BVkFJTEFCTEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFVOQVZBSUxBQkxFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGVudGl0eU9iai5pc0Z1bGx5T3BlbiB8fCBlbnRpdHlPYmouaXNPcGVuaW5nKSAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFVOQVZBSUxBQkxFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGVudGl0eU9iai5pc0Z1bGx5Q2xvc2VkIHx8IGVudGl0eU9iai5pc0Nsb3NpbmcpICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBvbk9wZW5UYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5vcGVuQ292ZXIoKTtcbiAgfVxuXG4gIG9uQ2xvc2VUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5jbG9zZUNvdmVyKCk7XG4gIH1cblxuICBvblN0b3BUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5zdG9wQ292ZXIoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb3Zlci1jb250cm9sc1wiLCBIYUNvdmVyQ29udHJvbHMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgVU5BVkFJTEFCTEUgfSBmcm9tIFwiLi4vZGF0YS9lbnRpdHlcIjtcbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuXG5jbGFzcyBIYUNvdmVyVGlsdENvbnRyb2xzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBbaW52aXNpYmxlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gY292ZXIgdGlsdFwiXG4gICAgICAgIGljb249XCJoYXNzOmFycm93LXRvcC1yaWdodFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25PcGVuVGlsdFRhcFwiXG4gICAgICAgIHRpdGxlPVwiT3BlbiB0aWx0XCJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c09wZW5UaWx0XV1cIlxuICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTdG9wIGNvdmVyIGZyb20gbW92aW5nXCJcbiAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25TdG9wVGlsdFRhcFwiXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTdG9wVGlsdF1dXCJcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dFN0b3BEaXNhYmxlZChzdGF0ZU9iaildXVwiXG4gICAgICAgIHRpdGxlPVwiU3RvcCB0aWx0XCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBjb3ZlciB0aWx0XCJcbiAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctYm90dG9tLWxlZnRcIlxuICAgICAgICBvbi1jbGljaz1cIm9uQ2xvc2VUaWx0VGFwXCJcbiAgICAgICAgdGl0bGU9XCJDbG9zZSB0aWx0XCJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c0Nsb3NlVGlsdF1dXCJcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBlbnRpdHlPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgQ292ZXJFbnRpdHkoaGFzcywgc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZVN0b3BEaXNhYmxlZChzdGF0ZU9iaikge1xuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gVU5BVkFJTEFCTEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFVOQVZBSUxBQkxFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gZW50aXR5T2JqLmlzRnVsbHlPcGVuVGlsdCAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFVOQVZBSUxBQkxFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gZW50aXR5T2JqLmlzRnVsbHlDbG9zZWRUaWx0ICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBvbk9wZW5UaWx0VGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmoub3BlbkNvdmVyVGlsdCgpO1xuICB9XG5cbiAgb25DbG9zZVRpbHRUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5jbG9zZUNvdmVyVGlsdCgpO1xuICB9XG5cbiAgb25TdG9wVGlsdFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLnN0b3BDb3ZlclRpbHQoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb3Zlci10aWx0LWNvbnRyb2xzXCIsIEhhQ292ZXJUaWx0Q29udHJvbHMpO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb3Zlci1jb250cm9sc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb3Zlci10aWx0LWNvbnRyb2xzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc1RpbHRPbmx5IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvY292ZXItbW9kZWxcIjtcbmltcG9ydCB7IGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCB9IGZyb20gXCIuLi9jb21tb24vaGFzLWNoYW5nZWRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLWdlbmVyaWMtZW50aXR5LXJvd1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktd2FybmluZ1wiO1xuaW1wb3J0IHsgRW50aXR5Q29uZmlnLCBMb3ZlbGFjZVJvdyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWNvdmVyLWVudGl0eS1yb3dcIilcbmNsYXNzIEh1aUNvdmVyRW50aXR5Um93IGV4dGVuZHMgTGl0RWxlbWVudCBpbXBsZW1lbnRzIExvdmVsYWNlUm93IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IEVudGl0eUNvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogRW50aXR5Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFjb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbmZpZ3VyYXRpb24gZXJyb3JcIik7XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNDb25maWdPckVudGl0eUNoYW5nZWQodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZy5lbnRpdHldO1xuXG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxodWktd2FybmluZ1xuICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2Uud2FybmluZy5lbnRpdHlfbm90X2ZvdW5kXCIsXG4gICAgICAgICAgICBcImVudGl0eVwiLFxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmVudGl0eVxuICAgICAgICAgICl9PC9odWktd2FybmluZ1xuICAgICAgICA+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGh1aS1nZW5lcmljLWVudGl0eS1yb3cgLmhhc3M9JHt0aGlzLmhhc3N9IC5jb25maWc9JHt0aGlzLl9jb25maWd9PlxuICAgICAgICAke2lzVGlsdE9ubHkoc3RhdGVPYmopXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtY292ZXItdGlsdC1jb250cm9sc1xuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgICA+PC9oYS1jb3Zlci10aWx0LWNvbnRyb2xzPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWNvdmVyLWNvbnRyb2xzXG4gICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7c3RhdGVPYmp9XG4gICAgICAgICAgICAgID48L2hhLWNvdmVyLWNvbnRyb2xzPlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvaHVpLWdlbmVyaWMtZW50aXR5LXJvdz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtY292ZXItY29udHJvbHMsXG4gICAgICBoYS1jb3Zlci10aWx0LWNvbnRyb2xzIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41N2VtO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jb3Zlci1lbnRpdHktcm93XCI6IEh1aUNvdmVyRW50aXR5Um93O1xuICB9XG59XG4iLCJpbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbi8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ292ZXJFbnRpdHkge1xuICBjb25zdHJ1Y3RvcihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHRoaXMuaGFzcyA9IGhhc3M7XG4gICAgdGhpcy5zdGF0ZU9iaiA9IHN0YXRlT2JqO1xuICAgIHRoaXMuX2F0dHIgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2ZlYXQgPSB0aGlzLl9hdHRyLnN1cHBvcnRlZF9mZWF0dXJlcztcbiAgfVxuXG4gIGdldCBpc0Z1bGx5T3BlbigpIHtcbiAgICBpZiAodGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gPT09IDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwib3BlblwiO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlDbG9zZWQoKSB7XG4gICAgaWYgKHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJjbG9zZWRcIjtcbiAgfVxuXG4gIGdldCBpc0Z1bGx5T3BlblRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF90aWx0X3Bvc2l0aW9uID09PSAxMDA7XG4gIH1cblxuICBnZXQgaXNGdWxseUNsb3NlZFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF90aWx0X3Bvc2l0aW9uID09PSAwO1xuICB9XG5cbiAgZ2V0IGlzT3BlbmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJvcGVuaW5nXCI7XG4gIH1cblxuICBnZXQgaXNDbG9zaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcImNsb3NpbmdcIjtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c09wZW4oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c0Nsb3NlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU3RvcCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzT3BlblRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNDbG9zZVRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAzMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTdG9wVGlsdCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDY0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NldFRpbHRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEyOCk7XG4gIH1cblxuICBnZXQgaXNUaWx0T25seSgpIHtcbiAgICBjb25zdCBzdXBwb3J0c0NvdmVyID1cbiAgICAgIHRoaXMuc3VwcG9ydHNPcGVuIHx8IHRoaXMuc3VwcG9ydHNDbG9zZSB8fCB0aGlzLnN1cHBvcnRzU3RvcDtcbiAgICBjb25zdCBzdXBwb3J0c1RpbHQgPVxuICAgICAgdGhpcy5zdXBwb3J0c09wZW5UaWx0IHx8IHRoaXMuc3VwcG9ydHNDbG9zZVRpbHQgfHwgdGhpcy5zdXBwb3J0c1N0b3BUaWx0O1xuICAgIHJldHVybiBzdXBwb3J0c1RpbHQgJiYgIXN1cHBvcnRzQ292ZXI7XG4gIH1cblxuICBvcGVuQ292ZXIoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm9wZW5fY292ZXJcIik7XG4gIH1cblxuICBjbG9zZUNvdmVyKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJjbG9zZV9jb3ZlclwiKTtcbiAgfVxuXG4gIHN0b3BDb3ZlcigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic3RvcF9jb3ZlclwiKTtcbiAgfVxuXG4gIG9wZW5Db3ZlclRpbHQoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm9wZW5fY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIGNsb3NlQ292ZXJUaWx0KCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJjbG9zZV9jb3Zlcl90aWx0XCIpO1xuICB9XG5cbiAgc3RvcENvdmVyVGlsdCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic3RvcF9jb3Zlcl90aWx0XCIpO1xuICB9XG5cbiAgc2V0Q292ZXJQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZXRfY292ZXJfcG9zaXRpb25cIiwgeyBwb3NpdGlvbiB9KTtcbiAgfVxuXG4gIHNldENvdmVyVGlsdFBvc2l0aW9uKHRpbHRQb3NpdGlvbikge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZXRfY292ZXJfdGlsdF9wb3NpdGlvblwiLCB7XG4gICAgICB0aWx0X3Bvc2l0aW9uOiB0aWx0UG9zaXRpb24sXG4gICAgfSk7XG4gIH1cblxuICAvLyBoZWxwZXIgbWV0aG9kXG5cbiAgY2FsbFNlcnZpY2Uoc2VydmljZSwgZGF0YSA9IHt9KSB7XG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJjb3ZlclwiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNPcGVuID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDEpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNDbG9zZSA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAyKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU2V0UG9zaXRpb24gPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1N0b3AgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c09wZW5UaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDE2KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQ2xvc2VUaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDMyKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU3RvcFRpbHQgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNjQpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTZXRUaWx0UG9zaXRpb24gPSAoc3RhdGVPYmopID0+XG4gIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTI4KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGlsdE9ubHkoc3RhdGVPYmopIHtcbiAgY29uc3Qgc3VwcG9ydHNDb3ZlciA9XG4gICAgc3VwcG9ydHNPcGVuKHN0YXRlT2JqKSB8fCBzdXBwb3J0c0Nsb3NlKHN0YXRlT2JqKSB8fCBzdXBwb3J0c1N0b3Aoc3RhdGVPYmopO1xuICBjb25zdCBzdXBwb3J0c1RpbHQgPVxuICAgIHN1cHBvcnRzT3BlblRpbHQoc3RhdGVPYmopIHx8XG4gICAgc3VwcG9ydHNDbG9zZVRpbHQoc3RhdGVPYmopIHx8XG4gICAgc3VwcG9ydHNTdG9wVGlsdChzdGF0ZU9iaik7XG4gIHJldHVybiBzdXBwb3J0c1RpbHQgJiYgIXN1cHBvcnRzQ292ZXI7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpWkE7QUFDQTs7Ozs7Ozs7Ozs7O0FDMWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxIQTtBQUNBO0FBbUhBOzs7Ozs7Ozs7Ozs7QUMzSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0ZBO0FBQ0E7QUFnR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFFQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7O0FBSkE7O0FBU0E7QUFDQTs7QUFFQTs7QUFkQTtBQWlCQTs7Ozs7QUFFQTtBQUNBOzs7OztBQUFBO0FBTUE7OztBQTdEQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRIQTtBQXdIQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBSUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
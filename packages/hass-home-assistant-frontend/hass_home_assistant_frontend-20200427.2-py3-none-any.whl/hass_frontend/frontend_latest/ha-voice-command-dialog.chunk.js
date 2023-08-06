(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["ha-voice-command-dialog"],{

/***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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






/**
Material design:
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,
  is: 'paper-dialog-scrollable',
  properties: {
    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {
      type: Object
    }
  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function () {
    this._ensureTarget();

    this.classList.add('no-padding');
  },
  attached: function () {
    this._ensureTarget();

    requestAnimationFrame(this.updateScrollState.bind(this));
  },
  updateScrollState: function () {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass('can-scroll', this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass('scrolled-to-bottom', this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >= this.scrollTarget.scrollHeight);
  },
  _ensureTarget: function () {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.

    if (this.dialogElement && this.dialogElement.behaviors && this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
      this.dialogElement.sizingTarget = this.scrollTarget;
      this.scrollTarget.classList.remove('fit');
    } else if (this.dialogElement) {
      this.scrollTarget.classList.add('fit');
    }
  }
});

/***/ }),

/***/ "./src/common/dom/speech-recognition.ts":
/*!**********************************************!*\
  !*** ./src/common/dom/speech-recognition.ts ***!
  \**********************************************/
/*! exports provided: SpeechRecognition, SpeechGrammarList, SpeechRecognitionEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognition", function() { return SpeechRecognition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechGrammarList", function() { return SpeechGrammarList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionEvent", function() { return SpeechRecognitionEvent; });
/* eslint-disable */
// @ts-ignore
const SpeechRecognition = // @ts-ignore
window.SpeechRecognition || window.webkitSpeechRecognition; // @ts-ignore

const SpeechGrammarList = // @ts-ignore
window.SpeechGrammarList || window.webkitSpeechGrammarList; // @ts-ignore

const SpeechRecognitionEvent = // @ts-ignore
window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
/* eslint-enable */

/***/ }),

/***/ "./src/common/util/uid.ts":
/*!********************************!*\
  !*** ./src/common/util/uid.ts ***!
  \********************************/
/*! exports provided: uid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function uid() {
  return s4() + s4() + s4() + s4() + s4();
}

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

/***/ "./src/data/conversation.ts":
/*!**********************************!*\
  !*** ./src/data/conversation.ts ***!
  \**********************************/
/*! exports provided: processText, getAgentInfo, setConversationOnboarding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processText", function() { return processText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAgentInfo", function() { return getAgentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConversationOnboarding", function() { return setConversationOnboarding; });
const processText = (hass, text, conversation_id) => hass.callWS({
  type: "conversation/process",
  text,
  conversation_id
});
const getAgentInfo = hass => hass.callWS({
  type: "conversation/agent/info"
});
const setConversationOnboarding = (hass, value) => hass.callWS({
  type: "conversation/onboarding/set",
  shown: value
});

/***/ }),

/***/ "./src/dialogs/voice-command-dialog/ha-voice-command-dialog.ts":
/*!*********************************************************************!*\
  !*** ./src/dialogs/voice-command-dialog/ha-voice-command-dialog.ts ***!
  \*********************************************************************/
/*! exports provided: HaVoiceCommandDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaVoiceCommandDialog", function() { return HaVoiceCommandDialog; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/dom/speech-recognition */ "./src/common/dom/speech-recognition.ts");
/* harmony import */ var _common_util_uid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/util/uid */ "./src/common/util/uid.ts");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _data_conversation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/conversation */ "./src/data/conversation.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
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













let HaVoiceCommandDialog = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-voice-command-dialog")], function (_initialize, _LitElement) {
  class HaVoiceCommandDialog extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaVoiceCommandDialog,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "results",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_conversation",

      value() {
        return [{
          who: "hass",
          text: ""
        }];
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
      key: "_agentInfo",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])("#messages")],
      key: "messages",
      value: void 0
    }, {
      kind: "field",
      key: "recognition",
      value: void 0
    }, {
      kind: "field",
      key: "_conversationId",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog() {
        this._opened = true;

        if (_common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_7__["SpeechRecognition"]) {
          this._startListening();
        }

        this._agentInfo = await Object(_data_conversation__WEBPACK_IMPORTED_MODULE_10__["getAgentInfo"])(this.hass);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        // CSS custom property mixins only work in render https://github.com/Polymer/lit-element/issues/633
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style>
        paper-dialog-scrollable {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: auto;
            max-height: 50vh !important;
          }
        }

        paper-dialog-scrollable.can-scroll {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: touch;
            max-height: 50vh !important;
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          paper-dialog-scrollable {
            --paper-dialog-scrollable: {
              -webkit-overflow-scrolling: auto;
              max-height: calc(100vh - 175px) !important;
            }
          }

          paper-dialog-scrollable.can-scroll {
            --paper-dialog-scrollable: {
              -webkit-overflow-scrolling: touch;
              max-height: calc(100vh - 175px) !important;
            }
          }
        }
      </style>
      <ha-paper-dialog
        with-backdrop
        .opened=${this._opened}
        @opened-changed=${this._openedChanged}
      >
        ${this._agentInfo && this._agentInfo.onboarding ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="onboarding">
                ${this._agentInfo.onboarding.text}
                <div class="side-by-side" @click=${this._completeOnboarding}>
                  <a
                    class="button"
                    href="${this._agentInfo.onboarding.url}"
                    target="_blank"
                    rel="noreferrer"
                    ><mwc-button unelevated>Yes!</mwc-button></a
                  >
                  <mwc-button outlined>No</mwc-button>
                </div>
              </div>
            ` : ""}
        <paper-dialog-scrollable
          id="messages"
          class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
          "top-border": Boolean(this._agentInfo && this._agentInfo.onboarding)
        })}
        >
          ${this._conversation.map(message => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="${this._computeMessageClasses(message)}">
                ${message.text}
              </div>
            `)}
          ${this.results ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                <div class="message user">
                  <span
                    class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
          interimTranscript: !this.results.final
        })}
                    >${this.results.transcript}</span
                  >${!this.results.final ? "…" : ""}
                </div>
              ` : ""}
        </paper-dialog-scrollable>
        <div class="input">
          <paper-input
            @keyup=${this._handleKeyUp}
            label="${this.hass.localize(`ui.dialogs.voice_command.${_common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_7__["SpeechRecognition"] ? "label_voice" : "label"}`)}"
            autofocus
          >
            ${_common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_7__["SpeechRecognition"] ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                  <span suffix="" slot="suffix">
                    ${this.results ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                          <div class="bouncer">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                          </div>
                        ` : ""}
                    <paper-icon-button
                      .active=${Boolean(this.results)}
                      icon="hass:microphone"
                      @click=${this._toggleListening}
                    >
                    </paper-icon-button>
                  </span>
                ` : ""}
          </paper-input>
          ${this._agentInfo && this._agentInfo.attribution ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                <a
                  href=${this._agentInfo.attribution.url}
                  class="attribution"
                  target="_blank"
                  rel="noreferrer"
                  >${this._agentInfo.attribution.name}</a
                >
              ` : ""}
        </div>
      </ha-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaVoiceCommandDialog.prototype), "updated", this).call(this, changedProps);

        this._conversationId = Object(_common_util_uid__WEBPACK_IMPORTED_MODULE_8__["uid"])();
        this._conversation = [{
          who: "hass",
          text: this.hass.localize("ui.dialogs.voice_command.how_can_i_help")
        }];
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaVoiceCommandDialog.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("_conversation") || changedProps.has("results")) {
          this._scrollMessagesBottom();
        }
      }
    }, {
      kind: "method",
      key: "_addMessage",
      value: function _addMessage(message) {
        this._conversation = [...this._conversation, message];
      }
    }, {
      kind: "method",
      key: "_handleKeyUp",
      value: function _handleKeyUp(ev) {
        const input = ev.target;

        if (ev.keyCode === 13 && input.value) {
          this._processText(input.value);

          input.value = "";
        }
      }
    }, {
      kind: "method",
      key: "_completeOnboarding",
      value: function _completeOnboarding() {
        Object(_data_conversation__WEBPACK_IMPORTED_MODULE_10__["setConversationOnboarding"])(this.hass, true);
        this._agentInfo = Object.assign({}, this._agentInfo, {
          onboarding: undefined
        });
      }
    }, {
      kind: "method",
      key: "_initRecognition",
      value: function _initRecognition() {
        this.recognition = new _common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_7__["SpeechRecognition"]();
        this.recognition.interimResults = true;
        this.recognition.lang = "en-US";

        this.recognition.onstart = () => {
          this.results = {
            final: false,
            transcript: ""
          };
        };

        this.recognition.onerror = event => {
          this.recognition.abort(); // @ts-ignore

          if (event.error !== "aborted") {
            const text = this.results && this.results.transcript ? this.results.transcript : `<${this.hass.localize("ui.dialogs.voice_command.did_not_hear")}>`;

            this._addMessage({
              who: "user",
              text,
              error: true
            });
          }

          this.results = null;
        };

        this.recognition.onend = () => {
          // Already handled by onerror
          if (this.results == null) {
            return;
          }

          const text = this.results.transcript;
          this.results = null;

          if (text) {
            this._processText(text);
          } else {
            this._addMessage({
              who: "user",
              text: `<${this.hass.localize("ui.dialogs.voice_command.did_not_hear")}>`,
              error: true
            });
          }
        };

        this.recognition.onresult = event => {
          const result = event.results[0];
          this.results = {
            transcript: result[0].transcript,
            final: result.isFinal
          };
        };
      }
    }, {
      kind: "method",
      key: "_processText",
      value: async function _processText(text) {
        if (this.recognition) {
          this.recognition.abort();
        }

        this._addMessage({
          who: "user",
          text
        });

        const message = {
          who: "hass",
          text: "…"
        }; // To make sure the answer is placed at the right user text, we add it before we process it

        this._addMessage(message);

        try {
          const response = await Object(_data_conversation__WEBPACK_IMPORTED_MODULE_10__["processText"])(this.hass, text, this._conversationId);
          const plain = response.speech.plain;
          message.text = plain.speech;
          this.requestUpdate("_conversation");
        } catch {
          message.text = this.hass.localize("ui.dialogs.voice_command.error");
          message.error = true;
          this.requestUpdate("_conversation");
        }
      }
    }, {
      kind: "method",
      key: "_toggleListening",
      value: function _toggleListening() {
        if (!this.results) {
          this._startListening();
        } else {
          this.recognition.stop();
        }
      }
    }, {
      kind: "method",
      key: "_startListening",
      value: function _startListening() {
        if (!this.recognition) {
          this._initRecognition();
        }

        if (this.results) {
          return;
        }

        this.results = {
          transcript: "",
          final: false
        };
        this.recognition.start();
      }
    }, {
      kind: "method",
      key: "_scrollMessagesBottom",
      value: function _scrollMessagesBottom() {
        this.messages.scrollTarget.scrollTop = this.messages.scrollTarget.scrollHeight;

        if (this.messages.scrollTarget.scrollTop === 0) {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this.messages, "iron-resize");
        }
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        this._opened = ev.detail.value;

        if (!this._opened && this.recognition) {
          this.recognition.abort();
        }
      }
    }, {
      kind: "method",
      key: "_computeMessageClasses",
      value: function _computeMessageClasses(message) {
        return `message ${message.who} ${message.error ? " error" : ""}`;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
        :host {
          z-index: 103;
        }

        paper-icon-button {
          color: var(--secondary-text-color);
        }

        paper-icon-button[active] {
          color: var(--primary-color);
        }

        .input {
          margin: 0 0 16px 0;
        }

        ha-paper-dialog {
          width: 450px;
        }
        a.button {
          text-decoration: none;
        }
        a.button > mwc-button {
          width: 100%;
        }
        .onboarding {
          padding: 0 24px;
        }
        paper-dialog-scrollable.top-border::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--divider-color);
        }
        .side-by-side {
          display: flex;
          margin: 8px 0;
        }
        .side-by-side > * {
          flex: 1 0;
          padding: 4px;
        }
        .attribution {
          color: var(--secondary-text-color);
        }
        .message {
          font-size: 18px;
          clear: both;
          margin: 8px 0;
          padding: 8px;
          border-radius: 15px;
        }

        .message.user {
          margin-left: 24px;
          float: right;
          text-align: right;
          border-bottom-right-radius: 0px;
          background-color: var(--light-primary-color);
          color: var(--primary-text-color);
        }

        .message.hass {
          margin-right: 24px;
          float: left;
          border-bottom-left-radius: 0px;
          background-color: var(--primary-color);
          color: var(--text-primary-color);
        }

        .message a {
          color: var(--text-primary-color);
        }

        .message img {
          width: 100%;
          border-radius: 10px;
        }

        .message.error {
          background-color: var(--google-red-500);
          color: var(--text-primary-color);
        }

        .interimTranscript {
          color: var(--secondary-text-color);
        }

        .bouncer {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
        }
        .double-bounce1,
        .double-bounce2 {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--primary-color);
          opacity: 0.2;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-animation: sk-bounce 2s infinite ease-in-out;
          animation: sk-bounce 2s infinite ease-in-out;
        }
        .double-bounce2 {
          -webkit-animation-delay: -1s;
          animation-delay: -1s;
        }
        @-webkit-keyframes sk-bounce {
          0%,
          100% {
            -webkit-transform: scale(0);
          }
          50% {
            -webkit-transform: scale(1);
          }
        }
        @keyframes sk-bounce {
          0%,
          100% {
            transform: scale(0);
            -webkit-transform: scale(0);
          }
          50% {
            transform: scale(1);
            -webkit-transform: scale(1);
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          .message {
            font-size: 16px;
          }
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtdm9pY2UtY29tbWFuZC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc3BlZWNoLXJlY29nbml0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC91aWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jb252ZXJzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvdm9pY2UtY29tbWFuZC1kaWFsb2cvaGEtdm9pY2UtY29tbWFuZC1kaWFsb2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJEaWFsb2dCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bRGlhbG9nc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2RpYWxvZ3MuaHRtbClcblxuYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpbXBsZW1lbnRzIGEgc2Nyb2xsaW5nIGFyZWEgdXNlZCBpbiBhIE1hdGVyaWFsIERlc2lnblxuZGlhbG9nLiBJdCBzaG93cyBhIGRpdmlkZXIgYXQgdGhlIHRvcCBhbmQvb3IgYm90dG9tIGluZGljYXRpbmcgbW9yZSBjb250ZW50LFxuZGVwZW5kaW5nIG9uIHNjcm9sbCBwb3NpdGlvbi4gVXNlIHRoaXMgdG9nZXRoZXIgd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuSXQgc2hvd3MgYSB0b3AgZGl2aWRlciBhZnRlciBzY3JvbGxpbmcgaWYgaXQgaXMgbm90IHRoZSBmaXJzdCBjaGlsZCBpbiBpdHNcbnBhcmVudCBjb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGFib3ZlLiBJdCBzaG93cyBhIGJvdHRvbVxuZGl2aWRlciBpZiBpdCBpcyBzY3JvbGxhYmxlIGFuZCBpdCBpcyBub3QgdGhlIGxhc3QgY2hpbGQgaW4gaXRzIHBhcmVudFxuY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBiZWxvdy4gVGhlIGJvdHRvbSBkaXZpZGVyIGlzIGhpZGRlblxuaWYgaXQgaXMgc2Nyb2xsZWQgdG8gdGhlIGJvdHRvbS5cblxuSWYgYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpcyBub3QgYSBkaXJlY3QgY2hpbGQgb2YgdGhlIGVsZW1lbnQgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYCwgcmVtZW1iZXIgdG8gc2V0IHRoZSBgZGlhbG9nRWxlbWVudGA6XG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGwgaWQ9XCJteURpYWxvZ1wiPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwibXktY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgIDxoND5TdWItaGVhZGVyPC9oND5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgdmFyIHNjcm9sbGFibGUgPVxuUG9seW1lci5kb20obXlEaWFsb2cpLnF1ZXJ5U2VsZWN0b3IoJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyk7XG4gICAgICBzY3JvbGxhYmxlLmRpYWxvZ0VsZW1lbnQgPSBteURpYWxvZztcbiAgICA8L3NjcmlwdD5cblxuIyMjIFN0eWxpbmdcblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgfCBNaXhpbiBmb3IgdGhlIHNjcm9sbGFibGUgY29udGVudCB8IHt9XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXMtc2Nyb2xsZWQ6bm90KDpmaXJzdC1jaGlsZCkpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5jYW4tc2Nyb2xsOm5vdCguc2Nyb2xsZWQtdG8tYm90dG9tKTpub3QoOmxhc3QtY2hpbGQpKTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuXG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zY3JvbGw7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlO1xuICAgICAgfVxuXG4gICAgICAuZml0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cInNjcm9sbGFibGVcIiBjbGFzcz1cInNjcm9sbGFibGVcIiBvbi1zY3JvbGw9XCJ1cGRhdGVTY3JvbGxTdGF0ZVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlhbG9nIGVsZW1lbnQgdGhhdCBpbXBsZW1lbnRzIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgXG4gICAgICogY29udGFpbmluZyB0aGlzIGVsZW1lbnQuXG4gICAgICogQHR5cGUgez9Ob2RlfVxuICAgICAqL1xuICAgIGRpYWxvZ0VsZW1lbnQ6IHt0eXBlOiBPYmplY3R9XG5cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQuXG4gICAqL1xuICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLiQuc2Nyb2xsYWJsZTtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCduby1wYWRkaW5nJyk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVNjcm9sbFN0YXRlLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIHVwZGF0ZVNjcm9sbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKCdpcy1zY3JvbGxlZCcsIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA+IDApO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdjYW4tc2Nyb2xsJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0IDwgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnc2Nyb2xsZWQtdG8tYm90dG9tJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0ID49XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICB9LFxuXG4gIF9lbnN1cmVUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFJlYWQgcGFyZW50RWxlbWVudCBpbnN0ZWFkIG9mIHBhcmVudE5vZGUgaW4gb3JkZXIgdG8gc2tpcCBzaGFkb3dSb290cy5cbiAgICB0aGlzLmRpYWxvZ0VsZW1lbnQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQgfHwgdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIC8vIENoZWNrIGlmIGRpYWxvZyBpbXBsZW1lbnRzIHBhcGVyLWRpYWxvZy1iZWhhdmlvci4gSWYgbm90LCBmaXRcbiAgICAvLyBzY3JvbGxUYXJnZXQgdG8gaG9zdC5cbiAgICBpZiAodGhpcy5kaWFsb2dFbGVtZW50ICYmIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMgJiZcbiAgICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycy5pbmRleE9mKFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsKSA+PSAwKSB7XG4gICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuc2l6aW5nVGFyZ2V0ID0gdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmaXQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LmFkZCgnZml0Jyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgU3BlZWNoUmVjb2duaXRpb24gPVxuICAvLyBAdHMtaWdub3JlXG4gIHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb247XG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgU3BlZWNoR3JhbW1hckxpc3QgPVxuICAvLyBAdHMtaWdub3JlXG4gIHdpbmRvdy5TcGVlY2hHcmFtbWFyTGlzdCB8fCB3aW5kb3cud2Via2l0U3BlZWNoR3JhbW1hckxpc3Q7XG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgU3BlZWNoUmVjb2duaXRpb25FdmVudCA9XG4gIC8vIEB0cy1pZ25vcmVcbiAgd2luZG93LlNwZWVjaFJlY29nbml0aW9uRXZlbnQgfHwgd2luZG93LndlYmtpdFNwZWVjaFJlY29nbml0aW9uRXZlbnQ7XG4vKiBlc2xpbnQtZW5hYmxlICovXG4iLCJmdW5jdGlvbiBzNCgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgLnRvU3RyaW5nKDE2KVxuICAgIC5zdWJzdHJpbmcoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1aWQoKSB7XG4gIHJldHVybiBzNCgpICsgczQoKSArIHM0KCkgKyBzNCgpICsgczQoKTtcbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyXCI7XG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbiAobm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB0eXBlIHsgUGFwZXJEaWFsb2dFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXJcIjtcblxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgUGFwZXJEaWFsb2dFbGVtZW50XG4+O1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG4vLyBAdHMtaWdub3JlXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBQcm9jZXNzUmVzdWx0cyB7XG4gIGNhcmQ6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9O1xuICBzcGVlY2g6IHtcbiAgICBbU3BlZWNoVHlwZSBpbiBcInBsYWluXCIgfCBcInNzbWxcIl06IHsgZXh0cmFfZGF0YTogYW55OyBzcGVlY2g6IHN0cmluZyB9O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFnZW50SW5mbyB7XG4gIGF0dHJpYnV0aW9uPzogeyBuYW1lOiBzdHJpbmc7IHVybDogc3RyaW5nIH07XG4gIG9uYm9hcmRpbmc/OiB7IHRleHQ6IHN0cmluZzsgdXJsOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NUZXh0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB0ZXh0OiBzdHJpbmcsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBjb252ZXJzYXRpb25faWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxQcm9jZXNzUmVzdWx0cz4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29udmVyc2F0aW9uL3Byb2Nlc3NcIixcbiAgICB0ZXh0LFxuICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBZ2VudEluZm8gPSAoaGFzczogSG9tZUFzc2lzdGFudCk6IFByb21pc2U8QWdlbnRJbmZvPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb252ZXJzYXRpb24vYWdlbnQvaW5mb1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNldENvbnZlcnNhdGlvbk9uYm9hcmRpbmcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlOiBib29sZWFuXG4pOiBQcm9taXNlPGJvb2xlYW4+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbnZlcnNhdGlvbi9vbmJvYXJkaW5nL3NldFwiLFxuICAgIHNob3duOiB2YWx1ZSxcbiAgfSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IHR5cGUgeyBQYXBlckRpYWxvZ1Njcm9sbGFibGVFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB0eXBlIHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9zcGVlY2gtcmVjb2duaXRpb25cIjtcbmltcG9ydCB7IHVpZCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC91aWRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHtcbiAgQWdlbnRJbmZvLFxuICBnZXRBZ2VudEluZm8sXG4gIHByb2Nlc3NUZXh0LFxuICBzZXRDb252ZXJzYXRpb25PbmJvYXJkaW5nLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9jb252ZXJzYXRpb25cIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgd2hvOiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGVycm9yPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFJlc3VsdHMge1xuICB0cmFuc2NyaXB0OiBzdHJpbmc7XG4gIGZpbmFsOiBib29sZWFuO1xufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLXZvaWNlLWNvbW1hbmQtZGlhbG9nXCIpXG5leHBvcnQgY2xhc3MgSGFWb2ljZUNvbW1hbmREaWFsb2cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByZXN1bHRzOiBSZXN1bHRzIHwgbnVsbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29udmVyc2F0aW9uOiBNZXNzYWdlW10gPSBbXG4gICAge1xuICAgICAgd2hvOiBcImhhc3NcIixcbiAgICAgIHRleHQ6IFwiXCIsXG4gICAgfSxcbiAgXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hZ2VudEluZm8/OiBBZ2VudEluZm87XG5cbiAgQHF1ZXJ5KFwiI21lc3NhZ2VzXCIpIHByaXZhdGUgbWVzc2FnZXMhOiBQYXBlckRpYWxvZ1Njcm9sbGFibGVFbGVtZW50O1xuXG4gIHByaXZhdGUgcmVjb2duaXRpb24hOiBTcGVlY2hSZWNvZ25pdGlvbjtcblxuICBwcml2YXRlIF9jb252ZXJzYXRpb25JZD86IHN0cmluZztcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuICAgIGlmIChTcGVlY2hSZWNvZ25pdGlvbikge1xuICAgICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcbiAgICB9XG4gICAgdGhpcy5fYWdlbnRJbmZvID0gYXdhaXQgZ2V0QWdlbnRJbmZvKHRoaXMuaGFzcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICAvLyBDU1MgY3VzdG9tIHByb3BlcnR5IG1peGlucyBvbmx5IHdvcmsgaW4gcmVuZGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyL2xpdC1lbGVtZW50L2lzc3Vlcy82MzNcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgIC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGU6IHtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlLmNhbi1zY3JvbGwge1xuICAgICAgICAgIC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGU6IHtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgICAgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZToge1xuICAgICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogYXV0bztcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE3NXB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlLmNhbi1zY3JvbGwge1xuICAgICAgICAgICAgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZToge1xuICAgICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzVweCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtcGFwZXItZGlhbG9nXG4gICAgICAgIHdpdGgtYmFja2Ryb3BcbiAgICAgICAgLm9wZW5lZD0ke3RoaXMuX29wZW5lZH1cbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLl9hZ2VudEluZm8gJiYgdGhpcy5fYWdlbnRJbmZvLm9uYm9hcmRpbmdcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbmJvYXJkaW5nXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9hZ2VudEluZm8ub25ib2FyZGluZy50ZXh0fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIiBAY2xpY2s9JHt0aGlzLl9jb21wbGV0ZU9uYm9hcmRpbmd9PlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHt0aGlzLl9hZ2VudEluZm8ub25ib2FyZGluZy51cmx9XCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgID48bXdjLWJ1dHRvbiB1bmVsZXZhdGVkPlllcyE8L213Yy1idXR0b24+PC9hXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvdXRsaW5lZD5ObzwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGVcbiAgICAgICAgICBpZD1cIm1lc3NhZ2VzXCJcbiAgICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICAgIFwidG9wLWJvcmRlclwiOiBCb29sZWFuKFxuICAgICAgICAgICAgICB0aGlzLl9hZ2VudEluZm8gJiYgdGhpcy5fYWdlbnRJbmZvLm9uYm9hcmRpbmdcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMuX2NvbnZlcnNhdGlvbi5tYXAoXG4gICAgICAgICAgICAobWVzc2FnZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5fY29tcHV0ZU1lc3NhZ2VDbGFzc2VzKG1lc3NhZ2UpfVwiPlxuICAgICAgICAgICAgICAgICR7bWVzc2FnZS50ZXh0fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICAgICR7dGhpcy5yZXN1bHRzXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UgdXNlclwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgICAgICAgICAgaW50ZXJpbVRyYW5zY3JpcHQ6ICF0aGlzLnJlc3VsdHMuZmluYWwsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+JHt0aGlzLnJlc3VsdHMudHJhbnNjcmlwdH08L3NwYW5cbiAgICAgICAgICAgICAgICAgID4keyF0aGlzLnJlc3VsdHMuZmluYWwgPyBcIuKAplwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIEBrZXl1cD0ke3RoaXMuX2hhbmRsZUtleVVwfVxuICAgICAgICAgICAgbGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIGB1aS5kaWFsb2dzLnZvaWNlX2NvbW1hbmQuJHtcbiAgICAgICAgICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbiA/IFwibGFiZWxfdm9pY2VcIiA6IFwibGFiZWxcIlxuICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHtTcGVlY2hSZWNvZ25pdGlvblxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdWZmaXg9XCJcIiBzbG90PVwic3VmZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5yZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmU9JHtCb29sZWFuKHRoaXMucmVzdWx0cyl9XG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6bWljcm9waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdG9nZ2xlTGlzdGVuaW5nfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAke3RoaXMuX2FnZW50SW5mbyAmJiB0aGlzLl9hZ2VudEluZm8uYXR0cmlidXRpb25cbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj0ke3RoaXMuX2FnZW50SW5mby5hdHRyaWJ1dGlvbi51cmx9XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImF0dHJpYnV0aW9uXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID4ke3RoaXMuX2FnZW50SW5mby5hdHRyaWJ1dGlvbi5uYW1lfTwvYVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fY29udmVyc2F0aW9uSWQgPSB1aWQoKTtcbiAgICB0aGlzLl9jb252ZXJzYXRpb24gPSBbXG4gICAgICB7XG4gICAgICAgIHdobzogXCJoYXNzXCIsXG4gICAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmRpYWxvZ3Mudm9pY2VfY29tbWFuZC5ob3dfY2FuX2lfaGVscFwiKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfY29udmVyc2F0aW9uXCIpIHx8IGNoYW5nZWRQcm9wcy5oYXMoXCJyZXN1bHRzXCIpKSB7XG4gICAgICB0aGlzLl9zY3JvbGxNZXNzYWdlc0JvdHRvbSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FkZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHRoaXMuX2NvbnZlcnNhdGlvbiA9IFsuLi50aGlzLl9jb252ZXJzYXRpb24sIG1lc3NhZ2VdO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlS2V5VXAoZXY6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldCBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMgJiYgaW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMuX3Byb2Nlc3NUZXh0KGlucHV0LnZhbHVlKTtcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21wbGV0ZU9uYm9hcmRpbmcoKSB7XG4gICAgc2V0Q29udmVyc2F0aW9uT25ib2FyZGluZyh0aGlzLmhhc3MsIHRydWUpO1xuICAgIHRoaXMuX2FnZW50SW5mbyEgPSB7IC4uLnRoaXMuX2FnZW50SW5mbywgb25ib2FyZGluZzogdW5kZWZpbmVkIH07XG4gIH1cblxuICBwcml2YXRlIF9pbml0UmVjb2duaXRpb24oKSB7XG4gICAgdGhpcy5yZWNvZ25pdGlvbiA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xuICAgIHRoaXMucmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSB0cnVlO1xuICAgIHRoaXMucmVjb2duaXRpb24ubGFuZyA9IFwiZW4tVVNcIjtcblxuICAgIHRoaXMucmVjb2duaXRpb24ub25zdGFydCA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0cyA9IHtcbiAgICAgICAgZmluYWw6IGZhbHNlLFxuICAgICAgICB0cmFuc2NyaXB0OiBcIlwiLFxuICAgICAgfTtcbiAgICB9O1xuICAgIHRoaXMucmVjb2duaXRpb24ub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5yZWNvZ25pdGlvbiEuYWJvcnQoKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGlmIChldmVudC5lcnJvciAhPT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9XG4gICAgICAgICAgdGhpcy5yZXN1bHRzICYmIHRoaXMucmVzdWx0cy50cmFuc2NyaXB0XG4gICAgICAgICAgICA/IHRoaXMucmVzdWx0cy50cmFuc2NyaXB0XG4gICAgICAgICAgICA6IGA8JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnZvaWNlX2NvbW1hbmQuZGlkX25vdF9oZWFyXCJcbiAgICAgICAgICAgICAgKX0+YDtcbiAgICAgICAgdGhpcy5fYWRkTWVzc2FnZSh7IHdobzogXCJ1c2VyXCIsIHRleHQsIGVycm9yOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXN1bHRzID0gbnVsbDtcbiAgICB9O1xuICAgIHRoaXMucmVjb2duaXRpb24ub25lbmQgPSAoKSA9PiB7XG4gICAgICAvLyBBbHJlYWR5IGhhbmRsZWQgYnkgb25lcnJvclxuICAgICAgaWYgKHRoaXMucmVzdWx0cyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnJlc3VsdHMudHJhbnNjcmlwdDtcbiAgICAgIHRoaXMucmVzdWx0cyA9IG51bGw7XG4gICAgICBpZiAodGV4dCkge1xuICAgICAgICB0aGlzLl9wcm9jZXNzVGV4dCh0ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2FkZE1lc3NhZ2Uoe1xuICAgICAgICAgIHdobzogXCJ1c2VyXCIsXG4gICAgICAgICAgdGV4dDogYDwke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuZGlhbG9ncy52b2ljZV9jb21tYW5kLmRpZF9ub3RfaGVhclwiXG4gICAgICAgICAgKX0+YCxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucmVjb2duaXRpb24ub25yZXN1bHQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGV2ZW50LnJlc3VsdHNbMF07XG4gICAgICB0aGlzLnJlc3VsdHMgPSB7XG4gICAgICAgIHRyYW5zY3JpcHQ6IHJlc3VsdFswXS50cmFuc2NyaXB0LFxuICAgICAgICBmaW5hbDogcmVzdWx0LmlzRmluYWwsXG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9wcm9jZXNzVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5yZWNvZ25pdGlvbikge1xuICAgICAgdGhpcy5yZWNvZ25pdGlvbi5hYm9ydCgpO1xuICAgIH1cbiAgICB0aGlzLl9hZGRNZXNzYWdlKHsgd2hvOiBcInVzZXJcIiwgdGV4dCB9KTtcbiAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0ge1xuICAgICAgd2hvOiBcImhhc3NcIixcbiAgICAgIHRleHQ6IFwi4oCmXCIsXG4gICAgfTtcbiAgICAvLyBUbyBtYWtlIHN1cmUgdGhlIGFuc3dlciBpcyBwbGFjZWQgYXQgdGhlIHJpZ2h0IHVzZXIgdGV4dCwgd2UgYWRkIGl0IGJlZm9yZSB3ZSBwcm9jZXNzIGl0XG4gICAgdGhpcy5fYWRkTWVzc2FnZShtZXNzYWdlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm9jZXNzVGV4dChcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0aGlzLl9jb252ZXJzYXRpb25JZCFcbiAgICAgICk7XG4gICAgICBjb25zdCBwbGFpbiA9IHJlc3BvbnNlLnNwZWVjaC5wbGFpbjtcbiAgICAgIG1lc3NhZ2UudGV4dCA9IHBsYWluLnNwZWVjaDtcblxuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKFwiX2NvbnZlcnNhdGlvblwiKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIG1lc3NhZ2UudGV4dCA9IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmRpYWxvZ3Mudm9pY2VfY29tbWFuZC5lcnJvclwiKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IgPSB0cnVlO1xuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKFwiX2NvbnZlcnNhdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVMaXN0ZW5pbmcoKSB7XG4gICAgaWYgKCF0aGlzLnJlc3VsdHMpIHtcbiAgICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjb2duaXRpb24hLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdGFydExpc3RlbmluZygpIHtcbiAgICBpZiAoIXRoaXMucmVjb2duaXRpb24pIHtcbiAgICAgIHRoaXMuX2luaXRSZWNvZ25pdGlvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlc3VsdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlc3VsdHMgPSB7XG4gICAgICB0cmFuc2NyaXB0OiBcIlwiLFxuICAgICAgZmluYWw6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5yZWNvZ25pdGlvbiEuc3RhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Njcm9sbE1lc3NhZ2VzQm90dG9tKCkge1xuICAgIHRoaXMubWVzc2FnZXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IHRoaXMubWVzc2FnZXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodDtcbiAgICBpZiAodGhpcy5tZXNzYWdlcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICBmaXJlRXZlbnQodGhpcy5tZXNzYWdlcywgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIHRoaXMuX29wZW5lZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAoIXRoaXMuX29wZW5lZCAmJiB0aGlzLnJlY29nbml0aW9uKSB7XG4gICAgICB0aGlzLnJlY29nbml0aW9uLmFib3J0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZU1lc3NhZ2VDbGFzc2VzKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYG1lc3NhZ2UgJHttZXNzYWdlLndob30gJHttZXNzYWdlLmVycm9yID8gXCIgZXJyb3JcIiA6IFwiXCJ9YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHotaW5kZXg6IDEwMztcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b25bYWN0aXZlXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgfVxuICAgICAgICBhLmJ1dHRvbiB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGEuYnV0dG9uID4gbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm9uYm9hcmRpbmcge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS50b3AtYm9yZGVyOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlLWJ5LXNpZGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZS1ieS1zaWRlID4gKiB7XG4gICAgICAgICAgZmxleDogMSAwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UudXNlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZS5oYXNzIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZS5lcnJvciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmludGVyaW1UcmFuc2NyaXB0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvdW5jZXIge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kb3VibGUtYm91bmNlMSxcbiAgICAgICAgLmRvdWJsZS1ib3VuY2UyIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICAuZG91YmxlLWJvdW5jZTIge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgICAgIH1cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgICAgICAgMCUsXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgICAgICAgICAwJSxcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXZvaWNlLWNvbW1hbmQtZGlhbG9nXCI6IEhhVm9pY2VDb21tYW5kRGlhbG9nO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE4Q0E7QUFFQTtBQUVBOzs7OztBQUtBO0FBQUE7QUFBQTtBQVBBO0FBQ0E7QUFVQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuR0E7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZFQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQURBO0FBSUE7QUFLQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBZUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFDQTtBQUZBO0FBTkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE1QkE7QUFBQTtBQUFBO0FBQUE7QUErQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7OztBQUdBOzs7Ozs7OztBQVBBOzs7QUFtQkE7QUFDQTtBQURBOztBQU1BO0FBRUE7QUFDQTs7QUFIQTtBQU9BOzs7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQVJBOzs7O0FBZUE7QUFDQTs7O0FBT0E7O0FBR0E7Ozs7O0FBQUE7O0FBU0E7O0FBRUE7Ozs7QUFkQTs7QUFxQkE7O0FBR0E7Ozs7QUFJQTs7QUFQQTs7O0FBakhBO0FBK0hBO0FBL0pBO0FBQUE7QUFBQTtBQUFBO0FBa0tBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUExS0E7QUFBQTtBQUFBO0FBQUE7QUE2S0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBakxBO0FBQUE7QUFBQTtBQUFBO0FBb0xBO0FBQ0E7QUFyTEE7QUFBQTtBQUFBO0FBQUE7QUF3TEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTdMQTtBQUFBO0FBQUE7QUFBQTtBQWdNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBbE1BO0FBQUE7QUFBQTtBQUFBO0FBcU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBeFBBO0FBQUE7QUFBQTtBQUFBO0FBMlBBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBSQTtBQUFBO0FBQUE7QUFBQTtBQXVSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1UkE7QUFBQTtBQUFBO0FBQUE7QUErUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTVTQTtBQUFBO0FBQUE7QUFBQTtBQStTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFuVEE7QUFBQTtBQUFBO0FBQUE7QUFzVEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBMVRBO0FBQUE7QUFBQTtBQUFBO0FBNlRBO0FBQ0E7QUE5VEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpSkE7QUFsZEE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
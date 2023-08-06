(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-customize"],{

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
};

/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = stateObj => {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
};

/***/ }),

/***/ "./src/common/entity/states_sort_by_name.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/states_sort_by_name.ts ***!
  \**************************************************/
/*! exports provided: sortStatesByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortStatesByName", function() { return sortStatesByName; });
/* harmony import */ var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_name */ "./src/common/entity/compute_state_name.ts");
/**
 * Sort function to help sort states by name
 *
 * Usage:
 *   const states = [state1, state2]
 *   states.sort(statessortStatesByName);
 */

const sortStatesByName = (entityA, entityB) => {
  const nameA = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityA);
  const nameB = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityB);

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  /**
  * Dispatches a custom event with an optional detail value.
  *
  * @param {string} type Name of event type.
  * @param {*=} detail Detail value containing event-specific
  *   payload.
  * @param {{ bubbles: (boolean|undefined),
           cancelable: (boolean|undefined),
            composed: (boolean|undefined) }=}
  *  options Object specifying options.  These may include:
  *  `bubbles` (boolean, defaults to `true`),
  *  `cancelable` (boolean, defaults to false), and
  *  `node` on which to fire the event (HTMLElement, defaults to `this`).
  * @return {Event} The new event that was fired.
  */
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

});

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
    return {
      hass: Object,

      /**
       * Translates a string to the current `language`. Any parameters to the
       * string should be passed in order, as follows:
       * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
       */
      localize: {
        type: Function,
        computed: "__computeLocalize(hass.localize)"
      }
    };
  }

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ }),

/***/ "./src/panels/config/customize/ha-config-customize.js":
/*!************************************************************!*\
  !*** ./src/panels/config/customize/ha-config-customize.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_hass_tabs_subpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-tabs-subpage */ "./src/layouts/hass-tabs-subpage.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.ts");
/* harmony import */ var _ha_entity_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ha-entity-config */ "./src/panels/config/ha-entity-config.js");
/* harmony import */ var _ha_panel_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ha-panel-config */ "./src/panels/config/ha-panel-config.ts");
/* harmony import */ var _ha_form_customize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ha-form-customize */ "./src/panels/config/customize/ha-form-customize.js");


/* eslint-plugin-disable lit */













/*
 * @appliesMixin LocalizeMixin
 */

class HaConfigCustomize extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        ha-paper-icon-button-arrow-prev[hide] {
          visibility: hidden;
        }
      </style>

      <hass-tabs-subpage
        hass="[[hass]]"
        narrow="[[narrow]]"
        route="[[route]]"
        back-path="/config"
        tabs="[[_computeTabs()]]"
        show-advanced="[[showAdvanced]]"
      >
        <div class$="[[computeClasses(isWide)]]">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">
              [[localize('ui.panel.config.customize.picker.header')]]
            </span>
            <span slot="introduction">
              [[localize('ui.panel.config.customize.picker.introduction')]]
            </span>
            <ha-entity-config
              hass="[[hass]]"
              label="Entity"
              entities="[[entities]]"
              config="[[entityConfig]]"
            >
            </ha-entity-config>
          </ha-config-section>
        </div>
      </hass-tabs-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      narrow: Boolean,
      route: Object,
      showAdvanced: Boolean,
      entities: {
        type: Array,
        computed: "computeEntities(hass)"
      },
      entityConfig: {
        type: Object,
        value: {
          component: "ha-form-customize",
          computeSelectCaption: stateObj => Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj) + " (" + Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__["computeStateDomain"])(stateObj) + ")"
        }
      }
    };
  }

  computeClasses(isWide) {
    return isWide ? "content" : "content narrow";
  }

  _backTapped() {
    history.back();
  }

  _computeTabs() {
    return _ha_panel_config__WEBPACK_IMPORTED_MODULE_12__["configSections"].general;
  }

  computeEntities(hass) {
    return Object.keys(hass.states).map(key => hass.states[key]).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_5__["sortStatesByName"]);
  }

}

customElements.define("ha-config-customize", HaConfigCustomize);

/***/ }),

/***/ "./src/panels/config/customize/ha-customize-attribute.js":
/*!***************************************************************!*\
  !*** ./src/panels/config/customize/ha-customize-attribute.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ha-form-style */ "./src/panels/config/ha-form-style.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ha_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types_ha_customize_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/ha-customize-array */ "./src/panels/config/customize/types/ha-customize-array.js");
/* harmony import */ var _types_ha_customize_boolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/ha-customize-boolean */ "./src/panels/config/customize/types/ha-customize-boolean.js");
/* harmony import */ var _types_ha_customize_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/ha-customize-icon */ "./src/panels/config/customize/types/ha-customize-icon.js");
/* harmony import */ var _types_ha_customize_key_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/ha-customize-key-value */ "./src/panels/config/customize/types/ha-customize-key-value.js");
/* harmony import */ var _types_ha_customize_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/ha-customize-string */ "./src/panels/config/customize/types/ha-customize-string.js");


/* eslint-plugin-disable lit */










class HaCustomizeAttribute extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-form-style">
        :host {
          display: block;
          position: relative;
          padding-right: 40px;
        }

        .button {
          position: absolute;
          margin-top: -20px;
          top: 50%;
          right: 0;
        }
      </style>
      <div id="wrapper" class="form-group"></div>
      <paper-icon-button
        class="button"
        icon="[[getIcon(item.secondary)]]"
        on-click="tapButton"
      ></paper-icon-button>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notify: true,
        observer: "itemObserver"
      }
    };
  }

  tapButton() {
    if (this.item.secondary) {
      this.item = Object.assign({}, this.item, {
        secondary: false
      });
    } else {
      this.item = Object.assign({}, this.item, {
        closed: true
      });
    }
  }

  getIcon(secondary) {
    return secondary ? "hass:pencil" : "hass:close";
  }

  itemObserver(item) {
    const wrapper = this.$.wrapper;
    const tag = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TO_TAG[item.type].toUpperCase();
    let child;

    if (wrapper.lastChild && wrapper.lastChild.tagName === tag) {
      child = wrapper.lastChild;
    } else {
      if (wrapper.lastChild) {
        wrapper.removeChild(wrapper.lastChild);
      } // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
      // become a defined Custom Element. Polymer does that in some later pass.


      this.$.child = child = document.createElement(tag.toLowerCase());
      child.className = "form-control";
      child.addEventListener("item-changed", () => {
        this.item = Object.assign({}, child.item);
      });
    }

    child.setProperties({
      item: this.item
    });

    if (child.parentNode === null) {
      wrapper.appendChild(child);
    }
  }

}

customElements.define("ha-customize-attribute", HaCustomizeAttribute);

/***/ }),

/***/ "./src/panels/config/customize/ha-form-customize-attributes.js":
/*!*********************************************************************!*\
  !*** ./src/panels/config/customize/ha-form-customize-attributes.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/mutable-data */ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_customize_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-customize-attribute */ "./src/panels/config/customize/ha-customize-attribute.js");


/* eslint-plugin-disable lit */




class HaFormCustomizeAttributes extends Object(_polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__["MutableData"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        [hidden] {
          display: none;
        }
      </style>
      <template is="dom-repeat" items="{{attributes}}" mutable-data="">
        <ha-customize-attribute item="{{item}}" hidden$="[[item.closed]]">
        </ha-customize-attribute>
      </template>
    `;
  }

  static get properties() {
    return {
      attributes: {
        type: Array,
        notify: true
      }
    };
  }

}

customElements.define("ha-form-customize-attributes", HaFormCustomizeAttributes);

/***/ }),

/***/ "./src/panels/config/customize/ha-form-customize.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/customize/ha-form-customize.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");
/* harmony import */ var _ha_form_customize_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-form-customize-attributes */ "./src/panels/config/customize/ha-form-customize-attributes.js");




/* eslint-plugin-disable lit */







class HaFormCustomize extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style ha-form-style">
        .warning {
          color: red;
        }

        .attributes-text {
          padding-left: 20px;
        }
      </style>
      <template
        is="dom-if"
        if="[[computeShowWarning(localConfig, globalConfig)]]"
      >
        <div class="warning">
          [[localize('ui.panel.config.customize.warning.include_sentence')]]
          <a
            href="https://www.home-assistant.io/docs/configuration/customizing-devices/#customization-using-the-ui"
            target="_blank"
            rel="noreferrer"
            >[[localize('ui.panel.config.customize.warning.include_link')]]</a
          >.<br />
          [[localize('ui.panel.config.customize.warning.not_applied')]]
        </div>
      </template>
      <template is="dom-if" if="[[hasLocalAttributes]]">
        <h4 class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_customize')]]<br />
        </h4>
        <ha-form-customize-attributes
          attributes="{{localAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasGlobalAttributes]]">
        <h4 class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_outside')]]<br />
          [[localize('ui.panel.config.customize.different_include')]]
        </h4>
        <ha-form-customize-attributes
          attributes="{{globalAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasExistingAttributes]]">
        <h4 class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_set')]]<br />
          [[localize('ui.panel.config.customize.attributes_override')]]
        </h4>
        <ha-form-customize-attributes
          attributes="{{existingAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasNewAttributes]]">
        <h4 class="attributes-text">
          [[localize('ui.panel.config.customize.attributes_not_set')]]
        </h4>
        <ha-form-customize-attributes
          attributes="{{newAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <div class="form-group">
        <paper-dropdown-menu
          label="[[localize('ui.panel.config.customize.pick_attribute')]]"
          class="flex"
          dynamic-align=""
        >
          <paper-listbox
            slot="dropdown-content"
            selected="{{selectedNewAttribute}}"
          >
            <template
              is="dom-repeat"
              items="[[newAttributesOptions]]"
              as="option"
            >
              <paper-item>[[option]]</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      entity: Object,
      localAttributes: {
        type: Array,
        computed: "computeLocalAttributes(localConfig)"
      },
      hasLocalAttributes: Boolean,
      globalAttributes: {
        type: Array,
        computed: "computeGlobalAttributes(localConfig, globalConfig)"
      },
      hasGlobalAttributes: Boolean,
      existingAttributes: {
        type: Array,
        computed: "computeExistingAttributes(localConfig, globalConfig, entity)"
      },
      hasExistingAttributes: Boolean,
      newAttributes: {
        type: Array,
        value: []
      },
      hasNewAttributes: Boolean,
      newAttributesOptions: Array,
      selectedNewAttribute: {
        type: Number,
        value: -1,
        observer: "selectedNewAttributeObserver"
      },
      localConfig: Object,
      globalConfig: Object
    };
  }

  static get observers() {
    return ["attributesObserver(localAttributes.*, globalAttributes.*, existingAttributes.*, newAttributes.*)"];
  }

  _initOpenObject(key, value, secondary, config) {
    return Object.assign({
      attribute: key,
      value: value,
      closed: false,
      domain: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(this.entity),
      secondary: secondary,
      description: key
    }, config);
  }

  loadEntity(entity) {
    this.entity = entity;
    return this.hass.callApi("GET", "config/customize/config/" + entity.entity_id).then(data => {
      this.localConfig = data.local;
      this.globalConfig = data.global;
      this.newAttributes = [];
    });
  }

  saveEntity() {
    const data = {};
    const attrs = this.localAttributes.concat(this.globalAttributes, this.existingAttributes, this.newAttributes);
    attrs.forEach(attr => {
      if (attr.closed || attr.secondary || !attr.attribute || !attr.value) return;
      const value = attr.type === "json" ? JSON.parse(attr.value) : attr.value;
      if (!value) return;
      data[attr.attribute] = value;
    });
    const objectId = this.entity.entity_id;
    return this.hass.callApi("POST", "config/customize/config/" + objectId, data);
  }

  _computeSingleAttribute(key, value, secondary) {
    const config = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_7__["default"].LOGIC_STATE_ATTRIBUTES[key] || {
      type: _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_7__["default"].UNKNOWN_TYPE
    };
    return this._initOpenObject(key, config.type === "json" ? JSON.stringify(value) : value, secondary, config);
  }

  _computeAttributes(config, keys, secondary) {
    return keys.map(key => this._computeSingleAttribute(key, config[key], secondary));
  }

  computeLocalAttributes(localConfig) {
    if (!localConfig) return [];
    const localKeys = Object.keys(localConfig);

    const result = this._computeAttributes(localConfig, localKeys, false);

    return result;
  }

  computeGlobalAttributes(localConfig, globalConfig) {
    if (!localConfig || !globalConfig) return [];
    const localKeys = Object.keys(localConfig);
    const globalKeys = Object.keys(globalConfig).filter(key => !localKeys.includes(key));
    return this._computeAttributes(globalConfig, globalKeys, true);
  }

  computeExistingAttributes(localConfig, globalConfig, entity) {
    if (!localConfig || !globalConfig || !entity) return [];
    const localKeys = Object.keys(localConfig);
    const globalKeys = Object.keys(globalConfig);
    const entityKeys = Object.keys(entity.attributes).filter(key => !localKeys.includes(key) && !globalKeys.includes(key));
    return this._computeAttributes(entity.attributes, entityKeys, true);
  }

  computeShowWarning(localConfig, globalConfig) {
    if (!localConfig || !globalConfig) return false;
    return Object.keys(localConfig).some(key => JSON.stringify(globalConfig[key]) !== JSON.stringify(localConfig[key]));
  }

  filterFromAttributes(attributes) {
    return key => !attributes || attributes.every(attr => attr.attribute !== key || attr.closed);
  }

  getNewAttributesOptions(localAttributes, globalAttributes, existingAttributes, newAttributes) {
    const knownKeys = Object.keys(_util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_7__["default"].LOGIC_STATE_ATTRIBUTES).filter(key => {
      const conf = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_7__["default"].LOGIC_STATE_ATTRIBUTES[key];
      return conf && (!conf.domains || !this.entity || conf.domains.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(this.entity)));
    }).filter(this.filterFromAttributes(localAttributes)).filter(this.filterFromAttributes(globalAttributes)).filter(this.filterFromAttributes(existingAttributes)).filter(this.filterFromAttributes(newAttributes));
    return knownKeys.sort().concat("Other");
  }

  selectedNewAttributeObserver(selected) {
    if (selected < 0) return;
    const option = this.newAttributesOptions[selected];

    if (selected === this.newAttributesOptions.length - 1) {
      // The "Other" option.
      const attr = this._initOpenObject("", "", false
      /* secondary */
      , {
        type: _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_7__["default"].ADD_TYPE
      });

      this.push("newAttributes", attr);
      this.selectedNewAttribute = -1;
      return;
    }

    let result = this.localAttributes.findIndex(attr => attr.attribute === option);

    if (result >= 0) {
      this.set("localAttributes." + result + ".closed", false);
      this.selectedNewAttribute = -1;
      return;
    }

    result = this.globalAttributes.findIndex(attr => attr.attribute === option);

    if (result >= 0) {
      this.set("globalAttributes." + result + ".closed", false);
      this.selectedNewAttribute = -1;
      return;
    }

    result = this.existingAttributes.findIndex(attr => attr.attribute === option);

    if (result >= 0) {
      this.set("existingAttributes." + result + ".closed", false);
      this.selectedNewAttribute = -1;
      return;
    }

    result = this.newAttributes.findIndex(attr => attr.attribute === option);

    if (result >= 0) {
      this.set("newAttributes." + result + ".closed", false);
      this.selectedNewAttribute = -1;
      return;
    }

    const attr = this._computeSingleAttribute(option, "", false
    /* secondary */
    );

    this.push("newAttributes", attr);
    this.selectedNewAttribute = -1;
  }

  attributesObserver() {
    this.hasLocalAttributes = this.localAttributes && this.localAttributes.some(attr => !attr.closed);
    this.hasGlobalAttributes = this.globalAttributes && this.globalAttributes.some(attr => !attr.closed);
    this.hasExistingAttributes = this.existingAttributes && this.existingAttributes.some(attr => !attr.closed);
    this.hasNewAttributes = this.newAttributes && this.newAttributes.some(attr => !attr.closed);
    this.newAttributesOptions = this.getNewAttributesOptions(this.localAttributes, this.globalAttributes, this.existingAttributes, this.newAttributes);
  }

}

customElements.define("ha-form-customize", HaFormCustomize);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-array.js":
/*!*****************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-array.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");




/* eslint-plugin-disable lit */



/*
 * @appliesMixin EventsMixin
 */

class HaCustomizeArray extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        paper-dropdown-menu {
          margin: -9px 0;
        }
      </style>
      <paper-dropdown-menu
        label="[[item.description]]"
        disabled="[[item.secondary]]"
        selected-item-label="{{item.value}}"
        dynamic-align=""
      >
        <paper-listbox
          slot="dropdown-content"
          selected="[[computeSelected(item)]]"
        >
          <template is="dom-repeat" items="[[getOptions(item)]]" as="option">
            <paper-item>[[option]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

  getOptions(item) {
    const domain = item.domain || "*";
    const options = item.options[domain] || item.options["*"];

    if (!options) {
      this.item.type = "string";
      this.fire("item-changed");
      return [];
    }

    return options.sort();
  }

  computeSelected(item) {
    const options = this.getOptions(item);
    return options.indexOf(item.value);
  }

}

customElements.define("ha-customize-array", HaCustomizeArray);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-boolean.js":
/*!*******************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-boolean.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");


/* eslint-plugin-disable lit */



class HaCustomizeBoolean extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-checkbox disabled="[[item.secondary]]" checked="{{item.value}}">
        [[item.description]]
      </paper-checkbox>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

}

customElements.define("ha-customize-boolean", HaCustomizeBoolean);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-icon.js":
/*!****************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-icon.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



/* eslint-plugin-disable lit */



class HaCustomizeIcon extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        :host {
          @apply --layout-horizontal;
        }
        .icon-image {
          border: 1px solid grey;
          padding: 8px;
          margin-right: 20px;
          margin-top: 10px;
        }
      </style>
      <iron-icon class="icon-image" icon="[[item.value]]"></iron-icon>
      <paper-input
        disabled="[[item.secondary]]"
        label="icon"
        value="{{item.value}}"
      >
      </paper-input>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

}

customElements.define("ha-customize-icon", HaCustomizeIcon);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-key-value.js":
/*!*********************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-key-value.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");


/* eslint-plugin-disable lit */



class HaCustomizeKeyValue extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          @apply --layout-horizontal;
        }
        paper-input {
          @apply --layout-flex;
        }
        .key {
          padding-right: 20px;
        }
      </style>
      <paper-input
        disabled="[[item.secondary]]"
        class="key"
        label="Attribute name"
        value="{{item.attribute}}"
      >
      </paper-input>
      <paper-input
        disabled="[[item.secondary]]"
        label="Attribute value"
        value="{{item.value}}"
      >
      </paper-input>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

}

customElements.define("ha-customize-key-value", HaCustomizeKeyValue);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-string.js":
/*!******************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-string.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");


/* eslint-plugin-disable lit */



class HaCustomizeString extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-input
        disabled="[[item.secondary]]"
        label="[[getLabel(item)]]"
        value="{{item.value}}"
      >
      </paper-input>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object,
        notifies: true
      }
    };
  }

  getLabel(item) {
    return item.description + (item.type === "json" ? " (JSON formatted)" : "");
  }

}

customElements.define("ha-customize-string", HaCustomizeString);

/***/ }),

/***/ "./src/panels/config/ha-entity-config.js":
/*!***********************************************!*\
  !*** ./src/panels/config/ha-entity-config.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");






/* eslint-plugin-disable lit */





class HaEntityConfig extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex ha-style">
        ha-card {
          direction: ltr;
        }

        .device-picker {
          @apply --layout-horizontal;
          padding-bottom: 24px;
        }

        .form-placeholder {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: 96px;
        }

        [hidden]: {
          display: none;
        }

        .card-actions {
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
      </style>
      <ha-card>
        <div class="card-content">
          <div class="device-picker">
            <paper-dropdown-menu
              label="[[label]]"
              class="flex"
              disabled="[[!entities.length]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{selectedEntity}}"
              >
                <template is="dom-repeat" items="[[entities]]" as="state">
                  <paper-item>[[computeSelectCaption(state)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="form-container">
            <template is="dom-if" if="[[computeShowPlaceholder(formState)]]">
              <div class="form-placeholder">
                <template is="dom-if" if="[[computeShowNoDevices(formState)]]">
                  No entities found! :-(
                </template>

                <template is="dom-if" if="[[computeShowSpinner(formState)]]">
                  <paper-spinner active="" alt="[[formState]]"></paper-spinner>
                  [[formState]]
                </template>
              </div>
            </template>

            <div hidden$="[[!computeShowForm(formState)]]" id="form"></div>
          </div>
        </div>
        <div class="card-actions">
          <mwc-button
            on-click="saveEntity"
            disabled="[[computeShowPlaceholder(formState)]]"
            >SAVE</mwc-button
          >
          <template is="dom-if" if="[[allowDelete]]">
            <mwc-button
              class="warning"
              on-click="deleteEntity"
              disabled="[[computeShowPlaceholder(formState)]]"
              >DELETE</mwc-button
            >
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "hassChanged"
      },
      label: {
        type: String,
        value: "Device"
      },
      entities: {
        type: Array,
        observer: "entitiesChanged"
      },
      allowDelete: {
        type: Boolean,
        value: false
      },
      selectedEntity: {
        type: Number,
        value: -1,
        observer: "entityChanged"
      },
      formState: {
        type: String,
        // no-devices, loading, saving, editing
        value: "no-devices"
      },
      config: {
        type: Object
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.formEl = document.createElement(this.config.component);
    this.formEl.hass = this.hass;
    this.$.form.appendChild(this.formEl);
    this.entityChanged(this.selectedEntity);
  }

  computeSelectCaption(stateObj) {
    return this.config.computeSelectCaption ? this.config.computeSelectCaption(stateObj) : Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj);
  }

  computeShowNoDevices(formState) {
    return formState === "no-devices";
  }

  computeShowSpinner(formState) {
    return formState === "loading" || formState === "saving";
  }

  computeShowPlaceholder(formState) {
    return formState !== "editing";
  }

  computeShowForm(formState) {
    return formState === "editing";
  }

  hassChanged(hass) {
    if (this.formEl) {
      this.formEl.hass = hass;
    }
  }

  entitiesChanged(entities, oldEntities) {
    if (entities.length === 0) {
      this.formState = "no-devices";
      return;
    }

    if (!oldEntities) {
      this.selectedEntity = 0;
      return;
    }

    var oldEntityId = oldEntities[this.selectedEntity].entity_id;
    var newIndex = entities.findIndex(function (ent) {
      return ent.entity_id === oldEntityId;
    });

    if (newIndex === -1) {
      this.selectedEntity = 0;
    } else if (newIndex !== this.selectedEntity) {
      // Entity moved index
      this.selectedEntity = newIndex;
    }
  }

  entityChanged(index) {
    if (!this.entities || !this.formEl) return;
    var entity = this.entities[index];
    if (!entity) return;
    this.formState = "loading"; // eslint-disable-next-line @typescript-eslint/no-this-alias

    var el = this;
    this.formEl.loadEntity(entity).then(function () {
      el.formState = "editing";
    });
  }

  saveEntity() {
    this.formState = "saving"; // eslint-disable-next-line @typescript-eslint/no-this-alias

    var el = this;
    this.formEl.saveEntity().then(function () {
      el.formState = "editing";
    });
  }

}

customElements.define("ha-entity-config", HaEntityConfig);

/***/ }),

/***/ "./src/panels/config/ha-form-style.js":
/*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = `<dom-module id="ha-form-style">
  <template>
    <style>
      .form-group {
        @apply --layout-horizontal;
        @apply --layout-center;
        padding: 8px 16px;
      }

      .form-group label {
        @apply --layout-flex-2;
      }

      .form-group .form-control {
        @apply --layout-flex;
      }

      .form-group.vertical {
        @apply --layout-vertical;
        @apply --layout-start;
      }

      paper-dropdown-menu.form-control {
        margin: -9px 0;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild(documentContainer.content);

/***/ }),

/***/ "./src/util/hass-attributes-util.js":
/*!******************************************!*\
  !*** ./src/util/hass-attributes-util.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hassAttributeUtil = {};
hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
  binary_sensor: ["battery", "cold", "connectivity", "door", "garage_door", "gas", "heat", "light", "lock", "moisture", "motion", "moving", "occupancy", "opening", "plug", "power", "presence", "problem", "safety", "smoke", "sound", "vibration", "window"],
  cover: ["awning", "blind", "curtain", "damper", "door", "garage", "shade", "shutter", "window"],
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength", "timestamp"],
  switch: ["switch", "outlet"]
};
hassAttributeUtil.UNKNOWN_TYPE = "json";
hassAttributeUtil.ADD_TYPE = "key-value";
hassAttributeUtil.TYPE_TO_TAG = {
  string: "ha-customize-string",
  json: "ha-customize-string",
  icon: "ha-customize-icon",
  boolean: "ha-customize-boolean",
  array: "ha-customize-array",
  "key-value": "ha-customize-key-value"
}; // Attributes here serve dual purpose:
// 1) Any key of this object won't be shown in more-info window.
// 2) Any key which has value other than undefined will appear in customization
//    config according to its value.

hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
  entity_picture: undefined,
  friendly_name: {
    type: "string",
    description: "Name"
  },
  icon: {
    type: "icon"
  },
  emulated_hue: {
    type: "boolean",
    domains: ["emulated_hue"]
  },
  emulated_hue_name: {
    type: "string",
    domains: ["emulated_hue"]
  },
  haaska_hidden: undefined,
  haaska_name: undefined,
  supported_features: undefined,
  attribution: undefined,
  restored: undefined,
  custom_ui_more_info: {
    type: "string"
  },
  custom_ui_state_card: {
    type: "string"
  },
  device_class: {
    type: "array",
    options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
    description: "Device class",
    domains: ["binary_sensor", "cover", "sensor", "switch"]
  },
  hidden: {
    type: "boolean",
    description: "Hide from UI"
  },
  assumed_state: {
    type: "boolean",
    domains: ["switch", "light", "cover", "climate", "fan", "group", "water_heater"]
  },
  initial_state: {
    type: "string",
    domains: ["automation"]
  },
  unit_of_measurement: {
    type: "string"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (hassAttributeUtil);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWN1c3RvbWl6ZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL2hhLWNvbmZpZy1jdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL2hhLWN1c3RvbWl6ZS1hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL2hhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL2hhLWZvcm0tY3VzdG9taXplLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS90eXBlcy9oYS1jdXN0b21pemUtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL3R5cGVzL2hhLWN1c3RvbWl6ZS1ib29sZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS90eXBlcy9oYS1jdXN0b21pemUtaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvdHlwZXMvaGEtY3VzdG9taXplLWtleS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvdHlwZXMvaGEtY3VzdG9taXplLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1lbnRpdHktY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWZvcm0tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlTmFtZSA9IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsIi8qKlxuICogU29ydCBmdW5jdGlvbiB0byBoZWxwIHNvcnQgc3RhdGVzIGJ5IG5hbWVcbiAqXG4gKiBVc2FnZTpcbiAqICAgY29uc3Qgc3RhdGVzID0gW3N0YXRlMSwgc3RhdGUyXVxuICogICBzdGF0ZXMuc29ydChzdGF0ZXNzb3J0U3RhdGVzQnlOYW1lKTtcbiAqL1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuZXhwb3J0IGNvbnN0IHNvcnRTdGF0ZXNCeU5hbWUgPSAoZW50aXR5QTogSGFzc0VudGl0eSwgZW50aXR5QjogSGFzc0VudGl0eSkgPT4ge1xuICBjb25zdCBuYW1lQSA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5QSk7XG4gIGNvbnN0IG5hbWVCID0gY29tcHV0ZVN0YXRlTmFtZShlbnRpdHlCKTtcbiAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBzb3J0U3RhdGVzQnlOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVzX3NvcnRfYnlfbmFtZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3MtdGFicy1zdWJwYWdlXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCIuLi9oYS1lbnRpdHktY29uZmlnXCI7XG5pbXBvcnQgeyBjb25maWdTZWN0aW9ucyB9IGZyb20gXCIuLi9oYS1wYW5lbC1jb25maWdcIjtcbmltcG9ydCBcIi4vaGEtZm9ybS1jdXN0b21pemVcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbWl6ZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldltoaWRlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGFzcy10YWJzLXN1YnBhZ2VcbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgYmFjay1wYXRoPVwiL2NvbmZpZ1wiXG4gICAgICAgIHRhYnM9XCJbW19jb21wdXRlVGFicygpXV1cIlxuICAgICAgICBzaG93LWFkdmFuY2VkPVwiW1tzaG93QWR2YW5jZWRdXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmN1c3RvbWl6ZS5waWNrZXIuaGVhZGVyJyldXVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLnBpY2tlci5pbnRyb2R1Y3Rpb24nKV1dXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aGEtZW50aXR5LWNvbmZpZ1xuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBsYWJlbD1cIkVudGl0eVwiXG4gICAgICAgICAgICAgIGVudGl0aWVzPVwiW1tlbnRpdGllc11dXCJcbiAgICAgICAgICAgICAgY29uZmlnPVwiW1tlbnRpdHlDb25maWddXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2hhLWVudGl0eS1jb25maWc+XG4gICAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3MtdGFicy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIHJvdXRlOiBPYmplY3QsXG4gICAgICBzaG93QWR2YW5jZWQ6IEJvb2xlYW4sXG4gICAgICBlbnRpdGllczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0aWVzKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlDb25maWc6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGNvbXBvbmVudDogXCJoYS1mb3JtLWN1c3RvbWl6ZVwiLFxuICAgICAgICAgIGNvbXB1dGVTZWxlY3RDYXB0aW9uOiAoc3RhdGVPYmopID0+XG4gICAgICAgICAgICBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSArXG4gICAgICAgICAgICBcIiAoXCIgK1xuICAgICAgICAgICAgY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSArXG4gICAgICAgICAgICBcIilcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHJldHVybiBpc1dpZGUgPyBcImNvbnRlbnRcIiA6IFwiY29udGVudCBuYXJyb3dcIjtcbiAgfVxuXG4gIF9iYWNrVGFwcGVkKCkge1xuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgX2NvbXB1dGVUYWJzKCkge1xuICAgIHJldHVybiBjb25maWdTZWN0aW9ucy5nZW5lcmFsO1xuICB9XG5cbiAgY29tcHV0ZUVudGl0aWVzKGhhc3MpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IGhhc3Muc3RhdGVzW2tleV0pXG4gICAgICAuc29ydChzb3J0U3RhdGVzQnlOYW1lKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWN1c3RvbWl6ZVwiLCBIYUNvbmZpZ0N1c3RvbWl6ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBoYXNzQXR0cmlidXRlVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbFwiO1xuaW1wb3J0IFwiLi4vaGEtZm9ybS1zdHlsZVwiO1xuaW1wb3J0IFwiLi90eXBlcy9oYS1jdXN0b21pemUtYXJyYXlcIjtcbmltcG9ydCBcIi4vdHlwZXMvaGEtY3VzdG9taXplLWJvb2xlYW5cIjtcbmltcG9ydCBcIi4vdHlwZXMvaGEtY3VzdG9taXplLWljb25cIjtcbmltcG9ydCBcIi4vdHlwZXMvaGEtY3VzdG9taXplLWtleS12YWx1ZVwiO1xuaW1wb3J0IFwiLi90eXBlcy9oYS1jdXN0b21pemUtc3RyaW5nXCI7XG5cbmNsYXNzIEhhQ3VzdG9taXplQXR0cmlidXRlIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1mb3JtLXN0eWxlXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgY2xhc3M9XCJmb3JtLWdyb3VwXCI+PC9kaXY+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgY2xhc3M9XCJidXR0b25cIlxuICAgICAgICBpY29uPVwiW1tnZXRJY29uKGl0ZW0uc2Vjb25kYXJ5KV1dXCJcbiAgICAgICAgb24tY2xpY2s9XCJ0YXBCdXR0b25cIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiaXRlbU9ic2VydmVyXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB0YXBCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMuaXRlbS5zZWNvbmRhcnkpIHtcbiAgICAgIHRoaXMuaXRlbSA9IHsgLi4udGhpcy5pdGVtLCBzZWNvbmRhcnk6IGZhbHNlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbSA9IHsgLi4udGhpcy5pdGVtLCBjbG9zZWQ6IHRydWUgfTtcbiAgICB9XG4gIH1cblxuICBnZXRJY29uKHNlY29uZGFyeSkge1xuICAgIHJldHVybiBzZWNvbmRhcnkgPyBcImhhc3M6cGVuY2lsXCIgOiBcImhhc3M6Y2xvc2VcIjtcbiAgfVxuXG4gIGl0ZW1PYnNlcnZlcihpdGVtKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJC53cmFwcGVyO1xuICAgIGNvbnN0IHRhZyA9IGhhc3NBdHRyaWJ1dGVVdGlsLlRZUEVfVE9fVEFHW2l0ZW0udHlwZV0udG9VcHBlckNhc2UoKTtcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHdyYXBwZXIubGFzdENoaWxkICYmIHdyYXBwZXIubGFzdENoaWxkLnRhZ05hbWUgPT09IHRhZykge1xuICAgICAgY2hpbGQgPSB3cmFwcGVyLmxhc3RDaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHdyYXBwZXIubGFzdENoaWxkKSB7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgLy8gQ3JlYXRpbmcgYW4gZWxlbWVudCB3aXRoIHVwcGVyIGNhc2Ugd29ya3MgZmluZSBpbiBDaHJvbWUsIGJ1dCBpbiBGRiBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5XG4gICAgICAvLyBiZWNvbWUgYSBkZWZpbmVkIEN1c3RvbSBFbGVtZW50LiBQb2x5bWVyIGRvZXMgdGhhdCBpbiBzb21lIGxhdGVyIHBhc3MuXG4gICAgICB0aGlzLiQuY2hpbGQgPSBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgY2hpbGQuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIjtcbiAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJpdGVtLWNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLml0ZW0gPSB7IC4uLmNoaWxkLml0ZW0gfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjaGlsZC5zZXRQcm9wZXJ0aWVzKHsgaXRlbTogdGhpcy5pdGVtIH0pO1xuICAgIGlmIChjaGlsZC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1hdHRyaWJ1dGVcIiwgSGFDdXN0b21pemVBdHRyaWJ1dGUpO1xuIiwiaW1wb3J0IHsgTXV0YWJsZURhdGEgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL211dGFibGUtZGF0YVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIi4vaGEtY3VzdG9taXplLWF0dHJpYnV0ZVwiO1xuXG5jbGFzcyBIYUZvcm1DdXN0b21pemVBdHRyaWJ1dGVzIGV4dGVuZHMgTXV0YWJsZURhdGEoUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJ7e2F0dHJpYnV0ZXN9fVwiIG11dGFibGUtZGF0YT1cIlwiPlxuICAgICAgICA8aGEtY3VzdG9taXplLWF0dHJpYnV0ZSBpdGVtPVwie3tpdGVtfX1cIiBoaWRkZW4kPVwiW1tpdGVtLmNsb3NlZF1dXCI+XG4gICAgICAgIDwvaGEtY3VzdG9taXplLWF0dHJpYnV0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwiaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1wiLFxuICBIYUZvcm1DdXN0b21pemVBdHRyaWJ1dGVzXG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgaGFzc0F0dHJpYnV0ZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWxcIjtcbmltcG9ydCBcIi4vaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1wiO1xuXG5jbGFzcyBIYUZvcm1DdXN0b21pemUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZSBoYS1mb3JtLXN0eWxlXCI+XG4gICAgICAgIC53YXJuaW5nIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgaWY9XCJbW2NvbXB1dGVTaG93V2FybmluZyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndhcm5pbmdcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLndhcm5pbmcuaW5jbHVkZV9zZW50ZW5jZScpXV1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RvY3MvY29uZmlndXJhdGlvbi9jdXN0b21pemluZy1kZXZpY2VzLyNjdXN0b21pemF0aW9uLXVzaW5nLXRoZS11aVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmN1c3RvbWl6ZS53YXJuaW5nLmluY2x1ZGVfbGluaycpXV08L2FcbiAgICAgICAgICA+LjxiciAvPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUud2FybmluZy5ub3RfYXBwbGllZCcpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hhc0xvY2FsQXR0cmlidXRlc11dXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImF0dHJpYnV0ZXMtdGV4dFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUuYXR0cmlidXRlc19jdXN0b21pemUnKV1dPGJyIC8+XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxoYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzXG4gICAgICAgICAgYXR0cmlidXRlcz1cInt7bG9jYWxBdHRyaWJ1dGVzfX1cIlxuICAgICAgICA+PC9oYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1toYXNHbG9iYWxBdHRyaWJ1dGVzXV1cIj5cbiAgICAgICAgPGg0IGNsYXNzPVwiYXR0cmlidXRlcy10ZXh0XCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmN1c3RvbWl6ZS5hdHRyaWJ1dGVzX291dHNpZGUnKV1dPGJyIC8+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmN1c3RvbWl6ZS5kaWZmZXJlbnRfaW5jbHVkZScpXV1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGhhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXNcbiAgICAgICAgICBhdHRyaWJ1dGVzPVwie3tnbG9iYWxBdHRyaWJ1dGVzfX1cIlxuICAgICAgICA+PC9oYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1toYXNFeGlzdGluZ0F0dHJpYnV0ZXNdXVwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJhdHRyaWJ1dGVzLXRleHRcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLmF0dHJpYnV0ZXNfc2V0JyldXTxiciAvPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUuYXR0cmlidXRlc19vdmVycmlkZScpXV1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGhhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXNcbiAgICAgICAgICBhdHRyaWJ1dGVzPVwie3tleGlzdGluZ0F0dHJpYnV0ZXN9fVwiXG4gICAgICAgID48L2hhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hhc05ld0F0dHJpYnV0ZXNdXVwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJhdHRyaWJ1dGVzLXRleHRcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLmF0dHJpYnV0ZXNfbm90X3NldCcpXV1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGhhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXNcbiAgICAgICAgICBhdHRyaWJ1dGVzPVwie3tuZXdBdHRyaWJ1dGVzfX1cIlxuICAgICAgICA+PC9oYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLnBpY2tfYXR0cmlidXRlJyldXVwiXG4gICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICBzZWxlY3RlZD1cInt7c2VsZWN0ZWROZXdBdHRyaWJ1dGV9fVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgIGlzPVwiZG9tLXJlcGVhdFwiXG4gICAgICAgICAgICAgIGl0ZW1zPVwiW1tuZXdBdHRyaWJ1dGVzT3B0aW9uc11dXCJcbiAgICAgICAgICAgICAgYXM9XCJvcHRpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW29wdGlvbl1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgZW50aXR5OiBPYmplY3QsXG5cbiAgICAgIGxvY2FsQXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUxvY2FsQXR0cmlidXRlcyhsb2NhbENvbmZpZylcIixcbiAgICAgIH0sXG4gICAgICBoYXNMb2NhbEF0dHJpYnV0ZXM6IEJvb2xlYW4sXG5cbiAgICAgIGdsb2JhbEF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVHbG9iYWxBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcpXCIsXG4gICAgICB9LFxuICAgICAgaGFzR2xvYmFsQXR0cmlidXRlczogQm9vbGVhbixcblxuICAgICAgZXhpc3RpbmdBdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcImNvbXB1dGVFeGlzdGluZ0F0dHJpYnV0ZXMobG9jYWxDb25maWcsIGdsb2JhbENvbmZpZywgZW50aXR5KVwiLFxuICAgICAgfSxcbiAgICAgIGhhc0V4aXN0aW5nQXR0cmlidXRlczogQm9vbGVhbixcblxuICAgICAgbmV3QXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgfSxcbiAgICAgIGhhc05ld0F0dHJpYnV0ZXM6IEJvb2xlYW4sXG5cbiAgICAgIG5ld0F0dHJpYnV0ZXNPcHRpb25zOiBBcnJheSxcbiAgICAgIHNlbGVjdGVkTmV3QXR0cmlidXRlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJzZWxlY3RlZE5ld0F0dHJpYnV0ZU9ic2VydmVyXCIsXG4gICAgICB9LFxuXG4gICAgICBsb2NhbENvbmZpZzogT2JqZWN0LFxuICAgICAgZ2xvYmFsQ29uZmlnOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBcImF0dHJpYnV0ZXNPYnNlcnZlcihsb2NhbEF0dHJpYnV0ZXMuKiwgZ2xvYmFsQXR0cmlidXRlcy4qLCBleGlzdGluZ0F0dHJpYnV0ZXMuKiwgbmV3QXR0cmlidXRlcy4qKVwiLFxuICAgIF07XG4gIH1cblxuICBfaW5pdE9wZW5PYmplY3Qoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5LCBjb25maWcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0cmlidXRlOiBrZXksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjbG9zZWQ6IGZhbHNlLFxuICAgICAgZG9tYWluOiBjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpLFxuICAgICAgc2Vjb25kYXJ5OiBzZWNvbmRhcnksXG4gICAgICBkZXNjcmlwdGlvbjoga2V5LFxuICAgICAgLi4uY29uZmlnLFxuICAgIH07XG4gIH1cblxuICBsb2FkRW50aXR5KGVudGl0eSkge1xuICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgIHJldHVybiB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwiR0VUXCIsIFwiY29uZmlnL2N1c3RvbWl6ZS9jb25maWcvXCIgKyBlbnRpdHkuZW50aXR5X2lkKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbENvbmZpZyA9IGRhdGEubG9jYWw7XG4gICAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gZGF0YS5nbG9iYWw7XG4gICAgICAgIHRoaXMubmV3QXR0cmlidXRlcyA9IFtdO1xuICAgICAgfSk7XG4gIH1cblxuICBzYXZlRW50aXR5KCkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMubG9jYWxBdHRyaWJ1dGVzLmNvbmNhdChcbiAgICAgIHRoaXMuZ2xvYmFsQXR0cmlidXRlcyxcbiAgICAgIHRoaXMuZXhpc3RpbmdBdHRyaWJ1dGVzLFxuICAgICAgdGhpcy5uZXdBdHRyaWJ1dGVzXG4gICAgKTtcbiAgICBhdHRycy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBpZiAoYXR0ci5jbG9zZWQgfHwgYXR0ci5zZWNvbmRhcnkgfHwgIWF0dHIuYXR0cmlidXRlIHx8ICFhdHRyLnZhbHVlKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudHlwZSA9PT0gXCJqc29uXCIgPyBKU09OLnBhcnNlKGF0dHIudmFsdWUpIDogYXR0ci52YWx1ZTtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgIGRhdGFbYXR0ci5hdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvYmplY3RJZCA9IHRoaXMuZW50aXR5LmVudGl0eV9pZDtcbiAgICByZXR1cm4gdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIlBPU1RcIixcbiAgICAgIFwiY29uZmlnL2N1c3RvbWl6ZS9jb25maWcvXCIgKyBvYmplY3RJZCxcbiAgICAgIGRhdGFcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgY29uc3QgY29uZmlnID0gaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldIHx8IHtcbiAgICAgIHR5cGU6IGhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9pbml0T3Blbk9iamVjdChcbiAgICAgIGtleSxcbiAgICAgIGNvbmZpZy50eXBlID09PSBcImpzb25cIiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLFxuICAgICAgc2Vjb25kYXJ5LFxuICAgICAgY29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlcyhjb25maWcsIGtleXMsIHNlY29uZGFyeSkge1xuICAgIHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PlxuICAgICAgdGhpcy5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShrZXksIGNvbmZpZ1trZXldLCBzZWNvbmRhcnkpXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVMb2NhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnKSByZXR1cm4gW107XG4gICAgY29uc3QgbG9jYWxLZXlzID0gT2JqZWN0LmtleXMobG9jYWxDb25maWcpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnLCBsb2NhbEtleXMsIGZhbHNlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29tcHV0ZUdsb2JhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcsIGdsb2JhbENvbmZpZykge1xuICAgIGlmICghbG9jYWxDb25maWcgfHwgIWdsb2JhbENvbmZpZykgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGxvY2FsS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsQ29uZmlnKTtcbiAgICBjb25zdCBnbG9iYWxLZXlzID0gT2JqZWN0LmtleXMoZ2xvYmFsQ29uZmlnKS5maWx0ZXIoXG4gICAgICAoa2V5KSA9PiAhbG9jYWxLZXlzLmluY2x1ZGVzKGtleSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLl9jb21wdXRlQXR0cmlidXRlcyhnbG9iYWxDb25maWcsIGdsb2JhbEtleXMsIHRydWUpO1xuICB9XG5cbiAgY29tcHV0ZUV4aXN0aW5nQXR0cmlidXRlcyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnLCBlbnRpdHkpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnIHx8ICFnbG9iYWxDb25maWcgfHwgIWVudGl0eSkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGxvY2FsS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsQ29uZmlnKTtcbiAgICBjb25zdCBnbG9iYWxLZXlzID0gT2JqZWN0LmtleXMoZ2xvYmFsQ29uZmlnKTtcbiAgICBjb25zdCBlbnRpdHlLZXlzID0gT2JqZWN0LmtleXMoZW50aXR5LmF0dHJpYnV0ZXMpLmZpbHRlcihcbiAgICAgIChrZXkpID0+ICFsb2NhbEtleXMuaW5jbHVkZXMoa2V5KSAmJiAhZ2xvYmFsS2V5cy5pbmNsdWRlcyhrZXkpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZXMoZW50aXR5LmF0dHJpYnV0ZXMsIGVudGl0eUtleXMsIHRydWUpO1xuICB9XG5cbiAgY29tcHV0ZVNob3dXYXJuaW5nKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnIHx8ICFnbG9iYWxDb25maWcpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxDb25maWcpLnNvbWUoXG4gICAgICAoa2V5KSA9PlxuICAgICAgICBKU09OLnN0cmluZ2lmeShnbG9iYWxDb25maWdba2V5XSkgIT09IEpTT04uc3RyaW5naWZ5KGxvY2FsQ29uZmlnW2tleV0pXG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlckZyb21BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gKGtleSkgPT5cbiAgICAgICFhdHRyaWJ1dGVzIHx8XG4gICAgICBhdHRyaWJ1dGVzLmV2ZXJ5KChhdHRyKSA9PiBhdHRyLmF0dHJpYnV0ZSAhPT0ga2V5IHx8IGF0dHIuY2xvc2VkKTtcbiAgfVxuXG4gIGdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKFxuICAgIGxvY2FsQXR0cmlidXRlcyxcbiAgICBnbG9iYWxBdHRyaWJ1dGVzLFxuICAgIGV4aXN0aW5nQXR0cmlidXRlcyxcbiAgICBuZXdBdHRyaWJ1dGVzXG4gICkge1xuICAgIGNvbnN0IGtub3duS2V5cyA9IE9iamVjdC5rZXlzKGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpXG4gICAgICAuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgY29uZiA9IGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjb25mICYmXG4gICAgICAgICAgKCFjb25mLmRvbWFpbnMgfHxcbiAgICAgICAgICAgICF0aGlzLmVudGl0eSB8fFxuICAgICAgICAgICAgY29uZi5kb21haW5zLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLmVudGl0eSkpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhsb2NhbEF0dHJpYnV0ZXMpKVxuICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGdsb2JhbEF0dHJpYnV0ZXMpKVxuICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGV4aXN0aW5nQXR0cmlidXRlcykpXG4gICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobmV3QXR0cmlidXRlcykpO1xuICAgIHJldHVybiBrbm93bktleXMuc29ydCgpLmNvbmNhdChcIk90aGVyXCIpO1xuICB9XG5cbiAgc2VsZWN0ZWROZXdBdHRyaWJ1dGVPYnNlcnZlcihzZWxlY3RlZCkge1xuICAgIGlmIChzZWxlY3RlZCA8IDApIHJldHVybjtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLm5ld0F0dHJpYnV0ZXNPcHRpb25zW3NlbGVjdGVkXTtcbiAgICBpZiAoc2VsZWN0ZWQgPT09IHRoaXMubmV3QXR0cmlidXRlc09wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgLy8gVGhlIFwiT3RoZXJcIiBvcHRpb24uXG4gICAgICBjb25zdCBhdHRyID0gdGhpcy5faW5pdE9wZW5PYmplY3QoXCJcIiwgXCJcIiwgZmFsc2UgLyogc2Vjb25kYXJ5ICovLCB7XG4gICAgICAgIHR5cGU6IGhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnB1c2goXCJuZXdBdHRyaWJ1dGVzXCIsIGF0dHIpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5sb2NhbEF0dHJpYnV0ZXMuZmluZEluZGV4KFxuICAgICAgKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb25cbiAgICApO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJsb2NhbEF0dHJpYnV0ZXMuXCIgKyByZXN1bHQgKyBcIi5jbG9zZWRcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXN1bHQgPSB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMuZmluZEluZGV4KFxuICAgICAgKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb25cbiAgICApO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJnbG9iYWxBdHRyaWJ1dGVzLlwiICsgcmVzdWx0ICsgXCIuY2xvc2VkXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROZXdBdHRyaWJ1dGUgPSAtMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzdWx0ID0gdGhpcy5leGlzdGluZ0F0dHJpYnV0ZXMuZmluZEluZGV4KFxuICAgICAgKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb25cbiAgICApO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJleGlzdGluZ0F0dHJpYnV0ZXMuXCIgKyByZXN1bHQgKyBcIi5jbG9zZWRcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXN1bHQgPSB0aGlzLm5ld0F0dHJpYnV0ZXMuZmluZEluZGV4KChhdHRyKSA9PiBhdHRyLmF0dHJpYnV0ZSA9PT0gb3B0aW9uKTtcbiAgICBpZiAocmVzdWx0ID49IDApIHtcbiAgICAgIHRoaXMuc2V0KFwibmV3QXR0cmlidXRlcy5cIiArIHJlc3VsdCArIFwiLmNsb3NlZFwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKFxuICAgICAgb3B0aW9uLFxuICAgICAgXCJcIixcbiAgICAgIGZhbHNlIC8qIHNlY29uZGFyeSAqL1xuICAgICk7XG4gICAgdGhpcy5wdXNoKFwibmV3QXR0cmlidXRlc1wiLCBhdHRyKTtcbiAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gIH1cblxuICBhdHRyaWJ1dGVzT2JzZXJ2ZXIoKSB7XG4gICAgdGhpcy5oYXNMb2NhbEF0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5sb2NhbEF0dHJpYnV0ZXMgJiYgdGhpcy5sb2NhbEF0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLmhhc0dsb2JhbEF0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5nbG9iYWxBdHRyaWJ1dGVzICYmXG4gICAgICB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLmhhc0V4aXN0aW5nQXR0cmlidXRlcyA9XG4gICAgICB0aGlzLmV4aXN0aW5nQXR0cmlidXRlcyAmJlxuICAgICAgdGhpcy5leGlzdGluZ0F0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLmhhc05ld0F0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5uZXdBdHRyaWJ1dGVzICYmIHRoaXMubmV3QXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiAhYXR0ci5jbG9zZWQpO1xuICAgIHRoaXMubmV3QXR0cmlidXRlc09wdGlvbnMgPSB0aGlzLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKFxuICAgICAgdGhpcy5sb2NhbEF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLmV4aXN0aW5nQXR0cmlidXRlcyxcbiAgICAgIHRoaXMubmV3QXR0cmlidXRlc1xuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWZvcm0tY3VzdG9taXplXCIsIEhhRm9ybUN1c3RvbWl6ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUN1c3RvbWl6ZUFycmF5IGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgbWFyZ2luOiAtOXB4IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICBsYWJlbD1cIltbaXRlbS5kZXNjcmlwdGlvbl1dXCJcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2l0ZW0uc2Vjb25kYXJ5XV1cIlxuICAgICAgICBzZWxlY3RlZC1pdGVtLWxhYmVsPVwie3tpdGVtLnZhbHVlfX1cIlxuICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgc2VsZWN0ZWQ9XCJbW2NvbXB1dGVTZWxlY3RlZChpdGVtKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZ2V0T3B0aW9ucyhpdGVtKV1dXCIgYXM9XCJvcHRpb25cIj5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtPltbb3B0aW9uXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGdldE9wdGlvbnMoaXRlbSkge1xuICAgIGNvbnN0IGRvbWFpbiA9IGl0ZW0uZG9tYWluIHx8IFwiKlwiO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBpdGVtLm9wdGlvbnNbZG9tYWluXSB8fCBpdGVtLm9wdGlvbnNbXCIqXCJdO1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgdGhpcy5pdGVtLnR5cGUgPSBcInN0cmluZ1wiO1xuICAgICAgdGhpcy5maXJlKFwiaXRlbS1jaGFuZ2VkXCIpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucy5zb3J0KCk7XG4gIH1cblxuICBjb21wdXRlU2VsZWN0ZWQoaXRlbSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoaXRlbSk7XG4gICAgcmV0dXJuIG9wdGlvbnMuaW5kZXhPZihpdGVtLnZhbHVlKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY3VzdG9taXplLWFycmF5XCIsIEhhQ3VzdG9taXplQXJyYXkpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ3VzdG9taXplQm9vbGVhbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1jaGVja2JveCBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiIGNoZWNrZWQ9XCJ7e2l0ZW0udmFsdWV9fVwiPlxuICAgICAgICBbW2l0ZW0uZGVzY3JpcHRpb25dXVxuICAgICAgPC9wYXBlci1jaGVja2JveD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZpZXM6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1ib29sZWFuXCIsIEhhQ3VzdG9taXplQm9vbGVhbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDdXN0b21pemVJY29uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24taW1hZ2Uge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGlyb24taWNvbiBjbGFzcz1cImljb24taW1hZ2VcIiBpY29uPVwiW1tpdGVtLnZhbHVlXV1cIj48L2lyb24taWNvbj5cbiAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiXG4gICAgICAgIGxhYmVsPVwiaWNvblwiXG4gICAgICAgIHZhbHVlPVwie3tpdGVtLnZhbHVlfX1cIlxuICAgICAgPlxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZpZXM6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1pY29uXCIsIEhhQ3VzdG9taXplSWNvbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDdXN0b21pemVLZXlWYWx1ZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgICAgfVxuICAgICAgICAua2V5IHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCJcbiAgICAgICAgY2xhc3M9XCJrZXlcIlxuICAgICAgICBsYWJlbD1cIkF0dHJpYnV0ZSBuYW1lXCJcbiAgICAgICAgdmFsdWU9XCJ7e2l0ZW0uYXR0cmlidXRlfX1cIlxuICAgICAgPlxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiXG4gICAgICAgIGxhYmVsPVwiQXR0cmlidXRlIHZhbHVlXCJcbiAgICAgICAgdmFsdWU9XCJ7e2l0ZW0udmFsdWV9fVwiXG4gICAgICA+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY3VzdG9taXplLWtleS12YWx1ZVwiLCBIYUN1c3RvbWl6ZUtleVZhbHVlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYUN1c3RvbWl6ZVN0cmluZyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiXG4gICAgICAgIGxhYmVsPVwiW1tnZXRMYWJlbChpdGVtKV1dXCJcbiAgICAgICAgdmFsdWU9XCJ7e2l0ZW0udmFsdWV9fVwiXG4gICAgICA+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGdldExhYmVsKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5kZXNjcmlwdGlvbiArIChpdGVtLnR5cGUgPT09IFwianNvblwiID8gXCIgKEpTT04gZm9ybWF0dGVkKVwiIDogXCJcIik7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIiwgSGFDdXN0b21pemVTdHJpbmcpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5jbGFzcyBIYUVudGl0eUNvbmZpZyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0tcGxhY2Vob2xkZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDk2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXToge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtanVzdGlmaWVkO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xhYmVsXV1cIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIWVudGl0aWVzLmxlbmd0aF1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkRW50aXR5fX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tlbnRpdGllc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZSldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjb21wdXRlU2hvd1BsYWNlaG9sZGVyKGZvcm1TdGF0ZSldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjb21wdXRlU2hvd05vRGV2aWNlcyhmb3JtU3RhdGUpXV1cIj5cbiAgICAgICAgICAgICAgICAgIE5vIGVudGl0aWVzIGZvdW5kISA6LShcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVTaG93U3Bpbm5lcihmb3JtU3RhdGUpXV1cIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiIGFsdD1cIltbZm9ybVN0YXRlXV1cIj48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICBbW2Zvcm1TdGF0ZV1dXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFjb21wdXRlU2hvd0Zvcm0oZm9ybVN0YXRlKV1dXCIgaWQ9XCJmb3JtXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgIG9uLWNsaWNrPVwic2F2ZUVudGl0eVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZVNob3dQbGFjZWhvbGRlcihmb3JtU3RhdGUpXV1cIlxuICAgICAgICAgICAgPlNBVkU8L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2FsbG93RGVsZXRlXV1cIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwiZGVsZXRlRW50aXR5XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVTaG93UGxhY2Vob2xkZXIoZm9ybVN0YXRlKV1dXCJcbiAgICAgICAgICAgICAgPkRFTEVURTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJEZXZpY2VcIixcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBvYnNlcnZlcjogXCJlbnRpdGllc0NoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGFsbG93RGVsZXRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkRW50aXR5OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJlbnRpdHlDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBmb3JtU3RhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAvLyBuby1kZXZpY2VzLCBsb2FkaW5nLCBzYXZpbmcsIGVkaXRpbmdcbiAgICAgICAgdmFsdWU6IFwibm8tZGV2aWNlc1wiLFxuICAgICAgfSxcblxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5mb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuY29uZmlnLmNvbXBvbmVudCk7XG4gICAgdGhpcy5mb3JtRWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICB0aGlzLiQuZm9ybS5hcHBlbmRDaGlsZCh0aGlzLmZvcm1FbCk7XG4gICAgdGhpcy5lbnRpdHlDaGFuZ2VkKHRoaXMuc2VsZWN0ZWRFbnRpdHkpO1xuICB9XG5cbiAgY29tcHV0ZVNlbGVjdENhcHRpb24oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuY29tcHV0ZVNlbGVjdENhcHRpb25cbiAgICAgID8gdGhpcy5jb25maWcuY29tcHV0ZVNlbGVjdENhcHRpb24oc3RhdGVPYmopXG4gICAgICA6IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZVNob3dOb0RldmljZXMoZm9ybVN0YXRlKSB7XG4gICAgcmV0dXJuIGZvcm1TdGF0ZSA9PT0gXCJuby1kZXZpY2VzXCI7XG4gIH1cblxuICBjb21wdXRlU2hvd1NwaW5uZXIoZm9ybVN0YXRlKSB7XG4gICAgcmV0dXJuIGZvcm1TdGF0ZSA9PT0gXCJsb2FkaW5nXCIgfHwgZm9ybVN0YXRlID09PSBcInNhdmluZ1wiO1xuICB9XG5cbiAgY29tcHV0ZVNob3dQbGFjZWhvbGRlcihmb3JtU3RhdGUpIHtcbiAgICByZXR1cm4gZm9ybVN0YXRlICE9PSBcImVkaXRpbmdcIjtcbiAgfVxuXG4gIGNvbXB1dGVTaG93Rm9ybShmb3JtU3RhdGUpIHtcbiAgICByZXR1cm4gZm9ybVN0YXRlID09PSBcImVkaXRpbmdcIjtcbiAgfVxuXG4gIGhhc3NDaGFuZ2VkKGhhc3MpIHtcbiAgICBpZiAodGhpcy5mb3JtRWwpIHtcbiAgICAgIHRoaXMuZm9ybUVsLmhhc3MgPSBoYXNzO1xuICAgIH1cbiAgfVxuXG4gIGVudGl0aWVzQ2hhbmdlZChlbnRpdGllcywgb2xkRW50aXRpZXMpIHtcbiAgICBpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmZvcm1TdGF0ZSA9IFwibm8tZGV2aWNlc1wiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW9sZEVudGl0aWVzKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb2xkRW50aXR5SWQgPSBvbGRFbnRpdGllc1t0aGlzLnNlbGVjdGVkRW50aXR5XS5lbnRpdHlfaWQ7XG5cbiAgICB2YXIgbmV3SW5kZXggPSBlbnRpdGllcy5maW5kSW5kZXgoZnVuY3Rpb24gKGVudCkge1xuICAgICAgcmV0dXJuIGVudC5lbnRpdHlfaWQgPT09IG9sZEVudGl0eUlkO1xuICAgIH0pO1xuXG4gICAgaWYgKG5ld0luZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IDA7XG4gICAgfSBlbHNlIGlmIChuZXdJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEVudGl0eSkge1xuICAgICAgLy8gRW50aXR5IG1vdmVkIGluZGV4XG4gICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gbmV3SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgZW50aXR5Q2hhbmdlZChpbmRleCkge1xuICAgIGlmICghdGhpcy5lbnRpdGllcyB8fCAhdGhpcy5mb3JtRWwpIHJldHVybjtcbiAgICB2YXIgZW50aXR5ID0gdGhpcy5lbnRpdGllc1tpbmRleF07XG4gICAgaWYgKCFlbnRpdHkpIHJldHVybjtcblxuICAgIHRoaXMuZm9ybVN0YXRlID0gXCJsb2FkaW5nXCI7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB0aGlzLmZvcm1FbC5sb2FkRW50aXR5KGVudGl0eSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBlbC5mb3JtU3RhdGUgPSBcImVkaXRpbmdcIjtcbiAgICB9KTtcbiAgfVxuXG4gIHNhdmVFbnRpdHkoKSB7XG4gICAgdGhpcy5mb3JtU3RhdGUgPSBcInNhdmluZ1wiO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdGhpcy5mb3JtRWwuc2F2ZUVudGl0eSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgZWwuZm9ybVN0YXRlID0gXCJlZGl0aW5nXCI7XG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZW50aXR5LWNvbmZpZ1wiLCBIYUVudGl0eUNvbmZpZyk7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbmRvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cImhhLWZvcm0tc3R5bGVcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LTI7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAudmVydGljYWwge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItZHJvcGRvd24tbWVudS5mb3JtLWNvbnRyb2wge1xuICAgICAgICBtYXJnaW46IC05cHggMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJjb2xkXCIsXG4gICAgXCJjb25uZWN0aXZpdHlcIixcbiAgICBcImRvb3JcIixcbiAgICBcImdhcmFnZV9kb29yXCIsXG4gICAgXCJnYXNcIixcbiAgICBcImhlYXRcIixcbiAgICBcImxpZ2h0XCIsXG4gICAgXCJsb2NrXCIsXG4gICAgXCJtb2lzdHVyZVwiLFxuICAgIFwibW90aW9uXCIsXG4gICAgXCJtb3ZpbmdcIixcbiAgICBcIm9jY3VwYW5jeVwiLFxuICAgIFwib3BlbmluZ1wiLFxuICAgIFwicGx1Z1wiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInByZXNlbmNlXCIsXG4gICAgXCJwcm9ibGVtXCIsXG4gICAgXCJzYWZldHlcIixcbiAgICBcInNtb2tlXCIsXG4gICAgXCJzb3VuZFwiLFxuICAgIFwidmlicmF0aW9uXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgY292ZXI6IFtcbiAgICBcImF3bmluZ1wiLFxuICAgIFwiYmxpbmRcIixcbiAgICBcImN1cnRhaW5cIixcbiAgICBcImRhbXBlclwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlXCIsXG4gICAgXCJzaGFkZVwiLFxuICAgIFwic2h1dHRlclwiLFxuICAgIFwid2luZG93XCIsXG4gIF0sXG4gIHNlbnNvcjogW1xuICAgIFwiYmF0dGVyeVwiLFxuICAgIFwiaHVtaWRpdHlcIixcbiAgICBcImlsbHVtaW5hbmNlXCIsXG4gICAgXCJ0ZW1wZXJhdHVyZVwiLFxuICAgIFwicHJlc3N1cmVcIixcbiAgICBcInBvd2VyXCIsXG4gICAgXCJzaWduYWxfc3RyZW5ndGhcIixcbiAgICBcInRpbWVzdGFtcFwiLFxuICBdLFxuICBzd2l0Y2g6IFtcInN3aXRjaFwiLCBcIm91dGxldFwiXSxcbn07XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9IFwianNvblwiO1xuaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUgPSBcImtleS12YWx1ZVwiO1xuXG5oYXNzQXR0cmlidXRlVXRpbC5UWVBFX1RPX1RBRyA9IHtcbiAgc3RyaW5nOiBcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIixcbiAganNvbjogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGljb246IFwiaGEtY3VzdG9taXplLWljb25cIixcbiAgYm9vbGVhbjogXCJoYS1jdXN0b21pemUtYm9vbGVhblwiLFxuICBhcnJheTogXCJoYS1jdXN0b21pemUtYXJyYXlcIixcbiAgXCJrZXktdmFsdWVcIjogXCJoYS1jdXN0b21pemUta2V5LXZhbHVlXCIsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyB8fCB7XG4gIGVudGl0eV9waWN0dXJlOiB1bmRlZmluZWQsXG4gIGZyaWVuZGx5X25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiwgZGVzY3JpcHRpb246IFwiTmFtZVwiIH0sXG4gIGljb246IHsgdHlwZTogXCJpY29uXCIgfSxcbiAgZW11bGF0ZWRfaHVlOiB7XG4gICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBlbXVsYXRlZF9odWVfbmFtZToge1xuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBoYWFza2FfaGlkZGVuOiB1bmRlZmluZWQsXG4gIGhhYXNrYV9uYW1lOiB1bmRlZmluZWQsXG4gIHN1cHBvcnRlZF9mZWF0dXJlczogdW5kZWZpbmVkLFxuICBhdHRyaWJ1dGlvbjogdW5kZWZpbmVkLFxuICByZXN0b3JlZDogdW5kZWZpbmVkLFxuICBjdXN0b21fdWlfbW9yZV9pbmZvOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBkZXZpY2VfY2xhc3M6IHtcbiAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgb3B0aW9uczogaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZpY2UgY2xhc3NcIixcbiAgICBkb21haW5zOiBbXCJiaW5hcnlfc2Vuc29yXCIsIFwiY292ZXJcIiwgXCJzZW5zb3JcIiwgXCJzd2l0Y2hcIl0sXG4gIH0sXG4gIGhpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiwgZGVzY3JpcHRpb246IFwiSGlkZSBmcm9tIFVJXCIgfSxcbiAgYXNzdW1lZF9zdGF0ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgIFwic3dpdGNoXCIsXG4gICAgICBcImxpZ2h0XCIsXG4gICAgICBcImNvdmVyXCIsXG4gICAgICBcImNsaW1hdGVcIixcbiAgICAgIFwiZmFuXCIsXG4gICAgICBcImdyb3VwXCIsXG4gICAgICBcIndhdGVyX2hlYXRlclwiLFxuICAgIF0sXG4gIH0sXG4gIGluaXRpYWxfc3RhdGU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImF1dG9tYXRpb25cIl0sXG4gIH0sXG4gIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFzc0F0dHJpYnV0ZVV0aWw7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFYQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFqRkE7QUFDQTtBQWlGQTs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZFQTtBQUNBO0FBdUVBOzs7Ozs7Ozs7Ozs7QUNwRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBdkJBO0FBQ0E7QUF1QkE7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQXhDQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFNQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFFQTtBQU1BO0FBQ0E7QUEzVUE7QUFDQTtBQTJVQTs7Ozs7Ozs7Ozs7O0FDdlZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERBO0FBQ0E7QUFrREE7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQWpCQTtBQUNBO0FBaUJBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQWhDQTtBQUNBO0FBZ0NBOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBdENBO0FBQ0E7QUFzQ0E7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQ0E7QUF3QkE7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUErRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBakNBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVNQTtBQUNBO0FBNk1BOzs7Ozs7Ozs7OztBQ3pOQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJBOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUVBO0FBQ0E7QUF5QkE7QUFXQTtBQVVBO0FBL0NBO0FBa0RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQTFDQTtBQTZDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
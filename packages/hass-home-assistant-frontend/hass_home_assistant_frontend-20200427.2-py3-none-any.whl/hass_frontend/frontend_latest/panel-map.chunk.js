(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-map"],{

/***/ "./src/common/dom/setup-leaflet-map.ts":
/*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
/*! exports provided: setupLeafletMap, createTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLeafletMap", function() { return setupLeafletMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileLayer", function() { return createTileLayer; });
// Sets up a Leaflet map on the provided DOM element
const setupLeafletMap = async (mapElement, darkMode = false, draw = false) => {
  if (!mapElement.parentNode) {
    throw new Error("Cannot setup Leaflet map on disconnected element");
  } // eslint-disable-next-line


  const Leaflet = await __webpack_require__.e(/*! import() | leaflet */ "vendors~leaflet").then(__webpack_require__.t.bind(null, /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js", 7));
  Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";

  if (draw) {
    await __webpack_require__.e(/*! import() | leaflet-draw */ "vendors~leaflet-draw").then(__webpack_require__.t.bind(null, /*! leaflet-draw */ "./node_modules/leaflet-draw/dist/leaflet.draw.js", 7));
  }

  const map = Leaflet.map(mapElement);
  const style = document.createElement("link");
  style.setAttribute("href", "/static/images/leaflet/leaflet.css");
  style.setAttribute("rel", "stylesheet");
  mapElement.parentNode.appendChild(style);
  map.setView([52.3731339, 4.8903147], 13);
  createTileLayer(Leaflet, darkMode).addTo(map);
  return [map, Leaflet];
};
const createTileLayer = (leaflet, darkMode) => {
  return leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/${darkMode ? "dark_all" : "light_all"}/{z}/{x}/{y}${leaflet.Browser.retina ? "@2x.png" : ".png"}`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20
  });
};

/***/ }),

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

/***/ "./src/data/zone.ts":
/*!**************************!*\
  !*** ./src/data/zone.ts ***!
  \**************************/
/*! exports provided: defaultRadiusColor, homeRadiusColor, passiveRadiusColor, fetchZones, createZone, updateZone, deleteZone, showZoneEditor, getZoneEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRadiusColor", function() { return defaultRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRadiusColor", function() { return homeRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveRadiusColor", function() { return passiveRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchZones", function() { return fetchZones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createZone", function() { return createZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateZone", function() { return updateZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteZone", function() { return deleteZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showZoneEditor", function() { return showZoneEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneEditorInitData", function() { return getZoneEditorInitData; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const defaultRadiusColor = "#FF9800";
const homeRadiusColor = "#03a9f4";
const passiveRadiusColor = "#9b9b9b";
const fetchZones = hass => hass.callWS({
  type: "zone/list"
});
const createZone = (hass, values) => hass.callWS(Object.assign({
  type: "zone/create"
}, values));
const updateZone = (hass, zoneId, updates) => hass.callWS(Object.assign({
  type: "zone/update",
  zone_id: zoneId
}, updates));
const deleteZone = (hass, zoneId) => hass.callWS({
  type: "zone/delete",
  zone_id: zoneId
});
let inititialZoneEditorData;
const showZoneEditor = (el, data) => {
  inititialZoneEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/zone/new");
};
const getZoneEditorInitData = () => {
  const data = inititialZoneEditorData;
  inititialZoneEditorData = undefined;
  return data;
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

/***/ "./src/panels/map/ha-entity-marker.js":
/*!********************************************!*\
  !*** ./src/panels/map/ha-entity-marker.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_image_iron_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-image/iron-image */ "./node_modules/@polymer/iron-image/iron-image.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");


/* eslint-plugin-disable lit */



/*
 * @appliesMixin EventsMixin
 */

class HaEntityMarker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          vertical-align: top;
          position: relative;
          display: block;
          margin: 0 auto;
          width: 2.5em;
          text-align: center;
          height: 2.5em;
          line-height: 2.5em;
          font-size: 1.5em;
          border-radius: 50%;
          border: 0.1em solid
            var(--ha-marker-color, var(--default-primary-color));
          color: rgb(76, 76, 76);
          background-color: white;
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker" style$="border-color:{{entityColor}}">
        <template is="dom-if" if="[[entityName]]">[[entityName]]</template>
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      entityId: {
        type: String,
        value: ""
      },
      entityName: {
        type: String,
        value: null
      },
      entityPicture: {
        type: String,
        value: null
      },
      entityColor: {
        type: String,
        value: null
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.badgeTap(ev));
  }

  badgeTap(ev) {
    ev.stopPropagation();

    if (this.entityId) {
      this.fire("hass-more-info", {
        entityId: this.entityId
      });
    }
  }

}

customElements.define("ha-entity-marker", HaEntityMarker);

/***/ }),

/***/ "./src/panels/map/ha-panel-map.js":
/*!****************************************!*\
  !*** ./src/panels/map/ha-panel-map.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _data_zone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/zone */ "./src/data/zone.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_entity_marker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ha-entity-marker */ "./src/panels/map/ha-entity-marker.js");


/* eslint-plugin-disable lit */











/*
 * @appliesMixin LocalizeMixin
 */

class HaPanelMap extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        #map {
          height: calc(100% - 64px);
          width: 100%;
          z-index: 0;
        }

        .light {
          color: #000000;
        }
      </style>

      <app-toolbar>
        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>
        <div main-title>[[localize('panel.map')]]</div>
        <template is="dom-if" if="[[computeShowEditZone(hass)]]">
          <paper-icon-button
            icon="hass:pencil"
            on-click="openZonesEditor"
          ></paper-icon-button>
        </template>
      </app-toolbar>

      <div id="map"></div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "drawEntities"
      },
      narrow: Boolean
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMap();
  }

  async loadMap() {
    [this._map, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_3__["setupLeafletMap"])(this.$.map);
    this.drawEntities(this.hass);

    this._map.invalidateSize();

    this.fitMap();
  }

  disconnectedCallback() {
    if (this._map) {
      this._map.remove();
    }
  }

  computeShowEditZone(hass) {
    return  true && hass.user.is_admin;
  }

  openZonesEditor() {
    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_6__["navigate"])(this, "/config/zone");
  }

  fitMap() {
    var bounds;

    if (this._mapItems.length === 0) {
      this._map.setView(new this.Leaflet.LatLng(this.hass.config.latitude, this.hass.config.longitude), 14);
    } else {
      bounds = new this.Leaflet.latLngBounds(this._mapItems.map(item => item.getLatLng()));

      this._map.fitBounds(bounds.pad(0.5));
    }
  }

  drawEntities(hass) {
    /* eslint-disable vars-on-top */
    var map = this._map;
    if (!map) return;

    if (this._mapItems) {
      this._mapItems.forEach(function (marker) {
        marker.remove();
      });
    }

    var mapItems = this._mapItems = [];

    if (this._mapZones) {
      this._mapZones.forEach(function (marker) {
        marker.remove();
      });
    }

    var mapZones = this._mapZones = [];
    Object.keys(hass.states).forEach(entityId => {
      var entity = hass.states[entityId];

      if (entity.attributes.hidden && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(entity) !== "zone" || entity.state === "home" || !("latitude" in entity.attributes) || !("longitude" in entity.attributes)) {
        return;
      }

      var title = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(entity);
      var icon;

      if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(entity) === "zone") {
        // DRAW ZONE
        if (entity.attributes.passive) return; // create icon

        var iconHTML = "";

        if (entity.attributes.icon) {
          const el = document.createElement("ha-icon");
          el.setAttribute("icon", entity.attributes.icon);
          iconHTML = el.outerHTML;
        } else {
          const el = document.createElement("span");
          el.innerHTML = title;
          iconHTML = el.outerHTML;
        }

        icon = this.Leaflet.divIcon({
          html: iconHTML,
          iconSize: [24, 24],
          className: "light"
        }); // create marker with the icon

        mapZones.push(this.Leaflet.marker([entity.attributes.latitude, entity.attributes.longitude], {
          icon: icon,
          interactive: false,
          title: title
        }).addTo(map)); // create circle around it

        mapZones.push(this.Leaflet.circle([entity.attributes.latitude, entity.attributes.longitude], {
          interactive: false,
          color: _data_zone__WEBPACK_IMPORTED_MODULE_9__["defaultRadiusColor"],
          radius: entity.attributes.radius
        }).addTo(map));
        return;
      } // DRAW ENTITY
      // create icon


      var entityPicture = entity.attributes.entity_picture || "";
      var entityName = title.split(" ").map(function (part) {
        return part.substr(0, 1);
      }).join("");
      /* Leaflet clones this element before adding it to the map. This messes up
         our Polymer object and we can't pass data through. Thus we hack like this. */

      icon = this.Leaflet.divIcon({
        html: "<ha-entity-marker entity-id='" + entity.entity_id + "' entity-name='" + entityName + "' entity-picture='" + entityPicture + "'></ha-entity-marker>",
        iconSize: [45, 45],
        className: ""
      }); // create market with the icon

      mapItems.push(this.Leaflet.marker([entity.attributes.latitude, entity.attributes.longitude], {
        icon: icon,
        title: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(entity)
      }).addTo(map)); // create circle around if entity has accuracy

      if (entity.attributes.gps_accuracy) {
        mapItems.push(this.Leaflet.circle([entity.attributes.latitude, entity.attributes.longitude], {
          interactive: false,
          color: "#0288D1",
          radius: entity.attributes.gps_accuracy
        }).addTo(map));
      }
    });
  }

}

customElements.define("ha-panel-map", HaPanelMap);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbWFwLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc2V0dXAtbGVhZmxldC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvem9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbWFwL2hhLWVudGl0eS1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9tYXAvaGEtcGFuZWwtbWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcCB9IGZyb20gXCJsZWFmbGV0XCI7XG5cbi8vIFNldHMgdXAgYSBMZWFmbGV0IG1hcCBvbiB0aGUgcHJvdmlkZWQgRE9NIGVsZW1lbnRcbmV4cG9ydCB0eXBlIExlYWZsZXRNb2R1bGVUeXBlID0gdHlwZW9mIGltcG9ydChcImxlYWZsZXRcIik7XG5leHBvcnQgdHlwZSBMZWFmbGV0RHJhd01vZHVsZVR5cGUgPSB0eXBlb2YgaW1wb3J0KFwibGVhZmxldC1kcmF3XCIpO1xuXG5leHBvcnQgY29uc3Qgc2V0dXBMZWFmbGV0TWFwID0gYXN5bmMgKFxuICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGFya01vZGUgPSBmYWxzZSxcbiAgZHJhdyA9IGZhbHNlXG4pOiBQcm9taXNlPFtNYXAsIExlYWZsZXRNb2R1bGVUeXBlXT4gPT4ge1xuICBpZiAoIW1hcEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXR1cCBMZWFmbGV0IG1hcCBvbiBkaXNjb25uZWN0ZWQgZWxlbWVudFwiKTtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgTGVhZmxldCA9IChhd2FpdCBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJsZWFmbGV0XCIgKi8gXCJsZWFmbGV0XCJcbiAgKSkgYXMgTGVhZmxldE1vZHVsZVR5cGU7XG4gIExlYWZsZXQuSWNvbi5EZWZhdWx0LmltYWdlUGF0aCA9IFwiL3N0YXRpYy9pbWFnZXMvbGVhZmxldC9pbWFnZXMvXCI7XG5cbiAgaWYgKGRyYXcpIHtcbiAgICBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsZWFmbGV0LWRyYXdcIiAqLyBcImxlYWZsZXQtZHJhd1wiKTtcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IExlYWZsZXQubWFwKG1hcEVsZW1lbnQpO1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiL3N0YXRpYy9pbWFnZXMvbGVhZmxldC9sZWFmbGV0LmNzc1wiKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgbWFwRWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgbWFwLnNldFZpZXcoWzUyLjM3MzEzMzksIDQuODkwMzE0N10sIDEzKTtcbiAgY3JlYXRlVGlsZUxheWVyKExlYWZsZXQsIGRhcmtNb2RlKS5hZGRUbyhtYXApO1xuXG4gIHJldHVybiBbbWFwLCBMZWFmbGV0XTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaWxlTGF5ZXIgPSAoXG4gIGxlYWZsZXQ6IExlYWZsZXRNb2R1bGVUeXBlLFxuICBkYXJrTW9kZTogYm9vbGVhblxuKSA9PiB7XG4gIHJldHVybiBsZWFmbGV0LnRpbGVMYXllcihcbiAgICBgaHR0cHM6Ly97c30uYmFzZW1hcHMuY2FydG9jZG4uY29tLyR7XG4gICAgICBkYXJrTW9kZSA/IFwiZGFya19hbGxcIiA6IFwibGlnaHRfYWxsXCJcbiAgICB9L3t6fS97eH0ve3l9JHtsZWFmbGV0LkJyb3dzZXIucmV0aW5hID8gXCJAMngucG5nXCIgOiBcIi5wbmdcIn1gLFxuICAgIHtcbiAgICAgIGF0dHJpYnV0aW9uOlxuICAgICAgICAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiwgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL2NhcnRvLmNvbS9hdHRyaWJ1dGlvbnNcIj5DQVJUTzwvYT4nLFxuICAgICAgc3ViZG9tYWluczogXCJhYmNkXCIsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMjAsXG4gICAgfVxuICApO1xufTtcbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlT2JqZWN0SWQgPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVEb21haW4gPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZU5hbWUgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgdHlwZSB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJhZGl1c0NvbG9yID0gXCIjRkY5ODAwXCI7XG5leHBvcnQgY29uc3QgaG9tZVJhZGl1c0NvbG9yID0gXCIjMDNhOWY0XCI7XG5leHBvcnQgY29uc3QgcGFzc2l2ZVJhZGl1c0NvbG9yID0gXCIjOWI5YjliXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9uZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIHBhc3NpdmU/OiBib29sZWFuO1xuICByYWRpdXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9uZU11dGFibGVQYXJhbXMge1xuICBpY29uOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhc3NpdmU6IGJvb2xlYW47XG4gIHJhZGl1czogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hab25lcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxab25lW10+KHsgdHlwZTogXCJ6b25lL2xpc3RcIiB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVpvbmUgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgdmFsdWVzOiBab25lTXV0YWJsZVBhcmFtcykgPT5cbiAgaGFzcy5jYWxsV1M8Wm9uZT4oe1xuICAgIHR5cGU6IFwiem9uZS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlWm9uZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgem9uZUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8Wm9uZU11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPFpvbmU+KHtcbiAgICB0eXBlOiBcInpvbmUvdXBkYXRlXCIsXG4gICAgem9uZV9pZDogem9uZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlWm9uZSA9IChoYXNzOiBIb21lQXNzaXN0YW50LCB6b25lSWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiem9uZS9kZWxldGVcIixcbiAgICB6b25lX2lkOiB6b25lSWQsXG4gIH0pO1xuXG5sZXQgaW5pdGl0aWFsWm9uZUVkaXRvckRhdGE6IFBhcnRpYWw8Wm9uZU11dGFibGVQYXJhbXM+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3Qgc2hvd1pvbmVFZGl0b3IgPSAoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgZGF0YT86IFBhcnRpYWw8Wm9uZU11dGFibGVQYXJhbXM+XG4pID0+IHtcbiAgaW5pdGl0aWFsWm9uZUVkaXRvckRhdGEgPSBkYXRhO1xuICBuYXZpZ2F0ZShlbCwgXCIvY29uZmlnL3pvbmUvbmV3XCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFpvbmVFZGl0b3JJbml0RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGluaXRpdGlhbFpvbmVFZGl0b3JEYXRhO1xuICBpbml0aXRpYWxab25lRWRpdG9yRGF0YSA9IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pbWFnZS9pcm9uLWltYWdlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUVudGl0eU1hcmtlciBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tcG9zaXRpb25pbmdcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAubWFya2VyIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMC4xZW0gc29saWRcbiAgICAgICAgICAgIHZhcigtLWhhLW1hcmtlci1jb2xvciwgdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgICAgY29sb3I6IHJnYig3NiwgNzYsIDc2KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBpcm9uLWltYWdlIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYXJrZXJcIiBzdHlsZSQ9XCJib3JkZXItY29sb3I6e3tlbnRpdHlDb2xvcn19XCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlbnRpdHlOYW1lXV1cIj5bW2VudGl0eU5hbWVdXTwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlbnRpdHlQaWN0dXJlXV1cIj5cbiAgICAgICAgICA8aXJvbi1pbWFnZVxuICAgICAgICAgICAgc2l6aW5nPVwiY292ZXJcIlxuICAgICAgICAgICAgY2xhc3M9XCJmaXRcIlxuICAgICAgICAgICAgc3JjPVwiW1tlbnRpdHlQaWN0dXJlXV1cIlxuICAgICAgICAgID48L2lyb24taW1hZ2U+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eUlkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlOYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlQaWN0dXJlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlDb2xvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHRoaXMuYmFkZ2VUYXAoZXYpKTtcbiAgfVxuXG4gIGJhZGdlVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZW50aXR5SWQpIHtcbiAgICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuZW50aXR5SWQgfSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0eS1tYXJrZXJcIiwgSGFFbnRpdHlNYXJrZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IHNldHVwTGVhZmxldE1hcCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCB7IGRlZmF1bHRSYWRpdXNDb2xvciB9IGZyb20gXCIuLi8uLi9kYXRhL3pvbmVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4vaGEtZW50aXR5LW1hcmtlclwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxNYXAgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgICNtYXAge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWdodCB7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgPGhhLW1lbnUtYnV0dG9uIGhhc3M9XCJbW2hhc3NdXVwiIG5hcnJvdz1cIltbbmFycm93XV1cIj48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgncGFuZWwubWFwJyldXTwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZVNob3dFZGl0Wm9uZShoYXNzKV1dXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpwZW5jaWxcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJvcGVuWm9uZXNFZGl0b3JcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkcmF3RW50aXRpZXNcIixcbiAgICAgIH0sXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5sb2FkTWFwKCk7XG4gIH1cblxuICBhc3luYyBsb2FkTWFwKCkge1xuICAgIFt0aGlzLl9tYXAsIHRoaXMuTGVhZmxldF0gPSBhd2FpdCBzZXR1cExlYWZsZXRNYXAodGhpcy4kLm1hcCk7XG4gICAgdGhpcy5kcmF3RW50aXRpZXModGhpcy5oYXNzKTtcbiAgICB0aGlzLl9tYXAuaW52YWxpZGF0ZVNpemUoKTtcbiAgICB0aGlzLmZpdE1hcCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgdGhpcy5fbWFwLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVTaG93RWRpdFpvbmUoaGFzcykge1xuICAgIHJldHVybiAhX19ERU1PX18gJiYgaGFzcy51c2VyLmlzX2FkbWluO1xuICB9XG5cbiAgb3BlblpvbmVzRWRpdG9yKCkge1xuICAgIG5hdmlnYXRlKHRoaXMsIFwiL2NvbmZpZy96b25lXCIpO1xuICB9XG5cbiAgZml0TWFwKCkge1xuICAgIHZhciBib3VuZHM7XG5cbiAgICBpZiAodGhpcy5fbWFwSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9tYXAuc2V0VmlldyhcbiAgICAgICAgbmV3IHRoaXMuTGVhZmxldC5MYXRMbmcoXG4gICAgICAgICAgdGhpcy5oYXNzLmNvbmZpZy5sYXRpdHVkZSxcbiAgICAgICAgICB0aGlzLmhhc3MuY29uZmlnLmxvbmdpdHVkZVxuICAgICAgICApLFxuICAgICAgICAxNFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRzID0gbmV3IHRoaXMuTGVhZmxldC5sYXRMbmdCb3VuZHMoXG4gICAgICAgIHRoaXMuX21hcEl0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5nZXRMYXRMbmcoKSlcbiAgICAgICk7XG4gICAgICB0aGlzLl9tYXAuZml0Qm91bmRzKGJvdW5kcy5wYWQoMC41KSk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0VudGl0aWVzKGhhc3MpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSB2YXJzLW9uLXRvcCAqL1xuICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XG4gICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgIGlmICh0aGlzLl9tYXBJdGVtcykge1xuICAgICAgdGhpcy5fbWFwSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgIG1hcmtlci5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgbWFwSXRlbXMgPSAodGhpcy5fbWFwSXRlbXMgPSBbXSk7XG5cbiAgICBpZiAodGhpcy5fbWFwWm9uZXMpIHtcbiAgICAgIHRoaXMuX21hcFpvbmVzLmZvckVhY2goZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICBtYXJrZXIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIG1hcFpvbmVzID0gKHRoaXMuX21hcFpvbmVzID0gW10pO1xuXG4gICAgT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgICB2YXIgZW50aXR5ID0gaGFzcy5zdGF0ZXNbZW50aXR5SWRdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIChlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4gJiYgY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSkgIT09IFwiem9uZVwiKSB8fFxuICAgICAgICBlbnRpdHkuc3RhdGUgPT09IFwiaG9tZVwiIHx8XG4gICAgICAgICEoXCJsYXRpdHVkZVwiIGluIGVudGl0eS5hdHRyaWJ1dGVzKSB8fFxuICAgICAgICAhKFwibG9uZ2l0dWRlXCIgaW4gZW50aXR5LmF0dHJpYnV0ZXMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGl0bGUgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eSk7XG4gICAgICB2YXIgaWNvbjtcblxuICAgICAgaWYgKGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpID09PSBcInpvbmVcIikge1xuICAgICAgICAvLyBEUkFXIFpPTkVcbiAgICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLnBhc3NpdmUpIHJldHVybjtcblxuICAgICAgICAvLyBjcmVhdGUgaWNvblxuICAgICAgICB2YXIgaWNvbkhUTUwgPSBcIlwiO1xuICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMuaWNvbikge1xuICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhhLWljb25cIik7XG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiaWNvblwiLCBlbnRpdHkuYXR0cmlidXRlcy5pY29uKTtcbiAgICAgICAgICBpY29uSFRNTCA9IGVsLm91dGVySFRNTDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IHRpdGxlO1xuICAgICAgICAgIGljb25IVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgICAgICB9XG5cbiAgICAgICAgaWNvbiA9IHRoaXMuTGVhZmxldC5kaXZJY29uKHtcbiAgICAgICAgICBodG1sOiBpY29uSFRNTCxcbiAgICAgICAgICBpY29uU2l6ZTogWzI0LCAyNF0sXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImxpZ2h0XCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBtYXJrZXIgd2l0aCB0aGUgaWNvblxuICAgICAgICBtYXBab25lcy5wdXNoKFxuICAgICAgICAgIHRoaXMuTGVhZmxldC5tYXJrZXIoXG4gICAgICAgICAgICBbZW50aXR5LmF0dHJpYnV0ZXMubGF0aXR1ZGUsIGVudGl0eS5hdHRyaWJ1dGVzLmxvbmdpdHVkZV0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICkuYWRkVG8obWFwKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBjaXJjbGUgYXJvdW5kIGl0XG4gICAgICAgIG1hcFpvbmVzLnB1c2goXG4gICAgICAgICAgdGhpcy5MZWFmbGV0LmNpcmNsZShcbiAgICAgICAgICAgIFtlbnRpdHkuYXR0cmlidXRlcy5sYXRpdHVkZSwgZW50aXR5LmF0dHJpYnV0ZXMubG9uZ2l0dWRlXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb2xvcjogZGVmYXVsdFJhZGl1c0NvbG9yLFxuICAgICAgICAgICAgICByYWRpdXM6IGVudGl0eS5hdHRyaWJ1dGVzLnJhZGl1cyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLmFkZFRvKG1hcClcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERSQVcgRU5USVRZXG4gICAgICAvLyBjcmVhdGUgaWNvblxuICAgICAgdmFyIGVudGl0eVBpY3R1cmUgPSBlbnRpdHkuYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSB8fCBcIlwiO1xuICAgICAgdmFyIGVudGl0eU5hbWUgPSB0aXRsZVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgICByZXR1cm4gcGFydC5zdWJzdHIoMCwgMSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgICAgLyogTGVhZmxldCBjbG9uZXMgdGhpcyBlbGVtZW50IGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIG1hcC4gVGhpcyBtZXNzZXMgdXBcbiAgICAgICAgIG91ciBQb2x5bWVyIG9iamVjdCBhbmQgd2UgY2FuJ3QgcGFzcyBkYXRhIHRocm91Z2guIFRodXMgd2UgaGFjayBsaWtlIHRoaXMuICovXG4gICAgICBpY29uID0gdGhpcy5MZWFmbGV0LmRpdkljb24oe1xuICAgICAgICBodG1sOlxuICAgICAgICAgIFwiPGhhLWVudGl0eS1tYXJrZXIgZW50aXR5LWlkPSdcIiArXG4gICAgICAgICAgZW50aXR5LmVudGl0eV9pZCArXG4gICAgICAgICAgXCInIGVudGl0eS1uYW1lPSdcIiArXG4gICAgICAgICAgZW50aXR5TmFtZSArXG4gICAgICAgICAgXCInIGVudGl0eS1waWN0dXJlPSdcIiArXG4gICAgICAgICAgZW50aXR5UGljdHVyZSArXG4gICAgICAgICAgXCInPjwvaGEtZW50aXR5LW1hcmtlcj5cIixcbiAgICAgICAgaWNvblNpemU6IFs0NSwgNDVdLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgICB9KTtcblxuICAgICAgLy8gY3JlYXRlIG1hcmtldCB3aXRoIHRoZSBpY29uXG4gICAgICBtYXBJdGVtcy5wdXNoKFxuICAgICAgICB0aGlzLkxlYWZsZXQubWFya2VyKFxuICAgICAgICAgIFtlbnRpdHkuYXR0cmlidXRlcy5sYXRpdHVkZSwgZW50aXR5LmF0dHJpYnV0ZXMubG9uZ2l0dWRlXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgICAgdGl0bGU6IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5KSxcbiAgICAgICAgICB9XG4gICAgICAgICkuYWRkVG8obWFwKVxuICAgICAgKTtcblxuICAgICAgLy8gY3JlYXRlIGNpcmNsZSBhcm91bmQgaWYgZW50aXR5IGhhcyBhY2N1cmFjeVxuICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLmdwc19hY2N1cmFjeSkge1xuICAgICAgICBtYXBJdGVtcy5wdXNoKFxuICAgICAgICAgIHRoaXMuTGVhZmxldC5jaXJjbGUoXG4gICAgICAgICAgICBbZW50aXR5LmF0dHJpYnV0ZXMubGF0aXR1ZGUsIGVudGl0eS5hdHRyaWJ1dGVzLmxvbmdpdHVkZV0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAyODhEMVwiLFxuICAgICAgICAgICAgICByYWRpdXM6IGVudGl0eS5hdHRyaWJ1dGVzLmdwc19hY2N1cmFjeSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLmFkZFRvKG1hcClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1tYXBcIiwgSGFQYW5lbE1hcCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLGlNQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0Esd01BQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFRQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBSUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFxQkE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBcEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE5RUE7QUFDQTtBQStFQTs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQVFBO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFWQTtBQUNBO0FBYUE7QUFJQTtBQUNBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBMU5BO0FBQ0E7QUEyTkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
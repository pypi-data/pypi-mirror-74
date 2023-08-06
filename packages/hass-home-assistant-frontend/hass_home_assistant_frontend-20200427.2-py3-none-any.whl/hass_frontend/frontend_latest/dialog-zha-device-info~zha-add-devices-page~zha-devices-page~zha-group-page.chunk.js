(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"],{

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

/***/ "./src/components/buttons/ha-call-service-button.js":
/*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");

/* eslint-plugin-disable lit */





/*
 * @appliesMixin EventsMixin
 */

class HaCallServiceButton extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        tabindex="0"
        ><slot></slot
      ></ha-progress-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      domain: {
        type: String
      },
      service: {
        type: String
      },
      serviceData: {
        type: Object,
        value: {}
      },
      confirmation: {
        type: String
      }
    };
  }

  callService() {
    this.progress = true; // eslint-disable-next-line @typescript-eslint/no-this-alias

    var el = this;
    var eventData = {
      domain: this.domain,
      service: this.service,
      serviceData: this.serviceData
    };
    this.hass.callService(this.domain, this.service, this.serviceData).then(function () {
      el.progress = false;
      el.$.progress.actionSuccess();
      eventData.success = true;
    }, function () {
      el.progress = false;
      el.$.progress.actionError();
      eventData.success = false;
    }).then(function () {
      el.fire("hass-service-called", eventData);
    });
  }

  buttonTapped() {
    if (this.confirmation) {
      Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_2__["showConfirmationDialog"])(this, {
        text: this.confirmation,
        confirm: () => this.callService()
      });
    } else {
      this.callService();
    }
  }

}

customElements.define("ha-call-service-button", HaCallServiceButton);

/***/ }),

/***/ "./src/components/buttons/ha-progress-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



/* eslint-plugin-disable lit */



class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }

  tempClass(className) {
    var classList = this.$.container.classList;
    classList.add(className);
    setTimeout(() => {
      classList.remove(className);
    }, 1000);
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.buttonTapped(ev));
  }

  buttonTapped(ev) {
    if (this.progress) ev.stopPropagation();
  }

  actionSuccess() {
    this.tempClass("success");
  }

  actionError() {
    this.tempClass("error");
  }

  computeDisabled(disabled, progress) {
    return disabled || progress;
  }

}

customElements.define("ha-progress-button", HaProgressButton);

/***/ }),

/***/ "./src/components/ha-service-description.js":
/*!**************************************************!*\
  !*** ./src/components/ha-service-description.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");

/* eslint-plugin-disable lit */



class HaServiceDescription extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]` [[_getDescription(hass, domain, service)]] `;
  }

  static get properties() {
    return {
      hass: Object,
      domain: String,
      service: String
    };
  }

  _getDescription(hass, domain, service) {
    var domainServices = hass.services[domain];
    if (!domainServices) return "";
    var serviceObject = domainServices[service];
    if (!serviceObject) return "";
    return serviceObject.description;
  }

}

customElements.define("ha-service-description", HaServiceDescription);

/***/ }),

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const createAreaRegistryEntry = (hass, values) => hass.callWS(Object.assign({
  type: "config/area_registry/create"
}, values));
const updateAreaRegistryEntry = (hass, areaId, updates) => hass.callWS(Object.assign({
  type: "config/area_registry/update",
  area_id: areaId
}, updates));
const deleteAreaRegistryEntry = (hass, areaId) => hass.callWS({
  type: "config/area_registry/delete",
  area_id: areaId
});

const fetchAreaRegistry = conn => conn.sendMessagePromise({
  type: "config/area_registry/list"
}).then(areas => areas.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name)));

const subscribeAreaRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchAreaRegistry(conn).then(areas => store.setState(areas, true)), 500, true), "area_registry_updated");

const subscribeAreaRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: fallbackDeviceName, computeDeviceName, devicesInArea, updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackDeviceName", function() { return fallbackDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDeviceName", function() { return computeDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devicesInArea", function() { return devicesInArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const fallbackDeviceName = (hass, entities) => {
  for (const entity of entities || []) {
    const entityId = typeof entity === "string" ? entity : entity.entity_id;
    const stateObj = hass.states[entityId];

    if (stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(stateObj);
    }
  }

  return undefined;
};
const computeDeviceName = (device, hass, entities) => {
  return device.name_by_user || device.name || entities && fallbackDeviceName(hass, entities) || hass.localize("ui.panel.config.devices.unnamed_device");
};
const devicesInArea = (devices, areaId) => devices.filter(device => device.area_id === areaId);
const updateDeviceRegistryEntry = (hass, deviceId, updates) => hass.callWS(Object.assign({
  type: "config/device_registry/update",
  device_id: deviceId
}, updates));

const fetchDeviceRegistry = conn => conn.sendMessagePromise({
  type: "config/device_registry/list"
});

const subscribeDeviceRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchDeviceRegistry(conn).then(devices => store.setState(devices, true)), 500, true), "device_registry_updated");

const subscribeDeviceRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/lovelace.ts":
/*!******************************!*\
  !*** ./src/data/lovelace.ts ***!
  \******************************/
/*! exports provided: fetchResources, createResource, updateResource, deleteResource, fetchDashboards, createDashboard, updateDashboard, deleteDashboard, fetchConfig, saveConfig, deleteConfig, subscribeLovelaceUpdates, getLovelaceCollection, getLegacyLovelaceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchResources", function() { return fetchResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResource", function() { return createResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateResource", function() { return updateResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResource", function() { return deleteResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDashboards", function() { return fetchDashboards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDashboard", function() { return createDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDashboard", function() { return updateDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDashboard", function() { return deleteDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfig", function() { return deleteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeLovelaceUpdates", function() { return subscribeLovelaceUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLovelaceCollection", function() { return getLovelaceCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegacyLovelaceCollection", function() { return getLegacyLovelaceCollection; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");

const fetchResources = conn => conn.sendMessagePromise({
  type: "lovelace/resources"
});
const createResource = (hass, values) => hass.callWS(Object.assign({
  type: "lovelace/resources/create"
}, values));
const updateResource = (hass, id, updates) => hass.callWS(Object.assign({
  type: "lovelace/resources/update",
  resource_id: id
}, updates));
const deleteResource = (hass, id) => hass.callWS({
  type: "lovelace/resources/delete",
  resource_id: id
});
const fetchDashboards = hass => hass.callWS({
  type: "lovelace/dashboards/list"
});
const createDashboard = (hass, values) => hass.callWS(Object.assign({
  type: "lovelace/dashboards/create"
}, values));
const updateDashboard = (hass, id, updates) => hass.callWS(Object.assign({
  type: "lovelace/dashboards/update",
  dashboard_id: id
}, updates));
const deleteDashboard = (hass, id) => hass.callWS({
  type: "lovelace/dashboards/delete",
  dashboard_id: id
});
const fetchConfig = (conn, urlPath, force) => conn.sendMessagePromise({
  type: "lovelace/config",
  url_path: urlPath,
  force
});
const saveConfig = (hass, urlPath, config) => hass.callWS({
  type: "lovelace/config/save",
  url_path: urlPath,
  config
});
const deleteConfig = (hass, urlPath) => hass.callWS({
  type: "lovelace/config/delete",
  url_path: urlPath
});
const subscribeLovelaceUpdates = (conn, urlPath, onChange) => conn.subscribeEvents(ev => {
  if (ev.data.url_path === urlPath) {
    onChange();
  }
}, "lovelace_updated");
const getLovelaceCollection = (conn, urlPath = null) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, `_lovelace_${urlPath !== null && urlPath !== void 0 ? urlPath : ""}`, conn2 => fetchConfig(conn2, urlPath, false), (_conn, store) => subscribeLovelaceUpdates(conn, urlPath, () => fetchConfig(conn, urlPath, false).then(config => store.setState(config, true)))); // Legacy functions to support cast for Home Assistion < 0.107

const fetchLegacyConfig = (conn, force) => conn.sendMessagePromise({
  type: "lovelace/config",
  force
});

const subscribeLegacyLovelaceUpdates = (conn, onChange) => conn.subscribeEvents(onChange, "lovelace_updated");

const getLegacyLovelaceCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_lovelace", conn2 => fetchLegacyConfig(conn2, false), (_conn, store) => subscribeLegacyLovelaceUpdates(conn, () => fetchLegacyConfig(conn, false).then(config => store.setState(config, true))));

/***/ }),

/***/ "./src/data/zha.ts":
/*!*************************!*\
  !*** ./src/data/zha.ts ***!
  \*************************/
/*! exports provided: reconfigureNode, fetchAttributesForCluster, fetchDevices, fetchZHADevice, fetchBindableDevices, bindDevices, unbindDevices, bindDeviceToGroup, unbindDeviceFromGroup, readAttributeValue, fetchCommandsForCluster, fetchClustersForZhaNode, fetchGroups, removeGroups, fetchGroup, fetchGroupableDevices, addMembersToGroup, removeMembersFromGroup, addGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reconfigureNode", function() { return reconfigureNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAttributesForCluster", function() { return fetchAttributesForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDevices", function() { return fetchDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchZHADevice", function() { return fetchZHADevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBindableDevices", function() { return fetchBindableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDevices", function() { return bindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindDevices", function() { return unbindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDeviceToGroup", function() { return bindDeviceToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindDeviceFromGroup", function() { return unbindDeviceFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAttributeValue", function() { return readAttributeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCommandsForCluster", function() { return fetchCommandsForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClustersForZhaNode", function() { return fetchClustersForZhaNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroups", function() { return removeGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroup", function() { return fetchGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroupableDevices", function() { return fetchGroupableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMembersToGroup", function() { return addMembersToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMembersFromGroup", function() { return removeMembersFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
const reconfigureNode = (hass, ieeeAddress) => hass.callWS({
  type: "zha/devices/reconfigure",
  ieee: ieeeAddress
});
const fetchAttributesForCluster = (hass, ieeeAddress, endpointId, clusterId, clusterType) => hass.callWS({
  type: "zha/devices/clusters/attributes",
  ieee: ieeeAddress,
  endpoint_id: endpointId,
  cluster_id: clusterId,
  cluster_type: clusterType
});
const fetchDevices = hass => hass.callWS({
  type: "zha/devices"
});
const fetchZHADevice = (hass, ieeeAddress) => hass.callWS({
  type: "zha/device",
  ieee: ieeeAddress
});
const fetchBindableDevices = (hass, ieeeAddress) => hass.callWS({
  type: "zha/devices/bindable",
  ieee: ieeeAddress
});
const bindDevices = (hass, sourceIEEE, targetIEEE) => hass.callWS({
  type: "zha/devices/bind",
  source_ieee: sourceIEEE,
  target_ieee: targetIEEE
});
const unbindDevices = (hass, sourceIEEE, targetIEEE) => hass.callWS({
  type: "zha/devices/unbind",
  source_ieee: sourceIEEE,
  target_ieee: targetIEEE
});
const bindDeviceToGroup = (hass, deviceIEEE, groupId, clusters) => hass.callWS({
  type: "zha/groups/bind",
  source_ieee: deviceIEEE,
  group_id: groupId,
  bindings: clusters
});
const unbindDeviceFromGroup = (hass, deviceIEEE, groupId, clusters) => hass.callWS({
  type: "zha/groups/unbind",
  source_ieee: deviceIEEE,
  group_id: groupId,
  bindings: clusters
});
const readAttributeValue = (hass, data) => {
  return hass.callWS(Object.assign({}, data, {
    type: "zha/devices/clusters/attributes/value"
  }));
};
const fetchCommandsForCluster = (hass, ieeeAddress, endpointId, clusterId, clusterType) => hass.callWS({
  type: "zha/devices/clusters/commands",
  ieee: ieeeAddress,
  endpoint_id: endpointId,
  cluster_id: clusterId,
  cluster_type: clusterType
});
const fetchClustersForZhaNode = (hass, ieeeAddress) => hass.callWS({
  type: "zha/devices/clusters",
  ieee: ieeeAddress
});
const fetchGroups = hass => hass.callWS({
  type: "zha/groups"
});
const removeGroups = (hass, groupIdsToRemove) => hass.callWS({
  type: "zha/group/remove",
  group_ids: groupIdsToRemove
});
const fetchGroup = (hass, groupId) => hass.callWS({
  type: "zha/group",
  group_id: groupId
});
const fetchGroupableDevices = hass => hass.callWS({
  type: "zha/devices/groupable"
});
const addMembersToGroup = (hass, groupId, membersToAdd) => hass.callWS({
  type: "zha/group/members/add",
  group_id: groupId,
  members: membersToAdd
});
const removeMembersFromGroup = (hass, groupId, membersToRemove) => hass.callWS({
  type: "zha/group/members/remove",
  group_id: groupId,
  members: membersToRemove
});
const addGroup = (hass, groupName, membersToAdd) => hass.callWS({
  type: "zha/group/add",
  group_name: groupName,
  members: membersToAdd
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

/***/ "./src/dialogs/zha-device-zigbee-signature-dialog/show-dialog-zha-device-zigbee-info.ts":
/*!**********************************************************************************************!*\
  !*** ./src/dialogs/zha-device-zigbee-signature-dialog/show-dialog-zha-device-zigbee-info.ts ***!
  \**********************************************************************************************/
/*! exports provided: loadZHADeviceZigbeeInfoDialog, showZHADeviceZigbeeInfoDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadZHADeviceZigbeeInfoDialog", function() { return loadZHADeviceZigbeeInfoDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showZHADeviceZigbeeInfoDialog", function() { return showZHADeviceZigbeeInfoDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadZHADeviceZigbeeInfoDialog = () => Promise.all(/*! import() | dialog-zha-device-zigbee-info */[__webpack_require__.e("vendors~add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zig~61d72af3"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-zigbee-info~hui-dialog-suggest-card~more-info-dialog"), __webpack_require__.e(18), __webpack_require__.e("add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zigbee-info~af4b98d6"), __webpack_require__.e("dialog-zha-device-zigbee-info")]).then(__webpack_require__.bind(null, /*! ./dialog-zha-device-zigbee-info */ "./src/dialogs/zha-device-zigbee-signature-dialog/dialog-zha-device-zigbee-info.ts"));
const showZHADeviceZigbeeInfoDialog = (element, zhaDeviceZigbeeInfoParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-zha-device-zigbee-info",
    dialogImport: loadZHADeviceZigbeeInfoDialog,
    dialogParams: zhaDeviceZigbeeInfoParams
  });
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

/***/ "./src/panels/config/zha/functions.ts":
/*!********************************************!*\
  !*** ./src/panels/config/zha/functions.ts ***!
  \********************************************/
/*! exports provided: formatAsPaddedHex, sortZHADevices, sortZHAGroups, computeClusterKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAsPaddedHex", function() { return formatAsPaddedHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortZHADevices", function() { return sortZHADevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortZHAGroups", function() { return sortZHAGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeClusterKey", function() { return computeClusterKey; });
const formatAsPaddedHex = value => {
  let hex = value;

  if (typeof value === "string") {
    hex = parseInt(value, 16);
  }

  return "0x" + hex.toString(16).padStart(4, "0");
};
const sortZHADevices = (a, b) => {
  const nameA = a.user_given_name ? a.user_given_name : a.name;
  const nameb = b.user_given_name ? b.user_given_name : b.name;
  return nameA.localeCompare(nameb);
};
const sortZHAGroups = (a, b) => {
  const nameA = a.name;
  const nameb = b.name;
  return nameA.localeCompare(nameb);
};
const computeClusterKey = cluster => {
  return `${cluster.name} (Endpoint id: ${cluster.endpoint_id}, Id: ${formatAsPaddedHex(cluster.id)}, Type: ${cluster.type})`;
};

/***/ }),

/***/ "./src/panels/config/zha/zha-device-card.ts":
/*!**************************************************!*\
  !*** ./src/panels/config/zha/zha-device-card.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _dialogs_zha_device_zigbee_signature_dialog_show_dialog_zha_device_zigbee_info__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../dialogs/zha-device-zigbee-signature-dialog/show-dialog-zha-device-zigbee-info */ "./src/dialogs/zha-device-zigbee-signature-dialog/show-dialog-zha-device-zigbee-info.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _lovelace_editor_add_entities_to_view__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../lovelace/editor/add-entities-to-view */ "./src/panels/lovelace/editor/add-entities-to-view.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
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
























let ZHADeviceCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["customElement"])("zha-device-card")], function (_initialize, _LitElement) {
  class ZHADeviceCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHADeviceCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "device",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Boolean
      })],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Boolean
      })],
      key: "showHelp",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Boolean
      })],
      key: "showActions",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Boolean
      })],
      key: "showName",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Boolean
      })],
      key: "showEntityDetail",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Boolean
      })],
      key: "showModelInfo",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Boolean
      })],
      key: "showEditableInfo",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_serviceData",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_areas",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_selectedAreaIndex",

      value() {
        return -1;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_userGivenName",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubAreas",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubEntities",
      value: void 0
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(ZHADeviceCard.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubAreas) {
          this._unsubAreas();
        }

        if (this._unsubEntities) {
          this._unsubEntities();
        }
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHADeviceCard.prototype), "connectedCallback", this).call(this);

        this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_15__["subscribeAreaRegistry"])(this.hass.connection, areas => {
          this._areas = areas;

          if (this.device) {
            this._selectedAreaIndex = this._areas.findIndex(area => area.area_id === this.device.area_id) + 1; // account for the no area selected index
          }
        });
        this.hass.connection.subscribeEvents(event => {
          if (this.device) {
            this.device.entities.forEach(deviceEntity => {
              if (event.data.old_entity_id === deviceEntity.entity_id) {
                deviceEntity.entity_id = event.data.entity_id;
              }
            });
          }
        }, "entity_registry_updated").then(unsub => {
          this._unsubEntities = unsub;
        });
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHADeviceCard.prototype), "firstUpdated", this).call(this, changedProperties);

        this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has("device")) {
          if (!this._areas || !this.device || !this.device.area_id) {
            this._selectedAreaIndex = 0;
          } else {
            this._selectedAreaIndex = this._areas.findIndex(area => area.area_id === this.device.area_id) + 1;
          }

          this._userGivenName = this.device.user_given_name;
          this._serviceData = {
            ieee_address: this.device.ieee
          };
        }

        _get(_getPrototypeOf(ZHADeviceCard.prototype), "update", this).call(this, changedProperties);
      }
    }, {
      kind: "method",
      key: "serviceCalled",
      value: function serviceCalled(ev) {
        // Check if this is for us
        if (ev.detail.success && ev.detail.service === "remove") {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "zha-device-removed", {
            device: this.device
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <ha-card header="${this.showName ? this.device.name : ""}">
        ${this.showModelInfo ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                <div class="info">
                  <div class="model">${this.device.model}</div>
                  <div class="manuf">
                    ${this.hass.localize("ui.dialogs.zha_device_info.manuf", "manufacturer", this.device.manufacturer)}
                  </div>
                </div>
              ` : ""}
        <div class="card-content">
          <dl>
            <dt>IEEE:</dt>
            <dd class="zha-info">${this.device.ieee}</dd>
            <dt>Nwk:</dt>
            <dd class="zha-info">${Object(_functions__WEBPACK_IMPORTED_MODULE_21__["formatAsPaddedHex"])(this.device.nwk)}</dd>
            <dt>Device Type:</dt>
            <dd class="zha-info">${this.device.device_type}</dd>
            <dt>LQI:</dt>
            <dd class="zha-info">${this.device.lqi || this.hass.localize("ui.dialogs.zha_device_info.unknown")}</dd>
            <dt>RSSI:</dt>
            <dd class="zha-info">${this.device.rssi || this.hass.localize("ui.dialogs.zha_device_info.unknown")}</dd>
            <dt>${this.hass.localize("ui.dialogs.zha_device_info.last_seen")}:</dt>
            <dd class="zha-info">${this.device.last_seen || this.hass.localize("ui.dialogs.zha_device_info.unknown")}</dd>
            <dt>${this.hass.localize("ui.dialogs.zha_device_info.power_source")}:</dt>
            <dd class="zha-info">${this.device.power_source || this.hass.localize("ui.dialogs.zha_device_info.unknown")}</dd>
            ${this.device.quirk_applied ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                    <dt>
                      ${this.hass.localize("ui.dialogs.zha_device_info.quirk")}:
                    </dt>
                    <dd class="zha-info">${this.device.quirk_class}</dd>
                  ` : ""}
          </dl>
        </div>

        <div class="device-entities">
          ${this.device.entities.map(entity => lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
              <paper-icon-item
                @click="${this._openMoreInfo}"
                .entity="${entity}"
              >
                <state-badge
                  .stateObj="${this.hass.states[entity.entity_id]}"
                  slot="item-icon"
                ></state-badge>
                ${this.showEntityDetail ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                      <paper-item-body>
                        <div class="name">
                          ${this._computeEntityName(entity)}
                        </div>
                        <div class="secondary entity-id">
                          ${entity.entity_id}
                        </div>
                      </paper-item-body>
                    ` : ""}
              </paper-icon-item>
            `)}
        </div>
        ${this.device.entities && this.device.entities.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                <div class="card-actions">
                  <mwc-button @click=${this._addToLovelaceView}>
                    ${this.hass.localize("ui.panel.config.devices.entities.add_entities_lovelace")}
                  </mwc-button>
                </div>
              ` : ""}
        ${this.showEditableInfo ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                <div class="editable">
                  <paper-input
                    type="string"
                    @change="${this._saveCustomName}"
                    .value="${this._userGivenName || ""}"
                    .placeholder="${this.hass.localize("ui.dialogs.zha_device_info.zha_device_card.device_name_placeholder")}"
                  ></paper-input>
                </div>
                <div class="node-picker">
                  <paper-dropdown-menu
                    .label="${this.hass.localize("ui.dialogs.zha_device_info.zha_device_card.area_picker_label")}"
                    class="menu"
                  >
                    <paper-listbox
                      slot="dropdown-content"
                      .selected="${this._selectedAreaIndex}"
                      @iron-select="${this._selectedAreaChanged}"
                    >
                      <paper-item>
                        ${this.hass.localize("ui.dialogs.zha_device_info.no_area")}
                      </paper-item>

                      ${this._areas.map(entry => lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                          <paper-item>${entry.name}</paper-item>
                        `)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                </div>
              ` : ""}
        ${this.showActions ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                <div class="card-actions">
                  ${this.device.device_type !== "Coordinator" ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                        <mwc-button @click=${this._onReconfigureNodeClick}>
                          ${this.hass.localize("ui.dialogs.zha_device_info.buttons.reconfigure")}
                        </mwc-button>
                        ${this.showHelp ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                              <div class="help-text">
                                ${this.hass.localize("ui.dialogs.zha_device_info.services.reconfigure")}
                              </div>
                            ` : ""}

                        <ha-call-service-button
                          .hass=${this.hass}
                          domain="zha"
                          service="remove"
                          .confirmation=${this.hass.localize("ui.dialogs.zha_device_info.confirmations.remove")}
                          .serviceData=${this._serviceData}
                        >
                          ${this.hass.localize("ui.dialogs.zha_device_info.buttons.remove")}
                        </ha-call-service-button>
                        ${this.showHelp ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                              <div class="help-text">
                                ${this.hass.localize("ui.dialogs.zha_device_info.services.remove")}
                              </div>
                            ` : ""}
                      ` : ""}
                  ${this.device.power_source === "Mains" && (this.device.device_type === "Router" || this.device.device_type === "Coordinator") ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                        <mwc-button @click=${this._onAddDevicesClick}>
                          ${this.hass.localize("ui.panel.config.zha.common.add_devices")}
                        </mwc-button>
                        ${this.showHelp ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                              <ha-service-description
                                .hass=${this.hass}
                                domain="zha"
                                service="permit"
                                class="help-text2"
                              ></ha-service-description>
                            ` : ""}
                      ` : ""}
                  ${this.device.device_type !== "Coordinator" ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                        <mwc-button @click=${this._handleZigbeeInfoClicked}>
                          ${this.hass.localize("ui.dialogs.zha_device_info.buttons.zigbee_information")}
                        </mwc-button>
                        ${this.showHelp ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                              <div class="help-text">
                                ${this.hass.localize("ui.dialogs.zha_device_info.services.zigbee_information")}
                              </div>
                            ` : ""}
                      ` : ""}
                </div>
              ` : ""}
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "_onReconfigureNodeClick",
      value: async function _onReconfigureNodeClick() {
        if (this.hass) {
          await Object(_data_zha__WEBPACK_IMPORTED_MODULE_17__["reconfigureNode"])(this.hass, this.device.ieee);
        }
      }
    }, {
      kind: "method",
      key: "_computeEntityName",
      value: function _computeEntityName(entity) {
        if (this.hass.states[entity.entity_id]) {
          return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(this.hass.states[entity.entity_id]);
        }

        return entity.name;
      }
    }, {
      kind: "method",
      key: "_saveCustomName",
      value: async function _saveCustomName(event) {
        if (this.hass) {
          const values = {
            name_by_user: event.target.value,
            area_id: this.device.area_id ? this.device.area_id : undefined
          };
          await Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_16__["updateDeviceRegistryEntry"])(this.hass, this.device.device_reg_id, values);
          this.device.user_given_name = event.target.value;
        }
      }
    }, {
      kind: "method",
      key: "_openMoreInfo",
      value: function _openMoreInfo(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "hass-more-info", {
          entityId: ev.currentTarget.entity.entity_id
        });
      }
    }, {
      kind: "method",
      key: "_selectedAreaChanged",
      value: async function _selectedAreaChanged(event) {
        if (!this.device || !this._areas) {
          return;
        }

        this._selectedAreaIndex = event.target.selected;
        const area = this._areas[this._selectedAreaIndex - 1]; // account for No Area

        if (!area && !this.device.area_id || area && area.area_id === this.device.area_id) {
          return;
        }

        const newAreaId = area ? area.area_id : undefined;
        await Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_16__["updateDeviceRegistryEntry"])(this.hass, this.device.device_reg_id, {
          area_id: newAreaId,
          name_by_user: this.device.user_given_name
        });
        this.device.area_id = newAreaId;
      }
    }, {
      kind: "method",
      key: "_onAddDevicesClick",
      value: function _onAddDevicesClick() {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_10__["navigate"])(this, "/config/zha/add/" + this.device.ieee);
      }
    }, {
      kind: "method",
      key: "_handleZigbeeInfoClicked",
      value: async function _handleZigbeeInfoClicked() {
        Object(_dialogs_zha_device_zigbee_signature_dialog_show_dialog_zha_device_zigbee_info__WEBPACK_IMPORTED_MODULE_18__["showZHADeviceZigbeeInfoDialog"])(this, {
          device: this.device
        });
      }
    }, {
      kind: "method",
      key: "_addToLovelaceView",
      value: function _addToLovelaceView() {
        Object(_lovelace_editor_add_entities_to_view__WEBPACK_IMPORTED_MODULE_20__["addEntitiesToLovelaceView"])(this, this.hass, this.device.entities.map(entity => entity.entity_id));
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_19__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_7__["css"]`
        :host(:not([narrow])) .device-entities {
          max-height: 225px;
          overflow-y: auto;
          display: flex;
          flex-wrap: wrap;
          padding: 4px;
          justify-content: left;
        }
        ha-card {
          flex: 1 0 100%;
          padding-bottom: 10px;
          min-width: 300px;
        }
        .device {
          width: 30%;
        }
        .device .name {
          font-weight: bold;
        }
        .device .manuf {
          color: var(--secondary-text-color);
          margin-bottom: 20px;
        }
        .extra-info {
          margin-top: 8px;
        }
        .manuf,
        .zha-info,
        .name {
          text-overflow: ellipsis;
        }
        .entity-id {
          text-overflow: ellipsis;
          color: var(--secondary-text-color);
        }
        .info {
          margin-left: 16px;
        }
        dl {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }
        dl dt {
          display: inline-block;
          width: 30%;
          padding-left: 12px;
          float: left;
          text-align: left;
        }
        dl dd {
          width: 60%;
          overflow-wrap: break-word;
          margin-inline-start: 20px;
        }
        paper-icon-item {
          overflow-x: hidden;
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .editable {
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }
        .help-text {
          color: grey;
          padding: 16px;
        }
        .menu {
          width: 100%;
        }
        .node-picker {
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }
        .buttons .icon {
          margin-right: 16px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/add-entities-to-view.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/editor/add-entities-to-view.ts ***!
  \************************************************************/
/*! exports provided: addEntitiesToLovelaceView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntitiesToLovelaceView", function() { return addEntitiesToLovelaceView; });
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/lovelace */ "./src/data/lovelace.ts");
/* harmony import */ var _card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-editor/show-suggest-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-suggest-card-dialog.ts");
/* harmony import */ var _select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-view/show-select-view-dialog */ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts");



const addEntitiesToLovelaceView = async (element, hass, entities, lovelaceConfig, saveConfigFunc) => {
  var _ref, _panels$lovelace;

  if (((_ref = (_panels$lovelace = hass.panels.lovelace) === null || _panels$lovelace === void 0 ? void 0 : _panels$lovelace.config) === null || _ref === void 0 ? void 0 : _ref.mode) === "yaml") {
    Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_1__["showSuggestCardDialog"])(element, {
      entities
    });
    return;
  }

  if (!lovelaceConfig) {
    try {
      lovelaceConfig = await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_0__["fetchConfig"])(hass.connection, null, false);
    } catch {
      alert(hass.localize("ui.panel.lovelace.editor.add_entities.generated_unsupported"));
      return;
    }
  }

  if (!lovelaceConfig.views.length) {
    alert("You don't have any Lovelace views, first create a view in Lovelace.");
    return;
  }

  if (!saveConfigFunc) {
    saveConfigFunc = async newConfig => {
      try {
        await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_0__["saveConfig"])(hass, null, newConfig);
      } catch {
        alert(hass.localize("ui.panel.config.devices.add_entities.saving_failed"));
      }
    };
  }

  if (lovelaceConfig.views.length === 1) {
    Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_1__["showSuggestCardDialog"])(element, {
      lovelaceConfig: lovelaceConfig,
      saveConfig: saveConfigFunc,
      path: [0],
      entities
    });
    return;
  }

  Object(_select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_2__["showSelectViewDialog"])(element, {
    lovelaceConfig,
    viewSelectedCallback: view => {
      Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_1__["showSuggestCardDialog"])(element, {
        lovelaceConfig: lovelaceConfig,
        saveConfig: saveConfigFunc,
        path: [view],
        entities
      });
    }
  });
};

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/show-suggest-card-dialog.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-suggest-card-dialog.ts ***!
  \****************************************************************************/
/*! exports provided: showSuggestCardDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuggestCardDialog", function() { return showSuggestCardDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


const importsuggestCardDialog = () => Promise.all(/*! import() | hui-dialog-suggest-card */[__webpack_require__.e(1), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e(13), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-delete-card~hui-dialog-edit-card~hui-dialog-suggest-card~h~a8cf51a3"), __webpack_require__.e(17), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~hui-dialog-suggest-card~more-info-dialog~panel-c~e54ccf84"), __webpack_require__.e("vendors~hui-dialog-suggest-card~more-info-dialog~panel-history~panel-lovelace"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-zigbee-info~hui-dialog-suggest-card~more-info-dialog"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-lovelace"), __webpack_require__.e(14), __webpack_require__.e(18), __webpack_require__.e("hui-dialog-suggest-card~more-info-dialog~panel-config-automation~panel-config-devices~panel-lovelace"), __webpack_require__.e("hui-dialog-suggest-card~more-info-dialog~panel-history~panel-lovelace"), __webpack_require__.e("hui-dialog-save-config~hui-dialog-suggest-card~panel-config-automation~panel-config-script"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-devices~panel-lovelace"), __webpack_require__.e("hui-dialog-suggest-card~panel-lovelace"), __webpack_require__.e("hui-dialog-suggest-card")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-suggest-card */ "./src/panels/lovelace/editor/card-editor/hui-dialog-suggest-card.ts"));

const showSuggestCardDialog = (element, suggestCardDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-suggest-card",
    dialogImport: importsuggestCardDialog,
    dialogParams: suggestCardDialogParams
  });
};

/***/ }),

/***/ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts ***!
  \***************************************************************************/
/*! exports provided: showSelectViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSelectViewDialog", function() { return showSelectViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showSelectViewDialog = (element, selectViewDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-select-view",
    dialogImport: () => Promise.all(/*! import() | hui-dialog-select-view */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e("vendors~cloud-webhook-manage-dialog~config-entry-system-options~confirmation~device-registry-detail-~836e8839"), __webpack_require__.e("vendors~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-select-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-select-view */ "./src/panels/lovelace/editor/select-view/hui-dialog-select-view.ts")),
    dialogParams: selectViewDialogParams
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXpoYS1kZXZpY2UtaW5mb356aGEtYWRkLWRldmljZXMtcGFnZX56aGEtZGV2aWNlcy1wYWdlfnpoYS1ncm91cC1wYWdlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdHJpbmcvY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1wcm9ncmVzcy1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcmVhX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RldmljZV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9sb3ZlbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS96aGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvemhhLWRldmljZS16aWdiZWUtc2lnbmF0dXJlLWRpYWxvZy9zaG93LWRpYWxvZy16aGEtZGV2aWNlLXppZ2JlZS1pbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS9mdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1kZXZpY2UtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9hZGQtZW50aXRpZXMtdG8tdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LXN1Z2dlc3QtY2FyZC1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3Ivc2VsZWN0LXZpZXcvc2hvdy1zZWxlY3Qtdmlldy1kaWFsb2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyB9IGZyb20gXCIuLi8uLi9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgXCIuL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNhbGxTZXJ2aWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgaWQ9XCJwcm9ncmVzc1wiXG4gICAgICAgIHByb2dyZXNzPVwiW1twcm9ncmVzc11dXCJcbiAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICA+PHNsb3Q+PC9zbG90XG4gICAgICA+PC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpcm1hdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjYWxsU2VydmljZSgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgc2VydmljZTogdGhpcy5zZXJ2aWNlLFxuICAgICAgc2VydmljZURhdGE6IHRoaXMuc2VydmljZURhdGEsXG4gICAgfTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2UsIHRoaXMuc2VydmljZURhdGEpXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25TdWNjZXNzKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvbkVycm9yKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBlbC5maXJlKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICBidXR0b25UYXBwZWQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlybWF0aW9uKSB7XG4gICAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5jb25maXJtYXRpb24sXG4gICAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuY2FsbFNlcnZpY2UoKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbGxTZXJ2aWNlKCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhbGwtc2VydmljZS1idXR0b25cIiwgSGFDYWxsU2VydmljZUJ1dHRvbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVByb2dyZXNzQnV0dG9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3MgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcHJvZ3Jlc3NdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5idXR0b25UYXBwZWQoZXYpKTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZChldikge1xuICAgIGlmICh0aGlzLnByb2dyZXNzKSBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFjdGlvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJzdWNjZXNzXCIpO1xuICB9XG5cbiAgYWN0aW9uRXJyb3IoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJlcnJvclwiKTtcbiAgfVxuXG4gIGNvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgcHJvZ3Jlc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcHJvZ3Jlc3MtYnV0dG9uXCIsIEhhUHJvZ3Jlc3NCdXR0b24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFTZXJ2aWNlRGVzY3JpcHRpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgIFtbX2dldERlc2NyaXB0aW9uKGhhc3MsIGRvbWFpbiwgc2VydmljZSldXSBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBkb21haW46IFN0cmluZyxcbiAgICAgIHNlcnZpY2U6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgX2dldERlc2NyaXB0aW9uKGhhc3MsIGRvbWFpbiwgc2VydmljZSkge1xuICAgIHZhciBkb21haW5TZXJ2aWNlcyA9IGhhc3Muc2VydmljZXNbZG9tYWluXTtcbiAgICBpZiAoIWRvbWFpblNlcnZpY2VzKSByZXR1cm4gXCJcIjtcbiAgICB2YXIgc2VydmljZU9iamVjdCA9IGRvbWFpblNlcnZpY2VzW3NlcnZpY2VdO1xuICAgIGlmICghc2VydmljZU9iamVjdCkgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIHNlcnZpY2VPYmplY3QuZGVzY3JpcHRpb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2VydmljZS1kZXNjcmlwdGlvblwiLCBIYVNlcnZpY2VEZXNjcmlwdGlvbik7XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uLCBjcmVhdGVDb2xsZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnkge1xuICBhcmVhX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgYXJlYUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8QXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgYXJlYUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2RlbGV0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoQXJlYVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm5cbiAgICAuc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvbGlzdFwiLFxuICAgIH0pXG4gICAgLnRoZW4oKGFyZWFzKSA9PiBhcmVhcy5zb3J0KChlbnQxLCBlbnQyKSA9PiBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKSkpO1xuXG5jb25zdCBzdWJzY3JpYmVBcmVhUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQXJlYVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGFyZWFzKSA9PiBzdG9yZS5zZXRTdGF0ZShhcmVhcywgdHJ1ZSkpLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJhcmVhX3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248QXJlYVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfYXJlYVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hBcmVhUmVnaXN0cnksXG4gICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uLCBjcmVhdGVDb2xsZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi9lbnRpdHlfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgY29uZmlnX2VudHJpZXM6IHN0cmluZ1tdO1xuICBjb25uZWN0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgc3dfdmVyc2lvbj86IHN0cmluZztcbiAgdmlhX2RldmljZV9pZD86IHN0cmluZztcbiAgYXJlYV9pZD86IHN0cmluZztcbiAgbmFtZV9ieV91c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUVudGl0eUxvb2t1cCB7XG4gIFtkZXZpY2VJZDogc3RyaW5nXTogRW50aXR5UmVnaXN0cnlFbnRyeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgYXJlYV9pZD86IHN0cmluZyB8IG51bGw7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBmYWxsYmFja0RldmljZU5hbWUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10gfCBzdHJpbmdbXVxuKSA9PiB7XG4gIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzIHx8IFtdKSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSB0eXBlb2YgZW50aXR5ID09PSBcInN0cmluZ1wiID8gZW50aXR5IDogZW50aXR5LmVudGl0eV9pZDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IGhhc3Muc3RhdGVzW2VudGl0eUlkXTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRGV2aWNlTmFtZSA9IChcbiAgZGV2aWNlOiBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdGllcz86IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSB8IHN0cmluZ1tdXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICBkZXZpY2UubmFtZV9ieV91c2VyIHx8XG4gICAgZGV2aWNlLm5hbWUgfHxcbiAgICAoZW50aXRpZXMgJiYgZmFsbGJhY2tEZXZpY2VOYW1lKGhhc3MsIGVudGl0aWVzKSkgfHxcbiAgICBoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmRldmljZXMudW5uYW1lZF9kZXZpY2VcIilcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXZpY2VzSW5BcmVhID0gKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSwgYXJlYUlkOiBzdHJpbmcpID0+XG4gIGRldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IGRldmljZS5hcmVhX2lkID09PSBhcmVhSWQpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5jb25zdCBmZXRjaERldmljZVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRGV2aWNlUmVnaXN0cnkoY29ubikudGhlbigoZGV2aWNlcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShkZXZpY2VzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJkZXZpY2VfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxEZXZpY2VSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2RyXCIsXG4gICAgZmV0Y2hEZXZpY2VSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHtcbiAgQ29ubmVjdGlvbixcbiAgZ2V0Q29sbGVjdGlvbixcbiAgSGFzc0V2ZW50QmFzZSxcbn0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSEFTU0RvbUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlUGFuZWxDb25maWcge1xuICBtb2RlOiBcInlhbWxcIiB8IFwic3RvcmFnZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlQ29uZmlnIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHZpZXdzOiBMb3ZlbGFjZVZpZXdDb25maWdbXTtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZWdhY3lMb3ZlbGFjZUNvbmZpZyBleHRlbmRzIExvdmVsYWNlQ29uZmlnIHtcbiAgcmVzb3VyY2VzPzogTG92ZWxhY2VSZXNvdXJjZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlUmVzb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBcImNzc1wiIHwgXCJqc1wiIHwgXCJtb2R1bGVcIiB8IFwiaHRtbFwiO1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVJlc291cmNlc011dGFibGVQYXJhbXMge1xuICByZXNfdHlwZTogXCJjc3NcIiB8IFwianNcIiB8IFwibW9kdWxlXCIgfCBcImh0bWxcIjtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIExvdmVsYWNlRGFzaGJvYXJkID1cbiAgfCBMb3ZlbGFjZVlhbWxEYXNoYm9hcmRcbiAgfCBMb3ZlbGFjZVN0b3JhZ2VEYXNoYm9hcmQ7XG5cbmludGVyZmFjZSBMb3ZlbGFjZUdlbmVyaWNEYXNoYm9hcmQge1xuICBpZDogc3RyaW5nO1xuICB1cmxfcGF0aDogc3RyaW5nO1xuICByZXF1aXJlX2FkbWluOiBib29sZWFuO1xuICBzaG93X2luX3NpZGViYXI6IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VZYW1sRGFzaGJvYXJkIGV4dGVuZHMgTG92ZWxhY2VHZW5lcmljRGFzaGJvYXJkIHtcbiAgbW9kZTogXCJ5YW1sXCI7XG4gIGZpbGVuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VTdG9yYWdlRGFzaGJvYXJkIGV4dGVuZHMgTG92ZWxhY2VHZW5lcmljRGFzaGJvYXJkIHtcbiAgbW9kZTogXCJzdG9yYWdlXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VEYXNoYm9hcmRNdXRhYmxlUGFyYW1zIHtcbiAgcmVxdWlyZV9hZG1pbjogYm9vbGVhbjtcbiAgc2hvd19pbl9zaWRlYmFyOiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlRGFzaGJvYXJkQ3JlYXRlUGFyYW1zXG4gIGV4dGVuZHMgTG92ZWxhY2VEYXNoYm9hcmRNdXRhYmxlUGFyYW1zIHtcbiAgdXJsX3BhdGg6IHN0cmluZztcbiAgbW9kZTogXCJzdG9yYWdlXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VWaWV3Q29uZmlnIHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBiYWRnZXM/OiBBcnJheTxzdHJpbmcgfCBMb3ZlbGFjZUJhZGdlQ29uZmlnPjtcbiAgY2FyZHM/OiBMb3ZlbGFjZUNhcmRDb25maWdbXTtcbiAgcGF0aD86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgdGhlbWU/OiBzdHJpbmc7XG4gIHBhbmVsPzogYm9vbGVhbjtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgdmlzaWJsZT86IGJvb2xlYW4gfCBTaG93Vmlld0NvbmZpZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dWaWV3Q29uZmlnIHtcbiAgdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZUJhZGdlQ29uZmlnIHtcbiAgdHlwZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlQ2FyZENvbmZpZyB7XG4gIGluZGV4PzogbnVtYmVyO1xuICB2aWV3X2luZGV4PzogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2dnbGVBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcInRvZ2dsZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJjYWxsLXNlcnZpY2VcIjtcbiAgc2VydmljZTogc3RyaW5nO1xuICBzZXJ2aWNlX2RhdGE/OiB7XG4gICAgZW50aXR5X2lkPzogc3RyaW5nIHwgW3N0cmluZ107XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJuYXZpZ2F0ZVwiO1xuICBuYXZpZ2F0aW9uX3BhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcInVybFwiO1xuICB1cmxfcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vcmVJbmZvQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJtb3JlLWluZm9cIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb0FjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibm9uZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwiZmlyZS1kb20tZXZlbnRcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgY29uZmlybWF0aW9uPzogQ29uZmlybWF0aW9uUmVzdHJpY3Rpb25Db25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uUmVzdHJpY3Rpb25Db25maWcge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBleGVtcHRpb25zPzogUmVzdHJpY3Rpb25Db25maWdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXN0cmljdGlvbkNvbmZpZyB7XG4gIHVzZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uQ29uZmlnID1cbiAgfCBUb2dnbGVBY3Rpb25Db25maWdcbiAgfCBDYWxsU2VydmljZUFjdGlvbkNvbmZpZ1xuICB8IE5hdmlnYXRlQWN0aW9uQ29uZmlnXG4gIHwgVXJsQWN0aW9uQ29uZmlnXG4gIHwgTW9yZUluZm9BY3Rpb25Db25maWdcbiAgfCBOb0FjdGlvbkNvbmZpZ1xuICB8IEN1c3RvbUFjdGlvbkNvbmZpZztcblxudHlwZSBMb3ZlbGFjZVVwZGF0ZWRFdmVudCA9IEhhc3NFdmVudEJhc2UgJiB7XG4gIGV2ZW50X3R5cGU6IFwibG92ZWxhY2VfdXBkYXRlZFwiO1xuICBkYXRhOiB7XG4gICAgdXJsX3BhdGg6IHN0cmluZyB8IG51bGw7XG4gICAgbW9kZTogXCJ5YW1sXCIgfCBcInN0b3JhZ2VcIjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFJlc291cmNlcyA9IChjb25uOiBDb25uZWN0aW9uKTogUHJvbWlzZTxMb3ZlbGFjZVJlc291cmNlW10+ID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL3Jlc291cmNlc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlc291cmNlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IExvdmVsYWNlUmVzb3VyY2VzTXV0YWJsZVBhcmFtc1xuKSA9PlxuICBoYXNzLmNhbGxXUzxMb3ZlbGFjZVJlc291cmNlPih7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9yZXNvdXJjZXMvY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlc291cmNlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPExvdmVsYWNlUmVzb3VyY2VzTXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8TG92ZWxhY2VSZXNvdXJjZT4oe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvcmVzb3VyY2VzL3VwZGF0ZVwiLFxuICAgIHJlc291cmNlX2lkOiBpZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlc291cmNlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL3Jlc291cmNlcy9kZWxldGVcIixcbiAgICByZXNvdXJjZV9pZDogaWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYXNoYm9hcmRzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50XG4pOiBQcm9taXNlPExvdmVsYWNlRGFzaGJvYXJkW10+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2Rhc2hib2FyZHMvbGlzdFwiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURhc2hib2FyZCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBMb3ZlbGFjZURhc2hib2FyZENyZWF0ZVBhcmFtc1xuKSA9PlxuICBoYXNzLmNhbGxXUzxMb3ZlbGFjZURhc2hib2FyZD4oe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvZGFzaGJvYXJkcy9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRGFzaGJvYXJkID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPExvdmVsYWNlRGFzaGJvYXJkTXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8TG92ZWxhY2VEYXNoYm9hcmQ+KHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2Rhc2hib2FyZHMvdXBkYXRlXCIsXG4gICAgZGFzaGJvYXJkX2lkOiBpZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhc2hib2FyZCA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBpZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9kYXNoYm9hcmRzL2RlbGV0ZVwiLFxuICAgIGRhc2hib2FyZF9pZDogaWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDb25maWcgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIHVybFBhdGg6IHN0cmluZyB8IG51bGwsXG4gIGZvcmNlOiBib29sZWFuXG4pOiBQcm9taXNlPExvdmVsYWNlQ29uZmlnPiA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9jb25maWdcIixcbiAgICB1cmxfcGF0aDogdXJsUGF0aCxcbiAgICBmb3JjZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzYXZlQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB1cmxQYXRoOiBzdHJpbmcgfCBudWxsLFxuICBjb25maWc6IExvdmVsYWNlQ29uZmlnXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2NvbmZpZy9zYXZlXCIsXG4gICAgdXJsX3BhdGg6IHVybFBhdGgsXG4gICAgY29uZmlnLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpZyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdXJsUGF0aDogc3RyaW5nIHwgbnVsbFxuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9jb25maWcvZGVsZXRlXCIsXG4gICAgdXJsX3BhdGg6IHVybFBhdGgsXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlTG92ZWxhY2VVcGRhdGVzID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICB1cmxQYXRoOiBzdHJpbmcgfCBudWxsLFxuICBvbkNoYW5nZTogKCkgPT4gdm9pZFxuKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50czxMb3ZlbGFjZVVwZGF0ZWRFdmVudD4oKGV2KSA9PiB7XG4gICAgaWYgKGV2LmRhdGEudXJsX3BhdGggPT09IHVybFBhdGgpIHtcbiAgICAgIG9uQ2hhbmdlKCk7XG4gICAgfVxuICB9LCBcImxvdmVsYWNlX3VwZGF0ZWRcIik7XG5cbmV4cG9ydCBjb25zdCBnZXRMb3ZlbGFjZUNvbGxlY3Rpb24gPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIHVybFBhdGg6IHN0cmluZyB8IG51bGwgPSBudWxsXG4pID0+XG4gIGdldENvbGxlY3Rpb24oXG4gICAgY29ubixcbiAgICBgX2xvdmVsYWNlXyR7dXJsUGF0aCA/PyBcIlwifWAsXG4gICAgKGNvbm4yKSA9PiBmZXRjaENvbmZpZyhjb25uMiwgdXJsUGF0aCwgZmFsc2UpLFxuICAgIChfY29ubiwgc3RvcmUpID0+XG4gICAgICBzdWJzY3JpYmVMb3ZlbGFjZVVwZGF0ZXMoY29ubiwgdXJsUGF0aCwgKCkgPT5cbiAgICAgICAgZmV0Y2hDb25maWcoY29ubiwgdXJsUGF0aCwgZmFsc2UpLnRoZW4oKGNvbmZpZykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShjb25maWcsIHRydWUpXG4gICAgICAgIClcbiAgICAgIClcbiAgKTtcblxuLy8gTGVnYWN5IGZ1bmN0aW9ucyB0byBzdXBwb3J0IGNhc3QgZm9yIEhvbWUgQXNzaXN0aW9uIDwgMC4xMDdcbmNvbnN0IGZldGNoTGVnYWN5Q29uZmlnID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBmb3JjZTogYm9vbGVhblxuKTogUHJvbWlzZTxMb3ZlbGFjZUNvbmZpZz4gPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvY29uZmlnXCIsXG4gICAgZm9yY2UsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVMZWdhY3lMb3ZlbGFjZVVwZGF0ZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoKSA9PiB2b2lkXG4pID0+IGNvbm4uc3Vic2NyaWJlRXZlbnRzKG9uQ2hhbmdlLCBcImxvdmVsYWNlX3VwZGF0ZWRcIik7XG5cbmV4cG9ydCBjb25zdCBnZXRMZWdhY3lMb3ZlbGFjZUNvbGxlY3Rpb24gPSAoY29ubjogQ29ubmVjdGlvbikgPT5cbiAgZ2V0Q29sbGVjdGlvbihcbiAgICBjb25uLFxuICAgIFwiX2xvdmVsYWNlXCIsXG4gICAgKGNvbm4yKSA9PiBmZXRjaExlZ2FjeUNvbmZpZyhjb25uMiwgZmFsc2UpLFxuICAgIChfY29ubiwgc3RvcmUpID0+XG4gICAgICBzdWJzY3JpYmVMZWdhY3lMb3ZlbGFjZVVwZGF0ZXMoY29ubiwgKCkgPT5cbiAgICAgICAgZmV0Y2hMZWdhY3lDb25maWcoY29ubiwgZmFsc2UpLnRoZW4oKGNvbmZpZykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShjb25maWcsIHRydWUpXG4gICAgICAgIClcbiAgICAgIClcbiAgKTtcblxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dXaXRoTG92ZWxhY2VQcm9tIGV4dGVuZHMgV2luZG93IHtcbiAgbGxDb25mUHJvbT86IFByb21pc2U8TG92ZWxhY2VDb25maWc+O1xuICBsbFJlc1Byb20/OiBQcm9taXNlPExvdmVsYWNlUmVzb3VyY2VbXT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uSGFuZGxlck9wdGlvbnMge1xuICBoYXNIb2xkPzogYm9vbGVhbjtcbiAgaGFzRG91YmxlQ2xpY2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkhhbmRsZXJEZXRhaWwge1xuICBhY3Rpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uSGFuZGxlckV2ZW50ID0gSEFTU0RvbUV2ZW50PEFjdGlvbkhhbmRsZXJEZXRhaWw+O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBaSEFFbnRpdHlSZWZlcmVuY2UgZXh0ZW5kcyBIYXNzRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpIQURldmljZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWVlZTogc3RyaW5nO1xuICBud2s6IHN0cmluZztcbiAgbHFpOiBzdHJpbmc7XG4gIHJzc2k6IHN0cmluZztcbiAgbGFzdF9zZWVuOiBzdHJpbmc7XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBxdWlya19hcHBsaWVkOiBib29sZWFuO1xuICBxdWlya19jbGFzczogc3RyaW5nO1xuICBlbnRpdGllczogWkhBRW50aXR5UmVmZXJlbmNlW107XG4gIG1hbnVmYWN0dXJlcl9jb2RlOiBudW1iZXI7XG4gIGRldmljZV9yZWdfaWQ6IHN0cmluZztcbiAgdXNlcl9naXZlbl9uYW1lPzogc3RyaW5nO1xuICBwb3dlcl9zb3VyY2U/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV90eXBlOiBzdHJpbmc7XG4gIHNpZ25hdHVyZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbHVzdGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBlbmRwb2ludF9pZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSB7XG4gIGllZWU6IHN0cmluZztcbiAgZW5kcG9pbnRfaWQ6IG51bWJlcjtcbiAgY2x1c3Rlcl9pZDogbnVtYmVyO1xuICBjbHVzdGVyX3R5cGU6IHN0cmluZztcbiAgYXR0cmlidXRlOiBudW1iZXI7XG4gIG1hbnVmYWN0dXJlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaSEFHcm91cCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ3JvdXBfaWQ6IG51bWJlcjtcbiAgbWVtYmVyczogWkhBRGV2aWNlW107XG59XG5cbmV4cG9ydCBjb25zdCByZWNvbmZpZ3VyZU5vZGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvcmVjb25maWd1cmVcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF0dHJpYnV0ZXNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPEF0dHJpYnV0ZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gICAgZW5kcG9pbnRfaWQ6IGVuZHBvaW50SWQsXG4gICAgY2x1c3Rlcl9pZDogY2x1c3RlcklkLFxuICAgIGNsdXN0ZXJfdHlwZTogY2x1c3RlclR5cGUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWkhBRGV2aWNlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmluZGFibGVEZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kYWJsZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGJpbmREZXZpY2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzb3VyY2VJRUVFOiBzdHJpbmcsXG4gIHRhcmdldElFRUU6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdW5iaW5kRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc291cmNlSUVFRTogc3RyaW5nLFxuICB0YXJnZXRJRUVFOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYmluZERldmljZVRvR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBkZXZpY2VJRUVFLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICAgIGJpbmRpbmdzOiBjbHVzdGVycyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1bmJpbmREZXZpY2VGcm9tR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IGRldmljZUlFRUUsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgYmluZGluZ3M6IGNsdXN0ZXJzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlYWRBdHRyaWJ1dGVWYWx1ZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGF0YTogUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gaGFzcy5jYWxsV1Moe1xuICAgIC4uLmRhdGEsXG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzL3ZhbHVlXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29tbWFuZHNGb3JDbHVzdGVyID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPENvbW1hbmRbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvY29tbWFuZHNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgICBlbmRwb2ludF9pZDogZW5kcG9pbnRJZCxcbiAgICBjbHVzdGVyX2lkOiBjbHVzdGVySWQsXG4gICAgY2x1c3Rlcl90eXBlOiBjbHVzdGVyVHlwZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTxDbHVzdGVyW10+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hHcm91cHMgPSAoaGFzczogSG9tZUFzc2lzdGFudCk6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3Vwc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUdyb3VwcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZ3JvdXBJZHNUb1JlbW92ZTogbnVtYmVyW11cbik6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL3JlbW92ZVwiLFxuICAgIGdyb3VwX2lkczogZ3JvdXBJZHNUb1JlbW92ZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdyb3VwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBncm91cElkOiBudW1iZXJcbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cFwiLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JvdXBhYmxlRGV2aWNlcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvZ3JvdXBhYmxlXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYWRkTWVtYmVyc1RvR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvQWRkOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvYWRkXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZU1lbWJlcnNGcm9tR3JvdXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvUmVtb3ZlOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvcmVtb3ZlXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvUmVtb3ZlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGFkZEdyb3VwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBncm91cE5hbWU6IHN0cmluZyxcbiAgbWVtYmVyc1RvQWRkPzogc3RyaW5nW11cbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cC9hZGRcIixcbiAgICBncm91cF9uYW1lOiBncm91cE5hbWUsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcbiIsImltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmludGVyZmFjZSBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlc3VsdDtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGRpc21pc3NUZXh0Pzogc3RyaW5nO1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbiAgY2FuY2VsPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1BhcmFtc1xuICBleHRlbmRzIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyxcbiAgICBQcm9tcHREaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbiAgY29uZmlybWF0aW9uPzogYm9vbGVhbjtcbiAgcHJvbXB0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRHZW5lcmljRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlybWF0aW9uXCIgKi8gXCIuL2RpYWxvZy1ib3hcIik7XG5cbmNvbnN0IHNob3dEaWFsb2dIZWxwZXIgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IERpYWxvZ1BhcmFtcyxcbiAgZXh0cmE/OiB7XG4gICAgY29uZmlybWF0aW9uPzogRGlhbG9nUGFyYW1zW1wiY29uZmlybWF0aW9uXCJdO1xuICAgIHByb21wdD86IERpYWxvZ1BhcmFtc1tcInByb21wdFwiXTtcbiAgfVxuKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdDYW5jZWwgPSBkaWFsb2dQYXJhbXMuY2FuY2VsO1xuICAgIGNvbnN0IG9yaWdDb25maXJtID0gZGlhbG9nUGFyYW1zLmNvbmZpcm07XG5cbiAgICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWJveFwiLFxuICAgICAgZGlhbG9nSW1wb3J0OiBsb2FkR2VuZXJpY0RpYWxvZyxcbiAgICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgICAuLi5kaWFsb2dQYXJhbXMsXG4gICAgICAgIC4uLmV4dHJhLFxuICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBudWxsIDogZmFsc2UpO1xuICAgICAgICAgIGlmIChvcmlnQ2FuY2VsKSB7XG4gICAgICAgICAgICBvcmlnQ2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiAob3V0KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gb3V0IDogdHJ1ZSk7XG4gICAgICAgICAgaWYgKG9yaWdDb25maXJtKSB7XG4gICAgICAgICAgICBvcmlnQ29uZmlybShvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FsZXJ0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBBbGVydERpYWxvZ1BhcmFtc1xuKSA9PiBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcyk7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBDb25maXJtYXRpb25EaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgY29uZmlybWF0aW9uOiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgYm9vbGVhblxuICA+O1xuXG5leHBvcnQgY29uc3Qgc2hvd1Byb21wdERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogUHJvbXB0RGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IHByb21wdDogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIG51bGwgfCBzdHJpbmdcbiAgPjtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IFpIQURldmljZSB9IGZyb20gXCIuLi8uLi9kYXRhL3poYVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpIQURldmljZVppZ2JlZUluZm9EaWFsb2dQYXJhbXMge1xuICBkZXZpY2U6IFpIQURldmljZTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRaSEFEZXZpY2VaaWdiZWVJbmZvRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLXpoYS1kZXZpY2UtemlnYmVlLWluZm9cIiAqLyBcIi4vZGlhbG9nLXpoYS1kZXZpY2UtemlnYmVlLWluZm9cIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc2hvd1pIQURldmljZVppZ2JlZUluZm9EaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB6aGFEZXZpY2VaaWdiZWVJbmZvUGFyYW1zOiBaSEFEZXZpY2VaaWdiZWVJbmZvRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctemhhLWRldmljZS16aWdiZWUtaW5mb1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZFpIQURldmljZVppZ2JlZUluZm9EaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiB6aGFEZXZpY2VaaWdiZWVJbmZvUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBDbHVzdGVyLCBaSEFEZXZpY2UsIFpIQUdyb3VwIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRBc1BhZGRlZEhleCA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgbGV0IGhleCA9IHZhbHVlO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgaGV4ID0gcGFyc2VJbnQodmFsdWUsIDE2KTtcbiAgfVxuICByZXR1cm4gXCIweFwiICsgaGV4LnRvU3RyaW5nKDE2KS5wYWRTdGFydCg0LCBcIjBcIik7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFpIQURldmljZXMgPSAoYTogWkhBRGV2aWNlLCBiOiBaSEFEZXZpY2UpOiBudW1iZXIgPT4ge1xuICBjb25zdCBuYW1lQSA9IGEudXNlcl9naXZlbl9uYW1lID8gYS51c2VyX2dpdmVuX25hbWUgOiBhLm5hbWU7XG4gIGNvbnN0IG5hbWViID0gYi51c2VyX2dpdmVuX25hbWUgPyBiLnVzZXJfZ2l2ZW5fbmFtZSA6IGIubmFtZTtcbiAgcmV0dXJuIG5hbWVBLmxvY2FsZUNvbXBhcmUobmFtZWIpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRaSEFHcm91cHMgPSAoYTogWkhBR3JvdXAsIGI6IFpIQUdyb3VwKTogbnVtYmVyID0+IHtcbiAgY29uc3QgbmFtZUEgPSBhLm5hbWU7XG4gIGNvbnN0IG5hbWViID0gYi5uYW1lO1xuICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lYik7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZUNsdXN0ZXJLZXkgPSAoY2x1c3RlcjogQ2x1c3Rlcik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBgJHtjbHVzdGVyLm5hbWV9IChFbmRwb2ludCBpZDogJHtcbiAgICBjbHVzdGVyLmVuZHBvaW50X2lkXG4gIH0sIElkOiAke2Zvcm1hdEFzUGFkZGVkSGV4KGNsdXN0ZXIuaWQpfSwgVHlwZTogJHtjbHVzdGVyLnR5cGV9KWA7XG59O1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IEhhc3NFdmVudCwgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQge1xuICBBcmVhUmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyxcbiAgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICByZWNvbmZpZ3VyZU5vZGUsXG4gIFpIQURldmljZSxcbiAgWkhBRW50aXR5UmVmZXJlbmNlLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IHNob3daSEFEZXZpY2VaaWdiZWVJbmZvRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RpYWxvZ3MvemhhLWRldmljZS16aWdiZWUtc2lnbmF0dXJlLWRpYWxvZy9zaG93LWRpYWxvZy16aGEtZGV2aWNlLXppZ2JlZS1pbmZvXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGFkZEVudGl0aWVzVG9Mb3ZlbGFjZVZpZXcgfSBmcm9tIFwiLi4vLi4vbG92ZWxhY2UvZWRpdG9yL2FkZC1lbnRpdGllcy10by12aWV3XCI7XG5pbXBvcnQgeyBmb3JtYXRBc1BhZGRlZEhleCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgSXRlbVNlbGVjdGVkRXZlbnQsIE5vZGVTZXJ2aWNlRGF0YSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiemhhLWRldmljZS1yZW1vdmVkXCI6IHtcbiAgICAgIGRldmljZT86IFpIQURldmljZTtcbiAgICB9O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiemhhLWRldmljZS1jYXJkXCIpXG5jbGFzcyBaSEFEZXZpY2VDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlPzogWkhBRGV2aWNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIG5hcnJvdz86IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2hvd0hlbHA/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2hvd0FjdGlvbnM/OiBib29sZWFuID0gdHJ1ZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzaG93TmFtZT86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIHNob3dFbnRpdHlEZXRhaWw/OiBib29sZWFuID0gdHJ1ZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzaG93TW9kZWxJbmZvPzogYm9vbGVhbiA9IHRydWU7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2hvd0VkaXRhYmxlSW5mbz86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlcnZpY2VEYXRhPzogTm9kZVNlcnZpY2VEYXRhO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdID0gW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRBcmVhSW5kZXggPSAtMTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF91c2VyR2l2ZW5OYW1lPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Vuc3ViQXJlYXM/OiBVbnN1YnNjcmliZUZ1bmM7XG5cbiAgcHJpdmF0ZSBfdW5zdWJFbnRpdGllcz86IFVuc3Vic2NyaWJlRnVuYztcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5zdWJFbnRpdGllcykge1xuICAgICAgdGhpcy5fdW5zdWJFbnRpdGllcygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3Vuc3ViQXJlYXMgPSBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChhcmVhcykgPT4ge1xuICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICAgIGlmICh0aGlzLmRldmljZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEFyZWFJbmRleCA9XG4gICAgICAgICAgdGhpcy5fYXJlYXMuZmluZEluZGV4KFxuICAgICAgICAgICAgKGFyZWEpID0+IGFyZWEuYXJlYV9pZCA9PT0gdGhpcy5kZXZpY2UhLmFyZWFfaWRcbiAgICAgICAgICApICsgMTsgLy8gYWNjb3VudCBmb3IgdGhlIG5vIGFyZWEgc2VsZWN0ZWQgaW5kZXhcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmhhc3MuY29ubmVjdGlvblxuICAgICAgLnN1YnNjcmliZUV2ZW50cygoZXZlbnQ6IEhhc3NFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5kZXZpY2UpIHtcbiAgICAgICAgICB0aGlzLmRldmljZSEuZW50aXRpZXMuZm9yRWFjaCgoZGV2aWNlRW50aXR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5vbGRfZW50aXR5X2lkID09PSBkZXZpY2VFbnRpdHkuZW50aXR5X2lkKSB7XG4gICAgICAgICAgICAgIGRldmljZUVudGl0eS5lbnRpdHlfaWQgPSBldmVudC5kYXRhLmVudGl0eV9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiKVxuICAgICAgLnRoZW4oKHVuc3ViKSA9PiB7XG4gICAgICAgIHRoaXMuX3Vuc3ViRW50aXRpZXMgPSB1bnN1YjtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiZGV2aWNlXCIpKSB7XG4gICAgICBpZiAoIXRoaXMuX2FyZWFzIHx8ICF0aGlzLmRldmljZSB8fCAhdGhpcy5kZXZpY2UuYXJlYV9pZCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEFyZWFJbmRleCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEFyZWFJbmRleCA9XG4gICAgICAgICAgdGhpcy5fYXJlYXMuZmluZEluZGV4KFxuICAgICAgICAgICAgKGFyZWEpID0+IGFyZWEuYXJlYV9pZCA9PT0gdGhpcy5kZXZpY2UhLmFyZWFfaWRcbiAgICAgICAgICApICsgMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VzZXJHaXZlbk5hbWUgPSB0aGlzLmRldmljZSEudXNlcl9naXZlbl9uYW1lO1xuICAgICAgdGhpcy5fc2VydmljZURhdGEgPSB7XG4gICAgICAgIGllZWVfYWRkcmVzczogdGhpcy5kZXZpY2UhLmllZWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNlcnZpY2VDYWxsZWQoZXYpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGZvciB1c1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2VzcyAmJiBldi5kZXRhaWwuc2VydmljZSA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiemhhLWRldmljZS1yZW1vdmVkXCIsIHtcbiAgICAgICAgZGV2aWNlOiB0aGlzLmRldmljZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiJHt0aGlzLnNob3dOYW1lID8gdGhpcy5kZXZpY2UhLm5hbWUgOiBcIlwifVwiPlxuICAgICAgICAke1xuICAgICAgICAgIHRoaXMuc2hvd01vZGVsSW5mb1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kZWxcIj4ke3RoaXMuZGV2aWNlIS5tb2RlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYW51ZlwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5tYW51ZlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibWFudWZhY3R1cmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2UhLm1hbnVmYWN0dXJlclxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICA8ZHQ+SUVFRTo8L2R0PlxuICAgICAgICAgICAgPGRkIGNsYXNzPVwiemhhLWluZm9cIj4ke3RoaXMuZGV2aWNlIS5pZWVlfTwvZGQ+XG4gICAgICAgICAgICA8ZHQ+TndrOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7Zm9ybWF0QXNQYWRkZWRIZXgodGhpcy5kZXZpY2UhLm53ayl9PC9kZD5cbiAgICAgICAgICAgIDxkdD5EZXZpY2UgVHlwZTo8L2R0PlxuICAgICAgICAgICAgPGRkIGNsYXNzPVwiemhhLWluZm9cIj4ke3RoaXMuZGV2aWNlIS5kZXZpY2VfdHlwZX08L2RkPlxuICAgICAgICAgICAgPGR0PkxRSTo8L2R0PlxuICAgICAgICAgICAgPGRkIGNsYXNzPVwiemhhLWluZm9cIj4ke1xuICAgICAgICAgICAgICB0aGlzLmRldmljZSEubHFpIHx8XG4gICAgICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby51bmtub3duXCIpXG4gICAgICAgICAgICB9PC9kZD5cbiAgICAgICAgICAgIDxkdD5SU1NJOjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7XG4gICAgICAgICAgICAgIHRoaXMuZGV2aWNlIS5yc3NpIHx8XG4gICAgICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby51bmtub3duXCIpXG4gICAgICAgICAgICB9PC9kZD5cbiAgICAgICAgICAgIDxkdD4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8ubGFzdF9zZWVuXCJcbiAgICAgICAgICAgICl9OjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7XG4gICAgICAgICAgICAgIHRoaXMuZGV2aWNlIS5sYXN0X3NlZW4gfHxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnVua25vd25cIilcbiAgICAgICAgICAgIH08L2RkPlxuICAgICAgICAgICAgPGR0PiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5wb3dlcl9zb3VyY2VcIlxuICAgICAgICAgICAgKX06PC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzcz1cInpoYS1pbmZvXCI+JHtcbiAgICAgICAgICAgICAgdGhpcy5kZXZpY2UhLnBvd2VyX3NvdXJjZSB8fFxuICAgICAgICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8udW5rbm93blwiKVxuICAgICAgICAgICAgfTwvZGQ+XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICB0aGlzLmRldmljZSEucXVpcmtfYXBwbGllZFxuICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGR0PlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8ucXVpcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICl9OlxuICAgICAgICAgICAgICAgICAgICA8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJ6aGEtaW5mb1wiPiR7dGhpcy5kZXZpY2UhLnF1aXJrX2NsYXNzfTwvZGQ+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1lbnRpdGllc1wiPlxuICAgICAgICAgICR7dGhpcy5kZXZpY2UhLmVudGl0aWVzLm1hcChcbiAgICAgICAgICAgIChlbnRpdHkpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29wZW5Nb3JlSW5mb31cIlxuICAgICAgICAgICAgICAgIC5lbnRpdHk9XCIke2VudGl0eX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgICAgICAgICAgICAuc3RhdGVPYmo9XCIke3RoaXMuaGFzcyEuc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdfVwiXG4gICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICA+PC9zdGF0ZS1iYWRnZT5cbiAgICAgICAgICAgICAgICAke3RoaXMuc2hvd0VudGl0eURldGFpbFxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2NvbXB1dGVFbnRpdHlOYW1lKGVudGl0eSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnkgZW50aXR5LWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7ZW50aXR5LmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke1xuICAgICAgICAgIHRoaXMuZGV2aWNlIS5lbnRpdGllcyAmJiB0aGlzLmRldmljZSEuZW50aXRpZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2FkZFRvTG92ZWxhY2VWaWV3fT5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZGV2aWNlcy5lbnRpdGllcy5hZGRfZW50aXRpZXNfbG92ZWxhY2VcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICAke1xuICAgICAgICAgIHRoaXMuc2hvd0VkaXRhYmxlSW5mb1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9zYXZlQ3VzdG9tTmFtZX1cIlxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3VzZXJHaXZlbk5hbWUgfHwgXCJcIn1cIlxuICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby56aGFfZGV2aWNlX2NhcmQuZGV2aWNlX25hbWVfcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnpoYV9kZXZpY2VfY2FyZC5hcmVhX3BpY2tlcl9sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9zZWxlY3RlZEFyZWFJbmRleH1cIlxuICAgICAgICAgICAgICAgICAgICAgIEBpcm9uLXNlbGVjdD1cIiR7dGhpcy5fc2VsZWN0ZWRBcmVhQ2hhbmdlZH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8ubm9fYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fYXJlYXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVudHJ5KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke2VudHJ5Lm5hbWV9PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgJHtcbiAgICAgICAgICB0aGlzLnNob3dBY3Rpb25zXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmRldmljZSEuZGV2aWNlX3R5cGUgIT09IFwiQ29vcmRpbmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9vblJlY29uZmlndXJlTm9kZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy56aGFfZGV2aWNlX2luZm8uYnV0dG9ucy5yZWNvbmZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuc2hvd0hlbHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLnpoYV9kZXZpY2VfaW5mby5zZXJ2aWNlcy5yZWNvbmZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInpoYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uZmlybWF0aW9uPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLmNvbmZpcm1hdGlvbnMucmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2VEYXRhPSR7dGhpcy5fc2VydmljZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLmJ1dHRvbnMucmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnNlcnZpY2VzLnJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5kZXZpY2UhLnBvd2VyX3NvdXJjZSA9PT0gXCJNYWluc1wiICYmXG4gICAgICAgICAgICAgICAgICAodGhpcy5kZXZpY2UhLmRldmljZV90eXBlID09PSBcIlJvdXRlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlIS5kZXZpY2VfdHlwZSA9PT0gXCJDb29yZGluYXRvclwiKVxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9vbkFkZERldmljZXNDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuY29tbW9uLmFkZF9kZXZpY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInBlcm1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC10ZXh0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmRldmljZSEuZGV2aWNlX3R5cGUgIT09IFwiQ29vcmRpbmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVaaWdiZWVJbmZvQ2xpY2tlZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLmJ1dHRvbnMuemlnYmVlX2luZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuemhhX2RldmljZV9pbmZvLnNlcnZpY2VzLnppZ2JlZV9pbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX29uUmVjb25maWd1cmVOb2RlQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuaGFzcykge1xuICAgICAgYXdhaXQgcmVjb25maWd1cmVOb2RlKHRoaXMuaGFzcywgdGhpcy5kZXZpY2UhLmllZWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVFbnRpdHlOYW1lKGVudGl0eTogWkhBRW50aXR5UmVmZXJlbmNlKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSkge1xuICAgICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUodGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSk7XG4gICAgfVxuICAgIHJldHVybiBlbnRpdHkubmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NhdmVDdXN0b21OYW1lKGV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuaGFzcykge1xuICAgICAgY29uc3QgdmFsdWVzOiBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyA9IHtcbiAgICAgICAgbmFtZV9ieV91c2VyOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGFyZWFfaWQ6IHRoaXMuZGV2aWNlIS5hcmVhX2lkID8gdGhpcy5kZXZpY2UhLmFyZWFfaWQgOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICBhd2FpdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5KFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuZGV2aWNlIS5kZXZpY2VfcmVnX2lkLFxuICAgICAgICB2YWx1ZXNcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZGV2aWNlIS51c2VyX2dpdmVuX25hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3Blbk1vcmVJbmZvKGV2OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQ6IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZW50aXR5LmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NlbGVjdGVkQXJlYUNoYW5nZWQoZXZlbnQ6IEl0ZW1TZWxlY3RlZEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRldmljZSB8fCAhdGhpcy5fYXJlYXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRBcmVhSW5kZXggPSBldmVudCEudGFyZ2V0IS5zZWxlY3RlZDtcbiAgICBjb25zdCBhcmVhID0gdGhpcy5fYXJlYXNbdGhpcy5fc2VsZWN0ZWRBcmVhSW5kZXggLSAxXTsgLy8gYWNjb3VudCBmb3IgTm8gQXJlYVxuICAgIGlmIChcbiAgICAgICghYXJlYSAmJiAhdGhpcy5kZXZpY2UuYXJlYV9pZCkgfHxcbiAgICAgIChhcmVhICYmIGFyZWEuYXJlYV9pZCA9PT0gdGhpcy5kZXZpY2UuYXJlYV9pZClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdBcmVhSWQgPSBhcmVhID8gYXJlYS5hcmVhX2lkIDogdW5kZWZpbmVkO1xuICAgIGF3YWl0IHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnkodGhpcy5oYXNzISwgdGhpcy5kZXZpY2UuZGV2aWNlX3JlZ19pZCwge1xuICAgICAgYXJlYV9pZDogbmV3QXJlYUlkLFxuICAgICAgbmFtZV9ieV91c2VyOiB0aGlzLmRldmljZSEudXNlcl9naXZlbl9uYW1lLFxuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlIS5hcmVhX2lkID0gbmV3QXJlYUlkO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25BZGREZXZpY2VzQ2xpY2soKSB7XG4gICAgbmF2aWdhdGUodGhpcywgXCIvY29uZmlnL3poYS9hZGQvXCIgKyB0aGlzLmRldmljZSEuaWVlZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVaaWdiZWVJbmZvQ2xpY2tlZCgpIHtcbiAgICBzaG93WkhBRGV2aWNlWmlnYmVlSW5mb0RpYWxvZyh0aGlzLCB7IGRldmljZTogdGhpcy5kZXZpY2UhIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVG9Mb3ZlbGFjZVZpZXcoKTogdm9pZCB7XG4gICAgYWRkRW50aXRpZXNUb0xvdmVsYWNlVmlldyhcbiAgICAgIHRoaXMsXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICB0aGlzLmRldmljZSEuZW50aXRpZXMubWFwKChlbnRpdHkpID0+IGVudGl0eS5lbnRpdHlfaWQpXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3QoOm5vdChbbmFycm93XSkpIC5kZXZpY2UtZW50aXRpZXMge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIyNXB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2Uge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZSAubmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZSAubWFudWYge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXh0cmEtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYW51ZixcbiAgICAgICAgLnpoYS1pbmZvLFxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgICAgLmVudGl0eS1pZCB7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgZGwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGRsIGR0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBkbCBkZCB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZWRpdGFibGUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5ub2RlLXBpY2tlciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9ucyAuaWNvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1kZXZpY2UtY2FyZFwiOiBaSEFEZXZpY2VDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBmZXRjaENvbmZpZyxcbiAgTG92ZWxhY2VDb25maWcsXG4gIHNhdmVDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzaG93U3VnZ2VzdENhcmREaWFsb2cgfSBmcm9tIFwiLi9jYXJkLWVkaXRvci9zaG93LXN1Z2dlc3QtY2FyZC1kaWFsb2dcIjtcbmltcG9ydCB7IHNob3dTZWxlY3RWaWV3RGlhbG9nIH0gZnJvbSBcIi4vc2VsZWN0LXZpZXcvc2hvdy1zZWxlY3Qtdmlldy1kaWFsb2dcIjtcblxuZXhwb3J0IGNvbnN0IGFkZEVudGl0aWVzVG9Mb3ZlbGFjZVZpZXcgPSBhc3luYyAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdGllczogc3RyaW5nW10sXG4gIGxvdmVsYWNlQ29uZmlnPzogTG92ZWxhY2VDb25maWcsXG4gIHNhdmVDb25maWdGdW5jPzogKG5ld0NvbmZpZzogTG92ZWxhY2VDb25maWcpID0+IHZvaWRcbikgPT4ge1xuICBpZiAoKGhhc3MhLnBhbmVscy5sb3ZlbGFjZT8uY29uZmlnIGFzIGFueSk/Lm1vZGUgPT09IFwieWFtbFwiKSB7XG4gICAgc2hvd1N1Z2dlc3RDYXJkRGlhbG9nKGVsZW1lbnQsIHtcbiAgICAgIGVudGl0aWVzLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWxvdmVsYWNlQ29uZmlnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvdmVsYWNlQ29uZmlnID0gYXdhaXQgZmV0Y2hDb25maWcoaGFzcy5jb25uZWN0aW9uLCBudWxsLCBmYWxzZSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBhbGVydChcbiAgICAgICAgaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5hZGRfZW50aXRpZXMuZ2VuZXJhdGVkX3Vuc3VwcG9ydGVkXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKCFsb3ZlbGFjZUNvbmZpZy52aWV3cy5sZW5ndGgpIHtcbiAgICBhbGVydChcbiAgICAgIFwiWW91IGRvbid0IGhhdmUgYW55IExvdmVsYWNlIHZpZXdzLCBmaXJzdCBjcmVhdGUgYSB2aWV3IGluIExvdmVsYWNlLlwiXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFzYXZlQ29uZmlnRnVuYykge1xuICAgIHNhdmVDb25maWdGdW5jID0gYXN5bmMgKG5ld0NvbmZpZzogTG92ZWxhY2VDb25maWcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHNhdmVDb25maWcoaGFzcyEsIG51bGwsIG5ld0NvbmZpZyk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLmFkZF9lbnRpdGllcy5zYXZpbmdfZmFpbGVkXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBpZiAobG92ZWxhY2VDb25maWcudmlld3MubGVuZ3RoID09PSAxKSB7XG4gICAgc2hvd1N1Z2dlc3RDYXJkRGlhbG9nKGVsZW1lbnQsIHtcbiAgICAgIGxvdmVsYWNlQ29uZmlnOiBsb3ZlbGFjZUNvbmZpZyEsXG4gICAgICBzYXZlQ29uZmlnOiBzYXZlQ29uZmlnRnVuYyxcbiAgICAgIHBhdGg6IFswXSxcbiAgICAgIGVudGl0aWVzLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBzaG93U2VsZWN0Vmlld0RpYWxvZyhlbGVtZW50LCB7XG4gICAgbG92ZWxhY2VDb25maWcsXG4gICAgdmlld1NlbGVjdGVkQ2FsbGJhY2s6ICh2aWV3KSA9PiB7XG4gICAgICBzaG93U3VnZ2VzdENhcmREaWFsb2coZWxlbWVudCwge1xuICAgICAgICBsb3ZlbGFjZUNvbmZpZzogbG92ZWxhY2VDb25maWchLFxuICAgICAgICBzYXZlQ29uZmlnOiBzYXZlQ29uZmlnRnVuYyxcbiAgICAgICAgcGF0aDogW3ZpZXddLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZywgTG92ZWxhY2VDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3RDYXJkRGlhbG9nUGFyYW1zIHtcbiAgbG92ZWxhY2VDb25maWc/OiBMb3ZlbGFjZUNvbmZpZztcbiAgc2F2ZUNvbmZpZz86IChjb25maWc6IExvdmVsYWNlQ29uZmlnKSA9PiB2b2lkO1xuICBwYXRoPzogW251bWJlcl07XG4gIGVudGl0aWVzOiBzdHJpbmdbXTsgLy8gV2UgY2FuIHBhc3MgZW50aXR5IGlkJ3MgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb25maWcgd2hlbiBhIGNhcmQgaXMgcGlja2VkXG4gIGNhcmRDb25maWc/OiBMb3ZlbGFjZUNhcmRDb25maWdbXTsgLy8gV2UgY2FuIHBhc3MgYSBzdWdnZXN0ZWQgY29uZmlnXG59XG5cbmNvbnN0IGltcG9ydHN1Z2dlc3RDYXJkRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLWRpYWxvZy1zdWdnZXN0LWNhcmRcIiAqLyBcIi4vaHVpLWRpYWxvZy1zdWdnZXN0LWNhcmRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc2hvd1N1Z2dlc3RDYXJkRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc3VnZ2VzdENhcmREaWFsb2dQYXJhbXM6IFN1Z2dlc3RDYXJkRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJodWktZGlhbG9nLXN1Z2dlc3QtY2FyZFwiLFxuICAgIGRpYWxvZ0ltcG9ydDogaW1wb3J0c3VnZ2VzdENhcmREaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBzdWdnZXN0Q2FyZERpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFZpZXdEaWFsb2dQYXJhbXMge1xuICBsb3ZlbGFjZUNvbmZpZzogTG92ZWxhY2VDb25maWc7XG4gIHZpZXdTZWxlY3RlZENhbGxiYWNrOiAodmlldzogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgc2hvd1NlbGVjdFZpZXdEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzZWxlY3RWaWV3RGlhbG9nUGFyYW1zOiBTZWxlY3RWaWV3RGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJodWktZGlhbG9nLXNlbGVjdC12aWV3XCIsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1kaWFsb2ctc2VsZWN0LXZpZXdcIiAqLyBcIi4vaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiXG4gICAgICApLFxuICAgIGRpYWxvZ1BhcmFtczogc2VsZWN0Vmlld0RpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBdkJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsRkE7QUFDQTtBQW1GQTs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhHQTtBQUNBO0FBaUdBOzs7Ozs7Ozs7Ozs7QUN4R0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBcUJBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVlBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQVVBOzs7Ozs7Ozs7Ozs7QUMxREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBMEJBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFNQTtBQUVBO0FBR0E7QUFNQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtLQTtBQUVBO0FBREE7QUFJQTtBQUtBO0FBREE7QUFLQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFJQTtBQURBO0FBSUE7QUFLQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWdCQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7QUM5T0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUVBO0FBREE7QUFJQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUlBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFEQTtBQUlBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUlBO0FBREE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ3RQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDQSw2Z0JBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBSEE7QUFvQkE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUFBO0FBSUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLHd1QkFFQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7O0FBRUE7QUFBQTtBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUVBOzs7OztBQUVBOzs7O0FBQUE7Ozs7O0FBRUE7Ozs7QUFBQTs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBR0E7O0FBRUE7OztBQUxBOzs7O0FBa0JBOztBQUVBOztBQUVBOztBQUdBOztBQUtBO0FBR0E7QUFJQTtBQUdBO0FBSUE7QUFJQTs7QUFHQTs7QUFJQTtBQVBBOzs7OztBQWVBOztBQUdBO0FBQ0E7OztBQUdBOzs7QUFHQTs7O0FBSUE7OztBQUdBOzs7QUFQQTs7QUFWQTs7QUEyQkE7O0FBR0E7QUFDQTs7O0FBSkE7QUFhQTs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFPQTs7Ozs7QUFPQTtBQUNBOzs7QUFHQTs7O0FBS0E7QUFFQTtBQUZBOzs7O0FBOUJBO0FBMENBOztBQUdBO0FBRUE7QUFDQTs7QUFJQTs7QUFHQTs7QUFIQTtBQUNBOztBQVVBOzs7QUFHQTtBQUdBOztBQUVBOztBQUlBOztBQUdBOztBQUhBO0FBOUJBO0FBeUNBO0FBSUE7QUFDQTs7QUFJQTs7QUFHQTs7Ozs7QUFIQTtBQVRBO0FBcUJBO0FBRUE7QUFDQTs7QUFJQTs7QUFHQTs7QUFIQTtBQVBBOztBQWpFQTs7O0FBcEpBO0FBOE9BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUtBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1RkE7OztBQXZmQTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFUQTtBQVdBOzs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBLGlsREFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBSUE7QUFDQTtBQUNBLG1tQkFFQTtBQUVBO0FBTkE7QUFRQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
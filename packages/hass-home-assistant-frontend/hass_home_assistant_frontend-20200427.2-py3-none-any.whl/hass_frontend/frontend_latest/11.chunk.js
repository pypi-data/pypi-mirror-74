(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[11],{

/***/ "./src/common/const.ts":
/*!*****************************!*\
  !*** ./src/common/const.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_TOGGLE", function() { return DOMAINS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_C", function() { return UNIT_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_F", function() { return UNIT_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_ENTITY_ID", function() { return DEFAULT_VIEW_ENTITY_ID; });
/** Constants to be used in the frontend. */
// Constants should be alphabetically sorted by name.
// Arrays with values should be alphabetically sorted if order doesn't matter.
// Each constant should have a description what it is supposed to be used for.

/** Icon to use when no icon specified for domain. */
const DEFAULT_DOMAIN_ICON = "hass:bookmark";
/** Domains that have a state card. */

const DOMAINS_WITH_CARD = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
/** Domains with separate more info dialog. */

const DOMAINS_WITH_MORE_INFO = ["alarm_control_panel", "automation", "camera", "climate", "configurator", "counter", "cover", "fan", "group", "history_graph", "input_datetime", "light", "lock", "media_player", "person", "script", "sun", "timer", "updater", "vacuum", "water_heater", "weather"];
/** Domains that show no more info dialog. */

const DOMAINS_HIDE_MORE_INFO = ["input_number", "input_select", "input_text", "scene", "weblink"];
/** Domains that should have the history hidden in the more info dialog. */

const DOMAINS_MORE_INFO_NO_HISTORY = ["camera", "configurator", "history_graph", "scene"];
/** States that we consider "off". */

const STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Lovelace. */

const DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
/** Temperature units. */

const UNIT_C = "°C";
const UNIT_F = "°F";
/** Entity ID of the default view. */

const DEFAULT_VIEW_ENTITY_ID = "group.default_view";

/***/ }),

/***/ "./src/common/entity/binary_sensor_icon.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/binary_sensor_icon.ts ***!
  \*************************************************/
/*! exports provided: binarySensorIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySensorIcon", function() { return binarySensorIcon; });
/** Return an icon representing a binary sensor state. */
const binarySensorIcon = state => {
  const activated = state.state && state.state === "off";

  switch (state.attributes.device_class) {
    case "battery":
      return activated ? "hass:battery" : "hass:battery-outline";

    case "cold":
      return activated ? "hass:thermometer" : "hass:snowflake";

    case "connectivity":
      return activated ? "hass:server-network-off" : "hass:server-network";

    case "door":
      return activated ? "hass:door-closed" : "hass:door-open";

    case "garage_door":
      return activated ? "hass:garage" : "hass:garage-open";

    case "gas":
    case "power":
    case "problem":
    case "safety":
    case "smoke":
      return activated ? "hass:shield-check" : "hass:alert";

    case "heat":
      return activated ? "hass:thermometer" : "hass:fire";

    case "light":
      return activated ? "hass:brightness-5" : "hass:brightness-7";

    case "lock":
      return activated ? "hass:lock" : "hass:lock-open";

    case "moisture":
      return activated ? "hass:water-off" : "hass:water";

    case "motion":
      return activated ? "hass:walk" : "hass:run";

    case "occupancy":
      return activated ? "hass:home-outline" : "hass:home";

    case "opening":
      return activated ? "hass:square" : "hass:square-outline";

    case "plug":
      return activated ? "hass:power-plug-off" : "hass:power-plug";

    case "presence":
      return activated ? "hass:home-outline" : "hass:home";

    case "sound":
      return activated ? "hass:music-note-off" : "hass:music-note";

    case "vibration":
      return activated ? "hass:crop-portrait" : "hass:vibrate";

    case "window":
      return activated ? "hass:window-closed" : "hass:window-open";

    default:
      return activated ? "hass:radiobox-blank" : "hass:checkbox-marked-circle";
  }
};

/***/ }),

/***/ "./src/common/entity/cover_icon.ts":
/*!*****************************************!*\
  !*** ./src/common/entity/cover_icon.ts ***!
  \*****************************************/
/*! exports provided: coverIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coverIcon", function() { return coverIcon; });
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing a cover state. */

const coverIcon = state => {
  const open = state.state !== "closed";

  switch (state.attributes.device_class) {
    case "garage":
      switch (state.state) {
        case "opening":
          return "hass:arrow-up-box";

        case "closing":
          return "hass:arrow-down-box";

        case "closed":
          return "hass:garage";

        default:
          return "hass:garage-open";
      }

    case "gate":
      switch (state.state) {
        case "opening":
        case "closing":
          return "hass:gate-arrow-right";

        case "closed":
          return "hass:gate";

        default:
          return "hass:gate-open";
      }

    case "door":
      return open ? "hass:door-open" : "hass:door-closed";

    case "damper":
      return open ? "hass:circle" : "hass:circle-slice-8";

    case "shutter":
      switch (state.state) {
        case "opening":
          return "hass:arrow-up-box";

        case "closing":
          return "hass:arrow-down-box";

        case "closed":
          return "hass:window-shutter";

        default:
          return "hass:window-shutter-open";
      }

    case "blind":
    case "curtain":
      switch (state.state) {
        case "opening":
          return "hass:arrow-up-box";

        case "closing":
          return "hass:arrow-down-box";

        case "closed":
          return "hass:blinds";

        default:
          return "hass:blinds-open";
      }

    case "window":
      switch (state.state) {
        case "opening":
          return "hass:arrow-up-box";

        case "closing":
          return "hass:arrow-down-box";

        case "closed":
          return "hass:window-closed";

        default:
          return "hass:window-open";
      }

    default:
      return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["domainIcon"])("cover", state.state);
  }
};

/***/ }),

/***/ "./src/common/entity/domain_icon.ts":
/*!******************************************!*\
  !*** ./src/common/entity/domain_icon.ts ***!
  \******************************************/
/*! exports provided: domainIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainIcon", function() { return domainIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/**
 * Return the icon to be used for a domain.
 *
 * Optionally pass in a state to influence the domain icon.
 */

const fixedIcons = {
  alert: "hass:alert",
  alexa: "hass:amazon-alexa",
  automation: "hass:robot",
  calendar: "hass:calendar",
  camera: "hass:video",
  climate: "hass:thermostat",
  configurator: "hass:settings",
  conversation: "hass:text-to-speech",
  counter: "hass:counter",
  device_tracker: "hass:account",
  fan: "hass:fan",
  google_assistant: "hass:google-assistant",
  group: "hass:google-circles-communities",
  history_graph: "hass:chart-line",
  homeassistant: "hass:home-assistant",
  homekit: "hass:home-automation",
  image_processing: "hass:image-filter-frames",
  input_boolean: "hass:toggle-switch-outline",
  input_datetime: "hass:calendar-clock",
  input_number: "hass:ray-vertex",
  input_select: "hass:format-list-bulleted",
  input_text: "hass:textbox",
  light: "hass:lightbulb",
  mailbox: "hass:mailbox",
  notify: "hass:comment-alert",
  persistent_notification: "hass:bell",
  person: "hass:account",
  plant: "hass:flower",
  proximity: "hass:apple-safari",
  remote: "hass:remote",
  scene: "hass:palette",
  script: "hass:script-text",
  sensor: "hass:eye",
  simple_alarm: "hass:bell",
  sun: "hass:white-balance-sunny",
  switch: "hass:flash",
  timer: "hass:timer",
  updater: "hass:cloud-upload",
  vacuum: "hass:robot-vacuum",
  water_heater: "hass:thermometer",
  weather: "hass:weather-cloudy",
  weblink: "hass:open-in-new",
  zone: "hass:map-marker-radius"
};
const domainIcon = (domain, state) => {
  if (domain in fixedIcons) {
    return fixedIcons[domain];
  }

  switch (domain) {
    case "alarm_control_panel":
      switch (state) {
        case "armed_home":
          return "hass:bell-plus";

        case "armed_night":
          return "hass:bell-sleep";

        case "disarmed":
          return "hass:bell-outline";

        case "triggered":
          return "hass:bell-ring";

        default:
          return "hass:bell";
      }

    case "binary_sensor":
      return state && state === "off" ? "hass:radiobox-blank" : "hass:checkbox-marked-circle";

    case "cover":
      switch (state) {
        case "opening":
          return "hass:arrow-up-box";

        case "closing":
          return "hass:arrow-down-box";

        case "closed":
          return "hass:window-closed";

        default:
          return "hass:window-open";
      }

    case "lock":
      return state && state === "unlocked" ? "hass:lock-open" : "hass:lock";

    case "media_player":
      return state && state === "playing" ? "hass:cast-connected" : "hass:cast";

    case "zwave":
      switch (state) {
        case "dead":
          return "hass:emoticon-dead";

        case "sleeping":
          return "hass:sleep";

        case "initializing":
          return "hass:timer-sand";

        default:
          return "hass:z-wave";
      }

    default:
      // eslint-disable-next-line
      console.warn("Unable to find icon for domain " + domain + " (" + state + ")");
      return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
  }
};

/***/ }),

/***/ "./src/common/entity/input_dateteime_icon.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/input_dateteime_icon.ts ***!
  \***************************************************/
/*! exports provided: inputDateTimeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputDateTimeIcon", function() { return inputDateTimeIcon; });
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing an input datetime state. */

const inputDateTimeIcon = state => {
  if (!state.attributes.has_date) {
    return "hass:clock";
  }

  if (!state.attributes.has_time) {
    return "hass:calendar";
  }

  return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["domainIcon"])("input_datetime");
};

/***/ }),

/***/ "./src/common/entity/sensor_icon.ts":
/*!******************************************!*\
  !*** ./src/common/entity/sensor_icon.ts ***!
  \******************************************/
/*! exports provided: sensorIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sensorIcon", function() { return sensorIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing a sensor state. */


const fixedDeviceClassIcons = {
  humidity: "hass:water-percent",
  illuminance: "hass:brightness-5",
  temperature: "hass:thermometer",
  pressure: "hass:gauge",
  power: "hass:flash",
  signal_strength: "hass:wifi"
};
const sensorIcon = state => {
  const dclass = state.attributes.device_class;

  if (dclass && dclass in fixedDeviceClassIcons) {
    return fixedDeviceClassIcons[dclass];
  }

  if (dclass === "battery") {
    const battery = Number(state.state);

    if (isNaN(battery)) {
      return "hass:battery-unknown";
    }

    const batteryRound = Math.round(battery / 10) * 10;

    if (batteryRound >= 100) {
      return "hass:battery";
    }

    if (batteryRound <= 0) {
      return "hass:battery-alert";
    } // Will return one of the following icons: (listed so extractor picks up)
    // hass:battery-10
    // hass:battery-20
    // hass:battery-30
    // hass:battery-40
    // hass:battery-50
    // hass:battery-60
    // hass:battery-70
    // hass:battery-80
    // hass:battery-90
    // We obscure 'hass' in iconname so this name does not get picked up


    return `${"hass"}:battery-${batteryRound}`;
  }

  const unit = state.attributes.unit_of_measurement;

  if (unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_C"] || unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_F"]) {
    return "hass:thermometer";
  }

  return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_1__["domainIcon"])("sensor");
};

/***/ }),

/***/ "./src/common/entity/state_icon.ts":
/*!*****************************************!*\
  !*** ./src/common/entity/state_icon.ts ***!
  \*****************************************/
/*! exports provided: stateIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateIcon", function() { return stateIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/* harmony import */ var _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary_sensor_icon */ "./src/common/entity/binary_sensor_icon.ts");
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _cover_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover_icon */ "./src/common/entity/cover_icon.ts");
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input_dateteime_icon */ "./src/common/entity/input_dateteime_icon.ts");
/* harmony import */ var _sensor_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sensor_icon */ "./src/common/entity/sensor_icon.ts");
/** Return an icon representing a state. */







const domainIcons = {
  binary_sensor: _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_1__["binarySensorIcon"],
  cover: _cover_icon__WEBPACK_IMPORTED_MODULE_3__["coverIcon"],
  sensor: _sensor_icon__WEBPACK_IMPORTED_MODULE_6__["sensorIcon"],
  input_datetime: _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_5__["inputDateTimeIcon"]
};
const stateIcon = state => {
  if (!state) {
    return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
  }

  if (state.attributes.icon) {
    return state.attributes.icon;
  }

  const domain = Object(_compute_domain__WEBPACK_IMPORTED_MODULE_2__["computeDomain"])(state.entity_id);

  if (domain in domainIcons) {
    return domainIcons[domain](state);
  }

  return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_4__["domainIcon"])(domain, state.state);
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2JpbmFyeV9zZW5zb3JfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb3Zlcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2lucHV0X2RhdGV0ZWltZV9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3NlbnNvcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2ljb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9IFwiaGFzczpib29rbWFya1wiO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICBcImNsaW1hdGVcIixcbiAgXCJjb3ZlclwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJ0aW1lclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHdpdGggc2VwYXJhdGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfTU9SRV9JTkZPID0gW1xuICBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG4gIFwiY2FtZXJhXCIsXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImNvdW50ZXJcIixcbiAgXCJjb3ZlclwiLFxuICBcImZhblwiLFxuICBcImdyb3VwXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcImlucHV0X2RhdGV0aW1lXCIsXG4gIFwibGlnaHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwicGVyc29uXCIsXG4gIFwic2NyaXB0XCIsXG4gIFwic3VuXCIsXG4gIFwidGltZXJcIixcbiAgXCJ1cGRhdGVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VhdGhlclwiLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG93IG5vIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19ISURFX01PUkVfSU5GTyA9IFtcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwic2NlbmVcIixcbiAgXCJ3ZWJsaW5rXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3VsZCBoYXZlIHRoZSBoaXN0b3J5IGhpZGRlbiBpbiB0aGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZID0gW1xuICBcImNhbWVyYVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJzY2VuZVwiLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcImNsb3NlZFwiLCBcImxvY2tlZFwiLCBcIm9mZlwiXTtcblxuLyoqIERvbWFpbnMgd2hlcmUgd2UgYWxsb3cgdG9nZ2xlIGluIExvdmVsYWNlLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfVE9HR0xFID0gbmV3IFNldChbXG4gIFwiZmFuXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImxpZ2h0XCIsXG4gIFwic3dpdGNoXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG5dKTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9IFwiwrBDXCI7XG5leHBvcnQgY29uc3QgVU5JVF9GID0gXCLCsEZcIjtcblxuLyoqIEVudGl0eSBJRCBvZiB0aGUgZGVmYXVsdCB2aWV3LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIGJpbmFyeSBzZW5zb3Igc3RhdGUuICovXG5cbmV4cG9ydCBjb25zdCBiaW5hcnlTZW5zb3JJY29uID0gKHN0YXRlOiBIYXNzRW50aXR5KSA9PiB7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IHN0YXRlLnN0YXRlICYmIHN0YXRlLnN0YXRlID09PSBcIm9mZlwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImJhdHRlcnlcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6YmF0dGVyeVwiIDogXCJoYXNzOmJhdHRlcnktb3V0bGluZVwiO1xuICAgIGNhc2UgXCJjb2xkXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnRoZXJtb21ldGVyXCIgOiBcImhhc3M6c25vd2ZsYWtlXCI7XG4gICAgY2FzZSBcImNvbm5lY3Rpdml0eVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpzZXJ2ZXItbmV0d29yay1vZmZcIiA6IFwiaGFzczpzZXJ2ZXItbmV0d29ya1wiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmRvb3ItY2xvc2VkXCIgOiBcImhhc3M6ZG9vci1vcGVuXCI7XG4gICAgY2FzZSBcImdhcmFnZV9kb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmdhcmFnZVwiIDogXCJoYXNzOmdhcmFnZS1vcGVuXCI7XG4gICAgY2FzZSBcImdhc1wiOlxuICAgIGNhc2UgXCJwb3dlclwiOlxuICAgIGNhc2UgXCJwcm9ibGVtXCI6XG4gICAgY2FzZSBcInNhZmV0eVwiOlxuICAgIGNhc2UgXCJzbW9rZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpzaGllbGQtY2hlY2tcIiA6IFwiaGFzczphbGVydFwiO1xuICAgIGNhc2UgXCJoZWF0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnRoZXJtb21ldGVyXCIgOiBcImhhc3M6ZmlyZVwiO1xuICAgIGNhc2UgXCJsaWdodFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpicmlnaHRuZXNzLTVcIiA6IFwiaGFzczpicmlnaHRuZXNzLTdcIjtcbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpsb2NrXCIgOiBcImhhc3M6bG9jay1vcGVuXCI7XG4gICAgY2FzZSBcIm1vaXN0dXJlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOndhdGVyLW9mZlwiIDogXCJoYXNzOndhdGVyXCI7XG4gICAgY2FzZSBcIm1vdGlvblwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczp3YWxrXCIgOiBcImhhc3M6cnVuXCI7XG4gICAgY2FzZSBcIm9jY3VwYW5jeVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpob21lLW91dGxpbmVcIiA6IFwiaGFzczpob21lXCI7XG4gICAgY2FzZSBcIm9wZW5pbmdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6c3F1YXJlXCIgOiBcImhhc3M6c3F1YXJlLW91dGxpbmVcIjtcbiAgICBjYXNlIFwicGx1Z1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpwb3dlci1wbHVnLW9mZlwiIDogXCJoYXNzOnBvd2VyLXBsdWdcIjtcbiAgICBjYXNlIFwicHJlc2VuY2VcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6aG9tZS1vdXRsaW5lXCIgOiBcImhhc3M6aG9tZVwiO1xuICAgIGNhc2UgXCJzb3VuZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczptdXNpYy1ub3RlLW9mZlwiIDogXCJoYXNzOm11c2ljLW5vdGVcIjtcbiAgICBjYXNlIFwidmlicmF0aW9uXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmNyb3AtcG9ydHJhaXRcIiA6IFwiaGFzczp2aWJyYXRlXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczp3aW5kb3ctY2xvc2VkXCIgOiBcImhhc3M6d2luZG93LW9wZW5cIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpyYWRpb2JveC1ibGFua1wiIDogXCJoYXNzOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtcbiAgfVxufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBjb3ZlciBzdGF0ZS4gKi9cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuZXhwb3J0IGNvbnN0IGNvdmVySWNvbiA9IChzdGF0ZTogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG9wZW4gPSBzdGF0ZS5zdGF0ZSAhPT0gXCJjbG9zZWRcIjtcblxuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImdhcmFnZVwiOlxuICAgICAgc3dpdGNoIChzdGF0ZS5zdGF0ZSkge1xuICAgICAgICBjYXNlIFwib3BlbmluZ1wiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YXJyb3ctdXAtYm94XCI7XG4gICAgICAgIGNhc2UgXCJjbG9zaW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczphcnJvdy1kb3duLWJveFwiO1xuICAgICAgICBjYXNlIFwiY2xvc2VkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpnYXJhZ2VcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmdhcmFnZS1vcGVuXCI7XG4gICAgICB9XG4gICAgY2FzZSBcImdhdGVcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUuc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcIm9wZW5pbmdcIjpcbiAgICAgICAgY2FzZSBcImNsb3NpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmdhdGUtYXJyb3ctcmlnaHRcIjtcbiAgICAgICAgY2FzZSBcImNsb3NlZFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6Z2F0ZVwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcImhhc3M6Z2F0ZS1vcGVuXCI7XG4gICAgICB9XG4gICAgY2FzZSBcImRvb3JcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJoYXNzOmRvb3Itb3BlblwiIDogXCJoYXNzOmRvb3ItY2xvc2VkXCI7XG4gICAgY2FzZSBcImRhbXBlclwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcImhhc3M6Y2lyY2xlXCIgOiBcImhhc3M6Y2lyY2xlLXNsaWNlLThcIjtcbiAgICBjYXNlIFwic2h1dHRlclwiOlxuICAgICAgc3dpdGNoIChzdGF0ZS5zdGF0ZSkge1xuICAgICAgICBjYXNlIFwib3BlbmluZ1wiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YXJyb3ctdXAtYm94XCI7XG4gICAgICAgIGNhc2UgXCJjbG9zaW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczphcnJvdy1kb3duLWJveFwiO1xuICAgICAgICBjYXNlIFwiY2xvc2VkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczp3aW5kb3ctc2h1dHRlclwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcImhhc3M6d2luZG93LXNodXR0ZXItb3BlblwiO1xuICAgICAgfVxuICAgIGNhc2UgXCJibGluZFwiOlxuICAgIGNhc2UgXCJjdXJ0YWluXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJvcGVuaW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczphcnJvdy11cC1ib3hcIjtcbiAgICAgICAgY2FzZSBcImNsb3NpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmFycm93LWRvd24tYm94XCI7XG4gICAgICAgIGNhc2UgXCJjbG9zZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJsaW5kc1wiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmxpbmRzLW9wZW5cIjtcbiAgICAgIH1cbiAgICBjYXNlIFwid2luZG93XCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJvcGVuaW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczphcnJvdy11cC1ib3hcIjtcbiAgICAgICAgY2FzZSBcImNsb3NpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmFycm93LWRvd24tYm94XCI7XG4gICAgICAgIGNhc2UgXCJjbG9zZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOndpbmRvdy1jbG9zZWRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOndpbmRvdy1vcGVuXCI7XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkb21haW5JY29uKFwiY292ZXJcIiwgc3RhdGUuc3RhdGUpO1xuICB9XG59O1xuIiwiLyoqXG4gKiBSZXR1cm4gdGhlIGljb24gdG8gYmUgdXNlZCBmb3IgYSBkb21haW4uXG4gKlxuICogT3B0aW9uYWxseSBwYXNzIGluIGEgc3RhdGUgdG8gaW5mbHVlbmNlIHRoZSBkb21haW4gaWNvbi5cbiAqL1xuaW1wb3J0IHsgREVGQVVMVF9ET01BSU5fSUNPTiB9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5jb25zdCBmaXhlZEljb25zID0ge1xuICBhbGVydDogXCJoYXNzOmFsZXJ0XCIsXG4gIGFsZXhhOiBcImhhc3M6YW1hem9uLWFsZXhhXCIsXG4gIGF1dG9tYXRpb246IFwiaGFzczpyb2JvdFwiLFxuICBjYWxlbmRhcjogXCJoYXNzOmNhbGVuZGFyXCIsXG4gIGNhbWVyYTogXCJoYXNzOnZpZGVvXCIsXG4gIGNsaW1hdGU6IFwiaGFzczp0aGVybW9zdGF0XCIsXG4gIGNvbmZpZ3VyYXRvcjogXCJoYXNzOnNldHRpbmdzXCIsXG4gIGNvbnZlcnNhdGlvbjogXCJoYXNzOnRleHQtdG8tc3BlZWNoXCIsXG4gIGNvdW50ZXI6IFwiaGFzczpjb3VudGVyXCIsXG4gIGRldmljZV90cmFja2VyOiBcImhhc3M6YWNjb3VudFwiLFxuICBmYW46IFwiaGFzczpmYW5cIixcbiAgZ29vZ2xlX2Fzc2lzdGFudDogXCJoYXNzOmdvb2dsZS1hc3Npc3RhbnRcIixcbiAgZ3JvdXA6IFwiaGFzczpnb29nbGUtY2lyY2xlcy1jb21tdW5pdGllc1wiLFxuICBoaXN0b3J5X2dyYXBoOiBcImhhc3M6Y2hhcnQtbGluZVwiLFxuICBob21lYXNzaXN0YW50OiBcImhhc3M6aG9tZS1hc3Npc3RhbnRcIixcbiAgaG9tZWtpdDogXCJoYXNzOmhvbWUtYXV0b21hdGlvblwiLFxuICBpbWFnZV9wcm9jZXNzaW5nOiBcImhhc3M6aW1hZ2UtZmlsdGVyLWZyYW1lc1wiLFxuICBpbnB1dF9ib29sZWFuOiBcImhhc3M6dG9nZ2xlLXN3aXRjaC1vdXRsaW5lXCIsXG4gIGlucHV0X2RhdGV0aW1lOiBcImhhc3M6Y2FsZW5kYXItY2xvY2tcIixcbiAgaW5wdXRfbnVtYmVyOiBcImhhc3M6cmF5LXZlcnRleFwiLFxuICBpbnB1dF9zZWxlY3Q6IFwiaGFzczpmb3JtYXQtbGlzdC1idWxsZXRlZFwiLFxuICBpbnB1dF90ZXh0OiBcImhhc3M6dGV4dGJveFwiLFxuICBsaWdodDogXCJoYXNzOmxpZ2h0YnVsYlwiLFxuICBtYWlsYm94OiBcImhhc3M6bWFpbGJveFwiLFxuICBub3RpZnk6IFwiaGFzczpjb21tZW50LWFsZXJ0XCIsXG4gIHBlcnNpc3RlbnRfbm90aWZpY2F0aW9uOiBcImhhc3M6YmVsbFwiLFxuICBwZXJzb246IFwiaGFzczphY2NvdW50XCIsXG4gIHBsYW50OiBcImhhc3M6Zmxvd2VyXCIsXG4gIHByb3hpbWl0eTogXCJoYXNzOmFwcGxlLXNhZmFyaVwiLFxuICByZW1vdGU6IFwiaGFzczpyZW1vdGVcIixcbiAgc2NlbmU6IFwiaGFzczpwYWxldHRlXCIsXG4gIHNjcmlwdDogXCJoYXNzOnNjcmlwdC10ZXh0XCIsXG4gIHNlbnNvcjogXCJoYXNzOmV5ZVwiLFxuICBzaW1wbGVfYWxhcm06IFwiaGFzczpiZWxsXCIsXG4gIHN1bjogXCJoYXNzOndoaXRlLWJhbGFuY2Utc3VubnlcIixcbiAgc3dpdGNoOiBcImhhc3M6Zmxhc2hcIixcbiAgdGltZXI6IFwiaGFzczp0aW1lclwiLFxuICB1cGRhdGVyOiBcImhhc3M6Y2xvdWQtdXBsb2FkXCIsXG4gIHZhY3V1bTogXCJoYXNzOnJvYm90LXZhY3V1bVwiLFxuICB3YXRlcl9oZWF0ZXI6IFwiaGFzczp0aGVybW9tZXRlclwiLFxuICB3ZWF0aGVyOiBcImhhc3M6d2VhdGhlci1jbG91ZHlcIixcbiAgd2VibGluazogXCJoYXNzOm9wZW4taW4tbmV3XCIsXG4gIHpvbmU6IFwiaGFzczptYXAtbWFya2VyLXJhZGl1c1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGRvbWFpbkljb24gPSAoZG9tYWluOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKGRvbWFpbiBpbiBmaXhlZEljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkSWNvbnNbZG9tYWluXTtcbiAgfVxuXG4gIHN3aXRjaCAoZG9tYWluKSB7XG4gICAgY2FzZSBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcImFybWVkX2hvbWVcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGwtcGx1c1wiO1xuICAgICAgICBjYXNlIFwiYXJtZWRfbmlnaHRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGwtc2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImRpc2FybWVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsLW91dGxpbmVcIjtcbiAgICAgICAgY2FzZSBcInRyaWdnZXJlZFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmVsbC1yaW5nXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsXCI7XG4gICAgICB9XG5cbiAgICBjYXNlIFwiYmluYXJ5X3NlbnNvclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcIm9mZlwiXG4gICAgICAgID8gXCJoYXNzOnJhZGlvYm94LWJsYW5rXCJcbiAgICAgICAgOiBcImhhc3M6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuXG4gICAgY2FzZSBcImNvdmVyXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJvcGVuaW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczphcnJvdy11cC1ib3hcIjtcbiAgICAgICAgY2FzZSBcImNsb3NpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmFycm93LWRvd24tYm94XCI7XG4gICAgICAgIGNhc2UgXCJjbG9zZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOndpbmRvdy1jbG9zZWRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOndpbmRvdy1vcGVuXCI7XG4gICAgICB9XG5cbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcInVubG9ja2VkXCIgPyBcImhhc3M6bG9jay1vcGVuXCIgOiBcImhhc3M6bG9ja1wiO1xuXG4gICAgY2FzZSBcIm1lZGlhX3BsYXllclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcInBsYXlpbmdcIiA/IFwiaGFzczpjYXN0LWNvbm5lY3RlZFwiIDogXCJoYXNzOmNhc3RcIjtcblxuICAgIGNhc2UgXCJ6d2F2ZVwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiZGVhZFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6ZW1vdGljb24tZGVhZFwiO1xuICAgICAgICBjYXNlIFwic2xlZXBpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnNsZWVwXCI7XG4gICAgICAgIGNhc2UgXCJpbml0aWFsaXppbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnRpbWVyLXNhbmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnotd2F2ZVwiO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIlVuYWJsZSB0byBmaW5kIGljb24gZm9yIGRvbWFpbiBcIiArIGRvbWFpbiArIFwiIChcIiArIHN0YXRlICsgXCIpXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYW4gaW5wdXQgZGF0ZXRpbWUgc3RhdGUuICovXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBpbnB1dERhdGVUaW1lSWNvbiA9IChzdGF0ZTogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgIHJldHVybiBcImhhc3M6Y2xvY2tcIjtcbiAgfVxuICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICByZXR1cm4gXCJoYXNzOmNhbGVuZGFyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJpbnB1dF9kYXRldGltZVwiKTtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgc2Vuc29yIHN0YXRlLiAqL1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IFVOSVRfQywgVU5JVF9GIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuY29uc3QgZml4ZWREZXZpY2VDbGFzc0ljb25zID0ge1xuICBodW1pZGl0eTogXCJoYXNzOndhdGVyLXBlcmNlbnRcIixcbiAgaWxsdW1pbmFuY2U6IFwiaGFzczpicmlnaHRuZXNzLTVcIixcbiAgdGVtcGVyYXR1cmU6IFwiaGFzczp0aGVybW9tZXRlclwiLFxuICBwcmVzc3VyZTogXCJoYXNzOmdhdWdlXCIsXG4gIHBvd2VyOiBcImhhc3M6Zmxhc2hcIixcbiAgc2lnbmFsX3N0cmVuZ3RoOiBcImhhc3M6d2lmaVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlbnNvckljb24gPSAoc3RhdGU6IEhhc3NFbnRpdHkpID0+IHtcbiAgY29uc3QgZGNsYXNzID0gc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3M7XG5cbiAgaWYgKGRjbGFzcyAmJiBkY2xhc3MgaW4gZml4ZWREZXZpY2VDbGFzc0ljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkRGV2aWNlQ2xhc3NJY29uc1tkY2xhc3NdO1xuICB9XG4gIGlmIChkY2xhc3MgPT09IFwiYmF0dGVyeVwiKSB7XG4gICAgY29uc3QgYmF0dGVyeSA9IE51bWJlcihzdGF0ZS5zdGF0ZSk7XG4gICAgaWYgKGlzTmFOKGJhdHRlcnkpKSB7XG4gICAgICByZXR1cm4gXCJoYXNzOmJhdHRlcnktdW5rbm93blwiO1xuICAgIH1cbiAgICBjb25zdCBiYXR0ZXJ5Um91bmQgPSBNYXRoLnJvdW5kKGJhdHRlcnkgLyAxMCkgKiAxMDtcbiAgICBpZiAoYmF0dGVyeVJvdW5kID49IDEwMCkge1xuICAgICAgcmV0dXJuIFwiaGFzczpiYXR0ZXJ5XCI7XG4gICAgfVxuICAgIGlmIChiYXR0ZXJ5Um91bmQgPD0gMCkge1xuICAgICAgcmV0dXJuIFwiaGFzczpiYXR0ZXJ5LWFsZXJ0XCI7XG4gICAgfVxuICAgIC8vIFdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGljb25zOiAobGlzdGVkIHNvIGV4dHJhY3RvciBwaWNrcyB1cClcbiAgICAvLyBoYXNzOmJhdHRlcnktMTBcbiAgICAvLyBoYXNzOmJhdHRlcnktMjBcbiAgICAvLyBoYXNzOmJhdHRlcnktMzBcbiAgICAvLyBoYXNzOmJhdHRlcnktNDBcbiAgICAvLyBoYXNzOmJhdHRlcnktNTBcbiAgICAvLyBoYXNzOmJhdHRlcnktNjBcbiAgICAvLyBoYXNzOmJhdHRlcnktNzBcbiAgICAvLyBoYXNzOmJhdHRlcnktODBcbiAgICAvLyBoYXNzOmJhdHRlcnktOTBcbiAgICAvLyBXZSBvYnNjdXJlICdoYXNzJyBpbiBpY29ubmFtZSBzbyB0aGlzIG5hbWUgZG9lcyBub3QgZ2V0IHBpY2tlZCB1cFxuICAgIHJldHVybiBgJHtcImhhc3NcIn06YmF0dGVyeS0ke2JhdHRlcnlSb3VuZH1gO1xuICB9XG5cbiAgY29uc3QgdW5pdCA9IHN0YXRlLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgaWYgKHVuaXQgPT09IFVOSVRfQyB8fCB1bml0ID09PSBVTklUX0YpIHtcbiAgICByZXR1cm4gXCJoYXNzOnRoZXJtb21ldGVyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJzZW5zb3JcIik7XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIHN0YXRlLiAqL1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IGJpbmFyeVNlbnNvckljb24gfSBmcm9tIFwiLi9iaW5hcnlfc2Vuc29yX2ljb25cIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY292ZXJJY29uIH0gZnJvbSBcIi4vY292ZXJfaWNvblwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBpbnB1dERhdGVUaW1lSWNvbiB9IGZyb20gXCIuL2lucHV0X2RhdGV0ZWltZV9pY29uXCI7XG5pbXBvcnQgeyBzZW5zb3JJY29uIH0gZnJvbSBcIi4vc2Vuc29yX2ljb25cIjtcblxuY29uc3QgZG9tYWluSWNvbnMgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IGJpbmFyeVNlbnNvckljb24sXG4gIGNvdmVyOiBjb3Zlckljb24sXG4gIHNlbnNvcjogc2Vuc29ySWNvbixcbiAgaW5wdXRfZGF0ZXRpbWU6IGlucHV0RGF0ZVRpbWVJY29uLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0YXRlSWNvbiA9IChzdGF0ZTogSGFzc0VudGl0eSkgPT4ge1xuICBpZiAoIXN0YXRlKSB7XG4gICAgcmV0dXJuIERFRkFVTFRfRE9NQUlOX0lDT047XG4gIH1cbiAgaWYgKHN0YXRlLmF0dHJpYnV0ZXMuaWNvbikge1xuICAgIHJldHVybiBzdGF0ZS5hdHRyaWJ1dGVzLmljb247XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlRG9tYWluKHN0YXRlLmVudGl0eV9pZCk7XG5cbiAgaWYgKGRvbWFpbiBpbiBkb21haW5JY29ucykge1xuICAgIHJldHVybiBkb21haW5JY29uc1tkb21haW5dKHN0YXRlKTtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihkb21haW4sIHN0YXRlLnN0YXRlKTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFpQkE7QUFDQTtBQUFBO0FBeUJBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUExQ0E7QUE0Q0E7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBU0E7QUFDQTtBQTdEQTtBQStEQTs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFHQTtBQXZEQTtBQXlEQTs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/fecha/src/fecha.js":
/*!*****************************************!*\
  !*** ./node_modules/fecha/src/fecha.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Parse or format dates
 * @class fecha
 */
var fecha = {};
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = '\\d\\d?';
var threeDigits = '\\d{3}';
var fourDigits = '\\d{4}';
var word = '[^\\s]+';
var literal = /\[([^]*?)\]/gm;

var noop = function () {};

function regexEscape(str) {
  return str.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
}

function shorten(arr, sLen) {
  var newArr = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }

  return newArr;
}

function monthUpdate(arrName) {
  return function (d, v, i18n) {
    var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

    if (~index) {
      d.month = index;
    }
  };
}

function pad(val, len) {
  val = String(val);
  len = len || 2;

  while (val.length < len) {
    val = '0' + val;
  }

  return val;
}

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
fecha.i18n = {
  dayNamesShort: dayNamesShort,
  dayNames: dayNames,
  monthNamesShort: monthNamesShort,
  monthNames: monthNames,
  amPm: ['am', 'pm'],
  DoFn: function DoFn(D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
  }
};
var formatFlags = {
  D: function (dateObj) {
    return dateObj.getDate();
  },
  DD: function (dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function (dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function (dateObj) {
    return dateObj.getDay();
  },
  dd: function (dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function (dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function (dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function (dateObj) {
    return dateObj.getMonth() + 1;
  },
  MM: function (dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function (dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function (dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function (dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function (dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function (dateObj) {
    return dateObj.getHours() % 12 || 12;
  },
  hh: function (dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function (dateObj) {
    return dateObj.getHours();
  },
  HH: function (dateObj) {
    return pad(dateObj.getHours());
  },
  m: function (dateObj) {
    return dateObj.getMinutes();
  },
  mm: function (dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function (dateObj) {
    return dateObj.getSeconds();
  },
  ss: function (dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function (dateObj) {
    return Math.round(dateObj.getMilliseconds() / 100);
  },
  SS: function (dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function (dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function (dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function (dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function (dateObj) {
    var o = dateObj.getTimezoneOffset();
    return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
  }
};
var parseFlags = {
  D: [twoDigits, function (d, v) {
    d.day = v;
  }],
  Do: [twoDigits + word, function (d, v) {
    d.day = parseInt(v, 10);
  }],
  M: [twoDigits, function (d, v) {
    d.month = v - 1;
  }],
  YY: [twoDigits, function (d, v) {
    var da = new Date(),
        cent = +('' + da.getFullYear()).substr(0, 2);
    d.year = '' + (v > 68 ? cent - 1 : cent) + v;
  }],
  h: [twoDigits, function (d, v) {
    d.hour = v;
  }],
  m: [twoDigits, function (d, v) {
    d.minute = v;
  }],
  s: [twoDigits, function (d, v) {
    d.second = v;
  }],
  YYYY: [fourDigits, function (d, v) {
    d.year = v;
  }],
  S: ['\\d', function (d, v) {
    d.millisecond = v * 100;
  }],
  SS: ['\\d{2}', function (d, v) {
    d.millisecond = v * 10;
  }],
  SSS: [threeDigits, function (d, v) {
    d.millisecond = v;
  }],
  d: [twoDigits, noop],
  ddd: [word, noop],
  MMM: [word, monthUpdate('monthNamesShort')],
  MMMM: [word, monthUpdate('monthNames')],
  a: [word, function (d, v, i18n) {
    var val = v.toLowerCase();

    if (val === i18n.amPm[0]) {
      d.isPm = false;
    } else if (val === i18n.amPm[1]) {
      d.isPm = true;
    }
  }],
  ZZ: ['[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z', function (d, v) {
    var parts = (v + '').match(/([+-]|\d\d)/gi),
        minutes;

    if (parts) {
      minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
      d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
    }
  }]
};
parseFlags.dd = parseFlags.d;
parseFlags.dddd = parseFlags.ddd;
parseFlags.DD = parseFlags.D;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a; // Some common format strings

fecha.masks = {
  default: 'ddd MMM DD YYYY HH:mm:ss',
  shortDate: 'M/D/YY',
  mediumDate: 'MMM D, YYYY',
  longDate: 'MMMM D, YYYY',
  fullDate: 'dddd, MMMM D, YYYY',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS'
};
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 */

fecha.format = function (dateObj, mask, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj);
  }

  if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
    throw new Error('Invalid Date in fecha.format');
  }

  mask = fecha.masks[mask] || mask || fecha.masks['default'];
  var literals = []; // Make literals inactive by replacing them with ??

  mask = mask.replace(literal, function ($0, $1) {
    literals.push($1);
    return '??';
  }); // Apply formatting rules

  mask = mask.replace(token, function ($0) {
    return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
  }); // Inline literal values back into the formatted value

  return mask.replace(/\?\?/g, function () {
    return literals.shift();
  });
};
/**
 * Parse a date string into an object, changes - into /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @returns {Date|boolean}
 */


fecha.parse = function (dateStr, format, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof format !== 'string') {
    throw new Error('Invalid format in fecha.parse');
  }

  format = fecha.masks[format] || format; // Avoid regular expression denial of service, fail early for really long strings
  // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

  if (dateStr.length > 1000) {
    return null;
  }

  var dateInfo = {};
  var parseInfo = [];
  var newFormat = regexEscape(format).replace(token, function ($0) {
    if (parseFlags[$0]) {
      var info = parseFlags[$0];
      parseInfo.push(info[1]);
      return '(' + info[0] + ')';
    }

    return $0;
  });
  var matches = dateStr.match(new RegExp(newFormat, 'i'));

  if (!matches) {
    return null;
  }

  for (var i = 1; i < matches.length; i++) {
    parseInfo[i - 1](dateInfo, matches[i], i18n);
  }

  var today = new Date();

  if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }

  var date;

  if (dateInfo.timezoneOffset != null) {
    dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
    date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
  } else {
    date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
  }

  return date;
};

/* harmony default export */ __webpack_exports__["default"] = (fecha);

/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;

    if (d.type !== 'RPC') {
      return;
    }

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var params = [],
          len = arguments.length;

      while (len--) params[len] = arguments[len];

      return new Promise(function (a, b) {
        var id = ++c;
        callbacks[id] = [a, b];
        worker.postMessage({
          type: 'RPC',
          id: id,
          method: method,
          params: params
        });
      });
    };
  });
}

module.exports = addMethods;

/***/ }),

/***/ "./src/common/datetime/check_options_support.ts":
/*!******************************************************!*\
  !*** ./src/common/datetime/check_options_support.ts ***!
  \******************************************************/
/*! exports provided: toLocaleDateStringSupportsOptions, toLocaleTimeStringSupportsOptions, toLocaleStringSupportsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateStringSupportsOptions", function() { return toLocaleDateStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeStringSupportsOptions", function() { return toLocaleTimeStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleStringSupportsOptions", function() { return toLocaleStringSupportsOptions; });
// Check for support of native locale string options
function checkToLocaleDateStringSupportsOptions() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

const toLocaleDateStringSupportsOptions = checkToLocaleDateStringSupportsOptions();
const toLocaleTimeStringSupportsOptions = checkToLocaleTimeStringSupportsOptions();
const toLocaleStringSupportsOptions = checkToLocaleStringSupportsOptions();

/***/ }),

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDate = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleDateStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleDateString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "longDate");

/***/ }),

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: formatDateTime, formatDateTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTime", function() { return formatDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTimeWithSeconds", function() { return formatDateTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDateTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.shortTime}`);
const formatDateTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.mediumTime}`);

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: formatTime, formatTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeWithSeconds", function() { return formatTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime");
const formatTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumTime");

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

/***/ "./src/common/entity/compute_state_display.ts":
/*!****************************************************!*\
  !*** ./src/common/entity/compute_state_display.ts ***!
  \****************************************************/
/*! exports provided: computeStateDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDisplay", function() { return computeStateDisplay; });
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _datetime_format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _datetime_format_date_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");





const computeStateDisplay = (localize, stateObj, language) => {
  if (stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_0__["UNKNOWN"] || stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_0__["UNAVAILABLE"]) {
    return localize(`state.default.${stateObj.state}`);
  }

  if (stateObj.attributes.unit_of_measurement) {
    return `${stateObj.state} ${stateObj.attributes.unit_of_measurement}`;
  }

  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(stateObj);

  if (domain === "input_datetime") {
    let date;

    if (!stateObj.attributes.has_time) {
      date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day);
      return Object(_datetime_format_date__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, language);
    }

    if (!stateObj.attributes.has_date) {
      const now = new Date();
      date = new Date( // Due to bugs.chromium.org/p/chromium/issues/detail?id=797548
      // don't use artificial 1970 year.
      now.getFullYear(), now.getMonth(), now.getDay(), stateObj.attributes.hour, stateObj.attributes.minute);
      return Object(_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__["formatTime"])(date, language);
    }

    date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day, stateObj.attributes.hour, stateObj.attributes.minute);
    return Object(_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_2__["formatDateTime"])(date, language);
  }

  return (// Return device class translation
    stateObj.attributes.device_class && localize(`component.${domain}.state.${stateObj.attributes.device_class}.${stateObj.state}`) || // Return default translation
    localize(`component.${domain}.state._.${stateObj.state}`) || // We don't know! Return the raw state.
    stateObj.state
  );
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

/***/ "./src/components/ha-paper-icon-button-prev.ts":
/*!*****************************************************!*\
  !*** ./src/components/ha-paper-icon-button-prev.ts ***!
  \*****************************************************/
/*! exports provided: HaPaperIconButtonPrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperIconButtonPrev", function() { return HaPaperIconButtonPrev; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");

const paperIconButtonClass = customElements.get("paper-icon-button");
class HaPaperIconButtonPrev extends paperIconButtonClass {
  connectedCallback() {
    super.connectedCallback(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      this.icon = window.getComputedStyle(this).direction === "ltr" ? "hass:chevron-left" : "hass:chevron-right";
    }, 100);
  }

}
customElements.define("ha-paper-icon-button-prev", HaPaperIconButtonPrev);

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

/***/ "./src/data/entity.ts":
/*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
/*! exports provided: UNAVAILABLE, UNKNOWN, UNAVAILABLE_STATES, ENTITY_COMPONENT_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE", function() { return UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN", function() { return UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE_STATES", function() { return UNAVAILABLE_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_COMPONENT_DOMAINS", function() { return ENTITY_COMPONENT_DOMAINS; });
const UNAVAILABLE = "unavailable";
const UNKNOWN = "unknown";
const UNAVAILABLE_STATES = [UNAVAILABLE, UNKNOWN];
const ENTITY_COMPONENT_DOMAINS = ["air_quality", "alarm_control_panel", "alert", "automation", "binary_sensor", "calendar", "camera", "counter", "cover", "dominos", "fan", "geo_location", "group", "history_graph", "image_processing", "input_boolean", "input_datetime", "input_number", "input_select", "input_text", "light", "lock", "mailbox", "media_player", "person", "plant", "remember_the_milk", "remote", "scene", "script", "sensor", "switch", "timer", "utility_meter", "vacuum", "weather", "wink", "zha", "zwave"];

/***/ }),

/***/ "./src/data/integration.ts":
/*!*********************************!*\
  !*** ./src/data/integration.ts ***!
  \*********************************/
/*! exports provided: integrationIssuesUrl, domainToName, fetchIntegrationManifests, fetchIntegrationManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integrationIssuesUrl", function() { return integrationIssuesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainToName", function() { return domainToName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIntegrationManifests", function() { return fetchIntegrationManifests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIntegrationManifest", function() { return fetchIntegrationManifest; });
const integrationIssuesUrl = domain => `https://github.com/home-assistant/home-assistant/issues?q=is%3Aissue+is%3Aopen+label%3A%22integration%3A+${domain}%22`;
const domainToName = (localize, domain) => localize(`component.${domain}.title`) || domain;
const fetchIntegrationManifests = hass => hass.callWS({
  type: "manifest/list"
});
const fetchIntegrationManifest = (hass, integration) => hass.callWS({
  type: "manifest/get",
  integration
});

/***/ }),

/***/ "./src/dialogs/notifications/configurator-notification-item.ts":
/*!*********************************************************************!*\
  !*** ./src/dialogs/notifications/configurator-notification-item.ts ***!
  \*********************************************************************/
/*! exports provided: HuiConfiguratorNotificationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiConfiguratorNotificationItem", function() { return HuiConfiguratorNotificationItem; });
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _data_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/integration */ "./src/data/integration.ts");
/* harmony import */ var _notification_item_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-item-template */ "./src/dialogs/notifications/notification-item-template.ts");
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







let HuiConfiguratorNotificationItem = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("configurator-notification-item")], function (_initialize, _LitElement) {
  class HuiConfiguratorNotificationItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiConfiguratorNotificationItem,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "notification",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.notification) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <notification-item-template>
        <span slot="header">
          ${Object(_data_integration__WEBPACK_IMPORTED_MODULE_4__["domainToName"])(this.hass.localize, "configurator")}
        </span>

        <div>
          ${this.hass.localize("ui.notification_drawer.click_to_configure", "entity", this.notification.attributes.friendly_name)}
        </div>

        <mwc-button slot="actions" @click="${this._handleClick}"
          >${Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_3__["computeStateDisplay"])(this.hass.localize, this.notification, this.hass.language)}</mwc-button
        >
      </notification-item-template>
    `;
      }
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "hass-more-info", {
          entityId: this.notification.entity_id
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/notifications/notification-drawer.js":
/*!**********************************************************!*\
  !*** ./src/dialogs/notifications/notification-drawer.js ***!
  \**********************************************************/
/*! exports provided: HuiNotificationDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiNotificationDrawer", function() { return HuiNotificationDrawer; });
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_app_layout_app_drawer_app_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-drawer/app-drawer */ "./node_modules/@polymer/app-layout/app-drawer/app-drawer.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _components_ha_paper_icon_button_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-prev */ "./src/components/ha-paper-icon-button-prev.ts");
/* harmony import */ var _data_persistent_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/persistent_notification */ "./src/data/persistent_notification.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _notification_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-item */ "./src/dialogs/notifications/notification-item.ts");





/* eslint-plugin-disable lit */








/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class HuiNotificationDrawer extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="paper-material-styles">
      app-toolbar {
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        min-height: 64px;
        width: calc(100% - 32px);
      }

      .notifications {
        overflow-y: auto;
        padding-top: 16px;
        height: calc(100% - 65px);
        box-sizing: border-box;
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
      }

      .notification {
        padding: 0 16px 16px;
      }

      .empty {
        padding: 16px;
        text-align: center;
      }
    </style>
    <app-drawer id="drawer" opened="{{open}}" disable-swipe align="start">
      <app-toolbar>
        <div main-title>[[localize('ui.notification_drawer.title')]]</div>
        <ha-paper-icon-button-prev on-click="_closeDrawer" aria-label$="[[localize('ui.notification_drawer.close')]]"></paper-icon-button>
      </app-toolbar>
      <div class="notifications">
        <template is="dom-if" if="[[!_empty(notifications)]]">
          <dom-repeat items="[[notifications]]">
            <template>
              <div class="notification">
                <notification-item hass="[[hass]]" notification="[[item]]"></notification-item>
              </div>
            </template>
          </dom-repeat>
        </template>
        <template is="dom-if" if="[[_empty(notifications)]]">
          <div class="empty">[[localize('ui.notification_drawer.empty')]]<div>
        </template>
      </div>
    </app-drawer>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      open: {
        type: Boolean,
        observer: "_openChanged"
      },
      notifications: {
        type: Array,
        computed: "_computeNotifications(open, hass, _notificationsBackend)"
      },
      _notificationsBackend: {
        type: Array,
        value: []
      }
    };
  }

  ready() {
    super.ready();
    window.addEventListener("location-changed", () => {
      // close drawer when we navigate away.
      if (this.open) {
        this.open = false;
      }
    });
  }

  _closeDrawer(ev) {
    ev.stopPropagation();
    this.open = false;
  }

  _empty(notifications) {
    return notifications.length === 0;
  }

  _openChanged(open) {
    if (open) {
      // Render closed then animate open
      this._unsubNotifications = Object(_data_persistent_notification__WEBPACK_IMPORTED_MODULE_8__["subscribeNotifications"])(this.hass.connection, notifications => {
        this._notificationsBackend = notifications;
      });
    } else if (this._unsubNotifications) {
      this._unsubNotifications();

      this._unsubNotifications = undefined;
    }
  }

  _computeNotifications(open, hass, notificationsBackend) {
    if (!open) {
      return [];
    }

    const configuratorEntities = Object.keys(hass.states).filter(entityId => Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__["computeDomain"])(entityId) === "configurator").map(entityId => hass.states[entityId]);
    return notificationsBackend.concat(configuratorEntities);
  }

  showDialog({
    narrow
  }) {
    this.style.setProperty("--app-drawer-width", narrow ? window.innerWidth + "px" : "500px");
    this.$.drawer.open();
  }

}
customElements.define("notification-drawer", HuiNotificationDrawer);

/***/ }),

/***/ "./src/dialogs/notifications/notification-item-template.ts":
/*!*****************************************************************!*\
  !*** ./src/dialogs/notifications/notification-item-template.ts ***!
  \*****************************************************************/
/*! exports provided: HuiNotificationItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiNotificationItemTemplate", function() { return HuiNotificationItemTemplate; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
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



let HuiNotificationItemTemplate = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("notification-item-template")], function (_initialize, _LitElement) {
  class HuiNotificationItemTemplate extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiNotificationItemTemplate,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card>
        <div class="header"><slot name="header"></slot></div>
        <div class="contents"><slot></slot></div>
        <div class="actions"><slot name="actions"></slot></div>
      </ha-card>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .contents {
        padding: 16px;
        -ms-user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        user-select: text;
      }

      ha-card .header {
        /* start paper-font-headline style */
        font-family: "Roboto", "Noto", sans-serif;
        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */
        text-rendering: optimizeLegibility;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        /* end paper-font-headline style */

        color: var(--primary-text-color);
        padding: 16px 16px 0;
      }

      .actions {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }

      ::slotted(.primary) {
        color: var(--primary-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/notifications/notification-item.ts":
/*!********************************************************!*\
  !*** ./src/dialogs/notifications/notification-item.ts ***!
  \********************************************************/
/*! exports provided: HuiNotificationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiNotificationItem", function() { return HuiNotificationItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _configurator_notification_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configurator-notification-item */ "./src/dialogs/notifications/configurator-notification-item.ts");
/* harmony import */ var _persistent_notification_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persistent-notification-item */ "./src/dialogs/notifications/persistent-notification-item.ts");
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




let HuiNotificationItem = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("notification-item")], function (_initialize, _LitElement) {
  class HuiNotificationItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiNotificationItem,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "notification",
      value: void 0
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (!this.hass || !this.notification || changedProps.has("notification")) {
          return true;
        }

        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.notification) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return "entity_id" in this.notification ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <configurator-notification-item
            .hass=${this.hass}
            .notification="${this.notification}"
          ></configurator-notification-item>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <persistent-notification-item
            .hass=${this.hass}
            .notification="${this.notification}"
          ></persistent-notification-item>
        `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/notifications/persistent-notification-item.ts":
/*!*******************************************************************!*\
  !*** ./src/dialogs/notifications/persistent-notification-item.ts ***!
  \*******************************************************************/
/*! exports provided: HuiPersistentNotificationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPersistentNotificationItem", function() { return HuiPersistentNotificationItem; });
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _notification_item_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-item-template */ "./src/dialogs/notifications/notification-item-template.ts");
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






let HuiPersistentNotificationItem = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("persistent-notification-item")], function (_initialize, _LitElement) {
  class HuiPersistentNotificationItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiPersistentNotificationItem,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "notification",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.notification) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <notification-item-template>
        <span slot="header">
          ${this.notification.title}
        </span>

        <ha-markdown 
          breaks 
          content="${this.notification.message}">
        </ha-markdown>
        <div class="time">
          <span>
            <ha-relative-time
              .hass=${this.hass}
              .datetime="${this.notification.created_at}"
            ></ha-relative-time>
            <paper-tooltip
              >${this._computeTooltip(this.hass, this.notification)}</paper-tooltip
            >
          </span>
        </div>

        <mwc-button id="dismiss_btn" slot="actions" @click="${this._handleDismiss}"
          >${this.hass.localize("ui.card.persistent_notification.dismiss")}</mwc-button
        >
        ${this.notification.notification_type === "status_changed" ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        <mwc-button id="good_feedback_btn" slot="actions" @click="${this._handleGoodFeedback}"
          >Good Feedback</mwc-button>
        <mwc-button id="bad_feedback_btn" slot="actions" @click="${this._handleBadFeedback}"
          >Bad Feedback</mwc-button>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``}
      </notification-item-template>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      .time {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
      }
      ha-relative-time {
        color: var(--secondary-text-color);
      }
      a {
        color: var(--primary-color);
      }
      ha-markdown {
        overflow-wrap: break-word;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_handleDismiss",
      value: function _handleDismiss() {
        this.hass.callService("persistent_notification", "dismiss", {
          notification_id: this.notification.notification_id
        });
      }
    }, {
      kind: "method",
      key: "_handleGoodFeedback",
      value: function _handleGoodFeedback() {
        try {
          var _this$hass;

          // (document.getElementById('good_feedback_btn')! as HTMLInputElement).disabled = true;
          // (document.getElementById('bad_feedback_btn')! as HTMLInputElement).disabled = false;
          this.notification.feedback = "good_feedback";
          this.hass.callService("persistent_notification", "set_feedback", {
            notification_id: this.notification.notification_id,
            feedback: this.notification.feedback,
            user: JSON.stringify((_this$hass = this.hass) === null || _this$hass === void 0 ? void 0 : _this$hass.user)
          });
        } catch (e) {
          console.log('Error in _handleGoodFeedback:', e);
        }
      }
    }, {
      kind: "method",
      key: "_handleBadFeedback",
      value: function _handleBadFeedback() {
        try {
          var _this$hass2;

          // (document.getElementById('bad_feedback_btn')! as HTMLInputElement).disabled = true;
          // (document.getElementById('good_feedback_btn')! as HTMLInputElement).disabled = false;
          this.notification.feedback = "bad_feedback";
          this.hass.callService("persistent_notification", "set_feedback", {
            notification_id: this.notification.notification_id,
            feedback: this.notification.feedback,
            user: JSON.stringify((_this$hass2 = this.hass) === null || _this$hass2 === void 0 ? void 0 : _this$hass2.user)
          });
        } catch (e) {
          console.log('Error in _handleBadFeedback:', e);
        }
      }
    }, {
      kind: "method",
      key: "_computeTooltip",
      value: function _computeTooltip(hass, notification) {
        if (!hass || !notification) {
          return undefined;
        }

        const d = new Date(notification.created_at);
        return d.toLocaleDateString(hass.language, {
          year: "numeric",
          month: "short",
          day: "numeric",
          minute: "numeric",
          hour: "numeric"
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmVjaGEvc3JjL2ZlY2hhLmpzIiwid2VicGFjazovLy8uLi9zcmMvcnBjLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9jaGVja19vcHRpb25zX3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLXByZXYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvbm90aWZpY2F0aW9ucy9jb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24tZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24taXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9ub3RpZmljYXRpb25zL3BlcnNpc3RlbnQtbm90aWZpY2F0aW9uLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBhcnNlIG9yIGZvcm1hdCBkYXRlc1xuICogQGNsYXNzIGZlY2hhXG4gKi9cbnZhciBmZWNoYSA9IHt9O1xudmFyIHRva2VuID0gL2R7MSw0fXxNezEsNH18WVkoPzpZWSk/fFN7MSwzfXxEb3xaWnwoW0hoTXNEbV0pXFwxP3xbYUFdfFwiW15cIl0qXCJ8J1teJ10qJy9nO1xudmFyIHR3b0RpZ2l0cyA9ICdcXFxcZFxcXFxkPyc7XG52YXIgdGhyZWVEaWdpdHMgPSAnXFxcXGR7M30nO1xudmFyIGZvdXJEaWdpdHMgPSAnXFxcXGR7NH0nO1xudmFyIHdvcmQgPSAnW15cXFxcc10rJztcbnZhciBsaXRlcmFsID0gL1xcWyhbXl0qPylcXF0vZ207XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHtcbn07XG5cbmZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC9bfFxcXFx7KClbXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBzaG9ydGVuKGFyciwgc0xlbikge1xuICB2YXIgbmV3QXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBuZXdBcnIucHVzaChhcnJbaV0uc3Vic3RyKDAsIHNMZW4pKTtcbiAgfVxuICByZXR1cm4gbmV3QXJyO1xufVxuXG5mdW5jdGlvbiBtb250aFVwZGF0ZShhcnJOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZCwgdiwgaTE4bikge1xuICAgIHZhciBpbmRleCA9IGkxOG5bYXJyTmFtZV0uaW5kZXhPZih2LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdi5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKH5pbmRleCkge1xuICAgICAgZC5tb250aCA9IGluZGV4O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFkKHZhbCwgbGVuKSB7XG4gIHZhbCA9IFN0cmluZyh2YWwpO1xuICBsZW4gPSBsZW4gfHwgMjtcbiAgd2hpbGUgKHZhbC5sZW5ndGggPCBsZW4pIHtcbiAgICB2YWwgPSAnMCcgKyB2YWw7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xudmFyIG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcbnZhciBtb250aE5hbWVzU2hvcnQgPSBzaG9ydGVuKG1vbnRoTmFtZXMsIDMpO1xudmFyIGRheU5hbWVzU2hvcnQgPSBzaG9ydGVuKGRheU5hbWVzLCAzKTtcbmZlY2hhLmkxOG4gPSB7XG4gIGRheU5hbWVzU2hvcnQ6IGRheU5hbWVzU2hvcnQsXG4gIGRheU5hbWVzOiBkYXlOYW1lcyxcbiAgbW9udGhOYW1lc1Nob3J0OiBtb250aE5hbWVzU2hvcnQsXG4gIG1vbnRoTmFtZXM6IG1vbnRoTmFtZXMsXG4gIGFtUG06IFsnYW0nLCAncG0nXSxcbiAgRG9GbjogZnVuY3Rpb24gRG9GbihEKSB7XG4gICAgcmV0dXJuIEQgKyBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11bRCAlIDEwID4gMyA/IDAgOiAoRCAtIEQgJSAxMCAhPT0gMTApICogRCAlIDEwXTtcbiAgfVxufTtcblxudmFyIGZvcm1hdEZsYWdzID0ge1xuICBEOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0RGF0ZSgpO1xuICB9LFxuICBERDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXREYXRlKCkpO1xuICB9LFxuICBEbzogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLkRvRm4oZGF0ZU9iai5nZXREYXRlKCkpO1xuICB9LFxuICBkOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0RGF5KCk7XG4gIH0sXG4gIGRkOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldERheSgpKTtcbiAgfSxcbiAgZGRkOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4uZGF5TmFtZXNTaG9ydFtkYXRlT2JqLmdldERheSgpXTtcbiAgfSxcbiAgZGRkZDogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLmRheU5hbWVzW2RhdGVPYmouZ2V0RGF5KCldO1xuICB9LFxuICBNOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0TW9udGgoKSArIDE7XG4gIH0sXG4gIE1NOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldE1vbnRoKCkgKyAxKTtcbiAgfSxcbiAgTU1NOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4ubW9udGhOYW1lc1Nob3J0W2RhdGVPYmouZ2V0TW9udGgoKV07XG4gIH0sXG4gIE1NTU06IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5tb250aE5hbWVzW2RhdGVPYmouZ2V0TW9udGgoKV07XG4gIH0sXG4gIFlZOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChTdHJpbmcoZGF0ZU9iai5nZXRGdWxsWWVhcigpKSwgNCkuc3Vic3RyKDIpO1xuICB9LFxuICBZWVlZOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldEZ1bGxZZWFyKCksIDQpO1xuICB9LFxuICBoOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyIHx8IDEyO1xuICB9LFxuICBoaDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRIb3VycygpICUgMTIgfHwgMTIpO1xuICB9LFxuICBIOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKTtcbiAgfSxcbiAgSEg6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0SG91cnMoKSk7XG4gIH0sXG4gIG06IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRNaW51dGVzKCk7XG4gIH0sXG4gIG1tOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldE1pbnV0ZXMoKSk7XG4gIH0sXG4gIHM6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRTZWNvbmRzKCk7XG4gIH0sXG4gIHNzOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldFNlY29uZHMoKSk7XG4gIH0sXG4gIFM6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRlT2JqLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwKTtcbiAgfSxcbiAgU1M6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKE1hdGgucm91bmQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSAvIDEwKSwgMik7XG4gIH0sXG4gIFNTUzogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSwgMyk7XG4gIH0sXG4gIGE6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpIDwgMTIgPyBpMThuLmFtUG1bMF0gOiBpMThuLmFtUG1bMV07XG4gIH0sXG4gIEE6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpIDwgMTIgPyBpMThuLmFtUG1bMF0udG9VcHBlckNhc2UoKSA6IGkxOG4uYW1QbVsxXS50b1VwcGVyQ2FzZSgpO1xuICB9LFxuICBaWjogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHZhciBvID0gZGF0ZU9iai5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHJldHVybiAobyA+IDAgPyAnLScgOiAnKycpICsgcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMobykgLyA2MCkgKiAxMDAgKyBNYXRoLmFicyhvKSAlIDYwLCA0KTtcbiAgfVxufTtcblxudmFyIHBhcnNlRmxhZ3MgPSB7XG4gIEQ6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5kYXkgPSB2O1xuICB9XSxcbiAgRG86IFt0d29EaWdpdHMgKyB3b3JkLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQuZGF5ID0gcGFyc2VJbnQodiwgMTApO1xuICB9XSxcbiAgTTogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLm1vbnRoID0gdiAtIDE7XG4gIH1dLFxuICBZWTogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICB2YXIgZGEgPSBuZXcgRGF0ZSgpLCBjZW50ID0gKygnJyArIGRhLmdldEZ1bGxZZWFyKCkpLnN1YnN0cigwLCAyKTtcbiAgICBkLnllYXIgPSAnJyArICh2ID4gNjggPyBjZW50IC0gMSA6IGNlbnQpICsgdjtcbiAgfV0sXG4gIGg6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5ob3VyID0gdjtcbiAgfV0sXG4gIG06IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taW51dGUgPSB2O1xuICB9XSxcbiAgczogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLnNlY29uZCA9IHY7XG4gIH1dLFxuICBZWVlZOiBbZm91ckRpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLnllYXIgPSB2O1xuICB9XSxcbiAgUzogWydcXFxcZCcsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taWxsaXNlY29uZCA9IHYgKiAxMDA7XG4gIH1dLFxuICBTUzogWydcXFxcZHsyfScsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taWxsaXNlY29uZCA9IHYgKiAxMDtcbiAgfV0sXG4gIFNTUzogW3RocmVlRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWlsbGlzZWNvbmQgPSB2O1xuICB9XSxcbiAgZDogW3R3b0RpZ2l0cywgbm9vcF0sXG4gIGRkZDogW3dvcmQsIG5vb3BdLFxuICBNTU06IFt3b3JkLCBtb250aFVwZGF0ZSgnbW9udGhOYW1lc1Nob3J0JyldLFxuICBNTU1NOiBbd29yZCwgbW9udGhVcGRhdGUoJ21vbnRoTmFtZXMnKV0sXG4gIGE6IFt3b3JkLCBmdW5jdGlvbiAoZCwgdiwgaTE4bikge1xuICAgIHZhciB2YWwgPSB2LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHZhbCA9PT0gaTE4bi5hbVBtWzBdKSB7XG4gICAgICBkLmlzUG0gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gaTE4bi5hbVBtWzFdKSB7XG4gICAgICBkLmlzUG0gPSB0cnVlO1xuICAgIH1cbiAgfV0sXG4gIFpaOiBbJ1teXFxcXHNdKj9bXFxcXCtcXFxcLV1cXFxcZFxcXFxkOj9cXFxcZFxcXFxkfFteXFxcXHNdKj9aJywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICB2YXIgcGFydHMgPSAodiArICcnKS5tYXRjaCgvKFsrLV18XFxkXFxkKS9naSksIG1pbnV0ZXM7XG5cbiAgICBpZiAocGFydHMpIHtcbiAgICAgIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgcGFyc2VJbnQocGFydHNbMl0sIDEwKTtcbiAgICAgIGQudGltZXpvbmVPZmZzZXQgPSBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuICAgIH1cbiAgfV1cbn07XG5wYXJzZUZsYWdzLmRkID0gcGFyc2VGbGFncy5kO1xucGFyc2VGbGFncy5kZGRkID0gcGFyc2VGbGFncy5kZGQ7XG5wYXJzZUZsYWdzLkREID0gcGFyc2VGbGFncy5EO1xucGFyc2VGbGFncy5tbSA9IHBhcnNlRmxhZ3MubTtcbnBhcnNlRmxhZ3MuaGggPSBwYXJzZUZsYWdzLkggPSBwYXJzZUZsYWdzLkhIID0gcGFyc2VGbGFncy5oO1xucGFyc2VGbGFncy5NTSA9IHBhcnNlRmxhZ3MuTTtcbnBhcnNlRmxhZ3Muc3MgPSBwYXJzZUZsYWdzLnM7XG5wYXJzZUZsYWdzLkEgPSBwYXJzZUZsYWdzLmE7XG5cblxuLy8gU29tZSBjb21tb24gZm9ybWF0IHN0cmluZ3NcbmZlY2hhLm1hc2tzID0ge1xuICBkZWZhdWx0OiAnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzJyxcbiAgc2hvcnREYXRlOiAnTS9EL1lZJyxcbiAgbWVkaXVtRGF0ZTogJ01NTSBELCBZWVlZJyxcbiAgbG9uZ0RhdGU6ICdNTU1NIEQsIFlZWVknLFxuICBmdWxsRGF0ZTogJ2RkZGQsIE1NTU0gRCwgWVlZWScsXG4gIHNob3J0VGltZTogJ0hIOm1tJyxcbiAgbWVkaXVtVGltZTogJ0hIOm1tOnNzJyxcbiAgbG9uZ1RpbWU6ICdISDptbTpzcy5TU1MnXG59O1xuXG4vKioqXG4gKiBGb3JtYXQgYSBkYXRlXG4gKiBAbWV0aG9kIGZvcm1hdFxuICogQHBhcmFtIHtEYXRlfG51bWJlcn0gZGF0ZU9ialxuICogQHBhcmFtIHtzdHJpbmd9IG1hc2sgRm9ybWF0IG9mIHRoZSBkYXRlLCBpLmUuICdtbS1kZC15eScgb3IgJ3Nob3J0RGF0ZSdcbiAqL1xuZmVjaGEuZm9ybWF0ID0gZnVuY3Rpb24gKGRhdGVPYmosIG1hc2ssIGkxOG5TZXR0aW5ncykge1xuICB2YXIgaTE4biA9IGkxOG5TZXR0aW5ncyB8fCBmZWNoYS5pMThuO1xuXG4gIGlmICh0eXBlb2YgZGF0ZU9iaiA9PT0gJ251bWJlcicpIHtcbiAgICBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZU9iaik7XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGVPYmopICE9PSAnW29iamVjdCBEYXRlXScgfHwgaXNOYU4oZGF0ZU9iai5nZXRUaW1lKCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIERhdGUgaW4gZmVjaGEuZm9ybWF0Jyk7XG4gIH1cblxuICBtYXNrID0gZmVjaGEubWFza3NbbWFza10gfHwgbWFzayB8fCBmZWNoYS5tYXNrc1snZGVmYXVsdCddO1xuXG4gIHZhciBsaXRlcmFscyA9IFtdO1xuXG4gIC8vIE1ha2UgbGl0ZXJhbHMgaW5hY3RpdmUgYnkgcmVwbGFjaW5nIHRoZW0gd2l0aCA/P1xuICBtYXNrID0gbWFzay5yZXBsYWNlKGxpdGVyYWwsIGZ1bmN0aW9uKCQwLCAkMSkge1xuICAgIGxpdGVyYWxzLnB1c2goJDEpO1xuICAgIHJldHVybiAnPz8nO1xuICB9KTtcbiAgLy8gQXBwbHkgZm9ybWF0dGluZyBydWxlc1xuICBtYXNrID0gbWFzay5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAoJDApIHtcbiAgICByZXR1cm4gJDAgaW4gZm9ybWF0RmxhZ3MgPyBmb3JtYXRGbGFnc1skMF0oZGF0ZU9iaiwgaTE4bikgOiAkMC5zbGljZSgxLCAkMC5sZW5ndGggLSAxKTtcbiAgfSk7XG4gIC8vIElubGluZSBsaXRlcmFsIHZhbHVlcyBiYWNrIGludG8gdGhlIGZvcm1hdHRlZCB2YWx1ZVxuICByZXR1cm4gbWFzay5yZXBsYWNlKC9cXD9cXD8vZywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxpdGVyYWxzLnNoaWZ0KCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQYXJzZSBhIGRhdGUgc3RyaW5nIGludG8gYW4gb2JqZWN0LCBjaGFuZ2VzIC0gaW50byAvXG4gKiBAbWV0aG9kIHBhcnNlXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVN0ciBEYXRlIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBEYXRlIHBhcnNlIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV8Ym9vbGVhbn1cbiAqL1xuZmVjaGEucGFyc2UgPSBmdW5jdGlvbiAoZGF0ZVN0ciwgZm9ybWF0LCBpMThuU2V0dGluZ3MpIHtcbiAgdmFyIGkxOG4gPSBpMThuU2V0dGluZ3MgfHwgZmVjaGEuaTE4bjtcblxuICBpZiAodHlwZW9mIGZvcm1hdCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZm9ybWF0IGluIGZlY2hhLnBhcnNlJyk7XG4gIH1cblxuICBmb3JtYXQgPSBmZWNoYS5tYXNrc1tmb3JtYXRdIHx8IGZvcm1hdDtcblxuICAvLyBBdm9pZCByZWd1bGFyIGV4cHJlc3Npb24gZGVuaWFsIG9mIHNlcnZpY2UsIGZhaWwgZWFybHkgZm9yIHJlYWxseSBsb25nIHN0cmluZ3NcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9SZWd1bGFyX2V4cHJlc3Npb25fRGVuaWFsX29mX1NlcnZpY2VfLV9SZURvU1xuICBpZiAoZGF0ZVN0ci5sZW5ndGggPiAxMDAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZGF0ZUluZm8gPSB7fTtcbiAgdmFyIHBhcnNlSW5mbyA9IFtdO1xuICB2YXIgbmV3Rm9ybWF0ID0gcmVnZXhFc2NhcGUoZm9ybWF0KS5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAoJDApIHtcbiAgICBpZiAocGFyc2VGbGFnc1skMF0pIHtcbiAgICAgIHZhciBpbmZvID0gcGFyc2VGbGFnc1skMF07XG4gICAgICBwYXJzZUluZm8ucHVzaChpbmZvWzFdKTtcbiAgICAgIHJldHVybiAnKCcgKyBpbmZvWzBdICsgJyknO1xuICAgIH1cblxuICAgIHJldHVybiAkMDtcbiAgfSk7XG4gIHZhciBtYXRjaGVzID0gZGF0ZVN0ci5tYXRjaChuZXcgUmVnRXhwKG5ld0Zvcm1hdCwgJ2knKSk7XG4gIGlmICghbWF0Y2hlcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFyc2VJbmZvW2kgLSAxXShkYXRlSW5mbywgbWF0Y2hlc1tpXSwgaTE4bik7XG4gIH1cblxuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBpZiAoZGF0ZUluZm8uaXNQbSA9PT0gdHJ1ZSAmJiBkYXRlSW5mby5ob3VyICE9IG51bGwgJiYgK2RhdGVJbmZvLmhvdXIgIT09IDEyKSB7XG4gICAgZGF0ZUluZm8uaG91ciA9ICtkYXRlSW5mby5ob3VyICsgMTI7XG4gIH0gZWxzZSBpZiAoZGF0ZUluZm8uaXNQbSA9PT0gZmFsc2UgJiYgK2RhdGVJbmZvLmhvdXIgPT09IDEyKSB7XG4gICAgZGF0ZUluZm8uaG91ciA9IDA7XG4gIH1cblxuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVJbmZvLnRpbWV6b25lT2Zmc2V0ICE9IG51bGwpIHtcbiAgICBkYXRlSW5mby5taW51dGUgPSArKGRhdGVJbmZvLm1pbnV0ZSB8fCAwKSAtICtkYXRlSW5mby50aW1lem9uZU9mZnNldDtcbiAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZUluZm8ueWVhciB8fCB0b2RheS5nZXRGdWxsWWVhcigpLCBkYXRlSW5mby5tb250aCB8fCAwLCBkYXRlSW5mby5kYXkgfHwgMSxcbiAgICAgIGRhdGVJbmZvLmhvdXIgfHwgMCwgZGF0ZUluZm8ubWludXRlIHx8IDAsIGRhdGVJbmZvLnNlY29uZCB8fCAwLCBkYXRlSW5mby5taWxsaXNlY29uZCB8fCAwKSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbmZvLnllYXIgfHwgdG9kYXkuZ2V0RnVsbFllYXIoKSwgZGF0ZUluZm8ubW9udGggfHwgMCwgZGF0ZUluZm8uZGF5IHx8IDEsXG4gICAgICBkYXRlSW5mby5ob3VyIHx8IDAsIGRhdGVJbmZvLm1pbnV0ZSB8fCAwLCBkYXRlSW5mby5zZWNvbmQgfHwgMCwgZGF0ZUluZm8ubWlsbGlzZWNvbmQgfHwgMCk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZWNoYTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1ldGhvZHMod29ya2VyLCBtZXRob2RzKSB7XG5cdGxldCBjID0gMDtcblx0bGV0IGNhbGxiYWNrcyA9IHt9O1xuXHR3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XG5cdFx0bGV0IGQgPSBlLmRhdGE7XG5cdFx0aWYgKGQudHlwZSE9PSdSUEMnKSByZXR1cm47XG5cdFx0aWYgKGQuaWQpIHtcblx0XHRcdGxldCBmID0gY2FsbGJhY2tzW2QuaWRdO1xuXHRcdFx0aWYgKGYpIHtcblx0XHRcdFx0ZGVsZXRlIGNhbGxiYWNrc1tkLmlkXTtcblx0XHRcdFx0aWYgKGQuZXJyb3IpIHtcblx0XHRcdFx0XHRmWzFdKE9iamVjdC5hc3NpZ24oRXJyb3IoZC5lcnJvci5tZXNzYWdlKSwgZC5lcnJvcikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGZbMF0oZC5yZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXHRcdFx0ZXZ0LmluaXRFdmVudChkLm1ldGhvZCwgZmFsc2UsIGZhbHNlKTtcblx0XHRcdGV2dC5kYXRhID0gZC5wYXJhbXM7XG5cdFx0XHR3b3JrZXIuZGlzcGF0Y2hFdmVudChldnQpO1xuXHRcdH1cblx0fSk7XG5cdG1ldGhvZHMuZm9yRWFjaCggbWV0aG9kID0+IHtcblx0XHR3b3JrZXJbbWV0aG9kXSA9ICguLi5wYXJhbXMpID0+IG5ldyBQcm9taXNlKCAoYSwgYikgPT4ge1xuXHRcdFx0bGV0IGlkID0gKytjO1xuXHRcdFx0Y2FsbGJhY2tzW2lkXSA9IFthLCBiXTtcblx0XHRcdHdvcmtlci5wb3N0TWVzc2FnZSh7IHR5cGU6ICdSUEMnLCBpZCwgbWV0aG9kLCBwYXJhbXMgfSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuIiwiLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gY2hlY2tUb0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja1RvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuZXhwb3J0IGNvbnN0IHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9IGNoZWNrVG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKCk7XG5leHBvcnQgY29uc3QgdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCk7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5pbXBvcnQgeyB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgfSBmcm9tIFwiLi9jaGVja19vcHRpb25zX3N1cHBvcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZURhdGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwibG9uZ0RhdGVcIik7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5pbXBvcnQgeyB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyB9IGZyb20gXCIuL2NoZWNrX29wdGlvbnNfc3VwcG9ydFwiO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZVRpbWUgPSB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9uc1xuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PlxuICAgICAgZmVjaGEuZm9ybWF0KFxuICAgICAgICBkYXRlT2JqLFxuICAgICAgICBgJHtmZWNoYS5tYXNrcy5sb25nRGF0ZX0sICR7ZmVjaGEubWFza3Muc2hvcnRUaW1lfWBcbiAgICAgICk7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlVGltZVdpdGhTZWNvbmRzID0gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT5cbiAgICAgIGZlY2hhLmZvcm1hdChcbiAgICAgICAgZGF0ZU9iaixcbiAgICAgICAgYCR7ZmVjaGEubWFza3MubG9uZ0RhdGV9LCAke2ZlY2hhLm1hc2tzLm1lZGl1bVRpbWV9YFxuICAgICAgKTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcbmltcG9ydCB7IHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyB9IGZyb20gXCIuL2NoZWNrX29wdGlvbnNfc3VwcG9ydFwiO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZSA9IHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9uc1xuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwic2hvcnRUaW1lXCIpO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZVdpdGhTZWNvbmRzID0gdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJtZWRpdW1UaW1lXCIpO1xuIiwiaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBkYXRlIG9iamVjdCBhcyByZWxhdGl2ZSB0aW1lIGZyb20gbm93LlxuICpcbiAqIEV4YW1wbGUgb3V0cHV0OiA1IG1pbnV0ZXMgYWdvLCBpbiAzIGRheXMuXG4gKi9cbmNvbnN0IHRlc3RzID0gWzYwLCA2MCwgMjQsIDddO1xuY29uc3QgbGFuZ0tleSA9IFtcInNlY29uZFwiLCBcIm1pbnV0ZVwiLCBcImhvdXJcIiwgXCJkYXlcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbGF0aXZlVGltZShcbiAgZGF0ZU9iajogRGF0ZSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgb3B0aW9uczoge1xuICAgIGNvbXBhcmVUaW1lPzogRGF0ZTtcbiAgICBpbmNsdWRlVGVuc2U/OiBib29sZWFuO1xuICB9ID0ge31cbik6IHN0cmluZyB7XG4gIGNvbnN0IGNvbXBhcmVUaW1lID0gb3B0aW9ucy5jb21wYXJlVGltZSB8fCBuZXcgRGF0ZSgpO1xuICBsZXQgZGVsdGEgPSAoY29tcGFyZVRpbWUuZ2V0VGltZSgpIC0gZGF0ZU9iai5nZXRUaW1lKCkpIC8gMTAwMDtcbiAgY29uc3QgdGVuc2UgPSBkZWx0YSA+PSAwID8gXCJwYXN0XCIgOiBcImZ1dHVyZVwiO1xuICBkZWx0YSA9IE1hdGguYWJzKGRlbHRhKTtcblxuICBsZXQgdGltZURlc2M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkZWx0YSA8IHRlc3RzW2ldKSB7XG4gICAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgICAgYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi4ke2xhbmdLZXlbaV19YCxcbiAgICAgICAgXCJjb3VudFwiLFxuICAgICAgICBkZWx0YVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlbHRhIC89IHRlc3RzW2ldO1xuICB9XG5cbiAgaWYgKHRpbWVEZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICBcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi53ZWVrXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBkZWx0YVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucy5pbmNsdWRlVGVuc2UgPT09IGZhbHNlXG4gICAgPyB0aW1lRGVzY1xuICAgIDogbG9jYWxpemUoYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS4ke3RlbnNlfWAsIFwidGltZVwiLCB0aW1lRGVzYyk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgVU5BVkFJTEFCTEUsIFVOS05PV04gfSBmcm9tIFwiLi4vLi4vZGF0YS9lbnRpdHlcIjtcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X2RhdGVcIjtcbmltcG9ydCB7IGZvcm1hdERhdGVUaW1lIH0gZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVEaXNwbGF5ID0gKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBVTktOT1dOIHx8IHN0YXRlT2JqLnN0YXRlID09PSBVTkFWQUlMQUJMRSkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgc3RhdGUuZGVmYXVsdC4ke3N0YXRlT2JqLnN0YXRlfWApO1xuICB9XG5cbiAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudCkge1xuICAgIHJldHVybiBgJHtzdGF0ZU9iai5zdGF0ZX0gJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnR9YDtcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKGRvbWFpbiA9PT0gXCJpbnB1dF9kYXRldGltZVwiKSB7XG4gICAgbGV0IGRhdGU6IERhdGU7XG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc190aW1lKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMueWVhcixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCAtIDEsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5XG4gICAgICApO1xuICAgICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgbGFuZ3VhZ2UpO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX2RhdGUpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgIC8vIER1ZSB0byBidWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzk3NTQ4XG4gICAgICAgIC8vIGRvbid0IHVzZSBhcnRpZmljaWFsIDE5NzAgeWVhci5cbiAgICAgICAgbm93LmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG5vdy5nZXRNb250aCgpLFxuICAgICAgICBub3cuZ2V0RGF5KCksXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaG91cixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5taW51dGVcbiAgICAgICk7XG4gICAgICByZXR1cm4gZm9ybWF0VGltZShkYXRlLCBsYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyLFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCAtIDEsXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRheSxcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaG91cixcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubWludXRlXG4gICAgKTtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZVRpbWUoZGF0ZSwgbGFuZ3VhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICAvLyBSZXR1cm4gZGV2aWNlIGNsYXNzIHRyYW5zbGF0aW9uXG4gICAgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzICYmXG4gICAgICBsb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC4ke2RvbWFpbn0uc3RhdGUuJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzc30uJHtzdGF0ZU9iai5zdGF0ZX1gXG4gICAgICApKSB8fFxuICAgIC8vIFJldHVybiBkZWZhdWx0IHRyYW5zbGF0aW9uXG4gICAgbG9jYWxpemUoYGNvbXBvbmVudC4ke2RvbWFpbn0uc3RhdGUuXy4ke3N0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgLy8gV2UgZG9uJ3Qga25vdyEgUmV0dXJuIHRoZSByYXcgc3RhdGUuXG4gICAgc3RhdGVPYmouc3RhdGVcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVEb21haW4gPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHR5cGUgeyBQYXBlckljb25CdXR0b25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHBhcGVySWNvbkJ1dHRvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFxuICBcInBhcGVyLWljb24tYnV0dG9uXCJcbikgYXMgQ29uc3RydWN0b3I8UGFwZXJJY29uQnV0dG9uRWxlbWVudD47XG5cbmV4cG9ydCBjbGFzcyBIYVBhcGVySWNvbkJ1dHRvblByZXYgZXh0ZW5kcyBwYXBlckljb25CdXR0b25DbGFzcyB7XG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pY29uID1cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXG4gICAgICAgICAgPyBcImhhc3M6Y2hldnJvbi1sZWZ0XCJcbiAgICAgICAgICA6IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCI7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItaWNvbi1idXR0b24tcHJldlwiOiBIYVBhcGVySWNvbkJ1dHRvblByZXY7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItaWNvbi1idXR0b24tcHJldlwiLCBIYVBhcGVySWNvbkJ1dHRvblByZXYpO1xuIiwiaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbVwiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9yZWxhdGl2ZV90aW1lXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFSZWxhdGl2ZVRpbWUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgZGF0ZXRpbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGRhdGV0aW1lT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWREYXRlVGltZTogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUgPSB0aGlzLnVwZGF0ZVJlbGF0aXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIHVwZGF0ZSBldmVyeSA2MCBzZWNvbmRzXG4gICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlUmVsYXRpdmUsIDYwMDAwKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnVwZGF0ZUludGVydmFsKTtcbiAgfVxuXG4gIGRhdGV0aW1lQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsID8gbmV3IERhdGUobmV3VmFsKSA6IG51bGw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICBkYXRldGltZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIHVwZGF0ZVJlbGF0aXZlKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb20odGhpcyk7XG4gICAgaWYgKCF0aGlzLnBhcnNlZERhdGVUaW1lKSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHRoaXMubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUubmV2ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gcmVsYXRpdmVUaW1lKHRoaXMucGFyc2VkRGF0ZVRpbWUsIHRoaXMubG9jYWxpemUpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1yZWxhdGl2ZS10aW1lXCIsIEhhUmVsYXRpdmVUaW1lKTtcbiIsImV4cG9ydCBjb25zdCBVTkFWQUlMQUJMRSA9IFwidW5hdmFpbGFibGVcIjtcbmV4cG9ydCBjb25zdCBVTktOT1dOID0gXCJ1bmtub3duXCI7XG5cbmV4cG9ydCBjb25zdCBVTkFWQUlMQUJMRV9TVEFURVMgPSBbVU5BVkFJTEFCTEUsIFVOS05PV05dO1xuXG5leHBvcnQgY29uc3QgRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TID0gW1xuICBcImFpcl9xdWFsaXR5XCIsXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImFsZXJ0XCIsXG4gIFwiYXV0b21hdGlvblwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJjYWxlbmRhclwiLFxuICBcImNhbWVyYVwiLFxuICBcImNvdW50ZXJcIixcbiAgXCJjb3ZlclwiLFxuICBcImRvbWlub3NcIixcbiAgXCJmYW5cIixcbiAgXCJnZW9fbG9jYXRpb25cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbWFnZV9wcm9jZXNzaW5nXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImlucHV0X2RhdGV0aW1lXCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1haWxib3hcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJwZXJzb25cIixcbiAgXCJwbGFudFwiLFxuICBcInJlbWVtYmVyX3RoZV9taWxrXCIsXG4gIFwicmVtb3RlXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzZW5zb3JcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJ0aW1lclwiLFxuICBcInV0aWxpdHlfbWV0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwid2lua1wiLFxuICBcInpoYVwiLFxuICBcInp3YXZlXCIsXG5dO1xuIiwiaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJbnRlZ3JhdGlvbk1hbmlmZXN0IHtcbiAgaXNfYnVpbHRfaW46IGJvb2xlYW47XG4gIGRvbWFpbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbmZpZ19mbG93OiBib29sZWFuO1xuICBkb2N1bWVudGF0aW9uOiBzdHJpbmc7XG4gIGRlcGVuZGVuY2llcz86IHN0cmluZ1tdO1xuICBhZnRlcl9kZXBlbmRlbmNpZXM/OiBzdHJpbmdbXTtcbiAgY29kZW93bmVycz86IHN0cmluZ1tdO1xuICByZXF1aXJlbWVudHM/OiBzdHJpbmdbXTtcbiAgc3NkcD86IEFycmF5PHsgbWFudWZhY3R1cmVyPzogc3RyaW5nOyBtb2RlbE5hbWU/OiBzdHJpbmc7IHN0Pzogc3RyaW5nIH0+O1xuICB6ZXJvY29uZj86IHN0cmluZ1tdO1xuICBob21la2l0PzogeyBtb2RlbHM6IHN0cmluZ1tdIH07XG4gIHF1YWxpdHlfc2NhbGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpbnRlZ3JhdGlvbklzc3Vlc1VybCA9IChkb21haW46IHN0cmluZykgPT5cbiAgYGh0dHBzOi8vZ2l0aHViLmNvbS9ob21lLWFzc2lzdGFudC9ob21lLWFzc2lzdGFudC9pc3N1ZXM/cT1pcyUzQWlzc3VlK2lzJTNBb3BlbitsYWJlbCUzQSUyMmludGVncmF0aW9uJTNBKyR7ZG9tYWlufSUyMmA7XG5cbmV4cG9ydCBjb25zdCBkb21haW5Ub05hbWUgPSAobG9jYWxpemU6IExvY2FsaXplRnVuYywgZG9tYWluOiBzdHJpbmcpID0+XG4gIGxvY2FsaXplKGBjb21wb25lbnQuJHtkb21haW59LnRpdGxlYCkgfHwgZG9tYWluO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbnRlZ3JhdGlvbk1hbmlmZXN0cyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxJbnRlZ3JhdGlvbk1hbmlmZXN0W10+KHsgdHlwZTogXCJtYW5pZmVzdC9saXN0XCIgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEludGVncmF0aW9uTWFuaWZlc3QgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGludGVncmF0aW9uOiBzdHJpbmdcbikgPT4gaGFzcy5jYWxsV1M8SW50ZWdyYXRpb25NYW5pZmVzdD4oeyB0eXBlOiBcIm1hbmlmZXN0L2dldFwiLCBpbnRlZ3JhdGlvbiB9KTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRGlzcGxheSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZGlzcGxheVwiO1xuaW1wb3J0IHsgZG9tYWluVG9OYW1lIH0gZnJvbSBcIi4uLy4uL2RhdGEvaW50ZWdyYXRpb25cIjtcbmltcG9ydCB7IFBlcnNpdGVudE5vdGlmaWNhdGlvbkVudGl0eSB9IGZyb20gXCIuLi8uLi9kYXRhL3BlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuL25vdGlmaWNhdGlvbi1pdGVtLXRlbXBsYXRlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiY29uZmlndXJhdG9yLW5vdGlmaWNhdGlvbi1pdGVtXCIpXG5leHBvcnQgY2xhc3MgSHVpQ29uZmlndXJhdG9yTm90aWZpY2F0aW9uSXRlbSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5vdGlmaWNhdGlvbj86IFBlcnNpdGVudE5vdGlmaWNhdGlvbkVudGl0eTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5ub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8bm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAke2RvbWFpblRvTmFtZSh0aGlzLmhhc3MubG9jYWxpemUsIFwiY29uZmlndXJhdG9yXCIpfVxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkubm90aWZpY2F0aW9uX2RyYXdlci5jbGlja190b19jb25maWd1cmVcIixcbiAgICAgICAgICAgIFwiZW50aXR5XCIsXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWVcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bXdjLWJ1dHRvbiBzbG90PVwiYWN0aW9uc1wiIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICA+JHtjb21wdXRlU3RhdGVEaXNwbGF5KFxuICAgICAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplLFxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb24sXG4gICAgICAgICAgICB0aGlzLmhhc3MubGFuZ3VhZ2VcbiAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L25vdGlmaWNhdGlvbi1pdGVtLXRlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZDogdGhpcy5ub3RpZmljYXRpb24hLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY29uZmlndXJhdG9yLW5vdGlmaWNhdGlvbi1pdGVtXCI6IEh1aUNvbmZpZ3VyYXRvck5vdGlmaWNhdGlvbkl0ZW07XG4gIH1cbn1cbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1kcmF3ZXIvYXBwLWRyYXdlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tcHJldlwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuLi8uLi9kYXRhL3BlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgXCIuL25vdGlmaWNhdGlvbi1pdGVtXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuZXhwb3J0IGNsYXNzIEh1aU5vdGlmaWNhdGlvbkRyYXdlciBleHRlbmRzIEV2ZW50c01peGluKFxuICBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KVxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXNcIj5cbiAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgbWluLWhlaWdodDogNjRweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgICAgfVxuXG4gICAgICAubm90aWZpY2F0aW9ucyB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZW1wdHkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8YXBwLWRyYXdlciBpZD1cImRyYXdlclwiIG9wZW5lZD1cInt7b3Blbn19XCIgZGlzYWJsZS1zd2lwZSBhbGlnbj1cInN0YXJ0XCI+XG4gICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCd1aS5ub3RpZmljYXRpb25fZHJhd2VyLnRpdGxlJyldXTwvZGl2PlxuICAgICAgICA8aGEtcGFwZXItaWNvbi1idXR0b24tcHJldiBvbi1jbGljaz1cIl9jbG9zZURyYXdlclwiIGFyaWEtbGFiZWwkPVwiW1tsb2NhbGl6ZSgndWkubm90aWZpY2F0aW9uX2RyYXdlci5jbG9zZScpXV1cIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2VtcHR5KG5vdGlmaWNhdGlvbnMpXV1cIj5cbiAgICAgICAgICA8ZG9tLXJlcGVhdCBpdGVtcz1cIltbbm90aWZpY2F0aW9uc11dXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8bm90aWZpY2F0aW9uLWl0ZW0gaGFzcz1cIltbaGFzc11dXCIgbm90aWZpY2F0aW9uPVwiW1tpdGVtXV1cIj48L25vdGlmaWNhdGlvbi1pdGVtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kb20tcmVwZWF0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VtcHR5KG5vdGlmaWNhdGlvbnMpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1wdHlcIj5bW2xvY2FsaXplKCd1aS5ub3RpZmljYXRpb25fZHJhd2VyLmVtcHR5JyldXTxkaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FwcC1kcmF3ZXI+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgb3Blbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogXCJfb3BlbkNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBub3RpZmljYXRpb25zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZU5vdGlmaWNhdGlvbnMob3BlbiwgaGFzcywgX25vdGlmaWNhdGlvbnNCYWNrZW5kKVwiLFxuICAgICAgfSxcbiAgICAgIF9ub3RpZmljYXRpb25zQmFja2VuZDoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvY2F0aW9uLWNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgLy8gY2xvc2UgZHJhd2VyIHdoZW4gd2UgbmF2aWdhdGUgYXdheS5cbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2VEcmF3ZXIoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIF9lbXB0eShub3RpZmljYXRpb25zKSB7XG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgX29wZW5DaGFuZ2VkKG9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgLy8gUmVuZGVyIGNsb3NlZCB0aGVuIGFuaW1hdGUgb3BlblxuICAgICAgdGhpcy5fdW5zdWJOb3RpZmljYXRpb25zID0gc3Vic2NyaWJlTm90aWZpY2F0aW9ucyhcbiAgICAgICAgdGhpcy5oYXNzLmNvbm5lY3Rpb24sXG4gICAgICAgIChub3RpZmljYXRpb25zKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9uc0JhY2tlbmQgPSBub3RpZmljYXRpb25zO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdW5zdWJOb3RpZmljYXRpb25zKSB7XG4gICAgICB0aGlzLl91bnN1Yk5vdGlmaWNhdGlvbnMoKTtcbiAgICAgIHRoaXMuX3Vuc3ViTm90aWZpY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZU5vdGlmaWNhdGlvbnMob3BlbiwgaGFzcywgbm90aWZpY2F0aW9uc0JhY2tlbmQpIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWd1cmF0b3JFbnRpdGllcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKVxuICAgICAgLmZpbHRlcigoZW50aXR5SWQpID0+IGNvbXB1dGVEb21haW4oZW50aXR5SWQpID09PSBcImNvbmZpZ3VyYXRvclwiKVxuICAgICAgLm1hcCgoZW50aXR5SWQpID0+IGhhc3Muc3RhdGVzW2VudGl0eUlkXSk7XG5cbiAgICByZXR1cm4gbm90aWZpY2F0aW9uc0JhY2tlbmQuY29uY2F0KGNvbmZpZ3VyYXRvckVudGl0aWVzKTtcbiAgfVxuXG4gIHNob3dEaWFsb2coeyBuYXJyb3cgfSkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tYXBwLWRyYXdlci13aWR0aFwiLFxuICAgICAgbmFycm93ID8gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCIgOiBcIjUwMHB4XCJcbiAgICApO1xuICAgIHRoaXMuJC5kcmF3ZXIub3BlbigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJub3RpZmljYXRpb24tZHJhd2VyXCIsIEh1aU5vdGlmaWNhdGlvbkRyYXdlcik7XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbkBjdXN0b21FbGVtZW50KFwibm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGVcIilcbmV4cG9ydCBjbGFzcyBIdWlOb3RpZmljYXRpb25JdGVtVGVtcGxhdGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50c1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj48c2xvdCBuYW1lPVwiYWN0aW9uc1wiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICAgIH1cblxuICAgICAgaGEtY2FyZCAuaGVhZGVyIHtcbiAgICAgICAgLyogc3RhcnQgcGFwZXItZm9udC1oZWFkbGluZSBzdHlsZSAqL1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJOb3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyAvKiBPUyBYIHN1YnBpeGVsIEFBIGJsZWVkIGJ1ZyAqL1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIC8qIGVuZCBwYXBlci1mb250LWhlYWRsaW5lIHN0eWxlICovXG5cbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9ucyB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cblxuICAgICAgOjpzbG90dGVkKC5wcmltYXJ5KSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiOiBIdWlOb3RpZmljYXRpb25JdGVtVGVtcGxhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFBlcnNpc3RlbnROb3RpZmljYXRpb24gfSBmcm9tIFwiLi4vLi4vZGF0YS9wZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9jb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cIjtcbmltcG9ydCBcIi4vcGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbVwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm5vdGlmaWNhdGlvbi1pdGVtXCIpXG5leHBvcnQgY2xhc3MgSHVpTm90aWZpY2F0aW9uSXRlbSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5vdGlmaWNhdGlvbj86IEhhc3NFbnRpdHkgfCBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uO1xuXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLm5vdGlmaWNhdGlvbiB8fCBjaGFuZ2VkUHJvcHMuaGFzKFwibm90aWZpY2F0aW9uXCIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5ub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiZW50aXR5X2lkXCIgaW4gdGhpcy5ub3RpZmljYXRpb25cbiAgICAgID8gaHRtbGBcbiAgICAgICAgICA8Y29uZmlndXJhdG9yLW5vdGlmaWNhdGlvbi1pdGVtXG4gICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgIC5ub3RpZmljYXRpb249XCIke3RoaXMubm90aWZpY2F0aW9ufVwiXG4gICAgICAgICAgPjwvY29uZmlndXJhdG9yLW5vdGlmaWNhdGlvbi1pdGVtPlxuICAgICAgICBgXG4gICAgICA6IGh0bWxgXG4gICAgICAgICAgPHBlcnNpc3RlbnQtbm90aWZpY2F0aW9uLWl0ZW1cbiAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbj1cIiR7dGhpcy5ub3RpZmljYXRpb259XCJcbiAgICAgICAgICA+PC9wZXJzaXN0ZW50LW5vdGlmaWNhdGlvbi1pdGVtPlxuICAgICAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJub3RpZmljYXRpb24taXRlbVwiOiBIdWlOb3RpZmljYXRpb25JdGVtO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1hcmtkb3duXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXJlbGF0aXZlLXRpbWVcIjtcbmltcG9ydCB7IFBlcnNpc3RlbnROb3RpZmljYXRpb24gfSBmcm9tIFwiLi4vLi4vZGF0YS9wZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInBlcnNpc3RlbnQtbm90aWZpY2F0aW9uLWl0ZW1cIilcbmV4cG9ydCBjbGFzcyBIdWlQZXJzaXN0ZW50Tm90aWZpY2F0aW9uSXRlbSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5vdGlmaWNhdGlvbj86IFBlcnNpc3RlbnROb3RpZmljYXRpb247XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMubm90aWZpY2F0aW9uKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPG5vdGlmaWNhdGlvbi1pdGVtLXRlbXBsYXRlPlxuICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgJHt0aGlzLm5vdGlmaWNhdGlvbi50aXRsZX1cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxoYS1tYXJrZG93biBcbiAgICAgICAgICBicmVha3MgXG4gICAgICAgICAgY29udGVudD1cIiR7dGhpcy5ub3RpZmljYXRpb24ubWVzc2FnZX1cIj5cbiAgICAgICAgPC9oYS1tYXJrZG93bj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAuZGF0ZXRpbWU9XCIke3RoaXMubm90aWZpY2F0aW9uLmNyZWF0ZWRfYXR9XCJcbiAgICAgICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICAgICAgICA8cGFwZXItdG9vbHRpcFxuICAgICAgICAgICAgICA+JHt0aGlzLl9jb21wdXRlVG9vbHRpcChcbiAgICAgICAgICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25cbiAgICAgICAgICAgICAgKX08L3BhcGVyLXRvb2x0aXBcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxtd2MtYnV0dG9uIGlkPVwiZGlzbWlzc19idG5cIiBzbG90PVwiYWN0aW9uc1wiIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlRGlzbWlzc31cIlxuICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuY2FyZC5wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi5kaXNtaXNzXCJcbiAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICAgICR7dGhpcy5ub3RpZmljYXRpb24ubm90aWZpY2F0aW9uX3R5cGUgPT09IFwic3RhdHVzX2NoYW5nZWRcIiA/XG4gICAgICAgIGh0bWxgXG4gICAgICAgIDxtd2MtYnV0dG9uIGlkPVwiZ29vZF9mZWVkYmFja19idG5cIiBzbG90PVwiYWN0aW9uc1wiIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlR29vZEZlZWRiYWNrfVwiXG4gICAgICAgICAgPkdvb2QgRmVlZGJhY2s8L213Yy1idXR0b24+XG4gICAgICAgIDxtd2MtYnV0dG9uIGlkPVwiYmFkX2ZlZWRiYWNrX2J0blwiIHNsb3Q9XCJhY3Rpb25zXCIgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVCYWRGZWVkYmFja31cIlxuICAgICAgICAgID5CYWQgRmVlZGJhY2s8L213Yy1idXR0b24+XG4gICAgICAgIGBcbiAgICAgICAgOiBodG1sYGB9XG4gICAgICA8L25vdGlmaWNhdGlvbi1pdGVtLXRlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAudGltZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgIH1cbiAgICAgIGhhLXJlbGF0aXZlLXRpbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGhhLW1hcmtkb3duIHtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRGlzbWlzcygpOiB2b2lkIHtcbiAgICB0aGlzLmhhc3MhLmNhbGxTZXJ2aWNlKFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIiwgXCJkaXNtaXNzXCIsIHtcbiAgICAgIG5vdGlmaWNhdGlvbl9pZDogdGhpcy5ub3RpZmljYXRpb24hLm5vdGlmaWNhdGlvbl9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUdvb2RGZWVkYmFjaygpOiB2b2lkIHtcbiAgICB0cnl7XG4gICAgICAvLyAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfZmVlZGJhY2tfYnRuJykhIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIC8vIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFkX2ZlZWRiYWNrX2J0bicpISBhcyBIVE1MSW5wdXRFbGVtZW50KS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5ub3RpZmljYXRpb24hLmZlZWRiYWNrID0gXCJnb29kX2ZlZWRiYWNrXCI7XG4gICAgICB0aGlzLmhhc3MhLmNhbGxTZXJ2aWNlKFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIiwgXCJzZXRfZmVlZGJhY2tcIiwge1xuICAgICAgICBub3RpZmljYXRpb25faWQ6IHRoaXMubm90aWZpY2F0aW9uIS5ub3RpZmljYXRpb25faWQsXG4gICAgICAgIGZlZWRiYWNrOiB0aGlzLm5vdGlmaWNhdGlvbiEuZmVlZGJhY2ssXG4gICAgICAgIHVzZXI6IEpTT04uc3RyaW5naWZ5KHRoaXMuaGFzcz8udXNlciksXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gX2hhbmRsZUdvb2RGZWVkYmFjazonLCBlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVCYWRGZWVkYmFjaygpOiB2b2lkIHtcbiAgICB0cnl7XG4gICAgICAvLyAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhZF9mZWVkYmFja19idG4nKSEgYXMgSFRNTElucHV0RWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgLy8gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kX2ZlZWRiYWNrX2J0bicpISBhcyBIVE1MSW5wdXRFbGVtZW50KS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5ub3RpZmljYXRpb24hLmZlZWRiYWNrID0gXCJiYWRfZmVlZGJhY2tcIjtcbiAgICAgIHRoaXMuaGFzcyEuY2FsbFNlcnZpY2UoXCJwZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiLCBcInNldF9mZWVkYmFja1wiLCB7XG4gICAgICAgIG5vdGlmaWNhdGlvbl9pZDogdGhpcy5ub3RpZmljYXRpb24hLm5vdGlmaWNhdGlvbl9pZCxcbiAgICAgICAgZmVlZGJhY2s6IHRoaXMubm90aWZpY2F0aW9uIS5mZWVkYmFjayxcbiAgICAgICAgdXNlcjogSlNPTi5zdHJpbmdpZnkodGhpcy5oYXNzPy51c2VyKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBfaGFuZGxlQmFkRmVlZGJhY2s6JywgZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZVRvb2x0aXAoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBub3RpZmljYXRpb246IFBlcnNpc3RlbnROb3RpZmljYXRpb25cbiAgKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIWhhc3MgfHwgIW5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBkID0gbmV3IERhdGUobm90aWZpY2F0aW9uLmNyZWF0ZWRfYXQhKTtcbiAgICByZXR1cm4gZC50b0xvY2FsZURhdGVTdHJpbmcoaGFzcy5sYW5ndWFnZSwge1xuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICB9KTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwicGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbVwiOiBIdWlQZXJzaXN0ZW50Tm90aWZpY2F0aW9uSXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEZBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7O0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTs7QUFuQkE7QUFzQkE7QUFDQTs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFhQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQVRBO0FBV0E7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQVpBO0FBb0JBOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0REE7QUFDQTtBQXVEQTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FDY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTs7O0FBT0E7QUFDQTs7O0FBZkE7QUF1QkE7QUFqQ0E7QUFBQTtBQUFBO0FBQUE7QUFvQ0E7QUFDQTtBQURBO0FBR0E7QUF2Q0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUE1SEE7QUE2SEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pKQTtBQVFBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7O0FBQUE7QUFPQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlDQTtBQTdDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQVVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7O0FBSkE7O0FBU0E7QUFDQTs7QUFWQTtBQWFBO0FBL0JBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQVNBO0FBQ0E7QUFHQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7QUFLQTs7Ozs7QUFLQTtBQUNBOzs7QUFHQTs7Ozs7QUFRQTtBQUNBOztBQUlBO0FBRUE7O0FBRUE7O0FBSkE7O0FBOUJBO0FBd0NBO0FBbERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxREE7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0JBO0FBckVBO0FBQUE7QUFBQTtBQUFBO0FBd0VBO0FBQ0E7QUFEQTtBQUdBO0FBM0VBO0FBQUE7QUFBQTtBQUFBO0FBOEVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQTNGQTtBQUFBO0FBQUE7QUFBQTtBQThGQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUEzR0E7QUFBQTtBQUFBO0FBQUE7QUFpSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUE3SEE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
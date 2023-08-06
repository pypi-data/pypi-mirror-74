(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-dialog-suggest-card~more-info-dialog~panel-history~panel-lovelace"],{

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
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






const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktZGlhbG9nLXN1Z2dlc3QtY2FyZH5tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWhpc3Rvcnl+cGFuZWwtbG92ZWxhY2UuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mZWNoYS9zcmMvZmVjaGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXNwaW5uZXItc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlclNwaW5uZXJCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+PC9zdHlsZT5cblxuICA8ZGl2IGlkPVwic3Bpbm5lckNvbnRhaW5lclwiIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCIgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIG11bHRpcGxlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBjeWNsZXMgYmV0d2VlbiBmb3VyIGxheWVycyBvZiBjb2xvcnM7IGJ5IGRlZmF1bHQgdGhleSBhcmVcbmJsdWUsIHJlZCwgeWVsbG93IGFuZCBncmVlbi4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gY3ljbGUgYmV0d2VlbiBmb3VyXG5kaWZmZXJlbnQgY29sb3JzLiBVc2UgPHBhcGVyLXNwaW5uZXItbGl0ZT4gZm9yIHNpbmdsZSBjb2xvciBzcGlubmVycy5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZmlyc3Qgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc2Vjb25kIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtcmVkLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcmAgfCBDb2xvciBvZiB0aGUgdGhpcmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS15ZWxsb3ctNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmb3VydGggc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lclxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lcicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiIsIi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IGRhdGVzXG4gKiBAY2xhc3MgZmVjaGFcbiAqL1xudmFyIGZlY2hhID0ge307XG52YXIgdG9rZW4gPSAvZHsxLDR9fE17MSw0fXxZWSg/OllZKT98U3sxLDN9fERvfFpafChbSGhNc0RtXSlcXDE/fFthQV18XCJbXlwiXSpcInwnW14nXSonL2c7XG52YXIgdHdvRGlnaXRzID0gJ1xcXFxkXFxcXGQ/JztcbnZhciB0aHJlZURpZ2l0cyA9ICdcXFxcZHszfSc7XG52YXIgZm91ckRpZ2l0cyA9ICdcXFxcZHs0fSc7XG52YXIgd29yZCA9ICdbXlxcXFxzXSsnO1xudmFyIGxpdGVyYWwgPSAvXFxbKFteXSo/KVxcXS9nbTtcbnZhciBub29wID0gZnVuY3Rpb24gKCkge1xufTtcblxuZnVuY3Rpb24gcmVnZXhFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggL1t8XFxcXHsoKVteJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5cbmZ1bmN0aW9uIHNob3J0ZW4oYXJyLCBzTGVuKSB7XG4gIHZhciBuZXdBcnIgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIG5ld0Fyci5wdXNoKGFycltpXS5zdWJzdHIoMCwgc0xlbikpO1xuICB9XG4gIHJldHVybiBuZXdBcnI7XG59XG5cbmZ1bmN0aW9uIG1vbnRoVXBkYXRlKGFyck5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkLCB2LCBpMThuKSB7XG4gICAgdmFyIGluZGV4ID0gaTE4blthcnJOYW1lXS5pbmRleE9mKHYuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAofmluZGV4KSB7XG4gICAgICBkLm1vbnRoID0gaW5kZXg7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYWQodmFsLCBsZW4pIHtcbiAgdmFsID0gU3RyaW5nKHZhbCk7XG4gIGxlbiA9IGxlbiB8fCAyO1xuICB3aGlsZSAodmFsLmxlbmd0aCA8IGxlbikge1xuICAgIHZhbCA9ICcwJyArIHZhbDtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgZGF5TmFtZXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG52YXIgbW9udGhOYW1lcyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xudmFyIG1vbnRoTmFtZXNTaG9ydCA9IHNob3J0ZW4obW9udGhOYW1lcywgMyk7XG52YXIgZGF5TmFtZXNTaG9ydCA9IHNob3J0ZW4oZGF5TmFtZXMsIDMpO1xuZmVjaGEuaTE4biA9IHtcbiAgZGF5TmFtZXNTaG9ydDogZGF5TmFtZXNTaG9ydCxcbiAgZGF5TmFtZXM6IGRheU5hbWVzLFxuICBtb250aE5hbWVzU2hvcnQ6IG1vbnRoTmFtZXNTaG9ydCxcbiAgbW9udGhOYW1lczogbW9udGhOYW1lcyxcbiAgYW1QbTogWydhbScsICdwbSddLFxuICBEb0ZuOiBmdW5jdGlvbiBEb0ZuKEQpIHtcbiAgICByZXR1cm4gRCArIFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXVtEICUgMTAgPiAzID8gMCA6IChEIC0gRCAlIDEwICE9PSAxMCkgKiBEICUgMTBdO1xuICB9XG59O1xuXG52YXIgZm9ybWF0RmxhZ3MgPSB7XG4gIEQ6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXREYXRlKCk7XG4gIH0sXG4gIEREOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldERhdGUoKSk7XG4gIH0sXG4gIERvOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4uRG9GbihkYXRlT2JqLmdldERhdGUoKSk7XG4gIH0sXG4gIGQ6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXREYXkoKTtcbiAgfSxcbiAgZGQ6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0RGF5KCkpO1xuICB9LFxuICBkZGQ6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5kYXlOYW1lc1Nob3J0W2RhdGVPYmouZ2V0RGF5KCldO1xuICB9LFxuICBkZGRkOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4uZGF5TmFtZXNbZGF0ZU9iai5nZXREYXkoKV07XG4gIH0sXG4gIE06IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRNb250aCgpICsgMTtcbiAgfSxcbiAgTU06IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0TW9udGgoKSArIDEpO1xuICB9LFxuICBNTU06IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5tb250aE5hbWVzU2hvcnRbZGF0ZU9iai5nZXRNb250aCgpXTtcbiAgfSxcbiAgTU1NTTogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLm1vbnRoTmFtZXNbZGF0ZU9iai5nZXRNb250aCgpXTtcbiAgfSxcbiAgWVk6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKFN0cmluZyhkYXRlT2JqLmdldEZ1bGxZZWFyKCkpLCA0KS5zdWJzdHIoMik7XG4gIH0sXG4gIFlZWVk6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0RnVsbFllYXIoKSwgNCk7XG4gIH0sXG4gIGg6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpICUgMTIgfHwgMTI7XG4gIH0sXG4gIGhoOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldEhvdXJzKCkgJSAxMiB8fCAxMik7XG4gIH0sXG4gIEg6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpO1xuICB9LFxuICBISDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRIb3VycygpKTtcbiAgfSxcbiAgbTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldE1pbnV0ZXMoKTtcbiAgfSxcbiAgbW06IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0TWludXRlcygpKTtcbiAgfSxcbiAgczogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldFNlY29uZHMoKTtcbiAgfSxcbiAgc3M6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0U2Vjb25kcygpKTtcbiAgfSxcbiAgUzogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGVPYmouZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDApO1xuICB9LFxuICBTUzogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoTWF0aC5yb3VuZChkYXRlT2JqLmdldE1pbGxpc2Vjb25kcygpIC8gMTApLCAyKTtcbiAgfSxcbiAgU1NTOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldE1pbGxpc2Vjb25kcygpLCAzKTtcbiAgfSxcbiAgYTogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldEhvdXJzKCkgPCAxMiA/IGkxOG4uYW1QbVswXSA6IGkxOG4uYW1QbVsxXTtcbiAgfSxcbiAgQTogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldEhvdXJzKCkgPCAxMiA/IGkxOG4uYW1QbVswXS50b1VwcGVyQ2FzZSgpIDogaTE4bi5hbVBtWzFdLnRvVXBwZXJDYXNlKCk7XG4gIH0sXG4gIFpaOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgdmFyIG8gPSBkYXRlT2JqLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIChvID4gMCA/ICctJyA6ICcrJykgKyBwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhvKSAvIDYwKSAqIDEwMCArIE1hdGguYWJzKG8pICUgNjAsIDQpO1xuICB9XG59O1xuXG52YXIgcGFyc2VGbGFncyA9IHtcbiAgRDogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLmRheSA9IHY7XG4gIH1dLFxuICBEbzogW3R3b0RpZ2l0cyArIHdvcmQsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5kYXkgPSBwYXJzZUludCh2LCAxMCk7XG4gIH1dLFxuICBNOiBbdHdvRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubW9udGggPSB2IC0gMTtcbiAgfV0sXG4gIFlZOiBbdHdvRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIHZhciBkYSA9IG5ldyBEYXRlKCksIGNlbnQgPSArKCcnICsgZGEuZ2V0RnVsbFllYXIoKSkuc3Vic3RyKDAsIDIpO1xuICAgIGQueWVhciA9ICcnICsgKHYgPiA2OCA/IGNlbnQgLSAxIDogY2VudCkgKyB2O1xuICB9XSxcbiAgaDogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLmhvdXIgPSB2O1xuICB9XSxcbiAgbTogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLm1pbnV0ZSA9IHY7XG4gIH1dLFxuICBzOiBbdHdvRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQuc2Vjb25kID0gdjtcbiAgfV0sXG4gIFlZWVk6IFtmb3VyRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQueWVhciA9IHY7XG4gIH1dLFxuICBTOiBbJ1xcXFxkJywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLm1pbGxpc2Vjb25kID0gdiAqIDEwMDtcbiAgfV0sXG4gIFNTOiBbJ1xcXFxkezJ9JywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLm1pbGxpc2Vjb25kID0gdiAqIDEwO1xuICB9XSxcbiAgU1NTOiBbdGhyZWVEaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taWxsaXNlY29uZCA9IHY7XG4gIH1dLFxuICBkOiBbdHdvRGlnaXRzLCBub29wXSxcbiAgZGRkOiBbd29yZCwgbm9vcF0sXG4gIE1NTTogW3dvcmQsIG1vbnRoVXBkYXRlKCdtb250aE5hbWVzU2hvcnQnKV0sXG4gIE1NTU06IFt3b3JkLCBtb250aFVwZGF0ZSgnbW9udGhOYW1lcycpXSxcbiAgYTogW3dvcmQsIGZ1bmN0aW9uIChkLCB2LCBpMThuKSB7XG4gICAgdmFyIHZhbCA9IHYudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodmFsID09PSBpMThuLmFtUG1bMF0pIHtcbiAgICAgIGQuaXNQbSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsID09PSBpMThuLmFtUG1bMV0pIHtcbiAgICAgIGQuaXNQbSA9IHRydWU7XG4gICAgfVxuICB9XSxcbiAgWlo6IFsnW15cXFxcc10qP1tcXFxcK1xcXFwtXVxcXFxkXFxcXGQ6P1xcXFxkXFxcXGR8W15cXFxcc10qP1onLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIHZhciBwYXJ0cyA9ICh2ICsgJycpLm1hdGNoKC8oWystXXxcXGRcXGQpL2dpKSwgbWludXRlcztcblxuICAgIGlmIChwYXJ0cykge1xuICAgICAgbWludXRlcyA9ICsocGFydHNbMV0gKiA2MCkgKyBwYXJzZUludChwYXJ0c1syXSwgMTApO1xuICAgICAgZC50aW1lem9uZU9mZnNldCA9IHBhcnRzWzBdID09PSAnKycgPyBtaW51dGVzIDogLW1pbnV0ZXM7XG4gICAgfVxuICB9XVxufTtcbnBhcnNlRmxhZ3MuZGQgPSBwYXJzZUZsYWdzLmQ7XG5wYXJzZUZsYWdzLmRkZGQgPSBwYXJzZUZsYWdzLmRkZDtcbnBhcnNlRmxhZ3MuREQgPSBwYXJzZUZsYWdzLkQ7XG5wYXJzZUZsYWdzLm1tID0gcGFyc2VGbGFncy5tO1xucGFyc2VGbGFncy5oaCA9IHBhcnNlRmxhZ3MuSCA9IHBhcnNlRmxhZ3MuSEggPSBwYXJzZUZsYWdzLmg7XG5wYXJzZUZsYWdzLk1NID0gcGFyc2VGbGFncy5NO1xucGFyc2VGbGFncy5zcyA9IHBhcnNlRmxhZ3MucztcbnBhcnNlRmxhZ3MuQSA9IHBhcnNlRmxhZ3MuYTtcblxuXG4vLyBTb21lIGNvbW1vbiBmb3JtYXQgc3RyaW5nc1xuZmVjaGEubWFza3MgPSB7XG4gIGRlZmF1bHQ6ICdkZGQgTU1NIEREIFlZWVkgSEg6bW06c3MnLFxuICBzaG9ydERhdGU6ICdNL0QvWVknLFxuICBtZWRpdW1EYXRlOiAnTU1NIEQsIFlZWVknLFxuICBsb25nRGF0ZTogJ01NTU0gRCwgWVlZWScsXG4gIGZ1bGxEYXRlOiAnZGRkZCwgTU1NTSBELCBZWVlZJyxcbiAgc2hvcnRUaW1lOiAnSEg6bW0nLFxuICBtZWRpdW1UaW1lOiAnSEg6bW06c3MnLFxuICBsb25nVGltZTogJ0hIOm1tOnNzLlNTUydcbn07XG5cbi8qKipcbiAqIEZvcm1hdCBhIGRhdGVcbiAqIEBtZXRob2QgZm9ybWF0XG4gKiBAcGFyYW0ge0RhdGV8bnVtYmVyfSBkYXRlT2JqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFzayBGb3JtYXQgb2YgdGhlIGRhdGUsIGkuZS4gJ21tLWRkLXl5JyBvciAnc2hvcnREYXRlJ1xuICovXG5mZWNoYS5mb3JtYXQgPSBmdW5jdGlvbiAoZGF0ZU9iaiwgbWFzaywgaTE4blNldHRpbmdzKSB7XG4gIHZhciBpMThuID0gaTE4blNldHRpbmdzIHx8IGZlY2hhLmkxOG47XG5cbiAgaWYgKHR5cGVvZiBkYXRlT2JqID09PSAnbnVtYmVyJykge1xuICAgIGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlT2JqKTtcbiAgfVxuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0ZU9iaikgIT09ICdbb2JqZWN0IERhdGVdJyB8fCBpc05hTihkYXRlT2JqLmdldFRpbWUoKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRGF0ZSBpbiBmZWNoYS5mb3JtYXQnKTtcbiAgfVxuXG4gIG1hc2sgPSBmZWNoYS5tYXNrc1ttYXNrXSB8fCBtYXNrIHx8IGZlY2hhLm1hc2tzWydkZWZhdWx0J107XG5cbiAgdmFyIGxpdGVyYWxzID0gW107XG5cbiAgLy8gTWFrZSBsaXRlcmFscyBpbmFjdGl2ZSBieSByZXBsYWNpbmcgdGhlbSB3aXRoID8/XG4gIG1hc2sgPSBtYXNrLnJlcGxhY2UobGl0ZXJhbCwgZnVuY3Rpb24oJDAsICQxKSB7XG4gICAgbGl0ZXJhbHMucHVzaCgkMSk7XG4gICAgcmV0dXJuICc/Pyc7XG4gIH0pO1xuICAvLyBBcHBseSBmb3JtYXR0aW5nIHJ1bGVzXG4gIG1hc2sgPSBtYXNrLnJlcGxhY2UodG9rZW4sIGZ1bmN0aW9uICgkMCkge1xuICAgIHJldHVybiAkMCBpbiBmb3JtYXRGbGFncyA/IGZvcm1hdEZsYWdzWyQwXShkYXRlT2JqLCBpMThuKSA6ICQwLnNsaWNlKDEsICQwLmxlbmd0aCAtIDEpO1xuICB9KTtcbiAgLy8gSW5saW5lIGxpdGVyYWwgdmFsdWVzIGJhY2sgaW50byB0aGUgZm9ybWF0dGVkIHZhbHVlXG4gIHJldHVybiBtYXNrLnJlcGxhY2UoL1xcP1xcPy9nLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGl0ZXJhbHMuc2hpZnQoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgZGF0ZSBzdHJpbmcgaW50byBhbiBvYmplY3QsIGNoYW5nZXMgLSBpbnRvIC9cbiAqIEBtZXRob2QgcGFyc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RyIERhdGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IERhdGUgcGFyc2UgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZXxib29sZWFufVxuICovXG5mZWNoYS5wYXJzZSA9IGZ1bmN0aW9uIChkYXRlU3RyLCBmb3JtYXQsIGkxOG5TZXR0aW5ncykge1xuICB2YXIgaTE4biA9IGkxOG5TZXR0aW5ncyB8fCBmZWNoYS5pMThuO1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBmb3JtYXQgaW4gZmVjaGEucGFyc2UnKTtcbiAgfVxuXG4gIGZvcm1hdCA9IGZlY2hhLm1hc2tzW2Zvcm1hdF0gfHwgZm9ybWF0O1xuXG4gIC8vIEF2b2lkIHJlZ3VsYXIgZXhwcmVzc2lvbiBkZW5pYWwgb2Ygc2VydmljZSwgZmFpbCBlYXJseSBmb3IgcmVhbGx5IGxvbmcgc3RyaW5nc1xuICAvLyBodHRwczovL3d3dy5vd2FzcC5vcmcvaW5kZXgucGhwL1JlZ3VsYXJfZXhwcmVzc2lvbl9EZW5pYWxfb2ZfU2VydmljZV8tX1JlRG9TXG4gIGlmIChkYXRlU3RyLmxlbmd0aCA+IDEwMDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBkYXRlSW5mbyA9IHt9O1xuICB2YXIgcGFyc2VJbmZvID0gW107XG4gIHZhciBuZXdGb3JtYXQgPSByZWdleEVzY2FwZShmb3JtYXQpLnJlcGxhY2UodG9rZW4sIGZ1bmN0aW9uICgkMCkge1xuICAgIGlmIChwYXJzZUZsYWdzWyQwXSkge1xuICAgICAgdmFyIGluZm8gPSBwYXJzZUZsYWdzWyQwXTtcbiAgICAgIHBhcnNlSW5mby5wdXNoKGluZm9bMV0pO1xuICAgICAgcmV0dXJuICcoJyArIGluZm9bMF0gKyAnKSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICQwO1xuICB9KTtcbiAgdmFyIG1hdGNoZXMgPSBkYXRlU3RyLm1hdGNoKG5ldyBSZWdFeHAobmV3Rm9ybWF0LCAnaScpKTtcbiAgaWYgKCFtYXRjaGVzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJzZUluZm9baSAtIDFdKGRhdGVJbmZvLCBtYXRjaGVzW2ldLCBpMThuKTtcbiAgfVxuXG4gIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGlmIChkYXRlSW5mby5pc1BtID09PSB0cnVlICYmIGRhdGVJbmZvLmhvdXIgIT0gbnVsbCAmJiArZGF0ZUluZm8uaG91ciAhPT0gMTIpIHtcbiAgICBkYXRlSW5mby5ob3VyID0gK2RhdGVJbmZvLmhvdXIgKyAxMjtcbiAgfSBlbHNlIGlmIChkYXRlSW5mby5pc1BtID09PSBmYWxzZSAmJiArZGF0ZUluZm8uaG91ciA9PT0gMTIpIHtcbiAgICBkYXRlSW5mby5ob3VyID0gMDtcbiAgfVxuXG4gIHZhciBkYXRlO1xuICBpZiAoZGF0ZUluZm8udGltZXpvbmVPZmZzZXQgIT0gbnVsbCkge1xuICAgIGRhdGVJbmZvLm1pbnV0ZSA9ICsoZGF0ZUluZm8ubWludXRlIHx8IDApIC0gK2RhdGVJbmZvLnRpbWV6b25lT2Zmc2V0O1xuICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlSW5mby55ZWFyIHx8IHRvZGF5LmdldEZ1bGxZZWFyKCksIGRhdGVJbmZvLm1vbnRoIHx8IDAsIGRhdGVJbmZvLmRheSB8fCAxLFxuICAgICAgZGF0ZUluZm8uaG91ciB8fCAwLCBkYXRlSW5mby5taW51dGUgfHwgMCwgZGF0ZUluZm8uc2Vjb25kIHx8IDAsIGRhdGVJbmZvLm1pbGxpc2Vjb25kIHx8IDApKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZUluZm8ueWVhciB8fCB0b2RheS5nZXRGdWxsWWVhcigpLCBkYXRlSW5mby5tb250aCB8fCAwLCBkYXRlSW5mby5kYXkgfHwgMSxcbiAgICAgIGRhdGVJbmZvLmhvdXIgfHwgMCwgZGF0ZUluZm8ubWludXRlIHx8IDAsIGRhdGVJbmZvLnNlY29uZCB8fCAwLCBkYXRlSW5mby5taWxsaXNlY29uZCB8fCAwKTtcbiAgfVxuICByZXR1cm4gZGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZlY2hhO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTtBQUVBO0FBRUE7QUFMQTs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxGQTtBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXREQTtBQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
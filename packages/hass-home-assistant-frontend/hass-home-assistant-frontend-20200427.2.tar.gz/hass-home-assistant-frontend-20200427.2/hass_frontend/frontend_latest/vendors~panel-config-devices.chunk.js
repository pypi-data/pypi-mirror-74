(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-devices"],{

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctZGV2aWNlcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmVjaGEvc3JjL2ZlY2hhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgZGF0ZXNcbiAqIEBjbGFzcyBmZWNoYVxuICovXG52YXIgZmVjaGEgPSB7fTtcbnZhciB0b2tlbiA9IC9kezEsNH18TXsxLDR9fFlZKD86WVkpP3xTezEsM318RG98Wlp8KFtIaE1zRG1dKVxcMT98W2FBXXxcIlteXCJdKlwifCdbXiddKicvZztcbnZhciB0d29EaWdpdHMgPSAnXFxcXGRcXFxcZD8nO1xudmFyIHRocmVlRGlnaXRzID0gJ1xcXFxkezN9JztcbnZhciBmb3VyRGlnaXRzID0gJ1xcXFxkezR9JztcbnZhciB3b3JkID0gJ1teXFxcXHNdKyc7XG52YXIgbGl0ZXJhbCA9IC9cXFsoW15dKj8pXFxdL2dtO1xudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7XG59O1xuXG5mdW5jdGlvbiByZWdleEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvW3xcXFxceygpW14kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gc2hvcnRlbihhcnIsIHNMZW4pIHtcbiAgdmFyIG5ld0FyciA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbmV3QXJyLnB1c2goYXJyW2ldLnN1YnN0cigwLCBzTGVuKSk7XG4gIH1cbiAgcmV0dXJuIG5ld0Fycjtcbn1cblxuZnVuY3Rpb24gbW9udGhVcGRhdGUoYXJyTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGQsIHYsIGkxOG4pIHtcbiAgICB2YXIgaW5kZXggPSBpMThuW2Fyck5hbWVdLmluZGV4T2Yodi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHYuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmICh+aW5kZXgpIHtcbiAgICAgIGQubW9udGggPSBpbmRleDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhZCh2YWwsIGxlbikge1xuICB2YWwgPSBTdHJpbmcodmFsKTtcbiAgbGVuID0gbGVuIHx8IDI7XG4gIHdoaWxlICh2YWwubGVuZ3RoIDwgbGVuKSB7XG4gICAgdmFsID0gJzAnICsgdmFsO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBkYXlOYW1lcyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbnZhciBtb250aE5hbWVzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG52YXIgbW9udGhOYW1lc1Nob3J0ID0gc2hvcnRlbihtb250aE5hbWVzLCAzKTtcbnZhciBkYXlOYW1lc1Nob3J0ID0gc2hvcnRlbihkYXlOYW1lcywgMyk7XG5mZWNoYS5pMThuID0ge1xuICBkYXlOYW1lc1Nob3J0OiBkYXlOYW1lc1Nob3J0LFxuICBkYXlOYW1lczogZGF5TmFtZXMsXG4gIG1vbnRoTmFtZXNTaG9ydDogbW9udGhOYW1lc1Nob3J0LFxuICBtb250aE5hbWVzOiBtb250aE5hbWVzLFxuICBhbVBtOiBbJ2FtJywgJ3BtJ10sXG4gIERvRm46IGZ1bmN0aW9uIERvRm4oRCkge1xuICAgIHJldHVybiBEICsgWyd0aCcsICdzdCcsICduZCcsICdyZCddW0QgJSAxMCA+IDMgPyAwIDogKEQgLSBEICUgMTAgIT09IDEwKSAqIEQgJSAxMF07XG4gIH1cbn07XG5cbnZhciBmb3JtYXRGbGFncyA9IHtcbiAgRDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldERhdGUoKTtcbiAgfSxcbiAgREQ6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0RGF0ZSgpKTtcbiAgfSxcbiAgRG86IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5Eb0ZuKGRhdGVPYmouZ2V0RGF0ZSgpKTtcbiAgfSxcbiAgZDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldERheSgpO1xuICB9LFxuICBkZDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXREYXkoKSk7XG4gIH0sXG4gIGRkZDogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLmRheU5hbWVzU2hvcnRbZGF0ZU9iai5nZXREYXkoKV07XG4gIH0sXG4gIGRkZGQ6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5kYXlOYW1lc1tkYXRlT2JqLmdldERheSgpXTtcbiAgfSxcbiAgTTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldE1vbnRoKCkgKyAxO1xuICB9LFxuICBNTTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRNb250aCgpICsgMSk7XG4gIH0sXG4gIE1NTTogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLm1vbnRoTmFtZXNTaG9ydFtkYXRlT2JqLmdldE1vbnRoKCldO1xuICB9LFxuICBNTU1NOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4ubW9udGhOYW1lc1tkYXRlT2JqLmdldE1vbnRoKCldO1xuICB9LFxuICBZWTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoU3RyaW5nKGRhdGVPYmouZ2V0RnVsbFllYXIoKSksIDQpLnN1YnN0cigyKTtcbiAgfSxcbiAgWVlZWTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCA0KTtcbiAgfSxcbiAgaDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldEhvdXJzKCkgJSAxMiB8fCAxMjtcbiAgfSxcbiAgaGg6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyIHx8IDEyKTtcbiAgfSxcbiAgSDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldEhvdXJzKCk7XG4gIH0sXG4gIEhIOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldEhvdXJzKCkpO1xuICB9LFxuICBtOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0TWludXRlcygpO1xuICB9LFxuICBtbTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRNaW51dGVzKCkpO1xuICB9LFxuICBzOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0U2Vjb25kcygpO1xuICB9LFxuICBzczogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRTZWNvbmRzKCkpO1xuICB9LFxuICBTOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMCk7XG4gIH0sXG4gIFNTOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChNYXRoLnJvdW5kKGRhdGVPYmouZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCksIDIpO1xuICB9LFxuICBTU1M6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0TWlsbGlzZWNvbmRzKCksIDMpO1xuICB9LFxuICBhOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKSA8IDEyID8gaTE4bi5hbVBtWzBdIDogaTE4bi5hbVBtWzFdO1xuICB9LFxuICBBOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKSA8IDEyID8gaTE4bi5hbVBtWzBdLnRvVXBwZXJDYXNlKCkgOiBpMThuLmFtUG1bMV0udG9VcHBlckNhc2UoKTtcbiAgfSxcbiAgWlo6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICB2YXIgbyA9IGRhdGVPYmouZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICByZXR1cm4gKG8gPiAwID8gJy0nIDogJysnKSArIHBhZChNYXRoLmZsb29yKE1hdGguYWJzKG8pIC8gNjApICogMTAwICsgTWF0aC5hYnMobykgJSA2MCwgNCk7XG4gIH1cbn07XG5cbnZhciBwYXJzZUZsYWdzID0ge1xuICBEOiBbdHdvRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQuZGF5ID0gdjtcbiAgfV0sXG4gIERvOiBbdHdvRGlnaXRzICsgd29yZCwgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLmRheSA9IHBhcnNlSW50KHYsIDEwKTtcbiAgfV0sXG4gIE06IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5tb250aCA9IHYgLSAxO1xuICB9XSxcbiAgWVk6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgdmFyIGRhID0gbmV3IERhdGUoKSwgY2VudCA9ICsoJycgKyBkYS5nZXRGdWxsWWVhcigpKS5zdWJzdHIoMCwgMik7XG4gICAgZC55ZWFyID0gJycgKyAodiA+IDY4ID8gY2VudCAtIDEgOiBjZW50KSArIHY7XG4gIH1dLFxuICBoOiBbdHdvRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQuaG91ciA9IHY7XG4gIH1dLFxuICBtOiBbdHdvRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWludXRlID0gdjtcbiAgfV0sXG4gIHM6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5zZWNvbmQgPSB2O1xuICB9XSxcbiAgWVlZWTogW2ZvdXJEaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC55ZWFyID0gdjtcbiAgfV0sXG4gIFM6IFsnXFxcXGQnLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWlsbGlzZWNvbmQgPSB2ICogMTAwO1xuICB9XSxcbiAgU1M6IFsnXFxcXGR7Mn0nLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWlsbGlzZWNvbmQgPSB2ICogMTA7XG4gIH1dLFxuICBTU1M6IFt0aHJlZURpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLm1pbGxpc2Vjb25kID0gdjtcbiAgfV0sXG4gIGQ6IFt0d29EaWdpdHMsIG5vb3BdLFxuICBkZGQ6IFt3b3JkLCBub29wXSxcbiAgTU1NOiBbd29yZCwgbW9udGhVcGRhdGUoJ21vbnRoTmFtZXNTaG9ydCcpXSxcbiAgTU1NTTogW3dvcmQsIG1vbnRoVXBkYXRlKCdtb250aE5hbWVzJyldLFxuICBhOiBbd29yZCwgZnVuY3Rpb24gKGQsIHYsIGkxOG4pIHtcbiAgICB2YXIgdmFsID0gdi50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh2YWwgPT09IGkxOG4uYW1QbVswXSkge1xuICAgICAgZC5pc1BtID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWwgPT09IGkxOG4uYW1QbVsxXSkge1xuICAgICAgZC5pc1BtID0gdHJ1ZTtcbiAgICB9XG4gIH1dLFxuICBaWjogWydbXlxcXFxzXSo/W1xcXFwrXFxcXC1dXFxcXGRcXFxcZDo/XFxcXGRcXFxcZHxbXlxcXFxzXSo/WicsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgdmFyIHBhcnRzID0gKHYgKyAnJykubWF0Y2goLyhbKy1dfFxcZFxcZCkvZ2kpLCBtaW51dGVzO1xuXG4gICAgaWYgKHBhcnRzKSB7XG4gICAgICBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArIHBhcnNlSW50KHBhcnRzWzJdLCAxMCk7XG4gICAgICBkLnRpbWV6b25lT2Zmc2V0ID0gcGFydHNbMF0gPT09ICcrJyA/IG1pbnV0ZXMgOiAtbWludXRlcztcbiAgICB9XG4gIH1dXG59O1xucGFyc2VGbGFncy5kZCA9IHBhcnNlRmxhZ3MuZDtcbnBhcnNlRmxhZ3MuZGRkZCA9IHBhcnNlRmxhZ3MuZGRkO1xucGFyc2VGbGFncy5ERCA9IHBhcnNlRmxhZ3MuRDtcbnBhcnNlRmxhZ3MubW0gPSBwYXJzZUZsYWdzLm07XG5wYXJzZUZsYWdzLmhoID0gcGFyc2VGbGFncy5IID0gcGFyc2VGbGFncy5ISCA9IHBhcnNlRmxhZ3MuaDtcbnBhcnNlRmxhZ3MuTU0gPSBwYXJzZUZsYWdzLk07XG5wYXJzZUZsYWdzLnNzID0gcGFyc2VGbGFncy5zO1xucGFyc2VGbGFncy5BID0gcGFyc2VGbGFncy5hO1xuXG5cbi8vIFNvbWUgY29tbW9uIGZvcm1hdCBzdHJpbmdzXG5mZWNoYS5tYXNrcyA9IHtcbiAgZGVmYXVsdDogJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcycsXG4gIHNob3J0RGF0ZTogJ00vRC9ZWScsXG4gIG1lZGl1bURhdGU6ICdNTU0gRCwgWVlZWScsXG4gIGxvbmdEYXRlOiAnTU1NTSBELCBZWVlZJyxcbiAgZnVsbERhdGU6ICdkZGRkLCBNTU1NIEQsIFlZWVknLFxuICBzaG9ydFRpbWU6ICdISDptbScsXG4gIG1lZGl1bVRpbWU6ICdISDptbTpzcycsXG4gIGxvbmdUaW1lOiAnSEg6bW06c3MuU1NTJ1xufTtcblxuLyoqKlxuICogRm9ybWF0IGEgZGF0ZVxuICogQG1ldGhvZCBmb3JtYXRcbiAqIEBwYXJhbSB7RGF0ZXxudW1iZXJ9IGRhdGVPYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXNrIEZvcm1hdCBvZiB0aGUgZGF0ZSwgaS5lLiAnbW0tZGQteXknIG9yICdzaG9ydERhdGUnXG4gKi9cbmZlY2hhLmZvcm1hdCA9IGZ1bmN0aW9uIChkYXRlT2JqLCBtYXNrLCBpMThuU2V0dGluZ3MpIHtcbiAgdmFyIGkxOG4gPSBpMThuU2V0dGluZ3MgfHwgZmVjaGEuaTE4bjtcblxuICBpZiAodHlwZW9mIGRhdGVPYmogPT09ICdudW1iZXInKSB7XG4gICAgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGVPYmopO1xuICB9XG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRlT2JqKSAhPT0gJ1tvYmplY3QgRGF0ZV0nIHx8IGlzTmFOKGRhdGVPYmouZ2V0VGltZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBEYXRlIGluIGZlY2hhLmZvcm1hdCcpO1xuICB9XG5cbiAgbWFzayA9IGZlY2hhLm1hc2tzW21hc2tdIHx8IG1hc2sgfHwgZmVjaGEubWFza3NbJ2RlZmF1bHQnXTtcblxuICB2YXIgbGl0ZXJhbHMgPSBbXTtcblxuICAvLyBNYWtlIGxpdGVyYWxzIGluYWN0aXZlIGJ5IHJlcGxhY2luZyB0aGVtIHdpdGggPz9cbiAgbWFzayA9IG1hc2sucmVwbGFjZShsaXRlcmFsLCBmdW5jdGlvbigkMCwgJDEpIHtcbiAgICBsaXRlcmFscy5wdXNoKCQxKTtcbiAgICByZXR1cm4gJz8/JztcbiAgfSk7XG4gIC8vIEFwcGx5IGZvcm1hdHRpbmcgcnVsZXNcbiAgbWFzayA9IG1hc2sucmVwbGFjZSh0b2tlbiwgZnVuY3Rpb24gKCQwKSB7XG4gICAgcmV0dXJuICQwIGluIGZvcm1hdEZsYWdzID8gZm9ybWF0RmxhZ3NbJDBdKGRhdGVPYmosIGkxOG4pIDogJDAuc2xpY2UoMSwgJDAubGVuZ3RoIC0gMSk7XG4gIH0pO1xuICAvLyBJbmxpbmUgbGl0ZXJhbCB2YWx1ZXMgYmFjayBpbnRvIHRoZSBmb3JtYXR0ZWQgdmFsdWVcbiAgcmV0dXJuIG1hc2sucmVwbGFjZSgvXFw/XFw/L2csIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsaXRlcmFscy5zaGlmdCgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUGFyc2UgYSBkYXRlIHN0cmluZyBpbnRvIGFuIG9iamVjdCwgY2hhbmdlcyAtIGludG8gL1xuICogQG1ldGhvZCBwYXJzZVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVTdHIgRGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgRGF0ZSBwYXJzZSBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfGJvb2xlYW59XG4gKi9cbmZlY2hhLnBhcnNlID0gZnVuY3Rpb24gKGRhdGVTdHIsIGZvcm1hdCwgaTE4blNldHRpbmdzKSB7XG4gIHZhciBpMThuID0gaTE4blNldHRpbmdzIHx8IGZlY2hhLmkxOG47XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGZvcm1hdCBpbiBmZWNoYS5wYXJzZScpO1xuICB9XG5cbiAgZm9ybWF0ID0gZmVjaGEubWFza3NbZm9ybWF0XSB8fCBmb3JtYXQ7XG5cbiAgLy8gQXZvaWQgcmVndWxhciBleHByZXNzaW9uIGRlbmlhbCBvZiBzZXJ2aWNlLCBmYWlsIGVhcmx5IGZvciByZWFsbHkgbG9uZyBzdHJpbmdzXG4gIC8vIGh0dHBzOi8vd3d3Lm93YXNwLm9yZy9pbmRleC5waHAvUmVndWxhcl9leHByZXNzaW9uX0RlbmlhbF9vZl9TZXJ2aWNlXy1fUmVEb1NcbiAgaWYgKGRhdGVTdHIubGVuZ3RoID4gMTAwMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGRhdGVJbmZvID0ge307XG4gIHZhciBwYXJzZUluZm8gPSBbXTtcbiAgdmFyIG5ld0Zvcm1hdCA9IHJlZ2V4RXNjYXBlKGZvcm1hdCkucmVwbGFjZSh0b2tlbiwgZnVuY3Rpb24gKCQwKSB7XG4gICAgaWYgKHBhcnNlRmxhZ3NbJDBdKSB7XG4gICAgICB2YXIgaW5mbyA9IHBhcnNlRmxhZ3NbJDBdO1xuICAgICAgcGFyc2VJbmZvLnB1c2goaW5mb1sxXSk7XG4gICAgICByZXR1cm4gJygnICsgaW5mb1swXSArICcpJztcbiAgICB9XG5cbiAgICByZXR1cm4gJDA7XG4gIH0pO1xuICB2YXIgbWF0Y2hlcyA9IGRhdGVTdHIubWF0Y2gobmV3IFJlZ0V4cChuZXdGb3JtYXQsICdpJykpO1xuICBpZiAoIW1hdGNoZXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHBhcnNlSW5mb1tpIC0gMV0oZGF0ZUluZm8sIG1hdGNoZXNbaV0sIGkxOG4pO1xuICB9XG5cbiAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgaWYgKGRhdGVJbmZvLmlzUG0gPT09IHRydWUgJiYgZGF0ZUluZm8uaG91ciAhPSBudWxsICYmICtkYXRlSW5mby5ob3VyICE9PSAxMikge1xuICAgIGRhdGVJbmZvLmhvdXIgPSArZGF0ZUluZm8uaG91ciArIDEyO1xuICB9IGVsc2UgaWYgKGRhdGVJbmZvLmlzUG0gPT09IGZhbHNlICYmICtkYXRlSW5mby5ob3VyID09PSAxMikge1xuICAgIGRhdGVJbmZvLmhvdXIgPSAwO1xuICB9XG5cbiAgdmFyIGRhdGU7XG4gIGlmIChkYXRlSW5mby50aW1lem9uZU9mZnNldCAhPSBudWxsKSB7XG4gICAgZGF0ZUluZm8ubWludXRlID0gKyhkYXRlSW5mby5taW51dGUgfHwgMCkgLSArZGF0ZUluZm8udGltZXpvbmVPZmZzZXQ7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGVJbmZvLnllYXIgfHwgdG9kYXkuZ2V0RnVsbFllYXIoKSwgZGF0ZUluZm8ubW9udGggfHwgMCwgZGF0ZUluZm8uZGF5IHx8IDEsXG4gICAgICBkYXRlSW5mby5ob3VyIHx8IDAsIGRhdGVJbmZvLm1pbnV0ZSB8fCAwLCBkYXRlSW5mby5zZWNvbmQgfHwgMCwgZGF0ZUluZm8ubWlsbGlzZWNvbmQgfHwgMCkpO1xuICB9IGVsc2Uge1xuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlSW5mby55ZWFyIHx8IHRvZGF5LmdldEZ1bGxZZWFyKCksIGRhdGVJbmZvLm1vbnRoIHx8IDAsIGRhdGVJbmZvLmRheSB8fCAxLFxuICAgICAgZGF0ZUluZm8uaG91ciB8fCAwLCBkYXRlSW5mby5taW51dGUgfHwgMCwgZGF0ZUluZm8uc2Vjb25kIHx8IDAsIGRhdGVJbmZvLm1pbGxpc2Vjb25kIHx8IDApO1xuICB9XG4gIHJldHVybiBkYXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmVjaGE7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQTRCQTtBQUNBO0FBN0JBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEZBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
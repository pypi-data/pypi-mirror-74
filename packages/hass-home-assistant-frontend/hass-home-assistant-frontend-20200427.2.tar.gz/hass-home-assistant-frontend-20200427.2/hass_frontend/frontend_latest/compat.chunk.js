(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["compat"],{

/***/ "./src/entrypoints/compatibility.ts":
/*!******************************************!*\
  !*** ./src/entrypoints/compatibility.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-object-assign */ "./node_modules/es6-object-assign/index.js");
/* harmony import */ var es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdn_polyfills_Array_prototype_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdn-polyfills/Array.prototype.includes */ "./node_modules/mdn-polyfills/Array.prototype.includes.js");
/* harmony import */ var mdn_polyfills_Array_prototype_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Array_prototype_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unfetch_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unfetch/polyfill */ "./node_modules/unfetch/polyfill/polyfill.mjs");




es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill();

if (Object.values === undefined) {
  Object.values = target => {
    return Object.keys(target).map(key => target[key]);
  };
}
/* eslint-disable */
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength >>= 0; // truncate if number, or convert non-number to 0;

    padString = String(typeof padString !== "undefined" ? padString : " ");

    if (this.length >= targetLength) {
      return String(this);
    }

    targetLength -= this.length;

    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
    }

    return padString.slice(0, targetLength) + String(this);
  };
}
/* eslint-enable */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGF0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL2NvbXBhdGliaWxpdHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9iakFzc2lnbiBmcm9tIFwiZXM2LW9iamVjdC1hc3NpZ25cIjtcbmltcG9ydCBcIm1kbi1wb2x5ZmlsbHMvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXCI7XG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcbmltcG9ydCBcInVuZmV0Y2gvcG9seWZpbGxcIjtcblxub2JqQXNzaWduLnBvbHlmaWxsKCk7XG5cbmlmIChPYmplY3QudmFsdWVzID09PSB1bmRlZmluZWQpIHtcbiAgT2JqZWN0LnZhbHVlcyA9ICh0YXJnZXQpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGFyZ2V0KS5tYXAoKGtleSkgPT4gdGFyZ2V0W2tleV0pO1xuICB9O1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3V4aXR0ZW4vcG9seWZpbGwvYmxvYi9tYXN0ZXIvc3RyaW5nLnBvbHlmaWxsLmpzXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvcGFkU3RhcnRcbmlmICghU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCkge1xuICBTdHJpbmcucHJvdG90eXBlLnBhZFN0YXJ0ID0gZnVuY3Rpb24gcGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpIHtcbiAgICB0YXJnZXRMZW5ndGggPj49IDA7IC8vIHRydW5jYXRlIGlmIG51bWJlciwgb3IgY29udmVydCBub24tbnVtYmVyIHRvIDA7XG4gICAgcGFkU3RyaW5nID0gU3RyaW5nKHR5cGVvZiBwYWRTdHJpbmcgIT09IFwidW5kZWZpbmVkXCIgPyBwYWRTdHJpbmcgOiBcIiBcIik7XG4gICAgaWYgKHRoaXMubGVuZ3RoID49IHRhcmdldExlbmd0aCkge1xuICAgICAgcmV0dXJuIFN0cmluZyh0aGlzKTtcbiAgICB9XG4gICAgdGFyZ2V0TGVuZ3RoIC09IHRoaXMubGVuZ3RoO1xuICAgIGlmICh0YXJnZXRMZW5ndGggPiBwYWRTdHJpbmcubGVuZ3RoKSB7XG4gICAgICBwYWRTdHJpbmcgKz0gcGFkU3RyaW5nLnJlcGVhdCh0YXJnZXRMZW5ndGggLyBwYWRTdHJpbmcubGVuZ3RoKTsgLy8gYXBwZW5kIHRvIG9yaWdpbmFsIHRvIGVuc3VyZSB3ZSBhcmUgbG9uZ2VyIHRoYW4gbmVlZGVkXG4gICAgfVxuICAgIHJldHVybiBwYWRTdHJpbmcuc2xpY2UoMCwgdGFyZ2V0TGVuZ3RoKSArIFN0cmluZyh0aGlzKTtcbiAgfTtcbn1cbi8qIGVzbGludC1lbmFibGUgKi9cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
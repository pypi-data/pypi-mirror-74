(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-iframe"],{

/***/ "./src/panels/iframe/ha-panel-iframe.js":
/*!**********************************************!*\
  !*** ./src/panels/iframe/ha-panel-iframe.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");


/* eslint-plugin-disable lit */





class HaPanelIframe extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        iframe {
          border: 0;
          width: 100%;
          position: absolute;
          height: calc(100% - 64px);
          background-color: var(--primary-background-color);
        }
      </style>
      <app-toolbar>
        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>
        <div main-title>[[panel.title]]</div>
      </app-toolbar>

      <iframe
        src="[[panel.config.url]]"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      panel: Object
    };
  }

}

customElements.define("ha-panel-iframe", HaPanelIframe);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaWZyYW1lLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9pZnJhbWUvaGEtcGFuZWwtaWZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFQYW5lbElmcmFtZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgPGhhLW1lbnUtYnV0dG9uIGhhc3M9XCJbW2hhc3NdXVwiIG5hcnJvdz1cIltbbmFycm93XV1cIj48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1twYW5lbC50aXRsZV1dPC9kaXY+XG4gICAgICA8L2FwcC10b29sYmFyPlxuXG4gICAgICA8aWZyYW1lXG4gICAgICAgIHNyYz1cIltbcGFuZWwuY29uZmlnLnVybF1dXCJcbiAgICAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LXBvcHVwcyBhbGxvdy1wb2ludGVyLWxvY2sgYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXG4gICAgICAgIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIlxuICAgICAgICB3ZWJraXRhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCJcbiAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiXG4gICAgICA+PC9pZnJhbWU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuICAgICAgcGFuZWw6IE9iamVjdCxcbiAgICB9O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhbmVsLWlmcmFtZVwiLCBIYVBhbmVsSWZyYW1lKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQWxDQTtBQUNBO0FBbUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
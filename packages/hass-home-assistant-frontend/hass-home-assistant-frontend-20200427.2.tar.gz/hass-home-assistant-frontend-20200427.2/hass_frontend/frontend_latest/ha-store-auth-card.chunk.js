(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["ha-store-auth-card"],{

/***/ "./src/dialogs/ha-store-auth-card.js":
/*!*******************************************!*\
  !*** ./src/dialogs/ha-store-auth-card.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_card_paper_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-card/paper-card */ "./node_modules/@polymer/paper-card/paper-card.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/auth/token_storage */ "./src/common/auth/token_storage.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/ha-style */ "./src/resources/ha-style.ts");


/* eslint-plugin-disable lit */






class HaStoreAuth extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        paper-card {
          position: fixed;
          padding: 8px 0;
          bottom: 16px;
          right: 16px;
        }

        .card-content {
          color: var(--primary-text-color);
        }

        .card-actions {
          text-align: right;
          border-top: 0;
          margin-right: -4px;
        }

        :host(.small) paper-card {
          bottom: 0;
          left: 0;
          right: 0;
        }
      </style>
      <paper-card elevation="4">
        <div class="card-content">[[localize('ui.auth_store.ask')]]</div>
        <div class="card-actions">
          <mwc-button on-click="_done"
            >[[localize('ui.auth_store.decline')]]</mwc-button
          >
          <mwc-button raised on-click="_save"
            >[[localize('ui.auth_store.confirm')]]</mwc-button
          >
        </div>
      </paper-card>
    `;
  }

  static get properties() {
    return {
      hass: Object
    };
  }

  ready() {
    super.ready();
    this.classList.toggle("small", window.innerWidth < 600);
  }

  _save() {
    Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_3__["enableWrite"])();

    this._done();
  }

  _done() {
    const card = this.shadowRoot.querySelector("paper-card");
    card.style.transition = "bottom .25s";
    card.style.bottom = `-${card.offsetHeight + 8}px`;
    setTimeout(() => this.parentNode.removeChild(this), 300);
  }

}

customElements.define("ha-store-auth-card", HaStoreAuth);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtc3RvcmUtYXV0aC1jYXJkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvaGEtc3RvcmUtYXV0aC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2FyZC9wYXBlci1jYXJkXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgZW5hYmxlV3JpdGUgfSBmcm9tIFwiLi4vY29tbW9uL2F1dGgvdG9rZW5fc3RvcmFnZVwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IFwiLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmNsYXNzIEhhU3RvcmVBdXRoIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPlxuICAgICAgICBwYXBlci1jYXJkIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KC5zbWFsbCkgcGFwZXItY2FyZCB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItY2FyZCBlbGV2YXRpb249XCI0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5bW2xvY2FsaXplKCd1aS5hdXRoX3N0b3JlLmFzaycpXV08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2RvbmVcIlxuICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmF1dGhfc3RvcmUuZGVjbGluZScpXV08L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkIG9uLWNsaWNrPVwiX3NhdmVcIlxuICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmF1dGhfc3RvcmUuY29uZmlybScpXV08L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9wYXBlci1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJzbWFsbFwiLCB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCk7XG4gIH1cblxuICBfc2F2ZSgpIHtcbiAgICBlbmFibGVXcml0ZSgpO1xuICAgIHRoaXMuX2RvbmUoKTtcbiAgfVxuXG4gIF9kb25lKCkge1xuICAgIGNvbnN0IGNhcmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInBhcGVyLWNhcmRcIik7XG4gICAgY2FyZC5zdHlsZS50cmFuc2l0aW9uID0gXCJib3R0b20gLjI1c1wiO1xuICAgIGNhcmQuc3R5bGUuYm90dG9tID0gYC0ke2NhcmQub2Zmc2V0SGVpZ2h0ICsgOH1weGA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyksIDMwMCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc3RvcmUtYXV0aC1jYXJkXCIsIEhhU3RvcmVBdXRoKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0RBO0FBQ0E7QUFnRUE7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
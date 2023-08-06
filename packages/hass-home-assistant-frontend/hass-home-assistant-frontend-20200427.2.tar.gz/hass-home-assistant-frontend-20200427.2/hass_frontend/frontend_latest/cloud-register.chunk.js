(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-register"],{

/***/ "./src/panels/config/cloud/register/cloud-register.js":
/*!************************************************************!*\
  !*** ./src/panels/config/cloud/register/cloud-register.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ha-config-section */ "./src/panels/config/ha-config-section.ts");


/* eslint-plugin-disable lit */









/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class CloudRegister extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
    <style include="iron-flex ha-style">
      .content {
        direction: ltr;
      }

      [slot=introduction] {
        margin: -1em 0;
      }
      [slot=introduction] a {
        color: var(--primary-color);
      }
      a {
        color: var(--primary-color);
      }
      paper-item {
        cursor: pointer;
      }
      h1 {
        @apply --paper-font-headline;
        margin: 0;
      }
      .error {
        color: var(--google-red-500);
      }
      .card-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      [hidden] {
        display: none;
      }
    </style>
    <hass-subpage header="[[localize('ui.panel.config.cloud.register.title')]]">
      <div class="content">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">[[localize('ui.panel.config.cloud.register.headline')]]</span>
          <div slot="introduction">
            <p>
              [[localize('ui.panel.config.cloud.register.information')]]
            </p>
            <p>
            [[localize('ui.panel.config.cloud.register.information2')]]
            </p>
            <ul>
              <li>[[localize('ui.panel.config.cloud.register.feature_remote_control')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_google_home')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_amazon_alexa')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_webhook_apps')]]</li>
            </ul>
            <p>
              [[localize('ui.panel.config.cloud.register.information3')]] <a href='https://www.nabucasa.com' target='_blank'>Nabu&nbsp;Casa,&nbsp;Inc</a>[[localize('ui.panel.config.cloud.register.information3a')]]
            </p>

            <p>
              [[localize('ui.panel.config.cloud.register.information4')]]
              </p><ul>
                <li><a href="https://home-assistant.io/tos/" target="_blank" rel="noreferrer">[[localize('ui.panel.config.cloud.register.link_terms_conditions')]]</a></li>
                <li><a href="https://home-assistant.io/privacy/" target="_blank" rel="noreferrer">[[localize('ui.panel.config.cloud.register.link_privacy_policy')]]</a></li>
              </ul>
            </p>
          </div>

          <ha-card header="[[localize('ui.panel.config.cloud.register.create_account')]]">
            <div class="card-content">
              <div class="header">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              </div>
              <paper-input autofocus="" id="email" label="[[localize('ui.panel.config.cloud.register.email_address')]]" type="email" value="{{email}}" on-keydown="_keyDown" error-message="[[localize('ui.panel.config.cloud.register.email_error_msg')]]"></paper-input>
              <paper-input id="password" label="Password" value="{{_password}}" type="password" on-keydown="_keyDown" error-message="[[localize('ui.panel.config.cloud.register.password_error_msg')]]"></paper-input>
            </div>
            <div class="card-actions">
              <ha-progress-button on-click="_handleRegister" progress="[[_requestInProgress]]">[[localize('ui.panel.config.cloud.register.start_trial')]]</ha-progress-button>
              <button class="link" hidden="[[_requestInProgress]]" on-click="_handleResendVerifyEmail">[[localize('ui.panel.config.cloud.register.resend_confirmation_email')]]</button>
            </div>
          </ha-card>
        </ha-config-section>
      </div>
    </hass-subpage>
`;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      email: {
        type: String,
        notify: true
      },
      _requestInProgress: {
        type: Boolean,
        value: false
      },
      _password: {
        type: String,
        value: ""
      },
      _error: {
        type: String,
        value: ""
      }
    };
  }

  static get observers() {
    return ["_inputChanged(email, _password)"];
  }

  _inputChanged() {
    this._error = "";
    this.$.email.invalid = false;
    this.$.password.invalid = false;
  }

  _keyDown(ev) {
    // validate on enter
    if (ev.keyCode === 13) {
      this._handleRegister();

      ev.preventDefault();
    }
  }

  _handleRegister() {
    let invalid = false;

    if (!this.email || !this.email.includes("@")) {
      this.$.email.invalid = true;
      this.$.email.focus();
      invalid = true;
    }

    if (this._password.length < 8) {
      this.$.password.invalid = true;

      if (!invalid) {
        invalid = true;
        this.$.password.focus();
      }
    }

    if (invalid) return;
    this._requestInProgress = true;
    this.hass.callApi("post", "cloud/register", {
      email: this.email,
      password: this._password
    }).then(() => this._verificationEmailSent(), err => {
      // Do this before setProperties because changing it clears errors.
      this._password = "";
      this.setProperties({
        _requestInProgress: false,
        _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
      });
    });
  }

  _handleResendVerifyEmail() {
    if (!this.email) {
      this.$.email.invalid = true;
      return;
    }

    this.hass.callApi("post", "cloud/resend_confirm", {
      email: this.email
    }).then(() => this._verificationEmailSent(), err => this.setProperties({
      _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
    }));
  }

  _verificationEmailSent() {
    this.setProperties({
      _requestInProgress: false,
      _password: ""
    });
    this.fire("cloud-done", {
      flashMessage: this.hass.localize("ui.panel.config.cloud.register.account_created")
    });
  }

}

customElements.define("cloud-register", CloudRegister);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtcmVnaXN0ZXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9yZWdpc3Rlci9jbG91ZC1yZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1wcm9ncmVzcy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBDbG91ZFJlZ2lzdGVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgIH1cblxuICAgICAgW3Nsb3Q9aW50cm9kdWN0aW9uXSB7XG4gICAgICAgIG1hcmdpbjogLTFlbSAwO1xuICAgICAgfVxuICAgICAgW3Nsb3Q9aW50cm9kdWN0aW9uXSBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIudGl0bGUnKV1dXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmhlYWRsaW5lJyldXTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuaW5mb3JtYXRpb24nKV1dXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5pbmZvcm1hdGlvbjInKV1dXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuZmVhdHVyZV9yZW1vdGVfY29udHJvbCcpXV08L2xpPlxuICAgICAgICAgICAgICA8bGk+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmZlYXR1cmVfZ29vZ2xlX2hvbWUnKV1dPC9saT5cbiAgICAgICAgICAgICAgPGxpPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5mZWF0dXJlX2FtYXpvbl9hbGV4YScpXV08L2xpPlxuICAgICAgICAgICAgICA8bGk+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmZlYXR1cmVfd2ViaG9va19hcHBzJyldXTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5pbmZvcm1hdGlvbjMnKV1dIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbScgdGFyZ2V0PSdfYmxhbmsnPk5hYnUmbmJzcDtDYXNhLCZuYnNwO0luYzwvYT5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuaW5mb3JtYXRpb24zYScpXV1cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5pbmZvcm1hdGlvbjQnKV1dXG4gICAgICAgICAgICAgIDwvcD48dWw+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2hvbWUtYXNzaXN0YW50LmlvL3Rvcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmxpbmtfdGVybXNfY29uZGl0aW9ucycpXV08L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vcHJpdmFjeS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmxpbmtfcHJpdmFjeV9wb2xpY3knKV1dPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuY3JlYXRlX2FjY291bnQnKV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiBoaWRkZW4kPVwiW1shX2Vycm9yXV1cIj5bW19lcnJvcl1dPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXQgYXV0b2ZvY3VzPVwiXCIgaWQ9XCJlbWFpbFwiIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmVtYWlsX2FkZHJlc3MnKV1dXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9XCJ7e2VtYWlsfX1cIiBvbi1rZXlkb3duPVwiX2tleURvd25cIiBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmVtYWlsX2Vycm9yX21zZycpXV1cIj48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXQgaWQ9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc3dvcmRcIiB2YWx1ZT1cInt7X3Bhc3N3b3JkfX1cIiB0eXBlPVwicGFzc3dvcmRcIiBvbi1rZXlkb3duPVwiX2tleURvd25cIiBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLnBhc3N3b3JkX2Vycm9yX21zZycpXV1cIj48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxoYS1wcm9ncmVzcy1idXR0b24gb24tY2xpY2s9XCJfaGFuZGxlUmVnaXN0ZXJcIiBwcm9ncmVzcz1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIj5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuc3RhcnRfdHJpYWwnKV1dPC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaW5rXCIgaGlkZGVuPVwiW1tfcmVxdWVzdEluUHJvZ3Jlc3NdXVwiIG9uLWNsaWNrPVwiX2hhbmRsZVJlc2VuZFZlcmlmeUVtYWlsXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLnJlc2VuZF9jb25maXJtYXRpb25fZW1haWwnKV1dPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hhc3Mtc3VicGFnZT5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX3JlcXVlc3RJblByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICBfZXJyb3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfaW5wdXRDaGFuZ2VkKGVtYWlsLCBfcGFzc3dvcmQpXCJdO1xuICB9XG5cbiAgX2lucHV0Q2hhbmdlZCgpIHtcbiAgICB0aGlzLl9lcnJvciA9IFwiXCI7XG4gICAgdGhpcy4kLmVtYWlsLmludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLiQucGFzc3dvcmQuaW52YWxpZCA9IGZhbHNlO1xuICB9XG5cbiAgX2tleURvd24oZXYpIHtcbiAgICAvLyB2YWxpZGF0ZSBvbiBlbnRlclxuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5faGFuZGxlUmVnaXN0ZXIoKTtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVJlZ2lzdGVyKCkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMuZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgICB0aGlzLiQuZW1haWwuZm9jdXMoKTtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICB0aGlzLiQucGFzc3dvcmQuaW52YWxpZCA9IHRydWU7XG5cbiAgICAgIGlmICghaW52YWxpZCkge1xuICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kLnBhc3N3b3JkLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGludmFsaWQpIHJldHVybjtcblxuICAgIHRoaXMuX3JlcXVlc3RJblByb2dyZXNzID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwiY2xvdWQvcmVnaXN0ZXJcIiwge1xuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3Bhc3N3b3JkLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB0aGlzLl92ZXJpZmljYXRpb25FbWFpbFNlbnQoKSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIC8vIERvIHRoaXMgYmVmb3JlIHNldFByb3BlcnRpZXMgYmVjYXVzZSBjaGFuZ2luZyBpdCBjbGVhcnMgZXJyb3JzLlxuICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gXCJcIjtcblxuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgX2Vycm9yOlxuICAgICAgICAgICAgICBlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgID8gZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBfaGFuZGxlUmVzZW5kVmVyaWZ5RW1haWwoKSB7XG4gICAgaWYgKCF0aGlzLmVtYWlsKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJjbG91ZC9yZXNlbmRfY29uZmlybVwiLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB0aGlzLl92ZXJpZmljYXRpb25FbWFpbFNlbnQoKSxcbiAgICAgICAgKGVycikgPT5cbiAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgX2Vycm9yOlxuICAgICAgICAgICAgICBlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgID8gZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBfdmVyaWZpY2F0aW9uRW1haWxTZW50KCkge1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgX3Bhc3N3b3JkOiBcIlwiLFxuICAgIH0pO1xuICAgIHRoaXMuZmlyZShcImNsb3VkLWRvbmVcIiwge1xuICAgICAgZmxhc2hNZXNzYWdlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmFjY291bnRfY3JlYXRlZFwiXG4gICAgICApLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNsb3VkLXJlZ2lzdGVyXCIsIENsb3VkUmVnaXN0ZXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFPQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBNU1BO0FBQ0E7QUE2TUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
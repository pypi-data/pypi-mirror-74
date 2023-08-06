(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["external_auth"],{

/***/ "./src/external_app/external_auth.ts":
/*!*******************************************!*\
  !*** ./src/external_app/external_auth.ts ***!
  \*******************************************/
/*! exports provided: ExternalAuth, createExternalAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalAuth", function() { return ExternalAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExternalAuth", function() { return createExternalAuth; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _external_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external_messaging */ "./src/external_app/external_messaging.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Auth class that connects to a native app for authentication.
 */


const CALLBACK_SET_TOKEN = "externalAuthSetToken";
const CALLBACK_REVOKE_TOKEN = "externalAuthRevokeToken";

if (!window.externalApp && !window.webkit) {
  throw new Error("External auth requires either externalApp or webkit defined on Window object.");
}

class ExternalAuth extends home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["Auth"] {
  constructor(hassUrl) {
    super({
      hassUrl,
      clientId: "",
      refresh_token: "",
      access_token: "",
      expires_in: 0,
      // This will trigger connection to do a refresh right away
      expires: 0
    });

    _defineProperty(this, "external", void 0);
  }

  async refreshAccessToken(force) {
    const payload = {
      callback: CALLBACK_SET_TOKEN
    };

    if (force) {
      payload.force = true;
    }

    const callbackPromise = new Promise((resolve, reject) => {
      window[CALLBACK_SET_TOKEN] = (success, data) => success ? resolve(data) : reject(data);
    });
    await 0;

    if (window.externalApp) {
      window.externalApp.getExternalAuth(JSON.stringify(payload));
    } else {
      window.webkit.messageHandlers.getExternalAuth.postMessage(payload);
    }

    const tokens = await callbackPromise;
    this.data.access_token = tokens.access_token;
    this.data.expires = tokens.expires_in * 1000 + Date.now();
  }

  async revoke() {
    const payload = {
      callback: CALLBACK_REVOKE_TOKEN
    };
    const callbackPromise = new Promise((resolve, reject) => {
      window[CALLBACK_REVOKE_TOKEN] = (success, data) => success ? resolve(data) : reject(data);
    });
    await 0;

    if (window.externalApp) {
      window.externalApp.revokeExternalAuth(JSON.stringify(payload));
    } else {
      window.webkit.messageHandlers.revokeExternalAuth.postMessage(payload);
    }

    await callbackPromise;
  }

}
const createExternalAuth = hassUrl => {
  const auth = new ExternalAuth(hassUrl);

  if (window.externalApp && window.externalApp.externalBus || window.webkit && window.webkit.messageHandlers.externalBus) {
    auth.external = new _external_messaging__WEBPACK_IMPORTED_MODULE_1__["ExternalMessaging"]();
    auth.external.attach();
  }

  return auth;
};

/***/ }),

/***/ "./src/external_app/external_events_forwarder.ts":
/*!*******************************************************!*\
  !*** ./src/external_app/external_events_forwarder.ts ***!
  \*******************************************************/
/*! exports provided: externalForwardConnectionEvents, externalForwardHaptics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalForwardConnectionEvents", function() { return externalForwardConnectionEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalForwardHaptics", function() { return externalForwardHaptics; });
const externalForwardConnectionEvents = bus => {
  window.addEventListener("connection-status", ev => bus.fireMessage({
    type: "connection-status",
    payload: {
      event: ev.detail
    }
  }));
};
const externalForwardHaptics = bus => window.addEventListener("haptic", ev => bus.fireMessage({
  type: "haptic",
  payload: {
    hapticType: ev.detail
  }
}));

/***/ }),

/***/ "./src/external_app/external_messaging.ts":
/*!************************************************!*\
  !*** ./src/external_app/external_messaging.ts ***!
  \************************************************/
/*! exports provided: ExternalMessaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalMessaging", function() { return ExternalMessaging; });
/* harmony import */ var _external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external_events_forwarder */ "./src/external_app/external_events_forwarder.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CALLBACK_EXTERNAL_BUS = "externalBus";
class ExternalMessaging {
  constructor() {
    _defineProperty(this, "commands", {});

    _defineProperty(this, "cache", {});

    _defineProperty(this, "msgId", 0);
  }

  attach() {
    Object(_external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__["externalForwardConnectionEvents"])(this);
    Object(_external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__["externalForwardHaptics"])(this);

    window[CALLBACK_EXTERNAL_BUS] = msg => this.receiveMessage(msg);
  }
  /**
   * Send message to external app that expects a response.
   * @param msg message to send
   */


  sendMessage(msg) {
    const msgId = ++this.msgId;
    msg.id = msgId;
    this.fireMessage(msg);
    return new Promise((resolve, reject) => {
      this.commands[msgId] = {
        resolve,
        reject
      };
    });
  }
  /**
   * Send message to external app without expecting a response.
   * @param msg message to send
   */


  fireMessage(msg) {
    if (!msg.id) {
      msg.id = ++this.msgId;
    }

    this._sendExternal(msg);
  }

  receiveMessage(msg) {
    if (true) {
      // eslint-disable-next-line no-console
      console.log("Receiving message from external app", msg);
    }

    const pendingCmd = this.commands[msg.id];

    if (!pendingCmd) {
      // eslint-disable-next-line no-console
      console.warn(`Received unknown msg ID`, msg.id);
      return;
    }

    if (msg.type === "result") {
      if (msg.success) {
        pendingCmd.resolve(msg.result);
      } else {
        pendingCmd.reject(msg.error);
      }
    }
  }

  _sendExternal(msg) {
    if (true) {
      // eslint-disable-next-line no-console
      console.log("Sending message to external app", msg);
    }

    if (window.externalApp) {
      window.externalApp.externalBus(JSON.stringify(msg));
    } else {
      window.webkit.messageHandlers.externalBus.postMessage(msg);
    }
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWxfYXV0aC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlcm5hbF9hcHAvZXh0ZXJuYWxfYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2V2ZW50c19mb3J3YXJkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dGVybmFsX2FwcC9leHRlcm5hbF9tZXNzYWdpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXRoIGNsYXNzIHRoYXQgY29ubmVjdHMgdG8gYSBuYXRpdmUgYXBwIGZvciBhdXRoZW50aWNhdGlvbi5cbiAqL1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEV4dGVybmFsTWVzc2FnaW5nLCBJbnRlcm5hbE1lc3NhZ2UgfSBmcm9tIFwiLi9leHRlcm5hbF9tZXNzYWdpbmdcIjtcblxuY29uc3QgQ0FMTEJBQ0tfU0VUX1RPS0VOID0gXCJleHRlcm5hbEF1dGhTZXRUb2tlblwiO1xuY29uc3QgQ0FMTEJBQ0tfUkVWT0tFX1RPS0VOID0gXCJleHRlcm5hbEF1dGhSZXZva2VUb2tlblwiO1xuXG5pbnRlcmZhY2UgQmFzZVBheWxvYWQge1xuICBjYWxsYmFjazogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgR2V0RXh0ZXJuYWxBdXRoUGF5bG9hZCBleHRlbmRzIEJhc2VQYXlsb2FkIHtcbiAgZm9yY2U/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUmVmcmVzaFRva2VuUmVzcG9uc2Uge1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbiAgZXhwaXJlc19pbjogbnVtYmVyO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGV4dGVybmFsQXBwPzoge1xuICAgICAgZ2V0RXh0ZXJuYWxBdXRoKHBheWxvYWQ6IHN0cmluZyk7XG4gICAgICByZXZva2VFeHRlcm5hbEF1dGgocGF5bG9hZDogc3RyaW5nKTtcbiAgICAgIGV4dGVybmFsQnVzKHBheWxvYWQ6IHN0cmluZyk7XG4gICAgfTtcbiAgICB3ZWJraXQ/OiB7XG4gICAgICBtZXNzYWdlSGFuZGxlcnM6IHtcbiAgICAgICAgZ2V0RXh0ZXJuYWxBdXRoOiB7XG4gICAgICAgICAgcG9zdE1lc3NhZ2UocGF5bG9hZDogR2V0RXh0ZXJuYWxBdXRoUGF5bG9hZCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldm9rZUV4dGVybmFsQXV0aDoge1xuICAgICAgICAgIHBvc3RNZXNzYWdlKHBheWxvYWQ6IEJhc2VQYXlsb2FkKTtcbiAgICAgICAgfTtcbiAgICAgICAgZXh0ZXJuYWxCdXM6IHtcbiAgICAgICAgICBwb3N0TWVzc2FnZShwYXlsb2FkOiBJbnRlcm5hbE1lc3NhZ2UpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG5cbmlmICghd2luZG93LmV4dGVybmFsQXBwICYmICF3aW5kb3cud2Via2l0KSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBcIkV4dGVybmFsIGF1dGggcmVxdWlyZXMgZWl0aGVyIGV4dGVybmFsQXBwIG9yIHdlYmtpdCBkZWZpbmVkIG9uIFdpbmRvdyBvYmplY3QuXCJcbiAgKTtcbn1cblxuZXhwb3J0IGNsYXNzIEV4dGVybmFsQXV0aCBleHRlbmRzIEF1dGgge1xuICBwdWJsaWMgZXh0ZXJuYWw/OiBFeHRlcm5hbE1lc3NhZ2luZztcblxuICBjb25zdHJ1Y3RvcihoYXNzVXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcih7XG4gICAgICBoYXNzVXJsLFxuICAgICAgY2xpZW50SWQ6IFwiXCIsXG4gICAgICByZWZyZXNoX3Rva2VuOiBcIlwiLFxuICAgICAgYWNjZXNzX3Rva2VuOiBcIlwiLFxuICAgICAgZXhwaXJlc19pbjogMCxcbiAgICAgIC8vIFRoaXMgd2lsbCB0cmlnZ2VyIGNvbm5lY3Rpb24gdG8gZG8gYSByZWZyZXNoIHJpZ2h0IGF3YXlcbiAgICAgIGV4cGlyZXM6IDAsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVmcmVzaEFjY2Vzc1Rva2VuKGZvcmNlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHBheWxvYWQ6IEdldEV4dGVybmFsQXV0aFBheWxvYWQgPSB7XG4gICAgICBjYWxsYmFjazogQ0FMTEJBQ0tfU0VUX1RPS0VOLFxuICAgIH07XG4gICAgaWYgKGZvcmNlKSB7XG4gICAgICBwYXlsb2FkLmZvcmNlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsYmFja1Byb21pc2UgPSBuZXcgUHJvbWlzZTxSZWZyZXNoVG9rZW5SZXNwb25zZT4oXG4gICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdpbmRvd1tDQUxMQkFDS19TRVRfVE9LRU5dID0gKHN1Y2Nlc3MsIGRhdGEpID0+XG4gICAgICAgICAgc3VjY2VzcyA/IHJlc29sdmUoZGF0YSkgOiByZWplY3QoZGF0YSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGF3YWl0IDA7XG5cbiAgICBpZiAod2luZG93LmV4dGVybmFsQXBwKSB7XG4gICAgICB3aW5kb3cuZXh0ZXJuYWxBcHAuZ2V0RXh0ZXJuYWxBdXRoKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LndlYmtpdCEubWVzc2FnZUhhbmRsZXJzLmdldEV4dGVybmFsQXV0aC5wb3N0TWVzc2FnZShwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbnMgPSBhd2FpdCBjYWxsYmFja1Byb21pc2U7XG5cbiAgICB0aGlzLmRhdGEuYWNjZXNzX3Rva2VuID0gdG9rZW5zLmFjY2Vzc190b2tlbjtcbiAgICB0aGlzLmRhdGEuZXhwaXJlcyA9IHRva2Vucy5leHBpcmVzX2luICogMTAwMCArIERhdGUubm93KCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmV2b2tlKCkge1xuICAgIGNvbnN0IHBheWxvYWQ6IEJhc2VQYXlsb2FkID0geyBjYWxsYmFjazogQ0FMTEJBQ0tfUkVWT0tFX1RPS0VOIH07XG5cbiAgICBjb25zdCBjYWxsYmFja1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3aW5kb3dbQ0FMTEJBQ0tfUkVWT0tFX1RPS0VOXSA9IChzdWNjZXNzLCBkYXRhKSA9PlxuICAgICAgICBzdWNjZXNzID8gcmVzb2x2ZShkYXRhKSA6IHJlamVjdChkYXRhKTtcbiAgICB9KTtcblxuICAgIGF3YWl0IDA7XG5cbiAgICBpZiAod2luZG93LmV4dGVybmFsQXBwKSB7XG4gICAgICB3aW5kb3cuZXh0ZXJuYWxBcHAucmV2b2tlRXh0ZXJuYWxBdXRoKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LndlYmtpdCEubWVzc2FnZUhhbmRsZXJzLnJldm9rZUV4dGVybmFsQXV0aC5wb3N0TWVzc2FnZShwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBhd2FpdCBjYWxsYmFja1Byb21pc2U7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4dGVybmFsQXV0aCA9IChoYXNzVXJsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYXV0aCA9IG5ldyBFeHRlcm5hbEF1dGgoaGFzc1VybCk7XG4gIGlmIChcbiAgICAod2luZG93LmV4dGVybmFsQXBwICYmIHdpbmRvdy5leHRlcm5hbEFwcC5leHRlcm5hbEJ1cykgfHxcbiAgICAod2luZG93LndlYmtpdCAmJiB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5leHRlcm5hbEJ1cylcbiAgKSB7XG4gICAgYXV0aC5leHRlcm5hbCA9IG5ldyBFeHRlcm5hbE1lc3NhZ2luZygpO1xuICAgIGF1dGguZXh0ZXJuYWwuYXR0YWNoKCk7XG4gIH1cbiAgcmV0dXJuIGF1dGg7XG59O1xuIiwiaW1wb3J0IHsgRXh0ZXJuYWxNZXNzYWdpbmcgfSBmcm9tIFwiLi9leHRlcm5hbF9tZXNzYWdpbmdcIjtcblxuZXhwb3J0IGNvbnN0IGV4dGVybmFsRm9yd2FyZENvbm5lY3Rpb25FdmVudHMgPSAoYnVzOiBFeHRlcm5hbE1lc3NhZ2luZykgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNvbm5lY3Rpb24tc3RhdHVzXCIsIChldikgPT5cbiAgICBidXMuZmlyZU1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJjb25uZWN0aW9uLXN0YXR1c1wiLFxuICAgICAgcGF5bG9hZDogeyBldmVudDogZXYuZGV0YWlsIH0sXG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlcm5hbEZvcndhcmRIYXB0aWNzID0gKGJ1czogRXh0ZXJuYWxNZXNzYWdpbmcpID0+XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFwdGljXCIsIChldikgPT5cbiAgICBidXMuZmlyZU1lc3NhZ2UoeyB0eXBlOiBcImhhcHRpY1wiLCBwYXlsb2FkOiB7IGhhcHRpY1R5cGU6IGV2LmRldGFpbCB9IH0pXG4gICk7XG4iLCJpbXBvcnQge1xuICBleHRlcm5hbEZvcndhcmRDb25uZWN0aW9uRXZlbnRzLFxuICBleHRlcm5hbEZvcndhcmRIYXB0aWNzLFxufSBmcm9tIFwiLi9leHRlcm5hbF9ldmVudHNfZm9yd2FyZGVyXCI7XG5cbmNvbnN0IENBTExCQUNLX0VYVEVSTkFMX0JVUyA9IFwiZXh0ZXJuYWxCdXNcIjtcblxuaW50ZXJmYWNlIENvbW1hbmRJbkZsaWdodCB7XG4gIHJlc29sdmU6IChkYXRhOiBhbnkpID0+IHZvaWQ7XG4gIHJlamVjdDogKGVycjogRXh0ZXJuYWxFcnJvcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbE1lc3NhZ2Uge1xuICBpZD86IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBwYXlsb2FkPzogdW5rbm93bjtcbn1cblxuaW50ZXJmYWNlIEV4dGVybmFsRXJyb3Ige1xuICBjb2RlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEV4dGVybmFsTWVzc2FnZVJlc3VsdCB7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IFwicmVzdWx0XCI7XG4gIHN1Y2Nlc3M6IHRydWU7XG4gIHJlc3VsdDogdW5rbm93bjtcbn1cblxuaW50ZXJmYWNlIEV4dGVybmFsTWVzc2FnZVJlc3VsdEVycm9yIHtcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogXCJyZXN1bHRcIjtcbiAgc3VjY2VzczogZmFsc2U7XG4gIGVycm9yOiBFeHRlcm5hbEVycm9yO1xufVxuXG50eXBlIEV4dGVybmFsTWVzc2FnZSA9IEV4dGVybmFsTWVzc2FnZVJlc3VsdCB8IEV4dGVybmFsTWVzc2FnZVJlc3VsdEVycm9yO1xuXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxNZXNzYWdpbmcge1xuICBwdWJsaWMgY29tbWFuZHM6IHsgW21zZ0lkOiBudW1iZXJdOiBDb21tYW5kSW5GbGlnaHQgfSA9IHt9O1xuXG4gIHB1YmxpYyBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIHB1YmxpYyBtc2dJZCA9IDA7XG5cbiAgcHVibGljIGF0dGFjaCgpIHtcbiAgICBleHRlcm5hbEZvcndhcmRDb25uZWN0aW9uRXZlbnRzKHRoaXMpO1xuICAgIGV4dGVybmFsRm9yd2FyZEhhcHRpY3ModGhpcyk7XG4gICAgd2luZG93W0NBTExCQUNLX0VYVEVSTkFMX0JVU10gPSAobXNnKSA9PiB0aGlzLnJlY2VpdmVNZXNzYWdlKG1zZyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBtZXNzYWdlIHRvIGV4dGVybmFsIGFwcCB0aGF0IGV4cGVjdHMgYSByZXNwb25zZS5cbiAgICogQHBhcmFtIG1zZyBtZXNzYWdlIHRvIHNlbmRcbiAgICovXG4gIHB1YmxpYyBzZW5kTWVzc2FnZTxUPihtc2c6IEludGVybmFsTWVzc2FnZSk6IFByb21pc2U8VD4ge1xuICAgIGNvbnN0IG1zZ0lkID0gKyt0aGlzLm1zZ0lkO1xuICAgIG1zZy5pZCA9IG1zZ0lkO1xuXG4gICAgdGhpcy5maXJlTWVzc2FnZShtc2cpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29tbWFuZHNbbXNnSWRdID0geyByZXNvbHZlLCByZWplY3QgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIG1lc3NhZ2UgdG8gZXh0ZXJuYWwgYXBwIHdpdGhvdXQgZXhwZWN0aW5nIGEgcmVzcG9uc2UuXG4gICAqIEBwYXJhbSBtc2cgbWVzc2FnZSB0byBzZW5kXG4gICAqL1xuICBwdWJsaWMgZmlyZU1lc3NhZ2UobXNnOiBJbnRlcm5hbE1lc3NhZ2UpIHtcbiAgICBpZiAoIW1zZy5pZCkge1xuICAgICAgbXNnLmlkID0gKyt0aGlzLm1zZ0lkO1xuICAgIH1cbiAgICB0aGlzLl9zZW5kRXh0ZXJuYWwobXNnKTtcbiAgfVxuXG4gIHB1YmxpYyByZWNlaXZlTWVzc2FnZShtc2c6IEV4dGVybmFsTWVzc2FnZSkge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZpbmcgbWVzc2FnZSBmcm9tIGV4dGVybmFsIGFwcFwiLCBtc2cpO1xuICAgIH1cblxuICAgIGNvbnN0IHBlbmRpbmdDbWQgPSB0aGlzLmNvbW1hbmRzW21zZy5pZF07XG5cbiAgICBpZiAoIXBlbmRpbmdDbWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oYFJlY2VpdmVkIHVua25vd24gbXNnIElEYCwgbXNnLmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobXNnLnR5cGUgPT09IFwicmVzdWx0XCIpIHtcbiAgICAgIGlmIChtc2cuc3VjY2Vzcykge1xuICAgICAgICBwZW5kaW5nQ21kLnJlc29sdmUobXNnLnJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZW5kaW5nQ21kLnJlamVjdChtc2cuZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfc2VuZEV4dGVybmFsKG1zZzogSW50ZXJuYWxNZXNzYWdlKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgbWVzc2FnZSB0byBleHRlcm5hbCBhcHBcIiwgbXNnKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5leHRlcm5hbEFwcCkge1xuICAgICAgd2luZG93LmV4dGVybmFsQXBwLmV4dGVybmFsQnVzKEpTT04uc3RyaW5naWZ5KG1zZykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cud2Via2l0IS5tZXNzYWdlSGFuZGxlcnMuZXh0ZXJuYWxCdXMucG9zdE1lc3NhZ2UobXNnKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOURBO0FBZ0VBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUtBO0FBa0NBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6RUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
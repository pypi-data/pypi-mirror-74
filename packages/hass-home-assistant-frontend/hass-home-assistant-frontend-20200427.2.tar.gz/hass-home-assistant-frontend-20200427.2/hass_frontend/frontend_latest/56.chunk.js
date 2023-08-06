(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[56],{

/***/ "./src/cast/cast_framework.ts":
/*!************************************!*\
  !*** ./src/cast/cast_framework.ts ***!
  \************************************/
/*! exports provided: castApiAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castApiAvailable", function() { return castApiAvailable; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom/load_resource */ "./src/common/dom/load_resource.ts");

let loadedPromise;
const castApiAvailable = () => {
  if (loadedPromise) {
    return loadedPromise;
  }

  loadedPromise = new Promise(resolve => {
    window.__onGCastApiAvailable = resolve;
  }); // Any element with a specific ID will get set as a JS variable on window
  // This will override the cast SDK if the iconset is loaded afterwards.
  // Conflicting IDs will no longer mess with window, so we'll just append one.

  const el = document.createElement("div");
  el.id = "cast";
  document.body.append(el);
  Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1");
  return loadedPromise;
};

/***/ }),

/***/ "./src/cast/cast_manager.ts":
/*!**********************************!*\
  !*** ./src/cast/cast_manager.ts ***!
  \**********************************/
/*! exports provided: CastManager, getCastManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastManager", function() { return CastManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCastManager", function() { return getCastManager; });
/* harmony import */ var _cast_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast_framework */ "./src/cast/cast_framework.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/cast/const.ts");
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");
/* harmony import */ var _receiver_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receiver_messages */ "./src/cast/receiver_messages.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-undef, no-console */




let managerProm;
class CastManager {
  // If the cast connection is connected to our Hass.
  constructor(auth) {
    _defineProperty(this, "auth", void 0);

    _defineProperty(this, "status", void 0);

    _defineProperty(this, "_eventListeners", {});

    this.auth = auth;
    const context = this.castContext;
    context.setOptions({
      receiverApplicationId: _const__WEBPACK_IMPORTED_MODULE_1__["CAST_APP_ID"],
      // @ts-ignore
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });
    context.addEventListener( // @ts-ignore
    cast.framework.CastContextEventType.SESSION_STATE_CHANGED, ev => this._sessionStateChanged(ev));
    context.addEventListener( // @ts-ignore
    cast.framework.CastContextEventType.CAST_STATE_CHANGED, ev => this._castStateChanged(ev));
  }

  addEventListener(event, listener) {
    if (!(event in this._eventListeners)) {
      this._eventListeners[event] = [];
    }

    this._eventListeners[event].push(listener);

    return () => {
      this._eventListeners[event].splice(this._eventListeners[event].indexOf(listener));
    };
  }

  get castConnectedToOurHass() {
    return this.status !== undefined && this.auth !== undefined && this.status.connected && (this.status.hassUrl === this.auth.data.hassUrl || _const__WEBPACK_IMPORTED_MODULE_1__["CAST_DEV"] && this.status.hassUrl === _dev_const__WEBPACK_IMPORTED_MODULE_2__["CAST_DEV_HASS_URL"]);
  }

  sendMessage(msg) {
    if (true) {
      console.log("Sending cast message", msg);
    }

    this.castSession.sendMessage(_const__WEBPACK_IMPORTED_MODULE_1__["CAST_NS"], msg);
  }

  get castState() {
    return this.castContext.getCastState();
  }

  get castContext() {
    // @ts-ignore
    return cast.framework.CastContext.getInstance();
  }

  get castSession() {
    return this.castContext.getCurrentSession();
  }

  requestSession() {
    return this.castContext.requestSession();
  }

  _fireEvent(event) {
    for (const listener of this._eventListeners[event] || []) {
      listener();
    }
  }

  _receiveMessage(msg) {
    if (true) {
      console.log("Received cast message", msg);
    }

    if (msg.type === "receiver_status") {
      this.status = msg;

      this._fireEvent("connection-changed");
    }
  }

  _sessionStateChanged(ev) {
    if (true) {
      console.log("Cast session state changed", ev.sessionState);
    } // On Android, opening a new session always results in SESSION_RESUMED.
    // So treat both as the same.


    if (ev.sessionState === "SESSION_STARTED" || ev.sessionState === "SESSION_RESUMED") {
      if (this.auth) {
        Object(_receiver_messages__WEBPACK_IMPORTED_MODULE_3__["castSendAuth"])(this, this.auth);
      } else {
        // Only do if no auth, as this is done as part of sendAuth.
        this.sendMessage({
          type: "get_status"
        });
      }

      this._attachMessageListener();
    } else if (ev.sessionState === "SESSION_ENDED") {
      this.status = undefined;

      this._fireEvent("connection-changed");
    }
  }

  _castStateChanged(ev) {
    if (true) {
      console.log("Cast state changed", ev.castState);
    }

    this._fireEvent("state-changed");
  }

  _attachMessageListener() {
    const session = this.castSession;
    session.addMessageListener(_const__WEBPACK_IMPORTED_MODULE_1__["CAST_NS"], (_ns, msg) => this._receiveMessage(JSON.parse(msg)));
  }

}
const getCastManager = auth => {
  if (!managerProm) {
    managerProm = Object(_cast_framework__WEBPACK_IMPORTED_MODULE_0__["castApiAvailable"])().then(isAvailable => {
      if (!isAvailable) {
        throw new Error("No Cast API available");
      }

      return new CastManager(auth);
    });
  }

  return managerProm;
};

/***/ }),

/***/ "./src/common/dom/load_resource.ts":
/*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
/*! exports provided: loadCSS, loadJS, loadImg, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCSS", function() { return loadCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJS", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImg", function() { return loadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
// Load a resource and get a promise when loading done.
// From: https://davidwalsh.name/javascript-loader
const _load = (tag, url, type) => {
  // This promise will be used by Promise.all to determine success or failure
  return new Promise((resolve, reject) => {
    const element = document.createElement(tag);
    let attr = "src";
    let parent = "body"; // Important success and error for the promise

    element.onload = () => resolve(url);

    element.onerror = () => reject(url); // Need to set different attributes depending on tag type


    switch (tag) {
      case "script":
        element.async = true;

        if (type) {
          element.type = type;
        }

        break;

      case "link":
        element.type = "text/css";
        element.rel = "stylesheet";
        attr = "href";
        parent = "head";
    } // Inject into document to kick off loading


    element[attr] = url;
    document[parent].appendChild(element);
  });
};

const loadCSS = url => _load("link", url);
const loadJS = url => _load("script", url);
const loadImg = url => _load("img", url);
const loadModule = url => _load("script", url, "module");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FzdC9jYXN0X2ZyYW1ld29yay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FzdC9jYXN0X21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkSlMgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9sb2FkX3Jlc291cmNlXCI7XG5cbmxldCBsb2FkZWRQcm9taXNlOiBQcm9taXNlPGJvb2xlYW4+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgY2FzdEFwaUF2YWlsYWJsZSA9ICgpID0+IHtcbiAgaWYgKGxvYWRlZFByb21pc2UpIHtcbiAgICByZXR1cm4gbG9hZGVkUHJvbWlzZTtcbiAgfVxuXG4gIGxvYWRlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICh3aW5kb3cgYXMgYW55KS5fX29uR0Nhc3RBcGlBdmFpbGFibGUgPSByZXNvbHZlO1xuICB9KTtcbiAgLy8gQW55IGVsZW1lbnQgd2l0aCBhIHNwZWNpZmljIElEIHdpbGwgZ2V0IHNldCBhcyBhIEpTIHZhcmlhYmxlIG9uIHdpbmRvd1xuICAvLyBUaGlzIHdpbGwgb3ZlcnJpZGUgdGhlIGNhc3QgU0RLIGlmIHRoZSBpY29uc2V0IGlzIGxvYWRlZCBhZnRlcndhcmRzLlxuICAvLyBDb25mbGljdGluZyBJRHMgd2lsbCBubyBsb25nZXIgbWVzcyB3aXRoIHdpbmRvdywgc28gd2UnbGwganVzdCBhcHBlbmQgb25lLlxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmlkID0gXCJjYXN0XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsKTtcblxuICBsb2FkSlMoXG4gICAgXCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9jdi9qcy9zZW5kZXIvdjEvY2FzdF9zZW5kZXIuanM/bG9hZENhc3RGcmFtZXdvcms9MVwiXG4gICk7XG4gIHJldHVybiBsb2FkZWRQcm9taXNlO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmLCBuby1jb25zb2xlICovXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY2FzdEFwaUF2YWlsYWJsZSB9IGZyb20gXCIuL2Nhc3RfZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBDQVNUX0FQUF9JRCwgQ0FTVF9ERVYsIENBU1RfTlMgfSBmcm9tIFwiLi9jb25zdFwiO1xuaW1wb3J0IHsgQ0FTVF9ERVZfSEFTU19VUkwgfSBmcm9tIFwiLi9kZXZfY29uc3RcIjtcbmltcG9ydCB7XG4gIGNhc3RTZW5kQXV0aCxcbiAgSGFzc01lc3NhZ2UgYXMgUmVjZWl2ZXJNZXNzYWdlLFxufSBmcm9tIFwiLi9yZWNlaXZlcl9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgUmVjZWl2ZXJTdGF0dXNNZXNzYWdlLCBTZW5kZXJNZXNzYWdlIH0gZnJvbSBcIi4vc2VuZGVyX21lc3NhZ2VzXCI7XG5cbmxldCBtYW5hZ2VyUHJvbTogUHJvbWlzZTxDYXN0TWFuYWdlcj4gfCB1bmRlZmluZWQ7XG5cbnR5cGUgQ2FzdEV2ZW50TGlzdGVuZXIgPSAoKSA9PiB2b2lkO1xuXG4vKlxuR2VuZXJhbCBmbG93IG9mIENocm9tZWNhc3Q6XG5cbkNocm9tZWNhc3Qgc2Vzc2lvbnMgYXJlIHN0YXJ0ZWQgdmlhIHRoZSBDaHJvbWVjYXN0IGJ1dHRvbi4gV2hlbiBjbGlja2VkLCBzZXNzaW9uXG5zdGF0ZSBjaGFuZ2VzIHRvIHN0YXJ0ZWQuIFdlIHRoZW4gc2VuZCBhdXRoZW50aWNhdGlvbiwgd2hpY2ggd2lsbCBjYXVzZSB0aGVcbnJlY2VpdmVyIGFwcCB0byBzZW5kIGEgc3RhdHVzIHVwZGF0ZS5cblxuSWYgYSBzZXNzaW9uIGlzIGFscmVhZHkgYWN0aXZlLCB3ZSBxdWVyeSB0aGUgc3RhdHVzIHRvIHNlZSB3aGF0IGl0IGlzIHVwIHRvLiBJZlxuYSB1c2VyIHByZXNzZXMgdGhlIGNhc3QgYnV0dG9uIHdlIHNlbmQgYXV0aCBpZiBub3QgY29ubmVjdGVkIHlldCwgdGhlbiBzZW5kXG5jb21tYW5kIGFzIHVzdWFsLlxuKi9cblxudHlwZSBDYXN0RXZlbnQgPSBcImNvbm5lY3Rpb24tY2hhbmdlZFwiIHwgXCJzdGF0ZS1jaGFuZ2VkXCI7XG5cbmV4cG9ydCBjbGFzcyBDYXN0TWFuYWdlciB7XG4gIHB1YmxpYyBhdXRoPzogQXV0aDtcblxuICAvLyBJZiB0aGUgY2FzdCBjb25uZWN0aW9uIGlzIGNvbm5lY3RlZCB0byBvdXIgSGFzcy5cbiAgcHVibGljIHN0YXR1cz86IFJlY2VpdmVyU3RhdHVzTWVzc2FnZTtcblxuICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogeyBbZXZlbnQ6IHN0cmluZ106IENhc3RFdmVudExpc3RlbmVyW10gfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGF1dGg/OiBBdXRoKSB7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYXN0Q29udGV4dDtcbiAgICBjb250ZXh0LnNldE9wdGlvbnMoe1xuICAgICAgcmVjZWl2ZXJBcHBsaWNhdGlvbklkOiBDQVNUX0FQUF9JRCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGF1dG9Kb2luUG9saWN5OiBjaHJvbWUuY2FzdC5BdXRvSm9pblBvbGljeS5PUklHSU5fU0NPUEVELFxuICAgIH0pO1xuICAgIGNvbnRleHQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNhc3QuZnJhbWV3b3JrLkNhc3RDb250ZXh0RXZlbnRUeXBlLlNFU1NJT05fU1RBVEVfQ0hBTkdFRCxcbiAgICAgIChldikgPT4gdGhpcy5fc2Vzc2lvblN0YXRlQ2hhbmdlZChldilcbiAgICApO1xuICAgIGNvbnRleHQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNhc3QuZnJhbWV3b3JrLkNhc3RDb250ZXh0RXZlbnRUeXBlLkNBU1RfU1RBVEVfQ0hBTkdFRCxcbiAgICAgIChldikgPT4gdGhpcy5fY2FzdFN0YXRlQ2hhbmdlZChldilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IENhc3RFdmVudCwgbGlzdGVuZXI6IENhc3RFdmVudExpc3RlbmVyKSB7XG4gICAgaWYgKCEoZXZlbnQgaW4gdGhpcy5fZXZlbnRMaXN0ZW5lcnMpKSB7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5pbmRleE9mKGxpc3RlbmVyKVxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldCBjYXN0Q29ubmVjdGVkVG9PdXJIYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXR1cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLmF1dGggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5zdGF0dXMuY29ubmVjdGVkICYmXG4gICAgICAodGhpcy5zdGF0dXMuaGFzc1VybCA9PT0gdGhpcy5hdXRoLmRhdGEuaGFzc1VybCB8fFxuICAgICAgICAoQ0FTVF9ERVYgJiYgdGhpcy5zdGF0dXMuaGFzc1VybCA9PT0gQ0FTVF9ERVZfSEFTU19VUkwpKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2VuZE1lc3NhZ2UobXNnOiBSZWNlaXZlck1lc3NhZ2UpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGNhc3QgbWVzc2FnZVwiLCBtc2cpO1xuICAgIH1cbiAgICB0aGlzLmNhc3RTZXNzaW9uLnNlbmRNZXNzYWdlKENBU1RfTlMsIG1zZyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhc3RTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXN0Q29udGV4dC5nZXRDYXN0U3RhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FzdENvbnRleHQoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBjYXN0LmZyYW1ld29yay5DYXN0Q29udGV4dC5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHVibGljIGdldCBjYXN0U2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYXN0Q29udGV4dC5nZXRDdXJyZW50U2Vzc2lvbigpITtcbiAgfVxuXG4gIHB1YmxpYyByZXF1ZXN0U2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYXN0Q29udGV4dC5yZXF1ZXN0U2Vzc2lvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlyZUV2ZW50KGV2ZW50OiBDYXN0RXZlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSB8fCBbXSkge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZWNlaXZlTWVzc2FnZShtc2c6IFNlbmRlck1lc3NhZ2UpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBjYXN0IG1lc3NhZ2VcIiwgbXNnKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInJlY2VpdmVyX3N0YXR1c1wiKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IG1zZztcbiAgICAgIHRoaXMuX2ZpcmVFdmVudChcImNvbm5lY3Rpb24tY2hhbmdlZFwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uU3RhdGVDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FzdCBzZXNzaW9uIHN0YXRlIGNoYW5nZWRcIiwgZXYuc2Vzc2lvblN0YXRlKTtcbiAgICB9XG4gICAgLy8gT24gQW5kcm9pZCwgb3BlbmluZyBhIG5ldyBzZXNzaW9uIGFsd2F5cyByZXN1bHRzIGluIFNFU1NJT05fUkVTVU1FRC5cbiAgICAvLyBTbyB0cmVhdCBib3RoIGFzIHRoZSBzYW1lLlxuICAgIGlmIChcbiAgICAgIGV2LnNlc3Npb25TdGF0ZSA9PT0gXCJTRVNTSU9OX1NUQVJURURcIiB8fFxuICAgICAgZXYuc2Vzc2lvblN0YXRlID09PSBcIlNFU1NJT05fUkVTVU1FRFwiXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5hdXRoKSB7XG4gICAgICAgIGNhc3RTZW5kQXV0aCh0aGlzLCB0aGlzLmF1dGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT25seSBkbyBpZiBubyBhdXRoLCBhcyB0aGlzIGlzIGRvbmUgYXMgcGFydCBvZiBzZW5kQXV0aC5cbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSh7IHR5cGU6IFwiZ2V0X3N0YXR1c1wiIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXR0YWNoTWVzc2FnZUxpc3RlbmVyKCk7XG4gICAgfSBlbHNlIGlmIChldi5zZXNzaW9uU3RhdGUgPT09IFwiU0VTU0lPTl9FTkRFRFwiKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpcmVFdmVudChcImNvbm5lY3Rpb24tY2hhbmdlZFwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jYXN0U3RhdGVDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FzdCBzdGF0ZSBjaGFuZ2VkXCIsIGV2LmNhc3RTdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMuX2ZpcmVFdmVudChcInN0YXRlLWNoYW5nZWRcIik7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hNZXNzYWdlTGlzdGVuZXIoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHRoaXMuY2FzdFNlc3Npb247XG4gICAgc2Vzc2lvbi5hZGRNZXNzYWdlTGlzdGVuZXIoQ0FTVF9OUywgKF9ucywgbXNnKSA9PlxuICAgICAgdGhpcy5fcmVjZWl2ZU1lc3NhZ2UoSlNPTi5wYXJzZShtc2cpKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldENhc3RNYW5hZ2VyID0gKGF1dGg/OiBBdXRoKSA9PiB7XG4gIGlmICghbWFuYWdlclByb20pIHtcbiAgICBtYW5hZ2VyUHJvbSA9IGNhc3RBcGlBdmFpbGFibGUoKS50aGVuKChpc0F2YWlsYWJsZSkgPT4ge1xuICAgICAgaWYgKCFpc0F2YWlsYWJsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBDYXN0IEFQSSBhdmFpbGFibGVcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IENhc3RNYW5hZ2VyKGF1dGgpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBtYW5hZ2VyUHJvbTtcbn07XG4iLCIvLyBMb2FkIGEgcmVzb3VyY2UgYW5kIGdldCBhIHByb21pc2Ugd2hlbiBsb2FkaW5nIGRvbmUuXG4vLyBGcm9tOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWxvYWRlclxuXG5jb25zdCBfbG9hZCA9IChcbiAgdGFnOiBcImxpbmtcIiB8IFwic2NyaXB0XCIgfCBcImltZ1wiLFxuICB1cmw6IHN0cmluZyxcbiAgdHlwZT86IFwibW9kdWxlXCJcbikgPT4ge1xuICAvLyBUaGlzIHByb21pc2Ugd2lsbCBiZSB1c2VkIGJ5IFByb21pc2UuYWxsIHRvIGRldGVybWluZSBzdWNjZXNzIG9yIGZhaWx1cmVcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGxldCBhdHRyID0gXCJzcmNcIjtcbiAgICBsZXQgcGFyZW50ID0gXCJib2R5XCI7XG5cbiAgICAvLyBJbXBvcnRhbnQgc3VjY2VzcyBhbmQgZXJyb3IgZm9yIHRoZSBwcm9taXNlXG4gICAgZWxlbWVudC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHVybCk7XG4gICAgZWxlbWVudC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHVybCk7XG5cbiAgICAvLyBOZWVkIHRvIHNldCBkaWZmZXJlbnQgYXR0cmlidXRlcyBkZXBlbmRpbmcgb24gdGFnIHR5cGVcbiAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgY2FzZSBcInNjcmlwdFwiOlxuICAgICAgICAoZWxlbWVudCBhcyBIVE1MU2NyaXB0RWxlbWVudCkuYXN5bmMgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIChlbGVtZW50IGFzIEhUTUxTY3JpcHRFbGVtZW50KS50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsaW5rXCI6XG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxMaW5rRWxlbWVudCkudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTExpbmtFbGVtZW50KS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgYXR0ciA9IFwiaHJlZlwiO1xuICAgICAgICBwYXJlbnQgPSBcImhlYWRcIjtcbiAgICB9XG5cbiAgICAvLyBJbmplY3QgaW50byBkb2N1bWVudCB0byBraWNrIG9mZiBsb2FkaW5nXG4gICAgZWxlbWVudFthdHRyXSA9IHVybDtcbiAgICBkb2N1bWVudFtwYXJlbnRdLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ1NTID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcImxpbmtcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkSlMgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwic2NyaXB0XCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZEltZyA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJpbWdcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkTW9kdWxlID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcInNjcmlwdFwiLCB1cmwsIFwibW9kdWxlXCIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFrQkE7QUFHQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQS9IQTtBQWlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
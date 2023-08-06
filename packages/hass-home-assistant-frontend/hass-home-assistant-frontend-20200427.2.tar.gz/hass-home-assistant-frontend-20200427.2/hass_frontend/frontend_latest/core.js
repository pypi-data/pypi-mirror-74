/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"core": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"external_auth":"external_auth"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/frontend_latest/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = self["webpackJsonp"] = self["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entrypoints/core.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/home-assistant-js-websocket/dist/auth.js":
/*!***************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/auth.js ***!
  \***************************************************************/
/*! exports provided: genClientId, genExpires, Auth, getAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genClientId", function() { return genClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genExpires", function() { return genExpires; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/home-assistant-js-websocket/dist/util.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors.js */ "./node_modules/home-assistant-js-websocket/dist/errors.js");


const genClientId = () => `${location.protocol}//${location.host}/`;
const genExpires = expires_in => {
  return expires_in * 1000 + Date.now();
};

function genRedirectUrl() {
  // Get current url but without # part.
  const {
    protocol,
    host,
    pathname,
    search
  } = location;
  return `${protocol}//${host}${pathname}${search}`;
}

function genAuthorizeUrl(hassUrl, clientId, redirectUrl, state) {
  let authorizeUrl = `${hassUrl}/auth/authorize?response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}`;

  if (clientId !== null) {
    authorizeUrl += `&client_id=${encodeURIComponent(clientId)}`;
  }

  if (state) {
    authorizeUrl += `&state=${encodeURIComponent(state)}`;
  }

  return authorizeUrl;
}

function redirectAuthorize(hassUrl, clientId, redirectUrl, state) {
  // Add either ?auth_callback=1 or &auth_callback=1
  redirectUrl += (redirectUrl.includes("?") ? "&" : "?") + "auth_callback=1";
  document.location.href = genAuthorizeUrl(hassUrl, clientId, redirectUrl, state);
}

async function tokenRequest(hassUrl, clientId, data) {
  // Browsers don't allow fetching tokens from https -> http.
  // Throw an error because it's a pain to debug this.
  // Guard against not working in node.
  const l = typeof location !== "undefined" && location;

  if (l && l.protocol === "https:") {
    // Ensure that the hassUrl is hosted on https.
    const a = document.createElement("a");
    a.href = hassUrl;

    if (a.protocol === "http:" && a.hostname !== "localhost") {
      throw _errors_js__WEBPACK_IMPORTED_MODULE_1__["ERR_INVALID_HTTPS_TO_HTTP"];
    }
  }

  const formData = new FormData();

  if (clientId !== null) {
    formData.append("client_id", clientId);
  }

  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  const resp = await fetch(`${hassUrl}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: formData
  });

  if (!resp.ok) {
    throw resp.status === 400
    /* auth invalid */
    || resp.status === 403
    /* user not active */
    ? _errors_js__WEBPACK_IMPORTED_MODULE_1__["ERR_INVALID_AUTH"] : new Error("Unable to fetch tokens");
  }

  const tokens = await resp.json();
  tokens.hassUrl = hassUrl;
  tokens.clientId = clientId;
  tokens.expires = genExpires(tokens.expires_in);
  return tokens;
}

function fetchToken(hassUrl, clientId, code) {
  return tokenRequest(hassUrl, clientId, {
    code,
    grant_type: "authorization_code"
  });
}

function encodeOAuthState(state) {
  return btoa(JSON.stringify(state));
}

function decodeOAuthState(encoded) {
  return JSON.parse(atob(encoded));
}

class Auth {
  constructor(data, saveTokens) {
    this.data = data;
    this._saveTokens = saveTokens;
  }

  get wsUrl() {
    // Convert from http:// -> ws://, https:// -> wss://
    return `ws${this.data.hassUrl.substr(4)}/api/websocket`;
  }

  get accessToken() {
    return this.data.access_token;
  }

  get expired() {
    return Date.now() > this.data.expires;
  }
  /**
   * Refresh the access token.
   */


  async refreshAccessToken() {
    const data = await tokenRequest(this.data.hassUrl, this.data.clientId, {
      grant_type: "refresh_token",
      refresh_token: this.data.refresh_token
    }); // Access token response does not contain refresh token.

    data.refresh_token = this.data.refresh_token;
    this.data = data;
    if (this._saveTokens) this._saveTokens(data);
  }
  /**
   * Revoke the refresh & access tokens.
   */


  async revoke() {
    const formData = new FormData();
    formData.append("action", "revoke");
    formData.append("token", this.data.refresh_token); // There is no error checking, as revoke will always return 200

    await fetch(`${this.data.hassUrl}/auth/token`, {
      method: "POST",
      credentials: "same-origin",
      body: formData
    });

    if (this._saveTokens) {
      this._saveTokens(null);
    }
  }

}
async function getAuth(options = {}) {
  let data;
  let hassUrl = options.hassUrl; // Strip trailing slash.

  if (hassUrl && hassUrl[hassUrl.length - 1] === "/") {
    hassUrl = hassUrl.substr(0, hassUrl.length - 1);
  }

  const clientId = options.clientId !== undefined ? options.clientId : genClientId(); // Use auth code if it was passed in

  if (!data && options.authCode && hassUrl) {
    data = await fetchToken(hassUrl, clientId, options.authCode);

    if (options.saveTokens) {
      options.saveTokens(data);
    }
  } // Check if we came back from an authorize redirect


  if (!data) {
    const query = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["parseQuery"])(location.search.substr(1)); // Check if we got redirected here from authorize page

    if ("auth_callback" in query) {
      // Restore state
      const state = decodeOAuthState(query.state);
      data = await fetchToken(state.hassUrl, state.clientId, query.code);

      if (options.saveTokens) {
        options.saveTokens(data);
      }
    }
  } // Check for stored tokens


  if (!data && options.loadTokens) {
    data = await options.loadTokens();
  }

  if (data) {
    return new Auth(data, options.saveTokens);
  }

  if (hassUrl === undefined) {
    throw _errors_js__WEBPACK_IMPORTED_MODULE_1__["ERR_HASS_HOST_REQUIRED"];
  } // If no tokens found but a hassUrl was passed in, let's go get some tokens!


  redirectAuthorize(hassUrl, clientId, options.redirectUrl || genRedirectUrl(), encodeOAuthState({
    hassUrl,
    clientId
  })); // Just don't resolve while we navigate to next page

  return new Promise(() => {});
}

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/collection.js":
/*!*********************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/collection.js ***!
  \*********************************************************************/
/*! exports provided: getCollection, createCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return getCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCollection", function() { return createCollection; });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./node_modules/home-assistant-js-websocket/dist/store.js");

const getCollection = (conn, key, fetchCollection, subscribeUpdates) => {
  if (conn[key]) {
    return conn[key];
  }

  let active = 0;
  let unsubProm;
  let store = Object(_store_js__WEBPACK_IMPORTED_MODULE_0__["createStore"])();

  const refresh = () => fetchCollection(conn).then(state => store.setState(state, true));

  const refreshSwallow = () => refresh().catch(err => {
    // Swallow errors if socket is connecting, closing or closed.
    // We will automatically call refresh again when we re-establish the connection.
    // Using conn.socket.OPEN instead of WebSocket for better node support
    if (conn.socket.readyState == conn.socket.OPEN) {
      throw err;
    }
  });

  conn[key] = {
    get state() {
      return store.state;
    },

    refresh,

    subscribe(subscriber) {
      active++; // If this was the first subscriber, attach collection

      if (active === 1) {
        if (subscribeUpdates) {
          unsubProm = subscribeUpdates(conn, store);
        } // Fetch when connection re-established.


        conn.addEventListener("ready", refreshSwallow);
        refreshSwallow();
      }

      const unsub = store.subscribe(subscriber);

      if (store.state !== undefined) {
        // Don't call it right away so that caller has time
        // to initialize all the things.
        setTimeout(() => subscriber(store.state), 0);
      }

      return () => {
        unsub();
        active--;

        if (!active) {
          // Unsubscribe from changes
          if (unsubProm) unsubProm.then(unsub => {
            unsub();
          });
          conn.removeEventListener("ready", refresh);
        }
      };
    }

  };
  return conn[key];
}; // Legacy name. It gets a collection and subscribes.

const createCollection = (key, fetchCollection, subscribeUpdates, conn, onChange) => getCollection(conn, key, fetchCollection, subscribeUpdates).subscribe(onChange);

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/commands.js":
/*!*******************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/commands.js ***!
  \*******************************************************************/
/*! exports provided: getStates, getServices, getConfig, getUser, callService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return getStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return callService; });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/home-assistant-js-websocket/dist/messages.js");

const getStates = connection => connection.sendMessagePromise(_messages_js__WEBPACK_IMPORTED_MODULE_0__["states"]());
const getServices = connection => connection.sendMessagePromise(_messages_js__WEBPACK_IMPORTED_MODULE_0__["services"]());
const getConfig = connection => connection.sendMessagePromise(_messages_js__WEBPACK_IMPORTED_MODULE_0__["config"]());
const getUser = connection => connection.sendMessagePromise(_messages_js__WEBPACK_IMPORTED_MODULE_0__["user"]());
const callService = (connection, domain, service, serviceData) => connection.sendMessagePromise(_messages_js__WEBPACK_IMPORTED_MODULE_0__["callService"](domain, service, serviceData));

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/config.js ***!
  \*****************************************************************/
/*! exports provided: subscribeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfig", function() { return subscribeConfig; });
/* harmony import */ var _collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection.js */ "./node_modules/home-assistant-js-websocket/dist/collection.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands.js */ "./node_modules/home-assistant-js-websocket/dist/commands.js");



function processComponentLoaded(state, event) {
  if (state === undefined) return null;
  return {
    components: state.components.concat(event.data.component)
  };
}

const fetchConfig = conn => Object(_commands_js__WEBPACK_IMPORTED_MODULE_1__["getConfig"])(conn);

const subscribeUpdates = (conn, store) => Promise.all([conn.subscribeEvents(store.action(processComponentLoaded), "component_loaded"), conn.subscribeEvents(() => fetchConfig(conn).then(config => store.setState(config, true)), "core_config_updated")]).then(unsubs => () => unsubs.forEach(unsub => unsub()));

const configColl = conn => Object(_collection_js__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_cnf", fetchConfig, subscribeUpdates);

const subscribeConfig = (conn, onChange) => configColl(conn).subscribe(onChange);

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/connection.js":
/*!*********************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/connection.js ***!
  \*********************************************************************/
/*! exports provided: Connection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/home-assistant-js-websocket/dist/messages.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors.js */ "./node_modules/home-assistant-js-websocket/dist/errors.js");
/**
 * Connection that wraps a socket and provides an interface to interact with
 * the Home Assistant websocket API.
 */


const DEBUG = false;
class Connection {
  constructor(socket, options) {
    // connection options
    //  - setupRetry: amount of ms to retry when unable to connect on initial setup
    //  - createSocket: create a new Socket connection
    this.options = options; // id if next command to send

    this.commandId = 1; // info about active subscriptions and commands in flight

    this.commands = new Map(); // map of event listeners

    this.eventListeners = new Map(); // true if a close is requested by the user

    this.closeRequested = false;
    this.setSocket(socket);
  }

  get haVersion() {
    return this.socket.haVersion;
  }

  setSocket(socket) {
    const oldSocket = this.socket;
    this.socket = socket;
    socket.addEventListener("message", ev => this._handleMessage(ev));
    socket.addEventListener("close", ev => this._handleClose(ev));

    if (oldSocket) {
      const oldCommands = this.commands; // reset to original state

      this.commandId = 1;
      this.commands = new Map();
      oldCommands.forEach(info => {
        if ("subscribe" in info) {
          info.subscribe().then(unsub => {
            info.unsubscribe = unsub; // We need to resolve this in case it wasn't resolved yet.
            // This allows us to subscribe while we're disconnected
            // and recover properly.

            info.resolve();
          });
        }
      });
      this.fireEvent("ready");
    }
  }

  addEventListener(eventType, callback) {
    let listeners = this.eventListeners.get(eventType);

    if (!listeners) {
      listeners = [];
      this.eventListeners.set(eventType, listeners);
    }

    listeners.push(callback);
  }

  removeEventListener(eventType, callback) {
    const listeners = this.eventListeners.get(eventType);

    if (!listeners) {
      return;
    }

    const index = listeners.indexOf(callback);

    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }

  fireEvent(eventType, eventData) {
    (this.eventListeners.get(eventType) || []).forEach(callback => callback(this, eventData));
  }

  close() {
    this.closeRequested = true;
    this.socket.close();
  }
  /**
   * Subscribe to a specific or all events.
   *
   * @param callback Callback  to be called when a new event fires
   * @param eventType
   * @returns promise that resolves to an unsubscribe function
   */


  async subscribeEvents(callback, eventType) {
    return this.subscribeMessage(callback, _messages_js__WEBPACK_IMPORTED_MODULE_0__["subscribeEvents"](eventType));
  }

  ping() {
    return this.sendMessagePromise(_messages_js__WEBPACK_IMPORTED_MODULE_0__["ping"]());
  }

  sendMessage(message, commandId) {
    if (DEBUG) {
      console.log("Sending", message);
    }

    if (!commandId) {
      commandId = this._genCmdId();
    }

    message.id = commandId;
    this.socket.send(JSON.stringify(message));
  }

  sendMessagePromise(message) {
    return new Promise((resolve, reject) => {
      const commandId = this._genCmdId();

      this.commands.set(commandId, {
        resolve,
        reject
      });
      this.sendMessage(message, commandId);
    });
  }
  /**
   * Call a websocket command that starts a subscription on the backend.
   *
   * @param message the message to start the subscription
   * @param callback the callback to be called when a new item arrives
   * @returns promise that resolves to an unsubscribe function
   */


  async subscribeMessage(callback, subscribeMessage) {
    // Command ID that will be used
    const commandId = this._genCmdId();

    let info;
    await new Promise((resolve, reject) => {
      // We store unsubscribe on info object. That way we can overwrite it in case
      // we get disconnected and we have to subscribe again.
      info = {
        resolve,
        reject,
        callback,
        subscribe: () => this.subscribeMessage(callback, subscribeMessage),
        unsubscribe: async () => {
          await this.sendMessagePromise(_messages_js__WEBPACK_IMPORTED_MODULE_0__["unsubscribeEvents"](commandId));
          this.commands.delete(commandId);
        }
      };
      this.commands.set(commandId, info);

      try {
        this.sendMessage(subscribeMessage, commandId);
      } catch (err) {// Happens when the websocket is already closing.
        // Don't have to handle the error, reconnect logic will pick it up.
      }
    });
    return () => info.unsubscribe();
  }

  _handleMessage(event) {
    const message = JSON.parse(event.data);

    if (DEBUG) {
      console.log("Received", message);
    }

    const info = this.commands.get(message.id);

    switch (message.type) {
      case "event":
        if (info) {
          info.callback(message.event);
        } else {
          console.warn(`Received event for unknown subscription ${message.id}. Unsubscribing.`);
          this.sendMessagePromise(_messages_js__WEBPACK_IMPORTED_MODULE_0__["unsubscribeEvents"](message.id));
        }

        break;

      case "result":
        // No info is fine. If just sendMessage is used, we did not store promise for result
        if (info) {
          if (message.success) {
            info.resolve(message.result); // Don't remove subscriptions.

            if (!("subscribe" in info)) {
              this.commands.delete(message.id);
            }
          } else {
            info.reject(message.error);
            this.commands.delete(message.id);
          }
        }

        break;

      case "pong":
        if (info) {
          info.resolve();
          this.commands.delete(message.id);
        } else {
          console.warn(`Received unknown pong response ${message.id}`);
        }

        break;

      default:
        if (DEBUG) {
          console.warn("Unhandled message", message);
        }

    }
  }

  _handleClose(ev) {
    // Reject in-flight sendMessagePromise requests
    this.commands.forEach(info => {
      // We don't cancel subscribeEvents commands in flight
      // as we will be able to recover them.
      if (!("subscribe" in info)) {
        info.reject(_messages_js__WEBPACK_IMPORTED_MODULE_0__["error"](_errors_js__WEBPACK_IMPORTED_MODULE_1__["ERR_CONNECTION_LOST"], "Connection lost"));
      }
    });

    if (this.closeRequested) {
      return;
    }

    this.fireEvent("disconnected"); // Disable setupRetry, we control it here with auto-backoff

    const options = Object.assign(Object.assign({}, this.options), {
      setupRetry: 0
    });

    const reconnect = tries => {
      setTimeout(async () => {
        if (DEBUG) {
          console.log("Trying to reconnect");
        }

        try {
          const socket = await options.createSocket(options);
          this.setSocket(socket);
        } catch (err) {
          if (err === _errors_js__WEBPACK_IMPORTED_MODULE_1__["ERR_INVALID_AUTH"]) {
            this.fireEvent("reconnect-error", err);
          } else {
            reconnect(tries + 1);
          }
        }
      }, Math.min(tries, 5) * 1000);
    };

    reconnect(0);
  }

  _genCmdId() {
    return ++this.commandId;
  }

}

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/entities.js":
/*!*******************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/entities.js ***!
  \*******************************************************************/
/*! exports provided: entitiesColl, subscribeEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesColl", function() { return entitiesColl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntities", function() { return subscribeEntities; });
/* harmony import */ var _collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection.js */ "./node_modules/home-assistant-js-websocket/dist/collection.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands.js */ "./node_modules/home-assistant-js-websocket/dist/commands.js");



function processEvent(store, event) {
  const state = store.state;
  if (state === undefined) return;
  const {
    entity_id,
    new_state
  } = event.data;

  if (new_state) {
    store.setState({
      [new_state.entity_id]: new_state
    });
  } else {
    const newEntities = Object.assign({}, state);
    delete newEntities[entity_id];
    store.setState(newEntities, true);
  }
}

async function fetchEntities(conn) {
  const states = await Object(_commands_js__WEBPACK_IMPORTED_MODULE_1__["getStates"])(conn);
  const entities = {};

  for (let i = 0; i < states.length; i++) {
    const state = states[i];
    entities[state.entity_id] = state;
  }

  return entities;
}

const subscribeUpdates = (conn, store) => conn.subscribeEvents(ev => processEvent(store, ev), "state_changed");

const entitiesColl = conn => Object(_collection_js__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_ent", fetchEntities, subscribeUpdates);
const subscribeEntities = (conn, onChange) => entitiesColl(conn).subscribe(onChange);

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/errors.js":
/*!*****************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/errors.js ***!
  \*****************************************************************/
/*! exports provided: ERR_CANNOT_CONNECT, ERR_INVALID_AUTH, ERR_CONNECTION_LOST, ERR_HASS_HOST_REQUIRED, ERR_INVALID_HTTPS_TO_HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CANNOT_CONNECT", function() { return ERR_CANNOT_CONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_AUTH", function() { return ERR_INVALID_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CONNECTION_LOST", function() { return ERR_CONNECTION_LOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_HASS_HOST_REQUIRED", function() { return ERR_HASS_HOST_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_HTTPS_TO_HTTP", function() { return ERR_INVALID_HTTPS_TO_HTTP; });
const ERR_CANNOT_CONNECT = 1;
const ERR_INVALID_AUTH = 2;
const ERR_CONNECTION_LOST = 3;
const ERR_HASS_HOST_REQUIRED = 4;
const ERR_INVALID_HTTPS_TO_HTTP = 5;

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/index.js ***!
  \****************************************************************/
/*! exports provided: createConnection, genClientId, genExpires, Auth, getAuth, getCollection, createCollection, Connection, subscribeConfig, subscribeServices, entitiesColl, subscribeEntities, ERR_CANNOT_CONNECT, ERR_INVALID_AUTH, ERR_CONNECTION_LOST, ERR_HASS_HOST_REQUIRED, ERR_INVALID_HTTPS_TO_HTTP, getStates, getServices, getConfig, getUser, callService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return createConnection; });
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.js */ "./node_modules/home-assistant-js-websocket/dist/socket.js");
/* harmony import */ var _connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection.js */ "./node_modules/home-assistant-js-websocket/dist/connection.js");
/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.js */ "./node_modules/home-assistant-js-websocket/dist/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "genClientId", function() { return _auth_js__WEBPACK_IMPORTED_MODULE_2__["genClientId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "genExpires", function() { return _auth_js__WEBPACK_IMPORTED_MODULE_2__["genExpires"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return _auth_js__WEBPACK_IMPORTED_MODULE_2__["Auth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return _auth_js__WEBPACK_IMPORTED_MODULE_2__["getAuth"]; });

/* harmony import */ var _collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection.js */ "./node_modules/home-assistant-js-websocket/dist/collection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return _collection_js__WEBPACK_IMPORTED_MODULE_3__["getCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCollection", function() { return _collection_js__WEBPACK_IMPORTED_MODULE_3__["createCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return _connection_js__WEBPACK_IMPORTED_MODULE_1__["Connection"]; });

/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.js */ "./node_modules/home-assistant-js-websocket/dist/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeConfig", function() { return _config_js__WEBPACK_IMPORTED_MODULE_4__["subscribeConfig"]; });

/* harmony import */ var _services_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services.js */ "./node_modules/home-assistant-js-websocket/dist/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeServices", function() { return _services_js__WEBPACK_IMPORTED_MODULE_5__["subscribeServices"]; });

/* harmony import */ var _entities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities.js */ "./node_modules/home-assistant-js-websocket/dist/entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entitiesColl", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_6__["entitiesColl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeEntities", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_6__["subscribeEntities"]; });

/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors.js */ "./node_modules/home-assistant-js-websocket/dist/errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_CANNOT_CONNECT", function() { return _errors_js__WEBPACK_IMPORTED_MODULE_7__["ERR_CANNOT_CONNECT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_AUTH", function() { return _errors_js__WEBPACK_IMPORTED_MODULE_7__["ERR_INVALID_AUTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_CONNECTION_LOST", function() { return _errors_js__WEBPACK_IMPORTED_MODULE_7__["ERR_CONNECTION_LOST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_HASS_HOST_REQUIRED", function() { return _errors_js__WEBPACK_IMPORTED_MODULE_7__["ERR_HASS_HOST_REQUIRED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_HTTPS_TO_HTTP", function() { return _errors_js__WEBPACK_IMPORTED_MODULE_7__["ERR_INVALID_HTTPS_TO_HTTP"]; });

/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commands.js */ "./node_modules/home-assistant-js-websocket/dist/commands.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return _commands_js__WEBPACK_IMPORTED_MODULE_8__["getStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return _commands_js__WEBPACK_IMPORTED_MODULE_8__["getServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return _commands_js__WEBPACK_IMPORTED_MODULE_8__["getConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _commands_js__WEBPACK_IMPORTED_MODULE_8__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return _commands_js__WEBPACK_IMPORTED_MODULE_8__["callService"]; });











async function createConnection(options) {
  const connOptions = Object.assign({
    setupRetry: 0,
    createSocket: _socket_js__WEBPACK_IMPORTED_MODULE_0__["createSocket"]
  }, options);
  const socket = await connOptions.createSocket(connOptions);
  const conn = new _connection_js__WEBPACK_IMPORTED_MODULE_1__["Connection"](socket, connOptions);
  return conn;
}

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/messages.js":
/*!*******************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/messages.js ***!
  \*******************************************************************/
/*! exports provided: auth, states, config, services, user, callService, subscribeEvents, unsubscribeEvents, ping, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return callService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEvents", function() { return subscribeEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribeEvents", function() { return unsubscribeEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ping", function() { return ping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
function auth(accessToken) {
  return {
    type: "auth",
    access_token: accessToken
  };
}
function states() {
  return {
    type: "get_states"
  };
}
function config() {
  return {
    type: "get_config"
  };
}
function services() {
  return {
    type: "get_services"
  };
}
function user() {
  return {
    type: "auth/current_user"
  };
}
function callService(domain, service, serviceData) {
  const message = {
    type: "call_service",
    domain,
    service
  };

  if (serviceData) {
    message.service_data = serviceData;
  }

  return message;
}
function subscribeEvents(eventType) {
  const message = {
    type: "subscribe_events"
  };

  if (eventType) {
    message.event_type = eventType;
  }

  return message;
}
function unsubscribeEvents(subscription) {
  return {
    type: "unsubscribe_events",
    subscription
  };
}
function ping() {
  return {
    type: "ping"
  };
}
function error(code, message) {
  return {
    type: "result",
    success: false,
    error: {
      code,
      message
    }
  };
}

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/services.js":
/*!*******************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/services.js ***!
  \*******************************************************************/
/*! exports provided: subscribeServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeServices", function() { return subscribeServices; });
/* harmony import */ var _collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection.js */ "./node_modules/home-assistant-js-websocket/dist/collection.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands.js */ "./node_modules/home-assistant-js-websocket/dist/commands.js");



function processServiceRegistered(state, event) {
  if (state === undefined) return null;
  const {
    domain,
    service
  } = event.data;
  const domainInfo = Object.assign({}, state[domain], {
    [service]: {
      description: "",
      fields: {}
    }
  });
  return {
    [domain]: domainInfo
  };
}

function processServiceRemoved(state, event) {
  if (state === undefined) return null;
  const {
    domain,
    service
  } = event.data;
  const curDomainInfo = state[domain];
  if (!curDomainInfo || !(service in curDomainInfo)) return null;
  const domainInfo = {};
  Object.keys(curDomainInfo).forEach(sKey => {
    if (sKey !== service) domainInfo[sKey] = curDomainInfo[sKey];
  });
  return {
    [domain]: domainInfo
  };
}

const fetchServices = conn => Object(_commands_js__WEBPACK_IMPORTED_MODULE_1__["getServices"])(conn);

const subscribeUpdates = (conn, store) => Promise.all([conn.subscribeEvents(store.action(processServiceRegistered), "service_registered"), conn.subscribeEvents(store.action(processServiceRemoved), "service_removed")]).then(unsubs => () => unsubs.forEach(fn => fn()));

const servicesColl = conn => Object(_collection_js__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_srv", fetchServices, subscribeUpdates);

const subscribeServices = (conn, onChange) => servicesColl(conn).subscribe(onChange);

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/socket.js":
/*!*****************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/socket.js ***!
  \*****************************************************************/
/*! exports provided: createSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSocket", function() { return createSocket; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/home-assistant-js-websocket/dist/errors.js");
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.js */ "./node_modules/home-assistant-js-websocket/dist/messages.js");
/**
 * Create a web socket connection with a Home Assistant instance.
 */


const DEBUG = false;
const MSG_TYPE_AUTH_REQUIRED = "auth_required";
const MSG_TYPE_AUTH_INVALID = "auth_invalid";
const MSG_TYPE_AUTH_OK = "auth_ok";
function createSocket(options) {
  if (!options.auth) {
    throw _errors_js__WEBPACK_IMPORTED_MODULE_0__["ERR_HASS_HOST_REQUIRED"];
  }

  const auth = options.auth; // Start refreshing expired tokens even before the WS connection is open.
  // We know that we will need auth anyway.

  let authRefreshTask = auth.expired ? auth.refreshAccessToken().then(() => {
    authRefreshTask = undefined;
  }, () => {
    authRefreshTask = undefined;
  }) : undefined; // Convert from http:// -> ws://, https:// -> wss://

  const url = auth.wsUrl;

  if (DEBUG) {
    console.log("[Auth phase] Initializing", url);
  }

  function connect(triesLeft, promResolve, promReject) {
    if (DEBUG) {
      console.log("[Auth Phase] New connection", url);
    }

    const socket = new WebSocket(url); // If invalid auth, we will not try to reconnect.

    let invalidAuth = false;

    const closeMessage = () => {
      // If we are in error handler make sure close handler doesn't also fire.
      socket.removeEventListener("close", closeMessage);

      if (invalidAuth) {
        promReject(_errors_js__WEBPACK_IMPORTED_MODULE_0__["ERR_INVALID_AUTH"]);
        return;
      } // Reject if we no longer have to retry


      if (triesLeft === 0) {
        // We never were connected and will not retry
        promReject(_errors_js__WEBPACK_IMPORTED_MODULE_0__["ERR_CANNOT_CONNECT"]);
        return;
      }

      const newTries = triesLeft === -1 ? -1 : triesLeft - 1; // Try again in a second

      setTimeout(() => connect(newTries, promResolve, promReject), 1000);
    }; // Auth is mandatory, so we can send the auth message right away.


    const handleOpen = async event => {
      try {
        if (auth.expired) {
          await (authRefreshTask ? authRefreshTask : auth.refreshAccessToken());
        }

        socket.send(JSON.stringify(_messages_js__WEBPACK_IMPORTED_MODULE_1__["auth"](auth.accessToken)));
      } catch (err) {
        // Refresh token failed
        invalidAuth = err === _errors_js__WEBPACK_IMPORTED_MODULE_0__["ERR_INVALID_AUTH"];
        socket.close();
      }
    };

    const handleMessage = async event => {
      const message = JSON.parse(event.data);

      if (DEBUG) {
        console.log("[Auth phase] Received", message);
      }

      switch (message.type) {
        case MSG_TYPE_AUTH_INVALID:
          invalidAuth = true;
          socket.close();
          break;

        case MSG_TYPE_AUTH_OK:
          socket.removeEventListener("open", handleOpen);
          socket.removeEventListener("message", handleMessage);
          socket.removeEventListener("close", closeMessage);
          socket.removeEventListener("error", closeMessage);
          socket.haVersion = message.ha_version;
          promResolve(socket);
          break;

        default:
          if (DEBUG) {
            // We already send response to this message when socket opens
            if (message.type !== MSG_TYPE_AUTH_REQUIRED) {
              console.warn("[Auth phase] Unhandled message", message);
            }
          }

      }
    };

    socket.addEventListener("open", handleOpen);
    socket.addEventListener("message", handleMessage);
    socket.addEventListener("close", closeMessage);
    socket.addEventListener("error", closeMessage);
  }

  return new Promise((resolve, reject) => connect(options.setupRetry, resolve, reject));
}

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/store.js":
/*!****************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/store.js ***!
  \****************************************************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
const createStore = state => {
  let listeners = [];

  function unsubscribe(listener) {
    let out = [];

    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i] === listener) {
        listener = null;
      } else {
        out.push(listeners[i]);
      }
    }

    listeners = out;
  }

  function setState(update, overwrite) {
    state = overwrite ? update : Object.assign(Object.assign({}, state), update);
    let currentListeners = listeners;

    for (let i = 0; i < currentListeners.length; i++) {
      currentListeners[i](state);
    }
  }
  /**
   * An observable state container, returned from {@link createStore}
   * @name store
   */


  return {
    get state() {
      return state;
    },

    /**
     * Create a bound copy of the given action function.
     * The bound returned function invokes action() and persists the result back to the store.
     * If the return value of `action` is a Promise, the resolved value will be used as state.
     * @param {Function} action	An action of the form `action(state, ...args) -> stateUpdate`
     * @returns {Function} boundAction()
     */
    action(action) {
      function apply(result) {
        setState(result, false);
      } // Note: perf tests verifying this implementation: https://esbench.com/bench/5a295e6299634800a0349500


      return function () {
        let args = [state];

        for (let i = 0; i < arguments.length; i++) args.push(arguments[i]); // @ts-ignore


        let ret = action.apply(this, args);

        if (ret != null) {
          if (ret.then) return ret.then(apply);
          return apply(ret);
        }
      };
    },

    /**
     * Apply a partial state object to the current state, invoking registered listeners.
     * @param {Object} update				An object with properties to be merged into state
     * @param {Boolean} [overwrite=false]	If `true`, update will replace state instead of being merged into it
     */
    setState,

    /**
     * Register a listener function to be called whenever state is changed. Returns an `unsubscribe()` function.
     * @param {Function} listener	A function to call when state changes. Gets passed the new state.
     * @returns {Function} unsubscribe()
     */
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        unsubscribe(listener);
      };
    } // /**
    //  * Remove a previously-registered listener function.
    //  * @param {Function} listener	The callback previously passed to `subscribe()` that should be removed.
    //  * @function
    //  */
    // unsubscribe,


  };
};

/***/ }),

/***/ "./node_modules/home-assistant-js-websocket/dist/util.js":
/*!***************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/util.js ***!
  \***************************************************************/
/*! exports provided: parseQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQuery", function() { return parseQuery; });
function parseQuery(queryString) {
  const query = {};
  const items = queryString.split("&");

  for (let i = 0; i < items.length; i++) {
    const item = items[i].split("=");
    const key = decodeURIComponent(item[0]);
    const value = item.length > 1 ? decodeURIComponent(item[1]) : undefined;
    query[key] = value;
  }

  return query;
}

/***/ }),

/***/ "./src/common/auth/token_storage.ts":
/*!******************************************!*\
  !*** ./src/common/auth/token_storage.ts ***!
  \******************************************/
/*! exports provided: askWrite, saveTokens, enableWrite, loadTokens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askWrite", function() { return askWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTokens", function() { return saveTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableWrite", function() { return enableWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTokens", function() { return loadTokens; });
const storage = window.localStorage || {};
// So that core.js and main app hit same shared object.
let tokenCache = window.__tokenCache;

if (!tokenCache) {
  tokenCache = window.__tokenCache = {
    tokens: undefined,
    writeEnabled: undefined
  };
}

function askWrite() {
  return tokenCache.tokens !== undefined && tokenCache.writeEnabled === undefined;
}
function saveTokens(tokens) {
  tokenCache.tokens = tokens;

  if (tokenCache.writeEnabled) {
    try {
      storage.hassTokens = JSON.stringify(tokens);
    } catch (err) {// write failed, ignore it. Happens if storage is full or private mode.
    }
  }
}
function enableWrite() {
  tokenCache.writeEnabled = true;

  if (tokenCache.tokens) {
    saveTokens(tokenCache.tokens);
  }
}
function loadTokens() {
  if (tokenCache.tokens === undefined) {
    try {
      // Delete the old token cache.
      delete storage.tokens;
      const tokens = storage.hassTokens;

      if (tokens) {
        tokenCache.tokens = JSON.parse(tokens);
        tokenCache.writeEnabled = true;
      } else {
        tokenCache.tokens = null;
      }
    } catch (err) {
      tokenCache.tokens = null;
    }
  }

  return tokenCache.tokens;
}

/***/ }),

/***/ "./src/data/auth.ts":
/*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
/*! exports provided: hassUrl, getSignedPath, fetchAuthProviders, createAuthForUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hassUrl", function() { return hassUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedPath", function() { return getSignedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthProviders", function() { return fetchAuthProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthForUser", function() { return createAuthForUser; });
const hassUrl = `${location.protocol}//${location.host}`;
const getSignedPath = (hass, path) => hass.callWS({
  type: "auth/sign_path",
  path
});
const fetchAuthProviders = () => fetch("/auth/providers", {
  credentials: "same-origin"
});
const createAuthForUser = async (hass, userId, username, password) => hass.callWS({
  type: "config/auth_provider/homeassistant/create",
  user_id: userId,
  username,
  password
});

/***/ }),

/***/ "./src/data/collection.ts":
/*!********************************!*\
  !*** ./src/data/collection.ts ***!
  \********************************/
/*! exports provided: getOptimisticCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptimisticCollection", function() { return getOptimisticCollection; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");


/**
 * Create an optimistic collection that includes a save function.
 * When the collection is saved, the collection is optimistically updated.
 * The update is reversed when the update failed.
 */
const getOptimisticCollection = (saveCollection, conn, key, fetchCollection, subscribeUpdates) => {
  const updateKey = `${key}-optimistic`;
  const collection = Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, key, fetchCollection, async (_conn, store) => {
    // Subscribe to original updates
    const subUpResult = subscribeUpdates ? subscribeUpdates(conn, store) : undefined; // Store the store

    conn[updateKey] = store; // Unsub function to undo both

    return () => {
      if (subUpResult) {
        subUpResult.then(unsub => unsub());
      }

      conn[updateKey] = undefined;
    };
  });
  return Object.assign({}, collection, {
    async save(data) {
      const store = conn[updateKey];
      let current; // Can be undefined if currently no subscribers

      if (store) {
        current = store.state;
        store.setState(data, true);
      }

      try {
        return await saveCollection(conn, data);
      } catch (err) {
        if (store) {
          store.setState(current, true);
        }

        throw err;
      }
    }

  });
};

/***/ }),

/***/ "./src/data/external.ts":
/*!******************************!*\
  !*** ./src/data/external.ts ***!
  \******************************/
/*! exports provided: isExternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExternal", function() { return isExternal; });
var _window$webkit, _window$webkit$messag;

const isExternal = window.externalApp || ((_window$webkit = window.webkit) === null || _window$webkit === void 0 ? void 0 : (_window$webkit$messag = _window$webkit.messageHandlers) === null || _window$webkit$messag === void 0 ? void 0 : _window$webkit$messag.getExternalAuth) || location.search.includes("external_auth=1");

/***/ }),

/***/ "./src/data/frontend.ts":
/*!******************************!*\
  !*** ./src/data/frontend.ts ***!
  \******************************/
/*! exports provided: fetchFrontendUserData, saveFrontendUserData, getOptimisticFrontendUserDataCollection, subscribeFrontendUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFrontendUserData", function() { return fetchFrontendUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFrontendUserData", function() { return saveFrontendUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptimisticFrontendUserDataCollection", function() { return getOptimisticFrontendUserDataCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeFrontendUserData", function() { return subscribeFrontendUserData; });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/data/collection.ts");

const fetchFrontendUserData = async (conn, key) => {
  const result = await conn.sendMessagePromise({
    type: "frontend/get_user_data",
    key
  });
  return result.value;
};
const saveFrontendUserData = async (conn, key, value) => conn.sendMessagePromise({
  type: "frontend/set_user_data",
  key,
  value
});
const getOptimisticFrontendUserDataCollection = (conn, userDataKey) => Object(_collection__WEBPACK_IMPORTED_MODULE_0__["getOptimisticCollection"])((_conn, data) => saveFrontendUserData(conn, userDataKey, // @ts-ignore
data), conn, `_frontendUserData-${userDataKey}`, () => fetchFrontendUserData(conn, userDataKey));
const subscribeFrontendUserData = (conn, userDataKey, onChange) => getOptimisticFrontendUserDataCollection(conn, userDataKey).subscribe(onChange);

/***/ }),

/***/ "./src/data/lovelace.ts":
/*!******************************!*\
  !*** ./src/data/lovelace.ts ***!
  \******************************/
/*! exports provided: fetchResources, createResource, updateResource, deleteResource, fetchDashboards, createDashboard, updateDashboard, deleteDashboard, fetchConfig, saveConfig, deleteConfig, subscribeLovelaceUpdates, getLovelaceCollection, getLegacyLovelaceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchResources", function() { return fetchResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResource", function() { return createResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateResource", function() { return updateResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResource", function() { return deleteResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDashboards", function() { return fetchDashboards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDashboard", function() { return createDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDashboard", function() { return updateDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDashboard", function() { return deleteDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfig", function() { return deleteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeLovelaceUpdates", function() { return subscribeLovelaceUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLovelaceCollection", function() { return getLovelaceCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegacyLovelaceCollection", function() { return getLegacyLovelaceCollection; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");

const fetchResources = conn => conn.sendMessagePromise({
  type: "lovelace/resources"
});
const createResource = (hass, values) => hass.callWS(Object.assign({
  type: "lovelace/resources/create"
}, values));
const updateResource = (hass, id, updates) => hass.callWS(Object.assign({
  type: "lovelace/resources/update",
  resource_id: id
}, updates));
const deleteResource = (hass, id) => hass.callWS({
  type: "lovelace/resources/delete",
  resource_id: id
});
const fetchDashboards = hass => hass.callWS({
  type: "lovelace/dashboards/list"
});
const createDashboard = (hass, values) => hass.callWS(Object.assign({
  type: "lovelace/dashboards/create"
}, values));
const updateDashboard = (hass, id, updates) => hass.callWS(Object.assign({
  type: "lovelace/dashboards/update",
  dashboard_id: id
}, updates));
const deleteDashboard = (hass, id) => hass.callWS({
  type: "lovelace/dashboards/delete",
  dashboard_id: id
});
const fetchConfig = (conn, urlPath, force) => conn.sendMessagePromise({
  type: "lovelace/config",
  url_path: urlPath,
  force
});
const saveConfig = (hass, urlPath, config) => hass.callWS({
  type: "lovelace/config/save",
  url_path: urlPath,
  config
});
const deleteConfig = (hass, urlPath) => hass.callWS({
  type: "lovelace/config/delete",
  url_path: urlPath
});
const subscribeLovelaceUpdates = (conn, urlPath, onChange) => conn.subscribeEvents(ev => {
  if (ev.data.url_path === urlPath) {
    onChange();
  }
}, "lovelace_updated");
const getLovelaceCollection = (conn, urlPath = null) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, `_lovelace_${urlPath !== null && urlPath !== void 0 ? urlPath : ""}`, conn2 => fetchConfig(conn2, urlPath, false), (_conn, store) => subscribeLovelaceUpdates(conn, urlPath, () => fetchConfig(conn, urlPath, false).then(config => store.setState(config, true)))); // Legacy functions to support cast for Home Assistion < 0.107

const fetchLegacyConfig = (conn, force) => conn.sendMessagePromise({
  type: "lovelace/config",
  force
});

const subscribeLegacyLovelaceUpdates = (conn, onChange) => conn.subscribeEvents(onChange, "lovelace_updated");

const getLegacyLovelaceCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_lovelace", conn2 => fetchLegacyConfig(conn2, false), (_conn, store) => subscribeLegacyLovelaceUpdates(conn, () => fetchLegacyConfig(conn, false).then(config => store.setState(config, true))));

/***/ }),

/***/ "./src/data/ws-panels.ts":
/*!*******************************!*\
  !*** ./src/data/ws-panels.ts ***!
  \*******************************/
/*! exports provided: subscribePanels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribePanels", function() { return subscribePanels; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");


const fetchPanels = conn => conn.sendMessagePromise({
  type: "get_panels"
});

const subscribeUpdates = (conn, store) => conn.subscribeEvents(() => fetchPanels(conn).then(panels => store.setState(panels, true)), "panels_updated");

const subscribePanels = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_pnl", fetchPanels, subscribeUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/ws-themes.ts":
/*!*******************************!*\
  !*** ./src/data/ws-themes.ts ***!
  \*******************************/
/*! exports provided: subscribeThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeThemes", function() { return subscribeThemes; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");


const fetchThemes = conn => conn.sendMessagePromise({
  type: "frontend/get_themes"
});

const subscribeUpdates = (conn, store) => conn.subscribeEvents(() => fetchThemes(conn).then(data => store.setState(data, true)), "themes_updated");

const subscribeThemes = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_thm", fetchThemes, subscribeUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/ws-user.ts":
/*!*****************************!*\
  !*** ./src/data/ws-user.ts ***!
  \*****************************/
/*! exports provided: userCollection, subscribeUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCollection", function() { return userCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeUser", function() { return subscribeUser; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");

const userCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_usr", () => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getUser"])(conn), undefined);
const subscribeUser = (conn, onChange) => userCollection(conn).subscribe(onChange);

/***/ }),

/***/ "./src/entrypoints/core.ts":
/*!*********************************!*\
  !*** ./src/entrypoints/core.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/index.js");
/* harmony import */ var _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/auth/token_storage */ "./src/common/auth/token_storage.ts");
/* harmony import */ var _data_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/auth */ "./src/data/auth.ts");
/* harmony import */ var _data_external__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/external */ "./src/data/external.ts");
/* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/frontend */ "./src/data/frontend.ts");
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/lovelace */ "./src/data/lovelace.ts");
/* harmony import */ var _data_ws_panels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/ws-panels */ "./src/data/ws-panels.ts");
/* harmony import */ var _data_ws_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/ws-themes */ "./src/data/ws-themes.ts");
/* harmony import */ var _data_ws_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/ws-user */ "./src/data/ws-user.ts");









const authProm = _data_external__WEBPACK_IMPORTED_MODULE_3__["isExternal"] ? () => __webpack_require__.e(/*! import() | external_auth */ "external_auth").then(__webpack_require__.bind(null, /*! ../external_app/external_auth */ "./src/external_app/external_auth.ts")).then(({
  createExternalAuth
}) => createExternalAuth(_data_auth__WEBPACK_IMPORTED_MODULE_2__["hassUrl"])) : () => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getAuth"])({
  hassUrl: _data_auth__WEBPACK_IMPORTED_MODULE_2__["hassUrl"],
  saveTokens: _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["saveTokens"],
  loadTokens: () => Promise.resolve(Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["loadTokens"])())
});

const connProm = async auth => {
  try {
    const conn = await Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({
      auth
    }); // Clear url if we have been able to establish a connection

    if (location.search.includes("auth_callback=1")) {
      history.replaceState(null, "", location.pathname);
    }

    return {
      auth,
      conn
    };
  } catch (err) {
    if (err !== home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["ERR_INVALID_AUTH"]) {
      throw err;
    } // We can get invalid auth if auth tokens were stored that are no longer valid


    if (_data_external__WEBPACK_IMPORTED_MODULE_3__["isExternal"]) {
      // Tell the external app to force refresh the access tokens.
      // This should trigger their unauthorized handling.
      await auth.refreshAccessToken(true);
    } else {
      // Clear stored tokens.
      Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["saveTokens"])(null);
    }

    auth = await authProm();
    const conn = await Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({
      auth
    });
    return {
      auth,
      conn
    };
  }
};

if (true) {
  // Remove adoptedStyleSheets so style inspector works on shadow DOM.
  // @ts-ignore
  delete Document.prototype.adoptedStyleSheets;
  performance.mark("hass-start");
}

window.hassConnection = authProm().then(connProm); // Start fetching some of the data that we will need.

window.hassConnection.then(({
  conn
}) => {
  const noop = () => {// do nothing
  };

  Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["subscribeEntities"])(conn, noop);
  Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["subscribeConfig"])(conn, noop);
  Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["subscribeServices"])(conn, noop);
  Object(_data_ws_panels__WEBPACK_IMPORTED_MODULE_6__["subscribePanels"])(conn, noop);
  Object(_data_ws_themes__WEBPACK_IMPORTED_MODULE_7__["subscribeThemes"])(conn, noop);
  Object(_data_ws_user__WEBPACK_IMPORTED_MODULE_8__["subscribeUser"])(conn, noop);
  Object(_data_frontend__WEBPACK_IMPORTED_MODULE_4__["subscribeFrontendUserData"])(conn, "core", noop);

  if (location.pathname === "/" || location.pathname.startsWith("/lovelace/")) {
    const llWindow = window;
    llWindow.llConfProm = Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_5__["fetchConfig"])(conn, null, false);
    llWindow.llConfProm.catch(() => {// Ignore it, it is handled by Lovelace panel.
    });
    llWindow.llResProm = Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_5__["fetchResources"])(conn);
  }
});
window.addEventListener("error", e => {
  const homeAssistant = document.querySelector("home-assistant");

  if (homeAssistant && homeAssistant.hass && homeAssistant.hass.callService) {
    homeAssistant.hass.callService("system_log", "write", {
      logger: `frontend.${ true ? "js_dev" : undefined}.${"latest"}.${"20200427.1".replace(".", "")}`,
      message: `${e.filename}:${e.lineno}:${e.colno} ${e.message}`
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvY29tbWFuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldC9kaXN0L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldC9kaXN0L2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldC9kaXN0L21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXQvZGlzdC9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3Qvc29ja2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXQvZGlzdC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F1dGgvdG9rZW5fc3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbGxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZXh0ZXJuYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZnJvbnRlbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvbG92ZWxhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvd3MtcGFuZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3dzLXRoZW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93cy11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeXBvaW50cy9jb3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29yZVwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiZXh0ZXJuYWxfYXV0aFwiOlwiZXh0ZXJuYWxfYXV0aFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5jaHVuay5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZnJvbnRlbmRfbGF0ZXN0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSBzZWxmW1wid2VicGFja0pzb25wXCJdID0gc2VsZltcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL2NvcmUudHNcIik7XG4iLCJpbXBvcnQgeyBwYXJzZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IHsgRVJSX0hBU1NfSE9TVF9SRVFVSVJFRCwgRVJSX0lOVkFMSURfQVVUSCwgRVJSX0lOVkFMSURfSFRUUFNfVE9fSFRUUCB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuZXhwb3J0IGNvbnN0IGdlbkNsaWVudElkID0gKCkgPT4gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9L2A7XG5leHBvcnQgY29uc3QgZ2VuRXhwaXJlcyA9IChleHBpcmVzX2luKSA9PiB7XG4gICAgcmV0dXJuIGV4cGlyZXNfaW4gKiAxMDAwICsgRGF0ZS5ub3coKTtcbn07XG5mdW5jdGlvbiBnZW5SZWRpcmVjdFVybCgpIHtcbiAgICAvLyBHZXQgY3VycmVudCB1cmwgYnV0IHdpdGhvdXQgIyBwYXJ0LlxuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3QsIHBhdGhuYW1lLCBzZWFyY2ggfSA9IGxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofWA7XG59XG5mdW5jdGlvbiBnZW5BdXRob3JpemVVcmwoaGFzc1VybCwgY2xpZW50SWQsIHJlZGlyZWN0VXJsLCBzdGF0ZSkge1xuICAgIGxldCBhdXRob3JpemVVcmwgPSBgJHtoYXNzVXJsfS9hdXRoL2F1dGhvcml6ZT9yZXNwb25zZV90eXBlPWNvZGUmcmVkaXJlY3RfdXJpPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0VXJsKX1gO1xuICAgIGlmIChjbGllbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICBhdXRob3JpemVVcmwgKz0gYCZjbGllbnRfaWQ9JHtlbmNvZGVVUklDb21wb25lbnQoY2xpZW50SWQpfWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgICBhdXRob3JpemVVcmwgKz0gYCZzdGF0ZT0ke2VuY29kZVVSSUNvbXBvbmVudChzdGF0ZSl9YDtcbiAgICB9XG4gICAgcmV0dXJuIGF1dGhvcml6ZVVybDtcbn1cbmZ1bmN0aW9uIHJlZGlyZWN0QXV0aG9yaXplKGhhc3NVcmwsIGNsaWVudElkLCByZWRpcmVjdFVybCwgc3RhdGUpIHtcbiAgICAvLyBBZGQgZWl0aGVyID9hdXRoX2NhbGxiYWNrPTEgb3IgJmF1dGhfY2FsbGJhY2s9MVxuICAgIHJlZGlyZWN0VXJsICs9IChyZWRpcmVjdFVybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wiKSArIFwiYXV0aF9jYWxsYmFjaz0xXCI7XG4gICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGdlbkF1dGhvcml6ZVVybChoYXNzVXJsLCBjbGllbnRJZCwgcmVkaXJlY3RVcmwsIHN0YXRlKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHRva2VuUmVxdWVzdChoYXNzVXJsLCBjbGllbnRJZCwgZGF0YSkge1xuICAgIC8vIEJyb3dzZXJzIGRvbid0IGFsbG93IGZldGNoaW5nIHRva2VucyBmcm9tIGh0dHBzIC0+IGh0dHAuXG4gICAgLy8gVGhyb3cgYW4gZXJyb3IgYmVjYXVzZSBpdCdzIGEgcGFpbiB0byBkZWJ1ZyB0aGlzLlxuICAgIC8vIEd1YXJkIGFnYWluc3Qgbm90IHdvcmtpbmcgaW4gbm9kZS5cbiAgICBjb25zdCBsID0gdHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uO1xuICAgIGlmIChsICYmIGwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgdGhlIGhhc3NVcmwgaXMgaG9zdGVkIG9uIGh0dHBzLlxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGEuaHJlZiA9IGhhc3NVcmw7XG4gICAgICAgIGlmIChhLnByb3RvY29sID09PSBcImh0dHA6XCIgJiYgYS5ob3N0bmFtZSAhPT0gXCJsb2NhbGhvc3RcIikge1xuICAgICAgICAgICAgdGhyb3cgRVJSX0lOVkFMSURfSFRUUFNfVE9fSFRUUDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGlmIChjbGllbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjbGllbnRfaWRcIiwgY2xpZW50SWQpO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGRhdGFba2V5XSk7XG4gICAgfSk7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGAke2hhc3NVcmx9L2F1dGgvdG9rZW5gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgfSk7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICAgIHRocm93IHJlc3Auc3RhdHVzID09PSA0MDAgLyogYXV0aCBpbnZhbGlkICovIHx8XG4gICAgICAgICAgICByZXNwLnN0YXR1cyA9PT0gNDAzIC8qIHVzZXIgbm90IGFjdGl2ZSAqL1xuICAgICAgICAgICAgPyBFUlJfSU5WQUxJRF9BVVRIXG4gICAgICAgICAgICA6IG5ldyBFcnJvcihcIlVuYWJsZSB0byBmZXRjaCB0b2tlbnNcIik7XG4gICAgfVxuICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgIHRva2Vucy5oYXNzVXJsID0gaGFzc1VybDtcbiAgICB0b2tlbnMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICB0b2tlbnMuZXhwaXJlcyA9IGdlbkV4cGlyZXModG9rZW5zLmV4cGlyZXNfaW4pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG5mdW5jdGlvbiBmZXRjaFRva2VuKGhhc3NVcmwsIGNsaWVudElkLCBjb2RlKSB7XG4gICAgcmV0dXJuIHRva2VuUmVxdWVzdChoYXNzVXJsLCBjbGllbnRJZCwge1xuICAgICAgICBjb2RlLFxuICAgICAgICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiXG4gICAgfSk7XG59XG5mdW5jdGlvbiBlbmNvZGVPQXV0aFN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbn1cbmZ1bmN0aW9uIGRlY29kZU9BdXRoU3RhdGUoZW5jb2RlZCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGF0b2IoZW5jb2RlZCkpO1xufVxuZXhwb3J0IGNsYXNzIEF1dGgge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHNhdmVUb2tlbnMpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fc2F2ZVRva2VucyA9IHNhdmVUb2tlbnM7XG4gICAgfVxuICAgIGdldCB3c1VybCgpIHtcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIGh0dHA6Ly8gLT4gd3M6Ly8sIGh0dHBzOi8vIC0+IHdzczovL1xuICAgICAgICByZXR1cm4gYHdzJHt0aGlzLmRhdGEuaGFzc1VybC5zdWJzdHIoNCl9L2FwaS93ZWJzb2NrZXRgO1xuICAgIH1cbiAgICBnZXQgYWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuYWNjZXNzX3Rva2VuO1xuICAgIH1cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgPiB0aGlzLmRhdGEuZXhwaXJlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVmcmVzaCB0aGUgYWNjZXNzIHRva2VuLlxuICAgICAqL1xuICAgIGFzeW5jIHJlZnJlc2hBY2Nlc3NUb2tlbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRva2VuUmVxdWVzdCh0aGlzLmRhdGEuaGFzc1VybCwgdGhpcy5kYXRhLmNsaWVudElkLCB7XG4gICAgICAgICAgICBncmFudF90eXBlOiBcInJlZnJlc2hfdG9rZW5cIixcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IHRoaXMuZGF0YS5yZWZyZXNoX3Rva2VuXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBY2Nlc3MgdG9rZW4gcmVzcG9uc2UgZG9lcyBub3QgY29udGFpbiByZWZyZXNoIHRva2VuLlxuICAgICAgICBkYXRhLnJlZnJlc2hfdG9rZW4gPSB0aGlzLmRhdGEucmVmcmVzaF90b2tlbjtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX3NhdmVUb2tlbnMpXG4gICAgICAgICAgICB0aGlzLl9zYXZlVG9rZW5zKGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXZva2UgdGhlIHJlZnJlc2ggJiBhY2Nlc3MgdG9rZW5zLlxuICAgICAqL1xuICAgIGFzeW5jIHJldm9rZSgpIHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIFwicmV2b2tlXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0b2tlblwiLCB0aGlzLmRhdGEucmVmcmVzaF90b2tlbik7XG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIGVycm9yIGNoZWNraW5nLCBhcyByZXZva2Ugd2lsbCBhbHdheXMgcmV0dXJuIDIwMFxuICAgICAgICBhd2FpdCBmZXRjaChgJHt0aGlzLmRhdGEuaGFzc1VybH0vYXV0aC90b2tlbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLl9zYXZlVG9rZW5zKSB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlVG9rZW5zKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGgob3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IGhhc3NVcmwgPSBvcHRpb25zLmhhc3NVcmw7XG4gICAgLy8gU3RyaXAgdHJhaWxpbmcgc2xhc2guXG4gICAgaWYgKGhhc3NVcmwgJiYgaGFzc1VybFtoYXNzVXJsLmxlbmd0aCAtIDFdID09PSBcIi9cIikge1xuICAgICAgICBoYXNzVXJsID0gaGFzc1VybC5zdWJzdHIoMCwgaGFzc1VybC5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgY29uc3QgY2xpZW50SWQgPSBvcHRpb25zLmNsaWVudElkICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsaWVudElkIDogZ2VuQ2xpZW50SWQoKTtcbiAgICAvLyBVc2UgYXV0aCBjb2RlIGlmIGl0IHdhcyBwYXNzZWQgaW5cbiAgICBpZiAoIWRhdGEgJiYgb3B0aW9ucy5hdXRoQ29kZSAmJiBoYXNzVXJsKSB7XG4gICAgICAgIGRhdGEgPSBhd2FpdCBmZXRjaFRva2VuKGhhc3NVcmwsIGNsaWVudElkLCBvcHRpb25zLmF1dGhDb2RlKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2F2ZVRva2Vucykge1xuICAgICAgICAgICAgb3B0aW9ucy5zYXZlVG9rZW5zKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIHdlIGNhbWUgYmFjayBmcm9tIGFuIGF1dGhvcml6ZSByZWRpcmVjdFxuICAgIGlmICghZGF0YSkge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHBhcnNlUXVlcnkobG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKSk7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGdvdCByZWRpcmVjdGVkIGhlcmUgZnJvbSBhdXRob3JpemUgcGFnZVxuICAgICAgICBpZiAoXCJhdXRoX2NhbGxiYWNrXCIgaW4gcXVlcnkpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgc3RhdGVcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZGVjb2RlT0F1dGhTdGF0ZShxdWVyeS5zdGF0ZSk7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2hUb2tlbihzdGF0ZS5oYXNzVXJsLCBzdGF0ZS5jbGllbnRJZCwgcXVlcnkuY29kZSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zYXZlVG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zYXZlVG9rZW5zKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNrIGZvciBzdG9yZWQgdG9rZW5zXG4gICAgaWYgKCFkYXRhICYmIG9wdGlvbnMubG9hZFRva2Vucykge1xuICAgICAgICBkYXRhID0gYXdhaXQgb3B0aW9ucy5sb2FkVG9rZW5zKCk7XG4gICAgfVxuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXV0aChkYXRhLCBvcHRpb25zLnNhdmVUb2tlbnMpO1xuICAgIH1cbiAgICBpZiAoaGFzc1VybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IEVSUl9IQVNTX0hPU1RfUkVRVUlSRUQ7XG4gICAgfVxuICAgIC8vIElmIG5vIHRva2VucyBmb3VuZCBidXQgYSBoYXNzVXJsIHdhcyBwYXNzZWQgaW4sIGxldCdzIGdvIGdldCBzb21lIHRva2VucyFcbiAgICByZWRpcmVjdEF1dGhvcml6ZShoYXNzVXJsLCBjbGllbnRJZCwgb3B0aW9ucy5yZWRpcmVjdFVybCB8fCBnZW5SZWRpcmVjdFVybCgpLCBlbmNvZGVPQXV0aFN0YXRlKHtcbiAgICAgICAgaGFzc1VybCxcbiAgICAgICAgY2xpZW50SWRcbiAgICB9KSk7XG4gICAgLy8gSnVzdCBkb24ndCByZXNvbHZlIHdoaWxlIHdlIG5hdmlnYXRlIHRvIG5leHQgcGFnZVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7IH0pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwiLi9zdG9yZS5qc1wiO1xuZXhwb3J0IGNvbnN0IGdldENvbGxlY3Rpb24gPSAoY29ubiwga2V5LCBmZXRjaENvbGxlY3Rpb24sIHN1YnNjcmliZVVwZGF0ZXMpID0+IHtcbiAgICBpZiAoY29ubltrZXldKSB7XG4gICAgICAgIHJldHVybiBjb25uW2tleV07XG4gICAgfVxuICAgIGxldCBhY3RpdmUgPSAwO1xuICAgIGxldCB1bnN1YlByb207XG4gICAgbGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoKTtcbiAgICBjb25zdCByZWZyZXNoID0gKCkgPT4gZmV0Y2hDb2xsZWN0aW9uKGNvbm4pLnRoZW4oc3RhdGUgPT4gc3RvcmUuc2V0U3RhdGUoc3RhdGUsIHRydWUpKTtcbiAgICBjb25zdCByZWZyZXNoU3dhbGxvdyA9ICgpID0+IHJlZnJlc2goKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFN3YWxsb3cgZXJyb3JzIGlmIHNvY2tldCBpcyBjb25uZWN0aW5nLCBjbG9zaW5nIG9yIGNsb3NlZC5cbiAgICAgICAgLy8gV2Ugd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGwgcmVmcmVzaCBhZ2FpbiB3aGVuIHdlIHJlLWVzdGFibGlzaCB0aGUgY29ubmVjdGlvbi5cbiAgICAgICAgLy8gVXNpbmcgY29ubi5zb2NrZXQuT1BFTiBpbnN0ZWFkIG9mIFdlYlNvY2tldCBmb3IgYmV0dGVyIG5vZGUgc3VwcG9ydFxuICAgICAgICBpZiAoY29ubi5zb2NrZXQucmVhZHlTdGF0ZSA9PSBjb25uLnNvY2tldC5PUEVOKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25uW2tleV0gPSB7XG4gICAgICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5zdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVmcmVzaCxcbiAgICAgICAgc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIGFjdGl2ZSsrO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyB3YXMgdGhlIGZpcnN0IHN1YnNjcmliZXIsIGF0dGFjaCBjb2xsZWN0aW9uXG4gICAgICAgICAgICBpZiAoYWN0aXZlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZVVwZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJQcm9tID0gc3Vic2NyaWJlVXBkYXRlcyhjb25uLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEZldGNoIHdoZW4gY29ubmVjdGlvbiByZS1lc3RhYmxpc2hlZC5cbiAgICAgICAgICAgICAgICBjb25uLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCByZWZyZXNoU3dhbGxvdyk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFN3YWxsb3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKHN0b3JlLnN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBjYWxsIGl0IHJpZ2h0IGF3YXkgc28gdGhhdCBjYWxsZXIgaGFzIHRpbWVcbiAgICAgICAgICAgICAgICAvLyB0byBpbml0aWFsaXplIGFsbCB0aGUgdGhpbmdzLlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3Vic2NyaWJlcihzdG9yZS5zdGF0ZSksIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICB1bnN1YigpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZS0tO1xuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlIGZyb20gY2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICBpZiAodW5zdWJQcm9tKVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5zdWJQcm9tLnRoZW4odW5zdWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc3ViKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29ubi5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlcIiwgcmVmcmVzaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGNvbm5ba2V5XTtcbn07XG4vLyBMZWdhY3kgbmFtZS4gSXQgZ2V0cyBhIGNvbGxlY3Rpb24gYW5kIHN1YnNjcmliZXMuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29sbGVjdGlvbiA9IChrZXksIGZldGNoQ29sbGVjdGlvbiwgc3Vic2NyaWJlVXBkYXRlcywgY29ubiwgb25DaGFuZ2UpID0+IGdldENvbGxlY3Rpb24oY29ubiwga2V5LCBmZXRjaENvbGxlY3Rpb24sIHN1YnNjcmliZVVwZGF0ZXMpLnN1YnNjcmliZShvbkNoYW5nZSk7XG4iLCJpbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlcy5qc1wiO1xuZXhwb3J0IGNvbnN0IGdldFN0YXRlcyA9IChjb25uZWN0aW9uKSA9PiBjb25uZWN0aW9uLnNlbmRNZXNzYWdlUHJvbWlzZShtZXNzYWdlcy5zdGF0ZXMoKSk7XG5leHBvcnQgY29uc3QgZ2V0U2VydmljZXMgPSAoY29ubmVjdGlvbikgPT4gY29ubmVjdGlvbi5zZW5kTWVzc2FnZVByb21pc2UobWVzc2FnZXMuc2VydmljZXMoKSk7XG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnID0gKGNvbm5lY3Rpb24pID0+IGNvbm5lY3Rpb24uc2VuZE1lc3NhZ2VQcm9taXNlKG1lc3NhZ2VzLmNvbmZpZygpKTtcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKGNvbm5lY3Rpb24pID0+IGNvbm5lY3Rpb24uc2VuZE1lc3NhZ2VQcm9taXNlKG1lc3NhZ2VzLnVzZXIoKSk7XG5leHBvcnQgY29uc3QgY2FsbFNlcnZpY2UgPSAoY29ubmVjdGlvbiwgZG9tYWluLCBzZXJ2aWNlLCBzZXJ2aWNlRGF0YSkgPT4gY29ubmVjdGlvbi5zZW5kTWVzc2FnZVByb21pc2UobWVzc2FnZXMuY2FsbFNlcnZpY2UoZG9tYWluLCBzZXJ2aWNlLCBzZXJ2aWNlRGF0YSkpO1xuIiwiaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbiB9IGZyb20gXCIuL2NvbGxlY3Rpb24uanNcIjtcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gXCIuL2NvbW1hbmRzLmpzXCI7XG5mdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50TG9hZGVkKHN0YXRlLCBldmVudCkge1xuICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21wb25lbnRzOiBzdGF0ZS5jb21wb25lbnRzLmNvbmNhdChldmVudC5kYXRhLmNvbXBvbmVudClcbiAgICB9O1xufVxuY29uc3QgZmV0Y2hDb25maWcgPSAoY29ubikgPT4gZ2V0Q29uZmlnKGNvbm4pO1xuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT4gUHJvbWlzZS5hbGwoW1xuICAgIGNvbm4uc3Vic2NyaWJlRXZlbnRzKHN0b3JlLmFjdGlvbihwcm9jZXNzQ29tcG9uZW50TG9hZGVkKSwgXCJjb21wb25lbnRfbG9hZGVkXCIpLFxuICAgIGNvbm4uc3Vic2NyaWJlRXZlbnRzKCgpID0+IGZldGNoQ29uZmlnKGNvbm4pLnRoZW4oY29uZmlnID0+IHN0b3JlLnNldFN0YXRlKGNvbmZpZywgdHJ1ZSkpLCBcImNvcmVfY29uZmlnX3VwZGF0ZWRcIilcbl0pLnRoZW4odW5zdWJzID0+ICgpID0+IHVuc3Vicy5mb3JFYWNoKHVuc3ViID0+IHVuc3ViKCkpKTtcbmNvbnN0IGNvbmZpZ0NvbGwgPSAoY29ubikgPT4gZ2V0Q29sbGVjdGlvbihjb25uLCBcIl9jbmZcIiwgZmV0Y2hDb25maWcsIHN1YnNjcmliZVVwZGF0ZXMpO1xuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUNvbmZpZyA9IChjb25uLCBvbkNoYW5nZSkgPT4gY29uZmlnQ29sbChjb25uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuIiwiLyoqXG4gKiBDb25uZWN0aW9uIHRoYXQgd3JhcHMgYSBzb2NrZXQgYW5kIHByb3ZpZGVzIGFuIGludGVyZmFjZSB0byBpbnRlcmFjdCB3aXRoXG4gKiB0aGUgSG9tZSBBc3Npc3RhbnQgd2Vic29ja2V0IEFQSS5cbiAqL1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXMuanNcIjtcbmltcG9ydCB7IEVSUl9JTlZBTElEX0FVVEgsIEVSUl9DT05ORUNUSU9OX0xPU1QgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmNvbnN0IERFQlVHID0gZmFsc2U7XG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioc29ja2V0LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIGNvbm5lY3Rpb24gb3B0aW9uc1xuICAgICAgICAvLyAgLSBzZXR1cFJldHJ5OiBhbW91bnQgb2YgbXMgdG8gcmV0cnkgd2hlbiB1bmFibGUgdG8gY29ubmVjdCBvbiBpbml0aWFsIHNldHVwXG4gICAgICAgIC8vICAtIGNyZWF0ZVNvY2tldDogY3JlYXRlIGEgbmV3IFNvY2tldCBjb25uZWN0aW9uXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIC8vIGlkIGlmIG5leHQgY29tbWFuZCB0byBzZW5kXG4gICAgICAgIHRoaXMuY29tbWFuZElkID0gMTtcbiAgICAgICAgLy8gaW5mbyBhYm91dCBhY3RpdmUgc3Vic2NyaXB0aW9ucyBhbmQgY29tbWFuZHMgaW4gZmxpZ2h0XG4gICAgICAgIHRoaXMuY29tbWFuZHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIG1hcCBvZiBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gdHJ1ZSBpZiBhIGNsb3NlIGlzIHJlcXVlc3RlZCBieSB0aGUgdXNlclxuICAgICAgICB0aGlzLmNsb3NlUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0U29ja2V0KHNvY2tldCk7XG4gICAgfVxuICAgIGdldCBoYVZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvY2tldC5oYVZlcnNpb247XG4gICAgfVxuICAgIHNldFNvY2tldChzb2NrZXQpIHtcbiAgICAgICAgY29uc3Qgb2xkU29ja2V0ID0gdGhpcy5zb2NrZXQ7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgICAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXYgPT4gdGhpcy5faGFuZGxlTWVzc2FnZShldikpO1xuICAgICAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsIGV2ID0+IHRoaXMuX2hhbmRsZUNsb3NlKGV2KSk7XG4gICAgICAgIGlmIChvbGRTb2NrZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IG9sZENvbW1hbmRzID0gdGhpcy5jb21tYW5kcztcbiAgICAgICAgICAgIC8vIHJlc2V0IHRvIG9yaWdpbmFsIHN0YXRlXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRJZCA9IDE7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgb2xkQ29tbWFuZHMuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXCJzdWJzY3JpYmVcIiBpbiBpbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZm8uc3Vic2NyaWJlKCkudGhlbih1bnN1YiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvLnVuc3Vic2NyaWJlID0gdW5zdWI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHJlc29sdmUgdGhpcyBpbiBjYXNlIGl0IHdhc24ndCByZXNvbHZlZCB5ZXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBzdWJzY3JpYmUgd2hpbGUgd2UncmUgZGlzY29ubmVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgcmVjb3ZlciBwcm9wZXJseS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8ucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwicmVhZHlcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmdldChldmVudFR5cGUpO1xuICAgICAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNldChldmVudFR5cGUsIGxpc3RlbmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnRUeXBlKTtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlyZUV2ZW50KGV2ZW50VHlwZSwgZXZlbnREYXRhKSB7XG4gICAgICAgICh0aGlzLmV2ZW50TGlzdGVuZXJzLmdldChldmVudFR5cGUpIHx8IFtdKS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKHRoaXMsIGV2ZW50RGF0YSkpO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZVJlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhIHNwZWNpZmljIG9yIGFsbCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgIHRvIGJlIGNhbGxlZCB3aGVuIGEgbmV3IGV2ZW50IGZpcmVzXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZVxuICAgICAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiB1bnN1YnNjcmliZSBmdW5jdGlvblxuICAgICAqL1xuICAgIGFzeW5jIHN1YnNjcmliZUV2ZW50cyhjYWxsYmFjaywgZXZlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZU1lc3NhZ2UoY2FsbGJhY2ssIG1lc3NhZ2VzLnN1YnNjcmliZUV2ZW50cyhldmVudFR5cGUpKTtcbiAgICB9XG4gICAgcGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2VQcm9taXNlKG1lc3NhZ2VzLnBpbmcoKSk7XG4gICAgfVxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UsIGNvbW1hbmRJZCkge1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZ1wiLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbW1hbmRJZCkge1xuICAgICAgICAgICAgY29tbWFuZElkID0gdGhpcy5fZ2VuQ21kSWQoKTtcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlLmlkID0gY29tbWFuZElkO1xuICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgc2VuZE1lc3NhZ2VQcm9taXNlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmRJZCA9IHRoaXMuX2dlbkNtZElkKCk7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnNldChjb21tYW5kSWQsIHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBjb21tYW5kSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbCBhIHdlYnNvY2tldCBjb21tYW5kIHRoYXQgc3RhcnRzIGEgc3Vic2NyaXB0aW9uIG9uIHRoZSBiYWNrZW5kLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gc3RhcnQgdGhlIHN1YnNjcmlwdGlvblxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gYSBuZXcgaXRlbSBhcnJpdmVzXG4gICAgICogQHJldHVybnMgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgYXN5bmMgc3Vic2NyaWJlTWVzc2FnZShjYWxsYmFjaywgc3Vic2NyaWJlTWVzc2FnZSkge1xuICAgICAgICAvLyBDb21tYW5kIElEIHRoYXQgd2lsbCBiZSB1c2VkXG4gICAgICAgIGNvbnN0IGNvbW1hbmRJZCA9IHRoaXMuX2dlbkNtZElkKCk7XG4gICAgICAgIGxldCBpbmZvO1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBXZSBzdG9yZSB1bnN1YnNjcmliZSBvbiBpbmZvIG9iamVjdC4gVGhhdCB3YXkgd2UgY2FuIG92ZXJ3cml0ZSBpdCBpbiBjYXNlXG4gICAgICAgICAgICAvLyB3ZSBnZXQgZGlzY29ubmVjdGVkIGFuZCB3ZSBoYXZlIHRvIHN1YnNjcmliZSBhZ2Fpbi5cbiAgICAgICAgICAgIGluZm8gPSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3QsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlOiAoKSA9PiB0aGlzLnN1YnNjcmliZU1lc3NhZ2UoY2FsbGJhY2ssIHN1YnNjcmliZU1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2VQcm9taXNlKG1lc3NhZ2VzLnVuc3Vic2NyaWJlRXZlbnRzKGNvbW1hbmRJZCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmRzLmRlbGV0ZShjb21tYW5kSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnNldChjb21tYW5kSWQsIGluZm8pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKHN1YnNjcmliZU1lc3NhZ2UsIGNvbW1hbmRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gSGFwcGVucyB3aGVuIHRoZSB3ZWJzb2NrZXQgaXMgYWxyZWFkeSBjbG9zaW5nLlxuICAgICAgICAgICAgICAgIC8vIERvbid0IGhhdmUgdG8gaGFuZGxlIHRoZSBlcnJvciwgcmVjb25uZWN0IGxvZ2ljIHdpbGwgcGljayBpdCB1cC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBpbmZvLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIF9oYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWRcIiwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuY29tbWFuZHMuZ2V0KG1lc3NhZ2UuaWQpO1xuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImV2ZW50XCI6XG4gICAgICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5jYWxsYmFjayhtZXNzYWdlLmV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVjZWl2ZWQgZXZlbnQgZm9yIHVua25vd24gc3Vic2NyaXB0aW9uICR7bWVzc2FnZS5pZH0uIFVuc3Vic2NyaWJpbmcuYCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VQcm9taXNlKG1lc3NhZ2VzLnVuc3Vic2NyaWJlRXZlbnRzKG1lc3NhZ2UuaWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVzdWx0XCI6XG4gICAgICAgICAgICAgICAgLy8gTm8gaW5mbyBpcyBmaW5lLiBJZiBqdXN0IHNlbmRNZXNzYWdlIGlzIHVzZWQsIHdlIGRpZCBub3Qgc3RvcmUgcHJvbWlzZSBmb3IgcmVzdWx0XG4gICAgICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5yZXNvbHZlKG1lc3NhZ2UucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHJlbW92ZSBzdWJzY3JpcHRpb25zLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoXCJzdWJzY3JpYmVcIiBpbiBpbmZvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZHMuZGVsZXRlKG1lc3NhZ2UuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5yZWplY3QobWVzc2FnZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmRzLmRlbGV0ZShtZXNzYWdlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwb25nXCI6XG4gICAgICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZHMuZGVsZXRlKG1lc3NhZ2UuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWNlaXZlZCB1bmtub3duIHBvbmcgcmVzcG9uc2UgJHttZXNzYWdlLmlkfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlVuaGFuZGxlZCBtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfaGFuZGxlQ2xvc2UoZXYpIHtcbiAgICAgICAgLy8gUmVqZWN0IGluLWZsaWdodCBzZW5kTWVzc2FnZVByb21pc2UgcmVxdWVzdHNcbiAgICAgICAgdGhpcy5jb21tYW5kcy5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY2FuY2VsIHN1YnNjcmliZUV2ZW50cyBjb21tYW5kcyBpbiBmbGlnaHRcbiAgICAgICAgICAgIC8vIGFzIHdlIHdpbGwgYmUgYWJsZSB0byByZWNvdmVyIHRoZW0uXG4gICAgICAgICAgICBpZiAoIShcInN1YnNjcmliZVwiIGluIGluZm8pKSB7XG4gICAgICAgICAgICAgICAgaW5mby5yZWplY3QobWVzc2FnZXMuZXJyb3IoRVJSX0NPTk5FQ1RJT05fTE9TVCwgXCJDb25uZWN0aW9uIGxvc3RcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VSZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcmVFdmVudChcImRpc2Nvbm5lY3RlZFwiKTtcbiAgICAgICAgLy8gRGlzYWJsZSBzZXR1cFJldHJ5LCB3ZSBjb250cm9sIGl0IGhlcmUgd2l0aCBhdXRvLWJhY2tvZmZcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgeyBzZXR1cFJldHJ5OiAwIH0pO1xuICAgICAgICBjb25zdCByZWNvbm5lY3QgPSAodHJpZXMpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyeWluZyB0byByZWNvbm5lY3RcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvY2tldCA9IGF3YWl0IG9wdGlvbnMuY3JlYXRlU29ja2V0KG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNvY2tldChzb2NrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgPT09IEVSUl9JTlZBTElEX0FVVEgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwicmVjb25uZWN0LWVycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvbm5lY3QodHJpZXMgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIE1hdGgubWluKHRyaWVzLCA1KSAqIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICByZWNvbm5lY3QoMCk7XG4gICAgfVxuICAgIF9nZW5DbWRJZCgpIHtcbiAgICAgICAgcmV0dXJuICsrdGhpcy5jb21tYW5kSWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbiB9IGZyb20gXCIuL2NvbGxlY3Rpb24uanNcIjtcbmltcG9ydCB7IGdldFN0YXRlcyB9IGZyb20gXCIuL2NvbW1hbmRzLmpzXCI7XG5mdW5jdGlvbiBwcm9jZXNzRXZlbnQoc3RvcmUsIGV2ZW50KSB7XG4gICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5zdGF0ZTtcbiAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHsgZW50aXR5X2lkLCBuZXdfc3RhdGUgfSA9IGV2ZW50LmRhdGE7XG4gICAgaWYgKG5ld19zdGF0ZSkge1xuICAgICAgICBzdG9yZS5zZXRTdGF0ZSh7IFtuZXdfc3RhdGUuZW50aXR5X2lkXTogbmV3X3N0YXRlIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3RW50aXRpZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XG4gICAgICAgIGRlbGV0ZSBuZXdFbnRpdGllc1tlbnRpdHlfaWRdO1xuICAgICAgICBzdG9yZS5zZXRTdGF0ZShuZXdFbnRpdGllcywgdHJ1ZSk7XG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hFbnRpdGllcyhjb25uKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gYXdhaXQgZ2V0U3RhdGVzKGNvbm4pO1xuICAgIGNvbnN0IGVudGl0aWVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXNbaV07XG4gICAgICAgIGVudGl0aWVzW3N0YXRlLmVudGl0eV9pZF0gPSBzdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGVudGl0aWVzO1xufVxuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT4gY29ubi5zdWJzY3JpYmVFdmVudHMoZXYgPT4gcHJvY2Vzc0V2ZW50KHN0b3JlLCBldiksIFwic3RhdGVfY2hhbmdlZFwiKTtcbmV4cG9ydCBjb25zdCBlbnRpdGllc0NvbGwgPSAoY29ubikgPT4gZ2V0Q29sbGVjdGlvbihjb25uLCBcIl9lbnRcIiwgZmV0Y2hFbnRpdGllcywgc3Vic2NyaWJlVXBkYXRlcyk7XG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXRpZXMgPSAoY29ubiwgb25DaGFuZ2UpID0+IGVudGl0aWVzQ29sbChjb25uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuIiwiZXhwb3J0IGNvbnN0IEVSUl9DQU5OT1RfQ09OTkVDVCA9IDE7XG5leHBvcnQgY29uc3QgRVJSX0lOVkFMSURfQVVUSCA9IDI7XG5leHBvcnQgY29uc3QgRVJSX0NPTk5FQ1RJT05fTE9TVCA9IDM7XG5leHBvcnQgY29uc3QgRVJSX0hBU1NfSE9TVF9SRVFVSVJFRCA9IDQ7XG5leHBvcnQgY29uc3QgRVJSX0lOVkFMSURfSFRUUFNfVE9fSFRUUCA9IDU7XG4iLCJpbXBvcnQgeyBjcmVhdGVTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXQuanNcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi9jb25uZWN0aW9uLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9hdXRoLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsZWN0aW9uLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb25uZWN0aW9uLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb25maWcuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NlcnZpY2VzLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lbnRpdGllcy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb21tYW5kcy5qc1wiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3Rpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IGNvbm5PcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHNldHVwUmV0cnk6IDAsIGNyZWF0ZVNvY2tldCB9LCBvcHRpb25zKTtcbiAgICBjb25zdCBzb2NrZXQgPSBhd2FpdCBjb25uT3B0aW9ucy5jcmVhdGVTb2NrZXQoY29ubk9wdGlvbnMpO1xuICAgIGNvbnN0IGNvbm4gPSBuZXcgQ29ubmVjdGlvbihzb2NrZXQsIGNvbm5PcHRpb25zKTtcbiAgICByZXR1cm4gY29ubjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhdXRoKGFjY2Vzc1Rva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJhdXRoXCIsXG4gICAgICAgIGFjY2Vzc190b2tlbjogYWNjZXNzVG9rZW5cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcImdldF9zdGF0ZXNcIlxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gY29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiZ2V0X2NvbmZpZ1wiXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcImdldF9zZXJ2aWNlc1wiXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiYXV0aC9jdXJyZW50X3VzZXJcIlxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsbFNlcnZpY2UoZG9tYWluLCBzZXJ2aWNlLCBzZXJ2aWNlRGF0YSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6IFwiY2FsbF9zZXJ2aWNlXCIsXG4gICAgICAgIGRvbWFpbixcbiAgICAgICAgc2VydmljZVxuICAgIH07XG4gICAgaWYgKHNlcnZpY2VEYXRhKSB7XG4gICAgICAgIG1lc3NhZ2Uuc2VydmljZV9kYXRhID0gc2VydmljZURhdGE7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZUV2ZW50cyhldmVudFR5cGUpIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgICB0eXBlOiBcInN1YnNjcmliZV9ldmVudHNcIlxuICAgIH07XG4gICAgaWYgKGV2ZW50VHlwZSkge1xuICAgICAgICBtZXNzYWdlLmV2ZW50X3R5cGUgPSBldmVudFR5cGU7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc3Vic2NyaWJlRXZlbnRzKHN1YnNjcmlwdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidW5zdWJzY3JpYmVfZXZlbnRzXCIsXG4gICAgICAgIHN1YnNjcmlwdGlvblxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcGluZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInBpbmdcIlxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZXJyb3IoY29kZSwgbWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwicmVzdWx0XCIsXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBnZXRDb2xsZWN0aW9uIH0gZnJvbSBcIi4vY29sbGVjdGlvbi5qc1wiO1xuaW1wb3J0IHsgZ2V0U2VydmljZXMgfSBmcm9tIFwiLi9jb21tYW5kcy5qc1wiO1xuZnVuY3Rpb24gcHJvY2Vzc1NlcnZpY2VSZWdpc3RlcmVkKHN0YXRlLCBldmVudCkge1xuICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IGRvbWFpbiwgc2VydmljZSB9ID0gZXZlbnQuZGF0YTtcbiAgICBjb25zdCBkb21haW5JbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVbZG9tYWluXSwge1xuICAgICAgICBbc2VydmljZV06IHsgZGVzY3JpcHRpb246IFwiXCIsIGZpZWxkczoge30gfVxuICAgIH0pO1xuICAgIHJldHVybiB7IFtkb21haW5dOiBkb21haW5JbmZvIH07XG59XG5mdW5jdGlvbiBwcm9jZXNzU2VydmljZVJlbW92ZWQoc3RhdGUsIGV2ZW50KSB7XG4gICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHsgZG9tYWluLCBzZXJ2aWNlIH0gPSBldmVudC5kYXRhO1xuICAgIGNvbnN0IGN1ckRvbWFpbkluZm8gPSBzdGF0ZVtkb21haW5dO1xuICAgIGlmICghY3VyRG9tYWluSW5mbyB8fCAhKHNlcnZpY2UgaW4gY3VyRG9tYWluSW5mbykpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGRvbWFpbkluZm8gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhjdXJEb21haW5JbmZvKS5mb3JFYWNoKHNLZXkgPT4ge1xuICAgICAgICBpZiAoc0tleSAhPT0gc2VydmljZSlcbiAgICAgICAgICAgIGRvbWFpbkluZm9bc0tleV0gPSBjdXJEb21haW5JbmZvW3NLZXldO1xuICAgIH0pO1xuICAgIHJldHVybiB7IFtkb21haW5dOiBkb21haW5JbmZvIH07XG59XG5jb25zdCBmZXRjaFNlcnZpY2VzID0gKGNvbm4pID0+IGdldFNlcnZpY2VzKGNvbm4pO1xuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT4gUHJvbWlzZS5hbGwoW1xuICAgIGNvbm4uc3Vic2NyaWJlRXZlbnRzKHN0b3JlLmFjdGlvbihwcm9jZXNzU2VydmljZVJlZ2lzdGVyZWQpLCBcInNlcnZpY2VfcmVnaXN0ZXJlZFwiKSxcbiAgICBjb25uLnN1YnNjcmliZUV2ZW50cyhzdG9yZS5hY3Rpb24ocHJvY2Vzc1NlcnZpY2VSZW1vdmVkKSwgXCJzZXJ2aWNlX3JlbW92ZWRcIilcbl0pLnRoZW4odW5zdWJzID0+ICgpID0+IHVuc3Vicy5mb3JFYWNoKGZuID0+IGZuKCkpKTtcbmNvbnN0IHNlcnZpY2VzQ29sbCA9IChjb25uKSA9PiBnZXRDb2xsZWN0aW9uKGNvbm4sIFwiX3NydlwiLCBmZXRjaFNlcnZpY2VzLCBzdWJzY3JpYmVVcGRhdGVzKTtcbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVTZXJ2aWNlcyA9IChjb25uLCBvbkNoYW5nZSkgPT4gc2VydmljZXNDb2xsKGNvbm4pLnN1YnNjcmliZShvbkNoYW5nZSk7XG4iLCIvKipcbiAqIENyZWF0ZSBhIHdlYiBzb2NrZXQgY29ubmVjdGlvbiB3aXRoIGEgSG9tZSBBc3Npc3RhbnQgaW5zdGFuY2UuXG4gKi9cbmltcG9ydCB7IEVSUl9JTlZBTElEX0FVVEgsIEVSUl9DQU5OT1RfQ09OTkVDVCwgRVJSX0hBU1NfSE9TVF9SRVFVSVJFRCB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXMuanNcIjtcbmNvbnN0IERFQlVHID0gZmFsc2U7XG5jb25zdCBNU0dfVFlQRV9BVVRIX1JFUVVJUkVEID0gXCJhdXRoX3JlcXVpcmVkXCI7XG5jb25zdCBNU0dfVFlQRV9BVVRIX0lOVkFMSUQgPSBcImF1dGhfaW52YWxpZFwiO1xuY29uc3QgTVNHX1RZUEVfQVVUSF9PSyA9IFwiYXV0aF9va1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNvY2tldChvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLmF1dGgpIHtcbiAgICAgICAgdGhyb3cgRVJSX0hBU1NfSE9TVF9SRVFVSVJFRDtcbiAgICB9XG4gICAgY29uc3QgYXV0aCA9IG9wdGlvbnMuYXV0aDtcbiAgICAvLyBTdGFydCByZWZyZXNoaW5nIGV4cGlyZWQgdG9rZW5zIGV2ZW4gYmVmb3JlIHRoZSBXUyBjb25uZWN0aW9uIGlzIG9wZW4uXG4gICAgLy8gV2Uga25vdyB0aGF0IHdlIHdpbGwgbmVlZCBhdXRoIGFueXdheS5cbiAgICBsZXQgYXV0aFJlZnJlc2hUYXNrID0gYXV0aC5leHBpcmVkXG4gICAgICAgID8gYXV0aC5yZWZyZXNoQWNjZXNzVG9rZW4oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGF1dGhSZWZyZXNoVGFzayA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgYXV0aFJlZnJlc2hUYXNrID0gdW5kZWZpbmVkO1xuICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAvLyBDb252ZXJ0IGZyb20gaHR0cDovLyAtPiB3czovLywgaHR0cHM6Ly8gLT4gd3NzOi8vXG4gICAgY29uc3QgdXJsID0gYXV0aC53c1VybDtcbiAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQXV0aCBwaGFzZV0gSW5pdGlhbGl6aW5nXCIsIHVybCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbm5lY3QodHJpZXNMZWZ0LCBwcm9tUmVzb2x2ZSwgcHJvbVJlamVjdCkge1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0F1dGggUGhhc2VdIE5ldyBjb25uZWN0aW9uXCIsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgICAgICAvLyBJZiBpbnZhbGlkIGF1dGgsIHdlIHdpbGwgbm90IHRyeSB0byByZWNvbm5lY3QuXG4gICAgICAgIGxldCBpbnZhbGlkQXV0aCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjbG9zZU1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgaW4gZXJyb3IgaGFuZGxlciBtYWtlIHN1cmUgY2xvc2UgaGFuZGxlciBkb2Vzbid0IGFsc28gZmlyZS5cbiAgICAgICAgICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgY2xvc2VNZXNzYWdlKTtcbiAgICAgICAgICAgIGlmIChpbnZhbGlkQXV0aCkge1xuICAgICAgICAgICAgICAgIHByb21SZWplY3QoRVJSX0lOVkFMSURfQVVUSCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVqZWN0IGlmIHdlIG5vIGxvbmdlciBoYXZlIHRvIHJldHJ5XG4gICAgICAgICAgICBpZiAodHJpZXNMZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgbmV2ZXIgd2VyZSBjb25uZWN0ZWQgYW5kIHdpbGwgbm90IHJldHJ5XG4gICAgICAgICAgICAgICAgcHJvbVJlamVjdChFUlJfQ0FOTk9UX0NPTk5FQ1QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1RyaWVzID0gdHJpZXNMZWZ0ID09PSAtMSA/IC0xIDogdHJpZXNMZWZ0IC0gMTtcbiAgICAgICAgICAgIC8vIFRyeSBhZ2FpbiBpbiBhIHNlY29uZFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb25uZWN0KG5ld1RyaWVzLCBwcm9tUmVzb2x2ZSwgcHJvbVJlamVjdCksIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICAvLyBBdXRoIGlzIG1hbmRhdG9yeSwgc28gd2UgY2FuIHNlbmQgdGhlIGF1dGggbWVzc2FnZSByaWdodCBhd2F5LlxuICAgICAgICBjb25zdCBoYW5kbGVPcGVuID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChhdXRoLmV4cGlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgKGF1dGhSZWZyZXNoVGFzayA/IGF1dGhSZWZyZXNoVGFzayA6IGF1dGgucmVmcmVzaEFjY2Vzc1Rva2VuKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlcy5hdXRoKGF1dGguYWNjZXNzVG9rZW4pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVmcmVzaCB0b2tlbiBmYWlsZWRcbiAgICAgICAgICAgICAgICBpbnZhbGlkQXV0aCA9IGVyciA9PT0gRVJSX0lOVkFMSURfQVVUSDtcbiAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltBdXRoIHBoYXNlXSBSZWNlaXZlZFwiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBNU0dfVFlQRV9BVVRIX0lOVkFMSUQ6XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRBdXRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTVNHX1RZUEVfQVVUSF9PSzpcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsIGhhbmRsZU9wZW4pO1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgY2xvc2VNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBjbG9zZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXQuaGFWZXJzaW9uID0gbWVzc2FnZS5oYV92ZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICBwcm9tUmVzb2x2ZShzb2NrZXQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGFscmVhZHkgc2VuZCByZXNwb25zZSB0byB0aGlzIG1lc3NhZ2Ugd2hlbiBzb2NrZXQgb3BlbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnR5cGUgIT09IE1TR19UWVBFX0FVVEhfUkVRVUlSRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbQXV0aCBwaGFzZV0gVW5oYW5kbGVkIG1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsIGhhbmRsZU9wZW4pO1xuICAgICAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgY2xvc2VNZXNzYWdlKTtcbiAgICAgICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBjbG9zZU1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gY29ubmVjdChvcHRpb25zLnNldHVwUmV0cnksIHJlc29sdmUsIHJlamVjdCkpO1xufVxuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVN0b3JlID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IGxpc3RlbmVycyA9IFtdO1xuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgIGxldCBvdXQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnMgPSBvdXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFN0YXRlKHVwZGF0ZSwgb3ZlcndyaXRlKSB7XG4gICAgICAgIHN0YXRlID0gb3ZlcndyaXRlID8gdXBkYXRlIDogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHVwZGF0ZSk7XG4gICAgICAgIGxldCBjdXJyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0ZW5lcnNbaV0oc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFuIG9ic2VydmFibGUgc3RhdGUgY29udGFpbmVyLCByZXR1cm5lZCBmcm9tIHtAbGluayBjcmVhdGVTdG9yZX1cbiAgICAgKiBAbmFtZSBzdG9yZVxuICAgICAqL1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZSBhIGJvdW5kIGNvcHkgb2YgdGhlIGdpdmVuIGFjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAgICogVGhlIGJvdW5kIHJldHVybmVkIGZ1bmN0aW9uIGludm9rZXMgYWN0aW9uKCkgYW5kIHBlcnNpc3RzIHRoZSByZXN1bHQgYmFjayB0byB0aGUgc3RvcmUuXG4gICAgICAgICAqIElmIHRoZSByZXR1cm4gdmFsdWUgb2YgYGFjdGlvbmAgaXMgYSBQcm9taXNlLCB0aGUgcmVzb2x2ZWQgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIHN0YXRlLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb25cdEFuIGFjdGlvbiBvZiB0aGUgZm9ybSBgYWN0aW9uKHN0YXRlLCAuLi5hcmdzKSAtPiBzdGF0ZVVwZGF0ZWBcbiAgICAgICAgICogQHJldHVybnMge0Z1bmN0aW9ufSBib3VuZEFjdGlvbigpXG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBhcHBseShyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShyZXN1bHQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vdGU6IHBlcmYgdGVzdHMgdmVyaWZ5aW5nIHRoaXMgaW1wbGVtZW50YXRpb246IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWEyOTVlNjI5OTYzNDgwMGEwMzQ5NTAwXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBhcmdzID0gW3N0YXRlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGxldCByZXQgPSBhY3Rpb24uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKHJldCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQudGhlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQudGhlbihhcHBseSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcHBseShyZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcHBseSBhIHBhcnRpYWwgc3RhdGUgb2JqZWN0IHRvIHRoZSBjdXJyZW50IHN0YXRlLCBpbnZva2luZyByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZVx0XHRcdFx0QW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyB0byBiZSBtZXJnZWQgaW50byBzdGF0ZVxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvdmVyd3JpdGU9ZmFsc2VdXHRJZiBgdHJ1ZWAsIHVwZGF0ZSB3aWxsIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBiZWluZyBtZXJnZWQgaW50byBpdFxuICAgICAgICAgKi9cbiAgICAgICAgc2V0U3RhdGUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuZXZlciBzdGF0ZSBpcyBjaGFuZ2VkLiBSZXR1cm5zIGFuIGB1bnN1YnNjcmliZSgpYCBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcdEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHN0YXRlIGNoYW5nZXMuIEdldHMgcGFzc2VkIHRoZSBuZXcgc3RhdGUuXG4gICAgICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdW5zdWJzY3JpYmUoKVxuICAgICAgICAgKi9cbiAgICAgICAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gLyoqXG4gICAgICAgIC8vICAqIFJlbW92ZSBhIHByZXZpb3VzbHktcmVnaXN0ZXJlZCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAgICAgICAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcdFRoZSBjYWxsYmFjayBwcmV2aW91c2x5IHBhc3NlZCB0byBgc3Vic2NyaWJlKClgIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXG4gICAgICAgIC8vICAqIEBmdW5jdGlvblxuICAgICAgICAvLyAgKi9cbiAgICAgICAgLy8gdW5zdWJzY3JpYmUsXG4gICAgfTtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeShxdWVyeVN0cmluZykge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge307XG4gICAgY29uc3QgaXRlbXMgPSBxdWVyeVN0cmluZy5zcGxpdChcIiZcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgICBjb25zdCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoaXRlbVswXSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS5sZW5ndGggPiAxID8gZGVjb2RlVVJJQ29tcG9uZW50KGl0ZW1bMV0pIDogdW5kZWZpbmVkO1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbn1cbiIsImltcG9ydCB7IEF1dGhEYXRhIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5jb25zdCBzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZSB8fCB7fTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX3Rva2VuQ2FjaGU6IHtcbiAgICAgIC8vIHVuZGVmaW5lZDogd2UgaGF2ZW4ndCBsb2FkZWQgeWV0XG4gICAgICAvLyBudWxsOiBub25lIHN0b3JlZFxuICAgICAgdG9rZW5zPzogQXV0aERhdGEgfCBudWxsO1xuICAgICAgd3JpdGVFbmFibGVkPzogYm9vbGVhbjtcbiAgICB9O1xuICB9XG59XG5cbi8vIFNvIHRoYXQgY29yZS5qcyBhbmQgbWFpbiBhcHAgaGl0IHNhbWUgc2hhcmVkIG9iamVjdC5cbmxldCB0b2tlbkNhY2hlID0gd2luZG93Ll9fdG9rZW5DYWNoZTtcbmlmICghdG9rZW5DYWNoZSkge1xuICB0b2tlbkNhY2hlID0gd2luZG93Ll9fdG9rZW5DYWNoZSA9IHtcbiAgICB0b2tlbnM6IHVuZGVmaW5lZCxcbiAgICB3cml0ZUVuYWJsZWQ6IHVuZGVmaW5lZCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFza1dyaXRlKCkge1xuICByZXR1cm4gKFxuICAgIHRva2VuQ2FjaGUudG9rZW5zICE9PSB1bmRlZmluZWQgJiYgdG9rZW5DYWNoZS53cml0ZUVuYWJsZWQgPT09IHVuZGVmaW5lZFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRva2Vucyh0b2tlbnM6IEF1dGhEYXRhIHwgbnVsbCkge1xuICB0b2tlbkNhY2hlLnRva2VucyA9IHRva2VucztcbiAgaWYgKHRva2VuQ2FjaGUud3JpdGVFbmFibGVkKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UuaGFzc1Rva2VucyA9IEpTT04uc3RyaW5naWZ5KHRva2Vucyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyB3cml0ZSBmYWlsZWQsIGlnbm9yZSBpdC4gSGFwcGVucyBpZiBzdG9yYWdlIGlzIGZ1bGwgb3IgcHJpdmF0ZSBtb2RlLlxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlV3JpdGUoKSB7XG4gIHRva2VuQ2FjaGUud3JpdGVFbmFibGVkID0gdHJ1ZTtcbiAgaWYgKHRva2VuQ2FjaGUudG9rZW5zKSB7XG4gICAgc2F2ZVRva2Vucyh0b2tlbkNhY2hlLnRva2Vucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUb2tlbnMoKSB7XG4gIGlmICh0b2tlbkNhY2hlLnRva2VucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIERlbGV0ZSB0aGUgb2xkIHRva2VuIGNhY2hlLlxuICAgICAgZGVsZXRlIHN0b3JhZ2UudG9rZW5zO1xuICAgICAgY29uc3QgdG9rZW5zID0gc3RvcmFnZS5oYXNzVG9rZW5zO1xuICAgICAgaWYgKHRva2Vucykge1xuICAgICAgICB0b2tlbkNhY2hlLnRva2VucyA9IEpTT04ucGFyc2UodG9rZW5zKTtcbiAgICAgICAgdG9rZW5DYWNoZS53cml0ZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW5DYWNoZS50b2tlbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdG9rZW5DYWNoZS50b2tlbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9rZW5DYWNoZS50b2tlbnM7XG59XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFByb3ZpZGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlZGVudGlhbCB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduZWRQYXRoIHtcbiAgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaGFzc1VybCA9IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fWA7XG5cbmV4cG9ydCBjb25zdCBnZXRTaWduZWRQYXRoID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBwYXRoOiBzdHJpbmdcbik6IFByb21pc2U8U2lnbmVkUGF0aD4gPT4gaGFzcy5jYWxsV1MoeyB0eXBlOiBcImF1dGgvc2lnbl9wYXRoXCIsIHBhdGggfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhQcm92aWRlcnMgPSAoKSA9PlxuICBmZXRjaChcIi9hdXRoL3Byb3ZpZGVyc1wiLCB7XG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBdXRoRm9yVXNlciA9IGFzeW5jIChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdXNlcklkOiBzdHJpbmcsXG4gIHVzZXJuYW1lOiBzdHJpbmcsXG4gIHBhc3N3b3JkOiBzdHJpbmdcbikgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGhfcHJvdmlkZXIvaG9tZWFzc2lzdGFudC9jcmVhdGVcIixcbiAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgdXNlcm5hbWUsXG4gICAgcGFzc3dvcmQsXG4gIH0pO1xuIiwiaW1wb3J0IHtcbiAgQ29sbGVjdGlvbixcbiAgQ29ubmVjdGlvbixcbiAgZ2V0Q29sbGVjdGlvbixcbiAgVW5zdWJzY3JpYmVGdW5jLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXQvZGlzdC9zdG9yZVwiO1xuXG5pbnRlcmZhY2UgT3B0aW1pc3RpY0NvbGxlY3Rpb248VD4gZXh0ZW5kcyBDb2xsZWN0aW9uPFQ+IHtcbiAgc2F2ZShkYXRhOiBUKTogUHJvbWlzZTx1bmtub3duPjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gb3B0aW1pc3RpYyBjb2xsZWN0aW9uIHRoYXQgaW5jbHVkZXMgYSBzYXZlIGZ1bmN0aW9uLlxuICogV2hlbiB0aGUgY29sbGVjdGlvbiBpcyBzYXZlZCwgdGhlIGNvbGxlY3Rpb24gaXMgb3B0aW1pc3RpY2FsbHkgdXBkYXRlZC5cbiAqIFRoZSB1cGRhdGUgaXMgcmV2ZXJzZWQgd2hlbiB0aGUgdXBkYXRlIGZhaWxlZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgZ2V0T3B0aW1pc3RpY0NvbGxlY3Rpb24gPSA8U3RhdGVUeXBlPihcbiAgc2F2ZUNvbGxlY3Rpb246IChjb25uOiBDb25uZWN0aW9uLCBkYXRhOiBTdGF0ZVR5cGUpID0+IFByb21pc2U8dW5rbm93bj4sXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGtleTogc3RyaW5nLFxuICBmZXRjaENvbGxlY3Rpb246IChjb25uOiBDb25uZWN0aW9uKSA9PiBQcm9taXNlPFN0YXRlVHlwZT4sXG4gIHN1YnNjcmliZVVwZGF0ZXM/OiAoXG4gICAgY29ubjogQ29ubmVjdGlvbixcbiAgICBzdG9yZTogU3RvcmU8U3RhdGVUeXBlPlxuICApID0+IFByb21pc2U8VW5zdWJzY3JpYmVGdW5jPlxuKTogT3B0aW1pc3RpY0NvbGxlY3Rpb248U3RhdGVUeXBlPiA9PiB7XG4gIGNvbnN0IHVwZGF0ZUtleSA9IGAke2tleX0tb3B0aW1pc3RpY2A7XG5cbiAgY29uc3QgY29sbGVjdGlvbiA9IGdldENvbGxlY3Rpb248U3RhdGVUeXBlPihcbiAgICBjb25uLFxuICAgIGtleSxcbiAgICBmZXRjaENvbGxlY3Rpb24sXG4gICAgYXN5bmMgKF9jb25uLCBzdG9yZSkgPT4ge1xuICAgICAgLy8gU3Vic2NyaWJlIHRvIG9yaWdpbmFsIHVwZGF0ZXNcbiAgICAgIGNvbnN0IHN1YlVwUmVzdWx0ID0gc3Vic2NyaWJlVXBkYXRlc1xuICAgICAgICA/IHN1YnNjcmliZVVwZGF0ZXMoY29ubiwgc3RvcmUpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgLy8gU3RvcmUgdGhlIHN0b3JlXG4gICAgICBjb25uW3VwZGF0ZUtleV0gPSBzdG9yZTtcblxuICAgICAgLy8gVW5zdWIgZnVuY3Rpb24gdG8gdW5kbyBib3RoXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoc3ViVXBSZXN1bHQpIHtcbiAgICAgICAgICBzdWJVcFJlc3VsdC50aGVuKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ublt1cGRhdGVLZXldID0gdW5kZWZpbmVkO1xuICAgICAgfTtcbiAgICB9XG4gICk7XG4gIHJldHVybiB7XG4gICAgLi4uY29sbGVjdGlvbixcbiAgICBhc3luYyBzYXZlKGRhdGE6IFN0YXRlVHlwZSkge1xuICAgICAgY29uc3Qgc3RvcmU6IFN0b3JlPFN0YXRlVHlwZT4gfCB1bmRlZmluZWQgPSBjb25uW3VwZGF0ZUtleV07XG4gICAgICBsZXQgY3VycmVudDtcblxuICAgICAgLy8gQ2FuIGJlIHVuZGVmaW5lZCBpZiBjdXJyZW50bHkgbm8gc3Vic2NyaWJlcnNcbiAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICBjdXJyZW50ID0gc3RvcmUuc3RhdGU7XG4gICAgICAgIHN0b3JlLnNldFN0YXRlKGRhdGEsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgc2F2ZUNvbGxlY3Rpb24oY29ubiwgZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKHN0b3JlKSB7XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoY3VycmVudCBhcyBhbnksIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBpc0V4dGVybmFsID1cbiAgd2luZG93LmV4dGVybmFsQXBwIHx8XG4gIHdpbmRvdy53ZWJraXQ/Lm1lc3NhZ2VIYW5kbGVycz8uZ2V0RXh0ZXJuYWxBdXRoIHx8XG4gIGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImV4dGVybmFsX2F1dGg9MVwiKTtcbiIsImltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBnZXRPcHRpbWlzdGljQ29sbGVjdGlvbiB9IGZyb20gXCIuL2NvbGxlY3Rpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb3JlRnJvbnRlbmRVc2VyRGF0YSB7XG4gIHNob3dBZHZhbmNlZD86IGJvb2xlYW47XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEZyb250ZW5kVXNlckRhdGEge1xuICAgIGNvcmU6IENvcmVGcm9udGVuZFVzZXJEYXRhO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFZhbGlkVXNlckRhdGFLZXkgPSBrZXlvZiBGcm9udGVuZFVzZXJEYXRhO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGcm9udGVuZFVzZXJEYXRhID0gYXN5bmMgPFxuICBVc2VyRGF0YUtleSBleHRlbmRzIFZhbGlkVXNlckRhdGFLZXlcbj4oXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGtleTogVXNlckRhdGFLZXlcbik6IFByb21pc2U8RnJvbnRlbmRVc2VyRGF0YVtVc2VyRGF0YUtleV0gfCBudWxsPiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlPHtcbiAgICB2YWx1ZTogRnJvbnRlbmRVc2VyRGF0YVtVc2VyRGF0YUtleV0gfCBudWxsO1xuICB9Pih7XG4gICAgdHlwZTogXCJmcm9udGVuZC9nZXRfdXNlcl9kYXRhXCIsXG4gICAga2V5LFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlRnJvbnRlbmRVc2VyRGF0YSA9IGFzeW5jIDxcbiAgVXNlckRhdGFLZXkgZXh0ZW5kcyBWYWxpZFVzZXJEYXRhS2V5XG4+KFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBrZXk6IFVzZXJEYXRhS2V5LFxuICB2YWx1ZTogRnJvbnRlbmRVc2VyRGF0YVtVc2VyRGF0YUtleV1cbik6IFByb21pc2U8dm9pZD4gPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2U8dm9pZD4oe1xuICAgIHR5cGU6IFwiZnJvbnRlbmQvc2V0X3VzZXJfZGF0YVwiLFxuICAgIGtleSxcbiAgICB2YWx1ZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBnZXRPcHRpbWlzdGljRnJvbnRlbmRVc2VyRGF0YUNvbGxlY3Rpb24gPSA8XG4gIFVzZXJEYXRhS2V5IGV4dGVuZHMgVmFsaWRVc2VyRGF0YUtleVxuPihcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgdXNlckRhdGFLZXk6IFVzZXJEYXRhS2V5XG4pID0+XG4gIGdldE9wdGltaXN0aWNDb2xsZWN0aW9uKFxuICAgIChfY29ubiwgZGF0YSkgPT5cbiAgICAgIHNhdmVGcm9udGVuZFVzZXJEYXRhKFxuICAgICAgICBjb25uLFxuICAgICAgICB1c2VyRGF0YUtleSxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkYXRhXG4gICAgICApLFxuICAgIGNvbm4sXG4gICAgYF9mcm9udGVuZFVzZXJEYXRhLSR7dXNlckRhdGFLZXl9YCxcbiAgICAoKSA9PiBmZXRjaEZyb250ZW5kVXNlckRhdGEoY29ubiwgdXNlckRhdGFLZXkpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVGcm9udGVuZFVzZXJEYXRhID0gPFVzZXJEYXRhS2V5IGV4dGVuZHMgVmFsaWRVc2VyRGF0YUtleT4oXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIHVzZXJEYXRhS2V5OiBVc2VyRGF0YUtleSxcbiAgb25DaGFuZ2U6IChzdGF0ZTogRnJvbnRlbmRVc2VyRGF0YVtVc2VyRGF0YUtleV0gfCBudWxsKSA9PiB2b2lkXG4pID0+XG4gIGdldE9wdGltaXN0aWNGcm9udGVuZFVzZXJEYXRhQ29sbGVjdGlvbihjb25uLCB1c2VyRGF0YUtleSkuc3Vic2NyaWJlKFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBDb25uZWN0aW9uLFxuICBnZXRDb2xsZWN0aW9uLFxuICBIYXNzRXZlbnRCYXNlLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VQYW5lbENvbmZpZyB7XG4gIG1vZGU6IFwieWFtbFwiIHwgXCJzdG9yYWdlXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VDb25maWcge1xuICB0aXRsZT86IHN0cmluZztcbiAgdmlld3M6IExvdmVsYWNlVmlld0NvbmZpZ1tdO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExlZ2FjeUxvdmVsYWNlQ29uZmlnIGV4dGVuZHMgTG92ZWxhY2VDb25maWcge1xuICByZXNvdXJjZXM/OiBMb3ZlbGFjZVJlc291cmNlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VSZXNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IFwiY3NzXCIgfCBcImpzXCIgfCBcIm1vZHVsZVwiIHwgXCJodG1sXCI7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlUmVzb3VyY2VzTXV0YWJsZVBhcmFtcyB7XG4gIHJlc190eXBlOiBcImNzc1wiIHwgXCJqc1wiIHwgXCJtb2R1bGVcIiB8IFwiaHRtbFwiO1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTG92ZWxhY2VEYXNoYm9hcmQgPVxuICB8IExvdmVsYWNlWWFtbERhc2hib2FyZFxuICB8IExvdmVsYWNlU3RvcmFnZURhc2hib2FyZDtcblxuaW50ZXJmYWNlIExvdmVsYWNlR2VuZXJpY0Rhc2hib2FyZCB7XG4gIGlkOiBzdHJpbmc7XG4gIHVybF9wYXRoOiBzdHJpbmc7XG4gIHJlcXVpcmVfYWRtaW46IGJvb2xlYW47XG4gIHNob3dfaW5fc2lkZWJhcjogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVlhbWxEYXNoYm9hcmQgZXh0ZW5kcyBMb3ZlbGFjZUdlbmVyaWNEYXNoYm9hcmQge1xuICBtb2RlOiBcInlhbWxcIjtcbiAgZmlsZW5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVN0b3JhZ2VEYXNoYm9hcmQgZXh0ZW5kcyBMb3ZlbGFjZUdlbmVyaWNEYXNoYm9hcmQge1xuICBtb2RlOiBcInN0b3JhZ2VcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZURhc2hib2FyZE11dGFibGVQYXJhbXMge1xuICByZXF1aXJlX2FkbWluOiBib29sZWFuO1xuICBzaG93X2luX3NpZGViYXI6IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VEYXNoYm9hcmRDcmVhdGVQYXJhbXNcbiAgZXh0ZW5kcyBMb3ZlbGFjZURhc2hib2FyZE11dGFibGVQYXJhbXMge1xuICB1cmxfcGF0aDogc3RyaW5nO1xuICBtb2RlOiBcInN0b3JhZ2VcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVZpZXdDb25maWcge1xuICBpbmRleD86IG51bWJlcjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGJhZGdlcz86IEFycmF5PHN0cmluZyB8IExvdmVsYWNlQmFkZ2VDb25maWc+O1xuICBjYXJkcz86IExvdmVsYWNlQ2FyZENvbmZpZ1tdO1xuICBwYXRoPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICB0aGVtZT86IHN0cmluZztcbiAgcGFuZWw/OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IFNob3dWaWV3Q29uZmlnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd1ZpZXdDb25maWcge1xuICB1c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlQmFkZ2VDb25maWcge1xuICB0eXBlPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VDYXJkQ29uZmlnIHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHZpZXdfaW5kZXg/OiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvZ2dsZUFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwidG9nZ2xlXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbFNlcnZpY2VBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcImNhbGwtc2VydmljZVwiO1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIHNlcnZpY2VfZGF0YT86IHtcbiAgICBlbnRpdHlfaWQ/OiBzdHJpbmcgfCBbc3RyaW5nXTtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm5hdmlnYXRlXCI7XG4gIG5hdmlnYXRpb25fcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVybEFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwidXJsXCI7XG4gIHVybF9wYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9yZUluZm9BY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm1vcmUtaW5mb1wiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJub25lXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJmaXJlLWRvbS1ldmVudFwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VBY3Rpb25Db25maWcge1xuICBjb25maXJtYXRpb24/OiBDb25maXJtYXRpb25SZXN0cmljdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25SZXN0cmljdGlvbkNvbmZpZyB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGV4ZW1wdGlvbnM/OiBSZXN0cmljdGlvbkNvbmZpZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3RyaWN0aW9uQ29uZmlnIHtcbiAgdXNlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25Db25maWcgPVxuICB8IFRvZ2dsZUFjdGlvbkNvbmZpZ1xuICB8IENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnXG4gIHwgTmF2aWdhdGVBY3Rpb25Db25maWdcbiAgfCBVcmxBY3Rpb25Db25maWdcbiAgfCBNb3JlSW5mb0FjdGlvbkNvbmZpZ1xuICB8IE5vQWN0aW9uQ29uZmlnXG4gIHwgQ3VzdG9tQWN0aW9uQ29uZmlnO1xuXG50eXBlIExvdmVsYWNlVXBkYXRlZEV2ZW50ID0gSGFzc0V2ZW50QmFzZSAmIHtcbiAgZXZlbnRfdHlwZTogXCJsb3ZlbGFjZV91cGRhdGVkXCI7XG4gIGRhdGE6IHtcbiAgICB1cmxfcGF0aDogc3RyaW5nIHwgbnVsbDtcbiAgICBtb2RlOiBcInlhbWxcIiB8IFwic3RvcmFnZVwiO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUmVzb3VyY2VzID0gKGNvbm46IENvbm5lY3Rpb24pOiBQcm9taXNlPExvdmVsYWNlUmVzb3VyY2VbXT4gPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvcmVzb3VyY2VzXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVzb3VyY2UgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogTG92ZWxhY2VSZXNvdXJjZXNNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPExvdmVsYWNlUmVzb3VyY2U+KHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL3Jlc291cmNlcy9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUmVzb3VyY2UgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8TG92ZWxhY2VSZXNvdXJjZXNNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxMb3ZlbGFjZVJlc291cmNlPih7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9yZXNvdXJjZXMvdXBkYXRlXCIsXG4gICAgcmVzb3VyY2VfaWQ6IGlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUmVzb3VyY2UgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvcmVzb3VyY2VzL2RlbGV0ZVwiLFxuICAgIHJlc291cmNlX2lkOiBpZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhc2hib2FyZHMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnRcbik6IFByb21pc2U8TG92ZWxhY2VEYXNoYm9hcmRbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvZGFzaGJvYXJkcy9saXN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGFzaGJvYXJkID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IExvdmVsYWNlRGFzaGJvYXJkQ3JlYXRlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPExvdmVsYWNlRGFzaGJvYXJkPih7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9kYXNoYm9hcmRzL2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEYXNoYm9hcmQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8TG92ZWxhY2VEYXNoYm9hcmRNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxMb3ZlbGFjZURhc2hib2FyZD4oe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvZGFzaGJvYXJkcy91cGRhdGVcIixcbiAgICBkYXNoYm9hcmRfaWQ6IGlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlRGFzaGJvYXJkID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2Rhc2hib2FyZHMvZGVsZXRlXCIsXG4gICAgZGFzaGJvYXJkX2lkOiBpZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbmZpZyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgdXJsUGF0aDogc3RyaW5nIHwgbnVsbCxcbiAgZm9yY2U6IGJvb2xlYW5cbik6IFByb21pc2U8TG92ZWxhY2VDb25maWc+ID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2NvbmZpZ1wiLFxuICAgIHVybF9wYXRoOiB1cmxQYXRoLFxuICAgIGZvcmNlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNhdmVDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHVybFBhdGg6IHN0cmluZyB8IG51bGwsXG4gIGNvbmZpZzogTG92ZWxhY2VDb25maWdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvY29uZmlnL3NhdmVcIixcbiAgICB1cmxfcGF0aDogdXJsUGF0aCxcbiAgICBjb25maWcsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB1cmxQYXRoOiBzdHJpbmcgfCBudWxsXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2NvbmZpZy9kZWxldGVcIixcbiAgICB1cmxfcGF0aDogdXJsUGF0aCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVMb3ZlbGFjZVVwZGF0ZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIHVybFBhdGg6IHN0cmluZyB8IG51bGwsXG4gIG9uQ2hhbmdlOiAoKSA9PiB2b2lkXG4pID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzPExvdmVsYWNlVXBkYXRlZEV2ZW50PigoZXYpID0+IHtcbiAgICBpZiAoZXYuZGF0YS51cmxfcGF0aCA9PT0gdXJsUGF0aCkge1xuICAgICAgb25DaGFuZ2UoKTtcbiAgICB9XG4gIH0sIFwibG92ZWxhY2VfdXBkYXRlZFwiKTtcblxuZXhwb3J0IGNvbnN0IGdldExvdmVsYWNlQ29sbGVjdGlvbiA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgdXJsUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbikgPT5cbiAgZ2V0Q29sbGVjdGlvbihcbiAgICBjb25uLFxuICAgIGBfbG92ZWxhY2VfJHt1cmxQYXRoID8/IFwiXCJ9YCxcbiAgICAoY29ubjIpID0+IGZldGNoQ29uZmlnKGNvbm4yLCB1cmxQYXRoLCBmYWxzZSksXG4gICAgKF9jb25uLCBzdG9yZSkgPT5cbiAgICAgIHN1YnNjcmliZUxvdmVsYWNlVXBkYXRlcyhjb25uLCB1cmxQYXRoLCAoKSA9PlxuICAgICAgICBmZXRjaENvbmZpZyhjb25uLCB1cmxQYXRoLCBmYWxzZSkudGhlbigoY29uZmlnKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGNvbmZpZywgdHJ1ZSlcbiAgICAgICAgKVxuICAgICAgKVxuICApO1xuXG4vLyBMZWdhY3kgZnVuY3Rpb25zIHRvIHN1cHBvcnQgY2FzdCBmb3IgSG9tZSBBc3Npc3Rpb24gPCAwLjEwN1xuY29uc3QgZmV0Y2hMZWdhY3lDb25maWcgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGZvcmNlOiBib29sZWFuXG4pOiBQcm9taXNlPExvdmVsYWNlQ29uZmlnPiA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9jb25maWdcIixcbiAgICBmb3JjZSxcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUxlZ2FjeUxvdmVsYWNlVXBkYXRlcyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICgpID0+IHZvaWRcbikgPT4gY29ubi5zdWJzY3JpYmVFdmVudHMob25DaGFuZ2UsIFwibG92ZWxhY2VfdXBkYXRlZFwiKTtcblxuZXhwb3J0IGNvbnN0IGdldExlZ2FjeUxvdmVsYWNlQ29sbGVjdGlvbiA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uKFxuICAgIGNvbm4sXG4gICAgXCJfbG92ZWxhY2VcIixcbiAgICAoY29ubjIpID0+IGZldGNoTGVnYWN5Q29uZmlnKGNvbm4yLCBmYWxzZSksXG4gICAgKF9jb25uLCBzdG9yZSkgPT5cbiAgICAgIHN1YnNjcmliZUxlZ2FjeUxvdmVsYWNlVXBkYXRlcyhjb25uLCAoKSA9PlxuICAgICAgICBmZXRjaExlZ2FjeUNvbmZpZyhjb25uLCBmYWxzZSkudGhlbigoY29uZmlnKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGNvbmZpZywgdHJ1ZSlcbiAgICAgICAgKVxuICAgICAgKVxuICApO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1dpdGhMb3ZlbGFjZVByb20gZXh0ZW5kcyBXaW5kb3cge1xuICBsbENvbmZQcm9tPzogUHJvbWlzZTxMb3ZlbGFjZUNvbmZpZz47XG4gIGxsUmVzUHJvbT86IFByb21pc2U8TG92ZWxhY2VSZXNvdXJjZVtdPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25IYW5kbGVyT3B0aW9ucyB7XG4gIGhhc0hvbGQ/OiBib29sZWFuO1xuICBoYXNEb3VibGVDbGljaz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uSGFuZGxlckRldGFpbCB7XG4gIGFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25IYW5kbGVyRXZlbnQgPSBIQVNTRG9tRXZlbnQ8QWN0aW9uSGFuZGxlckRldGFpbD47XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uLCBjcmVhdGVDb2xsZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgUGFuZWxzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGZldGNoUGFuZWxzID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImdldF9wYW5lbHNcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgICgpID0+IGZldGNoUGFuZWxzKGNvbm4pLnRoZW4oKHBhbmVscykgPT4gc3RvcmUuc2V0U3RhdGUocGFuZWxzLCB0cnVlKSksXG4gICAgXCJwYW5lbHNfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVQYW5lbHMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAocGFuZWxzOiBQYW5lbHMpID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxQYW5lbHM+KFxuICAgIFwiX3BubFwiLFxuICAgIGZldGNoUGFuZWxzLFxuICAgIHN1YnNjcmliZVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiwgY3JlYXRlQ29sbGVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IFRoZW1lcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBmZXRjaFRoZW1lcyA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJmcm9udGVuZC9nZXRfdGhlbWVzXCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICAoKSA9PiBmZXRjaFRoZW1lcyhjb25uKS50aGVuKChkYXRhKSA9PiBzdG9yZS5zZXRTdGF0ZShkYXRhLCB0cnVlKSksXG4gICAgXCJ0aGVtZXNfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVUaGVtZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAodGhlbWVzOiBUaGVtZXMpID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxUaGVtZXM+KFxuICAgIFwiX3RobVwiLFxuICAgIGZldGNoVGhlbWVzLFxuICAgIHN1YnNjcmliZVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHtcbiAgQ29ubmVjdGlvbixcbiAgZ2V0Q29sbGVjdGlvbixcbiAgZ2V0VXNlcixcbn0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJDb2xsZWN0aW9uID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oXG4gICAgY29ubixcbiAgICBcIl91c3JcIixcbiAgICAoKSA9PiBnZXRVc2VyKGNvbm4pIGFzIFByb21pc2U8Q3VycmVudFVzZXI+LFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVXNlciA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICh1c2VyOiBDdXJyZW50VXNlcikgPT4gdm9pZFxuKSA9PiB1c2VyQ29sbGVjdGlvbihjb25uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuIiwiaW1wb3J0IHtcbiAgQXV0aCxcbiAgQ29ubmVjdGlvbixcbiAgY3JlYXRlQ29ubmVjdGlvbixcbiAgRVJSX0lOVkFMSURfQVVUSCxcbiAgZ2V0QXV0aCxcbiAgc3Vic2NyaWJlQ29uZmlnLFxuICBzdWJzY3JpYmVFbnRpdGllcyxcbiAgc3Vic2NyaWJlU2VydmljZXMsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGxvYWRUb2tlbnMsIHNhdmVUb2tlbnMgfSBmcm9tIFwiLi4vY29tbW9uL2F1dGgvdG9rZW5fc3RvcmFnZVwiO1xuaW1wb3J0IHsgaGFzc1VybCB9IGZyb20gXCIuLi9kYXRhL2F1dGhcIjtcbmltcG9ydCB7IGlzRXh0ZXJuYWwgfSBmcm9tIFwiLi4vZGF0YS9leHRlcm5hbFwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlRnJvbnRlbmRVc2VyRGF0YSB9IGZyb20gXCIuLi9kYXRhL2Zyb250ZW5kXCI7XG5pbXBvcnQge1xuICBmZXRjaENvbmZpZyxcbiAgZmV0Y2hSZXNvdXJjZXMsXG4gIFdpbmRvd1dpdGhMb3ZlbGFjZVByb20sXG59IGZyb20gXCIuLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVQYW5lbHMgfSBmcm9tIFwiLi4vZGF0YS93cy1wYW5lbHNcIjtcbmltcG9ydCB7IHN1YnNjcmliZVRoZW1lcyB9IGZyb20gXCIuLi9kYXRhL3dzLXRoZW1lc1wiO1xuaW1wb3J0IHsgc3Vic2NyaWJlVXNlciB9IGZyb20gXCIuLi9kYXRhL3dzLXVzZXJcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZXJuYWxBdXRoIH0gZnJvbSBcIi4uL2V4dGVybmFsX2FwcC9leHRlcm5hbF9hdXRoXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgaGFzc0Nvbm5lY3Rpb246IFByb21pc2U8eyBhdXRoOiBBdXRoOyBjb25uOiBDb25uZWN0aW9uIH0+O1xuICB9XG59XG5cbmNvbnN0IGF1dGhQcm9tID0gaXNFeHRlcm5hbFxuICA/ICgpID0+XG4gICAgICBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZXh0ZXJuYWxfYXV0aFwiICovIFwiLi4vZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2F1dGhcIlxuICAgICAgKS50aGVuKCh7IGNyZWF0ZUV4dGVybmFsQXV0aCB9KSA9PiBjcmVhdGVFeHRlcm5hbEF1dGgoaGFzc1VybCkpXG4gIDogKCkgPT5cbiAgICAgIGdldEF1dGgoe1xuICAgICAgICBoYXNzVXJsLFxuICAgICAgICBzYXZlVG9rZW5zLFxuICAgICAgICBsb2FkVG9rZW5zOiAoKSA9PiBQcm9taXNlLnJlc29sdmUobG9hZFRva2VucygpKSxcbiAgICAgIH0pO1xuXG5jb25zdCBjb25uUHJvbSA9IGFzeW5jIChhdXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29ubiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oeyBhdXRoIH0pO1xuXG4gICAgLy8gQ2xlYXIgdXJsIGlmIHdlIGhhdmUgYmVlbiBhYmxlIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb25cbiAgICBpZiAobG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKFwiYXV0aF9jYWxsYmFjaz0xXCIpKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYXV0aCwgY29ubiB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyICE9PSBFUlJfSU5WQUxJRF9BVVRIKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIC8vIFdlIGNhbiBnZXQgaW52YWxpZCBhdXRoIGlmIGF1dGggdG9rZW5zIHdlcmUgc3RvcmVkIHRoYXQgYXJlIG5vIGxvbmdlciB2YWxpZFxuICAgIGlmIChpc0V4dGVybmFsKSB7XG4gICAgICAvLyBUZWxsIHRoZSBleHRlcm5hbCBhcHAgdG8gZm9yY2UgcmVmcmVzaCB0aGUgYWNjZXNzIHRva2Vucy5cbiAgICAgIC8vIFRoaXMgc2hvdWxkIHRyaWdnZXIgdGhlaXIgdW5hdXRob3JpemVkIGhhbmRsaW5nLlxuICAgICAgYXdhaXQgYXV0aC5yZWZyZXNoQWNjZXNzVG9rZW4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENsZWFyIHN0b3JlZCB0b2tlbnMuXG4gICAgICBzYXZlVG9rZW5zKG51bGwpO1xuICAgIH1cbiAgICBhdXRoID0gYXdhaXQgYXV0aFByb20oKTtcbiAgICBjb25zdCBjb25uID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7IGF1dGggfSk7XG4gICAgcmV0dXJuIHsgYXV0aCwgY29ubiB9O1xuICB9XG59O1xuXG5pZiAoX19ERVZfXykge1xuICAvLyBSZW1vdmUgYWRvcHRlZFN0eWxlU2hlZXRzIHNvIHN0eWxlIGluc3BlY3RvciB3b3JrcyBvbiBzaGFkb3cgRE9NLlxuICAvLyBAdHMtaWdub3JlXG4gIGRlbGV0ZSBEb2N1bWVudC5wcm90b3R5cGUuYWRvcHRlZFN0eWxlU2hlZXRzO1xuICBwZXJmb3JtYW5jZS5tYXJrKFwiaGFzcy1zdGFydFwiKTtcbn1cbndpbmRvdy5oYXNzQ29ubmVjdGlvbiA9IChhdXRoUHJvbSgpIGFzIFByb21pc2U8QXV0aCB8IEV4dGVybmFsQXV0aD4pLnRoZW4oXG4gIGNvbm5Qcm9tXG4pO1xuXG4vLyBTdGFydCBmZXRjaGluZyBzb21lIG9mIHRoZSBkYXRhIHRoYXQgd2Ugd2lsbCBuZWVkLlxud2luZG93Lmhhc3NDb25uZWN0aW9uLnRoZW4oKHsgY29ubiB9KSA9PiB7XG4gIGNvbnN0IG5vb3AgPSAoKSA9PiB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9O1xuICBzdWJzY3JpYmVFbnRpdGllcyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlQ29uZmlnKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVTZXJ2aWNlcyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlUGFuZWxzKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVUaGVtZXMoY29ubiwgbm9vcCk7XG4gIHN1YnNjcmliZVVzZXIoY29ubiwgbm9vcCk7XG4gIHN1YnNjcmliZUZyb250ZW5kVXNlckRhdGEoY29ubiwgXCJjb3JlXCIsIG5vb3ApO1xuXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIgfHwgbG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9sb3ZlbGFjZS9cIikpIHtcbiAgICBjb25zdCBsbFdpbmRvdyA9IHdpbmRvdyBhcyBXaW5kb3dXaXRoTG92ZWxhY2VQcm9tO1xuICAgIGxsV2luZG93LmxsQ29uZlByb20gPSBmZXRjaENvbmZpZyhjb25uLCBudWxsLCBmYWxzZSk7XG4gICAgbGxXaW5kb3cubGxDb25mUHJvbS5jYXRjaCgoKSA9PiB7XG4gICAgICAvLyBJZ25vcmUgaXQsIGl0IGlzIGhhbmRsZWQgYnkgTG92ZWxhY2UgcGFuZWwuXG4gICAgfSk7XG4gICAgbGxXaW5kb3cubGxSZXNQcm9tID0gZmV0Y2hSZXNvdXJjZXMoY29ubik7XG4gIH1cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlKSA9PiB7XG4gIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaG9tZS1hc3Npc3RhbnRcIikgYXMgYW55O1xuICBpZiAoXG4gICAgaG9tZUFzc2lzdGFudCAmJlxuICAgIGhvbWVBc3Npc3RhbnQuaGFzcyAmJlxuICAgIChob21lQXNzaXN0YW50Lmhhc3MgYXMgSG9tZUFzc2lzdGFudCkuY2FsbFNlcnZpY2VcbiAgKSB7XG4gICAgaG9tZUFzc2lzdGFudC5oYXNzLmNhbGxTZXJ2aWNlKFwic3lzdGVtX2xvZ1wiLCBcIndyaXRlXCIsIHtcbiAgICAgIGxvZ2dlcjogYGZyb250ZW5kLiR7XG4gICAgICAgIF9fREVWX18gPyBcImpzX2RldlwiIDogXCJqc1wiXG4gICAgICB9LiR7X19CVUlMRF9ffS4ke19fVkVSU0lPTl9fLnJlcGxhY2UoXCIuXCIsIFwiXCIpfWAsXG4gICAgICBtZXNzYWdlOiBgJHtlLmZpbGVuYW1lfToke2UubGluZW5vfToke2UuY29sbm99ICR7ZS5tZXNzYWdlfWAsXG4gICAgfSk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDck1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlDQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBd0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTNOQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBQUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyREE7QUFxREE7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFEQTtBQUlBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTs7Ozs7QUFNQTtBQVVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQXNCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTs7Ozs7Ozs7Ozs7O0FDQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQU1BO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVlBO0FBT0E7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0tBO0FBRUE7QUFEQTtBQUlBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUlBO0FBREE7QUFJQTtBQUtBO0FBREE7QUFLQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBZ0JBO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7OztBQzNTQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBUUE7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBVUEsMFFBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
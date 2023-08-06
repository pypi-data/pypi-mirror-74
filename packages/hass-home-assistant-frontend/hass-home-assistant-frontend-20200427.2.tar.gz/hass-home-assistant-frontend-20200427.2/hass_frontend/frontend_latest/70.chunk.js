(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/event-target-shim/dist/event-target-shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/event-target-shim/dist/event-target-shim.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */

/**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */

const privateData = new WeakMap();
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */

const wrappers = new WeakMap();
/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */

function pd(event) {
  const retv = privateData.get(event);
  console.assert(retv != null, "'this' is expected an Event object, but got", event);
  return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */


function setCancelFlag(data) {
  if (data.passiveListener != null) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
      console.error("Unable to preventDefault inside passive event listener invocation.", data.passiveListener);
    }

    return;
  }

  if (!data.event.cancelable) {
    return;
  }

  data.canceled = true;

  if (typeof data.event.preventDefault === "function") {
    data.event.preventDefault();
  }
}
/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */

/**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */


function Event(eventTarget, event) {
  privateData.set(this, {
    eventTarget,
    event,
    eventPhase: 2,
    currentTarget: eventTarget,
    canceled: false,
    stopped: false,
    immediateStopped: false,
    passiveListener: null,
    timeStamp: event.timeStamp || Date.now()
  }); // https://heycam.github.io/webidl/#Unforgeable

  Object.defineProperty(this, "isTrusted", {
    value: false,
    enumerable: true
  }); // Define accessors

  const keys = Object.keys(event);

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];

    if (!(key in this)) {
      Object.defineProperty(this, key, defineRedirectDescriptor(key));
    }
  }
} // Should be enumerable, but class methods are not enumerable.


Event.prototype = {
  /**
   * The type of this event.
   * @type {string}
   */
  get type() {
    return pd(this).event.type;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get target() {
    return pd(this).eventTarget;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get currentTarget() {
    return pd(this).currentTarget;
  },

  /**
   * @returns {EventTarget[]} The composed path of this event.
   */
  composedPath() {
    const currentTarget = pd(this).currentTarget;

    if (currentTarget == null) {
      return [];
    }

    return [currentTarget];
  },

  /**
   * Constant of NONE.
   * @type {number}
   */
  get NONE() {
    return 0;
  },

  /**
   * Constant of CAPTURING_PHASE.
   * @type {number}
   */
  get CAPTURING_PHASE() {
    return 1;
  },

  /**
   * Constant of AT_TARGET.
   * @type {number}
   */
  get AT_TARGET() {
    return 2;
  },

  /**
   * Constant of BUBBLING_PHASE.
   * @type {number}
   */
  get BUBBLING_PHASE() {
    return 3;
  },

  /**
   * The target of this event.
   * @type {number}
   */
  get eventPhase() {
    return pd(this).eventPhase;
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopPropagation() {
    const data = pd(this);
    data.stopped = true;

    if (typeof data.event.stopPropagation === "function") {
      data.event.stopPropagation();
    }
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopImmediatePropagation() {
    const data = pd(this);
    data.stopped = true;
    data.immediateStopped = true;

    if (typeof data.event.stopImmediatePropagation === "function") {
      data.event.stopImmediatePropagation();
    }
  },

  /**
   * The flag to be bubbling.
   * @type {boolean}
   */
  get bubbles() {
    return Boolean(pd(this).event.bubbles);
  },

  /**
   * The flag to be cancelable.
   * @type {boolean}
   */
  get cancelable() {
    return Boolean(pd(this).event.cancelable);
  },

  /**
   * Cancel this event.
   * @returns {void}
   */
  preventDefault() {
    setCancelFlag(pd(this));
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   */
  get defaultPrevented() {
    return pd(this).canceled;
  },

  /**
   * The flag to be composed.
   * @type {boolean}
   */
  get composed() {
    return Boolean(pd(this).event.composed);
  },

  /**
   * The unix time of this event.
   * @type {number}
   */
  get timeStamp() {
    return pd(this).timeStamp;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   * @deprecated
   */
  get srcElement() {
    return pd(this).eventTarget;
  },

  /**
   * The flag to stop event bubbling.
   * @type {boolean}
   * @deprecated
   */
  get cancelBubble() {
    return pd(this).stopped;
  },

  set cancelBubble(value) {
    if (!value) {
      return;
    }

    const data = pd(this);
    data.stopped = true;

    if (typeof data.event.cancelBubble === "boolean") {
      data.event.cancelBubble = true;
    }
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   * @deprecated
   */
  get returnValue() {
    return !pd(this).canceled;
  },

  set returnValue(value) {
    if (!value) {
      setCancelFlag(pd(this));
    }
  },

  /**
   * Initialize this event object. But do nothing under event dispatching.
   * @param {string} type The event type.
   * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
   * @param {boolean} [cancelable=false] The flag to be possible to cancel.
   * @deprecated
   */
  initEvent() {// Do nothing.
  }

}; // `constructor` is not enumerable.

Object.defineProperty(Event.prototype, "constructor", {
  value: Event,
  configurable: true,
  writable: true
}); // Ensure `event instanceof window.Event` is `true`.

if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
  Object.setPrototypeOf(Event.prototype, window.Event.prototype); // Make association for wrappers.

  wrappers.set(window.Event.prototype, Event);
}
/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */


function defineRedirectDescriptor(key) {
  return {
    get() {
      return pd(this).event[key];
    },

    set(value) {
      pd(this).event[key] = value;
    },

    configurable: true,
    enumerable: true
  };
}
/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */


function defineCallDescriptor(key) {
  return {
    value() {
      const event = pd(this).event;
      return event[key].apply(event, arguments);
    },

    configurable: true,
    enumerable: true
  };
}
/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */


function defineWrapper(BaseEvent, proto) {
  const keys = Object.keys(proto);

  if (keys.length === 0) {
    return BaseEvent;
  }
  /** CustomEvent */


  function CustomEvent(eventTarget, event) {
    BaseEvent.call(this, eventTarget, event);
  }

  CustomEvent.prototype = Object.create(BaseEvent.prototype, {
    constructor: {
      value: CustomEvent,
      configurable: true,
      writable: true
    }
  }); // Define accessors.

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];

    if (!(key in BaseEvent.prototype)) {
      const descriptor = Object.getOwnPropertyDescriptor(proto, key);
      const isFunc = typeof descriptor.value === "function";
      Object.defineProperty(CustomEvent.prototype, key, isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key));
    }
  }

  return CustomEvent;
}
/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */


function getWrapper(proto) {
  if (proto == null || proto === Object.prototype) {
    return Event;
  }

  let wrapper = wrappers.get(proto);

  if (wrapper == null) {
    wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
    wrappers.set(proto, wrapper);
  }

  return wrapper;
}
/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */


function wrapEvent(eventTarget, event) {
  const Wrapper = getWrapper(Object.getPrototypeOf(event));
  return new Wrapper(eventTarget, event);
}
/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */


function isStopped(event) {
  return pd(event).immediateStopped;
}
/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */


function setEventPhase(event, eventPhase) {
  pd(event).eventPhase = eventPhase;
}
/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */


function setCurrentTarget(event, currentTarget) {
  pd(event).currentTarget = currentTarget;
}
/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */


function setPassiveListener(event, passiveListener) {
  pd(event).passiveListener = passiveListener;
}
/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */

/**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */


const listenersMap = new WeakMap(); // Listener types

const CAPTURE = 1;
const BUBBLE = 2;
const ATTRIBUTE = 3;
/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */

function isObject(x) {
  return x !== null && typeof x === "object"; //eslint-disable-line no-restricted-syntax
}
/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */


function getListeners(eventTarget) {
  const listeners = listenersMap.get(eventTarget);

  if (listeners == null) {
    throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  }

  return listeners;
}
/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */


function defineEventAttributeDescriptor(eventName) {
  return {
    get() {
      const listeners = getListeners(this);
      let node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          return node.listener;
        }

        node = node.next;
      }

      return null;
    },

    set(listener) {
      if (typeof listener !== "function" && !isObject(listener)) {
        listener = null; // eslint-disable-line no-param-reassign
      }

      const listeners = getListeners(this); // Traverse to the tail while removing old value.

      let prev = null;
      let node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          // Remove old value.
          if (prev !== null) {
            prev.next = node.next;
          } else if (node.next !== null) {
            listeners.set(eventName, node.next);
          } else {
            listeners.delete(eventName);
          }
        } else {
          prev = node;
        }

        node = node.next;
      } // Add new value.


      if (listener !== null) {
        const newNode = {
          listener,
          listenerType: ATTRIBUTE,
          passive: false,
          once: false,
          next: null
        };

        if (prev === null) {
          listeners.set(eventName, newNode);
        } else {
          prev.next = newNode;
        }
      }
    },

    configurable: true,
    enumerable: true
  };
}
/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */


function defineEventAttribute(eventTargetPrototype, eventName) {
  Object.defineProperty(eventTargetPrototype, `on${eventName}`, defineEventAttributeDescriptor(eventName));
}
/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */


function defineCustomEventTarget(eventNames) {
  /** CustomEventTarget */
  function CustomEventTarget() {
    EventTarget.call(this);
  }

  CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
    constructor: {
      value: CustomEventTarget,
      configurable: true,
      writable: true
    }
  });

  for (let i = 0; i < eventNames.length; ++i) {
    defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
  }

  return CustomEventTarget;
}
/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */


function EventTarget() {
  /*eslint-disable consistent-return */
  if (this instanceof EventTarget) {
    listenersMap.set(this, new Map());
    return;
  }

  if (arguments.length === 1 && Array.isArray(arguments[0])) {
    return defineCustomEventTarget(arguments[0]);
  }

  if (arguments.length > 0) {
    const types = new Array(arguments.length);

    for (let i = 0; i < arguments.length; ++i) {
      types[i] = arguments[i];
    }

    return defineCustomEventTarget(types);
  }

  throw new TypeError("Cannot call a class as a function");
  /*eslint-enable consistent-return */
} // Should be enumerable, but class methods are not enumerable.


EventTarget.prototype = {
  /**
   * Add a given listener to this event target.
   * @param {string} eventName The event name to add.
   * @param {Function} listener The listener to add.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  addEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }

    if (typeof listener !== "function" && !isObject(listener)) {
      throw new TypeError("'listener' should be a function or an object.");
    }

    const listeners = getListeners(this);
    const optionsIsObj = isObject(options);
    const capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
    const listenerType = capture ? CAPTURE : BUBBLE;
    const newNode = {
      listener,
      listenerType,
      passive: optionsIsObj && Boolean(options.passive),
      once: optionsIsObj && Boolean(options.once),
      next: null
    }; // Set it as the first node if the first node is null.

    let node = listeners.get(eventName);

    if (node === undefined) {
      listeners.set(eventName, newNode);
      return;
    } // Traverse to the tail while checking duplication..


    let prev = null;

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        // Should ignore duplication.
        return;
      }

      prev = node;
      node = node.next;
    } // Add it.


    prev.next = newNode;
  },

  /**
   * Remove a given listener from this event target.
   * @param {string} eventName The event name to remove.
   * @param {Function} listener The listener to remove.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  removeEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }

    const listeners = getListeners(this);
    const capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
    const listenerType = capture ? CAPTURE : BUBBLE;
    let prev = null;
    let node = listeners.get(eventName);

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }

        return;
      }

      prev = node;
      node = node.next;
    }
  },

  /**
   * Dispatch a given event.
   * @param {Event|{type:string}} event The event to dispatch.
   * @returns {boolean} `false` if canceled.
   */
  dispatchEvent(event) {
    if (event == null || typeof event.type !== "string") {
      throw new TypeError('"event.type" should be a string.');
    } // If listeners aren't registered, terminate.


    const listeners = getListeners(this);
    const eventName = event.type;
    let node = listeners.get(eventName);

    if (node == null) {
      return true;
    } // Since we cannot rewrite several properties, so wrap object.


    const wrappedEvent = wrapEvent(this, event); // This doesn't process capturing phase and bubbling phase.
    // This isn't participating in a tree.

    let prev = null;

    while (node != null) {
      // Remove this listener if it's once
      if (node.once) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }
      } else {
        prev = node;
      } // Call this listener


      setPassiveListener(wrappedEvent, node.passive ? node.listener : null);

      if (typeof node.listener === "function") {
        try {
          node.listener.call(this, wrappedEvent);
        } catch (err) {
          if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error(err);
          }
        }
      } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") {
        node.listener.handleEvent(wrappedEvent);
      } // Break if `event.stopImmediatePropagation` was called.


      if (isStopped(wrappedEvent)) {
        break;
      }

      node = node.next;
    }

    setPassiveListener(wrappedEvent, null);
    setEventPhase(wrappedEvent, 0);
    setCurrentTarget(wrappedEvent, null);
    return !wrappedEvent.defaultPrevented;
  }

}; // `constructor` is not enumerable.

Object.defineProperty(EventTarget.prototype, "constructor", {
  value: EventTarget,
  configurable: true,
  writable: true
}); // Ensure `eventTarget instanceof window.EventTarget` is `true`.

if (typeof window !== "undefined" && typeof window.EventTarget !== "undefined") {
  Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}

exports.defineEventAttribute = defineEventAttribute;
exports.EventTarget = EventTarget;
exports.default = EventTarget;
module.exports = EventTarget;
module.exports.EventTarget = module.exports["default"] = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2V2ZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2V2ZW50LXRhcmdldC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcml2YXRlRGF0YVxuICogQHByb3BlcnR5IHtFdmVudFRhcmdldH0gZXZlbnRUYXJnZXQgVGhlIGV2ZW50IHRhcmdldC5cbiAqIEBwcm9wZXJ0eSB7e3R5cGU6c3RyaW5nfX0gZXZlbnQgVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudFBoYXNlIFRoZSBjdXJyZW50IGV2ZW50IHBoYXNlLlxuICogQHByb3BlcnR5IHtFdmVudFRhcmdldHxudWxsfSBjdXJyZW50VGFyZ2V0IFRoZSBjdXJyZW50IGV2ZW50IHRhcmdldC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2FuY2VsZWQgVGhlIGZsYWcgdG8gcHJldmVudCBkZWZhdWx0LlxuICogQHByb3BlcnR5IHtib29sZWFufSBzdG9wcGVkIFRoZSBmbGFnIHRvIHN0b3AgcHJvcGFnYXRpb24uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGltbWVkaWF0ZVN0b3BwZWQgVGhlIGZsYWcgdG8gc3RvcCBwcm9wYWdhdGlvbiBpbW1lZGlhdGVseS5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb258bnVsbH0gcGFzc2l2ZUxpc3RlbmVyIFRoZSBsaXN0ZW5lciBpZiB0aGUgY3VycmVudCBsaXN0ZW5lciBpcyBwYXNzaXZlLiBPdGhlcndpc2UgdGhpcyBpcyBudWxsLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRpbWVTdGFtcCBUaGUgdW5peCB0aW1lLlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIFByaXZhdGUgZGF0YSBmb3IgZXZlbnQgd3JhcHBlcnMuXG4gKiBAdHlwZSB7V2Vha01hcDxFdmVudCwgUHJpdmF0ZURhdGE+fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcHJpdmF0ZURhdGEgPSBuZXcgV2Vha01hcCgpXG5cbi8qKlxuICogQ2FjaGUgZm9yIHdyYXBwZXIgY2xhc3Nlcy5cbiAqIEB0eXBlIHtXZWFrTWFwPE9iamVjdCwgRnVuY3Rpb24+fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3Qgd3JhcHBlcnMgPSBuZXcgV2Vha01hcCgpXG5cbi8qKlxuICogR2V0IHByaXZhdGUgZGF0YS5cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCBvYmplY3QgdG8gZ2V0IHByaXZhdGUgZGF0YS5cbiAqIEByZXR1cm5zIHtQcml2YXRlRGF0YX0gVGhlIHByaXZhdGUgZGF0YSBvZiB0aGUgZXZlbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwZChldmVudCkge1xuICAgIGNvbnN0IHJldHYgPSBwcml2YXRlRGF0YS5nZXQoZXZlbnQpXG4gICAgY29uc29sZS5hc3NlcnQoXG4gICAgICAgIHJldHYgIT0gbnVsbCxcbiAgICAgICAgXCIndGhpcycgaXMgZXhwZWN0ZWQgYW4gRXZlbnQgb2JqZWN0LCBidXQgZ290XCIsXG4gICAgICAgIGV2ZW50XG4gICAgKVxuICAgIHJldHVybiByZXR2XG59XG5cbi8qKlxuICogaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNzZXQtdGhlLWNhbmNlbGVkLWZsYWdcbiAqIEBwYXJhbSBkYXRhIHtQcml2YXRlRGF0YX0gcHJpdmF0ZSBkYXRhLlxuICovXG5mdW5jdGlvbiBzZXRDYW5jZWxGbGFnKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5wYXNzaXZlTGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gcHJldmVudERlZmF1bHQgaW5zaWRlIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgaW52b2NhdGlvbi5cIixcbiAgICAgICAgICAgICAgICBkYXRhLnBhc3NpdmVMaXN0ZW5lclxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIWRhdGEuZXZlbnQuY2FuY2VsYWJsZSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBkYXRhLmNhbmNlbGVkID0gdHJ1ZVxuICAgIGlmICh0eXBlb2YgZGF0YS5ldmVudC5wcmV2ZW50RGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGRhdGEuZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jaW50ZXJmYWNlLWV2ZW50XG4gKiBAcHJpdmF0ZVxuICovXG4vKipcbiAqIFRoZSBldmVudCB3cmFwcGVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0IG9mIHRoaXMgZGlzcGF0Y2hpbmcuXG4gKiBAcGFyYW0ge0V2ZW50fHt0eXBlOnN0cmluZ319IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCB0byB3cmFwLlxuICovXG5mdW5jdGlvbiBFdmVudChldmVudFRhcmdldCwgZXZlbnQpIHtcbiAgICBwcml2YXRlRGF0YS5zZXQodGhpcywge1xuICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGV2ZW50UGhhc2U6IDIsXG4gICAgICAgIGN1cnJlbnRUYXJnZXQ6IGV2ZW50VGFyZ2V0LFxuICAgICAgICBjYW5jZWxlZDogZmFsc2UsXG4gICAgICAgIHN0b3BwZWQ6IGZhbHNlLFxuICAgICAgICBpbW1lZGlhdGVTdG9wcGVkOiBmYWxzZSxcbiAgICAgICAgcGFzc2l2ZUxpc3RlbmVyOiBudWxsLFxuICAgICAgICB0aW1lU3RhbXA6IGV2ZW50LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpLFxuICAgIH0pXG5cbiAgICAvLyBodHRwczovL2hleWNhbS5naXRodWIuaW8vd2ViaWRsLyNVbmZvcmdlYWJsZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzVHJ1c3RlZFwiLCB7IHZhbHVlOiBmYWxzZSwgZW51bWVyYWJsZTogdHJ1ZSB9KVxuXG4gICAgLy8gRGVmaW5lIGFjY2Vzc29yc1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgICAgICBpZiAoIShrZXkgaW4gdGhpcykpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIGRlZmluZVJlZGlyZWN0RGVzY3JpcHRvcihrZXkpKVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBTaG91bGQgYmUgZW51bWVyYWJsZSwgYnV0IGNsYXNzIG1ldGhvZHMgYXJlIG5vdCBlbnVtZXJhYmxlLlxuRXZlbnQucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoaXMgZXZlbnQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHBkKHRoaXMpLmV2ZW50LnR5cGVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBvZiB0aGlzIGV2ZW50LlxuICAgICAqIEB0eXBlIHtFdmVudFRhcmdldH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gcGQodGhpcykuZXZlbnRUYXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBvZiB0aGlzIGV2ZW50LlxuICAgICAqIEB0eXBlIHtFdmVudFRhcmdldH1cbiAgICAgKi9cbiAgICBnZXQgY3VycmVudFRhcmdldCgpIHtcbiAgICAgICAgcmV0dXJuIHBkKHRoaXMpLmN1cnJlbnRUYXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0V2ZW50VGFyZ2V0W119IFRoZSBjb21wb3NlZCBwYXRoIG9mIHRoaXMgZXZlbnQuXG4gICAgICovXG4gICAgY29tcG9zZWRQYXRoKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gcGQodGhpcykuY3VycmVudFRhcmdldFxuICAgICAgICBpZiAoY3VycmVudFRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2N1cnJlbnRUYXJnZXRdXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnN0YW50IG9mIE5PTkUuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgTk9ORSgpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uc3RhbnQgb2YgQ0FQVFVSSU5HX1BIQVNFLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IENBUFRVUklOR19QSEFTRSgpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uc3RhbnQgb2YgQVRfVEFSR0VULlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IEFUX1RBUkdFVCgpIHtcbiAgICAgICAgcmV0dXJuIDJcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uc3RhbnQgb2YgQlVCQkxJTkdfUEhBU0UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgQlVCQkxJTkdfUEhBU0UoKSB7XG4gICAgICAgIHJldHVybiAzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgb2YgdGhpcyBldmVudC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBldmVudFBoYXNlKCkge1xuICAgICAgICByZXR1cm4gcGQodGhpcykuZXZlbnRQaGFzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGV2ZW50IGJ1YmJsaW5nLlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHBkKHRoaXMpXG5cbiAgICAgICAgZGF0YS5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEuZXZlbnQuc3RvcFByb3BhZ2F0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGRhdGEuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGV2ZW50IGJ1YmJsaW5nLlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHBkKHRoaXMpXG5cbiAgICAgICAgZGF0YS5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICBkYXRhLmltbWVkaWF0ZVN0b3BwZWQgPSB0cnVlXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5ldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZGF0YS5ldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBmbGFnIHRvIGJlIGJ1YmJsaW5nLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBidWJibGVzKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihwZCh0aGlzKS5ldmVudC5idWJibGVzKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmxhZyB0byBiZSBjYW5jZWxhYmxlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5jZWxhYmxlKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihwZCh0aGlzKS5ldmVudC5jYW5jZWxhYmxlKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYW5jZWwgdGhpcyBldmVudC5cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgc2V0Q2FuY2VsRmxhZyhwZCh0aGlzKSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGZsYWcgdG8gaW5kaWNhdGUgY2FuY2VsbGF0aW9uIHN0YXRlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBkZWZhdWx0UHJldmVudGVkKCkge1xuICAgICAgICByZXR1cm4gcGQodGhpcykuY2FuY2VsZWRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGZsYWcgdG8gYmUgY29tcG9zZWQuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNvbXBvc2VkKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihwZCh0aGlzKS5ldmVudC5jb21wb3NlZClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVuaXggdGltZSBvZiB0aGlzIGV2ZW50LlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHRpbWVTdGFtcCgpIHtcbiAgICAgICAgcmV0dXJuIHBkKHRoaXMpLnRpbWVTdGFtcFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IG9mIHRoaXMgZXZlbnQuXG4gICAgICogQHR5cGUge0V2ZW50VGFyZ2V0fVxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgZ2V0IHNyY0VsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBwZCh0aGlzKS5ldmVudFRhcmdldFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmxhZyB0byBzdG9wIGV2ZW50IGJ1YmJsaW5nLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgZ2V0IGNhbmNlbEJ1YmJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHBkKHRoaXMpLnN0b3BwZWRcbiAgICB9LFxuICAgIHNldCBjYW5jZWxCdWJibGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHBkKHRoaXMpXG5cbiAgICAgICAgZGF0YS5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEuZXZlbnQuY2FuY2VsQnViYmxlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgZGF0YS5ldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGZsYWcgdG8gaW5kaWNhdGUgY2FuY2VsbGF0aW9uIHN0YXRlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgZ2V0IHJldHVyblZhbHVlKCkge1xuICAgICAgICByZXR1cm4gIXBkKHRoaXMpLmNhbmNlbGVkXG4gICAgfSxcbiAgICBzZXQgcmV0dXJuVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgc2V0Q2FuY2VsRmxhZyhwZCh0aGlzKSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoaXMgZXZlbnQgb2JqZWN0LiBCdXQgZG8gbm90aGluZyB1bmRlciBldmVudCBkaXNwYXRjaGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgZXZlbnQgdHlwZS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtidWJibGVzPWZhbHNlXSBUaGUgZmxhZyB0byBiZSBwb3NzaWJsZSB0byBidWJibGUgdXAuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbY2FuY2VsYWJsZT1mYWxzZV0gVGhlIGZsYWcgdG8gYmUgcG9zc2libGUgdG8gY2FuY2VsLlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgaW5pdEV2ZW50KCkge1xuICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgIH0sXG59XG5cbi8vIGBjb25zdHJ1Y3RvcmAgaXMgbm90IGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogRXZlbnQsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxufSlcblxuLy8gRW5zdXJlIGBldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5FdmVudGAgaXMgYHRydWVgLlxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5FdmVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFdmVudC5wcm90b3R5cGUsIHdpbmRvdy5FdmVudC5wcm90b3R5cGUpXG5cbiAgICAvLyBNYWtlIGFzc29jaWF0aW9uIGZvciB3cmFwcGVycy5cbiAgICB3cmFwcGVycy5zZXQod2luZG93LkV2ZW50LnByb3RvdHlwZSwgRXZlbnQpXG59XG5cbi8qKlxuICogR2V0IHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIHJlZGlyZWN0IGEgZ2l2ZW4gcHJvcGVydHkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFByb3BlcnR5IG5hbWUgdG8gZGVmaW5lIHByb3BlcnR5IGRlc2NyaXB0b3IuXG4gKiBAcmV0dXJucyB7UHJvcGVydHlEZXNjcmlwdG9yfSBUaGUgcHJvcGVydHkgZGVzY3JpcHRvciB0byByZWRpcmVjdCB0aGUgcHJvcGVydHkuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZWZpbmVSZWRpcmVjdERlc2NyaXB0b3Ioa2V5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHBkKHRoaXMpLmV2ZW50W2tleV1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICBwZCh0aGlzKS5ldmVudFtrZXldID0gdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gY2FsbCBhIGdpdmVuIG1ldGhvZCBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgUHJvcGVydHkgbmFtZSB0byBkZWZpbmUgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIEByZXR1cm5zIHtQcm9wZXJ0eURlc2NyaXB0b3J9IFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGNhbGwgdGhlIG1ldGhvZCBwcm9wZXJ0eS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmluZUNhbGxEZXNjcmlwdG9yKGtleSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlKCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBwZCh0aGlzKS5ldmVudFxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50W2tleV0uYXBwbHkoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWZpbmUgbmV3IHdyYXBwZXIgY2xhc3MuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBCYXNlRXZlbnQgVGhlIGJhc2Ugd3JhcHBlciBjbGFzcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgcHJvdG90eXBlIG9mIHRoZSBvcmlnaW5hbCBldmVudC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIGRlZmluZWQgd3JhcHBlciBjbGFzcy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVdyYXBwZXIoQmFzZUV2ZW50LCBwcm90bykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm90bylcbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJhc2VFdmVudFxuICAgIH1cblxuICAgIC8qKiBDdXN0b21FdmVudCAqL1xuICAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50VGFyZ2V0LCBldmVudCkge1xuICAgICAgICBCYXNlRXZlbnQuY2FsbCh0aGlzLCBldmVudFRhcmdldCwgZXZlbnQpXG4gICAgfVxuXG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlRXZlbnQucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBDdXN0b21FdmVudCwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgIH0pXG5cbiAgICAvLyBEZWZpbmUgYWNjZXNzb3JzLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgICAgIGlmICghKGtleSBpbiBCYXNlRXZlbnQucHJvdG90eXBlKSkge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSlcbiAgICAgICAgICAgIGNvbnN0IGlzRnVuYyA9IHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICBDdXN0b21FdmVudC5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGlzRnVuY1xuICAgICAgICAgICAgICAgICAgICA/IGRlZmluZUNhbGxEZXNjcmlwdG9yKGtleSlcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZpbmVSZWRpcmVjdERlc2NyaXB0b3Ioa2V5KVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEN1c3RvbUV2ZW50XG59XG5cbi8qKlxuICogR2V0IHRoZSB3cmFwcGVyIGNsYXNzIG9mIGEgZ2l2ZW4gcHJvdG90eXBlLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBwcm90b3R5cGUgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IHRvIGdldCBpdHMgd3JhcHBlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIHdyYXBwZXIgY2xhc3MuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRXcmFwcGVyKHByb3RvKSB7XG4gICAgaWYgKHByb3RvID09IG51bGwgfHwgcHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50XG4gICAgfVxuXG4gICAgbGV0IHdyYXBwZXIgPSB3cmFwcGVycy5nZXQocHJvdG8pXG4gICAgaWYgKHdyYXBwZXIgPT0gbnVsbCkge1xuICAgICAgICB3cmFwcGVyID0gZGVmaW5lV3JhcHBlcihnZXRXcmFwcGVyKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykpLCBwcm90bylcbiAgICAgICAgd3JhcHBlcnMuc2V0KHByb3RvLCB3cmFwcGVyKVxuICAgIH1cbiAgICByZXR1cm4gd3JhcHBlclxufVxuXG4vKipcbiAqIFdyYXAgYSBnaXZlbiBldmVudCB0byBtYW5hZ2VtZW50IGEgZGlzcGF0Y2hpbmcuXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0IG9mIHRoaXMgZGlzcGF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHRvIHdyYXAuXG4gKiBAcmV0dXJucyB7RXZlbnR9IFRoZSB3cmFwcGVyIGluc3RhbmNlLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBFdmVudChldmVudFRhcmdldCwgZXZlbnQpIHtcbiAgICBjb25zdCBXcmFwcGVyID0gZ2V0V3JhcHBlcihPYmplY3QuZ2V0UHJvdG90eXBlT2YoZXZlbnQpKVxuICAgIHJldHVybiBuZXcgV3JhcHBlcihldmVudFRhcmdldCwgZXZlbnQpXG59XG5cbi8qKlxuICogR2V0IHRoZSBpbW1lZGlhdGVTdG9wcGVkIGZsYWcgb2YgYSBnaXZlbiBldmVudC5cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIGZsYWcgdG8gc3RvcCBwcm9wYWdhdGlvbiBpbW1lZGlhdGVseS5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0b3BwZWQoZXZlbnQpIHtcbiAgICByZXR1cm4gcGQoZXZlbnQpLmltbWVkaWF0ZVN0b3BwZWRcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGN1cnJlbnQgZXZlbnQgcGhhc2Ugb2YgYSBnaXZlbiBldmVudC5cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0byBzZXQgY3VycmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZXZlbnRQaGFzZSBOZXcgZXZlbnQgcGhhc2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRFdmVudFBoYXNlKGV2ZW50LCBldmVudFBoYXNlKSB7XG4gICAgcGQoZXZlbnQpLmV2ZW50UGhhc2UgPSBldmVudFBoYXNlXG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IHRhcmdldCBvZiBhIGdpdmVuIGV2ZW50LlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRvIHNldCBjdXJyZW50IHRhcmdldC5cbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8bnVsbH0gY3VycmVudFRhcmdldCBOZXcgY3VycmVudCB0YXJnZXQuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VGFyZ2V0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgcGQoZXZlbnQpLmN1cnJlbnRUYXJnZXQgPSBjdXJyZW50VGFyZ2V0XG59XG5cbi8qKlxuICogU2V0IGEgcGFzc2l2ZSBsaXN0ZW5lciBvZiBhIGdpdmVuIGV2ZW50LlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRvIHNldCBjdXJyZW50IHRhcmdldC5cbiAqIEBwYXJhbSB7RnVuY3Rpb258bnVsbH0gcGFzc2l2ZUxpc3RlbmVyIE5ldyBwYXNzaXZlIGxpc3RlbmVyLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UGFzc2l2ZUxpc3RlbmVyKGV2ZW50LCBwYXNzaXZlTGlzdGVuZXIpIHtcbiAgICBwZChldmVudCkucGFzc2l2ZUxpc3RlbmVyID0gcGFzc2l2ZUxpc3RlbmVyXG59XG4iLCJpbXBvcnQge1xuICAgIGlzU3RvcHBlZCxcbiAgICBzZXRDdXJyZW50VGFyZ2V0LFxuICAgIHNldEV2ZW50UGhhc2UsXG4gICAgc2V0UGFzc2l2ZUxpc3RlbmVyLFxuICAgIHdyYXBFdmVudCxcbn0gZnJvbSBcIi4vZXZlbnQubWpzXCJcblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMaXN0ZW5lck5vZGVcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gKiBAcHJvcGVydHkgezF8MnwzfSBsaXN0ZW5lclR5cGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcGFzc2l2ZVxuICogQHByb3BlcnR5IHtib29sZWFufSBvbmNlXG4gKiBAcHJvcGVydHkge0xpc3RlbmVyTm9kZXxudWxsfSBuZXh0XG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQHR5cGUge1dlYWtNYXA8b2JqZWN0LCBNYXA8c3RyaW5nLCBMaXN0ZW5lck5vZGU+Pn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGxpc3RlbmVyc01hcCA9IG5ldyBXZWFrTWFwKClcblxuLy8gTGlzdGVuZXIgdHlwZXNcbmNvbnN0IENBUFRVUkUgPSAxXG5jb25zdCBCVUJCTEUgPSAyXG5jb25zdCBBVFRSSUJVVEUgPSAzXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIGdpdmVuIHZhbHVlIGlzIGFuIG9iamVjdCBvciBub3QuXG4gKiBAcGFyYW0ge2FueX0geCBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbn1cblxuLyoqXG4gKiBHZXQgbGlzdGVuZXJzLlxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZlbnRUYXJnZXQgVGhlIGV2ZW50IHRhcmdldCB0byBnZXQuXG4gKiBAcmV0dXJucyB7TWFwPHN0cmluZywgTGlzdGVuZXJOb2RlPn0gVGhlIGxpc3RlbmVycy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldExpc3RlbmVycyhldmVudFRhcmdldCkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IGxpc3RlbmVyc01hcC5nZXQoZXZlbnRUYXJnZXQpXG4gICAgaWYgKGxpc3RlbmVycyA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICBcIid0aGlzJyBpcyBleHBlY3RlZCBhbiBFdmVudFRhcmdldCBvYmplY3QsIGJ1dCBnb3QgYW5vdGhlciB2YWx1ZS5cIlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiBsaXN0ZW5lcnNcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgZm9yIHRoZSBldmVudCBhdHRyaWJ1dGUgb2YgYSBnaXZlbiBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgVGhlIGV2ZW50IG5hbWUgdG8gZ2V0IHByb3BlcnR5IGRlc2NyaXB0b3IuXG4gKiBAcmV0dXJucyB7UHJvcGVydHlEZXNjcmlwdG9yfSBUaGUgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmluZUV2ZW50QXR0cmlidXRlRGVzY3JpcHRvcihldmVudE5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnModGhpcylcbiAgICAgICAgICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpXG4gICAgICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGlzdGVuZXJUeXBlID09PSBBVFRSSUJVVEUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUubGlzdGVuZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIiAmJiAhaXNPYmplY3QobGlzdGVuZXIpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBudWxsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGlzKVxuXG4gICAgICAgICAgICAvLyBUcmF2ZXJzZSB0byB0aGUgdGFpbCB3aGlsZSByZW1vdmluZyBvbGQgdmFsdWUuXG4gICAgICAgICAgICBsZXQgcHJldiA9IG51bGxcbiAgICAgICAgICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpXG4gICAgICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGlzdGVuZXJUeXBlID09PSBBVFRSSUJVVEUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXYubmV4dCA9IG5vZGUubmV4dFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNldChldmVudE5hbWUsIG5vZGUubmV4dClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZXZlbnROYW1lKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldiA9IG5vZGVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBuZXcgdmFsdWUuXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOb2RlID0ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJUeXBlOiBBVFRSSUJVVEUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvbmNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXYgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNldChldmVudE5hbWUsIG5ld05vZGUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldi5uZXh0ID0gbmV3Tm9kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWZpbmUgYW4gZXZlbnQgYXR0cmlidXRlIChlLmcuIGBldmVudFRhcmdldC5vbmNsaWNrYCkuXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRUYXJnZXRQcm90b3R5cGUgVGhlIGV2ZW50IHRhcmdldCBwcm90b3R5cGUgdG8gZGVmaW5lIGFuIGV2ZW50IGF0dHJiaXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgZXZlbnQgbmFtZSB0byBkZWZpbmUuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gZGVmaW5lRXZlbnRBdHRyaWJ1dGUoZXZlbnRUYXJnZXRQcm90b3R5cGUsIGV2ZW50TmFtZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgZXZlbnRUYXJnZXRQcm90b3R5cGUsXG4gICAgICAgIGBvbiR7ZXZlbnROYW1lfWAsXG4gICAgICAgIGRlZmluZUV2ZW50QXR0cmlidXRlRGVzY3JpcHRvcihldmVudE5hbWUpXG4gICAgKVxufVxuXG4vKipcbiAqIERlZmluZSBhIGN1c3RvbSBFdmVudFRhcmdldCB3aXRoIGV2ZW50IGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBldmVudE5hbWVzIEV2ZW50IG5hbWVzIGZvciBldmVudCBhdHRyaWJ1dGVzLlxuICogQHJldHVybnMge0V2ZW50VGFyZ2V0fSBUaGUgY3VzdG9tIEV2ZW50VGFyZ2V0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRXZlbnRUYXJnZXQoZXZlbnROYW1lcykge1xuICAgIC8qKiBDdXN0b21FdmVudFRhcmdldCAqL1xuICAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50VGFyZ2V0KCkge1xuICAgICAgICBFdmVudFRhcmdldC5jYWxsKHRoaXMpXG4gICAgfVxuXG4gICAgQ3VzdG9tRXZlbnRUYXJnZXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldC5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBDdXN0b21FdmVudFRhcmdldCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZGVmaW5lRXZlbnRBdHRyaWJ1dGUoQ3VzdG9tRXZlbnRUYXJnZXQucHJvdG90eXBlLCBldmVudE5hbWVzW2ldKVxuICAgIH1cblxuICAgIHJldHVybiBDdXN0b21FdmVudFRhcmdldFxufVxuXG4vKipcbiAqIEV2ZW50VGFyZ2V0LlxuICpcbiAqIC0gVGhpcyBpcyBjb25zdHJ1Y3RvciBpZiBubyBhcmd1bWVudHMuXG4gKiAtIFRoaXMgaXMgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgQ3VzdG9tRXZlbnRUYXJnZXQgY29uc3RydWN0b3IgaWYgdGhlcmUgYXJlIGFyZ3VtZW50cy5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiAgICAgY2xhc3MgQSBleHRlbmRzIEV2ZW50VGFyZ2V0IHt9XG4gKiAgICAgY2xhc3MgQiBleHRlbmRzIEV2ZW50VGFyZ2V0KFwibWVzc2FnZVwiKSB7fVxuICogICAgIGNsYXNzIEMgZXh0ZW5kcyBFdmVudFRhcmdldChcIm1lc3NhZ2VcIiwgXCJlcnJvclwiKSB7fVxuICogICAgIGNsYXNzIEQgZXh0ZW5kcyBFdmVudFRhcmdldChbXCJtZXNzYWdlXCIsIFwiZXJyb3JcIl0pIHt9XG4gKi9cbmZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xuICAgIC8qZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIGxpc3RlbmVyc01hcC5zZXQodGhpcywgbmV3IE1hcCgpKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVDdXN0b21FdmVudFRhcmdldChhcmd1bWVudHNbMF0pXG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdHlwZXNbaV0gPSBhcmd1bWVudHNbaV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmaW5lQ3VzdG9tRXZlbnRUYXJnZXQodHlwZXMpXG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIilcbiAgICAvKmVzbGludC1lbmFibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbn1cblxuLy8gU2hvdWxkIGJlIGVudW1lcmFibGUsIGJ1dCBjbGFzcyBtZXRob2RzIGFyZSBub3QgZW51bWVyYWJsZS5cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBBZGQgYSBnaXZlbiBsaXN0ZW5lciB0byB0aGlzIGV2ZW50IHRhcmdldC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBldmVudCBuYW1lIHRvIGFkZC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgdG8gYWRkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnx7Y2FwdHVyZT86Ym9vbGVhbixwYXNzaXZlPzpib29sZWFuLG9uY2U/OmJvb2xlYW59fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgZm9yIHRoaXMgbGlzdGVuZXIuXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIgJiYgIWlzT2JqZWN0KGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIidsaXN0ZW5lcicgc2hvdWxkIGJlIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0LlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gZ2V0TGlzdGVuZXJzKHRoaXMpXG4gICAgICAgIGNvbnN0IG9wdGlvbnNJc09iaiA9IGlzT2JqZWN0KG9wdGlvbnMpXG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSBvcHRpb25zSXNPYmpcbiAgICAgICAgICAgID8gQm9vbGVhbihvcHRpb25zLmNhcHR1cmUpXG4gICAgICAgICAgICA6IEJvb2xlYW4ob3B0aW9ucylcbiAgICAgICAgY29uc3QgbGlzdGVuZXJUeXBlID0gY2FwdHVyZSA/IENBUFRVUkUgOiBCVUJCTEVcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IHtcbiAgICAgICAgICAgIGxpc3RlbmVyLFxuICAgICAgICAgICAgbGlzdGVuZXJUeXBlLFxuICAgICAgICAgICAgcGFzc2l2ZTogb3B0aW9uc0lzT2JqICYmIEJvb2xlYW4ob3B0aW9ucy5wYXNzaXZlKSxcbiAgICAgICAgICAgIG9uY2U6IG9wdGlvbnNJc09iaiAmJiBCb29sZWFuKG9wdGlvbnMub25jZSksXG4gICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGl0IGFzIHRoZSBmaXJzdCBub2RlIGlmIHRoZSBmaXJzdCBub2RlIGlzIG51bGwuXG4gICAgICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpXG4gICAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5zZXQoZXZlbnROYW1lLCBuZXdOb2RlKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmF2ZXJzZSB0byB0aGUgdGFpbCB3aGlsZSBjaGVja2luZyBkdXBsaWNhdGlvbi4uXG4gICAgICAgIGxldCBwcmV2ID0gbnVsbFxuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbm9kZS5saXN0ZW5lciA9PT0gbGlzdGVuZXIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmxpc3RlbmVyVHlwZSA9PT0gbGlzdGVuZXJUeXBlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBTaG91bGQgaWdub3JlIGR1cGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldiA9IG5vZGVcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHRcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBpdC5cbiAgICAgICAgcHJldi5uZXh0ID0gbmV3Tm9kZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBnaXZlbiBsaXN0ZW5lciBmcm9tIHRoaXMgZXZlbnQgdGFyZ2V0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgVGhlIGV2ZW50IG5hbWUgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byByZW1vdmUuXG4gICAgICogQHBhcmFtIHtib29sZWFufHtjYXB0dXJlPzpib29sZWFuLHBhc3NpdmU/OmJvb2xlYW4sb25jZT86Ym9vbGVhbn19IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBmb3IgdGhpcyBsaXN0ZW5lci5cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gZ2V0TGlzdGVuZXJzKHRoaXMpXG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSBpc09iamVjdChvcHRpb25zKVxuICAgICAgICAgICAgPyBCb29sZWFuKG9wdGlvbnMuY2FwdHVyZSlcbiAgICAgICAgICAgIDogQm9vbGVhbihvcHRpb25zKVxuICAgICAgICBjb25zdCBsaXN0ZW5lclR5cGUgPSBjYXB0dXJlID8gQ0FQVFVSRSA6IEJVQkJMRVxuXG4gICAgICAgIGxldCBwcmV2ID0gbnVsbFxuICAgICAgICBsZXQgbm9kZSA9IGxpc3RlbmVycy5nZXQoZXZlbnROYW1lKVxuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbm9kZS5saXN0ZW5lciA9PT0gbGlzdGVuZXIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmxpc3RlbmVyVHlwZSA9PT0gbGlzdGVuZXJUeXBlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2Lm5leHQgPSBub2RlLm5leHRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc2V0KGV2ZW50TmFtZSwgbm9kZS5uZXh0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZXZlbnROYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldiA9IG5vZGVcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHRcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhIGdpdmVuIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7RXZlbnR8e3R5cGU6c3RyaW5nfX0gZXZlbnQgVGhlIGV2ZW50IHRvIGRpc3BhdGNoLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBgZmFsc2VgIGlmIGNhbmNlbGVkLlxuICAgICAqL1xuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50ID09IG51bGwgfHwgdHlwZW9mIGV2ZW50LnR5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZXZlbnQudHlwZVwiIHNob3VsZCBiZSBhIHN0cmluZy4nKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbGlzdGVuZXJzIGFyZW4ndCByZWdpc3RlcmVkLCB0ZXJtaW5hdGUuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGlzKVxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudC50eXBlXG4gICAgICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpXG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaW5jZSB3ZSBjYW5ub3QgcmV3cml0ZSBzZXZlcmFsIHByb3BlcnRpZXMsIHNvIHdyYXAgb2JqZWN0LlxuICAgICAgICBjb25zdCB3cmFwcGVkRXZlbnQgPSB3cmFwRXZlbnQodGhpcywgZXZlbnQpXG5cbiAgICAgICAgLy8gVGhpcyBkb2Vzbid0IHByb2Nlc3MgY2FwdHVyaW5nIHBoYXNlIGFuZCBidWJibGluZyBwaGFzZS5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBwYXJ0aWNpcGF0aW5nIGluIGEgdHJlZS5cbiAgICAgICAgbGV0IHByZXYgPSBudWxsXG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGlzIGxpc3RlbmVyIGlmIGl0J3Mgb25jZVxuICAgICAgICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXYubmV4dCA9IG5vZGUubmV4dFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zZXQoZXZlbnROYW1lLCBub2RlLm5leHQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShldmVudE5hbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmV2ID0gbm9kZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxsIHRoaXMgbGlzdGVuZXJcbiAgICAgICAgICAgIHNldFBhc3NpdmVMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICB3cmFwcGVkRXZlbnQsXG4gICAgICAgICAgICAgICAgbm9kZS5wYXNzaXZlID8gbm9kZS5saXN0ZW5lciA6IG51bGxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZS5saXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5saXN0ZW5lci5jYWxsKHRoaXMsIHdyYXBwZWRFdmVudClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgbm9kZS5saXN0ZW5lclR5cGUgIT09IEFUVFJJQlVURSAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBub2RlLmxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG5vZGUubGlzdGVuZXIuaGFuZGxlRXZlbnQod3JhcHBlZEV2ZW50KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBCcmVhayBpZiBgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uYCB3YXMgY2FsbGVkLlxuICAgICAgICAgICAgaWYgKGlzU3RvcHBlZCh3cmFwcGVkRXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dFxuICAgICAgICB9XG4gICAgICAgIHNldFBhc3NpdmVMaXN0ZW5lcih3cmFwcGVkRXZlbnQsIG51bGwpXG4gICAgICAgIHNldEV2ZW50UGhhc2Uod3JhcHBlZEV2ZW50LCAwKVxuICAgICAgICBzZXRDdXJyZW50VGFyZ2V0KHdyYXBwZWRFdmVudCwgbnVsbClcblxuICAgICAgICByZXR1cm4gIXdyYXBwZWRFdmVudC5kZWZhdWx0UHJldmVudGVkXG4gICAgfSxcbn1cblxuLy8gYGNvbnN0cnVjdG9yYCBpcyBub3QgZW51bWVyYWJsZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudFRhcmdldC5wcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBFdmVudFRhcmdldCxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG59KVxuXG4vLyBFbnN1cmUgYGV2ZW50VGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkV2ZW50VGFyZ2V0YCBpcyBgdHJ1ZWAuXG5pZiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHR5cGVvZiB3aW5kb3cuRXZlbnRUYXJnZXQgIT09IFwidW5kZWZpbmVkXCJcbikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFdmVudFRhcmdldC5wcm90b3R5cGUsIHdpbmRvdy5FdmVudFRhcmdldC5wcm90b3R5cGUpXG59XG5cbmV4cG9ydCB7IGRlZmluZUV2ZW50QXR0cmlidXRlLCBFdmVudFRhcmdldCB9XG5leHBvcnQgZGVmYXVsdCBFdmVudFRhcmdldFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBRUE7QUFDQTtBQTVNQTtBQUNBO0FBOE1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBVUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FDdGRBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBeERBO0FBMERBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBS0E7Ozs7Ozs7OztBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBektBO0FBQ0E7QUEyS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
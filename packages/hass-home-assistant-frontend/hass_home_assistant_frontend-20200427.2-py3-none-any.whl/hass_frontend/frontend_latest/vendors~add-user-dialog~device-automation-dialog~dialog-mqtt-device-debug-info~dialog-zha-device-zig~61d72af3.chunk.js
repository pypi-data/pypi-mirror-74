(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~add-user-dialog~device-automation-dialog~dialog-mqtt-device-debug-info~dialog-zha-device-zig~61d72af3"],{

/***/ "./node_modules/@material/dialog/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/dialog/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  CLOSING: 'mdc-dialog--closing',
  OPEN: 'mdc-dialog--open',
  OPENING: 'mdc-dialog--opening',
  SCROLLABLE: 'mdc-dialog--scrollable',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  STACKED: 'mdc-dialog--stacked'
};
var strings = {
  ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
  BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
  BUTTON_SELECTOR: '.mdc-dialog__button',
  CLOSED_EVENT: 'MDCDialog:closed',
  CLOSE_ACTION: 'close',
  CLOSING_EVENT: 'MDCDialog:closing',
  CONTAINER_SELECTOR: '.mdc-dialog__container',
  CONTENT_SELECTOR: '.mdc-dialog__content',
  DESTROY_ACTION: 'destroy',
  INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
  OPENED_EVENT: 'MDCDialog:opened',
  OPENING_EVENT: 'MDCDialog:opening',
  SCRIM_SELECTOR: '.mdc-dialog__scrim',
  SUPPRESS_DEFAULT_PRESS_SELECTOR: ['textarea', '.mdc-menu .mdc-list-item'].join(', '),
  SURFACE_SELECTOR: '.mdc-dialog__surface'
};
var numbers = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};

/***/ }),

/***/ "./node_modules/@material/dialog/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/dialog/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCDialogFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return MDCDialogFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/dialog/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCDialogFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDialogFoundation, _super);

  function MDCDialogFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCDialogFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    _this.layoutFrame_ = 0;
    _this.escapeKeyAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
    _this.scrimClickAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
    _this.autoStackButtons_ = true;
    _this.areButtonsStacked_ = false;
    return _this;
  }

  Object.defineProperty(MDCDialogFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "numbers", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
    get: function () {
      return {
        addBodyClass: function () {
          return undefined;
        },
        addClass: function () {
          return undefined;
        },
        areButtonsStacked: function () {
          return false;
        },
        clickDefaultButton: function () {
          return undefined;
        },
        eventTargetMatches: function () {
          return false;
        },
        getActionFromEvent: function () {
          return '';
        },
        getInitialFocusEl: function () {
          return null;
        },
        hasClass: function () {
          return false;
        },
        isContentScrollable: function () {
          return false;
        },
        notifyClosed: function () {
          return undefined;
        },
        notifyClosing: function () {
          return undefined;
        },
        notifyOpened: function () {
          return undefined;
        },
        notifyOpening: function () {
          return undefined;
        },
        releaseFocus: function () {
          return undefined;
        },
        removeBodyClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        reverseButtons: function () {
          return undefined;
        },
        trapFocus: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCDialogFoundation.prototype.init = function () {
    if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED)) {
      this.setAutoStackButtons(false);
    }
  };

  MDCDialogFoundation.prototype.destroy = function () {
    if (this.isOpen_) {
      this.close(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].DESTROY_ACTION);
    }

    if (this.animationTimer_) {
      clearTimeout(this.animationTimer_);
      this.handleAnimationTimerEnd_();
    }

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
      this.layoutFrame_ = 0;
    }
  };

  MDCDialogFoundation.prototype.open = function () {
    var _this = this;

    this.isOpen_ = true;
    this.adapter_.notifyOpening();
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);

      _this.adapter_.addBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);

      _this.layout();

      _this.animationTimer_ = setTimeout(function () {
        _this.handleAnimationTimerEnd_();

        _this.adapter_.trapFocus(_this.adapter_.getInitialFocusEl());

        _this.adapter_.notifyOpened();
      }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_OPEN_TIME_MS);
    });
  };

  MDCDialogFoundation.prototype.close = function (action) {
    var _this = this;

    if (action === void 0) {
      action = '';
    }

    if (!this.isOpen_) {
      // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
      return;
    }

    this.isOpen_ = false;
    this.adapter_.notifyClosing(action);
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
    this.adapter_.removeBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);
    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = setTimeout(function () {
      _this.adapter_.releaseFocus();

      _this.handleAnimationTimerEnd_();

      _this.adapter_.notifyClosed(action);
    }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_CLOSE_TIME_MS);
  };

  MDCDialogFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };

  MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
    return this.escapeKeyAction_;
  };

  MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
    this.escapeKeyAction_ = action;
  };

  MDCDialogFoundation.prototype.getScrimClickAction = function () {
    return this.scrimClickAction_;
  };

  MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
    this.scrimClickAction_ = action;
  };

  MDCDialogFoundation.prototype.getAutoStackButtons = function () {
    return this.autoStackButtons_;
  };

  MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
    this.autoStackButtons_ = autoStack;
  };

  MDCDialogFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };
  /** Handles click on the dialog root element. */


  MDCDialogFoundation.prototype.handleClick = function (evt) {
    var isScrim = this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SCRIM_SELECTOR); // Check for scrim click first since it doesn't require querying ancestors.

    if (isScrim && this.scrimClickAction_ !== '') {
      this.close(this.scrimClickAction_);
    } else {
      var action = this.adapter_.getActionFromEvent(evt);

      if (action) {
        this.close(action);
      }
    }
  };
  /** Handles keydown on the dialog root element. */


  MDCDialogFoundation.prototype.handleKeydown = function (evt) {
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;

    if (!isEnter) {
      return;
    }

    var action = this.adapter_.getActionFromEvent(evt);

    if (action) {
      // Action button callback is handled in `handleClick`,
      // since space/enter keydowns on buttons trigger click events.
      return;
    }

    var isDefault = !this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SUPPRESS_DEFAULT_PRESS_SELECTOR);

    if (isEnter && isDefault) {
      this.adapter_.clickDefaultButton();
    }
  };
  /** Handles keydown on the document. */


  MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
    var isEscape = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscape && this.escapeKeyAction_ !== '') {
      this.close(this.escapeKeyAction_);
    }
  };

  MDCDialogFoundation.prototype.layoutInternal_ = function () {
    if (this.autoStackButtons_) {
      this.detectStackedButtons_();
    }

    this.detectScrollableContent_();
  };

  MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0;
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
  };
  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
    // Remove the class first to let us measure the buttons' natural positions.
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
    var areButtonsStacked = this.adapter_.areButtonsStacked();

    if (areButtonsStacked) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
    }

    if (areButtonsStacked !== this.areButtonsStacked_) {
      this.adapter_.reverseButtons();
      this.areButtonsStacked_ = areButtonsStacked;
    }
  };

  MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
    // Remove the class first to let us measure the natural height of the content.
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);

    if (this.adapter_.isContentScrollable()) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);
    }
  };

  return MDCDialogFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCDialogFoundation);

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/mwc-dialog-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/mwc-dialog-base.js ***!
  \**************************************************************/
/*! exports provided: DialogBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBase", function() { return DialogBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var blocking_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blocking-elements */ "./node_modules/blocking-elements/dist/blocking-elements.js");
/* harmony import */ var blocking_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blocking_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wicg_inert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wicg-inert */ "./node_modules/wicg-inert/src/inert.js");
/* harmony import */ var wicg_inert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wicg_inert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_dialog_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dialog/constants.js */ "./node_modules/@material/dialog/constants.js");
/* harmony import */ var _material_dialog_foundation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dialog/foundation.js */ "./node_modules/@material/dialog/foundation.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/mwc-base/base-element.js */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");

/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/










const blockingElements = document.$blockingElements;
class DialogBase extends _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["BaseElement"] {
  constructor() {
    super(...arguments);
    this.hideActions = false;
    this.stacked = false;
    this.heading = '';
    this.scrimClickAction = 'close';
    this.escapeKeyAction = 'close';
    this.open = false;
    this.defaultAction = 'close';
    this.actionAttribute = 'dialogAction';
    this.initialFocusAttribute = 'dialogInitialFocus';
    this.mdcFoundationClass = _material_dialog_foundation_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.boundLayout = null;
    this.boundHandleClick = null;
    this.boundHandleKeydown = null;
    this.boundHandleDocumentKeydown = null;
  }

  get primaryButton() {
    let assignedNodes = this.primarySlot.assignedNodes();
    assignedNodes = assignedNodes.filter(node => node instanceof HTMLElement);
    const button = assignedNodes[0];
    return button ? button : null;
  }

  emitNotification(name, action) {
    const init = {
      detail: action ? {
        action
      } : {}
    };
    const ev = new CustomEvent(name, init);
    this.dispatchEvent(ev);
  }

  getInitialFocusEl() {
    const initFocusSelector = `[${this.initialFocusAttribute}]`; // only search light DOM. This typically handles all the cases

    const lightDomQs = this.querySelector(initFocusSelector);

    if (lightDomQs) {
      return lightDomQs;
    } // if not in light dom, search each flattened distributed node.


    const primarySlot = this.primarySlot;
    const primaryNodes = primarySlot.assignedNodes({
      flatten: true
    });
    const primaryFocusElement = this.searchNodeTreesForAttribute(primaryNodes, this.initialFocusAttribute);

    if (primaryFocusElement) {
      return primaryFocusElement;
    }

    const secondarySlot = this.secondarySlot;
    const secondaryNodes = secondarySlot.assignedNodes({
      flatten: true
    });
    const secondaryFocusElement = this.searchNodeTreesForAttribute(secondaryNodes, this.initialFocusAttribute);

    if (secondaryFocusElement) {
      return secondaryFocusElement;
    }

    const contentSlot = this.contentSlot;
    const contentNodes = contentSlot.assignedNodes({
      flatten: true
    });
    const initFocusElement = this.searchNodeTreesForAttribute(contentNodes, this.initialFocusAttribute);
    return initFocusElement;
  }

  searchNodeTreesForAttribute(nodes, attribute) {
    for (const node of nodes) {
      if (!(node instanceof HTMLElement)) {
        continue;
      }

      if (node.hasAttribute(attribute)) {
        return node;
      } else {
        const selection = node.querySelector(`[${attribute}]`);

        if (selection) {
          return selection;
        }
      }
    }

    return null;
  }

  createAdapter() {
    return Object.assign(Object.assign({}, Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["addHasRemoveClass"])(this.mdcRoot)), {
      addBodyClass: () => document.body.style.overflow = 'hidden',
      removeBodyClass: () => document.body.style.overflow = '',
      areButtonsStacked: () => this.stacked,
      clickDefaultButton: () => {
        const primary = this.primaryButton;

        if (primary) {
          primary.click();
        }
      },
      eventTargetMatches: (target, selector) => target ? Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__["matches"])(target, selector) : false,
      getActionFromEvent: e => {
        if (!e.target) {
          return '';
        }

        const element = Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__["closest"])(e.target, `[${this.actionAttribute}]`);
        const action = element && element.getAttribute(this.actionAttribute);
        return action;
      },
      getInitialFocusEl: () => {
        return this.getInitialFocusEl();
      },
      isContentScrollable: () => {
        const el = this.contentElement;
        return el ? el.scrollHeight > el.offsetHeight : false;
      },
      notifyClosed: action => this.emitNotification('closed', action),
      notifyClosing: action => {
        if (!this.closingDueToDisconnect) {
          // Don't set our open state to closed just because we were
          // disconnected. That way if we get reconnected, we'll know to
          // re-open.
          this.open = false;
        }

        this.emitNotification('closing', action);
      },
      notifyOpened: () => this.emitNotification('opened'),
      notifyOpening: () => {
        this.open = true;
        this.emitNotification('opening');
      },
      reverseButtons: () => {},
      releaseFocus: () => {
        blockingElements.remove(this);
      },
      trapFocus: el => {
        blockingElements.push(this);

        if (el) {
          el.focus();
        }
      }
    });
  }

  render() {
    const classes = {
      [_material_dialog_constants_js__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].STACKED]: this.stacked
    };
    let heading = lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]``;

    if (this.heading) {
      heading = lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
        <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`;
    }

    const actionsClasses = {
      'mdc-dialog__actions': !this.hideActions
    };
    return lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
    <div class="mdc-dialog ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_9__["classMap"])(classes)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${heading}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_9__["classMap"])(actionsClasses)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
  }

  firstUpdated() {
    super.firstUpdated();
    this.mdcFoundation.setAutoStackButtons(true);
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.open && this.mdcFoundation && !this.mdcFoundation.isOpen()) {
      // We probably got disconnected while we were still open. Re-open,
      // matching the behavior of native <dialog>.
      this.setEventListeners();
      this.mdcFoundation.open();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.open && this.mdcFoundation) {
      // If this dialog is opened and then disconnected, we want to close
      // the foundation, so that 1) any pending timers are cancelled
      // (in particular for trapFocus), and 2) if we reconnect, we can open
      // the foundation again to retrigger animations and focus.
      this.removeEventListeners();
      this.closingDueToDisconnect = true;
      this.mdcFoundation.close(this.currentAction || this.defaultAction);
      this.closingDueToDisconnect = false;
      this.currentAction = undefined; // When we close normally, the releaseFocus callback handles removing
      // ourselves from the blocking elements stack. However, that callback
      // happens on a delay, and when we are closing due to a disconnect we
      // need to remove ourselves before the blocking element polyfill's
      // mutation observer notices and logs a warning, since it's not valid to
      // be in the blocking elements stack while disconnected.

      blockingElements.remove(this);
    }
  }

  forceLayout() {
    this.mdcFoundation.layout();
  }

  focus() {
    const initialFocusEl = this.getInitialFocusEl();
    initialFocusEl && initialFocusEl.focus();
  }

  blur() {
    if (!this.shadowRoot) {
      return;
    }

    const activeEl = this.shadowRoot.activeElement;

    if (activeEl) {
      if (activeEl instanceof HTMLElement) {
        activeEl.blur();
      }
    } else {
      const root = this.getRootNode();
      const activeEl = root instanceof Document ? root.activeElement : null;

      if (activeEl instanceof HTMLElement) {
        activeEl.blur();
      }
    }
  }

  setEventListeners() {
    this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation);

    this.boundLayout = () => {
      if (this.open) {
        this.mdcFoundation.layout.bind(this.mdcFoundation);
      }
    };

    this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation);
    this.boundHandleDocumentKeydown = this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation);
    this.mdcRoot.addEventListener('click', this.boundHandleClick);
    window.addEventListener('resize', this.boundLayout, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
    window.addEventListener('orientationchange', this.boundLayout, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
    this.mdcRoot.addEventListener('keydown', this.boundHandleKeydown, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
    document.addEventListener('keydown', this.boundHandleDocumentKeydown, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
  }

  removeEventListeners() {
    if (this.boundHandleClick) {
      this.mdcRoot.removeEventListener('click', this.boundHandleClick);
    }

    if (this.boundLayout) {
      window.removeEventListener('resize', this.boundLayout);
      window.removeEventListener('orientationchange', this.boundLayout);
    }

    if (this.boundHandleKeydown) {
      this.mdcRoot.removeEventListener('keydown', this.boundHandleKeydown);
    }

    if (this.boundHandleDocumentKeydown) {
      this.mdcRoot.removeEventListener('keydown', this.boundHandleDocumentKeydown);
    }
  }

  close() {
    this.open = false;
  }

  show() {
    this.open = true;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('.mdc-dialog')], DialogBase.prototype, "mdcRoot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('slot[name="primaryAction"]')], DialogBase.prototype, "primarySlot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('slot[name="secondaryAction"]')], DialogBase.prototype, "secondarySlot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('#contentSlot')], DialogBase.prototype, "contentSlot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('.mdc-dialog__content')], DialogBase.prototype, "contentElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('.mdc-container')], DialogBase.prototype, "conatinerElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: Boolean
})], DialogBase.prototype, "hideActions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: Boolean
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function () {
  this.forceLayout();
})], DialogBase.prototype, "stacked", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: String
})], DialogBase.prototype, "heading", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: String
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (newAction) {
  this.mdcFoundation.setScrimClickAction(newAction);
})], DialogBase.prototype, "scrimClickAction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: String
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (newAction) {
  this.mdcFoundation.setEscapeKeyAction(newAction);
})], DialogBase.prototype, "escapeKeyAction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: Boolean,
  reflect: true
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (isOpen) {
  // Check isConnected because we could have been disconnected before first
  // update. If we're now closed, then we shouldn't start the MDC foundation
  // opening animation. If we're now closed, then we've already closed the
  // foundation in disconnectedCallback.
  if (this.mdcFoundation && this.isConnected) {
    if (isOpen) {
      this.setEventListeners();
      this.mdcFoundation.open();
    } else {
      this.removeEventListeners();
      this.mdcFoundation.close(this.currentAction || this.defaultAction);
      this.currentAction = undefined;
    }
  }
})], DialogBase.prototype, "open", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()], DialogBase.prototype, "defaultAction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()], DialogBase.prototype, "actionAttribute", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()], DialogBase.prototype, "initialFocusAttribute", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/mwc-dialog-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/mwc-dialog-css.js ***!
  \*************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:20px 24px;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:scale(1)}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:scale(1);opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px));border-radius:4px;border-radius:var(--mdc-dialog-shape-radius, 4px)}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*)[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}`;

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/mwc-dialog.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/mwc-dialog.js ***!
  \*********************************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_dialog_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-dialog-base.js */ "./node_modules/@material/mwc-dialog/mwc-dialog-base.js");
/* harmony import */ var _mwc_dialog_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-dialog-css.js */ "./node_modules/@material/mwc-dialog/mwc-dialog-css.js");

/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let Dialog = class Dialog extends _mwc_dialog_base_js__WEBPACK_IMPORTED_MODULE_2__["DialogBase"] {};
Dialog.styles = _mwc_dialog_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Dialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-dialog')], Dialog);


/***/ }),

/***/ "./node_modules/blocking-elements/dist/blocking-elements.js":
/*!******************************************************************!*\
  !*** ./node_modules/blocking-elements/dist/blocking-elements.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
  var _a, _b, _c;
  /* Symbols for private properties */


  const _blockingElements = Symbol();

  const _alreadyInertElements = Symbol();

  const _topElParents = Symbol();

  const _siblingsToRestore = Symbol();

  const _parentMO = Symbol();
  /* Symbols for private static methods */


  const _topChanged = Symbol();

  const _swapInertedSibling = Symbol();

  const _inertSiblings = Symbol();

  const _restoreInertedSiblings = Symbol();

  const _getParents = Symbol();

  const _getDistributedChildren = Symbol();

  const _isInertable = Symbol();

  const _handleMutations = Symbol();

  class BlockingElementsImpl {
    constructor() {
      /**
       * The blocking elements.
       */
      this[_a] = [];
      /**
       * Used to keep track of the parents of the top element, from the element
       * itself up to body. When top changes, the old top might have been removed
       * from the document, so we need to memoize the inerted parents' siblings
       * in order to restore their inerteness when top changes.
       */

      this[_b] = [];
      /**
       * Elements that are already inert before the first blocking element is
       * pushed.
       */

      this[_c] = new Set();
    }

    destructor() {
      // Restore original inertness.
      this[_restoreInertedSiblings](this[_topElParents]); // Note we don't want to make these properties nullable on the class,
      // since then we'd need non-null casts in many places. Calling a method on
      // a BlockingElements instance after calling destructor will result in an
      // exception.


      const nullable = this;
      nullable[_blockingElements] = null;
      nullable[_topElParents] = null;
      nullable[_alreadyInertElements] = null;
    }

    get top() {
      const elems = this[_blockingElements];
      return elems[elems.length - 1] || null;
    }

    push(element) {
      if (!element || element === this.top) {
        return;
      } // Remove it from the stack, we'll bring it to the top.


      this.remove(element);

      this[_topChanged](element);

      this[_blockingElements].push(element);
    }

    remove(element) {
      const i = this[_blockingElements].indexOf(element);

      if (i === -1) {
        return false;
      }

      this[_blockingElements].splice(i, 1); // Top changed only if the removed element was the top element.


      if (i === this[_blockingElements].length) {
        this[_topChanged](this.top);
      }

      return true;
    }

    pop() {
      const top = this.top;
      top && this.remove(top);
      return top;
    }

    has(element) {
      return this[_blockingElements].indexOf(element) !== -1;
    }
    /**
     * Sets `inert` to all document elements except the new top element, its
     * parents, and its distributed content.
     */


    [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
      const toKeepInert = this[_alreadyInertElements];
      const oldParents = this[_topElParents]; // No new top, reset old top if any.

      if (!newTop) {
        this[_restoreInertedSiblings](oldParents);

        toKeepInert.clear();
        this[_topElParents] = [];
        return;
      }

      const newParents = this[_getParents](newTop); // New top is not contained in the main document!


      if (newParents[newParents.length - 1].parentNode !== document.body) {
        throw Error('Non-connected element cannot be a blocking element');
      } // Cast here because we know we'll call _inertSiblings on newParents
      // below.


      this[_topElParents] = newParents;

      const toSkip = this[_getDistributedChildren](newTop); // No previous top element.


      if (!oldParents.length) {
        this[_inertSiblings](newParents, toSkip, toKeepInert);

        return;
      }

      let i = oldParents.length - 1;
      let j = newParents.length - 1; // Find common parent. Index 0 is the element itself (so stop before it).

      while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
        i--;
        j--;
      } // If up the parents tree there are 2 elements that are siblings, swap
      // the inerted sibling.


      if (oldParents[i] !== newParents[j]) {
        this[_swapInertedSibling](oldParents[i], newParents[j]);
      } // Restore old parents siblings inertness.


      i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i)); // Make new parents siblings inert.

      j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
    }
    /**
     * Swaps inertness between two sibling elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */


    [_swapInertedSibling](oldInert, newInert) {
      const siblingsToRestore = oldInert[_siblingsToRestore]; // oldInert is not contained in siblings to restore, so we have to check
      // if it's inertable and if already inert.

      if (this[_isInertable](oldInert) && !oldInert.inert) {
        oldInert.inert = true;
        siblingsToRestore.add(oldInert);
      } // If newInert was already between the siblings to restore, it means it is
      // inertable and must be restored.


      if (siblingsToRestore.has(newInert)) {
        newInert.inert = false;
        siblingsToRestore.delete(newInert);
      }

      newInert[_parentMO] = oldInert[_parentMO];
      newInert[_siblingsToRestore] = siblingsToRestore;
      oldInert[_parentMO] = undefined;
      oldInert[_siblingsToRestore] = undefined;
    }
    /**
     * Restores original inertness to the siblings of the elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */


    [_restoreInertedSiblings](elements) {
      for (const element of elements) {
        const mo = element[_parentMO];
        mo.disconnect();
        element[_parentMO] = undefined;
        const siblings = element[_siblingsToRestore];

        for (const sibling of siblings) {
          sibling.inert = false;
        }

        element[_siblingsToRestore] = undefined;
      }
    }
    /**
     * Inerts the siblings of the elements except the elements to skip. Stores
     * the inerted siblings into the element's symbol `_siblingsToRestore`.
     * Pass `toKeepInert` to collect the already inert elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */


    [_inertSiblings](elements, toSkip, toKeepInert) {
      for (const element of elements) {
        // Assume element is not a Document, so it must have a parentNode.
        const parent = element.parentNode;
        const children = parent.children;
        const inertedSiblings = new Set();

        for (let j = 0; j < children.length; j++) {
          const sibling = children[j]; // Skip the input element, if not inertable or to be skipped.

          if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
            continue;
          } // Should be collected since already inerted.


          if (toKeepInert && sibling.inert) {
            toKeepInert.add(sibling);
          } else {
            sibling.inert = true;
            inertedSiblings.add(sibling);
          }
        } // Store the siblings that were inerted.


        element[_siblingsToRestore] = inertedSiblings; // Observe only immediate children mutations on the parent.

        const mo = new MutationObserver(this[_handleMutations].bind(this));
        element[_parentMO] = mo;
        let parentToObserve = parent; // If we're using the ShadyDOM polyfill, then our parent could be a
        // shady root, which is an object that acts like a ShadowRoot, but isn't
        // actually a node in the real DOM. Observe the real DOM parent instead.

        const maybeShadyRoot = parentToObserve;

        if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
          parentToObserve = maybeShadyRoot.host;
        }

        mo.observe(parentToObserve, {
          childList: true
        });
      }
    }
    /**
     * Handles newly added/removed nodes by toggling their inertness.
     * It also checks if the current top Blocking Element has been removed,
     * notifying and removing it.
     */


    [_handleMutations](mutations) {
      const parents = this[_topElParents];
      const toKeepInert = this[_alreadyInertElements];

      for (const mutation of mutations) {
        // If the target is a shadowRoot, get its host as we skip shadowRoots when
        // computing _topElParents.
        const target = mutation.target.host || mutation.target;
        const idx = target === document.body ? parents.length : parents.indexOf(target);
        const inertedChild = parents[idx - 1];
        const inertedSiblings = inertedChild[_siblingsToRestore]; // To restore.

        for (let i = 0; i < mutation.removedNodes.length; i++) {
          const sibling = mutation.removedNodes[i];

          if (sibling === inertedChild) {
            console.info('Detected removal of the top Blocking Element.');
            this.pop();
            return;
          }

          if (inertedSiblings.has(sibling)) {
            sibling.inert = false;
            inertedSiblings.delete(sibling);
          }
        } // To inert.


        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const sibling = mutation.addedNodes[i];

          if (!this[_isInertable](sibling)) {
            continue;
          }

          if (toKeepInert && sibling.inert) {
            toKeepInert.add(sibling);
          } else {
            sibling.inert = true;
            inertedSiblings.add(sibling);
          }
        }
      }
    }
    /**
     * Returns if the element is inertable.
     */


    [_isInertable](element) {
      return false === /^(style|template|script)$/.test(element.localName);
    }
    /**
     * Returns the list of newParents of an element, starting from element
     * (included) up to `document.body` (excluded).
     */


    [_getParents](element) {
      const parents = [];
      let current = element; // Stop to body.

      while (current && current !== document.body) {
        // Skip shadow roots.
        if (current.nodeType === Node.ELEMENT_NODE) {
          parents.push(current);
        } // ShadowDom v1


        if (current.assignedSlot) {
          // Collect slots from deepest slot to top.
          while (current = current.assignedSlot) {
            parents.push(current);
          } // Continue the search on the top slot.


          current = parents.pop();
          continue;
        }

        current = current.parentNode || current.host;
      }

      return parents;
    }
    /**
     * Returns the distributed children of the element's shadow root.
     * Returns null if the element doesn't have a shadow root.
     */


    [_getDistributedChildren](element) {
      const shadowRoot = element.shadowRoot;

      if (!shadowRoot) {
        return null;
      }

      const result = new Set();
      let i;
      let j;
      let nodes;
      const slots = shadowRoot.querySelectorAll('slot');

      if (slots.length && slots[0].assignedNodes) {
        for (i = 0; i < slots.length; i++) {
          nodes = slots[i].assignedNodes({
            flatten: true
          });

          for (j = 0; j < nodes.length; j++) {
            if (nodes[j].nodeType === Node.ELEMENT_NODE) {
              result.add(nodes[j]);
            }
          }
        } // No need to search for <content>.

      }

      return result;
    }

  }

  document.$blockingElements = new BlockingElementsImpl();
})();

/***/ }),

/***/ "./node_modules/wicg-inert/src/inert.js":
/*!**********************************************!*\
  !*** ./node_modules/wicg-inert/src/inert.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */
// Convenience function for converting NodeLists.

/** @type {typeof Array.prototype.slice} */
const slice = Array.prototype.slice;
/**
 * IE has a non-standard name for "matches".
 * @type {typeof Element.prototype.matches}
 */

const matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
/** @type {string} */

const _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');
/**
 * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
 * attribute.
 *
 * Its main functions are:
 *
 * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
 *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
 *   each focusable node in the subtree with the singleton `InertManager` which manages all known
 *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
 *   instance exists for each focusable node which has at least one inert root as an ancestor.
 *
 * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
 *   attribute is removed from the root node). This is handled in the destructor, which calls the
 *   `deregister` method on `InertManager` for each managed inert node.
 */


class InertRoot {
  /**
   * @param {!Element} rootElement The Element at the root of the inert subtree.
   * @param {!InertManager} inertManager The global singleton InertManager object.
   */
  constructor(rootElement, inertManager) {
    /** @type {!InertManager} */
    this._inertManager = inertManager;
    /** @type {!Element} */

    this._rootElement = rootElement;
    /**
     * @type {!Set<!InertNode>}
     * All managed focusable nodes in this InertRoot's subtree.
     */

    this._managedNodes = new Set(); // Make the subtree hidden from assistive technology

    if (this._rootElement.hasAttribute('aria-hidden')) {
      /** @type {?string} */
      this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
    } else {
      this._savedAriaHidden = null;
    }

    this._rootElement.setAttribute('aria-hidden', 'true'); // Make all focusable elements in the subtree unfocusable and add them to _managedNodes


    this._makeSubtreeUnfocusable(this._rootElement); // Watch for:
    // - any additions in the subtree: make them unfocusable too
    // - any removals from the subtree: remove them from this inert root's managed nodes
    // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
    //   element, make that node a managed node.


    this._observer = new MutationObserver(this._onMutation.bind(this));

    this._observer.observe(this._rootElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  /**
   * Call this whenever this object is about to become obsolete.  This unwinds all of the state
   * stored in this object and updates the state of all of the managed nodes.
   */


  destructor() {
    this._observer.disconnect();

    if (this._rootElement) {
      if (this._savedAriaHidden !== null) {
        this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
      } else {
        this._rootElement.removeAttribute('aria-hidden');
      }
    }

    this._managedNodes.forEach(function (inertNode) {
      this._unmanageNode(inertNode.node);
    }, this); // Note we cast the nulls to the ANY type here because:
    // 1) We want the class properties to be declared as non-null, or else we
    //    need even more casts throughout this code. All bets are off if an
    //    instance has been destroyed and a method is called.
    // 2) We don't want to cast "this", because we want type-aware optimizations
    //    to know which properties we're setting.


    this._observer =
    /** @type {?} */
    null;
    this._rootElement =
    /** @type {?} */
    null;
    this._managedNodes =
    /** @type {?} */
    null;
    this._inertManager =
    /** @type {?} */
    null;
  }
  /**
   * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
   */


  get managedNodes() {
    return new Set(this._managedNodes);
  }
  /** @return {boolean} */


  get hasSavedAriaHidden() {
    return this._savedAriaHidden !== null;
  }
  /** @param {?string} ariaHidden */


  set savedAriaHidden(ariaHidden) {
    this._savedAriaHidden = ariaHidden;
  }
  /** @return {?string} */


  get savedAriaHidden() {
    return this._savedAriaHidden;
  }
  /**
   * @param {!Node} startNode
   */


  _makeSubtreeUnfocusable(startNode) {
    composedTreeWalk(startNode, node => this._visitNode(node));
    let activeElement = document.activeElement;

    if (!document.body.contains(startNode)) {
      // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
      let node = startNode;
      /** @type {!ShadowRoot|undefined} */

      let root = undefined;

      while (node) {
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          root =
          /** @type {!ShadowRoot} */
          node;
          break;
        }

        node = node.parentNode;
      }

      if (root) {
        activeElement = root.activeElement;
      }
    }

    if (startNode.contains(activeElement)) {
      activeElement.blur(); // In IE11, if an element is already focused, and then set to tabindex=-1
      // calling blur() will not actually move the focus.
      // To work around this we call focus() on the body instead.

      if (activeElement === document.activeElement) {
        document.body.focus();
      }
    }
  }
  /**
   * @param {!Node} node
   */


  _visitNode(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const element =
    /** @type {!Element} */
    node; // If a descendant inert root becomes un-inert, its descendants will still be inert because of
    // this inert root, so all of its managed nodes need to be adopted by this InertRoot.

    if (element !== this._rootElement && element.hasAttribute('inert')) {
      this._adoptInertRoot(element);
    }

    if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
      this._manageNode(element);
    }
  }
  /**
   * Register the given node with this InertRoot and with InertManager.
   * @param {!Node} node
   */


  _manageNode(node) {
    const inertNode = this._inertManager.register(node, this);

    this._managedNodes.add(inertNode);
  }
  /**
   * Unregister the given node with this InertRoot and with InertManager.
   * @param {!Node} node
   */


  _unmanageNode(node) {
    const inertNode = this._inertManager.deregister(node, this);

    if (inertNode) {
      this._managedNodes.delete(inertNode);
    }
  }
  /**
   * Unregister the entire subtree starting at `startNode`.
   * @param {!Node} startNode
   */


  _unmanageSubtree(startNode) {
    composedTreeWalk(startNode, node => this._unmanageNode(node));
  }
  /**
   * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
   * @param {!Element} node
   */


  _adoptInertRoot(node) {
    let inertSubroot = this._inertManager.getInertRoot(node); // During initialisation this inert root may not have been registered yet,
    // so register it now if need be.


    if (!inertSubroot) {
      this._inertManager.setInert(node, true);

      inertSubroot = this._inertManager.getInertRoot(node);
    }

    inertSubroot.managedNodes.forEach(function (savedInertNode) {
      this._manageNode(savedInertNode.node);
    }, this);
  }
  /**
   * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
   * @param {!Array<!MutationRecord>} records
   * @param {!MutationObserver} self
   */


  _onMutation(records, self) {
    records.forEach(function (record) {
      const target =
      /** @type {!Element} */
      record.target;

      if (record.type === 'childList') {
        // Manage added nodes
        slice.call(record.addedNodes).forEach(function (node) {
          this._makeSubtreeUnfocusable(node);
        }, this); // Un-manage removed nodes

        slice.call(record.removedNodes).forEach(function (node) {
          this._unmanageSubtree(node);
        }, this);
      } else if (record.type === 'attributes') {
        if (record.attributeName === 'tabindex') {
          // Re-initialise inert node if tabindex changes
          this._manageNode(target);
        } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
          // If a new inert root is added, adopt its managed nodes and make sure it knows about the
          // already managed nodes from this inert subroot.
          this._adoptInertRoot(target);

          const inertSubroot = this._inertManager.getInertRoot(target);

          this._managedNodes.forEach(function (managedNode) {
            if (target.contains(managedNode.node)) {
              inertSubroot._manageNode(managedNode.node);
            }
          });
        }
      }
    }, this);
  }

}
/**
 * `InertNode` initialises and manages a single inert node.
 * A node is inert if it is a descendant of one or more inert root elements.
 *
 * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
 * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
 * is intrinsically focusable or not.
 *
 * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
 * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
 * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
 * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
 * or removes the `tabindex` attribute if the element is intrinsically focusable.
 */


class InertNode {
  /**
   * @param {!Node} node A focusable element to be made inert.
   * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
   */
  constructor(node, inertRoot) {
    /** @type {!Node} */
    this._node = node;
    /** @type {boolean} */

    this._overrodeFocusMethod = false;
    /**
     * @type {!Set<!InertRoot>} The set of descendant inert roots.
     *    If and only if this set becomes empty, this node is no longer inert.
     */

    this._inertRoots = new Set([inertRoot]);
    /** @type {?number} */

    this._savedTabIndex = null;
    /** @type {boolean} */

    this._destroyed = false; // Save any prior tabindex info and make this node untabbable

    this.ensureUntabbable();
  }
  /**
   * Call this whenever this object is about to become obsolete.
   * This makes the managed node focusable again and deletes all of the previously stored state.
   */


  destructor() {
    this._throwIfDestroyed();

    if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
      const element =
      /** @type {!Element} */
      this._node;

      if (this._savedTabIndex !== null) {
        element.setAttribute('tabindex', this._savedTabIndex);
      } else {
        element.removeAttribute('tabindex');
      } // Use `delete` to restore native focus method.


      if (this._overrodeFocusMethod) {
        delete element.focus;
      }
    } // See note in InertRoot.destructor for why we cast these nulls to ANY.


    this._node =
    /** @type {?} */
    null;
    this._inertRoots =
    /** @type {?} */
    null;
    this._destroyed = true;
  }
  /**
   * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
   * If the object has been destroyed, any attempt to access it will cause an exception.
   */


  get destroyed() {
    return (
      /** @type {!InertNode} */
      this._destroyed
    );
  }
  /**
   * Throw if user tries to access destroyed InertNode.
   */


  _throwIfDestroyed() {
    if (this.destroyed) {
      throw new Error('Trying to access destroyed InertNode');
    }
  }
  /** @return {boolean} */


  get hasSavedTabIndex() {
    return this._savedTabIndex !== null;
  }
  /** @return {!Node} */


  get node() {
    this._throwIfDestroyed();

    return this._node;
  }
  /** @param {?number} tabIndex */


  set savedTabIndex(tabIndex) {
    this._throwIfDestroyed();

    this._savedTabIndex = tabIndex;
  }
  /** @return {?number} */


  get savedTabIndex() {
    this._throwIfDestroyed();

    return this._savedTabIndex;
  }
  /** Save the existing tabindex value and make the node untabbable and unfocusable */


  ensureUntabbable() {
    if (this.node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const element =
    /** @type {!Element} */
    this.node;

    if (matches.call(element, _focusableElementsString)) {
      if (
      /** @type {!HTMLElement} */
      element.tabIndex === -1 && this.hasSavedTabIndex) {
        return;
      }

      if (element.hasAttribute('tabindex')) {
        this._savedTabIndex =
        /** @type {!HTMLElement} */
        element.tabIndex;
      }

      element.setAttribute('tabindex', '-1');

      if (element.nodeType === Node.ELEMENT_NODE) {
        element.focus = function () {};

        this._overrodeFocusMethod = true;
      }
    } else if (element.hasAttribute('tabindex')) {
      this._savedTabIndex =
      /** @type {!HTMLElement} */
      element.tabIndex;
      element.removeAttribute('tabindex');
    }
  }
  /**
   * Add another inert root to this inert node's set of managing inert roots.
   * @param {!InertRoot} inertRoot
   */


  addInertRoot(inertRoot) {
    this._throwIfDestroyed();

    this._inertRoots.add(inertRoot);
  }
  /**
   * Remove the given inert root from this inert node's set of managing inert roots.
   * If the set of managing inert roots becomes empty, this node is no longer inert,
   * so the object should be destroyed.
   * @param {!InertRoot} inertRoot
   */


  removeInertRoot(inertRoot) {
    this._throwIfDestroyed();

    this._inertRoots.delete(inertRoot);

    if (this._inertRoots.size === 0) {
      this.destructor();
    }
  }

}
/**
 * InertManager is a per-document singleton object which manages all inert roots and nodes.
 *
 * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
 * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
 * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
 * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
 * is created for each such node, via the `_managedNodes` map.
 */


class InertManager {
  /**
   * @param {!Document} document
   */
  constructor(document) {
    if (!document) {
      throw new Error('Missing required argument; InertManager needs to wrap a document.');
    }
    /** @type {!Document} */


    this._document = document;
    /**
     * All managed nodes known to this InertManager. In a map to allow looking up by Node.
     * @type {!Map<!Node, !InertNode>}
     */

    this._managedNodes = new Map();
    /**
     * All inert roots known to this InertManager. In a map to allow looking up by Node.
     * @type {!Map<!Node, !InertRoot>}
     */

    this._inertRoots = new Map();
    /**
     * Observer for mutations on `document.body`.
     * @type {!MutationObserver}
     */

    this._observer = new MutationObserver(this._watchForInert.bind(this)); // Add inert style.

    addInertStyle(document.head || document.body || document.documentElement); // Wait for document to be loaded.

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
    } else {
      this._onDocumentLoaded();
    }
  }
  /**
   * Set whether the given element should be an inert root or not.
   * @param {!Element} root
   * @param {boolean} inert
   */


  setInert(root, inert) {
    if (inert) {
      if (this._inertRoots.has(root)) {
        // element is already inert
        return;
      }

      const inertRoot = new InertRoot(root, this);
      root.setAttribute('inert', '');

      this._inertRoots.set(root, inertRoot); // If not contained in the document, it must be in a shadowRoot.
      // Ensure inert styles are added there.


      if (!this._document.body.contains(root)) {
        let parent = root.parentNode;

        while (parent) {
          if (parent.nodeType === 11) {
            addInertStyle(parent);
          }

          parent = parent.parentNode;
        }
      }
    } else {
      if (!this._inertRoots.has(root)) {
        // element is already non-inert
        return;
      }

      const inertRoot = this._inertRoots.get(root);

      inertRoot.destructor();

      this._inertRoots.delete(root);

      root.removeAttribute('inert');
    }
  }
  /**
   * Get the InertRoot object corresponding to the given inert root element, if any.
   * @param {!Node} element
   * @return {!InertRoot|undefined}
   */


  getInertRoot(element) {
    return this._inertRoots.get(element);
  }
  /**
   * Register the given InertRoot as managing the given node.
   * In the case where the node has a previously existing inert root, this inert root will
   * be added to its set of inert roots.
   * @param {!Node} node
   * @param {!InertRoot} inertRoot
   * @return {!InertNode} inertNode
   */


  register(node, inertRoot) {
    let inertNode = this._managedNodes.get(node);

    if (inertNode !== undefined) {
      // node was already in an inert subtree
      inertNode.addInertRoot(inertRoot);
    } else {
      inertNode = new InertNode(node, inertRoot);
    }

    this._managedNodes.set(node, inertNode);

    return inertNode;
  }
  /**
   * De-register the given InertRoot as managing the given inert node.
   * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
   * node from the InertManager's set of managed nodes if it is destroyed.
   * If the node is not currently managed, this is essentially a no-op.
   * @param {!Node} node
   * @param {!InertRoot} inertRoot
   * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
   */


  deregister(node, inertRoot) {
    const inertNode = this._managedNodes.get(node);

    if (!inertNode) {
      return null;
    }

    inertNode.removeInertRoot(inertRoot);

    if (inertNode.destroyed) {
      this._managedNodes.delete(node);
    }

    return inertNode;
  }
  /**
   * Callback used when document has finished loading.
   */


  _onDocumentLoaded() {
    // Find all inert roots in document and make them actually inert.
    const inertElements = slice.call(this._document.querySelectorAll('[inert]'));
    inertElements.forEach(function (inertElement) {
      this.setInert(inertElement, true);
    }, this); // Comment this out to use programmatic API only.

    this._observer.observe(this._document.body, {
      attributes: true,
      subtree: true,
      childList: true
    });
  }
  /**
   * Callback used when mutation observer detects attribute changes.
   * @param {!Array<!MutationRecord>} records
   * @param {!MutationObserver} self
   */


  _watchForInert(records, self) {
    const _this = this;

    records.forEach(function (record) {
      switch (record.type) {
        case 'childList':
          slice.call(record.addedNodes).forEach(function (node) {
            if (node.nodeType !== Node.ELEMENT_NODE) {
              return;
            }

            const inertElements = slice.call(node.querySelectorAll('[inert]'));

            if (matches.call(node, '[inert]')) {
              inertElements.unshift(node);
            }

            inertElements.forEach(function (inertElement) {
              this.setInert(inertElement, true);
            }, _this);
          }, _this);
          break;

        case 'attributes':
          if (record.attributeName !== 'inert') {
            return;
          }

          const target =
          /** @type {!Element} */
          record.target;
          const inert = target.hasAttribute('inert');

          _this.setInert(target, inert);

          break;
      }
    }, this);
  }

}
/**
 * Recursively walk the composed tree from |node|.
 * @param {!Node} node
 * @param {(function (!Element))=} callback Callback to be called for each element traversed,
 *     before descending into child nodes.
 * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
 */


function composedTreeWalk(node, callback, shadowRootAncestor) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    const element =
    /** @type {!Element} */
    node;

    if (callback) {
      callback(element);
    } // Descend into node:
    // If it has a ShadowRoot, ignore all child elements - these will be picked
    // up by the <content> or <shadow> elements. Descend straight into the
    // ShadowRoot.


    const shadowRoot =
    /** @type {!HTMLElement} */
    element.shadowRoot;

    if (shadowRoot) {
      composedTreeWalk(shadowRoot, callback, shadowRoot);
      return;
    } // If it is a <content> element, descend into distributed elements - these
    // are elements from outside the shadow root which are rendered inside the
    // shadow DOM.


    if (element.localName == 'content') {
      const content =
      /** @type {!HTMLContentElement} */
      element; // Verifies if ShadowDom v0 is supported.

      const distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];

      for (let i = 0; i < distributedNodes.length; i++) {
        composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
      }

      return;
    } // If it is a <slot> element, descend into assigned nodes - these
    // are elements from outside the shadow root which are rendered inside the
    // shadow DOM.


    if (element.localName == 'slot') {
      const slot =
      /** @type {!HTMLSlotElement} */
      element; // Verify if ShadowDom v1 is supported.

      const distributedNodes = slot.assignedNodes ? slot.assignedNodes({
        flatten: true
      }) : [];

      for (let i = 0; i < distributedNodes.length; i++) {
        composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
      }

      return;
    }
  } // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
  // element, nor a <shadow> element recurse normally.


  let child = node.firstChild;

  while (child != null) {
    composedTreeWalk(child, callback, shadowRootAncestor);
    child = child.nextSibling;
  }
}
/**
 * Adds a style element to the node containing the inert specific styles
 * @param {!Node} node
 */


function addInertStyle(node) {
  if (node.querySelector('style#inert-style')) {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('id', 'inert-style');
  style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  user-select: none;\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '}\n';
  node.appendChild(style);
}
/** @type {!InertManager} */


const inertManager = new InertManager(document);

if (!Element.prototype.hasOwnProperty('inert')) {
  Object.defineProperty(Element.prototype, 'inert', {
    enumerable: true,

    /** @this {!Element} */
    get: function () {
      return this.hasAttribute('inert');
    },

    /** @this {!Element} */
    set: function (inert) {
      inertManager.setInert(this, inert);
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35hZGQtdXNlci1kaWFsb2d+ZGV2aWNlLWF1dG9tYXRpb24tZGlhbG9nfmRpYWxvZy1tcXR0LWRldmljZS1kZWJ1Zy1pbmZvfmRpYWxvZy16aGEtZGV2aWNlLXppZ342MWQ3MmFmMy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2ZvdW5kYXRpb24udHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtZGlhbG9nLWJhc2UudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtZGlhbG9nLWNzcy50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ibG9ja2luZy1lbGVtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ljZy1pbmVydC9zcmMvaW5lcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQ0xPU0lORzogJ21kYy1kaWFsb2ctLWNsb3NpbmcnLFxuICAgIE9QRU46ICdtZGMtZGlhbG9nLS1vcGVuJyxcbiAgICBPUEVOSU5HOiAnbWRjLWRpYWxvZy0tb3BlbmluZycsXG4gICAgU0NST0xMQUJMRTogJ21kYy1kaWFsb2ctLXNjcm9sbGFibGUnLFxuICAgIFNDUk9MTF9MT0NLOiAnbWRjLWRpYWxvZy1zY3JvbGwtbG9jaycsXG4gICAgU1RBQ0tFRDogJ21kYy1kaWFsb2ctLXN0YWNrZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBBQ1RJT05fQVRUUklCVVRFOiAnZGF0YS1tZGMtZGlhbG9nLWFjdGlvbicsXG4gICAgQlVUVE9OX0RFRkFVTFRfQVRUUklCVVRFOiAnZGF0YS1tZGMtZGlhbG9nLWJ1dHRvbi1kZWZhdWx0JyxcbiAgICBCVVRUT05fU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fYnV0dG9uJyxcbiAgICBDTE9TRURfRVZFTlQ6ICdNRENEaWFsb2c6Y2xvc2VkJyxcbiAgICBDTE9TRV9BQ1RJT046ICdjbG9zZScsXG4gICAgQ0xPU0lOR19FVkVOVDogJ01EQ0RpYWxvZzpjbG9zaW5nJyxcbiAgICBDT05UQUlORVJfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fY29udGFpbmVyJyxcbiAgICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2NvbnRlbnQnLFxuICAgIERFU1RST1lfQUNUSU9OOiAnZGVzdHJveScsXG4gICAgSU5JVElBTF9GT0NVU19BVFRSSUJVVEU6ICdkYXRhLW1kYy1kaWFsb2ctaW5pdGlhbC1mb2N1cycsXG4gICAgT1BFTkVEX0VWRU5UOiAnTURDRGlhbG9nOm9wZW5lZCcsXG4gICAgT1BFTklOR19FVkVOVDogJ01EQ0RpYWxvZzpvcGVuaW5nJyxcbiAgICBTQ1JJTV9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19zY3JpbScsXG4gICAgU1VQUFJFU1NfREVGQVVMVF9QUkVTU19TRUxFQ1RPUjogW1xuICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAnLm1kYy1tZW51IC5tZGMtbGlzdC1pdGVtJyxcbiAgICBdLmpvaW4oJywgJyksXG4gICAgU1VSRkFDRV9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19zdXJmYWNlJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgRElBTE9HX0FOSU1BVElPTl9DTE9TRV9USU1FX01TOiA3NSxcbiAgICBESUFMT0dfQU5JTUFUSU9OX09QRU5fVElNRV9NUzogMTUwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0RpYWxvZ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRGlhbG9nRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENEaWFsb2dGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDRGlhbG9nRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMuZXNjYXBlS2V5QWN0aW9uXyA9IHN0cmluZ3MuQ0xPU0VfQUNUSU9OO1xuICAgICAgICBfdGhpcy5zY3JpbUNsaWNrQWN0aW9uXyA9IHN0cmluZ3MuQ0xPU0VfQUNUSU9OO1xuICAgICAgICBfdGhpcy5hdXRvU3RhY2tCdXR0b25zXyA9IHRydWU7XG4gICAgICAgIF90aGlzLmFyZUJ1dHRvbnNTdGFja2VkXyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaWFsb2dGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRGlhbG9nRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0RpYWxvZ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaWFsb2dGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZEJvZHlDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYXJlQnV0dG9uc1N0YWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGNsaWNrRGVmYXVsdEJ1dHRvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgZ2V0QWN0aW9uRnJvbUV2ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiAnJzsgfSxcbiAgICAgICAgICAgICAgICBnZXRJbml0aWFsRm9jdXNFbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNDb250ZW50U2Nyb2xsYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2xvc2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2xvc2luZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeU9wZW5lZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeU9wZW5pbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWxlYXNlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVCb2R5Q2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJldmVyc2VCdXR0b25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdHJhcEZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF1dG9TdGFja0J1dHRvbnMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW5fKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKHN0cmluZ3MuREVTVFJPWV9BQ1RJT04pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvblRpbWVyXykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbmluZygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgICAgIC8vIFdhaXQgYSBmcmFtZSBvbmNlIGRpc3BsYXkgaXMgbm8gbG9uZ2VyIFwibm9uZVwiLCB0byBlc3RhYmxpc2ggYmFzaXMgZm9yIGFuaW1hdGlvblxuICAgICAgICB0aGlzLnJ1bk5leHRBbmltYXRpb25GcmFtZV8oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZEJvZHlDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9MT0NLKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dCgpO1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8udHJhcEZvY3VzKF90aGlzLmFkYXB0ZXJfLmdldEluaXRpYWxGb2N1c0VsKCkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW5lZCgpO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5ESUFMT0dfQU5JTUFUSU9OX09QRU5fVElNRV9NUyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IHZvaWQgMCkgeyBhY3Rpb24gPSAnJzsgfVxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuXykge1xuICAgICAgICAgICAgLy8gQXZvaWQgcmVkdW5kYW50IGNsb3NlIGNhbGxzIChhbmQgZXZlbnRzKSwgZS5nLiBmcm9tIGtleWRvd24gb24gZWxlbWVudHMgdGhhdCBpbmhlcmVudGx5IGVtaXQgY2xpY2tcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zaW5nKGFjdGlvbik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUJvZHlDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9MT0NLKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2VkKGFjdGlvbik7XG4gICAgICAgIH0sIG51bWJlcnMuRElBTE9HX0FOSU1BVElPTl9DTE9TRV9USU1FX01TKTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmdldEVzY2FwZUtleUFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXNjYXBlS2V5QWN0aW9uXztcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldEVzY2FwZUtleUFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5lc2NhcGVLZXlBY3Rpb25fID0gYWN0aW9uO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0U2NyaW1DbGlja0FjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NyaW1DbGlja0FjdGlvbl87XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTY3JpbUNsaWNrQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fID0gYWN0aW9uO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0QXV0b1N0YWNrQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0b1N0YWNrQnV0dG9uc187XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBdXRvU3RhY2tCdXR0b25zID0gZnVuY3Rpb24gKGF1dG9TdGFjaykge1xuICAgICAgICB0aGlzLmF1dG9TdGFja0J1dHRvbnNfID0gYXV0b1N0YWNrO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEhhbmRsZXMgY2xpY2sgb24gdGhlIGRpYWxvZyByb290IGVsZW1lbnQuICovXG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc1NjcmltID0gdGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldE1hdGNoZXMoZXZ0LnRhcmdldCwgc3RyaW5ncy5TQ1JJTV9TRUxFQ1RPUik7XG4gICAgICAgIC8vIENoZWNrIGZvciBzY3JpbSBjbGljayBmaXJzdCBzaW5jZSBpdCBkb2Vzbid0IHJlcXVpcmUgcXVlcnlpbmcgYW5jZXN0b3JzLlxuICAgICAgICBpZiAoaXNTY3JpbSAmJiB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSh0aGlzLnNjcmltQ2xpY2tBY3Rpb25fKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFkYXB0ZXJfLmdldEFjdGlvbkZyb21FdmVudChldnQpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEhhbmRsZXMga2V5ZG93biBvbiB0aGUgZGlhbG9nIHJvb3QgZWxlbWVudC4gKi9cbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNFbnRlciA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuICAgICAgICBpZiAoIWlzRW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hZGFwdGVyXy5nZXRBY3Rpb25Gcm9tRXZlbnQoZXZ0KTtcbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgLy8gQWN0aW9uIGJ1dHRvbiBjYWxsYmFjayBpcyBoYW5kbGVkIGluIGBoYW5kbGVDbGlja2AsXG4gICAgICAgICAgICAvLyBzaW5jZSBzcGFjZS9lbnRlciBrZXlkb3ducyBvbiBidXR0b25zIHRyaWdnZXIgY2xpY2sgZXZlbnRzLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0RlZmF1bHQgPSAhdGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldE1hdGNoZXMoZXZ0LnRhcmdldCwgc3RyaW5ncy5TVVBQUkVTU19ERUZBVUxUX1BSRVNTX1NFTEVDVE9SKTtcbiAgICAgICAgaWYgKGlzRW50ZXIgJiYgaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsaWNrRGVmYXVsdEJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogSGFuZGxlcyBrZXlkb3duIG9uIHRoZSBkb2N1bWVudC4gKi9cbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVEb2N1bWVudEtleWRvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc0VzY2FwZSA9IGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgaWYgKGlzRXNjYXBlICYmIHRoaXMuZXNjYXBlS2V5QWN0aW9uXyAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodGhpcy5lc2NhcGVLZXlBY3Rpb25fKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0SW50ZXJuYWxfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvU3RhY2tCdXR0b25zXykge1xuICAgICAgICAgICAgdGhpcy5kZXRlY3RTdGFja2VkQnV0dG9uc18oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRldGVjdFNjcm9sbGFibGVDb250ZW50XygpO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUnVucyB0aGUgZ2l2ZW4gbG9naWMgb24gdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lLCB1c2luZyBzZXRUaW1lb3V0IHRvIGZhY3RvciBpbiBGaXJlZm94IHJlZmxvdyBiZWhhdmlvci5cbiAgICAgKi9cbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5OZXh0QW5pbWF0aW9uRnJhbWVfID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuZGV0ZWN0U3RhY2tlZEJ1dHRvbnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGNsYXNzIGZpcnN0IHRvIGxldCB1cyBtZWFzdXJlIHRoZSBidXR0b25zJyBuYXR1cmFsIHBvc2l0aW9ucy5cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpO1xuICAgICAgICB2YXIgYXJlQnV0dG9uc1N0YWNrZWQgPSB0aGlzLmFkYXB0ZXJfLmFyZUJ1dHRvbnNTdGFja2VkKCk7XG4gICAgICAgIGlmIChhcmVCdXR0b25zU3RhY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmVCdXR0b25zU3RhY2tlZCAhPT0gdGhpcy5hcmVCdXR0b25zU3RhY2tlZF8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmV2ZXJzZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuYXJlQnV0dG9uc1N0YWNrZWRfID0gYXJlQnV0dG9uc1N0YWNrZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRldGVjdFNjcm9sbGFibGVDb250ZW50XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjbGFzcyBmaXJzdCB0byBsZXQgdXMgbWVhc3VyZSB0aGUgbmF0dXJhbCBoZWlnaHQgb2YgdGhlIGNvbnRlbnQuXG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExBQkxFKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNDb250ZW50U2Nyb2xsYWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuU0NST0xMQUJMRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENEaWFsb2dGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENEaWFsb2dGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRGlhbG9nRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0ICdibG9ja2luZy1lbGVtZW50cyc7XG5pbXBvcnQgJ3dpY2ctaW5lcnQnO1xuXG5pbXBvcnQge01EQ0RpYWxvZ0FkYXB0ZXJ9IGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvYWRhcHRlci5qcyc7XG5pbXBvcnQge2Nzc0NsYXNzZXN9IGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvY29uc3RhbnRzLmpzJztcbmltcG9ydCBNRENEaWFsb2dGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbi5qcyc7XG5pbXBvcnQge2FwcGx5UGFzc2l2ZX0gZnJvbSAnQG1hdGVyaWFsL2RvbS9ldmVudHMnO1xuaW1wb3J0IHtjbG9zZXN0LCBtYXRjaGVzfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7YWRkSGFzUmVtb3ZlQ2xhc3MsIEJhc2VFbGVtZW50LCBvYnNlcnZlcn0gZnJvbSAnQG1hdGVyaWFsL213Yy1iYXNlL2Jhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQge0RvY3VtZW50V2l0aEJsb2NraW5nRWxlbWVudHN9IGZyb20gJ2Jsb2NraW5nLWVsZW1lbnRzJztcbmltcG9ydCB7aHRtbCwgcHJvcGVydHksIHF1ZXJ5fSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQge2NsYXNzTWFwfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCB7TURDRGlhbG9nQ2xvc2VFdmVudERldGFpbH0gZnJvbSAnQG1hdGVyaWFsL2RpYWxvZy90eXBlcyc7XG5cbmNvbnN0IGJsb2NraW5nRWxlbWVudHMgPVxuICAgIChkb2N1bWVudCBhcyBEb2N1bWVudFdpdGhCbG9ja2luZ0VsZW1lbnRzKS4kYmxvY2tpbmdFbGVtZW50cztcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0Jhc2UgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gIEBxdWVyeSgnLm1kYy1kaWFsb2cnKSBwcm90ZWN0ZWQgbWRjUm9vdCE6IEhUTUxEaXZFbGVtZW50O1xuXG4gIC8vIF9hY3Rpb25JdGVtc1Nsb3Qgc2hvdWxkIGhhdmUgdHlwZSBIVE1MU2xvdEVsZW1lbnQsIGJ1dCB3aGVuIFR5cGVTY3JpcHQnc1xuICAvLyBlbWl0RGVjb3JhdG9yTWV0YWRhdGEgaXMgZW5hYmxlZCwgdGhlIEhUTUxTbG90RWxlbWVudCBjb25zdHJ1Y3RvciB3aWxsXG4gIC8vIGJlIGVtaXR0ZWQgaW50byB0aGUgcnVudGltZSwgd2hpY2ggd2lsbCBjYXVzZSBhbiBcIkhUTUxTbG90RWxlbWVudCBpc1xuICAvLyB1bmRlZmluZWRcIiBlcnJvciBpbiBicm93c2VycyB0aGF0IGRvbid0IGRlZmluZSBpdCAoZS5nLiBFZGdlIGFuZCBJRTExKS5cbiAgQHF1ZXJ5KCdzbG90W25hbWU9XCJwcmltYXJ5QWN0aW9uXCJdJykgcHJvdGVjdGVkIHByaW1hcnlTbG90ITogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gX2FjdGlvbkl0ZW1zU2xvdCBzaG91bGQgaGF2ZSB0eXBlIEhUTUxTbG90RWxlbWVudCwgYnV0IHdoZW4gVHlwZVNjcmlwdCdzXG4gIC8vIGVtaXREZWNvcmF0b3JNZXRhZGF0YSBpcyBlbmFibGVkLCB0aGUgSFRNTFNsb3RFbGVtZW50IGNvbnN0cnVjdG9yIHdpbGxcbiAgLy8gYmUgZW1pdHRlZCBpbnRvIHRoZSBydW50aW1lLCB3aGljaCB3aWxsIGNhdXNlIGFuIFwiSFRNTFNsb3RFbGVtZW50IGlzXG4gIC8vIHVuZGVmaW5lZFwiIGVycm9yIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3QgZGVmaW5lIGl0IChlLmcuIEVkZ2UgYW5kIElFMTEpLlxuICBAcXVlcnkoJ3Nsb3RbbmFtZT1cInNlY29uZGFyeUFjdGlvblwiXScpIHByb3RlY3RlZCBzZWNvbmRhcnlTbG90ITogSFRNTEVsZW1lbnQ7XG5cbiAgQHF1ZXJ5KCcjY29udGVudFNsb3QnKSBwcm90ZWN0ZWQgY29udGVudFNsb3QhOiBIVE1MRWxlbWVudDtcblxuICBAcXVlcnkoJy5tZGMtZGlhbG9nX19jb250ZW50JykgcHJvdGVjdGVkIGNvbnRlbnRFbGVtZW50ITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgQHF1ZXJ5KCcubWRjLWNvbnRhaW5lcicpIHByb3RlY3RlZCBjb25hdGluZXJFbGVtZW50ITogSFRNTERpdkVsZW1lbnQ7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgaGlkZUFjdGlvbnMgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KVxuICBAb2JzZXJ2ZXIoZnVuY3Rpb24odGhpczogRGlhbG9nQmFzZSkge1xuICAgIHRoaXMuZm9yY2VMYXlvdXQoKTtcbiAgfSlcbiAgc3RhY2tlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogU3RyaW5nfSkgaGVhZGluZyA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogU3RyaW5nfSlcbiAgQG9ic2VydmVyKGZ1bmN0aW9uKHRoaXM6IERpYWxvZ0Jhc2UsIG5ld0FjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLnNldFNjcmltQ2xpY2tBY3Rpb24obmV3QWN0aW9uKTtcbiAgfSlcbiAgc2NyaW1DbGlja0FjdGlvbiA9ICdjbG9zZSc7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBTdHJpbmd9KVxuICBAb2JzZXJ2ZXIoZnVuY3Rpb24odGhpczogRGlhbG9nQmFzZSwgbmV3QWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uc2V0RXNjYXBlS2V5QWN0aW9uKG5ld0FjdGlvbik7XG4gIH0pXG4gIGVzY2FwZUtleUFjdGlvbiA9ICdjbG9zZSc7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlfSlcbiAgQG9ic2VydmVyKGZ1bmN0aW9uKHRoaXM6IERpYWxvZ0Jhc2UsIGlzT3BlbjogYm9vbGVhbikge1xuICAgIC8vIENoZWNrIGlzQ29ubmVjdGVkIGJlY2F1c2Ugd2UgY291bGQgaGF2ZSBiZWVuIGRpc2Nvbm5lY3RlZCBiZWZvcmUgZmlyc3RcbiAgICAvLyB1cGRhdGUuIElmIHdlJ3JlIG5vdyBjbG9zZWQsIHRoZW4gd2Ugc2hvdWxkbid0IHN0YXJ0IHRoZSBNREMgZm91bmRhdGlvblxuICAgIC8vIG9wZW5pbmcgYW5pbWF0aW9uLiBJZiB3ZSdyZSBub3cgY2xvc2VkLCB0aGVuIHdlJ3ZlIGFscmVhZHkgY2xvc2VkIHRoZVxuICAgIC8vIGZvdW5kYXRpb24gaW4gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gICAgaWYgKHRoaXMubWRjRm91bmRhdGlvbiAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLmNsb3NlKHRoaXMuY3VycmVudEFjdGlvbiB8fCB0aGlzLmRlZmF1bHRBY3Rpb24pO1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9KVxuICBvcGVuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgZGVmYXVsdEFjdGlvbiA9ICdjbG9zZSc7XG4gIEBwcm9wZXJ0eSgpIGFjdGlvbkF0dHJpYnV0ZSA9ICdkaWFsb2dBY3Rpb24nO1xuICBAcHJvcGVydHkoKSBpbml0aWFsRm9jdXNBdHRyaWJ1dGUgPSAnZGlhbG9nSW5pdGlhbEZvY3VzJztcblxuICBwcml2YXRlIGNsb3NpbmdEdWVUb0Rpc2Nvbm5lY3Q/OiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCBnZXQgcHJpbWFyeUJ1dHRvbigpOiBIVE1MRWxlbWVudHxudWxsIHtcbiAgICBsZXQgYXNzaWduZWROb2RlcyA9ICh0aGlzLnByaW1hcnlTbG90IGFzIEhUTUxTbG90RWxlbWVudCkuYXNzaWduZWROb2RlcygpO1xuICAgIGFzc2lnbmVkTm9kZXMgPSBhc3NpZ25lZE5vZGVzLmZpbHRlcigobm9kZSkgPT4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICBjb25zdCBidXR0b24gPSBhc3NpZ25lZE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIHJldHVybiBidXR0b24gPyBidXR0b24gOiBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGN1cnJlbnRBY3Rpb246IHN0cmluZ3x1bmRlZmluZWQ7XG4gIHByb3RlY3RlZCBtZGNGb3VuZGF0aW9uQ2xhc3MgPSBNRENEaWFsb2dGb3VuZGF0aW9uO1xuICBwcm90ZWN0ZWQgbWRjRm91bmRhdGlvbiE6IE1EQ0RpYWxvZ0ZvdW5kYXRpb247XG4gIHByb3RlY3RlZCBib3VuZExheW91dDogKCgpID0+IHZvaWQpfG51bGwgPSBudWxsO1xuICBwcm90ZWN0ZWQgYm91bmRIYW5kbGVDbGljazogKChldjogTW91c2VFdmVudCkgPT4gdm9pZCl8bnVsbCA9IG51bGw7XG4gIHByb3RlY3RlZCBib3VuZEhhbmRsZUtleWRvd246ICgoZXY6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQpfG51bGwgPSBudWxsO1xuICBwcm90ZWN0ZWQgYm91bmRIYW5kbGVEb2N1bWVudEtleWRvd246XG4gICAgICAoKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkKXxudWxsID0gbnVsbDtcblxuICBwcm90ZWN0ZWQgZW1pdE5vdGlmaWNhdGlvbihuYW1lOiBzdHJpbmcsIGFjdGlvbj86IHN0cmluZykge1xuICAgIGNvbnN0IGluaXQ6IEN1c3RvbUV2ZW50SW5pdCA9IHtkZXRhaWw6IGFjdGlvbiA/IHthY3Rpb259IDoge319O1xuICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIGluaXQpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldik7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SW5pdGlhbEZvY3VzRWwoKTogSFRNTEVsZW1lbnR8bnVsbCB7XG4gICAgY29uc3QgaW5pdEZvY3VzU2VsZWN0b3IgPSBgWyR7dGhpcy5pbml0aWFsRm9jdXNBdHRyaWJ1dGV9XWA7XG5cbiAgICAvLyBvbmx5IHNlYXJjaCBsaWdodCBET00uIFRoaXMgdHlwaWNhbGx5IGhhbmRsZXMgYWxsIHRoZSBjYXNlc1xuICAgIGNvbnN0IGxpZ2h0RG9tUXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoaW5pdEZvY3VzU2VsZWN0b3IpO1xuXG4gICAgaWYgKGxpZ2h0RG9tUXMpIHtcbiAgICAgIHJldHVybiBsaWdodERvbVFzIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cblxuICAgIC8vIGlmIG5vdCBpbiBsaWdodCBkb20sIHNlYXJjaCBlYWNoIGZsYXR0ZW5lZCBkaXN0cmlidXRlZCBub2RlLlxuICAgIGNvbnN0IHByaW1hcnlTbG90ID0gdGhpcy5wcmltYXJ5U2xvdCBhcyBIVE1MU2xvdEVsZW1lbnQ7XG4gICAgY29uc3QgcHJpbWFyeU5vZGVzID0gcHJpbWFyeVNsb3QuYXNzaWduZWROb2Rlcyh7ZmxhdHRlbjogdHJ1ZX0pO1xuICAgIGNvbnN0IHByaW1hcnlGb2N1c0VsZW1lbnQgPSB0aGlzLnNlYXJjaE5vZGVUcmVlc0ZvckF0dHJpYnV0ZShcbiAgICAgICAgcHJpbWFyeU5vZGVzLCB0aGlzLmluaXRpYWxGb2N1c0F0dHJpYnV0ZSk7XG4gICAgaWYgKHByaW1hcnlGb2N1c0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBwcmltYXJ5Rm9jdXNFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNlY29uZGFyeVNsb3QgPSB0aGlzLnNlY29uZGFyeVNsb3QgYXMgSFRNTFNsb3RFbGVtZW50O1xuICAgIGNvbnN0IHNlY29uZGFyeU5vZGVzID0gc2Vjb25kYXJ5U2xvdC5hc3NpZ25lZE5vZGVzKHtmbGF0dGVuOiB0cnVlfSk7XG4gICAgY29uc3Qgc2Vjb25kYXJ5Rm9jdXNFbGVtZW50ID0gdGhpcy5zZWFyY2hOb2RlVHJlZXNGb3JBdHRyaWJ1dGUoXG4gICAgICAgIHNlY29uZGFyeU5vZGVzLCB0aGlzLmluaXRpYWxGb2N1c0F0dHJpYnV0ZSk7XG4gICAgaWYgKHNlY29uZGFyeUZvY3VzRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHNlY29uZGFyeUZvY3VzRWxlbWVudDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNvbnRlbnRTbG90ID0gdGhpcy5jb250ZW50U2xvdCBhcyBIVE1MU2xvdEVsZW1lbnQ7XG4gICAgY29uc3QgY29udGVudE5vZGVzID0gY29udGVudFNsb3QuYXNzaWduZWROb2Rlcyh7ZmxhdHRlbjogdHJ1ZX0pO1xuICAgIGNvbnN0IGluaXRGb2N1c0VsZW1lbnQgPSB0aGlzLnNlYXJjaE5vZGVUcmVlc0ZvckF0dHJpYnV0ZShcbiAgICAgICAgY29udGVudE5vZGVzLCB0aGlzLmluaXRpYWxGb2N1c0F0dHJpYnV0ZSk7XG4gICAgcmV0dXJuIGluaXRGb2N1c0VsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNlYXJjaE5vZGVUcmVlc0ZvckF0dHJpYnV0ZShub2RlczogTm9kZVtdLCBhdHRyaWJ1dGU6IHN0cmluZyk6XG4gICAgICBIVE1MRWxlbWVudHxudWxsIHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKGBbJHthdHRyaWJ1dGV9XWApO1xuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbiBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUFkYXB0ZXIoKTogTURDRGlhbG9nQWRhcHRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFkZEhhc1JlbW92ZUNsYXNzKHRoaXMubWRjUm9vdCksXG4gICAgICBhZGRCb2R5Q2xhc3M6ICgpID0+IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJyxcbiAgICAgIHJlbW92ZUJvZHlDbGFzczogKCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnLFxuICAgICAgYXJlQnV0dG9uc1N0YWNrZWQ6ICgpID0+IHRoaXMuc3RhY2tlZCxcbiAgICAgIGNsaWNrRGVmYXVsdEJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmltYXJ5ID0gdGhpcy5wcmltYXJ5QnV0dG9uO1xuICAgICAgICBpZiAocHJpbWFyeSkge1xuICAgICAgICAgIHByaW1hcnkuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlczogKHRhcmdldCwgc2VsZWN0b3IpID0+XG4gICAgICAgICAgdGFyZ2V0ID8gbWF0Y2hlcyh0YXJnZXQgYXMgRWxlbWVudCwgc2VsZWN0b3IpIDogZmFsc2UsXG4gICAgICBnZXRBY3Rpb25Gcm9tRXZlbnQ6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIWUudGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9XG4gICAgICAgICAgICBjbG9zZXN0KGUudGFyZ2V0IGFzIEVsZW1lbnQsIGBbJHt0aGlzLmFjdGlvbkF0dHJpYnV0ZX1dYCk7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGVsZW1lbnQgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUodGhpcy5hY3Rpb25BdHRyaWJ1dGUpO1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgfSxcbiAgICAgIGdldEluaXRpYWxGb2N1c0VsOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluaXRpYWxGb2N1c0VsKCk7XG4gICAgICB9LFxuICAgICAgaXNDb250ZW50U2Nyb2xsYWJsZTogKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuY29udGVudEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiBlbCA/IGVsLnNjcm9sbEhlaWdodCA+IGVsLm9mZnNldEhlaWdodCA6IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3NlZDogKGFjdGlvbikgPT4gdGhpcy5lbWl0Tm90aWZpY2F0aW9uKCdjbG9zZWQnLCBhY3Rpb24pLFxuICAgICAgbm90aWZ5Q2xvc2luZzogKGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2luZ0R1ZVRvRGlzY29ubmVjdCkge1xuICAgICAgICAgIC8vIERvbid0IHNldCBvdXIgb3BlbiBzdGF0ZSB0byBjbG9zZWQganVzdCBiZWNhdXNlIHdlIHdlcmVcbiAgICAgICAgICAvLyBkaXNjb25uZWN0ZWQuIFRoYXQgd2F5IGlmIHdlIGdldCByZWNvbm5lY3RlZCwgd2UnbGwga25vdyB0b1xuICAgICAgICAgIC8vIHJlLW9wZW4uXG4gICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0Tm90aWZpY2F0aW9uKCdjbG9zaW5nJywgYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBub3RpZnlPcGVuZWQ6ICgpID0+IHRoaXMuZW1pdE5vdGlmaWNhdGlvbignb3BlbmVkJyksXG4gICAgICBub3RpZnlPcGVuaW5nOiAoKSA9PiB7XG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdE5vdGlmaWNhdGlvbignb3BlbmluZycpO1xuICAgICAgfSxcbiAgICAgIHJldmVyc2VCdXR0b25zOiAoKSA9PiB7IC8qIGhhbmRsZWQgYnkgcmVuZGVyIGZuICovIH0sXG4gICAgICByZWxlYXNlRm9jdXM6ICgpID0+IHtcbiAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5yZW1vdmUodGhpcyk7XG4gICAgICB9LFxuICAgICAgdHJhcEZvY3VzOiAoZWwpID0+IHtcbiAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5wdXNoKHRoaXMpO1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICBbY3NzQ2xhc3Nlcy5TVEFDS0VEXTogdGhpcy5zdGFja2VkLFxuICAgIH07XG5cbiAgICBsZXQgaGVhZGluZyA9IGh0bWxgYDtcblxuICAgIGlmICh0aGlzLmhlYWRpbmcpIHtcbiAgICAgIGhlYWRpbmcgPSBodG1sYFxuICAgICAgICA8aDIgaWQ9XCJ0aXRsZVwiIGNsYXNzPVwibWRjLWRpYWxvZ19fdGl0bGVcIj4ke3RoaXMuaGVhZGluZ308L2gyPmA7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uc0NsYXNzZXMgPSB7XG4gICAgICAnbWRjLWRpYWxvZ19fYWN0aW9ucyc6ICF0aGlzLmhpZGVBY3Rpb25zLFxuICAgIH07XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwibWRjLWRpYWxvZyAke2NsYXNzTWFwKGNsYXNzZXMpfVwiXG4gICAgICAgIHJvbGU9XCJhbGVydGRpYWxvZ1wiXG4gICAgICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVcIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kaWFsb2dfX2NvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWRpYWxvZ19fc3VyZmFjZVwiPlxuICAgICAgICAgICR7aGVhZGluZ31cbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiIGNsYXNzPVwibWRjLWRpYWxvZ19fY29udGVudFwiPlxuICAgICAgICAgICAgPHNsb3QgaWQ9XCJjb250ZW50U2xvdFwiPjwvc2xvdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Zm9vdGVyXG4gICAgICAgICAgICAgIGlkPVwiYWN0aW9uc1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcChhY3Rpb25zQ2xhc3Nlcyl9XCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cInNlY29uZGFyeUFjdGlvblwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJwcmltYXJ5QWN0aW9uXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kaWFsb2dfX3NjcmltXCI+PC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uc2V0QXV0b1N0YWNrQnV0dG9ucyh0cnVlKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMub3BlbiAmJiB0aGlzLm1kY0ZvdW5kYXRpb24gJiYgIXRoaXMubWRjRm91bmRhdGlvbi5pc09wZW4oKSkge1xuICAgICAgLy8gV2UgcHJvYmFibHkgZ290IGRpc2Nvbm5lY3RlZCB3aGlsZSB3ZSB3ZXJlIHN0aWxsIG9wZW4uIFJlLW9wZW4sXG4gICAgICAvLyBtYXRjaGluZyB0aGUgYmVoYXZpb3Igb2YgbmF0aXZlIDxkaWFsb2c+LlxuICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLm9wZW4gJiYgdGhpcy5tZGNGb3VuZGF0aW9uKSB7XG4gICAgICAvLyBJZiB0aGlzIGRpYWxvZyBpcyBvcGVuZWQgYW5kIHRoZW4gZGlzY29ubmVjdGVkLCB3ZSB3YW50IHRvIGNsb3NlXG4gICAgICAvLyB0aGUgZm91bmRhdGlvbiwgc28gdGhhdCAxKSBhbnkgcGVuZGluZyB0aW1lcnMgYXJlIGNhbmNlbGxlZFxuICAgICAgLy8gKGluIHBhcnRpY3VsYXIgZm9yIHRyYXBGb2N1cyksIGFuZCAyKSBpZiB3ZSByZWNvbm5lY3QsIHdlIGNhbiBvcGVuXG4gICAgICAvLyB0aGUgZm91bmRhdGlvbiBhZ2FpbiB0byByZXRyaWdnZXIgYW5pbWF0aW9ucyBhbmQgZm9jdXMuXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmNsb3NpbmdEdWVUb0Rpc2Nvbm5lY3QgPSB0cnVlO1xuICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLmNsb3NlKHRoaXMuY3VycmVudEFjdGlvbiB8fCB0aGlzLmRlZmF1bHRBY3Rpb24pO1xuICAgICAgdGhpcy5jbG9zaW5nRHVlVG9EaXNjb25uZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIFdoZW4gd2UgY2xvc2Ugbm9ybWFsbHksIHRoZSByZWxlYXNlRm9jdXMgY2FsbGJhY2sgaGFuZGxlcyByZW1vdmluZ1xuICAgICAgLy8gb3Vyc2VsdmVzIGZyb20gdGhlIGJsb2NraW5nIGVsZW1lbnRzIHN0YWNrLiBIb3dldmVyLCB0aGF0IGNhbGxiYWNrXG4gICAgICAvLyBoYXBwZW5zIG9uIGEgZGVsYXksIGFuZCB3aGVuIHdlIGFyZSBjbG9zaW5nIGR1ZSB0byBhIGRpc2Nvbm5lY3Qgd2VcbiAgICAgIC8vIG5lZWQgdG8gcmVtb3ZlIG91cnNlbHZlcyBiZWZvcmUgdGhlIGJsb2NraW5nIGVsZW1lbnQgcG9seWZpbGwnc1xuICAgICAgLy8gbXV0YXRpb24gb2JzZXJ2ZXIgbm90aWNlcyBhbmQgbG9ncyBhIHdhcm5pbmcsIHNpbmNlIGl0J3Mgbm90IHZhbGlkIHRvXG4gICAgICAvLyBiZSBpbiB0aGUgYmxvY2tpbmcgZWxlbWVudHMgc3RhY2sgd2hpbGUgZGlzY29ubmVjdGVkLlxuICAgICAgYmxvY2tpbmdFbGVtZW50cy5yZW1vdmUodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VMYXlvdXQoKSB7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmxheW91dCgpO1xuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgY29uc3QgaW5pdGlhbEZvY3VzRWwgPSB0aGlzLmdldEluaXRpYWxGb2N1c0VsKCk7XG4gICAgaW5pdGlhbEZvY3VzRWwgJiYgaW5pdGlhbEZvY3VzRWwuZm9jdXMoKTtcbiAgfVxuXG4gIGJsdXIoKSB7XG4gICAgaWYgKCF0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVFbCA9IHRoaXMuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChhY3RpdmVFbCkge1xuICAgICAgaWYgKGFjdGl2ZUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgYWN0aXZlRWwuYmx1cigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290Tm9kZSgpO1xuICAgICAgY29uc3QgYWN0aXZlRWwgPSByb290IGluc3RhbmNlb2YgRG9jdW1lbnQgPyByb290LmFjdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgICAgaWYgKGFjdGl2ZUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgYWN0aXZlRWwuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmJvdW5kSGFuZGxlQ2xpY2sgPSB0aGlzLm1kY0ZvdW5kYXRpb24uaGFuZGxlQ2xpY2suYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uKSBhcyBFdmVudExpc3RlbmVyO1xuICAgIHRoaXMuYm91bmRMYXlvdXQgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMubWRjRm91bmRhdGlvbi5sYXlvdXQuYmluZCh0aGlzLm1kY0ZvdW5kYXRpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5ib3VuZEhhbmRsZUtleWRvd24gPSB0aGlzLm1kY0ZvdW5kYXRpb24uaGFuZGxlS2V5ZG93bi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWRjRm91bmRhdGlvbikgYXMgRXZlbnRMaXN0ZW5lcjtcbiAgICB0aGlzLmJvdW5kSGFuZGxlRG9jdW1lbnRLZXlkb3duID1cbiAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLmhhbmRsZURvY3VtZW50S2V5ZG93bi5iaW5kKHRoaXMubWRjRm91bmRhdGlvbikgYXNcbiAgICAgICAgRXZlbnRMaXN0ZW5lcjtcblxuICAgIHRoaXMubWRjUm9vdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRIYW5kbGVDbGljayk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuYm91bmRMYXlvdXQsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5ib3VuZExheW91dCwgYXBwbHlQYXNzaXZlKCkpO1xuICAgIHRoaXMubWRjUm9vdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAna2V5ZG93bicsIHRoaXMuYm91bmRIYW5kbGVLZXlkb3duLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2tleWRvd24nLCB0aGlzLmJvdW5kSGFuZGxlRG9jdW1lbnRLZXlkb3duLCBhcHBseVBhc3NpdmUoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuYm91bmRIYW5kbGVDbGljaykge1xuICAgICAgdGhpcy5tZGNSb290LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZExheW91dCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuYm91bmRMYXlvdXQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5ib3VuZExheW91dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm91bmRIYW5kbGVLZXlkb3duKSB7XG4gICAgICB0aGlzLm1kY1Jvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRIYW5kbGVLZXlkb3duKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZEhhbmRsZURvY3VtZW50S2V5ZG93bikge1xuICAgICAgdGhpcy5tZGNSb290LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2tleWRvd24nLCB0aGlzLmJvdW5kSGFuZGxlRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjc3N9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gY3NzYC5tZGMtZWxldmF0aW9uLW92ZXJsYXl7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czppbmhlcml0O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWRjLWRpYWxvZywubWRjLWRpYWxvZ19fc2NyaW17cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5tZGMtZGlhbG9ne2Rpc3BsYXk6bm9uZTt6LWluZGV4Ojd9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXN1cmZhY2UsICNmZmYpfS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zY3JpbXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjMyKX0ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tZGMtZGlhbG9nLm1kYy1kaWFsb2ctLXNjcm9sbGFibGUgLm1kYy1kaWFsb2dfX3RpdGxlLC5tZGMtZGlhbG9nLm1kYy1kaWFsb2ctLXNjcm9sbGFibGUgLm1kYy1kaWFsb2dfX2FjdGlvbnN7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZXttaW4td2lkdGg6MjgwcHh9QG1lZGlhKG1heC13aWR0aDogNTkycHgpey5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21heC13aWR0aDpjYWxjKDEwMHZ3IC0gMzJweCl9fUBtZWRpYShtaW4td2lkdGg6IDU5MnB4KXsubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZXttYXgtd2lkdGg6NTYwcHh9fS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21heC1oZWlnaHQ6Y2FsYygxMDAlIC0gMzJweCl9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7Ym9yZGVyLXJhZGl1czo0cHh9Lm1kYy1kaWFsb2dfX3Njcmlte29wYWNpdHk6MDt6LWluZGV4Oi0xfS5tZGMtZGlhbG9nX19jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0OjEwMCU7dHJhbnNmb3JtOnNjYWxlKDAuOCk7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1kYy1kaWFsb2dfX3N1cmZhY2V7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNoYWRvdzowcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMik7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWdyb3c6MDtmbGV4LXNocmluazowO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6YXV0bztvdmVyZmxvdy15OmF1dG99Lm1kYy1kaWFsb2dfX3N1cmZhY2UgLm1kYy1lbGV2YXRpb24tb3ZlcmxheXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RvcDowO2xlZnQ6MH0ubWRjLWRpYWxvZ1tkaXI9cnRsXSAubWRjLWRpYWxvZ19fc3VyZmFjZSxbZGlyPXJ0bF0gLm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7dGV4dC1hbGlnbjpyaWdodH0ubWRjLWRpYWxvZ19fdGl0bGV7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjA7bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OlJvYm90bywgc2Fucy1zZXJpZjstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6MS4yNXJlbTtsaW5lLWhlaWdodDoycmVtO2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzouMDEyNWVtO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LXNocmluazowO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW46MDtwYWRkaW5nOjAgMjRweCA5cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdHJhbnNwYXJlbnR9Lm1kYy1kaWFsb2dfX3RpdGxlOjpiZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MDtoZWlnaHQ6NDBweDtjb250ZW50OlwiXCI7dmVydGljYWwtYWxpZ246MH0ubWRjLWRpYWxvZ1tkaXI9cnRsXSAubWRjLWRpYWxvZ19fdGl0bGUsW2Rpcj1ydGxdIC5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX190aXRsZXt0ZXh0LWFsaWduOnJpZ2h0fS5tZGMtZGlhbG9nLS1zY3JvbGxhYmxlIC5tZGMtZGlhbG9nX190aXRsZXtwYWRkaW5nLWJvdHRvbToxNXB4fS5tZGMtZGlhbG9nX19jb250ZW50e2ZvbnQtZmFtaWx5OlJvYm90bywgc2Fucy1zZXJpZjstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoxLjVyZW07Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi4wMzEyNWVtO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7ZmxleC1ncm93OjE7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowO3BhZGRpbmc6MjBweCAyNHB4O292ZXJmbG93OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9Lm1kYy1kaWFsb2dfX2NvbnRlbnQ+OmZpcnN0LWNoaWxke21hcmdpbi10b3A6MH0ubWRjLWRpYWxvZ19fY29udGVudD46bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9Lm1kYy1kaWFsb2dfX3RpdGxlKy5tZGMtZGlhbG9nX19jb250ZW50e3BhZGRpbmctdG9wOjB9Lm1kYy1kaWFsb2ctLXNjcm9sbGFibGUgLm1kYy1kaWFsb2dfX2NvbnRlbnR7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH0ubWRjLWRpYWxvZ19fY29udGVudCAubWRjLWxpc3Q6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZHtwYWRkaW5nOjZweCAwIDB9Lm1kYy1kaWFsb2ctLXNjcm9sbGFibGUgLm1kYy1kaWFsb2dfX2NvbnRlbnQgLm1kYy1saXN0OmZpcnN0LWNoaWxkOmxhc3QtY2hpbGR7cGFkZGluZzowfS5tZGMtZGlhbG9nX19hY3Rpb25ze2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LXNocmluazowO2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ym94LXNpemluZzpib3JkZXItYm94O21pbi1oZWlnaHQ6NTJweDttYXJnaW46MDtwYWRkaW5nOjhweDtib3JkZXItdG9wOjFweCBzb2xpZCB0cmFuc3BhcmVudH0ubWRjLWRpYWxvZy0tc3RhY2tlZCAubWRjLWRpYWxvZ19fYWN0aW9uc3tmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1lbmR9Lm1kYy1kaWFsb2dfX2J1dHRvbnttYXJnaW4tbGVmdDo4cHg7bWFyZ2luLXJpZ2h0OjA7bWF4LXdpZHRoOjEwMCU7dGV4dC1hbGlnbjpyaWdodH1bZGlyPXJ0bF0gLm1kYy1kaWFsb2dfX2J1dHRvbiwubWRjLWRpYWxvZ19fYnV0dG9uW2Rpcj1ydGxde21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjhweH0ubWRjLWRpYWxvZ19fYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjB9W2Rpcj1ydGxdIC5tZGMtZGlhbG9nX19idXR0b246Zmlyc3QtY2hpbGQsLm1kYy1kaWFsb2dfX2J1dHRvbjpmaXJzdC1jaGlsZFtkaXI9cnRsXXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowfS5tZGMtZGlhbG9nW2Rpcj1ydGxdIC5tZGMtZGlhbG9nX19idXR0b24sW2Rpcj1ydGxdIC5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19idXR0b257dGV4dC1hbGlnbjpsZWZ0fS5tZGMtZGlhbG9nLS1zdGFja2VkIC5tZGMtZGlhbG9nX19idXR0b246bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoxMnB4fS5tZGMtZGlhbG9nLS1vcGVuLC5tZGMtZGlhbG9nLS1vcGVuaW5nLC5tZGMtZGlhbG9nLS1jbG9zaW5ne2Rpc3BsYXk6ZmxleH0ubWRjLWRpYWxvZy0tb3BlbmluZyAubWRjLWRpYWxvZ19fc2NyaW17dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLWRpYWxvZy0tb3BlbmluZyAubWRjLWRpYWxvZ19fY29udGFpbmVye3RyYW5zaXRpb246b3BhY2l0eSA3NW1zIGxpbmVhcix0cmFuc2Zvcm0gMTUwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpfS5tZGMtZGlhbG9nLS1jbG9zaW5nIC5tZGMtZGlhbG9nX19zY3JpbSwubWRjLWRpYWxvZy0tY2xvc2luZyAubWRjLWRpYWxvZ19fY29udGFpbmVye3RyYW5zaXRpb246b3BhY2l0eSA3NW1zIGxpbmVhcn0ubWRjLWRpYWxvZy0tY2xvc2luZyAubWRjLWRpYWxvZ19fY29udGFpbmVye3RyYW5zZm9ybTpzY2FsZSgxKX0ubWRjLWRpYWxvZy0tb3BlbiAubWRjLWRpYWxvZ19fc2NyaW17b3BhY2l0eToxfS5tZGMtZGlhbG9nLS1vcGVuIC5tZGMtZGlhbG9nX19jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0ubWRjLWRpYWxvZy1zY3JvbGwtbG9ja3tvdmVyZmxvdzpoaWRkZW59I2FjdGlvbnM6bm90KC5tZGMtZGlhbG9nX19hY3Rpb25zKXtkaXNwbGF5Om5vbmV9Lm1kYy1kaWFsb2dfX3N1cmZhY2V7Ym94LXNoYWRvdzp2YXIoLS1tZGMtZGlhbG9nLWJveC1zaGFkb3csIDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSl9QG1lZGlhKG1pbi13aWR0aDogNTYwcHgpey5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21heC13aWR0aDo1NjBweDttYXgtd2lkdGg6dmFyKC0tbWRjLWRpYWxvZy1tYXgtd2lkdGgsIDU2MHB4KX19Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3Njcmlte2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzIpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLWRpYWxvZy1zY3JpbS1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjMyKSl9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3RpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtjb2xvcjp2YXIoLS1tZGMtZGlhbG9nLWhlYWRpbmctaW5rLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuODcpKX0ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC42KTtjb2xvcjp2YXIoLS1tZGMtZGlhbG9nLWNvbnRlbnQtaW5rLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuNikpfS5tZGMtZGlhbG9nLm1kYy1kaWFsb2ctLXNjcm9sbGFibGUgLm1kYy1kaWFsb2dfX3RpdGxlLC5tZGMtZGlhbG9nLm1kYy1kaWFsb2ctLXNjcm9sbGFibGUgLm1kYy1kaWFsb2dfX2FjdGlvbnN7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKTtib3JkZXItY29sb3I6dmFyKC0tbWRjLWRpYWxvZy1zY3JvbGwtZGl2aWRlci1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjEyKSl9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7bWluLXdpZHRoOjI4MHB4O21pbi13aWR0aDp2YXIoLS1tZGMtZGlhbG9nLW1pbi13aWR0aCwgMjgwcHgpfS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21heC1oZWlnaHQ6dmFyKC0tbWRjLWRpYWxvZy1tYXgtaGVpZ2h0LCBjYWxjKDEwMCUgLSAzMnB4KSk7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyLXJhZGl1czp2YXIoLS1tZGMtZGlhbG9nLXNoYXBlLXJhZGl1cywgNHB4KX0jYWN0aW9ucyA6OnNsb3R0ZWQoKil7bWFyZ2luLWxlZnQ6OHB4O21hcmdpbi1yaWdodDowO21heC13aWR0aDoxMDAlO3RleHQtYWxpZ246cmlnaHR9W2Rpcj1ydGxdICNhY3Rpb25zIDo6c2xvdHRlZCgqKSwjYWN0aW9ucyA6OnNsb3R0ZWQoKilbZGlyPXJ0bF17bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6OHB4fS5tZGMtZGlhbG9nW2Rpcj1ydGxdICNhY3Rpb25zIDo6c2xvdHRlZCgqKSxbZGlyPXJ0bF0gLm1kYy1kaWFsb2cgI2FjdGlvbnMgOjpzbG90dGVkKCope3RleHQtYWxpZ246bGVmdH0ubWRjLWRpYWxvZy0tc3RhY2tlZCAjYWN0aW9uc3tmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZX0ubWRjLWRpYWxvZy0tc3RhY2tlZCAjYWN0aW9ucyAqOm5vdCg6bGFzdC1jaGlsZCkgOjpzbG90dGVkKCope2ZsZXgtYmFzaXM6MWUtOXB4O21hcmdpbi10b3A6MTJweH1gO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjdXN0b21FbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCB7RGlhbG9nQmFzZX0gZnJvbSAnLi9td2MtZGlhbG9nLWJhc2UuanMnO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSAnLi9td2MtZGlhbG9nLWNzcy5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ213Yy1kaWFsb2cnOiBEaWFsb2c7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ213Yy1kaWFsb2cnKVxuZXhwb3J0IGNsYXNzIERpYWxvZyBleHRlbmRzIERpYWxvZ0Jhc2Uge1xuICBzdGF0aWMgc3R5bGVzID0gc3R5bGU7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiLyoqXG4gKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAqL1xuXG4vLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4vKiogQHR5cGUge3R5cGVvZiBBcnJheS5wcm90b3R5cGUuc2xpY2V9ICovXG5jb25zdCBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuLyoqXG4gKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gKi9cbmNvbnN0IG1hdGNoZXMgPVxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbi8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuY29uc3QgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJlYVtocmVmXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidXR0b246bm90KFtkaXNhYmxlZF0pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWZyYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW1iZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuLyoqXG4gKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAqIGF0dHJpYnV0ZS5cbiAqXG4gKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICpcbiAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICpcbiAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICovXG5jbGFzcyBJbmVydFJvb3Qge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgIC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICovXG4gICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgIC8vIFdhdGNoIGZvcjpcbiAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7YXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gIFRoaXMgdW53aW5kcyBhbGwgb2YgdGhlIHN0YXRlXG4gICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgKi9cbiAgZGVzdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRoaXMuX3NhdmVkQXJpYUhpZGRlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24oaW5lcnROb2RlKSB7XG4gICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqLyAobnVsbCk7XG4gICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovIChudWxsKTtcbiAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovIChudWxsKTtcbiAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovIChudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICovXG4gIGdldCBtYW5hZ2VkTm9kZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgaGFzU2F2ZWRBcmlhSGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gIH1cblxuICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG4gIHNldCBzYXZlZEFyaWFIaWRkZW4oYXJpYUhpZGRlbikge1xuICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gIH1cblxuICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgZ2V0IHNhdmVkQXJpYUhpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgKi9cbiAgX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIChub2RlKSA9PiB0aGlzLl92aXNpdE5vZGUobm9kZSkpO1xuXG4gICAgbGV0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHN0YXJ0Tm9kZSkpIHtcbiAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgIGxldCBub2RlID0gc3RhcnROb2RlO1xuICAgICAgLyoqIEB0eXBlIHshU2hhZG93Um9vdHx1bmRlZmluZWR9ICovXG4gICAgICBsZXQgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi8gKG5vZGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgICBpZiAocm9vdCkge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIC8vIEluIElFMTEsIGlmIGFuIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLCBhbmQgdGhlbiBzZXQgdG8gdGFiaW5kZXg9LTFcbiAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKi9cbiAgX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAobm9kZSk7XG5cbiAgICAvLyBJZiBhIGRlc2NlbmRhbnQgaW5lcnQgcm9vdCBiZWNvbWVzIHVuLWluZXJ0LCBpdHMgZGVzY2VuZGFudHMgd2lsbCBzdGlsbCBiZSBpbmVydCBiZWNhdXNlIG9mXG4gICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VOb2RlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKi9cbiAgX21hbmFnZU5vZGUobm9kZSkge1xuICAgIGNvbnN0IGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKi9cbiAgX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgY29uc3QgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmRlbGV0ZShpbmVydE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAqL1xuICBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCAobm9kZSkgPT4gdGhpcy5fdW5tYW5hZ2VOb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBhIGRlc2NlbmRhbnQgbm9kZSBpcyBmb3VuZCB3aXRoIGFuIGBpbmVydGAgYXR0cmlidXRlLCBhZG9wdCBpdHMgbWFuYWdlZCBub2Rlcy5cbiAgICogQHBhcmFtIHshRWxlbWVudH0gbm9kZVxuICAgKi9cbiAgX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICBsZXQgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgfVxuXG4gICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgKi9cbiAgX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbihyZWNvcmQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovIChyZWNvcmQudGFyZ2V0KTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiZcbiAgICAgICAgICAgICAgICAgICB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICBjb25zdCBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24obWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICpcbiAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAqXG4gKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICovXG5jbGFzcyBJbmVydE5vZGUge1xuICAvKipcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgIC8qKiBAdHlwZSB7IU5vZGV9ICovXG4gICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgKiAgICBJZiBhbmQgb25seSBpZiB0aGlzIHNldCBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAqL1xuICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgIC8qKiBAdHlwZSB7P251bWJlcn0gKi9cbiAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgKiBUaGlzIG1ha2VzIHRoZSBtYW5hZ2VkIG5vZGUgZm9jdXNhYmxlIGFnYWluIGFuZCBkZWxldGVzIGFsbCBvZiB0aGUgcHJldmlvdXNseSBzdG9yZWQgc3RhdGUuXG4gICAqL1xuICBkZXN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKHRoaXMuX25vZGUpO1xuICAgICAgaWYgKHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgIGlmICh0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kKSB7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi8gKG51bGwpO1xuICAgIHRoaXMuX2luZXJ0Um9vdHMgPSAvKiogQHR5cGUgez99ICovIChudWxsKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAqL1xuICBnZXQgZGVzdHJveWVkKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovICh0aGlzKS5fZGVzdHJveWVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAqL1xuICBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCBoYXNTYXZlZFRhYkluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuICBnZXQgbm9kZSgpIHtcbiAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gIH1cblxuICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuICBzZXQgc2F2ZWRUYWJJbmRleCh0YWJJbmRleCkge1xuICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gIH1cblxuICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgZ2V0IHNhdmVkVGFiSW5kZXgoKSB7XG4gICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICB9XG5cbiAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgaWYgKHRoaXMubm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovICh0aGlzLm5vZGUpO1xuICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgaWYgKC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAoZWxlbWVudCkudGFiSW5kZXggPT09IC0xICYmXG4gICAgICAgICAgdGhpcy5oYXNTYXZlZFRhYkluZGV4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpLnRhYkluZGV4O1xuICAgICAgfVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpLnRhYkluZGV4O1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgKi9cbiAgYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAqL1xuICByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgIHRoaXMuX2luZXJ0Um9vdHMuZGVsZXRlKGluZXJ0Um9vdCk7XG4gICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICpcbiAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gKi9cbmNsYXNzIEluZXJ0TWFuYWdlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7IURvY3VtZW50fSAqL1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgbWFuYWdlZCBub2RlcyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Um9vdD59XG4gICAgICovXG4gICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgYWRkSW5lcnRTdHlsZShkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5fb25Eb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYmUgYW4gaW5lcnQgcm9vdCBvciBub3QuXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgKi9cbiAgc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICBpZiAoaW5lcnQpIHtcbiAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkgeyAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7IC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgIGluZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICB0aGlzLl9pbmVydFJvb3RzLmRlbGV0ZShyb290KTtcbiAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAqL1xuICBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAqL1xuICByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICBsZXQgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHsgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICB9XG5cbiAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICByZXR1cm4gaW5lcnROb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgKi9cbiAgZGVyZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICBjb25zdCBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5kZWxldGUobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAqL1xuICBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgIGNvbnN0IGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGluZXJ0RWxlbWVudCkge1xuICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSwge2F0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICovXG4gIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHJlY29yZCkge1xuICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKHJlY29yZC50YXJnZXQpO1xuICAgICAgICBjb25zdCBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gKiBAcGFyYW0geyhmdW5jdGlvbiAoIUVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VkVHJlZVdhbGsobm9kZSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcikge1xuICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgLy8gU2hhZG93Um9vdC5cbiAgICBjb25zdCBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChlbGVtZW50KS5zaGFkb3dSb290O1xuICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgLy8gc2hhZG93IERPTS5cbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gLyoqIEB0eXBlIHshSFRNTENvbnRlbnRFbGVtZW50fSAqLyAoZWxlbWVudCk7XG4gICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgY29uc3QgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/XG4gICAgICAgIGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgLy8gc2hhZG93IERPTS5cbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICBjb25zdCBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqLyAoZWxlbWVudCk7XG4gICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgIGNvbnN0IGRpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgP1xuICAgICAgICBzbG90LmFzc2lnbmVkTm9kZXMoe2ZsYXR0ZW46IHRydWV9KSA6IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgaXQgaXMgbmVpdGhlciB0aGUgcGFyZW50IG9mIGEgU2hhZG93Um9vdCwgYSA8Y29udGVudD4gZWxlbWVudCwgYSA8c2xvdD5cbiAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICBsZXQgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gIHdoaWxlIChjaGlsZCAhPSBudWxsKSB7XG4gICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYSBzdHlsZSBlbGVtZW50IHRvIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIGluZXJ0IHNwZWNpZmljIHN0eWxlc1xuICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICovXG5mdW5jdGlvbiBhZGRJbmVydFN0eWxlKG5vZGUpIHtcbiAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUnKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJytcbiAgICAgICAgICAgICAgICAgICAgICAnW2luZXJ0XSB7XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICd9XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJ1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICcgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJ31cXG4nO1xuICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuY29uc3QgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbmlmICghRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgfSxcbiAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgIHNldDogZnVuY3Rpb24oaW5lcnQpIHtcbiAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgfSxcbiAgfSk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQWxCQTtBQXFCQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTRDQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUEvQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRkE7O0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBbEJBO0FBb0JBO0FBckJBOztBQUFBO0FBQ0E7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQUE7O0FBcUJBO0FBTUE7QUFFQTtBQU1BO0FBTUE7QUFtQkE7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBNFJBO0FBQ0E7QUExU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7QUFPQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7O0FBZEE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdXQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUpBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBSkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBSkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQW1CQTtBQWpCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQXFCQTtBQUFBO0FBQ0E7OztBQUdBO0FBRUE7Ozs7Ozs7QUFNQTtBQUVBOzs7OztBQUlBO0FBNlRBO0FBQ0E7QUE1VEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBL1VBO0FBQ0E7QUFnVkE7QUFFQTs7Ozs7Ozs7Ozs7QUNyYkE7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBR0E7QUFDQTtBQUFBO0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4T0E7QUEwT0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9JQTtBQWlKQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7Ozs7O0FBSUE7QUFFQTs7Ozs7QUFJQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQXRCQTtBQXdCQTtBQUNBO0FBQ0E7QUFuTEE7QUFxTEE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
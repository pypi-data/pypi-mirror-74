(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["import-href-polyfill"],{

/***/ "./src/resources/html-import/import-href.js":
/*!**************************************************!*\
  !*** ./src/resources/html-import/import-href.js ***!
  \**************************************************/
/*! exports provided: importHref, importHrefPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importHref", function() { return importHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importHrefPromise", function() { return importHrefPromise; });
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./src/resources/html-import/polyfill.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
// run a callback when HTMLImports are ready or immediately if
// this api is not available.

function whenImportsReady(cb) {
  if (window.HTMLImports) {
    HTMLImports.whenReady(cb);
  } else {
    cb();
  }
}
/**
 * Convenience method for importing an HTML document imperatively.
 *
 * This method creates a new `<link rel="import">` element with
 * the provided URL and appends it to the document to start loading.
 * In the `onload` callback, the `import` property of the `link`
 * element will contain the imported document contents.
 *
 * @param {string} href URL to document to load.
 * @param {?function(!Event):void=} onload Callback to notify when an import successfully
 *   loaded.
 * @param {?function(!ErrorEvent):void=} onerror Callback to notify when an import
 *   unsuccessfully loaded.
 * @param {boolean=} optAsync True if the import should be loaded `async`.
 *   Defaults to `false`.
 * @return {!HTMLLinkElement} The link element for the URL to be loaded.
 */


const importHref = function (href, onload, onerror, optAsync) {
  let link
  /** @type {HTMLLinkElement} */
  = document.head.querySelector('link[href="' + href + '"][import-href]');

  if (!link) {
    link =
    /** @type {HTMLLinkElement} */
    document.createElement("link");
    link.rel = "import";
    link.href = href;
    link.setAttribute("import-href", "");
  } // always ensure link has `async` attribute if user specified one,
  // even if it was previously not async. This is considered less confusing.


  if (optAsync) {
    link.setAttribute("async", "");
  } // NOTE: the link may now be in 3 states: (1) pending insertion,
  // (2) inflight, (3) already loaded. In each case, we need to add
  // event listeners to process callbacks.


  const cleanup = function () {
    link.removeEventListener("load", loadListener);
    link.removeEventListener("error", errorListener);
  };

  let loadListener = function (event) {
    cleanup(); // In case of a successful load, cache the load event on the link so
    // that it can be used to short-circuit this method in the future when
    // it is called with the same href param.

    link.__dynamicImportLoaded = true;

    if (onload) {
      whenImportsReady(() => {
        onload(event);
      });
    }
  };

  let errorListener = function (event) {
    cleanup(); // In case of an error, remove the link from the document so that it
    // will be automatically created again the next time `importHref` is
    // called.

    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }

    if (onerror) {
      whenImportsReady(() => {
        onerror(event);
      });
    }
  };

  link.addEventListener("load", loadListener);
  link.addEventListener("error", errorListener);

  if (link.parentNode == null) {
    document.head.appendChild(link); // if the link already loaded, dispatch a fake load event
    // so that listeners are called and get a proper event argument.
  } else if (link.__dynamicImportLoaded) {
    link.dispatchEvent(new Event("load"));
  }

  return link;
};
const importHrefPromise = href => new Promise((resolve, reject) => importHref(href, resolve, reject));

/***/ }),

/***/ "./src/resources/html-import/polyfill.js":
/*!***********************************************!*\
  !*** ./src/resources/html-import/polyfill.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */

/*
 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function (q) {
  function y(a, b) {
    if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);
    var c = document.createEvent("CustomEvent");
    c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
    return c;
  }

  function m(a) {
    if (u) return a.ownerDocument !== document ? a.ownerDocument : null;
    var b = a.__importDoc;

    if (!b && a.parentNode) {
      b = a.parentNode;
      if ("function" === typeof b.closest) b = b.closest("link[rel=import]");else for (; !r(b) && (b = b.parentNode););
      a.__importDoc = b;
    }

    return b;
  }

  function D(a) {
    var b = k(document, "link[rel=import]:not([import-dependency])"),
        c = b.length;
    c ? g(b, function (b) {
      return t(b, function () {
        0 === --c && a();
      });
    }) : a();
  }

  function z(a) {
    function b() {
      "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a());
    }

    document.addEventListener("readystatechange", b);
    b();
  }

  function A(a) {
    z(function () {
      return D(function () {
        return a && a();
      });
    });
  }

  function t(a, b) {
    if (a.__loaded) b && b();else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, b && b();else {
      var c = function (d) {
        a.removeEventListener(d.type, c);
        a.__loaded = !0;
        b && b();
      };

      a.addEventListener("load", c);
      v && "style" === a.localName || a.addEventListener("error", c);
    }
  }

  function r(a) {
    return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel;
  }

  function h() {
    var a = this;
    this.a = {};
    this.b = 0;
    this.g = new MutationObserver(function (b) {
      return a.w(b);
    });
    this.g.observe(document.head, {
      childList: !0,
      subtree: !0
    });
    this.loadImports(document);
  }

  function B(a) {
    g(k(a, "template"), function (a) {
      g(k(a.content, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'), function (a) {
        var b = document.createElement("script");
        g(a.attributes, function (a) {
          return b.setAttribute(a.name, a.value);
        });
        b.textContent = a.textContent;
        a.parentNode.replaceChild(b, a);
      });
      B(a.content);
    });
  }

  function k(a, b) {
    return a.childNodes.length ? a.querySelectorAll(b) : E;
  }

  function g(a, b, c) {
    var d = a ? a.length : 0,
        f = c ? -1 : 1;

    for (c = c ? d - 1 : 0; c < d && 0 <= c; c += f) b(a[c], c);
  }

  var n = document.createElement("link"),
      u = ("import" in n),
      E = n.querySelectorAll("*"),
      w = null;
  !1 === "currentScript" in document && Object.defineProperty(document, "currentScript", {
    get: function () {
      return w || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
    },
    configurable: !0
  });
  var F = /(url\()([^)]*)(\))/g,
      G = /(@import[\s]+(?!url\())([^;]*)(;)/g,
      H = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,
      e = {
    u: function (a, b) {
      a.href && a.setAttribute("href", e.c(a.getAttribute("href"), b));
      a.src && a.setAttribute("src", e.c(a.getAttribute("src"), b));

      if ("style" === a.localName) {
        var c = e.o(a.textContent, b, F);
        a.textContent = e.o(c, b, G);
      }
    },
    o: function (a, b, c) {
      return a.replace(c, function (a, c, l, g) {
        a = l.replace(/["']/g, "");
        b && (a = e.c(a, b));
        return c + "'" + a + "'" + g;
      });
    },
    c: function (a, b) {
      if (void 0 === e.f) {
        e.f = !1;

        try {
          var c = new URL("b", "http://a");
          c.pathname = "c%20d";
          e.f = "http://a/c%20d" === c.href;
        } catch (d) {}
      }

      if (e.f) return new URL(a, b).href;
      c = e.s;
      c || (c = document.implementation.createHTMLDocument("temp"), e.s = c, c.i = c.createElement("base"), c.head.appendChild(c.i), c.h = c.createElement("a"));
      c.i.href = b;
      c.h.href = a;
      return c.h.href || a;
    }
  },
      C = {
    async: !0,
    load: function (a, b, c) {
      if (a) {
        if (a.match(/^data:/)) {
          a = a.split(",");
          var d = a[1];
          d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
          b(d);
        } else {
          var f = new XMLHttpRequest();
          f.open("GET", a, C.async);

          f.onload = function () {
            var a = f.responseURL || f.getResponseHeader("Location");
            a && 0 === a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);
            var d = f.response || f.responseText;
            304 === f.status || 0 === f.status || 200 <= f.status && 300 > f.status ? b(d, a) : c(d);
          };

          f.send();
        }
      } else c("error: href must be specified");
    }
  },
      v = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);

  h.prototype.loadImports = function (a) {
    var b = this;
    g(k(a, "link[rel=import]"), function (a) {
      return b.l(a);
    });
  };

  h.prototype.l = function (a) {
    var b = this,
        c = a.href;

    if (void 0 !== this.a[c]) {
      var d = this.a[c];
      d && d.__loaded && (a.__import = d, this.j(a));
    } else this.b++, this.a[c] = "pending", C.load(c, function (a, d) {
      a = b.A(a, d || c);
      b.a[c] = a;
      b.b--;
      b.loadImports(a);
      b.m();
    }, function () {
      b.a[c] = null;
      b.b--;
      b.m();
    });
  };

  h.prototype.A = function (a, b) {
    if (!a) return document.createDocumentFragment();
    v && (a = a.replace(H, function (a, b, c) {
      return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a;
    }));
    var c = document.createElement("template");
    c.innerHTML = a;
    if (c.content) a = c.content, B(a);else for (a = document.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
    if (c = a.querySelector("base")) b = e.c(c.getAttribute("href"), b), c.removeAttribute("href");
    var d = 0;
    g(k(a, 'link[rel=import],link[rel=stylesheet][href][type=import-disable],style:not([type]),link[rel=stylesheet][href]:not([type]),script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'), function (a) {
      t(a);
      e.u(a, b);
      a.setAttribute("import-dependency", "");
      "script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), a.textContent = "", d++);
    });
    return a;
  };

  h.prototype.m = function () {
    var a = this;

    if (!this.b) {
      this.g.disconnect();
      this.flatten(document);

      var b = !1,
          c = !1,
          d = function () {
        c && b && (a.loadImports(document), a.b || (a.g.observe(document.head, {
          childList: !0,
          subtree: !0
        }), a.v()));
      };

      this.C(function () {
        c = !0;
        d();
      });
      this.B(function () {
        b = !0;
        d();
      });
    }
  };

  h.prototype.flatten = function (a) {
    var b = this;
    g(k(a, "link[rel=import]"), function (a) {
      var c = b.a[a.href];
      (a.__import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = "loading", a.__import = a, b.flatten(c), a.appendChild(c));
    });
  };

  h.prototype.B = function (a) {
    function b(f) {
      if (f < d) {
        var l = c[f],
            e = document.createElement("script");
        l.removeAttribute("import-dependency");
        g(l.attributes, function (a) {
          return e.setAttribute(a.name, a.value);
        });
        w = e;
        l.parentNode.replaceChild(e, l);
        t(e, function () {
          w = null;
          b(f + 1);
        });
      } else a();
    }

    var c = k(document, "script[import-dependency]"),
        d = c.length;
    b(0);
  };

  h.prototype.C = function (a) {
    var b = k(document, "style[import-dependency],link[rel=stylesheet][import-dependency]"),
        c = b.length;

    if (c) {
      var d = v && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");
      g(b, function (b) {
        t(b, function () {
          b.removeAttribute("import-dependency");
          0 === --c && a();
        });

        if (d && b.parentNode !== document.head) {
          var e = document.createElement(b.localName);
          e.__appliedElement = b;
          e.setAttribute("type", "import-placeholder");
          b.parentNode.insertBefore(e, b.nextSibling);

          for (e = m(b); e && m(e);) e = m(e);

          e.parentNode !== document.head && (e = null);
          document.head.insertBefore(b, e);
          b.removeAttribute("type");
        }
      });
    } else a();
  };

  h.prototype.v = function () {
    var a = this;
    g(k(document, "link[rel=import]"), function (b) {
      return a.j(b);
    }, !0);
  };

  h.prototype.j = function (a) {
    a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), a.dispatchEvent(y(a.import ? "load" : "error", {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    })));
  };

  h.prototype.w = function (a) {
    var b = this;
    g(a, function (a) {
      return g(a.addedNodes, function (a) {
        a && a.nodeType === Node.ELEMENT_NODE && (r(a) ? b.l(a) : b.loadImports(a));
      });
    });
  };

  var x = null;
  if (u) g(k(document, "link[rel=import]"), function (a) {
    a.import && "loading" === a.import.readyState || (a.__loaded = !0);
  }), n = function (a) {
    a = a.target;
    r(a) && (a.__loaded = !0);
  }, document.addEventListener("load", n, !0), document.addEventListener("error", n, !0);else {
    var p = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");
    Object.defineProperty((!p || p.configurable ? Node : Element).prototype, "baseURI", {
      get: function () {
        var a = r(this) ? this : m(this);
        return a ? a.href : p && p.get ? p.get.call(this) : (document.querySelector("base") || window.location).href;
      },
      configurable: !0,
      enumerable: !0
    });
    Object.defineProperty(HTMLLinkElement.prototype, "import", {
      get: function () {
        return this.__import || null;
      },
      configurable: !0,
      enumerable: !0
    });
    z(function () {
      x = new h();
    });
  }
  A(function () {
    return document.dispatchEvent(y("HTMLImportsLoaded", {
      cancelable: !0,
      bubbles: !0,
      detail: void 0
    }));
  });
  q.useNative = u;
  q.whenReady = A;
  q.importForElement = m;

  q.loadImports = function (a) {
    x && x.loadImports(a);
  };
})(window.HTMLImports = window.HTMLImports || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWhyZWYtcG9seWZpbGwuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL2h0bWwtaW1wb3J0L2ltcG9ydC1ocmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvaHRtbC1pbXBvcnQvcG9seWZpbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBcIi4vcG9seWZpbGxcIjtcbi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbi8vIHJ1biBhIGNhbGxiYWNrIHdoZW4gSFRNTEltcG9ydHMgYXJlIHJlYWR5IG9yIGltbWVkaWF0ZWx5IGlmXG4vLyB0aGlzIGFwaSBpcyBub3QgYXZhaWxhYmxlLlxuZnVuY3Rpb24gd2hlbkltcG9ydHNSZWFkeShjYikge1xuICBpZiAod2luZG93LkhUTUxJbXBvcnRzKSB7XG4gICAgSFRNTEltcG9ydHMud2hlblJlYWR5KGNiKTtcbiAgfSBlbHNlIHtcbiAgICBjYigpO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBpbXBvcnRpbmcgYW4gSFRNTCBkb2N1bWVudCBpbXBlcmF0aXZlbHkuXG4gKlxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBhIG5ldyBgPGxpbmsgcmVsPVwiaW1wb3J0XCI+YCBlbGVtZW50IHdpdGhcbiAqIHRoZSBwcm92aWRlZCBVUkwgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGRvY3VtZW50IHRvIHN0YXJ0IGxvYWRpbmcuXG4gKiBJbiB0aGUgYG9ubG9hZGAgY2FsbGJhY2ssIHRoZSBgaW1wb3J0YCBwcm9wZXJ0eSBvZiB0aGUgYGxpbmtgXG4gKiBlbGVtZW50IHdpbGwgY29udGFpbiB0aGUgaW1wb3J0ZWQgZG9jdW1lbnQgY29udGVudHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgVVJMIHRvIGRvY3VtZW50IHRvIGxvYWQuXG4gKiBAcGFyYW0gez9mdW5jdGlvbighRXZlbnQpOnZvaWQ9fSBvbmxvYWQgQ2FsbGJhY2sgdG8gbm90aWZ5IHdoZW4gYW4gaW1wb3J0IHN1Y2Nlc3NmdWxseVxuICogICBsb2FkZWQuXG4gKiBAcGFyYW0gez9mdW5jdGlvbighRXJyb3JFdmVudCk6dm9pZD19IG9uZXJyb3IgQ2FsbGJhY2sgdG8gbm90aWZ5IHdoZW4gYW4gaW1wb3J0XG4gKiAgIHVuc3VjY2Vzc2Z1bGx5IGxvYWRlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdEFzeW5jIFRydWUgaWYgdGhlIGltcG9ydCBzaG91bGQgYmUgbG9hZGVkIGBhc3luY2AuXG4gKiAgIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gKiBAcmV0dXJuIHshSFRNTExpbmtFbGVtZW50fSBUaGUgbGluayBlbGVtZW50IGZvciB0aGUgVVJMIHRvIGJlIGxvYWRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGltcG9ydEhyZWYgPSBmdW5jdGlvbiAoaHJlZiwgb25sb2FkLCBvbmVycm9yLCBvcHRBc3luYykge1xuICBsZXQgbGluayAvKiogQHR5cGUge0hUTUxMaW5rRWxlbWVudH0gKi8gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2xpbmtbaHJlZj1cIicgKyBocmVmICsgJ1wiXVtpbXBvcnQtaHJlZl0nXG4gICk7XG4gIGlmICghbGluaykge1xuICAgIGxpbmsgPSAvKiogQHR5cGUge0hUTUxMaW5rRWxlbWVudH0gKi8gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpKTtcbiAgICBsaW5rLnJlbCA9IFwiaW1wb3J0XCI7XG4gICAgbGluay5ocmVmID0gaHJlZjtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImltcG9ydC1ocmVmXCIsIFwiXCIpO1xuICB9XG4gIC8vIGFsd2F5cyBlbnN1cmUgbGluayBoYXMgYGFzeW5jYCBhdHRyaWJ1dGUgaWYgdXNlciBzcGVjaWZpZWQgb25lLFxuICAvLyBldmVuIGlmIGl0IHdhcyBwcmV2aW91c2x5IG5vdCBhc3luYy4gVGhpcyBpcyBjb25zaWRlcmVkIGxlc3MgY29uZnVzaW5nLlxuICBpZiAob3B0QXN5bmMpIHtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImFzeW5jXCIsIFwiXCIpO1xuICB9XG4gIC8vIE5PVEU6IHRoZSBsaW5rIG1heSBub3cgYmUgaW4gMyBzdGF0ZXM6ICgxKSBwZW5kaW5nIGluc2VydGlvbixcbiAgLy8gKDIpIGluZmxpZ2h0LCAoMykgYWxyZWFkeSBsb2FkZWQuIEluIGVhY2ggY2FzZSwgd2UgbmVlZCB0byBhZGRcbiAgLy8gZXZlbnQgbGlzdGVuZXJzIHRvIHByb2Nlc3MgY2FsbGJhY2tzLlxuICBjb25zdCBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgIGxpbmsucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbG9hZExpc3RlbmVyKTtcbiAgICBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBlcnJvckxpc3RlbmVyKTtcbiAgfTtcbiAgbGV0IGxvYWRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNsZWFudXAoKTtcbiAgICAvLyBJbiBjYXNlIG9mIGEgc3VjY2Vzc2Z1bCBsb2FkLCBjYWNoZSB0aGUgbG9hZCBldmVudCBvbiB0aGUgbGluayBzb1xuICAgIC8vIHRoYXQgaXQgY2FuIGJlIHVzZWQgdG8gc2hvcnQtY2lyY3VpdCB0aGlzIG1ldGhvZCBpbiB0aGUgZnV0dXJlIHdoZW5cbiAgICAvLyBpdCBpcyBjYWxsZWQgd2l0aCB0aGUgc2FtZSBocmVmIHBhcmFtLlxuICAgIGxpbmsuX19keW5hbWljSW1wb3J0TG9hZGVkID0gdHJ1ZTtcbiAgICBpZiAob25sb2FkKSB7XG4gICAgICB3aGVuSW1wb3J0c1JlYWR5KCgpID0+IHtcbiAgICAgICAgb25sb2FkKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgbGV0IGVycm9yTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjbGVhbnVwKCk7XG4gICAgLy8gSW4gY2FzZSBvZiBhbiBlcnJvciwgcmVtb3ZlIHRoZSBsaW5rIGZyb20gdGhlIGRvY3VtZW50IHNvIHRoYXQgaXRcbiAgICAvLyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY3JlYXRlZCBhZ2FpbiB0aGUgbmV4dCB0aW1lIGBpbXBvcnRIcmVmYCBpc1xuICAgIC8vIGNhbGxlZC5cbiAgICBpZiAobGluay5wYXJlbnROb2RlKSB7XG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICAgIGlmIChvbmVycm9yKSB7XG4gICAgICB3aGVuSW1wb3J0c1JlYWR5KCgpID0+IHtcbiAgICAgICAgb25lcnJvcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbG9hZExpc3RlbmVyKTtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZXJyb3JMaXN0ZW5lcik7XG4gIGlmIChsaW5rLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgLy8gaWYgdGhlIGxpbmsgYWxyZWFkeSBsb2FkZWQsIGRpc3BhdGNoIGEgZmFrZSBsb2FkIGV2ZW50XG4gICAgLy8gc28gdGhhdCBsaXN0ZW5lcnMgYXJlIGNhbGxlZCBhbmQgZ2V0IGEgcHJvcGVyIGV2ZW50IGFyZ3VtZW50LlxuICB9IGVsc2UgaWYgKGxpbmsuX19keW5hbWljSW1wb3J0TG9hZGVkKSB7XG4gICAgbGluay5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImxvYWRcIikpO1xuICB9XG4gIHJldHVybiBsaW5rO1xufTtcblxuZXhwb3J0IGNvbnN0IGltcG9ydEhyZWZQcm9taXNlID0gKGhyZWYpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGltcG9ydEhyZWYoaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLypcbiBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4oZnVuY3Rpb24gKHEpIHtcbiAgZnVuY3Rpb24geShhLCBiKSB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCkgcmV0dXJuIG5ldyBDdXN0b21FdmVudChhLCBiKTtcbiAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgYy5pbml0Q3VzdG9tRXZlbnQoYSwgISFiLmJ1YmJsZXMsICEhYi5jYW5jZWxhYmxlLCBiLmRldGFpbCk7XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgZnVuY3Rpb24gbShhKSB7XG4gICAgaWYgKHUpIHJldHVybiBhLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50ID8gYS5vd25lckRvY3VtZW50IDogbnVsbDtcbiAgICB2YXIgYiA9IGEuX19pbXBvcnREb2M7XG4gICAgaWYgKCFiICYmIGEucGFyZW50Tm9kZSkge1xuICAgICAgYiA9IGEucGFyZW50Tm9kZTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBiLmNsb3Nlc3QpIGIgPSBiLmNsb3Nlc3QoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO1xuICAgICAgZWxzZSBmb3IgKDsgIXIoYikgJiYgKGIgPSBiLnBhcmVudE5vZGUpOyApO1xuICAgICAgYS5fX2ltcG9ydERvYyA9IGI7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG4gIGZ1bmN0aW9uIEQoYSkge1xuICAgIHZhciBiID0gayhkb2N1bWVudCwgXCJsaW5rW3JlbD1pbXBvcnRdOm5vdChbaW1wb3J0LWRlcGVuZGVuY3ldKVwiKSxcbiAgICAgIGMgPSBiLmxlbmd0aDtcbiAgICBjXG4gICAgICA/IGcoYiwgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICByZXR1cm4gdChiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAwID09PSAtLWMgJiYgYSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgOiBhKCk7XG4gIH1cbiAgZnVuY3Rpb24geihhKSB7XG4gICAgZnVuY3Rpb24gYigpIHtcbiAgICAgIFwibG9hZGluZ1wiICE9PSBkb2N1bWVudC5yZWFkeVN0YXRlICYmXG4gICAgICAgIGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGIpLCBhKCkpO1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBiKTtcbiAgICBiKCk7XG4gIH1cbiAgZnVuY3Rpb24gQShhKSB7XG4gICAgeihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gRChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhICYmIGEoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHQoYSwgYikge1xuICAgIGlmIChhLl9fbG9hZGVkKSBiICYmIGIoKTtcbiAgICBlbHNlIGlmIChcbiAgICAgIChcInNjcmlwdFwiID09PSBhLmxvY2FsTmFtZSAmJiAhYS5zcmMpIHx8XG4gICAgICAoXCJzdHlsZVwiID09PSBhLmxvY2FsTmFtZSAmJiAhYS5maXJzdENoaWxkKVxuICAgIClcbiAgICAgIChhLl9fbG9hZGVkID0gITApLCBiICYmIGIoKTtcbiAgICBlbHNlIHtcbiAgICAgIHZhciBjID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgYS5yZW1vdmVFdmVudExpc3RlbmVyKGQudHlwZSwgYyk7XG4gICAgICAgIGEuX19sb2FkZWQgPSAhMDtcbiAgICAgICAgYiAmJiBiKCk7XG4gICAgICB9O1xuICAgICAgYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjKTtcbiAgICAgICh2ICYmIFwic3R5bGVcIiA9PT0gYS5sb2NhbE5hbWUpIHx8IGEuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByKGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgIFwibGlua1wiID09PSBhLmxvY2FsTmFtZSAmJlxuICAgICAgXCJpbXBvcnRcIiA9PT0gYS5yZWxcbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIGgoKSB7XG4gICAgdmFyIGEgPSB0aGlzO1xuICAgIHRoaXMuYSA9IHt9O1xuICAgIHRoaXMuYiA9IDA7XG4gICAgdGhpcy5nID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGIpIHtcbiAgICAgIHJldHVybiBhLncoYik7XG4gICAgfSk7XG4gICAgdGhpcy5nLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwgeyBjaGlsZExpc3Q6ICEwLCBzdWJ0cmVlOiAhMCB9KTtcbiAgICB0aGlzLmxvYWRJbXBvcnRzKGRvY3VtZW50KTtcbiAgfVxuICBmdW5jdGlvbiBCKGEpIHtcbiAgICBnKGsoYSwgXCJ0ZW1wbGF0ZVwiKSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgIGcoXG4gICAgICAgIGsoXG4gICAgICAgICAgYS5jb250ZW50LFxuICAgICAgICAgICdzY3JpcHQ6bm90KFt0eXBlXSksc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdLHNjcmlwdFt0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJdJ1xuICAgICAgICApLFxuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHZhciBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICBnKGEuYXR0cmlidXRlcywgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiBiLnNldEF0dHJpYnV0ZShhLm5hbWUsIGEudmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGIudGV4dENvbnRlbnQgPSBhLnRleHRDb250ZW50O1xuICAgICAgICAgIGEucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoYiwgYSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBCKGEuY29udGVudCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gayhhLCBiKSB7XG4gICAgcmV0dXJuIGEuY2hpbGROb2Rlcy5sZW5ndGggPyBhLnF1ZXJ5U2VsZWN0b3JBbGwoYikgOiBFO1xuICB9XG4gIGZ1bmN0aW9uIGcoYSwgYiwgYykge1xuICAgIHZhciBkID0gYSA/IGEubGVuZ3RoIDogMCxcbiAgICAgIGYgPSBjID8gLTEgOiAxO1xuICAgIGZvciAoYyA9IGMgPyBkIC0gMSA6IDA7IGMgPCBkICYmIDAgPD0gYzsgYyArPSBmKSBiKGFbY10sIGMpO1xuICB9XG4gIHZhciBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIiksXG4gICAgdSA9IFwiaW1wb3J0XCIgaW4gbixcbiAgICBFID0gbi5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSxcbiAgICB3ID0gbnVsbDtcbiAgITEgPT09IFwiY3VycmVudFNjcmlwdFwiIGluIGRvY3VtZW50ICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LCBcImN1cnJlbnRTY3JpcHRcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdyB8fFxuICAgICAgICAgIChcImNvbXBsZXRlXCIgIT09IGRvY3VtZW50LnJlYWR5U3RhdGVcbiAgICAgICAgICAgID8gZG9jdW1lbnQuc2NyaXB0c1tkb2N1bWVudC5zY3JpcHRzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICA6IG51bGwpXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB9KTtcbiAgdmFyIEYgPSAvKHVybFxcKCkoW14pXSopKFxcKSkvZyxcbiAgICBHID0gLyhAaW1wb3J0W1xcc10rKD8hdXJsXFwoKSkoW147XSopKDspL2csXG4gICAgSCA9IC8oPGxpbmtbXj5dKikocmVsPVsnfFwiXT9zdHlsZXNoZWV0Wyd8XCJdP1tePl0qPikvZyxcbiAgICBlID0ge1xuICAgICAgdTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgYS5ocmVmICYmIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBlLmMoYS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLCBiKSk7XG4gICAgICAgIGEuc3JjICYmIGEuc2V0QXR0cmlidXRlKFwic3JjXCIsIGUuYyhhLmdldEF0dHJpYnV0ZShcInNyY1wiKSwgYikpO1xuICAgICAgICBpZiAoXCJzdHlsZVwiID09PSBhLmxvY2FsTmFtZSkge1xuICAgICAgICAgIHZhciBjID0gZS5vKGEudGV4dENvbnRlbnQsIGIsIEYpO1xuICAgICAgICAgIGEudGV4dENvbnRlbnQgPSBlLm8oYywgYiwgRyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvOiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gYS5yZXBsYWNlKGMsIGZ1bmN0aW9uIChhLCBjLCBsLCBnKSB7XG4gICAgICAgICAgYSA9IGwucmVwbGFjZSgvW1wiJ10vZywgXCJcIik7XG4gICAgICAgICAgYiAmJiAoYSA9IGUuYyhhLCBiKSk7XG4gICAgICAgICAgcmV0dXJuIGMgKyBcIidcIiArIGEgKyBcIidcIiArIGc7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGM6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUuZikge1xuICAgICAgICAgIGUuZiA9ICExO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYyA9IG5ldyBVUkwoXCJiXCIsIFwiaHR0cDovL2FcIik7XG4gICAgICAgICAgICBjLnBhdGhuYW1lID0gXCJjJTIwZFwiO1xuICAgICAgICAgICAgZS5mID0gXCJodHRwOi8vYS9jJTIwZFwiID09PSBjLmhyZWY7XG4gICAgICAgICAgfSBjYXRjaCAoZCkge31cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5mKSByZXR1cm4gbmV3IFVSTChhLCBiKS5ocmVmO1xuICAgICAgICBjID0gZS5zO1xuICAgICAgICBjIHx8XG4gICAgICAgICAgKChjID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwidGVtcFwiKSksXG4gICAgICAgICAgKGUucyA9IGMpLFxuICAgICAgICAgIChjLmkgPSBjLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpKSxcbiAgICAgICAgICBjLmhlYWQuYXBwZW5kQ2hpbGQoYy5pKSxcbiAgICAgICAgICAoYy5oID0gYy5jcmVhdGVFbGVtZW50KFwiYVwiKSkpO1xuICAgICAgICBjLmkuaHJlZiA9IGI7XG4gICAgICAgIGMuaC5ocmVmID0gYTtcbiAgICAgICAgcmV0dXJuIGMuaC5ocmVmIHx8IGE7XG4gICAgICB9LFxuICAgIH0sXG4gICAgQyA9IHtcbiAgICAgIGFzeW5jOiAhMCxcbiAgICAgIGxvYWQ6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmIChhKVxuICAgICAgICAgIGlmIChhLm1hdGNoKC9eZGF0YTovKSkge1xuICAgICAgICAgICAgYSA9IGEuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgdmFyIGQgPSBhWzFdO1xuICAgICAgICAgICAgZCA9IC0xIDwgYVswXS5pbmRleE9mKFwiO2Jhc2U2NFwiKSA/IGF0b2IoZCkgOiBkZWNvZGVVUklDb21wb25lbnQoZCk7XG4gICAgICAgICAgICBiKGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgZi5vcGVuKFwiR0VUXCIsIGEsIEMuYXN5bmMpO1xuICAgICAgICAgICAgZi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBhID0gZi5yZXNwb25zZVVSTCB8fCBmLmdldFJlc3BvbnNlSGVhZGVyKFwiTG9jYXRpb25cIik7XG4gICAgICAgICAgICAgIGEgJiZcbiAgICAgICAgICAgICAgICAwID09PSBhLmluZGV4T2YoXCIvXCIpICYmXG4gICAgICAgICAgICAgICAgKGEgPVxuICAgICAgICAgICAgICAgICAgKGxvY2F0aW9uLm9yaWdpbiB8fFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QpICsgYSk7XG4gICAgICAgICAgICAgIHZhciBkID0gZi5yZXNwb25zZSB8fCBmLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgMzA0ID09PSBmLnN0YXR1cyB8fFxuICAgICAgICAgICAgICAwID09PSBmLnN0YXR1cyB8fFxuICAgICAgICAgICAgICAoMjAwIDw9IGYuc3RhdHVzICYmIDMwMCA+IGYuc3RhdHVzKVxuICAgICAgICAgICAgICAgID8gYihkLCBhKVxuICAgICAgICAgICAgICAgIDogYyhkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmLnNlbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgYyhcImVycm9yOiBocmVmIG11c3QgYmUgc3BlY2lmaWVkXCIpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHYgPVxuICAgICAgL1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHxcbiAgICAgIC9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIGgucHJvdG90eXBlLmxvYWRJbXBvcnRzID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IHRoaXM7XG4gICAgZyhrKGEsIFwibGlua1tyZWw9aW1wb3J0XVwiKSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBiLmwoYSk7XG4gICAgfSk7XG4gIH07XG4gIGgucHJvdG90eXBlLmwgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gdGhpcyxcbiAgICAgIGMgPSBhLmhyZWY7XG4gICAgaWYgKHZvaWQgMCAhPT0gdGhpcy5hW2NdKSB7XG4gICAgICB2YXIgZCA9IHRoaXMuYVtjXTtcbiAgICAgIGQgJiYgZC5fX2xvYWRlZCAmJiAoKGEuX19pbXBvcnQgPSBkKSwgdGhpcy5qKGEpKTtcbiAgICB9IGVsc2VcbiAgICAgIHRoaXMuYisrLFxuICAgICAgICAodGhpcy5hW2NdID0gXCJwZW5kaW5nXCIpLFxuICAgICAgICBDLmxvYWQoXG4gICAgICAgICAgYyxcbiAgICAgICAgICBmdW5jdGlvbiAoYSwgZCkge1xuICAgICAgICAgICAgYSA9IGIuQShhLCBkIHx8IGMpO1xuICAgICAgICAgICAgYi5hW2NdID0gYTtcbiAgICAgICAgICAgIGIuYi0tO1xuICAgICAgICAgICAgYi5sb2FkSW1wb3J0cyhhKTtcbiAgICAgICAgICAgIGIubSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYi5hW2NdID0gbnVsbDtcbiAgICAgICAgICAgIGIuYi0tO1xuICAgICAgICAgICAgYi5tKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICB9O1xuICBoLnByb3RvdHlwZS5BID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoIWEpIHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgdiAmJlxuICAgICAgKGEgPSBhLnJlcGxhY2UoSCwgZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIC0xID09PSBhLmluZGV4T2YoXCJ0eXBlPVwiKSA/IGIgKyBcIiB0eXBlPWltcG9ydC1kaXNhYmxlIFwiICsgYyA6IGE7XG4gICAgICB9KSk7XG4gICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gICAgYy5pbm5lckhUTUwgPSBhO1xuICAgIGlmIChjLmNvbnRlbnQpIChhID0gYy5jb250ZW50KSwgQihhKTtcbiAgICBlbHNlXG4gICAgICBmb3IgKGEgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IGMuZmlyc3RDaGlsZDsgKVxuICAgICAgICBhLmFwcGVuZENoaWxkKGMuZmlyc3RDaGlsZCk7XG4gICAgaWYgKChjID0gYS5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKSkpXG4gICAgICAoYiA9IGUuYyhjLmdldEF0dHJpYnV0ZShcImhyZWZcIiksIGIpKSwgYy5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgIHZhciBkID0gMDtcbiAgICBnKFxuICAgICAgayhcbiAgICAgICAgYSxcbiAgICAgICAgJ2xpbmtbcmVsPWltcG9ydF0sbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl1bdHlwZT1pbXBvcnQtZGlzYWJsZV0sc3R5bGU6bm90KFt0eXBlXSksbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl06bm90KFt0eXBlXSksc2NyaXB0Om5vdChbdHlwZV0pLHNjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiXSxzY3JpcHRbdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXSdcbiAgICAgICksXG4gICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICB0KGEpO1xuICAgICAgICBlLnUoYSwgYik7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIiwgXCJcIik7XG4gICAgICAgIFwic2NyaXB0XCIgPT09IGEubG9jYWxOYW1lICYmXG4gICAgICAgICAgIWEuc3JjICYmXG4gICAgICAgICAgYS50ZXh0Q29udGVudCAmJlxuICAgICAgICAgIChhLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgICBcImRhdGE6dGV4dC9qYXZhc2NyaXB0O2NoYXJzZXQ9dXRmLTgsXCIgK1xuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgYS50ZXh0Q29udGVudCArXG4gICAgICAgICAgICAgICAgICAoXCJcXG4vLyMgc291cmNlVVJMPVwiICsgYiArIChkID8gXCItXCIgKyBkIDogXCJcIikgKyBcIi5qc1xcblwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICAoYS50ZXh0Q29udGVudCA9IFwiXCIpLFxuICAgICAgICAgIGQrKyk7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gYTtcbiAgfTtcbiAgaC5wcm90b3R5cGUubSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmIpIHtcbiAgICAgIHRoaXMuZy5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLmZsYXR0ZW4oZG9jdW1lbnQpO1xuICAgICAgdmFyIGIgPSAhMSxcbiAgICAgICAgYyA9ICExLFxuICAgICAgICBkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGMgJiZcbiAgICAgICAgICAgIGIgJiZcbiAgICAgICAgICAgIChhLmxvYWRJbXBvcnRzKGRvY3VtZW50KSxcbiAgICAgICAgICAgIGEuYiB8fFxuICAgICAgICAgICAgICAoYS5nLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwgeyBjaGlsZExpc3Q6ICEwLCBzdWJ0cmVlOiAhMCB9KSxcbiAgICAgICAgICAgICAgYS52KCkpKTtcbiAgICAgICAgfTtcbiAgICAgIHRoaXMuQyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGMgPSAhMDtcbiAgICAgICAgZCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLkIoZnVuY3Rpb24gKCkge1xuICAgICAgICBiID0gITA7XG4gICAgICAgIGQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaC5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSB0aGlzO1xuICAgIGcoayhhLCBcImxpbmtbcmVsPWltcG9ydF1cIiksIGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYyA9IGIuYVthLmhyZWZdO1xuICAgICAgKGEuX19pbXBvcnQgPSBjKSAmJlxuICAgICAgICBjLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgJiZcbiAgICAgICAgKChiLmFbYS5ocmVmXSA9IGEpLFxuICAgICAgICAoYS5yZWFkeVN0YXRlID0gXCJsb2FkaW5nXCIpLFxuICAgICAgICAoYS5fX2ltcG9ydCA9IGEpLFxuICAgICAgICBiLmZsYXR0ZW4oYyksXG4gICAgICAgIGEuYXBwZW5kQ2hpbGQoYykpO1xuICAgIH0pO1xuICB9O1xuICBoLnByb3RvdHlwZS5CID0gZnVuY3Rpb24gKGEpIHtcbiAgICBmdW5jdGlvbiBiKGYpIHtcbiAgICAgIGlmIChmIDwgZCkge1xuICAgICAgICB2YXIgbCA9IGNbZl0sXG4gICAgICAgICAgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIGwucmVtb3ZlQXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIik7XG4gICAgICAgIGcobC5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHJldHVybiBlLnNldEF0dHJpYnV0ZShhLm5hbWUsIGEudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdyA9IGU7XG4gICAgICAgIGwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZSwgbCk7XG4gICAgICAgIHQoZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHcgPSBudWxsO1xuICAgICAgICAgIGIoZiArIDEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBhKCk7XG4gICAgfVxuICAgIHZhciBjID0gayhkb2N1bWVudCwgXCJzY3JpcHRbaW1wb3J0LWRlcGVuZGVuY3ldXCIpLFxuICAgICAgZCA9IGMubGVuZ3RoO1xuICAgIGIoMCk7XG4gIH07XG4gIGgucHJvdG90eXBlLkMgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gayhcbiAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgIFwic3R5bGVbaW1wb3J0LWRlcGVuZGVuY3ldLGxpbmtbcmVsPXN0eWxlc2hlZXRdW2ltcG9ydC1kZXBlbmRlbmN5XVwiXG4gICAgICApLFxuICAgICAgYyA9IGIubGVuZ3RoO1xuICAgIGlmIChjKSB7XG4gICAgICB2YXIgZCA9XG4gICAgICAgIHYgJiZcbiAgICAgICAgISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwibGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl1bdHlwZT1pbXBvcnQtZGlzYWJsZV1cIlxuICAgICAgICApO1xuICAgICAgZyhiLCBmdW5jdGlvbiAoYikge1xuICAgICAgICB0KGIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBiLnJlbW92ZUF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIpO1xuICAgICAgICAgIDAgPT09IC0tYyAmJiBhKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZCAmJiBiLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmhlYWQpIHtcbiAgICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYi5sb2NhbE5hbWUpO1xuICAgICAgICAgIGUuX19hcHBsaWVkRWxlbWVudCA9IGI7XG4gICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1wb3J0LXBsYWNlaG9sZGVyXCIpO1xuICAgICAgICAgIGIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSwgYi5uZXh0U2libGluZyk7XG4gICAgICAgICAgZm9yIChlID0gbShiKTsgZSAmJiBtKGUpOyApIGUgPSBtKGUpO1xuICAgICAgICAgIGUucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuaGVhZCAmJiAoZSA9IG51bGwpO1xuICAgICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGIsIGUpO1xuICAgICAgICAgIGIucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGEoKTtcbiAgfTtcbiAgaC5wcm90b3R5cGUudiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgZyhcbiAgICAgIGsoZG9jdW1lbnQsIFwibGlua1tyZWw9aW1wb3J0XVwiKSxcbiAgICAgIGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBhLmooYik7XG4gICAgICB9LFxuICAgICAgITBcbiAgICApO1xuICB9O1xuICBoLnByb3RvdHlwZS5qID0gZnVuY3Rpb24gKGEpIHtcbiAgICBhLl9fbG9hZGVkIHx8XG4gICAgICAoKGEuX19sb2FkZWQgPSAhMCksXG4gICAgICBhLmltcG9ydCAmJiAoYS5pbXBvcnQucmVhZHlTdGF0ZSA9IFwiY29tcGxldGVcIiksXG4gICAgICBhLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIHkoYS5pbXBvcnQgPyBcImxvYWRcIiA6IFwiZXJyb3JcIiwge1xuICAgICAgICAgIGJ1YmJsZXM6ICExLFxuICAgICAgICAgIGNhbmNlbGFibGU6ICExLFxuICAgICAgICAgIGRldGFpbDogdm9pZCAwLFxuICAgICAgICB9KVxuICAgICAgKSk7XG4gIH07XG4gIGgucHJvdG90eXBlLncgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gdGhpcztcbiAgICBnKGEsIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZyhhLmFkZGVkTm9kZXMsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGEgJiZcbiAgICAgICAgICBhLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgICAgIChyKGEpID8gYi5sKGEpIDogYi5sb2FkSW1wb3J0cyhhKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgdmFyIHggPSBudWxsO1xuICBpZiAodSlcbiAgICBnKGsoZG9jdW1lbnQsIFwibGlua1tyZWw9aW1wb3J0XVwiKSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgIChhLmltcG9ydCAmJiBcImxvYWRpbmdcIiA9PT0gYS5pbXBvcnQucmVhZHlTdGF0ZSkgfHwgKGEuX19sb2FkZWQgPSAhMCk7XG4gICAgfSksXG4gICAgICAobiA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGEgPSBhLnRhcmdldDtcbiAgICAgICAgcihhKSAmJiAoYS5fX2xvYWRlZCA9ICEwKTtcbiAgICAgIH0pLFxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbiwgITApLFxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG4sICEwKTtcbiAgZWxzZSB7XG4gICAgdmFyIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLCBcImJhc2VVUklcIik7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgKCFwIHx8IHAuY29uZmlndXJhYmxlID8gTm9kZSA6IEVsZW1lbnQpLnByb3RvdHlwZSxcbiAgICAgIFwiYmFzZVVSSVwiLFxuICAgICAge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgYSA9IHIodGhpcykgPyB0aGlzIDogbSh0aGlzKTtcbiAgICAgICAgICByZXR1cm4gYVxuICAgICAgICAgICAgPyBhLmhyZWZcbiAgICAgICAgICAgIDogcCAmJiBwLmdldFxuICAgICAgICAgICAgPyBwLmdldC5jYWxsKHRoaXMpXG4gICAgICAgICAgICA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKSB8fCB3aW5kb3cubG9jYXRpb24pLmhyZWY7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgfVxuICAgICk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxMaW5rRWxlbWVudC5wcm90b3R5cGUsIFwiaW1wb3J0XCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2ltcG9ydCB8fCBudWxsO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICB9KTtcbiAgICB6KGZ1bmN0aW9uICgpIHtcbiAgICAgIHggPSBuZXcgaCgpO1xuICAgIH0pO1xuICB9XG4gIEEoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgeShcIkhUTUxJbXBvcnRzTG9hZGVkXCIsIHsgY2FuY2VsYWJsZTogITAsIGJ1YmJsZXM6ICEwLCBkZXRhaWw6IHZvaWQgMCB9KVxuICAgICk7XG4gIH0pO1xuICBxLnVzZU5hdGl2ZSA9IHU7XG4gIHEud2hlblJlYWR5ID0gQTtcbiAgcS5pbXBvcnRGb3JFbGVtZW50ID0gbTtcbiAgcS5sb2FkSW1wb3J0cyA9IGZ1bmN0aW9uIChhKSB7XG4gICAgeCAmJiB4LmxvYWRJbXBvcnRzKGEpO1xuICB9O1xufSkoKHdpbmRvdy5IVE1MSW1wb3J0cyA9IHdpbmRvdy5IVE1MSW1wb3J0cyB8fCB7fSkpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQXBDQTtBQUhBO0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQXhCQTtBQTBCQTtBQTdCQTtBQXpDQTtBQUNBO0FBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
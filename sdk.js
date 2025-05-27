/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {



function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {



function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {



function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : (0, _typeof2["default"])(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./src/html/page/version/bindCardSDK.js":
/*!**********************************************!*\
  !*** ./src/html/page/version/bindCardSDK.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var __version = "0.0.1";
var financeDomain = "https://prerfinancepro.gb.lofty.com";
var _sdk;
function isFromLofty() {
  if (document.currentScript) {
    var e = (0, formatSrc)(document.currentScript.src);
    console.log(e, "src");
    return !e || (0, validSrc)(e.origin);
  }
  return !0;
}
function o(e) {
  return /^(http(s)?):\/\//.test(e);
}
function validSrc(e) {
  return function (e) {
    var t = new URL(e);
    var n = t ? t.host : "";
    return ["lofty.com", "moatable-order.w.chime.me", "localhost:8091", "810307015.github.io",  "127.0.0.1", "127.0.0.1:8081", "localhost", "0.0.0.0"].includes(n);
    // return "lofty.com" === n || !!n.match(/\.lofty\.(com|me)$/);
  }(e);
}
function formatSrc(e) {
  if (!o(e)) {
    return null;
  }
  var t;
  try {
    t = new URL(e);
  } catch (n) {
    (t = document.createElement("a")).href = e;
  }
  var n = t.protocol,
    r = t.host,
    i = t.pathname,
    a = t.hash,
    c = /:80$/,
    s = /:443$/;
  return "http:" === n && c.test(r) ? r = r.replace(c, "") : "https:" === n && s.test(r) && (r = r.replace(s, "")), {
    host: r,
    protocol: n,
    origin: "".concat(n, "//").concat(r),
    pathname: i,
    hash: a
  };
}
function Billing() {
  return _Billing.apply(this, arguments);
}
function _Billing() {
  _Billing = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _ref2,
      publicKey,
      appName,
      res,
      _res,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, publicKey = _ref2.publicKey, appName = _ref2.appName;
          if (window.Billing && window.Billing.withCredentials) {
            console.warn("Billing SDK already initialized");
          }
          _context.prev = 2;
          _context.next = 5;
          return window.fetch("".concat(financeDomain, "/moatable-order/payment/fetchPayPreferenceByToken"), {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: publicKey,
              appName: appName
            })
          });
        case 5:
          res = _context.sent;
          _context.next = 8;
          return res.json();
        case 8:
          _res = _context.sent;
          if (!(_res && _res.status && _res.status.code === 0)) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", Object.assign(_sdk, {
            withCredentials: !0,
            gatewayType: _res.data.paymentGateway,
            publicKey: _res.data.publicKey,
            tenantCode: _res.data.tenantCode
          }));
        case 11:
          _context.next = 17;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          console.error(_context.t0);
          throw new Error("Failed to fetch billing SDK");
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 13]]);
  }));
  return _Billing.apply(this, arguments);
}
if (!isFromLofty()) {
  throw new Error("This script must be loaded from lofty.com");
} else {
  _sdk = {
    _iframe: null,
    version: __version,
    withCredentials: !1,
    gatewayType: "stripe",
    publicKey: "",
    tenantCode: "",
    init: function init() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        selector = _ref.selector,
        eventCallback = _ref.eventCallback,
        onSubmitted = _ref.onSubmitted;
      if (!_sdk.withCredentials) {
        return;
      }
      this._iframe = document.createElement("iframe");
      this._iframe.style.border = "none";
      this._iframe.style.padding = "0";
      this._iframe.style.margin = "0";
      this._iframe.style.width = "100%";
      this._iframe.style.height = "100%";
      this._iframe.src = "".concat(financeDomain, "/page/elementsInnerPayment.html?_gt=").concat(this.gatewayType, "&_sk=").concat(this.publicKey, "&_tc=").concat(encodeURIComponent(this.tenantCode));
      var element = document.querySelector(selector);
      window.addEventListener("message", function (event) {
        if (event.origin === financeDomain) {
          eventCallback(event);
          var _event$data = event.data,
            type = _event$data.type,
            value = _event$data.value;
          if (type === "success") {
            console.log("收到iframe消息:", value);
            onSubmitted(value);
          }
        }
      });
      if (element) {
        element.appendChild(_sdk._iframe);
      }
    },
    submit: function submit() {
      this._iframe.contentWindow.postMessage("submitForm", financeDomain);
    }
  };
  window.Billing = Billing;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("_html_page_version_bindCardSDK." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e6234c6a4dd7747bc045")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "payment-admin:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					// eslint-disable-next-line no-console
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"/html/page/version/bindCardSDK": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatepayment_admin"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				// eslint-disable-next-line no-console
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/html/page/version/bindCardSDK.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsMkJBQTJCO1dBQzlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixjQUFjO1dBQ2hDO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsTUFBTTtXQUNwQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLGFBQWE7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxpQkFBaUIsNEJBQTRCO1dBQzdDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IsdUNBQXVDO1dBQ3pEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLGlDQUFpQztXQUNwRDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLHVDQUF1QztXQUM3RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0Isc0JBQXNCO1dBQzVDO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWCxXQUFXO1dBQ1g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxZQUFZO1dBQ1o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsVUFBVTtXQUNWO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLG1CQUFtQix3Q0FBd0M7V0FDM0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUixRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFLElBQUk7V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0Esc0NBQXNDO1dBQ3RDO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7O1dBRUE7Ozs7O1VFNWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluLy4vc3JjL2h0bWwvcGFnZS92ZXJzaW9uL2JpbmRDYXJkU0RLLmpzIiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL3J1bnRpbWUvY3NzIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKG4sIHQsIGUsIHIsIG8sIGEsIGMpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaSA9IG5bYV0oYyksXG4gICAgICB1ID0gaS52YWx1ZTtcbiAgfSBjYXRjaCAobikge1xuICAgIHJldHVybiB2b2lkIGUobik7XG4gIH1cbiAgaS5kb25lID8gdCh1KSA6IFByb21pc2UucmVzb2x2ZSh1KS50aGVuKHIsIG8pO1xufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3Iobikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIGUgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyLCBvKSB7XG4gICAgICB2YXIgYSA9IG4uYXBwbHkodCwgZSk7XG4gICAgICBmdW5jdGlvbiBfbmV4dChuKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChhLCByLCBvLCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgbik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfdGhyb3cobikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoYSwgciwgbywgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBuKTtcbiAgICAgIH1cbiAgICAgIF9uZXh0KHZvaWQgMCk7XG4gICAgfSk7XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7XG4gIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgXCJkZWZhdWx0XCI6IGVcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIHQsXG4gICAgZSA9IHt9LFxuICAgIHIgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIG4gPSByLmhhc093blByb3BlcnR5LFxuICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHtcbiAgICAgIHRbZV0gPSByLnZhbHVlO1xuICAgIH0sXG4gICAgaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgYSA9IGkuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgdmFsdWU6IHIsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgdFtlXTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKHQpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgICAgcmV0dXJuIHRbZV0gPSByO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcCh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvcixcbiAgICAgIGEgPSBPYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxcbiAgICAgIGMgPSBuZXcgQ29udGV4dChuIHx8IFtdKTtcbiAgICByZXR1cm4gbyhhLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYylcbiAgICB9KSwgYTtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogdC5jYWxsKGUsIHIpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiB0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBlLndyYXAgPSB3cmFwO1xuICB2YXIgaCA9IFwic3VzcGVuZGVkU3RhcnRcIixcbiAgICBsID0gXCJzdXNwZW5kZWRZaWVsZFwiLFxuICAgIGYgPSBcImV4ZWN1dGluZ1wiLFxuICAgIHMgPSBcImNvbXBsZXRlZFwiLFxuICAgIHkgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBwID0ge307XG4gIGRlZmluZShwLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpO1xuICB2ICYmIHYgIT09IHIgJiYgbi5jYWxsKHYsIGEpICYmIChwID0gdik7XG4gIHZhciBnID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocCk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlZmluZSh0LCBlLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcih0LCBlKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKHIsIG8sIGksIGEpIHtcbiAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgdmFyIHUgPSBjLmFyZyxcbiAgICAgICAgICBoID0gdS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGggJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKGgpICYmIG4uY2FsbChoLCBcIl9fYXdhaXRcIikgPyBlLnJlc29sdmUoaC5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB0LCBpLCBhKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSkgOiBlLnJlc29sdmUoaCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHUudmFsdWUgPSB0LCBpKHUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhKGMuYXJnKTtcbiAgICB9XG4gICAgdmFyIHI7XG4gICAgbyh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBlKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgICAgICBpbnZva2UodCwgbiwgZSwgcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHIgPSByID8gci50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoZSwgciwgbikge1xuICAgIHZhciBvID0gaDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGksIGEpIHtcbiAgICAgIGlmIChvID09PSBmKSB0aHJvdyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAobyA9PT0gcykge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBpKSB0aHJvdyBhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB0LFxuICAgICAgICAgIGRvbmU6ICEwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IgKG4ubWV0aG9kID0gaSwgbi5hcmcgPSBhOzspIHtcbiAgICAgICAgdmFyIGMgPSBuLmRlbGVnYXRlO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIHZhciB1ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShjLCBuKTtcbiAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgaWYgKHUgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gbi5tZXRob2QpIG4uc2VudCA9IG4uX3NlbnQgPSBuLmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IG4ubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKG8gPT09IGgpIHRocm93IG8gPSBzLCBuLmFyZztcbiAgICAgICAgICBuLmRpc3BhdGNoRXhjZXB0aW9uKG4uYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IG4ubWV0aG9kICYmIG4uYWJydXB0KFwicmV0dXJuXCIsIG4uYXJnKTtcbiAgICAgICAgbyA9IGY7XG4gICAgICAgIHZhciBwID0gdHJ5Q2F0Y2goZSwgciwgbik7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSBwLnR5cGUpIHtcbiAgICAgICAgICBpZiAobyA9IG4uZG9uZSA/IHMgOiBsLCBwLmFyZyA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IG4uZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSBwLnR5cGUgJiYgKG8gPSBzLCBuLm1ldGhvZCA9IFwidGhyb3dcIiwgbi5hcmcgPSBwLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpIHtcbiAgICB2YXIgbiA9IHIubWV0aG9kLFxuICAgICAgbyA9IGUuaXRlcmF0b3Jbbl07XG4gICAgaWYgKG8gPT09IHQpIHJldHVybiByLmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBuICYmIGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKHIubWV0aG9kID0gXCJyZXR1cm5cIiwgci5hcmcgPSB0LCBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpLCBcInRocm93XCIgPT09IHIubWV0aG9kKSB8fCBcInJldHVyblwiICE9PSBuICYmIChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBuICsgXCInIG1ldGhvZFwiKSksIHk7XG4gICAgdmFyIGkgPSB0cnlDYXRjaChvLCBlLml0ZXJhdG9yLCByLmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gaS50eXBlKSByZXR1cm4gci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gaS5hcmcsIHIuZGVsZWdhdGUgPSBudWxsLCB5O1xuICAgIHZhciBhID0gaS5hcmc7XG4gICAgcmV0dXJuIGEgPyBhLmRvbmUgPyAocltlLnJlc3VsdE5hbWVdID0gYS52YWx1ZSwgci5uZXh0ID0gZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSByLm1ldGhvZCAmJiAoci5tZXRob2QgPSBcIm5leHRcIiwgci5hcmcgPSB0KSwgci5kZWxlZ2F0ZSA9IG51bGwsIHkpIDogYSA6IChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIHIuZGVsZWdhdGUgPSBudWxsLCB5KTtcbiAgfVxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkodCkge1xuICAgIHZhciBlID0ge1xuICAgICAgdHJ5TG9jOiB0WzBdXG4gICAgfTtcbiAgICAxIGluIHQgJiYgKGUuY2F0Y2hMb2MgPSB0WzFdKSwgMiBpbiB0ICYmIChlLmZpbmFsbHlMb2MgPSB0WzJdLCBlLmFmdGVyTG9jID0gdFszXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkodCkge1xuICAgIHZhciBlID0gdC5jb21wbGV0aW9uIHx8IHt9O1xuICAgIGUudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSBlLmFyZywgdC5jb21wbGV0aW9uID0gZTtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHQpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cbiAgZnVuY3Rpb24gdmFsdWVzKGUpIHtcbiAgICBpZiAoZSB8fCBcIlwiID09PSBlKSB7XG4gICAgICB2YXIgciA9IGVbYV07XG4gICAgICBpZiAocikgcmV0dXJuIHIuY2FsbChlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUubmV4dCkgcmV0dXJuIGU7XG4gICAgICBpZiAoIWlzTmFOKGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgbyA9IC0xLFxuICAgICAgICAgIGkgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgZm9yICg7ICsrbyA8IGUubGVuZ3RoOykgaWYgKG4uY2FsbChlLCBvKSkgcmV0dXJuIG5leHQudmFsdWUgPSBlW29dLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGkubmV4dCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoX3R5cGVvZihlKSArIFwiIGlzIG5vdCBpdGVyYWJsZVwiKTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIG8oZywgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIG8oR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCAmJiB0LmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWUgJiYgKGUgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGUuZGlzcGxheU5hbWUgfHwgZS5uYW1lKSk7XG4gIH0sIGUubWFyayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZih0LCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAodC5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKHQsIHUsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZyksIHQ7XG4gIH0sIGUuYXdyYXAgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiB0XG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBjLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBlLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBlLmFzeW5jID0gZnVuY3Rpb24gKHQsIHIsIG4sIG8sIGkpIHtcbiAgICB2b2lkIDAgPT09IGkgJiYgKGkgPSBQcm9taXNlKTtcbiAgICB2YXIgYSA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAodCwgciwgbiwgbyksIGkpO1xuICAgIHJldHVybiBlLmlzR2VuZXJhdG9yRnVuY3Rpb24ocikgPyBhIDogYS5uZXh0KCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuZG9uZSA/IHQudmFsdWUgOiBhLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKGcpLCBkZWZpbmUoZywgdSwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShnLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoZywgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBlLmtleXMgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gT2JqZWN0KHQpLFxuICAgICAgciA9IFtdO1xuICAgIGZvciAodmFyIG4gaW4gZSkgci5wdXNoKG4pO1xuICAgIHJldHVybiByLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyByLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIHQgPSByLnBvcCgpO1xuICAgICAgICBpZiAodCBpbiBlKSByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGUudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoZSkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB0LCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFlKSBmb3IgKHZhciByIGluIHRoaXMpIFwidFwiID09PSByLmNoYXJBdCgwKSAmJiBuLmNhbGwodGhpcywgcikgJiYgIWlzTmFOKCtyLnNsaWNlKDEpKSAmJiAodGhpc1tyXSA9IHQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGUpIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGU7XG4gICAgICB2YXIgciA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobiwgbykge1xuICAgICAgICByZXR1cm4gYS50eXBlID0gXCJ0aHJvd1wiLCBhLmFyZyA9IGUsIHIubmV4dCA9IG4sIG8gJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksICEhbztcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIG8gPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgbyA+PSAwOyAtLW8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnRyeUVudHJpZXNbb10sXG4gICAgICAgICAgYSA9IGkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBpLnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBjID0gbi5jYWxsKGksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICB1ID0gbi5jYWxsKGksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoYyAmJiB1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdSkgdGhyb3cgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoaS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHQsIGUpIHtcbiAgICAgIGZvciAodmFyIHIgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgciA+PSAwOyAtLXIpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLnRyeUVudHJpZXNbcl07XG4gICAgICAgIGlmIChvLnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgbi5jYWxsKG8sIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBvLmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgaSA9IG87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkgJiYgKFwiYnJlYWtcIiA9PT0gdCB8fCBcImNvbnRpbnVlXCIgPT09IHQpICYmIGkudHJ5TG9jIDw9IGUgJiYgZSA8PSBpLmZpbmFsbHlMb2MgJiYgKGkgPSBudWxsKTtcbiAgICAgIHZhciBhID0gaSA/IGkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIGEudHlwZSA9IHQsIGEuYXJnID0gZSwgaSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBpLmZpbmFsbHlMb2MsIHkpIDogdGhpcy5jb21wbGV0ZShhKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh0LCBlKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSB0LnR5cGUpIHRocm93IHQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gdC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gdC50eXBlID8gdGhpcy5uZXh0ID0gdC5hcmcgOiBcInJldHVyblwiID09PSB0LnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSB0LmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHQudHlwZSAmJiBlICYmICh0aGlzLm5leHQgPSBlKSwgeTtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLmZpbmFsbHlMb2MgPT09IHQpIHJldHVybiB0aGlzLmNvbXBsZXRlKHIuY29tcGxldGlvbiwgci5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkociksIHk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0KSB7XG4gICAgICBmb3IgKHZhciBlID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGUgPj0gMDsgLS1lKSB7XG4gICAgICAgIHZhciByID0gdGhpcy50cnlFbnRyaWVzW2VdO1xuICAgICAgICBpZiAoci50cnlMb2MgPT09IHQpIHtcbiAgICAgICAgICB2YXIgbiA9IHIuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBuLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gbi5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGUsIHIsIG4pIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGUpLFxuICAgICAgICByZXN1bHROYW1lOiByLFxuICAgICAgICBuZXh0TG9jOiBuXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdCksIHk7XG4gICAgfVxuICB9LCBlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIF90eXBlb2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJjb25zdCBfX3ZlcnNpb24gPSBcIjAuMC4xXCI7XG5cbmNvbnN0IGZpbmFuY2VEb21haW4gPSBfX0ZJTkFOQ0VfRE9NQUlOX187XG5sZXQgX3NkaztcbmZ1bmN0aW9uIGlzRnJvbUxvZnR5KCkge1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgICAgIHZhciBlID0gKDAsIGZvcm1hdFNyYykoZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLCBcInNyY1wiKTtcbiAgICAgICAgcmV0dXJuICFlIHx8ICgwLCB2YWxpZFNyYykoZS5vcmlnaW4pO1xuICAgIH1cbiAgICByZXR1cm4gITA7XG59XG5cbmZ1bmN0aW9uIG8oZSkge1xuICAgIHJldHVybiAvXihodHRwKHMpPyk6XFwvXFwvLy50ZXN0KGUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZFNyYyhlKSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCB0ID0gbmV3IFVSTChlKTtcbiAgICAgICAgY29uc3QgbiA9IHQgPyB0Lmhvc3QgOiBcIlwiO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgXCJsb2Z0eS5jb21cIixcbiAgICAgICAgICAgIFwibW9hdGFibGUtb3JkZXIudy5jaGltZS5tZVwiLFxuICAgICAgICAgICAgXCJsb2NhbGhvc3Q6ODA5MVwiLFxuICAgICAgICAgICAgXCIxMjcuMC4wLjFcIixcbiAgICAgICAgICAgIFwiMTI3LjAuMC4xOjgwODFcIixcbiAgICAgICAgICAgIFwibG9jYWxob3N0XCIsXG4gICAgICAgICAgICBcIjAuMC4wLjBcIlxuICAgICAgICBdLmluY2x1ZGVzKG4pO1xuICAgICAgICAvLyByZXR1cm4gXCJsb2Z0eS5jb21cIiA9PT0gbiB8fCAhIW4ubWF0Y2goL1xcLmxvZnR5XFwuKGNvbXxtZSkkLyk7XG4gICAgfSkoZSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFNyYyhlKSB7XG4gICAgaWYgKCFvKGUpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgdDtcbiAgICB0cnkge1xuICAgICAgICB0ID0gbmV3IFVSTChlKTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgICAgICh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikpLmhyZWYgPSBlO1xuICAgIH1cbiAgICB2YXIgbiA9IHQucHJvdG9jb2wsXG4gICAgICAgIHIgPSB0Lmhvc3QsXG4gICAgICAgIGkgPSB0LnBhdGhuYW1lLFxuICAgICAgICBhID0gdC5oYXNoLFxuICAgICAgICBjID0gLzo4MCQvLFxuICAgICAgICBzID0gLzo0NDMkLztcbiAgICByZXR1cm4gKFxuICAgICAgICBcImh0dHA6XCIgPT09IG4gJiYgYy50ZXN0KHIpXG4gICAgICAgICAgICA/IChyID0gci5yZXBsYWNlKGMsIFwiXCIpKVxuICAgICAgICAgICAgOiBcImh0dHBzOlwiID09PSBuICYmIHMudGVzdChyKSAmJiAociA9IHIucmVwbGFjZShzLCBcIlwiKSksXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhvc3Q6IHIsXG4gICAgICAgICAgICBwcm90b2NvbDogbixcbiAgICAgICAgICAgIG9yaWdpbjogXCJcIi5jb25jYXQobiwgXCIvL1wiKS5jb25jYXQociksXG4gICAgICAgICAgICBwYXRobmFtZTogaSxcbiAgICAgICAgICAgIGhhc2g6IGFcbiAgICAgICAgfVxuICAgICk7XG59XG5hc3luYyBmdW5jdGlvbiBCaWxsaW5nKHsgcHVibGljS2V5LCBhcHBOYW1lIH0gPSB7fSkge1xuICAgIGlmICh3aW5kb3cuQmlsbGluZyAmJiB3aW5kb3cuQmlsbGluZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiQmlsbGluZyBTREsgYWxyZWFkeSBpbml0aWFsaXplZFwiKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2luZG93LmZldGNoKGAke2ZpbmFuY2VEb21haW59L21vYXRhYmxlLW9yZGVyL3BheW1lbnQvZmV0Y2hQYXlQcmVmZXJlbmNlQnlUb2tlbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0b2tlbjogcHVibGljS2V5LFxuICAgICAgICAgICAgICAgIGFwcE5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IF9yZXMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgIGlmIChfcmVzICYmIF9yZXMuc3RhdHVzICYmIF9yZXMuc3RhdHVzLmNvZGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKF9zZGssIHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6ICEwLFxuICAgICAgICAgICAgICAgIGdhdGV3YXlUeXBlOiBfcmVzLmRhdGEucGF5bWVudEdhdGV3YXksXG4gICAgICAgICAgICAgICAgcHVibGljS2V5OiBfcmVzLmRhdGEucHVibGljS2V5LFxuICAgICAgICAgICAgICAgIHRlbmFudENvZGU6IF9yZXMuZGF0YS50ZW5hbnRDb2RlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBiaWxsaW5nIFNES1wiKTtcbiAgICB9XG59XG5cbmlmICghaXNGcm9tTG9mdHkoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IG11c3QgYmUgbG9hZGVkIGZyb20gbG9mdHkuY29tXCIpO1xufSBlbHNlIHtcbiAgICBfc2RrID0ge1xuICAgICAgICBfaWZyYW1lOiBudWxsLFxuICAgICAgICB2ZXJzaW9uOiBfX3ZlcnNpb24sXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogITEsXG4gICAgICAgIGdhdGV3YXlUeXBlOiBcInN0cmlwZVwiLFxuICAgICAgICBwdWJsaWNLZXk6IFwiXCIsXG4gICAgICAgIHRlbmFudENvZGU6IFwiXCIsXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh7IHNlbGVjdG9yLCBldmVudENhbGxiYWNrLCBvblN1Ym1pdHRlZCB9ID0ge30pIHtcbiAgICAgICAgICAgIGlmICghX3Nkay53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICAgICAgdGhpcy5faWZyYW1lLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGhpcy5faWZyYW1lLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgdGhpcy5faWZyYW1lLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgICAgIFxuICAgICAgICAgICAgdGhpcy5faWZyYW1lLnNyYyA9IGAke2ZpbmFuY2VEb21haW59L3BhZ2UvZWxlbWVudHNJbm5lclBheW1lbnQuaHRtbD9fZ3Q9JHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhdGV3YXlUeXBlXG4gICAgICAgICAgICB9Jl9zaz0ke3RoaXMucHVibGljS2V5fSZfdGM9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy50ZW5hbnRDb2RlKX1gO1xuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChldmVudC5vcmlnaW4gPT09IGZpbmFuY2VEb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDYWxsYmFjayhldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlLbliLBpZnJhbWXmtojmga86XCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0dGVkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKF9zZGsuX2lmcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5faWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoXCJzdWJtaXRGb3JtXCIsIGZpbmFuY2VEb21haW4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5CaWxsaW5nID0gQmlsbGluZztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIl9odG1sX3BhZ2VfdmVyc2lvbl9iaW5kQ2FyZFNESy5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU2MjM0YzZhNGRkNzc0N2JjMDQ1XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInBheW1lbnQtYWRtaW46XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCJ2YXIgY3VycmVudE1vZHVsZURhdGEgPSB7fTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuXG4vLyBtb2R1bGUgYW5kIHJlcXVpcmUgY3JlYXRpb25cbnZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG52YXIgY3VycmVudFBhcmVudHMgPSBbXTtcblxuLy8gc3RhdHVzXG52YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG52YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4vLyB3aGlsZSBkb3dubG9hZGluZ1xudmFyIGJsb2NraW5nUHJvbWlzZXMgPSAwO1xudmFyIGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cbi8vIFRoZSB1cGRhdGUgaW5mb1xudmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xudmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkLCBmZXRjaFByaW9yaXR5KSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkLCBmZXRjaFByaW9yaXR5KSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly8gaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihmdW5jdGlvbiAoKSB7fSk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSwgW10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcblx0XHRcdFx0XHRjdXJyZW50U3RhdHVzICtcblx0XHRcdFx0XHRcIilcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsInZhciBjcmVhdGVTdHlsZXNoZWV0ID0gKGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpID0+IHtcblx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdHZhciBvbkxpbmtDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcy5cblx0XHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG51bGw7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJykge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0dmFyIHJlYWxIcmVmID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5ocmVmIHx8IGZ1bGxocmVmO1xuXHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZWFsSHJlZiArIFwiKVwiKTtcblx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcblx0XHRcdGVyci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0ZXJyLnJlcXVlc3QgPSByZWFsSHJlZjtcblx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuXHRcdFx0cmVqZWN0KGVycik7XG5cdFx0fVxuXHR9XG5cdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gb25MaW5rQ29tcGxldGU7XG5cdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG5cdHJldHVybiBsaW5rVGFnO1xufTtcbnZhciBmaW5kU3R5bGVzaGVldCA9IChocmVmLCBmdWxsaHJlZikgPT4ge1xuXHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gdGFnO1xuXHR9XG5cdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuXHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHRhZztcblx0fVxufTtcbnZhciBsb2FkU3R5bGVzaGVldCA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0aWYoZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuLy8gbm8gY2h1bmsgbG9hZGluZ1xuXG52YXIgb2xkVGFncyA9IFtdO1xudmFyIG5ld1RhZ3MgPSBbXTtcbnZhciBhcHBseUhhbmRsZXIgPSAob3B0aW9ucykgPT4ge1xuXHRyZXR1cm4geyBkaXNwb3NlOiAoKSA9PiB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG9sZFRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBvbGRUYWcgPSBvbGRUYWdzW2ldO1xuXHRcdFx0aWYob2xkVGFnLnBhcmVudE5vZGUpIG9sZFRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZFRhZyk7XG5cdFx0fVxuXHRcdG9sZFRhZ3MubGVuZ3RoID0gMDtcblx0fSwgYXBwbHk6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbmV3VGFncy5sZW5ndGg7IGkrKykgbmV3VGFnc1tpXS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0XHRuZXdUYWdzLmxlbmd0aCA9IDA7XG5cdH0gfTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5taW5pQ3NzID0gKGNodW5rSWRzLCByZW1vdmVkQ2h1bmtzLCByZW1vdmVkTW9kdWxlcywgcHJvbWlzZXMsIGFwcGx5SGFuZGxlcnMsIHVwZGF0ZWRNb2R1bGVzTGlzdCkgPT4ge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y2h1bmtJZHMuZm9yRWFjaCgoY2h1bmtJZCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdHZhciBvbGRUYWcgPSBmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZik7XG5cdFx0aWYoIW9sZFRhZykgcmV0dXJuO1xuXHRcdHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dmFyIHRhZyA9IGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsICgpID0+IHtcblx0XHRcdFx0dGFnLmFzID0gXCJzdHlsZVwiO1xuXHRcdFx0XHR0YWcucmVsID0gXCJwcmVsb2FkXCI7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHRvbGRUYWdzLnB1c2gob2xkVGFnKTtcblx0XHRcdG5ld1RhZ3MucHVzaCh0YWcpO1xuXHRcdH0pKTtcblx0fSk7XG59IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcIi9odG1sL3BhZ2UvdmVyc2lvbi9iaW5kQ2FyZFNES1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QgPSB1cGRhdGVkTW9kdWxlc0xpc3Q7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlcGF5bWVudF9hZG1pblwiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdCA9IG5ld01vZHVsZUZhY3Rvcnlcblx0XHRcdFx0PyBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpXG5cdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdFx0fTtcblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIxKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMSxcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMSk7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaHRtbC9wYWdlL3ZlcnNpb24vYmluZENhcmRTREsuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiYXN5bmNHZW5lcmF0b3JTdGVwIiwibiIsInQiLCJlIiwiciIsIm8iLCJhIiwiYyIsImkiLCJ1IiwidmFsdWUiLCJkb25lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX3R5cGVvZiIsInJlcXVpcmUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl9fYXdhaXQiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJydW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJnbG9iYWxUaGlzIiwiX3R5cGVvZjIiLCJGdW5jdGlvbiIsIl9fdmVyc2lvbiIsImZpbmFuY2VEb21haW4iLCJfX0ZJTkFOQ0VfRE9NQUlOX18iLCJfc2RrIiwiaXNGcm9tTG9mdHkiLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJmb3JtYXRTcmMiLCJzcmMiLCJjb25zb2xlIiwibG9nIiwidmFsaWRTcmMiLCJvcmlnaW4iLCJ0ZXN0IiwiVVJMIiwiaG9zdCIsImluY2x1ZGVzIiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJwcm90b2NvbCIsInBhdGhuYW1lIiwiaGFzaCIsInJlcGxhY2UiLCJjb25jYXQiLCJCaWxsaW5nIiwiX0JpbGxpbmciLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJfY2FsbGVlIiwiX3JlZjIiLCJwdWJsaWNLZXkiLCJhcHBOYW1lIiwicmVzIiwiX3JlcyIsIl9hcmdzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInVuZGVmaW5lZCIsIndpbmRvdyIsIndpdGhDcmVkZW50aWFscyIsIndhcm4iLCJmZXRjaCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwianNvbiIsInN0YXR1cyIsImNvZGUiLCJhc3NpZ24iLCJnYXRld2F5VHlwZSIsImRhdGEiLCJwYXltZW50R2F0ZXdheSIsInRlbmFudENvZGUiLCJ0MCIsImVycm9yIiwiX2lmcmFtZSIsInZlcnNpb24iLCJpbml0IiwiX3JlZiIsInNlbGVjdG9yIiwiZXZlbnRDYWxsYmFjayIsIm9uU3VibWl0dGVkIiwic3R5bGUiLCJib3JkZXIiLCJwYWRkaW5nIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIl9ldmVudCRkYXRhIiwiYXBwZW5kQ2hpbGQiLCJzdWJtaXQiLCJjb250ZW50V2luZG93IiwicG9zdE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9

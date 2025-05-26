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

/***/ "./src/js/common-module/bindCardSDK.js":
/*!*********************************************!*\
  !*** ./src/js/common-module/bindCardSDK.js ***!
  \*********************************************/
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
      this._iframe.src = "".concat(financeDomain, "/html/page/elementsInnerPayment.html?_gt=").concat(this.gatewayType, "&_sk=").concat(this.publicKey, "&_tc=").concat(encodeURIComponent(this.tenantCode));
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
/******/ 		__webpack_require__.hmrF = () => ("pages_bindCardSDK." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e8d00b2b516fbf5a3a9e")
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
/******/ 			"pages/bindCardSDK": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/common-module/bindCardSDK.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsMkJBQTJCO1dBQzlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixjQUFjO1dBQ2hDO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsTUFBTTtXQUNwQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLGFBQWE7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxpQkFBaUIsNEJBQTRCO1dBQzdDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IsdUNBQXVDO1dBQ3pEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLGlDQUFpQztXQUNwRDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLHVDQUF1QztXQUM3RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0Isc0JBQXNCO1dBQzVDO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWCxXQUFXO1dBQ1g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxZQUFZO1dBQ1o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsVUFBVTtXQUNWO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLG1CQUFtQix3Q0FBd0M7V0FDM0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUixRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFLElBQUk7V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0Esc0NBQXNDO1dBQ3RDO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7O1dBRUE7Ozs7O1VFNWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluLy4vc3JjL2pzL2NvbW1vbi1tb2R1bGUvYmluZENhcmRTREsuanMiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vcGF5bWVudC1hZG1pbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluL3dlYnBhY2svcnVudGltZS9jc3MgbG9hZGluZyIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BheW1lbnQtYWRtaW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wYXltZW50LWFkbWluL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAobiwgdCwgZSwgciwgbywgYSwgYykge1xuICB0cnkge1xuICAgIHZhciBpID0gblthXShjKSxcbiAgICAgIHUgPSBpLnZhbHVlO1xuICB9IGNhdGNoIChuKSB7XG4gICAgcmV0dXJuIHZvaWQgZShuKTtcbiAgfVxuICBpLmRvbmUgPyB0KHUpIDogUHJvbWlzZS5yZXNvbHZlKHUpLnRoZW4ociwgbyk7XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgZSA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHIsIG8pIHtcbiAgICAgIHZhciBhID0gbi5hcHBseSh0LCBlKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KG4pIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGEsIHIsIG8sIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCBuKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhuKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChhLCByLCBvLCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIG4pO1xuICAgICAgfVxuICAgICAgX25leHQodm9pZCAwKTtcbiAgICB9KTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3IsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHtcbiAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICBcImRlZmF1bHRcIjogZVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgdCxcbiAgICBlID0ge30sXG4gICAgciA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgbiA9IHIuaGFzT3duUHJvcGVydHksXG4gICAgbyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAodCwgZSwgcikge1xuICAgICAgdFtlXSA9IHIudmFsdWU7XG4gICAgfSxcbiAgICBpID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSxcbiAgICBhID0gaS5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBjID0gaS5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdSA9IGkudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZSh0LCBlLCByKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBlLCB7XG4gICAgICB2YWx1ZTogcixcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIHdyaXRhYmxlOiAhMFxuICAgIH0pLCB0W2VdO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAodCkge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZSh0LCBlLCByKSB7XG4gICAgICByZXR1cm4gdFtlXSA9IHI7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKHQsIGUsIHIsIG4pIHtcbiAgICB2YXIgaSA9IGUgJiYgZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBlIDogR2VuZXJhdG9yLFxuICAgICAgYSA9IE9iamVjdC5jcmVhdGUoaS5wcm90b3R5cGUpLFxuICAgICAgYyA9IG5ldyBDb250ZXh0KG4gfHwgW10pO1xuICAgIHJldHVybiBvKGEsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZCh0LCByLCBjKVxuICAgIH0pLCBhO1xuICB9XG4gIGZ1bmN0aW9uIHRyeUNhdGNoKHQsIGUsIHIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiB0LmNhbGwoZSwgcilcbiAgICAgIH07XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IHRcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGUud3JhcCA9IHdyYXA7XG4gIHZhciBoID0gXCJzdXNwZW5kZWRTdGFydFwiLFxuICAgIGwgPSBcInN1c3BlbmRlZFlpZWxkXCIsXG4gICAgZiA9IFwiZXhlY3V0aW5nXCIsXG4gICAgcyA9IFwiY29tcGxldGVkXCIsXG4gICAgeSA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIHAgPSB7fTtcbiAgZGVmaW5lKHAsIGEsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBkID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIHYgPSBkICYmIGQoZCh2YWx1ZXMoW10pKSk7XG4gIHYgJiYgdiAhPT0gciAmJiBuLmNhbGwodiwgYSkgJiYgKHAgPSB2KTtcbiAgdmFyIGcgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHQpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZGVmaW5lKHQsIGUsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UoZSwgdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UociwgbywgaSwgYSkge1xuICAgICAgdmFyIGMgPSB0cnlDYXRjaCh0W3JdLCB0LCBvKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IGMudHlwZSkge1xuICAgICAgICB2YXIgdSA9IGMuYXJnLFxuICAgICAgICAgIGggPSB1LnZhbHVlO1xuICAgICAgICByZXR1cm4gaCAmJiBcIm9iamVjdFwiID09IF90eXBlb2YoaCkgJiYgbi5jYWxsKGgsIFwiX19hd2FpdFwiKSA/IGUucmVzb2x2ZShoLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHQsIGksIGEpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIHQsIGksIGEpO1xuICAgICAgICB9KSA6IGUucmVzb2x2ZShoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdS52YWx1ZSA9IHQsIGkodSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIHQsIGksIGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGEoYy5hcmcpO1xuICAgIH1cbiAgICB2YXIgcjtcbiAgICBvKHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCwgbikge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IGUoZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgICAgICAgIGludm9rZSh0LCBuLCBlLCByKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gciA9IHIgPyByLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChlLCByLCBuKSB7XG4gICAgdmFyIG8gPSBoO1xuICAgIHJldHVybiBmdW5jdGlvbiAoaSwgYSkge1xuICAgICAgaWYgKG8gPT09IGYpIHRocm93IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIGlmIChvID09PSBzKSB7XG4gICAgICAgIGlmIChcInRocm93XCIgPT09IGkpIHRocm93IGE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHQsXG4gICAgICAgICAgZG9uZTogITBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGZvciAobi5tZXRob2QgPSBpLCBuLmFyZyA9IGE7Oykge1xuICAgICAgICB2YXIgYyA9IG4uZGVsZWdhdGU7XG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgdmFyIHUgPSBtYXliZUludm9rZURlbGVnYXRlKGMsIG4pO1xuICAgICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgICBpZiAodSA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gdTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBuLm1ldGhvZCkgbi5zZW50ID0gbi5fc2VudCA9IG4uYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gbi5tZXRob2QpIHtcbiAgICAgICAgICBpZiAobyA9PT0gaCkgdGhyb3cgbyA9IHMsIG4uYXJnO1xuICAgICAgICAgIG4uZGlzcGF0Y2hFeGNlcHRpb24obi5hcmcpO1xuICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gbi5tZXRob2QgJiYgbi5hYnJ1cHQoXCJyZXR1cm5cIiwgbi5hcmcpO1xuICAgICAgICBvID0gZjtcbiAgICAgICAgdmFyIHAgPSB0cnlDYXRjaChlLCByLCBuKTtcbiAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHAudHlwZSkge1xuICAgICAgICAgIGlmIChvID0gbi5kb25lID8gcyA6IGwsIHAuYXJnID09PSB5KSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHAuYXJnLFxuICAgICAgICAgICAgZG9uZTogbi5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInRocm93XCIgPT09IHAudHlwZSAmJiAobyA9IHMsIG4ubWV0aG9kID0gXCJ0aHJvd1wiLCBuLmFyZyA9IHAuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZSwgcikge1xuICAgIHZhciBuID0gci5tZXRob2QsXG4gICAgICBvID0gZS5pdGVyYXRvcltuXTtcbiAgICBpZiAobyA9PT0gdCkgcmV0dXJuIHIuZGVsZWdhdGUgPSBudWxsLCBcInRocm93XCIgPT09IG4gJiYgZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoci5tZXRob2QgPSBcInJldHVyblwiLCByLmFyZyA9IHQsIG1heWJlSW52b2tlRGVsZWdhdGUoZSwgciksIFwidGhyb3dcIiA9PT0gci5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG4gJiYgKHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG4gKyBcIicgbWV0aG9kXCIpKSwgeTtcbiAgICB2YXIgaSA9IHRyeUNhdGNoKG8sIGUuaXRlcmF0b3IsIHIuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSBpLnR5cGUpIHJldHVybiByLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBpLmFyZywgci5kZWxlZ2F0ZSA9IG51bGwsIHk7XG4gICAgdmFyIGEgPSBpLmFyZztcbiAgICByZXR1cm4gYSA/IGEuZG9uZSA/IChyW2UucmVzdWx0TmFtZV0gPSBhLnZhbHVlLCByLm5leHQgPSBlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IHIubWV0aG9kICYmIChyLm1ldGhvZCA9IFwibmV4dFwiLCByLmFyZyA9IHQpLCByLmRlbGVnYXRlID0gbnVsbCwgeSkgOiBhIDogKHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgci5kZWxlZ2F0ZSA9IG51bGwsIHkpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeSh0KSB7XG4gICAgdmFyIGUgPSB7XG4gICAgICB0cnlMb2M6IHRbMF1cbiAgICB9O1xuICAgIDEgaW4gdCAmJiAoZS5jYXRjaExvYyA9IHRbMV0pLCAyIGluIHQgJiYgKGUuZmluYWxseUxvYyA9IHRbMl0sIGUuYWZ0ZXJMb2MgPSB0WzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeSh0KSB7XG4gICAgdmFyIGUgPSB0LmNvbXBsZXRpb24gfHwge307XG4gICAgZS50eXBlID0gXCJub3JtYWxcIiwgZGVsZXRlIGUuYXJnLCB0LmNvbXBsZXRpb24gPSBlO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHQuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoZSkge1xuICAgIGlmIChlIHx8IFwiXCIgPT09IGUpIHtcbiAgICAgIHZhciByID0gZVthXTtcbiAgICAgIGlmIChyKSByZXR1cm4gci5jYWxsKGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5uZXh0KSByZXR1cm4gZTtcbiAgICAgIGlmICghaXNOYU4oZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBvID0gLTEsXG4gICAgICAgICAgaSA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytvIDwgZS5sZW5ndGg7KSBpZiAobi5jYWxsKGUsIG8pKSByZXR1cm4gbmV4dC52YWx1ZSA9IGVbb10sIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB0LCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaS5uZXh0ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihfdHlwZW9mKGUpICsgXCIgaXMgbm90IGl0ZXJhYmxlXCIpO1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgbyhnLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgbyhHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB1LCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBlLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ICYmIHQuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhZSAmJiAoZSA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoZS5kaXNwbGF5TmFtZSB8fCBlLm5hbWUpKTtcbiAgfSwgZS5tYXJrID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHQsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6ICh0Ll9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUodCwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShnKSwgdDtcbiAgfSwgZS5hd3JhcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IHRcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGMsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGUuYXN5bmMgPSBmdW5jdGlvbiAodCwgciwgbiwgbywgaSkge1xuICAgIHZvaWQgMCA9PT0gaSAmJiAoaSA9IFByb21pc2UpO1xuICAgIHZhciBhID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcCh0LCByLCBuLCBvKSwgaSk7XG4gICAgcmV0dXJuIGUuaXNHZW5lcmF0b3JGdW5jdGlvbihyKSA/IGEgOiBhLm5leHQoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5kb25lID8gdC52YWx1ZSA6IGEubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoZyksIGRlZmluZShnLCB1LCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKGcsIGEsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShnLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGUua2V5cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSBPYmplY3QodCksXG4gICAgICByID0gW107XG4gICAgZm9yICh2YXIgbiBpbiBlKSByLnB1c2gobik7XG4gICAgcmV0dXJuIHIucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IHIubGVuZ3RoOykge1xuICAgICAgICB2YXIgdCA9IHIucG9wKCk7XG4gICAgICAgIGlmICh0IGluIGUpIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZS52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChlKSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB0LCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIWUpIGZvciAodmFyIHIgaW4gdGhpcykgXCJ0XCIgPT09IHIuY2hhckF0KDApICYmIG4uY2FsbCh0aGlzLCByKSAmJiAhaXNOYU4oK3Iuc2xpY2UoMSkpICYmICh0aGlzW3JdID0gdCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgdCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gdC50eXBlKSB0aHJvdyB0LmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZSkge1xuICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZTtcbiAgICAgIHZhciByID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShuLCBvKSB7XG4gICAgICAgIHJldHVybiBhLnR5cGUgPSBcInRocm93XCIsIGEuYXJnID0gZSwgci5uZXh0ID0gbiwgbyAmJiAoci5tZXRob2QgPSBcIm5leHRcIiwgci5hcmcgPSB0KSwgISFvO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgbyA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBvID49IDA7IC0tbykge1xuICAgICAgICB2YXIgaSA9IHRoaXMudHJ5RW50cmllc1tvXSxcbiAgICAgICAgICBhID0gaS5jb21wbGV0aW9uO1xuICAgICAgICBpZiAoXCJyb290XCIgPT09IGkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICBpZiAoaS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGMgPSBuLmNhbGwoaSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgIHUgPSBuLmNhbGwoaSwgXCJmaW5hbGx5TG9jXCIpO1xuICAgICAgICAgIGlmIChjICYmIHUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoaS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1KSB0aHJvdyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShpLmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodCwgZSkge1xuICAgICAgZm9yICh2YXIgciA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyByID49IDA7IC0tcikge1xuICAgICAgICB2YXIgbyA9IHRoaXMudHJ5RW50cmllc1tyXTtcbiAgICAgICAgaWYgKG8udHJ5TG9jIDw9IHRoaXMucHJldiAmJiBuLmNhbGwobywgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IG8uZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBpID0gbztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaSAmJiAoXCJicmVha1wiID09PSB0IHx8IFwiY29udGludWVcIiA9PT0gdCkgJiYgaS50cnlMb2MgPD0gZSAmJiBlIDw9IGkuZmluYWxseUxvYyAmJiAoaSA9IG51bGwpO1xuICAgICAgdmFyIGEgPSBpID8gaS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gYS50eXBlID0gdCwgYS5hcmcgPSBlLCBpID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGkuZmluYWxseUxvYywgeSkgOiB0aGlzLmNvbXBsZXRlKGEpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHQsIGUpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSB0LnR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0LnR5cGUgPyB0aGlzLm5leHQgPSB0LmFyZyA6IFwicmV0dXJuXCIgPT09IHQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gdC50eXBlICYmIGUgJiYgKHRoaXMubmV4dCA9IGUpLCB5O1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2godCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIuZmluYWxseUxvYyA9PT0gdCkgcmV0dXJuIHRoaXMuY29tcGxldGUoci5jb21wbGV0aW9uLCByLmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShyKSwgeTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLnRyeUxvYyA9PT0gdCkge1xuICAgICAgICAgIHZhciBuID0gci5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IG4udHlwZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBuLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkocik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoZSwgciwgbikge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHIsXG4gICAgICAgIG5leHRMb2M6IG5cbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB0KSwgeTtcbiAgICB9XG4gIH0sIGU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgX3R5cGVvZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImNvbnN0IF9fdmVyc2lvbiA9IFwiMC4wLjFcIjtcblxuY29uc3QgZmluYW5jZURvbWFpbiA9IF9fRklOQU5DRV9ET01BSU5fXztcbmxldCBfc2RrO1xuZnVuY3Rpb24gaXNGcm9tTG9mdHkoKSB7XG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgICAgdmFyIGUgPSAoMCwgZm9ybWF0U3JjKShkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUsIFwic3JjXCIpO1xuICAgICAgICByZXR1cm4gIWUgfHwgKDAsIHZhbGlkU3JjKShlLm9yaWdpbik7XG4gICAgfVxuICAgIHJldHVybiAhMDtcbn1cblxuZnVuY3Rpb24gbyhlKSB7XG4gICAgcmV0dXJuIC9eKGh0dHAocyk/KTpcXC9cXC8vLnRlc3QoZSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkU3JjKGUpIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVVJMKGUpO1xuICAgICAgICBjb25zdCBuID0gdCA/IHQuaG9zdCA6IFwiXCI7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBcImxvZnR5LmNvbVwiLFxuICAgICAgICAgICAgXCJtb2F0YWJsZS1vcmRlci53LmNoaW1lLm1lXCIsXG4gICAgICAgICAgICBcImxvY2FsaG9zdDo4MDkxXCIsXG4gICAgICAgICAgICBcIjEyNy4wLjAuMVwiLFxuICAgICAgICAgICAgXCIxMjcuMC4wLjE6ODA4MVwiLFxuICAgICAgICAgICAgXCJsb2NhbGhvc3RcIixcbiAgICAgICAgICAgIFwiMC4wLjAuMFwiXG4gICAgICAgIF0uaW5jbHVkZXMobik7XG4gICAgICAgIC8vIHJldHVybiBcImxvZnR5LmNvbVwiID09PSBuIHx8ICEhbi5tYXRjaCgvXFwubG9mdHlcXC4oY29tfG1lKSQvKTtcbiAgICB9KShlKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0U3JjKGUpIHtcbiAgICBpZiAoIW8oZSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciB0O1xuICAgIHRyeSB7XG4gICAgICAgIHQgPSBuZXcgVVJMKGUpO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICAgICAgKHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSkuaHJlZiA9IGU7XG4gICAgfVxuICAgIHZhciBuID0gdC5wcm90b2NvbCxcbiAgICAgICAgciA9IHQuaG9zdCxcbiAgICAgICAgaSA9IHQucGF0aG5hbWUsXG4gICAgICAgIGEgPSB0Lmhhc2gsXG4gICAgICAgIGMgPSAvOjgwJC8sXG4gICAgICAgIHMgPSAvOjQ0MyQvO1xuICAgIHJldHVybiAoXG4gICAgICAgIFwiaHR0cDpcIiA9PT0gbiAmJiBjLnRlc3QocilcbiAgICAgICAgICAgID8gKHIgPSByLnJlcGxhY2UoYywgXCJcIikpXG4gICAgICAgICAgICA6IFwiaHR0cHM6XCIgPT09IG4gJiYgcy50ZXN0KHIpICYmIChyID0gci5yZXBsYWNlKHMsIFwiXCIpKSxcbiAgICAgICAge1xuICAgICAgICAgICAgaG9zdDogcixcbiAgICAgICAgICAgIHByb3RvY29sOiBuLFxuICAgICAgICAgICAgb3JpZ2luOiBcIlwiLmNvbmNhdChuLCBcIi8vXCIpLmNvbmNhdChyKSxcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpLFxuICAgICAgICAgICAgaGFzaDogYVxuICAgICAgICB9XG4gICAgKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIEJpbGxpbmcoeyBwdWJsaWNLZXksIGFwcE5hbWUgfSA9IHt9KSB7XG4gICAgaWYgKHdpbmRvdy5CaWxsaW5nICYmIHdpbmRvdy5CaWxsaW5nLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJCaWxsaW5nIFNESyBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYCR7ZmluYW5jZURvbWFpbn0vbW9hdGFibGUtb3JkZXIvcGF5bWVudC9mZXRjaFBheVByZWZlcmVuY2VCeVRva2VuYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHRva2VuOiBwdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgYXBwTmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnN0IHJlYWRlciA9IHJlcy5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgICAvLyBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIik7XG5cbiAgICAgICAgLy8gbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIC8vIGxldCBkb25lID0gZmFsc2U7XG5cbiAgICAgICAgLy8gd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIC8vICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAvLyAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZTogZG9uZVJlYWRpbmcgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIC8vICAgICBkb25lID0gZG9uZVJlYWRpbmc7XG4gICAgICAgIC8vICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICByZXN1bHQgKz0gZGVjb2Rlci5kZWNvZGUodmFsdWUsIHsgc3RyZWFtOiAhZG9uZSB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGNvbnN0IF9yZXMgPSBKU09OLnBhcnNlKHJlc3VsdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6Kej5p6Q5ZCO55qE5paH5pysOlwiLCBfcmVzKTtcblxuICAgICAgICBjb25zdCBfcmVzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICBpZiAoX3JlcyAmJiBfcmVzLnN0YXR1cyAmJiBfcmVzLnN0YXR1cy5jb2RlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihfc2RrLCB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiAhMCxcbiAgICAgICAgICAgICAgICBnYXRld2F5VHlwZTogX3Jlcy5kYXRhLnBheW1lbnRHYXRld2F5LFxuICAgICAgICAgICAgICAgIHB1YmxpY0tleTogX3Jlcy5kYXRhLnB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICB0ZW5hbnRDb2RlOiBfcmVzLmRhdGEudGVuYW50Q29kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYmlsbGluZyBTREtcIik7XG4gICAgfVxufVxuXG5pZiAoIWlzRnJvbUxvZnR5KCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBtdXN0IGJlIGxvYWRlZCBmcm9tIGxvZnR5LmNvbVwiKTtcbn0gZWxzZSB7XG4gICAgX3NkayA9IHtcbiAgICAgICAgX2lmcmFtZTogbnVsbCxcbiAgICAgICAgdmVyc2lvbjogX192ZXJzaW9uLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6ICExLFxuICAgICAgICBnYXRld2F5VHlwZTogXCJzdHJpcGVcIixcbiAgICAgICAgcHVibGljS2V5OiBcIlwiLFxuICAgICAgICB0ZW5hbnRDb2RlOiBcIlwiLFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoeyBzZWxlY3RvciwgZXZlbnRDYWxsYmFjaywgb25TdWJtaXR0ZWQgfSA9IHt9KSB7XG4gICAgICAgICAgICBpZiAoIV9zZGsud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG4gICAgICAgICAgICB0aGlzLl9pZnJhbWUuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgICAgICAgICB0aGlzLl9pZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zcmMgPSBgJHtmaW5hbmNlRG9tYWlufS9odG1sL3BhZ2UvZWxlbWVudHNJbm5lclBheW1lbnQuaHRtbD9fZ3Q9JHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhdGV3YXlUeXBlXG4gICAgICAgICAgICB9Jl9zaz0ke3RoaXMucHVibGljS2V5fSZfdGM9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy50ZW5hbnRDb2RlKX1gO1xuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChldmVudC5vcmlnaW4gPT09IGZpbmFuY2VEb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDYWxsYmFjayhldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlLbliLBpZnJhbWXmtojmga86XCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0dGVkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKF9zZGsuX2lmcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5faWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoXCJzdWJtaXRGb3JtXCIsIGZpbmFuY2VEb21haW4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5CaWxsaW5nID0gQmlsbGluZztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcInBhZ2VzX2JpbmRDYXJkU0RLLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZThkMDBiMmI1MTZmYmY1YTNhOWVcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwicGF5bWVudC1hZG1pbjpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQsIGZldGNoUHJpb3JpdHkpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQsIGZldGNoUHJpb3JpdHkpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvLyBpbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbn1cblxuZnVuY3Rpb24gdW5ibG9jaygpIHtcblx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcblx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGlzdFtpXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0LyogZmFsbHRocm91Z2ggKi9cblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcysrO1xuXHRcdFx0cHJvbWlzZS50aGVuKHVuYmxvY2ssIHVuYmxvY2spO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSByZXR1cm4gZm4oKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKGZuKCkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LCBbXSlcblx0XHRcdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzIChzdGF0ZTogXCIgK1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0dXMgK1xuXHRcdFx0XHRcdFwiKVwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImFib3J0XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHZhciBkaXNwb3NlUHJvbWlzZSA9IHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0dmFyIGFwcGx5UHJvbWlzZSA9IHNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG5cdHZhciBlcnJvcjtcblx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuXHR9O1xuXG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmFwcGx5KSB7XG5cdFx0XHR2YXIgbW9kdWxlcyA9IHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHRpZiAobW9kdWxlcykge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJmYWlsXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwidmFyIGNyZWF0ZVN0eWxlc2hlZXQgPSAoY2h1bmtJZCwgZnVsbGhyZWYsIHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0dmFyIG9uTGlua0NvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzLlxuXHRcdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gbnVsbDtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnKSB7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHR2YXIgcmVhbEhyZWYgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmhyZWYgfHwgZnVsbGhyZWY7XG5cdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlYWxIcmVmICsgXCIpXCIpO1xuXHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuXHRcdFx0ZXJyLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRlcnIucmVxdWVzdCA9IHJlYWxIcmVmO1xuXHRcdFx0bGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG5cdFx0XHRyZWplY3QoZXJyKTtcblx0XHR9XG5cdH1cblx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBvbkxpbmtDb21wbGV0ZTtcblx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcblx0cmV0dXJuIGxpbmtUYWc7XG59O1xudmFyIGZpbmRTdHlsZXNoZWV0ID0gKGhyZWYsIGZ1bGxocmVmKSA9PiB7XG5cdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiB0YWc7XG5cdH1cblx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG5cdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gdGFnO1xuXHR9XG59O1xudmFyIGxvYWRTdHlsZXNoZWV0ID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHRpZihmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0Y3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbnZhciBvbGRUYWdzID0gW107XG52YXIgbmV3VGFncyA9IFtdO1xudmFyIGFwcGx5SGFuZGxlciA9IChvcHRpb25zKSA9PiB7XG5cdHJldHVybiB7IGRpc3Bvc2U6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgb2xkVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG9sZFRhZyA9IG9sZFRhZ3NbaV07XG5cdFx0XHRpZihvbGRUYWcucGFyZW50Tm9kZSkgb2xkVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkVGFnKTtcblx0XHR9XG5cdFx0b2xkVGFncy5sZW5ndGggPSAwO1xuXHR9LCBhcHBseTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuZXdUYWdzLmxlbmd0aDsgaSsrKSBuZXdUYWdzW2ldLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRcdG5ld1RhZ3MubGVuZ3RoID0gMDtcblx0fSB9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLm1pbmlDc3MgPSAoY2h1bmtJZHMsIHJlbW92ZWRDaHVua3MsIHJlbW92ZWRNb2R1bGVzLCBwcm9taXNlcywgYXBwbHlIYW5kbGVycywgdXBkYXRlZE1vZHVsZXNMaXN0KSA9PiB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjaHVua0lkcy5mb3JFYWNoKChjaHVua0lkKSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0dmFyIG9sZFRhZyA9IGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKTtcblx0XHRpZighb2xkVGFnKSByZXR1cm47XG5cdFx0cHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR2YXIgdGFnID0gY3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgKCkgPT4ge1xuXHRcdFx0XHR0YWcuYXMgPSBcInN0eWxlXCI7XG5cdFx0XHRcdHRhZy5yZWwgPSBcInByZWxvYWRcIjtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdG9sZFRhZ3MucHVzaChvbGRUYWcpO1xuXHRcdFx0bmV3VGFncy5wdXNoKHRhZyk7XG5cdFx0fSkpO1xuXHR9KTtcbn0iLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCB8fCB7XG5cdFwicGFnZXMvYmluZENhcmRTREtcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuXHRjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0ID0gdXBkYXRlZE1vZHVsZXNMaXN0O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZXBheW1lbnRfYWRtaW5cIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQgPSBuZXdNb2R1bGVGYWN0b3J5XG5cdFx0XHRcdD8gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKVxuXHRcdFx0XHQ6IHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMSkge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjEsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjEpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2NvbW1vbi1tb2R1bGUvYmluZENhcmRTREsuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiYXN5bmNHZW5lcmF0b3JTdGVwIiwibiIsInQiLCJlIiwiciIsIm8iLCJhIiwiYyIsImkiLCJ1IiwidmFsdWUiLCJkb25lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX3R5cGVvZiIsInJlcXVpcmUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl9fYXdhaXQiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJydW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJnbG9iYWxUaGlzIiwiX3R5cGVvZjIiLCJGdW5jdGlvbiIsIl9fdmVyc2lvbiIsImZpbmFuY2VEb21haW4iLCJfX0ZJTkFOQ0VfRE9NQUlOX18iLCJfc2RrIiwiaXNGcm9tTG9mdHkiLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJmb3JtYXRTcmMiLCJzcmMiLCJjb25zb2xlIiwibG9nIiwidmFsaWRTcmMiLCJvcmlnaW4iLCJ0ZXN0IiwiVVJMIiwiaG9zdCIsImluY2x1ZGVzIiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJwcm90b2NvbCIsInBhdGhuYW1lIiwiaGFzaCIsInJlcGxhY2UiLCJjb25jYXQiLCJCaWxsaW5nIiwiX0JpbGxpbmciLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJfY2FsbGVlIiwiX3JlZjIiLCJwdWJsaWNLZXkiLCJhcHBOYW1lIiwicmVzIiwiX3JlcyIsIl9hcmdzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInVuZGVmaW5lZCIsIndpbmRvdyIsIndpdGhDcmVkZW50aWFscyIsIndhcm4iLCJmZXRjaCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwianNvbiIsInN0YXR1cyIsImNvZGUiLCJhc3NpZ24iLCJnYXRld2F5VHlwZSIsImRhdGEiLCJwYXltZW50R2F0ZXdheSIsInRlbmFudENvZGUiLCJ0MCIsImVycm9yIiwiX2lmcmFtZSIsInZlcnNpb24iLCJpbml0IiwiX3JlZiIsInNlbGVjdG9yIiwiZXZlbnRDYWxsYmFjayIsIm9uU3VibWl0dGVkIiwic3R5bGUiLCJib3JkZXIiLCJwYWRkaW5nIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIl9ldmVudCRkYXRhIiwiYXBwZW5kQ2hpbGQiLCJzdWJtaXQiLCJjb250ZW50V2luZG93IiwicG9zdE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function () {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = debounce;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/pages */ "./src/scripts/pages.js");
/* harmony import */ var _scripts_pages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_pages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/cards */ "./src/scripts/cards.js");
/* harmony import */ var _scripts_cards__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_cards__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_fader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/fader */ "./src/scripts/fader.js");
/* harmony import */ var _scripts_fader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_fader__WEBPACK_IMPORTED_MODULE_3__);




var text = "Tricks"; // const typewriter = (txt) => {
//   if (i < txt.length) {
//     document.getElementById("logo").innerHTML += txt[i]
//     i++;
//     setTimeout(typeWriter, 250)
//   }
// }
// document.addEventListener("DOMContentLoaded", () => {
//   typewriter(text)
// })

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var appendCards = function appendCards(_ref) {
  var cards = _ref.cards;
  var cardsPage = document.getElementsByClassName("scroll-menu")[0];
  cards.forEach(function (card, idx) {
    return createCard(card, cardsPage, idx);
  });
};

var createCard = function createCard(card, page, idx) {
  var cardFlip = document.createElement('div');
  cardFlip.classList.add('card-flip');
  cardFlip.setAttribute("data-order", idx);
  var inner = document.createElement('div');
  inner.classList.add('card-inner');
  var front = document.createElement('div');
  front.classList.add('card-front');
  var back = document.createElement('div');
  back.classList.add('card-back');
  var img = document.createElement('img');
  img.setAttribute("src", card.imageUrl);
  back.append(img);
  inner.append(front, back);
  cardFlip.append(inner);
  cardFlip.style.left = "".concat(idx * 150, "px");
  cardFlip.addEventListener("click", toggleTransform);
  cardFlip.addEventListener("mouseover", moveCards);
  cardFlip.addEventListener("mouseout", moveCards);
  page.append(cardFlip);
};

var toggleTransform = function toggleTransform(e) {
  var firstElementChild = e.currentTarget.firstElementChild;

  if (!firstElementChild.style.transform) {
    firstElementChild.style.transform = "rotateY(-180deg)";
  } else {
    firstElementChild.style.transform = "";
  }
};

var moveCards = function moveCards(e) {
  var order = parseInt(e.currentTarget.dataset["order"]) + 1;
  var cards = document.getElementsByClassName('card-flip');

  for (var i = order; i < cards.length - 1; i++) {
    var card = cards[i];
    var left = parseInt(card.style.left.slice(0, -2));

    if (e.type === "mouseout") {
      card.animate({
        left: ["".concat(left, "px"), "".concat(left - 100, "px")],
        easing: "ease-in-out"
      });
    }

    if (e.type === "mouseover") {
      card.animate({
        left: ["".concat(left, "px"), "".concat(left + 100, "px")],
        easing: "ease-in-out"
      });
    }
  }
}; //Fetch squirtle cards when DOM is loaded


document.addEventListener("DOMContentLoaded", function (e) {
  fetch("https://api.pokemontcg.io/v1/cards?name=squirtle").then(function (res) {
    return res.json();
  }).then(function (data) {
    return appendCards(data);
  });
});

/***/ }),

/***/ "./src/scripts/fader.js":
/*!******************************!*\
  !*** ./src/scripts/fader.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

Array.prototype.shuffle = function () {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [this[j], this[i]];
    this[i] = _ref[0];
    this[j] = _ref[1];
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var QUOTES = document.getElementsByClassName("quote"),
      opts = {
    fadeTime: 1000
  };
  var next = 0,
      active = 0;

  var fadeInQuote = function fadeInQuote(quoteNumber) {
    var quote = QUOTES[quoteNumber];
    quote.animate({
      opacity: [0, "100%", "100%"],
      top: ["20px", 0]
    }, 2500);
    setTimeout(function () {
      return quote.style.display = "block";
    }, 0);
  };

  var fadeOutQuote = function fadeOutQuote(quoteNumber) {
    var quote = QUOTES[quoteNumber];
    quote.animate({
      opacity: ["100%", "100%", 0],
      top: ["20px", 0]
    }, 2500);
    setTimeout(function () {
      return quote.style.display = "none";
    }, 0);
  };

  var switchToNextQuote = function switchToNextQuote(nextQuoteNumber) {
    var old = active;
    fadeInQuote(nextQuoteNumber);
    fadeOutQuote(old);
    active = nextQuoteNumber;
  };

  for (var i = 1; i < QUOTES.length; i++) {
    var quote = QUOTES[i];
    quote.style.display = "none";
  }

  setInterval(function () {
    next = (active + 1) % QUOTES.length;
    switchToNextQuote(next);
  }, 6000);
});

/***/ }),

/***/ "./src/scripts/pages.js":
/*!******************************!*\
  !*** ./src/scripts/pages.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js"); //Side-Nav click handler
//Save ref to current section?
//set current section height animation to 0%
//set next section height animation to 100


var resetSelectedAttribute = function resetSelectedAttribute(e) {
  var btns = document.getElementsByClassName("circle-btn");
  var pages = document.getElementsByClassName("scroll-page");
  var selected;

  var _loop = function _loop(i) {
    var btn = btns[i];
    var page = pages[i];

    if (page.attributes["selected"].value) {
      selected = page;
      if (e && (e.deltaY > 0 && parseInt(page.dataset.showPage) === pages.length || e.deltaY < 0 && parseInt(page.dataset.showPage) === 1)) return {
        v: selected
      };
      if (btn.attributes["selected"].value) btn.setAttribute("selected", "");
      page.setAttribute("selected", "");
      page.style.zIndex = "2";
      setTimeout(function () {
        return page.style.zIndex = "1";
      }, 500);
    }
  };

  for (var i = 0; i < btns.length; i++) {
    var _ret = _loop(i);

    if (_typeof(_ret) === "object") return _ret.v;
  }

  return selected;
}; //Event handler


var handlePages = function handlePages(e) {
  e.preventDefault();
  var _e$currentTarget$attr = e.currentTarget.attributes,
      selected = _e$currentTarget$attr.selected,
      href = _e$currentTarget$attr.href;
  if (Boolean(selected.value)) return;
  var prevPageNumber = parseInt(resetSelectedAttribute().dataset.showPage);
  var page = document.getElementById(href.value);
  page.setAttribute("selected", true);
  page.style.zIndex = "5";

  if (prevPageNumber > parseInt(page.dataset.showPage)) {
    page.animate({
      bottom: ["100%", 0]
    }, 600);
    selected.value = true;
    return;
  } else {
    page.animate({
      top: ["100%", 0],
      height: [0, "100%"]
    }, 600);
    selected.value = true;
    return;
  }
};

var handleScroll = function handleScroll(e) {
  debugger;
  if (e.deltaX && !e.deltaY) return;
  var prevPage = resetSelectedAttribute(e);
  var prevPageNumber = parseInt(prevPage.dataset.showPage);
  var nextPage, sideNavBtn;

  if (e.deltaY > 0 && prevPageNumber < 3) {
    nextPage = document.querySelector("[data-show-page=\"".concat(prevPageNumber + 1, "\"]"));
    sideNavBtn = document.querySelector("[href=\"".concat(nextPage.attributes.id.value, "\""));
    sideNavBtn.setAttribute("selected", true);
    nextPage.setAttribute("selected", true);
    nextPage.style.zIndex = "5";
    nextPage.animate({
      top: ["100%", 0],
      height: [0, "100%"]
    }, 600);
  } else if (e.deltaY < 0 && prevPageNumber > 1) {
    nextPage = document.querySelector("[data-show-page=\"".concat(prevPageNumber - 1, "\""));
    sideNavBtn = document.querySelector("[href=\"".concat(nextPage.attributes.id.value, "\""));
    sideNavBtn.setAttribute("selected", true);
    nextPage.setAttribute("selected", true);
    nextPage.style.zIndex = "5";
    nextPage.animate({
      bottom: ["100%", 0]
    }, 600);
  }
}; // Add event listener to each <div> tag


var scrollLinks = document.getElementById("side-nav").querySelectorAll("div");

for (var i = 0; i < scrollLinks.length; i++) {
  var element = scrollLinks[i];
  element.addEventListener("click", handlePages);
} // Add event listner to scroll


document.addEventListener("wheel", debounce(handleScroll, 500, {
  leading: true,
  maxWait: 2000,
  trailing: false
}));

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWJvdW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9mYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZTRhYSJdLCJuYW1lcyI6WyJ0ZXh0IiwiYXBwZW5kQ2FyZHMiLCJjYXJkcyIsImNhcmRzUGFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJjYXJkIiwiaWR4IiwiY3JlYXRlQ2FyZCIsInBhZ2UiLCJjYXJkRmxpcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lciIsImZyb250IiwiYmFjayIsImltZyIsImltYWdlVXJsIiwiYXBwZW5kIiwic3R5bGUiLCJsZWZ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVRyYW5zZm9ybSIsIm1vdmVDYXJkcyIsImUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImN1cnJlbnRUYXJnZXQiLCJ0cmFuc2Zvcm0iLCJvcmRlciIsInBhcnNlSW50IiwiZGF0YXNldCIsImkiLCJsZW5ndGgiLCJzbGljZSIsInR5cGUiLCJhbmltYXRlIiwiZWFzaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJBcnJheSIsInByb3RvdHlwZSIsInNodWZmbGUiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiUVVPVEVTIiwib3B0cyIsImZhZGVUaW1lIiwibmV4dCIsImFjdGl2ZSIsImZhZGVJblF1b3RlIiwicXVvdGVOdW1iZXIiLCJxdW90ZSIsIm9wYWNpdHkiLCJ0b3AiLCJzZXRUaW1lb3V0IiwiZGlzcGxheSIsImZhZGVPdXRRdW90ZSIsInN3aXRjaFRvTmV4dFF1b3RlIiwibmV4dFF1b3RlTnVtYmVyIiwib2xkIiwic2V0SW50ZXJ2YWwiLCJkZWJvdW5jZSIsInJlcXVpcmUiLCJyZXNldFNlbGVjdGVkQXR0cmlidXRlIiwiYnRucyIsInBhZ2VzIiwic2VsZWN0ZWQiLCJidG4iLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJkZWx0YVkiLCJzaG93UGFnZSIsInpJbmRleCIsImhhbmRsZVBhZ2VzIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiQm9vbGVhbiIsInByZXZQYWdlTnVtYmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJib3R0b20iLCJoZWlnaHQiLCJoYW5kbGVTY3JvbGwiLCJkZWx0YVgiLCJwcmV2UGFnZSIsIm5leHRQYWdlIiwic2lkZU5hdkJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsInNjcm9sbExpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJsZWFkaW5nIiwibWF4V2FpdCIsInRyYWlsaW5nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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Q0FBc0IsVUFBdEIsRUFBa0MsSUFBbEM7QUFDQTZFLFlBQVEsQ0FBQ3RFLEtBQVQsQ0FBZTBELE1BQWYsR0FBd0IsR0FBeEI7QUFDQVksWUFBUSxDQUFDdEQsT0FBVCxDQUFpQjtBQUFFaUQsWUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQ7QUFBVixLQUFqQixFQUEwQyxHQUExQztBQUNEO0FBQ0YsQ0EzQkQsQyxDQTZCQTs7O0FBQ0EsSUFBTVMsV0FBVyxHQUFHNUYsUUFBUSxDQUFDa0YsY0FBVCxDQUF3QixVQUF4QixFQUFvQ1csZ0JBQXBDLENBQXFELEtBQXJELENBQXBCOztBQUNBLEtBQUssSUFBSS9ELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4RCxXQUFXLENBQUM3RCxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxNQUFNZ0UsT0FBTyxHQUFHRixXQUFXLENBQUM5RCxDQUFELENBQTNCO0FBQ0FnRSxTQUFPLENBQUMxRSxnQkFBUixDQUF5QixPQUF6QixFQUFrQ3lELFdBQWxDO0FBQ0QsQyxDQUVEOzs7QUFDQTdFLFFBQVEsQ0FBQ29CLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DNkMsUUFBUSxDQUFDb0IsWUFBRCxFQUFlLEdBQWYsRUFBb0I7QUFBQ1UsU0FBTyxFQUFFLElBQVY7QUFBZ0JDLFNBQU8sRUFBRSxJQUF6QjtBQUErQkMsVUFBUSxFQUFFO0FBQXpDLENBQXBCLENBQTNDLEU7Ozs7Ozs7Ozs7OztBQzFGQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xuXG52YXIgTkFOID0gMCAvIDA7XG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG5cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG5cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cblxudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cblxudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cblxudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cblxudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG5cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG5cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xuXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG5cbnZhciBub3cgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cblxuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuXG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuXG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lOyAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTsgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTsgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cblxuICAgIHJldHVybiBsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0IHx8IHRpbWVTaW5jZUxhc3RDYWxsIDwgMCB8fCBtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0O1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG5cbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH0gLy8gUmVzdGFydCB0aGUgdGltZXIuXG5cblxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7IC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cblxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG5cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHwgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWc7XG59XG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyBvdGhlciArICcnIDogb3RoZXI7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cblxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiBpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpIDogcmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTsiLCJ2YXIgZzsgLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcblxuZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59KCk7XG5cbnRyeSB7XG4gIC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuICBnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuICAvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn0gLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL3BhZ2VzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvY2FyZHNcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9mYWRlclwiO1xuXG5jb25zdCB0ZXh0ID0gXCJUcmlja3NcIlxuXG4vLyBjb25zdCB0eXBld3JpdGVyID0gKHR4dCkgPT4ge1xuLy8gICBpZiAoaSA8IHR4dC5sZW5ndGgpIHtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIikuaW5uZXJIVE1MICs9IHR4dFtpXVxuLy8gICAgIGkrKztcbi8vICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIDI1MClcbi8vICAgfVxuLy8gfVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIHR5cGV3cml0ZXIodGV4dClcbi8vIH0pIiwiY29uc3QgYXBwZW5kQ2FyZHMgPSAoeyBjYXJkcyB9KSA9PiB7XG4gIGNvbnN0IGNhcmRzUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY3JvbGwtbWVudVwiKVswXVxuICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpZHgpID0+IGNyZWF0ZUNhcmQoY2FyZCwgY2FyZHNQYWdlLCBpZHgpKVxufVxuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQsIHBhZ2UsIGlkeCkgPT4ge1xuICBjb25zdCBjYXJkRmxpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNhcmRGbGlwLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZmxpcCcpXG4gIGNhcmRGbGlwLnNldEF0dHJpYnV0ZShcImRhdGEtb3JkZXJcIiwgaWR4KVxuICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGlubmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW5uZXInKVxuICBjb25zdCBmcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZyb250LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnQnKVxuICBjb25zdCBiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2snKVxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY2FyZC5pbWFnZVVybClcbiAgYmFjay5hcHBlbmQoaW1nKVxuICBpbm5lci5hcHBlbmQoZnJvbnQsIGJhY2spXG4gIGNhcmRGbGlwLmFwcGVuZChpbm5lcilcbiAgY2FyZEZsaXAuc3R5bGUubGVmdCA9IGAke2lkeCAqIDE1MH1weGBcbiAgY2FyZEZsaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVRyYW5zZm9ybSlcbiAgY2FyZEZsaXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBtb3ZlQ2FyZHMpXG4gIGNhcmRGbGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBtb3ZlQ2FyZHMpXG4gIHBhZ2UuYXBwZW5kKGNhcmRGbGlwKVxufVxuXG5jb25zdCB0b2dnbGVUcmFuc2Zvcm0gPSBlID0+IHtcbiAgY29uc3QgeyBmaXJzdEVsZW1lbnRDaGlsZCB9ID0gZS5jdXJyZW50VGFyZ2V0XG4gIGlmICghZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUudHJhbnNmb3JtKSB7XG4gICAgZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKC0xODBkZWcpXCJcbiAgfSBlbHNlIHtcbiAgICBmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiXG4gIH1cbn1cblxuY29uc3QgbW92ZUNhcmRzID0gZSA9PiB7XG4gIGNvbnN0IG9yZGVyID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRbXCJvcmRlclwiXSkgKyAxO1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtZmxpcCcpO1xuICBcbiAgZm9yIChsZXQgaSA9IG9yZGVyOyBpIDwgY2FyZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgY2FyZCA9IGNhcmRzW2ldO1xuICAgIGxldCBsZWZ0ID0gcGFyc2VJbnQoY2FyZC5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSlcbiAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlb3V0XCIpIHtcbiAgICAgIGNhcmQuYW5pbWF0ZSh7IGxlZnQ6IFtgJHtsZWZ0fXB4YCwgYCR7bGVmdC0xMDB9cHhgXSwgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCJ9KVxuICAgIH1cbiAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlb3ZlclwiKSB7XG4gICAgICBjYXJkLmFuaW1hdGUoeyBsZWZ0OiBbYCR7bGVmdH1weGAsIGAke2xlZnQgKyAxMDB9cHhgXSwgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIgfSlcbiAgICB9XG4gIH1cbn1cblxuLy9GZXRjaCBzcXVpcnRsZSBjYXJkcyB3aGVuIERPTSBpcyBsb2FkZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChlKSA9PiB7XG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkucG9rZW1vbnRjZy5pby92MS9jYXJkcz9uYW1lPXNxdWlydGxlXCIpXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihkYXRhID0+IGFwcGVuZENhcmRzKGRhdGEpKVxufSkiLCJBcnJheS5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFt0aGlzW2ldLCB0aGlzW2pdXSA9IFt0aGlzW2pdLCB0aGlzW2ldXTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IFFVT1RFUyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJxdW90ZVwiKSxcbiAgICAgICAgb3B0cyA9IHsgZmFkZVRpbWU6IDEwMDAgfTtcbiAgbGV0IG5leHQgPSAwLFxuICAgICAgYWN0aXZlPSAwO1xuXG4gIGNvbnN0IGZhZGVJblF1b3RlID0gcXVvdGVOdW1iZXIgPT4ge1xuICAgIGNvbnN0IHF1b3RlID0gUVVPVEVTW3F1b3RlTnVtYmVyXVxuICAgIHF1b3RlLmFuaW1hdGUoeyBvcGFjaXR5OiBbMCwgXCIxMDAlXCIsIFwiMTAwJVwiXSwgdG9wOiBbXCIyMHB4XCIsIDBdIH0sIDI1MDApXG4gICAgc2V0VGltZW91dCgoKSA9PiBxdW90ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiLCAwKVxuICB9XG5cbiAgY29uc3QgZmFkZU91dFF1b3RlID0gcXVvdGVOdW1iZXIgPT4ge1xuICAgIGNvbnN0IHF1b3RlID0gUVVPVEVTW3F1b3RlTnVtYmVyXVxuICAgIHF1b3RlLmFuaW1hdGUoeyBvcGFjaXR5OiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAwXSwgdG9wOiBbXCIyMHB4XCIsIDBdIH0sIDI1MDApXG4gICAgc2V0VGltZW91dCgoKSA9PiBxdW90ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIDApXG4gIH1cblxuICBjb25zdCBzd2l0Y2hUb05leHRRdW90ZSA9IG5leHRRdW90ZU51bWJlciA9PiB7XG4gICAgY29uc3Qgb2xkID0gYWN0aXZlXG4gICAgXG4gICAgZmFkZUluUXVvdGUobmV4dFF1b3RlTnVtYmVyKVxuICAgIGZhZGVPdXRRdW90ZShvbGQpO1xuICAgIFxuICAgIGFjdGl2ZSA9IG5leHRRdW90ZU51bWJlclxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBRVU9URVMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBxdW90ZSA9IFFVT1RFU1tpXTtcbiAgICBxdW90ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgbmV4dCA9IChhY3RpdmUgKyAxKSAlIFFVT1RFUy5sZW5ndGg7XG4gICAgc3dpdGNoVG9OZXh0UXVvdGUobmV4dCk7XG4gIH0sIDYwMDApO1xufSkiLCJjb25zdCBkZWJvdW5jZSA9IHJlcXVpcmUoJ2xvZGFzaC5kZWJvdW5jZScpO1xuLy9TaWRlLU5hdiBjbGljayBoYW5kbGVyXG4vL1NhdmUgcmVmIHRvIGN1cnJlbnQgc2VjdGlvbj9cbi8vc2V0IGN1cnJlbnQgc2VjdGlvbiBoZWlnaHQgYW5pbWF0aW9uIHRvIDAlXG4vL3NldCBuZXh0IHNlY3Rpb24gaGVpZ2h0IGFuaW1hdGlvbiB0byAxMDBcbmNvbnN0IHJlc2V0U2VsZWN0ZWRBdHRyaWJ1dGUgPSAoZSkgPT4ge1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNpcmNsZS1idG5cIilcbiAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2Nyb2xsLXBhZ2VcIilcbiAgbGV0IHNlbGVjdGVkO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJ0biA9IGJ0bnNbaV07XG4gICAgY29uc3QgcGFnZSA9IHBhZ2VzW2ldO1xuICAgIGlmIChwYWdlLmF0dHJpYnV0ZXNbXCJzZWxlY3RlZFwiXS52YWx1ZSkge1xuICAgICAgc2VsZWN0ZWQgPSBwYWdlXG4gICAgICBpZiAoZSAmJiBcbiAgICAgICAgKGUuZGVsdGFZID4gMCAmJiBwYXJzZUludChwYWdlLmRhdGFzZXQuc2hvd1BhZ2UpID09PSBwYWdlcy5sZW5ndGggfHxcbiAgICAgICAgZS5kZWx0YVkgPCAwICYmIHBhcnNlSW50KHBhZ2UuZGF0YXNldC5zaG93UGFnZSkgPT09IDEgKSkgcmV0dXJuIHNlbGVjdGVkXG4gICAgICAgIFxuICAgICAgaWYgKGJ0bi5hdHRyaWJ1dGVzW1wic2VsZWN0ZWRcIl0udmFsdWUpIGJ0bi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKVxuICAgICAgcGFnZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKVxuICAgICAgcGFnZS5zdHlsZS56SW5kZXggPSBcIjJcIlxuICAgICAgc2V0VGltZW91dCgoKSA9PiBwYWdlLnN0eWxlLnpJbmRleCA9IFwiMVwiLCA1MDApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGVkO1xufVxuXG4vL0V2ZW50IGhhbmRsZXJcbmNvbnN0IGhhbmRsZVBhZ2VzID0gZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgeyBzZWxlY3RlZCwgaHJlZiB9ID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNcbiAgaWYgKEJvb2xlYW4oc2VsZWN0ZWQudmFsdWUpKSByZXR1cm5cblxuICBjb25zdCBwcmV2UGFnZU51bWJlciA9IHBhcnNlSW50KHJlc2V0U2VsZWN0ZWRBdHRyaWJ1dGUoKS5kYXRhc2V0LnNob3dQYWdlKVxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi52YWx1ZSlcbiAgcGFnZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICBwYWdlLnN0eWxlLnpJbmRleCA9IFwiNVwiXG4gIGlmIChwcmV2UGFnZU51bWJlciA+IHBhcnNlSW50KHBhZ2UuZGF0YXNldC5zaG93UGFnZSkpIHtcbiAgICBwYWdlLmFuaW1hdGUoeyBib3R0b206IFtcIjEwMCVcIiwgMF0gfSwgNjAwKVxuICAgIHNlbGVjdGVkLnZhbHVlID0gdHJ1ZVxuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBwYWdlLmFuaW1hdGUoe1xuICAgICAgdG9wOiBbXCIxMDAlXCIsIDBdLFxuICAgICAgaGVpZ2h0OiBbMCwgXCIxMDAlXCJdXG4gICAgfSwgNjAwKVxuICAgIHNlbGVjdGVkLnZhbHVlID0gdHJ1ZVxuICAgIHJldHVyblxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVNjcm9sbCA9IGUgPT4ge1xuICBkZWJ1Z2dlclxuICBpZiAoZS5kZWx0YVggJiYgIWUuZGVsdGFZKSByZXR1cm5cbiAgY29uc3QgcHJldlBhZ2UgPSByZXNldFNlbGVjdGVkQXR0cmlidXRlKGUpXG4gIGNvbnN0IHByZXZQYWdlTnVtYmVyID0gcGFyc2VJbnQocHJldlBhZ2UuZGF0YXNldC5zaG93UGFnZSk7XG4gIGxldCBuZXh0UGFnZSxcbiAgICAgIHNpZGVOYXZCdG47XG4gIGlmIChlLmRlbHRhWSA+IDAgJiYgcHJldlBhZ2VOdW1iZXIgPCAzKSB7XG4gICAgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zaG93LXBhZ2U9XCIke3ByZXZQYWdlTnVtYmVyICsgMSB9XCJdYCk7XG4gICAgc2lkZU5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHtuZXh0UGFnZS5hdHRyaWJ1dGVzLmlkLnZhbHVlfVwiYClcbiAgICBzaWRlTmF2QnRuLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgbmV4dFBhZ2Uuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICBuZXh0UGFnZS5zdHlsZS56SW5kZXggPSBcIjVcIlxuICAgIG5leHRQYWdlLmFuaW1hdGUoe1xuICAgICAgdG9wOiBbXCIxMDAlXCIsIDBdLFxuICAgICAgaGVpZ2h0OiBbMCwgXCIxMDAlXCJdXG4gICAgfSwgNjAwKVxuICAgIFxuICAgIFxuICB9IGVsc2UgaWYgKGUuZGVsdGFZIDwgMCAmJiBwcmV2UGFnZU51bWJlciA+IDEpIHtcbiAgICBuZXh0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNob3ctcGFnZT1cIiR7cHJldlBhZ2VOdW1iZXIgLSAxfVwiYCk7XG4gICAgc2lkZU5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHtuZXh0UGFnZS5hdHRyaWJ1dGVzLmlkLnZhbHVlfVwiYClcbiAgICBzaWRlTmF2QnRuLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgbmV4dFBhZ2Uuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICBuZXh0UGFnZS5zdHlsZS56SW5kZXggPSBcIjVcIlxuICAgIG5leHRQYWdlLmFuaW1hdGUoeyBib3R0b206IFtcIjEwMCVcIiwgMF0gfSwgNjAwKVxuICB9XG59XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIDxkaXY+IHRhZ1xuY29uc3Qgc2Nyb2xsTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtbmF2XCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIilcbmZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsTGlua3MubGVuZ3RoOyBpKyspIHtcbiAgY29uc3QgZWxlbWVudCA9IHNjcm9sbExpbmtzW2ldO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQYWdlcylcbn1cblxuLy8gQWRkIGV2ZW50IGxpc3RuZXIgdG8gc2Nyb2xsXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZGVib3VuY2UoaGFuZGxlU2Nyb2xsLCA1MDAsIHtsZWFkaW5nOiB0cnVlLCBtYXhXYWl0OiAyMDAwLCB0cmFpbGluZzogZmFsc2UgfSkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==
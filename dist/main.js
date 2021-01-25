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
/***/ (function(module, exports) {

//Side-Nav click handler
//Save ref to current section?
//set current section height animation to 0%
//set next section height animation to 100
var resetSelectedAttribute = function resetSelectedAttribute() {
  var btns = document.getElementsByClassName("circle-btn");
  var pages = document.getElementsByClassName("scroll-page");

  for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    var page = pages[i];
    if (btn.attributes["selected"].value) btn.setAttribute("selected", "");
    if (page.attributes["selected"].value) page.setAttribute("selected", "");
  }
}; //Event handler


var handlePages = function handlePages(e) {
  e.preventDefault();
  var _e$currentTarget$attr = e.currentTarget.attributes,
      selected = _e$currentTarget$attr.selected,
      href = _e$currentTarget$attr.href;
  if (Boolean(selected.value)) return;
  resetSelectedAttribute();
  var page = document.getElementById(href.value);
  page.setAttribute("selected", true);

  switch (href.value) {
    case "splash":
      page.animate({
        bottom: ["100%", 0]
      }, 600);
      break;

    case "cards":
      page.animate({
        top: ["100%", 0],
        height: [0, "100%"]
      }, 600);
      break;
  }

  selected.value = true;
}; //Add event listener to each <div> tag


var scrollLinks = document.getElementById("side-nav").querySelectorAll("div");

for (var i = 0; i < scrollLinks.length; i++) {
  var element = scrollLinks[i];
  element.addEventListener("click", handlePages);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9lNGFhIl0sIm5hbWVzIjpbInRleHQiLCJhcHBlbmRDYXJkcyIsImNhcmRzIiwiY2FyZHNQYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImNhcmQiLCJpZHgiLCJjcmVhdGVDYXJkIiwicGFnZSIsImNhcmRGbGlwIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImlubmVyIiwiZnJvbnQiLCJiYWNrIiwiaW1nIiwiaW1hZ2VVcmwiLCJhcHBlbmQiLCJzdHlsZSIsImxlZnQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlVHJhbnNmb3JtIiwibW92ZUNhcmRzIiwiZSIsImZpcnN0RWxlbWVudENoaWxkIiwiY3VycmVudFRhcmdldCIsInRyYW5zZm9ybSIsIm9yZGVyIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwiaSIsImxlbmd0aCIsInNsaWNlIiwidHlwZSIsImFuaW1hdGUiLCJlYXNpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIkFycmF5IiwicHJvdG90eXBlIiwic2h1ZmZsZSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJRVU9URVMiLCJvcHRzIiwiZmFkZVRpbWUiLCJuZXh0IiwiYWN0aXZlIiwiZmFkZUluUXVvdGUiLCJxdW90ZU51bWJlciIsInF1b3RlIiwib3BhY2l0eSIsInRvcCIsInNldFRpbWVvdXQiLCJkaXNwbGF5IiwiZmFkZU91dFF1b3RlIiwic3dpdGNoVG9OZXh0UXVvdGUiLCJuZXh0UXVvdGVOdW1iZXIiLCJvbGQiLCJzZXRJbnRlcnZhbCIsInJlc2V0U2VsZWN0ZWRBdHRyaWJ1dGUiLCJidG5zIiwicGFnZXMiLCJidG4iLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJoYW5kbGVQYWdlcyIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZWQiLCJocmVmIiwiQm9vbGVhbiIsImdldEVsZW1lbnRCeUlkIiwiYm90dG9tIiwiaGVpZ2h0Iiwic2Nyb2xsTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsUUFBYixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsSzs7Ozs7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QUNFaEUsVUFBSSxDQUFDNEIsT0FBTCxDQUFhO0FBQUUyQyxjQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVDtBQUFWLE9BQWIsRUFBc0MsR0FBdEM7QUFDQTs7QUFDRixTQUFLLE9BQUw7QUFDRXZFLFVBQUksQ0FBQzRCLE9BQUwsQ0FBYTtBQUNYdUIsV0FBRyxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQsQ0FETTtBQUVYcUIsY0FBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUo7QUFGRyxPQUFiLEVBR0csR0FISDtBQUlBO0FBVEo7O0FBV0FMLFVBQVEsQ0FBQ0gsS0FBVCxHQUFpQixJQUFqQjtBQUNELENBcEJELEMsQ0FzQkE7OztBQUNBLElBQU1TLFdBQVcsR0FBRy9FLFFBQVEsQ0FBQzRFLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NJLGdCQUFwQyxDQUFxRCxLQUFyRCxDQUFwQjs7QUFDQSxLQUFLLElBQUlsRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUQsV0FBVyxDQUFDaEQsTUFBaEMsRUFBd0NELENBQUMsRUFBekMsRUFBNkM7QUFDM0MsTUFBTW1ELE9BQU8sR0FBR0YsV0FBVyxDQUFDakQsQ0FBRCxDQUEzQjtBQUNBbUQsU0FBTyxDQUFDN0QsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NtRCxXQUFsQztBQUNELEM7Ozs7Ozs7Ozs7OztBQzVDRDtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9wYWdlc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL2NhcmRzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvZmFkZXJcIjtcblxuY29uc3QgdGV4dCA9IFwiVHJpY2tzXCJcblxuLy8gY29uc3QgdHlwZXdyaXRlciA9ICh0eHQpID0+IHtcbi8vICAgaWYgKGkgPCB0eHQubGVuZ3RoKSB7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLmlubmVySFRNTCArPSB0eHRbaV1cbi8vICAgICBpKys7XG4vLyAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCAyNTApXG4vLyAgIH1cbi8vIH1cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICB0eXBld3JpdGVyKHRleHQpXG4vLyB9KSIsImNvbnN0IGFwcGVuZENhcmRzID0gKHsgY2FyZHMgfSkgPT4ge1xuICBjb25zdCBjYXJkc1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2Nyb2xsLW1lbnVcIilbMF1cbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaWR4KSA9PiBjcmVhdGVDYXJkKGNhcmQsIGNhcmRzUGFnZSwgaWR4KSlcbn1cblxuY29uc3QgY3JlYXRlQ2FyZCA9IChjYXJkLCBwYWdlLCBpZHgpID0+IHtcbiAgY29uc3QgY2FyZEZsaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjYXJkRmxpcC5jbGFzc0xpc3QuYWRkKCdjYXJkLWZsaXAnKVxuICBjYXJkRmxpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yZGVyXCIsIGlkeClcbiAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpbm5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWlubmVyJylcbiAgY29uc3QgZnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBmcm9udC5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250JylcbiAgY29uc3QgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJhY2suY2xhc3NMaXN0LmFkZCgnY2FyZC1iYWNrJylcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNhcmQuaW1hZ2VVcmwpXG4gIGJhY2suYXBwZW5kKGltZylcbiAgaW5uZXIuYXBwZW5kKGZyb250LCBiYWNrKVxuICBjYXJkRmxpcC5hcHBlbmQoaW5uZXIpXG4gIGNhcmRGbGlwLnN0eWxlLmxlZnQgPSBgJHtpZHggKiAxNTB9cHhgXG4gIGNhcmRGbGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVUcmFuc2Zvcm0pXG4gIGNhcmRGbGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW92ZUNhcmRzKVxuICBjYXJkRmxpcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbW92ZUNhcmRzKVxuICBwYWdlLmFwcGVuZChjYXJkRmxpcClcbn1cblxuY29uc3QgdG9nZ2xlVHJhbnNmb3JtID0gZSA9PiB7XG4gIGNvbnN0IHsgZmlyc3RFbGVtZW50Q2hpbGQgfSA9IGUuY3VycmVudFRhcmdldFxuICBpZiAoIWZpcnN0RWxlbWVudENoaWxkLnN0eWxlLnRyYW5zZm9ybSkge1xuICAgIGZpcnN0RWxlbWVudENoaWxkLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgtMTgwZGVnKVwiXG4gIH0gZWxzZSB7XG4gICAgZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUudHJhbnNmb3JtID0gXCJcIlxuICB9XG59XG5cbmNvbnN0IG1vdmVDYXJkcyA9IGUgPT4ge1xuICBjb25zdCBvcmRlciA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0W1wib3JkZXJcIl0pICsgMTtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkLWZsaXAnKTtcbiAgXG4gIGZvciAobGV0IGkgPSBvcmRlcjsgaSA8IGNhcmRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGNhcmQgPSBjYXJkc1tpXTtcbiAgICBsZXQgbGVmdCA9IHBhcnNlSW50KGNhcmQuc3R5bGUubGVmdC5zbGljZSgwLCAtMikpXG4gICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZW91dFwiKSB7XG4gICAgICBjYXJkLmFuaW1hdGUoeyBsZWZ0OiBbYCR7bGVmdH1weGAsIGAke2xlZnQtMTAwfXB4YF0sIGVhc2luZzogXCJlYXNlLWluLW91dFwifSlcbiAgICB9XG4gICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZW92ZXJcIikge1xuICAgICAgY2FyZC5hbmltYXRlKHsgbGVmdDogW2Ake2xlZnR9cHhgLCBgJHtsZWZ0ICsgMTAwfXB4YF0sIGVhc2luZzogXCJlYXNlLWluLW91dFwiIH0pXG4gICAgfVxuICB9XG59XG5cbi8vRmV0Y2ggc3F1aXJ0bGUgY2FyZHMgd2hlbiBET00gaXMgbG9hZGVkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xuICBmZXRjaChcImh0dHBzOi8vYXBpLnBva2Vtb250Y2cuaW8vdjEvY2FyZHM/bmFtZT1zcXVpcnRsZVwiKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiBhcHBlbmRDYXJkcyhkYXRhKSlcbn0pIiwiQXJyYXkucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICBbdGhpc1tpXSwgdGhpc1tqXV0gPSBbdGhpc1tqXSwgdGhpc1tpXV07XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBRVU9URVMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicXVvdGVcIiksXG4gICAgICAgIG9wdHMgPSB7IGZhZGVUaW1lOiAxMDAwIH07XG4gIGxldCBuZXh0ID0gMCxcbiAgICAgIGFjdGl2ZT0gMDtcblxuICBjb25zdCBmYWRlSW5RdW90ZSA9IHF1b3RlTnVtYmVyID0+IHtcbiAgICBjb25zdCBxdW90ZSA9IFFVT1RFU1txdW90ZU51bWJlcl1cbiAgICBxdW90ZS5hbmltYXRlKHsgb3BhY2l0eTogWzAsIFwiMTAwJVwiLCBcIjEwMCVcIl0sIHRvcDogW1wiMjBweFwiLCAwXSB9LCAyNTAwKVxuICAgIHNldFRpbWVvdXQoKCkgPT4gcXVvdGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiwgMClcbiAgfVxuXG4gIGNvbnN0IGZhZGVPdXRRdW90ZSA9IHF1b3RlTnVtYmVyID0+IHtcbiAgICBjb25zdCBxdW90ZSA9IFFVT1RFU1txdW90ZU51bWJlcl1cbiAgICBxdW90ZS5hbmltYXRlKHsgb3BhY2l0eTogW1wiMTAwJVwiLCBcIjEwMCVcIiwgMF0sIHRvcDogW1wiMjBweFwiLCAwXSB9LCAyNTAwKVxuICAgIHNldFRpbWVvdXQoKCkgPT4gcXVvdGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLCAwKVxuICB9XG5cbiAgY29uc3Qgc3dpdGNoVG9OZXh0UXVvdGUgPSBuZXh0UXVvdGVOdW1iZXIgPT4ge1xuICAgIGNvbnN0IG9sZCA9IGFjdGl2ZVxuICAgIFxuICAgIGZhZGVJblF1b3RlKG5leHRRdW90ZU51bWJlcilcbiAgICBmYWRlT3V0UXVvdGUob2xkKTtcbiAgICBcbiAgICBhY3RpdmUgPSBuZXh0UXVvdGVOdW1iZXJcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgUVVPVEVTLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcXVvdGUgPSBRVU9URVNbaV07XG4gICAgcXVvdGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIG5leHQgPSAoYWN0aXZlICsgMSkgJSBRVU9URVMubGVuZ3RoO1xuICAgIHN3aXRjaFRvTmV4dFF1b3RlKG5leHQpO1xuICB9LCA2MDAwKTtcbn0pIiwiLy9TaWRlLU5hdiBjbGljayBoYW5kbGVyXG4vL1NhdmUgcmVmIHRvIGN1cnJlbnQgc2VjdGlvbj9cbi8vc2V0IGN1cnJlbnQgc2VjdGlvbiBoZWlnaHQgYW5pbWF0aW9uIHRvIDAlXG4vL3NldCBuZXh0IHNlY3Rpb24gaGVpZ2h0IGFuaW1hdGlvbiB0byAxMDBcbmNvbnN0IHJlc2V0U2VsZWN0ZWRBdHRyaWJ1dGUgPSAoKSA9PiB7XG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2lyY2xlLWJ0blwiKVxuICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY3JvbGwtcGFnZVwiKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJ0biA9IGJ0bnNbaV07XG4gICAgY29uc3QgcGFnZSA9IHBhZ2VzW2ldO1xuICAgIGlmIChidG4uYXR0cmlidXRlc1tcInNlbGVjdGVkXCJdLnZhbHVlKSBidG4uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIilcbiAgICBpZiAocGFnZS5hdHRyaWJ1dGVzW1wic2VsZWN0ZWRcIl0udmFsdWUpIHBhZ2Uuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIilcbiAgfVxufVxuXG4vL0V2ZW50IGhhbmRsZXJcbmNvbnN0IGhhbmRsZVBhZ2VzID0gZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgeyBzZWxlY3RlZCwgaHJlZiB9ID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNcbiAgaWYgKEJvb2xlYW4oc2VsZWN0ZWQudmFsdWUpKSByZXR1cm5cblxuICByZXNldFNlbGVjdGVkQXR0cmlidXRlKClcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYudmFsdWUpXG4gIHBhZ2Uuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgc3dpdGNoIChocmVmLnZhbHVlKSB7XG4gICAgY2FzZSBcInNwbGFzaFwiOlxuICAgICAgcGFnZS5hbmltYXRlKHsgYm90dG9tOiBbXCIxMDAlXCIsIDBdIH0sIDYwMClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcImNhcmRzXCI6XG4gICAgICBwYWdlLmFuaW1hdGUoe1xuICAgICAgICB0b3A6IFtcIjEwMCVcIiwgMF0sXG4gICAgICAgIGhlaWdodDogWzAsIFwiMTAwJVwiXVxuICAgICAgfSwgNjAwKVxuICAgICAgYnJlYWtcbiAgfVxuICBzZWxlY3RlZC52YWx1ZSA9IHRydWVcbn1cblxuLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCA8ZGl2PiB0YWdcbmNvbnN0IHNjcm9sbExpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLW5hdlwiKS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpXG5mb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbExpbmtzLmxlbmd0aDsgaSsrKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBzY3JvbGxMaW5rc1tpXTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUGFnZXMpXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==
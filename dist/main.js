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
var resetSelectedAttribute = function resetSelectedAttribute(e) {
  var btns = document.getElementsByClassName("circle-btn");
  var pages = document.getElementsByClassName("scroll-page");
  var selected;

  for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    var page = pages[i];

    if (page.attributes["selected"].value) {
      selected = page;
      if (e && (e.deltaY > 0 && parseInt(page.dataset.showPage) === pages.length || e.deltaY < 0 && parseInt(page.dataset.showPage) === 1)) return selected;
      if (btn.attributes["selected"].value) btn.setAttribute("selected", "");
      page.setAttribute("selected", "");
    }
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
  var prevPage = resetSelectedAttribute(e);
  var prevPageNumber = parseInt(prevPage.dataset.showPage);
  var nextPage, sideNavBtn;

  if (e.deltaY > 0 && prevPageNumber < 3) {
    nextPage = document.querySelector("[data-show-page=\"".concat(prevPageNumber + 1, "\"]"));
    sideNavBtn = document.querySelector("[href=\"".concat(nextPage.attributes.id.value, "\""));
    sideNavBtn.setAttribute("selected", true);
    nextPage.setAttribute("selected", true);
    nextPage.animate({
      top: ["100%", 0],
      height: [0, "100%"]
    }, 600);
  } else if (e.deltaY < 0 && prevPageNumber > 1) {
    nextPage = document.querySelector("[data-show-page=\"".concat(prevPageNumber - 1, "\""));
    sideNavBtn = document.querySelector("[href=\"".concat(nextPage.attributes.id.value, "\""));
    sideNavBtn.setAttribute("selected", true);
    nextPage.setAttribute("selected", true);
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


document.addEventListener("wheel", handleScroll);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9lNGFhIl0sIm5hbWVzIjpbInRleHQiLCJhcHBlbmRDYXJkcyIsImNhcmRzIiwiY2FyZHNQYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImNhcmQiLCJpZHgiLCJjcmVhdGVDYXJkIiwicGFnZSIsImNhcmRGbGlwIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImlubmVyIiwiZnJvbnQiLCJiYWNrIiwiaW1nIiwiaW1hZ2VVcmwiLCJhcHBlbmQiLCJzdHlsZSIsImxlZnQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlVHJhbnNmb3JtIiwibW92ZUNhcmRzIiwiZSIsImZpcnN0RWxlbWVudENoaWxkIiwiY3VycmVudFRhcmdldCIsInRyYW5zZm9ybSIsIm9yZGVyIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwiaSIsImxlbmd0aCIsInNsaWNlIiwidHlwZSIsImFuaW1hdGUiLCJlYXNpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIkFycmF5IiwicHJvdG90eXBlIiwic2h1ZmZsZSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJRVU9URVMiLCJvcHRzIiwiZmFkZVRpbWUiLCJuZXh0IiwiYWN0aXZlIiwiZmFkZUluUXVvdGUiLCJxdW90ZU51bWJlciIsInF1b3RlIiwib3BhY2l0eSIsInRvcCIsInNldFRpbWVvdXQiLCJkaXNwbGF5IiwiZmFkZU91dFF1b3RlIiwic3dpdGNoVG9OZXh0UXVvdGUiLCJuZXh0UXVvdGVOdW1iZXIiLCJvbGQiLCJzZXRJbnRlcnZhbCIsInJlc2V0U2VsZWN0ZWRBdHRyaWJ1dGUiLCJidG5zIiwicGFnZXMiLCJzZWxlY3RlZCIsImJ0biIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsImRlbHRhWSIsInNob3dQYWdlIiwiaGFuZGxlUGFnZXMiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJCb29sZWFuIiwicHJldlBhZ2VOdW1iZXIiLCJnZXRFbGVtZW50QnlJZCIsImJvdHRvbSIsImhlaWdodCIsImhhbmRsZVNjcm9sbCIsInByZXZQYWdlIiwibmV4dFBhZ2UiLCJzaWRlTmF2QnRuIiwicXVlcnlTZWxlY3RvciIsImlkIiwic2Nyb2xsTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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RSxZQUFRLENBQUN6RSxZQUFULENBQXNCLFVBQXRCLEVBQWtDLElBQWxDO0FBQ0F5RSxZQUFRLENBQUNsRCxPQUFULENBQWlCO0FBQUU4QyxZQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVDtBQUFWLEtBQWpCLEVBQTBDLEdBQTFDO0FBQ0Q7QUFDRixDQXZCRCxDLENBeUJBOzs7QUFDQSxJQUFNUSxXQUFXLEdBQUd4RixRQUFRLENBQUMrRSxjQUFULENBQXdCLFVBQXhCLEVBQW9DVSxnQkFBcEMsQ0FBcUQsS0FBckQsQ0FBcEI7O0FBQ0EsS0FBSyxJQUFJM0QsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBELFdBQVcsQ0FBQ3pELE1BQWhDLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLE1BQU00RCxPQUFPLEdBQUdGLFdBQVcsQ0FBQzFELENBQUQsQ0FBM0I7QUFDQTRELFNBQU8sQ0FBQ3RFLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDc0QsV0FBbEM7QUFDRCxDLENBRUQ7OztBQUNBMUUsUUFBUSxDQUFDb0IsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUM4RCxZQUFuQyxFOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvcGFnZXNcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9jYXJkc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL2ZhZGVyXCI7XG5cbmNvbnN0IHRleHQgPSBcIlRyaWNrc1wiXG5cbi8vIGNvbnN0IHR5cGV3cml0ZXIgPSAodHh0KSA9PiB7XG4vLyAgIGlmIChpIDwgdHh0Lmxlbmd0aCkge1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKS5pbm5lckhUTUwgKz0gdHh0W2ldXG4vLyAgICAgaSsrO1xuLy8gICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgMjUwKVxuLy8gICB9XG4vLyB9XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgdHlwZXdyaXRlcih0ZXh0KVxuLy8gfSkiLCJjb25zdCBhcHBlbmRDYXJkcyA9ICh7IGNhcmRzIH0pID0+IHtcbiAgY29uc3QgY2FyZHNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjcm9sbC1tZW51XCIpWzBdXG4gIGNhcmRzLmZvckVhY2goKGNhcmQsIGlkeCkgPT4gY3JlYXRlQ2FyZChjYXJkLCBjYXJkc1BhZ2UsIGlkeCkpXG59XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZCwgcGFnZSwgaWR4KSA9PiB7XG4gIGNvbnN0IGNhcmRGbGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2FyZEZsaXAuY2xhc3NMaXN0LmFkZCgnY2FyZC1mbGlwJylcbiAgY2FyZEZsaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmRlclwiLCBpZHgpXG4gIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5uZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbm5lcicpXG4gIGNvbnN0IGZyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZnJvbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udCcpXG4gIGNvbnN0IGJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBiYWNrLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFjaycpXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cbiAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjYXJkLmltYWdlVXJsKVxuICBiYWNrLmFwcGVuZChpbWcpXG4gIGlubmVyLmFwcGVuZChmcm9udCwgYmFjaylcbiAgY2FyZEZsaXAuYXBwZW5kKGlubmVyKVxuICBjYXJkRmxpcC5zdHlsZS5sZWZ0ID0gYCR7aWR4ICogMTUwfXB4YFxuICBjYXJkRmxpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVHJhbnNmb3JtKVxuICBjYXJkRmxpcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG1vdmVDYXJkcylcbiAgY2FyZEZsaXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG1vdmVDYXJkcylcbiAgcGFnZS5hcHBlbmQoY2FyZEZsaXApXG59XG5cbmNvbnN0IHRvZ2dsZVRyYW5zZm9ybSA9IGUgPT4ge1xuICBjb25zdCB7IGZpcnN0RWxlbWVudENoaWxkIH0gPSBlLmN1cnJlbnRUYXJnZXRcbiAgaWYgKCFmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2Zvcm0pIHtcbiAgICBmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoLTE4MGRlZylcIlxuICB9IGVsc2Uge1xuICAgIGZpcnN0RWxlbWVudENoaWxkLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCJcbiAgfVxufVxuXG5jb25zdCBtb3ZlQ2FyZHMgPSBlID0+IHtcbiAgY29uc3Qgb3JkZXIgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFtcIm9yZGVyXCJdKSArIDE7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZC1mbGlwJyk7XG4gIFxuICBmb3IgKGxldCBpID0gb3JkZXI7IGkgPCBjYXJkcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBjYXJkID0gY2FyZHNbaV07XG4gICAgbGV0IGxlZnQgPSBwYXJzZUludChjYXJkLnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpKVxuICAgIGlmIChlLnR5cGUgPT09IFwibW91c2VvdXRcIikge1xuICAgICAgY2FyZC5hbmltYXRlKHsgbGVmdDogW2Ake2xlZnR9cHhgLCBgJHtsZWZ0LTEwMH1weGBdLCBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIn0pXG4gICAgfVxuICAgIGlmIChlLnR5cGUgPT09IFwibW91c2VvdmVyXCIpIHtcbiAgICAgIGNhcmQuYW5pbWF0ZSh7IGxlZnQ6IFtgJHtsZWZ0fXB4YCwgYCR7bGVmdCArIDEwMH1weGBdLCBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIiB9KVxuICAgIH1cbiAgfVxufVxuXG4vL0ZldGNoIHNxdWlydGxlIGNhcmRzIHdoZW4gRE9NIGlzIGxvYWRlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcbiAgZmV0Y2goXCJodHRwczovL2FwaS5wb2tlbW9udGNnLmlvL3YxL2NhcmRzP25hbWU9c3F1aXJ0bGVcIilcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4gYXBwZW5kQ2FyZHMoZGF0YSkpXG59KSIsIkFycmF5LnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgW3RoaXNbaV0sIHRoaXNbal1dID0gW3RoaXNbal0sIHRoaXNbaV1dO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgUVVPVEVTID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInF1b3RlXCIpLFxuICAgICAgICBvcHRzID0geyBmYWRlVGltZTogMTAwMCB9O1xuICBsZXQgbmV4dCA9IDAsXG4gICAgICBhY3RpdmU9IDA7XG5cbiAgY29uc3QgZmFkZUluUXVvdGUgPSBxdW90ZU51bWJlciA9PiB7XG4gICAgY29uc3QgcXVvdGUgPSBRVU9URVNbcXVvdGVOdW1iZXJdXG4gICAgcXVvdGUuYW5pbWF0ZSh7IG9wYWNpdHk6IFswLCBcIjEwMCVcIiwgXCIxMDAlXCJdLCB0b3A6IFtcIjIwcHhcIiwgMF0gfSwgMjUwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHF1b3RlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIDApXG4gIH1cblxuICBjb25zdCBmYWRlT3V0UXVvdGUgPSBxdW90ZU51bWJlciA9PiB7XG4gICAgY29uc3QgcXVvdGUgPSBRVU9URVNbcXVvdGVOdW1iZXJdXG4gICAgcXVvdGUuYW5pbWF0ZSh7IG9wYWNpdHk6IFtcIjEwMCVcIiwgXCIxMDAlXCIsIDBdLCB0b3A6IFtcIjIwcHhcIiwgMF0gfSwgMjUwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHF1b3RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiwgMClcbiAgfVxuXG4gIGNvbnN0IHN3aXRjaFRvTmV4dFF1b3RlID0gbmV4dFF1b3RlTnVtYmVyID0+IHtcbiAgICBjb25zdCBvbGQgPSBhY3RpdmVcbiAgICBcbiAgICBmYWRlSW5RdW90ZShuZXh0UXVvdGVOdW1iZXIpXG4gICAgZmFkZU91dFF1b3RlKG9sZCk7XG4gICAgXG4gICAgYWN0aXZlID0gbmV4dFF1b3RlTnVtYmVyXG4gIH1cblxuICBmb3IgKGxldCBpID0gMTsgaSA8IFFVT1RFUy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHF1b3RlID0gUVVPVEVTW2ldO1xuICAgIHF1b3RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBuZXh0ID0gKGFjdGl2ZSArIDEpICUgUVVPVEVTLmxlbmd0aDtcbiAgICBzd2l0Y2hUb05leHRRdW90ZShuZXh0KTtcbiAgfSwgNjAwMCk7XG59KSIsIi8vU2lkZS1OYXYgY2xpY2sgaGFuZGxlclxuLy9TYXZlIHJlZiB0byBjdXJyZW50IHNlY3Rpb24/XG4vL3NldCBjdXJyZW50IHNlY3Rpb24gaGVpZ2h0IGFuaW1hdGlvbiB0byAwJVxuLy9zZXQgbmV4dCBzZWN0aW9uIGhlaWdodCBhbmltYXRpb24gdG8gMTAwXG5jb25zdCByZXNldFNlbGVjdGVkQXR0cmlidXRlID0gKGUpID0+IHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXJjbGUtYnRuXCIpXG4gIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjcm9sbC1wYWdlXCIpXG4gIGxldCBzZWxlY3RlZDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBidG4gPSBidG5zW2ldO1xuICAgIGNvbnN0IHBhZ2UgPSBwYWdlc1tpXTtcbiAgICBpZiAocGFnZS5hdHRyaWJ1dGVzW1wic2VsZWN0ZWRcIl0udmFsdWUpIHtcbiAgICAgIHNlbGVjdGVkID0gcGFnZVxuICAgICAgaWYgKGUgJiYgXG4gICAgICAgIChlLmRlbHRhWSA+IDAgJiYgcGFyc2VJbnQocGFnZS5kYXRhc2V0LnNob3dQYWdlKSA9PT0gcGFnZXMubGVuZ3RoIHx8XG4gICAgICAgIGUuZGVsdGFZIDwgMCAmJiBwYXJzZUludChwYWdlLmRhdGFzZXQuc2hvd1BhZ2UpID09PSAxICkpIHJldHVybiBzZWxlY3RlZFxuICAgICAgICBcbiAgICAgIGlmIChidG4uYXR0cmlidXRlc1tcInNlbGVjdGVkXCJdLnZhbHVlKSBidG4uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIilcbiAgICAgIHBhZ2Uuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VsZWN0ZWQ7XG59XG5cbi8vRXZlbnQgaGFuZGxlclxuY29uc3QgaGFuZGxlUGFnZXMgPSBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBocmVmIH0gPSBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1xuICBpZiAoQm9vbGVhbihzZWxlY3RlZC52YWx1ZSkpIHJldHVyblxuXG4gIGNvbnN0IHByZXZQYWdlTnVtYmVyID0gcGFyc2VJbnQocmVzZXRTZWxlY3RlZEF0dHJpYnV0ZSgpLmRhdGFzZXQuc2hvd1BhZ2UpXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnZhbHVlKVxuICBwYWdlLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gIGlmIChwcmV2UGFnZU51bWJlciA+IHBhcnNlSW50KHBhZ2UuZGF0YXNldC5zaG93UGFnZSkpIHtcbiAgICBwYWdlLmFuaW1hdGUoeyBib3R0b206IFtcIjEwMCVcIiwgMF0gfSwgNjAwKVxuICAgIHNlbGVjdGVkLnZhbHVlID0gdHJ1ZVxuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBwYWdlLmFuaW1hdGUoe1xuICAgICAgdG9wOiBbXCIxMDAlXCIsIDBdLFxuICAgICAgaGVpZ2h0OiBbMCwgXCIxMDAlXCJdXG4gICAgfSwgNjAwKVxuICAgIHNlbGVjdGVkLnZhbHVlID0gdHJ1ZVxuICAgIHJldHVyblxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVNjcm9sbCA9IGUgPT4ge1xuICBjb25zdCBwcmV2UGFnZSA9IHJlc2V0U2VsZWN0ZWRBdHRyaWJ1dGUoZSlcbiAgY29uc3QgcHJldlBhZ2VOdW1iZXIgPSBwYXJzZUludChwcmV2UGFnZS5kYXRhc2V0LnNob3dQYWdlKTtcbiAgbGV0IG5leHRQYWdlLFxuICAgICAgc2lkZU5hdkJ0bjtcbiAgaWYgKGUuZGVsdGFZID4gMCAmJiBwcmV2UGFnZU51bWJlciA8IDMpIHtcbiAgICBuZXh0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNob3ctcGFnZT1cIiR7cHJldlBhZ2VOdW1iZXIgKyAxIH1cIl1gKTtcbiAgICBzaWRlTmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2hyZWY9XCIke25leHRQYWdlLmF0dHJpYnV0ZXMuaWQudmFsdWV9XCJgKVxuICAgIHNpZGVOYXZCdG4uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICBuZXh0UGFnZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICAgIG5leHRQYWdlLmFuaW1hdGUoe1xuICAgICAgdG9wOiBbXCIxMDAlXCIsIDBdLFxuICAgICAgaGVpZ2h0OiBbMCwgXCIxMDAlXCJdXG4gICAgfSwgNjAwKVxuICAgIFxuICAgIFxuICB9IGVsc2UgaWYgKGUuZGVsdGFZIDwgMCAmJiBwcmV2UGFnZU51bWJlciA+IDEpIHtcbiAgICBuZXh0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNob3ctcGFnZT1cIiR7cHJldlBhZ2VOdW1iZXIgLSAxfVwiYCk7XG4gICAgc2lkZU5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHtuZXh0UGFnZS5hdHRyaWJ1dGVzLmlkLnZhbHVlfVwiYClcbiAgICBzaWRlTmF2QnRuLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgbmV4dFBhZ2Uuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICBuZXh0UGFnZS5hbmltYXRlKHsgYm90dG9tOiBbXCIxMDAlXCIsIDBdIH0sIDYwMClcbiAgfVxufVxuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCA8ZGl2PiB0YWdcbmNvbnN0IHNjcm9sbExpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLW5hdlwiKS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpXG5mb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbExpbmtzLmxlbmd0aDsgaSsrKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBzY3JvbGxMaW5rc1tpXTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUGFnZXMpXG59XG5cbi8vIEFkZCBldmVudCBsaXN0bmVyIHRvIHNjcm9sbFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVNjcm9sbClcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=
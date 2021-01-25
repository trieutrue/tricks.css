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
  var prevPageNumber = parseInt(resetSelectedAttribute(e).dataset.showPage);
  var nextPage, sideNavBtn;

  if (e.deltaY > 0 && prevPageNumber < 3) {
    nextPage = document.querySelector("[data-show-page=\"".concat(prevPageNumber + 1, "\"]"));
    sideNavBtn = document.querySelector("[href=\"".concat(nextPage.attributes.id.value, "\""));
    debugger;
    sideNavBtn.setAttribute("selected", true);
    nextPage.setAttribute("selected", true);
    nextPage.animate({
      top: ["100%", 0],
      height: [0, "100%"]
    }, 600);
  } else if (e.deltaY < 0 && prevPageNumber > 1) {
    nextPage = document.querySelector("[data-show-page=\"".concat(prevPageNumber - 1, "\""));
    sideNavBtn = document.querySelector("[href=\"".concat(nextPage.attributes.id.value, "\""));
    debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZXh0IiwiYXBwZW5kQ2FyZHMiLCJjYXJkcyIsImNhcmRzUGFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJjYXJkIiwiaWR4IiwiY3JlYXRlQ2FyZCIsInBhZ2UiLCJjYXJkRmxpcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lciIsImZyb250IiwiYmFjayIsImltZyIsImltYWdlVXJsIiwiYXBwZW5kIiwic3R5bGUiLCJsZWZ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVRyYW5zZm9ybSIsIm1vdmVDYXJkcyIsImUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImN1cnJlbnRUYXJnZXQiLCJ0cmFuc2Zvcm0iLCJvcmRlciIsInBhcnNlSW50IiwiZGF0YXNldCIsImkiLCJsZW5ndGgiLCJzbGljZSIsInR5cGUiLCJhbmltYXRlIiwiZWFzaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJBcnJheSIsInByb3RvdHlwZSIsInNodWZmbGUiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiUVVPVEVTIiwib3B0cyIsImZhZGVUaW1lIiwibmV4dCIsImFjdGl2ZSIsImZhZGVJblF1b3RlIiwicXVvdGVOdW1iZXIiLCJxdW90ZSIsIm9wYWNpdHkiLCJ0b3AiLCJzZXRUaW1lb3V0IiwiZGlzcGxheSIsImZhZGVPdXRRdW90ZSIsInN3aXRjaFRvTmV4dFF1b3RlIiwibmV4dFF1b3RlTnVtYmVyIiwib2xkIiwic2V0SW50ZXJ2YWwiLCJyZXNldFNlbGVjdGVkQXR0cmlidXRlIiwiYnRucyIsInBhZ2VzIiwic2VsZWN0ZWQiLCJidG4iLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJkZWx0YVkiLCJzaG93UGFnZSIsImhhbmRsZVBhZ2VzIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiQm9vbGVhbiIsInByZXZQYWdlTnVtYmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJib3R0b20iLCJoZWlnaHQiLCJoYW5kbGVTY3JvbGwiLCJuZXh0UGFnZSIsInNpZGVOYXZCdG4iLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJzY3JvbGxMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FB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LElBQWxDO0FBQ0F3RSxZQUFRLENBQUNqRCxPQUFULENBQWlCO0FBQUU4QyxZQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVDtBQUFWLEtBQWpCLEVBQTBDLEdBQTFDO0FBQ0Q7QUFDRixDQXhCRCxDLENBMEJBOzs7QUFDQSxJQUFNTyxXQUFXLEdBQUd2RixRQUFRLENBQUMrRSxjQUFULENBQXdCLFVBQXhCLEVBQW9DUyxnQkFBcEMsQ0FBcUQsS0FBckQsQ0FBcEI7O0FBQ0EsS0FBSyxJQUFJMUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lELFdBQVcsQ0FBQ3hELE1BQWhDLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLE1BQU0yRCxPQUFPLEdBQUdGLFdBQVcsQ0FBQ3pELENBQUQsQ0FBM0I7QUFDQTJELFNBQU8sQ0FBQ3JFLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDc0QsV0FBbEM7QUFDRCxDLENBRUQ7OztBQUNBMUUsUUFBUSxDQUFDb0IsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUM4RCxZQUFuQyxFOzs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvcGFnZXNcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9jYXJkc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL2ZhZGVyXCI7XG5cbmNvbnN0IHRleHQgPSBcIlRyaWNrc1wiXG5cbi8vIGNvbnN0IHR5cGV3cml0ZXIgPSAodHh0KSA9PiB7XG4vLyAgIGlmIChpIDwgdHh0Lmxlbmd0aCkge1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKS5pbm5lckhUTUwgKz0gdHh0W2ldXG4vLyAgICAgaSsrO1xuLy8gICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgMjUwKVxuLy8gICB9XG4vLyB9XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgdHlwZXdyaXRlcih0ZXh0KVxuLy8gfSkiLCJjb25zdCBhcHBlbmRDYXJkcyA9ICh7IGNhcmRzIH0pID0+IHtcbiAgY29uc3QgY2FyZHNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjcm9sbC1tZW51XCIpWzBdXG4gIGNhcmRzLmZvckVhY2goKGNhcmQsIGlkeCkgPT4gY3JlYXRlQ2FyZChjYXJkLCBjYXJkc1BhZ2UsIGlkeCkpXG59XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZCwgcGFnZSwgaWR4KSA9PiB7XG4gIGNvbnN0IGNhcmRGbGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2FyZEZsaXAuY2xhc3NMaXN0LmFkZCgnY2FyZC1mbGlwJylcbiAgY2FyZEZsaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmRlclwiLCBpZHgpXG4gIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5uZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbm5lcicpXG4gIGNvbnN0IGZyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZnJvbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1mcm9udCcpXG4gIGNvbnN0IGJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBiYWNrLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFjaycpXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cbiAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjYXJkLmltYWdlVXJsKVxuICBiYWNrLmFwcGVuZChpbWcpXG4gIGlubmVyLmFwcGVuZChmcm9udCwgYmFjaylcbiAgY2FyZEZsaXAuYXBwZW5kKGlubmVyKVxuICBjYXJkRmxpcC5zdHlsZS5sZWZ0ID0gYCR7aWR4ICogMTUwfXB4YFxuICBjYXJkRmxpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVHJhbnNmb3JtKVxuICBjYXJkRmxpcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG1vdmVDYXJkcylcbiAgY2FyZEZsaXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG1vdmVDYXJkcylcbiAgcGFnZS5hcHBlbmQoY2FyZEZsaXApXG59XG5cbmNvbnN0IHRvZ2dsZVRyYW5zZm9ybSA9IGUgPT4ge1xuICBjb25zdCB7IGZpcnN0RWxlbWVudENoaWxkIH0gPSBlLmN1cnJlbnRUYXJnZXRcbiAgaWYgKCFmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2Zvcm0pIHtcbiAgICBmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoLTE4MGRlZylcIlxuICB9IGVsc2Uge1xuICAgIGZpcnN0RWxlbWVudENoaWxkLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCJcbiAgfVxufVxuXG5jb25zdCBtb3ZlQ2FyZHMgPSBlID0+IHtcbiAgY29uc3Qgb3JkZXIgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFtcIm9yZGVyXCJdKSArIDE7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZC1mbGlwJyk7XG4gIFxuICBmb3IgKGxldCBpID0gb3JkZXI7IGkgPCBjYXJkcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBjYXJkID0gY2FyZHNbaV07XG4gICAgbGV0IGxlZnQgPSBwYXJzZUludChjYXJkLnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpKVxuICAgIGlmIChlLnR5cGUgPT09IFwibW91c2VvdXRcIikge1xuICAgICAgY2FyZC5hbmltYXRlKHsgbGVmdDogW2Ake2xlZnR9cHhgLCBgJHtsZWZ0LTEwMH1weGBdLCBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIn0pXG4gICAgfVxuICAgIGlmIChlLnR5cGUgPT09IFwibW91c2VvdmVyXCIpIHtcbiAgICAgIGNhcmQuYW5pbWF0ZSh7IGxlZnQ6IFtgJHtsZWZ0fXB4YCwgYCR7bGVmdCArIDEwMH1weGBdLCBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIiB9KVxuICAgIH1cbiAgfVxufVxuXG4vL0ZldGNoIHNxdWlydGxlIGNhcmRzIHdoZW4gRE9NIGlzIGxvYWRlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcbiAgZmV0Y2goXCJodHRwczovL2FwaS5wb2tlbW9udGNnLmlvL3YxL2NhcmRzP25hbWU9c3F1aXJ0bGVcIilcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4gYXBwZW5kQ2FyZHMoZGF0YSkpXG59KSIsIkFycmF5LnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgW3RoaXNbaV0sIHRoaXNbal1dID0gW3RoaXNbal0sIHRoaXNbaV1dO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgUVVPVEVTID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInF1b3RlXCIpLFxuICAgICAgICBvcHRzID0geyBmYWRlVGltZTogMTAwMCB9O1xuICBsZXQgbmV4dCA9IDAsXG4gICAgICBhY3RpdmU9IDA7XG5cbiAgY29uc3QgZmFkZUluUXVvdGUgPSBxdW90ZU51bWJlciA9PiB7XG4gICAgY29uc3QgcXVvdGUgPSBRVU9URVNbcXVvdGVOdW1iZXJdXG4gICAgcXVvdGUuYW5pbWF0ZSh7IG9wYWNpdHk6IFswLCBcIjEwMCVcIiwgXCIxMDAlXCJdLCB0b3A6IFtcIjIwcHhcIiwgMF0gfSwgMjUwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHF1b3RlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIDApXG4gIH1cblxuICBjb25zdCBmYWRlT3V0UXVvdGUgPSBxdW90ZU51bWJlciA9PiB7XG4gICAgY29uc3QgcXVvdGUgPSBRVU9URVNbcXVvdGVOdW1iZXJdXG4gICAgcXVvdGUuYW5pbWF0ZSh7IG9wYWNpdHk6IFtcIjEwMCVcIiwgXCIxMDAlXCIsIDBdLCB0b3A6IFtcIjIwcHhcIiwgMF0gfSwgMjUwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHF1b3RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiwgMClcbiAgfVxuXG4gIGNvbnN0IHN3aXRjaFRvTmV4dFF1b3RlID0gbmV4dFF1b3RlTnVtYmVyID0+IHtcbiAgICBjb25zdCBvbGQgPSBhY3RpdmVcbiAgICBcbiAgICBmYWRlSW5RdW90ZShuZXh0UXVvdGVOdW1iZXIpXG4gICAgZmFkZU91dFF1b3RlKG9sZCk7XG4gICAgXG4gICAgYWN0aXZlID0gbmV4dFF1b3RlTnVtYmVyXG4gIH1cblxuICBmb3IgKGxldCBpID0gMTsgaSA8IFFVT1RFUy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHF1b3RlID0gUVVPVEVTW2ldO1xuICAgIHF1b3RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBuZXh0ID0gKGFjdGl2ZSArIDEpICUgUVVPVEVTLmxlbmd0aDtcbiAgICBzd2l0Y2hUb05leHRRdW90ZShuZXh0KTtcbiAgfSwgNjAwMCk7XG59KSIsIi8vU2lkZS1OYXYgY2xpY2sgaGFuZGxlclxuLy9TYXZlIHJlZiB0byBjdXJyZW50IHNlY3Rpb24/XG4vL3NldCBjdXJyZW50IHNlY3Rpb24gaGVpZ2h0IGFuaW1hdGlvbiB0byAwJVxuLy9zZXQgbmV4dCBzZWN0aW9uIGhlaWdodCBhbmltYXRpb24gdG8gMTAwXG5jb25zdCByZXNldFNlbGVjdGVkQXR0cmlidXRlID0gKGUpID0+IHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXJjbGUtYnRuXCIpXG4gIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjcm9sbC1wYWdlXCIpXG4gIGxldCBzZWxlY3RlZDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBidG4gPSBidG5zW2ldO1xuICAgIGNvbnN0IHBhZ2UgPSBwYWdlc1tpXTtcbiAgICBpZiAocGFnZS5hdHRyaWJ1dGVzW1wic2VsZWN0ZWRcIl0udmFsdWUpIHtcbiAgICAgIHNlbGVjdGVkID0gcGFnZVxuICAgICAgaWYgKGUgJiYgXG4gICAgICAgIChlLmRlbHRhWSA+IDAgJiYgcGFyc2VJbnQocGFnZS5kYXRhc2V0LnNob3dQYWdlKSA9PT0gcGFnZXMubGVuZ3RoIHx8XG4gICAgICAgIGUuZGVsdGFZIDwgMCAmJiBwYXJzZUludChwYWdlLmRhdGFzZXQuc2hvd1BhZ2UpID09PSAxICkpIHJldHVybiBzZWxlY3RlZFxuICAgICAgICBcbiAgICAgICAgaWYgKGJ0bi5hdHRyaWJ1dGVzW1wic2VsZWN0ZWRcIl0udmFsdWUpIGJ0bi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKVxuICAgICAgcGFnZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWxlY3RlZDtcbn1cblxuLy9FdmVudCBoYW5kbGVyXG5jb25zdCBoYW5kbGVQYWdlcyA9IGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgc2VsZWN0ZWQsIGhyZWYgfSA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzXG4gIGlmIChCb29sZWFuKHNlbGVjdGVkLnZhbHVlKSkgcmV0dXJuXG5cbiAgY29uc3QgcHJldlBhZ2VOdW1iZXIgPSBwYXJzZUludChyZXNldFNlbGVjdGVkQXR0cmlidXRlKCkuZGF0YXNldC5zaG93UGFnZSlcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYudmFsdWUpXG4gIHBhZ2Uuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgaWYgKHByZXZQYWdlTnVtYmVyID4gcGFyc2VJbnQocGFnZS5kYXRhc2V0LnNob3dQYWdlKSkge1xuICAgIHBhZ2UuYW5pbWF0ZSh7IGJvdHRvbTogW1wiMTAwJVwiLCAwXSB9LCA2MDApXG4gICAgc2VsZWN0ZWQudmFsdWUgPSB0cnVlXG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHBhZ2UuYW5pbWF0ZSh7XG4gICAgICB0b3A6IFtcIjEwMCVcIiwgMF0sXG4gICAgICBoZWlnaHQ6IFswLCBcIjEwMCVcIl1cbiAgICB9LCA2MDApXG4gICAgc2VsZWN0ZWQudmFsdWUgPSB0cnVlXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlU2Nyb2xsID0gZSA9PiB7XG4gIGNvbnN0IHByZXZQYWdlTnVtYmVyID0gcGFyc2VJbnQocmVzZXRTZWxlY3RlZEF0dHJpYnV0ZShlKS5kYXRhc2V0LnNob3dQYWdlKTtcbiAgbGV0IG5leHRQYWdlLFxuICAgICAgc2lkZU5hdkJ0bjtcbiAgaWYgKGUuZGVsdGFZID4gMCAmJiBwcmV2UGFnZU51bWJlciA8IDMpIHtcbiAgICBuZXh0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNob3ctcGFnZT1cIiR7cHJldlBhZ2VOdW1iZXIgKyAxIH1cIl1gKTtcbiAgICBzaWRlTmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2hyZWY9XCIke25leHRQYWdlLmF0dHJpYnV0ZXMuaWQudmFsdWV9XCJgKVxuICAgIGRlYnVnZ2VyXG4gICAgc2lkZU5hdkJ0bi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICAgIG5leHRQYWdlLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgbmV4dFBhZ2UuYW5pbWF0ZSh7XG4gICAgICB0b3A6IFtcIjEwMCVcIiwgMF0sXG4gICAgICBoZWlnaHQ6IFswLCBcIjEwMCVcIl1cbiAgICB9LCA2MDApXG4gICAgXG4gICAgXG4gIH0gZWxzZSBpZiAoZS5kZWx0YVkgPCAwICYmIHByZXZQYWdlTnVtYmVyID4gMSkge1xuICAgIG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2hvdy1wYWdlPVwiJHtwcmV2UGFnZU51bWJlciAtIDF9XCJgKTtcbiAgICBzaWRlTmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2hyZWY9XCIke25leHRQYWdlLmF0dHJpYnV0ZXMuaWQudmFsdWV9XCJgKVxuICAgIGRlYnVnZ2VyXG4gICAgc2lkZU5hdkJ0bi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICAgIG5leHRQYWdlLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgbmV4dFBhZ2UuYW5pbWF0ZSh7IGJvdHRvbTogW1wiMTAwJVwiLCAwXSB9LCA2MDApXG4gIH1cbn1cblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggPGRpdj4gdGFnXG5jb25zdCBzY3JvbGxMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1uYXZcIikucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKVxuZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxMaW5rcy5sZW5ndGg7IGkrKykge1xuICBjb25zdCBlbGVtZW50ID0gc2Nyb2xsTGlua3NbaV07XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVBhZ2VzKVxufVxuXG4vLyBBZGQgZXZlbnQgbGlzdG5lciB0byBzY3JvbGxcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVTY3JvbGwpIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==
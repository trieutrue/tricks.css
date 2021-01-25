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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZXh0IiwiYXBwZW5kQ2FyZHMiLCJjYXJkcyIsImNhcmRzUGFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJjYXJkIiwiaWR4IiwiY3JlYXRlQ2FyZCIsInBhZ2UiLCJjYXJkRmxpcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lciIsImZyb250IiwiYmFjayIsImltZyIsImltYWdlVXJsIiwiYXBwZW5kIiwic3R5bGUiLCJsZWZ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVRyYW5zZm9ybSIsIm1vdmVDYXJkcyIsImUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImN1cnJlbnRUYXJnZXQiLCJ0cmFuc2Zvcm0iLCJvcmRlciIsInBhcnNlSW50IiwiZGF0YXNldCIsImkiLCJsZW5ndGgiLCJzbGljZSIsInR5cGUiLCJhbmltYXRlIiwiZWFzaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJBcnJheSIsInByb3RvdHlwZSIsInNodWZmbGUiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiUVVPVEVTIiwib3B0cyIsImZhZGVUaW1lIiwibmV4dCIsImFjdGl2ZSIsImZhZGVJblF1b3RlIiwicXVvdGVOdW1iZXIiLCJxdW90ZSIsIm9wYWNpdHkiLCJ0b3AiLCJzZXRUaW1lb3V0IiwiZGlzcGxheSIsImZhZGVPdXRRdW90ZSIsInN3aXRjaFRvTmV4dFF1b3RlIiwibmV4dFF1b3RlTnVtYmVyIiwib2xkIiwic2V0SW50ZXJ2YWwiLCJyZXNldFNlbGVjdGVkQXR0cmlidXRlIiwiYnRucyIsInBhZ2VzIiwic2VsZWN0ZWQiLCJidG4iLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJkZWx0YVkiLCJzaG93UGFnZSIsImhhbmRsZVBhZ2VzIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiQm9vbGVhbiIsInByZXZQYWdlTnVtYmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJib3R0b20iLCJoZWlnaHQiLCJoYW5kbGVTY3JvbGwiLCJwcmV2UGFnZSIsIm5leHRQYWdlIiwic2lkZU5hdkJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsInNjcm9sbExpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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USxDQUFDekUsWUFBVCxDQUFzQixVQUF0QixFQUFrQyxJQUFsQztBQUNBeUUsWUFBUSxDQUFDbEQsT0FBVCxDQUFpQjtBQUFFOEMsWUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQ7QUFBVixLQUFqQixFQUEwQyxHQUExQztBQUNEO0FBQ0YsQ0F2QkQsQyxDQXlCQTs7O0FBQ0EsSUFBTVEsV0FBVyxHQUFHeEYsUUFBUSxDQUFDK0UsY0FBVCxDQUF3QixVQUF4QixFQUFvQ1UsZ0JBQXBDLENBQXFELEtBQXJELENBQXBCOztBQUNBLEtBQUssSUFBSTNELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwRCxXQUFXLENBQUN6RCxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxNQUFNNEQsT0FBTyxHQUFHRixXQUFXLENBQUMxRCxDQUFELENBQTNCO0FBQ0E0RCxTQUFPLENBQUN0RSxnQkFBUixDQUF5QixPQUF6QixFQUFrQ3NELFdBQWxDO0FBQ0QsQyxDQUVEOzs7QUFDQTFFLFFBQVEsQ0FBQ29CLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DOEQsWUFBbkMsRTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL3BhZ2VzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvY2FyZHNcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9mYWRlclwiO1xuXG5jb25zdCB0ZXh0ID0gXCJUcmlja3NcIlxuXG4vLyBjb25zdCB0eXBld3JpdGVyID0gKHR4dCkgPT4ge1xuLy8gICBpZiAoaSA8IHR4dC5sZW5ndGgpIHtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIikuaW5uZXJIVE1MICs9IHR4dFtpXVxuLy8gICAgIGkrKztcbi8vICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIDI1MClcbi8vICAgfVxuLy8gfVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIHR5cGV3cml0ZXIodGV4dClcbi8vIH0pIiwiY29uc3QgYXBwZW5kQ2FyZHMgPSAoeyBjYXJkcyB9KSA9PiB7XG4gIGNvbnN0IGNhcmRzUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY3JvbGwtbWVudVwiKVswXVxuICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpZHgpID0+IGNyZWF0ZUNhcmQoY2FyZCwgY2FyZHNQYWdlLCBpZHgpKVxufVxuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQsIHBhZ2UsIGlkeCkgPT4ge1xuICBjb25zdCBjYXJkRmxpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNhcmRGbGlwLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZmxpcCcpXG4gIGNhcmRGbGlwLnNldEF0dHJpYnV0ZShcImRhdGEtb3JkZXJcIiwgaWR4KVxuICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGlubmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW5uZXInKVxuICBjb25zdCBmcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZyb250LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnQnKVxuICBjb25zdCBiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2snKVxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY2FyZC5pbWFnZVVybClcbiAgYmFjay5hcHBlbmQoaW1nKVxuICBpbm5lci5hcHBlbmQoZnJvbnQsIGJhY2spXG4gIGNhcmRGbGlwLmFwcGVuZChpbm5lcilcbiAgY2FyZEZsaXAuc3R5bGUubGVmdCA9IGAke2lkeCAqIDE1MH1weGBcbiAgY2FyZEZsaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVRyYW5zZm9ybSlcbiAgY2FyZEZsaXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBtb3ZlQ2FyZHMpXG4gIGNhcmRGbGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBtb3ZlQ2FyZHMpXG4gIHBhZ2UuYXBwZW5kKGNhcmRGbGlwKVxufVxuXG5jb25zdCB0b2dnbGVUcmFuc2Zvcm0gPSBlID0+IHtcbiAgY29uc3QgeyBmaXJzdEVsZW1lbnRDaGlsZCB9ID0gZS5jdXJyZW50VGFyZ2V0XG4gIGlmICghZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUudHJhbnNmb3JtKSB7XG4gICAgZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKC0xODBkZWcpXCJcbiAgfSBlbHNlIHtcbiAgICBmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiXG4gIH1cbn1cblxuY29uc3QgbW92ZUNhcmRzID0gZSA9PiB7XG4gIGNvbnN0IG9yZGVyID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRbXCJvcmRlclwiXSkgKyAxO1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtZmxpcCcpO1xuICBcbiAgZm9yIChsZXQgaSA9IG9yZGVyOyBpIDwgY2FyZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgY2FyZCA9IGNhcmRzW2ldO1xuICAgIGxldCBsZWZ0ID0gcGFyc2VJbnQoY2FyZC5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSlcbiAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlb3V0XCIpIHtcbiAgICAgIGNhcmQuYW5pbWF0ZSh7IGxlZnQ6IFtgJHtsZWZ0fXB4YCwgYCR7bGVmdC0xMDB9cHhgXSwgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCJ9KVxuICAgIH1cbiAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlb3ZlclwiKSB7XG4gICAgICBjYXJkLmFuaW1hdGUoeyBsZWZ0OiBbYCR7bGVmdH1weGAsIGAke2xlZnQgKyAxMDB9cHhgXSwgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIgfSlcbiAgICB9XG4gIH1cbn1cblxuLy9GZXRjaCBzcXVpcnRsZSBjYXJkcyB3aGVuIERPTSBpcyBsb2FkZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChlKSA9PiB7XG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkucG9rZW1vbnRjZy5pby92MS9jYXJkcz9uYW1lPXNxdWlydGxlXCIpXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihkYXRhID0+IGFwcGVuZENhcmRzKGRhdGEpKVxufSkiLCJBcnJheS5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFt0aGlzW2ldLCB0aGlzW2pdXSA9IFt0aGlzW2pdLCB0aGlzW2ldXTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IFFVT1RFUyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJxdW90ZVwiKSxcbiAgICAgICAgb3B0cyA9IHsgZmFkZVRpbWU6IDEwMDAgfTtcbiAgbGV0IG5leHQgPSAwLFxuICAgICAgYWN0aXZlPSAwO1xuXG4gIGNvbnN0IGZhZGVJblF1b3RlID0gcXVvdGVOdW1iZXIgPT4ge1xuICAgIGNvbnN0IHF1b3RlID0gUVVPVEVTW3F1b3RlTnVtYmVyXVxuICAgIHF1b3RlLmFuaW1hdGUoeyBvcGFjaXR5OiBbMCwgXCIxMDAlXCIsIFwiMTAwJVwiXSwgdG9wOiBbXCIyMHB4XCIsIDBdIH0sIDI1MDApXG4gICAgc2V0VGltZW91dCgoKSA9PiBxdW90ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiLCAwKVxuICB9XG5cbiAgY29uc3QgZmFkZU91dFF1b3RlID0gcXVvdGVOdW1iZXIgPT4ge1xuICAgIGNvbnN0IHF1b3RlID0gUVVPVEVTW3F1b3RlTnVtYmVyXVxuICAgIHF1b3RlLmFuaW1hdGUoeyBvcGFjaXR5OiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAwXSwgdG9wOiBbXCIyMHB4XCIsIDBdIH0sIDI1MDApXG4gICAgc2V0VGltZW91dCgoKSA9PiBxdW90ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIDApXG4gIH1cblxuICBjb25zdCBzd2l0Y2hUb05leHRRdW90ZSA9IG5leHRRdW90ZU51bWJlciA9PiB7XG4gICAgY29uc3Qgb2xkID0gYWN0aXZlXG4gICAgXG4gICAgZmFkZUluUXVvdGUobmV4dFF1b3RlTnVtYmVyKVxuICAgIGZhZGVPdXRRdW90ZShvbGQpO1xuICAgIFxuICAgIGFjdGl2ZSA9IG5leHRRdW90ZU51bWJlclxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBRVU9URVMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBxdW90ZSA9IFFVT1RFU1tpXTtcbiAgICBxdW90ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgbmV4dCA9IChhY3RpdmUgKyAxKSAlIFFVT1RFUy5sZW5ndGg7XG4gICAgc3dpdGNoVG9OZXh0UXVvdGUobmV4dCk7XG4gIH0sIDYwMDApO1xufSkiLCIvL1NpZGUtTmF2IGNsaWNrIGhhbmRsZXJcbi8vU2F2ZSByZWYgdG8gY3VycmVudCBzZWN0aW9uP1xuLy9zZXQgY3VycmVudCBzZWN0aW9uIGhlaWdodCBhbmltYXRpb24gdG8gMCVcbi8vc2V0IG5leHQgc2VjdGlvbiBoZWlnaHQgYW5pbWF0aW9uIHRvIDEwMFxuY29uc3QgcmVzZXRTZWxlY3RlZEF0dHJpYnV0ZSA9IChlKSA9PiB7XG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2lyY2xlLWJ0blwiKVxuICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY3JvbGwtcGFnZVwiKVxuICBsZXQgc2VsZWN0ZWQ7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYnRuID0gYnRuc1tpXTtcbiAgICBjb25zdCBwYWdlID0gcGFnZXNbaV07XG4gICAgaWYgKHBhZ2UuYXR0cmlidXRlc1tcInNlbGVjdGVkXCJdLnZhbHVlKSB7XG4gICAgICBzZWxlY3RlZCA9IHBhZ2VcbiAgICAgIGlmIChlICYmIFxuICAgICAgICAoZS5kZWx0YVkgPiAwICYmIHBhcnNlSW50KHBhZ2UuZGF0YXNldC5zaG93UGFnZSkgPT09IHBhZ2VzLmxlbmd0aCB8fFxuICAgICAgICBlLmRlbHRhWSA8IDAgJiYgcGFyc2VJbnQocGFnZS5kYXRhc2V0LnNob3dQYWdlKSA9PT0gMSApKSByZXR1cm4gc2VsZWN0ZWRcbiAgICAgICAgXG4gICAgICBpZiAoYnRuLmF0dHJpYnV0ZXNbXCJzZWxlY3RlZFwiXS52YWx1ZSkgYnRuLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpXG4gICAgICBwYWdlLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGVkO1xufVxuXG4vL0V2ZW50IGhhbmRsZXJcbmNvbnN0IGhhbmRsZVBhZ2VzID0gZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgeyBzZWxlY3RlZCwgaHJlZiB9ID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNcbiAgaWYgKEJvb2xlYW4oc2VsZWN0ZWQudmFsdWUpKSByZXR1cm5cblxuICBjb25zdCBwcmV2UGFnZU51bWJlciA9IHBhcnNlSW50KHJlc2V0U2VsZWN0ZWRBdHRyaWJ1dGUoKS5kYXRhc2V0LnNob3dQYWdlKVxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi52YWx1ZSlcbiAgcGFnZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICBpZiAocHJldlBhZ2VOdW1iZXIgPiBwYXJzZUludChwYWdlLmRhdGFzZXQuc2hvd1BhZ2UpKSB7XG4gICAgcGFnZS5hbmltYXRlKHsgYm90dG9tOiBbXCIxMDAlXCIsIDBdIH0sIDYwMClcbiAgICBzZWxlY3RlZC52YWx1ZSA9IHRydWVcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgcGFnZS5hbmltYXRlKHtcbiAgICAgIHRvcDogW1wiMTAwJVwiLCAwXSxcbiAgICAgIGhlaWdodDogWzAsIFwiMTAwJVwiXVxuICAgIH0sIDYwMClcbiAgICBzZWxlY3RlZC52YWx1ZSA9IHRydWVcbiAgICByZXR1cm5cbiAgfVxufVxuXG5jb25zdCBoYW5kbGVTY3JvbGwgPSBlID0+IHtcbiAgY29uc3QgcHJldlBhZ2UgPSByZXNldFNlbGVjdGVkQXR0cmlidXRlKGUpXG4gIGNvbnN0IHByZXZQYWdlTnVtYmVyID0gcGFyc2VJbnQocHJldlBhZ2UuZGF0YXNldC5zaG93UGFnZSk7XG4gIGxldCBuZXh0UGFnZSxcbiAgICAgIHNpZGVOYXZCdG47XG4gIGlmIChlLmRlbHRhWSA+IDAgJiYgcHJldlBhZ2VOdW1iZXIgPCAzKSB7XG4gICAgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zaG93LXBhZ2U9XCIke3ByZXZQYWdlTnVtYmVyICsgMSB9XCJdYCk7XG4gICAgc2lkZU5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHtuZXh0UGFnZS5hdHRyaWJ1dGVzLmlkLnZhbHVlfVwiYClcbiAgICBzaWRlTmF2QnRuLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgbmV4dFBhZ2Uuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSlcbiAgICBuZXh0UGFnZS5hbmltYXRlKHtcbiAgICAgIHRvcDogW1wiMTAwJVwiLCAwXSxcbiAgICAgIGhlaWdodDogWzAsIFwiMTAwJVwiXVxuICAgIH0sIDYwMClcbiAgICBcbiAgICBcbiAgfSBlbHNlIGlmIChlLmRlbHRhWSA8IDAgJiYgcHJldlBhZ2VOdW1iZXIgPiAxKSB7XG4gICAgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zaG93LXBhZ2U9XCIke3ByZXZQYWdlTnVtYmVyIC0gMX1cImApO1xuICAgIHNpZGVOYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaHJlZj1cIiR7bmV4dFBhZ2UuYXR0cmlidXRlcy5pZC52YWx1ZX1cImApXG4gICAgc2lkZU5hdkJ0bi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICAgIG5leHRQYWdlLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgbmV4dFBhZ2UuYW5pbWF0ZSh7IGJvdHRvbTogW1wiMTAwJVwiLCAwXSB9LCA2MDApXG4gIH1cbn1cblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggPGRpdj4gdGFnXG5jb25zdCBzY3JvbGxMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1uYXZcIikucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKVxuZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxMaW5rcy5sZW5ndGg7IGkrKykge1xuICBjb25zdCBlbGVtZW50ID0gc2Nyb2xsTGlua3NbaV07XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVBhZ2VzKVxufVxuXG4vLyBBZGQgZXZlbnQgbGlzdG5lciB0byBzY3JvbGxcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVTY3JvbGwpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
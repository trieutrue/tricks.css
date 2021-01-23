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
}; //Fetch squirtle cards when DOM is loaded


document.addEventListener("DOMContentLoaded", function (e) {
  fetch("https://api.pokemontcg.io/v1/cards?name=squirtle").then(function (res) {
    return res.json();
  }).then(function (data) {
    return appendCards(data);
  });
});

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
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9lNGFhIl0sIm5hbWVzIjpbInRleHQiLCJhcHBlbmRDYXJkcyIsImNhcmRzIiwiY2FyZHNQYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImNhcmQiLCJpZHgiLCJjcmVhdGVDYXJkIiwicGFnZSIsImNhcmRGbGlwIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImlubmVyIiwiZnJvbnQiLCJiYWNrIiwiaW1nIiwiaW1hZ2VVcmwiLCJhcHBlbmQiLCJzdHlsZSIsImxlZnQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlVHJhbnNmb3JtIiwibW92ZUNhcmRzIiwiZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjdXJyZW50VGFyZ2V0IiwidHJhbnNmb3JtIiwib3JkZXIiLCJwYXJzZUludCIsImRhdGFzZXQiLCJpIiwibGVuZ3RoIiwic2xpY2UiLCJ0eXBlIiwiYW5pbWF0ZSIsImVhc2luZyIsInJlc2V0U2VsZWN0ZWRBdHRyaWJ1dGUiLCJidG5zIiwicGFnZXMiLCJidG4iLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJoYW5kbGVQYWdlcyIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZWQiLCJocmVmIiwiQm9vbGVhbiIsImdldEVsZW1lbnRCeUlkIiwiYm90dG9tIiwidG9wIiwiaGVpZ2h0Iiwic2Nyb2xsTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FB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SUFBakI7QUFDRCxDQXBCRCxDLENBc0JBOzs7QUFDQSxJQUFNVSxXQUFXLEdBQUd4RCxRQUFRLENBQUNvRCxjQUFULENBQXdCLFVBQXhCLEVBQW9DSyxnQkFBcEMsQ0FBcUQsS0FBckQsQ0FBcEI7O0FBQ0EsS0FBSyxJQUFJdEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FCLFdBQVcsQ0FBQ3BCLE1BQWhDLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLE1BQU11QixPQUFPLEdBQUdGLFdBQVcsQ0FBQ3JCLENBQUQsQ0FBM0I7QUFDQXVCLFNBQU8sQ0FBQ3RDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDMkIsV0FBbEM7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUM1Q0Q7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvcGFnZXNcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9jYXJkc1wiO1xuXG5jb25zdCB0ZXh0ID0gXCJUcmlja3NcIlxuXG4vLyBjb25zdCB0eXBld3JpdGVyID0gKHR4dCkgPT4ge1xuLy8gICBpZiAoaSA8IHR4dC5sZW5ndGgpIHtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIikuaW5uZXJIVE1MICs9IHR4dFtpXVxuLy8gICAgIGkrKztcbi8vICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIDI1MClcbi8vICAgfVxuLy8gfVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIHR5cGV3cml0ZXIodGV4dClcbi8vIH0pIiwiY29uc3QgYXBwZW5kQ2FyZHMgPSAoeyBjYXJkcyB9KSA9PiB7XG4gIGNvbnN0IGNhcmRzUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY3JvbGwtbWVudVwiKVswXVxuICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpZHgpID0+IGNyZWF0ZUNhcmQoY2FyZCwgY2FyZHNQYWdlLCBpZHgpKVxufVxuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQsIHBhZ2UsIGlkeCkgPT4ge1xuICBjb25zdCBjYXJkRmxpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNhcmRGbGlwLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZmxpcCcpXG4gIGNhcmRGbGlwLnNldEF0dHJpYnV0ZShcImRhdGEtb3JkZXJcIiwgaWR4KVxuICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGlubmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW5uZXInKVxuICBjb25zdCBmcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZyb250LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnQnKVxuICBjb25zdCBiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2snKVxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY2FyZC5pbWFnZVVybClcbiAgYmFjay5hcHBlbmQoaW1nKVxuICBpbm5lci5hcHBlbmQoZnJvbnQsIGJhY2spXG4gIGNhcmRGbGlwLmFwcGVuZChpbm5lcilcbiAgY2FyZEZsaXAuc3R5bGUubGVmdCA9IGAke2lkeCAqIDE1MH1weGBcbiAgY2FyZEZsaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVRyYW5zZm9ybSlcbiAgY2FyZEZsaXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBtb3ZlQ2FyZHMpXG4gIGNhcmRGbGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBtb3ZlQ2FyZHMpXG4gIHBhZ2UuYXBwZW5kKGNhcmRGbGlwKVxufVxuXG4vL0ZldGNoIHNxdWlydGxlIGNhcmRzIHdoZW4gRE9NIGlzIGxvYWRlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcbiAgZmV0Y2goXCJodHRwczovL2FwaS5wb2tlbW9udGNnLmlvL3YxL2NhcmRzP25hbWU9c3F1aXJ0bGVcIilcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4gYXBwZW5kQ2FyZHMoZGF0YSkpXG59KVxuXG5cbmNvbnN0IHRvZ2dsZVRyYW5zZm9ybSA9IGUgPT4ge1xuICBjb25zdCB7IGZpcnN0RWxlbWVudENoaWxkIH0gPSBlLmN1cnJlbnRUYXJnZXRcbiAgaWYgKCFmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2Zvcm0pIHtcbiAgICBmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoLTE4MGRlZylcIlxuICB9IGVsc2Uge1xuICAgIGZpcnN0RWxlbWVudENoaWxkLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCJcbiAgfVxufVxuXG5jb25zdCBtb3ZlQ2FyZHMgPSBlID0+IHtcbiAgY29uc3Qgb3JkZXIgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFtcIm9yZGVyXCJdKSArIDE7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZC1mbGlwJyk7XG5cbiAgZm9yIChsZXQgaSA9IG9yZGVyOyBpIDwgY2FyZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgY2FyZCA9IGNhcmRzW2ldO1xuICAgIGxldCBsZWZ0ID0gcGFyc2VJbnQoY2FyZC5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSlcbiAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlb3V0XCIpIHtcbiAgICAgIGNhcmQuYW5pbWF0ZSh7IGxlZnQ6IFtgJHtsZWZ0fXB4YCwgYCR7bGVmdC0xMDB9cHhgXSwgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCJ9KVxuICAgIH1cbiAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlb3ZlclwiKSB7XG4gICAgICBjYXJkLmFuaW1hdGUoeyBsZWZ0OiBbYCR7bGVmdH1weGAsIGAke2xlZnQgKyAxMDB9cHhgXSwgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIgfSlcbiAgICB9XG4gIH1cbn0iLCIvL1NpZGUtTmF2IGNsaWNrIGhhbmRsZXJcbi8vU2F2ZSByZWYgdG8gY3VycmVudCBzZWN0aW9uP1xuLy9zZXQgY3VycmVudCBzZWN0aW9uIGhlaWdodCBhbmltYXRpb24gdG8gMCVcbi8vc2V0IG5leHQgc2VjdGlvbiBoZWlnaHQgYW5pbWF0aW9uIHRvIDEwMFxuY29uc3QgcmVzZXRTZWxlY3RlZEF0dHJpYnV0ZSA9ICgpID0+IHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXJjbGUtYnRuXCIpXG4gIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjcm9sbC1wYWdlXCIpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYnRuID0gYnRuc1tpXTtcbiAgICBjb25zdCBwYWdlID0gcGFnZXNbaV07XG4gICAgaWYgKGJ0bi5hdHRyaWJ1dGVzW1wic2VsZWN0ZWRcIl0udmFsdWUpIGJ0bi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKVxuICAgIGlmIChwYWdlLmF0dHJpYnV0ZXNbXCJzZWxlY3RlZFwiXS52YWx1ZSkgcGFnZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKVxuICB9XG59XG5cbi8vRXZlbnQgaGFuZGxlclxuY29uc3QgaGFuZGxlUGFnZXMgPSBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBocmVmIH0gPSBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1xuICBpZiAoQm9vbGVhbihzZWxlY3RlZC52YWx1ZSkpIHJldHVyblxuXG4gIHJlc2V0U2VsZWN0ZWRBdHRyaWJ1dGUoKVxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi52YWx1ZSlcbiAgcGFnZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKVxuICBzd2l0Y2ggKGhyZWYudmFsdWUpIHtcbiAgICBjYXNlIFwic3BsYXNoXCI6XG4gICAgICBwYWdlLmFuaW1hdGUoeyBib3R0b206IFtcIjEwMCVcIiwgMF0gfSwgNjAwKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwiY2FyZHNcIjpcbiAgICAgIHBhZ2UuYW5pbWF0ZSh7XG4gICAgICAgIHRvcDogW1wiMTAwJVwiLCAwXSxcbiAgICAgICAgaGVpZ2h0OiBbMCwgXCIxMDAlXCJdXG4gICAgICB9LCA2MDApXG4gICAgICBicmVha1xuICB9XG4gIHNlbGVjdGVkLnZhbHVlID0gdHJ1ZVxufVxuXG4vL0FkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIDxkaXY+IHRhZ1xuY29uc3Qgc2Nyb2xsTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtbmF2XCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIilcbmZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsTGlua3MubGVuZ3RoOyBpKyspIHtcbiAgY29uc3QgZWxlbWVudCA9IHNjcm9sbExpbmtzW2ldO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQYWdlcylcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
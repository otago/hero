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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controls = __webpack_require__("./client/src/components/controls.js");

var _controls2 = _interopRequireDefault(_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _controls2.default)();
});

/***/ }),

/***/ "./client/src/components/controls.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var buttonPrevious = document.getElementsByClassName('op__hero--controls-previous')[0];
  var buttonNext = document.getElementsByClassName('op__hero--controls-next')[0];
  var heroItemContainer = document.getElementsByClassName('op__hero--items')[0];
  var heroItemCount = heroItemContainer.children.length;
  var swipeThreshold = 100;

  var mouseDown = false;
  var currentPosition = 0;
  var startingCoords = [0, 0];

  var getUpdatedCurrentPosition = function getUpdatedCurrentPosition(desiredPosition) {
    if (desiredPosition < 0) {
      currentPosition = 0;
    } else {
      currentPosition = desiredPosition < heroItemCount ? desiredPosition : heroItemCount - 1;
    }
    return currentPosition;
  };
  var getPositionPercentage = function getPositionPercentage(position) {
    return '-' + position * 100 + '%';
  };
  var moveToPosition = function moveToPosition(newPosition) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (offset !== 0) {
      heroItemContainer.style.left = 'calc(' + getPositionPercentage(newPosition) + ' - ' + offset + 'px)';
    } else {
      heroItemContainer.style.left = getPositionPercentage(newPosition);
    }
  };

  var goSame = function goSame() {
    return moveToPosition(getUpdatedCurrentPosition(currentPosition));
  };
  var goPrevious = function goPrevious() {
    return moveToPosition(getUpdatedCurrentPosition(currentPosition - 1));
  };
  var goNext = function goNext() {
    return moveToPosition(getUpdatedCurrentPosition(currentPosition + 1));
  };

  buttonPrevious.addEventListener('click', function () {
    return goPrevious();
  });
  buttonNext.addEventListener('click', function () {
    return goNext();
  });

  var getOffsetCoords = function getOffsetCoords(coords) {
    return [startingCoords[0] - coords[0], startingCoords[1] - coords[1]];
  };

  heroItemContainer.addEventListener('mousedown', function (e) {
    e.preventDefault();
    startingCoords = [e.clientX, e.clientY];
    heroItemContainer.classList.add('dragging');
    mouseDown = true;
  });

  heroItemContainer.addEventListener('mousemove', function (e) {
    if (mouseDown) {
      e.preventDefault();
      var coords = getOffsetCoords([e.clientX, e.clientY]);
      moveToPosition(currentPosition, coords[0]);
    }
  });

  heroItemContainer.addEventListener('mouseup', function (e) {
    e.preventDefault();
    heroItemContainer.classList.remove('dragging');
    mouseDown = false;
    var coords = getOffsetCoords([e.clientX, e.clientY]);

    if (Math.abs(coords[0]) > swipeThreshold) {
      if (coords[0] > 0) {
        goNext();
      } else {
        goPrevious();
      }
    } else {
      goSame();
    }
  });
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
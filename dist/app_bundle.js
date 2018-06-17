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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _drawNinja = __webpack_require__(/*! ./modules/draw-ninja.js */ \"./src/modules/draw-ninja.js\");\n\nfunction init() {\n  console.log('Loading pixels');\n\n  var canvas = document.createElement('canvas');\n  canvas.width = 800;\n  canvas.height = 600;\n\n  document.body.appendChild(canvas);\n  return canvas;\n}\n\nvar canvas = init();\nvar c = canvas.getContext('2d');\nvar posX = 60;\nvar walking = true;\n\nfunction draw(timestamp) {\n  c.clearRect(0, 0, canvas.width, canvas.height);\n\n  // sky\n  c.fillStyle = '#DFFFFF';\n  c.fillRect(0, 0, 800, 400);\n\n  // ground\n  c.fillStyle = '#329F5B';\n  c.fillRect(0, 400, 800, 600);\n\n  (0, _drawNinja.drawNinjaWalking2)(_extends({}, _drawNinja.ninjaRed, {\n    c: c,\n    xOffset: 360,\n    yOffset: 350,\n    scale: 10\n  }));\n\n  (0, _drawNinja.drawNinjaWalking1)(_extends({}, _drawNinja.ninjaDark, {\n    c: c,\n    xOffset: 160,\n    yOffset: 350,\n    scale: 20\n  }));\n\n  // todo: good tutorial\n  // https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript\n\n  if (walking) {\n    if (parseInt((timestamp + '').charAt(0)) % 2) {\n      (0, _drawNinja.drawNinjaWalking1)(_extends({}, _drawNinja.ninjaBlue, {\n        c: c,\n        xOffset: posX,\n        yOffset: 350,\n        scale: 10\n      }));\n    } else {\n      (0, _drawNinja.drawNinjaWalking2)(_extends({}, _drawNinja.ninjaBlue, {\n        c: c,\n        xOffset: posX,\n        yOffset: 350,\n        scale: 10\n      }));\n    }\n  }\n\n  posX++;\n\n  window.requestAnimationFrame(draw);\n}\n\nwindow.requestAnimationFrame(draw);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/draw-helpers.js":
/*!*************************************!*\
  !*** ./src/modules/draw-helpers.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.drawScaled = drawScaled;\nexports.drawLine = drawLine;\nfunction drawScaled(context, x, y) {\n  var c = context.c,\n      _context$xOffset = context.xOffset,\n      xOffset = _context$xOffset === undefined ? 0 : _context$xOffset,\n      _context$yOffset = context.yOffset,\n      yOffset = _context$yOffset === undefined ? 0 : _context$yOffset,\n      _context$scale = context.scale,\n      scale = _context$scale === undefined ? 1 : _context$scale,\n      _context$fillStyle = context.fillStyle,\n      fillStyle = _context$fillStyle === undefined ? 'black' : _context$fillStyle;\n\n  c.fillStyle = fillStyle;\n  c.fillRect(x * scale + xOffset, y * scale + yOffset, scale, scale);\n}\n\nfunction drawLine(context, pixels) {\n  pixels.forEach(function (pixel, index) {\n    return drawScaled(_extends({}, context, { fillStyle: pixel, yOffset: context.yOffset + context.row * context.scale }), index, 0);\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/draw-helpers.js?");

/***/ }),

/***/ "./src/modules/draw-ninja.js":
/*!***********************************!*\
  !*** ./src/modules/draw-ninja.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ninjaRed = exports.ninjaDark = exports.ninjaBlue = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.drawNinja = drawNinja;\nexports.drawNinjaWalking1 = drawNinjaWalking1;\nexports.drawNinjaWalking2 = drawNinjaWalking2;\n\nvar _drawHelpers = __webpack_require__(/*! ./draw-helpers.js */ \"./src/modules/draw-helpers.js\");\n\nfunction drawNinja(figure) {\n  var theme = figure.theme;\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 0 }), ['transparent', 'transparent', 'transparent', theme.main, theme.main, 'transparent', 'transparent', 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 1 }), ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 2 }), ['transparent', theme.main, theme.skin, 'black', theme.skin, 'black', theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 3 }), [theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main]);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 4 }), ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 5 }), ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 6 }), ['transparent', 'transparent', theme.main, 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 7 }), ['transparent', 'transparent', theme.main, 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);\n}\n\nfunction drawNinjaWalking1(figure) {\n  var theme = figure.theme;\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 0 }), ['transparent', 'transparent', 'transparent', theme.main, theme.main, 'transparent', 'transparent', 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 1 }), ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 2 }), ['transparent', theme.main, theme.skin, 'black', theme.skin, 'black', theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 3 }), [theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main]);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 4 }), ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 5 }), ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 6 }), ['transparent', 'transparent', theme.main, 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 7 }), ['transparent', 'transparent', 'transparent', 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);\n}\n\nfunction drawNinjaWalking2(figure) {\n  var theme = figure.theme;\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 0 }), ['transparent', 'transparent', 'transparent', theme.main, theme.main, 'transparent', 'transparent', 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 1 }), ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 2 }), ['transparent', theme.main, theme.skin, 'black', theme.skin, 'black', theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 3 }), [theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main]);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 4 }), ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 5 }), ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 6 }), ['transparent', 'transparent', theme.main, 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);\n  (0, _drawHelpers.drawLine)(_extends({}, figure, { row: 7 }), ['transparent', 'transparent', theme.main, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent']);\n}\n\nvar ninjaBlue = exports.ninjaBlue = {\n  theme: {\n    main: '#92DCE5',\n    skin: '#FFA07A'\n  }\n};\n\nvar ninjaDark = exports.ninjaDark = {\n  theme: {\n    main: '#2B303A',\n    skin: '#FFA07A'\n  }\n};\n\nvar ninjaRed = exports.ninjaRed = {\n  theme: {\n    main: '#D64933',\n    skin: '#FFA07A'\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/draw-ninja.js?");

/***/ })

/******/ });
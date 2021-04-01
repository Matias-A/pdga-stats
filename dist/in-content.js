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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

eval("let elems = document.getElementsByClassName(\"pane-page-title\");\nif (elems[0] !== undefined) {\n    let elemdiv1 = elems[0];\n    let elemdiv2 = elemdiv1.getElementsByClassName(\"pane-content\")[0];\n    if (elemdiv2 !== undefined) {\n        let text = elemdiv2.getElementsByTagName(\"h1\")[0];\n        text.innerHTML += \" (extension working)\";\n    }\n}\n\nlet tables = document.getElementsByClassName(\"tablesorter\");\nconsole.log(tables);\nconsole.log(tables.length);\nfor (let i = 0; i < tables.length; i++) {\n    let table = tables[i];\n\n    console.log(table);\n    let rows = table.getElementsByTagName(\"tr\");\n    for (let j = 0; j < rows.length; j++) {\n        let row = rows[j];\n        let newCell = row.insertCell(-1);\n        newCell.innerHTML = \"(empty)\";\n    };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvaW4tY29udGVudC5qcz9iODc5Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYW5lLXBhZ2UtdGl0bGVcIik7XG5pZiAoZWxlbXNbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgIGxldCBlbGVtZGl2MSA9IGVsZW1zWzBdO1xuICAgIGxldCBlbGVtZGl2MiA9IGVsZW1kaXYxLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYW5lLWNvbnRlbnRcIilbMF07XG4gICAgaWYgKGVsZW1kaXYyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IHRleHQgPSBlbGVtZGl2Mi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImgxXCIpWzBdO1xuICAgICAgICB0ZXh0LmlubmVySFRNTCArPSBcIiAoZXh0ZW5zaW9uIHdvcmtpbmcpXCI7XG4gICAgfVxufVxuXG5sZXQgdGFibGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYmxlc29ydGVyXCIpO1xuY29uc29sZS5sb2codGFibGVzKTtcbmNvbnNvbGUubG9nKHRhYmxlcy5sZW5ndGgpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFibGUgPSB0YWJsZXNbaV07XG5cbiAgICBjb25zb2xlLmxvZyh0YWJsZSk7XG4gICAgbGV0IHJvd3MgPSB0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRyXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93cy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgcm93ID0gcm93c1tqXTtcbiAgICAgICAgbGV0IG5ld0NlbGwgPSByb3cuaW5zZXJ0Q2VsbCgtMSk7XG4gICAgICAgIG5ld0NlbGwuaW5uZXJIVE1MID0gXCIoZW1wdHkpXCJcbiAgICB9O1xuXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9pbi1jb250ZW50LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })

/******/ });
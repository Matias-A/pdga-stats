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

eval("let tablesLoaded = false;\nlet extraCols = [{\n    \"name\": \"# Rounds\"\n}];\n\ndocument.addEventListener('readystatechange', event => {\n    // Prevents infinite loops when new data is loaded\n    if (tablesLoaded) return;\n\n    let tables = document.getElementsByClassName(\"tablesorter\");\n    // Waits until the table is populated\n    if (tables.length === 0) return;\n\n    for (let i = 0; i < tables.length; i++) {\n        let table = tables[i];\n        console.log(table);\n\n        let thead = table.getElementsByTagName(\"thead\");\n        let headerRows = thead[0].getElementsByTagName(\"tr\");\n        let tbody = table.getElementsByTagName(\"tbody\");\n        let bodyRows = tbody[0].getElementsByTagName(\"tr\");\n\n        // Adds each of the extra columns and fetches the relevant data\n        for (let j = 0; j < extraCols.length; j++) {\n            // First updates the column header\n            let columnHeader = document.createElement(\"TH\");\n            let columnHeaderDiv = document.createElement(\"DIV\");\n            columnHeaderDiv.innerHTML = extraCols[j].name;\n            columnHeaderDiv.className = \"tablesorter-header-inner\";\n            columnHeader.appendChild(columnHeaderDiv);\n            headerRows[0].appendChild(columnHeader);\n\n            for (let k = 0; k < bodyRows.length; k++) {\n                let row = bodyRows[k];\n                let newCell = row.insertCell(-1);\n                newCell.innerHTML = \"(loading...)\";\n            };\n        }\n    };\n\n    tablesLoaded = true;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvaW4tY29udGVudC5qcz9iODc5Il0sInNvdXJjZXNDb250ZW50IjpbImxldCB0YWJsZXNMb2FkZWQgPSBmYWxzZTtcbmxldCBleHRyYUNvbHMgPSBbXG4gICAge1xuICAgICAgICBcIm5hbWVcIiA6IFwiIyBSb3VuZHNcIlxuICAgIH1cbl1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIChldmVudCkgPT4ge1xuICAgIC8vIFByZXZlbnRzIGluZmluaXRlIGxvb3BzIHdoZW4gbmV3IGRhdGEgaXMgbG9hZGVkXG4gICAgaWYgKHRhYmxlc0xvYWRlZCkgcmV0dXJuO1xuXG4gICAgbGV0IHRhYmxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsZXNvcnRlclwiKTtcbiAgICAvLyBXYWl0cyB1bnRpbCB0aGUgdGFibGUgaXMgcG9wdWxhdGVkXG4gICAgaWYgKHRhYmxlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IHRhYmxlc1tpXTtcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xuXG4gICAgICAgIGxldCB0aGVhZCA9IHRhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhlYWRcIik7XG4gICAgICAgIGxldCBoZWFkZXJSb3dzID0gdGhlYWRbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0clwiKTtcbiAgICAgICAgbGV0IHRib2R5ID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKTtcbiAgICAgICAgbGV0IGJvZHlSb3dzID0gdGJvZHlbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0clwiKTtcblxuICAgICAgICAvLyBBZGRzIGVhY2ggb2YgdGhlIGV4dHJhIGNvbHVtbnMgYW5kIGZldGNoZXMgdGhlIHJlbGV2YW50IGRhdGFcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqPGV4dHJhQ29scy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLy8gRmlyc3QgdXBkYXRlcyB0aGUgY29sdW1uIGhlYWRlclxuICAgICAgICAgICAgbGV0IGNvbHVtbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUSFwiKTtcbiAgICAgICAgICAgIGxldCBjb2x1bW5IZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICAgICAgICAgICAgY29sdW1uSGVhZGVyRGl2LmlubmVySFRNTCA9IGV4dHJhQ29sc1tqXS5uYW1lO1xuICAgICAgICAgICAgY29sdW1uSGVhZGVyRGl2LmNsYXNzTmFtZSA9IFwidGFibGVzb3J0ZXItaGVhZGVyLWlubmVyXCI7XG4gICAgICAgICAgICBjb2x1bW5IZWFkZXIuYXBwZW5kQ2hpbGQoY29sdW1uSGVhZGVyRGl2KTtcbiAgICAgICAgICAgIGhlYWRlclJvd3NbMF0uYXBwZW5kQ2hpbGQoY29sdW1uSGVhZGVyKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaz0wOyBrPGJvZHlSb3dzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGJvZHlSb3dzW2tdO1xuICAgICAgICAgICAgICAgIGxldCBuZXdDZWxsID0gcm93Lmluc2VydENlbGwoLTEpO1xuICAgICAgICAgICAgICAgIG5ld0NlbGwuaW5uZXJIVE1MID0gXCIobG9hZGluZy4uLilcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0YWJsZXNMb2FkZWQgPSB0cnVlO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2luLWNvbnRlbnQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })

/******/ });
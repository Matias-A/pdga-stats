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

eval("let tablesLoaded = false;\nlet extraCols = [{\n    \"name\": \"# Rounds\",\n    \"className\": \"number-of-rounds\"\n}, {\n    \"name\": \"Avg Rating\",\n    \"className\": \"average-round-rating\"\n}];\n\ndocument.addEventListener('readystatechange', event => {\n    // Prevents infinite loops when new data is loaded\n    if (tablesLoaded) return;\n\n    let tables = document.getElementsByClassName(\"tablesorter\");\n    // Waits until the table is populated\n    if (tables.length === 0) return;\n\n    for (let i = 0; i < tables.length; i++) {\n        let table = tables[i];\n        console.log(table);\n\n        let thead = table.getElementsByTagName(\"thead\");\n        let tbody = table.getElementsByTagName(\"tbody\");\n\n        let headerRows = thead[0].getElementsByTagName(\"tr\");\n        let bodyRows = tbody[0].getElementsByTagName(\"tr\");\n\n        addExtraCols(headerRows[0], bodyRows);\n        fetchData(bodyRows);\n    };\n\n    // Finally updates tablesLoaded to make sure the function is only run once\n    tablesLoaded = true;\n});\n\n// Adds each of the extra columns\n// Populates the header cell, adds a dummy \"loading\" message to each body cell\nfunction addExtraCols(headerRow, bodyRows) {\n    for (let j = 0; j < extraCols.length; j++) {\n        // First updates the column header\n        let columnHeader = document.createElement(\"TH\");\n        let columnHeaderDiv = document.createElement(\"DIV\");\n        columnHeaderDiv.innerHTML = extraCols[j].name;\n        columnHeaderDiv.className = \"tablesorter-header-inner\";\n        columnHeader.appendChild(columnHeaderDiv);\n        headerRow.appendChild(columnHeader);\n\n        // Then adds the \"loading\" message to each of the rows\n        for (let k = 0; k < bodyRows.length; k++) {\n            let row = bodyRows[k];\n            let newCell = row.insertCell(-1);\n            newCell.innerHTML = \"<i>Loading...</i>\";\n            newCell.className = extraCols[j].className;\n        };\n    }\n}\n\n// Loops over each row in a table, starting the content fetching process\nfunction fetchData(bodyRows) {\n    for (let i = 0; i < bodyRows.length; i++) {\n        let row = bodyRows[i];\n        let tournamentCell = row.getElementsByClassName(\"tournament\")[0];\n        let tournamentLink = tournamentCell.getElementsByTagName(\"a\")[0];\n        console.log(tournamentLink.href);\n        // TODO: asynchronously load the page at the link,\n        // call updateData() afterwards\n    }\n}\n\n// Takes the relevant data found in fetchData,\n// updates the newly added columns in this specific row\nfunction updateData(row, data) {\n    // TODO: fill this in\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvaW4tY29udGVudC5qcz9iODc5Il0sInNvdXJjZXNDb250ZW50IjpbImxldCB0YWJsZXNMb2FkZWQgPSBmYWxzZTtcbmxldCBleHRyYUNvbHMgPSBbXG4gICAge1xuICAgICAgICBcIm5hbWVcIiA6IFwiIyBSb3VuZHNcIixcbiAgICAgICAgXCJjbGFzc05hbWVcIiA6IFwibnVtYmVyLW9mLXJvdW5kc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiIDogXCJBdmcgUmF0aW5nXCIsXG4gICAgICAgIFwiY2xhc3NOYW1lXCIgOiBcImF2ZXJhZ2Utcm91bmQtcmF0aW5nXCJcbiAgICB9LFxuXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIChldmVudCkgPT4ge1xuICAgIC8vIFByZXZlbnRzIGluZmluaXRlIGxvb3BzIHdoZW4gbmV3IGRhdGEgaXMgbG9hZGVkXG4gICAgaWYgKHRhYmxlc0xvYWRlZCkgcmV0dXJuO1xuXG4gICAgbGV0IHRhYmxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsZXNvcnRlclwiKTtcbiAgICAvLyBXYWl0cyB1bnRpbCB0aGUgdGFibGUgaXMgcG9wdWxhdGVkXG4gICAgaWYgKHRhYmxlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IHRhYmxlc1tpXTtcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xuXG4gICAgICAgIGxldCB0aGVhZCA9IHRhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhlYWRcIik7XG4gICAgICAgIGxldCB0Ym9keSA9IHRhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIik7XG5cbiAgICAgICAgbGV0IGhlYWRlclJvd3MgPSB0aGVhZFswXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRyXCIpO1xuICAgICAgICBsZXQgYm9keVJvd3MgPSB0Ym9keVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRyXCIpO1xuXG4gICAgICAgIGFkZEV4dHJhQ29scyhoZWFkZXJSb3dzWzBdLCBib2R5Um93cyk7XG4gICAgICAgIGZldGNoRGF0YShib2R5Um93cyk7XG4gICAgfTtcblxuICAgIC8vIEZpbmFsbHkgdXBkYXRlcyB0YWJsZXNMb2FkZWQgdG8gbWFrZSBzdXJlIHRoZSBmdW5jdGlvbiBpcyBvbmx5IHJ1biBvbmNlXG4gICAgdGFibGVzTG9hZGVkID0gdHJ1ZTtcbn0pO1xuXG4vLyBBZGRzIGVhY2ggb2YgdGhlIGV4dHJhIGNvbHVtbnNcbi8vIFBvcHVsYXRlcyB0aGUgaGVhZGVyIGNlbGwsIGFkZHMgYSBkdW1teSBcImxvYWRpbmdcIiBtZXNzYWdlIHRvIGVhY2ggYm9keSBjZWxsXG5mdW5jdGlvbiBhZGRFeHRyYUNvbHMoaGVhZGVyUm93LCBib2R5Um93cykge1xuICAgIGZvciAobGV0IGo9MDsgajxleHRyYUNvbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLy8gRmlyc3QgdXBkYXRlcyB0aGUgY29sdW1uIGhlYWRlclxuICAgICAgICBsZXQgY29sdW1uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRIXCIpO1xuICAgICAgICBsZXQgY29sdW1uSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcbiAgICAgICAgY29sdW1uSGVhZGVyRGl2LmlubmVySFRNTCA9IGV4dHJhQ29sc1tqXS5uYW1lO1xuICAgICAgICBjb2x1bW5IZWFkZXJEaXYuY2xhc3NOYW1lID0gXCJ0YWJsZXNvcnRlci1oZWFkZXItaW5uZXJcIjtcbiAgICAgICAgY29sdW1uSGVhZGVyLmFwcGVuZENoaWxkKGNvbHVtbkhlYWRlckRpdik7XG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChjb2x1bW5IZWFkZXIpO1xuXG4gICAgICAgIC8vIFRoZW4gYWRkcyB0aGUgXCJsb2FkaW5nXCIgbWVzc2FnZSB0byBlYWNoIG9mIHRoZSByb3dzXG4gICAgICAgIGZvciAobGV0IGs9MDsgazxib2R5Um93cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGJvZHlSb3dzW2tdO1xuICAgICAgICAgICAgbGV0IG5ld0NlbGwgPSByb3cuaW5zZXJ0Q2VsbCgtMSk7XG4gICAgICAgICAgICBuZXdDZWxsLmlubmVySFRNTCA9IFwiPGk+TG9hZGluZy4uLjwvaT5cIlxuICAgICAgICAgICAgbmV3Q2VsbC5jbGFzc05hbWUgPSBleHRyYUNvbHNbal0uY2xhc3NOYW1lO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuLy8gTG9vcHMgb3ZlciBlYWNoIHJvdyBpbiBhIHRhYmxlLCBzdGFydGluZyB0aGUgY29udGVudCBmZXRjaGluZyBwcm9jZXNzXG5mdW5jdGlvbiBmZXRjaERhdGEoYm9keVJvd3MpIHtcbiAgICBmb3IgKGxldCBpPTA7IGk8Ym9keVJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJvdyA9IGJvZHlSb3dzW2ldO1xuICAgICAgICBsZXQgdG91cm5hbWVudENlbGwgPSByb3cuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvdXJuYW1lbnRcIilbMF07XG4gICAgICAgIGxldCB0b3VybmFtZW50TGluayA9IHRvdXJuYW1lbnRDZWxsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXTtcbiAgICAgICAgY29uc29sZS5sb2codG91cm5hbWVudExpbmsuaHJlZik7XG4gICAgICAgIC8vIFRPRE86IGFzeW5jaHJvbm91c2x5IGxvYWQgdGhlIHBhZ2UgYXQgdGhlIGxpbmssXG4gICAgICAgIC8vIGNhbGwgdXBkYXRlRGF0YSgpIGFmdGVyd2FyZHNcbiAgICB9XG59XG5cbi8vIFRha2VzIHRoZSByZWxldmFudCBkYXRhIGZvdW5kIGluIGZldGNoRGF0YSxcbi8vIHVwZGF0ZXMgdGhlIG5ld2x5IGFkZGVkIGNvbHVtbnMgaW4gdGhpcyBzcGVjaWZpYyByb3dcbmZ1bmN0aW9uIHVwZGF0ZURhdGEocm93LCBkYXRhKSB7XG4gICAgLy8gVE9ETzogZmlsbCB0aGlzIGluXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2luLWNvbnRlbnQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })

/******/ });
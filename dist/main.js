/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load.js */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog.js */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_price_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/price.js */ \"./src/modules/price.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_price_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\n\n//# sourceURL=webpack://shop/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n\tconst cartBtn = document.querySelector('#cart')\r\n\tconst cartModal = document.querySelector('.cart')\r\n\tconst cartCloseBtn = cartModal.querySelector('.cart-close')\r\n\r\n\tconst openCart = () => {\r\n\t\tcartModal.style.display = 'flex'\r\n\t}\r\n\tconst closeCart = () => {\r\n\t\tcartModal.style.display = ''\r\n\t}\r\n\r\n\tcartBtn.addEventListener('click', openCart)\r\n\tcartCloseBtn.addEventListener('click', closeCart)\r\n\r\n\tconsole.dir(cartBtn)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://shop/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n\tconst btnCatalog = document.querySelector('.catalog-button > button')\r\n\tconst catalogModal = document.querySelector('.catalog')\r\n\tconst catalogModalItem = document.querySelectorAll('.catalog li')\r\n\r\n\tlet isOpen = false\r\n\r\n\tbtnCatalog.addEventListener('click', () => {\r\n\t\tisOpen = !isOpen\r\n\t\tif (isOpen) {\r\n\t\t\tcatalogModal.style.display = 'block'\r\n\t\t} else {\r\n\t\t\tcatalogModal.style.display = ''\r\n\t\t}\r\n\t})\r\n\r\n\tcatalogModalItem.forEach((item) => {\r\n\t\titem.addEventListener('click', () => {\r\n\t\t\tconst text = item.textContent\r\n\t\t\t;(0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t\t\t;(0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter_js__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://shop/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n\treturn goods.filter((goodsItem) => {\r\n\t\tconst titleUpper = goodsItem.title.toUpperCase()\r\n\t\treturn titleUpper.includes(value.toUpperCase())\r\n\t})\r\n}\r\n\r\nconst categoryFilter = (goods, value) => {\r\n\treturn goods.filter((goodsItem) => {\r\n\t\treturn goodsItem.category === value\r\n\t})\r\n}\r\n\r\nconst priceFilter = (goods, min, max) => {\r\n\treturn goods.filter((goodsItem) => {\r\n\t\treturn goodsItem.price >= min && goodsItem.price <= max\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://shop/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\r\n\treturn fetch(\r\n\t\t`http://localhost:3001/goods?${str ? `search=${str}` : ''}`\r\n\t).then((response) => response.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://shop/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n\r\n// import postData from './postData.js'\r\n\r\n\r\nconst load = () => {\r\n\t// const cartBtn = document.querySelector('#cart')\r\n\r\n\t(0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t(0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n\t})\r\n\r\n\t// cartBtn.addEventListener('click', () => {\r\n\t// \tpostData().then((data) => {\r\n\t// \t\tconsole.log(data)\r\n\r\n\t// \t\tgetData().then((data) => console.log(data))\r\n\t// \t})\r\n\t// })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://shop/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/price.js":
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\nconst price = () => {\r\n\tconst minEl = document.querySelector('#min')\r\n\tconst maxEl = document.querySelector('#max')\r\n\r\n\tlet min = 0\r\n\tlet max = 0\r\n\tlet maxGoods = 0\r\n\t;(0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\t\t.then((data) => {\r\n\t\t\tdata.forEach((good) => {\r\n\t\t\t\tif (good.price > maxGoods) {\r\n\t\t\t\t\tmaxGoods = good.price\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t})\r\n\t\t.then((maxGoods) => console.log(maxGoods))\r\n\t\t.then(() => {\r\n\t\t\tconsole.log(maxGoods)\r\n\t\t\tminEl.value = min\r\n\t\t\tmaxEl.value = maxGoods\r\n\t\t})\r\n\t\t.then(() => {\r\n\t\t\tminEl.addEventListener('input', (event) => {\r\n\t\t\t\tif (minEl.value === '') {\r\n\t\t\t\t\tminEl.placeholder = 0\r\n\t\t\t\t\tmin = 0\r\n\t\t\t\t} else min = event.target.value\r\n\t\t\t\t;(0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t\t\t\t;(0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter_js__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, min, max))\r\n\t\t\t\t})\r\n\t\t\t})\r\n\t\t\tmaxEl.addEventListener('input', (event) => {\r\n\t\t\t\tif (maxEl.value === '') {\r\n\t\t\t\t\tmaxEl.placeholder = maxGoods\r\n\t\t\t\t\tmax = maxGoods\r\n\t\t\t\t} else max = event.target.value\r\n\t\t\t\t;(0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t\t\t\t;(0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter_js__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, min, max))\r\n\t\t\t\t})\r\n\t\t\t})\r\n\t\t})\r\n\r\n\t// min.addEventListener('input', (event) => {\r\n\t// \tconst value = event.target.value\r\n\t// \tgetData().then((data) => {\r\n\t// \t\trenderGoods(searchFilter(data, value))\r\n\t// \t})\r\n\t// })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (price);\r\n\n\n//# sourceURL=webpack://shop/./src/modules/price.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n\tconst goodsWrapper = document.querySelector('.goods')\r\n\r\n\tgoodsWrapper.innerHTML = ''\r\n\r\n\tgoods.forEach((goodsItem) => {\r\n\t\tgoodsWrapper.insertAdjacentHTML(\r\n\t\t\t'beforeend',\r\n\t\t\t`\r\n\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t\t\t<span class=\"card-img-top\"\r\n\t\t\t\t\t\t\t\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t\t<div class=\"card-price\">3${goodsItem.price} ₽</div>\r\n\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t`\r\n\t\t)\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://shop/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n\tconst searchInput = document.querySelector('.search-wrapper_input')\r\n\r\n\tsearchInput.addEventListener('input', (event) => {\r\n\t\tconst value = event.target.value\r\n\t\t;(0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t\t;(0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter_js__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://shop/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
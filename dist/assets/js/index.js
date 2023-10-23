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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/blocks/createElements.js":
/*!************************************************!*\
  !*** ./src/assets/js/blocks/createElements.js ***!
  \************************************************/
/*! exports provided: createAllElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAllElements\", function() { return createAllElements; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/assets/js/blocks/utils.js\");\n/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../swiper */ \"./src/assets/js/swiper.js\");\n\r\n\r\n\r\nasync function createAllElements(dataRec, allFulms = false) {\r\n    if(allFulms) {\r\n        const chose = false\r\n        createSlider(dataRec.films, chose,'fultersSwiper', 'fulters text', 'vest', false, 'filter', 'next1', 'prev1')\r\n    } else {\r\n        const chose = true\r\n        createSlider(dataRec.films, chose, 'recomend', 'Рекомендуем вам посмотреть', 'Лучшие фильмы', true, 'recomend', 'next', 'prev')\r\n    }\r\n}\r\nfunction createSlider(data, chose, classItem, TitleItem, smallItem, dropDown = false, swip, buttonNext, buttonPrev) {\r\n    const $movies = document.querySelector('.movies')\r\n    let swiper, prev,next, wrap,slide\r\n    //create wrapperSlider\r\n    const recomend = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', `${classItem}`); Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"customAppendChild\"])([ Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('h4','titleSlider',`${TitleItem}`), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('small', 'm', `${smallItem}`),swiper = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'swiper-container'), prev = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'swiper-button-prev'), next = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'swiper-button-next')], recomend)\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"customAppendChild\"])([wrap = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'swiper-wrapper')], swiper)\r\n    swiper.classList.add(swip), prev.classList.add(buttonPrev), next.classList.add(buttonNext),wrap.classList.add('swiper__wrap')\r\n    data.forEach(item => {\r\n        let allCount = '',allGenres = ''\r\n        item.genres.forEach(_ => allGenres += _.genre + ', ')\r\n        item.countries.forEach(_ => allCount +=  _.country + ', ')\r\n        slide = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'swiper-slide')\r\n        slide.classList.add('slide')\r\n        slide.insertAdjacentHTML('afterbegin', Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createSlide\"])(item, allGenres, allCount))\r\n            if(chose) {\r\n                let item = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'chose-NZ', 'Выбор PWA-NZ')\r\n                slide.querySelector('.movie__img').appendChild(item)\r\n            }\r\n            wrap.appendChild(slide)\r\n    })\r\n    let last = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'swiper-slide')\r\n    last.innerHTML = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"endSlide\"])()\r\n    wrap.appendChild(last)\r\n    if(dropDown) {\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"customAppendChild\"])([Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('h4', 'titleDrop', 'PWA-NZ: бесплатная платформа позволяющая просматривать фильмы сразу с трейлерами '), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('small', 'm-drop', 'Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то PWA-NZ – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей. Каждый день, по мере выхода новинок, список фильмов обновляется*')], recomend)\r\n    }\r\n    $movies.appendChild(recomend)\r\n    Object(_swiper__WEBPACK_IMPORTED_MODULE_1__[\"createSwiperRecomend\"])(swip, buttonPrev, buttonNext)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/blocks/createElements.js?");

/***/ }),

/***/ "./src/assets/js/blocks/fetch.js":
/*!***************************************!*\
  !*** ./src/assets/js/blocks/fetch.js ***!
  \***************************************/
/*! exports provided: responceAll, preparingDataAll, allFulms, preparingDataFulters, preparingDataCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"responceAll\", function() { return responceAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preparingDataAll\", function() { return preparingDataAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allFulms\", function() { return allFulms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preparingDataFulters\", function() { return preparingDataFulters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preparingDataCreate\", function() { return preparingDataCreate; });\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ \"./src/assets/js/blocks/createElements.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/assets/js/blocks/utils.js\");\n\r\n\r\n\r\nlet responceAll\r\nasync function preparingDataAll(currentPage = 1) {\r\n    const API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'\r\n    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${currentPage}`\r\n    const resp = await fetch(API_URL, {\r\n        headers: {\r\n            \"X-Api-Key\": API_KEY\r\n        }\r\n    })\r\n    responceAll = await resp.json()\r\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createAllElements\"])(responceAll)\r\n}\r\nlet allFulms = []\r\nasync function preparingDataFulters(id) {\r\n    const API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'\r\n    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${id}&order=YEAR&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1888&yearTo=2020&page=1`\r\n    const resp = await fetch(API_URL, {\r\n        headers: {\r\n            \"X-Api-Key\": API_KEY\r\n        }\r\n    })\r\n    let responceFulters = await resp.json()\r\n    allFulms.push(responceFulters)\r\n    preparingDataCreate(allFulms)\r\n}\r\nfunction preparingDataCreate(data) {\r\n    console.log(data)\r\n    data.forEach(item => {\r\n        console.log(item)\r\n        Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createAllElements\"])(item, true)\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/blocks/fetch.js?");

/***/ }),

/***/ "./src/assets/js/blocks/getIdMovie.js":
/*!********************************************!*\
  !*** ./src/assets/js/blocks/getIdMovie.js ***!
  \********************************************/
/*! exports provided: getIdMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIdMovie\", function() { return getIdMovie; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/assets/js/blocks/utils.js\");\n\r\n\r\nlet responceYouTube\r\nconst $content = document.querySelector('.content')\r\nconst getIdMovie = async id => {\r\n    const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/',\r\n        API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'\r\n    const resp = await fetch(API_URL + id, {\r\n        headers: {\r\n            \"X-Api-Key\": API_KEY\r\n        }\r\n    })\r\n    const responceID = await resp.json()\r\n    await getYouTube(id)\r\n    updateInformation(responceID.data, responceYouTube.trailers[0].url)\r\n\r\n}\r\nconst updateInformation = (data, youTube) => {\r\n    let allC = '', allFacts = '', allFulters = '', trailer, img\r\n    if(youTube.includes('https://www.youtube.com/watch?v=')) {\r\n        youTube = youTube.replace('https://www.youtube.com/watch?v=', '')\r\n    }\r\n\r\n    data.facts.forEach(i => {\r\n        allFacts += i\r\n    })\r\n    data.genres.forEach(i => {\r\n        allFulters += i.genre + ', '\r\n    })\r\n    data.countries.forEach(i => {\r\n        allC += i.country + ', '\r\n    })\r\n\r\n    $content.scrollTo(0, 0)\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"customAppendChild\"])([Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'aside__movie-title', `${data.nameRu}`), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'aside__movie-titleEn', `${data.nameEn}`), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'aside__desc', `${allC}, ${data.distributorRelease}, ${data.distributors}, ${data.year},  ${data.filmLength}` + ' Часа'),\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'fulters', `Жанр:  ${allFulters}`), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'slogan', `Слоган фильма: ${data.slogan}`), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'premer',  `Премьера: ${data.premiereBluRay}`),img = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('img', 'poster'),\r\n    trailer = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'aside__trailer'), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'aside__raiting', `${data.ratingAgeLimits}+`), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'aside__description-movie', `${data.description}`), Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"create\"])('div', 'facts', `${ 'Факты: ' + allFacts}`)\r\n    ], $content)\r\n    trailer.innerHTML = `<iframe width=\"560\" height=\"315\" class=\"video__trailer_youtube\" src=https://www.youtube.com/embed/${youTube} title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>`\r\n    img.src = data.posterUrlPreview\r\n}\r\nasync function getYouTube(id) {\r\n    $content.innerHTML = ''\r\n    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/videos`,\r\n        API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'\r\n    const resp = await fetch(API_URL, {\r\n        method: 'GET',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n            \"X-Api-Key\": API_KEY\r\n        }\r\n    })\r\n    responceYouTube = await resp.json()\r\n}//TODO:Сделать несколько других блоков с фильмами. Сделать отображение инфы без багов\n\n//# sourceURL=webpack:///./src/assets/js/blocks/getIdMovie.js?");

/***/ }),

/***/ "./src/assets/js/blocks/showDescMovie.js":
/*!***********************************************!*\
  !*** ./src/assets/js/blocks/showDescMovie.js ***!
  \***********************************************/
/*! exports provided: $overlay, $wrapper, showDescMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$overlay\", function() { return $overlay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$wrapper\", function() { return $wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDescMovie\", function() { return showDescMovie; });\n/* harmony import */ var _getIdMovie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getIdMovie */ \"./src/assets/js/blocks/getIdMovie.js\");\n\r\n\r\nconst $overlay = document.querySelector('.aside__overlay'),\r\n    $wrapper = document.querySelector('.aside__wrapper')\r\nconst showDescMovie = (item, data) => {\r\n    const $title = item.querySelector('.movie__title')\r\n    data.forEach(el => {\r\n        if(el.nameRu === $title.textContent) {\r\n            Object(_getIdMovie__WEBPACK_IMPORTED_MODULE_0__[\"getIdMovie\"])(el.filmId)\r\n            $overlay.classList.add('active')\r\n            $wrapper.classList.add('active')\r\n\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/blocks/showDescMovie.js?");

/***/ }),

/***/ "./src/assets/js/blocks/utils.js":
/*!***************************************!*\
  !*** ./src/assets/js/blocks/utils.js ***!
  \***************************************/
/*! exports provided: create, customAppendChild, createSlide, endSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customAppendChild\", function() { return customAppendChild; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSlide\", function() { return createSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endSlide\", function() { return endSlide; });\nconst create = (tag, classItem = '', text= '') => {\r\n    const item = document.createElement(tag)\r\n    item.classList.add(classItem)\r\n    item.textContent = text\r\n    return item\r\n}\r\nconst customAppendChild = (array, item) => {\r\n    array.forEach(el => {\r\n        item.appendChild(el)\r\n    })\r\n}\r\nconst createSlide = (item, allGenres, allCount) => {\r\n    return `<div class=\"movie CAll\">\r\n                            <div class=\"movie__img\">\r\n                                <img width=\"200px\" height=\"300px\" src=\"${item.posterUrlPreview}\" alt=\"${item.nameRu}\" class=\"movie__img\" >\r\n                                <div class=\"overlay\">\r\n                                    <div class=\"descR\">\r\n                                        <div class=\"movie__raiting\">${item.rating}</div>\r\n                                        <div class=\"year\">${item.year}</div>\r\n                                        <div class=\"country\">${allGenres}</div>\r\n                                        <div class=\"fulters\">${allCount}</div>\r\n                                        <div class=\"time\">${item.filmLength +' часа'}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"movie__title\">${item.nameRu}</div>\r\n                            <div class=\"movie__trailer\">Смотреть трейлер</div>\r\n                        </div>`\r\n}\r\nconst endSlide = () => {\r\n    return `<div class=\"movie CAll\">\r\n                            <div class=\"movie__img\">\r\n                                <div class=\"nSlide\" width=\"200px\" height=\"300px\">\r\n                                Посмотреть всё\r\n                            </div>\r\n                            </div>\r\n                        </div>`\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/blocks/utils.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/fetch */ \"./src/assets/js/blocks/fetch.js\");\n/* harmony import */ var _blocks_showDescMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/showDescMovie */ \"./src/assets/js/blocks/showDescMovie.js\");\n\r\n\r\n\r\nasync function prepare() {\r\n    await Object(_blocks_fetch__WEBPACK_IMPORTED_MODULE_0__[\"preparingDataAll\"])()\r\n}prepare()\r\n\r\n\r\n\r\ndocument.body.addEventListener('click', e => {\r\n    let _ = e.target\r\n    if(_.classList.contains('overlay') || _.classList.contains('descR') || _.classList.contains('overlay') || _.classList.contains('movie__raiting') || _.classList.contains('year') || _.classList.contains('country') || _.classList.contains('fulters') || _.classList.contains('times') ) {\r\n        if (_.classList.contains('overlay')) {\r\n            return Object(_blocks_showDescMovie__WEBPACK_IMPORTED_MODULE_1__[\"showDescMovie\"])(_.parentNode.parentNode.parentNode, _blocks_fetch__WEBPACK_IMPORTED_MODULE_0__[\"responceAll\"].films)\r\n        }\r\n        return  Object(_blocks_showDescMovie__WEBPACK_IMPORTED_MODULE_1__[\"showDescMovie\"])(_.parentNode.parentNode.parentNode.parentNode, _blocks_fetch__WEBPACK_IMPORTED_MODULE_0__[\"responceAll\"].films)\r\n    }\r\n    if(_.classList.contains('aside__overlay')) {\r\n        _blocks_showDescMovie__WEBPACK_IMPORTED_MODULE_1__[\"$overlay\"].classList.remove('active')\r\n        _blocks_showDescMovie__WEBPACK_IMPORTED_MODULE_1__[\"$wrapper\"].classList.remove('active')\r\n    }\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/swiper.js":
/*!*********************************!*\
  !*** ./src/assets/js/swiper.js ***!
  \*********************************/
/*! exports provided: createSwiperRecomend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSwiperRecomend\", function() { return createSwiperRecomend; });\n\r\nfunction createSwiperRecomend(swip, bPrev, bNext) {\r\n    const swiper = new Swiper('.'+swip, {\r\n        navigation: {\r\n            nextEl: '.' + bNext,\r\n            prevEl: '.' + bPrev,\r\n        },\r\n        slidesPerView: 6,\r\n        spaceBetween: 40,\r\n        autoHeight: true\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/swiper.js?");

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./src/assets/js/index.js ./src/assets/js/swiper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! G:\\allProjects WEBSTORM\\PWA-APP\\src\\assets\\js\\index.js */\"./src/assets/js/index.js\");\nmodule.exports = __webpack_require__(/*! G:\\allProjects WEBSTORM\\PWA-APP\\src\\assets\\js\\swiper.js */\"./src/assets/js/swiper.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/index.js_./src/assets/js/swiper.js?");

/***/ })

/******/ });
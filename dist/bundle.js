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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_video_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/video_btn */ \"./src/modules/video_btn.js\");\n/* harmony import */ var _modules_video_btn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_video_btn__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdown */ \"./src/modules/dropdown.js\");\n/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_dropdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger */ \"./src/modules/burger.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_burger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_slider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/burger.js":
/*!*******************************!*\
  !*** ./src/modules/burger.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Burger = function Burger(button, overley) {\n  _classCallCheck(this, Burger);\n\n  document.querySelector(button).onclick = function () {\n    document.querySelector('.burger-menu__line').classList.toggle('burger-menu-active');\n    document.querySelector('.burger-menu__nav').classList.toggle('burger-menu-active');\n    document.querySelector('.burger-menu__overley').classList.toggle('burger-menu-active');\n    document.querySelector('.burger-menu__button').classList.toggle('burger-menu-active');\n    document.querySelector('body').classList.toggle('burger-menu-active');\n  };\n\n  document.querySelector(overley).onclick = function () {\n    document.querySelector('.burger-menu__line').classList.toggle('burger-menu-active');\n    document.querySelector('.burger-menu__nav').classList.toggle('burger-menu-active');\n    document.querySelector('.burger-menu__overley').classList.toggle('burger-menu-active');\n    document.querySelector('body').classList.toggle('burger-menu-active');\n    document.querySelector('.burger-menu__button').classList.toggle('burger-menu-active');\n  };\n};\n\nvar burger = new Burger('#button', '#overley');\n\n//# sourceURL=webpack:///./src/modules/burger.js?");

/***/ }),

/***/ "./src/modules/dropdown.js":
/*!*********************************!*\
  !*** ./src/modules/dropdown.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Dropdown =\n/*#__PURE__*/\nfunction () {\n  function Dropdown(selector, options) {\n    var _this = this;\n\n    _classCallCheck(this, Dropdown);\n\n    this.$el = document.querySelector(selector);\n    this.$btn = document.querySelector('#language-btn');\n    this.items = options.items;\n    this.$el.querySelector('.dropdown__label').innerHTML = \"<li data-id=\\\"\".concat(this.items[0].id, \"\\\"><img class=\\\"dropdown__img\\\" src=\\\"\").concat(this.items[0].label, \"\\\" alt=\\\"\\\"></li>\");\n    this.$el.querySelector('.dropdown__text').innerHTML = this.items[0].text;\n    this.$el.addEventListener('click', function (event) {\n      if (event.target.classList.contains('dropdown__label') || event.target.classList.contains('language-btn') || event.target.classList.contains('dropdown__text') || event.target.classList.contains('language-btn__img')) {\n        if (_this.$el.classList.contains('open')) {\n          _this.close();\n        } else {\n          _this.open();\n        }\n      } else if (event.target.tagName.toLowerCase() === 'li') {\n        _this.select(event.target.dataset.id);\n      }\n    });\n    var itemsHTML = this.items.map(function (i) {\n      return \"<li data-id=\\\"\".concat(i.id, \"\\\"><img class=\\\"dropdown__img\\\" src=\\\"\").concat(i.label, \"\\\" alt=\\\"\\\"><p>\").concat(i.text, \"</p></li>\");\n    }).join(' ');\n    this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML);\n  }\n\n  _createClass(Dropdown, [{\n    key: \"select\",\n    value: function select(id) {\n      var item = this.items.find(function (i) {\n        return i.id === id;\n      });\n      this.$el.querySelector('.dropdown__label').innerHTML = \"<li data-id=\\\"\".concat(item.id, \"\\\"><img class=\\\"dropdown__img\\\" src=\\\"\").concat(item.label, \"\\\" alt=\\\"\\\"></li>\");\n      this.$el.querySelector('.dropdown__text').textContent = item.text;\n      this.close();\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.$el.classList.add('open');\n      this.$btn.classList.add('language-btn-transform');\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.$el.classList.remove('open');\n      this.$btn.classList.remove('language-btn-transform');\n    }\n  }]);\n\n  return Dropdown;\n}();\n\nvar dropdown3 = new Dropdown('#dropdown', {\n  items: [{\n    label: 'img/en.png',\n    id: 'msk',\n    text: 'EN'\n  }, {\n    label: 'img/ua.png',\n    id: 'msk1',\n    text: 'UA'\n  }, {\n    label: 'img/ru.png',\n    id: 'msk2',\n    text: 'RU'\n  }]\n});\n\n//# sourceURL=webpack:///./src/modules/dropdown.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar multiItemSlider = function () {\n  return function (selector, config) {\n    var _mainElement = document.querySelector(selector),\n        // основный элемент блока\n    _sliderWrapper = _mainElement.querySelector('.slider__wrapper'),\n        // обертка для .slider-item\n    _sliderItems = _mainElement.querySelectorAll('.slider__item'),\n        // элементы (.slider-item)\n    _sliderControls = _mainElement.querySelectorAll('.slider__control'),\n        // элементы управления\n    _sliderControlLeft = _mainElement.querySelector('.slider__control_left'),\n        // кнопка \"LEFT\"\n    _sliderControlRight = _mainElement.querySelector('.slider__control_right'),\n        // кнопка \"RIGHT\"\n    _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),\n        // ширина обёртки\n    _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),\n        // ширина одного элемента    \n    _positionLeftItem = 0,\n        // позиция левого активного элемента\n    _transform = 0,\n        // значение транфсофрмации .slider_wrapper\n    _step = _itemWidth / _wrapperWidth * 100,\n        // величина шага (для трансформации)\n    _items = []; // массив элементов\n    // наполнение массива _items\n\n\n    _sliderItems.forEach(function (item, index) {\n      _items.push({\n        item: item,\n        position: index,\n        transform: 0\n      });\n    });\n\n    var position = {\n      getMin: 0,\n      getMax: _items.length - 1\n    };\n\n    var _transformItem = function _transformItem(direction) {\n      if (direction === 'right') {\n        if (_positionLeftItem + _wrapperWidth / _itemWidth - 1 >= position.getMax) {\n          return;\n        }\n\n        if (!_sliderControlLeft.classList.contains('slider__control_show')) {\n          _sliderControlLeft.classList.add('slider__control_show');\n        }\n\n        if (_sliderControlRight.classList.contains('slider__control_show') && _positionLeftItem + _wrapperWidth / _itemWidth >= position.getMax) {\n          _sliderControlRight.classList.remove('slider__control_show');\n        }\n\n        _positionLeftItem++;\n        _transform -= _step;\n      }\n\n      if (direction === 'left') {\n        if (_positionLeftItem <= position.getMin) {\n          return;\n        }\n\n        if (!_sliderControlRight.classList.contains('slider__control_show')) {\n          _sliderControlRight.classList.add('slider__control_show');\n        }\n\n        if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {\n          _sliderControlLeft.classList.remove('slider__control_show');\n        }\n\n        _positionLeftItem--;\n        _transform += _step;\n      }\n\n      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';\n    }; // обработчик события click для кнопок \"назад\" и \"вперед\"\n\n\n    var _controlClick = function _controlClick(e) {\n      if (e.target.classList.contains('slider__control')) {\n        e.preventDefault();\n        var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';\n\n        _transformItem(direction);\n      }\n    };\n\n    var _setUpListeners = function _setUpListeners() {\n      // добавление к кнопкам \"назад\" и \"вперед\" обрботчика _controlClick для событя click\n      _sliderControls.forEach(function (item) {\n        item.addEventListener('click', _controlClick);\n      });\n    }; // инициализация\n\n\n    _setUpListeners();\n\n    return {\n      right: function right() {\n        // метод right\n        _transformItem('right');\n      },\n      left: function left() {\n        // метод left\n        _transformItem('left');\n      }\n    };\n  };\n}();\n\nvar slider = multiItemSlider('.slider');\n\n//# sourceURL=webpack:///./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/video_btn.js":
/*!**********************************!*\
  !*** ./src/modules/video_btn.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var $video = document.getElementById('video');\nvar $play = document.getElementById('video-btn');\n$play.addEventListener('click', function () {\n  if ($video.paused == true) {\n    $video.play();\n    $play.innerHTML = '<img src=\"img/pause.svg\" class=\"video-controler__img\" alt=\"\">';\n  } else {\n    $video.pause();\n    $play.innerHTML = '<img src=\"img/play.svg\" class=\"video-controler__img\" alt=\"\">';\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/video_btn.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ })

/******/ });
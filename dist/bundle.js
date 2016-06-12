/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\n(function webpackMissingModule() { throw new Error(\"Cannot find module \\\"./src/migrations\\\"\"); }());\nmodule.exports = __webpack_require__(2);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"babel-polyfill\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"babel-polyfill\"\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _koa = __webpack_require__(3);\n\nvar _koa2 = _interopRequireDefault(_koa);\n\nvar _koaLogger = __webpack_require__(4);\n\nvar _koaLogger2 = _interopRequireDefault(_koaLogger);\n\nvar _koaBodyparser = __webpack_require__(5);\n\nvar _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);\n\nvar _koaRoute = __webpack_require__(6);\n\nvar _koaRoute2 = _interopRequireDefault(_koaRoute);\n\nvar _products = __webpack_require__(7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = new _koa2.default();\n\napp.use((0, _koaLogger2.default)());\napp.use((0, _koaBodyparser2.default)());\n\napp.use(_koaRoute2.default.get('/products', _products.list));\napp.use(_koaRoute2.default.post('/products', _products.create));\n\napp.listen(3000);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = require(\"koa\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"koa\"\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = require(\"koa-logger\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"koa-logger\"\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22koa-logger%22?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = require(\"koa-bodyparser\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"koa-bodyparser\"\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("module.exports = require(\"koa-route\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"koa-route\"\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22koa-route%22?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.create = exports.list = undefined;\n\nvar list = exports.list = function () {\n  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            this.body = [{\n              a: 'aa',\n              b: 'ba'\n            }, {\n              a: 'aa',\n              b: 'ba'\n            }];\n\n          case 1:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function list() {\n    return ref.apply(this, arguments);\n  };\n}();\n\nvar create = exports.create = function () {\n  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {\n    var _this = this;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            new _products2.default(this.request.body).save().then(function (model) {\n              _this.body = model;\n            });\n\n          case 1:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function create() {\n    return ref.apply(this, arguments);\n  };\n}();\n\nvar _products = __webpack_require__(8);\n\nvar _products2 = _interopRequireDefault(_products);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step(\"next\", value); }, function (err) { return step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/controllers/products.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/controllers/products.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _orm = __webpack_require__(9);\n\nvar _orm2 = _interopRequireDefault(_orm);\n\nvar _producer = __webpack_require__(13);\n\nvar _producer2 = _interopRequireDefault(_producer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _orm2.default.Model.extend({\n  tableName: 'products',\n  producer: function producer() {\n    return this.belongsTo(_producer2.default);\n  }\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/models/products.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/models/products.js?");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _knex = __webpack_require__(10);\n\nvar _knex2 = _interopRequireDefault(_knex);\n\nvar _bookshelf = __webpack_require__(11);\n\nvar _bookshelf2 = _interopRequireDefault(_bookshelf);\n\nvar _config = __webpack_require__(12);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar k = (0, _knex2.default)(_config2.default);\nvar b = (0, _bookshelf2.default)(k);\n\nexports.default = b;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/orm.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/orm.js?");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("module.exports = require(\"knex\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"knex\"\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22knex%22?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("module.exports = require(\"bookshelf\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"bookshelf\"\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22bookshelf%22?");

/***/ },
/* 12 */
/***/ function(module, exports) {

	eval("module.exports = {\n\t\"client\": \"sqlite3\",\n\t\"connection\": {\n\t\t\"filename\": \"./db.sqlite\"\n\t},\n\t\"useNullAsDefault\": true\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/config.json\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/config.json?");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _orm = __webpack_require__(9);\n\nvar _orm2 = _interopRequireDefault(_orm);\n\nvar _products = __webpack_require__(8);\n\nvar _products2 = _interopRequireDefault(_products);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _orm2.default.Model.extend({\n  tableName: 'products',\n  producer: function producer() {\n    return this.hasMany(_products2.default);\n  }\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/models/producer.js\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/models/producer.js?");

/***/ }
/******/ ]);
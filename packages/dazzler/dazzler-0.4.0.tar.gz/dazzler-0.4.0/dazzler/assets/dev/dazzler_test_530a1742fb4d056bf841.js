(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["dazzler_test"] = factory(require("react"));
	else
		root["dazzler_test"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"test": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpdazzler_name_"] = window["webpackJsonpdazzler_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/internal/test_components/components/ComponentAsAspect.jsx":
/*!***********************************************************************!*\
  !*** ./src/internal/test_components/components/ComponentAsAspect.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComponentAsAspect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ComponentAsAspect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComponentAsAspect, _React$Component);

  function ComponentAsAspect() {
    _classCallCheck(this, ComponentAsAspect);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComponentAsAspect).apply(this, arguments));
  }

  _createClass(ComponentAsAspect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          identity = _this$props.identity,
          single = _this$props.single,
          array = _this$props.array,
          shape = _this$props.shape,
          list_of_dict = _this$props.list_of_dict;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: identity
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "single"
      }, single), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "array"
      }, array.map(function (e, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i
        }, e);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shape"
      }, shape.shaped), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list_of_dict"
      }, list_of_dict.map(function (e) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: e.value
        }, e.label);
      })));
    }
  }]);

  return ComponentAsAspect;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


ComponentAsAspect.defaultProps = {};
ComponentAsAspect.propTypes = {
  single: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  array: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element),
  shape: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    shaped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
  }),
  list_of_dict: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
  })),

  /**
   *  Unique id for this component
   */
  identity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Update aspects on the backend.
   */
  updateAspects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/internal/test_components/components/DefaultProps.jsx":
/*!******************************************************************!*\
  !*** ./src/internal/test_components/components/DefaultProps.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DefaultProps =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultProps, _Component);

  function DefaultProps() {
    _classCallCheck(this, DefaultProps);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultProps).apply(this, arguments));
  }

  _createClass(DefaultProps, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, Object.entries(this.props).map(function (k, v) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "".concat(id, "-").concat(k),
          key: "".concat(id, "-").concat(k)
        }, k, ": ", JSON.stringify(v));
      }));
    }
  }]);

  return DefaultProps;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


DefaultProps.defaultProps = {
  string_default: 'Default string',
  string_default_empty: '',
  number_default: 0.2666,
  number_default_empty: 0,
  array_default: [1, 2, 3],
  array_default_empty: [],
  object_default: {
    foo: 'bar'
  },
  object_default_empty: {}
};
DefaultProps.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  string_default: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  string_default_empty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  number_default: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  number_default_empty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  array_default: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  array_default_empty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  object_default: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  object_default_empty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/internal/test_components/components/TestComponent.jsx":
/*!*******************************************************************!*\
  !*** ./src/internal/test_components/components/TestComponent.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Test component with all supported props by dazzler.
 * Each prop are rendered with a selector for easy access.
 */

var TestComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TestComponent, _Component);

  function TestComponent() {
    _classCallCheck(this, TestComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TestComponent).apply(this, arguments));
  }

  _createClass(TestComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "array"
      }, this.props.array_prop && JSON.stringify(this.props.array_prop)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bool"
      }, Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.props.bool_prop) ? '' : this.props.bool_prop ? 'True' : 'False'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number"
      }, this.props.number_prop), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "object"
      }, this.props.object_prop && JSON.stringify(this.props.object_prop)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "string"
      }, this.props.string_prop), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "symbol"
      }, this.props.symbol_prop), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "enum"
      }, this.props.enum_prop), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "union"
      }, this.props.union_prop), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "array_of"
      }, this.props.array_of_prop && JSON.stringify(this.props.array_of_prop)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "object_of"
      }, this.props.object_of_prop && JSON.stringify(this.props.object_of_prop)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shape"
      }, this.props.shape_prop && JSON.stringify(this.props.shape_prop)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "required_string"
      }, this.props.required_string));
    }
  }]);

  return TestComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


TestComponent.defaultProps = {
  string_with_default: 'Foo'
};
TestComponent.propTypes = {
  /**
   * The ID used to identify this component in the DOM.
   * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Array props with
   */
  array_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bool_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  func_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  number_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  object_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  string_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  symbol_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.symbol,
  any_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  string_with_default: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  enum_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['News', 'Photos']),
  // An object that could be one of many types
  union_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  // An array of a certain type
  array_of_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  // An object with property values of a certain type
  object_of_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  // An object taking on a particular shape
  shape_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  required_string: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  // These don't work good.
  nested_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    string_prop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    nested_shape: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      nested_array: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        nested_array_string: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        nested_array_shape: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
          prop1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
          prop2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
        })
      })),
      nested_shape_shape: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        prop3: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
        prop4: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
      })
    })
  }),
  array_of_array: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  identity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  updateAspects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/internal/test_components/index.js":
/*!***********************************************!*\
  !*** ./src/internal/test_components/index.js ***!
  \***********************************************/
/*! exports provided: TestComponent, DefaultProps, ComponentAsAspect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TestComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TestComponent */ "./src/internal/test_components/components/TestComponent.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return _components_TestComponent__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_DefaultProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DefaultProps */ "./src/internal/test_components/components/DefaultProps.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultProps", function() { return _components_DefaultProps__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_ComponentAsAspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ComponentAsAspect */ "./src/internal/test_components/components/ComponentAsAspect.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentAsAspect", function() { return _components_ComponentAsAspect__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ 2:
/*!*****************************************************!*\
  !*** multi ./src/internal/test_components/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/t4rk/projects/experiments/dazzler/src/internal/test_components/index.js */"./src/internal/test_components/index.js");


/***/ }),

/***/ "react":
/*!****************************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","umd":"react","root":"React"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/Iiwid2VicGFjazovLy8uL3NyYy9pbnRlcm5hbC90ZXN0X2NvbXBvbmVudHMvY29tcG9uZW50cy9Db21wb25lbnRBc0FzcGVjdC5qc3g/Iiwid2VicGFjazovLy8uL3NyYy9pbnRlcm5hbC90ZXN0X2NvbXBvbmVudHMvY29tcG9uZW50cy9EZWZhdWx0UHJvcHMuanN4PyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJuYWwvdGVzdF9jb21wb25lbnRzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC5qc3g/Iiwid2VicGFjazovLy8uL3NyYy9pbnRlcm5hbC90ZXN0X2NvbXBvbmVudHMvaW5kZXguanM/Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInVtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9PyJdLCJuYW1lcyI6WyJDb21wb25lbnRBc0FzcGVjdCIsInByb3BzIiwiaWRlbnRpdHkiLCJzaW5nbGUiLCJhcnJheSIsInNoYXBlIiwibGlzdF9vZl9kaWN0IiwibWFwIiwiZSIsImkiLCJzaGFwZWQiLCJ2YWx1ZSIsImxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50IiwiYXJyYXlPZiIsIm5vZGUiLCJhbnkiLCJzdHJpbmciLCJ1cGRhdGVBc3BlY3RzIiwiZnVuYyIsIkRlZmF1bHRQcm9wcyIsImlkIiwiT2JqZWN0IiwiZW50cmllcyIsImsiLCJ2IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmluZ19kZWZhdWx0Iiwic3RyaW5nX2RlZmF1bHRfZW1wdHkiLCJudW1iZXJfZGVmYXVsdCIsIm51bWJlcl9kZWZhdWx0X2VtcHR5IiwiYXJyYXlfZGVmYXVsdCIsImFycmF5X2RlZmF1bHRfZW1wdHkiLCJvYmplY3RfZGVmYXVsdCIsImZvbyIsIm9iamVjdF9kZWZhdWx0X2VtcHR5IiwibnVtYmVyIiwib2JqZWN0IiwiVGVzdENvbXBvbmVudCIsImFycmF5X3Byb3AiLCJpc05pbCIsImJvb2xfcHJvcCIsIm51bWJlcl9wcm9wIiwib2JqZWN0X3Byb3AiLCJzdHJpbmdfcHJvcCIsInN5bWJvbF9wcm9wIiwiZW51bV9wcm9wIiwidW5pb25fcHJvcCIsImFycmF5X29mX3Byb3AiLCJvYmplY3Rfb2ZfcHJvcCIsInNoYXBlX3Byb3AiLCJyZXF1aXJlZF9zdHJpbmciLCJzdHJpbmdfd2l0aF9kZWZhdWx0IiwiYm9vbCIsImZ1bmNfcHJvcCIsInN5bWJvbCIsImFueV9wcm9wIiwib25lT2YiLCJvbmVPZlR5cGUiLCJvYmplY3RPZiIsImNvbG9yIiwiZm9udFNpemUiLCJpc1JlcXVpcmVkIiwibmVzdGVkX3Byb3AiLCJuZXN0ZWRfc2hhcGUiLCJuZXN0ZWRfYXJyYXkiLCJuZXN0ZWRfYXJyYXlfc3RyaW5nIiwibmVzdGVkX2FycmF5X3NoYXBlIiwicHJvcDEiLCJwcm9wMiIsIm5lc3RlZF9zaGFwZV9zaGFwZSIsInByb3AzIiwicHJvcDQiLCJhcnJheV9vZl9hcnJheSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztB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QixFQUFFdkQsaURBQVMsQ0FBQ0ssTUFEbkI7QUFFWm1ELDBCQUFrQixFQUFFeEQsaURBQVMsQ0FBQ1osS0FBVixDQUFnQjtBQUNoQ3FFLGVBQUssRUFBRXpELGlEQUFTLENBQUN5QixNQURlO0FBRWhDaUMsZUFBSyxFQUFFMUQsaURBQVMsQ0FBQ0s7QUFGZSxTQUFoQjtBQUZSLE9BQWhCLENBRFUsQ0FEWTtBQVUxQnNELHdCQUFrQixFQUFFM0QsaURBQVMsQ0FBQ1osS0FBVixDQUFnQjtBQUNoQ3dFLGFBQUssRUFBRTVELGlEQUFTLENBQUN5QixNQURlO0FBRWhDb0MsYUFBSyxFQUFFN0QsaURBQVMsQ0FBQzBDO0FBRmUsT0FBaEI7QUFWTSxLQUFoQjtBQUZXLEdBQWhCLENBdkNTO0FBMER0Qm9CLGdCQUFjLEVBQUU5RCxpREFBUyxDQUFDRSxPQUFWLENBQWtCRixpREFBUyxDQUFDRSxPQUFWLENBQWtCRixpREFBUyxDQUFDeUIsTUFBNUIsQ0FBbEIsQ0ExRE07QUE0RHRCc0MsVUFBUSxFQUFFL0QsaURBQVMsQ0FBQ0csSUE1REU7QUE2RHRCbEIsVUFBUSxFQUFFZSxpREFBUyxDQUFDSyxNQTdERTtBQThEdEJDLGVBQWEsRUFBRU4saURBQVMsQ0FBQ087QUE5REgsQ0FBMUIsQzs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxtRCIsImZpbGUiOiJkYXp6bGVyX3Rlc3RfNTMwYTE3NDJmYjRkMDU2YmY4NDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXp6bGVyX3Rlc3RcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGF6emxlcl90ZXN0XCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAiLCIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwidGVzdFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wZGF6emxlcl9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucGRhenpsZXJfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzIsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudEFzQXNwZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZGVudGl0eSwgc2luZ2xlLCBhcnJheSwgc2hhcGUsIGxpc3Rfb2ZfZGljdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWRlbnRpdHl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlXCI+e3NpbmdsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycmF5XCI+XG4gICAgICAgICAgICAgICAgICAgIHthcnJheS5tYXAoKGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT57ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZVwiPntzaGFwZS5zaGFwZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X29mX2RpY3RcIj5cbiAgICAgICAgICAgICAgICAgICAge2xpc3Rfb2ZfZGljdC5tYXAoZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZS52YWx1ZX0+e2UubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Db21wb25lbnRBc0FzcGVjdC5kZWZhdWx0UHJvcHMgPSB7fTtcblxuQ29tcG9uZW50QXNBc3BlY3QucHJvcFR5cGVzID0ge1xuICAgIHNpbmdsZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgYXJyYXk6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcbiAgICBzaGFwZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc2hhcGVkOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICB9KSxcblxuICAgIGxpc3Rfb2ZfZGljdDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgfSlcbiAgICApLFxuXG4gICAgLyoqXG4gICAgICogIFVuaXF1ZSBpZCBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBpZGVudGl0eTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBhc3BlY3RzIG9uIHRoZSBiYWNrZW5kLlxuICAgICAqL1xuICAgIHVwZGF0ZUFzcGVjdHM6IFByb3BUeXBlcy5mdW5jLFxufTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFByb3BzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxuICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzKS5tYXAoKGssIHYpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YCR7aWR9LSR7a31gfSBrZXk9e2Ake2lkfS0ke2t9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7a306IHtKU09OLnN0cmluZ2lmeSh2KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRlZmF1bHRQcm9wcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RyaW5nX2RlZmF1bHQ6ICdEZWZhdWx0IHN0cmluZycsXG4gICAgc3RyaW5nX2RlZmF1bHRfZW1wdHk6ICcnLFxuICAgIG51bWJlcl9kZWZhdWx0OiAwLjI2NjYsXG4gICAgbnVtYmVyX2RlZmF1bHRfZW1wdHk6IDAsXG4gICAgYXJyYXlfZGVmYXVsdDogWzEsIDIsIDNdLFxuICAgIGFycmF5X2RlZmF1bHRfZW1wdHk6IFtdLFxuICAgIG9iamVjdF9kZWZhdWx0OiB7Zm9vOiAnYmFyJ30sXG4gICAgb2JqZWN0X2RlZmF1bHRfZW1wdHk6IHt9LFxufTtcblxuRGVmYXVsdFByb3BzLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHN0cmluZ19kZWZhdWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0cmluZ19kZWZhdWx0X2VtcHR5OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgbnVtYmVyX2RlZmF1bHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbnVtYmVyX2RlZmF1bHRfZW1wdHk6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICBhcnJheV9kZWZhdWx0OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYXJyYXlfZGVmYXVsdF9lbXB0eTogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgb2JqZWN0X2RlZmF1bHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb2JqZWN0X2RlZmF1bHRfZW1wdHk6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtpc05pbH0gZnJvbSAncmFtZGEnO1xuXG4vKipcbiAqIFRlc3QgY29tcG9uZW50IHdpdGggYWxsIHN1cHBvcnRlZCBwcm9wcyBieSBkYXp6bGVyLlxuICogRWFjaCBwcm9wIGFyZSByZW5kZXJlZCB3aXRoIGEgc2VsZWN0b3IgZm9yIGVhc3kgYWNjZXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycmF5XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFycmF5X3Byb3AgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuYXJyYXlfcHJvcCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29sXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpc05pbCh0aGlzLnByb3BzLmJvb2xfcHJvcClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5ib29sX3Byb3BcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ1RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdGYWxzZSd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj57dGhpcy5wcm9wcy5udW1iZXJfcHJvcH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9iamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vYmplY3RfcHJvcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5vYmplY3RfcHJvcCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJpbmdcIj57dGhpcy5wcm9wcy5zdHJpbmdfcHJvcH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN5bWJvbFwiPnt0aGlzLnByb3BzLnN5bWJvbF9wcm9wfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW51bVwiPnt0aGlzLnByb3BzLmVudW1fcHJvcH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuaW9uXCI+e3RoaXMucHJvcHMudW5pb25fcHJvcH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycmF5X29mXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFycmF5X29mX3Byb3AgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuYXJyYXlfb2ZfcHJvcCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYmplY3Rfb2ZcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub2JqZWN0X29mX3Byb3AgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMub2JqZWN0X29mX3Byb3ApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hhcGVfcHJvcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5zaGFwZV9wcm9wKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVpcmVkX3N0cmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXF1aXJlZF9zdHJpbmd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRlc3RDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIHN0cmluZ193aXRoX2RlZmF1bHQ6ICdGb28nLFxufTtcblxuVGVzdENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gdGhlIERPTS5cbiAgICAgKiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBwcm9wcyB3aXRoXG4gICAgICovXG4gICAgYXJyYXlfcHJvcDogUHJvcFR5cGVzLmFycmF5LFxuICAgIGJvb2xfcHJvcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZnVuY19wcm9wOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBudW1iZXJfcHJvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvYmplY3RfcHJvcDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHJpbmdfcHJvcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzeW1ib2xfcHJvcDogUHJvcFR5cGVzLnN5bWJvbCxcbiAgICBhbnlfcHJvcDogUHJvcFR5cGVzLmFueSxcblxuICAgIHN0cmluZ193aXRoX2RlZmF1bHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW51bV9wcm9wOiBQcm9wVHlwZXMub25lT2YoWydOZXdzJywgJ1Bob3RvcyddKSxcblxuICAgIC8vIEFuIG9iamVjdCB0aGF0IGNvdWxkIGJlIG9uZSBvZiBtYW55IHR5cGVzXG4gICAgdW5pb25fcHJvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLy8gQW4gYXJyYXkgb2YgYSBjZXJ0YWluIHR5cGVcbiAgICBhcnJheV9vZl9wcm9wOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcblxuICAgIC8vIEFuIG9iamVjdCB3aXRoIHByb3BlcnR5IHZhbHVlcyBvZiBhIGNlcnRhaW4gdHlwZVxuICAgIG9iamVjdF9vZl9wcm9wOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLm51bWJlciksXG5cbiAgICAvLyBBbiBvYmplY3QgdGFraW5nIG9uIGEgcGFydGljdWxhciBzaGFwZVxuICAgIHNoYXBlX3Byb3A6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBmb250U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KSxcbiAgICByZXF1aXJlZF9zdHJpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8vIFRoZXNlIGRvbid0IHdvcmsgZ29vZC5cbiAgICBuZXN0ZWRfcHJvcDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3RyaW5nX3Byb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG5lc3RlZF9zaGFwZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIG5lc3RlZF9hcnJheTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgICAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgbmVzdGVkX2FycmF5X3N0cmluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgbmVzdGVkX2FycmF5X3NoYXBlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDE6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wMjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBuZXN0ZWRfc2hhcGVfc2hhcGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAgICAgcHJvcDM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgICAgICAgcHJvcDQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgIH0pLFxuXG4gICAgYXJyYXlfb2ZfYXJyYXk6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpKSxcblxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpZGVudGl0eTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1cGRhdGVBc3BlY3RzOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iLCJpbXBvcnQgVGVzdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudCc7XG5pbXBvcnQgRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9EZWZhdWx0UHJvcHMnO1xuaW1wb3J0IENvbXBvbmVudEFzQXNwZWN0IGZyb20gJy4vY29tcG9uZW50cy9Db21wb25lbnRBc0FzcGVjdCc7XG5cbmV4cG9ydCB7VGVzdENvbXBvbmVudCwgRGVmYXVsdFByb3BzLCBDb21wb25lbnRBc0FzcGVjdH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9
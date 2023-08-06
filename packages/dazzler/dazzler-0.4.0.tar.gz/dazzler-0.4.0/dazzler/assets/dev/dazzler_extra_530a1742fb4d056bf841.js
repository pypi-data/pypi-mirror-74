(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["dazzler_extra"] = factory(require("react"));
	else
		root["dazzler_extra"] = factory(root["React"]);
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
/******/ 		"extra": 0
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
/******/ 	deferredModules.push([4,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/extra/scss/index.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/extra/scss/index.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/extra/js/components/Drawer.jsx":
/*!********************************************!*\
  !*** ./src/extra/js/components/Drawer.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
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





var Caret = function Caret(_ref) {
  var side = _ref.side,
      opened = _ref.opened;

  switch (side) {
    case 'top':
      return opened ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u25B2") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u25BC");

    case 'right':
      return opened ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u25B8") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u25C2");

    case 'left':
      return opened ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u25C2") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u25B8");

    case 'bottom':
      return opened ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u25BC") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u25B2");
  }
};
/**
 * Draw content from the sides of the screen.
 */


var Drawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Drawer, _React$Component);

  function Drawer() {
    _classCallCheck(this, Drawer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Drawer).apply(this, arguments));
  }

  _createClass(Drawer, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          class_name = _this$props.class_name,
          identity = _this$props.identity,
          style = _this$props.style,
          children = _this$props.children,
          opened = _this$props.opened,
          side = _this$props.side;
      var css = [side];

      if (side === 'top' || side === 'bottom') {
        css.push('horizontal');
      } else {
        css.push('vertical');
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["join"])(' ', Object(ramda__WEBPACK_IMPORTED_MODULE_2__["concat"])(css, [class_name])),
        id: identity,
        style: style
      }, opened && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["join"])(' ', Object(ramda__WEBPACK_IMPORTED_MODULE_2__["concat"])(css, ['drawer-content']))
      }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["join"])(' ', Object(ramda__WEBPACK_IMPORTED_MODULE_2__["concat"])(css, ['drawer-control'])),
        onClick: function onClick() {
          return _this.props.updateAspects({
            opened: !opened
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caret, {
        opened: opened,
        side: side
      })));
    }
  }]);

  return Drawer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Drawer.defaultProps = {
  side: 'top'
};
Drawer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  opened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  class_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Side which open.
   */
  side: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'left', 'right', 'bottom']),

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

/***/ "./src/extra/js/components/Notice.jsx":
/*!********************************************!*\
  !*** ./src/extra/js/components/Notice.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! commons */ "./src/commons/js/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Browser notifications with permissions handling.
 */

var Notice =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Notice, _React$Component);

  function Notice(props) {
    var _this;

    _classCallCheck(this, Notice);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Notice).call(this, props));
    _this.state = {
      lastMessage: props.body,
      notification: null
    };
    _this.onPermission = _this.onPermission.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var updateAspects = this.props.updateAspects;

      if (!('Notification' in window) && updateAspects) {
        updateAspects({
          permission: 'unsupported'
        });
      } else if (Notification.permission === 'default') {
        Notification.requestPermission().then(this.onPermission);
      } else {
        this.onPermission(window.Notification.permission);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.displayed && this.props.displayed) {
        this.sendNotification(this.props.permission);
      }
    }
  }, {
    key: "sendNotification",
    value: function sendNotification(permission) {
      var _this2 = this;

      var _this$props = this.props,
          updateAspects = _this$props.updateAspects,
          body = _this$props.body,
          title = _this$props.title,
          icon = _this$props.icon,
          require_interaction = _this$props.require_interaction,
          lang = _this$props.lang,
          badge = _this$props.badge,
          tag = _this$props.tag,
          image = _this$props.image,
          vibrate = _this$props.vibrate;

      if (permission === 'granted') {
        var options = {
          requireInteraction: require_interaction,
          body: body,
          icon: icon,
          lang: lang,
          badge: badge,
          tag: tag,
          image: image,
          vibrate: vibrate
        };
        var notification = new Notification(title, options);

        notification.onclick = function () {
          if (updateAspects) {
            updateAspects(Object(ramda__WEBPACK_IMPORTED_MODULE_3__["merge"])({
              displayed: false
            }, Object(commons__WEBPACK_IMPORTED_MODULE_2__["timestampProp"])('clicks', _this2.props.clicks + 1)));
          }
        };

        notification.onclose = function () {
          if (updateAspects) {
            updateAspects(Object(ramda__WEBPACK_IMPORTED_MODULE_3__["merge"])({
              displayed: false
            }, Object(commons__WEBPACK_IMPORTED_MODULE_2__["timestampProp"])('closes', _this2.props.closes + 1)));
          }
        };
      }
    }
  }, {
    key: "onPermission",
    value: function onPermission(permission) {
      var _this$props2 = this.props,
          displayed = _this$props2.displayed,
          updateAspects = _this$props2.updateAspects;

      if (updateAspects) {
        updateAspects({
          permission: permission
        });
      }

      if (displayed) {
        this.sendNotification(permission);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Notice;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Notice.defaultProps = {
  require_interaction: false,
  clicks: 0,
  clicks_timestamp: -1,
  closes: 0,
  closes_timestamp: -1
}; // Props docs from https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification

Notice.propTypes = {
  identity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Permission granted by the user (READONLY)
   */
  permission: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['denied', 'granted', 'default', 'unsupported']),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The notification's language, as specified using a DOMString representing a BCP 47 language tag.
   */
  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A DOMString representing the body text of the notification, which will be displayed below the title.
   */
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A USVString containing the URL of the image used to represent the notification when there is not enough space to display the notification itself.
   */
  badge: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A DOMString representing an identifying tag for the notification.
   */
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A USVString containing the URL of an icon to be displayed in the notification.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   *  a USVString containing the URL of an image to be displayed in the notification.
   */
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A vibration pattern for the device's vibration hardware to emit when the notification fires.
   */
  vibrate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)]),

  /**
   * Indicates that a notification should remain active until the user clicks or dismisses it, rather than closing automatically. The default value is false.
   */
  require_interaction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Set to true to display the notification.
   */
  displayed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  clicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  clicks_timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Number of times the notification was closed.
   */
  closes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  closes_timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  updateAspect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/extra/js/components/Pager.jsx":
/*!*******************************************!*\
  !*** ./src/extra/js/components/Pager.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pager; });
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var startOffset = function startOffset(page, itemPerPage) {
  return (page - 1) * (page > 1 ? itemPerPage : 0);
};

var endOffset = function endOffset(start, itemPerPage, page, total, leftOver) {
  return page !== total ? start + itemPerPage : leftOver !== 0 ? start + leftOver : start + itemPerPage;
};

var showList = function showList(page, total, n) {
  if (total > n) {
    var middle = n / 2;
    var first = page >= total - middle ? total - n + 1 : page > middle ? page - middle : 1;
    var last = page < total - middle ? first + n : total + 1;
    return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["range"])(first, last);
  }

  return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["range"])(1, total + 1);
};

var Page = function Page(_ref) {
  var style = _ref.style,
      class_name = _ref.class_name,
      on_change = _ref.on_change,
      text = _ref.text,
      page = _ref.page;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: style,
    className: class_name,
    onClick: function onClick() {
      return on_change(page);
    }
  }, text || page);
};
/**
 * Paging for dazzler apps.
 */


var Pager =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pager, _React$Component);

  function Pager(props) {
    var _this;

    _classCallCheck(this, Pager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pager).call(this, props));
    _this.state = {
      current_page: null,
      start_offset: null,
      end_offset: null,
      pages: [],
      total_pages: Math.ceil(props.total_items / props.items_per_page)
    };
    _this.onChangePage = _this.onChangePage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Pager, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.onChangePage(this.props.current_page);
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(page) {
      var _this$props = this.props,
          items_per_page = _this$props.items_per_page,
          total_items = _this$props.total_items,
          updateAspects = _this$props.updateAspects,
          pages_displayed = _this$props.pages_displayed;
      var total_pages = this.state.total_pages;
      var start_offset = startOffset(page, items_per_page);
      var leftOver = total_items % items_per_page;
      var end_offset = endOffset(start_offset, items_per_page, page, total_pages, leftOver);
      var payload = {
        current_page: page,
        start_offset: start_offset,
        end_offset: end_offset,
        pages: showList(page, total_pages, pages_displayed)
      };
      this.setState(payload);

      if (updateAspects) {
        if (this.state.total_pages !== this.props.total_pages) {
          payload.total_pages = this.state.total_pages;
        }

        updateAspects(payload);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.current_page !== this.state.current_page) {
        this.onChangePage(props.current_page);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          current_page = _this$state.current_page,
          pages = _this$state.pages,
          total_pages = _this$state.total_pages;
      var _this$props2 = this.props,
          class_name = _this$props2.class_name,
          identity = _this$props2.identity,
          page_style = _this$props2.page_style,
          page_class_name = _this$props2.page_class_name;
      var pageCss = ['page'];

      if (page_class_name) {
        pageCss.push(page_class_name);
      }

      pageCss = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["join"])(' ', pageCss);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: class_name,
        id: identity
      }, current_page > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
        page: 1,
        text: 'first',
        style: page_style,
        class_name: pageCss,
        on_change: this.onChangePage
      }), current_page > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
        page: current_page - 1,
        text: 'previous',
        style: page_style,
        class_name: pageCss,
        on_change: this.onChangePage
      }), pages.map(function (e) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
          page: e,
          key: "page-".concat(e),
          style: page_style,
          class_name: pageCss,
          on_change: _this2.onChangePage
        });
      }), current_page < total_pages && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
        page: current_page + 1,
        text: 'next',
        style: page_style,
        class_name: pageCss,
        on_change: this.onChangePage
      }), current_page < total_pages && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
        page: total_pages,
        text: 'last',
        style: page_style,
        class_name: pageCss,
        on_change: this.onChangePage
      }));
    }
  }]);

  return Pager;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Pager.defaultProps = {
  current_page: 1,
  items_per_page: 10,
  pages_displayed: 10
};
Pager.propTypes = {
  /**
   * The total items in the set.
   */
  total_items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,

  /**
   * The number of items a page contains.
   */
  items_per_page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  identity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  class_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style for the page numbers.
   */
  page_style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * CSS class for the page numbers.
   */
  page_class_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The number of pages displayed by the pager.
   */
  pages_displayed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Read only, the currently displayed pages numbers.
   */
  pages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The current selected page.
   */
  current_page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Set by total_items / items_per_page
   */
  total_pages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The starting index of the current page
   * Can be used to slice data eg: data[start_offset: end_offset]
   */
  start_offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The end index of the current page.
   */
  end_offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  updateAspects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/extra/js/components/PopUp.jsx":
/*!*******************************************!*\
  !*** ./src/extra/js/components/PopUp.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




function getMouseX(e, popup) {
  return e.clientX - e.target.getBoundingClientRect().left - popup.getBoundingClientRect().width / 2;
}
/**
 * Wraps a component/text to render a popup when hovering
 * over the children or clicking on it.
 */


var PopUp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PopUp, _React$Component);

  function PopUp(props) {
    var _this;

    _classCallCheck(this, PopUp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PopUp).call(this, props));
    _this.state = {
      pos: null
    };
    return _this;
  }

  _createClass(PopUp, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          class_name = _this$props.class_name,
          style = _this$props.style,
          identity = _this$props.identity,
          children = _this$props.children,
          content = _this$props.content,
          mode = _this$props.mode,
          updateAspects = _this$props.updateAspects,
          active = _this$props.active,
          content_style = _this$props.content_style,
          children_style = _this$props.children_style;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: class_name,
        style: style,
        id: identity
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'popup-content' + (active ? ' visible' : ''),
        style: _objectSpread({}, content_style || {}, {
          left: this.state.pos || 0
        }),
        ref: function ref(r) {
          return _this2.popupRef = r;
        }
      }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "popup-children",
        onMouseEnter: function onMouseEnter(e) {
          if (mode === 'hover') {
            _this2.setState({
              pos: getMouseX(e, _this2.popupRef)
            }, function () {
              return updateAspects({
                active: true
              });
            });
          }
        },
        onMouseLeave: function onMouseLeave() {
          return mode === 'hover' && updateAspects({
            active: false
          });
        },
        onClick: function onClick(e) {
          if (mode === 'click') {
            _this2.setState({
              pos: getMouseX(e, _this2.popupRef)
            }, function () {
              return updateAspects({
                active: !active
              });
            });
          }
        },
        style: children_style
      }, children));
    }
  }]);

  return PopUp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


PopUp.defaultProps = {
  mode: 'hover',
  active: false
};
PopUp.propTypes = {
  /**
   * Component/text to wrap with a popup on hover/click.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Content of the popup info.
   */
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Is the popup currently active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Show popup on hover or click.
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['hover', 'click']),

  /**
   * CSS for the wrapper.
   */
  class_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style of the wrapper.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Style for the popup.
   */
  content_style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Style for the wrapped children.
   */
  children_style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  identity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  updateAspects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/extra/js/components/Spinner.jsx":
/*!*********************************************!*\
  !*** ./src/extra/js/components/Spinner.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spinner; });
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



/**
 * Simple html/css spinner.
 */

var Spinner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, _getPrototypeOf(Spinner).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          class_name = _this$props.class_name,
          style = _this$props.style,
          identity = _this$props.identity;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: identity,
        className: class_name,
        style: style
      });
    }
  }]);

  return Spinner;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Spinner.defaultProps = {};
Spinner.propTypes = {
  class_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

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

/***/ "./src/extra/js/components/Sticky.jsx":
/*!********************************************!*\
  !*** ./src/extra/js/components/Sticky.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sticky; });
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
 * A shorthand component for a sticky div.
 */

var Sticky =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sticky, _React$Component);

  function Sticky() {
    _classCallCheck(this, Sticky);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).apply(this, arguments));
  }

  _createClass(Sticky, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          class_name = _this$props.class_name,
          identity = _this$props.identity,
          style = _this$props.style,
          children = _this$props.children,
          top = _this$props.top,
          left = _this$props.left,
          right = _this$props.right,
          bottom = _this$props.bottom;
      var styles = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])([style, {
        top: top,
        left: left,
        right: right,
        bottom: bottom
      }]);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: class_name,
        id: identity,
        style: styles
      }, children);
    }
  }]);

  return Sticky;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Sticky.defaultProps = {}; // TODO Add Sticky props descriptions

Sticky.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  class_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  identity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./src/extra/js/components/TreeView.jsx":
/*!**********************************************!*\
  !*** ./src/extra/js/components/TreeView.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var TreeViewItem = function TreeViewItem(_ref) {
  var label = _ref.label,
      _onClick = _ref.onClick,
      identifier = _ref.identifier,
      items = _ref.items,
      level = _ref.level,
      selected = _ref.selected,
      expanded_items = _ref.expanded_items,
      nest_icon_expanded = _ref.nest_icon_expanded,
      nest_icon_collapsed = _ref.nest_icon_collapsed;
  var isSelected = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return selected && Object(ramda__WEBPACK_IMPORTED_MODULE_2__["includes"])(identifier, selected);
  }, [selected, identifier]);
  var isExpanded = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["includes"])(identifier, expanded_items);
  }, [expanded_items, expanded_items]);
  var css = ['tree-item-label', "level-".concat(level)];

  if (isSelected) {
    css.push('selected');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tree-item level-".concat(level),
    style: {
      marginLeft: "".concat(level, "rem")
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["join"])(' ', css),
    onClick: function onClick(e) {
      return _onClick(e, identifier, !!items);
    }
  }, items && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tree-caret"
  }, isExpanded ? nest_icon_expanded : nest_icon_collapsed), label || identifier), items && isExpanded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tree-sub-items"
  }, items.map(function (item) {
    return renderItem({
      parent: identifier,
      onClick: _onClick,
      item: item,
      level: level + 1,
      selected: selected,
      nest_icon_expanded: nest_icon_expanded,
      nest_icon_collapsed: nest_icon_collapsed,
      expanded_items: expanded_items
    });
  })));
};

var renderItem = function renderItem(_ref2) {
  var parent = _ref2.parent,
      item = _ref2.item,
      level = _ref2.level,
      rest = _objectWithoutProperties(_ref2, ["parent", "item", "level"]);

  if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, item)) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TreeViewItem, _extends({
      label: item,
      identifier: parent ? Object(ramda__WEBPACK_IMPORTED_MODULE_2__["join"])('.', [parent, item]) : item,
      level: level || 0,
      key: item
    }, rest));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TreeViewItem, _extends({}, item, {
    level: level || 0,
    key: item.identifier,
    identifier: parent ? Object(ramda__WEBPACK_IMPORTED_MODULE_2__["join"])('.', [parent, item.identifier]) : item.identifier
  }, rest));
};

var TvItemProps = {
  identifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(function () {
    return prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(TvItemProps);
  })
};
TreeViewItem.propTypes = TvItemProps;
/**
 * A tree of nested items.
 *
 * :CSS:
 *
 *     ``dazzler-extra-tree-view``
 *     - ``tree-item``
 *     - ``tree-item-label``
 *     - ``tree-sub-items``
 *     - ``tree-caret``
 *     - ``selected``
 *     - ``level-{n}``
 *
 * :example:
 *
 * .. literalinclude:: ../../tests/components/pages/treeview.py
 */

var TreeView = function TreeView(_ref3) {
  var class_name = _ref3.class_name,
      style = _ref3.style,
      identity = _ref3.identity,
      updateAspects = _ref3.updateAspects,
      items = _ref3.items,
      selected = _ref3.selected,
      expanded_items = _ref3.expanded_items,
      nest_icon_expanded = _ref3.nest_icon_expanded,
      nest_icon_collapsed = _ref3.nest_icon_collapsed;

  var onClick = function onClick(e, identifier, expand) {
    e.stopPropagation();
    var payload = {};

    if (selected && Object(ramda__WEBPACK_IMPORTED_MODULE_2__["includes"])(identifier, selected)) {
      var last = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["split"])('.', identifier);
      last = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["slice"])(0, last.length - 1, last);

      if (last.length === 0) {
        payload.selected = null;
      } else if (last.length === 1) {
        payload.selected = last[0];
      } else {
        payload.selected = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["join"])('.', last);
      }
    } else {
      payload.selected = identifier;
    }

    if (expand) {
      if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["includes"])(identifier, expanded_items)) {
        payload.expanded_items = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["without"])([identifier], expanded_items);
      } else {
        payload.expanded_items = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["concat"])(expanded_items, [identifier]);
      }
    }

    updateAspects(payload);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: class_name,
    style: style,
    id: identity
  }, items.map(function (item) {
    return renderItem({
      item: item,
      onClick: onClick,
      selected: selected,
      nest_icon_expanded: nest_icon_expanded,
      nest_icon_collapsed: nest_icon_collapsed,
      expanded_items: expanded_items
    });
  }));
};

TreeView.defaultProps = {
  nest_icon_collapsed: '⏵',
  nest_icon_expanded: '⏷',
  expanded_items: []
};
TreeView.propTypes = {
  /**
   * An array of items to render recursively.
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(TvItemProps)])).isRequired,

  /**
   * Last clicked path identifier joined by dot.
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Identifiers that have sub items and are open.
   * READONLY.
   */
  expanded_items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Icon to show when sub items are hidden.
   */
  nest_icon_collapsed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Icon to show when sub items are shown.
   */
  nest_icon_expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  class_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  identity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  updateAspects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TreeView);

/***/ }),

/***/ "./src/extra/js/index.js":
/*!*******************************!*\
  !*** ./src/extra/js/index.js ***!
  \*******************************/
/*! exports provided: Notice, Pager, Spinner, Sticky, Drawer, PopUp, TreeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./src/extra/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Notice */ "./src/extra/js/components/Notice.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return _components_Notice__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Pager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Pager */ "./src/extra/js/components/Pager.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pager", function() { return _components_Pager__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Spinner */ "./src/extra/js/components/Spinner.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _components_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_Sticky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Sticky */ "./src/extra/js/components/Sticky.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return _components_Sticky__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Drawer */ "./src/extra/js/components/Drawer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return _components_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_PopUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PopUp */ "./src/extra/js/components/PopUp.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopUp", function() { return _components_PopUp__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_TreeView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TreeView */ "./src/extra/js/components/TreeView.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeView", function() { return _components_TreeView__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./src/extra/scss/index.scss":
/*!***********************************!*\
  !*** ./src/extra/scss/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/extra/scss/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./src/extra/js/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/t4rk/projects/experiments/dazzler/src/extra/js/index.js */"./src/extra/js/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/Iiwid2VicGFjazovLy8uL3NyYy9leHRyYS9zY3NzL2luZGV4LnNjc3M/Li9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9leHRyYS9qcy9jb21wb25lbnRzL0RyYXdlci5qc3g/Iiwid2VicGFjazovLy8uL3NyYy9leHRyYS9qcy9jb21wb25lbnRzL05vdGljZS5qc3g/Iiwid2VicGFjazovLy8uL3NyYy9leHRyYS9qcy9jb21wb25lbnRzL1BhZ2VyLmpzeD8iLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dHJhL2pzL2NvbXBvbmVudHMvUG9wVXAuanN4PyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0cmEvanMvY29tcG9uZW50cy9TcGlubmVyLmpzeD8iLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dHJhL2pzL2NvbXBvbmVudHMvU3RpY2t5LmpzeD8iLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dHJhL2pzL2NvbXBvbmVudHMvVHJlZVZpZXcuanN4PyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0cmEvanMvaW5kZXguanM/Iiwid2VicGFjazovLy8uL3NyYy9leHRyYS9zY3NzL2luZGV4LnNjc3M/Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInVtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9PyJdLCJuYW1lcyI6WyJDYXJldCIsInNpZGUiLCJvcGVuZWQiLCJEcmF3ZXIiLCJwcm9wcyIsImNsYXNzX25hbWUiLCJpZGVudGl0eSIsInN0eWxlIiwiY2hpbGRyZW4iLCJjc3MiLCJwdXNoIiwiam9pbiIsImNvbmNhdCIsInVwZGF0ZUFzcGVjdHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJib29sIiwib2JqZWN0Iiwic3RyaW5nIiwib25lT2YiLCJmdW5jIiwiTm90aWNlIiwic3RhdGUiLCJsYXN0TWVzc2FnZSIsImJvZHkiLCJub3RpZmljYXRpb24iLCJvblBlcm1pc3Npb24iLCJiaW5kIiwid2luZG93IiwicGVybWlzc2lvbiIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwidGhlbiIsInByZXZQcm9wcyIsImRpc3BsYXllZCIsInNlbmROb3RpZmljYXRpb24iLCJ0aXRsZSIsImljb24iLCJyZXF1aXJlX2ludGVyYWN0aW9uIiwibGFuZyIsImJhZGdlIiwidGFnIiwiaW1hZ2UiLCJ2aWJyYXRlIiwib3B0aW9ucyIsInJlcXVpcmVJbnRlcmFjdGlvbiIsIm9uY2xpY2siLCJtZXJnZSIsInRpbWVzdGFtcFByb3AiLCJjbGlja3MiLCJvbmNsb3NlIiwiY2xvc2VzIiwiY2xpY2tzX3RpbWVzdGFtcCIsImNsb3Nlc190aW1lc3RhbXAiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXlPZiIsInVwZGF0ZUFzcGVjdCIsInN0YXJ0T2Zmc2V0IiwicGFnZSIsIml0ZW1QZXJQYWdlIiwiZW5kT2Zmc2V0Iiwic3RhcnQiLCJ0b3RhbCIsImxlZnRPdmVyIiwic2hvd0xpc3QiLCJuIiwibWlkZGxlIiwiZmlyc3QiLCJsYXN0IiwicmFuZ2UiLCJQYWdlIiwib25fY2hhbmdlIiwidGV4dCIsIlBhZ2VyIiwiY3VycmVudF9wYWdlIiwic3RhcnRfb2Zmc2V0IiwiZW5kX29mZnNldCIsInBhZ2VzIiwidG90YWxfcGFnZXMiLCJNYXRoIiwiY2VpbCIsInRvdGFsX2l0ZW1zIiwiaXRlbXNfcGVyX3BhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlc19kaXNwbGF5ZWQiLCJwYXlsb2FkIiwic2V0U3RhdGUiLCJwYWdlX3N0eWxlIiwicGFnZV9jbGFzc19uYW1lIiwicGFnZUNzcyIsIm1hcCIsImUiLCJhcnJheSIsImdldE1vdXNlWCIsInBvcHVwIiwiY2xpZW50WCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJ3aWR0aCIsIlBvcFVwIiwicG9zIiwiY29udGVudCIsIm1vZGUiLCJhY3RpdmUiLCJjb250ZW50X3N0eWxlIiwiY2hpbGRyZW5fc3R5bGUiLCJyIiwicG9wdXBSZWYiLCJTcGlubmVyIiwiU3RpY2t5IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJzdHlsZXMiLCJtZXJnZUFsbCIsIlRyZWVWaWV3SXRlbSIsImxhYmVsIiwib25DbGljayIsImlkZW50aWZpZXIiLCJpdGVtcyIsImxldmVsIiwic2VsZWN0ZWQiLCJleHBhbmRlZF9pdGVtcyIsIm5lc3RfaWNvbl9leHBhbmRlZCIsIm5lc3RfaWNvbl9jb2xsYXBzZWQiLCJpc1NlbGVjdGVkIiwidXNlTWVtbyIsImluY2x1ZGVzIiwiaXNFeHBhbmRlZCIsIm1hcmdpbkxlZnQiLCJpdGVtIiwicmVuZGVySXRlbSIsInBhcmVudCIsInJlc3QiLCJpcyIsIlN0cmluZyIsIlR2SXRlbVByb3BzIiwic2hhcGUiLCJUcmVlVmlldyIsImV4cGFuZCIsInN0b3BQcm9wYWdhdGlvbiIsInNwbGl0Iiwic2xpY2UiLCJsZW5ndGgiLCJ3aXRob3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QTRCakJULGVBQWEsRUFBRUssaURBQVMsQ0FBQ007QUE1QlIsQ0FBckI7QUErQmV5SCx1RUFBZixFOzs7Ozs7Ozs7Ozs7QUM3TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BBLGNBQWMsbUJBQU8sQ0FBQyxpVkFBMEs7O0FBRWhNLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJmLG1EIiwiZmlsZSI6ImRhenpsZXJfZXh0cmFfNTMwYTE3NDJmYjRkMDU2YmY4NDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXp6bGVyX2V4dHJhXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRhenpsZXJfZXh0cmFcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJleHRyYVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wZGF6emxlcl9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucGRhenpsZXJfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzQsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2pvaW4sIGNvbmNhdH0gZnJvbSAncmFtZGEnO1xuXG5jb25zdCBDYXJldCA9ICh7c2lkZSwgb3BlbmVkfSkgPT4ge1xuICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIG9wZW5lZCA/IDxzcGFuPiYjOTY1MDs8L3NwYW4+IDogPHNwYW4+JiM5NjYwOzwvc3Bhbj47XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiBvcGVuZWQgPyA8c3Bhbj4mIzk2NTY7PC9zcGFuPiA6IDxzcGFuPiYjOTY2Njs8L3NwYW4+O1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgIHJldHVybiBvcGVuZWQgPyA8c3Bhbj4mIzk2NjY7PC9zcGFuPiA6IDxzcGFuPiYjOTY1Njs8L3NwYW4+O1xuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgcmV0dXJuIG9wZW5lZCA/IDxzcGFuPiYjOTY2MDs8L3NwYW4+IDogPHNwYW4+JiM5NjUwOzwvc3Bhbj47XG4gICAgfVxufTtcblxuLyoqXG4gKiBEcmF3IGNvbnRlbnQgZnJvbSB0aGUgc2lkZXMgb2YgdGhlIHNjcmVlbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNsYXNzX25hbWUsXG4gICAgICAgICAgICBpZGVudGl0eSxcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICBvcGVuZWQsXG4gICAgICAgICAgICBzaWRlLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBjc3MgPSBbc2lkZV07XG5cbiAgICAgICAgaWYgKHNpZGUgPT09ICd0b3AnIHx8IHNpZGUgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICBjc3MucHVzaCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NzLnB1c2goJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbignICcsIGNvbmNhdChjc3MsIFtjbGFzc19uYW1lXSkpfVxuICAgICAgICAgICAgICAgIGlkPXtpZGVudGl0eX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29wZW5lZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKCcgJywgY29uY2F0KGNzcywgWydkcmF3ZXItY29udGVudCddKSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luKCcgJywgY29uY2F0KGNzcywgWydkcmF3ZXItY29udHJvbCddKSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudXBkYXRlQXNwZWN0cyh7b3BlbmVkOiAhb3BlbmVkfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZXQgb3BlbmVkPXtvcGVuZWR9IHNpZGU9e3NpZGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2lkZTogJ3RvcCcsXG59O1xuXG5EcmF3ZXIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBvcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzX25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogU2lkZSB3aGljaCBvcGVuLlxuICAgICAqL1xuICAgIHNpZGU6IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0JywgJ2JvdHRvbSddKSxcblxuICAgIC8qKlxuICAgICAqICBVbmlxdWUgaWQgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgaWRlbnRpdHk6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYXNwZWN0cyBvbiB0aGUgYmFja2VuZC5cbiAgICAgKi9cbiAgICB1cGRhdGVBc3BlY3RzOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7dGltZXN0YW1wUHJvcH0gZnJvbSAnY29tbW9ucyc7XG5pbXBvcnQge21lcmdlfSBmcm9tICdyYW1kYSc7XG5cbi8qKlxuICogQnJvd3NlciBub3RpZmljYXRpb25zIHdpdGggcGVybWlzc2lvbnMgaGFuZGxpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGFzdE1lc3NhZ2U6IHByb3BzLmJvZHksXG4gICAgICAgICAgICBub3RpZmljYXRpb246IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25QZXJtaXNzaW9uID0gdGhpcy5vblBlcm1pc3Npb24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3Qge3VwZGF0ZUFzcGVjdHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCEoJ05vdGlmaWNhdGlvbicgaW4gd2luZG93KSAmJiB1cGRhdGVBc3BlY3RzKSB7XG4gICAgICAgICAgICB1cGRhdGVBc3BlY3RzKHtwZXJtaXNzaW9uOiAndW5zdXBwb3J0ZWQnfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbih0aGlzLm9uUGVybWlzc2lvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uUGVybWlzc2lvbih3aW5kb3cuTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAoIXByZXZQcm9wcy5kaXNwbGF5ZWQgJiYgdGhpcy5wcm9wcy5kaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbih0aGlzLnByb3BzLnBlcm1pc3Npb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZE5vdGlmaWNhdGlvbihwZXJtaXNzaW9uKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHVwZGF0ZUFzcGVjdHMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgcmVxdWlyZV9pbnRlcmFjdGlvbixcbiAgICAgICAgICAgIGxhbmcsXG4gICAgICAgICAgICBiYWRnZSxcbiAgICAgICAgICAgIHRhZyxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgdmlicmF0ZSxcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChwZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZUludGVyYWN0aW9uOiByZXF1aXJlX2ludGVyYWN0aW9uLFxuICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgICAgICBsYW5nLFxuICAgICAgICAgICAgICAgIGJhZGdlLFxuICAgICAgICAgICAgICAgIHRhZyxcbiAgICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgICB2aWJyYXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24odGl0bGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZUFzcGVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXNwZWN0cyhcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5ZWQ6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXBQcm9wKCdjbGlja3MnLCB0aGlzLnByb3BzLmNsaWNrcyArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVBc3BlY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFzcGVjdHMoXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheWVkOiBmYWxzZX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wUHJvcCgnY2xvc2VzJywgdGhpcy5wcm9wcy5jbG9zZXMgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBlcm1pc3Npb24ocGVybWlzc2lvbikge1xuICAgICAgICBjb25zdCB7ZGlzcGxheWVkLCB1cGRhdGVBc3BlY3RzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICh1cGRhdGVBc3BlY3RzKSB7XG4gICAgICAgICAgICB1cGRhdGVBc3BlY3RzKHtwZXJtaXNzaW9ufSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpc3BsYXllZCkge1xuICAgICAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKHBlcm1pc3Npb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbk5vdGljZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcmVxdWlyZV9pbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgY2xpY2tzOiAwLFxuICAgIGNsaWNrc190aW1lc3RhbXA6IC0xLFxuICAgIGNsb3NlczogMCxcbiAgICBjbG9zZXNfdGltZXN0YW1wOiAtMSxcbn07XG5cbi8vIFByb3BzIGRvY3MgZnJvbSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm90aWZpY2F0aW9uL05vdGlmaWNhdGlvblxuTm90aWNlLnByb3BUeXBlcyA9IHtcbiAgICBpZGVudGl0eTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFBlcm1pc3Npb24gZ3JhbnRlZCBieSB0aGUgdXNlciAoUkVBRE9OTFkpXG4gICAgICovXG4gICAgcGVybWlzc2lvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICAgJ2RlbmllZCcsXG4gICAgICAgICdncmFudGVkJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAndW5zdXBwb3J0ZWQnLFxuICAgIF0pLFxuXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBub3RpZmljYXRpb24ncyBsYW5ndWFnZSwgYXMgc3BlY2lmaWVkIHVzaW5nIGEgRE9NU3RyaW5nIHJlcHJlc2VudGluZyBhIEJDUCA0NyBsYW5ndWFnZSB0YWcuXG4gICAgICovXG4gICAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBBIERPTVN0cmluZyByZXByZXNlbnRpbmcgdGhlIGJvZHkgdGV4dCBvZiB0aGUgbm90aWZpY2F0aW9uLCB3aGljaCB3aWxsIGJlIGRpc3BsYXllZCBiZWxvdyB0aGUgdGl0bGUuXG4gICAgICovXG4gICAgYm9keTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBBIFVTVlN0cmluZyBjb250YWluaW5nIHRoZSBVUkwgb2YgdGhlIGltYWdlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBub3RpZmljYXRpb24gd2hlbiB0aGVyZSBpcyBub3QgZW5vdWdoIHNwYWNlIHRvIGRpc3BsYXkgdGhlIG5vdGlmaWNhdGlvbiBpdHNlbGYuXG4gICAgICovXG4gICAgYmFkZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBIERPTVN0cmluZyByZXByZXNlbnRpbmcgYW4gaWRlbnRpZnlpbmcgdGFnIGZvciB0aGUgbm90aWZpY2F0aW9uLlxuICAgICAqL1xuICAgIHRhZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBBIFVTVlN0cmluZyBjb250YWluaW5nIHRoZSBVUkwgb2YgYW4gaWNvbiB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIG5vdGlmaWNhdGlvbi5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqICBhIFVTVlN0cmluZyBjb250YWluaW5nIHRoZSBVUkwgb2YgYW4gaW1hZ2UgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBub3RpZmljYXRpb24uXG4gICAgICovXG4gICAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQSB2aWJyYXRpb24gcGF0dGVybiBmb3IgdGhlIGRldmljZSdzIHZpYnJhdGlvbiBoYXJkd2FyZSB0byBlbWl0IHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBmaXJlcy5cbiAgICAgKi9cbiAgICB2aWJyYXRlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgXSksXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgYSBub3RpZmljYXRpb24gc2hvdWxkIHJlbWFpbiBhY3RpdmUgdW50aWwgdGhlIHVzZXIgY2xpY2tzIG9yIGRpc21pc3NlcyBpdCwgcmF0aGVyIHRoYW4gY2xvc2luZyBhdXRvbWF0aWNhbGx5LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICByZXF1aXJlX2ludGVyYWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc3BsYXkgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICAgKi9cbiAgICBkaXNwbGF5ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgY2xpY2tzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsaWNrc190aW1lc3RhbXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHRpbWVzIHRoZSBub3RpZmljYXRpb24gd2FzIGNsb3NlZC5cbiAgICAgKi9cbiAgICBjbG9zZXM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xvc2VzX3RpbWVzdGFtcDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIHVwZGF0ZUFzcGVjdDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge3JhbmdlLCBqb2lufSBmcm9tICdyYW1kYSc7XG5cbmNvbnN0IHN0YXJ0T2Zmc2V0ID0gKHBhZ2UsIGl0ZW1QZXJQYWdlKSA9PlxuICAgIChwYWdlIC0gMSkgKiAocGFnZSA+IDEgPyBpdGVtUGVyUGFnZSA6IDApO1xuXG5jb25zdCBlbmRPZmZzZXQgPSAoc3RhcnQsIGl0ZW1QZXJQYWdlLCBwYWdlLCB0b3RhbCwgbGVmdE92ZXIpID0+XG4gICAgcGFnZSAhPT0gdG90YWxcbiAgICAgICAgPyBzdGFydCArIGl0ZW1QZXJQYWdlXG4gICAgICAgIDogbGVmdE92ZXIgIT09IDBcbiAgICAgICAgPyBzdGFydCArIGxlZnRPdmVyXG4gICAgICAgIDogc3RhcnQgKyBpdGVtUGVyUGFnZTtcblxuY29uc3Qgc2hvd0xpc3QgPSAocGFnZSwgdG90YWwsIG4pID0+IHtcbiAgICBpZiAodG90YWwgPiBuKSB7XG4gICAgICAgIGNvbnN0IG1pZGRsZSA9IG4gLyAyO1xuICAgICAgICBjb25zdCBmaXJzdCA9XG4gICAgICAgICAgICBwYWdlID49IHRvdGFsIC0gbWlkZGxlXG4gICAgICAgICAgICAgICAgPyB0b3RhbCAtIG4gKyAxXG4gICAgICAgICAgICAgICAgOiBwYWdlID4gbWlkZGxlXG4gICAgICAgICAgICAgICAgPyBwYWdlIC0gbWlkZGxlXG4gICAgICAgICAgICAgICAgOiAxO1xuICAgICAgICBjb25zdCBsYXN0ID0gcGFnZSA8IHRvdGFsIC0gbWlkZGxlID8gZmlyc3QgKyBuIDogdG90YWwgKyAxO1xuICAgICAgICByZXR1cm4gcmFuZ2UoZmlyc3QsIGxhc3QpO1xuICAgIH1cbiAgICByZXR1cm4gcmFuZ2UoMSwgdG90YWwgKyAxKTtcbn07XG5cbmNvbnN0IFBhZ2UgPSAoe3N0eWxlLCBjbGFzc19uYW1lLCBvbl9jaGFuZ2UsIHRleHQsIHBhZ2V9KSA9PiAoXG4gICAgPHNwYW4gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzX25hbWV9IG9uQ2xpY2s9eygpID0+IG9uX2NoYW5nZShwYWdlKX0+XG4gICAgICAgIHt0ZXh0IHx8IHBhZ2V9XG4gICAgPC9zcGFuPlxuKTtcblxuLyoqXG4gKiBQYWdpbmcgZm9yIGRhenpsZXIgYXBwcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRfcGFnZTogbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0X29mZnNldDogbnVsbCxcbiAgICAgICAgICAgIGVuZF9vZmZzZXQ6IG51bGwsXG4gICAgICAgICAgICBwYWdlczogW10sXG4gICAgICAgICAgICB0b3RhbF9wYWdlczogTWF0aC5jZWlsKHByb3BzLnRvdGFsX2l0ZW1zIC8gcHJvcHMuaXRlbXNfcGVyX3BhZ2UpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFnZSA9IHRoaXMub25DaGFuZ2VQYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFnZSh0aGlzLnByb3BzLmN1cnJlbnRfcGFnZSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWdlKHBhZ2UpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaXRlbXNfcGVyX3BhZ2UsXG4gICAgICAgICAgICB0b3RhbF9pdGVtcyxcbiAgICAgICAgICAgIHVwZGF0ZUFzcGVjdHMsXG4gICAgICAgICAgICBwYWdlc19kaXNwbGF5ZWQsXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7dG90YWxfcGFnZXN9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBzdGFydF9vZmZzZXQgPSBzdGFydE9mZnNldChwYWdlLCBpdGVtc19wZXJfcGFnZSk7XG4gICAgICAgIGNvbnN0IGxlZnRPdmVyID0gdG90YWxfaXRlbXMgJSBpdGVtc19wZXJfcGFnZTtcblxuICAgICAgICBjb25zdCBlbmRfb2Zmc2V0ID0gZW5kT2Zmc2V0KFxuICAgICAgICAgICAgc3RhcnRfb2Zmc2V0LFxuICAgICAgICAgICAgaXRlbXNfcGVyX3BhZ2UsXG4gICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgdG90YWxfcGFnZXMsXG4gICAgICAgICAgICBsZWZ0T3ZlclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICBjdXJyZW50X3BhZ2U6IHBhZ2UsXG4gICAgICAgICAgICBzdGFydF9vZmZzZXQ6IHN0YXJ0X29mZnNldCxcbiAgICAgICAgICAgIGVuZF9vZmZzZXQ6IGVuZF9vZmZzZXQsXG4gICAgICAgICAgICBwYWdlczogc2hvd0xpc3QocGFnZSwgdG90YWxfcGFnZXMsIHBhZ2VzX2Rpc3BsYXllZCksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUocGF5bG9hZCk7XG5cbiAgICAgICAgaWYgKHVwZGF0ZUFzcGVjdHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdGFsX3BhZ2VzICE9PSB0aGlzLnByb3BzLnRvdGFsX3BhZ2VzKSB7XG4gICAgICAgICAgICAgICAgcGF5bG9hZC50b3RhbF9wYWdlcyA9IHRoaXMuc3RhdGUudG90YWxfcGFnZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVBc3BlY3RzKHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuY3VycmVudF9wYWdlICE9PSB0aGlzLnN0YXRlLmN1cnJlbnRfcGFnZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZVBhZ2UocHJvcHMuY3VycmVudF9wYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2N1cnJlbnRfcGFnZSwgcGFnZXMsIHRvdGFsX3BhZ2VzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHtjbGFzc19uYW1lLCBpZGVudGl0eSwgcGFnZV9zdHlsZSwgcGFnZV9jbGFzc19uYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHBhZ2VDc3MgPSBbJ3BhZ2UnXTtcbiAgICAgICAgaWYgKHBhZ2VfY2xhc3NfbmFtZSkge1xuICAgICAgICAgICAgcGFnZUNzcy5wdXNoKHBhZ2VfY2xhc3NfbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZUNzcyA9IGpvaW4oJyAnLCBwYWdlQ3NzKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzX25hbWV9IGlkPXtpZGVudGl0eX0+XG4gICAgICAgICAgICAgICAge2N1cnJlbnRfcGFnZSA+IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9eydmaXJzdCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17cGFnZV9zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzX25hbWU9e3BhZ2VDc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbl9jaGFuZ2U9e3RoaXMub25DaGFuZ2VQYWdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2N1cnJlbnRfcGFnZSA+IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17Y3VycmVudF9wYWdlIC0gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9eydwcmV2aW91cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17cGFnZV9zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzX25hbWU9e3BhZ2VDc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbl9jaGFuZ2U9e3RoaXMub25DaGFuZ2VQYWdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3BhZ2VzLm1hcChlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BwYWdlLSR7ZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3BhZ2Vfc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc19uYW1lPXtwYWdlQ3NzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25fY2hhbmdlPXt0aGlzLm9uQ2hhbmdlUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7Y3VycmVudF9wYWdlIDwgdG90YWxfcGFnZXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17Y3VycmVudF9wYWdlICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9eyduZXh0J31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtwYWdlX3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NfbmFtZT17cGFnZUNzc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uX2NoYW5nZT17dGhpcy5vbkNoYW5nZVBhZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7Y3VycmVudF9wYWdlIDwgdG90YWxfcGFnZXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17dG90YWxfcGFnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXsnbGFzdCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17cGFnZV9zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzX25hbWU9e3BhZ2VDc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbl9jaGFuZ2U9e3RoaXMub25DaGFuZ2VQYWdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBhZ2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdXJyZW50X3BhZ2U6IDEsXG4gICAgaXRlbXNfcGVyX3BhZ2U6IDEwLFxuICAgIHBhZ2VzX2Rpc3BsYXllZDogMTAsXG59O1xuXG5QYWdlci5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHRvdGFsIGl0ZW1zIGluIHRoZSBzZXQuXG4gICAgICovXG4gICAgdG90YWxfaXRlbXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGEgcGFnZSBjb250YWlucy5cbiAgICAgKi9cbiAgICBpdGVtc19wZXJfcGFnZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIGlkZW50aXR5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzX25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogU3R5bGUgZm9yIHRoZSBwYWdlIG51bWJlcnMuXG4gICAgICovXG4gICAgcGFnZV9zdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiBDU1MgY2xhc3MgZm9yIHRoZSBwYWdlIG51bWJlcnMuXG4gICAgICovXG4gICAgcGFnZV9jbGFzc19uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgcGFnZXMgZGlzcGxheWVkIGJ5IHRoZSBwYWdlci5cbiAgICAgKi9cbiAgICBwYWdlc19kaXNwbGF5ZWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogUmVhZCBvbmx5LCB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBwYWdlcyBudW1iZXJzLlxuICAgICAqL1xuICAgIHBhZ2VzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2VsZWN0ZWQgcGFnZS5cbiAgICAgKi9cbiAgICBjdXJyZW50X3BhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogU2V0IGJ5IHRvdGFsX2l0ZW1zIC8gaXRlbXNfcGVyX3BhZ2VcbiAgICAgKi9cbiAgICB0b3RhbF9wYWdlczogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGFydGluZyBpbmRleCBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAgICogQ2FuIGJlIHVzZWQgdG8gc2xpY2UgZGF0YSBlZzogZGF0YVtzdGFydF9vZmZzZXQ6IGVuZF9vZmZzZXRdXG4gICAgICovXG4gICAgc3RhcnRfb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSBlbmQgaW5kZXggb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICAgKi9cbiAgICBlbmRfb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgdXBkYXRlQXNwZWN0czogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIGdldE1vdXNlWChlLCBwb3B1cCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIGUuY2xpZW50WCAtXG4gICAgICAgIGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuICAgICAgICBwb3B1cC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDJcbiAgICApO1xufVxuXG4vKipcbiAqIFdyYXBzIGEgY29tcG9uZW50L3RleHQgdG8gcmVuZGVyIGEgcG9wdXAgd2hlbiBob3ZlcmluZ1xuICogb3ZlciB0aGUgY2hpbGRyZW4gb3IgY2xpY2tpbmcgb24gaXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3M6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2xhc3NfbmFtZSxcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgaWRlbnRpdHksXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgdXBkYXRlQXNwZWN0cyxcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGNvbnRlbnRfc3R5bGUsXG4gICAgICAgICAgICBjaGlsZHJlbl9zdHlsZSxcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc19uYW1lfSBzdHlsZT17c3R5bGV9IGlkPXtpZGVudGl0eX0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydwb3B1cC1jb250ZW50JyArIChhY3RpdmUgPyAnIHZpc2libGUnIDogJycpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKGNvbnRlbnRfc3R5bGUgfHwge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5wb3MgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyID0+ICh0aGlzLnBvcHVwUmVmID0gcil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcHVwLWNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnaG92ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvczogZ2V0TW91c2VYKGUsIHRoaXMucG9wdXBSZWYpfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdXBkYXRlQXNwZWN0cyh7YWN0aXZlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID09PSAnaG92ZXInICYmIHVwZGF0ZUFzcGVjdHMoe2FjdGl2ZTogZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zOiBnZXRNb3VzZVgoZSwgdGhpcy5wb3B1cFJlZil9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB1cGRhdGVBc3BlY3RzKHthY3RpdmU6ICFhY3RpdmV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjaGlsZHJlbl9zdHlsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUG9wVXAuZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZGU6ICdob3ZlcicsXG4gICAgYWN0aXZlOiBmYWxzZSxcbn07XG5cblBvcFVwLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQvdGV4dCB0byB3cmFwIHdpdGggYSBwb3B1cCBvbiBob3Zlci9jbGljay5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogQ29udGVudCBvZiB0aGUgcG9wdXAgaW5mby5cbiAgICAgKi9cbiAgICBjb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiBJcyB0aGUgcG9wdXAgY3VycmVudGx5IGFjdGl2ZS5cbiAgICAgKi9cbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIFNob3cgcG9wdXAgb24gaG92ZXIgb3IgY2xpY2suXG4gICAgICovXG4gICAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFsnaG92ZXInLCAnY2xpY2snXSksXG4gICAgLyoqXG4gICAgICogQ1NTIGZvciB0aGUgd3JhcHBlci5cbiAgICAgKi9cbiAgICBjbGFzc19uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFN0eWxlIG9mIHRoZSB3cmFwcGVyLlxuICAgICAqL1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIFN0eWxlIGZvciB0aGUgcG9wdXAuXG4gICAgICovXG4gICAgY29udGVudF9zdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiBTdHlsZSBmb3IgdGhlIHdyYXBwZWQgY2hpbGRyZW4uXG4gICAgICovXG4gICAgY2hpbGRyZW5fc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICBpZGVudGl0eTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1cGRhdGVBc3BlY3RzOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBTaW1wbGUgaHRtbC9jc3Mgc3Bpbm5lci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpbm5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2xhc3NfbmFtZSwgc3R5bGUsIGlkZW50aXR5fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiA8ZGl2IGlkPXtpZGVudGl0eX0gY2xhc3NOYW1lPXtjbGFzc19uYW1lfSBzdHlsZT17c3R5bGV9IC8+O1xuICAgIH1cbn1cblxuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7fTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiAgVW5pcXVlIGlkIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIGlkZW50aXR5OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGFzcGVjdHMgb24gdGhlIGJhY2tlbmQuXG4gICAgICovXG4gICAgdXBkYXRlQXNwZWN0czogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge21lcmdlQWxsfSBmcm9tICdyYW1kYSc7XG5cbi8qKlxuICogQSBzaG9ydGhhbmQgY29tcG9uZW50IGZvciBhIHN0aWNreSBkaXYuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbGFzc19uYW1lLFxuICAgICAgICAgICAgaWRlbnRpdHksXG4gICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIHJpZ2h0LFxuICAgICAgICAgICAgYm90dG9tLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gbWVyZ2VBbGwoW3N0eWxlLCB7dG9wLCBsZWZ0LCByaWdodCwgYm90dG9tfV0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzX25hbWV9IGlkPXtpZGVudGl0eX0gc3R5bGU9e3N0eWxlc30+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TdGlja3kuZGVmYXVsdFByb3BzID0ge307XG5cbi8vIFRPRE8gQWRkIFN0aWNreSBwcm9wcyBkZXNjcmlwdGlvbnNcblxuU3RpY2t5LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgdG9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxlZnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYm90dG9tOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgY2xhc3NfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpZGVudGl0eTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtpcywgam9pbiwgaW5jbHVkZXMsIHNwbGl0LCBzbGljZSwgY29uY2F0LCB3aXRob3V0fSBmcm9tICdyYW1kYSc7XG5cbmNvbnN0IFRyZWVWaWV3SXRlbSA9ICh7XG4gICAgbGFiZWwsXG4gICAgb25DbGljayxcbiAgICBpZGVudGlmaWVyLFxuICAgIGl0ZW1zLFxuICAgIGxldmVsLFxuICAgIHNlbGVjdGVkLFxuICAgIGV4cGFuZGVkX2l0ZW1zLFxuICAgIG5lc3RfaWNvbl9leHBhbmRlZCxcbiAgICBuZXN0X2ljb25fY29sbGFwc2VkLFxufSkgPT4ge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiBzZWxlY3RlZCAmJiBpbmNsdWRlcyhpZGVudGlmaWVyLCBzZWxlY3RlZCksXG4gICAgICAgIFtzZWxlY3RlZCwgaWRlbnRpZmllcl1cbiAgICApO1xuICAgIGNvbnN0IGlzRXhwYW5kZWQgPSB1c2VNZW1vKCgpID0+IGluY2x1ZGVzKGlkZW50aWZpZXIsIGV4cGFuZGVkX2l0ZW1zKSwgW1xuICAgICAgICBleHBhbmRlZF9pdGVtcyxcbiAgICAgICAgZXhwYW5kZWRfaXRlbXMsXG4gICAgXSk7XG4gICAgY29uc3QgY3NzID0gWyd0cmVlLWl0ZW0tbGFiZWwnLCBgbGV2ZWwtJHtsZXZlbH1gXTtcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICBjc3MucHVzaCgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0cmVlLWl0ZW0gbGV2ZWwtJHtsZXZlbH1gfVxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBgJHtsZXZlbH1yZW1gfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbignICcsIGNzcyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBvbkNsaWNrKGUsIGlkZW50aWZpZXIsICEhaXRlbXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyZWUtY2FyZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0V4cGFuZGVkID8gbmVzdF9pY29uX2V4cGFuZGVkIDogbmVzdF9pY29uX2NvbGxhcHNlZH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2xhYmVsIHx8IGlkZW50aWZpZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2l0ZW1zICYmIGlzRXhwYW5kZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1zdWItaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGlkZW50aWZpZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBsZXZlbCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVzdF9pY29uX2V4cGFuZGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RfaWNvbl9jb2xsYXBzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRfaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IHJlbmRlckl0ZW0gPSAoe3BhcmVudCwgaXRlbSwgbGV2ZWwsIC4uLnJlc3R9KSA9PiB7XG4gICAgaWYgKGlzKFN0cmluZywgaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUcmVlVmlld0l0ZW1cbiAgICAgICAgICAgICAgICBsYWJlbD17aXRlbX1cbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyPXtwYXJlbnQgPyBqb2luKCcuJywgW3BhcmVudCwgaXRlbV0pIDogaXRlbX1cbiAgICAgICAgICAgICAgICBsZXZlbD17bGV2ZWwgfHwgMH1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8VHJlZVZpZXdJdGVtXG4gICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgIGxldmVsPXtsZXZlbCB8fCAwfVxuICAgICAgICAgICAga2V5PXtpdGVtLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICBpZGVudGlmaWVyPXtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPyBqb2luKCcuJywgW3BhcmVudCwgaXRlbS5pZGVudGlmaWVyXSkgOiBpdGVtLmlkZW50aWZpZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG5jb25zdCBUdkl0ZW1Qcm9wcyA9IHtcbiAgICBpZGVudGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKCgpID0+IFByb3BUeXBlcy5zaGFwZShUdkl0ZW1Qcm9wcykpLFxufTtcblxuVHJlZVZpZXdJdGVtLnByb3BUeXBlcyA9IFR2SXRlbVByb3BzO1xuXG4vKipcbiAqIEEgdHJlZSBvZiBuZXN0ZWQgaXRlbXMuXG4gKlxuICogOkNTUzpcbiAqXG4gKiAgICAgYGBkYXp6bGVyLWV4dHJhLXRyZWUtdmlld2BgXG4gKiAgICAgLSBgYHRyZWUtaXRlbWBgXG4gKiAgICAgLSBgYHRyZWUtaXRlbS1sYWJlbGBgXG4gKiAgICAgLSBgYHRyZWUtc3ViLWl0ZW1zYGBcbiAqICAgICAtIGBgdHJlZS1jYXJldGBgXG4gKiAgICAgLSBgYHNlbGVjdGVkYGBcbiAqICAgICAtIGBgbGV2ZWwte259YGBcbiAqXG4gKiA6ZXhhbXBsZTpcbiAqXG4gKiAuLiBsaXRlcmFsaW5jbHVkZTo6IC4uLy4uL3Rlc3RzL2NvbXBvbmVudHMvcGFnZXMvdHJlZXZpZXcucHlcbiAqL1xuY29uc3QgVHJlZVZpZXcgPSAoe1xuICAgIGNsYXNzX25hbWUsXG4gICAgc3R5bGUsXG4gICAgaWRlbnRpdHksXG4gICAgdXBkYXRlQXNwZWN0cyxcbiAgICBpdGVtcyxcbiAgICBzZWxlY3RlZCxcbiAgICBleHBhbmRlZF9pdGVtcyxcbiAgICBuZXN0X2ljb25fZXhwYW5kZWQsXG4gICAgbmVzdF9pY29uX2NvbGxhcHNlZCxcbn0pID0+IHtcbiAgICBjb25zdCBvbkNsaWNrID0gKGUsIGlkZW50aWZpZXIsIGV4cGFuZCkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge307XG4gICAgICAgIGlmIChzZWxlY3RlZCAmJiBpbmNsdWRlcyhpZGVudGlmaWVyLCBzZWxlY3RlZCkpIHtcbiAgICAgICAgICAgIGxldCBsYXN0ID0gc3BsaXQoJy4nLCBpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGxhc3QgPSBzbGljZSgwLCBsYXN0Lmxlbmd0aCAtIDEsIGxhc3QpO1xuICAgICAgICAgICAgaWYgKGxhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGF5bG9hZC5zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcGF5bG9hZC5zZWxlY3RlZCA9IGxhc3RbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBheWxvYWQuc2VsZWN0ZWQgPSBqb2luKCcuJywgbGFzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXlsb2FkLnNlbGVjdGVkID0gaWRlbnRpZmllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHBhbmQpIHtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlcyhpZGVudGlmaWVyLCBleHBhbmRlZF9pdGVtcykpIHtcbiAgICAgICAgICAgICAgICBwYXlsb2FkLmV4cGFuZGVkX2l0ZW1zID0gd2l0aG91dChbaWRlbnRpZmllcl0sIGV4cGFuZGVkX2l0ZW1zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF5bG9hZC5leHBhbmRlZF9pdGVtcyA9IGNvbmNhdChleHBhbmRlZF9pdGVtcywgW2lkZW50aWZpZXJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVBc3BlY3RzKHBheWxvYWQpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzX25hbWV9IHN0eWxlPXtzdHlsZX0gaWQ9e2lkZW50aXR5fT5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgbmVzdF9pY29uX2V4cGFuZGVkLFxuICAgICAgICAgICAgICAgICAgICBuZXN0X2ljb25fY29sbGFwc2VkLFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZF9pdGVtcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblRyZWVWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBuZXN0X2ljb25fY29sbGFwc2VkOiAn4o+1JyxcbiAgICBuZXN0X2ljb25fZXhwYW5kZWQ6ICfij7cnLFxuICAgIGV4cGFuZGVkX2l0ZW1zOiBbXSxcbn07XG5cblRyZWVWaWV3LnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBpdGVtcyB0byByZW5kZXIgcmVjdXJzaXZlbHkuXG4gICAgICovXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuc2hhcGUoVHZJdGVtUHJvcHMpXSlcbiAgICApLmlzUmVxdWlyZWQsXG4gICAgLyoqXG4gICAgICogTGFzdCBjbGlja2VkIHBhdGggaWRlbnRpZmllciBqb2luZWQgYnkgZG90LlxuICAgICAqL1xuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIElkZW50aWZpZXJzIHRoYXQgaGF2ZSBzdWIgaXRlbXMgYW5kIGFyZSBvcGVuLlxuICAgICAqIFJFQURPTkxZLlxuICAgICAqL1xuICAgIGV4cGFuZGVkX2l0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICogSWNvbiB0byBzaG93IHdoZW4gc3ViIGl0ZW1zIGFyZSBoaWRkZW4uXG4gICAgICovXG4gICAgbmVzdF9pY29uX2NvbGxhcHNlZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBJY29uIHRvIHNob3cgd2hlbiBzdWIgaXRlbXMgYXJlIHNob3duLlxuICAgICAqL1xuICAgIG5lc3RfaWNvbl9leHBhbmRlZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIGNsYXNzX25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaWRlbnRpdHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdXBkYXRlQXNwZWN0czogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmVlVmlldztcbiIsImltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IE5vdGljZSBmcm9tICcuL2NvbXBvbmVudHMvTm90aWNlJztcbmltcG9ydCBQYWdlciBmcm9tICcuL2NvbXBvbmVudHMvUGFnZXInO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0IFN0aWNreSBmcm9tICcuL2NvbXBvbmVudHMvU3RpY2t5JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi9jb21wb25lbnRzL0RyYXdlcic7XG5pbXBvcnQgUG9wVXAgZnJvbSAnLi9jb21wb25lbnRzL1BvcFVwJztcbmltcG9ydCBUcmVlVmlldyBmcm9tICcuL2NvbXBvbmVudHMvVHJlZVZpZXcnO1xuXG5leHBvcnQge05vdGljZSwgUGFnZXIsIFNwaW5uZXIsIFN0aWNreSwgRHJhd2VyLCBQb3BVcCwgVHJlZVZpZXd9O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sInNvdXJjZVJvb3QiOiIifQ==
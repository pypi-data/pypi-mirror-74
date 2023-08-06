(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["dazzler_renderer"] = factory(require("react"), require("react-dom"));
	else
		root["dazzler_renderer"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
/******/ 		"renderer": 0
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
/******/ 	deferredModules.push([1,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/renderer/js/components/Renderer.jsx":
/*!*************************************************!*\
  !*** ./src/renderer/js/components/Renderer.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Updater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Updater */ "./src/renderer/js/components/Updater.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Renderer = function Renderer(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      reloadKey = _useState2[0],
      setReloadKey = _useState2[1]; // FIXME find where this is used and refactor/remove


  window.dazzler_base_url = props.baseUrl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dazzler-renderer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Updater__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    key: "upd-".concat(reloadKey),
    hotReload: function hotReload() {
      return setReloadKey(reloadKey + 1);
    }
  })));
};

Renderer.propTypes = {
  baseUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  ping: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  ping_interval: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  retries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Renderer);

/***/ }),

/***/ "./src/renderer/js/components/Updater.jsx":
/*!************************************************!*\
  !*** ./src/renderer/js/components/Updater.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Updater; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requests */ "./src/renderer/js/requests.js");
/* harmony import */ var _hydrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hydrator */ "./src/renderer/js/hydrator.js");
/* harmony import */ var _requirements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../requirements */ "./src/renderer/js/requirements.js");
/* harmony import */ var commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! commons */ "./src/commons/js/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Updater =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Updater, _React$Component);

  function Updater(props) {
    var _this;

    _classCallCheck(this, Updater);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Updater).call(this, props));
    _this.state = {
      layout: false,
      ready: false,
      page: null,
      bindings: {},
      packages: [],
      requirements: [],
      reloading: false,
      needRefresh: false
    }; // The api url for the page is the same but a post.
    // Fetch bindings, packages & requirements

    _this.pageApi = Object(_requests__WEBPACK_IMPORTED_MODULE_2__["apiRequest"])(window.location.href); // All components get connected.

    _this.boundComponents = {};
    _this.ws = null;
    _this.updateAspects = _this.updateAspects.bind(_assertThisInitialized(_this));
    _this.connect = _this.connect.bind(_assertThisInitialized(_this));
    _this.disconnect = _this.disconnect.bind(_assertThisInitialized(_this));
    _this.onMessage = _this.onMessage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Updater, [{
    key: "updateAspects",
    value: function updateAspects(identity, aspects) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var aspectKeys = Object(ramda__WEBPACK_IMPORTED_MODULE_6__["keys"])(aspects);
        var bindings = aspectKeys.map(function (key) {
          return _objectSpread({}, _this2.state.bindings["".concat(key, "@").concat(identity)], {
            value: aspects[key]
          });
        }).filter(function (e) {
          return e.trigger;
        });

        _this2.state.rebindings.forEach(function (binding) {
          if (binding.trigger.identity.test(identity)) {
            bindings = Object(ramda__WEBPACK_IMPORTED_MODULE_6__["concat"])(bindings, aspectKeys.filter(function (k) {
              return binding.trigger.aspect.test(k);
            }).map(function (k) {
              return _objectSpread({}, binding, {
                value: aspects[k],
                trigger: _objectSpread({}, binding.trigger, {
                  identity: identity,
                  aspect: k
                })
              });
            }));
            bindings.push();
          }
        });

        if (!bindings) {
          return resolve(0);
        }

        bindings.forEach(function (binding) {
          return _this2.sendBinding(binding, binding.value);
        });
        resolve(bindings.length);
      });
    }
  }, {
    key: "connect",
    value: function connect(identity, setAspects, getAspect, matchAspects) {
      this.boundComponents[identity] = {
        setAspects: setAspects,
        getAspect: getAspect,
        matchAspects: matchAspects
      };
    }
  }, {
    key: "disconnect",
    value: function disconnect(identity) {
      delete this.boundComponents[identity];
    }
  }, {
    key: "onMessage",
    value: function onMessage(response) {
      var _this3 = this;

      var data = JSON.parse(response.data);
      var identity = data.identity,
          kind = data.kind,
          payload = data.payload,
          storage = data.storage,
          request_id = data.request_id;
      var store;

      if (storage === 'session') {
        store = window.sessionStorage;
      } else {
        store = window.localStorage;
      }

      switch (kind) {
        case 'set-aspect':
          var setAspects = function setAspects(component) {
            return component.setAspects(Object(_hydrator__WEBPACK_IMPORTED_MODULE_3__["hydrateProps"])(payload, _this3.updateAspects, _this3.connect, _this3.disconnect)).then(function () {
              return _this3.updateAspects(identity, payload);
            });
          };

          if (data.regex) {
            var pattern = new RegExp(data.identity);
            Object(ramda__WEBPACK_IMPORTED_MODULE_6__["keys"])(this.boundComponents).filter(function (k) {
              return pattern.test(k);
            }).map(function (k) {
              return _this3.boundComponents[k];
            }).forEach(setAspects);
          } else {
            setAspects(this.boundComponents[identity]);
          }

          break;

        case 'get-aspect':
          var aspect = data.aspect;
          var wanted = this.boundComponents[identity];

          if (!wanted) {
            this.ws.send(JSON.stringify({
              kind: kind,
              identity: identity,
              aspect: aspect,
              request_id: request_id,
              error: "Aspect not found ".concat(identity, ".").concat(aspect)
            }));
            return;
          }

          var value = wanted.getAspect(aspect);
          this.ws.send(JSON.stringify({
            kind: kind,
            identity: identity,
            aspect: aspect,
            value: Object(_hydrator__WEBPACK_IMPORTED_MODULE_3__["prepareProp"])(value),
            request_id: request_id
          }));
          break;

        case 'set-storage':
          store.setItem(identity, JSON.stringify(payload));
          break;

        case 'get-storage':
          this.ws.send(JSON.stringify({
            kind: kind,
            identity: identity,
            request_id: request_id,
            value: JSON.parse(store.getItem(identity))
          }));
          break;

        case 'reload':
          var filenames = data.filenames,
              hot = data.hot,
              refresh = data.refresh,
              deleted = data.deleted;

          if (refresh) {
            this.ws.close();
            return this.setState({
              reloading: true,
              needRefresh: true
            });
          }

          if (hot) {
            // The ws connection will close, when it
            // reconnect it will do a hard reload of the page api.
            return this.setState({
              reloading: true
            });
          }

          filenames.forEach(_requirements__WEBPACK_IMPORTED_MODULE_4__["loadRequirement"]);
          deleted.forEach(function (r) {
            return Object(commons__WEBPACK_IMPORTED_MODULE_5__["disableCss"])(r.url);
          });
          break;

        case 'ping':
          // Just do nothing.
          break;
      }
    }
  }, {
    key: "sendBinding",
    value: function sendBinding(binding, value) {
      var _this4 = this;

      // Collect all values and send a binding payload
      var trigger = _objectSpread({}, binding.trigger, {
        value: Object(_hydrator__WEBPACK_IMPORTED_MODULE_3__["prepareProp"])(value)
      });

      var states = binding.states.reduce(function (acc, state) {
        if (state.regex) {
          var identityPattern = new RegExp(state.identity);
          var aspectPattern = new RegExp(state.aspect);
          return Object(ramda__WEBPACK_IMPORTED_MODULE_6__["concat"])(acc, Object(ramda__WEBPACK_IMPORTED_MODULE_6__["flatten"])(Object(ramda__WEBPACK_IMPORTED_MODULE_6__["keys"])(_this4.boundComponents).map(function (k) {
            var values = [];

            if (identityPattern.test(k)) {
              values = _this4.boundComponents[k].matchAspects(aspectPattern).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    name = _ref2[0],
                    val = _ref2[1];

                return _objectSpread({}, state, {
                  identity: k,
                  aspect: name,
                  value: Object(_hydrator__WEBPACK_IMPORTED_MODULE_3__["prepareProp"])(val)
                });
              });
            }

            return values;
          })));
        }

        acc.push(_objectSpread({}, state, {
          value: _this4.boundComponents[state.identity] && Object(_hydrator__WEBPACK_IMPORTED_MODULE_3__["prepareProp"])(_this4.boundComponents[state.identity].getAspect(state.aspect))
        }));
        return acc;
      }, []);
      var payload = {
        trigger: trigger,
        states: states,
        kind: 'binding',
        page: this.state.page,
        key: binding.key
      };
      this.ws.send(JSON.stringify(payload));
    }
  }, {
    key: "_connectWS",
    value: function _connectWS() {
      var _this5 = this;

      // Setup websocket for updates
      var tries = 0;
      var hardClose = false;

      var connexion = function connexion() {
        var url = "ws".concat(window.location.href.startsWith('https') ? 's' : '', "://").concat(_this5.props.baseUrl && _this5.props.baseUrl || window.location.host, "/").concat(_this5.state.page, "/ws");
        _this5.ws = new WebSocket(url);

        _this5.ws.addEventListener('message', _this5.onMessage);

        _this5.ws.onopen = function () {
          if (_this5.state.reloading) {
            hardClose = true;

            _this5.ws.close();

            if (_this5.state.needRefresh) {
              window.location.reload();
            } else {
              _this5.props.hotReload();
            }
          } else {
            _this5.setState({
              ready: true
            });

            tries = 0;
          }
        };

        _this5.ws.onclose = function () {
          var reconnect = function reconnect() {
            tries++;
            connexion();
          };

          if (!hardClose && tries < _this5.props.retries) {
            setTimeout(reconnect, 1000);
          }
        };
      };

      connexion();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this6 = this;

      this.pageApi('', {
        method: 'POST'
      }).then(function (response) {
        var toRegex = function toRegex(x) {
          return new RegExp(x);
        };

        _this6.setState({
          page: response.page,
          layout: response.layout,
          bindings: Object(ramda__WEBPACK_IMPORTED_MODULE_6__["pickBy"])(function (b) {
            return !b.regex;
          }, response.bindings),
          // Regex bindings triggers
          rebindings: Object(ramda__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            var binding = response.bindings[x];
            binding.trigger = Object(ramda__WEBPACK_IMPORTED_MODULE_6__["evolve"])({
              identity: toRegex,
              aspect: toRegex
            }, binding.trigger);
            return binding;
          }, Object(ramda__WEBPACK_IMPORTED_MODULE_6__["keys"])(Object(ramda__WEBPACK_IMPORTED_MODULE_6__["pickBy"])(function (b) {
            return b.regex;
          }, response.bindings))),
          packages: response.packages,
          requirements: response.requirements
        }, function () {
          return Object(_requirements__WEBPACK_IMPORTED_MODULE_4__["loadRequirements"])(response.requirements, response.packages).then(function () {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_6__["keys"])(response.bindings).length || response.reload) {
              _this6._connectWS();
            } else {
              _this6.setState({
                ready: true
              });
            }
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          layout = _this$state.layout,
          ready = _this$state.ready,
          reloading = _this$state.reloading;

      if (!ready) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dazzler-loading-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dazzler-spin"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dazzler-loading"
        }, "Loading..."));
      }

      if (reloading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dazzler-loading-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dazzler-spin reload"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dazzler-loading"
        }, "Reloading..."));
      }

      if (!Object(_hydrator__WEBPACK_IMPORTED_MODULE_3__["isComponent"])(layout)) {
        throw new Error("Layout is not a component: ".concat(layout));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dazzler-rendered"
      }, Object(_hydrator__WEBPACK_IMPORTED_MODULE_3__["hydrateComponent"])(layout.name, layout["package"], layout.identity, Object(_hydrator__WEBPACK_IMPORTED_MODULE_3__["hydrateProps"])(layout.aspects, this.updateAspects, this.connect, this.disconnect), this.updateAspects, this.connect, this.disconnect));
    }
  }]);

  return Updater;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Updater.defaultProps = {};
Updater.propTypes = {
  baseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  ping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  ping_interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  retries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  hotReload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/renderer/js/components/Wrapper.jsx":
/*!************************************************!*\
  !*** ./src/renderer/js/components/Wrapper.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! commons */ "./src/commons/js/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Wraps components for aspects updating.
 */

var Wrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  function Wrapper(props) {
    var _this;

    _classCallCheck(this, Wrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wrapper).call(this, props));
    _this.state = {
      aspects: props.aspects || {},
      ready: false,
      initial: false
    };
    _this.setAspects = _this.setAspects.bind(_assertThisInitialized(_this));
    _this.getAspect = _this.getAspect.bind(_assertThisInitialized(_this));
    _this.updateAspects = _this.updateAspects.bind(_assertThisInitialized(_this));
    _this.matchAspects = _this.matchAspects.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Wrapper, [{
    key: "updateAspects",
    value: function updateAspects(aspects) {
      var _this2 = this;

      return this.setAspects(aspects).then(function () {
        return _this2.props.updateAspects(_this2.props.identity, aspects);
      });
    }
  }, {
    key: "setAspects",
    value: function setAspects(aspects) {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.setState({
          aspects: _objectSpread({}, _this3.state.aspects, aspects)
        }, resolve);
      });
    }
  }, {
    key: "getAspect",
    value: function getAspect(aspect) {
      return this.state.aspects[aspect];
    }
  }, {
    key: "matchAspects",
    value: function matchAspects(pattern) {
      var _this4 = this;

      return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["keys"])(this.state.aspects).filter(function (k) {
        return pattern.test(k);
      }).map(function (k) {
        return [k, _this4.state.aspects[k]];
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      // Only update the component when mounted.
      // Otherwise gets a race condition with willUnmount
      this.props.connect(this.props.identity, this.setAspects, this.getAspect, this.matchAspects);

      if (!this.state.initial) {
        this.updateAspects(this.state.aspects).then(function () {
          return _this5.setState({
            ready: true,
            initial: true
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.disconnect(this.props.identity);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          component = _this$props.component,
          component_name = _this$props.component_name,
          package_name = _this$props.package_name;
      var _this$state = this.state,
          aspects = _this$state.aspects,
          ready = _this$state.ready;
      if (!ready) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(component, _objectSpread({}, aspects, {
        updateAspects: this.updateAspects,
        identity: this.props.identity,
        class_name: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["join"])(' ', Object(ramda__WEBPACK_IMPORTED_MODULE_2__["concat"])(["".concat(package_name.replace('_', '-').toLowerCase(), "-").concat(Object(commons__WEBPACK_IMPORTED_MODULE_3__["camelToSpinal"])(component_name))], aspects.class_name ? aspects.class_name.split(' ') : []))
      }));
    }
  }]);

  return Wrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Wrapper.propTypes = {
  identity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  updateAspects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  connect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  component_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  package_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  disconnect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./src/renderer/js/hydrator.js":
/*!*************************************!*\
  !*** ./src/renderer/js/hydrator.js ***!
  \*************************************/
/*! exports provided: isComponent, hydrateProps, hydrateComponent, prepareProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateProps", function() { return hydrateProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateComponent", function() { return hydrateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareProp", function() { return prepareProp; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Wrapper */ "./src/renderer/js/components/Wrapper.jsx");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function isComponent(c) {
  return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["type"])(c) === 'Object' && c.hasOwnProperty('package') && c.hasOwnProperty('aspects') && c.hasOwnProperty('name') && c.hasOwnProperty('identity');
}
function hydrateProps(props, updateAspects, connect, disconnect) {
  var replace = {};
  Object.entries(props).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["type"])(v) === 'Array') {
      replace[k] = v.map(function (c) {
        if (!isComponent(c)) {
          // Mixing components and primitives
          if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["type"])(c) === 'Object') {
            // Not a component but maybe it contains some ?
            return hydrateProps(c, updateAspects, connect, disconnect);
          }

          return c;
        }

        var newProps = hydrateProps(c.aspects, updateAspects, connect, disconnect);

        if (!newProps.key) {
          newProps.key = c.identity;
        }

        return hydrateComponent(c.name, c["package"], c.identity, newProps, updateAspects, connect, disconnect);
      });
    } else if (isComponent(v)) {
      var newProps = hydrateProps(v.aspects, updateAspects, connect, disconnect);
      replace[k] = hydrateComponent(v.name, v["package"], v.identity, newProps, updateAspects, connect, disconnect);
    } else if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["type"])(v) === 'Object') {
      replace[k] = hydrateProps(v, updateAspects, connect, disconnect);
    }
  });
  return _objectSpread({}, props, replace);
}
function hydrateComponent(name, package_name, identity, props, updateAspects, connect, disconnect) {
  var pack = window[package_name];
  var element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pack[name], props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    identity: identity,
    updateAspects: updateAspects,
    component: element,
    connect: connect,
    package_name: package_name,
    component_name: name,
    aspects: props,
    disconnect: disconnect,
    key: "wrapper-".concat(identity)
  });
}
function prepareProp(prop) {
  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(prop)) {
    return {
      identity: prop.props.identity,
      aspects: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["map"])(prepareProp, Object(ramda__WEBPACK_IMPORTED_MODULE_0__["omit"])(['identity', 'updateAspects', '_name', '_package', 'aspects', 'key'], prop.props.aspects)),
      name: prop.props.component_name,
      "package": prop.props.package_name
    };
  }

  if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["type"])(prop) === 'Array') {
    return prop.map(prepareProp);
  }

  if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["type"])(prop) === 'Object') {
    return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["map"])(prepareProp, prop);
  }

  return prop;
}

/***/ }),

/***/ "./src/renderer/js/index.js":
/*!**********************************!*\
  !*** ./src/renderer/js/index.js ***!
  \**********************************/
/*! exports provided: Renderer, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Renderer */ "./src/renderer/js/components/Renderer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _components_Renderer__WEBPACK_IMPORTED_MODULE_2__["default"]; });





function render(_ref, element) {
  var baseUrl = _ref.baseUrl,
      ping = _ref.ping,
      ping_interval = _ref.ping_interval,
      retries = _ref.retries;
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Renderer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    baseUrl: baseUrl,
    ping: ping,
    ping_interval: ping_interval,
    retries: retries
  }), element);
}



/***/ }),

/***/ "./src/renderer/js/requests.js":
/*!*************************************!*\
  !*** ./src/renderer/js/requests.js ***!
  \*************************************/
/*! exports provided: JSONHEADERS, xhrRequest, apiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONHEADERS", function() { return JSONHEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhrRequest", function() { return xhrRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRequest", function() { return apiRequest; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-magic-numbers */
var jsonPattern = /json/i;
/**
 * @typedef {Object} XhrOptions
 * @property {string} [method='GET']
 * @property {Object} [headers={}]
 * @property {string|Blob|ArrayBuffer|object|Array} [payload='']
 */

/**
 * @type {XhrOptions}
 */

var defaultXhrOptions = {
  method: 'GET',
  headers: {},
  payload: '',
  json: true
};
var JSONHEADERS = {
  'Content-Type': 'application/json'
};
/**
 * Xhr promise wrap.
 *
 * Fetch can't do put request, so xhr still useful.
 *
 * Auto parse json responses.
 * Cancellation: xhr.abort
 * @param {string} url
 * @param {XhrOptions} [options]
 * @return {Promise}
 */

function xhrRequest(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultXhrOptions;
  return new Promise(function (resolve, reject) {
    var _defaultXhrOptions$op = _objectSpread({}, defaultXhrOptions, options),
        method = _defaultXhrOptions$op.method,
        headers = _defaultXhrOptions$op.headers,
        payload = _defaultXhrOptions$op.payload,
        json = _defaultXhrOptions$op.json;

    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    var head = json ? _objectSpread({}, JSONHEADERS, headers) : headers;
    Object.keys(head).forEach(function (k) {
      return xhr.setRequestHeader(k, head[k]);
    });

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var responseValue = xhr.response;

          if (jsonPattern.test(xhr.getResponseHeader('Content-Type'))) {
            responseValue = JSON.parse(xhr.responseText);
          }

          resolve(responseValue);
        } else {
          reject({
            error: 'RequestError',
            message: "XHR ".concat(url, " FAILED - STATUS: ").concat(xhr.status, " MESSAGE: ").concat(xhr.statusText),
            status: xhr.status,
            xhr: xhr
          });
        }
      }
    };

    xhr.onerror = function (err) {
      return reject(err);
    };

    xhr.send(json ? JSON.stringify(payload) : payload);
  });
}
/**
 * Auto get headers and refresh/retry.
 *
 * @param {function} getHeaders
 * @param {function} refresh
 * @param {string} baseUrl
 */

function apiRequest() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function () {
    var url = baseUrl + arguments[0];
    var options = arguments[1] || {};
    options.headers = _objectSpread({}, options.headers);
    return new Promise(function (resolve) {
      xhrRequest(url, options).then(resolve);
    });
  };
}

/***/ }),

/***/ "./src/renderer/js/requirements.js":
/*!*****************************************!*\
  !*** ./src/renderer/js/requirements.js ***!
  \*****************************************/
/*! exports provided: loadRequirement, loadRequirements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirement", function() { return loadRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return loadRequirements; });
/* harmony import */ var commons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! commons */ "./src/commons/js/index.js");

function loadRequirement(requirement) {
  return new Promise(function (resolve, reject) {
    var url = requirement.url,
        kind = requirement.kind,
        meta = requirement.meta;
    var method;

    if (kind === 'js') {
      method = commons__WEBPACK_IMPORTED_MODULE_0__["loadScript"];
    } else if (kind === 'css') {
      method = commons__WEBPACK_IMPORTED_MODULE_0__["loadCss"];
    } else if (kind === 'map') {
      return resolve();
    } else {
      return reject({
        error: "Invalid requirement kind: ".concat(kind)
      });
    }

    return method(url, meta).then(resolve)["catch"](reject);
  });
}
function loadRequirements(requirements, packages) {
  return new Promise(function (resolve, reject) {
    var loadings = []; // Load packages first.

    Object.keys(packages).forEach(function (pack_name) {
      var pack = packages[pack_name];
      loadings = loadings.concat(pack.requirements.map(loadRequirement));
    }); // Then load requirements so they can use packages
    // and override css.

    Promise.all(loadings).then(function () {
      var i = 0; // Load in order.

      var handler = function handler() {
        if (i < requirements.length) {
          loadRequirement(requirements[i]).then(function () {
            i++;
            handler();
          });
        } else {
          resolve();
        }
      };

      handler();
    })["catch"](reject);
  });
}

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./src/renderer/js/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/t4rk/projects/experiments/dazzler/src/renderer/js/index.js */"./src/renderer/js/index.js");


/***/ }),

/***/ "react":
/*!****************************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","umd":"react","root":"React"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!***********************************************************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom","umd":"react-dom","root":"ReactDOM"} ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/Iiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9qcy9jb21wb25lbnRzL1JlbmRlcmVyLmpzeD8iLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2pzL2NvbXBvbmVudHMvVXBkYXRlci5qc3g/Iiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9qcy9jb21wb25lbnRzL1dyYXBwZXIuanN4PyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvanMvaHlkcmF0b3IuanM/Iiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9qcy9pbmRleC5qcz8iLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2pzL3JlcXVlc3RzLmpzPyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvanMvcmVxdWlyZW1lbnRzLmpzPyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJ1bWRcIjpcInJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifT8iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwiLFwidW1kXCI6XCJyZWFjdC1kb21cIixcInJvb3RcIjpcIlJlYWN0RE9NXCJ9PyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInByb3BzIiwidXNlU3RhdGUiLCJyZWxvYWRLZXkiLCJzZXRSZWxvYWRLZXkiLCJ3aW5kb3ciLCJkYXp6bGVyX2Jhc2VfdXJsIiwiYmFzZVVybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwaW5nIiwiYm9vbCIsInBpbmdfaW50ZXJ2YWwiLCJudW1iZXIiLCJyZXRyaWVzIiwiVXBkYXRlciIsInN0YXRlIiwibGF5b3V0IiwicmVhZHkiLCJwYWdlIiwiYmluZGluZ3MiLCJwYWNrYWdlcyIsInJlcXVpcmVtZW50cyIsInJlbG9hZGluZyIsIm5lZWRSZWZyZXNoIiwicGFnZUFwaSIsImFwaVJlcXVlc3QiLCJsb2NhdGlvbiIsImhyZWYiLCJib3VuZENvbXBvbmVudHMiLCJ3cyIsInVwZGF0ZUFzcGVjdHMiLCJiaW5kIiwiY29ubmVjdCIsImRpc2Nvbm5lY3QiLCJvbk1lc3NhZ2UiLCJpZGVudGl0eSIsImFzcGVjdHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFzcGVjdEtleXMiLCJrZXlzIiwibWFwIiwia2V5IiwidmFsdWUiLCJmaWx0ZXIiLCJlIiwidHJpZ2dlciIsInJlYmluZGluZ3MiLCJmb3JFYWNoIiwiYmluZGluZyIsInRlc3QiLCJjb25jYXQiLCJrIiwiYXNwZWN0IiwicHVzaCIsInNlbmRCaW5kaW5nIiwibGVuZ3RoIiwic2V0QXNwZWN0cyIsImdldEFzcGVjdCIsIm1hdGNoQXNwZWN0cyIsInJlc3BvbnNlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImtpbmQiLCJwYXlsb2FkIiwic3RvcmFnZSIsInJlcXVlc3RfaWQiLCJzdG9yZSIsInNlc3Npb25TdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiY29tcG9uZW50IiwiaHlkcmF0ZVByb3BzIiwidGhlbiIsInJlZ2V4IiwicGF0dGVybiIsIlJlZ0V4cCIsIndhbnRlZCIsInNlbmQiLCJzdHJpbmdpZnkiLCJlcnJvciIsInByZXBhcmVQcm9wIiwic2V0SXRlbSIsImdldEl0ZW0iLCJmaWxlbmFtZXMiLCJob3QiLCJyZWZyZXNoIiwiZGVsZXRlZCIsImNsb3NlIiwic2V0U3RhdGUiLCJsb2FkUmVxdWlyZW1lbnQiLCJyIiwiZGlzYWJsZUNzcyIsInVybCIsInN0YXRlcyIsInJlZHVjZSIsImFjYyIsImlkZW50aXR5UGF0dGVybiIsImFzcGVjdFBhdHRlcm4iLCJmbGF0dGVuIiwidmFsdWVzIiwibmFtZSIsInZhbCIsInRyaWVzIiwiaGFyZENsb3NlIiwiY29ubmV4aW9uIiwic3RhcnRzV2l0aCIsImhvc3QiLCJXZWJTb2NrZXQiLCJhZGRFdmVudExpc3RlbmVyIiwib25vcGVuIiwicmVsb2FkIiwiaG90UmVsb2FkIiwib25jbG9zZSIsInJlY29ubmVjdCIsInNldFRpbWVvdXQiLCJtZXRob2QiLCJ0b1JlZ2V4IiwieCIsInBpY2tCeSIsImIiLCJldm9sdmUiLCJsb2FkUmVxdWlyZW1lbnRzIiwiX2Nvbm5lY3RXUyIsImlzQ29tcG9uZW50IiwiRXJyb3IiLCJoeWRyYXRlQ29tcG9uZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJmdW5jIiwiV3JhcHBlciIsImluaXRpYWwiLCJjb21wb25lbnRfbmFtZSIsInBhY2thZ2VfbmFtZSIsImNsb25lRWxlbWVudCIsImNsYXNzX25hbWUiLCJqb2luIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxUb1NwaW5hbCIsInNwbGl0Iiwibm9kZSIsImMiLCJ0eXBlIiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJlbnRyaWVzIiwidiIsIm5ld1Byb3BzIiwicGFjayIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicHJvcCIsImlzVmFsaWRFbGVtZW50Iiwib21pdCIsInJlbmRlciIsIlJlYWN0RE9NIiwianNvblBhdHRlcm4iLCJkZWZhdWx0WGhyT3B0aW9ucyIsImhlYWRlcnMiLCJqc29uIiwiSlNPTkhFQURFUlMiLCJ4aHJSZXF1ZXN0Iiwib3B0aW9ucyIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsImhlYWQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJyZXNwb25zZVZhbHVlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJyZXNwb25zZVRleHQiLCJtZXNzYWdlIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJlcnIiLCJhcmd1bWVudHMiLCJyZXF1aXJlbWVudCIsIm1ldGEiLCJsb2FkU2NyaXB0IiwibG9hZENzcyIsImxvYWRpbmdzIiwicGFja19uYW1lIiwiYWxsIiwiaSIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFB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Ozs7Ozs7Ozs7OztBQ2pERCxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RCIsImZpbGUiOiJkYXp6bGVyX3JlbmRlcmVyXzUzMGExNzQyZmI0ZDA1NmJmODQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGF6emxlcl9yZW5kZXJlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYXp6bGVyX3JlbmRlcmVyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXykge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJyZW5kZXJlclwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wZGF6emxlcl9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucGRhenpsZXJfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzEsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVcGRhdGVyIGZyb20gJy4vVXBkYXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSZW5kZXJlciA9IHByb3BzID0+IHtcbiAgICBjb25zdCBbcmVsb2FkS2V5LCBzZXRSZWxvYWRLZXldID0gdXNlU3RhdGUoMSk7XG5cbiAgICAvLyBGSVhNRSBmaW5kIHdoZXJlIHRoaXMgaXMgdXNlZCBhbmQgcmVmYWN0b3IvcmVtb3ZlXG4gICAgd2luZG93LmRhenpsZXJfYmFzZV91cmwgPSBwcm9wcy5iYXNlVXJsO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF6emxlci1yZW5kZXJlclwiPlxuICAgICAgICAgICAgPFVwZGF0ZXJcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAga2V5PXtgdXBkLSR7cmVsb2FkS2V5fWB9XG4gICAgICAgICAgICAgICAgaG90UmVsb2FkPXsoKSA9PiBzZXRSZWxvYWRLZXkocmVsb2FkS2V5ICsgMSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuUmVuZGVyZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwaW5nX2ludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldHJpZXM6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHthcGlSZXF1ZXN0fSBmcm9tICcuLi9yZXF1ZXN0cyc7XG5pbXBvcnQge1xuICAgIGh5ZHJhdGVDb21wb25lbnQsXG4gICAgaHlkcmF0ZVByb3BzLFxuICAgIGlzQ29tcG9uZW50LFxuICAgIHByZXBhcmVQcm9wLFxufSBmcm9tICcuLi9oeWRyYXRvcic7XG5pbXBvcnQge2xvYWRSZXF1aXJlbWVudCwgbG9hZFJlcXVpcmVtZW50c30gZnJvbSAnLi4vcmVxdWlyZW1lbnRzJztcbmltcG9ydCB7ZGlzYWJsZUNzc30gZnJvbSAnY29tbW9ucyc7XG5pbXBvcnQge3BpY2tCeSwga2V5cywgbWFwLCBldm9sdmUsIGNvbmNhdCwgZmxhdHRlbn0gZnJvbSAncmFtZGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsYXlvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVhZHk6IGZhbHNlLFxuICAgICAgICAgICAgcGFnZTogbnVsbCxcbiAgICAgICAgICAgIGJpbmRpbmdzOiB7fSxcbiAgICAgICAgICAgIHBhY2thZ2VzOiBbXSxcbiAgICAgICAgICAgIHJlcXVpcmVtZW50czogW10sXG4gICAgICAgICAgICByZWxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbmVlZFJlZnJlc2g6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICAvLyBUaGUgYXBpIHVybCBmb3IgdGhlIHBhZ2UgaXMgdGhlIHNhbWUgYnV0IGEgcG9zdC5cbiAgICAgICAgLy8gRmV0Y2ggYmluZGluZ3MsIHBhY2thZ2VzICYgcmVxdWlyZW1lbnRzXG4gICAgICAgIHRoaXMucGFnZUFwaSA9IGFwaVJlcXVlc3Qod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAvLyBBbGwgY29tcG9uZW50cyBnZXQgY29ubmVjdGVkLlxuICAgICAgICB0aGlzLmJvdW5kQ29tcG9uZW50cyA9IHt9O1xuICAgICAgICB0aGlzLndzID0gbnVsbDtcblxuICAgICAgICB0aGlzLnVwZGF0ZUFzcGVjdHMgPSB0aGlzLnVwZGF0ZUFzcGVjdHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ID0gdGhpcy5jb25uZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCA9IHRoaXMuZGlzY29ubmVjdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXNwZWN0cyhpZGVudGl0eSwgYXNwZWN0cykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3BlY3RLZXlzID0ga2V5cyhhc3BlY3RzKTtcbiAgICAgICAgICAgIGxldCBiaW5kaW5ncyA9IGFzcGVjdEtleXNcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmJpbmRpbmdzW2Ake2tleX1AJHtpZGVudGl0eX1gXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFzcGVjdHNba2V5XSxcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGUgPT4gZS50cmlnZ2VyKTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcudHJpZ2dlci5pZGVudGl0eS50ZXN0KGlkZW50aXR5KSkge1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5ncyA9IGNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNwZWN0S2V5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoayA9PiBiaW5kaW5nLnRyaWdnZXIuYXNwZWN0LnRlc3QoaykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhc3BlY3RzW2tdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5iaW5kaW5nLnRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzcGVjdDogayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZ3MucHVzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWJpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEJpbmRpbmcoYmluZGluZywgYmluZGluZy52YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXNvbHZlKGJpbmRpbmdzLmxlbmd0aCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbm5lY3QoaWRlbnRpdHksIHNldEFzcGVjdHMsIGdldEFzcGVjdCwgbWF0Y2hBc3BlY3RzKSB7XG4gICAgICAgIHRoaXMuYm91bmRDb21wb25lbnRzW2lkZW50aXR5XSA9IHtcbiAgICAgICAgICAgIHNldEFzcGVjdHMsXG4gICAgICAgICAgICBnZXRBc3BlY3QsXG4gICAgICAgICAgICBtYXRjaEFzcGVjdHMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdChpZGVudGl0eSkge1xuICAgICAgICBkZWxldGUgdGhpcy5ib3VuZENvbXBvbmVudHNbaWRlbnRpdHldO1xuICAgIH1cblxuICAgIG9uTWVzc2FnZShyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgY29uc3Qge2lkZW50aXR5LCBraW5kLCBwYXlsb2FkLCBzdG9yYWdlLCByZXF1ZXN0X2lkfSA9IGRhdGE7XG4gICAgICAgIGxldCBzdG9yZTtcbiAgICAgICAgaWYgKHN0b3JhZ2UgPT09ICdzZXNzaW9uJykge1xuICAgICAgICAgICAgc3RvcmUgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9yZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlICdzZXQtYXNwZWN0JzpcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRBc3BlY3RzID0gY29tcG9uZW50ID0+XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldEFzcGVjdHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHlkcmF0ZVByb3BzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFzcGVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy51cGRhdGVBc3BlY3RzKGlkZW50aXR5LCBwYXlsb2FkKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVnZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoZGF0YS5pZGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIGtleXModGhpcy5ib3VuZENvbXBvbmVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGsgPT4gcGF0dGVybi50ZXN0KGspKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrID0+IHRoaXMuYm91bmRDb21wb25lbnRzW2tdKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goc2V0QXNwZWN0cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXNwZWN0cyh0aGlzLmJvdW5kQ29tcG9uZW50c1tpZGVudGl0eV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dldC1hc3BlY3QnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHthc3BlY3R9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCB3YW50ZWQgPSB0aGlzLmJvdW5kQ29tcG9uZW50c1tpZGVudGl0eV07XG4gICAgICAgICAgICAgICAgaWYgKCF3YW50ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cy5zZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNwZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGBBc3BlY3Qgbm90IGZvdW5kICR7aWRlbnRpdHl9LiR7YXNwZWN0fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gd2FudGVkLmdldEFzcGVjdChhc3BlY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMud3Muc2VuZChcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNwZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByZXBhcmVQcm9wKHZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RfaWQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NldC1zdG9yYWdlJzpcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRJdGVtKGlkZW50aXR5LCBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnZXQtc3RvcmFnZSc6XG4gICAgICAgICAgICAgICAgdGhpcy53cy5zZW5kKFxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IEpTT04ucGFyc2Uoc3RvcmUuZ2V0SXRlbShpZGVudGl0eSkpLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHtmaWxlbmFtZXMsIGhvdCwgcmVmcmVzaCwgZGVsZXRlZH0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIGlmIChyZWZyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe3JlbG9hZGluZzogdHJ1ZSwgbmVlZFJlZnJlc2g6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGhvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgd3MgY29ubmVjdGlvbiB3aWxsIGNsb3NlLCB3aGVuIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY29ubmVjdCBpdCB3aWxsIGRvIGEgaGFyZCByZWxvYWQgb2YgdGhlIHBhZ2UgYXBpLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7cmVsb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbGVuYW1lcy5mb3JFYWNoKGxvYWRSZXF1aXJlbWVudCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlZC5mb3JFYWNoKHIgPT4gZGlzYWJsZUNzcyhyLnVybCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGluZyc6XG4gICAgICAgICAgICAgICAgLy8gSnVzdCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZEJpbmRpbmcoYmluZGluZywgdmFsdWUpIHtcbiAgICAgICAgLy8gQ29sbGVjdCBhbGwgdmFsdWVzIGFuZCBzZW5kIGEgYmluZGluZyBwYXlsb2FkXG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB7XG4gICAgICAgICAgICAuLi5iaW5kaW5nLnRyaWdnZXIsXG4gICAgICAgICAgICB2YWx1ZTogcHJlcGFyZVByb3AodmFsdWUpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdGF0ZXMgPSBiaW5kaW5nLnN0YXRlcy5yZWR1Y2UoKGFjYywgc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZWdleCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkZW50aXR5UGF0dGVybiA9IG5ldyBSZWdFeHAoc3RhdGUuaWRlbnRpdHkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzcGVjdFBhdHRlcm4gPSBuZXcgUmVnRXhwKHN0YXRlLmFzcGVjdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgYWNjLFxuICAgICAgICAgICAgICAgICAgICBmbGF0dGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cyh0aGlzLmJvdW5kQ29tcG9uZW50cykubWFwKGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWRlbnRpdHlQYXR0ZXJuLnRlc3QoaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gdGhpcy5ib3VuZENvbXBvbmVudHNba11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRjaEFzcGVjdHMoYXNwZWN0UGF0dGVybilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKFtuYW1lLCB2YWxdKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aXR5OiBrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzcGVjdDogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJlcGFyZVByb3AodmFsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm91bmRDb21wb25lbnRzW3N0YXRlLmlkZW50aXR5XSAmJlxuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlUHJvcChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm91bmRDb21wb25lbnRzW3N0YXRlLmlkZW50aXR5XS5nZXRBc3BlY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuYXNwZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIFtdKTtcblxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgICAgIHN0YXRlcyxcbiAgICAgICAgICAgIGtpbmQ6ICdiaW5kaW5nJyxcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSxcbiAgICAgICAgICAgIGtleTogYmluZGluZy5rZXksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMud3Muc2VuZChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG4gICAgfVxuXG4gICAgX2Nvbm5lY3RXUygpIHtcbiAgICAgICAgLy8gU2V0dXAgd2Vic29ja2V0IGZvciB1cGRhdGVzXG4gICAgICAgIGxldCB0cmllcyA9IDA7XG4gICAgICAgIGxldCBoYXJkQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY29ubmV4aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYHdzJHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKCdodHRwcycpID8gJ3MnIDogJydcbiAgICAgICAgICAgIH06Ly8keyh0aGlzLnByb3BzLmJhc2VVcmwgJiYgdGhpcy5wcm9wcy5iYXNlVXJsKSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0fS8ke3RoaXMuc3RhdGUucGFnZX0vd3NgO1xuICAgICAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgICAgIHRoaXMud3MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJlbG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBoYXJkQ2xvc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm5lZWRSZWZyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvdFJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVhZHk6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZXMgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLndzLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb25uZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cmllcysrO1xuICAgICAgICAgICAgICAgICAgICBjb25uZXhpb24oKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICghaGFyZENsb3NlICYmIHRyaWVzIDwgdGhpcy5wcm9wcy5yZXRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVjb25uZWN0LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25uZXhpb24oKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wYWdlQXBpKCcnLCB7bWV0aG9kOiAnUE9TVCd9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvUmVnZXggPSB4ID0+IG5ldyBSZWdFeHAoeCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogcmVzcG9uc2UucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiByZXNwb25zZS5sYXlvdXQsXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmdzOiBwaWNrQnkoYiA9PiAhYi5yZWdleCwgcmVzcG9uc2UuYmluZGluZ3MpLFxuICAgICAgICAgICAgICAgICAgICAvLyBSZWdleCBiaW5kaW5ncyB0cmlnZ2Vyc1xuICAgICAgICAgICAgICAgICAgICByZWJpbmRpbmdzOiBtYXAoeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kaW5nID0gcmVzcG9uc2UuYmluZGluZ3NbeF07XG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLnRyaWdnZXIgPSBldm9sdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGl0eTogdG9SZWdleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNwZWN0OiB0b1JlZ2V4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZy50cmlnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmc7XG4gICAgICAgICAgICAgICAgICAgIH0sIGtleXMocGlja0J5KGIgPT4gYi5yZWdleCwgcmVzcG9uc2UuYmluZGluZ3MpKSksXG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2VzOiByZXNwb25zZS5wYWNrYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzOiByZXNwb25zZS5yZXF1aXJlbWVudHMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICAgICAgICBsb2FkUmVxdWlyZW1lbnRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucGFja2FnZXNcbiAgICAgICAgICAgICAgICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzKHJlc3BvbnNlLmJpbmRpbmdzKS5sZW5ndGggfHwgcmVzcG9uc2UucmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdFdTKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlYWR5OiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtsYXlvdXQsIHJlYWR5LCByZWxvYWRpbmd9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKCFyZWFkeSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhenpsZXItbG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXp6bGVyLXNwaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhenpsZXItbG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhenpsZXItbG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXp6bGVyLXNwaW4gcmVsb2FkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXp6bGVyLWxvYWRpbmdcIj5SZWxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0NvbXBvbmVudChsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExheW91dCBpcyBub3QgYSBjb21wb25lbnQ6ICR7bGF5b3V0fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF6emxlci1yZW5kZXJlZFwiPlxuICAgICAgICAgICAgICAgIHtoeWRyYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0LnBhY2thZ2UsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dC5pZGVudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgaHlkcmF0ZVByb3BzKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0LmFzcGVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFzcGVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBc3BlY3RzLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3QsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVwZGF0ZXIuZGVmYXVsdFByb3BzID0ge307XG5cblVwZGF0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwaW5nX2ludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldHJpZXM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaG90UmVsb2FkOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y29uY2F0LCBqb2luLCBrZXlzfSBmcm9tICdyYW1kYSc7XG5pbXBvcnQge2NhbWVsVG9TcGluYWx9IGZyb20gJ2NvbW1vbnMnO1xuXG4vKipcbiAqIFdyYXBzIGNvbXBvbmVudHMgZm9yIGFzcGVjdHMgdXBkYXRpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFzcGVjdHM6IHByb3BzLmFzcGVjdHMgfHwge30sXG4gICAgICAgICAgICByZWFkeTogZmFsc2UsXG4gICAgICAgICAgICBpbml0aWFsOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRBc3BlY3RzID0gdGhpcy5zZXRBc3BlY3RzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0QXNwZWN0ID0gdGhpcy5nZXRBc3BlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVBc3BlY3RzID0gdGhpcy51cGRhdGVBc3BlY3RzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubWF0Y2hBc3BlY3RzID0gdGhpcy5tYXRjaEFzcGVjdHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBc3BlY3RzKGFzcGVjdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0QXNwZWN0cyhhc3BlY3RzKS50aGVuKCgpID0+XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUFzcGVjdHModGhpcy5wcm9wcy5pZGVudGl0eSwgYXNwZWN0cylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXRBc3BlY3RzKGFzcGVjdHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7YXNwZWN0czogey4uLnRoaXMuc3RhdGUuYXNwZWN0cywgLi4uYXNwZWN0c319LFxuICAgICAgICAgICAgICAgIHJlc29sdmVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEFzcGVjdChhc3BlY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYXNwZWN0c1thc3BlY3RdO1xuICAgIH1cblxuICAgIG1hdGNoQXNwZWN0cyhwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBrZXlzKHRoaXMuc3RhdGUuYXNwZWN0cylcbiAgICAgICAgICAgIC5maWx0ZXIoayA9PiBwYXR0ZXJuLnRlc3QoaykpXG4gICAgICAgICAgICAubWFwKGsgPT4gW2ssIHRoaXMuc3RhdGUuYXNwZWN0c1trXV0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgY29tcG9uZW50IHdoZW4gbW91bnRlZC5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGdldHMgYSByYWNlIGNvbmRpdGlvbiB3aXRoIHdpbGxVbm1vdW50XG4gICAgICAgIHRoaXMucHJvcHMuY29ubmVjdChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaWRlbnRpdHksXG4gICAgICAgICAgICB0aGlzLnNldEFzcGVjdHMsXG4gICAgICAgICAgICB0aGlzLmdldEFzcGVjdCxcbiAgICAgICAgICAgIHRoaXMubWF0Y2hBc3BlY3RzXG4gICAgICAgICk7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbml0aWFsKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFzcGVjdHModGhpcy5zdGF0ZS5hc3BlY3RzKS50aGVuKCgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVhZHk6IHRydWUsIGluaXRpYWw6IHRydWV9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc2Nvbm5lY3QodGhpcy5wcm9wcy5pZGVudGl0eSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y29tcG9uZW50LCBjb21wb25lbnRfbmFtZSwgcGFja2FnZV9uYW1lfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHthc3BlY3RzLCByZWFkeX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoIXJlYWR5KSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNvbXBvbmVudCwge1xuICAgICAgICAgICAgLi4uYXNwZWN0cyxcbiAgICAgICAgICAgIHVwZGF0ZUFzcGVjdHM6IHRoaXMudXBkYXRlQXNwZWN0cyxcbiAgICAgICAgICAgIGlkZW50aXR5OiB0aGlzLnByb3BzLmlkZW50aXR5LFxuICAgICAgICAgICAgY2xhc3NfbmFtZTogam9pbihcbiAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtwYWNrYWdlX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnXycsICctJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKX0tJHtjYW1lbFRvU3BpbmFsKGNvbXBvbmVudF9uYW1lKX1gLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhc3BlY3RzLmNsYXNzX25hbWUgPyBhc3BlY3RzLmNsYXNzX25hbWUuc3BsaXQoJyAnKSA6IFtdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5XcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgICBpZGVudGl0eTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUFzcGVjdHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNvbm5lY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY29tcG9uZW50X25hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwYWNrYWdlX25hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkaXNjb25uZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsImltcG9ydCB7bWFwLCBvbWl0LCB0eXBlfSBmcm9tICdyYW1kYSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi9jb21wb25lbnRzL1dyYXBwZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnQoYykge1xuICAgIHJldHVybiAoXG4gICAgICAgIHR5cGUoYykgPT09ICdPYmplY3QnICYmXG4gICAgICAgIChjLmhhc093blByb3BlcnR5KCdwYWNrYWdlJykgJiZcbiAgICAgICAgICAgIGMuaGFzT3duUHJvcGVydHkoJ2FzcGVjdHMnKSAmJlxuICAgICAgICAgICAgYy5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmXG4gICAgICAgICAgICBjLmhhc093blByb3BlcnR5KCdpZGVudGl0eScpKVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlUHJvcHMocHJvcHMsIHVwZGF0ZUFzcGVjdHMsIGNvbm5lY3QsIGRpc2Nvbm5lY3QpIHtcbiAgICBjb25zdCByZXBsYWNlID0ge307XG4gICAgT2JqZWN0LmVudHJpZXMocHJvcHMpLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgICAgICBpZiAodHlwZSh2KSA9PT0gJ0FycmF5Jykge1xuICAgICAgICAgICAgcmVwbGFjZVtrXSA9IHYubWFwKGMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNDb21wb25lbnQoYykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWl4aW5nIGNvbXBvbmVudHMgYW5kIHByaW1pdGl2ZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUoYykgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3QgYSBjb21wb25lbnQgYnV0IG1heWJlIGl0IGNvbnRhaW5zIHNvbWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh5ZHJhdGVQcm9wcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLCB1cGRhdGVBc3BlY3RzLCBjb25uZWN0LCBkaXNjb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IGh5ZHJhdGVQcm9wcyhcbiAgICAgICAgICAgICAgICAgICAgYy5hc3BlY3RzLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBc3BlY3RzLFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0LFxuICAgICAgICAgICAgICAgICAgICBkaXNjb25uZWN0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1Byb3BzLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcy5rZXkgPSBjLmlkZW50aXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaHlkcmF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgYy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBjLnBhY2thZ2UsXG4gICAgICAgICAgICAgICAgICAgIGMuaWRlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBc3BlY3RzLFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0LFxuICAgICAgICAgICAgICAgICAgICBkaXNjb25uZWN0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQ29tcG9uZW50KHYpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IGh5ZHJhdGVQcm9wcyhcbiAgICAgICAgICAgICAgICB2LmFzcGVjdHMsXG4gICAgICAgICAgICAgICAgdXBkYXRlQXNwZWN0cyxcbiAgICAgICAgICAgICAgICBjb25uZWN0LFxuICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXBsYWNlW2tdID0gaHlkcmF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgdi5wYWNrYWdlLFxuICAgICAgICAgICAgICAgIHYuaWRlbnRpdHksXG4gICAgICAgICAgICAgICAgbmV3UHJvcHMsXG4gICAgICAgICAgICAgICAgdXBkYXRlQXNwZWN0cyxcbiAgICAgICAgICAgICAgICBjb25uZWN0LFxuICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSh2KSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgIHJlcGxhY2Vba10gPSBoeWRyYXRlUHJvcHModiwgdXBkYXRlQXNwZWN0cywgY29ubmVjdCwgZGlzY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gey4uLnByb3BzLCAuLi5yZXBsYWNlfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGVDb21wb25lbnQoXG4gICAgbmFtZSxcbiAgICBwYWNrYWdlX25hbWUsXG4gICAgaWRlbnRpdHksXG4gICAgcHJvcHMsXG4gICAgdXBkYXRlQXNwZWN0cyxcbiAgICBjb25uZWN0LFxuICAgIGRpc2Nvbm5lY3Rcbikge1xuICAgIGNvbnN0IHBhY2sgPSB3aW5kb3dbcGFja2FnZV9uYW1lXTtcbiAgICBjb25zdCBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChwYWNrW25hbWVdLCBwcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZXJcbiAgICAgICAgICAgIGlkZW50aXR5PXtpZGVudGl0eX1cbiAgICAgICAgICAgIHVwZGF0ZUFzcGVjdHM9e3VwZGF0ZUFzcGVjdHN9XG4gICAgICAgICAgICBjb21wb25lbnQ9e2VsZW1lbnR9XG4gICAgICAgICAgICBjb25uZWN0PXtjb25uZWN0fVxuICAgICAgICAgICAgcGFja2FnZV9uYW1lPXtwYWNrYWdlX25hbWV9XG4gICAgICAgICAgICBjb21wb25lbnRfbmFtZT17bmFtZX1cbiAgICAgICAgICAgIGFzcGVjdHM9e3Byb3BzfVxuICAgICAgICAgICAgZGlzY29ubmVjdD17ZGlzY29ubmVjdH1cbiAgICAgICAgICAgIGtleT17YHdyYXBwZXItJHtpZGVudGl0eX1gfVxuICAgICAgICAvPlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlUHJvcChwcm9wKSB7XG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHByb3ApKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZGVudGl0eTogcHJvcC5wcm9wcy5pZGVudGl0eSxcbiAgICAgICAgICAgIGFzcGVjdHM6IG1hcChcbiAgICAgICAgICAgICAgICBwcmVwYXJlUHJvcCxcbiAgICAgICAgICAgICAgICBvbWl0KFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWRlbnRpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZUFzcGVjdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ19uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdfcGFja2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXNwZWN0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAna2V5JyxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcC5wcm9wcy5hc3BlY3RzXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG5hbWU6IHByb3AucHJvcHMuY29tcG9uZW50X25hbWUsXG4gICAgICAgICAgICBwYWNrYWdlOiBwcm9wLnByb3BzLnBhY2thZ2VfbmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUocHJvcCkgPT09ICdBcnJheScpIHtcbiAgICAgICAgcmV0dXJuIHByb3AubWFwKHByZXBhcmVQcm9wKTtcbiAgICB9XG4gICAgaWYgKHR5cGUocHJvcCkgPT09ICdPYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBtYXAocHJlcGFyZVByb3AsIHByb3ApO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcDtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL2NvbXBvbmVudHMvUmVuZGVyZXInO1xuXG5mdW5jdGlvbiByZW5kZXIoe2Jhc2VVcmwsIHBpbmcsIHBpbmdfaW50ZXJ2YWwsIHJldHJpZXN9LCBlbGVtZW50KSB7XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8UmVuZGVyZXJcbiAgICAgICAgICAgIGJhc2VVcmw9e2Jhc2VVcmx9XG4gICAgICAgICAgICBwaW5nPXtwaW5nfVxuICAgICAgICAgICAgcGluZ19pbnRlcnZhbD17cGluZ19pbnRlcnZhbH1cbiAgICAgICAgICAgIHJldHJpZXM9e3JldHJpZXN9XG4gICAgICAgIC8+LFxuICAgICAgICBlbGVtZW50XG4gICAgKTtcbn1cblxuZXhwb3J0IHtSZW5kZXJlciwgcmVuZGVyfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cblxuY29uc3QganNvblBhdHRlcm4gPSAvanNvbi9pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFhock9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXVxuICogQHByb3BlcnR5IHtPYmplY3R9IFtoZWFkZXJzPXt9XVxuICogQHByb3BlcnR5IHtzdHJpbmd8QmxvYnxBcnJheUJ1ZmZlcnxvYmplY3R8QXJyYXl9IFtwYXlsb2FkPScnXVxuICovXG5cbi8qKlxuICogQHR5cGUge1hock9wdGlvbnN9XG4gKi9cbmNvbnN0IGRlZmF1bHRYaHJPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge30sXG4gICAgcGF5bG9hZDogJycsXG4gICAganNvbjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBKU09OSEVBREVSUyA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxufTtcblxuLyoqXG4gKiBYaHIgcHJvbWlzZSB3cmFwLlxuICpcbiAqIEZldGNoIGNhbid0IGRvIHB1dCByZXF1ZXN0LCBzbyB4aHIgc3RpbGwgdXNlZnVsLlxuICpcbiAqIEF1dG8gcGFyc2UganNvbiByZXNwb25zZXMuXG4gKiBDYW5jZWxsYXRpb246IHhoci5hYm9ydFxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtYaHJPcHRpb25zfSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB4aHJSZXF1ZXN0KHVybCwgb3B0aW9ucyA9IGRlZmF1bHRYaHJPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qge21ldGhvZCwgaGVhZGVycywgcGF5bG9hZCwganNvbn0gPSB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0WGhyT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCk7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBqc29uID8gey4uLkpTT05IRUFERVJTLCAuLi5oZWFkZXJzfSA6IGhlYWRlcnM7XG4gICAgICAgIE9iamVjdC5rZXlzKGhlYWQpLmZvckVhY2goayA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBoZWFkW2tdKSk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVZhbHVlID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uUGF0dGVybi50ZXN0KHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJykpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VWYWx1ZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZVZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdSZXF1ZXN0RXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFhIUiAke3VybH0gRkFJTEVEIC0gU1RBVFVTOiAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gTUVTU0FHRTogJHt4aHIuc3RhdHVzVGV4dH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gZXJyID0+IHJlamVjdChlcnIpO1xuICAgICAgICB4aHIuc2VuZChqc29uID8gSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgOiBwYXlsb2FkKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBBdXRvIGdldCBoZWFkZXJzIGFuZCByZWZyZXNoL3JldHJ5LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGdldEhlYWRlcnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlZnJlc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcGlSZXF1ZXN0KGJhc2VVcmwgPSAnJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdXJsID0gYmFzZVVybCArIGFyZ3VtZW50c1swXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gey4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHhoclJlcXVlc3QodXJsLCBvcHRpb25zKS50aGVuKHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHtsb2FkQ3NzLCBsb2FkU2NyaXB0fSBmcm9tICdjb21tb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRSZXF1aXJlbWVudChyZXF1aXJlbWVudCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHt1cmwsIGtpbmQsIG1ldGF9ID0gcmVxdWlyZW1lbnQ7XG4gICAgICAgIGxldCBtZXRob2Q7XG4gICAgICAgIGlmIChraW5kID09PSAnanMnKSB7XG4gICAgICAgICAgICBtZXRob2QgPSBsb2FkU2NyaXB0O1xuICAgICAgICB9IGVsc2UgaWYgKGtpbmQgPT09ICdjc3MnKSB7XG4gICAgICAgICAgICBtZXRob2QgPSBsb2FkQ3NzO1xuICAgICAgICB9IGVsc2UgaWYgKGtpbmQgPT09ICdtYXAnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7ZXJyb3I6IGBJbnZhbGlkIHJlcXVpcmVtZW50IGtpbmQ6ICR7a2luZH1gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGhvZCh1cmwsIG1ldGEpXG4gICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVxdWlyZW1lbnRzKHJlcXVpcmVtZW50cywgcGFja2FnZXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgbG9hZGluZ3MgPSBbXTtcbiAgICAgICAgLy8gTG9hZCBwYWNrYWdlcyBmaXJzdC5cbiAgICAgICAgT2JqZWN0LmtleXMocGFja2FnZXMpLmZvckVhY2gocGFja19uYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhY2sgPSBwYWNrYWdlc1twYWNrX25hbWVdO1xuICAgICAgICAgICAgbG9hZGluZ3MgPSBsb2FkaW5ncy5jb25jYXQocGFjay5yZXF1aXJlbWVudHMubWFwKGxvYWRSZXF1aXJlbWVudCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhlbiBsb2FkIHJlcXVpcmVtZW50cyBzbyB0aGV5IGNhbiB1c2UgcGFja2FnZXNcbiAgICAgICAgLy8gYW5kIG92ZXJyaWRlIGNzcy5cbiAgICAgICAgUHJvbWlzZS5hbGwobG9hZGluZ3MpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIC8vIExvYWQgaW4gb3JkZXIuXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCByZXF1aXJlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkUmVxdWlyZW1lbnQocmVxdWlyZW1lbnRzW2ldKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXzsiXSwic291cmNlUm9vdCI6IiJ9
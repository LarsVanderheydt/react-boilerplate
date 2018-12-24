webpackHotUpdate("main",{

/***/ "./src/js/containers/App.jsx":
/*!***********************************!*\
  !*** ./src/js/containers/App.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var mobx_react_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-devtools */ "./node_modules/mobx-react-devtools/index.js");
/* harmony import */ var mobx_react_devtools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_devtools__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./src/js/containers/home.jsx");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contact */ "./src/js/containers/Contact.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'renderHome',
    value: function renderHome() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
  }, {
    key: 'renderContact',
    value: function renderContact() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
        null,
         true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react_devtools__WEBPACK_IMPORTED_MODULE_2___default.a, null) : undefined,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/home', render: this.renderHome }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/contact', render: this.renderContact }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { render: function render() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/home' });
              } })
          )
        )
      );
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/js/containers/Contact.jsx":
/*!***************************************!*\
  !*** ./src/js/containers/Contact.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/js/components/Layout.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'container' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h1',
                        null,
                        'Hello contact page'
                    )
                )
            );
        }
    }]);

    return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])(function (_ref) {
    var store = _ref.store;

    return {
        name: store.name
    };
})(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Contact)));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb250YWluZXJzL0NvbnRhY3QuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb2Nlc3MiLCJyZW5kZXJIb21lIiwicmVuZGVyQ29udGFjdCIsIkNvbXBvbmVudCIsIkNvbnRhY3QiLCJpbmplY3QiLCJzdG9yZSIsIm5hbWUiLCJvYnNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR3FCQSxHOzs7Ozs7Ozs7OztpQ0FDTjtBQUNYLGFBQU8sMkRBQUMsNkNBQUQsT0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLDJEQUFDLGdEQUFELE9BQVA7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFDLG9EQUFELENBQU8sUUFBUDtBQUFBO0FBQ0dDLGFBQUEsR0FBd0MsMkRBQUMsMERBQUQsT0FBeEMsR0FBdUQsU0FEMUQ7QUFHRTtBQUFDLHdFQUFEO0FBQUE7QUFDRTtBQUFDLG1FQUFEO0FBQUE7QUFDRSx1RUFBQyxzREFBRCxJQUFPLFdBQVAsRUFBYSxNQUFLLE9BQWxCLEVBQTBCLFFBQVEsS0FBS0MsVUFBdkMsR0FERjtBQUVFLHVFQUFDLHNEQUFELElBQU8sV0FBUCxFQUFhLE1BQUssVUFBbEIsRUFBNkIsUUFBUSxLQUFLQyxhQUExQyxHQUZGO0FBSUUsdUVBQUMsc0RBQUQsSUFBTyxRQUFRO0FBQUEsdUJBQU0sMkRBQUMseURBQUQsSUFBVSxJQUFHLE9BQWIsR0FBTjtBQUFBLGVBQWY7QUFKRjtBQURGO0FBSEYsT0FERjtBQWNEOzs7O0VBeEI4QkMsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JqQztBQUNBO0FBQ0E7O0lBRU1DLE87Ozs7Ozs7Ozs7O2lDQUNPO0FBQ0wsbUJBQ0k7QUFBQywwRUFBRDtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQURKLGFBREo7QUFPSDs7OztFQVRpQkQsK0M7O0FBWVBFLHdIQUFNQSxDQUNqQixnQkFBZTtBQUFBLFFBQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDWCxXQUFRO0FBQ0pDLGNBQU1ELE1BQU1DO0FBRFIsS0FBUjtBQUdILENBTFUsRUFPWEMsMkRBQVFBLENBQUNKLE9BQVQsQ0FQVyxDQUFmLEUiLCJmaWxlIjoibWFpbi5hOWI5YmI5MzljNjUyMmRjN2IyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgRGV2VG9vbHMgZnJvbSAnbW9ieC1yZWFjdC1kZXZ0b29scyc7XG5pbXBvcnQgXCIuLi8uLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVySG9tZSgpIHtcbiAgICByZXR1cm4gPEhvbWUgLz47XG4gIH1cblxuICByZW5kZXJDb250YWN0KCkge1xuICAgIHJldHVybiA8Q29udGFjdCAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IGBwcm9kdWN0aW9uYCA/IDxEZXZUb29scyAvPiA6IG51bGx9XG5cbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2hvbWVcIiByZW5kZXI9e3RoaXMucmVuZGVySG9tZX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NvbnRhY3RcIiByZW5kZXI9e3RoaXMucmVuZGVyQ29udGFjdH0gLz5cblxuICAgICAgICAgICAgPFJvdXRlIHJlbmRlcj17KCkgPT4gPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPn0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkhlbGxvIGNvbnRhY3QgcGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdChcbiAgICAoeyBzdG9yZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgbmFtZTogc3RvcmUubmFtZVxuICAgICAgICB9KTtcbiAgICB9XG4pKFxuICAgIG9ic2VydmVyKENvbnRhY3QpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Contact, null);
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb2Nlc3MiLCJyZW5kZXJIb21lIiwicmVuZGVyQ29udGFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxHOzs7Ozs7Ozs7OztpQ0FDTjtBQUNYLGFBQU8sMkRBQUMsNkNBQUQsT0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLDJEQUFDLE9BQUQsT0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUMsb0RBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDR0MsYUFBQSxHQUF3QywyREFBQywwREFBRCxPQUF4QyxHQUF1RCxTQUQxRDtBQUdFO0FBQUMsd0VBQUQ7QUFBQTtBQUNFO0FBQUMsbUVBQUQ7QUFBQTtBQUNFLHVFQUFDLHNEQUFELElBQU8sV0FBUCxFQUFhLE1BQUssT0FBbEIsRUFBMEIsUUFBUSxLQUFLQyxVQUF2QyxHQURGO0FBRUUsdUVBQUMsc0RBQUQsSUFBTyxXQUFQLEVBQWEsTUFBSyxVQUFsQixFQUE2QixRQUFRLEtBQUtDLGFBQTFDLEdBRkY7QUFJRSx1RUFBQyxzREFBRCxJQUFPLFFBQVE7QUFBQSx1QkFBTSwyREFBQyx5REFBRCxJQUFVLElBQUcsT0FBYixHQUFOO0FBQUEsZUFBZjtBQUpGO0FBREY7QUFIRixPQURGO0FBY0Q7Ozs7RUF4QjhCQywrQyIsImZpbGUiOiJtYWluLmY3YWQxYWFjNmI1MjEwOTBmOWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBEZXZUb29scyBmcm9tICdtb2J4LXJlYWN0LWRldnRvb2xzJztcbmltcG9ydCBcIi4uLy4uL2Nzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXJIb21lKCkge1xuICAgIHJldHVybiA8SG9tZSAvPjtcbiAgfVxuXG4gIHJlbmRlckNvbnRhY3QoKSB7XG4gICAgcmV0dXJuIDxDb250YWN0IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gYHByb2R1Y3Rpb25gID8gPERldlRvb2xzIC8+IDogbnVsbH1cblxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaG9tZVwiIHJlbmRlcj17dGhpcy5yZW5kZXJIb21lfSAvPlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY29udGFjdFwiIHJlbmRlcj17dGhpcy5yZW5kZXJDb250YWN0fSAvPlxuXG4gICAgICAgICAgICA8Um91dGUgcmVuZGVyPXsoKSA9PiA8UmVkaXJlY3QgdG89XCIvaG9tZVwiIC8+fSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
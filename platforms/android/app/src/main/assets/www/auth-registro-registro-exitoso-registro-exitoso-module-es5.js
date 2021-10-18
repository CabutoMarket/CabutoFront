function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-registro-registro-exitoso-registro-exitoso-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro/registro-exitoso/registro-exitoso.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro/registro-exitoso/registro-exitoso.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthRegistroRegistroExitosoRegistroExitosoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<ion-header>-->\r\n<div class = 'header'>\r\n  <!--<div class =\"btn_regresar\"> <img src=\"../assets/img/atras.png\"  routerLink='/login'> </div>-->\r\n  <div class= \"header\" > <img src=\"../assets/img/header_registro_final1.png\" size= 12></div>\r\n</div>\r\n<!--</ion-header>-->\r\n\r\n<ion-content>\r\n  <div class= \"fondo\" > <img src=\"../assets/img/registro_exitoso.png\" size= 12></div>\r\n</ion-content>\r\n<ion-button size=\"large\" expand = \"block\" class = \"comenzar_btn\" (click)='showLoading()'>Comenzar</ion-button>\r\n";
    /***/
  },

  /***/
  "./src/app/auth/registro/registro-exitoso/registro-exitoso-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/auth/registro/registro-exitoso/registro-exitoso-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: RegistroExitosoPageRoutingModule */

  /***/
  function srcAppAuthRegistroRegistroExitosoRegistroExitosoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroExitosoPageRoutingModule", function () {
      return RegistroExitosoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _registro_exitoso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro-exitoso.page */
    "./src/app/auth/registro/registro-exitoso/registro-exitoso.page.ts");

    var routes = [{
      path: '',
      component: _registro_exitoso_page__WEBPACK_IMPORTED_MODULE_3__["RegistroExitosoPage"]
    }];

    var RegistroExitosoPageRoutingModule = function RegistroExitosoPageRoutingModule() {
      _classCallCheck(this, RegistroExitosoPageRoutingModule);
    };

    RegistroExitosoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroExitosoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/registro/registro-exitoso/registro-exitoso.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/auth/registro/registro-exitoso/registro-exitoso.module.ts ***!
    \***************************************************************************/

  /*! exports provided: RegistroExitosoPageModule */

  /***/
  function srcAppAuthRegistroRegistroExitosoRegistroExitosoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroExitosoPageModule", function () {
      return RegistroExitosoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _registro_exitoso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-exitoso-routing.module */
    "./src/app/auth/registro/registro-exitoso/registro-exitoso-routing.module.ts");
    /* harmony import */


    var _registro_exitoso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro-exitoso.page */
    "./src/app/auth/registro/registro-exitoso/registro-exitoso.page.ts");

    var RegistroExitosoPageModule = function RegistroExitosoPageModule() {
      _classCallCheck(this, RegistroExitosoPageModule);
    };

    RegistroExitosoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_exitoso_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroExitosoPageRoutingModule"]],
      declarations: [_registro_exitoso_page__WEBPACK_IMPORTED_MODULE_6__["RegistroExitosoPage"]]
    })], RegistroExitosoPageModule);
    /***/
  },

  /***/
  "./src/app/auth/registro/registro-exitoso/registro-exitoso.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/auth/registro/registro-exitoso/registro-exitoso.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthRegistroRegistroExitosoRegistroExitosoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\nion-button {\n  --background: var(--ion-color-naranja-oscuro);\n  color: white;\n}\n\n.fondo > img {\n  margin: 0 auto;\n  padding-top: 100px;\n}\n\nion-button {\n  font-size: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Ryby9yZWdpc3Ryby1leGl0b3NvL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxhdXRoXFxyZWdpc3Ryb1xccmVnaXN0cm8tZXhpdG9zb1xccmVnaXN0cm8tZXhpdG9zby5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcmVnaXN0cm8vcmVnaXN0cm8tZXhpdG9zby9yZWdpc3Ryby1leGl0b3NvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUEyQztBQ0MvQzs7QURFQTtFQUVJLDZDQUFhO0VBQ2IsWUFBWTtBQ0FoQjs7QURHQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7QUNBdEI7O0FER0E7RUFDSSxlQUFlO0FDQW5CIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Ryby9yZWdpc3Ryby1leGl0b3NvL3JlZ2lzdHJvLWV4aXRvc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3VybyksdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtY2xhcm8pKTtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvbmRvID4gaW1ne1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvbmRvID4gaW1nIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/registro/registro-exitoso/registro-exitoso.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/auth/registro/registro-exitoso/registro-exitoso.page.ts ***!
    \*************************************************************************/

  /*! exports provided: RegistroExitosoPage */

  /***/
  function srcAppAuthRegistroRegistroExitosoRegistroExitosoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroExitosoPage", function () {
      return RegistroExitosoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RegistroExitosoPage = /*#__PURE__*/function () {
      function RegistroExitosoPage(loading, router) {
        _classCallCheck(this, RegistroExitosoPage);

        this.loading = loading;
        this.router = router;
      }

      _createClass(RegistroExitosoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showLoading",
        value: function showLoading() {
          var _this = this;

          this.loading.create({
            message: 'Loading.....'
          }).then(function (loading) {
            loading.present();
            {
              _this.router.navigateByUrl('/login');
            }
            setTimeout(function () {
              loading.dismiss();
            }, 1000);
          });
        }
      }]);

      return RegistroExitosoPage;
    }();

    RegistroExitosoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RegistroExitosoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro-exitoso',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro-exitoso.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro/registro-exitoso/registro-exitoso.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro-exitoso.page.scss */
      "./src/app/auth/registro/registro-exitoso/registro-exitoso.page.scss"))["default"]]
    })], RegistroExitosoPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-registro-registro-exitoso-registro-exitoso-module-es5.js.map
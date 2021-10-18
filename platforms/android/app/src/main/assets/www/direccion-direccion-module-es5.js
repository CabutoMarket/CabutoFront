function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["direccion-direccion-module"], {
  /***/
  "./src/app/direccion/direccion-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/direccion/direccion-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DireccionPageRoutingModule */

  /***/
  function srcAppDireccionDireccionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DireccionPageRoutingModule", function () {
      return DireccionPageRoutingModule;
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


    var _direccion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./direccion.page */
    "./src/app/direccion/direccion.page.ts");

    var routes = [{
      path: '',
      component: _direccion_page__WEBPACK_IMPORTED_MODULE_3__["DireccionPage"]
    }, {
      path: 'nueva-direccion',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | nueva-direccion-nueva-direccion-module */
        "nueva-direccion-nueva-direccion-module").then(__webpack_require__.bind(null,
        /*! ./nueva-direccion/nueva-direccion.module */
        "./src/app/direccion/nueva-direccion/nueva-direccion.module.ts")).then(function (m) {
          return m.NuevaDireccionPageModule;
        });
      }
    }, {
      path: 'confirmar-direccion',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | confirmar-direccion-confirmar-direccion-module */
        "confirmar-direccion-confirmar-direccion-module").then(__webpack_require__.bind(null,
        /*! ./confirmar-direccion/confirmar-direccion.module */
        "./src/app/direccion/confirmar-direccion/confirmar-direccion.module.ts")).then(function (m) {
          return m.ConfirmarDireccionPageModule;
        });
      }
    }];

    var DireccionPageRoutingModule = function DireccionPageRoutingModule() {
      _classCallCheck(this, DireccionPageRoutingModule);
    };

    DireccionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DireccionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/direccion/direccion.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/direccion/direccion.module.ts ***!
    \***********************************************/

  /*! exports provided: DireccionPageModule */

  /***/
  function srcAppDireccionDireccionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DireccionPageModule", function () {
      return DireccionPageModule;
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


    var _direccion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./direccion-routing.module */
    "./src/app/direccion/direccion-routing.module.ts");
    /* harmony import */


    var _direccion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./direccion.page */
    "./src/app/direccion/direccion.page.ts");

    var DireccionPageModule = function DireccionPageModule() {
      _classCallCheck(this, DireccionPageModule);
    };

    DireccionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _direccion_routing_module__WEBPACK_IMPORTED_MODULE_5__["DireccionPageRoutingModule"]],
      declarations: [_direccion_page__WEBPACK_IMPORTED_MODULE_6__["DireccionPage"]]
    })], DireccionPageModule);
    /***/
  }
}]);
//# sourceMappingURL=direccion-direccion-module-es5.js.map
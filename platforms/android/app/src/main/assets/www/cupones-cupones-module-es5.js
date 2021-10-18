function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cupones-cupones-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cupones/cupones.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cupones/cupones.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCuponesCuponesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"pantalla($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"contenedor\">\r\n    <div class=\"contenedor-titulo\">\r\n      <ion-label class=\"titulo\">Cupones</ion-label>\r\n    </div>\r\n    <div class=\"contenedor-cupones\" *ngFor=\"let cupones of cupon\">\r\n      <div class=\"agregar-imagen\" id=\"Cupon{{cupones.id}}\">\r\n        <img name=\"agregar\" src=\"../assets/img/agregar_2.png\" (click)=agregar(cupones.nombre,cupones.id)>\r\n      </div>\r\n      <div class=\"nombre\">{{cupones.nombre}}</div>\r\n      <div class=\"contenedor-imagen\" (click)=mostrar(cupones.id) id={{cupones.nombre}}>\r\n        <div class=\"descripcion\">{{cupones.descripcion}}</div>\r\n        <img class=\"imagen\" src=\"http://cabutoshop.pythonanywhere.com{{cupones.imagen}}\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<!--<img name=\"imagen\" src=\"../assets/img/cupon1.png\"  >-->";
    /***/
  },

  /***/
  "./src/app/cupones/cupones-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/cupones/cupones-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CuponesPageRoutingModule */

  /***/
  function srcAppCuponesCuponesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CuponesPageRoutingModule", function () {
      return CuponesPageRoutingModule;
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


    var _cupones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cupones.page */
    "./src/app/cupones/cupones.page.ts");

    var routes = [{
      path: '',
      component: _cupones_page__WEBPACK_IMPORTED_MODULE_3__["CuponesPage"]
    }];

    var CuponesPageRoutingModule = function CuponesPageRoutingModule() {
      _classCallCheck(this, CuponesPageRoutingModule);
    };

    CuponesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CuponesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cupones/cupones.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/cupones/cupones.module.ts ***!
    \*******************************************/

  /*! exports provided: CuponesPageModule */

  /***/
  function srcAppCuponesCuponesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CuponesPageModule", function () {
      return CuponesPageModule;
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


    var _cupones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cupones-routing.module */
    "./src/app/cupones/cupones-routing.module.ts");
    /* harmony import */


    var _cupones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cupones.page */
    "./src/app/cupones/cupones.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var CuponesPageModule = function CuponesPageModule() {
      _classCallCheck(this, CuponesPageModule);
    };

    CuponesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cupones_routing_module__WEBPACK_IMPORTED_MODULE_5__["CuponesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_cupones_page__WEBPACK_IMPORTED_MODULE_6__["CuponesPage"]]
    })], CuponesPageModule);
    /***/
  },

  /***/
  "./src/app/cupones/cupones.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/cupones/cupones.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCuponesCuponesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  height: 10px;\n  width: 100%;\n}\n\n* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor {\n  padding: 20px 30px;\n}\n\n.contenedor-titulo {\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n}\n\n.contenedor-titulo .titulo {\n  color: var(--ion-color-azul-oscuro);\n  font-size: larger;\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\n.contenedor-cupones {\n  margin: 15px 0px;\n  border: 2px dashed var(--ion-color-azul-oscuro);\n  border-radius: 20px;\n  padding: 10px;\n}\n\n.contenedor-cupones .descripcion {\n  align-self: flex-start;\n  width: 40%;\n}\n\n.contenedor-cupones .nombre {\n  color: var(--ion-color-azul-oscuro);\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n\n.contenedor-imagen {\n  padding-bottom: 0.5rem;\n  z-index: 0;\n  bottom: 0rem;\n  height: 8rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.contenedor-imagen .imagen {\n  height: 100%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.agregar-imagen {\n  position: absolute;\n  width: 50px;\n  margin: 3rem auto;\n  left: calc(50% - 30px);\n  visibility: hidden;\n  z-index: 1;\n}\n\n/*\r\n.agregar:hover {\r\n    visibility: visible;\r\n  }*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Vwb25lcy9EOlxcZ2l0XFxDYWJ1dG9Gcm9udC9zcmNcXGFwcFxcY3Vwb25lc1xcY3Vwb25lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2N1cG9uZXMvY3Vwb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztBQ0NmOztBREVBO0VBQ0ksMkNBQTJDO0FDQy9DOztBREVBO0VBQ0ksa0JBQWtCO0FDQ3RCOztBREVBO0VBRUksaUJBQWlCO0VBQ2pCLGFBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCO0FDQXpCOztBRExBO0VBT1EsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FDRTFCOztBREVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLCtDQUErQztFQUMvQyxtQkFBbUI7RUFDbkIsYUFBYTtBQ0NqQjs7QURMQTtFQU1RLHNCQUFzQjtFQUN0QixVQUFVO0FDR2xCOztBRFZBO0VBVVEsbUNBQWtDO0VBQ2xDLGVBQWU7RUFDZixtQkFBbUI7QUNJM0I7O0FEQUE7RUFDSSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUNHdkI7O0FEVkE7RUFTUSxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixZQUNKO0FDSUo7O0FEREE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUNJZDs7QUREQTs7O0lDTUkiLCJmaWxlIjoic3JjL2FwcC9jdXBvbmVzL2N1cG9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3J7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLXRpdHVsb3tcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIC50aXR1bG97XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1jdXBvbmVze1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAuZGVzY3JpcGNpb257XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgLm5vbWJyZXtcclxuICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1pbWFnZW57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGJvdHRvbTogMHJlbTtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmltYWdlbntcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOmF1dG9cclxuICAgIH1cclxufVxyXG5cclxuLmFncmVnYXItaW1hZ2Vue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW46IDNyZW0gYXV0bztcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzBweCk7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKlxyXG4uYWdyZWdhcjpob3ZlciB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH0qLyIsImlvbi1oZWFkZXIge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG5cbi5jb250ZW5lZG9yLXRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4uY29udGVuZWRvci10aXR1bG8gLnRpdHVsbyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNvbnRlbmVkb3ItY3Vwb25lcyB7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29udGVuZWRvci1jdXBvbmVzIC5kZXNjcmlwY2lvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5jb250ZW5lZG9yLWN1cG9uZXMgLm5vbWJyZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb250ZW5lZG9yLWltYWdlbiB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIHotaW5kZXg6IDA7XG4gIGJvdHRvbTogMHJlbTtcbiAgaGVpZ2h0OiA4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW5lZG9yLWltYWdlbiAuaW1hZ2VuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5hZ3JlZ2FyLWltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogM3JlbSBhdXRvO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDMwcHgpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qXHJcbi5hZ3JlZ2FyOmhvdmVyIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfSovXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/cupones/cupones.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/cupones/cupones.page.ts ***!
    \*****************************************/

  /*! exports provided: CuponesPage */

  /***/
  function srcAppCuponesCuponesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CuponesPage", function () {
      return CuponesPage;
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


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../global */
    "./src/app/global.ts");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../servicios/shopping-cart.service */
    "./src/app/servicios/shopping-cart.service.ts");
    /* harmony import */


    var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../aviso/correcto/correcto.page */
    "./src/app/aviso/correcto/correcto.page.ts");
    /* harmony import */


    var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../aviso/incorrecto/incorrecto.page */
    "./src/app/aviso/incorrecto/incorrecto.page.ts");
    /* harmony import */


    var _servicios_cupones_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../servicios/cupones.service */
    "./src/app/servicios/cupones.service.ts");

    var CuponesPage = /*#__PURE__*/function () {
      function CuponesPage(cuponesService, router, alert, loadingCtrl, storage, modalCtrl, shoppingCart) {
        _classCallCheck(this, CuponesPage);

        this.cuponesService = cuponesService;
        this.router = router;
        this.alert = alert;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.shoppingCart = shoppingCart;
        this.url = '';
        this.valor = 0;
        this.correo = "";
      }

      _createClass(CuponesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.cargaPantalla();
        }
      }, {
        key: "pantalla",
        value: function pantalla(event) {
          var _this = this;

          console.log("refresh");
          this.cuponesService.getCupon().subscribe(function (data) {
            //console.log("esta es la data "+data["nombre"])
            _this.cupon = data;
            var tol = Object.entries(_this.cupon).length;
            console.log(_this.cupon);
            console.log(tol);

            if (tol == 0) {
              _this.mensajeIncorrecto("No existen cupones disponibles", "Agregaramos nuevos más adelante");
            }

            if (event) event.target.complete();
          }, function (error) {
            console.log("algo salio mal");

            _this.mensajeIncorrecto("Algo salió mal", "error de conexión");

            console.error(error);
            if (event) event.target.complete();
          });
        }
      }, {
        key: "cargaPantalla",
        value: function cargaPantalla() {
          var _this2 = this;

          this.loadingCtrl.create({
            message: 'Loading.....'
          }).then(function (loading) {
            loading.present();
            {
              _this2.pantalla(null);
            }
            setTimeout(function () {
              loading.dismiss();
            }, 1000);
          });
        }
      }, {
        key: "mensajeCorrecto",
        value: function mensajeCorrecto(titulo, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_8__["CorrectoPage"],
                      cssClass: 'CorrectoProducto',
                      componentProps: {
                        'titulo': titulo,
                        'mensaje': mensaje
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "mensajeIncorrecto",
        value: function mensajeIncorrecto(titulo, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_9__["IncorrectoPage"],
                      cssClass: 'IncorrectoProducto',
                      componentProps: {
                        'titulo': titulo,
                        'mensaje': mensaje
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getProductLen",
        value: function getProductLen() {
          var pindex = 0;

          for (var p in this.cupon) {
            pindex = +p + 1;
          }

          return pindex;
        }
      }, {
        key: "getNombre",
        value: function getNombre(id) {
          for (var i = 0; i < this.getProductLen(); i++) {
            if (id === this.cupon[i]['id']) {
              return this.cupon[i]['nombre'];
            }
          }
        }
      }, {
        key: "agregar",
        value: function agregar(id, id2) {
          var _this3 = this;

          this.getCorreo();
          var doc = document.getElementById(id);
          var doc2 = document.getElementById("Cupon" + id2);
          doc2.style.visibility = "hidden";
          this.storage.get('name').then(function (nombre) {
            console.log('Name is', nombre);

            if (_global__WEBPACK_IMPORTED_MODULE_2__["login"].login == false && nombre == null) {
              _global__WEBPACK_IMPORTED_MODULE_2__["login"].producto = true;

              _this3.router.navigateByUrl('/login');
            } else {
              var cantidad = "1";
              console.log("La cantidad que se agrega al carrito es: ", cantidad);

              if (parseInt(cantidad) > 0) {
                var cupxcant = {
                  'nombre': id,
                  'cantidad': parseInt(cantidad),
                  'correo': _this3.correo
                };

                _this3.shoppingCart.addCupon(cupxcant).subscribe(function (data) {
                  if (data.valid == "OK") {
                    _this3.mensajeCorrecto("Cupón Agregado", "Cupón Agregado Exitosamente");
                  } else if (data.valid == "IN") {
                    _this3.mensajeIncorrecto("Agregar Cupón", "Cupón ya existe en carrito");
                  } else if (data.valid == "NOT") {
                    _this3.mensajeIncorrecto("Agregar Cupón", "Ha ocurrido un error, revise su conexión");
                  }
                });

                window.footer.datos();
              } else {
                _this3.mensajeIncorrecto("Agregar Cupón", "No ha escogido la cantidad para agregar");
              }
            }
          });
        }
      }, {
        key: "getCorreo",
        value: function getCorreo() {
          var _this4 = this;

          console.log(_global__WEBPACK_IMPORTED_MODULE_2__["login"].login);
          this.storage.get('correo').then(function (val) {
            _this4.correo = val;
            console.log('name: ', _this4.correo);
          });
        }
      }, {
        key: "mostrar",
        value: function mostrar(id) {
          console.log("esto en mostrar y el id que tengo es", id);
          var doc = document.getElementById("Cupon" + id);
          console.log(doc);
          console.log(doc.style.visibility);

          if (doc.style.visibility === "visible") {
            doc.style.visibility = "hidden";
          } else {
            doc.style.visibility = "visible";
          }
        }
      }]);

      return CuponesPage;
    }();

    CuponesPage.ctorParameters = function () {
      return [{
        type: _servicios_cupones_service__WEBPACK_IMPORTED_MODULE_10__["CuponesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"]
      }];
    };

    CuponesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cupones',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cupones.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cupones/cupones.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cupones.page.scss */
      "./src/app/cupones/cupones.page.scss"))["default"]]
    })], CuponesPage);
    /***/
  },

  /***/
  "./src/app/servicios/cupones.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/servicios/cupones.service.ts ***!
    \**********************************************/

  /*! exports provided: CuponesService */

  /***/
  function srcAppServiciosCuponesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CuponesService", function () {
      return CuponesService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Accept": "application/json, text/plain",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        "cache-control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT"
      })
    };

    var CuponesService = /*#__PURE__*/function () {
      function CuponesService(http) {
        _classCallCheck(this, CuponesService);

        this.http = http;
        this.baseUrl = "https://cabutoshop.pythonanywhere.com/movil/";
      }

      _createClass(CuponesService, [{
        key: "getCupon",
        value: function getCupon() {
          var headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
          };
          return this.http.get(this.baseUrl + 'cupones/', {
            headers: headers
          });
        }
      }]);

      return CuponesService;
    }();

    CuponesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CuponesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CuponesService);
    /***/
  }
}]);
//# sourceMappingURL=cupones-cupones-module-es5.js.map
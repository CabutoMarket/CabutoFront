function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriasCategoriasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"contenedor-page\">\r\n    <div class=\"contenedor-titulo\">\r\n      <ion-label class=\"titulo\">Categorías</ion-label>\r\n    </div>\r\n    <div class=\"contenedor\">\r\n      <div class=\"contener-categoria\" *ngFor=\"let categoria of categorias\">\r\n        <div class=\"div-categoria\" (click)=\"mostrar(categoria.nombre)\">\r\n          <img class=\"categoria-imagen\" name=\"imagen\" src=\"http://cabutoshop.pythonanywhere.com/media/{{categoria.image}}\">\r\n          <h6 class=\"nombre-producto\" name=\"nombre\">{{categoria.nombre}}</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/categorias/categorias-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/categorias/categorias-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: CategoriasPageRoutingModule */

  /***/
  function srcAppCategoriasCategoriasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function () {
      return CategoriasPageRoutingModule;
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


    var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/categorias/categorias.page.ts");

    var routes = [{
      path: '',
      component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }, {
      path: 'detalle-categoria',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | detalle-categoria-detalle-categoria-module */
        "detalle-categoria-detalle-categoria-module").then(__webpack_require__.bind(null,
        /*! ./detalle-categoria/detalle-categoria.module */
        "./src/app/categorias/detalle-categoria/detalle-categoria.module.ts")).then(function (m) {
          return m.DetalleCategoriaPageModule;
        });
      }
    }];

    var CategoriasPageRoutingModule = function CategoriasPageRoutingModule() {
      _classCallCheck(this, CategoriasPageRoutingModule);
    };

    CategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/categorias/categorias.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/categorias/categorias.module.ts ***!
    \*************************************************/

  /*! exports provided: CategoriasPageModule */

  /***/
  function srcAppCategoriasCategoriasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function () {
      return CategoriasPageModule;
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


    var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categorias-routing.module */
    "./src/app/categorias/categorias-routing.module.ts");
    /* harmony import */


    var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/categorias/categorias.page.ts");

    var CategoriasPageModule = function CategoriasPageModule() {
      _classCallCheck(this, CategoriasPageModule);
    };

    CategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]],
      declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })], CategoriasPageModule);
    /***/
  },

  /***/
  "./src/app/categorias/categorias.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/categorias/categorias.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriasCategoriasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  height: 10px;\n  width: 100%;\n}\n\n* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-page {\n  margin: 20px 30px;\n}\n\n.titulo {\n  font-family: var(--ion-font-family);\n  font-weight: bold;\n  font-size: larger;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 6.5vw;\n}\n\n.contenedor {\n  padding: 20px 0px;\n  display: flex;\n  justify-content: space-evenly;\n  flex-flow: wrap;\n}\n\n.contener-categoria {\n  display: flex;\n}\n\n.div-categoria {\n  width: 27vw;\n  display: block;\n  text-align: center;\n  margin: 10px 0px;\n}\n\n.categoria-imagen {\n  border-radius: 50%;\n  width: 22vw;\n  height: 22vw;\n  box-shadow: 2px 2px 3px 1px #c2c2c2;\n  margin: 5px;\n}\n\n.nombre-producto {\n  font-family: var(--ion-font-family);\n  font-weight: bold;\n  color: var(--ion-color-gris-oscuro);\n  font-size: 12px;\n  margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhcy9EOlxcZ2l0XFxDYWJ1dG9Gcm9udC9zcmNcXGFwcFxcY2F0ZWdvcmlhc1xcY2F0ZWdvcmlhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztBQ0NmOztBREVBO0VBQ0ksMkNBQTJDO0FDQy9DOztBREVBO0VBQ0ksaUJBQWlCO0FDQ3JCOztBREVBO0VBQ0ksbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQ0NwQjs7QURFQTtFQUNJLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7QUNDbkI7O0FERUE7RUFDSSxhQUFhO0FDQ2pCOztBREVBO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBaUI7RUFDakIsZ0JBQWdCO0FDQ3BCOztBREVBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFdBQVc7QUNDZjs7QURFQTtFQUNJLG1DQUFtQztFQUNwQyxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixXQUNIO0FDQUEiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWFzL2NhdGVnb3JpYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItcGFnZXtcclxuICAgIG1hcmdpbjogMjBweCAzMHB4O1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICBmb250LXNpemU6IDYuNXZ3O1xyXG59XHJcblxyXG4uY29udGVuZWRvcntcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG59XHJcblxyXG4uY29udGVuZXItY2F0ZWdvcmlhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRpdi1jYXRlZ29yaWF7ICAgXHJcbiAgICB3aWR0aDogMjd2dztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcmlhLWltYWdlbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgXHJcbiAgICB3aWR0aDogMjJ2dztcclxuICAgIGhlaWdodDogMjJ2dztcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDFweCAjYzJjMmMyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5ub21icmUtcHJvZHVjdG97XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3Jpcy1vc2N1cm8pO1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiAgIG1hcmdpbjowcHhcclxufSIsImlvbi1oZWFkZXIge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3ItcGFnZSB7XG4gIG1hcmdpbjogMjBweCAzMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogNi41dnc7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWZsb3c6IHdyYXA7XG59XG5cbi5jb250ZW5lci1jYXRlZ29yaWEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWNhdGVnb3JpYSB7XG4gIHdpZHRoOiAyN3Z3O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uY2F0ZWdvcmlhLWltYWdlbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIydnc7XG4gIGhlaWdodDogMjJ2dztcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMXB4ICNjMmMyYzI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ubm9tYnJlLXByb2R1Y3RvIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyaXMtb3NjdXJvKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/categorias/categorias.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/categorias/categorias.page.ts ***!
    \***********************************************/

  /*! exports provided: CategoriasPage */

  /***/
  function srcAppCategoriasCategoriasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPage", function () {
      return CategoriasPage;
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
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _servicios_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../servicios/producto.service */
    "./src/app/servicios/producto.service.ts");

    var CategoriasPage = /*#__PURE__*/function () {
      function CategoriasPage(productoService, router, alert, loadingCtrl, storage, modalCtrl) {
        _classCallCheck(this, CategoriasPage);

        this.productoService = productoService;
        this.router = router;
        this.alert = alert;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
      }

      _createClass(CategoriasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          console.log("refresh");
          this.productoService.getCategoria().subscribe(function (data) {
            console.log(data);
            _this.categorias = data;
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "mostrar",
        value: function mostrar(id) {
          this.storage.set('categoria', id);
          this.router.navigateByUrl('/footer/categorias/detalle-categoria');
          console.log(id);
        }
      }]);

      return CategoriasPage;
    }();

    CategoriasPage.ctorParameters = function () {
      return [{
        type: _servicios_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    CategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categorias',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categorias.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categorias.page.scss */
      "./src/app/categorias/categorias.page.scss"))["default"]]
    })], CategoriasPage);
    /***/
  }
}]);
//# sourceMappingURL=categorias-categorias-module-es5.js.map
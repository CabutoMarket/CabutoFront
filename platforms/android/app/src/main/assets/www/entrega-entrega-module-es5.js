function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrega-entrega-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/entrega/entrega.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entrega/entrega.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEntregaEntregaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"contenedor-page\">\r\n    <div class=\"titulo_atras\">\r\n      <img class=\"atras\" src=\"../assets/img/atras_naranja.png\" size=12 (click)=\"atras()\">\r\n        <ion-label class=\"titulo\">Pagar</ion-label>\r\n    </div>\r\n    <div class=\"total\" >\r\n      <ion-label class=\"A_pagar_header\">Total a Pagar:</ion-label>\r\n      <div style=\"display: flex;\">\r\n        <ion-label style=\"color:#FE3A00;font-size: x-large;padding-left: 10px; margin-top: 0\">$</ion-label>\r\n        <div class=\"A_pagar\" id=\"A_pagar\" *ngIf=\"total\">{{total}}</div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"datos\">Opción de entrega</div>\r\n    <div class=\"button-content\">\r\n      <ion-button class=\"btn-registro\" (click)=domicilio()>\r\n        <p class=\"registro\">A DOMICILIO</p>\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"button-content\">\r\n      <ion-button class=\"btn-registro\" (click)=recoger()>\r\n        <p class=\"registro\">RECOGER PEDIDO</p>\r\n      </ion-button>\r\n    </div>\r\n  </div>  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/entrega/entrega-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/entrega/entrega-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: EntregaPageRoutingModule */

  /***/
  function srcAppEntregaEntregaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntregaPageRoutingModule", function () {
      return EntregaPageRoutingModule;
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


    var _entrega_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./entrega.page */
    "./src/app/entrega/entrega.page.ts");

    var routes = [{
      path: '',
      component: _entrega_page__WEBPACK_IMPORTED_MODULE_3__["EntregaPage"]
    }];

    var EntregaPageRoutingModule = function EntregaPageRoutingModule() {
      _classCallCheck(this, EntregaPageRoutingModule);
    };

    EntregaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EntregaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/entrega/entrega.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/entrega/entrega.module.ts ***!
    \*******************************************/

  /*! exports provided: EntregaPageModule */

  /***/
  function srcAppEntregaEntregaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntregaPageModule", function () {
      return EntregaPageModule;
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


    var _entrega_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./entrega-routing.module */
    "./src/app/entrega/entrega-routing.module.ts");
    /* harmony import */


    var _entrega_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entrega.page */
    "./src/app/entrega/entrega.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var EntregaPageModule = function EntregaPageModule() {
      _classCallCheck(this, EntregaPageModule);
    };

    EntregaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _entrega_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntregaPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_entrega_page__WEBPACK_IMPORTED_MODULE_6__["EntregaPage"]]
    })], EntregaPageModule);
    /***/
  },

  /***/
  "./src/app/entrega/entrega.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/entrega/entrega.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppEntregaEntregaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-page {\n  padding: 20px 30px;\n}\n\n.titulo {\n  font-weight: bold;\n  font-size: larger;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\n.total {\n  display: flex;\n  justify-content: flex-end;\n  align-items: first baseline;\n}\n\n.A_pagar_header {\n  color: #2b85cd;\n  text-align: right;\n  font-size: 70%;\n  font-style: italic;\n}\n\n.A_pagar {\n  color: #FE3A00;\n  font-size: x-large;\n  text-align: left;\n}\n\n.total {\n  border-bottom: 1px solid var(--ion-color-azul-oscuro);\n  margin-top: 2px;\n  padding-bottom: 15px;\n  box-shadow: 0 4px 6px -6px #c2c2c2;\n}\n\n.datos {\n  color: #FE3A00;\n  font-size: smaller;\n  padding-left: 10px;\n  margin: 20px 0px;\n  font-weight: lighter;\n  font-style: italic;\n}\n\nion-button {\n  --background: var(--ion-color-naranja-oscuro);\n  font-size: 0.8rem;\n  --border-radius:5px\r\n;\n}\n\n.button-content {\n  display: flex;\n  justify-content: center;\n  margin: 15% 0;\n}\n\n.btn-registro {\n  width: 50%;\n  line-height: 5px;\n}\n\n.registro {\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.titulo_atras {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.atras {\n  height: 25px;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cmVnYS9EOlxcZ2l0XFxDYWJ1dG9Gcm9udC9zcmNcXGFwcFxcZW50cmVnYVxcZW50cmVnYS5wYWdlLnNjc3MiLCJzcmMvYXBwL2VudHJlZ2EvZW50cmVnYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBMkM7QUNDL0M7O0FEQ0E7RUFDSSxrQkFBa0I7QUNFdEI7O0FEQUE7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsa0JBQWtCO0FDR3RCOztBRERBO0VBQ0ksYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUNJL0I7O0FERkE7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7QUNLdEI7O0FESEE7RUFDSSxjQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQ01wQjs7QURKQTtFQUNJLHFEQUFxRDtFQUNyRCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtDQUFrQztBQ090Qzs7QURMQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWlCO0FDUXJCOztBREpBO0VBQ0ksNkNBQWE7RUFDYixpQkFBaUI7RUFDakI7QUFBZ0I7QUNRcEI7O0FETEE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7QUNRakI7O0FETkU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FDU3BCOztBRFBFO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7QUNVeEI7O0FEUEU7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQ1V2Qjs7QURSQTtFQUNJLFlBQVk7QUNXaEIiLCJmaWxlIjoic3JjL2FwcC9lbnRyZWdhL2VudHJlZ2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbmVkb3ItcGFnZXtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG4udGl0dWxve1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnRvdGFse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XHJcbn1cclxuLkFfcGFnYXJfaGVhZGVye1xyXG4gICAgY29sb3I6ICMyYjg1Y2Q7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5BX3BhZ2Fye1xyXG4gICAgY29sb3I6I0ZFM0EwMDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRvdGFse1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtNnB4ICNjMmMyYzI7XHJcbn1cclxuLmRhdG9ze1xyXG4gICAgY29sb3I6ICNGRTNBMDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LXN0eWxlOml0YWxpYztcclxufVxyXG5cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czo1cHhcclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNSUgMDtcclxuICB9XHJcbiAgLmJ0bi1yZWdpc3Ryb3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogNXB4O1xyXG4gIH1cclxuICAucmVnaXN0cm97XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvX2F0cmFze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmF0cmFze1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW5lZG9yLXBhZ2Uge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG5cbi50aXR1bG8ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udG90YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XG59XG5cbi5BX3BhZ2FyX2hlYWRlciB7XG4gIGNvbG9yOiAjMmI4NWNkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiA3MCU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLkFfcGFnYXIge1xuICBjb2xvcjogI0ZFM0EwMDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udG90YWwge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC02cHggI2MyYzJjMjtcbn1cblxuLmRhdG9zIHtcbiAgY29sb3I6ICNGRTNBMDA7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOjVweFxyXG47XG59XG5cbi5idXR0b24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDE1JSAwO1xufVxuXG4uYnRuLXJlZ2lzdHJvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDVweDtcbn1cblxuLnJlZ2lzdHJvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnRpdHVsb19hdHJhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmF0cmFzIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/entrega/entrega.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/entrega/entrega.page.ts ***!
    \*****************************************/

  /*! exports provided: EntregaPage */

  /***/
  function srcAppEntregaEntregaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntregaPage", function () {
      return EntregaPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var EntregaPage = /*#__PURE__*/function () {
      function EntregaPage(storage, router, navCtrlr) {
        _classCallCheck(this, EntregaPage);

        this.storage = storage;
        this.router = router;
        this.navCtrlr = navCtrlr;
      }

      _createClass(EntregaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          console.log("didEnter");
          this.storage.get('total').then(function (val) {
            console.log(val);
            _this.total = val;
          });
        }
      }, {
        key: "domicilio",
        value: function domicilio() {
          this.storage.set('tipoEntrega', 'Domicilio');
          this.router.navigate(['/footer/domicilio']);
        }
      }, {
        key: "recoger",
        value: function recoger() {
          this.storage.set('tipoEntrega', 'Local');
          this.router.navigate(['/footer/recoger-pedido']);
        }
      }, {
        key: "atras",
        value: function atras() {
          var animations = {
            animated: true,
            animationDirection: "back"
          };
          this.navCtrlr.back(animations);
        }
      }]);

      return EntregaPage;
    }();

    EntregaPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    EntregaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entrega',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./entrega.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/entrega/entrega.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./entrega.page.scss */
      "./src/app/entrega/entrega.page.scss"))["default"]]
    })], EntregaPage);
    /***/
  }
}]);
//# sourceMappingURL=entrega-entrega-module-es5.js.map
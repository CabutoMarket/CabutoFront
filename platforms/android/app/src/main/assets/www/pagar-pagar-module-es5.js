function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagar-pagar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagar/pagar.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagar/pagar.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagarPagarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content>\r\n  <div class=\"contenedor-page\">\r\n    <div class=\"titulo_atras\">\r\n      <img class=\"atras\" src=\"../assets/img/atras_naranja.png\" size=12 (click)=\"atras()\">\r\n        <ion-label class=\"titulo\">Pagar</ion-label>\r\n    </div>\r\n    <div class=\"total\" >\r\n      <ion-label class=\"A_pagar_header\">Total a Pagar:</ion-label>\r\n      <div style=\"display: flex;\">\r\n        <ion-label style=\"color:#FE3A00;font-size: x-large;padding-left: 10px; margin-top: 0\">$</ion-label>\r\n        <div class=\"A_pagar\" id=\"A_pagar\" *ngIf=\"total\">{{total}}</div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"datos\">Confirmar datos</div>\r\n    <div *ngIf=\"perfil\" >\r\n      <div class=\"campos\">\r\n        <ion-label class=\"left\">Nombres: </ion-label>\r\n        <ion-label class=\"right\">{{perfil.nombre}} {{perfil.apellido}}</ion-label>\r\n      </div>\r\n      <div class=\"campos\">\r\n        <ion-label class=\"left\">Cédula: </ion-label>\r\n        <ion-label class=\"right\">{{perfil.cedula}}</ion-label>\r\n      </div>\r\n      <div class=\"campos\">\r\n        <ion-label class=\"left\">Dirección: </ion-label>\r\n        <ion-label class=\"right\">{{perfil.direccion}}</ion-label>\r\n      </div>\r\n      <div class=\"campos\">\r\n        <ion-label class=\"left\">Teléfono: </ion-label>\r\n        <ion-label class=\"right\">{{perfil.telefono}}</ion-label>\r\n      </div>\r\n      <div class=\"campos\">\r\n        <ion-label class=\"left\">Correo Electrónico: </ion-label>\r\n        <ion-label class=\"right\">{{perfil.correo}}</ion-label>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"button-content\">\r\n      <ion-button class=\"btn-registro\" (click)=editar()>\r\n        <p class=\"registro\">CAMBIAR PERFIL</p>\r\n      </ion-button>\r\n      <ion-button class=\"btn-registro\" (click)=confirmar()>\r\n        <p class=\"registro\">CONFIRMAR</p>\r\n      </ion-button>\r\n    </div>\r\n  </div>  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pagar/pagar-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pagar/pagar-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PagarPageRoutingModule */

  /***/
  function srcAppPagarPagarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagarPageRoutingModule", function () {
      return PagarPageRoutingModule;
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


    var _pagar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pagar.page */
    "./src/app/pagar/pagar.page.ts");

    var routes = [{
      path: '',
      component: _pagar_page__WEBPACK_IMPORTED_MODULE_3__["PagarPage"]
    }];

    var PagarPageRoutingModule = function PagarPageRoutingModule() {
      _classCallCheck(this, PagarPageRoutingModule);
    };

    PagarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PagarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagar/pagar.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pagar/pagar.module.ts ***!
    \***************************************/

  /*! exports provided: PagarPageModule */

  /***/
  function srcAppPagarPagarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagarPageModule", function () {
      return PagarPageModule;
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


    var _pagar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pagar-routing.module */
    "./src/app/pagar/pagar-routing.module.ts");
    /* harmony import */


    var _pagar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pagar.page */
    "./src/app/pagar/pagar.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var PagarPageModule = function PagarPageModule() {
      _classCallCheck(this, PagarPageModule);
    };

    PagarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pagar_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagarPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_pagar_page__WEBPACK_IMPORTED_MODULE_6__["PagarPage"]]
    })], PagarPageModule);
    /***/
  },

  /***/
  "./src/app/pagar/pagar.page.scss":
  /*!***************************************!*\
    !*** ./src/app/pagar/pagar.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagarPagarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-page {\n  padding: 20px 30px;\n}\n\n.titulo_atras {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.atras {\n  height: 25px;\n}\n\n.titulo {\n  font-weight: bold;\n  font-size: larger;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\n.total {\n  display: flex;\n  justify-content: flex-end;\n  align-items: first baseline;\n}\n\n.A_pagar_header {\n  color: #2b85cd;\n  text-align: right;\n  font-size: 70%;\n  font-style: italic;\n}\n\n.A_pagar {\n  color: #FE3A00;\n  font-size: x-large;\n  text-align: left;\n}\n\n.total {\n  border-bottom: 1px solid var(--ion-color-azul-oscuro);\n  margin-top: 2px;\n  padding-bottom: 15px;\n  box-shadow: 0 4px 6px -6px #c2c2c2;\n}\n\n.datos {\n  color: #FE3A00;\n  font-size: smaller;\n  padding-left: 10px;\n  margin: 20px 0px;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n.campos {\n  display: table;\n  margin: 5px auto;\n}\n\n.campos > ion-label {\n  display: table-cell;\n}\n\n.left {\n  text-align: right;\n  font-size: 3vw;\n  color: gray;\n  width: 20rem;\n  padding-right: 10px;\n}\n\n.right {\n  text-align: left;\n  width: 60%;\n  font-size: 4vw;\n  color: var(--ion-color-azul-oscuro);\n}\n\nion-button {\n  --background: var(--ion-color-naranja-oscuro);\n  font-size: 0.8rem;\n  --border-radius:5px\r\n;\n}\n\n.button-content {\n  display: flex;\n  justify-content: space-between;\n  margin: 15% 0;\n}\n\n.btn-registro {\n  width: 45%;\n  line-height: 0px;\n}\n\n.registro {\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnYXIvRDpcXGdpdFxcQ2FidXRvRnJvbnQvc3JjXFxhcHBcXHBhZ2FyXFxwYWdhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2FyL3BhZ2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUEyQztBQ0MvQzs7QURDQTtFQUNJLGtCQUFrQjtBQ0V0Qjs7QURDQTtFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FDRXZCOztBREFBO0VBQ0ksWUFBWTtBQ0doQjs7QURBQTtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixrQkFBa0I7QUNHdEI7O0FEREE7RUFDSSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQ0kvQjs7QURGQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQ0t0Qjs7QURIQTtFQUNJLGNBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FDTXBCOztBREpBO0VBQ0kscURBQXFEO0VBQ3JELGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0NBQWtDO0FDT3RDOztBRExBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBaUI7QUNRckI7O0FETkE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0FDU3BCOztBRFBBO0VBQ0ksbUJBQW1CO0FDVXZCOztBRFJBO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFvQjtBQ1d4Qjs7QURUQTtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsY0FBYztFQUNkLG1DQUFrQztBQ1l0Qzs7QURUQTtFQUNJLDZDQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCO0FBQWdCO0FDYXBCOztBRFZBO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0FDYWpCOztBRFhFO0VBQ0UsVUFBUztFQUNULGdCQUFnQjtBQ2NwQjs7QURaRTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0FDZXhCIiwiZmlsZSI6InNyYy9hcHAvcGFnYXIvcGFnYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbmVkb3ItcGFnZXtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG5cclxuLnRpdHVsb19hdHJhc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5hdHJhc3tcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi50b3RhbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZpcnN0IGJhc2VsaW5lO1xyXG59XHJcbi5BX3BhZ2FyX2hlYWRlcntcclxuICAgIGNvbG9yOiAjMmI4NWNkO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4uQV9wYWdhcntcclxuICAgIGNvbG9yOiNGRTNBMDA7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50b3RhbHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggLTZweCAjYzJjMmMyO1xyXG59XHJcbi5kYXRvc3tcclxuICAgIGNvbG9yOiAjRkUzQTAwO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbn1cclxuLmNhbXBvc3tcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG4uY2FtcG9zID4gaW9uLWxhYmVse1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG4ubGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgY29sb3I6Z3JheTtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6ICAxMHB4O1xyXG59XHJcbi5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6NXB4XHJcbn1cclxuXHJcbi5idXR0b24tY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDE1JSAwO1xyXG4gIH1cclxuICAuYnRuLXJlZ2lzdHJve1xyXG4gICAgd2lkdGg6NDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICB9XHJcbiAgLnJlZ2lzdHJve1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW5lZG9yLXBhZ2Uge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG5cbi50aXR1bG9fYXRyYXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hdHJhcyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi50b3RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcbn1cblxuLkFfcGFnYXJfaGVhZGVyIHtcbiAgY29sb3I6ICMyYjg1Y2Q7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDcwJTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uQV9wYWdhciB7XG4gIGNvbG9yOiAjRkUzQTAwO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3RhbCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTZweCAjYzJjMmMyO1xufVxuXG4uZGF0b3Mge1xuICBjb2xvcjogI0ZFM0EwMDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jYW1wb3Mge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLmNhbXBvcyA+IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogZ3JheTtcbiAgd2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ucmlnaHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNjAlO1xuICBmb250LXNpemU6IDR2dztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICAtLWJvcmRlci1yYWRpdXM6NXB4XHJcbjtcbn1cblxuLmJ1dHRvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDE1JSAwO1xufVxuXG4uYnRuLXJlZ2lzdHJvIHtcbiAgd2lkdGg6IDQ1JTtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLnJlZ2lzdHJvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pagar/pagar.page.ts":
  /*!*************************************!*\
    !*** ./src/app/pagar/pagar.page.ts ***!
    \*************************************/

  /*! exports provided: PagarPage */

  /***/
  function srcAppPagarPagarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagarPage", function () {
      return PagarPage;
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


    var _servicios_perfil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../servicios/perfil.service */
    "./src/app/servicios/perfil.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../aviso/incorrecto/incorrecto.page */
    "./src/app/aviso/incorrecto/incorrecto.page.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/global */
    "./src/app/global.ts");

    var PagarPage = /*#__PURE__*/function () {
      function PagarPage(storage, perfilService, modalController, navCtrlr, router) {
        _classCallCheck(this, PagarPage);

        this.storage = storage;
        this.perfilService = perfilService;
        this.modalController = modalController;
        this.navCtrlr = navCtrlr;
        this.router = router;
      }

      _createClass(PagarPage, [{
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
          this.storage.get('perfil').then(function (val) {
            if (val == null) {
              _this.storage.get('correo').then(function (val) {
                _this.correo = val;

                if (_this.correo != null) {
                  _this.perfilService.getPerfil(_this.correo).subscribe(function (data) {
                    _this.perfil = data[0];
                    console.log(data);

                    if (_this.perfil.telefono == "NONE") {
                      _this.perfil.telefono = "";
                    }

                    if (_this.perfil.direccion == "NONE") {
                      _this.perfil.direccion = "";
                    }

                    if (Object.keys(_this.perfil).length === 0) {
                      _this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
                    } else {
                      _this.storage.set('perfil', _this.perfil);
                    }
                  }, function (err) {
                    _this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
                  });
                } else {
                  _this.correo = "";
                }
              });
            } else {
              console.log(val);
              _this.perfil = val;
            }
          });
        }
      }, {
        key: "mensajeIncorrecto",
        value: function mensajeIncorrecto(titulo, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_5__["IncorrectoPage"],
                      cssClass: 'IncorrectoProducto',
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
        key: "editar",
        value: function editar() {
          var navigationExtras = {
            state: {
              user: this.perfil,
              url: this.url
            }
          };
          src_app_global__WEBPACK_IMPORTED_MODULE_7__["login"].pago = true;
          this.router.navigate(['/footer/perfil/editar-perfil'], navigationExtras);
        }
      }, {
        key: "confirmar",
        value: function confirmar() {
          this.router.navigate(['/footer/entrega']);
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

      return PagarPage;
    }();

    PagarPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _servicios_perfil_service__WEBPACK_IMPORTED_MODULE_2__["PerfilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PagarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pagar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagar/pagar.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pagar.page.scss */
      "./src/app/pagar/pagar.page.scss"))["default"]]
    })], PagarPage);
    /***/
  }
}]);
//# sourceMappingURL=pagar-pagar-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-tarjeta-info-tarjeta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info-tarjeta/info-tarjeta.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info-tarjeta/info-tarjeta.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"contenedor-page\">\r\n    <ion-label class=\"titulo\">Tarjetas</ion-label>\r\n    <div class=\"contener-tarjeta\" *ngFor=\"let tarjeta of tarjetas\">\r\n      <div class=\"div-tarjeta\" >\r\n        <div class=\"borrar_content\"><img src=\"../assets/img/borrar.png\" class=\"borrar\"\r\n          (click)=\"eliminar(tarjeta.token)\"></div>\r\n        <div class=\"contener-columnaI\">\r\n          <img *ngIf=\"tarjeta.type === 'vi'\" src=\"../assets/img/visa.png\">\r\n          <img *ngIf=\"tarjeta.type === 'mc'\" src=\"../assets/img/mastercard.svg\">\r\n          <img *ngIf=\"tarjeta.type === 'ax'\" src=\"../assets/img/amex.svg\">\r\n          <img *ngIf=\"tarjeta.type === 'di'\" src=\"../assets/img/diners.svg\">\r\n          <img *ngIf=\"tarjeta.type === 'dc'\" src=\"../assets/img/discover.svg\">\r\n          <img *ngIf=\"tarjeta.type === 'ms'\" src=\"../assets/img/maestro.svg\">\r\n          <img *ngIf=\"tarjeta.type === 'cs'\" src=\"../assets/img/credisensa.png\">\r\n          <img *ngIf=\"tarjeta.type === 'so'\" src=\"../assets/img/alia.svg\">\r\n          <img *ngIf=\"tarjeta.type === 'up'\" src=\"../assets/img/unionpay.png\">\r\n        </div>\r\n        <div class=\"contener-columna\">\r\n          <h6 class=\"nombre-tarjeta\">\r\n            <span *ngIf=\"tarjeta.type === 'vi'\"> Visa</span>\r\n            <span *ngIf=\"tarjeta.type === 'mc'\">Mastercard</span>\r\n            <span *ngIf=\"tarjeta.type === 'ax'\">American Express</span>\r\n            <span *ngIf=\"tarjeta.type === 'di'\">Diners</span>\r\n            <span *ngIf=\"tarjeta.type === 'dc'\">Discover</span>\r\n            <span *ngIf=\"tarjeta.type === 'ms'\">Maestro</span>\r\n            <span *ngIf=\"tarjeta.type === 'cs'\">Credisensa</span>\r\n            <span *ngIf=\"tarjeta.type === 'so'\">Solidario</span>\r\n            <span *ngIf=\"tarjeta.type === 'up'\">Union Pay</span>\r\n            ****{{tarjeta.number}}\r\n          </h6>\r\n          <p class=\"direccion-tarjeta\">Expira {{tarjeta.expiry_month | number: '2.0-0'}}/{{tarjeta.expiry_year}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"button-content\">\r\n      <div class=\"btn_regresar\"> <img src=\"../assets/img/agregar_2.png\" class=\"atras\" (click)=\"agregar()\"> </div>\r\n    </div>\r\n  </div>  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/info-tarjeta/info-tarjeta-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/info-tarjeta/info-tarjeta-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InfoTarjetaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTarjetaPageRoutingModule", function() { return InfoTarjetaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _info_tarjeta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-tarjeta.page */ "./src/app/info-tarjeta/info-tarjeta.page.ts");




const routes = [
    {
        path: '',
        component: _info_tarjeta_page__WEBPACK_IMPORTED_MODULE_3__["InfoTarjetaPage"]
    }
];
let InfoTarjetaPageRoutingModule = class InfoTarjetaPageRoutingModule {
};
InfoTarjetaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoTarjetaPageRoutingModule);



/***/ }),

/***/ "./src/app/info-tarjeta/info-tarjeta.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/info-tarjeta/info-tarjeta.module.ts ***!
  \*****************************************************/
/*! exports provided: InfoTarjetaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTarjetaPageModule", function() { return InfoTarjetaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _info_tarjeta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-tarjeta-routing.module */ "./src/app/info-tarjeta/info-tarjeta-routing.module.ts");
/* harmony import */ var _info_tarjeta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-tarjeta.page */ "./src/app/info-tarjeta/info-tarjeta.page.ts");







let InfoTarjetaPageModule = class InfoTarjetaPageModule {
};
InfoTarjetaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _info_tarjeta_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoTarjetaPageRoutingModule"]
        ],
        declarations: [_info_tarjeta_page__WEBPACK_IMPORTED_MODULE_6__["InfoTarjetaPage"]]
    })
], InfoTarjetaPageModule);



/***/ }),

/***/ "./src/app/info-tarjeta/info-tarjeta.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/info-tarjeta/info-tarjeta.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-page {\n  padding: 20px 30px;\n}\n\n.titulo {\n  font-weight: bold;\n  font-size: larger;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\n.contener-tarjeta {\n  margin: 20px 10px;\n}\n\n.div-tarjeta {\n  display: flex;\n  flex-flow: row nowrap;\n  /* Align on the same line */\n  justify-content: center;\n  align-items: center;\n  box-shadow: 3px 3px 3px 3px #c2c2c2;\n  border-radius: 15px;\n  height: 85px;\n}\n\n.contener-columnaI {\n  float: right;\n  position: absolute;\n  padding-right: 20px;\n  text-align: right;\n  left: 70px;\n  justify-content: flex-end;\n}\n\n.contener-columnaI img {\n  width: 3rem;\n}\n\n.contener-columna {\n  display: block;\n  position: absolute;\n  left: 150px;\n}\n\n.contener-columna .nombre-tarjeta {\n  color: var(--ion-color-azul-oscuro);\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 0.85rem;\n}\n\n.contener-columna .direccion-tarjeta {\n  font-family: 'MyriadPro-Light' !important;\n  color: var(--ion-color-gris-oscuro);\n  font-weight: normal;\n  font-size: 0.7rem;\n  margin-bottom: 2px;\n  margin-top: 0px;\n}\n\n.button-content {\n  display: flex;\n  justify-content: flex-end;\n  bottom: 5%;\n  left: 0%;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  padding: 0px 25px;\n}\n\n.borrar_content {\n  width: 1rem;\n  height: 1.2rem;\n  left: 35%;\n  top: 0%;\n  position: relative;\n  z-index: 9;\n}\n\n.borrar_content > img {\n  height: 1.2rem;\n}\n\n.btn-regresar {\n  text-align: left;\n  width: 7rem;\n}\n\n.atras {\n  height: 2rem;\n  width: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby10YXJqZXRhL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxpbmZvLXRhcmpldGFcXGluZm8tdGFyamV0YS5wYWdlLnNjc3MiLCJzcmMvYXBwL2luZm8tdGFyamV0YS9pbmZvLXRhcmpldGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQTJDO0FDQy9DOztBRENBO0VBQ0ksa0JBQWtCO0FDRXRCOztBREFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ0d0Qjs7QUREQTtFQUNJLGlCQUFpQjtBQ0lyQjs7QUREQTtFQUNJLGFBQWE7RUFDYixxQkFBcUI7RUFBRSwyQkFBQTtFQUN2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsWUFBWTtBQ0toQjs7QURGQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YseUJBQXlCO0FDSzdCOztBRFhBO0VBUVEsV0FBVztBQ09uQjs7QURIQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztBQ01mOztBRFRBO0VBS1EsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FDUTFCOztBRGhCQTtFQVdRLHlDQUF5QztFQUN6QyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQ1N2Qjs7QURMQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7QUNRckI7O0FETEE7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLFNBQVM7RUFDVCxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFVBQVU7QUNRZDs7QURMQTtFQUNJLGNBQWM7QUNRbEI7O0FETEE7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztBQ1FmOztBRE5BO0VBQ0ksWUFBWTtFQUNaLFdBQVc7QUNTZiIsImZpbGUiOiJzcmMvYXBwL2luZm8tdGFyamV0YS9pbmZvLXRhcmpldGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbmVkb3ItcGFnZXtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG4udGl0dWxve1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmNvbnRlbmVyLXRhcmpldGF7XHJcbiAgICBtYXJnaW46IDIwcHggMTBweDtcclxufVxyXG5cclxuLmRpdi10YXJqZXRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDsgLyogQWxpZ24gb24gdGhlIHNhbWUgbGluZSAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICNjMmMyYzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4uY29udGVuZXItY29sdW1uYUl7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsZWZ0OiA3MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbmVyLWNvbHVtbmF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1MHB4O1xyXG4gICAgLm5vbWJyZS10YXJqZXRhe1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgfVxyXG4gICAgLmRpcmVjY2lvbi10YXJqZXRhe1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvLUxpZ2h0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3Jpcy1vc2N1cm8pO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLmJvcnJhcl9jb250ZW50e1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uYm9ycmFyX2NvbnRlbnQgPiBpbWd7XHJcbiAgICBoZWlnaHQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmJ0bi1yZWdyZXNhcntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogN3JlbTtcclxufVxyXG4uYXRyYXN7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMnJlbTtcclxufSIsIioge1xuICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xufVxuXG4uY29udGVuZWRvci1wYWdlIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNvbnRlbmVyLXRhcmpldGEge1xuICBtYXJnaW46IDIwcHggMTBweDtcbn1cblxuLmRpdi10YXJqZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAvKiBBbGlnbiBvbiB0aGUgc2FtZSBsaW5lICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggI2MyYzJjMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuXG4uY29udGVuZXItY29sdW1uYUkge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxlZnQ6IDcwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jb250ZW5lci1jb2x1bW5hSSBpbWcge1xuICB3aWR0aDogM3JlbTtcbn1cblxuLmNvbnRlbmVyLWNvbHVtbmEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNTBweDtcbn1cblxuLmNvbnRlbmVyLWNvbHVtbmEgLm5vbWJyZS10YXJqZXRhIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5jb250ZW5lci1jb2x1bW5hIC5kaXJlY2Npb24tdGFyamV0YSB7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvLUxpZ2h0JyAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyaXMtb3NjdXJvKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYnV0dG9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBib3R0b206IDUlO1xuICBsZWZ0OiAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG59XG5cbi5ib3JyYXJfY29udGVudCB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDEuMnJlbTtcbiAgbGVmdDogMzUlO1xuICB0b3A6IDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5ib3JyYXJfY29udGVudCA+IGltZyB7XG4gIGhlaWdodDogMS4ycmVtO1xufVxuXG4uYnRuLXJlZ3Jlc2FyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDdyZW07XG59XG5cbi5hdHJhcyB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/info-tarjeta/info-tarjeta.page.ts":
/*!***************************************************!*\
  !*** ./src/app/info-tarjeta/info-tarjeta.page.ts ***!
  \***************************************************/
/*! exports provided: InfoTarjetaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTarjetaPage", function() { return InfoTarjetaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tarjeta_nueva_tarjeta_nueva_tarjeta_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tarjeta/nueva-tarjeta/nueva-tarjeta.page */ "./src/app/tarjeta/nueva-tarjeta/nueva-tarjeta.page.ts");
/* harmony import */ var _servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicios/tarjeta.service */ "./src/app/servicios/tarjeta.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");
/* harmony import */ var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../aviso/correcto/correcto.page */ "./src/app/aviso/correcto/correcto.page.ts");









let InfoTarjetaPage = class InfoTarjetaPage {
    constructor(alertCtrl, storage, modalController, tarjetaService, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.modalController = modalController;
        this.tarjetaService = tarjetaService;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log("didEnter");
        this.storage.get('id').then((val) => {
            if (val != null) {
                this.id = val;
                this.datos();
            }
            else {
                this.mensajeIncorrecto("Inicie sesión", "Debe iniciar sesión para consultar sus tarjetas.");
            }
        });
    }
    agregar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _tarjeta_nueva_tarjeta_nueva_tarjeta_page__WEBPACK_IMPORTED_MODULE_4__["NuevaTarjetaPage"],
                cssClass: 'modal-tarjeta'
            });
            modal.onDidDismiss().then((data) => {
                this.datos();
            });
            return yield modal.present();
        });
    }
    presentConfirm(message, cancelText, okText) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    message: message,
                    cssClass: 'alertClass',
                    buttons: [
                        {
                            text: okText,
                            handler: (ok) => {
                                resolve('ok');
                            }
                        },
                        {
                            text: cancelText,
                            handler: (cancel) => {
                                resolve('cancel');
                            }
                        }
                    ]
                });
                alert.present();
            }));
        });
    }
    eliminar(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentConfirm('¿Desea eliminar esta tarjeta?', 'No', 'Si').then(res => {
                if (res === 'ok') {
                    this.borrar(token);
                }
            });
        });
    }
    borrar(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let datos = {
                "card": {
                    "token": token
                },
                "user": {
                    "id": this.id + ""
                }
            };
            yield this.showLoading2();
            this.tarjetaService.eliminarTarjeta(datos)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                if (data["message"] === "card deleted") {
                    this.mensajeCorrecto("Tarjeta eliminada", "Su tarjeta ha sido eliminada con éxito.");
                    this.datos();
                }
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
    mensajeIncorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_7__["IncorrectoPage"],
                cssClass: 'IncorrectoProducto',
                componentProps: {
                    'titulo': titulo,
                    'mensaje': mensaje
                }
            });
            return yield modal.present();
        });
    }
    mensajeCorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_8__["CorrectoPage"],
                cssClass: 'CorrectoProducto',
                componentProps: {
                    'titulo': titulo,
                    'mensaje': mensaje
                }
            });
            return yield modal.present();
        });
    }
    showLoading2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Loading.....'
            });
            yield this.loading.present();
        });
    }
    datos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            this.tarjetaService.getTarjetas(this.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                console.log(data);
                this.tarjetas = data["cards"];
                if (Object.keys(this.tarjetas).length === 0) {
                    this.mensajeIncorrecto("No tiene tarjetas", "No cuenta con tarjetas guardadas");
                }
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
};
InfoTarjetaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_5__["TarjetaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
InfoTarjetaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-tarjeta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./info-tarjeta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info-tarjeta/info-tarjeta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./info-tarjeta.page.scss */ "./src/app/info-tarjeta/info-tarjeta.page.scss")).default]
    })
], InfoTarjetaPage);



/***/ })

}]);
//# sourceMappingURL=info-tarjeta-info-tarjeta-module-es2015.js.map
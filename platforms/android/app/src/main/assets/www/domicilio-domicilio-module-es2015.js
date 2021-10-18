(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["domicilio-domicilio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/domicilio/domicilio.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/domicilio/domicilio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n  <div class=\"contenedor-page\">\r\n    <div class=\"titulo_atras\">\r\n      <img class=\"atras\" src=\"../assets/img/atras_naranja.png\" size=12 (click)=\"atras()\">\r\n        <ion-label class=\"titulo\">Pagar</ion-label>\r\n    </div>\r\n    <div class=\"total\" >\r\n      <ion-label class=\"A_pagar_header\">Total a Pagar:</ion-label>\r\n      <div style=\"display: flex;\">\r\n        <ion-label style=\"color:#FE3A00;font-size: x-large;padding-left: 10px; margin-top: 0\">$</ion-label>\r\n        <div class=\"A_pagar\" id=\"A_pagar\" *ngIf=\"total\">{{total}}</div>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n    <div class=\"button-content\">\r\n      <div class=\"datos\">A Domicilio</div>\r\n      <ion-button class=\"btn-registro\" (click)=domicilio()>\r\n        <p class=\"registro\">DIRECCIONES GUARDADAS</p>\r\n      </ion-button>\r\n    </div>\r\n    <div #mapaUbicacion class=\"mapa\">\r\n\r\n    </div>\r\n\r\n    <form #form=\"ngForm\" (ngSubmit)=\"guardar(form)\">\r\n      <ion-item >\r\n        <ion-input id=\"1\" name=\"direccion\" type=\"text\" placeholder=\"Dirección\" [(ngModel)]=\"direccion\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-textarea name=\"descripcion\" type=\"text\" placeholder=\"Descripción\" ngModel  rows=\"5\" required></ion-textarea>\r\n      </ion-item>\r\n    <div class=\"button-content botones\">\r\n\r\n      <ion-button class=\"btn-registro\" type=submit>\r\n        <p class=\"registro\">Continuar</p>\r\n      </ion-button>\r\n    </div>\r\n    </form>\r\n  </div>  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/domicilio/domicilio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/domicilio/domicilio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DomicilioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomicilioPageRoutingModule", function() { return DomicilioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _domicilio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domicilio.page */ "./src/app/domicilio/domicilio.page.ts");




const routes = [
    {
        path: '',
        component: _domicilio_page__WEBPACK_IMPORTED_MODULE_3__["DomicilioPage"]
    }
];
let DomicilioPageRoutingModule = class DomicilioPageRoutingModule {
};
DomicilioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DomicilioPageRoutingModule);



/***/ }),

/***/ "./src/app/domicilio/domicilio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/domicilio/domicilio.module.ts ***!
  \***********************************************/
/*! exports provided: DomicilioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomicilioPageModule", function() { return DomicilioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _domicilio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domicilio-routing.module */ "./src/app/domicilio/domicilio-routing.module.ts");
/* harmony import */ var _domicilio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domicilio.page */ "./src/app/domicilio/domicilio.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");









let DomicilioPageModule = class DomicilioPageModule {
};
DomicilioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _domicilio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DomicilioPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_domicilio_page__WEBPACK_IMPORTED_MODULE_6__["DomicilioPage"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]]
    })
], DomicilioPageModule);



/***/ }),

/***/ "./src/app/domicilio/domicilio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/domicilio/domicilio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-page {\n  padding: 20px 30px;\n}\n\n.titulo {\n  font-weight: bold;\n  font-size: larger;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\n.total {\n  display: flex;\n  justify-content: flex-end;\n  align-items: first baseline;\n}\n\n.A_pagar_header {\n  color: #2b85cd;\n  text-align: right;\n  font-size: 70%;\n  font-style: italic;\n}\n\n.A_pagar {\n  color: #FE3A00;\n  font-size: x-large;\n  text-align: left;\n}\n\n.total {\n  border-bottom: 1px solid var(--ion-color-azul-oscuro);\n  margin-top: 2px;\n  padding-bottom: 15px;\n  box-shadow: 0 4px 6px -6px #c2c2c2;\n}\n\n.datos {\n  color: #FE3A00;\n  font-size: smaller;\n  padding-left: 10px;\n  margin: 20px 0px;\n  font-weight: lighter;\n  font-style: italic;\n}\n\nion-button {\n  --background: var(--ion-color-naranja-oscuro);\n  font-size: 0.6rem;\n  --border-radius:5px\r\n;\n}\n\n.button-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n}\n\n.btn-registro {\n  width: 40%;\n  line-height: 5px;\n}\n\n.registro {\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.titulo_atras {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.atras {\n  height: 25px;\n}\n\n.mapa {\n  height: 40vh;\n  margin: auto;\n}\n\n.botones {\n  display: flex;\n  justify-content: flex-end;\n  bottom: 5%;\n  left: 0%;\n  align-items: center;\n  position: relative;\n  width: 100%;\n}\n\n.btn-registro {\n  --background: var(--ion-color-naranja-oscuro);\n}\n\n.registro {\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nion-item {\n  margin: 15px 0px 17px 0px;\n  --background: #e7e7e7;\n  --color: rgb(112, 106, 106);\n  font-size: 1rem;\n  border-radius: 10px;\n  width: 100%;\n  --highlight-height: 0px !important;\n}\n\nion-item ion-input {\n  color: var(--ion-color-azul-oscuro);\n  margin-left: 10px;\n}\n\nion-item ion-textarea {\n  color: var(--ion-color-azul-oscuro);\n  margin-left: 10px;\n  height: 150px;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9taWNpbGlvL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxkb21pY2lsaW9cXGRvbWljaWxpby5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvbWljaWxpby9kb21pY2lsaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQTJDO0FDQy9DOztBRENBO0VBQ0ksa0JBQWtCO0FDRXRCOztBREFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ0d0Qjs7QUREQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsMkJBQTJCO0FDSS9COztBREZBO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FDS3RCOztBREhBO0VBQ0ksY0FBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNNcEI7O0FESkE7RUFDSSxxREFBcUQ7RUFDckQsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQ0FBa0M7QUNPdEM7O0FETEE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFpQjtBQ1FyQjs7QURKQTtFQUNJLDZDQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCO0FBQWdCO0FDUXBCOztBRExBO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztBQ1FiOztBRE5BO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQjtBQ1NwQjs7QURQQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0FDVXhCOztBRFBBO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUNVdkI7O0FEUkE7RUFDSSxZQUFZO0FDV2hCOztBRFJBO0VBQ0ksWUFBWTtFQUNaLFlBQVc7QUNXZjs7QURSQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUNXZjs7QURSQTtFQUNJLDZDQUFhO0FDV2pCOztBRFRBO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7QUNZeEI7O0FEVEE7RUFDSSx5QkFBeUI7RUFDekIscUJBQWE7RUFDYiwyQkFBUTtFQUNSLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtDQUFtQjtBQ1l2Qjs7QURuQkE7RUFTUSxtQ0FBbUM7RUFDbkMsaUJBQWdCO0FDY3hCOztBRHhCQTtFQWFRLG1DQUFtQztFQUNuQyxpQkFBZ0I7RUFDaEIsYUFBYTtBQ2VyQiIsImZpbGUiOiJzcmMvYXBwL2RvbWljaWxpby9kb21pY2lsaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbmVkb3ItcGFnZXtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG4udGl0dWxve1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnRvdGFse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XHJcbn1cclxuLkFfcGFnYXJfaGVhZGVye1xyXG4gICAgY29sb3I6ICMyYjg1Y2Q7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5BX3BhZ2Fye1xyXG4gICAgY29sb3I6I0ZFM0EwMDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRvdGFse1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtNnB4ICNjMmMyYzI7XHJcbn1cclxuLmRhdG9ze1xyXG4gICAgY29sb3I6ICNGRTNBMDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LXN0eWxlOml0YWxpYztcclxufVxyXG5cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czo1cHhcclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmJ0bi1yZWdpc3Ryb3tcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBsaW5lLWhlaWdodDogNXB4O1xyXG59XHJcbi5yZWdpc3Ryb3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRpdHVsb19hdHJhc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5hdHJhc3tcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLm1hcGF7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLmJvdG9uZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0bi1yZWdpc3Ryb3tcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcclxufVxyXG4ucmVnaXN0cm97XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxN3B4IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIC0tY29sb3I6IHJnYigxMTIsIDEwNiwgMTA2KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIH1cclxuICAgIGlvbi10ZXh0YXJlYXtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbn0iLCIqIHtcbiAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3ItcGFnZSB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi50b3RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcbn1cblxuLkFfcGFnYXJfaGVhZGVyIHtcbiAgY29sb3I6ICMyYjg1Y2Q7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDcwJTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uQV9wYWdhciB7XG4gIGNvbG9yOiAjRkUzQTAwO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3RhbCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTZweCAjYzJjMmMyO1xufVxuXG4uZGF0b3Mge1xuICBjb2xvcjogI0ZFM0EwMDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICAtLWJvcmRlci1yYWRpdXM6NXB4XHJcbjtcbn1cblxuLmJ1dHRvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbi5idG4tcmVnaXN0cm8ge1xuICB3aWR0aDogNDAlO1xuICBsaW5lLWhlaWdodDogNXB4O1xufVxuXG4ucmVnaXN0cm8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4udGl0dWxvX2F0cmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYXRyYXMge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5tYXBhIHtcbiAgaGVpZ2h0OiA0MHZoO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ib3RvbmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYm90dG9tOiA1JTtcbiAgbGVmdDogMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tcmVnaXN0cm8ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XG59XG5cbi5yZWdpc3RybyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luOiAxNXB4IDBweCAxN3B4IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZTdlN2U3O1xuICAtLWNvbG9yOiByZ2IoMTEyLCAxMDYsIDEwNik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/domicilio/domicilio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/domicilio/domicilio.page.ts ***!
  \*********************************************/
/*! exports provided: DomicilioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomicilioPage", function() { return DomicilioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _direccion_direccion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../direccion/direccion.page */ "./src/app/direccion/direccion.page.ts");
/* harmony import */ var _servicios_direccion_entrega_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicios/direccion-entrega.service */ "./src/app/servicios/direccion-entrega.service.ts");
/* harmony import */ var _servicios_cobertura_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../servicios/cobertura.service */ "./src/app/servicios/cobertura.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");
/* harmony import */ var _direccion_confirmar_direccion_confirmar_direccion_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../direccion/confirmar-direccion/confirmar-direccion.page */ "./src/app/direccion/confirmar-direccion/confirmar-direccion.page.ts");












let DomicilioPage = class DomicilioPage {
    constructor(storage, geolocation, modalController, alertCtrl, coberturaService, loadingCtrl, direccionService, platform, navCtrlr) {
        this.storage = storage;
        this.geolocation = geolocation;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.coberturaService = coberturaService;
        this.loadingCtrl = loadingCtrl;
        this.direccionService = direccionService;
        this.platform = platform;
        this.navCtrlr = navCtrlr;
        this.latitud = -2.19616;
        this.longitud = -79.88621;
        this.direccion = "Ubicación actual";
        this.envio = "";
    }
    ngOnInit() {
        this.storage.get('id').then((val) => {
            if (val != null) {
                this.id = val;
            }
        });
    }
    ionViewWillEnter() {
        console.log("didEnter");
        this.storage.get('total').then((val) => {
            console.log(val);
            this.total = val;
        });
        this.initMap();
        this.verificarPosicion(this.map.getCenter(), this.colorPrincipal);
    }
    datos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            this.coberturaService.getCobertura()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                this.zonas = data;
                this.drawPolygon();
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
    addMarker(map) {
        this.platform.ready().then(() => {
            console.log("resp");
            this.geolocation.getCurrentPosition().then((resp) => {
                this.latitud = resp.coords.latitude;
                this.longitud = resp.coords.longitude;
                this.map.setCenter({ lat: this.latitud, lng: this.longitud });
                this.datos();
            }).catch((error) => {
                console.log('Error getting location', error);
            });
        });
    }
    initMap() {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: this.latitud, lng: this.longitud },
            zoom: 12
        });
        this.addMarker(this.map);
        google.maps.event.addListener(this.map, 'click', (event) => {
            this.verificarPosicion(event.latLng, "red");
        });
    }
    drawPolygon() {
        var color = "blue";
        this.zonas.forEach(element => {
            var coords = JSON.parse(element.zona);
            var poligono = this.makePolygon(coords, "blue");
            poligono.setMap(this.map);
            var contain = google.maps.geometry.poly.containsLocation(this.map.getCenter(), poligono);
            color = (contain ? "blue" : "red");
            this.colorPrincipal = color;
            //this.verificarPosicion(this.map.getCenter(), color);
            var $this = this;
            google.maps.event.addListener(poligono, 'click', function (e) {
                $this.verificarPosicion(e.latLng, "blue");
                $this.envio = element.envio;
            });
        });
    }
    verificarPosicion(event, color) {
        console.log(color);
        if (this.marker != undefined) {
            this.marker.setMap(null);
        }
        this.marker = new google.maps.Marker({
            position: event,
            map: this.map
        });
        if (color == "red") {
            let content = "<p>Aún no existe cobertura para esta zona!</p>";
            this.addInfoWindow(this.marker, content);
            this.envio = "";
        }
        else {
            this.latitud = event.lat();
            this.longitud = event.lng();
        }
    }
    addInfoWindow(marker, content) {
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        infoWindow.open(this.map, marker);
    }
    makePolygon(paths, color) {
        return (new google.maps.Polygon({
            paths: paths,
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.35
        }));
    }
    dismiss() {
        this.modalController.dismiss();
    }
    mensajeIncorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_9__["IncorrectoPage"],
                cssClass: 'IncorrectoProducto',
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
    atras() {
        let animations = {
            animated: true,
            animationDirection: "back"
        };
        this.navCtrlr.back(animations);
    }
    domicilio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _direccion_direccion_page__WEBPACK_IMPORTED_MODULE_5__["DireccionPage"],
                cssClass: 'select-modal'
            });
            return yield modal.present();
        });
    }
    guardar(form) {
        form = form.value;
        if (this.envio == '') {
            this.mensajeIncorrecto("Zona incorrecta", "Por favor elija una zona con cobertura.");
        }
        else if (form.descripcion == "") {
            this.mensajeIncorrecto("Descripción vacía", "Por favor indique descripción del lugar en que se encuentra.");
        }
        else {
            let usuario;
            this.presentConfirm('¿Desea guardar esta dirección?', 'No', 'Si').then(res => {
                if (res === 'ok') {
                    usuario = this.id;
                }
                else {
                    usuario = -1;
                    //
                }
                let formulario = {
                    "envio": this.envio,
                    "latitud": this.latitud,
                    "longitud": this.longitud,
                    "direccion": this.direccion,
                    "descripcion": form.descripcion,
                    "id": usuario
                };
                console.log(formulario);
                this.guardarDireccion(formulario);
            });
        }
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
    guardarDireccion(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            this.direccionService.nuevaDireccion(form)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                console.log(data);
                if (data.valid == "ok") {
                    this.confirmar(data.id);
                }
                else {
                    this.mensajeIncorrecto("Error", "No se han guardado los datos modificados");
                    this.modalController.dismiss();
                }
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
    confirmar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _direccion_confirmar_direccion_confirmar_direccion_page__WEBPACK_IMPORTED_MODULE_10__["ConfirmarDireccionPage"],
                cssClass: 'confirm-modal',
                componentProps: { id }
            });
            return yield modal.present();
        });
    }
};
DomicilioPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _servicios_cobertura_service__WEBPACK_IMPORTED_MODULE_7__["CoberturaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _servicios_direccion_entrega_service__WEBPACK_IMPORTED_MODULE_6__["DireccionEntregaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapaUbicacion', { static: true })
], DomicilioPage.prototype, "mapElement", void 0);
DomicilioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-domicilio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./domicilio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/domicilio/domicilio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./domicilio.page.scss */ "./src/app/domicilio/domicilio.page.scss")).default]
    })
], DomicilioPage);



/***/ })

}]);
//# sourceMappingURL=domicilio-domicilio-module-es2015.js.map
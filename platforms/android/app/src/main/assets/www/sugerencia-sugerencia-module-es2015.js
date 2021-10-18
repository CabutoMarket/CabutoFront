(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sugerencia-sugerencia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sugerencia/sugerencia.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sugerencia/sugerencia.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n    <div class=\"contenedor-page\">\r\n      <div class=\"contenedor-titulo\">\r\n        <ion-label class=\"titulo\">Reclamos y Sugerencias</ion-label>\r\n      </div>\r\n        <form #form=\"ngForm\" (ngSubmit)=\"enviar(form)\" >\r\n            <div class=\"form\">\r\n              <div class=\"perfil\">\r\n                <input class=\"placeholder\" type=\"text\" *ngIf=\"!url\" value=\"Tu imagen aquí\">\r\n                <label class=\"div-sugerencia\" for=\"sugerenciaInput\">\r\n                  <img [src]=\"url ? url : '../assets/img/agregar_imagen.png'\">\r\n                </label>\r\n                <input id=\"sugerenciaInput\" name=\"imagen\" type='file' accept=\"image/x-png, image/jpg, image/jpeg\" (change)=\"changeFile($event)\">\r\n              </div>\r\n              <ion-item>\r\n                <ion-textarea name=\"descripcion\" type=\"text\" placeholder=\"Escribe aquí\" rows=\"5\"  [(ngModel)]=\"descripcion\" required></ion-textarea>\r\n              </ion-item>              \r\n            </div>\r\n            <div class=\"button-content\">\r\n              <ion-button class=\"btn-registro\" size=\"large\" type=\"submit\">\r\n                <p class=\"registro\">Enviar</p>\r\n              </ion-button>\r\n            </div>\r\n      \r\n          </form>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/servicios/reclamo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/reclamo.service.ts ***!
  \**********************************************/
/*! exports provided: ReclamoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReclamoService", function() { return ReclamoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let ReclamoService = class ReclamoService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://cabutoshop.pythonanywhere.com/movil/";
    }
    envioReclamo(reclamo) {
        return this.http.post(this.baseUrl + `reclamo/`, reclamo);
    }
};
ReclamoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ReclamoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReclamoService);



/***/ }),

/***/ "./src/app/sugerencia/sugerencia-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sugerencia/sugerencia-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SugerenciaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugerenciaPageRoutingModule", function() { return SugerenciaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sugerencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sugerencia.page */ "./src/app/sugerencia/sugerencia.page.ts");




const routes = [
    {
        path: '',
        component: _sugerencia_page__WEBPACK_IMPORTED_MODULE_3__["SugerenciaPage"]
    }
];
let SugerenciaPageRoutingModule = class SugerenciaPageRoutingModule {
};
SugerenciaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SugerenciaPageRoutingModule);



/***/ }),

/***/ "./src/app/sugerencia/sugerencia.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sugerencia/sugerencia.module.ts ***!
  \*************************************************/
/*! exports provided: SugerenciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugerenciaPageModule", function() { return SugerenciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sugerencia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sugerencia-routing.module */ "./src/app/sugerencia/sugerencia-routing.module.ts");
/* harmony import */ var _sugerencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sugerencia.page */ "./src/app/sugerencia/sugerencia.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let SugerenciaPageModule = class SugerenciaPageModule {
};
SugerenciaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sugerencia_routing_module__WEBPACK_IMPORTED_MODULE_5__["SugerenciaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_sugerencia_page__WEBPACK_IMPORTED_MODULE_6__["SugerenciaPage"]]
    })
], SugerenciaPageModule);



/***/ }),

/***/ "./src/app/sugerencia/sugerencia.page.scss":
/*!*************************************************!*\
  !*** ./src/app/sugerencia/sugerencia.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-page {\n  padding: 20px 30px;\n}\n\n.contenedor-titulo {\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n}\n\n.contenedor-titulo .titulo {\n  color: var(--ion-color-azul-oscuro);\n  font-size: larger;\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\nion-item {\n  --background: #e7e7e7;\n  --color: rgb(112, 106, 106);\n  font-size: 1rem;\n  --highlight-height: 0px !important;\n  margin: 5% auto;\n  border-radius: 10px;\n}\n\nion-item ion-textarea {\n  color: var(--ion-color-azul-oscuro);\n  margin-left: 10px;\n  height: 150px;\n}\n\nion-button {\n  --background: var(--ion-color-naranja-oscuro);\n  font-size: 0.8rem;\n}\n\n.form {\n  padding: 20px 0px;\n  padding-bottom: 0px;\n}\n\n.perfil {\n  background: #e7e7e7;\n  border-radius: 15px;\n  text-align: center;\n}\n\n.perfil img {\n  height: 2rem;\n}\n\n.select-profile-picture {\n  text-align: left;\n  font-size: 12px;\n  margin: 0 auto;\n}\n\n.div-sugerencia > img {\n  height: 25%;\n  padding: 0%;\n  margin: auto;\n}\n\n.div-sugerencia {\n  background: #e7e7e7;\n  border-radius: 15px;\n  height: 30vh;\n  width: 100%;\n  margin: auto;\n  display: inline-flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n#sugerenciaInput {\n  display: none;\n  height: 20%;\n  padding-top: 0px;\n}\n\n.delete {\n  justify-content: left;\n  align-content: left;\n  align-items: left;\n  text-align: start;\n}\n\n#button {\n  line-height: 12px;\n  width: 30px;\n  height: 30px;\n  font-size: 20pt;\n  margin-top: 6vh;\n  margin-right: 2vw;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none !important;\n  border-radius: 20px;\n  background-color: transparent;\n  text-align: start !important;\n}\n\n.placeholder {\n  text-align: justify;\n  background: transparent;\n  border: 0;\n  width: 100%;\n  padding-left: 10px;\n  color: var(--ion-color-azul-oscuro);\n  opacity: .5;\n  position: absolute;\n  margin: 15px;\n}\n\n.button-content {\n  display: flex;\n  justify-content: center;\n}\n\n.btn-registro {\n  width: 55%;\n  line-height: 0px;\n}\n\n.registro {\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VnZXJlbmNpYS9EOlxcZ2l0XFxDYWJ1dG9Gcm9udC9zcmNcXGFwcFxcc3VnZXJlbmNpYVxcc3VnZXJlbmNpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1Z2VyZW5jaWEvc3VnZXJlbmNpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBMkM7QUNDL0M7O0FEQ0E7RUFDSSxrQkFBa0I7QUNFdEI7O0FEQUE7RUFFRSxpQkFBaUI7RUFDakIsYUFBWTtFQUNaLHVCQUF1QjtFQUN2QixxQkFBcUI7QUNFdkI7O0FEUEE7RUFPTSxtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUNJeEI7O0FEQ0E7RUFDSSxxQkFBYTtFQUNiLDJCQUFRO0VBQ1IsZUFBZTtFQUNmLGtDQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FDRXZCOztBRFJBO0VBUVEsbUNBQW1DO0VBQ25DLGlCQUFnQjtFQUNoQixhQUFhO0FDSXJCOztBREFFO0VBQ0UsNkNBQWE7RUFDYixpQkFBaUI7QUNHckI7O0FEQUE7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQW1CO0FDR3ZCOztBRERFO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUNJdEI7O0FEREU7RUFDRSxZQUFZO0FDSWhCOztBRERFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FDSWxCOztBREZFO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FDS2hCOztBREhFO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXNCO0VBQ3RCLGFBQWE7QUNNakI7O0FESkU7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQ09wQjs7QURKQTtFQUNFLHFCQUFxQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQ09yQjs7QURKRTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQ09oQzs7QURKRTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQ09oQjs7QURKRTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUNPM0I7O0FETEU7RUFDRSxVQUFTO0VBQ1QsZ0JBQWdCO0FDUXBCOztBRE5FO0VBQ0UsY0FBYztBQ1NsQiIsImZpbGUiOiJzcmMvYXBwL3N1Z2VyZW5jaWEvc3VnZXJlbmNpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcclxufVxyXG4uY29udGVuZWRvci1wYWdle1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG59XHJcbi5jb250ZW5lZG9yLXRpdHVsb3tcclxuICAgIFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgLnRpdHVsb3tcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gICAgLS1jb2xvcjogcmdiKDExMiwgMTA2LCAxMDYpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBpb24tdGV4dGFyZWF7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmc6MjBweCAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICAucGVyZmlse1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucGVyZmlsIGltZ3tcclxuICAgIGhlaWdodDogMnJlbTtcclxuICB9XHJcblxyXG4gIC5zZWxlY3QtcHJvZmlsZS1waWN0dXJle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuZGl2LXN1Z2VyZW5jaWEgPiBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmRpdi1zdWdlcmVuY2lhe1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gICNzdWdlcmVuY2lhSW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4OyBcclxuICB9XHJcblxyXG4uZGVsZXRle1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG4gICNidXR0b24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIG1hcmdpbi10b3A6IDZ2aDtcclxuICAgIG1hcmdpbi1yaWdodDogMnZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucGxhY2Vob2xkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmJ0bi1yZWdpc3Ryb3tcclxuICAgIHdpZHRoOjU1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Ryb3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH0iLCIqIHtcbiAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3ItcGFnZSB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cblxuLmNvbnRlbmVkb3ItdGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5jb250ZW5lZG9yLXRpdHVsbyAudGl0dWxvIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2U3ZTdlNztcbiAgLS1jb2xvcjogcmdiKDExMiwgMTA2LCAxMDYpO1xuICBmb250LXNpemU6IDFyZW07XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNSUgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnBlcmZpbCB7XG4gIGJhY2tncm91bmQ6ICNlN2U3ZTc7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBlcmZpbCBpbWcge1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5zZWxlY3QtcHJvZmlsZS1waWN0dXJlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmRpdi1zdWdlcmVuY2lhID4gaW1nIHtcbiAgaGVpZ2h0OiAyNSU7XG4gIHBhZGRpbmc6IDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5kaXYtc3VnZXJlbmNpYSB7XG4gIGJhY2tncm91bmQ6ICNlN2U3ZTc7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogMzB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jc3VnZXJlbmNpYUlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5kZWxldGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuI2J1dHRvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDIwcHQ7XG4gIG1hcmdpbi10b3A6IDZ2aDtcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4ucGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcbiAgb3BhY2l0eTogLjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uYnV0dG9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1yZWdpc3RybyB7XG4gIHdpZHRoOiA1NSU7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5yZWdpc3RybyB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/sugerencia/sugerencia.page.ts":
/*!***********************************************!*\
  !*** ./src/app/sugerencia/sugerencia.page.ts ***!
  \***********************************************/
/*! exports provided: SugerenciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugerenciaPage", function() { return SugerenciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");
/* harmony import */ var _servicios_reclamo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/reclamo.service */ "./src/app/servicios/reclamo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../aviso/correcto/correcto.page */ "./src/app/aviso/correcto/correcto.page.ts");










let SugerenciaPage = class SugerenciaPage {
    constructor(storage, loadingCtrl, modalController, reclamoService) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.reclamoService = reclamoService;
        this.fileUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({});
        this.formData = new FormData();
        this.url = "";
        this.descripcion = "";
    }
    ngOnInit() {
    }
    changeFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            console.log(event.target.files);
            console.log(event.target.files[0]);
            console.log(event.target.files[0].name);
            this.formData.set("url", event.target.files[0]);
            reader.onload = (event) => {
                var ul = "";
                var buf = this.convert(event.target.result, ul);
                this.url = buf;
                document.querySelector('.div-sugerencia > img').style.height = '100%';
                document.querySelector('.div-sugerencia > img').style.margin = '0';
            };
        }
    }
    delete() {
        this.url = '';
        document.querySelector('.div-sugerencia > img').style.height = '25%';
    }
    convert(buff, buff2) {
        for (var i = 0, strLen = buff.length; i < strLen; i++) {
            buff2 = buff2 + buff[i];
        }
        var buff3 = buff2;
        //console.log(buff2)
        return buff3;
    }
    enviar(form) {
        form = form.value;
        console.log(form);
        if (form.descripcion == '') {
            this.mensajeIncorrecto("Campos Incompletos", "Por favor complete el campo descripción");
        }
        else {
            this.formData.append("descripcion", form.descripcion);
            this.enviarReclamo();
        }
    }
    enviarReclamo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            this.reclamoService.envioReclamo(this.formData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                console.log(data);
                if (data.valid == "ok") {
                    this.mensajeCorrecto("Comentario enviado", "Su comentario ha sido enviado con éxito.");
                    this.url = "";
                    document.querySelector('.div-sugerencia > img').style.height = '25%';
                    document.querySelector('.div-sugerencia > img').style.margin = 'auto';
                    this.descripcion = "";
                }
                else {
                    this.mensajeIncorrecto("Error", "No se ha completado su solicitud");
                }
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
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
    mensajeIncorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_3__["IncorrectoPage"],
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
};
SugerenciaPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _servicios_reclamo_service__WEBPACK_IMPORTED_MODULE_4__["ReclamoService"] }
];
SugerenciaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sugerencia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sugerencia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sugerencia/sugerencia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sugerencia.page.scss */ "./src/app/sugerencia/sugerencia.page.scss")).default]
    })
], SugerenciaPage);



/***/ })

}]);
//# sourceMappingURL=sugerencia-sugerencia-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-login-login-login-module~footer-footer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>-->\r\n\r\n<!--</ion-header><br> [disabled]=\"form.invalid\"-->\r\n\r\n<ion-content class=\"animated fadeIn login auth-page inicio\">\r\n  <div class='header'>\r\n    <!--<div class= \"logo\" > <img src=\"../assets/img/header_login.png\" size= 12></div>-->\r\n    <div class=\"logo\"> <img class=\"atras\" src=\"../assets/img/atras_blanco.png\" size=12 (click)=\"atras()\"><img class=\"img_logo\" src=\"../assets/img/header_login_final.png\" size=12></div>\r\n  </div>\r\n  <div class=\"contenido\">\r\n\r\n    <form class=\"centro\" #form=\"ngForm\" (ngSubmit)=\"verificar(form)\">\r\n      <ion-grid>\r\n        <div class=\"form\">\r\n          <ion-col align-self-center size-md=\"5\" size-lg=\"10\" size-xs=\"10\">\r\n            <ion-item>\r\n              <ion-input name=\"correo\" type=\"email\" placeholder=\"Correo Electrónico\" ngModel required></ion-input>\r\n            </ion-item><br>\r\n            <ion-item>\r\n              <ion-input name=\"contrasena\" type=\"{{showPass ? 'text' : 'password'}}\" placeholder=\"Contraseña\" ngModel\r\n                required></ion-input>\r\n              <button ion-button type=\"button\" clear color=\"dark\" item-right (click)=\"togglePasswordClick()\">\r\n                <ion-icon class=\"icono-input\" text-right id=\"iconIntro\" [name]=\"passwordToggleIcon\" style=\"zoom:2.0;\">\r\n                </ion-icon>\r\n              </button>\r\n            </ion-item>\r\n            <p style=\"color: var(--ion-color-naranja-oscuro);\" class=ion-text-right (click)=\"contrasena()\">\r\n              <!--<ion-label style=\"color: var(--ion-color-naranja-oscuro);\">-->¿Olvidaste tu contraseña?\r\n              <!--/ion-label-->\r\n            </p>\r\n          </ion-col>\r\n        </div>\r\n        <div class=\"button fb_login\">\r\n          <img src=\"../assets/img/btn_fb.png\" (click)=\"showLoadingF()\">\r\n        </div>\r\n      </ion-grid>\r\n      <div class=\"espacio2\">\r\n        <div class=\"ion-text-center\">\r\n          <p class=\"letras\">¿Eres nuevo? <a class=\"ruta\" (click)=\"showLoadingR()\">Registrate aquí</a></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"contenedor-footer\">\r\n        <ion-button class=\"inicio\" size=\"large\" type=\"submit\" expand=\"full\">\r\n          <p class=\"sesion\">Iniciar Sesión</p>\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='header'>\r\n  <div class=\"logo\"> <img class=\"atras\" src=\"../assets/img/atras_naranja.png\" size=12 (click)=\"atras()\"></div>\r\n</div>\r\n\r\n<ion-content padding text-center>\r\n  <div class=\"contendor-mail\">\r\n    <div class=\"correo\">Ingrese su correo electrónico para recuperar su contraseña</div>\r\n    <ion-item>\r\n      <ion-input style=\"--background: #e7e7e7;\r\n    padding-top: 30px;\r\n    --color: rgb(112, 106, 106);\r\n    font-size: 0.8rem;\r\n    border-radius: 5px;\" name=\"email\" type=\"email\" placeholder=\"    Correo Electrónico\" [(ngModel)]=\"textInput\">\r\n      </ion-input>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n<div>\r\n  <ion-button style=\"--background:var(--ion-color-naranja-oscuro);\" class=\"recuperar\" size=\"large\" expand=\"full\"\r\n    (click)=\"showLoadingE()\">Recuperar</ion-button>\r\n</div>");

/***/ }),

/***/ "./src/app/auth/login/login/login-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/login/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/login/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/login/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth/login/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/login/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.header {\n  padding: 0px 0px 0px 0px !important;\n}\n\n.atras {\n  position: absolute;\n  top: 2%;\n  left: 3%;\n  height: 30px;\n}\n\nion-footer {\n  margin: 0 auto;\n  position: relative;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n}\n\nion-toolbar {\n  --background: var(--ion-color-naranja-oscuro);\n}\n\n.fb_login {\n  position: relative;\n  bottom: 20%;\n  width: 50% !important;\n}\n\nion-title {\n  /*width: auto;*/\n  --color: #fff;\n  width: 100%;\n  position: relative;\n  left: 0;\n  height: 0%;\n}\n\nion-item {\n  margin: 5% 0px;\n  padding: 0px;\n  --background: #e7e7e7;\n  --color: rgb(112, 106, 106);\n  border-radius: 10px;\n  font-size: 0.8rem;\n  height: 40% !important;\n  --highlight-height: 0.5px !important;\n}\n\nion-button.inicio {\n  padding: 0px 0px 0px 0px !important;\n  --background: var(--ion-color-naranja-oscuro);\n  font-size: 0.8rem;\n  width: 100%;\n}\n\n/*\r\nion-button.button-fb{\r\n    --background: #4e71ba!important;\r\n    border-style: none !important;\r\n}*/\n\n.button > img {\n  width: 100%;\n  border-radius: 5px;\n  border: #4e71ba 1px solid;\n}\n\n.logo2 {\n  text-align: center;\n  padding: 68px;\n  width: 300%;\n}\n\n.logo > .img_logo {\n  margin: 0 auto;\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  padding: 20px 0px;\n  top: 35%;\n  position: relative;\n  width: 100%;\n}\n\n.logo {\n  z-index: 1;\n}\n\ndiv.ion-text-center {\n  padding: 0px 37px 0px 37px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.letras {\n  color: #FE3A00;\n  font-family: \"MyriadPro-Light\" !important;\n  font-size: 0.8rem;\n}\n\n.ruta {\n  text-decoration: none;\n  color: #FE3A00;\n  font-size: 0.8rem;\n}\n\n.ion-text-right {\n  padding: 5px 0px 0px 0px !important;\n  font-size: 0.8rem;\n}\n\n.button {\n  margin: 0 auto;\n  width: 80%;\n}\n\n.espacio2 {\n  margin-top: 5vh;\n  position: relative;\n  bottom: 10%;\n  left: 10%;\n  width: 80%;\n}\n\n.sesion {\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.contenedor-footer {\n  height: 7vh;\n  margin: 2vh auto 0px auto;\n  width: 78%;\n}\n\nion-button.inicio {\n  height: 100%;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi9EOlxcZ2l0XFxDYWJ1dG9Gcm9udC9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQTJDO0FDQy9DOztBREVBO0VBQ0ksbUNBQW1DO0FDQ3ZDOztBRENBO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtBQ0VoQjs7QURDQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0FDRVo7O0FEQ0E7RUFDSSw2Q0FBYTtBQ0VqQjs7QURDQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0FDRXpCOztBRENBO0VBQ0ksZUFBQTtFQUNBLGFBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxVQUFVO0FDRWQ7O0FEQUE7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLHFCQUFhO0VBQ2IsMkJBQVE7RUFDUixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixvQ0FBbUI7QUNHdkI7O0FEREE7RUFDSSxtQ0FBbUM7RUFDbkMsNkNBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztBQ0lmOztBREZBOzs7O0VDUUU7O0FERkY7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQ0k3Qjs7QURBQTtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztBQ0dmOztBRERBO0VBQ0ksY0FBYztFQUNkLFdBQVc7QUNJZjs7QUREQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBa0I7RUFDbEIsUUFBTztFQUNQLGtCQUFrQjtFQUNsQixXQUFXO0FDSWY7O0FEQUE7RUFDSSxVQUFTO0FDR2I7O0FERUE7RUFDSSwwQkFBMEI7RUFDMUIsY0FBYztFQUVkLFdBQVU7QUNBZDs7QURFQTtFQUNJLGNBQWE7RUFDYix5Q0FBd0M7RUFDeEMsaUJBQWlCO0FDQ3JCOztBREdBO0VBQ0kscUJBQXFCO0VBQ3JCLGNBQWE7RUFDYixpQkFBaUI7QUNBckI7O0FER0E7RUFDSSxtQ0FBa0M7RUFFbEMsaUJBQWlCO0FDRHJCOztBRElDO0VBQ0csY0FBYztFQUNkLFVBQVM7QUNEYjs7QURLQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FDRmQ7O0FETUE7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQ0h4Qjs7QURNQTtFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsVUFBVTtBQ0hkOztBRE1BO0VBQ0ksWUFBWTtBQ0hoQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYXRyYXN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIlO1xyXG4gICAgbGVmdDogMyU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXJ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcclxufVxyXG5cclxuLmZiX2xvZ2lue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAyMCU7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIC8qd2lkdGg6IGF1dG87Ki9cclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgbGVmdDogMDsgXHJcbiAgICBoZWlnaHQ6IDAlO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgbWFyZ2luOiA1JSAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlN2U3ZTc7XHJcbiAgICAtLWNvbG9yOiByZ2IoMTEyLCAxMDYsIDEwNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBoZWlnaHQ6IDQwJSAhaW1wb3J0YW50O1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwLjVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1idXR0b24uaW5pY2lve1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi8qXHJcbmlvbi1idXR0b24uYnV0dG9uLWZie1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNGU3MWJhIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG59Ki9cclxuXHJcbi5idXR0b24gID4gaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAjNGU3MWJhIDFweCBzb2xpZDtcclxufVxyXG5cclxuXHJcbi5sb2dvMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDY4cHg7XHJcbiAgICB3aWR0aDogMzAwJTtcclxufVxyXG4ubG9nbyA+IC5pbWdfbG9nb3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDtcclxuICAgIHRvcDozNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5sb2dve1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgLy93aWR0aDogMTAwJVxyXG4gICAgLy9wb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuZGl2Lmlvbi10ZXh0LWNlbnRlcntcclxuICAgIHBhZGRpbmc6IDBweCAzN3B4IDBweCAzN3B4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvLy0tYmFja2dyb3VuZDp3aGl0ZSAhaW1wb3J0YW50OyBcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLmxldHJhcyB7XHJcbiAgICBjb2xvcjojRkUzQTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvLUxpZ2h0XCIhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBcclxufVxyXG5cclxuLnJ1dGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG4gICAgY29sb3I6I0ZFM0EwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uaW9uLXRleHQtcmlnaHR7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHghaW1wb3J0YW50O1xyXG4gICAgLy9mb250LWZhbWlseTogXCJNeXJpYWRQcm8tTGlnaHRcIiFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuIC5idXR0b257XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOjgwJTtcclxufVxyXG5cclxuXHJcbi5lc3BhY2lvMntcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuXHJcbn1cclxuXHJcbi5zZXNpb257XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLWZvb3RlcntcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgbWFyZ2luOiAydmggYXV0byAwcHggYXV0bztcclxuICAgIHdpZHRoOiA3OCU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uaW5pY2lve1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmF0cmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIlO1xuICBsZWZ0OiAzJTtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcbn1cblxuLmZiX2xvZ2luIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDIwJTtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICAvKndpZHRoOiBhdXRvOyovXG4gIC0tY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luOiA1JSAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZTdlN2U3O1xuICAtLWNvbG9yOiByZ2IoMTEyLCAxMDYsIDEwNik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBoZWlnaHQ6IDQwJSAhaW1wb3J0YW50O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDAuNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24uaW5pY2lvIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKlxyXG5pb24tYnV0dG9uLmJ1dHRvbi1mYntcclxuICAgIC0tYmFja2dyb3VuZDogIzRlNzFiYSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxufSovXG4uYnV0dG9uID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAjNGU3MWJhIDFweCBzb2xpZDtcbn1cblxuLmxvZ28yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2OHB4O1xuICB3aWR0aDogMzAwJTtcbn1cblxuLmxvZ28gPiAuaW1nX2xvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIHRvcDogMzUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nbyB7XG4gIHotaW5kZXg6IDE7XG59XG5cbmRpdi5pb24tdGV4dC1jZW50ZXIge1xuICBwYWRkaW5nOiAwcHggMzdweCAwcHggMzdweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGV0cmFzIHtcbiAgY29sb3I6ICNGRTNBMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZFByby1MaWdodFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucnV0YSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNGRTNBMDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uaW9uLXRleHQtcmlnaHQge1xuICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmVzcGFjaW8yIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiAxMCU7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5zZXNpb24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVuZWRvci1mb290ZXIge1xuICBoZWlnaHQ6IDd2aDtcbiAgbWFyZ2luOiAydmggYXV0byAwcHggYXV0bztcbiAgd2lkdGg6IDc4JTtcbn1cblxuaW9uLWJ1dHRvbi5pbmljaW8ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/auth/login/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/login/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/auth/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/fcm.service */ "./src/app/servicios/fcm.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../modal/modal.page */ "./src/app/modal/modal.page.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_footer_footer_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/footer/footer.page */ "./src/app/footer/footer.page.ts");
/* harmony import */ var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../aviso/correcto/correcto.page */ "./src/app/aviso/correcto/correcto.page.ts");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_servicios_perfil_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/servicios/perfil.service */ "./src/app/servicios/perfil.service.ts");
/* harmony import */ var src_app_servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/servicios/shopping-cart.service */ "./src/app/servicios/shopping-cart.service.ts");

















let LoginPage = class LoginPage {
    constructor(authService, router, loading, alert, toast, navCtrlr, platform, modalCtrl, storage, component, footer, fcm, firebase, perfilService, shoppingService) {
        this.authService = authService;
        this.router = router;
        this.loading = loading;
        this.alert = alert;
        this.toast = toast;
        this.navCtrlr = navCtrlr;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.component = component;
        this.footer = footer;
        this.fcm = fcm;
        this.firebase = firebase;
        this.perfilService = perfilService;
        this.shoppingService = shoppingService;
        this.alertShown = false;
        this.isLoggedIn = false;
        this.type = "password";
        this.passwordToggleIcon = 'eye';
        this.showPass = false;
    }
    ngOnInit() {
    }
    contrasena() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //let modal = this.modalCtrl.create(ModalPage);
            const modal = yield this.modalCtrl.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"],
                cssClass: 'custom-modal'
            });
            return yield modal.present();
        });
    }
    verificar(form) {
        form = form.value;
        console.log(form);
        console.log(form.correo);
        console.log(form.contrasena);
        if (form.correo == "" || form.contrasena == "") {
            //this.mensaje("Campos Incompletos","Revisar los campos","Por favor complete los campos");
            this.mensajeIncorrecto("Campos Incompletos", "Por favor complete los campos");
        }
        else {
            this.show(form);
        }
    }
    verificarB(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.VerificarUser(form).subscribe(data => {
                console.log(data.valid);
                if (data.valid == "OK") {
                    let info = {
                        'correo': form.correo,
                        'contrasena': 'xxxxx'
                    };
                    this.shoppingService.showCart(info)
                        .subscribe(data => {
                        console.log(data);
                        if (data.hasOwnProperty(0)) {
                            this.footer.cosas = data[0].total;
                            this.storage.set('cosas', this.footer.cosas);
                        }
                        else {
                            this.footer.cosas = data.total;
                            this.storage.set('cosas', this.footer.cosas);
                        }
                    }, (error) => {
                        console.error(error);
                    });
                    //this.router.navigateByUrl('/producto');
                    var nombre = data.nombre;
                    var apellido = data.apellido;
                    var id = data.id;
                    console.log(nombre);
                    console.log(apellido);
                    _global__WEBPACK_IMPORTED_MODULE_7__["login"].login = true;
                    this.storage.set('id', id);
                    this.storage.set('name', nombre);
                    this.storage.set('apellido', apellido);
                    this.storage.set('correo', form.correo);
                    this.storage.set('number', "");
                    this.component.name = nombre;
                    this.component.lastname = apellido;
                    this.component.action = "Cerrar Sesión";
                    this.perfilS(form.correo);
                    this.firebase.getToken().then(token => {
                        var registro = {
                            usuario: id,
                            token: token
                        };
                        console.log(registro);
                        this.fcm.registrarUsuario(registro).subscribe(data => {
                            console.log(data.valid);
                        });
                    });
                    console.log(_global__WEBPACK_IMPORTED_MODULE_7__["login"]);
                    if (_global__WEBPACK_IMPORTED_MODULE_7__["login"].categoria == true) {
                        this.router.navigateByUrl('/footer/categorias/detalle-categoria');
                    }
                    else if (_global__WEBPACK_IMPORTED_MODULE_7__["login"].oferta == true && (_global__WEBPACK_IMPORTED_MODULE_7__["login"].producto = false)) {
                        this.router.navigateByUrl('/footer/ofertas');
                    }
                    else if (_global__WEBPACK_IMPORTED_MODULE_7__["login"].producto == true) {
                        this.router.navigateByUrl('/footer/producto');
                    }
                    else {
                        this.router.navigateByUrl('/');
                    }
                }
                else {
                    //this.mensaje("Acceso Incorrecto","Algo salió mal","Su correo o contraseña están incorrectos");
                    this.mensajeIncorrecto("Acceso Incorrecto", "Algo salió mal su correo o contraseña están incorrectos");
                    this.router.navigateByUrl('/login');
                }
            });
        });
    }
    perfilS(correo) {
        this.perfilService.getPerfil(correo).subscribe(data => {
            this.perfil = data[0];
            console.log(data);
            if (this.perfil.telefono == "NONE") {
                this.perfil.telefono = "";
            }
            if (this.perfil.direccion == "NONE") {
                this.perfil.direccion = "";
            }
            this.imageURL();
            if (Object.keys(this.perfil).length === 0) {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            }
            else {
                this.storage.set('perfil', this.perfil);
                console.log("se guardo el perfil");
            }
        }, err => {
            this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
        });
    }
    imageURL() {
        const getImageOrFallback = (path, fallback) => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = path;
                img.onload = () => resolve(path);
                img.onerror = () => resolve(fallback);
            });
        };
        getImageOrFallback("http://cabutoshop.pythonanywhere.com" + this.perfil.imagen, "../assets/img/avatar_perfil2.png").then(result => {
            this.component.image = result;
            this.perfil.url = result;
            this.storage.set("perfil", this.perfil);
        });
    }
    atras() {
        let animations = {
            animated: true,
            animationDirection: "back"
        };
        this.navCtrlr.back(animations);
    }
    forgotPass() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const forgot = yield this.alert.create({
                cssClass: 'Forgot Password?',
                header: 'Forgot Password?',
                message: "Enter you email address to send a reset link password.",
                inputs: [
                    {
                        name: 'email',
                        placeholder: 'Email',
                        type: 'email'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Send',
                        handler: data => {
                            console.log('Send clicked');
                            this.presentToast();
                        }
                    }
                ]
            });
            forgot.present();
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Email was sended successfully',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
            });
            toast.present();
        });
    }
    mensaje(titulo, subtitulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: titulo,
                header: titulo,
                subHeader: subtitulo,
                message: mensaje,
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    facebook() {
        this.authService.loginwithFacebook().then(res => {
            console.log(res);
            const usuario = res.user;
            var mail = usuario.email;
            var nombre = usuario.displayName;
            var foto = usuario.photoURL;
            console.log(nombre);
            console.log(foto);
            var contra = usuario.displayName;
            const logR = {
                'cedula': " ",
                'email': mail,
                'nombre': contra,
                'apellido': " ",
                'contrasena': contra,
                'confirmar': contra
            };
            //this.router.navigateByUrl('/producto');
            const log = { 'correo': mail,
                'contrasena': contra
            };
            this.authService.VerificarUser(log).subscribe(data => {
                console.log(data.valid);
                if (data.valid == "OK") {
                    var nombre = data.nombre;
                    var apellido = data.apellido;
                    console.log(nombre);
                    console.log(apellido);
                    _global__WEBPACK_IMPORTED_MODULE_7__["login"].login = true;
                    this.storage.set('name', nombre);
                    this.storage.set('apellido', apellido);
                    this.storage.set('correo', mail);
                    this.storage.set('number', "");
                    this.component.name = nombre;
                    this.component.lastname = apellido;
                    this.component.action = "Cerrar Sesión";
                    this.router.navigateByUrl('/');
                }
                else {
                    this.authService.addUser(logR).subscribe(data => {
                        console.log("imprimiendo data", data, logR);
                        if (data.valid == "OK") {
                            //this.mensaje("Registro","Registro","Registro exitoso");
                            var nombre = data.nombre;
                            var apellido = data.apellido;
                            console.log(nombre);
                            console.log(apellido);
                            _global__WEBPACK_IMPORTED_MODULE_7__["login"].login = true;
                            this.storage.set('name', nombre);
                            this.storage.set('apellido', apellido);
                            this.storage.set('correo', mail);
                            this.storage.set('number', "");
                            this.component.name = nombre;
                            this.component.lastname = apellido;
                            this.router.navigateByUrl('/registro-exitoso');
                        }
                        else {
                            //this.mensaje("Error", "Registro","Parece que algo ha ocurrido");
                            this.mensajeIncorrecto("Error de Registro", "Parece que algo ha ocurrido");
                            this.router.navigateByUrl('/login');
                        }
                        console.log(logR);
                    });
                }
            });
        }).catch(err => {
            //this.mensaje("Fallo de conexión","algo salio mal","No se pudo iniciar sesión");
            this.mensajeIncorrecto("Fallo de conexión", "Algo salio mal no se pudo iniciar sesión");
        });
    }
    togglePasswordClick() {
        this.showPass = !this.showPass;
        if (this.passwordToggleIcon == 'eye') {
            this.passwordToggleIcon = 'eye-off';
        }
        else {
            this.passwordToggleIcon = 'eye';
        }
    }
    showPassword() {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = "text";
        }
        else {
            this.type = "password";
        }
    }
    showLoading(form) {
        this.loading.create({
            message: 'Loading.....'
        }).then((loading) => {
            loading.present();
            {
                this.verificar(form);
            }
            setTimeout(() => {
                loading.dismiss();
            }, 2000);
        });
    }
    showLoadingC() {
        this.loading.create({
            message: 'Loading.....'
        }).then((loading) => {
            loading.present();
            {
                this.contrasena();
            }
            setTimeout(() => {
                loading.dismiss();
            }, 1000);
        });
    }
    showLoadingF() {
        this.loading.create({
            message: 'Loading.....'
        }).then((loading) => {
            loading.present();
            {
                this.facebook();
            }
            setTimeout(() => {
                loading.dismiss();
            }, 1000);
        });
    }
    showLoadingR() {
        this.loading.create({
            message: 'Loading.....'
        }).then((loading) => {
            loading.present();
            {
                this.router.navigateByUrl('/registro');
            }
            setTimeout(() => {
                loading.dismiss();
            }, 1000);
        });
    }
    show(form) {
        this.loading.create({
            message: 'Loading.....'
        }).then((loading) => {
            loading.present();
            {
                this.verificarB(form);
            }
            setTimeout(() => {
                loading.dismiss();
            }, 1000);
        });
    }
    mensajeCorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_11__["CorrectoPage"],
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
            const modal = yield this.modalCtrl.create({
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_12__["IncorrectoPage"],
                cssClass: 'IncorrectoProducto',
                componentProps: {
                    'titulo': titulo,
                    'mensaje': mensaje
                }
            });
            return yield modal.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] },
    { type: src_app_footer_footer_page__WEBPACK_IMPORTED_MODULE_10__["FooterPage"] },
    { type: src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_4__["FcmService"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseX"] },
    { type: src_app_servicios_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"] },
    { type: src_app_servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_15__["ShoppingCartService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login/login.page.scss")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/modal/modal.page.scss":
/*!***************************************!*\
  !*** ./src/app/modal/modal.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\nion-header {\n  --background: linear-gradient(to left top,var(--ion-color-naranja-oscuro),var(--ion-color-naranja-claro)) !important;\n}\n\n.atras {\n  position: relative;\n  margin-top: 5%;\n  left: 1%;\n  height: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvRDpcXGdpdFxcQ2FidXRvRnJvbnQvc3JjXFxhcHBcXG1vZGFsXFxtb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUEyQztBQ0MvQzs7QURDQTtFQUNJLG9IQUFhO0FDRWpCOztBREFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsWUFBWTtBQ0doQiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1oZWFkZXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCx2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pLHZhcigtLWlvbi1jb2xvci1uYXJhbmphLWNsYXJvKSkgIWltcG9ydGFudDtcclxufVxyXG4uYXRyYXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGxlZnQ6IDElO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCx2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pLHZhcigtLWlvbi1jb2xvci1uYXJhbmphLWNsYXJvKSkgIWltcG9ydGFudDtcbn1cblxuLmF0cmFzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbGVmdDogMSU7XG4gIGhlaWdodDogMzBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modal/modal.page.ts":
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_auth_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/servicios/auth.service */ "./src/app/auth/servicios/auth.service.ts");





let ModalPage = class ModalPage {
    constructor(navCtrol, navParams, router, modalCtrl, alert, authService, loading) {
        this.navCtrol = navCtrol;
        this.navParams = navParams;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.authService = authService;
        this.loading = loading;
        this.textInput = "";
    }
    ngOnInit() {
    }
    atras() {
        this.modalCtrl.dismiss();
    }
    enviar() {
        console.log(typeof (this.textInput));
        if (this.validarEmail(this.textInput)) {
            console.log(this.textInput);
            console.log("Voy a enviar datos");
            this.authService.enviarCorreo(this.textInput).subscribe(data => {
                console.log("Recibi respuesta");
                console.log(data);
                if (data.valid == 'OK') {
                    this.modalCtrl.dismiss();
                }
                else {
                    this.mensaje("Acceso Incorrecto", "Algo salió mal", "Su correo  están incorrectos");
                }
            });
        }
        else {
            this.mensaje("Correo", "Correo incorrecto", "esto no sigue la forma correcta de un correo");
        }
    }
    validarEmail(valor) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(valor) ? true : false;
    }
    mensaje(titulo, subtitulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: titulo,
                header: titulo,
                subHeader: subtitulo,
                message: mensaje,
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showLoadingE() {
        this.loading.create({
            message: 'Loading.....'
        }).then((loading) => {
            loading.present();
            {
                this.enviar();
            }
            setTimeout(() => {
                loading.dismiss();
            }, 2000);
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_auth_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal.page.scss */ "./src/app/modal/modal.page.scss")).default]
    })
], ModalPage);



/***/ })

}]);
//# sourceMappingURL=default~auth-login-login-login-module~footer-footer-module-es2015.js.map
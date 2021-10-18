(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-registro-registro-registro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro/registro/registro.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro/registro/registro.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>-->\r\n  <div class = 'header'>\r\n  <div class =\"btn_regresar\"> <img src=\"../assets/img/regresar_final1.png\"  (click)=\"regresar()\"> </div>\r\n  <div class= \"headerS\" > <img src=\"../assets/img/header_registro_final1.png\" size= 12></div>\r\n</div>\r\n<!--</ion-header>[disabled]=\"form.invalid\"-->\r\n\r\n<ion-content class=\"animated fadeIn login auth-page inicio\">\r\n  <form  #form=\"ngForm\" (ngSubmit)=\"register(form)\"> \r\n   <ion-grid >\r\n     <div class=\"form\" >\r\n       <ion-col align-self-center size-md=\"3\" size-lg=\"5\" size-xs=\"10\">\r\n         <div class= \"perfil\"> \r\n           <label class=\"hoverable\" for=\"fileInput\">\r\n            <img [src]=\"url ? url : '../assets/img/avatar_perfil.png'\"> \r\n           <!-- <div class=\"hover-text\">Choose file</div>\r\n            <div class=\"background\"></div>-->\r\n          </label>\r\n          <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\r\n          <!---<button class=\"x\" *ngIf=\"url\" (click)=\"delete()\" >X</button>-->\r\n         <div class =\"delete\">\r\n          <input id=\"button\" type=\"button\" *ngIf=\"url\" (click)=\"delete()\" value=\"X\">\r\n         </div>\r\n          </div> \r\n           <ion-item >\r\n             <ion-input id= \"1\" name=\"cedula\" type=\"text\" placeholder=\"RUC/Cédula*\" ngModel required></ion-input>\r\n           </ion-item>\r\n           <ion-item >\r\n             <ion-input id= \"2\" name=\"nombre\" type=\"text\" placeholder=\"Nombre*\" ngModel required></ion-input>\r\n           </ion-item>\r\n           <ion-item >\r\n             <ion-input id= \"3\" name=\"apellido\" type=\"text\" placeholder=\"Apellido*\" ngModel required></ion-input>\r\n           </ion-item>\r\n           <ion-item >\r\n            <ion-input id= \"4\" name=\"email\" type=\"email\" placeholder=\"your@email.com*\" ngModel required></ion-input>\r\n          </ion-item>  \r\n           <ion-item>\r\n             <ion-input id= \"5\" name=\"contrasena\" type=\"{{showPass ? 'text' : 'password'}}\" placeholder=\"Contraseña*\" ngModel required></ion-input>\r\n             <button ion-button type=\"button\" clear color=\"dark\" item-right (click)=\"togglePasswordClick()\">\r\n              <ion-icon class=\"icono-input\" text-right  id=\"iconIntro\" [name]=\"passwordToggleIcon\" style=\"zoom:2.0;\"></ion-icon>\r\n            </button>\r\n           </ion-item>\r\n           <ion-item >\r\n             <ion-input id= \"6\" name=\"confirmar\" type=\"{{showPass ? 'text' : 'password'}}\" placeholder=\"Repetir Contraseña*\" ngModel required></ion-input>\r\n             <button ion-button type=\"button\" clear color=\"dark\" item-right (click)=\"togglePasswordClick()\">\r\n              <ion-icon class=\"icono-input\" text-right  id=\"iconIntro\" [name]=\"passwordToggleIcon\" style=\"zoom:2.0;\"></ion-icon>\r\n            </button>\r\n           </ion-item>\r\n         <ion-radio-group  >\r\n           <div class = \"Condicion\">\r\n             <ion-label class=\"terminos\" (click)=\"politicas()\" >Acepto Términos y Condiciones</ion-label>\r\n             <ion-radio class = \"radio\" slot=\"start\" value=\"acepto\" ></ion-radio>\r\n           </div>\r\n         </ion-radio-group>\r\n       </ion-col>\r\n     </div>\r\n   </ion-grid>\r\n   <ion-footer>\r\n <!--<ion-toolbar >-->\r\n   <div class=\"button-content\">\r\n     <ion-button class= \"btn-registro\"  size=\"large\" type=\"submit\"expand=\"full\"><p class = \"registro\">Registrarse</p></ion-button>\r\n   </div>\r\n <!--</ion-toolbar>-->\r\n</ion-footer>\r\n\r\n </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/registro/registro/registro-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/registro/registro/registro-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "./src/app/auth/registro/registro/registro.page.ts");




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/registro/registro/registro.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/registro/registro/registro.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "./src/app/auth/registro/registro/registro-routing.module.ts");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/auth/registro/registro/registro.page.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");








let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "./src/app/auth/registro/registro/registro.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/auth/registro/registro/registro.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.header {\n  height: 15%;\n}\n\nion-toolbar {\n  --background: var(--ion-color-naranja-oscuro);\n}\n\nion-header {\n  margin: 0 auto;\n}\n\n.btn_regresar {\n  float: left;\n  position: absolute;\n  top: 20px;\n  left: 10px;\n}\n\nion-title {\n  /*width: auto;*/\n  --color: #fff;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  height: 0%;\n}\n\nion-item {\n  padding: 0px 0px 16px 0px;\n  --background: #e7e7e7;\n  --color: rgb(112, 106, 106);\n  font-size: 0.8rem;\n  border-radius: 10px;\n  width: 100%;\n  --highlight-height: 0.5px !important;\n}\n\nion-button {\n  --background: var(--ion-color-naranja-oscuro);\n  font-size: 0.8rem;\n}\n\n.form {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n\n.Condicion {\n  color: var(--ion-color-naranja-oscuro);\n  padding: 10px 0px 30px 0px;\n}\n\n.contenedor {\n  width: auto;\n}\n\n.container {\n  width: 100%;\n}\n\n.col_back {\n  text-align: center;\n}\n\n.regresar > img {\n  width: 120%;\n  height: 180%;\n  padding: 50% 0% 0% 40%;\n}\n\n.regresar {\n  text-align: center;\n  padding: 30% 20% 0% 10%;\n  margin: auto;\n  display: flex;\n  --color-selected: #fff;\n  --color: #fff;\n  /*justify-content: start;\r\n    align-content: start;\r\n    align-items: start;*/\n  --background: linear-gradient(to left top,var(--ion-color-naranja-oscuro),var(--ion-color-naranja-claro));\n  /*font-size: 30px;\r\n    display: inline-block;\r\n    padding: 20px;*/\n}\n\n.col_logo {\n  text-align: center;\n}\n\n/*.logo{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    \r\n    display: inline-block;\r\n    font-size: 20px;\r\n    padding: 20px;\r\n}*/\n\n.logo {\n  text-align: right;\n  margin: auto;\n}\n\n.logo > img {\n  margin: auto;\n  width: 70%;\n  height: 110%;\n}\n\n.col_title {\n  text-align: left;\n}\n\n.perfil {\n  text-align: center;\n}\n\n.select-profile-picture {\n  text-align: left;\n  font-size: 12px;\n  margin: 0 auto;\n}\n\n.btn_regresar > img {\n  height: 100%;\n  width: 100%;\n  float: left;\n}\n\n.header > img {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.hoverable > img {\n  height: 100%;\n  width: 100%;\n  padding: 0%;\n  border-radius: 50%;\n}\n\n.hoverable {\n  display: inline-block;\n  cursor: pointer;\n  height: 140px;\n  width: 120px;\n  border-radius: 50%;\n  margin: 0 auto;\n  padding-bottom: 25px;\n}\n\n/*\r\n  .hoverable .hover-text{\r\n    position: absolute;\r\n    display: none;\r\n    //top: 30%;\r\n    left:  50%;\r\n    transform: translate(-50%,-50%);   \r\n    z-index: 2;\r\n    margin: 0 auto;\r\n    border-radius: 50%;\r\n  }*/\n\n/*\r\n  .hoverable .background{\r\n    position: absolute;\r\n    display: none;\r\n    top: 0;\r\n    left:  0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color:rgba(255, 255, 255, 0.5);\r\n    pointer-events: none;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n    margin: 0 auto;\r\n  }*/\n\n/*.hoverable:hover .hover-text{\r\n    display: block;\r\n    margin: 0 auto;\r\n  }\r\n  .hoverable:hover .background{\r\n    display: block;\r\n    margin: 0 auto;\r\n  }*/\n\n#fileInput {\n  display: none;\n  height: 20%;\n  padding-top: 0px;\n}\n\n/*\r\n  .x{\r\n    z-index: 3;\r\n    display: relative;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n  }*/\n\n/** ion-input{\r\n    --placeholder-color: red;\r\n    --placeholder-opacity: 1;\r\n    --content: \"*\";\r\n}*/\n\n/*\r\ninput{\r\n  background: #e7e7e7;\r\n  border: none!important;\r\n}*/\n\n/*\r\n:-ms-input-placeholder::after{\r\n  color:red;\r\n  content: \"*\"!important;\r\n}\r\n::placeholder:after{color:red!important;content:\" *\"!important;}\r\ninput[placeholder]::after{\r\n  content: attr(\"*\");\r\n}\r\n*/\n\n.terminos {\n  font-family: \"MyriadPro-Light\" !important;\n  font-size: 0.8rem;\n}\n\n.radio {\n  padding-right: 10px !important;\n  float: left;\n  padding-left: 10px !important;\n  width: 2.5rem;\n}\n\n.delete {\n  justify-content: left;\n  align-content: left;\n  align-items: left;\n  text-align: start;\n}\n\n#button {\n  line-height: 12px;\n  width: 30px;\n  height: 30px;\n  font-size: 20pt;\n  margin-top: 1px;\n  margin-right: 95px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none !important;\n  border-radius: 20px;\n  background-color: transparent;\n  text-align: start !important;\n}\n\nion-button.btn-registro {\n  height: 100% !important;\n}\n\n.button-content {\n  height: 100% !important;\n  margin: 0 auto;\n}\n\nion-footer {\n  margin: 0 auto !important;\n}\n\n.registro {\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Ryby9yZWdpc3Ryby9EOlxcZ2l0XFxDYWJ1dG9Gcm9udC9zcmNcXGFwcFxcYXV0aFxccmVnaXN0cm9cXHJlZ2lzdHJvXFxyZWdpc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcmVnaXN0cm8vcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQTJDO0FDQzdDOztBRENBO0VBQ0UsV0FBVztBQ0ViOztBRENBO0VBQ0UsNkNBQWE7QUNFZjs7QURBQTtFQUNFLGNBQWM7QUNHaEI7O0FEQUE7RUFDRSxXQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixVQUFTO0FDR1g7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsYUFBUTtFQUNSLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFVBQVU7QUNHZDs7QURBQTtFQUNFLHlCQUF5QjtFQUN2QixxQkFBYTtFQUNiLDJCQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNyQixXQUFVO0VBQ1Isb0NBQW1CO0FDR3ZCOztBRENBO0VBQ0ksNkNBQWE7RUFDYixpQkFBaUI7QUNFckI7O0FEQ0E7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUNFdkI7O0FEQ0E7RUFFSSxzQ0FBcUM7RUFDckMsMEJBQTBCO0FDQzlCOztBREVBO0VBQ0ksV0FBVztBQ0NmOztBRENBO0VBQ0ksV0FBVztBQ0VmOztBRENFO0VBQ0Usa0JBQWtCO0FDRXRCOztBRENBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUNFMUI7O0FEQ0E7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQWlCO0VBQ2pCLGFBQVE7RUFDUjs7d0JDR29CO0VEQXBCLHlHQUFhO0VBQ2I7O21CQ0dlO0FBQ25COztBRENBO0VBQ0ksa0JBQWtCO0FDRXRCOztBRENBOzs7Ozs7Ozs7RUNVRTs7QURBRjtFQUNJLGlCQUFpQjtFQUVqQixZQUFZO0FDQ2hCOztBREVBO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0FDQ2hCOztBREdBO0VBQ0ksZ0JBQWdCO0FDQXBCOztBRElFO0VBQ0Usa0JBQWtCO0FDRHRCOztBRElFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FDRGxCOztBRElFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFVO0FDRGQ7O0FER0U7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUdYLGNBQWM7QUNGbEI7O0FES0U7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUNGdEI7O0FESUU7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBRVosa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBb0I7QUNIeEI7O0FES0U7Ozs7Ozs7Ozs7SUNPRTs7QURJRjs7Ozs7Ozs7Ozs7OztJQ1VFOztBRElGOzs7Ozs7O0lDSUU7O0FES0Y7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQ0hwQjs7QURNQTs7Ozs7OztJQ0dJOztBRE1IOzs7O0VDREM7O0FETUY7Ozs7RUNERTs7QURNRjs7Ozs7Ozs7O0NDSUM7O0FETUQ7RUFDRSx5Q0FBd0M7RUFDeEMsaUJBQWlCO0FDSm5COztBRE9BO0VBQ0UsOEJBQTZCO0VBQzdCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsYUFBYTtBQ0pmOztBRE1BO0VBQ0UscUJBQXFCO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FDSHJCOztBREtBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLE1BQUs7RUFDTCxRQUFPO0VBQ1AsdUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTBCO0FDRjVCOztBREtBO0VBQ0UsdUJBQXNCO0FDRnhCOztBREtBO0VBQ0UsdUJBQXNCO0VBQ3RCLGNBQWM7QUNGaEI7O0FESUE7RUFDRSx5QkFBd0I7QUNEMUI7O0FESUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQ0R0QiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cm8vcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTt9XHJcblxyXG5pb24taGVhZGVye1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYnRuX3JlZ3Jlc2Fye1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjIwcHg7XHJcbiAgbGVmdDoxMHB4O1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICAvKndpZHRoOiBhdXRvOyovXHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgaGVpZ2h0OiAwJTtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgcGFkZGluZzogMHB4IDBweCAxNnB4IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIC0tY29sb3I6IHJnYigxMTIsIDEwNiwgMTA2KTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwLjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5Db25kaWNpb257XHJcbiAgICAvLy0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDMwcHggMHB4O1xyXG59XHJcblxyXG4uY29udGVuZWRvcntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuICAuY29sX2JhY2t7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdyZXNhciA+IGltZ3tcclxuICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgaGVpZ2h0OiAxODAlO1xyXG4gICAgcGFkZGluZzogNTAlIDAlIDAlIDQwJTtcclxufVxyXG5cclxuLnJlZ3Jlc2Fye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzAlIDIwJSAwJSAxMCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmOztcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAvKmp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDsqL1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKSx2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1jbGFybykpO1xyXG4gICAgLypmb250LXNpemU6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4OyovXHJcbn1cclxuXHJcbi5jb2xfbG9nb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyoubG9nb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn0qL1xyXG4ubG9nb3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLy9wYWRkaW5nOiA1JSAwJSAwJSAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmxvZ28gPiBpbWd7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxMTAlO1xyXG59XHJcblxyXG5cclxuLmNvbF90aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4gIC5wZXJmaWx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0LXByb2ZpbGUtcGljdHVyZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bl9yZWdyZXNhciA+aW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gIH1cclxuICAuaGVhZGVyID4gaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvL3BhZGRpbmctbGVmdDogMzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmhvdmVyYWJsZSA+IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuaG92ZXJhYmxle1xyXG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgLy9ib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgLypcclxuICAuaG92ZXJhYmxlIC5ob3Zlci10ZXh0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8vdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiAgNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgICBcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9Ki9cclxuICAvKlxyXG4gIC5ob3ZlcmFibGUgLmJhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogIDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfSovXHJcbiAgLyouaG92ZXJhYmxlOmhvdmVyIC5ob3Zlci10ZXh0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmhvdmVyYWJsZTpob3ZlciAuYmFja2dyb3VuZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfSovXHJcbiAgXHJcbiAgI2ZpbGVJbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7IFxyXG4gIH1cclxuICBcclxuLypcclxuICAueHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH0qL1xyXG5cclxuIC8qKiBpb24taW5wdXR7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAtLWNvbnRlbnQ6IFwiKlwiO1xyXG59Ki9cclxuLypcclxuaW5wdXR7XHJcbiAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG59Ki9cclxuLypcclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlcjo6YWZ0ZXJ7XHJcbiAgY29sb3I6cmVkO1xyXG4gIGNvbnRlbnQ6IFwiKlwiIWltcG9ydGFudDtcclxufVxyXG46OnBsYWNlaG9sZGVyOmFmdGVye2NvbG9yOnJlZCFpbXBvcnRhbnQ7Y29udGVudDpcIiAqXCIhaW1wb3J0YW50O31cclxuaW5wdXRbcGxhY2Vob2xkZXJdOjphZnRlcntcclxuICBjb250ZW50OiBhdHRyKFwiKlwiKTtcclxufVxyXG4qL1xyXG4udGVybWlub3N7XHJcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvLUxpZ2h0XCIhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIC8vcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ucmFkaW97XHJcbiAgcGFkZGluZy1yaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7IFxyXG4gIHdpZHRoOiAyLjVyZW07XHJcbn1cclxuLmRlbGV0ZXtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG4jYnV0dG9uIHtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDk1cHg7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgcmlnaHQ6MDtcclxuICBib3JkZXI6bm9uZSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LWFsaWduOnN0YXJ0IWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5idG4tcmVnaXN0cm97XHJcbiAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICBtYXJnaW46IDAgYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWdpc3Ryb3tcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufSIsIioge1xuICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNSU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pO1xufVxuXG5pb24taGVhZGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5idG5fcmVncmVzYXIge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIC8qd2lkdGg6IGF1dG87Ki9cbiAgLS1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggMHB4IDE2cHggMHB4O1xuICAtLWJhY2tncm91bmQ6ICNlN2U3ZTc7XG4gIC0tY29sb3I6IHJnYigxMTIsIDEwNiwgMTA2KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDAuNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5Db25kaWNpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcbiAgcGFkZGluZzogMTBweCAwcHggMzBweCAwcHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbF9iYWNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVncmVzYXIgPiBpbWcge1xuICB3aWR0aDogMTIwJTtcbiAgaGVpZ2h0OiAxODAlO1xuICBwYWRkaW5nOiA1MCUgMCUgMCUgNDAlO1xufVxuXG4ucmVncmVzYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwJSAyMCUgMCUgMTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNmZmY7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC8qanVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0OyovXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3VybyksdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtY2xhcm8pKTtcbiAgLypmb250LXNpemU6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4OyovXG59XG5cbi5jb2xfbG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyoubG9nb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn0qL1xuLmxvZ28ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9nbyA+IGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxMTAlO1xufVxuXG4uY29sX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBlcmZpbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlbGVjdC1wcm9maWxlLXBpY3R1cmUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnRuX3JlZ3Jlc2FyID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5oZWFkZXIgPiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhvdmVyYWJsZSA+IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ob3ZlcmFibGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLypcclxuICAuaG92ZXJhYmxlIC5ob3Zlci10ZXh0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8vdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiAgNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgICBcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9Ki9cbi8qXHJcbiAgLmhvdmVyYWJsZSAuYmFja2dyb3VuZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAgMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9Ki9cbi8qLmhvdmVyYWJsZTpob3ZlciAuaG92ZXItdGV4dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5ob3ZlcmFibGU6aG92ZXIgLmJhY2tncm91bmR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH0qL1xuI2ZpbGVJbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMjAlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4vKlxyXG4gIC54e1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSovXG4vKiogaW9uLWlucHV0e1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmVkO1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgLS1jb250ZW50OiBcIipcIjtcclxufSovXG4vKlxyXG5pbnB1dHtcclxuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XHJcbn0qL1xuLypcclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlcjo6YWZ0ZXJ7XHJcbiAgY29sb3I6cmVkO1xyXG4gIGNvbnRlbnQ6IFwiKlwiIWltcG9ydGFudDtcclxufVxyXG46OnBsYWNlaG9sZGVyOmFmdGVye2NvbG9yOnJlZCFpbXBvcnRhbnQ7Y29udGVudDpcIiAqXCIhaW1wb3J0YW50O31cclxuaW5wdXRbcGxhY2Vob2xkZXJdOjphZnRlcntcclxuICBjb250ZW50OiBhdHRyKFwiKlwiKTtcclxufVxyXG4qL1xuLnRlcm1pbm9zIHtcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvLUxpZ2h0XCIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yYWRpbyB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMi41cmVtO1xufVxuXG4uZGVsZXRlIHtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbiNidXR0b24ge1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyMHB0O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1yaWdodDogOTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24uYnRuLXJlZ2lzdHJvIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tY29udGVudCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW9uLWZvb3RlciB7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5yZWdpc3RybyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/auth/registro/registro/registro.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/registro/registro/registro.page.ts ***!
  \*********************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/auth/servicios/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicios/fcm.service */ "./src/app/servicios/fcm.service.ts");
/* harmony import */ var src_app_servicios_perfil_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/servicios/perfil.service */ "./src/app/servicios/perfil.service.ts");
/* harmony import */ var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../aviso/correcto/correcto.page */ "./src/app/aviso/correcto/correcto.page.ts");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");
/* harmony import */ var src_app_politicas_politicas_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/politicas/politicas.page */ "./src/app/politicas/politicas.page.ts");















let RegistroPage = class RegistroPage {
    constructor(authService, router, loading, navCtrlr, modalCtrl, fcm, firebase, perfilService, storage, component) {
        this.authService = authService;
        this.router = router;
        this.loading = loading;
        this.navCtrlr = navCtrlr;
        this.modalCtrl = modalCtrl;
        this.fcm = fcm;
        this.firebase = firebase;
        this.perfilService = perfilService;
        this.storage = storage;
        this.component = component;
        this.fileUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({});
        this.formData = new FormData();
        this.url = '';
        this.x = '';
        this.type = "password";
        this.passwordToggleIcon = 'eye';
        this.showPass = false;
    }
    ngOnInit() {
    }
    register(form) {
        form = form.value;
        console.log(form);
        console.log(form.confirmar);
        console.log(form.contrasena);
        var contra = form.contrasena;
        var conf = form.confirmar;
        var cedula = form.cedula;
        console.log(typeof (cedula));
        console.log(cedula);
        console.log(this.formData.getAll('file'));
        console.log(isNaN(cedula));
        const foto = {
            'url': this.formData.getAll('file')
        };
        const formR = {
            'cedula': form.cedula,
            'nombre': form.nombre,
            'apellido': form.apellido,
            'email': form.email,
            'contrasena': form.contrasena,
            'confirmar': form.confirmar
        };
        console.log(formR);
        if (form.cedula == '' || form.nombre == '' || form.apellido == '' || form.correo == "" || form.contrasena == "" || form.confirmar == "") {
            this.mensajeIncorrecto("Campos Incompletos", "Por favor complete los campos");
        }
        else {
            if (isNaN(cedula) == false) {
                var int_length = cedula.length;
                console.log(int_length);
                if (!this.validarCedula(cedula)) {
                    this.mensajeIncorrecto("Revisar cédula", "Su cédula no es válida");
                }
                else if ((int_length < 10 && int_length < 13) || int_length > 13) {
                    this.mensajeIncorrecto("Revisar RUC", "Recuerde que si ingresa cédula deben ser  RUC 13 dígitos");
                }
                else if (this.validarEmail(form.email) == false) {
                    this.mensajeIncorrecto("Revisar correo", "Escriba de su correo de manera correcta");
                }
                else if (contra != conf) {
                    this.mensajeIncorrecto("Registro Fallido", "Las contraseñas no coinciden, verifique que las contraseñas sean iguales");
                }
                console.log("voy a comparar");
                console.log(this.isEqual(form.nombre, form.apellido));
                if (contra == conf && (this.validarCedula(cedula) || int_length == 13) && this.validarEmail(form.email)) {
                    if (isNaN(form.nombre) && isNaN(form.apellido)) {
                        console.log("voy a comparar");
                        console.log(this.isEqual(form.nombre, form.apellido));
                        if (this.isEqual(form.nombre, form.apellido)) {
                            this.mensajeIncorrecto("Registro Fallido", "El nombre y apellido registrado son iguales");
                        }
                        else {
                            this.showLoading(formR);
                        }
                    }
                    else {
                        this.mensajeIncorrecto("Registro Fallido", "Por favor ingrese un nombre y apellido de manera  correcta");
                    }
                }
            }
            else {
                this.mensajeIncorrecto("Ruc/Cédula ", "Su Cédula debe contener solo numeros");
            }
        }
    }
    regresar() {
        let animations = {
            animated: true,
            animationDirection: "back"
        };
        this.navCtrlr.back(animations);
    }
    registroR(formR) {
        this.authService.addUser(formR).subscribe(data => {
            console.log("imprimiendo data", data, formR);
            if (data.valid == "OK") {
                this.mensajeCorrecto("Registro exitoso", "");
                var nombre = data.nombre;
                var apellido = data.apellido;
                var id = data.id;
                console.log(nombre);
                console.log(apellido);
                _global__WEBPACK_IMPORTED_MODULE_6__["login"].login = true;
                this.storage.set('id', id);
                this.storage.set('name', nombre);
                this.storage.set('apellido', apellido);
                this.storage.set('correo', formR.email);
                this.storage.set('number', "");
                this.component.name = nombre;
                this.component.lastname = apellido;
                this.component.action = "Cerrar Sesión";
                this.perfilS(formR.email);
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
                console.log(_global__WEBPACK_IMPORTED_MODULE_6__["login"]);
                if (_global__WEBPACK_IMPORTED_MODULE_6__["login"].categoria == true) {
                    this.router.navigateByUrl('/footer/categorias/detalle-categoria');
                }
                else if (_global__WEBPACK_IMPORTED_MODULE_6__["login"].oferta == true && (_global__WEBPACK_IMPORTED_MODULE_6__["login"].producto = false)) {
                    this.router.navigateByUrl('/footer/ofertas');
                }
                else if (_global__WEBPACK_IMPORTED_MODULE_6__["login"].producto == true) {
                    this.router.navigateByUrl('/footer/producto');
                }
                else {
                    this.router.navigateByUrl('/');
                }
            }
            else if (data.valid == 'CED') {
                this.mensajeIncorrecto("Error", "La cédula ya se encuentra registrada");
                this.router.navigateByUrl('/registro');
            }
            else if (data.valid == 'EMAIL') {
                this.mensajeIncorrecto("Error", "El correo ya se encuentra registrado");
                this.router.navigateByUrl('/registro');
            }
            else {
                this.mensajeIncorrecto("Error", "Ha ocurrido un error, intentar de nuevo");
                this.router.navigateByUrl('/registro');
            }
        });
    }
    validarCedula(cedula) {
        // Créditos: Victor Diaz De La Gasca.
        // Autor: Adrián Egüez
        console.log(cedula);
        if (cedula.length === 10) {
            const digitoRegion = cedula.substring(0, 2);
            console.log(digitoRegion);
            if (Number(digitoRegion) >= 1 && Number(digitoRegion) <= 24) {
                const ultimoDigito = Number(cedula.substring(9, 10));
                const pares = Number(cedula.substring(1, 2)) + Number(cedula.substring(3, 4)) + Number(cedula.substring(5, 6)) + Number(cedula.substring(7, 8));
                let numeroUno = cedula.substring(0, 1);
                numeroUno = (numeroUno * 2);
                if (numeroUno > 9) {
                    numeroUno = (numeroUno - 9);
                }
                let numeroTres = cedula.substring(2, 3);
                numeroTres = (numeroTres * 2);
                if (numeroTres > 9) {
                    numeroTres = (numeroTres - 9);
                }
                let numeroCinco = cedula.substring(4, 5);
                numeroCinco = (numeroCinco * 2);
                if (numeroCinco > 9) {
                    numeroCinco = (numeroCinco - 9);
                }
                let numeroSiete = cedula.substring(6, 7);
                numeroSiete = (numeroSiete * 2);
                if (numeroSiete > 9) {
                    numeroSiete = (numeroSiete - 9);
                }
                let numeroNueve = cedula.substring(8, 9);
                numeroNueve = (numeroNueve * 2);
                if (numeroNueve > 9) {
                    numeroNueve = (numeroNueve - 9);
                }
                const impares = numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;
                const sumaTotal = (pares + impares);
                const primerDigitoSuma = String(sumaTotal).substring(0, 1);
                const decena = (Number(primerDigitoSuma) + 1) * 10;
                console.log(decena);
                let digitoValidador = decena - sumaTotal;
                console.log(digitoValidador);
                if (digitoValidador === 10) {
                    digitoValidador = 0;
                }
                console.log(digitoValidador);
                if (digitoValidador === ultimoDigito) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
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
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            console.log(event.target.files);
            console.log(event.target.files[0]);
            console.log(event.target.files[0].name);
            this.formData.append('file', event.target.files[0]);
            reader.onload = (event) => {
                var ul = "";
                var buf = this.convert(event.target.result, ul);
                this.url = buf;
            };
        }
    }
    delete() {
        this.url = '';
    }
    uploadPersonaImage(e) {
        console.log(e.target.src);
    }
    convert(buff, buff2) {
        for (var i = 0, strLen = buff.length; i < strLen; i++) {
            buff2 = buff2 + buff[i];
        }
        var buff3 = buff2;
        return buff3;
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
    validarEmail(valor) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(valor) ? true : false;
    }
    isEqual(str1, str2) {
        return str1.toUpperCase() === str2.toUpperCase();
    }
    showLoading(form) {
        this.loading.create({
            message: 'Loading.....'
        }).then((loading) => {
            loading.present();
            {
                this.registroR(form);
            }
            setTimeout(() => {
                loading.dismiss();
            }, 2000);
        });
    }
    mensajeCorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_12__["CorrectoPage"],
                cssClass: 'CorrectoProducto',
                componentProps: {
                    'titulo': titulo,
                    'mensaje': mensaje
                }
            });
            return yield modal.present();
        });
    }
    politicas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_politicas_politicas_page__WEBPACK_IMPORTED_MODULE_14__["PoliticasPage"],
                cssClass: 'Politicas',
            });
            return yield modal.present();
        });
    }
    mensajeIncorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_13__["IncorrectoPage"],
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
RegistroPage.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_10__["FcmService"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseX"] },
    { type: src_app_servicios_perfil_service__WEBPACK_IMPORTED_MODULE_11__["PerfilService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] }
];
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro/registro/registro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro.page.scss */ "./src/app/auth/registro/registro/registro.page.scss")).default]
    })
], RegistroPage);

//https://stackblitz.com/edit/angular-file-upload-preview-85v9bg


/***/ })

}]);
//# sourceMappingURL=auth-registro-registro-registro-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalle-categoria-detalle-categoria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/detalle-categoria/detalle-categoria.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/detalle-categoria/detalle-categoria.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"contenedor-page\">\r\n    <ion-label class=\"titulo\" *ngIf=categoria>{{categoria}}</ion-label>\r\n    <div class=\"contenedor\">\r\n      <div class=\"contener-producto\" *ngFor=\"let productos of producto\">\r\n        <div class=\"div-producto\">\r\n          <div class=\"contener-columnaI\">\r\n            <div class=\"producto\">\r\n              <img name=\"imagen\" src=\"http://cabutoshop.pythonanywhere.com{{productos.imagen}}\">\r\n            </div>\r\n            <h6 class=\"detalle\"\r\n              (click)=detalle(productos.imagen,productos.nombre,productos.descripcion,productos.precio)>\r\n              Ver detalle</h6>\r\n          </div>\r\n          <div class=\"contener-columna\">\r\n            <div class=\"nombre\">\r\n              <h6 class=\"nombre-producto\" name=\"nombre\">{{productos.nombre}}</h6>\r\n            </div>\r\n            <div class=\"producto-carrito\">\r\n              <img src=\"../assets/img/agregar.png\" width=\"10\" height=\"10\" class=\"btn-producto\" id=\"mas\"\r\n                (click)=agregar(productos.id_unico)>\r\n              <div id=\"{{productos.id_unico}}\" class=\"cantidad estilo-cantidad\">0</div>\r\n              <img src=\"../assets/img/restar.png\" width=\"10\" height=\"3\" class=\"btn-producto\" id=\"menos\"\r\n                (click)=quitar(productos.id_unico)>\r\n            </div>\r\n          </div>\r\n          <div class=\"contener-columna-centrar\">\r\n            <div class=\"precio\">\r\n              <h4 name=\"precio\">${{productos.precio}}</h4>\r\n            </div>\r\n            <div class=\"carrito\">\r\n              <img src=\"../assets/img/carrito_activo.png\" height=\"23\" (click)=carrito(productos.id_unico)>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/categorias/detalle-categoria/detalle-categoria-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/categorias/detalle-categoria/detalle-categoria-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: DetalleCategoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCategoriaPageRoutingModule", function() { return DetalleCategoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detalle_categoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-categoria.page */ "./src/app/categorias/detalle-categoria/detalle-categoria.page.ts");




const routes = [
    {
        path: '',
        component: _detalle_categoria_page__WEBPACK_IMPORTED_MODULE_3__["DetalleCategoriaPage"]
    }
];
let DetalleCategoriaPageRoutingModule = class DetalleCategoriaPageRoutingModule {
};
DetalleCategoriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalleCategoriaPageRoutingModule);



/***/ }),

/***/ "./src/app/categorias/detalle-categoria/detalle-categoria.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/categorias/detalle-categoria/detalle-categoria.module.ts ***!
  \**************************************************************************/
/*! exports provided: DetalleCategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCategoriaPageModule", function() { return DetalleCategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detalle_categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalle-categoria-routing.module */ "./src/app/categorias/detalle-categoria/detalle-categoria-routing.module.ts");
/* harmony import */ var _detalle_categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-categoria.page */ "./src/app/categorias/detalle-categoria/detalle-categoria.page.ts");







let DetalleCategoriaPageModule = class DetalleCategoriaPageModule {
};
DetalleCategoriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalle_categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleCategoriaPageRoutingModule"]
        ],
        declarations: [_detalle_categoria_page__WEBPACK_IMPORTED_MODULE_6__["DetalleCategoriaPage"]]
    })
], DetalleCategoriaPageModule);



/***/ }),

/***/ "./src/app/categorias/detalle-categoria/detalle-categoria.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/categorias/detalle-categoria/detalle-categoria.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  height: 10px;\n  width: 100%;\n}\n\n* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.titulo {\n  font-family: var(--ion-font-family);\n  font-weight: bold;\n  font-size: larger;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 1.7rem;\n}\n\n.icono {\n  position: relative;\n  right: 10px;\n  width: 20px;\n  height: 20px;\n}\n\nion-toolbar {\n  --background: linear-gradient(to left,var(--ion-color-naranja-oscuro),var(--ion-color-naranja-claro));\n}\n\n.contenedor-searchbar {\n  display: flex;\n  align-items: center;\n  background: var(--ion-color-gris-claro);\n  color: var(--ion-color-gris-oscuro);\n  border-radius: 5px;\n  height: 40px;\n  width: 100%;\n  font-size: 1rem;\n}\n\n.contenedor {\n  padding: 20px 0px;\n}\n\nion-input {\n  font-weight: bold;\n}\n\n.contenedor-page {\n  padding: 20px 30px;\n}\n\n.subtitulo {\n  color: var(--ion-color-gris-oscuro);\n  font-weight: lighter;\n  padding: 10px 0px 0px 10px;\n  font-size: 0.8rem !important;\n  padding-right: 5px;\n  vertical-align: middle;\n}\n\n.div-producto {\n  display: flex;\n  flex-flow: row nowrap;\n  /* Align on the same line */\n  justify-content: space-around;\n  vertical-align: middle;\n  box-shadow: 5px 5px 5px 5px #c2c2c2;\n  border-radius: 20px;\n  height: 130px;\n}\n\n.producto-carrito {\n  position: absolute;\n  left: 12rem;\n  display: -webkit-inline-box;\n}\n\n.btn-producto {\n  vertical-align: middle;\n}\n\n#mas {\n  margin-right: 12px;\n}\n\n#menos {\n  margin-left: 12px;\n}\n\n.estilo-cantidad {\n  width: 22px;\n  height: 22px;\n  border-radius: 5px;\n  border: solid 1px gray;\n  vertical-align: middle;\n  font-size: 12px;\n  text-align: center;\n  line-height: 1.2rem;\n}\n\n.contener-producto {\n  padding: 20px 0px;\n}\n\n.contener-columna {\n  display: block;\n}\n\n.nombre-producto {\n  font-family: var(--ion-font-family);\n  font-weight: bold;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 14px;\n  position: relative;\n  top: 20px;\n  right: 10px;\n}\n\n.producto {\n  position: relative;\n  bottom: 20px;\n  height: 5rem;\n  width: 8rem;\n}\n\n.producto > img {\n  height: 120px !important;\n  width: 150px !important;\n  padding-bottom: 5px;\n}\n\n.detalle {\n  position: relative;\n  bottom: 0px;\n  text-align: center;\n  font-style: italic;\n  font-size: smaller;\n  color: #2153FF;\n}\n\n.nombre {\n  width: 150px;\n  height: 80px;\n  padding-left: 25px;\n  font-size: 1rem;\n  padding-top: 0px;\n}\n\n.nombre h6 {\n  padding-top: 0px;\n}\n\n.precio {\n  color: var(--ion-color-naranja-oscuro);\n  font-weight: bolder;\n  position: relative;\n  padding-left: 0px;\n  padding-right: 30px;\n  text-align: right;\n}\n\ndiv.precio h4 {\n  position: relative;\n  padding-left: 0px;\n  text-align: right;\n  font-size: 1rem;\n}\n\ndiv.carrito img {\n  position: absolute;\n  top: 95px;\n  right: 2rem;\n}\n\n.centrar {\n  width: 70px;\n}\n\n.contener-columna-centrar {\n  float: right;\n  position: relative;\n  width: 30%;\n  padding: 0px 0px 0px 0px;\n  text-align: right;\n  justify-content: flex-end;\n}\n\n.contener-columnaI {\n  float: right;\n  position: relative;\n  padding-left: 0px;\n  text-align: right;\n  justify-content: flex-end;\n}\n\n.carrito {\n  padding-left: 0px;\n  padding-right: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhcy9kZXRhbGxlLWNhdGVnb3JpYS9EOlxcZ2l0XFxDYWJ1dG9Gcm9udC9zcmNcXGFwcFxcY2F0ZWdvcmlhc1xcZGV0YWxsZS1jYXRlZ29yaWFcXGRldGFsbGUtY2F0ZWdvcmlhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmlhcy9kZXRhbGxlLWNhdGVnb3JpYS9kZXRhbGxlLWNhdGVnb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztBQ0NmOztBREVBO0VBQ0ksMkNBQTJDO0FDQy9DOztBREVBO0VBQ0ksbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQ0NyQjs7QURHQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7QUNBaEI7O0FER0E7RUFDSSxxR0FBYTtBQ0FqQjs7QURJQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FDRG5COztBRElBO0VBQ0ksaUJBQWlCO0FDRHJCOztBRElBO0VBQ0ksaUJBQWlCO0FDRHJCOztBRElBO0VBQ0ksa0JBQWtCO0FDRHRCOztBRElBO0VBQ0ksbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsNEJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUNEMUI7O0FESUE7RUFDSSxhQUFhO0VBQ1oscUJBQXFCO0VBQUUsMkJBQUE7RUFDMUIsNkJBQTZCO0VBQy9CLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDL0IsbUJBQW1CO0VBQ25CLGFBQWE7QUNBakI7O0FESUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDJCQUEyQjtBQ0QvQjs7QURJQTtFQUNBLHNCQUFzQjtBQ0R0Qjs7QURLQTtFQUNJLGtCQUFtQjtBQ0Z2Qjs7QURJQTtFQUNJLGlCQUFrQjtBQ0R0Qjs7QURLQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNGdkI7O0FESUE7RUFDSSxpQkFBZ0I7QUNEcEI7O0FESUE7RUFDSSxjQUFjO0FDRGxCOztBRElBO0VBQ0ssbUNBQW1DO0VBQ3BDLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsV0FBVztBQ0RmOztBRElBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQ0RmOztBRElBO0VBQ0ksd0JBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0QixtQkFBbUI7QUNEdkI7O0FESUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUNEbEI7O0FESUE7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FDRHBCOztBRElBO0VBQ0ksZ0JBQWdCO0FDRHBCOztBREtBO0VBQ0ksc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUNGckI7O0FETUE7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0FDSG5COztBRE1BO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FDSGY7O0FETUE7RUFDSSxXQUFXO0FDSGY7O0FETUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQ0g3Qjs7QURNQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUNIN0I7O0FES0E7RUFDSSxpQkFBaUI7RUFDakIsbUJBQW1CO0FDRnZCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmlhcy9kZXRhbGxlLWNhdGVnb3JpYS9kZXRhbGxlLWNhdGVnb3JpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbip7XHJcbiAgICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG5cclxuXHJcbi5pY29ub3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCx2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pLHZhcigtLWlvbi1jb2xvci1uYXJhbmphLWNsYXJvKSk7XHJcbn1cclxuXHJcblxyXG4uY29udGVuZWRvci1zZWFyY2hiYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmlzLWNsYXJvKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3Jpcy1vc2N1cm8pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgXHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5jb250ZW5lZG9ye1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29udGVuZWRvci1wYWdle1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG59XHJcblxyXG4uc3VidGl0dWxve1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmlzLW9zY3Vybyk7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW0haW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRpdi1wcm9kdWN0b3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgZmxleC1mbG93OiByb3cgbm93cmFwOyAvKiBBbGlnbiBvbiB0aGUgc2FtZSBsaW5lICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IFxyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5ib3gtc2hhZG93OiA1cHggNXB4IDVweCA1cHggI2MyYzJjMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG5cclxuXHJcbn1cclxuLnByb2R1Y3RvLWNhcnJpdG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMnJlbTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxufVxyXG5cclxuLmJ0bi1wcm9kdWN0b3tcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbn1cclxuXHJcbiNtYXN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICAxMnB4O1xyXG59XHJcbiNtZW5vc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAgMTJweDtcclxuXHJcbn1cclxuXHJcbi5lc3RpbG8tY2FudGlkYWR7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxufVxyXG4uY29udGVuZXItcHJvZHVjdG97XHJcbiAgICBwYWRkaW5nOjIwcHggMHB4O1xyXG59XHJcblxyXG4uY29udGVuZXItY29sdW1uYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubm9tYnJlLXByb2R1Y3Rve1xyXG4gICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0b3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdG8gPmltZyB7XHJcbiAgICBoZWlnaHQ6MTIwcHghaW1wb3J0YW50IDtcclxuICAgIHdpZHRoOiAxNTBweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZGV0YWxsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgY29sb3I6ICMyMTUzRkY7XHJcbn1cclxuXHJcbi5ub21icmV7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubm9tYnJlIGg2e1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuXHJcbi5wcmVjaW97XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIFxyXG59XHJcblxyXG5kaXYucHJlY2lvIGg0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuZGl2LmNhcnJpdG8gaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5NXB4O1xyXG4gICAgcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5jZW50cmFye1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5jb250ZW5lci1jb2x1bW5hLWNlbnRyYXJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY29udGVuZXItY29sdW1uYUl7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uY2Fycml0b3tcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG4iLCJpb24taGVhZGVyIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8ge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5pY29ubyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCx2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pLHZhcigtLWlvbi1jb2xvci1uYXJhbmphLWNsYXJvKSk7XG59XG5cbi5jb250ZW5lZG9yLXNlYXJjaGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmlzLWNsYXJvKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmlzLW9zY3Vybyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29udGVuZWRvciB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbmVkb3ItcGFnZSB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cblxuLnN1YnRpdHVsbyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3Jpcy1vc2N1cm8pO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRpdi1wcm9kdWN0byB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgLyogQWxpZ24gb24gdGhlIHNhbWUgbGluZSAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4ICNjMmMyYzI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbi5wcm9kdWN0by1jYXJyaXRvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMnJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xufVxuXG4uYnRuLXByb2R1Y3RvIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuI21hcyB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuI21lbm9zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5lc3RpbG8tY2FudGlkYWQge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4ycmVtO1xufVxuXG4uY29udGVuZXItcHJvZHVjdG8ge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuLmNvbnRlbmVyLWNvbHVtbmEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5vbWJyZS1wcm9kdWN0byB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvZHVjdG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA1cmVtO1xuICB3aWR0aDogOHJlbTtcbn1cblxuLnByb2R1Y3RvID4gaW1nIHtcbiAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmRldGFsbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBjb2xvcjogIzIxNTNGRjtcbn1cblxuLm5vbWJyZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLm5vbWJyZSBoNiB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5wcmVjaW8ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmRpdi5wcmVjaW8gaDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5kaXYuY2Fycml0byBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTVweDtcbiAgcmlnaHQ6IDJyZW07XG59XG5cbi5jZW50cmFyIHtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5jb250ZW5lci1jb2x1bW5hLWNlbnRyYXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNvbnRlbmVyLWNvbHVtbmFJIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNhcnJpdG8ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/categorias/detalle-categoria/detalle-categoria.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/categorias/detalle-categoria/detalle-categoria.page.ts ***!
  \************************************************************************/
/*! exports provided: DetalleCategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCategoriaPage", function() { return DetalleCategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detalles_productos_detalles_productos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../detalles-productos/detalles-productos.page */ "./src/app/detalles-productos/detalles-productos.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");
/* harmony import */ var _servicios_producto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../servicios/producto.service */ "./src/app/servicios/producto.service.ts");
/* harmony import */ var _servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../servicios/shopping-cart.service */ "./src/app/servicios/shopping-cart.service.ts");
/* harmony import */ var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../aviso/correcto/correcto.page */ "./src/app/aviso/correcto/correcto.page.ts");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");












let DetalleCategoriaPage = class DetalleCategoriaPage {
    constructor(productoService, router, shoppingCart, loadingCtrl, storage, modalCtrl) {
        this.productoService = productoService;
        this.router = router;
        this.shoppingCart = shoppingCart;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.correo = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getCorreo();
        src_app_global__WEBPACK_IMPORTED_MODULE_6__["login"].categoria = false;
        this.storage.get('categoria').then((nombre) => {
            if (nombre != null) {
                this.categoria = nombre;
            }
            this.datos();
        });
    }
    datos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            this.productoService.getProductosCategoria(this.categoria)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loader.dismiss();
            })))
                .subscribe(data => {
                this.producto = data;
                console.log(data);
            }, (error) => {
                console.error(error);
            });
        });
    }
    showLoading2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                message: 'Loading.....'
            });
            yield this.loader.present();
        });
    }
    agregar(id) {
        var cantidad = document.querySelectorAll("[id='" + id + "']");
        console.log(cantidad[0]);
        var num = cantidad[0].innerHTML;
        console.log(typeof (num));
        cantidad[0].innerHTML = String(parseInt(cantidad[0].innerHTML) + 1);
    }
    quitar(id) {
        var cantidad = document.querySelectorAll("[id='" + id + "']");
        var num = cantidad[0].innerHTML;
        if ((parseInt(num) - 1) < 0) {
            cantidad[0].innerHTML = String(parseInt(cantidad[0].innerHTML));
        }
        else {
            cantidad[0].innerHTML = String(parseInt(cantidad[0].innerHTML) - 1);
        }
    }
    carrito(id) {
        this.getCorreo();
        this.storage.get('name').then((nombre) => {
            if (src_app_global__WEBPACK_IMPORTED_MODULE_6__["login"].login == false && nombre == null) {
                src_app_global__WEBPACK_IMPORTED_MODULE_6__["login"].categoria = true;
                this.router.navigateByUrl('/login');
            }
            else {
                var cantidad = document.getElementById(id);
                console.log("La cantidad que se agrega al carrito es: ", cantidad.innerHTML);
                if (parseInt(cantidad.innerHTML) > 0) {
                    const prodxcant = {
                        'nombre': this.getNombre(id),
                        'cantidad': parseInt(cantidad.innerHTML),
                        'correo': this.correo
                    };
                    this.shoppingCart.addProduct(prodxcant).subscribe(data => {
                        if (data.valid == "OK") {
                            this.mensajeCorrecto("Agregar Producto", "El producto se ha agregado al carrito");
                        }
                        else if (data.valid == "NOT") {
                            this.mensajeIncorrecto("Agregar Producto", "Ha ocurrido un error, revise su conexión");
                        }
                    });
                }
                else {
                    this.mensajeIncorrecto("Agregar Producto", "No ha escogido la cantidad para agregar");
                }
            }
        });
    }
    getNombre(id) {
        for (let i = 0; i < this.getProductLen(); i++) {
            if (id === this.producto[i]['id_unico']) {
                return this.producto[i]['nombre'];
            }
        }
    }
    getProductLen() {
        var pindex = 0;
        for (let p in this.producto) {
            pindex = +p + 1;
        }
        return pindex;
    }
    detalle(imagen, nombre, descripcion, precio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _detalles_productos_detalles_productos_page__WEBPACK_IMPORTED_MODULE_4__["DetallesProductosPage"],
                cssClass: 'DetallesProducto',
                componentProps: {
                    'imagen': imagen,
                    'nombre': nombre,
                    'descripcion': descripcion,
                    'precio': precio
                }
            });
            return yield modal.present();
        });
    }
    mensajeCorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_9__["CorrectoPage"],
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
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_10__["IncorrectoPage"],
                cssClass: 'IncorrectoProducto',
                componentProps: {
                    'titulo': titulo,
                    'mensaje': mensaje
                }
            });
            return yield modal.present();
        });
    }
    getCorreo() {
        console.log(src_app_global__WEBPACK_IMPORTED_MODULE_6__["login"].login);
        this.storage.get('correo').then((val) => {
            this.correo = val;
            console.log('name: ', this.correo);
        });
    }
};
DetalleCategoriaPage.ctorParameters = () => [
    { type: _servicios_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
DetalleCategoriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-categoria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detalle-categoria.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/detalle-categoria/detalle-categoria.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detalle-categoria.page.scss */ "./src/app/categorias/detalle-categoria/detalle-categoria.page.scss")).default]
    })
], DetalleCategoriaPage);



/***/ })

}]);
//# sourceMappingURL=detalle-categoria-detalle-categoria-module-es2015.js.map
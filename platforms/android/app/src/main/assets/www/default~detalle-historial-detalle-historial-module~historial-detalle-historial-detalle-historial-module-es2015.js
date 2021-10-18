(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~detalle-historial-detalle-historial-module~historial-detalle-historial-detalle-historial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/historial/detalle-historial/detalle-historial.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historial/detalle-historial/detalle-historial.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contenedor-page\">\r\n  <ion-label ion-fixed class=\"titulo\">Historial de compras</ion-label>\r\n  <div class=\"contenedor\" *ngIf=\"historial\">\r\n    <div class=\"contener-historial\">\r\n      <div class=\"div-historial\">\r\n        <div class=\"contener-columnaI\">\r\n          <img src=\"../assets/img/atras.png\" (click)=\"regresar()\">\r\n        </div>\r\n        <div class=\"contener-columna\">\r\n          <h6 class=\"nombre-historial\">Compra</h6>\r\n          <h6 class=\"nombre-historial\">{{ historial.fecha | date:'dd/MM/yyyy' }}</h6>\r\n          <h6 class=\"nombre-historial\">${{ historial.total | number : '1.2-2' }}</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ion-content>\r\n  <div class=\"contenedor-page\">\r\n    <div *ngIf=\"historial\">\r\n      <div class=\"contener-datos\">\r\n        <div class=\"campos\" *ngIf=\"perfil\">\r\n          <ion-label class=\"left\">Nombres: </ion-label>\r\n          <ion-label class=\"right\">{{perfil.nombre}} {{perfil.apellido}}</ion-label>\r\n        </div>\r\n        <div class=\"campos\" *ngIf=\"perfil\">\r\n          <ion-label class=\"left\">Cedula: </ion-label>\r\n          <ion-label class=\"right\">{{perfil.cedula}}</ion-label>\r\n        </div>\r\n        <div class=\"campos\" *ngIf=\"perfil\">\r\n          <ion-label class=\"left\">Teléfono: </ion-label>\r\n          <ion-label class=\"right\">{{perfil.telefono}}</ion-label>\r\n        </div>\r\n        <div class=\"campos\">\r\n          <ion-label class=\"left\">Fecha: </ion-label>\r\n          <ion-label class=\"right\">{{ historial.fecha | date:'dd/MM/yyyy' }}</ion-label>\r\n        </div>\r\n        <div class=\"campos\">\r\n          <ion-label class=\"left\">Tipo de entrega: </ion-label>\r\n          <ion-label class=\"right\">{{historial.tipo_entrega}}</ion-label>\r\n        </div>\r\n        <div class=\"campos\">\r\n          <ion-label class=\"left\">Tipo de pago: </ion-label>\r\n          <ion-label class=\"right\">{{historial.tipo_pago}}</ion-label>\r\n        </div>\r\n        <div class=\"campos\">\r\n          <ion-label class=\"left\">Descripción: </ion-label>\r\n          <ion-label class=\"right\">{{historial.observacion}}</ion-label>\r\n        </div>\r\n        <div class=\"div-producto\" *ngFor=\"let producto of productos\">\r\n          <div class=\"contenedor-columna\">\r\n            <div class=\"nombre-producto\">{{producto.producto__nombre}}</div>\r\n          </div>\r\n          <div class=\"contenedor-centro\">\r\n            <div id=\"\" class=\"cantidad\">{{producto.cantidad}}</div>\r\n          </div>\r\n          <div class=\"contener-columna-centrar\">\r\n            <div class=\"precio\">\r\n              ${{producto.precio | number : '1.2-2'}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"div-producto\" *ngFor=\"let producto of ofertas\">\r\n          <div class=\"contenedor-columna\">\r\n            <div class=\"nombre-producto\">{{producto.oferta__nombre}}</div>\r\n          </div>\r\n          <div class=\"contenedor-centro\">\r\n            <div id=\"\" class=\"cantidad\">{{producto.cantidad}}</div>\r\n          </div>\r\n          <div class=\"contener-columna-centrar\">\r\n            <div class=\"precio\">\r\n              ${{producto.precio | number : '1.2-2'}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"div-producto\" *ngFor=\"let producto of combos\">\r\n          <div class=\"contenedor-columna\">\r\n            <div class=\"nombre-producto\">{{producto.combo__nombre}}</div>\r\n          </div>\r\n          <div class=\"contenedor-centro\">\r\n            <div id=\"\" class=\"cantidad\">{{producto.cantidad}}</div>\r\n          </div>\r\n          <div class=\"contener-columna-centrar\">\r\n            <div class=\"precio\">\r\n              ${{producto.precio | number : '1.2-2'}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"div-producto\" *ngFor=\"let producto of cupones\">\r\n          <div class=\"contenedor-columna\">\r\n            <div class=\"nombre-producto\">{{producto.cupon__nombre}}</div>\r\n          </div>\r\n          <div class=\"contenedor-centro\">\r\n            <div id=\"\" class=\"cantidad\">{{producto.cantidad}}</div>\r\n          </div>\r\n          <div class=\"contener-columna-centrar\">\r\n            <div class=\"precio\">\r\n              ${{producto.precio | number : '1.2-2'}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"valores\">\r\n          <ion-label class=\"left\">Subtotal: </ion-label>\r\n          <ion-label class=\"right\">${{historial.subtotal | number : '1.2-2'}} </ion-label>\r\n        </div>\r\n        <div class=\"valores\">\r\n          <ion-label class=\"left\">Delivery: </ion-label>\r\n          <ion-label class=\"right\">${{historial.envio | number : '1.2-2'}}</ion-label>\r\n        </div>\r\n        <div class=\"valores\">\r\n          <ion-label class=\"left\">Impuestos: </ion-label>\r\n          <ion-label class=\"right\">${{historial.iva | number : '1.2-2'}}</ion-label>\r\n        </div>\r\n        <div class=\"valores\">\r\n          <ion-label class=\"left\">Total: </ion-label>\r\n          <ion-label class=\"right\">${{ historial.total | number : '1.2-2' }}</ion-label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"button-content\">\r\n        <ion-button class=\"btn-cancelar\" size=\"large\" *ngIf=\"historial.estado != 'Anulado'\" (click)=\"anular(historial.id_pedido, historial.cliente_id)\">\r\n          <p class=\"registro\">Anular</p>\r\n        </ion-button>\r\n        <ion-button class=\"btn-registro\" size=\"large\" *ngIf=\"historial.tipo_pago == 'Tarjeta' && !historial.pagado && historial.estado != 'Anulado'\" (click)=\"pagar(historial.id_pedido)\">\r\n          <p class=\"registro\">Pagar</p>\r\n        </ion-button>\r\n        <ion-button class=\"btn-registro\" size=\"large\" *ngIf=\"historial.estado == 'Entregado'\" (click)=\"calificar(historial.id_pedido)\">\r\n          <p class=\"registro\">Calificar</p>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/historial/detalle-historial/detalle-historial-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/historial/detalle-historial/detalle-historial-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DetalleHistorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleHistorialPageRoutingModule", function() { return DetalleHistorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detalle_historial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-historial.page */ "./src/app/historial/detalle-historial/detalle-historial.page.ts");




const routes = [
    {
        path: '',
        component: _detalle_historial_page__WEBPACK_IMPORTED_MODULE_3__["DetalleHistorialPage"]
    }
];
let DetalleHistorialPageRoutingModule = class DetalleHistorialPageRoutingModule {
};
DetalleHistorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalleHistorialPageRoutingModule);



/***/ }),

/***/ "./src/app/historial/detalle-historial/detalle-historial.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/historial/detalle-historial/detalle-historial.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetalleHistorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleHistorialPageModule", function() { return DetalleHistorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detalle_historial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalle-historial-routing.module */ "./src/app/historial/detalle-historial/detalle-historial-routing.module.ts");
/* harmony import */ var _detalle_historial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-historial.page */ "./src/app/historial/detalle-historial/detalle-historial.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let DetalleHistorialPageModule = class DetalleHistorialPageModule {
};
DetalleHistorialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalle_historial_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleHistorialPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalle_historial_page__WEBPACK_IMPORTED_MODULE_6__["DetalleHistorialPage"]]
    })
], DetalleHistorialPageModule);



/***/ }),

/***/ "./src/app/historial/detalle-historial/detalle-historial.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/historial/detalle-historial/detalle-historial.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-page {\n  padding: 6px 30px;\n  background: white;\n}\n\n.contenedor {\n  margin: 15px 0px 0px 0px;\n}\n\n.titulo {\n  font-weight: bold;\n  font-size: larger;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\n.div-historial {\n  display: flex;\n  align-items: center;\n  box-shadow: 3px 3px 3px 3px #c2c2c2;\n  border-radius: 15px;\n  height: 65px;\n  margin: auto;\n  justify-content: center;\n}\n\n.btn-establecimiento {\n  vertical-align: middle;\n}\n\n.contener-historial {\n  padding: 7px 0px;\n}\n\n.contener-columnaI {\n  justify-content: flex-start;\n  display: flex;\n  width: 20%;\n}\n\n.contener-columnaI img {\n  width: 2.2rem;\n}\n\n.contener-columna {\n  justify-content: space-between;\n  display: flex;\n  width: 65%;\n}\n\n.contener-columna .nombre-historial {\n  font-weight: bold;\n  font-size: 14px;\n  color: var(--ion-color-azul-oscuro);\n  margin-bottom: 2px;\n  margin-top: 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.campos {\n  display: table;\n  margin: 5px auto;\n}\n\n.campos .left {\n  text-align: left;\n  font-size: 3vw;\n  color: gray;\n  width: 20rem;\n  padding-right: 10px;\n}\n\n.campos .right {\n  text-align: left;\n  width: 65%;\n  padding-left: 10px;\n  font-size: 4vw;\n  color: var(--ion-color-azul-oscuro);\n}\n\n.campos > ion-label {\n  display: table-cell;\n}\n\n.valores {\n  display: table;\n  margin: 5px auto;\n}\n\n.valores .left {\n  text-align: right;\n  font-size: 3vw;\n  color: var(--ion-color-naranja-oscuro);\n  width: 75%;\n  padding-right: 10px;\n}\n\n.valores .right {\n  text-align: left;\n  width: 20rem;\n  padding-left: 10px;\n  font-size: 4vw;\n  color: var(--ion-color-azul-oscuro);\n}\n\n.valores > ion-label {\n  display: table-cell;\n}\n\n.contener-datos {\n  margin: 10px 20px;\n}\n\n.contenedor-centro {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n}\n\n.contenedor-centro .cantidad {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px;\n  border: solid 1px gray;\n  font-size: 13px;\n  text-align: center !important;\n  color: var(--ion-color-azul-oscuro);\n}\n\n.div-producto {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0px 20px;\n  border-radius: 15px;\n  height: 80px;\n  border: 2px solid var(--ion-color-azul-oscuro);\n  margin: 10px 0px;\n}\n\n.contener-columna-centrar {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n}\n\n.contener-columna-centrar .precio {\n  font-family: var(--ion-font-family);\n  font-weight: bold;\n  color: #5b5b5f;\n  font-size: 14px;\n}\n\n.producto-carrito {\n  display: -webkit-inline-box;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.contenedor-columna {\n  width: 50%;\n}\n\n.contenedor-columna .nombre-producto, .contenedor-columna .subtotal {\n  font-family: var(--ion-font-family);\n  font-weight: bold;\n  color: #5b5b5f;\n  font-size: 12px;\n}\n\n.button-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0px 20px;\n}\n\nion-button {\n  font-size: 0.7rem;\n  line-height: 0px;\n  width: 35%;\n  height: 2.2rem;\n}\n\n.btn-cancelar {\n  --background: var(--ion-color-gris-oscuro);\n}\n\n.btn-registro {\n  --background: var(--ion-color-naranja-oscuro);\n}\n\n.registro {\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yaWFsL2RldGFsbGUtaGlzdG9yaWFsL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxoaXN0b3JpYWxcXGRldGFsbGUtaGlzdG9yaWFsXFxkZXRhbGxlLWhpc3RvcmlhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hpc3RvcmlhbC9kZXRhbGxlLWhpc3RvcmlhbC9kZXRhbGxlLWhpc3RvcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBMkM7QUNDL0M7O0FEQ0E7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0FDRXJCOztBREFBO0VBQ0ksd0JBQXdCO0FDRzVCOztBRERBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ0l0Qjs7QUREQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtBQ0kzQjs7QURERTtFQUNBLHNCQUFzQjtBQ0l4Qjs7QUREQTtFQUNJLGdCQUFlO0FDSW5COztBREZBO0VBQ0ksMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixVQUFVO0FDS2Q7O0FEUkE7RUFLUSxhQUFhO0FDT3JCOztBREhBO0VBQ0ksOEJBQThCO0VBQzlCLGFBQWE7RUFDYixVQUFVO0FDTWQ7O0FEVEE7RUFLUSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FDUXhCOztBREhBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtBQ01wQjs7QURSQTtFQUlRLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVTtFQUNWLFlBQVk7RUFDWixtQkFBb0I7QUNRNUI7O0FEaEJBO0VBV1EsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1DQUFrQztBQ1MxQzs7QUROQTtFQUNJLG1CQUFtQjtBQ1N2Qjs7QURMQTtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7QUNRcEI7O0FEVkE7RUFJUSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxVQUFVO0VBQ1YsbUJBQW1CO0FDVTNCOztBRGxCQTtFQVdRLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQ0FBa0M7QUNXMUM7O0FEUkE7RUFDSSxtQkFBbUI7QUNXdkI7O0FEUEE7RUFDSSxpQkFBaUI7QUNVckI7O0FEUEE7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtBQ1UzQjs7QURiQTtFQUtRLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1DQUFtQztBQ1kzQzs7QURSQTtFQUNJLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0FDV3BCOztBRFRBO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7QUNZM0I7O0FEZkE7RUFLUSxtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0FDY3ZCOztBRFZBO0VBQ0ksMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUNhMUI7O0FEVkE7RUFDSSxVQUFVO0FDYWQ7O0FEZEE7RUFHUSxtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGNBQWE7RUFDYixlQUFlO0FDZXZCOztBRFpBO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtBQ2VyQjs7QURiQTtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGNBQWM7QUNnQmxCOztBRGJBO0VBQ0ksMENBQWE7QUNnQmpCOztBRGRBO0VBQ0ksNkNBQWE7QUNpQmpCOztBRGZBO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7QUNrQnhCIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yaWFsL2RldGFsbGUtaGlzdG9yaWFsL2RldGFsbGUtaGlzdG9yaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250ZW5lZG9yLXBhZ2V7XHJcbiAgICBwYWRkaW5nOiA2cHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jb250ZW5lZG9ye1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMHB4O1xyXG59XHJcbi50aXR1bG97XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmRpdi1oaXN0b3JpYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjYzJjMmMyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWVzdGFibGVjaW1pZW50b3tcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIFxyXG4gIH1cclxuLmNvbnRlbmVyLWhpc3RvcmlhbHtcclxuICAgIHBhZGRpbmc6N3B4IDBweDtcclxufVxyXG4uY29udGVuZXItY29sdW1uYUl7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMi4ycmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVuZXItY29sdW1uYXtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLm5vbWJyZS1oaXN0b3JpYWx7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmNhbXBvc3tcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIC5sZWZ0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgIGNvbG9yOmdyYXk7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAgMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pXHJcbiAgICB9XHJcbn1cclxuLmNhbXBvcyA+IGlvbi1sYWJlbHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcblxyXG4udmFsb3Jlc3tcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIC5sZWZ0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogIDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKVxyXG4gICAgfVxyXG59XHJcbi52YWxvcmVzID4gaW9uLWxhYmVse1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuXHJcbi5jb250ZW5lci1kYXRvc3tcclxuICAgIG1hcmdpbjogMTBweCAyMHB4OztcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItY2VudHJve1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5jYW50aWRhZHtcclxuICAgICAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcclxuICAgIH1cclxufVxyXG5cclxuLmRpdi1wcm9kdWN0b3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG4uY29udGVuZXItY29sdW1uYS1jZW50cmFye1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5wcmVjaW97XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM1YjViNWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdG8tY2Fycml0b3tcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgIFxyXG59XHJcblxyXG4uY29udGVuZWRvci1jb2x1bW5he1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC5ub21icmUtcHJvZHVjdG8sIC5zdWJ0b3RhbHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjojNWI1YjVmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG4uYnV0dG9uLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDIuMnJlbTtcclxuXHJcbn1cclxuLmJ0bi1jYW5jZWxhcntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyaXMtb3NjdXJvKTtcclxufVxyXG4uYnRuLXJlZ2lzdHJve1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pO1xyXG59XHJcbi5yZWdpc3Ryb3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufSIsIioge1xuICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xufVxuXG4uY29udGVuZWRvci1wYWdlIHtcbiAgcGFkZGluZzogNnB4IDMwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29udGVuZWRvciB7XG4gIG1hcmdpbjogMTVweCAwcHggMHB4IDBweDtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5kaXYtaGlzdG9yaWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICNjMmMyYzI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1lc3RhYmxlY2ltaWVudG8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29udGVuZXItaGlzdG9yaWFsIHtcbiAgcGFkZGluZzogN3B4IDBweDtcbn1cblxuLmNvbnRlbmVyLWNvbHVtbmFJIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMjAlO1xufVxuXG4uY29udGVuZXItY29sdW1uYUkgaW1nIHtcbiAgd2lkdGg6IDIuMnJlbTtcbn1cblxuLmNvbnRlbmVyLWNvbHVtbmEge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA2NSU7XG59XG5cbi5jb250ZW5lci1jb2x1bW5hIC5ub21icmUtaGlzdG9yaWFsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhbXBvcyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4uY2FtcG9zIC5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiBncmF5O1xuICB3aWR0aDogMjByZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jYW1wb3MgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDR2dztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG59XG5cbi5jYW1wb3MgPiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4udmFsb3JlcyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4udmFsb3JlcyAubGVmdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi52YWxvcmVzIC5yaWdodCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAyMHJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDR2dztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG59XG5cbi52YWxvcmVzID4gaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmNvbnRlbmVyLWRhdG9zIHtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG59XG5cbi5jb250ZW5lZG9yLWNlbnRybyB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVuZWRvci1jZW50cm8gLmNhbnRpZGFkIHtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG59XG5cbi5kaXYtcHJvZHVjdG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uY29udGVuZXItY29sdW1uYS1jZW50cmFyIHtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW5lci1jb2x1bW5hLWNlbnRyYXIgLnByZWNpbyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1YjViNWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2R1Y3RvLWNhcnJpdG8ge1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbnRlbmVkb3ItY29sdW1uYSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb250ZW5lZG9yLWNvbHVtbmEgLm5vbWJyZS1wcm9kdWN0bywgLmNvbnRlbmVkb3ItY29sdW1uYSAuc3VidG90YWwge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNWI1YjVmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5idXR0b24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogMi4ycmVtO1xufVxuXG4uYnRuLWNhbmNlbGFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3Jpcy1vc2N1cm8pO1xufVxuXG4uYnRuLXJlZ2lzdHJvIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pO1xufVxuXG4ucmVnaXN0cm8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/historial/detalle-historial/detalle-historial.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/historial/detalle-historial/detalle-historial.page.ts ***!
  \***********************************************************************/
/*! exports provided: DetalleHistorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleHistorialPage", function() { return DetalleHistorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_servicios_historial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/historial.service */ "./src/app/servicios/historial.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_servicios_perfil_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/perfil.service */ "./src/app/servicios/perfil.service.ts");
/* harmony import */ var src_app_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/tarjeta.service */ "./src/app/servicios/tarjeta.service.ts");
/* harmony import */ var src_app_aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/aviso/correcto/correcto.page */ "./src/app/aviso/correcto/correcto.page.ts");
/* harmony import */ var src_app_calificar_calificar_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/calificar/calificar.page */ "./src/app/calificar/calificar.page.ts");













let DetalleHistorialPage = class DetalleHistorialPage {
    constructor(loadingCtrl, modalController, alertCtrl, storage, route, router, historialService, perfilService, tarjetaService) {
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.historialService = historialService;
        this.perfilService = perfilService;
        this.tarjetaService = tarjetaService;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.id = this.router.getCurrentNavigation().extras.state.id;
            }
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.buscar(this.id);
        this.storage.get('id').then((val) => {
            if (val != null) {
                this.usuario_id = val;
            }
        });
        this.storage.get('perfil').then((value) => {
            console.log(value);
            if (value == null) {
                this.storage.get('correo').then((val) => {
                    if (val != null) {
                        this.perfilService.getPerfil(val).subscribe(data => {
                            this.perfil = data[0];
                            console.log(data);
                            if (this.perfil.telefono == "NONE") {
                                this.perfil.telefono = "";
                            }
                            if (this.perfil.direccion == "NONE") {
                                this.perfil.direccion = "";
                            }
                            if (Object.keys(this.perfil).length === 0) {
                                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
                            }
                            else {
                                this.storage.set('perfil', this.perfil);
                            }
                        }, err => {
                            this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
                        });
                    }
                });
            }
            else {
                this.perfil = value;
            }
        });
    }
    buscar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            this.historialService.getPedido(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                console.log(data);
                this.historial = data["pedido"][0];
                this.productos = data["productos"];
                this.ofertas = data["ofertas"];
                this.combos = data["combos"];
                this.cupones = data["cupones"];
                if (!this.historial.pagado && this.historial.tipo_pago == "Tarjeta") {
                    this.storage.get('tokenTarjeta').then((val) => {
                        this.historial.token = val + "";
                    });
                }
                if (this.historial.pagado && this.historial.tipo_pago == "Tarjeta") {
                    this.transaction = data["transaccion"][0];
                    console.log(this.transaction.transaccion);
                }
                if (Object.keys(this.historial).length === 0) {
                    this.mensajeIncorrecto("Historial vacío", "No ha realizado pedidos");
                }
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
    cancelar(id_pedido, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            const info = {
                'id': id,
                'pedido': id_pedido
            };
            this.historialService.cancelarPedido(info)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                console.log(data);
                if (data.valid == "ok") {
                    if (this.historial.pagado && this.historial.tipo_pago == "Tarjeta") {
                        this.refund();
                    }
                    this.regresar();
                }
                else {
                    this.mensajeIncorrecto("Pedido no puede cancelarse", "Su pedido ha sido enviado");
                }
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
    anular(id_pedido, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentConfirm('¿Desea anular esta compra?', 'No', 'Si').then(res => {
                if (res === 'ok') {
                    this.cancelar(id_pedido, id);
                }
            });
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
    refund() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            let info = {
                "transaction": {
                    "id": this.transaction.transaccion
                }
            };
            console.log(info);
            this.tarjetaService.devolver(info)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                console.log(data);
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
    pagar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            let info = {
                "card": {
                    "token": this.historial.token
                },
                "user": {
                    "id": this.usuario_id + "",
                    "email": this.perfil.correo
                },
                "order": {
                    "amount": this.historial.total,
                    "description": "Approved transaction",
                    "dev_reference": this.historial.id_pedido + "",
                    "vat": Number(this.historial.iva.toFixed(2))
                }
            };
            console.log(info);
            this.tarjetaService.pagar(info)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                console.log(data);
                if (data.transaction.status == "success") {
                    this.pagado(this.historial.id_pedido, data.transaction.id);
                }
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
    pagado(id_pedido, transaccion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            let info = {
                "pedido": id_pedido,
                "transaccion": transaccion
            };
            console.log(info);
            this.historialService.pagarPedido(info)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                console.log(data);
                this.mensajeCorrecto("Pago exitoso", "Su pedido ha sido pagado con exito");
                this.regresar();
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
    calificar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_calificar_calificar_page__WEBPACK_IMPORTED_MODULE_11__["CalificarPage"],
                cssClass: 'confirm-modal',
                componentProps: {
                    'pedido': id
                }
            });
            return yield modal.present();
        });
    }
    mensajeIncorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_4__["IncorrectoPage"],
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
                component: src_app_aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_10__["CorrectoPage"],
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
    regresar() {
        this.router.navigate(['/footer/historial']);
    }
};
DetalleHistorialPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_servicios_historial_service__WEBPACK_IMPORTED_MODULE_6__["HistorialService"] },
    { type: src_app_servicios_perfil_service__WEBPACK_IMPORTED_MODULE_8__["PerfilService"] },
    { type: src_app_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_9__["TarjetaService"] }
];
DetalleHistorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-historial',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detalle-historial.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/historial/detalle-historial/detalle-historial.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detalle-historial.page.scss */ "./src/app/historial/detalle-historial/detalle-historial.page.scss")).default]
    })
], DetalleHistorialPage);



/***/ })

}]);
//# sourceMappingURL=default~detalle-historial-detalle-historial-module~historial-detalle-historial-detalle-historial-module-es2015.js.map
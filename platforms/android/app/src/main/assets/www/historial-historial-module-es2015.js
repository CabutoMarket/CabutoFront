(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historial-historial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/historial/historial.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historial/historial.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n  <div class=\"contenedor-page\">\r\n    <ion-label class=\"titulo\">Historial de compras</ion-label>\r\n    <div class=\"contenedor\">\r\n      <div class=\"contener-historial\" *ngFor=\"let historial of historiales\">\r\n        <div class=\"div-historial\" (click)=\"detalle(historial.id_pedido)\">\r\n          <div class=\"contener-columnaI\">\r\n            <img src=\"../assets/img/carrito_naranja.png\">\r\n          </div>        \r\n          <div class=\"contener-columna\">\r\n            <h6 class=\"nombre-historial\">Compra</h6>\r\n            <h6 class=\"nombre-historial\">{{ historial.fecha | date:'dd/MM/yyyy' }}</h6>            \r\n            <h6 class=\"nombre-historial\">${{ historial.total | number : '1.2-2' }}</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/historial/historial-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/historial/historial-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HistorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageRoutingModule", function() { return HistorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial.page */ "./src/app/historial/historial.page.ts");




const routes = [
    {
        path: '',
        component: _historial_page__WEBPACK_IMPORTED_MODULE_3__["HistorialPage"]
    },
    {
        path: 'detalle-historial',
        loadChildren: () => Promise.all(/*! import() | detalle-historial-detalle-historial-module */[__webpack_require__.e("default~detalle-historial-detalle-historial-module~efectivo-efectivo-module~historial-detalle-histor~54d42855"), __webpack_require__.e("default~calificar-calificar-module~detalle-historial-detalle-historial-module~historial-detalle-hist~b3534f4a"), __webpack_require__.e("default~detalle-historial-detalle-historial-module~historial-detalle-historial-detalle-historial-module")]).then(__webpack_require__.bind(null, /*! ./detalle-historial/detalle-historial.module */ "./src/app/historial/detalle-historial/detalle-historial.module.ts")).then(m => m.DetalleHistorialPageModule)
    }
];
let HistorialPageRoutingModule = class HistorialPageRoutingModule {
};
HistorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistorialPageRoutingModule);



/***/ }),

/***/ "./src/app/historial/historial.module.ts":
/*!***********************************************!*\
  !*** ./src/app/historial/historial.module.ts ***!
  \***********************************************/
/*! exports provided: HistorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function() { return HistorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historial-routing.module */ "./src/app/historial/historial-routing.module.ts");
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historial.page */ "./src/app/historial/historial.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let HistorialPageModule = class HistorialPageModule {
};
HistorialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistorialPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_historial_page__WEBPACK_IMPORTED_MODULE_6__["HistorialPage"]]
    })
], HistorialPageModule);



/***/ }),

/***/ "./src/app/historial/historial.page.scss":
/*!***********************************************!*\
  !*** ./src/app/historial/historial.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-page {\n  padding: 20px 30px;\n}\n\n.contenedor {\n  margin: 15px 0px;\n}\n\n.titulo {\n  font-weight: bold;\n  font-size: larger;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\n.div-historial {\n  display: flex;\n  align-items: center;\n  box-shadow: 3px 3px 3px 3px #c2c2c2;\n  border-radius: 15px;\n  height: 65px;\n  margin: auto;\n  justify-content: center;\n}\n\n.btn-establecimiento {\n  vertical-align: middle;\n}\n\n.contener-historial {\n  padding: 7px 0px;\n}\n\n.contener-columnaI {\n  justify-content: flex-start;\n  display: flex;\n  width: 15%;\n}\n\n.contener-columnaI img {\n  width: 1.4rem;\n}\n\n.contener-columna {\n  justify-content: space-between;\n  display: flex;\n  width: 70%;\n}\n\n.contener-columna .nombre-historial {\n  font-weight: bold;\n  font-size: 14px;\n  color: var(--ion-color-azul-oscuro);\n  margin-bottom: 2px;\n  margin-top: 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yaWFsL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxoaXN0b3JpYWxcXGhpc3RvcmlhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hpc3RvcmlhbC9oaXN0b3JpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQTJDO0FDQy9DOztBRENBO0VBQ0ksa0JBQWtCO0FDRXRCOztBREFBO0VBQ0ksZ0JBQWlCO0FDR3JCOztBRERBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ0l0Qjs7QUREQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtBQ0kzQjs7QURERTtFQUNBLHNCQUFzQjtBQ0l4Qjs7QUREQTtFQUNJLGdCQUFlO0FDSW5COztBREZBO0VBQ0ksMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixVQUFVO0FDS2Q7O0FEUkE7RUFLUSxhQUFhO0FDT3JCOztBREhBO0VBQ0ksOEJBQThCO0VBQzlCLGFBQWE7RUFDYixVQUFVO0FDTWQ7O0FEVEE7RUFLUSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FDUXhCIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yaWFsL2hpc3RvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcclxufVxyXG4uY29udGVuZWRvci1wYWdle1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG59XHJcbi5jb250ZW5lZG9ye1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCA7XHJcbn1cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uZGl2LWhpc3RvcmlhbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICNjMmMyYzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZXN0YWJsZWNpbWllbnRve1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgXHJcbiAgfVxyXG4uY29udGVuZXItaGlzdG9yaWFse1xyXG4gICAgcGFkZGluZzo3cHggMHB4O1xyXG59XHJcbi5jb250ZW5lci1jb2x1bW5hSXtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxLjRyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW5lci1jb2x1bW5he1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAubm9tYnJlLWhpc3RvcmlhbHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3ItcGFnZSB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW46IDE1cHggMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmRpdi1oaXN0b3JpYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggI2MyYzJjMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLWVzdGFibGVjaW1pZW50byB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb250ZW5lci1oaXN0b3JpYWwge1xuICBwYWRkaW5nOiA3cHggMHB4O1xufVxuXG4uY29udGVuZXItY29sdW1uYUkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi5jb250ZW5lci1jb2x1bW5hSSBpbWcge1xuICB3aWR0aDogMS40cmVtO1xufVxuXG4uY29udGVuZXItY29sdW1uYSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmNvbnRlbmVyLWNvbHVtbmEgLm5vbWJyZS1oaXN0b3JpYWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/historial/historial.page.ts":
/*!*********************************************!*\
  !*** ./src/app/historial/historial.page.ts ***!
  \*********************************************/
/*! exports provided: HistorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPage", function() { return HistorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _servicios_historial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../servicios/historial.service */ "./src/app/servicios/historial.service.ts");









let HistorialPage = class HistorialPage {
    constructor(loadingCtrl, storage, router, modalController, historialService) {
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.router = router;
        this.modalController = modalController;
        this.historialService = historialService;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.historiales = null;
        this.storage.get('id').then((val) => {
            if (val != null) {
                this.buscar(val);
            }
            else {
                this.mensajeIncorrecto("Inicie sesión", "Debe iniciar sesión para revisar su historial de pedidos");
            }
        });
    }
    buscarHistorial(id) {
        return this.historialService.getHistorial(id);
    }
    buscar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoading2();
            this.buscarHistorial(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
            })))
                .subscribe(data => {
                this.historiales = data;
                if (Object.keys(this.historiales).length === 0) {
                    this.mensajeIncorrecto("Historial vacío", "No ha realizado pedidos");
                }
            }, err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión");
            });
        });
    }
    mensajeIncorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_5__["IncorrectoPage"],
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
    detalle(id) {
        let navigationExtras = {
            state: {
                id: id,
            }
        };
        this.router.navigate(['/footer/historial/detalle-historial'], navigationExtras);
    }
};
HistorialPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _servicios_historial_service__WEBPACK_IMPORTED_MODULE_7__["HistorialService"] }
];
HistorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historial',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./historial.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/historial/historial.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./historial.page.scss */ "./src/app/historial/historial.page.scss")).default]
    })
], HistorialPage);



/***/ })

}]);
//# sourceMappingURL=historial-historial-module-es2015.js.map
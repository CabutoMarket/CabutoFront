(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~info-tarjeta-info-tarjeta-module~tarjeta-tarjeta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tarjeta/nueva-tarjeta/nueva-tarjeta.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tarjeta/nueva-tarjeta/nueva-tarjeta.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-buttons slot=\"end\">\r\n  <ion-button (click)=\"dismiss()\">\r\n    <ion-icon slot=\"icon-only\" name=\"close\" style=\"color: grey;\"></ion-icon>\r\n  </ion-button>\r\n</ion-buttons>\r\n<ion-label class=\"titulo\">Agregar nueva tarjeta</ion-label>\r\n<ion-content>\r\n  <div class=\"contenedor-page\">\r\n\r\n    <div class=\"contenedor\">\r\n      <form #form=\"ngForm\" id=\"guardar\" (ngSubmit)=\"save(form)\">\r\n\r\n        <div class=\"payment-form\" #myCard id=\"my-card\" data-capture-name=\"true\">         \r\n        </div>\r\n        <div class=\"button-content\">\r\n          <ion-button class=\"btn-registro\" id=\"guardarTarjeta\" size=\"large\" type=\"submit\">\r\n            <p class=\"registro\">Agregar</p>\r\n          </ion-button>\r\n        </div>\r\n        <div id=\"messages\"></div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/tarjeta/nueva-tarjeta/nueva-tarjeta.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/tarjeta/nueva-tarjeta/nueva-tarjeta.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-page {\n  margin: 20px 20px;\n}\n\n.contenedor {\n  margin: 15px 0px;\n}\n\n.titulo {\n  padding: 0px 30px;\n  font-weight: bold;\n  font-size: larger;\n  color: var(--ion-color-azul-oscuro);\n  font-size: 5vw;\n  margin-bottom: 0px;\n}\n\nion-buttons {\n  justify-content: flex-end;\n}\n\n#my-card {\n  margin: 15px 0;\n}\n\n#my-card .name {\n  background-color: #e7e7e7  !important;\n  color: var(--ion-color-azul-oscuro) !important;\n  font-size: 0.9rem !important;\n  border-radius: 10px !important;\n  height: 45px !important;\n}\n\n.button-content {\n  display: flex;\n  justify-content: center;\n}\n\n.btn-registro {\n  width: 45%;\n  height: 2rem;\n  line-height: 0px;\n  --background: var(--ion-color-naranja-oscuro);\n  font-size: 0.9rem;\n}\n\n.registro {\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFyamV0YS9udWV2YS10YXJqZXRhL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFx0YXJqZXRhXFxudWV2YS10YXJqZXRhXFxudWV2YS10YXJqZXRhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFyamV0YS9udWV2YS10YXJqZXRhL251ZXZhLXRhcmpldGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQTJDO0FDQy9DOztBRENBO0VBQ0ksaUJBQWlCO0FDRXJCOztBREFBO0VBQ0ksZ0JBQWlCO0FDR3JCOztBRERBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCxrQkFBa0I7QUNJdEI7O0FEREE7RUFDSSx5QkFBeUI7QUNJN0I7O0FERkE7RUFDSSxjQUFjO0FDS2xCOztBRE5BO0VBSVEscUNBQXFDO0VBQ3JDLDhDQUE4QztFQUM5Qyw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLHVCQUF1QjtBQ00vQjs7QUREQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7QUNJM0I7O0FERkE7RUFDSSxVQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw2Q0FBYTtFQUNiLGlCQUFpQjtBQ0tyQjs7QURIQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0FDTXhCIiwiZmlsZSI6InNyYy9hcHAvdGFyamV0YS9udWV2YS10YXJqZXRhL251ZXZhLXRhcmpldGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbmVkb3ItcGFnZXtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4O1xyXG59XHJcbi5jb250ZW5lZG9ye1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCA7XHJcbn1cclxuLnRpdHVsb3tcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b25ze1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4jbXktY2FyZHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG5cclxuICAgIC5uYW1le1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTcgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3VybykgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5idXR0b24tY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnRuLXJlZ2lzdHJve1xyXG4gICAgd2lkdGg6NDUlO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi5yZWdpc3Ryb3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufSIsIioge1xuICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xufVxuXG4uY29udGVuZWRvci1wYWdlIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYXp1bC1vc2N1cm8pO1xuICBmb250LXNpemU6IDV2dztcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbiNteS1jYXJkIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbiNteS1jYXJkIC5uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNyAgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3VybykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tcmVnaXN0cm8ge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5yZWdpc3RybyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tarjeta/nueva-tarjeta/nueva-tarjeta.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/tarjeta/nueva-tarjeta/nueva-tarjeta.page.ts ***!
  \*************************************************************/
/*! exports provided: NuevaTarjetaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaTarjetaPage", function() { return NuevaTarjetaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");
/* harmony import */ var src_app_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/tarjeta.service */ "./src/app/servicios/tarjeta.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/aviso/correcto/correcto.page */ "./src/app/aviso/correcto/correcto.page.ts");








let NuevaTarjetaPage = class NuevaTarjetaPage {
    constructor(modalController, tarjetaService, loadingCtrl, storage) {
        this.modalController = modalController;
        this.tarjetaService = tarjetaService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        Payment.init('prod', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["paymentez"].app_code_client, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["paymentez"].app_key_client);
        setTimeout(() => {
            this.card = new PaymentForm(this.cardForm.nativeElement);
        }, 400);
        this.minimo = new Date().toISOString();
        this.maximo = new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString();
        this.storage.get('name').then((val) => {
            if (val != null) {
                this.nombre = val;
            }
        });
        this.storage.get('apellido').then((val) => {
            if (val != null) {
                this.apellido = val;
            }
        });
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    save(form) {
        let checkCard = this.card.getCard();
        if (checkCard != null) {
            this.storage.get('id').then((id) => {
                if (id != null) {
                    this.storage.get('correo').then((val) => {
                        if (val != null) {
                            var $this = this;
                            let button = document.getElementById('guardarTarjeta');
                            let texto = button.innerText;
                            button.disabled = true;
                            button.innerText = "Procesando...";
                            let successHandler = function (cardResponse) {
                                console.log(cardResponse.card);
                                if (cardResponse.card.status === 'valid') {
                                    console.log(cardResponse.card.status);
                                    $this.mensajeCorrecto("Tarjeta agregada", "Su tarjeta ha sido añadida con éxito");
                                }
                                else if (cardResponse.card.status === 'review') {
                                    $this.mensajeCorrecto("Tarjeta en revisión", "Su tarjeta será revisada");
                                }
                                else {
                                    $this.mensajeIncorrecto("Tarjeta no agregada", "Intente ingresar nuevamente sus datos");
                                }
                                $this.dismiss();
                            };
                            let errorHandler = function (err) {
                                $this.mensajeIncorrecto("Tarjeta no agregada", "Intente ingresar nuevamente sus datos");
                                button.disabled = false;
                                button.innerText = texto;
                            };
                            Payment.addCard(id + "", val, checkCard, successHandler, errorHandler);
                        }
                    });
                }
            });
        }
    }
    enviar() {
    }
    confirmar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(id);
        });
    }
    mensajeIncorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_4__["IncorrectoPage"],
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
                component: src_app_aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_7__["CorrectoPage"],
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
};
NuevaTarjetaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_servicios_tarjeta_service__WEBPACK_IMPORTED_MODULE_5__["TarjetaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCard', { static: true })
], NuevaTarjetaPage.prototype, "cardForm", void 0);
NuevaTarjetaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nueva-tarjeta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nueva-tarjeta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tarjeta/nueva-tarjeta/nueva-tarjeta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nueva-tarjeta.page.scss */ "./src/app/tarjeta/nueva-tarjeta/nueva-tarjeta.page.scss")).default]
    })
], NuevaTarjetaPage);



/***/ })

}]);
//# sourceMappingURL=default~info-tarjeta-info-tarjeta-module~tarjeta-tarjeta-module-es2015.js.map
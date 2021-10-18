function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-modal-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='header'>\r\n  <div class=\"logo\"> <img class=\"atras\" src=\"../assets/img/atras_naranja.png\" size=12 (click)=\"atras()\"></div>\r\n</div>\r\n\r\n<ion-content padding text-center>\r\n  <div class=\"contendor-mail\">\r\n    <div class=\"correo\">Ingrese su correo electrónico para recuperar su contraseña</div>\r\n    <ion-item>\r\n      <ion-input style=\"--background: #e7e7e7;\r\n    padding-top: 30px;\r\n    --color: rgb(112, 106, 106);\r\n    font-size: 0.8rem;\r\n    border-radius: 5px;\" name=\"email\" type=\"email\" placeholder=\"    Correo Electrónico\" [(ngModel)]=\"textInput\">\r\n      </ion-input>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n<div>\r\n  <ion-button style=\"--background:var(--ion-color-naranja-oscuro);\" class=\"recuperar\" size=\"large\" expand=\"full\"\r\n    (click)=\"showLoadingE()\">Recuperar</ion-button>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/modal/modal-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modal/modal-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: ModalPageRoutingModule */

  /***/
  function srcAppModalModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPageRoutingModule", function () {
      return ModalPageRoutingModule;
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


    var _modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal.page */
    "./src/app/modal/modal.page.ts");

    var routes = [{
      path: '',
      component: _modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"]
    }];

    var ModalPageRoutingModule = function ModalPageRoutingModule() {
      _classCallCheck(this, ModalPageRoutingModule);
    };

    ModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modal/modal.module.ts":
  /*!***************************************!*\
    !*** ./src/app/modal/modal.module.ts ***!
    \***************************************/

  /*! exports provided: ModalPageModule */

  /***/
  function srcAppModalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPageModule", function () {
      return ModalPageModule;
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


    var _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-routing.module */
    "./src/app/modal/modal-routing.module.ts");
    /* harmony import */


    var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal.page */
    "./src/app/modal/modal.page.ts");

    var ModalPageModule = function ModalPageModule() {
      _classCallCheck(this, ModalPageModule);
    };

    ModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalPageRoutingModule"]],
      declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
    })], ModalPageModule);
    /***/
  },

  /***/
  "./src/app/modal/modal.page.scss":
  /*!***************************************!*\
    !*** ./src/app/modal/modal.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\nion-header {\n  --background: linear-gradient(to left top,var(--ion-color-naranja-oscuro),var(--ion-color-naranja-claro)) !important;\n}\n\n.atras {\n  position: relative;\n  margin-top: 5%;\n  left: 1%;\n  height: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvRDpcXGdpdFxcQ2FidXRvRnJvbnQvc3JjXFxhcHBcXG1vZGFsXFxtb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUEyQztBQ0MvQzs7QURDQTtFQUNJLG9IQUFhO0FDRWpCOztBREFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsWUFBWTtBQ0doQiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1oZWFkZXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCx2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pLHZhcigtLWlvbi1jb2xvci1uYXJhbmphLWNsYXJvKSkgIWltcG9ydGFudDtcclxufVxyXG4uYXRyYXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGxlZnQ6IDElO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCx2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pLHZhcigtLWlvbi1jb2xvci1uYXJhbmphLWNsYXJvKSkgIWltcG9ydGFudDtcbn1cblxuLmF0cmFzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbGVmdDogMSU7XG4gIGhlaWdodDogMzBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modal/modal.page.ts":
  /*!*************************************!*\
    !*** ./src/app/modal/modal.page.ts ***!
    \*************************************/

  /*! exports provided: ModalPage */

  /***/
  function srcAppModalModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPage", function () {
      return ModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_auth_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/servicios/auth.service */
    "./src/app/auth/servicios/auth.service.ts");

    var ModalPage = /*#__PURE__*/function () {
      function ModalPage(navCtrol, navParams, router, modalCtrl, alert, authService, loading) {
        _classCallCheck(this, ModalPage);

        this.navCtrol = navCtrol;
        this.navParams = navParams;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.authService = authService;
        this.loading = loading;
        this.textInput = "";
      }

      _createClass(ModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "atras",
        value: function atras() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "enviar",
        value: function enviar() {
          var _this = this;

          console.log(typeof this.textInput);

          if (this.validarEmail(this.textInput)) {
            console.log(this.textInput);
            console.log("Voy a enviar datos");
            this.authService.enviarCorreo(this.textInput).subscribe(function (data) {
              console.log("Recibi respuesta");
              console.log(data);

              if (data.valid == 'OK') {
                _this.modalCtrl.dismiss();
              } else {
                _this.mensaje("Acceso Incorrecto", "Algo salió mal", "Su correo  están incorrectos");
              }
            });
          } else {
            this.mensaje("Correo", "Correo incorrecto", "esto no sigue la forma correcta de un correo");
          }
        }
      }, {
        key: "validarEmail",
        value: function validarEmail(valor) {
          var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regex.test(valor) ? true : false;
        }
      }, {
        key: "mensaje",
        value: function mensaje(titulo, subtitulo, _mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alert.create({
                      cssClass: titulo,
                      header: titulo,
                      subHeader: subtitulo,
                      message: _mensaje,
                      buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showLoadingE",
        value: function showLoadingE() {
          var _this2 = this;

          this.loading.create({
            message: 'Loading.....'
          }).then(function (loading) {
            loading.present();
            {
              _this2.enviar();
            }
            setTimeout(function () {
              loading.dismiss();
            }, 2000);
          });
        }
      }]);

      return ModalPage;
    }();

    ModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_auth_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal.page.scss */
      "./src/app/modal/modal.page.scss"))["default"]]
    })], ModalPage);
    /***/
  }
}]);
//# sourceMappingURL=modal-modal-module-es5.js.map
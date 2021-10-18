function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-registro-fb-registro-fb-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro-fb/registro-fb.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro-fb/registro-fb.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthRegistroFbRegistroFbPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content>\r\n  <div class=\"contenedor-page\">\r\n    <div class = \"ImgFb\"> <img src=\"../assets/img/fb_access.jpeg\" class =\"fb\"> </div>\r\n    <!--<ion-label class=\"titulo\">Acceder con Facebook</ion-label>-->\r\n    \r\n    <div class = \"contendor-Ruc\">\r\n      <div>Completar Registro</div> \r\n      <ion-input type=\"number\" placeholder=\"Ruc/Cédula\" [(ngModel)]=\"RegistroInput\"></ion-input>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<div>\r\n  <ion-button class = \"registro\" size=\"large\"  expand=\"full\" (click)=\"registroFb()\">Registrarse</ion-button>\r\n</div>\r\n\r\n<ion-footer>\r\n  <!--<div>\r\n    <ion-button class = \"registro\" size=\"large\" type=\"submit\"  expand=\"full\" (click)=registroFb()>Registrarse</ion-button>\r\n  </div>-->\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/auth/registro-fb/registro-fb-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/auth/registro-fb/registro-fb-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: RegistroFbPageRoutingModule */

  /***/
  function srcAppAuthRegistroFbRegistroFbRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroFbPageRoutingModule", function () {
      return RegistroFbPageRoutingModule;
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


    var _registro_fb_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro-fb.page */
    "./src/app/auth/registro-fb/registro-fb.page.ts");

    var routes = [{
      path: '',
      component: _registro_fb_page__WEBPACK_IMPORTED_MODULE_3__["RegistroFbPage"]
    }];

    var RegistroFbPageRoutingModule = function RegistroFbPageRoutingModule() {
      _classCallCheck(this, RegistroFbPageRoutingModule);
    };

    RegistroFbPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroFbPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/registro-fb/registro-fb.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/auth/registro-fb/registro-fb.module.ts ***!
    \********************************************************/

  /*! exports provided: RegistroFbPageModule */

  /***/
  function srcAppAuthRegistroFbRegistroFbModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroFbPageModule", function () {
      return RegistroFbPageModule;
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


    var _registro_fb_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-fb-routing.module */
    "./src/app/auth/registro-fb/registro-fb-routing.module.ts");
    /* harmony import */


    var _registro_fb_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro-fb.page */
    "./src/app/auth/registro-fb/registro-fb.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var RegistroFbPageModule = function RegistroFbPageModule() {
      _classCallCheck(this, RegistroFbPageModule);
    };

    RegistroFbPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_fb_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroFbPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_registro_fb_page__WEBPACK_IMPORTED_MODULE_6__["RegistroFbPage"]]
    })], RegistroFbPageModule);
    /***/
  },

  /***/
  "./src/app/auth/registro-fb/registro-fb.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/auth/registro-fb/registro-fb.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthRegistroFbRegistroFbPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\nion-button {\n  --background: linear-gradient(to left,var(--ion-color-naranja-oscuro),var(--ion-color-naranja-claro));\n}\n\nion-item {\n  display: flex;\n  flex-flow: row nowrap;\n  /* Align on the same line */\n  justify-content: space-around;\n  vertical-align: middle;\n  box-shadow: 3px 3px 0px 0px #c2c2c2;\n  border-radius: 20px;\n  height: 130px;\n}\n\n.ImgFb {\n  padding-top: 140px;\n}\n\n.ImgFb > .fb {\n  width: 80%;\n  height: 110%;\n  padding-left: 50px;\n}\n\ndiv.contenedor-page {\n  display: grid;\n  align-items: center;\n  padding-left: 50px;\n}\n\n.contenedor-Ruc {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-gris-oscuro);\n  border-radius: 5px;\n  height: 40px;\n}\n\nion-item {\n  --background: rgb(112, 106, 106);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Ryby1mYi9EOlxcZ2l0XFxDYWJ1dG9Gcm9udC9zcmNcXGFwcFxcYXV0aFxccmVnaXN0cm8tZmJcXHJlZ2lzdHJvLWZiLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Ryby1mYi9yZWdpc3Ryby1mYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBMkM7QUNDL0M7O0FEQ0E7RUFDSSxxR0FBYTtBQ0VqQjs7QURDQTtFQUNJLGFBQWE7RUFDWixxQkFBcUI7RUFBRSwyQkFBQTtFQUMxQiw2QkFBNkI7RUFDL0Isc0JBQXNCO0VBQ2xCLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsYUFBYTtBQ0dqQjs7QUREQTtFQUNJLGtCQUFrQjtBQ0l0Qjs7QUREQTtFQUdJLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FDRXRCOztBREVBO0VBQ0ksYUFBYTtFQUliLG1CQUFtQjtFQUNuQixrQkFBa0I7QUNGdEI7O0FES0E7RUFDSSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFlBQVk7QUNGaEI7O0FESUE7RUFDSSxnQ0FBYTtBQ0RqQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cm8tZmIvcmVnaXN0cm8tZmIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkUHJvU2VtaWJvbGQnICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsdmFyKC0taW9uLWNvbG9yLW5hcmFuamEtb3NjdXJvKSx2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1jbGFybykpO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgZmxleC1mbG93OiByb3cgbm93cmFwOyAvKiBBbGlnbiBvbiB0aGUgc2FtZSBsaW5lICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IFxyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAwcHggMHB4ICNjMmMyYzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG4uSW1nRmJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTQwcHg7XHJcbn1cclxuXHJcbi5JbWdGYiA+IC5mYntcclxuICAgIFxyXG4gICAgLy9tYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cclxufVxyXG5cclxuZGl2LmNvbnRlbmVkb3ItcGFnZXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBcclxuICAgIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvL2FsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLVJ1Y3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3Jpcy1vc2N1cm8pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgXHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTEyLCAxMDYsIDEwNik7XHJcbn1cclxuXHJcbiIsIioge1xuICBmb250LWZhbWlseTogJ015cmlhZFByb1NlbWlib2xkJyAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCx2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pLHZhcigtLWlvbi1jb2xvci1uYXJhbmphLWNsYXJvKSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAvKiBBbGlnbiBvbiB0aGUgc2FtZSBsaW5lICovXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDBweCAwcHggI2MyYzJjMjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbn1cblxuLkltZ0ZiIHtcbiAgcGFkZGluZy10b3A6IDE0MHB4O1xufVxuXG4uSW1nRmIgPiAuZmIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuZGl2LmNvbnRlbmVkb3ItcGFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmNvbnRlbmVkb3ItUnVjIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmlzLW9zY3Vybyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDExMiwgMTA2LCAxMDYpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/auth/registro-fb/registro-fb.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/registro-fb/registro-fb.page.ts ***!
    \******************************************************/

  /*! exports provided: RegistroFbPage */

  /***/
  function srcAppAuthRegistroFbRegistroFbPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroFbPage", function () {
      return RegistroFbPage;
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


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../servicios/auth.service */
    "./src/app/auth/servicios/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RegistroFbPage = /*#__PURE__*/function () {
      function RegistroFbPage(authService, router, loading, alert, toast) {
        _classCallCheck(this, RegistroFbPage);

        this.authService = authService;
        this.router = router;
        this.loading = loading;
        this.alert = alert;
        this.toast = toast;
        this.opcion = '0';
        this.textInput = null;
        this.verSeleccion = '';
        this.RegistroInput = '';
      }

      _createClass(RegistroFbPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
        key: "registroFb",
        value: function registroFb() {
          var _this = this;

          this.authService.loginwithFacebook().then(function (res) {
            var usuario = res.user;
            var mail = usuario.email;
            var contra = usuario.displayName; //this.Registro= this.textInput;

            var int_length = ('' + _this.RegistroInput).length;

            if (int_length == 10 || int_length == 13) {
              var logR = {
                'cedula': _this.RegistroInput,
                'email': mail,
                'nombre': contra,
                'apellido': contra,
                'contrasena': contra
              };

              _this.authService.addUser(logR).subscribe(function (data) {
                console.log("imprimiendo data", data, logR);

                if (data.valid == "OK") {
                  _this.mensaje("Registro", "Registro", "Registro exitoso");

                  _this.router.navigateByUrl('/');
                } else {
                  _this.mensaje("Error", "Registro", "Parece que algo ha ocurrido");

                  _this.router.navigateByUrl('/login');
                }

                console.log(logR);
              });
            }
          })["catch"](function (err) {
            _this.mensaje("Fallo de conexión", "algo salio mal", "No se pudo Registrar");
          });
        }
      }]);

      return RegistroFbPage;
    }();

    RegistroFbPage.ctorParameters = function () {
      return [{
        type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    RegistroFbPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro-fb',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro-fb.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro-fb/registro-fb.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro-fb.page.scss */
      "./src/app/auth/registro-fb/registro-fb.page.scss"))["default"]]
    })], RegistroFbPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-registro-fb-registro-fb-module-es5.js.map
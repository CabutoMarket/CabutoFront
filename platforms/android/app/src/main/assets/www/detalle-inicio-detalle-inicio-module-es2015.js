(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalle-inicio-detalle-inicio-module"],{

/***/ "./src/app/inicio/detalle-inicio/detalle-inicio-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/inicio/detalle-inicio/detalle-inicio-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DetalleInicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleInicioPageRoutingModule", function() { return DetalleInicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detalle_inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-inicio.page */ "./src/app/inicio/detalle-inicio/detalle-inicio.page.ts");




const routes = [
    {
        path: '',
        component: _detalle_inicio_page__WEBPACK_IMPORTED_MODULE_3__["DetalleInicioPage"]
    }
];
let DetalleInicioPageRoutingModule = class DetalleInicioPageRoutingModule {
};
DetalleInicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalleInicioPageRoutingModule);



/***/ }),

/***/ "./src/app/inicio/detalle-inicio/detalle-inicio.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/inicio/detalle-inicio/detalle-inicio.module.ts ***!
  \****************************************************************/
/*! exports provided: DetalleInicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleInicioPageModule", function() { return DetalleInicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detalle_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalle-inicio-routing.module */ "./src/app/inicio/detalle-inicio/detalle-inicio-routing.module.ts");
/* harmony import */ var _detalle_inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-inicio.page */ "./src/app/inicio/detalle-inicio/detalle-inicio.page.ts");







let DetalleInicioPageModule = class DetalleInicioPageModule {
};
DetalleInicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalle_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleInicioPageRoutingModule"]
        ],
        declarations: [_detalle_inicio_page__WEBPACK_IMPORTED_MODULE_6__["DetalleInicioPage"]]
    })
], DetalleInicioPageModule);



/***/ })

}]);
//# sourceMappingURL=detalle-inicio-detalle-inicio-module-es2015.js.map
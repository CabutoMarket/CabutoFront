(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-44bf8136.js */ "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aviso/pregunta/pregunta.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aviso/pregunta/pregunta.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding text-center style=\"text-align: center !important;\">\r\n  <div class = \"btn-salir\"><img src=\"../assets/img/salir.png\" (click)=salir()></div>\r\n  <div class = \"titulo\">¿Desea eliminar el producto/oferta del carrito de compras?</div>\r\n  <div class = \"btns\">\r\n    <div class=\"btn\" (click)=aceptar() ><span >Si</span></div>\r\n    <div class=\"btn\" (click)=salir()><span>No</span></div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detalles-productos/detalles-productos.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalles-productos/detalles-productos.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding text-center style=\"text-align: center !important;\">\r\n  <div class = \"btn-salir\"><img src=\"../assets/img/salir.png\" (click)=salir()></div>\r\n  <div class = \"imagen\"><img src=\"http://cabutoshop.pythonanywhere.com{{imagen}}\"  ></div>\r\n  <div class = \"nombre\">{{nombre}}</div>\r\n  <div class = \"descripcion\">{{descripcion}}</div>\r\n  <div class = \"precio\">${{precio}}</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/politicas/politicas.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/politicas/politicas.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class= \"contenedor-page\">\r\n    <div class=\"contenedor-titulo\">\r\n      <ion-label class=\"titulo\">Políticas de Privacidad</ion-label>\r\n    </div>\r\n    <div class = contenedor-politicas >\r\n      <p class = \"contenido\">{{detalle}}</p>\r\n      <!--aqui va la descripcions-->\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/aviso/pregunta/pregunta.page.scss":
/*!***************************************************!*\
  !*** ./src/app/aviso/pregunta/pregunta.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-salir img {\n  height: 0.6rem;\n  width: 0.6rem;\n}\n\n.btn-salir {\n  text-align: right !important;\n  padding: 20px 20px 10px 10px;\n}\n\n.titulo {\n  color: var(--ion-color-azul-oscuro);\n  margin: 10px 20px 20px 20px;\n  padding-bottom: 0px;\n  font-size: 1rem;\n}\n\n.btns {\n  display: flex;\n  justify-content: center;\n}\n\n.btns .btn {\n  color: white;\n  width: 3rem;\n  height: 3rem;\n  font-size: large;\n  margin: 0px 15px 15px 15px;\n  background: var(--ion-color-naranja-oscuro);\n  border-radius: 50%;\n  padding: 3px;\n  display: grid;\n}\n\n.btns .btn span {\n  justify-content: center;\n  align-items: center;\n  border: white dashed 1.5px;\n  border-radius: 50%;\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZpc28vcHJlZ3VudGEvRDpcXGdpdFxcQ2FidXRvRnJvbnQvc3JjXFxhcHBcXGF2aXNvXFxwcmVndW50YVxccHJlZ3VudGEucGFnZS5zY3NzIiwic3JjL2FwcC9hdmlzby9wcmVndW50YS9wcmVndW50YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsYUFBYTtBQ0NqQjs7QURHQTtFQUNJLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUNBaEM7O0FESUE7RUFDSSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlO0FDRG5COztBRElBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtBQ0QzQjs7QUREQTtFQUlRLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQ0NyQjs7QURiQTtFQWNZLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixhQUFhO0FDR3pCIiwiZmlsZSI6InNyYy9hcHAvYXZpc28vcHJlZ3VudGEvcHJlZ3VudGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zYWxpciBpbWd7XHJcbiAgICBoZWlnaHQ6IDAuNnJlbTtcclxuICAgIHdpZHRoOiAwLjZyZW07XHJcbn1cclxuXHJcblxyXG4uYnRuLXNhbGlye1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG4udGl0dWxve1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYnRuc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5idG57XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IHdoaXRlIGRhc2hlZCAxLjVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLmJ0bi1zYWxpciBpbWcge1xuICBoZWlnaHQ6IDAuNnJlbTtcbiAgd2lkdGg6IDAuNnJlbTtcbn1cblxuLmJ0bi1zYWxpciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDEwcHg7XG59XG5cbi50aXR1bG8ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcbiAgbWFyZ2luOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG5zIC5idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbjogMHB4IDE1cHggMTVweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmJ0bnMgLmJ0biBzcGFuIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogd2hpdGUgZGFzaGVkIDEuNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/aviso/pregunta/pregunta.page.ts":
/*!*************************************************!*\
  !*** ./src/app/aviso/pregunta/pregunta.page.ts ***!
  \*************************************************/
/*! exports provided: PreguntaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntaPage", function() { return PreguntaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.././servicios/shopping-cart.service */ "./src/app/servicios/shopping-cart.service.ts");
/* harmony import */ var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../aviso/correcto/correcto.page */ "./src/app/aviso/correcto/correcto.page.ts");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");







let PreguntaPage = class PreguntaPage {
    constructor(navCtrol, navParams, router, modalCtrl, alert, loading, shoppingCart) {
        this.navCtrol = navCtrol;
        this.navParams = navParams;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.loading = loading;
        this.shoppingCart = shoppingCart;
    }
    ngOnInit() {
    }
    mensajeCorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_5__["CorrectoPage"],
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
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_6__["IncorrectoPage"],
                cssClass: 'IncorrectoProducto',
                componentProps: {
                    'titulo': titulo,
                    'mensaje': mensaje
                }
            });
            return yield modal.present();
        });
    }
    aceptar() {
        var nombre = this.navParams.get('nombre');
        var cantidad = this.navParams.get('cantidad');
        var correo = this.navParams.get('correo');
        var div = this.navParams.get('div');
        var tot = this.navParams.get('tot');
        var total = this.navParams.get('valor');
        var subtotal = this.navParams.get("subtotal");
        var compara = this.navParams.get("compara");
        var subtot = 0;
        console.log("ahora esto en el otro tsd", div);
        console.log("aqui estpa el totla a pagar", total);
        const prodxcant = {
            'nombre': nombre,
            'cantidad': parseInt(cantidad),
            'correo': correo
        };
        this.shoppingCart.quitarCarrito(prodxcant).subscribe(data => {
            if (data.valid == "OK") {
                div.style.display = "none";
                total.innerHTML = "" + tot + "";
                subtotal[parseInt(compara)].innerHTML = "0.00";
                this.mensajeCorrecto("Eliminación Exitosa", "ha eliminado del carrito");
            }
            else if (data.valid == "NOT") {
                this.mensajeIncorrecto("No se pudo completar la operacion", "Ha ocurrido un error, revise su conexión");
            }
            else {
                this.mensajeIncorrecto("No se pudo completar la operacion", "Ha ocurrido un error, revise su conexión");
            }
            window.footer.datos();
        });
        this.modalCtrl.dismiss();
    }
    salir() {
        this.modalCtrl.dismiss();
    }
};
PreguntaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] }
];
PreguntaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pregunta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pregunta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aviso/pregunta/pregunta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pregunta.page.scss */ "./src/app/aviso/pregunta/pregunta.page.scss")).default]
    })
], PreguntaPage);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/components/menu/menu.component.ts");




const PAGES = [
    _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
];
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: PAGES,
        exports: PAGES,
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
        ],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu {\n  background-color: blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFxQjtBQ0N6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xyXG59IiwiaW9uLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() { }
};
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/detalles-productos/detalles-productos.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/detalles-productos/detalles-productos.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-salir img {\n  height: 0.6rem;\n  width: 0.6rem;\n}\n\n.btn-salir {\n  text-align: right !important;\n  padding: 20px 20px 10px 10px;\n}\n\n.imagen img {\n  height: 6rem;\n}\n\n.nombre {\n  padding-top: 10px;\n  color: #0F195E !important;\n}\n\n.descripcion {\n  padding: 10px 20px;\n  color: #87868A !important;\n}\n\n.precio {\n  text-align: right !important;\n  color: #FE3A00 !important;\n  padding-right: 30px;\n  font-size: 1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZXMtcHJvZHVjdG9zL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxkZXRhbGxlcy1wcm9kdWN0b3NcXGRldGFsbGVzLXByb2R1Y3Rvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RldGFsbGVzLXByb2R1Y3Rvcy9kZXRhbGxlcy1wcm9kdWN0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGFBQWE7QUNDakI7O0FER0E7RUFDSSw0QkFBNEI7RUFDNUIsNEJBQTRCO0FDQWhDOztBREdBO0VBQ0ksWUFBWTtBQ0FoQjs7QURHQTtFQUNJLGlCQUFpQjtFQUNqQix5QkFBd0I7QUNBNUI7O0FER0E7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXdCO0FDQTVCOztBREdBO0VBQ0ksNEJBQTRCO0VBQzVCLHlCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FDQXJCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxsZXMtcHJvZHVjdG9zL2RldGFsbGVzLXByb2R1Y3Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXNhbGlyIGltZ3tcclxuICAgIGhlaWdodDogMC42cmVtO1xyXG4gICAgd2lkdGg6IDAuNnJlbTtcclxufVxyXG5cclxuXHJcbi5idG4tc2FsaXJ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLmltYWdlbiBpbWd7XHJcbiAgICBoZWlnaHQ6IDZyZW07XHJcbn1cclxuXHJcbi5ub21icmV7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiMwRjE5NUUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlc2NyaXBjaW9ue1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgY29sb3I6Izg3ODY4QSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJlY2lve1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNGRTNBMDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufSIsIi5idG4tc2FsaXIgaW1nIHtcbiAgaGVpZ2h0OiAwLjZyZW07XG4gIHdpZHRoOiAwLjZyZW07XG59XG5cbi5idG4tc2FsaXIge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAxMHB4O1xufVxuXG4uaW1hZ2VuIGltZyB7XG4gIGhlaWdodDogNnJlbTtcbn1cblxuLm5vbWJyZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBjb2xvcjogIzBGMTk1RSAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcGNpb24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiAjODc4NjhBICFpbXBvcnRhbnQ7XG59XG5cbi5wcmVjaW8ge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZFM0EwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/detalles-productos/detalles-productos.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/detalles-productos/detalles-productos.page.ts ***!
  \***************************************************************/
/*! exports provided: DetallesProductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesProductosPage", function() { return DetallesProductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/producto.service */ "./src/app/servicios/producto.service.ts");





let DetallesProductosPage = class DetallesProductosPage {
    constructor(navCtrol, navParams, router, modalCtrl, alert, productoService, loading) {
        this.navCtrol = navCtrol;
        this.navParams = navParams;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.productoService = productoService;
        this.loading = loading;
        this.imagen = "";
        this.nombre = "";
        this.descripcion = "";
        this.precio = "";
    }
    ngOnInit() {
        this.imagen = this.navParams.get('imagen');
        this.nombre = this.navParams.get('nombre');
        this.descripcion = this.navParams.get('descripcion');
        this.precio = this.navParams.get('precio');
    }
    salir() {
        this.modalCtrl.dismiss();
    }
};
DetallesProductosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _servicios_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
DetallesProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalles-productos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detalles-productos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detalles-productos/detalles-productos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detalles-productos.page.scss */ "./src/app/detalles-productos/detalles-productos.page.scss")).default]
    })
], DetallesProductosPage);



/***/ }),

/***/ "./src/app/politicas/politicas.page.scss":
/*!***********************************************!*\
  !*** ./src/app/politicas/politicas.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  height: 10px;\n  width: 100%;\n}\n\n* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-titulo {\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n}\n\n.contenedor-titulo .titulo {\n  color: var(--ion-color-azul-oscuro);\n  font-size: larger;\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\n.contenedor-page {\n  padding: 2rem 1rem 1rem 1rem;\n}\n\n.contenido {\n  font-size: 0.8rem;\n  padding-top: 1rem;\n  padding-left: 2.25rem;\n  padding-right: 2.25rem;\n  text-align: justify;\n  text-justify: inter-word;\n  white-space: pre-line;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9saXRpY2FzL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxwb2xpdGljYXNcXHBvbGl0aWNhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BvbGl0aWNhcy9wb2xpdGljYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7QUNDZjs7QURFQTtFQUNJLDJDQUEyQztBQ0MvQzs7QURFQTtFQUVJLGlCQUFpQjtFQUNqQixhQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQ0F6Qjs7QURMQTtFQU9RLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ0UxQjs7QURDQTtFQUNJLDRCQUE0QjtBQ0VoQzs7QURBQTtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQ0d6QiIsImZpbGUiOiJzcmMvYXBwL3BvbGl0aWNhcy9wb2xpdGljYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGl0dWxve1xyXG4gICAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuLmNvbnRlbmVkb3ItcGFnZXtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAxcmVtIDFyZW07XHJcbn1cclxuLmNvbnRlbmlkb3tcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjI1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufSIsImlvbi1oZWFkZXIge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3ItdGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5jb250ZW5lZG9yLXRpdHVsbyAudGl0dWxvIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY29udGVuZWRvci1wYWdlIHtcbiAgcGFkZGluZzogMnJlbSAxcmVtIDFyZW0gMXJlbTtcbn1cblxuLmNvbnRlbmlkbyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAyLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/politicas/politicas.page.ts":
/*!*********************************************!*\
  !*** ./src/app/politicas/politicas.page.ts ***!
  \*********************************************/
/*! exports provided: PoliticasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticasPage", function() { return PoliticasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _servicios_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicios/producto.service */ "./src/app/servicios/producto.service.ts");
/* harmony import */ var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../aviso/correcto/correcto.page */ "./src/app/aviso/correcto/correcto.page.ts");
/* harmony import */ var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../aviso/incorrecto/incorrecto.page */ "./src/app/aviso/incorrecto/incorrecto.page.ts");








let PoliticasPage = class PoliticasPage {
    constructor(productoService, router, modalCtrl, loadingCtrl, storage) {
        this.productoService = productoService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.detalle = "";
    }
    ngOnInit() {
        this.cargar();
    }
    politicas() {
        console.log("refresh");
        this.productoService.getPolitica().subscribe(data => {
            //console.log("esta es la data "+data["nombre"])
            this.contenido = data;
            if (this.contenido[0] != null) {
                this.detalle = this.contenido[0].detalle;
            }
            else {
                this.mensajeIncorrecto("Algo sucedio", "Ocurrio un poblema, lo estamos solucionando");
            }
            console.log(this.contenido);
        }, (error) => {
            console.error(error);
        });
    }
    cargar() {
        this.loadingCtrl.create({
            message: 'Loading.....'
        }).then((loading) => {
            loading.present();
            {
                this.politicas();
            }
            setTimeout(() => {
                loading.dismiss();
            }, 1000);
        });
    }
    mensajeCorrecto(titulo, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_6__["CorrectoPage"],
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
                component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_7__["IncorrectoPage"],
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
PoliticasPage.ctorParameters = () => [
    { type: _servicios_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
PoliticasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-politicas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./politicas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/politicas/politicas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./politicas.page.scss */ "./src/app/politicas/politicas.page.scss")).default]
    })
], PoliticasPage);



/***/ }),

/***/ "./src/app/servicios/historial.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/historial.service.ts ***!
  \************************************************/
/*! exports provided: HistorialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialService", function() { return HistorialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let HistorialService = class HistorialService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://cabutoshop.pythonanywhere.com/movil/";
    }
    getHistorial(id) {
        const headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        };
        let parametro = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('cliente', id);
        return this.http.get(this.baseUrl + 'historial/', { params: parametro, 'headers': headers });
    }
    getPedido(id) {
        const headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        };
        let parametro = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
        return this.http.get(this.baseUrl + 'historial/', { params: parametro, 'headers': headers });
    }
    nuevoPedido(info) {
        const headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        };
        const body = JSON.stringify(info);
        return this.http.post(this.baseUrl + 'guardarPedido/', body, { 'headers': headers });
    }
    cancelarPedido(info) {
        const headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        };
        const body = JSON.stringify(info);
        return this.http.post(this.baseUrl + 'cancelarPedido/', body, { 'headers': headers });
    }
    pagarPedido(info) {
        const headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        };
        const body = JSON.stringify(info);
        return this.http.post(this.baseUrl + 'pagarPedido/', body, { 'headers': headers });
    }
    getCalificacion(id) {
        const headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        };
        let parametro = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
        return this.http.get(this.baseUrl + 'calificarPedido/', { params: parametro, 'headers': headers });
    }
    calificarPedido(info) {
        const headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        };
        const body = JSON.stringify(info);
        return this.http.post(this.baseUrl + 'calificarPedido/', body, { 'headers': headers });
    }
};
HistorialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HistorialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], HistorialService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
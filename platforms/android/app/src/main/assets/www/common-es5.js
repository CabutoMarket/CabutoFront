function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActive0d5784f9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-44bf8136.js */
    "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
    /* harmony import */


    var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-eea61379.js */
    "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
    /* harmony import */


    var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-7b8ba70a.js */
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
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
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme3f0b0c04Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/aviso/pregunta/pregunta.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aviso/pregunta/pregunta.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAvisoPreguntaPreguntaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding text-center style=\"text-align: center !important;\">\r\n  <div class = \"btn-salir\"><img src=\"../assets/img/salir.png\" (click)=salir()></div>\r\n  <div class = \"titulo\">¿Desea eliminar el producto/oferta del carrito de compras?</div>\r\n  <div class = \"btns\">\r\n    <div class=\"btn\" (click)=aceptar() ><span >Si</span></div>\r\n    <div class=\"btn\" (click)=salir()><span>No</span></div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detalles-productos/detalles-productos.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalles-productos/detalles-productos.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetallesProductosDetallesProductosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding text-center style=\"text-align: center !important;\">\r\n  <div class = \"btn-salir\"><img src=\"../assets/img/salir.png\" (click)=salir()></div>\r\n  <div class = \"imagen\"><img src=\"http://cabutoshop.pythonanywhere.com{{imagen}}\"  ></div>\r\n  <div class = \"nombre\">{{nombre}}</div>\r\n  <div class = \"descripcion\">{{descripcion}}</div>\r\n  <div class = \"precio\">${{precio}}</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/politicas/politicas.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/politicas/politicas.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPoliticasPoliticasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class= \"contenedor-page\">\r\n    <div class=\"contenedor-titulo\">\r\n      <ion-label class=\"titulo\">Políticas de Privacidad</ion-label>\r\n    </div>\r\n    <div class = contenedor-politicas >\r\n      <p class = \"contenido\">{{detalle}}</p>\r\n      <!--aqui va la descripcions-->\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/aviso/pregunta/pregunta.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/aviso/pregunta/pregunta.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAvisoPreguntaPreguntaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-salir img {\n  height: 0.6rem;\n  width: 0.6rem;\n}\n\n.btn-salir {\n  text-align: right !important;\n  padding: 20px 20px 10px 10px;\n}\n\n.titulo {\n  color: var(--ion-color-azul-oscuro);\n  margin: 10px 20px 20px 20px;\n  padding-bottom: 0px;\n  font-size: 1rem;\n}\n\n.btns {\n  display: flex;\n  justify-content: center;\n}\n\n.btns .btn {\n  color: white;\n  width: 3rem;\n  height: 3rem;\n  font-size: large;\n  margin: 0px 15px 15px 15px;\n  background: var(--ion-color-naranja-oscuro);\n  border-radius: 50%;\n  padding: 3px;\n  display: grid;\n}\n\n.btns .btn span {\n  justify-content: center;\n  align-items: center;\n  border: white dashed 1.5px;\n  border-radius: 50%;\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZpc28vcHJlZ3VudGEvRDpcXGdpdFxcQ2FidXRvRnJvbnQvc3JjXFxhcHBcXGF2aXNvXFxwcmVndW50YVxccHJlZ3VudGEucGFnZS5zY3NzIiwic3JjL2FwcC9hdmlzby9wcmVndW50YS9wcmVndW50YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsYUFBYTtBQ0NqQjs7QURHQTtFQUNJLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUNBaEM7O0FESUE7RUFDSSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlO0FDRG5COztBRElBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtBQ0QzQjs7QUREQTtFQUlRLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQ0NyQjs7QURiQTtFQWNZLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixhQUFhO0FDR3pCIiwiZmlsZSI6InNyYy9hcHAvYXZpc28vcHJlZ3VudGEvcHJlZ3VudGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zYWxpciBpbWd7XHJcbiAgICBoZWlnaHQ6IDAuNnJlbTtcclxuICAgIHdpZHRoOiAwLjZyZW07XHJcbn1cclxuXHJcblxyXG4uYnRuLXNhbGlye1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG4udGl0dWxve1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYnRuc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5idG57XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1uYXJhbmphLW9zY3Vybyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IHdoaXRlIGRhc2hlZCAxLjVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLmJ0bi1zYWxpciBpbWcge1xuICBoZWlnaHQ6IDAuNnJlbTtcbiAgd2lkdGg6IDAuNnJlbTtcbn1cblxuLmJ0bi1zYWxpciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDEwcHg7XG59XG5cbi50aXR1bG8ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcbiAgbWFyZ2luOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG5zIC5idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbjogMHB4IDE1cHggMTVweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbmFyYW5qYS1vc2N1cm8pO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmJ0bnMgLmJ0biBzcGFuIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogd2hpdGUgZGFzaGVkIDEuNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/aviso/pregunta/pregunta.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/aviso/pregunta/pregunta.page.ts ***!
    \*************************************************/

  /*! exports provided: PreguntaPage */

  /***/
  function srcAppAvisoPreguntaPreguntaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreguntaPage", function () {
      return PreguntaPage;
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


    var _servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../.././servicios/shopping-cart.service */
    "./src/app/servicios/shopping-cart.service.ts");
    /* harmony import */


    var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../aviso/correcto/correcto.page */
    "./src/app/aviso/correcto/correcto.page.ts");
    /* harmony import */


    var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../aviso/incorrecto/incorrecto.page */
    "./src/app/aviso/incorrecto/incorrecto.page.ts");

    var PreguntaPage = /*#__PURE__*/function () {
      function PreguntaPage(navCtrol, navParams, router, modalCtrl, alert, loading, shoppingCart) {
        _classCallCheck(this, PreguntaPage);

        this.navCtrol = navCtrol;
        this.navParams = navParams;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.loading = loading;
        this.shoppingCart = shoppingCart;
      }

      _createClass(PreguntaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "mensajeCorrecto",
        value: function mensajeCorrecto(titulo, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_5__["CorrectoPage"],
                      cssClass: 'CorrectoProducto',
                      componentProps: {
                        'titulo': titulo,
                        'mensaje': mensaje
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "mensajeIncorrecto",
        value: function mensajeIncorrecto(titulo, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_6__["IncorrectoPage"],
                      cssClass: 'IncorrectoProducto',
                      componentProps: {
                        'titulo': titulo,
                        'mensaje': mensaje
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "aceptar",
        value: function aceptar() {
          var _this = this;

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
          var prodxcant = {
            'nombre': nombre,
            'cantidad': parseInt(cantidad),
            'correo': correo
          };
          this.shoppingCart.quitarCarrito(prodxcant).subscribe(function (data) {
            if (data.valid == "OK") {
              div.style.display = "none";
              total.innerHTML = "" + tot + "";
              subtotal[parseInt(compara)].innerHTML = "0.00";

              _this.mensajeCorrecto("Eliminación Exitosa", "ha eliminado del carrito");
            } else if (data.valid == "NOT") {
              _this.mensajeIncorrecto("No se pudo completar la operacion", "Ha ocurrido un error, revise su conexión");
            } else {
              _this.mensajeIncorrecto("No se pudo completar la operacion", "Ha ocurrido un error, revise su conexión");
            }

            window.footer.datos();
          });
          this.modalCtrl.dismiss();
        }
      }, {
        key: "salir",
        value: function salir() {
          this.modalCtrl.dismiss();
        }
      }]);

      return PreguntaPage;
    }();

    PreguntaPage.ctorParameters = function () {
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _servicios_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]
      }];
    };

    PreguntaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pregunta',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pregunta.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/aviso/pregunta/pregunta.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pregunta.page.scss */
      "./src/app/aviso/pregunta/pregunta.page.scss"))["default"]]
    })], PreguntaPage);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/components/menu/menu.component.ts");

    var PAGES = [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: PAGES,
      exports: PAGES,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/menu/menu.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu {\n  background-color: blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFxQjtBQ0N6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xyXG59IiwiaW9uLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/components/menu/menu.component.scss"))["default"]]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/detalles-productos/detalles-productos.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/detalles-productos/detalles-productos.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetallesProductosDetallesProductosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-salir img {\n  height: 0.6rem;\n  width: 0.6rem;\n}\n\n.btn-salir {\n  text-align: right !important;\n  padding: 20px 20px 10px 10px;\n}\n\n.imagen img {\n  height: 6rem;\n}\n\n.nombre {\n  padding-top: 10px;\n  color: #0F195E !important;\n}\n\n.descripcion {\n  padding: 10px 20px;\n  color: #87868A !important;\n}\n\n.precio {\n  text-align: right !important;\n  color: #FE3A00 !important;\n  padding-right: 30px;\n  font-size: 1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZXMtcHJvZHVjdG9zL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxkZXRhbGxlcy1wcm9kdWN0b3NcXGRldGFsbGVzLXByb2R1Y3Rvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RldGFsbGVzLXByb2R1Y3Rvcy9kZXRhbGxlcy1wcm9kdWN0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGFBQWE7QUNDakI7O0FER0E7RUFDSSw0QkFBNEI7RUFDNUIsNEJBQTRCO0FDQWhDOztBREdBO0VBQ0ksWUFBWTtBQ0FoQjs7QURHQTtFQUNJLGlCQUFpQjtFQUNqQix5QkFBd0I7QUNBNUI7O0FER0E7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXdCO0FDQTVCOztBREdBO0VBQ0ksNEJBQTRCO0VBQzVCLHlCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FDQXJCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxsZXMtcHJvZHVjdG9zL2RldGFsbGVzLXByb2R1Y3Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXNhbGlyIGltZ3tcclxuICAgIGhlaWdodDogMC42cmVtO1xyXG4gICAgd2lkdGg6IDAuNnJlbTtcclxufVxyXG5cclxuXHJcbi5idG4tc2FsaXJ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLmltYWdlbiBpbWd7XHJcbiAgICBoZWlnaHQ6IDZyZW07XHJcbn1cclxuXHJcbi5ub21icmV7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiMwRjE5NUUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlc2NyaXBjaW9ue1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgY29sb3I6Izg3ODY4QSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJlY2lve1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNGRTNBMDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufSIsIi5idG4tc2FsaXIgaW1nIHtcbiAgaGVpZ2h0OiAwLjZyZW07XG4gIHdpZHRoOiAwLjZyZW07XG59XG5cbi5idG4tc2FsaXIge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAxMHB4O1xufVxuXG4uaW1hZ2VuIGltZyB7XG4gIGhlaWdodDogNnJlbTtcbn1cblxuLm5vbWJyZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBjb2xvcjogIzBGMTk1RSAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcGNpb24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiAjODc4NjhBICFpbXBvcnRhbnQ7XG59XG5cbi5wcmVjaW8ge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZFM0EwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/detalles-productos/detalles-productos.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/detalles-productos/detalles-productos.page.ts ***!
    \***************************************************************/

  /*! exports provided: DetallesProductosPage */

  /***/
  function srcAppDetallesProductosDetallesProductosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetallesProductosPage", function () {
      return DetallesProductosPage;
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


    var _servicios_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../servicios/producto.service */
    "./src/app/servicios/producto.service.ts");

    var DetallesProductosPage = /*#__PURE__*/function () {
      function DetallesProductosPage(navCtrol, navParams, router, modalCtrl, alert, productoService, loading) {
        _classCallCheck(this, DetallesProductosPage);

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

      _createClass(DetallesProductosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imagen = this.navParams.get('imagen');
          this.nombre = this.navParams.get('nombre');
          this.descripcion = this.navParams.get('descripcion');
          this.precio = this.navParams.get('precio');
        }
      }, {
        key: "salir",
        value: function salir() {
          this.modalCtrl.dismiss();
        }
      }]);

      return DetallesProductosPage;
    }();

    DetallesProductosPage.ctorParameters = function () {
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
        type: _servicios_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    DetallesProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detalles-productos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detalles-productos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detalles-productos/detalles-productos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detalles-productos.page.scss */
      "./src/app/detalles-productos/detalles-productos.page.scss"))["default"]]
    })], DetallesProductosPage);
    /***/
  },

  /***/
  "./src/app/politicas/politicas.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/politicas/politicas.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPoliticasPoliticasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  height: 10px;\n  width: 100%;\n}\n\n* {\n  font-family: 'MyriadProSemibold' !important;\n}\n\n.contenedor-titulo {\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n}\n\n.contenedor-titulo .titulo {\n  color: var(--ion-color-azul-oscuro);\n  font-size: larger;\n  font-size: 1.5rem;\n  margin-bottom: 0px;\n}\n\n.contenedor-page {\n  padding: 2rem 1rem 1rem 1rem;\n}\n\n.contenido {\n  font-size: 0.8rem;\n  padding-top: 1rem;\n  padding-left: 2.25rem;\n  padding-right: 2.25rem;\n  text-align: justify;\n  text-justify: inter-word;\n  white-space: pre-line;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9saXRpY2FzL0Q6XFxnaXRcXENhYnV0b0Zyb250L3NyY1xcYXBwXFxwb2xpdGljYXNcXHBvbGl0aWNhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BvbGl0aWNhcy9wb2xpdGljYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7QUNDZjs7QURFQTtFQUNJLDJDQUEyQztBQ0MvQzs7QURFQTtFQUVJLGlCQUFpQjtFQUNqQixhQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQ0F6Qjs7QURMQTtFQU9RLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ0UxQjs7QURDQTtFQUNJLDRCQUE0QjtBQ0VoQzs7QURBQTtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQ0d6QiIsImZpbGUiOiJzcmMvYXBwL3BvbGl0aWNhcy9wb2xpdGljYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGl0dWxve1xyXG4gICAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWwtb3NjdXJvKTtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuLmNvbnRlbmVkb3ItcGFnZXtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAxcmVtIDFyZW07XHJcbn1cclxuLmNvbnRlbmlkb3tcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjI1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufSIsImlvbi1oZWFkZXIge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6ICdNeXJpYWRQcm9TZW1pYm9sZCcgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3ItdGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5jb250ZW5lZG9yLXRpdHVsbyAudGl0dWxvIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsLW9zY3Vybyk7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY29udGVuZWRvci1wYWdlIHtcbiAgcGFkZGluZzogMnJlbSAxcmVtIDFyZW0gMXJlbTtcbn1cblxuLmNvbnRlbmlkbyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAyLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/politicas/politicas.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/politicas/politicas.page.ts ***!
    \*********************************************/

  /*! exports provided: PoliticasPage */

  /***/
  function srcAppPoliticasPoliticasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PoliticasPage", function () {
      return PoliticasPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _servicios_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../servicios/producto.service */
    "./src/app/servicios/producto.service.ts");
    /* harmony import */


    var _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../aviso/correcto/correcto.page */
    "./src/app/aviso/correcto/correcto.page.ts");
    /* harmony import */


    var _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../aviso/incorrecto/incorrecto.page */
    "./src/app/aviso/incorrecto/incorrecto.page.ts");

    var PoliticasPage = /*#__PURE__*/function () {
      function PoliticasPage(productoService, router, modalCtrl, loadingCtrl, storage) {
        _classCallCheck(this, PoliticasPage);

        this.productoService = productoService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.detalle = "";
      }

      _createClass(PoliticasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargar();
        }
      }, {
        key: "politicas",
        value: function politicas() {
          var _this2 = this;

          console.log("refresh");
          this.productoService.getPolitica().subscribe(function (data) {
            //console.log("esta es la data "+data["nombre"])
            _this2.contenido = data;

            if (_this2.contenido[0] != null) {
              _this2.detalle = _this2.contenido[0].detalle;
            } else {
              _this2.mensajeIncorrecto("Algo sucedio", "Ocurrio un poblema, lo estamos solucionando");
            }

            console.log(_this2.contenido);
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "cargar",
        value: function cargar() {
          var _this3 = this;

          this.loadingCtrl.create({
            message: 'Loading.....'
          }).then(function (loading) {
            loading.present();
            {
              _this3.politicas();
            }
            setTimeout(function () {
              loading.dismiss();
            }, 1000);
          });
        }
      }, {
        key: "mensajeCorrecto",
        value: function mensajeCorrecto(titulo, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalCtrl.create({
                      component: _aviso_correcto_correcto_page__WEBPACK_IMPORTED_MODULE_6__["CorrectoPage"],
                      cssClass: 'CorrectoProducto',
                      componentProps: {
                        'titulo': titulo,
                        'mensaje': mensaje
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    return _context5.abrupt("return", _context5.sent);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "mensajeIncorrecto",
        value: function mensajeIncorrecto(titulo, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalCtrl.create({
                      component: _aviso_incorrecto_incorrecto_page__WEBPACK_IMPORTED_MODULE_7__["IncorrectoPage"],
                      cssClass: 'IncorrectoProducto',
                      componentProps: {
                        'titulo': titulo,
                        'mensaje': mensaje
                      }
                    });

                  case 2:
                    modal = _context6.sent;
                    _context6.next = 5;
                    return modal.present();

                  case 5:
                    return _context6.abrupt("return", _context6.sent);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return PoliticasPage;
    }();

    PoliticasPage.ctorParameters = function () {
      return [{
        type: _servicios_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    PoliticasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-politicas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./politicas.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/politicas/politicas.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./politicas.page.scss */
      "./src/app/politicas/politicas.page.scss"))["default"]]
    })], PoliticasPage);
    /***/
  },

  /***/
  "./src/app/servicios/historial.service.ts":
  /*!************************************************!*\
    !*** ./src/app/servicios/historial.service.ts ***!
    \************************************************/

  /*! exports provided: HistorialService */

  /***/
  function srcAppServiciosHistorialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialService", function () {
      return HistorialService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HistorialService = /*#__PURE__*/function () {
      function HistorialService(http) {
        _classCallCheck(this, HistorialService);

        this.http = http;
        this.baseUrl = "https://cabutoshop.pythonanywhere.com/movil/";
      }

      _createClass(HistorialService, [{
        key: "getHistorial",
        value: function getHistorial(id) {
          var headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
          };
          var parametro = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('cliente', id);
          return this.http.get(this.baseUrl + 'historial/', {
            params: parametro,
            'headers': headers
          });
        }
      }, {
        key: "getPedido",
        value: function getPedido(id) {
          var headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
          };
          var parametro = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
          return this.http.get(this.baseUrl + 'historial/', {
            params: parametro,
            'headers': headers
          });
        }
      }, {
        key: "nuevoPedido",
        value: function nuevoPedido(info) {
          var headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
          };
          var body = JSON.stringify(info);
          return this.http.post(this.baseUrl + 'guardarPedido/', body, {
            'headers': headers
          });
        }
      }, {
        key: "cancelarPedido",
        value: function cancelarPedido(info) {
          var headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
          };
          var body = JSON.stringify(info);
          return this.http.post(this.baseUrl + 'cancelarPedido/', body, {
            'headers': headers
          });
        }
      }, {
        key: "pagarPedido",
        value: function pagarPedido(info) {
          var headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
          };
          var body = JSON.stringify(info);
          return this.http.post(this.baseUrl + 'pagarPedido/', body, {
            'headers': headers
          });
        }
      }, {
        key: "getCalificacion",
        value: function getCalificacion(id) {
          var headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
          };
          var parametro = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
          return this.http.get(this.baseUrl + 'calificarPedido/', {
            params: parametro,
            'headers': headers
          });
        }
      }, {
        key: "calificarPedido",
        value: function calificarPedido(info) {
          var headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
          };
          var body = JSON.stringify(info);
          return this.http.post(this.baseUrl + 'calificarPedido/', body, {
            'headers': headers
          });
        }
      }]);

      return HistorialService;
    }();

    HistorialService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    HistorialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], HistorialService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map
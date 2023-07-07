"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/FeaturedImage.js":
/*!*************************************!*\
  !*** ./components/FeaturedImage.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeaturedImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction FeaturedImage(param) {\n    let { post } = param;\n    let img = \"\";\n    const defaultFeaturedImage = \"\";\n    const defaultWidth = \"300\";\n    const defaultHeight = \"200\";\n    if (post.featuredImage) {\n        let size = post.featuredImage.node.mediaDetails.sizes[0];\n        img = {\n            src: size.sourceUrl,\n            width: size.width,\n            height: size.height\n        };\n    } else {\n        img = {\n            src: defaultFeaturedImage,\n            width: defaultWidth,\n            height: defaultHeight\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/blog/\".concat(post.slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: img.src,\n            width: img.width,\n            height: img.height,\n            alt: post.title,\n            className: \"h\"\n        }, void 0, false, {\n            fileName: \"/Users/it-support/Documents/nextjs-blog/components/FeaturedImage.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/it-support/Documents/nextjs-blog/components/FeaturedImage.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = FeaturedImage;\nvar _c;\n$RefreshReg$(_c, \"FeaturedImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVkSW1hZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUVkLFNBQVNFLGNBQWMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSO0lBQ2xDLElBQUlDLE1BQU07SUFFVixNQUFNQyx1QkFBdUI7SUFDN0IsTUFBTUMsZUFBZTtJQUNyQixNQUFNQyxnQkFBZ0I7SUFFdEIsSUFBR0osS0FBS0ssYUFBYSxFQUFDO1FBQ2xCLElBQUlDLE9BQU9OLEtBQUtLLGFBQWEsQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQ3hEUixNQUFNO1lBQ0ZTLEtBQUtKLEtBQUtLLFNBQVM7WUFDbkJDLE9BQU9OLEtBQUtNLEtBQUs7WUFDakJDLFFBQVFQLEtBQUtPLE1BQU07UUFDdkI7SUFDSixPQUNLO1FBQ0RaLE1BQU07WUFDRlMsS0FBS1I7WUFDTFUsT0FBT1Q7WUFDUFUsUUFBUVQ7UUFDWjtJQUNKO0lBQ0EscUJBQ0ksOERBQUNOLGtEQUFJQTtRQUFDZ0IsTUFBTSxTQUFtQixPQUFWZCxLQUFLZSxJQUFJO2tCQUMxQiw0RUFBQ2xCLG1EQUFLQTtZQUFDYSxLQUFLVCxJQUFJUyxHQUFHO1lBQUVFLE9BQU9YLElBQUlXLEtBQUs7WUFBRUMsUUFBUVosSUFBSVksTUFBTTtZQUFFRyxLQUFLaEIsS0FBS2lCLEtBQUs7WUFBRUMsV0FBVTs7Ozs7Ozs7Ozs7QUFHbEc7S0EzQndCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZEltYWdlLmpzP2UzNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVkSW1hZ2UoeyBwb3N0IH0pIHtcbiAgICBsZXQgaW1nID0gJyc7XG5cbiAgICBjb25zdCBkZWZhdWx0RmVhdHVyZWRJbWFnZSA9IFwiXCI7XG4gICAgY29uc3QgZGVmYXVsdFdpZHRoID0gXCIzMDBcIjtcbiAgICBjb25zdCBkZWZhdWx0SGVpZ2h0ID0gXCIyMDBcIjtcblxuICAgIGlmKHBvc3QuZmVhdHVyZWRJbWFnZSl7XG4gICAgICAgIGxldCBzaXplID0gcG9zdC5mZWF0dXJlZEltYWdlLm5vZGUubWVkaWFEZXRhaWxzLnNpemVzWzBdO1xuICAgICAgICBpbWcgPSB7XG4gICAgICAgICAgICBzcmM6IHNpemUuc291cmNlVXJsLFxuICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGltZyA9IHtcbiAgICAgICAgICAgIHNyYzogZGVmYXVsdEZlYXR1cmVkSW1hZ2UsXG4gICAgICAgICAgICB3aWR0aDogZGVmYXVsdFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkZWZhdWx0SGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1nLnNyY30gd2lkdGg9e2ltZy53aWR0aH0gaGVpZ2h0PXtpbWcuaGVpZ2h0fSBhbHQ9e3Bvc3QudGl0bGV9IGNsYXNzTmFtZT1cImhcIi8+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIkZlYXR1cmVkSW1hZ2UiLCJwb3N0IiwiaW1nIiwiZGVmYXVsdEZlYXR1cmVkSW1hZ2UiLCJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiZmVhdHVyZWRJbWFnZSIsInNpemUiLCJub2RlIiwibWVkaWFEZXRhaWxzIiwic2l6ZXMiLCJzcmMiLCJzb3VyY2VVcmwiLCJ3aWR0aCIsImhlaWdodCIsImhyZWYiLCJzbHVnIiwiYWx0IiwidGl0bGUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FeaturedImage.js\n"));

/***/ })

});
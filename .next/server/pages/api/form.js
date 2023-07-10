"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/form";
exports.ids = ["pages/api/form"];
exports.modules = {

/***/ "(api)/./pages/api/form.js":
/*!***************************!*\
  !*** ./pages/api/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const body = req.body;\n    if (!body.firstName || !body.email || !body.message) {\n        return res.status(400).json({\n            data: \"first name, email, and message fields are required!\"\n        });\n    }\n    return res.status(200).json({\n        data: \"form submitted successfully\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3BDLE1BQU1DLE9BQU9GLElBQUlFLElBQUk7SUFFckIsSUFBRyxDQUFDQSxLQUFLQyxTQUFTLElBQUksQ0FBQ0QsS0FBS0UsS0FBSyxJQUFJLENBQUNGLEtBQUtHLE9BQU8sRUFBRTtRQUNoRCxPQUFPSixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLE1BQU07UUFBcUQ7SUFDNUY7SUFFQSxPQUFPUCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUNDLE1BQU07SUFBNkI7QUFDcEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL3BhZ2VzL2FwaS9mb3JtLmpzPzExOTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcblxuICAgIGlmKCFib2R5LmZpcnN0TmFtZSB8fCAhYm9keS5lbWFpbCB8fCAhYm9keS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZGF0YTogXCJmaXJzdCBuYW1lLCBlbWFpbCwgYW5kIG1lc3NhZ2UgZmllbGRzIGFyZSByZXF1aXJlZCFcIn0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7ZGF0YTogXCJmb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcIn0pO1xufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJib2R5IiwiZmlyc3ROYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwic3RhdHVzIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/form.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/form.js"));
module.exports = __webpack_exports__;

})();
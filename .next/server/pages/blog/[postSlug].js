"use strict";
(() => {
var exports = {};
exports.id = 615;
exports.ids = [615];
exports.modules = {

/***/ 3679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblog_2F_5BpostSlug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2F_5BpostSlug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2Fblog_2F_5BpostSlug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2F_5BpostSlug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fblog_2F_5BpostSlug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2F_5BpostSlug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/blog/[postSlug].js
var _postSlug_namespaceObject = {};
__webpack_require__.r(_postSlug_namespaceObject);
__webpack_require__.d(_postSlug_namespaceObject, {
  "default": () => (Post),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(6088);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/SiteHeader.js
var SiteHeader = __webpack_require__(1770);
// EXTERNAL MODULE: ./components/SiteFooter.js
var SiteFooter = __webpack_require__(2007);
// EXTERNAL MODULE: ./lib/posts.js
var posts = __webpack_require__(2479);
// EXTERNAL MODULE: ./components/Date.js
var components_Date = __webpack_require__(272);
;// CONCATENATED MODULE: ./pages/blog/[postSlug].js






async function getStaticProps({ params }) {
    const postData = await (0,posts/* getSinglePost */.JF)(params.postSlug);
    let featuredImageUrl = "";
    /*if( postData.featuredImage.node.mediaDetails.sizes[0]
        .sourceUrl ) {
        featuredImageUrl = postData.featuredImage.node.
        mediaDetails.sizes[0].sourceurl;
    }*/ if (postData.featuredImage) {
        featuredImageUrl = postData.featuredImage.node.mediaDetails.sizes[0].sourceUrl;
    }
    return {
        props: {
            postData,
            featuredImageUrl: "url(" + featuredImageUrl + ")"
        }
    };
}
async function getStaticPaths() {
    const postSlugs = await (0,posts/* getPostSlugs */.p$)();
    return {
        paths: postSlugs.map((s)=>({
                params: {
                    postSlug: s.slug
                }
            })),
        fallback: false
    };
}
function Post({ postData, featuredImageUrl }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                        children: [
                            " ",
                            postData.title
                        ]
                    }, postData.slug),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: postData.excerpt
                    }, "metadescription")
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "bg-slate-700 bg-opacity-70 absolute w-full z-20",
                children: /*#__PURE__*/ jsx_runtime.jsx(SiteHeader/* default */.Z, {
                    className: "header-single-post z-10 relative"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "hero-area h-[60vh] min-h-[30rem] bg-no-repeat bg-cover bg-center relative",
                        style: {
                            backgroundImage: featuredImageUrl
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 bg-slate-900 opacity-40"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "container mx-auto h-full flex flex-col justify-center lg:max-w-4xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: "text-4xl text-center text-slate-100 relative z-10 py-8 mt-12",
                                        children: postData.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "pb-4 text-slate-100 z-10",
                                        children: [
                                            "Posted by Abhinav, last updated on ",
                                            /*#__PURE__*/ jsx_runtime.jsx(components_Date/* default */.Z, {
                                                dateString: postData.modified
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: postData.excerpt
                                        },
                                        className: "relative z-10 text-left text-slate-200 text-1xl pl-4 border-l-4 border-lime-200"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("section", {
                        className: "content-area py-8",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: postData.content
                            },
                            className: "post-content container lg:max-w-4xl mx-auto"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(SiteFooter/* default */.Z, {})
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblog%2F%5BpostSlug%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fblog%2F%5BpostSlug%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblog_2F_5BpostSlug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2F_5BpostSlug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_postSlug_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fblog_2F_5BpostSlug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2F_5BpostSlug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2Fblog_2F_5BpostSlug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2F_5BpostSlug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_postSlug_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blog/[postSlug]","pathname":"/blog/[postSlug]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: _postSlug_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 4384:
/***/ ((module) => {

module.exports = require("date-fns/format");

/***/ }),

/***/ 1369:
/***/ ((module) => {

module.exports = require("date-fns/parseISO");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [207,636,61,947,770,7,726], () => (__webpack_exec__(3679)));
module.exports = __webpack_exports__;

})();
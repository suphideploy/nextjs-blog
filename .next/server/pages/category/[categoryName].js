"use strict";
(() => {
var exports = {};
exports.id = 76;
exports.ids = [76];
exports.modules = {

/***/ 584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcategory_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2Fcategory_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fcategory_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/category/[categoryName].js
var _categoryName_namespaceObject = {};
__webpack_require__.r(_categoryName_namespaceObject);
__webpack_require__.d(_categoryName_namespaceObject, {
  "default": () => (CategoryArchive),
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/SiteHeader.js
var SiteHeader = __webpack_require__(1770);
// EXTERNAL MODULE: ./components/SiteFooter.js
var SiteFooter = __webpack_require__(2007);
// EXTERNAL MODULE: ./components/LoadMore.js
var LoadMore = __webpack_require__(3770);
// EXTERNAL MODULE: ./components/FeaturedImage.js
var FeaturedImage = __webpack_require__(1462);
// EXTERNAL MODULE: ./lib/posts.js
var posts = __webpack_require__(2479);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Date.js
var components_Date = __webpack_require__(272);
;// CONCATENATED MODULE: ./pages/category/[categoryName].js










async function getStaticPaths() {
    const categories = await (0,posts/* getCategorySlugs */.vo)();
    return {
        paths: categories.map((category)=>({
                params: {
                    categoryName: category.slug
                }
            })),
        fallback: false
    };
}
async function getStaticProps({ params }) {
    const categoryPosts = await (0,posts/* getPostList */.UI)(null, {
        key: "categoryName",
        value: params.categoryName
    });
    const categoryDetails = await (0,posts/* getCategoryDetails */.m7)(params.categoryName);
    return {
        props: {
            categoryPosts: categoryPosts,
            categoryDetails: categoryDetails
        }
    };
}
function CategoryArchive({ categoryPosts, categoryDetails }) {
    const [posts, setPosts] = (0,external_react_.useState)(categoryPosts);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: categoryDetails.name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "h-[50vh] min-h-[20rem] bg-[url('/home.jpg')] relative",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute bg-slate-900 opacity-40 inset-0 z-0"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(SiteHeader/* default */.Z, {
                        className: "header-category z-10 relative"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                        className: "text-4xl text-center text-slate-100 relative z-10 py-8",
                        children: [
                            "Category Archive: ",
                            categoryDetails.name
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "relative z-10 text-center text-slate-200 text-2xl",
                        children: [
                            "Found ",
                            categoryDetails.count,
                            " posts under this category"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime.jsx("section", {
                    className: "post-list mt-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container mx-auto lg:max-w-5xl",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                children: posts.nodes.map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "grid grid-cols-5 gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-span-2",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(FeaturedImage/* default */.Z, {
                                                    post: post
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-span-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        className: "py-4",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: `/blog/${post.slug}`,
                                                            className: "text-blue-400 text-2xl hover:text-blue-600",
                                                            children: post.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "py-4",
                                                        children: [
                                                            "Published on ",
                                                            /*#__PURE__*/ jsx_runtime.jsx(components_Date/* default */.Z, {
                                                                dateString: post.date
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-lg",
                                                        dangerouslySetInnerHTML: {
                                                            __html: post.excerpt
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "py-4",
                                                        children: [
                                                            "Posted under ",
                                                            post.categories.nodes.map((category)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    className: "text-blue-400 hover:text-blue-500",
                                                                    href: `/category/${category.slug}`,
                                                                    children: category.name
                                                                }, category.slug))
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, post.slug))
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "py-4 text-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx(LoadMore/* default */.Z, {
                                    posts: posts,
                                    setPosts: setPosts,
                                    taxonomy: {
                                        key: "categoryName",
                                        value: categoryDetails.slug
                                    }
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcategory%2F%5BcategoryName%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fcategory%2F%5BcategoryName%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcategory_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_categoryName_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fcategory_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2Fcategory_2F_5BcategoryName_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5BcategoryName_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_categoryName_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/category/[categoryName]","pathname":"/category/[categoryName]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: _categoryName_namespaceObject,
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
var __webpack_exports__ = __webpack_require__.X(0, [207,636,61,947,770,7,726,696], () => (__webpack_exec__(584)));
module.exports = __webpack_exports__;

})();
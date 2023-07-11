"use strict";
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 1462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FeaturedImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function FeaturedImage({ post }) {
    let img = "";
    const defaultFeaturedImage = "";
    const defaultWidth = "300";
    const defaultHeight = "200";
    if (post.featuredImage) {
        let size = post.featuredImage.node.mediaDetails.sizes[0];
        img = {
            src: size.sourceUrl,
            width: size.width,
            height: size.height
        };
    } else {
        img = {
            src: defaultFeaturedImage,
            width: defaultWidth,
            height: defaultHeight
        };
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/blog/${post.slug}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: img.src,
            width: img.width,
            height: img.height,
            alt: post.title,
            className: "h-full object-cover rounded-xl"
        })
    });
}


/***/ }),

/***/ 3770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LoadMore)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2479);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function LoadMore({ posts, setPosts, taxonomy = null }) {
    let bT = posts.pageInfo.hasNextPage ? "Load more posts" : "No more posts to load";
    let bD = posts.pageInfo.hasNextPage ? false : true;
    const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(bT);
    const [buttonDisabled, setButtonDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(bD);
    const handleOnclick = async (event)=>{
        setButtonText("Loading...");
        setButtonDisabled(true);
        const morePosts = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getPostList */ .UI)(posts.pageInfo.endCursor, taxonomy);
        let updatedPosts = {
            pageInfo: {},
            nodes: []
        };
        updatedPosts.pageInfo = morePosts.pageInfo;
        posts.nodes.map((node)=>{
            updatedPosts.nodes.push(node);
        });
        morePosts.nodes.map((node)=>{
            updatedPosts.nodes.push(node);
        });
        setPosts(updatedPosts);
        if (morePosts.pageInfo.hasNextPage) {
            setButtonText("Load more posts");
            setButtonDisabled(false);
        } else {
            setButtonText("No more posts to load");
            setButtonDisabled(true);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "load-more font-bold bg-blue-400 text-slate-900 px-4 py-2 hover:bg-blue-500",
        onClick: handleOnclick,
        disabled: buttonDisabled,
        children: buttonText
    });
}


/***/ })

};
;
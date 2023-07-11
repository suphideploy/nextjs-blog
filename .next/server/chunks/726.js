"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1369);
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4384);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_2__);



function Date({ dateString }) {
    const date = date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1___default()(dateString);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        children: date_fns_format__WEBPACK_IMPORTED_MODULE_2___default()(date, "LLLL d, yyyy")
    });
}


/***/ }),

/***/ 2242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ graphqlRequest)
/* harmony export */ });
async function graphqlRequest(query) {
    const url = "http://nextjs-blog.local/graphql";
    const headers = {
        "Content-Type": "application/json"
    };
    const res = await fetch(url, {
        headers,
        method: "POST",
        body: JSON.stringify(query)
    });
    const resJson = await res.json();
    return resJson;
}


/***/ }),

/***/ 2479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JF: () => (/* binding */ getSinglePost),
/* harmony export */   UI: () => (/* binding */ getPostList),
/* harmony export */   m7: () => (/* binding */ getCategoryDetails),
/* harmony export */   p$: () => (/* binding */ getPostSlugs),
/* harmony export */   vo: () => (/* binding */ getCategorySlugs)
/* harmony export */ });
/* harmony import */ var _graphqlRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2242);

async function getPostList(endCursor = null, taxonomy = null) {
    let condition = `after: "${endCursor}", first: 5, where: {orderby: {field: DATE, order: DESC}}`;
    if (taxonomy) {
        condition = `after: "${endCursor}", first: 5, where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
    }
    const query = {
        query: `query getAllPosts {
                posts(${condition})  {
                  nodes {
                    date
                    slug
                    title
                    excerpt(format: RENDERED)
                    featuredImage {
                      node {
                        mediaDetails {
                          file
                          sizes {
                            sourceUrl
                            width
                            height
                          }
                        }
                      }
                    }
                    categories {
                      nodes {
                        name
                        slug
                      }
                    }
                  }
                  pageInfo {
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    startCursor
                  }
                }
              } `
    };
    const resJson = await (0,_graphqlRequest__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(query);
    const allPosts = resJson.data.posts;
    return allPosts;
}
async function getSinglePost(slug) {
    const query = {
        query: `query getSinglePost {
                post(id: "${slug}", idType: SLUG) {
                  content(format: RENDERED)
                  date
                  excerpt(format: RENDERED)
                  modified
                  slug
                  title(format: RENDERED)
                    featuredImage {
                      node {
                        mediaDetails {
                          sizes {
                            sourceUrl
                            width
                            height
                          }
                        }
                      }
                    }
                      categories {
                        nodes {
                          name
                          slug
                        }
                      }
                  }
                }`
    };
    const resJson = await (0,_graphqlRequest__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(query);
    const singlePost = resJson.data.post;
    return singlePost;
}
async function getPostSlugs() {
    const query = {
        query: `query getPostSlugs {
            posts {
              nodes {
                slug
              }
            }
          }`
    };
    const resJson = await (0,_graphqlRequest__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(query);
    const slugs = resJson.data.posts.nodes;
    return slugs;
}
async function getCategorySlugs() {
    const query = {
        query: `query getCatetorySlugs {
      categories {
        nodes {
          slug
        }
      }
    }`
    };
    const resJson = await (0,_graphqlRequest__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(query);
    const categories = resJson.data.categories.nodes;
    return categories;
}
async function getCategoryDetails(categoryName) {
    const query = {
        query: `query getCategoryDetails {
      category(id: "${categoryName}", idType: SLUG) {
        count
        name
        slug
      }
    }`
    };
    const resJson = await (0,_graphqlRequest__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(query);
    const categoryDetails = resJson.data.category;
    return categoryDetails;
}


/***/ })

};
;
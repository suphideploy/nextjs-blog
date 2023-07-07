import graphqlRequest from "./graphqlRequest";
export async function getAllPosts() {
    const query = {
            query: `query getAllPosts {
                posts {
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
    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data.posts;
    return allPosts;
}

export async function getSinglePost() {
    const query = {
        query: ` query getSinglePost {
            post(id: "tiktok-content", idType: SLUG) {
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
const resJson = await graphqlRequest(query);
const SinglePost = resJson.data.posts;
return SinglePost;
}

export async function getPostSlugs() {
    const query = {
        query: `query getPostSlugs {
            posts {
              nodes {
                slug
              }
            }
          }`
    };
    const resJson = await graphqlRequest(query);
const slugs = resJson.data.posts.nodes;
return slugs;
}
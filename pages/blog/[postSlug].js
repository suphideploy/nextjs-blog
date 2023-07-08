import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getPostSlugs, getSinglePost } from "@/lib/posts";

export async function getStaticProps({ params }){
    const  postData  =  await getSinglePost(params.postSlug);
    

    let featuredImageUrl = "http://nextjs-blog.local/wp-content/uploads/2023/07/pexels-judit-peter-1766604.jpg";
   
    if(postData.featuredImage.node.mediaDetails.sizes[0].sourceUrl) {
        featuredImageUrl = postData.featuredImage.node.
        mediaDetails.sizes[0].sourceurl;
    }
    return {
        props: {
            postData,
            featuredImageUrl: "url(" + featuredImageUrl + ")",
        }
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();

    return {
        paths: postSlugs.map((s) => (
        {
            params: {
                postSlug: s.slug
            }
        }
        
      )),
      fallback: false

    }
}


export default function Post({ postData, featuredImageUrl }){
    return (
       <>
        <Head>
            <title key={postData.slug} > {postData.title}</title>
            <meta name="description" content={postData.excerpt} key="metadescription" />
        
        </Head>
        <section className="bg-slate-700 bg-opacity-70 absolute w-full z-20">
            <SiteHeader className="header-single-post z-10 relative" />
        </section>
        <article>
            <section className="hero-area h-[60vh] min-h-[30rem] bg-no-repeat bg-cover bg-center relative" 
            style={{ backgroundImage: featuredImageUrl }}>

            </section>
        </article>
       
       </>
    );
}
import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

export default function Home(){
    return (
        //React Fragment
        /*  
             <div className="container mx-auto  z-10 relative flex justify-between items-center bg-slate-500">
                    
                       <span>Test1</span>
                       <span>Test2</span>
                 
            </div>
        */
       <>
       <Head>
        <title key="pagetitle">Welcome to CoolNomad Travel Blog</title>
        <meta name="description" content="Blog with wordpress and Nextjs" key="metadescription">
        </meta>
       </Head>
       <div className="min-h-screen bg-[url('/home.jpg')] relative">
            <div className="absolute bg-slate-900 insert-0 z-0 opacity-40"></div>
            
            <SiteHeader className="z-10 relative" />
            <main>
                <div className="min-h-[50vh] flex flex-col items-center justify-center z-10 relative">
                    <h1 className="text-6xl text-center text-slate-100">Welcome to
                        <span className="text-yellow-400">CoolNomad</span> Travel Blog
                    </h1>
                    <div className="mt-20">
                        <Link href="/blog" className="text-2xl text-slate-100 border-slate-100 border-2 rounded-md py-3 px-4 hover:bg-yellow-300 hover:text-slate-800 transition">Read Blog</Link>
                    </div>
                </div>
            </main>

       </div>
       </>
    );
}
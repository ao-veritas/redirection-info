import { useEffect, useState } from "react";
import { Cta, Faq, Features, Footer, Hero, Navbar, ScreenshotDisplay } from "../components"
import { Link } from "react-router-dom";
import { FlipWords } from "../components/ui";

const HomePage = () => {
  const words = ["Users", "Projects", "You"];
  const [banner, setBanner] = useState(false)

  useEffect(() => {
    setBanner(false)
  }, [])
  
  return (
    <>
      <Navbar/>
      <main className={` bg-[#111111] font-raleway min-h-[100vh] w-full text-[#ffffff] flex flex-col justify-start items-center gap-6 overflow-hidden`}>
{banner &&
// @ts-ignore
<div id="sticky-banner" tabIndex="-1" className="fixed top-[90px] start-0 z-50 flex justify-between w-full p-4 bg-[#40959d15] backdrop-blur-[9px] rounded-full">
    <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="inline-flex p-1 me-3 rounded-full bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z"/>
                </svg>
                <span className="sr-only">Light bulb</span>
            </span>
            <span>Analyse new projects and stay informed! <Link to="/dashboard" className="inline font-medium text-cyan-600 underline dark:text-cyan-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Go to Analysis Page</Link></span>
        </p>
    </div>
    <div onClick={()=>{
      setBanner(false);
    }} className="flex items-center">
        <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5 hover:bg-gray-600">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close banner</span>
        </button>
    </div>
</div>}


        <Hero/>
        <ScreenshotDisplay/>
        <Features/>
        <section className="w-full md:px-20 px-10 sm:py-20 py-[45px] max-w-[1800px]">
        <h1 className="xl:text-[72px] xl:leading-[78px] 
        sm:text-[45px] sm:leading-[51px]
        text-[21px] leading-[33px] text-center
        font-medium tracking-wider pt-6 md:text-left">Veritas empowers <FlipWords words={words} duration={1000} className="text-[#40959D] md:inline text-center hidden"/><span className="text-[#40959D] md:hidden inline">You</span> <span className="block hero-gradient">to do more with less.</span></h1>
        </section>
        {/* <TabsSection/> */}
       <Faq/>
       <Cta/>
        {/* <Arch/>
        <ProjectsDisplay/> */}
        <Footer/>
      </main>
      
    </>
  )
}

export default HomePage
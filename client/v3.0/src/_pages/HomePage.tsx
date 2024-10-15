import { Footer, Hero, Navbar } from "../components"
import Cta from "../components/Landing/Cta";
import Faq from "../components/Landing/Faq";
import Features from "../components/Landing/Features"
import ScreenshotDisplay from "../components/Landing/ScreenshotDisplay"
// import TabsSection from "../components/Landing/TabsSection";
import { FlipWords } from "../components/ui/flip-words";

const HomePage = () => {
  const words = ["Users", "Projects", "You"];
  return (
    <>
      <Navbar/>
      <main className={` bg-[#111111] font-raleway min-h-[100vh] w-full text-[#ffffff] flex flex-col justify-start items-center gap-6 overflow-hidden`}>
        <Hero/>
        <ScreenshotDisplay/>
        <Features/>
        <section className="w-full md:px-20 px-10 sm:py-20 py-[45px] max-w-[1800px]">
        <h1 className="xl:text-[72px] xl:leading-[78px] 
        sm:text-[45px] sm:leading-[51px]
        text-[21px] leading-[33px] text-center
        font-medium tracking-wider pt-6 md:text-left">Veritas empowers <FlipWords words={words} duration={1000} className="text-[#40959D] sm:inline block w-full text-center"/> <span className="block hero-gradient">to do more with less.</span></h1>
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
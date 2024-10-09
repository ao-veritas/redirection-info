import { Arch, Footer, Hero, Navbar, ProjectsDisplay } from "../components"
import Faq from "../components/Landing/Faq";
import Features from "../components/Landing/Features"
import ScreenshotDisplay from "../components/Landing/ScreenshotDisplay"
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
        <section className="w-full px-20 py-20">
        <h1 className="text-[90px] font-medium tracking-wider leading-[96px] pt-6 text-left">Veritas empowers <FlipWords words={words} duration={1000} className="text-[#40959D]"/> <span className="block hero-gradient">to do more with less.</span></h1>
        </section>
       <Faq/>
        {/* <Arch/>
        <ProjectsDisplay/> */}
      </main>
      {/* <Footer/> */}

    </>
  )
}

export default HomePage
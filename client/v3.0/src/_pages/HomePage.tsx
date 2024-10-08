import { Arch, Footer, Hero, Navbar, ProjectsDisplay } from "../components"
import Features from "../components/Landing/Features"
import ScreenshotDisplay from "../components/Landing/ScreenshotDisplay"

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <main className={` bg-[#111111] font-raleway min-h-[100vh] w-full text-[#ffffff] flex flex-col justify-start items-center gap-6 overflow-hidden`}>
        <Hero/>
        <Features/>
        {/* <ScreenshotDisplay/> */}
        {/* <Arch/>
        <ProjectsDisplay/> */}
      </main>
      {/* <Footer/> */}

    </>
  )
}

export default HomePage
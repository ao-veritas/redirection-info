import { Footer, Navbar } from "../components"
import { BackgroundBeams, TextHoverEffect } from "../components/ui"


const ComingSoon = () => {
  return (
    <>
      <Navbar/>
    <main className={` bg-[#111111] font-raleway min-h-[100vh] w-full text-[#ffffff] flex flex-col justify-between items-center gap-6 overflow-hidden`}>
       <div className="pt-[120px] h-[60vh] z-20"><TextHoverEffect text="Coming Soon..."/></div> 
        <Footer/>
    </main>
    <BackgroundBeams/>
    </>
  )
}

export default ComingSoon
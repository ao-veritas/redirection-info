import { Footer, Navbar } from "../components"


const UnderConstruction = () => {
  return (
    <>
    <Navbar/>
  <main className={`maintenanceBg min-h-[100vh] bg-[#111111] font-raleway w-full text-[#ffffff] flex flex-col justify-between items-center gap-6 overflow-hidden`}>
     <div className="flex flex-col justify-center items-start md:pl-0 pl-6 min-h-[90vh] fadeIn">
     <h1 className=" font-bold  text-[#ffffff] 
     lg:text-[90px] text-[45px] 
     lg:leading-[90px] leading-[45px]">Under <span className="block">Maintenance</span></h1>
     <h6 className="font-thin font-sans uppercase
     lg:text-[30px] text-[21px]
     ">Check back soon, 
     Join <a href="https://discord.com/invite/uSR7KWhx9F" target="__blank" className="inline hover:underline bg-[#0D9C9C] px-[6px] rounded-sm py-[3px] hover:cursor-pointer">discord</a> to stay updated</h6></div>
      <Footer/>
  </main>
  {/* <BackgroundBeams/> */}
  </>
  )
}

export default UnderConstruction
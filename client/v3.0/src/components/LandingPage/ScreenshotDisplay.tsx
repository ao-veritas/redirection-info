import { FlipWords } from "../ui";


// import { StepstoCreate } from "./ScrollSs";

const ScreenshotDisplay = () => {
    const words = ["$AOEth", "$AODai", "$AOSol"];
  return (
    <section className="w-full lg:px-20 px-10 py-20 flex flex-col gap-9">
        <h1 className="md:text-[39px] text-[24px] leading-[30px] text-center md:leading-[42px] tracking-wider text-[#eeeeee]">Stake<FlipWords words={words} duration={1000} className="text-[#40959D]"/>at projects built on <span className="block">arweave and recieve their <span className="text-[#40959D]">$tokens</span></span></h1>
        {/* <div className="relative w-full top-40 mt-4 md:mt-28">
          <h2
            className="w-full text-center text-3xl top-[10vh] md:top-[17vh] md:text-6xl font-bold pb-12 sticky"
          >
            Manage your Testimonials in
            <span className="md:block"> 3 easy steps</span>
          </h2>
          <StepstoCreate />
        </div> */}
        {/* <div className="flex flex-row gap-6">
          <img src="/ss/1.png" alt="" />
          <img src="/ss/2.png" alt="" />
        </div> */}
    </section>
  )
}

export default ScreenshotDisplay
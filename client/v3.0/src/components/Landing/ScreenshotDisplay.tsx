import { FlipWords } from "../ui/flip-words"
import { StepstoCreate } from "./ScrollSs";

const ScreenshotDisplay = () => {
    const words = ["$AOEth", "$AODai", "$AOSol"];
  return (
    <section>
        <h1 className="text-[39px] text-center leading-[42px] tracking-wider text-[#eeeeee]">Stake<FlipWords words={words} duration={1000} className="text-[#40959D]"/>at projects built on <span className="block">arweave and recieve their <span className="text-[#40959D]">$tokens</span></span></h1>
        <div className="relative w-full top-40 mt-4 md:mt-28">
          <h2
            className="w-full text-center text-3xl top-[10vh] md:top-[17vh] md:text-6xl font-bold pb-12 sticky"
          >
            Manage your Testimonials in
            <span className="md:block"> 3 easy steps</span>
          </h2>
          <StepstoCreate />
        </div>
    </section>
  )
}

export default ScreenshotDisplay
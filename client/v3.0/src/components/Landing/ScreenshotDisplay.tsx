import { FlipWords } from "../ui/flip-words"

const ScreenshotDisplay = () => {
    const words = ["$AOEth", "$AODai", "$AOSol"];
  return (
    <section>
        <h1 className="text-[39px] text-center leading-[42px] tracking-wider text-[#eeeeee]">Stake<FlipWords words={words} duration={1000} className="text-[#40959D]"/>at projects built on <span className="block">arweave and recieve their <span className="text-[#40959D]">$tokens</span></span></h1>
    </section>
  )
}

export default ScreenshotDisplay
import { ConnectButton, useActiveAddress, useConnection } from "arweave-wallet-kit";
import { useState } from "react";
import { toast } from "sonner";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { useUserAoETH } from "../_utils/useAoEth";
import { AOETH_TOKEN_PID } from "../_utils/constants";
import Loader from "../components/Loader";
import { Footer, Navbar } from "../components";
import { brandDarkBg, brandSecondaryText } from "../_utils/colors";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function Faucet() {
  const address = useActiveAddress();
  const { connected } = useConnection();
  const { aoeth: aoethBalance, refresh: refreshAoethBalance } = useUserAoETH(address);
  const [loading, setLoading] = useState(false);

  if (!address) {
    <div className="text-white flex justify-center items-start h-60">
      <ConnectButton />
    </div>;
  }

  const airdropTokens = async () => {
    setLoading(true);
    // Call the backend API to airdrop the tokens
    const res = await message({
      process: AOETH_TOKEN_PID,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [{ name: "Action", value: "tAoETH-Airdrop" }],
    });
    const postResult = await result({
      process: AOETH_TOKEN_PID,
      message: res,
    });

    console.log(postResult);
    if (postResult.Output.data == "\u001b[31mError\u001b[90m handling message with Action = tAoETH-Airdrop\u001b[0m\n\u001b[32m[string \".handlers\"]:345: [string \"aos\"]:19: Please wait for some time before requesting airdrop again!\u001b[0m\n\n\u001b[90mstack traceback:\n\t[string \".process\"]:535: in function '.process.handle'\u001b[0m"){
      alert("To early wait sometime before requesting again")
    }
    if (postResult.Error || postResult.Messages.length === 0) {
      console.log(postResult.Error);
      throw new Error(postResult.Error);
    }
    await refreshAoethBalance();
  };
if(connected){
  return (
    <>
    <Navbar/>
    <main className={` flex flex-col gap-12  px-20 pt-[120px] ${brandDarkBg} min-h-[100vh] w-full`}>
      <div className="flex flex-col justify-start items-start">
        <h2 className="text-[#40959D] text-[27px] tracking-widest">$tAoEth Balance:</h2>
        {aoethBalance == null ? (
          <div className="animate-pulse space-y-2">
            <div className="bg-gray-300 h-6 w-48 rounded"></div>
          </div>
        ) : (
          <h3 className="text-[#f1f1f1] text-[24px] font-[Rale-Medium]">{aoethBalance.toFixed(2)} $tAoEth</h3>
        )}
      </div>
      <h2 className="text-[#40959D] text-[27px] tracking-widest">Need tAoETH to explore Permissionless Ecosystem Funding?</h2>

      <button
        onClick={() => {
          const promise = airdropTokens();
          toast.promise(promise, {
            loading: "Sending $tAoEth...",
            success: () => {
              return `Sent $tAoEth to ${address}`;
            },
            error: "Please wait for some time before requesting an airdrop again!",
          });
          promise.finally(() => setLoading(false));
        }}
        disabled={loading}
        className={`z-50 flex gap-4 w-fit ${loading ? "bg-gray-400" : "bg-[#205156]"} text-[#f1f1f1] py-[6px] px-[18px] rounded`}
      >
        {loading ? <Loader /> : ""}
        Get $tAoEth
      </button>
    </main>
    <Footer/>
    <BackgroundBeams />
    </>
  );}else{
    return (
      <>
      <Navbar/>
      <main className={` flex flex-col gap-12  px-20 pt-[120px] ${brandDarkBg} min-h-[100vh] w-[100vw]`}>
    <h2 className={`text-[27px] leading-[30px] ${brandSecondaryText} font-medium `}>Please connect wallet to get $tAoETH Tokens</h2>
    <ConnectButton accent="rgb(14, 156, 156)"/>
  </main>      <BackgroundBeams /></>);
  }
}

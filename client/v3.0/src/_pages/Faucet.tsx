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

  return (
    <>
    <Navbar/>
    <main className={`flex flex-col items-center justify-start gap-12 px-20 pt-[120px] ${brandDarkBg} min-h-[100vh] w-full`}>
      <section className="flex flex-col gap-[18px] items-center justify-between 
      rounded-[21px] px-[105px] py-[45px] mt-[60px]
      text-[#f1f1f1] faucetBg z-10 backdrop-blur-[1.8px] border-[1px] border-[#205156]
      w-fit">
        <h1 className="text-[60px] font-medium tracking-wider leading-[63px]"><span className="text-[#40959D]">$TAoEth</span> Faucet</h1>
        <h6 className="text-[21px] font-extralight font-sans text-center tracking-widest">Get $TAoEth and test out the flow for staking, earning and <span className="block">Permissionless ecosystem funding!</span></h6>
        {connected?
        <>
        <div className="flex flex-col justify-start items-start bg-[#243939] px-[45px] py-[15px] rounded-[9px] text-[18px]">
          <h4 className="text-[#46B1BC]">Wallet Address: <span className="text-[#f1f1f1]">adoS8VxhDBWDi0OWHiDAnHMjj4F7CmTy7IM16xwPY0I</span></h4>
          <h4 className="text-[#46B1BC]">$TAoEth Balance: <span className="text-[#f1f1f1]">{aoethBalance == null ? (
          <div className="animate-pulse space-y-2">
            <div className="bg-gray-300 h-6 w-48 rounded"></div>
          </div>
        ) : (
          <h3 className="text-[#f1f1f1] text-[24px] font-[Rale-Medium]">{aoethBalance.toFixed(2)} $tAoEth</h3>
        )}</span></h4>
        {/* <h2 className="text-[#40959D] text-[27px] tracking-widest">$tAoEth Balance:</h2>
         */}
      </div>
      <h4 className="text-[18px]">Get 10 $TAoEth every xx Hours!</h4>
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
        className={`z-50 flex gap-4 w-fit ${loading ? "bg-gray-400" : "bg-[#0E9C9C]"} 
        text-[#f1f1f1] py-[6px] px-[27px] rounded-[6px] tracking-[1px] text-[18px] font-medium
        hover:opacity-75 hover:tracking-[3px] hover:px-[20px]`}
      >
        {loading ? <Loader /> : ""}
        Get $tAoEth
      </button> 
      </>
        :
        <>
      <ConnectButton accent="rgb(14, 156, 156)"/> 
      <h2 className={`text-[27px] leading-[30px] ${brandSecondaryText} font-medium `}>Please connect wallet to get $tAoETH Tokens</h2>
      </>
      }
      </section>
     
      {/* */}
    </main>
    <Footer/>
    <BackgroundBeams />
    </>
  )
}

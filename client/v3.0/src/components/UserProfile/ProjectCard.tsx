// import { useNavigate } from "react-router-dom";
import { Project } from "../../_utils/types";
import { useEffect, useState } from "react";
import { getTaoEthStake, pTokenRecieved } from "../../_utils/info";
import { brandSecondaryText } from "../../_utils/colors";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui";

export default function ProjectCard({ project }: { project: Project }) {
  const [taoEthStaked, setTaoEthStaked] = useState<number>(0);
  const [pTokens, setPTokens] = useState<number>(0)
  useEffect(() => {
    callGetTaoStakes();
    callPTokenRecieved();
  }, [])
  const callGetTaoStakes = async() => {
    setTaoEthStaked(await getTaoEthStake());
    console.log("in callGetTaoStakes")
  }
  const callPTokenRecieved = async() => {
    setPTokens(await pTokenRecieved(project.token.processId));
    console.log("in callPtokensrecieved")
  }

  return (
    
    <Link
        to={"/project/" + project?.processID}
        className="bg-[#161616] z-30 md:rounded-[18px] rounded-[9px] py-[12px] hover:mb-[24px] hover:mt-[-24px] border-[#46b0bc7c] border-[0.6px]"
      >
    <div
      // to={"/saturn"}
      className=" md:min-w-[300px] w-full md:h-[180px] min-w-[270px] max-w-[90%] rounded-[9px] place-self-center
      flex flex-col md:gap-[6px] bg-[#00000000] justify-between items-start md:py-[9px] md:px-[21px] py-[3px] px-[9px] mb-[15px]"
    >
      <div className="flex w-full h-1/2 gap-2">
      <div className="w-16 h-16 dark">
      <Avatar className="w-full h-full">
        {/* Primary Image */}
        <AvatarImage 
          src={project?.logoImageLink} 
          alt={`${project?.name} logo`} 
          className="object-contain"
        />
        {/* Fallback */}
        <AvatarFallback>
          {project?.name ? project.name[0].toUpperCase() : "P"}
        </AvatarFallback>
      </Avatar>
</div>
        <div className="flex flex-col w-1/3 gap-1">
          <div className=" text-white md:text-3xl text-xl tracking-normal pl-1">{project?.name}</div>
          {/* <div className="rounded-[6px] flex flex-row py-[3px] bg-[#393939] text-[#f1f1f1] gap-1 items-center">
            <svg width="20" height="20">
              <circle cx="10" cy="10" r="7" />
            </svg>
            <p className="text-white text-sm  font-medium">${project?.token.ticker}</p>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <p className="text-sm text-justify text-wrap text-[#f1f1f1] capitalize font-light">{project?.oneLiner.substring(0, 90)}{project?.oneLiner.length>90 && "..."}</p>
        {project.token.ticker=="SAT" ?  <> 
        <div className="flex flex-row gap-2">
         <div className="flex flex-col text-sm">
            <p className=" text-[#40959D]">Amount Staked</p>
            <p>{(taoEthStaked / 10 ** 12).toFixed(2)} $TAoEth</p>
          </div>
          <div className="flex flex-col text-sm">
            <p className=" text-[#40959D]">Token Recieved</p>
            <p>{(pTokens/ 10 ** 12).toFixed(2)} $SAT</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 text-xs">
          <button className="bg-teal-700 hover:bg-teal-600  text-black py-1 px-2 rounded-[9px]">Stake More</button>
          <button className="border border-teal-700 text-teal-600 hover:border-teal-600 hover:text-teal-600 py-1 px-2 rounded-[9px]">Unstake</button>
        </div></>: <p className={`${brandSecondaryText} text-[10.5px]`}>Mainnet Staking will be live after in Feb 2025. Know more about the project till then!</p>}
      </div>
    </div></Link>
  );
}

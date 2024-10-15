import { projects } from "../_utils/projects";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ConnectButton, useConnection } from "arweave-wallet-kit";
import { brandDarkBg } from "../_utils/colors";
import { Footer, TaoEthBalance, TaoEthStaked } from "../components";
import Navbar from "../components/Layout/Navbar";
import ProjectCard from "../components/UserProfile/ProjectCard";

const User = () => {
  const {connected} = useConnection();
  if (!connected)
    return (
      <>
        <Navbar />
        <main className={`${brandDarkBg} min-h-[100vh] w-full text-[#ffffff] flex flex-col justify-start items-center gap-6 pt-[120px]`}>
          <section className="flex flex-col rounded-[9px] bg-[#1F1E1E] px-[30px] py-[15px] items-start gap-6">
            <h3 className="font-medium text-[21px]">Please connect Wallet to view your Stakes:</h3>
            <ConnectButton accent="rgb(14, 156, 156)" />
          </section>
        </main>
        <Footer/>
    </>
      ); 
    return (
      <>
        <Navbar/>
        <main className={`${brandDarkBg} min-h-[100vh] w-full text-[#ffffff] flex flex-col justify-start items-center gap-6 mb-20`}>
          <div className='flex flex-col justify-start gap-3 w-full'>
            <div className='w-full flex flex-col md:pt-[90px] pt-[75px]'>
            <div className="md:flex hidden gap-20 w-full bg-[#0E9C9C] px-20 py-6">
              <TaoEthBalance/> 
              <TaoEthStaked/>
            </div>
            <div className='block md:hidden gap-20 w-full bg-[#0E9C9C] px-20 py-6 text-center font-bold'>USE A BROWSER AND CONNECT WALLET</div>
            <span className='py-3 bg-[#0e9c9ca3] w-full'></span>
            <span className='py-3 bg-[#0e9c9c3e] w-full'></span>
            <span className='py-3 bg-[#0e9c9c24] w-full'></span></div>
            <div className='grid md:grid-cols-3 '>
            {projects.map((project) => {
              return <ProjectCard project={project} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
      <BackgroundBeams />
    </>
  );
};

export default User;
export const project = {
  name: "0rbit",
  processID: "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ",
  logoImageLink: "https://www.0rbit.co/logos/sqLightFill.svg",
  bannerLink: "https://www.0rbit.co/logos/ogBanner.jpeg",
  links: {
    website: "https://0rbit.co/",
    docs: "https://docs.0rbit.co/",
    discord: "https://discord.gg/JVSjqaKJgV",
    twitter: "https://twitter.com/0rbitco",
    github: "https://github.com/0rbit-co",
    telegram: "",
    other: ["https://www.playground.0rbit.co/", "https://mirror.xyz/0x26B11B188E9E69b2426FD6111302E721F423020E"],
  },
  team: [
    {
      officialName: "Yash Garg",
      pseudoName: "megabyte",
      role: "Co-Founder",
      imgLink: "https://0rbit.co/team/megabyte.png",
      links: {
        github: "https://github.com/megabyte0x",
        twitter: "https://x.com/megabyte0x?t=WZYKcJAvN-CM7a6yU4lPNQ&s=09",
        dribble: "",
        other: ["", ""],
      },
    },
    {
      officialName: "Ayush Agrawal",
      pseudoName: "lucifer0x17",
      role: "Co-Founder",
      imgLink: "https://0rbit.co/team/lucifer.png",
      links: {
        github: "https://github.com/Lucifer0x17",
        twitter: "https://x.com/Lucifer0x17?t=fH5LRms3xy2hSPLJbNubaA&s=09",
        dribble: "",
        other: ["", ""],
      },
    },
    {
      officialName: "Manishi Bhatnagar",
      pseudoName: "",
      role: "UI/ UX Designer",
      imgLink: "https://0rbit.co/team/manishi.png",
      links: {
        github: "",
        twitter: "https://x.com/0xManishi?t=FKn7XBJwlIXwJR-f4KGkzw&s=09",
        dribble: "https://dribbble.com/0xManishi",
        other: ["", ""],
      },
    },
    {
      officialName: "Sarthak Shah",
      pseudoName: "",
      role: "Engineer",
      imgLink: "https://0rbit.co/team/sarthak.png",
      links: {
        github: "https://github.com/Not-Sarthak",
        twitter: "https://x.com/0xSarthak13?t=nvsUz9hxhq2hQO25wr8Rtw&s=09",
        dribble: "",
        other: ["", ""],
      },
    },
  ],
  exchangeInfo: {
    cooldownPeriod: 60,
    aoethRewardRate: 10,
  },
  description: "The Decentralized Oracle Network on AO for accessing any off-chain data.",
  oneLiner: "Decentralized Oracle Network on Arweave",
  token: {
    name: "0rbt",
    ticker: "0RBT",
    processId: "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc",
    denomination: "",
    totalSupply: "",
    tokenomics: {
      info: "",
      linkToBlogorPaper: "",
    },
  },
  gettingStartedGuide: "",
  projectOrigin: "",
  useCases: [
    {
      name: "",
      info: "",
      liveLink: "",
      other: [""],
    },
  ],
  advisorsInvestors: [
    {
      name: "",
      role: "",
      moreInfo: "",
      amountIfAny: [""],
    },
  ],
  mileStones: [
    {
      goal: "",
      date: "",
      proof: "",
      status: "",
    },
  ],
  mediaMentions: [""],
  collaborations: [
    {
      name: "",
      link: "",
      info: "",
    },
  ],
  ownershipPercentages: [
    {
      name: "",
      role: "",
      percentage: "",
    },
  ],
};

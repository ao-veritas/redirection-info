import TeamCard from './TeamCard'

const TeamView = () => {
  return (
   <section className='z-30 flex flex-col gap-6 items-center md:justify-start justify-between'><h1
   className="uppercase tracking-wider font-bold leading-[51px]
 xl:text-[45px] text-[36px] text-[#40959D]"
 >
   Team
 </h1>
 <h3
   className="capitalize pb-6 tracking-wide text-center md:font-normal font-medium
 xl:text-[30px] md:text-[21px] text-[15px]"
 >
   Meet the amazing team behind <span className={` tracking-wide text-[#40959D]`}>Veritas</span>
 </h3>
 <div
   className="
   z-30 
     xl:gap-6 
     md:gap-[18px] flex md:flex-row
     flex-col gap-3
     items-center justify-center"
 >
   <TeamCard
     img={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/team/manishi.png"}
     pname="manishi bhatnagar"
     dribble="https://dribbble.com/0xManishi"
     twitter="https://x.com/0xManishi"
     info="UI/UX Designer"
     last={false}
   />
   <TeamCard
     img={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/team/lilith.png"}
     pname="lilith"
     github="https://github.com/0xLPircy"
     twitter="https://x.com/0xLPircy"
     info="Founder"
     last={false}
   />
   <TeamCard
     img={"/chaitanya.jpg"}
     pname="Chaitanya Bajpai"
     github="https://github.com/cb7chaitanya"
     twitter="https://x.com/cbajpai7"
     info="Fullstack Developer"
     last={false}
   />
 </div></section> 
  )
}

export default TeamView
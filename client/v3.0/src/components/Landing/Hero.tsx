
import { Link } from "react-router-dom";
import { BackgroundBeams } from "../ui/background-beams";

const Hero = () => {
  return (
    <>
    <section className="mt-[180px] z-30 w-full text-[#eeeeee] flex flex-col justify-center items-center lg:px-20 px-6 pb-[180px]">
      <div className="relative flex flex-row justify-between items-center w-full">
        <div className="w-fit ltrAnim">
          <img
            src={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/HeroCircle.svg"}
            className="lg:w-[300px] lg:h-[300px] md:w-[270px] md:h-[270px] w-[180px] h-[180px]"
          />
        </div>
        <div className="w-fit absolute inset-0 mx-auto rotate-[-90deg] z-10">
          <img
            src={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/HeroCircle.svg"}
            className="lg:w-[300px] lg:h-[300px] md:w-[270px] md:h-[270px] w-[180px] h-[180px]"
          />
        </div>
        <div className="text-center z-10 w-fit mx-[-120px] 
        flex flex-col gap-[9px] justify-start items-center">
        <h1 className="lg:text-[69px] leading-[78px]
         md:text-[27px] text-[24px] font-semibold
        ttbAnim ">
          <span className="hero-gradient">Permissionless</span><span className="block hero-gradient">Ecosystem Funding</span><span className="block"><span className="text-[#ffffff]">and</span> <span className="hero-gradient">Project Analysis</span></span>
        </h1>
        <h6 className="text-[30px] leading-[33px] font-sans font-light opacity-75 tracking-widest">First ever platform on AO and Arweave to enable users to <span className="block">Analyse, Invest and Earn in Projects they can Trust!</span></h6>
        </div>
        <div className="w-fit rtlAnim">
          <img
            src={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/HeroCircle.svg"}
            className="lg:w-[300px] lg:h-[300px] md:w-[270px] md:h-[270px] w-[180px] h-[180px] rotate-180"
          />
        </div>
      </div>
      <div className="flex flex-row gap-[39px] fadeIn pt-[60px]">
      <Link to="/" target="_blank">
          <button className="hover:bg-[#40959da0] hover:tracking-wider rounded-[9px] md:w-[210px] w-[120px] md:text-[18px] tracking-wider text-[12px] py-[10.5px] bg-[#40959D]">Explore Projects</button>
        </Link>
        <Link to="/register">
          <button className="hover:bg-[#40959d36] hover:tracking-wider rounded-[9px] md:w-[210px] w-[120px] md:text-[18px] tracking-wider text-[12px] py-[9.5px] border-[1.5px] border-[#40959D] text-[#40959D]">Add your project</button>
        </Link>
      </div>
    </section>
    </>
  );
};

export default Hero;

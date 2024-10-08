
import { Link } from "react-router-dom";
import { BackgroundBeams } from "../ui/background-beams";

const Hero = () => {
  return (
    <>
    <section className="mt-[180px] z-30 w-full text-[#eeeeee] flex flex-col justify-center items-center xl:px-[105px] lg:px-[90px] px-6 pb-[180px] max-w-[1800px]">
      <div className="relative flex flex-row justify-between items-start w-full">
        <div className="w-fit ltrAnim mt-[30px] mr-[-60px]">
          <img
            src={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/HeroCircle.svg"}
            className="xl:w-[390px] xl:h-[390px] md:w-[270px] md:h-[270px] w-[180px] h-[180px]"
          />
        </div>
        <div className="w-fit absolute inset-0 mx-auto rotate-[0deg] z-10">
          <img
            src={"/hero/centerCircle.svg"}
            className="xl:w-[390px] xl:h-[390px] md:w-[270px] md:h-[270px] w-[180px] h-[180px] 
            xl:mt-[120px] lg:mt-[60px]"
          />
        </div>
        <div className="text-center z-10 w-fit mx-[-270px] 
        flex flex-col gap-[9px] justify-start items-center">
        <h1 className="
        xl:text-[69px] xl:leading-[78px]
        lg:text-[45px] lg:leading-[54px]
         md:text-[27px] text-[24px] font-semibold
        ttbAnim ">
          <span className="hero-gradient">Permissionless</span><span className="block hero-gradient">Ecosystem Funding</span><span className="block"><span className="text-[#ffffff]">and</span> <span className="hero-gradient">Project Analysis</span></span>
        </h1>
        <h6 className="
        xl:text-[30px] xl:leading-[33px]
        lg:text-[21px] lg:leading-[24px]
        font-sans font-light opacity-75 tracking-widest">First ever platform on AO and Arweave to enable users to <span className="block">Analyse, Invest and Earn in Projects they can Trust!</span></h6>
        </div>
        <div className="w-fit rtlAnim mt-[30px] ml-[-60px]">
          <img
            src={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/HeroCircle.svg"}
            className="xl:w-[390px] xl:h-[390px] md:w-[270px] md:h-[270px] w-[180px] h-[180px] rotate-180"
          />
        </div>
      </div>
      <div className="flex flex-row gap-[39px] fadeIn z-[20] xl:mt-[-60px] lg:mt-[-45px]">
      <Link to="/" target="_blank">
          <button className="hover:bg-[#40959da0] hover:tracking-wider rounded-[9px] 
          xl:w-[210px] w-[180px] xl:text-[18px] 
          tracking-wider text-[15px] py-[10.5px] bg-[#40959D]">Explore Projects</button>
        </Link>
        <Link to="/register">
          <button className="hover:bg-[#40959d36] hover:tracking-wider rounded-[9px] 
          xl:w-[210px] w-[180px] xl:text-[18px] 
          tracking-wider text-[15px] py-[9.5px] border-[1.5px] border-[#40959D] text-[#40959D]">Add your project</button>
        </Link>
      </div>
    </section>
    </>
  );
};

export default Hero;

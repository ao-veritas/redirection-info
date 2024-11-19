
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
    <section className="z-30 w-full text-[#eeeeee] flex flex-col justify-center items-center pb-[120px] max-w-[1800px]
    xl:px-[105px] lg:px-[90px] sm:px-[60px] px-[21px]
    md:mt-[180px] mt-[180px]">
      <div className="relative flex flex-row justify-between items-start w-full">
        <div className="w-fit ltrAnim mt-[30px] mr-[-60px]">
          <img
            src={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/HeroCircle.svg"}
            className="xl:w-[390px] xl:h-[390px] lg:w-[270px] lg:h-[270px] sm:w-[210px] sm:h-[210px] w-[120px] h-[120px] sm:opacity-100 opacity-60"
          />
        </div>
        <div className="w-fit absolute inset-0 mx-auto rotate-[0deg] z-10">
          <img
            src={"/hero/centerCircle.svg"}
            className="xl:w-[390px] xl:h-[390px] lg:w-[270px] lg:h-[270px] sm:w-[210px] sm:h-[210px] w-[180px] h-[180px] 
            xl:mt-[120px] lg:mt-[60px] sm:mt-[45px] mt-[120px]"
          />
        </div>
        <div className="text-center z-10 w-fit mx-[-270px] 
        flex flex-col gap-[9px] justify-start items-center">
        <h1 className="
        xl:text-[69px] xl:leading-[78px]
        lg:text-[45px] lg:leading-[54px] lg:tracking-normal
        sm:text-[42px] sm:leading-[51px]
        text-[33px] leading-[39px] tracking-tighter
        font-semibold ttbAnim ">
          <span className="hero-gradient">Permissionless</span><span className="block hero-gradient">Ecosystem Funding</span><span className="block"><span className="text-[#ffffff]">and</span> <span className="hero-gradient">Project Analysis</span></span>
        </h1>
        <h6 className="
        xl:text-[30px] xl:leading-[33px] 
        lg:text-[21px] lg:leading-[24px] lg:tracking-widest
        sm:text-[18px] sm:leading-[21px]
        text-[15px] leading-[21px] tracking-wider
        font-sans font-light opacity-75 ">First ever platform on AO and Arweave
        <span className="sm:inline block"> to enable users to</span> 
        <span className="sm:block">Analyse, Invest and Earn{" "}
        <span className="sm:inline block">in Projects they can Trust!</span></span></h6>
        </div>
        <div className="w-fit rtlAnim mt-[30px] ml-[-60px]">
          <img
            src={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/HeroCircle.svg"}
            className="xl:w-[390px] xl:h-[390px] lg:w-[270px] lg:h-[270px] sm:w-[210px] sm:h-[210px] w-[120px] h-[120px] sm:opacity-100 opacity-60 rotate-180"
          />
        </div>
      </div>
      <div className="flex flex-row 
      fadeIn z-[20] 
      xl:mt-[-60px] lg:mt-[-45px] sm:mt-[0px] mt-[21px]
      lg:gap-[39px] gap-[18px]">
      <Link to="https://x.com/Veritas_ao" target="_blank">
          <button className="hover:bg-[#40959da0] hover:tracking-wider rounded-[9px] 
          xl:w-[210px] sm:w-[180px] w-[120px]
          xl:text-[18px] sm:text-[15px] text-[13.5px]
          lg:tracking-wider tracking-tight
          py-[10.5px] bg-[#40959D]">Learn More</button>
        </Link>
        <Link to="https://forms.gle/Zh5ubLgHt3wEB7BT8" target="_blank">
          <button className="hover:bg-[#40959d36] hover:tracking-wider rounded-[9px] 
          xl:w-[210px] sm:w-[180px] w-[120px]
          xl:text-[18px] sm:text-[15px]  text-[13.5px]
          lg:tracking-wider tracking-tight
          py-[9.5px] border-[1.5px] border-[#40959D] text-[#40959D]">Add your project</button>
        </Link>
      </div>
    </section>
    </>
  );
};

export default Hero;

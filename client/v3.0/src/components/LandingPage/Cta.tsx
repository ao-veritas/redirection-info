import { Link } from "react-router-dom"

const Cta = () => {
  return (
    <section className='my-[30px] CTABorder lg:w-[60%] w-[87%] max-w-[1800px] mb-[180px]'>
        <div className="flex flex-col items-center justify-between gap-[12px] px-[21px] py-[21px] rounded-[21px] CTABg">
        <h1 className="md:text-[45px] md:leading-[51px] text-[30px] text-center leading-[33px] tracking-wide text-[#D9D9D9]">Got more <span className="text-[#46B1BC]">Questions?</span></h1>
        <h6 className="text-[18px] font-thin font-sans tracking-[1.5px] opacity-75">Connect with us now !</h6>
        <div className="flex flex-row md:gap-[36px] gap-[18px] items-center justify-between pt-[9px]">
            <Link to="https://discord.gg/Ee84m9Cf" target="_blank"><img src="/socials/gradient/discordCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
            <Link to="https://x.com/Veritas_ao"target="_blank" ><img src="/socials/gradient/twitterCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
            <Link to="https://github.com/ao-veritas" target="_blank"><img src="/socials/gradient/githubCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
            <Link to="https://calendly.com/taveesha-agarwal/collab-calls" target="_blank"><img src="/socials/gradient/calendlyCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
            <Link to="https://hashnode.com/@Veritas-ao" target="_blank"><img src="/socials/gradient/hashnodeCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
        </div>
        </div>
    </section>
  )
}

export default Cta
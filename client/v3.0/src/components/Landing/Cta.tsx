const Cta = () => {
  return (
    <section className='my-[30px] CTABorder w-[60%]'>
        <div className="flex flex-col items-center justify-between gap-[12px] px-[21px] py-[21px] rounded-[21px] CTABg">
        <h1 className="text-[45px] tracking-wide text-[#D9D9D9]">Got more <span className="text-[#46B1BC]">Questions?</span></h1>
        <h6 className="text-[18px] font-thin font-sans tracking-[1.5px] opacity-75">Connect with us now !</h6>
        <div className="flex flex-row gap-[36px] items-center justify-between pt-[9px]">
            <img src="/socials/gradient/discordCTA.svg" alt="" className="w-[27px] h-[27px]"/>
            <img src="/socials/gradient/twitterCTA.svg" alt="" className="w-[27px] h-[27px]"/>
            <img src="/socials/gradient/githubCTA.svg" alt="" className="w-[27px] h-[27px]"/>
            <img src="/socials/gradient/calendlyCTA.svg" alt="" className="w-[27px] h-[27px]"/>
            <img src="/socials/gradient/hashnodeCTA.svg" alt="" className="w-[27px] h-[27px]"/>
        </div>
        </div>
    </section>
  )
}

export default Cta
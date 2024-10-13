const FeatureCard = ({heading, text, flow, imag, imagClasses}:any) => {
  return (
    <div className={`flex ${flow} justify-between items-center h-full gap-[0px]`}>
        <div className="w-full place-self-start">
            <h3 className='xl:text-[21px] md:text-[16.5px] text-[13.5px]
            font-semibold tracking-wider text-[#46B1BC]'>{heading}</h3>
            <p className='xl:text-[15px] xl:leading-[21px] text-[12px] leading-[15px]
            xl:tracking-widest pt-[6px] text-[#ffffff] font-sans font-extralight'>{text}</p>
        </div>
        <img src={`/feat/${imag}.svg`} className={`${imagClasses}`}/>
    </div>
  )
}

export default FeatureCard
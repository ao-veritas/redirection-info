const FeatureCard = ({heading, text, flow, imag, imagClasses}:any) => {
  return (
    <div className={`flex ${flow} justify-between items-center h-full gap-[0px]`}>
        <div className="w-full place-self-start">
            <h3 className='text-[24px] font-semibold tracking-wider text-[#46B1BC]'>{heading}</h3>
            <p className='text-[16.5px] tracking-widest leading-[24px] pt-[6px] text-[#ffffff] font-sans font-extralight'>{text}</p>
        </div>
        <img src={`/feat/${imag}.svg`} className={`${imagClasses}`}/>
    </div>
  )
}

export default FeatureCard
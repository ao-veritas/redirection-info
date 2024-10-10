const FeatureCard = ({heading, text, flow, imag}:any) => {
  return (
    <div className={`flex ${flow} justify-between items-center h-full text-[#212121]`}>
        <img src={`/feat/${imag}.svg`} className='w-full h-full'/>
        <div>
            <h3 className='text-[21px] font-semibold tracking-tighter'>{heading}</h3>
            <p className='text-[15px] tracking-wider leading-[20px] pt-[6px]'>{text}</p>
        </div>
    </div>
  )
}

export default FeatureCard
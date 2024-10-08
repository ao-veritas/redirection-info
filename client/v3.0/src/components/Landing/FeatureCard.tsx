import React from 'react'

const FeatureCard = ({heading, text, flow}:any) => {
  return (
    <div className={`flex ${flow} justify-between items-center h-full text-[#212121]`}>
        <img src="/logos/RecLogoDark.svg" className='opacity-55 w-full max-h-[120px]'/>
        <div>
            <h3 className='text-[24px] font-semibold'>{heading}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default FeatureCard
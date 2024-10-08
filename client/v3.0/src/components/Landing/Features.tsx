import React from 'react'
import { WobbleCard } from '../ui/wobble-card'

const Features = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-[30px] mx-auto w-full">
        <div className='grid lg:col-span-2'></div>
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-1 h-full bg-[#000000] min-h-[500px] lg:min-h-[300px]"
      className=""
    ><div className="max-w-xs">
    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Gippity AI powers the entire universe
    </h2>
    <p className="mt-4 text-left  text-base/6 text-neutral-200">
      With over 100,000 mothly active bot users, Gippity AI is the most
      popular AI platform for developers.
    </p>
  </div></WobbleCard>
    </div>
  )
}

export default Features
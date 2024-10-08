import React from 'react'
import { WobbleCard } from '../ui/wobble-card'
import { secondsInDay } from 'date-fns/constants'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section className='px-[90px] py-[90px] bg-[#102123] w-full min-h-[90vh]'>
        <div className="grid lg:grid-cols-5 gap-[21px] mx-auto w-full">
            <div className='col-span-2 grid grid-flow-row grid-rows-9 gap-[21px]'>
                <WobbleCard
                containerClassName="h-full bg-[#eeeeee] min-h-[500px] lg:min-h-[300px] row-span-5 p-0"
                className="py-[36px] "
                >
                    <FeatureCard heading="Test 123" text="Lorem ipsum dolor sit amet" flow="flex-col"/>
                </WobbleCard>
                <div className='grid grid-cols-2 gap-[21px] row-span-4'>
                <WobbleCard
                containerClassName="col-span-1 h-full bg-[#eeeeee] min-h-[500px] lg:min-h-[300px]"
                className="py-[36px]"
                >
                    <FeatureCard heading="Test 123" text="Lorem ipsum dolor sit amet" flow="flex-col"/>
                </WobbleCard>
                <WobbleCard
                containerClassName="col-span-1 h-full bg-[#eeeeee] min-h-[500px] lg:min-h-[300px]"
                className="py-[36px]"
                >
                    <FeatureCard heading="Test 123" text="Lorem ipsum dolor sit amet" flow="flex-col"/>
                </WobbleCard> 
                </div>
            </div>
            <div className='col-span-3 grid grid-flow-row grid-rows-9 gap-[21px]'>
                <WobbleCard
                containerClassName="col-span-1 lg:row-span-4 h-full bg-[#eeeeee] min-h-[500px] lg:min-h-[300px]"
                className="py-[36px]"
                >
                    <FeatureCard heading="Test 123" text="Lorem ipsum dolor sit amet" flow="flex-row"/>
                </WobbleCard>
                <div className='row-span-5 grid grid-flow-col grid-cols-5 gap-[21px]'>
                    <WobbleCard
                    containerClassName="col-span-1 lg:col-span-3 h-full bg-[#eeeeee] min-h-[500px] lg:min-h-[300px]"
                    className="py-[36px]"
                    >
                        <FeatureCard heading="Test 123" text="Lorem ipsum dolor sit amet" flow="flex-col"/>
                    </WobbleCard> 
                    <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-[#eeeeee] min-h-[500px] lg:min-h-[300px]"
                    className="py-[36px]"
                    >
                        <FeatureCard heading="Test 123" text="Lorem ipsum dolor sit amet" flow="flex-col"/>
                    </WobbleCard> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
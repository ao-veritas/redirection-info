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
                containerClassName="h-full bg-[#f1f1f1] min-h-[500px] lg:min-h-[300px] row-span-5 p-0"
                className="py-[36px] "
                >
                    <FeatureCard heading="See Charts, Graphs and Analyse" text="Users can analyse projects on AO and Arweave with Onchain analysis, showing users, balances, messages and much more!" flow="flex-col" imag="1"/>
                </WobbleCard>
                <div className='grid grid-cols-2 gap-[21px] row-span-4'>
                <WobbleCard
                containerClassName="col-span-1 h-full bg-[#f1f1f1] min-h-[500px] lg:min-h-[300px]"
                className="py-[36px]"
                >
                    <FeatureCard heading="Make streaks, earn AO" text="Earn AO based on streaks and usage!" flow="flex-col" imag="2"/>
                </WobbleCard>
                <WobbleCard
                containerClassName="col-span-1 h-full bg-[#f1f1f1] min-h-[500px] lg:min-h-[300px]"
                className="py-[36px]"
                >
                    <FeatureCard heading="Predict on Projects" text="Predict on the outcome of milestones, progress and traffic of projects!" flow="flex-col" imag="3"/>
                </WobbleCard> 
                </div>
            </div>
            <div className='col-span-3 grid grid-flow-row grid-rows-9 gap-[21px]'>
                <WobbleCard
                containerClassName="col-span-1 lg:row-span-4 h-full bg-[#f1f1f1] min-h-[500px] lg:min-h-[300px]"
                className="py-[36px]"
                >
                    <FeatureCard heading="Assets Assets Assets" text="Lorem ipsum dolor sit amet" flow="flex-row" imag="4"/>
                </WobbleCard>
                <div className='row-span-5 grid grid-flow-col grid-cols-5 gap-[21px]'>
                    <WobbleCard
                    containerClassName="col-span-1 lg:col-span-3 h-full bg-[#f1f1f1] min-h-[500px] lg:min-h-[300px]"
                    className="py-[36px]"
                    >
                        <FeatureCard heading="Track your investmments" text="Your personalized user dashboard showcases all your yields, stakes and holdings!" flow="flex-col" imag="5"/>
                    </WobbleCard> 
                    <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-[#f1f1f1] min-h-[500px] lg:min-h-[300px]"
                    className="py-[36px]"
                    >
                        <FeatureCard heading="Leaderboards" text="Rise above in the leaderboard and flex your ranks on social media!" flow="flex-col" imag="6"/>
                    </WobbleCard> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
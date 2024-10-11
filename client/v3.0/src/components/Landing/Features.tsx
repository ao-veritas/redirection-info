import { WobbleCard } from '../ui/wobble-card'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section className='px-[150px] py-[90px] w-full min-h-[90vh]'>
    <div className='flex flex-col gap-[21px]'>
        <div className="grid lg:grid-cols-7 gap-[21px] mx-auto w-full">
                <WobbleCard
                containerClassName="h-full min-h-[500px] featCardBg lg:min-h-[300px] col-span-3 p-0"
                className="py-[21px] innerFeatLinear rounded-[17.4px]"
                >
                    <FeatureCard heading="See Charts, Graphs and Analyse" text="Users can analyse projects on AO and Arweave with Onchain analysis, showing users, balances, messages and much more!" flow="flex-col" imag="1" imagClasses="h-[210px] w-[420px] place-self-end"/>
                </WobbleCard>
                <WobbleCard
                containerClassName="h-full min-h-[500px] featCardBg lg:min-h-[300px] col-span-4 p-0"
                className="py-[21px] innerFeatSlant rounded-[17.4px]"
                >
                    <FeatureCard heading="Assets Assets and Assets" text="Earn AO based on streaks and usage!" flow="flex-col" imag="2" imagClasses="mb-[-24px] w-[510px] h-[210px] place-self-end"/>
                </WobbleCard>
                
        </div>
        <div className='grid lg:grid-cols-[repeat(16,_minmax(0,_1fr))] gap-[21px] mx-auto w-full'>
                <div className='col-span-11 grid grid-cols-2 gap-[21px]'>
                <WobbleCard
                        containerClassName="h-full min-h-[500px] featCardBg lg:min-h-[300px] col-span-1 p-0"
                        className="py-[21px] innerFeatLinear rounded-[17.4px]"
                        >
                            <FeatureCard heading="Make a streak with earn AO" text="Earn AO based on streaks and usage!" flow="flex-col" imag="3" imagClasses="mb-[-24px] mr-[-18px] w-[300px] h-[240px] mt-[45px] place-self-end"/>
                </WobbleCard> 
                <WobbleCard
                        containerClassName="h-full min-h-[500px] featCardBg lg:min-h-[300px] col-span-1 p-0"
                        className="py-[21px] innerFeatLinear rounded-[17.4px]"
                        >
                        <FeatureCard heading="Predict on Projects" text="Predict on the outcome of milestones, progress and traffic of projects!" flow="flex-col" imag="4" imagClasses="mb-[-24px] mr-[-24px] w-[270px] h-[210px] mt-[45px] place-self-end"/>
                </WobbleCard>
               
                <WobbleCard
                        containerClassName="h-full min-h-[500px] featCardBg lg:min-h-[300px] col-span-2 p-0"
                        className="py-[21px] innerFeatSlant rounded-[17.4px]"
                        >
                        <FeatureCard heading="Track Your Investments" text="Your personalized user dashboard showcases all your yields, stakes and holdings!" flow="flex-row" imag="5" imagClasses="mb-[-39px] ml-[-30px] w-[375px] h-[270px] mt-[60px] place-self-end"/>
                </WobbleCard> 
                </div>
            <WobbleCard
                containerClassName="h-full min-h-[500px] featCardBg lg:min-h-[300px] col-span-5 p-0"
                className="py-[21px] innerFeatLeaderboard rounded-[17.4px]"
                >
                    <FeatureCard heading="Leaderboards" text="Rise above in the leaderboard and flex your ranks on social media!" flow="flex-col" imag="6" imagClasses="place-self-center w-[270px] h-full"/>
            </WobbleCard> 
            </div>
            {/* <div className='col-span-3 grid grid-flow-row grid-rows-9 gap-[21px]'>

                <div className='row-span-5 grid grid-flow-col grid-cols-5 gap-[21px]'>
                    <WobbleCard
                    containerClassName="col-span-1 lg:col-span-3 h-full bg-[#0E9C9C] min-h-[500px] lg:min-h-[300px]"
                    className="py-[36px]"
                    >
                        <FeatureCard heading="Track your investmments" text="Your personalized user dashboard showcases all your yields, stakes and holdings!" flow="flex-col" imag="5"/>
                    </WobbleCard> 

            </div> */}
    </div>
    </section>
  )
}

export default Features
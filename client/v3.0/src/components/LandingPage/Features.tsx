import { WobbleCard } from "../ui";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      className="xl:px-[150px] md:px-[60px] px-[30px]
    py-[90px] w-full min-h-[90vh] max-w-[1800px]"
    >
      {/* <div className="flex flex-col gap-[21px]"> */}
      <div className="grid h-full grid-cols-7 md:gap-[21px] mx-auto w-full gap-[15px]">
        <WobbleCard
          containerClassName="h-full xl:min-h-[300px] featCardBg md:min-h-[150px] min-h-[240px] md:col-span-3 col-span-7 p-0"
          className="xl:py-[21px] md:py-[18px] py-[15px] innerFeatLinear rounded-[17.4px]"
        >
          <FeatureCard
            heading="See Charts, Graphs and Analyse"
            text="Users can analyse projects on AO and Arweave with Onchain analysis, showing users, balances, messages and much more!"
            flow="flex-col"
            imag="1"
            imagClasses="xl:h-[210px] xl:w-[420px] md:h-[120px] md:w-[270px] h-[120px] w-[240px] md:place-self-end"
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="h-full xl:min-h-[300px] featCardBg md:min-h-[150px] min-h-[240px] md:col-span-4 col-span-7 p-0"
          className="xl:py-[21px] md:py-[18px] py-[15px] innerFeatSlant rounded-[17.4px]"
        >
          <FeatureCard
            heading="Assets Assets and Assets"
            text="Score assets for staking and rising in the leaderboard, showcase exclusive project roles with one of a kind assets!"
            flow="flex-col"
            imag="2"
            imagClasses="mb-[-24px] xl:w-[510px] xl:h-[210px] md:w-[450px] md:h-[120px] place-self-end"
          />
        </WobbleCard>
      </div>
      <div className="h-[21px]" />
      <div className="grid md:grid-cols-[repeat(16,_minmax(0,_1fr))] gap-[21px] mx-auto w-full">
        <div className="col-span-11 grid grid-cols-2 gap-[21px]">
          <WobbleCard
            containerClassName="h-full xl:min-h-[300px] featCardBg md:min-h-[210px] col-span-1 p-0"
            className="xl:py-[21px] md:py-[18px] py-[15px] innerFeatLinear rounded-[17.4px]"
          >
            <FeatureCard
              heading="Make a streak with earn AO"
              text="Earn AO based on streaks and usage!"
              flow="flex-col"
              imag="3"
              imagClasses="mb-[-24px] mr-[-18px] xl:w-[300px] xl:h-[240px] md:w-[180px] md:h-[150px] xl:mt-[45px] mt-[15px] place-self-end"
            />
          </WobbleCard>
          <WobbleCard
            containerClassName="h-full xl:min-h-[300px] featCardBg md:min-h-[210px] col-span-1 p-0"
            className="xl:py-[21px] md:py-[18px] py-[15px] innerFeatLinear rounded-[17.4px]"
          >
            <FeatureCard
              heading="Predict on Projects"
              text="Predict on the outcome of milestones, progress and traffic of projects!"
              flow="flex-col"
              imag="4"
              imagClasses="mb-[-24px] mr-[-24px] xl:w-[270px] xl:h-[210px] md:w-[180] md:h-[120px] xl:mt-[45px] place-self-end"
            />
          </WobbleCard>

          <WobbleCard
            containerClassName="h-full xl:min-h-[300px] featCardBg md:min-h-[210px] col-span-2 p-0"
            className="xl:py-[21px] md:py-[18px] py-[15px] innerFeatSlant rounded-[17.4px]"
          >
            <FeatureCard
              heading="Track Your Investments"
              text="Your personalized user dashboard showcases all your yields, stakes and holdings!"
              flow="md:flex-row flex-col"
              imag="5"
              imagClasses="xl:mb-[-39px] md:mb-[-18px] xl:ml-[-30px] xl:w-[375px] xl:h-[270px] md:w-[240px] md:h-[150px] xl:mt-[60px] md:mt-[-120px] w-[180px] h-[120px] mb-[-21px] place-self-end"
            />
          </WobbleCard>
        </div>
        <WobbleCard
          containerClassName="h-full xl:min-h-[300px] featCardBg md:min-h-[300px] md:col-span-5 col-span-11 p-0"
          className="xl:py-[21px] md:py-[18px] py-[15px] innerFeatLeaderboard rounded-[17.4px]"
        >
          <FeatureCard
            heading="Leaderboards"
            text="Rise above in the leaderboard and flex your ranks on social media!"
            flow="md:flex-col flex-row"
            imag="6"
            imagClasses="place-self-center xl:w-[270px] md:w-[180px] w-[90px] h-full md:ml-0 ml-3"
          />
        </WobbleCard>
      </div>
      {/* <div className='col-span-3 grid grid-flow-row grid-rows-9 gap-[21px]'>

                <div className='row-span-5 grid grid-flow-col grid-cols-5 gap-[21px]'>
                    <WobbleCard
                    containerClassName="col-span-1 md:col-span-3 h-full bg-[#0E9C9C] min-h-[500px] md:min-h-[300px]"
                    className="py-[36px]"
                    >
                        <FeatureCard heading="Track your investmments" text="Your personalized user dashboard showcases all your yields, stakes and holdings!" flow="flex-col" imag="5"/>
                    </WobbleCard> 

            </div> */}
      {/* </div> */}
    </section>
  );
};

export default Features;


const TimelineView = () => {
  return (

    <section>
        <div className=" text-white pb-8 ">
        <div className="container mx-auto flex flex-col items-start md:flex-row mb-12 md:mb-24 z-30">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 px-8">
            <p className="ml-2 text-[#40959D] uppercase tracking-loose">TIMELINE OF EVENTS</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Journey of Veritas</p>
            <p className="text-sm md:text-base text-gray-400 mb-4 text-justify">
              Here’s how we have progressed. 0 to 1! Idea to inception. Inception to project. and Project to Product. We started with section 7.3 of AO Whitepaper and landed here. Checkout our Journey!
            </p>
            <a href="https://x.com/Veritas_ao"
            className="z-30 bg-transparent mr-auto hover:bg-[#40959D] text-[#40959D] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#40959D] hover:border-transparent">
            Explore Now</a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky md:mt-[-60px] z-30">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden px-10 pb-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-full border-[2px] border-[#40959D] rounded-[1%] right-[50%]"
                  ></div>
                <div className="border-2-2 border-yellow-555 absolute h-full border-[2px] border-[#40959D] rounded-[1%] right-[50%]"
                  ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline mt-20">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#40959D]">8-10th July, 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Arweave HH Cohort 2</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Veritas, initially known as FundARs, was founded in Mussoorie during the Arweave India Hacker House event. The team placed second out of 10 and earned a $2,000 bounty.</p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-[#40959D]">1st Sep - 10th Oct, 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Launchpad Phase I</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Following the Hacker House, Veritas entered Launchpad Phase I, gaining the resources and support needed to transition from concept to product.</p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#40959D]"> 19th September, 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Arweave Asia Day – Singapore</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Veritas made its debut to a larger audience at Arweave Asia Day in Singapore, connecting with projects, builders, and key players in the ecosystem.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
    
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-[#40959D]">15th October, 2024</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Preparing for v1 Launch</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">We are actively onboarding projects from the ecosystem and promoting the benefits of Arweave, Ao, and permissionless ecosystem funding. Our team is focused on launching v1 soon, creating a unified platform for all Arweave projects.</p>
                  </div>
                </div> 
              </div>
              <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
          </div>
        </div>
      </div>
      </section> 
  )
}

export default TimelineView
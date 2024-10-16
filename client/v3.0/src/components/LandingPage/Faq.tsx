import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui";


const Faq = () => {
  return (
    <section className="w-full text-[30px] pt-20 flex flex-col items-center max-w-[1800px]">
      <h1 className="bg-[#163437] border-[1.5px] border-[#46B1BC] rounded-full px-[60px] py-[6px] text-[#D9D9D9] mb-[60px]">
        FAQ
      </h1>
      <Accordion type="single" collapsible className="xl:w-[60%] w-[87%]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[24px] text-[#46B1BC] font-medium xl:px-[60px] px-[24px]">
            What is Permissionless Ecosystem Funding?
          </AccordionTrigger>
          <AccordionContent className="text-[16.5px] leading-[30px] w-[90%] text-[#ffffff] tracking-widest font-thin xl:px-[60px] px-[24px]">
            <span className="block">
              <span className="text-[#46b0bcbd]">Permissionless:</span> Anyone
              can without project or legal barriers
            </span>
            <span className="block">
              <span className="text-[#46b0bcbd]">Ecosystem:</span> Normal users
              take part who actually believe in you
            </span>
            <span className="block">
              <span className="text-[#46b0bcbd]">Funding:</span> as it sounds!
            </span>
            By incentivizing users to bridge their assets into the AO network,
            developers are rewarded with <strong>AO token yields</strong>,
            creating a long-term revenue stream for their projects.
            <span className="block">
              This mechanism removes the need for developers to seek approval
              from centralized parties, Now they can{" "}
              <span className="text-[#46b0bcbd]">innovate freely</span> and
              create impactful applications that thrive on the economic
              participation of their users!
            </span>
            <span className="block">
              {" "}
              Users, in turn, have the power to decide which applications to
              support by choosing where to allocate their liquidity.
            </span>
            <span className="block">
              This results in a{" "}
              <span className="text-[#46b0bcbd]">
                decentralized funding model
              </span>{" "}
              that naturally aligns incentives between developers and users,
              making the AO network a vibrant and dynamic ecosystem for
              innovation.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[24px] text-[#46B1BC] font-medium xl:px-[60px] px-[24px]">
            What are $tAoETH and $SAT? Whats their value?
          </AccordionTrigger>
          <AccordionContent className="text-[16.5px] leading-[30px] w-[90%] text-[#ffffff] tracking-widest font-thin xl:px-[60px] px-[24px]">
          <span className="block">TAOETH = Test AO Eth</span>
          <span className="block">SAT = Saturn Dummy Project Token</span>
          <span className="block">Both of these are Dummy/ Test tokens made to simulate flow of Permissionless Ecosystem Funding as will be in feburary! They hold no current or future value.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[24px] text-[#46B1BC] font-medium xl:px-[60px] px-[24px]">
            When can i start staking on my favorite projects?
          </AccordionTrigger>
          <AccordionContent className="text-[16.5px] leading-[30px] w-[90%] text-[#ffffff] tracking-widest font-thin xl:px-[60px] px-[24px]">
            Staking for projects will go live one 15% of AO is minted and AO will become tranferrable i.e Feburary 2025. 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;

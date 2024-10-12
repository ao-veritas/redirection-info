import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"

const Faq = () => {
  return (
    <section className="w-full text-[30px] pt-20 flex flex-col items-center">
        <h1 className="bg-[#163437] border-[1.5px] border-[#46B1BC] rounded-full px-[60px] py-[6px] text-[#D9D9D9] mb-[60px]">FAQ</h1>
        <Accordion type="single" collapsible className="w-[60%]">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-[24px] text-[#46B1BC] font-medium px-[60px]">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-[16.5px] leading-[30px] w-[90%] text-[#ffffff] tracking-widest font-thin px-[60px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-[24px] text-[#46B1BC] font-medium px-[60px]">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-[16.5px] leading-[30px] w-[90%] text-[#ffffff] tracking-widest font-thin px-[60px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-[24px] text-[#46B1BC] font-medium px-[60px]">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-[16.5px] leading-[30px] w-[90%] text-[#ffffff] tracking-widest font-thin px-[60px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionContent>
            </AccordionItem> 
        </Accordion>
    </section>
  )
}

export default Faq
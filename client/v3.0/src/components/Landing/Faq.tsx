import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"

const Faq = () => {
  return (
    <section className="w-full px-20 text-[30px] py-20">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-[30px] text-[#46B1BC] font-medium px-6 py-[24px]">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-[21px] text-[#46B1BC] font-light px-9">
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
            <AccordionTrigger className="text-[30px] text-[#46B1BC] font-medium px-6 py-[24px]">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-[21px] text-[#46B1BC] font-light px-9">
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
            <AccordionTrigger className="text-[30px] text-[#46B1BC] font-medium px-6 py-[24px]">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-[21px] text-[#46B1BC] font-light px-9">
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>
  )
}

export default Faq
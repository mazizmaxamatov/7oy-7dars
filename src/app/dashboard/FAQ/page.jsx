import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function FAQ() {

  return (
    <>

      <div className="faq max-w-[1440px] mx-auto bg-[#000000] text-center">
        <div className="top max-w-[860px] mx-auto text-center">
          <h6 className="text-[18px] font-bold text-[green] pt-[30px]">FAQ</h6>
          <h1 className="text-[50px] font-[bold] text-[#ffffff] mt-[20px]">Get answers to common questions</h1>
          <p className="text-[#666666] font-bold mt-[25px] text-[22px]">From basics to advanced topics, find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking</p>
        </div>
        <div className="accardion max-w-[700px] mx-auto mt-[50px] pb-[100px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>

    </>
  );

}
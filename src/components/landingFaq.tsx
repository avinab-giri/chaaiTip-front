import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const LandingPageFaq = () => {
    return (
        <Accordion type="single" collapsible>

            <AccordionItem value="item-1">
                <AccordionTrigger>How do I receive my tips?</AccordionTrigger>
                <AccordionContent>
                    All tips are sent instantly to your UPI.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>How much does ChaaiTip cost?</AccordionTrigger>
                <AccordionContent>
                    Creating your page is free. Supporters pay you directly to your UPI account, and there are no hidden charges — you receive the full amount.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>Can I use ChaaiTip if I’m outside India?</AccordionTrigger>
                <AccordionContent>
                    Right now, ChaaiTip is designed for Indian creators with UPI.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>How fast can I start getting tips?</AccordionTrigger>
                <AccordionContent>
                    You can receive your first tip within minutes — just create your page, complete Aadhaar or PAN verification, and you’re ready to go!
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger>Do I need a large audience to start?</AccordionTrigger>
                <AccordionContent>
                    No! Even with a few loyal fans, you can start receiving tips today.
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    )
}

export default LandingPageFaq
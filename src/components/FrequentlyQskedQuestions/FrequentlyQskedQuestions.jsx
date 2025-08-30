import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FrequentlyAskedQuestions() {
  return (
    <Accordion className="px-[20px] md:px-[120px] my-5" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>How can I track my order?</AccordionTrigger>
        <AccordionContent>
          Once your order is shipped, you will receive an email with a tracking
          number. You can use this number on our website to track the delivery
          status anytime.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit/debit cards, PayPal, and cash on delivery
          (available in select locations).
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can I return or exchange a product?</AccordionTrigger>
        <AccordionContent>
          Yes, you can request a return or exchange within 14 days of receiving
          your order, as long as the product is unused and in its original
          packaging.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          Do you offer international shipping?
        </AccordionTrigger>
        <AccordionContent>
          Currently, we deliver across Egypt and select international
          destinations. Shipping fees and delivery times may vary depending on
          the location.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
        <AccordionContent>
          You can reach our support team via the "Contact Us" page, email at
          support@eliteeshop.com, or through our live chat available 24/7.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

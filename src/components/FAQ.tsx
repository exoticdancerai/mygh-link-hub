import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Anthem250?",
    answer: "Anthem250 is the first-ever National Anthem NFT project commemorating America's 250th anniversary. It features a beautiful performance of 'The Star-Spangled Banner' by Hannah Magnelli, preserved as a digital collectible on the Solana blockchain.",
  },
  {
    question: "How do I purchase tokens?",
    answer: "You can purchase Anthem250 tokens by connecting your Solana wallet (Phantom or Solflare) or using a credit card via MoonPay. Each token is priced at $1.77, symbolizing the year of American independence.",
  },
  {
    question: "What blockchain is used?",
    answer: "Anthem250 uses the Solana blockchain, known for its high speed and low transaction fees, making it accessible for everyone to own a piece of American history.",
  },
  {
    question: "What is the total supply?",
    answer: "The total supply is 17.76 million tokens, representing the year 1776 when America declared independence.",
  },
  {
    question: "When will the tokens launch?",
    answer: "The official launch is planned for 2026, coinciding with America's 250th anniversary celebration on Independence Day.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

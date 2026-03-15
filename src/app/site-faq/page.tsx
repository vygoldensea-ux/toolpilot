import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "ToolPilot FAQ",
  description: "Answers to common questions about ToolPilot, how the tools work, and what users should expect.",
  path: "/site-faq",
  keywords: ["toolpilot faq", "developer tools faq"]
});

const faqs = [
  {
    question: "What is ToolPilot?",
    answer:
      "ToolPilot is a collection of browser-based developer utilities designed to help developers inspect, transform, validate, and debug structured data more efficiently."
  },
  {
    question: "Is ToolPilot free to use?",
    answer: "Yes. Most tools on ToolPilot are available without account creation or payment."
  },
  {
    question: "Do the tools send my data to a server?",
    answer:
      "Many ToolPilot utilities are designed to run directly in the browser whenever possible. Users should still avoid entering highly sensitive data into any online tools."
  },
  {
    question: "Who maintains ToolPilot?",
    answer:
      "ToolPilot is maintained as a practical utility website focused on lightweight developer workflows and browser-based debugging tasks."
  },
  {
    question: "How often are tools updated?",
    answer: "Tools and documentation may be updated periodically to improve reliability, usability, and content quality."
  },
  {
    question: "Why does ToolPilot also publish guides?",
    answer:
      "Developer tools are more useful when paired with practical explanations, common mistakes, and real workflow examples. The guides help provide that context."
  },
  {
    question: "Can I use ToolPilot in production workflows?",
    answer:
      "ToolPilot can support development and debugging workflows, but users are responsible for validating results independently before production use."
  }
] as const;

export default function SiteFaqPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">ToolPilot FAQ</h1>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-[24px] border border-white/70 bg-white/85 px-5 py-5 shadow-[0_18px_55px_rgba(79,61,154,0.06)]"
            >
              <summary className="cursor-pointer list-none text-sm font-medium text-[#2e295b]">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-[#666b86]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </Container>
  );
}

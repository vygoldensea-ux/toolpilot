import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact ToolPilot",
  description: "Contact ToolPilot for feedback, issues, and feature requests.",
  path: "/contact",
  keywords: ["contact toolpilot", "toolpilot support"]
});

export default function ContactPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">Contact ToolPilot</h1>
        <div className="tp-panel mt-8 space-y-6 p-7 sm:p-10">
          <p className="max-w-3xl text-sm leading-8 text-[#666b86]">
            If you have questions, suggestions, or bug reports, we welcome your feedback.
          </p>
          <div>
            <p className="text-sm leading-8 text-[#666b86]">Contact email:</p>
            <a className="mt-2 inline-block text-base font-medium text-brand-700 hover:text-brand-800" href="mailto:support@toolpilot.xyz">
              support@toolpilot.xyz
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">You can contact ToolPilot for:</h2>
            <ul className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
              <li>• reporting bugs in developer tools</li>
              <li>• suggesting new utilities</li>
              <li>• requesting improvements to existing tools</li>
              <li>• reporting incorrect outputs</li>
              <li>• partnership or technical collaboration inquiries</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Bug report checklist</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
              When reporting an issue, please include:
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
              <li>• the name of the tool</li>
              <li>• the browser and device you used</li>
              <li>• the input that caused the issue</li>
              <li>• the expected result</li>
              <li>• the actual result</li>
            </ul>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
              This helps us identify and resolve issues more efficiently.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Response expectations</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
              We review product feedback and bug reports on a rolling basis. Clear reproduction details help
              speed up troubleshooting.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

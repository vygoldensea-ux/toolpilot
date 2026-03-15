import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "How ToolPilot Works",
  description: "Learn how ToolPilot combines browser-based developer tools with practical documentation and guides.",
  path: "/how-toolpilot-works",
  keywords: ["how toolpilot works", "toolpilot documentation", "developer tools workflow"]
});

export default function HowToolPilotWorksPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">How ToolPilot Works</h1>
        <div className="tp-panel mt-8 space-y-8 p-7 text-sm leading-8 text-[#666b86] sm:p-10">
          <p>
            ToolPilot is designed to make common developer utility tasks faster and easier.
          </p>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">The product model is simple</h2>
            <ol className="mt-4 space-y-2">
              <li>1. open a tool</li>
              <li>2. paste or generate data</li>
              <li>3. inspect, transform, validate, or convert it</li>
              <li>4. continue your workflow with a cleaner output</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Browser-first approach</h2>
            <p className="mt-4">
              Whenever possible, tools are designed to run directly in the browser. This reduces friction and
              makes quick debugging tasks easier.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Why documentation matters</h2>
            <p className="mt-4">
              A tool alone is often not enough. Developers also need examples, practical guidance, and
              warnings about common mistakes. That is why ToolPilot combines utilities with supporting
              documentation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">How guides connect to tools</h2>
            <p className="mt-4">
              ToolPilot guides are intended to help users understand related workflows, such as formatting
              JSON during API debugging, comparing structured payloads, or understanding what encoded values
              actually mean.
            </p>
            <p className="mt-4">
              To see those resources, browse the{" "}
              <Link href="/blog" className="text-brand-700 hover:text-brand-800">
                Developer Guides
              </Link>{" "}
              index and jump from each article into the relevant tool.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

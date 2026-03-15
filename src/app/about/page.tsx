import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "About ToolPilot",
  description: "Learn about ToolPilot and how it helps developers work faster with browser-based utilities.",
  path: "/about",
  keywords: ["about toolpilot", "developer tools site"]
});

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">About ToolPilot</h1>
        <div className="tp-panel mt-8 space-y-8 p-7 sm:p-10">
          <p className="max-w-3xl text-sm leading-8 text-[#666b86]">
            ToolPilot is a collection of browser-based developer utilities designed to help developers work
            faster with structured data, APIs, debugging workflows, and data transformation tasks.
          </p>
          <p className="max-w-3xl text-sm leading-8 text-[#666b86]">
            The goal of ToolPilot is simple: provide practical tools that developers can use instantly
            without installing software, creating accounts, or navigating unnecessary setup steps.
          </p>
          <p className="max-w-3xl text-sm leading-8 text-[#666b86]">
            Many tools on ToolPilot are designed to run directly inside the browser whenever possible.
            This helps reduce friction and makes quick debugging tasks easier during development, testing,
            and troubleshooting.
          </p>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">What ToolPilot provides</h2>
            <ul className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
              <li>• JSON formatting, validation, and comparison utilities</li>
              <li>• Encoding and decoding tools such as Base64 and URL encoding</li>
              <li>• Developer helpers including UUID generators, timestamp converters, and regex testing tools</li>
              <li>• Practical browser-based utilities for inspecting, transforming, and debugging data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Who ToolPilot is for</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
              ToolPilot is built for developers, QA engineers, DevOps teams, API designers, students, and
              technical teams who need fast access to practical data tools during daily workflows.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">These tools are commonly used during:</p>
            <ul className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
              <li>• API debugging</li>
              <li>• inspecting request and response payloads</li>
              <li>• validating structured data</li>
              <li>• converting encoded values</li>
              <li>• testing scripts and automation workflows</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Our philosophy</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
              We believe developer tools should be:
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
              <li>• fast to access</li>
              <li>• easy to understand</li>
              <li>• useful in real workflows</li>
              <li>• privacy-conscious whenever possible</li>
            </ul>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
              ToolPilot is continuously improved to support practical developer use cases and clearer
              technical documentation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Why ToolPilot exists</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
              Developers often need quick utilities during debugging sessions, integration work, and API
              testing. ToolPilot exists to reduce friction in those moments by offering lightweight
              browser-based tools with simple interfaces and clear documentation.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
              For deeper workflow guidance, browse the{" "}
              <Link href="/blog" className="text-brand-700 hover:text-brand-800">
                Developer Guides
              </Link>{" "}
              section alongside the tools.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

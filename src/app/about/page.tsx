import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about ToolPilot and why it is built for scalable developer tooling.",
  path: "/about",
  keywords: ["about toolpilot", "developer tools site"]
});

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">About ToolPilot</h1>
        <div className="tp-panel mt-8 p-7 sm:p-10">
          <p className="max-w-3xl text-sm leading-8 text-[#666b86]">
            ToolPilot is a focused developer utilities website. The platform is intentionally modular:
            each tool has its own route, metadata, and content model while sharing a common layout
            system for consistency and speed.
          </p>
        </div>
      </section>
    </Container>
  );
}

import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "ToolPilot Changelog",
  description: "Recent ToolPilot product updates, utility improvements, and documentation changes.",
  path: "/changelog",
  keywords: ["toolpilot changelog", "toolpilot updates"]
});

const updates = [
  {
    version: "Version 1.2",
    items: [
      "expanded trust and documentation pages",
      "improved site structure for guides and educational content",
      "added stronger contextual content for developer workflows"
    ]
  },
  {
    version: "Version 1.1",
    items: [
      "improved JSON-related tool documentation",
      "added clearer explanations, examples, and FAQs",
      "improved internal linking between related tools"
    ]
  },
  {
    version: "Version 1.0",
    items: [
      "launched core browser-based developer utilities",
      "added foundational JSON, encoding, regex, UUID, and timestamp tools"
    ]
  }
] as const;

export default function ChangelogPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">ToolPilot Changelog</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#666b86]">Recent updates to ToolPilot are listed below.</p>
        <div className="mt-8 space-y-6">
          {updates.map((update) => (
            <div key={update.version} className="tp-panel p-7 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">{update.version}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
                {update.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

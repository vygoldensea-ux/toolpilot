import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Editorial Standards",
  description: "Editorial standards and content guidelines used by ToolPilot for practical developer documentation.",
  path: "/editorial-standards",
  keywords: ["toolpilot content standards", "developer documentation guidelines"]
});

export default function EditorialStandardsPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">Editorial Standards</h1>
        <div className="tp-panel mt-8 space-y-6 p-7 text-sm leading-8 text-[#666b86] sm:p-10">
          <p>
            ToolPilot aims to publish clear, practical, and accurate content for developers.
          </p>
          <p>
            Our editorial approach focuses on usefulness first. We write content to help developers solve real workflow
            problems, not just to fill pages with keywords.
          </p>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Our content standards</h2>
            <ul className="mt-4 space-y-3">
              <li>• explain tools in real developer contexts</li>
              <li>• provide practical examples when possible</li>
              <li>• describe common mistakes and limitations</li>
              <li>• avoid misleading or exaggerated claims</li>
              <li>• avoid keyword stuffing and low-value filler</li>
              <li>• improve clarity over time as tools evolve</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">How content is created</h2>
            <p className="mt-4">
              Content may begin with structured drafting workflows, but every page should be reviewed for clarity,
              usefulness, and accuracy before publication.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">How content is improved</h2>
            <p className="mt-4">We update pages when:</p>
            <ul className="mt-4 space-y-3">
              <li>• a tool changes</li>
              <li>• documentation is unclear</li>
              <li>• examples need improvement</li>
              <li>• common user questions reveal missing context</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Our goal</h2>
            <p className="mt-4">
              The goal of ToolPilot content is to help developers understand when to use a tool, how to use it
              correctly, and what limitations or risks they should be aware of.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for ToolPilot developer tools.",
  path: "/terms",
  keywords: ["toolpilot terms", "developer tools terms"]
});

export default function TermsPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Terms of Use</h1>
        <div className="tp-panel mt-8 p-7 sm:p-10 space-y-4 text-sm leading-8 text-slate-600">
          <p>ToolPilot is provided as-is for developer productivity workflows.</p>
          <p>
            You are responsible for validating outputs before using them in production systems, security-sensitive
            contexts, or regulated environments.
          </p>
          <p>
            ToolPilot may update functionality, content, or availability without notice during product iteration.
          </p>
        </div>
      </section>
    </Container>
  );
}

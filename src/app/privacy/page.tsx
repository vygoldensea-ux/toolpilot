import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "ToolPilot privacy policy and data handling practices.",
  path: "/privacy",
  keywords: ["toolpilot privacy", "developer tools privacy"]
});

export default function PrivacyPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Privacy Policy</h1>
        <div className="tp-panel mt-8 p-7 sm:p-10 space-y-4 text-sm leading-8 text-slate-600">
          <p>ToolPilot is designed to process tool inputs in the browser for the MVP whenever possible.</p>
          <p>
            Analytics may be enabled in production to measure product usage. We collect operational data to
            improve reliability, performance, and developer experience.
          </p>
          <p>
            For requests related to data handling, contact <a className="text-brand-700" href="mailto:hello@toolpilot.xyz">hello@toolpilot.xyz</a>.
          </p>
        </div>
      </section>
    </Container>
  );
}

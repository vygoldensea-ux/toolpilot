import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "ToolPilot privacy policy and data handling practices for developers.",
  path: "/privacy-policy",
  keywords: ["toolpilot privacy policy", "developer tools privacy"]
});

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">Privacy Policy</h1>
        <div className="tp-panel mt-8 space-y-4 p-7 text-sm leading-8 text-[#666b86] sm:p-10">
          <p>
            ToolPilot is designed to process tool inputs in the browser for core MVP features whenever
            possible.
          </p>
          <p>
            We may use analytics to understand product usage patterns and improve performance,
            accessibility, and reliability across pages.
          </p>
          <p>
            For privacy-related requests, contact
            <a className="ml-1 text-brand-700" href="mailto:hello@toolpilot.xyz">
              hello@toolpilot.xyz
            </a>
            .
          </p>
        </div>
      </section>
    </Container>
  );
}

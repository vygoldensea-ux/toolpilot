import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact ToolPilot for feedback, issues, and feature requests.",
  path: "/contact",
  keywords: ["contact toolpilot", "toolpilot support"]
});

export default function ContactPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Contact</h1>
        <div className="tp-panel mt-8 p-7 sm:p-10">
          <p className="text-sm leading-8 text-slate-600">
            For feedback and feature requests, email
            <a className="ml-1 font-medium text-brand-700 hover:text-brand-800" href="mailto:hello@toolpilot.xyz">
              hello@toolpilot.xyz
            </a>
            .
          </p>
        </div>
      </section>
    </Container>
  );
}

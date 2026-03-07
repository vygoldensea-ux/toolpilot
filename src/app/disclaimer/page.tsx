import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: "ToolPilot usage disclaimer for generated outputs and developer workflows.",
  path: "/disclaimer",
  keywords: ["toolpilot disclaimer", "tool output disclaimer"]
});

export default function DisclaimerPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Disclaimer</h1>
        <div className="tp-panel mt-8 p-7 sm:p-10 space-y-4 text-sm leading-8 text-slate-600">
          <p>
            ToolPilot outputs are generated for convenience and should be reviewed before production use.
          </p>
          <p>
            Security-sensitive decisions must rely on verified backend validation and trusted infrastructure.
          </p>
          <p>
            No warranty is provided for completeness, accuracy, or fitness for a specific purpose.
          </p>
        </div>
      </section>
    </Container>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";

type PlannedToolPageProps = {
  title: string;
  description: string;
};

export function PlannedToolPage({ title, description }: PlannedToolPageProps) {
  return (
    <Container>
      <article className="py-14 sm:py-20">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{description}</p>
        </header>

        <section className="tp-panel mt-10 p-6 sm:p-8" aria-label="Planned tool status">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Launch status</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            This route is prepared and indexed as part of the ToolPilot roadmap. Implementation is queued for
            the next release cycle.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="tp-button-primary">
              Explore live tools
            </Link>
            <Link href="/contact" className="tp-button-secondary">
              Request priority
            </Link>
          </div>
        </section>
      </article>
    </Container>
  );
}

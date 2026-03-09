import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { SeoLandingTool } from "@/config/seo-landing-tools";

export function SeoLandingToolPage({ tool }: { tool: SeoLandingTool }) {
  return (
    <Container>
      <article className="py-14 sm:py-20">
        <header className="max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{tool.name}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{tool.description}</p>
          <p className="mt-4 text-base leading-8 text-slate-600">{tool.intro}</p>
        </header>

        <section className="tp-panel mt-10 p-6 sm:p-8" aria-label="Tool panel">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Tool panel</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            This SEO landing page is live and indexable. Interactive tool logic can be extended while keeping
            this URL stable for ranking growth.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Example input</label>
              <textarea className="tp-input min-h-28" defaultValue={tool.exampleInput} readOnly aria-readonly="true" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Example output</label>
              <textarea className="tp-input min-h-28" defaultValue={tool.exampleOutput} readOnly aria-readonly="true" />
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">How to use</h2>
          <ol className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            {tool.howToUse.map((step, index) => (
              <li key={step} className="rounded-md border border-slate-200 bg-white px-4 py-3">
                <span className="mr-2 font-semibold text-slate-900">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">FAQ</h2>
          <div className="mt-5 space-y-3">
            {tool.faqs.map((faq) => (
              <details key={faq.question} className="rounded-md border border-slate-200 bg-white px-4 py-4">
                <summary className="cursor-pointer list-none text-sm font-medium text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related tools</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tool.related.map((slug) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                /{slug}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </Container>
  );
}

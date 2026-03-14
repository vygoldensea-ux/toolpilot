import Link from "next/link";
import { StructuredData } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { ToolIcon } from "@/components/ui/ToolIcon";
import type { SeoLandingTool } from "@/config/seo-landing-tools";
import { buildFaqStructuredDataFromFaqs, buildStructuredData } from "@/lib/seo/structured-data";

export function SeoLandingToolPage({ tool }: { tool: SeoLandingTool }) {
  const webPageSchema = buildStructuredData({
    type: "WebPage",
    title: tool.name,
    description: tool.description,
    path: `/${tool.slug}`
  });
  const faqSchema = buildFaqStructuredDataFromFaqs(tool.faqs);

  return (
    <>
      <StructuredData data={webPageSchema} />
      <StructuredData data={faqSchema} />
      <Container>
        <article className="py-14 sm:py-20">
          <header className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/80 px-7 py-8 shadow-[0_28px_80px_rgba(79,61,154,0.08)] backdrop-blur sm:px-10 sm:py-10">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#ffe6a9]/45 blur-3xl" />
            <div className="pointer-events-none absolute left-12 top-8 h-24 w-24 rounded-full border border-[#efe7ff]" />
            <ToolIcon slug={tool.slug} className="h-14 w-14 rounded-[24px]" />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-[#8f83c6]">SEO landing page</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">{tool.name}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#666b86]">{tool.description}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#666b86]">{tool.intro}</p>
          </header>

          <section className="tp-panel mt-10 p-6 sm:p-8" aria-label="Tool panel">
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Tool panel</h2>
            <p className="mt-3 text-sm leading-7 text-[#666b86]">
              This SEO landing page is live and indexable. Interactive tool logic can be extended while keeping
              this URL stable for ranking growth.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#555a7a]">Example input</label>
                <textarea className="tp-input min-h-28" defaultValue={tool.exampleInput} readOnly aria-readonly="true" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#555a7a]">Example output</label>
                <textarea className="tp-input min-h-28" defaultValue={tool.exampleOutput} readOnly aria-readonly="true" />
              </div>
            </div>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Overview</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">What is this tool?</h2>
            <p className="mt-4 text-sm leading-8 text-[#666b86]">{tool.intro}</p>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Workflow</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">How to use</h2>
            <ol className="mt-6 grid gap-4 md:grid-cols-2">
              {tool.howToUse.map((step, index) => (
                <li
                  key={step}
                  className="rounded-[24px] border border-white/70 bg-white/85 px-5 py-5 text-sm leading-7 text-[#666b86] shadow-[0_18px_55px_rgba(79,61,154,0.08)]"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f1ebff] text-sm font-semibold text-[#654ee0]">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Guide</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">Why use it?</h2>
            <p className="mt-4 text-sm leading-8 text-[#666b86]">
              This {tool.keyword} page gives you a focused workflow with clear examples and predictable output.
              Instead of switching between multiple tabs, you can validate input and move directly to related
              tools from one place.
            </p>
            <p className="mt-3 text-sm leading-8 text-[#666b86]">
              Keeping each utility on a dedicated URL also helps teams share repeatable workflows and improves
              crawl signals for high-intent developer searches.
            </p>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Answers</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">FAQ</h2>
            <div className="mt-5 space-y-3">
              {tool.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-[24px] border border-white/70 bg-white/85 px-5 py-5 shadow-[0_18px_55px_rgba(79,61,154,0.06)]"
                >
                  <summary className="cursor-pointer list-none text-sm font-medium text-[#2e295b]">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#666b86]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Explore more</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">Related tools</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tool.related.map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="rounded-[22px] border border-white/70 bg-white/85 px-5 py-4 text-sm font-medium text-[#555a7a] shadow-[0_16px_48px_rgba(79,61,154,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#dccfff] hover:text-[#4f3d9a]"
                >
                  /{slug}
                </Link>
              ))}
            </div>
          </section>
        </article>
      </Container>
    </>
  );
}

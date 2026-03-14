import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolDefinition, ToolRegistryItem } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ToolIcon } from "@/components/ui/ToolIcon";

type ToolPageLayoutProps = {
  tool: ToolDefinition;
  children: ReactNode;
  relatedTools: Array<Pick<ToolRegistryItem, "slug" | "name">>;
};

export function ToolPageLayout({ tool, children, relatedTools }: ToolPageLayoutProps) {
  return (
    <Container>
      <article className="py-14 sm:py-20">
        <header className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/80 px-7 py-8 shadow-[0_28px_80px_rgba(79,61,154,0.08)] backdrop-blur sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#ffe6a9]/45 blur-3xl" />
          <div className="pointer-events-none absolute left-12 top-8 h-24 w-24 rounded-full border border-[#efe7ff]" />
          <ToolIcon slug={tool.slug} className="h-14 w-14 rounded-[24px]" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-[#8f83c6]">ToolPilot utility</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">{tool.name}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#666b86]">{tool.description}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#666b86]">{tool.intro}</p>
        </header>

        <section aria-label="Tool interface" className="tp-panel mt-10 p-6 sm:p-8">
          {children}
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Example</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">Example</h2>
          <div className="tp-panel mt-5 overflow-hidden">
            <div className="border-b border-[#f0ebff] px-5 py-4">
              <p className="text-sm font-medium text-[#3f4373]">{tool.example.title}</p>
            </div>
            <div className="grid gap-0 divide-y divide-[#f0ebff] md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b8faa]">Input</p>
                <pre className="mt-3 whitespace-pre-wrap text-xs leading-6 text-[#5f6483]">{tool.example.input}</pre>
              </div>
              <div className="px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b8faa]">Output</p>
                <pre className="mt-3 whitespace-pre-wrap text-xs leading-6 text-[#5f6483]">{tool.example.output}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Guide</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">Why use it?</h2>
          <p className="mt-3 text-sm font-medium text-[#3f4373]">{tool.guideHeading}</p>
          <div className="mt-5 space-y-5 text-sm leading-8 text-[#666b86]">
            {tool.guideParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
            {relatedTools.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.slug}`}
                className="rounded-[22px] border border-white/70 bg-white/85 px-5 py-4 text-sm font-medium text-[#555a7a] shadow-[0_16px_48px_rgba(79,61,154,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#dccfff] hover:text-[#4f3d9a]"
              >
                {related.name}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </Container>
  );
}

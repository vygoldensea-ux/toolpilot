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
        <header className="max-w-4xl">
          <ToolIcon slug={tool.slug} className="h-12 w-12 rounded-2xl" />
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{tool.name}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{tool.description}</p>
          <p className="mt-4 text-base leading-8 text-slate-600">{tool.intro}</p>
        </header>

        <section aria-label="Tool interface" className="tp-panel mt-10 p-6 sm:p-8">
          {children}
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What is this tool?</h2>
          <p className="mt-4 text-sm leading-8 text-slate-700">{tool.intro}</p>
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
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Example</h2>
          <div className="tp-panel mt-5 overflow-hidden">
            <div className="border-b border-slate-200 px-5 py-3">
              <p className="text-sm font-medium text-slate-800">{tool.example.title}</p>
            </div>
            <div className="grid gap-0 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="px-5 py-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Input</p>
                <pre className="mt-2 whitespace-pre-wrap text-xs leading-6 text-slate-700">{tool.example.input}</pre>
              </div>
              <div className="px-5 py-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Output</p>
                <pre className="mt-2 whitespace-pre-wrap text-xs leading-6 text-slate-700">{tool.example.output}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Why use it?</h2>
          <p className="mt-3 text-sm font-medium text-slate-800">{tool.guideHeading}</p>
          <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700">
            {tool.guideParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
            {relatedTools.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.slug}`}
                className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
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

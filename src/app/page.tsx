import Link from "next/link";
import { ToolCard } from "@/components/ui/ToolCard";
import { Container } from "@/components/ui/Container";
import { StructuredData } from "@/components/seo/StructuredData";
import { liveToolRegistry, plannedToolRegistry, siteConfig, toolRegistry } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildStructuredData } from "@/lib/seo/structured-data";

export const metadata = buildMetadata({
  title: "Developer Tools",
  description:
    "ToolPilot offers online developer tools for JSON formatting, Base64 encode/decode, UUID generation, JWT decoding, and cron expression building.",
  path: "/",
  keywords: ["developer tools", "online developer tools"]
});

export default function HomePage() {
  const schema = buildStructuredData({
    type: "WebPage",
    title: `${siteConfig.name} Developer Tools`,
    description: siteConfig.description,
    path: "/"
  });

  const featuredTools = liveToolRegistry;

  return (
    <>
      <StructuredData data={schema} />
      <Container>
        <section className="py-16 sm:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Online developer tools for everyday engineering tasks.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                ToolPilot is a focused collection of developer tools designed for speed, readability, and
                practical workflows. Use JSON formatting, Base64 encode/decode, UUID generation, JWT
                decoding, and cron expression utilities without extra setup.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#featured-tools" className="tp-button-primary">
                  Explore tools
                </Link>
                <Link href="/sitemap" className="tp-button-secondary">
                  Browse all pages
                </Link>
              </div>
            </div>

            <aside className="tp-panel p-6 sm:p-7" aria-label="Tool preview">
              <p className="text-sm font-medium text-slate-900">JSON Formatter preview</p>
              <div className="mt-4 space-y-3">
                <label className="block text-xs text-slate-500">Input</label>
                <Link
                  href="/json-formatter"
                  className="block rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-600 transition hover:border-slate-300"
                >
                  {'{"service":"toolpilot","quality":"high"}'}
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                <label className="block text-xs text-slate-500">Output</label>
                <Link
                  href="/json-formatter"
                  className="block rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-600 transition hover:border-slate-300"
                >
                  {`{\n  "service": "toolpilot",\n  "quality": "high"\n}`}
                </Link>
              </div>
              <div className="mt-5">
                <Link href="/json-formatter" className="tp-button-primary w-full">
                  Format JSON
                </Link>
              </div>
              <p className="mt-3 text-xs text-slate-500">Open the tool page to paste data and run formatting.</p>
            </aside>
          </div>
        </section>

        <section id="featured-tools" className="scroll-mt-20 py-6 sm:py-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Featured tools</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Production-ready utilities with focused interfaces and SEO-friendly pages.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="tp-panel p-7 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Why ToolPilot</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Focused tools</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Each page solves one developer problem clearly and avoids unnecessary UI complexity.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Built for speed</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Server-rendered routing plus lightweight client interactions keep page performance high.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">SEO-ready structure</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Every tool includes targeted metadata, semantic sections, FAQ content, and internal links.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="all-tools" className="pb-8 sm:pb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">All tools list</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Browse all online developer tools currently available on ToolPilot.
          </p>
          <ul className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {toolRegistry.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/${tool.slug}`}
                  className="flex flex-col gap-2 px-5 py-4 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{tool.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{tool.summary}</p>
                  </div>
                  <span className="text-sm font-medium text-brand-700">
                    {tool.status === "live" ? "Open" : "Coming soon"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="pb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Planned tools</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            These routes are already prepared and ready for implementation.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plannedToolRegistry.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}

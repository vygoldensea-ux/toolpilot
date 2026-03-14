import Link from "next/link";
import { ToolCard } from "@/components/ui/ToolCard";
import { Container } from "@/components/ui/Container";
import { StructuredData } from "@/components/seo/StructuredData";
import { seoLandingTools } from "@/config/seo-landing-tools";
import { liveToolRegistry, plannedToolRegistry, siteConfig, toolRegistry } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildStructuredData } from "@/lib/seo/structured-data";
import { ToolIcon } from "@/components/ui/ToolIcon";

export const metadata = buildMetadata({
  title: "Developer Tools",
  description:
    "ToolPilot offers online developer tools for JSON formatting, Base64 encode/decode, UUID generation, JWT decoding, and cron expression building.",
  path: "/",
  keywords: ["developer tools", "online developer tools"]
});

const statItems = [
  { label: "Live tools", value: `${liveToolRegistry.length}+`, slug: "json-formatter" },
  { label: "Client-side", value: "100%", slug: "base64-tools" },
  { label: "No signup", value: "Free", slug: "password-generator" }
] as const;

const heroCards = [
  {
    title: "JSON payloads",
    value: "Clean",
    change: "Format and validate in seconds",
    className: "right-5 top-4 z-20 w-[220px]"
  },
  {
    title: "Token debugging",
    value: "Ready",
    change: "Base64, JWT, hash, and URL utilities",
    className: "bottom-10 right-0 z-20 w-[236px]"
  }
] as const;

export default function HomePage() {
  const schema = buildStructuredData({
    type: "WebPage",
    title: `${siteConfig.name} Developer Tools`,
    description: siteConfig.description,
    path: "/"
  });
  const organizationSchema = buildStructuredData({
    type: "Organization",
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
    absoluteUrl: siteConfig.baseUrl,
    logoUrl: `${siteConfig.baseUrl}/logo.png`
  });

  const featuredTools = liveToolRegistry;

  return (
    <>
      <StructuredData data={schema} />
      <StructuredData data={organizationSchema} />
      <Container>
        <section className="relative overflow-hidden py-8 sm:py-12">
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-[#efe4ff] blur-3xl" />
          <div className="absolute right-10 top-20 h-36 w-36 rounded-full bg-[#fff0c8] blur-3xl" />
          <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_560px]">
            <div className="relative z-10">
              <p className="inline-flex rounded-full border border-brand-100 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                ToolPilot developer stack
              </p>
              <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-[#2e295b] sm:text-6xl lg:text-7xl">
                Online developer tools
                <br />
                built for the{" "}
                <span className="text-brand-500">future</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#666b86]">
                ToolPilot packages practical developer utilities into one polished workspace for formatting,
                conversion, encoding, decoding, and validation. The experience is fast, focused, and built
                to keep everyday engineering tasks moving.
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-8 text-[#6b6f86]">
                ToolPilot provides free online developer tools for common daily tasks across API debugging,
                data conversion, and automation setup. You can format and validate JSON, run Base64 encode and
                decode flows, generate UUID v4 identifiers, decode JWT payloads, and build cron expressions in
                seconds. The site also includes focused utilities such as
                {" "}
                <Link href="/timestamp-converter" className="text-[#423a74] underline decoration-brand-200 underline-offset-4 hover:text-brand-700">
                  Unix Timestamp Converter
                </Link>
                ,{" "}
                <Link href="/url-encode-decode" className="text-[#423a74] underline decoration-brand-200 underline-offset-4 hover:text-brand-700">
                  URL Encode Decode
                </Link>
                ,{" "}
                <Link href="/regex-tester" className="text-[#423a74] underline decoration-brand-200 underline-offset-4 hover:text-brand-700">
                  Regex Tester
                </Link>
                , and
                {" "}
                <Link href="/sql-formatter" className="text-[#423a74] underline decoration-brand-200 underline-offset-4 hover:text-brand-700">
                  SQL Formatter
                </Link>
                . Each tool has its own SEO-ready page with examples, FAQs, and related links so both users
                and search engines can discover the right utility quickly.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="#featured-tools" className="tp-button-primary">
                  Explore tools
                </Link>
                <Link href="/sitemap" className="tp-button-secondary">
                  Browse all pages
                </Link>
              </div>
            </div>

            <aside className="relative mx-auto min-h-[560px] w-full max-w-[560px]" aria-label="Tool preview">
              <div className="absolute right-2 top-10 h-[360px] w-[82%] rounded-[52px] bg-[#fff6d9]" />
              <div className="absolute left-5 top-40 h-28 w-28 rounded-full border border-[#f4d897] opacity-70" />
              <div className="absolute left-[54%] top-24 hidden h-32 w-32 -translate-x-1/2 rounded-full border border-[#f4d897] opacity-80 lg:block" />
              <div className="absolute left-[54%] top-28 h-32 w-px -translate-x-1/2 rotate-12 bg-[#f3d597]" />
              <div className="absolute left-40 top-[268px] grid grid-cols-6 gap-2 opacity-60">
                {Array.from({ length: 24 }).map((_, index) => (
                  <span key={index} className="h-1.5 w-1.5 rounded-full bg-brand-200" />
                ))}
              </div>

              {heroCards.map((card) => (
                <div
                  key={card.title}
                  className={`tp-panel tp-float-slow absolute p-5 ${card.className}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b8faa]">{card.title}</p>
                  <p className="mt-3 text-4xl font-semibold tracking-tight text-[#25214f]">{card.value}</p>
                  <p className="mt-3 text-sm leading-6 text-[#6f738c]">{card.change}</p>
                </div>
              ))}

              <div className="tp-panel tp-fade-up absolute left-16 top-32 z-30 w-[310px] p-6 shadow-[0_36px_80px_-42px_rgba(44,36,94,0.36)]">
                <p className="text-sm font-semibold text-[#4e4f6d]">JSON Formatter preview</p>
                <div className="mt-5 rounded-[24px] border border-brand-100 bg-[#faf8ff] px-4 py-4 text-xs leading-6 text-[#676b84] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  {'{"service":"toolpilot","quality":"high"}'}
                </div>
                <div className="mt-4 rounded-[24px] border border-brand-100 bg-white px-4 py-4 text-xs leading-6 text-[#676b84] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  {`{\n  "service": "toolpilot",\n  "quality": "high"\n}`}
                </div>
                <Link href="/json-formatter" className="tp-button-primary mt-5 w-full">
                  Format JSON
                </Link>
                <p className="mt-3 text-xs text-[#8a8faa]">Open the tool page to paste data and run formatting.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {statItems.map((item) => (
              <Link key={item.label} href={`/${item.slug}`} className="tp-panel flex items-center gap-5 p-6">
                <ToolIcon slug={item.slug} className="h-16 w-16 rounded-[26px]" />
                <div>
                  <p className="text-4xl font-semibold tracking-tight text-[#2b2554]">{item.value}</p>
                  <p className="mt-2 text-sm text-[#72758d]">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="featured-tools" className="scroll-mt-20 py-8 sm:py-10">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2e295b]">Featured tools</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6d7189]">
            Production-ready utilities with focused interfaces and SEO-friendly pages.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2e295b]">Popular searches</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6d7189]">
            Quickly jump to high-intent developer utility pages.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {seoLandingTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="rounded-full border border-brand-100 bg-white/85 px-4 py-2 text-sm text-[#585d79] transition hover:border-brand-200 hover:text-brand-700"
              >
                {tool.keyword}
              </Link>
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="tp-panel p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2e295b]">Why ToolPilot</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">Focused tools</h3>
                <p className="mt-3 text-sm leading-7 text-[#6c7088]">
                  Each page solves one developer problem clearly and avoids unnecessary UI complexity.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">Built for speed</h3>
                <p className="mt-3 text-sm leading-7 text-[#6c7088]">
                  Server-rendered routing plus lightweight client interactions keep page performance high.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">SEO-ready structure</h3>
                <p className="mt-3 text-sm leading-7 text-[#6c7088]">
                  Every tool includes targeted metadata, semantic sections, FAQ content, and internal links.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="all-tools" className="pb-8 sm:pb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2e295b]">All tools list</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6d7189]">
            Browse all online developer tools currently available on ToolPilot.
          </p>
          <ul className="mt-8 divide-y divide-[#f0ebff] rounded-[30px] border border-white/70 bg-white/88 shadow-[0_28px_60px_-36px_rgba(44,36,94,0.24)]">
            {toolRegistry.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/${tool.slug}`}
                  className="flex flex-col gap-4 px-6 py-5 transition hover:bg-[#faf7ff] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    <ToolIcon slug={tool.slug} />
                    <div>
                      <h3 className="text-sm font-semibold text-[#2e295b]">{tool.name}</h3>
                      <p className="mt-1 text-sm text-[#6d7189]">{tool.summary}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-brand-700">
                    {tool.status === "live" ? "Open" : "Coming soon"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {plannedToolRegistry.length ? (
          <section className="pb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2e295b]">Planned tools</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6d7189]">
              These routes are already prepared and ready for implementation.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {plannedToolRegistry.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </>
  );
}

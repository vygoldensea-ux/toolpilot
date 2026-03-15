import { blogPosts } from "@/config/blog";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { guides } from "@/config/guides";
import { seoLandingTools } from "@/config/seo-landing-tools";
import { siteConfig, tools } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "HTML Sitemap",
  description: "Browse all ToolPilot pages and developer tools from one HTML sitemap.",
  path: "/sitemap",
  keywords: ["toolpilot sitemap", "developer tools pages"]
});

export default function HtmlSitemapPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">HTML Sitemap</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#666b86]">
          This page lists all public ToolPilot pages for quick navigation and better crawl discoverability.
        </p>

        <section className="mt-10 rounded-[30px] border border-white/70 bg-white/80 p-7 shadow-[0_24px_70px_rgba(79,61,154,0.06)] backdrop-blur sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Navigation</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">Core pages</h2>
          <ul className="mt-5 space-y-2 text-sm text-[#666b86]">
            <li>
              <Link href="/" className="transition hover:text-[#4f3d9a]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-[#4f3d9a]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-[#4f3d9a]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="transition hover:text-[#4f3d9a]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-[#4f3d9a]">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/site-faq" className="transition hover:text-[#4f3d9a]">
                Site FAQ
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="transition hover:text-[#4f3d9a]">
                Changelog
              </Link>
            </li>
            <li>
              <Link href="/how-toolpilot-works" className="transition hover:text-[#4f3d9a]">
                How ToolPilot Works
              </Link>
            </li>
            <li>
              <Link href="/editorial-standards" className="transition hover:text-[#4f3d9a]">
                Editorial Standards
              </Link>
            </li>
            <li>
              <Link href="/guides" className="transition hover:text-[#4f3d9a]">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition hover:text-[#4f3d9a]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="transition hover:text-[#4f3d9a]">
                XML Sitemap
              </Link>
            </li>
            <li>
              <Link href="/robots.txt" className="transition hover:text-[#4f3d9a]">
                Robots.txt
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-[30px] border border-white/70 bg-white/80 p-7 shadow-[0_24px_70px_rgba(79,61,154,0.06)] backdrop-blur sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Discoverability</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">Tool pages</h2>
          <ul className="mt-5 grid gap-3 text-sm text-[#666b86] sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/${tool.slug}`}
                  className="block rounded-[18px] border border-[#efe9ff] bg-[#fcfbff] px-4 py-3 transition hover:border-[#dccfff] hover:text-[#4f3d9a]"
                >
                  {tool.name}
                </Link>
              </li>
            ))}
            {seoLandingTools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/${tool.slug}`}
                  className="block rounded-[18px] border border-[#efe9ff] bg-[#fcfbff] px-4 py-3 transition hover:border-[#dccfff] hover:text-[#4f3d9a]"
                >
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-[30px] border border-white/70 bg-white/80 p-7 shadow-[0_24px_70px_rgba(79,61,154,0.06)] backdrop-blur sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Editorial</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">Guides</h2>
          <ul className="mt-5 grid gap-3 text-sm text-[#666b86] sm:grid-cols-2">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="block rounded-[18px] border border-[#efe9ff] bg-[#fcfbff] px-4 py-3 transition hover:border-[#dccfff] hover:text-[#4f3d9a]"
                >
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-[30px] border border-white/70 bg-white/80 p-7 shadow-[0_24px_70px_rgba(79,61,154,0.06)] backdrop-blur sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Editorial</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">Blog</h2>
          <ul className="mt-5 grid gap-3 text-sm text-[#666b86] sm:grid-cols-2">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-[18px] border border-[#efe9ff] bg-[#fcfbff] px-4 py-3 transition hover:border-[#dccfff] hover:text-[#4f3d9a]"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-sm text-[#8f95af]">{siteConfig.baseUrl}</p>
      </section>
    </Container>
  );
}

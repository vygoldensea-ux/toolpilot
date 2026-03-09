import Link from "next/link";
import { Container } from "@/components/ui/Container";
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
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">HTML Sitemap</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          This page lists all public ToolPilot pages for quick navigation and better crawl discoverability.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Core pages</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-slate-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-slate-900">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-slate-900">
                XML Sitemap
              </Link>
            </li>
            <li>
              <Link href="/robots.txt" className="hover:text-slate-900">
                Robots.txt
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Tool pages</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link href={`/${tool.slug}`} className="hover:text-slate-900">
                  {tool.name}
                </Link>
              </li>
            ))}
            {seoLandingTools.map((tool) => (
              <li key={tool.slug}>
                <Link href={`/${tool.slug}`} className="hover:text-slate-900">
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-sm text-slate-500">{siteConfig.baseUrl}</p>
      </section>
    </Container>
  );
}

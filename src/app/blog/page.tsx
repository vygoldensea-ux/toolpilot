import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/config/blog";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Developer Guides",
  description:
    "Browse practical developer guides covering JSON, Base64, regex, timestamps, JWTs, cron expressions, and API debugging workflows.",
  path: "/blog",
  keywords: ["developer guides", "toolpilot blog", "api debugging guides", "json guides"]
});

export default function BlogIndexPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">Developer Guides</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#666b86]">
          ToolPilot publishes practical technical guides that complement its browser-based tools. These articles focus
          on developer workflows involving JSON, encoding, regular expressions, timestamps, tokens, cron schedules, and
          API debugging.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
          Start with a guide, then jump directly into the relevant utilities such as{" "}
          <Link href="/json-formatter" className="text-brand-700 hover:text-brand-800">
            JSON Formatter
          </Link>
          ,{" "}
          <Link href="/json-validator" className="text-brand-700 hover:text-brand-800">
            JSON Validator
          </Link>
          , and{" "}
          <Link href="/regex-tester" className="text-brand-700 hover:text-brand-800">
            Regex Tester
          </Link>
          .
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-[24px] border border-white/70 bg-white/85 p-6 shadow-[0_18px_55px_rgba(79,61,154,0.06)] transition hover:-translate-y-0.5 hover:border-[#dccfff]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">{post.publishDate}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#666b86]">{post.excerpt}</p>
              <p className="mt-4 text-sm font-medium text-brand-700">Read article</p>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}

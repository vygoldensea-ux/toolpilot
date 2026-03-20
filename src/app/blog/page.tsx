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
          ToolPilot publishes practical developer guides designed to make browser-based utilities more useful in real
          workflows. Instead of listing tools without context, the blog explains when to use them, what mistakes to
          avoid, and how they fit into common debugging and data transformation tasks. These guides are written for
          developers, QA engineers, DevOps teams, API testers, and technical users who need quick answers while working
          with structured data.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
          The guides cover topics such as JSON formatting and validation, Base64 encoding, regex testing, timestamp
          conversion, JWT decoding, cron expressions, URL encoding, and API debugging workflows. Each article is
          intended to connect directly to relevant ToolPilot utilities so users can move from explanation to action
          without unnecessary friction.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-[#666b86]">
          In practice, that means a guide should help you decide whether you need formatting, validation, comparison,
          decoding, or schedule inspection before you open a tool. The blog exists to make those decisions easier. It
          complements the utilities by adding workflow context, debugging patterns, limitations, and common mistakes
          that are hard to express on a compact tool page alone.
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

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { allBlogSlugs, blogPostBySlug, getBlogPostBySlug, getCanonicalBlogSlug, relatedGuidesByBlogSlug } from "@/config/blog";
import { toolRegistryBySlug } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

function renderTextWithLinks(text: string): ReactNode[] {
  const regex = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, label, href] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link key={`${href}-${match.index}`} href={href} className="text-brand-700 hover:text-brand-800">
        {label}
      </Link>
    );
    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export async function generateStaticParams() {
  return allBlogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = getCanonicalBlogSlug(slug);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Blog",
      description: "Developer blog article",
      path: `/blog/${slug}`
    });
  }

  const metadata = buildMetadata({
    title: post.metaTitle.replace(" | ToolPilot", ""),
    description: post.metaDescription,
    path: `/blog/${canonicalSlug}`
  });

  return {
    ...metadata,
    authors: [{ name: post.author }],
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: new Date(post.publishDate).toISOString(),
      modifiedTime: new Date(post.updatedDate ?? post.publishDate).toISOString()
    }
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const canonicalSlug = getCanonicalBlogSlug(slug);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedTools = post.relatedToolSlugs
    .map((relatedSlug) => toolRegistryBySlug.get(relatedSlug))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));
  const relatedGuides = (relatedGuidesByBlogSlug[canonicalSlug] ?? [])
    .map((relatedSlug) => blogPostBySlug.get(relatedSlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  return (
    <Container>
      <article className="py-16 sm:py-24">
        <header className="tp-panel p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">{post.h1}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#666b86]">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#7a7f98]">
            <span>Author: {post.author}</span>
            <span>Published: {post.publishDate}</span>
            {post.updatedDate ? <span>Updated: {post.updatedDate}</span> : null}
          </div>
          {slug !== canonicalSlug ? (
            <p className="mt-4 text-sm leading-7 text-[#666b86]">
              This article is also available at the canonical URL{" "}
              <Link href={`/blog/${canonicalSlug}`} className="text-brand-700 hover:text-brand-800">
                /blog/{canonicalSlug}
              </Link>
              .
            </p>
          ) : null}
        </header>

        <section className="mt-8 rounded-[24px] border border-white/70 bg-white/85 px-6 py-6 shadow-[0_18px_55px_rgba(79,61,154,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Use these tools with this guide</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="rounded-full border border-[#e6dcff] bg-[#faf7ff] px-4 py-2 text-sm font-medium text-[#5b5198] transition hover:border-[#cfc0ff] hover:text-brand-700"
              >
                {tool.name}
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="tp-panel p-7 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-8 text-[#666b86]">
                  {renderTextWithLinks(paragraph)}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
                  {section.bullets.map((item) => (
                    <li key={item}>• {renderTextWithLinks(item)}</li>
                  ))}
                </ul>
              ) : null}
              {section.ordered ? (
                <ol className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
                  {section.ordered.map((item, index) => (
                    <li key={item}>
                      {index + 1}. {renderTextWithLinks(item)}
                    </li>
                  ))}
                </ol>
              ) : null}
              {section.subsections?.map((subsection) => (
                <div key={subsection.heading} className="mt-8">
                  <h3 className="text-lg font-semibold tracking-tight text-[#3a356d]">{subsection.heading}</h3>
                  {subsection.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-sm leading-8 text-[#666b86]">
                      {renderTextWithLinks(paragraph)}
                    </p>
                  ))}
                  {subsection.bullets ? (
                    <ul className="mt-3 space-y-3 text-sm leading-8 text-[#666b86]">
                      {subsection.bullets.map((item) => (
                        <li key={item}>• {renderTextWithLinks(item)}</li>
                      ))}
                    </ul>
                  ) : null}
                  {subsection.ordered ? (
                    <ol className="mt-3 space-y-3 text-sm leading-8 text-[#666b86]">
                      {subsection.ordered.map((item, index) => (
                        <li key={item}>
                          {index + 1}. {renderTextWithLinks(item)}
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Related Tools</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="rounded-[22px] border border-white/70 bg-white/85 px-5 py-4 text-sm font-medium text-[#555a7a] shadow-[0_16px_48px_rgba(79,61,154,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#dccfff] hover:text-[#4f3d9a]"
              >
                {tool.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Related Guides</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="rounded-[22px] border border-white/70 bg-white/85 px-5 py-4 text-sm font-medium text-[#555a7a] shadow-[0_16px_48px_rgba(79,61,154,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#dccfff] hover:text-[#4f3d9a]"
              >
                {guide.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </Container>
  );
}

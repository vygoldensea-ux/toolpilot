import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { guides, guideBySlug } from "@/config/guides";
import { toolRegistryBySlug } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);

  if (!guide) {
    return buildMetadata({
      title: "Guide",
      description: "Developer guide",
      path: `/guides/${slug}`
    });
  }

  const metadata = buildMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`
  });

  return {
    ...metadata,
    authors: [{ name: guide.author }],
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: new Date(guide.publishDate).toISOString()
    }
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);

  if (!guide) {
    notFound();
  }

  const relatedTools = guide.relatedToolSlugs
    .map((relatedSlug) => toolRegistryBySlug.get(relatedSlug))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

  return (
    <Container>
      <article className="py-16 sm:py-24">
        <header className="tp-panel p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Guide</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#666b86]">{guide.description}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#7a7f98]">
            <span>Author: {guide.author}</span>
            <span>Published: {guide.publishDate}</span>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          {guide.sections.map((section) => (
            <section key={section.heading} className="tp-panel p-7 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-8 text-[#666b86]">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
                  {section.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              ) : null}
              {section.ordered ? (
                <ol className="mt-4 space-y-3 text-sm leading-8 text-[#666b86]">
                  {section.ordered.map((item, index) => (
                    <li key={item}>
                      {index + 1}. {item}
                    </li>
                  ))}
                </ol>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">Related tools</p>
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
      </article>
    </Container>
  );
}

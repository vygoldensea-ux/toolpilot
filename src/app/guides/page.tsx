import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { guides } from "@/config/guides";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Developer Guides",
  description: "Read practical ToolPilot guides for JSON workflows, JWT debugging, Base64 usage, and API payload comparison.",
  path: "/guides",
  keywords: ["developer guides", "toolpilot guides", "json guide", "jwt guide"]
});

export default function GuidesIndexPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">Developer Guides</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#666b86]">
          ToolPilot guides focus on practical debugging and data handling workflows that developers encounter in
          day-to-day engineering work.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-[24px] border border-white/70 bg-white/85 p-6 shadow-[0_18px_55px_rgba(79,61,154,0.06)] transition hover:-translate-y-0.5 hover:border-[#dccfff]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8fd1]">{guide.publishDate}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2e295b]">{guide.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#666b86]">{guide.description}</p>
              <p className="mt-4 text-sm font-medium text-brand-700">Read guide</p>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}

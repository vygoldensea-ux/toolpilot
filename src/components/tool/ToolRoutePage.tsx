import type { ReactNode } from "react";
import { StructuredData } from "@/components/seo/StructuredData";
import { tools } from "@/config/site";
import { buildFaqStructuredData, buildStructuredData } from "@/lib/seo/structured-data";
import { getToolOrThrow } from "@/lib/tools";
import { ToolPageLayout } from "./ToolPageLayout";

type ToolRoutePageProps = {
  slug: string;
  children: ReactNode;
};

export function ToolRoutePage({ slug, children }: ToolRoutePageProps) {
  const tool = getToolOrThrow(slug);

  const relatedTools = tool.relatedSlugs
    .map((relatedSlug) => tools.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof tools)[number] => Boolean(item));

  const webPageSchema = buildStructuredData({
    type: "WebPage",
    title: tool.name,
    description: tool.seoDescription,
    path: `/${tool.slug}`
  });

  const faqSchema = buildFaqStructuredData(tool);

  return (
    <>
      <StructuredData data={webPageSchema} />
      <StructuredData data={faqSchema} />
      <ToolPageLayout tool={tool} relatedTools={relatedTools}>
        {children}
      </ToolPageLayout>
    </>
  );
}

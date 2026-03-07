import { getToolBySlug } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";

export function getToolOrThrow(slug: string) {
  const tool = getToolBySlug(slug);

  if (!tool) {
    throw new Error(`Tool configuration missing: ${slug}`);
  }

  return tool;
}

export function buildToolMetadata(slug: string) {
  const tool = getToolOrThrow(slug);

  return buildMetadata({
    title: tool.seoTitle,
    description: tool.seoDescription,
    path: `/${tool.slug}`,
    keywords: tool.keywords
  });
}

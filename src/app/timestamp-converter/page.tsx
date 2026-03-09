import { SeoLandingToolPage } from "@/components/tool/SeoLandingToolPage";
import { getSeoLandingToolOrThrow } from "@/config/seo-landing-tools";
import { buildMetadata } from "@/lib/seo/metadata";

const tool = getSeoLandingToolOrThrow("timestamp-converter");

export const metadata = buildMetadata({
  title: tool.title,
  description: tool.description,
  path: `/${tool.slug}`,
  keywords: [tool.keyword]
});

export default function TimestampConverterPage() {
  return <SeoLandingToolPage tool={tool} />;
}

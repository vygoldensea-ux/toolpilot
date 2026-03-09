import { SeoLandingToolPage } from "@/components/tool/SeoLandingToolPage";
import { getSeoLandingToolOrThrow } from "@/config/seo-landing-tools";
import { buildMetadata } from "@/lib/seo/metadata";

const tool = getSeoLandingToolOrThrow("yaml-to-json");

export const metadata = buildMetadata({
  title: tool.title,
  description: tool.description,
  path: `/${tool.slug}`,
  keywords: [tool.keyword]
});

export default function YamlToJsonPage() {
  return <SeoLandingToolPage tool={tool} />;
}

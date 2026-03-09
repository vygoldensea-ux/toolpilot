import { SeoLandingToolPage } from "@/components/tool/SeoLandingToolPage";
import { getSeoLandingToolOrThrow } from "@/config/seo-landing-tools";
import { buildMetadata } from "@/lib/seo/metadata";

const tool = getSeoLandingToolOrThrow("json-to-csv");

export const metadata = buildMetadata({
  title: tool.title,
  description: tool.description,
  path: `/${tool.slug}`,
  keywords: [tool.keyword]
});

export default function JsonToCsvPage() {
  return <SeoLandingToolPage tool={tool} />;
}

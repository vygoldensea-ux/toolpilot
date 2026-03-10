import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { HtaccessGeneratorTool } from "@/components/tools/HtaccessGeneratorTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "htaccess-generator";
export const metadata = buildToolMetadata(slug);

export default function HtaccessGeneratorPage() {
  return <ToolRoutePage slug={slug}><HtaccessGeneratorTool /></ToolRoutePage>;
}

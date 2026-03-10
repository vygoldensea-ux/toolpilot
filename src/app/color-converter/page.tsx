import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { ColorConverterTool } from "@/components/tools/ColorConverterTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "color-converter";
export const metadata = buildToolMetadata(slug);

export default function ColorConverterPage() {
  return <ToolRoutePage slug={slug}><ColorConverterTool /></ToolRoutePage>;
}

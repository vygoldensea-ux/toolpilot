import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { RandomStringGeneratorTool } from "@/components/tools/RandomStringGeneratorTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "random-string-generator";
export const metadata = buildToolMetadata(slug);

export default function RandomStringGeneratorPage() {
  return <ToolRoutePage slug={slug}><RandomStringGeneratorTool /></ToolRoutePage>;
}

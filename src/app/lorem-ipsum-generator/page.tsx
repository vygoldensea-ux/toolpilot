import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { LoremIpsumGeneratorTool } from "@/components/tools/LoremIpsumGeneratorTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "lorem-ipsum-generator";
export const metadata = buildToolMetadata(slug);

export default function LoremIpsumGeneratorPage() {
  return <ToolRoutePage slug={slug}><LoremIpsumGeneratorTool /></ToolRoutePage>;
}

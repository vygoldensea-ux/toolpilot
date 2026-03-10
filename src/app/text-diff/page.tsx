import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { TextDiffTool } from "@/components/tools/TextDiffTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "text-diff";
export const metadata = buildToolMetadata(slug);

export default function TextDiffPage() {
  return <ToolRoutePage slug={slug}><TextDiffTool /></ToolRoutePage>;
}

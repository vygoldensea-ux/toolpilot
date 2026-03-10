import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { MarkdownPreviewTool } from "@/components/tools/MarkdownPreviewTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "markdown-preview";
export const metadata = buildToolMetadata(slug);

export default function MarkdownPreviewPage() {
  return <ToolRoutePage slug={slug}><MarkdownPreviewTool /></ToolRoutePage>;
}

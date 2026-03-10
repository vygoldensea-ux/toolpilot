import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { UrlParserTool } from "@/components/tools/UrlParserTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "url-parser";
export const metadata = buildToolMetadata(slug);

export default function UrlParserPage() {
  return <ToolRoutePage slug={slug}><UrlParserTool /></ToolRoutePage>;
}

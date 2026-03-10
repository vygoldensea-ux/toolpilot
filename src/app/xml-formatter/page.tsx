import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { XmlFormatterTool } from "@/components/tools/XmlFormatterTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "xml-formatter";
export const metadata = buildToolMetadata(slug);

export default function XmlFormatterPage() {
  return <ToolRoutePage slug={slug}><XmlFormatterTool /></ToolRoutePage>;
}

import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { JsonFormatterTool } from "@/components/tools/JsonFormatterTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "json-formatter";

export const metadata = buildToolMetadata(slug);

export default function JsonFormatterPage() {
  return (
    <ToolRoutePage slug={slug}>
      <JsonFormatterTool />
    </ToolRoutePage>
  );
}

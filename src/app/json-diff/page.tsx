import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { JsonDiffTool } from "@/components/tools/JsonDiffTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "json-diff";

export const metadata = buildToolMetadata(slug);

export default function JsonDiffPage() {
  return (
    <ToolRoutePage slug={slug}>
      <JsonDiffTool />
    </ToolRoutePage>
  );
}

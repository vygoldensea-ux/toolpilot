import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { JsonToCSharpTool } from "@/components/tools/JsonToCSharpTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "json-to-csharp";

export const metadata = buildToolMetadata(slug);

export default function JsonToCSharpPage() {
  return (
    <ToolRoutePage slug={slug}>
      <JsonToCSharpTool />
    </ToolRoutePage>
  );
}

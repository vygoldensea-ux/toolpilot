import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { UuidGeneratorTool } from "@/components/tools/UuidGeneratorTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "uuid-generator";

export const metadata = buildToolMetadata(slug);

export default function UuidGeneratorPage() {
  return (
    <ToolRoutePage slug={slug}>
      <UuidGeneratorTool />
    </ToolRoutePage>
  );
}

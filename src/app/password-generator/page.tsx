import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { PasswordGeneratorTool } from "@/components/tools/PasswordGeneratorTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "password-generator";

export const metadata = buildToolMetadata(slug);

export default function PasswordGeneratorPage() {
  return (
    <ToolRoutePage slug={slug}>
      <PasswordGeneratorTool />
    </ToolRoutePage>
  );
}

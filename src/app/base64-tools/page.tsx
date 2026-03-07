import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { Base64Tool } from "@/components/tools/Base64Tool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "base64-tools";

export const metadata = buildToolMetadata(slug);

export default function Base64ToolsPage() {
  return (
    <ToolRoutePage slug={slug}>
      <Base64Tool />
    </ToolRoutePage>
  );
}

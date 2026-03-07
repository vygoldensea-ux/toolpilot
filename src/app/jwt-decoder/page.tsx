import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { JwtDecoderTool } from "@/components/tools/JwtDecoderTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "jwt-decoder";

export const metadata = buildToolMetadata(slug);

export default function JwtDecoderPage() {
  return (
    <ToolRoutePage slug={slug}>
      <JwtDecoderTool />
    </ToolRoutePage>
  );
}

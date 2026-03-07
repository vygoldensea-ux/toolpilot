import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { CronGeneratorTool } from "@/components/tools/CronGeneratorTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "cron-generator";

export const metadata = buildToolMetadata(slug);

export default function CronGeneratorPage() {
  return (
    <ToolRoutePage slug={slug}>
      <CronGeneratorTool />
    </ToolRoutePage>
  );
}

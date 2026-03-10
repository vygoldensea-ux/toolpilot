import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { JsonValidatorTool } from "@/components/tools/JsonValidatorTool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "json-validator";
export const metadata = buildToolMetadata(slug);

export default function JsonValidatorPage() {
  return <ToolRoutePage slug={slug}><JsonValidatorTool /></ToolRoutePage>;
}

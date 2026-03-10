import { ToolRoutePage } from "@/components/tool/ToolRoutePage";
import { ImageToBase64Tool } from "@/components/tools/ImageToBase64Tool";
import { buildToolMetadata } from "@/lib/tools";

const slug = "image-to-base64";
export const metadata = buildToolMetadata(slug);

export default function ImageToBase64Page() {
  return <ToolRoutePage slug={slug}><ImageToBase64Tool /></ToolRoutePage>;
}

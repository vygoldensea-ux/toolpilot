import { PlannedToolPage } from "@/components/tool/PlannedToolPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "URL Encode / Decode",
  description: "URL encode and decode route prepared for upcoming ToolPilot launch phases.",
  path: "/url-encode-decode",
  keywords: ["url encode decode", "url encoder decoder"]
});

export default function UrlEncodeDecodePage() {
  return (
    <PlannedToolPage
      title="URL Encode / Decode"
      description="Encode and decode URL-safe values for query strings, callbacks, and API integrations."
    />
  );
}

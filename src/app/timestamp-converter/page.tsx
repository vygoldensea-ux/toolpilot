import { PlannedToolPage } from "@/components/tool/PlannedToolPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Timestamp Converter",
  description: "Timestamp converter route prepared for upcoming ToolPilot launch phases.",
  path: "/timestamp-converter",
  keywords: ["timestamp converter", "unix timestamp converter"]
});

export default function TimestampConverterPage() {
  return (
    <PlannedToolPage
      title="Timestamp Converter"
      description="Convert Unix timestamps to readable dates and convert readable dates back to Unix time."
    />
  );
}

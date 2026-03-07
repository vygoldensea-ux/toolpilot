import { PlannedToolPage } from "@/components/tool/PlannedToolPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Regex Tester",
  description: "Regex tester route prepared for upcoming ToolPilot launch phases.",
  path: "/regex-tester",
  keywords: ["regex tester", "regular expression tester"]
});

export default function RegexTesterPage() {
  return (
    <PlannedToolPage
      title="Regex Tester"
      description="Test regular expressions with instant match feedback and capture group visibility."
    />
  );
}

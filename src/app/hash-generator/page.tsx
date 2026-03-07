import { PlannedToolPage } from "@/components/tool/PlannedToolPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Hash Generator",
  description: "Hash generator route prepared for upcoming ToolPilot launch phases.",
  path: "/hash-generator",
  keywords: ["hash generator", "sha256 generator"]
});

export default function HashGeneratorPage() {
  return (
    <PlannedToolPage
      title="Hash Generator"
      description="Generate MD5, SHA-1, and SHA-256 hashes for development, testing, and verification."
    />
  );
}

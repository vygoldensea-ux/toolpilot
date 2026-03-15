import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "ToolPilot privacy policy and data handling practices.",
  path: "/privacy",
  keywords: ["toolpilot privacy", "developer tools privacy"]
});

export default function PrivacyPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">Privacy Policy</h1>
        <div className="tp-panel mt-8 space-y-6 p-7 text-sm leading-8 text-[#666b86] sm:p-10">
          <p>ToolPilot is designed with privacy in mind.</p>
          <p>
            Many tools on this website process data directly in the browser, meaning your input is not
            transmitted to external servers.
          </p>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Data Handling</h2>
            <p className="mt-4">When possible:</p>
            <ul className="mt-4 space-y-3">
              <li>• Input data stays inside the browser</li>
              <li>• Processing happens locally</li>
              <li>• No permanent storage occurs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Analytics</h2>
            <p className="mt-4">
              We may use analytics tools to understand website usage patterns. These analytics do not include
              the content users paste into developer tools.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Cookies</h2>
            <p className="mt-4">Basic cookies may be used for site functionality or analytics.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">User Responsibility</h2>
            <p className="mt-4">
              Users should avoid pasting sensitive production secrets, credentials, or private keys into any
              online tools.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

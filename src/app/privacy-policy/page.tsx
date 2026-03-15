import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "ToolPilot privacy policy and data handling practices for developers.",
  path: "/privacy-policy",
  keywords: ["toolpilot privacy policy", "developer tools privacy"]
});

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2e295b] sm:text-5xl">Privacy Policy</h1>
        <div className="tp-panel mt-8 space-y-6 p-7 text-sm leading-8 text-[#666b86] sm:p-10">
          <p>ToolPilot is designed with developer privacy in mind.</p>
          <p>
            Many tools on this website process data locally in the browser whenever possible. This means
            that, in many cases, the content you paste into a tool is handled directly on your device rather
            than being sent to remote servers.
          </p>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Local Processing</h2>
            <p className="mt-4">Whenever possible:</p>
            <ul className="mt-4 space-y-3">
              <li>• input data stays inside the browser</li>
              <li>• processing happens locally on the device</li>
              <li>• data is not permanently stored by ToolPilot</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Analytics</h2>
            <p className="mt-4">
              We may use privacy-conscious analytics to understand site traffic, popular pages, and product
              usage patterns. These analytics are intended to measure overall site activity and do not exist
              to collect the technical data users paste into tools.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Cookies</h2>
            <p className="mt-4">
              Basic cookies or similar technologies may be used for site functionality, performance
              measurement, or analytics.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">User Responsibility</h2>
            <p className="mt-4">
              Users should avoid pasting sensitive credentials, private keys, production secrets, regulated
              personal data, or confidential business information into any online tools.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Third-party services</h2>
            <p className="mt-4">
              Some parts of the site may rely on third-party infrastructure such as hosting, analytics, or
              performance monitoring providers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2e295b]">Policy updates</h2>
            <p className="mt-4">
              This policy may be updated as the website evolves. Updated versions will be published on this
              page.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

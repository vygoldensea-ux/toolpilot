import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M18.244 2H21.5l-7.112 8.13L22.75 22h-6.55l-5.13-6.7L5.2 22H1.94l7.607-8.69L1.5 2h6.72l4.63 6.1L18.244 2Zm-1.14 18.06h1.8L7.2 3.84H5.27l11.834 16.22Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#efe9ff] bg-white/70 backdrop-blur-sm">
      <Container>
        <div className="grid gap-8 py-10 text-sm text-[#6a6e86] md:grid-cols-[1fr_auto_auto] md:items-start">
          <div className="space-y-2">
            <p>© {new Date().getFullYear()} {siteConfig.name}. Developer tools, built with clarity.</p>
            <p>
              Powered by{" "}
              <a href="https://goldenseastudios.com" className="text-[#3b356f] transition hover:text-brand-700">
                Goldensea Studios
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="transition hover:text-brand-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-brand-700">
              Terms
            </Link>
            <Link href="/about" className="transition hover:text-brand-700">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-brand-700">
              Contact
            </Link>
            <Link href="/site-faq" className="transition hover:text-brand-700">
              Site FAQ
            </Link>
            <Link href="/editorial-standards" className="transition hover:text-brand-700">
              Editorial Standards
            </Link>
            <Link href="/changelog" className="transition hover:text-brand-700">
              Changelog
            </Link>
            <Link href="/how-toolpilot-works" className="transition hover:text-brand-700">
              How ToolPilot Works
            </Link>
            <Link href="/blog" className="transition hover:text-brand-700">
              Blog
            </Link>
          </div>

          <div>
            <p className="font-medium text-[#2e295b]">Founder</p>
            <p className="mt-2">Founder: Jade Truong</p>
            <a
              href="https://x.com/JadeTruong3107"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Founder on X"
              className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-200 bg-white/80 text-[#66688a] transition hover:border-brand-300 hover:text-brand-700"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

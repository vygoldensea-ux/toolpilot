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

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-4">
            <nav aria-label="Primary navigation" className="flex items-center gap-6 text-sm text-slate-600">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href="https://x.com/JadeTruong3107"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Founder on X"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

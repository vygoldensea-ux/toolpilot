import Image from "next/image";
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
    <header className="bg-transparent">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-[#312a63]">
            <Image src="/logo.png" alt="" width={34} height={34} className="h-8 w-8 rounded-xl" priority />
            <span>{siteConfig.name}</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav aria-label="Primary navigation" className="flex items-center gap-6 text-sm text-[#5f6180]">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-brand-700">
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href="https://x.com/JadeTruong3107"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Founder on X"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-200 bg-white/80 text-[#66688a] transition hover:border-brand-300 hover:text-brand-700"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

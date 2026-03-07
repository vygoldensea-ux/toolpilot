import type { PropsWithChildren } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

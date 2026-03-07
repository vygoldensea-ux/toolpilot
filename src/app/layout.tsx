import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} | Developer Tools`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Developer Tools`,
    description: siteConfig.description,
    images: [siteConfig.social.ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Developer Tools`,
    description: siteConfig.description,
    images: [siteConfig.social.ogImage]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="3NY1dMlvXAyhY3dDd3eb2CXETx6MH2mg8jf3TmcjBcw"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3600965442508079"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <AnalyticsScripts />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

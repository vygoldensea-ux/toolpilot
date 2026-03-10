import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { GaPageViewTracker } from "@/components/analytics/GaPageViewTracker";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { siteConfig } from "@/config/site";

const GA_MEASUREMENT_ID = "G-FEHKDV6VYG";

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
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }]
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
        <Script
          id="ga-script"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });`}
        </Script>
        <Script
          id="adsense-script"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3600965442508079"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <GaPageViewTracker measurementId={GA_MEASUREMENT_ID} />
        <AnalyticsScripts />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

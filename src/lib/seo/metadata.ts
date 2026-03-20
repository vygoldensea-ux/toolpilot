import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

function toCanonical(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.baseUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: BuildMetadataInput): Metadata {
  const canonical = toCanonical(path);
  const normalizedTitle = title.replace(new RegExp(`\\s*\\|\\s*${siteConfig.name}$`), "").trim();
  const fullTitle = normalizedTitle === siteConfig.name ? siteConfig.name : `${normalizedTitle} | ${siteConfig.name}`;

  return {
    title: {
      absolute: fullTitle
    },
    description,
    keywords,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.social.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.social.ogImage]
    }
  };
}

export { toCanonical };

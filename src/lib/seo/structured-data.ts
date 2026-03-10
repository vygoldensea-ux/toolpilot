import type { ToolDefinition } from "@/config/site";
import { siteConfig } from "@/config/site";
import { toCanonical } from "./metadata";

export type StructuredDataType = "WebPage" | "SoftwareApplication" | "Organization";

export function buildStructuredData(args: {
  type: StructuredDataType;
  title: string;
  description: string;
  path: string;
  logoUrl?: string;
  absoluteUrl?: string;
}) {
  const url = toCanonical(args.path);

  if (args.type === "Organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: args.title,
      description: args.description,
      url: args.absoluteUrl ?? siteConfig.baseUrl,
      logo: args.logoUrl ?? `${siteConfig.baseUrl}/logo.png`
    };
  }

  if (args.type === "SoftwareApplication") {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: args.title,
      description: args.description,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.baseUrl
      }
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: args.title,
    description: args.description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.baseUrl
    }
  };
}

export function buildFaqStructuredData(tool: ToolDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildFaqStructuredDataFromFaqs(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

import type { MetadataRoute } from "next";
import { siteConfig, tools } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "about",
    "contact",
    "privacy-policy",
    "terms",
    "sitemap",
    ...tools.map((tool) => tool.slug)
  ];

  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}/${route}`.replace(/\/$/, "") || siteConfig.baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}

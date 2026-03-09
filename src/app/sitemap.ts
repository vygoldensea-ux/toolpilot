import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/json-formatter",
    "/base64-tools",
    "/uuid-generator",
    "/jwt-decoder",
    "/cron-generator"
  ];

  return routes.map((route) => ({
    url: new URL(route, siteConfig.baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8
  }));
}

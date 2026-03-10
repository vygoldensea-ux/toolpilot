import type { MetadataRoute } from "next";
import { liveToolRegistry, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/contact", "/privacy-policy", "/privacy", "/terms", "/disclaimer", "/sitemap"];
  const toolRoutes = liveToolRegistry.map((tool) => `/${tool.slug}`);
  const routes = Array.from(new Set([...staticRoutes, ...toolRoutes]));

  return routes.map((route) => ({
    url: new URL(route, siteConfig.baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8
  }));
}

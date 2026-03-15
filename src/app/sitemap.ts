import type { MetadataRoute } from "next";
import { allBlogSlugs } from "@/config/blog";
import { guides } from "@/config/guides";
import { liveToolRegistry, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/privacy-policy",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/sitemap",
    "/site-faq",
    "/changelog",
    "/editorial-standards",
    "/how-toolpilot-works",
    "/guides",
    "/blog"
  ];
  const toolRoutes = liveToolRegistry.map((tool) => `/${tool.slug}`);
  const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
  const blogRoutes = allBlogSlugs.map((slug) => `/blog/${slug}`);
  const routes = Array.from(new Set([...staticRoutes, ...toolRoutes, ...guideRoutes, ...blogRoutes]));

  return routes.map((route) => ({
    url: new URL(route, siteConfig.baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8
  }));
}

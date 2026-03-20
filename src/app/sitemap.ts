import type { MetadataRoute } from "next";
import { blogPosts } from "@/config/blog";
import { liveToolRegistry, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homepageRoute = ["/"];
  const trustRoutes = [
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/site-faq",
    "/changelog",
    "/editorial-standards",
    "/how-toolpilot-works"
  ];
  const utilityRoutes = ["/sitemap"];
  const editorialRoutes = ["/blog"];
  const toolRoutes = liveToolRegistry.map((tool) => `/${tool.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const routes = Array.from(
    new Set([...homepageRoute, ...trustRoutes, ...utilityRoutes, ...editorialRoutes, ...toolRoutes, ...blogRoutes])
  );

  return routes.map((route) => {
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";
    let priority = 0.8;

    if (route === "/") {
      changeFrequency = "weekly";
      priority = 1;
    } else if (toolRoutes.includes(route)) {
      changeFrequency = "monthly";
      priority = 0.9;
    } else if (route === "/blog") {
      changeFrequency = "weekly";
      priority = 0.8;
    } else if (blogRoutes.includes(route)) {
      changeFrequency = "monthly";
      priority = 0.7;
    } else if (trustRoutes.includes(route)) {
      changeFrequency = "yearly";
      priority = 0.5;
    } else if (route === "/sitemap") {
      changeFrequency = "monthly";
      priority = 0.4;
    }

    return {
      url: new URL(route, siteConfig.baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency,
      priority
    };
  });
}

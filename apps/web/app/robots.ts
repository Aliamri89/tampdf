import type { MetadataRoute } from "next";
import { siteConfig } from "@tampdf/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/amriadmin"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

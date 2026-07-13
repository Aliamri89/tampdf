import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  transpilePackages: ["@tampdf/config"],
  // Hostinger's deployment environment (and some other setups) can end up
  // with a second, stale package-lock.json sitting above this monorepo's
  // real root (e.g. a duplicated/legacy checkout in public_html alongside
  // the actual build checkout). Turbopack's automatic workspace-root
  // inference picks whichever lockfile it finds first walking up the tree,
  // which can silently select the wrong root and misplace build output.
  // Pin it explicitly: apps/web -> apps -> repo root.
  turbopack: {
    root: path.join(dirname, "..", ".."),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Belt-and-suspenders alongside robots.txt: this actually prevents
        // indexing (robots.txt only requests crawlers not to crawl, which
        // doesn't stop a page from being indexed if linked from elsewhere).
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });

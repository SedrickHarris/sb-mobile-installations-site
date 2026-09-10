import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages. See 17-cloudflare-deployment.md.
  output: "export",
  // Static export cannot use the Next.js image optimizer.
  images: { unoptimized: true },
  // Cloudflare Pages serves directory-style URLs; the URL strategy uses
  // trailing slashes. See 08-url-strategy.md.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;

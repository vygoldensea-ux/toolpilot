import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "toolpilot.xyz"
          }
        ],
        destination: "https://www.toolpilot.xyz/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

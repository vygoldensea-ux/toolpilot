import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true
      },
      {
        source: "/blog/how-to-format-json-for-debugging-apis",
        destination: "/blog/how-to-format-json-for-api-debugging",
        permanent: true
      },
      {
        source: "/blog/how-to-debug-apis-using-json-tools",
        destination: "/blog/debugging-apis-using-json-tools",
        permanent: true
      },
      {
        source: "/blog/json-debug-for-developers",
        destination: "/blog/json-debug-online",
        permanent: true
      },
      {
        source: "/blog/regex-online-for-developers",
        destination: "/blog/regex-online-tester",
        permanent: true
      },
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

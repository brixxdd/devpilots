import type { NextConfig } from "next";

// Umami's script can be served from a different host/port depending on how
// it's proxied (see README) — read the real origin at build time instead of
// hardcoding it, so CSP doesn't silently break analytics after a redeploy.
function umamiOrigin(): string | null {
  const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  if (!scriptUrl) return null;
  try {
    return new URL(scriptUrl).origin;
  } catch {
    return null;
  }
}

function buildCsp(): string {
  const umami = umamiOrigin();
  const scriptSrc = ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com", "https://connect.facebook.net"];
  const connectSrc = ["'self'", "https://www.google-analytics.com", "https://www.facebook.com"];
  if (umami) {
    scriptSrc.push(umami);
    connectSrc.push(umami);
  }

  return [
    `default-src 'self'`,
    `script-src ${scriptSrc.join(" ")}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: https://www.facebook.com`,
    `font-src 'self' data:`,
    `connect-src ${connectSrc.join(" ")}`,
    `frame-ancestors 'self'`,
    `base-uri 'self'`,
    `form-action 'self'`,
  ].join("; ");
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: buildCsp() },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, resolveLocale } from "@/i18n/routing";
import { siteConfig, buildMetadata } from "@/lib/seo";
import { CookieConsentBanner } from "@/components/CookieConsent";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);

  return {
    metadataBase: new URL(siteConfig.url),
    ...buildMetadata({
      title: siteConfig.defaultTitle[locale],
      description: siteConfig.defaultDescription[locale],
      path: "/",
      locale,
    }),
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/assets-devpilots-logo-removebg-preview.png", type: "image/png", sizes: "254x256" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/site.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: "#062B49",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets-devpilots-logo.png`,
    image: `${siteConfig.url}${siteConfig.defaultImage.url}`,
    telephone: "+529626002508",
    inLanguage: locale,
    areaServed: [
      { "@type": "City", name: "Tapachula" },
      { "@type": "Country", name: "Guatemala" },
      { "@type": "AdministrativeArea", name: "Chiquimula" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tapachula",
      addressRegion: "Chiapas",
      addressCountry: "MX",
    },
    sameAs: [
      "https://www.instagram.com/dev_pilots25",
    ],
    serviceType: [
      "Desarrollo web",
      "Desarrollo de software",
      "Automatización",
      "Punto de venta",
      "Marketing digital",
    ],
  };

  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;

  return (
    <html lang={locale} className={`${sora.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NextIntlClientProvider>
          {children}
          <CookieConsentBanner />
        </NextIntlClientProvider>
        {umamiWebsiteId && umamiScriptUrl ? (
          <Script
            src={umamiScriptUrl}
            data-website-id={umamiWebsiteId}
            strategy="afterInteractive"
          />
        ) : null}
        <AnalyticsScripts />
      </body>
    </html>
  );
}

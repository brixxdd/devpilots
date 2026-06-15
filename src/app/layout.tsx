import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://devpilots.duckdns.org"),
  title: "DevPilots | Desarrollo web, marketing y automatización en Tapachula",
  description:
    "DevPilots crea páginas web, sistemas, automatizaciones y estrategias digitales para negocios locales, gimnasios, consultorios, marcas personales y emprendedores en Tapachula y remoto.",
  icons: {
    icon: [
      { url: "/assets-devpilots-logo-removebg-preview.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets-devpilots-logo-removebg-preview.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "DevPilots | Desarrollo web, marketing y automatización en Tapachula",
    description:
      "DevPilots crea páginas web, sistemas, automatizaciones y estrategias digitales para negocios locales, gimnasios, consultorios, marcas personales y emprendedores en Tapachula y remoto.",
    images: ["/og-devpilots.png"],
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DevPilots",
  url: "https://devpilots.duckdns.org",
  logo: "https://devpilots.duckdns.org/assets-devpilots-logo.png",
  telephone: "+529626002508",
  areaServed: {
    "@type": "City",
    name: "Tapachula",
  },
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;

  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        {umamiWebsiteId && umamiScriptUrl ? (
          <Script
            src={umamiScriptUrl}
            data-website-id={umamiWebsiteId}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}

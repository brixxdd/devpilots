import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

export const siteConfig = {
  url: "https://devpilots.dev",
  name: "DevPilots",
  ogLocales: {
    es: "es_MX",
    en: "en_US",
  } as const,
  defaultTitle: {
    es: "DevPilots | Web y software en Tapachula y Guatemala",
    en: "DevPilots | Web & Software in Tapachula and Guatemala",
  },
  defaultDescription: {
    es: "Páginas web, sistemas y automatización de WhatsApp para negocios en Tapachula y la zona fronteriza con Guatemala (Chiquimula, Esquipulas), y de forma remota.",
    en: "Websites, systems and WhatsApp automation for businesses in Tapachula and the Guatemala border area (Chiquimula, Esquipulas), and remotely.",
  },
  defaultImage: {
    url: "/og-devpilots.jpg",
    width: 1200,
    height: 630,
    type: "image/jpeg" as const,
    alt: "DevPilots: tecnología y marketing para negocios que quieren crecer",
  },
};

/**
 * Next.js metadata objects don't deep-merge across layout/page — a page that
 * declares its own `openGraph` replaces the root layout's entirely (dropping
 * the image) and inherits the parent's `alternates.canonical` if it declares
 * none. This helper fills in every field explicitly so each page ends up
 * with a correct, self-contained canonical + OG + Twitter block, plus
 * hreflang alternates across the two locales.
 */
export function buildMetadata({
  title,
  description,
  path,
  locale,
  image,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const ogImage = image ?? siteConfig.defaultImage;
  const canonicalPath = getPathname({ href: path, locale });
  const url = `${siteConfig.url}${canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        es: getPathname({ href: path, locale: "es" }),
        en: getPathname({ href: path, locale: "en" }),
        "x-default": getPathname({ href: path, locale: "es" }),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.ogLocales[locale],
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      site: "@dev_pilots25",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

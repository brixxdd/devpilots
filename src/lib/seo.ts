import type { Metadata } from "next";

export const siteConfig = {
  url: "https://devpilots.dev",
  name: "DevPilots",
  locale: "es_MX",
  defaultTitle: "DevPilots | Desarrollo web y software en Tapachula y Guatemala",
  defaultDescription:
    "Páginas web, sistemas y automatización de WhatsApp para negocios en Tapachula y la zona fronteriza con Guatemala (Chiquimula, Esquipulas), y de forma remota.",
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
 * with a correct, self-contained canonical + OG + Twitter block.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const ogImage = image ?? siteConfig.defaultImage;
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

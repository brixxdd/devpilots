import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { getPathname } from "@/i18n/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/servicios/desarrollo-web-tapachula", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/paginas-web-tapachula", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/sistemas-para-negocios", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/automatizacion-whatsapp", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/punto-de-venta-tapachula", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/software-para-gimnasios", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/desarrollo-software-guatemala", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/privacidad", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terminos", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/cookies", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes.flatMap((route) => {
    const esPath = getPathname({ href: route.path, locale: "es" });
    const enPath = getPathname({ href: route.path, locale: "en" });
    const alternates = {
      languages: {
        es: `${baseUrl}${esPath}`,
        en: `${baseUrl}${enPath}`,
      },
    };

    return [
      {
        url: `${baseUrl}${esPath}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates,
      },
      {
        url: `${baseUrl}${enPath}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority * 0.9,
        alternates,
      },
    ];
  });
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/servicios/desarrollo-web-tapachula", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/paginas-web-tapachula", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/sistemas-para-negocios", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/automatizacion-whatsapp", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/punto-de-venta-tapachula", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/software-para-gimnasios", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/privacidad", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terminos", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/cookies", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

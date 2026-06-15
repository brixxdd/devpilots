import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devpilots.duckdns.org";

  const routes = [
    "",
    "/servicios/desarrollo-web-tapachula",
    "/servicios/paginas-web-tapachula",
    "/servicios/sistemas-para-negocios",
    "/servicios/automatizacion-whatsapp",
    "/servicios/punto-de-venta-tapachula",
    "/servicios/software-para-gimnasios",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

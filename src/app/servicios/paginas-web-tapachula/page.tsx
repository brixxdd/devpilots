import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Diseño y desarrollo de páginas web en Tapachula | DevPilots",
  description:
    "Creamos páginas web profesionales para negocios, consultorios y gimnasios en Tapachula, Chiapas. Sitios rápidos y optimizados para Google.",
  path: "/servicios/paginas-web-tapachula",
});

export default function PaginasWebPage() {
  const data = servicesData["paginas-web-tapachula"];
  return <ServicePageTemplate data={data} />;
}

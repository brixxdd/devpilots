import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sistemas web para negocios en Tapachula | DevPilots",
  description:
    "Digitaliza tu negocio. Diseñamos sistemas de gestión comercial, clientes, facturación y finanzas en Tapachula y todo Chiapas. Cero hojas de Excel complejas.",
  path: "/servicios/sistemas-para-negocios",
});

export default function SistemasNegociosPage() {
  const data = servicesData["sistemas-para-negocios"];
  return <ServicePageTemplate data={data} />;
}

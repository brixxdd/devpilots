import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Sistemas web administrativos para negocios en Tapachula | DevPilots",
  description: "Digitaliza tu negocio. Diseñamos sistemas de gestión comercial, clientes, facturación y finanzas en Tapachula y todo Chiapas. Cero hojas de Excel complejas.",
  openGraph: {
    title: "Sistemas web administrativos para negocios en Tapachula | DevPilots",
    description: "Digitaliza tu negocio. Diseñamos sistemas de gestión comercial, clientes, facturación y finanzas en Tapachula y todo Chiapas. Cero hojas de Excel complejas.",
    type: "website",
  },
};

export default function SistemasNegociosPage() {
  const data = servicesData["sistemas-para-negocios"];
  return <ServicePageTemplate data={data} />;
}

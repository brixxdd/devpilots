import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Desarrollo web a la medida en Tapachula | DevPilots",
  description: "Desarrollamos plataformas web, aplicaciones y sistemas a la medida para empresas y negocios en Tapachula, Chiapas. Código rápido, seguro y escalable.",
  openGraph: {
    title: "Desarrollo web a la medida en Tapachula | DevPilots",
    description: "Desarrollamos plataformas web, aplicaciones y sistemas a la medida para empresas y negocios en Tapachula, Chiapas. Código rápido, seguro y escalable.",
    type: "website",
  },
};

export default function DesarrolloWebPage() {
  const data = servicesData["desarrollo-web-tapachula"];
  return <ServicePageTemplate data={data} />;
}

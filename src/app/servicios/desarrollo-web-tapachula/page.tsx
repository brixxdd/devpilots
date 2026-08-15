import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Desarrollo web a la medida en Tapachula | DevPilots",
  description:
    "Desarrollamos plataformas web, aplicaciones y sistemas a la medida para empresas y negocios en Tapachula, Chiapas. Código rápido, seguro y escalable.",
  path: "/servicios/desarrollo-web-tapachula",
});

export default function DesarrolloWebPage() {
  const data = servicesData["desarrollo-web-tapachula"];
  return <ServicePageTemplate data={data} />;
}

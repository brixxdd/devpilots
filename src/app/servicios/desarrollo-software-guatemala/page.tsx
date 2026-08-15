import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Desarrollo de software en Guatemala | DevPilots",
  description:
    "Páginas web, sistemas y automatización de WhatsApp para negocios en Guatemala: Chiquimula, Esquipulas y Concepción Las Minas. Atención remota desde la frontera.",
  path: "/servicios/desarrollo-software-guatemala",
});

export default function DesarrolloSoftwareGuatemalaPage() {
  const data = servicesData["desarrollo-software-guatemala"];
  return <ServicePageTemplate data={data} />;
}

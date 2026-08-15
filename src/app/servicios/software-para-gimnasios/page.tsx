import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Software para gimnasios en Tapachula | DevPilots",
  description:
    "Control de accesos (QR/Huella), membresías, vencimientos y recordatorios automáticos por WhatsApp para gimnasios y estudios fitness en Tapachula, Chiapas.",
  path: "/servicios/software-para-gimnasios",
});

export default function SoftwareGimnasiosPage() {
  const data = servicesData["software-para-gimnasios"];
  return <ServicePageTemplate data={data} />;
}

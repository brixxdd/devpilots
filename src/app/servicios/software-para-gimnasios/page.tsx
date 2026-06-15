import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Software de administración para gimnasios en Tapachula | DevPilots",
  description: "Control de accesos (QR/Huella), membresías, vencimientos y recordatorios automáticos por WhatsApp para gimnasios y estudios fitness en Tapachula, Chiapas.",
  openGraph: {
    title: "Software de administración para gimnasios en Tapachula | DevPilots",
    description: "Control de accesos (QR/Huella), membresías, vencimientos y recordatorios automáticos por WhatsApp para gimnasios y estudios fitness en Tapachula, Chiapas.",
    type: "website",
  },
};

export default function SoftwareGimnasiosPage() {
  const data = servicesData["software-para-gimnasios"];
  return <ServicePageTemplate data={data} />;
}

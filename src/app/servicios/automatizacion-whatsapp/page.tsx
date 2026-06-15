import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Automatización de WhatsApp y chatbots para negocios en Tapachula | DevPilots",
  description: "Atiende a tus clientes las 24 horas. Creamos flujos automatizados de WhatsApp, chatbots interactivos y recordatorios automáticos de pago en Tapachula.",
  openGraph: {
    title: "Automatización de WhatsApp y chatbots para negocios en Tapachula | DevPilots",
    description: "Atiende a tus clientes las 24 horas. Creamos flujos automatizados de WhatsApp, chatbots interactivos y recordatorios automáticos de pago en Tapachula.",
    type: "website",
  },
};

export default function AutomatizacionWhatsappPage() {
  const data = servicesData["automatizacion-whatsapp"];
  return <ServicePageTemplate data={data} />;
}

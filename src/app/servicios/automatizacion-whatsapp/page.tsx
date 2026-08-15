import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Automatización de WhatsApp en Tapachula | DevPilots",
  description:
    "Atiende a tus clientes las 24 horas. Creamos flujos automatizados de WhatsApp, chatbots interactivos y recordatorios automáticos de pago en Tapachula.",
  path: "/servicios/automatizacion-whatsapp",
});

export default function AutomatizacionWhatsappPage() {
  const data = servicesData["automatizacion-whatsapp"];
  return <ServicePageTemplate data={data} />;
}

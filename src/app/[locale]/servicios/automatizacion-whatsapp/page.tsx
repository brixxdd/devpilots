import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Automatización de WhatsApp en Tapachula | DevPilots",
    description:
      "Atiende a tus clientes las 24 horas. Creamos flujos automatizados de WhatsApp, chatbots interactivos y recordatorios automáticos de pago en Tapachula.",
  },
  en: {
    title: "WhatsApp Automation in Tapachula | DevPilots",
    description:
      "Serve your customers 24/7. We build automated WhatsApp flows, interactive chatbots and automatic payment reminders in Tapachula.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/servicios/automatizacion-whatsapp", locale });
}

export default async function AutomatizacionWhatsappPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  const data = servicesData[locale]["automatizacion-whatsapp"];
  return <ServicePageTemplate data={data} />;
}

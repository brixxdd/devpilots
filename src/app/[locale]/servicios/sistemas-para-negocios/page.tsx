import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Sistemas web para negocios en Tapachula | DevPilots",
    description:
      "Digitaliza tu negocio. Diseñamos sistemas de gestión comercial, clientes, facturación y finanzas en Tapachula y todo Chiapas. Cero hojas de Excel complejas.",
  },
  en: {
    title: "Business Management Systems in Tapachula | DevPilots",
    description:
      "Digitize your business. We design customer management, invoicing and finance systems in Tapachula and all of Chiapas. No more complex spreadsheets.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/servicios/sistemas-para-negocios", locale });
}

export default async function SistemasNegociosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  const data = servicesData[locale]["sistemas-para-negocios"];
  return <ServicePageTemplate data={data} />;
}

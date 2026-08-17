import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Desarrollo de software en Guatemala | DevPilots",
    description:
      "Páginas web, sistemas y automatización de WhatsApp para negocios en Guatemala: Chiquimula, Esquipulas y Concepción Las Minas. Atención remota desde la frontera.",
  },
  en: {
    title: "Software Development in Guatemala | DevPilots",
    description:
      "Websites, systems and WhatsApp automation for businesses in Guatemala: Chiquimula, Esquipulas and Concepción Las Minas. Remote support from the border.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/servicios/desarrollo-software-guatemala", locale });
}

export default async function DesarrolloSoftwareGuatemalaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  const data = servicesData[locale]["desarrollo-software-guatemala"];
  return <ServicePageTemplate data={data} />;
}

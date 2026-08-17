import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Desarrollo web a la medida en Tapachula | DevPilots",
    description:
      "Desarrollamos plataformas web, aplicaciones y sistemas a la medida para empresas y negocios en Tapachula, Chiapas. Código rápido, seguro y escalable.",
  },
  en: {
    title: "Custom Web Development in Tapachula | DevPilots",
    description:
      "We build custom web platforms, applications and systems for companies and businesses in Tapachula, Chiapas. Fast, secure and scalable code.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/servicios/desarrollo-web-tapachula", locale });
}

export default async function DesarrolloWebPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  const data = servicesData[locale]["desarrollo-web-tapachula"];
  return <ServicePageTemplate data={data} />;
}

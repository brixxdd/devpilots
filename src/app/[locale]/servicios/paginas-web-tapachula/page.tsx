import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Diseño y desarrollo de páginas web en Tapachula | DevPilots",
    description:
      "Creamos páginas web profesionales para negocios, consultorios y gimnasios en Tapachula, Chiapas. Sitios rápidos y optimizados para Google.",
  },
  en: {
    title: "Website Design and Development in Tapachula | DevPilots",
    description:
      "We build professional websites for businesses, clinics and gyms in Tapachula, Chiapas. Fast sites optimized for Google.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/servicios/paginas-web-tapachula", locale });
}

export default async function PaginasWebPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  const data = servicesData[locale]["paginas-web-tapachula"];
  return <ServicePageTemplate data={data} />;
}

import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Sistema de punto de venta (POS) en Tapachula | DevPilots",
    description:
      "Evita pérdidas hormiga y controla tu inventario al 100%. Implementamos sistemas de punto de venta (POS) rápidos para comercios en Tapachula, Chiapas.",
  },
  en: {
    title: "Point of Sale (POS) System in Tapachula | DevPilots",
    description:
      "Stop small losses and control your inventory 100%. We implement fast point-of-sale (POS) systems for shops in Tapachula, Chiapas.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/servicios/punto-de-venta-tapachula", locale });
}

export default async function PuntoDeVentaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  const data = servicesData[locale]["punto-de-venta-tapachula"];
  return <ServicePageTemplate data={data} />;
}

import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sistema de punto de venta (POS) en Tapachula | DevPilots",
  description:
    "Evita pérdidas hormiga y controla tu inventario al 100%. Implementamos sistemas de punto de venta (POS) rápidos para comercios en Tapachula, Chiapas.",
  path: "/servicios/punto-de-venta-tapachula",
});

export default function PuntoDeVentaPage() {
  const data = servicesData["punto-de-venta-tapachula"];
  return <ServicePageTemplate data={data} />;
}

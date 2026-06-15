import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Sistemas de punto de venta e inventario en Tapachula | DevPilots",
  description: "Evita pérdidas hormiga y controla tu inventario al 100%. Implementamos sistemas de punto de venta (POS) rápidos y estables para comercios en Tapachula, Chiapas.",
  openGraph: {
    title: "Sistemas de punto de venta e inventario en Tapachula | DevPilots",
    description: "Evita pérdidas hormiga y controla tu inventario al 100%. Implementamos sistemas de punto de venta (POS) rápidos y estables para comercios en Tapachula, Chiapas.",
    type: "website",
  },
};

export default function PuntoDeVentaPage() {
  const data = servicesData["punto-de-venta-tapachula"];
  return <ServicePageTemplate data={data} />;
}

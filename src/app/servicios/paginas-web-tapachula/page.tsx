import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Diseño y desarrollo de páginas web en Tapachula | DevPilots",
  description: "Creamos páginas web profesionales para negocios, consultorios, gimnasios, restaurantes y marcas personales en Tapachula, Chiapas. Sitios web rápidos y optimizados para Google.",
  openGraph: {
    title: "Diseño y desarrollo de páginas web en Tapachula | DevPilots",
    description: "Creamos páginas web profesionales para negocios, consultorios, gimnasios, restaurantes y marcas personales en Tapachula, Chiapas. Sitios web rápidos y optimizados para Google.",
    type: "website",
  },
};

export default function PaginasWebPage() {
  const data = servicesData["paginas-web-tapachula"];
  return <ServicePageTemplate data={data} />;
}

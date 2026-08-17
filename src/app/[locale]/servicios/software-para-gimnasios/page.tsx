import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Software para gimnasios en Tapachula | DevPilots",
    description:
      "Control de accesos (QR/Huella), membresías, vencimientos y recordatorios automáticos por WhatsApp para gimnasios y estudios fitness en Tapachula, Chiapas.",
  },
  en: {
    title: "Gym Management Software in Tapachula | DevPilots",
    description:
      "Access control (QR/fingerprint), memberships, due dates and automatic WhatsApp reminders for gyms and fitness studios in Tapachula, Chiapas.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/servicios/software-para-gimnasios", locale });
}

export default async function SoftwareGimnasiosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  const data = servicesData[locale]["software-para-gimnasios"];
  return <ServicePageTemplate data={data} />;
}

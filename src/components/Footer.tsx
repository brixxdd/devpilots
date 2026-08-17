import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";
import { CookieSettingsButton } from "./CookieSettingsButton";

const serviceLinks = [
  { href: "/servicios/desarrollo-web-tapachula", es: "Desarrollo web a la medida", en: "Custom web development" },
  { href: "/servicios/paginas-web-tapachula", es: "Páginas web", en: "Websites" },
  { href: "/servicios/sistemas-para-negocios", es: "Sistemas para negocios", en: "Business systems" },
  { href: "/servicios/automatizacion-whatsapp", es: "Automatización de WhatsApp", en: "WhatsApp automation" },
  { href: "/servicios/punto-de-venta-tapachula", es: "Punto de venta", en: "Point of sale" },
  { href: "/servicios/software-para-gimnasios", es: "Software para gimnasios", en: "Gym software" },
  { href: "/servicios/desarrollo-software-guatemala", es: "Desarrollo de software en Guatemala", en: "Software development in Guatemala" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const legalLinks = [
    { href: "/privacidad", label: t("privacyLink") },
    { href: "/terminos", label: t("termsLink") },
    { href: "/cookies", label: t("cookiesLink") },
  ];

  return (
    <footer className="pb-14 pt-10 text-slate-700">
      <div className="shell grid grid-cols-[1.2fr_1fr_1fr] gap-10 border-t border-slate-200 pt-7 max-md:grid-cols-1">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 font-display text-lg font-black tracking-[-0.015em] text-dev-navy">
            <span className="grid size-[42px] place-items-center overflow-hidden rounded-[13px] border border-cyan-100 bg-white/80">
              <Image src="/assets-devpilots-logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
            </span>
            DevPilots
          </Link>
          <p className="mt-3 text-dev-gray">{t("tagline")}</p>
          <div className="mt-5 flex flex-col gap-1.5 text-sm text-dev-gray">
            <span>
              <strong className="text-dev-navy">{t("whatsappLabel")}:</strong> {site.whatsapp}
            </span>
            <span>
              <strong className="text-dev-navy">{t("instagramLabel")}:</strong> {site.instagram}
            </span>
            <span>
              <strong className="text-dev-navy">{t("locationLabel")}:</strong> {site.location}
            </span>
          </div>
        </div>

        <nav aria-label={t("servicesHeading")}>
          <h2 className="mb-3 font-display text-sm font-black uppercase tracking-wide text-dev-navy">
            {t("servicesHeading")}
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-dev-gray">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-dev-orange">
                  {locale === "en" ? link.en : link.es}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t("legalHeading")}>
          <h2 className="mb-3 font-display text-sm font-black uppercase tracking-wide text-dev-navy">
            {t("legalHeading")}
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-dev-gray">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-dev-orange">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

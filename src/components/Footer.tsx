import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { CookieSettingsButton } from "./CookieSettingsButton";

const serviceLinks = [
  { href: "/servicios/desarrollo-web-tapachula", label: "Desarrollo web a la medida" },
  { href: "/servicios/paginas-web-tapachula", label: "Páginas web" },
  { href: "/servicios/sistemas-para-negocios", label: "Sistemas para negocios" },
  { href: "/servicios/automatizacion-whatsapp", label: "Automatización de WhatsApp" },
  { href: "/servicios/punto-de-venta-tapachula", label: "Punto de venta" },
  { href: "/servicios/software-para-gimnasios", label: "Software para gimnasios" },
  { href: "/servicios/desarrollo-software-guatemala", label: "Desarrollo de software en Guatemala" },
];

const legalLinks = [
  { href: "/privacidad", label: "Aviso de privacidad" },
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/cookies", label: "Política de cookies" },
];

export function Footer() {
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
          <p className="mt-3 text-dev-gray">{site.tagline}</p>
          <div className="mt-5 flex flex-col gap-1.5 text-sm text-dev-gray">
            <span>
              <strong className="text-dev-navy">WhatsApp:</strong> {site.whatsapp}
            </span>
            <span>
              <strong className="text-dev-navy">Instagram:</strong> {site.instagram}
            </span>
            <span>
              <strong className="text-dev-navy">Ubicación:</strong> {site.location}
            </span>
          </div>
        </div>

        <nav aria-label="Servicios">
          <h2 className="mb-3 font-display text-sm font-black uppercase tracking-wide text-dev-navy">
            Servicios
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-dev-gray">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-dev-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="mb-3 font-display text-sm font-black uppercase tracking-wide text-dev-navy">
            Legal
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

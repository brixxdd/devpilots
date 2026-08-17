"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn, whatsappUrl } from "@/lib/utils";
import { Button } from "./ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navItems = [
  { key: "inicio", href: "#inicio" },
  { key: "soluciones", href: "#soluciones" },
  { key: "proceso", href: "#proceso" },
  { key: "capacidades", href: "#capacidades" },
  { key: "contacto", href: "#contacto" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const t = useTranslations("nav");
  const tw = useTranslations("whatsapp");

  return (
    <header className="pointer-events-none fixed inset-x-0 top-[18px] z-40">
      <nav
        aria-label={t("ariaMain")}
        className="glass-nav pointer-events-auto mx-auto flex w-[min(1120px,calc(100%_-_28px))] items-center justify-between gap-5 rounded-full px-3.5 py-3 pl-[18px] transition-[border-color,box-shadow] duration-200 ease-premium max-md:flex-wrap max-md:items-start max-md:gap-3 max-md:rounded-[26px] max-md:px-3 max-md:py-3"
      >
        <Link
          href={isHome ? "#inicio" : "/"}
          aria-label={t("homeAria")}
          className="relative z-10 inline-flex items-center gap-2.5 font-display text-lg font-black tracking-[-0.015em] text-dev-navy"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-[42px] place-items-center overflow-hidden rounded-[13px] border border-white/70 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_22px_rgba(6,43,73,0.12)] backdrop-blur-md max-[430px]:size-[38px]">
            <Image src="/assets-devpilots-logo.png" alt="" width={32} height={32} priority className="h-8 w-8 object-contain" />
          </span>
          DevPilots
        </Link>

        <button
          type="button"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative z-10 hidden size-[42px] place-items-center rounded-2xl border border-white/60 bg-white/38 text-dev-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_8px_18px_rgba(6,43,73,0.1)] backdrop-blur-md transition duration-150 ease-premium active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-orange max-md:grid"
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>

        <div
          className={cn(
            "relative z-10 flex items-center gap-5 text-sm font-bold text-slate-700 max-md:hidden",
            open &&
              "max-md:flex max-md:w-full max-md:flex-col max-md:items-stretch max-md:gap-1 max-md:border-t max-md:border-white/45 max-md:px-0.5 max-md:pb-1 max-md:pt-3",
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              onClick={() => setOpen(false)}
              className="rounded-full px-1.5 py-1 transition-colors duration-150 hover:text-dev-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-orange focus-visible:ring-offset-4 max-md:rounded-2xl max-md:border max-md:border-white/35 max-md:bg-white/22 max-md:px-3.5 max-md:py-2.5 max-md:shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]"
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageSwitcher className="max-md:w-full" />
          <Button
            href={whatsappUrl(tw("diagnosis"))}
            external
            className="hidden w-full max-md:inline-flex"
            ariaLabel={t("diagnosisAria")}
          >
            {t("diagnosisLabel")}
          </Button>
        </div>

        <div className="relative z-10 flex items-center gap-3 max-md:hidden">
          <LanguageSwitcher />
          <Button href={whatsappUrl(tw("diagnosis"))} external ariaLabel={t("diagnosisAria")}>
            {t("diagnosisLabel")}
          </Button>
        </div>
      </nav>
    </header>
  );
}

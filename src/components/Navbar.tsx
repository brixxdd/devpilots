"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-[18px] z-40">
      <nav
        aria-label="Navegación principal"
        className="glass-nav pointer-events-auto mx-auto flex w-[min(1120px,calc(100%_-_28px))] items-center justify-between gap-5 rounded-full px-3.5 py-3 pl-[18px] max-md:flex-wrap max-md:items-start max-md:rounded-3xl"
      >
        <Link
          href="#inicio"
          aria-label="DevPilots inicio"
          className="inline-flex items-center gap-2.5 font-display text-lg font-black tracking-[-0.015em] text-dev-navy"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-[42px] place-items-center overflow-hidden rounded-[13px] border border-cyan-100 bg-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7),0_10px_22px_rgba(6,43,73,0.12)] max-[430px]:size-[38px]">
            <Image src="/assets-devpilots-logo.png" alt="" width={32} height={32} priority />
          </span>
          DevPilots
        </Link>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="hidden size-[42px] place-items-center rounded-2xl border-0 bg-cyan-50 text-dev-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-orange max-md:grid"
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>

        <div
          className={cn(
            "flex items-center gap-5 text-sm font-bold text-slate-700 max-md:hidden",
            open && "max-md:flex max-md:w-full max-md:flex-col max-md:items-stretch max-md:px-0.5 max-md:pb-1 max-md:pt-2",
          )}
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-dev-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-orange focus-visible:ring-offset-4 max-md:rounded-xl max-md:px-3 max-md:py-2"
            >
              {item.label}
            </Link>
          ))}
          <Button
            href={site.ctas.diagnosis}
            external
            className="hidden w-full max-md:inline-flex"
            ariaLabel="Solicitar diagnóstico gratis por WhatsApp"
          >
            Diagnóstico gratis
          </Button>
        </div>

        <Button
          href={site.ctas.diagnosis}
          external
          className="max-md:hidden"
          ariaLabel="Solicitar diagnóstico gratis por WhatsApp"
        >
          Diagnóstico gratis
        </Button>
      </nav>
    </header>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Bot, Compass, LayoutDashboard, MessageCircle, PanelTop } from "lucide-react";
import { dashboardBadges, heroStats, site } from "@/data/site";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Reveal } from "./ui/Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-svh overflow-hidden pb-20 pt-36 max-md:min-h-0 max-md:pb-14 max-md:pt-28">
      <div className="shell grid items-center gap-[clamp(2.25rem,6vw,4.75rem)] lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.72fr)]">
        <Reveal className="relative z-10">
          <Badge icon={Compass} className="mb-6">
            Tecnología, marketing y automatización para negocios
          </Badge>
          <h1 className="max-w-[930px] font-display text-[clamp(2.75rem,7.3vw,5.5rem)] font-black leading-[0.98] tracking-[-0.02em] text-dev-black text-balance max-md:text-[clamp(2.625rem,13vw,3.625rem)]">
            Tecnología y marketing para negocios que quieren{" "}
            <span className="gradient-text">crecer</span>.
          </h1>
          <p className="mt-6 max-w-[760px] text-[clamp(1.125rem,2.1vw,1.4375rem)] leading-relaxed text-dev-gray text-pretty">
            Creamos páginas web, sistemas y estrategias digitales para que tu negocio consiga más clientes,
            automatice procesos y se vea profesional desde el primer contacto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5 max-md:[&>*]:w-full">
            <Button href={site.ctas.diagnosis} external ariaLabel="Solicitar diagnóstico gratis por WhatsApp">
              Solicitar diagnóstico gratis
            </Button>
            <Button href="#soluciones" variant="secondary">
              Ver soluciones
            </Button>
          </div>
          <div className="mt-10 grid max-w-[760px] grid-cols-3 gap-3.5 max-md:grid-cols-1">
            {heroStats.map((item) => (
              <div key={item.title} className="rounded-[18px] border border-slate-200/80 bg-white/60 p-4">
                <strong className="block font-display text-lg font-black text-dev-navy">{item.title}</strong>
                <span className="text-sm text-dev-gray">{item.copy}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative min-h-[620px] max-lg:order-first max-lg:min-h-[570px] max-[430px]:min-h-[600px]" aria-label="Visual de dashboard DevPilots">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <div className="absolute inset-x-0 top-3 min-h-[600px] overflow-hidden rounded-[42px] bg-[radial-gradient(circle_at_20%_20%,rgba(53,189,242,0.26),transparent_24rem),linear-gradient(135deg,#062B49,#0A3A5E)] shadow-navy max-md:rounded-[30px]">
        <div className="absolute inset-10 rotate-[-18deg] rounded-full border border-white/20" />
        <div className="route-line" />
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0], rotate: [-2, -1.2, -2] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] right-[8%] top-[86px] rotate-[-2deg] rounded-[28px] bg-white/95 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.18)] max-md:left-[5%] max-md:right-[5%] max-md:top-[74px] max-md:p-3.5 max-[430px]:top-[82px]"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex gap-1.5" aria-hidden="true">
              <i className="size-2.5 rounded-full bg-slate-200" />
              <i className="size-2.5 rounded-full bg-slate-200" />
              <i className="size-2.5 rounded-full bg-slate-200" />
            </div>
            <div className="font-mono text-xs font-black uppercase tracking-[0.08em] text-dev-navy">Panel de crecimiento</div>
          </div>
          <div className="grid grid-cols-[1fr_0.84fr] gap-3.5 max-md:grid-cols-1">
            <DashboardPanel title="Crecimiento comercial">
              <div className="mb-3.5 flex items-end justify-between gap-3">
                <strong className="font-display text-[2rem] font-black leading-none tracking-[-0.04em] text-dev-navy">+32%</strong>
                <span className="font-mono text-xs font-black uppercase tracking-[0.08em] text-dev-orange">clientes potenciales</span>
              </div>
              {[78, 56, 88].map((width) => (
                <div key={width} className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-cyan-100">
                  <span className="block h-full rounded-full bg-gradient-to-r from-dev-cyan to-dev-orange" style={{ width: `${width}%` }} />
                </div>
              ))}
            </DashboardPanel>
            <DashboardPanel title="Seguimiento activo">
              <div className="grid gap-2 text-xs text-dev-gray">
                {[
                  ["Seguimientos", "18"],
                  ["Citas agendadas", "12"],
                  ["Pagos registrados", "08"],
                  ["Campañas activas", "04"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-2">
                    <span>{label}</span>
                    <strong className="text-dev-navy">{value}</strong>
                  </div>
                ))}
              </div>
            </DashboardPanel>
          </div>
          <div className="mt-3.5 grid grid-cols-2 gap-2.5">
            {dashboardBadges.map((badge) => (
              <div key={badge.title} className="min-h-[58px] rounded-2xl border border-slate-200/80 bg-cyan-50/60 px-3 py-2.5">
                <strong className="block font-display text-[15px] font-black leading-tight text-dev-navy max-[430px]:text-[13px]">{badge.title}</strong>
                <span className="mt-1 block text-[11px] leading-tight text-dev-gray">{badge.copy}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <FloatingCard icon={PanelTop} className="left-[-8px] top-14 max-md:left-2 max-md:top-8">
        Página web
      </FloatingCard>
      <FloatingCard icon={MessageCircle} delay={-2} className="right-[-8px] top-[258px] max-md:bottom-[116px] max-md:right-2 max-md:top-auto max-md:max-w-[230px] max-[430px]:bottom-24">
        WhatsApp + automatización
      </FloatingCard>
      <FloatingCard icon={LayoutDashboard} delay={-4} className="bottom-[76px] left-11 max-md:bottom-8 max-md:left-5 max-[430px]:bottom-4">
        Dashboard
      </FloatingCard>
    </>
  );
}

function DashboardPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-[132px] rounded-[20px] border border-slate-200/80 bg-gradient-to-br from-white to-cyan-50/70 p-4">
      <h3 className="mb-2.5 font-display text-sm font-black leading-tight text-dev-black">{title}</h3>
      {children}
    </div>
  );
}

function FloatingCard({
  icon: Icon,
  children,
  className,
  delay = 0,
}: {
  icon: typeof BarChart3;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? undefined : { y: [0, -12, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute flex items-center gap-2.5 rounded-[18px] border border-white/25 bg-dev-navy/55 px-4 py-3 font-bold text-white shadow-[0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-md max-md:px-3 max-md:py-2.5 max-md:text-sm ${className ?? ""}`}
    >
      <Icon aria-hidden="true" size={18} className="text-dev-cyan" />
      {children}
    </motion.div>
  );
}

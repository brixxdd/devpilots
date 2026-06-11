import { packages } from "@/data/packages";
import { Button } from "./ui/Button";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function PackagesSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Paquetes"
          title="Elige el punto de partida según tu etapa de crecimiento."
          copy="Sin precios públicos: la propuesta se define por alcance, prioridad y resultado esperado."
        />
        <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {packages.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <GlassCard
                className={
                  item.featured
                    ? "flex min-h-[360px] flex-col border-cyan-200 bg-[radial-gradient(circle_at_80%_10%,rgba(53,189,242,0.24),transparent_18rem),linear-gradient(145deg,#062B49,#0A3A5E)] p-7 text-white"
                    : "flex min-h-[360px] flex-col p-7"
                }
              >
                <h3 className={`font-display text-[clamp(1.25rem,2vw,1.625rem)] font-black leading-tight ${item.featured ? "text-white" : "text-dev-black"}`}>
                  {item.title}
                </h3>
                <p className={`mt-3 ${item.featured ? "text-white/80" : "text-dev-gray"}`}>{item.copy}</p>
                <ul className={`my-6 grid gap-2.5 ${item.featured ? "text-white" : "text-dev-gray"}`}>
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm">
                      <span className="size-2 rounded-full bg-dev-cyan" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={item.href}
                  external
                  variant={item.featured ? "primary" : "secondary"}
                  className="mt-auto"
                  ariaLabel={`Solicitar propuesta de ${item.title} por WhatsApp`}
                >
                  Solicitar propuesta
                </Button>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

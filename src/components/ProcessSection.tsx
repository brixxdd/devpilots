import { processSteps } from "@/data/process";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";

export function ProcessSection() {
  return (
    <section className="section" id="proceso">
      <div className="shell grid items-start gap-14 lg:grid-cols-[0.72fr_1fr]">
        <Reveal className="lg:sticky lg:top-28">
          <span className="eyebrow">Nuestro proceso</span>
          <h2 className="max-w-[820px] font-display text-[clamp(2.125rem,4.6vw,4rem)] font-black leading-[1.02] tracking-[-0.02em] text-dev-black text-balance">
            Un camino claro desde el diagnóstico hasta la mejora continua.
          </h2>
          <p className="mt-6 max-w-[760px] text-[clamp(1.125rem,2.1vw,1.4375rem)] leading-relaxed text-dev-gray text-pretty">
            Cada proyecto inicia con una conversación de negocio y termina con una solución lista para usarse,
            medirse y seguir creciendo.
          </p>
        </Reveal>
        <div className="grid gap-4 [counter-reset:step]">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.03}>
              <GlassCard className="grid grid-cols-[auto_1fr] gap-[18px] p-[22px] before:grid before:size-12 before:place-items-center before:rounded-2xl before:bg-gradient-to-br before:from-dev-navy before:to-dev-cyan before:font-mono before:text-[13px] before:font-black before:text-white before:[content:counter(step,decimal-leading-zero)] [counter-increment:step]">
                <div>
                  <h3 className="font-display text-[clamp(1.25rem,2vw,1.625rem)] font-black leading-tight text-dev-black">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] text-dev-gray">{step.copy}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

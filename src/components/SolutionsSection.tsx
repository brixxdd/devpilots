import { solutions } from "@/data/services";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { IconBox } from "./ProblemSection";

export function SolutionsSection() {
  return (
    <section className="section" id="soluciones">
      <div className="shell">
        <SectionHeader
          eyebrow="Soluciones DevPilots"
          title="Servicios digitales presentados como resultados de negocio."
          copy="No vendemos tecnología por tecnología: cada pieza debe ayudar a captar, organizar, automatizar o convertir mejor."
        />
        <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 0.03}>
              <GlassCard className="min-h-[218px]">
                <IconBox icon={solution.icon} />
                <h3 className="font-display text-[clamp(1.25rem,2vw,1.625rem)] font-black leading-tight text-dev-black">{solution.title}</h3>
                <p className="mt-2.5 text-[15px] text-dev-gray">{solution.copy}</p>
                <span className="mt-5 inline-flex font-mono text-xs font-black uppercase tracking-[0.08em] text-dev-navy">
                  {solution.tag}
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

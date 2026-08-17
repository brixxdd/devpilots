import { useLocale, useTranslations } from "next-intl";
import { solutions } from "@/data/services";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { IconBox } from "./ProblemSection";

export function SolutionsSection() {
  const t = useTranslations("solutionsSection");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="section" id="soluciones">
      <div className="shell">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} copy={t("copy")} />
        <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {solutions.map((solution, index) => (
            <Reveal key={solution.es.title} delay={index * 0.03}>
              <GlassCard className="min-h-[218px]">
                <IconBox icon={solution.icon} />
                <h3 className="font-display text-[clamp(1.25rem,2vw,1.625rem)] font-black leading-tight text-dev-black">{solution[locale].title}</h3>
                <p className="mt-2.5 text-[15px] text-dev-gray">{solution[locale].copy}</p>
                <span className="mt-5 inline-flex font-mono text-xs font-black uppercase tracking-[0.08em] text-dev-navy">
                  {solution[locale].tag}
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

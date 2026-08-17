import type { LucideIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { problems } from "@/data/services";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function ProblemSection() {
  const t = useTranslations("problemsSection");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="section" id="problemas">
      <div className="shell">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} copy={t("copy")} />
        <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {problems.map((problem, index) => (
            <Reveal key={problem.es.title} delay={index * 0.03}>
              <GlassCard className="min-h-[190px]">
                <IconBox icon={problem.icon} />
                <h3 className="font-display text-[clamp(1.25rem,2vw,1.625rem)] font-black leading-tight text-dev-black">{problem[locale].title}</h3>
                <p className="mt-2.5 text-[15px] text-dev-gray">{problem[locale].copy}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IconBox({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="mb-5 grid size-[42px] place-items-center rounded-[15px] bg-cyan-100/80 text-dev-navy">
      <Icon aria-hidden={true} size={22} />
    </div>
  );
}

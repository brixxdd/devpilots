import { useLocale, useTranslations } from "next-intl";
import { capabilities, capabilityProof } from "@/data/services";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function CapabilitiesSection() {
  const t = useTranslations("capabilitiesSection");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="section" id="capacidades">
      <div className="shell">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} copy={t("copy")} />
        <Reveal className="grid items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="min-h-full rounded-panel bg-[radial-gradient(circle_at_85%_12%,rgba(255,122,26,0.22),transparent_16rem),linear-gradient(145deg,#062B49,#0A3A5E)] p-[30px] text-white">
            <h3 className="font-display text-[clamp(1.75rem,3vw,2.625rem)] font-black leading-tight text-white text-balance">
              {t("asideTitle")}
            </h3>
            <p className="mt-4 text-white/75">{t("asideCopy")}</p>
            <div className="mt-6 grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
              {capabilityProof.map((item) => (
                <div key={item.es.title} className="rounded-[18px] border border-white/15 bg-white/10 p-3.5">
                  <strong className="block font-display text-lg font-black text-white">{item[locale].title}</strong>
                  <span className="mt-1 block text-xs text-white/65">{item[locale].copy}</span>
                </div>
              ))}
            </div>
          </aside>
          <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
              <article key={capability.es.title} className="rounded-glass border border-slate-200/80 bg-white p-5">
                <span className="mb-4 block size-2.5 rounded-full bg-dev-orange shadow-[0_0_0_6px_rgba(255,122,26,0.14)]" />
                <Icon aria-hidden="true" size={21} className="mb-3 text-dev-navy" />
                <h3 className="font-display text-lg font-black leading-tight text-dev-navy">{capability[locale].title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-dev-gray">{capability[locale].copy}</p>
              </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

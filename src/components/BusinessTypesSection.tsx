import { businessTypes } from "@/data/businessTypes";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function BusinessTypesSection() {
  return (
    <section className="section pt-0" id="tipos-negocio">
      <div className="shell">
        <SectionHeader
          eyebrow="Soluciones por negocio"
          title="Soluciones para distintos tipos de negocio."
          copy="Adaptamos presencia digital, automatización y sistemas a la forma real en que cada negocio vende, atiende y da seguimiento."
        />
        <Reveal className="grid grid-cols-7 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {businessTypes.map((business) => {
            const Icon = business.icon;
            return (
            <article
              key={business.title}
              className="min-h-[164px] rounded-glass border border-slate-200/80 bg-gradient-to-br from-white/90 to-cyan-50/70 p-[18px] transition duration-200 ease-premium hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50/40 max-md:min-h-0"
            >
              <div className="mb-4 grid size-[38px] place-items-center rounded-[14px] bg-cyan-100/75 text-dev-navy">
                <Icon aria-hidden="true" size={20} />
              </div>
              <h3 className="font-display text-lg font-black leading-tight text-dev-black">{business.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-dev-gray">{business.copy}</p>
            </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

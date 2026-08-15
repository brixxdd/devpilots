import Link from "next/link";
import { Reveal } from "./ui/Reveal";

export function LocalSEOSection() {
  return (
    <section className="section border-y border-slate-100 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="shell">
        <Reveal>
          <div className="max-w-[850px] mx-auto text-center">
            <span className="eyebrow mb-4">Presencia y Cobertura Local</span>
            <h2 className="font-display text-[clamp(2.125rem,4.6vw,3.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-dev-navy mb-6">
              Desarrollo web y software para negocios en Tapachula
            </h2>
            <p className="text-[clamp(1.125rem,1.9vw,1.35rem)] leading-relaxed text-dev-gray text-pretty">
              En DevPilots desarrollamos páginas web, sistemas administrativos, aplicaciones, automatizaciones y soluciones de punto de venta para negocios en Tapachula, Chiapas y otras ciudades de México.
            </p>
            <p className="mt-4 text-[clamp(1rem,1.6vw,1.15rem)] leading-relaxed text-dev-gray text-pretty">
              También atendemos negocios del lado guatemalteco de la frontera —Chiquimula, Esquipulas, Concepción Las Minas— de forma{" "}
              <Link href="/servicios/desarrollo-software-guatemala" className="font-bold text-dev-orange hover:underline">
                100% remota
              </Link>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

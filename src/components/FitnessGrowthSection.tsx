import { Activity, CalendarDays, Megaphone, UsersRound } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

const metrics = [
  { icon: CalendarDays, title: "Agenda", copy: "Clases, citas, coaches y recordatorios." },
  { icon: UsersRound, title: "Clientes", copy: "Historial, seguimiento, renovaciones y pagos." },
  { icon: Megaphone, title: "Contenido", copy: "Campañas, comunidad y redes con dirección." },
  { icon: Activity, title: "Ventas", copy: "Landing, WhatsApp y embudos medibles." },
];

export function FitnessGrowthSection() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal className="overflow-hidden rounded-[36px] bg-[radial-gradient(circle_at_85%_18%,rgba(255,122,26,0.28),transparent_20rem),radial-gradient(circle_at_18%_84%,rgba(53,189,242,0.28),transparent_24rem),linear-gradient(135deg,#062B49,#0A3A5E)] p-[clamp(2.125rem,5vw,3.625rem)] text-white shadow-navy max-md:rounded-[28px] max-md:p-7">
          <div className="grid items-center gap-11 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div>
              <span className="eyebrow text-white before:bg-dev-orange">DevPilots Fitness Growth</span>
              <h2 className="max-w-[820px] font-display text-[clamp(2.125rem,4.6vw,4rem)] font-black leading-[1.02] tracking-[-0.02em] text-white text-balance">
                Una línea especializada para negocios fitness que quieren crecer.
              </h2>
              <p className="mt-6 max-w-[760px] text-[clamp(1.125rem,2.1vw,1.4375rem)] leading-relaxed text-white/80 text-pretty">
                Presencia digital, sistemas de clientes, campañas, contenido y automatización para gimnasios,
                entrenadores, nutriólogos, coaches, eventos fitness y marcas deportivas.
              </p>
              <div className="mt-8">
                <Button href={site.ctas.fitness} external ariaLabel="Explorar línea fitness por WhatsApp">
                  Explorar línea fitness
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1" aria-label="Módulos fitness">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                <div key={metric.title} className="min-h-[124px] rounded-glass border border-white/15 bg-white/10 p-[18px]">
                  <Icon aria-hidden="true" size={21} className="mb-3 text-dev-cyan" />
                  <strong className="block font-display text-3xl font-black leading-none text-white">{metric.title}</strong>
                  <span className="mt-2 block text-sm text-white/70">{metric.copy}</span>
                </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

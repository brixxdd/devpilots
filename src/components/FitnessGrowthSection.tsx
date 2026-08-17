import { Activity, CalendarDays, Megaphone, UsersRound } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

const metrics = [
  { icon: CalendarDays, es: { title: "Agenda", copy: "Clases, citas, coaches y recordatorios." }, en: { title: "Schedule", copy: "Classes, appointments, coaches and reminders." } },
  { icon: UsersRound, es: { title: "Clientes", copy: "Historial, seguimiento, renovaciones y pagos." }, en: { title: "Customers", copy: "History, follow-up, renewals and payments." } },
  { icon: Megaphone, es: { title: "Contenido", copy: "Campañas, comunidad y redes con dirección." }, en: { title: "Content", copy: "Campaigns, community and social media with direction." } },
  { icon: Activity, es: { title: "Ventas", copy: "Landing, WhatsApp y embudos medibles." }, en: { title: "Sales", copy: "Landing pages, WhatsApp and measurable funnels." } },
];

export function FitnessGrowthSection() {
  const t = useTranslations("fitnessSection");
  const tw = useTranslations("whatsapp");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="section">
      <div className="shell">
        <Reveal className="overflow-hidden rounded-[36px] bg-[radial-gradient(circle_at_85%_18%,rgba(255,122,26,0.28),transparent_20rem),radial-gradient(circle_at_18%_84%,rgba(53,189,242,0.28),transparent_24rem),linear-gradient(135deg,#062B49,#0A3A5E)] p-[clamp(2.125rem,5vw,3.625rem)] text-white shadow-navy max-md:rounded-[28px] max-md:p-7">
          <div className="grid items-center gap-11 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div>
              <span className="eyebrow text-white before:bg-dev-orange">{t("eyebrow")}</span>
              <h2 className="max-w-[820px] font-display text-[clamp(2.125rem,4.6vw,4rem)] font-black leading-[1.02] tracking-[-0.02em] text-white text-balance">
                {t("title")}
              </h2>
              <p className="mt-6 max-w-[760px] text-[clamp(1.125rem,2.1vw,1.4375rem)] leading-relaxed text-white/80 text-pretty">
                {t("copy")}
              </p>
              <div className="mt-8">
                <Button href={whatsappUrl(tw("fitness"))} external ariaLabel={t("ctaAria")}>
                  {t("ctaLabel")}
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1" aria-label={t("metricsAria")}>
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                <div key={metric.es.title} className="min-h-[124px] rounded-glass border border-white/15 bg-white/10 p-[18px]">
                  <Icon aria-hidden="true" size={21} className="mb-3 text-dev-cyan" />
                  <strong className="block font-display text-3xl font-black leading-none text-white">{metric[locale].title}</strong>
                  <span className="mt-2 block text-sm text-white/70">{metric[locale].copy}</span>
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

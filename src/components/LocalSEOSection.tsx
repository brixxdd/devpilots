import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "./ui/Reveal";

export function LocalSEOSection() {
  const t = useTranslations("localSeo");

  return (
    <section className="section border-y border-slate-100 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="shell">
        <Reveal>
          <div className="max-w-[850px] mx-auto text-center">
            <span className="eyebrow mb-4">{t("eyebrow")}</span>
            <h2 className="font-display text-[clamp(2.125rem,4.6vw,3.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-dev-navy mb-6">
              {t("title")}
            </h2>
            <p className="text-[clamp(1.125rem,1.9vw,1.35rem)] leading-relaxed text-dev-gray text-pretty">
              {t("paragraph1")}
            </p>
            <p className="mt-4 text-[clamp(1rem,1.6vw,1.15rem)] leading-relaxed text-dev-gray text-pretty">
              {t("paragraph2Lead")}{" "}
              <Link href="/servicios/desarrollo-software-guatemala" className="font-bold text-dev-orange hover:underline">
                {t("paragraph2LinkText")}
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

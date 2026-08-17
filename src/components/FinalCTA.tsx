import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function FinalCTA() {
  const t = useTranslations("finalCta");
  const tw = useTranslations("whatsapp");

  return (
    <section className="section" id="contacto">
      <div className="shell">
        <Reveal className="glass-panel rounded-[40px] bg-[radial-gradient(circle_at_12%_22%,rgba(53,189,242,0.22),transparent_20rem),radial-gradient(circle_at_92%_70%,rgba(255,122,26,0.18),transparent_18rem),rgba(255,255,255,0.82)] p-[clamp(2.625rem,7vw,4.75rem)] text-center max-md:rounded-[28px] max-md:p-7">
          <span className="eyebrow justify-center">{t("eyebrow")}</span>
          <h2 className="mx-auto max-w-[820px] font-display text-[clamp(2.125rem,4.6vw,4rem)] font-black leading-[1.02] tracking-[-0.02em] text-dev-black text-balance">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-[clamp(1.125rem,2.1vw,1.4375rem)] leading-relaxed text-dev-gray text-pretty">
            {t("copy")}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={whatsappUrl(tw("contact"))} external ariaLabel={t("ctaAria")}>
              {t("ctaLabel")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

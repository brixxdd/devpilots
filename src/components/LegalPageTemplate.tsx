import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function LegalPageTemplate({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const t = useTranslations("legal");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#f7fbff] via-white to-[#f3f8fd] pb-10 pt-36 max-md:pt-28">
        <div className="shell section !py-10">
          <article className="mx-auto max-w-[820px]">
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.25rem)] font-black leading-[1.05] tracking-[-0.02em] text-dev-navy">
              {title}
            </h1>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-dev-gray">
              {t("updatedLabel")} {updated}
            </p>
            <div className="legal-prose mt-10 text-dev-gray">{children}</div>
          </article>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

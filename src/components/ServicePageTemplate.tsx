"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, CheckCircle2, Star, HelpCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { Button } from "./ui/Button";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { whatsappUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/seo";
import type { ServiceDetail } from "@/data/servicesData";

export function ServicePageTemplate({ data }: { data: ServiceDetail }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations("servicePage");
  const locale = useLocale();

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whatsappMessage = data.whatsappMessage || `${t("defaultCtaText")}: ${data.title}`;
  const contactUrl = whatsappUrl(whatsappMessage);
  const pageUrl = `${siteConfig.url}${locale === "en" ? "/en" : ""}/servicios/${data.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: t("breadcrumbServices"), item: `${siteConfig.url}/#soluciones` },
      { "@type": "ListItem", position: 3, name: data.title, item: pageUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.description,
    url: pageUrl,
    areaServed: { "@type": "City", name: "Tapachula" },
    provider: { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url },
  };

  const faqSchema = data.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#f7fbff] via-white to-[#f3f8fd] pb-10">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden pb-16 pt-36 max-md:pb-10 max-md:pt-28">
          {/* Background decoration */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute left-[-10%] top-[10%] size-[450px] rounded-full bg-cyan-200/30 blur-[120px]" />
            <div className="absolute right-[-10%] top-[30%] size-[500px] rounded-full bg-orange-200/20 blur-[130px]" />
          </div>

          <div className="shell relative z-10">
            <Reveal>
              <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-dev-gray">
                <Link href="/" className="hover:text-dev-orange transition-colors">{t("breadcrumbHome")}</Link>
                <span>/</span>
                <span className="text-dev-navy">{t("breadcrumbServices")}</span>
                <span>/</span>
                <span className="text-dev-orange">{data.title}</span>
              </div>
            </Reveal>

            <div className="grid gap-[clamp(2rem,4vw,4rem)] lg:grid-cols-[1.2fr_0.8fr] items-center">
              <Reveal>
                <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-black leading-[1.02] tracking-[-0.02em] text-dev-navy text-balance">
                  {data.title}
                </h1>
                <p className="mt-6 font-display text-[clamp(1.125rem,2.2vw,1.45rem)] font-extrabold leading-relaxed text-dev-navy2">
                  {data.subtitle}
                </p>
                <p className="mt-4 text-[clamp(1rem,1.8vw,1.18rem)] leading-relaxed text-dev-gray">
                  {data.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 max-md:[&>*]:w-full">
                  <Button href={contactUrl} external ariaLabel={data.ctaText || t("defaultCtaTextAria")}>
                    {data.ctaText || t("defaultCtaText")}
                  </Button>
                  <Button href="#que-incluye" variant="secondary">
                    {t("viewIncludes")}
                  </Button>
                </div>
              </Reveal>

              <Reveal className="relative max-lg:hidden">
                <div className="rounded-panel border border-slate-200/80 bg-white/70 p-8 shadow-glass backdrop-blur-md">
                  <div className="mb-6 flex size-[62px] place-items-center rounded-[20px] bg-gradient-to-br from-dev-orange to-[#e96208] text-white shadow-orange">
                    <Star aria-hidden="true" className="mx-auto size-7" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-dev-navy">{t("asideCardTitle")}</h3>
                  <p className="mt-3 text-dev-gray leading-relaxed text-sm">
                    {data.asideDescription || t("asideDefaultDescription")}
                  </p>
                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="size-2.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span className="text-xs font-mono font-bold text-dev-navy uppercase tracking-wider">
                        {data.asideBadge || t("asideDefaultBadge")}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="section scroll-mt-20 border-t border-slate-100/80" id="que-incluye">
          <div className="shell">
            <Reveal className="mb-10 text-center max-w-[800px] mx-auto">
              <span className="eyebrow mb-4">{t("detailsEyebrow")}</span>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-black leading-none tracking-[-0.02em] text-dev-navy">
                {data.featuresTitle || t("featuresDefaultTitle")}
              </h2>
            </Reveal>

            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {data.features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 0.03}>
                  <GlassCard className="min-h-[190px] h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-4 text-dev-orange">
                        <CheckCircle2 className="size-6" />
                      </div>
                      <h3 className="font-display text-lg font-black leading-tight text-dev-navy mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-dev-gray leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUIÉN ES */}
        <section className="section border-t border-slate-100/80 bg-slate-50/40">
          <div className="shell">
            <Reveal className="mb-10 text-center max-w-[800px] mx-auto">
              <span className="eyebrow mb-4">{t("audienceEyebrow")}</span>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-black leading-none tracking-[-0.02em] text-dev-navy">
                {t("audienceTitle")}
              </h2>
            </Reveal>

            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
              {data.targetAudience.map((target, index) => (
                <Reveal key={target.title} delay={index * 0.05}>
                  <div className="rounded-panel border border-slate-200/60 bg-white p-7 shadow-[0_10px_30px_rgba(6,43,73,0.04)] h-full">
                    <span className="font-mono text-xs font-extrabold text-dev-cyan uppercase tracking-widest block mb-3">
                      {t("profileLabel")} {index + 1}
                    </span>
                    <h3 className="font-display text-xl font-black text-dev-navy mb-3">
                      {target.title}
                    </h3>
                    <p className="text-dev-gray text-sm leading-relaxed">
                      {target.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO DE TRABAJO */}
        <section className="section border-t border-slate-100/80">
          <div className="shell">
            <Reveal className="mb-12 text-center max-w-[800px] mx-auto">
              <span className="eyebrow mb-4">{t("processEyebrow")}</span>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-black leading-none tracking-[-0.02em] text-dev-navy">
                {t("processTitle")}
              </h2>
            </Reveal>

            <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {data.process.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <div className="relative h-full rounded-panel border border-slate-200/80 bg-white/50 p-6">
                    <div className="font-display text-4xl font-black text-dev-cyan/20 absolute right-6 top-6 leading-none select-none">
                      {step.step}
                    </div>
                    <h3 className="font-display text-lg font-black text-dev-navy mb-2 pt-4">
                      {step.title}
                    </h3>
                    <p className="text-dev-gray text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="section border-t border-slate-100/80 bg-gradient-to-br from-[#062B49] to-[#0A3A5E] text-white">
          <div className="shell">
            <Reveal className="mb-12 text-center max-w-[800px] mx-auto">
              <span className="font-mono text-xs font-extrabold text-dev-cyan uppercase tracking-widest block mb-4">
                {t("benefitsEyebrow")}
              </span>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-black leading-none tracking-[-0.02em] text-white">
                {t("benefitsTitle")}
              </h2>
            </Reveal>

            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
              {data.benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 0.05}>
                  <div className="rounded-panel border border-white/10 bg-white/5 p-6 backdrop-blur-sm h-full flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-black text-dev-cyan mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES (FAQ) */}
        <section className="section border-t border-slate-100/80">
          <div className="shell">
            <Reveal className="mb-10 text-center max-w-[800px] mx-auto">
              <HelpCircle className="mx-auto size-9 text-dev-orange mb-4" />
              <span className="eyebrow mb-4">{t("faqEyebrow")}</span>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-black leading-none tracking-[-0.02em] text-dev-navy">
                {t("faqTitle")}
              </h2>
            </Reveal>

            <div className="max-w-[800px] mx-auto grid gap-3">
              {data.faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <Reveal key={index} delay={index * 0.03}>
                    <div
                      className={`rounded-[18px] border transition-all duration-300 ${
                        isOpen
                          ? "border-cyan-300 bg-cyan-50/20 shadow-[0_8px_24px_rgba(53,189,242,0.06)]"
                          : "border-slate-200/80 bg-white/60 hover:border-slate-300"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="flex w-full items-center justify-between gap-5 p-5 text-left font-display font-black text-dev-navy focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={18}
                          className={`text-dev-gray shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-dev-orange" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={prefersReducedMotion ? { height: "auto" } : { height: 0, opacity: 0 }}
                            animate={prefersReducedMotion ? { height: "auto" } : { height: "auto", opacity: 1 }}
                            exit={prefersReducedMotion ? { height: 0 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-slate-100 p-5 pt-0 text-sm text-dev-gray leading-relaxed text-pretty">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="section border-t border-slate-100/80">
          <div className="shell">
            <Reveal>
              <div className="rounded-panel relative overflow-hidden bg-gradient-to-br from-[#062B49] to-[#0A3A5E] px-8 py-14 text-center text-white shadow-navy max-md:px-5">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                  <div className="absolute right-[-10%] top-[-10%] size-[300px] rounded-full bg-dev-cyan blur-[80px]" />
                </div>
                <div className="relative z-10 max-w-[680px] mx-auto">
                  <span className="font-mono text-xs font-black uppercase tracking-[0.14em] text-dev-cyan">
                    {t("ctaEyebrow")}
                  </span>
                  <h2 className="mt-4 font-display text-[clamp(2.125rem,4.4vw,3.5rem)] font-black leading-[1.04] tracking-[-0.02em] text-balance">
                    {t("ctaTitle")}
                  </h2>
                  <p className="mt-6 text-[clamp(1rem,1.8vw,1.18rem)] text-slate-200 leading-relaxed text-pretty">
                    {data.finalCtaDescription || t("ctaDefaultDescription")}
                  </p>
                  <div className="mt-8 flex justify-center max-md:[&>*]:w-full">
                    <Button href={contactUrl} external showArrow ariaLabel={t("ctaButtonAria")}>
                      {t("ctaButton")}
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/utils";

export function WhatsAppFloat() {
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations("whatsapp");

  return (
    <motion.a
      href={whatsappUrl(t("diagnosis"))}
      target="_blank"
      rel="noreferrer"
      aria-label={t("floatAria")}
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-[18px] font-display text-sm font-black text-white shadow-[0_14px_34px_rgba(37,211,102,0.28)] transition-colors hover:bg-[#20bd5a] hover:shadow-[0_16px_38px_rgba(37,211,102,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 max-md:bottom-4 max-md:right-4 max-md:size-12 max-md:min-h-0 max-md:px-0 max-md:shadow-[0_10px_26px_rgba(37,211,102,0.26)]"
    >
      <FaWhatsapp aria-hidden="true" className="size-5 max-md:size-6" />
      <span className="max-md:hidden">{t("floatLabel")}</span>
    </motion.a>
  );
}

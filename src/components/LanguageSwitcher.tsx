"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      aria-label={nextLocale === "en" ? "Switch to English" : "Cambiar a español"}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-full border border-white/60 bg-white/38 px-3.5 font-mono text-xs font-black uppercase tracking-wide text-dev-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-md transition duration-150 ease-premium hover:bg-white/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-orange max-md:w-full max-md:justify-center max-md:rounded-2xl max-md:border-white/35 max-md:bg-white/22 max-md:py-2.5",
        className,
      )}
    >
      {nextLocale === "en" ? "EN" : "ES"}
    </button>
  );
}

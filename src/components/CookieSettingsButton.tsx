"use client";

import * as CookieConsent from "vanilla-cookieconsent";
import { useTranslations } from "next-intl";

export function CookieSettingsButton() {
  const t = useTranslations("footer");

  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className="text-left transition-colors hover:text-dev-orange"
    >
      {t("cookiePrefs")}
    </button>
  );
}

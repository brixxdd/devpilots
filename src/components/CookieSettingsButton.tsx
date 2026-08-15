"use client";

import * as CookieConsent from "vanilla-cookieconsent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className="text-left transition-colors hover:text-dev-orange"
    >
      Preferencias de cookies
    </button>
  );
}

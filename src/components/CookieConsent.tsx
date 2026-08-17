"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

/**
 * Necessary cookies stay always-on (there aren't any right now — Umami is
 * cookieless). Analytics/marketing start blocked; scripts tagged
 * data-category="analytics|marketing" in AnalyticsScripts only run after
 * the visitor opts in. Accept/reject get equal visual weight per
 * guiOptions.equalWeightButtons, and the choice is stored so we don't
 * reprompt on every visit.
 */
export function CookieConsentBanner() {
  const locale = useLocale();

  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }],
          },
        },
        marketing: {
          autoClear: {
            cookies: [{ name: /^_fbp/ }],
          },
        },
      },
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
        },
      },
      language: {
        default: locale,
        translations: {
          es: {
            consentModal: {
              title: "Usamos cookies",
              description:
                "Usamos cookies propias necesarias para que el sitio funcione. Con tu permiso, también usaríamos cookies de analítica y marketing para entender qué contenido funciona mejor. Podés aceptar, rechazar o elegir qué categorías permitir.",
              acceptAllBtn: "Aceptar todo",
              acceptNecessaryBtn: "Rechazar",
              showPreferencesBtn: "Preferencias",
              footer:
                '<a href="/cookies">Política de cookies</a>\n<a href="/privacidad">Política de privacidad</a>',
            },
            preferencesModal: {
              title: "Preferencias de cookies",
              acceptAllBtn: "Aceptar todo",
              acceptNecessaryBtn: "Rechazar todo",
              savePreferencesBtn: "Guardar preferencias",
              closeIconLabel: "Cerrar",
              serviceCounterLabel: "Servicio|Servicios",
              sections: [
                {
                  title: "Uso de cookies",
                  description:
                    "Podés aceptar todas las cookies, rechazar las que no son necesarias, o elegir por categoría. Guardamos tu elección para no volver a preguntarte en cada visita.",
                },
                {
                  title: "Estrictamente necesarias",
                  description:
                    "Necesarias para que el sitio funcione correctamente. Actualmente no usamos ninguna cookie de este tipo.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analítica",
                  description:
                    "Nos ayudan a entender cómo se usa el sitio (páginas visitadas, origen del tráfico) para mejorarlo.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Se usan para medir el rendimiento de campañas publicitarias.",
                  linkedCategory: "marketing",
                },
                {
                  title: "Más información",
                  description:
                    'Para cualquier duda sobre nuestra política de cookies, escribinos por <a href="https://wa.me/529626002508" target="_blank" rel="noreferrer">WhatsApp</a>.',
                },
              ],
            },
          },
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "We use our own necessary cookies for the site to work. With your permission, we'd also use analytics and marketing cookies to understand what content works best. You can accept, reject, or choose which categories to allow.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject",
              showPreferencesBtn: "Preferences",
              footer:
                '<a href="/en/cookies">Cookie policy</a>\n<a href="/en/privacidad">Privacy policy</a>',
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "Cookie usage",
                  description:
                    "You can accept all cookies, reject the ones that aren't necessary, or choose by category. We save your choice so we don't ask again on every visit.",
                },
                {
                  title: "Strictly necessary",
                  description:
                    "Necessary for the site to work correctly. We currently don't use any cookies of this type.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description:
                    "Help us understand how the site is used (pages visited, traffic source) to improve it.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Used to measure the performance of advertising campaigns.",
                  linkedCategory: "marketing",
                },
                {
                  title: "More information",
                  description:
                    'For any questions about our cookie policy, message us on <a href="https://wa.me/529626002508" target="_blank" rel="noreferrer">WhatsApp</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, [locale]);

  return null;
}

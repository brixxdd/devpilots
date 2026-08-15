"use client";

import { useEffect } from "react";
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
        default: "es",
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
        },
      },
    });
  }, []);

  return null;
}

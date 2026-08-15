import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/LegalPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Política de cookies | DevPilots",
  description:
    "Qué cookies usa el sitio de DevPilots, para qué sirve cada categoría y cómo cambiar tu elección de consentimiento en cualquier momento.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPageTemplate title="Política de cookies" updated="14 de agosto de 2026">
      <p>
        Esta página explica qué cookies y tecnologías similares usa este sitio, para qué sirve cada una, y
        cómo podés aceptarlas, rechazarlas o cambiar tu elección más adelante.
      </p>

      <h2>1. Cómo gestionamos el consentimiento</h2>
      <p>
        Al entrar al sitio ves un banner donde podés <strong>aceptar todo</strong>,{" "}
        <strong>rechazar</strong> lo que no es necesario, o abrir <strong>preferencias</strong> para elegir
        categoría por categoría. Ambos botones (aceptar y rechazar) tienen el mismo peso visual: rechazar es
        tan fácil como aceptar. Guardamos tu elección en tu navegador para no volver a preguntarte en cada
        visita.
      </p>

      <h2>2. Categorías de cookies</h2>
      <p>
        <strong>Estrictamente necesarias.</strong> Cookies indispensables para que el sitio funcione (por
        ejemplo, para recordar tu elección de consentimiento). Actualmente no usamos ninguna cookie de este
        tipo — el sitio funciona sin ellas.
      </p>
      <p>
        <strong>Analítica.</strong> Nuestra herramienta principal de analítica es{" "}
        <a href="https://umami.is" target="_blank" rel="noreferrer">
          Umami
        </a>
        , que corre en nuestra propia infraestructura, <strong>no usa cookies</strong> y no recaba datos que
        te identifiquen individualmente — solo estadísticas agregadas (páginas vistas, dispositivo,
        ubicación aproximada por IP). Por eso no requiere tu consentimiento previo. Si en el futuro
        activamos Google Analytics, sus cookies (por ejemplo <code>_ga</code>, <code>_gid</code>) solo se
        cargarán después de que aceptes esta categoría en el banner.
      </p>
      <p>
        <strong>Marketing.</strong> Si activamos herramientas como Meta Pixel o Google Ads para medir el
        rendimiento de campañas publicitarias, sus cookies (por ejemplo <code>_fbp</code>) solo se cargarán
        después de que aceptes esta categoría en el banner.
      </p>

      <h2>3. Cómo cambiar tu elección</h2>
      <p>
        Podés cambiar tu elección de cookies en cualquier momento desde el enlace{" "}
        <strong>&ldquo;Preferencias de cookies&rdquo;</strong> al pie de cualquier página del sitio.
      </p>

      <h2>4. Más información</h2>
      <p>
        Para más detalle sobre qué hacemos con los datos que recabamos, consultá nuestro{" "}
        <a href="/privacidad">aviso de privacidad</a>. Para dudas puntuales, escribinos por WhatsApp al{" "}
        {site.whatsapp} o a <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>
    </LegalPageTemplate>
  );
}

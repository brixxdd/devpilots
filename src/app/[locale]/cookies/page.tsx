import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/LegalPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Política de cookies | DevPilots",
    description:
      "Qué cookies usa el sitio de DevPilots, para qué sirve cada categoría y cómo cambiar tu elección de consentimiento en cualquier momento.",
  },
  en: {
    title: "Cookie Policy | DevPilots",
    description:
      "What cookies the DevPilots site uses, what each category is for, and how to change your consent choice at any time.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/cookies", locale });
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);

  if (locale === "en") {
    return (
      <LegalPageTemplate title="Cookie Policy" updated="August 14, 2026">
        <p>
          This page explains what cookies and similar technologies this site uses, what each one is for, and
          how you can accept them, reject them, or change your choice later.
        </p>

        <h2>1. How we manage consent</h2>
        <p>
          When you enter the site you&apos;ll see a banner where you can <strong>accept all</strong>,{" "}
          <strong>reject</strong> what isn&apos;t necessary, or open <strong>preferences</strong> to choose
          category by category. Both buttons (accept and reject) carry equal visual weight: rejecting is as
          easy as accepting. We save your choice in your browser so we don&apos;t ask again on every visit.
        </p>

        <h2>2. Cookie categories</h2>
        <p>
          <strong>Strictly necessary.</strong> Cookies essential for the site to work (for example, to
          remember your consent choice). We currently don&apos;t use any cookies of this type — the site works
          without them.
        </p>
        <p>
          <strong>Analytics.</strong> Our main analytics tool is{" "}
          <a href="https://umami.is" target="_blank" rel="noreferrer">
            Umami
          </a>
          , which runs on our own infrastructure, <strong>doesn&apos;t use cookies</strong>, and doesn&apos;t collect
          data that identifies you individually — only aggregate statistics (pages viewed, device,
          approximate location by IP). That&apos;s why it doesn&apos;t require your prior consent. If we activate
          Google Analytics in the future, its cookies (e.g. <code>_ga</code>, <code>_gid</code>) will only
          load after you accept that category in the banner.
        </p>
        <p>
          <strong>Marketing.</strong> If we activate tools like Meta Pixel or Google Ads to measure
          advertising campaign performance, their cookies (e.g. <code>_fbp</code>) will only load after you
          accept that category in the banner.
        </p>

        <h2>3. How to change your choice</h2>
        <p>
          You can change your cookie choice at any time from the{" "}
          <strong>&ldquo;Cookie preferences&rdquo;</strong> link at the bottom of any page on the site.
        </p>

        <h2>4. More information</h2>
        <p>
          For more detail on what we do with the data we collect, see our{" "}
          <a href="/en/privacidad">privacy notice</a>. For specific questions, message us on WhatsApp at{" "}
          {site.whatsapp} or email <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
        </p>
      </LegalPageTemplate>
    );
  }

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

import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/LegalPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Aviso de privacidad | DevPilots",
    description:
      "Aviso de privacidad de DevPilots: qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos ARCO.",
  },
  en: {
    title: "Privacy Notice | DevPilots",
    description:
      "DevPilots privacy notice: what personal data we collect, what we use it for, and how to exercise your data rights.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/privacidad", locale });
}

export default async function PrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);

  if (locale === "en") {
    return (
      <LegalPageTemplate title="Privacy Notice" updated="August 14, 2026">
        <p>
          This privacy notice describes how <strong>{site.legalName}</strong>, operating out of{" "}
          {site.location}, handles the personal data of people who visit this site or reach out via
          WhatsApp, Instagram or any other channel, in compliance with Mexico&apos;s Federal Law on the
          Protection of Personal Data Held by Private Parties (LFPDPPP).
        </p>

        <h2>1. Who is responsible for your data</h2>
        <p>
          {site.legalName} is responsible for processing the personal data you provide us. You can reach us
          on WhatsApp at {site.whatsapp}, on Instagram at {site.instagram}, or by email at{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
        </p>

        <h2>2. Personal data we collect</h2>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li>
            <strong>Contact details</strong>: name, WhatsApp number, and any data you choose to share when
            messaging us (for example, your business name and industry).
          </li>
          <li>
            <strong>Browsing data</strong>: pages visited, time on site, device/browser type and approximate
            location by IP, collected in aggregate and without identifying you individually, through Umami,
            our own cookieless analytics tool.
          </li>
        </ul>
        <p>We do not collect financial, health or other sensitive personal data through this site.</p>

        <h2>3. Purposes of processing</h2>
        <p>We use your personal data to:</p>
        <ul>
          <li>Respond to your inquiries and follow up commercially (diagnoses, quotes, support).</li>
          <li>Understand how the site is used in order to improve it (aggregate analytics).</li>
          <li>Comply with legal or tax obligations when applicable.</li>
        </ul>
        <p>We do not use your data for purposes other than those above without asking for your additional consent.</p>

        <h2>4. Data transfers to third parties</h2>
        <p>
          When you message us on WhatsApp, your conversation is processed through WhatsApp/Meta&apos;s
          infrastructure under their own privacy policies. Our analytics tool (Umami) runs on our own
          infrastructure and does not share data with third parties or place cookies in your browser.
        </p>
        <p>
          If we activate tools like Google Analytics or Meta Ads/Pixel in the future, those tools will
          transfer browsing data to Google LLC and/or Meta Platforms, Inc. (companies based in the United
          States), only after you accept the corresponding category in the site&apos;s cookie notice. See the
          detail in our <a href="/en/cookies">cookie policy</a>.
        </p>

        <h2>5. Your data rights</h2>
        <p>
          You have the right to Access, Rectify or Cancel your personal data, as well as to Object to its use
          (ARCO rights), and to withdraw any consent you may have given us. To exercise these rights, write
          to{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> stating your name, the data you
          want to exercise your right over, and a contact method. We will respond within a reasonable period
          in accordance with the LFPDPPP.
        </p>

        <h2>6. Cookies and tracking technologies</h2>
        <p>
          The detail of which cookies we use, which require your consent, and how to manage them is in our{" "}
          <a href="/en/cookies">cookie policy</a>.
        </p>

        <h2>7. Changes to this notice</h2>
        <p>
          We may update this notice as our services or applicable law change. The date of the last update
          always appears at the top of this page. We recommend reviewing it periodically.
        </p>

        <h2>8. Important note</h2>
        <p>
          This privacy notice follows the standard structure required by the LFPDPPP for small businesses,
          but it does not replace a professional legal review. If the business starts processing online
          payments, health data, or receives significant traffic from users in the European Union or
          California (where GDPR/CCPA apply, respectively), a review by a specialized attorney is recommended
          before publishing related changes.
        </p>
      </LegalPageTemplate>
    );
  }

  return (
    <LegalPageTemplate title="Aviso de privacidad" updated="14 de agosto de 2026">
      <p>
        Este aviso de privacidad describe cómo <strong>{site.legalName}</strong>, con actividad en{" "}
        {site.location}, trata los datos personales de quienes visitan este sitio o se ponen en contacto
        por WhatsApp, Instagram o cualquier otro medio, en cumplimiento de la Ley Federal de Protección de
        Datos Personales en Posesión de los Particulares (LFPDPPP) de México.
      </p>

      <h2>1. Responsable del tratamiento de tus datos</h2>
      <p>
        {site.legalName} es responsable del tratamiento de los datos personales que nos proporciones. Podés
        contactarnos por WhatsApp al {site.whatsapp}, por Instagram en {site.instagram}, o por correo a{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>

      <h2>2. Datos personales que recabamos</h2>
      <p>Dependiendo de cómo interactúes con nosotros, podemos recabar:</p>
      <ul>
        <li>
          <strong>Datos de contacto</strong>: nombre, número de WhatsApp, y cualquier dato que decidas
          compartirnos al escribirnos (por ejemplo, el nombre y giro de tu negocio).
        </li>
        <li>
          <strong>Datos de navegación</strong>: páginas visitadas, tiempo de permanencia, tipo de
          dispositivo/navegador y ubicación aproximada por IP, recabados de forma agregada y sin
          identificarte individualmente a través de Umami, nuestra herramienta de analítica propia y sin
          cookies.
        </li>
      </ul>
      <p>No recabamos datos financieros, de salud ni otros datos personales sensibles a través de este sitio.</p>

      <h2>3. Finalidades del tratamiento</h2>
      <p>Usamos tus datos personales para:</p>
      <ul>
        <li>Responder tus consultas y darte seguimiento comercial (diagnósticos, cotizaciones, soporte).</li>
        <li>Entender cómo se usa el sitio para mejorarlo (analítica agregada).</li>
        <li>Cumplir obligaciones legales o fiscales cuando corresponda.</li>
      </ul>
      <p>
        No usamos tus datos para finalidades distintas a las anteriores sin pedirte tu consentimiento
        adicional.
      </p>

      <h2>4. Transferencia de datos a terceros</h2>
      <p>
        Cuando nos escribís por WhatsApp, tu conversación se procesa a través de la infraestructura de
        WhatsApp/Meta bajo sus propias políticas de privacidad. Nuestra analítica (Umami) corre en
        infraestructura propia y no comparte datos con terceros ni coloca cookies en tu navegador.
      </p>
      <p>
        Si en el futuro activamos herramientas como Google Analytics o Meta Ads/Pixel, esas herramientas
        transferirán datos de navegación a Google LLC y/o Meta Platforms, Inc. (empresas con sede en
        Estados Unidos), únicamente después de que aceptes la categoría correspondiente en el aviso de
        cookies del sitio. Podés ver el detalle en nuestra{" "}
        <a href="/cookies">política de cookies</a>.
      </p>

      <h2>5. Derechos ARCO</h2>
      <p>
        Tenés derecho a Acceder, Rectificar o Cancelar tus datos personales, así como a Oponerte al uso de
        los mismos (derechos ARCO), y a revocar el consentimiento que en su caso nos hayas otorgado. Para
        ejercerlos, escribinos a{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> indicando tu nombre, el dato sobre
        el que querés ejercer tu derecho, y un medio de contacto. Responderemos en un plazo razonable
        conforme a la LFPDPPP.
      </p>

      <h2>6. Cookies y tecnologías de rastreo</h2>
      <p>
        El detalle de qué cookies usamos, cuáles requieren tu consentimiento y cómo administrarlas está en
        nuestra <a href="/cookies">política de cookies</a>.
      </p>

      <h2>7. Cambios a este aviso de privacidad</h2>
      <p>
        Podemos actualizar este aviso ante cambios en nuestros servicios o en la legislación aplicable. La
        fecha de la última actualización siempre aparece al inicio de esta página. Te recomendamos
        revisarlo periódicamente.
      </p>

      <h2>8. Nota importante</h2>
      <p>
        Este aviso de privacidad se redactó siguiendo la estructura estándar exigida por la LFPDPPP para
        pequeños negocios, pero no sustituye una revisión legal profesional. Si el negocio empieza a
        procesar pagos en línea, datos de salud, o a recibir tráfico relevante de usuarios en la Unión
        Europea o California (donde aplican GDPR/CCPA respectivamente), se recomienda una revisión por un
        abogado especializado antes de publicar cambios relacionados.
      </p>
    </LegalPageTemplate>
  );
}

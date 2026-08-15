import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/LegalPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Aviso de privacidad | DevPilots",
  description:
    "Aviso de privacidad de DevPilots: qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos ARCO.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
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

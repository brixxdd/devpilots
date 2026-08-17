import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/LegalPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { resolveLocale } from "@/i18n/routing";

const meta = {
  es: {
    title: "Términos y condiciones | DevPilots",
    description:
      "Términos y condiciones de uso del sitio web y de los servicios de desarrollo web, sistemas y automatización de DevPilots.",
  },
  en: {
    title: "Terms and Conditions | DevPilots",
    description:
      "Terms and conditions for using the DevPilots website and its web development, systems and automation services.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);
  return buildMetadata({ ...meta[locale], path: "/terminos", locale });
}

export default async function TerminosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = resolveLocale(requested);

  if (locale === "en") {
    return (
      <LegalPageTemplate title="Terms and Conditions" updated="August 14, 2026">
        <p>
          These terms and conditions govern the use of this website and, more broadly, the business
          relationship between <strong>{site.legalName}</strong> ({site.location}) and those who hire its
          web development, systems, automation and digital consulting services. The specific terms of each
          project (scope, deliverables, price and timeline) are agreed separately, in writing, before any
          work begins.
        </p>

        <h2>1. Use of the site</h2>
        <p>
          This site is informational: it presents DevPilots&apos; services and facilitates contact via
          WhatsApp. You agree to use it lawfully, without attempting to compromise its security or affect
          its operation for other users.
        </p>

        <h2>2. Intellectual property of the site</h2>
        <p>
          The design, text, brand and graphic elements of this site are the property of {site.legalName},
          unless stated otherwise, and may not be reproduced or reused without prior authorization.
        </p>

        <h2>3. Contracted services</h2>
        <p>
          The scope, delivery times, payment terms and conditions of each project (websites, custom
          systems, WhatsApp automation, points of sale, etc.) are defined in a specific proposal or quote
          accepted by both parties before work begins. These general terms do not replace that particular
          agreement.
        </p>
        <p>
          Unless otherwise agreed in writing, once the project has been paid in full, the custom-developed
          source code is delivered to the client as described in the corresponding proposal.
        </p>

        <h2>4. Communication via WhatsApp</h2>
        <p>
          The main contact and project-coordination channel is WhatsApp. By messaging us, you agree that we
          may use that channel to follow up commercially and, if you hire a service, to coordinate the work.
        </p>

        <h2>5. Limitation of liability</h2>
        <p>
          DevPilots puts its best technical and professional effort into every project, but does not
          guarantee specific business outcomes (for example, an exact number of customers or sales), since
          these depend on factors outside our control. Liability for errors or failures in a deliverable is
          limited to correcting them as agreed in the project proposal.
        </p>

        <h2>6. Links to third parties</h2>
        <p>
          This site may link to third-party services (WhatsApp, Instagram). We are not responsible for the
          content or privacy policies of those external sites.
        </p>

        <h2>7. Changes to these terms</h2>
        <p>
          We may update these terms as our services or applicable regulations change. The date of the last
          update appears at the top of this page.
        </p>

        <h2>8. Contact</h2>
        <p>
          For questions about these terms, message us on WhatsApp at {site.whatsapp} or email{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
        </p>

        <h2>9. Important note</h2>
        <p>
          This text covers the basics for a services site like this one, but it does not replace legal
          advice. If you start handling higher-value contracts, online payments or clients outside Mexico,
          it&apos;s advisable to have a lawyer review both these terms and your project contracts.
        </p>
      </LegalPageTemplate>
    );
  }

  return (
    <LegalPageTemplate title="Términos y condiciones" updated="14 de agosto de 2026">
      <p>
        Estos términos y condiciones regulan el uso de este sitio web y, de forma general, la relación
        comercial entre <strong>{site.legalName}</strong> ({site.location}) y quienes contratan sus
        servicios de desarrollo web, sistemas, automatización y consultoría digital. Los términos
        específicos de cada proyecto (alcance, entregables, precio y tiempos) se acuerdan por separado, por
        escrito, antes de iniciar cualquier trabajo.
      </p>

      <h2>1. Uso del sitio</h2>
      <p>
        Este sitio es informativo: presenta los servicios de DevPilots y facilita el contacto por WhatsApp.
        Te comprometés a usarlo de forma lícita, sin intentar vulnerar su seguridad ni afectar su
        funcionamiento para otros usuarios.
      </p>

      <h2>2. Propiedad intelectual del sitio</h2>
      <p>
        El diseño, textos, marca y elementos gráficos de este sitio son propiedad de {site.legalName}, salvo
        que se indique lo contrario, y no pueden reproducirse ni reutilizarse sin autorización previa.
      </p>

      <h2>3. Servicios contratados</h2>
      <p>
        El alcance, tiempos de entrega, forma de pago y condiciones de cada proyecto (páginas web, sistemas
        a la medida, automatización de WhatsApp, puntos de venta, etc.) se definen en una propuesta o
        cotización específica aceptada por ambas partes antes de comenzar el trabajo. Estos términos
        generales no reemplazan ese acuerdo particular.
      </p>
      <p>
        Salvo que se acuerde lo contrario por escrito, una vez liquidado el proyecto, el código fuente
        desarrollado a la medida se entrega al cliente como se describe en la propuesta correspondiente.
      </p>

      <h2>4. Comunicación por WhatsApp</h2>
      <p>
        El canal principal de contacto y coordinación de proyectos es WhatsApp. Al escribirnos aceptás que
        usemos ese medio para darte seguimiento comercial y, si contratás un servicio, para coordinar el
        trabajo.
      </p>

      <h2>5. Límite de responsabilidad</h2>
      <p>
        DevPilots pone su mejor esfuerzo técnico y profesional en cada proyecto, pero no garantiza
        resultados de negocio específicos (por ejemplo, un número exacto de clientes o ventas), ya que estos
        dependen de factores fuera de nuestro control. La responsabilidad por errores o fallas en un
        entregable se limita a corregirlos conforme a lo acordado en la propuesta del proyecto.
      </p>

      <h2>6. Enlaces a terceros</h2>
      <p>
        Este sitio puede enlazar a servicios de terceros (WhatsApp, Instagram). No somos responsables del
        contenido ni de las políticas de privacidad de esos sitios externos.
      </p>

      <h2>7. Cambios a estos términos</h2>
      <p>
        Podemos actualizar estos términos cuando cambien nuestros servicios o la normativa aplicable. La
        fecha de la última actualización aparece al inicio de esta página.
      </p>

      <h2>8. Contacto</h2>
      <p>
        Para dudas sobre estos términos, escribinos por WhatsApp al {site.whatsapp} o a{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>

      <h2>9. Nota importante</h2>
      <p>
        Este texto cubre lo básico para un sitio de servicios como este, pero no sustituye asesoría legal.
        Si empezás a manejar contratos de mayor valor, pagos en línea o clientes fuera de México, te
        conviene que un abogado revise tanto estos términos como tus contratos de proyecto.
      </p>
    </LegalPageTemplate>
  );
}

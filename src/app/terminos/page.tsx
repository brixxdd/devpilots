import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/LegalPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Términos y condiciones | DevPilots",
  description:
    "Términos y condiciones de uso del sitio web y de los servicios de desarrollo web, sistemas y automatización de DevPilots.",
  path: "/terminos",
});

export default function TerminosPage() {
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

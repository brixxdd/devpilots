import { whatsappUrl } from "@/lib/utils";

export const site = {
  name: "DevPilots",
  tagline: "Soluciones digitales para negocios.",
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Proceso", href: "#proceso" },
    { label: "Capacidades", href: "#capacidades" },
    { label: "Contacto", href: "#contacto" },
  ],
  whatsapp: "+52 962 600 2508",
  instagram: "@dev_pilots25",
  location: "Tapachula, Chiapas / remoto",
  ctas: {
    diagnosis: whatsappUrl("Hola DevPilots, quiero solicitar un diagnóstico gratis"),
    proposal: whatsappUrl("Hola DevPilots, quiero una propuesta para mi negocio"),
    fitness: whatsappUrl("Hola DevPilots, quiero crecer mi negocio fitness"),
    contact: whatsappUrl("Hola DevPilots, quiero hablar sobre mi negocio"),
  },
};

export const heroStats = [
  { title: "Presencia", copy: "Tu negocio se ve serio en internet." },
  { title: "Operación", copy: "Procesos claros, clientes y pagos en orden." },
  { title: "Crecimiento", copy: "Marketing con seguimiento y dirección." },
];

export const dashboardBadges = [
  { title: "WhatsApp", copy: "Automatizado" },
  { title: "Campañas", copy: "Activas" },
  { title: "Clientes", copy: "Pipeline claro" },
  { title: "Agenda", copy: "Próximas citas" },
];

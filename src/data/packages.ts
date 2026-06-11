import { whatsappUrl } from "@/lib/utils";

export const packages = [
  {
    title: "Presencia Digital",
    copy: "Para negocios que necesitan verse profesionales y explicar bien lo que ofrecen.",
    features: ["Página web o landing", "Copy orientado a conversión", "Contacto y WhatsApp visibles"],
    href: whatsappUrl("Hola DevPilots, quiero una propuesta de Presencia Digital"),
  },
  {
    title: "Sistema a la Medida",
    copy: "Para negocios que necesitan organizar procesos, clientes, pagos, citas o reportes.",
    features: ["Panel administrativo", "Roles y base de datos", "Flujos internos claros"],
    href: whatsappUrl("Hola DevPilots, quiero una propuesta de Sistema a la Medida"),
    featured: true,
  },
  {
    title: "Growth Partner",
    copy: "Para negocios que quieren marketing, tecnología y soporte continuo en una misma dirección.",
    features: ["Estrategia digital", "Automatización y campañas", "Mejora continua"],
    href: whatsappUrl("Hola DevPilots, quiero una propuesta de Growth Partner"),
  },
];

import {
  BarChart3,
  Bot,
  Building2,
  Columns3,
  Database,
  LayoutDashboard,
  ListChecks,
  LockKeyhole,
  MessageCircle,
  PanelTop,
  TrendingUp,
  UserRoundCog,
} from "lucide-react";

export const problems = [
  {
    icon: Building2,
    es: { title: "Tu negocio no se ve profesional en internet", copy: "Construimos una presencia clara para que el primer contacto genere confianza." },
    en: { title: "Your business doesn't look professional online", copy: "We build a clear presence so the first contact builds trust." },
  },
  {
    icon: MessageCircle,
    es: { title: "Pierdes clientes por falta de seguimiento", copy: "Diseñamos flujos de contacto, agenda y recordatorios que reducen fugas." },
    en: { title: "You lose customers from a lack of follow-up", copy: "We design contact, scheduling and reminder flows that reduce drop-off." },
  },
  {
    icon: Bot,
    es: { title: "Dependes demasiado de WhatsApp manual", copy: "Convertimos mensajes repetitivos en respuestas, filtros y acciones ordenadas." },
    en: { title: "You rely too much on manual WhatsApp replies", copy: "We turn repetitive messages into organized replies, filters and actions." },
  },
  {
    icon: Columns3,
    es: { title: "No tienes sistema para clientes, pagos o citas", copy: "Centralizamos la información que hoy vive dispersa entre libretas y hojas." },
    en: { title: "You have no system for customers, payments or appointments", copy: "We centralize information that today lives scattered across notebooks and spreadsheets." },
  },
  {
    icon: TrendingUp,
    es: { title: "Tus redes se mueven, pero no generan ventas", copy: "Alineamos contenido, campañas y landing pages con objetivos comerciales." },
    en: { title: "Your social media moves, but doesn't generate sales", copy: "We align content, campaigns and landing pages with business goals." },
  },
  {
    icon: ListChecks,
    es: { title: "Tu operación crece, pero sigues en Excel", copy: "Creamos herramientas a la medida para que el crecimiento no desordene el negocio." },
    en: { title: "Your operation grows, but you're still in Excel", copy: "We build custom tools so growth doesn't disorganize your business." },
  },
];

export const solutions = [
  {
    icon: PanelTop,
    es: { title: "Páginas web profesionales", copy: "Sitios claros, modernos y optimizados para explicar tu oferta sin parecer improvisado.", tag: "Presencia" },
    en: { title: "Professional websites", copy: "Clear, modern, optimized sites that explain your offer without looking improvised.", tag: "Presence" },
  },
  {
    icon: TrendingUp,
    es: { title: "Landing pages para campañas", copy: "Páginas enfocadas en un objetivo: diagnósticos, registros, ventas o solicitudes.", tag: "Conversión" },
    en: { title: "Landing pages for campaigns", copy: "Pages focused on one goal: diagnoses, sign-ups, sales or requests.", tag: "Conversion" },
  },
  {
    icon: LayoutDashboard,
    es: { title: "Sistemas administrativos", copy: "Paneles para clientes, pagos, agenda, inventario, reportes o flujos internos.", tag: "Operación" },
    en: { title: "Administrative systems", copy: "Dashboards for customers, payments, scheduling, inventory, reports or internal flows.", tag: "Operations" },
  },
  {
    icon: Bot,
    es: { title: "Automatización por WhatsApp", copy: "Respuestas, filtros, recordatorios y flujos para atender sin depender de memoria.", tag: "Velocidad" },
    en: { title: "WhatsApp automation", copy: "Replies, filters, reminders and flows to respond without relying on memory.", tag: "Speed" },
  },
  {
    icon: BarChart3,
    es: { title: "Estrategia digital y redes sociales", copy: "Contenido y campañas conectadas con seguimiento, oferta y conversión.", tag: "Crecimiento" },
    en: { title: "Digital strategy and social media", copy: "Content and campaigns connected to follow-up, offer and conversion.", tag: "Growth" },
  },
  {
    icon: Building2,
    es: { title: "Soluciones para negocios locales", copy: "Gimnasios, consultorios, marcas personales y servicios que necesitan orden digital.", tag: "Especialización" },
    en: { title: "Solutions for local businesses", copy: "Gyms, clinics, personal brands and services that need digital order.", tag: "Specialization" },
  },
];

export const capabilities = [
  {
    icon: LayoutDashboard,
    es: { title: "Panel administrativo para tu equipo", copy: "Clientes, citas, pagos, solicitudes y operación diaria en un lugar central." },
    en: { title: "Admin panel for your team", copy: "Customers, appointments, payments, requests and daily operations in one place." },
  },
  {
    icon: LockKeyhole,
    es: { title: "Accesos por rol y control interno", copy: "Dueño, recepción, coach o equipo comercial con permisos según responsabilidad." },
    en: { title: "Role-based access and internal control", copy: "Owner, front desk, coach or sales team with permissions based on responsibility." },
  },
  {
    icon: BarChart3,
    es: { title: "Reportes para decidir mejor", copy: "Indicadores simples sobre leads, ventas, asistencia, campañas o pagos registrados." },
    en: { title: "Reports to decide better", copy: "Simple indicators on leads, sales, attendance, campaigns or recorded payments." },
  },
  {
    icon: Database,
    es: { title: "Base de clientes lista para crecer", copy: "Información ordenada para dar seguimiento, recuperar oportunidades y evitar fugas." },
    en: { title: "A customer base ready to grow", copy: "Organized information to follow up, recover opportunities and avoid drop-off." },
  },
  {
    icon: Bot,
    es: { title: "Automatizaciones de contacto", copy: "Respuestas, filtros, recordatorios y flujos que reducen trabajo manual repetitivo." },
    en: { title: "Contact automations", copy: "Replies, filters, reminders and flows that reduce repetitive manual work." },
  },
  {
    icon: UserRoundCog,
    es: { title: "Sistemas web responsivos", copy: "Herramientas que funcionan bien desde escritorio, tablet o celular, según tu operación." },
    en: { title: "Responsive web systems", copy: "Tools that work well from desktop, tablet or phone, based on how you operate." },
  },
];

export const capabilityProof = [
  { es: { title: "Captar", copy: "Landing, formularios y campañas." }, en: { title: "Capture", copy: "Landing pages, forms and campaigns." } },
  { es: { title: "Atender", copy: "WhatsApp, agenda y respuestas." }, en: { title: "Respond", copy: "WhatsApp, scheduling and replies." } },
  { es: { title: "Ordenar", copy: "Clientes, pagos y procesos." }, en: { title: "Organize", copy: "Customers, payments and processes." } },
  { es: { title: "Medir", copy: "Reportes y paneles claros." }, en: { title: "Measure", copy: "Clear reports and dashboards." } },
];

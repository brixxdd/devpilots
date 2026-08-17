import {
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Megaphone,
  Store,
  Trophy,
  Utensils,
} from "lucide-react";

export const businessTypes = [
  {
    icon: Dumbbell,
    es: { title: "Gimnasios", copy: "Inscripciones, pagos, asistencia, campañas y seguimiento a miembros." },
    en: { title: "Gyms", copy: "Sign-ups, payments, attendance, campaigns and member follow-up." },
  },
  {
    icon: HeartPulse,
    es: { title: "Consultorios", copy: "Agenda, recordatorios, historial básico y captación de pacientes." },
    en: { title: "Clinics", copy: "Scheduling, reminders, basic records and patient acquisition." },
  },
  {
    icon: Utensils,
    es: { title: "Restaurantes", copy: "Menús digitales, promociones, reservas y pedidos por WhatsApp." },
    en: { title: "Restaurants", copy: "Digital menus, promotions, reservations and orders via WhatsApp." },
  },
  {
    icon: Megaphone,
    es: { title: "Marcas personales", copy: "Autoridad, landing de servicios, contenido y captación de leads." },
    en: { title: "Personal brands", copy: "Authority, services landing page, content and lead capture." },
  },
  {
    icon: Trophy,
    es: { title: "Entrenadores", copy: "Programas, pagos, comunidad, agenda y seguimiento de clientes." },
    en: { title: "Trainers", copy: "Programs, payments, community, scheduling and client follow-up." },
  },
  {
    icon: GraduationCap,
    es: { title: "Academias", copy: "Registro, horarios, cursos, pagos y comunicación con alumnos." },
    en: { title: "Academies", copy: "Enrollment, schedules, courses, payments and student communication." },
  },
  {
    icon: Store,
    es: { title: "Negocios locales", copy: "Presencia profesional, mensajes ordenados y procesos más claros." },
    en: { title: "Local businesses", copy: "Professional presence, organized messaging and clearer processes." },
  },
];

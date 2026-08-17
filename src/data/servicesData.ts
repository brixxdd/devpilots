import type { Locale } from "@/i18n/routing";

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featuresTitle?: string;
  features: Array<{ title: string; desc: string }>;
  targetAudience: Array<{ title: string; desc: string }>;
  process: Array<{ step: string; title: string; desc: string }>;
  benefits: Array<{ title: string; desc: string }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaText?: string;
  whatsappMessage?: string;
  asideBadge?: string;
  asideDescription?: string;
  finalCtaDescription?: string;
}

const es: Record<string, ServiceDetail> = {
  "desarrollo-web-tapachula": {
    slug: "desarrollo-web-tapachula",
    title: "Desarrollo web a la medida en Tapachula",
    subtitle: "Plataformas y aplicaciones web robustas diseñadas exactamente para las necesidades de tu empresa en Chiapas.",
    description: "Creamos herramientas digitales avanzadas, portales interactivos y aplicaciones a la medida que resuelven flujos de trabajo complejos que las plantillas o soluciones genéricas simplemente no pueden cubrir.",
    featuresTitle: "Qué incluye nuestro servicio de desarrollo a la medida",
    features: [
      { title: "Arquitectura a la medida", desc: "Diseño y estructura de software pensados específicamente para tus procesos comerciales u operativos." },
      { title: "Panel administrativo autoadministrable", desc: "Gestión completa de contenidos, usuarios, registros y datos sin depender de conocimientos técnicos." },
      { title: "Bases de datos seguras", desc: "Estructuras de almacenamiento optimizadas, rápidas y con respaldos constantes automáticos en la nube." },
      { title: "Integración de APIs y pasarelas", desc: "Conexiones fluidas con sistemas de pago (Stripe, Openpay), CRMs, facturación y servicios de terceros." },
      { title: "Diseño premium y responsivo", desc: "Interfaces que se adaptan a celulares, tablets y computadoras de escritorio de manera fluida y atractiva." },
      { title: "Optimización de rendimiento", desc: "Código limpio con velocidad de carga excepcional para mejorar la experiencia de usuario y el SEO." }
    ],
    targetAudience: [
      { title: "Empresas en crecimiento", desc: "Negocios que necesitan centralizar operaciones y automatizar la gestión de datos internos." },
      { title: "Startups y plataformas SaaS", desc: "Emprendedores tecnológicos que buscan lanzar un producto mínimo viable o plataforma comercial robusta." },
      { title: "Profesionales y corporativos", desc: "Organizaciones que requieren portales privados de clientes, sistemas de cotización o portafolios complejos." }
    ],
    process: [
      { step: "01", title: "Levantamiento de Requerimientos", desc: "Analizamos tu modelo de negocio, flujos operativos y definimos el alcance técnico del software." },
      { step: "02", title: "Diseño UX/UI", desc: "Creamos prototipos visuales interactivos para que valides la navegación y experiencia antes de programar." },
      { step: "03", title: "Desarrollo y Pruebas", desc: "Escribimos código limpio y realizamos pruebas rigurosas de seguridad, velocidad y compatibilidad." },
      { step: "04", title: "Lanzamiento y Soporte", desc: "Desplegamos el sistema en servidores optimizados y te brindamos soporte técnico post-lanzamiento." }
    ],
    benefits: [
      { title: "Cero cobros por licencias de terceros", desc: "Al ser un sistema propio, no pagas mensualidades a plataformas genéricas que rentan su software." },
      { title: "Escalabilidad ilimitada", desc: "Puedes agregar funciones, módulos y usuarios conforme tu negocio crezca, sin restricciones de plan." },
      { title: "Ventaja competitiva real", desc: "Operarás con un software optimizado para tus ventajas competitivas, no adaptándote a las limitaciones de un software estándar." }
    ],
    faqs: [
      { question: "¿Qué diferencia hay entre desarrollo a la medida y una plantilla común?", answer: "Las plantillas son genéricas y obligan a tu negocio a adaptarse a ellas. El desarrollo a la medida se programa desde cero para que el software se adapte al 100% a tus flujos operativos actuales y futuros." },
      { question: "¿Cómo se maneja el soporte y mantenimiento?", answer: "Ofrecemos planes mensuales de mantenimiento preventivo, actualizaciones de seguridad, respaldos y horas de soporte para añadir pequeñas mejoras según tu negocio evolucione." },
      { question: "¿El código fuente me pertenece?", answer: "Totalmente. Una vez finalizado y liquidado el proyecto, te entregamos los accesos del repositorio y los servidores. El software es un activo de tu empresa." }
    ],
    ctaText: "Quiero una cotización a la medida",
    whatsappMessage: "Hola DevPilots, me interesa el servicio de Desarrollo Web a la medida en Tapachula."
  },
  "paginas-web-tapachula": {
    slug: "paginas-web-tapachula",
    title: "Diseño y desarrollo de páginas web en Tapachula",
    subtitle: "Sitios web profesionales, elegantes y optimizados para convertir visitas en clientes reales en Tapachula y todo Chiapas.",
    description: "Tu página web es la carta de presentación de tu negocio en internet. Creamos sitios web corporativos rápidos, modernos y con una estructura enfocada 100% en generar credibilidad y captar prospectos.",
    featuresTitle: "Qué incluye el diseño de tu página web profesional",
    features: [
      { title: "Diseño web personalizado", desc: "Olvídate de las páginas genéricas. Diseñamos de acuerdo a la identidad visual y colores de tu marca." },
      { title: "Estructura SEO local básica", desc: "Páginas optimizadas con palabras clave estratégicas para que Google te encuentre en Tapachula." },
      { title: "Botón directo a WhatsApp", desc: "Integración de chat flotante para que los clientes te contacten de forma inmediata en un solo clic." },
      { title: "Mapa interactivo de ubicación", desc: "Para que tus clientes locales sepan cómo llegar a tu consultorio, local o sucursal fácilmente." },
      { title: "Formularios de contacto inteligentes", desc: "Captación directa de correos y teléfonos de prospectos interesados en tus servicios." },
      { title: "Hosting y dominio incluidos", desc: "Gestión completa del alojamiento web rápido y tu dirección propia (.com o .com.mx) por el primer año." }
    ],
    targetAudience: [
      { title: "Profesionales de la salud y especialistas", desc: "Médicos, dentistas, psicólogos y terapeutas que desean captar pacientes y mostrar sus credenciales." },
      { title: "Negocios locales y tiendas", desc: "Restaurantes, boutiques, inmobiliarias y servicios locales que necesitan ser descubiertos en Tapachula." },
      { title: "Empresas de servicios", desc: "Despachos contables, jurídicos, constructoras y consultorías que buscan reflejar máxima seriedad y profesionalismo." }
    ],
    process: [
      { step: "01", title: "Reunión de Planeación", desc: "Definimos las secciones de tu página web (Inicio, Quiénes somos, Servicios, Contacto) y el objetivo principal." },
      { step: "02", title: "Diseño de Propuesta", desc: "Te presentamos una propuesta visual con los colores, tipografías y estructura para tu aprobación." },
      { step: "03", title: "Programación y Carga", desc: "Escribimos el código de la página, subimos tus textos, imágenes y optimizamos la velocidad de carga." },
      { step: "04", title: "Lanzamiento y SEO", desc: "Conectamos tu dominio, indexamos tu sitio en Google Search Console y la página queda activa en internet." }
    ],
    benefits: [
      { title: "Velocidad de carga excepcional", desc: "Nuestras páginas cargan en menos de 2 segundos en celulares, reduciendo el riesgo de que el cliente se vaya." },
      { title: "Total adaptabilidad móvil", desc: "El 85% de tus clientes te buscará en el teléfono. Tu sitio se verá impecable y será fácil de navegar en cualquier celular." },
      { title: "Enfoque de conversión (CTA)", desc: "Cada sección de la página está diseñada para guiar al usuario a tomar una acción: llamar, escribir por WhatsApp o registrarse." }
    ],
    faqs: [
      { question: "¿Qué necesito entregar para que inicien mi página web?", answer: "Necesitamos tu logotipo en buena calidad, la información de tu negocio (servicios, horarios, contacto) y fotos reales. Si no tienes fotos o textos, podemos ayudarte a redactar y seleccionar recursos profesionales." },
      { question: "¿Puedo modificar la información después?", answer: "Sí, creamos las páginas con código modular y gestores sencillos para que puedas actualizar textos, precios o fotos de manera muy fácil sin depender de nosotros para cambios pequeños." },
      { question: "¿Cuánto tardan en entregar la página?", answer: "El tiempo promedio de entrega para una página corporativa profesional es de 2 a 3 semanas una vez recibida toda la información básica." }
    ],
    ctaText: "Diseñar mi página web profesional",
    whatsappMessage: "Hola DevPilots, me interesa el servicio de Diseño de Páginas Web en Tapachula."
  },
  "sistemas-para-negocios": {
    slug: "sistemas-para-negocios",
    title: "Sistemas para administración de negocios en Tapachula",
    subtitle: "Digitaliza tus procesos comerciales, administrativos e inventarios con un sistema web seguro y a la medida.",
    description: "Deja atrás los procesos manuales, las libretas y las hojas de cálculo dispersas. Diseñamos sistemas administrativos accesibles desde cualquier navegador que centralizan el control de tu negocio.",
    featuresTitle: "Qué incluye nuestro sistema web de gestión comercial",
    features: [
      { title: "Control de clientes (CRM)", desc: "Base de datos con historial de compras, notas de seguimiento, datos de contacto y preferencias de cada cliente." },
      { title: "Administración de cobros y caja", desc: "Registro de ingresos, egresos, abonos, cuentas por cobrar e historial de transacciones diarias." },
      { title: "Módulo de cotizaciones rápido", desc: "Genera propuestas comerciales profesionales en formato PDF y envíalas directamente por correo o WhatsApp." },
      { title: "Roles de usuario jerárquicos", desc: "Accesos personalizados para dueños, administradores, recepcionistas o vendedores con permisos limitados." },
      { title: "Dashboard de analíticas", desc: "Gráficos intuitivos con ventas, productos más vendidos, cuentas pendientes y utilidad neta en tiempo real." },
      { title: "Alertas y notificaciones", desc: "Avisos en pantalla o vía correo cuando haya inventarios bajos o facturas por vencer." }
    ],
    targetAudience: [
      { title: "Comercializadoras y distribuidores", desc: "Negocios que necesitan llevar control estricto de mercancía entrante, saliente y comisiones de venta." },
      { title: "Empresas de servicios con agenda", desc: "Clínicas, despachos y talleres que requieren registrar citas, tareas y asignación de personal." },
      { title: "Negocios familiares en crecimiento", desc: "Dueños que quieren delegar la operación y supervisar las finanzas de su negocio sin necesidad de estar físicamente presentes." }
    ],
    process: [
      { step: "01", title: "Mapeo de Procesos", desc: "Nos sentamos contigo a entender cómo se vende, compra y administra tu negocio para replicarlo digitalmente sin fricción." },
      { step: "02", title: "Estructuración de Base de Datos", desc: "Modelamos la base de datos para garantizar que las consultas sean rápidas y la información esté 100% organizada." },
      { step: "03", title: "Desarrollo del Panel Administrativo", desc: "Programamos las pantallas de captura, listados y reportes utilizando interfaces intuitivas y limpias." },
      { step: "04", title: "Migración de Datos y Capacitación", desc: "Subimos tu información actual (clientes, inventario) y entrenamos a tu equipo para el uso diario del sistema." }
    ],
    benefits: [
      { title: "Acceso seguro desde cualquier lugar", desc: "Al ser un sistema web, puedes revisar las finanzas de tu negocio desde tu celular en casa o de viaje en cualquier momento." },
      { title: "Información verídica y en tiempo real", desc: "Toma decisiones basadas en datos reales de ventas y gastos diarios, sin esperar al cierre de mes o reportes manuales." },
      { title: "Reducción de errores operativos", desc: "La automatización de cálculos y flujos guiados minimiza las equivocaciones humanas de tus colaboradores." }
    ],
    faqs: [
      { question: "¿Necesito un servidor costoso en mi oficina?", answer: "No. Hospedamos el sistema en servidores en la nube (AWS, DigitalOcean o similar) de alta confiabilidad. Solo necesitas un dispositivo con acceso a internet para ingresar." },
      { question: "¿Se puede integrar con facturación electrónica?", answer: "Sí, podemos conectar el sistema con APIs especializadas de facturación para generar facturas CFDI directamente desde el portal con un par de clics." },
      { question: "¿Qué pasa si mis necesidades cambian en el futuro?", answer: "Nuestros sistemas están construidos modularmente. Esto significa que podemos agregar nuevos reportes, módulos o integraciones en cualquier momento sin alterar el funcionamiento actual." }
    ],
    ctaText: "Digitalizar mi administración hoy",
    whatsappMessage: "Hola DevPilots, me interesa el servicio de Sistemas para Negocios en Tapachula."
  },
  "automatizacion-whatsapp": {
    slug: "automatizacion-whatsapp",
    title: "Automatización de WhatsApp para negocios en Tapachula",
    subtitle: "Chatbots inteligentes y flujos automatizados para atender clientes 24/7 y enviar recordatorios de cobro y citas.",
    description: "Multiplica la capacidad de atención de tu equipo. Automatizamos tu WhatsApp utilizando la API oficial de Meta para responder preguntas frecuentes, captar datos de prospectos y agendar servicios de manera automática.",
    featuresTitle: "Características de tu automatización de WhatsApp",
    features: [
      { title: "Chatbots conversacionales interactivos", desc: "Respuestas con botones interactivos y flujos guiados para perfilar al cliente sin intervención humana." },
      { title: "Envío masivo y notificaciones de API", desc: "Envía alertas personalizadas de promociones o avisos importantes sin riesgo de bloqueo de línea." },
      { title: "Recordatorios automáticos de citas", desc: "El sistema envía avisos de confirmación previos para reducir inasistencias en tu negocio." },
      { title: "Derivación a agentes humanos", desc: "Cuando el bot detecta que se requiere atención personalizada, transfiere el chat al equipo correspondiente." },
      { title: "Integración con tu CRM o Base de Datos", desc: "Guarda automáticamente los datos de contacto y las consultas del cliente en tu sistema de gestión." },
      { title: "Atención multi-agente", desc: "Varios miembros de tu equipo pueden responder chats desde el mismo número usando un panel centralizado." }
    ],
    targetAudience: [
      { title: "Gimnasios y centros deportivos", desc: "Para enviar recordatorios de mensualidades vencidas y confirmar horarios de clases grupales." },
      { title: "Consultorios y clínicas de salud", desc: "Para agendar citas, responder dudas sobre ubicaciones y enviar recordatorios de consulta automática." },
      { title: "Negocios con alta demanda de mensajes", desc: "Especialmente restaurantes con servicio a domicilio, inmobiliarias y comercios con consultas repetitivas." }
    ],
    process: [
      { step: "01", title: "Diseño del Flujo Conversacional", desc: "Redactamos las preguntas, respuestas y botones en un diagrama lógico para que la conversación sea clara y útil." },
      { step: "02", title: "Aprobación y Configuración de API", desc: "Vinculamos tu línea comercial con la API oficial de WhatsApp Cloud de Meta y configuramos la cuenta comercial." },
      { step: "03", title: "Programación e Integración", desc: "Conectamos el bot con tus sistemas internos para consultar datos en tiempo real (como citas disponibles o adeudos)." },
      { step: "04", title: "Lanzamiento y Ajustes", desc: "Activamos el bot y analizamos las interacciones iniciales para refinar los textos de respuesta y hacerlo más natural." }
    ],
    benefits: [
      { title: "Atención inmediata 24/7", desc: "Tus clientes recibirán respuesta en segundos, incluso de noche, fines de semana o días festivos." },
      { title: "Optimización de personal", desc: "Libera a tu equipo de responder 50 veces al día el costo, ubicación u horarios, permitiéndoles enfocarse en cerrar ventas complejas." },
      { title: "Reducción de ausentismo", desc: "Recordar de forma automática las citas por WhatsApp reduce hasta en un 40% las ausencias y cancelaciones de última hora." }
    ],
    faqs: [
      { question: "¿Existe riesgo de que me bloqueen el número?", answer: "Al utilizar la API oficial de Cloud WhatsApp (Meta), tu número está totalmente protegido bajo las políticas de Meta, evitando los bloqueos comunes de los bots no oficiales." },
      { question: "¿Qué pasa si un cliente hace una pregunta que el bot no sabe responder?", answer: "El bot está programado para detectar cuando no tiene la respuesta o si el usuario solicita hablar con una persona, transfiriendo de inmediato la conversación a un panel multiagente." },
      { question: "¿Se cobra por mensaje enviado?", answer: "Meta ofrece 1,000 conversaciones mensuales totalmente gratis iniciadas por el usuario. Para volúmenes mayores, el costo por conversación es sumamente bajo (centavos de peso mexicano)." }
    ],
    ctaText: "Automatizar mi WhatsApp ahora",
    whatsappMessage: "Hola DevPilots, me interesa el servicio de Automatización de WhatsApp en Tapachula."
  },
  "punto-de-venta-tapachula": {
    slug: "punto-de-venta-tapachula",
    title: "Sistemas de punto de venta e inventario en Tapachula",
    subtitle: "Agiliza tus cobros, controla existencias y supervisa tu dinero con un punto de venta moderno y robusto.",
    description: "Un control deficiente del inventario y el efectivo frena el crecimiento de tu tienda. Implementamos soluciones de Punto de Venta (POS) intuitivas y estables para que conozcas la salud financiera de tu comercio diariamente.",
    featuresTitle: "Qué incluye nuestra solución de Punto de Venta",
    features: [
      { title: "Registro ultra rápido de ventas", desc: "Busca productos por nombre, categoría o lector de código de barras para cobrar en segundos." },
      { title: "Control de inventarios en tiempo real", desc: "Descuento automático de existencias en cada venta y avisos de stock bajo para evitar desabasto." },
      { title: "Corte de caja y turnos", desc: "Reportes precisos de entradas, salidas, retiros de efectivo, cobros con tarjeta y arqueos de caja por empleado." },
      { title: "Compatibilidad con periféricos", desc: "Conexión directa a cajones de dinero, impresoras térmicas de tickets y lectores de código de barras." },
      { title: "Historial y reportes de ventas", desc: "Analiza cuáles son tus productos estrella y qué días u horas generas mayor facturación." },
      { title: "Base de datos de proveedores", desc: "Controla compras, costos de adquisición y cuentas pendientes con tus proveedores comerciales." }
    ],
    targetAudience: [
      { title: "Tiendas minoristas y boutiques", desc: "Ropa, calzado, farmacias, veterinarias y negocios con un catálogo amplio de productos." },
      { title: "Cafeterías y locales de comida", desc: "Negocios que requieren imprimir comandas en cocina, gestionar mesas y cobrar rápidamente." },
      { title: "Minisuper y tiendas de conveniencia", desc: "Comercios con alta afluencia de clientes que requieren agilidad de cobro y registro de inventario masivo." }
    ],
    process: [
      { step: "01", title: "Evaluación de Hardware", desc: "Revisamos tus equipos actuales (computadora, tablet) o te asesoramos en la compra de los periféricos adecuados." },
      { step: "02", title: "Configuración del Sistema", desc: "Instalamos el software, configuramos los impuestos, formatos de ticket de cobro y parámetros de venta." },
      { step: "03", title: "Carga de Catálogo", desc: "Subimos tu inventario inicial: nombres de productos, códigos de barras, stock actual, costos y precios de venta." },
      { step: "04", title: "Capacitación y Pruebas", desc: "Entrenamos a tus cajeros y administradores con simulaciones de venta reales antes de la apertura oficial." }
    ],
    benefits: [
      { title: "Adiós a las pérdidas hormiga", desc: "Lleva el control de cada peso y cada pieza de mercancía. Detecta discrepancias de efectivo al instante en el corte de caja." },
      { title: "Cortes de caja automáticos", desc: "Ahorra horas al final del día. El sistema calcula exactamente cuánto debe haber en caja entre efectivo, tarjetas y vales." },
      { title: "Compras inteligentes", desc: "Conoce qué productos rotan más rápido para invertir tu dinero solo en mercancía que se vende y evitar stock estancado." }
    ],
    faqs: [
      { question: "¿Qué equipos necesito para usar el sistema?", answer: "El sistema puede correr en casi cualquier computadora con Windows, Mac o Linux, o incluso en tablets Android/iPad. Requiere conexión USB para lector de barras e impresora térmica de tickets." },
      { question: "¿Puedo controlar múltiples sucursales?", answer: "Sí, contamos con configuraciones en la nube que te permiten ver las ventas e inventarios de todas tus sucursales centralizadas desde un solo panel administrativo." },
      { question: "¿Qué pasa si se va el internet en mi local?", answer: "Nuestros sistemas locales-sincronizados permiten seguir facturando y registrando ventas sin conexión de internet, subiendo los datos a la nube automáticamente cuando se restablece la red." }
    ],
    ctaText: "Instalar punto de venta en mi negocio",
    whatsappMessage: "Hola DevPilots, me interesa el servicio de Punto de Venta en Tapachula."
  },
  "software-para-gimnasios": {
    slug: "software-para-gimnasios",
    title: "Software para administración de gimnasios en Tapachula",
    subtitle: "Lleva el control de membresías, asistencias, cobros y accesos de tu centro fitness o estudio deportivo.",
    description: "Elimina la recepción desorganizada y las fugas de dinero. Nuestro software especializado te ayuda a administrar planes, registrar asistencias automáticamente y enviar recordatorios de pago antes del vencimiento.",
    featuresTitle: "Módulos clave del software para gimnasios y boxes",
    features: [
      { title: "Control de membresías y vigencias", desc: "Clasificación por planes (mensual, trimestral, pase diario) con semáforo visual de estatus de socio." },
      { title: "Registro de asistencia automatizado", desc: "Registro rápido en recepción mediante código QR en celular, credencial con código de barras o huella digital." },
      { title: "Recordatorios de cobro automáticos", desc: "Envío programado de avisos de vencimiento directamente al WhatsApp del socio con el enlace de pago." },
      { title: "Agenda de clases y reservas", desc: "Permite a tus socios reservar su lugar en clases grupales con cupo limitado (como CrossFit, yoga o spinning) desde la web." },
      { title: "Módulo de venta de suplementos (POS)", desc: "Controla las ventas de botellas de agua, proteína, ropa y snacks en la barra de tu gimnasio." },
      { title: "Estadísticas de retención de socios", desc: "Gráficos de socios activos, altas, bajas y comportamiento de asistencia para medir la fidelidad." }
    ],
    targetAudience: [
      { title: "Gimnasios convencionales de pesas", desc: "Centros que requieren control estricto de accesos y cobro recurrente de mensualidades." },
      { title: "Boxes de CrossFit y entrenamiento funcional", desc: "Estudios que manejan clases con cupos limitados y reservas obligatorias." },
      { title: "Academias de artes marciales, danza y yoga", desc: "Escuelas con cobros por mensualidades, paquetes de clases específicas y control de asistencia." }
    ],
    process: [
      { step: "01", title: "Definición de Planes y Clases", desc: "Configuramos tu catálogo de membresías, disciplinas, instructores, horarios de clases y cupos máximos." },
      { step: "02", title: "Carga de Socios Activos", desc: "Importamos tu lista de socios actual con sus fechas de vencimiento de pago para no interrumpir tu operación." },
      { step: "03", title: "Instalación de Lector de Acceso", desc: "Conectamos el hardware de lectura (cámara QR, lector de tarjetas o huella digital) en tu mostrador de recepción." },
      { step: "04", title: "Arranque y Capacitación", desc: "Capacitamos al staff de recepción y entrenadores en la gestión del día a día y comenzamos a registrar asistencias." }
    ],
    benefits: [
      { title: "Reduce la cartera vencida al mínimo", desc: "Los recordatorios automáticos por WhatsApp y la pantalla de alerta en recepción evitan que entren socios con mensualidades vencidas." },
      { title: "Recepción ágil y automatizada", desc: "Los socios se auto-registran al ingresar escaneando su código QR, permitiendo que tu recepcionista se enfoque en vender membresías." },
      { title: "Fidelización de clientes", desc: "Identifica a los socios que tienen semanas sin asistir para enviarles un mensaje automático de seguimiento y evitar que cancelen su plan." }
    ],
    faqs: [
      { question: "¿Cómo entran los socios si no hay recepcionista?", answer: "El software puede integrarse con chapas magnéticas o torniquetes físicos que se abren automáticamente solo si el socio escanea un código QR activo y sin adeudos." },
      { question: "¿Los socios necesitan descargar una app pesada?", answer: "No. Acceden a una aplicación web progresiva optimizada para móviles que pueden guardar en su pantalla de inicio como un acceso directo rápido sin gastar almacenamiento." },
      { question: "¿Puedo manejar entrenamientos y dietas en el sistema?", answer: "Sí, el software cuenta con un módulo opcional donde los coaches pueden cargar rutinas de ejercicio y dar seguimiento a los avances de peso y medidas de los socios." }
    ],
    ctaText: "Crecer mi gimnasio hoy",
    whatsappMessage: "Hola DevPilots, me interesa el servicio de Software para Gimnasios en Tapachula."
  },
  "desarrollo-software-guatemala": {
    slug: "desarrollo-software-guatemala",
    title: "Desarrollo de software y páginas web para negocios en Guatemala",
    subtitle: "Sistemas a la medida, páginas web y automatización de WhatsApp para negocios en Chiquimula, Esquipulas, Concepción Las Minas y toda Guatemala, con atención 100% remota.",
    description: "Desde Tapachula, en la frontera con Guatemala, apoyamos a negocios guatemaltecos a digitalizar su operación: páginas web profesionales, sistemas administrativos, puntos de venta y automatización de WhatsApp, coordinados a distancia sin perder cercanía ni tiempos de respuesta.",
    featuresTitle: "Qué incluye nuestro servicio para negocios en Guatemala",
    features: [
      { title: "Páginas web y sistemas a la medida", desc: "Sitios web y plataformas administrativas diseñadas para las necesidades reales de tu negocio en Guatemala." },
      { title: "Coordinación 100% remota", desc: "Todo el proceso —reuniones, revisiones y entregas— se hace por WhatsApp y videollamada, sin necesidad de que viajes ni de que viajemos." },
      { title: "Automatización de WhatsApp", desc: "Chatbots y recordatorios automáticos para atender clientes y cobros sin depender de estar siempre conectado." },
      { title: "Punto de venta e inventario", desc: "Control de ventas, caja e inventario para comercios, farmacias y negocios de la región." },
      { title: "Pagos y facturación adaptados", desc: "Integración con pasarelas de pago y formatos de facturación acordes a cómo opera tu negocio en Guatemala." },
      { title: "Soporte y mantenimiento continuo", desc: "Acompañamiento posterior al lanzamiento para resolver dudas, ajustes y mejoras según crece tu negocio." }
    ],
    targetAudience: [
      { title: "Comercios y negocios locales", desc: "Tiendas, farmacias, restaurantes y negocios familiares en Chiquimula, Esquipulas, Concepción Las Minas y municipios cercanos que quieren verse serios en internet." },
      { title: "Gimnasios y centros deportivos", desc: "Negocios fitness que necesitan control de membresías, asistencia y cobros automatizados." },
      { title: "Profesionales y consultorios", desc: "Médicos, abogados, contadores y consultores que buscan una página web y sistema de agenda profesional." }
    ],
    process: [
      { step: "01", title: "Diagnóstico por WhatsApp", desc: "Platicamos sobre tu negocio, tus procesos actuales y qué necesitas resolver, sin costo ni compromiso." },
      { step: "02", title: "Propuesta y Cotización", desc: "Te enviamos una propuesta clara con alcance, tiempos y costo en quetzales o dólares según prefieras." },
      { step: "03", title: "Desarrollo y Revisiones", desc: "Construimos tu proyecto y lo revisamos juntos en videollamadas periódicas hasta que quede exactamente como lo necesitas." },
      { step: "04", title: "Lanzamiento y Soporte", desc: "Ponemos tu proyecto en marcha y quedamos disponibles por WhatsApp para soporte y ajustes." }
    ],
    benefits: [
      { title: "Cercanía real, no solo geográfica", desc: "Al estar justo en la frontera, entendemos la forma de hacer negocios en la región, no solo el idioma." },
      { title: "Sin necesidad de viajar", desc: "Todo el proceso está diseñado para funcionar a distancia sin perder calidad ni tiempos de respuesta." },
      { title: "Precios claros desde el inicio", desc: "Cotización cerrada antes de empezar, sin sorpresas ni cobros ocultos a mitad de proyecto." }
    ],
    faqs: [
      { question: "¿Trabajan con negocios fuera de Tapachula, en Guatemala?", answer: "Sí. Aunque estamos ubicados en Tapachula, Chiapas, atendemos negocios en Guatemala —incluyendo Chiquimula, Esquipulas y Concepción Las Minas— de forma completamente remota, coordinando todo por WhatsApp y videollamada." },
      { question: "¿Cómo se manejan los pagos si estoy en Guatemala?", answer: "Nos adaptamos a la forma de pago que te sea más práctica: transferencia, pasarela en línea o el método que ya uses para tus operaciones internacionales." },
      { question: "¿El soporte después de la entrega también es remoto?", answer: "Sí, todo el soporte y mantenimiento se da por WhatsApp y acceso remoto, con los mismos tiempos de respuesta que le damos a nuestros clientes en Tapachula." }
    ],
    ctaText: "Quiero una propuesta para mi negocio en Guatemala",
    whatsappMessage: "Hola DevPilots, tengo un negocio en Guatemala y me interesa una cotización.",
    asideBadge: "Atención remota para Guatemala",
    asideDescription: "Nos encargamos de todo el proceso técnico y creativo, coordinando por WhatsApp y videollamada para que tu negocio en Guatemala tenga un sistema profesional sin importar la distancia.",
    finalCtaDescription: "Te daremos un diagnóstico claro y una propuesta para tu negocio en Guatemala, con atención 100% remota por WhatsApp."
  }
};

const en: Record<string, ServiceDetail> = {
  "desarrollo-web-tapachula": {
    slug: "desarrollo-web-tapachula",
    title: "Custom web development in Tapachula",
    subtitle: "Robust web platforms and applications designed exactly for the needs of your business in Chiapas.",
    description: "We build advanced digital tools, interactive portals and custom applications that solve complex workflows that templates or off-the-shelf solutions simply can't cover.",
    featuresTitle: "What our custom development service includes",
    features: [
      { title: "Custom architecture", desc: "Software design and structure built specifically for your business or operational processes." },
      { title: "Self-manageable admin panel", desc: "Full management of content, users, records and data without relying on technical knowledge." },
      { title: "Secure databases", desc: "Optimized, fast storage structures with constant automatic backups in the cloud." },
      { title: "API and payment gateway integration", desc: "Seamless connections with payment systems (Stripe, Openpay), CRMs, invoicing and third-party services." },
      { title: "Premium, responsive design", desc: "Interfaces that adapt smoothly and attractively to phones, tablets and desktop computers." },
      { title: "Performance optimization", desc: "Clean code with exceptional load speed to improve user experience and SEO." }
    ],
    targetAudience: [
      { title: "Growing companies", desc: "Businesses that need to centralize operations and automate internal data management." },
      { title: "Startups and SaaS platforms", desc: "Tech entrepreneurs looking to launch a minimum viable product or a robust commercial platform." },
      { title: "Professionals and corporations", desc: "Organizations that need private client portals, quoting systems or complex portfolios." }
    ],
    process: [
      { step: "01", title: "Requirements Gathering", desc: "We analyze your business model, operational flows and define the technical scope of the software." },
      { step: "02", title: "UX/UI Design", desc: "We create interactive visual prototypes so you can validate navigation and experience before we code." },
      { step: "03", title: "Development and Testing", desc: "We write clean code and run rigorous security, speed and compatibility tests." },
      { step: "04", title: "Launch and Support", desc: "We deploy the system on optimized servers and provide post-launch technical support." }
    ],
    benefits: [
      { title: "Zero third-party license fees", desc: "As it's your own system, you don't pay monthly fees to generic platforms that rent out their software." },
      { title: "Unlimited scalability", desc: "You can add features, modules and users as your business grows, with no plan restrictions." },
      { title: "Real competitive advantage", desc: "You'll operate with software optimized for your competitive edge, instead of adapting to the limits of standard software." }
    ],
    faqs: [
      { question: "What's the difference between custom development and a common template?", answer: "Templates are generic and force your business to adapt to them. Custom development is coded from scratch so the software fits 100% to your current and future operational workflows." },
      { question: "How is support and maintenance handled?", answer: "We offer monthly plans with preventive maintenance, security updates, backups and support hours to add small improvements as your business evolves." },
      { question: "Do I own the source code?", answer: "Completely. Once the project is finished and paid in full, we hand over the repository and server access. The software is an asset of your company." }
    ],
    ctaText: "I want a custom quote",
    whatsappMessage: "Hi DevPilots, I'm interested in the Custom Web Development service in Tapachula."
  },
  "paginas-web-tapachula": {
    slug: "paginas-web-tapachula",
    title: "Website design and development in Tapachula",
    subtitle: "Professional, elegant websites optimized to turn visitors into real customers across Tapachula and all of Chiapas.",
    description: "Your website is your business's calling card on the internet. We build fast, modern corporate sites structured 100% around building credibility and capturing leads.",
    featuresTitle: "What your professional website design includes",
    features: [
      { title: "Custom web design", desc: "Forget generic pages. We design according to your brand's visual identity and colors." },
      { title: "Basic local SEO structure", desc: "Pages optimized with strategic keywords so Google finds you in Tapachula." },
      { title: "Direct WhatsApp button", desc: "Floating chat integration so customers can reach you instantly with one click." },
      { title: "Interactive location map", desc: "So your local customers can easily find their way to your office, store or branch." },
      { title: "Smart contact forms", desc: "Direct capture of emails and phone numbers from prospects interested in your services." },
      { title: "Hosting and domain included", desc: "Full management of fast web hosting and your own domain (.com or .com.mx) for the first year." }
    ],
    targetAudience: [
      { title: "Health professionals and specialists", desc: "Doctors, dentists, psychologists and therapists who want to attract patients and showcase their credentials." },
      { title: "Local businesses and shops", desc: "Restaurants, boutiques, real estate agencies and local services that need to be discovered in Tapachula." },
      { title: "Service companies", desc: "Accounting, legal, construction and consulting firms that want to project maximum seriousness and professionalism." }
    ],
    process: [
      { step: "01", title: "Planning Meeting", desc: "We define your website's sections (Home, About Us, Services, Contact) and its main goal." },
      { step: "02", title: "Design Proposal", desc: "We present a visual proposal with colors, typography and structure for your approval." },
      { step: "03", title: "Coding and Content Upload", desc: "We write the page's code, upload your text and images, and optimize load speed." },
      { step: "04", title: "Launch and SEO", desc: "We connect your domain, index your site on Google Search Console, and the page goes live." }
    ],
    benefits: [
      { title: "Exceptional load speed", desc: "Our pages load in under 2 seconds on mobile, reducing the risk of losing the customer." },
      { title: "Full mobile responsiveness", desc: "85% of your customers will look for you on their phone. Your site will look flawless and be easy to navigate on any mobile." },
      { title: "Conversion-focused (CTA)", desc: "Every section of the page is designed to guide the user toward an action: calling, messaging on WhatsApp or signing up." }
    ],
    faqs: [
      { question: "What do I need to provide to get started?", answer: "We need your logo in good quality, your business information (services, hours, contact) and real photos. If you don't have photos or copy, we can help write and select professional resources." },
      { question: "Can I update the content later?", answer: "Yes, we build pages with modular code and simple management tools so you can update text, prices or photos easily without depending on us for small changes." },
      { question: "How long does it take to deliver the page?", answer: "The average delivery time for a professional corporate page is 2 to 3 weeks once we've received all the basic information." }
    ],
    ctaText: "Design my professional website",
    whatsappMessage: "Hi DevPilots, I'm interested in the Website Design service in Tapachula."
  },
  "sistemas-para-negocios": {
    slug: "sistemas-para-negocios",
    title: "Business management systems in Tapachula",
    subtitle: "Digitize your sales, administrative and inventory processes with a secure, custom-built web system.",
    description: "Leave manual processes, notebooks and scattered spreadsheets behind. We design administrative systems accessible from any browser that centralize control of your business.",
    featuresTitle: "What our business management web system includes",
    features: [
      { title: "Customer control (CRM)", desc: "A database with purchase history, follow-up notes, contact details and preferences for every customer." },
      { title: "Payments and cash management", desc: "Recording of income, expenses, installments, receivables and a daily transaction history." },
      { title: "Fast quoting module", desc: "Generate professional business proposals as PDFs and send them directly by email or WhatsApp." },
      { title: "Hierarchical user roles", desc: "Custom access for owners, administrators, front-desk staff or salespeople with limited permissions." },
      { title: "Analytics dashboard", desc: "Intuitive charts of sales, best-selling products, pending balances and net profit in real time." },
      { title: "Alerts and notifications", desc: "On-screen or email alerts when inventory runs low or invoices are about to come due." }
    ],
    targetAudience: [
      { title: "Distributors and resellers", desc: "Businesses that need strict control over incoming and outgoing merchandise and sales commissions." },
      { title: "Service businesses with scheduling", desc: "Clinics, offices and workshops that need to log appointments, tasks and staff assignments." },
      { title: "Growing family businesses", desc: "Owners who want to delegate operations and oversee their business finances without needing to be physically present." }
    ],
    process: [
      { step: "01", title: "Process Mapping", desc: "We sit down with you to understand how your business sells, buys and manages itself, so we can replicate it digitally with no friction." },
      { step: "02", title: "Database Structuring", desc: "We model the database to guarantee fast queries and 100% organized information." },
      { step: "03", title: "Admin Panel Development", desc: "We build the data-entry screens, listings and reports using intuitive, clean interfaces." },
      { step: "04", title: "Data Migration and Training", desc: "We upload your current information (customers, inventory) and train your team to use the system daily." }
    ],
    benefits: [
      { title: "Secure access from anywhere", desc: "Since it's a web system, you can check your business finances from your phone at home or on the go, anytime." },
      { title: "Accurate, real-time information", desc: "Make decisions based on real daily sales and expense data, without waiting for month-end closing or manual reports." },
      { title: "Fewer operational errors", desc: "Automated calculations and guided workflows minimize human mistakes from your staff." }
    ],
    faqs: [
      { question: "Do I need an expensive server at my office?", answer: "No. We host the system on highly reliable cloud servers (AWS, DigitalOcean or similar). You only need a device with internet access to log in." },
      { question: "Can it integrate with electronic invoicing?", answer: "Yes, we can connect the system to specialized invoicing APIs to generate CFDI invoices directly from the portal in a couple of clicks." },
      { question: "What if my needs change in the future?", answer: "Our systems are built modularly. That means we can add new reports, modules or integrations at any time without disrupting current functionality." }
    ],
    ctaText: "Digitize my business today",
    whatsappMessage: "Hi DevPilots, I'm interested in the Business Systems service in Tapachula."
  },
  "automatizacion-whatsapp": {
    slug: "automatizacion-whatsapp",
    title: "WhatsApp automation for businesses in Tapachula",
    subtitle: "Smart chatbots and automated flows to serve customers 24/7 and send payment and appointment reminders.",
    description: "Multiply your team's capacity to respond. We automate your WhatsApp using Meta's official API to answer frequently asked questions, capture lead data and schedule services automatically.",
    featuresTitle: "Features of your WhatsApp automation",
    features: [
      { title: "Interactive conversational chatbots", desc: "Replies with interactive buttons and guided flows to qualify the customer with no human intervention." },
      { title: "Bulk sending and API notifications", desc: "Send personalized alerts about promotions or important notices without the risk of the line getting blocked." },
      { title: "Automatic appointment reminders", desc: "The system sends advance confirmation notices to reduce no-shows at your business." },
      { title: "Handoff to human agents", desc: "When the bot detects the need for personalized attention, it transfers the chat to the right team." },
      { title: "CRM or database integration", desc: "Automatically saves customer contact details and inquiries into your management system." },
      { title: "Multi-agent support", desc: "Several members of your team can reply to chats from the same number using a centralized panel." }
    ],
    targetAudience: [
      { title: "Gyms and sports centers", desc: "To send overdue membership reminders and confirm group class schedules." },
      { title: "Clinics and health offices", desc: "To schedule appointments, answer location questions and send automatic appointment reminders." },
      { title: "Businesses with high message volume", desc: "Especially restaurants with delivery, real estate agencies and shops with repetitive inquiries." }
    ],
    process: [
      { step: "01", title: "Conversation Flow Design", desc: "We map out the questions, answers and buttons in a logic diagram so the conversation is clear and useful." },
      { step: "02", title: "Approval and API Setup", desc: "We link your business line to Meta's official WhatsApp Cloud API and configure the business account." },
      { step: "03", title: "Programming and Integration", desc: "We connect the bot to your internal systems to check real-time data (like available appointments or balances due)." },
      { step: "04", title: "Launch and Tuning", desc: "We activate the bot and analyze the initial interactions to refine the responses and make it feel more natural." }
    ],
    benefits: [
      { title: "Immediate 24/7 attention", desc: "Your customers get a reply within seconds, even at night, on weekends or holidays." },
      { title: "Staff optimization", desc: "Frees your team from answering the same pricing, location or hours questions 50 times a day, letting them focus on closing complex sales." },
      { title: "Fewer no-shows", desc: "Automatic WhatsApp appointment reminders reduce last-minute absences and cancellations by up to 40%." }
    ],
    faqs: [
      { question: "Is there a risk of my number getting blocked?", answer: "By using the official WhatsApp Cloud API (Meta), your number is fully protected under Meta's policies, avoiding the common blocks that affect unofficial bots." },
      { question: "What happens if a customer asks something the bot can't answer?", answer: "The bot is programmed to detect when it doesn't have an answer or when the user asks to speak with a person, immediately transferring the conversation to a multi-agent panel." },
      { question: "Do you get charged per message sent?", answer: "Meta offers 1,000 free monthly conversations initiated by the user. For higher volumes, the cost per conversation is very low (just cents)." }
    ],
    ctaText: "Automate my WhatsApp now",
    whatsappMessage: "Hi DevPilots, I'm interested in the WhatsApp Automation service in Tapachula."
  },
  "punto-de-venta-tapachula": {
    slug: "punto-de-venta-tapachula",
    title: "Point-of-sale and inventory systems in Tapachula",
    subtitle: "Speed up checkout, control stock and keep track of your money with a modern, robust point-of-sale system.",
    description: "Poor inventory and cash control holds back your store's growth. We implement intuitive, stable Point of Sale (POS) solutions so you know your business's financial health every day.",
    featuresTitle: "What our Point of Sale solution includes",
    features: [
      { title: "Ultra-fast sales entry", desc: "Search products by name, category or barcode scanner to check out in seconds." },
      { title: "Real-time inventory control", desc: "Automatic stock deduction on every sale and low-stock alerts to avoid running out." },
      { title: "Cash register closing and shifts", desc: "Precise reports on cash in, cash out, withdrawals, card payments and cash counts per employee." },
      { title: "Peripheral compatibility", desc: "Direct connection to cash drawers, thermal receipt printers and barcode scanners." },
      { title: "Sales history and reports", desc: "Analyze which are your top-selling products and which days or hours generate the most revenue." },
      { title: "Supplier database", desc: "Track purchases, acquisition costs and outstanding balances with your suppliers." }
    ],
    targetAudience: [
      { title: "Retail stores and boutiques", desc: "Clothing, footwear, pharmacies, vet clinics and businesses with a wide product catalog." },
      { title: "Cafés and food spots", desc: "Businesses that need to print kitchen tickets, manage tables and check out quickly." },
      { title: "Convenience stores", desc: "High-traffic shops that need fast checkout and bulk inventory tracking." }
    ],
    process: [
      { step: "01", title: "Hardware Assessment", desc: "We review your current equipment (computer, tablet) or advise you on buying the right peripherals." },
      { step: "02", title: "System Configuration", desc: "We install the software and configure taxes, receipt formats and sales parameters." },
      { step: "03", title: "Catalog Loading", desc: "We upload your initial inventory: product names, barcodes, current stock, costs and sale prices." },
      { step: "04", title: "Training and Testing", desc: "We train your cashiers and managers with real sales simulations before the official opening." }
    ],
    benefits: [
      { title: "Say goodbye to small losses", desc: "Track every dollar and every piece of merchandise. Spot cash discrepancies instantly at register close." },
      { title: "Automatic register closing", desc: "Save hours at the end of the day. The system calculates exactly what should be in the register across cash, cards and vouchers." },
      { title: "Smarter purchasing", desc: "Know which products move fastest so you invest your money only in merchandise that sells and avoid dead stock." }
    ],
    faqs: [
      { question: "What equipment do I need to use the system?", answer: "The system can run on almost any Windows, Mac or Linux computer, or even on Android/iPad tablets. It requires a USB connection for a barcode scanner and thermal receipt printer." },
      { question: "Can I manage multiple locations?", answer: "Yes, we offer cloud configurations that let you view sales and inventory across all your locations from a single admin panel." },
      { question: "What happens if the internet goes down at my store?", answer: "Our locally-synced systems let you keep billing and recording sales without an internet connection, uploading the data to the cloud automatically once the connection is restored." }
    ],
    ctaText: "Set up a point of sale for my business",
    whatsappMessage: "Hi DevPilots, I'm interested in the Point of Sale service in Tapachula."
  },
  "software-para-gimnasios": {
    slug: "software-para-gimnasios",
    title: "Gym management software in Tapachula",
    subtitle: "Track memberships, attendance, payments and access at your fitness center or sports studio.",
    description: "Eliminate a disorganized front desk and money leaks. Our specialized software helps you manage plans, automatically log attendance and send payment reminders before they're due.",
    featuresTitle: "Key modules of our gym and box software",
    features: [
      { title: "Membership and validity control", desc: "Classification by plan (monthly, quarterly, day pass) with a visual status indicator for each member." },
      { title: "Automated attendance logging", desc: "Fast front-desk check-in via a phone QR code, barcode card or fingerprint." },
      { title: "Automatic payment reminders", desc: "Scheduled due-date alerts sent directly to the member's WhatsApp with a payment link." },
      { title: "Class schedule and bookings", desc: "Lets your members reserve their spot in capacity-limited group classes (like CrossFit, yoga or spinning) online." },
      { title: "Supplement sales module (POS)", desc: "Manage sales of water bottles, protein, apparel and snacks at your gym's counter." },
      { title: "Member retention statistics", desc: "Charts of active members, sign-ups, cancellations and attendance behavior to measure loyalty." }
    ],
    targetAudience: [
      { title: "Conventional weight gyms", desc: "Centers that need strict access control and recurring monthly billing." },
      { title: "CrossFit and functional training boxes", desc: "Studios that run classes with limited spots and mandatory bookings." },
      { title: "Martial arts, dance and yoga academies", desc: "Schools with monthly fees, specific class packages and attendance tracking." }
    ],
    process: [
      { step: "01", title: "Plans and Classes Setup", desc: "We configure your membership catalog, disciplines, instructors, class schedules and maximum capacity." },
      { step: "02", title: "Active Member Import", desc: "We import your current member list along with their payment due dates so your operation isn't interrupted." },
      { step: "03", title: "Access Reader Installation", desc: "We install the reading hardware (QR camera, card reader or fingerprint scanner) at your front desk." },
      { step: "04", title: "Rollout and Training", desc: "We train your front-desk staff and trainers on day-to-day management and start logging attendance." }
    ],
    benefits: [
      { title: "Minimizes overdue balances", desc: "Automatic WhatsApp reminders and a front-desk alert screen prevent members with overdue fees from checking in." },
      { title: "Fast, automated front desk", desc: "Members self-check-in by scanning their QR code, freeing your receptionist to focus on selling memberships." },
      { title: "Customer loyalty", desc: "Identify members who haven't shown up in weeks and send them an automatic follow-up message to prevent cancellations." }
    ],
    faqs: [
      { question: "How do members get in if there's no receptionist?", answer: "The software can integrate with magnetic locks or physical turnstiles that open automatically only if the member scans an active QR code with no balance due." },
      { question: "Do members need to download a heavy app?", answer: "No. They access a mobile-optimized progressive web app they can save to their home screen as a quick shortcut without using storage space." },
      { question: "Can I manage training and diet plans in the system?", answer: "Yes, the software includes an optional module where coaches can upload workout routines and track members' weight and measurement progress." }
    ],
    ctaText: "Grow my gym today",
    whatsappMessage: "Hi DevPilots, I'm interested in the Gym Software service in Tapachula."
  },
  "desarrollo-software-guatemala": {
    slug: "desarrollo-software-guatemala",
    title: "Software and web development for businesses in Guatemala",
    subtitle: "Custom systems, websites and WhatsApp automation for businesses in Chiquimula, Esquipulas, Concepción Las Minas and all of Guatemala, 100% remote.",
    description: "From Tapachula, on the border with Guatemala, we help Guatemalan businesses digitize their operations: professional websites, administrative systems, points of sale and WhatsApp automation, coordinated remotely without losing closeness or response times.",
    featuresTitle: "What our service for businesses in Guatemala includes",
    features: [
      { title: "Custom websites and systems", desc: "Websites and administrative platforms designed for the real needs of your business in Guatemala." },
      { title: "100% remote coordination", desc: "The entire process —meetings, reviews and deliveries— happens over WhatsApp and video calls, with no need for you to travel or for us to." },
      { title: "WhatsApp automation", desc: "Chatbots and automatic reminders to serve customers and handle payments without being tied to your phone." },
      { title: "Point of sale and inventory", desc: "Sales, cash and inventory control for shops, pharmacies and businesses across the region." },
      { title: "Adapted payments and invoicing", desc: "Integration with payment gateways and invoicing formats that match how your business operates in Guatemala." },
      { title: "Ongoing support and maintenance", desc: "Post-launch support to resolve questions, adjustments and improvements as your business grows." }
    ],
    targetAudience: [
      { title: "Local shops and businesses", desc: "Stores, pharmacies, restaurants and family businesses in Chiquimula, Esquipulas, Concepción Las Minas and nearby municipalities that want to look professional online." },
      { title: "Gyms and sports centers", desc: "Fitness businesses that need automated membership, attendance and payment control." },
      { title: "Professionals and offices", desc: "Doctors, lawyers, accountants and consultants looking for a professional website and scheduling system." }
    ],
    process: [
      { step: "01", title: "Diagnosis over WhatsApp", desc: "We talk about your business, your current processes and what you need to solve, at no cost and no commitment." },
      { step: "02", title: "Proposal and Quote", desc: "We send you a clear proposal with scope, timeline and cost, in quetzales or dollars, whichever you prefer." },
      { step: "03", title: "Development and Reviews", desc: "We build your project and review it together in periodic video calls until it's exactly what you need." },
      { step: "04", title: "Launch and Support", desc: "We launch your project and stay available on WhatsApp for support and adjustments." }
    ],
    benefits: [
      { title: "Real closeness, not just geography", desc: "Being right on the border, we understand the way business is done in the region, not just the language." },
      { title: "No need to travel", desc: "The entire process is designed to work remotely without losing quality or response times." },
      { title: "Clear pricing from the start", desc: "A closed quote before starting, with no surprises or hidden fees midway through the project." }
    ],
    faqs: [
      { question: "Do you work with businesses outside Tapachula, in Guatemala?", answer: "Yes. Although we're based in Tapachula, Chiapas, we serve businesses in Guatemala —including Chiquimula, Esquipulas and Concepción Las Minas— fully remotely, coordinating everything over WhatsApp and video calls." },
      { question: "How are payments handled if I'm in Guatemala?", answer: "We adapt to whichever payment method works best for you: bank transfer, an online gateway, or the method you already use for your international operations." },
      { question: "Is support after delivery also remote?", answer: "Yes, all support and maintenance is handled via WhatsApp and remote access, with the same response times we give our clients in Tapachula." }
    ],
    ctaText: "I want a proposal for my business in Guatemala",
    whatsappMessage: "Hi DevPilots, I have a business in Guatemala and I'm interested in a quote.",
    asideBadge: "Remote support for Guatemala",
    asideDescription: "We handle the entire technical and creative process, coordinating over WhatsApp and video calls so your business in Guatemala gets a professional system no matter the distance.",
    finalCtaDescription: "We'll give you a clear diagnosis and a proposal for your business in Guatemala, with 100% remote support over WhatsApp."
  }
};

export const servicesData: Record<Locale, Record<string, ServiceDetail>> = { es, en };

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
}

export const servicesData: Record<string, ServiceDetail> = {
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
  }
};

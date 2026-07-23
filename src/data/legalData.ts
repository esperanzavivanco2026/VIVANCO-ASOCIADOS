import { ServiceItem, Testimonial, FaqItem } from '../types';

export const FIRM_DETAILS = {
  name: 'VIVANCO & ASOCIADOS',
  subName: 'SOLUCIONES LEGALES',
  leadAttorney: 'Ab. Esperanza Vivanco',
  motto: 'NO ES SUERTE, ES DECISIÓN, DISCIPLINA Y FE EN TI.',
  phoneDisplay: '0988468843',
  phoneRaw: '0988468843',
  whatsappNumber: '593988468843',
  email: 'ab.esperanzavivanco@gmail.com',
  address: 'Av. República de El Salvador N34-183 y Moscú, Edificio Centro Corporativo, Quito - Ecuador',
  cobertura: 'Atención Legal Integral en Todo el Ecuador (Modalidad Presencial y Virtual)',
  schedule: 'Lunes a Viernes: 08:30 - 18:00 | Atención Prioritaria WhatsApp 24/7',
  experienceYears: '12+',
  casesWonRate: '96%',
  casesHandled: '900+',
};

export const generateWhatsAppLink = (messageText: string) => {
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${FIRM_DETAILS.whatsappNumber}?text=${encodedText}`;
};

export const LEGAL_SERVICES: ServiceItem[] = [
  {
    id: 'derecho-familia',
    title: 'Derecho de Familia, Niñez y Adolescencia',
    category: 'familia',
    categoryLabel: 'Familia y Niñez',
    shortDescription: 'Patrocinio especializado en divorcios, pensiones alimenticias, custodia, régimen de visitas y patrimonio familiar.',
    fullDescription: 'Brindamos acompañamiento humano, confidencial y técnicamente riguroso en situaciones familiares delicadas. Defendemos el bienestar de los menores y velamos por la equidad en la división de bienes.',
    benefits: [
      'Tramitación ágil de divorcios por mutuo acuerdo o contenciosos',
      'Cálculo justo y demanda de fijación / incremento / rebaja de alimento',
      'Protección de la patria potestad y tenencia legal',
      'Inventarios y liquidación de sociedad conyugal'
    ],
    keyActions: ['Demanda Inicial', 'Conciliación Judicial', 'Audiencia Única', 'Ejecución de Sentencia'],
    iconName: 'Users',
    featured: true
  },
  {
    id: 'derecho-civil',
    title: 'Derecho Civil y Contratos',
    category: 'civil',
    categoryLabel: 'Civil y Propiedad',
    shortDescription: 'Asesoría y juicio en contratos, cobro de deudas, prescripciones adquisitivas de dominio e indemnizaciones.',
    fullDescription: 'Protegemos su patrimonio material e inmaterial frente a incumplimientos de contratos, disputas de propiedad, cobranza judicial y reclamos de indemnización por daños y perjuicios.',
    benefits: [
      'Redacción y blindaje de contratos de compraventa, arrendamiento y promesa',
      'Recuperación de cartera y cobro ejecutivo de pagarés/cheques/facturas',
      'Juicios de prescripción adquisitiva de dominio y reivindicación',
      'Juicios ejecutivos y ordinarios civiles'
    ],
    keyActions: ['Auditoría Contratual', 'Notificación Judicial', 'Demandas Ejecutivas', 'Embargos y Remates'],
    iconName: 'FileText',
    featured: true
  },
  {
    id: 'derecho-laboral',
    title: 'Derecho Laboral y Empresarial',
    category: 'laboral',
    categoryLabel: 'Laboral y Empresas',
    shortDescription: 'Defensa técnica para trabajadores y empresas en despidos intempestivos, vistos buenos y contratos de trabajo.',
    fullDescription: 'Garantizamos el estricto cumplimiento de la legislación laboral ecuatoriana tanto para empleadores que buscan prevención de riesgos laborales como para trabajadores que exigen indemnizaciones justas.',
    benefits: [
      'Defensa e impugnación de despido intempestivo y actas de finiquito',
      'Patrocinio en trámites de Visto Bueno en el Ministerio del Trabajo',
      'Mediación laboral y acuerdos transaccionales',
      'Contratación individual y auditoría de nómina/IESS'
    ],
    keyActions: ['Reclamación Administrativa', 'Audiencia Laboral', 'Cálculo de Liquidación', 'Defensa Judicial'],
    iconName: 'Briefcase',
    featured: true
  },
  {
    id: 'derecho-penal',
    title: 'Derecho Penal y Defensa Judicial',
    category: 'penal',
    categoryLabel: 'Penal y Garantías',
    shortDescription: 'Defensa técnica penal en investigaciones previas, audiencias de formulación de cargos y garantías constitucionales.',
    fullDescription: 'Asumimos su representación penal con la máxima ética, disciplina y estrategia procesal, asegurando el debido proceso, la presunción de inocencia y la protección inmediata de su libertad.',
    benefits: [
      'Patrocinio en investigación previa y etapa de instrucción fiscal',
      'Asistencia legal urgente en detenciones y audiencias de flagrancia',
      'Presentación de Hábeas Corpus y Acciones de Protección',
      'Acusación particular y representación de víctimas de delitos'
    ],
    keyActions: ['Estrategia de Defensa', 'Apelación de Medidas', 'Impugnación de Pruebas', 'Patrocinio en Juicio'],
    iconName: 'ShieldAlert',
    featured: true
  },
  {
    id: 'derecho-notarial',
    title: 'Trámites Notariales y Registrales',
    category: 'notarial',
    categoryLabel: 'Notarial y Administrativo',
    shortDescription: 'Elaboración de minutas, escrituras públicas, posesiones efectivas, fideicomisos y poderes legales.',
    fullDescription: 'Aseguramos la validez legal y el correcto registro de sus actuaciones ante Notarías Públicas, Registros de la Propiedad y Registros Mercantiles en todo el país.',
    benefits: [
      'Minutas para escrituras de compraventa, donación e hipotecas',
      'Trámite de Posesiones Efectivas de herencias e inscripciones',
      'Poderes generales y especiales con validez nacional e internacional',
      'Cancelación de hipotecas, patrimonios familiares y gravámenes'
    ],
    keyActions: ['Revisión de Títulos', 'Elaboración de Minuta', 'Suscripción Notarial', 'Inscripción Registral'],
    iconName: 'FileCheck',
    featured: false
  },
  {
    id: 'asesoria-preventiva',
    title: 'Asesoría Legal Preventiva y Mediación',
    category: 'preventivo',
    categoryLabel: 'Preventivo y Mediación',
    shortDescription: 'Resolución alternativa de conflictos, arbitraje y blindaje legal preventivo para evitar litigios extensos.',
    fullDescription: 'Prevenir un litigio es más rápido y económico que afrontarlo. Mediante actas de mediación con efecto de sentencia ejecutoriada, resolvemos diferencias civiles, laborales y familiares de manera definitiva.',
    benefits: [
      'Auditoría y diagnóstico de riesgos legales personales o de negocios',
      'Negociación directa y redacción de Acuerdos Transaccionales',
      'Acompañamiento a centros de mediación acreditados',
      'Planificación sucesoria y blindaje del patrimonio familiar'
    ],
    keyActions: ['Evaluación de Riesgo', 'Mesa de Dialogo', 'Acta de Mediación', 'Homologación Judicial'],
    iconName: 'Scale',
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Dra. Carmen Benalcázar',
    roleOrCity: 'Quito, Ecuador',
    serviceCategory: 'Derecho de Familia',
    comment: 'La Ab. Esperanza Vivanco manejó mi proceso de divorcio y custodia con una empatía, disciplina y firmeza verdaderamente admirables. Su lema "es decisión, disciplina y fe" se siente en cada audiencia.',
    rating: 5,
    date: 'Hace 2 meses',
    verified: true
  },
  {
    id: 't2',
    clientName: 'Ing. Marco Vinicio Jaramillo',
    roleOrCity: 'Gerente General, Guayaquil',
    serviceCategory: 'Derecho Laboral y Corporativo',
    comment: 'Vivanco & Asociados blindó la estructura contractual de nuestra empresa ante demandas infundadas. Su asesoría preventiva nos ahorró miles de dólares y semanas de desgaste.',
    rating: 5,
    date: 'Hace 1 mes',
    verified: true
  },
  {
    id: 't3',
    clientName: 'Lcda. María Elena Morales',
    roleOrCity: 'Pichincha',
    serviceCategory: 'Derecho Civil y Bienes',
    comment: 'Excelente gestión en el juicio de prescripción adquisitiva de nuestra propiedad. La abogada Esperanza es sumamente organizada, transparente con los costos y siempre atiende las llamadas por WhatsApp.',
    rating: 5,
    date: 'Hace 3 semanas',
    verified: true
  },
  {
    id: 't4',
    clientName: 'Sra. Patricia Guerrero',
    roleOrCity: 'Ambato / Quito',
    serviceCategory: 'Pensión Alimenticia y Niñez',
    comment: 'Súper agradecida con la Abogada Esperanza. Logró la fijación justa de la pensión alimenticia para mis dos hijos de manera rápida y sin demoras innecesarias. 100% recomendada.',
    rating: 5,
    date: 'Hace 1 mes',
    verified: true
  },
  {
    id: 't5',
    clientName: 'Arq. Esteban Cárdenas',
    roleOrCity: 'Quito',
    serviceCategory: 'Trámites Notariales e Inmobiliario',
    comment: 'Trámite de compraventa e inscripción registral impecable. Elaboró la minuta en tiempo récord y con precisión quirúrgica. Un servicio legal con altísimo estándar.',
    rating: 5,
    date: 'Hace 2 semanas',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo puedo agendar una consulta legal con la Ab. Esperanza Vivanco?',
    answer: 'Puede agendar su consulta de manera inmediata a través de nuestro botón directo de WhatsApp (0988468843), llamando a nuestras líneas de atención o completando el formulario de contacto en la web. Ofrecemos modalidad presencial en oficina o virtual vía Zoom/Google Meet.',
    category: 'Consulta e Inicio'
  },
  {
    id: 'faq-2',
    question: '¿Atienden procesos judiciales en todo el territorio ecuatoriano?',
    answer: 'Sí. Vivanco & Asociados cuenta con capacidad de patrocinio judicial e interposición de escritos a nivel nacional en las provincias de Pichincha, Guayas, Azuay, Manabí, Tungurahua y todo el Ecuador a través de los sistemas oficiales del Consejo de la Judicatura (SATJE).',
    category: 'Cobertura'
  },
  {
    id: 'faq-3',
    question: '¿Cómo se determinan las tarifas y honorarios profesionales?',
    answer: 'Nuestros honorarios se fijan con total transparencia conforme a las tablas de honorarios vigentes, la complejidad del caso y el volumen procesal. Brindamos facilidades de pago diferido por etapas procesales (Inicio, Calificación, Audiencia y Sentencia).',
    category: 'Honorarios'
  },
  {
    id: 'faq-4',
    question: '¿Qué documentos debo llevar a mi primera cita de asesoría?',
    answer: 'Se recomienda traer su cédula de identidad y toda la documentación pertinente al caso (contratos, mensajes, citaciones, boletas de pago, partidas de nacimiento, escrituras o facturas). Si la cita es virtual, puede enviarlos escaneados o en foto por WhatsApp.',
    category: 'Requisitos'
  },
  {
    id: 'faq-5',
    question: '¿Cómo me mantienen informado del avance de mi proceso judicial?',
    answer: 'Garantizamos comunicación constante. Se envía a cada cliente un reporte periódico del estado del proceso con captura directa del sistema judicial SATJE y copia de los escritos presentados, además de notificaciones inmediatas vía WhatsApp ante cualquier providencia.',
    category: 'Seguimiento'
  }
];

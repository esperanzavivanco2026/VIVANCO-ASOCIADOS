export interface ServiceItem {
  id: string;
  title: string;
  category: 'civil' | 'familia' | 'laboral' | 'penal' | 'notarial' | 'preventivo';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  keyActions: string[];
  iconName: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  roleOrCity: string;
  serviceCategory: string;
  comment: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  legalArea: string;
  urgency: 'alta' | 'media' | 'baja';
  message: string;
}

export interface ConsultationEstimate {
  area: string;
  urgency: string;
  details: string;
}

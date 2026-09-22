export type PageView =
  | 'inicio'
  | 'home'
  | 'sobre'
  | 'seguros'
  | 'como-trabalhamos'
  | 'duvidas'
  | 'conteudos'
  | 'contato'
  | 'seguro-detalhe';

export type InsuranceType =
  | 'auto'
  | 'frotas'
  | 'maquinas-agricolas'
  | 'residencial'
  | 'vida'
  | 'empresarial'
  | 'saude'
  | 'previdencia';

export interface InsuranceItem {
  id: InsuranceType;
  title: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  whoIsItFor: string[];
  situationsCovered: string[];
  factorsInfluencingPrice: string[];
  commonFaqs: { question: string; answer: string }[];
  whatsappMessage: string;
  status: 'confirmado' | 'a_confirmar';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'auto' | 'residencial' | 'vida' | 'empresarial' | 'processo';
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  category: string;
  publishDate: string;
  content: string[];
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  insuranceType: InsuranceType | string;
  city: string;
  details: string;
  bestTime: string;
}

export interface BrokerMember {
  id: string;
  name: string;
  role: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  status: 'ativo' | 'em_breve';
  note?: string;
}

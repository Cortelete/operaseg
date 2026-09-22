import React, { useState } from 'react';
import { PageView, InsuranceType } from '../../types';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MapPin,
  MessageCircle,
  Car,
  Home as HomeIcon,
  Heart,
  Building2,
  Clock,
  ChevronRight,
  Star,
  ExternalLink,
  Award,
  Users,
  Check,
  X,
  Truck,
  Tractor,
  Phone,
  FileText,
  BadgeCheck,
  Compass
} from 'lucide-react';
import {
  COMPANY_INFO,
  FAQS_DATA,
} from '../../data/companyData';
import { AnimatedSection } from '../ui/AnimatedSection';
import { InsuranceSceneIllustration } from '../ui/InsuranceSceneIllustration';

interface HomeViewProps {
  onNavigate: (view: PageView, insuranceType?: InsuranceType) => void;
  onOpenQuote: (insuranceType?: InsuranceType) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<InsuranceType>('auto');

  const openWhatsApp = (customMsg?: string) => {
    const text = encodeURIComponent(
      customMsg || 'Olá! Vim pelo site da Operaseg e gostaria de falar com um corretor sobre cotação de seguro.'
    );
    window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const interactiveSolutions: Record<
    InsuranceType,
    {
      title: string;
      subtitle: string;
      tag: string;
      highlights: string[];
      perk: string;
      description: string;
      metaIndex: string;
    }
  > = {
    auto: {
      title: 'Seguro Automóvel Particular',
      subtitle: 'Proteção sob medida para você não parar',
      tag: 'Alta Procura em PG',
      highlights: [
        'Cobertura total contra colisão, furto, roubo e incêndio',
        'Guincho 24 horas sem limite e socorro mecânico',
        'Danos materiais e corporais a terceiros (RCF-V)',
        'Carro reserva imediato e assistência vidros completa'
      ],
      perk: 'Comparativo simultâneo entre as 8 maiores seguradoras',
      description: 'Cuidamos do seu carro de passeio ou utilitário com coberturas claras e apoio presencial ou via WhatsApp no sinistro.',
      metaIndex: '01',
    },
    frotas: {
      title: 'Seguro de Frotas Corporativas',
      subtitle: 'Condições comerciais a partir de 3 veículos',
      tag: 'Logística & Empresas',
      highlights: [
        'Apólice única simplificada para automóveis, vans e caminhões',
        'Guincho 24h especializado para pesados e leves',
        'Cobertura de responsabilidade civil para cargas e terceiros',
        'Tabelas de franquia reduzida para frotas comerciais'
      ],
      perk: 'Gestão unificada com redução real de custo operacional',
      description: 'Proteção estruturada para empresas, distribuidores e prestadores de serviços de Ponta Grossa e dos Campos Gerais.',
      metaIndex: '02',
    },
    'maquinas-agricolas': {
      title: 'Máquinas & Equipamentos Agrícolas',
      subtitle: 'Blindagem para tratores, colheitadeiras e implementos',
      tag: 'Agronegócio dos Campos Gerais',
      highlights: [
        'Cobertura contra tombamento, colisão e acidentes de operação',
        'Incêndio, raio, explosão e queima de palhada/lavoura',
        'Roubo ou furto qualificado no talhão ou em trânsito',
        'Atende a 100% das exigências de penhor e crédito rural'
      ],
      perk: 'Válido para Banco do Brasil, Sicredi, Sicoob e bancos rurais',
      description: 'Respaldo indispensável para o homem do campo, protegendo os equipamentos que garantem o ciclo da safra paranaense.',
      metaIndex: '03',
    },
    residencial: {
      title: 'Seguro Residencial Completo',
      subtitle: 'Seu lar protegido por menos de R$ 1 por dia',
      tag: 'Custo Acessível',
      highlights: [
        'Proteção contra incêndio, queda de raio e explosão',
        'Cobertura de danos elétricos para eletrônicos e fiação',
        'Assistência 24h com eletricista, encanador e chaveiro grátis',
        'Respaldo para vendavais, vendaval e danos a terceiros'
      ],
      perk: 'Serviços emergenciais residenciais sem franquia',
      description: 'Tranquilidade para casa ou apartamento com serviços úteis no dia a dia e proteção completa do seu patrimônio familiar.',
      metaIndex: '04',
    },
    vida: {
      title: 'Seguro de Vida & Família',
      subtitle: 'Tranquilidade e benefícios aproveitados em vida',
      tag: 'Essencial & Planejamento',
      highlights: [
        'Indenização direta e rápida aos dependentes sem inventário',
        'Cobertura para diagnóstico de doenças graves com resgate em vida',
        'Diárias por incapacidade temporária para autônomos (DIT)',
        'Assistência funeral individual ou familiar'
      ],
      perk: 'Isenção tributária legal e liquidez financeira imediata',
      description: 'Segurança financeira sólida para quem você ama e tranquilidade para sua carreira profissional.',
      metaIndex: '05',
    },
    empresarial: {
      title: 'Seguro Empresarial & Comercial',
      subtitle: 'Blindagem do seu negócio e continuidade de renda',
      tag: 'Proteção Patrimonial',
      highlights: [
        'Proteção de instalações, estoques e maquinários comerciais',
        'Responsabilidade civil para danos involuntários a clientes',
        'Respaldo financeiro para despesas fixas em interrupções',
        'Danos elétricos para computadores, servidores e painéis'
      ],
      perk: 'Estruturação sob medida para comércio, clínica ou indústria',
      description: 'Para empresas de Ponta Grossa operarem com solidez, sabendo que imprevistos estruturais estão cobertos.',
      metaIndex: '06',
    },
    saude: {
      title: 'Planos de Saúde & Odonto',
      subtitle: 'Consultoria para pessoa física ou empresarial',
      tag: 'Sob Consulta',
      highlights: [
        'Ampla rede credenciada de hospitais e laboratórios',
        'Planos individuais, familiares e corporativos (PME)',
        'Atendimento de urgência e emergência nacional',
        'Orientação técnica sobre carências e coberturas'
      ],
      perk: 'Atendimento sob consulta personalizada',
      description: 'Análise cuidadosa das opções de operadoras em Ponta Grossa para garantir o melhor cuidado para sua saúde.',
      metaIndex: '07',
    },
    previdencia: {
      title: 'Previdência Privada Complementar',
      subtitle: 'Construção de patrimônio e futuro estável',
      tag: 'Sob Consulta',
      highlights: [
        'Planos PGBL e VGBL adequados ao seu perfil fiscal',
        'Planejamento sucessório seguro e eficiente',
        'Flexibilidade total de aportes mensais ou pontuais',
        'Gestão por instituições financeiras consolidadas'
      ],
      perk: 'Planejamento para longo prazo e sucessão patrimonial',
      description: 'Estratégias sob medida para acumulação de capital e aposentadoria com independência.',
      metaIndex: '08',
    }
  };

  const currentSolution = interactiveSolutions[activeTab] || interactiveSolutions.auto;

  return (
    <div id="home-view" className="space-y-20 sm:space-y-32 pb-24">
      
      {/* 1. TELA 1 — HERO EDITORIAL COM ARQUITETURA ORGÂNICA E VISUAL REFINADO */}
      <section
        id="hero-section"
        className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 border-b border-slate-200/80"
      >
        {/* Soft textured atmospheric background */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Line Meta Bar - Clean Typography, No Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200/70 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-900">Operaseg Corretora</span>
              <span className="text-slate-300">/</span>
              <span>Ponta Grossa & Região dos Campos Gerais</span>
              <span className="text-slate-300 hidden md:inline">/</span>
              <span className="hidden md:inline text-slate-500">SUSEP Habilitada</span>
            </div>

            <a
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-red-700 transition-colors"
            >
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">{COMPANY_INFO.googleRating}</span>
              <span className="text-slate-500">({COMPANY_INFO.googleReviewsCount})</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Grid Principal do Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* Lado Esquerdo: Mensagem Humana, Clara e Imparcial */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-7 text-left">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-red-700 block">
                  Consultoria Independente de Seguros
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold font-heading text-slate-950 tracking-tight leading-[1.08]">
                  Protegemos o que levou uma vida inteira para construir.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl pt-1">
                  Atendimento pessoal e técnico no Centro de Ponta Grossa. Analisamos seu patrimônio, comparamos as seguradoras líderes do país e acompanhamos você de verdade na hora que o imprevisto acontecer.
                </p>
              </div>

              {/* Botões de Ação Direta */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  id="hero-cta-quote"
                  onClick={() => onOpenQuote(activeTab)}
                  className="inline-flex items-center justify-center gap-2.5 bg-red-700 hover:bg-red-800 text-white px-7 py-4 rounded-sm font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-center"
                >
                  <FileText className="w-5 h-5 text-red-200" />
                  <span>Cotar Seguro Agora</span>
                </button>

                <button
                  id="hero-cta-whatsapp"
                  onClick={() =>
                    openWhatsApp(
                      `Olá! Gostaria de conversar com um corretor da Operaseg sobre ${currentSolution.title}.`
                    )
                  }
                  className="inline-flex items-center justify-center gap-2.5 bg-slate-950 hover:bg-slate-900 text-white px-6 py-4 rounded-sm font-semibold text-base transition-colors cursor-pointer border border-slate-800 text-center"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Falar com o Corretor</span>
                </button>
              </div>

              {/* Garantias sem clichês */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200/80 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Estudo comparativo sem custo</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Clareza total nas franquias</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Suporte ativo em sinistro</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Ilustração de Cena Securitária + Card de Seleção Fluida */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-white rounded-sm border border-slate-200/90 shadow-xl overflow-hidden flex flex-col">
                
                {/* Visual Scene Header */}
                <InsuranceSceneIllustration
                  type={activeTab}
                  className="h-44 sm:h-52 w-full"
                />

                {/* Interactive Solution Explorer */}
                <div className="p-6 sm:p-7 space-y-5 bg-white">
                  
                  {/* Category switcher */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Selecione o que deseja proteger:
                    </span>
                    <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-sm border border-slate-200/80">
                      <button
                        onClick={() => setActiveTab('auto')}
                        className={`py-2 px-2.5 rounded-sm text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          activeTab === 'auto'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-950'
                        }`}
                      >
                        <Car className="w-3.5 h-3.5" />
                        <span>Auto</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('frotas')}
                        className={`py-2 px-2.5 rounded-sm text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          activeTab === 'frotas'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-950'
                        }`}
                      >
                        <Truck className="w-3.5 h-3.5" />
                        <span>Frotas</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('maquinas-agricolas')}
                        className={`py-2 px-2.5 rounded-sm text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          activeTab === 'maquinas-agricolas'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-950'
                        }`}
                      >
                        <Tractor className="w-3.5 h-3.5" />
                        <span>Agro</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('residencial')}
                        className={`py-2 px-2.5 rounded-sm text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          activeTab === 'residencial'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-950'
                        }`}
                      >
                        <HomeIcon className="w-3.5 h-3.5" />
                        <span>Casa</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('vida')}
                        className={`py-2 px-2.5 rounded-sm text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          activeTab === 'vida'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-950'
                        }`}
                      >
                        <Heart className="w-3.5 h-3.5" />
                        <span>Vida</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('empresarial')}
                        className={`py-2 px-2.5 rounded-sm text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          activeTab === 'empresarial'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-950'
                        }`}
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Empresa</span>
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Highlights List */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-heading font-extrabold text-slate-900 text-base">
                        {currentSolution.title}
                      </h4>
                      <span className="text-xs text-red-700 font-semibold">
                        {currentSolution.tag}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-600">
                      {currentSolution.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    <button
                      onClick={() => onOpenQuote(activeTab)}
                      className="w-full py-3 bg-red-700 hover:bg-red-800 text-white rounded-sm text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Iniciar Cotação para {currentSolution.title.split(' ')[1] || 'este Seguro'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onNavigate('seguro-detalhe', activeTab)}
                      className="w-full py-1.5 text-slate-600 hover:text-slate-950 text-xs font-semibold text-center transition-colors cursor-pointer"
                    >
                      Conhecer coberturas e franquias detalhadas →
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TELA 2 — PROVA SOCIAL & PILARES DE CONFIANÇA */}
      <AnimatedSection id="trust-metrics-bar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm border border-slate-200/90 shadow-xs p-6 sm:p-8 lg:p-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="flex items-start gap-4 pt-3 sm:pt-0 sm:px-4 min-w-0">
              <div className="w-12 h-12 rounded-sm bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200/80">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <div className="min-w-0">
                <div className="text-3xl font-extrabold font-heading text-slate-900 leading-none">
                  5,0 ★
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1.5">
                  Avaliação Máxima no Google
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Feedback de clientes reais atendidos em Ponta Grossa.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-6 sm:pt-0 sm:px-4 min-w-0">
              <div className="w-12 h-12 rounded-sm bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200/80">
                <Award className="w-6 h-6 text-red-700" />
              </div>
              <div className="min-w-0">
                <div className="text-3xl font-extrabold font-heading text-slate-900 leading-none">
                  +6 Anos
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1.5">
                  Experiência Técnica
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Trajetória profissional ligada à MAPFRE Seguros.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-6 sm:pt-0 sm:px-4 min-w-0">
              <div className="w-12 h-12 rounded-sm bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200/80">
                <Shield className="w-6 h-6 text-red-700" />
              </div>
              <div className="min-w-0">
                <div className="text-3xl font-extrabold font-heading text-slate-900 leading-none">
                  SUSEP
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1.5">
                  Corretora Regulamentada
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Conformidade integral perante os órgãos de controle securitário.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-6 sm:pt-0 sm:px-4 min-w-0">
              <div className="w-12 h-12 rounded-sm bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200/80">
                <Users className="w-6 h-6 text-red-700" />
              </div>
              <div className="min-w-0">
                <div className="text-3xl font-extrabold font-heading text-slate-900 leading-none">
                  Humano
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1.5">
                  Suporte Direto no Sinistro
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Você fala com seu corretor, sem menus labirínticos de 0800.
                </div>
              </div>
            </div>

          </div>

        </div>
      </AnimatedSection>

      {/* 3. TELA 3 — PORTFÓLIO ESTRUTURADO DE SEGUROS (PADRÃO EDITORIAL ELEGANTE) */}
      <AnimatedSection id="insurances-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-red-700 block">
              Catálogo de Soluções Securitárias
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 tracking-tight">
              O seguro certo para cada etapa da sua jornada
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Trabalhamos com apólices personalizadas com as principais companhias do país, ponderando com clareza coberturas, franquias e custo real.
            </p>
          </div>

          <button
            onClick={() => onNavigate('seguros')}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-900 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Ver portfólio completo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          
          {/* Card 1: Automóvel */}
          <div className="bg-white rounded-sm border border-slate-200/90 shadow-xs hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <InsuranceSceneIllustration type="auto" className="h-28 w-full" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">01 / VEÍCULOS</span>
                  <span className="text-xs text-red-700 font-semibold">Mais Solicitado</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-950">
                    Seguro Automóvel
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    Colisão, roubo, furto, danos a terceiros e assistência 24h sem limite de guincho com opção de carro reserva.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cotação com mais de 8 seguradoras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cobertura para vidros, faróis e lanternas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <button
                onClick={() => onOpenQuote('auto')}
                className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Cotar Seguro Auto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'auto')}
                className="w-full py-1 text-slate-500 hover:text-slate-900 text-xs font-medium text-center transition-colors cursor-pointer"
              >
                Ver coberturas e regras
              </button>
            </div>
          </div>

          {/* Card 2: Frotas */}
          <div className="bg-white rounded-sm border border-slate-200/90 shadow-xs hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <InsuranceSceneIllustration type="frotas" className="h-28 w-full" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">02 / LOGÍSTICA</span>
                  <span className="text-xs text-slate-600 font-medium">A partir de 3 veículos</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-950">
                    Seguro de Frotas
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    Apólice unificada com condições especiais de franquia para veículos comerciais, utilitários, pesados e caminhões.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Assistência nacional 24h para pesados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Redução de custo médio por veículo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <button
                onClick={() => onOpenQuote('frotas')}
                className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Cotar Seguro Frota</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'frotas')}
                className="w-full py-1 text-slate-500 hover:text-slate-900 text-xs font-medium text-center transition-colors cursor-pointer"
              >
                Ver coberturas e regras
              </button>
            </div>
          </div>

          {/* Card 3: Máquinas Agrícolas */}
          <div className="bg-white rounded-sm border border-slate-200/90 shadow-xs hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <InsuranceSceneIllustration type="maquinas-agricolas" className="h-28 w-full" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">03 / AGRONEGÓCIO</span>
                  <span className="text-xs text-amber-700 font-semibold">Campos Gerais</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-950">
                    Máquinas & Equipamentos
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    Tratores, colheitadeiras e implementos agrícolas contra tombamento, colisão na lavoura, incêndio e furto.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Aceito em financiamentos rurais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cobertura durante traslado em estrada</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <button
                onClick={() => onOpenQuote('maquinas-agricolas')}
                className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Cotar Seguro Agrícola</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'maquinas-agricolas')}
                className="w-full py-1 text-slate-500 hover:text-slate-900 text-xs font-medium text-center transition-colors cursor-pointer"
              >
                Ver coberturas e regras
              </button>
            </div>
          </div>

          {/* Card 4: Residencial */}
          <div className="bg-white rounded-sm border border-slate-200/90 shadow-xs hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <InsuranceSceneIllustration type="residencial" className="h-28 w-full" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">04 / PATRIMÔNIO</span>
                  <span className="text-xs text-slate-600 font-medium">Casa & Apartamento</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-950">
                    Seguro Residencial
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    Incêndio, raio, vendavais e danos elétricos em aparelhos com assistências de encanador, eletricista e chaveiro.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Custo médio inferior a R$ 1 ao dia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Disponível para proprietários e inquilinos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <button
                onClick={() => onOpenQuote('residencial')}
                className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Cotar Residencial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'residencial')}
                className="w-full py-1 text-slate-500 hover:text-slate-900 text-xs font-medium text-center transition-colors cursor-pointer"
              >
                Ver coberturas e regras
              </button>
            </div>
          </div>

          {/* Card 5: Vida */}
          <div className="bg-white rounded-sm border border-slate-200/90 shadow-xs hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <InsuranceSceneIllustration type="vida" className="h-28 w-full" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">05 / FAMÍLIA</span>
                  <span className="text-xs text-slate-600 font-medium">Benefícios em Vida</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-950">
                    Vida & Família
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    Segurança financeira sem retenção de inventário judicial e coberturas para doenças graves e incapacidade temporária.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Isenção de Imposto de Renda na indenização</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Diárias de incapacidade para autônomos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <button
                onClick={() => onOpenQuote('vida')}
                className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Cotar Seguro de Vida</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'vida')}
                className="w-full py-1 text-slate-500 hover:text-slate-900 text-xs font-medium text-center transition-colors cursor-pointer"
              >
                Ver coberturas e regras
              </button>
            </div>
          </div>

          {/* Card 6: Empresarial */}
          <div className="bg-white rounded-sm border border-slate-200/90 shadow-xs hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <InsuranceSceneIllustration type="empresarial" className="h-28 w-full" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">06 / EMPRESAS</span>
                  <span className="text-xs text-slate-600 font-medium">Comércio & Serviços</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-950">
                    Seguro Empresarial
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    Blindagem para instalações comerciais, escritórios, consultórios, estoques e responsabilidade civil perante clientes.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Proteção de lucros cessantes e despesas fixas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Danos elétricos em equipamentos e servidores</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <button
                onClick={() => onOpenQuote('empresarial')}
                className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Cotar Empresarial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'empresarial')}
                className="w-full py-1 text-slate-500 hover:text-slate-900 text-xs font-medium text-center transition-colors cursor-pointer"
              >
                Ver coberturas e regras
              </button>
            </div>
          </div>

        </div>

      </AnimatedSection>

      {/* 4. TELA 4 — CONSULTORIA REAL VS. CONTRATAR SOZINHO (EDITORIAL SOBRIO) */}
      <AnimatedSection id="comparative-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-sm p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-xl">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 block">
              Consultoria Especializada · Ponta Grossa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              A diferença prática entre contratar no banco ou ter a Operaseg ao seu lado.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              O seguro só revela seu verdadeiro valor no momento exato do sinistro. Veja o que muda na sua tranquilidade:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Lado 1: No Banco ou Sozinho */}
            <div className="bg-slate-900/70 p-7 rounded-sm border border-slate-800 space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800 text-slate-400">
                <X className="w-5 h-5 text-red-500 shrink-0" />
                <h3 className="font-heading font-bold text-white text-base">
                  Contratando sozinho ou em aplicativo de banco
                </h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shrink-0 mt-1.5" />
                  <span>Pacotes pré-formatados onde você corre o risco de pagar por coberturas desnecessárias e ficar sem as essenciais.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shrink-0 mt-1.5" />
                  <span>Canais de atendimento em 0800 genéricos, com menus longos e sem contato direto com quem emitiu sua apólice.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shrink-0 mt-1.5" />
                  <span>Na hora da colisão ou pane, você gerencia laudos, orçamentos e prazos de regulação inteiramente por conta própria.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shrink-0 mt-1.5" />
                  <span>Ausência de comparação: ofertam unicamente a seguradora parceira daquela instituição.</span>
                </li>
              </ul>
            </div>

            {/* Lado 2: Com a Operaseg */}
            <div className="bg-slate-900 p-7 rounded-sm border border-red-800/60 shadow-lg space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-red-900/60 text-red-400">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <h3 className="font-heading font-bold text-white text-base">
                    Com a consultoria técnica da Operaseg
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">Diferencial</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Estudo comparativo técnico entre as seguradoras consolidadas para assegurar a melhor relação custo e cobertura.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Corretor responsável com nome, telefone fixo e WhatsApp direto sediado em Ponta Grossa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Assessoria ativa na regulação de sinistros: encaminhamos a documentação e defendemos os prazos do seu contrato.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Explicação transparente sobre valores de franquia, cláusulas de perda total e exclusões contratuais.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Deseja comparar sua apólice atual ou iniciar uma nova cotação?
            </span>
            <button
              onClick={() => onOpenQuote()}
              className="py-3 px-6 bg-red-700 hover:bg-red-800 text-white rounded-sm text-xs font-bold transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Solicitar Estudo Comparativo Sem Custo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </AnimatedSection>

      {/* 5. TELA 5 — METODOLOGIA EM 3 ETAPAS TRANSPARENTES */}
      <AnimatedSection id="simple-steps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block">
            Fluxo de Contratação
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 tracking-tight">
            Como funciona seu atendimento na Operaseg
          </h2>
          <p className="text-base text-slate-600">
            Processo direto, consultivo e focado na clareza de cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-sm border border-slate-200/90 shadow-xs space-y-3">
            <span className="text-3xl font-extrabold font-heading text-red-700 block">01</span>
            <h3 className="font-heading font-bold text-slate-950 text-lg">
              Diagnóstico do Risco
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Via WhatsApp, telefone ou formulário online, compreendemos seu perfil de uso, modelo do bem e o nível de cobertura que sua rotina realmente exige.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm border border-slate-200/90 shadow-xs space-y-3">
            <span className="text-3xl font-extrabold font-heading text-red-700 block">02</span>
            <h3 className="font-heading font-bold text-slate-950 text-lg">
              Cotação Multi-Seguradoras
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Submetemos os dados aos sistemas das seguradoras conveniadas, filtrando as propostas que aliam solidez financeira, franquia coerente e o menor valor de prêmio.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm border border-slate-200/90 shadow-xs space-y-3">
            <span className="text-3xl font-extrabold font-heading text-red-700 block">03</span>
            <h3 className="font-heading font-bold text-slate-950 text-lg">
              Emissão & Acompanhamento
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Você escolhe a melhor opção com base em explicações transparentes. Emitimos a proposta e nosso canal direto segue à disposição para qualquer acionamento ao longo da vigência.
            </p>
          </div>

        </div>
      </AnimatedSection>

      {/* 6. TELA 6 — IDENTIDADE LOCAL & ESCRITÓRIO EM PONTA GROSSA */}
      <AnimatedSection id="about-summary-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm p-8 sm:p-12 lg:p-14 border border-slate-200/90 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-red-700 block">
                  Presença Local · Ponta Grossa
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 tracking-tight">
                  Uma corretora de seguros acessível e presente no seu dia a dia.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A <strong>Operaseg Corretora de Seguros LTDA</strong> atua no Centro de Ponta Grossa com liderança técnica experiente (mais de 6 anos de atuação profissional ligada à MAPFRE Seguros). Acreditamos que contratar seguro não deve ser um ato burocrático e distante, mas uma conversa de confiança entre pessoas que valorizam o patrimônio construído.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 bg-slate-50 p-5 rounded-sm border border-slate-200/80">
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">Responsável Técnica:</span>
                  <span className="text-slate-600">{COMPANY_INFO.founderName}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">Bagagem no Setor:</span>
                  <span className="text-slate-600">{COMPANY_INFO.founderExperience}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">Endereço Físico:</span>
                  <span className="text-slate-600">{COMPANY_INFO.address}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">Horário de Atendimento:</span>
                  <span className="font-bold text-slate-900">{COMPANY_INFO.businessHours}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('sobre')}
                  className="inline-flex items-center gap-2 bg-slate-950 text-white hover:bg-slate-900 px-5 py-3 rounded-sm text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Conhecer a história da corretora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-50 border border-slate-300 px-4 py-3 rounded-sm text-xs font-semibold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-red-700" />
                  <span>Localização no Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-7 rounded-sm border border-slate-200/90 shadow-2xs space-y-4">
              <div className="w-14 h-14 rounded-sm bg-red-700 text-white flex items-center justify-center font-heading font-extrabold text-2xl shadow-xs">
                ES
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-950 text-lg">
                  {COMPANY_INFO.founderName}
                </h4>
                <p className="text-xs text-slate-500">
                  {COMPANY_INFO.founderTitle}
                </p>
                <span className="text-[11px] font-semibold text-red-700 block mt-0.5">
                  {COMPANY_INFO.founderExperience}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-red-700 pl-3">
                "Nosso compromisso é sentar com você, avaliar os riscos reais da sua rotina e oferecer a melhor proteção técnica para a sua família e o seu negócio."
              </p>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* 7. TELA 7 — FAQ ESSENCIAL */}
      <AnimatedSection id="home-faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block">
            Orientações Práticas
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-slate-950 tracking-tight">
            Dúvidas frequentes sobre a contratação
          </h2>
          <p className="text-sm text-slate-600">
            Respostas diretas e responsáveis sobre como funciona a consultoria da Operaseg.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.slice(0, 4).map((faq) => (
            <div key={faq.id} className="bg-white p-6 rounded-sm border border-slate-200/90 shadow-xs space-y-2">
              <h3 className="font-heading font-bold text-slate-950 text-base flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('duvidas')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-900 transition-colors cursor-pointer"
          >
            <span>Ver perguntas completas sobre franquias, prazos e coberturas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </AnimatedSection>

      {/* 8. TELA 8 — CTA FINAL ELEGANTE E CONVITE À CONVERSA */}
      <AnimatedSection id="final-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-sm p-8 sm:p-14 text-center space-y-7 relative overflow-hidden border border-slate-800 shadow-2xl">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block">
              Atendimento Consultivo
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Pronto para proteger o que é seu com quem realmente entende?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Converse agora com nossa equipe em Ponta Grossa. Receba seu comparativo de valores e coberturas com rapidez e sem qualquer pressão comercial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de conversar com a Operaseg sobre uma cotação personalizada.')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-sm font-bold text-base shadow-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar no WhatsApp Direto</span>
            </button>

            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-7 py-4 rounded-sm font-bold text-base transition-colors cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Solicitar Cotação Online</span>
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4 border-t border-slate-900/80">
            <span>Telefone: {COMPANY_INFO.phone}</span>
            <span>·</span>
            <span>Rua Benjamin Constant, 1 - Sala 3 - Centro, Ponta Grossa</span>
            <span>·</span>
            <span>Atendimento: 08:00 às 17:30</span>
          </div>

        </div>
      </AnimatedSection>

    </div>
  );
};
